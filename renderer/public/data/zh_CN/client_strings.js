// @ts-check
/** @type{import('../../../src/assets/data/interfaces').TranslationDict} */
export default {
  RARITY_NORMAL: '普通',
  RARITY_MAGIC: '魔法',
  RARITY_RARE: '稀有',
  RARITY_UNIQUE: '传奇',
  RARITY_GEM: '宝石',
  RARITY_CURRENCY: '通货',
  RARITY_DIVCARD: '命运卡',
  RARITY_QUEST: '任务',
  MAP_TIER: '地图阶级: ',
  RARITY: '稀 有 度: ',
  ITEM_CLASS: '物品类别: ',
  ITEM_LEVEL: '物品等级: ',
  TALISMAN_TIER: '魔符等级: ',
  GEM_LEVEL: '等级: ',
  STACK_SIZE: '堆叠数量: ',
  SOCKETS: '插槽: ',
  QUALITY: '品质: ',
  PHYSICAL_DAMAGE: '物理伤害: ',
  ELEMENTAL_DAMAGE: '火焰，冰霜，闪电伤害: ',
  CRIT_CHANCE: '攻击暴击率: ',
  ATTACK_SPEED: '每秒攻击次数: ',
  ARMOUR: '护甲: ',
  EVASION: '闪避值: ',
  ENERGY_SHIELD: '能量护盾: ',
  TAG_WARD: '结界: ',
  BLOCK_CHANCE: '格挡几率: ',
  CORRUPTED: '已腐化',
  UNIDENTIFIED: '未鉴定',
  ITEM_SUPERIOR: /^精良的 (.*)$/,
  MAP_BLIGHTED: /^菌潮 (.*)$/,
  MAP_BLIGHT_RAVAGED: /^菌潮灭绝 (.*)$/,
  INFLUENCE_SHAPER: '塑界之器',
  INFLUENCE_ELDER: '裂界之器',
  INFLUENCE_CRUSADER: '圣战者物品',
  INFLUENCE_HUNTER: '狩猎者物品',
  INFLUENCE_REDEEMER: '救赎者物品',
  INFLUENCE_WARLORD: '督军物品',
  SECTION_SYNTHESISED: '忆境物品',
  ITEM_SYNTHESISED: /^忆境 (.*)$/,
  VEILED_PREFIX: '影匿前缀',
  VEILED_SUFFIX: '影匿后缀',
  FLASK_CHARGES: /^目前有 \d+ 充能次数$/,
  METAMORPH_HELP: '在丹恩的试验室里同其它四种样本调和。',
  BEAST_HELP: '右键点击后加入你的猎魔笔记。',
  VOIDSTONE_HELP: '將此放置于异界图鉴中，來增加地图等级和解锁隐藏地图。',
  METAMORPH_BRAIN: /^.*的中枢$/,
  METAMORPH_EYE: /^.*的视界$/,
  METAMORPH_LUNG: /^.*的呼吸$/,
  METAMORPH_HEART: /^.*的核心$/,
  METAMORPH_LIVER: /^.*的转化$/,
  CANNOT_USE_ITEM: '你无法使用这项装备, 它的数值将被忽略',
  QUALITY_ANOMALOUS: /^异常 (.*)$/,
  QUALITY_DIVERGENT: /^分歧 (.*)$/,
  QUALITY_PHANTASMAL: /^魅影 (.*)$/,
  AREA_LEVEL: '地区等级: ',
  HEIST_WINGS_REVEALED: '发现的侧厅: ',
  HEIST_TARGET: '赏金目标：',
  HEIST_BLUEPRINT_ENCHANTS: '附魔军备',
  HEIST_BLUEPRINT_TRINKETS: '赏金猎人配饰或通货物品',
  HEIST_BLUEPRINT_GEMS: '不寻常的宝石',
  HEIST_BLUEPRINT_REPLICAS: '仿品或实验底子',
  MIRRORED: '已复制',
  MODIFIER_LINE: /^(?<type>[^"]+)(?:\s+"(?<name>[^"]+)")?(?:\s*\(等阶：(?<tier>\d+)\))?(?:\s*\((等级|阶级)：(?<rank>\d+)\))?$/,
  PREFIX_MODIFIER: '前缀属性 ',
  SUFFIX_MODIFIER: '后缀属性 ',
  CRAFTED_PREFIX: '大师工艺前缀',
  CRAFTED_SUFFIX: '大师工艺后缀',
  UNSCALABLE_VALUE: ' — 数值不可估量',
  CORRUPTED_IMPLICIT: '腐化基底属性',
  MODIFIER_INCREASED: /^提高 (.+?)%$/,
  INCURSION_OPEN: '开启的房间：',
  INCURSION_OBSTRUCTED: '堵塞的房间：',
  EATER_IMPLICIT: /^灭界者基底词缀（(?<rank>.+)）$/,
  EXARCH_IMPLICIT: /^焚界者基底词缀（(?<rank>.+)）$/,
  ELDRITCH_MOD_R1: '次级',
  ELDRITCH_MOD_R2: '高级',
  ELDRITCH_MOD_R3: '顶级',
  ELDRITCH_MOD_R4: '卓越',
  ELDRITCH_MOD_R5: '精美的',
  ELDRITCH_MOD_R6: '完美的',
  SENTINEL_CHARGE: '充能: ',
  SHAPER_MODS: ['塑界者的', '塑界之', '尊崇塑界者的', '尊崇塑界之'],
  ELDER_MODS: ['裂界者的', '裂界之', '尊崇裂界者的', '尊崇裂界者之'],
  CRUSADER_MODS: ['圣战者的', '圣战者之', '尊崇圣战者的', '尊崇圣战者之'],
  HUNTER_MODS: ['狩猎者的', '狩猎之', '尊崇狩猎者的', '尊崇狩猎者之'],
  REDEEMER_MODS: ['救赎者的', '救赎之', '尊崇救赎之', '尊崇救赎者的'],
  WARLORD_MODS: ['督军的', '征服者之', '尊崇督军的', '尊崇征服者之'],
  DELVE_MODS: ['地心的', '地下之', '地下的'],
  VEILED_MODS: ['天选的', '次序之'],
  INCURSION_MODS: ['古铁雷兹的', '肖佩克的', '托钵塔特的', '塔卡提的', '马塔特尔的', '马塔特尔之', '奇塔夸雷特的', '奇塔夸雷特之', '塔卡提之', '古铁雷兹之', '普华特之'],
  FOIL_UNIQUE: '古藏传奇',
  UNMODIFIABLE: '基底词缀不能改变',
  // ---
  CHAT_SYSTEM: /^: (?<body>.+)$/,
  CHAT_TRADE: /^\$(?:<(?<guild_tag>.+?)> )?(?<char_name>.+?): (?<body>.+)$/,
  CHAT_GLOBAL: /^#(?:<(?<guild_tag>.+?)> )?(?<char_name>.+?): (?<body>.+)$/,
  CHAT_PARTY: /^%(?:<(?<guild_tag>.+?)> )?(?<char_name>.+?): (?<body>.+)$/,
  CHAT_GUILD: /^&(?:<(?<guild_tag>.+?)> )?(?<char_name>.+?): (?<body>.+)$/,
  CHAT_WHISPER_TO: /^@(向|To) (?<char_name>.+?): (?<body>.+)$/,
  CHAT_WHISPER_FROM: /^@(来自|From) (?:<(?<guild_tag>.+?)> )?(?<char_name>.+?): (?<body>.+)$/,
  CHAT_WEBTRADE_GEM: /^等级 (?<gem_lvl>\d+) (?<gem_qual>\d+)% (?<gem_name>.+)$/
}
