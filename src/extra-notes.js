import notebook from './data.js';

notebook.groups.unshift({
  id: 'n3',
  title: 'N3 文法',
  items: [
    { slug: 'n3-ippou-da', title: '～一方だ（越來越～）' }
  ]
});

notebook.notes['n3-ippou-da'] = {
  title: '～一方だ（越來越～／一直～下去）',
  description: '表示某種變化持續朝同一個方向發展，而且沒有停止或反轉的傾向。',
  category: 'N3 文法',
  updated: '2026/08/19',
  keywords: ['一方だ', 'いっぽうだ', 'N3', '變化', '越來越', '一直'],
  prev: null,
  next: null,
  sections: [
    {
      id: 'video-summary', title: '影片重點整理', level: 2,
      blocks: [
        { type: 'p', html: '出口仁老師這支影片的核心可以先記成：<strong>「變化動詞的辭書形 ＋ 一方だ」</strong>。用來表示某個狀態持續往同一方向變化，中文常翻成「越來越～」、「一直～下去」。' },
        { type: 'callout', tone: 'info', title: '核心語感', html: '重點不是單純「正在變化」，而是<strong>變化持續往同一方向累積</strong>。說話者通常感覺這個趨勢沒有停下來或反轉。' },
        { type: 'p', html: '影片來源：<a href="https://youtu.be/eGxvduVsfJo?si=FCjocqjeEqDCQJ1O" target="_blank" rel="noreferrer">出口日語 N3 文法「～一方だ」</a>' }
      ]
    },
    {
      id: 'connection', title: '接續方式', level: 2,
      blocks: [
        { type: 'p', html: '<strong>變化を表す動詞・辭書形 ＋ 一方だ</strong>。也可以先用「い形容詞＋なる」變成變化動詞，再接「一方だ」，例如「悪くなる一方だ」。' },
        { type: 'table', headers: ['變化方向', '常見動詞', '意思'], rows: [
          ['增加', '増える・上がる・高まる・強まる', '增加、上升、提高、增強'],
          ['減少', '減る・下がる・弱まる', '減少、下降、減弱'],
          ['形容詞＋なる', '大きくなる・小さくなる・悪くなる', '變大、變小、變差']
        ]},
        { type: 'callout', tone: 'warning', title: '不要和「～一方で」混淆', html: '「～一方だ」表示<strong>單一方向的持續變化</strong>；「～一方で」則常表示「另一方面／相對地」。' }
      ]
    },
    {
      id: 'nuance', title: '語感怎麼理解', level: 2,
      blocks: [
        { type: 'heading', id: 'one-direction', title: '變化只有一個方向', level: 3 },
        { type: 'p', html: '「一方」有「一個方向」的感覺，所以「上がる一方だ」不只是說「上升了」，而是強調「持續升、一直往上」。' },
        { type: 'heading', id: 'often-negative', title: '常出現在令人擔心的趨勢', level: 3 },
        { type: 'p', html: '影片用多個生活與社會變化來建立語感，例如存款持續減少、氣溫持續上升、體態持續變化、不滿升高、客人減少。這些例子共同點都是「趨勢朝單一方向發展」。' },
        { type: 'heading', id: 'compare-gradual', title: '和「だんだん／ますます」的差別', level: 3 },
        { type: 'p', html: '「だんだん」偏向「漸漸地」描述變化過程；「ますます」偏向程度越來越高；「～一方だ」則更強調<strong>趨勢持續朝同一方向發展</strong>。' }
      ]
    },
    {
      id: 'video-examples', title: '影片例句情境整理', level: 2,
      blocks: [
        { type: 'table', headers: ['影片情境', '變化動詞', '理解方式'], rows: [
          ['離職後存款持續減少', '減る', '數量一直往下降'],
          ['全球暖化使平均氣溫持續升高', '上がる', '數值一直往上升'],
          ['太忙沒時間運動，體態持續往不理想方向變化', '太る', '身體狀態持續改變'],
          ['政策因素讓不滿持續升高', '高まる', '情緒／程度持續增加'],
          ['附近出現競爭店家後，客人持續減少', '減る', '人數一直往下降']
        ]}
      ]
    },
    {
      id: 'examples', title: '延伸例句', level: 2,
      blocks: [
        { type: 'example', jp: '<ruby>円安<rt>えんやす</rt></ruby>が<ruby>続<rt>つづ</rt></ruby>いて、<ruby>海外旅行<rt>かいがいりょこう</rt></ruby>の<ruby>費用<rt>ひよう</rt></ruby>は<ruby>高<rt>たか</rt></ruby>くなる<ruby>一方<rt>いっぽう</rt></ruby>です。', zh: '日圓持續貶值，出國旅行的費用越來越高。' },
        { type: 'example', jp: '<ruby>練習<rt>れんしゅう</rt></ruby>しないと、<ruby>覚<rt>おぼ</rt></ruby>えた<ruby>漢字<rt>かんじ</rt></ruby>を<ruby>忘<rt>わす</rt></ruby>れる<ruby>一方<rt>いっぽう</rt></ruby>だ。', zh: '如果不練習，記過的漢字只會一直忘掉。' },
        { type: 'example', jp: 'この<ruby>町<rt>まち</rt></ruby>では、<ruby>新<rt>あたら</rt></ruby>しい<ruby>店<rt>みせ</rt></ruby>が<ruby>増<rt>ふ</rt></ruby>える<ruby>一方<rt>いっぽう</rt></ruby>です。', zh: '這個城鎮的新店家持續增加。' },
        { type: 'example', jp: '<ruby>最近<rt>さいきん</rt></ruby>、<ruby>仕事<rt>しごと</rt></ruby>が<ruby>増<rt>ふ</rt></ruby>えて、<ruby>帰宅時間<rt>きたくじかん</rt></ruby>は<ruby>遅<rt>おそ</rt></ruby>くなる<ruby>一方<rt>いっぽう</rt></ruby>だ。', zh: '最近工作越來越多，回家的時間也越來越晚。' }
      ]
    },
    {
      id: 'pattern', title: '快速判斷公式', level: 2,
      blocks: [
        { type: 'table', headers: ['想表達的內容', '適不適合用 ～一方だ', '原因'], rows: [
          ['物價持續上漲', '適合', '同一方向的持續變化'],
          ['今天突然漲價一次', '不適合', '只有單次事件，沒有持續趨勢'],
          ['最近忽高忽低', '通常不適合', '變化不是單一方向'],
          ['身體狀況越來越差', '適合', '「悪くなる」持續發展']
        ]}
      ]
    },
    {
      id: 'common-mistakes', title: '常見錯誤', level: 2,
      blocks: [
        { type: 'heading', id: 'not-static', title: '前面要能表達「變化」', level: 3 },
        { type: 'p', html: '比起單純描述固定狀態，「～一方だ」更自然地接在「増える、減る、上がる、悪くなる」這類能表現變化的形式後面。' },
        { type: 'heading', id: 'not-one-time', title: '不是只發生一次', level: 3 },
        { type: 'p', html: '如果只是一次性的變化，例如「昨天突然漲價了」，就不適合用「一方だ」。它要表達的是一段時間內持續發展的趨勢。' }
      ]
    },
    {
      id: 'practice', title: '練習', level: 2,
      blocks: [
        { type: 'practice', question: '請組成「最近物價一直上漲。」', options: ['最近', '物価は', '上がる一方です'], answer: '最近、物価は上がる一方です。', explanation: '「上がる」是變化動詞，而且描述的是物價持續朝上漲方向發展。' },
        { type: 'practice', question: '哪一個情況最適合使用「～一方だ」？', options: ['昨天只下了一場雨', '日文能力忽好忽壞', '每天工作增加，越來越忙'], answer: '每天工作增加，越來越忙。', explanation: '「～一方だ」強調持續朝單一方向發展。' }
      ]
    }
  ]
};
