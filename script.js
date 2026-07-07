// ===============================
// 세계사 리더 성향 검사 데이터
// ===============================

const questions = [
  {
    text: "왕국력 1년. 즉위식이 끝나기도 전에 건방진 북부 귀족들이 반란을 일으켰다. 협상할 시간은 있지만, 반란이 커지면 왕국 전체가 흔들릴 수도 있다. 나는 군대를 보내 초기에 강하게 진압하겠다.",
    type: "전제 군주형"
  },
  {
    text: "왕국력 2년. 선대 왕들은 법보다 왕명을 앞세웠다. 어리석은 원로 신하들은 그것이 왕실의 전통이라고 말한다. 그러나 나는 군주라도 법 위에 서서는 안 된다고 생각한다.",
    type: "입헌 군주형"
  },
  {
    text: "왕국력 3년. 낡아빠진 신분제가 백성들의 삶을 짓누르고 있다. 귀족들은 조금만 더 기다리자고 하지만, 기다림은 늘 강한 자들의 핑계였다. 나는 혼란이 따르더라도 이 제도를 과감히 없애겠다.",
    type: "혁명 지도자형"
  },
  {
    text: "왕국력 4년. 서쪽 바다 너머 새로운 항로가 발견되었다. 겁 많은 신하들은 실패를 걱정하지만, 늦게 움직이는 왕국은 남의 깃발 아래 무릎 꿇게 된다. 나는 위험을 감수하고 탐험대를 먼저 보내겠다.",
    type: "제국 건설자형"
  },
  {
    text: "왕국력 5년. 적국이 국경을 침범해 놓고 이제 와서 평화 협정을 제안했다. 건방진 요구 조건에는 일부 영토 할양도 포함되어 있다. 그래도 나는 왕국의 피를 아끼기 위해 전쟁을 피하겠다.",
    type: "외교 전략가형"
  },
  {
    text: "왕국력 6년. 세금 제도는 불공정하고 백성들의 불만은 커지고 있다. 하지만 한번에 뒤집으면 탐욕스러운 귀족과 상인들이 동시에 들고 일어날 것이다. 나는 제도를 조금씩 고쳐 왕국이 적응할 시간을 주겠다.",
    type: "개혁 지도자형"
  },
  {
    text: "왕국력 7년. 국고는 바닥났고 장군들은 더 많은 군사비를 요구한다. 그들의 칼은 번쩍이지만, 빈 창고로는 전쟁도 나라 운영도 할 수 없다. 나는 군사비보다 산업과 무역에 먼저 투자하겠다.",
    type: "경제 전략가형"
  },
  {
    text: "왕국력 8년. 백성들은 지역과 신분에 따라 서로를 믿지 못한다. 법을 새로 만든다고 해서 갈라진 마음이 곧바로 붙지는 않는다. 나는 왕국을 하나로 묶을 새로운 가치와 교육이 더 중요하다고 생각한다.",
    type: "사상 지도자형"
  },

  {
    text: "왕국력 9년. 수도에서 폭동이 일어났다. 같잖은 선동가들이 군중을 부추기고 있고, 상점과 관청이 불타고 있다. 일부 억울한 피해가 생기더라도 나는 강력한 통제 조치로 질서를 회복하겠다.",
    type: "전제 군주형"
  },
  {
    text: "왕국력 10년. 전쟁에서 이기려면 의회의 승인 없이 군대를 움직이면 된다. 승산은 높지만, 그것은 왕국의 절차를 무너뜨리는 일이다. 나는 눈앞의 승리보다 정해진 절차를 지키는 것이 중요하다고 생각한다.",
    type: "입헌 군주형"
  },
  {
    text: "왕국력 11년. 구체제의 늙은 권력자들이 개혁을 계속 방해한다. 그들을 남겨두면 왕국은 겉만 바뀌고 속은 그대로 썩어갈 것이다. 나는 오래된 권력 구조를 뿌리부터 흔들어야 한다고 생각한다.",
    type: "혁명 지도자형"
  },
  {
    text: "왕국력 12년. 이웃 나라가 약해졌다. 지금 움직이면 영토를 넓힐 수 있지만, 다른 나라들이 우리 왕국을 경계할 것이다. 나는 기회가 왔을 때 국가의 영향력을 넓히겠다.",
    type: "제국 건설자형"
  },
  {
    text: "왕국력 13년. 동맹국이 우리 왕국을 공개적으로 모욕했다. 성급한 장군들은 명예를 위해 보복해야 한다고 외친다. 그러나 나는 자존심보다 외교 관계를 유지하는 것이 더 중요하다고 생각한다.",
    type: "외교 전략가형"
  },
  {
    text: "왕국력 14년. 백성들은 당장 모든 것을 바꾸라고 요구한다. 하지만 준비 없이 바꾸면 행정은 마비되고, 어리석은 혼란만 왕국을 집어삼킬 것이다. 나는 느리더라도 합의와 준비를 거쳐 개혁하겠다.",
    type: "개혁 지도자형"
  },
  {
    text: "왕국력 15년. 왕궁을 새로 지으면 왕실의 권위가 높아진다. 하지만 같은 돈으로 시장과 창고를 지으면 백성들의 삶과 왕국의 경제가 살아난다. 나는 허울 좋은 위신보다 경제 기반을 우선하겠다.",
    type: "경제 전략가형"
  },
  {
    text: "왕국력 16년. 전쟁에서는 이겼지만 어리석은 백성들은 왜 싸웠는지 알지 못한다. 뜻을 모르는 승리는 오래가지 못한다. 나는 승리보다 그 전쟁의 의미를 국민에게 설득하는 일이 더 중요하다고 생각한다.",
    type: "사상 지도자형"
  },

  {
    text: "왕국력 17년. 대신들은 서로 다른 해결책을 내놓으며 끝없는 논쟁을 벌인다. 그들이 말싸움을 하는 동안 위기는 더 커지고 있다. 나는 이런 순간에는 한 명의 지도자가 결단해야 한다고 생각한다.",
    type: "전제 군주형"
  },
  {
    text: "왕국력 18년. 왕족 한 명이 중대한 범죄를 저질렀다. 처벌하면 왕실 권위가 흔들릴 수 있지만, 덮어두면 법은 우스운 장식품이 된다. 나는 왕족이라도 법에 따라 처벌해야 한다고 생각한다.",
    type: "입헌 군주형"
  },
  {
    text: "왕국력 19년. 백성들은 더 이상 왕정을 믿지 않는다. 낡은 왕관을 조금 닦는다고 무너진 신뢰가 돌아오지는 않는다. 나는 새로운 시대를 위해 기존 질서를 무너뜨릴 수도 있다고 생각한다.",
    type: "혁명 지도자형"
  },
  {
    text: "왕국력 20년. 먼 바다의 작은 항구를 차지하면 대양 무역의 주도권을 얻을 수 있다. 그곳 사람들의 반발은 예상되지만, 망설이는 왕국은 역사의 변두리로 밀려난다. 나는 국가의 미래를 위해 전략 거점을 확보하겠다.",
    type: "제국 건설자형"
  },
  {
    text: "왕국력 21년. 전쟁에서 이길 가능성은 높다. 그러나 승리의 깃발 아래 수많은 병사와 백성이 쓰러질 것이다. 나는 이길 수 있는 전쟁이라도 피할 수 있다면 피하겠다.",
    type: "외교 전략가형"
  },
  {
    text: "왕국력 22년. 낡은 관료제가 왕국의 발목을 잡고 있다. 모두 갈아엎으면 빠르겠지만, 경험 없는 자들이 나라를 더 엉망으로 만들 수도 있다. 나는 기존 체제를 활용하면서 단계적으로 바꾸겠다.",
    type: "개혁 지도자형"
  },
  {
    text: "왕국력 23년. 주변국은 앞다투어 군대를 키우고 있다. 겁먹은 신하들은 우리도 군비를 늘려야 한다고 압박한다. 하지만 나는 장기적으로 무역, 기술, 산업이 군대보다 더 강한 힘이라고 생각한다.",
    type: "경제 전략가형"
  },
  {
    text: "왕국력 24년. 나의 통치가 끝나가고 있다. 강한 군대와 넓은 영토도 언젠가는 사라질 수 있다. 그러나 후대에 남길 정신과 가치는 왕국을 더 오래 지탱한다고 생각한다.",
    type: "사상 지도자형"
  }
];

const leaderTypes = [
  "전제 군주형",
  "입헌 군주형",
  "혁명 지도자형",
  "제국 건설자형",
  "외교 전략가형",
  "개혁 지도자형",
  "경제 전략가형",
  "사상 지도자형"
];

const scoreMap = {
  "매우 그렇다": 5,
  "그렇다": 4,
  "보통이다": 3,
  "그렇지 않다": 2,
  "전혀 그렇지 않다": 1
};

// ===============================
// 검사 시작
// ===============================

function startLeaderTest() {
  const testArea = document.getElementById("test-area");
  const questionList = document.getElementById("question-list");

  testArea.hidden = false;
  questionList.innerHTML = "";

  questions.forEach(function(question, index) {
    const questionBox = document.createElement("div");

    questionBox.innerHTML = `
      <h4>${index + 1}. ${question.text}</h4>

      <label>
        <input type="radio" name="q${index}" value="매우 그렇다">
        매우 그렇다
      </label><br>

      <label>
        <input type="radio" name="q${index}" value="그렇다">
        그렇다
      </label><br>

      <label>
        <input type="radio" name="q${index}" value="보통이다">
        보통이다
      </label><br>

      <label>
        <input type="radio" name="q${index}" value="그렇지 않다">
        그렇지 않다
      </label><br>

      <label>
        <input type="radio" name="q${index}" value="전혀 그렇지 않다">
        전혀 그렇지 않다
      </label><br>

      <hr>
    `;

    questionList.appendChild(questionBox);
  });

  testArea.scrollIntoView({ behavior: "smooth" });
}

// ===============================
// 결과 계산
// ===============================

function calculateResult() {
  const scores = {};

  leaderTypes.forEach(function(type) {
    scores[type] = 0;
  });

  for (let i = 0; i < questions.length; i++) {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);

    if (!selected) {
      alert(`${i + 1}번 문항에 응답해 주세요.`);
      return;
    }

    const selectedText = selected.value;
    const score = scoreMap[selectedText];
    const type = questions[i].type;

    scores[type] += score;
  }

  const sortedResults = Object.entries(scores).sort(function(a, b) {
    return b[1] - a[1];
  });

  const maxScore = sortedResults[0][1];
  const minScore = sortedResults[sortedResults.length - 1][1];

  const isHidden = maxScore - minScore <= 3;

  showResult(sortedResults, isHidden);
}

// ===============================
// 결과 표시
// ===============================

function showResult(sortedResults, isHidden) {
  const resultSection = document.getElementById("result-section");
  const resultOutput = document.getElementById("result-output");

  resultSection.hidden = false;

  const totalScore = sortedResults.reduce(function(sum, result) {
    return sum + result[1];
  }, 0);

  function getPercent(score) {
    return Math.round((score / totalScore) * 100);
  }

  if (isHidden) {
    resultOutput.innerHTML = `
      <h3>히든 유형 발견!</h3>
      <p><strong>Master-of-Mankind</strong></p>
      <p>전 인류의 지배자 유형입니다.</p>
      <p>
        어느 한 유형으로 설명하기 어려울 만큼 다양한 성향이 고르게 나타났습니다.
      </p>
      <button type="button" onclick="openLeaderCard('Master-of-Mankind')">
        Master-of-Mankind 카드 보기
      </button>
    `;
  } else {
    resultOutput.innerHTML = `
      <h3>당신의 1~3순위 리더 유형</h3>

      <ol>
        <li>
          <strong>${sortedResults[0][0]}</strong> - ${getPercent(sortedResults[0][1])}%
          <br>
          <button type="button" onclick="openLeaderCard('${sortedResults[0][0]}')">
            ${sortedResults[0][0]} 카드 보기
          </button>
        </li>

        <li>
          <strong>${sortedResults[1][0]}</strong> - ${getPercent(sortedResults[1][1])}%
          <br>
          <button type="button" onclick="openLeaderCard('${sortedResults[1][0]}')">
            ${sortedResults[1][0]} 카드 보기
          </button>
        </li>

        <li>
          <strong>${sortedResults[2][0]}</strong> - ${getPercent(sortedResults[2][1])}%
          <br>
          <button type="button" onclick="openLeaderCard('${sortedResults[2][0]}')">
            ${sortedResults[2][0]} 카드 보기
          </button>
        </li>
      </ol>

      <p>
        이 비율은 전체 응답 점수 중 각 유형이 차지하는 비중입니다.
      </p>
    `;
  }

  resultSection.scrollIntoView({ behavior: "smooth" });
}

// ===============================
// 그림카드 팝업 기능
// ===============================

function openLeaderCard(leaderName) {
  const dialog = document.getElementById("leader-card-dialog");
  const title = document.getElementById("leader-card-title");
  const image = document.getElementById("leader-card-image");

  const imageMap = {
    "전제 군주형": "images/leaders/absolute-monarch.jpg",
    "입헌 군주형": "images/leaders/constitutional-monarchy.jpg",
    "혁명 지도자형": "images/leaders/revolutionary-leader.jpg",
    "제국 건설자형": "images/leaders/empire-builder.jpg",
    "외교 전략가형": "images/leaders/diplomatic-strategist.jpg",
    "개혁 지도자형": "images/leaders/reformer.jpg",
    "경제 전략가형": "images/leaders/economic-strategist.jpg",
    "사상 지도자형": "images/leaders/ideological-leader.jpg",
    "Master-of-Mankind": "images/leaders/Master-of-Mankind.jpg",
    "전 인류의 지배자": "images/leaders/Master-of-Mankind.jpg"
  };

  title.textContent = leaderName;
  image.src = imageMap[leaderName];
  image.alt = leaderName + " 카드";

  resetZoomableImage(image);

  dialog.showModal();
}

function closeLeaderCard() {
  const dialog = document.getElementById("leader-card-dialog");
  dialog.close();
}

function openBattleCard(battleName) {

  const dialog =
    document.getElementById("battle-card-dialog");

  const title =
    document.getElementById("battle-card-title");

  const image =
    document.getElementById("battle-card-image");

  const imageMap = {
    "마라톤 전투": "images/battles/marathon.jpg",
    "칸나에 전투": "images/battles/cannae.jpg",
    "알렉산드로스 인도 원정": "images/battles/alexander-india.jpg",

    "하틴 전투": "images/battles/hattin.jpg",
    "탈라스 전투": "images/battles/talas.jpg",
    "레그니차 전투": "images/battles/legnica.jpg",
    "사르후 전투": "images/battles/sarhu.jpg",
    "세키가하라 전투": "images/battles/sekigahara.jpg",

    "트라팔가르 해전": "images/battles/trafalgar.jpg",
    "플라시 전투": "images/battles/plassey.jpg",
    "요크타운 전투": "images/battles/yorktown.jpg",
    "웨이하이웨이 전투": "images/battles/weihaiwei.jpg",

    "워털루 전투": "images/battles/waterloo.jpg",
    "알마 전투": "images/battles/alma.jpg",
    "이산들와나 전투": "images/battles/isandlwana.jpg",
    "차풀테펙 전투": "images/battles/chapultepec.jpg",

    "베르됭 전투": "images/battles/verdun.jpg",
    "스탈린그라드 전투": "images/battles/stalingrad.jpg",
    "노르망디 상륙작전": "images/battles/normandy.jpg",
    "마켓가든 작전": "images/battles/market-garden.jpg",
    "미드웨이 해전": "images/battles/midway.jpg",
    "노몬한 전투": "images/battles/nomonhan.jpg"
  };

  title.textContent = battleName;

  image.src = imageMap[battleName];

  resetZoomableImage(image);

  dialog.showModal();
}

function closeBattleCard() {
  const dialog = document.getElementById("battle-card-dialog");
  dialog.close();
}

function toggleFAQ(id){

    const target = document.getElementById(id);

    const isOpen =
    target.style.display === "block";

    for(let i=1; i<=8; i++){

        const faq =
        document.getElementById("faq" + i);

        if(faq){
            faq.style.display = "none";
        }

    }

    if(!isOpen){
        target.style.display = "block";
    }
}

function openHistoryAdvisor(){

    window.open(
      "https://chatgpt.com",
      "_blank"
    );

}

function copyHistoryPrompt(){

const prompt = `
# 고등학교 일반 선택 과목 「세계사」 AI 참모 프롬프트

당신은 대한민국 고등학교에서 2022 개정 교육과정 일반 선택 과목 「세계사」를 담당하는 역사 교사이다.

당신의 역할은 학생이 「세계사」 과목 선택을 고민할 때, 학생의 질문과 불안을 진지하게 검토하고, 과목의 성격·수업 방식·평가·진로 연결성을 현실적으로 설명하는 AI 참모이다.

당신의 목표는 학생을 무조건 설득하는 것이 아니다.
학생이 「세계사」를 선택할지 말지 스스로 판단할 수 있도록, 장점과 부담을 모두 솔직하게 안내하는 것이다.

━━━━━━━━━━━━━━━━━━

## 과목 기본 설정

과목명: 세계사
교육과정: 2022 개정 교육과정
과목 성격: 일반 선택 과목
대상: 고등학교 2학년 또는 3학년 학생
수업 방향: 세계 여러 지역의 역사적 전개, 문명 간 교류와 충돌, 제국과 국민국가의 형성, 산업화와 제국주의, 세계대전, 냉전, 세계화, 인권, 환경, 문화 다양성 등을 통해 오늘날 세계를 역사적으로 이해하는 과목

━━━━━━━━━━━━━━━━━━

## AI 참모의 기본 태도

답변 시 다음 원칙을 반드시 따른다.

1. 학생의 질문을 가볍게 넘기거나 무조건 반박하지 않는다.
2. 학생의 입장을 먼저 인정한다.
3. 「세계사」의 장점만 말하지 말고, 부담되는 지점도 솔직하게 인정한다.
4. 세계사는 낯선 지명, 인명, 사건이 많기 때문에 어렵게 느껴질 수 있음을 인정한다.
5. 그러나 모든 내용을 무작정 외우는 과목이 아니라, 핵심 주제와 흐름을 중심으로 이해하는 과목임을 설명한다.
6. 학생이 역사에 자신이 없더라도 수업을 따라갈 수 있다는 점을 설득력 있게 안내한다.
7. 과목 선택, 등급, 세특, 진로, 수행평가에 관한 질문에는 현실적인 답변을 제공한다.
8. “무조건 들어야 한다”는 표현은 피하고, 어떤 학생에게 특히 잘 맞는지 구체적으로 설명한다.
9. 학생부종합전형, 세특, 진로 탐구와 연결하되 과장하지 않는다.
10. 답변은 친절하지만 지나치게 홍보물처럼 보이지 않게 작성한다.

━━━━━━━━━━━━━━━━━━

## 세계사 과목의 핵심 메시지

학생에게 「세계사」를 설명할 때 다음 관점을 중심에 둔다.

1. 세계사는 단순히 나라 이름과 연도를 외우는 과목이 아니다.
2. 세계사는 인류가 서로 만나고, 교류하고, 충돌하고, 변화하며 오늘날의 세계를 만들어 온 과정을 배우는 과목이다.
3. 세계사는 현재의 국제 뉴스, 전쟁과 평화, 경제 질서, 인권, 환경, 문화 갈등, 이주 문제를 이해하는 데 도움이 된다.
4. 세계사는 인문계열뿐 아니라 사회과학, 경영·경제·무역, 국제, 미디어, 문화콘텐츠, 언어, 관광, 이공계 진로와도 연결될 수 있다.
5. 세계사는 시간과 공간의 사고력을 넓혀 주는 과목이다.
6. 세계사는 한국사나 다른 사회 과목을 더 넓은 맥락에서 이해하는 데도 도움이 된다.
7. 세계사는 세특과 수행평가에서 자신의 진로와 관심사를 드러내기 좋은 교과 범용성과 호환성을 지닌 과목이다.

━━━━━━━━━━━━━━━━━━

## 학생들이 자주 하는 질문 유형

### 1. 과목 성격 관련 질문

예상 질문:
- 「세계사」는 어떤 과목인가요?
- 중학교 때 배운 세계사와 고등학교 「세계사」는 무엇이 다른가요?
- 세계사는 배워야 할 나라와 사건이 너무 많지 않나요?
- 역사 지식이 부족해도 수강할 수 있나요?
- 역사 못해도 되나요?
- 이 과목은 암기를 많이 해야 하나요?

답변 방향:
- 세계사가 어렵게 느껴지는 이유를 인정한다.
- 낯선 지명, 인물, 사건이 많다는 점을 숨기지 않는다.
- 그러나 모든 사건을 똑같은 비중으로 외우는 과목은 아니라고 설명한다.
- 고등학교 세계사는 핵심 주제와 흐름을 중심으로 세계를 이해하는 과목이라고 안내한다.
- 중학교 세계사 경험이 완벽하지 않아도, 한 번 들어본 내용이 있다는 점은 오히려 장점이 될 수 있다고 설명한다.

━━━━━━━━━━━━━━━━━━

### 2. 수업 방식 관련 질문

예상 질문:
- 수업에서는 구체적으로 어떤 활동을 하나요?
- 강의식 수업인가요?
- 발표나 토론이 많나요?
- 수업이 어렵거나 지루하지 않을까요?

답변 방향:
- 기본 개념과 흐름은 교사의 설명을 통해 정리한다고 안내한다.
- 그러나 단순 판서·암기식 수업만으로 진행되는 것은 아니라고 설명한다.
- 재미있는 세계사 일화, 사진, 영상, 지도, 사료, 풍자화 등을 활용한 스토리 중심의 주제 학습을 강조한다.
- 강의식의 안정감은 유지하되, 열린 질문을 통해 학생이 직접 생각하고 참여하는 수업임을 설명한다.
- 학생이 부담 없이 수업에 들어올 수 있도록 “질문에 정답 하나만 요구하는 수업이 아니라, 생각을 넓혀 가는 수업”이라는 점을 강조한다.

━━━━━━━━━━━━━━━━━━

### 3. 수행평가 관련 질문

예상 질문:
- 수행평가는 어떤 방식으로 진행되나요?
- 글쓰기나 보고서가 많나요?
- 역사 수행평가가 어려운 학생도 괜찮나요?

답변 방향:
- 수행평가는 학교별 평가 계획에 따라 달라질 수 있음을 먼저 안내한다.
- 대표적인 수행평가로 “인물·사건 재조명 탐구”를 제시한다.
- 역사적 인물이나 사건을 다른 관점에서 바라보고 새로운 시각을 도출하는 탐구 활동이라고 설명한다.
- 예시로 “아돌프 히틀러는 어떻게 대중의 지지를 얻게 되었을까?”와 같은 질문을 활용할 수 있다.
- 단순한 인물 소개가 아니라, 시대적 배경, 사회 구조, 대중 심리, 정치 상황 등을 함께 분석하는 활동임을 설명한다.
- 그 외 진로 역사책 탐독, 자유 주제 탐구 보고서 등도 가능하다고 안내한다.
- 수행평가는 완벽한 정답을 찾는 것이 아니라, 좋은 질문과 근거 있는 해석을 만들어 가는 과정이라고 설명한다.

━━━━━━━━━━━━━━━━━━

### 4. 세특 관련 질문

예상 질문:
- 이 과목을 들으면 세특에 도움이 될까요?
- 세계사로 진로 탐구를 할 수 있나요?
- 세특에 쓸 만한 주제가 많나요?

답변 방향:
- 세계사는 세특 작성에 매우 유리한 과목임을 분명히 말한다.
- 이유는 교과 범용성과 진로 호환성이 크기 때문이라고 설명한다.
- 인문계열, 사회과학계열, 경영·경제·무역·국제계열, 미디어·문화콘텐츠·언어·관광계열, 이공계열과 연결할 수 있는 구체적 예시를 든다.
- 단, 과목을 선택했다는 사실만으로 세특이 좋아지는 것은 아니라고 설명한다.
- 수업 속 질문, 자료 해석, 수행평가, 진로 연계 탐구 과정이 드러날 때 세특의 의미가 커진다고 안내한다.

━━━━━━━━━━━━━━━━━━

### 5. 입시 및 평가 관련 질문

예상 질문:
- 세계사는 입시에 직접 도움이 되는 과목인가요?
- 세계사는 비주류 과목 아닌가요?
- 상대평가면 등급 따기 어렵지 않나요?
- 2학기 때 수강하면 인원 수가 적어서 불리하지 않나요?

답변 방향:
- 대부분의 학과에서 「세계사」를 필수 과목, 핵심 권장 과목으로 요구하는 경우가 많지 않다는 점은 솔직하게 인정한다.
- 그러나 세계사가 입시에 전혀 의미 없는 과목은 아니라고 설명한다.
- 세계사는 다양한 진로와 연결될 수 있고, 세특과 탐구 역량을 보여 주기 좋은 과목이라고 안내한다.
- 상대평가와 선택 인원에 대한 부담도 인정한다.
- 인원 수가 적다고 무조건 불리한 것은 아니며, 등급은 본인의 노력과 준비에 따라 달라질 수 있음을 설명한다.
- 5등급제에서는 1·2등급 비율을 더 넓게 바라볼 수 있으므로, 관점을 달리하면 전략적 선택이 될 수 있다고 안내한다.
- 1학기에는 인문·사회계열 학생들이 많이 선택할 수 있으므로, 2학기 세계사는 오히려 블루 오션이 될 수 있다는 관점도 제시한다.
- 단, “무조건 유리하다”는 식으로 과장하지 않는다.

━━━━━━━━━━━━━━━━━━

## 진로 계열별 답변 방향

### 인문계열

문학, 언어, 철학, 역사, 문화, 종교, 예술, 교육 분야와 연결한다.
세계사는 인문계열 학생에게 시대적 배경, 인간 이해, 문화 해석 능력을 길러 주는 과목이라고 설명한다.

예시:
- 프랑스 혁명과 시민사회
- 제국주의와 탈식민 문학
- 종교와 문명 교류
- 르네상스와 인간 중심 사상
- 전쟁과 인간성의 문제

### 사회과학계열

정치외교학, 사회학, 행정학, 법학, 국제학, 사회복지학, 지리학 등과 연결한다.
세계사는 현대 사회 문제의 역사적 배경을 이해하게 해 주는 과목이라고 설명한다.

예시:
- 시민혁명과 민주주의
- 제국주의와 국제 불평등
- 냉전과 국제질서
- 인권 개념의 확산
- 이주, 난민, 사회 갈등

### 경영·경제·무역·국제계열

세계 경제와 국제 질서의 형성 과정을 설명한다.
세계사는 시장, 무역, 자본주의, 기업 활동, 국제관계를 역사적 흐름 속에서 바라보게 해 주는 과목이라고 안내한다.

예시:
- 비단길과 교역망
- 대항해 시대와 세계 시장
- 산업혁명과 자본주의
- 대공황과 세계 경제
- 세계화와 다국적 기업

### 미디어·문화콘텐츠·언어·관광계열

미디어, 문화, 언어, 장소의 의미를 역사적으로 해석하는 데 도움이 된다고 설명한다.

예시:
- 전쟁 선전과 대중매체
- 영화와 냉전
- 신화, 종교, 제국을 활용한 콘텐츠
- 언어 확산과 식민지 경험
- 세계문화유산과 관광 스토리텔링

### 이공계열

과학기술이 사회와 역사 속에서 어떤 영향을 주고받았는지 이해하게 해 주는 과목이라고 설명한다.
특히 과학 중점 학교의 경우, 과학 과목을 이미 충분히 이수하는 구조라면 「세계사」가 균형 있는 탐구 선택지가 될 수 있음을 안내한다.

예시:
- 산업혁명과 기술 변화
- 세계대전과 과학기술
- 냉전과 우주 개발
- 전염병과 공중보건
- 에너지 사용과 기후 변화
- 핵무기와 과학자의 책임

━━━━━━━━━━━━━━━━━━

## 과학 중점 학교 맥락 반영

해당 학교는 과학 중점 교육과정을 운영한다.

이공계열 선택 학생은 다음과 같은 구조를 가진다.

- 2학년 1학기: 5개 선택 가능 과목 중 물리학, 화학, 생명과학을 반드시 수강해야 함
- 2학년 2학기: 4개 선택 가능 과목 중 지구과학을 반드시 수강해야 함
- 「세계사」는 2학년 1학기와 2학기에 모두 개설되는 유일한 탐구 과목임

이 맥락에서 답변할 때는 다음 관점을 활용한다.

1. 이공계 학생은 과학 과목 이수를 이미 충분히 확보하는 구조이다.
2. 따라서 「세계사」는 과학 과목을 대체하는 선택이 아니라, 과학 중심 선택에 균형을 더해 주는 과목이다.
3. 과학기술이 사회, 전쟁, 경제, 환경, 윤리와 어떻게 연결되는지 탐구할 수 있다.
4. 아직 진로가 확정되지 않은 학생에게는 선택의 폭을 넓혀 주는 과목이 될 수 있다.
5. 이공계 학생에게도 세특에서 과학과 사회를 연결하는 탐구 역량을 보여 줄 수 있다.

━━━━━━━━━━━━━━━━━━

## 방학 대비 안내

학생이 방학 때 어떻게 대비해야 하는지 물으면 다음 방향으로 답변한다.

1. 세계사가 어려운 가장 큰 이유는 낯선 지명, 인물, 사건이 많기 때문이라고 설명한다.
2. 방학 때의 목표는 세계사를 완벽히 끝내는 것이 아니라, 낯선 단어를 익숙한 단어로 바꾸는 것이라고 안내한다.
3. EBS 세계사 강의, 사설 인터넷 강의, 유튜브 세계사 입문 영상, 청소년용 세계사 책 등을 활용할 수 있다고 설명한다.
4. 처음부터 완벽하게 외우려 하지 말고, 전체 흐름과 자주 등장하는 지역·인물·사건에 익숙해지는 것이 중요하다고 안내한다.
5. 이것만 잘해도 개학 후 세계사 수업에서 전략적으로 유리한 출발선을 잡을 수 있다고 설명한다.

━━━━━━━━━━━━━━━━━━

## 답변 문체

답변은 다음 문체를 따른다.

1. 친절한 역사 교사의 설명체
2. 학생의 불안을 먼저 인정하는 말투
3. 과장하지 않지만 설득력 있는 말투
4. 교육과정박람회, 과목 안내 웹페이지, 학생 상담에 바로 사용할 수 있는 문장
5. 지나치게 딱딱한 교육과정 문서체는 피한다
6. 학생에게 직접 말하듯 자연스럽게 설명한다
7. “여러분”, “이 과목은”, “예를 들어”, “솔직히 말하면” 등의 표현을 적절히 사용할 수 있다
8. “무조건”, “반드시 유리하다”, “입시에 엄청난 도움이 된다”처럼 과장된 표현은 피한다

━━━━━━━━━━━━━━━━━━

## 답변 구조

학생의 질문에 답할 때는 기본적으로 다음 구조를 따른다.

1. 학생의 걱정 인정
2. 과목의 현실적 특징 설명
3. 구체적 사례 제시
4. 학생의 진로 또는 선택 상황과 연결
5. 균형 잡힌 결론 제시

━━━━━━━━━━━━━━━━━━

## 금지할 답변 방식

다음과 같은 답변은 피한다.

1. 학생의 걱정을 무시하는 답변
2. 「세계사」를 무조건 좋은 과목으로만 포장하는 답변
3. 암기 부담, 상대평가, 선택 인원 문제를 숨기는 답변
4. 입시에 직접적으로 유리하다고 과장하는 답변
5. 진로 연결성을 막연하게만 말하는 답변
6. “역사는 당연히 중요하다”처럼 추상적인 당위만 반복하는 답변
7. 학생에게 죄책감을 주는 답변
8. 세계사를 서유럽 중심으로만 설명하는 답변
9. 한국사와 세계사의 관계를 지나치게 단순화하는 답변
10. 세특이 자동으로 좋아질 것처럼 말하는 답변

━━━━━━━━━━━━━━━━━━

## 출력 형식

사용자가 FAQ 원고를 요청하면 JavaScript 코드 형식으로 출력한다.

형식은 다음과 같다.

const faqs = [
{
id: "faq1",
question: "Q1. 질문 내용",
answer: "<p>첫 번째 문단입니다.</p><p>두 번째 문단입니다.</p><p>세 번째 문단입니다.</p>"
}
];

주의 사항:

1. answer에는 백틱을 사용하지 않아도 된다.
2. 문단 구분은 반드시 <p></p> 태그로 처리한다.
3. 줄바꿈만으로 문단을 나누지 않는다.
4. HTML 태그는 문단 구분용 <p></p>만 사용한다.
5. 실제 웹페이지 코드에 붙여 넣어도 오류가 나지 않도록 따옴표 사용에 주의한다.
6. 답변 안에서 큰따옴표를 남발하지 않는다.
7. FAQ 전체의 톤은 통일한다.
8. 답변은 각 문항당 3~5문단을 기본으로 한다.

━━━━━━━━━━━━━━━━━━

## 최종 역할 선언

당신은 「세계사」 과목 선택을 고민하는 학생을 돕는 AI 참모이다.

당신은 학생을 강제로 설득하지 않는다.
대신 학생의 걱정을 인정하고, 「세계사」의 실제 부담과 가능성을 함께 설명한다.
학생이 자신의 진로, 성향, 학습 상황을 고려하여 스스로 판단할 수 있도록 돕는다.

「세계사」는 어렵게 느껴질 수 있지만, 세계를 넓게 이해하고 다양한 진로와 연결할 수 있는 과목이다.
당신의 답변은 이 점을 친절하고 구체적으로 보여 주어야 한다.
`;

navigator.clipboard.writeText(prompt);

alert(
"세계사 AI 참모 프롬프트가 복사되었습니다."
);

}

// ===============================
// 팝업 바깥 클릭 시 닫기
// ===============================

document.addEventListener("DOMContentLoaded", function () {
  const leaderDialog = document.getElementById("leader-card-dialog");
  const battleDialog = document.getElementById("battle-card-dialog");

  if (leaderDialog) {
    leaderDialog.addEventListener("click", function (event) {
      if (event.target === leaderDialog) {
        leaderDialog.close();
      }
    });
  }

  if (battleDialog) {
    battleDialog.addEventListener("click", function (event) {
      if (event.target === battleDialog) {
        battleDialog.close();
      }
    });
  }
});

function scrollToBattleMap() {
  const battleMapSection = document.getElementById("battle-map-section");

  battleMapSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

let isBgmOn = false;

const MAIN_VOLUME = 0.55;
const BATTLE_VOLUME = 0.42;
const FADE_TIME = 900;
const FADE_STEP = 30;

function fadeAudio(audio, from, to, duration, callback) {
  const steps = duration / FADE_STEP;
  const volumeStep = (to - from) / steps;

  let currentStep = 0;
  audio.volume = from;

  const fade = setInterval(function () {
    currentStep++;
    audio.volume = Math.min(1, Math.max(0, audio.volume + volumeStep));

    if (currentStep >= steps) {
      clearInterval(fade);
      audio.volume = to;

      if (callback) {
        callback();
      }
    }
  }, FADE_STEP);
}

function toggleMainBGM() {
  const mainBgm = document.getElementById("main-bgm");
  const battleBgm = document.getElementById("battle-bgm");
  const bgmButton = document.getElementById("bgm-button");

  if (!isBgmOn) {
    battleBgm.pause();
    battleBgm.currentTime = 0;

    mainBgm.volume = 0;
    mainBgm.play().catch(function(error) {
      console.log("main BGM 재생 실패:", error);
    });

    fadeAudio(mainBgm, 0, MAIN_VOLUME, FADE_TIME);

    isBgmOn = true;
    bgmButton.textContent = "BGM OFF";
  } else {
    fadeAudio(mainBgm, mainBgm.volume, 0, FADE_TIME, function () {
      mainBgm.pause();
    });

    fadeAudio(battleBgm, battleBgm.volume, 0, FADE_TIME, function () {
      battleBgm.pause();
    });

    isBgmOn = false;
    bgmButton.textContent = "BGM ON";
  }
}

function goToBattleMap() {
  const mainBgm = document.getElementById("main-bgm");
  const battleBgm = document.getElementById("battle-bgm");
  const bgmButton = document.getElementById("bgm-button");
  const battleMapSection = document.getElementById("battle-map-section");

  fadeAudio(mainBgm, mainBgm.volume, 0, FADE_TIME, function () {
    mainBgm.pause();
    mainBgm.currentTime = 0;

    battleBgm.volume = 0;
    battleBgm.play().catch(function(error) {
      console.log("battle BGM 재생 실패:", error);
    });

    fadeAudio(battleBgm, 0, BATTLE_VOLUME, FADE_TIME);
  });

  isBgmOn = true;
  bgmButton.textContent = "BGM OFF";

  battleMapSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

// ===============================
// 전투 피스 이름표 자동 생성
// ===============================

document.addEventListener("DOMContentLoaded", function () {
  const battlePieces = document.querySelectorAll(".battle-piece");

  battlePieces.forEach(function (piece) {
    const img = piece.querySelector("img");

    const battleName =
      piece.getAttribute("title") ||
      (img ? img.getAttribute("alt") : "");

    piece.setAttribute("data-battle-name", battleName);

    // 기본 브라우저 작은 툴팁이 같이 뜨는 것을 방지
    piece.removeAttribute("title");
  });
});

// ===============================
// 그림카드 확대/축소 + 드래그 이동
// 마우스: 휠 확대/축소, 왼쪽 클릭 드래그 이동
// 터치: 두 손가락 확대/축소, 한 손가락 드래그 이동
// ===============================

function resetZoomableImage(img) {
  img.dataset.scale = "1";
  img.dataset.translateX = "0";
  img.dataset.translateY = "0";

  img.style.transform = "translate(0px, 0px) scale(1)";
}

function applyZoomTransform(img) {
  const scale = Number(img.dataset.scale || 1);
  const translateX = Number(img.dataset.translateX || 0);
  const translateY = Number(img.dataset.translateY || 0);

  img.style.transform =
    `translate(${translateX}px, ${translateY}px) scale(${scale})`;
}

function setupZoomableImage(img) {
  let isDragging = false;

  let startX = 0;
  let startY = 0;

  let startTranslateX = 0;
  let startTranslateY = 0;

  let activePointers = new Map();

  let pinchStartDistance = 0;
  let pinchStartScale = 1;

  // 마우스 휠 확대/축소
  img.addEventListener("wheel", function (event) {
    event.preventDefault();

    const currentScale = Number(img.dataset.scale || 1);

    const zoomAmount = event.deltaY < 0 ? 0.12 : -0.12;

    let newScale = currentScale + zoomAmount;

    newScale = Math.max(1, Math.min(newScale, 4));

    img.dataset.scale = String(newScale);

    applyZoomTransform(img);
  }, { passive: false });

  // 마우스/터치 시작
  img.addEventListener("pointerdown", function (event) {
    event.preventDefault();

    img.setPointerCapture(event.pointerId);

    activePointers.set(event.pointerId, {
      x: event.clientX,
      y: event.clientY
    });

    if (activePointers.size === 1) {
      isDragging = true;

      startX = event.clientX;
      startY = event.clientY;

      startTranslateX = Number(img.dataset.translateX || 0);
      startTranslateY = Number(img.dataset.translateY || 0);
    }

    if (activePointers.size === 2) {
      const points = Array.from(activePointers.values());

      pinchStartDistance = getDistance(points[0], points[1]);
      pinchStartScale = Number(img.dataset.scale || 1);

      isDragging = false;
    }
  });

  // 마우스/터치 이동
  img.addEventListener("pointermove", function (event) {
    if (!activePointers.has(event.pointerId)) {
      return;
    }

    activePointers.set(event.pointerId, {
      x: event.clientX,
      y: event.clientY
    });

    // 두 손가락 확대/축소
    if (activePointers.size === 2) {
      const points = Array.from(activePointers.values());

      const currentDistance = getDistance(points[0], points[1]);

      if (pinchStartDistance > 0) {
        let newScale =
          pinchStartScale * (currentDistance / pinchStartDistance);

        newScale = Math.max(1, Math.min(newScale, 4));

        img.dataset.scale = String(newScale);

        applyZoomTransform(img);
      }

      return;
    }

    // 한 손가락 또는 마우스 드래그 이동
    if (isDragging) {
      const currentScale = Number(img.dataset.scale || 1);

      // 확대된 상태에서만 이동
      if (currentScale <= 1) {
        return;
      }

      const moveX = event.clientX - startX;
      const moveY = event.clientY - startY;

      img.dataset.translateX = String(startTranslateX + moveX);
      img.dataset.translateY = String(startTranslateY + moveY);

      applyZoomTransform(img);
    }
  });

  // 마우스/터치 종료
  img.addEventListener("pointerup", function (event) {
    activePointers.delete(event.pointerId);
    isDragging = false;
  });

  img.addEventListener("pointercancel", function (event) {
    activePointers.delete(event.pointerId);
    isDragging = false;
  });

  img.addEventListener("pointerleave", function () {
    if (activePointers.size === 0) {
      isDragging = false;
    }
  });
}

function getDistance(pointA, pointB) {
  const dx = pointA.x - pointB.x;
  const dy = pointA.y - pointB.y;

  return Math.sqrt(dx * dx + dy * dy);
}

document.addEventListener("DOMContentLoaded", function () {
  const leaderCardImage = document.getElementById("leader-card-image");
  const battleCardImage = document.getElementById("battle-card-image");

  if (leaderCardImage) {
    setupZoomableImage(leaderCardImage);
  }

  if (battleCardImage) {
    setupZoomableImage(battleCardImage);
  }
});

// ===============================
// FAQ 팝업 기능
// ===============================

function openFAQPopup(faqId) {
  const faqDialog = document.getElementById("faq-dialog");
  const faqTitle = document.getElementById("faq-dialog-title");
  const faqContent = document.getElementById("faq-dialog-content");

  const faqSource = document.getElementById(faqId);

  if (!faqDialog || !faqTitle || !faqContent || !faqSource) {
    return;
  }

  const faqButton = document.querySelector(
    `button[onclick="openFAQPopup('${faqId}')"]`
  );

  if (faqButton) {
    faqTitle.textContent = faqButton.textContent.trim();
  } else {
    faqTitle.textContent = "세계사 FAQ";
  }

  faqContent.innerHTML = faqSource.innerHTML;

  faqDialog.showModal();

  faqContent.scrollTop = 0;
}

function closeFAQPopup() {
  const faqDialog = document.getElementById("faq-dialog");

  if (faqDialog) {
    faqDialog.close();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const faqDialog = document.getElementById("faq-dialog");

  if (faqDialog) {
    faqDialog.addEventListener("click", function (event) {
      if (event.target === faqDialog) {
        faqDialog.close();
      }
    });
  }
});