/* TOEFL Complete the Words 题库数据库
 * 由 build_db.py 自动生成于 2026-08-16，请勿手工编辑（会被下次构建覆盖）
 * 总题量 140（active 138）| schema 1.1
 * 重新生成: python3 build_db.py
 */
window.QUESTION_DB = {
 "meta": {
  "schemaVersion": "1.1",
  "updatedAt": "2026-08-16",
  "sources": [
   "1-7月填词题真题(1).docx",
   "R-Complete the words（官方TPO）.xlsx"
  ],
  "totalQuestions": 140,
  "activeQuestions": 138,
  "note": "docx 真题无逐题月份标记，统一归入'1-7月合集'；确认逐题归属后在 parse_docx 中补 month 映射重跑即可"
 },
 "months": [
  {
   "id": "1-7月合集",
   "label": "1-7月合集",
   "count": 116
  },
  {
   "id": "官方TPO",
   "label": "官方TPO",
   "count": 24
  }
 ],
 "questions": [
  {
   "id": "真题-001",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "生命科学",
   "topic": "geese",
   "difficulty": "简单",
   "passage": "Geese undertake seasonal migrations between breeding and wintering grounds, often covering thousands of miles. This move_ _ _ _ is gui_ _ _ by th_ _ _ ability t_ recognize enviro_ _ _ _ _ _ _ cues su_ _ as dayl_ _ _ _ duration a_ _ geographic feat_ _ _ _ , supported b strong spatial memory. Most species, including the Canada goose, follow established flyways and use landmarks like rivers and mountain ranges for navigation. Migration is also a social activity; geese typically travel in family groups, reinforcing cohesion and increasing survival rates through coordinated actions and shared knowledge of migratory routes.",
   "blanks": [
    {
     "index": 0,
     "prefix": "move",
     "answer": "ment",
     "word": "movement",
     "slots": 4,
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
     "marker": "feat_ _ _ _ ",
     "start": 243,
     "end": 255
    },
    {
     "index": 9,
     "prefix": "b",
     "answer": "y",
     "word": "by",
     "slots": 1,
     "marker": "b",
     "start": 267,
     "end": 268
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "生命科学",
    "geese"
   ],
   "status": "active",
   "blankCount": 10
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
   "id": "真题-003",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "社会科学",
   "topic": "kinship",
   "difficulty": "中等",
   "passage": "The role of kinship was central to the social structure of prehistoric communities. Kinship not only structured family relationships but also shaped how resources were shared, labor was organized, and social hierarchies were maintained within the group. Archaeo_ _ _ _ _ _ _ evidence sugg_ _ _ _ that indiv_ _ _ _ _ _ held spec_ _ _ _ roles ba_ _ _ on a_ _ and gen_ _ _ , contributing t_ a sophis_ _ _ _ _ _ _ division o_ labor. The intricacy of these social structures is further evidenced by the existence of ceremonial sites, which indicate collective activities and social gatherings.",
   "blanks": [
    {
     "index": 0,
     "prefix": "Archaeo",
     "answer": "logical",
     "word": "Archaeological",
     "slots": 7,
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
     "marker": "gen_ _ _ ",
     "start": 361,
     "end": 370
    },
    {
     "index": 7,
     "prefix": "t",
     "answer": "o",
     "word": "to",
     "slots": 1,
     "marker": "t_ ",
     "start": 385,
     "end": 388
    },
    {
     "index": 8,
     "prefix": "sophis",
     "answer": "ticated",
     "word": "sophisticated",
     "slots": 7,
     "marker": "sophis_ _ _ _ _ _ _ ",
     "start": 390,
     "end": 410
    },
    {
     "index": 9,
     "prefix": "o",
     "answer": "f",
     "word": "of",
     "slots": 1,
     "marker": "o_ ",
     "start": 419,
     "end": 422
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "社会科学",
    "kinship"
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
   "id": "真题-008",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "社会科学",
   "topic": "economics",
   "difficulty": "困难",
   "passage": "Economics is the social science that studies the production, distribution, and consumption of goods and services. It exam_ _ _ _ how indiv_ _ _ _ _ _ , households, busin_ _ _ _ _, and gover_ _ _ _ _ _ make cho_ _ _ _ about reso_ _ _ _ allocation a_ _ how su_ _ decisions aff_ _ _ overall stab_ _ _ _ _ and growth in the economy. Through the application of theoretical models and the collection of empirical data, economists can help policymakers formulate strategies to address issues such as inflation, unemployment, and trade imbalances, thereby improving societal well-being.",
   "blanks": [
    {
     "index": 0,
     "prefix": "exam",
     "answer": "ines",
     "word": "examines",
     "slots": 4,
     "marker": "exam_ _ _ _ ",
     "start": 117,
     "end": 129
    },
    {
     "index": 1,
     "prefix": "indiv",
     "answer": "iduals",
     "word": "individuals",
     "slots": 6,
     "marker": "indiv_ _ _ _ _ _ ",
     "start": 133,
     "end": 150
    },
    {
     "index": 2,
     "prefix": "busin",
     "answer": "esses",
     "word": "businesses",
     "slots": 5,
     "marker": "busin_ _ _ _ _",
     "start": 164,
     "end": 178
    },
    {
     "index": 3,
     "prefix": "gover",
     "answer": "nments",
     "word": "governments",
     "slots": 6,
     "marker": "gover_ _ _ _ _ _ ",
     "start": 184,
     "end": 201
    },
    {
     "index": 4,
     "prefix": "cho",
     "answer": "ices",
     "word": "choices",
     "slots": 4,
     "marker": "cho_ _ _ _ ",
     "start": 206,
     "end": 217
    },
    {
     "index": 5,
     "prefix": "reso",
     "answer": "urce",
     "word": "resource",
     "slots": 4,
     "marker": "reso_ _ _ _ ",
     "start": 223,
     "end": 235
    },
    {
     "index": 6,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 246,
     "end": 251
    },
    {
     "index": 7,
     "prefix": "su",
     "answer": "ch",
     "word": "such",
     "slots": 2,
     "marker": "su_ _ ",
     "start": 255,
     "end": 261
    },
    {
     "index": 8,
     "prefix": "aff",
     "answer": "ect",
     "word": "affect",
     "slots": 3,
     "marker": "aff_ _ _ ",
     "start": 271,
     "end": 280
    },
    {
     "index": 9,
     "prefix": "stab",
     "answer": "ility",
     "word": "stability",
     "slots": 5,
     "marker": "stab_ _ _ _ _ ",
     "start": 288,
     "end": 302
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "社会科学",
    "economics"
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
   "id": "真题-012",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "生命科学",
   "topic": "mammal adaptations",
   "difficulty": "中等",
   "passage": "Terrestrial mammals exhibit a fascinating array of adaptations that help them survive and thrive in diverse environments. From com_ _ _ _ social intera_ _ _ _ _ _ that imp_ _ _ _ group surv_ _ _ _ to ingen_ _ _ _ _ _ designed lu_ _ _ that enh_ _ _ _ oxygen absor_ _ _ _ _ , these crea_ _ _ _ _ are bu_ _ _ for resilience. Some have evolved powerful limbs for digging deep burrows, while others have agile bodies perfect for scaling trees or sprinting across open plains. Their sharp senses and stealthy movements are often the result of a high-stakes evolutionary arms race between predator and prey.",
   "blanks": [
    {
     "index": 0,
     "prefix": "com",
     "answer": "plex",
     "word": "complex",
     "slots": 4,
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
     "marker": "absor_ _ _ _ _ ",
     "start": 257,
     "end": 272
    },
    {
     "index": 8,
     "prefix": "crea",
     "answer": "tures",
     "word": "creatures",
     "slots": 5,
     "marker": "crea_ _ _ _ _ ",
     "start": 280,
     "end": 294
    },
    {
     "index": 9,
     "prefix": "bu",
     "answer": "ilt",
     "word": "built",
     "slots": 3,
     "marker": "bu_ _ _ ",
     "start": 298,
     "end": 306
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "生命科学",
    "mammal adaptations"
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
   "id": "真题-017",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "艺术",
   "topic": "shadow puppetry",
   "difficulty": "简单",
   "passage": "Shadow puppetry is an ancient form of storytelling that uses flat, articulated (movable) figures cast onto a screen by a light source. Shadow puppetry comb_ _ _ _ visual arti_ _ _ _ with dram_ _ _ _ narration, crea_ _ _ _ engaging perfor_ _ _ _ _ _ that con_ _ _ traditional ta_ _ _ and mo_ _ _ lessons. Th_ _ art fo_ _ originated in Asia and spread to various cultures around the world. The puppets are typically made of leather or paper and manipulated by sticks or strings. Performers narrate stories, often accompanied by music or sound effects.",
   "blanks": [
    {
     "index": 0,
     "prefix": "comb",
     "answer": "ines",
     "word": "combines",
     "slots": 4,
     "marker": "comb_ _ _ _ ",
     "start": 151,
     "end": 163
    },
    {
     "index": 1,
     "prefix": "arti",
     "answer": "stry",
     "word": "artistry",
     "slots": 4,
     "marker": "arti_ _ _ _ ",
     "start": 170,
     "end": 182
    },
    {
     "index": 2,
     "prefix": "dram",
     "answer": "atic",
     "word": "dramatic",
     "slots": 4,
     "marker": "dram_ _ _ _ ",
     "start": 187,
     "end": 199
    },
    {
     "index": 3,
     "prefix": "crea",
     "answer": "ting",
     "word": "creating",
     "slots": 4,
     "marker": "crea_ _ _ _ ",
     "start": 210,
     "end": 222
    },
    {
     "index": 4,
     "prefix": "perfor",
     "answer": "mances",
     "word": "performances",
     "slots": 6,
     "marker": "perfor_ _ _ _ _ _ ",
     "start": 231,
     "end": 249
    },
    {
     "index": 5,
     "prefix": "con",
     "answer": "vey",
     "word": "convey",
     "slots": 3,
     "marker": "con_ _ _ ",
     "start": 254,
     "end": 263
    },
    {
     "index": 6,
     "prefix": "ta",
     "answer": "les",
     "word": "tales",
     "slots": 3,
     "marker": "ta_ _ _ ",
     "start": 275,
     "end": 283
    },
    {
     "index": 7,
     "prefix": "mo",
     "answer": "ral",
     "word": "moral",
     "slots": 3,
     "marker": "mo_ _ _ ",
     "start": 287,
     "end": 295
    },
    {
     "index": 8,
     "prefix": "Th",
     "answer": "is",
     "word": "This",
     "slots": 2,
     "marker": "Th_ _ ",
     "start": 304,
     "end": 310
    },
    {
     "index": 9,
     "prefix": "fo",
     "answer": "rm",
     "word": "form",
     "slots": 2,
     "marker": "fo_ _ ",
     "start": 314,
     "end": 320
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "艺术",
    "shadow puppetry"
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
   "id": "真题-019",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "社会科学",
   "topic": "geographic education",
   "difficulty": "困难",
   "passage": "Geographic education equips students with the tools to understand global issues through a spatial lens. For example, studying how rising sea levels affect coastal communities helps learners connect physical geography with human impact. This know_ _ _ _ _ is esse_ _ _ _ _ for plan_ _ _ _ disaster resp_ _ _ _ , managing reso_ _ _ _ _ , and addre_ _ _ _ _ climate cha_ _ _ . Geographic lite_ _ _ _ also fos_ _ _ _ critical thin_ _ _ _ about migration, urban development, and environmental sustainability. By teaching students to analyze maps, data, and patterns, geography empowers them to make informed decisions in an increasingly interconnected and environmentally challenged world.",
   "blanks": [
    {
     "index": 0,
     "prefix": "know",
     "answer": "ledge",
     "word": "knowledge",
     "slots": 5,
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
     "marker": "resp_ _ _ _ ",
     "start": 297,
     "end": 309
    },
    {
     "index": 4,
     "prefix": "reso",
     "answer": "urces",
     "word": "resources",
     "slots": 5,
     "marker": "reso_ _ _ _ _ ",
     "start": 320,
     "end": 334
    },
    {
     "index": 5,
     "prefix": "addre",
     "answer": "ssing",
     "word": "addressing",
     "slots": 5,
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
     "marker": "cha_ _ _ ",
     "start": 363,
     "end": 372
    },
    {
     "index": 7,
     "prefix": "lite",
     "answer": "racy",
     "word": "literacy",
     "slots": 4,
     "marker": "lite_ _ _ _ ",
     "start": 385,
     "end": 397
    },
    {
     "index": 8,
     "prefix": "fos",
     "answer": "ters",
     "word": "fosters",
     "slots": 4,
     "marker": "fos_ _ _ _ ",
     "start": 402,
     "end": 413
    },
    {
     "index": 9,
     "prefix": "thin",
     "answer": "king",
     "word": "thinking",
     "slots": 4,
     "marker": "thin_ _ _ _ ",
     "start": 422,
     "end": 434
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "社会科学",
    "geographic education"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-020",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "自然科学",
   "topic": "galaxies",
   "difficulty": "困难",
   "passage": "The observational study of galaxies has significantly advanced our understanding of the universe. By analyzing t_ _ light emi_ _ _ _ from cele_ _ _ _ _ bodies, li_ _ stars, astro_ _ _ _ _ _ can in_ _ _ various prope_ _ _ _ _ such a_ distance fr_ _ Earth, compo_ _ _ _ _ _, and velocity. As light from galaxies travels through space, it stretches, shifting to the red end of the spectrum. This shift is directly proportional to a galaxy's speed and distance, allowing scientists to map the universe's expansion.",
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
     "marker": "compo_ _ _ _ _ _",
     "start": 255,
     "end": 271
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "自然科学",
    "galaxies"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-021",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "社会科学",
   "topic": "hypotheses",
   "difficulty": "困难",
   "passage": "In academic research, reasoning is key to forming and testing hypotheses. Logical reasoning uses structured thinking to evaluate arguments and reach conclusions. Deductive reasoning starts with known facts and leads to certain outcomes, while inductive reasoning draws gen_ _ _ _ ideas fr_ _ specific observ_ _ _ _ _ _, though i_ involves so_ _ uncertainty. Us_ _ _ both met_ _ _ _ together stren_ _ _ _ _ _ the appr_ _ _ _ to invest_ _ _ _ _ _ _ and inquiry. This practice helps scholars build solid arguments and make informed decisions. By applying clear reasoning strategies, researchers can advance knowledge and contribute meaningful insights to their fields.",
   "blanks": [
    {
     "index": 0,
     "prefix": "gen",
     "answer": "eral",
     "word": "general",
     "slots": 4,
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
     "marker": "invest_ _ _ _ _ _ _ ",
     "start": 427,
     "end": 447
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "社会科学",
    "hypotheses"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-022",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "社会科学",
   "topic": "agricultural practices",
   "difficulty": "中等",
   "passage": "Agricultural practices have evolved to meet growing worldwide nutritional requirements. Sustainable farming offers a promising path, emphasizing ecological balance and resource conservation. Techniques like crop rotation, polyculture, and organic farming main_ _ _ _ soil hea_ _ _ and decr_ _ _ _ pesticide u_ _ . These met_ _ _ _ improve fo_ _ security a_ _ reduce environ_ _ _ _ _ _ harm. Far_ _ _ _ often ben_ _ _ _ from higher yields and lower long-term costs. Although traditional methods dominate due to short-term profits, the future of agriculture may depend on embracing sustainability.",
   "blanks": [
    {
     "index": 0,
     "prefix": "main",
     "answer": "tain",
     "word": "maintain",
     "slots": 4,
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
     "marker": "u_ _ ",
     "start": 307,
     "end": 312
    },
    {
     "index": 4,
     "prefix": "met",
     "answer": "hods",
     "word": "methods",
     "slots": 4,
     "marker": "met_ _ _ _ ",
     "start": 320,
     "end": 331
    },
    {
     "index": 5,
     "prefix": "fo",
     "answer": "od",
     "word": "food",
     "slots": 2,
     "marker": "fo_ _ ",
     "start": 339,
     "end": 345
    },
    {
     "index": 6,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 354,
     "end": 359
    },
    {
     "index": 7,
     "prefix": "environ",
     "answer": "mental",
     "word": "environmental",
     "slots": 6,
     "marker": "environ_ _ _ _ _ _ ",
     "start": 366,
     "end": 385
    },
    {
     "index": 8,
     "prefix": "Far",
     "answer": "mers",
     "word": "Farmers",
     "slots": 4,
     "marker": "Far_ _ _ _ ",
     "start": 391,
     "end": 402
    },
    {
     "index": 9,
     "prefix": "ben",
     "answer": "efit",
     "word": "benefit",
     "slots": 4,
     "marker": "ben_ _ _ _ ",
     "start": 408,
     "end": 419
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "社会科学",
    "agricultural practices"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-023",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "自然科学",
   "topic": "geology",
   "difficulty": "简单",
   "passage": "The study of geological formations provides insights into Earth's dynamic processes. Metamorphic rocks are rocks that have been transformed by heat and pressure. Sedimentary rocks fo_ _ as lay_ _ _ of mate_ _ _ _ build u_ over ti_ _ and a_ _ eventually pre_ _ _ _ and fu_ _ _ together t_ create so_ _ _ rock. The strata inside these formations serve as historical records of environmental conditions, revealing changes in climate, sea levels, and biological evolution. Analyzing rocks allows geologists to reconstruct past geological events.",
   "blanks": [
    {
     "index": 0,
     "prefix": "fo",
     "answer": "rm",
     "word": "form",
     "slots": 2,
     "marker": "fo_ _ ",
     "start": 180,
     "end": 186
    },
    {
     "index": 1,
     "prefix": "lay",
     "answer": "ers",
     "word": "layers",
     "slots": 3,
     "marker": "lay_ _ _ ",
     "start": 189,
     "end": 198
    },
    {
     "index": 2,
     "prefix": "mate",
     "answer": "rial",
     "word": "material",
     "slots": 4,
     "marker": "mate_ _ _ _ ",
     "start": 201,
     "end": 213
    },
    {
     "index": 3,
     "prefix": "u",
     "answer": "p",
     "word": "up",
     "slots": 1,
     "marker": "u_ ",
     "start": 219,
     "end": 222
    },
    {
     "index": 4,
     "prefix": "ti",
     "answer": "me",
     "word": "time",
     "slots": 2,
     "marker": "ti_ _ ",
     "start": 227,
     "end": 233
    },
    {
     "index": 5,
     "prefix": "a",
     "answer": "re",
     "word": "are",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 237,
     "end": 242
    },
    {
     "index": 6,
     "prefix": "pre",
     "answer": "ssed",
     "word": "pressed",
     "slots": 4,
     "marker": "pre_ _ _ _ ",
     "start": 253,
     "end": 264
    },
    {
     "index": 7,
     "prefix": "fu",
     "answer": "sed",
     "word": "fused",
     "slots": 3,
     "marker": "fu_ _ _ ",
     "start": 268,
     "end": 276
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
     "prefix": "so",
     "answer": "lid",
     "word": "solid",
     "slots": 3,
     "marker": "so_ _ _ ",
     "start": 295,
     "end": 303
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "自然科学",
    "geology"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-024",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "艺术",
   "topic": "craftsmanship",
   "difficulty": "简单",
   "passage": "Craftsmanship blends art with functional design through a meticulous process requiring creativity and precision. Artisans wo_ _ with mater_ _ _ _ like me_ _ _ , wood, a_ _ fabric t_ create prod_ _ _ _ _ that a_ _ both use_ _ _ and beau_ _ _ _ _. Each pi_ _ _ shows the maker's skill, attention to detail, and personal style. Beyond utility, handcrafted items carry cultural significance. Even as societies modernize, the value of tradition and quality endures, highlighting a lasting appreciation for the uniqueness and care embedded in artisanal work.",
   "blanks": [
    {
     "index": 0,
     "prefix": "wo",
     "answer": "rk",
     "word": "work",
     "slots": 2,
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
     "marker": "me_ _ _ ",
     "start": 151,
     "end": 159
    },
    {
     "index": 3,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 167,
     "end": 172
    },
    {
     "index": 4,
     "prefix": "t",
     "answer": "o",
     "word": "to",
     "slots": 1,
     "marker": "t_ ",
     "start": 179,
     "end": 182
    },
    {
     "index": 5,
     "prefix": "prod",
     "answer": "ucts",
     "word": "products",
     "slots": 4,
     "marker": "prod_ _ _ _ _ ",
     "start": 189,
     "end": 203
    },
    {
     "index": 6,
     "prefix": "a",
     "answer": "re",
     "word": "are",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 208,
     "end": 213
    },
    {
     "index": 7,
     "prefix": "use",
     "answer": "ful",
     "word": "useful",
     "slots": 3,
     "marker": "use_ _ _ ",
     "start": 218,
     "end": 227
    },
    {
     "index": 8,
     "prefix": "beau",
     "answer": "tiful",
     "word": "beautiful",
     "slots": 5,
     "marker": "beau_ _ _ _ _",
     "start": 231,
     "end": 244
    },
    {
     "index": 9,
     "prefix": "pi",
     "answer": "ece",
     "word": "piece",
     "slots": 3,
     "marker": "pi_ _ _ ",
     "start": 251,
     "end": 259
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "艺术",
    "craftsmanship"
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
   "id": "真题-028",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "自然科学",
   "topic": "paleontology",
   "difficulty": "中等",
   "passage": "Paleontology is the scientific study of life's history through the examination of fossil remains. Fossils, incl_ _ _ _ _ bones, she_ _ _ , and foot_ _ _ _ _ _, provide crit_ _ _ _ evidence o_ past orga_ _ _ _ _ and th_ _ _ environments. B_ analyzing su_ _ remnants, paleont_ _ _ _ _ _ _ _ can reconstruct ancient ecosystems and track evolutionary changes over millions of years. This field offers valuable insights into the development and extinction of species. Advanced techniques like radiometric dating and CT scanning allow scientists to determine precise ages of specimens and examine internal structures without damaging delicate fossils.",
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
     "marker": "she_ _ _ ",
     "start": 128,
     "end": 137
    },
    {
     "index": 2,
     "prefix": "foot",
     "answer": "prints",
     "word": "footprints",
     "slots": 6,
     "marker": "foot_ _ _ _ _ _",
     "start": 143,
     "end": 158
    },
    {
     "index": 3,
     "prefix": "crit",
     "answer": "ical",
     "word": "critical",
     "slots": 4,
     "marker": "crit_ _ _ _ ",
     "start": 168,
     "end": 180
    },
    {
     "index": 4,
     "prefix": "o",
     "answer": "f",
     "word": "of",
     "slots": 1,
     "marker": "o_ ",
     "start": 189,
     "end": 192
    },
    {
     "index": 5,
     "prefix": "orga",
     "answer": "nisms",
     "word": "organisms",
     "slots": 5,
     "marker": "orga_ _ _ _ _ ",
     "start": 197,
     "end": 211
    },
    {
     "index": 6,
     "prefix": "th",
     "answer": "eir",
     "word": "their",
     "slots": 3,
     "marker": "th_ _ _ ",
     "start": 215,
     "end": 223
    },
    {
     "index": 7,
     "prefix": "B",
     "answer": "y",
     "word": "By",
     "slots": 1,
     "marker": "B_ ",
     "start": 237,
     "end": 240
    },
    {
     "index": 8,
     "prefix": "su",
     "answer": "ch",
     "word": "such",
     "slots": 2,
     "marker": "su_ _ ",
     "start": 250,
     "end": 256
    },
    {
     "index": 9,
     "prefix": "paleont",
     "answer": "ologists",
     "word": "paleontologists",
     "slots": 8,
     "marker": "paleont_ _ _ _ _ _ _ _ ",
     "start": 266,
     "end": 289
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "自然科学",
    "paleontology"
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
   "id": "真题-033",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "生命科学",
   "topic": "tigers",
   "difficulty": "中等",
   "passage": "Tigers are solitary animals known for their territorial behavior; males use scent markings and vocalizations to define their territories. Each ma_ _ tiger estab_ _ _ _ _ _ control ov_ _ a la_ _ _ territory span_ _ _ _ several squ_ _ _ miles a_ _ patrols t_ _ area regu_ _ _ _ _ to lo_ _ for prey and maintain dominance.This behavior helps reduce conflicts over prey, but tigers are known to fiercely defend their territory from intruders when necessary. Often hunting at night, tigers use stealth and their excellent night vision to their advantage.",
   "blanks": [
    {
     "index": 0,
     "prefix": "ma",
     "answer": "le",
     "word": "male",
     "slots": 2,
     "marker": "ma_ _ ",
     "start": 143,
     "end": 149
    },
    {
     "index": 1,
     "prefix": "estab",
     "answer": "lishes",
     "word": "establishes",
     "slots": 6,
     "marker": "estab_ _ _ _ _ _ ",
     "start": 155,
     "end": 172
    },
    {
     "index": 2,
     "prefix": "ov",
     "answer": "er",
     "word": "over",
     "slots": 2,
     "marker": "ov_ _ ",
     "start": 180,
     "end": 186
    },
    {
     "index": 3,
     "prefix": "la",
     "answer": "rge",
     "word": "large",
     "slots": 3,
     "marker": "la_ _ _ ",
     "start": 188,
     "end": 196
    },
    {
     "index": 4,
     "prefix": "span",
     "answer": "ning",
     "word": "spanning",
     "slots": 4,
     "marker": "span_ _ _ _ ",
     "start": 206,
     "end": 218
    },
    {
     "index": 5,
     "prefix": "squ",
     "answer": "are",
     "word": "square",
     "slots": 3,
     "marker": "squ_ _ _ ",
     "start": 226,
     "end": 235
    },
    {
     "index": 6,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 241,
     "end": 246
    },
    {
     "index": 7,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "marker": "t_ _ ",
     "start": 254,
     "end": 259
    },
    {
     "index": 8,
     "prefix": "regu",
     "answer": "larly",
     "word": "regularly",
     "slots": 5,
     "marker": "regu_ _ _ _ _ ",
     "start": 264,
     "end": 278
    },
    {
     "index": 9,
     "prefix": "lo",
     "answer": "ok",
     "word": "look",
     "slots": 2,
     "marker": "lo_ _ ",
     "start": 281,
     "end": 287
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "生命科学",
    "tigers"
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
   "id": "真题-035",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "生命科学",
   "topic": "photoperiodism",
   "difficulty": "困难",
   "passage": "The reaction of plants and animals to sunlight and seasonal changes, known as photoperiodism or seasonality, is vital to many biological and behavioral processes. Photoperiods, toge_ _ _ _ with tempe_ _ _ _ _ _ changes, imp_ _ _ seasonal migr_ _ _ _ _, mating rit_ _ _ _ , and hiber_ _ _ _ _ _ . In ma_ _ birds, hor_ _ _ _ levels incr_ _ _ _ in spr_ _ _, which leads to an increase in singing frequency in males and mating behaviors. Photoperiodism allows plants and animals to respond to changes in the environment associated with changing seasons and varying day length.",
   "blanks": [
    {
     "index": 0,
     "prefix": "toge",
     "answer": "ther",
     "word": "together",
     "slots": 4,
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
     "marker": "rit_ _ _ _ ",
     "start": 260,
     "end": 271
    },
    {
     "index": 5,
     "prefix": "hiber",
     "answer": "nation",
     "word": "hibernation",
     "slots": 6,
     "marker": "hiber_ _ _ _ _ _ ",
     "start": 277,
     "end": 294
    },
    {
     "index": 6,
     "prefix": "ma",
     "answer": "ny",
     "word": "many",
     "slots": 2,
     "marker": "ma_ _ ",
     "start": 299,
     "end": 305
    },
    {
     "index": 7,
     "prefix": "hor",
     "answer": "mone",
     "word": "hormone",
     "slots": 4,
     "marker": "hor_ _ _ _ ",
     "start": 312,
     "end": 323
    },
    {
     "index": 8,
     "prefix": "incr",
     "answer": "ease",
     "word": "increase",
     "slots": 4,
     "marker": "incr_ _ _ _ ",
     "start": 330,
     "end": 342
    },
    {
     "index": 9,
     "prefix": "spr",
     "answer": "ing",
     "word": "spring",
     "slots": 3,
     "marker": "spr_ _ _",
     "start": 345,
     "end": 353
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "生命科学",
    "photoperiodism"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-036",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "社会科学",
   "topic": "South Pacific",
   "difficulty": "中等",
   "passage": "The history of the South Pacific is marked by diverse cultures and significant events. Indigenous popul_ _ _ _ _ _ developed com_ _ _ _ societies wi_ _ rich tradi_ _ _ _ _ and soc_ _ _ structures. T_ _ region's poli_ _ _ _ _ and econ_ _ _ _ landscapes exper_ _ _ _ _ _ profound cha_ _ _ _ following colonization by Europeans. Studying this history allows for a greater understanding of cultural interactions and the ongoing effects of historical events on contemporary South Pacific societies. Traditional navigation techniques using stars and ocean swells enabled remarkable voyaging achievements, while contemporary movements focus on cultural preservation, language revitalization, and addressing climate change impacts on island nations.",
   "blanks": [
    {
     "index": 0,
     "prefix": "popul",
     "answer": "ations",
     "word": "populations",
     "slots": 6,
     "marker": "popul_ _ _ _ _ _ ",
     "start": 98,
     "end": 115
    },
    {
     "index": 1,
     "prefix": "com",
     "answer": "plex",
     "word": "complex",
     "slots": 4,
     "marker": "com_ _ _ _ ",
     "start": 125,
     "end": 136
    },
    {
     "index": 2,
     "prefix": "wi",
     "answer": "th",
     "word": "with",
     "slots": 2,
     "marker": "wi_ _ ",
     "start": 146,
     "end": 152
    },
    {
     "index": 3,
     "prefix": "tradi",
     "answer": "tions",
     "word": "traditions",
     "slots": 5,
     "marker": "tradi_ _ _ _ _ ",
     "start": 157,
     "end": 172
    },
    {
     "index": 4,
     "prefix": "soc",
     "answer": "ial",
     "word": "social",
     "slots": 3,
     "marker": "soc_ _ _ ",
     "start": 176,
     "end": 185
    },
    {
     "index": 5,
     "prefix": "T",
     "answer": "he",
     "word": "The",
     "slots": 2,
     "marker": "T_ _ ",
     "start": 197,
     "end": 202
    },
    {
     "index": 6,
     "prefix": "poli",
     "answer": "tical",
     "word": "political",
     "slots": 5,
     "marker": "poli_ _ _ _ _ ",
     "start": 211,
     "end": 225
    },
    {
     "index": 7,
     "prefix": "econ",
     "answer": "omic",
     "word": "economic",
     "slots": 4,
     "marker": "econ_ _ _ _ ",
     "start": 229,
     "end": 241
    },
    {
     "index": 8,
     "prefix": "exper",
     "answer": "ienced",
     "word": "experienced",
     "slots": 6,
     "marker": "exper_ _ _ _ _ _ ",
     "start": 252,
     "end": 269
    },
    {
     "index": 9,
     "prefix": "cha",
     "answer": "nges",
     "word": "changes",
     "slots": 4,
     "marker": "cha_ _ _ _ ",
     "start": 278,
     "end": 289
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "社会科学",
    "South Pacific"
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
   "id": "真题-038",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "社会科学",
   "topic": "philosophy of mind",
   "difficulty": "中等",
   "passage": "The field of philosophy of mind delves into the nature of consciousness, thought processes, and the intricate relationship between the mind and body. I_ addresses funda_ _ _ _ _ _ questions ab_ _ _ perception, iden_ _ _ , self-awareness, a_ _ subjective exper_ _ _ _ _. The disci_ _ _ _ _ explores h_ _ and w_ _ we perc_ _ _ _ the world as we do, examining the mechanisms behind thought, emotion, and awareness. This field is a deeply interdisciplinary one that intersects with psychology, neuroscience, and cognitive science, providing a comprehensive approach to understanding human cognition and consciousness.",
   "blanks": [
    {
     "index": 0,
     "prefix": "I",
     "answer": "t",
     "word": "It",
     "slots": 1,
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
     "marker": "iden_ _ _ ",
     "start": 210,
     "end": 220
    },
    {
     "index": 4,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 238,
     "end": 243
    },
    {
     "index": 5,
     "prefix": "exper",
     "answer": "ience",
     "word": "experience",
     "slots": 5,
     "marker": "exper_ _ _ _ _",
     "start": 254,
     "end": 268
    },
    {
     "index": 6,
     "prefix": "disci",
     "answer": "pline",
     "word": "discipline",
     "slots": 5,
     "marker": "disci_ _ _ _ _ ",
     "start": 274,
     "end": 289
    },
    {
     "index": 7,
     "prefix": "h",
     "answer": "ow",
     "word": "how",
     "slots": 2,
     "marker": "h_ _ ",
     "start": 298,
     "end": 303
    },
    {
     "index": 8,
     "prefix": "w",
     "answer": "hy",
     "word": "why",
     "slots": 2,
     "marker": "w_ _ ",
     "start": 307,
     "end": 312
    },
    {
     "index": 9,
     "prefix": "perc",
     "answer": "eive",
     "word": "perceive",
     "slots": 4,
     "marker": "perc_ _ _ _ ",
     "start": 315,
     "end": 327
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "社会科学",
    "philosophy of mind"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-039",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "自然科学",
   "topic": "cosmology",
   "difficulty": "中等",
   "passage": "Cosmology is the study of how the universe began, changed over time, and might evolve in the future. Scientists exa_ _ _ _ stars, pla_ _ _ _, and gala_ _ _ _ using observ_ _ _ _ _ _ and mod_ _ _ to desc_ _ _ _ cosmic eve_ _ _ . One wid_ _ _ accepted id_ _ is the big bang, wh_ _ _ suggests the universe started from a single point and has been expanding ever since. Ongoing research helps improve our understanding of space, time, and the forces shaping the cosmos, revealing new discoveries about the vast universe.",
   "blanks": [
    {
     "index": 0,
     "prefix": "exa",
     "answer": "mine",
     "word": "examine",
     "slots": 4,
     "marker": "exa_ _ _ _ ",
     "start": 112,
     "end": 123
    },
    {
     "index": 1,
     "prefix": "pla",
     "answer": "nets",
     "word": "planets",
     "slots": 4,
     "marker": "pla_ _ _ _",
     "start": 130,
     "end": 140
    },
    {
     "index": 2,
     "prefix": "gala",
     "answer": "xies",
     "word": "galaxies",
     "slots": 4,
     "marker": "gala_ _ _ _ ",
     "start": 146,
     "end": 158
    },
    {
     "index": 3,
     "prefix": "observ",
     "answer": "ations",
     "word": "observations",
     "slots": 6,
     "marker": "observ_ _ _ _ _ _ ",
     "start": 164,
     "end": 182
    },
    {
     "index": 4,
     "prefix": "mod",
     "answer": "els",
     "word": "models",
     "slots": 3,
     "marker": "mod_ _ _ ",
     "start": 186,
     "end": 195
    },
    {
     "index": 5,
     "prefix": "desc",
     "answer": "ribe",
     "word": "describe",
     "slots": 4,
     "marker": "desc_ _ _ _ ",
     "start": 198,
     "end": 210
    },
    {
     "index": 6,
     "prefix": "eve",
     "answer": "nts",
     "word": "events",
     "slots": 3,
     "marker": "eve_ _ _ ",
     "start": 217,
     "end": 226
    },
    {
     "index": 7,
     "prefix": "wid",
     "answer": "ely",
     "word": "widely",
     "slots": 3,
     "marker": "wid_ _ _ ",
     "start": 232,
     "end": 241
    },
    {
     "index": 8,
     "prefix": "id",
     "answer": "ea",
     "word": "idea",
     "slots": 2,
     "marker": "id_ _ ",
     "start": 250,
     "end": 256
    },
    {
     "index": 9,
     "prefix": "wh",
     "answer": "ich",
     "word": "which",
     "slots": 3,
     "marker": "wh_ _ _ ",
     "start": 273,
     "end": 281
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "自然科学",
    "cosmology"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-040",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "自然科学",
   "topic": "space exploration",
   "difficulty": "困难",
   "passage": "Space exploration has advanced significantly with the development of rockets that can be reused. Traditional rockets were discarded after a single use, but new designs allow them to return to Earth and be refurbished for multiple missions. This innov_ _ _ _ _ reduces t_ _ cost assoc_ _ _ _ _ with sp_ _ _ travel a_ _ increases freq_ _ _ _ _ of miss_ _ _ _. Companies li _ SpaceX ha_ _ pioneered reus_ _ _ _ rocket technology, successfully launching and landing rockets. These advancements pave the way for more ambitious projects, including potential manned missions to Mars and beyond.",
   "blanks": [
    {
     "index": 0,
     "prefix": "innov",
     "answer": "ation",
     "word": "innovation",
     "slots": 5,
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
     "marker": "li _ ",
     "start": 368,
     "end": 373
    },
    {
     "index": 8,
     "prefix": "ha",
     "answer": "ve",
     "word": "have",
     "slots": 2,
     "marker": "ha_ _ ",
     "start": 380,
     "end": 386
    },
    {
     "index": 9,
     "prefix": "reus",
     "answer": "able",
     "word": "reusable",
     "slots": 4,
     "marker": "reus_ _ _ _ ",
     "start": 396,
     "end": 408
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "自然科学",
    "space exploration"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-041",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "社会科学",
   "topic": "James Cook",
   "difficulty": "中等",
   "passage": "James Cook was a British naval officer, explorer, and cartographer born in 1728. He i_ best kn_ _ _ for h_ _ three voy_ _ _ _ across t_ _ Pacific Oc_ _ _ , during wh_ _ _ he meticu_ _ _ _ _ _ mapped coast_ _ _ _ _ and coll_ _ _ _ _ data on astronomy, natural history, and oceanography. Cook is the first European to circumnavigate New Zealand and make contact with the Hawaiian islands. He is also notable for implementing health measures aboard his ships, such as dietary changes to prevent the disease scurvy.",
   "blanks": [
    {
     "index": 0,
     "prefix": "i",
     "answer": "s",
     "word": "is",
     "slots": 1,
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
     "marker": "Oc_ _ _ ",
     "start": 146,
     "end": 154
    },
    {
     "index": 6,
     "prefix": "wh",
     "answer": "ich",
     "word": "which",
     "slots": 3,
     "marker": "wh_ _ _ ",
     "start": 163,
     "end": 171
    },
    {
     "index": 7,
     "prefix": "meticu",
     "answer": "lously",
     "word": "meticulously",
     "slots": 6,
     "marker": "meticu_ _ _ _ _ _ ",
     "start": 174,
     "end": 192
    },
    {
     "index": 8,
     "prefix": "coast",
     "answer": "lines",
     "word": "coastlines",
     "slots": 5,
     "marker": "coast_ _ _ _ _ ",
     "start": 199,
     "end": 214
    },
    {
     "index": 9,
     "prefix": "coll",
     "answer": "ected",
     "word": "collected",
     "slots": 5,
     "marker": "coll_ _ _ _ _ ",
     "start": 218,
     "end": 232
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "社会科学",
    "James Cook"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-042",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "自然科学",
   "topic": "clouds",
   "difficulty": "简单",
   "passage": "Although there are many different types of clouds, they are all composed of the same basic substance. Ea_ _ cloud cons_ _ _ _ of ti_ _ drops o_ water o_ ice, wh_ _ _ are usu_ _ _ _ too sm_ _ _ to b_ seen wi_ _ the naked eye. These particles cluster together and form an invisible gas known as water vapor. Some of this vapor attaches to microscopic bits of dust or ice floating in the atmosphere. When enough of these elements combine, they create a visible cloud.",
   "blanks": [
    {
     "index": 0,
     "prefix": "Ea",
     "answer": "ch",
     "word": "Each",
     "slots": 2,
     "marker": "Ea_ _ ",
     "start": 102,
     "end": 108
    },
    {
     "index": 1,
     "prefix": "cons",
     "answer": "ists",
     "word": "consists",
     "slots": 4,
     "marker": "cons_ _ _ _ ",
     "start": 114,
     "end": 126
    },
    {
     "index": 2,
     "prefix": "ti",
     "answer": "ny",
     "word": "tiny",
     "slots": 2,
     "marker": "ti_ _ ",
     "start": 129,
     "end": 135
    },
    {
     "index": 3,
     "prefix": "o",
     "answer": "f",
     "word": "of",
     "slots": 1,
     "marker": "o_ ",
     "start": 141,
     "end": 144
    },
    {
     "index": 4,
     "prefix": "o",
     "answer": "r",
     "word": "or",
     "slots": 1,
     "marker": "o_ ",
     "start": 150,
     "end": 153
    },
    {
     "index": 5,
     "prefix": "wh",
     "answer": "ich",
     "word": "which",
     "slots": 3,
     "marker": "wh_ _ _ ",
     "start": 158,
     "end": 166
    },
    {
     "index": 6,
     "prefix": "usu",
     "answer": "ally",
     "word": "usually",
     "slots": 4,
     "marker": "usu_ _ _ _ ",
     "start": 170,
     "end": 181
    },
    {
     "index": 7,
     "prefix": "sm",
     "answer": "all",
     "word": "small",
     "slots": 3,
     "marker": "sm_ _ _ ",
     "start": 185,
     "end": 193
    },
    {
     "index": 8,
     "prefix": "b",
     "answer": "e",
     "word": "be",
     "slots": 1,
     "marker": "b_ ",
     "start": 196,
     "end": 199
    },
    {
     "index": 9,
     "prefix": "wi",
     "answer": "th",
     "word": "with",
     "slots": 2,
     "marker": "wi_ _ ",
     "start": 204,
     "end": 210
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "自然科学",
    "clouds"
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
   "id": "真题-044",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "社会科学",
   "topic": "supply and demand",
   "difficulty": "中等",
   "passage": "Supply and demand are fundamental concepts in economics because they determine the price and availability of goods or services. When the_ _ _ is mo_ _ demand f_ _ a pro_ _ _ _ , suppliers m_ _ make i_ more expe_ _ _ _ _ to incr_ _ _ _ profits. Conve_ _ _ _ _ , an exc_ _ _ supply can lead to price reductions. Market equilibrium occurs when supply matches demand, resulting in stable prices. The real world, however, is rarely as simple as this. Various factors influence these dynamics, including consumer preferences, production costs, and external events.",
   "blanks": [
    {
     "index": 0,
     "prefix": "the",
     "answer": "re",
     "word": "there",
     "slots": 2,
     "marker": "the_ _ _ ",
     "start": 133,
     "end": 142
    },
    {
     "index": 1,
     "prefix": "mo",
     "answer": "re",
     "word": "more",
     "slots": 2,
     "marker": "mo_ _ ",
     "start": 145,
     "end": 151
    },
    {
     "index": 2,
     "prefix": "f",
     "answer": "or",
     "word": "for",
     "slots": 2,
     "marker": "f_ _ ",
     "start": 158,
     "end": 163
    },
    {
     "index": 3,
     "prefix": "pro",
     "answer": "duct",
     "word": "product",
     "slots": 4,
     "marker": "pro_ _ _ _ ",
     "start": 165,
     "end": 176
    },
    {
     "index": 4,
     "prefix": "m",
     "answer": "ay",
     "word": "may",
     "slots": 2,
     "marker": "m_ _ ",
     "start": 188,
     "end": 193
    },
    {
     "index": 5,
     "prefix": "i",
     "answer": "t",
     "word": "it",
     "slots": 1,
     "marker": "i_ ",
     "start": 198,
     "end": 201
    },
    {
     "index": 6,
     "prefix": "expe",
     "answer": "nsive",
     "word": "expensive",
     "slots": 5,
     "marker": "expe_ _ _ _ _ ",
     "start": 206,
     "end": 220
    },
    {
     "index": 7,
     "prefix": "incr",
     "answer": "ease",
     "word": "increase",
     "slots": 4,
     "marker": "incr_ _ _ _ ",
     "start": 223,
     "end": 235
    },
    {
     "index": 8,
     "prefix": "Conve",
     "answer": "rsely",
     "word": "Conversely",
     "slots": 5,
     "marker": "Conve_ _ _ _ _ ",
     "start": 244,
     "end": 259
    },
    {
     "index": 9,
     "prefix": "exc",
     "answer": "ess",
     "word": "excess",
     "slots": 3,
     "marker": "exc_ _ _ ",
     "start": 264,
     "end": 273
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "社会科学",
    "supply and demand"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-045",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "生命科学",
   "topic": "mass extinctions",
   "difficulty": "中等",
   "passage": "Mass extinctions have periodically reshaped the diversity of life on Earth, representing significant biological and ecological shifts. The most famous event, the Cretaceous-Paleogene extinction, occurred approximately 66 million years ago and led to the demise of the dinosaurs. Large-scale los_ _ _ of spe_ _ _ _ are of_ _ _ caused b_ catastrophic eve_ _ _ such a_ volcanic erup_ _ _ _ , asteroid imp_ _ _ , and cli_ _ _ _ change. T_ _ resulting damage to biodiversity disrupts ecosystems and alters evolutionary trajectories. Studying past extinctions provides insights into the resilience and adaptability of life, helping scientists predict and mitigate future biodiversity loss.",
   "blanks": [
    {
     "index": 0,
     "prefix": "los",
     "answer": "ses",
     "word": "losses",
     "slots": 3,
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
     "marker": "erup_ _ _ _ ",
     "start": 375,
     "end": 387
    },
    {
     "index": 7,
     "prefix": "imp",
     "answer": "acts",
     "word": "impacts",
     "slots": 4,
     "marker": "imp_ _ _ ",
     "start": 398,
     "end": 407
    },
    {
     "index": 8,
     "prefix": "cli",
     "answer": "mate",
     "word": "climate",
     "slots": 4,
     "marker": "cli_ _ _ _ ",
     "start": 413,
     "end": 424
    },
    {
     "index": 9,
     "prefix": "T",
     "answer": "he",
     "word": "The",
     "slots": 2,
     "marker": "T_ _ ",
     "start": 432,
     "end": 437
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "生命科学",
    "mass extinctions"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-046",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "生命科学",
   "topic": "extinctions",
   "difficulty": "简单",
   "passage": "Extinctions are a natural part of Earth's history, marking the end of species that die out and paving the way for new ones. These inci_ _ _ _ _ can b_ caused b_ varying fac_ _ _ , such a environmental cha_ _ _ , habitat lo , and catast _ _ _ _ _ events. Stud_ _ _ _ extinctions he_ _ _ scientists understand biodiversity and the resilience of ecosystems. Notable extinctions, like the one that wiped out most of the dinosaurs, offer insights into how life on Earth can dramatically shift. Modern conservation efforts aim to prevent human-induced extinctions and preserve remaining species.",
   "blanks": [
    {
     "index": 0,
     "prefix": "inci",
     "answer": "dents",
     "word": "incidents",
     "slots": 5,
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
     "marker": "fac_ _ _ ",
     "start": 169,
     "end": 178
    },
    {
     "index": 4,
     "prefix": "a",
     "answer": "s",
     "word": "as",
     "slots": 1,
     "marker": "a",
     "start": 185,
     "end": 186
    },
    {
     "index": 5,
     "prefix": "cha",
     "answer": "nges",
     "word": "changes",
     "slots": 4,
     "marker": "cha_ _ _ ",
     "start": 201,
     "end": 210
    },
    {
     "index": 6,
     "prefix": "lo",
     "answer": "ss",
     "word": "loss",
     "slots": 2,
     "marker": "lo",
     "start": 220,
     "end": 222
    },
    {
     "index": 7,
     "prefix": "catast",
     "answer": "rophic",
     "word": "catastrophic",
     "slots": 6,
     "marker": "catast _ _ _ _ _ ",
     "start": 229,
     "end": 246
    },
    {
     "index": 8,
     "prefix": "Stud",
     "answer": "ying",
     "word": "Studying",
     "slots": 4,
     "marker": "Stud_ _ _ _ ",
     "start": 254,
     "end": 266
    },
    {
     "index": 9,
     "prefix": "he",
     "answer": "lps",
     "word": "helps",
     "slots": 3,
     "marker": "he_ _ _ ",
     "start": 278,
     "end": 286
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "生命科学",
    "extinctions"
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
   "blankCount": 0
  },
  {
   "id": "真题-049",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "自然科学",
   "topic": "pigments",
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
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "自然科学",
    "pigments"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-050",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "社会科学",
   "topic": "human prehistory",
   "difficulty": "简单",
   "passage": "Archaeologists typically study human history and prehistory through the excavation of artifacts buried underground. Sometimes, how_ _ _ _ , they disc _ _ _ _ artifacts subm_ _ _ _ _ underwater. A stone wall w_ _ found ben_ _ _ _ the Baltic Sea i_ 2012 th_ _ dates t_ over 10,000 ye_ _ _ ago. Resea_ _ _ _ _ _ believe it was used by hunter-gatherer societies to guide and trap reindeer. The wall consists of approximately 1,670 stones and is considered one of the oldest documented hunting structures made by humans.",
   "blanks": [
    {
     "index": 0,
     "prefix": "how",
     "answer": "ever",
     "word": "however",
     "slots": 4,
     "marker": "how_ _ _ _ ",
     "start": 127,
     "end": 138
    },
    {
     "index": 1,
     "prefix": "disc",
     "answer": "over",
     "word": "discover",
     "slots": 4,
     "marker": "disc _ _ _ _ ",
     "start": 145,
     "end": 158
    },
    {
     "index": 2,
     "prefix": "subm",
     "answer": "erged",
     "word": "submerged",
     "slots": 5,
     "marker": "subm_ _ _ _ _ ",
     "start": 168,
     "end": 182
    },
    {
     "index": 3,
     "prefix": "w",
     "answer": "as",
     "word": "was",
     "slots": 2,
     "marker": "w_ _ ",
     "start": 207,
     "end": 212
    },
    {
     "index": 4,
     "prefix": "ben",
     "answer": "eath",
     "word": "beneath",
     "slots": 4,
     "marker": "ben_ _ _ _ ",
     "start": 218,
     "end": 229
    },
    {
     "index": 5,
     "prefix": "i",
     "answer": "n",
     "word": "in",
     "slots": 1,
     "marker": "i_ ",
     "start": 244,
     "end": 247
    },
    {
     "index": 6,
     "prefix": "th",
     "answer": "at",
     "word": "that",
     "slots": 2,
     "marker": "th_ _ ",
     "start": 252,
     "end": 258
    },
    {
     "index": 7,
     "prefix": "t",
     "answer": "o",
     "word": "to",
     "slots": 1,
     "marker": "t_ ",
     "start": 264,
     "end": 267
    },
    {
     "index": 8,
     "prefix": "ye",
     "answer": "ars",
     "word": "years",
     "slots": 3,
     "marker": "ye_ _ _ ",
     "start": 279,
     "end": 287
    },
    {
     "index": 9,
     "prefix": "Resea",
     "answer": "rchers",
     "word": "Researchers",
     "slots": 6,
     "marker": "Resea_ _ _ _ _ _ ",
     "start": 292,
     "end": 309
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "社会科学",
    "human prehistory"
   ],
   "status": "active",
   "blankCount": 10
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
   "id": "真题-052",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "社会科学",
   "topic": "critical thinking",
   "difficulty": "困难",
   "passage": "What are some foundational skills for academic success? Critical thin_ _ _ _ allows stud_ _ _ _ to appr_ _ _ _ problems systema_ _ _ _ _ _ _, analyze infor _ _ _ _ _ _, and ma_ _ connections bet_ _ _ _ ideas. Al_ _ important a_ _ soft skills li_ _ time management and social skills. Time management is helpful for balancing studies, extracurricular activities, and personal life in an efficient manner. Social skills are good predictors of academic success because those who communicate effectively can form positive relationships with their peers and professors.",
   "blanks": [
    {
     "index": 0,
     "prefix": "thin",
     "answer": "king",
     "word": "thinking",
     "slots": 4,
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
     "marker": "infor _ _ _ _ _ _",
     "start": 150,
     "end": 167
    },
    {
     "index": 5,
     "prefix": "ma",
     "answer": "ke",
     "word": "make",
     "slots": 2,
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
     "marker": "li_ _ ",
     "start": 242,
     "end": 248
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "社会科学",
    "critical thinking"
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
   "id": "真题-055",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "自然科学",
   "topic": "global warming",
   "difficulty": "困难",
   "passage": "Global temperatures and weather patterns are experiencing notable shifts, which scientific research strongly associates with human-related factors. Activities su_ _ as t_ _ use o_ fossil fu_ _ _, changes i_ land u_ _ , and industrial produ _ _ _ _ _ contribute t_ the accumu_ _ _ _ _ _ of green_ _ _ _ _ gases in the atmosphere. These gases retain heat, gradually increasing the Earth's average temperature. If emissions continue at current levels, potential outcomes may include more frequent extreme weather events, rising sea levels, and disruptions to ecosystems. Experts emphasize that timely and coordinated efforts are essential to reduce risks and promote long-term environmental stability.",
   "blanks": [
    {
     "index": 0,
     "prefix": "su",
     "answer": "ch",
     "word": "such",
     "slots": 2,
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
     "marker": "fu_ _ _",
     "start": 187,
     "end": 194
    },
    {
     "index": 4,
     "prefix": "i",
     "answer": "n",
     "word": "in",
     "slots": 1,
     "marker": "i_ ",
     "start": 204,
     "end": 207
    },
    {
     "index": 5,
     "prefix": "u",
     "answer": "se",
     "word": "use",
     "slots": 2,
     "marker": "u_ _ ",
     "start": 212,
     "end": 217
    },
    {
     "index": 6,
     "prefix": "produ",
     "answer": "ction",
     "word": "production",
     "slots": 5,
     "marker": "produ _ _ _ _ _ ",
     "start": 234,
     "end": 250
    },
    {
     "index": 7,
     "prefix": "t",
     "answer": "o",
     "word": "to",
     "slots": 1,
     "marker": "t_ ",
     "start": 261,
     "end": 264
    },
    {
     "index": 8,
     "prefix": "accumu",
     "answer": "lation",
     "word": "accumulation",
     "slots": 6,
     "marker": "accumu_ _ _ _ _ _ ",
     "start": 268,
     "end": 286
    },
    {
     "index": 9,
     "prefix": "green",
     "answer": "house",
     "word": "greenhouse",
     "slots": 5,
     "marker": "green_ _ _ _ _ ",
     "start": 289,
     "end": 304
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "自然科学",
    "global warming"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-056",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "社会科学",
   "topic": "medieval Europe",
   "difficulty": "中等",
   "passage": "Medieval European history encompasses the time period from the fall of the Roman Empire to the onset of the Renaissance. This era lasted around 900 years and is also called the Middle Ages. Dur_ _ _ these cent_ _ _ _ _ , feudalism w_ _ the domi_ _ _ _ social stru_ _ _ _ _, shaping t_ _ political, econ_ _ _ _ , and cult _ _ _ _ landscape. Da_ _ _ life a_ _ governance were strongly influenced by the Catholic Church. Studying medieval history reveals the foundations of modern European society and the profound changes that occurred over time. It also helps students understand how people lived, worked, and believed during this important time in history.",
   "blanks": [
    {
     "index": 0,
     "prefix": "Dur",
     "answer": "ing",
     "word": "During",
     "slots": 3,
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
     "marker": "cult _ _ _ _ ",
     "start": 316,
     "end": 329
    },
    {
     "index": 8,
     "prefix": "Da",
     "answer": "ily",
     "word": "Daily",
     "slots": 3,
     "marker": "Da_ _ _ ",
     "start": 340,
     "end": 348
    },
    {
     "index": 9,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 353,
     "end": 358
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "社会科学",
    "medieval Europe"
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
   "id": "真题-063",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "自然科学",
   "topic": "biochemistry",
   "difficulty": "中等",
   "passage": "Rooted in both biology and chemistry, modern biochemistry has grown into a foundational science that explores the molecular basis of life. I_ emerged fr_ _ early investi_ _ _ _ _ _ _ into nat_ _ _ _ processes li_ _ fermentation a_ _ digestion and n_ _ encompasses t_ _ study o_ biomolecules su_ _ as proteins, carbohydrates, and nucleic acids. Biochemistry plays a vital role in diverse fields including agriculture, environmental science, and pharmacology, contributing to innovations in areas like crop improvement, pollution control, and drug design, for example. Its broad applications continue to shape our understanding of living systems and support solutions to global challenges.",
   "blanks": [
    {
     "index": 0,
     "prefix": "I",
     "answer": "t",
     "word": "It",
     "slots": 1,
     "marker": "I_ ",
     "start": 139,
     "end": 142
    },
    {
     "index": 1,
     "prefix": "fr",
     "answer": "om",
     "word": "from",
     "slots": 2,
     "marker": "fr_ _ ",
     "start": 150,
     "end": 156
    },
    {
     "index": 2,
     "prefix": "investi",
     "answer": "gations",
     "word": "investigations",
     "slots": 7,
     "marker": "investi_ _ _ _ _ _ _ ",
     "start": 162,
     "end": 183
    },
    {
     "index": 3,
     "prefix": "nat",
     "answer": "ural",
     "word": "natural",
     "slots": 4,
     "marker": "nat_ _ _ _ ",
     "start": 188,
     "end": 199
    },
    {
     "index": 4,
     "prefix": "li",
     "answer": "ke",
     "word": "like",
     "slots": 2,
     "marker": "li_ _ ",
     "start": 209,
     "end": 215
    },
    {
     "index": 5,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 228,
     "end": 233
    },
    {
     "index": 6,
     "prefix": "n",
     "answer": "ow",
     "word": "now",
     "slots": 2,
     "marker": "n_ _ ",
     "start": 247,
     "end": 252
    },
    {
     "index": 7,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "marker": "t_ _ ",
     "start": 264,
     "end": 269
    },
    {
     "index": 8,
     "prefix": "o",
     "answer": "f",
     "word": "of",
     "slots": 1,
     "marker": "o_ ",
     "start": 275,
     "end": 278
    },
    {
     "index": 9,
     "prefix": "su",
     "answer": "ch",
     "word": "such",
     "slots": 2,
     "marker": "su_ _ ",
     "start": 291,
     "end": 297
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "自然科学",
    "biochemistry"
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
   "id": "真题-066",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "艺术",
   "topic": "prehistoric art",
   "difficulty": "中等",
   "passage": "Prehistoric art and religion provide invaluable insights into the spiritual life of early humans. Cave paintings and carvings often depict animals and symbolic figures, reflecting the beliefs and rituals of ancient communities. These artworks se_ _ _ as a win_ _ _ into t_ _ social struc_ _ _ _ _ and cult_ _ _ _ practices o_ prehistoric ti_ _ _ . By stud_ _ _ _ them, resea_ _ _ _ _ _ can bet_ _ _ understand the evolution of human thought and spirituality. These early forms of art show that even long ago, people had deep feelings, ideas, and questions about life and the world around them.",
   "blanks": [
    {
     "index": 0,
     "prefix": "se",
     "answer": "rve",
     "word": "serve",
     "slots": 3,
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
     "marker": "ti_ _ _ ",
     "start": 338,
     "end": 346
    },
    {
     "index": 7,
     "prefix": "stud",
     "answer": "ying",
     "word": "studying",
     "slots": 4,
     "marker": "stud_ _ _ _ ",
     "start": 351,
     "end": 363
    },
    {
     "index": 8,
     "prefix": "resea",
     "answer": "rchers",
     "word": "researchers",
     "slots": 6,
     "marker": "resea_ _ _ _ _ _ ",
     "start": 369,
     "end": 386
    },
    {
     "index": 9,
     "prefix": "bet",
     "answer": "ter",
     "word": "better",
     "slots": 3,
     "marker": "bet_ _ _ ",
     "start": 390,
     "end": 399
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "艺术",
    "prehistoric art"
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
   "id": "真题-068",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "社会科学",
   "topic": "classical world",
   "difficulty": "中等",
   "passage": "The study of the classical world involves examining the cultural, political, and social structures of ancient civilizations such as Greece and Rome. These soci_ _ _ _ _ have gre_ _ _ _ influenced mod_ _ _ governance, philo_ _ _ _ _ , and a_ _ . The con_ _ _ _ of demo_ _ _ _ _ originated i_ Athens, a_ _ Romans we_ _ superb engineers, building roads, aqueducts, and impressive buildings like the Pantheon. By understanding their advancements and contributions, we gain insight into the foundations of contemporary society. Archaeologists and historians employ various methods to uncover artifacts and interpret historical records from ancient times.",
   "blanks": [
    {
     "index": 0,
     "prefix": "soci",
     "answer": "eties",
     "word": "societies",
     "slots": 5,
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
     "marker": "gre_ _ _ _ ",
     "start": 174,
     "end": 185
    },
    {
     "index": 2,
     "prefix": "mod",
     "answer": "ern",
     "word": "modern",
     "slots": 3,
     "marker": "mod_ _ _ ",
     "start": 196,
     "end": 205
    },
    {
     "index": 3,
     "prefix": "philo",
     "answer": "sophy",
     "word": "philosophy",
     "slots": 5,
     "marker": "philo_ _ _ _ _ ",
     "start": 217,
     "end": 232
    },
    {
     "index": 4,
     "prefix": "a",
     "answer": "rt",
     "word": "art",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 238,
     "end": 243
    },
    {
     "index": 5,
     "prefix": "con",
     "answer": "cept",
     "word": "concept",
     "slots": 4,
     "marker": "con_ _ _ _ ",
     "start": 249,
     "end": 260
    },
    {
     "index": 6,
     "prefix": "demo",
     "answer": "cracy",
     "word": "democracy",
     "slots": 5,
     "marker": "demo_ _ _ _ _ ",
     "start": 263,
     "end": 277
    },
    {
     "index": 7,
     "prefix": "i",
     "answer": "n",
     "word": "in",
     "slots": 1,
     "marker": "i_ ",
     "start": 288,
     "end": 291
    },
    {
     "index": 8,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 299,
     "end": 304
    },
    {
     "index": 9,
     "prefix": "we",
     "answer": "re",
     "word": "were",
     "slots": 2,
     "marker": "we_ _ ",
     "start": 311,
     "end": 317
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "社会科学",
    "classical world"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-069",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "社会科学",
   "topic": "crop rotation",
   "difficulty": "中等",
   "passage": "Crop rotation is a farming technique that involves growing a series of different types of crops in the same area across a sequence of seasons. Different crops use different nutrients from the soil, so rotating them prevents the soil from becoming depleted. Th_ _ method he_ _ _ to red_ _ _ pests a_ _ diseases; i_ also decr_ _ _ _ _ the ne_ _ for chem_ _ _ _ fertilizers, prom_ _ _ _ _ sustainable agric_ _ _ _ _ _. Farmers use this practice to improve crop yields and maintain healthy soil.",
   "blanks": [
    {
     "index": 0,
     "prefix": "Th",
     "answer": "is",
     "word": "This",
     "slots": 2,
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
     "marker": "agric_ _ _ _ _ _",
     "start": 398,
     "end": 414
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "社会科学",
    "crop rotation"
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
   "id": "真题-073",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "生命科学",
   "topic": "grasshoppers",
   "difficulty": "简单",
   "passage": "Grasshoppers are insects commonly found in dry places with grass and plants. Grasshoppers ha_ _ several wa_ _ they pro_ _ _ _ themselves aga_ _ _ _ danger. Th_ _ have powe_ _ _ _ back le_ _ , which al_ _ _ them t_ jump aw_ _ from enemies, such as rodents and snakes. Some grasshoppers can jump twenty times the length of their bodies. By the time they are adults, grasshoppers can also fly. Adult grasshoppers fly very quickly and this helps them avoid danger.",
   "blanks": [
    {
     "index": 0,
     "prefix": "ha",
     "answer": "ve",
     "word": "have",
     "slots": 2,
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
     "marker": "wa_ _ ",
     "start": 104,
     "end": 110
    },
    {
     "index": 2,
     "prefix": "pro",
     "answer": "tect",
     "word": "protect",
     "slots": 4,
     "marker": "pro_ _ _ _ ",
     "start": 115,
     "end": 126
    },
    {
     "index": 3,
     "prefix": "aga",
     "answer": "inst",
     "word": "against",
     "slots": 4,
     "marker": "aga_ _ _ _ ",
     "start": 137,
     "end": 148
    },
    {
     "index": 4,
     "prefix": "Th",
     "answer": "ey",
     "word": "They",
     "slots": 2,
     "marker": "Th_ _ ",
     "start": 156,
     "end": 162
    },
    {
     "index": 5,
     "prefix": "powe",
     "answer": "rful",
     "word": "powerful",
     "slots": 4,
     "marker": "powe_ _ _ _ ",
     "start": 167,
     "end": 179
    },
    {
     "index": 6,
     "prefix": "le",
     "answer": "gs",
     "word": "legs",
     "slots": 2,
     "marker": "le_ _ ",
     "start": 184,
     "end": 190
    },
    {
     "index": 7,
     "prefix": "al",
     "answer": "low",
     "word": "allow",
     "slots": 3,
     "marker": "al_ _ _ ",
     "start": 198,
     "end": 206
    },
    {
     "index": 8,
     "prefix": "t",
     "answer": "o",
     "word": "to",
     "slots": 1,
     "marker": "t_ ",
     "start": 211,
     "end": 214
    },
    {
     "index": 9,
     "prefix": "aw",
     "answer": "ay",
     "word": "away",
     "slots": 2,
     "marker": "aw_ _ ",
     "start": 219,
     "end": 225
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "生命科学",
    "grasshoppers"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-074",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "自然科学",
   "topic": "the universe",
   "difficulty": "简单",
   "passage": "The universe is a vast expanse, filled with mysteries that have intrigued humans for centuries. Black holes are reg_ _ _ _ in sp_ _ _ where gra_ _ _ _ is s_ strong th_ _ nothing, n_ _ even li_ _ _ , can esc_ _ _ . Even tho_ _ _ they a_ _ invisible, black holes can be detected by observing their effects on nearby matter. Black holes play a crucial role in astrophysics, influencing galaxy formation and offering insights into the nature of space, time, and gravity.",
   "blanks": [
    {
     "index": 0,
     "prefix": "reg",
     "answer": "ions",
     "word": "regions",
     "slots": 4,
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
     "marker": "li_ _ _ ",
     "start": 189,
     "end": 197
    },
    {
     "index": 7,
     "prefix": "esc",
     "answer": "ape",
     "word": "escape",
     "slots": 3,
     "marker": "esc_ _ _ ",
     "start": 203,
     "end": 212
    },
    {
     "index": 8,
     "prefix": "tho",
     "answer": "ugh",
     "word": "though",
     "slots": 3,
     "marker": "tho_ _ _ ",
     "start": 219,
     "end": 228
    },
    {
     "index": 9,
     "prefix": "a",
     "answer": "re",
     "word": "are",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 233,
     "end": 238
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "自然科学",
    "the universe"
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
   "id": "真题-078",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "自然科学",
   "topic": "oceanography",
   "difficulty": "中等",
   "passage": "Oceanography is the study of the physical, chemical, and biological aspects of the ocean. This fi_ _ _ encompasses t_ _ exploration o_ ocean curr_ _ _ _ , marine ecosy_ _ _ _ , and geolo_ _ _ _ _ seabed struc_ _ _ _ . Oceanographers u_ _ satellites a_ _ other adva_ _ _ _ technology to monitor and analyze ocean conditions. By tracking sea surface temperatures, currents, salinity, and other features, researchers contribute to our understanding of climate change. Their work is vital for sustaining ocean health and preserving marine biodiversity.",
   "blanks": [
    {
     "index": 0,
     "prefix": "fi",
     "answer": "eld",
     "word": "field",
     "slots": 3,
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
     "marker": "curr_ _ _ _ ",
     "start": 141,
     "end": 153
    },
    {
     "index": 4,
     "prefix": "ecosy",
     "answer": "stems",
     "word": "ecosystems",
     "slots": 5,
     "marker": "ecosy_ _ _ _ ",
     "start": 162,
     "end": 175
    },
    {
     "index": 5,
     "prefix": "geolo",
     "answer": "gical",
     "word": "geological",
     "slots": 5,
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
     "marker": "struc_ _ _ _ ",
     "start": 203,
     "end": 216
    },
    {
     "index": 7,
     "prefix": "u",
     "answer": "se",
     "word": "use",
     "slots": 2,
     "marker": "u_ _ ",
     "start": 233,
     "end": 238
    },
    {
     "index": 8,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 249,
     "end": 254
    },
    {
     "index": 9,
     "prefix": "adva",
     "answer": "nced",
     "word": "advanced",
     "slots": 4,
     "marker": "adva_ _ _ _ ",
     "start": 260,
     "end": 272
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "自然科学",
    "oceanography"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-079",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "生命科学",
   "topic": "camels",
   "difficulty": "简单",
   "passage": "Camels live in the desert where the weather is hot and dry. Sometimes i_ the des_ _ _ , camels ha_ _ to tra_ _ _ for a lo_ _ _ time wit_ _ _ _ finding a_ _ food o_ water. S_ when cam_ _ _ do find food, they are able to eat and drink a lot. Camels turn extra food into fat and store this fat in a special hump on their back. Then they change this fat into energy to help them cross the desert.",
   "blanks": [
    {
     "index": 0,
     "prefix": "i",
     "answer": "n",
     "word": "in",
     "slots": 1,
     "marker": "i_ ",
     "start": 70,
     "end": 73
    },
    {
     "index": 1,
     "prefix": "des",
     "answer": "ert",
     "word": "desert",
     "slots": 3,
     "marker": "des_ _ _ ",
     "start": 77,
     "end": 86
    },
    {
     "index": 2,
     "prefix": "ha",
     "answer": "ve",
     "word": "have",
     "slots": 2,
     "marker": "ha_ _ ",
     "start": 95,
     "end": 101
    },
    {
     "index": 3,
     "prefix": "tra",
     "answer": "vel",
     "word": "travel",
     "slots": 3,
     "marker": "tra_ _ _ ",
     "start": 104,
     "end": 113
    },
    {
     "index": 4,
     "prefix": "lo",
     "answer": "ng",
     "word": "long",
     "slots": 2,
     "marker": "lo_ _ _ ",
     "start": 119,
     "end": 127
    },
    {
     "index": 5,
     "prefix": "wit",
     "answer": "hout",
     "word": "without",
     "slots": 4,
     "marker": "wit_ _ _ _ ",
     "start": 132,
     "end": 143
    },
    {
     "index": 6,
     "prefix": "a",
     "answer": "ny",
     "word": "any",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 151,
     "end": 156
    },
    {
     "index": 7,
     "prefix": "o",
     "answer": "r",
     "word": "or",
     "slots": 1,
     "marker": "o_ ",
     "start": 161,
     "end": 164
    },
    {
     "index": 8,
     "prefix": "S",
     "answer": "o",
     "word": "So",
     "slots": 1,
     "marker": "S_ ",
     "start": 171,
     "end": 174
    },
    {
     "index": 9,
     "prefix": "cam",
     "answer": "els",
     "word": "camels",
     "slots": 3,
     "marker": "cam_ _ _ ",
     "start": 179,
     "end": 188
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "生命科学",
    "camels"
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
   "id": "真题-082",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "自然科学",
   "topic": "weather",
   "difficulty": "简单",
   "passage": "Weather patterns are influenced by a variety of factors, including atmospheric pressure, temperature, and humidity. Meteorologists st_ _ _ these fac_ _ _ _ to pre_ _ _ _ weather condi_ _ _ _ _ and under_ _ _ _ _ climate cha_ _ _ . Tools li_ _ satellites a_ _ radar al_ _ _ meteorologists t_ monitor weather systems in great detail. Accurate weather forecasting is crucial for agriculture, disaster preparedness, and daily planning. It should be noted, however, that despite technological advancements, weather is inherently unpredictable due to the numerous atmospheric variables that can change rapidly.",
   "blanks": [
    {
     "index": 0,
     "prefix": "st",
     "answer": "udy",
     "word": "study",
     "slots": 3,
     "marker": "st_ _ _ ",
     "start": 131,
     "end": 139
    },
    {
     "index": 1,
     "prefix": "fac",
     "answer": "tors",
     "word": "factors",
     "slots": 4,
     "marker": "fac_ _ _ _ ",
     "start": 145,
     "end": 156
    },
    {
     "index": 2,
     "prefix": "pre",
     "answer": "dict",
     "word": "predict",
     "slots": 4,
     "marker": "pre_ _ _ _ ",
     "start": 159,
     "end": 170
    },
    {
     "index": 3,
     "prefix": "condi",
     "answer": "tions",
     "word": "conditions",
     "slots": 5,
     "marker": "condi_ _ _ _ _ ",
     "start": 178,
     "end": 193
    },
    {
     "index": 4,
     "prefix": "under",
     "answer": "stand",
     "word": "understand",
     "slots": 5,
     "marker": "under_ _ _ _ _ ",
     "start": 197,
     "end": 212
    },
    {
     "index": 5,
     "prefix": "cha",
     "answer": "nge",
     "word": "change",
     "slots": 3,
     "marker": "cha_ _ _ ",
     "start": 220,
     "end": 229
    },
    {
     "index": 6,
     "prefix": "li",
     "answer": "ke",
     "word": "like",
     "slots": 2,
     "marker": "li_ _ ",
     "start": 237,
     "end": 243
    },
    {
     "index": 7,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 254,
     "end": 259
    },
    {
     "index": 8,
     "prefix": "al",
     "answer": "low",
     "word": "allow",
     "slots": 3,
     "marker": "al_ _ _ ",
     "start": 265,
     "end": 273
    },
    {
     "index": 9,
     "prefix": "t",
     "answer": "o",
     "word": "to",
     "slots": 1,
     "marker": "t_ ",
     "start": 288,
     "end": 291
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "自然科学",
    "weather"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-083",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "生命科学",
   "topic": "bison",
   "difficulty": "中等",
   "passage": "The Great Plains of North America were once home to vast herds of bison, which played a crucial role in the lives of Indigenous peoples, who made use of bison meat, hides, and bones. These commu_ _ _ _ _ _ relied o_ bison f_ _ food, clot_ _ _ _ , and she_ _ _ _ . Hunting prac_ _ _ _ _ were of_ _ _ sophisticated, invo_ _ _ _ _ coordinated eff_ _ _ _ to dr_ _ _ bison into traps or over cliffs. The arrival of European settlers dramatically altered the landscape, leading to overhunting and near extinction of bison populations. Conservation efforts in the twentieth century helped restore bison numbers, symbolizing resilience and recovery.",
   "blanks": [
    {
     "index": 0,
     "prefix": "commu",
     "answer": "nities",
     "word": "communities",
     "slots": 6,
     "marker": "commu_ _ _ _ _ _ ",
     "start": 189,
     "end": 206
    },
    {
     "index": 1,
     "prefix": "o",
     "answer": "n",
     "word": "on",
     "slots": 1,
     "marker": "o_ ",
     "start": 213,
     "end": 216
    },
    {
     "index": 2,
     "prefix": "f",
     "answer": "or",
     "word": "for",
     "slots": 2,
     "marker": "f_ _ ",
     "start": 222,
     "end": 227
    },
    {
     "index": 3,
     "prefix": "clot",
     "answer": "hing",
     "word": "clothing",
     "slots": 4,
     "marker": "clot_ _ _ _ ",
     "start": 233,
     "end": 245
    },
    {
     "index": 4,
     "prefix": "she",
     "answer": "lter",
     "word": "shelter",
     "slots": 4,
     "marker": "she_ _ _ _ ",
     "start": 251,
     "end": 262
    },
    {
     "index": 5,
     "prefix": "prac",
     "answer": "tices",
     "word": "practices",
     "slots": 5,
     "marker": "prac_ _ _ _ _ ",
     "start": 272,
     "end": 286
    },
    {
     "index": 6,
     "prefix": "of",
     "answer": "ten",
     "word": "often",
     "slots": 3,
     "marker": "of_ _ _ ",
     "start": 291,
     "end": 299
    },
    {
     "index": 7,
     "prefix": "invo",
     "answer": "lving",
     "word": "involving",
     "slots": 5,
     "marker": "invo_ _ _ _ _ ",
     "start": 314,
     "end": 328
    },
    {
     "index": 8,
     "prefix": "eff",
     "answer": "orts",
     "word": "efforts",
     "slots": 4,
     "marker": "eff_ _ _ _ ",
     "start": 340,
     "end": 351
    },
    {
     "index": 9,
     "prefix": "dr",
     "answer": "ive",
     "word": "drive",
     "slots": 3,
     "marker": "dr_ _ _ ",
     "start": 354,
     "end": 362
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "生命科学",
    "bison"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-084",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "生命科学",
   "topic": "respiratory system",
   "difficulty": "简单",
   "passage": "The respiratory system is essential for delivering oxygen to the body's cells and removing carbon dioxide. In hum_ _ _ , air ent_ _ _ through t_ _ nose o_ mouth. Inco_ _ _ _ air ge_ _ warmed u_ and bec_ _ _ _ moist wh_ _ _ it tra_ _ _ _ in the nasal passages. Dust and other particles are also filtered out. Then the air goes down the trachea and reaches the lungs. Within the lungs, tiny air sacs shaped like balloons facilitate the exchange of gases with the bloodstream. This process is crucial for cellular respiration, which provides energy for bodily functions.",
   "blanks": [
    {
     "index": 0,
     "prefix": "hum",
     "answer": "ans",
     "word": "humans",
     "slots": 3,
     "marker": "hum_ _ _ ",
     "start": 110,
     "end": 119
    },
    {
     "index": 1,
     "prefix": "ent",
     "answer": "ers",
     "word": "enters",
     "slots": 3,
     "marker": "ent_ _ _ ",
     "start": 125,
     "end": 134
    },
    {
     "index": 2,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "marker": "t_ _ ",
     "start": 142,
     "end": 147
    },
    {
     "index": 3,
     "prefix": "o",
     "answer": "r",
     "word": "or",
     "slots": 1,
     "marker": "o_ ",
     "start": 152,
     "end": 155
    },
    {
     "index": 4,
     "prefix": "Inco",
     "answer": "ming",
     "word": "Incoming",
     "slots": 4,
     "marker": "Inco_ _ _ _ ",
     "start": 162,
     "end": 174
    },
    {
     "index": 5,
     "prefix": "ge",
     "answer": "ts",
     "word": "gets",
     "slots": 2,
     "marker": "ge_ _ ",
     "start": 178,
     "end": 184
    },
    {
     "index": 6,
     "prefix": "u",
     "answer": "p",
     "word": "up",
     "slots": 1,
     "marker": "u_ ",
     "start": 191,
     "end": 194
    },
    {
     "index": 7,
     "prefix": "bec",
     "answer": "omes",
     "word": "becomes",
     "slots": 4,
     "marker": "bec_ _ _ _ ",
     "start": 198,
     "end": 209
    },
    {
     "index": 8,
     "prefix": "wh",
     "answer": "ile",
     "word": "while",
     "slots": 3,
     "marker": "wh_ _ _ ",
     "start": 215,
     "end": 223
    },
    {
     "index": 9,
     "prefix": "tra",
     "answer": "vels",
     "word": "travels",
     "slots": 4,
     "marker": "tra_ _ _ _ ",
     "start": 226,
     "end": 237
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "生命科学",
    "respiratory system"
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
   "id": "真题-088",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "社会科学",
   "topic": "logical reasoning",
   "difficulty": "中等",
   "passage": "Logical reasoning is a cornerstone of academic methodology, providing a structured approach to analyzing arguments and evidence. Deductive reas_ _ _ _ _ starts wi_ _ general princ_ _ _ _ _ and der_ _ _ _ specific concl_ _ _ _ _ _ , while indu_ _ _ _ _ thinking invo_ _ _ _ drawing br_ _ _ generalizations fr_ _ specific observ_ _ _ _ _ _. Critical thinking skills enable scholars to identify logical fallacies, assess the credibility of sources, and construct coherent arguments. The application of logic extends across disciplines, from mathematics to philosophy to the natural sciences. Developing proficiency in logical reasoning enhances the ability to solve complex problems and communicate effectively, fostering intellectual rigor and innovation.",
   "blanks": [
    {
     "index": 0,
     "prefix": "reas",
     "answer": "oning",
     "word": "reasoning",
     "slots": 5,
     "marker": "reas_ _ _ _ _ ",
     "start": 139,
     "end": 153
    },
    {
     "index": 1,
     "prefix": "wi",
     "answer": "th",
     "word": "with",
     "slots": 2,
     "marker": "wi_ _ ",
     "start": 160,
     "end": 166
    },
    {
     "index": 2,
     "prefix": "princ",
     "answer": "iples",
     "word": "principles",
     "slots": 5,
     "marker": "princ_ _ _ _ _ ",
     "start": 174,
     "end": 189
    },
    {
     "index": 3,
     "prefix": "der",
     "answer": "ives",
     "word": "derives",
     "slots": 4,
     "marker": "der_ _ _ _ ",
     "start": 193,
     "end": 204
    },
    {
     "index": 4,
     "prefix": "concl",
     "answer": "usions",
     "word": "conclusions",
     "slots": 6,
     "marker": "concl_ _ _ _ _ _ ",
     "start": 213,
     "end": 230
    },
    {
     "index": 5,
     "prefix": "indu",
     "answer": "ctive",
     "word": "inductive",
     "slots": 5,
     "marker": "indu_ _ _ _ _ ",
     "start": 238,
     "end": 252
    },
    {
     "index": 6,
     "prefix": "invo",
     "answer": "lves",
     "word": "involves",
     "slots": 4,
     "marker": "invo_ _ _ _ ",
     "start": 261,
     "end": 273
    },
    {
     "index": 7,
     "prefix": "br",
     "answer": "oad",
     "word": "broad",
     "slots": 3,
     "marker": "br_ _ _ ",
     "start": 281,
     "end": 289
    },
    {
     "index": 8,
     "prefix": "fr",
     "answer": "om",
     "word": "from",
     "slots": 2,
     "marker": "fr_ _ ",
     "start": 305,
     "end": 311
    },
    {
     "index": 9,
     "prefix": "observ",
     "answer": "ations",
     "word": "observations",
     "slots": 6,
     "marker": "observ_ _ _ _ _ _",
     "start": 320,
     "end": 337
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "社会科学",
    "logical reasoning"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-089",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "生命科学",
   "topic": "mushrooms",
   "difficulty": "简单",
   "passage": "Mushrooms are made up of two main parts: the mycelium and the fruiting body. The mycelium i_ long-lived, wh_ _ _ the fruiting body app_ _ _ _ only wh_ _ conditions a_ _ ideal f_ _ reproduction (li_ _ after ra_ _ ). Usually under_ _ _ _ _ _ , the mycelium cons_ _ _ _ of a network of thread-like structures that absorb nutrients from the soil. The fruiting body is above ground and responsible for producing and spreading spores. These spores are released into the air to help the mushroom reproduce.",
   "blanks": [
    {
     "index": 0,
     "prefix": "i",
     "answer": "s",
     "word": "is",
     "slots": 1,
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
     "marker": "cons_ _ _ _ ",
     "start": 255,
     "end": 267
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "生命科学",
    "mushrooms"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-090",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "社会科学",
   "topic": "archaeology",
   "difficulty": "中等",
   "passage": "Archaeology is the study of past human cultures through the excavation and analysis of artifacts, structures, and other physical remains. This disci_ _ _ _ _ helps unc_ _ _ _ the da_ _ _ lives, bel_ _ _ _ , and techno_ _ _ _ _ _ of anc_ _ _ _ civilizations. Archaeo_ _ _ _ _ _ _ often wo_ _ at dig si_ _ , carefully unear_ _ _ _ _ and documenting finds. Techniques such as carbon dating and soil analysis provide information about the age and context of discoveries. Collaborative efforts with historians and anthropologists enrich our understanding of past civilizations, revealing information about their religious practices, the tools they used, and many other aspects of how they lived.",
   "blanks": [
    {
     "index": 0,
     "prefix": "disci",
     "answer": "pline",
     "word": "discipline",
     "slots": 5,
     "marker": "disci_ _ _ _ _ ",
     "start": 143,
     "end": 158
    },
    {
     "index": 1,
     "prefix": "unc",
     "answer": "over",
     "word": "uncover",
     "slots": 4,
     "marker": "unc_ _ _ _ ",
     "start": 164,
     "end": 175
    },
    {
     "index": 2,
     "prefix": "da",
     "answer": "ily",
     "word": "daily",
     "slots": 3,
     "marker": "da_ _ _ ",
     "start": 179,
     "end": 187
    },
    {
     "index": 3,
     "prefix": "bel",
     "answer": "iefs",
     "word": "beliefs",
     "slots": 4,
     "marker": "bel_ _ _ _ ",
     "start": 194,
     "end": 205
    },
    {
     "index": 4,
     "prefix": "techno",
     "answer": "logies",
     "word": "technologies",
     "slots": 6,
     "marker": "techno_ _ _ _ _ _ ",
     "start": 211,
     "end": 229
    },
    {
     "index": 5,
     "prefix": "anc",
     "answer": "ient",
     "word": "ancient",
     "slots": 4,
     "marker": "anc_ _ _ _ ",
     "start": 232,
     "end": 243
    },
    {
     "index": 6,
     "prefix": "Archaeo",
     "answer": "logists",
     "word": "Archaeologists",
     "slots": 7,
     "marker": "Archaeo_ _ _ _ _ _ _ ",
     "start": 258,
     "end": 279
    },
    {
     "index": 7,
     "prefix": "wo",
     "answer": "rk",
     "word": "work",
     "slots": 2,
     "marker": "wo_ _ ",
     "start": 285,
     "end": 291
    },
    {
     "index": 8,
     "prefix": "si",
     "answer": "tes",
     "word": "sites",
     "slots": 3,
     "marker": "si_ _ ",
     "start": 298,
     "end": 304
    },
    {
     "index": 9,
     "prefix": "unear",
     "answer": "thing",
     "word": "unearthing",
     "slots": 5,
     "marker": "unear_ _ _ _ _ ",
     "start": 316,
     "end": 331
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "社会科学",
    "archaeology"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-091",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "社会科学",
   "topic": "microfinance",
   "difficulty": "困难",
   "passage": "The concept of microfinance has transformed the way people access financial services. Microfinance institutions provide small loans to individuals or groups who lack access to traditional banking. These loans empower recip_ _ _ _ _ to st_ _ _ or exp_ _ _ small busin_ _ _ _ _ , improving th_ _ _ living condi_ _ _ _ _ and commu_ _ _ _ _ _ . By encou_ _ _ _ _ _ financial lite_ _ _ _ and adva_ _ _ _ _ financial inclusion, microfinance helps reduce poverty, foster economic development, and build long-term stability at the grassroots level. Understanding this system helps design effective financial inclusion strategies.",
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
     "marker": "commu_ _ _ _ _ _ ",
     "start": 322,
     "end": 339
    },
    {
     "index": 7,
     "prefix": "encou",
     "answer": "raging",
     "word": "encouraging",
     "slots": 6,
     "marker": "encou_ _ _ _ _ _ ",
     "start": 344,
     "end": 361
    },
    {
     "index": 8,
     "prefix": "lite",
     "answer": "racy",
     "word": "literacy",
     "slots": 4,
     "marker": "lite_ _ _ _ ",
     "start": 371,
     "end": 383
    },
    {
     "index": 9,
     "prefix": "adva",
     "answer": "ncing",
     "word": "advancing",
     "slots": 5,
     "marker": "adva_ _ _ _ _ ",
     "start": 387,
     "end": 401
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "社会科学",
    "microfinance"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-092",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "生命科学",
   "topic": "ravens",
   "difficulty": "简单",
   "passage": "Ravens are highly intelligent birds known for their problem-solving abilities and complex social behaviors. They u_ _ tools, su_ _ as sti_ _ _ , to obt_ _ _ food a_ _ have be_ _ observed enga_ _ _ _ in pla_ _ _ _ behaviors li_ _ sliding o_ snow. Ravens communicate with a wide range of vocalizations, conveying different messages to their peers. Their adaptability allows them to thrive in various environments, from forests to urban areas. Studying raven behavior provides insights into avian intelligence and the evolutionary mechanisms that support cognitive development.",
   "blanks": [
    {
     "index": 0,
     "prefix": "u",
     "answer": "se",
     "word": "use",
     "slots": 2,
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
     "marker": "sti_ _ _ ",
     "start": 134,
     "end": 143
    },
    {
     "index": 3,
     "prefix": "obt",
     "answer": "ain",
     "word": "obtain",
     "slots": 3,
     "marker": "obt_ _ _ ",
     "start": 148,
     "end": 157
    },
    {
     "index": 4,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 162,
     "end": 167
    },
    {
     "index": 5,
     "prefix": "be",
     "answer": "en",
     "word": "been",
     "slots": 2,
     "marker": "be_ _ ",
     "start": 172,
     "end": 178
    },
    {
     "index": 6,
     "prefix": "enga",
     "answer": "ging",
     "word": "engaging",
     "slots": 4,
     "marker": "enga_ _ _ _ ",
     "start": 187,
     "end": 199
    },
    {
     "index": 7,
     "prefix": "pla",
     "answer": "yful",
     "word": "playful",
     "slots": 4,
     "marker": "pla_ _ _ _ ",
     "start": 202,
     "end": 213
    },
    {
     "index": 8,
     "prefix": "li",
     "answer": "ke",
     "word": "like",
     "slots": 2,
     "marker": "li_ _ ",
     "start": 223,
     "end": 229
    },
    {
     "index": 9,
     "prefix": "o",
     "answer": "n",
     "word": "on",
     "slots": 1,
     "marker": "o_ ",
     "start": 237,
     "end": 240
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "生命科学",
    "ravens"
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
   "id": "真题-094",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "自然科学",
   "topic": "Earth's axis",
   "difficulty": "简单",
   "passage": "Our planet's axis is tilted at an angle of about 23.5 degrees as it orbits the Sun. A_ a res_ _ _ , the amo_ _ _ of sun_ _ _ _ _ that hi_ _ different pa_ _ _ of Ea_ _ _ is n_ _ all t_ _ same, crea_ _ _ _ seasons. When the Sun shines directly on a region, that region tends to have higher temperatures and longer days. The changing seasons affect many aspects of life, including agriculture, wildlife behavior, and human activities.",
   "blanks": [
    {
     "index": 0,
     "prefix": "A",
     "answer": "s",
     "word": "As",
     "slots": 1,
     "marker": "A_ ",
     "start": 84,
     "end": 87
    },
    {
     "index": 1,
     "prefix": "res",
     "answer": "ult",
     "word": "result",
     "slots": 3,
     "marker": "res_ _ _ ",
     "start": 89,
     "end": 98
    },
    {
     "index": 2,
     "prefix": "amo",
     "answer": "unt",
     "word": "amount",
     "slots": 3,
     "marker": "amo_ _ _ ",
     "start": 104,
     "end": 113
    },
    {
     "index": 3,
     "prefix": "sun",
     "answer": "light",
     "word": "sunlight",
     "slots": 5,
     "marker": "sun_ _ _ _ _ ",
     "start": 116,
     "end": 129
    },
    {
     "index": 4,
     "prefix": "hi",
     "answer": "ts",
     "word": "hits",
     "slots": 2,
     "marker": "hi_ _ ",
     "start": 134,
     "end": 140
    },
    {
     "index": 5,
     "prefix": "pa",
     "answer": "rts",
     "word": "parts",
     "slots": 3,
     "marker": "pa_ _ _ ",
     "start": 150,
     "end": 158
    },
    {
     "index": 6,
     "prefix": "Ea",
     "answer": "rth",
     "word": "Earth",
     "slots": 3,
     "marker": "Ea_ _ _ ",
     "start": 161,
     "end": 169
    },
    {
     "index": 7,
     "prefix": "n",
     "answer": "ot",
     "word": "not",
     "slots": 2,
     "marker": "n_ _ ",
     "start": 172,
     "end": 177
    },
    {
     "index": 8,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "marker": "t_ _ ",
     "start": 181,
     "end": 186
    },
    {
     "index": 9,
     "prefix": "crea",
     "answer": "ting",
     "word": "creating",
     "slots": 4,
     "marker": "crea_ _ _ _ ",
     "start": 192,
     "end": 204
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "自然科学",
    "Earth's axis"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-095",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "社会科学",
   "topic": "bicycle",
   "difficulty": "简单",
   "passage": "The earliest ancestor of the modern bicycle is probably a machine used in England in the early 1800s called a hobbyhorse. It h_ _ two whe_ _ _ and a pl_ _ _ _ to s_ _, but n_ pedals; rid_ _ _ would pu_ _ it al_ _ _ with th_ _ _ feet. La_ _ _, an inventor added pedals directly to the front wheel, like a modern child's tricycle. This version, with a huge front wheel, was faster, but it was unsafe. Riders were high off the ground, and the two wheels were close together, making both balance and stopping difficult.",
   "blanks": [
    {
     "index": 0,
     "prefix": "h",
     "answer": "ad",
     "word": "had",
     "slots": 2,
     "marker": "h_ _ ",
     "start": 125,
     "end": 130
    },
    {
     "index": 1,
     "prefix": "whe",
     "answer": "els",
     "word": "wheels",
     "slots": 3,
     "marker": "whe_ _ _ ",
     "start": 134,
     "end": 143
    },
    {
     "index": 2,
     "prefix": "pl",
     "answer": "aces",
     "word": "places",
     "slots": 4,
     "marker": "pl_ _ _ _ ",
     "start": 149,
     "end": 159
    },
    {
     "index": 3,
     "prefix": "s",
     "answer": "it",
     "word": "sit",
     "slots": 2,
     "marker": "s_ _",
     "start": 162,
     "end": 166
    },
    {
     "index": 4,
     "prefix": "n",
     "answer": "o",
     "word": "no",
     "slots": 1,
     "marker": "n_ ",
     "start": 172,
     "end": 175
    },
    {
     "index": 5,
     "prefix": "rid",
     "answer": "ers",
     "word": "riders",
     "slots": 3,
     "marker": "rid_ _ _ ",
     "start": 183,
     "end": 192
    },
    {
     "index": 6,
     "prefix": "pu",
     "answer": "sh",
     "word": "push",
     "slots": 2,
     "marker": "pu_ _ ",
     "start": 198,
     "end": 204
    },
    {
     "index": 7,
     "prefix": "al",
     "answer": "ong",
     "word": "along",
     "slots": 3,
     "marker": "al_ _ _ ",
     "start": 207,
     "end": 215
    },
    {
     "index": 8,
     "prefix": "th",
     "answer": "eir",
     "word": "their",
     "slots": 3,
     "marker": "th_ _ _ ",
     "start": 220,
     "end": 228
    },
    {
     "index": 9,
     "prefix": "La",
     "answer": "ter",
     "word": "Later",
     "slots": 3,
     "marker": "La_ _ _",
     "start": 234,
     "end": 241
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "社会科学",
    "bicycle"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-096",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "社会科学",
   "topic": "sanitation",
   "difficulty": "困难",
   "passage": "The introduction of sanitation practices in urban areas during the nineteenth century significantly improved public health. Innovations such as sew_ _ _ systems a_ _ clean wa_ _ _ supplies deve_ _ _ _ _ from t_ _ growing awar_ _ _ _ _ of the conne_ _ _ _ _ between po_ _ hygiene and ill_ _ _ _ , and reduced the spr_ _ _ of infectious diseases like cholera and typhoid. Public health campaigns, supported by local governments and medical professionals, educated communities on the importance of hygiene. These efforts were instrumental in decreasing mortality rates and enhancing quality of life.",
   "blanks": [
    {
     "index": 0,
     "prefix": "sew",
     "answer": "age",
     "word": "sewage",
     "slots": 3,
     "marker": "sew_ _ _ ",
     "start": 144,
     "end": 153
    },
    {
     "index": 1,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 161,
     "end": 166
    },
    {
     "index": 2,
     "prefix": "wa",
     "answer": "ter",
     "word": "water",
     "slots": 3,
     "marker": "wa_ _ _ ",
     "start": 172,
     "end": 180
    },
    {
     "index": 3,
     "prefix": "deve",
     "answer": "loped",
     "word": "developed",
     "slots": 5,
     "marker": "deve_ _ _ _ _ ",
     "start": 189,
     "end": 203
    },
    {
     "index": 4,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "marker": "t_ _ ",
     "start": 208,
     "end": 213
    },
    {
     "index": 5,
     "prefix": "awar",
     "answer": "eness",
     "word": "awareness",
     "slots": 5,
     "marker": "awar_ _ _ _ _ ",
     "start": 221,
     "end": 235
    },
    {
     "index": 6,
     "prefix": "conne",
     "answer": "ction",
     "word": "connection",
     "slots": 5,
     "marker": "conne_ _ _ _ _ ",
     "start": 242,
     "end": 257
    },
    {
     "index": 7,
     "prefix": "po",
     "answer": "or",
     "word": "poor",
     "slots": 2,
     "marker": "po_ _ ",
     "start": 265,
     "end": 271
    },
    {
     "index": 8,
     "prefix": "ill",
     "answer": "ness",
     "word": "illness",
     "slots": 4,
     "marker": "ill_ _ _ _ ",
     "start": 283,
     "end": 294
    },
    {
     "index": 9,
     "prefix": "spr",
     "answer": "ead",
     "word": "spread",
     "slots": 3,
     "marker": "spr_ _ _ ",
     "start": 312,
     "end": 321
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "社会科学",
    "sanitation"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-097",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "自然科学",
   "topic": "Europa",
   "difficulty": "中等",
   "passage": "The discovery of water and volcanic activity on moons like Europa and Enceladus has sparked interest in the potential for extraterrestrial life. These moons, orbi_ _ _ _ the pla_ _ _ _ Jupiter a_ _ Saturn, ha_ _ ice-covered surf_ _ _ _ with oce_ _ _ lying under_ _ _ _ _ . Volcanic acti_ _ _ _ , in t_ _ form o_ hydrothermal vents, provides heat and nutrients, creating environments where microbial life could potentially thrive. Missions by spacecraft such as the Galileo and Cassini have gathered valuable data on these moons.",
   "blanks": [
    {
     "index": 0,
     "prefix": "orbi",
     "answer": "ting",
     "word": "orbiting",
     "slots": 4,
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
     "marker": "under_ _ _ _ _ ",
     "start": 256,
     "end": 271
    },
    {
     "index": 7,
     "prefix": "acti",
     "answer": "vity",
     "word": "activity",
     "slots": 4,
     "marker": "acti_ _ _ _ ",
     "start": 282,
     "end": 294
    },
    {
     "index": 8,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "marker": "t_ _ ",
     "start": 299,
     "end": 304
    },
    {
     "index": 9,
     "prefix": "o",
     "answer": "f",
     "word": "of",
     "slots": 1,
     "marker": "o_ ",
     "start": 309,
     "end": 312
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "自然科学",
    "Europa"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-098",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "艺术",
   "topic": "theater history",
   "difficulty": "简单",
   "passage": "Theater has been an integral part of human culture for centuries, providing a medium for storytelling and artistic expression. Many feat_ _ _ _ of Anc_ _ _ _ Greek theater a_ _ still fo_ _ _ in mod_ _ _ theater, such a_ wearing ma_ _ _ and us_ _ _ a chorus. Dur_ _ _ the Renaissance, theater flour_ _ _ _ _ as playwrights, like Shakespeare, created enduring works. Modern theater continues to evolve, incorporating technology and diverse narratives. The communal experience of live performance remains a powerful way to explore human emotions and societal issues.",
   "blanks": [
    {
     "index": 0,
     "prefix": "feat",
     "answer": "ures",
     "word": "features",
     "slots": 4,
     "marker": "feat_ _ _ _ ",
     "start": 132,
     "end": 144
    },
    {
     "index": 1,
     "prefix": "Anc",
     "answer": "ient",
     "word": "Ancient",
     "slots": 4,
     "marker": "Anc_ _ _ _ ",
     "start": 147,
     "end": 158
    },
    {
     "index": 2,
     "prefix": "a",
     "answer": "re",
     "word": "are",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 172,
     "end": 177
    },
    {
     "index": 3,
     "prefix": "fo",
     "answer": "und",
     "word": "found",
     "slots": 3,
     "marker": "fo_ _ _ ",
     "start": 183,
     "end": 191
    },
    {
     "index": 4,
     "prefix": "mod",
     "answer": "ern",
     "word": "modern",
     "slots": 3,
     "marker": "mod_ _ _ ",
     "start": 194,
     "end": 203
    },
    {
     "index": 5,
     "prefix": "a",
     "answer": "s",
     "word": "as",
     "slots": 1,
     "marker": "a_ ",
     "start": 217,
     "end": 220
    },
    {
     "index": 6,
     "prefix": "ma",
     "answer": "sks",
     "word": "masks",
     "slots": 3,
     "marker": "ma_ _ _ ",
     "start": 228,
     "end": 236
    },
    {
     "index": 7,
     "prefix": "us",
     "answer": "ing",
     "word": "using",
     "slots": 3,
     "marker": "us_ _ _ ",
     "start": 240,
     "end": 248
    },
    {
     "index": 8,
     "prefix": "Dur",
     "answer": "ing",
     "word": "During",
     "slots": 3,
     "marker": "Dur_ _ _ ",
     "start": 258,
     "end": 267
    },
    {
     "index": 9,
     "prefix": "flour",
     "answer": "ished",
     "word": "flourished",
     "slots": 5,
     "marker": "flour_ _ _ _ _ ",
     "start": 292,
     "end": 307
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "艺术",
    "theater history"
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
   "id": "真题-104",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "社会科学",
   "topic": "urbanization",
   "difficulty": "中等",
   "passage": "During the late nineteenth and early twentieth centuries, the landscape of North American urban centers underwent dramatic transformations as industrialization accelerated. Cities expanded rap_ _ _ _, fueled b_ the arr_ _ _ _ of immig_ _ _ _ _ and ru_ _ _ populations see_ _ _ _ employment i_ factories. This dyn_ _ _ _ era witn_ _ _ _ _ the ri_ _ of skyscrapers, symbolizing progress and technological triumph. Architects and planners grappled with the challenges posed by such quick growth, including overcrowding and sanitation issues. Public transit systems, like streetcars, emerged as pivotal solutions to urban congestion, altering the rhythm of daily life.",
   "blanks": [
    {
     "index": 0,
     "prefix": "rap",
     "answer": "idly",
     "word": "rapidly",
     "slots": 4,
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
     "marker": "ri_ _ ",
     "start": 342,
     "end": 348
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "社会科学",
    "urbanization"
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
   "id": "真题-106",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "艺术",
   "topic": "art history",
   "difficulty": "中等",
   "passage": "In the world of academia, art history is more than just studying paintings—it is about decoding the emotional language of visual storytelling. For example, chiaroscuro is a tech_ _ _ _ _ that origi_ _ _ _ _ during t_ _ Renaissance. Exemp_ _ _ _ _ _ by str_ _ _ contrast bet_ _ _ _ light a_ _ shadow, the st_ _ _ evokes dr_ _ _ through sele_ _ _ _ _ illumination. Artists like Caravaggio mastered this interplay, using it to pull viewers into the heart of his scenes, guiding their eyes and stirring their emotions with every flicker of light.",
   "blanks": [
    {
     "index": 0,
     "prefix": "tech",
     "answer": "nique",
     "word": "technique",
     "slots": 5,
     "marker": "tech_ _ _ _ _ ",
     "start": 173,
     "end": 187
    },
    {
     "index": 1,
     "prefix": "origi",
     "answer": "nated",
     "word": "originated",
     "slots": 5,
     "marker": "origi_ _ _ _ _ ",
     "start": 192,
     "end": 207
    },
    {
     "index": 2,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "marker": "t_ _ ",
     "start": 214,
     "end": 219
    },
    {
     "index": 3,
     "prefix": "Exemp",
     "answer": "lified",
     "word": "Exemplified",
     "slots": 6,
     "marker": "Exemp_ _ _ _ _ _ ",
     "start": 232,
     "end": 249
    },
    {
     "index": 4,
     "prefix": "str",
     "answer": "ong",
     "word": "strong",
     "slots": 3,
     "marker": "str_ _ _ ",
     "start": 252,
     "end": 261
    },
    {
     "index": 5,
     "prefix": "bet",
     "answer": "ween",
     "word": "between",
     "slots": 4,
     "marker": "bet_ _ _ _ ",
     "start": 270,
     "end": 281
    },
    {
     "index": 6,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 287,
     "end": 292
    },
    {
     "index": 7,
     "prefix": "st",
     "answer": "yle",
     "word": "style",
     "slots": 3,
     "marker": "st_ _ _ ",
     "start": 304,
     "end": 312
    },
    {
     "index": 8,
     "prefix": "dr",
     "answer": "ama",
     "word": "drama",
     "slots": 3,
     "marker": "dr_ _ _ ",
     "start": 319,
     "end": 327
    },
    {
     "index": 9,
     "prefix": "sele",
     "answer": "ctive",
     "word": "selective",
     "slots": 5,
     "marker": "sele_ _ _ _ _ ",
     "start": 335,
     "end": 349
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "艺术",
    "art history"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-107",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "社会科学",
   "topic": "environmental awareness",
   "difficulty": "困难",
   "passage": "In recent decades, environmental awareness has surged, driven largely by the visible impacts of climate change and the depletion of natural resources. As soci_ _ _ _ _ grapple wi_ _ the nece_ _ _ _ _ of susta_ _ _ _ _ _ practices, deb_ _ _ _ _ continue ov_ _ the mo_ _ effective strat_ _ _ _ _. Renewable ene_ _ _ sources, su_ _ as solar and wind power, have gained prominence as potential solutions. Nevertheless, their implementation often encounters hurdles ranging from economic feasibility to technological limitations. Moreover, the transition toward greener alternatives necessitates a paradigm shift in both consumption patterns and industrial processes.",
   "blanks": [
    {
     "index": 0,
     "prefix": "soci",
     "answer": "eties",
     "word": "societies",
     "slots": 5,
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
     "marker": "deb_ _ _ _ _ ",
     "start": 231,
     "end": 244
    },
    {
     "index": 5,
     "prefix": "ov",
     "answer": "er",
     "word": "over",
     "slots": 2,
     "marker": "ov_ _ ",
     "start": 253,
     "end": 259
    },
    {
     "index": 6,
     "prefix": "mo",
     "answer": "st",
     "word": "most",
     "slots": 2,
     "marker": "mo_ _ ",
     "start": 263,
     "end": 269
    },
    {
     "index": 7,
     "prefix": "strat",
     "answer": "egies",
     "word": "strategies",
     "slots": 5,
     "marker": "strat_ _ _ _ _",
     "start": 279,
     "end": 293
    },
    {
     "index": 8,
     "prefix": "ene",
     "answer": "rgy",
     "word": "energy",
     "slots": 3,
     "marker": "ene_ _ _ ",
     "start": 305,
     "end": 314
    },
    {
     "index": 9,
     "prefix": "su",
     "answer": "ch",
     "word": "such",
     "slots": 2,
     "marker": "su_ _ ",
     "start": 323,
     "end": 329
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "社会科学",
    "environmental awareness"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-108",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "社会科学",
   "topic": "sustainable agriculture",
   "difficulty": "中等",
   "passage": "Crop rotation is an essential practice in sustainable agriculture. Crop rotation involves the sequential plan_ _ _ _ of diff_ _ _ _ _ crops i_ the sa_ _ area acr_ _ _ various sea_ _ _ _. This tech_ _ _ _ _ significantly impr_ _ _ _ soil hea_ _ _ by divers_ _ _ _ _ _ the nutrients extracted from, and returned to, the soil. When one crop depletes certain nutrients, another crop can replenish them, creating a balanced ecosystem. This method also helps in controlling pests and diseases, as rotating crops disrupt their reproductive cycles, reducing their prevalence without the need for chemical pesticides.",
   "blanks": [
    {
     "index": 0,
     "prefix": "plan",
     "answer": "ting",
     "word": "planting",
     "slots": 4,
     "marker": "plan_ _ _ _ ",
     "start": 105,
     "end": 117
    },
    {
     "index": 1,
     "prefix": "diff",
     "answer": "erent",
     "word": "different",
     "slots": 5,
     "marker": "diff_ _ _ _ _ ",
     "start": 120,
     "end": 134
    },
    {
     "index": 2,
     "prefix": "i",
     "answer": "n",
     "word": "in",
     "slots": 1,
     "marker": "i_ ",
     "start": 140,
     "end": 143
    },
    {
     "index": 3,
     "prefix": "sa",
     "answer": "me",
     "word": "same",
     "slots": 2,
     "marker": "sa_ _ ",
     "start": 147,
     "end": 153
    },
    {
     "index": 4,
     "prefix": "acr",
     "answer": "oss",
     "word": "across",
     "slots": 3,
     "marker": "acr_ _ _ ",
     "start": 158,
     "end": 167
    },
    {
     "index": 5,
     "prefix": "sea",
     "answer": "sons",
     "word": "seasons",
     "slots": 4,
     "marker": "sea_ _ _ _",
     "start": 175,
     "end": 185
    },
    {
     "index": 6,
     "prefix": "tech",
     "answer": "nique",
     "word": "technique",
     "slots": 5,
     "marker": "tech_ _ _ _ _ ",
     "start": 192,
     "end": 206
    },
    {
     "index": 7,
     "prefix": "impr",
     "answer": "oves",
     "word": "improves",
     "slots": 4,
     "marker": "impr_ _ _ _ ",
     "start": 220,
     "end": 232
    },
    {
     "index": 8,
     "prefix": "hea",
     "answer": "lth",
     "word": "health",
     "slots": 3,
     "marker": "hea_ _ _ ",
     "start": 237,
     "end": 246
    },
    {
     "index": 9,
     "prefix": "divers",
     "answer": "ifying",
     "word": "diversifying",
     "slots": 6,
     "marker": "divers_ _ _ _ _ _ ",
     "start": 249,
     "end": 267
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "社会科学",
    "sustainable agriculture"
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
   "id": "真题-114",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "社会科学",
   "topic": "early civilization",
   "difficulty": "中等",
   "passage": "At the dawn of civilization, humans relied heavily on their natural surroundings to meet basic needs. Early humans were primarily hunters and gatherers, foraging for edible plants and hunting wild animals. This required humans to move often to find food. Over ti_ _ , they obse_ _ _ _ natural patt_ _ _ _ and be_ _ _ planting se_ _ _ , sparking t_ _ agricultural revol_ _ _ _ _ . This cha_ _ _ allowed perm_ _ _ _ _ settlements a_ _ growing communities. With larger populations came complex social structures, trade, and specialized crafts.",
   "blanks": [
    {
     "index": 0,
     "prefix": "ti",
     "answer": "me",
     "word": "time",
     "slots": 2,
     "marker": "ti_ _ ",
     "start": 260,
     "end": 266
    },
    {
     "index": 1,
     "prefix": "obse",
     "answer": "rved",
     "word": "observed",
     "slots": 4,
     "marker": "obse_ _ _ _ ",
     "start": 273,
     "end": 285
    },
    {
     "index": 2,
     "prefix": "patt",
     "answer": "erns",
     "word": "patterns",
     "slots": 4,
     "marker": "patt_ _ _ _ ",
     "start": 293,
     "end": 305
    },
    {
     "index": 3,
     "prefix": "be",
     "answer": "gan",
     "word": "began",
     "slots": 3,
     "marker": "be_ _ _ ",
     "start": 309,
     "end": 317
    },
    {
     "index": 4,
     "prefix": "se",
     "answer": "eds",
     "word": "seeds",
     "slots": 3,
     "marker": "se_ _ _ ",
     "start": 326,
     "end": 334
    },
    {
     "index": 5,
     "prefix": "t",
     "answer": "he",
     "word": "the",
     "slots": 2,
     "marker": "t_ _ ",
     "start": 345,
     "end": 350
    },
    {
     "index": 6,
     "prefix": "revol",
     "answer": "ution",
     "word": "revolution",
     "slots": 5,
     "marker": "revol_ _ _ _ _ ",
     "start": 363,
     "end": 378
    },
    {
     "index": 7,
     "prefix": "cha",
     "answer": "nge",
     "word": "change",
     "slots": 3,
     "marker": "cha_ _ _ ",
     "start": 385,
     "end": 394
    },
    {
     "index": 8,
     "prefix": "perm",
     "answer": "anent",
     "word": "permanent",
     "slots": 5,
     "marker": "perm_ _ _ _ _ ",
     "start": 402,
     "end": 416
    },
    {
     "index": 9,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 428,
     "end": 433
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "社会科学",
    "early civilization"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-115",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "社会科学",
   "topic": "Mughal Empire",
   "difficulty": "困难",
   "passage": "The Mughal Empire, which ruled much of South Asia from 1526 to 1857, was a powerful Islamic dynasty known for its administrative sophistication and cultural patronage. Mughal paintings, particularly miniature illustrations, blended Persian, Indian, and Central Asian artistic traditions. These sm_ _ _ works, commis_ _ _ _ _ _ by Mughal empe_ _ _ _ , often depi_ _ _ _ royal li_ _ , historical eve_ _ _ , and sce_ _ _ from myth_ _ _ _ _ with remar_ _ _ _ _ detail a_ _ realism. As court-sponsored art, they reflected imperial wealth, political authority, and cross-cultural exchange, serving both aesthetic and documentary purposes within a thriving economy supported by trade, agriculture, and centralized governance.",
   "blanks": [
    {
     "index": 0,
     "prefix": "sm",
     "answer": "all",
     "word": "small",
     "slots": 3,
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
     "marker": "empe_ _ _ _ ",
     "start": 337,
     "end": 349
    },
    {
     "index": 3,
     "prefix": "depi",
     "answer": "cted",
     "word": "depicted",
     "slots": 4,
     "marker": "depi_ _ _ _ ",
     "start": 357,
     "end": 369
    },
    {
     "index": 4,
     "prefix": "li",
     "answer": "fe",
     "word": "life",
     "slots": 2,
     "marker": "li_ _ ",
     "start": 375,
     "end": 381
    },
    {
     "index": 5,
     "prefix": "eve",
     "answer": "nts",
     "word": "events",
     "slots": 3,
     "marker": "eve_ _ _ ",
     "start": 394,
     "end": 403
    },
    {
     "index": 6,
     "prefix": "sce",
     "answer": "nes",
     "word": "scenes",
     "slots": 3,
     "marker": "sce_ _ _ ",
     "start": 409,
     "end": 418
    },
    {
     "index": 7,
     "prefix": "myth",
     "answer": "ology",
     "word": "mythology",
     "slots": 5,
     "marker": "myth_ _ _ _ _ ",
     "start": 423,
     "end": 437
    },
    {
     "index": 8,
     "prefix": "remar",
     "answer": "kable",
     "word": "remarkable",
     "slots": 5,
     "marker": "remar_ _ _ _ _ ",
     "start": 442,
     "end": 457
    },
    {
     "index": 9,
     "prefix": "a",
     "answer": "nd",
     "word": "and",
     "slots": 2,
     "marker": "a_ _ ",
     "start": 464,
     "end": 469
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "社会科学",
    "Mughal Empire"
   ],
   "status": "active",
   "blankCount": 10
  },
  {
   "id": "真题-116",
   "month": "1-7月合集",
   "source": "1-7月真题",
   "type": "complete_words",
   "instruction": "Fill in the missing letters in the paragraph.",
   "title": "",
   "discipline": "社会科学",
   "topic": "nature and nurture",
   "difficulty": "中等",
   "passage": "We are exquisitely sensitive to our surroundings, and environment plays a critical role in the development of a child's brain. But wh_ _ happens on_ _ we've rea_ _ _ _ adulthood? C_ _ the br_ _ _ still und_ _ _ _ the ki_ _ _ of cha_ _ _ _ it d_ _ when w_ were younger? By the time we are twenty-five years old, the brain transformations of childhood are finally over and our brain appears to be fully developed. You might think that who we are as adults is then fixed in place, immovable. But it's not: in adulthood our brains continue to change.",
   "blanks": [
    {
     "index": 0,
     "prefix": "wh",
     "answer": "at",
     "word": "what",
     "slots": 2,
     "marker": "wh_ _ ",
     "start": 131,
     "end": 137
    },
    {
     "index": 1,
     "prefix": "on",
     "answer": "ce",
     "word": "once",
     "slots": 2,
     "marker": "on_ _ ",
     "start": 145,
     "end": 151
    },
    {
     "index": 2,
     "prefix": "rea",
     "answer": "ched",
     "word": "reached",
     "slots": 4,
     "marker": "rea_ _ _ _ ",
     "start": 157,
     "end": 168
    },
    {
     "index": 3,
     "prefix": "C",
     "answer": "an",
     "word": "Can",
     "slots": 2,
     "marker": "C_ _ ",
     "start": 179,
     "end": 184
    },
    {
     "index": 4,
     "prefix": "br",
     "answer": "ain",
     "word": "brain",
     "slots": 3,
     "marker": "br_ _ _ ",
     "start": 188,
     "end": 196
    },
    {
     "index": 5,
     "prefix": "und",
     "answer": "ergo",
     "word": "undergo",
     "slots": 4,
     "marker": "und_ _ _ _ ",
     "start": 202,
     "end": 213
    },
    {
     "index": 6,
     "prefix": "ki",
     "answer": "nds",
     "word": "kinds",
     "slots": 3,
     "marker": "ki_ _ _ ",
     "start": 217,
     "end": 225
    },
    {
     "index": 7,
     "prefix": "cha",
     "answer": "nges",
     "word": "changes",
     "slots": 4,
     "marker": "cha_ _ _ _ ",
     "start": 228,
     "end": 239
    },
    {
     "index": 8,
     "prefix": "d",
     "answer": "id",
     "word": "did",
     "slots": 2,
     "marker": "d_ _ ",
     "start": 242,
     "end": 247
    },
    {
     "index": 9,
     "prefix": "w",
     "answer": "e",
     "word": "we",
     "slots": 1,
     "marker": "w_ ",
     "start": 252,
     "end": 255
    }
   ],
   "translation": "",
   "analysis": [],
   "tags": [
    "真题",
    "1-7月",
    "社会科学",
    "nature and nurture"
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
   "blankCount": 0
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
