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
      id: 'video-summary',
      title: '影片重點整理',
      level: 2,
      blocks: [
        {
          type: 'p',
          html: '出口仁老師這支影片的核心可以先記成：<strong>「變化動詞的辭書形 ＋ 一方だ」</strong>。用來表示某個狀態持續往同一方向變化，中文常翻成「越來越～」、「一直～下去」。'
        },
        {
          type: 'callout',
          tone: 'info',
          title: '核心語感',
          html: '重點不是單純「正在變化」，而是<strong>變化持續往同一方向累積</strong>。說話者通常感覺這個趨勢沒有停下來或反轉。'
        },
        {
          type: 'p',
          html: '影片來源：<a href="https://youtu.be/eGxvduVsfJo?si=FCjocqjeEqDCQJ1O" target="_blank" rel="noreferrer">出口日語 N3 文法「～一方だ」</a>'
        }
      ]
    },
    {
      id: 'connection',
      title: '接續方式',
      level: 2,
      blocks: [
        {
          type: 'p',
          html: '<strong>變化を表す動詞・辭書形 ＋ 一方だ</strong>。也可以先用「い形容詞＋なる」變成變化動詞，再接「一方だ」，例如「悪くなる一方だ」。'
        },
        {
          type: 'table',
          headers: ['變化方向', '常見動詞', '意思'],
          rows: [
            ['增加', '増える・上がる・高まる・強まる', '增加、上升、提高、增強'],
            ['減少', '減る・下がる・弱まる', '減少、下降、減弱'],
            ['形容詞＋なる', '大きくなる・小さくなる・悪くなる', '變大、變小、變差']
          ]
        },
        {
          type: 'callout',
          tone: 'warning',
          title: '不要只背「一方」',
          html: '這裡的「～一方だ」是<strong>持續變化</strong>的句型，和表示「另一方面」的「～一方で」不是同一個用法。'
        }
      ]
    },
    {
      id: 'nuance',
      title: '語感怎麼理解',
      level: 2,
      blocks: [
        {
          type: 'heading',
          id: 'one-direction',
          title: '變化只有一個方向',
          level: 3
        },
        {
          type: 'p',
          html: '「一方」本身有「一個方向」的感覺，所以「上がる一方だ」不是只說「上升了」，而是帶有「持續升、一直升」的趨勢感。'
        },
        {
          type: 'heading',
          id: 'often-negative',
          title: '常出現在不理想的趨勢',
          level: 3
        },
        {
          type: 'p',
          html: '實際使用時很常描述令人擔心或不希望持續的變化，例如存款減少、氣溫上升、變胖、不滿增加、客人減少。不過句型本身並不限定一定要是負面，只要是持續朝單一方向變化即可。'
        },
        {
          type: 'heading',
          id: 'compare-gradual',
          title: '和「だんだん／ますます」的差別',
          level: 3
        },
        {
          type: 'p',
          html: '「だんだん」偏向「漸漸地」描述變化過程；「ますます」是「越來越」的程度加深；「～一方だ」則更強調<strong>趨勢持續朝同一方向發展</strong>。'
        }
      ]
    },
    {
      id: 'examples',
      title: '影片情境例句整理',
      level: 2,
      blocks: [
        {
          type: 'example',
          jp: '<ruby>仕事<rt>しごと</rt></ruby>を<ruby>辞<rt>や</rt></ruby>めてから、<ruby>貯金<rt>ちょきん</rt></ruby>は<ruby>減<rt>へ</rt></ruby>る<ruby>一方<rt>いっぽう</rt></ruby>です。',
          zh: '辭掉工作之後，存款一直在減少。'
        },
        {
          type: 'example',
          jp: '<ruby>地球温暖化<rt>ちきゅうおんだんか</rt></ruby>で、<ruby>世界<rt>せかい</rt></ruby>の<ruby>平均気温<rt>へいきんきおん</rt></ruby>は<ruby>上<rt>あ</rt></ruby>がる<ruby>一方<rt>いっぽう</rt></ruby>だ。',
          zh: '受到全球暖化影響，世界平均氣溫持續上升。'
        },
        {
          type: 'example',
          jp: '<ruby>忙<rt>いそが</rt></ruby>しくて<ruby>運動<rt>うんどう</rt></ruby>する<ruby>時間<rt>じかん</rt></ruby>がないので、<ruby>体重<rt>たいじゅう</rt></ruby>は<ruby>増<rt>ふ</rt></ruby>える<ruby>一方<rt>いっぽう</rt></ruby>だ。',
          zh: '因為太忙沒有時間運動，體重一直增加。'
        },
        {
          type: 'example',
          jp: '<ruby>増税<rt>ぞうぜい</rt></ruby>が<ruby>続<rt>つづ</rt></ruby>き、<ruby>政府<rt>せいふ</rt></ruby>への<ruby>不満<rt>ふまん</rt></ruby>は<ruby>高<rt>たか</rt></ruby>まる<ruby>一方<rt>いっぽう</rt></ruby>です。',
          zh: '持續增稅，使得對政府的不滿越來越高。'
        },
        {
          type: 'example',
          jp: '<ruby>近所<rt>きんじょ</rt></ruby>に<ruby>新<rt>あたら</rt></ruby>しいコンビニができてから、うちの<ruby>店<rt>みせ</rt></ruby>の<ruby>客<rt>きゃく</rt></ruby>は<ruby>減<rt>へ</rt></ruby>る<ruby>一方<rt>いっぽう</rt></ruby>だ。',
          zh: '附近開了新的便利商店後，我們店裡的客人一直減少。'
        }
      ]
    },
    {
      id: 'pattern',
      title: '快速判斷公式',
      level: 2,
      blocks: [
        {
          type: 'table',
          headers: ['想表達的內容', '適不適合用 ～一方だ', '原因'],
          rows: [
            ['物價持續上漲', '適合', '同一方向的持續變化'],
            ['今天突然漲價一次', '不適合', '只有單次事件，沒有持續趨勢'],
            ['最近忽高忽低', '通常不適合', '變化不是單一方向'],
            ['身體狀況越來越差', '適合', '「悪くなる」持續發展']
          ]
        }
      ]
    },
    {
      id: 'common-mistakes',
      title: '常見錯誤',
      level: 2,
      blocks: [
        {
          type: 'heading',
          id: 'not-static',
          title: '前面要有「變化」',
          level: 3
        },
        {
          type: 'p',
          html: '「～一方だ」最重要的是變化趨勢，因此比起單純的狀態動詞，更自然的是「増える、減る、上がる、悪くなる」這類能表現變化的形式。'
        },
        {
          type: 'heading',
          id: 'not-one-time',
          title: '不是只發生一次',
          level: 3
        },
        {
          type: 'p',
          html: '如果只是「昨天突然變貴了」這種一次性的變化，不適合使用「一方だ」。要有一段時間內持續發展的趨勢。'
        }
      ]
    },
    {
      id: 'practice',
      title: '練習',
      level: 2,
      blocks: [
        {
          type: 'practice',
          question: '請組成「最近物價一直上漲。」',
          options: ['最近', '物価は', '上がる一方です'],
          answer: '最近、物価は上がる一方です。',
          explanation: '「上がる」是變化動詞，而且描述的是物價持續朝上漲的方向發展。'
        },
        {
          type: 'practice',
          question: '哪一個情況最適合使用「～一方だ」？',
          options: ['昨天只下了一場雨', '日文能力忽好忽壞', '每天工作增加，越來越忙'],
          answer: '每天工作增加，越來越忙。',
          explanation: '「～一方だ」強調持續朝單一方向發展；工作量不斷增加正符合這個語感。'
        }
      ]
    }
  ]
};
