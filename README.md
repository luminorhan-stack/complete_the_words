# Complete the Words · 托福填词题练习（v3 优化版）

托福阅读 Complete the Words（补全单词）题型在线练习工具。纯静态网页，无后端、无构建步骤，打开即用。

> **v3 优化版说明**（在本素材包内完成，原版未改动）：做题痕迹全局持久化 + 状态标记 + 错题本一键返回原题。

## 功能

- **题库练习**：138 道题（2026 年 1-7 月真题 116 道 + 官方 TPO 24 道，2 道存疑题暂隐藏）
- **多条件筛选**：按月份、来源、话题（生命科学 / 自然科学 / 社会科学 / 艺术）、难度（简单 / 中等 / 困难）自由组合，支持关键词检索（覆盖标题 / 正文 / 学科 / 答案词）
- **答题与判分**：单字母输入框逐格填写，提交后按空位判分，得分、已填写数、正确率一目了然
- **答案对照**：填错的字母红色标注、未填的空金色标注，反馈区附正确答案清单
- **错题解析**：逐词中文解析弹窗 + 全文翻译折叠框（TPO 题）
- **做题痕迹持久化（v3）**：作答记录按题目 id 全局存入 localStorage——刷新页面、关闭重开、切换筛选条件，已填字母、对错样式、上次得分全部完整保留；旧版进度首次打开自动迁移
- **状态标记（v3）**：进度点按状态着色（绿 ✓ 已答对 / 红 ✗ 有错误 / 琥珀 ◐ 进行中 / 灰 未作答，附图例）；题卡头部显示状态徽章；重开后自动恢复上次得分横幅与浏览位置；翻页自动保存/恢复痕迹
- **错题本一键返回（v3）**：错题卡片新增「↩ 返回题目」按钮，点击自动切回练习视图、重置筛选定位原题，目标单词金色脉冲高亮 + 平滑滚动 + 自动聚焦首格
- **快捷键**：←/→ 移动、Backspace/Delete 删除、ESC 清空单词、Enter 跳下一词、双击清空、输入自动跳格
- **自定义导入**：支持导入符合格式的 XLSX 题目文件（备用入口）

## 数据存储说明（v3）

| localStorage 键 | 用途 |
|---|---|
| `cwTraces_v2` | 做题痕迹库：每题的已填字母、对错样式、完成状态与得分（按题目 id 存储） |
| `wrongBook_v1` | 错题本数据（与原版共用，原版收录的错题在新版可正常跳转） |
| `cwProgress_*` | 旧版进度（首次打开自动迁移后不再写入） |

清空做题记录仅能通过「重置筛选」按钮的二次确认主动触发；刷新 / 重开 / 切换筛选均不会清除痕迹。

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
