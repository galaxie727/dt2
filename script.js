const characters = [
  {
    id: "dekabusa",
    name: "デカブサ",
    attr: "water",
    role: "バランス",
    roleType: "balance",
    hp: 120,
    atk: 32,
    def: 28,
    spd: 18,
    img: "img/dekabusa.png",
    passive: "安定した戦いが得意。",
    skill: "全体的に平均的。",
    desc: "デカブサ大戦の主人公。クセが少なく使いやすい。"
  },
  {
    id: "ani",
    name: "デカブサ兄",
    attr: "fire",
    role: "アタッカー",
    roleType: "attack",
    hp: 108,
    atk: 40,
    def: 24,
    spd: 22,
    img: "img/ani.png",
    passive: "火力寄りの兄貴分。",
    skill: "押し切り性能が高い。",
    desc: "攻撃性能が高く、勝負を決めに行ける。"
  },
  {
    id: "nise",
    name: "ニセブサ",
    attr: "grass",
    role: "トリッキー",
    roleType: "trick",
    hp: 112,
    atk: 30,
    def: 26,
    spd: 26,
    img: "img/nise.png",
    passive: "少し速くて読みにくい。",
    skill: "搦め手タイプ。",
    desc: "見た目は似ているが、立ち回りはかなり違う。"
  },
  {
    id: "kabao",
    name: "カバオ",
    attr: "water",
    role: "タンク",
    roleType: "tank",
    hp: 145,
    atk: 24,
    def: 36,
    spd: 10,
    img: "img/kabao.png",
    passive: "とにかく固い。",
    skill: "耐久寄り。",
    desc: "長期戦に強い、受けの要。"
  },
  {
    id: "gori",
    name: "ゴリさん",
    attr: "grass",
    role: "パワー",
    roleType: "tank",
    hp: 132,
    atk: 36,
    def: 30,
    spd: 12,
    img: "img/gori.png",
    passive: "重い一撃を持つ。",
    skill: "耐久も火力も高め。",
    desc: "重量級で崩れにくい。"
  },
  {
    id: "king",
    name: "キング",
    attr: "fire",
    role: "フィニッシャー",
    roleType: "finisher",
    hp: 100,
    atk: 42,
    def: 20,
    spd: 24,
    img: "img/king.png",
    passive: "勝負所に強い。",
    skill: "決め役向き。",
    desc: "高火力で試合を締めるタイプ。"
  },
  {
    id: "panpan",
    name: "パンパン",
    attr: "fire",
    role: "ロマン",
    roleType: "attack",
    hp: 104,
    atk: 44,
    def: 18,
    spd: 20,
    img: "img/panpan.png",
    passive: "当たれば強い。",
    skill: "爆発力あり。",
    desc: "波はあるがハマると強い。"
  },
  {
    id: "juzo",
    name: "ジュウゾウ",
    attr: "water",
    role: "迎撃",
    roleType: "balance",
    hp: 118,
    atk: 34,
    def: 30,
    spd: 16,
    img: "img/juzo.png",
    passive: "受けて返すタイプ。",
    skill: "安定感あり。",
    desc: "守ってからしっかり返せる。"
  },
  {
    id: "ratel",
    name: "ラテロウ",
    attr: "fire",
    role: "スピード",
    roleType: "speed",
    hp: 92,
    atk: 34,
    def: 18,
    spd: 36,
    img: "img/rate.png",
    passive: "かなり速い。",
    skill: "先手を取りやすい。",
    desc: "最速クラスで先に動ける。"
  },
  {
    id: "namaken",
    name: "ナマケン",
    attr: "grass",
    role: "奇襲",
    roleType: "speed",
    hp: 110,
    atk: 38,
    def: 22,
    spd: 28,
    img: "img/namaken.png",
    passive: "速めの奇襲型。",
    skill: "テンポ良く攻める。",
    desc: "素早さを活かして押していく。"
  },
  {
    id: "tora",
    name: "トラさん",
    attr: "grass",
    role: "スピード",
    roleType: "speed",
    hp: 98,
    atk: 34,
    def: 20,
    spd: 38,
    img: "img/tora.png",
    passive: "分身で翻弄する。",
    skill: "非常に素早い。",
    desc: "最速クラス。防御は薄め。"
  },
  {
    id: "kanemon",
    name: "カンえもん",
    attr: "water",
    role: "トリッキー",
    roleType: "trick",
    hp: 110,
    atk: 30,
    def: 26,
    spd: 29,
    img: "img/kanemon.png",
    passive: "ポケットから何か出す。",
    skill: "読みにくい戦い方。",
    desc: "何をするか分からない不思議枠。"
  }
];

let battleMode = "normal";
let team = [];
let enemyTeam = [];
let battleSpeed = "normal";

let currentDeckIndex = null;
let selectedTestEnemy = null;

let battleState = {
  turn: 1,
  allies: [],
  enemies: [],
  finished: false,
  winner: null,
  mvp: null,
  log: [],
  lastAlly: null,
  lastEnemy: null
};

const DECK_KEY = "dekabusaDecks";

const speedMap = {
  normal: 1,
  fast: 0.55,
  turbo: 0.2
};

const $ = (id) => document.getElementById(id);

/* ================= 共通 ================= */

function attrLabel(attr){
  if(attr === "fire") return "火";
  if(attr === "water") return "水";
  if(attr === "grass") return "草";
  return "-";
}
function attrClass(attr){
  if(attr === "fire") return "attr-fire";
  if(attr === "water") return "attr-water";
  if(attr === "grass") return "attr-grass";
  return "";
}
function attrBadgeClass(attr){
  if(attr === "fire") return "badge-attr-fire";
  if(attr === "water") return "badge-attr-water";
  if(attr === "grass") return "badge-attr-grass";
  return "";
}
function attrCardClass(attr){
  if(attr === "fire") return "fire";
  if(attr === "water") return "water";
  if(attr === "grass") return "grass";
  return "none";
}
function roleTypeLabel(type){
  if(type === "attack") return "攻撃";
  if(type === "tank") return "耐久";
  if(type === "speed") return "先手";
  if(type === "balance") return "万能";
  if(type === "finisher") return "後半";
  if(type === "trick") return "搦手";
  return "-";
}
function showScreen(id){
  [
    "screenTitle",
    "screenBuild",
    "screenDeck",
    "screenDex",
    "screenDexDetail",
    "screenTest",
    "screenBattle"
  ].forEach(s => {
    const el = $(s);
    if(el) el.hidden = true;
  });
  $(id).hidden = false;
}
function cloneChar(c){
  return {
    ...c,
    currentHp: c.hp,
    alive: true,
    dealt: 0,
    taken: 0,
    wins: 0
  };
}
function wait(ms){
  return new Promise(resolve => setTimeout(resolve, ms * speedMap[battleSpeed]));
}
function getChar(id){
  return characters.find(c => c.id === id);
}
function getWinRate(record){
  if(!record || record.battle === 0) return 0;
  return Math.round((record.win / record.battle) * 100);
}
function getLeadName(deck){
  if(!deck || !deck.team || !deck.team.length) return "-";
  const leadId = deck.team[0];
  const ch = getChar(leadId);
  return ch ? ch.name : "-";
}

/* ================= 画面遷移 ================= */

function goTitle(){
  showScreen("screenTitle");
}
function goBuild(){
  showScreen("screenBuild");
  renderBuildScreen();
}
function goDeck(){
  showScreen("screenDeck");
  renderDeckList();
}
function goDex(){
  showScreen("screenDex");
  renderDexList();
}
function goDexDetail(id){
  const ch = getChar(id);
  if(!ch) return;

  showScreen("screenDexDetail");

  $("dexDetailImg").src = ch.img;
  $("dexDetailName").textContent = ch.name;
  $("dexDetailAttr").textContent = attrLabel(ch.attr);
  $("dexDetailAttr").className = `dexDetailAttr ${attrClass(ch.attr)}`;
  $("dexDetailRole").textContent = `${ch.role} / ${roleTypeLabel(ch.roleType)}`;
  $("dexDetailSkill").textContent = `${ch.passive}\n${ch.skill}`;
  $("dexDetailDesc").textContent = ch.desc;

  $("dexDetailStats").innerHTML = `
    <div class="dexStat">
      <div class="dexStatLabel">HP</div>
      <div class="dexStatValue">${ch.hp}</div>
    </div>
    <div class="dexStat">
      <div class="dexStatLabel">攻撃</div>
      <div class="dexStatValue">${ch.atk}</div>
    </div>
    <div class="dexStat">
      <div class="dexStatLabel">防御</div>
      <div class="dexStatValue">${ch.def}</div>
    </div>
    <div class="dexStat">
      <div class="dexStatLabel">速度</div>
      <div class="dexStatValue">${ch.spd}</div>
    </div>
  `;
}
function goTest(){
  showScreen("screenTest");
  renderTestEnemyGrid();
}

/* ================= モード・速度 ================= */

function setMode(modeNum){
  battleMode = modeNum === 3 ? "fixed" : "normal";
  $("mode5").classList.toggle("active", modeNum === 5);
  $("mode3").classList.toggle("active", modeNum === 3);
}
function setBattleSpeed(mode, btn){
  battleSpeed = mode;
  document.querySelectorAll(".speedBtn").forEach(b => b.classList.remove("active"));
  if(btn) btn.classList.add("active");
}

/* ================= 編成 ================= */

function renderBuildScreen(){
  renderPickGrid();
  renderTeamList();
}

function renderPickGrid(){
  const wrap = $("pickGrid");
  wrap.innerHTML = "";

  characters.forEach(ch => {
    const selected = team.some(t => t.id === ch.id);

    const card = document.createElement("div");
    card.className = `pickCardBig ${selected ? "selected" : ""}`;
    card.innerHTML = `
      <div class="cardMain">
        <div class="cardImgWrap">
          <img src="${ch.img}" class="cardImg" alt="${ch.name}">
        </div>

        <div class="cardInfo">
          <div class="cardTopLine">
            <div class="cardName">${ch.name}</div>
            <div class="cardAttr ${attrClass(ch.attr)}">${attrLabel(ch.attr)}</div>
          </div>

          <div class="cardRole">${ch.role}</div>
          <div class="cardStats">
            HP ${ch.hp} / 攻 ${ch.atk} / 防 ${ch.def} / 速 ${ch.spd}
          </div>

          <div class="roleRow">
            <span class="roleTag type-${ch.roleType}">${roleTypeLabel(ch.roleType)}</span>
          </div>

          <div class="cardSkill">${ch.passive}</div>
          <div class="cardEquip">${ch.skill}</div>

          <div class="cardButtons">
            ${
              selected
                ? `<button class="btnSub" onclick="removeFromTeam('${ch.id}')">外す</button>`
                : `<button class="btnMain" onclick="addToTeam('${ch.id}')">選ぶ</button>`
            }
            <button class="btnDetail" onclick="goDexDetail('${ch.id}')">図鑑</button>
            <button class="btnEquip" onclick="quickTest('${ch.id}')">試す</button>
          </div>
        </div>
      </div>
    `;
    wrap.appendChild(card);
  });
}

function renderTeamList(){
  const wrap = $("teamList");
  wrap.innerHTML = "";

  const need = battleMode === "fixed" ? 3 : 5;

  for(let i = 0; i < need; i++){
    const member = team[i];
    const row = document.createElement("div");
    row.className = "teamSlot";

    if(member){
      row.innerHTML = `
        <div class="slotNum">${i+1}</div>
        <img class="slotThumb" src="${member.img}" alt="${member.name}">
        <div class="slotMain">
          <div class="slotName">${member.name}</div>
          <div class="slotMeta">${attrLabel(member.attr)} / ${member.role}</div>
          <div class="slotEquip">${member.skill}</div>
          <button class="removeBtn" onclick="removeFromTeam('${member.id}')">外す</button>
        </div>
        <div class="moveBtns">
          <button class="moveBtn" onclick="moveUp(${i})" ${i===0 ? "disabled" : ""}>▲</button>
          <button class="moveBtn" onclick="moveDown(${i})" ${i===need-1 || i===team.length-1 ? "disabled" : ""}>▼</button>
        </div>
      `;
    }else{
      row.innerHTML = `
        <div class="slotNum">${i+1}</div>
        <div class="slotThumb"></div>
        <div class="slotMain">
          <div class="slotName slotEmpty">未選択</div>
          <div class="slotMeta">ここに入れる</div>
        </div>
        <div></div>
      `;
    }

    wrap.appendChild(row);
  }
}

function addToTeam(id){
  const limit = battleMode === "fixed" ? 3 : 5;
  if(team.length >= limit) return;
  if(team.some(t => t.id === id)) return;

  const ch = getChar(id);
  if(!ch) return;
  team.push(cloneChar(ch));
  renderBuildScreen();
}

function removeFromTeam(id){
  team = team.filter(t => t.id !== id);
  renderBuildScreen();
}

function moveUp(index){
  if(index <= 0) return;
  [team[index-1], team[index]] = [team[index], team[index-1]];
  renderBuildScreen();
}

function moveDown(index){
  const limit = battleMode === "fixed" ? 3 : 5;
  if(index >= limit - 1) return;
  if(index >= team.length - 1) return;
  [team[index+1], team[index]] = [team[index], team[index+1]];
  renderBuildScreen();
}

/* ================= 図鑑一覧 ================= */

function renderDexList(){
  const wrap = $("dexList");
  wrap.innerHTML = "";

  characters.forEach(ch => {
    const row = document.createElement("div");
    row.className = "dexRow";
    row.innerHTML = `
      <img class="dexThumb" src="${ch.img}" alt="${ch.name}">
      <div>
        <div class="dexName">${ch.name}</div>
        <div class="dexMini">${ch.role}</div>
      </div>
      <div class="dexAttr ${attrClass(ch.attr)}">${attrLabel(ch.attr)}</div>
    `;
    row.onclick = () => goDexDetail(ch.id);
    wrap.appendChild(row);
  });
}

/* ================= お試し前半 ================= */

function renderTestEnemyGrid(){
  const wrap = $("testEnemyGrid");
  wrap.innerHTML = "";

  characters.forEach(ch => {
    const card = document.createElement("div");
    card.className = "testEnemyCard";
    card.innerHTML = `
      <img src="${ch.img}" alt="${ch.name}">
      <div class="testEnemyName">${ch.name}</div>
      <div class="testEnemyAttr">${attrLabel(ch.attr)} / ${ch.role}</div>
      <button class="testEnemyBtn" onclick="selectTestEnemy('${ch.id}')">選ぶ</button>
    `;
    wrap.appendChild(card);
  });
}

function selectTestEnemy(id){
  selectedTestEnemy = getChar(id);
  if(!selectedTestEnemy) return;
  alert(`${selectedTestEnemy.name} を選択`);
}

function quickTest(id){
  const ch = getChar(id);
  if(!ch) return;
  selectedTestEnemy = ch;
  goTest();
}

/* ================= デッキ保存 前半 ================= */

function loadDecks(){
  const raw = localStorage.getItem(DECK_KEY);
  if(!raw) return [];
  try{
    return JSON.parse(raw);
  }catch(e){
    return [];
  }
}

function saveDecks(decks){
  localStorage.setItem(DECK_KEY, JSON.stringify(decks));
}

function renderDeckList(){
  const decks = loadDecks();
  const wrap = $("deckList");
  wrap.innerHTML = "";

  for(let i=0;i<3;i++){
    const deck = decks[i];
    const div = document.createElement("div");
    div.className = "deckItem";

    if(deck){
      const rate = getWinRate(deck.record);
      div.innerHTML = `
        <div class="deckHead">
          <div class="deckName">${deck.name}</div>
          <div class="deckMode">${deck.mode === "fixed" ? "対面固定" : "通常"}</div>
        </div>

        <div class="deckStats">
          ${deck.record?.battle || 0}戦 ${deck.record?.win || 0}勝 ${rate}%
        </div>

        <div class="deckLead">
          先鋒: ${getLeadName(deck)}
        </div>

        <div class="deckBtns">
          <button onclick="saveToSlot(${i})">保存</button>
          <button onclick="loadFromSlot(${i})">読込</button>
          <button onclick="deleteFromSlot(${i})">削除</button>
        </div>
      `;
    }else{
      div.innerHTML = `
        <div class="deckHead">
          <div class="deckName">空きスロット</div>
          <div class="deckMode">-</div>
        </div>

        <div class="deckStats">保存するとここに入る</div>
        <div class="deckLead">先鋒: -</div>

        <div class="deckBtns">
          <button onclick="saveToSlot(${i})">保存</button>
        </div>
      `;
    }

    wrap.appendChild(div);
  }
}
/* ================= デッキ保存 後半 ================= */

function saveToSlot(index){
  const decks = loadDecks();
  const name = $("deckName").value.trim() || `デッキ${index+1}`;

  decks[index] = {
    name,
    mode: battleMode,
    team: team.map(c => c.id),
    record: decks[index]?.record || {
      battle: 0,
      win: 0,
      lose: 0
    }
  };

  saveDecks(decks);
  renderDeckList();
}

function saveDeck(){
  goDeck();
}

function loadFromSlot(index){
  const decks = loadDecks();
  const deck = decks[index];
  if(!deck) return;

  currentDeckIndex = index;
  team = deck.team
    .map(id => getChar(id))
    .filter(Boolean)
    .map(c => cloneChar(c));

  battleMode = deck.mode || "normal";
  $("mode5").classList.toggle("active", battleMode !== "fixed");
  $("mode3").classList.toggle("active", battleMode === "fixed");

  renderBuildScreen();
  goBuild();
}

function loadDeck(){
  const code = $("deckCode").value.trim();
  if(!code) return alert("コードを貼ってください");

  try{
    const json = decodeURIComponent(escape(atob(code)));
    const data = JSON.parse(json);

    if(!Array.isArray(data.team)) throw new Error();

    team = data.team
      .map(id => getChar(id))
      .filter(Boolean)
      .map(c => cloneChar(c));

    battleMode = data.mode || "normal";
    $("mode5").classList.toggle("active", battleMode !== "fixed");
    $("mode3").classList.toggle("active", battleMode === "fixed");

    renderBuildScreen();
    goBuild();
  }catch(e){
    alert("コードが不正です");
  }
}

function deleteFromSlot(index){
  const decks = loadDecks();
  if(!decks[index]) return;

  const ok = confirm("このデッキを削除しますか？");
  if(!ok) return;

  decks[index] = null;
  saveDecks(decks);
  renderDeckList();
}

function updateDeckRecord(index, isWin){
  const decks = loadDecks();
  const deck = decks[index];
  if(!deck) return;

  if(!deck.record){
    deck.record = { battle: 0, win: 0, lose: 0 };
  }

  deck.record.battle += 1;
  if(isWin) deck.record.win += 1;
  else deck.record.lose += 1;

  saveDecks(decks);
}

/* ================= バトル ================= */

function typeBonus(attacker, defender){
  if(attacker.attr === "fire" && defender.attr === "grass") return 1.2;
  if(attacker.attr === "grass" && defender.attr === "water") return 1.2;
  if(attacker.attr === "water" && defender.attr === "fire") return 1.2;

  if(attacker.attr === "grass" && defender.attr === "fire") return 0.85;
  if(attacker.attr === "water" && defender.attr === "grass") return 0.85;
  if(attacker.attr === "fire" && defender.attr === "water") return 0.85;

  return 1;
}

function calcDamage(attacker, defender){
  const base = attacker.atk - defender.def * 0.35;
  const random = 0.9 + Math.random() * 0.2;
  const type = typeBonus(attacker, defender);
  return Math.max(6, Math.round(base * random * type));
}

function speedOrder(a, b){
  if(a.spd === b.spd) return Math.random() - 0.5;
  return b.spd - a.spd;
}

function attack(attacker, defender, sideText){
  if(!attacker.alive || !defender.alive) return;

  const dmg = calcDamage(attacker, defender);
  defender.currentHp = Math.max(0, defender.currentHp - dmg);

  attacker.dealt += dmg;
  defender.taken += dmg;

  logLine(`${sideText}${attacker.name} → ${defender.name} に ${dmg} ダメージ`);

  if(defender.currentHp <= 0){
    defender.alive = false;
    attacker.wins += 1;
    logLine(`${defender.name} が倒れた`);
  }
}

function firstAlive(arr, startIndex = 0){
  for(let i = startIndex; i < arr.length; i++){
    if(arr[i] && arr[i].alive) return i;
  }
  return -1;
}

function updateBattleMeta(){
  $("battleModeText").textContent = battleMode === "fixed" ? "MODE 対面固定" : "MODE 通常";
  $("battleTurnText").textContent = `TURN ${battleState.turn}`;

  const allyAlive = battleState.allies.filter(x => x.alive).length;
  const enemyAlive = battleState.enemies.filter(x => x.alive).length;

  $("playerAliveText").textContent = `自分 残り${allyAlive}`;
  $("enemyAliveText").textContent = `敵 残り${enemyAlive}`;
}

function logLine(text){
  battleState.log.push(text);
  $("liveTicker").textContent = text;

  const div = document.createElement("div");
  div.className = "logLine";
  div.textContent = text;
  $("logPanel").appendChild(div);
  $("logPanel").scrollTop = $("logPanel").scrollHeight;
}

function renderStatusRows(activeAlly = -1, activeEnemy = -1){
  const rows = $("statusRows");
  rows.innerHTML = "";

  const count = Math.max(battleState.allies.length, battleState.enemies.length);

  for(let i = 0; i < count; i++){
    const ally = battleState.allies[i];
    const enemy = battleState.enemies[i];

    const row = document.createElement("div");
    row.className = "statusRow";

    const allyBadge = ally ? (ally.alive ? (i === activeAlly && !battleState.finished ? "★" : "○") : "×") : "";
    const enemyBadge = enemy ? (enemy.alive ? (i === activeEnemy && !battleState.finished ? "★" : "○") : "×") : "";

    row.innerHTML = `
      <div class="miniSideCard playerSide ${ally && !ally.alive ? "dead" : ""} ${i===activeAlly && !battleState.finished ? "active" : ""}" data-side="ally" data-idx="${i}">
        ${ally ? `<img src="${ally.img}" alt="${ally.name}">` : `<div></div>`}
        <div class="miniSideMain">
          <div class="miniSideName">${ally ? ally.name : "-"}</div>
          <div class="miniSideMeta">${ally ? `HP ${ally.currentHp}` : ""}</div>
        </div>
        <div class="miniSideBadge">${allyBadge}</div>
      </div>

      <div class="boardVs">
        <div class="boardLink ${i===activeAlly && i===activeEnemy && !battleState.finished ? "active" : ""}"></div>
      </div>

      <div class="miniSideCard right enemySide ${enemy && !enemy.alive ? "dead" : ""} ${i===activeEnemy && !battleState.finished ? "active" : ""}" data-side="enemy" data-idx="${i}">
        <div class="miniSideBadge">${enemyBadge}</div>
        <div class="miniSideMain" style="text-align:right">
          <div class="miniSideName">${enemy ? enemy.name : "-"}</div>
          <div class="miniSideMeta">${enemy ? `HP ${enemy.currentHp}` : ""}</div>
        </div>
        ${enemy ? `<img src="${enemy.img}" alt="${enemy.name}">` : `<div></div>`}
      </div>
    `;
    rows.appendChild(row);
  }
}

function drawBattleLines(activeAlly = -1, activeEnemy = -1){
  const svg = $("statusLines");
  svg.innerHTML = "";

  if(activeAlly < 0 || activeEnemy < 0 || battleState.finished) return;

  const wrap = document.querySelector(".statusBoardWrap").getBoundingClientRect();
  const from = document.querySelector(`.miniSideCard[data-side="ally"][data-idx="${activeAlly}"]`);
  const to = document.querySelector(`.miniSideCard[data-side="enemy"][data-idx="${activeEnemy}"]`);
  if(!from || !to) return;

  const fr = from.getBoundingClientRect();
  const tr = to.getBoundingClientRect();

  const x1 = fr.right - wrap.left;
  const y1 = fr.top + fr.height / 2 - wrap.top;
  const x2 = tr.left - wrap.left;
  const y2 = tr.top + tr.height / 2 - wrap.top;

  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", x1);
  line.setAttribute("y1", y1);
  line.setAttribute("x2", x2);
  line.setAttribute("y2", y2);
  line.setAttribute("stroke", "rgba(255,255,255,.95)");
  line.setAttribute("stroke-width", "3");
  line.setAttribute("stroke-linecap", "round");

  svg.appendChild(line);
}

function renderFighterCards(ally, enemy){
  if(ally){
    $("playerCard").className = `fighterCard ${attrCardClass(ally.attr)}`;
    $("playerFighterImg").src = ally.img;
    $("playerFighterName").textContent = ally.name;
    $("playerFighterRole").textContent = ally.role;
    $("playerFighterEquip").textContent = ally.skill;
    $("playerHpText").textContent = `${ally.currentHp} / ${ally.hp}`;
    const pct = Math.max(0, ally.currentHp / ally.hp * 100);
    $("playerHpFill").style.width = pct + "%";
    $("playerHpFill").className = `hpFill ${pct <= 30 ? "low" : pct <= 60 ? "mid" : "high"}`;
    $("playerBadges").innerHTML = `
      <span class="infoBadge ${attrBadgeClass(ally.attr)}">${attrLabel(ally.attr)}</span>
      <span class="infoBadge">${ally.role}</span>
    `;
  }

  if(enemy){
    $("enemyCard").className = `fighterCard ${attrCardClass(enemy.attr)}`;
    $("enemyFighterImg").src = enemy.img;
    $("enemyFighterName").textContent = enemy.name;
    $("enemyFighterRole").textContent = enemy.role;
    $("enemyFighterEquip").textContent = enemy.skill;
    $("enemyHpText").textContent = `${enemy.currentHp} / ${enemy.hp}`;
    const pct = Math.max(0, enemy.currentHp / enemy.hp * 100);
    $("enemyHpFill").style.width = pct + "%";
    $("enemyHpFill").className = `hpFill ${pct <= 30 ? "low" : pct <= 60 ? "mid" : "high"}`;
    $("enemyBadges").innerHTML = `
      <span class="infoBadge ${attrBadgeClass(enemy.attr)}">${attrLabel(enemy.attr)}</span>
      <span class="infoBadge">${enemy.role}</span>
    `;
  }
}

async function runNormalBattle(){
  let ai = firstAlive(battleState.allies, 0);
  let ei = firstAlive(battleState.enemies, 0);

  while(ai !== -1 && ei !== -1){
    const ally = battleState.allies[ai];
    const enemy = battleState.enemies[ei];

    battleState.lastAlly = ally;
    battleState.lastEnemy = enemy;

    renderStatusRows(ai, ei);
    drawBattleLines(ai, ei);
    renderFighterCards(ally, enemy);

    logLine(`--- ${ally.name} vs ${enemy.name} ---`);
    await wait(400);

    while(ally.alive && enemy.alive){
      const order = [ally, enemy].sort(speedOrder);

      attack(order[0], order[1], order[0] === ally ? "自分 " : "敵 ");
      renderFighterCards(ally, enemy);
      renderStatusRows(ai, ei);
      updateBattleMeta();
      await wait(380);

      if(order[1].alive){
        attack(order[1], order[0], order[1] === ally ? "自分 " : "敵 ");
        renderFighterCards(ally, enemy);
        renderStatusRows(ai, ei);
        updateBattleMeta();
        await wait(380);
      }

      battleState.turn++;
      updateBattleMeta();
    }

    ai = firstAlive(battleState.allies, ai);
    ei = firstAlive(battleState.enemies, ei);
  }

  finishBattle();
}

async function runFixedBattle(){
  const count = Math.min(battleState.allies.length, battleState.enemies.length);

  for(let i = 0; i < count; i++){
    const ally = battleState.allies[i];
    const enemy = battleState.enemies[i];

    if(!ally || !enemy) continue;

    battleState.lastAlly = ally;
    battleState.lastEnemy = enemy;

    renderStatusRows(i, i);
    drawBattleLines(i, i);
    renderFighterCards(ally, enemy);

    logLine(`--- ${i+1}戦目 ${ally.name} vs ${enemy.name} ---`);
    await wait(400);

    while(ally.alive && enemy.alive){
      const order = [ally, enemy].sort(speedOrder);

      attack(order[0], order[1], order[0] === ally ? "自分 " : "敵 ");
      renderFighterCards(ally, enemy);
      renderStatusRows(i, i);
      updateBattleMeta();
      await wait(380);

      if(order[1].alive){
        attack(order[1], order[0], order[1] === ally ? "自分 " : "敵 ");
        renderFighterCards(ally, enemy);
        renderStatusRows(i, i);
        updateBattleMeta();
        await wait(380);
      }

      battleState.turn++;
      updateBattleMeta();
    }
  }

  finishBattle();
}

function calcMVP(){
  const all = [...battleState.allies, ...battleState.enemies];
  let best = all[0];
  let bestScore = -999999;

  all.forEach(ch => {
    const score = ch.dealt + ch.wins * 60 + (ch.alive ? 25 : 0);
    if(score > bestScore){
      bestScore = score;
      best = ch;
    }
  });

  return best;
}

function renderMiniResultCard(prefix, ch, winSide){
  if(!ch) return;

  $(`${prefix}Card`).className = `fighterCard ${attrCardClass(ch.attr)} ${winSide ? "" : "resultCardGhost"}`;
  $(`${prefix}Name`).textContent = ch.name;
  $(`${prefix}Role`).textContent = ch.role;
  $(`${prefix}Equip`).textContent = ch.skill;
  $(`${prefix}Img`).src = ch.img;

  $(`${prefix}Hp`).textContent = `${ch.currentHp} / ${ch.hp}`;
  const pct = Math.max(0, ch.currentHp / ch.hp * 100);
  $(`${prefix}HpFill`).style.width = pct + "%";
  $(`${prefix}HpFill`).className = `hpFill ${pct <= 30 ? "low" : pct <= 60 ? "mid" : "high"}`;

  $(`${prefix}Badges`).innerHTML = `
    <span class="infoBadge ${attrBadgeClass(ch.attr)}">${attrLabel(ch.attr)}</span>
    <span class="infoBadge">${winSide ? "最後まで残った" : "最後の相手"}</span>
  `;
}

function renderResultCards(playerWin){
  const allyChar = battleState.lastAlly || battleState.allies[0];
  const enemyChar = battleState.lastEnemy || battleState.enemies[0];

  $("resultPlayerOutcome").textContent = playerWin ? "勝ち" : "負け";
  $("resultEnemyOutcome").textContent = playerWin ? "負け" : "勝ち";
  $("resultPlayerOutcome").className = `resultOutcome ${playerWin ? "win" : "lose"}`;
  $("resultEnemyOutcome").className = `resultOutcome ${playerWin ? "lose" : "win"}`;

  renderMiniResultCard("resultPlayer", allyChar, playerWin);
  renderMiniResultCard("resultEnemy", enemyChar, !playerWin);
}

function showMVP(ch){
  $("mvpImg").src = ch.img;
  $("mvpName").textContent = ch.name;
  $("mvpStats").textContent = `与ダメ ${ch.dealt}\n撃破 ${ch.wins}`;
  $("mvpLine").textContent = `${ch.name} が一番活躍した`;
  $("mvpPanel").hidden = false;
  $("mvpPanel").classList.add("show");
}

function finishBattle(){
  battleState.finished = true;

  const allyAlive = battleState.allies.filter(x => x.alive).length;
  const enemyAlive = battleState.enemies.filter(x => x.alive).length;

  let playerWin = false;
  if(battleMode === "fixed"){
    const allyWins = battleState.allies.reduce((s, c) => s + c.wins, 0);
    const enemyWins = battleState.enemies.reduce((s, c) => s + c.wins, 0);
    playerWin = allyWins >= enemyWins;
  }else{
    playerWin = allyAlive > 0 && enemyAlive === 0;
  }

  battleState.winner = playerWin ? "ally" : "enemy";
  battleState.mvp = calcMVP();

  renderStatusRows(-1, -1);
  drawBattleLines(-1, -1);

  $("battleActions").hidden = false;
  $("resultTitle").textContent = playerWin ? "WIN" : "LOSE";
  $("resultSub").textContent = playerWin ? "勝った" : "負けた";
  $("summaryCard").textContent =
    `自分残り ${allyAlive}\n敵残り ${enemyAlive}\n\nMVP: ${battleState.mvp.name}`;

  renderResultCards(playerWin);
  showMVP(battleState.mvp);

  if(currentDeckIndex !== null){
    updateDeckRecord(currentDeckIndex, playerWin);
  }
}

async function startBattle(){
  const need = battleMode === "fixed" ? 3 : 5;
  if(team.length !== need){
    alert(`${need}体選んでください`);
    return;
  }

  const pool = characters.filter(c => !team.some(t => t.id === c.id));
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  enemyTeam = shuffled.slice(0, need).map(c => cloneChar(c));

  battleState = {
    turn: 1,
    allies: team.map(c => cloneChar(c)),
    enemies: enemyTeam.map(c => cloneChar(c)),
    finished: false,
    winner: null,
    mvp: null,
    log: [],
    lastAlly: null,
    lastEnemy: null
  };

  showScreen("screenBattle");
  $("logPanel").innerHTML = "";
  $("battleActions").hidden = true;
  $("mvpPanel").hidden = true;
  $("mvpPanel").classList.remove("show");

  updateBattleMeta();
  renderStatusRows();
  $("liveTicker").textContent = "対戦開始。";

  if(battleMode === "fixed") await runFixedBattle();
  else await runNormalBattle();
}

function rematch(){
  startBattle();
}

/* ================= 起動 ================= */

window.addEventListener("resize", () => {
  if(!battleState.finished){
    drawBattleLines(-1, -1);
  }
});

goTitle();
