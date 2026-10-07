/**
 * Stories.js - Mad Libs Story Data
 * To add a new story, add a new object to the STORIES array below.
 */

const STORIES = [
	{
		id: 1,
		title: { en: "The Bad Day", ja: "悪い一日" },
		icon: "fa-cloud-sun",
		fields: [
			{
				id: "weather",
				label: { en: "1. Weather", ja: "1. 天気 (Weather)" },
				placeholder: {
					en: "e.g. stormy, drizzly",
					ja: "例: stormy (嵐), drizzly (霧)",
				},
				bg: "bg-funPink",
				pool: {
					en: ["stormy", "blisteringly hot", "freezing cold", "foggy"],
					ja: [
						"stormy (嵐)",
						"blisteringly hot (激アツ)",
						"freezing cold (極寒)",
						"foggy (霧)",
					],
				},
			},
			{
				id: "food",
				label: { en: "2. Breakfast Food", ja: "2. 朝ごはん (Breakfast)" },
				placeholder: {
					en: "e.g. waffles, pizza",
					ja: "例: waffles (パンケーキ), pizza (ピザ)",
				},
				bg: "bg-funYellow text-funDark",
				pool: {
					en: ["waffles", "soggy cereal", "cold pizza", "pancakes"],
					ja: [
						"waffles (パンケーキ)",
						"soggy cereal (シナシナのシリアル)",
						"cold pizza (冷めたピザ)",
						"pancakes (パンケーキ)",
					],
				},
			},
			{
				id: "action",
				label: { en: "3. Action / Verb", ja: "3. 動き・動詞 (Action)" },
				placeholder: {
					en: "e.g. sprint, moonwalk",
					ja: "例: sprint (全力疾走), moonwalk (ムーンウォーク)",
				},
				bg: "bg-funGreen text-funDark",
				pool: {
					en: ["moonwalk", "sprint", "catapult", "gallop"],
					ja: [
						"moonwalk (ムーンウォーク)",
						"sprint (全力疾走)",
						"catapult (キャタピルト)",
						"gallop (ギャロップ)",
					],
				},
			},
			{
				id: "badThing",
				label: {
					en: "4. Gross / Bad Thing",
					ja: "4. いやな物・トラブル (Bad Thing)",
				},
				placeholder: {
					en: "e.g. mud puddle, slime",
					ja: "例: mud puddle (水たまり), slime (泥んこ)",
				},
				bg: "bg-funPurple",
				pool: {
					en: ["puddle of slime", "muddy swamp", "melted ice cream"],
					ja: [
						"puddle of slime (泥んこ)",
						"muddy swamp (泥の沼)",
						"melted ice cream (溶けたアイスクリーム)",
					],
				},
			},
			{
				id: "clothing",
				label: { en: "5. Clothing Item", ja: "5. 服・靴 (Clothing)" },
				placeholder: {
					en: "e.g. sneakers, socks",
					ja: "例: favorite sneakers (お気に入りのスニーカー), fuzzy socks (モコモコ靴下)",
				},
				bg: "bg-funBlue",
				pool: {
					en: ["favorite sneakers", "fuzzy socks", "dinosaur pajamas"],
					ja: [
						"favorite sneakers (お気に入りのスニーカー)",
						"fuzzy socks (モコモコ靴下)",
						"dinosaur pajamas (恐竜のパジャマ)",
					],
				},
			},
			{
				id: "lunchItem",
				label: { en: "6. Lunch Item", ja: "6. お昼ごはん (Lunch Item)" },
				placeholder: {
					en: "e.g. tacos, bento box",
					ja: "例: tacos (タコス), bento box (お弁当)",
				},
				bg: "bg-orange-500",
				pool: {
					en: ["spicy tacos", "bento box", "ramen bowl"],
					ja: [
						"spicy tacos (激辛タコス)",
						"bento box (お弁当)",
						"ramen bowl (ラーメン)",
					],
				},
			},
		],
		render: (v) => `
      <p>I got up this morning, and it was ${v.weather}. I went to get my breakfast, and we were out of ${v.food}.</p>
      <p>I exited my house, and my friend had already left for school. And I was late, so I had to ${v.action}!</p>
      <p>I got to school, but then I stepped in a huge ${v.badThing}! My ${v.clothing} were so gross!</p>
      <p>I wanted to go to PE class, but it was cancelled! We had math, math, and more math in the morning. And then lunchtime came, and I realized… I had left my ${v.lunchItem} at home!</p>
    `,
	},
	{
		id: 2,
		title: { en: "The Visitor", ja: "訪問者" },
		icon: "fa-rocket",
		fields: [
			{
				id: "friendName",
				label: { en: "1. Friend's Name", ja: "1. 友達の名前 (Friend's Name)" },
				placeholder: {
					en: "e.g. Tom, Jerry, Shunta",
					ja: "例: Tom, Jerry, Shunta",
				},
				bg: "bg-funPink",
				pool: {
					en: ["Tom", "Jerry", "Shunta", "Mari", "Lily"],
					ja: ["Tom", "Jerry", "Shunta", "Mari", "Lily"],
				},
			},
			{
				id: "gameName",
				label: { en: "2. Name of Game", ja: "2. ゲームの名前 (Name of Game)" },
				placeholder: {
					en: "e.g. Mario Kart, Minecraft, Among Us",
					ja: "例: Mario Kart (マリオカート), Minecraft (マインクラフト), Among Us (アモング・アス)",
				},
				bg: "bg-funYellow text-funDark",
				pool: {
					en: ["Mario Kart", "Minecraft", "Among Us"],
					ja: [
						"Mario Kart (マリオカート)",
						"Minecraft (マインクラフト)",
						"Among Us (アモング・アス)",
					],
				},
			},
			{
				id: "familyMember",
				label: {
					en: "3. Family Member",
					ja: "3. 家族のメンバー (Family Member)",
				},
				placeholder: {
					en: "e.g. Mom, Dad, Sister",
					ja: "例: Mom, Dad, Sister",
				},
				bg: "bg-funGreen text-funDark",
				pool: {
					en: [
						"Mom",
						"Dad",
						"Little Sister",
						"Big Brother",
						"Grandma",
						"Grandpa",
					],
					ja: [
						"Mom (母)",
						"Dad (父)",
						"Little Sister (妹)",
						"Big Brother (兄)",
						"Grandma (祖母)",
						"Grandpa (祖父)",
					],
				},
			},
			{
				id: "teacherName",
				label: { en: "4. Teacher Name", ja: "4. 教師の名前 (Teacher Name)" },
				placeholder: {
					en: "e.g. Mrs. Johnson, Mr. Smith",
					ja: "例: Mrs. Johnson (ジョンソン先生), Mr. Smith (スミス先生)",
				},
				bg: "bg-funPurple",
				pool: {
					en: ["Mrs. Johnson", "Mr. Smith", "Ms. Lee", "Mr. Tanaka"],
					ja: [
						"Mrs. Johnson (ジョンソン先生)",
						"Mr. Smith (スミス先生)",
						"Ms. Lee (リー先生)",
						"Mr. Tanaka (田中先生)",
					],
				},
			},
			{
				id: "testScore",
				label: { en: "5. Test Score", ja: "5. 試験の点数 (Test Score)" },
				placeholder: { en: "e.g. 85, 92", ja: "例: 85, 92" },
				bg: "bg-funBlue",
				pool: {
					en: ["10", "92", "50", "78", "100"],
					ja: ["10", "92", "50", "78", "100"],
				},
			},
			{
				id: "feeling",
				label: { en: "6. Feeling", ja: "6. 感情 (Feeling)" },
				placeholder: {
					en: "e.g. excited, nervous",
					ja: "例: excited (興奮する), nervous (緊張する)",
				},
				bg: "bg-orange-500",
				pool: {
					en: ["excited", "nervous", "curious"],
					ja: [
						"excited (興奮する)",
						"nervous (緊張する)",
						"curious (好奇心旺盛)",
					],
				},
			},
		],
		render: (v) => `
      <p>School is finished. I am really happy because I am going to go home and play games.</p>
      <p>I meet my best friend ${v.friendName}. We talk and make some plans. We are going to play ${v.gameName} today.</p>
      <p>I go home, and I am surprised. My house is really, really clean.</p>
      <p>“${v.familyMember}, what is happening?”</p>
      <p>My ${v.familyMember} comes out.</p>
      <p>“Oh, you’re home! ${v.teacherName} just came. It’s parent-teacher conference day. And they have all your ${v.testScore}% tests!”</p>
      <p>Oh… I’m so ${v.feeling}.</p>

    `,
	},
	{
		id: 3,
		title: { en: "Haunted Mansion Mystery", ja: "おばけ屋敷の謎" },
		icon: "fa-ghost",
		fields: [
			{
				id: "ghostName",
				label: { en: "1. Ghost Name", ja: "1. おばけの名前 (Ghost Name)" },
				placeholder: { en: "e.g. Sir Boo, Casper", ja: "例: ブー男爵" },
				bg: "bg-funPink",
				pool: {
					en: ["Sir Boo", "Gummy Ghost", "Phantom Whiskers"],
					ja: ["ブー男爵", "ぷにぷにゴースト", "おばけネコ"],
				},
			},
			{
				id: "weather3",
				label: { en: "2. Night Weather", ja: "2. 夜の天気 (Weather)" },
				placeholder: {
					en: "e.g. stormy, spooky foggy",
					ja: "例: 嵐の夜、不気味な霧",
				},
				bg: "bg-funYellow text-funDark",
				pool: {
					en: ["stormy", "spooky foggy", "windy"],
					ja: ["大嵐の夜", "不気味な濃霧", "ビュービュー吹き荒れる風"],
				},
			},
			{
				id: "scaredSound",
				label: { en: "3. Weird Sound", ja: "3. 変な音 (Sound)" },
				placeholder: {
					en: "e.g. HONK, SQUEAK",
					ja: "例: プッパー！、ギクッ！",
				},
				bg: "bg-funGreen text-funDark",
				pool: {
					en: ["kazoo HONK", "loud SQUEAK", "funny BURP"],
					ja: ["カズーのプッパー音", "激しいキーキー声", "大きなゲップ"],
				},
			},
			{
				id: "hidingPlace",
				label: { en: "4. Hiding Spot", ja: "4. 隠れ場所 (Hiding Place)" },
				placeholder: {
					en: "e.g. under the sofa",
					ja: "例: ソファの下、クローゼット",
				},
				bg: "bg-funPurple",
				pool: {
					en: ["under the sofa", "inside a giant clock", "in the pantry"],
					ja: ["ソファの下", "大きな時計の中", "食品庫の中"],
				},
			},
			{
				id: "creepyCreature",
				label: { en: "5. Funny Creature", ja: "5. おかしな生き物 (Creature)" },
				placeholder: { en: "e.g. dancing skeleton", ja: "例: 踊るガイコツ" },
				bg: "bg-funBlue",
				pool: {
					en: ["dancing skeleton", "glowing bat", "fluffy goblin"],
					ja: ["踊るガイコツ", "光るコウモリ", "フワフワのゴブリン"],
				},
			},
			{
				id: "favoriteSnack",
				label: { en: "6. Snack Item", ja: "6. お気に入りのお菓子 (Snack)" },
				placeholder: {
					en: "e.g. chocolate chip cookies",
					ja: "例: クッキー、ポテチ",
				},
				bg: "bg-orange-500",
				pool: {
					en: ["chocolate chip cookies", "gummy worms", "marshmallows"],
					ja: ["チョコチップクッキー", "ミミズ型グミ", "焼きマシュマロ"],
				},
			},
		],
		render: (v) => `
      <p>It was a ${v.weather3} night when I walked into the old mansion. Suddenly, I heard a loud "${v.scaredSound}"!</p>
      <p>I quickly jumped ${v.hidingPlace} to hide. That's when I met ${v.ghostName}, a ${v.creepyCreature} who was floating in the air.</p>
      <p>Turns out, the ghost was just hungry! We sat together and shared some tasty ${v.favoriteSnack}.</p>
    `,
	},
	{
		id: 4,
		title: { en: "Chef's Crazy Kitchen", ja: "シェフのハチャメチャクッキング" },
		icon: "fa-fire-burner",
		fields: [
			{
				id: "chefName",
				label: { en: "1. Chef Name", ja: "1. シェフの名前 (Chef Name)" },
				placeholder: { en: "e.g. Chef Luigi", ja: "例: ルイージシェフ" },
				bg: "bg-funPink",
				pool: {
					en: ["Chef Luigi", "Gordon Ram-say", "Master Pierre"],
					ja: ["ルイージシェフ", "ムッシュ・ピエール", "クッキングパパ"],
				},
			},
			{
				id: "mainIngredient",
				label: {
					en: "2. Weird Ingredient",
					ja: "2. 変わった食材 (Ingredient)",
				},
				placeholder: {
					en: "e.g. bubblegum, hot sauce",
					ja: "例: 風船ガム、激辛ソース",
				},
				bg: "bg-funYellow text-funDark",
				pool: {
					en: ["bubblegum syrup", "hot sauce", "pickle juice"],
					ja: ["風船ガムシロップ", "激辛ハバネロソース", "ピクルスの汁"],
				},
			},
			{
				id: "kitchenTool",
				label: { en: "3. Kitchen Appliance", ja: "3. 調理器具 (Tool)" },
				placeholder: {
					en: "e.g. blender, waffle maker",
					ja: "例: ミキサー、ワッフルメーカー",
				},
				bg: "bg-funGreen text-funDark",
				pool: {
					en: ["high-speed blender", "waffle maker", "toaster"],
					ja: ["超高速ミキサー", "ワッフルメーカー", "ポップアップトースター"],
				},
			},
			{
				id: "emergencyAction",
				label: { en: "4. Action Verb", ja: "4. 慌てた行動 (Action)" },
				placeholder: {
					en: "e.g. do a flip, scream",
					ja: "例: 叫ぶ、バク転する",
				},
				bg: "bg-funPurple",
				pool: {
					en: ["do a backflip", "scream loudly", "dance wildly"],
					ja: ["バク転する", "大声で叫ぶ", "激しく踊る"],
				},
			},
			{
				id: "messyDisaster",
				label: { en: "5. Messy Stuff", ja: "5. 散らかった物 (Mess)" },
				placeholder: {
					en: "e.g. whipped cream explosion",
					ja: "例: 生クリームの大爆発",
				},
				bg: "bg-funBlue",
				pool: {
					en: [
						"whipped cream explosion",
						"spaghetti fountain",
						"melted cheese tsunami",
					],
					ja: [
						"生クリームの大爆発",
						"スパゲッティの噴水",
						"とろけるチーズの津波",
					],
				},
			},
		],
		render: (v) => `
      <p>Welcome to Master Kitchen with ${v.chefName}! Today's secret recipe features ${v.mainIngredient}.</p>
      <p>The chef threw everything into the ${v.kitchenTool} and turned it to maximum power. Suddenly, it started shaking uncontrollably!</p>
      <p>${v.chefName} had to ${v.emergencyAction} as a giant ${v.messyDisaster} covered the entire kitchen! Bon Appétit!</p>
    `,
	},
	{
		id: 5,
		title: { en: "Galactic Space Mission", ja: "宇宙大冒険" },
		icon: "fa-rocket",
		fields: [
			{
				id: "alienName",
				label: { en: "1. Astronaut Name", ja: "1. 宇宙飛行士の名前 (Name)" },
				placeholder: { en: "e.g. Captain Zog", ja: "例: ゾグ船長" },
				bg: "bg-funPink",
				pool: {
					en: ["Commander Zorp", "Professor Pickle", "Barnaby Nova"],
					ja: ["ゾルプ司令官", "ピクルス博士", "バーナビー船長"],
				},
			},
			{
				id: "planet",
				label: { en: "2. Alien Planet", ja: "2. 惑星の名前 (Planet)" },
				placeholder: {
					en: "e.g. Planet Marshmallow",
					ja: "例: マシュマロ惑星",
				},
				bg: "bg-funYellow text-funDark",
				pool: {
					en: ["Planet Marshmallow", "Sector 7G", "Xenon-B"],
					ja: ["マシュマロ惑星", "第7銀河ゼノン", "ポテトスター"],
				},
			},
			{
				id: "alienFood",
				label: { en: "3. Space Snack", ja: "3. 宇宙のおやつ (Space Food)" },
				placeholder: {
					en: "e.g. moon cheese, tacos",
					ja: "例: 月のチーズ、宇宙せんべい",
				},
				bg: "bg-funGreen text-funDark",
				pool: {
					en: ["moon cheese", "cosmic popcorn", "starlight candy"],
					ja: ["月のチーズ", "コズミック・ポップコーン", "星くずキャンディ"],
				},
			},
			{
				id: "spaceAction",
				label: { en: "4. Space Action", ja: "4. 宇宙での行動 (Action)" },
				placeholder: {
					en: "e.g. high-five, tickle",
					ja: "例: ハイタッチ、ダンス",
				},
				bg: "bg-funPurple",
				pool: {
					en: ["high-five", "tickle", "photograph"],
					ja: ["ハイタッチする", "くすぐる", "記念撮影する"],
				},
			},
			{
				id: "weirdMonster",
				label: { en: "5. Weird Alien", ja: "5. 変なエイリアン (Alien)" },
				placeholder: { en: "e.g. giant gummy bear", ja: "例: 巨大グミベア" },
				bg: "bg-funBlue",
				pool: {
					en: ["giant gummy bear", "flying octopus", "glowing space cat"],
					ja: ["巨大グミベア", "空飛ぶタコ", "光る宇宙ネコ"],
				},
			},
			{
				id: "spaceSuitItem",
				label: { en: "6. Gear / Item", ja: "6. 持ち物・装備 (Gear)" },
				placeholder: {
					en: "e.g. laser blaster, mop",
					ja: "例: レーザー銃、デッキブラシ",
				},
				bg: "bg-orange-500",
				pool: {
					en: ["laser blaster", "super mop", "disco ball"],
					ja: ["光線銃", "魔法のモップ", "ディスコボール"],
				},
			},
		],
		render: (v) => `
      <p>Greetings Earthlings! Today Astronaut ${v.alienName} launched a rocket bound for ${v.planet}.</p>
      <p>During the journey, the crew stopped to eat some delicious ${v.alienFood}. Suddenly, a ${v.weirdMonster} appeared outside!</p>
      <p>Without hesitating, Astronaut ${v.alienName} grabbed a ${v.spaceSuitItem} and decided to ${v.spaceAction} with the alien. Mission accomplished!</p>
    `,
	},
];
