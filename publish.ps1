param(
  [ValidateSet('public','private')]
  [string]$Visibility = 'public',
  [string]$Repo = 'japanese-note-template'
)

$ErrorActionPreference = 'Stop'

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
  throw '找不到 git。請先安裝 Git。'
}
if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
  throw '找不到 GitHub CLI (gh)。請先安裝並執行 gh auth login。'
}

gh auth status

if (-not (Test-Path '.git')) {
  git init
  git branch -M main
}

git add .
if (-not (git status --porcelain)) {
  Write-Host '沒有新的檔案需要 commit。'
} else {
  git commit -m 'feat: initialize reusable Japanese note template'
}

$owner = gh api user --jq .login
$fullName = "$owner/$Repo"

$exists = $false
try {
  gh repo view $fullName --json name 2>$null | Out-Null
  $exists = $true
} catch {}

if (-not $exists) {
  gh repo create $fullName --$Visibility --source . --remote origin --push
} else {
  if (-not (git remote get-url origin 2>$null)) {
    git remote add origin "https://github.com/$fullName.git"
  }
  git push -u origin main
}

Write-Host "完成：https://github.com/$fullName"
