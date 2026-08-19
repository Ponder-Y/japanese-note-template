# Japanese Note Template

一個零相依、可直接部署到 GitHub Pages 的日文筆記文件站模板。版型以現代文件站為基礎，適合把文法、單字、學習筆記統一成固定格式。

## 線上預覽

GitHub Pages：

https://ponder-y.github.io/japanese-note-template/

## 已實作功能

- 桌機三欄：左側筆記樹 / 中央文章 / 右側 `On this page`
- 行動版側欄抽屜與遮罩
- `Ctrl + K` / `⌘ + K` 搜尋
- 搜尋鍵盤操作：↑ / ↓ / Enter / Esc
- 深色 / 淺色主題，會記住使用者選擇
- 左側群組展開 / 收合與目前頁面高亮
- 右側目錄 Scroll Spy
- 標題 Anchor Link
- 前一篇 / 下一篇導覽卡
- 日文 `<ruby>` 振假名顯示
- 表格、提示框、例句、會話、練習題、答案展開元件
- Responsive layout
- 無 npm / bundler / framework，相容 GitHub Pages

## 本機啟動

因為是純靜態檔案，只要啟動任一 HTTP Server：

```bash
python -m http.server 8080
```

然後開啟 `http://localhost:8080`。

也可以使用 VS Code 的 Live Server。

## 新增筆記

筆記資料集中在 `data.js`。

### 1. 在 `notes` 新增內容

```js
'my-note': {
  title: '筆記標題',
  description: '一句摘要',
  category: 'N4 文法',
  updated: '2026/08/19',
  keywords: ['關鍵字'],
  prev: null,
  next: null,
  sections: [
    {
      id: 'core',
      title: '核心概念',
      level: 2,
      blocks: [
        { type: 'p', html: '你的內容' }
      ]
    }
  ]
}
```

### 2. 加入左側導覽

在 `groups[].items` 加入：

```js
{ slug: 'my-note', title: '筆記標題' }
```

### 3. 可用 Block 類型

- `p`：一般段落
- `heading`：第三層小標題
- `callout`：提示框
- `table`：表格
- `example`：日文例句＋中文
- `dialogue`：對話
- `practice`：練習題＋可展開答案

## Furigana

使用 HTML Ruby：

```html
<ruby>日本語<rt>にほんご</rt></ruby>
```

## GitHub Pages

此專案使用 `.github/workflows/pages.yml` 自動部署 GitHub Pages。

Repository → Settings → Pages → Build and deployment → Source 請選 `GitHub Actions`。

之後每次 push 到 `main` 都會自動重新發布。

## 設計說明

此專案是自行實作的文件站 UI，不包含參考網站的原始碼、品牌素材或文章內容。目的在於重現文件閱讀體驗與資訊架構，讓你能作為自己的筆記模板持續擴充。

## 一鍵建立 GitHub Repo（Windows PowerShell）

如果已安裝並登入 GitHub CLI：

```powershell
./publish.ps1
```

預設會建立 public repo `japanese-note-template`。如果要 private：

```powershell
./publish.ps1 -Visibility private
```
