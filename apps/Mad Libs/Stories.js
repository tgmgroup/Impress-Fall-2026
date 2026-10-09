/**
 * Stories.js - Mad Libs Story Data
 * To add a new story, add a new object to the STORIES array below.
 */

const STORIES = [
	{
		id: 1,
		title: { en: "The Bad Day", ja: "The Bad Day (悪い一日)" },
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
		title: { en: "The Visitor", ja: "The Visitor (訪問者)" },
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
		title: {
			en: "The Halloween Teacher",
			ja: "The Halloween Teacher (ハロウィンの先生)",
		},
		icon: "fa-ghost",
		fields: [
			{
				id: "subject",
				label: { en: "1. School Subject", ja: "1. 教科 (School Subject)" },
				placeholder: {
					en: "e.g. English, Math, Science",
					ja: "例: English (英語), Math (数学)",
				},
				bg: "bg-funPink",
				pool: {
					en: ["English", "Math", "Science", "History", "PE"],
					ja: [
						"English (英語)",
						"Math (数学)",
						"Science (理科)",
						"History (歴史)",
						"PE (体育)",
					],
				},
			},
			{
				id: "scaryLook",
				label: { en: "2. Scary Feature", ja: "2. 怖い特徴 (Scary Feature)" },
				placeholder: {
					en: "e.g. green skin, big eyes",
					ja: "例: green skin (緑色の肌)",
				},
				bg: "bg-funYellow text-funDark",
				pool: {
					en: [
						"green skin",
						"red eyes",
						"long teeth",
						"no face",
						"sharp claws",
					],
					ja: [
						"green skin (緑色の肌)",
						"red eyes (赤い目)",
						"long teeth (長い歯)",
						"no face (顔がない)",
						"sharp claws (鋭い爪)",
					],
				},
			},
			{
				id: "verbIng",
				label: { en: "3. Action (-ing)", ja: "3. 動作 (~ing) (Action)" },
				placeholder: {
					en: "e.g. floating, dancing",
					ja: "例: floating (浮かんでいる)",
				},
				bg: "bg-funGreen text-funDark",
				pool: {
					en: ["floating", "dancing", "screaming", "flying", "laughing"],
					ja: [
						"floating (宙に浮いている)",
						"dancing (踊っている)",
						"screaming (叫んでいる)",
						"flying (飛んでいる)",
						"laughing (笑っている)",
					],
				},
			},
			{
				id: "object",
				label: {
					en: "4. Classroom Object",
					ja: "4. 教室の道具 (Classroom Object)",
				},
				placeholder: {
					en: "e.g. textbook, chalk",
					ja: "例: textbook (教科書), chalk (チョーク)",
				},
				bg: "bg-funPurple",
				pool: {
					en: ["textbook", "chalk", "eraser", "pencil", "clock"],
					ja: [
						"textbook (教科書)",
						"chalk (チョーク)",
						"eraser (消しゴム)",
						"pencil (鉛筆)",
						"clock (時計)",
					],
				},
			},
			{
				id: "feeling2",
				label: { en: "5. Emotion / Feeling", ja: "5. 感情 (Emotion)" },
				placeholder: {
					en: "e.g. shocked, terrified",
					ja: "例: shocked (ショックを受けた)",
				},
				bg: "bg-funBlue",
				pool: {
					en: ["shocked", "scared", "tired", "confused", "happy"],
					ja: [
						"shocked (ショックを受けた)",
						"scared (怖がっている)",
						"tired (疲れた)",
						"confused (混乱した)",
						"happy (幸せな)",
					],
				},
			},
		],
		render: (v) => `
      <p>Today in ${v.subject} class, it was Halloween. A new teacher came to class. But something was wrong.</p>
      <p>The teacher had ${v.scaryLook}! During class, the teacher started ${v.verbIng} near the ceiling!</p>
      <p>Suddenly, a ${v.object} flew across the classroom all by itself!</p>
      <p>Everyone was so ${v.feeling2}! It was the strangest Halloween lesson ever.</p>
    `,
	},
	{
		id: 4,
		title: {
			en: "The Midnight School",
			ja: "The Midnight School (真夜中の学校)",
		},
		icon: "fa-school",
		fields: [
			{
				id: "time",
				label: { en: "1. Time of Night", ja: "1. 時間 (Time of Night)" },
				placeholder: {
					en: "e.g. 7:00 PM, midnight",
					ja: "例: 7:00 PM (午後7時)",
				},
				bg: "bg-funPink",
				pool: {
					en: ["7:00 PM", "8:30 PM", "midnight", "10:00 PM", "1:00 AM"],
					ja: [
						"7:00 PM (午後7時)",
						"8:30 PM (午後8時半)",
						"midnight (真夜中)",
						"10:00 PM (午後10時)",
						"1:00 AM (午前1時)",
					],
				},
			},
			{
				id: "itemLeft",
				label: { en: "2. Forgotten Item", ja: "2. 忘れた物 (Forgotten Item)" },
				placeholder: {
					en: "e.g. umbrella, tablet",
					ja: "例: umbrella (傘), tablet (タブレット)",
				},
				bg: "bg-funYellow text-funDark",
				pool: {
					en: ["umbrella", "tablet", "dictionary", "wallet", "pencil case"],
					ja: [
						"umbrella (傘)",
						"tablet (タブレット)",
						"dictionary (辞書)",
						"wallet (財布)",
						"pencil case (筆箱)",
					],
				},
			},
			{
				id: "sound",
				label: { en: "3. Strange Sound", ja: "3. 変な音 (Strange Sound)" },
				placeholder: {
					en: "e.g. BOO, TAP-TAP",
					ja: "例: TAP-TAP (カタカタ音)",
				},
				bg: "bg-funGreen text-funDark",
				pool: {
					en: ["TAP-TAP!", "BOO!", "CREAK!", "KNOCK-KNOCK!", "SQUEAK!"],
					ja: [
						"TAP-TAP! (カタカタ！)",
						"BOO! (バァ！)",
						"CREAK! (ギシギシ！)",
						"KNOCK-KNOCK! (トントン！)",
						"SQUEAK! (キーキー！)",
					],
				},
			},
			{
				id: "creature",
				label: {
					en: "4. Scary Creature",
					ja: "4. 怖い生き物 (Scary Creature)",
				},
				placeholder: {
					en: "e.g. black cat, skeleton",
					ja: "例: black cat (黒猫)",
				},
				bg: "bg-funPurple",
				pool: {
					en: ["black cat", "skeleton", "vampire", "zombie", "ghost"],
					ja: [
						"black cat (黒猫)",
						"skeleton (ガイコツ)",
						"vampire (吸血鬼)",
						"zombie (ゾンビ)",
						"ghost (おばけ)",
					],
				},
			},
			{
				id: "escapeVerb",
				label: { en: "5. Action (Verb)", ja: "5. 動作・動詞 (Action)" },
				placeholder: {
					en: "e.g. run, dash, jump",
					ja: "例: run (走る), dash (ダッシュする)",
				},
				bg: "bg-funBlue",
				pool: {
					en: ["run", "dash", "scream", "jump", "escape"],
					ja: [
						"run (走る)",
						"dash (ダッシュする)",
						"scream (叫ぶ)",
						"jump (跳ぶ)",
						"escape (逃げる)",
					],
				},
			},
		],
		render: (v) => `
      <p>Yesterday at ${v.time}, I went back to school because I forgot my ${v.itemLeft}.</p>
      <p>The school building was dark and quiet. Suddenly, I heard a loud "${v.sound}" from the hallway!</p>
      <p>I turned around and saw a giant ${v.creature} standing near the principal's office!</p>
      <p>I didn't wait—I had to ${v.escapeVerb} out of the school as fast as I could!</p>
    `,
	},
	{
		id: 5,
		title: {
			en: "Halloween Party Trap",
			ja: "Halloween Party Trap (ハロウィンパーティの罠)",
		},
		icon: "fa-mask",
		fields: [
			{
				id: "costume",
				label: { en: "1. Costume", ja: "1. 仮装 (Costume)" },
				placeholder: {
					en: "e.g. pumpkin, mummy",
					ja: "例: pumpkin (カボチャ), mummy (ミイラ)",
				},
				bg: "bg-funPink",
				pool: {
					en: ["pumpkin", "mummy", "witch", "ninja", "robot"],
					ja: [
						"pumpkin (カボチャ)",
						"mummy (ミイラ)",
						"witch (魔女)",
						"ninja (忍者)",
						"robot (ロボット)",
					],
				},
			},
			{
				id: "snack",
				label: { en: "2. Snack Food", ja: "2. お菓子 (Snack Food)" },
				placeholder: {
					en: "e.g. candy, cookies",
					ja: "例: candy (キャンディ), cookies (クッキー)",
				},
				bg: "bg-funYellow text-funDark",
				pool: {
					en: ["candy", "cookies", "chocolate", "popcorn", "donuts"],
					ja: [
						"candy (キャンディ)",
						"cookies (クッキー)",
						"chocolate (チョコレート)",
						"popcorn (ポップコーン)",
						"donuts (ドーナツ)",
					],
				},
			},
			{
				id: "place",
				label: {
					en: "3. Place in School",
					ja: "3. 校内の場所 (Place in School)",
				},
				placeholder: {
					en: "e.g. gym, library",
					ja: "例: gym (体育館), library (図書室)",
				},
				bg: "bg-funGreen text-funDark",
				pool: {
					en: ["gym", "library", "music room", "science room", "cafeteria"],
					ja: [
						"gym (体育館)",
						"library (図書室)",
						"music room (音楽室)",
						"science room (理科室)",
						"cafeteria (食堂)",
					],
				},
			},
			{
				id: "monster",
				label: {
					en: "4. Monster Name",
					ja: "4. モンスターの名前 (Monster Name)",
				},
				placeholder: {
					en: "e.g. Dracula, Frankenstein",
					ja: "例: Dracula (ドラキュラ)",
				},
				bg: "bg-funPurple",
				pool: {
					en: [
						"Dracula",
						"Frankenstein",
						"Wolfman",
						"Jack-o'-Lantern",
						"Slime",
					],
					ja: [
						"Dracula (ドラキュラ)",
						"Frankenstein (フランケンシュタイン)",
						"Wolfman (オオカミ男)",
						"Jack-o'-Lantern (ジャック・オー・ランタン)",
						"Slime (スライム)",
					],
				},
			},
			{
				id: "feeling3",
				label: { en: "5. Emotion / Feeling", ja: "5. 感情 (Emotion)" },
				placeholder: {
					en: "e.g. excited, surprised",
					ja: "例: excited (興奮する)",
				},
				bg: "bg-funBlue",
				pool: {
					en: ["excited", "surprised", "scared", "happy", "nervous"],
					ja: [
						"excited (興奮する)",
						"surprised (驚いた)",
						"scared (怖がっている)",
						"happy (幸せな)",
						"nervous (緊張する)",
					],
				},
			},
		],
		render: (v) => `
      <p>Last Friday was Halloween! I wore my favorite ${v.costume} costume to the school party.</p>
      <p>We ate lots of delicious ${v.snack} and danced in the ${v.place}.</p>
      <p>Suddenly, the music stopped and ${v.monster} appeared on the stage!</p>
      <p>Everyone was so ${v.feeling3}, but then the monster started dancing! It was the best Halloween party ever.</p>
    `,
	},
];
