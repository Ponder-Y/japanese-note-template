import notebook from './data.js';

const n3Group = notebook.groups.find(group => group.id === 'n3');
if (n3Group) {
  n3Group.items.push(
    { slug: 'n3-ueni', title: '～うえに（不僅～而且～）' },
    { slug: 'n3-uchini', title: '～うちに（趁～／在～期間）' },
    { slug: 'n3-okage', title: '～おかげ（多虧～）' },
    { slug: 'n3-osore-ga-aru', title: '～おそれがある（恐怕～）' },
    { slug: 'n3-kakeru-kake', title: '～かける・～かけ（做到一半／差點～）' }
  );
}

if (notebook.notes['n3-ippou-da']) {
  notebook.notes['n3-ippou-da'].next = {
    slug: 'n3-ueni',
    title: '～うえに（不僅～而且～）',
    description: '在前項內容之外，再追加同方向的評價或資訊。'
  };
}

notebook.notes['n3-ueni'] = {
  title: '～うえに（不僅～而且～）',
  description: '表示在前項的事實或評價之外，再追加另一個同方向的內容，相當於「不僅～而且～」。',
  category: 'N3 文法',
  updated: '2026/08/19',
  keywords: ['うえに', '上に', 'N3', '不僅', '而且', '追加'],
  prev: { slug: 'n3-ippou-da', title: '～一方だ', description: '表示變化持續朝同一方向發展。' },
  next: { slug: 'n3-uchini', title: '～うちに', description: '趁狀態改變以前，或在某段期間內。' },
  sections: [
    {
      id: 'video-summary', title: '影片重點整理', level: 2,
      blocks: [
        { type: 'p', html: '「～うえに」的核心是<strong>追加</strong>：前面已經有一個理由、特徵或評價，後面再補上一項。中文可以理解成「不僅～而且～」、「再加上～」。' },
        { type: 'callout', tone: 'info', title: '核心語感', html: '通常是<strong>好事＋好事</strong>，或<strong>壞事＋壞事</strong>。也就是後項和前項多半朝同一個評價方向追加。' },
        { type: 'p', html: '影片來源：<a href="https://youtu.be/a9ZikIHE2l4?si=T6V_jTKSHrOqX0qb" target="_blank" rel="noreferrer">出口日語 N3 文法「～うえに」</a>' }
      ]
    },
    {
      id: 'connection', title: '接續方式', level: 2,
      blocks: [
        { type: 'table', headers: ['詞類', '接續', '例'], rows: [
          ['動詞', '普通形＋うえに', '働くうえに／働いたうえに'],
          ['い形容詞', '普通形＋うえに', '安いうえに'],
          ['な形容詞', 'な＋うえに／である＋うえに', '便利なうえに'],
          ['名詞', 'の＋うえに／である＋うえに', '雨のうえに']
        ]},
        { type: 'p', html: '口語上常看到「～上に」，寫作時也很常直接使用漢字「上」。' }
      ]
    },
    {
      id: 'nuance', title: '語感與使用方式', level: 2,
      blocks: [
        { type: 'heading', id: 'same-direction', title: '前後通常是同方向評價', level: 3 },
        { type: 'example', jp: 'この<ruby>会社<rt>かいしゃ</rt></ruby>は<ruby>給料<rt>きゅうりょう</rt></ruby>が<ruby>高<rt>たか</rt></ruby>いうえに、<ruby>休<rt>やす</rt></ruby>みも<ruby>多<rt>おお</rt></ruby>いです。', zh: '這家公司不但薪水高，而且假也多。' },
        { type: 'example', jp: '<ruby>旅行中<rt>りょこうちゅう</rt></ruby>に<ruby>財布<rt>さいふ</rt></ruby>をなくしたうえに、スマホまで<ruby>壊<rt>こわ</rt></ruby>れてしまった。', zh: '旅行時不但弄丟錢包，連手機也壞了。' },
        { type: 'heading', id: 'add-information', title: '不是單純列舉，而是「再加一層」', level: 3 },
        { type: 'p', html: '「AうえにB」帶有「A就已經是這樣了，還再加上B」的感覺，所以比單純用「そして」更有累積效果。' }
      ]
    },
    {
      id: 'compare', title: '和相似文法的差別', level: 2,
      blocks: [
        { type: 'table', headers: ['句型', '重點', '語感'], rows: [
          ['～うえに', '再追加一項', '常有好＋好／壞＋壞的累積感'],
          ['～だけでなく', '不只A，也有B', '較中性，只強調範圍擴張'],
          ['そして', '然後／而且', '一般連接，不特別強調累積']
        ]}
      ]
    },
    {
      id: 'examples', title: '延伸例句', level: 2,
      blocks: [
        { type: 'example', jp: 'このアプリは<ruby>操作<rt>そうさ</rt></ruby>が<ruby>簡単<rt>かんたん</rt></ruby>なうえに、<ruby>無料<rt>むりょう</rt></ruby>で<ruby>使<rt>つか</rt></ruby>えます。', zh: '這個 App 不但操作簡單，而且可以免費使用。' },
        { type: 'example', jp: '<ruby>今日<rt>きょう</rt></ruby>は<ruby>仕事<rt>しごと</rt></ruby>が<ruby>多<rt>おお</rt></ruby>いうえに、<ruby>会議<rt>かいぎ</rt></ruby>も三つあります。', zh: '今天不只工作多，還有三場會議。' },
        { type: 'example', jp: '<ruby>彼<rt>かれ</rt></ruby>は<ruby>日本語<rt>にほんご</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>なうえに、<ruby>英語<rt>えいご</rt></ruby>も<ruby>話<rt>はな</rt></ruby>せます。', zh: '他不但日文很好，英文也會說。' }
      ]
    },
    {
      id: 'common-mistakes', title: '常見錯誤', level: 2,
      blocks: [
        { type: 'callout', tone: 'warning', title: '不要硬把相反評價接在一起', html: '例如「便宜うえに品質が悪い」雖然文法上能理解，但如果想表達明確對比，通常改用「一方で」「けど」等逆接會更自然。' }
      ]
    },
    {
      id: 'practice', title: '練習', level: 2,
      blocks: [
        { type: 'practice', question: '請組成「這間房子不但便宜，而且離車站很近。」', options: ['この部屋は', '安いうえに', '駅から近いです'], answer: 'この部屋は安いうえに、駅から近いです。', explanation: '「便宜」與「離車站近」都是正面優點，用「うえに」追加非常自然。' }
      ]
    }
  ]
};

notebook.notes['n3-uchini'] = {
  title: '～うちに（趁～／在～期間）',
  description: '表示在某個狀態改變之前把事情做完，或在某段持續狀態中自然發生了變化。',
  category: 'N3 文法',
  updated: '2026/08/19',
  keywords: ['うちに', 'N3', '趁', '期間', '在此期間', '之前'],
  prev: { slug: 'n3-ueni', title: '～うえに', description: '追加同方向的資訊。' },
  next: { slug: 'n3-okage', title: '～おかげ', description: '表示好結果的原因或幫助。' },
  sections: [
    {
      id: 'video-summary', title: '影片重點整理', level: 2,
      blocks: [
        { type: 'p', html: '「～うちに」有兩個非常重要的用法：<strong>① 趁某個狀態還沒改變以前做某事；② 在某段持續狀態中，不知不覺發生變化</strong>。' },
        { type: 'callout', tone: 'info', title: '記憶方式', html: '可以把「うち」想成一段有限的時間範圍。這個範圍結束以前做完，或某個變化在這段範圍內發生。' },
        { type: 'p', html: '影片來源：<a href="https://youtu.be/zRDINPcshiM?si=h38kV58Ot-VawzMT" target="_blank" rel="noreferrer">出口日語 N3 文法「～うちに」</a>' }
      ]
    },
    {
      id: 'connection', title: '接續方式', level: 2,
      blocks: [
        { type: 'table', headers: ['詞類', '接續', '例'], rows: [
          ['動詞', '辭書形／ている形／ない形＋うちに', 'いるうちに・勉強しているうちに・忘れないうちに'],
          ['い形容詞', 'い形容詞＋うちに', '若いうちに'],
          ['な形容詞', 'な形容詞＋な＋うちに', '元気なうちに'],
          ['名詞', '名詞＋の＋うちに', '学生のうちに']
        ]}
      ]
    },
    {
      id: 'before-change', title: '用法①：趁狀態改變以前', level: 2,
      blocks: [
        { type: 'p', html: '這個用法常帶有「<strong>現在不做，以後可能就沒機會了</strong>」的時間感。' },
        { type: 'example', jp: '<ruby>若<rt>わか</rt></ruby>いうちに、いろいろな<ruby>国<rt>くに</rt></ruby>へ<ruby>行<rt>い</rt></ruby>ってみたいです。', zh: '想趁年輕去很多不同的國家看看。' },
        { type: 'example', jp: '<ruby>忘<rt>わす</rt></ruby>れないうちに、<ruby>大切<rt>たいせつ</rt></ruby>なことをメモしておきます。', zh: '趁還沒忘記，先把重要的事記下來。' },
        { type: 'example', jp: '<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>らないうちに、<ruby>帰<rt>かえ</rt></ruby>りましょう。', zh: '趁還沒下雨，我們回去吧。' }
      ]
    },
    {
      id: 'during-change', title: '用法②：在一段期間內自然發生變化', level: 2,
      blocks: [
        { type: 'p', html: '這時後項常常不是事先計畫，而是<strong>在持續做某事的過程中，不知不覺產生結果或變化</strong>。' },
        { type: 'example', jp: '<ruby>日本語<rt>にほんご</rt></ruby>を<ruby>勉強<rt>べんきょう</rt></ruby>しているうちに、<ruby>日本<rt>にほん</rt></ruby>の<ruby>文化<rt>ぶんか</rt></ruby>にも<ruby>興味<rt>きょうみ</rt></ruby>を<ruby>持<rt>も</rt></ruby>つようになりました。', zh: '在學日文的過程中，漸漸也對日本文化產生興趣。' },
        { type: 'example', jp: '<ruby>音楽<rt>おんがく</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いているうちに、<ruby>眠<rt>ねむ</rt></ruby>ってしまった。', zh: '聽著聽著音樂，就睡著了。' }
      ]
    },
    {
      id: 'compare', title: '「うちに」和「間に」', level: 2,
      blocks: [
        { type: 'table', headers: ['句型', '重點', '例'], rows: [
          ['～うちに', '狀態會改變／把握時機，或過程中自然變化', '若いうちに旅行する'],
          ['～間に', '單純表示某一段時間裡發生另一件事', '母が買い物している間に掃除した']
        ]},
        { type: 'callout', tone: 'info', title: '判斷技巧', html: '如果有「趁現在」、「再不做就來不及」的感覺，通常優先想到「うちに」。' }
      ]
    },
    {
      id: 'practice', title: '練習', level: 2,
      blocks: [
        { type: 'practice', question: '「趁記得的時候先寫下來」應該使用哪一個？', options: ['覚えている間に', '忘れないうちに', '忘れたあとで'], answer: '忘れないうちに', explanation: '強調在「忘記」這個狀態變化發生以前完成動作。' }
      ]
    }
  ]
};

notebook.notes['n3-okage'] = {
  title: '～おかげ（多虧～／託～的福）',
  description: '表示某個人、事物或原因帶來了好的結果；有時也能以反諷方式描述壞結果。',
  category: 'N3 文法',
  updated: '2026/08/19',
  keywords: ['おかげ', 'おかげで', 'おかげだ', 'おかげさまで', 'N3', '多虧'],
  prev: { slug: 'n3-uchini', title: '～うちに', description: '趁狀態改變以前或在某期間內。' },
  next: { slug: 'n3-osore-ga-aru', title: '～おそれがある', description: '表示不好的可能性或風險。' },
  sections: [
    {
      id: 'video-summary', title: '影片重點整理', level: 2,
      blocks: [
        { type: 'p', html: '「～おかげで」表示<strong>因為前項的幫助或影響，產生了好的結果</strong>。中文最自然的翻法通常是「多虧～」、「託～的福」。' },
        { type: 'callout', tone: 'info', title: '核心語感', html: '前項是值得感謝的原因，後項是正面的結果。句尾也常使用「～のは、～おかげです」。' },
        { type: 'p', html: '影片來源：<a href="https://youtu.be/zNwGvXmd378?si=u1lXT2NSdqi8ENLR" target="_blank" rel="noreferrer">出口日語 N3 文法「～おかげ」</a>' }
      ]
    },
    {
      id: 'connection', title: '接續方式', level: 2,
      blocks: [
        { type: 'table', headers: ['詞類', '接續', '例'], rows: [
          ['動詞', '普通形＋おかげで', '手伝ってくれたおかげで'],
          ['い形容詞', '普通形＋おかげで', '天気が良かったおかげで'],
          ['な形容詞', 'な＋おかげで', '元気なおかげで'],
          ['名詞', 'の＋おかげで', '先生のおかげで']
        ]},
        { type: 'p', html: '句尾可以使用「～おかげだ／～おかげです」，原因放在句中時常用「～おかげで」。' }
      ]
    },
    {
      id: 'positive-result', title: '正面結果', level: 2,
      blocks: [
        { type: 'example', jp: '<ruby>先生<rt>せんせい</rt></ruby>のおかげで、N3に<ruby>合格<rt>ごうかく</rt></ruby>できました。', zh: '多虧老師，我通過了 N3。' },
        { type: 'example', jp: '<ruby>友達<rt>ともだち</rt></ruby>が<ruby>手伝<rt>てつだ</rt></ruby>ってくれたおかげで、<ruby>仕事<rt>しごと</rt></ruby>が<ruby>早<rt>はや</rt></ruby>く<ruby>終<rt>お</rt></ruby>わりました。', zh: '多虧朋友幫忙，工作很快就完成了。' },
        { type: 'example', jp: '<ruby>毎日<rt>まいにち</rt></ruby><ruby>練習<rt>れんしゅう</rt></ruby>したおかげで、<ruby>会話<rt>かいわ</rt></ruby>がかなり<ruby>上手<rt>じょうず</rt></ruby>になりました。', zh: '多虧每天練習，會話進步很多。' }
      ]
    },
    {
      id: 'sarcasm', title: '反諷用法', level: 2,
      blocks: [
        { type: 'p', html: '本來「おかげ」是感謝，但說話者也能故意用在壞結果上，形成<strong>「都是拜你所賜」</strong>的反諷。語氣會明顯帶不滿。' },
        { type: 'example', jp: '<ruby>君<rt>きみ</rt></ruby>が<ruby>遅<rt>おく</rt></ruby>れたおかげで、<ruby>電車<rt>でんしゃ</rt></ruby>に<ruby>乗<rt>の</rt></ruby>れなかったよ。', zh: '都是拜你遲到所賜，我們沒搭上電車。' }
      ]
    },
    {
      id: 'okagesamade', title: '「おかげさまで」', level: 2,
      blocks: [
        { type: 'p', html: '「おかげさまで」是固定寒暄語，表示「託您的福／承蒙大家照顧」。不一定真的指對方直接幫忙，而是一種謙虛、感謝的說法。' },
        { type: 'example', jp: 'おかげさまで、<ruby>家族<rt>かぞく</rt></ruby>はみんな<ruby>元気<rt>げんき</rt></ruby>です。', zh: '託您的福，家人都很好。' }
      ]
    },
    {
      id: 'compare', title: '和「～せいで」的差別', level: 2,
      blocks: [
        { type: 'table', headers: ['句型', '結果', '中文感覺'], rows: [
          ['～おかげで', '原則上是好結果', '多虧～'],
          ['～せいで', '通常是壞結果', '都是因為～／都怪～']
        ]}
      ]
    },
    {
      id: 'practice', title: '練習', level: 2,
      blocks: [
        { type: 'practice', question: '「多虧你的建議，我順利找到工作了。」應使用？', options: ['アドバイスのおかげで', 'アドバイスのせいで', 'アドバイスのおそれで'], answer: 'アドバイスのおかげで', explanation: '後項「順利找到工作」是好的結果，所以用「おかげで」。' }
      ]
    }
  ]
};

notebook.notes['n3-osore-ga-aru'] = {
  title: '～おそれがある（恐怕～／有～的風險）',
  description: '用較正式、客觀的方式表示不好的事情有發生的可能性，常見於新聞、公告與風險說明。',
  category: 'N3 文法',
  updated: '2026/08/19',
  keywords: ['おそれがある', '恐れがある', 'N3', '風險', '恐怕', '可能性'],
  prev: { slug: 'n3-okage', title: '～おかげ', description: '表示好結果的原因。' },
  next: { slug: 'n3-kakeru-kake', title: '～かける・～かけ', description: '表示做到一半或差一點發生。' },
  sections: [
    {
      id: 'video-summary', title: '影片重點整理', level: 2,
      blocks: [
        { type: 'p', html: '「～おそれがある」表示<strong>有某個不好的結果或事件發生的可能性</strong>。比「かもしれない」正式，常出現在新聞、氣象資訊、公司公告、安全警告等情境。' },
        { type: 'callout', tone: 'warning', title: '重要限制', html: '「恐れがある」原則上用於<strong>負面結果</strong>。好事情通常不要用這個句型。' },
        { type: 'p', html: '影片來源：<a href="https://youtu.be/8qo09quNcQY?si=pgaE1OROSkQfOapQ" target="_blank" rel="noreferrer">出口日語 N3 文法「～おそれがある」</a>' }
      ]
    },
    {
      id: 'connection', title: '接續方式', level: 2,
      blocks: [
        { type: 'table', headers: ['形式', '接續', '例'], rows: [
          ['動詞', '辭書形／ない形＋おそれがある', '倒産するおそれがある・間に合わないおそれがある'],
          ['名詞', '名詞＋の＋おそれがある', '津波のおそれがある']
        ]}
      ]
    },
    {
      id: 'usage', title: '使用語感', level: 2,
      blocks: [
        { type: 'heading', id: 'formal', title: '客觀、正式', level: 3 },
        { type: 'p', html: '它常建立在天氣預報、數據、狀況分析或客觀條件上，不只是說話者自己的感覺。' },
        { type: 'example', jp: '<ruby>台風<rt>たいふう</rt></ruby>が<ruby>接近<rt>せっきん</rt></ruby>しており、<ruby>停電<rt>ていでん</rt></ruby>になるおそれがあります。', zh: '颱風正在接近，有停電的風險。' },
        { type: 'example', jp: 'このまま<ruby>赤字<rt>あかじ</rt></ruby>が<ruby>続<rt>つづ</rt></ruby>けば、<ruby>会社<rt>かいしゃ</rt></ruby>が<ruby>倒産<rt>とうさん</rt></ruby>するおそれがあります。', zh: '如果虧損持續下去，公司恐怕有倒閉的風險。' },
        { type: 'example', jp: '<ruby>大雨<rt>おおあめ</rt></ruby>による<ruby>洪水<rt>こうずい</rt></ruby>のおそれがあります。', zh: '有因豪雨引發洪水的風險。' }
      ]
    },
    {
      id: 'compare', title: '和「かもしれない」的差別', level: 2,
      blocks: [
        { type: 'table', headers: ['句型', '好事', '壞事', '場合'], rows: [
          ['～かもしれない', '可以', '可以', '日常口語也常用'],
          ['～おそれがある', '通常不用', '特別適合', '正式、公告、新聞、風險說明']
        ]},
        { type: 'example', jp: '<ruby>明日<rt>あした</rt></ruby>は<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>るかもしれない。', zh: '明天可能會下雨。（一般推測）' },
        { type: 'example', jp: '<ruby>明日<rt>あした</rt></ruby>は<ruby>大雨<rt>おおあめ</rt></ruby>のおそれがあります。', zh: '明天有豪雨的風險。（正式警示）' }
      ]
    },
    {
      id: 'common-mistakes', title: '常見錯誤', level: 2,
      blocks: [
        { type: 'p', html: '「試験に合格するおそれがある」不自然，因為「合格」是好結果。這種情況改用「合格する可能性がある／合格するかもしれない」。' }
      ]
    },
    {
      id: 'practice', title: '練習', level: 2,
      blocks: [
        { type: 'practice', question: '哪一句最自然？', options: ['台風で電車が止まるおそれがあります', '宝くじに当たるおそれがあります', '旅行が楽しくなるおそれがあります'], answer: '台風で電車が止まるおそれがあります', explanation: '「おそれがある」用在不好的可能性，而且正式的風險說明很自然。' }
      ]
    }
  ]
};

notebook.notes['n3-kakeru-kake'] = {
  title: '～かける・～かけ（做到一半／差點～）',
  description: '表示動作開始了但尚未完成，或某個瞬間性事件差一點就發生。',
  category: 'N3 文法',
  updated: '2026/08/19',
  keywords: ['かける', 'かけ', 'かけの', 'N3', '做到一半', '差點'],
  prev: { slug: 'n3-osore-ga-aru', title: '～おそれがある', description: '表示不好的可能性或風險。' },
  next: null,
  sections: [
    {
      id: 'video-summary', title: '影片重點整理', level: 2,
      blocks: [
        { type: 'p', html: '「～かける／～かけ」最重要的概念是<strong>「還沒完整結束」</strong>。依動詞性質不同，可以表示「做到一半」或「差一點就發生」。' },
        { type: 'callout', tone: 'info', title: '核心判斷', html: '持續性動作常理解成<strong>途中、未完成</strong>；瞬間性變化則常理解成<strong>差點發生／正要發生</strong>。' },
        { type: 'p', html: '影片來源：<a href="https://youtu.be/WmqsfDDLlW8?si=iYObN1x80U7hB8KA" target="_blank" rel="noreferrer">出口日語 N3 文法「～かける・～かけ」</a>' }
      ]
    },
    {
      id: 'connection', title: '接續方式', level: 2,
      blocks: [
        { type: 'table', headers: ['形式', '接續', '用途'], rows: [
          ['～かける', '動詞ます形去ます＋かける', '作為動詞使用'],
          ['～かけの＋名詞', '動詞ます形去ます＋かけの＋N', '修飾名詞'],
          ['～かけ', '動詞ます形去ます＋かけ', '名詞化，例如食べかけ']
        ]},
        { type: 'p', html: '例如：食べます → 食べかける／食べかけのケーキ；書きます → 書きかける／書きかけのレポート。' }
      ]
    },
    {
      id: 'unfinished', title: '用法①：做到一半、尚未完成', level: 2,
      blocks: [
        { type: 'example', jp: 'テーブルの<ruby>上<rt>うえ</rt></ruby>に<ruby>飲<rt>の</rt></ruby>みかけのコーヒーがあります。', zh: '桌上有一杯喝到一半的咖啡。' },
        { type: 'example', jp: '<ruby>書<rt>か</rt></ruby>きかけのレポートを<ruby>保存<rt>ほぞん</rt></ruby>して、<ruby>先<rt>さき</rt></ruby>に<ruby>帰<rt>かえ</rt></ruby>りました。', zh: '把寫到一半的報告存檔後先回家了。' },
        { type: 'example', jp: '<ruby>食<rt>た</rt></ruby>べかけのパンを<ruby>冷蔵庫<rt>れいぞうこ</rt></ruby>に<ruby>入<rt>い</rt></ruby>れておいた。', zh: '把吃到一半的麵包放進冰箱。' }
      ]
    },
    {
      id: 'almost', title: '用法②：差一點就發生', level: 2,
      blocks: [
        { type: 'p', html: '搭配「死ぬ、転ぶ、溺れる、壊れる」等較瞬間性的變化時，常表示<strong>事情到了快發生的階段，但最後沒有完全發生</strong>。' },
        { type: 'example', jp: '<ruby>階段<rt>かいだん</rt></ruby>で<ruby>足<rt>あし</rt></ruby>を<ruby>滑<rt>すべ</rt></ruby>らせて、<ruby>転<rt>ころ</rt></ruby>びかけた。', zh: '在樓梯上滑了一下，差點跌倒。' },
        { type: 'example', jp: '<ruby>海<rt>うみ</rt></ruby>で<ruby>波<rt>なみ</rt></ruby>にのまれて、<ruby>溺<rt>おぼ</rt></ruby>れかけた。', zh: '在海裡被浪捲走，差點溺水。' },
        { type: 'example', jp: '<ruby>何<rt>なに</rt></ruby>か<ruby>言<rt>い</rt></ruby>いかけて、<ruby>彼<rt>かれ</rt></ruby>は<ruby>黙<rt>だま</rt></ruby>ってしまった。', zh: '他正要說什麼，卻又閉嘴了。' }
      ]
    },
    {
      id: 'compare', title: '快速區分', level: 2,
      blocks: [
        { type: 'table', headers: ['表現', '意思', '例'], rows: [
          ['食べかけ', '開始吃了，但沒吃完', '食べかけのケーキ'],
          ['転びかけた', '差一點跌倒', 'まだ完全には転んでいない'],
          ['～途中だ', '單純說正在過程中', '仕事の途中だ'],
          ['～そうになる', '看起來／差點要發生', '転びそうになった']
        ]}
      ]
    },
    {
      id: 'common-mistakes', title: '常見錯誤', level: 2,
      blocks: [
        { type: 'p', html: '重點不是「現在正在做」而已，而是<strong>已開始但未完成</strong>，或<strong>事情接近發生卻沒有完全發生</strong>。完成了的動作就不能再叫「～かけ」。' }
      ]
    },
    {
      id: 'practice', title: '練習', level: 2,
      blocks: [
        { type: 'practice', question: '「冰箱裡有吃到一半的蛋糕。」應該怎麼說？', options: ['食べ終わったケーキ', '食べかけのケーキ', '食べる一方のケーキ'], answer: '食べかけのケーキ', explanation: '「食べかけ」表示已經開始吃，但還沒有吃完。' },
        { type: 'practice', question: '「我差點在濕地板上跌倒。」可以使用哪個？', options: ['転びかけた', '転び終わった', '転ぶうえに'], answer: '転びかけた', explanation: '「転ぶ」是瞬間性的事件，「転びかけた」表示接近發生但沒有完全發生。' }
      ]
    }
  ]
};
