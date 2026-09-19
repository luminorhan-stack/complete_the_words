# Complete the Words 版本更新日志

## v4.6（2026-09-16）当前版本

- 笔误更正：20260708B-2 Critical Thinking 正文 "a clrear" 更正为 "a clear"
- 语义修复：20260621A-2 Wind Formation 首句删除破损插入的 "role shaping"，恢复为 "driving horizontal air movement known as wind"
- 清除全部存疑标记：移除全库 116 题共 212 条存疑（suspect）标注，同时删除页面上的存疑徽章与黄色高亮说明框
- 保留 2 道 draft 题（真题-048、26TPO05）的"待校验"提示，待原始材料补齐后恢复
- 全库 228 题（active 226 / draft 2）逐题校验通过

## v4.5（2026-09-16）

依据人工审校清单执行 12 项修正：

- 13 处空位答案修正：包括 schoolars→scholars、advaanced→advanced、techlity→technical、abining→ability、infural→infuse、milllennia→millennia、multtiple→multiple、retional→rational、inflluence→influence 等拼写修正，空格数全部同步
- 4 处全空题改为带题干前缀：atmos+pheric、li+ke、str+ong、she+lter（题干已含前缀词，挖空结构对齐正文）
- 20260621A-2 Wind Formation 删除第 1 空（known 恢复为完整词），保留其余 10 空
- 20260630A Cognition 增补 though 空（tho[ ] 改为 tho_ _ _，9 空变 10 空）
- 20260722D Transitional Fossils 与 20260722A-3 完全重复，删除该套（总题数 229→228）
- 全库渲染契约校验通过，月份统计同步（2026 年 7 月 31→30 题）

## v4.4（2026-08-31）

- 待校验题全量处理：依据源表"完整文档"列、"解析"列人工校注词表与"阅读材料"正文，重建全部 21 道 draft 待校验题（21/21 重建成功）
- 每题按词表逐词对齐正文前缀，重建答案、空位、解析数据
- 剩余 2 道 draft（真题-048、26TPO05）不在源表 152 行内，系旧 docx / TPO 渠道遗留，需查原始文档后补录
- 库内达到 active 227 / 总 229

## v4.3（2026-08-31）

- 第二批 7 处答案修正（20260121B-2 Spix's Macaw 三处、20260121B Glacier Landforms、20260121C Pottery Craft、20260406A、20260415A Photosynthesis 的 Artifcial→Artificial）
- 20260127AM Fossils & Evolution 删除正文中多余的 "environments" 残留
- 5 道 draft 题重建为 active（20260202AM-2 Use of Fire、20260201AM-2 Logical Reasoning、20260401A-2 Early Civilizations、20260506B Atmospheric Prediction、20260510B Extraterrestrial Life），难度按四维度算法重算
- 完成第 54 套起集中出错的原因分析：题库后半段为新表新增题、无旧库答案兜底，且源表两个机器生成列（完整文档、答案列）大面积损坏所致

## v4.2（2026-08-31）

- 第一批 12 处答案修正（真题-023 Rock Layer Records 五处、真题-042 Cloud Composition 三处、真题-116 Brain Plasticity 两处、20260610A-2、真题-046）
- 真题-079 Camel Fat Storage 由 draft 恢复为 active，10 个空位数据取自旧版题库

## v4.1（2026-08-31）

- 「高级班讲义题库」152 题全量同步（实际 145 道唯一题，7 组同正文多场复用）
- 重复题按新表替换来源、解析、学科等字段，新题全部入库，总题数 229
- 来源编号统一为「2026年考试日期+套题字母」格式（如 20260121A），按考试月份细分
- 新增 draft（待校验）与 suspect（存疑）标记体系
- 难度按四维度算法重算

## GitHub 部署版（2026-09-18）

- 内容与 v4.6 完全一致（228 题）
- xlsx 库（SheetJS 0.18.5）由 CDN 在线引用改为本地打包，网站完全自包含、可离线部署
