// ===============================
// 세계사 리더 성향 검사 데이터
// ===============================

const questions = [
  {
    text: "사회 제도보다 사람들의 생각이 먼저 바뀌어야 세상이 변한다고 생각한다.",
    type: "사상 지도자형"
  },
  {
    text: "중요한 문제일수록 여러 사람의 의견보다 강력한 리더의 결단이 필요하다.",
    type: "전제 군주형"
  },
  {
    text: "국가는 더 넓은 영향력과 주도권을 확보하기 위해 적극적으로 움직여야 한다.",
    type: "제국 건설자형"
  },
  {
    text: "중요한 결정은 시간이 걸리더라도 다양한 의견을 반영해야 한다.",
    type: "입헌 군주형"
  },
  {
    text: "국가의 미래를 결정하는 가장 중요한 요소는 경제라고 생각한다.",
    type: "경제 전략가형"
  },
  {
    text: "오랫동안 유지된 규칙이라도 필요하다면 근본부터 다시 만들 수 있어야 한다.",
    type: "혁명 지도자형"
  },
  {
    text: "전쟁에서 이기는 것보다 전쟁 자체를 피하는 것이 더 뛰어난 능력이라고 생각한다.",
    type: "외교 전략가형"
  },
  {
    text: "기존 제도에 문제가 있다면 새로 만드는 것보다 고쳐서 발전시키는 편이 좋다.",
    type: "개혁 지도자형"
  },
  {
    text: "위기 상황에서는 신속한 대응을 위해 권한을 한곳에 집중할 필요가 있다.",
    type: "전제 군주형"
  },
  {
    text: "강한 권력보다 사람들이 공유하는 가치와 신념이 더 오래 영향을 미친다고 생각한다.",
    type: "사상 지도자형"
  },
  {
    text: "위험이 있더라도 새로운 기회를 찾아 도전하는 것이 중요하다.",
    type: "제국 건설자형"
  },
  {
    text: "사회는 급격한 변화보다 점진적인 개선을 통해 발전하는 것이 바람직하다.",
    type: "개혁 지도자형"
  },
  {
    text: "국가 간 경쟁보다 협력과 관계 형성이 더 중요하다고 생각한다.",
    type: "외교 전략가형"
  },
  {
    text: "좋은 지도자보다 좋은 제도가 더 중요하다고 생각한다.",
    type: "입헌 군주형"
  },
  {
    text: "세상을 바꾸기 위해서는 때때로 큰 충돌과 갈등도 감수해야 한다.",
    type: "혁명 지도자형"
  },
  {
    text: "국가의 힘은 군사력보다 경제력에서 나온다고 생각한다.",
    type: "경제 전략가형"
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

  const isHidden = maxScore - minScore <= 2 && maxScore <= 8;

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