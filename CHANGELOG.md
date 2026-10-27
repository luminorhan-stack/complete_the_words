# Complete the Words 版本更新日志

## v4.7.1（2026-10-27）当前版本

- 人工难度标签同步：依据 complete the words(152)【加标签】.xlsx I 列星标，更新 138 题难度（★→简单，★★/★★★→中等，★★★★/★★★★★→困难）
- 其中 70 题难度实际变化：中等→简单 16、简单→中等 10、中等→困难 20、困难→中等 20、困难→简单 3、简单→困难 1；其余 68 题与原算法难度一致
- 同步范围含等价重复与同底变体：Bicycle History（真题-095 + 20260905A-2）、Oceanography（真题-078 + 未标注-74）、Homo Sapiens Origins（20260609A + 20260722A-2）、Louisiana Purchase（20260621B-2 + 20260912A）等
- 标签表 134 行有效标签全覆盖匹配（0 失配、0 空白）；33 个空行非题目数据
- xlsx 与 questions-data.js 双端同步；70 处实际变化行在 xlsx 第 30 列追加「v4.7.1 难度修正(人工标签)」标注

## v4.6.1（2026-09-21）

- 真题-036「South Pacific History」第 6 空修复：题干改为前缀 "T"，答案 "he"（拼接为完整词 "The"，2 格下划线）。原数据 answer="tical"/word="Ttical"/slots=5 系源表答案列错位污染（与第 7 空 political 的尾巴串位），正文 marker 本就为 2 格，与 "he" 长度吻合
- 同步清理解析词条批注：The 词条 reason 由校对警示语更新为 "art. 定冠词"（所描述的数据错误已修复）
- 全库 228 题渲染契约校验通过；浏览器实测 "T + he" 判分正确、上下文 "structures. T__ region's poli…" 连贯无歧义

## v4.7（2026-10-27）当前版本

- CW 8月/9月素材同步：167 行素材全量比对，新增 59 题（46 全新 + 13 同底文本变体），总题量 228→287
- 场次复用记录：93 条考试场次追加到库题 source（55 道库题标注）
- 素材自动修复：完整词剥前缀（约 37 空）、格数按答案校正、答案列错位残留剔除 4 行、缺失答案从库补全 1 处
- 个案修复 6 处：lation→ation、uction→duction、ction→ctive、eive→ceive、正文漏挖补空 1 处、词中单格挖空推断 1 处
- 库题修正：20260601A-2 River Deltas 空5 material→materials（v4.4 遗留的 slots 与正文下划线不一致）
- 2 行素材待人工核对：Extinction Events（正文无下划线+词形差异三处）、Paint History（第5空正文损坏）
- 全库校验：285 道 active 题渲染契约 + 下划线残留扫描通过；浏览器实测判分正常

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
