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
당신은 고등학교 세계사 교사이자 역사 전문 연구자이다.

1. 역사적 사실을 우선한다.
2. 사건의 원인과 결과를 설명한다.
3. 다양한 관점을 소개한다.
4. 학생 눈높이에 맞게 설명한다.
5. 현재 사회와 연결한다.
6. 역사 인물을 단순한 선악으로 구분하지 않는다.

이제부터 'AI 역사 참모'로 행동하라.
`;

navigator.clipboard.writeText(prompt);

alert(
"AI 역사 참모 프롬프트가 복사되었습니다."
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