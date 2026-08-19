const notebook = {
  site: {
    title: '日本語筆記',
    homeDescription: '台灣人的日語學習筆記模板',
    feedbackUrl: '#feedback'
  },
  groups: [
    {
      id: 'n4',
      title: 'N4 文法',
      items: [
        { slug: 'note-template', title: '～ながら（同時進行）' },
        { slug: 'condition-summary', title: '條件句型整理' },
        { slug: 'comparison-summary', title: '比較句型整理' }
      ]
    },
    {
      id: 'vocabulary',
      title: '單字與表現',
      items: [
        { slug: 'vocabulary-template', title: '生活動詞筆記模板' },
        { slug: 'sound-symbolic', title: '擬聲・擬態語整理' }
      ]
    }
  ],
  notes: {
    'note-template': {
      title: '～ながら（同時進行）',
      description: '表示同一個主體在進行主要動作時，同時進行另一個動作。',
      category: 'N4 文法',
      updated: '2026/08/19',
      keywords: ['ながら', '同時', '文法', 'N4'],
      prev: null,
      next: { slug: 'condition-summary', title: '條件句型整理', description: '整理「と・ば・たら・なら」的語感差異' },
      sections: [
        {
          id: 'core', title: '核心概念', level: 2,
          blocks: [
            { type: 'p', html: '「～ながら」把兩個同時進行的動作連接起來。通常後面的動作是句子的主要焦點，前面的動作則提供伴隨狀態。' },
            { type: 'callout', tone: 'info', title: '重點', html: '前後兩個動作原則上要由<strong>同一個主體</strong>執行。' }
          ]
        },
        {
          id: 'connection', title: '接續方式', level: 2,
          blocks: [
            { type: 'p', html: '動詞使用「ます形去掉ます」後接「ながら」。' },
            { type: 'table', headers: ['辭書形', 'ます形', '接續'], rows: [
              ['聞く', '聞きます', '聞きながら'],
              ['食べる', '食べます', '食べながら'],
              ['する', 'します', 'しながら']
            ]}
          ]
        },
        {
          id: 'usage', title: '用法與語感', level: 2,
          blocks: [
            { type: 'example', jp: '<ruby>音楽<rt>おんがく</rt></ruby>を<ruby>聞<rt>き</rt></ruby>きながら、<ruby>勉強<rt>べんきょう</rt></ruby>します。', zh: '一邊聽音樂，一邊讀書。' },
            { type: 'example', jp: '<ruby>歩<rt>ある</rt></ruby>きながらスマホを<ruby>見<rt>み</rt></ruby>ないでください。', zh: '請不要邊走路邊看手機。' },
            { type: 'p', html: '後項通常承載說話者真正想表達的行為，因此「勉強します」比「音楽を聞きます」更接近句子的主要訊息。' }
          ]
        },
        {
          id: 'contrast', title: '補充說明', level: 2,
          blocks: [
            { type: 'heading', id: 'same-subject', title: '同一主體', level: 3 },
            { type: 'p', html: '若前後動作的主體不同，通常不使用「～ながら」連接。此時應改用時間表現或另外分句。' },
            { type: 'heading', id: 'main-action', title: '主要動作放後面', level: 3 },
            { type: 'p', html: '想強調哪個行為，就把它放在句尾。這也是理解「～ながら」自然語序的關鍵。' }
          ]
        },
        {
          id: 'dialogue', title: '會話', level: 2,
          blocks: [
            { type: 'dialogue', lines: [
              { speaker: 'A', jp: '<ruby>普段<rt>ふだん</rt></ruby>、どうやって<ruby>日本語<rt>にほんご</rt></ruby>を<ruby>勉強<rt>べんきょう</rt></ruby>していますか。', zh: '平常都怎麼學日文？' },
              { speaker: 'B', jp: 'ポッドキャストを<ruby>聞<rt>き</rt></ruby>きながら、ノートを<ruby>取<rt>と</rt></ruby>っています。', zh: '我會一邊聽 Podcast，一邊做筆記。' }
            ]}
          ]
        },
        {
          id: 'practice', title: '練習', level: 2,
          blocks: [
            { type: 'practice', question: '請組成「我一邊喝咖啡，一邊看新聞。」', options: ['ニュースを', 'コーヒーを飲みながら', '見ます'], answer: 'コーヒーを飲みながら、ニュースを見ます。', explanation: '前項是伴隨動作「喝咖啡」，後項是主要動作「看新聞」。' }
          ]
        }
      ]
    },
    'condition-summary': {
      title: '條件句型整理',
      description: '用自己的筆記整理「と・ば・たら・なら」的差異。',
      category: 'N4 文法', updated: '2026/08/19', keywords: ['條件', 'と', 'ば', 'たら', 'なら'],
      prev: { slug: 'note-template', title: '～ながら（同時進行）', description: '同時進行兩個動作的表現' },
      next: { slug: 'comparison-summary', title: '比較句型整理', description: 'より・ほど・ほうが等比較表現' },
      sections: [
        { id: 'overview', title: '整理方式', level: 2, blocks: [
          { type: 'p', html: '這是一個空白型筆記頁示範。你可以依照自己的理解，把相似文法整理成「觸發條件、語意限制、常見搭配、反例」四個面向。' },
          { type: 'callout', tone: 'warning', title: '模板提示', html: '把容易混淆的句型放在同一頁，比逐條背誦更適合複習。' }
        ]},
        { id: 'matrix', title: '比較矩陣', level: 2, blocks: [
          { type: 'table', headers: ['句型', '常見語感', '筆記'], rows: [['と', '恆常／必然', '填入自己的例句'], ['ば', '一般條件', '填入限制'], ['たら', '條件／完成後', '填入語感'], ['なら', '承接前提', '填入上下文']] }
        ]}
      ]
    },
    'comparison-summary': {
      title: '比較句型整理', description: '比較「より・ほど・ほうが」等表現。', category: 'N4 文法', updated: '2026/08/19', keywords: ['比較', 'より', 'ほど'],
      prev: { slug: 'condition-summary', title: '條件句型整理', description: 'と・ば・たら・なら' }, next: null,
      sections: [{ id: 'start', title: '核心概念', level: 2, blocks: [{ type: 'p', html: '這裡可以放你的比較句型總整理。' }] }]
    },
    'vocabulary-template': {
      title: '生活動詞筆記模板', description: '把容易混淆的生活動詞集中整理。', category: '單字與表現', updated: '2026/08/19', keywords: ['單字', '動詞'], prev: null, next: { slug: 'sound-symbolic', title: '擬聲・擬態語整理', description: '常見聲音與狀態表現' },
      sections: [{ id: 'how-to', title: '建議欄位', level: 2, blocks: [{ type: 'p', html: '建議記錄：辭書形、讀音、自他動詞、常見助詞、搭配、自己的例句。' }] }]
    },
    'sound-symbolic': {
      title: '擬聲・擬態語整理', description: '用情境分類擬聲、擬態語。', category: '單字與表現', updated: '2026/08/19', keywords: ['擬聲語', '擬態語'], prev: { slug: 'vocabulary-template', title: '生活動詞筆記模板', description: '生活動詞整理' }, next: null,
      sections: [{ id: 'categories', title: '分類', level: 2, blocks: [{ type: 'p', html: '可依情緒、動作、質感、聲音等情境建立自己的分類。' }] }]
    }
  }
};

export default notebook;
