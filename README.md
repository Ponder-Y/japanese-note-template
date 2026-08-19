# Japanese Note Template

以 React + Vite 製作的日文筆記文件站模板，版型參考現代文件站的閱讀體驗，適合統一整理文法、單字與學習筆記。

## 線上預覽

https://ponder-y.github.io/japanese-note-template/

## 已實作功能

- React SPA：切換筆記不重新載入整個頁面
- Browser History：上一頁 / 下一頁可正常切換筆記
- 桌機：最左側固定 Sidebar Rail + 可摺疊筆記目錄
- 行動版：Sidebar Drawer + Overlay
- Sidebar 底部固定「顯示漢字讀音」與「深色模式」
- Furigana 全站切換：可顯示 / 隱藏 `<ruby><rt>` 平假名
- Sidebar、Furigana、Theme 偏好使用 `localStorage` 保存
- `Ctrl + K` / `⌘ + K` 搜尋
- 搜尋鍵盤操作：↑ / ↓ / Enter / Esc
- 左側群組展開 / 收合與目前頁面 Highlight
- 右側 `On this page` + Scroll Spy
- 標題 Anchor Link
- 前一篇 / 下一篇 SPA 導覽
- 表格、提示框、例句、會話、練習題、答案展開元件
- Responsive Layout

## 技術棧

- React 19
- Vite 8
- CSS
- GitHub Actions
- GitHub Pages

## 本機啟動

```bash
npm install
npm run dev
```

Production build：

```bash
npm run build
npm run preview
```

## 新增筆記

筆記資料集中在 `src/data.js`。

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

筆記內容使用標準 HTML Ruby：

```html
<ruby>日本語<rt>にほんご</rt></ruby>
```

Sidebar 的「顯示漢字讀音」會控制整個頁面的 `rt` 顯示狀態。

## SPA Routing

目前使用 React state 搭配 Browser History API：

```text
?note=note-template
?note=condition-summary
```

使用者點擊 Sidebar、搜尋結果、Previous / Next 時，只更新 React 內容與 URL，不會重新整理 document。

## GitHub Pages

`.github/workflows/pages.yml` 會在每次 push 到 `main` 時：

```text
npm install
→ npm run build
→ 上傳 dist/
→ GitHub Pages deploy
```

Repository → Settings → Pages → Build and deployment → Source 必須設為 `GitHub Actions`。

## 設計說明

此專案是自行實作的文件站 UI，不包含參考網站的原始碼、品牌素材或文章內容。目的在於重現文件閱讀體驗與資訊架構，作為自己的筆記模板持續擴充。
