# Complete the Words · 托福填词题练习

托福阅读 Complete the Words（补全单词）题型在线练习工具。纯静态网页，无后端、无构建步骤，打开即用。

## 功能

- **题库练习**：138 道题（2026 年 1-7 月真题 116 道 + 官方 TPO 24 道，2 道存疑题暂隐藏）
- **多条件筛选**：按月份、来源、话题（生命科学 / 自然科学 / 社会科学 / 艺术）、难度（简单 / 中等 / 困难）自由组合，支持关键词检索（覆盖标题 / 正文 / 学科 / 答案词）
- **答题与判分**：单字母输入框逐格填写，提交后按空位判分，得分、已填写数、正确率一目了然
- **答案对照**：填错的字母红色标注、未填的空金色标注，反馈区附正确答案清单
- **错题解析**：逐词中文解析弹窗 + 全文翻译折叠框（TPO 题）
- **进度保存**：作答进度按题集存入浏览器 localStorage，刷新不丢
- **快捷键**：←/→ 移动、Backspace/Delete 删除、ESC 清空单词、Enter 跳下一词、双击清空、输入自动跳格
- **自定义导入**：支持导入符合格式的 XLSX 题目文件（备用入口）

## 本地运行

无需服务器，直接双击 `index.html` 即可在浏览器中使用（数据以内置 JS 文件加载，不受 file:// 跨域限制）。

也可以用任意静态服务器：

```bash
npx serve .
# 或
python3 -m http.server 8000
```

## 部署到 GitHub Pages

1. 在 GitHub 新建仓库（建议 **Private**，见下方版权说明）
2. 将本文件夹内容推送到仓库：

```bash
cd complete-the-words-practice
git init
git add .
git commit -m "init: complete the words practice"
git branch -M main
git remote add origin https://github.com/<你的用户名>/<仓库名>.git
git push -u origin main
```

3. 仓库 **Settings → Pages** → Source 选 `main` 分支 / root，保存
4. 约 1 分钟后访问 `https://<用户名>.github.io/<仓库名>/`

更新题库时，替换 `questions-data.js` 后重新 push 即可，页面无需改动。

## 文件结构

```
├── index.html          # 练习页（全部逻辑内联）
├── questions-data.js   # 题库数据库（window.QUESTION_DB，schema 1.1）
├── README.md
└── .gitignore
```

## 数据结构（questions-data.js）

每条题目记录包含：`id`（唯一主键）、`month`（月份）、`source`（来源）、`discipline` / `topic`（话题分类与主题关键词）、`difficulty`（难度评级）、`passage`（原文题干）、`blanks`（空位数组：前缀 prefix + 缺失字母 answer + 完整单词 word + 格数 slots，构建期固化，前端零解析）、`translation`（翻译）、`analysis`（逐词解析）、`tags`（检索标签）、`status`（active / draft）。

新增题目只需按相同结构追加到 `questions` 数组，并同步 `months` 统计。

## 版权说明

题库内容包含托福真题与官方 TPO 材料，仅供内部教学使用，**请勿将仓库设为 Public 公开传播**。
