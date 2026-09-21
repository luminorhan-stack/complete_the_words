/* TOEFL Complete the Words 题库数据库 v4.6（题目修正版·五）
 * 由 patch5.py 生成于 2026-09-16，基于 v4.5
 * 总题量 228（active 226）
 * 人工审校后续修正：clrear→clear、Wind Formation 首句语义修复、清除全部存疑标记
 */
window.QUESTION_DB = {
 "meta": {
  "schemaVersion": "1.2.3",
  "updatedAt": "2026-09-16",
  "sources": [
   "complete the words(152).xlsx（高级班讲义题库，2026-08-28 同步）",
   "questions-data.js v1.1（旧库，未匹配题保留）"
  ],
  "totalQuestions": 228,
  "activeQuestions": 226,
  "note": "152题同步：61题替换（保留旧id）+ 91题新增（id=套题码）；来源精确到场次套题码；月份按考试日期细分；v4.2 题目修正版：人工审校修正 14 空 + 真题-079 旧库恢复；v4.3：套题清单四项任务（5题答案修改+Fossils删词+5道draft重建）；v4.4：21道待校验题按源表K/V/X三列材料重建；v4.5：人工审校批量修正——13处答案修正（含前缀/空格数同步）、Wind Formation 删第1空、Cognition 增补 though 空、Transitional Fossils 去重删除20260722D；v4.6：clrear→clear、Wind Formation 首句语义修复、清除全部存疑标记（suspect flags）"
 },
 "months": [
  {
   "id": "2026年1月",
   "label": "2026年1月",
   "count": 15
  },
  {
   "id": "2026年2月",
   "label": "2026年2月",
   "count": 14
  },
  {
   "id": "2026年3月",
   "label": "2026年3月",
   "count": 3
  },
  {
   "id": "2026年4月",
   "label": "2026年4月",
   "count": 21
  },
  {
   "id": "2026年5月",
   "label": "2026年5月",
   "count": 20
  },
  {
   "id": "2026年6月",
   "label": "2026年6月",
   "count": 36
  },
  {
   "id": "2026年7月",
   "label": "2026年7月",
   "count": 30
  },
  {
   "id": "2026年8月",
   "label": "2026年8月",
   "count": 5
  },
  {
   "id": "1-7月合集",
   "label": "1-7月合集",
   "count": 60
  },
  {
   "id": "官方TPO",
   "label": "官方TPO",
   "count": 24
  }
 ],
 "questions": [
  {
   "id": "真题-036",
   "month": "2026年1月",
   "source": "20260121A OFFICIAL20260518B / 20260726C",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "South Pacific History",
   "discipline": "社会科学",
   "topic": "历史",
   "difficulty": "中等",
   "passage": "The history of the South Pacific is marked by diverse cultures and significant events. Indigenous popul_ _ _ _ _ _ developed com_ _ _ _ societies wi_ _ rich tradi_ _ _ _ _ and soc_ _ _ structures. T_ _ region's poli_ _ _ _ _ and econ_ _ _ _ landscapes exper_ _ _ _ _ _ profound cha_ _ _ _ following colonization by Europeans. Studying this history allows for a greater understanding of cultural interactions and the ongoing effects of historical events on contemporary South Pacific societies. Traditional navigation techniques using stars and ocean swells enabled remarkable voyaging achievements, while contemporary movements focus on cultural preservation, language revitalization, and addressing climate change impacts on island nations.",
   "blanks": [
    {
     "index": 0,
     "prefix": "popul",
     "underscores": 6,
     "word": "populations",
     "answer": "ations",
     "slots": 6,
     "marker": "popul_ _ _ _ _ _ ",
     "start": 98,
     "end": 115
    },
    {
     "index": 1,
     "prefix": "com",
     "underscores": 4,
     "word": "complex",
     "answer": "plex",
     "slots": 4,
     "marker": "com_ _ _ _ ",
     "start": 125,
     "end": 136
    },
    {
     "index": 2,
     "prefix": "wi",
     "underscores": 2,
     "word": "with",
     "answer": "th",
     "slots": 2,
     "marker": "wi_ _ ",
     "start": 146,
     "end": 152
    },
    {
     "index": 3,
     "prefix": "tradi",
     "underscores": 5,
     "word": "traditions",
     "answer": "tions",
     "slots": 5,
     "marker": "tradi_ _ _ _ _ ",
     "start": 157,
     "end": 172
    },
    {
     "index": 4,
     "prefix": "soc",
     "underscores": 3,
     "word": "social",
     "answer": "ial",
     "slots": 3,
     "marker": "soc_ _ _ ",
     "start": 176,
     "end": 185
    },
    {
     "index": 5,
     "prefix": "T",
     "underscores": 2,
     "word": "The",
     "answer": "he",
     "slots": 2,
     "marker": "T_ _ ",
     "start": 197,
     "end": 202
    },
    {
     "index": 6,
     "prefix": "poli",
     "underscores": 5,
     "word": "political",
     "answer": "tical",
     "slots": 5,
     "marker": "poli_ _ _ _ _ ",
     "start": 211,
     "end": 225
    },
    {
     "index": 7,
     "prefix": "econ",
     "underscores": 4,
     "word": "economic",
     "answer": "omic",
     "slots": 4,
     "marker": "econ_ _ _ _ ",
     "start": 229,
     "end": 241
    },
    {
     "index": 8,
     "prefix": "exper",
     "underscores": 6,
     "word": "experienced",
     "answer": "ienced",
     "slots": 6,
     "marker": "exper_ _ _ _ _ _ ",
     "start": 252,
     "end": 269
    },
    {
     "index": 9,
     "prefix": "cha",
     "underscores": 4,
     "word": "changes",
     "answer": "nges",
     "slots": 4,
     "marker": "cha_ _ _ _ ",
     "start": 278,
     "end": 289
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 南太平洋历史与殖民化下的社会文化变迁，围绕原住民社会、欧洲殖民及其当代影响展开。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "populations",
     "reason": "n.复←population（族群）"
    },
    {
     "word": "complex",
     "reason": "adj.复杂的"
    },
    {
     "word": "with",
     "reason": "prep.具有／带着"
    },
    {
     "word": "traditions",
     "reason": "n.复←tradition（传统）"
    },
    {
     "word": "social",
     "reason": "adj.社会的（society→social）"
    },
    {
     "word": "The",
     "reason": "art. 定冠词"
    },
    {
     "word": "political",
     "reason": "adj.政治的（politic+-al）"
    },
    {
     "word": "economic",
     "reason": "adj.经济的（economy→economic）"
    },
    {
     "word": "experienced",
     "reason": "v.过去式←experience（经历）"
    },
    {
     "word": "changes",
     "reason": "n.复←change（变化）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 Indigenous populations（主）developed（谓）complex societies（宾）；修饰：with rich traditions and social structures 介词短语作后置定语／伴随，修饰 societies。 - 句② 主干 The region's political and economic landscapes（主）experienced（谓）profound changes（宾）；修饰：following colonization by Europeans 非谓语／介词短语作状语，表时间／原因。"
    }
   ],
   "tags": [
    "社会科学",
    "历史",
    "社会变革",
    "南太平洋的历史"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-033",
   "month": "2026年1月",
   "source": "20260121A OFFICIAL20260121C",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Tiger Territory",
   "discipline": "生命科学",
   "topic": "生物",
   "difficulty": "中等",
   "passage": "Tigers are solitary animals known for their territorial behavior; males use scent markings and vocalizations to define their territories. Each ma_ _ tiger estab_ _ _ _ _ _ control ov_ _ a la_ _ _ territory span_ _ _ _ several squ_ _ _ miles a_ _ patrols t_ _ area regu_ _ _ _ _ to lo_ _ for prey and maintain dominance. This behavior helps reduce conflicts over prey, but tigers are known to fiercely defend their territory from intruders when necessary. Often hunting at night, tigers use stealth and their excellent night vision to their advantage.",
   "blanks": [
    {
     "index": 0,
     "prefix": "ma",
     "underscores": 2,
     "word": "male",
     "answer": "le",
     "slots": 2,
     "marker": "ma_ _ ",
     "start": 143,
     "end": 149
    },
    {
     "index": 1,
     "prefix": "estab",
     "underscores": 6,
     "word": "establishes",
     "answer": "lishes",
     "slots": 6,
     "marker": "estab_ _ _ _ _ _ ",
     "start": 155,
     "end": 172
    },
    {
     "index": 2,
     "prefix": "ov",
     "underscores": 2,
     "word": "over",
     "answer": "er",
     "slots": 2,
     "marker": "ov_ _ ",
     "start": 180,
     "end": 186
    },
    {
     "index": 3,
     "prefix": "la",
     "underscores": 3,
     "word": "large",
     "answer": "rge",
     "slots": 3,
     "marker": "la_ _ _ ",
     "start": 188,
     "end": 196
    },
    {
     "index": 4,
     "prefix": "span",
     "underscores": 4,
     "word": "spanning",
     "answer": "ning",
     "slots": 4,
     "marker": "span_ _ _ _ ",
     "start": 206,
     "end": 218
    },
    {
     "index": 5,
     "prefix": "squ",
     "underscores": 3,
     "word": "square",
     "answer": "are",
     "slots": 3,
     "marker": "squ_ _ _ ",
     "start": 226,
     "end": 235
    },
    {
     "index": 6,
     "prefix": "a",
     "underscores": 2,
     "word": "and",
     "answer": "nd",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 241,
     "end": 246
    },
    {
     "index": 7,
     "prefix": "t",
     "underscores": 2,
     "word": "the",
     "answer": "he",
     "slots": 2,
     "marker": "t_ _ ",
     "start": 254,
     "end": 259
    },
    {
     "index": 8,
     "prefix": "regu",
     "underscores": 5,
     "word": "regularly",
     "answer": "larly",
     "slots": 5,
     "marker": "regu_ _ _ _ _ ",
     "start": 264,
     "end": 278
    },
    {
     "index": 9,
     "prefix": "lo",
     "underscores": 2,
     "word": "look",
     "answer": "ok",
     "slots": 2,
     "marker": "lo_ _ ",
     "start": 281,
     "end": 287
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 哺乳动物、动物行为与生物生存策略（老虎的领地标记、巡视与捕食）。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "male",
     "reason": "n.雄性（雄虎）"
    },
    {
     "word": "establishes",
     "reason": "v.三单←establish（建立／确立领域）"
    },
    {
     "word": "over",
     "reason": "prep.在…之上／控制"
    },
    {
     "word": "large",
     "reason": "adj.大的"
    },
    {
     "word": "spanning",
     "reason": "v.现在分词←span（跨越）"
    },
    {
     "word": "square",
     "reason": "adj.平方的（square miles）"
    },
    {
     "word": "and",
     "reason": "conj.和／并且"
    },
    {
     "word": "the",
     "reason": "art.定冠词"
    },
    {
     "word": "regularly",
     "reason": "adv.定期地←regular"
    },
    {
     "word": "look",
     "reason": "v.寻找（look for）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 Each male tiger（主）establishes（谓）control（宾）；修饰：over a large territory 介词短语作后置定语，修饰 control；spanning several square miles 现在分词短语作后置定语，修饰 territory；to look for prey and maintain dominance 不定式短语作目的状语。"
    }
   ],
   "tags": [
    "生命科学",
    "生物",
    "动物",
    "哺乳动物"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-035",
   "month": "2026年1月",
   "source": "20260121C",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Photoperiodism",
   "discipline": "生命科学",
   "topic": "生物",
   "difficulty": "中等",
   "passage": "The reaction of plants and animals to sunlight and seasonal changes, known as photoperiodism or seasonality, is vital to many biological and behavioral processes. Photoperiods, toge_ _ _ _ with tempe_ _ _ _ _ _ changes, imp_ _ _ seasonal migr_ _ _ _ _, mating rit_ _ _ _, and hiber_ _ _ _ _ _. In ma_ _ birds, hor_ _ _ _ levels incr_ _ _ _ in spr_ _ _, which leads to an increase in singing frequency in males and mating behaviors. Photoperiodism allows plants and animals to respond to changes in the environment associated with changing seasons and varying day length.",
   "blanks": [
    {
     "index": 0,
     "prefix": "toge",
     "answer": "ther",
     "word": "together",
     "slots": 4,
     "underscores": 4,
     "marker": "toge_ _ _ _ ",
     "start": 177,
     "end": 189
    },
    {
     "index": 1,
     "prefix": "tempe",
     "answer": "rature",
     "word": "temperature",
     "slots": 6,
     "underscores": 6,
     "marker": "tempe_ _ _ _ _ _ ",
     "start": 194,
     "end": 211
    },
    {
     "index": 2,
     "prefix": "imp",
     "answer": "act",
     "word": "impact",
     "slots": 3,
     "underscores": 3,
     "marker": "imp_ _ _ ",
     "start": 220,
     "end": 229
    },
    {
     "index": 3,
     "prefix": "migr",
     "answer": "ation",
     "word": "migration",
     "slots": 5,
     "underscores": 5,
     "marker": "migr_ _ _ _ _",
     "start": 238,
     "end": 251
    },
    {
     "index": 4,
     "prefix": "rit",
     "answer": "uals",
     "word": "rituals",
     "slots": 4,
     "underscores": 4,
     "marker": "rit_ _ _ _",
     "start": 260,
     "end": 270
    },
    {
     "index": 5,
     "prefix": "hiber",
     "answer": "nation",
     "word": "hibernation",
     "slots": 6,
     "underscores": 6,
     "marker": "hiber_ _ _ _ _ _",
     "start": 276,
     "end": 292
    },
    {
     "index": 6,
     "prefix": "ma",
     "answer": "ny",
     "word": "many",
     "slots": 2,
     "underscores": 2,
     "marker": "ma_ _ ",
     "start": 297,
     "end": 303
    },
    {
     "index": 7,
     "prefix": "hor",
     "answer": "mone",
     "word": "hormone",
     "slots": 4,
     "underscores": 4,
     "marker": "hor_ _ _ _ ",
     "start": 310,
     "end": 321
    },
    {
     "index": 8,
     "prefix": "incr",
     "answer": "ease",
     "word": "increase",
     "slots": 4,
     "underscores": 4,
     "marker": "incr_ _ _ _ ",
     "start": 328,
     "end": 340
    },
    {
     "index": 9,
     "prefix": "spr",
     "answer": "ing",
     "word": "spring",
     "slots": 3,
     "underscores": 3,
     "marker": "spr_ _ _",
     "start": 343,
     "end": 351
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 动植物的光周期（季节性）响应、跨物种研究与生物行为调控。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "together",
     "reason": "adv.一起（together with）"
    },
    {
     "word": "temperature",
     "reason": "n.温度"
    },
    {
     "word": "impact",
     "reason": "v.影响"
    },
    {
     "word": "migration",
     "reason": "n.迁移←migrate"
    },
    {
     "word": "rituals",
     "reason": "n.复←ritual（仪式）"
    },
    {
     "word": "hibernation",
     "reason": "n.冬眠←hibernate"
    },
    {
     "word": "many",
     "reason": "adj./pron.许多"
    },
    {
     "word": "hormone",
     "reason": "n.激素"
    },
    {
     "word": "increase",
     "reason": "v.增加"
    },
    {
     "word": "spring",
     "reason": "n.春天"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 Photoperiods（主）impact（谓）seasonal migration, mating rituals, and hibernation（宾）；修饰：together with temperature changes 介词短语作伴随状语。 - 句② 主干 In many birds（状）, hormone levels（主）increase（谓）；修饰：in spring 介词短语作时间状语；which leads to an increase in singing frequency 定语从句，修饰前文（激素上升导致鸣唱增加）。"
    }
   ],
   "tags": [
    "生命科学",
    "生物",
    "跨物种研究",
    "动植物的光周期/季节性"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "真题-044",
   "month": "2026年1月",
   "source": "20260127AM / 20260127PM",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Supply and Demand",
   "discipline": "社会科学",
   "topic": "政治经济",
   "difficulty": "中等",
   "passage": "Supply and demand are fundamental concepts in economics because they determine the price and availability of goods or services. When the_ _ is mo_ _ demand f_ _ a pro_ _ _ _, suppliers m_ _ make i_ more expe_ _ _ _ _ to incr_ _ _ _ profits. Conve_ _ _ _ _, an exc_ _ _ supply can lead to price reductions. Market equilibrium occurs when supply matches demand, resulting in stable prices. The real world, however, is rarely as simple as this. Various factors influence these dynamics, including consumer preferences, production costs, and external events.",
   "blanks": [
    {
     "index": 0,
     "prefix": "the",
     "answer": "re",
     "word": "there",
     "slots": 2,
     "marker": "the_ _ ",
     "start": 133,
     "end": 140
    },
    {
     "index": 1,
     "prefix": "mo",
     "answer": "re",
     "word": "more",
     "slots": 2,
     "marker": "mo_ _ ",
     "start": 143,
     "end": 149
    },
    {
     "index": 2,
     "prefix": "f",
     "answer": "or",
     "word": "for",
     "slots": 2,
     "marker": "f_ _ ",
     "start": 156,
     "end": 161
    },
    {
     "index": 3,
     "prefix": "pro",
     "answer": "duct",
     "word": "product",
     "slots": 4,
     "marker": "pro_ _ _ _",
     "start": 163,
     "end": 173
    },
    {
     "index": 4,
     "prefix": "m",
     "answer": "ay",
     "word": "may",
     "slots": 2,
     "marker": "m_ _ ",
     "start": 185,
     "end": 190
    },
    {
     "index": 5,
     "prefix": "i",
     "answer": "t",
     "word": "it",
     "slots": 1,
     "marker": "i_ ",
     "start": 195,
     "end": 198
    },
    {
     "index": 6,
     "prefix": "expe",
     "answer": "nsive",
     "word": "expensive",
     "slots": 5,
     "marker": "expe_ _ _ _ _ ",
     "start": 203,
     "end": 217
    },
    {
     "index": 7,
     "prefix": "incr",
     "answer": "ease",
     "word": "increase",
     "slots": 4,
     "marker": "incr_ _ _ _ ",
     "start": 220,
     "end": 232
    },
    {
     "index": 8,
     "prefix": "Conve",
     "answer": "rsely",
     "word": "Conversely",
     "slots": 5,
     "marker": "Conve_ _ _ _ _",
     "start": 241,
     "end": 255
    },
    {
     "index": 9,
     "prefix": "exc",
     "answer": "ess",
     "word": "excess",
     "slots": 3,
     "marker": "exc_ _ _ ",
     "start": 260,
     "end": 269
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 政治经济学（供给与需求及市场均衡）。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "there",
     "reason": "pron./adv.那里（there be 存在）"
    },
    {
     "word": "more",
     "reason": "adj./adv.比较级更多的"
    },
    {
     "word": "for",
     "reason": "prep.为了"
    },
    {
     "word": "product",
     "reason": "n.产品"
    },
    {
     "word": "may",
     "reason": "modal v.可能"
    },
    {
     "word": "it",
     "reason": "pron.它"
    },
    {
     "word": "expensive",
     "reason": "adj.昂贵的"
    },
    {
     "word": "increase",
     "reason": "v.增加"
    },
    {
     "word": "Conversely",
     "reason": "adv.相反地"
    },
    {
     "word": "excess",
     "reason": "n.过剩 ⚠AB\"exccess\"错位（多 c），据前缀 exc 校正为 excess（片段列\"cess\"误）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 When there is more demand（时间状语从句：there 引导，is 系，demand 主）, suppliers（主）make（谓）it（宾）more expensive（宾补）；修饰：for a product 介词短语作定语，修饰 demand；to increase profits 不定式短语作目的状语。 - 句② 主干 Conversely, an excess supply（主）can lead（谓）to price reductions（状）；修饰：无显著长修饰成分。"
    }
   ],
   "tags": [
    "社会科学",
    "政治经济"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "真题-041",
   "month": "2026年1月",
   "source": "20260127AM / 20260127PM / 20260202NOON",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Captain Cook",
   "discipline": "社会科学",
   "topic": "历史",
   "difficulty": "中等",
   "passage": "James Cook was a British naval officer, explorer, and cartographer born in 1728. He i_ best kn_ _ _ for h_ _ three voy_ _ _ _ across t_ _ Pacific Oc_ _ _, during wh_ _ _ he meticu_ _ _ _ _ _ mapped coast_ _ _ _ _ and coll_ _ _ _ _ data on astronomy, natural history, and oceanography. Cook is the first European to circumnavigate New Zealand and make contact with the Hawaiian Islands. He is also notable for implementing health measures aboard his ships, such as dietary changes to prevent the disease scurvy.",
   "blanks": [
    {
     "index": 0,
     "prefix": "i",
     "answer": "s",
     "word": "is",
     "slots": 1,
     "underscores": 1,
     "marker": "i_ ",
     "start": 84,
     "end": 87
    },
    {
     "index": 1,
     "prefix": "kn",
     "answer": "own",
     "word": "known",
     "slots": 3,
     "underscores": 3,
     "marker": "kn_ _ _ ",
     "start": 92,
     "end": 100
    },
    {
     "index": 2,
     "prefix": "h",
     "answer": "is",
     "word": "his",
     "slots": 2,
     "underscores": 2,
     "marker": "h_ _ ",
     "start": 104,
     "end": 109
    },
    {
     "index": 3,
     "prefix": "voy",
     "answer": "ages",
     "word": "voyages",
     "slots": 4,
     "underscores": 4,
     "marker": "voy_ _ _ _ ",
     "start": 115,
     "end": 126
    },
    {
     "index": 4,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "underscores": 2,
     "marker": "t_ _ ",
     "start": 133,
     "end": 138
    },
    {
     "index": 5,
     "prefix": "Oc",
     "answer": "ean",
     "word": "Ocean",
     "slots": 3,
     "underscores": 3,
     "marker": "Oc_ _ _",
     "start": 146,
     "end": 153
    },
    {
     "index": 6,
     "prefix": "wh",
     "answer": "ich",
     "word": "which",
     "slots": 3,
     "underscores": 3,
     "marker": "wh_ _ _ ",
     "start": 162,
     "end": 170
    },
    {
     "index": 7,
     "prefix": "meticu",
     "answer": "lously",
     "word": "meticulously",
     "slots": 6,
     "underscores": 6,
     "marker": "meticu_ _ _ _ _ _ ",
     "start": 173,
     "end": 191
    },
    {
     "index": 8,
     "prefix": "coast",
     "answer": "lines",
     "word": "coastlines",
     "slots": 5,
     "underscores": 5,
     "marker": "coast_ _ _ _ _ ",
     "start": 198,
     "end": 213
    },
    {
     "index": 9,
     "prefix": "coll",
     "answer": "ected",
     "word": "collected",
     "slots": 5,
     "underscores": 5,
     "marker": "coll_ _ _ _ _ ",
     "start": 217,
     "end": 231
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 文化史与历史（库克船长的探险、航海与制图）。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "is",
     "reason": "v.三单←be（是）"
    },
    {
     "word": "known",
     "reason": "v.过去分词←know（known for 以…闻名）"
    },
    {
     "word": "his",
     "reason": "pron.他的"
    },
    {
     "word": "voyages",
     "reason": "n.复←voyage（航行）"
    },
    {
     "word": "the",
     "reason": "art.定冠词"
    },
    {
     "word": "Ocean",
     "reason": "n.海洋"
    },
    {
     "word": "which",
     "reason": "pron.引导定语从句"
    },
    {
     "word": "meticulously",
     "reason": "adv.一丝不苟地←meticulous"
    },
    {
     "word": "coastlines",
     "reason": "n.复←coastline（海岸线）"
    },
    {
     "word": "collected",
     "reason": "v.过去式←collect（收集）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 He（主）is（系）known（表）；修饰：for his three voyages across the Pacific Ocean 介词短语作原因状语，across the Pacific Ocean 介词短语作后置定语修饰 voyages；during which he meticulously mapped coastlines and collected data 定语从句，on astronomy, natural history, and oceanography 介词短语作后置定语修饰 data。"
    }
   ],
   "tags": [
    "社会科学",
    "历史",
    "文化史"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "真题-045",
   "month": "2026年1月",
   "source": "20260127PM",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Mass Extinction",
   "discipline": "自然科学",
   "topic": "地质学",
   "difficulty": "中等",
   "passage": "Mass extinctions have periodically reshaped the diversity of life on Earth, representing significant biological and ecological shifts. The most famous event, the Cretaceous-Paleogene extinction, occurred approximately 66 million years ago and led to the demise of the dinosaurs. Large-scale los_ _ _ of spe_ _ _ _ are of_ _ _ caused b_ catastrophic eve_ _ _ such a_ volcanic erup_ _ _ _ _, asteroid imp_ _ _ _, and cli_ _ _ _ change. T_ _ resulting damage to biodiversity disrupts ecosystems and alters evolutionary trajectories. Studying past extinctions provides insights into the resilience and adaptability of life, helping scientists predict and mitigate future biodiversity loss.",
   "blanks": [
    {
     "index": 0,
     "prefix": "los",
     "answer": "ses",
     "word": "losses",
     "slots": 3,
     "underscores": 3,
     "marker": "los_ _ _ ",
     "start": 291,
     "end": 300
    },
    {
     "index": 1,
     "prefix": "spe",
     "answer": "cies",
     "word": "species",
     "slots": 4,
     "underscores": 4,
     "marker": "spe_ _ _ _ ",
     "start": 303,
     "end": 314
    },
    {
     "index": 2,
     "prefix": "of",
     "answer": "ten",
     "word": "often",
     "slots": 3,
     "underscores": 3,
     "marker": "of_ _ _ ",
     "start": 318,
     "end": 326
    },
    {
     "index": 3,
     "prefix": "b",
     "answer": "y",
     "word": "by",
     "slots": 1,
     "underscores": 1,
     "marker": "b_ ",
     "start": 333,
     "end": 336
    },
    {
     "index": 4,
     "prefix": "eve",
     "answer": "nts",
     "word": "events",
     "slots": 3,
     "underscores": 3,
     "marker": "eve_ _ _ ",
     "start": 349,
     "end": 358
    },
    {
     "index": 5,
     "prefix": "a",
     "answer": "s",
     "word": "as",
     "slots": 1,
     "underscores": 1,
     "marker": "a_ ",
     "start": 363,
     "end": 366
    },
    {
     "index": 6,
     "prefix": "erup",
     "answer": "tions",
     "word": "eruptions",
     "slots": 5,
     "underscores": 5,
     "marker": "erup_ _ _ _ _",
     "start": 375,
     "end": 388
    },
    {
     "index": 7,
     "prefix": "imp",
     "answer": "acts",
     "word": "impacts",
     "slots": 4,
     "underscores": 4,
     "marker": "imp_ _ _ _",
     "start": 399,
     "end": 409
    },
    {
     "index": 8,
     "prefix": "cli",
     "answer": "mate",
     "word": "climate",
     "slots": 4,
     "underscores": 4,
     "marker": "cli_ _ _ _ ",
     "start": 415,
     "end": 426
    },
    {
     "index": 9,
     "prefix": "T",
     "answer": "he",
     "word": "The",
     "slots": 2,
     "underscores": 2,
     "marker": "T_ _ ",
     "start": 434,
     "end": 439
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 大规模物种灭绝、地质灾害与地质学（灾变事件与生物多样性）。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "losses",
     "reason": "n.复←loss（损失）"
    },
    {
     "word": "species",
     "reason": "n.复（单复同形）←species（物种）"
    },
    {
     "word": "often",
     "reason": "adv.经常"
    },
    {
     "word": "by",
     "reason": "prep.被／由"
    },
    {
     "word": "events",
     "reason": "n.复←event（事件）"
    },
    {
     "word": "as",
     "reason": "conj./prep.如同（such as）"
    },
    {
     "word": "eruptions",
     "reason": "n.复←eruption（喷发）"
    },
    {
     "word": "impacts",
     "reason": "n.复←impact（撞击／影响）"
    },
    {
     "word": "climate",
     "reason": "n.气候"
    },
    {
     "word": "The",
     "reason": "art.定冠词"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 Large-scale losses of species（主）are（系）often caused（表，被动）；修饰：by catastrophic events 介词短语作施动者；such as volcanic eruptions, asteroid impacts, and climate change 介词短语作举例状语。 - 句② 主干 The resulting damage to biodiversity（主）disrupts（谓）ecosystems（宾）and alters（谓）evolutionary trajectories（宾）；修饰：to biodiversity 介词短语作后置定语，修饰 damage。"
    }
   ],
   "tags": [
    "自然科学",
    "地质学",
    "地质灾害",
    "大规模物种灭绝"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "真题-069",
   "month": "2026年1月",
   "source": "20260128NOON",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Crop Rotation",
   "discipline": "社会科学",
   "topic": "历史",
   "difficulty": "中等",
   "passage": "Crop rotation is a farming technique that involves growing a series of different types of crops in the same area across a sequence of seasons. Different crops use different nutrients from the soil, so rotating them prevents the soil from becoming depleted. Th_ _ method he_ _ _ to red_ _ _ pests a_ _ diseases; i_ also decr_ _ _ _ _ the ne_ _ for chem_ _ _ _ fertilizers, prom_ _ _ _ _ sustainable agric_ _ _ _ _ _. Farmers use this practice to improve crop yields and maintain healthy soil.",
   "blanks": [
    {
     "index": 0,
     "prefix": "Th",
     "answer": "is",
     "word": "This",
     "slots": 2,
     "underscores": 2,
     "marker": "Th_ _ ",
     "start": 257,
     "end": 263
    },
    {
     "index": 1,
     "prefix": "he",
     "answer": "lps",
     "word": "helps",
     "slots": 3,
     "underscores": 3,
     "marker": "he_ _ _ ",
     "start": 270,
     "end": 278
    },
    {
     "index": 2,
     "prefix": "red",
     "answer": "uce",
     "word": "reduce",
     "slots": 3,
     "underscores": 3,
     "marker": "red_ _ _ ",
     "start": 281,
     "end": 290
    },
    {
     "index": 3,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 296,
     "end": 301
    },
    {
     "index": 4,
     "prefix": "i",
     "answer": "t",
     "word": "it",
     "slots": 1,
     "underscores": 1,
     "marker": "i_ ",
     "start": 311,
     "end": 314
    },
    {
     "index": 5,
     "prefix": "decr",
     "answer": "eases",
     "word": "decreases",
     "slots": 5,
     "underscores": 5,
     "marker": "decr_ _ _ _ _ ",
     "start": 319,
     "end": 333
    },
    {
     "index": 6,
     "prefix": "ne",
     "answer": "ed",
     "word": "need",
     "slots": 2,
     "underscores": 2,
     "marker": "ne_ _ ",
     "start": 337,
     "end": 343
    },
    {
     "index": 7,
     "prefix": "chem",
     "answer": "ical",
     "word": "chemical",
     "slots": 4,
     "underscores": 4,
     "marker": "chem_ _ _ _ ",
     "start": 347,
     "end": 359
    },
    {
     "index": 8,
     "prefix": "prom",
     "answer": "oting",
     "word": "promoting",
     "slots": 5,
     "underscores": 5,
     "marker": "prom_ _ _ _ _ ",
     "start": 372,
     "end": 386
    },
    {
     "index": 9,
     "prefix": "agric",
     "answer": "ulture",
     "word": "agriculture",
     "slots": 6,
     "underscores": 6,
     "marker": "agric_ _ _ _ _ _",
     "start": 398,
     "end": 414
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 轮作技术、农业与农业史（可持续农业实践）。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "This",
     "reason": "pron.这（指代 method）"
    },
    {
     "word": "helps",
     "reason": "v.三单←help（有助于）"
    },
    {
     "word": "reduce",
     "reason": "v.减少"
    },
    {
     "word": "and",
     "reason": "conj.和／并且"
    },
    {
     "word": "it",
     "reason": "pron.它"
    },
    {
     "word": "decreases",
     "reason": "v.三单←decrease（降低）"
    },
    {
     "word": "need",
     "reason": "n.需求"
    },
    {
     "word": "chemical",
     "reason": "adj.化学的"
    },
    {
     "word": "promoting",
     "reason": "v.现在分词←promote（促进）"
    },
    {
     "word": "agriculture",
     "reason": "n.农业"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 This method（主）helps（谓）to reduce pests and diseases（宾）；修饰：无显著长修饰成分。 - 句② 主干 it（主）decreases（谓）the need（宾）；修饰：for chemical fertilizers 介词短语作后置定语，修饰 need；promoting sustainable agriculture 现在分词短语作结果状语。"
    }
   ],
   "tags": [
    "社会科学",
    "历史",
    "农业",
    "轮作技术"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "真题-046",
   "month": "2026年1月",
   "source": "20260128PM",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Species Extinction",
   "discipline": "生命科学",
   "topic": "生物",
   "difficulty": "简单",
   "passage": "Extinctions are a natural part of Earth's history, marking the end of species that die out and paving the way for new ones. These inci_ _ _ _ _ can b_ caused b_ varying fac_ _ _ _, such a_ environmental cha_ _ _ _, habitat lo_ _, and catast_ _ _ _ _ _ events. Stud_ _ _ _ extinctions he_ _ _ scientists understand biodiversity and the resilience of ecosystems. Notable extinctions, like the one that wiped out most of the dinosaurs, offer insights into how life on Earth can dramatically shift. Modern conservation efforts aim to prevent human-induced extinctions and preserve remaining species.",
   "blanks": [
    {
     "index": 0,
     "prefix": "inci",
     "answer": "dents",
     "word": "incidents",
     "slots": 5,
     "underscores": 5,
     "marker": "inci_ _ _ _ _ ",
     "start": 130,
     "end": 144
    },
    {
     "index": 1,
     "prefix": "b",
     "answer": "e",
     "word": "be",
     "slots": 1,
     "underscores": 1,
     "marker": "b_ ",
     "start": 148,
     "end": 151
    },
    {
     "index": 2,
     "prefix": "b",
     "answer": "y",
     "word": "by",
     "slots": 1,
     "underscores": 1,
     "marker": "b_ ",
     "start": 158,
     "end": 161
    },
    {
     "index": 3,
     "prefix": "fac",
     "answer": "tors",
     "word": "factors",
     "slots": 4,
     "underscores": 4,
     "marker": "fac_ _ _ _",
     "start": 169,
     "end": 179
    },
    {
     "index": 4,
     "prefix": "a",
     "answer": "s",
     "word": "as",
     "slots": 1,
     "underscores": 1,
     "marker": "a_ ",
     "start": 186,
     "end": 189
    },
    {
     "index": 5,
     "prefix": "cha",
     "answer": "nges",
     "word": "changes",
     "slots": 4,
     "underscores": 4,
     "marker": "cha_ _ _ _",
     "start": 203,
     "end": 213
    },
    {
     "index": 6,
     "prefix": "lo",
     "answer": "ss",
     "word": "loss",
     "slots": 2,
     "underscores": 2,
     "marker": "lo_ _",
     "start": 223,
     "end": 228
    },
    {
     "index": 7,
     "prefix": "catast",
     "answer": "rophic",
     "word": "catastrophic",
     "slots": 6,
     "underscores": 6,
     "marker": "catast_ _ _ _ _ _ ",
     "start": 234,
     "end": 252
    },
    {
     "index": 8,
     "prefix": "Stud",
     "answer": "ying",
     "word": "Studying",
     "slots": 4,
     "underscores": 4,
     "marker": "Stud_ _ _ _ ",
     "start": 260,
     "end": 272
    },
    {
     "index": 9,
     "prefix": "he",
     "answer": "lps",
     "word": "helps",
     "slots": 3,
     "underscores": 3,
     "marker": "he_ _ _ ",
     "start": 284,
     "end": 292
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 物种灭绝的影响、跨物种研究与生物多样性的关联，以及现代保护努力。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "incidents",
     "reason": "n.复←incident（事件）⚠greedy 误为\"inciident\"，据 ab_text 应为 incidents"
    },
    {
     "word": "be",
     "reason": "v.原形（系动词，被）"
    },
    {
     "word": "by",
     "reason": "prep.被／由"
    },
    {
     "word": "factors",
     "reason": "n.复←factor（因素）"
    },
    {
     "word": "as",
     "reason": "prep.作为／例如"
    },
    {
     "word": "changes",
     "reason": "n.复←change（变化）"
    },
    {
     "word": "loss",
     "reason": "n.原形←lose（损失）"
    },
    {
     "word": "catastrophic",
     "reason": "adj.灾难性的（catastrophe→catastrophic）"
    },
    {
     "word": "Studying",
     "reason": "v.动名词←study（研究）"
    },
    {
     "word": "helps",
     "reason": "v.三单←help（帮助）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 These incidents（主）can be caused（谓）by varying factors, such as environmental changes, habitat loss, and catastrophic events（施事／介词短语）; 修饰：such as environmental changes, habitat loss, and catastrophic events 介词短语作举例，修饰 factors。 - 句② 主干 Studying extinctions（主）helps（谓）scientists（宾）; 修饰：understand biodiversity and the resilience of ecosystems 不定式短语作宾语补足语，of ecosystems 介词短语作后置定语修饰 resilience。"
    }
   ],
   "tags": [
    "生命科学",
    "生物",
    "跨物种研究",
    "物种灭绝的影响"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "真题-050",
   "month": "2026年1月",
   "source": "20260128PM",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Subsea Stone Wall",
   "discipline": "社会科学",
   "topic": "考古",
   "difficulty": "简单",
   "passage": "Archaeologists typically study human history and prehistory through the excavation of artifacts buried underground. Sometimes, how_ _ _ _ , they disc_ _ _ _ artifacts subm_ _ _ _ _ underwater. A stone wall w_ _ found ben_ _ _ _ the Baltic Sea i_ 2012 th_ _ dates t_ over 10,000 ye_ _ _ ago. Resea_ _ _ _ _ _ believe it was used by hunter-gatherer societies to guide and trap reindeer. The wall consists of approximately 1,670 stones and is considered one of the oldest documented hunting structures made by humans.",
   "blanks": [
    {
     "index": 0,
     "prefix": "how",
     "underscores": 4,
     "word": "however",
     "answer": "ever",
     "slots": 4,
     "marker": "how_ _ _ _ ",
     "start": 127,
     "end": 138
    },
    {
     "index": 1,
     "prefix": "disc",
     "underscores": 4,
     "word": "discover",
     "answer": "over",
     "slots": 4,
     "marker": "disc_ _ _ _ ",
     "start": 145,
     "end": 157
    },
    {
     "index": 2,
     "prefix": "subm",
     "underscores": 5,
     "word": "submerged",
     "answer": "erged",
     "slots": 5,
     "marker": "subm_ _ _ _ _ ",
     "start": 167,
     "end": 181
    },
    {
     "index": 3,
     "prefix": "w",
     "underscores": 2,
     "word": "was",
     "answer": "as",
     "slots": 2,
     "marker": "w_ _ ",
     "start": 206,
     "end": 211
    },
    {
     "index": 4,
     "prefix": "ben",
     "underscores": 4,
     "word": "beneath",
     "answer": "eath",
     "slots": 4,
     "marker": "ben_ _ _ _ ",
     "start": 217,
     "end": 228
    },
    {
     "index": 5,
     "prefix": "i",
     "underscores": 1,
     "word": "in",
     "answer": "n",
     "slots": 1,
     "marker": "i_ ",
     "start": 243,
     "end": 246
    },
    {
     "index": 6,
     "prefix": "th",
     "underscores": 2,
     "word": "that",
     "answer": "at",
     "slots": 2,
     "marker": "th_ _ ",
     "start": 251,
     "end": 257
    },
    {
     "index": 7,
     "prefix": "t",
     "underscores": 1,
     "word": "to",
     "answer": "o",
     "slots": 1,
     "marker": "t_ ",
     "start": 263,
     "end": 266
    },
    {
     "index": 8,
     "prefix": "ye",
     "underscores": 3,
     "word": "years",
     "answer": "ars",
     "slots": 3,
     "marker": "ye_ _ _ ",
     "start": 278,
     "end": 286
    },
    {
     "index": 9,
     "prefix": "Resea",
     "underscores": 6,
     "word": "Researchers",
     "answer": "rchers",
     "slots": 6,
     "marker": "Resea_ _ _ _ _ _ ",
     "start": 291,
     "end": 308
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 波罗的海附近水下石墙的史前考古发现，及其作为狩猎结构的用途与意义。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "however",
     "reason": "adv.然而"
    },
    {
     "word": "discover",
     "reason": "v.原形←discover（发现）"
    },
    {
     "word": "submerged",
     "reason": "v.过去分词←submerge（淹没）"
    },
    {
     "word": "was",
     "reason": "v.过去式←be（系动词）"
    },
    {
     "word": "beneath",
     "reason": "prep.在…之下"
    },
    {
     "word": "in",
     "reason": "prep.在"
    },
    {
     "word": "that",
     "reason": "pron.关系代词（引导定语从句）"
    },
    {
     "word": "to",
     "reason": "prep.到／至"
    },
    {
     "word": "years",
     "reason": "n.复←year（年）"
    },
    {
     "word": "Researchers",
     "reason": "n.复←researcher（研究者）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 they（主）discover（谓）artifacts（宾）; 修饰：submerged underwater 过去分词短语作后置定语修饰 artifacts，however 副词作插入语表转折。 - 句② 主干 A stone wall（主）was found（谓）; 修饰：beneath the Baltic Sea 介词短语作地点状语，in 2012 介词短语作时间状语，that dates to over 10,000 years ago 定语从句修饰 wall。 - 句③ 主干 Researchers（主）believe（谓）[it was used...]（宾语从句）; 修饰：to guide and trap reindeer 不定式短语作目的状语，by hunter-gatherer societies 介词短语作施事。"
    }
   ],
   "tags": [
    "社会科学",
    "考古",
    "史前考古学",
    "波罗的海附近的石墙考古"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-055",
   "month": "2026年2月",
   "source": "20260201PM / 20260201AM02 / 20260201AM03",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Global Warming",
   "discipline": "自然科学",
   "topic": "环境科学",
   "difficulty": "困难",
   "passage": "Global temperatures and weather patterns are experiencing notable shifts, which scientific research strongly associates with human-related factors. Activities su_ _ as t_ _ use o_ fossil fu_ _ _ , changes i_ land u_ _, and industrial produ_ _ _ _ _ contribute t_ the accumu_ _ _ _ _ _ of green_ _ _ _ _ gases in the atmosphere. These gases retain heat, gradually increasing the Earth's average temperature. If emissions continue at current levels, potential outcomes may include more frequent extreme weather events, rising sea levels, and disruptions to ecosystems. Experts emphasize that timely and coordinated efforts are essential to reduce risks and promote long-term environmental stability.",
   "blanks": [
    {
     "index": 0,
     "prefix": "su",
     "answer": "ch",
     "word": "such",
     "slots": 2,
     "underscores": 2,
     "marker": "su_ _ ",
     "start": 159,
     "end": 165
    },
    {
     "index": 1,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "underscores": 2,
     "marker": "t_ _ ",
     "start": 168,
     "end": 173
    },
    {
     "index": 2,
     "prefix": "o",
     "answer": "f",
     "word": "of",
     "slots": 1,
     "underscores": 1,
     "marker": "o_ ",
     "start": 177,
     "end": 180
    },
    {
     "index": 3,
     "prefix": "fu",
     "answer": "els",
     "word": "fuels",
     "slots": 3,
     "underscores": 3,
     "marker": "fu_ _ _ ",
     "start": 187,
     "end": 195
    },
    {
     "index": 4,
     "prefix": "i",
     "answer": "n",
     "word": "in",
     "slots": 1,
     "underscores": 1,
     "marker": "i_ ",
     "start": 205,
     "end": 208
    },
    {
     "index": 5,
     "prefix": "u",
     "answer": "se",
     "word": "use",
     "slots": 2,
     "underscores": 2,
     "marker": "u_ _",
     "start": 213,
     "end": 217
    },
    {
     "index": 6,
     "prefix": "produ",
     "answer": "ction",
     "word": "production",
     "slots": 5,
     "underscores": 5,
     "marker": "produ_ _ _ _ _ ",
     "start": 234,
     "end": 249
    },
    {
     "index": 7,
     "prefix": "t",
     "answer": "o",
     "word": "to",
     "slots": 1,
     "underscores": 1,
     "marker": "t_ ",
     "start": 260,
     "end": 263
    },
    {
     "index": 8,
     "prefix": "accumu",
     "answer": "lation",
     "word": "accumulation",
     "slots": 6,
     "underscores": 6,
     "marker": "accumu_ _ _ _ _ _ ",
     "start": 267,
     "end": 285
    },
    {
     "index": 9,
     "prefix": "green",
     "answer": "house",
     "word": "greenhouse",
     "slots": 5,
     "underscores": 5,
     "marker": "green_ _ _ _ _ ",
     "start": 288,
     "end": 303
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 全球变暖的成因与危害，以及温室气体在大气中的累积与环境后果。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "such",
     "reason": "pron.诸如（用于 such as）"
    },
    {
     "word": "the",
     "reason": "art.定冠词"
    },
    {
     "word": "of",
     "reason": "prep.…的"
    },
    {
     "word": "fuels",
     "reason": "n.复←fuel（燃料）"
    },
    {
     "word": "in",
     "reason": "prep.在…中"
    },
    {
     "word": "use",
     "reason": "n.原形（使用）"
    },
    {
     "word": "production",
     "reason": "n.原形←produce（生产）"
    },
    {
     "word": "to",
     "reason": "prep.到／表对象"
    },
    {
     "word": "accumulation",
     "reason": "n.原形←accumulate（积累）"
    },
    {
     "word": "greenhouse",
     "reason": "n.原形（温室，修饰 gases）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 Activities（主）contribute（谓）to the accumulation（宾）; 修饰：such as the use of fossil fuels, changes in land use, and industrial production 介词短语作举例修饰 Activities，of fossil fuels 后置定语修饰 use，in land use 后置定语修饰 changes，of greenhouse gases 后置定语修饰 accumulation，in the atmosphere 介词短语作地点状语。"
    }
   ],
   "tags": [
    "自然科学",
    "环境科学",
    "气候气象",
    "全球变暖危害"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "真题-056",
   "month": "2026年2月",
   "source": "20260201PM / 20260726C",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Medieval Europe",
   "discipline": "社会科学",
   "topic": "历史",
   "difficulty": "中等",
   "passage": "Medieval European history encompasses the time period from the fall of the Roman Empire to the onset of the Renaissance. This era lasted around 900 years and is also called the Middle Ages. Dur_ _ _ these cent_ _ _ _ _ , feudalism w_ _ the domi_ _ _ _ social stru_ _ _ _ _, shaping t_ _ political, econ_ _ _ _ , and cult_ _ _ _ landscape. Da_ _ _ life a_ _ governance were strongly influenced by the Catholic Church. Studying medieval history reveals the foundations of modern European society and the profound changes that occurred over time. It also helps students understand how people lived, worked, and believed during this important time in history.",
   "blanks": [
    {
     "index": 0,
     "prefix": "Dur",
     "answer": "ing",
     "word": "During",
     "slots": 3,
     "underscores": 3,
     "marker": "Dur_ _ _ ",
     "start": 190,
     "end": 199
    },
    {
     "index": 1,
     "prefix": "cent",
     "answer": "uries",
     "word": "centuries",
     "slots": 5,
     "underscores": 5,
     "marker": "cent_ _ _ _ _ ",
     "start": 205,
     "end": 219
    },
    {
     "index": 2,
     "prefix": "w",
     "answer": "as",
     "word": "was",
     "slots": 2,
     "underscores": 2,
     "marker": "w_ _ ",
     "start": 231,
     "end": 236
    },
    {
     "index": 3,
     "prefix": "domi",
     "answer": "nant",
     "word": "dominant",
     "slots": 4,
     "underscores": 4,
     "marker": "domi_ _ _ _ ",
     "start": 240,
     "end": 252
    },
    {
     "index": 4,
     "prefix": "stru",
     "answer": "cture",
     "word": "structure",
     "slots": 5,
     "underscores": 5,
     "marker": "stru_ _ _ _ _",
     "start": 259,
     "end": 272
    },
    {
     "index": 5,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "underscores": 2,
     "marker": "t_ _ ",
     "start": 282,
     "end": 287
    },
    {
     "index": 6,
     "prefix": "econ",
     "answer": "omic",
     "word": "economic",
     "slots": 4,
     "underscores": 4,
     "marker": "econ_ _ _ _ ",
     "start": 298,
     "end": 310
    },
    {
     "index": 7,
     "prefix": "cult",
     "answer": "ural",
     "word": "cultural",
     "slots": 4,
     "underscores": 4,
     "marker": "cult_ _ _ _ ",
     "start": 316,
     "end": 328
    },
    {
     "index": 8,
     "prefix": "Da",
     "answer": "ily",
     "word": "Daily",
     "slots": 3,
     "underscores": 3,
     "marker": "Da_ _ _ ",
     "start": 339,
     "end": 347
    },
    {
     "index": 9,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 352,
     "end": 357
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 中世纪欧洲历史、封建制度的社会结构，以及教会对日常与治理的影响。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "During",
     "reason": "prep.在…期间"
    },
    {
     "word": "centuries",
     "reason": "n.复←century（世纪）"
    },
    {
     "word": "was",
     "reason": "v.过去式←be（系动词）"
    },
    {
     "word": "dominant",
     "reason": "adj.主导的（dominate→dominant）"
    },
    {
     "word": "structure",
     "reason": "n.原形（结构）"
    },
    {
     "word": "the",
     "reason": "art.定冠词"
    },
    {
     "word": "economic",
     "reason": "adj.经济的（economy→economic）"
    },
    {
     "word": "cultural",
     "reason": "adj.文化的（culture→cultural）"
    },
    {
     "word": "Daily",
     "reason": "adj.日常的（daily）"
    },
    {
     "word": "and",
     "reason": "conj.和"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 feudalism（主）was（谓）the dominant social structure（宾）; 修饰：During these centuries 介词短语作时间状语，shaping the political, economic, and cultural landscape 现在分词短语作伴随／结果状语。 - 句② 主干 Daily life and governance（主）were influenced（谓）; 修饰：by the Catholic Church 介词短语作施事状语。"
    }
   ],
   "tags": [
    "社会科学",
    "历史",
    "文化史",
    "中世纪欧洲历史"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "真题-052",
   "month": "2026年2月",
   "source": "20260202AM",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Academic Success",
   "discipline": "社会科学",
   "topic": "教育",
   "difficulty": "困难",
   "passage": "What are some foundational skills for academic success? Critical thin_ _ _ _ allows stud_ _ _ _ to appr_ _ _ _ problems systema_ _ _ _ _ _ _, analyze infor_ _ _ _ _ _ , and ma_ _ connections bet_ _ _ _ ideas. Al_ _ important a_ _ soft skills li_ _ time management and social skills. Time management is helpful for balancing studies, extracurricular activities, and personal life in an efficient manner. Social skills are good predictors of academic success because those who communicate effectively can form positive relationships with their peers and professors.",
   "blanks": [
    {
     "index": 0,
     "prefix": "thin",
     "answer": "king",
     "word": "thinking",
     "slots": 4,
     "underscores": 4,
     "marker": "thin_ _ _ _ ",
     "start": 65,
     "end": 77
    },
    {
     "index": 1,
     "prefix": "stud",
     "answer": "ents",
     "word": "students",
     "slots": 4,
     "underscores": 4,
     "marker": "stud_ _ _ _ ",
     "start": 84,
     "end": 96
    },
    {
     "index": 2,
     "prefix": "appr",
     "answer": "oach",
     "word": "approach",
     "slots": 4,
     "underscores": 4,
     "marker": "appr_ _ _ _ ",
     "start": 99,
     "end": 111
    },
    {
     "index": 3,
     "prefix": "systema",
     "answer": "tically",
     "word": "systematically",
     "slots": 7,
     "underscores": 7,
     "marker": "systema_ _ _ _ _ _ _",
     "start": 120,
     "end": 140
    },
    {
     "index": 4,
     "prefix": "infor",
     "answer": "mation",
     "word": "information",
     "slots": 6,
     "underscores": 6,
     "marker": "infor_ _ _ _ _ _ ",
     "start": 150,
     "end": 167
    },
    {
     "index": 5,
     "prefix": "ma",
     "answer": "ke",
     "word": "make",
     "slots": 2,
     "underscores": 2,
     "marker": "ma_ _ ",
     "start": 173,
     "end": 179
    },
    {
     "index": 6,
     "prefix": "bet",
     "answer": "ween",
     "word": "between",
     "slots": 4,
     "underscores": 4,
     "marker": "bet_ _ _ _ ",
     "start": 191,
     "end": 202
    },
    {
     "index": 7,
     "prefix": "Al",
     "answer": "so",
     "word": "Also",
     "slots": 2,
     "underscores": 2,
     "marker": "Al_ _ ",
     "start": 209,
     "end": 215
    },
    {
     "index": 8,
     "prefix": "a",
     "answer": "re",
     "word": "are",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 225,
     "end": 230
    },
    {
     "index": 9,
     "prefix": "li",
     "answer": "ke",
     "word": "like",
     "slots": 2,
     "underscores": 2,
     "marker": "li_ _ ",
     "start": 242,
     "end": 248
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 学业成功所需的基础技能：批判性思维、软技能与高效学习。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "thinking",
     "reason": "n.原形←think（思维／思考）"
    },
    {
     "word": "students",
     "reason": "n.复←student（学生）"
    },
    {
     "word": "approach",
     "reason": "v.原形←approach（处理）"
    },
    {
     "word": "systematically",
     "reason": "adv.系统地（systematic→systematically）"
    },
    {
     "word": "information",
     "reason": "n.原形←inform（信息）"
    },
    {
     "word": "make",
     "reason": "v.原形←make（使／建立）"
    },
    {
     "word": "between",
     "reason": "prep.在…之间"
    },
    {
     "word": "Also",
     "reason": "adv.也"
    },
    {
     "word": "are",
     "reason": "v.复数←be（系动词）"
    },
    {
     "word": "like",
     "reason": "prep.像／如"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 Critical thinking（主）allows（谓）students（宾）; 修饰：to approach problems systematically, analyze information, and make connections between ideas 三个不定式短语作宾语补足语，between ideas 介词短语作后置定语修饰 connections。 - 句② 主干 soft skills（主）are（谓）important（表）; 修饰：like time management and social skills 介词短语作后置定语修饰 skills。"
    }
   ],
   "tags": [
    "社会科学",
    "教育",
    "教育理论",
    "学业成功的一些基本技能"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "真题-089",
   "month": "2026年2月",
   "source": "20260201AM",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Mushroom Structure",
   "discipline": "生命科学",
   "topic": "生物",
   "difficulty": "简单",
   "passage": "Mushrooms are made up of two main parts: the mycelium and the fruiting body. The mycelium i_ long-lived, wh_ _ _ the fruiting body app_ _ _ _ only wh_ _ conditions a_ _ ideal f_ _ reproduction (li_ _ after ra_ _ ). Usually under_ _ _ _ _ _ , the mycelium cons_ _ _ _ of a network of thread-like structures that absorb nutrients from the soil. The fruiting body is above ground and responsible for producing and spreading spores. These spores are released into the air to help the mushroom reproduce.",
   "blanks": [
    {
     "index": 0,
     "prefix": "i",
     "answer": "s",
     "word": "is",
     "slots": 1,
     "underscores": 1,
     "marker": "i_ ",
     "start": 90,
     "end": 93
    },
    {
     "index": 1,
     "prefix": "wh",
     "answer": "ile",
     "word": "while",
     "slots": 3,
     "underscores": 3,
     "marker": "wh_ _ _ ",
     "start": 105,
     "end": 113
    },
    {
     "index": 2,
     "prefix": "app",
     "answer": "ears",
     "word": "appears",
     "slots": 4,
     "underscores": 4,
     "marker": "app_ _ _ _ ",
     "start": 131,
     "end": 142
    },
    {
     "index": 3,
     "prefix": "wh",
     "answer": "en",
     "word": "when",
     "slots": 2,
     "underscores": 2,
     "marker": "wh_ _ ",
     "start": 147,
     "end": 153
    },
    {
     "index": 4,
     "prefix": "a",
     "answer": "re",
     "word": "are",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 164,
     "end": 169
    },
    {
     "index": 5,
     "prefix": "f",
     "answer": "or",
     "word": "for",
     "slots": 2,
     "underscores": 2,
     "marker": "f_ _ ",
     "start": 175,
     "end": 180
    },
    {
     "index": 6,
     "prefix": "li",
     "answer": "ke",
     "word": "like",
     "slots": 2,
     "underscores": 2,
     "marker": "li_ _ ",
     "start": 194,
     "end": 200
    },
    {
     "index": 7,
     "prefix": "ra",
     "answer": "in",
     "word": "rain",
     "slots": 2,
     "underscores": 2,
     "marker": "ra_ _ ",
     "start": 206,
     "end": 212
    },
    {
     "index": 8,
     "prefix": "under",
     "answer": "ground",
     "word": "underground",
     "slots": 6,
     "underscores": 6,
     "marker": "under_ _ _ _ _ _ ",
     "start": 223,
     "end": 240
    },
    {
     "index": 9,
     "prefix": "cons",
     "answer": "ists",
     "word": "consists",
     "slots": 4,
     "underscores": 4,
     "marker": "cons_ _ _ _ ",
     "start": 255,
     "end": 267
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 蘑菇（担子菌门）的菌丝与子实体结构，及其营养吸收与繁殖方式。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "is",
     "reason": "v.三单←be（系动词）"
    },
    {
     "word": "while",
     "reason": "conj.而／然而"
    },
    {
     "word": "appears",
     "reason": "v.三单←appear（出现）"
    },
    {
     "word": "when",
     "reason": "conj.当…时"
    },
    {
     "word": "are",
     "reason": "v.复数←be（系动词）"
    },
    {
     "word": "for",
     "reason": "prep.为了"
    },
    {
     "word": "like",
     "reason": "prep.像／如"
    },
    {
     "word": "rain",
     "reason": "n.原形（雨）"
    },
    {
     "word": "underground",
     "reason": "adv.在地下（under+ground）"
    },
    {
     "word": "consists",
     "reason": "v.三单←consist（由…组成）⚠greedy 误为\"consist\"，缺\"s\"，据语境校正"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 The mycelium（主）is（谓）long-lived（表）; 修饰：while the fruiting body appears only when conditions are ideal for reproduction 状语从句（对比），when conditions are ideal for reproduction 时间状语从句，for reproduction 介词短语作目的，like after rain 介词短语作举例。 - 句② 主干 the mycelium（主）consists（谓）[of a network]（介词短语）; 修饰：Usually underground 副词＋介词作状态／地点状语，of a network of thread-like structures 介词短语作后置定语，that absorb nutrients from the soil 定语从句修饰 structures，from the soil 介词短语作来源。"
    }
   ],
   "tags": [
    "生命科学",
    "生物",
    "真菌",
    "担子菌门"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "真题-096",
   "month": "2026年2月",
   "source": "20260201AM",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Public Health",
   "discipline": "社会科学",
   "topic": "历史",
   "difficulty": "困难",
   "passage": "The introduction of sanitation practices in urban areas during the nineteenth century significantly improved public health. Innovations such as sew_ _ _ systems a_ _ clean wa_ _ _ supplies deve_ _ _ _ _ from t_ _ growing awar_ _ _ _ _ of the conne_ _ _ _ _ between po_ _ hygiene and ill_ _ _ _ , and reduced the spr_ _ _ of infectious diseases like cholera and typhoid. Public health campaigns, supported by local governments and medical professionals, educated communities on the importance of hygiene. These efforts were instrumental in decreasing mortality rates and enhancing quality of life.",
   "blanks": [
    {
     "index": 0,
     "prefix": "sew",
     "underscores": 3,
     "word": "sewage",
     "answer": "age",
     "slots": 3,
     "marker": "sew_ _ _ ",
     "start": 144,
     "end": 153
    },
    {
     "index": 1,
     "prefix": "a",
     "underscores": 2,
     "word": "and",
     "answer": "nd",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 161,
     "end": 166
    },
    {
     "index": 2,
     "prefix": "wa",
     "underscores": 3,
     "word": "water",
     "answer": "ter",
     "slots": 3,
     "marker": "wa_ _ _ ",
     "start": 172,
     "end": 180
    },
    {
     "index": 3,
     "prefix": "deve",
     "underscores": 5,
     "word": "developed",
     "answer": "loped",
     "slots": 5,
     "marker": "deve_ _ _ _ _ ",
     "start": 189,
     "end": 203
    },
    {
     "index": 4,
     "prefix": "t",
     "underscores": 2,
     "word": "the",
     "answer": "he",
     "slots": 2,
     "marker": "t_ _ ",
     "start": 208,
     "end": 213
    },
    {
     "index": 5,
     "prefix": "awar",
     "underscores": 5,
     "word": "awareness",
     "answer": "eness",
     "slots": 5,
     "marker": "awar_ _ _ _ _ ",
     "start": 221,
     "end": 235
    },
    {
     "index": 6,
     "prefix": "conne",
     "underscores": 5,
     "word": "connection",
     "answer": "ction",
     "slots": 5,
     "marker": "conne_ _ _ _ _ ",
     "start": 242,
     "end": 257
    },
    {
     "index": 7,
     "prefix": "po",
     "underscores": 2,
     "word": "poor",
     "answer": "or",
     "slots": 2,
     "marker": "po_ _ ",
     "start": 265,
     "end": 271
    },
    {
     "index": 8,
     "prefix": "ill",
     "underscores": 4,
     "word": "illness",
     "answer": "ness",
     "slots": 4,
     "marker": "ill_ _ _ _ ",
     "start": 283,
     "end": 294
    },
    {
     "index": 9,
     "prefix": "spr",
     "underscores": 3,
     "word": "spread",
     "answer": "ead",
     "slots": 3,
     "marker": "spr_ _ _ ",
     "start": 312,
     "end": 321
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 19 世纪城市公共卫生运动、卫生设施创新及其对死亡率与生活质量的影响。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "sewage",
     "reason": "n.原形（污水）"
    },
    {
     "word": "and",
     "reason": "conj.和"
    },
    {
     "word": "water",
     "reason": "n.原形（水）"
    },
    {
     "word": "developed",
     "reason": "v.过去式←develop（发展／形成）"
    },
    {
     "word": "the",
     "reason": "art.定冠词"
    },
    {
     "word": "awareness",
     "reason": "n.原形←aware（意识）"
    },
    {
     "word": "connection",
     "reason": "n.原形←connect（联系）"
    },
    {
     "word": "poor",
     "reason": "adj.差的（poor）"
    },
    {
     "word": "illness",
     "reason": "n.原形←ill（疾病）"
    },
    {
     "word": "spread",
     "reason": "n.原形（传播）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 Innovations（主）developed（谓）and reduced（谓）the spread（宾）; 修饰：such as sewage systems and clean water supplies 介词短语作举例修饰 Innovations，from the growing awareness of the connection between poor hygiene and illness 介词短语作来源状语，of the connection / between poor hygiene and illness 后置定语链修饰 awareness，of infectious diseases like cholera and typhoid 后置定语修饰 spread。"
    }
   ],
   "tags": [
    "社会科学",
    "历史",
    "社会变革",
    "19世纪公共卫生运动"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-042",
   "month": "2026年2月",
   "source": "20260202NOON",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Cloud Composition",
   "discipline": "自然科学",
   "topic": "环境科学",
   "difficulty": "简单",
   "passage": "Although there are many different types of clouds, they are all composed of the same basic substance. Ea_ _ cloud cons_ _ _ _ of ti_ _ drops o_ water o_ ice, wh_ _ _ are usu_ _ _ _ too sm_ _ _ to b_ seen wi_ _ the naked eye. These particles cluster together and form an invisible gas known as water vapor. Some of this vapor attaches to microscopic bits of dust or ice floating in the atmosphere. When enough of these elements combine, they create a visible cloud.",
   "blanks": [
    {
     "index": 0,
     "prefix": "Ea",
     "underscores": 2,
     "word": "Each",
     "answer": "ch",
     "slots": 2,
     "marker": "Ea_ _ ",
     "start": 102,
     "end": 108
    },
    {
     "index": 1,
     "prefix": "cons",
     "underscores": 4,
     "word": "consists",
     "answer": "ists",
     "slots": 4,
     "marker": "cons_ _ _ _ ",
     "start": 114,
     "end": 126
    },
    {
     "index": 2,
     "prefix": "ti",
     "underscores": 2,
     "word": "tiny",
     "answer": "ny",
     "slots": 2,
     "marker": "ti_ _ ",
     "start": 129,
     "end": 135
    },
    {
     "index": 3,
     "prefix": "o",
     "underscores": 1,
     "word": "of",
     "answer": "f",
     "slots": 1,
     "marker": "o_ ",
     "start": 141,
     "end": 144
    },
    {
     "index": 4,
     "prefix": "o",
     "underscores": 1,
     "word": "or",
     "answer": "r",
     "slots": 1,
     "marker": "o_ ",
     "start": 150,
     "end": 153
    },
    {
     "index": 5,
     "prefix": "wh",
     "underscores": 3,
     "word": "which",
     "answer": "ich",
     "slots": 3,
     "marker": "wh_ _ _ ",
     "start": 158,
     "end": 166
    },
    {
     "index": 6,
     "prefix": "usu",
     "underscores": 4,
     "word": "usually",
     "answer": "ally",
     "slots": 4,
     "marker": "usu_ _ _ _ ",
     "start": 170,
     "end": 181
    },
    {
     "index": 7,
     "prefix": "sm",
     "underscores": 3,
     "word": "small",
     "answer": "all",
     "slots": 3,
     "marker": "sm_ _ _ ",
     "start": 185,
     "end": 193
    },
    {
     "index": 8,
     "prefix": "b",
     "underscores": 1,
     "word": "be",
     "answer": "e",
     "slots": 1,
     "marker": "b_ ",
     "start": 196,
     "end": 199
    },
    {
     "index": 9,
     "prefix": "wi",
     "underscores": 2,
     "word": "with",
     "answer": "th",
     "slots": 2,
     "marker": "wi_ _ ",
     "start": 204,
     "end": 210
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 云的基本组成（水滴或冰晶）、其肉眼不可见性及成云过程。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "Each",
     "reason": "pron.每个"
    },
    {
     "word": "consists",
     "reason": "v.三单←consist（由…组成）⚠greedy 误为\"consist\"，缺\"s\"，据语境校正"
    },
    {
     "word": "tiny",
     "reason": "adj.微小的（tiny）"
    },
    {
     "word": "of",
     "reason": "prep.…的"
    },
    {
     "word": "or",
     "reason": "conj.或"
    },
    {
     "word": "which",
     "reason": "pron.关系代词（引导定语从句）"
    },
    {
     "word": "usually",
     "reason": "adv.通常（usual→usually）"
    },
    {
     "word": "small",
     "reason": "adj.小的（small）"
    },
    {
     "word": "be",
     "reason": "v.原形←be（系动词）"
    },
    {
     "word": "with",
     "reason": "prep.用／和"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 Each cloud（主）consists（谓）[of tiny drops of water or ice]（介词短语）; 修饰：of tiny drops of water or ice 介词短语作后置定语修饰 cloud，which are usually too small to be seen with the naked eye 定语从句修饰 drops，to be seen with the naked eye 不定式被动作结果状语，with the naked eye 介词短语作方式状语。"
    }
   ],
   "tags": [
    "自然科学",
    "环境科学",
    "气候气象",
    "云团的组成"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-040",
   "month": "2026年2月",
   "source": "20260202NOON",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Reusable Rockets",
   "discipline": "社会科学",
   "topic": "科技",
   "difficulty": "困难",
   "passage": "Space exploration has advanced significantly with the development of rockets that can be reused. Traditional rockets were discarded after a single use, but new designs allow them to return to Earth and be refurbished for multiple missions. This innov_ _ _ _ _ reduces t_ _ cost assoc_ _ _ _ _ with sp_ _ _ travel a_ _ increases freq_ _ _ _ _ of miss_ _ _ _. Companies li_ _ SpaceX ha_ _ pioneered reus_ _ _ _ rocket technology, successfully launching and landing rockets. These advancements pave the way for more ambitious projects, including potential manned missions to Mars and beyond.",
   "blanks": [
    {
     "index": 0,
     "prefix": "innov",
     "answer": "ation",
     "word": "innovation",
     "slots": 5,
     "underscores": 5,
     "marker": "innov_ _ _ _ _ ",
     "start": 245,
     "end": 260
    },
    {
     "index": 1,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "underscores": 2,
     "marker": "t_ _ ",
     "start": 268,
     "end": 273
    },
    {
     "index": 2,
     "prefix": "assoc",
     "answer": "iated",
     "word": "associated",
     "slots": 5,
     "underscores": 5,
     "marker": "assoc_ _ _ _ _ ",
     "start": 278,
     "end": 293
    },
    {
     "index": 3,
     "prefix": "sp",
     "answer": "ace",
     "word": "space",
     "slots": 3,
     "underscores": 3,
     "marker": "sp_ _ _ ",
     "start": 298,
     "end": 306
    },
    {
     "index": 4,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 313,
     "end": 318
    },
    {
     "index": 5,
     "prefix": "freq",
     "answer": "uency",
     "word": "frequency",
     "slots": 5,
     "underscores": 5,
     "marker": "freq_ _ _ _ _ ",
     "start": 328,
     "end": 342
    },
    {
     "index": 6,
     "prefix": "miss",
     "answer": "ions",
     "word": "missions",
     "slots": 4,
     "underscores": 4,
     "marker": "miss_ _ _ _",
     "start": 345,
     "end": 356
    },
    {
     "index": 7,
     "prefix": "li",
     "answer": "ke",
     "word": "like",
     "slots": 2,
     "underscores": 2,
     "marker": "li_ _ ",
     "start": 368,
     "end": 374
    },
    {
     "index": 8,
     "prefix": "ha",
     "answer": "ve",
     "word": "have",
     "slots": 2,
     "underscores": 2,
     "marker": "ha_ _ ",
     "start": 381,
     "end": 387
    },
    {
     "index": 9,
     "prefix": "reus",
     "answer": "able",
     "word": "reusable",
     "slots": 4,
     "underscores": 4,
     "marker": "reus_ _ _ _ ",
     "start": 397,
     "end": 409
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 可重复使用火箭的技术发展、其对太空旅行成本与任务频率的改善，及商业航天推动。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "innovation",
     "reason": "n.原形←innovate（创新）"
    },
    {
     "word": "the",
     "reason": "art.定冠词"
    },
    {
     "word": "associated",
     "reason": "v.过去分词←associate（关联）"
    },
    {
     "word": "space",
     "reason": "n.原形（太空）"
    },
    {
     "word": "and",
     "reason": "conj.和"
    },
    {
     "word": "frequency",
     "reason": "n.原形←frequent（频率）"
    },
    {
     "word": "missions",
     "reason": "n.复←mission（任务）"
    },
    {
     "word": "like",
     "reason": "prep.像／如"
    },
    {
     "word": "have",
     "reason": "v.三单←have（助动词）"
    },
    {
     "word": "reusable",
     "reason": "adj.可重复使用的（reuse→reusable）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 This innovation（主）reduces（谓）the cost（宾）and increases（谓）frequency（宾）; 修饰：associated with space travel 过去分词短语作后置定语修饰 cost，with space travel 介词短语作伴随，of missions 后置定语修饰 frequency。 - 句② 主干 Companies（主）have pioneered（谓）reusable rocket technology（宾）; 修饰：like SpaceX 介词短语作举例修饰 Companies，successfully launching and landing rockets 现在分词短语作伴随／结果状语。"
    }
   ],
   "tags": [
    "社会科学",
    "科技",
    "航天科技",
    "可重复使用火箭的发展"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "真题-098",
   "month": "2026年3月",
   "source": "山猫2026真题23",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Greek Theater",
   "discipline": "艺术",
   "topic": "戏剧",
   "difficulty": "简单",
   "passage": "Theater has been an integral part of human culture for centuries, providing a medium for storytelling and artistic expression. Many feat_ _ _ _ of Anc_ _ _ _ Greek theater a_ _ still fo_ _ _ in mod_ _ _ theater, such a_ wearing ma_ _ _ and us_ _ _ a chorus. Dur_ _ _ the Renaissance, theater flour_ _ _ _ _ as playwrights, like Shakespeare, created enduring works. Modern theater continues to evolve, incorporating technology and diverse narratives. The communal experience of live performance remains a powerful way to explore human emotions and societal issues.",
   "blanks": [
    {
     "index": 0,
     "prefix": "feat",
     "underscores": 4,
     "word": "features",
     "answer": "ures",
     "slots": 4,
     "marker": "feat_ _ _ _ ",
     "start": 132,
     "end": 144
    },
    {
     "index": 1,
     "prefix": "Anc",
     "underscores": 4,
     "word": "Ancient",
     "answer": "ient",
     "slots": 4,
     "marker": "Anc_ _ _ _ ",
     "start": 147,
     "end": 158
    },
    {
     "index": 2,
     "prefix": "a",
     "underscores": 2,
     "word": "are",
     "answer": "re",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 172,
     "end": 177
    },
    {
     "index": 3,
     "prefix": "fo",
     "underscores": 3,
     "word": "found",
     "answer": "und",
     "slots": 3,
     "marker": "fo_ _ _ ",
     "start": 183,
     "end": 191
    },
    {
     "index": 4,
     "prefix": "mod",
     "underscores": 3,
     "word": "modern",
     "answer": "ern",
     "slots": 3,
     "marker": "mod_ _ _ ",
     "start": 194,
     "end": 203
    },
    {
     "index": 5,
     "prefix": "a",
     "underscores": 1,
     "word": "as",
     "answer": "s",
     "slots": 1,
     "marker": "a_ ",
     "start": 217,
     "end": 220
    },
    {
     "index": 6,
     "prefix": "ma",
     "underscores": 3,
     "word": "masks",
     "answer": "sks",
     "slots": 3,
     "marker": "ma_ _ _ ",
     "start": 228,
     "end": 236
    },
    {
     "index": 7,
     "prefix": "us",
     "underscores": 3,
     "word": "using",
     "answer": "ing",
     "slots": 3,
     "marker": "us_ _ _ ",
     "start": 240,
     "end": 248
    },
    {
     "index": 8,
     "prefix": "Dur",
     "underscores": 3,
     "word": "During",
     "answer": "ing",
     "slots": 3,
     "marker": "Dur_ _ _ ",
     "start": 258,
     "end": 267
    },
    {
     "index": 9,
     "prefix": "flour",
     "underscores": 5,
     "word": "flourished",
     "answer": "ished",
     "slots": 5,
     "marker": "flour_ _ _ _ _ ",
     "start": 292,
     "end": 307
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 古希腊戏剧的特征与影响、现代戏剧对古典元素的继承、文艺复兴时期戏剧的繁荣。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "features",
     "reason": "n.复←feature（特征）"
    },
    {
     "word": "Ancient",
     "reason": "adj.古代的（Ancient Greek 古希腊的）"
    },
    {
     "word": "are",
     "reason": "v.复←be（是）"
    },
    {
     "word": "found",
     "reason": "v.过去式←find（被发现；be found）"
    },
    {
     "word": "modern",
     "reason": "adj.现代的"
    },
    {
     "word": "as",
     "reason": "prep.作为／例如（such as）"
    },
    {
     "word": "masks",
     "reason": "n.复←mask（面具）"
    },
    {
     "word": "using",
     "reason": "v.动名词←use（使用）"
    },
    {
     "word": "During",
     "reason": "prep.在…期间"
    },
    {
     "word": "flourished",
     "reason": "v.过去式←flourish（繁荣）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 features（主）are found（谓）；修饰：of Ancient Greek theater 介词短语作后置定语修饰 features，in modern theater 介词短语作状语，such as wearing masks and using a chorus 介词短语作后置定语举例。 - 句② 主干 theater（主）flourished（谓）；修饰：During the Renaissance 介词短语作时间状语，as playwrights created enduring works 状语从句（as 表同时），like Shakespeare 介词短语作插入举例。"
    }
   ],
   "tags": [
    "艺术",
    "戏剧",
    "古希腊戏剧",
    "古希腊戏剧影响"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-090",
   "month": "2026年3月",
   "source": "山猫2026真题23",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Archaeology",
   "discipline": "社会科学",
   "topic": "考古学",
   "difficulty": "困难",
   "passage": "Archaeology is the study of past human cultures through the excavation and analysis of artifacts, structures, and other physical remains. This disci_ _ _ _ _ helps unc_ _ _ _ the da_ _ _ lives, bel_ _ _ _ , and techno_ _ _ _ _ _ of anc_ _ _ _ civilizations. Archaeo_ _ _ _ _ _ _ often wo_ _ at dig si_ _ _ , carefully unear_ _ _ _ _ and documenting finds. Techniques such as carbon dating and soil analysis provide information about the age and context of discoveries. Collaborative efforts with historians and anthropologists enrich our understanding of past civilizations, revealing information about their religious practices, the tools they used, and many other aspects of how they lived.",
   "blanks": [
    {
     "index": 0,
     "prefix": "disci",
     "underscores": 5,
     "word": "discipline",
     "answer": "pline",
     "slots": 5,
     "marker": "disci_ _ _ _ _ ",
     "start": 143,
     "end": 158
    },
    {
     "index": 1,
     "prefix": "unc",
     "underscores": 4,
     "word": "uncover",
     "answer": "over",
     "slots": 4,
     "marker": "unc_ _ _ _ ",
     "start": 164,
     "end": 175
    },
    {
     "index": 2,
     "prefix": "da",
     "underscores": 3,
     "word": "daily",
     "answer": "ily",
     "slots": 3,
     "marker": "da_ _ _ ",
     "start": 179,
     "end": 187
    },
    {
     "index": 3,
     "prefix": "bel",
     "underscores": 4,
     "word": "beliefs",
     "answer": "iefs",
     "slots": 4,
     "marker": "bel_ _ _ _ ",
     "start": 194,
     "end": 205
    },
    {
     "index": 4,
     "prefix": "techno",
     "underscores": 6,
     "word": "technologies",
     "answer": "logies",
     "slots": 6,
     "marker": "techno_ _ _ _ _ _ ",
     "start": 211,
     "end": 229
    },
    {
     "index": 5,
     "prefix": "anc",
     "underscores": 4,
     "word": "ancient",
     "answer": "ient",
     "slots": 4,
     "marker": "anc_ _ _ _ ",
     "start": 232,
     "end": 243
    },
    {
     "index": 6,
     "prefix": "Archaeo",
     "underscores": 7,
     "word": "Archaeologists",
     "answer": "logists",
     "slots": 7,
     "marker": "Archaeo_ _ _ _ _ _ _ ",
     "start": 258,
     "end": 279
    },
    {
     "index": 7,
     "prefix": "wo",
     "underscores": 2,
     "word": "work",
     "answer": "rk",
     "slots": 2,
     "marker": "wo_ _ ",
     "start": 285,
     "end": 291
    },
    {
     "index": 8,
     "prefix": "si",
     "underscores": 3,
     "word": "sites",
     "answer": "tes",
     "slots": 3,
     "marker": "si_ _ _ ",
     "start": 298,
     "end": 306
    },
    {
     "index": 9,
     "prefix": "unear",
     "underscores": 5,
     "word": "unearthing",
     "answer": "thing",
     "slots": 5,
     "marker": "unear_ _ _ _ _ ",
     "start": 318,
     "end": 333
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 考古学的定义与研究方法、古代文明的日常生活与信仰、考古学家在遗址中的发掘工作。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "discipline",
     "reason": "n.学科"
    },
    {
     "word": "uncover",
     "reason": "v.原形（揭示；发掘）"
    },
    {
     "word": "daily",
     "reason": "adj.日常的（daily lives 日常生活）"
    },
    {
     "word": "beliefs",
     "reason": "n.复←belief（信仰）"
    },
    {
     "word": "technologies",
     "reason": "n.复←technology（技术）"
    },
    {
     "word": "ancient",
     "reason": "adj.古代的"
    },
    {
     "word": "Archaeologists",
     "reason": "n.复←Archaeologist（考古学家）"
    },
    {
     "word": "work",
     "reason": "v.原形（工作）"
    },
    {
     "word": "sites",
     "reason": "n.复←site（遗址）"
    },
    {
     "word": "unearthing",
     "reason": "v.动名词←unearth（发掘）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 discipline（主）helps uncover（谓）the daily lives, beliefs, and technologies（宾）；修饰：of ancient civilizations 介词短语作后置定语修饰 lives/beliefs/technologies。 - 句② 主干 Archaeologists（主）work（谓）；修饰：at dig sites 介词短语作地点状语，carefully unearthing and documenting finds 现在分词短语作伴随状语。"
    }
   ],
   "tags": [
    "社会科学",
    "考古学",
    "考古理论",
    "考古学介绍"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-094",
   "month": "2026年3月",
   "source": "山猫2026真题23",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Earth's Axial Tilt",
   "discipline": "自然科学",
   "topic": "天文学",
   "difficulty": "简单",
   "passage": "Our planet's axis is tilted at an angle of about 23.5 degrees as it orbits the Sun. A_ a res_ _ _ , the amo_ _ _ of sun_ _ _ _ _ that hi_ _ different pa_ _ _ of Ea_ _ _ is n_ _ all t_ _ same, crea_ _ _ _ seasons. When the Sun shines directly on a region, that region tends to have higher temperatures and longer days. The changing seasons affect many aspects of life, including agriculture, wildlife behavior, and human activities.",
   "blanks": [
    {
     "index": 0,
     "prefix": "A",
     "underscores": 1,
     "word": "As",
     "answer": "s",
     "slots": 1,
     "marker": "A_ ",
     "start": 84,
     "end": 87
    },
    {
     "index": 1,
     "prefix": "res",
     "underscores": 3,
     "word": "result",
     "answer": "ult",
     "slots": 3,
     "marker": "res_ _ _ ",
     "start": 89,
     "end": 98
    },
    {
     "index": 2,
     "prefix": "amo",
     "underscores": 3,
     "word": "amount",
     "answer": "unt",
     "slots": 3,
     "marker": "amo_ _ _ ",
     "start": 104,
     "end": 113
    },
    {
     "index": 3,
     "prefix": "sun",
     "underscores": 5,
     "word": "sunlight",
     "answer": "light",
     "slots": 5,
     "marker": "sun_ _ _ _ _ ",
     "start": 116,
     "end": 129
    },
    {
     "index": 4,
     "prefix": "hi",
     "underscores": 2,
     "word": "hits",
     "answer": "ts",
     "slots": 2,
     "marker": "hi_ _ ",
     "start": 134,
     "end": 140
    },
    {
     "index": 5,
     "prefix": "pa",
     "underscores": 3,
     "word": "parts",
     "answer": "rts",
     "slots": 3,
     "marker": "pa_ _ _ ",
     "start": 150,
     "end": 158
    },
    {
     "index": 6,
     "prefix": "Ea",
     "underscores": 3,
     "word": "Earth",
     "answer": "rth",
     "slots": 3,
     "marker": "Ea_ _ _ ",
     "start": 161,
     "end": 169
    },
    {
     "index": 7,
     "prefix": "n",
     "underscores": 2,
     "word": "not",
     "answer": "ot",
     "slots": 2,
     "marker": "n_ _ ",
     "start": 172,
     "end": 177
    },
    {
     "index": 8,
     "prefix": "t",
     "underscores": 2,
     "word": "the",
     "answer": "he",
     "slots": 2,
     "marker": "t_ _ ",
     "start": 181,
     "end": 186
    },
    {
     "index": 9,
     "prefix": "crea",
     "underscores": 4,
     "word": "creating",
     "answer": "ting",
     "slots": 4,
     "marker": "crea_ _ _ _ ",
     "start": 192,
     "end": 204
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 地球轴倾角、阳光照射不均与季节的形成、地轴倾斜对气候的影响。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "As",
     "reason": "prep./conj.作为／由于（As a result 因此）"
    },
    {
     "word": "result",
     "reason": "n.结果（as a result）"
    },
    {
     "word": "amount",
     "reason": "n.数量（the amount of）"
    },
    {
     "word": "sunlight",
     "reason": "n.阳光（sun+light）"
    },
    {
     "word": "hits",
     "reason": "v.三单←hit（照射到）"
    },
    {
     "word": "parts",
     "reason": "n.复←part（地区／部分）"
    },
    {
     "word": "Earth",
     "reason": "n.地球"
    },
    {
     "word": "not",
     "reason": "adv.不"
    },
    {
     "word": "the",
     "reason": "art.定冠词"
    },
    {
     "word": "creating",
     "reason": "v.动名词←create（创造；此处表结果）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 the amount of sunlight（主）is（谓）not all the same（表语）；修饰：As a result 介词短语作状语，that hits different parts of Earth 定语从句修饰 sunlight，of Earth 介词短语作后置定语修饰 parts，creating seasons 现在分词短语作结果状语。"
    }
   ],
   "tags": [
    "自然科学",
    "天文学",
    "天体",
    "地球轴线"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-108",
   "month": "2026年4月",
   "source": "山猫2026真题24",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Rotational Farming",
   "discipline": "社会科学",
   "topic": "应用社科",
   "difficulty": "困难",
   "passage": "Crop rotation is an essential practice in sustainable agriculture. Crop rotation involves the sequential plan_ _ _ _ of diff_ _ _ _ _ crops i_ the sa_ _ area acr_ _ _ various sea_ _ _ _ . This tech_ _ _ _ _ significantly impr_ _ _ _ soil hea_ _ _ by divers_ _ _ _ _ _ the nutrients extracted from, and returned to, the soil. When one crop depletes certain nutrients, another crop can replenish them, creating a balanced ecosystem. This method also helps in controlling pests and diseases, as rotating crops disrupt their reproductive cycles, reducing their prevalence without the need for chemical pesticides.",
   "blanks": [
    {
     "index": 0,
     "prefix": "plan",
     "underscores": 4,
     "word": "planning",
     "answer": "ning",
     "slots": 4,
     "marker": "plan_ _ _ _ ",
     "start": 105,
     "end": 117
    },
    {
     "index": 1,
     "prefix": "diff",
     "underscores": 5,
     "word": "different",
     "answer": "erent",
     "slots": 5,
     "marker": "diff_ _ _ _ _ ",
     "start": 120,
     "end": 134
    },
    {
     "index": 2,
     "prefix": "i",
     "underscores": 1,
     "word": "in",
     "answer": "n",
     "slots": 1,
     "marker": "i_ ",
     "start": 140,
     "end": 143
    },
    {
     "index": 3,
     "prefix": "sa",
     "underscores": 2,
     "word": "same",
     "answer": "me",
     "slots": 2,
     "marker": "sa_ _ ",
     "start": 147,
     "end": 153
    },
    {
     "index": 4,
     "prefix": "acr",
     "underscores": 3,
     "word": "across",
     "answer": "oss",
     "slots": 3,
     "marker": "acr_ _ _ ",
     "start": 158,
     "end": 167
    },
    {
     "index": 5,
     "prefix": "sea",
     "underscores": 4,
     "word": "seasons",
     "answer": "sons",
     "slots": 4,
     "marker": "sea_ _ _ _ ",
     "start": 175,
     "end": 186
    },
    {
     "index": 6,
     "prefix": "tech",
     "underscores": 5,
     "word": "technique",
     "answer": "nique",
     "slots": 5,
     "marker": "tech_ _ _ _ _ ",
     "start": 193,
     "end": 207
    },
    {
     "index": 7,
     "prefix": "impr",
     "underscores": 4,
     "word": "improves",
     "answer": "oves",
     "slots": 4,
     "marker": "impr_ _ _ _ ",
     "start": 221,
     "end": 233
    },
    {
     "index": 8,
     "prefix": "hea",
     "underscores": 3,
     "word": "health",
     "answer": "lth",
     "slots": 3,
     "marker": "hea_ _ _ ",
     "start": 238,
     "end": 247
    },
    {
     "index": 9,
     "prefix": "divers",
     "underscores": 6,
     "word": "diversifying",
     "answer": "ifying",
     "slots": 6,
     "marker": "divers_ _ _ _ _ _ ",
     "start": 250,
     "end": 268
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 轮作在可持续农业中的作用、轮作规划与土壤健康、作物多样化对养分平衡的意义。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "planning",
     "reason": "n.动名词←plan（规划）"
    },
    {
     "word": "different",
     "reason": "adj.不同的（differ→different）"
    },
    {
     "word": "in",
     "reason": "prep.在…中"
    },
    {
     "word": "same",
     "reason": "adj.相同的（the same area）"
    },
    {
     "word": "across",
     "reason": "prep.跨越（across various seasons）"
    },
    {
     "word": "seasons",
     "reason": "n.复←season（季节）"
    },
    {
     "word": "technique",
     "reason": "n.技术／方法"
    },
    {
     "word": "improves",
     "reason": "v.三单←improve（改善）"
    },
    {
     "word": "health",
     "reason": "n.健康（heal+th）"
    },
    {
     "word": "diversifying",
     "reason": "v.动名词←diversify（使多样化）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 Crop rotation（主）involves（谓）the sequential planning（宾）；修饰：of different crops 介词短语作后置定语修饰 planning，in the same area 介词短语作状语，across various seasons 介词短语作状语。 - 句② 主干 This technique（主）improves（谓）soil health（宾）；修饰：by diversifying the nutrients 介词短语作方式状语，extracted from, and returned to, the soil 过去分词短语作后置定语修饰 nutrients。"
    }
   ],
   "tags": [
    "社会科学",
    "应用社科",
    "农业",
    "轮作重要性"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-083",
   "month": "2026年4月",
   "source": "山猫2026真题24",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "North American Bison",
   "discipline": "社会科学",
   "topic": "历史",
   "difficulty": "困难",
   "passage": "The Great Plains of North America were once home to vast herds of bison, which played a crucial role in the lives of Indigenous peoples, who made use of bison meat, hides, and bones. These commu_ _ _ _ _ _ relied o_ bison f_ _ food, clot_ _ _ _ , and she_ _ _ _ . Hunting prac_ _ _ _ _ were of_ _ _ sophisticated, invo_ _ _ _ _ coordinated eff_ _ _ _ to dr_ _ _ bison into traps or over cliffs. The arrival of European settlers dramatically altered the landscape, leading to overhunting and near extinction of bison populations. Conservation efforts in the twentieth century helped restore bison numbers, symbolizing resilience and recovery.",
   "blanks": [
    {
     "index": 0,
     "prefix": "commu",
     "underscores": 6,
     "word": "communities",
     "answer": "nities",
     "slots": 6,
     "marker": "commu_ _ _ _ _ _ ",
     "start": 189,
     "end": 206
    },
    {
     "index": 1,
     "prefix": "o",
     "underscores": 1,
     "word": "on",
     "answer": "n",
     "slots": 1,
     "marker": "o_ ",
     "start": 213,
     "end": 216
    },
    {
     "index": 2,
     "prefix": "f",
     "underscores": 2,
     "word": "for",
     "answer": "or",
     "slots": 2,
     "marker": "f_ _ ",
     "start": 222,
     "end": 227
    },
    {
     "index": 3,
     "prefix": "clot",
     "underscores": 4,
     "word": "clothing",
     "answer": "hing",
     "slots": 4,
     "marker": "clot_ _ _ _ ",
     "start": 233,
     "end": 245
    },
    {
     "index": 4,
     "prefix": "she",
     "underscores": 4,
     "word": "shelter",
     "answer": "lter",
     "slots": 4,
     "marker": "she_ _ _ _ ",
     "start": 251,
     "end": 262
    },
    {
     "index": 5,
     "prefix": "prac",
     "underscores": 5,
     "word": "practices",
     "answer": "tices",
     "slots": 5,
     "marker": "prac_ _ _ _ _ ",
     "start": 272,
     "end": 286
    },
    {
     "index": 6,
     "prefix": "of",
     "underscores": 3,
     "word": "often",
     "answer": "ten",
     "slots": 3,
     "marker": "of_ _ _ ",
     "start": 291,
     "end": 299
    },
    {
     "index": 7,
     "prefix": "invo",
     "underscores": 5,
     "word": "involving",
     "answer": "lving",
     "slots": 5,
     "marker": "invo_ _ _ _ _ ",
     "start": 314,
     "end": 328
    },
    {
     "index": 8,
     "prefix": "eff",
     "underscores": 4,
     "word": "efforts",
     "answer": "orts",
     "slots": 4,
     "marker": "eff_ _ _ _ ",
     "start": 340,
     "end": 351
    },
    {
     "index": 9,
     "prefix": "dr",
     "underscores": 3,
     "word": "drive",
     "answer": "ive",
     "slots": 3,
     "marker": "dr_ _ _ ",
     "start": 354,
     "end": 362
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 北美野牛与原住民生活、狩猎实践与群体协作、欧洲殖民者到来后的衰落与保护。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "communities",
     "reason": "n.复←community（社群）"
    },
    {
     "word": "on",
     "reason": "prep.依靠（relied on）"
    },
    {
     "word": "for",
     "reason": "prep.为了（for food）"
    },
    {
     "word": "clothing",
     "reason": "n.衣物（clothe→clothing）"
    },
    {
     "word": "shelter",
     "reason": "n.住所"
    },
    {
     "word": "practices",
     "reason": "n.复←practice（实践；狩猎方式）"
    },
    {
     "word": "often",
     "reason": "adv.经常"
    },
    {
     "word": "involving",
     "reason": "v.动名词←involve（涉及）"
    },
    {
     "word": "efforts",
     "reason": "n.复←effort（努力）"
    },
    {
     "word": "drive",
     "reason": "v.原形（驱赶）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 communities（主）relied（谓）；修饰：on bison 介词短语作状语，for food, clothing, and shelter 介词短语作目的状语。 - 句② 主干 Hunting practices（主）were（谓）sophisticated（表语）；修饰：involving coordinated efforts 现在分词短语作伴随状语，to drive bison into traps or over cliffs 不定式短语作后置定语修饰 efforts，into traps or over cliffs 介词短语作状语。"
    }
   ],
   "tags": [
    "社会科学",
    "历史",
    "农业",
    "野牛养殖"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-073",
   "month": "2026年4月",
   "source": "20260401A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Grasshopper Defense",
   "discipline": "生命科学",
   "topic": "生物",
   "difficulty": "简单",
   "passage": "Grasshoppers are insects commonly found in dry places with grass and plants. Grasshoppers ha_ _ several wa_ _ they pro _ _ _ _ themselves aga_ _ _ _ danger. Th_ _ have powe_ _ _ _back le_ _, which al_ _ _ them t_ jump aw_ _ from enemies, such as rodents and snakes. Some grasshoppers can jump twenty times the length of their bodies. By the time they are adults, grasshoppers can also fly. Adult grasshoppers fly very quickly and this helps them avoid danger.",
   "blanks": [
    {
     "index": 0,
     "prefix": "ha",
     "answer": "ve",
     "word": "have",
     "slots": 2,
     "underscores": 2,
     "marker": "ha_ _ ",
     "start": 90,
     "end": 96
    },
    {
     "index": 1,
     "prefix": "wa",
     "answer": "ys",
     "word": "ways",
     "slots": 2,
     "underscores": 2,
     "marker": "wa_ _ ",
     "start": 104,
     "end": 110
    },
    {
     "index": 2,
     "prefix": "",
     "answer": "tect",
     "word": "tect",
     "slots": 4,
     "underscores": 4,
     "marker": "_ _ _ _ ",
     "start": 119,
     "end": 127
    },
    {
     "index": 3,
     "prefix": "aga",
     "answer": "inst",
     "word": "against",
     "slots": 4,
     "underscores": 4,
     "marker": "aga_ _ _ _ ",
     "start": 138,
     "end": 149
    },
    {
     "index": 4,
     "prefix": "Th",
     "answer": "ey",
     "word": "They",
     "slots": 2,
     "underscores": 2,
     "marker": "Th_ _ ",
     "start": 157,
     "end": 163
    },
    {
     "index": 5,
     "prefix": "powe",
     "answer": "rful",
     "word": "powerful",
     "slots": 4,
     "underscores": 4,
     "marker": "powe_ _ _ _",
     "start": 168,
     "end": 179
    },
    {
     "index": 6,
     "prefix": "le",
     "answer": "gs",
     "word": "legs",
     "slots": 2,
     "underscores": 2,
     "marker": "le_ _",
     "start": 184,
     "end": 189
    },
    {
     "index": 7,
     "prefix": "al",
     "answer": "low",
     "word": "allow",
     "slots": 3,
     "underscores": 3,
     "marker": "al_ _ _ ",
     "start": 197,
     "end": 205
    },
    {
     "index": 8,
     "prefix": "t",
     "answer": "o",
     "word": "to",
     "slots": 1,
     "underscores": 1,
     "marker": "t_ ",
     "start": 210,
     "end": 213
    },
    {
     "index": 9,
     "prefix": "aw",
     "answer": "ay",
     "word": "away",
     "slots": 2,
     "underscores": 2,
     "marker": "aw_ _ ",
     "start": 218,
     "end": 224
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 蚱蜢的防御方式、强壮后腿与跳跃逃生、动物躲避天敌的适应性。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "have",
     "reason": "v.原形（有）"
    },
    {
     "word": "ways",
     "reason": "n.复←way（方式）"
    },
    {
     "word": "protect",
     "reason": "v.原形（保护）⚠片段列误为\"tect\"，据 q_text 前缀 pro+4 校正为 protect"
    },
    {
     "word": "against",
     "reason": "prep.对抗（against danger）"
    },
    {
     "word": "They",
     "reason": "pron.它们"
    },
    {
     "word": "powerful",
     "reason": "adj.强壮的（power+ful）⚠片段列/AB 错位，据语境校正"
    },
    {
     "word": "legs",
     "reason": "n.复←leg（腿）⚠片段列损坏，应为 legs"
    },
    {
     "word": "allow",
     "reason": "v.原形（使能够）⚠片段列损坏，据语境校正为 allow"
    },
    {
     "word": "to",
     "reason": "不定式标记（to jump）⚠片段列损坏，据语境校正为 to"
    },
    {
     "word": "away",
     "reason": "adv.离开（away from）⚠片段列损坏，据语境校正为 away"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 Grasshoppers（主）have（谓）several ways（宾）；修饰：they protect themselves against danger 定语从句修饰 ways（省略 that），against danger 介词短语作状语。 - 句② 主干 They（主）have（谓）powerful back legs（宾）；修饰：which allow them to jump away from enemies 定语从句，to jump away 不定式短语作宾语补足，from enemies 介词短语作状语，such as rodents and snakes 介词短语作举例。"
    }
   ],
   "tags": [
    "生命科学",
    "生物",
    "动物"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "真题-088",
   "month": "2026年4月",
   "source": "20260405A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Deductive Reasoning",
   "discipline": "社会科学",
   "topic": "哲学",
   "difficulty": "中等",
   "passage": "Logical reasoning is a cornerstone of academic methodology, providing a structured approach to analyzing arguments and evidence. Deductive reas_ _ _ _ _starts wi_ _ general princ_ _ _ _ _ and der_ _ _ _ specific concl_ _ _ _ _ _, while indu_ _ _ _ _ thinking invo_ _ _ _ drawing br_ _ _ generalizations fr_ _ specific observ_ _ _ _ _ _. Critical thinking skills enable scholars to identify logical fallacies, assess the credibility of sources, and construct coherent arguments. The application of logic extends across disciplines, from mathematics to philosophy to the natural sciences. Developing proficiency in logical reasoning enhances the ability to solve complex problems and communicate effectively, fostering intellectual rigor and innovation.",
   "blanks": [
    {
     "index": 0,
     "prefix": "reas",
     "answer": "oning",
     "word": "reasoning",
     "slots": 5,
     "underscores": 5,
     "marker": "reas_ _ _ _ _",
     "start": 139,
     "end": 152
    },
    {
     "index": 1,
     "prefix": "wi",
     "answer": "th",
     "word": "with",
     "slots": 2,
     "underscores": 2,
     "marker": "wi_ _ ",
     "start": 159,
     "end": 165
    },
    {
     "index": 2,
     "prefix": "princ",
     "answer": "iples",
     "word": "principles",
     "slots": 5,
     "underscores": 5,
     "marker": "princ_ _ _ _ _ ",
     "start": 173,
     "end": 188
    },
    {
     "index": 3,
     "prefix": "der",
     "answer": "ives",
     "word": "derives",
     "slots": 4,
     "underscores": 4,
     "marker": "der_ _ _ _ ",
     "start": 192,
     "end": 203
    },
    {
     "index": 4,
     "prefix": "concl",
     "answer": "usions",
     "word": "conclusions",
     "slots": 6,
     "underscores": 6,
     "marker": "concl_ _ _ _ _ _",
     "start": 212,
     "end": 228
    },
    {
     "index": 5,
     "prefix": "indu",
     "answer": "ctive",
     "word": "inductive",
     "slots": 5,
     "underscores": 5,
     "marker": "indu_ _ _ _ _ ",
     "start": 236,
     "end": 250
    },
    {
     "index": 6,
     "prefix": "invo",
     "answer": "lves",
     "word": "involves",
     "slots": 4,
     "underscores": 4,
     "marker": "invo_ _ _ _ ",
     "start": 259,
     "end": 271
    },
    {
     "index": 7,
     "prefix": "br",
     "answer": "oad",
     "word": "broad",
     "slots": 3,
     "underscores": 3,
     "marker": "br_ _ _ ",
     "start": 279,
     "end": 287
    },
    {
     "index": 8,
     "prefix": "fr",
     "answer": "om",
     "word": "from",
     "slots": 2,
     "underscores": 2,
     "marker": "fr_ _ ",
     "start": 303,
     "end": 309
    },
    {
     "index": 9,
     "prefix": "observ",
     "answer": "ations",
     "word": "observations",
     "slots": 6,
     "underscores": 6,
     "marker": "observ_ _ _ _ _ _",
     "start": 318,
     "end": 335
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 演绎推理与归纳推理的对比、从一般原则推导具体结论、逻辑在多学科中的应用。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "reasoning",
     "reason": "n.推理（reason+ing）⚠片段列损坏，据语境校正"
    },
    {
     "word": "with",
     "reason": "prep.以／从（starts with）"
    },
    {
     "word": "principles",
     "reason": "n.复←principle（原则）⚠片段列损坏，据语境校正"
    },
    {
     "word": "derives",
     "reason": "v.三单←derive（推导）⚠片段列损坏，据语境校正"
    },
    {
     "word": "conclusions",
     "reason": "n.复←conclusion（结论）⚠片段列损坏，据语境校正"
    },
    {
     "word": "inductive",
     "reason": "adj.归纳的（induct+ive）⚠片段列损坏，据语境校正"
    },
    {
     "word": "involves",
     "reason": "v.三单←involve（涉及）⚠片段列损坏，据语境校正"
    },
    {
     "word": "broad",
     "reason": "adj.宽泛的（broad generalizations）"
    },
    {
     "word": "from",
     "reason": "prep.从（from specific observations）"
    },
    {
     "word": "observations",
     "reason": "n.复←observation（观察）⚠片段列损坏，据语境校正"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 Deductive reasoning（主）starts（谓）and derives（谓）；修饰：with general principles 介词短语作状语（starts with），specific conclusions 作 derives 宾语。 - 句② 主干 inductive thinking（主）involves（谓）drawing broad generalizations（宾）；修饰：from specific observations 介词短语作状语。"
    }
   ],
   "tags": [
    "社会科学",
    "哲学",
    "逻辑学"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "真题-092",
   "month": "2026年4月",
   "source": "20260405C",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Raven Intelligence",
   "discipline": "社会科学",
   "topic": "心理学",
   "difficulty": "简单",
   "passage": "Ravens are highly intelligent birds known for their problem-solving abilities and complex social behaviors. They u_ _ tools, su_ _ as sti_ _ _, to obt_ _ _ food a_ _ have be_ _ observed enga_ _ _ _ in pla_ _ _ _ behaviors li_ _ sliding o_ snow. Ravens communicate with a wide range of vocalizations, conveying different messages to their peers. Their adaptability allows them to thrive in various environments, from forests to urban areas. Studying raven behavior provides insights into avian intelligence and the evolutionary mechanisms that support cognitive development.",
   "blanks": [
    {
     "index": 0,
     "prefix": "u",
     "answer": "se",
     "word": "use",
     "slots": 2,
     "underscores": 2,
     "marker": "u_ _ ",
     "start": 113,
     "end": 118
    },
    {
     "index": 1,
     "prefix": "su",
     "answer": "ch",
     "word": "such",
     "slots": 2,
     "underscores": 2,
     "marker": "su_ _ ",
     "start": 125,
     "end": 131
    },
    {
     "index": 2,
     "prefix": "sti",
     "answer": "cks",
     "word": "sticks",
     "slots": 3,
     "underscores": 3,
     "marker": "sti_ _ _",
     "start": 134,
     "end": 142
    },
    {
     "index": 3,
     "prefix": "obt",
     "answer": "ain",
     "word": "obtain",
     "slots": 3,
     "underscores": 3,
     "marker": "obt_ _ _ ",
     "start": 147,
     "end": 156
    },
    {
     "index": 4,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 161,
     "end": 166
    },
    {
     "index": 5,
     "prefix": "be",
     "answer": "en",
     "word": "been",
     "slots": 2,
     "underscores": 2,
     "marker": "be_ _ ",
     "start": 171,
     "end": 177
    },
    {
     "index": 6,
     "prefix": "enga",
     "answer": "ging",
     "word": "engaging",
     "slots": 4,
     "underscores": 4,
     "marker": "enga_ _ _ _ ",
     "start": 186,
     "end": 198
    },
    {
     "index": 7,
     "prefix": "pla",
     "answer": "yful",
     "word": "playful",
     "slots": 4,
     "underscores": 4,
     "marker": "pla_ _ _ _ ",
     "start": 201,
     "end": 212
    },
    {
     "index": 8,
     "prefix": "li",
     "answer": "ke",
     "word": "like",
     "slots": 2,
     "underscores": 2,
     "marker": "li_ _ ",
     "start": 222,
     "end": 228
    },
    {
     "index": 9,
     "prefix": "o",
     "answer": "n",
     "word": "on",
     "slots": 1,
     "underscores": 1,
     "marker": "o_ ",
     "start": 236,
     "end": 239
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 渡鸦的智力与问题解决、工具使用与游戏行为、鸦科动物的认知演化。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "use",
     "reason": "v.原形（使用）"
    },
    {
     "word": "such",
     "reason": "det./pron.这样的（such as）"
    },
    {
     "word": "sticks",
     "reason": "n.复←stick（树枝）⚠q_text 空数略偏，AB 列作 sti,cks，据语境为 sticks"
    },
    {
     "word": "obtain",
     "reason": "v.原形（获取）"
    },
    {
     "word": "and",
     "reason": "conj.和"
    },
    {
     "word": "been",
     "reason": "v.过去分词←be（have been observed）"
    },
    {
     "word": "engaging",
     "reason": "v.动名词←engage（参与）"
    },
    {
     "word": "playful",
     "reason": "adj.爱玩的（play+ful）"
    },
    {
     "word": "like",
     "reason": "prep.例如（like sliding）"
    },
    {
     "word": "on",
     "reason": "prep.在…上（on snow）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 They（主）use（谓）tools（宾）and have been observed（谓）engaging（补）；修饰：such as sticks 介词短语作举例，to obtain food 不定式短语作目的状语，engaging in playful behaviors 现在分词短语作主语补足，like sliding on snow 介词短语作举例，on snow 介词短语作状语。"
    }
   ],
   "tags": [
    "社会科学",
    "心理学",
    "认知心理学"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "真题-028",
   "month": "2026年4月",
   "source": "20260405C",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Paleontology",
   "discipline": "社会科学",
   "topic": "历史",
   "difficulty": "中等",
   "passage": "Paleontology is the scientific study of life's history through the examination of fossil remains. Fossils, incl_ _ _ _ _ bones, she_ _ _, and foot_ _ _ _ _ _, provide crit_ _ _ _ evidence o_ past orga_ _ _ _ _ _ and th_ _ _ environments. B_ analyzing su_ _ remnants, paleont_ _ _ _ _ _ _ _ can reconstruct ancient ecosystems and track evolutionary changes over millions of years. This field offers valuable insights into the development and extinction of species. Advanced techniques like radiometric dating and CT scanning allow scientists to determine precise ages of specimens and examine internal structures without damaging delicate fossils.",
   "blanks": [
    {
     "index": 0,
     "prefix": "incl",
     "answer": "uding",
     "word": "including",
     "slots": 5,
     "marker": "incl_ _ _ _ _ ",
     "start": 107,
     "end": 121
    },
    {
     "index": 1,
     "prefix": "she",
     "answer": "lls",
     "word": "shells",
     "slots": 3,
     "marker": "she_ _ _",
     "start": 128,
     "end": 136
    },
    {
     "index": 2,
     "prefix": "foot",
     "answer": "prints",
     "word": "footprints",
     "slots": 6,
     "marker": "foot_ _ _ _ _ _",
     "start": 142,
     "end": 157
    },
    {
     "index": 3,
     "prefix": "crit",
     "answer": "ical",
     "word": "critical",
     "slots": 4,
     "marker": "crit_ _ _ _ ",
     "start": 167,
     "end": 179
    },
    {
     "index": 4,
     "prefix": "o",
     "answer": "f",
     "word": "of",
     "slots": 1,
     "marker": "o_ ",
     "start": 188,
     "end": 191
    },
    {
     "index": 5,
     "prefix": "orga",
     "answer": "nisms",
     "word": "organisms",
     "slots": 5,
     "marker": "orga_ _ _ _ _ _ ",
     "start": 196,
     "end": 212
    },
    {
     "index": 6,
     "prefix": "th",
     "answer": "eir",
     "word": "their",
     "slots": 3,
     "marker": "th_ _ _ ",
     "start": 216,
     "end": 224
    },
    {
     "index": 7,
     "prefix": "B",
     "answer": "y",
     "word": "By",
     "slots": 1,
     "marker": "B_ ",
     "start": 238,
     "end": 241
    },
    {
     "index": 8,
     "prefix": "su",
     "answer": "ch",
     "word": "such",
     "slots": 2,
     "marker": "su_ _ ",
     "start": 251,
     "end": 257
    },
    {
     "index": 9,
     "prefix": "paleont",
     "answer": "ologists",
     "word": "paleontologists",
     "slots": 8,
     "marker": "paleont_ _ _ _ _ _ _ _ ",
     "start": 267,
     "end": 290
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 文化史、历史"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "including",
     "reason": "prep.包括（include 现在分词／介词用法）"
    },
    {
     "word": "shells",
     "reason": "n.复←shell（贝壳／外壳）"
    },
    {
     "word": "footprints",
     "reason": "n.复←footprint（脚印）"
    },
    {
     "word": "critical",
     "reason": "adj.关键的（critic+-al）"
    },
    {
     "word": "of",
     "reason": "prep.……的"
    },
    {
     "word": "organisms",
     "reason": "n.复←organism（生物／有机体）"
    },
    {
     "word": "their",
     "reason": "pron.他们的"
    },
    {
     "word": "By",
     "reason": "prep.通过（表方式）"
    },
    {
     "word": "such",
     "reason": "adj.这样的（such remnants 这些遗迹）"
    },
    {
     "word": "paleontologists",
     "reason": "n.复←paleontologist（古生物学家）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 Fossils（主）provide（谓）evidence（宾）；修饰：including bones, shells and footprints 介词短语作后置定语，修饰 Fossils；of past organisms and their environments 介词短语作后置定语，修饰 evidence。 - 句② 主干 paleontologists（主）can reconstruct（谓）ecosystems（宾）；修饰：By analyzing such remnants 介词短语作状语，表方式；over millions of years 介词短语作状语，表时间。"
    }
   ],
   "tags": [
    "社会科学",
    "历史",
    "文化史"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "真题-116",
   "month": "2026年4月",
   "source": "20260406A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Brain Plasticity",
   "discipline": "社会科学",
   "topic": "心理学",
   "difficulty": "简单",
   "passage": "We are exquisitely sensitive to our surroundings, and environment plays a critical role in the development of a child's brain. But wh_ _ happens on_ _ we've rea_ _ _ _ adulthood? C_ _ the br_ _ _ still und_ _ _ _ the ki_ _ of cha_ _ _ it d_ _ when w_ were younger? By the time we are twenty-five years old, the brain transformations of childhood are finally over and our brain appears to be fully developed. You might think that who we are as adults is then fixed in place, immovable. But it's not: in adulthood our brains continue to change.",
   "blanks": [
    {
     "index": 0,
     "prefix": "wh",
     "underscores": 2,
     "word": "what",
     "answer": "at",
     "slots": 2,
     "marker": "wh_ _ ",
     "start": 131,
     "end": 137
    },
    {
     "index": 1,
     "prefix": "on",
     "underscores": 2,
     "word": "once",
     "answer": "ce",
     "slots": 2,
     "marker": "on_ _ ",
     "start": 145,
     "end": 151
    },
    {
     "index": 2,
     "prefix": "rea",
     "underscores": 4,
     "word": "reached",
     "answer": "ched",
     "slots": 4,
     "marker": "rea_ _ _ _ ",
     "start": 157,
     "end": 168
    },
    {
     "index": 3,
     "prefix": "C",
     "underscores": 2,
     "word": "Can",
     "answer": "an",
     "slots": 2,
     "marker": "C_ _ ",
     "start": 179,
     "end": 184
    },
    {
     "index": 4,
     "prefix": "br",
     "underscores": 3,
     "word": "brain",
     "answer": "ain",
     "slots": 3,
     "marker": "br_ _ _ ",
     "start": 188,
     "end": 196
    },
    {
     "index": 5,
     "prefix": "und",
     "underscores": 4,
     "word": "undergo",
     "answer": "ergo",
     "slots": 4,
     "marker": "und_ _ _ _ ",
     "start": 202,
     "end": 213
    },
    {
     "index": 6,
     "prefix": "ki",
     "underscores": 2,
     "word": "kind",
     "answer": "nd",
     "slots": 2,
     "marker": "ki_ _ ",
     "start": 217,
     "end": 223
    },
    {
     "index": 7,
     "prefix": "cha",
     "underscores": 3,
     "word": "change",
     "answer": "nge",
     "slots": 3,
     "marker": "cha_ _ _ ",
     "start": 226,
     "end": 235
    },
    {
     "index": 8,
     "prefix": "d",
     "underscores": 2,
     "word": "did",
     "answer": "id",
     "slots": 2,
     "marker": "d_ _ ",
     "start": 238,
     "end": 243
    },
    {
     "index": 9,
     "prefix": "w",
     "underscores": 1,
     "word": "we",
     "answer": "e",
     "slots": 1,
     "marker": "w_ ",
     "start": 248,
     "end": 251
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 发展心理学、心理学"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "what",
     "reason": "pron.什么"
    },
    {
     "word": "once",
     "reason": "adv./conj.一旦"
    },
    {
     "word": "reached",
     "reason": "v.过去式←reach（达到）"
    },
    {
     "word": "Can",
     "reason": "v.情态（能）"
    },
    {
     "word": "brain",
     "reason": "n.大脑"
    },
    {
     "word": "undergo",
     "reason": "v.经历／承受"
    },
    {
     "word": "kinds",
     "reason": "n.复←kind（种类）⚠ AB 显示\"kiid\"，据语境校正为 kinds"
    },
    {
     "word": "changes",
     "reason": "n.复←change（变化）⚠ AB 显示\"chands\"，据语境校正为 changes"
    },
    {
     "word": "did",
     "reason": "v.过去式←do（做）"
    },
    {
     "word": "we",
     "reason": "pron.我们"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 what（主）happens（谓）；修饰：once we've reached adulthood 状语从句（we 主，have reached 谓，adulthood 宾）。 - 句② 主干 brain（主）undergo（谓）kinds（宾）；修饰：of changes 介词短语作后置定语，修饰 kinds；it did 省略定语从句，修饰 changes；when we were younger 状语从句。"
    }
   ],
   "tags": [
    "社会科学",
    "心理学",
    "发展心理学"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-082",
   "month": "2026年4月",
   "source": "20260413C",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Weather Forecasting",
   "discipline": "自然科学",
   "topic": "环境科学",
   "difficulty": "中等",
   "passage": "Weather patterns are influenced by a variety of factors, including atmospheric pressure, temperature, and humidity.Meteorologists st_ _ _ these fac_ _ _ _ to pre_ _ _ _ weather condi_ _ _ _ _ and under_ _ _ _ _ climate cha_ _ _.Tools li_ _ satellites a_ _ radar al_ _ _ meteorologists t_ monitor weather systems in great detail. Accurate weather forecasting is crucial for agriculture, disaster preparedness, and daily planning. It should be noted, however, that despite technological advancements, weather is inherently unpredictable due to the numerous atmospheric variables that can change rapidly.",
   "blanks": [
    {
     "index": 0,
     "prefix": "st",
     "answer": "udy",
     "word": "study",
     "slots": 3,
     "underscores": 3,
     "marker": "st_ _ _ ",
     "start": 130,
     "end": 138
    },
    {
     "index": 1,
     "prefix": "fac",
     "answer": "tors",
     "word": "factors",
     "slots": 4,
     "underscores": 4,
     "marker": "fac_ _ _ _ ",
     "start": 144,
     "end": 155
    },
    {
     "index": 2,
     "prefix": "pre",
     "answer": "dict",
     "word": "predict",
     "slots": 4,
     "underscores": 4,
     "marker": "pre_ _ _ _ ",
     "start": 158,
     "end": 169
    },
    {
     "index": 3,
     "prefix": "condi",
     "answer": "tions",
     "word": "conditions",
     "slots": 5,
     "underscores": 5,
     "marker": "condi_ _ _ _ _ ",
     "start": 177,
     "end": 192
    },
    {
     "index": 4,
     "prefix": "under",
     "answer": "stand",
     "word": "understand",
     "slots": 5,
     "underscores": 5,
     "marker": "under_ _ _ _ _ ",
     "start": 196,
     "end": 211
    },
    {
     "index": 5,
     "prefix": "cha",
     "answer": "nge",
     "word": "change",
     "slots": 3,
     "underscores": 3,
     "marker": "cha_ _ _",
     "start": 219,
     "end": 227
    },
    {
     "index": 6,
     "prefix": "li",
     "answer": "ke",
     "word": "like",
     "slots": 2,
     "underscores": 2,
     "marker": "li_ _ ",
     "start": 234,
     "end": 240
    },
    {
     "index": 7,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 251,
     "end": 256
    },
    {
     "index": 8,
     "prefix": "al",
     "answer": "low",
     "word": "allow",
     "slots": 3,
     "underscores": 3,
     "marker": "al_ _ _ ",
     "start": 262,
     "end": 270
    },
    {
     "index": 9,
     "prefix": "t",
     "answer": "o",
     "word": "to",
     "slots": 1,
     "underscores": 1,
     "marker": "t_ ",
     "start": 285,
     "end": 288
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 气候气象、环境科学"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "study",
     "reason": "v.研究"
    },
    {
     "word": "factors",
     "reason": "n.复←factor（因素）"
    },
    {
     "word": "predict",
     "reason": "v.预测"
    },
    {
     "word": "conditions",
     "reason": "n.复←condition（状况／条件）"
    },
    {
     "word": "understand",
     "reason": "v.理解"
    },
    {
     "word": "change",
     "reason": "n./v.变化"
    },
    {
     "word": "Tools",
     "reason": "n.复←tool（工具）"
    },
    {
     "word": "like",
     "reason": "prep.诸如"
    },
    {
     "word": "and",
     "reason": "conj.和"
    },
    {
     "word": "allow",
     "reason": "v.使能够"
    },
    {
     "word": "to",
     "reason": "prep.／不定式标记"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 Meteorologists（主）study（谓）factors（宾）；修饰：to predict weather conditions and understand climate change 不定式短语作目的状语（predict / understand 并列）。 - 句② 主干 Tools（主）allow（谓）meteorologists（宾）；修饰：like satellites and radar 介词短语作后置定语，修饰 Tools；to monitor weather systems 不定式作宾补；in great detail 介词短语作状语。"
    }
   ],
   "tags": [
    "自然科学",
    "环境科学",
    "气候气象"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "真题-074",
   "month": "2026年4月",
   "source": "20260413C",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Black Holes",
   "discipline": "自然科学",
   "topic": "天文学",
   "difficulty": "简单",
   "passage": "The universe is a vast expanse, filled with mysteries that have intrigued humans for centuries. Black holes are reg_ _ _ _ in sp_ _ _ where gra_ _ _ _ is s_ strong th_ _ nothing, n_ _ even li_ _ _, can esc_ _ _. Even tho_ _ _ they a_ _ invisible, black holes can be detected by observing their effects on nearby matter. Black holes play a crucial role in astrophysics, influencing galaxy formation and offering insights into the nature of space, time, and gravity.",
   "blanks": [
    {
     "index": 0,
     "prefix": "reg",
     "answer": "ions",
     "word": "regions",
     "slots": 4,
     "underscores": 4,
     "marker": "reg_ _ _ _ ",
     "start": 112,
     "end": 123
    },
    {
     "index": 1,
     "prefix": "sp",
     "answer": "ace",
     "word": "space",
     "slots": 3,
     "underscores": 3,
     "marker": "sp_ _ _ ",
     "start": 126,
     "end": 134
    },
    {
     "index": 2,
     "prefix": "gra",
     "answer": "vity",
     "word": "gravity",
     "slots": 4,
     "underscores": 4,
     "marker": "gra_ _ _ _ ",
     "start": 140,
     "end": 151
    },
    {
     "index": 3,
     "prefix": "s",
     "answer": "o",
     "word": "so",
     "slots": 1,
     "underscores": 1,
     "marker": "s_ ",
     "start": 154,
     "end": 157
    },
    {
     "index": 4,
     "prefix": "th",
     "answer": "at",
     "word": "that",
     "slots": 2,
     "underscores": 2,
     "marker": "th_ _ ",
     "start": 164,
     "end": 170
    },
    {
     "index": 5,
     "prefix": "n",
     "answer": "ot",
     "word": "not",
     "slots": 2,
     "underscores": 2,
     "marker": "n_ _ ",
     "start": 179,
     "end": 184
    },
    {
     "index": 6,
     "prefix": "li",
     "answer": "ght",
     "word": "light",
     "slots": 3,
     "underscores": 3,
     "marker": "li_ _ _",
     "start": 189,
     "end": 196
    },
    {
     "index": 7,
     "prefix": "esc",
     "answer": "ape",
     "word": "escape",
     "slots": 3,
     "underscores": 3,
     "marker": "esc_ _ _",
     "start": 202,
     "end": 210
    },
    {
     "index": 8,
     "prefix": "tho",
     "answer": "ugh",
     "word": "though",
     "slots": 3,
     "underscores": 3,
     "marker": "tho_ _ _ ",
     "start": 217,
     "end": 226
    },
    {
     "index": 9,
     "prefix": "a",
     "answer": "re",
     "word": "are",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 231,
     "end": 236
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 星系、天文学"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "regions",
     "reason": "n.复←region（区域）"
    },
    {
     "word": "space",
     "reason": "n.空间"
    },
    {
     "word": "gravity",
     "reason": "n.引力"
    },
    {
     "word": "so",
     "reason": "adv.如此"
    },
    {
     "word": "that",
     "reason": "conj.引导结果从句"
    },
    {
     "word": "not",
     "reason": "adv.不"
    },
    {
     "word": "light",
     "reason": "n.光"
    },
    {
     "word": "escape",
     "reason": "v.逃逸"
    },
    {
     "word": "though",
     "reason": "conj.尽管"
    },
    {
     "word": "are",
     "reason": "v.系动词（是）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 Black holes（主）are（系）regions（表）；修饰：in space 介词短语作后置定语；where gravity is so strong that nothing, not even light, can escape 定语从句（gravity 主，is 系，strong 表；that 引导结果状语从句 nothing ... can escape，not even light 为插入语）。 - 句② 主干 black holes（主）can be detected（谓）；修饰：Even though they are invisible 让步状语从句；by observing their effects on nearby matter 介词短语作状语（observing 动名词宾语，effects 后 on nearby matter 介词定语）。"
    }
   ],
   "tags": [
    "自然科学",
    "天文学",
    "星系"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "真题-049",
   "month": "2026年4月",
   "source": "20260414A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Pigment Chemistry",
   "discipline": "自然科学",
   "topic": "化学",
   "difficulty": "简单",
   "passage": "Pigments are substances that provide color to materials, and they can be derived from various natural sources, such as minerals and plants. It w_ _ once com_ _ _ for art_ _ _ _ to cre_ _ _ their o_ _ paints b_ mixing sev_ _ _ _ pigments toge_ _ _ _. This pro_ _ _ _ was ti_ _-consuming and required detailed knowledge of pigments—their chemical properties, how they interact with different media, and their durability over time. But it also allowed painters to give their artworks a truly unique color palette.",
   "blanks": [
    {
     "index": 0,
     "prefix": "w",
     "answer": "as",
     "word": "was",
     "slots": 2,
     "marker": "w_ _ ",
     "start": 143,
     "end": 148
    },
    {
     "index": 1,
     "prefix": "com",
     "answer": "mon",
     "word": "common",
     "slots": 3,
     "marker": "com_ _ _ ",
     "start": 153,
     "end": 162
    },
    {
     "index": 2,
     "prefix": "art",
     "answer": "ists",
     "word": "artists",
     "slots": 4,
     "marker": "art_ _ _ _ ",
     "start": 166,
     "end": 177
    },
    {
     "index": 3,
     "prefix": "cre",
     "answer": "ate",
     "word": "create",
     "slots": 3,
     "marker": "cre_ _ _ ",
     "start": 180,
     "end": 189
    },
    {
     "index": 4,
     "prefix": "o",
     "answer": "wn",
     "word": "own",
     "slots": 2,
     "marker": "o_ _ ",
     "start": 195,
     "end": 200
    },
    {
     "index": 5,
     "prefix": "b",
     "answer": "y",
     "word": "by",
     "slots": 1,
     "marker": "b_ ",
     "start": 207,
     "end": 210
    },
    {
     "index": 6,
     "prefix": "sev",
     "answer": "eral",
     "word": "several",
     "slots": 4,
     "marker": "sev_ _ _ _ ",
     "start": 217,
     "end": 228
    },
    {
     "index": 7,
     "prefix": "toge",
     "answer": "ther",
     "word": "together",
     "slots": 4,
     "marker": "toge_ _ _ _",
     "start": 237,
     "end": 248
    },
    {
     "index": 8,
     "prefix": "pro",
     "answer": "cess",
     "word": "process",
     "slots": 4,
     "marker": "pro_ _ _ _ ",
     "start": 255,
     "end": 266
    },
    {
     "index": 9,
     "prefix": "ti",
     "answer": "me",
     "word": "time",
     "slots": 2,
     "marker": "ti_ _",
     "start": 270,
     "end": 275
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 无机化学、化学"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "was",
     "reason": "v.过去式←be（是）"
    },
    {
     "word": "common",
     "reason": "adj.常见的"
    },
    {
     "word": "artists",
     "reason": "n.复←artist（艺术家）"
    },
    {
     "word": "create",
     "reason": "v.创造"
    },
    {
     "word": "own",
     "reason": "adj.自己的"
    },
    {
     "word": "by",
     "reason": "prep.通过"
    },
    {
     "word": "several",
     "reason": "adj.几个（several pigments）"
    },
    {
     "word": "together",
     "reason": "adv.一起⚠ 片段列误为\"togeether\"、AB 显示\"toge.cess\"，据语境校正为 together"
    },
    {
     "word": "This",
     "reason": "pron.指示代词（这）"
    },
    {
     "word": "process",
     "reason": "n.过程"
    },
    {
     "word": "time",
     "reason": "n.时间⚠ AB 显示\"ti-consumingme\"，据语境校正为 time（time-consuming 的一部分）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 It（形式主）was（系）common（表）；修饰：once 副词状语；for artists to create their own paints 不定式的逻辑主语与不定式短语作真正主语（artists 逻辑主，create 谓，paints 宾）；by mixing several pigments together 介词短语作方式状语（mixing 动名词，several pigments 宾，together 副词）。 - 句② 主干 This process（主）was（系）time-consuming（表）；修饰：无显著长修饰成分。"
    }
   ],
   "tags": [
    "自然科学",
    "化学",
    "无机化学"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "真题-091",
   "month": "2026年4月",
   "source": "20260414A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Microfinance",
   "discipline": "社会科学",
   "topic": "心理学",
   "difficulty": "困难",
   "passage": "The concept of microfinance has transformed the way people access financial services. Microfinance institutions provide small loans to individuals or groups who lack access to traditional banking. These loans empower recip_ _ _ _ _ to st_ _ _ or exp_ _ _ small busin_ _ _ _ _ , improving th_ _ _ living condi_ _ _ _ _ and commu_ _ _ _ _ _. By encou_ _ _ _ _ _ financial lite_ _ _ _ and adva_ _ _ _ _ financial inclusion, microfinance helps reduce poverty, foster economic development, and build long-term stability at the grassroots level. Understanding this system helps design effective financial inclusion strategies.",
   "blanks": [
    {
     "index": 0,
     "prefix": "recip",
     "answer": "ients",
     "word": "recipients",
     "slots": 5,
     "marker": "recip_ _ _ _ _ ",
     "start": 217,
     "end": 232
    },
    {
     "index": 1,
     "prefix": "st",
     "answer": "art",
     "word": "start",
     "slots": 3,
     "marker": "st_ _ _ ",
     "start": 235,
     "end": 243
    },
    {
     "index": 2,
     "prefix": "exp",
     "answer": "and",
     "word": "expand",
     "slots": 3,
     "marker": "exp_ _ _ ",
     "start": 246,
     "end": 255
    },
    {
     "index": 3,
     "prefix": "busin",
     "answer": "esses",
     "word": "businesses",
     "slots": 5,
     "marker": "busin_ _ _ _ _ ",
     "start": 261,
     "end": 276
    },
    {
     "index": 4,
     "prefix": "th",
     "answer": "eir",
     "word": "their",
     "slots": 3,
     "marker": "th_ _ _ ",
     "start": 288,
     "end": 296
    },
    {
     "index": 5,
     "prefix": "condi",
     "answer": "tions",
     "word": "conditions",
     "slots": 5,
     "marker": "condi_ _ _ _ _ ",
     "start": 303,
     "end": 318
    },
    {
     "index": 6,
     "prefix": "commu",
     "answer": "nities",
     "word": "communities",
     "slots": 6,
     "marker": "commu_ _ _ _ _ _",
     "start": 322,
     "end": 338
    },
    {
     "index": 7,
     "prefix": "encou",
     "answer": "raging",
     "word": "encouraging",
     "slots": 6,
     "marker": "encou_ _ _ _ _ _ ",
     "start": 343,
     "end": 360
    },
    {
     "index": 8,
     "prefix": "lite",
     "answer": "racy",
     "word": "literacy",
     "slots": 4,
     "marker": "lite_ _ _ _ ",
     "start": 370,
     "end": 382
    },
    {
     "index": 9,
     "prefix": "adva",
     "answer": "ncing",
     "word": "advancing",
     "slots": 5,
     "marker": "adva_ _ _ _ _ ",
     "start": 386,
     "end": 400
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 发展心理学、心理学"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "recipients",
     "reason": "n.复←recipient（接受者）⚠ 片段列/AB 损坏（\"recipct\"），据语境校正"
    },
    {
     "word": "start",
     "reason": "v.开始⚠ 片段列/AB 损坏（\"steas\"），据语境校正"
    },
    {
     "word": "expand",
     "reason": "v.扩展⚠ 片段列/AB 损坏（\"exprld\"），据语境校正"
    },
    {
     "word": "businesses",
     "reason": "n.复←business（企业）⚠ 片段列/AB 损坏（\"busineas\"），据语境校正"
    },
    {
     "word": "their",
     "reason": "pron.他们的⚠ 片段列/AB 损坏（\"tho\"），据语境校正"
    },
    {
     "word": "conditions",
     "reason": "n.复←condition（条件）⚠ 片段列/AB 损坏（\"condihe\"），据语境校正"
    },
    {
     "word": "communities",
     "reason": "n.复←community（社区）⚠ 片段列/AB 损坏（\"commu.rld\"），据语境校正"
    },
    {
     "word": "encouraging",
     "reason": "v.现在分词←encourage（鼓励）⚠ 片段列/AB 损坏（\"encouor\"），据语境校正"
    },
    {
     "word": "literacy",
     "reason": "n.金融素养／读写能力⚠ 片段列/AB 损坏（\"litede\"），据语境校正"
    },
    {
     "word": "advancing",
     "reason": "v.现在分词←advance（推进）⚠ 片段列/AB 损坏（\"advabutions\"），据语境校正"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 These loans（主）empower（谓）recipients（宾）；修饰：to start or expand small businesses 不定式作宾补（start / expand 并列，businesses 宾）；improving their living conditions and communities 现在分词短语作结果状语。 - 句② 主干 microfinance（主）helps（谓）；修饰：By encouraging financial literacy and advancing financial inclusion 介词短语作方式状语（encouraging / advancing 并列动名词）。"
    }
   ],
   "tags": [
    "社会科学",
    "心理学",
    "发展心理学"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "真题-063",
   "month": "2026年4月",
   "source": "20260419D",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Biochemistry",
   "discipline": "社会科学",
   "topic": "应用社科",
   "difficulty": "中等",
   "passage": "Rooted in both biology and chemistry, modern biochemistry has grown into a foundational science that explores the molecular basis of life. I_ emerged fr _ _ early investi_ _ _ _ _ _ _ into nat_ _ _ _ processes li_ _ fermentation a_ _ digestion and n_ _ encompasses t_ _ study o_ biomolecules su_ _ as proteins, carbohydrates, and nucleic acids. Biochemistry plays a vital role in diverse fields including agriculture, environmental science, and pharmacology, contributing to innovations in areas like crop improvement, pollution control, and drug design, for example. Its broad applications continue to shape our understanding of living systems and support solutions to global challenges.",
   "blanks": [
    {
     "index": 0,
     "prefix": "I",
     "answer": "t",
     "word": "It",
     "slots": 1,
     "underscores": 1,
     "marker": "I_ ",
     "start": 139,
     "end": 142
    },
    {
     "index": 1,
     "prefix": "",
     "answer": "om",
     "word": "om",
     "slots": 2,
     "underscores": 2,
     "marker": "_ _ ",
     "start": 153,
     "end": 157
    },
    {
     "index": 2,
     "prefix": "investi",
     "answer": "gations",
     "word": "investigations",
     "slots": 7,
     "underscores": 7,
     "marker": "investi_ _ _ _ _ _ _ ",
     "start": 163,
     "end": 184
    },
    {
     "index": 3,
     "prefix": "nat",
     "answer": "ural",
     "word": "natural",
     "slots": 4,
     "underscores": 4,
     "marker": "nat_ _ _ _ ",
     "start": 189,
     "end": 200
    },
    {
     "index": 4,
     "prefix": "li",
     "answer": "ke",
     "word": "like",
     "slots": 2,
     "underscores": 2,
     "marker": "li_ _ ",
     "start": 210,
     "end": 216
    },
    {
     "index": 5,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 229,
     "end": 234
    },
    {
     "index": 6,
     "prefix": "n",
     "answer": "ow",
     "word": "now",
     "slots": 2,
     "underscores": 2,
     "marker": "n_ _ ",
     "start": 248,
     "end": 253
    },
    {
     "index": 7,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "underscores": 2,
     "marker": "t_ _ ",
     "start": 265,
     "end": 270
    },
    {
     "index": 8,
     "prefix": "o",
     "answer": "f",
     "word": "of",
     "slots": 1,
     "underscores": 1,
     "marker": "o_ ",
     "start": 276,
     "end": 279
    },
    {
     "index": 9,
     "prefix": "su",
     "answer": "ch",
     "word": "such",
     "slots": 2,
     "underscores": 2,
     "marker": "su_ _ ",
     "start": 292,
     "end": 298
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 应用社科、生物化学"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "It",
     "reason": "pron.它"
    },
    {
     "word": "from",
     "reason": "prep.从／来自⚠ 片段列前缀缺失（记为空）、AB\"fr om\"空格错位，据语境校正为 from"
    },
    {
     "word": "investigations",
     "reason": "n.复←investigation（研究）"
    },
    {
     "word": "natural",
     "reason": "adj.自然的（nature→natural）"
    },
    {
     "word": "like",
     "reason": "prep.诸如"
    },
    {
     "word": "and",
     "reason": "conj.和"
    },
    {
     "word": "now",
     "reason": "adv.现在"
    },
    {
     "word": "the",
     "reason": "art.定冠词"
    },
    {
     "word": "of",
     "reason": "prep.……的"
    },
    {
     "word": "such",
     "reason": "adj.这样的"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 It（主）emerged（谓）／now encompasses（谓）the study（宾）；修饰：from early investigations into natural processes 介词短语作状语（into natural processes 后置定语）；like fermentation and digestion 介词短语作后置定语，修饰 processes；of biomolecules 后置定语，修饰 study；such as proteins, carbohydrates, and nucleic acids 介词短语作后置定语，修饰 biomolecules。"
    }
   ],
   "tags": [
    "社会科学",
    "应用社科"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "真题-095",
   "month": "2026年4月",
   "source": "20260419D",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Bicycle History",
   "discipline": "社会科学",
   "topic": "历史",
   "difficulty": "简单",
   "passage": "The earliest ancestor of the modern bicycle is probably amachine used in England in the early 1800s called a hobbyhorse. It h_ _ two whe_ _ _ and a pl_ _ _ to s_ _ , but n_pedals; rid_ _ _ would pu_ _ it al_ _ _ with th_ _ _ feet. La_ _ _, an inventor added pedals directly to the front wheel, like a modern child's tricycle. This version, with a huge front wheel, was faster, but it was unsafe. Riders were high off the ground, and the two wheels were close together, making both balance and stopping difficult.",
   "blanks": [
    {
     "index": 0,
     "prefix": "h",
     "answer": "as",
     "word": "has",
     "slots": 2,
     "underscores": 2,
     "marker": "h_ _ ",
     "start": 124,
     "end": 129
    },
    {
     "index": 1,
     "prefix": "whe",
     "answer": "els",
     "word": "wheels",
     "slots": 3,
     "underscores": 3,
     "marker": "whe_ _ _ ",
     "start": 133,
     "end": 142
    },
    {
     "index": 2,
     "prefix": "pl",
     "answer": "ace",
     "word": "place",
     "slots": 3,
     "underscores": 3,
     "marker": "pl_ _ _ ",
     "start": 148,
     "end": 156
    },
    {
     "index": 3,
     "prefix": "s",
     "answer": "it",
     "word": "sit",
     "slots": 2,
     "underscores": 2,
     "marker": "s_ _ ",
     "start": 159,
     "end": 164
    },
    {
     "index": 4,
     "prefix": "n",
     "answer": "o",
     "word": "no",
     "slots": 1,
     "underscores": 1,
     "marker": "n_",
     "start": 170,
     "end": 172
    },
    {
     "index": 5,
     "prefix": "rid",
     "answer": "ers",
     "word": "riders",
     "slots": 3,
     "underscores": 3,
     "marker": "rid_ _ _ ",
     "start": 180,
     "end": 189
    },
    {
     "index": 6,
     "prefix": "pu",
     "answer": "sh",
     "word": "push",
     "slots": 2,
     "underscores": 2,
     "marker": "pu_ _ ",
     "start": 195,
     "end": 201
    },
    {
     "index": 7,
     "prefix": "al",
     "answer": "ong",
     "word": "along",
     "slots": 3,
     "underscores": 3,
     "marker": "al_ _ _ ",
     "start": 204,
     "end": 212
    },
    {
     "index": 8,
     "prefix": "th",
     "answer": "eir",
     "word": "their",
     "slots": 3,
     "underscores": 3,
     "marker": "th_ _ _ ",
     "start": 217,
     "end": 225
    },
    {
     "index": 9,
     "prefix": "La",
     "answer": "ter",
     "word": "Later",
     "slots": 3,
     "underscores": 3,
     "marker": "La_ _ _",
     "start": 231,
     "end": 238
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 技术史、历史"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "has",
     "reason": "v.三单←have（有）"
    },
    {
     "word": "wheels",
     "reason": "n.复←wheel（轮子）"
    },
    {
     "word": "place",
     "reason": "n.地方"
    },
    {
     "word": "sit",
     "reason": "v.坐"
    },
    {
     "word": "no",
     "reason": "adv./det.无／不"
    },
    {
     "word": "riders",
     "reason": "n.复←rider（骑行者）⚠ AB 显示\"rido\"，据语境校正为 riders"
    },
    {
     "word": "push",
     "reason": "v.推"
    },
    {
     "word": "along",
     "reason": "adv./prep.沿着⚠ AB 显示\"alers\"，据语境校正为 along"
    },
    {
     "word": "their",
     "reason": "pron.他们的⚠ AB 显示\"thong\"，据语境校正为 their"
    },
    {
     "word": "Later",
     "reason": "adv.后来⚠ AB 显示\"La,eir\"，据语境校正为 Later"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 It（主）has（谓）two wheels and a place（宾）；修饰：to sit 不定式作后置定语，修饰 place；riders would push it along with their feet 并列句（riders 主，push 谓，it 宾；along 副词；with their feet 介词短语作状语）。 - 句② 主干 an inventor（主）added（谓）pedals（宾）；修饰：Later 副词状语；directly to the front wheel 介词短语作状语（to the front wheel 后置定语）。"
    }
   ],
   "tags": [
    "社会科学",
    "历史",
    "技术史"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "真题-068",
   "month": "2026年4月",
   "source": "20260419D",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Classical Civilization",
   "discipline": "社会科学",
   "topic": "历史",
   "difficulty": "中等",
   "passage": "The study of the classical world involves examining the cultural, political, and social structures of ancient civilizations such as Greece and Rome. These soci_ _ _ _ _ have gre_ _ _ _ influenced mod _ _ _ governance, philo_ _ _ _ _, and a_ _. The con_ _ _ _ of demo_ _ _ _ _ originated i_ Athens, a_ _ Romans we_ _ superb engineers, building roads, aqueducts, and impressive buildings like the Pantheon. By understanding their advancements and contributions, we gain insight into the foundations of contemporary society. Archaeologists and historians employ various methods to uncover artifacts and interpret historical records from ancient times.",
   "blanks": [
    {
     "index": 0,
     "prefix": "soci",
     "answer": "eties",
     "word": "societies",
     "slots": 5,
     "underscores": 5,
     "marker": "soci_ _ _ _ _ ",
     "start": 155,
     "end": 169
    },
    {
     "index": 1,
     "prefix": "gre",
     "answer": "atly",
     "word": "greatly",
     "slots": 4,
     "underscores": 4,
     "marker": "gre_ _ _ _ ",
     "start": 174,
     "end": 185
    },
    {
     "index": 2,
     "prefix": "",
     "answer": "ern",
     "word": "ern",
     "slots": 3,
     "underscores": 3,
     "marker": "_ _ _ ",
     "start": 200,
     "end": 206
    },
    {
     "index": 3,
     "prefix": "philo",
     "answer": "sophy",
     "word": "philosophy",
     "slots": 5,
     "underscores": 5,
     "marker": "philo_ _ _ _ _",
     "start": 218,
     "end": 232
    },
    {
     "index": 4,
     "prefix": "a",
     "answer": "rt",
     "word": "art",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _",
     "start": 238,
     "end": 242
    },
    {
     "index": 5,
     "prefix": "con",
     "answer": "cept",
     "word": "concept",
     "slots": 4,
     "underscores": 4,
     "marker": "con_ _ _ _ ",
     "start": 248,
     "end": 259
    },
    {
     "index": 6,
     "prefix": "demo",
     "answer": "cracy",
     "word": "democracy",
     "slots": 5,
     "underscores": 5,
     "marker": "demo_ _ _ _ _ ",
     "start": 262,
     "end": 276
    },
    {
     "index": 7,
     "prefix": "i",
     "answer": "n",
     "word": "in",
     "slots": 1,
     "underscores": 1,
     "marker": "i_ ",
     "start": 287,
     "end": 290
    },
    {
     "index": 8,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 298,
     "end": 303
    },
    {
     "index": 9,
     "prefix": "we",
     "answer": "re",
     "word": "were",
     "slots": 2,
     "underscores": 2,
     "marker": "we_ _ ",
     "start": 310,
     "end": 316
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 文化史、历史"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "societies",
     "reason": "n.复←society（社会）"
    },
    {
     "word": "greatly",
     "reason": "adv.极大地（great→greatly）"
    },
    {
     "word": "modern",
     "reason": "adj.现代的"
    },
    {
     "word": "philosophy",
     "reason": "n.哲学"
    },
    {
     "word": "art",
     "reason": "n.艺术⚠ AB 显示\"a.rt\"逗号错位，据语境校正为 art"
    },
    {
     "word": "concept",
     "reason": "n.概念"
    },
    {
     "word": "democracy",
     "reason": "n.民主"
    },
    {
     "word": "in",
     "reason": "prep.在……中"
    },
    {
     "word": "and",
     "reason": "conj.和"
    },
    {
     "word": "were",
     "reason": "v.过去式←be（是）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 These societies（主）have influenced（谓）modern governance, philosophy, and art（宾）；修饰：无显著长修饰成分。 - 句② 主干 The concept（主）originated（谓）；修饰：of democracy 介词短语作后置定语；in Athens 介词短语作地点状语。"
    }
   ],
   "tags": [
    "社会科学",
    "历史",
    "文化史"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "真题-023",
   "month": "2026年5月",
   "source": "20260506B",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Rock Layer Records",
   "discipline": "自然科学",
   "topic": "地质学",
   "difficulty": "简单",
   "passage": "The study of geological formations provides insights into Earth's dynamic processes. Metamorphic rocks are rocks that have been transformed by heat and pressure. Sedimentary rocks fo_ _ as lay_ _ of mate_ _ _ build u_ over ti_ _ and a_ _ eventually pre_ _ _ _ and fu_ _ together t_ create so_ _ _ rock. The strata inside these formations serve as historical records of environmental conditions, revealing changes in climate, sea levels, and biological evolution. Analyzing rocks allows geologists to reconstruct past geological events.",
   "blanks": [
    {
     "index": 0,
     "prefix": "fo",
     "underscores": 2,
     "word": "form",
     "answer": "rm",
     "slots": 2,
     "marker": "fo_ _ ",
     "start": 180,
     "end": 186
    },
    {
     "index": 1,
     "prefix": "lay",
     "underscores": 2,
     "word": "layers",
     "answer": "ers",
     "slots": 3,
     "marker": "lay_ _ ",
     "start": 189,
     "end": 196
    },
    {
     "index": 2,
     "prefix": "mate",
     "underscores": 3,
     "word": "material",
     "answer": "rial",
     "slots": 4,
     "marker": "mate_ _ _ ",
     "start": 199,
     "end": 209
    },
    {
     "index": 3,
     "prefix": "u",
     "underscores": 1,
     "word": "up",
     "answer": "p",
     "slots": 1,
     "marker": "u_ ",
     "start": 215,
     "end": 218
    },
    {
     "index": 4,
     "prefix": "ti",
     "underscores": 2,
     "word": "time",
     "answer": "me",
     "slots": 2,
     "marker": "ti_ _ ",
     "start": 223,
     "end": 229
    },
    {
     "index": 5,
     "prefix": "a",
     "underscores": 2,
     "word": "are",
     "answer": "re",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 233,
     "end": 238
    },
    {
     "index": 6,
     "prefix": "pre",
     "underscores": 4,
     "word": "pressed",
     "answer": "ssed",
     "slots": 4,
     "marker": "pre_ _ _ _ ",
     "start": 249,
     "end": 260
    },
    {
     "index": 7,
     "prefix": "fu",
     "underscores": 2,
     "word": "fused",
     "answer": "sed",
     "slots": 3,
     "marker": "fu_ _ ",
     "start": 264,
     "end": 270
    },
    {
     "index": 8,
     "prefix": "t",
     "underscores": 1,
     "word": "to",
     "answer": "o",
     "slots": 1,
     "marker": "t_ ",
     "start": 279,
     "end": 282
    },
    {
     "index": 9,
     "prefix": "so",
     "underscores": 3,
     "word": "solid",
     "answer": "lid",
     "slots": 3,
     "marker": "so_ _ _ ",
     "start": 289,
     "end": 297
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 地球动力学、地球构造与地质学，围绕沉积岩形成与地层记录展开。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "form",
     "reason": "v.形成"
    },
    {
     "word": "layer",
     "reason": "n.层"
    },
    {
     "word": "material",
     "reason": "n.材料"
    },
    {
     "word": "up",
     "reason": "adv.向上（与 build 构成短语动词）"
    },
    {
     "word": "time",
     "reason": "n.时间"
    },
    {
     "word": "are",
     "reason": "v.复数现在式←be"
    },
    {
     "word": "pressed",
     "reason": "v.过去分词←press（压实）"
    },
    {
     "word": "fused",
     "reason": "v.过去式←fuse（熔合）"
    },
    {
     "word": "to",
     "reason": "prep.到／不定式标记"
    },
    {
     "word": "solid",
     "reason": "adj.坚实的 ⚠AB中\"some\"为错拼，据语境应为solid（greedy亦误）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 Sedimentary rocks（主）form（谓）and are pressed and fused（谓）；修饰：as layer of material build up over time 方式状语（as 引出，修饰 form）；eventually 副词时间状语（修饰 pressed/fused）；to create solid rock 不定式短语作目的状语。"
    }
   ],
   "tags": [
    "自然科学",
    "地质学",
    "地球构造",
    "地球动力学"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-008",
   "month": "2026年5月",
   "source": "20260510B",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Economics",
   "discipline": "社会科学",
   "topic": "政治经济",
   "difficulty": "困难",
   "passage": "Economics is the social science that studies the production, distribution, and consumption of goods and services. It exam_ _ _ _ how indiv_ _ _ _ _ _ , households, busin_ _ _ _ _ , and gover_ _ _ _ _ _ make cho_ _ _ _ about reso_ _ _ _ allocation a_ _ how su_ _ decisions aff_ _ _ overall stab_ _ _ _ _ and growth in the economy. Through the application of theoretical models and the collection of empirical data, economists can help policymakers formulate strategies to address issues such as inflation, unemployment, and trade imbalances, thereby improving societal well-being.",
   "blanks": [
    {
     "index": 0,
     "prefix": "exam",
     "underscores": 4,
     "word": "examines",
     "answer": "ines",
     "slots": 4,
     "marker": "exam_ _ _ _ ",
     "start": 117,
     "end": 129
    },
    {
     "index": 1,
     "prefix": "indiv",
     "underscores": 6,
     "word": "individuals",
     "answer": "iduals",
     "slots": 6,
     "marker": "indiv_ _ _ _ _ _ ",
     "start": 133,
     "end": 150
    },
    {
     "index": 2,
     "prefix": "busin",
     "underscores": 5,
     "word": "businesses",
     "answer": "esses",
     "slots": 5,
     "marker": "busin_ _ _ _ _ ",
     "start": 164,
     "end": 179
    },
    {
     "index": 3,
     "prefix": "gover",
     "underscores": 6,
     "word": "governments",
     "answer": "nments",
     "slots": 6,
     "marker": "gover_ _ _ _ _ _ ",
     "start": 185,
     "end": 202
    },
    {
     "index": 4,
     "prefix": "cho",
     "underscores": 4,
     "word": "choices",
     "answer": "ices",
     "slots": 4,
     "marker": "cho_ _ _ _ ",
     "start": 207,
     "end": 218
    },
    {
     "index": 5,
     "prefix": "reso",
     "underscores": 4,
     "word": "resource",
     "answer": "urce",
     "slots": 4,
     "marker": "reso_ _ _ _ ",
     "start": 224,
     "end": 236
    },
    {
     "index": 6,
     "prefix": "a",
     "underscores": 2,
     "word": "and",
     "answer": "nd",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 247,
     "end": 252
    },
    {
     "index": 7,
     "prefix": "su",
     "underscores": 2,
     "word": "such",
     "answer": "ch",
     "slots": 2,
     "marker": "su_ _ ",
     "start": 256,
     "end": 262
    },
    {
     "index": 8,
     "prefix": "aff",
     "underscores": 3,
     "word": "affect",
     "answer": "ect",
     "slots": 3,
     "marker": "aff_ _ _ ",
     "start": 272,
     "end": 281
    },
    {
     "index": 9,
     "prefix": "stab",
     "underscores": 5,
     "word": "stability",
     "answer": "ility",
     "slots": 5,
     "marker": "stab_ _ _ _ _ ",
     "start": 289,
     "end": 303
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 经济学的影响、经济学与政治经济，阐释经济学对社会资源配置的作用。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "examines",
     "reason": "v.三单←examine（考察）"
    },
    {
     "word": "individuals",
     "reason": "n.复←individual（个人）"
    },
    {
     "word": "businesses",
     "reason": "n.复←business（企业）"
    },
    {
     "word": "governments",
     "reason": "n.复←government（政府）"
    },
    {
     "word": "choices",
     "reason": "n.复←choice（选择）"
    },
    {
     "word": "resource",
     "reason": "n.资源"
    },
    {
     "word": "and",
     "reason": "conj.和"
    },
    {
     "word": "such",
     "reason": "adj.这样的"
    },
    {
     "word": "affect",
     "reason": "v.影响"
    },
    {
     "word": "stability",
     "reason": "n.稳定←stable"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 Economics（主，it 指代）examines（谓）how individuals, households, businesses and governments make choices and how such decisions affect overall stability and growth（双 how 宾语从句作宾）；修饰：about resource allocation 介词短语作后置定语（修饰 choices）；in the economy 介词短语作后置定语（修饰 stability and growth）。"
    }
   ],
   "tags": [
    "社会科学",
    "政治经济",
    "经济学",
    "经济学的影响"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-021",
   "month": "2026年5月",
   "source": "20260520A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Academic Reasoning",
   "discipline": "社会科学",
   "topic": "教育",
   "difficulty": "中等",
   "passage": "In academic research, reasoning is key to forming and testing hypotheses. Logical reasoning uses structured thinking to evaluate arguments and reach conclusions. Deductive reasoning starts with known facts and leads to certain outcomes, while inductive reasoning draws gen_ _ _ _ ideas fr_ _ specific observ_ _ _ _ _ _, though i_ involves so_ _ uncertainty. Us_ _ _ both met_ _ _ _ together stren_ _ _ _ _ _ the appr_ _ _ _ to invest_ _ _ _ _ _ _ and inquiry. This practice helps scholars build solid arguments and make informed decisions. By applying clear reasoning strategies, researchers can advance knowledge and contribute meaningful insights to their fields.",
   "blanks": [
    {
     "index": 0,
     "prefix": "gen",
     "answer": "eral",
     "word": "general",
     "slots": 4,
     "underscores": 4,
     "marker": "gen_ _ _ _ ",
     "start": 269,
     "end": 280
    },
    {
     "index": 1,
     "prefix": "fr",
     "answer": "om",
     "word": "from",
     "slots": 2,
     "underscores": 2,
     "marker": "fr_ _ ",
     "start": 286,
     "end": 292
    },
    {
     "index": 2,
     "prefix": "observ",
     "answer": "ations",
     "word": "observations",
     "slots": 6,
     "underscores": 6,
     "marker": "observ_ _ _ _ _ _",
     "start": 301,
     "end": 318
    },
    {
     "index": 3,
     "prefix": "i",
     "answer": "t",
     "word": "it",
     "slots": 1,
     "underscores": 1,
     "marker": "i_ ",
     "start": 327,
     "end": 330
    },
    {
     "index": 4,
     "prefix": "so",
     "answer": "me",
     "word": "some",
     "slots": 2,
     "underscores": 2,
     "marker": "so_ _ ",
     "start": 339,
     "end": 345
    },
    {
     "index": 5,
     "prefix": "Us",
     "answer": "ing",
     "word": "Using",
     "slots": 3,
     "underscores": 3,
     "marker": "Us_ _ _ ",
     "start": 358,
     "end": 366
    },
    {
     "index": 6,
     "prefix": "met",
     "answer": "hods",
     "word": "methods",
     "slots": 4,
     "underscores": 4,
     "marker": "met_ _ _ _ ",
     "start": 371,
     "end": 382
    },
    {
     "index": 7,
     "prefix": "stren",
     "answer": "gthens",
     "word": "strengthens",
     "slots": 6,
     "underscores": 6,
     "marker": "stren_ _ _ _ _ _ ",
     "start": 391,
     "end": 408
    },
    {
     "index": 8,
     "prefix": "appr",
     "answer": "oach",
     "word": "approach",
     "slots": 4,
     "underscores": 4,
     "marker": "appr_ _ _ _ ",
     "start": 412,
     "end": 424
    },
    {
     "index": 9,
     "prefix": "invest",
     "answer": "igation",
     "word": "investigation",
     "slots": 7,
     "underscores": 7,
     "marker": "invest_ _ _ _ _ _ _ ",
     "start": 427,
     "end": 447
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 逻辑和推理、教育方法与教育，阐释学术研究中演绎与归纳推理的结合。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "general",
     "reason": "adj.普遍的／概括的"
    },
    {
     "word": "from",
     "reason": "prep.从"
    },
    {
     "word": "observations",
     "reason": "n.复←observation（观察）"
    },
    {
     "word": "it",
     "reason": "pron.它"
    },
    {
     "word": "some",
     "reason": "adj.一些"
    },
    {
     "word": "Using",
     "reason": "v.现在分词←use（运用）"
    },
    {
     "word": "methods",
     "reason": "n.复←method（方法）"
    },
    {
     "word": "strengthens",
     "reason": "v.三单←strengthen（加强）"
    },
    {
     "word": "approach",
     "reason": "n.方法／途径"
    },
    {
     "word": "investigation",
     "reason": "n.调查←investigate"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 inductive reasoning（主）draws（谓）general ideas（宾）；修饰：from specific observations 介词短语作后置定语（修饰 ideas）；though it involves some uncertainty 状语从句（让步，though 引出）。 - 句② 主干 Using both methods together（现在分词短语作主语）strengthens（谓）the approach（宾）；修饰：to investigation and inquiry 不定式短语作后置定语（修饰 approach）。"
    }
   ],
   "tags": [
    "社会科学",
    "教育",
    "教育方法",
    "逻辑和推理"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "真题-012",
   "month": "2026年5月",
   "source": "20260523A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Terrestrial Mammals",
   "discipline": "生命科学",
   "topic": "生物",
   "difficulty": "中等",
   "passage": "Terrestrial mammals exhibit a fascinating array of adaptations that help them survive and thrive in diverse environments. From com_ _ _ _ social intera_ _ _ _ _ _ that imp_ _ _ _ group surv_ _ _ _ to ingen_ _ _ _ _ _ designed lu_ _ _ that enh_ _ _ _ oxygen absor_ _ _ _ _, these crea_ _ _ _ _ are bu_ _ _ for resilience. Some have evolved powerful limbs for digging deep burrows, while others have agile bodies perfect for scaling trees or sprinting across open plains. Their sharp senses and stealthy movements are often the result of a high-stakes evolutionary arms race between predator and prey.",
   "blanks": [
    {
     "index": 0,
     "prefix": "com",
     "answer": "plex",
     "word": "complex",
     "slots": 4,
     "underscores": 4,
     "marker": "com_ _ _ _ ",
     "start": 127,
     "end": 138
    },
    {
     "index": 1,
     "prefix": "intera",
     "answer": "ctions",
     "word": "interactions",
     "slots": 6,
     "underscores": 6,
     "marker": "intera_ _ _ _ _ _ ",
     "start": 145,
     "end": 163
    },
    {
     "index": 2,
     "prefix": "imp",
     "answer": "rove",
     "word": "improve",
     "slots": 4,
     "underscores": 4,
     "marker": "imp_ _ _ _ ",
     "start": 168,
     "end": 179
    },
    {
     "index": 3,
     "prefix": "surv",
     "answer": "ival",
     "word": "survival",
     "slots": 4,
     "underscores": 4,
     "marker": "surv_ _ _ _ ",
     "start": 185,
     "end": 197
    },
    {
     "index": 4,
     "prefix": "ingen",
     "answer": "iously",
     "word": "ingeniously",
     "slots": 6,
     "underscores": 6,
     "marker": "ingen_ _ _ _ _ _ ",
     "start": 200,
     "end": 217
    },
    {
     "index": 5,
     "prefix": "lu",
     "answer": "ngs",
     "word": "lungs",
     "slots": 3,
     "underscores": 3,
     "marker": "lu_ _ _ ",
     "start": 226,
     "end": 234
    },
    {
     "index": 6,
     "prefix": "enh",
     "answer": "ance",
     "word": "enhance",
     "slots": 4,
     "underscores": 4,
     "marker": "enh_ _ _ _ ",
     "start": 239,
     "end": 250
    },
    {
     "index": 7,
     "prefix": "absor",
     "answer": "ption",
     "word": "absorption",
     "slots": 5,
     "underscores": 5,
     "marker": "absor_ _ _ _ _",
     "start": 257,
     "end": 271
    },
    {
     "index": 8,
     "prefix": "crea",
     "answer": "tures",
     "word": "creatures",
     "slots": 5,
     "underscores": 5,
     "marker": "crea_ _ _ _ _ ",
     "start": 279,
     "end": 293
    },
    {
     "index": 9,
     "prefix": "bu",
     "answer": "ilt",
     "word": "built",
     "slots": 3,
     "underscores": 3,
     "marker": "bu_ _ _ ",
     "start": 297,
     "end": 305
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 陆生哺乳动物、生物适应性、生存策略。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "complex",
     "reason": "adj.复杂的"
    },
    {
     "word": "interactions",
     "reason": "n.复←interaction（互动）"
    },
    {
     "word": "improve",
     "reason": "v.改善"
    },
    {
     "word": "survival",
     "reason": "n.存活←survive（生存）"
    },
    {
     "word": "ingeniously",
     "reason": "adv.巧妙地←ingenious（巧妙的）"
    },
    {
     "word": "lungs",
     "reason": "n.复←lung（肺）"
    },
    {
     "word": "enhance",
     "reason": "v.增强"
    },
    {
     "word": "absorption",
     "reason": "n.吸收←absorb（吸收）"
    },
    {
     "word": "creatures",
     "reason": "n.复←creature（生物）"
    },
    {
     "word": "built",
     "reason": "v.过去式←build（构建）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 these creatures（主）are built（谓）for resilience（宾）；修饰：From complex social interactions that improve group survival to ingeniously designed lungs that enhance oxygen absorption 介词短语（From...to...对比结构）作状语；that improve group survival 定语从句修饰 interactions；that enhance oxygen absorption 定语从句修饰 lungs；for resilience 介词短语作补语。"
    }
   ],
   "tags": [
    "生命科学",
    "生物",
    "动物"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "真题-104",
   "month": "2026年5月",
   "source": "来源未标注",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Skyscrapers",
   "discipline": "艺术",
   "topic": "音乐",
   "difficulty": "困难",
   "passage": "During the late nineteenth and early twentieth centuries, the landscape of North American urban centers underwent dramatic transformations as industrialization accelerated. Cities expanded rap_ _ _ _, fueled b_ the arr_ _ _ _ of immig_ _ _ _ _ and ru_ _ _ populations see_ _ _ _ employment i_ factories. This dyn_ _ _ _ era witn_ _ _ _ _ the ri_ _ of skyscrapers, symbolizing progress and technological triumph. Architects and planners grappled with the challenges posed by such quick growth, including overcrowding and sanitation issues. Public transit systems, like streetcars, emerged as pivotal solutions to urban congestion, altering the rhythm of daily life.",
   "blanks": [
    {
     "index": 0,
     "prefix": "rap",
     "answer": "idly",
     "word": "rapidly",
     "slots": 4,
     "underscores": 4,
     "marker": "rap_ _ _ _",
     "start": 189,
     "end": 199
    },
    {
     "index": 1,
     "prefix": "b",
     "answer": "y",
     "word": "by",
     "slots": 1,
     "underscores": 1,
     "marker": "b_ ",
     "start": 208,
     "end": 211
    },
    {
     "index": 2,
     "prefix": "arr",
     "answer": "ival",
     "word": "arrival",
     "slots": 4,
     "underscores": 4,
     "marker": "arr_ _ _ _ ",
     "start": 215,
     "end": 226
    },
    {
     "index": 3,
     "prefix": "immig",
     "answer": "rants",
     "word": "immigrants",
     "slots": 5,
     "underscores": 5,
     "marker": "immig_ _ _ _ _ ",
     "start": 229,
     "end": 244
    },
    {
     "index": 4,
     "prefix": "ru",
     "answer": "ral",
     "word": "rural",
     "slots": 3,
     "underscores": 3,
     "marker": "ru_ _ _ ",
     "start": 248,
     "end": 256
    },
    {
     "index": 5,
     "prefix": "see",
     "answer": "king",
     "word": "seeking",
     "slots": 4,
     "underscores": 4,
     "marker": "see_ _ _ _ ",
     "start": 268,
     "end": 279
    },
    {
     "index": 6,
     "prefix": "i",
     "answer": "n",
     "word": "in",
     "slots": 1,
     "underscores": 1,
     "marker": "i_ ",
     "start": 290,
     "end": 293
    },
    {
     "index": 7,
     "prefix": "dyn",
     "answer": "amic",
     "word": "dynamic",
     "slots": 4,
     "underscores": 4,
     "marker": "dyn_ _ _ _ ",
     "start": 309,
     "end": 320
    },
    {
     "index": 8,
     "prefix": "witn",
     "answer": "essed",
     "word": "witnessed",
     "slots": 5,
     "underscores": 5,
     "marker": "witn_ _ _ _ _ ",
     "start": 324,
     "end": 338
    },
    {
     "index": 9,
     "prefix": "ri",
     "answer": "se",
     "word": "rise",
     "slots": 2,
     "underscores": 2,
     "marker": "ri_ _ ",
     "start": 342,
     "end": 348
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 北美都市扩张、摩天大楼、工业化与城市化。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "rapidly",
     "reason": "adv.快速地（rapid→rapidly）"
    },
    {
     "word": "by",
     "reason": "prep.被／由"
    },
    {
     "word": "arrival",
     "reason": "n.到来←arrive（到达）"
    },
    {
     "word": "immigrants",
     "reason": "n.复←immigrant（移民）"
    },
    {
     "word": "rural",
     "reason": "adj.乡村的"
    },
    {
     "word": "seeking",
     "reason": "v.现在分词←seek（寻找）"
    },
    {
     "word": "in",
     "reason": "prep.在…中"
    },
    {
     "word": "dynamic",
     "reason": "adj.充满活力的"
    },
    {
     "word": "witnessed",
     "reason": "v.过去式←witness（见证）"
    },
    {
     "word": "rise",
     "reason": "n.崛起／兴起"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 Cities（主）expanded（谓）；修饰：fueled by the arrival of immigrants and rural populations 过去分词短语作原因状语；seeking employment in factories 现在分词短语作定语修饰 populations；in factories 介词短语作状语。 - 句② 主干 era（主）witnessed（谓）the rise of skyscrapers（宾）；修饰：of skyscrapers 介词短语作定语；symbolizing progress and technological triumph 现在分词短语作状语。"
    }
   ],
   "tags": [
    "艺术",
    "音乐"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "真题-114",
   "month": "2026年6月",
   "source": "20260603A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Agricultural Revolution",
   "discipline": "社会科学",
   "topic": "历史",
   "difficulty": "中等",
   "passage": "At the dawn of civilization, humans relied heavily on their natural surroundings to meet basic needs. Early humans were primarily hunters and gatherers, foraging for edible plants and hunting wild animals. This required humans to move often to find food. Over ti_, they obse_ _ _ _ natural patt_ _ _ _ and be_ _ _ planting se_ _ _, sparking t_ _ agricultural revol_ _ _ _ _. This cha_ _ _ allowed perm_ _ _ _ _ settlements a_ _ growing communities. With larger populations came complex social structures, trade, and specialized crafts.",
   "blanks": [
    {
     "index": 0,
     "prefix": "ti",
     "answer": "me",
     "word": "time",
     "slots": 2,
     "marker": "ti_",
     "start": 260,
     "end": 263
    },
    {
     "index": 1,
     "prefix": "obse",
     "answer": "rved",
     "word": "observed",
     "slots": 4,
     "marker": "obse_ _ _ _ ",
     "start": 270,
     "end": 282
    },
    {
     "index": 2,
     "prefix": "patt",
     "answer": "erns",
     "word": "patterns",
     "slots": 4,
     "marker": "patt_ _ _ _ ",
     "start": 290,
     "end": 302
    },
    {
     "index": 3,
     "prefix": "be",
     "answer": "gan",
     "word": "began",
     "slots": 3,
     "marker": "be_ _ _ ",
     "start": 306,
     "end": 314
    },
    {
     "index": 4,
     "prefix": "se",
     "answer": "eds",
     "word": "seeds",
     "slots": 3,
     "marker": "se_ _ _",
     "start": 323,
     "end": 330
    },
    {
     "index": 5,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "marker": "t_ _ ",
     "start": 341,
     "end": 346
    },
    {
     "index": 6,
     "prefix": "revol",
     "answer": "ution",
     "word": "revolution",
     "slots": 5,
     "marker": "revol_ _ _ _ _",
     "start": 359,
     "end": 373
    },
    {
     "index": 7,
     "prefix": "cha",
     "answer": "nge",
     "word": "change",
     "slots": 3,
     "marker": "cha_ _ _ ",
     "start": 380,
     "end": 389
    },
    {
     "index": 8,
     "prefix": "perm",
     "answer": "anent",
     "word": "permanent",
     "slots": 5,
     "marker": "perm_ _ _ _ _ ",
     "start": 397,
     "end": 411
    },
    {
     "index": 9,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 423,
     "end": 428
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 农业革命、早期人类文明、农业发展史。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "time",
     "reason": "n.时间"
    },
    {
     "word": "observed",
     "reason": "v.过去式←observe（观察）"
    },
    {
     "word": "patterns",
     "reason": "n.复←pattern（模式）"
    },
    {
     "word": "began",
     "reason": "v.过去式←begin（开始）"
    },
    {
     "word": "seeds",
     "reason": "n.复←seed（种子）"
    },
    {
     "word": "the",
     "reason": "art.定冠词"
    },
    {
     "word": "revolution",
     "reason": "n.革命"
    },
    {
     "word": "change",
     "reason": "n.变化"
    },
    {
     "word": "permanent",
     "reason": "adj.永久的"
    },
    {
     "word": "and",
     "reason": "conj.和"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 they（主）observed（谓）patterns（宾）and began（谓）planting seeds（宾）；修饰：Over time 介词短语作状语；sparking the agricultural revolution 现在分词短语作结果状语。 - 句② 主干 change（主）allowed（谓）settlements and communities（宾）；修饰：无显著长修饰成分。"
    }
   ],
   "tags": [
    "社会科学",
    "历史",
    "农业",
    "农业发展"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "真题-107",
   "month": "2026年6月",
   "source": "20260606A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Environment & Energy",
   "discipline": "自然科学",
   "topic": "环境科学",
   "difficulty": "困难",
   "passage": "In recent decades, environmental awareness has surged, driven largely by the visible impacts of climate change and the depletion of natural resources. As soci_ _ _ _ _ grapple wi_ _ the nece_ _ _ _ _ of susta_ _ _ _ _ _ practices, deb_ _ _ _ continue ov_ _ the mo_ _ effective strat_ _ _ _ _. Renewable ene_ _ _ sources, su_ _ as solar and wind power, have gained prominence as potential solutions. Nevertheless, their implementation often encounters hurdles ranging from economic feasibility to technological limitations. Moreover, the transition toward greener alternatives necessitates a paradigm shift in both consumption patterns and industrial processes.",
   "blanks": [
    {
     "index": 0,
     "prefix": "soci",
     "answer": "eties",
     "word": "societies",
     "slots": 5,
     "underscores": 5,
     "marker": "soci_ _ _ _ _ ",
     "start": 154,
     "end": 168
    },
    {
     "index": 1,
     "prefix": "wi",
     "answer": "th",
     "word": "with",
     "slots": 2,
     "underscores": 2,
     "marker": "wi_ _ ",
     "start": 176,
     "end": 182
    },
    {
     "index": 2,
     "prefix": "nece",
     "answer": "ssity",
     "word": "necessity",
     "slots": 5,
     "underscores": 5,
     "marker": "nece_ _ _ _ _ ",
     "start": 186,
     "end": 200
    },
    {
     "index": 3,
     "prefix": "susta",
     "answer": "inable",
     "word": "sustainable",
     "slots": 6,
     "underscores": 6,
     "marker": "susta_ _ _ _ _ _ ",
     "start": 203,
     "end": 220
    },
    {
     "index": 4,
     "prefix": "deb",
     "answer": "ates",
     "word": "debates",
     "slots": 4,
     "underscores": 4,
     "marker": "deb_ _ _ _ ",
     "start": 231,
     "end": 242
    },
    {
     "index": 5,
     "prefix": "ov",
     "answer": "er",
     "word": "over",
     "slots": 2,
     "underscores": 2,
     "marker": "ov_ _ ",
     "start": 251,
     "end": 257
    },
    {
     "index": 6,
     "prefix": "mo",
     "answer": "st",
     "word": "most",
     "slots": 2,
     "underscores": 2,
     "marker": "mo_ _ ",
     "start": 261,
     "end": 267
    },
    {
     "index": 7,
     "prefix": "strat",
     "answer": "egies",
     "word": "strategies",
     "slots": 5,
     "underscores": 5,
     "marker": "strat_ _ _ _ _",
     "start": 277,
     "end": 291
    },
    {
     "index": 8,
     "prefix": "ene",
     "answer": "rgy",
     "word": "energy",
     "slots": 3,
     "underscores": 3,
     "marker": "ene_ _ _ ",
     "start": 303,
     "end": 312
    },
    {
     "index": 9,
     "prefix": "su",
     "answer": "ch",
     "word": "such",
     "slots": 2,
     "underscores": 2,
     "marker": "su_ _ ",
     "start": 321,
     "end": 327
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 环境意识、能源与可持续发展、气候议题。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "societies",
     "reason": "n.复←society（社会）"
    },
    {
     "word": "with",
     "reason": "prep.与／面对"
    },
    {
     "word": "necessity",
     "reason": "n.必要性（necessary→necessity）"
    },
    {
     "word": "sustainable",
     "reason": "adj.可持续的（sustain→sustainable）"
    },
    {
     "word": "debates",
     "reason": "n.复←debate（辩论）"
    },
    {
     "word": "over",
     "reason": "prep.关于"
    },
    {
     "word": "most",
     "reason": "adv.最（much→most）"
    },
    {
     "word": "strategies",
     "reason": "n.复←strategy（策略）"
    },
    {
     "word": "energy",
     "reason": "n.能源"
    },
    {
     "word": "such",
     "reason": "pron./adj.这样的"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 debates（主）continue（谓）；修饰：As societies grapple with the necessity of sustainable practices 状语从句；of sustainable practices 介词短语作定语；over the most effective strategies 介词短语作状语。 - 句② 主干 sources（主）have gained（谓）prominence（宾）；修饰：such as solar and wind power 介词短语作列举（同位语）；as potential solutions 介词短语作状语。"
    }
   ],
   "tags": [
    "自然科学",
    "环境科学",
    "气候气象"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "真题-106",
   "month": "2026年6月",
   "source": "20260606A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Chiaroscuro",
   "discipline": "艺术",
   "topic": "艺术史",
   "difficulty": "中等",
   "passage": "In the world of academia, art history is more than just studying paintings—it is about decoding the emotional language of visual storytelling. For example, chiaroscuro is a tech_ _ _ _ _ that origi_ _ _ _ _ during t_ _ Renaissance. Exemp_ _ _ _ _ _ by str_ _ _ contrast bet_ _ _ _ light a_ _ shadow, the st_ _ _ evokes dr_ _ _ through sele_ _ _ _ _ illumination. Artists like Caravaggio mastered this interplay, using it to pull viewers into the heart of his scenes, guiding their eyes and stirring their emotions with every flicker of light.",
   "blanks": [
    {
     "index": 0,
     "prefix": "tech",
     "underscores": 5,
     "word": "technique",
     "answer": "nique",
     "slots": 5,
     "marker": "tech_ _ _ _ _ ",
     "start": 173,
     "end": 187
    },
    {
     "index": 1,
     "prefix": "origi",
     "underscores": 5,
     "word": "originated",
     "answer": "nated",
     "slots": 5,
     "marker": "origi_ _ _ _ _ ",
     "start": 192,
     "end": 207
    },
    {
     "index": 2,
     "prefix": "t",
     "underscores": 2,
     "word": "the",
     "answer": "he",
     "slots": 2,
     "marker": "t_ _ ",
     "start": 214,
     "end": 219
    },
    {
     "index": 3,
     "prefix": "Exemp",
     "underscores": 6,
     "word": "Exemplified",
     "answer": "lified",
     "slots": 6,
     "marker": "Exemp_ _ _ _ _ _ ",
     "start": 232,
     "end": 249
    },
    {
     "index": 4,
     "prefix": "str",
     "underscores": 3,
     "word": "strong",
     "answer": "ong",
     "slots": 3,
     "marker": "str_ _ _ ",
     "start": 252,
     "end": 261
    },
    {
     "index": 5,
     "prefix": "bet",
     "underscores": 4,
     "word": "between",
     "answer": "ween",
     "slots": 4,
     "marker": "bet_ _ _ _ ",
     "start": 270,
     "end": 281
    },
    {
     "index": 6,
     "prefix": "a",
     "underscores": 2,
     "word": "and",
     "answer": "nd",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 287,
     "end": 292
    },
    {
     "index": 7,
     "prefix": "st",
     "underscores": 3,
     "word": "style",
     "answer": "yle",
     "slots": 3,
     "marker": "st_ _ _ ",
     "start": 304,
     "end": 312
    },
    {
     "index": 8,
     "prefix": "dr",
     "underscores": 3,
     "word": "drama",
     "answer": "ama",
     "slots": 3,
     "marker": "dr_ _ _ ",
     "start": 319,
     "end": 327
    },
    {
     "index": 9,
     "prefix": "sele",
     "underscores": 5,
     "word": "selective",
     "answer": "ctive",
     "slots": 5,
     "marker": "sele_ _ _ _ _ ",
     "start": 335,
     "end": 349
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 艺术史（按时期）、艺术史、视觉叙事中的明暗对照法（chiaroscuro）。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "technique",
     "reason": "n.←technic（技法／技术）"
    },
    {
     "word": "originated",
     "reason": "v.过去式←originate（起源）"
    },
    {
     "word": "the",
     "reason": "art.定冠词"
    },
    {
     "word": "Exemplified",
     "reason": "v.过去分词←exemplify（例证）"
    },
    {
     "word": "strong",
     "reason": "adj.强烈的"
    },
    {
     "word": "between",
     "reason": "prep.在…之间"
    },
    {
     "word": "and",
     "reason": "conj.和／与"
    },
    {
     "word": "style",
     "reason": "n.风格"
    },
    {
     "word": "drama",
     "reason": "n.戏剧性／张力"
    },
    {
     "word": "selective",
     "reason": "adj.选择性的（select→selective）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句② 主干 chiaroscuro（主）is（谓）a technique（宾）；修饰：that originated during the Renaissance 定语从句修饰 technique；during the Renaissance 介词短语作时间状语。 - 句③ 主干 the style（主）evokes（谓）drama（宾）；修饰：Exemplified by strong contrast between light and shadow 过去分词短语作状语（方式／原因，表被动）；through selective illumination 介词短语作方式状语。"
    }
   ],
   "tags": [
    "艺术",
    "艺术史",
    "艺术史（按时期）"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-066",
   "month": "2026年6月",
   "source": "20260607C",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Prehistoric Art",
   "discipline": "艺术",
   "topic": "艺术史",
   "difficulty": "中等",
   "passage": "Prehistoric art and religion provide invaluable insights into the spiritual life of early humans. Cave paintings and carvings often depict animals and symbolic figures, reflecting the beliefs and rituals of ancient communities. These artworks se_ _ _ as a win_ _ _ into t_ _ social struc_ _ _ _ _ and cult_ _ _ _ practices o_ prehistoric ti_ _ _. By stud_ _ _ _ them, resea_ _ _ _ _ _ can bet_ _ _ understand the evolution of human thought and spirituality. These early forms of art show that even long ago, people had deep feelings, ideas, and questions about life and the world around them.",
   "blanks": [
    {
     "index": 0,
     "prefix": "se",
     "answer": "rve",
     "word": "serve",
     "slots": 3,
     "underscores": 3,
     "marker": "se_ _ _ ",
     "start": 243,
     "end": 251
    },
    {
     "index": 1,
     "prefix": "win",
     "answer": "dow",
     "word": "window",
     "slots": 3,
     "underscores": 3,
     "marker": "win_ _ _ ",
     "start": 256,
     "end": 265
    },
    {
     "index": 2,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "underscores": 2,
     "marker": "t_ _ ",
     "start": 270,
     "end": 275
    },
    {
     "index": 3,
     "prefix": "struc",
     "answer": "tures",
     "word": "structures",
     "slots": 5,
     "underscores": 5,
     "marker": "struc_ _ _ _ _ ",
     "start": 282,
     "end": 297
    },
    {
     "index": 4,
     "prefix": "cult",
     "answer": "ural",
     "word": "cultural",
     "slots": 4,
     "underscores": 4,
     "marker": "cult_ _ _ _ ",
     "start": 301,
     "end": 313
    },
    {
     "index": 5,
     "prefix": "o",
     "answer": "f",
     "word": "of",
     "slots": 1,
     "underscores": 1,
     "marker": "o_ ",
     "start": 323,
     "end": 326
    },
    {
     "index": 6,
     "prefix": "ti",
     "answer": "mes",
     "word": "times",
     "slots": 3,
     "underscores": 3,
     "marker": "ti_ _ _",
     "start": 338,
     "end": 345
    },
    {
     "index": 7,
     "prefix": "stud",
     "answer": "ying",
     "word": "studying",
     "slots": 4,
     "underscores": 4,
     "marker": "stud_ _ _ _ ",
     "start": 350,
     "end": 362
    },
    {
     "index": 8,
     "prefix": "resea",
     "answer": "rchers",
     "word": "researchers",
     "slots": 6,
     "underscores": 6,
     "marker": "resea_ _ _ _ _ _ ",
     "start": 368,
     "end": 385
    },
    {
     "index": 9,
     "prefix": "bet",
     "answer": "ter",
     "word": "better",
     "slots": 3,
     "underscores": 3,
     "marker": "bet_ _ _ ",
     "start": 389,
     "end": 398
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 史前艺术与宗教、史前艺术、艺术史（社会结构与文化实践）。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "serve",
     "reason": "v.原形（充当／作为）"
    },
    {
     "word": "window",
     "reason": "n.窗口（a window into...）"
    },
    {
     "word": "the",
     "reason": "art.定冠词"
    },
    {
     "word": "structures",
     "reason": "n.复←structure（结构）"
    },
    {
     "word": "cultural",
     "reason": "adj.文化的（culture→cultural）"
    },
    {
     "word": "of",
     "reason": "prep.…的"
    },
    {
     "word": "times",
     "reason": "n.复←time（时代；prehistoric times）"
    },
    {
     "word": "studying",
     "reason": "v.现在分词←study（研究）"
    },
    {
     "word": "researchers",
     "reason": "n.复←researcher（研究者）"
    },
    {
     "word": "better",
     "reason": "adv.更好地（well/good→better）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句③ 主干 These artworks（主）serve（谓）as a window（宾）；修饰：into the social structures and cultural practices of prehistoric times 介词短语作后置定语修饰 window；of prehistoric times 介词短语作后置定语修饰 practices。 - 句④ 主干 researchers（主）can understand（谓）the evolution of human thought and spirituality（宾）；修饰：By studying them 介词短语作方式状语；of human thought and spirituality 介词短语作后置定语修饰 evolution。"
    }
   ],
   "tags": [
    "艺术",
    "艺术史",
    "史前艺术",
    "史前艺术与宗教"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "真题-097",
   "month": "2026年6月",
   "source": "20260616A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Extraterrestrial Life",
   "discipline": "自然科学",
   "topic": "天文学",
   "difficulty": "中等",
   "passage": "The discovery of water and volcanic activity on moons like Europa and Enceladus has sparked interest in the potential for extraterrestrial life. These moons, orbi_ _ _ _ the pla_ _ _ _ Jupiter a_ _ Saturn, ha_ _ ice-covered surf_ _ _ _ with oce_ _ _ lying under_ _ _ _ _. Volcanic acti_ _ _ _, in t_ _ form o_ hydrothermal vents, provides heat and nutrients, creating environments where microbial life could potentially thrive. Missions by spacecraft such as the Galileo and Cassini have gathered valuable data on these moons.",
   "blanks": [
    {
     "index": 0,
     "prefix": "orbi",
     "answer": "ting",
     "word": "orbiting",
     "slots": 4,
     "underscores": 4,
     "marker": "orbi_ _ _ _ ",
     "start": 158,
     "end": 170
    },
    {
     "index": 1,
     "prefix": "pla",
     "answer": "nets",
     "word": "planets",
     "slots": 4,
     "underscores": 4,
     "marker": "pla_ _ _ _ ",
     "start": 174,
     "end": 185
    },
    {
     "index": 2,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 193,
     "end": 198
    },
    {
     "index": 3,
     "prefix": "ha",
     "answer": "ve",
     "word": "have",
     "slots": 2,
     "underscores": 2,
     "marker": "ha_ _ ",
     "start": 206,
     "end": 212
    },
    {
     "index": 4,
     "prefix": "surf",
     "answer": "aces",
     "word": "surfaces",
     "slots": 4,
     "underscores": 4,
     "marker": "surf_ _ _ _ ",
     "start": 224,
     "end": 236
    },
    {
     "index": 5,
     "prefix": "oce",
     "answer": "ans",
     "word": "oceans",
     "slots": 3,
     "underscores": 3,
     "marker": "oce_ _ _ ",
     "start": 241,
     "end": 250
    },
    {
     "index": 6,
     "prefix": "under",
     "answer": "neath",
     "word": "underneath",
     "slots": 5,
     "underscores": 5,
     "marker": "under_ _ _ _ _",
     "start": 256,
     "end": 270
    },
    {
     "index": 7,
     "prefix": "acti",
     "answer": "vity",
     "word": "activity",
     "slots": 4,
     "underscores": 4,
     "marker": "acti_ _ _ _",
     "start": 281,
     "end": 292
    },
    {
     "index": 8,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "underscores": 2,
     "marker": "t_ _ ",
     "start": 297,
     "end": 302
    },
    {
     "index": 9,
     "prefix": "o",
     "answer": "f",
     "word": "of",
     "slots": 1,
     "underscores": 1,
     "marker": "o_ ",
     "start": 307,
     "end": 310
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 地外生命探测、木卫与土卫的冰下海洋、天文学。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "orbiting",
     "reason": "v.现在分词←orbit（环绕）"
    },
    {
     "word": "planets",
     "reason": "n.复←planet（行星）"
    },
    {
     "word": "and",
     "reason": "conj.和"
    },
    {
     "word": "have",
     "reason": "v.原形（有）"
    },
    {
     "word": "surfaces",
     "reason": "n.复←surface（表面）"
    },
    {
     "word": "oceans",
     "reason": "n.复←ocean（海洋）"
    },
    {
     "word": "underneath",
     "reason": "prep./adv.在…之下"
    },
    {
     "word": "activity",
     "reason": "n.活动"
    },
    {
     "word": "the",
     "reason": "art.定冠词"
    },
    {
     "word": "of",
     "reason": "prep.…的"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 These moons（主） have（谓） ice-covered surfaces（宾）；修饰：orbiting the planets Jupiter and Saturn 现在分词短语作后置定语，修饰 moons；with oceans lying underneath 介词短语作后置定语，修饰 surfaces（lying underneath 现在分词短语修饰 oceans）。 - 句② 主干 Volcanic activity（主） provides（谓） heat and nutrients（宾）；修饰：in the form of hydrothermal vents 介词短语作后置定语/状语，修饰 provides；creating environments 现在分词短语作状语，表结果；where microbial life could potentially thrive 定语从句，修饰 environments。"
    }
   ],
   "tags": [
    "自然科学",
    "天文学",
    "外星生命"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "真题-017",
   "month": "2026年5月",
   "source": "20260616A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Shadow Puppetry",
   "discipline": "艺术",
   "topic": "音乐",
   "difficulty": "中等",
   "passage": "Shadow puppetry is an ancient form of storytelling that uses flat, articulated (movable) figures cast onto a screen by a light source. Shadow puppetry comb_ _ _ _ visual arti_ _ _ _ with dram_ _ _ _ narration, crea_ _ _ _ engaging perfor_ _ _ _ _ _ that con_ _ _ traditional ta_ _ _ and mo_ _ _ lessons. Th_ _ art fo_ _ originated in Asia and spread to various cultures around the world. The puppets are typically made of leather or paper and manipulated by sticks or strings. Performers narrate stories, often accompanied by music or sound effects.",
   "blanks": [
    {
     "index": 0,
     "prefix": "comb",
     "underscores": 4,
     "word": "combines",
     "answer": "ines",
     "slots": 4,
     "marker": "comb_ _ _ _ ",
     "start": 151,
     "end": 163
    },
    {
     "index": 1,
     "prefix": "arti",
     "underscores": 4,
     "word": "artistry",
     "answer": "stry",
     "slots": 4,
     "marker": "arti_ _ _ _ ",
     "start": 170,
     "end": 182
    },
    {
     "index": 2,
     "prefix": "dram",
     "underscores": 4,
     "word": "dramatic",
     "answer": "atic",
     "slots": 4,
     "marker": "dram_ _ _ _ ",
     "start": 187,
     "end": 199
    },
    {
     "index": 3,
     "prefix": "crea",
     "underscores": 4,
     "word": "creating",
     "answer": "ting",
     "slots": 4,
     "marker": "crea_ _ _ _ ",
     "start": 210,
     "end": 222
    },
    {
     "index": 4,
     "prefix": "perfor",
     "underscores": 6,
     "word": "performances",
     "answer": "mances",
     "slots": 6,
     "marker": "perfor_ _ _ _ _ _ ",
     "start": 231,
     "end": 249
    },
    {
     "index": 5,
     "prefix": "con",
     "underscores": 3,
     "word": "convey",
     "answer": "vey",
     "slots": 3,
     "marker": "con_ _ _ ",
     "start": 254,
     "end": 263
    },
    {
     "index": 6,
     "prefix": "ta",
     "underscores": 3,
     "word": "tales",
     "answer": "les",
     "slots": 3,
     "marker": "ta_ _ _ ",
     "start": 275,
     "end": 283
    },
    {
     "index": 7,
     "prefix": "mo",
     "underscores": 3,
     "word": "moral",
     "answer": "ral",
     "slots": 3,
     "marker": "mo_ _ _ ",
     "start": 287,
     "end": 295
    },
    {
     "index": 8,
     "prefix": "Th",
     "underscores": 2,
     "word": "This",
     "answer": "is",
     "slots": 2,
     "marker": "Th_ _ ",
     "start": 304,
     "end": 310
    },
    {
     "index": 9,
     "prefix": "fo",
     "underscores": 2,
     "word": "form",
     "answer": "rm",
     "slots": 2,
     "marker": "fo_ _ ",
     "start": 314,
     "end": 320
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 皮影戏艺术、视觉叙事、跨文化戏剧传统。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "combines",
     "reason": "v.三单←combine（结合）"
    },
    {
     "word": "artistry",
     "reason": "n.艺术性（art+istry）"
    },
    {
     "word": "dramatic",
     "reason": "adj.戏剧性的（drama→dramatic）"
    },
    {
     "word": "creating",
     "reason": "v.现在分词←create（创造）"
    },
    {
     "word": "performances",
     "reason": "n.复←performance（表演）"
    },
    {
     "word": "convey",
     "reason": "v.原形←convey（传达）"
    },
    {
     "word": "tales",
     "reason": "n.复←tale（故事）"
    },
    {
     "word": "moral",
     "reason": "adj.道德的"
    },
    {
     "word": "This",
     "reason": "pron.这"
    },
    {
     "word": "form",
     "reason": "n.形式"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 Shadow puppetry（主） combines（谓） visual artistry（宾）；修饰：with dramatic narration 介词短语作状语，表伴随；creating engaging performances 现在分词短语作状语，表结果；that convey traditional tales and moral lessons 定语从句，修饰 performances。 - 句② 主干 This art form（主） originated（谓） and spread（谓）；修饰：in Asia 介词短语作状语，表地点；to various cultures around the world 介词短语作状语，表方向/范围。"
    }
   ],
   "tags": [
    "艺术",
    "音乐"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-084",
   "month": "2026年6月",
   "source": "20260622A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Respiratory System",
   "discipline": "生命科学",
   "topic": "生理",
   "difficulty": "简单",
   "passage": "The respiratory system is essential for delivering oxygen to the body's cells and removing carbon dioxide. In hum_ _ _, air ent_ _ _ through t_ _ nose o_ mouth. Inco_ _ _ _ air ge_ _ warmed u_ and bec_ _ _ _ moist wh_ _ _ it tra_ _ _ _ in the nasal passages. Dust and other particles are also filtered out. Then the air goes down the trachea and reaches the lungs. Within the lungs, tiny air sacs shaped like balloons facilitate the exchange of gases with the bloodstream. This process is crucial for cellular respiration, which provides energy for bodily functions.",
   "blanks": [
    {
     "index": 0,
     "prefix": "hum",
     "answer": "ans",
     "word": "humans",
     "slots": 3,
     "marker": "hum_ _ _",
     "start": 110,
     "end": 118
    },
    {
     "index": 1,
     "prefix": "ent",
     "answer": "ers",
     "word": "enters",
     "slots": 3,
     "marker": "ent_ _ _ ",
     "start": 124,
     "end": 133
    },
    {
     "index": 2,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "marker": "t_ _ ",
     "start": 141,
     "end": 146
    },
    {
     "index": 3,
     "prefix": "o",
     "answer": "r",
     "word": "or",
     "slots": 1,
     "marker": "o_ ",
     "start": 151,
     "end": 154
    },
    {
     "index": 4,
     "prefix": "Inco",
     "answer": "ming",
     "word": "Incoming",
     "slots": 4,
     "marker": "Inco_ _ _ _ ",
     "start": 161,
     "end": 173
    },
    {
     "index": 5,
     "prefix": "ge",
     "answer": "ts",
     "word": "gets",
     "slots": 2,
     "marker": "ge_ _ ",
     "start": 177,
     "end": 183
    },
    {
     "index": 6,
     "prefix": "u",
     "answer": "p",
     "word": "up",
     "slots": 1,
     "marker": "u_ ",
     "start": 190,
     "end": 193
    },
    {
     "index": 7,
     "prefix": "bec",
     "answer": "omes",
     "word": "becomes",
     "slots": 4,
     "marker": "bec_ _ _ _ ",
     "start": 197,
     "end": 208
    },
    {
     "index": 8,
     "prefix": "wh",
     "answer": "ile",
     "word": "while",
     "slots": 3,
     "marker": "wh_ _ _ ",
     "start": 214,
     "end": 222
    },
    {
     "index": 9,
     "prefix": "tra",
     "answer": "vels",
     "word": "travels",
     "slots": 4,
     "marker": "tra_ _ _ _ ",
     "start": 225,
     "end": 236
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 呼吸系统、气体交换、人体生理学。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "humans",
     "reason": "n.复←human（人类）"
    },
    {
     "word": "enters",
     "reason": "v.三单←enter（进入）"
    },
    {
     "word": "the",
     "reason": "art.定冠词"
    },
    {
     "word": "or",
     "reason": "conj.或者"
    },
    {
     "word": "Incoming",
     "reason": "adj.进入的（in+coming）"
    },
    {
     "word": "gets",
     "reason": "v.三单←get（变得）"
    },
    {
     "word": "up",
     "reason": "adv.向上"
    },
    {
     "word": "becomes",
     "reason": "v.三单←become（变得）⚠片段列/AB 错位，greedy 多写 c（beccomes），校正为 becomes"
    },
    {
     "word": "while",
     "reason": "conj.当…时"
    },
    {
     "word": "travels",
     "reason": "v.三单←travel（行进）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 air（主） enters（谓）；修饰：In humans 介词短语作状语，表范围；through the nose or mouth 介词短语作状语，表方式。 - 句② 主干 Incoming air（主） gets（谓） warmed up（宾补） and becomes（谓） moist（表）；修饰：while it travels in the nasal passages 状语从句，表时间（in the nasal passages 介词短语作状语，表地点）。"
    }
   ],
   "tags": [
    "生命科学",
    "生理",
    "体温"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "真题-003",
   "month": "2026年6月",
   "source": "20260630B / 20260804A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Kinship Systems",
   "discipline": "社会科学",
   "topic": "人类学",
   "difficulty": "中等",
   "passage": "The role of kinship was central to the social structure of prehistoric communities. Kinship not only structured family relationships but also shaped how resources were shared, labor was organized, and social hierarchies were maintained within the group. Archaeo_ _ _ _ _ _ _ evidence sugg_ _ _ _ that indiv_ _ _ _ _ _ held spec_ _ _ _ roles ba_ _ _ on a_ _ and gen_ _ _, contributing t_ a sophis_ _ _ _ _ _ _ division o_ labor. The intricacy of these social structures is further evidenced by the existence of ceremonial sites, which indicate collective activities and social gatherings.",
   "blanks": [
    {
     "index": 0,
     "prefix": "Archaeo",
     "answer": "logical",
     "word": "Archaeological",
     "slots": 7,
     "underscores": 7,
     "marker": "Archaeo_ _ _ _ _ _ _ ",
     "start": 254,
     "end": 275
    },
    {
     "index": 1,
     "prefix": "sugg",
     "answer": "ests",
     "word": "suggests",
     "slots": 4,
     "underscores": 4,
     "marker": "sugg_ _ _ _ ",
     "start": 284,
     "end": 296
    },
    {
     "index": 2,
     "prefix": "indiv",
     "answer": "iduals",
     "word": "individuals",
     "slots": 6,
     "underscores": 6,
     "marker": "indiv_ _ _ _ _ _ ",
     "start": 301,
     "end": 318
    },
    {
     "index": 3,
     "prefix": "spec",
     "answer": "ific",
     "word": "specific",
     "slots": 4,
     "underscores": 4,
     "marker": "spec_ _ _ _ ",
     "start": 323,
     "end": 335
    },
    {
     "index": 4,
     "prefix": "ba",
     "answer": "sed",
     "word": "based",
     "slots": 3,
     "underscores": 3,
     "marker": "ba_ _ _ ",
     "start": 341,
     "end": 349
    },
    {
     "index": 5,
     "prefix": "a",
     "answer": "ge",
     "word": "age",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 352,
     "end": 357
    },
    {
     "index": 6,
     "prefix": "gen",
     "answer": "der",
     "word": "gender",
     "slots": 3,
     "underscores": 3,
     "marker": "gen_ _ _",
     "start": 361,
     "end": 369
    },
    {
     "index": 7,
     "prefix": "t",
     "answer": "o",
     "word": "to",
     "slots": 1,
     "underscores": 1,
     "marker": "t_ ",
     "start": 384,
     "end": 387
    },
    {
     "index": 8,
     "prefix": "sophis",
     "answer": "ticated",
     "word": "sophisticated",
     "slots": 7,
     "underscores": 7,
     "marker": "sophis_ _ _ _ _ _ _ ",
     "start": 389,
     "end": 409
    },
    {
     "index": 9,
     "prefix": "o",
     "answer": "f",
     "word": "of",
     "slots": 1,
     "underscores": 1,
     "marker": "o_ ",
     "start": 418,
     "end": 421
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 人类学；史前社会的亲属制度、社会等级与劳动分工。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "Archaeological",
     "reason": "adj.考古的（archaeo+-logical）"
    },
    {
     "word": "suggests",
     "reason": "v.三单←suggest（表明）"
    },
    {
     "word": "individuals",
     "reason": "n.复←individual（个体）"
    },
    {
     "word": "specific",
     "reason": "adj.特定的（spec+-ific）"
    },
    {
     "word": "based",
     "reason": "adj.基于……的（base→based，过去分词作后置定语）"
    },
    {
     "word": "age",
     "reason": "n.年龄"
    },
    {
     "word": "gender",
     "reason": "n.性别"
    },
    {
     "word": "to",
     "reason": "prep.向；到"
    },
    {
     "word": "sophisticated",
     "reason": "adj.复杂的；精密的（sophis+-ticated）"
    },
    {
     "word": "of",
     "reason": "prep.……的"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 Archaeological evidence（主） suggests（谓） that individuals held specific roles（宾，宾语从句）；修饰：based on age and gender 过去分词短语作后置定语，修饰 roles；contributing to a sophisticated division of labor 现在分词短语作结果状语，修饰主句。"
    }
   ],
   "tags": [
    "社会科学",
    "人类学"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "真题-024",
   "month": "2026年6月",
   "source": "20260630B",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Handicrafts",
   "discipline": "社会科学",
   "topic": "人类学",
   "difficulty": "简单",
   "passage": "Craftsmanship blends art with functional design through a meticulous process requiring creativity and precision. Artisans wo_ _ with mater_ _ _ _ like me_ _ _, wood, a_ _ fabric t_ create prod_ _ _ _ that a_ _ both use_ _ _ and beau_ _ _ _ _. Each pi_ _ _ shows the maker's skill, attention to detail, and personal style. Beyond utility, handcrafted items carry cultural significance. Even as societies modernize, the value of tradition and quality endures, highlighting a lasting appreciation for the uniqueness and care embedded in artisanal work.",
   "blanks": [
    {
     "index": 0,
     "prefix": "wo",
     "answer": "rk",
     "word": "work",
     "slots": 2,
     "underscores": 2,
     "marker": "wo_ _ ",
     "start": 122,
     "end": 128
    },
    {
     "index": 1,
     "prefix": "mater",
     "answer": "ials",
     "word": "materials",
     "slots": 4,
     "underscores": 4,
     "marker": "mater_ _ _ _ ",
     "start": 133,
     "end": 146
    },
    {
     "index": 2,
     "prefix": "me",
     "answer": "tal",
     "word": "metal",
     "slots": 3,
     "underscores": 3,
     "marker": "me_ _ _",
     "start": 151,
     "end": 158
    },
    {
     "index": 3,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 166,
     "end": 171
    },
    {
     "index": 4,
     "prefix": "t",
     "answer": "o",
     "word": "to",
     "slots": 1,
     "underscores": 1,
     "marker": "t_ ",
     "start": 178,
     "end": 181
    },
    {
     "index": 5,
     "prefix": "prod",
     "answer": "ucts",
     "word": "products",
     "slots": 4,
     "underscores": 4,
     "marker": "prod_ _ _ _ ",
     "start": 188,
     "end": 200
    },
    {
     "index": 6,
     "prefix": "a",
     "answer": "re",
     "word": "are",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 205,
     "end": 210
    },
    {
     "index": 7,
     "prefix": "use",
     "answer": "ful",
     "word": "useful",
     "slots": 3,
     "underscores": 3,
     "marker": "use_ _ _ ",
     "start": 215,
     "end": 224
    },
    {
     "index": 8,
     "prefix": "beau",
     "answer": "tiful",
     "word": "beautiful",
     "slots": 5,
     "underscores": 5,
     "marker": "beau_ _ _ _ _",
     "start": 228,
     "end": 241
    },
    {
     "index": 9,
     "prefix": "pi",
     "answer": "ece",
     "word": "piece",
     "slots": 3,
     "underscores": 3,
     "marker": "pi_ _ _ ",
     "start": 248,
     "end": 256
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 人类学；手工艺、工艺美术与实用—审美的双重功能。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "work",
     "reason": "v.工作；加工"
    },
    {
     "word": "materials",
     "reason": "n.复←material（材料）"
    },
    {
     "word": "metal",
     "reason": "n.金属"
    },
    {
     "word": "and",
     "reason": "conj.和"
    },
    {
     "word": "to",
     "reason": "prep.为了"
    },
    {
     "word": "products",
     "reason": "n.复←product（产品）"
    },
    {
     "word": "are",
     "reason": "v.复数←be（系动词）"
    },
    {
     "word": "useful",
     "reason": "adj.有用的（use→useful）"
    },
    {
     "word": "beautiful",
     "reason": "adj.美丽的（beauty→beautiful）"
    },
    {
     "word": "piece",
     "reason": "n.一件；作品"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 Artisans（主） work（谓） ／ create（谓） products（宾）；修饰：with materials like metal, wood, and fabric 介词短语作工具／伴随；like metal, wood, and fabric 介词短语作后置定语，修饰 materials；that are both useful and beautiful 定语从句，修饰 products；to create products 不定式短语作目的状语。 - 句② 主干 Each piece（主） shows（谓） skill, attention, and style（宾）；修饰：无显著长修饰成分。"
    }
   ],
   "tags": [
    "社会科学",
    "人类学"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "真题-019",
   "month": "2026年7月",
   "source": "20260701A / 20260802A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Geographic Education",
   "discipline": "自然科学",
   "topic": "环境科学",
   "difficulty": "困难",
   "passage": "Geographic education equips students with the tools to understand global issues through a spatial lens. For example, studying how rising sea levels affect coastal communities helps learners connect physical geography with human impact. This know_ _ _ _ _ is esse_ _ _ _ _ for plan_ _ _ _ disaster resp_ _ _ _ _, managing reso_ _ _ _ _, and addre_ _ _ _ _ climate cha_ _ _. Geographic lite_ _ _ _ also fos_ _ _ _ critical thin_ _ _ _ about migration, urban development, and environmental sustainability. By teaching students to analyze maps, data, and patterns, geography empowers them to make informed decisions in an increasingly interconnected and environmentally challenged world.",
   "blanks": [
    {
     "index": 0,
     "prefix": "know",
     "answer": "ledge",
     "word": "knowledge",
     "slots": 5,
     "underscores": 5,
     "marker": "know_ _ _ _ _ ",
     "start": 241,
     "end": 255
    },
    {
     "index": 1,
     "prefix": "esse",
     "answer": "ntial",
     "word": "essential",
     "slots": 5,
     "underscores": 5,
     "marker": "esse_ _ _ _ _ ",
     "start": 258,
     "end": 272
    },
    {
     "index": 2,
     "prefix": "plan",
     "answer": "ning",
     "word": "planning",
     "slots": 4,
     "underscores": 4,
     "marker": "plan_ _ _ _ ",
     "start": 276,
     "end": 288
    },
    {
     "index": 3,
     "prefix": "resp",
     "answer": "onses",
     "word": "responses",
     "slots": 5,
     "underscores": 5,
     "marker": "resp_ _ _ _ _",
     "start": 297,
     "end": 310
    },
    {
     "index": 4,
     "prefix": "reso",
     "answer": "urces",
     "word": "resources",
     "slots": 5,
     "underscores": 5,
     "marker": "reso_ _ _ _ _",
     "start": 321,
     "end": 334
    },
    {
     "index": 5,
     "prefix": "addre",
     "answer": "ssing",
     "word": "addressing",
     "slots": 5,
     "underscores": 5,
     "marker": "addre_ _ _ _ _ ",
     "start": 340,
     "end": 355
    },
    {
     "index": 6,
     "prefix": "cha",
     "answer": "nge",
     "word": "change",
     "slots": 3,
     "underscores": 3,
     "marker": "cha_ _ _",
     "start": 363,
     "end": 371
    },
    {
     "index": 7,
     "prefix": "lite",
     "answer": "racy",
     "word": "literacy",
     "slots": 4,
     "underscores": 4,
     "marker": "lite_ _ _ _ ",
     "start": 384,
     "end": 396
    },
    {
     "index": 8,
     "prefix": "fos",
     "answer": "ters",
     "word": "fosters",
     "slots": 4,
     "underscores": 4,
     "marker": "fos_ _ _ _ ",
     "start": 401,
     "end": 412
    },
    {
     "index": 9,
     "prefix": "thin",
     "answer": "king",
     "word": "thinking",
     "slots": 4,
     "underscores": 4,
     "marker": "thin_ _ _ _ ",
     "start": 421,
     "end": 433
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 气候气象、环境科学；地理教育、灾害应对与可持续发展。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "knowledge",
     "reason": "n.知识（know+-ledge）"
    },
    {
     "word": "essential",
     "reason": "adj.必要的（esse+-ntial）"
    },
    {
     "word": "planning",
     "reason": "n.动名词←plan（规划）"
    },
    {
     "word": "responses",
     "reason": "n.复←response（响应；应对）"
    },
    {
     "word": "resources",
     "reason": "n.复←resource（资源）"
    },
    {
     "word": "addressing",
     "reason": "n.动名词←address（应对；处理）"
    },
    {
     "word": "change",
     "reason": "n.变化"
    },
    {
     "word": "literacy",
     "reason": "n.素养（lite+-racy）"
    },
    {
     "word": "fosters",
     "reason": "v.三单←foster（培养）"
    },
    {
     "word": "thinking",
     "reason": "n.动名词←think（思考）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 knowledge（主） is（谓） essential（宾／表）；修饰：for planning disaster responses, managing resources, and addressing climate change 介词短语作方面状语，内含三个动名词短语。 - 句② 主干 Geographic literacy（主） fosters（谓） critical thinking（宾）；修饰：about migration, urban development, and environmental sustainability 介词短语作后置定语，修饰 thinking。"
    }
   ],
   "tags": [
    "自然科学",
    "环境科学",
    "气候气象"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "真题-001",
   "month": "2026年7月",
   "source": "20260701C",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Goose Migration",
   "discipline": "生命科学",
   "topic": "生物",
   "difficulty": "中等",
   "passage": "Geese undertake seasonal migrations between breeding and wintering grounds, often covering thousands of miles. This move_ _ _ _ is gui_ _ _ by th_ _ _ ability t_ recognize enviro_ _ _ _ _ _ _ cues su_ _ as dayl_ _ _ _ duration a_ _ geographic feat_ _ _ _, supported b_ strong spatial memory. Most species, including the Canada goose, follow established flyways and use landmarks like rivers and mountain ranges for navigation. Migration is also a social activity; geese typically travel in family groups, reinforcing cohesion and increasing survival rates through coordinated actions and shared knowledge of migratory routes.",
   "blanks": [
    {
     "index": 0,
     "prefix": "move",
     "answer": "ment",
     "word": "movement",
     "slots": 4,
     "underscores": 4,
     "marker": "move_ _ _ _ ",
     "start": 116,
     "end": 128
    },
    {
     "index": 1,
     "prefix": "gui",
     "answer": "ded",
     "word": "guided",
     "slots": 3,
     "underscores": 3,
     "marker": "gui_ _ _ ",
     "start": 131,
     "end": 140
    },
    {
     "index": 2,
     "prefix": "th",
     "answer": "eir",
     "word": "their",
     "slots": 3,
     "underscores": 3,
     "marker": "th_ _ _ ",
     "start": 143,
     "end": 151
    },
    {
     "index": 3,
     "prefix": "t",
     "answer": "o",
     "word": "to",
     "slots": 1,
     "underscores": 1,
     "marker": "t_ ",
     "start": 159,
     "end": 162
    },
    {
     "index": 4,
     "prefix": "enviro",
     "answer": "nmental",
     "word": "environmental",
     "slots": 7,
     "underscores": 7,
     "marker": "enviro_ _ _ _ _ _ _ ",
     "start": 172,
     "end": 192
    },
    {
     "index": 5,
     "prefix": "su",
     "answer": "ch",
     "word": "such",
     "slots": 2,
     "underscores": 2,
     "marker": "su_ _ ",
     "start": 197,
     "end": 203
    },
    {
     "index": 6,
     "prefix": "dayl",
     "answer": "ight",
     "word": "daylight",
     "slots": 4,
     "underscores": 4,
     "marker": "dayl_ _ _ _ ",
     "start": 206,
     "end": 218
    },
    {
     "index": 7,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 227,
     "end": 232
    },
    {
     "index": 8,
     "prefix": "feat",
     "answer": "ures",
     "word": "features",
     "slots": 4,
     "underscores": 4,
     "marker": "feat_ _ _ _",
     "start": 243,
     "end": 254
    },
    {
     "index": 9,
     "prefix": "b",
     "answer": "y",
     "word": "by",
     "slots": 1,
     "underscores": 1,
     "marker": "b_ ",
     "start": 266,
     "end": 269
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 动物、生物；雁类季节性迁徙及其导航机制。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "movement",
     "reason": "n.移动（move→movement）"
    },
    {
     "word": "guided",
     "reason": "adj.被引导的（guide→guided，过去分词）"
    },
    {
     "word": "their",
     "reason": "pron.它们的"
    },
    {
     "word": "to",
     "reason": "prep.为了"
    },
    {
     "word": "environmental",
     "reason": "adj.环境的（environment→environmental）"
    },
    {
     "word": "such",
     "reason": "adj.这样的"
    },
    {
     "word": "daylight",
     "reason": "n.日光（day+-light）"
    },
    {
     "word": "and",
     "reason": "conj.和"
    },
    {
     "word": "features",
     "reason": "n.复←feature（特征）"
    },
    {
     "word": "by",
     "reason": "prep.通过"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 This movement（主） is guided（谓） ／ recognizes（谓） cues（宾）；修饰：by their ability to recognize environmental cues 介词短语作方式状语（to recognize 不定式作后置定语，修饰 ability）；such as daylight duration and geographic features 介词短语作后置定语，修饰 cues；supported by strong spatial memory 过去分词短语作伴随状语。"
    }
   ],
   "tags": [
    "生命科学",
    "生物",
    "动物"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "真题-038",
   "month": "2026年7月",
   "source": "20260701C",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Philosophy of Mind",
   "discipline": "社会科学",
   "topic": "心理学",
   "difficulty": "中等",
   "passage": "The field of philosophy of mind delves into the nature of consciousness, thought processes, and the intricate relationship between the mind and body. I_ addresses funda_ _ _ _ _ _ questions ab_ _ _ perception, iden_ _ _ _, self-awareness, a_ _ subjective exper_ _ _ _ _ _. The disci_ _ _ _ _ explores h_ _ and w_ _ we perc_ _ _ _ the world as we do, examining the mechanisms behind thought, emotion, and awareness. This field is a deeply interdisciplinary one that intersects with psychology, neuroscience, and cognitive science, providing a comprehensive approach to understanding human cognition and consciousness.",
   "blanks": [
    {
     "index": 0,
     "prefix": "I",
     "answer": "t",
     "word": "It",
     "slots": 1,
     "underscores": 1,
     "marker": "I_ ",
     "start": 150,
     "end": 153
    },
    {
     "index": 1,
     "prefix": "funda",
     "answer": "mental",
     "word": "fundamental",
     "slots": 6,
     "underscores": 6,
     "marker": "funda_ _ _ _ _ _ ",
     "start": 163,
     "end": 180
    },
    {
     "index": 2,
     "prefix": "ab",
     "answer": "out",
     "word": "about",
     "slots": 3,
     "underscores": 3,
     "marker": "ab_ _ _ ",
     "start": 190,
     "end": 198
    },
    {
     "index": 3,
     "prefix": "iden",
     "answer": "tity",
     "word": "identity",
     "slots": 4,
     "underscores": 4,
     "marker": "iden_ _ _ _",
     "start": 210,
     "end": 221
    },
    {
     "index": 4,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 239,
     "end": 244
    },
    {
     "index": 5,
     "prefix": "exper",
     "answer": "iences",
     "word": "experiences",
     "slots": 6,
     "underscores": 6,
     "marker": "exper_ _ _ _ _ _",
     "start": 255,
     "end": 271
    },
    {
     "index": 6,
     "prefix": "disci",
     "answer": "pline",
     "word": "discipline",
     "slots": 5,
     "underscores": 5,
     "marker": "disci_ _ _ _ _ ",
     "start": 277,
     "end": 292
    },
    {
     "index": 7,
     "prefix": "h",
     "answer": "ow",
     "word": "how",
     "slots": 2,
     "underscores": 2,
     "marker": "h_ _ ",
     "start": 301,
     "end": 306
    },
    {
     "index": 8,
     "prefix": "w",
     "answer": "hy",
     "word": "why",
     "slots": 2,
     "underscores": 2,
     "marker": "w_ _ ",
     "start": 310,
     "end": 315
    },
    {
     "index": 9,
     "prefix": "perc",
     "answer": "eive",
     "word": "perceive",
     "slots": 4,
     "underscores": 4,
     "marker": "perc_ _ _ _ ",
     "start": 318,
     "end": 330
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 认知心理学、心理学；心智哲学、意识与感知。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "It",
     "reason": "pron.它（指代该领域）"
    },
    {
     "word": "fundamental",
     "reason": "adj.根本的（funda+-mental）"
    },
    {
     "word": "about",
     "reason": "prep.关于"
    },
    {
     "word": "identity",
     "reason": "n.身份；同一性（iden+-tity）"
    },
    {
     "word": "and",
     "reason": "conj.和"
    },
    {
     "word": "experiences",
     "reason": "n.复←experience（经验；体验）"
    },
    {
     "word": "discipline",
     "reason": "n.学科"
    },
    {
     "word": "how",
     "reason": "adv.如何"
    },
    {
     "word": "why",
     "reason": "adv.为什么"
    },
    {
     "word": "perceive",
     "reason": "v.感知（perc+-eive）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 It（主） addresses（谓） questions（宾）；修饰：about perception, identity, self-awareness, and subjective experiences 介词短语作后置定语，修饰 questions。 - 句② 主干 The discipline（主） explores（谓） how and why we perceive the world（宾，宾语从句）；修饰：examining the mechanisms behind thought, emotion, and awareness 现在分词短语作伴随状语；behind thought, emotion, and awareness 介词短语作后置定语，修饰 mechanisms。"
    }
   ],
   "tags": [
    "社会科学",
    "心理学",
    "认知心理学"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "真题-022",
   "month": "2026年7月",
   "source": "20260708A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Sustainable Agriculture",
   "discipline": "自然科学",
   "topic": "环境科学",
   "difficulty": "中等",
   "passage": "Agricultural practices have evolved to meet growing worldwide nutritional requirements. Sustainable farming offers a promising path, emphasizing ecological balance and resource conservation. Techniques like crop rotation, polyculture, and organic farming main_ _ _ _ soil hea_ _ _ and decr_ _ _ _ pesticide u_ _. These met_ _ _ _ improve fo_ _ security a_ _ reduce environ_ _ _ _ _ _ harm. Far_ _ _ _ often ben_ _ _ _ from higher yields and lower long-term costs. Although traditional methods dominate due to short-term profits, the future of agriculture may depend on embracing sustainability.",
   "blanks": [
    {
     "index": 0,
     "prefix": "main",
     "answer": "tain",
     "word": "maintain",
     "slots": 4,
     "underscores": 4,
     "marker": "main_ _ _ _ ",
     "start": 255,
     "end": 267
    },
    {
     "index": 1,
     "prefix": "hea",
     "answer": "lth",
     "word": "health",
     "slots": 3,
     "underscores": 3,
     "marker": "hea_ _ _ ",
     "start": 272,
     "end": 281
    },
    {
     "index": 2,
     "prefix": "decr",
     "answer": "ease",
     "word": "decrease",
     "slots": 4,
     "underscores": 4,
     "marker": "decr_ _ _ _ ",
     "start": 285,
     "end": 297
    },
    {
     "index": 3,
     "prefix": "u",
     "answer": "se",
     "word": "use",
     "slots": 2,
     "underscores": 2,
     "marker": "u_ _",
     "start": 307,
     "end": 311
    },
    {
     "index": 4,
     "prefix": "met",
     "answer": "hods",
     "word": "methods",
     "slots": 4,
     "underscores": 4,
     "marker": "met_ _ _ _ ",
     "start": 319,
     "end": 330
    },
    {
     "index": 5,
     "prefix": "fo",
     "answer": "od",
     "word": "food",
     "slots": 2,
     "underscores": 2,
     "marker": "fo_ _ ",
     "start": 338,
     "end": 344
    },
    {
     "index": 6,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 353,
     "end": 358
    },
    {
     "index": 7,
     "prefix": "environ",
     "answer": "mental",
     "word": "environmental",
     "slots": 6,
     "underscores": 6,
     "marker": "environ_ _ _ _ _ _ ",
     "start": 365,
     "end": 384
    },
    {
     "index": 8,
     "prefix": "Far",
     "answer": "mers",
     "word": "Farmers",
     "slots": 4,
     "underscores": 4,
     "marker": "Far_ _ _ _ ",
     "start": 390,
     "end": 401
    },
    {
     "index": 9,
     "prefix": "ben",
     "answer": "efit",
     "word": "benefit",
     "slots": 4,
     "underscores": 4,
     "marker": "ben_ _ _ _ ",
     "start": 407,
     "end": 418
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 生态环保、环境科学；可持续农业、生态保护与害虫治理"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "maintain",
     "reason": "v.维持"
    },
    {
     "word": "health",
     "reason": "n.健康"
    },
    {
     "word": "decrease",
     "reason": "v.减少"
    },
    {
     "word": "use",
     "reason": "n.使用"
    },
    {
     "word": "methods",
     "reason": "n.复←method（方法）"
    },
    {
     "word": "food",
     "reason": "n.食物"
    },
    {
     "word": "and",
     "reason": "conj.和／并且"
    },
    {
     "word": "environmental",
     "reason": "adj.环境的←environment"
    },
    {
     "word": "Farmers",
     "reason": "n.复←Farmer（农民）"
    },
    {
     "word": "benefit",
     "reason": "v.受益"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 Techniques（主）maintain（谓）soil health（宾）and decrease（谓）pesticide use（宾）；修饰：like crop rotation, polyculture, and organic farming 介词短语（like 引导）作后置定语修饰 Techniques。 - 句② 主干 These methods（主）improve（谓）food security（宾）and reduce（谓）environmental harm（宾）；修饰：无显著长修饰成分。 - 句③ 主干 Farmers（主）benefit（谓，不及物）；修饰：from higher yields and lower long-term costs 介词短语作状语（表方面）。"
    }
   ],
   "tags": [
    "自然科学",
    "环境科学",
    "生态环保"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "真题-078",
   "month": "2026年7月",
   "source": "20260721A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Oceanography",
   "discipline": "自然科学",
   "topic": "环境科学",
   "difficulty": "中等",
   "passage": "Oceanography is the study of the physical, chemical, and biological aspects of the ocean. This fi_ _ _ encompasses t_ _ exploration o_ ocean curr_ _ _ _, marine ecosy_ _ _ _ _, and geolo_ _ _ _ _ seabed struc_ _ _ _ _. Oceanographers u_ _ satellites a_ _ other adva_ _ _ _ technology to monitor and analyze ocean conditions. By tracking sea surface temperatures, currents, salinity, and other features, researchers contribute to our understanding of climate change. Their work is vital for sustaining ocean health and preserving marine biodiversity.",
   "blanks": [
    {
     "index": 0,
     "prefix": "fi",
     "answer": "eld",
     "word": "field",
     "slots": 3,
     "underscores": 3,
     "marker": "fi_ _ _ ",
     "start": 95,
     "end": 103
    },
    {
     "index": 1,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "underscores": 2,
     "marker": "t_ _ ",
     "start": 115,
     "end": 120
    },
    {
     "index": 2,
     "prefix": "o",
     "answer": "f",
     "word": "of",
     "slots": 1,
     "underscores": 1,
     "marker": "o_ ",
     "start": 132,
     "end": 135
    },
    {
     "index": 3,
     "prefix": "curr",
     "answer": "ents",
     "word": "currents",
     "slots": 4,
     "underscores": 4,
     "marker": "curr_ _ _ _",
     "start": 141,
     "end": 152
    },
    {
     "index": 4,
     "prefix": "ecosy",
     "answer": "stems",
     "word": "ecosystems",
     "slots": 5,
     "underscores": 5,
     "marker": "ecosy_ _ _ _ _",
     "start": 161,
     "end": 175
    },
    {
     "index": 5,
     "prefix": "geolo",
     "answer": "gical",
     "word": "geological",
     "slots": 5,
     "underscores": 5,
     "marker": "geolo_ _ _ _ _ ",
     "start": 181,
     "end": 196
    },
    {
     "index": 6,
     "prefix": "struc",
     "answer": "tures",
     "word": "structures",
     "slots": 5,
     "underscores": 5,
     "marker": "struc_ _ _ _ _",
     "start": 203,
     "end": 217
    },
    {
     "index": 7,
     "prefix": "u",
     "answer": "se",
     "word": "use",
     "slots": 2,
     "underscores": 2,
     "marker": "u_ _ ",
     "start": 234,
     "end": 239
    },
    {
     "index": 8,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 250,
     "end": 255
    },
    {
     "index": 9,
     "prefix": "adva",
     "answer": "nced",
     "word": "advanced",
     "slots": 4,
     "underscores": 4,
     "marker": "adva_ _ _ _ ",
     "start": 261,
     "end": 273
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 气候气象、环境科学；海洋学、洋流生态与卫星监测技术"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "field",
     "reason": "n.领域"
    },
    {
     "word": "the",
     "reason": "art.定冠词"
    },
    {
     "word": "of",
     "reason": "prep.……的"
    },
    {
     "word": "currents",
     "reason": "n.复←current（洋流）"
    },
    {
     "word": "ecosystems",
     "reason": "n.复←ecosystem（生态系统）"
    },
    {
     "word": "geological",
     "reason": "adj.地质的←geology（geology→geological）"
    },
    {
     "word": "structures",
     "reason": "n.复←structure（结构）"
    },
    {
     "word": "use",
     "reason": "v.使用"
    },
    {
     "word": "and",
     "reason": "conj.和"
    },
    {
     "word": "advanced",
     "reason": "adj.先进的←advance（过去分词作形容词）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 This field（主）encompasses（谓）the exploration of ocean currents, marine ecosystems, and geological seabed structures（宾）；修饰：of ocean currents, marine ecosystems, and geological seabed structures 介词短语作后置定语修饰 exploration。 - 句② 主干 Oceanographers（主）use（谓）satellites and other advanced technology（宾）；修饰：to monitor and analyze ocean conditions 不定式短语作目的状语。"
    }
   ],
   "tags": [
    "自然科学",
    "环境科学",
    "气候气象"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "真题-115",
   "month": "2026年7月",
   "source": "20260721A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Mughal Empire",
   "discipline": "社会科学",
   "topic": "历史",
   "difficulty": "困难",
   "passage": "The Mughal Empire, which ruled much of South Asia from 1526 to 1857, was a powerful Islamic dynasty known for its administrative sophistication and cultural patronage. Mughal paintings, particularly miniature illustrations, blended Persian, Indian, and Central Asian artistic traditions. These sm_ _ _ works, commis_ _ _ _ _ _ by Mughal empe_ _ _ _, often depi_ _ _ _ royal li_ _, historical eve_ _ _, and sce_ _ _ from myth_ _ _ _ _ with remar_ _ _ _ _ detail a_ _ realism. As court-sponsored art, they reflected imperial wealth, political authority, and cross-cultural exchange, serving both aesthetic and documentary purposes within a thriving economy supported by trade, agriculture, and centralized governance.",
   "blanks": [
    {
     "index": 0,
     "prefix": "sm",
     "answer": "all",
     "word": "small",
     "slots": 3,
     "underscores": 3,
     "marker": "sm_ _ _ ",
     "start": 294,
     "end": 302
    },
    {
     "index": 1,
     "prefix": "commis",
     "answer": "sioned",
     "word": "commissioned",
     "slots": 6,
     "underscores": 6,
     "marker": "commis_ _ _ _ _ _ ",
     "start": 309,
     "end": 327
    },
    {
     "index": 2,
     "prefix": "empe",
     "answer": "rors",
     "word": "emperors",
     "slots": 4,
     "underscores": 4,
     "marker": "empe_ _ _ _",
     "start": 337,
     "end": 348
    },
    {
     "index": 3,
     "prefix": "depi",
     "answer": "cted",
     "word": "depicted",
     "slots": 4,
     "underscores": 4,
     "marker": "depi_ _ _ _ ",
     "start": 356,
     "end": 368
    },
    {
     "index": 4,
     "prefix": "li",
     "answer": "fe",
     "word": "life",
     "slots": 2,
     "underscores": 2,
     "marker": "li_ _",
     "start": 374,
     "end": 379
    },
    {
     "index": 5,
     "prefix": "eve",
     "answer": "nts",
     "word": "events",
     "slots": 3,
     "underscores": 3,
     "marker": "eve_ _ _",
     "start": 392,
     "end": 400
    },
    {
     "index": 6,
     "prefix": "sce",
     "answer": "nes",
     "word": "scenes",
     "slots": 3,
     "underscores": 3,
     "marker": "sce_ _ _ ",
     "start": 406,
     "end": 415
    },
    {
     "index": 7,
     "prefix": "myth",
     "answer": "ology",
     "word": "mythology",
     "slots": 5,
     "underscores": 5,
     "marker": "myth_ _ _ _ _ ",
     "start": 420,
     "end": 434
    },
    {
     "index": 8,
     "prefix": "remar",
     "answer": "kable",
     "word": "remarkable",
     "slots": 5,
     "underscores": 5,
     "marker": "remar_ _ _ _ _ ",
     "start": 439,
     "end": 454
    },
    {
     "index": 9,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 461,
     "end": 466
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 文化史、历史；莫卧儿帝国、细密画艺术与宫廷赞助"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "small",
     "reason": "adj.小的"
    },
    {
     "word": "commissioned",
     "reason": "v.过去分词←commission（委托）"
    },
    {
     "word": "emperors",
     "reason": "n.复←emperor（皇帝）"
    },
    {
     "word": "depicted",
     "reason": "v.过去式←depict（描绘）"
    },
    {
     "word": "life",
     "reason": "n.生活／生命"
    },
    {
     "word": "events",
     "reason": "n.复←event（事件）"
    },
    {
     "word": "scenes",
     "reason": "n.复←scene（场景）"
    },
    {
     "word": "mythology",
     "reason": "n.神话"
    },
    {
     "word": "remarkable",
     "reason": "adj.显著的←remark（remark+able）"
    },
    {
     "word": "and",
     "reason": "conj.和"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 These small works（主）depicted（谓）royal life, historical events, and scenes（宾）；修饰：commissioned by Mughal emperors 过去分词短语作后置定语修饰 works；from mythology 介词短语作后置定语修饰 scenes；with remarkable detail and realism 介词短语作方式状语。"
    }
   ],
   "tags": [
    "社会科学",
    "历史",
    "文化史"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "真题-079",
   "month": "2026年7月",
   "source": "20260726A / 20260726C",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Camel Fat Storage",
   "discipline": "自然科学",
   "topic": "环境科学",
   "difficulty": "中等",
   "passage": "Camels live in the desert where the weather is hot and dry. Sometimes i _ the des_ _, camels ha_ _ to tra_ _ _ for a lo_ _ time wit_ _ _ finding a_ _ food o_ water. S_ when cam_ _ _ do find food, they are able to eat and drink a lot. Camels turn extra food into fat and store this fat in a special hump on their back. Then they change this fat into energy to help them cross the desert.",
   "blanks": [
    {
     "index": 0,
     "prefix": "i",
     "answer": "n",
     "word": "in",
     "slots": 1,
     "marker": "i _ ",
     "start": 70,
     "end": 74
    },
    {
     "index": 1,
     "prefix": "des",
     "answer": "ert",
     "word": "desert",
     "slots": 3,
     "marker": "des_ _",
     "start": 78,
     "end": 84
    },
    {
     "index": 2,
     "prefix": "ha",
     "answer": "ve",
     "word": "have",
     "slots": 2,
     "marker": "ha_ _ ",
     "start": 93,
     "end": 99
    },
    {
     "index": 3,
     "prefix": "tra",
     "answer": "vel",
     "word": "travel",
     "slots": 3,
     "marker": "tra_ _ _ ",
     "start": 102,
     "end": 111
    },
    {
     "index": 4,
     "prefix": "lo",
     "answer": "ng",
     "word": "long",
     "slots": 2,
     "marker": "lo_ _ ",
     "start": 117,
     "end": 123
    },
    {
     "index": 5,
     "prefix": "wit",
     "answer": "hout",
     "word": "without",
     "slots": 4,
     "marker": "wit_ _ _ ",
     "start": 128,
     "end": 137
    },
    {
     "index": 6,
     "prefix": "a",
     "answer": "ny",
     "word": "any",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 145,
     "end": 150
    },
    {
     "index": 7,
     "prefix": "o",
     "answer": "r",
     "word": "or",
     "slots": 1,
     "marker": "o_ ",
     "start": 155,
     "end": 158
    },
    {
     "index": 8,
     "prefix": "S",
     "answer": "o",
     "word": "So",
     "slots": 1,
     "marker": "S_ ",
     "start": 165,
     "end": 168
    },
    {
     "index": 9,
     "prefix": "cam",
     "answer": "els",
     "word": "camels",
     "slots": 3,
     "marker": "cam_ _ _ ",
     "start": 173,
     "end": 182
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 气候气象、环境科学、骆驼脂肪储存与沙漠生存"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "in",
     "reason": "prep.在…中 ⚠greedy 误为\"n\"，据 ab_text 校正为 in"
    },
    {
     "word": "desert",
     "reason": "n.沙漠"
    },
    {
     "word": "have",
     "reason": "v.原形（camels have to…）"
    },
    {
     "word": "travel",
     "reason": "v.旅行／迁徙"
    },
    {
     "word": "long",
     "reason": "adj.长的"
    },
    {
     "word": "without",
     "reason": "prep.没有"
    },
    {
     "word": "any",
     "reason": "det.任何"
    },
    {
     "word": "or",
     "reason": "conj.或者"
    },
    {
     "word": "So",
     "reason": "adv.因此"
    },
    {
     "word": "camels",
     "reason": "n.复←camel（骆驼）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 camels（主）have to travel（谓）；修饰：in the desert 介词短语作地点状语；for a long time 介词短语作时间状语；without finding any food or water 介词短语作伴随否定状语。 - 句② 主干 they（主）are able（系表）[to eat and drink a lot]；修饰：when camels do find food 时间状语从句，修饰主句。"
    }
   ],
   "tags": [
    "自然科学",
    "环境科学",
    "气候气象"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "真题-039",
   "month": "2026年7月",
   "source": "20260726A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Cosmology",
   "discipline": "自然科学",
   "topic": "天文学",
   "difficulty": "中等",
   "passage": "Cosmology is the study of how the universe began, changed over time, and might evolve in the future. Scientists exa_ _ _ stars, pla_ _ _, and gala_ _ _ using observ_ _ _ and mod_ _ _ to desc_ _ _ cosmic eve_ _ _. One wid_ _ _ accepted id_ _ _ is the big bang, wh_ _ _ suggests the universe started from a single point and has been expanding ever since. Ongoing research helps improve our understanding of space, time, and the forces shaping the cosmos, revealing new discoveries about the vast universe.",
   "blanks": [
    {
     "index": 0,
     "prefix": "exa",
     "answer": "mine",
     "word": "examine",
     "slots": 4,
     "marker": "exa_ _ _ ",
     "start": 112,
     "end": 121
    },
    {
     "index": 1,
     "prefix": "pla",
     "answer": "nets",
     "word": "planets",
     "slots": 4,
     "marker": "pla_ _ _",
     "start": 128,
     "end": 136
    },
    {
     "index": 2,
     "prefix": "gala",
     "answer": "xies",
     "word": "galaxies",
     "slots": 4,
     "marker": "gala_ _ _ ",
     "start": 142,
     "end": 152
    },
    {
     "index": 3,
     "prefix": "observ",
     "answer": "ations",
     "word": "observations",
     "slots": 6,
     "marker": "observ_ _ _ ",
     "start": 158,
     "end": 170
    },
    {
     "index": 4,
     "prefix": "mod",
     "answer": "els",
     "word": "models",
     "slots": 3,
     "marker": "mod_ _ _ ",
     "start": 174,
     "end": 183
    },
    {
     "index": 5,
     "prefix": "desc",
     "answer": "ribe",
     "word": "describe",
     "slots": 4,
     "marker": "desc_ _ _ ",
     "start": 186,
     "end": 196
    },
    {
     "index": 6,
     "prefix": "eve",
     "answer": "nts",
     "word": "events",
     "slots": 3,
     "marker": "eve_ _ _",
     "start": 203,
     "end": 211
    },
    {
     "index": 7,
     "prefix": "wid",
     "answer": "ely",
     "word": "widely",
     "slots": 3,
     "marker": "wid_ _ _ ",
     "start": 217,
     "end": 226
    },
    {
     "index": 8,
     "prefix": "id",
     "answer": "ea",
     "word": "idea",
     "slots": 2,
     "marker": "id_ _ _ ",
     "start": 235,
     "end": 243
    },
    {
     "index": 9,
     "prefix": "wh",
     "answer": "ich",
     "word": "which",
     "slots": 3,
     "marker": "wh_ _ _ ",
     "start": 260,
     "end": 268
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 宇宙学、天文学、宇宙起源与星系观测"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "examine",
     "reason": "v.研究／考察"
    },
    {
     "word": "planets",
     "reason": "n.复←planet（行星）"
    },
    {
     "word": "galaxies",
     "reason": "n.复←galaxy（星系）"
    },
    {
     "word": "observations",
     "reason": "n.复←observation（观测）"
    },
    {
     "word": "models",
     "reason": "n.复←model（模型）"
    },
    {
     "word": "describe",
     "reason": "v.描述"
    },
    {
     "word": "events",
     "reason": "n.复←event（事件）"
    },
    {
     "word": "widely",
     "reason": "adv.广泛地"
    },
    {
     "word": "idea",
     "reason": "n.观点"
    },
    {
     "word": "which",
     "reason": "pron.关系代词（引导定语从句）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 Scientists（主）examine（谓）stars, planets and galaxies（宾）；修饰：using observations and models 现在分词短语作方式状语；to describe cosmic events 不定式短语作目的状语。 - 句② 主干 One widely accepted idea（主）is（系）the big bang（表）；修饰：which suggests the universe started from a single point and has been expanding ever since 定语从句，修饰 idea。"
    }
   ],
   "tags": [
    "自然科学",
    "天文学",
    "宇宙学"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "真题-020",
   "month": "2026年8月",
   "source": "20260802A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Galaxy Redshift",
   "discipline": "自然科学",
   "topic": "天文学",
   "difficulty": "困难",
   "passage": "The observational study of galaxies has significantly advanced our understanding of the universe. By analyzing t_ _ light emi_ _ _ _ from cele_ _ _ _ _ _ bodies, li_ _ stars, astro_ _ _ _ _ _ _ _ can in_ _ _ various prope_ _ _ _ _ _ such a_ distance fr_ _ Earth, compo_ _ _ _ _ _ _ _, and velocity. As light from galaxies travels through space, it stretches, shifting to the red end of the spectrum. This shift is directly proportional to a galaxy's speed and distance, allowing scientists to map the universe's expansion.",
   "blanks": [
    {
     "index": 0,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "marker": "t_ _ ",
     "start": 111,
     "end": 116
    },
    {
     "index": 1,
     "prefix": "emi",
     "answer": "tted",
     "word": "emitted",
     "slots": 4,
     "marker": "emi_ _ _ _ ",
     "start": 122,
     "end": 133
    },
    {
     "index": 2,
     "prefix": "cele",
     "answer": "stial",
     "word": "celestial",
     "slots": 5,
     "marker": "cele_ _ _ _ _ _ ",
     "start": 138,
     "end": 154
    },
    {
     "index": 3,
     "prefix": "li",
     "answer": "ke",
     "word": "like",
     "slots": 2,
     "marker": "li_ _ ",
     "start": 162,
     "end": 168
    },
    {
     "index": 4,
     "prefix": "astro",
     "answer": "nomers",
     "word": "astronomers",
     "slots": 6,
     "marker": "astro_ _ _ _ _ _ _ _ ",
     "start": 175,
     "end": 196
    },
    {
     "index": 5,
     "prefix": "in",
     "answer": "fer",
     "word": "infer",
     "slots": 3,
     "marker": "in_ _ _ ",
     "start": 200,
     "end": 208
    },
    {
     "index": 6,
     "prefix": "prope",
     "answer": "rties",
     "word": "properties",
     "slots": 5,
     "marker": "prope_ _ _ _ _ _ ",
     "start": 216,
     "end": 233
    },
    {
     "index": 7,
     "prefix": "a",
     "answer": "s",
     "word": "as",
     "slots": 1,
     "marker": "a_ ",
     "start": 238,
     "end": 241
    },
    {
     "index": 8,
     "prefix": "fr",
     "answer": "om",
     "word": "from",
     "slots": 2,
     "marker": "fr_ _ ",
     "start": 250,
     "end": 256
    },
    {
     "index": 9,
     "prefix": "compo",
     "answer": "sition",
     "word": "composition",
     "slots": 6,
     "marker": "compo_ _ _ _ _ _ _ _",
     "start": 263,
     "end": 283
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 星系红移的观测研究；天体物理性质推断与宇宙膨胀（宇宙学、天文学）。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "the",
     "reason": "art. 定冠词"
    },
    {
     "word": "emitted",
     "reason": "v.过去分词←emit（发射）"
    },
    {
     "word": "celestial",
     "reason": "adj. 天体的"
    },
    {
     "word": "like",
     "reason": "prep. 像／例如"
    },
    {
     "word": "astronomers",
     "reason": "n.复←astronomer（天文学家）"
    },
    {
     "word": "infer",
     "reason": "v. 推断"
    },
    {
     "word": "properties",
     "reason": "n.复←property（性质／特性）"
    },
    {
     "word": "as",
     "reason": "prep. 作为／如同"
    },
    {
     "word": "from",
     "reason": "prep. 从"
    },
    {
     "word": "composition",
     "reason": "n. 组成"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 astronomers（主）can infer（谓）various properties（宾）；修饰：By analyzing the light emitted from celestial bodies 介词短语作方式状语（emitted from celestial bodies 过去分词短语作后置定语，修饰 light），like stars 介词短语举例，such as distance from Earth, composition, and velocity 介词短语列举（修饰 properties）。"
    }
   ],
   "tags": [
    "自然科学",
    "天文学",
    "宇宙学"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260121B",
   "month": "2026年1月",
   "source": "20260121B",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Glacier Landforms",
   "discipline": "自然科学",
   "topic": "地质学",
   "difficulty": "简单",
   "passage": "Glaciers are massive, slow-moving bodies of ice that form in areas where snow accumulates over time and compresses into ice. Th_ _ can cha_ _ _ landscapes thr_ _ _ _ processes li_ _ erosion and deposition. A_ glaciers mo_ _ they ca_ _ _ out val_ _ _ _ and fjords, lea_ _ _ _ behind distinct geological features. Scientists study glaciers to understand past climate conditions and predict future changes. Glaciers are of particular concern today because their melting contributes to rising sea levels, impacting coastal communities worldwide.",
   "blanks": [
    {
     "index": 0,
     "prefix": "Th",
     "underscores": 2,
     "word": "They",
     "answer": "ey",
     "slots": 2,
     "marker": "Th_ _ ",
     "start": 125,
     "end": 131
    },
    {
     "index": 1,
     "prefix": "cha",
     "underscores": 3,
     "word": "change",
     "answer": "nge",
     "slots": 3,
     "marker": "cha_ _ _ ",
     "start": 135,
     "end": 144
    },
    {
     "index": 2,
     "prefix": "thr",
     "underscores": 4,
     "word": "through",
     "answer": "ough",
     "slots": 4,
     "marker": "thr_ _ _ _ ",
     "start": 155,
     "end": 166
    },
    {
     "index": 3,
     "prefix": "li",
     "underscores": 2,
     "word": "like",
     "answer": "ke",
     "slots": 2,
     "marker": "li_ _ ",
     "start": 176,
     "end": 182
    },
    {
     "index": 4,
     "prefix": "A",
     "underscores": 1,
     "word": "As",
     "answer": "s",
     "slots": 1,
     "marker": "A_ ",
     "start": 206,
     "end": 209
    },
    {
     "index": 5,
     "prefix": "mo",
     "underscores": 2,
     "word": "move",
     "answer": "ve",
     "slots": 2,
     "marker": "mo_ _ ",
     "start": 218,
     "end": 224
    },
    {
     "index": 6,
     "prefix": "ca",
     "underscores": 3,
     "word": "carve",
     "answer": "rve",
     "slots": 3,
     "marker": "ca_ _ _ ",
     "start": 229,
     "end": 237
    },
    {
     "index": 7,
     "prefix": "val",
     "underscores": 4,
     "word": "valleys",
     "answer": "leys",
     "slots": 4,
     "marker": "val_ _ _ _ ",
     "start": 241,
     "end": 252
    },
    {
     "index": 8,
     "prefix": "lea",
     "underscores": 4,
     "word": "leaving",
     "answer": "ving",
     "slots": 4,
     "marker": "lea_ _ _ _ ",
     "start": 264,
     "end": 275
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 地形地貌与地质学（冰川的移动、侵蚀与沉积作用）。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "They",
     "reason": "pron.它们（指代 glaciers）←they"
    },
    {
     "word": "change",
     "reason": "v.改变"
    },
    {
     "word": "through",
     "reason": "prep.通过"
    },
    {
     "word": "like",
     "reason": "prep.像／如"
    },
    {
     "word": "As",
     "reason": "conj.当…时（引导时间状语从句）⚠片段列误为\"nd\"得\"And\"，应为\"As\"（缺 s），AB 词形错位"
    },
    {
     "word": "move",
     "reason": "v.移动 ⚠AB\"mond\"错位（应为 mo+ve），片段列\"s\"亦误，据前缀 mo 校正为 move"
    },
    {
     "word": "carve",
     "reason": "v.雕刻／凿出（carve out）"
    },
    {
     "word": "valleys",
     "reason": "n.复←valley（山谷）"
    },
    {
     "word": "leaving",
     "reason": "v.现在分词←leave（留下；leaving behind 留下）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 They（主）can change（谓）landscapes（宾）；修饰：through processes like erosion and deposition 介词短语作方式状语。 - 句② 主干（主从复合）As glaciers move（时间状语从句：glaciers 主，move 谓），they（主）carve（谓）valleys and fjords（宾）；修饰：leaving behind distinct geological features 现在分词短语作结果状语。"
    }
   ],
   "tags": [
    "自然科学",
    "地质学",
    "地形地貌"
   ],
   "status": "active",
   "blankCount": 9,
   "flags": []
  },
  {
   "id": "20260121B-2",
   "month": "2026年1月",
   "source": "20260121B",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Spix's Macaw",
   "discipline": "生命科学",
   "topic": "生物",
   "difficulty": "中等",
   "passage": "The Spix's Macaw, native to Brazil and famously known as the inspiration for the animated movie Rio, is critically endangered, with fewer than a hundred individuals remaining. The popu_ _ _ _ _ of th_ _ vibrant bl_ _ bird decl_ _ _ _ because o_ habitat lo_ _ and ill_ _ _ _ trapping f_ _ sale abr_ _ _ , where pri_ _ _ _ collectors and pet stores spent large sums of money on the birds. Conservationists have initiated captive breeding programs and habitat restoration efforts to reintroduce the Spix's Macaw into the wild, where it was officially declared extinct in 2019.",
   "blanks": [
    {
     "index": 0,
     "prefix": "popu",
     "underscores": 5,
     "word": "population",
     "answer": "lation",
     "slots": 6,
     "marker": "popu_ _ _ _ _ ",
     "start": 180,
     "end": 194
    },
    {
     "index": 1,
     "prefix": "th",
     "underscores": 2,
     "word": "this",
     "answer": "is",
     "slots": 2,
     "marker": "th_ _ ",
     "start": 197,
     "end": 203
    },
    {
     "index": 2,
     "prefix": "bl",
     "underscores": 2,
     "word": "blue",
     "answer": "ue",
     "slots": 2,
     "marker": "bl_ _ ",
     "start": 211,
     "end": 217
    },
    {
     "index": 3,
     "prefix": "decl",
     "underscores": 4,
     "word": "declined",
     "answer": "ined",
     "slots": 4,
     "marker": "decl_ _ _ _ ",
     "start": 222,
     "end": 234
    },
    {
     "index": 4,
     "prefix": "o",
     "underscores": 1,
     "word": "of",
     "answer": "f",
     "slots": 1,
     "marker": "o_ ",
     "start": 242,
     "end": 245
    },
    {
     "index": 5,
     "prefix": "lo",
     "underscores": 2,
     "word": "loss",
     "answer": "ss",
     "slots": 2,
     "marker": "lo_ _ ",
     "start": 253,
     "end": 259
    },
    {
     "index": 6,
     "prefix": "ill",
     "underscores": 4,
     "word": "illegal",
     "answer": "egal",
     "slots": 4,
     "marker": "ill_ _ _ _ ",
     "start": 263,
     "end": 274
    },
    {
     "index": 7,
     "prefix": "f",
     "underscores": 2,
     "word": "for",
     "answer": "or",
     "slots": 2,
     "marker": "f_ _ ",
     "start": 283,
     "end": 288
    },
    {
     "index": 8,
     "prefix": "abr",
     "underscores": 3,
     "word": "abroad",
     "answer": "oad",
     "slots": 3,
     "marker": "abr_ _ _ ",
     "start": 293,
     "end": 302
    },
    {
     "index": 9,
     "prefix": "pri",
     "underscores": 4,
     "word": "private",
     "answer": "vate",
     "slots": 4,
     "marker": "pri_ _ _ _ ",
     "start": 310,
     "end": 321
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 鸟类、动物保护与生物濒危（斯皮克斯金刚鹦鹉的种群衰退与非法贸易）。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "population",
     "reason": "n.种群／数量 ⚠AB\"popuation\"错位（缺 l），据前缀 popu 校正为 population（片段列\"ation\"误拼）"
    },
    {
     "word": "this",
     "reason": "pron.这（指代 macaw）"
    },
    {
     "word": "blue",
     "reason": "adj.蓝色的"
    },
    {
     "word": "declined",
     "reason": "v.过去式←decline（衰退）"
    },
    {
     "word": "of",
     "reason": "prep.…的／由于"
    },
    {
     "word": "loss",
     "reason": "n.损失 ⚠AB\"loud\"错位（多 d），据前缀 lo 校正为 loss（片段列\"ud\"误）"
    },
    {
     "word": "illegal",
     "reason": "adj.非法的（il-+legal）"
    },
    {
     "word": "for",
     "reason": "prep.为了"
    },
    {
     "word": "abroad",
     "reason": "adv.在国外"
    },
    {
     "word": "private",
     "reason": "adj.私人的 ⚠AB\"priivate\"错位（多 i），据前缀 pri 校正为 private（片段列\"ivate\"误）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 The population of this vibrant blue bird（主）declined（谓）；修饰：because of habitat loss and illegal trapping for sale abroad 介词短语作原因状语；where private collectors and pet stores spent large sums of money 定语从句，修饰 abroad。"
    }
   ],
   "tags": [
    "生命科学",
    "生物",
    "动物",
    "鸟类"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "20260121C",
   "month": "2026年1月",
   "source": "20260121C",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Pottery Craft",
   "discipline": "艺术",
   "topic": "工艺",
   "difficulty": "中等",
   "passage": "Pottery is an ancient craft that involves shaping and firing clay in special wood-fired ovens (kilns) to create functional and decorative objects. Early po_ _ were sha_ _ _ by ha_ _ and hea_ _ _ in sim_ _ _ kilns, produ_ _ _ _ _ ceramics th_ _ lasted lon_ _ _. As soci_ _ _ _ _ developed, techn_ _ _ _ _ became more refined, with different cultures creating distinct styles. Over time, pottery evolved into both a practical craft and a significant form of artistic and cultural expression. Pottery has been practiced by cultures worldwide, reflecting their unique artistic traditions and functional needs.",
   "blanks": [
    {
     "index": 0,
     "prefix": "po",
     "answer": "ts",
     "word": "pots",
     "slots": 2,
     "underscores": 2,
     "marker": "po_ _ ",
     "start": 153,
     "end": 159
    },
    {
     "index": 1,
     "prefix": "sha",
     "answer": "ped",
     "word": "shaped",
     "slots": 3,
     "underscores": 3,
     "marker": "sha_ _ _ ",
     "start": 164,
     "end": 173
    },
    {
     "index": 2,
     "prefix": "ha",
     "answer": "nd",
     "word": "hand",
     "slots": 2,
     "underscores": 2,
     "marker": "ha_ _ ",
     "start": 176,
     "end": 182
    },
    {
     "index": 3,
     "prefix": "hea",
     "answer": "ted",
     "word": "heated",
     "slots": 3,
     "underscores": 3,
     "marker": "hea_ _ _ ",
     "start": 186,
     "end": 195
    },
    {
     "index": 4,
     "prefix": "sim",
     "answer": "ple",
     "word": "simple",
     "slots": 3,
     "underscores": 3,
     "marker": "sim_ _ _ ",
     "start": 198,
     "end": 207
    },
    {
     "index": 5,
     "prefix": "produ",
     "answer": "cing",
     "word": "producing",
     "slots": 4,
     "underscores": 5,
     "marker": "produ_ _ _ _ _ ",
     "start": 214,
     "end": 229
    },
    {
     "index": 6,
     "prefix": "th",
     "answer": "at",
     "word": "that",
     "slots": 2,
     "underscores": 2,
     "marker": "th_ _ ",
     "start": 238,
     "end": 244
    },
    {
     "index": 7,
     "prefix": "lon",
     "answer": "ger",
     "word": "longer",
     "slots": 3,
     "underscores": 3,
     "marker": "lon_ _ _",
     "start": 251,
     "end": 259
    },
    {
     "index": 8,
     "prefix": "soci",
     "answer": "eties",
     "word": "societies",
     "slots": 5,
     "underscores": 5,
     "marker": "soci_ _ _ _ _ ",
     "start": 264,
     "end": 278
    },
    {
     "index": 9,
     "prefix": "techn",
     "answer": "ology",
     "word": "technology",
     "slots": 5,
     "underscores": 5,
     "marker": "techn_ _ _ _ _ ",
     "start": 289,
     "end": 304
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 陶器制作与发展、制陶工艺与工艺技术演进。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "pots",
     "reason": "n.复←pot（陶罐）"
    },
    {
     "word": "shaped",
     "reason": "v.过去式/过去分词←shape（成形）"
    },
    {
     "word": "hand",
     "reason": "n.手（by hand 手工）"
    },
    {
     "word": "heated",
     "reason": "v.过去式←heat（加热／烧制）"
    },
    {
     "word": "simple",
     "reason": "adj.简单的"
    },
    {
     "word": "producing",
     "reason": "v.现在分词←produce（生产）⚠AB\"produucing\"错位（多 u），据前缀 produ 校正为 producing（片段列\"ucing\"误）"
    },
    {
     "word": "that",
     "reason": "pron./conj.那个／引导定语从句"
    },
    {
     "word": "longer",
     "reason": "adj.比较级←long（更持久）"
    },
    {
     "word": "societies",
     "reason": "n.复←society（社会）"
    },
    {
     "word": "technology",
     "reason": "n.技术"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 Early pots（主）were shaped（谓）and heated（谓）；修饰：by hand 介词短语作方式状语，修饰 shaped；in simple kilns 介词短语作地点状语，修饰 heated；producing ceramics that lasted longer 现在分词短语作结果状语，that lasted longer 定语从句修饰 ceramics。 - 句② 主干 As societies developed（时间状语从句）, technology（主）became（系）more refined（表）；修饰：with different cultures creating distinct styles 介词短语作伴随状语。"
    }
   ],
   "tags": [
    "艺术",
    "工艺",
    "制陶工艺",
    "陶器制作与发展"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260127AM",
   "month": "2026年1月",
   "source": "20260127AM",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Fossils & Evolution",
   "discipline": "生命科学",
   "topic": "生物",
   "difficulty": "中等",
   "passage": "Fossils provide invaluable evidence of evolutionary history, documenting species that lived millions of years ago. Paleontologists examine these remains to understand how organisms have changed over time. Natural selection expl_ _ _ _ how advant_ _ _ _ _ _ traits incr_ _ _ _ in freq_ _ _ _ _ in a popul_ _ _ _ _. Species ad_ _ _ to th_ _ _ environments, wh_ _ _ leads t_ incredible dive_ _ _ _ _ observed in the biological world today through the mechanism of natural selection. The ongoing study of evolution continues to reveal how life on Earth has developed and diversified.",
   "blanks": [
    {
     "index": 0,
     "prefix": "expl",
     "answer": "ains",
     "word": "explains",
     "slots": 4,
     "underscores": 4,
     "marker": "expl_ _ _ _ ",
     "start": 223,
     "end": 235
    },
    {
     "index": 1,
     "prefix": "advant",
     "answer": "ageous",
     "word": "advantageous",
     "slots": 6,
     "underscores": 6,
     "marker": "advant_ _ _ _ _ _ ",
     "start": 239,
     "end": 257
    },
    {
     "index": 2,
     "prefix": "incr",
     "answer": "ease",
     "word": "increase",
     "slots": 4,
     "underscores": 4,
     "marker": "incr_ _ _ _ ",
     "start": 264,
     "end": 276
    },
    {
     "index": 3,
     "prefix": "freq",
     "answer": "uency",
     "word": "frequency",
     "slots": 5,
     "underscores": 5,
     "marker": "freq_ _ _ _ _ ",
     "start": 279,
     "end": 293
    },
    {
     "index": 4,
     "prefix": "popul",
     "answer": "ation",
     "word": "population",
     "slots": 5,
     "underscores": 5,
     "marker": "popul_ _ _ _ _",
     "start": 298,
     "end": 312
    },
    {
     "index": 5,
     "prefix": "ad",
     "answer": "apt",
     "word": "adapt",
     "slots": 3,
     "underscores": 3,
     "marker": "ad_ _ _ ",
     "start": 322,
     "end": 330
    },
    {
     "index": 6,
     "prefix": "th",
     "answer": "eir",
     "word": "their",
     "slots": 3,
     "underscores": 3,
     "marker": "th_ _ _ ",
     "start": 333,
     "end": 341
    },
    {
     "index": 7,
     "prefix": "wh",
     "answer": "ich",
     "word": "which",
     "slots": 3,
     "underscores": 3,
     "marker": "wh_ _ _ ",
     "start": 355,
     "end": 363
    },
    {
     "index": 8,
     "prefix": "t",
     "answer": "o",
     "word": "to",
     "slots": 1,
     "underscores": 1,
     "marker": "t_ ",
     "start": 369,
     "end": 372
    },
    {
     "index": 9,
     "prefix": "dive",
     "answer": "rsity",
     "word": "diversity",
     "slots": 5,
     "underscores": 5,
     "marker": "dive_ _ _ _ _ ",
     "start": 383,
     "end": 397
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 动物与生物（化石证据及自然选择进化机制）。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "explains",
     "reason": "v.三单←explain（解释）"
    },
    {
     "word": "advantageous",
     "reason": "adj.有利的（advantage+-ous）"
    },
    {
     "word": "increase",
     "reason": "v.增加"
    },
    {
     "word": "frequency",
     "reason": "n.频率"
    },
    {
     "word": "population",
     "reason": "n.种群"
    },
    {
     "word": "adapt",
     "reason": "v.适应"
    },
    {
     "word": "their",
     "reason": "pron.它们的"
    },
    {
     "word": "which",
     "reason": "pron.引导定语从句"
    },
    {
     "word": "to",
     "reason": "prep.向／导致（leads to）"
    },
    {
     "word": "diversity",
     "reason": "n.多样性←diverse"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 Natural selection（主）explains（谓）[how...]（宾语从句）；修饰：how advantageous traits increase in frequency environments in a population 宾语从句，in frequency environments 与 in a population 介词短语作状语。 - 句② 主干 Species（主）adapt（谓）to their environments（状）；修饰：which leads to incredible diversity 定语从句（which 指代前文）；observed in the biological world today 过去分词短语作后置定语，修饰 diversity；through the mechanism of natural selection 介词短语作方式状语。"
    }
   ],
   "tags": [
    "生命科学",
    "生物",
    "动物"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260128NOON",
   "month": "2026年1月",
   "source": "20260128NOON",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Child Development",
   "discipline": "社会科学",
   "topic": "心理学",
   "difficulty": "中等",
   "passage": "Child development milestones are key indicators of a child's growth. They enco_ _ _ _ _ various asp_ _ _ _ of development, incl_ _ _ _ _ language acqui_ _ _ _ _ _, motor ski _ _ _ and soc_ _ _ interactions. O_ _ example i_ taking a fi_ _ _ step, wh_ _ _ typically occurs around the age of twelve months. These milestones are useful in helping parents and caretakers monitor a child's progress. It is important to remember, however, that these milestones only provide a general guide, and each child develops at their own pace.",
   "blanks": [
    {
     "index": 0,
     "prefix": "enco",
     "answer": "mpass",
     "word": "encompass",
     "slots": 5,
     "underscores": 5,
     "marker": "enco_ _ _ _ _ ",
     "start": 74,
     "end": 88
    },
    {
     "index": 1,
     "prefix": "asp",
     "answer": "ects",
     "word": "aspects",
     "slots": 4,
     "underscores": 4,
     "marker": "asp_ _ _ _ ",
     "start": 96,
     "end": 107
    },
    {
     "index": 2,
     "prefix": "incl",
     "answer": "uding",
     "word": "including",
     "slots": 5,
     "underscores": 5,
     "marker": "incl_ _ _ _ _ ",
     "start": 123,
     "end": 137
    },
    {
     "index": 3,
     "prefix": "acqui",
     "answer": "sition",
     "word": "acquisition",
     "slots": 6,
     "underscores": 6,
     "marker": "acqui_ _ _ _ _ _",
     "start": 146,
     "end": 162
    },
    {
     "index": 4,
     "prefix": "",
     "answer": "lls",
     "word": "lls",
     "slots": 3,
     "underscores": 3,
     "marker": "_ _ _ ",
     "start": 174,
     "end": 180
    },
    {
     "index": 5,
     "prefix": "soc",
     "answer": "ial",
     "word": "social",
     "slots": 3,
     "underscores": 3,
     "marker": "soc_ _ _ ",
     "start": 184,
     "end": 193
    },
    {
     "index": 6,
     "prefix": "O",
     "answer": "ne",
     "word": "One",
     "slots": 2,
     "underscores": 2,
     "marker": "O_ _ ",
     "start": 207,
     "end": 212
    },
    {
     "index": 7,
     "prefix": "i",
     "answer": "s",
     "word": "is",
     "slots": 1,
     "underscores": 1,
     "marker": "i_ ",
     "start": 220,
     "end": 223
    },
    {
     "index": 8,
     "prefix": "fi",
     "answer": "rst",
     "word": "first",
     "slots": 3,
     "underscores": 3,
     "marker": "fi_ _ _ ",
     "start": 232,
     "end": 240
    },
    {
     "index": 9,
     "prefix": "wh",
     "answer": "ich",
     "word": "which",
     "slots": 3,
     "underscores": 3,
     "marker": "wh_ _ _ ",
     "start": 246,
     "end": 254
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 发展心理学与心理学（儿童发展里程碑）。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "encompass",
     "reason": "v.包含／涵盖"
    },
    {
     "word": "aspects",
     "reason": "n.复←aspect（方面）"
    },
    {
     "word": "including",
     "reason": "v.现在分词←include（包括）"
    },
    {
     "word": "acquisition",
     "reason": "n.获得←acquire（language acquisition 语言习得）"
    },
    {
     "word": "skills",
     "reason": "n.复←skill（技能）⚠前缀列缺失（应为 ski），AB\"ski lls\"以空格错位，据语境校正为 skills"
    },
    {
     "word": "social",
     "reason": "adj.社会的"
    },
    {
     "word": "One",
     "reason": "pron./adj.一个（One example）"
    },
    {
     "word": "is",
     "reason": "v.三单←be（是）"
    },
    {
     "word": "first",
     "reason": "adj.第一的／最初的"
    },
    {
     "word": "which",
     "reason": "pron.引导定语从句"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 They（主）encompass（谓）various aspects（宾）；修饰：of development 介词短语作后置定语，修饰 aspects；including language acquisition, motor skills and social interactions 现在分词短语作伴随／举例。 - 句② 主干 One example（主）is（系）taking a first step（表）；修饰：which typically occurs around the age of twelve months 定语从句，修饰 example；around the age of twelve months 介词短语作时间状语。"
    }
   ],
   "tags": [
    "社会科学",
    "心理学",
    "发展心理学"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260128PM",
   "month": "2026年1月",
   "source": "20260128PM",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Human Cognition",
   "discipline": "社会科学",
   "topic": "心理学",
   "difficulty": "中等",
   "passage": "Human cognition refers to the mental processes involved in acquiring, processing, storing, and using knowledge. These inc_ _ _ _ the wa_ _ that peo_ _ _ interpret sensory sig_ _ _ _ (perception), h_ _ we st_ _ _ and retr_ _ _ _ information (mem_ _ _), how lang_ _ _ _ is prod_ _ _ _ (speech), and how humans analyze and solve problems. Researchers study cognitive functions to uncover how the brain processes information and how these processes influence behavior. Insights from cognitive science can improve educational methods and help develop interventions for cognitive disorders.",
   "blanks": [
    {
     "index": 0,
     "prefix": "inc",
     "answer": "lude",
     "word": "include",
     "slots": 4,
     "underscores": 4,
     "marker": "inc_ _ _ _ ",
     "start": 118,
     "end": 129
    },
    {
     "index": 1,
     "prefix": "wa",
     "answer": "ys",
     "word": "ways",
     "slots": 2,
     "underscores": 2,
     "marker": "wa_ _ ",
     "start": 133,
     "end": 139
    },
    {
     "index": 2,
     "prefix": "peo",
     "answer": "ple",
     "word": "people",
     "slots": 3,
     "underscores": 3,
     "marker": "peo_ _ _ ",
     "start": 144,
     "end": 153
    },
    {
     "index": 3,
     "prefix": "sig",
     "answer": "nals",
     "word": "signals",
     "slots": 4,
     "underscores": 4,
     "marker": "sig_ _ _ _ ",
     "start": 171,
     "end": 182
    },
    {
     "index": 4,
     "prefix": "h",
     "answer": "ow",
     "word": "how",
     "slots": 2,
     "underscores": 2,
     "marker": "h_ _ ",
     "start": 196,
     "end": 201
    },
    {
     "index": 5,
     "prefix": "st",
     "answer": "ore",
     "word": "store",
     "slots": 3,
     "underscores": 3,
     "marker": "st_ _ _ ",
     "start": 204,
     "end": 212
    },
    {
     "index": 6,
     "prefix": "retr",
     "answer": "ieve",
     "word": "retrieve",
     "slots": 4,
     "underscores": 4,
     "marker": "retr_ _ _ _ ",
     "start": 216,
     "end": 228
    },
    {
     "index": 7,
     "prefix": "mem",
     "answer": "ory",
     "word": "memory",
     "slots": 3,
     "underscores": 3,
     "marker": "mem_ _ _",
     "start": 241,
     "end": 249
    },
    {
     "index": 8,
     "prefix": "lang",
     "answer": "uage",
     "word": "language",
     "slots": 4,
     "underscores": 4,
     "marker": "lang_ _ _ _ ",
     "start": 256,
     "end": 268
    },
    {
     "index": 9,
     "prefix": "prod",
     "answer": "uced",
     "word": "produced",
     "slots": 4,
     "underscores": 4,
     "marker": "prod_ _ _ _ ",
     "start": 271,
     "end": 283
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 人类的认知、认知心理学与心理学（心智加工过程）。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "include",
     "reason": "v.包含"
    },
    {
     "word": "ways",
     "reason": "n.复←way（方式）"
    },
    {
     "word": "people",
     "reason": "n.人们"
    },
    {
     "word": "signals",
     "reason": "n.复←signal（信号）"
    },
    {
     "word": "how",
     "reason": "adv./conj.如何"
    },
    {
     "word": "store",
     "reason": "v.储存"
    },
    {
     "word": "retrieve",
     "reason": "v.检索／提取"
    },
    {
     "word": "memory",
     "reason": "n.记忆"
    },
    {
     "word": "language",
     "reason": "n.语言"
    },
    {
     "word": "produced",
     "reason": "v.过去式/过去分词←produce（产生；is produced 被动）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 These（主）include（谓）the ways（宾）；修饰：that people interpret sensory signals 定语从句修饰 ways；how we store and retrieve information 宾语从句（与 the ways 并列）；how language is produced 宾语从句；and how humans analyze and solve problems 宾语从句（并列）。"
    }
   ],
   "tags": [
    "社会科学",
    "心理学",
    "认知心理学",
    "人类的认知"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260202AM",
   "month": "2026年2月",
   "source": "20260202AM",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "The Odyssey",
   "discipline": "艺术",
   "topic": "文学",
   "difficulty": "中等",
   "passage": "The Odyssey is an ancient Greek epic poem that follows the hero, Odysseus, on his ten-year journey home after the Trojan War. It i_ widely consi_ _ _ _ _ one o_ the grea_ _ _ _ works i_ the his_ _ _ _ of Euro_ _ _ _ literature. The Odyssey estab_ _ _ _ _ _ many narr_ _ _ _ _ structures a_ _ archetypes—like the hero’s journey—that continue to shape storytelling today. It also delves into timeless human experiences. Odysseus’s longing to return home, for example, resonates with the universal desire for belonging and stability. He must adapt, disguise, and rediscover himself, reflecting the fluid nature of identity.",
   "blanks": [
    {
     "index": 0,
     "prefix": "i",
     "underscores": 1,
     "word": "is",
     "answer": "s",
     "slots": 1,
     "marker": "i_ ",
     "start": 129,
     "end": 132
    },
    {
     "index": 1,
     "prefix": "consi",
     "underscores": 5,
     "word": "considered",
     "answer": "dered",
     "slots": 5,
     "marker": "consi_ _ _ _ _ ",
     "start": 139,
     "end": 154
    },
    {
     "index": 2,
     "prefix": "o",
     "underscores": 1,
     "word": "of",
     "answer": "f",
     "slots": 1,
     "marker": "o_ ",
     "start": 158,
     "end": 161
    },
    {
     "index": 3,
     "prefix": "grea",
     "underscores": 4,
     "word": "greatest",
     "answer": "test",
     "slots": 4,
     "marker": "grea_ _ _ _ ",
     "start": 165,
     "end": 177
    },
    {
     "index": 4,
     "prefix": "i",
     "underscores": 1,
     "word": "in",
     "answer": "n",
     "slots": 1,
     "marker": "i_ ",
     "start": 183,
     "end": 186
    },
    {
     "index": 5,
     "prefix": "his",
     "underscores": 4,
     "word": "history",
     "answer": "tory",
     "slots": 4,
     "marker": "his_ _ _ _ ",
     "start": 190,
     "end": 201
    },
    {
     "index": 6,
     "prefix": "Euro",
     "underscores": 4,
     "word": "European",
     "answer": "pean",
     "slots": 4,
     "marker": "Euro_ _ _ _ ",
     "start": 204,
     "end": 216
    },
    {
     "index": 7,
     "prefix": "estab",
     "underscores": 6,
     "word": "established",
     "answer": "lished",
     "slots": 6,
     "marker": "estab_ _ _ _ _ _ ",
     "start": 240,
     "end": 257
    },
    {
     "index": 8,
     "prefix": "narr",
     "underscores": 5,
     "word": "narrative",
     "answer": "ative",
     "slots": 5,
     "marker": "narr_ _ _ _ _ ",
     "start": 262,
     "end": 276
    },
    {
     "index": 9,
     "prefix": "a",
     "underscores": 2,
     "word": "and",
     "answer": "nd",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 287,
     "end": 292
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 《奥德赛》的文学地位、叙事结构与原型，及其对后世 storytelling 的影响。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "is",
     "reason": "v.三单←be（系动词）"
    },
    {
     "word": "considered",
     "reason": "v.过去分词←consider（被认为）"
    },
    {
     "word": "of",
     "reason": "prep.…的"
    },
    {
     "word": "greatest",
     "reason": "adj.最高级←great（最伟大的）"
    },
    {
     "word": "in",
     "reason": "prep.在"
    },
    {
     "word": "history",
     "reason": "n.原形（历史）"
    },
    {
     "word": "European",
     "reason": "adj.欧洲的（Europe→European）"
    },
    {
     "word": "established",
     "reason": "v.过去式←establish（确立）"
    },
    {
     "word": "narrative",
     "reason": "adj.叙事的（narrate→narrative）"
    },
    {
     "word": "and",
     "reason": "conj.和"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 It（主）is considered（谓）one of the greatest works（宾）; 修饰：in the history of European literature 介词短语作范围状语，of European literature 后置定语修饰 history，of the greatest works 后置定语修饰 one。 - 句② 主干 The Odyssey（主）established（谓）many narrative structures and archetypes（宾）; 修饰：like the hero's journey 介词短语作举例，that continue to shape storytelling today 定语从句修饰 structures and archetypes。"
    }
   ],
   "tags": [
    "艺术",
    "文学",
    "古希腊文学",
    "《奥德赛》的介绍"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "20260202AM-2",
   "month": "2026年2月",
   "source": "20260202AM",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Use of Fire",
   "discipline": "社会科学",
   "topic": "历史",
   "difficulty": "中等",
   "passage": "Learning the controlled use of fire was a key development in human history that greatly improved the early humans’ ability to survive. Coo_ _ _ _ food, partic_ _ _ _ _ _ meat a_ _ tubers, ma_ _ digesting nutr_ _ _ _ _ much eas_ _ _. Fire al_ _ provided war_ _ _ in col_ _ _ climates, allo_ _ _ _ humans to expand their geographic range and survive in areas where they might not have otherwise. In addition, fire was used to harden wood for tools like spears and to shape stones for cutting and scraping, thus contributing to advances in toolmaking.",
   "blanks": [
    {
     "index": 0,
     "prefix": "Coo",
     "answer": "king",
     "word": "Cooking",
     "slots": 4,
     "underscores": 4,
     "marker": "Coo_ _ _ _ ",
     "start": 135,
     "end": 146
    },
    {
     "index": 1,
     "prefix": "partic",
     "answer": "ularly",
     "word": "particularly",
     "slots": 6,
     "underscores": 6,
     "marker": "partic_ _ _ _ _ _ ",
     "start": 152,
     "end": 170
    },
    {
     "index": 2,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 175,
     "end": 180
    },
    {
     "index": 3,
     "prefix": "ma",
     "answer": "de",
     "word": "made",
     "slots": 2,
     "underscores": 2,
     "marker": "ma_ _ ",
     "start": 188,
     "end": 194
    },
    {
     "index": 4,
     "prefix": "nutr",
     "answer": "ients",
     "word": "nutrients",
     "slots": 5,
     "underscores": 5,
     "marker": "nutr_ _ _ _ _ ",
     "start": 204,
     "end": 218
    },
    {
     "index": 5,
     "prefix": "eas",
     "answer": "ier",
     "word": "easier",
     "slots": 3,
     "underscores": 3,
     "marker": "eas_ _ _",
     "start": 223,
     "end": 231
    },
    {
     "index": 6,
     "prefix": "al",
     "answer": "so",
     "word": "also",
     "slots": 2,
     "underscores": 2,
     "marker": "al_ _ ",
     "start": 238,
     "end": 244
    },
    {
     "index": 7,
     "prefix": "war",
     "answer": "mth",
     "word": "warmth",
     "slots": 3,
     "underscores": 3,
     "marker": "war_ _ _ ",
     "start": 253,
     "end": 262
    },
    {
     "index": 8,
     "prefix": "col",
     "answer": "der",
     "word": "colder",
     "slots": 3,
     "underscores": 3,
     "marker": "col_ _ _ ",
     "start": 265,
     "end": 274
    },
    {
     "index": 9,
     "prefix": "allo",
     "answer": "wing",
     "word": "allowing",
     "slots": 4,
     "underscores": 4,
     "marker": "allo_ _ _ _ ",
     "start": 284,
     "end": 296
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 火的控制使用对人类生存、饮食消化、保暖御寒与工具制造的技术意义。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "Cooking",
     "reason": "v.动名词←cook（烹饪）"
    },
    {
     "word": "particularly",
     "reason": "adv.尤其（particular→particularly）"
    },
    {
     "word": "and",
     "reason": "conj.和"
    },
    {
     "word": "made",
     "reason": "v.过去式←make（使／让）"
    },
    {
     "word": "nutrients",
     "reason": "n.复←nutrient（营养物）"
    },
    {
     "word": "easier",
     "reason": "adj.比较级←easy（更容易）"
    },
    {
     "word": "also",
     "reason": "adv.也"
    },
    {
     "word": "warmth",
     "reason": "n.原形←warm（温暖）"
    },
    {
     "word": "colder",
     "reason": "adj.比较级←cold（更冷）⚠greedy 误为\"collder\"，AB 错位，据语境校正"
    },
    {
     "word": "allowing",
     "reason": "v.现在分词←allow（使能够）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 Cooking food（主）made（谓）digesting nutrients（宾）; 修饰：particularly meat and tubers 插入语／同位，much easier 形容词短语作宾语补足语。 - 句② 主干 Fire（主）provided（谓）warmth（宾）; 修饰：in colder climates 介词短语作地点状语，allowing humans to expand their geographic range and survive 现在分词短语作结果状语，where they might not have otherwise 定语从句修饰 areas。"
    }
   ],
   "tags": [
    "社会科学",
    "历史",
    "技术史",
    "火的使用"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260201AM",
   "month": "2026年2月",
   "source": "20260201AM",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Erie Canal",
   "discipline": "社会科学",
   "topic": "历史",
   "difficulty": "困难",
   "passage": "The Erie Canal, completed in 1825, is a historic waterway in the United States that linked the Atlantic Ocean to the Great Lakes. Its constr_ _ _ _ _ _ was a remar_ _ _ _ _ engineering fe_ _ and pion_ _ _ _ _ many innov_ _ _ _ _ techniques. T_ _ canal signif_ _ _ _ _ _ _ reduced transpo_ _ _ _ _ _ _ costs a_ _ time fr_ _ New York City to the interior of the nation, propelling the city into a major commercial hub. The success of the Erie Canal inspired the building of other canals and infrastructure projects across the United States.",
   "blanks": [
    {
     "index": 0,
     "prefix": "constr",
     "underscores": 6,
     "word": "construction",
     "answer": "uction",
     "slots": 6,
     "marker": "constr_ _ _ _ _ _ ",
     "start": 134,
     "end": 152
    },
    {
     "index": 1,
     "prefix": "remar",
     "underscores": 5,
     "word": "remarkable",
     "answer": "kable",
     "slots": 5,
     "marker": "remar_ _ _ _ _ ",
     "start": 158,
     "end": 173
    },
    {
     "index": 2,
     "prefix": "fe",
     "underscores": 2,
     "word": "feat",
     "answer": "at",
     "slots": 2,
     "marker": "fe_ _ ",
     "start": 185,
     "end": 191
    },
    {
     "index": 3,
     "prefix": "pion",
     "underscores": 5,
     "word": "pioneered",
     "answer": "eered",
     "slots": 5,
     "marker": "pion_ _ _ _ _ ",
     "start": 195,
     "end": 209
    },
    {
     "index": 4,
     "prefix": "innov",
     "underscores": 5,
     "word": "innovative",
     "answer": "ative",
     "slots": 5,
     "marker": "innov_ _ _ _ _ ",
     "start": 214,
     "end": 229
    },
    {
     "index": 5,
     "prefix": "T",
     "underscores": 2,
     "word": "The",
     "answer": "he",
     "slots": 2,
     "marker": "T_ _ ",
     "start": 241,
     "end": 246
    },
    {
     "index": 6,
     "prefix": "signif",
     "underscores": 7,
     "word": "significantly",
     "answer": "icantly",
     "slots": 7,
     "marker": "signif_ _ _ _ _ _ _ ",
     "start": 252,
     "end": 272
    },
    {
     "index": 7,
     "prefix": "transpo",
     "underscores": 7,
     "word": "transportation",
     "answer": "rtation",
     "slots": 7,
     "marker": "transpo_ _ _ _ _ _ _ ",
     "start": 280,
     "end": 301
    },
    {
     "index": 8,
     "prefix": "a",
     "underscores": 2,
     "word": "and",
     "answer": "nd",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 307,
     "end": 312
    },
    {
     "index": 9,
     "prefix": "fr",
     "underscores": 2,
     "word": "from",
     "answer": "om",
     "slots": 2,
     "marker": "fr_ _ ",
     "start": 317,
     "end": 323
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 伊利运河的工程成就、其对运输成本与纽约商业地位的影响，及后续基础设施建设的启发。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "construction",
     "reason": "n.原形←construct（建造）"
    },
    {
     "word": "remarkable",
     "reason": "adj.非凡的（remark→remarkable）"
    },
    {
     "word": "feat",
     "reason": "n.原形（功绩）"
    },
    {
     "word": "pioneered",
     "reason": "v.过去式←pioneer（开创）"
    },
    {
     "word": "innovative",
     "reason": "adj.创新的（innovate→innovative）"
    },
    {
     "word": "The",
     "reason": "art.定冠词"
    },
    {
     "word": "significantly",
     "reason": "adv.显著地（significant→significantly）"
    },
    {
     "word": "transportation",
     "reason": "n.原形←transport（运输）"
    },
    {
     "word": "and",
     "reason": "conj.和"
    },
    {
     "word": "from",
     "reason": "prep.从"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 Its construction（主）was（谓）a remarkable engineering feat（宾）and pioneered（谓）many innovative techniques（宾）; 修饰：engineering 名词作前置定语（略）。 - 句② 主干 The canal（主）reduced（谓）transportation costs and time（宾）; 修饰：from New York City to the interior of the nation 介词短语作来源／范围状语，of the nation 后置定语修饰 interior，propelling the city into a major commercial hub 现在分词短语作结果状语。"
    }
   ],
   "tags": [
    "社会科学",
    "历史",
    "技术史",
    "伊利运河"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "20260201AM-2",
   "month": "2026年2月",
   "source": "20260201AM",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Logical Reasoning",
   "discipline": "社会科学",
   "topic": "哲学",
   "difficulty": "困难",
   "passage": "Logic and reasoning are essential components of academic methodology. These ski_ _ _ involve evalu_ _ _ _ _ arguments, ident_ _ _ _ _ _ fallacies, a_ _ constructing cohe_ _ _ _ conclusions ba_ _ _ on evid_ _ _ _ . Mastering log_ _ _ _ principles enha_ _ _ _ critical thin_ _ _ _ and problem-solving abilities. In various disciplines, from science to philosophy, these principles are used to analyze complex issues and develop informed perspectives, contributing to intellectual growth and effective decision-making. Formal logic systems include propositional and predicate logic, while informal logic addresses everyday reasoning, helping individuals recognize cognitive biases and construct more persuasive and sound arguments.",
   "blanks": [
    {
     "index": 0,
     "prefix": "ski",
     "answer": "lls",
     "word": "skills",
     "slots": 3,
     "underscores": 3,
     "marker": "ski_ _ _ ",
     "start": 76,
     "end": 85
    },
    {
     "index": 1,
     "prefix": "evalu",
     "answer": "ating",
     "word": "evaluating",
     "slots": 5,
     "underscores": 5,
     "marker": "evalu_ _ _ _ _ ",
     "start": 93,
     "end": 108
    },
    {
     "index": 2,
     "prefix": "ident",
     "answer": "ifying",
     "word": "identifying",
     "slots": 6,
     "underscores": 6,
     "marker": "ident_ _ _ _ _ _ ",
     "start": 119,
     "end": 136
    },
    {
     "index": 3,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 147,
     "end": 152
    },
    {
     "index": 4,
     "prefix": "cohe",
     "answer": "rent",
     "word": "coherent",
     "slots": 4,
     "underscores": 4,
     "marker": "cohe_ _ _ _ ",
     "start": 165,
     "end": 177
    },
    {
     "index": 5,
     "prefix": "ba",
     "answer": "sed",
     "word": "based",
     "slots": 3,
     "underscores": 3,
     "marker": "ba_ _ _ ",
     "start": 189,
     "end": 197
    },
    {
     "index": 6,
     "prefix": "evid",
     "answer": "ence",
     "word": "evidence",
     "slots": 4,
     "underscores": 4,
     "marker": "evid_ _ _ _ ",
     "start": 200,
     "end": 212
    },
    {
     "index": 7,
     "prefix": "log",
     "answer": "ical",
     "word": "logical",
     "slots": 4,
     "underscores": 4,
     "marker": "log_ _ _ _ ",
     "start": 224,
     "end": 235
    },
    {
     "index": 8,
     "prefix": "enha",
     "answer": "nces",
     "word": "enhances",
     "slots": 4,
     "underscores": 4,
     "marker": "enha_ _ _ _ ",
     "start": 246,
     "end": 258
    },
    {
     "index": 9,
     "prefix": "thin",
     "answer": "king",
     "word": "thinking",
     "slots": 4,
     "underscores": 4,
     "marker": "thin_ _ _ _ ",
     "start": 267,
     "end": 279
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 逻辑与推理作为学术方法的核心、常见谬误识别，以及形式与非形式逻辑的应用。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "skills",
     "reason": "n.复←skill（技能）⚠greedy 误为\"skiills\"，片段列错位，据语境校正"
    },
    {
     "word": "evaluating",
     "reason": "v.现在分词←evaluate（评估）"
    },
    {
     "word": "identifying",
     "reason": "v.现在分词←identify（识别）"
    },
    {
     "word": "and",
     "reason": "conj.和"
    },
    {
     "word": "coherent",
     "reason": "adj.连贯的（cohere→coherent）"
    },
    {
     "word": "based",
     "reason": "v.过去分词←base（基于）"
    },
    {
     "word": "evidence",
     "reason": "n.原形（证据）"
    },
    {
     "word": "logical",
     "reason": "adj.逻辑的（logic→logical）"
    },
    {
     "word": "enhances",
     "reason": "v.三单←enhance（增强）"
    },
    {
     "word": "thinking",
     "reason": "n.原形←think（思维）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 These skills（主）involve（谓）evaluating arguments, identifying fallacies, and constructing coherent conclusions（宾，三动名词并列）; 修饰：based on evidence 过去分词短语作后置定语修饰 conclusions。 - 句② 主干 Mastering logical principles（主）enhances（谓）critical thinking and problem-solving abilities（宾）; 修饰：无显著长修饰成分。"
    }
   ],
   "tags": [
    "社会科学",
    "哲学",
    "逻辑学",
    "逻辑和推理"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260201AM-3",
   "month": "2026年2月",
   "source": "20260201AM",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Pinta Island Tortoise",
   "discipline": "自然科学",
   "topic": "生物",
   "difficulty": "中等",
   "passage": "The Pinta Island tortoise, a subspecies of giant tortoise native to Ecuador's Galapagos Islands, became extinct with the death of the last known individual, Lonesome George, in 2012. Pinta tortoises were kn_ _ _ for th_ _ _ domed she_ _ _ and lo_ _ necks ada_ _ _ _ for fee_ _ _ _ ; they pla_ _ _ a cru_ _ _ _ role i_ shaping veget_ _ _ _ _ by grazing on plants and dispersing seeds. The extinction of this subspecies highlights the impact of human activity on isolated ecosystems. Invasive species and habitat destruction were significant factors contributing to its decline.",
   "blanks": [
    {
     "index": 0,
     "prefix": "kn",
     "underscores": 3,
     "word": "known",
     "answer": "own",
     "slots": 3,
     "marker": "kn_ _ _ ",
     "start": 204,
     "end": 212
    },
    {
     "index": 1,
     "prefix": "th",
     "underscores": 3,
     "word": "their",
     "answer": "eir",
     "slots": 3,
     "marker": "th_ _ _ ",
     "start": 216,
     "end": 224
    },
    {
     "index": 2,
     "prefix": "she",
     "underscores": 3,
     "word": "shells",
     "answer": "lls",
     "slots": 3,
     "marker": "she_ _ _ ",
     "start": 230,
     "end": 239
    },
    {
     "index": 3,
     "prefix": "lo",
     "underscores": 2,
     "word": "long",
     "answer": "ng",
     "slots": 2,
     "marker": "lo_ _ ",
     "start": 243,
     "end": 249
    },
    {
     "index": 4,
     "prefix": "ada",
     "underscores": 4,
     "word": "adapted",
     "answer": "pted",
     "slots": 4,
     "marker": "ada_ _ _ _ ",
     "start": 255,
     "end": 266
    },
    {
     "index": 5,
     "prefix": "fee",
     "underscores": 4,
     "word": "feeding",
     "answer": "ding",
     "slots": 4,
     "marker": "fee_ _ _ _ ",
     "start": 270,
     "end": 281
    },
    {
     "index": 6,
     "prefix": "pla",
     "underscores": 3,
     "word": "played",
     "answer": "yed",
     "slots": 3,
     "marker": "pla_ _ _ ",
     "start": 288,
     "end": 297
    },
    {
     "index": 7,
     "prefix": "cru",
     "underscores": 4,
     "word": "crucial",
     "answer": "cial",
     "slots": 4,
     "marker": "cru_ _ _ _ ",
     "start": 299,
     "end": 310
    },
    {
     "index": 8,
     "prefix": "i",
     "underscores": 1,
     "word": "in",
     "answer": "n",
     "slots": 1,
     "marker": "i_ ",
     "start": 315,
     "end": 318
    },
    {
     "index": 9,
     "prefix": "veget",
     "underscores": 5,
     "word": "vegetation",
     "answer": "ation",
     "slots": 5,
     "marker": "veget_ _ _ _ _ ",
     "start": 326,
     "end": 341
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 平塔岛象龟的灭绝、人类活动对孤立生态系统的影响、入侵物种与栖息地破坏。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "known",
     "reason": "v.过去式←know（知道；be known for 以…闻名）"
    },
    {
     "word": "their",
     "reason": "pron.它们的"
    },
    {
     "word": "shells",
     "reason": "n.复←shell（龟壳）"
    },
    {
     "word": "long",
     "reason": "adj.长的"
    },
    {
     "word": "adapted",
     "reason": "v.过去分词←adapt（适应）"
    },
    {
     "word": "feeding",
     "reason": "v.动名词←feed（进食；for feeding 表目的）"
    },
    {
     "word": "played",
     "reason": "v.过去式←play（扮演）"
    },
    {
     "word": "crucial",
     "reason": "adj.关键的（crux→crucial）"
    },
    {
     "word": "in",
     "reason": "prep.在…中／对于"
    },
    {
     "word": "vegetation",
     "reason": "n.植被（vegetate→vegetation）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 Pinta tortoises（主）were known（谓）；修饰：for their domed shells and long necks 介词短语作状语（be known for），adapted for feeding 过去分词短语作后置定语修饰 necks，for feeding 介词短语表目的。 - 句② 主干 they（主）played（谓）a crucial role（宾）；修饰：in shaping vegetation 介词短语作后置定语修饰 role，by grazing on plants and dispersing seeds 介词短语作方式状语。"
    }
   ],
   "tags": [
    "自然科学",
    "生物",
    "动物",
    "哺乳动物"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "官方授权15套 第1套",
   "month": "2026年2月",
   "source": "官方授权15套 第1套",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Language Development",
   "discipline": "社会科学",
   "topic": "心理学",
   "difficulty": "简单",
   "passage": "Language development in children is a complex process influenced by both genetics and environment. From bi_ _ _, infants be_ _ _ to recognize sou_ _ _ and patt_ _ _ _ in spe_ _ _. By o_ _ year o_ age, mo_ _ can s_ _ simple wo_ _ _ like\" mama\" or\"dada\". As they grow, their vocabulary expands rapidly. Interacting with caregivers and peers plays a crucial role in this development. Reading to children and engaging in conversations are effective ways to support language acquisition.",
   "blanks": [
    {
     "index": 0,
     "prefix": "bi",
     "answer": "rth",
     "word": "birth",
     "slots": 3,
     "underscores": 3,
     "marker": "bi_ _ _",
     "start": 104,
     "end": 111
    },
    {
     "index": 1,
     "prefix": "be",
     "answer": "gin",
     "word": "begin",
     "slots": 3,
     "underscores": 3,
     "marker": "be_ _ _ ",
     "start": 121,
     "end": 129
    },
    {
     "index": 2,
     "prefix": "sou",
     "answer": "nds",
     "word": "sounds",
     "slots": 3,
     "underscores": 3,
     "marker": "sou_ _ _ ",
     "start": 142,
     "end": 151
    },
    {
     "index": 3,
     "prefix": "patt",
     "answer": "erns",
     "word": "patterns",
     "slots": 4,
     "underscores": 4,
     "marker": "patt_ _ _ _ ",
     "start": 155,
     "end": 167
    },
    {
     "index": 4,
     "prefix": "spe",
     "answer": "ech",
     "word": "speech",
     "slots": 3,
     "underscores": 3,
     "marker": "spe_ _ _",
     "start": 170,
     "end": 178
    },
    {
     "index": 5,
     "prefix": "o",
     "answer": "ne",
     "word": "one",
     "slots": 2,
     "underscores": 2,
     "marker": "o_ _ ",
     "start": 183,
     "end": 188
    },
    {
     "index": 6,
     "prefix": "o",
     "answer": "f",
     "word": "of",
     "slots": 1,
     "underscores": 1,
     "marker": "o_ ",
     "start": 193,
     "end": 196
    },
    {
     "index": 7,
     "prefix": "mo",
     "answer": "st",
     "word": "most",
     "slots": 2,
     "underscores": 2,
     "marker": "mo_ _ ",
     "start": 201,
     "end": 207
    },
    {
     "index": 8,
     "prefix": "s",
     "answer": "ay",
     "word": "say",
     "slots": 2,
     "underscores": 2,
     "marker": "s_ _ ",
     "start": 211,
     "end": 216
    },
    {
     "index": 9,
     "prefix": "wo",
     "answer": "rds",
     "word": "words",
     "slots": 3,
     "underscores": 3,
     "marker": "wo_ _ _ ",
     "start": 223,
     "end": 231
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 语言发展、儿童语言习得过程、遗传与环境对语言发展的影响。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "birth",
     "reason": "n.出生（from birth 从出生起）"
    },
    {
     "word": "begin",
     "reason": "v.原形（开始）"
    },
    {
     "word": "sounds",
     "reason": "n.复←sound（声音）"
    },
    {
     "word": "patterns",
     "reason": "n.复←pattern（模式）"
    },
    {
     "word": "speech",
     "reason": "n.言语"
    },
    {
     "word": "one",
     "reason": "num.一（one year of age 一岁）"
    },
    {
     "word": "of",
     "reason": "prep.…的"
    },
    {
     "word": "most",
     "reason": "adv./det.大多数（most can say 多数能）"
    },
    {
     "word": "say",
     "reason": "v.原形（说）"
    },
    {
     "word": "words",
     "reason": "n.复←word（词）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 infants（主）begin（谓）to recognize sounds and patterns（宾）；修饰：From birth 介词短语作时间状语，in speech 介词短语作后置定语修饰 sounds and patterns。 - 句② 主干 most（主）can say（谓）simple words（宾）；修饰：By one year of age 介词短语作时间状语，like \"mama\" or \"dada\" 介词短语作后置定语修饰 words。"
    }
   ],
   "tags": [
    "社会科学",
    "心理学",
    "发展心理学"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "山猫2026真题24",
   "month": "2026年4月",
   "source": "山猫2026真题24",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Ocean Currents",
   "discipline": "自然科学",
   "topic": "环境科学",
   "difficulty": "困难",
   "passage": "Ocean currents are critical components of Earth's climate system, influencing weather patterns and marine ecosystems. Driven b_ wind, tempe_ _ _ _ _ _ changes, a_ _ differences i_ salinity, ocean currents distr_ _ _ _ _ heat acr_ _ _ the gl_ _ _ . The Gulf Stream, f_ _ instance, wa_ _ _ the North Atlantic Current, affe_ _ _ _ _ climate in Europe. Deep ocean currents, known as thermohaline circulation, play a role in regulating global temperatures and carbon dioxide levels. Research in oceanography continues to reveal the complexities of these dynamic systems.",
   "blanks": [
    {
     "index": 0,
     "prefix": "b",
     "underscores": 1,
     "word": "by",
     "answer": "y",
     "slots": 1,
     "marker": "b_ ",
     "start": 125,
     "end": 128
    },
    {
     "index": 1,
     "prefix": "tempe",
     "underscores": 6,
     "word": "temperature",
     "answer": "rature",
     "slots": 6,
     "marker": "tempe_ _ _ _ _ _ ",
     "start": 134,
     "end": 151
    },
    {
     "index": 2,
     "prefix": "a",
     "underscores": 2,
     "word": "and",
     "answer": "nd",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 160,
     "end": 165
    },
    {
     "index": 3,
     "prefix": "i",
     "underscores": 1,
     "word": "in",
     "answer": "n",
     "slots": 1,
     "marker": "i_ ",
     "start": 177,
     "end": 180
    },
    {
     "index": 4,
     "prefix": "distr",
     "underscores": 5,
     "word": "distribute",
     "answer": "ibute",
     "slots": 5,
     "marker": "distr_ _ _ _ _ ",
     "start": 205,
     "end": 220
    },
    {
     "index": 5,
     "prefix": "acr",
     "underscores": 3,
     "word": "across",
     "answer": "oss",
     "slots": 3,
     "marker": "acr_ _ _ ",
     "start": 225,
     "end": 234
    },
    {
     "index": 6,
     "prefix": "gl",
     "underscores": 3,
     "word": "globe",
     "answer": "obe",
     "slots": 3,
     "marker": "gl_ _ _ ",
     "start": 238,
     "end": 246
    },
    {
     "index": 7,
     "prefix": "f",
     "underscores": 2,
     "word": "for",
     "answer": "or",
     "slots": 2,
     "marker": "f_ _ ",
     "start": 265,
     "end": 270
    },
    {
     "index": 8,
     "prefix": "wa",
     "underscores": 3,
     "word": "warms",
     "answer": "rms",
     "slots": 3,
     "marker": "wa_ _ _ ",
     "start": 280,
     "end": 288
    },
    {
     "index": 9,
     "prefix": "affe",
     "underscores": 5,
     "word": "affecting",
     "answer": "cting",
     "slots": 5,
     "marker": "affe_ _ _ _ _ ",
     "start": 316,
     "end": 330
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 洋流对气候系统的作用、洋流的驱动因素与热量分布、墨西哥湾流对欧洲气候的影响。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "by",
     "reason": "prep.被／由（driven by）"
    },
    {
     "word": "temperature",
     "reason": "n.温度"
    },
    {
     "word": "and",
     "reason": "conj.和"
    },
    {
     "word": "in",
     "reason": "prep.在…中（in salinity）"
    },
    {
     "word": "distribute",
     "reason": "v.原形（输送；分配）"
    },
    {
     "word": "across",
     "reason": "prep.横穿（across the globe）"
    },
    {
     "word": "globe",
     "reason": "n.地球"
    },
    {
     "word": "for",
     "reason": "prep.对于（for instance）"
    },
    {
     "word": "warms",
     "reason": "v.三单←warm（使变暖）"
    },
    {
     "word": "affecting",
     "reason": "v.动名词←affect（影响）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 ocean currents（主）distribute（谓）heat（宾）；修饰：Driven by wind, temperature changes, and differences in salinity 过去分词短语作原因状语（被动），in salinity 介词短语作后置定语修饰 differences，across the globe 介词短语作状语。 - 句② 主干 The Gulf Stream（主）warms（谓）the North Atlantic Current（宾）；修饰：for instance 插入语，affecting climate in Europe 现在分词短语作结果状语，in Europe 介词短语作后置定语修饰 climate。"
    }
   ],
   "tags": [
    "自然科学",
    "环境科学",
    "气候气象",
    "洋流影响"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "20260401A",
   "month": "2026年4月",
   "source": "20260401A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Prehistoric Diet",
   "discipline": "生命科学",
   "topic": "生物",
   "difficulty": "中等",
   "passage": "Animal bones and plant remains discovered in archaeological sites provide valuable insights into the eating habits and lifestyles of early humans. Our ance_ _ _ _ _ relied o_ a var_ _ _ diet th_ _ included me_ _, fruits, nu_ _,and veget_ _ _ _ _. This i_ no surp_ _ _ _as th_ _followed a hunting-gathering lifestyle. Later in history, the development of agriculture allowed for more stable food sources. It should be noted that, compared to animal bones, plant remains are much less likely to be well preserved, so the abundance of animal bones in archaeological digs does not necessarily mean that early humans ate few plant foods.",
   "blanks": [
    {
     "index": 0,
     "prefix": "ance",
     "answer": "stors",
     "word": "ancestors",
     "slots": 5,
     "underscores": 5,
     "marker": "ance_ _ _ _ _ ",
     "start": 151,
     "end": 165
    },
    {
     "index": 1,
     "prefix": "o",
     "answer": "n",
     "word": "on",
     "slots": 1,
     "underscores": 1,
     "marker": "o_ ",
     "start": 172,
     "end": 175
    },
    {
     "index": 2,
     "prefix": "var",
     "answer": "ied",
     "word": "varied",
     "slots": 3,
     "underscores": 3,
     "marker": "var_ _ _ ",
     "start": 177,
     "end": 186
    },
    {
     "index": 3,
     "prefix": "th",
     "answer": "at",
     "word": "that",
     "slots": 2,
     "underscores": 2,
     "marker": "th_ _ ",
     "start": 191,
     "end": 197
    },
    {
     "index": 4,
     "prefix": "me",
     "answer": "at",
     "word": "meat",
     "slots": 2,
     "underscores": 2,
     "marker": "me_ _",
     "start": 206,
     "end": 211
    },
    {
     "index": 5,
     "prefix": "nu",
     "answer": "ts",
     "word": "nuts",
     "slots": 2,
     "underscores": 2,
     "marker": "nu_ _",
     "start": 221,
     "end": 226
    },
    {
     "index": 6,
     "prefix": "veget",
     "answer": "ables",
     "word": "vegetables",
     "slots": 5,
     "underscores": 5,
     "marker": "veget_ _ _ _ _",
     "start": 231,
     "end": 245
    },
    {
     "index": 7,
     "prefix": "i",
     "answer": "s",
     "word": "is",
     "slots": 1,
     "underscores": 1,
     "marker": "i_ ",
     "start": 252,
     "end": 255
    },
    {
     "index": 8,
     "prefix": "surp",
     "answer": "rise",
     "word": "surprise",
     "slots": 4,
     "underscores": 4,
     "marker": "surp_ _ _ _",
     "start": 258,
     "end": 269
    },
    {
     "index": 9,
     "prefix": "th",
     "answer": "ey",
     "word": "they",
     "slots": 2,
     "underscores": 2,
     "marker": "th_ _",
     "start": 272,
     "end": 277
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 早期人类的饮食构成、动物骨骼与植物遗存的证据、狩猎—采集生活方式。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "ancestors",
     "reason": "n.复←ancestor（祖先）"
    },
    {
     "word": "on",
     "reason": "prep.依靠（relied on）"
    },
    {
     "word": "varied",
     "reason": "adj.多样的（vary→varied；varied diet）"
    },
    {
     "word": "that",
     "reason": "conj.引导定语从句"
    },
    {
     "word": "meat",
     "reason": "n.肉"
    },
    {
     "word": "nuts",
     "reason": "n.复←nut（坚果）"
    },
    {
     "word": "vegetables",
     "reason": "n.复←vegetable（蔬菜）⚠片段列损坏（作 ables/vegets），据语境校正"
    },
    {
     "word": "is",
     "reason": "v.三单←be（是）"
    },
    {
     "word": "surprise",
     "reason": "n.惊讶（no surprise）⚠片段列损坏（surpey），据语境校正为 surprise"
    },
    {
     "word": "they",
     "reason": "pron.他们"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 ancestors（主）relied（谓）；修饰：on a varied diet 介词短语作状语，that included meat, fruits, nuts, and vegetables 定语从句修饰 diet。 - 句② 主干 This（主）is（谓）no surprise（表语）；修饰：as they followed a hunting-gathering lifestyle 状语从句（as 表原因）。"
    }
   ],
   "tags": [
    "生命科学",
    "生物",
    "动物"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260401A-2",
   "month": "2026年4月",
   "source": "20260401A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Early Civilizations",
   "discipline": "艺术",
   "topic": "工艺",
   "difficulty": "困难",
   "passage": "Early civilizations emerged around river valleys, where fertile land and water resources supported agriculture. These commu_ _ _ _ _ _ _developed com_ _ _ _ social struc_ _ _ _ _ that incl_ _ _ _ systems o_ governance a_ _ religious instit_ _ _ _ _ _. The devel_ _ _ _ _ _ of wri_ _ _ _ marked a ma_ _ _ milestone, enabling record - keeping, communication, and the transmission of knowledge across generations. Artifacts such as pottery, tools, and writings offer glimpses into the daily lives and cultural practices of ancient peoples and the rise and fall of early societies.",
   "blanks": [
    {
     "index": 0,
     "prefix": "commu",
     "answer": "nities",
     "word": "communities",
     "slots": 6,
     "underscores": 7,
     "marker": "commu_ _ _ _ _ _ _",
     "start": 118,
     "end": 136
    },
    {
     "index": 1,
     "prefix": "com",
     "answer": "plex",
     "word": "complex",
     "slots": 4,
     "underscores": 4,
     "marker": "com_ _ _ _ ",
     "start": 146,
     "end": 157
    },
    {
     "index": 2,
     "prefix": "struc",
     "answer": "tures",
     "word": "structures",
     "slots": 5,
     "underscores": 5,
     "marker": "struc_ _ _ _ _ ",
     "start": 164,
     "end": 179
    },
    {
     "index": 3,
     "prefix": "incl",
     "answer": "uded",
     "word": "included",
     "slots": 4,
     "underscores": 4,
     "marker": "incl_ _ _ _ ",
     "start": 184,
     "end": 196
    },
    {
     "index": 4,
     "prefix": "o",
     "answer": "f",
     "word": "of",
     "slots": 1,
     "underscores": 1,
     "marker": "o_ ",
     "start": 204,
     "end": 207
    },
    {
     "index": 5,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 218,
     "end": 223
    },
    {
     "index": 6,
     "prefix": "instit",
     "answer": "utions",
     "word": "institutions",
     "slots": 6,
     "underscores": 6,
     "marker": "instit_ _ _ _ _ _",
     "start": 233,
     "end": 250
    },
    {
     "index": 7,
     "prefix": "devel",
     "answer": "opment",
     "word": "development",
     "slots": 6,
     "underscores": 6,
     "marker": "devel_ _ _ _ _ _ ",
     "start": 256,
     "end": 273
    },
    {
     "index": 8,
     "prefix": "wri",
     "answer": "ting",
     "word": "writing",
     "slots": 4,
     "underscores": 4,
     "marker": "wri_ _ _ _ ",
     "start": 276,
     "end": 287
    },
    {
     "index": 9,
     "prefix": "ma",
     "answer": "jor",
     "word": "major",
     "slots": 3,
     "underscores": 3,
     "marker": "ma_ _ _ ",
     "start": 296,
     "end": 304
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 早期文明在河谷的兴起、复杂社会结构与治理/宗教制度、文字发明作为文明里程碑。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "communities",
     "reason": "n.复←community（社群）⚠片段列损坏，据语境校正"
    },
    {
     "word": "complex",
     "reason": "adj.复杂的（com+plex）"
    },
    {
     "word": "structures",
     "reason": "n.复←structure（结构）⚠片段列损坏，据语境校正"
    },
    {
     "word": "included",
     "reason": "v.过去式←include（包含）⚠片段列损坏，据语境校正"
    },
    {
     "word": "of",
     "reason": "prep.…的"
    },
    {
     "word": "and",
     "reason": "conj.和"
    },
    {
     "word": "institutions",
     "reason": "n.复←institution（制度）⚠片段列损坏，据语境校正"
    },
    {
     "word": "development",
     "reason": "n.发展（develop+ment）⚠片段列损坏，据语境校正"
    },
    {
     "word": "writing",
     "reason": "n.动名词←write（文字／书写）"
    },
    {
     "word": "major",
     "reason": "adj.重大的（major milestone）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 communities（主）developed（谓）complex social structures（宾）；修饰：that included systems of governance and religious institutions 定语从句修饰 structures，of governance 介词短语作后置定语修饰 systems。 - 句② 主干 The development of writing（主）marked（谓）a major milestone（宾）；修饰：of writing 介词短语作后置定语修饰 development，enabling record-keeping, communication, and the transmission of knowledge across generations 现在分词短语作结果状语，across generations 介词短语作状语。"
    }
   ],
   "tags": [
    "艺术",
    "工艺",
    "制陶工艺"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260406A",
   "month": "2026年4月",
   "source": "20260406A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Environmental Geology",
   "discipline": "自然科学",
   "topic": "地质学",
   "difficulty": "困难",
   "passage": "Geology involves the study of Earth's physical structure and substances, the processes that act upon them, and the history of the planet and its life forms. Environmental geology specif_ _ _ _ _ _ focuses o_ how geolo_ _ _ _ _ processes aff_ _ _ human activ_ _ _ _ _ and t_ _ environment. I_ encompasses ar_ _ _ such a_ natural haz_ _ _ _ assessment, resource management, and land-use planning. By understanding the geological factors that influence environmental conditions, geologists can help mitigate the impacts of natural disasters and promote sustainable development.",
   "blanks": [
    {
     "index": 0,
     "prefix": "specif",
     "underscores": 6,
     "word": "specifically",
     "answer": "ically",
     "slots": 6,
     "marker": "specif_ _ _ _ _ _ ",
     "start": 179,
     "end": 197
    },
    {
     "index": 1,
     "prefix": "o",
     "underscores": 1,
     "word": "on",
     "answer": "n",
     "slots": 1,
     "marker": "o_ ",
     "start": 205,
     "end": 208
    },
    {
     "index": 2,
     "prefix": "geolo",
     "underscores": 5,
     "word": "geological",
     "answer": "gical",
     "slots": 5,
     "marker": "geolo_ _ _ _ _ ",
     "start": 212,
     "end": 227
    },
    {
     "index": 3,
     "prefix": "aff",
     "underscores": 3,
     "word": "affect",
     "answer": "ect",
     "slots": 3,
     "marker": "aff_ _ _ ",
     "start": 237,
     "end": 246
    },
    {
     "index": 4,
     "prefix": "activ",
     "underscores": 5,
     "word": "activities",
     "answer": "ities",
     "slots": 5,
     "marker": "activ_ _ _ _ _ ",
     "start": 252,
     "end": 267
    },
    {
     "index": 5,
     "prefix": "t",
     "underscores": 2,
     "word": "the",
     "answer": "he",
     "slots": 2,
     "marker": "t_ _ ",
     "start": 271,
     "end": 276
    },
    {
     "index": 6,
     "prefix": "I",
     "underscores": 1,
     "word": "It",
     "answer": "t",
     "slots": 1,
     "marker": "I_ ",
     "start": 289,
     "end": 292
    },
    {
     "index": 7,
     "prefix": "ar",
     "underscores": 3,
     "word": "areas",
     "answer": "eas",
     "slots": 3,
     "marker": "ar_ _ _ ",
     "start": 304,
     "end": 312
    },
    {
     "index": 8,
     "prefix": "a",
     "underscores": 1,
     "word": "as",
     "answer": "s",
     "slots": 1,
     "marker": "a_ ",
     "start": 317,
     "end": 320
    },
    {
     "index": 9,
     "prefix": "haz",
     "underscores": 4,
     "word": "hazard",
     "answer": "ard",
     "slots": 3,
     "marker": "haz_ _ _ _ ",
     "start": 328,
     "end": 339
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 地球构造、地质学"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "specifically",
     "reason": "adv.具体地（specific+-ally）"
    },
    {
     "word": "on",
     "reason": "prep.关于／在……上"
    },
    {
     "word": "geological",
     "reason": "adj.地质的（geology→geological）⚠ 片段列误为\"geolological\"、AB 显示\"geoloities\"，据语境校正为 geological"
    },
    {
     "word": "affect",
     "reason": "v.影响"
    },
    {
     "word": "activities",
     "reason": "n.复←activity（活动）"
    },
    {
     "word": "the",
     "reason": "art.定冠词"
    },
    {
     "word": "It",
     "reason": "pron.它"
    },
    {
     "word": "areas",
     "reason": "n.复←area（领域／区域）"
    },
    {
     "word": "as",
     "reason": "prep.作为"
    },
    {
     "word": "hazard",
     "reason": "n.危险（natural hazard 自然灾害）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 Environmental geology（主）focuses（谓）；修饰：on how geological processes affect human activities and the environment 介词短语作状语，内含 how 引导的宾语从句（geological processes（主）affect（谓）human activities and the environment（宾））。 - 句② 主干 It（主）encompasses（谓）areas（宾）；修饰：such as natural hazard assessment, resource management, and land-use planning 介词短语作后置定语，列举 areas。"
    }
   ],
   "tags": [
    "自然科学",
    "地质学",
    "地球构造"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "20260406A-2",
   "month": "2026年4月",
   "source": "20260406A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Medieval History",
   "discipline": "社会科学",
   "topic": "历史",
   "difficulty": "中等",
   "passage": "The Middle Ages was a period in Europe that spanned roughly between the fifth and fifteenth centuries. This e_ _ saw signi_ _ _ _ _ _ changes, mo_ _ notably t_ _ spread o_ Christianity a_ _ the establ_ _ _ _ _ _ _ of powe_ _ _ _ kingdoms. Des_ _ _ _ being of_ _ _ referred to as the “Dark Ages,” a name that suggests stagnation and decline, this period also witnessed remarkable achievements in art, architecture, and learning, laying the groundwork for Europe’s transition into the Renaissance and the age of discovery.",
   "blanks": [
    {
     "index": 0,
     "prefix": "e",
     "underscores": 2,
     "word": "era",
     "answer": "ra",
     "slots": 2,
     "marker": "e_ _ ",
     "start": 108,
     "end": 113
    },
    {
     "index": 1,
     "prefix": "signi",
     "underscores": 6,
     "word": "significant",
     "answer": "ficant",
     "slots": 6,
     "marker": "signi_ _ _ _ _ _ ",
     "start": 117,
     "end": 134
    },
    {
     "index": 2,
     "prefix": "mo",
     "underscores": 2,
     "word": "most",
     "answer": "st",
     "slots": 2,
     "marker": "mo_ _ ",
     "start": 143,
     "end": 149
    },
    {
     "index": 3,
     "prefix": "t",
     "underscores": 2,
     "word": "the",
     "answer": "he",
     "slots": 2,
     "marker": "t_ _ ",
     "start": 157,
     "end": 162
    },
    {
     "index": 4,
     "prefix": "o",
     "underscores": 1,
     "word": "of",
     "answer": "f",
     "slots": 1,
     "marker": "o_ ",
     "start": 169,
     "end": 172
    },
    {
     "index": 5,
     "prefix": "a",
     "underscores": 2,
     "word": "and",
     "answer": "nd",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 185,
     "end": 190
    },
    {
     "index": 6,
     "prefix": "establ",
     "underscores": 7,
     "word": "establishment",
     "answer": "ishment",
     "slots": 7,
     "marker": "establ_ _ _ _ _ _ _ ",
     "start": 194,
     "end": 214
    },
    {
     "index": 7,
     "prefix": "powe",
     "underscores": 4,
     "word": "powerful",
     "answer": "rful",
     "slots": 4,
     "marker": "powe_ _ _ _ ",
     "start": 217,
     "end": 229
    },
    {
     "index": 8,
     "prefix": "Des",
     "underscores": 4,
     "word": "Despite",
     "answer": "pite",
     "slots": 4,
     "marker": "Des_ _ _ _ ",
     "start": 239,
     "end": 250
    },
    {
     "index": 9,
     "prefix": "of",
     "underscores": 3,
     "word": "often",
     "answer": "ten",
     "slots": 3,
     "marker": "of_ _ _ ",
     "start": 256,
     "end": 264
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 文化史、历史"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "era",
     "reason": "n.时代"
    },
    {
     "word": "significant",
     "reason": "adj.重大的（signify→significant）"
    },
    {
     "word": "most",
     "reason": "adv.最（修饰 notably）"
    },
    {
     "word": "the",
     "reason": "art.定冠词"
    },
    {
     "word": "of",
     "reason": "prep.……的"
    },
    {
     "word": "and",
     "reason": "conj.和"
    },
    {
     "word": "establishment",
     "reason": "n.建立←establish（v.）"
    },
    {
     "word": "powerful",
     "reason": "adj.强大的（power+-ful）"
    },
    {
     "word": "Despite",
     "reason": "prep.尽管"
    },
    {
     "word": "often",
     "reason": "adv.经常"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 This era（主）saw（谓）changes（宾）；修饰：most notably the spread of Christianity and the establishment of powerful kingdoms 介词短语作状语，表强调内容（of Christianity / of powerful kingdoms 作后置定语）。 - 句② 主干 this period（主）witnessed（谓）achievements（宾）；修饰：Despite being often referred to as the \"Dark Ages\" 介词短语作状语，表让步；a name that suggests stagnation and decline 同位语，含 that 定语从句（name（主）suggests（谓）stagnation and decline（宾））。"
    }
   ],
   "tags": [
    "社会科学",
    "历史",
    "文化史"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "20260415A",
   "month": "2026年4月",
   "source": "20260415A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Photosynthesis",
   "discipline": "生命科学",
   "topic": "生物",
   "difficulty": "中等",
   "passage": "Photosynthesis is a vital process for life on Earth that also has potential to address modern energy challenges. Through the conversion of sunlight into chemical energy, plants pro_ _ _ _ oxygen a_ _ organic comp_ _ _ _ _ ,sustaining li_ _ and for_ _ _ _ the found_ _ _ _ _ of fo_ _ chains. Artif_ _ _ _ photosynthesis c_ _ theoretically pro_ _ _ _ clean and renewable energy, reducing our dependence on fossil fuels. By mimicking photosynthesis, scientists can produce carbon-neutral fuels, which can aid in developing sustainable energy solutions.",
   "blanks": [
    {
     "index": 0,
     "prefix": "pro",
     "underscores": 4,
     "word": "produce",
     "answer": "duce",
     "slots": 4,
     "marker": "pro_ _ _ _ ",
     "start": 177,
     "end": 188
    },
    {
     "index": 1,
     "prefix": "a",
     "underscores": 2,
     "word": "and",
     "answer": "nd",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 195,
     "end": 200
    },
    {
     "index": 2,
     "prefix": "comp",
     "underscores": 5,
     "word": "compounds",
     "answer": "ounds",
     "slots": 5,
     "marker": "comp_ _ _ _ _ ",
     "start": 208,
     "end": 222
    },
    {
     "index": 3,
     "prefix": "li",
     "underscores": 2,
     "word": "life",
     "answer": "fe",
     "slots": 2,
     "marker": "li_ _ ",
     "start": 234,
     "end": 240
    },
    {
     "index": 4,
     "prefix": "for",
     "underscores": 4,
     "word": "forming",
     "answer": "ming",
     "slots": 4,
     "marker": "for_ _ _ _ ",
     "start": 244,
     "end": 255
    },
    {
     "index": 5,
     "prefix": "found",
     "underscores": 5,
     "word": "foundation",
     "answer": "ation",
     "slots": 5,
     "marker": "found_ _ _ _ _ ",
     "start": 259,
     "end": 274
    },
    {
     "index": 6,
     "prefix": "fo",
     "underscores": 2,
     "word": "food",
     "answer": "od",
     "slots": 2,
     "marker": "fo_ _ ",
     "start": 277,
     "end": 283
    },
    {
     "index": 7,
     "prefix": "Artif",
     "underscores": 4,
     "word": "Artificial",
     "answer": "icial",
     "slots": 5,
     "marker": "Artif_ _ _ _ ",
     "start": 291,
     "end": 304
    },
    {
     "index": 8,
     "prefix": "c",
     "underscores": 2,
     "word": "can",
     "answer": "an",
     "slots": 2,
     "marker": "c_ _ ",
     "start": 319,
     "end": 324
    },
    {
     "index": 9,
     "prefix": "pro",
     "underscores": 4,
     "word": "provide",
     "answer": "vide",
     "slots": 4,
     "marker": "pro_ _ _ _ ",
     "start": 338,
     "end": 349
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 古生物、生物"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "produce",
     "reason": "v.生产"
    },
    {
     "word": "and",
     "reason": "conj.和"
    },
    {
     "word": "compounds",
     "reason": "n.复←compound（化合物）"
    },
    {
     "word": "life",
     "reason": "n.生命"
    },
    {
     "word": "forming",
     "reason": "v.现在分词←form（形成）"
    },
    {
     "word": "foundation",
     "reason": "n.基础←found（v.）"
    },
    {
     "word": "food",
     "reason": "n.食物"
    },
    {
     "word": "Artificial",
     "reason": "adj.人造的（art→artificial）⚠ AB 显示\"Artifcial\"缺\"i\"，据语境校正为 Artificial"
    },
    {
     "word": "can",
     "reason": "modal v.能"
    },
    {
     "word": "provide",
     "reason": "v.提供"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 plants（主）produce（谓）oxygen and organic compounds（宾）；修饰：Through the conversion of sunlight into chemical energy 介词短语作方式状语（of sunlight / into chemical energy 后置定语）；sustaining life and forming the foundation of food chains 现在分词短语作伴随／结果状语（of food chains 后置定语）。 - 句② 主干 Artificial photosynthesis（主）can provide（谓）energy（宾）；修饰：reducing our dependence on fossil fuels 现在分词作结果状语（on fossil fuels 后置定语）。"
    }
   ],
   "tags": [
    "生命科学",
    "生物",
    "古生物"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "20260506B",
   "month": "2026年5月",
   "source": "20260506B",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Atmospheric Prediction",
   "discipline": "自然科学",
   "topic": "环境科学",
   "difficulty": "困难",
   "passage": "The atmosphere is a dynamic and complex system, shaped by countless interacting variables such as solar radiation, air pressure, and moisture levels. Meteorologists use advanced mod_ _ to simu_ _ _ these intera_ _ _ _ _, but predi_ _ _ _ _ weather rem_ _ _ a chal_ _ _ _ _ due t_ the inher_ _ _ _ _ chaotic nat_ _ of atmos_ _ _ _ _ processes. Small changes in initial conditions can lead to vastly different outcomes, making long-term forecasts especially uncertain. Despite technological progress, the atmosphere's unpredictability continues to pose limits to accurate and consistent weather prediction.",
   "blanks": [
    {
     "index": 0,
     "prefix": "mod",
     "answer": "el",
     "word": "model",
     "slots": 2,
     "underscores": 2,
     "marker": "mod_ _ ",
     "start": 178,
     "end": 185
    },
    {
     "index": 1,
     "prefix": "simu",
     "answer": "late",
     "word": "simulate",
     "slots": 4,
     "underscores": 3,
     "marker": "simu_ _ _ ",
     "start": 188,
     "end": 198
    },
    {
     "index": 2,
     "prefix": "intera",
     "answer": "ction",
     "word": "interaction",
     "slots": 5,
     "underscores": 5,
     "marker": "intera_ _ _ _ _",
     "start": 204,
     "end": 219
    },
    {
     "index": 3,
     "prefix": "predi",
     "answer": "cting",
     "word": "predicting",
     "slots": 5,
     "underscores": 5,
     "marker": "predi_ _ _ _ _ ",
     "start": 225,
     "end": 240
    },
    {
     "index": 4,
     "prefix": "rem",
     "answer": "ains",
     "word": "remains",
     "slots": 4,
     "underscores": 3,
     "marker": "rem_ _ _ ",
     "start": 248,
     "end": 257
    },
    {
     "index": 5,
     "prefix": "chal",
     "answer": "lenge",
     "word": "challenge",
     "slots": 5,
     "underscores": 5,
     "marker": "chal_ _ _ _ _ ",
     "start": 259,
     "end": 273
    },
    {
     "index": 6,
     "prefix": "t",
     "answer": "o",
     "word": "to",
     "slots": 1,
     "underscores": 1,
     "marker": "t_ ",
     "start": 277,
     "end": 280
    },
    {
     "index": 7,
     "prefix": "inher",
     "answer": "ently",
     "word": "inherently",
     "slots": 5,
     "underscores": 5,
     "marker": "inher_ _ _ _ _ ",
     "start": 284,
     "end": 299
    },
    {
     "index": 8,
     "prefix": "nat",
     "answer": "ure",
     "word": "nature",
     "slots": 3,
     "underscores": 2,
     "marker": "nat_ _ ",
     "start": 307,
     "end": 314
    },
    {
     "index": 9,
     "prefix": "atmos",
     "answer": "pheric",
     "word": "atmospheric",
     "slots": 6,
     "underscores": 5,
     "marker": "atmos_ _ _ _ _ ",
     "start": 317,
     "end": 332
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 天气预测、气候气象、环境科学"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "model",
     "reason": "n.模型"
    },
    {
     "word": "simulate",
     "reason": "v.模拟⚠ AB 显示\"simuure\"，据语境校正为 simulate"
    },
    {
     "word": "interaction",
     "reason": "n.相互作用（interact→interaction）"
    },
    {
     "word": "predicting",
     "reason": "v.现在分词←predict（预测）"
    },
    {
     "word": "remains",
     "reason": "v.三单←remain（仍然／保持）"
    },
    {
     "word": "challenge",
     "reason": "n.挑战"
    },
    {
     "word": "to",
     "reason": "prep.到／表对象"
    },
    {
     "word": "inherently",
     "reason": "adv.内在地（inherent→inherently）"
    },
    {
     "word": "nature",
     "reason": "n.本性／自然"
    },
    {
     "word": "atmospheric",
     "reason": "adj.大气的（atmosphere→atmospheric）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 Meteorologists（主）use（谓）advanced model（宾）；修饰：to simulate these interactions 不定式作目的状语（interactions 宾）；but predicting weather remains a challenge 并列句（predicting weather 动名词主语，remains 系，challenge 表）；due to the inherently chaotic nature of atmospheric processes 介词短语作原因状语（of atmospheric processes 后置定语）。"
    }
   ],
   "tags": [
    "自然科学",
    "环境科学",
    "气候气象",
    "天气预测"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260506B-2",
   "month": "2026年5月",
   "source": "20260506B",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Music & Change",
   "discipline": "艺术",
   "topic": "音乐",
   "difficulty": "中等",
   "passage": "Music has long served as a powerful tool for cultural expression and social change. Comp_ _ _ _ _ and musi_ _ _ _ _ have us_ _ their wo_ _ to chal_ _ _ _ _ norms a_ _ reflect poli_ _ _ _ _ realities. Beethoven’s symph_ _ _ _ _, for exa_ _ _ _, echoed t_ _ revolutionary spirit of his time. In the twentieth century, protest songs became anthems for civil rights and anti-war movements, helping to mobilize public sentiment. These examples show how music can influence thought and action. Studying these intersections reveals music's lasting role in shaping cultural and ideological shifts throughout history.",
   "blanks": [
    {
     "index": 0,
     "prefix": "Comp",
     "answer": "osers",
     "word": "Composers",
     "slots": 5,
     "underscores": 5,
     "marker": "Comp_ _ _ _ _ ",
     "start": 84,
     "end": 98
    },
    {
     "index": 1,
     "prefix": "musi",
     "answer": "cians",
     "word": "musicians",
     "slots": 5,
     "underscores": 5,
     "marker": "musi_ _ _ _ _ ",
     "start": 102,
     "end": 116
    },
    {
     "index": 2,
     "prefix": "us",
     "answer": "ed",
     "word": "used",
     "slots": 2,
     "underscores": 2,
     "marker": "us_ _ ",
     "start": 121,
     "end": 127
    },
    {
     "index": 3,
     "prefix": "wo",
     "answer": "rk",
     "word": "work",
     "slots": 2,
     "underscores": 2,
     "marker": "wo_ _ ",
     "start": 133,
     "end": 139
    },
    {
     "index": 4,
     "prefix": "chal",
     "answer": "lenge",
     "word": "challenge",
     "slots": 5,
     "underscores": 5,
     "marker": "chal_ _ _ _ _ ",
     "start": 142,
     "end": 156
    },
    {
     "index": 5,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 162,
     "end": 167
    },
    {
     "index": 6,
     "prefix": "poli",
     "answer": "tical",
     "word": "political",
     "slots": 5,
     "underscores": 5,
     "marker": "poli_ _ _ _ _ ",
     "start": 175,
     "end": 189
    },
    {
     "index": 7,
     "prefix": "symph",
     "answer": "onies",
     "word": "symphonies",
     "slots": 5,
     "underscores": 5,
     "marker": "symph_ _ _ _ _",
     "start": 212,
     "end": 226
    },
    {
     "index": 8,
     "prefix": "exa",
     "answer": "mple",
     "word": "example",
     "slots": 4,
     "underscores": 4,
     "marker": "exa_ _ _ _",
     "start": 232,
     "end": 242
    },
    {
     "index": 9,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "underscores": 2,
     "marker": "t_ _ ",
     "start": 251,
     "end": 256
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 音乐的作用、音乐理论与音乐，聚焦音乐推动社会变革与文化表达。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "Composers",
     "reason": "n.复←Composer（作曲家）"
    },
    {
     "word": "musicians",
     "reason": "n.复←musician（音乐家）"
    },
    {
     "word": "used",
     "reason": "v.过去式←use（运用）"
    },
    {
     "word": "work",
     "reason": "n.作品／工作"
    },
    {
     "word": "challenge",
     "reason": "v.挑战"
    },
    {
     "word": "and",
     "reason": "conj.和"
    },
    {
     "word": "political",
     "reason": "adj.政治的（politics→political）"
    },
    {
     "word": "symphonies",
     "reason": "n.复←symphony（交响曲）"
    },
    {
     "word": "example",
     "reason": "n.例子"
    },
    {
     "word": "the",
     "reason": "art.定冠词"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 Composers and musicians（主）have used（谓）their work（宾）；修饰：to challenge norms and reflect political realities 不定式短语作目的状语（challenge / reflect 并列）。 - 句② 主干 Beethoven's symphonies（主）echoed（谓）the revolutionary spirit（宾）；修饰：for example 介词短语作举例状语；of his time 介词短语作后置定语（修饰 spirit）。"
    }
   ],
   "tags": [
    "艺术",
    "音乐",
    "音乐理论",
    "音乐的作用"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260510B",
   "month": "2026年5月",
   "source": "20260510B",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Extraterrestrial Life",
   "discipline": "自然科学",
   "topic": "天文学",
   "difficulty": "中等",
   "passage": "The discovery of water and volcanic activity on moons like Europa and Enceladus has sparked interest in the potential for extraterrestrial life. These moons, orbi_ _ _ _ he pla_ _ _ _ Jupiter a_ _ Saturn, ha_ _ ice-covered surf_ _ _ _ with oce_ _ _ lying under_ _ _ _ _. Volcanic acti_ _ _ _, in t_ _ form o_ hydrothermal vents, provides heat and nutrients, creating environments where microbial life could potentially thrive. Missions by spacecraft such as the Galileo and Cassini have gathered valuable data on these moons.",
   "blanks": [
    {
     "index": 0,
     "prefix": "orbi",
     "answer": "ting",
     "word": "orbiting",
     "slots": 4,
     "underscores": 4,
     "marker": "orbi_ _ _ _ ",
     "start": 158,
     "end": 170
    },
    {
     "index": 1,
     "prefix": "pla",
     "answer": "nets",
     "word": "planets",
     "slots": 4,
     "underscores": 4,
     "marker": "pla_ _ _ _ ",
     "start": 173,
     "end": 184
    },
    {
     "index": 2,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 192,
     "end": 197
    },
    {
     "index": 3,
     "prefix": "ha",
     "answer": "ve",
     "word": "have",
     "slots": 2,
     "underscores": 2,
     "marker": "ha_ _ ",
     "start": 205,
     "end": 211
    },
    {
     "index": 4,
     "prefix": "surf",
     "answer": "aces",
     "word": "surfaces",
     "slots": 4,
     "underscores": 4,
     "marker": "surf_ _ _ _ ",
     "start": 223,
     "end": 235
    },
    {
     "index": 5,
     "prefix": "oce",
     "answer": "ans",
     "word": "oceans",
     "slots": 3,
     "underscores": 3,
     "marker": "oce_ _ _ ",
     "start": 240,
     "end": 249
    },
    {
     "index": 6,
     "prefix": "under",
     "answer": "neath",
     "word": "underneath",
     "slots": 5,
     "underscores": 5,
     "marker": "under_ _ _ _ _",
     "start": 255,
     "end": 269
    },
    {
     "index": 7,
     "prefix": "acti",
     "answer": "vity",
     "word": "activity",
     "slots": 4,
     "underscores": 4,
     "marker": "acti_ _ _ _",
     "start": 280,
     "end": 291
    },
    {
     "index": 8,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "underscores": 2,
     "marker": "t_ _ ",
     "start": 296,
     "end": 301
    },
    {
     "index": 9,
     "prefix": "o",
     "answer": "f",
     "word": "of",
     "slots": 1,
     "underscores": 1,
     "marker": "o_ ",
     "start": 306,
     "end": 309
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 地外生命可能性、外星生命与天文学，探讨冰卫星上液态海洋与生命条件。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "orbiting",
     "reason": "v.现在分词←orbit（环绕运行）"
    },
    {
     "word": "planets",
     "reason": "n.复←planet（行星）"
    },
    {
     "word": "and",
     "reason": "conj.和"
    },
    {
     "word": "have",
     "reason": "v.有（原形）"
    },
    {
     "word": "surfaces",
     "reason": "n.复←surface（表面）"
    },
    {
     "word": "oceans",
     "reason": "n.复←ocean（海洋）"
    },
    {
     "word": "underneath",
     "reason": "prep./adv.在…之下 ⚠greedy\"underthem\"及AB\"under.them\"均错位，据语境为underneath"
    },
    {
     "word": "activity",
     "reason": "n.活动←active"
    },
    {
     "word": "the",
     "reason": "art.定冠词"
    },
    {
     "word": "of",
     "reason": "prep.…的"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 These moons（主）have（谓）ice-covered surfaces（宾）；修饰：orbiting the planets Jupiter and Saturn 现在分词短语作后置定语（修饰 moons）；with oceans lying underneath 介词短语（with 复合结构，oceans 后接 lying underneath 作补语）。 - 句② 主干 Volcanic activity（主）provides（谓）heat and nutrients（宾）；修饰：in the form of hydrothermal vents 介词短语作方式状语；creating environments where microbial life could thrive 现在分词短语作结果状语；where microbial life could thrive 定语从句（修饰 environments）。"
    }
   ],
   "tags": [
    "自然科学",
    "天文学",
    "外星生命",
    "地外生命可能性"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260511B",
   "month": "2026年5月",
   "source": "20260511B",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Industrial Cities",
   "discipline": "社会科学",
   "topic": "历史",
   "difficulty": "困难",
   "passage": "The advent of industrialization in the late eighteenth and nineteenth centuries dramatically reshaped city architecture across Europe and North America. As urban pop_ _ _ _ _ _ _ surged, cit_ _ _ expanded upw_ _ _ with t_ _ construction o_ multi-story buil_ _ _ _ _ and, even_ _ _ _ _, steel-framed skysc_ _ _ _ _ _ that def_ _ _ _ modern skyl_ _ _ _. These towering structures reflected new engineering capabilities and the growing demand for centralized workspaces. Within cities, transportation systems like streetcars made commuting more efficient, further fueling urban growth. This architectural transformation marked a shift toward dense, vertical living and working environments, emblematic of the industrial age.",
   "blanks": [
    {
     "index": 0,
     "prefix": "pop",
     "answer": "ulations",
     "word": "populations",
     "slots": 8,
     "underscores": 7,
     "marker": "pop_ _ _ _ _ _ _ ",
     "start": 162,
     "end": 179
    },
    {
     "index": 1,
     "prefix": "cit",
     "answer": "ies",
     "word": "cities",
     "slots": 3,
     "underscores": 3,
     "marker": "cit_ _ _ ",
     "start": 187,
     "end": 196
    },
    {
     "index": 2,
     "prefix": "upw",
     "answer": "ard",
     "word": "upward",
     "slots": 3,
     "underscores": 3,
     "marker": "upw_ _ _ ",
     "start": 205,
     "end": 214
    },
    {
     "index": 3,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "underscores": 2,
     "marker": "t_ _ ",
     "start": 219,
     "end": 224
    },
    {
     "index": 4,
     "prefix": "o",
     "answer": "f",
     "word": "of",
     "slots": 1,
     "underscores": 1,
     "marker": "o_ ",
     "start": 237,
     "end": 240
    },
    {
     "index": 5,
     "prefix": "buil",
     "answer": "dings",
     "word": "buildings",
     "slots": 5,
     "underscores": 5,
     "marker": "buil_ _ _ _ _ ",
     "start": 252,
     "end": 266
    },
    {
     "index": 6,
     "prefix": "even",
     "answer": "tually",
     "word": "eventually",
     "slots": 6,
     "underscores": 5,
     "marker": "even_ _ _ _ _",
     "start": 271,
     "end": 284
    },
    {
     "index": 7,
     "prefix": "skysc",
     "answer": "rapers",
     "word": "skyscrapers",
     "slots": 6,
     "underscores": 6,
     "marker": "skysc_ _ _ _ _ _ ",
     "start": 299,
     "end": 316
    },
    {
     "index": 8,
     "prefix": "def",
     "answer": "ined",
     "word": "defined",
     "slots": 4,
     "underscores": 4,
     "marker": "def_ _ _ _ ",
     "start": 321,
     "end": 332
    },
    {
     "index": 9,
     "prefix": "skyl",
     "answer": "ines",
     "word": "skylines",
     "slots": 4,
     "underscores": 4,
     "marker": "skyl_ _ _ _",
     "start": 339,
     "end": 350
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 工业化影响、技术史与历史，描述工业城市建筑向垂直化演变。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "populations",
     "reason": "n.复←population（人口）"
    },
    {
     "word": "cities",
     "reason": "n.复←city（城市）"
    },
    {
     "word": "upward",
     "reason": "adv.向上"
    },
    {
     "word": "the",
     "reason": "art.定冠词"
    },
    {
     "word": "of",
     "reason": "prep.…的"
    },
    {
     "word": "buildings",
     "reason": "n.复←building（建筑）"
    },
    {
     "word": "eventually",
     "reason": "adv.最终 ⚠greedy\"evenually\"及AB\"even,ually\"错位，应为eventually"
    },
    {
     "word": "skyscrapers",
     "reason": "n.复←skyscraper（摩天楼）"
    },
    {
     "word": "defined",
     "reason": "v.过去式←define（界定）"
    },
    {
     "word": "skylines",
     "reason": "n.复←skyline（天际线）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 cities（主）expanded（谓）upward（状）；修饰：As urban populations surged 状语从句（时间／原因，表背景）；with the construction of multi-story buildings and, eventually, steel-framed skyscrapers 介词短语（with 复合结构）作伴随／方式，修饰 expanded；that defined modern skylines 定语从句（修饰 skyscrapers）。"
    }
   ],
   "tags": [
    "社会科学",
    "历史",
    "技术史",
    "工业化影响"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260518A",
   "month": "2026年5月",
   "source": "20260518A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Philosophy",
   "discipline": "社会科学",
   "topic": "哲学",
   "difficulty": "中等",
   "passage": "Philosophy investigates the nature of reality, existence, and knowledge through critical thinking and reasoning. It expl____ fundamental ques_ _ _ _ _ about t_ _ human exper_ _ _ _ _, ethics, a_ _ the mi_ _. Philosophers dev_ _ _ _ theories t_ better under_ _ _ _ _ the wo_ _ _ and our place in it. This discipline challenges individuals to reflect deeply on their beliefs and assumptions, fostering intellectual growth and enlightenment. Contemporary philosophical branches include bioethics, philosophy of mind, and environmental philosophy, addressing modern challenges such as artificial intelligence consciousness, genetic engineering ethics, and humanity’s relationship with nature.",
   "blanks": [
    {
     "index": 0,
     "prefix": "expl",
     "answer": "ores",
     "word": "explores",
     "slots": 4,
     "underscores": 4,
     "marker": "expl____ ",
     "start": 116,
     "end": 125
    },
    {
     "index": 1,
     "prefix": "ques",
     "answer": "tions",
     "word": "questions",
     "slots": 5,
     "underscores": 5,
     "marker": "ques_ _ _ _ _ ",
     "start": 137,
     "end": 151
    },
    {
     "index": 2,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "underscores": 2,
     "marker": "t_ _ ",
     "start": 157,
     "end": 162
    },
    {
     "index": 3,
     "prefix": "exper",
     "answer": "ience",
     "word": "experience",
     "slots": 5,
     "underscores": 5,
     "marker": "exper_ _ _ _ _",
     "start": 168,
     "end": 182
    },
    {
     "index": 4,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 192,
     "end": 197
    },
    {
     "index": 5,
     "prefix": "mi",
     "answer": "nd",
     "word": "mind",
     "slots": 2,
     "underscores": 2,
     "marker": "mi_ _",
     "start": 201,
     "end": 206
    },
    {
     "index": 6,
     "prefix": "dev",
     "answer": "elop",
     "word": "develop",
     "slots": 4,
     "underscores": 4,
     "marker": "dev_ _ _ _ ",
     "start": 221,
     "end": 232
    },
    {
     "index": 7,
     "prefix": "t",
     "answer": "o",
     "word": "to",
     "slots": 1,
     "underscores": 1,
     "marker": "t_ ",
     "start": 241,
     "end": 244
    },
    {
     "index": 8,
     "prefix": "under",
     "answer": "stand",
     "word": "understand",
     "slots": 5,
     "underscores": 5,
     "marker": "under_ _ _ _ _ ",
     "start": 251,
     "end": 266
    },
    {
     "index": 9,
     "prefix": "wo",
     "answer": "rld",
     "word": "world",
     "slots": 3,
     "underscores": 3,
     "marker": "wo_ _ _ ",
     "start": 270,
     "end": 278
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 哲学的作用、哲学理论与哲学，说明哲学对实在、知识与思维的探究。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "explores",
     "reason": "v.三单←explore（探究）"
    },
    {
     "word": "questions",
     "reason": "n.复←question（问题）"
    },
    {
     "word": "the",
     "reason": "art.定冠词"
    },
    {
     "word": "experience",
     "reason": "n.经验／体验"
    },
    {
     "word": "and",
     "reason": "conj.和"
    },
    {
     "word": "mind",
     "reason": "n.心智"
    },
    {
     "word": "develop",
     "reason": "v.发展／提出"
    },
    {
     "word": "to",
     "reason": "prep.／不定式标记"
    },
    {
     "word": "understand",
     "reason": "v.理解"
    },
    {
     "word": "world",
     "reason": "n.世界"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 It（主，指 Philosophy）explores（谓）fundamental questions（宾）；修饰：about the human experience, ethics, and the mind 介词短语作后置定语（修饰 questions，ethics 与 the mind 同作 about 的宾语）。 - 句② 主干 Philosophers（主）develop（谓）theories（宾）；修饰：to better understand the world and our place in it 不定式短语作目的状语。"
    }
   ],
   "tags": [
    "社会科学",
    "哲学",
    "哲学理论",
    "哲学的作用"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260518A-2",
   "month": "2026年5月",
   "source": "20260518A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Great Barrier Reef",
   "discipline": "自然科学",
   "topic": "环境科学",
   "difficulty": "简单",
   "passage": "The Great Barrier Reef, located off the coast of Australia, is the world’s largest coral reef system. It ho_ _ _ a div_ _ _ _ array o_ marine li_ _, including fi_ _, mollusks, a_ _ sea tur_ _ _ _ . Coral re_ _ _ are bu_ _ _ by colo_ _ _ _ of tiny organisms called coral polyps that secrete calcium carbonate skeletons; these hard structures grow together to form massive reefs over time. The Great Barrier Reef ecosystem is crucial for biodiversity, providing habitat and food for numerous marine species. Climate change, pollution, and overfishing threaten the health of the Great Barrier Reef.",
   "blanks": [
    {
     "index": 0,
     "prefix": "ho",
     "answer": "sts",
     "word": "hosts",
     "slots": 3,
     "underscores": 3,
     "marker": "ho_ _ _ ",
     "start": 105,
     "end": 113
    },
    {
     "index": 1,
     "prefix": "div",
     "answer": "erse",
     "word": "diverse",
     "slots": 4,
     "underscores": 4,
     "marker": "div_ _ _ _ ",
     "start": 115,
     "end": 126
    },
    {
     "index": 2,
     "prefix": "o",
     "answer": "f",
     "word": "of",
     "slots": 1,
     "underscores": 1,
     "marker": "o_ ",
     "start": 132,
     "end": 135
    },
    {
     "index": 3,
     "prefix": "li",
     "answer": "fe",
     "word": "life",
     "slots": 2,
     "underscores": 2,
     "marker": "li_ _",
     "start": 142,
     "end": 147
    },
    {
     "index": 4,
     "prefix": "fi",
     "answer": "sh",
     "word": "fish",
     "slots": 2,
     "underscores": 2,
     "marker": "fi_ _",
     "start": 159,
     "end": 164
    },
    {
     "index": 5,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 176,
     "end": 181
    },
    {
     "index": 6,
     "prefix": "tur",
     "answer": "tles",
     "word": "turtles",
     "slots": 4,
     "underscores": 4,
     "marker": "tur_ _ _ _ ",
     "start": 185,
     "end": 196
    },
    {
     "index": 7,
     "prefix": "re",
     "answer": "efs",
     "word": "reefs",
     "slots": 3,
     "underscores": 3,
     "marker": "re_ _ _ ",
     "start": 204,
     "end": 212
    },
    {
     "index": 8,
     "prefix": "bu",
     "answer": "ilt",
     "word": "built",
     "slots": 3,
     "underscores": 3,
     "marker": "bu_ _ _ ",
     "start": 216,
     "end": 224
    },
    {
     "index": 9,
     "prefix": "colo",
     "answer": "nies",
     "word": "colonies",
     "slots": 4,
     "underscores": 4,
     "marker": "colo_ _ _ _ ",
     "start": 227,
     "end": 239
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 大堡礁、生态环保与环境科学，介绍大堡礁生态系统与生物多样性。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "hosts",
     "reason": "v.三单←host（承载／拥有）"
    },
    {
     "word": "diverse",
     "reason": "adj.多样的（diversity→diverse）"
    },
    {
     "word": "of",
     "reason": "prep.…的"
    },
    {
     "word": "life",
     "reason": "n.生命"
    },
    {
     "word": "fish",
     "reason": "n.鱼"
    },
    {
     "word": "and",
     "reason": "conj.和"
    },
    {
     "word": "turtles",
     "reason": "n.复←turtle（海龟）"
    },
    {
     "word": "reefs",
     "reason": "n.复←reef（礁）"
    },
    {
     "word": "built",
     "reason": "v.过去分词←build（建造）"
    },
    {
     "word": "colonies",
     "reason": "n.复←colony（群落）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 It（主，指 Reef）hosts（谓）a diverse array（宾）；修饰：of marine life 介词短语作后置定语（修饰 array）；including fish, mollusks, and sea turtles 分词／介词短语作后置定语（举例，修饰 life）。 - 句② 主干 Coral reefs（主）are built（谓，被动）；修饰：by colonies of tiny organisms 介词短语（by 引出执行者）；called coral polyps 过去分词短语作后置定语（修饰 organisms）；that secrete calcium carbonate skeletons 定语从句（修饰 polyps）。"
    }
   ],
   "tags": [
    "自然科学",
    "环境科学",
    "生态环保",
    "大堡礁"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260518B",
   "month": "2026年5月",
   "source": "20260518B",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Theater's Power",
   "discipline": "艺术",
   "topic": "戏剧",
   "difficulty": "中等",
   "passage": "Unlike literature or visual arts, theater engages audiences through live performances, creating an immediate emotional connection. The collab_ _ _ _ _ _ _ nature o_ theater fos_ _ _ _ a dyn_ _ _ _ exchange am_ _ _ professionals th_ _ spurs creat_ _ _ _ _. Theater c_ _ challenge precon_ _ _ _ _ _ notions a_ _ invite audiences to consider diverse perspectives. Its ephemeral quality—existing only in the moment of performance—heightens the impact, forcing both performers and viewers to engage with the present, ultimately transforming their understanding of human experiences.",
   "blanks": [
    {
     "index": 0,
     "prefix": "collab",
     "answer": "orative",
     "word": "collaborative",
     "slots": 7,
     "underscores": 7,
     "marker": "collab_ _ _ _ _ _ _ ",
     "start": 135,
     "end": 155
    },
    {
     "index": 1,
     "prefix": "o",
     "answer": "f",
     "word": "of",
     "slots": 1,
     "underscores": 1,
     "marker": "o_ ",
     "start": 162,
     "end": 165
    },
    {
     "index": 2,
     "prefix": "fos",
     "answer": "ters",
     "word": "fosters",
     "slots": 4,
     "underscores": 4,
     "marker": "fos_ _ _ _ ",
     "start": 173,
     "end": 184
    },
    {
     "index": 3,
     "prefix": "dyn",
     "answer": "amic",
     "word": "dynamic",
     "slots": 4,
     "underscores": 4,
     "marker": "dyn_ _ _ _ ",
     "start": 186,
     "end": 197
    },
    {
     "index": 4,
     "prefix": "am",
     "answer": "ong",
     "word": "among",
     "slots": 3,
     "underscores": 3,
     "marker": "am_ _ _ ",
     "start": 206,
     "end": 214
    },
    {
     "index": 5,
     "prefix": "th",
     "answer": "at",
     "word": "that",
     "slots": 2,
     "underscores": 2,
     "marker": "th_ _ ",
     "start": 228,
     "end": 234
    },
    {
     "index": 6,
     "prefix": "creat",
     "answer": "ivity",
     "word": "creativity",
     "slots": 5,
     "underscores": 5,
     "marker": "creat_ _ _ _ _",
     "start": 240,
     "end": 254
    },
    {
     "index": 7,
     "prefix": "c",
     "answer": "an",
     "word": "can",
     "slots": 2,
     "underscores": 2,
     "marker": "c_ _ ",
     "start": 264,
     "end": 269
    },
    {
     "index": 8,
     "prefix": "precon",
     "answer": "ceived",
     "word": "preconceived",
     "slots": 6,
     "underscores": 6,
     "marker": "precon_ _ _ _ _ _ ",
     "start": 279,
     "end": 297
    },
    {
     "index": 9,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 305,
     "end": 310
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 戏剧的作用、戏剧理论与戏剧，论述戏剧的协作性与创造性力量。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "collaborative",
     "reason": "adj.协作的←collaborate"
    },
    {
     "word": "of",
     "reason": "prep.…的"
    },
    {
     "word": "fosters",
     "reason": "v.三单←foster（促进）"
    },
    {
     "word": "dynamic",
     "reason": "adj.动态的／有活力的"
    },
    {
     "word": "among",
     "reason": "prep.在…之中"
    },
    {
     "word": "that",
     "reason": "conj.／关系代词"
    },
    {
     "word": "creativity",
     "reason": "n.创造力←create"
    },
    {
     "word": "can",
     "reason": "aux.能够"
    },
    {
     "word": "preconceived",
     "reason": "adj.先入为主的←preconceive"
    },
    {
     "word": "and",
     "reason": "conj.和"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 The collaborative nature of theater（主）fosters（谓）a dynamic exchange（宾）；修饰：among professionals 介词短语作后置定语（修饰 exchange）；that spurs creativity 定语从句（that 为关系代词，修饰 exchange）。 - 句② 主干 Theater（主）can challenge（谓）notions（宾）and invite（谓）audiences（宾）；修饰：to consider diverse perspectives 不定式短语作宾语补足语（修饰 invite）。"
    }
   ],
   "tags": [
    "艺术",
    "戏剧",
    "戏剧理论",
    "戏剧的作用"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260520A",
   "month": "2026年5月",
   "source": "20260520A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Geology",
   "discipline": "自然科学",
   "topic": "地质学",
   "difficulty": "中等",
   "passage": "Geology is the scientific study of our planet, including its composition, structure, and processes. Geolo_ _ _ _ _ _ analyze ro_ _ _, minerals, a_ _ the nat_ _ _ _ _ forces th_ _ change t_ _ outer la_ _ _ of Ea_ _ _ over ti_ _. This know_ _ _ _ _ helps scientists understand the planet's history and predict future changes. It is essential for natural resource management, hazard mitigation, and environmental protection. Advances in geologic research—such as satellite-based remote sensing, deep-Earth imaging, and isotopic dating—have greatly improved our ability to monitor earthquakes, track volcanic activity, and assess groundwater resources.",
   "blanks": [
    {
     "index": 0,
     "prefix": "Geolo",
     "answer": "gists",
     "word": "Geologists",
     "slots": 5,
     "underscores": 6,
     "marker": "Geolo_ _ _ _ _ _ ",
     "start": 100,
     "end": 117
    },
    {
     "index": 1,
     "prefix": "ro",
     "answer": "cks",
     "word": "rocks",
     "slots": 3,
     "underscores": 3,
     "marker": "ro_ _ _",
     "start": 125,
     "end": 132
    },
    {
     "index": 2,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 144,
     "end": 149
    },
    {
     "index": 3,
     "prefix": "nat",
     "answer": "ural",
     "word": "natural",
     "slots": 4,
     "underscores": 5,
     "marker": "nat_ _ _ _ _ ",
     "start": 153,
     "end": 166
    },
    {
     "index": 4,
     "prefix": "th",
     "answer": "at",
     "word": "that",
     "slots": 2,
     "underscores": 2,
     "marker": "th_ _ ",
     "start": 173,
     "end": 179
    },
    {
     "index": 5,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "underscores": 2,
     "marker": "t_ _ ",
     "start": 186,
     "end": 191
    },
    {
     "index": 6,
     "prefix": "la",
     "answer": "yer",
     "word": "layer",
     "slots": 3,
     "underscores": 3,
     "marker": "la_ _ _ ",
     "start": 197,
     "end": 205
    },
    {
     "index": 7,
     "prefix": "Ea",
     "answer": "rth",
     "word": "Earth",
     "slots": 3,
     "underscores": 3,
     "marker": "Ea_ _ _ ",
     "start": 208,
     "end": 216
    },
    {
     "index": 8,
     "prefix": "ti",
     "answer": "me",
     "word": "time",
     "slots": 2,
     "underscores": 2,
     "marker": "ti_ _",
     "start": 221,
     "end": 226
    },
    {
     "index": 9,
     "prefix": "know",
     "answer": "ledge",
     "word": "knowledge",
     "slots": 5,
     "underscores": 5,
     "marker": "know_ _ _ _ _ ",
     "start": 233,
     "end": 247
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 地质学的作用、地质学分类与地质学，说明地质学家研究地球的过程与力量。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "Geologists",
     "reason": "n.复←Geologist（地质学家）"
    },
    {
     "word": "rocks",
     "reason": "n.复←rock（岩石）"
    },
    {
     "word": "and",
     "reason": "conj.和"
    },
    {
     "word": "natural",
     "reason": "adj.自然的←nature ⚠greedy\"nattural\"及AB\"natgists\"错位，据语境应为natural"
    },
    {
     "word": "that",
     "reason": "conj.／关系代词"
    },
    {
     "word": "the",
     "reason": "art.定冠词"
    },
    {
     "word": "layer",
     "reason": "n.层"
    },
    {
     "word": "Earth",
     "reason": "n.地球"
    },
    {
     "word": "time",
     "reason": "n.时间"
    },
    {
     "word": "knowledge",
     "reason": "n.知识"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 Geologists（主）analyze（谓）rocks, minerals, and the natural forces（宾）；修饰：that change the outer layer of Earth over time 定语从句（that 为关系代词，修饰 forces）；of Earth 介词短语作后置定语（修饰 layer）；over time 介词短语作时间状语。"
    }
   ],
   "tags": [
    "自然科学",
    "地质学",
    "地质学分类",
    "地质学的作用"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260520A-2",
   "month": "2026年5月",
   "source": "20260520A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Musical Evolution",
   "discipline": "艺术",
   "topic": "音乐",
   "difficulty": "中等",
   "passage": "The transition from Baroque to Classical music reflected broader cultural shifts in eighteenth-century Europe. Baroque music, with its elaborate textures and emotional intensity, mirrored the grandeur of monarchies and the Church. As Enlightenment ide_ _ _ gained infl_ _ _ _ _, Classical music eme_ _ _ _ with sim_ _ _ _, less orn_ _ _ structures, bala_ _ _ _ phrasing, and a fo_ _ _ on rea_ _ _ and or_ _ _. Composers li_ _ Haydn and Mozart embraced simplicity and symmetry, aligning with the era’s intellectual and political movements that favored rational thought over divine authority. This stylistic shift marked a move toward accessibility and elegance in musical expression.",
   "blanks": [
    {
     "index": 0,
     "prefix": "ide",
     "answer": "als",
     "word": "ideals",
     "slots": 3,
     "underscores": 3,
     "marker": "ide_ _ _ ",
     "start": 248,
     "end": 257
    },
    {
     "index": 1,
     "prefix": "infl",
     "answer": "uence",
     "word": "influence",
     "slots": 5,
     "underscores": 5,
     "marker": "infl_ _ _ _ _",
     "start": 264,
     "end": 277
    },
    {
     "index": 2,
     "prefix": "eme",
     "answer": "rged",
     "word": "emerged",
     "slots": 4,
     "underscores": 4,
     "marker": "eme_ _ _ _ ",
     "start": 295,
     "end": 306
    },
    {
     "index": 3,
     "prefix": "sim",
     "answer": "pler",
     "word": "simpler",
     "slots": 4,
     "underscores": 4,
     "marker": "sim_ _ _ _",
     "start": 311,
     "end": 321
    },
    {
     "index": 4,
     "prefix": "orn",
     "answer": "ate",
     "word": "ornate",
     "slots": 3,
     "underscores": 3,
     "marker": "orn_ _ _ ",
     "start": 328,
     "end": 337
    },
    {
     "index": 5,
     "prefix": "bala",
     "answer": "nced",
     "word": "balanced",
     "slots": 4,
     "underscores": 4,
     "marker": "bala_ _ _ _ ",
     "start": 349,
     "end": 361
    },
    {
     "index": 6,
     "prefix": "fo",
     "answer": "cus",
     "word": "focus",
     "slots": 3,
     "underscores": 3,
     "marker": "fo_ _ _ ",
     "start": 377,
     "end": 385
    },
    {
     "index": 7,
     "prefix": "rea",
     "answer": "son",
     "word": "reason",
     "slots": 3,
     "underscores": 3,
     "marker": "rea_ _ _ ",
     "start": 388,
     "end": 397
    },
    {
     "index": 8,
     "prefix": "or",
     "answer": "der",
     "word": "order",
     "slots": 3,
     "underscores": 3,
     "marker": "or_ _ _",
     "start": 401,
     "end": 408
    },
    {
     "index": 9,
     "prefix": "li",
     "answer": "ke",
     "word": "like",
     "slots": 2,
     "underscores": 2,
     "marker": "li_ _ ",
     "start": 420,
     "end": 426
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 中世纪音乐变化、音乐派别与音乐，描述巴洛克到古典音乐的风格转变。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "ideals",
     "reason": "n.复←ideal（理想）"
    },
    {
     "word": "influence",
     "reason": "n.影响"
    },
    {
     "word": "emerged",
     "reason": "v.过去式←emerge（出现）"
    },
    {
     "word": "simpler",
     "reason": "adj.比较级←simple（更简洁的）"
    },
    {
     "word": "ornate",
     "reason": "adj.华丽的"
    },
    {
     "word": "balanced",
     "reason": "adj.平衡的←balance"
    },
    {
     "word": "focus",
     "reason": "n.焦点"
    },
    {
     "word": "reason",
     "reason": "n.理性"
    },
    {
     "word": "order",
     "reason": "n.秩序"
    },
    {
     "word": "like",
     "reason": "prep.像／例如"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 Classical music（主）emerged（谓）；修饰：As Enlightenment ideals gained influence 状语从句（时间／原因，as 引出）；with simpler, less ornate structures, balanced phrasing, and a focus on reason and order 介词短语（with 复合结构）作伴随／方式，修饰 emerged。 - 句② 主干 Composers（主）embraced（谓）simplicity and symmetry（宾）；修饰：like Haydn and Mozart 介词短语作后置定语（举例，修饰 Composers）。"
    }
   ],
   "tags": [
    "艺术",
    "音乐",
    "音乐派别",
    "中世纪音乐变化"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260601A",
   "month": "2026年6月",
   "source": "20260601A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Icy Moon Life",
   "discipline": "自然科学",
   "topic": "天文学",
   "difficulty": "中等",
   "passage": "In recent years, the search for extraterrestrial organisms has increasingly focused on water as an important clue. On Earth, water supports biological processes, and its detection on ice-covered moons such as Europa and Enceladus has attracted scien_ _ _ _ _ attention. Evid_ _ _ _ suggests th_ _ these i_ _ moons con_ _ _ _ oceans ke_ _ liquid b_ tidal hea_ _ _ _, a pro_ _ _ _ in wh_ _ _ gravitational forces generated by nearby planets produce internal warmth. This energy source may create environments comparable to Earth's deep-sea hydrothermal regions, where biological activity occurs without sunlight.",
   "blanks": [
    {
     "index": 0,
     "prefix": "scien",
     "answer": "tific",
     "word": "scientific",
     "slots": 5,
     "underscores": 5,
     "marker": "scien_ _ _ _ _ ",
     "start": 244,
     "end": 259
    },
    {
     "index": 1,
     "prefix": "Evid",
     "answer": "ence",
     "word": "Evidence",
     "slots": 4,
     "underscores": 4,
     "marker": "Evid_ _ _ _ ",
     "start": 270,
     "end": 282
    },
    {
     "index": 2,
     "prefix": "th",
     "answer": "at",
     "word": "that",
     "slots": 2,
     "underscores": 2,
     "marker": "th_ _ ",
     "start": 291,
     "end": 297
    },
    {
     "index": 3,
     "prefix": "i",
     "answer": "cy",
     "word": "icy",
     "slots": 2,
     "underscores": 2,
     "marker": "i_ _ ",
     "start": 303,
     "end": 308
    },
    {
     "index": 4,
     "prefix": "con",
     "answer": "tain",
     "word": "contain",
     "slots": 4,
     "underscores": 4,
     "marker": "con_ _ _ _ ",
     "start": 314,
     "end": 325
    },
    {
     "index": 5,
     "prefix": "ke",
     "answer": "pt",
     "word": "kept",
     "slots": 2,
     "underscores": 2,
     "marker": "ke_ _ ",
     "start": 332,
     "end": 338
    },
    {
     "index": 6,
     "prefix": "b",
     "answer": "y",
     "word": "by",
     "slots": 1,
     "underscores": 1,
     "marker": "b_ ",
     "start": 345,
     "end": 348
    },
    {
     "index": 7,
     "prefix": "hea",
     "answer": "ting",
     "word": "heating",
     "slots": 4,
     "underscores": 4,
     "marker": "hea_ _ _ _",
     "start": 354,
     "end": 364
    },
    {
     "index": 8,
     "prefix": "pro",
     "answer": "cess",
     "word": "process",
     "slots": 4,
     "underscores": 4,
     "marker": "pro_ _ _ _ ",
     "start": 368,
     "end": 379
    },
    {
     "index": 9,
     "prefix": "wh",
     "answer": "ich",
     "word": "which",
     "slots": 3,
     "underscores": 3,
     "marker": "wh_ _ _ ",
     "start": 382,
     "end": 390
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 地外生命可能性、外星生命与天文学，分析冰卫星海洋由潮汐热维持的机制。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "scientific",
     "reason": "adj.科学的←science"
    },
    {
     "word": "Evidence",
     "reason": "n.证据"
    },
    {
     "word": "that",
     "reason": "conj.／关系代词"
    },
    {
     "word": "icy",
     "reason": "adj.冰冷的"
    },
    {
     "word": "contain",
     "reason": "v.包含"
    },
    {
     "word": "kept",
     "reason": "v.过去式←keep（保持）"
    },
    {
     "word": "by",
     "reason": "prep.被／由"
    },
    {
     "word": "heating",
     "reason": "v.现在分词←heat（加热）"
    },
    {
     "word": "process",
     "reason": "n.过程"
    },
    {
     "word": "which",
     "reason": "pron.关系代词"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 Evidence（主）suggests（谓）that these icy moons contain oceans kept liquid by tidal heating（宾语从句作宾）；修饰：kept liquid by tidal heating 过去分词短语作后置定语（修饰 oceans，by 引出施动）；a process in which gravitational forces ... produce internal warmth 同位语（a process 指前述现象），in which 定语从句（which 为关系代词，修饰 process）；generated by nearby planets 过去分词短语作后置定语（修饰 forces）。"
    }
   ],
   "tags": [
    "自然科学",
    "天文学",
    "外星生命",
    "地外生命可能性"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260523A",
   "month": "2026年5月",
   "source": "20260523A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Urban Innovation",
   "discipline": "社会科学",
   "topic": "心理学",
   "difficulty": "困难",
   "passage": "Cities, with their diverse populations and large industrial and commercial sectors, offer unparalleled opportunities for innovation and cultural exchange. The concen_ _ _ _ _ _ _ of peo_ _ _ and reso_ _ _ _ _ in ur_ _ _ areas ma_ _ _ it eas_ _ _ for indiv_ _ _ _ _ _ and instit_ _ _ _ _ _ to con_ _ _ _, share id_ _ _, and work together, which in turn drives innovation and economic development. This constant interaction fuels creativity and problem-solving, making urban centers fertile ground for artistic expression, scientific breakthroughs, and the evolution of social norms.",
   "blanks": [
    {
     "index": 0,
     "prefix": "concen",
     "answer": "tration",
     "word": "concentration",
     "slots": 7,
     "underscores": 7,
     "marker": "concen_ _ _ _ _ _ _ ",
     "start": 159,
     "end": 179
    },
    {
     "index": 1,
     "prefix": "peo",
     "answer": "ple",
     "word": "people",
     "slots": 3,
     "underscores": 3,
     "marker": "peo_ _ _ ",
     "start": 182,
     "end": 191
    },
    {
     "index": 2,
     "prefix": "reso",
     "answer": "urces",
     "word": "resources",
     "slots": 5,
     "underscores": 5,
     "marker": "reso_ _ _ _ _ ",
     "start": 195,
     "end": 209
    },
    {
     "index": 3,
     "prefix": "ur",
     "answer": "ban",
     "word": "urban",
     "slots": 3,
     "underscores": 3,
     "marker": "ur_ _ _ ",
     "start": 212,
     "end": 220
    },
    {
     "index": 4,
     "prefix": "ma",
     "answer": "kes",
     "word": "makes",
     "slots": 3,
     "underscores": 3,
     "marker": "ma_ _ _ ",
     "start": 226,
     "end": 234
    },
    {
     "index": 5,
     "prefix": "eas",
     "answer": "ier",
     "word": "easier",
     "slots": 3,
     "underscores": 3,
     "marker": "eas_ _ _ ",
     "start": 237,
     "end": 246
    },
    {
     "index": 6,
     "prefix": "indiv",
     "answer": "iduals",
     "word": "individuals",
     "slots": 6,
     "underscores": 6,
     "marker": "indiv_ _ _ _ _ _ ",
     "start": 250,
     "end": 267
    },
    {
     "index": 7,
     "prefix": "instit",
     "answer": "utions",
     "word": "institutions",
     "slots": 6,
     "underscores": 6,
     "marker": "instit_ _ _ _ _ _ ",
     "start": 271,
     "end": 289
    },
    {
     "index": 8,
     "prefix": "con",
     "answer": "nect",
     "word": "connect",
     "slots": 4,
     "underscores": 4,
     "marker": "con_ _ _ _",
     "start": 292,
     "end": 302
    },
    {
     "index": 9,
     "prefix": "id",
     "answer": "eas",
     "word": "ideas",
     "slots": 3,
     "underscores": 3,
     "marker": "id_ _ _",
     "start": 310,
     "end": 317
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 发展心理学与心理学，阐述城市集聚人口与资源从而推动创新。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "concentration",
     "reason": "n.集中←concentrate"
    },
    {
     "word": "people",
     "reason": "n.人们"
    },
    {
     "word": "resources",
     "reason": "n.复←resource（资源）"
    },
    {
     "word": "urban",
     "reason": "adj.城市的"
    },
    {
     "word": "makes",
     "reason": "v.三单←make（使）"
    },
    {
     "word": "easier",
     "reason": "adj.比较级←easy（更容易的）"
    },
    {
     "word": "individuals",
     "reason": "n.复←individual（个人）"
    },
    {
     "word": "institutions",
     "reason": "n.复←institution（机构）"
    },
    {
     "word": "connect",
     "reason": "v.连接"
    },
    {
     "word": "ideas",
     "reason": "n.复←idea（想法）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 The concentration of people and resources in urban areas（主）makes（谓）it（形式宾语）easier（宾补）；修饰：for individuals and institutions to connect, share ideas, and work together 介词短语（for 引出逻辑主语）＋ 不定式短语作真正宾语；which in turn drives innovation and economic development 定语从句（which 指代前述情形）。"
    }
   ],
   "tags": [
    "社会科学",
    "心理学",
    "发展心理学"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260524A",
   "month": "2026年5月",
   "source": "20260524A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Comparative Advantage",
   "discipline": "社会科学",
   "topic": "政治经济",
   "difficulty": "困难",
   "passage": "In analyzing global trade dynamics, the principle of comparative advantage plays a foundational role. It suggests that nations should specialize in producing goods they can create most efficiently, thereby enhancing ove_ _ _ _ economic produc_ _ _ _ _ _ and fost_ _ _ _ _ international interde_ _ _ _ _ _ _ _. However, exce_ _ _ _ _ reliance o_ this mo_ _ _ can exp_ _ _ economies t_ significant ri_ _ _. Countries that concentrate on a limited range of exports may become vulnerable to market volatility, such as shifts in global demand or price fluctuations. While comparative advantage can stimulate growth, it must be strategically managed to ensure long-term economic sustainability.",
   "blanks": [
    {
     "index": 0,
     "prefix": "ove",
     "answer": "rall",
     "word": "overall",
     "slots": 4,
     "underscores": 4,
     "marker": "ove_ _ _ _ ",
     "start": 216,
     "end": 227
    },
    {
     "index": 1,
     "prefix": "produc",
     "answer": "tivity",
     "word": "productivity",
     "slots": 6,
     "underscores": 6,
     "marker": "produc_ _ _ _ _ _ ",
     "start": 236,
     "end": 254
    },
    {
     "index": 2,
     "prefix": "fost",
     "answer": "ering",
     "word": "fostering",
     "slots": 5,
     "underscores": 5,
     "marker": "fost_ _ _ _ _ ",
     "start": 258,
     "end": 272
    },
    {
     "index": 3,
     "prefix": "interde",
     "answer": "pendence",
     "word": "interdependence",
     "slots": 8,
     "underscores": 8,
     "marker": "interde_ _ _ _ _ _ _ _",
     "start": 286,
     "end": 308
    },
    {
     "index": 4,
     "prefix": "exce",
     "answer": "ssive",
     "word": "excessive",
     "slots": 5,
     "underscores": 5,
     "marker": "exce_ _ _ _ _ ",
     "start": 319,
     "end": 333
    },
    {
     "index": 5,
     "prefix": "o",
     "answer": "n",
     "word": "on",
     "slots": 1,
     "underscores": 1,
     "marker": "o_ ",
     "start": 342,
     "end": 345
    },
    {
     "index": 6,
     "prefix": "mo",
     "answer": "del",
     "word": "model",
     "slots": 3,
     "underscores": 3,
     "marker": "mo_ _ _ ",
     "start": 350,
     "end": 358
    },
    {
     "index": 7,
     "prefix": "exp",
     "answer": "ose",
     "word": "expose",
     "slots": 3,
     "underscores": 3,
     "marker": "exp_ _ _ ",
     "start": 362,
     "end": 371
    },
    {
     "index": 8,
     "prefix": "t",
     "answer": "o",
     "word": "to",
     "slots": 1,
     "underscores": 1,
     "marker": "t_ ",
     "start": 381,
     "end": 384
    },
    {
     "index": 9,
     "prefix": "ri",
     "answer": "sks",
     "word": "risks",
     "slots": 3,
     "underscores": 3,
     "marker": "ri_ _ _",
     "start": 396,
     "end": 403
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 比较优势、国际贸易、政治经济。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "overall",
     "reason": "adj.整体的／总的"
    },
    {
     "word": "productivity",
     "reason": "n.生产力←produce（生产）"
    },
    {
     "word": "fostering",
     "reason": "v.动名词←foster（促进）"
    },
    {
     "word": "interdependence",
     "reason": "n.相互依存（inter- + dependence）"
    },
    {
     "word": "excessive",
     "reason": "adj.过度的（excess + -ive）"
    },
    {
     "word": "on",
     "reason": "prep.关于／基于"
    },
    {
     "word": "model",
     "reason": "n.模式"
    },
    {
     "word": "expose",
     "reason": "v.暴露"
    },
    {
     "word": "to",
     "reason": "prep.向／到"
    },
    {
     "word": "risks",
     "reason": "n.复←risk（风险）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 nations（主）should specialize（谓）in producing goods（宾）；修饰：they can create most efficiently 定语从句修饰 goods；thereby enhancing overall economic productivity and fostering international interdependence 现在分词短语作结果状语。 - 句② 主干 reliance（主）can expose（谓）economies（宾）to significant risks（补）；修饰：on this model 介词短语作后置定语修饰 reliance；to significant risks 介词短语作状语（对象）。"
    }
   ],
   "tags": [
    "社会科学",
    "政治经济"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260524A-2",
   "month": "2026年5月",
   "source": "20260524A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Color & Pigment",
   "discipline": "艺术",
   "topic": "画",
   "difficulty": "中等",
   "passage": "In visual arts, the interplay between color and pigment is fundamental in shaping artistic expression. Pigments, the materials that give color to paint, are der_ _ _ _ from var_ _ _ _ sources, incl_ _ _ _ _ minerals, pla_ _ _, and synt_ _ _ _ _ compounds. Art_ _ _ _ selected mate_ _ _ _ _ based o_ their abi_ _ _ _ to con_ _ _ _ underlying layers (opacity) and resist fading over time. The transformation of pigments into vibrant colors involves the complex interaction of light with the pigment's molecular structure. This interaction determines the color's intensity and luminosity.",
   "blanks": [
    {
     "index": 0,
     "prefix": "der",
     "answer": "ived",
     "word": "derived",
     "slots": 4,
     "underscores": 4,
     "marker": "der_ _ _ _ ",
     "start": 157,
     "end": 168
    },
    {
     "index": 1,
     "prefix": "var",
     "answer": "ious",
     "word": "various",
     "slots": 4,
     "underscores": 4,
     "marker": "var_ _ _ _ ",
     "start": 173,
     "end": 184
    },
    {
     "index": 2,
     "prefix": "incl",
     "answer": "uding",
     "word": "including",
     "slots": 5,
     "underscores": 5,
     "marker": "incl_ _ _ _ _ ",
     "start": 193,
     "end": 207
    },
    {
     "index": 3,
     "prefix": "pla",
     "answer": "nts",
     "word": "plants",
     "slots": 3,
     "underscores": 3,
     "marker": "pla_ _ _",
     "start": 217,
     "end": 225
    },
    {
     "index": 4,
     "prefix": "synt",
     "answer": "hetic",
     "word": "synthetic",
     "slots": 5,
     "underscores": 5,
     "marker": "synt_ _ _ _ _ ",
     "start": 231,
     "end": 245
    },
    {
     "index": 5,
     "prefix": "Art",
     "answer": "ists",
     "word": "Artists",
     "slots": 4,
     "underscores": 4,
     "marker": "Art_ _ _ _ ",
     "start": 256,
     "end": 267
    },
    {
     "index": 6,
     "prefix": "mate",
     "answer": "rials",
     "word": "materials",
     "slots": 5,
     "underscores": 5,
     "marker": "mate_ _ _ _ _ ",
     "start": 276,
     "end": 290
    },
    {
     "index": 7,
     "prefix": "o",
     "answer": "n",
     "word": "on",
     "slots": 1,
     "underscores": 1,
     "marker": "o_ ",
     "start": 296,
     "end": 299
    },
    {
     "index": 8,
     "prefix": "abi",
     "answer": "lity",
     "word": "ability",
     "slots": 4,
     "underscores": 4,
     "marker": "abi_ _ _ _ ",
     "start": 305,
     "end": 316
    },
    {
     "index": 9,
     "prefix": "con",
     "answer": "ceal",
     "word": "conceal",
     "slots": 4,
     "underscores": 4,
     "marker": "con_ _ _ _ ",
     "start": 319,
     "end": 330
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 色彩与颜料、绘画艺术、视觉表达。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "derived",
     "reason": "v.过去分词←derive（源自）"
    },
    {
     "word": "various",
     "reason": "adj.各种的（vary→various）"
    },
    {
     "word": "including",
     "reason": "v.现在分词←include（包括）"
    },
    {
     "word": "plants",
     "reason": "n.复←plant（植物）"
    },
    {
     "word": "synthetic",
     "reason": "adj.合成的（synthesis→synthetic）"
    },
    {
     "word": "Artists",
     "reason": "n.复←Artist（艺术家）"
    },
    {
     "word": "materials",
     "reason": "n.复←material（材料）"
    },
    {
     "word": "on",
     "reason": "prep.基于／关于"
    },
    {
     "word": "ability",
     "reason": "n.能力（able→ability）"
    },
    {
     "word": "conceal",
     "reason": "v.隐藏"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 Pigments（主）are derived（谓）from various sources（状）；修饰：the materials that give color to paint 同位语解释 Pigments；that give color to paint 定语从句；including minerals, plants, and synthetic compounds 介词／分词短语作列举补充。 - 句② 主干 Artists（主）selected（谓）materials（宾）；修饰：based on their ability to conceal underlying layers 过去分词短语作状语；to conceal underlying layers 不定式作定语修饰 ability；and resist fading over time 并列不定式。"
    }
   ],
   "tags": [
    "艺术",
    "画",
    "绘画"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260601A-2",
   "month": "2026年6月",
   "source": "20260601A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "River Deltas",
   "discipline": "自然科学",
   "topic": "地质学",
   "difficulty": "中等",
   "passage": "The formation of river deltas is a geographical process that illustrates the dynamic interaction between land and water. When a river reaches a body of water, such as an oc_ _ _ or s_ _, it sl_ _ _ down, depos_ _ _ _ _ the mate_ _ _ _ _ it has car_ _ _ _ from upst_ _ _ _. Gradually, t_ _ sediments accum_ _ _ _ _ to cre_ _ _ deltas, which are fertile landforms that extend into the water. Deltas not only support diverse ecosystems but also provide rich agricultural land.",
   "blanks": [
    {
     "index": 0,
     "prefix": "oc",
     "answer": "ean",
     "word": "ocean",
     "slots": 3,
     "underscores": 3,
     "marker": "oc_ _ _ ",
     "start": 170,
     "end": 178
    },
    {
     "index": 1,
     "prefix": "s",
     "answer": "ea",
     "word": "sea",
     "slots": 2,
     "underscores": 2,
     "marker": "s_ _",
     "start": 181,
     "end": 185
    },
    {
     "index": 2,
     "prefix": "sl",
     "answer": "ows",
     "word": "slows",
     "slots": 3,
     "underscores": 3,
     "marker": "sl_ _ _ ",
     "start": 190,
     "end": 198
    },
    {
     "index": 3,
     "prefix": "depos",
     "answer": "iting",
     "word": "depositing",
     "slots": 5,
     "underscores": 5,
     "marker": "depos_ _ _ _ _ ",
     "start": 204,
     "end": 219
    },
    {
     "index": 4,
     "prefix": "mate",
     "answer": "rial",
     "word": "material",
     "slots": 4,
     "underscores": 5,
     "marker": "mate_ _ _ _ _ ",
     "start": 223,
     "end": 237
    },
    {
     "index": 5,
     "prefix": "car",
     "answer": "ried",
     "word": "carried",
     "slots": 4,
     "underscores": 4,
     "marker": "car_ _ _ _ ",
     "start": 244,
     "end": 255
    },
    {
     "index": 6,
     "prefix": "upst",
     "answer": "ream",
     "word": "upstream",
     "slots": 4,
     "underscores": 4,
     "marker": "upst_ _ _ _",
     "start": 260,
     "end": 271
    },
    {
     "index": 7,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "underscores": 2,
     "marker": "t_ _ ",
     "start": 284,
     "end": 289
    },
    {
     "index": 8,
     "prefix": "accum",
     "answer": "ulate",
     "word": "accumulate",
     "slots": 5,
     "underscores": 5,
     "marker": "accum_ _ _ _ _ ",
     "start": 299,
     "end": 314
    },
    {
     "index": 9,
     "prefix": "cre",
     "answer": "ate",
     "word": "create",
     "slots": 3,
     "underscores": 3,
     "marker": "cre_ _ _ ",
     "start": 317,
     "end": 326
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 河流三角洲、地形地貌、地质过程。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "ocean",
     "reason": "n.海洋"
    },
    {
     "word": "sea",
     "reason": "n.海洋"
    },
    {
     "word": "slows",
     "reason": "v.三单←slow（减缓）"
    },
    {
     "word": "depositing",
     "reason": "v.现在分词←deposit（沉积）⚠greedy 误为 deposting（缺 i），已据 AB 校正"
    },
    {
     "word": "material",
     "reason": "n.物质／沉积物"
    },
    {
     "word": "carried",
     "reason": "v.过去分词←carry（携带）"
    },
    {
     "word": "upstream",
     "reason": "adv.上游（up + stream）"
    },
    {
     "word": "the",
     "reason": "art.定冠词"
    },
    {
     "word": "accumulate",
     "reason": "v.累积"
    },
    {
     "word": "create",
     "reason": "v.创造"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 it（主）slows down（谓）；修饰：When a river reaches a body of water 状语从句；such as an ocean or sea 介词短语作同位语（列举）；depositing the material 现在分词短语作伴随状语；it has carried from upstream 定语从句修饰 material；from upstream 介词短语作状语。 - 句② 主干 sediments（主）accumulate（谓）to create deltas（状）；修饰：to create deltas 不定式短语作目的状语；which are fertile landforms 定语从句；that extend into the water 定语从句修饰 landforms。"
    }
   ],
   "tags": [
    "自然科学",
    "地质学",
    "地形地貌",
    "河流三角洲"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260601B",
   "month": "2026年6月",
   "source": "20260601B",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Theatrical Realism",
   "discipline": "艺术",
   "topic": "戏剧",
   "difficulty": "中等",
   "passage": "Realism in theater is a movement that emerged in the 19th century, aiming to portray everyday life with authenticity and truthfulness. It rejects exaggerated sentime_ _ _ _ _ _ _ and theat_ _ _ _ _ conventions, ins_ _ _ _ focusing o_ believable chara_ _ _ _ _, natural conver_ _ _ _ _ _, and sett_ _ _ _ that ref_ _ _ _ real soc_ _ _ environments. Rea_ _ _ _ plays often explore complex moral and social issues, emphasizing psychological depth and the influence of environment and circumstance on human behavior. Realism continues to influence contemporary theatre by encouraging honest, nuanced storytelling.",
   "blanks": [
    {
     "index": 0,
     "prefix": "sentime",
     "answer": "ntalism",
     "word": "sentimentalism",
     "slots": 7,
     "underscores": 7,
     "marker": "sentime_ _ _ _ _ _ _ ",
     "start": 158,
     "end": 179
    },
    {
     "index": 1,
     "prefix": "theat",
     "answer": "rical",
     "word": "theatrical",
     "slots": 5,
     "underscores": 5,
     "marker": "theat_ _ _ _ _ ",
     "start": 183,
     "end": 198
    },
    {
     "index": 2,
     "prefix": "ins",
     "answer": "tead",
     "word": "instead",
     "slots": 4,
     "underscores": 4,
     "marker": "ins_ _ _ _ ",
     "start": 211,
     "end": 222
    },
    {
     "index": 3,
     "prefix": "o",
     "answer": "n",
     "word": "on",
     "slots": 1,
     "underscores": 1,
     "marker": "o_ ",
     "start": 231,
     "end": 234
    },
    {
     "index": 4,
     "prefix": "chara",
     "answer": "cters",
     "word": "characters",
     "slots": 5,
     "underscores": 5,
     "marker": "chara_ _ _ _ _",
     "start": 245,
     "end": 259
    },
    {
     "index": 5,
     "prefix": "conver",
     "answer": "sations",
     "word": "conversations",
     "slots": 7,
     "underscores": 6,
     "marker": "conver_ _ _ _ _ _",
     "start": 269,
     "end": 286
    },
    {
     "index": 6,
     "prefix": "sett",
     "answer": "ings",
     "word": "settings",
     "slots": 4,
     "underscores": 4,
     "marker": "sett_ _ _ _ ",
     "start": 292,
     "end": 304
    },
    {
     "index": 7,
     "prefix": "ref",
     "answer": "lect",
     "word": "reflect",
     "slots": 4,
     "underscores": 4,
     "marker": "ref_ _ _ _ ",
     "start": 309,
     "end": 320
    },
    {
     "index": 8,
     "prefix": "soc",
     "answer": "ial",
     "word": "social",
     "slots": 3,
     "underscores": 3,
     "marker": "soc_ _ _ ",
     "start": 325,
     "end": 334
    },
    {
     "index": 9,
     "prefix": "Rea",
     "answer": "listic",
     "word": "Realistic",
     "slots": 6,
     "underscores": 4,
     "marker": "Rea_ _ _ _ ",
     "start": 348,
     "end": 359
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 戏剧写实主义、19世纪戏剧运动、真实叙事。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "sentimentalism",
     "reason": "n.感伤主义（sentimental + -ism）"
    },
    {
     "word": "theatrical",
     "reason": "adj.戏剧的（theatre→theatrical）"
    },
    {
     "word": "instead",
     "reason": "adv.反而／相反"
    },
    {
     "word": "on",
     "reason": "prep.聚焦于／关于"
    },
    {
     "word": "characters",
     "reason": "n.复←character（角色）"
    },
    {
     "word": "conversations",
     "reason": "n.复←conversation（对话）"
    },
    {
     "word": "settings",
     "reason": "n.复←setting（场景／布景）"
    },
    {
     "word": "reflect",
     "reason": "v.反映"
    },
    {
     "word": "social",
     "reason": "adj.社会的（society→social）"
    },
    {
     "word": "Realistic",
     "reason": "adj.写实主义的（real + -istic）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 It（主）rejects（谓）sentimentalism and theatrical conventions（宾）；修饰：instead focusing on believable characters, natural conversations, and settings 现在分词短语作方式状语；that reflect real social environments 定语从句修饰 settings。 - 句② 主干 plays（主）explore（谓）issues（宾）；修饰：emphasizing psychological depth and the influence 现在分词短语作状语；of environment and circumstance 介词短语作定语修饰 influence；on human behavior 介词短语作状语。"
    }
   ],
   "tags": [
    "艺术",
    "戏剧"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "未标注-71",
   "month": "2026年6月",
   "source": "来源未标注",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Urbanization",
   "discipline": "社会科学",
   "topic": "人类学",
   "difficulty": "困难",
   "passage": "The trajectory of modern history has been profoundly shaped by urbanization and industrialization, which redefined both physical landscapes and social structures. As industrial centers grew, rural populations increasingly abandoned agrarian lifestyles rooted in seasonal labor and subsistence farming for wage-based employment in cities. Urban enviro_ _ _ _ _ _ became hu_ _ of econ_ _ _ _ opportunity a_ _ social exch_ _ _ _, where indiv_ _ _ _ _ _ from var_ _ _ backgrounds inter_ _ _ _ _, shared id_ _ _ _ _ _ _ _, and contr_ _ _ _ _ _ to emerging cultural movements. This shift marked a fundamental transformation in how people lived, worked, and connected within society.",
   "blanks": [
    {
     "index": 0,
     "prefix": "enviro",
     "answer": "nments",
     "word": "environments",
     "slots": 6,
     "underscores": 6,
     "marker": "enviro_ _ _ _ _ _ ",
     "start": 344,
     "end": 362
    },
    {
     "index": 1,
     "prefix": "hu",
     "answer": "bs",
     "word": "hubs",
     "slots": 2,
     "underscores": 2,
     "marker": "hu_ _ ",
     "start": 369,
     "end": 375
    },
    {
     "index": 2,
     "prefix": "econ",
     "answer": "omic",
     "word": "economic",
     "slots": 4,
     "underscores": 4,
     "marker": "econ_ _ _ _ ",
     "start": 378,
     "end": 390
    },
    {
     "index": 3,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 402,
     "end": 407
    },
    {
     "index": 4,
     "prefix": "exch",
     "answer": "ange",
     "word": "exchange",
     "slots": 4,
     "underscores": 4,
     "marker": "exch_ _ _ _",
     "start": 414,
     "end": 425
    },
    {
     "index": 5,
     "prefix": "indiv",
     "answer": "iduals",
     "word": "individuals",
     "slots": 6,
     "underscores": 6,
     "marker": "indiv_ _ _ _ _ _ ",
     "start": 433,
     "end": 450
    },
    {
     "index": 6,
     "prefix": "var",
     "answer": "ied",
     "word": "varied",
     "slots": 3,
     "underscores": 3,
     "marker": "var_ _ _ ",
     "start": 455,
     "end": 464
    },
    {
     "index": 7,
     "prefix": "inter",
     "answer": "acted",
     "word": "interacted",
     "slots": 5,
     "underscores": 5,
     "marker": "inter_ _ _ _ _",
     "start": 476,
     "end": 490
    },
    {
     "index": 8,
     "prefix": "id",
     "answer": "entities",
     "word": "identities",
     "slots": 8,
     "underscores": 8,
     "marker": "id_ _ _ _ _ _ _ _",
     "start": 499,
     "end": 516
    },
    {
     "index": 9,
     "prefix": "contr",
     "answer": "ibuted",
     "word": "contributed",
     "slots": 6,
     "underscores": 6,
     "marker": "contr_ _ _ _ _ _ ",
     "start": 522,
     "end": 539
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 城市化、工业化、社会结构与文化变迁。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "environments",
     "reason": "n.复←environment（环境）"
    },
    {
     "word": "hubs",
     "reason": "n.复←hub（中心）"
    },
    {
     "word": "economic",
     "reason": "adj.经济的（economy→economic）"
    },
    {
     "word": "and",
     "reason": "conj.和"
    },
    {
     "word": "exchange",
     "reason": "n.交流"
    },
    {
     "word": "individuals",
     "reason": "n.复←individual（个体）"
    },
    {
     "word": "varied",
     "reason": "adj.多样的（vary→varied）"
    },
    {
     "word": "interacted",
     "reason": "v.过去式←interact（互动）"
    },
    {
     "word": "identities",
     "reason": "n.复←identity（身份）"
    },
    {
     "word": "contributed",
     "reason": "v.过去式←contribute（贡献）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 environments（主）became（谓）hubs（宾）；修饰：of economic opportunity and social exchange 介词短语作后置定语修饰 hubs；where individuals from varied backgrounds interacted, shared identities, and contributed 定语从句；from varied backgrounds 介词短语作状语；to emerging cultural movements 介词短语作状语。"
    }
   ],
   "tags": [
    "社会科学",
    "人类学"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "未标注-73",
   "month": "2026年6月",
   "source": "来源未标注",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Climate vs Weather",
   "discipline": "自然科学",
   "topic": "环境科学",
   "difficulty": "中等",
   "passage": "Climate change has become one of the most pressing current issues of our time, sparking global conversations. When discussing climate, it is often confused with weather. Climate specif_ _ _ _ _ refers t_ long-term tre_ _ _ in tempe_ _ _ _ _ _, humidity, wi_ _, and precip_ _ _ _ _ _ _ that def_ _ _ typical condi_ _ _ _ _ for a reg_ _ _—not ju_ _ the daily forecast. While weather can shift dramatically from one day to the next, the climate of an area describes what is normal over decades.\"",
   "blanks": [
    {
     "index": 0,
     "prefix": "specif",
     "answer": "ically",
     "word": "specifically",
     "slots": 6,
     "underscores": 5,
     "marker": "specif_ _ _ _ _ ",
     "start": 178,
     "end": 194
    },
    {
     "index": 1,
     "prefix": "t",
     "answer": "o",
     "word": "to",
     "slots": 1,
     "underscores": 1,
     "marker": "t_ ",
     "start": 201,
     "end": 204
    },
    {
     "index": 2,
     "prefix": "tre",
     "answer": "nds",
     "word": "trends",
     "slots": 3,
     "underscores": 3,
     "marker": "tre_ _ _ ",
     "start": 214,
     "end": 223
    },
    {
     "index": 3,
     "prefix": "tempe",
     "answer": "rature",
     "word": "temperature",
     "slots": 6,
     "underscores": 6,
     "marker": "tempe_ _ _ _ _ _",
     "start": 226,
     "end": 242
    },
    {
     "index": 4,
     "prefix": "wi",
     "answer": "nd",
     "word": "wind",
     "slots": 2,
     "underscores": 2,
     "marker": "wi_ _",
     "start": 254,
     "end": 259
    },
    {
     "index": 5,
     "prefix": "precip",
     "answer": "itation",
     "word": "precipitation",
     "slots": 7,
     "underscores": 7,
     "marker": "precip_ _ _ _ _ _ _ ",
     "start": 265,
     "end": 285
    },
    {
     "index": 6,
     "prefix": "def",
     "answer": "ine",
     "word": "define",
     "slots": 3,
     "underscores": 3,
     "marker": "def_ _ _ ",
     "start": 290,
     "end": 299
    },
    {
     "index": 7,
     "prefix": "condi",
     "answer": "tions",
     "word": "conditions",
     "slots": 5,
     "underscores": 5,
     "marker": "condi_ _ _ _ _ ",
     "start": 307,
     "end": 322
    },
    {
     "index": 8,
     "prefix": "reg",
     "answer": "ion",
     "word": "region",
     "slots": 3,
     "underscores": 3,
     "marker": "reg_ _ _",
     "start": 328,
     "end": 336
    },
    {
     "index": 9,
     "prefix": "ju",
     "answer": "st",
     "word": "just",
     "slots": 2,
     "underscores": 2,
     "marker": "ju_ _ ",
     "start": 341,
     "end": 347
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 气候与天气、气象科学、环境科学。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "specifically",
     "reason": "adv.具体地（specific→specifically）"
    },
    {
     "word": "to",
     "reason": "prep.向／到"
    },
    {
     "word": "trends",
     "reason": "n.复←trend（趋势）"
    },
    {
     "word": "temperature",
     "reason": "n.温度"
    },
    {
     "word": "wind",
     "reason": "n.风"
    },
    {
     "word": "precipitation",
     "reason": "n.降水←precipitate（降落）"
    },
    {
     "word": "define",
     "reason": "v.界定"
    },
    {
     "word": "conditions",
     "reason": "n.复←condition（条件）⚠greedy 误为 condiine，已据语境校正"
    },
    {
     "word": "region",
     "reason": "n.地区⚠greedy 误为 regine，已据语境校正"
    },
    {
     "word": "just",
     "reason": "adv.仅仅／只是⚠greedy 误为 ju（缺 st），已据语境校正"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 Climate（主）refers（谓）to long-term trends（宾）；修饰：to long-term trends in temperature, humidity, wind, and precipitation 介词短语作状语；in temperature, humidity, wind, and precipitation 介词短语作定语修饰 trends；that define typical conditions for a region 定语从句；for a region 介词短语作状语；not just the daily forecast 对比介词短语作状语。"
    }
   ],
   "tags": [
    "自然科学",
    "环境科学",
    "气候气象"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "未标注-74",
   "month": "2026年6月",
   "source": "来源未标注",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Oceanography",
   "discipline": "自然科学",
   "topic": "环境科学",
   "difficulty": "中等",
   "passage": "Oceanography is the study of the physical, chemical, and biological aspects of the ocean. This fi_ _ _ encompasses t_ _ exploration o_ ocean curr_ _ _ marine ecosy_ _ _ _ _, and geolo_ _ _ _ _ seabed struc_ _ _ _ _. Oceanographers u_ _ satellites a_ _ other adva_ _ _ _ technology to monitor and analyze ocean conditions. By tracking sea surface temperatures, currents, salinity, and other features, researchers contribute to our understanding of climate change. Their work is vital for sustaining ocean health and preserving marine biodiversity.",
   "blanks": [
    {
     "index": 0,
     "prefix": "fi",
     "answer": "eld",
     "word": "field",
     "slots": 3,
     "underscores": 3,
     "marker": "fi_ _ _ ",
     "start": 95,
     "end": 103
    },
    {
     "index": 1,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "underscores": 2,
     "marker": "t_ _ ",
     "start": 115,
     "end": 120
    },
    {
     "index": 2,
     "prefix": "o",
     "answer": "f",
     "word": "of",
     "slots": 1,
     "underscores": 1,
     "marker": "o_ ",
     "start": 132,
     "end": 135
    },
    {
     "index": 3,
     "prefix": "curr",
     "answer": "ents",
     "word": "currents",
     "slots": 4,
     "underscores": 3,
     "marker": "curr_ _ _ ",
     "start": 141,
     "end": 151
    },
    {
     "index": 4,
     "prefix": "ecosy",
     "answer": "stems",
     "word": "ecosystems",
     "slots": 5,
     "underscores": 5,
     "marker": "ecosy_ _ _ _ _",
     "start": 158,
     "end": 172
    },
    {
     "index": 5,
     "prefix": "geolo",
     "answer": "gical",
     "word": "geological",
     "slots": 5,
     "underscores": 5,
     "marker": "geolo_ _ _ _ _ ",
     "start": 178,
     "end": 193
    },
    {
     "index": 6,
     "prefix": "struc",
     "answer": "tures",
     "word": "structures",
     "slots": 5,
     "underscores": 5,
     "marker": "struc_ _ _ _ _",
     "start": 200,
     "end": 214
    },
    {
     "index": 7,
     "prefix": "u",
     "answer": "se",
     "word": "use",
     "slots": 2,
     "underscores": 2,
     "marker": "u_ _ ",
     "start": 231,
     "end": 236
    },
    {
     "index": 8,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 247,
     "end": 252
    },
    {
     "index": 9,
     "prefix": "adva",
     "answer": "nced",
     "word": "advanced",
     "slots": 4,
     "underscores": 4,
     "marker": "adva_ _ _ _ ",
     "start": 258,
     "end": 270
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 海洋学、海洋环境与生态系统、地球科学。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "field",
     "reason": "n.领域"
    },
    {
     "word": "the",
     "reason": "art.定冠词"
    },
    {
     "word": "of",
     "reason": "prep.…的"
    },
    {
     "word": "currents",
     "reason": "n.复←current（洋流）"
    },
    {
     "word": "ecosystems",
     "reason": "n.复←ecosystem（生态系统）"
    },
    {
     "word": "geological",
     "reason": "adj.地质的（geology→geological）"
    },
    {
     "word": "structures",
     "reason": "n.复←structure（结构）"
    },
    {
     "word": "use",
     "reason": "v.使用"
    },
    {
     "word": "and",
     "reason": "conj.和"
    },
    {
     "word": "advanced",
     "reason": "adj.先进的（advance→advanced）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 field（主）encompasses（谓）the exploration（宾）；修饰：of ocean currents, marine ecosystems, and geological seabed structures 介词短语作后置定语修饰 exploration。 - 句② 主干 Oceanographers（主）use（谓）satellites and other advanced technology（宾）；修饰：to monitor and analyze ocean conditions 不定式短语作目的状语。"
    }
   ],
   "tags": [
    "自然科学",
    "环境科学",
    "气候气象"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260603A",
   "month": "2026年6月",
   "source": "20260603A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "3D Printing",
   "discipline": "社会科学",
   "topic": "科技",
   "difficulty": "中等",
   "passage": "The advancement of 3D printing technology has revolutionized manufacturing by enabling precise, layer-by-layer fabrication of complex objects. 3D printing can use div_ _ _ _ materials su_ _ as plas_ _ _ _, metals, a_ _ ceramics. Engi_ _ _ _ _ are ab_ _ to fabr_ _ _ _ _ lightweight, str_ _ _ components wi_ _ internal struc_ _ _ _ _ that are impossible to produce using traditional methods. In the medical field, 3D printing facilitates the production of patient-specific implants and prosthetics tailored to anatomical data from imaging scans. 3D printing enhances design flexibility and production efficiency by streamlining prototyping and reducing material waste.",
   "blanks": [
    {
     "index": 0,
     "prefix": "div",
     "answer": "erse",
     "word": "diverse",
     "slots": 4,
     "underscores": 4,
     "marker": "div_ _ _ _ ",
     "start": 163,
     "end": 174
    },
    {
     "index": 1,
     "prefix": "su",
     "answer": "ch",
     "word": "such",
     "slots": 2,
     "underscores": 2,
     "marker": "su_ _ ",
     "start": 184,
     "end": 190
    },
    {
     "index": 2,
     "prefix": "plas",
     "answer": "tics",
     "word": "plastics",
     "slots": 4,
     "underscores": 4,
     "marker": "plas_ _ _ _",
     "start": 193,
     "end": 204
    },
    {
     "index": 3,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 214,
     "end": 219
    },
    {
     "index": 4,
     "prefix": "Engi",
     "answer": "neers",
     "word": "Engineers",
     "slots": 5,
     "underscores": 5,
     "marker": "Engi_ _ _ _ _ ",
     "start": 229,
     "end": 243
    },
    {
     "index": 5,
     "prefix": "ab",
     "answer": "le",
     "word": "able",
     "slots": 2,
     "underscores": 2,
     "marker": "ab_ _ ",
     "start": 247,
     "end": 253
    },
    {
     "index": 6,
     "prefix": "fabr",
     "answer": "icate",
     "word": "fabricate",
     "slots": 5,
     "underscores": 5,
     "marker": "fabr_ _ _ _ _ ",
     "start": 256,
     "end": 270
    },
    {
     "index": 7,
     "prefix": "str",
     "answer": "ong",
     "word": "strong",
     "slots": 3,
     "underscores": 3,
     "marker": "str_ _ _ ",
     "start": 283,
     "end": 292
    },
    {
     "index": 8,
     "prefix": "wi",
     "answer": "th",
     "word": "with",
     "slots": 2,
     "underscores": 2,
     "marker": "wi_ _ ",
     "start": 303,
     "end": 309
    },
    {
     "index": 9,
     "prefix": "struc",
     "answer": "tures",
     "word": "structures",
     "slots": 5,
     "underscores": 5,
     "marker": "struc_ _ _ _ _ ",
     "start": 318,
     "end": 333
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 3D打印技术、制造工艺、科技创新。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "diverse",
     "reason": "adj.多样的"
    },
    {
     "word": "such",
     "reason": "pron./adj.这样的"
    },
    {
     "word": "plastics",
     "reason": "n.复←plastic（塑料）"
    },
    {
     "word": "and",
     "reason": "conj.和"
    },
    {
     "word": "Engineers",
     "reason": "n.复←Engineer（工程师）"
    },
    {
     "word": "able",
     "reason": "adj.能够的"
    },
    {
     "word": "fabricate",
     "reason": "v.制造"
    },
    {
     "word": "strong",
     "reason": "adj.坚固的"
    },
    {
     "word": "with",
     "reason": "prep.具有／带有"
    },
    {
     "word": "structures",
     "reason": "n.复←structure（结构）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 3D printing（主）can use（谓）materials（宾）；修饰：such as plastics, metals, and ceramics 介词短语作列举（同位语）。 - 句② 主干 Engineers（主）are able（谓）to fabricate components（宾）；修饰：to fabricate lightweight, strong components 不定式短语作状语；with internal structures 介词短语作定语修饰 components；that are impossible to produce using traditional methods 定语从句修饰 structures；using traditional methods 现在分词作方式状语。"
    }
   ],
   "tags": [
    "社会科学",
    "科技",
    "3D打印",
    "3D打印技术进步"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260603A-2",
   "month": "2026年6月",
   "source": "20260603A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Ancient Indian History",
   "discipline": "社会科学",
   "topic": "历史",
   "difficulty": "中等",
   "passage": "Throughout history, the Indian subcontinent has been a cultural crossroads that has facilitated the exchange of ideas, goods, and philosophies between East and West. The Mauryan Empire, established in 322 BCE, represented one of the earliest fo_ _ _ of consol_ _ _ _ _ _ rule i_ the reg_ _ _ and la_ _ the ground_ _ _ _ for fut_ _ _ administrative mod_ _ _. A not_ _ _ _ achievement w_ _ the spread of Buddhism under the emperor Ashoka, who propagated its teachings beyond India into Central Asia. The Gupta period, often termed the golden age, witnessed advancements in sciences, mathematics, and art.",
   "blanks": [
    {
     "index": 0,
     "prefix": "fo",
     "answer": "rms",
     "word": "forms",
     "slots": 3,
     "underscores": 3,
     "marker": "fo_ _ _ ",
     "start": 242,
     "end": 250
    },
    {
     "index": 1,
     "prefix": "consol",
     "answer": "idated",
     "word": "consolidated",
     "slots": 6,
     "underscores": 6,
     "marker": "consol_ _ _ _ _ _ ",
     "start": 253,
     "end": 271
    },
    {
     "index": 2,
     "prefix": "i",
     "answer": "n",
     "word": "in",
     "slots": 1,
     "underscores": 1,
     "marker": "i_ ",
     "start": 276,
     "end": 279
    },
    {
     "index": 3,
     "prefix": "reg",
     "answer": "ion",
     "word": "region",
     "slots": 3,
     "underscores": 3,
     "marker": "reg_ _ _ ",
     "start": 283,
     "end": 292
    },
    {
     "index": 4,
     "prefix": "la",
     "answer": "id",
     "word": "laid",
     "slots": 2,
     "underscores": 2,
     "marker": "la_ _ ",
     "start": 296,
     "end": 302
    },
    {
     "index": 5,
     "prefix": "ground",
     "answer": "work",
     "word": "groundwork",
     "slots": 4,
     "underscores": 4,
     "marker": "ground_ _ _ _ ",
     "start": 306,
     "end": 320
    },
    {
     "index": 6,
     "prefix": "fut",
     "answer": "ure",
     "word": "future",
     "slots": 3,
     "underscores": 3,
     "marker": "fut_ _ _ ",
     "start": 324,
     "end": 333
    },
    {
     "index": 7,
     "prefix": "mod",
     "answer": "els",
     "word": "models",
     "slots": 3,
     "underscores": 3,
     "marker": "mod_ _ _",
     "start": 348,
     "end": 356
    },
    {
     "index": 8,
     "prefix": "not",
     "answer": "able",
     "word": "notable",
     "slots": 4,
     "underscores": 4,
     "marker": "not_ _ _ _ ",
     "start": 360,
     "end": 371
    },
    {
     "index": 9,
     "prefix": "w",
     "answer": "as",
     "word": "was",
     "slots": 2,
     "underscores": 2,
     "marker": "w_ _ ",
     "start": 383,
     "end": 388
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 古印度历史、南亚文明、帝国与行政发展。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "forms",
     "reason": "n.复←form（形式）"
    },
    {
     "word": "consolidated",
     "reason": "v.过去分词←consolidate（巩固）"
    },
    {
     "word": "in",
     "reason": "prep.在…中"
    },
    {
     "word": "region",
     "reason": "n.地区"
    },
    {
     "word": "laid",
     "reason": "v.过去式←lay（奠定）"
    },
    {
     "word": "groundwork",
     "reason": "n.基础（ground + work）"
    },
    {
     "word": "future",
     "reason": "adj.未来的"
    },
    {
     "word": "models",
     "reason": "n.复←model（模式）"
    },
    {
     "word": "notable",
     "reason": "adj.显著的"
    },
    {
     "word": "was",
     "reason": "v.过去式←be（是）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 The Mauryan Empire（主）represented（谓）forms（宾）and laid（谓）the groundwork（宾）；修饰：established in 322 BCE 过去分词短语作定语修饰 Empire；of consolidated rule 介词短语作定语修饰 forms；in the region 介词短语作状语；for future administrative models 介词短语作定语修饰 groundwork。 - 句② 主干 achievement（主）was（谓）the spread（宾）；修饰：of Buddhism 介词短语作定语；under the emperor Ashoka 介词短语作状语；who propagated its teachings beyond India into Central Asia 定语从句修饰 Ashoka；beyond India into Central Asia 介词短语作状语。"
    }
   ],
   "tags": [
    "社会科学",
    "历史",
    "南亚历史",
    "印度次大陆发展"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260607A OFFICIAL20260607B",
   "month": "2026年6月",
   "source": "20260607A OFFICIAL20260607B",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Color Psychology",
   "discipline": "社会科学",
   "topic": "心理学",
   "difficulty": "中等",
   "passage": "Throughout history, color and pigment have played a central role in art, shaping how we perceive and interpret visual experiences. Artists ha_ _ long under_ _ _ _ _ the emot_ _ _ _ _ and psycho_ _ _ _ _ _ _ power o_ color, util_ _ _ _ _ it t_ convey mo_ _, create emph_ _ _ _, and ev_ _ _ responses. For example, red often symbolizes passion, while blue can elicit calmness. These symbolic associations can vary across cultures and time periods, allowing artists to communicate deeper layers of meaning through their color choices.",
   "blanks": [
    {
     "index": 0,
     "prefix": "ha",
     "answer": "ve",
     "word": "have",
     "slots": 2,
     "underscores": 2,
     "marker": "ha_ _ ",
     "start": 139,
     "end": 145
    },
    {
     "index": 1,
     "prefix": "under",
     "answer": "stood",
     "word": "understood",
     "slots": 5,
     "underscores": 5,
     "marker": "under_ _ _ _ _ ",
     "start": 150,
     "end": 165
    },
    {
     "index": 2,
     "prefix": "emot",
     "answer": "ional",
     "word": "emotional",
     "slots": 5,
     "underscores": 5,
     "marker": "emot_ _ _ _ _ ",
     "start": 169,
     "end": 183
    },
    {
     "index": 3,
     "prefix": "psycho",
     "answer": "logical",
     "word": "psychological",
     "slots": 7,
     "underscores": 7,
     "marker": "psycho_ _ _ _ _ _ _ ",
     "start": 187,
     "end": 207
    },
    {
     "index": 4,
     "prefix": "o",
     "answer": "f",
     "word": "of",
     "slots": 1,
     "underscores": 1,
     "marker": "o_ ",
     "start": 213,
     "end": 216
    },
    {
     "index": 5,
     "prefix": "util",
     "answer": "izing",
     "word": "utilizing",
     "slots": 5,
     "underscores": 5,
     "marker": "util_ _ _ _ _ ",
     "start": 223,
     "end": 237
    },
    {
     "index": 6,
     "prefix": "t",
     "answer": "o",
     "word": "to",
     "slots": 1,
     "underscores": 1,
     "marker": "t_ ",
     "start": 240,
     "end": 243
    },
    {
     "index": 7,
     "prefix": "mo",
     "answer": "od",
     "word": "mood",
     "slots": 2,
     "underscores": 2,
     "marker": "mo_ _",
     "start": 250,
     "end": 255
    },
    {
     "index": 8,
     "prefix": "emph",
     "answer": "asis",
     "word": "emphasis",
     "slots": 4,
     "underscores": 4,
     "marker": "emph_ _ _ _",
     "start": 264,
     "end": 275
    },
    {
     "index": 9,
     "prefix": "ev",
     "answer": "oke",
     "word": "evoke",
     "slots": 3,
     "underscores": 3,
     "marker": "ev_ _ _ ",
     "start": 281,
     "end": 289
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 心理学、色彩心理学、视觉体验中的情绪与心理力量。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "have",
     "reason": "v.原形（有）"
    },
    {
     "word": "understood",
     "reason": "v.过去式←understand（理解）"
    },
    {
     "word": "emotional",
     "reason": "adj.情感的（emotion→emotional）"
    },
    {
     "word": "psychological",
     "reason": "adj.心理的（psychology→psychological）"
    },
    {
     "word": "of",
     "reason": "prep.…的"
    },
    {
     "word": "utilizing",
     "reason": "v.现在分词←utilize（利用）"
    },
    {
     "word": "to",
     "reason": "prep.／不定式标记（to convey）"
    },
    {
     "word": "mood",
     "reason": "n.情绪 ⚠greedy 误为\"mo\"，应为 mood（ab 中损坏为\"mo,od\"）"
    },
    {
     "word": "emphasis",
     "reason": "n.强调 ⚠greedy 误为\"emph\"，应为 emphasis（ab 中损坏为\"emph,asis\"）"
    },
    {
     "word": "evoke",
     "reason": "v.唤起"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句② 主干 Artists（主）have understood（谓）the emotional and psychological power of color（宾）；修饰：of color 介词短语作后置定语修饰 power；utilizing it to convey mood, create emphasis, and evoke responses 现在分词短语作方式／目的状语；to convey... 不定式短语作目的状语。"
    }
   ],
   "tags": [
    "社会科学",
    "心理学"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260607B",
   "month": "2026年6月",
   "source": "20260607B",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Insect Behavior",
   "discipline": "生命科学",
   "topic": "生物",
   "difficulty": "困难",
   "passage": "The study of insect behavior reveals complex survival strategies and social interactions across species. Honeybees, for inst_ _ _ _, perform a disti_ _ _ _ _ _ dance t_ convey spa_ _ _ _ information ab_ _ _ foraging si_ _ _. Ants exem_ _ _ _ _ extraordinary colle_ _ _ _ _ behavior, def_ _ _ _ by cooper_ _ _ _ _ efficiency. By analyzing these patterns, researchers can trace evolutionary pathways and adaptive strategies that support insect resilience across diverse ecosystems. These insights underscore the ecological sophistication embedded within even the smallest of organisms.",
   "blanks": [
    {
     "index": 0,
     "prefix": "inst",
     "answer": "ance",
     "word": "instance",
     "slots": 4,
     "underscores": 4,
     "marker": "inst_ _ _ _",
     "start": 120,
     "end": 131
    },
    {
     "index": 1,
     "prefix": "disti",
     "answer": "nctive",
     "word": "distinctive",
     "slots": 6,
     "underscores": 6,
     "marker": "disti_ _ _ _ _ _ ",
     "start": 143,
     "end": 160
    },
    {
     "index": 2,
     "prefix": "t",
     "answer": "o",
     "word": "to",
     "slots": 1,
     "underscores": 1,
     "marker": "t_ ",
     "start": 166,
     "end": 169
    },
    {
     "index": 3,
     "prefix": "spa",
     "answer": "tial",
     "word": "spatial",
     "slots": 4,
     "underscores": 4,
     "marker": "spa_ _ _ _ ",
     "start": 176,
     "end": 187
    },
    {
     "index": 4,
     "prefix": "ab",
     "answer": "out",
     "word": "about",
     "slots": 3,
     "underscores": 3,
     "marker": "ab_ _ _ ",
     "start": 199,
     "end": 207
    },
    {
     "index": 5,
     "prefix": "si",
     "answer": "tes",
     "word": "sites",
     "slots": 3,
     "underscores": 3,
     "marker": "si_ _ _",
     "start": 216,
     "end": 223
    },
    {
     "index": 6,
     "prefix": "exem",
     "answer": "plify",
     "word": "exemplify",
     "slots": 5,
     "underscores": 5,
     "marker": "exem_ _ _ _ _ ",
     "start": 230,
     "end": 244
    },
    {
     "index": 7,
     "prefix": "colle",
     "answer": "ctive",
     "word": "collective",
     "slots": 5,
     "underscores": 5,
     "marker": "colle_ _ _ _ _ ",
     "start": 258,
     "end": 273
    },
    {
     "index": 8,
     "prefix": "def",
     "answer": "ined",
     "word": "defined",
     "slots": 4,
     "underscores": 4,
     "marker": "def_ _ _ _ ",
     "start": 283,
     "end": 294
    },
    {
     "index": 9,
     "prefix": "cooper",
     "answer": "ative",
     "word": "cooperative",
     "slots": 5,
     "underscores": 5,
     "marker": "cooper_ _ _ _ _ ",
     "start": 297,
     "end": 313
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 昆虫行为、动物社会性、生物适应性（觅食与协作）。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "instance",
     "reason": "n.实例（for instance 固定搭配）"
    },
    {
     "word": "distinctive",
     "reason": "adj.独特的（distinct→distinctive）"
    },
    {
     "word": "to",
     "reason": "prep.／不定式标记（to convey）"
    },
    {
     "word": "spatial",
     "reason": "adj.空间的（space→spatial）"
    },
    {
     "word": "about",
     "reason": "prep.关于"
    },
    {
     "word": "sites",
     "reason": "n.复←site（地点；foraging sites 觅食地点）"
    },
    {
     "word": "exemplify",
     "reason": "v.例证（exemplify）"
    },
    {
     "word": "collective",
     "reason": "adj.集体的（collect→collective）"
    },
    {
     "word": "defined",
     "reason": "v.过去分词←define（界定）"
    },
    {
     "word": "cooperative",
     "reason": "adj.合作的（cooperate→cooperative）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句② 主干 Honeybees（主）perform（谓）a distinctive dance（宾）；修饰：to convey spatial information about foraging sites 不定式短语作目的状语；about foraging sites 介词短语作后置定语修饰 information。 - 句③ 主干 Ants（主）exemplify（谓）extraordinary collective behavior（宾）；修饰：defined by cooperative efficiency 过去分词短语作后置定语修饰 behavior。"
    }
   ],
   "tags": [
    "生命科学",
    "生物",
    "动物",
    "昆虫"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260607C",
   "month": "2026年6月",
   "source": "20260607C",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Attachment Theory",
   "discipline": "社会科学",
   "topic": "心理学",
   "difficulty": "中等",
   "passage": "Attachment theory, developed by John Bowlby, emphasizes the importance of early emotional bonds between infants and caregivers and how they impact future social and emotional outcomes. Secure attachment, formed through consistent and responsive caregiving, fos_ _ _ _ confidence, suppo_ _ _ _ _ relationships, a_ _ emotional regulation. Alternatively, inse_ _ _ _ attachment c_ _ lead t_ anxiety, po_ _ social ski_ _ _, and men_ _ _ health chall_ _ _ _ _. Researchers have linked attachment styles to long-term personality development and psychological outcomes. These insights inform parenting strategies and early interventions that promote better developmental paths.",
   "blanks": [
    {
     "index": 0,
     "prefix": "fos",
     "answer": "ters",
     "word": "fosters",
     "slots": 4,
     "underscores": 4,
     "marker": "fos_ _ _ _ ",
     "start": 257,
     "end": 268
    },
    {
     "index": 1,
     "prefix": "suppo",
     "answer": "rtive",
     "word": "supportive",
     "slots": 5,
     "underscores": 5,
     "marker": "suppo_ _ _ _ _ ",
     "start": 280,
     "end": 295
    },
    {
     "index": 2,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 310,
     "end": 315
    },
    {
     "index": 3,
     "prefix": "inse",
     "answer": "cure",
     "word": "insecure",
     "slots": 4,
     "underscores": 4,
     "marker": "inse_ _ _ _ ",
     "start": 352,
     "end": 364
    },
    {
     "index": 4,
     "prefix": "c",
     "answer": "an",
     "word": "can",
     "slots": 2,
     "underscores": 2,
     "marker": "c_ _ ",
     "start": 375,
     "end": 380
    },
    {
     "index": 5,
     "prefix": "t",
     "answer": "o",
     "word": "to",
     "slots": 1,
     "underscores": 1,
     "marker": "t_ ",
     "start": 385,
     "end": 388
    },
    {
     "index": 6,
     "prefix": "po",
     "answer": "or",
     "word": "poor",
     "slots": 2,
     "underscores": 2,
     "marker": "po_ _ ",
     "start": 397,
     "end": 403
    },
    {
     "index": 7,
     "prefix": "ski",
     "answer": "lls",
     "word": "skills",
     "slots": 3,
     "underscores": 3,
     "marker": "ski_ _ _",
     "start": 410,
     "end": 418
    },
    {
     "index": 8,
     "prefix": "men",
     "answer": "tal",
     "word": "mental",
     "slots": 3,
     "underscores": 3,
     "marker": "men_ _ _ ",
     "start": 424,
     "end": 433
    },
    {
     "index": 9,
     "prefix": "chall",
     "answer": "enges",
     "word": "challenges",
     "slots": 5,
     "underscores": 5,
     "marker": "chall_ _ _ _ _",
     "start": 440,
     "end": 454
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 依恋理论、发展心理学、心理学（早期情感联结与长期发展）。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "fosters",
     "reason": "v.三单←foster（培养）"
    },
    {
     "word": "supportive",
     "reason": "adj.支持的（support→supportive）"
    },
    {
     "word": "and",
     "reason": "conj.和"
    },
    {
     "word": "insecure",
     "reason": "adj.缺乏安全感的（in- + secure）"
    },
    {
     "word": "can",
     "reason": "v.情态（能）"
    },
    {
     "word": "to",
     "reason": "prep.／不定式（lead to）"
    },
    {
     "word": "poor",
     "reason": "adj.差的／贫乏的"
    },
    {
     "word": "skills",
     "reason": "n.复←skill（技能）"
    },
    {
     "word": "mental",
     "reason": "adj.心理的（mind→mental）"
    },
    {
     "word": "challenges",
     "reason": "n.复←challenge（挑战）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句② 主干 Secure attachment（主）fosters（谓）confidence, supportive relationships, and emotional regulation（宾）；修饰：formed through consistent and responsive caregiving 过去分词短语作后置定语修饰 attachment；through consistent and responsive caregiving 介词短语作状语。 - 句③ 主干 insecure attachment（主）can lead（谓）to anxiety, poor social skills, and mental health challenges（宾）；修饰：无显著长修饰成分。"
    }
   ],
   "tags": [
    "社会科学",
    "心理学",
    "发展心理学",
    "依恋理论"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260607C-2",
   "month": "2026年6月",
   "source": "20260607C",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Cave Paintings",
   "discipline": "艺术",
   "topic": "绘画",
   "difficulty": "简单",
   "passage": "Cave paintings represent some of the earliest forms of human expression and communication, often characterized by their intricate depictions and symbolic meanings. These artw_ _ _ _, primarily fo_ _ _ on t_ _ walls a_ _ ceilings o_ caves, of_ _ _ insights in_ _ the li_ _ _ and bel_ _ _ _ of prehi_ _ _ _ _ _ peoples. Such paintings frequently feature animals, hunting scenes, and abstract shapes, suggesting a complex understanding of the environment and possibly spiritual beliefs. The pigments were garnered from natural sources like minerals and charcoal.",
   "blanks": [
    {
     "index": 0,
     "prefix": "artw",
     "answer": "orks",
     "word": "artworks",
     "slots": 4,
     "underscores": 4,
     "marker": "artw_ _ _ _",
     "start": 170,
     "end": 181
    },
    {
     "index": 1,
     "prefix": "fo",
     "answer": "und",
     "word": "found",
     "slots": 3,
     "underscores": 3,
     "marker": "fo_ _ _ ",
     "start": 193,
     "end": 201
    },
    {
     "index": 2,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "underscores": 2,
     "marker": "t_ _ ",
     "start": 204,
     "end": 209
    },
    {
     "index": 3,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 215,
     "end": 220
    },
    {
     "index": 4,
     "prefix": "o",
     "answer": "f",
     "word": "of",
     "slots": 1,
     "underscores": 1,
     "marker": "o_ ",
     "start": 229,
     "end": 232
    },
    {
     "index": 5,
     "prefix": "of",
     "answer": "fer",
     "word": "offer",
     "slots": 3,
     "underscores": 3,
     "marker": "of_ _ _ ",
     "start": 239,
     "end": 247
    },
    {
     "index": 6,
     "prefix": "in",
     "answer": "to",
     "word": "into",
     "slots": 2,
     "underscores": 2,
     "marker": "in_ _ ",
     "start": 256,
     "end": 262
    },
    {
     "index": 7,
     "prefix": "li",
     "answer": "ves",
     "word": "lives",
     "slots": 3,
     "underscores": 3,
     "marker": "li_ _ _ ",
     "start": 266,
     "end": 274
    },
    {
     "index": 8,
     "prefix": "bel",
     "answer": "iefs",
     "word": "beliefs",
     "slots": 4,
     "underscores": 4,
     "marker": "bel_ _ _ _ ",
     "start": 278,
     "end": 289
    },
    {
     "index": 9,
     "prefix": "prehi",
     "answer": "storic",
     "word": "prehistoric",
     "slots": 6,
     "underscores": 6,
     "marker": "prehi_ _ _ _ _ _ ",
     "start": 292,
     "end": 309
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 洞穴壁画、史前绘画、绘画（史前人类的表达与信仰）。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "artworks",
     "reason": "n.复←artwork（艺术品）"
    },
    {
     "word": "found",
     "reason": "v.过去式←find（发现）"
    },
    {
     "word": "the",
     "reason": "art.定冠词"
    },
    {
     "word": "and",
     "reason": "conj.和"
    },
    {
     "word": "of",
     "reason": "prep.…的"
    },
    {
     "word": "offer",
     "reason": "v.提供"
    },
    {
     "word": "into",
     "reason": "prep.进入（insights into...）"
    },
    {
     "word": "lives",
     "reason": "n.复←life（生活）"
    },
    {
     "word": "beliefs",
     "reason": "n.复←belief（信仰）"
    },
    {
     "word": "prehistoric",
     "reason": "adj.史前的（pre- + historic）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句② 主干 These artworks（主）offer（谓）insights（宾）；修饰：primarily found on the walls and ceilings of caves 过去分词短语作后置定语修饰 artworks；into the lives and beliefs of prehistoric peoples 介词短语作后置定语修饰 insights；of prehistoric peoples 介词短语作后置定语修饰 beliefs。"
    }
   ],
   "tags": [
    "艺术",
    "绘画",
    "史前绘画",
    "洞穴壁画"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260609A",
   "month": "2026年6月",
   "source": "20260609A / 20260722C",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Homo Sapiens Origins",
   "discipline": "社会科学",
   "topic": "考古学",
   "difficulty": "中等",
   "passage": "Archaeological evidence suggests that Homo sapiens first emerged in Africa approximately 300,000 years ago. These early humans were adept at utilizing the resources available to them, including plants and animals that supplied materials for food, clothing, and shelter. They crafted to_ _ _ from st_ _ _ and ani_ _ _ bones a_ _ _ adapted th_ _ _ hunting techn_ _ _ _ _ to t_ _ changing clim_ _ _ and lands_ _ _ _ _, thus ensu_ _ _ _ their survival. As they migrated out of Africa, they encountered diverse environments, leading to cultural and technological innovations.",
   "blanks": [
    {
     "index": 0,
     "prefix": "to",
     "answer": "ols",
     "word": "tools",
     "slots": 3,
     "underscores": 3,
     "marker": "to_ _ _ ",
     "start": 283,
     "end": 291
    },
    {
     "index": 1,
     "prefix": "st",
     "answer": "one",
     "word": "stone",
     "slots": 3,
     "underscores": 3,
     "marker": "st_ _ _ ",
     "start": 296,
     "end": 304
    },
    {
     "index": 2,
     "prefix": "ani",
     "answer": "mal",
     "word": "animal",
     "slots": 3,
     "underscores": 3,
     "marker": "ani_ _ _ ",
     "start": 308,
     "end": 317
    },
    {
     "index": 3,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "underscores": 3,
     "marker": "a_ _ _ ",
     "start": 323,
     "end": 330
    },
    {
     "index": 4,
     "prefix": "th",
     "answer": "eir",
     "word": "their",
     "slots": 3,
     "underscores": 3,
     "marker": "th_ _ _ ",
     "start": 338,
     "end": 346
    },
    {
     "index": 5,
     "prefix": "techn",
     "answer": "iques",
     "word": "techniques",
     "slots": 5,
     "underscores": 5,
     "marker": "techn_ _ _ _ _ ",
     "start": 354,
     "end": 369
    },
    {
     "index": 6,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "underscores": 2,
     "marker": "t_ _ ",
     "start": 372,
     "end": 377
    },
    {
     "index": 7,
     "prefix": "clim",
     "answer": "ate",
     "word": "climate",
     "slots": 3,
     "underscores": 3,
     "marker": "clim_ _ _ ",
     "start": 386,
     "end": 396
    },
    {
     "index": 8,
     "prefix": "lands",
     "answer": "capes",
     "word": "landscapes",
     "slots": 5,
     "underscores": 5,
     "marker": "lands_ _ _ _ _",
     "start": 400,
     "end": 414
    },
    {
     "index": 9,
     "prefix": "ensu",
     "answer": "ring",
     "word": "ensuring",
     "slots": 4,
     "underscores": 4,
     "marker": "ensu_ _ _ _ ",
     "start": 421,
     "end": 433
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 智人、史前考古学、考古学（工具制作与环境适应）。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "tools",
     "reason": "n.复←tool（工具）"
    },
    {
     "word": "stone",
     "reason": "n.石头（材料）"
    },
    {
     "word": "animal",
     "reason": "adj.动物的（animal bones）"
    },
    {
     "word": "and",
     "reason": "conj.和"
    },
    {
     "word": "their",
     "reason": "pron.他们的"
    },
    {
     "word": "techniques",
     "reason": "n.复←technique（技术）"
    },
    {
     "word": "the",
     "reason": "art.定冠词"
    },
    {
     "word": "climate",
     "reason": "n.气候"
    },
    {
     "word": "landscapes",
     "reason": "n.复←landscape（景观／地貌）"
    },
    {
     "word": "ensuring",
     "reason": "v.现在分词←ensure（确保）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句③ 主干 They（主）crafted（谓）tools（宾）并 adapted（谓）their hunting techniques（宾）；修饰：from stone and animal bones 介词短语作材料状语；to the changing climate and landscapes 介词短语作状语（adapted to）；thus ensuring their survival 现在分词短语作结果状语。"
    }
   ],
   "tags": [
    "社会科学",
    "考古学",
    "史前考古学",
    "智人"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260610A",
   "month": "2026年4月",
   "source": "20260610A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Rocks & Strata",
   "discipline": "自然科学",
   "topic": "地质学",
   "difficulty": "简单",
   "passage": "Rock formations offer valuable insights into Earth's history. Sedimentary layers, for example, reveal past environments. By analyzing their composition and arrangement, geologists can determine if an area was once underwater or exposed. Over time, pressure trans_ _ _ _ _ sediments in_ _ solid ro_ _, preserving evid_ _ _ _ of anc_ _ _ _ climates a_ _ geological eve_ _ _. Fossils wit_ _ _ layers sh_ _ what orga_ _ _ _ _ once lived there. Through such studies, scientists reconstruct Earth's past and gain a deeper understanding of the dynamic processes that continue to shape the planet's surface.",
   "blanks": [
    {
     "index": 0,
     "prefix": "trans",
     "answer": "forms",
     "word": "transforms",
     "slots": 5,
     "underscores": 5,
     "marker": "trans_ _ _ _ _ ",
     "start": 257,
     "end": 272
    },
    {
     "index": 1,
     "prefix": "in",
     "answer": "to",
     "word": "into",
     "slots": 2,
     "underscores": 2,
     "marker": "in_ _ ",
     "start": 282,
     "end": 288
    },
    {
     "index": 2,
     "prefix": "ro",
     "answer": "ck",
     "word": "rock",
     "slots": 2,
     "underscores": 2,
     "marker": "ro_ _",
     "start": 294,
     "end": 299
    },
    {
     "index": 3,
     "prefix": "evid",
     "answer": "ence",
     "word": "evidence",
     "slots": 4,
     "underscores": 4,
     "marker": "evid_ _ _ _ ",
     "start": 312,
     "end": 324
    },
    {
     "index": 4,
     "prefix": "anc",
     "answer": "ient",
     "word": "ancient",
     "slots": 4,
     "underscores": 4,
     "marker": "anc_ _ _ _ ",
     "start": 327,
     "end": 338
    },
    {
     "index": 5,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 347,
     "end": 352
    },
    {
     "index": 6,
     "prefix": "eve",
     "answer": "nts",
     "word": "events",
     "slots": 3,
     "underscores": 3,
     "marker": "eve_ _ _",
     "start": 363,
     "end": 371
    },
    {
     "index": 7,
     "prefix": "wit",
     "answer": "hin",
     "word": "within",
     "slots": 3,
     "underscores": 3,
     "marker": "wit_ _ _ ",
     "start": 381,
     "end": 390
    },
    {
     "index": 8,
     "prefix": "sh",
     "answer": "ow",
     "word": "show",
     "slots": 2,
     "underscores": 2,
     "marker": "sh_ _ ",
     "start": 397,
     "end": 403
    },
    {
     "index": 9,
     "prefix": "orga",
     "answer": "nisms",
     "word": "organisms",
     "slots": 5,
     "underscores": 5,
     "marker": "orga_ _ _ _ _ ",
     "start": 408,
     "end": 422
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 岩石构造、岩石与矿物、地质学（地层记录与古环境）。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "transforms",
     "reason": "v.三单←transform（转变）"
    },
    {
     "word": "into",
     "reason": "prep.进入／成为"
    },
    {
     "word": "rock",
     "reason": "n.岩石"
    },
    {
     "word": "evidence",
     "reason": "n.证据"
    },
    {
     "word": "ancient",
     "reason": "adj.古代的"
    },
    {
     "word": "and",
     "reason": "conj.和"
    },
    {
     "word": "events",
     "reason": "n.复←event（事件；geological events）"
    },
    {
     "word": "within",
     "reason": "prep.在…之内"
    },
    {
     "word": "show",
     "reason": "v.显示"
    },
    {
     "word": "organisms",
     "reason": "n.复←organism（生物／有机体）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句④ 主干 pressure（主）transforms（谓）sediments（宾）；修饰：Over time 介词短语作时间状语；into solid rock 介词短语作状语（transforms...into）；preserving evidence of ancient climates and geological events 现在分词短语作伴随结果状语；of ancient climates and geological events 介词短语作后置定语修饰 evidence。 - 句⑤ 主干 Fossils（主）show（谓）what organisms once lived there（宾／宾语从句）；修饰：within layers 介词短语作后置定语修饰 Fossils。"
    }
   ],
   "tags": [
    "自然科学",
    "地质学",
    "岩石与矿物",
    "岩石构造"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260610A-2",
   "month": "2026年6月",
   "source": "20260610A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Urban Heat Island",
   "discipline": "自然科学",
   "topic": "环境科学",
   "difficulty": "困难",
   "passage": "The urban heat island (UHI) effect is a phenomenon where urban areas experience significantly higher temperatures than surrounding rural regions. This temperature diffe_ _ _ _ _ is cau_ _ _ by t_ _ abundance o_ heat-absorbing surf_ _ _ _, like conc_ _ _ _, which ret_ _ _ heat dur_ _ _ the d_ _ and rel_ _ _ _ _ it slowly at night. Reduced vegetation and limited airflow in cities further intensify the effect, leading to increased energy consumption, elevated air pollution, and health risks, especially during heatwaves. Green spaces in urban areas play a critical role in combatting the effects of UHI.",
   "blanks": [
    {
     "index": 0,
     "prefix": "diffe",
     "answer": "rence",
     "word": "difference",
     "slots": 5,
     "underscores": 5,
     "marker": "diffe_ _ _ _ _ ",
     "start": 163,
     "end": 178
    },
    {
     "index": 1,
     "prefix": "cau",
     "answer": "sed",
     "word": "caused",
     "slots": 3,
     "underscores": 3,
     "marker": "cau_ _ _ ",
     "start": 181,
     "end": 190
    },
    {
     "index": 2,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "underscores": 2,
     "marker": "t_ _ ",
     "start": 193,
     "end": 198
    },
    {
     "index": 3,
     "prefix": "o",
     "answer": "f",
     "word": "of",
     "slots": 1,
     "underscores": 1,
     "marker": "o_ ",
     "start": 208,
     "end": 211
    },
    {
     "index": 4,
     "prefix": "surf",
     "answer": "aces",
     "word": "surfaces",
     "slots": 4,
     "underscores": 4,
     "marker": "surf_ _ _ _",
     "start": 226,
     "end": 237
    },
    {
     "index": 5,
     "prefix": "conc",
     "answer": "rete",
     "word": "concrete",
     "slots": 4,
     "underscores": 4,
     "marker": "conc_ _ _ _",
     "start": 244,
     "end": 255
    },
    {
     "index": 6,
     "prefix": "ret",
     "answer": "ain",
     "word": "retain",
     "slots": 3,
     "underscores": 3,
     "marker": "ret_ _ _ ",
     "start": 263,
     "end": 272
    },
    {
     "index": 7,
     "prefix": "dur",
     "answer": "ing",
     "word": "during",
     "slots": 3,
     "underscores": 3,
     "marker": "dur_ _ _ ",
     "start": 277,
     "end": 286
    },
    {
     "index": 8,
     "prefix": "d",
     "answer": "ay",
     "word": "day",
     "slots": 2,
     "underscores": 2,
     "marker": "d_ _ ",
     "start": 290,
     "end": 295
    },
    {
     "index": 9,
     "prefix": "rel",
     "answer": "ease",
     "word": "release",
     "slots": 4,
     "underscores": 5,
     "marker": "rel_ _ _ _ _ ",
     "start": 299,
     "end": 312
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 城市热岛效应、生态环保、环境科学（城市地表与热量滞留）。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "difference",
     "reason": "n.差异"
    },
    {
     "word": "caused",
     "reason": "v.过去式←cause（引起）"
    },
    {
     "word": "the",
     "reason": "art.定冠词"
    },
    {
     "word": "of",
     "reason": "prep.…的"
    },
    {
     "word": "surfaces",
     "reason": "n.复←surface（表面）"
    },
    {
     "word": "concrete",
     "reason": "n.混凝土"
    },
    {
     "word": "retain",
     "reason": "v.保留"
    },
    {
     "word": "during",
     "reason": "prep.在…期间"
    },
    {
     "word": "day",
     "reason": "n.白天"
    },
    {
     "word": "release",
     "reason": "v.释放 ⚠greedy 误拼\"rellease\"（损坏），应为 release"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句② 主干 This temperature difference（主）is caused（谓）by the abundance of heat-absorbing surfaces（宾／状语）；修饰：by the abundance of heat-absorbing surfaces 介词短语作状语（被动施事）；of heat-absorbing surfaces 介词短语作后置定语修饰 abundance；like concrete 介词短语作举例定语；which retain heat during the day and release it slowly at night 定语从句修饰 surfaces；during the day 介词短语作时间状语。"
    }
   ],
   "tags": [
    "自然科学",
    "环境科学",
    "生态环保",
    "城市热岛效应"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260610A-3",
   "month": "2026年5月",
   "source": "20260610A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Medieval Exchange",
   "discipline": "社会科学",
   "topic": "哲学",
   "difficulty": "困难",
   "passage": "The cultural exchange between Europe and the Near East during the medieval period had a lasting impact on art, science, and philosophy. Although the Crusades were primarily military campaigns, they facil_ _ _ _ _ _ contact th_ _ led t_ the tran_ _ _ _ of id_ _ _ and techno_ _ _ _ _ _. European scho_ _ _ _ gained acc_ _ _ to adva_ _ _ _ knowledge i_ mathematics and medicine from the Islamic world, sparking renewed intellectual activity. Translations of Arabic philosophical texts, including commentaries on Aristotle, challenged existing doctrines and inspired new schools of thought. This exchange helped reshape European intellectual life.",
   "blanks": [
    {
     "index": 0,
     "prefix": "facil",
     "answer": "itated",
     "word": "facilitated",
     "slots": 6,
     "underscores": 6,
     "marker": "facil_ _ _ _ _ _ ",
     "start": 198,
     "end": 215
    },
    {
     "index": 1,
     "prefix": "th",
     "answer": "at",
     "word": "that",
     "slots": 2,
     "underscores": 2,
     "marker": "th_ _ ",
     "start": 223,
     "end": 229
    },
    {
     "index": 2,
     "prefix": "t",
     "answer": "o",
     "word": "to",
     "slots": 1,
     "underscores": 1,
     "marker": "t_ ",
     "start": 233,
     "end": 236
    },
    {
     "index": 3,
     "prefix": "tran",
     "answer": "sfer",
     "word": "transfer",
     "slots": 4,
     "underscores": 4,
     "marker": "tran_ _ _ _ ",
     "start": 240,
     "end": 252
    },
    {
     "index": 4,
     "prefix": "id",
     "answer": "eas",
     "word": "ideas",
     "slots": 3,
     "underscores": 3,
     "marker": "id_ _ _ ",
     "start": 255,
     "end": 263
    },
    {
     "index": 5,
     "prefix": "techno",
     "answer": "logies",
     "word": "technologies",
     "slots": 6,
     "underscores": 6,
     "marker": "techno_ _ _ _ _ _",
     "start": 267,
     "end": 284
    },
    {
     "index": 6,
     "prefix": "scho",
     "answer": "lars",
     "word": "scholars",
     "slots": 4,
     "underscores": 4,
     "marker": "scho_ _ _ _ ",
     "start": 295,
     "end": 307
    },
    {
     "index": 7,
     "prefix": "acc",
     "answer": "ess",
     "word": "access",
     "slots": 3,
     "underscores": 3,
     "marker": "acc_ _ _ ",
     "start": 314,
     "end": 323
    },
    {
     "index": 8,
     "prefix": "adva",
     "answer": "nced",
     "word": "advanced",
     "slots": 4,
     "underscores": 4,
     "marker": "adva_ _ _ _ ",
     "start": 326,
     "end": 338
    },
    {
     "index": 9,
     "prefix": "i",
     "answer": "n",
     "word": "in",
     "slots": 1,
     "underscores": 1,
     "marker": "i_ ",
     "start": 348,
     "end": 351
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 中世纪哲学历史、西方哲学、哲学（跨文明知识交流）。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "facilitated",
     "reason": "v.过去式←facilitate（促进）"
    },
    {
     "word": "that",
     "reason": "pron.／conj.引导定语从句"
    },
    {
     "word": "to",
     "reason": "prep.／不定式（to the transfer）"
    },
    {
     "word": "transfer",
     "reason": "n.转移"
    },
    {
     "word": "ideas",
     "reason": "n.复←idea（思想）"
    },
    {
     "word": "technologies",
     "reason": "n.复←technology（技术）"
    },
    {
     "word": "scholars",
     "reason": "n.复←scholar（学者）⚠greedy/AB 误拼\"schoolars\"，应为 scholars"
    },
    {
     "word": "access",
     "reason": "n.获取（gained access）"
    },
    {
     "word": "advanced",
     "reason": "adj.先进的（advance→advanced）⚠greedy/AB 误拼\"advaanced\"，应为 advanced"
    },
    {
     "word": "in",
     "reason": "prep.在…中"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句② 主干 they（主）facilitated（谓）contact（宾）；修饰：Although the Crusades were primarily military campaigns 状语从句（让步）；that led to the transfer of ideas and technologies 定语从句修饰 contact；to the transfer of ideas and technologies 介词短语作状语（led to）；of ideas and technologies 介词短语作后置定语修饰 transfer。 - 句③ 主干 European scholars（主）gained（谓）access（宾）；修饰：to advanced knowledge 介词短语作后置定语修饰 access；in mathematics and medicine 介词短语作后置定语修饰 knowledge；from the Islamic world 介词短语作来源状语；sparking renewed intellectual activity 现在分词短语作结果状语。"
    }
   ],
   "tags": [
    "社会科学",
    "哲学",
    "西方哲学",
    "中世纪哲学历史"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260614A",
   "month": "2026年6月",
   "source": "20260614A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Exoplanets",
   "discipline": "自然科学",
   "topic": "天文学",
   "difficulty": "中等",
   "passage": "The study of exoplanets has rapidly advanced in recent years, redefining our understanding of the universe.Astronomers have identified thousands of planets beyond our solar system, some of which orbit close enough to their stars to support life. These find_ _ _ _ challenge prev_ _ _ _ notions ab_ _ _ planetary form_ _ _ _ and t_ _ potential f_ _ life else_ _ _ _. The dete_ _ _ _ _ of atmos_ _ _ _ _ _ components li_ _ water vapor and methane in these distant worlds offers exciting clues about their suitability for hosting life.",
   "blanks": [
    {
     "index": 0,
     "prefix": "find",
     "answer": "ings",
     "word": "findings",
     "slots": 4,
     "underscores": 4,
     "marker": "find_ _ _ _ ",
     "start": 252,
     "end": 264
    },
    {
     "index": 1,
     "prefix": "prev",
     "answer": "ious",
     "word": "previous",
     "slots": 4,
     "underscores": 4,
     "marker": "prev_ _ _ _ ",
     "start": 274,
     "end": 286
    },
    {
     "index": 2,
     "prefix": "ab",
     "answer": "out",
     "word": "about",
     "slots": 3,
     "underscores": 3,
     "marker": "ab_ _ _ ",
     "start": 294,
     "end": 302
    },
    {
     "index": 3,
     "prefix": "form",
     "answer": "ation",
     "word": "formation",
     "slots": 5,
     "underscores": 4,
     "marker": "form_ _ _ _ ",
     "start": 312,
     "end": 324
    },
    {
     "index": 4,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "underscores": 2,
     "marker": "t_ _ ",
     "start": 328,
     "end": 333
    },
    {
     "index": 5,
     "prefix": "f",
     "answer": "or",
     "word": "for",
     "slots": 2,
     "underscores": 2,
     "marker": "f_ _ ",
     "start": 343,
     "end": 348
    },
    {
     "index": 6,
     "prefix": "else",
     "answer": "where",
     "word": "elsewhere",
     "slots": 5,
     "underscores": 4,
     "marker": "else_ _ _ _",
     "start": 353,
     "end": 364
    },
    {
     "index": 7,
     "prefix": "dete",
     "answer": "ction",
     "word": "detection",
     "slots": 5,
     "underscores": 5,
     "marker": "dete_ _ _ _ _ ",
     "start": 370,
     "end": 384
    },
    {
     "index": 8,
     "prefix": "atmos",
     "answer": "pheric",
     "word": "atmospheric",
     "slots": 6,
     "underscores": 6,
     "marker": "atmos_ _ _ _ _ _ ",
     "start": 387,
     "end": 404
    },
    {
     "index": 9,
     "prefix": "li",
     "answer": "ke",
     "word": "like",
     "slots": 2,
     "underscores": 2,
     "marker": "li_ _ ",
     "start": 415,
     "end": 421
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 系外行星研究、星系、天文学（行星形成与宜居性探测）。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "findings",
     "reason": "n.复←finding（发现）"
    },
    {
     "word": "previous",
     "reason": "adj.先前的（precede→previous）⚠greedy/AB 误拼\"prevvious\"，应为 previous"
    },
    {
     "word": "about",
     "reason": "prep.关于"
    },
    {
     "word": "formation",
     "reason": "n.形成（form→formation）"
    },
    {
     "word": "the",
     "reason": "art.定冠词"
    },
    {
     "word": "for",
     "reason": "prep.为了"
    },
    {
     "word": "elsewhere",
     "reason": "adv.在其他地方"
    },
    {
     "word": "detection",
     "reason": "n.探测（detect→detection）"
    },
    {
     "word": "atmospheric",
     "reason": "adj.大气的（atmosphere→atmospheric）⚠片段列/AB 错位（空前缀缺失），据语境校正为 atmospheric"
    },
    {
     "word": "like",
     "reason": "prep.像／诸如"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句③ 主干 These findings（主）challenge（谓）previous notions（宾）；修饰：about planetary formation and the potential for life elsewhere 介词短语作后置定语修饰 notions；for life elsewhere 介词短语作后置定语修饰 potential。 - 句④ 主干 The detection（主）offers（谓）exciting clues（宾）；修饰：of atmospheric components 介词短语作后置定语修饰 detection；like water vapor and methane 介词短语作举例定语；in these distant worlds 介词短语作后置定语修饰 components；about their suitability for hosting life 介词短语作后置定语修饰 clues；for hosting life 介词短语作后置定语修饰 suitability。"
    }
   ],
   "tags": [
    "自然科学",
    "天文学",
    "星系",
    "系外行星研究"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260614A-2",
   "month": "2026年6月",
   "source": "20260614A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "3D Printing",
   "discipline": "社会科学",
   "topic": "科技",
   "difficulty": "中等",
   "passage": "The advancement of 3D printing technology has revolutionized manufacturing by enabling precise, layer-by-layer fabrication of complex objects. 3D printing can use div_ _ _ _ atmaterials su_ as plas_ _ _ _ metals,a_ _ ceramics.Engi_ _ _ _ _ are ab_ _ to fabr_ _ _ _ _ lightweight, str_ _ _ components wi_ _ internal struc_ _ _ _ _ that are impossible to produce using traditional methods. In the medical field, 3D printing facilitates the production of patient-specific implants and prosthetics tailored to anatomical data from imaging scans. 3D printing enhances designflexibility and production efficiency by streamlining prototyping and reducing material waste.",
   "blanks": [
    {
     "index": 0,
     "prefix": "div",
     "answer": "erse",
     "word": "diverse",
     "slots": 4,
     "underscores": 4,
     "marker": "div_ _ _ _ ",
     "start": 163,
     "end": 174
    },
    {
     "index": 1,
     "prefix": "su",
     "answer": "ch",
     "word": "such",
     "slots": 2,
     "underscores": 1,
     "marker": "su_ ",
     "start": 186,
     "end": 190
    },
    {
     "index": 2,
     "prefix": "plas",
     "answer": "tics",
     "word": "plastics",
     "slots": 4,
     "underscores": 4,
     "marker": "plas_ _ _ _ ",
     "start": 193,
     "end": 205
    },
    {
     "index": 3,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 212,
     "end": 217
    },
    {
     "index": 4,
     "prefix": "Engi",
     "answer": "neers",
     "word": "Engineers",
     "slots": 5,
     "underscores": 5,
     "marker": "Engi_ _ _ _ _ ",
     "start": 226,
     "end": 240
    },
    {
     "index": 5,
     "prefix": "ab",
     "answer": "le",
     "word": "able",
     "slots": 2,
     "underscores": 2,
     "marker": "ab_ _ ",
     "start": 244,
     "end": 250
    },
    {
     "index": 6,
     "prefix": "fabr",
     "answer": "icate",
     "word": "fabricate",
     "slots": 5,
     "underscores": 5,
     "marker": "fabr_ _ _ _ _ ",
     "start": 253,
     "end": 267
    },
    {
     "index": 7,
     "prefix": "str",
     "answer": "ong",
     "word": "strong",
     "slots": 3,
     "underscores": 3,
     "marker": "str_ _ _ ",
     "start": 280,
     "end": 289
    },
    {
     "index": 8,
     "prefix": "wi",
     "answer": "th",
     "word": "with",
     "slots": 2,
     "underscores": 2,
     "marker": "wi_ _ ",
     "start": 300,
     "end": 306
    },
    {
     "index": 9,
     "prefix": "struc",
     "answer": "tures",
     "word": "structures",
     "slots": 5,
     "underscores": 5,
     "marker": "struc_ _ _ _ _ ",
     "start": 315,
     "end": 330
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 3D打印技术进步、3D打印、科技（增材制造与材料）。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "diverse",
     "reason": "adj.多样的（diverse）"
    },
    {
     "word": "such",
     "reason": "adj.这样的（such as）"
    },
    {
     "word": "plastics",
     "reason": "n.复←plastic（塑料）"
    },
    {
     "word": "and",
     "reason": "conj.和 ⚠片段列缺前缀，据语境校正为 and"
    },
    {
     "word": "engineers",
     "reason": "n.复←engineer（工程师）⚠片段列缺前缀，据语境校正为 engineers"
    },
    {
     "word": "able",
     "reason": "adj.能够的（be able to）"
    },
    {
     "word": "fabricate",
     "reason": "v.制造"
    },
    {
     "word": "strong",
     "reason": "adj.坚固的／强的 ⚠片段列缺前缀（str_），据语境校正为 strong"
    },
    {
     "word": "with",
     "reason": "prep.具有／用"
    },
    {
     "word": "structures",
     "reason": "n.复←structure（结构）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句② 主干 3D printing（主）can use（谓）diverse materials（宾）；修饰：such as plastics and ceramics 介词短语作举例定语修饰 materials。 - 句③ 主干 Engineers（主）are able to fabricate（谓）lightweight, strong components（宾）；修饰：with internal structures 介词短语作后置定语修饰 components；that are impossible to produce using traditional methods 定语从句修饰 structures；using traditional methods 现在分词短语作方式状语。"
    }
   ],
   "tags": [
    "社会科学",
    "科技",
    "3D打印",
    "3D打印技术进步"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260614A-3",
   "month": "2026年6月",
   "source": "20260614A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Artisan Craft",
   "discipline": "艺术",
   "topic": "工艺",
   "difficulty": "中等",
   "passage": "Craftsmanship has undergone a profound transformation over the centuries, shifing from a demonstration of manualskil to an expression of artistic vision and communal identity. In medieval Europe, skilled makers-known as artisans-were highly valued not only for their tech_ _ _ _ _ expertise b_ _ also f_ _ their abi_ _ _ _ to inf_ _ _ their crea_ __ __ __ _ with mea_ _ _ _ and repr_ _ _ __ _ deeper spir_ __ __ __ _ or cult_ _ _ _ themes. The intricate details in woodwork, textiles, and pottery served as a testament to the craftsman's mastery and the motifs prevalent during that era .",
   "blanks": [
    {
     "index": 0,
     "prefix": "tech",
     "underscores": 5,
     "word": "technical",
     "answer": "nical",
     "slots": 5,
     "marker": "tech_ _ _ _ _ ",
     "start": 267,
     "end": 281
    },
    {
     "index": 1,
     "prefix": "b",
     "underscores": 2,
     "word": "but",
     "answer": "ut",
     "slots": 2,
     "marker": "b_ _ ",
     "start": 291,
     "end": 296
    },
    {
     "index": 2,
     "prefix": "f",
     "underscores": 2,
     "word": "for",
     "answer": "or",
     "slots": 2,
     "marker": "f_ _ ",
     "start": 301,
     "end": 306
    },
    {
     "index": 3,
     "prefix": "abi",
     "underscores": 4,
     "word": "ability",
     "answer": "lity",
     "slots": 4,
     "marker": "abi_ _ _ _ ",
     "start": 312,
     "end": 323
    },
    {
     "index": 4,
     "prefix": "inf",
     "underscores": 3,
     "word": "infuse",
     "answer": "use",
     "slots": 3,
     "marker": "inf_ _ _ ",
     "start": 326,
     "end": 335
    },
    {
     "index": 5,
     "prefix": "crea",
     "underscores": 8,
     "word": "creations",
     "answer": "tions",
     "slots": 5,
     "marker": "crea_ __ __ __ _ ",
     "start": 341,
     "end": 358
    },
    {
     "index": 6,
     "prefix": "mea",
     "underscores": 4,
     "word": "meaning",
     "answer": "ning",
     "slots": 4,
     "marker": "mea_ _ _ _ ",
     "start": 363,
     "end": 374
    },
    {
     "index": 7,
     "prefix": "repr",
     "underscores": 6,
     "word": "represent",
     "answer": "esent",
     "slots": 5,
     "marker": "repr_ _ _ __ _ ",
     "start": 378,
     "end": 393
    },
    {
     "index": 8,
     "prefix": "spir",
     "underscores": 8,
     "word": "spiritual",
     "answer": "itual",
     "slots": 5,
     "marker": "spir_ __ __ __ _ ",
     "start": 400,
     "end": 417
    },
    {
     "index": 9,
     "prefix": "cult",
     "underscores": 4,
     "word": "cultural",
     "answer": "ural",
     "slots": 4,
     "marker": "cult_ _ _ _ ",
     "start": 420,
     "end": 432
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 工艺美术发展、工艺技术、工艺（工匠精神与文化表达）。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "technical",
     "reason": "adj.技术的（technic→technical）"
    },
    {
     "word": "but",
     "reason": "conj.但是"
    },
    {
     "word": "for",
     "reason": "prep.为了／因为"
    },
    {
     "word": "ability",
     "reason": "n.能力（able→ability）"
    },
    {
     "word": "infuse",
     "reason": "v.注入"
    },
    {
     "word": "creations",
     "reason": "n.复←creation（创作）"
    },
    {
     "word": "meaning",
     "reason": "n.意义（mean→meaning）"
    },
    {
     "word": "represent",
     "reason": "v.代表／体现"
    },
    {
     "word": "spiritual",
     "reason": "adj.精神的（spirit→spiritual）"
    },
    {
     "word": "cultural",
     "reason": "adj.文化的（culture→cultural）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句② 主干 skilled makers（主）were valued（谓）；修饰：In medieval Europe 介词短语作地点状语；known as artisans 过去分词短语作后置定语修饰 makers；for their technical expertise 介词短语作原因状语；for their ability to infuse their creations with meaning and represent deeper spiritual or cultural themes 介词短语作原因状语（并列）；to infuse their creations with meaning and represent... 不定式短语作 ability 的后置定语；with meaning 介词短语作状语（infuse with）。"
    }
   ],
   "tags": [
    "艺术",
    "工艺",
    "工艺技术",
    "工艺美术发展"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "20260615A",
   "month": "2026年6月",
   "source": "20260615A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Jazz Music",
   "discipline": "艺术",
   "topic": "音乐",
   "difficulty": "困难",
   "passage": "The development of jazz music in the United States in the early twentieth century represents a significant cultural milestone. Originating in the African American communities of New Orleans, jazz blended elements of blues, ragtime,and European classical music. Reflecting shi_ _ _ in cul_ _ _ _ ,Jazz empl_ _ _ innovative techn_ _ _ _ _ like improv_ _ _ _ _ _ _ _ that chall_ _ _ _ _ traditional mus_ _ _ _ conventions,allo_ _ _ _ musicians t_ express th_ _ _ individuality.Figures like Louis Armstrong and Ella Fitzgerald popularized jazz, playing pivotal roles in advancing its stylistic innovations. The genre's influence extended globally, shaping various musical forms and inspiring new generations of artists.",
   "blanks": [
    {
     "index": 0,
     "prefix": "shi",
     "answer": "fts",
     "word": "shifts",
     "slots": 3,
     "underscores": 3,
     "marker": "shi_ _ _ ",
     "start": 272,
     "end": 281
    },
    {
     "index": 1,
     "prefix": "cul",
     "answer": "ture",
     "word": "culture",
     "slots": 4,
     "underscores": 4,
     "marker": "cul_ _ _ _ ",
     "start": 284,
     "end": 295
    },
    {
     "index": 2,
     "prefix": "empl",
     "answer": "oyed",
     "word": "employed",
     "slots": 4,
     "underscores": 3,
     "marker": "empl_ _ _ ",
     "start": 301,
     "end": 311
    },
    {
     "index": 3,
     "prefix": "techn",
     "answer": "iques",
     "word": "techniques",
     "slots": 5,
     "underscores": 5,
     "marker": "techn_ _ _ _ _ ",
     "start": 322,
     "end": 337
    },
    {
     "index": 4,
     "prefix": "improv",
     "answer": "isation",
     "word": "improvisation",
     "slots": 7,
     "underscores": 8,
     "marker": "improv_ _ _ _ _ _ _ _ ",
     "start": 342,
     "end": 364
    },
    {
     "index": 5,
     "prefix": "chall",
     "answer": "enge",
     "word": "challenge",
     "slots": 4,
     "underscores": 5,
     "marker": "chall_ _ _ _ _ ",
     "start": 369,
     "end": 384
    },
    {
     "index": 6,
     "prefix": "mus",
     "answer": "ical",
     "word": "musical",
     "slots": 4,
     "underscores": 4,
     "marker": "mus_ _ _ _ ",
     "start": 396,
     "end": 407
    },
    {
     "index": 7,
     "prefix": "allo",
     "answer": "wing",
     "word": "allowing",
     "slots": 4,
     "underscores": 4,
     "marker": "allo_ _ _ _ ",
     "start": 419,
     "end": 431
    },
    {
     "index": 8,
     "prefix": "t",
     "answer": "o",
     "word": "to",
     "slots": 1,
     "underscores": 1,
     "marker": "t_ ",
     "start": 441,
     "end": 444
    },
    {
     "index": 9,
     "prefix": "th",
     "answer": "eir",
     "word": "their",
     "slots": 3,
     "underscores": 3,
     "marker": "th_ _ _ ",
     "start": 452,
     "end": 460
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 爵士乐的发展、音乐流派融合、跨文化音乐创新。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "shifts",
     "reason": "n.复←shift（变化）"
    },
    {
     "word": "culture",
     "reason": "n.文化"
    },
    {
     "word": "employed",
     "reason": "v.过去式←employ（采用）"
    },
    {
     "word": "techniques",
     "reason": "n.复←technique（技巧）"
    },
    {
     "word": "improvisation",
     "reason": "n.即兴（创作）"
    },
    {
     "word": "challenge",
     "reason": "v.原形←challenge（挑战）"
    },
    {
     "word": "musical",
     "reason": "adj.音乐的（music→musical）"
    },
    {
     "word": "allowing",
     "reason": "v.现在分词←allow（使能够）⚠片段列误为 wing，前缀应为 allo，AB 错位"
    },
    {
     "word": "to",
     "reason": "prep.表目的（以）"
    },
    {
     "word": "their",
     "reason": "pron.他们的"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 Jazz（主） employed（谓） innovative techniques（宾）；修饰：Reflecting shifts in culture 现在分词短语作状语，表伴随/原因；like improvisation 介词短语作后置定语，修饰 techniques；that challenge traditional musical conventions 定语从句，修饰 techniques；allowing musicians to express their individuality 现在分词短语作状语，表结果。"
    }
   ],
   "tags": [
    "艺术",
    "音乐",
    "音乐派别"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260621A",
   "month": "2026年6月",
   "source": "20260621A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Prehistoric Dance",
   "discipline": "艺术",
   "topic": "舞蹈",
   "difficulty": "简单",
   "passage": "We know from drawings that have been preserved in caves for over 10,000 years that early humans performed dances as a group activity. We mi_ _ _ think th_ _ prehistoric peo_ _ _ concentrated on_ _on t_ _basic wo_ _that w_ _ required f_ _survival: hun_ _ _ _gathering fo_ _, and making weapons and garments. However, it is clear from the record that group dancing was important to them. They made masks and costumes; they used much energy in the process of dancing; they recorded more drawings of dancing than of any other group activity.",
   "blanks": [
    {
     "index": 0,
     "prefix": "mi",
     "answer": "ght",
     "word": "might",
     "slots": 3,
     "underscores": 3,
     "marker": "mi_ _ _ ",
     "start": 137,
     "end": 145
    },
    {
     "index": 1,
     "prefix": "th",
     "answer": "at",
     "word": "that",
     "slots": 2,
     "underscores": 2,
     "marker": "th_ _ ",
     "start": 151,
     "end": 157
    },
    {
     "index": 2,
     "prefix": "peo",
     "answer": "ple",
     "word": "people",
     "slots": 3,
     "underscores": 3,
     "marker": "peo_ _ _ ",
     "start": 169,
     "end": 178
    },
    {
     "index": 3,
     "prefix": "on",
     "answer": "ly",
     "word": "only",
     "slots": 2,
     "underscores": 2,
     "marker": "on_ _",
     "start": 191,
     "end": 196
    },
    {
     "index": 4,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "underscores": 2,
     "marker": "t_ _",
     "start": 199,
     "end": 203
    },
    {
     "index": 5,
     "prefix": "wo",
     "answer": "rk",
     "word": "work",
     "slots": 2,
     "underscores": 2,
     "marker": "wo_ _",
     "start": 209,
     "end": 214
    },
    {
     "index": 6,
     "prefix": "w",
     "answer": "as",
     "word": "was",
     "slots": 2,
     "underscores": 2,
     "marker": "w_ _ ",
     "start": 219,
     "end": 224
    },
    {
     "index": 7,
     "prefix": "f",
     "answer": "or",
     "word": "for",
     "slots": 2,
     "underscores": 2,
     "marker": "f_ _",
     "start": 233,
     "end": 237
    },
    {
     "index": 8,
     "prefix": "hun",
     "answer": "ting",
     "word": "hunting",
     "slots": 4,
     "underscores": 4,
     "marker": "hun_ _ _ _",
     "start": 247,
     "end": 257
    },
    {
     "index": 9,
     "prefix": "fo",
     "answer": "od",
     "word": "food",
     "slots": 2,
     "underscores": 2,
     "marker": "fo_ _",
     "start": 267,
     "end": 272
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 史前舞蹈、洞穴艺术、早期人类群体活动。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "might",
     "reason": "v.情态←may（可能）"
    },
    {
     "word": "that",
     "reason": "conj.引导从句"
    },
    {
     "word": "people",
     "reason": "n.人们"
    },
    {
     "word": "only",
     "reason": "adv.仅仅"
    },
    {
     "word": "the",
     "reason": "art.定冠词"
    },
    {
     "word": "work",
     "reason": "n.工作"
    },
    {
     "word": "was",
     "reason": "v.过去式←be（是）"
    },
    {
     "word": "for",
     "reason": "prep.为了"
    },
    {
     "word": "hunting",
     "reason": "v.动名词←hunt（狩猎）"
    },
    {
     "word": "food",
     "reason": "n.食物"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 We（主） might think（谓） [that 从句]（宾）；修饰：that prehistoric people concentrated only on the basic work 为 that 引导的宾语从句，作 think 的宾语；that was required for survival 定语从句，修饰 work；hunting, gathering food, and making weapons and garments 为伴随分词短语/同位列举，说明 survival 的内容。"
    }
   ],
   "tags": [
    "艺术",
    "舞蹈"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260621A-2",
   "month": "2026年6月",
   "source": "20260621A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Wind Formation",
   "discipline": "自然科学",
   "topic": "天文学",
   "difficulty": "中等",
   "passage": "Wind currents form due to differences in atmospheric pressure, which arise from uneven solar heating across Earth's surface. As warmer air rises and cooler air sinks, pressure differentials are created, driving horizontal air movement known as wind. Wind currents transport mois_ __ _ and infl_ _ _ _ _ temperature, pla_ _ _ _ a k_ _ role i_ shaping wea_ _ _ _ patterns. T_ _Coriolis eff_ _ _ caused b_ Earth's rota_ _ _ _ further alters wind direction, creating prevailing winds that impact regional climates and storm systems. Understanding these interactions is crucial for accurate forecasting.",
   "blanks": [
    {
     "index": 0,
     "prefix": "mois",
     "answer": "ture",
     "word": "moisture",
     "slots": 4,
     "underscores": 4,
     "marker": "mois_ __ _ ",
     "start": 274,
     "end": 285
    },
    {
     "index": 1,
     "prefix": "infl",
     "answer": "uence",
     "word": "influence",
     "slots": 5,
     "underscores": 5,
     "marker": "infl_ _ _ _ _ ",
     "start": 289,
     "end": 303
    },
    {
     "index": 2,
     "prefix": "pla",
     "answer": "ying",
     "word": "playing",
     "slots": 4,
     "underscores": 4,
     "marker": "pla_ _ _ _ ",
     "start": 316,
     "end": 327
    },
    {
     "index": 3,
     "prefix": "k",
     "answer": "ey",
     "word": "key",
     "slots": 2,
     "underscores": 2,
     "marker": "k_ _ ",
     "start": 329,
     "end": 334
    },
    {
     "index": 4,
     "prefix": "i",
     "answer": "n",
     "word": "in",
     "slots": 1,
     "underscores": 1,
     "marker": "i_ ",
     "start": 339,
     "end": 342
    },
    {
     "index": 5,
     "prefix": "wea",
     "answer": "ther",
     "word": "weather",
     "slots": 4,
     "underscores": 4,
     "marker": "wea_ _ _ _ ",
     "start": 350,
     "end": 361
    },
    {
     "index": 6,
     "prefix": "T",
     "answer": "he",
     "word": "The",
     "slots": 2,
     "underscores": 2,
     "marker": "T_ _",
     "start": 371,
     "end": 375
    },
    {
     "index": 7,
     "prefix": "eff",
     "answer": "ect",
     "word": "effect",
     "slots": 3,
     "underscores": 3,
     "marker": "eff_ _ _ ",
     "start": 384,
     "end": 393
    },
    {
     "index": 8,
     "prefix": "b",
     "answer": "y",
     "word": "by",
     "slots": 1,
     "underscores": 1,
     "marker": "b_ ",
     "start": 400,
     "end": 403
    },
    {
     "index": 9,
     "prefix": "rota",
     "answer": "ting",
     "word": "rotating",
     "slots": 4,
     "underscores": 4,
     "marker": "rota_ _ _ _ ",
     "start": 411,
     "end": 423
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 风的形成（大气环流）、科里奥利效应、地球大气科学。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "known",
     "reason": "v.过去分词←know（被称为）⚠q_text 前缀 ak 错位，应为 kn，据语境校正"
    },
    {
     "word": "moisture",
     "reason": "n.水分（moist+ure）"
    },
    {
     "word": "influence",
     "reason": "v.影响"
    },
    {
     "word": "playing",
     "reason": "v.现在分词←play（起…作用）"
    },
    {
     "word": "key",
     "reason": "adj.关键的"
    },
    {
     "word": "in",
     "reason": "prep.在…中"
    },
    {
     "word": "weather",
     "reason": "n.天气"
    },
    {
     "word": "The",
     "reason": "art.定冠词"
    },
    {
     "word": "effect",
     "reason": "n.效应"
    },
    {
     "word": "by",
     "reason": "prep.被／由"
    },
    {
     "word": "rotating",
     "reason": "v.现在分词←rotate（旋转）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 pressure differentials（主） are created（谓）；修饰：As warmer air rises and cooler air sinks 状语从句，表时间/原因；driving horizontal air movement known as wind 现在分词短语作状语，表结果（known as wind 过去分词短语作后置定语，修饰 movement）。 - 句② 主干 Wind currents（主） transport（谓） moisture（宾） and influence（谓） temperature（宾）；修饰：playing a key role in shaping weather patterns 现在分词短语作状语，表结果（in shaping weather patterns 介词短语作后置定语，修饰 role）。 - 句③ 主干 The Coriolis effect（主） further alters（谓） wind direction（宾）；修饰：caused by Earth's rotating 过去分词短语作后置定语，修饰 effect；creating prevailing winds 现在分词短语作状语，表结果；that impact regional climates and storm systems 定语从句，修饰 winds。"
    }
   ],
   "tags": [
    "自然科学",
    "天文学",
    "太阳活动"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260621A-3",
   "month": "2026年6月",
   "source": "20260621A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Herd Society",
   "discipline": "生命科学",
   "topic": "生物",
   "difficulty": "困难",
   "passage": "In studying animal behavior, it becomes apparent that social hierarchies play a significant role in the lives of manyterrestrial mammals. These hierarchies, often established through displays of dominance and submission, dictate acc_ _ to reso_ _ _ _ _such a_ food, ma_ __ _, and she_ _ _ _ , thereby influ_ _ _ _ _ _ survival a_ _ reproductive.Behavioral ecolo_ _ _ _ _ have obse_ _ _ _ that such complex social structures can lead to increasedsucgroup stability, as roles are dlearly defined, reducing the frequency of potentially harmful disputes and promotingcooperation among group members.",
   "blanks": [
    {
     "index": 0,
     "prefix": "acc",
     "answer": "ess",
     "word": "access",
     "slots": 3,
     "underscores": 2,
     "marker": "acc_ _ ",
     "start": 229,
     "end": 236
    },
    {
     "index": 1,
     "prefix": "reso",
     "answer": "urces",
     "word": "resources",
     "slots": 5,
     "underscores": 5,
     "marker": "reso_ _ _ _ _",
     "start": 239,
     "end": 252
    },
    {
     "index": 2,
     "prefix": "a",
     "answer": "s",
     "word": "as",
     "slots": 1,
     "underscores": 1,
     "marker": "a_ ",
     "start": 257,
     "end": 260
    },
    {
     "index": 3,
     "prefix": "ma",
     "answer": "tes",
     "word": "mates",
     "slots": 3,
     "underscores": 4,
     "marker": "ma_ __ _",
     "start": 266,
     "end": 274
    },
    {
     "index": 4,
     "prefix": "she",
     "answer": "lter",
     "word": "shelter",
     "slots": 4,
     "underscores": 4,
     "marker": "she_ _ _ _ ",
     "start": 280,
     "end": 291
    },
    {
     "index": 5,
     "prefix": "influ",
     "answer": "encing",
     "word": "influencing",
     "slots": 6,
     "underscores": 6,
     "marker": "influ_ _ _ _ _ _ ",
     "start": 301,
     "end": 318
    },
    {
     "index": 6,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 327,
     "end": 332
    },
    {
     "index": 7,
     "prefix": "ecolo",
     "answer": "gists",
     "word": "ecologists",
     "slots": 5,
     "underscores": 5,
     "marker": "ecolo_ _ _ _ _ ",
     "start": 356,
     "end": 371
    },
    {
     "index": 8,
     "prefix": "obse",
     "answer": "rved",
     "word": "observed",
     "slots": 4,
     "underscores": 4,
     "marker": "obse_ _ _ _ ",
     "start": 376,
     "end": 388
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 动物社会等级、资源分配、行为生态学。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "access",
     "reason": "n.获取（access）"
    },
    {
     "word": "resources",
     "reason": "n.复←resource（资源）"
    },
    {
     "word": "as",
     "reason": "prep.作为"
    },
    {
     "word": "mates",
     "reason": "n.复←mate（同伴）"
    },
    {
     "word": "shelter",
     "reason": "n.庇护所"
    },
    {
     "word": "influencing",
     "reason": "v.现在分词←influence（影响）"
    },
    {
     "word": "and",
     "reason": "conj.和"
    },
    {
     "word": "ecologists",
     "reason": "n.复←ecologist（行为生态学家）"
    },
    {
     "word": "observed",
     "reason": "v.过去式←observe（观察）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 These hierarchies（主） dictate（谓） access（宾）；修饰：often established through displays of dominance and submission 过去分词短语作后置定语，修饰 hierarchies；to resources such as food, mates, and shelter 介词短语作后置定语，修饰 access；thereby influencing survival and reproductive 现在分词短语作状语，表结果。 - 句② 主干 Behavioral ecologists（主） have observed（谓） [that 从句]（宾）；修饰：that such complex social structures can lead to increased group stability 为 that 从句作 observed 的宾语；as roles are clearly defined 状语从句，表原因；reducing the frequency of potentially harmful disputes and promoting cooperation 现在分词短语作状语，表结果（among group members 介词短语作后置定语，修饰 cooperation）。"
    }
   ],
   "tags": [
    "生命科学",
    "生物",
    "动物"
   ],
   "status": "active",
   "blankCount": 9,
   "flags": []
  },
  {
   "id": "20260621B",
   "month": "2026年6月",
   "source": "20260621B",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Prehistoric Dance",
   "discipline": "艺术",
   "topic": "舞蹈",
   "difficulty": "简单",
   "passage": "We know from drawings that have been preserved in caves for over 10,000 years that early humans performed dances as a group activity. We mi_ _ _ think th_ _ prehistoric peo_ _ _ concentrated on t_ _ basic wo_ _ required f_ _ survival;hun_ __ _,gathering fo_ _,and making weapons and garments.However,it is clear from the record that group dancing was important to them.They made masks and costumes;they used much energy in the process of dancing;they recorded more drawings of dancing than of any other group activity.",
   "blanks": [
    {
     "index": 0,
     "prefix": "mi",
     "answer": "ght",
     "word": "might",
     "slots": 3,
     "underscores": 3,
     "marker": "mi_ _ _ ",
     "start": 137,
     "end": 145
    },
    {
     "index": 1,
     "prefix": "th",
     "answer": "at",
     "word": "that",
     "slots": 2,
     "underscores": 2,
     "marker": "th_ _ ",
     "start": 151,
     "end": 157
    },
    {
     "index": 2,
     "prefix": "peo",
     "answer": "ple",
     "word": "people",
     "slots": 3,
     "underscores": 3,
     "marker": "peo_ _ _ ",
     "start": 169,
     "end": 178
    },
    {
     "index": 3,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "underscores": 2,
     "marker": "t_ _ ",
     "start": 194,
     "end": 199
    },
    {
     "index": 4,
     "prefix": "wo",
     "answer": "rk",
     "word": "work",
     "slots": 2,
     "underscores": 2,
     "marker": "wo_ _ ",
     "start": 205,
     "end": 211
    },
    {
     "index": 5,
     "prefix": "f",
     "answer": "or",
     "word": "for",
     "slots": 2,
     "underscores": 2,
     "marker": "f_ _ ",
     "start": 220,
     "end": 225
    },
    {
     "index": 6,
     "prefix": "hun",
     "answer": "ting",
     "word": "hunting",
     "slots": 4,
     "underscores": 4,
     "marker": "hun_ __ _",
     "start": 234,
     "end": 243
    },
    {
     "index": 7,
     "prefix": "fo",
     "answer": "od",
     "word": "food",
     "slots": 2,
     "underscores": 2,
     "marker": "fo_ _",
     "start": 254,
     "end": 259
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 史前舞蹈、洞穴艺术、早期人类群体活动。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "might",
     "reason": "v.情态←may（可能）"
    },
    {
     "word": "that",
     "reason": "conj.引导从句"
    },
    {
     "word": "people",
     "reason": "n.人们"
    },
    {
     "word": "the",
     "reason": "art.定冠词 ⚠片段列误为 tly，前缀 t 后应补 he，校正为 the"
    },
    {
     "word": "work",
     "reason": "n.工作"
    },
    {
     "word": "for",
     "reason": "prep.为了"
    },
    {
     "word": "hunting",
     "reason": "v.动名词←hunt（狩猎）"
    },
    {
     "word": "food",
     "reason": "n.食物"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 We（主） might think（谓） [that 从句]（宾）；修饰：that prehistoric people concentrated on the basic work required for survival 为 that 从句作 think 的宾语；required for survival 过去分词短语作后置定语，修饰 work；hunting, gathering food, and making weapons and garments 为伴随分词短语/同位列举，说明 survival 的内容。"
    }
   ],
   "tags": [
    "艺术",
    "舞蹈"
   ],
   "status": "active",
   "blankCount": 8,
   "flags": []
  },
  {
   "id": "20260621B-2",
   "month": "2026年6月",
   "source": "20260621B",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Louisiana Purchase",
   "discipline": "社会科学",
   "topic": "心理学",
   "difficulty": "中等",
   "passage": "The Louisiana Purchase of 1803 was a landmark diplomatic agreements in which the United States acquired approximately 828,000 square miles of territory from France for $ 15 million,Negotiated under President Thomas Jefferson, the acqui_ _ _ _ _ _ nearly dou_ _ _ _ the la_ _ area o_ the nat_ _ _ and sec_ _ _ _ access t_ key inl_ _ _ waterways a_ _ trade hu_ _ essential for economic expansions .The purchase also affirmed the principle of implied powers within the United States Constitution, setting a precedent for future territorial growth.",
   "blanks": [
    {
     "index": 0,
     "prefix": "acqui",
     "underscores": 6,
     "word": "acquisition",
     "answer": "sition",
     "slots": 6,
     "marker": "acqui_ _ _ _ _ _ ",
     "start": 230,
     "end": 247
    },
    {
     "index": 1,
     "prefix": "dou",
     "underscores": 4,
     "word": "doubled",
     "answer": "bled",
     "slots": 4,
     "marker": "dou_ _ _ _ ",
     "start": 254,
     "end": 265
    },
    {
     "index": 2,
     "prefix": "la",
     "underscores": 2,
     "word": "land",
     "answer": "nd",
     "slots": 2,
     "marker": "la_ _ ",
     "start": 269,
     "end": 275
    },
    {
     "index": 3,
     "prefix": "o",
     "underscores": 1,
     "word": "of",
     "answer": "f",
     "slots": 1,
     "marker": "o_ ",
     "start": 280,
     "end": 283
    },
    {
     "index": 4,
     "prefix": "nat",
     "underscores": 3,
     "word": "nation",
     "answer": "ion",
     "slots": 3,
     "marker": "nat_ _ _ ",
     "start": 287,
     "end": 296
    },
    {
     "index": 5,
     "prefix": "sec",
     "underscores": 4,
     "word": "secured",
     "answer": "ured",
     "slots": 4,
     "marker": "sec_ _ _ _ ",
     "start": 300,
     "end": 311
    },
    {
     "index": 6,
     "prefix": "t",
     "underscores": 1,
     "word": "to",
     "answer": "o",
     "slots": 1,
     "marker": "t_ ",
     "start": 318,
     "end": 321
    },
    {
     "index": 7,
     "prefix": "inl",
     "underscores": 3,
     "word": "inland",
     "answer": "and",
     "slots": 3,
     "marker": "inl_ _ _ ",
     "start": 325,
     "end": 334
    },
    {
     "index": 8,
     "prefix": "a",
     "underscores": 2,
     "word": "and",
     "answer": "nd",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 344,
     "end": 349
    },
    {
     "index": 9,
     "prefix": "hu",
     "underscores": 2,
     "word": "hubs",
     "answer": "bs",
     "slots": 2,
     "marker": "hu_ _ ",
     "start": 355,
     "end": 361
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 路易斯安那购地、美国领土扩张、外交史。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "acquisition",
     "reason": "n.获取（acqui+sition）"
    },
    {
     "word": "doubled",
     "reason": "v.过去式←double（使翻倍）"
    },
    {
     "word": "land",
     "reason": "n.土地"
    },
    {
     "word": "of",
     "reason": "prep.…的"
    },
    {
     "word": "nation",
     "reason": "n.国家"
    },
    {
     "word": "secured",
     "reason": "v.过去式←secure（确保）"
    },
    {
     "word": "to",
     "reason": "prep.到／向"
    },
    {
     "word": "inland",
     "reason": "adj.内陆的（in+land）"
    },
    {
     "word": "and",
     "reason": "conj.和"
    },
    {
     "word": "hubs",
     "reason": "n.复←hub（枢纽）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 the acquisition（主） nearly doubled（谓） the land area（宾） and secured（谓） access（宾）；修饰：Negotiated under President Thomas Jefferson 过去分词短语作状语，表让步/伴随；of the nation 介词短语作后置定语，修饰 area；to key inland waterways and trade hubs 介词短语作后置定语，修饰 access；essential for economic expansions 形容词短语作后置定语，修饰 hubs。"
    }
   ],
   "tags": [
    "社会科学",
    "心理学",
    "发展心理学"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "20260622A",
   "month": "2026年6月",
   "source": "20260622A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Medieval Society",
   "discipline": "社会科学",
   "topic": "历史",
   "difficulty": "困难",
   "passage": "Medieval European history, lasting approximately from 500 C.E. to 1500 C.E., is marked by significant cultural, political, and economic changes. Feudalism domi_ _ _ _ _ the soc_ _ _ structure, wi_ _ lords gove_ _ _ _ _ _ lands a_ _ vassals prov_ _ _ _ _ military se_ _ _ _. The Church exe_ _ _ _ substantial infl_ _ _ _ _ over da_ _ _ life and governance. Trade routes expanded, facilitating the exchange of goods and ideas. Art and architecture flourished, exemplified by Gothic cathedrals and illuminated manuscripts. Studying this era involves analyzing historical documents, artifacts, and architectural remains to understand the complexities of medieval society.\"",
   "blanks": [
    {
     "index": 0,
     "prefix": "domi",
     "answer": "nated",
     "word": "dominated",
     "slots": 5,
     "underscores": 5,
     "marker": "domi_ _ _ _ _ ",
     "start": 155,
     "end": 169
    },
    {
     "index": 1,
     "prefix": "soc",
     "answer": "ial",
     "word": "social",
     "slots": 3,
     "underscores": 3,
     "marker": "soc_ _ _ ",
     "start": 173,
     "end": 182
    },
    {
     "index": 2,
     "prefix": "wi",
     "answer": "th",
     "word": "with",
     "slots": 2,
     "underscores": 2,
     "marker": "wi_ _ ",
     "start": 193,
     "end": 199
    },
    {
     "index": 3,
     "prefix": "gove",
     "answer": "rning",
     "word": "governing",
     "slots": 5,
     "underscores": 6,
     "marker": "gove_ _ _ _ _ _ ",
     "start": 205,
     "end": 221
    },
    {
     "index": 4,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 227,
     "end": 232
    },
    {
     "index": 5,
     "prefix": "prov",
     "answer": "iding",
     "word": "providing",
     "slots": 5,
     "underscores": 5,
     "marker": "prov_ _ _ _ _ ",
     "start": 240,
     "end": 254
    },
    {
     "index": 6,
     "prefix": "se",
     "answer": "rvice",
     "word": "service",
     "slots": 5,
     "underscores": 4,
     "marker": "se_ _ _ _",
     "start": 263,
     "end": 272
    },
    {
     "index": 7,
     "prefix": "exe",
     "answer": "rted",
     "word": "exerted",
     "slots": 4,
     "underscores": 4,
     "marker": "exe_ _ _ _ ",
     "start": 285,
     "end": 296
    },
    {
     "index": 8,
     "prefix": "infl",
     "answer": "uence",
     "word": "influence",
     "slots": 5,
     "underscores": 5,
     "marker": "infl_ _ _ _ _ ",
     "start": 308,
     "end": 322
    },
    {
     "index": 9,
     "prefix": "da",
     "answer": "ily",
     "word": "daily",
     "slots": 3,
     "underscores": 3,
     "marker": "da_ _ _ ",
     "start": 327,
     "end": 335
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 中世纪欧洲史、封建制度、教会与社会结构。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "dominated",
     "reason": "v.过去式←dominate（主导）"
    },
    {
     "word": "social",
     "reason": "adj.社会的（society→social）"
    },
    {
     "word": "with",
     "reason": "prep.具有"
    },
    {
     "word": "governing",
     "reason": "v.现在分词←govern（统治）"
    },
    {
     "word": "and",
     "reason": "conj.和"
    },
    {
     "word": "providing",
     "reason": "v.现在分词←provide（提供）"
    },
    {
     "word": "service",
     "reason": "n.服务 ⚠片段列误为 sevice（缺 r），校正为 service"
    },
    {
     "word": "exerted",
     "reason": "v.过去式←exert（施加）"
    },
    {
     "word": "influence",
     "reason": "n.影响"
    },
    {
     "word": "daily",
     "reason": "adj.日常的（day→daily）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 Feudalism（主） dominated（谓） the social structure（宾）；修饰：with lords governing lands and vassals providing military service 为 with 复合结构（现在分词短语）作伴随/后置定语，修饰 structure（governing lands / providing military service 分别修饰 lords / vassals）。 - 句② 主干 The Church（主） exerted（谓） substantial influence（宾）；修饰：over daily life and governance 介词短语作后置定语，修饰 influence。"
    }
   ],
   "tags": [
    "社会科学",
    "历史",
    "文化史"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260623A",
   "month": "2026年6月",
   "source": "20260623A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Ant Society",
   "discipline": "社会科学",
   "topic": "心理学",
   "difficulty": "困难",
   "passage": "Ants display highly organized social behavior, characterized by a structured division of labor and cooperative interaction. Worker ants, which are sterile females, perform specialized tasks such as foraging, brood care, nest maintenance, and defense. These ro_ _ _ often va_ _ based o_ age o_ physical tra_ _ _, enhancing col_ _ _ efficiency. Commun_ _ _ _ _ _ _ occurs prim_ _ _ _ _ through chem_ _ _ _ signals cal_ _ _ pheromones, enabling coordination across large groups. The complexity of ant societies offers insight into how evolutionary pressures can produce adaptive social systems.",
   "blanks": [
    {
     "index": 0,
     "prefix": "ro",
     "answer": "les",
     "word": "roles",
     "slots": 3,
     "underscores": 3,
     "marker": "ro_ _ _ ",
     "start": 257,
     "end": 265
    },
    {
     "index": 1,
     "prefix": "va",
     "answer": "ry",
     "word": "vary",
     "slots": 2,
     "underscores": 2,
     "marker": "va_ _ ",
     "start": 271,
     "end": 277
    },
    {
     "index": 2,
     "prefix": "o",
     "answer": "n",
     "word": "on",
     "slots": 1,
     "underscores": 1,
     "marker": "o_ ",
     "start": 283,
     "end": 286
    },
    {
     "index": 3,
     "prefix": "o",
     "answer": "r",
     "word": "or",
     "slots": 1,
     "underscores": 1,
     "marker": "o_ ",
     "start": 290,
     "end": 293
    },
    {
     "index": 4,
     "prefix": "tra",
     "answer": "its",
     "word": "traits",
     "slots": 3,
     "underscores": 3,
     "marker": "tra_ _ _",
     "start": 302,
     "end": 310
    },
    {
     "index": 5,
     "prefix": "col",
     "answer": "ony",
     "word": "colony",
     "slots": 3,
     "underscores": 3,
     "marker": "col_ _ _ ",
     "start": 322,
     "end": 331
    },
    {
     "index": 6,
     "prefix": "Commun",
     "answer": "ication",
     "word": "Communication",
     "slots": 7,
     "underscores": 7,
     "marker": "Commun_ _ _ _ _ _ _ ",
     "start": 343,
     "end": 363
    },
    {
     "index": 7,
     "prefix": "prim",
     "answer": "arily",
     "word": "primarily",
     "slots": 5,
     "underscores": 5,
     "marker": "prim_ _ _ _ _ ",
     "start": 370,
     "end": 384
    },
    {
     "index": 8,
     "prefix": "chem",
     "answer": "ical",
     "word": "chemical",
     "slots": 4,
     "underscores": 4,
     "marker": "chem_ _ _ _ ",
     "start": 392,
     "end": 404
    },
    {
     "index": 9,
     "prefix": "cal",
     "answer": "led",
     "word": "called",
     "slots": 3,
     "underscores": 3,
     "marker": "cal_ _ _ ",
     "start": 412,
     "end": 421
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 蚂蚁社会性、劳动分工、化学生态。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "roles",
     "reason": "n.复←role（角色）"
    },
    {
     "word": "vary",
     "reason": "v.原形←vary（变化）"
    },
    {
     "word": "on",
     "reason": "prep.基于"
    },
    {
     "word": "or",
     "reason": "conj.或者"
    },
    {
     "word": "traits",
     "reason": "n.复←trait（特征）"
    },
    {
     "word": "colony",
     "reason": "n.群体"
    },
    {
     "word": "Communication",
     "reason": "n.交流（communicate→communication）"
    },
    {
     "word": "primarily",
     "reason": "adv.主要地（primary→primarily）"
    },
    {
     "word": "chemical",
     "reason": "adj.化学的（chemistry→chemical）"
    },
    {
     "word": "called",
     "reason": "v.过去分词←call（称为）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 These roles（主） vary（谓）；修饰：based on age or physical traits 过去分词短语作状语，表依据；enhancing colony efficiency 现在分词短语作状语，表结果。 - 句② 主干 Communication（主） occurs（谓）；修饰：through chemical signals called pheromones 介词短语作状语，表方式（called pheromones 过去分词短语作后置定语，修饰 signals）；enabling coordination across large groups 现在分词短语作状语，表结果（across large groups 介词短语作状语，表范围）。"
    }
   ],
   "tags": [
    "社会科学",
    "心理学"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260624A",
   "month": "2026年6月",
   "source": "20260624A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Stone Tool Evolution",
   "discipline": "社会科学",
   "topic": "心理学",
   "difficulty": "中等",
   "passage": "The development of tools during the time of early hominids was a transformative step in human evolution, reflecting increasing cognitive abilities and adaptability to diverse environments. Beginning with simple stone flakes, tools we_ _ used f_ _ self-defense, cut_ _ _ _ meat, a_ _ processing pla_ _ _. A_ time progr_ _ _ _ _, more adva_ _ _ _ tools li_ _ hand ax_ _ and scrapers emerged, showing evidence of planning, skill, and possibly even teaching within social groups. These innovations not only improved survival rates but also laid the foundation for cultural evolution and technological advancement.",
   "blanks": [
    {
     "index": 0,
     "prefix": "we",
     "answer": "re",
     "word": "were",
     "slots": 2,
     "underscores": 2,
     "marker": "we_ _ ",
     "start": 231,
     "end": 237
    },
    {
     "index": 1,
     "prefix": "f",
     "answer": "or",
     "word": "for",
     "slots": 2,
     "underscores": 2,
     "marker": "f_ _ ",
     "start": 242,
     "end": 247
    },
    {
     "index": 2,
     "prefix": "cut",
     "answer": "ting",
     "word": "cutting",
     "slots": 4,
     "underscores": 4,
     "marker": "cut_ _ _ _ ",
     "start": 261,
     "end": 272
    },
    {
     "index": 3,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 278,
     "end": 283
    },
    {
     "index": 4,
     "prefix": "pla",
     "answer": "nts",
     "word": "plants",
     "slots": 3,
     "underscores": 3,
     "marker": "pla_ _ _",
     "start": 294,
     "end": 302
    },
    {
     "index": 5,
     "prefix": "A",
     "answer": "s",
     "word": "As",
     "slots": 1,
     "underscores": 1,
     "marker": "A_ ",
     "start": 304,
     "end": 307
    },
    {
     "index": 6,
     "prefix": "progr",
     "answer": "essed",
     "word": "progressed",
     "slots": 5,
     "underscores": 5,
     "marker": "progr_ _ _ _ _",
     "start": 312,
     "end": 326
    },
    {
     "index": 7,
     "prefix": "adva",
     "answer": "nced",
     "word": "advanced",
     "slots": 4,
     "underscores": 4,
     "marker": "adva_ _ _ _ ",
     "start": 333,
     "end": 345
    },
    {
     "index": 8,
     "prefix": "li",
     "answer": "ke",
     "word": "like",
     "slots": 2,
     "underscores": 2,
     "marker": "li_ _ ",
     "start": 351,
     "end": 357
    },
    {
     "index": 9,
     "prefix": "ax",
     "answer": "es",
     "word": "axes",
     "slots": 2,
     "underscores": 2,
     "marker": "ax_ _ ",
     "start": 362,
     "end": 368
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 早期人类工具、认知进化、技术演进。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "were",
     "reason": "v.过去式←be（被）"
    },
    {
     "word": "for",
     "reason": "prep.为了"
    },
    {
     "word": "cutting",
     "reason": "v.现在分词←cut（切割）"
    },
    {
     "word": "and",
     "reason": "conj.和"
    },
    {
     "word": "plants",
     "reason": "n.复←plant（植物）"
    },
    {
     "word": "As",
     "reason": "conj.随着"
    },
    {
     "word": "progressed",
     "reason": "v.过去式←progress（推进）"
    },
    {
     "word": "advanced",
     "reason": "adj.先进的（advance→advanced）"
    },
    {
     "word": "like",
     "reason": "prep.像"
    },
    {
     "word": "axes",
     "reason": "n.复←ax（斧）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 tools（主） were used（谓）；修饰：Beginning with simple stone flakes 现在分词短语作状语，表起点；for self-defense, cutting meat, and processing plants 介词短语作状语，表用途（cutting meat / processing plants 为动名词短语并列）。 - 句② 主干 more advanced tools（主） emerged（谓）；修饰：As time progressed 状语从句，表时间；like hand axes and scrapers 介词短语作后置定语，修饰 tools；showing evidence of planning, skill, and possibly even teaching 现在分词短语作状语，表结果（of planning... 介词短语作后置定语，修饰 evidence；within social groups 介词短语作状语，表范围）。"
    }
   ],
   "tags": [
    "社会科学",
    "心理学",
    "认知心理学"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260629A",
   "month": "2026年6月",
   "source": "20260629A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Last Ice Age",
   "discipline": "社会科学",
   "topic": "历史",
   "difficulty": "中等",
   "passage": "The last Ice Age sculpted the face of Earth, leaving behind majestic glaciers that continue to shape the landscape even today. These mas_ _ _ _ ice riv_ _ _ flow slo_ _ _, grinding do_ _ mountains a_ _ carving val_ _ _ _ over mill_ _ _ _ _ . Compared t_ other geolo_ _ _ _ _ phenomena, t_ _ movement of glaciers is imperceptible on a human timescale, yet their impact is undeniably profound. Glaciers serve as natural archives of Earth's climatic history, preserving atmospheric data in layers of ice that have accumulated over thousands of years. Studying glaciers allows scientists to analyze past temperature patterns and environmental changes over time",
   "blanks": [
    {
     "index": 0,
     "prefix": "mas",
     "answer": "sive",
     "word": "massive",
     "slots": 4,
     "underscores": 4,
     "marker": "mas_ _ _ _ ",
     "start": 133,
     "end": 144
    },
    {
     "index": 1,
     "prefix": "riv",
     "answer": "ers",
     "word": "rivers",
     "slots": 3,
     "underscores": 3,
     "marker": "riv_ _ _ ",
     "start": 148,
     "end": 157
    },
    {
     "index": 2,
     "prefix": "slo",
     "answer": "wly",
     "word": "slowly",
     "slots": 3,
     "underscores": 3,
     "marker": "slo_ _ _",
     "start": 162,
     "end": 170
    },
    {
     "index": 3,
     "prefix": "do",
     "answer": "wn",
     "word": "down",
     "slots": 2,
     "underscores": 2,
     "marker": "do_ _ ",
     "start": 181,
     "end": 187
    },
    {
     "index": 4,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 197,
     "end": 202
    },
    {
     "index": 5,
     "prefix": "val",
     "answer": "leys",
     "word": "valleys",
     "slots": 4,
     "underscores": 4,
     "marker": "val_ _ _ _ ",
     "start": 210,
     "end": 221
    },
    {
     "index": 6,
     "prefix": "mill",
     "answer": "ennia",
     "word": "millennia",
     "slots": 5,
     "underscores": 5,
     "marker": "mill_ _ _ _ _ ",
     "start": 226,
     "end": 240
    },
    {
     "index": 7,
     "prefix": "t",
     "answer": "o",
     "word": "to",
     "slots": 1,
     "underscores": 1,
     "marker": "t_ ",
     "start": 251,
     "end": 254
    },
    {
     "index": 8,
     "prefix": "geolo",
     "answer": "gical",
     "word": "geological",
     "slots": 5,
     "underscores": 5,
     "marker": "geolo_ _ _ _ _ ",
     "start": 260,
     "end": 275
    },
    {
     "index": 9,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "underscores": 2,
     "marker": "t_ _ ",
     "start": 286,
     "end": 291
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 冰川、地球地貌塑造、气候档案与历史。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "massive",
     "reason": "adj.巨大的（mass+ive）"
    },
    {
     "word": "rivers",
     "reason": "n.复←river（河流）"
    },
    {
     "word": "slowly",
     "reason": "adv.缓慢地（slow+ly）"
    },
    {
     "word": "down",
     "reason": "adv./prep.向下"
    },
    {
     "word": "and",
     "reason": "conj.和"
    },
    {
     "word": "valleys",
     "reason": "n.复←valley（山谷）"
    },
    {
     "word": "millennia",
     "reason": "n.复←millennium（千年）⚠片段列/greedy 误为 milllennia（多 l），校正为 millennia"
    },
    {
     "word": "to",
     "reason": "prep.与…相比"
    },
    {
     "word": "geological",
     "reason": "adj.地质的（geology→geological）"
    },
    {
     "word": "the",
     "reason": "art.定冠词"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 These massive ice rivers（主） flow（谓）；修饰：grinding down mountains and carving valleys 现在分词短语作状语，表伴随/结果（down mountains / valleys 为宾语）；over millennia 介词短语作状语，表时间。 - 句② 主干 the movement of glaciers（主） is（谓） imperceptible（表）；修饰：Compared to other geological phenomena 过去分词短语作状语，表比较；on a human timescale 介词短语作状语，表范围。"
    }
   ],
   "tags": [
    "社会科学",
    "历史",
    "社会变革"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260630A",
   "month": "2026年6月",
   "source": "20260630A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Cognition & Consciousness",
   "discipline": "社会科学",
   "topic": "心理学",
   "difficulty": "困难",
   "passage": "Understanding the relationship between cognition and consciousness is pivotal for unraveling the complexities of human thinking and behavior, as both are fundamental activities of the brain. Cognition is the men_ _ _ process b_ which indiv_ _ _ _ _ acquire know_ _ _ _ _ and unders_ _ _ _ _ _ _ through tho_ _ _ , experience, a_ _ the sen_ _ _. Consciousness ref_ _ _ to t_ _ state of being aware of and responsive to one's surroundings. The advancements of neuroimaging technologies have provided insights into how consciousness arises from neural networks and how cognitive processes can occur both with and without conscious awareness.",
   "blanks": [
    {
     "index": 0,
     "prefix": "men",
     "answer": "tal",
     "word": "mental",
     "slots": 3,
     "underscores": 3,
     "marker": "men_ _ _ ",
     "start": 208,
     "end": 217
    },
    {
     "index": 1,
     "prefix": "b",
     "answer": "y",
     "word": "by",
     "slots": 1,
     "underscores": 1,
     "marker": "b_ ",
     "start": 225,
     "end": 228
    },
    {
     "index": 2,
     "prefix": "indiv",
     "answer": "iduals",
     "word": "individuals",
     "slots": 6,
     "underscores": 5,
     "marker": "indiv_ _ _ _ _ ",
     "start": 234,
     "end": 249
    },
    {
     "index": 3,
     "prefix": "know",
     "answer": "ledge",
     "word": "knowledge",
     "slots": 5,
     "underscores": 5,
     "marker": "know_ _ _ _ _ ",
     "start": 257,
     "end": 271
    },
    {
     "index": 4,
     "prefix": "unders",
     "answer": "tanding",
     "word": "understanding",
     "slots": 7,
     "underscores": 7,
     "marker": "unders_ _ _ _ _ _ _ ",
     "start": 275,
     "end": 295
    },
    {
     "index": 5,
     "prefix": "tho",
     "answer": "ugh",
     "word": "though",
     "slots": 3,
     "underscores": 3,
     "marker": "tho_ _ _ ",
     "start": 303,
     "end": 312
    },
    {
     "index": 6,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 326,
     "end": 331
    },
    {
     "index": 7,
     "prefix": "sen",
     "answer": "ses",
     "word": "senses",
     "slots": 3,
     "underscores": 3,
     "marker": "sen_ _ _",
     "start": 335,
     "end": 343
    },
    {
     "index": 8,
     "prefix": "ref",
     "answer": "ers",
     "word": "refers",
     "slots": 3,
     "underscores": 3,
     "marker": "ref_ _ _ ",
     "start": 359,
     "end": 368
    },
    {
     "index": 9,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "underscores": 2,
     "marker": "t_ _ ",
     "start": 371,
     "end": 376
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 认知心理学、心理学；心智（cognition）与意识（consciousness）的关系及神经机制。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "mental",
     "reason": "adj.精神的（mind→mental）"
    },
    {
     "word": "by",
     "reason": "prep.通过"
    },
    {
     "word": "individuals",
     "reason": "n.复←individual（个体） ⚠ ab_text 误拼为\"indivduals\""
    },
    {
     "word": "knowledge",
     "reason": "n.知识（know+-ledge）"
    },
    {
     "word": "understanding",
     "reason": "n.理解（understand→understanding，动名词／名词）"
    },
    {
     "word": "and",
     "reason": "conj.和／并且 ⚠ greedy 误为\"aught\""
    },
    {
     "word": "senses",
     "reason": "n.复←sense（感官） ⚠ ab_text 误作\"sen.ses\""
    },
    {
     "word": "refers",
     "reason": "v.三单←refer（指；涉及） ⚠ greedy 误为\"refses\""
    },
    {
     "word": "the",
     "reason": "art.定冠词 ⚠ greedy 误为\"ters\""
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 Cognition（主） is（谓） the mental process（宾）；修饰：by which individuals acquire knowledge and understanding 定语从句，修饰 process；through thought, experience, and the senses 介词短语作方式状语。 - 句② 主干 Consciousness（主） refers to（谓） the state（宾）；修饰：of being aware of and responsive to one's surroundings 介词短语作后置定语，修饰 state。"
    }
   ],
   "tags": [
    "社会科学",
    "心理学",
    "认知心理学"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260630B",
   "month": "2026年2月",
   "source": "20260630B",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Museums",
   "discipline": "社会科学",
   "topic": "历史",
   "difficulty": "困难",
   "passage": "Museums play a crucial role in preserving and showcasing art, history, and culture. They pro_ _ _ _ a sp_ _ _ where peo_ _ _ can eng_ _ _ with mult_ _ _ _ forms o_ artistic expre_ _ _ _ _ and histo_ _ _ _ _ artifacts.. Ma_ _ museums al_ _ offer educational programs and workshops, fostering a deeper understanding of the subjects they display. In addition, digital innovations have enabled museums to reach global audiences through virtual tours and online collections. The patronage of visual arts by individuals and organizations helps support artists and ensures the continued growth and diversity of the cultural landscape.",
   "blanks": [
    {
     "index": 0,
     "prefix": "pro",
     "underscores": 4,
     "word": "produce",
     "answer": "duce",
     "slots": 4,
     "marker": "pro_ _ _ _ ",
     "start": 89,
     "end": 100
    },
    {
     "index": 1,
     "prefix": "sp",
     "underscores": 3,
     "word": "space",
     "answer": "ace",
     "slots": 3,
     "marker": "sp_ _ _ ",
     "start": 102,
     "end": 110
    },
    {
     "index": 2,
     "prefix": "peo",
     "underscores": 3,
     "word": "people",
     "answer": "ple",
     "slots": 3,
     "marker": "peo_ _ _ ",
     "start": 116,
     "end": 125
    },
    {
     "index": 3,
     "prefix": "eng",
     "underscores": 3,
     "word": "engage",
     "answer": "age",
     "slots": 3,
     "marker": "eng_ _ _ ",
     "start": 129,
     "end": 138
    },
    {
     "index": 4,
     "prefix": "mult",
     "underscores": 4,
     "word": "multiple",
     "answer": "iple",
     "slots": 4,
     "marker": "mult_ _ _ _ ",
     "start": 143,
     "end": 155
    },
    {
     "index": 5,
     "prefix": "o",
     "underscores": 1,
     "word": "of",
     "answer": "f",
     "slots": 1,
     "marker": "o_ ",
     "start": 161,
     "end": 164
    },
    {
     "index": 6,
     "prefix": "expre",
     "underscores": 5,
     "word": "expression",
     "answer": "ssion",
     "slots": 5,
     "marker": "expre_ _ _ _ _ ",
     "start": 173,
     "end": 188
    },
    {
     "index": 7,
     "prefix": "histo",
     "underscores": 5,
     "word": "historical",
     "answer": "rical",
     "slots": 5,
     "marker": "histo_ _ _ _ _ ",
     "start": 192,
     "end": 207
    },
    {
     "index": 8,
     "prefix": "Ma",
     "underscores": 2,
     "word": "Many",
     "answer": "ny",
     "slots": 2,
     "marker": "Ma_ _ ",
     "start": 219,
     "end": 225
    },
    {
     "index": 9,
     "prefix": "al",
     "underscores": 2,
     "word": "also",
     "answer": "so",
     "slots": 2,
     "marker": "al_ _ ",
     "start": 233,
     "end": 239
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 文化史、历史；博物馆在艺术、历史与文化保存、展示中的作用。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "produce",
     "reason": "v.生产；提供"
    },
    {
     "word": "space",
     "reason": "n.空间；场所"
    },
    {
     "word": "people",
     "reason": "n.人们"
    },
    {
     "word": "engage",
     "reason": "v.参与；接触（engage with）"
    },
    {
     "word": "multiple",
     "reason": "adj.多样的（mult+-iple）"
    },
    {
     "word": "of",
     "reason": "prep.……的"
    },
    {
     "word": "expression",
     "reason": "n.表达；表现（expre+-ssion）"
    },
    {
     "word": "historical",
     "reason": "adj.历史的（history→historical）"
    },
    {
     "word": "Many",
     "reason": "adj.许多的（限定词）"
    },
    {
     "word": "also",
     "reason": "adv.也"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 They（主） produce（谓） a space（宾）；修饰：where people can engage with multiple forms of artistic expression and historical artifacts 定语从句，修饰 space。 - 句② 主干 Many museums（主） offer（谓） educational programs and workshops（宾）；修饰：fostering a deeper understanding of the subjects they display 现在分词短语作结果状语。"
    }
   ],
   "tags": [
    "社会科学",
    "历史",
    "文化史"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "20260701A",
   "month": "2026年7月",
   "source": "20260701A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Galaxy Redshift",
   "discipline": "自然科学",
   "topic": "天文学",
   "difficulty": "困难",
   "passage": "The observational study of galaxies has significantly advanced our understanding of the universe. By analyzing t_ _ light emi_ _ _ _ from cele_ _ _ _ _ bodies, li_ _ stars, astro_ _ _ _ _ _ can in_ _ _ various prope_ _ _ _ _ such a_ distance fr_ _ Earth, compo_ _ _ _ _ _, and velocity. As light from galaxies travels through space, it stretches, shifting to the red end of the spectrum. This shift is directly proportional to a galaxy’s speed and distance, allowing scientists to map the universe’s expansion.",
   "blanks": [
    {
     "index": 0,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "underscores": 2,
     "marker": "t_ _ ",
     "start": 111,
     "end": 116
    },
    {
     "index": 1,
     "prefix": "emi",
     "answer": "tted",
     "word": "emitted",
     "slots": 4,
     "underscores": 4,
     "marker": "emi_ _ _ _ ",
     "start": 122,
     "end": 133
    },
    {
     "index": 2,
     "prefix": "cele",
     "answer": "stial",
     "word": "celestial",
     "slots": 5,
     "underscores": 5,
     "marker": "cele_ _ _ _ _ ",
     "start": 138,
     "end": 152
    },
    {
     "index": 3,
     "prefix": "li",
     "answer": "ke",
     "word": "like",
     "slots": 2,
     "underscores": 2,
     "marker": "li_ _ ",
     "start": 160,
     "end": 166
    },
    {
     "index": 4,
     "prefix": "astro",
     "answer": "nomers",
     "word": "astronomers",
     "slots": 6,
     "underscores": 6,
     "marker": "astro_ _ _ _ _ _ ",
     "start": 173,
     "end": 190
    },
    {
     "index": 5,
     "prefix": "in",
     "answer": "fer",
     "word": "infer",
     "slots": 3,
     "underscores": 3,
     "marker": "in_ _ _ ",
     "start": 194,
     "end": 202
    },
    {
     "index": 6,
     "prefix": "prope",
     "answer": "rties",
     "word": "properties",
     "slots": 5,
     "underscores": 5,
     "marker": "prope_ _ _ _ _ ",
     "start": 210,
     "end": 225
    },
    {
     "index": 7,
     "prefix": "a",
     "answer": "s",
     "word": "as",
     "slots": 1,
     "underscores": 1,
     "marker": "a_ ",
     "start": 230,
     "end": 233
    },
    {
     "index": 8,
     "prefix": "fr",
     "answer": "om",
     "word": "from",
     "slots": 2,
     "underscores": 2,
     "marker": "fr_ _ ",
     "start": 242,
     "end": 248
    },
    {
     "index": 9,
     "prefix": "compo",
     "answer": "sition",
     "word": "composition",
     "slots": 6,
     "underscores": 6,
     "marker": "compo_ _ _ _ _ _",
     "start": 255,
     "end": 271
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 宇宙学、天文学；星系观测、红移与宇宙膨胀。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "the",
     "reason": "art.定冠词"
    },
    {
     "word": "emitted",
     "reason": "adj.被发射的（emit→emitted，过去分词作后置定语）"
    },
    {
     "word": "celestial",
     "reason": "adj.天体的（cele+-stial）"
    },
    {
     "word": "like",
     "reason": "prep.像；诸如"
    },
    {
     "word": "astronomers",
     "reason": "n.复←astronomer（天文学家）"
    },
    {
     "word": "infer",
     "reason": "v.推断"
    },
    {
     "word": "properties",
     "reason": "n.复←property（属性）"
    },
    {
     "word": "as",
     "reason": "prep.作为"
    },
    {
     "word": "from",
     "reason": "prep.从"
    },
    {
     "word": "composition",
     "reason": "n.构成；成分（compo+-sition）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 astronomers（主） can infer（谓） properties（宾）；修饰：By analyzing the light emitted from celestial bodies 介词短语作方式状语（emitted 过去分词修饰 light）；like stars 介词短语作后置定语，修饰 bodies；such as distance from Earth, composition, and velocity 介词短语作后置定语，修饰 properties。"
    }
   ],
   "tags": [
    "自然科学",
    "天文学",
    "宇宙学"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260701A-2",
   "month": "2026年7月",
   "source": "20260701A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Neolithic Pottery",
   "discipline": "艺术",
   "topic": "工艺",
   "difficulty": "困难",
   "passage": "During the Neolithic period, craftspeople began producing pottery that served both practical and aesthetic purposes. Initially created f_ _ storing fo_ _ and wa_ _ _, these cl_ _ vessels event_ _ _ _ _ featured decor_ _ _ _ _ elements su_ _ as care_ _ _ _ _ incised patt_ _ _ _ and pai_ _ _ _ designs. This dual function—utility and beauty—marks one of the earliest examples of craftsmanship evolving into artistic expression. The refinement of pottery techniques, including firing and glazing, reflected growing technical skill and cultural values.",
   "blanks": [
    {
     "index": 0,
     "prefix": "f",
     "answer": "or",
     "word": "for",
     "slots": 2,
     "underscores": 2,
     "marker": "f_ _ ",
     "start": 135,
     "end": 140
    },
    {
     "index": 1,
     "prefix": "fo",
     "answer": "od",
     "word": "food",
     "slots": 2,
     "underscores": 2,
     "marker": "fo_ _ ",
     "start": 148,
     "end": 154
    },
    {
     "index": 2,
     "prefix": "wa",
     "answer": "ter",
     "word": "water",
     "slots": 3,
     "underscores": 3,
     "marker": "wa_ _ _",
     "start": 158,
     "end": 165
    },
    {
     "index": 3,
     "prefix": "cl",
     "answer": "ay",
     "word": "clay",
     "slots": 2,
     "underscores": 2,
     "marker": "cl_ _ ",
     "start": 173,
     "end": 179
    },
    {
     "index": 4,
     "prefix": "event",
     "answer": "ually",
     "word": "eventually",
     "slots": 5,
     "underscores": 5,
     "marker": "event_ _ _ _ _ ",
     "start": 187,
     "end": 202
    },
    {
     "index": 5,
     "prefix": "decor",
     "answer": "ative",
     "word": "decorative",
     "slots": 5,
     "underscores": 5,
     "marker": "decor_ _ _ _ _ ",
     "start": 211,
     "end": 226
    },
    {
     "index": 6,
     "prefix": "su",
     "answer": "ch",
     "word": "such",
     "slots": 2,
     "underscores": 2,
     "marker": "su_ _ ",
     "start": 235,
     "end": 241
    },
    {
     "index": 7,
     "prefix": "care",
     "answer": "fully",
     "word": "carefully",
     "slots": 5,
     "underscores": 5,
     "marker": "care_ _ _ _ _ ",
     "start": 244,
     "end": 258
    },
    {
     "index": 8,
     "prefix": "patt",
     "answer": "erns",
     "word": "patterns",
     "slots": 4,
     "underscores": 4,
     "marker": "patt_ _ _ _ ",
     "start": 266,
     "end": 278
    },
    {
     "index": 9,
     "prefix": "pai",
     "answer": "nted",
     "word": "painted",
     "slots": 4,
     "underscores": 4,
     "marker": "pai_ _ _ _ ",
     "start": 282,
     "end": 293
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 制陶工艺、工艺；新石器时代陶器的实用与审美功能。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "for",
     "reason": "prep.为了"
    },
    {
     "word": "food",
     "reason": "n.食物"
    },
    {
     "word": "water",
     "reason": "n.水"
    },
    {
     "word": "clay",
     "reason": "n.黏土"
    },
    {
     "word": "eventually",
     "reason": "adv.最终（eventual→eventually）"
    },
    {
     "word": "decorative",
     "reason": "adj.装饰性的（decorate→decorative）"
    },
    {
     "word": "such",
     "reason": "adj.这样的（such as 例如）"
    },
    {
     "word": "carefully",
     "reason": "adv.仔细地（careful→carefully）"
    },
    {
     "word": "patterns",
     "reason": "n.复←pattern（图案）"
    },
    {
     "word": "painted",
     "reason": "adj.彩绘的（paint→painted，过去分词）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 these clay vessels（主） featured（谓） elements（宾）；修饰：Initially created for storing food and water 过去分词短语作状语；such as carefully incised patterns and painted designs 介词短语作后置定语，修饰 elements。"
    }
   ],
   "tags": [
    "艺术",
    "工艺",
    "制陶工艺"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260705A",
   "month": "2026年7月",
   "source": "20260705A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Herd Society",
   "discipline": "生命科学",
   "topic": "生物",
   "difficulty": "困难",
   "passage": "In studying animal behavior, it becomes apparent that social hierarchies play a significant role in the lives of many terrestrial mammals. These hierarchies, often established through displays of dominance and submission, dictate acc_ _ _ to reso_ _ _ _ _ such a_ food, ma_ _ _, and she_ _ _ _, thereby influ_ _ _ _ _ _ survival a_ _ reproductive suc_ _ _ _. Behavioral ecolo_ _ _ _ _ have obse_ _ _ _ that such complex social structures can lead to increased group stability, as roles are clearly defined, reducing the frequency of potentially harmful disputes and promoting cooperation among group members.",
   "blanks": [
    {
     "index": 0,
     "prefix": "acc",
     "answer": "ess",
     "word": "access",
     "slots": 3,
     "underscores": 3,
     "marker": "acc_ _ _ ",
     "start": 230,
     "end": 239
    },
    {
     "index": 1,
     "prefix": "reso",
     "answer": "urces",
     "word": "resources",
     "slots": 5,
     "underscores": 5,
     "marker": "reso_ _ _ _ _ ",
     "start": 242,
     "end": 256
    },
    {
     "index": 2,
     "prefix": "a",
     "answer": "s",
     "word": "as",
     "slots": 1,
     "underscores": 1,
     "marker": "a_ ",
     "start": 261,
     "end": 264
    },
    {
     "index": 3,
     "prefix": "ma",
     "answer": "tes",
     "word": "mates",
     "slots": 3,
     "underscores": 3,
     "marker": "ma_ _ _",
     "start": 270,
     "end": 277
    },
    {
     "index": 4,
     "prefix": "she",
     "answer": "lter",
     "word": "shelter",
     "slots": 4,
     "underscores": 4,
     "marker": "she_ _ _ _",
     "start": 283,
     "end": 293
    },
    {
     "index": 5,
     "prefix": "influ",
     "answer": "encing",
     "word": "influencing",
     "slots": 6,
     "underscores": 6,
     "marker": "influ_ _ _ _ _ _ ",
     "start": 303,
     "end": 320
    },
    {
     "index": 6,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 329,
     "end": 334
    },
    {
     "index": 7,
     "prefix": "suc",
     "answer": "cess",
     "word": "success",
     "slots": 4,
     "underscores": 4,
     "marker": "suc_ _ _ _",
     "start": 347,
     "end": 357
    },
    {
     "index": 8,
     "prefix": "ecolo",
     "answer": "gists",
     "word": "ecologists",
     "slots": 5,
     "underscores": 5,
     "marker": "ecolo_ _ _ _ _ ",
     "start": 370,
     "end": 385
    },
    {
     "index": 9,
     "prefix": "obse",
     "answer": "rved",
     "word": "observed",
     "slots": 4,
     "underscores": 4,
     "marker": "obse_ _ _ _ ",
     "start": 390,
     "end": 402
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 动物、生物；群居哺乳动物的社会等级与资源分配。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "access",
     "reason": "n.获取；通路（acc+-ess）"
    },
    {
     "word": "resources",
     "reason": "n.复←resource（资源）"
    },
    {
     "word": "as",
     "reason": "prep.如同"
    },
    {
     "word": "mates",
     "reason": "n.复←mate（配偶；伙伴）"
    },
    {
     "word": "shelter",
     "reason": "n.庇护所"
    },
    {
     "word": "influencing",
     "reason": "n.动名词←influence（影响）"
    },
    {
     "word": "and",
     "reason": "conj.和"
    },
    {
     "word": "success",
     "reason": "n.成功（succeed→success）"
    },
    {
     "word": "ecologists",
     "reason": "n.复←ecologist（生态学家）"
    },
    {
     "word": "observed",
     "reason": "adj.被观察到的（observe→observed，过去分词）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 These hierarchies（主） dictate（谓） access（宾）；修饰：often established through displays of dominance and submission 过去分词短语作定语，修饰 hierarchies；to resources such as food, mates, and shelter 介词短语作后置定语，修饰 access；thereby influencing survival and reproductive success 现在分词短语作结果状语。 - 句② 主干 Behavioral ecologists（主） have observed（谓） that such complex social structures can lead to increased group stability（宾，宾语从句）；修饰：as roles are clearly defined 状语从句，表原因；reducing... and promoting... 现在分词短语作结果状语。"
    }
   ],
   "tags": [
    "生命科学",
    "生物",
    "动物"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260705B",
   "month": "2026年7月",
   "source": "20260705B",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Public Health",
   "discipline": "生命科学",
   "topic": "健康",
   "difficulty": "中等",
   "passage": "Public health is a field that looks at the overall well-being of communities, focusing on how society and individual health are connected. Over ti_ _, public health prog_ _ _ _ have gr_ _ _ from ba_ _ _ efforts li_ _ improving sanit_ _ _ _ _ to inc_ _ _ _ many strat_ _ _ _ _ that de_ _ with soc_ _ _ factors affecting health. This history shows the ongoing challenge of deciding how to use limited resources while facing more and more health problems, such as new diseases and long-term conditions linked to lifestyle. As leaders work to solve these issues, they are realizing the importance of teamwork across different fields.",
   "blanks": [
    {
     "index": 0,
     "prefix": "ti",
     "answer": "me",
     "word": "time",
     "slots": 2,
     "underscores": 2,
     "marker": "ti_ _",
     "start": 144,
     "end": 149
    },
    {
     "index": 1,
     "prefix": "prog",
     "answer": "rams",
     "word": "programs",
     "slots": 4,
     "underscores": 4,
     "marker": "prog_ _ _ _ ",
     "start": 165,
     "end": 177
    },
    {
     "index": 2,
     "prefix": "gr",
     "answer": "own",
     "word": "grown",
     "slots": 3,
     "underscores": 3,
     "marker": "gr_ _ _ ",
     "start": 182,
     "end": 190
    },
    {
     "index": 3,
     "prefix": "ba",
     "answer": "sic",
     "word": "basic",
     "slots": 3,
     "underscores": 3,
     "marker": "ba_ _ _ ",
     "start": 195,
     "end": 203
    },
    {
     "index": 4,
     "prefix": "li",
     "answer": "ke",
     "word": "like",
     "slots": 2,
     "underscores": 2,
     "marker": "li_ _ ",
     "start": 211,
     "end": 217
    },
    {
     "index": 5,
     "prefix": "sanit",
     "answer": "ation",
     "word": "sanitation",
     "slots": 5,
     "underscores": 5,
     "marker": "sanit_ _ _ _ _ ",
     "start": 227,
     "end": 242
    },
    {
     "index": 6,
     "prefix": "inc",
     "answer": "lude",
     "word": "include",
     "slots": 4,
     "underscores": 4,
     "marker": "inc_ _ _ _ ",
     "start": 245,
     "end": 256
    },
    {
     "index": 7,
     "prefix": "strat",
     "answer": "egies",
     "word": "strategies",
     "slots": 5,
     "underscores": 5,
     "marker": "strat_ _ _ _ _ ",
     "start": 261,
     "end": 276
    },
    {
     "index": 8,
     "prefix": "de",
     "answer": "al",
     "word": "deal",
     "slots": 2,
     "underscores": 2,
     "marker": "de_ _ ",
     "start": 281,
     "end": 287
    },
    {
     "index": 9,
     "prefix": "soc",
     "answer": "ial",
     "word": "social",
     "slots": 3,
     "underscores": 3,
     "marker": "soc_ _ _ ",
     "start": 292,
     "end": 301
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 健康；公共卫生的发展历程与社会决定因素。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "time",
     "reason": "n.时间"
    },
    {
     "word": "programs",
     "reason": "n.复←program（项目；计划）"
    },
    {
     "word": "grown",
     "reason": "adj.增长的（grow→grown，过去分词）"
    },
    {
     "word": "basic",
     "reason": "adj.基本的（ba+-sic）"
    },
    {
     "word": "like",
     "reason": "prep.诸如"
    },
    {
     "word": "sanitation",
     "reason": "n.卫生（sanit+-ation）"
    },
    {
     "word": "include",
     "reason": "v.包括"
    },
    {
     "word": "strategies",
     "reason": "n.复←strategy（策略）"
    },
    {
     "word": "deal",
     "reason": "v.处理（deal with）"
    },
    {
     "word": "social",
     "reason": "adj.社会的（society→social）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 public health programs（主） have grown（谓） from basic efforts（状） to include（谓） strategies（宾）；修饰：Over time 介词短语作时间状语；like improving sanitation 介词短语作后置定语，修饰 efforts；that deal with social factors affecting health 定语从句，修饰 strategies（affecting 现在分词修饰 factors）。"
    }
   ],
   "tags": [
    "生命科学",
    "健康"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260705C",
   "month": "2026年7月",
   "source": "20260705C",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Air Pressure Systems",
   "discipline": "自然科学",
   "topic": "环境科学",
   "difficulty": "困难",
   "passage": "Atmospheric pressure plays a critical role in weather systems. High-pressure zones bring clear, calm conditions due to descending air that inhibits cloud formation. In low-pressure systems, warm air rises, cools, and condenses into clouds, wh_ _ _ can le_ _ to precip_ _ _ _ _ _ _. Barometric pressure varia_ _ _ _ _ help meteoro_ _ _ _ _ _ _ improve fore_ _ _ _ _, as ra_ _ _ fluctuations of_ _ _ signal appro_ _ _ _ _ _ storms. Adva_ _ _ _ models use atmospheric force gradients, temperature, and humidity to predict storm movement and intensity, providing vital information for both short-term weather outlooks and long-term climate assessments.",
   "blanks": [
    {
     "index": 0,
     "prefix": "wh",
     "answer": "ich",
     "word": "which",
     "slots": 3,
     "underscores": 3,
     "marker": "wh_ _ _ ",
     "start": 240,
     "end": 248
    },
    {
     "index": 1,
     "prefix": "le",
     "answer": "ad",
     "word": "lead",
     "slots": 2,
     "underscores": 2,
     "marker": "le_ _ ",
     "start": 252,
     "end": 258
    },
    {
     "index": 2,
     "prefix": "precip",
     "answer": "itation",
     "word": "precipitation",
     "slots": 7,
     "underscores": 7,
     "marker": "precip_ _ _ _ _ _ _",
     "start": 261,
     "end": 280
    },
    {
     "index": 3,
     "prefix": "varia",
     "answer": "tions",
     "word": "variations",
     "slots": 5,
     "underscores": 5,
     "marker": "varia_ _ _ _ _ ",
     "start": 302,
     "end": 317
    },
    {
     "index": 4,
     "prefix": "meteoro",
     "answer": "logists",
     "word": "meteorologists",
     "slots": 7,
     "underscores": 7,
     "marker": "meteoro_ _ _ _ _ _ _ ",
     "start": 322,
     "end": 343
    },
    {
     "index": 5,
     "prefix": "fore",
     "answer": "casts",
     "word": "forecasts",
     "slots": 5,
     "underscores": 5,
     "marker": "fore_ _ _ _ _",
     "start": 351,
     "end": 364
    },
    {
     "index": 6,
     "prefix": "ra",
     "answer": "pid",
     "word": "rapid",
     "slots": 3,
     "underscores": 3,
     "marker": "ra_ _ _ ",
     "start": 369,
     "end": 377
    },
    {
     "index": 7,
     "prefix": "of",
     "answer": "ten",
     "word": "often",
     "slots": 3,
     "underscores": 3,
     "marker": "of_ _ _ ",
     "start": 390,
     "end": 398
    },
    {
     "index": 8,
     "prefix": "appro",
     "answer": "aching",
     "word": "approaching",
     "slots": 6,
     "underscores": 6,
     "marker": "appro_ _ _ _ _ _ ",
     "start": 405,
     "end": 422
    },
    {
     "index": 9,
     "prefix": "Adva",
     "answer": "nced",
     "word": "Advanced",
     "slots": 4,
     "underscores": 4,
     "marker": "Adva_ _ _ _ ",
     "start": 430,
     "end": 442
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 气候气象、环境科学；气压系统、降水与天气预报。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "which",
     "reason": "pron.关系代词 ⚠ greedy 整行前缀重复，已据 frags 校正"
    },
    {
     "word": "lead",
     "reason": "v.导致 ⚠ greedy 整行错位"
    },
    {
     "word": "precipitation",
     "reason": "n.降水 ⚠ greedy 整行错位"
    },
    {
     "word": "variations",
     "reason": "n.复←variation（变化） ⚠ greedy 整行错位"
    },
    {
     "word": "meteorologists",
     "reason": "n.复←meteorologist（气象学家） ⚠ greedy 整行错位"
    },
    {
     "word": "forecasts",
     "reason": "n.复←forecast（预报） ⚠ greedy 整行错位"
    },
    {
     "word": "rapid",
     "reason": "adj.迅速的 ⚠ greedy 整行错位"
    },
    {
     "word": "often",
     "reason": "adv.常常 ⚠ greedy 整行错位"
    },
    {
     "word": "approaching",
     "reason": "adj.逼近的（approach→approaching，现在分词） ⚠ greedy 整行错位"
    },
    {
     "word": "Advanced",
     "reason": "adj.先进的（advance→advanced） ⚠ greedy 整行错位"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 warm air（主） rises, cools, and condenses（谓） into clouds（宾）；修饰：which can lead to precipitation 定语从句，修饰 clouds。 - 句② 主干 Barometric pressure variations（主） help（谓） meteorologists（宾／兼语） improve forecasts（宾补）；修饰：as rapid fluctuations often signal approaching storms 状语从句，表伴随／原因。 - 句③ 主干 Advanced models（主） use（谓） gradients, temperature, and humidity（宾）；修饰：to predict storm movement and intensity 不定式短语作目的状语；providing vital information for both short-term weather outlooks and long-term climate assessments 现在分词短语作结果状语。"
    }
   ],
   "tags": [
    "自然科学",
    "环境科学",
    "气候气象"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260707A",
   "month": "2026年7月",
   "source": "20260707A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Industrial Revolution",
   "discipline": "社会科学",
   "topic": "历史",
   "difficulty": "中等",
   "passage": "The Industrial Revolution profoundly transformed North America, spurring urban growth through technology and immigration. Many advancements boosted connectivity, accelerating commerce and communication. Yet, urbanization brought chall_ _ _ _ _ like overcr_ _ _ _ _ _, poor infrast_ _ _ _ _ _ _, and soc_ _ _ inequality. Histo_ _ _ _ _ debate whe_ _ _ _ these cha_ _ _ _ fostered mod_ _ _ prosperity o_ deepened divi_ _ _ _ _ in society. The era's complex legacy continues to prompt scholarly inquiry, revealing how industrialization shaped North America's development and raised enduring questions about progress, equity, and the long-term impact of technological and economic transformation.",
   "blanks": [
    {
     "index": 0,
     "prefix": "chall",
     "answer": "enges",
     "word": "challenges",
     "slots": 5,
     "underscores": 5,
     "marker": "chall_ _ _ _ _ ",
     "start": 229,
     "end": 244
    },
    {
     "index": 1,
     "prefix": "overcr",
     "answer": "owding",
     "word": "overcrowding",
     "slots": 6,
     "underscores": 6,
     "marker": "overcr_ _ _ _ _ _",
     "start": 249,
     "end": 266
    },
    {
     "index": 2,
     "prefix": "infrast",
     "answer": "ructure",
     "word": "infrastructure",
     "slots": 7,
     "underscores": 7,
     "marker": "infrast_ _ _ _ _ _ _",
     "start": 273,
     "end": 293
    },
    {
     "index": 3,
     "prefix": "soc",
     "answer": "ial",
     "word": "social",
     "slots": 3,
     "underscores": 3,
     "marker": "soc_ _ _ ",
     "start": 299,
     "end": 308
    },
    {
     "index": 4,
     "prefix": "Histo",
     "answer": "rians",
     "word": "Historians",
     "slots": 5,
     "underscores": 5,
     "marker": "Histo_ _ _ _ _ ",
     "start": 320,
     "end": 335
    },
    {
     "index": 5,
     "prefix": "whe",
     "answer": "ther",
     "word": "whether",
     "slots": 4,
     "underscores": 4,
     "marker": "whe_ _ _ _ ",
     "start": 342,
     "end": 353
    },
    {
     "index": 6,
     "prefix": "cha",
     "answer": "nges",
     "word": "changes",
     "slots": 4,
     "underscores": 4,
     "marker": "cha_ _ _ _ ",
     "start": 359,
     "end": 370
    },
    {
     "index": 7,
     "prefix": "mod",
     "answer": "ern",
     "word": "modern",
     "slots": 3,
     "underscores": 3,
     "marker": "mod_ _ _ ",
     "start": 379,
     "end": 388
    },
    {
     "index": 8,
     "prefix": "o",
     "answer": "r",
     "word": "or",
     "slots": 1,
     "underscores": 1,
     "marker": "o_ ",
     "start": 399,
     "end": 402
    },
    {
     "index": 9,
     "prefix": "divi",
     "answer": "sions",
     "word": "divisions",
     "slots": 5,
     "underscores": 5,
     "marker": "divi_ _ _ _ _ ",
     "start": 411,
     "end": 425
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 技术史、历史；工业革命、城市化及其社会影响。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "challenges",
     "reason": "n.复←challenge（挑战）"
    },
    {
     "word": "overcrowding",
     "reason": "n.过度拥挤（overcrowd→overcrowding）"
    },
    {
     "word": "infrastructure",
     "reason": "n.基础设施（infrast+-ructure）"
    },
    {
     "word": "social",
     "reason": "adj.社会的（soc+-ial）"
    },
    {
     "word": "Historians",
     "reason": "n.复←Historian（历史学家）"
    },
    {
     "word": "whether",
     "reason": "conj.是否"
    },
    {
     "word": "changes",
     "reason": "n.复←change（变化）"
    },
    {
     "word": "modern",
     "reason": "adj.现代的（mod+-ern）"
    },
    {
     "word": "or",
     "reason": "conj.或者"
    },
    {
     "word": "divisions",
     "reason": "n.复←division（分化；分歧）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 urbanization（主） brought（谓） challenges（宾）；修饰：like overcrowding, poor infrastructure, and social inequality 介词短语作后置定语，修饰 challenges。 - 句② 主干 Historians（主） debate（谓） whether these changes fostered modern prosperity or deepened divisions（宾，宾语从句）；修饰：in society 介词短语作后置定语，修饰 divisions。"
    }
   ],
   "tags": [
    "社会科学",
    "历史",
    "技术史"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260708A",
   "month": "2026年7月",
   "source": "20260708A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Film Industry",
   "discipline": "社会科学",
   "topic": "应用社科",
   "difficulty": "中等",
   "passage": "The evolution of the film industry has been shaped by major technological shifts, especially the move from silent films to movies with sound. In the silent era, filmmakers relied entirely on visual storytelling, using expressive acting and title cards to convey dialogue and emotion. The introd_ _ _ _ _ _ of synchronized so_ _ _—where au_ _ _ was mat_ _ _ _ precisely wi_ _ the mov_ _ _ image—all_ _ _ _ audiences t_ hear act_ _ _ speak f_ _ the first time, transforming the cinematic experience. This breakthrough laid the foundation for later innovations like CGI and immersive sound design, expanding how stories could be told on screen.",
   "blanks": [
    {
     "index": 0,
     "prefix": "introd",
     "answer": "uction",
     "word": "introduction",
     "slots": 6,
     "underscores": 6,
     "marker": "introd_ _ _ _ _ _ ",
     "start": 288,
     "end": 306
    },
    {
     "index": 1,
     "prefix": "so",
     "answer": "und",
     "word": "sound",
     "slots": 3,
     "underscores": 3,
     "marker": "so_ _ _",
     "start": 322,
     "end": 329
    },
    {
     "index": 2,
     "prefix": "au",
     "answer": "dio",
     "word": "audio",
     "slots": 3,
     "underscores": 3,
     "marker": "au_ _ _ ",
     "start": 336,
     "end": 344
    },
    {
     "index": 3,
     "prefix": "mat",
     "answer": "ched",
     "word": "matched",
     "slots": 4,
     "underscores": 4,
     "marker": "mat_ _ _ _ ",
     "start": 348,
     "end": 359
    },
    {
     "index": 4,
     "prefix": "wi",
     "answer": "th",
     "word": "with",
     "slots": 2,
     "underscores": 2,
     "marker": "wi_ _ ",
     "start": 369,
     "end": 375
    },
    {
     "index": 5,
     "prefix": "mov",
     "answer": "ing",
     "word": "moving",
     "slots": 3,
     "underscores": 3,
     "marker": "mov_ _ _ ",
     "start": 379,
     "end": 388
    },
    {
     "index": 6,
     "prefix": "all",
     "answer": "owed",
     "word": "allowed",
     "slots": 4,
     "underscores": 4,
     "marker": "all_ _ _ _ ",
     "start": 394,
     "end": 405
    },
    {
     "index": 7,
     "prefix": "t",
     "answer": "o",
     "word": "to",
     "slots": 1,
     "underscores": 1,
     "marker": "t_ ",
     "start": 415,
     "end": 418
    },
    {
     "index": 8,
     "prefix": "act",
     "answer": "ors",
     "word": "actors",
     "slots": 3,
     "underscores": 3,
     "marker": "act_ _ _ ",
     "start": 423,
     "end": 432
    },
    {
     "index": 9,
     "prefix": "f",
     "answer": "or",
     "word": "for",
     "slots": 2,
     "underscores": 2,
     "marker": "f_ _ ",
     "start": 438,
     "end": 443
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 应用社科；电影工业技术演进、声音同步技术与观影体验变革"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "introduction",
     "reason": "n.引入←introduce"
    },
    {
     "word": "sound",
     "reason": "n.声音"
    },
    {
     "word": "audio",
     "reason": "n.音频"
    },
    {
     "word": "matched",
     "reason": "v.过去式←match（匹配）"
    },
    {
     "word": "with",
     "reason": "prep.具有／带着"
    },
    {
     "word": "moving",
     "reason": "adj.移动的←move（现在分词作定语）"
    },
    {
     "word": "allowed",
     "reason": "v.过去式←allow（使能够）"
    },
    {
     "word": "to",
     "reason": "prep.向／不定式标记"
    },
    {
     "word": "actors",
     "reason": "n.复←actor（演员）"
    },
    {
     "word": "for",
     "reason": "prep.为了／对于"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 The introduction of synchronized sound（主）allowed（谓）audiences（宾）；修饰：where audio was matched precisely with the moving image 定语从句（where 引导）修饰 sound／image；to hear actors speak for the first time 不定式短语作宾语 audiences 的补足语；transforming the cinematic experience 现在分词短语作结果状语。"
    }
   ],
   "tags": [
    "社会科学",
    "应用社科"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260708B",
   "month": "2026年7月",
   "source": "20260708B / 20260720B",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Color Perception",
   "discipline": "社会科学",
   "topic": "心理学",
   "difficulty": "中等",
   "passage": "Color perception has fascinated scientists and artists alike for centuries. The study of pigments, subst_ _ _ _ _ that gi_ _ color t_ materials, rev_ _ _ _ complex intera_ _ _ _ _ _ with li_ _ _. Pigments abs_ _ _ certain wavel_ _ _ _ _ _ and ref_ _ _ _ others, wh_ _ _ is why objects appear to have color. Synthetic pigments have expanded the color palette available to artists and industries. The development of pigments requires knowledge of chemistry and physics, as their properties influence durability and appearance. Understanding how pigments behave is crucial in various fields, from art restoration to manufacturing.",
   "blanks": [
    {
     "index": 0,
     "prefix": "subst",
     "answer": "ances",
     "word": "substances",
     "slots": 5,
     "underscores": 5,
     "marker": "subst_ _ _ _ _ ",
     "start": 99,
     "end": 114
    },
    {
     "index": 1,
     "prefix": "gi",
     "answer": "ve",
     "word": "give",
     "slots": 2,
     "underscores": 2,
     "marker": "gi_ _ ",
     "start": 119,
     "end": 125
    },
    {
     "index": 2,
     "prefix": "t",
     "answer": "o",
     "word": "to",
     "slots": 1,
     "underscores": 1,
     "marker": "t_ ",
     "start": 131,
     "end": 134
    },
    {
     "index": 3,
     "prefix": "rev",
     "answer": "eals",
     "word": "reveals",
     "slots": 4,
     "underscores": 4,
     "marker": "rev_ _ _ _ ",
     "start": 145,
     "end": 156
    },
    {
     "index": 4,
     "prefix": "intera",
     "answer": "ctions",
     "word": "interactions",
     "slots": 6,
     "underscores": 6,
     "marker": "intera_ _ _ _ _ _ ",
     "start": 164,
     "end": 182
    },
    {
     "index": 5,
     "prefix": "li",
     "answer": "ght",
     "word": "light",
     "slots": 3,
     "underscores": 3,
     "marker": "li_ _ _",
     "start": 187,
     "end": 194
    },
    {
     "index": 6,
     "prefix": "abs",
     "answer": "orb",
     "word": "absorb",
     "slots": 3,
     "underscores": 3,
     "marker": "abs_ _ _ ",
     "start": 205,
     "end": 214
    },
    {
     "index": 7,
     "prefix": "wavel",
     "answer": "engths",
     "word": "wavelengths",
     "slots": 6,
     "underscores": 6,
     "marker": "wavel_ _ _ _ _ _ ",
     "start": 222,
     "end": 239
    },
    {
     "index": 8,
     "prefix": "ref",
     "answer": "lect",
     "word": "reflect",
     "slots": 4,
     "underscores": 4,
     "marker": "ref_ _ _ _ ",
     "start": 243,
     "end": 254
    },
    {
     "index": 9,
     "prefix": "wh",
     "answer": "ich",
     "word": "which",
     "slots": 3,
     "underscores": 3,
     "marker": "wh_ _ _ ",
     "start": 262,
     "end": 270
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 认知心理学、心理学；颜色感知、色素作用与光波反射"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "substances",
     "reason": "n.复←substance（物质）"
    },
    {
     "word": "give",
     "reason": "v.给予"
    },
    {
     "word": "to",
     "reason": "prep.向／到"
    },
    {
     "word": "reveals",
     "reason": "v.三单←reveal（揭示）"
    },
    {
     "word": "interactions",
     "reason": "n.复←interaction（相互作用）"
    },
    {
     "word": "light",
     "reason": "n.光"
    },
    {
     "word": "absorb",
     "reason": "v.吸收"
    },
    {
     "word": "wavelengths",
     "reason": "n.复←wavelength（波长）"
    },
    {
     "word": "reflect",
     "reason": "v.反射"
    },
    {
     "word": "which",
     "reason": "pron.／conj.引导定语从句"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 The study of pigments（主）reveals（谓）complex interactions（宾）；修饰：substances that give color to materials 同位语（含 that 定语从句）解释 pigments；with light 介词短语作后置定语修饰 interactions。 - 句② 主干 Pigments（主）absorb（谓）certain wavelengths（宾）and reflect（谓）others（宾）；修饰：which is why objects appear to have color 非限制性定语从句（which 指代前句）修饰主句。"
    }
   ],
   "tags": [
    "社会科学",
    "心理学",
    "认知心理学"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260708B-2",
   "month": "2026年7月",
   "source": "20260708B",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Critical Thinking",
   "discipline": "社会科学",
   "topic": "心理学",
   "difficulty": "困难",
   "passage": "Critical thinking is a vital skill that involves analyzing information objectively and making reasoned judgments.This process requ_ _ _ _ a clear, rati_ _ _ _ approach t_ problem-solving, wh_ _ _ one asse_ _ _ _ evidence.ident_ _ _ _ _ biases, a_ _ evaluates argu_ _ _ _ _.Critical thin_ _ _ _ are ab_ _ to distinguish between fact and opinion, and they ask probing questions to gain deeper insights. In academic contexts, this skill helps students develop well-founded conclusions and become more effective learners. Encouraging critical thinking is essential for fostering intellectual growth and informed decision-making.",
   "blanks": [
    {
     "index": 0,
     "prefix": "requ",
     "answer": "ires",
     "word": "requires",
     "slots": 4,
     "underscores": 4,
     "marker": "requ_ _ _ _ ",
     "start": 126,
     "end": 138
    },
    {
     "index": 1,
     "prefix": "rati",
     "answer": "onal",
     "word": "rational",
     "slots": 4,
     "underscores": 4,
     "marker": "rati_ _ _ _ ",
     "start": 147,
     "end": 159
    },
    {
     "index": 2,
     "prefix": "t",
     "answer": "o",
     "word": "to",
     "slots": 1,
     "underscores": 1,
     "marker": "t_ ",
     "start": 168,
     "end": 171
    },
    {
     "index": 3,
     "prefix": "wh",
     "answer": "ere",
     "word": "where",
     "slots": 3,
     "underscores": 3,
     "marker": "wh_ _ _ ",
     "start": 188,
     "end": 196
    },
    {
     "index": 4,
     "prefix": "asse",
     "answer": "sses",
     "word": "assesses",
     "slots": 4,
     "underscores": 4,
     "marker": "asse_ _ _ _ ",
     "start": 200,
     "end": 212
    },
    {
     "index": 5,
     "prefix": "ident",
     "answer": "ifies",
     "word": "identifies",
     "slots": 5,
     "underscores": 5,
     "marker": "ident_ _ _ _ _ ",
     "start": 221,
     "end": 236
    },
    {
     "index": 6,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 244,
     "end": 249
    },
    {
     "index": 7,
     "prefix": "argu",
     "answer": "ments",
     "word": "arguments",
     "slots": 5,
     "underscores": 5,
     "marker": "argu_ _ _ _ _",
     "start": 259,
     "end": 272
    },
    {
     "index": 8,
     "prefix": "thin",
     "answer": "king",
     "word": "thinking",
     "slots": 4,
     "underscores": 4,
     "marker": "thin_ _ _ _ ",
     "start": 282,
     "end": 294
    },
    {
     "index": 9,
     "prefix": "ab",
     "answer": "le",
     "word": "able",
     "slots": 2,
     "underscores": 2,
     "marker": "ab_ _ ",
     "start": 298,
     "end": 304
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 发展心理学、心理学；批判性思维、理性分析与证据评估"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "requires",
     "reason": "v.三单←require（需要）"
    },
    {
     "word": "rational",
     "reason": "adj.合理的 ⚠片段列／AB 误为 retional，应为 rational（前缀 reti 应为 rati）"
    },
    {
     "word": "to",
     "reason": "prep.向／到"
    },
    {
     "word": "where",
     "reason": "adv.／conj.引导定语从句"
    },
    {
     "word": "assesses",
     "reason": "v.三单←assess（评估）"
    },
    {
     "word": "identifies",
     "reason": "v.三单←identify（识别）"
    },
    {
     "word": "and",
     "reason": "conj.和"
    },
    {
     "word": "arguments",
     "reason": "n.复←argument（论点）"
    },
    {
     "word": "thinking",
     "reason": "n.思考←think（动名词）"
    },
    {
     "word": "able",
     "reason": "adj.能够的"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 This process（主）requires（谓）a rational approach（宾）；修饰：to problem-solving 介词短语作后置定语修饰 approach；where one assesses evidence, identifies biases, and evaluates arguments 定语从句（where 引导）修饰 approach／process。 - 句② 主干 Critical thinking（主）are（系谓）able（表）；修饰：to distinguish between fact and opinion 不定式短语作 able 的补足语（说明内容）。"
    }
   ],
   "tags": [
    "社会科学",
    "心理学",
    "发展心理学"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260715A",
   "month": "2026年7月",
   "source": "20260715A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Aquariums",
   "discipline": "生命科学",
   "topic": "生物",
   "difficulty": "中等",
   "passage": "Aquariums provide an opportunity to observe a variety of fish and other aquatic organisms in a controlled environment.These facil_ _ _ _ _ carefully repli_ _ _ _ natural habi_ _ _ _ , allowing visi_ _ _ _ _ to le_ _ _ about mar_ _ _ life with__ _ _ venturing in_ _ the oc_ _ _.Exhibits of_ _ _ include coral reefs,kelp forests, and freshwater streams, showcasing the diversity of aquatic ecosystems.Educational programs and guided tours enhance the experience, offering insights into the behavior, diet,and conversation of these organisms.,Maintaining an aquarium requires expertise in water chemistry, filtration systems,and species compatibility.",
   "blanks": [
    {
     "index": 0,
     "prefix": "facil",
     "answer": "ities",
     "word": "facilities",
     "slots": 5,
     "underscores": 5,
     "marker": "facil_ _ _ _ _ ",
     "start": 124,
     "end": 139
    },
    {
     "index": 1,
     "prefix": "repli",
     "answer": "cate",
     "word": "replicate",
     "slots": 4,
     "underscores": 4,
     "marker": "repli_ _ _ _ ",
     "start": 149,
     "end": 162
    },
    {
     "index": 2,
     "prefix": "habi",
     "answer": "tats",
     "word": "habitats",
     "slots": 4,
     "underscores": 4,
     "marker": "habi_ _ _ _ ",
     "start": 170,
     "end": 182
    },
    {
     "index": 3,
     "prefix": "visi",
     "answer": "tors",
     "word": "visitors",
     "slots": 4,
     "underscores": 5,
     "marker": "visi_ _ _ _ _ ",
     "start": 193,
     "end": 207
    },
    {
     "index": 4,
     "prefix": "le",
     "answer": "arn",
     "word": "learn",
     "slots": 3,
     "underscores": 3,
     "marker": "le_ _ _ ",
     "start": 210,
     "end": 218
    },
    {
     "index": 5,
     "prefix": "mar",
     "answer": "ine",
     "word": "marine",
     "slots": 3,
     "underscores": 3,
     "marker": "mar_ _ _ ",
     "start": 224,
     "end": 233
    },
    {
     "index": 6,
     "prefix": "with",
     "answer": "out",
     "word": "without",
     "slots": 3,
     "underscores": 4,
     "marker": "with__ _ _ ",
     "start": 238,
     "end": 249
    },
    {
     "index": 7,
     "prefix": "in",
     "answer": "to",
     "word": "into",
     "slots": 2,
     "underscores": 2,
     "marker": "in_ _ ",
     "start": 259,
     "end": 265
    },
    {
     "index": 8,
     "prefix": "oc",
     "answer": "ean",
     "word": "ocean",
     "slots": 3,
     "underscores": 3,
     "marker": "oc_ _ _",
     "start": 269,
     "end": 276
    },
    {
     "index": 9,
     "prefix": "of",
     "answer": "ten",
     "word": "often",
     "slots": 3,
     "underscores": 3,
     "marker": "of_ _ _ ",
     "start": 286,
     "end": 294
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 动物、生物；水族馆生态展示、海洋生物观察与公众教育"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "facilities",
     "reason": "n.复←facility（设施）"
    },
    {
     "word": "replicate",
     "reason": "v.复制／重现"
    },
    {
     "word": "habitats",
     "reason": "n.复←habitat（栖息地）"
    },
    {
     "word": "visitors",
     "reason": "n.复←visitor（访客）"
    },
    {
     "word": "learn",
     "reason": "v.学习"
    },
    {
     "word": "marine",
     "reason": "adj.海洋的"
    },
    {
     "word": "without",
     "reason": "prep.没有／不"
    },
    {
     "word": "into",
     "reason": "prep.进入"
    },
    {
     "word": "ocean",
     "reason": "n.海洋"
    },
    {
     "word": "often",
     "reason": "adv.经常"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 These facilities（主）replicate（谓）natural habitats（宾）；修饰：allowing visitors to learn about marine life without venturing into the ocean 现在分词短语作结果状语；about marine life 介词短语作 learn 的状语；without venturing into the ocean 介词短语（without＋动名词）作方式／条件状语。 - 句② 主干 Exhibits（主）include（谓）coral reefs, kelp forests, and freshwater streams（宾）；修饰：showcasing the diversity of aquatic ecosystems 现在分词短语作结果／伴随状语。"
    }
   ],
   "tags": [
    "生命科学",
    "生物",
    "动物"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260715A-2",
   "month": "2026年5月",
   "source": "20260715A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Human Brain Structure",
   "discipline": "生命科学",
   "topic": "生理",
   "difficulty": "中等",
   "passage": "The human brain is an extraordinary intricate organ, unrivaled in its complexity and function.Studying its anatomy reveals a remarkable internal architecture, composed of billions of neurons intricately interconnected by synapses.These neurons tran_ _ _ _ electrical impu_ _ _ _ , facilitating t_ _ brain's ro_ _ in enab_ _ _ _ cognition, proce_ _ _ _ __ information, regul_ _ _ _ _ _ essential bod_ _ _ functions,a_ _ facilitating emot_ _ _ _.The reflective nature of studying the brain encourages careful consideration of how its structure impacts behavior and thought.",
   "blanks": [
    {
     "index": 0,
     "prefix": "tran",
     "answer": "smit",
     "word": "transmit",
     "slots": 4,
     "underscores": 4,
     "marker": "tran_ _ _ _ ",
     "start": 244,
     "end": 256
    },
    {
     "index": 1,
     "prefix": "impu",
     "answer": "lses",
     "word": "impulses",
     "slots": 4,
     "underscores": 4,
     "marker": "impu_ _ _ _ ",
     "start": 267,
     "end": 279
    },
    {
     "index": 2,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "underscores": 2,
     "marker": "t_ _ ",
     "start": 294,
     "end": 299
    },
    {
     "index": 3,
     "prefix": "ro",
     "answer": "le",
     "word": "role",
     "slots": 2,
     "underscores": 2,
     "marker": "ro_ _ ",
     "start": 307,
     "end": 313
    },
    {
     "index": 4,
     "prefix": "enab",
     "answer": "ling",
     "word": "enabling",
     "slots": 4,
     "underscores": 4,
     "marker": "enab_ _ _ _ ",
     "start": 316,
     "end": 328
    },
    {
     "index": 5,
     "prefix": "proce",
     "answer": "ssing",
     "word": "processing",
     "slots": 5,
     "underscores": 6,
     "marker": "proce_ _ _ _ __ ",
     "start": 339,
     "end": 355
    },
    {
     "index": 6,
     "prefix": "regul",
     "answer": "ating",
     "word": "regulating",
     "slots": 5,
     "underscores": 6,
     "marker": "regul_ _ _ _ _ _ ",
     "start": 368,
     "end": 385
    },
    {
     "index": 7,
     "prefix": "bod",
     "answer": "ily",
     "word": "bodily",
     "slots": 3,
     "underscores": 3,
     "marker": "bod_ _ _ ",
     "start": 395,
     "end": 404
    },
    {
     "index": 8,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 414,
     "end": 419
    },
    {
     "index": 9,
     "prefix": "emot",
     "answer": "ions",
     "word": "emotions",
     "slots": 4,
     "underscores": 4,
     "marker": "emot_ _ _ _",
     "start": 432,
     "end": 443
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 神经、生理；人脑结构、神经元信号传递与认知功能"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "transmit",
     "reason": "v.传递"
    },
    {
     "word": "impulses",
     "reason": "n.复←impulse（脉冲／冲动）"
    },
    {
     "word": "the",
     "reason": "art.定冠词"
    },
    {
     "word": "role",
     "reason": "n.角色／作用"
    },
    {
     "word": "enabling",
     "reason": "v.现在分词←enable（使能够）"
    },
    {
     "word": "processing",
     "reason": "v.现在分词←process（处理）"
    },
    {
     "word": "regulating",
     "reason": "v.现在分词←regulate（调节）"
    },
    {
     "word": "bodily",
     "reason": "adj.身体的←body（body→bodily）"
    },
    {
     "word": "and",
     "reason": "conj.和"
    },
    {
     "word": "emotions",
     "reason": "n.复←emotion（情绪）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 These neurons（主）transmit（谓）electrical impulses（宾）；修饰：facilitating the brain's role in enabling cognition, processing information, regulating essential bodily functions, and facilitating emotions 现在分词短语作结果状语；in enabling cognition 介词短语作 role 的后置定语（enabling cognition 为动名词短语）。"
    }
   ],
   "tags": [
    "生命科学",
    "生理",
    "神经"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260720A",
   "month": "2026年7月",
   "source": "20260720A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Animal Communication",
   "discipline": "生命科学",
   "topic": "生物",
   "difficulty": "中等",
   "passage": "In the complex social structures of many terrestrial mammals, communication plays an essential role in maintaining group cohesion and ensuring survival. For example, elephants use diff_ _ _ _ _ sounds, incl_ _ _ _ _ infrasonic ca_ _ _ that tra_ _ _ long dist_ _ _ _ _, to he_ _ them mo_ _ together a_ _ warn ea_ _ other ab_ _ _ danger. Similarly, prairie dogs employ a sophisticated system of vocalizations to share information about predator types, size, and speed. These communicative behaviors are critical, as they allow individual animals to respond promptly to threats and sustain group unity.",
   "blanks": [
    {
     "index": 0,
     "prefix": "diff",
     "answer": "erent",
     "word": "different",
     "slots": 5,
     "underscores": 5,
     "marker": "diff_ _ _ _ _ ",
     "start": 180,
     "end": 194
    },
    {
     "index": 1,
     "prefix": "incl",
     "answer": "uding",
     "word": "including",
     "slots": 5,
     "underscores": 5,
     "marker": "incl_ _ _ _ _ ",
     "start": 202,
     "end": 216
    },
    {
     "index": 2,
     "prefix": "ca",
     "answer": "lls",
     "word": "calls",
     "slots": 3,
     "underscores": 3,
     "marker": "ca_ _ _ ",
     "start": 227,
     "end": 235
    },
    {
     "index": 3,
     "prefix": "tra",
     "answer": "vel",
     "word": "travel",
     "slots": 3,
     "underscores": 3,
     "marker": "tra_ _ _ ",
     "start": 240,
     "end": 249
    },
    {
     "index": 4,
     "prefix": "dist",
     "answer": "ances",
     "word": "distances",
     "slots": 5,
     "underscores": 5,
     "marker": "dist_ _ _ _ _",
     "start": 254,
     "end": 267
    },
    {
     "index": 5,
     "prefix": "he",
     "answer": "lp",
     "word": "help",
     "slots": 2,
     "underscores": 2,
     "marker": "he_ _ ",
     "start": 272,
     "end": 278
    },
    {
     "index": 6,
     "prefix": "mo",
     "answer": "ve",
     "word": "move",
     "slots": 2,
     "underscores": 2,
     "marker": "mo_ _ ",
     "start": 283,
     "end": 289
    },
    {
     "index": 7,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 298,
     "end": 303
    },
    {
     "index": 8,
     "prefix": "ea",
     "answer": "ch",
     "word": "each",
     "slots": 2,
     "underscores": 2,
     "marker": "ea_ _ ",
     "start": 308,
     "end": 314
    },
    {
     "index": 9,
     "prefix": "ab",
     "answer": "out",
     "word": "about",
     "slots": 3,
     "underscores": 3,
     "marker": "ab_ _ _ ",
     "start": 320,
     "end": 328
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 动物、生物；哺乳动物交流、声音传播与群体协作"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "different",
     "reason": "adj.不同的"
    },
    {
     "word": "including",
     "reason": "prep.／v.现在分词←include（包括）"
    },
    {
     "word": "calls",
     "reason": "n.复←call（叫声）"
    },
    {
     "word": "travel",
     "reason": "v.传播／旅行"
    },
    {
     "word": "distances",
     "reason": "n.复←distance（距离）"
    },
    {
     "word": "help",
     "reason": "v.帮助"
    },
    {
     "word": "move",
     "reason": "v.移动"
    },
    {
     "word": "and",
     "reason": "conj.和"
    },
    {
     "word": "each",
     "reason": "pron.每个（each other 互相）"
    },
    {
     "word": "about",
     "reason": "prep.关于"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 elephants（主）use（谓）different sounds（宾）；修饰：including infrasonic calls that travel long distances 介词／现在分词短语作后置定语修饰 sounds（含 that 定语从句修饰 calls）；to help them move together and warn each other about danger 不定式短语作目的状语（move together 与 warn each other 并列）。"
    }
   ],
   "tags": [
    "生命科学",
    "生物",
    "动物"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260721B",
   "month": "2026年7月",
   "source": "20260721B",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Animal Sociality",
   "discipline": "生命科学",
   "topic": "生态",
   "difficulty": "中等",
   "passage": "Understanding the complex social structures and behaviors exhibited by terrestrial mammals is crucial for both conservation efforts and enhancing our comprehension of evolutionary processes. Many mammals, such as elephants and primates, display intr_ _ _ _ _ communication sys_ _ _ _ and soc_ _ _ hierarchies th_ _ facilitate coope_ _ _ _ _ _ and surv_ _ _ _. These act_ _ _ _ are n_ _ merely inst_ _ _ _ _; they a_ _ dynamic responses to environmental pressures, showcasing adaptability and intelligence. By studying these animals, researchers can gain insights into the fundamental mechanisms behind social organization and behavioral adaptation.",
   "blanks": [
    {
     "index": 0,
     "prefix": "intr",
     "answer": "icate",
     "word": "intricate",
     "slots": 5,
     "underscores": 5,
     "marker": "intr_ _ _ _ _ ",
     "start": 245,
     "end": 259
    },
    {
     "index": 1,
     "prefix": "sys",
     "answer": "tems",
     "word": "systems",
     "slots": 4,
     "underscores": 4,
     "marker": "sys_ _ _ _ ",
     "start": 273,
     "end": 284
    },
    {
     "index": 2,
     "prefix": "soc",
     "answer": "ial",
     "word": "social",
     "slots": 3,
     "underscores": 3,
     "marker": "soc_ _ _ ",
     "start": 288,
     "end": 297
    },
    {
     "index": 3,
     "prefix": "th",
     "answer": "at",
     "word": "that",
     "slots": 2,
     "underscores": 2,
     "marker": "th_ _ ",
     "start": 309,
     "end": 315
    },
    {
     "index": 4,
     "prefix": "coope",
     "answer": "ration",
     "word": "cooperation",
     "slots": 6,
     "underscores": 6,
     "marker": "coope_ _ _ _ _ _ ",
     "start": 326,
     "end": 343
    },
    {
     "index": 5,
     "prefix": "surv",
     "answer": "ival",
     "word": "survival",
     "slots": 4,
     "underscores": 4,
     "marker": "surv_ _ _ _",
     "start": 347,
     "end": 358
    },
    {
     "index": 6,
     "prefix": "act",
     "answer": "ions",
     "word": "actions",
     "slots": 4,
     "underscores": 4,
     "marker": "act_ _ _ _ ",
     "start": 366,
     "end": 377
    },
    {
     "index": 7,
     "prefix": "n",
     "answer": "ot",
     "word": "not",
     "slots": 2,
     "underscores": 2,
     "marker": "n_ _ ",
     "start": 381,
     "end": 386
    },
    {
     "index": 8,
     "prefix": "inst",
     "answer": "incts",
     "word": "instincts",
     "slots": 5,
     "underscores": 5,
     "marker": "inst_ _ _ _ _",
     "start": 393,
     "end": 406
    },
    {
     "index": 9,
     "prefix": "a",
     "answer": "re",
     "word": "are",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 413,
     "end": 418
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 物种保护、生态；哺乳动物社会性、交流系统与合作行为"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "intricate",
     "reason": "adj.复杂的"
    },
    {
     "word": "systems",
     "reason": "n.复←system（系统）"
    },
    {
     "word": "social",
     "reason": "adj.社会的←society（society→social）"
    },
    {
     "word": "that",
     "reason": "conj.／pron.引导定语从句"
    },
    {
     "word": "cooperation",
     "reason": "n.合作←cooperate（cooperate→cooperation）"
    },
    {
     "word": "survival",
     "reason": "n.生存←survive（survive→survival）"
    },
    {
     "word": "actions",
     "reason": "n.复←action（行为）"
    },
    {
     "word": "not",
     "reason": "adv.不"
    },
    {
     "word": "instincts",
     "reason": "n.复←instinct（本能）"
    },
    {
     "word": "are",
     "reason": "v.复数系动词←be（是）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 Many mammals（主）display（谓）intricate communication systems and social hierarchies（宾）；修饰：such as elephants and primates 介词短语（such as）作举例后置定语修饰 mammals；that facilitate cooperation and survival 定语从句（that 引导）修饰 hierarchies／systems。 - 句② 主干 These actions（主）are（系谓）not merely instincts（表）；they（主）are（系谓）dynamic responses（表）；修饰：to environmental pressures 介词短语作后置定语修饰 responses。"
    }
   ],
   "tags": [
    "生命科学",
    "生态",
    "物种保护"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260722A",
   "month": "2026年7月",
   "source": "20260722A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Ecological Footprint",
   "discipline": "自然科学",
   "topic": "天文学",
   "difficulty": "中等",
   "passage": "The concept of ecological footprints is used to analyze an individual's or a nation's environmental impacts.This measure accounts for the resources consumed as well as waste created and compares them to Earth's ability to regenerate those resources.Because consu_ _ _ _ _ _ patterns va_ _ globally,signi_ _ _ _ _ _ dispartities eme_ _ _ between reg_ _ _ _.In deve_ _ _ _ _ countries, lar_ _ _ footprints res_ _ _ from gre_ _ _ _ per cap_ _ _ resource use and greater reliance on technology. Understanding these patterns is crucial for developing sustainable policies that aim to reduce human demands on the planet's ecosystems,ensuring long-term environmental and economic viability.",
   "blanks": [
    {
     "index": 0,
     "prefix": "consu",
     "answer": "mption",
     "word": "consumption",
     "slots": 6,
     "underscores": 6,
     "marker": "consu_ _ _ _ _ _ ",
     "start": 257,
     "end": 274
    },
    {
     "index": 1,
     "prefix": "va",
     "answer": "ry",
     "word": "vary",
     "slots": 2,
     "underscores": 2,
     "marker": "va_ _ ",
     "start": 283,
     "end": 289
    },
    {
     "index": 2,
     "prefix": "signi",
     "answer": "ficant",
     "word": "significant",
     "slots": 6,
     "underscores": 6,
     "marker": "signi_ _ _ _ _ _ ",
     "start": 298,
     "end": 315
    },
    {
     "index": 3,
     "prefix": "eme",
     "answer": "rge",
     "word": "emerge",
     "slots": 3,
     "underscores": 3,
     "marker": "eme_ _ _ ",
     "start": 328,
     "end": 337
    },
    {
     "index": 4,
     "prefix": "reg",
     "answer": "ions",
     "word": "regions",
     "slots": 4,
     "underscores": 4,
     "marker": "reg_ _ _ _",
     "start": 345,
     "end": 355
    },
    {
     "index": 5,
     "prefix": "deve",
     "answer": "loped",
     "word": "developed",
     "slots": 5,
     "underscores": 5,
     "marker": "deve_ _ _ _ _ ",
     "start": 359,
     "end": 373
    },
    {
     "index": 6,
     "prefix": "lar",
     "answer": "ger",
     "word": "larger",
     "slots": 3,
     "underscores": 3,
     "marker": "lar_ _ _ ",
     "start": 384,
     "end": 393
    },
    {
     "index": 7,
     "prefix": "res",
     "answer": "ult",
     "word": "result",
     "slots": 3,
     "underscores": 3,
     "marker": "res_ _ _ ",
     "start": 404,
     "end": 413
    },
    {
     "index": 8,
     "prefix": "gre",
     "answer": "ater",
     "word": "greater",
     "slots": 4,
     "underscores": 4,
     "marker": "gre_ _ _ _ ",
     "start": 418,
     "end": 429
    },
    {
     "index": 9,
     "prefix": "cap",
     "answer": "ita",
     "word": "capita",
     "slots": 3,
     "underscores": 3,
     "marker": "cap_ _ _ ",
     "start": 433,
     "end": 442
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 天体、天文学；生态足迹、资源消耗与可持续发展"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "consumption",
     "reason": "n.消耗←consume（consume→consumption）"
    },
    {
     "word": "vary",
     "reason": "v.变化"
    },
    {
     "word": "significant",
     "reason": "adj.显著的←significance（significance→significant）"
    },
    {
     "word": "emerge",
     "reason": "v.出现"
    },
    {
     "word": "regions",
     "reason": "n.复←region（地区）"
    },
    {
     "word": "developed",
     "reason": "adj.发达的←develop（过去分词作形容词）"
    },
    {
     "word": "larger",
     "reason": "adj.比较级←large（更大的）"
    },
    {
     "word": "result",
     "reason": "v.源于／产生"
    },
    {
     "word": "greater",
     "reason": "adj.比较级←great（更大的）"
    },
    {
     "word": "capita",
     "reason": "n.人均（per capita 固定搭配）←caput（拉丁语）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 significant disparities（主）emerge（谓，不及物）；修饰：Because consumption patterns vary globally 原因状语从句（consumption patterns 主，vary 谓）；between regions 介词短语作状语（表范围）。 - 句② 主干 larger footprints（主）result（谓，不及物）；修饰：In developed countries 介词短语作状语（表范围）；from greater per capita resource use and greater reliance on technology 介词短语作状语（表来源）。"
    }
   ],
   "tags": [
    "自然科学",
    "天文学",
    "天体"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260722A-2",
   "month": "2026年7月",
   "source": "20260722A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Homo Sapiens Origins",
   "discipline": "生命科学",
   "topic": "生物",
   "difficulty": "中等",
   "passage": "Archaeological evidence suggests that Homo sapiens first emerged in Africa approximately 300,000 years ago.These early humans were adept at utilizing the resources available to them,including plants and animals that supplied materials for food,clothing and shelter.They crafted to_ _ _ from st_ _ _ and ani_ _ _ bones a_ _ adapted th_ _ _ hunting techn_ _ _ _ _ _ to t_ _ changing clim_ _ _ _ and lands_ _ _ _ _, thus ensu_ _ _ _ their survival.As they migrated out of Africa, they encountered diverse environments,leading to cultural and technological innovations.",
   "blanks": [
    {
     "index": 0,
     "prefix": "to",
     "answer": "ols",
     "word": "tools",
     "slots": 3,
     "underscores": 3,
     "marker": "to_ _ _ ",
     "start": 278,
     "end": 286
    },
    {
     "index": 1,
     "prefix": "st",
     "answer": "one",
     "word": "stone",
     "slots": 3,
     "underscores": 3,
     "marker": "st_ _ _ ",
     "start": 291,
     "end": 299
    },
    {
     "index": 2,
     "prefix": "ani",
     "answer": "mal",
     "word": "animal",
     "slots": 3,
     "underscores": 3,
     "marker": "ani_ _ _ ",
     "start": 303,
     "end": 312
    },
    {
     "index": 3,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 318,
     "end": 323
    },
    {
     "index": 4,
     "prefix": "th",
     "answer": "eir",
     "word": "their",
     "slots": 3,
     "underscores": 3,
     "marker": "th_ _ _ ",
     "start": 331,
     "end": 339
    },
    {
     "index": 5,
     "prefix": "techn",
     "answer": "iques",
     "word": "techniques",
     "slots": 5,
     "underscores": 6,
     "marker": "techn_ _ _ _ _ _ ",
     "start": 347,
     "end": 364
    },
    {
     "index": 6,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "underscores": 2,
     "marker": "t_ _ ",
     "start": 367,
     "end": 372
    },
    {
     "index": 7,
     "prefix": "clim",
     "answer": "ates",
     "word": "climates",
     "slots": 4,
     "underscores": 4,
     "marker": "clim_ _ _ _ ",
     "start": 381,
     "end": 393
    },
    {
     "index": 8,
     "prefix": "lands",
     "answer": "capes",
     "word": "landscapes",
     "slots": 5,
     "underscores": 5,
     "marker": "lands_ _ _ _ _",
     "start": 397,
     "end": 411
    },
    {
     "index": 9,
     "prefix": "ensu",
     "answer": "ring",
     "word": "ensuring",
     "slots": 4,
     "underscores": 4,
     "marker": "ensu_ _ _ _ ",
     "start": 418,
     "end": 430
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 动物、生物；人类起源、工具制作与技术适应"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "tools",
     "reason": "n.复←tool（工具）"
    },
    {
     "word": "stone",
     "reason": "n.石头"
    },
    {
     "word": "animal",
     "reason": "n.动物（作定语修饰 bones）"
    },
    {
     "word": "and",
     "reason": "conj.和"
    },
    {
     "word": "their",
     "reason": "pron.他们的"
    },
    {
     "word": "techniques",
     "reason": "n.复←technique（技术）"
    },
    {
     "word": "the",
     "reason": "art.定冠词"
    },
    {
     "word": "climates",
     "reason": "n.复←climate（气候）"
    },
    {
     "word": "landscapes",
     "reason": "n.复←landscape（景观／地貌）"
    },
    {
     "word": "ensuring",
     "reason": "v.现在分词←ensure（确保）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 They（主）crafted（谓）tools（宾）and adapted（谓）their hunting techniques（宾）；修饰：from stone and animal bones 介词短语作状语（表来源）；to the changing climates and landscapes 介词短语作状语（表对象，changing 现在分词作定语修饰 climates／landscapes）；thus ensuring their survival 现在分词短语作结果状语。"
    }
   ],
   "tags": [
    "生命科学",
    "生物",
    "动物"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260722A-3",
   "month": "2026年7月",
   "source": "20260722A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Transitional Fossils",
   "discipline": "生命科学",
   "topic": "生物",
   "difficulty": "中等",
   "passage": "Fossils provide crucial evidence for understanding evolution,capturing physical traits of organisms that lived millions of tears ago.By comp_ _ _ _ _ fossilized rem_ _ _ _ across geolo_ _ _ _ _ layers, scien_ _ _ _ _ can obs_ _ _ _ gradual cha_ _ _ _ in spe_ _ _ _.The disc_ _ _ _ _ of transi_ _ _ _ _ _ forms,su_ _ as Tiktaalik, a 375-million-year-old fossil, was pivotal; the fossils revealed features of both fish and early land vertebrates, bridging a key evolutionary gap.Such findings illuminate how organisms adapt over time, offering a tangible record of life's continuous transformation.",
   "blanks": [
    {
     "index": 0,
     "prefix": "comp",
     "answer": "aring",
     "word": "comparing",
     "slots": 5,
     "underscores": 5,
     "marker": "comp_ _ _ _ _ ",
     "start": 136,
     "end": 150
    },
    {
     "index": 1,
     "prefix": "rem",
     "answer": "ains",
     "word": "remains",
     "slots": 4,
     "underscores": 4,
     "marker": "rem_ _ _ _ ",
     "start": 161,
     "end": 172
    },
    {
     "index": 2,
     "prefix": "geolo",
     "answer": "gical",
     "word": "geological",
     "slots": 5,
     "underscores": 5,
     "marker": "geolo_ _ _ _ _ ",
     "start": 179,
     "end": 194
    },
    {
     "index": 3,
     "prefix": "scien",
     "answer": "tists",
     "word": "scientists",
     "slots": 5,
     "underscores": 5,
     "marker": "scien_ _ _ _ _ ",
     "start": 202,
     "end": 217
    },
    {
     "index": 4,
     "prefix": "obs",
     "answer": "erve",
     "word": "observe",
     "slots": 4,
     "underscores": 4,
     "marker": "obs_ _ _ _ ",
     "start": 221,
     "end": 232
    },
    {
     "index": 5,
     "prefix": "cha",
     "answer": "nges",
     "word": "changes",
     "slots": 4,
     "underscores": 4,
     "marker": "cha_ _ _ _ ",
     "start": 240,
     "end": 251
    },
    {
     "index": 6,
     "prefix": "spe",
     "answer": "cies",
     "word": "species",
     "slots": 4,
     "underscores": 4,
     "marker": "spe_ _ _ _",
     "start": 254,
     "end": 264
    },
    {
     "index": 7,
     "prefix": "disc",
     "answer": "overy",
     "word": "discovery",
     "slots": 5,
     "underscores": 5,
     "marker": "disc_ _ _ _ _ ",
     "start": 269,
     "end": 283
    },
    {
     "index": 8,
     "prefix": "transi",
     "answer": "tional",
     "word": "transitional",
     "slots": 6,
     "underscores": 6,
     "marker": "transi_ _ _ _ _ _ ",
     "start": 286,
     "end": 304
    },
    {
     "index": 9,
     "prefix": "su",
     "answer": "ch",
     "word": "such",
     "slots": 2,
     "underscores": 2,
     "marker": "su_ _ ",
     "start": 310,
     "end": 316
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 动物、生物、化石记录与演化过渡形态"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "comparing",
     "reason": "v.现在分词/动名词←compare（比较）"
    },
    {
     "word": "remains",
     "reason": "n.复←remain（遗体）"
    },
    {
     "word": "geological",
     "reason": "adj.地质的（geology→geological）"
    },
    {
     "word": "scientists",
     "reason": "n.复←scientist（科学家）"
    },
    {
     "word": "observe",
     "reason": "v.观察"
    },
    {
     "word": "changes",
     "reason": "n.复←change（变化）"
    },
    {
     "word": "species",
     "reason": "n.物种（单复同形）"
    },
    {
     "word": "discovery",
     "reason": "n.发现←discover ⚠greedy 误为\"overy\"，据 ab_text 校正为 discovery"
    },
    {
     "word": "transitional",
     "reason": "adj.过渡的（transition→transitional）⚠greedy 误为\"disctional\"，据 ab_text 校正为 transitional"
    },
    {
     "word": "such",
     "reason": "det./pron.这样的 ⚠greedy 误为\"transich\"/空，据 ab_text 校正为 such"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 scientists（主）can observe（谓）gradual changes（宾）；修饰：By comparing fossilized remains across geological layers 介词短语作方式状语；in species 介词短语作后置定语，修饰 changes。 - 句② 主干 The discovery（主）was（系）pivotal（表）；修饰：of transitional forms 介词短语作后置定语，修饰 discovery；such as Tiktaalik, a 375-million-year-old fossil 介词短语＋同位语作后置定语，修饰 forms。"
    }
   ],
   "tags": [
    "生命科学",
    "生物",
    "动物"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260722C",
   "month": "2026年7月",
   "source": "20260722C",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Ecological Footprint",
   "discipline": "自然科学",
   "topic": "天文学",
   "difficulty": "中等",
   "passage": "The concept of ecological footprints is used to analyze an individual's or a nation's environmental impacts. This measure accounts for the resources consumed as well as waste created and compares them to Earth's ability to regenerate those resources. Because consu_ _ _ _ _ _ patterns va_ _ globally, signi_ _ _ _ _ _ disparities eme_ _ _ between reg_ _ _ _. In deve_ _ _ _ _ countries, lar_ _ _ footprints res_ _ _ from gre_ _ _ _ per cap_ _ _ resource use and greater reliance on technology. Understanding these patterns is crucial for developing sustainable policies that aim to reduce human demands on the planet's ecosystems, ensuring long-term environmental and economic viability.",
   "blanks": [
    {
     "index": 0,
     "prefix": "consu",
     "answer": "mption",
     "word": "consumption",
     "slots": 6,
     "underscores": 6,
     "marker": "consu_ _ _ _ _ _ ",
     "start": 259,
     "end": 276
    },
    {
     "index": 1,
     "prefix": "va",
     "answer": "ry",
     "word": "vary",
     "slots": 2,
     "underscores": 2,
     "marker": "va_ _ ",
     "start": 285,
     "end": 291
    },
    {
     "index": 2,
     "prefix": "signi",
     "answer": "ficant",
     "word": "significant",
     "slots": 6,
     "underscores": 6,
     "marker": "signi_ _ _ _ _ _ ",
     "start": 301,
     "end": 318
    },
    {
     "index": 3,
     "prefix": "eme",
     "answer": "rge",
     "word": "emerge",
     "slots": 3,
     "underscores": 3,
     "marker": "eme_ _ _ ",
     "start": 330,
     "end": 339
    },
    {
     "index": 4,
     "prefix": "reg",
     "answer": "ions",
     "word": "regions",
     "slots": 4,
     "underscores": 4,
     "marker": "reg_ _ _ _",
     "start": 347,
     "end": 357
    },
    {
     "index": 5,
     "prefix": "deve",
     "answer": "loped",
     "word": "developed",
     "slots": 5,
     "underscores": 5,
     "marker": "deve_ _ _ _ _ ",
     "start": 362,
     "end": 376
    },
    {
     "index": 6,
     "prefix": "lar",
     "answer": "ger",
     "word": "larger",
     "slots": 3,
     "underscores": 3,
     "marker": "lar_ _ _ ",
     "start": 387,
     "end": 396
    },
    {
     "index": 7,
     "prefix": "res",
     "answer": "ult",
     "word": "result",
     "slots": 3,
     "underscores": 3,
     "marker": "res_ _ _ ",
     "start": 407,
     "end": 416
    },
    {
     "index": 8,
     "prefix": "gre",
     "answer": "ater",
     "word": "greater",
     "slots": 4,
     "underscores": 4,
     "marker": "gre_ _ _ _ ",
     "start": 421,
     "end": 432
    },
    {
     "index": 9,
     "prefix": "cap",
     "answer": "ita",
     "word": "capita",
     "slots": 3,
     "underscores": 3,
     "marker": "cap_ _ _ ",
     "start": 436,
     "end": 445
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 天体、天文学、生态足迹与资源可持续性"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "consumption",
     "reason": "n.消费←consume"
    },
    {
     "word": "vary",
     "reason": "v.变化（patterns 为复数主语，用动词原形）"
    },
    {
     "word": "significant",
     "reason": "adj.显著的"
    },
    {
     "word": "emerge",
     "reason": "v.出现（disparities 作主语用原形）"
    },
    {
     "word": "regions",
     "reason": "n.复←region（地区）"
    },
    {
     "word": "developed",
     "reason": "adj.发达的／过去分词←develop"
    },
    {
     "word": "larger",
     "reason": "adj.比较级←large（更大的）"
    },
    {
     "word": "result",
     "reason": "v.源于←result（result from 固定搭配）"
    },
    {
     "word": "greater",
     "reason": "adj.比较级←great（更大的）"
    },
    {
     "word": "capita",
     "reason": "n.人均（per capita 固定短语，源自 caput）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 consumption patterns（主）vary（谓）；修饰：无显著长修饰成分。 - 句② 主干 significant disparities（主）emerge（谓）；修饰：between regions 介词短语作地点状语；Because consumption patterns vary globally 原因状语从句，修饰 emerge。 - 句③ 主干 larger footprints（主）result（谓）；修饰：In developed countries 介词短语作地点状语；from greater per capita resource use and greater reliance on technology 介词短语作来源／原因状语。"
    }
   ],
   "tags": [
    "自然科学",
    "天文学",
    "天体"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260722C-2",
   "month": "2026年7月",
   "source": "20260722C",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Rise of Factories",
   "discipline": "社会科学",
   "topic": "心理学",
   "difficulty": "困难",
   "passage": "The rise of industrialization in the eighteenth and nineteenth centuries brought about a dramatic shift in how goods were made, leading to the widespread development of factories. These centralized workp_ _ _ _ _ replaced tradi_ _ _ _ _ _ handcrafting a_ _ cottage indus_ _ _ _ _ with mechanized produ_ _ _ _ _ systems pow_ _ _ _ by st_ _ _, water, o_ electricity, allo_ _ _ _ for gre_ _ _ _ efficiency in the manufacturing of good. Factories not only transformed economies and labor systems but also reshaped urban landscapes, contributing to population growth, environmental changes, and new social dynamics.",
   "blanks": [
    {
     "index": 0,
     "prefix": "workp",
     "answer": "laces",
     "word": "workplaces",
     "slots": 5,
     "underscores": 5,
     "marker": "workp_ _ _ _ _ ",
     "start": 198,
     "end": 213
    },
    {
     "index": 1,
     "prefix": "tradi",
     "answer": "tional",
     "word": "traditional",
     "slots": 6,
     "underscores": 6,
     "marker": "tradi_ _ _ _ _ _ ",
     "start": 222,
     "end": 239
    },
    {
     "index": 2,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 252,
     "end": 257
    },
    {
     "index": 3,
     "prefix": "indus",
     "answer": "tries",
     "word": "industries",
     "slots": 5,
     "underscores": 5,
     "marker": "indus_ _ _ _ _ ",
     "start": 265,
     "end": 280
    },
    {
     "index": 4,
     "prefix": "produ",
     "answer": "ction",
     "word": "production",
     "slots": 5,
     "underscores": 5,
     "marker": "produ_ _ _ _ _ ",
     "start": 296,
     "end": 311
    },
    {
     "index": 5,
     "prefix": "pow",
     "answer": "ered",
     "word": "powered",
     "slots": 4,
     "underscores": 4,
     "marker": "pow_ _ _ _ ",
     "start": 319,
     "end": 330
    },
    {
     "index": 6,
     "prefix": "st",
     "answer": "eam",
     "word": "steam",
     "slots": 3,
     "underscores": 3,
     "marker": "st_ _ _",
     "start": 333,
     "end": 340
    },
    {
     "index": 7,
     "prefix": "o",
     "answer": "r",
     "word": "or",
     "slots": 1,
     "underscores": 1,
     "marker": "o_ ",
     "start": 349,
     "end": 352
    },
    {
     "index": 8,
     "prefix": "allo",
     "answer": "wing",
     "word": "allowing",
     "slots": 4,
     "underscores": 4,
     "marker": "allo_ _ _ _ ",
     "start": 365,
     "end": 377
    },
    {
     "index": 9,
     "prefix": "gre",
     "answer": "ater",
     "word": "greater",
     "slots": 4,
     "underscores": 4,
     "marker": "gre_ _ _ _ ",
     "start": 381,
     "end": 392
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 发展心理学、心理学、工业革命与工厂制度"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "workplaces",
     "reason": "n.复←workplace（工作场所）"
    },
    {
     "word": "traditional",
     "reason": "adj.传统的（tradition→traditional）"
    },
    {
     "word": "and",
     "reason": "conj.和"
    },
    {
     "word": "industries",
     "reason": "n.复←industry（产业）"
    },
    {
     "word": "production",
     "reason": "n.生产←produce"
    },
    {
     "word": "powered",
     "reason": "v.过去分词←power（由…驱动）"
    },
    {
     "word": "steam",
     "reason": "n.蒸汽 ⚠ab_text 错位\"st,eam\"，据语境校正为 steam"
    },
    {
     "word": "or",
     "reason": "conj.或者"
    },
    {
     "word": "allowing",
     "reason": "v.现在分词←allow（使能够）"
    },
    {
     "word": "greater",
     "reason": "adj.比较级←great（更大的）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 workplaces（主）replaced（谓）traditional handcrafting and cottage industries（宾）；修饰：with mechanized production systems 介词短语作方式状语；powered by steam water, or electricity 过去分词短语作后置定语，修饰 systems；allowing for greater efficiency in the manufacturing of good 现在分词短语作结果状语。"
    }
   ],
   "tags": [
    "社会科学",
    "心理学",
    "发展心理学"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260725A",
   "month": "2026年7月",
   "source": "20260725A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Prehistoric Society",
   "discipline": "社会科学",
   "topic": "历史",
   "difficulty": "困难",
   "passage": "In the prehistoric era, social organization was intricately linked to the prevailing environmental conditions, which dictated the migratory patterns and settlement choices of early human groups. These commu_ _ _ _ _ _ often deve_ _ _ _ _ cohesive un_ _ _ based o_ kinship ti_ _, establishing a sim_ _ _ social stru_ _ _ _ _ that facil_ _ _ _ _ _ cooperative hun_ _ _ _ and gath_ _ _ _ _ of food. Leadership roles emerged naturally, typically assumed by individuals possessing superior survival skills or profound knowledge of the terrain. The distribution of resources, particularly food, was a critical factor, often determining the power dynamics within the group.",
   "blanks": [
    {
     "index": 0,
     "prefix": "commu",
     "answer": "nities",
     "word": "communities",
     "slots": 6,
     "underscores": 6,
     "marker": "commu_ _ _ _ _ _ ",
     "start": 201,
     "end": 218
    },
    {
     "index": 1,
     "prefix": "deve",
     "answer": "loped",
     "word": "developed",
     "slots": 5,
     "underscores": 5,
     "marker": "deve_ _ _ _ _ ",
     "start": 224,
     "end": 238
    },
    {
     "index": 2,
     "prefix": "un",
     "answer": "its",
     "word": "units",
     "slots": 3,
     "underscores": 3,
     "marker": "un_ _ _ ",
     "start": 247,
     "end": 255
    },
    {
     "index": 3,
     "prefix": "o",
     "answer": "n",
     "word": "on",
     "slots": 1,
     "underscores": 1,
     "marker": "o_ ",
     "start": 261,
     "end": 264
    },
    {
     "index": 4,
     "prefix": "ti",
     "answer": "es",
     "word": "ties",
     "slots": 2,
     "underscores": 2,
     "marker": "ti_ _",
     "start": 272,
     "end": 277
    },
    {
     "index": 5,
     "prefix": "sim",
     "answer": "ple",
     "word": "simple",
     "slots": 3,
     "underscores": 3,
     "marker": "sim_ _ _ ",
     "start": 294,
     "end": 303
    },
    {
     "index": 6,
     "prefix": "stru",
     "answer": "cture",
     "word": "structure",
     "slots": 5,
     "underscores": 5,
     "marker": "stru_ _ _ _ _ ",
     "start": 310,
     "end": 324
    },
    {
     "index": 7,
     "prefix": "facil",
     "answer": "itated",
     "word": "facilitated",
     "slots": 6,
     "underscores": 6,
     "marker": "facil_ _ _ _ _ _ ",
     "start": 329,
     "end": 346
    },
    {
     "index": 8,
     "prefix": "hun",
     "answer": "ting",
     "word": "hunting",
     "slots": 4,
     "underscores": 4,
     "marker": "hun_ _ _ _ ",
     "start": 358,
     "end": 369
    },
    {
     "index": 9,
     "prefix": "gath",
     "answer": "ering",
     "word": "gathering",
     "slots": 5,
     "underscores": 5,
     "marker": "gath_ _ _ _ _ ",
     "start": 373,
     "end": 387
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 农业、历史、史前社会与亲缘组织"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "communities",
     "reason": "n.复←community（社群）"
    },
    {
     "word": "developed",
     "reason": "v.过去式←develop（发展）"
    },
    {
     "word": "units",
     "reason": "n.复←unit（群体／单元）"
    },
    {
     "word": "on",
     "reason": "prep.基于"
    },
    {
     "word": "ties",
     "reason": "n.复←tie（纽带，kinship ties 亲缘纽带）"
    },
    {
     "word": "simple",
     "reason": "adj.简单的"
    },
    {
     "word": "structure",
     "reason": "n.结构"
    },
    {
     "word": "facilitated",
     "reason": "v.过去式←facilitate（促进）"
    },
    {
     "word": "hunting",
     "reason": "n.动名词←hunt（狩猎）"
    },
    {
     "word": "gathering",
     "reason": "n.动名词←gather（采集）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 communities（主）developed（谓）cohesive units（宾）；修饰：based on kinship ties 过去分词短语作后置定语，修饰 units；establishing a simple social structure 现在分词短语作结果状语。 - 句② 主干 (that)（主，指 structure）facilitated（谓）cooperative hunting and gathering of food（宾）；修饰：of food 介词短语作后置定语，修饰 gathering。"
    }
   ],
   "tags": [
    "社会科学",
    "历史",
    "农业"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260725B",
   "month": "2026年7月",
   "source": "20260725B",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Desert Adaptations",
   "discipline": "生命科学",
   "topic": "生物",
   "difficulty": "中等",
   "passage": "Deserts, characterized by their extreme environments, present unique challenges for both flora and fauna. These arid regions are distinguished by minimal rainfall, making them inhospitable to many life forms. However, species that thrive in deserts possess remar_ _ _ _ _ adaptations; f_ _ example, so_ _ plants ha_ _ small lea_ _ _ to red_ _ _ water lo_ _ from evapo_ _ _ _ _ _ and de_ _ root sys_ _ _ _ to access moisture stored far below the dry surface. These adaptations are crucial for survival, allowing organisms to maintain homeostasis amidst intense heat and scarce resources.",
   "blanks": [
    {
     "index": 0,
     "prefix": "remar",
     "underscores": 5,
     "word": "remarkable",
     "answer": "kable",
     "slots": 5,
     "marker": "remar_ _ _ _ _ ",
     "start": 257,
     "end": 272
    },
    {
     "index": 1,
     "prefix": "f",
     "underscores": 2,
     "word": "for",
     "answer": "or",
     "slots": 2,
     "marker": "f_ _ ",
     "start": 285,
     "end": 290
    },
    {
     "index": 2,
     "prefix": "so",
     "underscores": 2,
     "word": "some",
     "answer": "me",
     "slots": 2,
     "marker": "so_ _ ",
     "start": 299,
     "end": 305
    },
    {
     "index": 3,
     "prefix": "ha",
     "underscores": 2,
     "word": "have",
     "answer": "ve",
     "slots": 2,
     "marker": "ha_ _ ",
     "start": 312,
     "end": 318
    },
    {
     "index": 4,
     "prefix": "lea",
     "underscores": 3,
     "word": "leaves",
     "answer": "ves",
     "slots": 3,
     "marker": "lea_ _ _ ",
     "start": 324,
     "end": 333
    },
    {
     "index": 5,
     "prefix": "red",
     "underscores": 3,
     "word": "reduce",
     "answer": "uce",
     "slots": 3,
     "marker": "red_ _ _ ",
     "start": 336,
     "end": 345
    },
    {
     "index": 6,
     "prefix": "lo",
     "underscores": 2,
     "word": "loss",
     "answer": "ss",
     "slots": 2,
     "marker": "lo_ _ ",
     "start": 351,
     "end": 357
    },
    {
     "index": 7,
     "prefix": "evapo",
     "underscores": 6,
     "word": "evaporation",
     "answer": "ration",
     "slots": 6,
     "marker": "evapo_ _ _ _ _ _ ",
     "start": 362,
     "end": 379
    },
    {
     "index": 8,
     "prefix": "de",
     "underscores": 2,
     "word": "deep",
     "answer": "ep",
     "slots": 2,
     "marker": "de_ _ ",
     "start": 383,
     "end": 389
    },
    {
     "index": 9,
     "prefix": "sys",
     "underscores": 4,
     "word": "systems",
     "answer": "tems",
     "slots": 4,
     "marker": "sys_ _ _ _ ",
     "start": 394,
     "end": 405
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 动物、生物、沙漠适应与水分保持"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "remarkable",
     "reason": "adj.显著的／非凡的"
    },
    {
     "word": "for",
     "reason": "prep.例如（for example）"
    },
    {
     "word": "some",
     "reason": "det./pron.一些"
    },
    {
     "word": "have",
     "reason": "v.原形（some plants have）"
    },
    {
     "word": "leaves",
     "reason": "n.复←leaf（叶子）"
    },
    {
     "word": "reduce",
     "reason": "v.减少"
    },
    {
     "word": "loss",
     "reason": "n.损失←lose"
    },
    {
     "word": "evaporation",
     "reason": "n.蒸发←evaporate"
    },
    {
     "word": "deep",
     "reason": "adj.深的"
    },
    {
     "word": "systems",
     "reason": "n.复←system（系统）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 species（主）possess（谓）remarkable adaptations（宾）；修饰：that thrive in deserts 定语从句，修饰 species。 - 句② 主干 some plants（主）have（谓）small leaves（宾）；修饰：to reduce water loss from evaporation 不定式短语作目的状语；from evaporation 介词短语作后置定语，修饰 loss。 - 句③ 主干 some plants（主）have（谓）deep root systems（宾）；修饰：to access moisture stored far below the dry surface 不定式短语作目的状语；stored far below the dry surface 过去分词短语作后置定语，修饰 moisture。"
    }
   ],
   "tags": [
    "生命科学",
    "生物",
    "动物"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "20260725B-2",
   "month": "2026年7月",
   "source": "20260725B",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Wind Formation",
   "discipline": "自然科学",
   "topic": "天文学",
   "difficulty": "中等",
   "passage": "Wind currents form due to differences in atmospheric pressure, which arise from uneven solar heating across Earth's surface. As warmer air rises and cooler air sinks, pressure differentials are created, driving horizontal air movement known as wind. Wind currents transport mois_ _ _ _ and infl_ _ _ _ _ temperature, pla_ _ _ _ a k_ _ role i_ shaping wea_ _ _ _ patterns. T_ _ Coriolis eff_ _ _ caused b_ Earth's rota_ _ _ _ further alters wind direction, creating prevailing winds that impact regional climates and storm systems. Understanding these interactions is crucial for accurate forecasting.",
   "blanks": [
    {
     "index": 0,
     "prefix": "mois",
     "underscores": 4,
     "word": "moisture",
     "answer": "ture",
     "slots": 4,
     "marker": "mois_ _ _ _ ",
     "start": 274,
     "end": 286
    },
    {
     "index": 1,
     "prefix": "infl",
     "underscores": 5,
     "word": "influence",
     "answer": "uence",
     "slots": 5,
     "marker": "infl_ _ _ _ _ ",
     "start": 290,
     "end": 304
    },
    {
     "index": 2,
     "prefix": "pla",
     "underscores": 4,
     "word": "playing",
     "answer": "ying",
     "slots": 4,
     "marker": "pla_ _ _ _ ",
     "start": 317,
     "end": 328
    },
    {
     "index": 3,
     "prefix": "k",
     "underscores": 2,
     "word": "key",
     "answer": "ey",
     "slots": 2,
     "marker": "k_ _ ",
     "start": 330,
     "end": 335
    },
    {
     "index": 4,
     "prefix": "i",
     "underscores": 1,
     "word": "in",
     "answer": "n",
     "slots": 1,
     "marker": "i_ ",
     "start": 340,
     "end": 343
    },
    {
     "index": 5,
     "prefix": "wea",
     "underscores": 4,
     "word": "weather",
     "answer": "ther",
     "slots": 4,
     "marker": "wea_ _ _ _ ",
     "start": 351,
     "end": 362
    },
    {
     "index": 6,
     "prefix": "T",
     "underscores": 2,
     "word": "The",
     "answer": "he",
     "slots": 2,
     "marker": "T_ _ ",
     "start": 372,
     "end": 377
    },
    {
     "index": 7,
     "prefix": "eff",
     "underscores": 3,
     "word": "effect",
     "answer": "ect",
     "slots": 3,
     "marker": "eff_ _ _ ",
     "start": 386,
     "end": 395
    },
    {
     "index": 8,
     "prefix": "b",
     "underscores": 1,
     "word": "by",
     "answer": "y",
     "slots": 1,
     "marker": "b_ ",
     "start": 402,
     "end": 405
    },
    {
     "index": 9,
     "prefix": "rota",
     "underscores": 4,
     "word": "rotation",
     "answer": "tion",
     "slots": 4,
     "marker": "rota_ _ _ _ ",
     "start": 413,
     "end": 425
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 太阳活动、天文学、风的形成与科里奥利效应"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "moisture",
     "reason": "n.水汽／湿度"
    },
    {
     "word": "influence",
     "reason": "v.影响 ⚠greedy 误为\"inflluence\"（多一 l），据语境校正为 influence"
    },
    {
     "word": "playing",
     "reason": "v.现在分词←play（起…作用）"
    },
    {
     "word": "key",
     "reason": "adj.关键的"
    },
    {
     "word": "in",
     "reason": "prep.在…中"
    },
    {
     "word": "weather",
     "reason": "n.天气"
    },
    {
     "word": "The",
     "reason": "art.定冠词"
    },
    {
     "word": "effect",
     "reason": "n.效应（Coriolis effect 科里奥利效应）"
    },
    {
     "word": "by",
     "reason": "prep.由／被"
    },
    {
     "word": "rotation",
     "reason": "n.自转／旋转←rotate"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 Wind currents（主）transport（谓）moisture and influence temperature（宾）；修饰：playing a key role in shaping weather patterns 现在分词短语作结果／伴随状语；in shaping weather patterns 介词短语作后置定语，修饰 role。 - 句② 主干 The Coriolis effect（主）alters（谓）wind direction（宾）；修饰：caused by Earth's rotation 过去分词短语作后置定语，修饰 effect；creating prevailing winds 现在分词短语作结果状语。"
    }
   ],
   "tags": [
    "自然科学",
    "天文学",
    "太阳活动"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "20260726B",
   "month": "2026年7月",
   "source": "20260726B",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Mountains & Climate",
   "discipline": "自然科学",
   "topic": "地质学",
   "difficulty": "简单",
   "passage": "Geographical features such as mountains shape the landscape and climate of a region. Mountains c_ act a_ natural barr_ _ _ _. The Himalayas, f_ _ example, bl_ _ _ cold wi_ _ _ coming fr_ _ Central Asia, kee_ _ _ _ the Indian subcontinent war_ _. They al_ _ cause orographic rainfall, where moist air rises, cools, and precipitates on the windward side, creating lush forests, while the leeward side remains dry. Mountain ranges like the Andes and the Rockies host unique flora and fauna adapted to high altitudes.",
   "blanks": [
    {
     "index": 0,
     "prefix": "c",
     "answer": "an",
     "word": "can",
     "slots": 2,
     "underscores": 1,
     "marker": "c_ ",
     "start": 95,
     "end": 98
    },
    {
     "index": 1,
     "prefix": "a",
     "answer": "s",
     "word": "as",
     "slots": 1,
     "underscores": 1,
     "marker": "a_ ",
     "start": 102,
     "end": 105
    },
    {
     "index": 2,
     "prefix": "barr",
     "answer": "iers",
     "word": "barriers",
     "slots": 4,
     "underscores": 4,
     "marker": "barr_ _ _ _",
     "start": 113,
     "end": 124
    },
    {
     "index": 3,
     "prefix": "f",
     "answer": "or",
     "word": "for",
     "slots": 2,
     "underscores": 2,
     "marker": "f_ _ ",
     "start": 141,
     "end": 146
    },
    {
     "index": 4,
     "prefix": "bl",
     "answer": "ock",
     "word": "block",
     "slots": 3,
     "underscores": 3,
     "marker": "bl_ _ _ ",
     "start": 155,
     "end": 163
    },
    {
     "index": 5,
     "prefix": "wi",
     "answer": "nds",
     "word": "winds",
     "slots": 3,
     "underscores": 3,
     "marker": "wi_ _ _ ",
     "start": 168,
     "end": 176
    },
    {
     "index": 6,
     "prefix": "fr",
     "answer": "om",
     "word": "from",
     "slots": 2,
     "underscores": 2,
     "marker": "fr_ _ ",
     "start": 183,
     "end": 189
    },
    {
     "index": 7,
     "prefix": "kee",
     "answer": "ping",
     "word": "keeping",
     "slots": 4,
     "underscores": 4,
     "marker": "kee_ _ _ _ ",
     "start": 203,
     "end": 214
    },
    {
     "index": 8,
     "prefix": "war",
     "answer": "mer",
     "word": "warmer",
     "slots": 3,
     "underscores": 2,
     "marker": "war_ _",
     "start": 238,
     "end": 244
    },
    {
     "index": 9,
     "prefix": "al",
     "answer": "so",
     "word": "also",
     "slots": 2,
     "underscores": 2,
     "marker": "al_ _ ",
     "start": 251,
     "end": 257
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 地形地貌、地质学、山脉屏障与气候塑造"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "can",
     "reason": "v.情态动词（能够）"
    },
    {
     "word": "as",
     "reason": "prep.作为（act as）"
    },
    {
     "word": "barriers",
     "reason": "n.复←barrier（屏障）"
    },
    {
     "word": "for",
     "reason": "prep.例如（for example）"
    },
    {
     "word": "block",
     "reason": "v.阻挡"
    },
    {
     "word": "winds",
     "reason": "n.复←wind（风）"
    },
    {
     "word": "from",
     "reason": "prep.来自"
    },
    {
     "word": "keeping",
     "reason": "v.现在分词←keep（保持）"
    },
    {
     "word": "warmer",
     "reason": "adj.比较级←warm（更温暖的）"
    },
    {
     "word": "also",
     "reason": "adv.也"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 Mountains（主）can act（谓）as natural barriers（表）；修饰：无显著长修饰成分。 - 句② 主干 The Himalayas（主）block（谓）cold winds（宾）；修饰：coming from Central Asia 现在分词短语作后置定语，修饰 winds；keeping the Indian subcontinent warmer 现在分词短语作结果状语。 - 句③ 主干 They（主）cause（谓）orographic rainfall（宾）；修饰：where moist air rises, cools, and precipitates on the windward side 定语从句，修饰 rainfall；creating lush forests 现在分词短语作结果状语。"
    }
   ],
   "tags": [
    "自然科学",
    "地质学",
    "地形地貌"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260726B-2",
   "month": "2026年7月",
   "source": "20260726B",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Ottoman Empire",
   "discipline": "社会科学",
   "topic": "历史",
   "difficulty": "中等",
   "passage": "The Ottoman Empire, which lasted from 1299 to 1922, was a formidable force that reshaped the political and cultural landscapes of Europe, the Middle East, and North Africa. Renowned for its mili_ _ _ _ _ prowess a_ _ _ strategic conq_ _ _ _ _, the emp_ _ _ reached i_ _ _ zenith un_ _ _ the re_ _ _ of Suleyman the Magnificent, dur_ _ _ which ar_ _ _ and archit_ _ _ _ _ _ _ _ _ flourished. The Ottomans also played a pivotal role in global commerce, controlling key trade routes that linked the spice markets of Asia with the merchant hubs of Europe.",
   "blanks": [
    {
     "index": 0,
     "prefix": "mili",
     "answer": "tary",
     "word": "military",
     "slots": 4,
     "underscores": 5,
     "marker": "mili_ _ _ _ _ ",
     "start": 190,
     "end": 204
    },
    {
     "index": 1,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "underscores": 3,
     "marker": "a_ _ _ ",
     "start": 212,
     "end": 219
    },
    {
     "index": 2,
     "prefix": "conq",
     "answer": "uests",
     "word": "conquests",
     "slots": 5,
     "underscores": 5,
     "marker": "conq_ _ _ _ _",
     "start": 229,
     "end": 242
    },
    {
     "index": 3,
     "prefix": "emp",
     "answer": "ire",
     "word": "empire",
     "slots": 3,
     "underscores": 3,
     "marker": "emp_ _ _ ",
     "start": 248,
     "end": 257
    },
    {
     "index": 4,
     "prefix": "i",
     "answer": "ts",
     "word": "its",
     "slots": 2,
     "underscores": 3,
     "marker": "i_ _ _ ",
     "start": 265,
     "end": 272
    },
    {
     "index": 5,
     "prefix": "un",
     "answer": "der",
     "word": "under",
     "slots": 3,
     "underscores": 3,
     "marker": "un_ _ _ ",
     "start": 279,
     "end": 287
    },
    {
     "index": 6,
     "prefix": "re",
     "answer": "ign",
     "word": "reign",
     "slots": 3,
     "underscores": 3,
     "marker": "re_ _ _ ",
     "start": 291,
     "end": 299
    },
    {
     "index": 7,
     "prefix": "dur",
     "answer": "ing",
     "word": "during",
     "slots": 3,
     "underscores": 3,
     "marker": "dur_ _ _ ",
     "start": 328,
     "end": 337
    },
    {
     "index": 8,
     "prefix": "ar",
     "answer": "ts",
     "word": "arts",
     "slots": 2,
     "underscores": 3,
     "marker": "ar_ _ _ ",
     "start": 343,
     "end": 351
    },
    {
     "index": 9,
     "prefix": "archit",
     "answer": "ecture",
     "word": "architecture",
     "slots": 6,
     "underscores": 9,
     "marker": "archit_ _ _ _ _ _ _ _ _ ",
     "start": 355,
     "end": 379
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 经济史、历史、奥斯曼帝国与军事征服"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "military",
     "reason": "adj.军事的"
    },
    {
     "word": "and",
     "reason": "conj.和"
    },
    {
     "word": "conquests",
     "reason": "n.复←conquest（征服）"
    },
    {
     "word": "empire",
     "reason": "n.帝国"
    },
    {
     "word": "its",
     "reason": "pron.它的"
    },
    {
     "word": "under",
     "reason": "prep.在…统治下（under the reign）"
    },
    {
     "word": "reign",
     "reason": "n.统治（reign of）"
    },
    {
     "word": "during",
     "reason": "prep.在…期间"
    },
    {
     "word": "arts",
     "reason": "n.复←art（艺术）"
    },
    {
     "word": "architecture",
     "reason": "n.建筑（艺术）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 the empire（主）reached（谓）its zenith（宾）；修饰：Renowned for its military prowess and strategic conquests 过去分词短语作原因状语；under the reign of Suleyman the Magnificent 介词短语作时间状语。 - 句② 主干 arts and architecture（主）flourished（谓）；修饰：during which arts and architecture flourished 定语从句（which 指前述统治时期），本小句无显著长修饰成分。"
    }
   ],
   "tags": [
    "社会科学",
    "历史",
    "经济史"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260804A",
   "month": "2026年8月",
   "source": "20260804A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Spacetime",
   "discipline": "自然科学",
   "topic": "天文学",
   "difficulty": "中等",
   "passage": "Astronomers study space-time to understand how the universe is shaped and how it changes. Space-time is a single continuum that combines the three dimensions of space with time, meaning that events are located not just in space but also in time. Scientists rese_ _ _ _ its stru_ _ _ _ by obse_ _ _ _ phenomena li_ _ _ _ black ho_ _ _ _, the move_ _ _ _ of gala_ _ _ _, and gravit_ _ _ _ _ _ _ _ waves. Su_ _ _ _ observations rev_ _ _ _ how space-time bends, stretches, and evolves, offering insights into the universe's large-scale behavior and the forces that govern it.",
   "blanks": [
    {
     "index": 0,
     "prefix": "rese",
     "answer": "arch",
     "word": "research",
     "slots": 4,
     "underscores": 4,
     "marker": "rese_ _ _ _ ",
     "start": 257,
     "end": 269
    },
    {
     "index": 1,
     "prefix": "stru",
     "answer": "cture",
     "word": "structure",
     "slots": 5,
     "underscores": 4,
     "marker": "stru_ _ _ _ ",
     "start": 273,
     "end": 285
    },
    {
     "index": 2,
     "prefix": "obse",
     "answer": "rving",
     "word": "observing",
     "slots": 5,
     "underscores": 4,
     "marker": "obse_ _ _ _ ",
     "start": 288,
     "end": 300
    },
    {
     "index": 3,
     "prefix": "li",
     "answer": "ke",
     "word": "like",
     "slots": 2,
     "underscores": 4,
     "marker": "li_ _ _ _ ",
     "start": 310,
     "end": 320
    },
    {
     "index": 4,
     "prefix": "ho",
     "answer": "les",
     "word": "holes",
     "slots": 3,
     "underscores": 4,
     "marker": "ho_ _ _ _",
     "start": 326,
     "end": 335
    },
    {
     "index": 5,
     "prefix": "move",
     "answer": "ment",
     "word": "movement",
     "slots": 4,
     "underscores": 4,
     "marker": "move_ _ _ _ ",
     "start": 341,
     "end": 353
    },
    {
     "index": 6,
     "prefix": "gala",
     "answer": "xies",
     "word": "galaxies",
     "slots": 4,
     "underscores": 4,
     "marker": "gala_ _ _ _",
     "start": 356,
     "end": 367
    },
    {
     "index": 7,
     "prefix": "gravit",
     "answer": "ational",
     "word": "gravitational",
     "slots": 7,
     "underscores": 8,
     "marker": "gravit_ _ _ _ _ _ _ _ ",
     "start": 373,
     "end": 395
    },
    {
     "index": 8,
     "prefix": "Su",
     "answer": "ch",
     "word": "Such",
     "slots": 2,
     "underscores": 4,
     "marker": "Su_ _ _ _ ",
     "start": 402,
     "end": 412
    },
    {
     "index": 9,
     "prefix": "rev",
     "answer": "eal",
     "word": "reveal",
     "slots": 3,
     "underscores": 4,
     "marker": "rev_ _ _ _ ",
     "start": 425,
     "end": 436
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 时空连续体研究；时空弯曲、黑洞与引力波观测（宇宙学、天文学）。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "research",
     "reason": "v. 研究"
    },
    {
     "word": "structure",
     "reason": "n. 结构"
    },
    {
     "word": "observing",
     "reason": "v.现在分词/动名词←observe（观测）"
    },
    {
     "word": "like",
     "reason": "prep. 例如／像"
    },
    {
     "word": "holes",
     "reason": "n.复←hole（洞／黑洞）"
    },
    {
     "word": "movement",
     "reason": "n. 运动（move→movement）"
    },
    {
     "word": "galaxies",
     "reason": "n.复←galaxy（星系）"
    },
    {
     "word": "gravitational",
     "reason": "adj. 引力的（gravity→gravitational）"
    },
    {
     "word": "Such",
     "reason": "adj. 这样的（句首大写）"
    },
    {
     "word": "reveal",
     "reason": "v. 揭示"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 Scientists（主）research（谓）its structure（宾）；修饰：by observing phenomena like black holes, the movement of galaxies, and gravitational waves 介词短语作方式状语（observing 动名词带宾 phenomena，like black holes... 举例）。 - 句② 主干 Such observations（主）reveal（谓）how space-time bends, stretches, and evolves（宾，how 从句）；修饰：offering insights into the universe's large-scale behavior and the forces that govern it 现在分词短语作结果状语（含 into...behavior 介词短语，that govern it 定语从句修饰 forces）。"
    }
   ],
   "tags": [
    "自然科学",
    "天文学",
    "宇宙学"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260805A",
   "month": "2026年8月",
   "source": "20260805A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "AI Forecasting",
   "discipline": "自然科学",
   "topic": "环境科学",
   "difficulty": "简单",
   "passage": "Computational models and artificial intelligence (AI) have become essential tools in modern weather forecasting. Traditional models simulate atmospheric processes using physics-based equations, but they require significant computing power and time. AI-based sys_ _ _ _, by cont_ _ _ _, analyze va_ _ datasets t_ identify patt_ _ _ _ and gene_ _ _ _ forecasts mo_ _ quickly a_ _ efficiently. Rese_ _ _ _ institutions ha_ _ created forecasting tools driven by artificial intelligence that can improve short- and medium-range predictions, especially in regions with limited infrastructure.",
   "blanks": [
    {
     "index": 0,
     "prefix": "sys",
     "answer": "tems",
     "word": "systems",
     "slots": 4,
     "underscores": 4,
     "marker": "sys_ _ _ _",
     "start": 258,
     "end": 268
    },
    {
     "index": 1,
     "prefix": "cont",
     "answer": "rast",
     "word": "contrast",
     "slots": 4,
     "underscores": 4,
     "marker": "cont_ _ _ _",
     "start": 273,
     "end": 284
    },
    {
     "index": 2,
     "prefix": "va",
     "answer": "st",
     "word": "vast",
     "slots": 2,
     "underscores": 2,
     "marker": "va_ _ ",
     "start": 294,
     "end": 300
    },
    {
     "index": 3,
     "prefix": "t",
     "answer": "o",
     "word": "to",
     "slots": 1,
     "underscores": 1,
     "marker": "t_ ",
     "start": 309,
     "end": 312
    },
    {
     "index": 4,
     "prefix": "patt",
     "answer": "erns",
     "word": "patterns",
     "slots": 4,
     "underscores": 4,
     "marker": "patt_ _ _ _ ",
     "start": 321,
     "end": 333
    },
    {
     "index": 5,
     "prefix": "gene",
     "answer": "rate",
     "word": "generate",
     "slots": 4,
     "underscores": 4,
     "marker": "gene_ _ _ _ ",
     "start": 337,
     "end": 349
    },
    {
     "index": 6,
     "prefix": "mo",
     "answer": "re",
     "word": "more",
     "slots": 2,
     "underscores": 2,
     "marker": "mo_ _ ",
     "start": 359,
     "end": 365
    },
    {
     "index": 7,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 373,
     "end": 378
    },
    {
     "index": 8,
     "prefix": "Rese",
     "answer": "arch",
     "word": "Research",
     "slots": 4,
     "underscores": 4,
     "marker": "Rese_ _ _ _ ",
     "start": 391,
     "end": 403
    },
    {
     "index": 9,
     "prefix": "ha",
     "answer": "ve",
     "word": "have",
     "slots": 2,
     "underscores": 2,
     "marker": "ha_ _ ",
     "start": 416,
     "end": 422
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 人工智能在天气预报中的应用；数据模式识别与高效预测（气候气象、环境科学）。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "systems",
     "reason": "n.复←system（系统）"
    },
    {
     "word": "contrast",
     "reason": "n. 对比（by contrast）"
    },
    {
     "word": "vast",
     "reason": "adj. 大量的"
    },
    {
     "word": "to",
     "reason": "不定式标记（to identify，表目的）"
    },
    {
     "word": "patterns",
     "reason": "n.复←pattern（模式）"
    },
    {
     "word": "generate",
     "reason": "v. 生成（原形）"
    },
    {
     "word": "more",
     "reason": "adv. 更（比较级）"
    },
    {
     "word": "and",
     "reason": "conj. 和"
    },
    {
     "word": "Research",
     "reason": "n. 研究（机构，句首大写）"
    },
    {
     "word": "have",
     "reason": "v. 已经（现在完成时助动词）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 AI-based systems（主）analyze（谓）vast datasets（宾）；修饰：by contrast 介词短语作对比状语，to identify patterns and generate forecasts 不定式短语作目的状语（identify patterns 与 generate forecasts 并列）。 - 句② 主干 Research institutions（主）have created（谓）forecasting tools（宾）；修饰：driven by artificial intelligence 过去分词短语作后置定语（修饰 tools），that can improve short- and medium-range predictions 定语从句（修饰 tools），especially in regions with limited infrastructure 介词短语作状语（with limited infrastructure 后置定语修饰 regions）。"
    }
   ],
   "tags": [
    "自然科学",
    "环境科学",
    "气候气象"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260805A-2",
   "month": "2026年8月",
   "source": "20260805A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Early Socialization",
   "discipline": "社会科学",
   "topic": "心理学",
   "difficulty": "困难",
   "passage": "Social interaction plays a key role in early childhood development. Numerous studies indicate that early exposure to diverse social environments enhances cognitive and emotional growth. Social exch_ _ _ _ _ not on_ _ foster commun_ _ _ _ _ _ _ skills b_ _ also cult_ _ _ _ _ empathy a_ _ understanding. Chil_ _ _ _ learn t_ navigate com_ _ _ _ social dyna_ _ _ _, promoting resilience and adaptability. Furthermore, peer engagement has been shown to accelerate language acquisition and problem-solving capabilities. Advocates argue that investing in such experiences early on can yield lifelong benefits.",
   "blanks": [
    {
     "index": 0,
     "prefix": "exch",
     "answer": "anges",
     "word": "exchanges",
     "slots": 5,
     "underscores": 5,
     "marker": "exch_ _ _ _ _ ",
     "start": 193,
     "end": 207
    },
    {
     "index": 1,
     "prefix": "on",
     "answer": "ly",
     "word": "only",
     "slots": 2,
     "underscores": 2,
     "marker": "on_ _ ",
     "start": 211,
     "end": 217
    },
    {
     "index": 2,
     "prefix": "commun",
     "answer": "ication",
     "word": "communication",
     "slots": 7,
     "underscores": 7,
     "marker": "commun_ _ _ _ _ _ _ ",
     "start": 224,
     "end": 244
    },
    {
     "index": 3,
     "prefix": "b",
     "answer": "ut",
     "word": "but",
     "slots": 2,
     "underscores": 2,
     "marker": "b_ _ ",
     "start": 251,
     "end": 256
    },
    {
     "index": 4,
     "prefix": "cult",
     "answer": "ivate",
     "word": "cultivate",
     "slots": 5,
     "underscores": 5,
     "marker": "cult_ _ _ _ _ ",
     "start": 261,
     "end": 275
    },
    {
     "index": 5,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "underscores": 2,
     "marker": "a_ _ ",
     "start": 283,
     "end": 288
    },
    {
     "index": 6,
     "prefix": "Chil",
     "answer": "dren",
     "word": "Children",
     "slots": 4,
     "underscores": 4,
     "marker": "Chil_ _ _ _ ",
     "start": 303,
     "end": 315
    },
    {
     "index": 7,
     "prefix": "t",
     "answer": "o",
     "word": "to",
     "slots": 1,
     "underscores": 1,
     "marker": "t_ ",
     "start": 321,
     "end": 324
    },
    {
     "index": 8,
     "prefix": "com",
     "answer": "plex",
     "word": "complex",
     "slots": 4,
     "underscores": 4,
     "marker": "com_ _ _ _ ",
     "start": 333,
     "end": 344
    },
    {
     "index": 9,
     "prefix": "dyna",
     "answer": "mics",
     "word": "dynamics",
     "slots": 4,
     "underscores": 4,
     "marker": "dyna_ _ _ _",
     "start": 351,
     "end": 362
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 早期社会化与儿童发展；社交互动、共情培养与心理韧性（发展心理学、心理学）。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "exchanges",
     "reason": "n.复←exchange（交流）"
    },
    {
     "word": "only",
     "reason": "adv. 仅仅（not only）"
    },
    {
     "word": "communication",
     "reason": "n. 交流（communicate→communication）"
    },
    {
     "word": "but",
     "reason": "conj. 但是（not only...but also）"
    },
    {
     "word": "cultivate",
     "reason": "v. 培养"
    },
    {
     "word": "and",
     "reason": "conj. 和／并（but also...and）"
    },
    {
     "word": "Children",
     "reason": "n.复←child（儿童，句首大写）"
    },
    {
     "word": "to",
     "reason": "不定式标记（learn to navigate）"
    },
    {
     "word": "complex",
     "reason": "adj. 复杂的"
    },
    {
     "word": "dynamics",
     "reason": "n.复←dynamic（动态／互动）"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 Social exchanges（主）foster（谓）communication skills（宾），并 cultivate（谓）empathy and understanding（宾）；修饰：not only...but also 关联连词连接并列谓语。 - 句② 主干 Children（主）learn（谓）to navigate complex social dynamics（宾，不定式短语）；修饰：promoting resilience and adaptability 现在分词短语作结果状语。"
    }
   ],
   "tags": [
    "社会科学",
    "心理学",
    "发展心理学"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "20260805A-3",
   "month": "2026年8月",
   "source": "20260805A",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "Musical Evolution",
   "discipline": "艺术",
   "topic": "音乐",
   "difficulty": "中等",
   "passage": "The transition from Baroque to Classical music reflected broader cultural shifts in eighteenth-century Europe. Baroque music, with its elaborate textures and emotional intensity, mirrored the grandeur of monarchies and the Church. As Enlightenment ide_ _ _ gained infl_ _ _ _ _, Classical music eme_ _ _ _ with sim_ _ _ _, less orn_ _ _ structures, bala_ _ _ _ phrasing, and a fo_ _ _ on rea_ _ _ and or_ _ _. Composers li_ _ Haydn and Mozart embraced simplicity and symmetry, aligning with the era's intellectual and political movements that favored rational thought over divine authority. This stylistic shift marked a move toward accessibility and elegance in musical expression.",
   "blanks": [
    {
     "index": 0,
     "prefix": "ide",
     "answer": "als",
     "word": "ideals",
     "slots": 3,
     "underscores": 3,
     "marker": "ide_ _ _ ",
     "start": 248,
     "end": 257
    },
    {
     "index": 1,
     "prefix": "infl",
     "answer": "uence",
     "word": "influence",
     "slots": 5,
     "underscores": 5,
     "marker": "infl_ _ _ _ _",
     "start": 264,
     "end": 277
    },
    {
     "index": 2,
     "prefix": "eme",
     "answer": "rged",
     "word": "emerged",
     "slots": 4,
     "underscores": 4,
     "marker": "eme_ _ _ _ ",
     "start": 295,
     "end": 306
    },
    {
     "index": 3,
     "prefix": "sim",
     "answer": "pler",
     "word": "simpler",
     "slots": 4,
     "underscores": 4,
     "marker": "sim_ _ _ _",
     "start": 311,
     "end": 321
    },
    {
     "index": 4,
     "prefix": "orn",
     "answer": "ate",
     "word": "ornate",
     "slots": 3,
     "underscores": 3,
     "marker": "orn_ _ _ ",
     "start": 328,
     "end": 337
    },
    {
     "index": 5,
     "prefix": "bala",
     "answer": "nced",
     "word": "balanced",
     "slots": 4,
     "underscores": 4,
     "marker": "bala_ _ _ _ ",
     "start": 349,
     "end": 361
    },
    {
     "index": 6,
     "prefix": "fo",
     "answer": "cus",
     "word": "focus",
     "slots": 3,
     "underscores": 3,
     "marker": "fo_ _ _ ",
     "start": 377,
     "end": 385
    },
    {
     "index": 7,
     "prefix": "rea",
     "answer": "son",
     "word": "reason",
     "slots": 3,
     "underscores": 3,
     "marker": "rea_ _ _ ",
     "start": 388,
     "end": 397
    },
    {
     "index": 8,
     "prefix": "or",
     "answer": "der",
     "word": "order",
     "slots": 3,
     "underscores": 3,
     "marker": "or_ _ _",
     "start": 401,
     "end": 408
    },
    {
     "index": 9,
     "prefix": "li",
     "answer": "ke",
     "word": "like",
     "slots": 2,
     "underscores": 2,
     "marker": "li_ _ ",
     "start": 420,
     "end": 426
    }
   ],
   "translation": "",
   "analysis": [
    {
     "word": "主题",
     "reason": " 巴洛克至古典音乐的风格演变；启蒙思想、简约结构与理性表达（音乐派别、音乐）。"
    },
    {
     "word": "词汇",
     "reason": ""
    },
    {
     "word": "ideals",
     "reason": "n.复←ideal（理念）"
    },
    {
     "word": "influence",
     "reason": "n. 影响"
    },
    {
     "word": "emerged",
     "reason": "v.过去式←emerge（出现）"
    },
    {
     "word": "simpler",
     "reason": "adj.比较级←simple（更简单的）"
    },
    {
     "word": "ornate",
     "reason": "adj. 华丽的"
    },
    {
     "word": "balanced",
     "reason": "adj. 平衡的（balance→balanced）"
    },
    {
     "word": "focus",
     "reason": "n. 焦点（a focus on）"
    },
    {
     "word": "reason",
     "reason": "n. 理性／理由"
    },
    {
     "word": "order",
     "reason": "n. 秩序"
    },
    {
     "word": "like",
     "reason": "prep. 例如／像"
    },
    {
     "word": "语法",
     "reason": "（挖空句，按句分析） - 句① 主干 Classical music（主）emerged（谓）；修饰：As Enlightenment ideals gained influence 时间状语从句，with simpler, less ornate structures, balanced phrasing, and a focus on reason and order 介词短语作伴随状语（含 on reason and order 后置定语修饰 focus）。 - 句② 主干 Composers（主）embraced（谓）simplicity and symmetry（宾）；修饰：like Haydn and Mozart 介词短语举例，aligning with the era's intellectual and political movements 现在分词短语作伴随状语（that favored rational thought over divine authority 定语从句修饰 movements）。"
    }
   ],
   "tags": [
    "艺术",
    "音乐",
    "音乐派别"
   ],
   "status": "active",
   "blankCount": 10,
   "flags": []
  },
  {
   "id": "真题-002",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "社会科学",
   "topic": "settled agriculture",
   "difficulty": "中等",
   "passage": "The transition from nomadic lifestyles to settled agriculture marked a pivotal shift in early civilizations. Fertile river valleys enabled sustained crop production, leading to food surpluses that supported population growth and permanent settlements. Surplus reso_ _ _ _ _ allowed so_ _ individuals t_ specialize i_ non-agricultural ro_ _ _ , giving ri_ _ to soc_ _ _ stratification a_ _ centralized auth_ _ _ _ _. Leader eme_ _ _ _ to manage distribution, enforce rules, and coordinate communal projects such as irrigation. These developments laid the foundation for political organization and institutionalized power structures.",
   "blanks": [
    {
     "index": 0,
     "prefix": "reso",
     "answer": "urces",
     "word": "resources",
     "slots": 5,
     "marker": "reso_ _ _ _ _ ",
     "start": 260,
     "end": 274
    },
    {
     "index": 1,
     "prefix": "so",
     "answer": "me",
     "word": "some",
     "slots": 2,
     "marker": "so_ _ ",
     "start": 282,
     "end": 288
    },
    {
     "index": 2,
     "prefix": "t",
     "answer": "o",
     "word": "to",
     "slots": 1,
     "marker": "t_ ",
     "start": 300,
     "end": 303
    },
    {
     "index": 3,
     "prefix": "i",
     "answer": "n",
     "word": "in",
     "slots": 1,
     "marker": "i_ ",
     "start": 314,
     "end": 317
    },
    {
     "index": 4,
     "prefix": "ro",
     "answer": "les",
     "word": "roles",
     "slots": 3,
     "marker": "ro_ _ _ ",
     "start": 334,
     "end": 342
    },
    {
     "index": 5,
     "prefix": "ri",
     "answer": "se",
     "word": "rise",
     "slots": 2,
     "marker": "ri_ _ ",
     "start": 351,
     "end": 357
    },
    {
     "index": 6,
     "prefix": "soc",
     "answer": "ial",
     "word": "social",
     "slots": 3,
     "marker": "soc_ _ _ ",
     "start": 360,
     "end": 369
    },
    {
     "index": 7,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 384,
     "end": 389
    },
    {
     "index": 8,
     "prefix": "auth",
     "answer": "ority",
     "word": "authority",
     "slots": 5,
     "marker": "auth_ _ _ _ _",
     "start": 401,
     "end": 414
    },
    {
     "index": 9,
     "prefix": "eme",
     "answer": "rged",
     "word": "emerged",
     "slots": 4,
     "marker": "eme_ _ _ _ ",
     "start": 423,
     "end": 434
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "社会科学",
    "settled agriculture"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-004",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "生命科学",
   "topic": "aquatic ecosystem",
   "difficulty": "中等",
   "passage": "In aquatic ecosystems, relationships between predator and prey help maintain biodiversity. Large predatory fish like sharks and barracudas regulate populations of smaller fish, preventing ecological imbalance. Smaller fish, i_ turn, fe_ _ on micro_ _ _ _ _ _ organisms li_ _ plankton a_ _ algae, abso_ _ _ _ _ essential nutr_ _ _ _ _ from th_ _ . When sm_ _ _ fish a_ _ eaten by larger predators, the nutrients they've accumulated move up the food chain. This transfer of energy and nutrients supports the entire aquatic ecosystem.",
   "blanks": [
    {
     "index": 0,
     "prefix": "i",
     "answer": "n",
     "word": "in",
     "slots": 1,
     "marker": "i_ ",
     "start": 224,
     "end": 227
    },
    {
     "index": 1,
     "prefix": "fe",
     "answer": "ed",
     "word": "feed",
     "slots": 2,
     "marker": "fe_ _ ",
     "start": 233,
     "end": 239
    },
    {
     "index": 2,
     "prefix": "micro",
     "answer": "scopic",
     "word": "microscopic",
     "slots": 6,
     "marker": "micro_ _ _ _ _ _ ",
     "start": 242,
     "end": 259
    },
    {
     "index": 3,
     "prefix": "li",
     "answer": "ke",
     "word": "like",
     "slots": 2,
     "marker": "li_ _ ",
     "start": 269,
     "end": 275
    },
    {
     "index": 4,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 284,
     "end": 289
    },
    {
     "index": 5,
     "prefix": "abso",
     "answer": "rbing",
     "word": "absorbing",
     "slots": 5,
     "marker": "abso_ _ _ _ _ ",
     "start": 296,
     "end": 310
    },
    {
     "index": 6,
     "prefix": "nutr",
     "answer": "ients",
     "word": "nutrients",
     "slots": 5,
     "marker": "nutr_ _ _ _ _ ",
     "start": 320,
     "end": 334
    },
    {
     "index": 7,
     "prefix": "th",
     "answer": "em",
     "word": "them",
     "slots": 2,
     "marker": "th_ _ ",
     "start": 339,
     "end": 345
    },
    {
     "index": 8,
     "prefix": "sm",
     "answer": "all",
     "word": "small",
     "slots": 3,
     "marker": "sm_ _ _ ",
     "start": 352,
     "end": 360
    },
    {
     "index": 9,
     "prefix": "a",
     "answer": "re",
     "word": "are",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 365,
     "end": 370
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "生命科学",
    "aquatic ecosystem"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-005",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "生命科学",
   "topic": "extinction events",
   "difficulty": "困难",
   "passage": "Throughout Earth's history, extinction events have dramatically reshaped the planet's biodiversity. While some view these events as part of nature's cycle, cur_ _ _ _ extinctions te_ _ an alte_ _ _ _ _ story—o_ _ driven b_ human acti_ _ _ _. Industrialization, poll_ _ _ _ _ , deforestation, a_ _ climate cha_ _ _ are accele_ _ _ _ _ _ species loss at a pace never before seen, threatening ecosystems and eroding the genetic diversity that helps life adapt and survive. Unlike past natural extinctions, this crisis is one we have created and one we have the power to stop.",
   "blanks": [
    {
     "index": 0,
     "prefix": "cur",
     "answer": "rent",
     "word": "current",
     "slots": 4,
     "marker": "cur_ _ _ _ ",
     "start": 156,
     "end": 167
    },
    {
     "index": 1,
     "prefix": "te",
     "answer": "ll",
     "word": "tell",
     "slots": 2,
     "marker": "te_ _ ",
     "start": 179,
     "end": 185
    },
    {
     "index": 2,
     "prefix": "alte",
     "answer": "rnate",
     "word": "alternate",
     "slots": 5,
     "marker": "alte_ _ _ _ _ ",
     "start": 188,
     "end": 202
    },
    {
     "index": 3,
     "prefix": "o",
     "answer": "ne",
     "word": "one",
     "slots": 2,
     "marker": "o_ _ ",
     "start": 208,
     "end": 213
    },
    {
     "index": 4,
     "prefix": "b",
     "answer": "y",
     "word": "by",
     "slots": 1,
     "marker": "b_ ",
     "start": 220,
     "end": 223
    },
    {
     "index": 5,
     "prefix": "acti",
     "answer": "vity",
     "word": "activity",
     "slots": 4,
     "marker": "acti_ _ _ _",
     "start": 229,
     "end": 240
    },
    {
     "index": 6,
     "prefix": "poll",
     "answer": "ution",
     "word": "pollution",
     "slots": 5,
     "marker": "poll_ _ _ _ _ ",
     "start": 261,
     "end": 275
    },
    {
     "index": 7,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 292,
     "end": 297
    },
    {
     "index": 8,
     "prefix": "cha",
     "answer": "nge",
     "word": "change",
     "slots": 3,
     "marker": "cha_ _ _ ",
     "start": 305,
     "end": 314
    },
    {
     "index": 9,
     "prefix": "accele",
     "answer": "rating",
     "word": "accelerating",
     "slots": 6,
     "marker": "accele_ _ _ _ _ _ ",
     "start": 318,
     "end": 336
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "生命科学",
    "extinction events"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-006",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "社会科学",
   "topic": "cognition",
   "difficulty": "中等",
   "passage": "Understanding the relationship between cognition and consciousness is pivotal for unraveling the complexities of human thinking and behavior, as both are fundamental activities of the brain. Cognition is the men_ _ _ process b_ which indiv_ _ _ _ _ _ acquire know_ _ _ _ _ and unders_ _ _ _ _ _ _ through tho_ _ _ _ , experience, a_ _ the sen_ _ _ . Consciousness ref_ _ _ to t_ _ state of being aware of and responsive to one's surroundings. The advancements of neuroimaging technologies have provided insights into how consciousness arises from neural networks and how cognitive processes can occur both with and without conscious awareness.",
   "blanks": [
    {
     "index": 0,
     "prefix": "men",
     "answer": "tal",
     "word": "mental",
     "slots": 3,
     "marker": "men_ _ _ ",
     "start": 208,
     "end": 217
    },
    {
     "index": 1,
     "prefix": "b",
     "answer": "y",
     "word": "by",
     "slots": 1,
     "marker": "b_ ",
     "start": 225,
     "end": 228
    },
    {
     "index": 2,
     "prefix": "indiv",
     "answer": "iduals",
     "word": "individuals",
     "slots": 6,
     "marker": "indiv_ _ _ _ _ _ ",
     "start": 234,
     "end": 251
    },
    {
     "index": 3,
     "prefix": "know",
     "answer": "ledge",
     "word": "knowledge",
     "slots": 5,
     "marker": "know_ _ _ _ _ ",
     "start": 259,
     "end": 273
    },
    {
     "index": 4,
     "prefix": "unders",
     "answer": "tanding",
     "word": "understanding",
     "slots": 7,
     "marker": "unders_ _ _ _ _ _ _ ",
     "start": 277,
     "end": 297
    },
    {
     "index": 5,
     "prefix": "tho",
     "answer": "ught",
     "word": "thought",
     "slots": 4,
     "marker": "tho_ _ _ _ ",
     "start": 305,
     "end": 316
    },
    {
     "index": 6,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 330,
     "end": 335
    },
    {
     "index": 7,
     "prefix": "sen",
     "answer": "ses",
     "word": "senses",
     "slots": 3,
     "marker": "sen_ _ _ ",
     "start": 339,
     "end": 348
    },
    {
     "index": 8,
     "prefix": "ref",
     "answer": "ers",
     "word": "refers",
     "slots": 3,
     "marker": "ref_ _ _ ",
     "start": 364,
     "end": 373
    },
    {
     "index": 9,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "marker": "t_ _ ",
     "start": 376,
     "end": 381
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "社会科学",
    "cognition"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-007",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "生命科学",
   "topic": "keystone species",
   "difficulty": "困难",
   "passage": "In the realm of conservation ecology, the role of keystone species is profoundly significant. These species, although not necessarily abundant, exert a substantial influence on the structure and functioning of their ecosystems. Beavers, for example, transform landscapes by building dams that cr_ _ _ wetlands, habi_ _ _ _ rich i_ biodiversity a_ _ vital f_ _ water purifi_ _ _ _ _ _ and fl_ _ _ control. Their rem_ _ _ _ often trig_ _ _ _ a cas_ _ _ _ of ecological changes, potentially leading to the decline or transformation of the ecosystem. Consequently, conservation efforts frequently prioritize the protection of these pivotal organisms to maintain ecological balance.",
   "blanks": [
    {
     "index": 0,
     "prefix": "cr",
     "answer": "eate",
     "word": "create",
     "slots": 4,
     "marker": "cr_ _ _ ",
     "start": 293,
     "end": 301
    },
    {
     "index": 1,
     "prefix": "habi",
     "answer": "tats",
     "word": "habitats",
     "slots": 4,
     "marker": "habi_ _ _ _ ",
     "start": 311,
     "end": 323
    },
    {
     "index": 2,
     "prefix": "i",
     "answer": "n",
     "word": "in",
     "slots": 1,
     "marker": "i_ ",
     "start": 328,
     "end": 331
    },
    {
     "index": 3,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 344,
     "end": 349
    },
    {
     "index": 4,
     "prefix": "f",
     "answer": "or",
     "word": "for",
     "slots": 2,
     "marker": "f_ _ ",
     "start": 355,
     "end": 360
    },
    {
     "index": 5,
     "prefix": "purifi",
     "answer": "cation",
     "word": "purification",
     "slots": 6,
     "marker": "purifi_ _ _ _ _ _ ",
     "start": 366,
     "end": 384
    },
    {
     "index": 6,
     "prefix": "fl",
     "answer": "ood",
     "word": "flood",
     "slots": 3,
     "marker": "fl_ _ _ ",
     "start": 388,
     "end": 396
    },
    {
     "index": 7,
     "prefix": "rem",
     "answer": "oval",
     "word": "removal",
     "slots": 4,
     "marker": "rem_ _ _ _ ",
     "start": 411,
     "end": 422
    },
    {
     "index": 8,
     "prefix": "trig",
     "answer": "gers",
     "word": "triggers",
     "slots": 4,
     "marker": "trig_ _ _ _ ",
     "start": 428,
     "end": 440
    },
    {
     "index": 9,
     "prefix": "cas",
     "answer": "cade",
     "word": "cascade",
     "slots": 4,
     "marker": "cas_ _ _ _ ",
     "start": 442,
     "end": 453
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "生命科学",
    "keystone species"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-009",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "社会科学",
   "topic": "artifacts",
   "difficulty": "困难",
   "passage": "Archaeological excavations often reveal artifacts such as pottery, tools, and architectural structures, which can suggest cultural practices and societal norms. Advanced methods, including DNA analysis, radiocarbon dating, a_ _ stratigraphy, al_ _ _ archaeologists t_ trace hu_ _ _ migration pat_ _ _ _ _ and cons_ _ _ _ _ chronologies. How_ _ _ _, interpreting t_ _ findings requ_ _ _ _ careful conside_ _ _ _ _ _ of context and limitations, as the preservation and availability of artifacts can significantly influence conclusions. Thus, archaeology remains a vital discipline for understanding the complexities of human history and cultural development across millennia.",
   "blanks": [
    {
     "index": 0,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 223,
     "end": 228
    },
    {
     "index": 1,
     "prefix": "al",
     "answer": "low",
     "word": "allow",
     "slots": 3,
     "marker": "al_ _ _ ",
     "start": 242,
     "end": 250
    },
    {
     "index": 2,
     "prefix": "t",
     "answer": "o",
     "word": "to",
     "slots": 1,
     "marker": "t_ ",
     "start": 265,
     "end": 268
    },
    {
     "index": 3,
     "prefix": "hu",
     "answer": "man",
     "word": "human",
     "slots": 3,
     "marker": "hu_ _ _ ",
     "start": 274,
     "end": 282
    },
    {
     "index": 4,
     "prefix": "pat",
     "answer": "terns",
     "word": "patterns",
     "slots": 5,
     "marker": "pat_ _ _ _ _ ",
     "start": 292,
     "end": 305
    },
    {
     "index": 5,
     "prefix": "cons",
     "answer": "truct",
     "word": "construct",
     "slots": 5,
     "marker": "cons_ _ _ _ _ ",
     "start": 309,
     "end": 323
    },
    {
     "index": 6,
     "prefix": "How",
     "answer": "ever",
     "word": "However",
     "slots": 4,
     "marker": "How_ _ _ _",
     "start": 337,
     "end": 347
    },
    {
     "index": 7,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "marker": "t_ _ ",
     "start": 362,
     "end": 367
    },
    {
     "index": 8,
     "prefix": "requ",
     "answer": "ires",
     "word": "requires",
     "slots": 4,
     "marker": "requ_ _ _ _ ",
     "start": 376,
     "end": 388
    },
    {
     "index": 9,
     "prefix": "conside",
     "answer": "ration",
     "word": "consideration",
     "slots": 6,
     "marker": "conside_ _ _ _ _ _ ",
     "start": 396,
     "end": 415
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "社会科学",
    "artifacts"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-010",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "生命科学",
   "topic": "golden toad",
   "difficulty": "中等",
   "passage": "The extinction of the golden toad, a brightly colored amphibian once found in the cloud forests of Costa Rica, serves as a poignant example of the fragility of tropical ecosystems. The golden toad's last confirmed sighting was in 1989. Scientists bel_ _ _ _ its dec_ _ _ _ is d_ _ to hab_ _ _ _ destruction, chan_ _ _ _ weather patt_ _ _ _ and dis_ _ _ _ caused b_ a ty_ _ of fungus th_ _ attacks the skin of amphibians. Conservationists study the golden toad's demise to understand how climate factors affect amphibian populations. This case underscores the importance of preserving sensitive habitats and addressing global environmental challenges to protect biodiversity.",
   "blanks": [
    {
     "index": 0,
     "prefix": "bel",
     "answer": "ieve",
     "word": "believe",
     "slots": 4,
     "marker": "bel_ _ _ _ ",
     "start": 247,
     "end": 258
    },
    {
     "index": 1,
     "prefix": "dec",
     "answer": "line",
     "word": "decline",
     "slots": 4,
     "marker": "dec_ _ _ _ ",
     "start": 262,
     "end": 273
    },
    {
     "index": 2,
     "prefix": "d",
     "answer": "ue",
     "word": "due",
     "slots": 2,
     "marker": "d_ _ ",
     "start": 276,
     "end": 281
    },
    {
     "index": 3,
     "prefix": "hab",
     "answer": "itat",
     "word": "habitat",
     "slots": 4,
     "marker": "hab_ _ _ _ ",
     "start": 284,
     "end": 295
    },
    {
     "index": 4,
     "prefix": "chan",
     "answer": "ging",
     "word": "changing",
     "slots": 4,
     "marker": "chan_ _ _ _ ",
     "start": 308,
     "end": 320
    },
    {
     "index": 5,
     "prefix": "patt",
     "answer": "erns",
     "word": "patterns",
     "slots": 4,
     "marker": "patt_ _ _ _ ",
     "start": 328,
     "end": 340
    },
    {
     "index": 6,
     "prefix": "dis",
     "answer": "ease",
     "word": "disease",
     "slots": 4,
     "marker": "dis_ _ _ _ ",
     "start": 344,
     "end": 355
    },
    {
     "index": 7,
     "prefix": "b",
     "answer": "y",
     "word": "by",
     "slots": 1,
     "marker": "b_ ",
     "start": 362,
     "end": 365
    },
    {
     "index": 8,
     "prefix": "ty",
     "answer": "pe",
     "word": "type",
     "slots": 2,
     "marker": "ty_ _ ",
     "start": 367,
     "end": 373
    },
    {
     "index": 9,
     "prefix": "th",
     "answer": "at",
     "word": "that",
     "slots": 2,
     "marker": "th_ _ ",
     "start": 383,
     "end": 389
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "生命科学",
    "golden toad"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-011",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "生命科学",
   "topic": "extreme environments",
   "difficulty": "中等",
   "passage": "Deserts and extreme environments pose unique challenges for the organisms that inhabit them. These ar_ _ _ are charac_ _ _ _ _ _ _ by ha_ _ _ conditions su_ _ as int_ _ _ _ temperatures, sca_ _ _ water, a_ _ limited veget_ _ _ _ _ . Specialized adapt_ _ _ _ _ _ have evo_ _ _ _ in both plants and animals to increase survival. Studying these traits provides insights into the resilience of life and helps in understanding how ecosystems function under stress. Desert cacti store water in specialized tissues, while fennec foxes have enlarged ears for heat dissipation.",
   "blanks": [
    {
     "index": 0,
     "prefix": "ar",
     "answer": "eas",
     "word": "areas",
     "slots": 3,
     "marker": "ar_ _ _ ",
     "start": 99,
     "end": 107
    },
    {
     "index": 1,
     "prefix": "charac",
     "answer": "terized",
     "word": "characterized",
     "slots": 7,
     "marker": "charac_ _ _ _ _ _ _ ",
     "start": 111,
     "end": 131
    },
    {
     "index": 2,
     "prefix": "ha",
     "answer": "rsh",
     "word": "harsh",
     "slots": 3,
     "marker": "ha_ _ _ ",
     "start": 134,
     "end": 142
    },
    {
     "index": 3,
     "prefix": "su",
     "answer": "ch",
     "word": "such",
     "slots": 2,
     "marker": "su_ _ ",
     "start": 153,
     "end": 159
    },
    {
     "index": 4,
     "prefix": "int",
     "answer": "ense",
     "word": "intense",
     "slots": 4,
     "marker": "int_ _ _ _ ",
     "start": 162,
     "end": 173
    },
    {
     "index": 5,
     "prefix": "sca",
     "answer": "rce",
     "word": "scarce",
     "slots": 3,
     "marker": "sca_ _ _ ",
     "start": 187,
     "end": 196
    },
    {
     "index": 6,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 203,
     "end": 208
    },
    {
     "index": 7,
     "prefix": "veget",
     "answer": "ation",
     "word": "vegetation",
     "slots": 5,
     "marker": "veget_ _ _ _ _ ",
     "start": 216,
     "end": 231
    },
    {
     "index": 8,
     "prefix": "adapt",
     "answer": "ations",
     "word": "adaptations",
     "slots": 6,
     "marker": "adapt_ _ _ _ _ _ ",
     "start": 245,
     "end": 262
    },
    {
     "index": 9,
     "prefix": "evo",
     "answer": "lved",
     "word": "evolved",
     "slots": 4,
     "marker": "evo_ _ _ _ ",
     "start": 267,
     "end": 278
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "生命科学",
    "extreme environments"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-013",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "社会科学",
   "topic": "early tools",
   "difficulty": "中等",
   "passage": "Initially, humans used naturally occurring objects as tools (for instance, a sharp stone or a forked stick). Later, peo_ _ _ began purpos_ _ _ _ _ _ to sh_ _ _ wood a_ _ stone in_ _ tools. Bec_ _ _ _ of t_ _ perishable nat_ _ _ of wo_ _ , modern know_ _ _ _ _ of how it was used in prehistoric times is largely a matter of inference. With tools of stone, however, archaeologists are on firmer ground; there are a vast number of surviving artifacts. Throughout the world, flint was a favored material because of its unusual physical properties.",
   "blanks": [
    {
     "index": 0,
     "prefix": "peo",
     "answer": "ple",
     "word": "people",
     "slots": 3,
     "marker": "peo_ _ _ ",
     "start": 116,
     "end": 125
    },
    {
     "index": 1,
     "prefix": "purpos",
     "answer": "efully",
     "word": "purposefully",
     "slots": 6,
     "marker": "purpos_ _ _ _ _ _ ",
     "start": 131,
     "end": 149
    },
    {
     "index": 2,
     "prefix": "sh",
     "answer": "ape",
     "word": "shape",
     "slots": 3,
     "marker": "sh_ _ _ ",
     "start": 152,
     "end": 160
    },
    {
     "index": 3,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 165,
     "end": 170
    },
    {
     "index": 4,
     "prefix": "in",
     "answer": "to",
     "word": "into",
     "slots": 2,
     "marker": "in_ _ ",
     "start": 176,
     "end": 182
    },
    {
     "index": 5,
     "prefix": "Bec",
     "answer": "ause",
     "word": "Because",
     "slots": 4,
     "marker": "Bec_ _ _ _ ",
     "start": 189,
     "end": 200
    },
    {
     "index": 6,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "marker": "t_ _ ",
     "start": 203,
     "end": 208
    },
    {
     "index": 7,
     "prefix": "nat",
     "answer": "ure",
     "word": "nature",
     "slots": 3,
     "marker": "nat_ _ _ ",
     "start": 219,
     "end": 228
    },
    {
     "index": 8,
     "prefix": "wo",
     "answer": "od",
     "word": "wood",
     "slots": 2,
     "marker": "wo_ _ ",
     "start": 231,
     "end": 237
    },
    {
     "index": 9,
     "prefix": "know",
     "answer": "ledge",
     "word": "knowledge",
     "slots": 5,
     "marker": "know_ _ _ _ _ ",
     "start": 246,
     "end": 260
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "社会科学",
    "early tools"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-014",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "艺术",
   "topic": "theater",
   "difficulty": "简单",
   "passage": "Theater has long been a powerful medium for social change, offering the viewing public a space to reflect on societal norms and injustices. Like many ot_ _ _ art fo_ _ _ , theater cre_ _ _ _ a dyn_ _ _ _ and abso_ _ _ _ _ experience f_ _ the audi_ _ _ _ that c_ _ provoke de_ _ emotional resp_ _ _ _ _. Such engagement makes theater uniquely suited for persuasive storytelling, galvanizing viewers to consider new perspectives and ideas critically. When playwrights craft narratives that challenge prevailing attitudes, they can influence public discourse and inspire action.",
   "blanks": [
    {
     "index": 0,
     "prefix": "ot",
     "answer": "her",
     "word": "other",
     "slots": 3,
     "marker": "ot_ _ _ ",
     "start": 150,
     "end": 158
    },
    {
     "index": 1,
     "prefix": "fo",
     "answer": "rms",
     "word": "forms",
     "slots": 3,
     "marker": "fo_ _ _ ",
     "start": 162,
     "end": 170
    },
    {
     "index": 2,
     "prefix": "cre",
     "answer": "ates",
     "word": "creates",
     "slots": 4,
     "marker": "cre_ _ _ _ ",
     "start": 180,
     "end": 191
    },
    {
     "index": 3,
     "prefix": "dyn",
     "answer": "amic",
     "word": "dynamic",
     "slots": 4,
     "marker": "dyn_ _ _ _ ",
     "start": 193,
     "end": 204
    },
    {
     "index": 4,
     "prefix": "abso",
     "answer": "rbing",
     "word": "absorbing",
     "slots": 5,
     "marker": "abso_ _ _ _ _ ",
     "start": 208,
     "end": 222
    },
    {
     "index": 5,
     "prefix": "f",
     "answer": "or",
     "word": "for",
     "slots": 2,
     "marker": "f_ _ ",
     "start": 233,
     "end": 238
    },
    {
     "index": 6,
     "prefix": "audi",
     "answer": "ence",
     "word": "audience",
     "slots": 4,
     "marker": "audi_ _ _ _ ",
     "start": 242,
     "end": 254
    },
    {
     "index": 7,
     "prefix": "c",
     "answer": "an",
     "word": "can",
     "slots": 2,
     "marker": "c_ _ ",
     "start": 259,
     "end": 264
    },
    {
     "index": 8,
     "prefix": "de",
     "answer": "ep",
     "word": "deep",
     "slots": 2,
     "marker": "de_ _ ",
     "start": 272,
     "end": 278
    },
    {
     "index": 9,
     "prefix": "resp",
     "answer": "onses",
     "word": "responses",
     "slots": 5,
     "marker": "resp_ _ _ _ _",
     "start": 288,
     "end": 301
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "艺术",
    "theater"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-015",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "社会科学",
   "topic": "Roman hierarchy",
   "difficulty": "中等",
   "passage": "Ancient Roman society was fundamentally structured by a rigid social hierarchy that divided its population into strictly separated classes based on birth and wealth. An e_ _ _ _ minority o_ patrician fami_ _ _ _ firmly he_ _ absolute pow_ _ . Meanwhile, th_ vast majo_ _ _ _ of citi_ _ _ _ constantly strug_ _ _ _ to achi_ _ _ equality. Over centuries, intense social conflicts slowly forced the government to establish new written laws and reforms. Ultimately, this dynamically evolving class system laid the essential foundational framework for many subsequent political institutions throughout Western history.",
   "blanks": [
    {
     "index": 0,
     "prefix": "e",
     "answer": "lite",
     "word": "elite",
     "slots": 4,
     "marker": "e_ _ _ _ ",
     "start": 169,
     "end": 178
    },
    {
     "index": 1,
     "prefix": "o",
     "answer": "f",
     "word": "of",
     "slots": 1,
     "marker": "o_ ",
     "start": 187,
     "end": 190
    },
    {
     "index": 2,
     "prefix": "fami",
     "answer": "lies",
     "word": "families",
     "slots": 4,
     "marker": "fami_ _ _ _ ",
     "start": 200,
     "end": 212
    },
    {
     "index": 3,
     "prefix": "he",
     "answer": "ld",
     "word": "held",
     "slots": 2,
     "marker": "he_ _ ",
     "start": 219,
     "end": 225
    },
    {
     "index": 4,
     "prefix": "pow",
     "answer": "er",
     "word": "power",
     "slots": 2,
     "marker": "pow_ _ ",
     "start": 234,
     "end": 241
    },
    {
     "index": 5,
     "prefix": "th",
     "answer": "e",
     "word": "the",
     "slots": 1,
     "marker": "th_ ",
     "start": 254,
     "end": 258
    },
    {
     "index": 6,
     "prefix": "majo",
     "answer": "rity",
     "word": "majority",
     "slots": 4,
     "marker": "majo_ _ _ _ ",
     "start": 263,
     "end": 275
    },
    {
     "index": 7,
     "prefix": "citi",
     "answer": "zens",
     "word": "citizens",
     "slots": 4,
     "marker": "citi_ _ _ _ ",
     "start": 278,
     "end": 290
    },
    {
     "index": 8,
     "prefix": "strug",
     "answer": "gled",
     "word": "struggled",
     "slots": 4,
     "marker": "strug_ _ _ _ ",
     "start": 301,
     "end": 314
    },
    {
     "index": 9,
     "prefix": "achi",
     "answer": "eve",
     "word": "achieve",
     "slots": 3,
     "marker": "achi_ _ _ ",
     "start": 317,
     "end": 327
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "社会科学",
    "Roman hierarchy"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-016",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "生命科学",
   "topic": "circadian rhythms",
   "difficulty": "中等",
   "passage": "Circadian rhythms are natural cycles that help regulate key functions in the body over a roughly 24-hour period. These rhythms respond to external cues like light and temperature, aligning sleep, alertness, and hormone levels with the environment. Disruption of circadian rhythms, often due to irre_ _ _ _ _ sleep patt_ _ _ _ , can le_ _ to nega_ _ _ _ effects o_ health, incl_ _ _ _ _ impaired cogn_ _ _ _ _ function, mo_ _ disorders, a_ _ metabolic distur_ _ _ _ _ _. Understanding the molecular mechanisms underlying these rhythms is crucial for developing therapeutic strategies for disorders related to circadian disruption.",
   "blanks": [
    {
     "index": 0,
     "prefix": "irre",
     "answer": "gular",
     "word": "irregular",
     "slots": 5,
     "marker": "irre_ _ _ _ _ ",
     "start": 294,
     "end": 308
    },
    {
     "index": 1,
     "prefix": "patt",
     "answer": "erns",
     "word": "patterns",
     "slots": 4,
     "marker": "patt_ _ _ _ ",
     "start": 314,
     "end": 326
    },
    {
     "index": 2,
     "prefix": "le",
     "answer": "ad",
     "word": "lead",
     "slots": 2,
     "marker": "le_ _ ",
     "start": 332,
     "end": 338
    },
    {
     "index": 3,
     "prefix": "nega",
     "answer": "tive",
     "word": "negative",
     "slots": 4,
     "marker": "nega_ _ _ _ ",
     "start": 341,
     "end": 353
    },
    {
     "index": 4,
     "prefix": "o",
     "answer": "n",
     "word": "on",
     "slots": 1,
     "marker": "o_ ",
     "start": 361,
     "end": 364
    },
    {
     "index": 5,
     "prefix": "incl",
     "answer": "uding",
     "word": "including",
     "slots": 5,
     "marker": "incl_ _ _ _ _ ",
     "start": 372,
     "end": 386
    },
    {
     "index": 6,
     "prefix": "cogn",
     "answer": "itive",
     "word": "cognitive",
     "slots": 5,
     "marker": "cogn_ _ _ _ _ ",
     "start": 395,
     "end": 409
    },
    {
     "index": 7,
     "prefix": "mo",
     "answer": "od",
     "word": "mood",
     "slots": 2,
     "marker": "mo_ _ ",
     "start": 419,
     "end": 425
    },
    {
     "index": 8,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 436,
     "end": 441
    },
    {
     "index": 9,
     "prefix": "distur",
     "answer": "bances",
     "word": "disturbances",
     "slots": 6,
     "marker": "distur_ _ _ _ _ _",
     "start": 451,
     "end": 468
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "生命科学",
    "circadian rhythms"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-018",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "艺术",
   "topic": "glassblowing",
   "difficulty": "中等",
   "passage": "Glassblowing began in the Roman Empire around the first century B.C.E. It involves shaping molten glass by blowing air into it through a tube, allowing artisans to create different shapes. Roman glass_ _ _ _ _ _ _ crafted every_ _ _ items li_ _ cups, bot_ _ _ _ , and decor_ _ _ _ _ vases, mak_ _ _ glass mo_ _ widely avai_ _ _ _ _. Glassblowing i_ still carr_ _ _ out today for both artistic and functional purposes—creating everything from colorful sculptures and ornaments to custom lighting and scientific glassware.",
   "blanks": [
    {
     "index": 0,
     "prefix": "glass",
     "answer": "blowers",
     "word": "glassblowers",
     "slots": 7,
     "marker": "glass_ _ _ _ _ _ _ ",
     "start": 195,
     "end": 214
    },
    {
     "index": 1,
     "prefix": "every",
     "answer": "day",
     "word": "everyday",
     "slots": 3,
     "marker": "every_ _ _ ",
     "start": 222,
     "end": 233
    },
    {
     "index": 2,
     "prefix": "li",
     "answer": "ke",
     "word": "like",
     "slots": 2,
     "marker": "li_ _ ",
     "start": 239,
     "end": 245
    },
    {
     "index": 3,
     "prefix": "bot",
     "answer": "tles",
     "word": "bottles",
     "slots": 4,
     "marker": "bot_ _ _ _ ",
     "start": 251,
     "end": 262
    },
    {
     "index": 4,
     "prefix": "decor",
     "answer": "ative",
     "word": "decorative",
     "slots": 5,
     "marker": "decor_ _ _ _ _ ",
     "start": 268,
     "end": 283
    },
    {
     "index": 5,
     "prefix": "mak",
     "answer": "ing",
     "word": "making",
     "slots": 3,
     "marker": "mak_ _ _ ",
     "start": 290,
     "end": 299
    },
    {
     "index": 6,
     "prefix": "mo",
     "answer": "re",
     "word": "more",
     "slots": 2,
     "marker": "mo_ _ ",
     "start": 305,
     "end": 311
    },
    {
     "index": 7,
     "prefix": "avai",
     "answer": "lable",
     "word": "available",
     "slots": 5,
     "marker": "avai_ _ _ _ _",
     "start": 318,
     "end": 331
    },
    {
     "index": 8,
     "prefix": "i",
     "answer": "s",
     "word": "is",
     "slots": 1,
     "marker": "i_ ",
     "start": 346,
     "end": 349
    },
    {
     "index": 9,
     "prefix": "carr",
     "answer": "ied",
     "word": "carried",
     "slots": 3,
     "marker": "carr_ _ _ ",
     "start": 355,
     "end": 365
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "艺术",
    "glassblowing"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-025",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "艺术",
   "topic": "reggae",
   "difficulty": "中等",
   "passage": "Reggae music, originating in Jamaica in the late 1960s, has become a global cultural phenomenon. Rooted in earlier styles like ska and rocksteady, reggae evolved as a voice for the marginalized and against violence and war. Characterized by its distinctive rhy_ _ _ and soci_ _ _ _ conscious lyr_ _ _ , the ge_ _ _ addr_ _ _ _ _ themes o_ resistance, pe_ _ _ , and spir_ _ _ _ _ unity. Dee_ _ _ connected t_ Jamaican culture, reggae has impacted fashion, language, and political movements. Today, reggae continues to inspire new generations of musicians and activists, maintaining its relevance in a rapidly changing world.",
   "blanks": [
    {
     "index": 0,
     "prefix": "rhy",
     "answer": "thm",
     "word": "rhythm",
     "slots": 3,
     "marker": "rhy_ _ _ ",
     "start": 257,
     "end": 266
    },
    {
     "index": 1,
     "prefix": "soci",
     "answer": "ally",
     "word": "socially",
     "slots": 4,
     "marker": "soci_ _ _ _ ",
     "start": 270,
     "end": 282
    },
    {
     "index": 2,
     "prefix": "lyr",
     "answer": "ics",
     "word": "lyrics",
     "slots": 3,
     "marker": "lyr_ _ _ ",
     "start": 292,
     "end": 301
    },
    {
     "index": 3,
     "prefix": "ge",
     "answer": "nre",
     "word": "genre",
     "slots": 3,
     "marker": "ge_ _ _ ",
     "start": 307,
     "end": 315
    },
    {
     "index": 4,
     "prefix": "addr",
     "answer": "esses",
     "word": "addresses",
     "slots": 5,
     "marker": "addr_ _ _ _ _ ",
     "start": 315,
     "end": 329
    },
    {
     "index": 5,
     "prefix": "o",
     "answer": "f",
     "word": "of",
     "slots": 1,
     "marker": "o_ ",
     "start": 336,
     "end": 339
    },
    {
     "index": 6,
     "prefix": "pe",
     "answer": "ace",
     "word": "peace",
     "slots": 3,
     "marker": "pe_ _ _ ",
     "start": 351,
     "end": 359
    },
    {
     "index": 7,
     "prefix": "spir",
     "answer": "itual",
     "word": "spiritual",
     "slots": 5,
     "marker": "spir_ _ _ _ _ ",
     "start": 365,
     "end": 379
    },
    {
     "index": 8,
     "prefix": "Dee",
     "answer": "ply",
     "word": "Deeply",
     "slots": 3,
     "marker": "Dee_ _ _ ",
     "start": 386,
     "end": 395
    },
    {
     "index": 9,
     "prefix": "t",
     "answer": "o",
     "word": "to",
     "slots": 1,
     "marker": "t_ ",
     "start": 405,
     "end": 408
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "艺术",
    "reggae"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-026",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "生命科学",
   "topic": "lions",
   "difficulty": "简单",
   "passage": "Lions, known as the kings of the jungle, are actually savanna (grassland) dwellers found mainly in Africa. They are the only truly soc_ _ _ big ca_ _ , living i_ prides, wh_ _ _ are gro_ _ _ that typi_ _ _ _ _ include rel_ _ _ _ females, th_ _ _ offspring, a_ _ some ma_ _ _. The pride structure aids in hunting, cub protection, and territorial defense. Lions communicate through vocalizations, such as roars, which can be heard up to 5 miles away. These vocal signals help maintain territorial boundaries and coordinate group activities.",
   "blanks": [
    {
     "index": 0,
     "prefix": "soc",
     "answer": "ial",
     "word": "social",
     "slots": 3,
     "marker": "soc_ _ _ ",
     "start": 131,
     "end": 140
    },
    {
     "index": 1,
     "prefix": "ca",
     "answer": "ts",
     "word": "cats",
     "slots": 2,
     "marker": "ca_ _ ",
     "start": 144,
     "end": 150
    },
    {
     "index": 2,
     "prefix": "i",
     "answer": "n",
     "word": "in",
     "slots": 1,
     "marker": "i_ ",
     "start": 159,
     "end": 162
    },
    {
     "index": 3,
     "prefix": "wh",
     "answer": "ich",
     "word": "which",
     "slots": 3,
     "marker": "wh_ _ _ ",
     "start": 170,
     "end": 178
    },
    {
     "index": 4,
     "prefix": "gro",
     "answer": "ups",
     "word": "groups",
     "slots": 3,
     "marker": "gro_ _ _ ",
     "start": 182,
     "end": 191
    },
    {
     "index": 5,
     "prefix": "typi",
     "answer": "cally",
     "word": "typically",
     "slots": 5,
     "marker": "typi_ _ _ _ _ ",
     "start": 196,
     "end": 210
    },
    {
     "index": 6,
     "prefix": "rel",
     "answer": "ated",
     "word": "related",
     "slots": 4,
     "marker": "rel_ _ _ _ ",
     "start": 218,
     "end": 229
    },
    {
     "index": 7,
     "prefix": "th",
     "answer": "eir",
     "word": "their",
     "slots": 3,
     "marker": "th_ _ _ ",
     "start": 238,
     "end": 246
    },
    {
     "index": 8,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 257,
     "end": 262
    },
    {
     "index": 9,
     "prefix": "ma",
     "answer": "les",
     "word": "males",
     "slots": 3,
     "marker": "ma_ _ _",
     "start": 267,
     "end": 274
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "生命科学",
    "lions"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-027",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "自然科学",
   "topic": "climate change",
   "difficulty": "中等",
   "passage": "Climate change has become one of the most pressing current issues of our time, sparking global conversations. When discussing climate, it is often confused with weather. Climate specif_ _ _ _ _ _ refers t_ long-term tre_ _ _ in tempe_ _ _ _ _ _ , humidity, wi_ _ , and precip_ _ _ _ _ _ _ that def_ _ _ typical condi_ _ _ _ _ for a reg_ _ _ —not ju_ _ the daily forecast. While weather can shift dramatically from one day to the next, the climate of an area describes what is normal over decades.",
   "blanks": [
    {
     "index": 0,
     "prefix": "specif",
     "answer": "ically",
     "word": "specifically",
     "slots": 6,
     "marker": "specif_ _ _ _ _ _ ",
     "start": 178,
     "end": 196
    },
    {
     "index": 1,
     "prefix": "t",
     "answer": "o",
     "word": "to",
     "slots": 1,
     "marker": "t_ ",
     "start": 203,
     "end": 206
    },
    {
     "index": 2,
     "prefix": "tre",
     "answer": "nds",
     "word": "trends",
     "slots": 3,
     "marker": "tre_ _ _ ",
     "start": 216,
     "end": 225
    },
    {
     "index": 3,
     "prefix": "tempe",
     "answer": "rature",
     "word": "temperature",
     "slots": 6,
     "marker": "tempe_ _ _ _ _ _ ",
     "start": 228,
     "end": 245
    },
    {
     "index": 4,
     "prefix": "wi",
     "answer": "nd",
     "word": "wind",
     "slots": 2,
     "marker": "wi_ _ ",
     "start": 257,
     "end": 263
    },
    {
     "index": 5,
     "prefix": "precip",
     "answer": "itation",
     "word": "precipitation",
     "slots": 7,
     "marker": "precip_ _ _ _ _ _ _ ",
     "start": 269,
     "end": 289
    },
    {
     "index": 6,
     "prefix": "def",
     "answer": "ine",
     "word": "define",
     "slots": 3,
     "marker": "def_ _ _ ",
     "start": 294,
     "end": 303
    },
    {
     "index": 7,
     "prefix": "condi",
     "answer": "tions",
     "word": "conditions",
     "slots": 5,
     "marker": "condi_ _ _ _ _ ",
     "start": 311,
     "end": 326
    },
    {
     "index": 8,
     "prefix": "reg",
     "answer": "ion",
     "word": "region",
     "slots": 3,
     "marker": "reg_ _ _ ",
     "start": 332,
     "end": 341
    },
    {
     "index": 9,
     "prefix": "ju",
     "answer": "st",
     "word": "just",
     "slots": 2,
     "marker": "ju_ _ ",
     "start": 346,
     "end": 352
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "自然科学",
    "climate change"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-029",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "自然科学",
   "topic": "glaciers",
   "difficulty": "中等",
   "passage": "Glaciers are large expanses of ice that move slowly over land. As th_ _ advance, these mas_ _ _ play a crit_ _ _ _ role i_ shaping t_ _ Earth's sur_ _ _ _ . The imm_ _ _ _ weight a_ _ movement o_ glaciers gr_ _ _ down rocks and soil, creating valleys. These glacially carved depressions may eventually evolve into freshwater basins following the ice's retreat. Researchers analyze glacial geomorphology to reconstruct paleoclimatic conditions and model prospective environmental shifts. The shrinking of glaciers is a clear sign of ongoing global climate change.",
   "blanks": [
    {
     "index": 0,
     "prefix": "th",
     "answer": "ey",
     "word": "they",
     "slots": 2,
     "marker": "th_ _ ",
     "start": 66,
     "end": 72
    },
    {
     "index": 1,
     "prefix": "mas",
     "answer": "ses",
     "word": "masses",
     "slots": 3,
     "marker": "mas_ _ _ ",
     "start": 87,
     "end": 96
    },
    {
     "index": 2,
     "prefix": "crit",
     "answer": "ical",
     "word": "critical",
     "slots": 4,
     "marker": "crit_ _ _ _ ",
     "start": 103,
     "end": 115
    },
    {
     "index": 3,
     "prefix": "i",
     "answer": "n",
     "word": "in",
     "slots": 1,
     "marker": "i_ ",
     "start": 120,
     "end": 123
    },
    {
     "index": 4,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "marker": "t_ _ ",
     "start": 131,
     "end": 136
    },
    {
     "index": 5,
     "prefix": "sur",
     "answer": "face",
     "word": "surface",
     "slots": 4,
     "marker": "sur_ _ _ _ ",
     "start": 144,
     "end": 155
    },
    {
     "index": 6,
     "prefix": "imm",
     "answer": "ense",
     "word": "immense",
     "slots": 4,
     "marker": "imm_ _ _ _ ",
     "start": 161,
     "end": 172
    },
    {
     "index": 7,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 179,
     "end": 184
    },
    {
     "index": 8,
     "prefix": "o",
     "answer": "f",
     "word": "of",
     "slots": 1,
     "marker": "o_ ",
     "start": 193,
     "end": 196
    },
    {
     "index": 9,
     "prefix": "gr",
     "answer": "ind",
     "word": "grind",
     "slots": 3,
     "marker": "gr_ _ _ ",
     "start": 205,
     "end": 213
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "自然科学",
    "glaciers"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-030",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "生命科学",
   "topic": "Spix's Macaw",
   "difficulty": "中等",
   "passage": "The Spix's Macaw, native to Brazil and famously known as the inspiration for the animated movie Rio, is critically endangered, with fewer than a hundred individuals remaining. The popul_ _ _ _ _ of th_ _ vibrant bl_ _ bird decl_ _ _ _ because o_ habitat lo_ _ and ill_ _ _ _ trapping f_ _ sale abr_ _ _ , where pri _ _ _ _ collectors and pet stores spent large sums of money on the birds. Conservationists have initiated captive breeding programs and habitat restoration efforts to reintroduce the Spix's Macaw into the wild, where it was officially declared extinct in 2019.",
   "blanks": [
    {
     "index": 0,
     "prefix": "popul",
     "answer": "ation",
     "word": "population",
     "slots": 5,
     "marker": "popul_ _ _ _ _ ",
     "start": 180,
     "end": 195
    },
    {
     "index": 1,
     "prefix": "th",
     "answer": "is",
     "word": "this",
     "slots": 2,
     "marker": "th_ _ ",
     "start": 198,
     "end": 204
    },
    {
     "index": 2,
     "prefix": "bl",
     "answer": "ue",
     "word": "blue",
     "slots": 2,
     "marker": "bl_ _ ",
     "start": 212,
     "end": 218
    },
    {
     "index": 3,
     "prefix": "decl",
     "answer": "ined",
     "word": "declined",
     "slots": 4,
     "marker": "decl_ _ _ _ ",
     "start": 223,
     "end": 235
    },
    {
     "index": 4,
     "prefix": "o",
     "answer": "f",
     "word": "of",
     "slots": 1,
     "marker": "o_ ",
     "start": 243,
     "end": 246
    },
    {
     "index": 5,
     "prefix": "lo",
     "answer": "ss",
     "word": "loss",
     "slots": 2,
     "marker": "lo_ _ ",
     "start": 254,
     "end": 260
    },
    {
     "index": 6,
     "prefix": "ill",
     "answer": "egal",
     "word": "illegal",
     "slots": 4,
     "marker": "ill_ _ _ _ ",
     "start": 264,
     "end": 275
    },
    {
     "index": 7,
     "prefix": "f",
     "answer": "or",
     "word": "for",
     "slots": 2,
     "marker": "f_ _ ",
     "start": 284,
     "end": 289
    },
    {
     "index": 8,
     "prefix": "abr",
     "answer": "oad",
     "word": "abroad",
     "slots": 3,
     "marker": "abr_ _ _ ",
     "start": 294,
     "end": 303
    },
    {
     "index": 9,
     "prefix": "pri",
     "answer": "vate",
     "word": "private",
     "slots": 4,
     "marker": "pri _ _ _ _ ",
     "start": 311,
     "end": 323
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "生命科学",
    "Spix's Macaw"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-031",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "艺术",
   "topic": "pottery",
   "difficulty": "简单",
   "passage": "Pottery is an ancient craft that involves shaping and firing clay in special wood-fired ovens (kilns) to create functional and decorative objects. Early po_ _ were sha_ _ _ by ha_ _ and hea_ _ _ in sim_ _ _ kilns, prod_ _ _ _ _ ceramics th_ _ lasted lon_ _ _. As soci _ _ _ _ developed, techn_ _ _ _ _ became more refined, with different cultures creating distinct styles. Over time, pottery evolved into both a practical craft and a significant form of artistic and cultural expression. Pottery has been practiced by cultures worldwide, reflecting their unique artistic traditions and functional needs.",
   "blanks": [
    {
     "index": 0,
     "prefix": "po",
     "answer": "ts",
     "word": "pots",
     "slots": 2,
     "marker": "po_ _ ",
     "start": 153,
     "end": 159
    },
    {
     "index": 1,
     "prefix": "sha",
     "answer": "ped",
     "word": "shaped",
     "slots": 3,
     "marker": "sha_ _ _ ",
     "start": 164,
     "end": 173
    },
    {
     "index": 2,
     "prefix": "ha",
     "answer": "nd",
     "word": "hand",
     "slots": 2,
     "marker": "ha_ _ ",
     "start": 176,
     "end": 182
    },
    {
     "index": 3,
     "prefix": "hea",
     "answer": "ted",
     "word": "heated",
     "slots": 3,
     "marker": "hea_ _ _ ",
     "start": 186,
     "end": 195
    },
    {
     "index": 4,
     "prefix": "sim",
     "answer": "ple",
     "word": "simple",
     "slots": 3,
     "marker": "sim_ _ _ ",
     "start": 198,
     "end": 207
    },
    {
     "index": 5,
     "prefix": "prod",
     "answer": "ucing",
     "word": "producing",
     "slots": 5,
     "marker": "prod_ _ _ _ _ ",
     "start": 214,
     "end": 228
    },
    {
     "index": 6,
     "prefix": "th",
     "answer": "at",
     "word": "that",
     "slots": 2,
     "marker": "th_ _ ",
     "start": 237,
     "end": 243
    },
    {
     "index": 7,
     "prefix": "lon",
     "answer": "ger",
     "word": "longer",
     "slots": 3,
     "marker": "lon_ _ _",
     "start": 250,
     "end": 258
    },
    {
     "index": 8,
     "prefix": "soci",
     "answer": "eties",
     "word": "societies",
     "slots": 5,
     "marker": "soci _ _ _ _ ",
     "start": 263,
     "end": 276
    },
    {
     "index": 9,
     "prefix": "techn",
     "answer": "iques",
     "word": "techniques",
     "slots": 5,
     "marker": "techn_ _ _ _ _ ",
     "start": 287,
     "end": 302
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "艺术",
    "pottery"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-032",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "自然科学",
   "topic": "glacier formation",
   "difficulty": "简单",
   "passage": "Glaciers are massive, slow-moving bodies of ice that form in areas where snow accumulates over time and compresses into ice. Th_ _ can cha_ _ _ landscapes thr_ _ _ _ processes li_ _ erosion a_ _ deposition. A_ glaciers mo_ _ , they ca _ _ _ out val_ _ _ _ and fjords, lea_ _ _ _ behind distinct geological features. Scientists study glaciers to understand past climate conditions and predict future changes. Glaciers are of particular concern today because their melting contributes to rising sea levels, impacting coastal communities worldwide.",
   "blanks": [
    {
     "index": 0,
     "prefix": "Th",
     "answer": "ey",
     "word": "They",
     "slots": 2,
     "marker": "Th_ _ ",
     "start": 125,
     "end": 131
    },
    {
     "index": 1,
     "prefix": "cha",
     "answer": "nge",
     "word": "change",
     "slots": 3,
     "marker": "cha_ _ _ ",
     "start": 135,
     "end": 144
    },
    {
     "index": 2,
     "prefix": "thr",
     "answer": "ough",
     "word": "through",
     "slots": 4,
     "marker": "thr_ _ _ _ ",
     "start": 155,
     "end": 166
    },
    {
     "index": 3,
     "prefix": "li",
     "answer": "ke",
     "word": "like",
     "slots": 2,
     "marker": "li_ _ ",
     "start": 176,
     "end": 182
    },
    {
     "index": 4,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 190,
     "end": 195
    },
    {
     "index": 5,
     "prefix": "A",
     "answer": "s",
     "word": "As",
     "slots": 1,
     "marker": "A_ ",
     "start": 207,
     "end": 210
    },
    {
     "index": 6,
     "prefix": "mo",
     "answer": "ve",
     "word": "move",
     "slots": 2,
     "marker": "mo_ _ ",
     "start": 219,
     "end": 225
    },
    {
     "index": 7,
     "prefix": "ca",
     "answer": "rve",
     "word": "carve",
     "slots": 3,
     "marker": "ca _ _ _ ",
     "start": 232,
     "end": 241
    },
    {
     "index": 8,
     "prefix": "val",
     "answer": "leys",
     "word": "valleys",
     "slots": 4,
     "marker": "val_ _ _ _ ",
     "start": 245,
     "end": 256
    },
    {
     "index": 9,
     "prefix": "lea",
     "answer": "ving",
     "word": "leaving",
     "slots": 4,
     "marker": "lea_ _ _ _ ",
     "start": 268,
     "end": 279
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "自然科学",
    "glacier formation"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-034",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "自然科学",
   "topic": "tectonic plates",
   "difficulty": "中等",
   "passage": "Tectonic plates are large pieces of Earth's outer shell that move slowly over the planet's surface, and their study is fundamental in understanding Earth's geological activity. These plates fit toge_ _ _ _ much li_ _ a jig_ _ _ puzzle a_ _ constantly sh_ _ , causing earth _ _ _ _ _, the form_ _ _ _ _ of moun_ _ _ _ , and volc _ _ _ _ eruptions. Scien_ _ _ _ _ analyze these movements to better understand natural disasters and how Earth's surface changes over time. Advances in this field have significantly improved our ability to monitor and prepare for natural disasters as well as to mitigate their impacts.",
   "blanks": [
    {
     "index": 0,
     "prefix": "toge",
     "answer": "ther",
     "word": "together",
     "slots": 4,
     "marker": "toge_ _ _ _ ",
     "start": 194,
     "end": 206
    },
    {
     "index": 1,
     "prefix": "li",
     "answer": "ke",
     "word": "like",
     "slots": 2,
     "marker": "li_ _ ",
     "start": 211,
     "end": 217
    },
    {
     "index": 2,
     "prefix": "jig",
     "answer": "saw",
     "word": "jigsaw",
     "slots": 3,
     "marker": "jig_ _ _ ",
     "start": 219,
     "end": 228
    },
    {
     "index": 3,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 235,
     "end": 240
    },
    {
     "index": 4,
     "prefix": "sh",
     "answer": "ift",
     "word": "shift",
     "slots": 3,
     "marker": "sh_ _ ",
     "start": 251,
     "end": 257
    },
    {
     "index": 5,
     "prefix": "earth",
     "answer": "quakes",
     "word": "earthquakes",
     "slots": 6,
     "marker": "earth _ _ _ _ _",
     "start": 267,
     "end": 282
    },
    {
     "index": 6,
     "prefix": "form",
     "answer": "ation",
     "word": "formation",
     "slots": 5,
     "marker": "form_ _ _ _ _ ",
     "start": 288,
     "end": 302
    },
    {
     "index": 7,
     "prefix": "moun",
     "answer": "tains",
     "word": "mountains",
     "slots": 5,
     "marker": "moun_ _ _ _ ",
     "start": 305,
     "end": 317
    },
    {
     "index": 8,
     "prefix": "volc",
     "answer": "anic",
     "word": "volcanic",
     "slots": 4,
     "marker": "volc _ _ _ _ ",
     "start": 323,
     "end": 336
    },
    {
     "index": 9,
     "prefix": "Scien",
     "answer": "tists",
     "word": "Scientists",
     "slots": 5,
     "marker": "Scien_ _ _ _ _ ",
     "start": 347,
     "end": 362
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "自然科学",
    "tectonic plates"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-037",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "艺术",
   "topic": "piano",
   "difficulty": "简单",
   "passage": "The piano has a rich history that spans over 300 years, evolving from earlier keyboard instruments like the clavichord and harpsichord. The mod_ _ _ piano w_ _ invented aro_ _ _ 1700 b_ Bartolomeo Cristofori, w_ _ developed a n_ _ mechanism th_ _ made i_ possible f_ _ players t_ control the dynamics—soft and loud sounds—by varying the pressure on the keys. Later key improvements include the addition of a cast iron frame and felt-covered hammers, which allowed for greater volume and durability. These changes made the piano a central instrument in both classical and popular music.",
   "blanks": [
    {
     "index": 0,
     "prefix": "mod",
     "answer": "ern",
     "word": "modern",
     "slots": 3,
     "marker": "mod_ _ _ ",
     "start": 140,
     "end": 149
    },
    {
     "index": 1,
     "prefix": "w",
     "answer": "as",
     "word": "was",
     "slots": 2,
     "marker": "w_ _ ",
     "start": 155,
     "end": 160
    },
    {
     "index": 2,
     "prefix": "aro",
     "answer": "und",
     "word": "around",
     "slots": 3,
     "marker": "aro_ _ _ ",
     "start": 169,
     "end": 178
    },
    {
     "index": 3,
     "prefix": "b",
     "answer": "y",
     "word": "by",
     "slots": 1,
     "marker": "b_ ",
     "start": 183,
     "end": 186
    },
    {
     "index": 4,
     "prefix": "w",
     "answer": "ho",
     "word": "who",
     "slots": 2,
     "marker": "w_ _ ",
     "start": 209,
     "end": 214
    },
    {
     "index": 5,
     "prefix": "n",
     "answer": "ew",
     "word": "new",
     "slots": 2,
     "marker": "n_ _ ",
     "start": 226,
     "end": 231
    },
    {
     "index": 6,
     "prefix": "th",
     "answer": "at",
     "word": "that",
     "slots": 2,
     "marker": "th_ _ ",
     "start": 241,
     "end": 247
    },
    {
     "index": 7,
     "prefix": "i",
     "answer": "t",
     "word": "it",
     "slots": 1,
     "marker": "i_ ",
     "start": 252,
     "end": 255
    },
    {
     "index": 8,
     "prefix": "f",
     "answer": "or",
     "word": "for",
     "slots": 2,
     "marker": "f_ _ ",
     "start": 264,
     "end": 269
    },
    {
     "index": 9,
     "prefix": "t",
     "answer": "o",
     "word": "to",
     "slots": 1,
     "marker": "t_ ",
     "start": 277,
     "end": 280
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "艺术",
    "piano"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-043",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "生命科学",
   "topic": "fossil record",
   "difficulty": "中等",
   "passage": "Fossils provide invaluable evidence of evolutionary history, documenting species that lived millions of years ago. Paleontologists examine these remains to understand how organisms have changed over time. Natural selection expl_ _ _ _ how advant_ _ _ _ _ _ traits incr_ _ _ _ in freq_ _ _ _ _ in a popul_ _ _ _ _ . Species ad_ _ _ to th_ _ _ environments, wh_ _ _ leads t_ incredible dive_ _ _ _ _ observed in the biological world today through the mechanism of natural selection. The ongoing study of evolution continues to reveal how life on Earth has developed and diversified.",
   "blanks": [
    {
     "index": 0,
     "prefix": "expl",
     "answer": "ains",
     "word": "explains",
     "slots": 4,
     "marker": "expl_ _ _ _ ",
     "start": 223,
     "end": 235
    },
    {
     "index": 1,
     "prefix": "advant",
     "answer": "ageous",
     "word": "advantageous",
     "slots": 6,
     "marker": "advant_ _ _ _ _ _ ",
     "start": 239,
     "end": 257
    },
    {
     "index": 2,
     "prefix": "incr",
     "answer": "ease",
     "word": "increase",
     "slots": 4,
     "marker": "incr_ _ _ _ ",
     "start": 264,
     "end": 276
    },
    {
     "index": 3,
     "prefix": "freq",
     "answer": "uency",
     "word": "frequency",
     "slots": 5,
     "marker": "freq_ _ _ _ _ ",
     "start": 279,
     "end": 293
    },
    {
     "index": 4,
     "prefix": "popul",
     "answer": "ation",
     "word": "population",
     "slots": 5,
     "marker": "popul_ _ _ _ _ ",
     "start": 298,
     "end": 313
    },
    {
     "index": 5,
     "prefix": "ad",
     "answer": "apt",
     "word": "adapt",
     "slots": 3,
     "marker": "ad_ _ _ ",
     "start": 323,
     "end": 331
    },
    {
     "index": 6,
     "prefix": "th",
     "answer": "eir",
     "word": "their",
     "slots": 3,
     "marker": "th_ _ _ ",
     "start": 334,
     "end": 342
    },
    {
     "index": 7,
     "prefix": "wh",
     "answer": "ich",
     "word": "which",
     "slots": 3,
     "marker": "wh_ _ _ ",
     "start": 356,
     "end": 364
    },
    {
     "index": 8,
     "prefix": "t",
     "answer": "o",
     "word": "to",
     "slots": 1,
     "marker": "t_ ",
     "start": 370,
     "end": 373
    },
    {
     "index": 9,
     "prefix": "dive",
     "answer": "rsity",
     "word": "diversity",
     "slots": 5,
     "marker": "dive_ _ _ _ _ ",
     "start": 384,
     "end": 398
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "生命科学",
    "fossil record"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-047",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "艺术",
   "topic": "art and religion",
   "difficulty": "中等",
   "passage": "Throughout history, art and religion have been deeply intertwined. Religious bel_ _ _ _ often ins_ _ _ _ artistic crea_ _ _ _ _ , from anc_ _ _ _ cave pain_ _ _ _ _ to elab_ _ _ _ _ cathedral archit_ _ _ _ _ _. Throughout his_ _ _ _ , artists ha_ _ used vis_ _ _ imagery to express spiritual ideas and convey religious stories. Iconography, the study of symbols and images in art, helps us understand the meaning behind religious artworks. Churches, temples, and other places of worship are often adorned with intricate designs that reflect the convictions and practices of their communities.",
   "blanks": [
    {
     "index": 0,
     "prefix": "bel",
     "answer": "iefs",
     "word": "beliefs",
     "slots": 4,
     "marker": "bel_ _ _ _ ",
     "start": 77,
     "end": 88
    },
    {
     "index": 1,
     "prefix": "ins",
     "answer": "pire",
     "word": "inspire",
     "slots": 4,
     "marker": "ins_ _ _ _ ",
     "start": 94,
     "end": 105
    },
    {
     "index": 2,
     "prefix": "crea",
     "answer": "tions",
     "word": "creations",
     "slots": 5,
     "marker": "crea_ _ _ _ _ ",
     "start": 114,
     "end": 128
    },
    {
     "index": 3,
     "prefix": "anc",
     "answer": "ient",
     "word": "ancient",
     "slots": 4,
     "marker": "anc_ _ _ _ ",
     "start": 135,
     "end": 146
    },
    {
     "index": 4,
     "prefix": "pain",
     "answer": "tings",
     "word": "paintings",
     "slots": 5,
     "marker": "pain_ _ _ _ _ ",
     "start": 151,
     "end": 165
    },
    {
     "index": 5,
     "prefix": "elab",
     "answer": "orate",
     "word": "elaborate",
     "slots": 5,
     "marker": "elab_ _ _ _ _ ",
     "start": 168,
     "end": 182
    },
    {
     "index": 6,
     "prefix": "archit",
     "answer": "ecture",
     "word": "architecture",
     "slots": 6,
     "marker": "archit_ _ _ _ _ _",
     "start": 192,
     "end": 209
    },
    {
     "index": 7,
     "prefix": "his",
     "answer": "tory",
     "word": "history",
     "slots": 4,
     "marker": "his_ _ _ _ ",
     "start": 222,
     "end": 233
    },
    {
     "index": 8,
     "prefix": "ha",
     "answer": "ve",
     "word": "have",
     "slots": 2,
     "marker": "ha_ _ ",
     "start": 243,
     "end": 249
    },
    {
     "index": 9,
     "prefix": "vis",
     "answer": "ual",
     "word": "visual",
     "slots": 3,
     "marker": "vis_ _ _ ",
     "start": 254,
     "end": 263
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "艺术",
    "art and religion"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-048",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "社会科学",
   "topic": "human cognition",
   "difficulty": "中等",
   "passage": "Human cognition refers to the mental processes involved in acquiring, processing, storing and using knowledge. These inc_ _ _ _ the wa_ that peo_ _ _ interpret sensory sig_ _ _ (perception), h_ _ we st_ _ _ and retr_ _ _ _ information (mem_ _ _ ), how lang_ _ _ _ is prod_ _ _ _ (speech), and how humans analyze and solve problems. Researchers study cognitive functions to uncover how the brain processes information and how these processes influence behavior. Insights from cognitive science can improve educational methods and help develop interventions for cognitive disorders.",
   "blanks": [],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "社会科学",
    "human cognition"
   ],
   "status": "draft",
   "blankCount": 0,
   "flags": [
    {
     "type": "draft",
     "note": "数据源对齐失败，暂无标准答案，暂不可判分——需人工校验源表"
    }
   ]
  },
  {
   "id": "真题-051",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "社会科学",
   "topic": "child development",
   "difficulty": "中等",
   "passage": "Child development milestones are key indicators of a child's growth. They enco_ _ _ _ _ various asp_ _ _ _ of development, incl_ _ _ _ _ language acqui_ _ _ _ _ _, motor ski_ _ _ , and soc_ _ _ interactions. O_ _ example i_ taking a fi_ _ _ step, wh_ _ _ typically occurs around the age of twelve months. These milestones are useful in helping parents and caretakers monitor a child's progress. It is important to remember, however, that these milestones only provide a general guide, and each child develops at their own pace.",
   "blanks": [
    {
     "index": 0,
     "prefix": "enco",
     "answer": "mpass",
     "word": "encompass",
     "slots": 5,
     "marker": "enco_ _ _ _ _ ",
     "start": 74,
     "end": 88
    },
    {
     "index": 1,
     "prefix": "asp",
     "answer": "ects",
     "word": "aspects",
     "slots": 4,
     "marker": "asp_ _ _ _ ",
     "start": 96,
     "end": 107
    },
    {
     "index": 2,
     "prefix": "incl",
     "answer": "uding",
     "word": "including",
     "slots": 5,
     "marker": "incl_ _ _ _ _ ",
     "start": 123,
     "end": 137
    },
    {
     "index": 3,
     "prefix": "acqui",
     "answer": "sition",
     "word": "acquisition",
     "slots": 6,
     "marker": "acqui_ _ _ _ _ _",
     "start": 146,
     "end": 162
    },
    {
     "index": 4,
     "prefix": "ski",
     "answer": "lls",
     "word": "skills",
     "slots": 3,
     "marker": "ski_ _ _ ",
     "start": 170,
     "end": 179
    },
    {
     "index": 5,
     "prefix": "soc",
     "answer": "ial",
     "word": "social",
     "slots": 3,
     "marker": "soc_ _ _ ",
     "start": 185,
     "end": 194
    },
    {
     "index": 6,
     "prefix": "O",
     "answer": "ne",
     "word": "One",
     "slots": 2,
     "marker": "O_ _ ",
     "start": 208,
     "end": 213
    },
    {
     "index": 7,
     "prefix": "i",
     "answer": "s",
     "word": "is",
     "slots": 1,
     "marker": "i_ ",
     "start": 221,
     "end": 224
    },
    {
     "index": 8,
     "prefix": "fi",
     "answer": "rst",
     "word": "first",
     "slots": 3,
     "marker": "fi_ _ _ ",
     "start": 233,
     "end": 241
    },
    {
     "index": 9,
     "prefix": "wh",
     "answer": "ich",
     "word": "which",
     "slots": 3,
     "marker": "wh_ _ _ ",
     "start": 247,
     "end": 255
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "社会科学",
    "child development"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-053",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "社会科学",
   "topic": "fire use",
   "difficulty": "中等",
   "passage": "Learning the controlled use of fire was a key development in human history that greatly improved the early humans' ability to survive. Coo_ _ _ _ food, partic_ _ _ _ _ _ meat a_ _ tubers, ma_ _ digesting nutr_ _ _ _ _ much eas_ _ _ . Fire al _ _ provided war_ _ _ in col_ _ _ climates, allo_ _ _ _ humans to expand their geographic range and survive in areas where they might not have otherwise. In addition, fire was used to harden wood for tools like spears and to shape stones for cutting and scraping, thus contributing to advances in toolmaking.",
   "blanks": [
    {
     "index": 0,
     "prefix": "Coo",
     "answer": "king",
     "word": "Cooking",
     "slots": 4,
     "marker": "Coo_ _ _ _ ",
     "start": 135,
     "end": 146
    },
    {
     "index": 1,
     "prefix": "partic",
     "answer": "ularly",
     "word": "particularly",
     "slots": 6,
     "marker": "partic_ _ _ _ _ _ ",
     "start": 152,
     "end": 170
    },
    {
     "index": 2,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 175,
     "end": 180
    },
    {
     "index": 3,
     "prefix": "ma",
     "answer": "de",
     "word": "made",
     "slots": 2,
     "marker": "ma_ _ ",
     "start": 188,
     "end": 194
    },
    {
     "index": 4,
     "prefix": "nutr",
     "answer": "ients",
     "word": "nutrients",
     "slots": 5,
     "marker": "nutr_ _ _ _ _ ",
     "start": 204,
     "end": 218
    },
    {
     "index": 5,
     "prefix": "eas",
     "answer": "ier",
     "word": "easier",
     "slots": 3,
     "marker": "eas_ _ _ ",
     "start": 223,
     "end": 232
    },
    {
     "index": 6,
     "prefix": "al",
     "answer": "so",
     "word": "also",
     "slots": 2,
     "marker": "al _ _ ",
     "start": 239,
     "end": 246
    },
    {
     "index": 7,
     "prefix": "war",
     "answer": "mth",
     "word": "warmth",
     "slots": 3,
     "marker": "war_ _ _ ",
     "start": 255,
     "end": 264
    },
    {
     "index": 8,
     "prefix": "col",
     "answer": "der",
     "word": "colder",
     "slots": 3,
     "marker": "col_ _ _ ",
     "start": 267,
     "end": 276
    },
    {
     "index": 9,
     "prefix": "allo",
     "answer": "wing",
     "word": "allowing",
     "slots": 4,
     "marker": "allo_ _ _ _ ",
     "start": 286,
     "end": 298
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "社会科学",
    "fire use"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-054",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "艺术",
   "topic": "the Odyssey",
   "difficulty": "中等",
   "passage": "The Odyssey is an ancient Greek epic poem that follows the hero, Odysseus, on his ten-year journey home after the Trojan War. It i_ widely consi_ _ _ _ _ one o_ the grea_ _ _ _ works i_ the his_ _ _ _ of Euro_ _ _ _ literature. The Odyssey estab_ _ _ _ _ _ many narr_ _ _ _ _ structures a_ _ archetypes—like the hero's journey—that continue to shape storytelling today. It also delves into timeless human experiences. Odysseus's longing to return home, for example, resonates with the universal desire for belonging and stability. He must adapt, disguise, and rediscover himself, reflecting the fluid nature of identity.",
   "blanks": [
    {
     "index": 0,
     "prefix": "i",
     "answer": "s",
     "word": "is",
     "slots": 1,
     "marker": "i_ ",
     "start": 129,
     "end": 132
    },
    {
     "index": 1,
     "prefix": "consi",
     "answer": "dered",
     "word": "considered",
     "slots": 5,
     "marker": "consi_ _ _ _ _ ",
     "start": 139,
     "end": 154
    },
    {
     "index": 2,
     "prefix": "o",
     "answer": "f",
     "word": "of",
     "slots": 1,
     "marker": "o_ ",
     "start": 158,
     "end": 161
    },
    {
     "index": 3,
     "prefix": "grea",
     "answer": "test",
     "word": "greatest",
     "slots": 4,
     "marker": "grea_ _ _ _ ",
     "start": 165,
     "end": 177
    },
    {
     "index": 4,
     "prefix": "i",
     "answer": "n",
     "word": "in",
     "slots": 1,
     "marker": "i_ ",
     "start": 183,
     "end": 186
    },
    {
     "index": 5,
     "prefix": "his",
     "answer": "tory",
     "word": "history",
     "slots": 4,
     "marker": "his_ _ _ _ ",
     "start": 190,
     "end": 201
    },
    {
     "index": 6,
     "prefix": "Euro",
     "answer": "pean",
     "word": "European",
     "slots": 4,
     "marker": "Euro_ _ _ _ ",
     "start": 204,
     "end": 216
    },
    {
     "index": 7,
     "prefix": "estab",
     "answer": "lishes",
     "word": "establishes",
     "slots": 6,
     "marker": "estab_ _ _ _ _ _ ",
     "start": 240,
     "end": 257
    },
    {
     "index": 8,
     "prefix": "narr",
     "answer": "ative",
     "word": "narrative",
     "slots": 5,
     "marker": "narr_ _ _ _ _ ",
     "start": 262,
     "end": 276
    },
    {
     "index": 9,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 287,
     "end": 292
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "艺术",
    "the Odyssey"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-057",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "艺术",
   "topic": "museums",
   "difficulty": "中等",
   "passage": "Museums play a crucial role in preserving and showcasing art, history, and culture. They pro_ _ _ _ a sp_ _ _ where peo_ _ _ can eng_ _ _ with mult_ _ _ _ forms o_ artistic expre_ _ _ _ _ and histo_ _ _ _ _ artifacts. Ma_ _ museums al_ _ offer educational programs and workshops, fostering a deeper understanding of the subjects they display. In addition, digital innovations have enabled museums to reach global audiences through virtual tours and online collections. The patronage of visual arts by individuals and organizations helps support artists and ensures the continued growth and diversity of the cultural landscape.",
   "blanks": [
    {
     "index": 0,
     "prefix": "pro",
     "answer": "vide",
     "word": "provide",
     "slots": 4,
     "marker": "pro_ _ _ _ ",
     "start": 89,
     "end": 100
    },
    {
     "index": 1,
     "prefix": "sp",
     "answer": "ace",
     "word": "space",
     "slots": 3,
     "marker": "sp_ _ _ ",
     "start": 102,
     "end": 110
    },
    {
     "index": 2,
     "prefix": "peo",
     "answer": "ple",
     "word": "people",
     "slots": 3,
     "marker": "peo_ _ _ ",
     "start": 116,
     "end": 125
    },
    {
     "index": 3,
     "prefix": "eng",
     "answer": "age",
     "word": "engage",
     "slots": 3,
     "marker": "eng_ _ _ ",
     "start": 129,
     "end": 138
    },
    {
     "index": 4,
     "prefix": "mult",
     "answer": "iple",
     "word": "multiple",
     "slots": 4,
     "marker": "mult_ _ _ _ ",
     "start": 143,
     "end": 155
    },
    {
     "index": 5,
     "prefix": "o",
     "answer": "f",
     "word": "of",
     "slots": 1,
     "marker": "o_ ",
     "start": 161,
     "end": 164
    },
    {
     "index": 6,
     "prefix": "expre",
     "answer": "ssion",
     "word": "expression",
     "slots": 5,
     "marker": "expre_ _ _ _ _ ",
     "start": 173,
     "end": 188
    },
    {
     "index": 7,
     "prefix": "histo",
     "answer": "rical",
     "word": "historical",
     "slots": 5,
     "marker": "histo_ _ _ _ _ ",
     "start": 192,
     "end": 207
    },
    {
     "index": 8,
     "prefix": "Ma",
     "answer": "ny",
     "word": "Many",
     "slots": 2,
     "marker": "Ma_ _ ",
     "start": 218,
     "end": 224
    },
    {
     "index": 9,
     "prefix": "al",
     "answer": "so",
     "word": "also",
     "slots": 2,
     "marker": "al_ _ ",
     "start": 232,
     "end": 238
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "艺术",
    "museums"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-058",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "艺术",
   "topic": "cultural preservation",
   "difficulty": "中等",
   "passage": "Museums often serve as cultural hubs, preserving and exhibiting artifacts that reflect human history and creativity. They pro_ _ _ _ educational reso_ _ _ _ _ that he_ _ visitors under_ _ _ _ _ diverse cult_ _ _ , historical er_ _ , and arti_ _ _ _ movements. Exhi_ _ _ _ are desi_ _ _ _ to te_ _ compelling stories and engage the audience. Museums also play a crucial role in conservation, employing techniques to preserve delicate or ancient items. They foster a deeper appreciation for heritage and inspire curious minds to explore the past and present through tangible connections.",
   "blanks": [
    {
     "index": 0,
     "prefix": "pro",
     "answer": "vide",
     "word": "provide",
     "slots": 4,
     "marker": "pro_ _ _ _ ",
     "start": 122,
     "end": 133
    },
    {
     "index": 1,
     "prefix": "reso",
     "answer": "urces",
     "word": "resources",
     "slots": 5,
     "marker": "reso_ _ _ _ _ ",
     "start": 145,
     "end": 159
    },
    {
     "index": 2,
     "prefix": "he",
     "answer": "lp",
     "word": "help",
     "slots": 2,
     "marker": "he_ _ ",
     "start": 164,
     "end": 170
    },
    {
     "index": 3,
     "prefix": "under",
     "answer": "stand",
     "word": "understand",
     "slots": 5,
     "marker": "under_ _ _ _ _ ",
     "start": 179,
     "end": 194
    },
    {
     "index": 4,
     "prefix": "cult",
     "answer": "ures",
     "word": "cultures",
     "slots": 4,
     "marker": "cult_ _ _ ",
     "start": 202,
     "end": 212
    },
    {
     "index": 5,
     "prefix": "er",
     "answer": "as",
     "word": "eras",
     "slots": 2,
     "marker": "er_ _ ",
     "start": 225,
     "end": 231
    },
    {
     "index": 6,
     "prefix": "arti",
     "answer": "stic",
     "word": "artistic",
     "slots": 4,
     "marker": "arti_ _ _ _ ",
     "start": 237,
     "end": 249
    },
    {
     "index": 7,
     "prefix": "Exhi",
     "answer": "bits",
     "word": "Exhibits",
     "slots": 4,
     "marker": "Exhi_ _ _ _ ",
     "start": 260,
     "end": 272
    },
    {
     "index": 8,
     "prefix": "desi",
     "answer": "gned",
     "word": "designed",
     "slots": 4,
     "marker": "desi_ _ _ _ ",
     "start": 276,
     "end": 288
    },
    {
     "index": 9,
     "prefix": "te",
     "answer": "ll",
     "word": "tell",
     "slots": 2,
     "marker": "te_ _ ",
     "start": 291,
     "end": 297
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "艺术",
    "cultural preservation"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-059",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "自然科学",
   "topic": "climate patterns",
   "difficulty": "简单",
   "passage": "Climate change refers to significant and lasting changes in weather patterns over periods ranging from decades to millions of years. It is dri_ _ _ by nat_ _ _ _ factors li_ _ volcanic erup_ _ _ _ _ and hu_ _ _ activities su_ _ as bur_ _ _ _ fossil fu_ _ _ and remo_ _ _ _ trees, wh_ _ _ release large amounts of greenhouse gases into the atmosphere. These gases trap heat, leading to global warming, rising sea levels, and more extreme weather events. Addressing climate change requires sustainable practices and international cooperation to mitigate its impacts.",
   "blanks": [
    {
     "index": 0,
     "prefix": "dri",
     "answer": "ven",
     "word": "driven",
     "slots": 3,
     "marker": "dri_ _ _ ",
     "start": 139,
     "end": 148
    },
    {
     "index": 1,
     "prefix": "nat",
     "answer": "ural",
     "word": "natural",
     "slots": 4,
     "marker": "nat_ _ _ _ ",
     "start": 151,
     "end": 162
    },
    {
     "index": 2,
     "prefix": "li",
     "answer": "ke",
     "word": "like",
     "slots": 2,
     "marker": "li_ _ ",
     "start": 170,
     "end": 176
    },
    {
     "index": 3,
     "prefix": "erup",
     "answer": "tions",
     "word": "eruptions",
     "slots": 5,
     "marker": "erup_ _ _ _ _ ",
     "start": 185,
     "end": 199
    },
    {
     "index": 4,
     "prefix": "hu",
     "answer": "man",
     "word": "human",
     "slots": 3,
     "marker": "hu_ _ _ ",
     "start": 203,
     "end": 211
    },
    {
     "index": 5,
     "prefix": "su",
     "answer": "ch",
     "word": "such",
     "slots": 2,
     "marker": "su_ _ ",
     "start": 222,
     "end": 228
    },
    {
     "index": 6,
     "prefix": "bur",
     "answer": "ning",
     "word": "burning",
     "slots": 4,
     "marker": "bur_ _ _ _ ",
     "start": 231,
     "end": 242
    },
    {
     "index": 7,
     "prefix": "fu",
     "answer": "els",
     "word": "fuels",
     "slots": 3,
     "marker": "fu_ _ _ ",
     "start": 249,
     "end": 257
    },
    {
     "index": 8,
     "prefix": "remo",
     "answer": "ving",
     "word": "removing",
     "slots": 4,
     "marker": "remo_ _ _ _ ",
     "start": 261,
     "end": 273
    },
    {
     "index": 9,
     "prefix": "wh",
     "answer": "ich",
     "word": "which",
     "slots": 3,
     "marker": "wh_ _ _ ",
     "start": 280,
     "end": 288
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "自然科学",
    "climate patterns"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-060",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "社会科学",
   "topic": "theory of mind",
   "difficulty": "中等",
   "passage": "One of the topics psychologists investigate is our capacity to understand the mental states of others. This abi_ _ _ _ is funda_ _ _ _ _ _ for soc_ _ _ interaction bec_ _ _ _ it ena_ _ _ _ us t_ predict a_ _ explain t_ _ behavior o_ others. I_ this skill innate or shaped by experience? Is understanding others' mental states a matter of simulation (imagining ourselves in their place) or theory (applying a set of rules or concepts)? These inquiries contribute to broader discussions about human cognition.",
   "blanks": [
    {
     "index": 0,
     "prefix": "abi",
     "answer": "lity",
     "word": "ability",
     "slots": 4,
     "marker": "abi_ _ _ _ ",
     "start": 108,
     "end": 119
    },
    {
     "index": 1,
     "prefix": "funda",
     "answer": "mental",
     "word": "fundamental",
     "slots": 6,
     "marker": "funda_ _ _ _ _ _ ",
     "start": 122,
     "end": 139
    },
    {
     "index": 2,
     "prefix": "soc",
     "answer": "ial",
     "word": "social",
     "slots": 3,
     "marker": "soc_ _ _ ",
     "start": 143,
     "end": 152
    },
    {
     "index": 3,
     "prefix": "bec",
     "answer": "ause",
     "word": "because",
     "slots": 4,
     "marker": "bec_ _ _ _ ",
     "start": 164,
     "end": 175
    },
    {
     "index": 4,
     "prefix": "ena",
     "answer": "bles",
     "word": "enables",
     "slots": 4,
     "marker": "ena_ _ _ _ ",
     "start": 178,
     "end": 189
    },
    {
     "index": 5,
     "prefix": "t",
     "answer": "o",
     "word": "to",
     "slots": 1,
     "marker": "t_ ",
     "start": 192,
     "end": 195
    },
    {
     "index": 6,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 203,
     "end": 208
    },
    {
     "index": 7,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "marker": "t_ _ ",
     "start": 216,
     "end": 221
    },
    {
     "index": 8,
     "prefix": "o",
     "answer": "f",
     "word": "of",
     "slots": 1,
     "marker": "o_ ",
     "start": 230,
     "end": 233
    },
    {
     "index": 9,
     "prefix": "I",
     "answer": "s",
     "word": "Is",
     "slots": 1,
     "marker": "I_ ",
     "start": 241,
     "end": 244
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "社会科学",
    "theory of mind"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-061",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "生命科学",
   "topic": "stomata",
   "difficulty": "中等",
   "passage": "Plants have tiny holes called stomata on their leaves and stems that allow them to take in carbon dioxide from the air and release oxygen into the air. How_ _ _ _ , stomata c_ _ also l_ _ water vapor esc_ _ _ , which cau_ _ _ problems i_ dry enviro_ _ _ _ _ _. To man_ _ _ this, dur_ _ _ hot per_ _ _ _ when water loss is especially severe, some plants close their stomata temporarily. Another special adaptation is thick, waxy coatings on plant leaves that help conserve water.",
   "blanks": [
    {
     "index": 0,
     "prefix": "How",
     "answer": "ever",
     "word": "However",
     "slots": 4,
     "marker": "How_ _ _ _ ",
     "start": 152,
     "end": 163
    },
    {
     "index": 1,
     "prefix": "c",
     "answer": "an",
     "word": "can",
     "slots": 2,
     "marker": "c_ _ ",
     "start": 173,
     "end": 178
    },
    {
     "index": 2,
     "prefix": "l",
     "answer": "et",
     "word": "let",
     "slots": 2,
     "marker": "l_ _ ",
     "start": 183,
     "end": 188
    },
    {
     "index": 3,
     "prefix": "esc",
     "answer": "ape",
     "word": "escape",
     "slots": 3,
     "marker": "esc_ _ _ ",
     "start": 200,
     "end": 209
    },
    {
     "index": 4,
     "prefix": "cau",
     "answer": "ses",
     "word": "causes",
     "slots": 3,
     "marker": "cau_ _ _ ",
     "start": 217,
     "end": 226
    },
    {
     "index": 5,
     "prefix": "i",
     "answer": "n",
     "word": "in",
     "slots": 1,
     "marker": "i_ ",
     "start": 235,
     "end": 238
    },
    {
     "index": 6,
     "prefix": "enviro",
     "answer": "nments",
     "word": "environments",
     "slots": 6,
     "marker": "enviro_ _ _ _ _ _",
     "start": 242,
     "end": 259
    },
    {
     "index": 7,
     "prefix": "man",
     "answer": "age",
     "word": "manage",
     "slots": 3,
     "marker": "man_ _ _ ",
     "start": 264,
     "end": 273
    },
    {
     "index": 8,
     "prefix": "dur",
     "answer": "ing",
     "word": "during",
     "slots": 3,
     "marker": "dur_ _ _ ",
     "start": 279,
     "end": 288
    },
    {
     "index": 9,
     "prefix": "per",
     "answer": "iods",
     "word": "periods",
     "slots": 4,
     "marker": "per_ _ _ _ ",
     "start": 292,
     "end": 303
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "生命科学",
    "stomata"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-062",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "艺术",
   "topic": "art colonies",
   "difficulty": "中等",
   "passage": "Art colonies have historically served as vibrant communities where artists gather to share ideas, collaborate, and create. The comm_ _ _ _ _ environment all_ _ _ artists t_ receive feed_ _ _ _ from pe_ _ _ and exper_ _ _ _ _ with n_ _ techniques, enri_ _ _ _ _ their arti_ _ _ _ practice. Su_ _ enclaves often emerge in picturesque locations that inspire creativity, such as coastal towns or rural landscapes. Notable art colonies, like those in Montmartre or Taos, have produced influential works and fostered movements such as Impressionism and Modernism. Contemporary art colonies continue this tradition, adapting to new mediums and technologies while maintaining a spirit of collaboration and innovation.",
   "blanks": [
    {
     "index": 0,
     "prefix": "comm",
     "answer": "unity",
     "word": "community",
     "slots": 5,
     "marker": "comm_ _ _ _ _ ",
     "start": 127,
     "end": 141
    },
    {
     "index": 1,
     "prefix": "all",
     "answer": "ows",
     "word": "allows",
     "slots": 3,
     "marker": "all_ _ _ ",
     "start": 153,
     "end": 162
    },
    {
     "index": 2,
     "prefix": "t",
     "answer": "o",
     "word": "to",
     "slots": 1,
     "marker": "t_ ",
     "start": 170,
     "end": 173
    },
    {
     "index": 3,
     "prefix": "feed",
     "answer": "back",
     "word": "feedback",
     "slots": 4,
     "marker": "feed_ _ _ _ ",
     "start": 181,
     "end": 193
    },
    {
     "index": 4,
     "prefix": "pe",
     "answer": "ers",
     "word": "peers",
     "slots": 3,
     "marker": "pe_ _ _ ",
     "start": 198,
     "end": 206
    },
    {
     "index": 5,
     "prefix": "exper",
     "answer": "iment",
     "word": "experiment",
     "slots": 5,
     "marker": "exper_ _ _ _ _ ",
     "start": 210,
     "end": 225
    },
    {
     "index": 6,
     "prefix": "n",
     "answer": "ew",
     "word": "new",
     "slots": 2,
     "marker": "n_ _ ",
     "start": 230,
     "end": 235
    },
    {
     "index": 7,
     "prefix": "enri",
     "answer": "ching",
     "word": "enriching",
     "slots": 5,
     "marker": "enri_ _ _ _ _ ",
     "start": 247,
     "end": 261
    },
    {
     "index": 8,
     "prefix": "arti",
     "answer": "stic",
     "word": "artistic",
     "slots": 4,
     "marker": "arti_ _ _ _ ",
     "start": 267,
     "end": 279
    },
    {
     "index": 9,
     "prefix": "Su",
     "answer": "ch",
     "word": "Such",
     "slots": 2,
     "marker": "Su_ _ ",
     "start": 289,
     "end": 295
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "艺术",
    "art colonies"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-064",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "生命科学",
   "topic": "conservation ecology",
   "difficulty": "困难",
   "passage": "Conservation ecology focuses on preserving biodiversity and protecting ecosystems from degradation. This disci_ _ _ _ _ involves stud_ _ _ _ the intera_ _ _ _ _ _ between spe_ _ _ _ and th_ _ _ environments t_ develop strat_ _ _ _ _ for maint_ _ _ _ _ _ ecological bal_ _ _ . Efforts inc _ _ _ habitat restoration, sustainable resource management, and the establishment of protected areas. Conservation ecologists work to mitigate the impacts of human activities such as deforestation, pollution, and climate change. Public awareness campaigns and policy advocacy are crucial components of conservation initiatives. By safeguarding natural habitats, conservation ecology aims to ensure the survival of diverse species and the health of the planet.",
   "blanks": [
    {
     "index": 0,
     "prefix": "disci",
     "answer": "pline",
     "word": "discipline",
     "slots": 5,
     "marker": "disci_ _ _ _ _ ",
     "start": 105,
     "end": 120
    },
    {
     "index": 1,
     "prefix": "stud",
     "answer": "ying",
     "word": "studying",
     "slots": 4,
     "marker": "stud_ _ _ _ ",
     "start": 129,
     "end": 141
    },
    {
     "index": 2,
     "prefix": "intera",
     "answer": "ctions",
     "word": "interactions",
     "slots": 6,
     "marker": "intera_ _ _ _ _ _ ",
     "start": 145,
     "end": 163
    },
    {
     "index": 3,
     "prefix": "spe",
     "answer": "cies",
     "word": "species",
     "slots": 4,
     "marker": "spe_ _ _ _ ",
     "start": 171,
     "end": 182
    },
    {
     "index": 4,
     "prefix": "th",
     "answer": "eir",
     "word": "their",
     "slots": 3,
     "marker": "th_ _ _ ",
     "start": 186,
     "end": 194
    },
    {
     "index": 5,
     "prefix": "t",
     "answer": "o",
     "word": "to",
     "slots": 1,
     "marker": "t_ ",
     "start": 207,
     "end": 210
    },
    {
     "index": 6,
     "prefix": "strat",
     "answer": "egies",
     "word": "strategies",
     "slots": 5,
     "marker": "strat_ _ _ _ _ ",
     "start": 218,
     "end": 233
    },
    {
     "index": 7,
     "prefix": "maint",
     "answer": "aining",
     "word": "maintaining",
     "slots": 6,
     "marker": "maint_ _ _ _ _ _ ",
     "start": 237,
     "end": 254
    },
    {
     "index": 8,
     "prefix": "bal",
     "answer": "ance",
     "word": "balance",
     "slots": 4,
     "marker": "bal_ _ _ ",
     "start": 265,
     "end": 274
    },
    {
     "index": 9,
     "prefix": "inc",
     "answer": "lude",
     "word": "include",
     "slots": 4,
     "marker": "inc _ _ _ ",
     "start": 284,
     "end": 294
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "生命科学",
    "conservation ecology"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-065",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "生命科学",
   "topic": "human anatomy",
   "difficulty": "简单",
   "passage": "Human anatomy is the scientific study of human structure. Anatomy rev_ _ _ _ how different pa_ _ _ of t_ _ body inte_ _ _ _ and func_ _ _ _ together t_ maintain li_ _. For exa_ _ _ _ , the circulatory sys_ _ _ transports bl_ _ _ throughout the body, carrying oxygen and nutrients to cells while removing waste products. Anatomists must also understand the organization of organs, tissues, and cells. Medical professionals use anatomical knowledge to diagnose and treat illnesses, improving patient care and health outcomes.",
   "blanks": [
    {
     "index": 0,
     "prefix": "rev",
     "answer": "eals",
     "word": "reveals",
     "slots": 4,
     "marker": "rev_ _ _ _ ",
     "start": 66,
     "end": 77
    },
    {
     "index": 1,
     "prefix": "pa",
     "answer": "rts",
     "word": "parts",
     "slots": 3,
     "marker": "pa_ _ _ ",
     "start": 91,
     "end": 99
    },
    {
     "index": 2,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "marker": "t_ _ ",
     "start": 102,
     "end": 107
    },
    {
     "index": 3,
     "prefix": "inte",
     "answer": "ract",
     "word": "interact",
     "slots": 4,
     "marker": "inte_ _ _ _ ",
     "start": 112,
     "end": 124
    },
    {
     "index": 4,
     "prefix": "func",
     "answer": "tion",
     "word": "function",
     "slots": 4,
     "marker": "func_ _ _ _ ",
     "start": 128,
     "end": 140
    },
    {
     "index": 5,
     "prefix": "t",
     "answer": "o",
     "word": "to",
     "slots": 1,
     "marker": "t_ ",
     "start": 149,
     "end": 152
    },
    {
     "index": 6,
     "prefix": "li",
     "answer": "fe",
     "word": "life",
     "slots": 2,
     "marker": "li_ _",
     "start": 161,
     "end": 166
    },
    {
     "index": 7,
     "prefix": "exa",
     "answer": "mple",
     "word": "example",
     "slots": 4,
     "marker": "exa_ _ _ _ ",
     "start": 172,
     "end": 183
    },
    {
     "index": 8,
     "prefix": "sys",
     "answer": "tem",
     "word": "system",
     "slots": 3,
     "marker": "sys_ _ _ ",
     "start": 201,
     "end": 210
    },
    {
     "index": 9,
     "prefix": "bl",
     "answer": "ood",
     "word": "blood",
     "slots": 3,
     "marker": "bl_ _ _ ",
     "start": 221,
     "end": 229
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "生命科学",
    "human anatomy"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-067",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "生命科学",
   "topic": "coral reefs",
   "difficulty": "中等",
   "passage": "Coral reefs are vibrant underwater ecosystems found in warm, shallow oceans around the world. Coral reefs are prod_ _ _ _ by colo_ _ _ _ of ti_ _ animals cal_ _ _ coral polyps, wh_ _ _ secrete calcium carbonate t_ build th_ _ _ hard skel_ _ _ _ _. These nat_ _ _ _ formations pro_ _ _ _ critical habitats for a diverse array of marine species, including fish, crustaceans, and mollusks. They also offer protection to coastal areas by reducing the impact of waves and storms. However, coral reefs are facing threats from climate change, pollution, and overfishing.",
   "blanks": [
    {
     "index": 0,
     "prefix": "prod",
     "answer": "uced",
     "word": "produced",
     "slots": 4,
     "marker": "prod_ _ _ _ ",
     "start": 110,
     "end": 122
    },
    {
     "index": 1,
     "prefix": "colo",
     "answer": "nies",
     "word": "colonies",
     "slots": 4,
     "marker": "colo_ _ _ _ ",
     "start": 125,
     "end": 137
    },
    {
     "index": 2,
     "prefix": "ti",
     "answer": "ny",
     "word": "tiny",
     "slots": 2,
     "marker": "ti_ _ ",
     "start": 140,
     "end": 146
    },
    {
     "index": 3,
     "prefix": "cal",
     "answer": "led",
     "word": "called",
     "slots": 3,
     "marker": "cal_ _ _ ",
     "start": 154,
     "end": 163
    },
    {
     "index": 4,
     "prefix": "wh",
     "answer": "ich",
     "word": "which",
     "slots": 3,
     "marker": "wh_ _ _ ",
     "start": 177,
     "end": 185
    },
    {
     "index": 5,
     "prefix": "t",
     "answer": "o",
     "word": "to",
     "slots": 1,
     "marker": "t_ ",
     "start": 211,
     "end": 214
    },
    {
     "index": 6,
     "prefix": "th",
     "answer": "eir",
     "word": "their",
     "slots": 3,
     "marker": "th_ _ _ ",
     "start": 220,
     "end": 228
    },
    {
     "index": 7,
     "prefix": "skel",
     "answer": "etons",
     "word": "skeletons",
     "slots": 5,
     "marker": "skel_ _ _ _ _",
     "start": 233,
     "end": 246
    },
    {
     "index": 8,
     "prefix": "nat",
     "answer": "ural",
     "word": "natural",
     "slots": 4,
     "marker": "nat_ _ _ _ ",
     "start": 254,
     "end": 265
    },
    {
     "index": 9,
     "prefix": "pro",
     "answer": "vide",
     "word": "provide",
     "slots": 4,
     "marker": "pro_ _ _ _ ",
     "start": 276,
     "end": 287
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "生命科学",
    "coral reefs"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-070",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "社会科学",
   "topic": "information processing",
   "difficulty": "中等",
   "passage": "Cognition encompasses mental processes involved in acquiring, storing, and using information, including perception, memory, and decision-making. Researchers inves_ _ _ _ _ _ the mecha_ _ _ _ _ underlying cogn_ _ _ _ _ processes, aim_ _ _ to under_ _ _ _ _ how t_ _ brain sto_ _ _ and retr_ _ _ _ _ information. Consci_ _ _ _ _ _ _, the st_ _ _ of being aware of one's thoughts and surroundings, remains a particularly elusive aspect of cognition. Theories about this state explore whether it arises from specific brain structures or emerges from the interplay of neural networks. Advances in neuroimaging techniques offer glimpses into the complex workings of the brain.",
   "blanks": [
    {
     "index": 0,
     "prefix": "inves",
     "answer": "tigate",
     "word": "investigate",
     "slots": 6,
     "marker": "inves_ _ _ _ _ _ ",
     "start": 157,
     "end": 174
    },
    {
     "index": 1,
     "prefix": "mecha",
     "answer": "nisms",
     "word": "mechanisms",
     "slots": 5,
     "marker": "mecha_ _ _ _ _ ",
     "start": 178,
     "end": 193
    },
    {
     "index": 2,
     "prefix": "cogn",
     "answer": "itive",
     "word": "cognitive",
     "slots": 5,
     "marker": "cogn_ _ _ _ _ ",
     "start": 204,
     "end": 218
    },
    {
     "index": 3,
     "prefix": "aim",
     "answer": "ing",
     "word": "aiming",
     "slots": 3,
     "marker": "aim_ _ _ ",
     "start": 229,
     "end": 238
    },
    {
     "index": 4,
     "prefix": "under",
     "answer": "stand",
     "word": "understand",
     "slots": 5,
     "marker": "under_ _ _ _ _ ",
     "start": 241,
     "end": 256
    },
    {
     "index": 5,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "marker": "t_ _ ",
     "start": 260,
     "end": 265
    },
    {
     "index": 6,
     "prefix": "sto",
     "answer": "res",
     "word": "stores",
     "slots": 3,
     "marker": "sto_ _ _ ",
     "start": 271,
     "end": 280
    },
    {
     "index": 7,
     "prefix": "retr",
     "answer": "ieves",
     "word": "retrieves",
     "slots": 5,
     "marker": "retr_ _ _ _ _ ",
     "start": 284,
     "end": 298
    },
    {
     "index": 8,
     "prefix": "Consci",
     "answer": "ousness",
     "word": "Consciousness",
     "slots": 7,
     "marker": "Consci_ _ _ _ _ _ _",
     "start": 311,
     "end": 330
    },
    {
     "index": 9,
     "prefix": "st",
     "answer": "ate",
     "word": "state",
     "slots": 3,
     "marker": "st_ _ _ ",
     "start": 336,
     "end": 344
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "社会科学",
    "information processing"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-071",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "生命科学",
   "topic": "sleep-wake cycles",
   "difficulty": "困难",
   "passage": "The circadian rhythm regulates sleep-wake cycles and other physiological processes, operating on a roughly 24-hour cycle influenced by external cues such as light and temperature. Disruptions to this rhythm, like irre_ _ _ _ _ sleep patt_ _ _ _, can le_ _ to hea_ _ _ issues incl_ _ _ _ _ insomnia, exhau_ _ _ _ _ , and decr_ _ _ _ _ cognitive func_ _ _ _ . Some resea_ _ _ _ _ _ are expl_ _ _ _ _ the mechanisms of circadian rhythms, aiming to develop treatments for sleep disorders and improve overall health. Understanding these rhythms is crucial for addressing various health concerns.",
   "blanks": [
    {
     "index": 0,
     "prefix": "irre",
     "answer": "gular",
     "word": "irregular",
     "slots": 5,
     "marker": "irre_ _ _ _ _ ",
     "start": 213,
     "end": 227
    },
    {
     "index": 1,
     "prefix": "patt",
     "answer": "erns",
     "word": "patterns",
     "slots": 4,
     "marker": "patt_ _ _ _",
     "start": 233,
     "end": 244
    },
    {
     "index": 2,
     "prefix": "le",
     "answer": "ad",
     "word": "lead",
     "slots": 2,
     "marker": "le_ _ ",
     "start": 250,
     "end": 256
    },
    {
     "index": 3,
     "prefix": "hea",
     "answer": "lth",
     "word": "health",
     "slots": 3,
     "marker": "hea_ _ _ ",
     "start": 259,
     "end": 268
    },
    {
     "index": 4,
     "prefix": "incl",
     "answer": "uding",
     "word": "including",
     "slots": 5,
     "marker": "incl_ _ _ _ _ ",
     "start": 275,
     "end": 289
    },
    {
     "index": 5,
     "prefix": "exhau",
     "answer": "stion",
     "word": "exhaustion",
     "slots": 5,
     "marker": "exhau_ _ _ _ _ ",
     "start": 299,
     "end": 314
    },
    {
     "index": 6,
     "prefix": "decr",
     "answer": "eased",
     "word": "decreased",
     "slots": 5,
     "marker": "decr_ _ _ _ _ ",
     "start": 320,
     "end": 334
    },
    {
     "index": 7,
     "prefix": "func",
     "answer": "tion",
     "word": "function",
     "slots": 4,
     "marker": "func_ _ _ _ ",
     "start": 344,
     "end": 356
    },
    {
     "index": 8,
     "prefix": "resea",
     "answer": "rchers",
     "word": "researchers",
     "slots": 6,
     "marker": "resea_ _ _ _ _ _ ",
     "start": 363,
     "end": 380
    },
    {
     "index": 9,
     "prefix": "expl",
     "answer": "oring",
     "word": "exploring",
     "slots": 5,
     "marker": "expl_ _ _ _ _ ",
     "start": 384,
     "end": 398
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "生命科学",
    "sleep-wake cycles"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-072",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "自然科学",
   "topic": "stars",
   "difficulty": "简单",
   "passage": "The stars we see in the night sky are massive balls of gas that give off light and heat. Our S_ _ is o_ _ of these, and i_ provides t_ _ energy nee_ _ _ for li_ _ on Ea_ _ . These celestial bodies a_ _ grouped in_ _ collections cal_ _ _ galaxies. Our solar system belongs to the Milky Way galaxy. Scientists known as astronomers study these distant lights to better understand the universe and how it came to be.",
   "blanks": [
    {
     "index": 0,
     "prefix": "S",
     "answer": "un",
     "word": "Sun",
     "slots": 2,
     "marker": "S_ _ ",
     "start": 93,
     "end": 98
    },
    {
     "index": 1,
     "prefix": "o",
     "answer": "ne",
     "word": "one",
     "slots": 2,
     "marker": "o_ _ ",
     "start": 101,
     "end": 106
    },
    {
     "index": 2,
     "prefix": "i",
     "answer": "t",
     "word": "it",
     "slots": 1,
     "marker": "i_ ",
     "start": 120,
     "end": 123
    },
    {
     "index": 3,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "marker": "t_ _ ",
     "start": 132,
     "end": 137
    },
    {
     "index": 4,
     "prefix": "nee",
     "answer": "ded",
     "word": "needed",
     "slots": 3,
     "marker": "nee_ _ _ ",
     "start": 144,
     "end": 153
    },
    {
     "index": 5,
     "prefix": "li",
     "answer": "fe",
     "word": "life",
     "slots": 2,
     "marker": "li_ _ ",
     "start": 157,
     "end": 163
    },
    {
     "index": 6,
     "prefix": "Ea",
     "answer": "rth",
     "word": "Earth",
     "slots": 3,
     "marker": "Ea_ _ ",
     "start": 166,
     "end": 172
    },
    {
     "index": 7,
     "prefix": "a",
     "answer": "re",
     "word": "are",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 197,
     "end": 202
    },
    {
     "index": 8,
     "prefix": "in",
     "answer": "to",
     "word": "into",
     "slots": 2,
     "marker": "in_ _ ",
     "start": 210,
     "end": 216
    },
    {
     "index": 9,
     "prefix": "cal",
     "answer": "led",
     "word": "called",
     "slots": 3,
     "marker": "cal_ _ _ ",
     "start": 228,
     "end": 237
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "自然科学",
    "stars"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-075",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "艺术",
   "topic": "early dance",
   "difficulty": "简单",
   "passage": "We know from drawings that have been preserved in caves for over 10,000 years that early humans performed dances as a group activity. We mi_ _ _ think th_ _ prehistoric peo_ _ _ concentrated on_ _ on t_ _ basic wo_ _ that w_ _ required f_ _ survival: hun_ _ _ _, gathering fo_ _, and making weapons and garments. However, it is clear from the record that group dancing was important to them. They made masks and costumes; they used much energy in the process of dancing; they recorded more drawings of dancing than of any other group activity.",
   "blanks": [
    {
     "index": 0,
     "prefix": "mi",
     "answer": "ght",
     "word": "might",
     "slots": 3,
     "marker": "mi_ _ _ ",
     "start": 137,
     "end": 145
    },
    {
     "index": 1,
     "prefix": "th",
     "answer": "at",
     "word": "that",
     "slots": 2,
     "marker": "th_ _ ",
     "start": 151,
     "end": 157
    },
    {
     "index": 2,
     "prefix": "peo",
     "answer": "ple",
     "word": "people",
     "slots": 3,
     "marker": "peo_ _ _ ",
     "start": 169,
     "end": 178
    },
    {
     "index": 3,
     "prefix": "on",
     "answer": "ly",
     "word": "only",
     "slots": 2,
     "marker": "on_ _ ",
     "start": 191,
     "end": 197
    },
    {
     "index": 4,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "marker": "t_ _ ",
     "start": 200,
     "end": 205
    },
    {
     "index": 5,
     "prefix": "wo",
     "answer": "rk",
     "word": "work",
     "slots": 2,
     "marker": "wo_ _ ",
     "start": 211,
     "end": 217
    },
    {
     "index": 6,
     "prefix": "w",
     "answer": "as",
     "word": "was",
     "slots": 2,
     "marker": "w_ _ ",
     "start": 222,
     "end": 227
    },
    {
     "index": 7,
     "prefix": "f",
     "answer": "or",
     "word": "for",
     "slots": 2,
     "marker": "f_ _ ",
     "start": 236,
     "end": 241
    },
    {
     "index": 8,
     "prefix": "hun",
     "answer": "ting",
     "word": "hunting",
     "slots": 4,
     "marker": "hun_ _ _ _",
     "start": 251,
     "end": 261
    },
    {
     "index": 9,
     "prefix": "fo",
     "answer": "od",
     "word": "food",
     "slots": 2,
     "marker": "fo_ _",
     "start": 273,
     "end": 278
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "艺术",
    "early dance"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-076",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "生命科学",
   "topic": "spider silk",
   "difficulty": "简单",
   "passage": "The unusual properties of spider silk—a remarkable combination of strength and elasticity—have long attracted the attention of many. Spider si_ _ has a brea_ _ _ _ point f_ _ greater th_ _ steel a_ _ may str_ _ _ _ its fu_ _ length bef_ _ _ breaking: a 0.01 centi_ _ _ _ _ thread c_ _ support eighty grams. Spider silk is also very durable, a feature well illustrated by the persistence of cobwebs. Throughout history, humans have adapted spider silk for many purposes. For a long period, thick webs were used in Europe as bandages.",
   "blanks": [
    {
     "index": 0,
     "prefix": "si",
     "answer": "lk",
     "word": "silk",
     "slots": 2,
     "marker": "si_ _ ",
     "start": 140,
     "end": 146
    },
    {
     "index": 1,
     "prefix": "brea",
     "answer": "king",
     "word": "breaking",
     "slots": 4,
     "marker": "brea_ _ _ _ ",
     "start": 152,
     "end": 164
    },
    {
     "index": 2,
     "prefix": "f",
     "answer": "ar",
     "word": "far",
     "slots": 2,
     "marker": "f_ _ ",
     "start": 170,
     "end": 175
    },
    {
     "index": 3,
     "prefix": "th",
     "answer": "an",
     "word": "than",
     "slots": 2,
     "marker": "th_ _ ",
     "start": 183,
     "end": 189
    },
    {
     "index": 4,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 195,
     "end": 200
    },
    {
     "index": 5,
     "prefix": "str",
     "answer": "etch",
     "word": "stretch",
     "slots": 4,
     "marker": "str_ _ _ _ ",
     "start": 204,
     "end": 215
    },
    {
     "index": 6,
     "prefix": "fu",
     "answer": "ll",
     "word": "full",
     "slots": 2,
     "marker": "fu_ _ ",
     "start": 219,
     "end": 225
    },
    {
     "index": 7,
     "prefix": "bef",
     "answer": "ore",
     "word": "before",
     "slots": 3,
     "marker": "bef_ _ _ ",
     "start": 232,
     "end": 241
    },
    {
     "index": 8,
     "prefix": "centi",
     "answer": "meter",
     "word": "centimeter",
     "slots": 5,
     "marker": "centi_ _ _ _ _ ",
     "start": 258,
     "end": 273
    },
    {
     "index": 9,
     "prefix": "c",
     "answer": "an",
     "word": "can",
     "slots": 2,
     "marker": "c_ _ ",
     "start": 280,
     "end": 285
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "生命科学",
    "spider silk"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-077",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "社会科学",
   "topic": "medieval history",
   "difficulty": "中等",
   "passage": "Medieval European history, lasting approximately from 500 C.E. to 1500 C.E., is marked by significant cultural, political, and economic changes. Feudalism domi_ _ _ _ _ the soc_ _ _ structure, wi_ _ lords gove_ _ _ _ _ lands a_ _ vassals prov_ _ _ _ _ military ser_ _ _ _ . The Church exe_ _ _ _ substantial infl_ _ _ _ _ over da_ _ _ life and governance. Trade routes expanded, facilitating the exchange of goods and ideas. Art and architecture flourished, exemplified by Gothic cathedrals and illuminated manuscripts. Studying this era involves analyzing historical documents, artifacts, and architectural remains to understand the complexities of medieval society.",
   "blanks": [
    {
     "index": 0,
     "prefix": "domi",
     "answer": "nated",
     "word": "dominated",
     "slots": 5,
     "marker": "domi_ _ _ _ _ ",
     "start": 155,
     "end": 169
    },
    {
     "index": 1,
     "prefix": "soc",
     "answer": "ial",
     "word": "social",
     "slots": 3,
     "marker": "soc_ _ _ ",
     "start": 173,
     "end": 182
    },
    {
     "index": 2,
     "prefix": "wi",
     "answer": "th",
     "word": "with",
     "slots": 2,
     "marker": "wi_ _ ",
     "start": 193,
     "end": 199
    },
    {
     "index": 3,
     "prefix": "gove",
     "answer": "rning",
     "word": "governing",
     "slots": 5,
     "marker": "gove_ _ _ _ _ ",
     "start": 205,
     "end": 219
    },
    {
     "index": 4,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 225,
     "end": 230
    },
    {
     "index": 5,
     "prefix": "prov",
     "answer": "iding",
     "word": "providing",
     "slots": 5,
     "marker": "prov_ _ _ _ _ ",
     "start": 238,
     "end": 252
    },
    {
     "index": 6,
     "prefix": "ser",
     "answer": "vice",
     "word": "service",
     "slots": 4,
     "marker": "ser_ _ _ _ ",
     "start": 261,
     "end": 272
    },
    {
     "index": 7,
     "prefix": "exe",
     "answer": "rted",
     "word": "exerted",
     "slots": 4,
     "marker": "exe_ _ _ _ ",
     "start": 285,
     "end": 296
    },
    {
     "index": 8,
     "prefix": "infl",
     "answer": "uence",
     "word": "influence",
     "slots": 5,
     "marker": "infl_ _ _ _ _ ",
     "start": 308,
     "end": 322
    },
    {
     "index": 9,
     "prefix": "da",
     "answer": "ily",
     "word": "daily",
     "slots": 3,
     "marker": "da_ _ _ ",
     "start": 327,
     "end": 335
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "社会科学",
    "medieval history"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-080",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "自然科学",
   "topic": "glaciers",
   "difficulty": "中等",
   "passage": "Glaciers play a crucial role in Earth's climate and ecosystems. They store about 70% of the planet's freshwater and help regulate global temperatures by reflecting sunlight. As they move, glaciers shape lands_ _ _ _ _ , carving val _ _ _ _ and transp_ _ _ _ _ _ sediment. Th_ _ _ seasonal mel_ _ _ _ feeds riv_ _ _ and la_ _ _ , supporting agric_ _ _ _ _ _ and wild_ _ _ _ . Glaciers se_ _ _ as indicators of climate change—rapid melting signals shifts in global temperatures. Studying glaciers helps scientists understand past climate patterns and predict future environmental impacts, making them vital to global research.",
   "blanks": [
    {
     "index": 0,
     "prefix": "lands",
     "answer": "capes",
     "word": "landscapes",
     "slots": 5,
     "marker": "lands_ _ _ _ _ ",
     "start": 203,
     "end": 218
    },
    {
     "index": 1,
     "prefix": "val",
     "answer": "leys",
     "word": "valleys",
     "slots": 4,
     "marker": "val _ _ _ _ ",
     "start": 228,
     "end": 240
    },
    {
     "index": 2,
     "prefix": "transp",
     "answer": "orting",
     "word": "transporting",
     "slots": 6,
     "marker": "transp_ _ _ _ _ _ ",
     "start": 244,
     "end": 262
    },
    {
     "index": 3,
     "prefix": "Th",
     "answer": "eir",
     "word": "Their",
     "slots": 3,
     "marker": "Th_ _ _ ",
     "start": 272,
     "end": 280
    },
    {
     "index": 4,
     "prefix": "mel",
     "answer": "ting",
     "word": "melting",
     "slots": 4,
     "marker": "mel_ _ _ _ ",
     "start": 289,
     "end": 300
    },
    {
     "index": 5,
     "prefix": "riv",
     "answer": "ers",
     "word": "rivers",
     "slots": 3,
     "marker": "riv_ _ _ ",
     "start": 306,
     "end": 315
    },
    {
     "index": 6,
     "prefix": "la",
     "answer": "kes",
     "word": "lakes",
     "slots": 3,
     "marker": "la_ _ _ ",
     "start": 319,
     "end": 327
    },
    {
     "index": 7,
     "prefix": "agric",
     "answer": "ulture",
     "word": "agriculture",
     "slots": 6,
     "marker": "agric_ _ _ _ _ _ ",
     "start": 340,
     "end": 357
    },
    {
     "index": 8,
     "prefix": "wild",
     "answer": "life",
     "word": "wildlife",
     "slots": 4,
     "marker": "wild_ _ _ _ ",
     "start": 361,
     "end": 373
    },
    {
     "index": 9,
     "prefix": "se",
     "answer": "rve",
     "word": "serve",
     "slots": 3,
     "marker": "se_ _ _ ",
     "start": 384,
     "end": 392
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "自然科学",
    "glaciers"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-081",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "生命科学",
   "topic": "sleep regulation",
   "difficulty": "中等",
   "passage": "The study of sleep and circadian rhythms explores how humans and animals regulate their sleep-wake cycles. This fi_ _ _ examines t_ _ biological clo_ _ _ that man_ _ _ daily rhy_ _ _ , influenced b_ factors su_ _ as li_ _ _ and tempe_ _ _ _ _ _. Understanding proc_ _ _ _ _ of this kind helps in addressing sleep disorders and optimizing work schedules. Research in this area is crucial for improving health, productivity, and well-being in modern societies. Recent studies have identified specific genes responsible for circadian regulation, while melatonin production and seasonal affective disorder demonstrate the profound connection between environmental cues and internal biological timing mechanisms.",
   "blanks": [
    {
     "index": 0,
     "prefix": "fi",
     "answer": "eld",
     "word": "field",
     "slots": 3,
     "marker": "fi_ _ _ ",
     "start": 112,
     "end": 120
    },
    {
     "index": 1,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "marker": "t_ _ ",
     "start": 129,
     "end": 134
    },
    {
     "index": 2,
     "prefix": "clo",
     "answer": "cks",
     "word": "clocks",
     "slots": 3,
     "marker": "clo_ _ _ ",
     "start": 145,
     "end": 154
    },
    {
     "index": 3,
     "prefix": "man",
     "answer": "age",
     "word": "manage",
     "slots": 3,
     "marker": "man_ _ _ ",
     "start": 159,
     "end": 168
    },
    {
     "index": 4,
     "prefix": "rhy",
     "answer": "thms",
     "word": "rhythms",
     "slots": 4,
     "marker": "rhy_ _ _ ",
     "start": 174,
     "end": 183
    },
    {
     "index": 5,
     "prefix": "b",
     "answer": "y",
     "word": "by",
     "slots": 1,
     "marker": "b_ ",
     "start": 196,
     "end": 199
    },
    {
     "index": 6,
     "prefix": "su",
     "answer": "ch",
     "word": "such",
     "slots": 2,
     "marker": "su_ _ ",
     "start": 207,
     "end": 213
    },
    {
     "index": 7,
     "prefix": "li",
     "answer": "ght",
     "word": "light",
     "slots": 3,
     "marker": "li_ _ _ ",
     "start": 216,
     "end": 224
    },
    {
     "index": 8,
     "prefix": "tempe",
     "answer": "rature",
     "word": "temperature",
     "slots": 6,
     "marker": "tempe_ _ _ _ _ _",
     "start": 228,
     "end": 244
    },
    {
     "index": 9,
     "prefix": "proc",
     "answer": "esses",
     "word": "processes",
     "slots": 5,
     "marker": "proc_ _ _ _ _ ",
     "start": 260,
     "end": 274
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "生命科学",
    "sleep regulation"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-085",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "艺术",
   "topic": "jazz",
   "difficulty": "中等",
   "passage": "The development of jazz music in the United States in the early twentieth century represents a significant cultural milestone. Originating in the African American communities of New Orleans, jazz blended elements of blues, ragtime, and European classical music. Reflecting shi_ _ _ in cul_ _ _ _ , jazz empl_ _ _ _ innovative techn_ _ _ _ _ like improv_ _ _ _ _ _ _ that chall_ _ _ _ _ traditional mus_ _ _ _ conventions, allo_ _ _ _ musicians t_ express th_ _ _ individuality. Figures like Louis Armstrong and Ella Fitzgerald popularized jazz, playing pivotal roles in advancing its stylistic innovations. The genre's influence extended globally, shaping various musical forms and inspiring new generations of artists.",
   "blanks": [
    {
     "index": 0,
     "prefix": "shi",
     "answer": "fts",
     "word": "shifts",
     "slots": 3,
     "marker": "shi_ _ _ ",
     "start": 273,
     "end": 282
    },
    {
     "index": 1,
     "prefix": "cul",
     "answer": "ture",
     "word": "culture",
     "slots": 4,
     "marker": "cul_ _ _ _ ",
     "start": 285,
     "end": 296
    },
    {
     "index": 2,
     "prefix": "empl",
     "answer": "oyed",
     "word": "employed",
     "slots": 4,
     "marker": "empl_ _ _ _ ",
     "start": 303,
     "end": 315
    },
    {
     "index": 3,
     "prefix": "techn",
     "answer": "iques",
     "word": "techniques",
     "slots": 5,
     "marker": "techn_ _ _ _ _ ",
     "start": 326,
     "end": 341
    },
    {
     "index": 4,
     "prefix": "improv",
     "answer": "isation",
     "word": "improvisation",
     "slots": 7,
     "marker": "improv_ _ _ _ _ _ _ ",
     "start": 346,
     "end": 366
    },
    {
     "index": 5,
     "prefix": "chall",
     "answer": "enged",
     "word": "challenged",
     "slots": 5,
     "marker": "chall_ _ _ _ _ ",
     "start": 371,
     "end": 386
    },
    {
     "index": 6,
     "prefix": "mus",
     "answer": "ical",
     "word": "musical",
     "slots": 4,
     "marker": "mus_ _ _ _ ",
     "start": 398,
     "end": 409
    },
    {
     "index": 7,
     "prefix": "allo",
     "answer": "wing",
     "word": "allowing",
     "slots": 4,
     "marker": "allo_ _ _ _ ",
     "start": 422,
     "end": 434
    },
    {
     "index": 8,
     "prefix": "t",
     "answer": "o",
     "word": "to",
     "slots": 1,
     "marker": "t_ ",
     "start": 444,
     "end": 447
    },
    {
     "index": 9,
     "prefix": "th",
     "answer": "eir",
     "word": "their",
     "slots": 3,
     "marker": "th_ _ _ ",
     "start": 455,
     "end": 463
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "艺术",
    "jazz"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-086",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "生命科学",
   "topic": "aquariums",
   "difficulty": "中等",
   "passage": "Aquariums provide an opportunity to observe a variety of fish and other aquatic organisms in a controlled environment. These facil_ _ _ _ _ carefully repli_ _ _ _ natural habi_ _ _ _ , allowing visi_ _ _ _ to le_ _ _ about mar_ _ _ life with_ _ _ venturing in_ _ the oc_ _ _ . Exhibits of_ _ _ include coral reefs, kelp forests, and freshwater streams, showcasing the diversity of aquatic ecosystems. Educational programs and guided tours enhance the experience, offering insights into the behavior, diet, and conservation of these organisms. Maintaining an aquarium requires expertise in water chemistry, filtration systems, and species compatibility.",
   "blanks": [
    {
     "index": 0,
     "prefix": "facil",
     "answer": "ities",
     "word": "facilities",
     "slots": 5,
     "marker": "facil_ _ _ _ _ ",
     "start": 125,
     "end": 140
    },
    {
     "index": 1,
     "prefix": "repli",
     "answer": "cate",
     "word": "replicate",
     "slots": 4,
     "marker": "repli_ _ _ _ ",
     "start": 150,
     "end": 163
    },
    {
     "index": 2,
     "prefix": "habi",
     "answer": "tats",
     "word": "habitats",
     "slots": 4,
     "marker": "habi_ _ _ _ ",
     "start": 171,
     "end": 183
    },
    {
     "index": 3,
     "prefix": "visi",
     "answer": "tors",
     "word": "visitors",
     "slots": 4,
     "marker": "visi_ _ _ _ ",
     "start": 194,
     "end": 206
    },
    {
     "index": 4,
     "prefix": "le",
     "answer": "arn",
     "word": "learn",
     "slots": 3,
     "marker": "le_ _ _ ",
     "start": 209,
     "end": 217
    },
    {
     "index": 5,
     "prefix": "mar",
     "answer": "ine",
     "word": "marine",
     "slots": 3,
     "marker": "mar_ _ _ ",
     "start": 223,
     "end": 232
    },
    {
     "index": 6,
     "prefix": "with",
     "answer": "out",
     "word": "without",
     "slots": 3,
     "marker": "with_ _ _ ",
     "start": 237,
     "end": 247
    },
    {
     "index": 7,
     "prefix": "in",
     "answer": "to",
     "word": "into",
     "slots": 2,
     "marker": "in_ _ ",
     "start": 257,
     "end": 263
    },
    {
     "index": 8,
     "prefix": "oc",
     "answer": "ean",
     "word": "ocean",
     "slots": 3,
     "marker": "oc_ _ _ ",
     "start": 267,
     "end": 275
    },
    {
     "index": 9,
     "prefix": "of",
     "answer": "ten",
     "word": "often",
     "slots": 3,
     "marker": "of_ _ _ ",
     "start": 286,
     "end": 294
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "生命科学",
    "aquariums"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-087",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "艺术",
   "topic": "art and culture",
   "difficulty": "中等",
   "passage": "Art has long reflected human culture, mirroring society's values and beliefs. Throughout history, artists have expressed emotions, told stories, and challenged norms. During the Renaissance, figures like Leonardo da Vinci and Michelangelo explored ana_ _ _ _ and persp_ _ _ _ _ , echoing t_ _ era's inte_ _ _ _ in sci_ _ _ _ and nat_ _ _ . Later, move_ _ _ _ _ such a_ Impressionism a_ _ Abstract Expressionism rede_ _ _ _ _ traditional boundaries. These styles invited viewers to see the world differently, highlighting art's lasting ability to provoke thought, inspire change, and deepen our understanding of human experience.",
   "blanks": [
    {
     "index": 0,
     "prefix": "ana",
     "answer": "tomy",
     "word": "anatomy",
     "slots": 4,
     "marker": "ana_ _ _ _ ",
     "start": 248,
     "end": 259
    },
    {
     "index": 1,
     "prefix": "persp",
     "answer": "ective",
     "word": "perspective",
     "slots": 6,
     "marker": "persp_ _ _ _ _ ",
     "start": 263,
     "end": 278
    },
    {
     "index": 2,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "marker": "t_ _ ",
     "start": 288,
     "end": 293
    },
    {
     "index": 3,
     "prefix": "inte",
     "answer": "rest",
     "word": "interest",
     "slots": 4,
     "marker": "inte_ _ _ _ ",
     "start": 299,
     "end": 311
    },
    {
     "index": 4,
     "prefix": "sci",
     "answer": "ence",
     "word": "science",
     "slots": 4,
     "marker": "sci_ _ _ _ ",
     "start": 314,
     "end": 325
    },
    {
     "index": 5,
     "prefix": "nat",
     "answer": "ure",
     "word": "nature",
     "slots": 3,
     "marker": "nat_ _ _ ",
     "start": 329,
     "end": 338
    },
    {
     "index": 6,
     "prefix": "move",
     "answer": "ments",
     "word": "movements",
     "slots": 5,
     "marker": "move_ _ _ _ _ ",
     "start": 347,
     "end": 361
    },
    {
     "index": 7,
     "prefix": "a",
     "answer": "s",
     "word": "as",
     "slots": 1,
     "marker": "a_ ",
     "start": 366,
     "end": 369
    },
    {
     "index": 8,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 383,
     "end": 388
    },
    {
     "index": 9,
     "prefix": "rede",
     "answer": "fined",
     "word": "redefined",
     "slots": 5,
     "marker": "rede_ _ _ _ _ ",
     "start": 411,
     "end": 425
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "艺术",
    "art and culture"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-093",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "生命科学",
   "topic": "honeybees",
   "difficulty": "简单",
   "passage": "Honeybee social structure is a fascinating example of cooperation and division of labor in the animal kingdom. The main role of the queen bee is to lay thou_ _ _ _ _ of eg_ _ to ke_ _ the col_ _ _ growing. Wor_ _ _ bees a_ _ the bu_ _ multitaskers; th_ _ collect nec_ _ _ and pol_ _ _, feed baby bees, clean the hive, and stand guard against intruders. The only job of the male drones is to mate with a queen from another hive. Each bee plays a unique role, and this organized system of cooperation helps the colony survive and thrive.",
   "blanks": [
    {
     "index": 0,
     "prefix": "thou",
     "answer": "sands",
     "word": "thousands",
     "slots": 5,
     "marker": "thou_ _ _ _ _ ",
     "start": 152,
     "end": 166
    },
    {
     "index": 1,
     "prefix": "eg",
     "answer": "gs",
     "word": "eggs",
     "slots": 2,
     "marker": "eg_ _ ",
     "start": 169,
     "end": 175
    },
    {
     "index": 2,
     "prefix": "ke",
     "answer": "ep",
     "word": "keep",
     "slots": 2,
     "marker": "ke_ _ ",
     "start": 178,
     "end": 184
    },
    {
     "index": 3,
     "prefix": "col",
     "answer": "ony",
     "word": "colony",
     "slots": 3,
     "marker": "col_ _ _ ",
     "start": 188,
     "end": 197
    },
    {
     "index": 4,
     "prefix": "Wor",
     "answer": "ker",
     "word": "Worker",
     "slots": 3,
     "marker": "Wor_ _ _ ",
     "start": 206,
     "end": 215
    },
    {
     "index": 5,
     "prefix": "a",
     "answer": "re",
     "word": "are",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 220,
     "end": 225
    },
    {
     "index": 6,
     "prefix": "bu",
     "answer": "sy",
     "word": "busy",
     "slots": 2,
     "marker": "bu_ _ ",
     "start": 229,
     "end": 235
    },
    {
     "index": 7,
     "prefix": "th",
     "answer": "ey",
     "word": "they",
     "slots": 2,
     "marker": "th_ _ ",
     "start": 249,
     "end": 255
    },
    {
     "index": 8,
     "prefix": "nec",
     "answer": "tar",
     "word": "nectar",
     "slots": 3,
     "marker": "nec_ _ _ ",
     "start": 263,
     "end": 272
    },
    {
     "index": 9,
     "prefix": "pol",
     "answer": "len",
     "word": "pollen",
     "slots": 3,
     "marker": "pol_ _ _",
     "start": 276,
     "end": 284
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "生命科学",
    "honeybees"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-099",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "生命科学",
   "topic": "nervous system",
   "difficulty": "中等",
   "passage": "The human nervous system is responsible for coordinating actions and processing sensory information by transmitting signals between different parts of the body. This com_ _ _ _ network ena_ _ _ _ essential func_ _ _ _ _ such a_ sensation, move_ _ _ _ , and tho_ _ _ _ . The ce_ _ _ in t_ _ nervous sys_ _ _ (neurons) commu_ _ _ _ _ _ through electrical impulses and chemical signals. This system controls voluntary actions like movement by sending messages from the brain to muscles, and it also controls involuntary functions such as heart rate, breathing, and digestion.",
   "blanks": [
    {
     "index": 0,
     "prefix": "com",
     "answer": "plex",
     "word": "complex",
     "slots": 4,
     "marker": "com_ _ _ _ ",
     "start": 166,
     "end": 177
    },
    {
     "index": 1,
     "prefix": "ena",
     "answer": "bles",
     "word": "enables",
     "slots": 4,
     "marker": "ena_ _ _ _ ",
     "start": 185,
     "end": 196
    },
    {
     "index": 2,
     "prefix": "func",
     "answer": "tions",
     "word": "functions",
     "slots": 5,
     "marker": "func_ _ _ _ _ ",
     "start": 206,
     "end": 220
    },
    {
     "index": 3,
     "prefix": "a",
     "answer": "s",
     "word": "as",
     "slots": 1,
     "marker": "a_ ",
     "start": 225,
     "end": 228
    },
    {
     "index": 4,
     "prefix": "move",
     "answer": "ment",
     "word": "movement",
     "slots": 4,
     "marker": "move_ _ _ _ ",
     "start": 239,
     "end": 251
    },
    {
     "index": 5,
     "prefix": "tho",
     "answer": "ught",
     "word": "thought",
     "slots": 4,
     "marker": "tho_ _ _ _ ",
     "start": 257,
     "end": 268
    },
    {
     "index": 6,
     "prefix": "ce",
     "answer": "lls",
     "word": "cells",
     "slots": 3,
     "marker": "ce_ _ _ ",
     "start": 274,
     "end": 282
    },
    {
     "index": 7,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "marker": "t_ _ ",
     "start": 285,
     "end": 290
    },
    {
     "index": 8,
     "prefix": "sys",
     "answer": "tem",
     "word": "system",
     "slots": 3,
     "marker": "sys_ _ _ ",
     "start": 298,
     "end": 307
    },
    {
     "index": 9,
     "prefix": "commu",
     "answer": "nicate",
     "word": "communicate",
     "slots": 6,
     "marker": "commu_ _ _ _ _ _ ",
     "start": 317,
     "end": 334
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "生命科学",
    "nervous system"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-100",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "社会科学",
   "topic": "bone tools",
   "difficulty": "中等",
   "passage": "Using bone for the manufacture of tools and other objects has a long history. Many of the wea_ _ _ _ that prehi_ _ _ _ _ _ people us_ _ for hun_ _ _ _ were ma_ _ from t_ _ bones o_ the ani_ _ _ _ they hun_ _ _ . The phys_ _ _ _ properties of these materials varied greatly. For example, the strength and flexibility of antler were important to the way these tools were utilized. Many early bone tools show distinctive signs of wear and polishing, revealing how they were handled and over time.",
   "blanks": [
    {
     "index": 0,
     "prefix": "wea",
     "answer": "pons",
     "word": "weapons",
     "slots": 4,
     "marker": "wea_ _ _ _ ",
     "start": 90,
     "end": 101
    },
    {
     "index": 1,
     "prefix": "prehi",
     "answer": "storic",
     "word": "prehistoric",
     "slots": 6,
     "marker": "prehi_ _ _ _ _ _ ",
     "start": 106,
     "end": 123
    },
    {
     "index": 2,
     "prefix": "us",
     "answer": "ed",
     "word": "used",
     "slots": 2,
     "marker": "us_ _ ",
     "start": 130,
     "end": 136
    },
    {
     "index": 3,
     "prefix": "hun",
     "answer": "ting",
     "word": "hunting",
     "slots": 4,
     "marker": "hun_ _ _ _ ",
     "start": 140,
     "end": 151
    },
    {
     "index": 4,
     "prefix": "ma",
     "answer": "de",
     "word": "made",
     "slots": 2,
     "marker": "ma_ _ ",
     "start": 156,
     "end": 162
    },
    {
     "index": 5,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "marker": "t_ _ ",
     "start": 167,
     "end": 172
    },
    {
     "index": 6,
     "prefix": "o",
     "answer": "f",
     "word": "of",
     "slots": 1,
     "marker": "o_ ",
     "start": 178,
     "end": 181
    },
    {
     "index": 7,
     "prefix": "ani",
     "answer": "mals",
     "word": "animals",
     "slots": 4,
     "marker": "ani_ _ _ _ ",
     "start": 185,
     "end": 196
    },
    {
     "index": 8,
     "prefix": "hun",
     "answer": "ted",
     "word": "hunted",
     "slots": 3,
     "marker": "hun_ _ _ ",
     "start": 201,
     "end": 210
    },
    {
     "index": 9,
     "prefix": "phys",
     "answer": "ical",
     "word": "physical",
     "slots": 4,
     "marker": "phys_ _ _ _ ",
     "start": 216,
     "end": 228
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "社会科学",
    "bone tools"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-101",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "社会科学",
   "topic": "agriculture",
   "difficulty": "中等",
   "passage": "Agriculture refers to the systematic cultivation of crops and the domestication of animals to produce food and other essential resources. This prac_ _ _ _ has sust_ _ _ _ _ human soci_ _ _ _ _ for mill_ _ _ _ _ . Farmers emp_ _ _ various techn_ _ _ _ _ such a_ plowing a_ _ irrigation t_ manage la_ _ effectively. Additionally, livestock including cattle, poultry, and sheep are raised for products like milk, meat, and wool. Agriculture remains a cornerstone of global food security and plays a vital role in supporting economies and communities worldwide.",
   "blanks": [
    {
     "index": 0,
     "prefix": "prac",
     "answer": "tice",
     "word": "practice",
     "slots": 4,
     "marker": "prac_ _ _ _ ",
     "start": 143,
     "end": 155
    },
    {
     "index": 1,
     "prefix": "sust",
     "answer": "ained",
     "word": "sustained",
     "slots": 5,
     "marker": "sust_ _ _ _ _ ",
     "start": 159,
     "end": 173
    },
    {
     "index": 2,
     "prefix": "soci",
     "answer": "eties",
     "word": "societies",
     "slots": 5,
     "marker": "soci_ _ _ _ _ ",
     "start": 179,
     "end": 193
    },
    {
     "index": 3,
     "prefix": "mill",
     "answer": "ennia",
     "word": "millennia",
     "slots": 5,
     "marker": "mill_ _ _ _ _ ",
     "start": 197,
     "end": 211
    },
    {
     "index": 4,
     "prefix": "emp",
     "answer": "loy",
     "word": "employ",
     "slots": 3,
     "marker": "emp_ _ _ ",
     "start": 221,
     "end": 230
    },
    {
     "index": 5,
     "prefix": "techn",
     "answer": "iques",
     "word": "techniques",
     "slots": 5,
     "marker": "techn_ _ _ _ _ ",
     "start": 238,
     "end": 253
    },
    {
     "index": 6,
     "prefix": "a",
     "answer": "s",
     "word": "as",
     "slots": 1,
     "marker": "a_ ",
     "start": 258,
     "end": 261
    },
    {
     "index": 7,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 269,
     "end": 274
    },
    {
     "index": 8,
     "prefix": "t",
     "answer": "o",
     "word": "to",
     "slots": 1,
     "marker": "t_ ",
     "start": 285,
     "end": 288
    },
    {
     "index": 9,
     "prefix": "la",
     "answer": "nd",
     "word": "land",
     "slots": 2,
     "marker": "la_ _ ",
     "start": 295,
     "end": 301
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "社会科学",
    "agriculture"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-102",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "生命科学",
   "topic": "Pinta Island tortoise",
   "difficulty": "中等",
   "passage": "The Pinta Island tortoise, a subspecies of giant tortoise native to Ecuador's Galápagos Islands, became extinct with the death of the last known individual, Lonesome George, in 2012. Pinta tortoises were kn_ _ _ for th_ _ _ domed she_ _ _ and lo_ _ necks ada_ _ _ _ for fee_ _ _ ; they pla_ _ _ a cru_ _ _ _ role i_ shaping veget_ _ _ _ _ by grazing on plants and dispersing seeds. The extinction of this subspecies highlights the impact of human activity on isolated ecosystems. Invasive species and habitat destruction were significant factors contributing to its decline.",
   "blanks": [
    {
     "index": 0,
     "prefix": "kn",
     "answer": "own",
     "word": "known",
     "slots": 3,
     "marker": "kn_ _ _ ",
     "start": 204,
     "end": 212
    },
    {
     "index": 1,
     "prefix": "th",
     "answer": "eir",
     "word": "their",
     "slots": 3,
     "marker": "th_ _ _ ",
     "start": 216,
     "end": 224
    },
    {
     "index": 2,
     "prefix": "she",
     "answer": "lls",
     "word": "shells",
     "slots": 3,
     "marker": "she_ _ _ ",
     "start": 230,
     "end": 239
    },
    {
     "index": 3,
     "prefix": "lo",
     "answer": "ng",
     "word": "long",
     "slots": 2,
     "marker": "lo_ _ ",
     "start": 243,
     "end": 249
    },
    {
     "index": 4,
     "prefix": "ada",
     "answer": "pted",
     "word": "adapted",
     "slots": 4,
     "marker": "ada_ _ _ _ ",
     "start": 255,
     "end": 266
    },
    {
     "index": 5,
     "prefix": "fee",
     "answer": "ding",
     "word": "feeding",
     "slots": 4,
     "marker": "fee_ _ _ ",
     "start": 270,
     "end": 279
    },
    {
     "index": 6,
     "prefix": "pla",
     "answer": "yed",
     "word": "played",
     "slots": 3,
     "marker": "pla_ _ _ ",
     "start": 286,
     "end": 295
    },
    {
     "index": 7,
     "prefix": "cru",
     "answer": "cial",
     "word": "crucial",
     "slots": 4,
     "marker": "cru_ _ _ _ ",
     "start": 297,
     "end": 308
    },
    {
     "index": 8,
     "prefix": "i",
     "answer": "n",
     "word": "in",
     "slots": 1,
     "marker": "i_ ",
     "start": 313,
     "end": 316
    },
    {
     "index": 9,
     "prefix": "veget",
     "answer": "ation",
     "word": "vegetation",
     "slots": 5,
     "marker": "veget_ _ _ _ _ ",
     "start": 324,
     "end": 339
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "生命科学",
    "Pinta Island tortoise"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-103",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "艺术",
   "topic": "Baroque music",
   "difficulty": "中等",
   "passage": "The Baroque period in music, spanning from the late sixteenth to the early eighteenth century, introduced dramatic changes in musical composition and performance. Composers su_ _ as Johann Sebastian Bach, George Frideric Handel, a_ _ Antonio Vivaldi cre_ _ _ _ intricate wo_ _ _ characterized b_ expressive melo_ _ _ _ . The inve_ _ _ _ _ of n_ _ musical instr_ _ _ _ _ _ like t_ _ harpsichord and early forms of the piano expanded the possibilities for composers and performers. With the use of basso continuo and polyphonic structures, Baroque music often featured contrasts in texture and dynamics.",
   "blanks": [
    {
     "index": 0,
     "prefix": "su",
     "answer": "ch",
     "word": "such",
     "slots": 2,
     "marker": "su_ _ ",
     "start": 173,
     "end": 179
    },
    {
     "index": 1,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 229,
     "end": 234
    },
    {
     "index": 2,
     "prefix": "cre",
     "answer": "ated",
     "word": "created",
     "slots": 4,
     "marker": "cre_ _ _ _ ",
     "start": 250,
     "end": 261
    },
    {
     "index": 3,
     "prefix": "wo",
     "answer": "rks",
     "word": "works",
     "slots": 3,
     "marker": "wo_ _ _ ",
     "start": 271,
     "end": 279
    },
    {
     "index": 4,
     "prefix": "b",
     "answer": "y",
     "word": "by",
     "slots": 1,
     "marker": "b_ ",
     "start": 293,
     "end": 296
    },
    {
     "index": 5,
     "prefix": "melo",
     "answer": "dies",
     "word": "melodies",
     "slots": 4,
     "marker": "melo_ _ _ _ ",
     "start": 307,
     "end": 319
    },
    {
     "index": 6,
     "prefix": "inve",
     "answer": "ntion",
     "word": "invention",
     "slots": 5,
     "marker": "inve_ _ _ _ _ ",
     "start": 325,
     "end": 339
    },
    {
     "index": 7,
     "prefix": "n",
     "answer": "ew",
     "word": "new",
     "slots": 2,
     "marker": "n_ _ ",
     "start": 342,
     "end": 347
    },
    {
     "index": 8,
     "prefix": "instr",
     "answer": "uments",
     "word": "instruments",
     "slots": 6,
     "marker": "instr_ _ _ _ _ _ ",
     "start": 355,
     "end": 372
    },
    {
     "index": 9,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "marker": "t_ _ ",
     "start": 377,
     "end": 382
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "艺术",
    "Baroque music"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-105",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "生命科学",
   "topic": "baiji dolphin",
   "difficulty": "困难",
   "passage": "The extinction of the baiji dolphin, also known as the Yangtze River dolphin, serves as a stark reminder of the impact of human activities on freshwater ecosystems. Declared functi_ _ _ _ _ _ extinct i_ 2006, t_ _ baiji suff_ _ _ _ from hab_ _ _ _ loss a_ _ the eff_ _ _ _ of poll_ _ _ _ _ . Conservationists atte_ _ _ _ _ rescue miss_ _ _ _ and breeding programs, but these efforts were hindered by the dolphin's declining population and fragmented habitat. Studying the baiji's extinction helps scientists develop strategies to protect other endangered freshwater species and highlights the need for sustainable practices.",
   "blanks": [
    {
     "index": 0,
     "prefix": "functi",
     "answer": "onally",
     "word": "functionally",
     "slots": 6,
     "marker": "functi_ _ _ _ _ _ ",
     "start": 174,
     "end": 192
    },
    {
     "index": 1,
     "prefix": "i",
     "answer": "n",
     "word": "in",
     "slots": 1,
     "marker": "i_ ",
     "start": 200,
     "end": 203
    },
    {
     "index": 2,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "marker": "t_ _ ",
     "start": 209,
     "end": 214
    },
    {
     "index": 3,
     "prefix": "suff",
     "answer": "ered",
     "word": "suffered",
     "slots": 4,
     "marker": "suff_ _ _ _ ",
     "start": 220,
     "end": 232
    },
    {
     "index": 4,
     "prefix": "hab",
     "answer": "itat",
     "word": "habitat",
     "slots": 4,
     "marker": "hab_ _ _ _ ",
     "start": 237,
     "end": 248
    },
    {
     "index": 5,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 253,
     "end": 258
    },
    {
     "index": 6,
     "prefix": "eff",
     "answer": "ects",
     "word": "effects",
     "slots": 4,
     "marker": "eff_ _ _ _ ",
     "start": 262,
     "end": 273
    },
    {
     "index": 7,
     "prefix": "poll",
     "answer": "ution",
     "word": "pollution",
     "slots": 5,
     "marker": "poll_ _ _ _ _ ",
     "start": 276,
     "end": 290
    },
    {
     "index": 8,
     "prefix": "atte",
     "answer": "mpted",
     "word": "attempted",
     "slots": 5,
     "marker": "atte_ _ _ _ _ ",
     "start": 309,
     "end": 323
    },
    {
     "index": 9,
     "prefix": "miss",
     "answer": "ions",
     "word": "missions",
     "slots": 4,
     "marker": "miss_ _ _ _ ",
     "start": 330,
     "end": 342
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "生命科学",
    "baiji dolphin"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-109",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "社会科学",
   "topic": "classical civilizations",
   "difficulty": "简单",
   "passage": "The classical civilizations of ancient Greece and Rome have greatly influenced modern society. In fa_ _ , many o_ their instit_ _ _ _ _ _ and id_ _ _ continue t_ shape t_ _ modern wo_ _ _ . The Greeks, f_ _ example, ma_ _ significant contri_ _ _ _ _ _ _ to architecture, art, philosophy, and government, while the Romans created extensive legal and political systems. Studying these two classical civilizations provides insights into the foundations of Western culture. It also provides a historical context to understanding contemporary practices and societies.",
   "blanks": [
    {
     "index": 0,
     "prefix": "fa",
     "answer": "ct",
     "word": "fact",
     "slots": 2,
     "marker": "fa_ _ ",
     "start": 98,
     "end": 104
    },
    {
     "index": 1,
     "prefix": "o",
     "answer": "f",
     "word": "of",
     "slots": 1,
     "marker": "o_ ",
     "start": 111,
     "end": 114
    },
    {
     "index": 2,
     "prefix": "instit",
     "answer": "utions",
     "word": "institutions",
     "slots": 6,
     "marker": "instit_ _ _ _ _ _ ",
     "start": 120,
     "end": 138
    },
    {
     "index": 3,
     "prefix": "id",
     "answer": "eas",
     "word": "ideas",
     "slots": 3,
     "marker": "id_ _ _ ",
     "start": 142,
     "end": 150
    },
    {
     "index": 4,
     "prefix": "t",
     "answer": "o",
     "word": "to",
     "slots": 1,
     "marker": "t_ ",
     "start": 159,
     "end": 162
    },
    {
     "index": 5,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "marker": "t_ _ ",
     "start": 168,
     "end": 173
    },
    {
     "index": 6,
     "prefix": "wo",
     "answer": "rld",
     "word": "world",
     "slots": 3,
     "marker": "wo_ _ _ ",
     "start": 180,
     "end": 188
    },
    {
     "index": 7,
     "prefix": "f",
     "answer": "or",
     "word": "for",
     "slots": 2,
     "marker": "f_ _ ",
     "start": 202,
     "end": 207
    },
    {
     "index": 8,
     "prefix": "ma",
     "answer": "de",
     "word": "made",
     "slots": 2,
     "marker": "ma_ _ ",
     "start": 216,
     "end": 222
    },
    {
     "index": 9,
     "prefix": "contri",
     "answer": "butions",
     "word": "contributions",
     "slots": 7,
     "marker": "contri_ _ _ _ _ _ _ ",
     "start": 234,
     "end": 254
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "社会科学",
    "classical civilizations"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-110",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "社会科学",
   "topic": "philosophy",
   "difficulty": "中等",
   "passage": "Philosophy investigates the nature of reality, existence, and knowledge through critical thinking and reasoning. It expl_ _ _ _ fundamental ques_ _ _ _ _ about t_ _ human exper_ _ _ _ _, ethics, a_ _ the mi_ _ . Philosophers dev_ _ _ _ theories t_ better under_ _ _ _ _ the wo_ _ _ and our place in it. This discipline challenges individuals to reflect deeply on their beliefs and assumptions, fostering intellectual growth and enlightenment. Contemporary philosophical branches include bioethics, philosophy of mind, and environmental philosophy, addressing modern challenges such as artificial intelligence consciousness, genetic engineering ethics, and humanity's relationship with nature.",
   "blanks": [
    {
     "index": 0,
     "prefix": "expl",
     "answer": "ores",
     "word": "explores",
     "slots": 4,
     "marker": "expl_ _ _ _ ",
     "start": 116,
     "end": 128
    },
    {
     "index": 1,
     "prefix": "ques",
     "answer": "tions",
     "word": "questions",
     "slots": 5,
     "marker": "ques_ _ _ _ _ ",
     "start": 140,
     "end": 154
    },
    {
     "index": 2,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "marker": "t_ _ ",
     "start": 160,
     "end": 165
    },
    {
     "index": 3,
     "prefix": "exper",
     "answer": "ience",
     "word": "experience",
     "slots": 5,
     "marker": "exper_ _ _ _ _",
     "start": 171,
     "end": 185
    },
    {
     "index": 4,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 195,
     "end": 200
    },
    {
     "index": 5,
     "prefix": "mi",
     "answer": "nd",
     "word": "mind",
     "slots": 2,
     "marker": "mi_ _ ",
     "start": 204,
     "end": 210
    },
    {
     "index": 6,
     "prefix": "dev",
     "answer": "elop",
     "word": "develop",
     "slots": 4,
     "marker": "dev_ _ _ _ ",
     "start": 225,
     "end": 236
    },
    {
     "index": 7,
     "prefix": "t",
     "answer": "o",
     "word": "to",
     "slots": 1,
     "marker": "t_ ",
     "start": 245,
     "end": 248
    },
    {
     "index": 8,
     "prefix": "under",
     "answer": "stand",
     "word": "understand",
     "slots": 5,
     "marker": "under_ _ _ _ _ ",
     "start": 255,
     "end": 270
    },
    {
     "index": 9,
     "prefix": "wo",
     "answer": "rld",
     "word": "world",
     "slots": 3,
     "marker": "wo_ _ _ ",
     "start": 274,
     "end": 282
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "社会科学",
    "philosophy"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-111",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "社会科学",
   "topic": "industrialization",
   "difficulty": "中等",
   "passage": "In the early days of industrialization, many cities experienced rapid growth. This w_ _ due t_ the inf_ _ _ of wor_ _ _ _ seeking emplo_ _ _ _ _ in fact_ _ _ _ _ . Urbanization l_ _ to signi_ _ _ _ _ _ changes i_ the soc_ _ _ fabric, as people from diverse backgrounds came to live and work in close quarters. Industrialization also brought about various challenges, including the environmental problems caused by increased pollution and the need for improved infrastructure to house and transport the new city residents.",
   "blanks": [
    {
     "index": 0,
     "prefix": "w",
     "answer": "as",
     "word": "was",
     "slots": 2,
     "marker": "w_ _ ",
     "start": 83,
     "end": 88
    },
    {
     "index": 1,
     "prefix": "t",
     "answer": "o",
     "word": "to",
     "slots": 1,
     "marker": "t_ ",
     "start": 92,
     "end": 95
    },
    {
     "index": 2,
     "prefix": "inf",
     "answer": "lux",
     "word": "influx",
     "slots": 3,
     "marker": "inf_ _ _ ",
     "start": 99,
     "end": 108
    },
    {
     "index": 3,
     "prefix": "wor",
     "answer": "kers",
     "word": "workers",
     "slots": 4,
     "marker": "wor_ _ _ _ ",
     "start": 111,
     "end": 122
    },
    {
     "index": 4,
     "prefix": "emplo",
     "answer": "yment",
     "word": "employment",
     "slots": 5,
     "marker": "emplo_ _ _ _ _ ",
     "start": 130,
     "end": 145
    },
    {
     "index": 5,
     "prefix": "fact",
     "answer": "ories",
     "word": "factories",
     "slots": 5,
     "marker": "fact_ _ _ _ _ ",
     "start": 148,
     "end": 162
    },
    {
     "index": 6,
     "prefix": "l",
     "answer": "ed",
     "word": "led",
     "slots": 2,
     "marker": "l_ _ ",
     "start": 177,
     "end": 182
    },
    {
     "index": 7,
     "prefix": "signi",
     "answer": "ficant",
     "word": "significant",
     "slots": 6,
     "marker": "signi_ _ _ _ _ _ ",
     "start": 185,
     "end": 202
    },
    {
     "index": 8,
     "prefix": "i",
     "answer": "n",
     "word": "in",
     "slots": 1,
     "marker": "i_ ",
     "start": 210,
     "end": 213
    },
    {
     "index": 9,
     "prefix": "soc",
     "answer": "ial",
     "word": "social",
     "slots": 3,
     "marker": "soc_ _ _ ",
     "start": 217,
     "end": 226
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "社会科学",
    "industrialization"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-112",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "社会科学",
   "topic": "language development",
   "difficulty": "简单",
   "passage": "Language development in children is a complex process influenced by both genetics and environment. From bi_ _ _ , infants be_ _ _ to recognize sou_ _ _ and patt_ _ _ _ in spe_ _ _ . By o_ _ year o_ age, mo_ _ can s_ _ simple wo_ _ _ like \"mama\" or \"dada.\" As they grow, their vocabulary expands rapidly. Interacting with caregivers and peers plays a crucial role in this development. Reading to children and engaging in conversations are effective ways to support language acquisition.",
   "blanks": [
    {
     "index": 0,
     "prefix": "bi",
     "answer": "rth",
     "word": "birth",
     "slots": 3,
     "marker": "bi_ _ _ ",
     "start": 104,
     "end": 112
    },
    {
     "index": 1,
     "prefix": "be",
     "answer": "gin",
     "word": "begin",
     "slots": 3,
     "marker": "be_ _ _ ",
     "start": 122,
     "end": 130
    },
    {
     "index": 2,
     "prefix": "sou",
     "answer": "nds",
     "word": "sounds",
     "slots": 3,
     "marker": "sou_ _ _ ",
     "start": 143,
     "end": 152
    },
    {
     "index": 3,
     "prefix": "patt",
     "answer": "erns",
     "word": "patterns",
     "slots": 4,
     "marker": "patt_ _ _ _ ",
     "start": 156,
     "end": 168
    },
    {
     "index": 4,
     "prefix": "spe",
     "answer": "ech",
     "word": "speech",
     "slots": 3,
     "marker": "spe_ _ _ ",
     "start": 171,
     "end": 180
    },
    {
     "index": 5,
     "prefix": "o",
     "answer": "ne",
     "word": "one",
     "slots": 2,
     "marker": "o_ _ ",
     "start": 185,
     "end": 190
    },
    {
     "index": 6,
     "prefix": "o",
     "answer": "f",
     "word": "of",
     "slots": 1,
     "marker": "o_ ",
     "start": 195,
     "end": 198
    },
    {
     "index": 7,
     "prefix": "mo",
     "answer": "st",
     "word": "most",
     "slots": 2,
     "marker": "mo_ _ ",
     "start": 203,
     "end": 209
    },
    {
     "index": 8,
     "prefix": "s",
     "answer": "ay",
     "word": "say",
     "slots": 2,
     "marker": "s_ _ ",
     "start": 213,
     "end": 218
    },
    {
     "index": 9,
     "prefix": "wo",
     "answer": "rds",
     "word": "words",
     "slots": 3,
     "marker": "wo_ _ _ ",
     "start": 225,
     "end": 233
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "社会科学",
    "language development"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-113",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "自然科学",
   "topic": "ocean currents",
   "difficulty": "中等",
   "passage": "Ocean currents are critical components of Earth's climate system, influencing weather patterns and marine ecosystems. Driven b_ wind, temper_ _ _ _ _ changes, a_ _ differences i_ salinity, ocean currents distr_ _ _ _ _ heat acr_ _ _ the gl_ _ _. The Gulf Stream, f_ _ instance, wa_ _ _ _ the North Atlantic Current, affe_ _ _ _ _ climate in Europe. Deep ocean currents, known as thermohaline circulation, play a role in regulating global temperatures and carbon dioxide levels. Research in oceanography continues to reveal the complexities of these dynamic systems.",
   "blanks": [
    {
     "index": 0,
     "prefix": "b",
     "answer": "y",
     "word": "by",
     "slots": 1,
     "marker": "b_ ",
     "start": 125,
     "end": 128
    },
    {
     "index": 1,
     "prefix": "temper",
     "answer": "ature",
     "word": "temperature",
     "slots": 5,
     "marker": "temper_ _ _ _ _ ",
     "start": 134,
     "end": 150
    },
    {
     "index": 2,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 159,
     "end": 164
    },
    {
     "index": 3,
     "prefix": "i",
     "answer": "n",
     "word": "in",
     "slots": 1,
     "marker": "i_ ",
     "start": 176,
     "end": 179
    },
    {
     "index": 4,
     "prefix": "distr",
     "answer": "ibute",
     "word": "distribute",
     "slots": 5,
     "marker": "distr_ _ _ _ _ ",
     "start": 204,
     "end": 219
    },
    {
     "index": 5,
     "prefix": "acr",
     "answer": "oss",
     "word": "across",
     "slots": 3,
     "marker": "acr_ _ _ ",
     "start": 224,
     "end": 233
    },
    {
     "index": 6,
     "prefix": "gl",
     "answer": "obe",
     "word": "globe",
     "slots": 3,
     "marker": "gl_ _ _",
     "start": 237,
     "end": 244
    },
    {
     "index": 7,
     "prefix": "f",
     "answer": "or",
     "word": "for",
     "slots": 2,
     "marker": "f_ _ ",
     "start": 263,
     "end": 268
    },
    {
     "index": 8,
     "prefix": "wa",
     "answer": "rms",
     "word": "warms",
     "slots": 3,
     "marker": "wa_ _ _ _ ",
     "start": 278,
     "end": 288
    },
    {
     "index": 9,
     "prefix": "affe",
     "answer": "cting",
     "word": "affecting",
     "slots": 5,
     "marker": "affe_ _ _ _ _ ",
     "start": 316,
     "end": 330
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "自然科学",
    "ocean currents"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "SPT1_R_CW_M1_Q1",
   "month": "官方TPO",
   "source": "toefl-ibt-full-length-practice-test-1",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "洞穴画作：史前舞蹈",
   "discipline": "艺术",
   "topic": "画",
   "difficulty": "中等",
   "passage": "We know from drawings that have been preserved in caves for over 10,000 years that early humans performed dances as a group activity. We mi_ _ _ think th_ _ prehistoric peo_ _ _ concentrated on_ _ on ba_ _ _ survival. How_ _ _ _ , it i_ clear fr_ _ the rec_ _ _ that dan_ _ _ _ was important to them. They recorded more drawings of dances than any other group activity. Dances served various purposes, including ritualistic communication with the divine, storytelling, and social cohesion.",
   "blanks": [
    {
     "index": 0,
     "prefix": "mi",
     "answer": "ght",
     "word": "might",
     "slots": 3,
     "marker": "mi_ _ _ ",
     "start": 137,
     "end": 145
    },
    {
     "index": 1,
     "prefix": "th",
     "answer": "at",
     "word": "that",
     "slots": 2,
     "marker": "th_ _ ",
     "start": 151,
     "end": 157
    },
    {
     "index": 2,
     "prefix": "peo",
     "answer": "ple",
     "word": "people",
     "slots": 3,
     "marker": "peo_ _ _ ",
     "start": 169,
     "end": 178
    },
    {
     "index": 3,
     "prefix": "on",
     "answer": "ly",
     "word": "only",
     "slots": 2,
     "marker": "on_ _ ",
     "start": 191,
     "end": 197
    },
    {
     "index": 4,
     "prefix": "ba",
     "answer": "sic",
     "word": "basic",
     "slots": 3,
     "marker": "ba_ _ _ ",
     "start": 200,
     "end": 208
    },
    {
     "index": 5,
     "prefix": "How",
     "answer": "ever",
     "word": "However",
     "slots": 4,
     "marker": "How_ _ _ _ ",
     "start": 218,
     "end": 229
    },
    {
     "index": 6,
     "prefix": "i",
     "answer": "s",
     "word": "is",
     "slots": 1,
     "marker": "i_ ",
     "start": 234,
     "end": 237
    },
    {
     "index": 7,
     "prefix": "fr",
     "answer": "om",
     "word": "from",
     "slots": 2,
     "marker": "fr_ _ ",
     "start": 243,
     "end": 249
    },
    {
     "index": 8,
     "prefix": "rec",
     "answer": "ord",
     "word": "record",
     "slots": 3,
     "marker": "rec_ _ _ ",
     "start": 253,
     "end": 262
    },
    {
     "index": 9,
     "prefix": "dan",
     "answer": "cing",
     "word": "dancing",
     "slots": 4,
     "marker": "dan_ _ _ _ ",
     "start": 267,
     "end": 278
    }
   ],
   "translation": "我们从保存了超过 1 万年的洞穴壁画中得知，早期人类会将舞蹈作为一种集体活动。我们可能会认为，史前人类只专注于基本的生存。然而，从这些记录中可以清楚地看出，舞蹈对他们来说很重要。他们记录的舞蹈画作比其他任何集体活动都要多。舞蹈有多种用途，包括与神灵的仪式性交流、讲故事以及增强社会凝聚力。",
   "analysis": [
    {
     "word": "mi_ _ _",
     "reason": "might"
    },
    {
     "word": "推理",
     "reason": "此处需要一个情态动词表示 “可能”，结合常见拼写 “might”（可能），符合语境 “我们可能会认为……”。"
    },
    {
     "word": "th_ _",
     "reason": "that"
    },
    {
     "word": "推理",
     "reason": "此处是 “We might think that...” 句型, that 引导宾语从句。"
    },
    {
     "word": "peo_ _ _",
     "reason": "people"
    },
    {
     "word": "推理",
     "reason": "“prehistoric people” 是固定搭配，意为 “史前人类”，结合前文 “humans”（人类），此处应填 “people”。"
    },
    {
     "word": "on_ _",
     "reason": "only"
    },
    {
     "word": "推理",
     "reason": "“concentrated on only” 表示 “只专注于”，结合后文 “survival”（生存），符合语境 “只专注于基本生存”，且 “only” 的拼写与空格数量匹配。"
    },
    {
     "word": "ba_ _ _",
     "reason": "basic"
    },
    {
     "word": "推理",
     "reason": "“basic survival” 是固定搭配，意为 “基本生存”，“basic”（基本的）符合语境，且拼写与空格数量一致。"
    },
    {
     "word": "How_ _ _ _",
     "reason": "However"
    },
    {
     "word": "推理",
     "reason": "前文说 “可能只专注于生存”，后文转折 “但舞蹈对他们很重要”，“However”（然而）是表转折的副词，符合语境和空格数量。"
    },
    {
     "word": "i_",
     "reason": "is"
    },
    {
     "word": "推理",
     "reason": "此处是 “it is clear that...” 句型，意为 “很明显……”，“it” 作形式主语，谓语动词用 “is”。"
    },
    {
     "word": "fr_ _",
     "reason": "from"
    },
    {
     "word": "推理",
     "reason": "“from the records” 表示 “从记录中”，“from”（从……）符合语境 “从记录中可以清楚地看出”。"
    },
    {
     "word": "rec_ _ _",
     "reason": "record"
    },
    {
     "word": "推理",
     "reason": "前文提到 “drawings that have been preserved”（保存的画作），这些属于 “record”（记录）。"
    },
    {
     "word": "dan_ _ _ _",
     "reason": "dancing"
    },
    {
     "word": "推理",
     "reason": "全文围绕 “dance”（舞蹈）展开，此处需用动名词形式 “dancing”，与后文对于舞蹈有多种用途呼应。"
    }
   ],
   "tags": [
    "艺术",
    "画",
    "洞穴画作：史前舞蹈"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "SPT1_R_CW_M2_Q1",
   "month": "官方TPO",
   "source": "toefl-ibt-full-length-practice-test-1",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "人类大脑",
   "discipline": "生命科学",
   "topic": "生理",
   "difficulty": "中等",
   "passage": "The human brain is a complex organ responsible for controlling all bodily functions and enabling thought, emotion, and memory. It i_ divided in_ _ several reg_ _ _ _ , each wi_ _ specific ro_ _ _ . The cerebrum, i_ _ largest pa_ _ , is invo_ _ _ _ in cogn_ _ _ _ _ functions su_ _ as reasoning, planning, and language. The cerebellum coordinates movement and balance, while the brainstem controls vital bodily functions like breathing and heart rate. Together, they enable the brain to perform its various tasks.",
   "blanks": [
    {
     "index": 0,
     "prefix": "i",
     "answer": "s",
     "word": "is",
     "slots": 1,
     "marker": "i_ ",
     "start": 130,
     "end": 133
    },
    {
     "index": 1,
     "prefix": "in",
     "answer": "to",
     "word": "into",
     "slots": 2,
     "marker": "in_ _ ",
     "start": 141,
     "end": 147
    },
    {
     "index": 2,
     "prefix": "reg",
     "answer": "ions",
     "word": "regions",
     "slots": 4,
     "marker": "reg_ _ _ _ ",
     "start": 155,
     "end": 166
    },
    {
     "index": 3,
     "prefix": "wi",
     "answer": "th",
     "word": "with",
     "slots": 2,
     "marker": "wi_ _ ",
     "start": 173,
     "end": 179
    },
    {
     "index": 4,
     "prefix": "ro",
     "answer": "les",
     "word": "roles",
     "slots": 3,
     "marker": "ro_ _ _ ",
     "start": 188,
     "end": 196
    },
    {
     "index": 5,
     "prefix": "i",
     "answer": "ts",
     "word": "its",
     "slots": 2,
     "marker": "i_ _ ",
     "start": 212,
     "end": 217
    },
    {
     "index": 6,
     "prefix": "pa",
     "answer": "rt",
     "word": "part",
     "slots": 2,
     "marker": "pa_ _ ",
     "start": 225,
     "end": 231
    },
    {
     "index": 7,
     "prefix": "invo",
     "answer": "lved",
     "word": "involved",
     "slots": 4,
     "marker": "invo_ _ _ _ ",
     "start": 236,
     "end": 248
    },
    {
     "index": 8,
     "prefix": "cogn",
     "answer": "itive",
     "word": "cognitive",
     "slots": 5,
     "marker": "cogn_ _ _ _ _ ",
     "start": 251,
     "end": 265
    },
    {
     "index": 9,
     "prefix": "su",
     "answer": "ch",
     "word": "such",
     "slots": 2,
     "marker": "su_ _ ",
     "start": 275,
     "end": 281
    }
   ],
   "translation": "人类的大脑是一个复杂的器官，负责控制所有的身体功能，并使思考、情感和记忆成为可能。它被划分为几个区域，每个区域都有特定的功能。大脑皮层是它最大的部分，与认知功能有关，例如推理、计划和语言。小脑负责协调运动和平衡，而脑干则控制重要的身体功能，如呼吸和心率。这些部分共同作用，使大脑能够执行其各种任务。",
   "analysis": [
    {
     "word": "i_",
     "reason": "is"
    },
    {
     "word": "推理",
     "reason": "此处是被动语态结构 “be divided into”（被划分为），主语 “it”（指代 “the human brain”）为单数，因此 be 动词用 “is”，符合 “i_” 的空格数量和语法要求。"
    },
    {
     "word": "in_ _",
     "reason": "into"
    },
    {
     "word": "推理",
     "reason": "“divided into” 是固定短语，意为 “被划分为”，结合前文 “is divided”，此处需填 “into”，且拼写与空格数量匹配。"
    },
    {
     "word": "reg_ _ _ _",
     "reason": "regions"
    },
    {
     "word": "推理",
     "reason": "前文提到大脑是复杂器官，被划分为多个 “区域”，“regions”（区域，复数形式）符合语境 “several regions”（多个区域），且拼写与空格数量一致。"
    },
    {
     "word": "wi_ _",
     "reason": "with"
    },
    {
     "word": "推理",
     "reason": "“each with specific roles” 表示 “每个（区域）都有特定的功能”，“with”（具有）用于描述事物的特征，符合语法和语境。"
    },
    {
     "word": "ro_ _ _ _",
     "reason": "roles"
    },
    {
     "word": "推理",
     "reason": "“specific roles” 意为 “特定的功能 / 作用”，结合前文 “大脑区域”，每个区域有特定 “作用”，“roles”（作用，复数）符合语境和空格数量。"
    },
    {
     "word": "i_ _",
     "reason": "its"
    },
    {
     "word": "推理",
     "reason": "“the cerebrum, its largest part” 意为 “大脑皮层，它的最大部分”，“its”（它的，指代大脑的）用于修饰 “largest part”，符合所属关系，且拼写与空格数量匹配。"
    },
    {
     "word": "pa_ _",
     "reason": "part"
    },
    {
     "word": "推理",
     "reason": "“its largest part” 意为 “它的最大部分”，“part”（部分）与前文 “cerebrum”（大脑皮层）对应，指大脑的一部分，符合语境。"
    },
    {
     "word": "invo_ _ _ _",
     "reason": "involved"
    },
    {
     "word": "推理",
     "reason": "“is involved in” 是固定短语，意为 “参与；与…… 有关”，“the cerebrum is involved in cognitive functions” 表示 “大脑皮层与认知功能有关”，符合语法和语境，且 “involved” 的拼写与空格数量一致。"
    },
    {
     "word": "cogn_ _ _ _",
     "reason": "cognitive"
    },
    {
     "word": "推理",
     "reason": "“cognitive functions” 是固定搭配，意为 “认知功能”，后文 “reasoning, planning, and language”（推理、计划和语言）均属于认知功能，“cognitive”（认知的）符合语境和空格数量。"
    },
    {
     "word": "su_ _",
     "reason": "such"
    },
    {
     "word": "推理",
     "reason": "“such as” 是固定短语，意为 “例如”，用于举例说明 “cognitive functions” 包括哪些内容，符合语境 “such as reasoning...”。"
    }
   ],
   "tags": [
    "生命科学",
    "生理",
    "人类大脑"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "SPT2_R_CW_M1_Q1",
   "month": "官方TPO",
   "source": "toefl-ibt-full-length-practice-test-2",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "地图",
   "discipline": "社会科学",
   "topic": "技术",
   "difficulty": "中等",
   "passage": "Maps are tools that help us understand the world around us. They sh_ _ the loca_ _ _ _ _ of pla_ _ _ like cit_ _ _, rivers, a_ _ mountains. Th_ _ _ visual gu_ _ _ _ can al_ _ display different ty_ _ _ of infor_ _ _ _ _ _, such as climate or population. There are many kinds, including physical, political, and thematic versions. The study of maps and cartography, the process by which they are made, can teach us about the geography of our planet and how people live in different regions.",
   "blanks": [
    {
     "index": 0,
     "prefix": "sh",
     "answer": "ow",
     "word": "show",
     "slots": 2,
     "marker": "sh_ _ ",
     "start": 65,
     "end": 71
    },
    {
     "index": 1,
     "prefix": "loca",
     "answer": "tions",
     "word": "locations",
     "slots": 5,
     "marker": "loca_ _ _ _ _ ",
     "start": 75,
     "end": 89
    },
    {
     "index": 2,
     "prefix": "pla",
     "answer": "ces",
     "word": "places",
     "slots": 3,
     "marker": "pla_ _ _ ",
     "start": 92,
     "end": 101
    },
    {
     "index": 3,
     "prefix": "cit",
     "answer": "ies",
     "word": "cities",
     "slots": 3,
     "marker": "cit_ _ _",
     "start": 106,
     "end": 114
    },
    {
     "index": 4,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 124,
     "end": 129
    },
    {
     "index": 5,
     "prefix": "Th",
     "answer": "ese",
     "word": "These",
     "slots": 3,
     "marker": "Th_ _ _ ",
     "start": 140,
     "end": 148
    },
    {
     "index": 6,
     "prefix": "gu",
     "answer": "ides",
     "word": "guides",
     "slots": 4,
     "marker": "gu_ _ _ _ ",
     "start": 155,
     "end": 165
    },
    {
     "index": 7,
     "prefix": "al",
     "answer": "so",
     "word": "also",
     "slots": 2,
     "marker": "al_ _ ",
     "start": 169,
     "end": 175
    },
    {
     "index": 8,
     "prefix": "ty",
     "answer": "pes",
     "word": "types",
     "slots": 3,
     "marker": "ty_ _ _ ",
     "start": 193,
     "end": 201
    },
    {
     "index": 9,
     "prefix": "infor",
     "answer": "mation",
     "word": "information",
     "slots": 6,
     "marker": "infor_ _ _ _ _ _",
     "start": 204,
     "end": 220
    }
   ],
   "translation": "地图是帮助我们理解周围世界的工具。它们展示像城市、河流和山脉等地方的位置。这些视觉指南还能展示不同类型的信息，例如气候或人口。地图有很多种类，包括自然地图、政区地图和专题地图。对地图以及制图学（制作地图的过程）的研究，能让我们了解地球的地理状况以及人们在不同地区的生活方式。",
   "analysis": [
    {
     "word": "sh_ _",
     "reason": "show"
    },
    {
     "word": "推理",
     "reason": "前文提到地图是帮助我们理解世界的工具，此处需要一个动词表示 “展示”，“show”（展示）符合语境 “它们展示…… 的位置”，且拼写与空格数量匹配。"
    },
    {
     "word": "loca_ _ _ _",
     "reason": "locations"
    },
    {
     "word": "推理",
     "reason": "“the location(s) of...” 是固定搭配，意为 “…… 的位置”，结合后文 “places like cities...”（像城市…… 的地方），此处应填 “locations”（位置），拼写与空格数量一致。"
    },
    {
     "word": "pla_ _ _",
     "reason": "places"
    },
    {
     "word": "推理",
     "reason": "后文列举了 “cities, rivers...”（城市、河流……），这些都属于 “places”（地方），且 “several places”（多个地方）需用复数形式，“places” 符合语境和空格数量。"
    },
    {
     "word": "cit_ _ _",
     "reason": "cities"
    },
    {
     "word": "推理",
     "reason": "“cities”（城市，复数）是常见地理名称，与 “rivers, mountains”（河流、山脉）并列，属于地图上展示的地方，符合语境和空格数量。"
    },
    {
     "word": "a_ _",
     "reason": "and"
    },
    {
     "word": "推理",
     "reason": "“cities, rivers, and mountains” 是并列结构，用 “and” 连接最后两个并列成分，符合英语语法中列举事物的表达习惯。"
    },
    {
     "word": "Th_ _ _ _",
     "reason": "These"
    },
    {
     "word": "推理",
     "reason": "前文提到 “maps”（复数），此处用 “These”（这些）指代前文的地图，修饰 “visual guides”（视觉指南），符合复数指代关系，且拼写与空格数量匹配。"
    },
    {
     "word": "gu_ _ _ _",
     "reason": "guides"
    },
    {
     "word": "推理",
     "reason": "“visual guides” 意为 “视觉指南”，地图作为工具，可被称为 “视觉指南”，“guides”（指南，复数）与 “These” 呼应，符合语境和空格数量。"
    },
    {
     "word": "al_ _",
     "reason": "also"
    },
    {
     "word": "推理",
     "reason": "前文说地图展示位置，此处进一步说明 “还能展示不同类型的信息”，“also”（还，也）用于补充信息，符合语境和空格数量。"
    },
    {
     "word": "ty_ _ _",
     "reason": "types"
    },
    {
     "word": "推理",
     "reason": "“different types of...” 意为 “不同类型的……”，结合后文 “climate or population”（气候或人口），这些属于不同 “类型” 的信息，“types”（类型，复数）符合语境和空格数量。"
    },
    {
     "word": "infor_ _ _ _ _",
     "reason": "information"
    },
    {
     "word": "推理",
     "reason": "“information”（信息）是不可数名词，“different types of information” 意为 “不同类型的信息”，符合语境 “展示不同类型的信息”，且拼写与空格数量一致。"
    }
   ],
   "tags": [
    "社会科学",
    "技术",
    "地图"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "SPT2_R_CW_M2_Q1",
   "month": "官方TPO",
   "source": "toefl-ibt-full-length-practice-test-2",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "大象",
   "discipline": "生命科学",
   "topic": "生物",
   "difficulty": "中等",
   "passage": "Elephants are social animals that live in groups called herds. They commu_ _ _ _ _ _ using sou_ _ _ , gestures, a_ _ touch. These ani_ _ _ _ are kn_ _ _ for th_ _ _ strong fam_ _ _ bonds and of_ _ _ help ea_ _ other i_ times of need. They can remember the locations of water sources and food, which helps them survive in their natural environment. These highly intelligent creatures play an important role in their ecosystems, shaping the landscape, creating access to moisture, and spreading seeds.",
   "blanks": [
    {
     "index": 0,
     "prefix": "commu",
     "answer": "nicate",
     "word": "communicate",
     "slots": 6,
     "marker": "commu_ _ _ _ _ _ ",
     "start": 68,
     "end": 85
    },
    {
     "index": 1,
     "prefix": "sou",
     "answer": "nds",
     "word": "sounds",
     "slots": 3,
     "marker": "sou_ _ _ ",
     "start": 91,
     "end": 100
    },
    {
     "index": 2,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 112,
     "end": 117
    },
    {
     "index": 3,
     "prefix": "ani",
     "answer": "mals",
     "word": "animals",
     "slots": 4,
     "marker": "ani_ _ _ _ ",
     "start": 130,
     "end": 141
    },
    {
     "index": 4,
     "prefix": "kn",
     "answer": "own",
     "word": "known",
     "slots": 3,
     "marker": "kn_ _ _ ",
     "start": 145,
     "end": 153
    },
    {
     "index": 5,
     "prefix": "th",
     "answer": "eir",
     "word": "their",
     "slots": 3,
     "marker": "th_ _ _ ",
     "start": 157,
     "end": 165
    },
    {
     "index": 6,
     "prefix": "fam",
     "answer": "ily",
     "word": "family",
     "slots": 3,
     "marker": "fam_ _ _ ",
     "start": 172,
     "end": 181
    },
    {
     "index": 7,
     "prefix": "of",
     "answer": "ten",
     "word": "often",
     "slots": 3,
     "marker": "of_ _ _ ",
     "start": 191,
     "end": 199
    },
    {
     "index": 8,
     "prefix": "ea",
     "answer": "ch",
     "word": "each",
     "slots": 2,
     "marker": "ea_ _ ",
     "start": 204,
     "end": 210
    },
    {
     "index": 9,
     "prefix": "i",
     "answer": "n",
     "word": "in",
     "slots": 1,
     "marker": "i_ ",
     "start": 216,
     "end": 219
    }
   ],
   "translation": "大象是群居动物，它们生活在被称为 “兽群” 的群体中。它们通过声音、手势和触碰进行交流。这些动物因牢固的家庭纽带而闻名，并且在需要时经常互相帮助。它们能记住水源和食物的位置，这有助于它们在自然环境中生存。这些高智商的生物在生态系统中扮演着重要角色，它们塑造地貌、开辟获取水分的途径，还能传播种子。",
   "analysis": [
    {
     "word": "commu_ _ _ _ _ _",
     "reason": "communicate"
    },
    {
     "word": "推理",
     "reason": "根据前文 “social animals”（群居动物）和后文 “using sounds, gestures...”（通过声音、手势...），此处需填入表示 “交流” 的动词。“communicate” 是原形，符合语境（主语 they 为复数，一般现在时用动词原形），且拼写与空格数量一致。"
    },
    {
     "word": "sou_ _ _",
     "reason": "sounds"
    },
    {
     "word": "推理",
     "reason": "大象交流的方式包括 “声音”，“sounds”（声音，复数）与 “gestures, touch” 并列，构成三种交流方式，符合语境和空格数量。"
    },
    {
     "word": "a_ _",
     "reason": "and"
    },
    {
     "word": "推理",
     "reason": "“sounds, gestures, and touch” 是并列结构，用 “and” 连接最后两个成分，符合英语列举事物的语法规则。"
    },
    {
     "word": "ani_ _ _ _",
     "reason": "animals"
    },
    {
     "word": "推理",
     "reason": "前文主语是 “elephants”，此处用 “these animals” 指代大象，“animals”（动物，复数）与 “these” 呼应，符合指代关系和空格数量。"
    },
    {
     "word": "kn_ _ _",
     "reason": "known"
    },
    {
     "word": "推理",
     "reason": "“be known for...” 是固定搭配，意为 “因... 而闻名”，此处表示 “大象因牢固的家庭纽带而闻名”，“known” 符合语法结构（被动语态）。"
    },
    {
     "word": "th_ _ _",
     "reason": "their"
    },
    {
     "word": "推理",
     "reason": "“their strong family bonds” 意为 “它们的家庭纽带”，“their”（它们的）修饰 “family bonds”，体现所属关系，且拼写与空格数量匹配。"
    },
    {
     "word": "fam_ _ _",
     "reason": "family"
    },
    {
     "word": "推理",
     "reason": "“family bonds”（家庭纽带）是固定表达，结合前文 “social animals”（群居动物），此处强调大象的家庭关系，“family” 符合语境。"
    },
    {
     "word": "of_ _ _",
     "reason": "often"
    },
    {
     "word": "推理",
     "reason": "“often”（经常）表示频率，说明大象 “经常互相帮助”，符合语境 “在需要时互相帮助” 的语义，且拼写与空格数量一致。"
    },
    {
     "word": "ea_ _",
     "reason": "each"
    },
    {
     "word": "推理",
     "reason": "“each other”（互相）是固定短语，“help each other” 表示 “互相帮助”，符合语法和语境。"
    },
    {
     "word": "i_",
     "reason": "in"
    },
    {
     "word": "推理",
     "reason": "“in times of need”（在需要的时候）是固定搭配，“in” 表示时间范围，符合语境。"
    }
   ],
   "tags": [
    "生命科学",
    "生物",
    "大象"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "TPT1_R_CW_M1_Q1",
   "month": "官方TPO",
   "source": "toefl-ibt-teachers-resources-practice-test-1",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "早期文明",
   "discipline": "社会科学",
   "topic": "历史",
   "difficulty": "中等",
   "passage": "Early civilizations, including those in Mesopotamia, Egypt, the Indus Valley, and China, emerged around river valleys, where fertile land and water resources supported agriculture. Th_ _ developed sophis_ _ _ _ _ _ _ social struc_ _ _ _ _, written lang_ _ _ _ _, and adva_ _ _ _ technologies, wh_ _ _ allowed th_ _ to thr_ _ _ and esta_ _ _ _ _ cities, tr_ _ _ networks, and even empires. Just as important were their significant contributions to fields like art, science, and law. These developments were crucial in shaping the course of human history.",
   "blanks": [
    {
     "index": 0,
     "prefix": "Th",
     "answer": "ey",
     "word": "They",
     "slots": 2,
     "marker": "Th_ _ ",
     "start": 181,
     "end": 187
    },
    {
     "index": 1,
     "prefix": "sophis",
     "answer": "ticated",
     "word": "sophisticated",
     "slots": 7,
     "marker": "sophis_ _ _ _ _ _ _ ",
     "start": 197,
     "end": 217
    },
    {
     "index": 2,
     "prefix": "struc",
     "answer": "tures",
     "word": "structures",
     "slots": 5,
     "marker": "struc_ _ _ _ _",
     "start": 224,
     "end": 238
    },
    {
     "index": 3,
     "prefix": "lang",
     "answer": "uages",
     "word": "languages",
     "slots": 5,
     "marker": "lang_ _ _ _ _",
     "start": 248,
     "end": 261
    },
    {
     "index": 4,
     "prefix": "adva",
     "answer": "nced",
     "word": "advanced",
     "slots": 4,
     "marker": "adva_ _ _ _ ",
     "start": 267,
     "end": 279
    },
    {
     "index": 5,
     "prefix": "wh",
     "answer": "ich",
     "word": "which",
     "slots": 3,
     "marker": "wh_ _ _ ",
     "start": 293,
     "end": 301
    },
    {
     "index": 6,
     "prefix": "th",
     "answer": "em",
     "word": "them",
     "slots": 2,
     "marker": "th_ _ ",
     "start": 309,
     "end": 315
    },
    {
     "index": 7,
     "prefix": "thr",
     "answer": "ive",
     "word": "thrive",
     "slots": 3,
     "marker": "thr_ _ _ ",
     "start": 318,
     "end": 327
    },
    {
     "index": 8,
     "prefix": "esta",
     "answer": "blish",
     "word": "establish",
     "slots": 5,
     "marker": "esta_ _ _ _ _ ",
     "start": 331,
     "end": 345
    },
    {
     "index": 9,
     "prefix": "tr",
     "answer": "ade",
     "word": "trade",
     "slots": 3,
     "marker": "tr_ _ _ ",
     "start": 353,
     "end": 361
    }
   ],
   "translation": "早期文明，包括美索不达米亚、埃及、印度河流域和中国的文明，都在河谷周边兴起，那里肥沃的土地和水资源支撑了农业发展。它们发展出复杂的社会结构、书面语言和先进的技术，这些都让它们得以繁荣，并建立起城市、贸易网络，甚至帝国。同样重要的是，它们在艺术、科学和法律等领域做出了重大贡献。这些发展对塑造人类历史进程至关重要。",
   "analysis": [
    {
     "word": "Th_ _",
     "reason": "They"
    },
    {
     "word": "推理",
     "reason": "前文主语是 “Early civilizations”（早期文明），此处用 “They” 指代这些文明，作句子主语，符合指代关系和空格数量。"
    },
    {
     "word": "sophis_ _ _ _ _ _ _",
     "reason": "sophisticated"
    },
    {
     "word": "推理",
     "reason": "根据语境，早期文明发展出 “复杂的社会结构”，“sophisticated”（复杂的、先进的）是形容词，修饰 “social structures”，且拼写与空格数量一致。"
    },
    {
     "word": "struc_ _ _ _",
     "reason": "structures"
    },
    {
     "word": "推理",
     "reason": "“social structures”（社会结构）是固定搭配，结合前文 “developed”（发展出），此处需填入名词复数 “structures”，符合语境和语法。"
    },
    {
     "word": "lang_ _ _ _",
     "reason": "languages"
    },
    {
     "word": "推理",
     "reason": "早期文明发展出 “书面语言”，“written languages”（书面语言）符合历史事实，且 “languages” 为复数，与不同文明的多种语言对应，符合空格数量。"
    },
    {
     "word": "adva_ _ _ _",
     "reason": "advanced"
    },
    {
     "word": "推理",
     "reason": "“advanced technologies”（先进的技术）是常见搭配，“advanced”（先进的）是形容词，修饰 “technologies”，符合语境和空格数量。"
    },
    {
     "word": "wh_ _ _",
     "reason": "which"
    },
    {
     "word": "推理",
     "reason": "此处需填入引导非限定性定语从句的关系代词，修饰前面整个句子，“which” 符合语法规则，指代前面的 “社会结构、语言和技术”，引导的从句解释这些发展的结果。"
    },
    {
     "word": "th_ _",
     "reason": "them"
    },
    {
     "word": "推理",
     "reason": "“allowed them to thrive”（使它们繁荣）中，“them” 是宾格，作 “allowed” 的宾语，指代前文的 “civilizations”，符合语法和空格数量。"
    },
    {
     "word": "thr_ _ _",
     "reason": "thrive"
    },
    {
     "word": "推理",
     "reason": "“thrive”（繁荣、兴盛）是动词原形，与 “allowed them to...” 结构中的 “to” 搭配，构成 “allow sb. to do sth.”，表示 “使某人能够做某事”，符合语境。"
    },
    {
     "word": "esta_ _ _ _ _",
     "reason": "establish"
    },
    {
     "word": "推理",
     "reason": "“establish cities”（建立城市）中，“establish”（建立）是动词原形，与后文的 “trade networks” 和 “empires” 构成并列结构，符合语法和语境。"
    },
    {
     "word": "tr_ _ _",
     "reason": "trade"
    },
    {
     "word": "推理",
     "reason": "“trade networks”（贸易网络）是固定搭配，“trade”（贸易）作为名词修饰 “networks”，符合历史事实和空格数量。"
    }
   ],
   "tags": [
    "社会科学",
    "历史",
    "早期文明"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "TPT1_R_CW_M2_Q1",
   "month": "官方TPO",
   "source": "toefl-ibt-teachers-resources-practice-test-1",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "意识",
   "discipline": "社会科学",
   "topic": "心理学",
   "difficulty": "中等",
   "passage": "Consciousness is the state of being aware of and able to think about one’s own existence, thoughts, and surroundings. Wh_ _ you lo_ _ in a mir_ _ _ and recognize your_ _ _ _, you exh_ _ _ _ self-awareness, wh_ _ _ is n_ _ unique t_ humans b_ _ is al_ _ found in dolphins and great apes. Consciousness is not to be confused with cognition. The latter refers to mental processes involved in gaining knowledge and solving problems, like thinking, judging, and remembering.",
   "blanks": [
    {
     "index": 0,
     "prefix": "Wh",
     "answer": "en",
     "word": "When",
     "slots": 2,
     "marker": "Wh_ _ ",
     "start": 118,
     "end": 124
    },
    {
     "index": 1,
     "prefix": "lo",
     "answer": "ok",
     "word": "look",
     "slots": 2,
     "marker": "lo_ _ ",
     "start": 128,
     "end": 134
    },
    {
     "index": 2,
     "prefix": "mir",
     "answer": "ror",
     "word": "mirror",
     "slots": 3,
     "marker": "mir_ _ _ ",
     "start": 139,
     "end": 148
    },
    {
     "index": 3,
     "prefix": "your",
     "answer": "self",
     "word": "yourself",
     "slots": 4,
     "marker": "your_ _ _ _",
     "start": 162,
     "end": 173
    },
    {
     "index": 4,
     "prefix": "exh",
     "answer": "ibit",
     "word": "exhibit",
     "slots": 4,
     "marker": "exh_ _ _ _ ",
     "start": 179,
     "end": 190
    },
    {
     "index": 5,
     "prefix": "wh",
     "answer": "ich",
     "word": "which",
     "slots": 3,
     "marker": "wh_ _ _ ",
     "start": 206,
     "end": 214
    },
    {
     "index": 6,
     "prefix": "n",
     "answer": "ot",
     "word": "not",
     "slots": 2,
     "marker": "n_ _ ",
     "start": 217,
     "end": 222
    },
    {
     "index": 7,
     "prefix": "t",
     "answer": "o",
     "word": "to",
     "slots": 1,
     "marker": "t_ ",
     "start": 229,
     "end": 232
    },
    {
     "index": 8,
     "prefix": "b",
     "answer": "ut",
     "word": "but",
     "slots": 2,
     "marker": "b_ _ ",
     "start": 239,
     "end": 244
    },
    {
     "index": 9,
     "prefix": "al",
     "answer": "so",
     "word": "also",
     "slots": 2,
     "marker": "al_ _ ",
     "start": 247,
     "end": 253
    }
   ],
   "translation": "意识是一种能够意识到并思考自身存在、思想和周围环境的状态。当你照镜子并认出自己时，你就表现出了自我意识 —— 这种意识并非人类独有，在海豚和类人猿身上也能找到。意识不应与认知混淆。后者指的是获取知识和解决问题时涉及的心理过程，比如思考、判断和记忆。",
   "analysis": [
    {
     "word": "Wh_ _",
     "reason": "When"
    },
    {
     "word": "推理",
     "reason": "此处需要引导时间状语从句的连词，“When”（当…… 时）符合语境 “当你照镜子时”，用于描述某个动作发生的时间，且拼写与空格数量匹配。"
    },
    {
     "word": "lo_ _",
     "reason": "look"
    },
    {
     "word": "推理",
     "reason": "“look in a mirror” 是固定搭配，意为 “照镜子”，“look”（看）是动词原形，与主语 “you” 搭配（一般现在时），符合语法和语境。"
    },
    {
     "word": "mir_ _ _",
     "reason": "mirror"
    },
    {
     "word": "推理",
     "reason": "“in a mirror”（在镜子里）是常见表达，结合前文 “look in a mirror”（照镜子），“mirror”（镜子）符合语境和空格数量。"
    },
    {
     "word": "your_ _ _ _",
     "reason": "yourself"
    },
    {
     "word": "推理",
     "reason": "“recognize yourself” 意为 “认出你自己”，“yourself”（你自己）是反身代词，与主语 “you” 呼应，符合 “照镜子时认出自己” 的语境，且拼写与空格数量一致。"
    },
    {
     "word": "exh_ _ _ _",
     "reason": "exhibit"
    },
    {
     "word": "推理",
     "reason": "“exhibit self-awareness” 意为 “表现出自我意识”，“exhibit”（表现出、展示）是动词原形，与主语 “you” 搭配，符合 “照镜子时表现出自我意识” 的语义，且拼写与空格数量匹配。"
    },
    {
     "word": "wh_ _ _",
     "reason": "which"
    },
    {
     "word": "推理",
     "reason": "此处需引导非限定性定语从句，修饰先行词 “self-awareness”（自我意识），“which” 作为关系代词，在从句中作主语，符合语法规则。"
    },
    {
     "word": "n_ _",
     "reason": "not"
    },
    {
     "word": "推理",
     "reason": "后文 “but” 提示此处为 “not...but...” 结构（不是…… 而是……），“not unique to humans” 意为 “并非人类独有”，符合语境（后文提到海豚和类人猿也有），且拼写与空格数量匹配。"
    },
    {
     "word": "t_",
     "reason": "to"
    },
    {
     "word": "推理",
     "reason": "“unique to...” 是固定搭配，意为 “为…… 所独有”，“not unique to humans” 表示 “并非人类独有”，符合语法和语境。"
    },
    {
     "word": "b_ _",
     "reason": "but"
    },
    {
     "word": "推理",
     "reason": "“not...but...” 是固定结构，表转折，前文说 “并非人类独有”，后文说 “也存在于海豚和类人猿中”，“but”（而是）连接前后转折关系，符合逻辑。"
    },
    {
     "word": "al_ _",
     "reason": "also"
    },
    {
     "word": "推理",
     "reason": "“also”（也）用于补充说明，“is also found in...” 意为 “也存在于…… 中”，符合语境 “自我意识不仅人类有，海豚和类人猿也有”，且拼写与空格数量一致。"
    }
   ],
   "tags": [
    "社会科学",
    "心理学",
    "意识"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "TPT2_R_CW_M1_Q1",
   "month": "官方TPO",
   "source": "toefl-ibt-teachers-resources-practice-test-2",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "早期电影",
   "discipline": "艺术",
   "topic": "电影",
   "difficulty": "中等",
   "passage": "Early films were quite different from what we are used to today—they were silent and black-and-white. Technological develop_ _ _ _ introduced so_ _ _, color, a_ _ special eff_ _ _ _. Filmmaking requ_ _ _ _ the collab_ _ _ _ _ _ _ of ma_ _ different peo_ _ _: actors, dire_ _ _ _ _, writers. Films ha_ _ the power to entertain, educate, and inspire audiences, shaping popular culture and influencing social trends. The film industry has grown from its early beginnings to become a major cultural and economic force worldwide.",
   "blanks": [
    {
     "index": 0,
     "prefix": "develop",
     "answer": "ment",
     "word": "development",
     "slots": 4,
     "marker": "develop_ _ _ _ ",
     "start": 116,
     "end": 131
    },
    {
     "index": 1,
     "prefix": "so",
     "answer": "und",
     "word": "sound",
     "slots": 3,
     "marker": "so_ _ _",
     "start": 142,
     "end": 149
    },
    {
     "index": 2,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 158,
     "end": 163
    },
    {
     "index": 3,
     "prefix": "eff",
     "answer": "ects",
     "word": "effects",
     "slots": 4,
     "marker": "eff_ _ _ _",
     "start": 171,
     "end": 181
    },
    {
     "index": 4,
     "prefix": "requ",
     "answer": "ires",
     "word": "requires",
     "slots": 4,
     "marker": "requ_ _ _ _ ",
     "start": 194,
     "end": 206
    },
    {
     "index": 5,
     "prefix": "collab",
     "answer": "oration",
     "word": "collaboration",
     "slots": 7,
     "marker": "collab_ _ _ _ _ _ _ ",
     "start": 210,
     "end": 230
    },
    {
     "index": 6,
     "prefix": "ma",
     "answer": "ny",
     "word": "many",
     "slots": 2,
     "marker": "ma_ _ ",
     "start": 233,
     "end": 239
    },
    {
     "index": 7,
     "prefix": "peo",
     "answer": "ple",
     "word": "people",
     "slots": 3,
     "marker": "peo_ _ _",
     "start": 249,
     "end": 257
    },
    {
     "index": 8,
     "prefix": "dire",
     "answer": "ctors",
     "word": "directors",
     "slots": 5,
     "marker": "dire_ _ _ _ _",
     "start": 267,
     "end": 280
    },
    {
     "index": 9,
     "prefix": "ha",
     "answer": "ve",
     "word": "have",
     "slots": 2,
     "marker": "ha_ _ ",
     "start": 297,
     "end": 303
    }
   ],
   "translation": "早期的电影与我们如今习以为常的电影大不相同 —— 它们是无声且黑白的。技术发展带来了声音、色彩和特效。电影制作需要许多不同的人的合作：演员、导演、编剧。电影拥有娱乐、教育和激励观众的力量，塑造着流行文化并影响着社会趋势。电影产业从早期起步发展至今，已成为全球范围内一股重要的文化和经济力量。",
   "analysis": [
    {
     "word": "develop_ _ _ _",
     "reason": "development"
    },
    {
     "word": "推理",
     "reason": "此处需要名词作主语，“technological development”（技术发展）是常见搭配，结合空格数量，“development”（发展）符合语境。"
    },
    {
     "word": "so_ _ _",
     "reason": "sound"
    },
    {
     "word": "推理",
     "reason": "前文提到早期电影是 “silent”（无声的），此处对应 “sound”（声音），构成 “引入声音” 的语义，与技术发展的语境一致。"
    },
    {
     "word": "a_ _",
     "reason": "and"
    },
    {
     "word": "推理",
     "reason": "“sound, color” 与 “special effects” 是并列关系，“and”（和）用于连接并列成分，符合语法和语境。"
    },
    {
     "word": "eff_ _ _ _",
     "reason": "effects"
    },
    {
     "word": "推理",
     "reason": "“special effects”（特效）是固定短语，结合电影技术发展的背景，“effects”（效果）符合语义和空格数量。"
    },
    {
     "word": "requ_ _ _ _",
     "reason": "requires"
    },
    {
     "word": "推理",
     "reason": "主语 “Filmmaking”（电影制作）是单数，此处需动词第三人称单数形式，“requires”（需要）符合 “电影制作需要合作” 的语境。"
    },
    {
     "word": "collab_ _ _ _ _ _ _",
     "reason": "collaboration"
    },
    {
     "word": "推理",
     "reason": "“the collaboration of”（…… 的合作）是固定表达，“collaboration”（合作）为名词，符合 “电影制作需要合作” 的语义。"
    },
    {
     "word": "ma_ _",
     "reason": "many"
    },
    {
     "word": "推理",
     "reason": "“many different people”（许多不同的人）是常见搭配，“many”（许多）修饰可数名词复数 “people”，符合语法。"
    },
    {
     "word": "peo_ _ _",
     "reason": "people"
    },
    {
     "word": "推理",
     "reason": "后文列举了 “actors, directors, writers”（演员、导演、编剧），均属于 “people”（人），结合空格数量，“people” 符合语境。"
    },
    {
     "word": "dire_ _ _ _ _",
     "reason": "directors"
    },
    {
     "word": "推理",
     "reason": "与 “actors, writers” 并列的电影行业从业者，“directors”（导演）是核心角色之一，复数形式与前文一致。"
    },
    {
     "word": "ha_ _",
     "reason": "have"
    },
    {
     "word": "推理",
     "reason": "主语 “Films”（电影）是复数，此处需动词原形，“have the power”（有能力）符合 “电影具有…… 力量” 的语义。"
    }
   ],
   "tags": [
    "艺术",
    "电影",
    "早期电影"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "TPT2_R_CW_M2_Q1",
   "month": "官方TPO",
   "source": "toefl-ibt-teachers-resources-practice-test-2",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "火星上的生命",
   "discipline": "自然科学",
   "topic": "天文",
   "difficulty": "中等",
   "passage": "Water is essential for life as we know it, so finding water on other planets and moons is a crucial part of the quest to find life beyond Earth. Mars’ riverbeds sh_ _ evidence o_ water i_ ancient ti_ _ _. The moons Europa a_ _ Enceladus ha_ _ ice-covered surf_ _ _ _ that m_ _ hide oce_ _ _ beneath. Discov_ _ _ _ _ new extraterrestrial water, whether past or present, liquid or solid, could significantly impact our understanding of life in the universe. Such findings could guide future missions in the search for habitable environments outside of Earth.",
   "blanks": [
    {
     "index": 0,
     "prefix": "sh",
     "answer": "ow",
     "word": "show",
     "slots": 2,
     "marker": "sh_ _ ",
     "start": 161,
     "end": 167
    },
    {
     "index": 1,
     "prefix": "o",
     "answer": "f",
     "word": "of",
     "slots": 1,
     "marker": "o_ ",
     "start": 176,
     "end": 179
    },
    {
     "index": 2,
     "prefix": "i",
     "answer": "n",
     "word": "in",
     "slots": 1,
     "marker": "i_ ",
     "start": 185,
     "end": 188
    },
    {
     "index": 3,
     "prefix": "ti",
     "answer": "mes",
     "word": "times",
     "slots": 3,
     "marker": "ti_ _ _",
     "start": 196,
     "end": 203
    },
    {
     "index": 4,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 222,
     "end": 227
    },
    {
     "index": 5,
     "prefix": "ha",
     "answer": "ve",
     "word": "have",
     "slots": 2,
     "marker": "ha_ _ ",
     "start": 237,
     "end": 243
    },
    {
     "index": 6,
     "prefix": "surf",
     "answer": "aces",
     "word": "surfaces",
     "slots": 4,
     "marker": "surf_ _ _ _ ",
     "start": 255,
     "end": 267
    },
    {
     "index": 7,
     "prefix": "m",
     "answer": "ay",
     "word": "may",
     "slots": 2,
     "marker": "m_ _ ",
     "start": 272,
     "end": 277
    },
    {
     "index": 8,
     "prefix": "oce",
     "answer": "ans",
     "word": "oceans",
     "slots": 3,
     "marker": "oce_ _ _ ",
     "start": 282,
     "end": 291
    },
    {
     "index": 9,
     "prefix": "Discov",
     "answer": "ering",
     "word": "Discovering",
     "slots": 5,
     "marker": "Discov_ _ _ _ _ ",
     "start": 300,
     "end": 316
    }
   ],
   "translation": "水是我们所知生命必不可少的物质，因此在其他行星和卫星上寻找水是探索地球以外生命的关键环节。火星的河床显示了古代存在水的证据。木卫二和土卫二的表面被冰覆盖，其下方可能隐藏着海洋。发现新的外星水，无论其是过去存在的还是现在存在的，是液态的还是固态的，都可能极大地影响我们对宇宙中生命的理解。这些发现可以为未来寻找地球以外宜居环境的任务提供指引。",
   "analysis": [
    {
     "word": "sh_ _",
     "reason": "show"
    },
    {
     "word": "推理",
     "reason": "主语是 “Mars’ riverbeds”（火星河床），此处需动词原形作谓语，表示 “显示” 证据，“show”（展示、显示）符合语境 “河床显示水的证据”，且拼写与空格数量匹配。"
    },
    {
     "word": "o_",
     "reason": "of"
    },
    {
     "word": "推理",
     "reason": "“evidence of water” 是固定搭配，意为 “水的证据”，“of”（…… 的）表示所属关系，符合语法和语境。"
    },
    {
     "word": "i_",
     "reason": "in"
    },
    {
     "word": "推理",
     "reason": "“in ancient times”（在古代）是固定短语，“in” 表示时间范围，符合语境 “在古代的证据”。"
    },
    {
     "word": "ti_ _ _",
     "reason": "times"
    },
    {
     "word": "推理",
     "reason": "“ancient times”（古代）是常见表达，“times”（时代、时期）用复数形式表示 “历史时期”，符合语境和空格数量。"
    },
    {
     "word": "a_ _",
     "reason": "and"
    },
    {
     "word": "推理",
     "reason": "“Europa and Enceladus”（木卫二和土卫二）是并列的天体名称，“and”（和）连接两个并列成分，符合语法规则。"
    },
    {
     "word": "ha_ _",
     "reason": "have"
    },
    {
     "word": "推理",
     "reason": "主语 “The moons”（这些卫星）是复数，此处需动词原形作谓语，“have”（有）表示 “拥有”，符合语境 “卫星有冰覆盖的表面”。"
    },
    {
     "word": "surf_ _ _ _",
     "reason": "surfaces"
    },
    {
     "word": "推理",
     "reason": "“ice-covered surfaces”（冰覆盖的表面）中，“surfaces”（表面，复数）与主语 “moons”（复数）呼应，符合语境和空格数量。"
    },
    {
     "word": "m_ _",
     "reason": "may"
    },
    {
     "word": "推理",
     "reason": "“may hide oceans beneath”（可能在下面隐藏着海洋）中，“may”（可能）是情态动词，表示推测，符合科学上对这些卫星的假设，且拼写与空格数量一致。"
    },
    {
     "word": "oce_ _ _",
     "reason": "oceans"
    },
    {
     "word": "推理",
     "reason": "“oceans”（海洋，复数）与前文 “ice-covered surfaces” 呼应，指卫星表面冰层下可能存在的液态水，符合语境和科学认知。"
    },
    {
     "word": "Discov_ _ _ _ _",
     "reason": "Discovering"
    },
    {
     "word": "推理",
     "reason": "此处需动名词作主语，“Discovering new extraterrestrial water”（发现新的外星水）符合语法结构，且 “discovering” 的拼写与空格数量匹配。"
    }
   ],
   "tags": [
    "自然科学",
    "天文",
    "火星上的生命"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "26TPO01_R_CW_M1_Q01-10",
   "month": "官方TPO",
   "source": "官方网站TPO",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "化石与古生物",
   "discipline": "生命科学",
   "topic": "古生物",
   "difficulty": "中等",
   "passage": "Paleontology is the scientific study that deals with the history of life through the analysis of fossil records. This fi _ _ _ involves exam_ _ _ _ _ fossils—rem_ _ _ _ of orga_ _ _ _ _ preserved i_ rock—t_ understand h_ _ ancient li_ _ -forms evo_ _ _ _ and ada_ _ _ _ to their surroundings. Paleontologists also use fossils to learn about ancient environmental conditions. Finding marine fossils in landlocked areas, for example, suggests that these regions were very likely underwater once upon a time.",
   "blanks": [
    {
     "index": 0,
     "prefix": "",
     "answer": "eld",
     "word": "eld",
     "slots": 3,
     "marker": "_ _ _ ",
     "start": 121,
     "end": 127
    },
    {
     "index": 1,
     "prefix": "exam",
     "answer": "ining",
     "word": "examining",
     "slots": 5,
     "marker": "exam_ _ _ _ _ ",
     "start": 136,
     "end": 150
    },
    {
     "index": 2,
     "prefix": "rem",
     "answer": "ains",
     "word": "remains",
     "slots": 4,
     "marker": "rem_ _ _ _ ",
     "start": 158,
     "end": 169
    },
    {
     "index": 3,
     "prefix": "orga",
     "answer": "nisms",
     "word": "organisms",
     "slots": 5,
     "marker": "orga_ _ _ _ _ ",
     "start": 172,
     "end": 186
    },
    {
     "index": 4,
     "prefix": "i",
     "answer": "n",
     "word": "in",
     "slots": 1,
     "marker": "i_ ",
     "start": 196,
     "end": 199
    },
    {
     "index": 5,
     "prefix": "t",
     "answer": "o",
     "word": "to",
     "slots": 1,
     "marker": "t_ ",
     "start": 204,
     "end": 207
    },
    {
     "index": 6,
     "prefix": "h",
     "answer": "ow",
     "word": "how",
     "slots": 2,
     "marker": "h_ _ ",
     "start": 218,
     "end": 223
    },
    {
     "index": 7,
     "prefix": "li",
     "answer": "fe",
     "word": "life",
     "slots": 2,
     "marker": "li_ _ ",
     "start": 231,
     "end": 237
    },
    {
     "index": 8,
     "prefix": "evo",
     "answer": "lved",
     "word": "evolved",
     "slots": 4,
     "marker": "evo_ _ _ _ ",
     "start": 244,
     "end": 255
    },
    {
     "index": 9,
     "prefix": "ada",
     "answer": "pted",
     "word": "adapted",
     "slots": 4,
     "marker": "ada_ _ _ _ ",
     "start": 259,
     "end": 270
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "生命科学",
    "古生物",
    "化石与古生物"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "26TPO01_R_CW_M1_Q11-20",
   "month": "官方TPO",
   "source": "官方网站TPO",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "真菌作用",
   "discipline": "生命科学",
   "topic": "真菌",
   "difficulty": "中等",
   "passage": "Fungi, a group of organisms that include mushrooms and yeast, are not plants but a separate branch of life. They c_ _ be fo_ _ _ in alm_ _ _ every envir_ _ _ _ _ _ and pl_ _ essential ro_ _ _ in var_ _ _ _ ecosystems. Ma_ _ of th_ _ are decomposers, mea_ _ _ _ that they break down organic matter and recycle nutrients back into the soil. Some fungi form symbiotic relationships with plants, helping them absorb water and nutrients. While many fungi are beneficial, others can cause diseases in plants, animals, and humans.",
   "blanks": [
    {
     "index": 0,
     "prefix": "c",
     "answer": "an",
     "word": "can",
     "slots": 2,
     "marker": "c_ _ ",
     "start": 113,
     "end": 118
    },
    {
     "index": 1,
     "prefix": "fo",
     "answer": "und",
     "word": "found",
     "slots": 3,
     "marker": "fo_ _ _ ",
     "start": 121,
     "end": 129
    },
    {
     "index": 2,
     "prefix": "alm",
     "answer": "ost",
     "word": "almost",
     "slots": 3,
     "marker": "alm_ _ _ ",
     "start": 132,
     "end": 141
    },
    {
     "index": 3,
     "prefix": "envir",
     "answer": "onment",
     "word": "environment",
     "slots": 6,
     "marker": "envir_ _ _ _ _ _ ",
     "start": 147,
     "end": 164
    },
    {
     "index": 4,
     "prefix": "pl",
     "answer": "ay",
     "word": "play",
     "slots": 2,
     "marker": "pl_ _ ",
     "start": 168,
     "end": 174
    },
    {
     "index": 5,
     "prefix": "ro",
     "answer": "les",
     "word": "roles",
     "slots": 3,
     "marker": "ro_ _ _ ",
     "start": 184,
     "end": 192
    },
    {
     "index": 6,
     "prefix": "var",
     "answer": "ious",
     "word": "various",
     "slots": 4,
     "marker": "var_ _ _ _ ",
     "start": 195,
     "end": 206
    },
    {
     "index": 7,
     "prefix": "Ma",
     "answer": "ny",
     "word": "Many",
     "slots": 2,
     "marker": "Ma_ _ ",
     "start": 218,
     "end": 224
    },
    {
     "index": 8,
     "prefix": "th",
     "answer": "em",
     "word": "them",
     "slots": 2,
     "marker": "th_ _ ",
     "start": 227,
     "end": 233
    },
    {
     "index": 9,
     "prefix": "mea",
     "answer": "ning",
     "word": "meaning",
     "slots": 4,
     "marker": "mea_ _ _ _ ",
     "start": 250,
     "end": 261
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "生命科学",
    "真菌",
    "真菌作用"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "26TPO01_R_CW_M2+_Q01-10",
   "month": "官方TPO",
   "source": "官方网站TPO",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "气候形成",
   "discipline": "自然科学",
   "topic": "气候",
   "difficulty": "中等",
   "passage": "Climate pertains to the enduring patterns of temperature, humidity, wind, and precipitation in a specific geographical region or area over time. Climate is influen_ _ _ by lati_ _ _ _ , altitude, and proxi _ _ _ _ to water bod_ _ _ . Changes, driv_ _ by hu_ _ _ activities like deforest_ _ _ _ _ , present substan_ _ _ _ challenges to eco_ _ _ _ _ _ _ and human socie_ _ _ _. Scientists scrutinize climate patterns and historical data to predict future changes and formulate strategies for mitigation and adaptation, ensuring resilience against environmental challenges.",
   "blanks": [
    {
     "index": 0,
     "prefix": "influen",
     "answer": "ced",
     "word": "influenced",
     "slots": 3,
     "marker": "influen_ _ _ ",
     "start": 156,
     "end": 169
    },
    {
     "index": 1,
     "prefix": "lati",
     "answer": "tude",
     "word": "latitude",
     "slots": 4,
     "marker": "lati_ _ _ _ ",
     "start": 172,
     "end": 184
    },
    {
     "index": 2,
     "prefix": "",
     "answer": "mity",
     "word": "mity",
     "slots": 4,
     "marker": "_ _ _ _ ",
     "start": 206,
     "end": 214
    },
    {
     "index": 3,
     "prefix": "bod",
     "answer": "ies",
     "word": "bodies",
     "slots": 3,
     "marker": "bod_ _ _ ",
     "start": 223,
     "end": 232
    },
    {
     "index": 4,
     "prefix": "driv",
     "answer": "en",
     "word": "driven",
     "slots": 2,
     "marker": "driv_ _ ",
     "start": 243,
     "end": 251
    },
    {
     "index": 5,
     "prefix": "hu",
     "answer": "man",
     "word": "human",
     "slots": 3,
     "marker": "hu_ _ _ ",
     "start": 254,
     "end": 262
    },
    {
     "index": 6,
     "prefix": "deforest",
     "answer": "ation",
     "word": "deforestation",
     "slots": 5,
     "marker": "deforest_ _ _ _ _ ",
     "start": 278,
     "end": 296
    },
    {
     "index": 7,
     "prefix": "substan",
     "answer": "tial",
     "word": "substantial",
     "slots": 4,
     "marker": "substan_ _ _ _ ",
     "start": 306,
     "end": 321
    },
    {
     "index": 8,
     "prefix": "eco",
     "answer": "systems",
     "word": "ecosystems",
     "slots": 7,
     "marker": "eco_ _ _ _ _ _ _ ",
     "start": 335,
     "end": 352
    },
    {
     "index": 9,
     "prefix": "socie",
     "answer": "ties",
     "word": "societies",
     "slots": 4,
     "marker": "socie_ _ _ _",
     "start": 362,
     "end": 374
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "自然科学",
    "气候",
    "气候形成"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "26TPO01_R_CW_M2-_Q01-10",
   "month": "官方TPO",
   "source": "官方网站TPO",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "手工作用",
   "discipline": "社会科学",
   "topic": "手工",
   "difficulty": "中等",
   "passage": "Making crafts is both fun and creative, making it a favorite way to relax for many people. Some _ _ joy making jew_ _ _ _ , while oth_ _ _ like pain_ _ _ _ . Crafts c_ _ be sim_ _ _ or com_ _ _ _ , depending o_ what y_ _ want t_ create. There are many materials to choose from, like paper, fabric, and wood. Many people find that making crafts is an engaging activity that allows them to make beautiful things and to express themselves.",
   "blanks": [
    {
     "index": 0,
     "prefix": "",
     "answer": "en",
     "word": "en",
     "slots": 2,
     "marker": "_ _ ",
     "start": 96,
     "end": 100
    },
    {
     "index": 1,
     "prefix": "jew",
     "answer": "elry",
     "word": "jewelry",
     "slots": 4,
     "marker": "jew_ _ _ _ ",
     "start": 111,
     "end": 122
    },
    {
     "index": 2,
     "prefix": "oth",
     "answer": "ers",
     "word": "others",
     "slots": 3,
     "marker": "oth_ _ _ ",
     "start": 130,
     "end": 139
    },
    {
     "index": 3,
     "prefix": "pain",
     "answer": "ting",
     "word": "painting",
     "slots": 4,
     "marker": "pain_ _ _ _ ",
     "start": 144,
     "end": 156
    },
    {
     "index": 4,
     "prefix": "c",
     "answer": "an",
     "word": "can",
     "slots": 2,
     "marker": "c_ _ ",
     "start": 165,
     "end": 170
    },
    {
     "index": 5,
     "prefix": "sim",
     "answer": "ple",
     "word": "simple",
     "slots": 3,
     "marker": "sim_ _ _ ",
     "start": 173,
     "end": 182
    },
    {
     "index": 6,
     "prefix": "com",
     "answer": "plex",
     "word": "complex",
     "slots": 4,
     "marker": "com_ _ _ _ ",
     "start": 185,
     "end": 196
    },
    {
     "index": 7,
     "prefix": "o",
     "answer": "n",
     "word": "on",
     "slots": 1,
     "marker": "o_ ",
     "start": 208,
     "end": 211
    },
    {
     "index": 8,
     "prefix": "y",
     "answer": "ou",
     "word": "you",
     "slots": 2,
     "marker": "y_ _ ",
     "start": 216,
     "end": 221
    },
    {
     "index": 9,
     "prefix": "t",
     "answer": "o",
     "word": "to",
     "slots": 1,
     "marker": "t_ ",
     "start": 226,
     "end": 229
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "社会科学",
    "手工",
    "手工作用"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "26TPO02_R_CW_M1_Q01-10",
   "month": "官方TPO",
   "source": "官方网站TPO",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "宇宙学探索",
   "discipline": "自然科学",
   "topic": "宇宙学",
   "difficulty": "中等",
   "passage": "The study of the universe is called cosmology. T_ _ scope o_ this fi_ _ _ is extr_ _ _ _ _ large, encomp_ _ _ _ _ _ everything fr_ _ the smal_ _ _ _ particles t_ vast galaxies. O_ _ intriguing hypo_ _ _ _ _ _ in cosmology is the Big Bang Theory, according to which the universe began approximately 13.8 billion years ago from an infinitely dense point. Cosmologists also study dark matter and dark energy. They observe cosmic microwave background radiation, the faint glow left over from the Big Bang, to gather information about the universe in its early days.",
   "blanks": [
    {
     "index": 0,
     "prefix": "T",
     "answer": "he",
     "word": "The",
     "slots": 2,
     "marker": "T_ _ ",
     "start": 47,
     "end": 52
    },
    {
     "index": 1,
     "prefix": "o",
     "answer": "f",
     "word": "of",
     "slots": 1,
     "marker": "o_ ",
     "start": 58,
     "end": 61
    },
    {
     "index": 2,
     "prefix": "fi",
     "answer": "eld",
     "word": "field",
     "slots": 3,
     "marker": "fi_ _ _ ",
     "start": 66,
     "end": 74
    },
    {
     "index": 3,
     "prefix": "extr",
     "answer": "emely",
     "word": "extremely",
     "slots": 5,
     "marker": "extr_ _ _ _ _ ",
     "start": 77,
     "end": 91
    },
    {
     "index": 4,
     "prefix": "encomp",
     "answer": "assing",
     "word": "encompassing",
     "slots": 6,
     "marker": "encomp_ _ _ _ _ _ ",
     "start": 98,
     "end": 116
    },
    {
     "index": 5,
     "prefix": "fr",
     "answer": "om",
     "word": "from",
     "slots": 2,
     "marker": "fr_ _ ",
     "start": 127,
     "end": 133
    },
    {
     "index": 6,
     "prefix": "smal",
     "answer": "lest",
     "word": "smallest",
     "slots": 4,
     "marker": "smal_ _ _ _ ",
     "start": 137,
     "end": 149
    },
    {
     "index": 7,
     "prefix": "t",
     "answer": "o",
     "word": "to",
     "slots": 1,
     "marker": "t_ ",
     "start": 159,
     "end": 162
    },
    {
     "index": 8,
     "prefix": "O",
     "answer": "ne",
     "word": "One",
     "slots": 2,
     "marker": "O_ _ ",
     "start": 177,
     "end": 182
    },
    {
     "index": 9,
     "prefix": "hypo",
     "answer": "thesis",
     "word": "hypothesis",
     "slots": 6,
     "marker": "hypo_ _ _ _ _ _ ",
     "start": 193,
     "end": 209
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "自然科学",
    "宇宙学",
    "宇宙学探索"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "26TPO02_R_CW_M2+_Q01-10",
   "month": "官方TPO",
   "source": "官方网站TPO",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "古典文明影响",
   "discipline": "社会科学",
   "topic": "古典文明",
   "difficulty": "中等",
   "passage": "Classical civilizations, such as Ancient Greece and Rome, have profoundly influenced modern Western culture. These socie_ _ _ _ achieved remark_ _ _ _ progress in philo_ _ _ _ _ , science, and gover_ _ _ _ _. The Greeks introd_ _ _ _ fundamental id_ _ _ in demo_ _ _ _ _, whereas the Rom_ _ _ created an intri_ _ _ _ legal frame_ _ _ _. Studying classical civilizations provides insights into the origins of contemporary political systems, literary traditions, and architectural styles, highlighting the enduring legacy of these ancient cultures.",
   "blanks": [
    {
     "index": 0,
     "prefix": "socie",
     "answer": "ties",
     "word": "societies",
     "slots": 4,
     "marker": "socie_ _ _ _ ",
     "start": 115,
     "end": 128
    },
    {
     "index": 1,
     "prefix": "remark",
     "answer": "able",
     "word": "remarkable",
     "slots": 4,
     "marker": "remark_ _ _ _ ",
     "start": 137,
     "end": 151
    },
    {
     "index": 2,
     "prefix": "philo",
     "answer": "sophy",
     "word": "philosophy",
     "slots": 5,
     "marker": "philo_ _ _ _ _ ",
     "start": 163,
     "end": 178
    },
    {
     "index": 3,
     "prefix": "gover",
     "answer": "nment",
     "word": "government",
     "slots": 5,
     "marker": "gover_ _ _ _ _",
     "start": 193,
     "end": 207
    },
    {
     "index": 4,
     "prefix": "introd",
     "answer": "uced",
     "word": "introduced",
     "slots": 4,
     "marker": "introd_ _ _ _ ",
     "start": 220,
     "end": 234
    },
    {
     "index": 5,
     "prefix": "id",
     "answer": "eas",
     "word": "ideas",
     "slots": 3,
     "marker": "id_ _ _ ",
     "start": 246,
     "end": 254
    },
    {
     "index": 6,
     "prefix": "demo",
     "answer": "cracy",
     "word": "democracy",
     "slots": 5,
     "marker": "demo_ _ _ _ _",
     "start": 257,
     "end": 270
    },
    {
     "index": 7,
     "prefix": "Rom",
     "answer": "ans",
     "word": "Romans",
     "slots": 3,
     "marker": "Rom_ _ _ ",
     "start": 284,
     "end": 293
    },
    {
     "index": 8,
     "prefix": "intri",
     "answer": "cate",
     "word": "intricate",
     "slots": 4,
     "marker": "intri_ _ _ _ ",
     "start": 304,
     "end": 317
    },
    {
     "index": 9,
     "prefix": "frame",
     "answer": "work",
     "word": "framework",
     "slots": 4,
     "marker": "frame_ _ _ _",
     "start": 323,
     "end": 335
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "社会科学",
    "古典文明",
    "古典文明影响"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "26TPO02_R_CW_M2-_Q01-10",
   "month": "官方TPO",
   "source": "官方网站TPO",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "冰川形成",
   "discipline": "自然科学",
   "topic": "冰川",
   "difficulty": "中等",
   "passage": "Glaciers are massive bodies of ice that move slowly under their own weight, carving valleys and shaping landscapes as they advance and retreat. They fo_ _ where sn_ _ accumulates ov_ _time a_ _ compresses in_ _ice. Glaciers a_ _important indic_ _ _ _ _ of cli_ _ _ _ change, a_ their move_ _ _ _and size can reflect fluctuations in temperature and precipitation. Studying glaciers helps us understand past climate conditions and predict future environmental changes. Melting glaciers also impact sea levels and freshwater supplies.",
   "blanks": [
    {
     "index": 0,
     "prefix": "fo",
     "answer": "rm",
     "word": "form",
     "slots": 2,
     "marker": "fo_ _ ",
     "start": 149,
     "end": 155
    },
    {
     "index": 1,
     "prefix": "sn",
     "answer": "ow",
     "word": "snow",
     "slots": 2,
     "marker": "sn_ _ ",
     "start": 161,
     "end": 167
    },
    {
     "index": 2,
     "prefix": "ov",
     "answer": "er",
     "word": "over",
     "slots": 2,
     "marker": "ov_ _",
     "start": 179,
     "end": 184
    },
    {
     "index": 3,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 189,
     "end": 194
    },
    {
     "index": 4,
     "prefix": "in",
     "answer": "to",
     "word": "into",
     "slots": 2,
     "marker": "in_ _",
     "start": 205,
     "end": 210
    },
    {
     "index": 5,
     "prefix": "a",
     "answer": "re",
     "word": "are",
     "slots": 2,
     "marker": "a_ _",
     "start": 224,
     "end": 228
    },
    {
     "index": 6,
     "prefix": "indic",
     "answer": "ators",
     "word": "indicators",
     "slots": 5,
     "marker": "indic_ _ _ _ _ ",
     "start": 238,
     "end": 253
    },
    {
     "index": 7,
     "prefix": "cli",
     "answer": "mate",
     "word": "climate",
     "slots": 4,
     "marker": "cli_ _ _ _ ",
     "start": 256,
     "end": 267
    },
    {
     "index": 8,
     "prefix": "a",
     "answer": "s",
     "word": "as",
     "slots": 1,
     "marker": "a_ ",
     "start": 275,
     "end": 278
    },
    {
     "index": 9,
     "prefix": "move",
     "answer": "ment",
     "word": "movement",
     "slots": 4,
     "marker": "move_ _ _ _",
     "start": 284,
     "end": 295
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "自然科学",
    "冰川",
    "冰川形成"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "26TPO03_R_CW_M1_Q01-10",
   "month": "官方TPO",
   "source": "官方网站TPO",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "化石作用",
   "discipline": "生命科学",
   "topic": "化石",
   "difficulty": "中等",
   "passage": "Fossils provide valuable information about the history of life on Earth. Th_ _ _ preserved remains o_ ancient orga_ _ _ _ _ are typi_ _ _ _ _ found i_ sedimentary ro_ _ _. By stud_ _ _ _ them, scien_ _ _ _ _ can le_ _ _ about t_ _ physical characteristics, behavior, and environments of extinct species. Fossil evidence has been crucial in understanding the process of evolution, showing how species have changed and adapted over millions of years. The discovery of transitional fossils helps to fill gaps in the evolutionary record.",
   "blanks": [
    {
     "index": 0,
     "prefix": "Th",
     "answer": "ese",
     "word": "These",
     "slots": 3,
     "marker": "Th_ _ _ ",
     "start": 73,
     "end": 81
    },
    {
     "index": 1,
     "prefix": "o",
     "answer": "f",
     "word": "of",
     "slots": 1,
     "marker": "o_ ",
     "start": 99,
     "end": 102
    },
    {
     "index": 2,
     "prefix": "orga",
     "answer": "nisms",
     "word": "organisms",
     "slots": 5,
     "marker": "orga_ _ _ _ _ ",
     "start": 110,
     "end": 124
    },
    {
     "index": 3,
     "prefix": "typi",
     "answer": "cally",
     "word": "typically",
     "slots": 5,
     "marker": "typi_ _ _ _ _ ",
     "start": 128,
     "end": 142
    },
    {
     "index": 4,
     "prefix": "i",
     "answer": "n",
     "word": "in",
     "slots": 1,
     "marker": "i_ ",
     "start": 148,
     "end": 151
    },
    {
     "index": 5,
     "prefix": "ro",
     "answer": "cks",
     "word": "rocks",
     "slots": 3,
     "marker": "ro_ _ _",
     "start": 163,
     "end": 170
    },
    {
     "index": 6,
     "prefix": "stud",
     "answer": "ying",
     "word": "studying",
     "slots": 4,
     "marker": "stud_ _ _ _ ",
     "start": 175,
     "end": 187
    },
    {
     "index": 7,
     "prefix": "scien",
     "answer": "tists",
     "word": "scientists",
     "slots": 5,
     "marker": "scien_ _ _ _ _ ",
     "start": 193,
     "end": 208
    },
    {
     "index": 8,
     "prefix": "le",
     "answer": "arn",
     "word": "learn",
     "slots": 3,
     "marker": "le_ _ _ ",
     "start": 212,
     "end": 220
    },
    {
     "index": 9,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "marker": "t_ _ ",
     "start": 226,
     "end": 231
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "生命科学",
    "化石",
    "化石作用"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "26TPO03_R_CW_M2+_Q01-10",
   "month": "官方TPO",
   "source": "官方网站TPO",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "工业革命影响",
   "discipline": "社会科学",
   "topic": "工业革命",
   "difficulty": "中等",
   "passage": "The Industrial Revolution was a defining era in human history, sparking lasting changes in economies and daily life. It resh_ _ _ _ economies world_ _ _ _, shifting produ_ _ _ _ _ from man_ _ _ labor to mecha_ _ _ _ _ systems, which boo_ _ _ _ efficiency a_ _ output. Cit_ _ _ expanded rap_ _ _ _ as ru_ _ _ populations moved to industrial centers seeking work. Advancements in transportation and communication accelerated progress, laying the foundation for modern society. These innovations improved access to goods, increased productivity, and connected people across long distances, driving global development in ways that shaped the future.",
   "blanks": [
    {
     "index": 0,
     "prefix": "resh",
     "answer": "aped",
     "word": "reshaped",
     "slots": 4,
     "marker": "resh_ _ _ _ ",
     "start": 120,
     "end": 132
    },
    {
     "index": 1,
     "prefix": "world",
     "answer": "wide",
     "word": "worldwide",
     "slots": 4,
     "marker": "world_ _ _ _",
     "start": 142,
     "end": 154
    },
    {
     "index": 2,
     "prefix": "produ",
     "answer": "ction",
     "word": "production",
     "slots": 5,
     "marker": "produ_ _ _ _ _ ",
     "start": 165,
     "end": 180
    },
    {
     "index": 3,
     "prefix": "man",
     "answer": "ual",
     "word": "manual",
     "slots": 3,
     "marker": "man_ _ _ ",
     "start": 185,
     "end": 194
    },
    {
     "index": 4,
     "prefix": "mecha",
     "answer": "nical",
     "word": "mechanical",
     "slots": 5,
     "marker": "mecha_ _ _ _ _ ",
     "start": 203,
     "end": 218
    },
    {
     "index": 5,
     "prefix": "boo",
     "answer": "sted",
     "word": "boosted",
     "slots": 4,
     "marker": "boo_ _ _ _ ",
     "start": 233,
     "end": 244
    },
    {
     "index": 6,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 255,
     "end": 260
    },
    {
     "index": 7,
     "prefix": "Cit",
     "answer": "ies",
     "word": "Cities",
     "slots": 3,
     "marker": "Cit_ _ _ ",
     "start": 268,
     "end": 277
    },
    {
     "index": 8,
     "prefix": "rap",
     "answer": "idly",
     "word": "rapidly",
     "slots": 4,
     "marker": "rap_ _ _ _ ",
     "start": 286,
     "end": 297
    },
    {
     "index": 9,
     "prefix": "ru",
     "answer": "ral",
     "word": "rural",
     "slots": 3,
     "marker": "ru_ _ _ ",
     "start": 300,
     "end": 308
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "社会科学",
    "工业革命",
    "工业革命影响"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "26TPO03_R_CW_M2-_Q01-10",
   "month": "官方TPO",
   "source": "官方网站TPO",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "逻辑推理作用",
   "discipline": "社会科学",
   "topic": "逻辑推理",
   "difficulty": "中等",
   "passage": "Logical reasoning is a cornerstone of effective thinking and decision-making. Wh_ _faced wi_ _ a com_ _ _ _ problem, w_ can div_ _ _ it in_ _ multiple manag_ _ _ _ _ components, iden_ _ _ _ the ro_ _ causes, a_ _ develop coherent solutions. This enables us to draw conclusions based on evidence rather than emotions or biases. Logical reasoning is not just important for lawyers and scientists. It is also essential in everyday situations, from choosing the best investment options to resolving interpersonal conflicts.",
   "blanks": [
    {
     "index": 0,
     "prefix": "Wh",
     "answer": "en",
     "word": "When",
     "slots": 2,
     "marker": "Wh_ _",
     "start": 78,
     "end": 83
    },
    {
     "index": 1,
     "prefix": "wi",
     "answer": "th",
     "word": "with",
     "slots": 2,
     "marker": "wi_ _ ",
     "start": 89,
     "end": 95
    },
    {
     "index": 2,
     "prefix": "com",
     "answer": "plex",
     "word": "complex",
     "slots": 4,
     "marker": "com_ _ _ _ ",
     "start": 97,
     "end": 108
    },
    {
     "index": 3,
     "prefix": "w",
     "answer": "e",
     "word": "we",
     "slots": 1,
     "marker": "w_ ",
     "start": 117,
     "end": 120
    },
    {
     "index": 4,
     "prefix": "div",
     "answer": "ide",
     "word": "divide",
     "slots": 3,
     "marker": "div_ _ _ ",
     "start": 124,
     "end": 133
    },
    {
     "index": 5,
     "prefix": "in",
     "answer": "to",
     "word": "into",
     "slots": 2,
     "marker": "in_ _ ",
     "start": 136,
     "end": 142
    },
    {
     "index": 6,
     "prefix": "manag",
     "answer": "eable",
     "word": "manageable",
     "slots": 5,
     "marker": "manag_ _ _ _ _ ",
     "start": 151,
     "end": 166
    },
    {
     "index": 7,
     "prefix": "iden",
     "answer": "tify",
     "word": "identify",
     "slots": 4,
     "marker": "iden_ _ _ _ ",
     "start": 178,
     "end": 190
    },
    {
     "index": 8,
     "prefix": "ro",
     "answer": "ot",
     "word": "root",
     "slots": 2,
     "marker": "ro_ _ ",
     "start": 194,
     "end": 200
    },
    {
     "index": 9,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 208,
     "end": 213
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "社会科学",
    "逻辑推理",
    "逻辑推理作用"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "26TPO04_R_CW_M1_Q01-10",
   "month": "官方TPO",
   "source": "官方网站TPO",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "光周期性作用",
   "discipline": "生命科学",
   "topic": "光周期性",
   "difficulty": "中等",
   "passage": "Photoperiodism is how living things react to changes in daylight, shaping their seasonal activities and growth patterns, which are vital for survival and adaptation in nature. In pla_ _ _, this pro_ _ _ _ controls bloo_ _ _ _, seed gro_ _ _, and hiber_ _ _ _ _ _ —some spe_ _ _ _ only flo_ _ _ when th_ _ receive a spec_ _ _ _ amount of li_ _ _. For animals, it influences migration, hibernation, and breeding cycles. Their internal clocks help them adjust to shifting daylight, ensuring they stay in sync with their environment.",
   "blanks": [
    {
     "index": 0,
     "prefix": "pla",
     "answer": "nts",
     "word": "plants",
     "slots": 3,
     "marker": "pla_ _ _",
     "start": 179,
     "end": 187
    },
    {
     "index": 1,
     "prefix": "pro",
     "answer": "cess",
     "word": "process",
     "slots": 4,
     "marker": "pro_ _ _ _ ",
     "start": 194,
     "end": 205
    },
    {
     "index": 2,
     "prefix": "bloo",
     "answer": "ming",
     "word": "blooming",
     "slots": 4,
     "marker": "bloo_ _ _ _",
     "start": 214,
     "end": 225
    },
    {
     "index": 3,
     "prefix": "gro",
     "answer": "wth",
     "word": "growth",
     "slots": 3,
     "marker": "gro_ _ _",
     "start": 232,
     "end": 240
    },
    {
     "index": 4,
     "prefix": "hiber",
     "answer": "nation",
     "word": "hibernation",
     "slots": 6,
     "marker": "hiber_ _ _ _ _ _ ",
     "start": 246,
     "end": 263
    },
    {
     "index": 5,
     "prefix": "spe",
     "answer": "cies",
     "word": "species",
     "slots": 4,
     "marker": "spe_ _ _ _ ",
     "start": 269,
     "end": 280
    },
    {
     "index": 6,
     "prefix": "flo",
     "answer": "wer",
     "word": "flower",
     "slots": 3,
     "marker": "flo_ _ _ ",
     "start": 285,
     "end": 294
    },
    {
     "index": 7,
     "prefix": "th",
     "answer": "ey",
     "word": "they",
     "slots": 2,
     "marker": "th_ _ ",
     "start": 299,
     "end": 305
    },
    {
     "index": 8,
     "prefix": "spec",
     "answer": "ific",
     "word": "specific",
     "slots": 4,
     "marker": "spec_ _ _ _ ",
     "start": 315,
     "end": 327
    },
    {
     "index": 9,
     "prefix": "li",
     "answer": "ght",
     "word": "light",
     "slots": 3,
     "marker": "li_ _ _",
     "start": 337,
     "end": 344
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "生命科学",
    "光周期性",
    "光周期性作用"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "26TPO04_R_CW_M2+_Q01-10",
   "month": "官方TPO",
   "source": "官方网站TPO",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "公共卫生介绍",
   "discipline": "社会科学",
   "topic": "公共卫生",
   "difficulty": "中等",
   "passage": "Public health is a multidisciplinary field concerned with preventing disease, prolonging life, and promoting health through organized efforts and informed choices. It in_ _ _ _ _ _ strategies such _ _ health edu_ _ _ _ _ _, vaccination pro_ _ _ _ _, and poli_ _ _ _ aimed _ _ ensuring sa_ _ environ_ _ _ _ _. Public health prof_ _ _ _ _ _ _ _ _ work to iden_ _ _ _ health disparities. They also manage outbreaks of infectious diseases, promote healthy lifestyles, and contribute to improved quality of life and reduce the burden on healthcare systems worldwide.",
   "blanks": [
    {
     "index": 0,
     "prefix": "in",
     "answer": "cludes",
     "word": "includes",
     "slots": 6,
     "marker": "in_ _ _ _ _ _ ",
     "start": 167,
     "end": 181
    },
    {
     "index": 1,
     "prefix": "",
     "answer": "as",
     "word": "as",
     "slots": 2,
     "marker": "_ _ ",
     "start": 197,
     "end": 201
    },
    {
     "index": 2,
     "prefix": "edu",
     "answer": "cation",
     "word": "education",
     "slots": 6,
     "marker": "edu_ _ _ _ _ _",
     "start": 208,
     "end": 222
    },
    {
     "index": 3,
     "prefix": "pro",
     "answer": "grams",
     "word": "programs",
     "slots": 5,
     "marker": "pro_ _ _ _ _",
     "start": 236,
     "end": 248
    },
    {
     "index": 4,
     "prefix": "poli",
     "answer": "cies",
     "word": "policies",
     "slots": 4,
     "marker": "poli_ _ _ _ ",
     "start": 254,
     "end": 266
    },
    {
     "index": 5,
     "prefix": "",
     "answer": "at",
     "word": "at",
     "slots": 2,
     "marker": "_ _ ",
     "start": 272,
     "end": 276
    },
    {
     "index": 6,
     "prefix": "sa",
     "answer": "fe",
     "word": "safe",
     "slots": 2,
     "marker": "sa_ _ ",
     "start": 285,
     "end": 291
    },
    {
     "index": 7,
     "prefix": "environ",
     "answer": "ments",
     "word": "environments",
     "slots": 5,
     "marker": "environ_ _ _ _ _",
     "start": 291,
     "end": 307
    },
    {
     "index": 8,
     "prefix": "prof",
     "answer": "essionals",
     "word": "professionals",
     "slots": 9,
     "marker": "prof_ _ _ _ _ _ _ _ _ ",
     "start": 323,
     "end": 345
    },
    {
     "index": 9,
     "prefix": "iden",
     "answer": "tify",
     "word": "identify",
     "slots": 4,
     "marker": "iden_ _ _ _ ",
     "start": 353,
     "end": 365
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "社会科学",
    "公共卫生",
    "公共卫生介绍"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "26TPO04_R_CW_M2-_Q01-10",
   "month": "官方TPO",
   "source": "官方网站TPO",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "灭绝与当今影响",
   "discipline": "生命科学",
   "topic": "灭绝",
   "difficulty": "中等",
   "passage": "Extinctions are a natural part of Earth's history. They c_ _result fr_ _a var_ _ _ _of cau_ _ _, such a_ climate cha_ _ _, habitat lo_ _, and compe_ _ _ _ _ _ with ot_ _ _ species. Am_ _ _ the most famous extinction events was the disappearance of nearly all of the dinosaurs 65 million years ago. Today, human activities are accelerating the rate of extinctions, posing a significant threat to biodiversity. Conservation efforts aim to protect endangered species and preserve the natural ecosystems they depend on.",
   "blanks": [
    {
     "index": 0,
     "prefix": "c",
     "answer": "an",
     "word": "can",
     "slots": 2,
     "marker": "c_ _",
     "start": 56,
     "end": 60
    },
    {
     "index": 1,
     "prefix": "fr",
     "answer": "om",
     "word": "from",
     "slots": 2,
     "marker": "fr_ _",
     "start": 67,
     "end": 72
    },
    {
     "index": 2,
     "prefix": "var",
     "answer": "iety",
     "word": "variety",
     "slots": 4,
     "marker": "var_ _ _ _",
     "start": 74,
     "end": 84
    },
    {
     "index": 3,
     "prefix": "cau",
     "answer": "ses",
     "word": "causes",
     "slots": 3,
     "marker": "cau_ _ _",
     "start": 87,
     "end": 95
    },
    {
     "index": 4,
     "prefix": "a",
     "answer": "s",
     "word": "as",
     "slots": 1,
     "marker": "a_ ",
     "start": 102,
     "end": 105
    },
    {
     "index": 5,
     "prefix": "cha",
     "answer": "nge",
     "word": "change",
     "slots": 3,
     "marker": "cha_ _ _",
     "start": 113,
     "end": 121
    },
    {
     "index": 6,
     "prefix": "lo",
     "answer": "ss",
     "word": "loss",
     "slots": 2,
     "marker": "lo_ _",
     "start": 131,
     "end": 136
    },
    {
     "index": 7,
     "prefix": "compe",
     "answer": "tition",
     "word": "competition",
     "slots": 6,
     "marker": "compe_ _ _ _ _ _ ",
     "start": 142,
     "end": 159
    },
    {
     "index": 8,
     "prefix": "ot",
     "answer": "her",
     "word": "other",
     "slots": 3,
     "marker": "ot_ _ _ ",
     "start": 164,
     "end": 172
    },
    {
     "index": 9,
     "prefix": "Am",
     "answer": "ong",
     "word": "Among",
     "slots": 3,
     "marker": "Am_ _ _ ",
     "start": 181,
     "end": 189
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "生命科学",
    "灭绝",
    "灭绝与当今影响"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "26TPO05_R_CW_M1_Q01-10",
   "month": "官方TPO",
   "source": "官方网站TPO",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "气候变化与影响",
   "discipline": "自然科学",
   "topic": "气候变化",
   "difficulty": "中等",
   "passage": "Climate varies significantly across different regions of the world because it is affected by many factors. These inc_ _ _ _ the amo_ _ _ of sun_ _ _ _ _ and dist_ _ _ _ from t_ _ ocean. Some pla_ _ _ are ve_ _ warm wi_ _ very lit_ _ _ rain, li_ _ deserts. Others may have a cold climate with lots of snow, like the Arctic. Yet others experience mild climates and four distinct seasons. Understanding climate can help us prepare for different weather conditions.",
   "blanks": [
    {
     "index": 0,
     "prefix": "inc",
     "answer": "lude",
     "word": "include",
     "slots": 4,
     "marker": "inc_ _ _ _ ",
     "start": 113,
     "end": 124
    },
    {
     "index": 1,
     "prefix": "amo",
     "answer": "unt",
     "word": "amount",
     "slots": 3,
     "marker": "amo_ _ _ ",
     "start": 128,
     "end": 137
    },
    {
     "index": 2,
     "prefix": "sun",
     "answer": "light",
     "word": "sunlight",
     "slots": 5,
     "marker": "sun_ _ _ _ _ ",
     "start": 140,
     "end": 153
    },
    {
     "index": 3,
     "prefix": "dist",
     "answer": "ance",
     "word": "distance",
     "slots": 4,
     "marker": "dist_ _ _ _ ",
     "start": 157,
     "end": 169
    },
    {
     "index": 4,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "marker": "t_ _ ",
     "start": 174,
     "end": 179
    },
    {
     "index": 5,
     "prefix": "pla",
     "answer": "ces",
     "word": "places",
     "slots": 3,
     "marker": "pla_ _ _ ",
     "start": 191,
     "end": 200
    },
    {
     "index": 6,
     "prefix": "ve",
     "answer": "ry",
     "word": "very",
     "slots": 2,
     "marker": "ve_ _ ",
     "start": 204,
     "end": 210
    },
    {
     "index": 7,
     "prefix": "wi",
     "answer": "th",
     "word": "with",
     "slots": 2,
     "marker": "wi_ _ ",
     "start": 215,
     "end": 221
    },
    {
     "index": 8,
     "prefix": "lit",
     "answer": "tle",
     "word": "little",
     "slots": 3,
     "marker": "lit_ _ _ ",
     "start": 226,
     "end": 235
    },
    {
     "index": 9,
     "prefix": "li",
     "answer": "ke",
     "word": "like",
     "slots": 2,
     "marker": "li_ _ ",
     "start": 241,
     "end": 247
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "自然科学",
    "气候变化",
    "气候变化与影响"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "26TPO05_R_CW_M2+_Q01-10",
   "month": "官方TPO",
   "source": "官方网站TPO",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "欧洲中世纪介绍",
   "discipline": "社会科学",
   "topic": "欧洲中世纪",
   "difficulty": "中等",
   "passage": "European medieval history encompasses the period from the fall of the Roman Empire in the fifth century C.E. to the beginning of the Renaissance in the fifteenth century. This e_ _ saw signi_ _ _ _ _ _ developments, inc_ _ _ _ _ the ri_ _ of feudalism a_ a soc_ _ _ system, the estab_ _ _ _ _ _ _ of powe_ _ _ _ kingdoms, a_ _ the spread o_ Christianity throughout Europe. The medieval period also witnessed numerous conflicts, such as the Crusades and the Hundred Years' War, which profoundly influenced the political boundaries, religious dynamics, and power structures of Europe.",
   "blanks": [],
   "translation": "",
   "analysis": [],
   "tags": [
    "社会科学",
    "欧洲中世纪",
    "欧洲中世纪介绍"
   ],
   "status": "draft",
   "blankCount": 0,
   "flags": [
    {
     "type": "draft",
     "note": "数据源对齐失败，暂无标准答案，暂不可判分——需人工校验源表"
    }
   ]
  },
  {
   "id": "26TPO06_R_CW_M1_Q01-10",
   "month": "官方TPO",
   "source": "官方网站TPO",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "降雨及其影响",
   "discipline": "自然科学",
   "topic": "降雨",
   "difficulty": "中等",
   "passage": "Rain is a crucial part of Earth's ecosystem, supporting both plant growth and animal survival. As precip_ _ _ _ _ _ _ falls fr_ _ the s_ _, it reple_ _ _ _ _ _ water sou_ _ _ _, nourishes veget_ _ _ _ _, and sust_ _ _ _ wildlife. Some reg_ _ _ _ receive abun_ _ _ _rainfall, wh_ _ _ others experience prolonged dry periods, affecting local environments. Excessive rain can lead to floods, creating hazards for communities and natural habitats. Despite occasional dangers, rainfall is essential for maintaining ecological balance, ensuring that plants and animals thrive in diverse climates around the world.",
   "blanks": [
    {
     "index": 0,
     "prefix": "precip",
     "answer": "itation",
     "word": "precipitation",
     "slots": 7,
     "marker": "precip_ _ _ _ _ _ _ ",
     "start": 98,
     "end": 118
    },
    {
     "index": 1,
     "prefix": "fr",
     "answer": "om",
     "word": "from",
     "slots": 2,
     "marker": "fr_ _ ",
     "start": 124,
     "end": 130
    },
    {
     "index": 2,
     "prefix": "s",
     "answer": "ky",
     "word": "sky",
     "slots": 2,
     "marker": "s_ _",
     "start": 134,
     "end": 138
    },
    {
     "index": 3,
     "prefix": "reple",
     "answer": "nishes",
     "word": "replenishes",
     "slots": 6,
     "marker": "reple_ _ _ _ _ _ ",
     "start": 143,
     "end": 160
    },
    {
     "index": 4,
     "prefix": "sou",
     "answer": "rces",
     "word": "sources",
     "slots": 4,
     "marker": "sou_ _ _ _",
     "start": 166,
     "end": 176
    },
    {
     "index": 5,
     "prefix": "veget",
     "answer": "ation",
     "word": "vegetation",
     "slots": 5,
     "marker": "veget_ _ _ _ _",
     "start": 188,
     "end": 202
    },
    {
     "index": 6,
     "prefix": "sust",
     "answer": "ains",
     "word": "sustains",
     "slots": 4,
     "marker": "sust_ _ _ _ ",
     "start": 208,
     "end": 220
    },
    {
     "index": 7,
     "prefix": "reg",
     "answer": "ions",
     "word": "regions",
     "slots": 4,
     "marker": "reg_ _ _ _ ",
     "start": 235,
     "end": 246
    },
    {
     "index": 8,
     "prefix": "abun",
     "answer": "dant",
     "word": "abundant",
     "slots": 4,
     "marker": "abun_ _ _ _",
     "start": 254,
     "end": 265
    },
    {
     "index": 9,
     "prefix": "wh",
     "answer": "ile",
     "word": "while",
     "slots": 3,
     "marker": "wh_ _ _ ",
     "start": 275,
     "end": 283
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "自然科学",
    "降雨",
    "降雨及其影响"
   ],
   "status": "active",
   "blankCount": 10
  }
 ]
};
