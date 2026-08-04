const emperors = [{"number": 1, "name": "神武天皇", "reading": "じんむてんのう"}, {"number": 2, "name": "綏靖天皇", "reading": "すいぜいてんのう"}, {"number": 3, "name": "安寧天皇", "reading": "あんねいてんのう"}, {"number": 4, "name": "懿徳天皇", "reading": "いとくてんのう"}, {"number": 5, "name": "孝昭天皇", "reading": "こうしょうてんのう"}, {"number": 6, "name": "孝安天皇", "reading": "こうあんてんのう"}, {"number": 7, "name": "孝霊天皇", "reading": "こうれいてんのう"}, {"number": 8, "name": "孝元天皇", "reading": "こうげんてんのう"}, {"number": 9, "name": "開化天皇", "reading": "かいかてんのう"}, {"number": 10, "name": "崇神天皇", "reading": "すじんてんのう"}, {"number": 11, "name": "垂仁天皇", "reading": "すいにんてんのう"}, {"number": 12, "name": "景行天皇", "reading": "けいこうてんのう"}, {"number": 13, "name": "成務天皇", "reading": "せいむてんのう"}, {"number": 14, "name": "仲哀天皇", "reading": "ちゅうあいてんのう"}, {"number": 15, "name": "応神天皇", "reading": "おうじんてんのう"}, {"number": 16, "name": "仁徳天皇", "reading": "にんとくてんのう"}, {"number": 17, "name": "履中天皇", "reading": "りちゅうてんのう"}, {"number": 18, "name": "反正天皇", "reading": "はんぜいてんのう"}, {"number": 19, "name": "允恭天皇", "reading": "いんぎょうてんのう"}, {"number": 20, "name": "安康天皇", "reading": "あんこうてんのう"}, {"number": 21, "name": "雄略天皇", "reading": "ゆうりゃくてんのう"}, {"number": 22, "name": "清寧天皇", "reading": "せいねいてんのう"}, {"number": 23, "name": "顕宗天皇", "reading": "けんぞうてんのう"}, {"number": 24, "name": "仁賢天皇", "reading": "にんけんてんのう"}, {"number": 25, "name": "武烈天皇", "reading": "ぶれつてんのう"}, {"number": 26, "name": "継体天皇", "reading": "けいたいてんのう"}, {"number": 27, "name": "安閑天皇", "reading": "あんかんてんのう"}, {"number": 28, "name": "宣化天皇", "reading": "せんかてんのう"}, {"number": 29, "name": "欽明天皇", "reading": "きんめいてんのう"}, {"number": 30, "name": "敏達天皇", "reading": "びだつてんのう"}, {"number": 31, "name": "用明天皇", "reading": "ようめいてんのう"}, {"number": 32, "name": "崇峻天皇", "reading": "すしゅんてんのう"}, {"number": 33, "name": "推古天皇", "reading": "すいこてんのう"}, {"number": 34, "name": "舒明天皇", "reading": "じょめいてんのう"}, {"number": 35, "name": "皇極天皇", "reading": "こうぎょくてんのう"}, {"number": 36, "name": "孝徳天皇", "reading": "こうとくてんのう"}, {"number": 37, "name": "斉明天皇", "reading": "さいめいてんのう"}, {"number": 38, "name": "天智天皇", "reading": "てんじてんのう"}, {"number": 39, "name": "弘文天皇", "reading": "こうぶんてんのう"}, {"number": 40, "name": "天武天皇", "reading": "てんむてんのう"}, {"number": 41, "name": "持統天皇", "reading": "じとうてんのう"}, {"number": 42, "name": "文武天皇", "reading": "もんむてんのう"}, {"number": 43, "name": "元明天皇", "reading": "げんめいてんのう"}, {"number": 44, "name": "元正天皇", "reading": "げんしょうてんのう"}, {"number": 45, "name": "聖武天皇", "reading": "しょうむてんのう"}, {"number": 46, "name": "孝謙天皇", "reading": "こうけんてんのう"}, {"number": 47, "name": "淳仁天皇", "reading": "じゅんにんてんのう"}, {"number": 48, "name": "称徳天皇", "reading": "しょうとくてんのう"}, {"number": 49, "name": "光仁天皇", "reading": "こうにんてんのう"}, {"number": 50, "name": "桓武天皇", "reading": "かんむてんのう"}, {"number": 51, "name": "平城天皇", "reading": "へいぜいてんのう"}, {"number": 52, "name": "嵯峨天皇", "reading": "さがてんのう"}, {"number": 53, "name": "淳和天皇", "reading": "じゅんなてんのう"}, {"number": 54, "name": "仁明天皇", "reading": "にんみょうてんのう"}, {"number": 55, "name": "文徳天皇", "reading": "もんとくてんのう"}, {"number": 56, "name": "清和天皇", "reading": "せいわてんのう"}, {"number": 57, "name": "陽成天皇", "reading": "ようぜいてんのう"}, {"number": 58, "name": "光孝天皇", "reading": "こうこうてんのう"}, {"number": 59, "name": "宇多天皇", "reading": "うだてんのう"}, {"number": 60, "name": "醍醐天皇", "reading": "だいごてんのう"}, {"number": 61, "name": "朱雀天皇", "reading": "すざくてんのう"}, {"number": 62, "name": "村上天皇", "reading": "むらかみてんのう"}, {"number": 63, "name": "冷泉天皇", "reading": "れいぜいてんのう"}, {"number": 64, "name": "円融天皇", "reading": "えんゆうてんのう"}, {"number": 65, "name": "花山天皇", "reading": "かざんてんのう"}, {"number": 66, "name": "一条天皇", "reading": "いちじょうてんのう"}, {"number": 67, "name": "三条天皇", "reading": "さんじょうてんのう"}, {"number": 68, "name": "後一条天皇", "reading": "ごいちじょうてんのう"}, {"number": 69, "name": "後朱雀天皇", "reading": "ごすざくてんのう"}, {"number": 70, "name": "後冷泉天皇", "reading": "ごれいぜいてんのう"}, {"number": 71, "name": "後三条天皇", "reading": "ごさんじょうてんのう"}, {"number": 72, "name": "白河天皇", "reading": "しらかわてんのう"}, {"number": 73, "name": "堀河天皇", "reading": "ほりかわてんのう"}, {"number": 74, "name": "鳥羽天皇", "reading": "とばてんのう"}, {"number": 75, "name": "崇徳天皇", "reading": "すとくてんのう"}, {"number": 76, "name": "近衛天皇", "reading": "このえてんのう"}, {"number": 77, "name": "後白河天皇", "reading": "ごしらかわてんのう"}, {"number": 78, "name": "二条天皇", "reading": "にじょうてんのう"}, {"number": 79, "name": "六条天皇", "reading": "ろくじょうてんのう"}, {"number": 80, "name": "高倉天皇", "reading": "たかくらてんのう"}, {"number": 81, "name": "安徳天皇", "reading": "あんとくてんのう"}, {"number": 82, "name": "後鳥羽天皇", "reading": "ごとばてんのう"}, {"number": 83, "name": "土御門天皇", "reading": "つちみかどてんのう"}, {"number": 84, "name": "順徳天皇", "reading": "じゅんとくてんのう"}, {"number": 85, "name": "仲恭天皇", "reading": "ちゅうきょうてんのう"}, {"number": 86, "name": "後堀河天皇", "reading": "ごほりかわてんのう"}, {"number": 87, "name": "四条天皇", "reading": "しじょうてんのう"}, {"number": 88, "name": "後嵯峨天皇", "reading": "ごさがてんのう"}, {"number": 89, "name": "後深草天皇", "reading": "ごふかくさてんのう"}, {"number": 90, "name": "亀山天皇", "reading": "かめやまてんのう"}, {"number": 91, "name": "後宇多天皇", "reading": "ごうだてんのう"}, {"number": 92, "name": "伏見天皇", "reading": "ふしみてんのう"}, {"number": 93, "name": "後伏見天皇", "reading": "ごふしみてんのう"}, {"number": 94, "name": "後二条天皇", "reading": "ごにじょうてんのう"}, {"number": 95, "name": "花園天皇", "reading": "はなぞのてんのう"}, {"number": 96, "name": "後醍醐天皇", "reading": "ごだいごてんのう"}, {"number": 97, "name": "後村上天皇", "reading": "ごむらかみてんのう"}, {"number": 98, "name": "長慶天皇", "reading": "ちょうけいてんのう"}, {"number": 99, "name": "後亀山天皇", "reading": "ごかめやまてんのう"}, {"number": 100, "name": "後小松天皇", "reading": "ごこまつてんのう"}, {"number": 101, "name": "称光天皇", "reading": "しょうこうてんのう"}, {"number": 102, "name": "後花園天皇", "reading": "ごはなぞのてんのう"}, {"number": 103, "name": "後土御門天皇", "reading": "ごつちみかどてんのう"}, {"number": 104, "name": "後柏原天皇", "reading": "ごかしわばらてんのう"}, {"number": 105, "name": "後奈良天皇", "reading": "ごならてんのう"}, {"number": 106, "name": "正親町天皇", "reading": "おおぎまちてんのう"}, {"number": 107, "name": "後陽成天皇", "reading": "ごようぜいてんのう"}, {"number": 108, "name": "後水尾天皇", "reading": "ごみずのおてんのう"}, {"number": 109, "name": "明正天皇", "reading": "めいしょうてんのう"}, {"number": 110, "name": "後光明天皇", "reading": "ごこうみょうてんのう"}, {"number": 111, "name": "後西天皇", "reading": "ごさいてんのう"}, {"number": 112, "name": "霊元天皇", "reading": "れいげんてんのう"}, {"number": 113, "name": "東山天皇", "reading": "ひがしやまてんのう"}, {"number": 114, "name": "中御門天皇", "reading": "なかみかどてんのう"}, {"number": 115, "name": "桜町天皇", "reading": "さくらまちてんのう"}, {"number": 116, "name": "桃園天皇", "reading": "ももぞのてんのう"}, {"number": 117, "name": "後桜町天皇", "reading": "ごさくらまちてんのう"}, {"number": 118, "name": "後桃園天皇", "reading": "ごももぞのてんのう"}, {"number": 119, "name": "光格天皇", "reading": "こうかくてんのう"}, {"number": 120, "name": "仁孝天皇", "reading": "にんこうてんのう"}, {"number": 121, "name": "孝明天皇", "reading": "こうめいてんのう"}, {"number": 122, "name": "明治天皇", "reading": "めいじてんのう"}, {"number": 123, "name": "大正天皇", "reading": "たいしょうてんのう"}, {"number": 124, "name": "昭和天皇", "reading": "しょうわてんのう"}, {"number": 125, "name": "上皇明仁", "reading": "じょうこうあきひと"}, {"number": 126, "name": "今上天皇", "reading": "きんじょうてんのう"}];

const homeScreen = document.getElementById("homeScreen");
const viewerScreen = document.getElementById("viewerScreen");
const startButton = document.getElementById("startButton");
const continueButton = document.getElementById("continueButton");
const homeButton = document.getElementById("homeButton");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");

const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");
const numberText = document.getElementById("numberText");
const nameText = document.getElementById("nameText");
const readingText = document.getElementById("readingText");

const STORAGE_KEY = "rekidai-tenno-current-index";
let currentIndex = 0;

function readSavedIndex() {
  const value = Number(localStorage.getItem(STORAGE_KEY));
  return Number.isInteger(value) && value >= 0 && value < emperors.length ? value : 0;
}

function saveIndex() {
  localStorage.setItem(STORAGE_KEY, String(currentIndex));
}

function updateContinueButton() {
  const saved = readSavedIndex();
  if (saved > 0) {
    continueButton.classList.remove("hidden");
    continueButton.textContent = `続きから（第${emperors[saved].number}代 ${emperors[saved].name}）`;
  } else {
    continueButton.classList.add("hidden");
  }
}

function showHome() {
  viewerScreen.classList.remove("active");
  homeScreen.classList.add("active");
  updateContinueButton();
}

function showViewer(index) {
  currentIndex = Math.max(0, Math.min(index, emperors.length - 1));
  homeScreen.classList.remove("active");
  viewerScreen.classList.add("active");
  render();
}

function render() {
  const emperor = emperors[currentIndex];
  progressText.textContent = `${currentIndex + 1} / ${emperors.length}`;
  progressBar.style.width = `${((currentIndex + 1) / emperors.length) * 100}%`;
  numberText.textContent = `第${emperor.number}代`;
  nameText.textContent = emperor.name;
  readingText.textContent = emperor.reading;
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === emperors.length - 1;
  saveIndex();
  document.title = `第${emperor.number}代 ${emperor.name}｜歴代天皇126`;
}

startButton.addEventListener("click", () => showViewer(0));
continueButton.addEventListener("click", () => showViewer(readSavedIndex()));
homeButton.addEventListener("click", showHome);

nextButton.addEventListener("click", () => {
  if (currentIndex < emperors.length - 1) {
    currentIndex += 1;
    render();
  }
});

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex -= 1;
    render();
  }
});

document.addEventListener("keydown", (event) => {
  if (!viewerScreen.classList.contains("active")) return;
  if (event.key === "ArrowRight" && currentIndex < emperors.length - 1) {
    currentIndex += 1;
    render();
  }
  if (event.key === "ArrowLeft" && currentIndex > 0) {
    currentIndex -= 1;
    render();
  }
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./service-worker.js"));
}

updateContinueButton();
