const characters = [
  {
    id:"dekabusa",
    name:"デカブサ",
    attr:"water",
    role:"安定",
    roleType:"balance",
    hp:130, atk:25, def:22, spd:8,
    img:"./dekabusa.png",
    passive:"背水：HP50%以下で与ダメージ+50%",
    desc:"耐久寄りの安定型。",
    mvpLine:"まあ、こんな日もある。",
    skills:[
      {id:"db_hp",name:"しぶとい",desc:"最大HP+10",effect:{hp:10}},
      {id:"db_atk",name:"重い一撃",desc:"攻撃+4",effect:{atk:4}},
      {id:"db_guard",name:"ねばる",desc:"初回被ダメージ-20%",effect:{firstReduce:0.2}}
    ]
  },
  {
    id:"kabao",
    name:"カバオ",
    attr:"water",
    role:"耐久・回復",
    roleType:"tank",
    hp:145, atk:26, def:28, spd:10,
    img:"./kabao.png",
    passive:"回復：ターン終了時にHP8回復",
    desc:"圧倒的な耐久力で粘る。",
    mvpLine:"まだ立ってるぞ。",
    skills:[
      {id:"kb_def",name:"鉄壁",desc:"防御+4",effect:{def:4}},
      {id:"kb_heal",name:"大食い",desc:"回復量+4",effect:{healBonus:4}},
      {id:"kb_slow",name:"鈍重反撃",desc:"後手で攻撃した時、与ダメージ+20%",effect:{secondAttackBonus:0.2}}
    ]
  },
  {
    id:"nise",
    name:"ニセブサ",
    attr:"water",
    role:"バランス",
    roleType:"balance",
    hp:120, atk:28, def:20, spd:12,
    img:"./nise.png",
    passive:"被ダメージ-20%",
    desc:"万能型。",
    mvpLine:"似てるだけじゃない。",
    skills:[
      {id:"ns_bal",name:"万能型",desc:"攻撃+3 / 防御+3",effect:{atk:3,def:3}},
      {id:"ns_fire",name:"水慣れ",desc:"火属性からの被ダメージをさらに-10%",effect:{reduceFromFire:0.1}},
      {id:"ns_last",name:"粘着",desc:"HP50%以下で防御+5",effect:{lowHpDef:5}}
    ]
  },
  {
    id:"juzo",
    name:"ジュウゾウ",
    attr:"water",
    role:"反撃型",
    roleType:"tank",
    hp:110, atk:30, def:18, spd:14,
    img:"./juzo.png",
    passive:"反撃態勢：被弾後、次の攻撃ダメージ+50%",
    desc:"一発受けてから返す。",
    mvpLine:"読めてた。",
    skills:[
      {id:"jz_guard",name:"迎撃",desc:"初回被ダメージ-15%",effect:{firstReduce:0.15}},
      {id:"jz_counter",name:"怒りの角",desc:"反撃発動時、さらに与ダメージ+10%",effect:{counterBonus:0.1}},
      {id:"jz_spd",name:"冷静",desc:"速度+3",effect:{spd:3}}
    ]
  },
  {
    id:"ratel",
    name:"ラテロウ",
    attr:"fire",
    role:"先手特化",
    roleType:"speed",
    hp:95, atk:34, def:14, spd:20,
    img:"./rate.png",
    passive:"先手必勝：先手時ダメージ+30%",
    desc:"速さで押す。",
    mvpLine:"速かっただろ。",
    skills:[
      {id:"rt_spd",name:"神速",desc:"速度+3",effect:{spd:3}},
      {id:"rt_risk",name:"紙装甲覚悟",desc:"攻撃+5 / 防御-3",effect:{atk:5,def:-3}},
      {id:"rt_chase",name:"追撃",desc:"相手HP50%以下なら与ダメージ+15%",effect:{chaseBonus:0.15}}
    ]
  },
  {
    id:"kanemon",
    name:"カンえもん",
    attr:"fire",
    role:"初撃特化",
    roleType:"speed",
    hp:100, atk:36, def:15, spd:16,
    img:"./kan.png",
    passive:"初撃全力：最初の1回の攻撃ダメージ+40%",
    desc:"最初の一撃に全てをかける。",
    mvpLine:"初手で決めた。",
    skills:[
      {id:"kn_last",name:"火事場",desc:"HP50%以下で攻撃+5",effect:{lowHpAtk:5}},
      {id:"kn_grass",name:"対草狩り",desc:"草属性への与ダメージ+10%",effect:{bonusVsGrass:0.1}},
      {id:"kn_power",name:"一点突破",desc:"攻撃+6 / 速度-2",effect:{atk:6,spd:-2}}
    ]
  },
  {
    id:"namaken",
    name:"ナマケン",
    attr:"fire",
    role:"奇襲",
    roleType:"attack",
    hp:105, atk:32, def:16, spd:18,
    img:"./namaken.png",
    passive:"奇襲：相手が満HPなら与ダメージ+50%",
    desc:"初対面に強い。",
    mvpLine:"やる時はやる。",
    skills:[
      {id:"nm_second",name:"後出し名人",desc:"相手より遅い時、与ダメージ+15%",effect:{slowAttackBonus:0.15}},
      {id:"nm_pen",name:"すり抜け",desc:"防御の影響を少し軽減",effect:{armorPen:0.15}},
      {id:"nm_mix",name:"眠そうで速い",desc:"速度+2 / 攻撃+2",effect:{spd:2,atk:2}}
    ]
  },
  {
    id:"panpan",
    name:"パンパン",
    attr:"fire",
    role:"ロマン",
    roleType:"trick",
    hp:100, atk:38, def:12, spd:14,
    img:"./panpan.png",
    passive:"ロマン：15%で空振り、35%で与ダメージ+70%",
    desc:"不安定だが当たれば重い。",
    mvpLine:"暴れ足りないな。",
    skills:[
      {id:"pp_high",name:"一か八か",desc:"暴走率+10%",effect:{ragePlus:0.1}},
      {id:"pp_safe",name:"慎重",desc:"空振り率-5%",effect:{missMinus:0.05}},
      {id:"pp_crit",name:"見栄っぱり",desc:"クリティカル率+8%",effect:{critPlus:0.08}}
    ]
  },
  {
    id:"ani",
    name:"デカブサ兄",
    attr:"grass",
    role:"連勝型",
    roleType:"finisher",
    hp:115, atk:33, def:18, spd:15,
    img:"./ani.png",
    passive:"加速装置：ターン経過ごとに与ダメージ上昇",
    desc:"長引くほど強くなる。",
    mvpLine:"当然だな。",
    skills:[
      {id:"an_guard",name:"余裕",desc:"初回被ダメージ-15%",effect:{firstReduce:0.15}},
      {id:"an_late",name:"後半本気",desc:"3ターン目以降、さらに与ダメージ+10%",effect:{lateTurnBonus:0.1}},
      {id:"an_fire",name:"ヘビースモーク",desc:"火属性からの被ダメージ-10%",effect:{reduceFromFire:0.1}}
    ]
  },
  {
    id:"tora",
    name:"トラさん",
    attr:"grass",
    role:"分身",
    roleType:"trick",
    hp:105, atk:31, def:17, spd:17,
    img:"./tora.png",
    passive:"分身：20%で攻撃回避",
    desc:"回避で流れを変える。",
    mvpLine:"分身しただけだ。",
    skills:[
      {id:"tr_first",name:"見切り",desc:"初回回避率+10%",effect:{firstEvadePlus:0.1}},
      {id:"tr_follow",name:"じゃれつき",desc:"回避成功後、次の攻撃ダメージ+20%",effect:{evadeAttackBonus:0.2}},
      {id:"tr_spd",name:"俊敏",desc:"速度+3",effect:{spd:3}}
    ]
  },
  {
    id:"gori",
    name:"ゴリさん",
    attr:"grass",
    role:"防御",
    roleType:"tank",
    hp:120, atk:27, def:24, spd:9,
    img:"./gori.png",
    passive:"初回ガード：最初の被ダメージ半減 / 与ダメージ+10%",
    desc:"守りに優れる。",
    mvpLine:"ふんばった。",
    skills:[
      {id:"gr_def",name:"厚い毛皮",desc:"防御+5",effect:{def:5}},
      {id:"gr_low",name:"反骨",desc:"HP50%以下で攻撃+6",effect:{lowHpAtk:6}},
      {id:"gr_keep",name:"受け流し",desc:"2回目以降の被ダメージ-10%",effect:{repeatReduce:0.1}}
    ]
  },
  {
    id:"king",
    name:"キング",
    attr:"grass",
    role:"フィニッシャー",
    roleType:"finisher",
    hp:110, atk:36, def:16, spd:13,
    img:"./king.png",
    passive:"処刑人：相手HP30%以下なら与ダメージ+40%",
    desc:"締め性能を上げた後半型。",
    mvpLine:"仕留めた。",
    skills:[
      {id:"kg_mid",name:"王の圧",desc:"相手HP50%以下なら与ダメージ+10%",effect:{midHpBonus:0.1}},
      {id:"kg_water",name:"草の意地",desc:"水属性への与ダメージ+10%",effect:{bonusVsWater:0.1}},
      {id:"kg_mix",name:"追い詰める",desc:"速度+2 / 攻撃+3",effect:{spd:2,atk:3}}
    ]
  }
];

const attackLines = {
  dekabusa:["まあ行くか","やるか","重いぞ"],
  kanemon:["初手だ","行くぞ","決める"],
  panpan:["うおりゃ","暴れる","いくぞ"],
  king:["仕留める","逃がさない","終わりだ"],
  gori:["ふんっ","受けろ","いくぞ"],
  kabao:["まだまだ","どっしり","重いぞ"],
  namaken:["やる時はやる","今だ","そこだ"],
  nise:["似てるだけじゃない","いくぞ","本気だ"],
  ani:["遅い","見えてる","終わりだ"],
  tora:["見切れるか？","いくぞ","捕まえた"],
  juzo:["返す","そこだ","読めた"],
  ratel:["速いだろ","先に行く","置いてくぞ"]
};

const hitLines = {
  dekabusa:["いて","重いな","まだだ"],
  kanemon:["まだだ","浅い","効くな"],
  panpan:["うわ","ちっ","まだまだ"],
  king:["浅いな","その程度か","まだ立つ"],
  gori:["効くな","まだいける","ふんばる"],
  kabao:["その程度か","まだ立ってる","平気だ"],
  namaken:["やるな","ちょい痛い","まだだ"],
  nise:["似てない痛さだ","効くな","まだいる"],
  ani:["チッ","悪くない","まだだ"],
  tora:["かすった","まだ見える","浅い"],
  juzo:["読んでた","まだだ","返す"],
  ratel:["まだ速い","それだけか","効くな"]
};

const koLines = {
  dekabusa:["今日はそういう日だ"],
  panpan:["暴れ足りない"],
  kabao:["ここまでか"],
  ratel:["速いだけじゃ足りない"],
  ani:["次は本気だ。"]
};

let team = [];
let battle = null;
let speedMode = "normal";
let battleMode = "survival";
let dexSelectedId = null;
let equipTargetId = null;
let testPlayerId = null;
let testEnemyId = null;
let battleRunning = false;
let selectedSlot = 0;

const speedMap = {
  normal:{talk:420,afterHit:320,endTurn:260,intro:650,start:260,ko:700,enter:500,bubble:850},
  fast:{talk:220,afterHit:160,endTurn:120,intro:260,start:140,ko:320,enter:220,bubble:500},
  turbo:{talk:70,afterHit:40,endTurn:30,intro:40,start:20,ko:90,enter:60,bubble:220}
};

const DECK_KEY = "myDecks_v2";
const equippedSkills = {};

characters.forEach(c => {
  equippedSkills[c.id] = c.skills[0].id;
});

function attrLabel(attr){
  if(attr === "fire") return "火";
  if(attr === "water") return "水";
  if(attr === "grass") return "草";
  return "";
}

function attrClass(attr){
  if(attr === "fire") return "attr-fire";
  if(attr === "water") return "attr-water";
  if(attr === "grass") return "attr-grass";
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
  return "搦手";
}

function orderLabel(i){
  return ["先鋒","次鋒","中堅","副将","大将"][i] || "-";
}

function getChar(id){
  return characters.find(c => c.id === id);
}

function getEquippedSkill(charId){
  const ch = getChar(charId);
  if(!ch) return null;
  const sid = equippedSkills[charId];
  return ch.skills.find(s => s.id === sid) || ch.skills[0];
}

function roleTagHtml(ch){
  return `
    <span class="roleTag type-${ch.roleType}">${roleTypeLabel(ch.roleType)}</span>
    <span class="roleTag">属性:${attrLabel(ch.attr)}</span>
  `;
}

function getAttrRate(a, d){
  if(a === "water" && d === "fire") return 1.2;
  if(a === "fire" && d === "grass") return 1.2;
  if(a === "grass" && d === "water") return 1.2;
  if(a === "fire" && d === "water") return 0.8;
  if(a === "grass" && d === "fire") return 0.8;
  if(a === "water" && d === "grass") return 0.8;
  return 1;
}

function matchupText(a, b){
  const r = getAttrRate(a.attr, b.attr);
  if(r > 1) return {text:"有利", cls:"badge-good"};
  if(r < 1) return {text:"不利", cls:"badge-bad"};
  return {text:"五分", cls:"badge-even"};
}

function getVictoryLine(name){
  const map = {
    "デカブサ":"まあ勝った。",
    "カンえもん":"初手で決めた。",
    "パンパン":"たまたまだな。",
    "キング":"仕留めた。",
    "ゴリさん":"ふんばった。",
    "カバオ":"まだ立ってる。",
    "ナマケン":"やればできる。",
    "ニセブサ":"似てるだけじゃない。",
    "デカブサ兄":"当然だな。",
    "トラさん":"分身しただけだ。",
    "ジュウゾウ":"反撃完了。",
    "ラテロウ":"速かっただろ。"
  };
  return map[name] || "勝った。";
}

function getLoseLine(name){
  const map = {
    "デカブサ":"今日はそういう日だ。",
    "カンえもん":"初手は良かった。",
    "パンパン":"暴れ足りない。",
    "キング":"仕留めきれなかった。",
    "ゴリさん":"受けきれなかった。",
    "カバオ":"まだいけると思った。",
    "ナマケン":"ちょっと遅かった。",
    "ニセブサ":"本物じゃなかった。",
    "デカブサ兄":"次は本気だ。",
    "トラさん":"分身不足だ。",
    "ジュウゾウ":"返しきれなかった。",
    "ラテロウ":"速いだけじゃ足りない。"
  };
  return map[name] || "負けた。";
}

function randomLine(map, id, fallback){
  const arr = map[id];
  if(!arr || !arr.length) return fallback;
  return arr[Math.floor(Math.random() * arr.length)];
}

function wait(ms){
  return new Promise(r => setTimeout(r, ms));
}

function showOnlyScreen(id){
  [
    "screenTitle",
    "screenBuild",
    "screenDexList",
    "screenDexDetail",
    "screenEquip",
    "screenTestEnemy",
    "screenBattle",
    "screenResult"
  ].forEach(s => {
    const el = document.getElementById(s);
    if(el) el.hidden = true;
  });
  const target = document.getElementById(id);
  if(target) target.hidden = false;
}

function goTitle(){
  showOnlyScreen("screenTitle");
}

function goBuild(){
  showOnlyScreen("screenBuild");
  renderAll();
  initDeckUI();
}

function goDexList(){
  showOnlyScreen("screenDexList");
  renderDexList();
}

function goDexDetail(id){
  dexSelectedId = id;
  showOnlyScreen("screenDexDetail");
  renderDexDetail(id);
}
function goEquip(id){
  equipTargetId = id;
  showOnlyScreen("screenEquip");
  renderEquipScreen();
}

function goTestEnemy(id){
  testPlayerId = id;
  showOnlyScreen("screenTestEnemy");
  renderTestEnemyScreen();
}

function goResult(){
  showOnlyScreen("screenResult");
}

function backToBuildFromBattle(){
  battle = null;
  battleRunning = false;
  showOnlyScreen("screenBuild");
  renderAll();
}

function setBattleMode(mode){
  battleMode = mode;
  document.getElementById("modeSurvivalBtn").classList.toggle("active", mode === "survival");
  document.getElementById("modeFixedBtn").classList.toggle("active", mode === "fixed");
  document.getElementById("modeHint").textContent =
    mode === "survival"
      ? "勝ったキャラが残って次と戦う"
      : "先鋒同士、次鋒同士…の5本勝負";
  const hint = document.getElementById("buildHint");
  if(hint) hint.textContent = buildTeamHint();
}

function playTapEffect(el){
  el.classList.add("tap");
  setTimeout(()=>el.classList.remove("tap"), 120);
}

function addToTeam(id){
  if(team.includes(id)) return;
  if(team.length >= 5){
    alert("5体までです");
    return;
  }
  team.push(id);
  renderAll();
}

function removeFromTeam(id){
  team = team.filter(v => v !== id);
  renderAll();
}

function moveUp(index){
  if(index <= 0) return;
  [team[index - 1], team[index]] = [team[index], team[index - 1]];
  renderAll();
}

function moveDown(index){
  if(index >= team.length - 1) return;
  [team[index + 1], team[index]] = [team[index], team[index + 1]];
  renderAll();
}

function clearTeam(){
  team = [];
  renderAll();
}

function fillRandom(){
  team = shuffle(characters.map(c => c.id)).slice(0, 5);
  renderAll();
}

function buildTeamHint(){
  if(team.length === 0) return "並び特徴\nまだ未選択";

  const arr = team.map(getChar);
  const avgSpd = arr.reduce((s,v)=>s+v.spd,0) / arr.length;
  const avgDef = arr.reduce((s,v)=>s+v.def,0) / arr.length;
  const first = arr[0];
  const last = arr[arr.length - 1];
  const lines = [];

  lines.push("並び特徴");
  lines.push(`モード：${battleMode === "survival" ? "勝ち抜き" : "対面固定"}`);

  if(avgSpd >= 15) lines.push("全体：先手寄り");
  else if(avgDef >= 21) lines.push("全体：耐久寄り");
  else lines.push("全体：バランス");

  if(first) lines.push(`先鋒向き：${first.name}（${first.role}）`);
  if(last && arr.length >= 3) lines.push(`後半の鍵：${last.name}（${last.role}）`);

  lines.push(
    battleMode === "fixed"
      ? "固定戦では相性をぶつける並びが重要"
      : "勝ち抜きでは連戦向きの配置が重要"
  );

  return lines.join("\n");
}

function renderPickGrid(){
  const el = document.getElementById("pickGrid");
  el.innerHTML = "";

  characters.forEach(ch => {
    const selected = team.includes(ch.id);
    const skill = getEquippedSkill(ch.id);

    const card = document.createElement("div");
    card.className = "pickCardBig" + (selected ? " selected" : "");
    card.addEventListener("click", ()=>playTapEffect(card));

    card.innerHTML = `
      <div class="cardMain">
        <div class="cardImgWrap">
          <img src="${ch.img}" class="cardImg" alt="${ch.name}" onerror="this.style.opacity='.15'">
        </div>

        <div class="cardInfo">
          <div>
            <div class="cardTopLine">
              <div class="cardName">${ch.name}</div>
              <div class="cardAttr ${attrClass(ch.attr)}">${attrLabel(ch.attr)}</div>
            </div>

            <div class="cardRole">${ch.role}</div>
            <div class="cardStats">HP ${ch.hp}　攻 ${ch.atk}　防 ${ch.def}　速 ${ch.spd}</div>

            <div class="roleRow">
              ${roleTagHtml(ch)}
            </div>

            <div class="cardSkill">${ch.passive}</div>
            <div class="cardEquip">装備技：${skill.name}</div>
          </div>

          <div class="cardButtons">
            ${
              selected
                ? `<button class="btnSub" onclick="event.stopPropagation();removeFromTeam('${ch.id}')">外す</button>`
                : `<button class="btnMain" onclick="event.stopPropagation();addToTeam('${ch.id}')">選ぶ</button>`
            }
            <button class="btnEquip" onclick="event.stopPropagation();goEquip('${ch.id}')">技</button>
            <button class="btnDetail" onclick="event.stopPropagation();goTestEnemy('${ch.id}')">試す</button>
          </div>
        </div>
      </div>
    `;
    el.appendChild(card);
  });

  document.getElementById("buildHint").textContent = buildTeamHint();
}

function renderTeamList(){
  const el = document.getElementById("teamList");
  el.innerHTML = "";
  const labels = ["先鋒","次鋒","中堅","副将","大将"];

  for(let i=0;i<5;i++){
    const id = team[i];
    const slot = document.createElement("div");
    slot.className = "teamSlot";

    if(id){
      const ch = getChar(id);
      const sk = getEquippedSkill(id);

      slot.innerHTML = `
        <div class="slotNum">${labels[i]}</div>
        <img class="slotThumb" src="${ch.img}" alt="${ch.name}" onerror="this.style.opacity='.15'">
        <div class="slotMain">
          <div class="slotName">${ch.name}</div>
          <div class="slotMeta">${attrLabel(ch.attr)} / ${ch.role}</div>
          <div class="slotEquip">装備技：${sk.name}</div>
          <button class="removeBtn" onclick="removeFromTeam('${ch.id}')">外す</button>
        </div>
        <div class="moveBtns">
          <button class="moveBtn" onclick="moveUp(${i})" ${i===0 ? "disabled" : ""}>▲</button>
          <button class="moveBtn" onclick="moveDown(${i})" ${i===team.length-1 ? "disabled" : ""}>▼</button>
        </div>
      `;
    }else{
      slot.innerHTML = `
        <div class="slotNum">${labels[i]}</div>
        <div class="slotThumb" style="opacity:.15"></div>
        <div class="slotMain">
          <div class="slotName slotEmpty">未選択</div>
          <div class="slotMeta">ここに入れる</div>
        </div>
        <div></div>
      `;
    }

    el.appendChild(slot);
  }

  document.getElementById("confirmBtn").disabled = team.length !== 5;
}

function renderAll(){
  renderPickGrid();
  renderTeamList();
  setBattleMode(battleMode);
}

function renderDexList(){
  const el = document.getElementById("dexList");
  el.innerHTML = "";

  characters.forEach(ch => {
    const row = document.createElement("div");
    row.className = "dexRow";
    row.onclick = () => goDexDetail(ch.id);

    row.innerHTML = `
      <img class="dexThumb" src="${ch.img}" alt="${ch.name}" onerror="this.style.opacity='.15'">
      <div>
        <div class="dexName">${ch.name}</div>
        <div class="dexMini">${ch.role}</div>
      </div>
      <div class="dexAttr ${attrClass(ch.attr)}">${attrLabel(ch.attr)}</div>
    `;
    el.appendChild(row);
  });
}

function renderDexDetail(id){
  const ch = getChar(id);
  if(!ch) return;

  const skillList = ch.skills.map(s => {
    const mark = equippedSkills[ch.id] === s.id ? "（装備中）" : "";
    return `・${s.name}${mark}\n${s.desc}`;
  }).join("\n\n");

  document.getElementById("dexImg").src = ch.img;
  document.getElementById("dexImg").onerror = function(){ this.style.opacity='.15'; };
  document.getElementById("dexName").textContent = ch.name;
  document.getElementById("dexAttr").textContent = attrLabel(ch.attr);
  document.getElementById("dexAttr").className = `dexDetailAttr ${attrClass(ch.attr)}`;
  document.getElementById("dexRole").textContent = `${ch.role} / ${roleTypeLabel(ch.roleType)}`;
  document.getElementById("dexSkill").textContent = `${ch.passive}\n\n${skillList}`;
  document.getElementById("dexDesc").textContent = `${ch.desc}\n\nMVP時の一言：${ch.mvpLine}`;

  document.getElementById("dexStats").innerHTML = `
    <div class="dexStat"><div class="dexStatLabel">HP</div><div class="dexStatValue">${ch.hp}</div></div>
    <div class="dexStat"><div class="dexStatLabel">攻撃</div><div class="dexStatValue">${ch.atk}</div></div>
    <div class="dexStat"><div class="dexStatLabel">防御</div><div class="dexStatValue">${ch.def}</div></div>
    <div class="dexStat"><div class="dexStatLabel">速度</div><div class="dexStatValue">${ch.spd}</div></div>
  `;
}

function renderEquipScreen(){
  const ch = getChar(equipTargetId);
  if(!ch) return;

  const list = document.getElementById("skillList");
  list.innerHTML = "";

  ch.skills.forEach(skill => {
    const active = equippedSkills[ch.id] === skill.id;
    const div = document.createElement("div");
    div.className = "skillCard" + (active ? " active" : "");
    div.innerHTML = `
      <div class="skillName">${skill.name}</div>
      <div class="skillDesc">${skill.desc}</div>
      <div class="skillBtns">
        ${
          active
            ? `<button class="btn">装備中</button>`
            : `<button class="btn" onclick="equipSkill('${ch.id}','${skill.id}')">これを装備</button>`
        }
      </div>
    `;
    list.appendChild(div);
  });
}

function equipSkill(charId, skillId){
  equippedSkills[charId] = skillId;
  renderEquipScreen();
  renderAll();
}

function renderTestEnemyScreen(){
  const player = getChar(testPlayerId);
  if(!player) return;

  const grid = document.getElementById("testEnemyGrid");
  grid.innerHTML = "";

  characters
    .filter(c => c.id !== player.id)
    .forEach(c => {
      const div = document.createElement("div");
      div.className = "testEnemyCard";
      div.innerHTML = `
        <img src="${c.img}" alt="${c.name}" onerror="this.style.opacity='.15'">
        <div class="testEnemyName">${c.name}</div>
        <div class="testEnemyAttr">${attrLabel(c.attr)} / ${c.role}</div>
        <button class="testEnemyBtn" onclick="testBattleStart('${c.id}')">この相手で試す</button>
      `;
      grid.appendChild(div);
    });
}

/* デッキ保存 */
function getDeckData(){
  return JSON.parse(localStorage.getItem(DECK_KEY)) || [];
}

function saveDeckData(data){
  localStorage.setItem(DECK_KEY, JSON.stringify(data));
}

function renderDeckSlots(data){
  const el = document.getElementById("deckList");
  if(!el) return;
  el.innerHTML = "";

  for(let i=0;i<3;i++){
    const d = data[i];
    const div = document.createElement("div");
    div.className = "deckSlot" + (i === selectedSlot ? " active" : "");
    div.innerHTML = d ? d.name : "空";
    div.onclick = ()=>{
      selectedSlot = i;
      renderDeckSlots(data);
    };
    el.appendChild(div);
  }
}

function initDeckUI(){
  const saved = getDeckData();
  renderDeckSlots(saved);
}

function saveDeck(){
  const name = document.getElementById("deckName").value || "デッキ";
  const data = getDeckData();

  data[selectedSlot] = {
    name,
    mode: battleMode,
    team: [...team],
    skills: {...equippedSkills}
  };

  saveDeckData(data);
  renderDeckSlots(data);
}

function loadDeck(){
  const data = getDeckData();
  if(!data[selectedSlot]) return alert("空です");

  team = [...data[selectedSlot].team];

  const skills = data[selectedSlot].skills || {};
  Object.keys(skills).forEach(id => {
    equippedSkills[id] = skills[id];
  });

  if(data[selectedSlot].mode === "survival" || data[selectedSlot].mode === "fixed"){
    battleMode = data[selectedSlot].mode;
  }

  renderAll();
  setBattleMode(battleMode);
}

function deleteDeck(){
  const data = getDeckData();
  data[selectedSlot] = null;
  saveDeckData(data);
  renderDeckSlots(data);
}

function exportDeckCode(){
  const payload = {
    v: 1,
    mode: battleMode,
    team: team.map(id => ({
      id,
      skill: equippedSkills[id] || null
    }))
  };
  const json = JSON.stringify(payload);
  const code = btoa(unescape(encodeURIComponent(json)));
  document.getElementById("deckCode").value = code;
}

async function copyDeckCode(){
  const el = document.getElementById("deckCode");
  if(!el.value) return alert("先にコード作成してください");

  try{
    await navigator.clipboard.writeText(el.value);
    alert("コピーしました");
  }catch(e){
    el.select();
    document.execCommand("copy");
    alert("コピーしました");
  }
}

function importDeckCode(){
  const code = document.getElementById("deckCode").value.trim();
  if(!code) return alert("コードを貼ってください");

  try{
    const json = decodeURIComponent(escape(atob(code)));
    const data = JSON.parse(json);

    if(!data.team || !Array.isArray(data.team)) throw new Error("bad");

    const nextTeam = [];
    const nextSkills = {};

    for(const item of data.team){
      if(!getChar(item.id)) continue;
      nextTeam.push(item.id);

      const ch = getChar(item.id);
      const hasSkill = ch.skills.some(s => s.id === item.skill);
      nextSkills[item.id] = hasSkill ? item.skill : ch.skills[0].id;
    }

    if(nextTeam.length !== 5){
      alert("5体編成のコードではありません");
      return;
    }

    team = nextTeam;
    Object.keys(nextSkills).forEach(id => {
      equippedSkills[id] = nextSkills[id];
    });

    if(data.mode === "survival" || data.mode === "fixed"){
      battleMode = data.mode;
    }

    renderAll();
    setBattleMode(battleMode);
    alert("デッキを読み込みました");
  }catch(e){
    alert("コードが不正です");
  }
}

function shuffle(arr){
  const a = [...arr];
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}
function applySkillToClone(fighter){
  const skill = getEquippedSkill(fighter.id);
  if(!skill) return fighter;

  fighter.equippedSkill = skill;
  const ef = skill.effect || {};

  if(ef.hp) fighter.hp += ef.hp;
  if(ef.atk) fighter.atk += ef.atk;
  if(ef.def) fighter.def += ef.def;
  if(ef.spd) fighter.spd += ef.spd;

  fighter.maxHp = fighter.hp;
  fighter.currentHp = fighter.hp;
  return fighter;
}

function cloneFighter(char, side, orderIndex){
  const base = {
    ...JSON.parse(JSON.stringify(char)),
    side,
    orderIndex,
    maxHp: char.hp,
    currentHp: char.hp,
    alive: true,
    wins: 0,
    damageDealt: 0,
    damageTaken: 0,
    turns: 0,
    matchWin: 0,
    flags: {
      firstAttackDone: false,
      firstHitTaken: false,
      aniBoost: 0,
      counterReady: false,
      isFirstThisTurn: false,
      firstEvadeUsed: false,
      evadeBuff: false
    }
  };
  return applySkillToClone(base);
}

function scoreForAI(char){
  let score = 0;
  score += char.hp * 0.7;
  score += char.atk * 1.15;
  score += char.def * 0.8;
  score += char.spd * 0.65;
  if(char.id === "ratel") score += 18;
  if(char.id === "kanemon") score += 10;
  if(char.id === "namaken") score += 10;
  if(char.id === "ani") score += 16;
  if(char.id === "kabao") score += 15;
  if(char.id === "king") score += 12;
  return score;
}

function makeEnemyTeam(){
  const pool = characters.map(c => c.id).filter(id => !team.includes(id));
  let enemyChars = shuffle(pool).slice(0, 5).map(id => getChar(id));
  enemyChars.sort((a,b) => scoreForAI(b) - scoreForAI(a));
  return enemyChars.map(c => c.id);
}

function effectiveSpeed(f){
  const fatigueRate = 1 - Math.min(f.wins * 0.05, 0.15);
  return Math.max(1, Math.round(f.spd * fatigueRate));
}

function decideFirst(a, b){
  const aSpd = effectiveSpeed(a);
  const bSpd = effectiveSpeed(b);
  const diff = aSpd - bSpd;
  let aRate = 0.5;

  if(diff >= 12) aRate = 0.75;
  else if(diff >= 6) aRate = 0.65;
  else if(diff >= 3) aRate = 0.58;
  else if(diff <= -12) aRate = 0.25;
  else if(diff <= -6) aRate = 0.35;
  else if(diff <= -3) aRate = 0.42;

  return Math.random() < aRate ? a : b;
}

function calcDamage(attacker, defender){
  if(!attacker.alive || !defender.alive){
    return { damage:0, text:"", isCrit:false, attrRate:1 };
  }

  let evadeRate = 0;
  if(defender.id === "tora") evadeRate += 0.20;
  if(defender.equippedSkill?.effect?.firstEvadePlus && !defender.flags.firstEvadeUsed){
    evadeRate += defender.equippedSkill.effect.firstEvadePlus;
  }

  if(Math.random() < evadeRate){
    defender.flags.firstEvadeUsed = true;
    if(defender.equippedSkill?.effect?.evadeAttackBonus){
      defender.flags.evadeBuff = true;
    }
    return {
      damage:0,
      text:`${defender.name}は分身した。`,
      isCrit:false,
      attrRate:1
    };
  }

  let skillRate = 1.0;
  let extraTexts = [];

  if(attacker.id === "dekabusa" && attacker.currentHp <= attacker.maxHp * 0.5){
    skillRate *= 1.5;
    extraTexts.push(`${attacker.name}の背水。`);
  }

  if(attacker.id === "kanemon" && !attacker.flags.firstAttackDone){
    skillRate *= 1.4;
    extraTexts.push(`${attacker.name}の初撃全力。`);
  }

  if(attacker.id === "panpan"){
    let missRate = 0.15;
    if(attacker.equippedSkill?.effect?.missMinus) missRate -= attacker.equippedSkill.effect.missMinus;

    if(Math.random() < missRate){
      attacker.flags.firstAttackDone = true;
      return {
        damage:0,
        text:`${attacker.name}は空振りした。`,
        isCrit:false,
        attrRate:1
      };
    }

    let rageRate = 0.35;
    if(attacker.equippedSkill?.effect?.ragePlus) rageRate += attacker.equippedSkill.effect.ragePlus;
    if(Math.random() < rageRate){
      skillRate *= 1.7;
      extraTexts.push(`${attacker.name}が暴走した。`);
    }
  }

  if(attacker.id === "king" && defender.currentHp <= defender.maxHp * 0.3){
    skillRate *= 1.4;
    extraTexts.push(`${attacker.name}が仕留めに来た。`);
  }

  if(attacker.id === "namaken" && defender.currentHp === defender.maxHp){
    skillRate *= 1.5;
    extraTexts.push(`${attacker.name}の後出し強襲。`);
  }

  if(attacker.id === "ani"){
    skillRate *= (1 + attacker.flags.aniBoost);
    if(attacker.flags.aniBoost > 0) extraTexts.push(`${attacker.name}の加速装置。`);
  }

  if(attacker.id === "juzo" && attacker.flags.counterReady){
    skillRate *= 1.5;
    attacker.flags.counterReady = false;
    extraTexts.push(`${attacker.name}の反撃態勢。`);
  }

  if(attacker.id === "ratel" && attacker.flags.isFirstThisTurn){
    skillRate *= 1.3;
    extraTexts.push(`${attacker.name}の先手必勝。`);
  }

  if(attacker.id === "gori"){
    skillRate *= 1.1;
  }

  if(attacker.equippedSkill?.effect?.lowHpAtk && attacker.currentHp <= attacker.maxHp * 0.5){
    skillRate *= 1 + (attacker.equippedSkill.effect.lowHpAtk / Math.max(1, attacker.atk));
  }
  if(attacker.equippedSkill?.effect?.bonusVsGrass && defender.attr === "grass"){
    skillRate *= 1 + attacker.equippedSkill.effect.bonusVsGrass;
  }
  if(attacker.equippedSkill?.effect?.bonusVsWater && defender.attr === "water"){
    skillRate *= 1 + attacker.equippedSkill.effect.bonusVsWater;
  }
  if(attacker.equippedSkill?.effect?.chaseBonus && defender.currentHp <= defender.maxHp * 0.5){
    skillRate *= 1 + attacker.equippedSkill.effect.chaseBonus;
  }
  if(attacker.equippedSkill?.effect?.midHpBonus && defender.currentHp <= defender.maxHp * 0.5){
    skillRate *= 1 + attacker.equippedSkill.effect.midHpBonus;
  }
  if(attacker.equippedSkill?.effect?.slowAttackBonus && effectiveSpeed(attacker) < effectiveSpeed(defender)){
    skillRate *= 1 + attacker.equippedSkill.effect.slowAttackBonus;
  }
  if(attacker.equippedSkill?.effect?.secondAttackBonus && !attacker.flags.isFirstThisTurn){
    skillRate *= 1 + attacker.equippedSkill.effect.secondAttackBonus;
  }
  if(attacker.equippedSkill?.effect?.lateTurnBonus && attacker.turns >= 2){
    skillRate *= 1 + attacker.equippedSkill.effect.lateTurnBonus;
  }
  if(attacker.flags.evadeBuff){
    skillRate *= 1.2;
    attacker.flags.evadeBuff = false;
  }

  let defendRate = 1.0;

  if(defender.id === "gori" && !defender.flags.firstHitTaken){
    defendRate *= 0.5;
    extraTexts.push(`${defender.name}の初回ガード。`);
  }

  if(defender.id === "nise"){
    defendRate *= 0.8;
  }

  if(defender.equippedSkill?.effect?.firstReduce && !defender.flags.firstHitTaken){
    defendRate *= 1 - defender.equippedSkill.effect.firstReduce;
  }

  if(defender.equippedSkill?.effect?.reduceFromFire && attacker.attr === "fire"){
    defendRate *= 1 - defender.equippedSkill.effect.reduceFromFire;
  }

  if(defender.equippedSkill?.effect?.repeatReduce && defender.flags.firstHitTaken){
    defendRate *= 1 - defender.equippedSkill.effect.repeatReduce;
  }

  if(defender.equippedSkill?.effect?.lowHpDef && defender.currentHp <= defender.maxHp * 0.5){
    defender._tempDefBonus = defender.equippedSkill.effect.lowHpDef;
  }else{
    defender._tempDefBonus = 0;
  }

  const fatigueAtk = 1 - Math.min(attacker.wins * 0.04, 0.12);
  const armorPen = attacker.equippedSkill?.effect?.armorPen || 0;
  const effDef = Math.max(0, defender.def + (defender._tempDefBonus || 0));
  const base = Math.max(8, (attacker.atk * fatigueAtk) - effDef * (0.5 - armorPen));
  const attr = getAttrRate(attacker.attr, defender.attr);
  const rand = 0.92 + Math.random() * 0.16;

  let critRate = 0.08;
  if(attacker.equippedSkill?.effect?.critPlus) critRate += attacker.equippedSkill.effect.critPlus;
  const crit = Math.random() < critRate ? 1.5 : 1.0;

  let damage = Math.round(base * attr * skillRate * defendRate * rand * crit);
  damage = Math.max(8, damage);

  attacker.flags.firstAttackDone = true;
  defender.flags.firstHitTaken = true;
  if(crit > 1) extraTexts.push("クリティカル。");

  return {
    damage,
    text: extraTexts.join(" "),
    isCrit: crit > 1,
    attrRate: attr
  };
}

function healEndTurn(f){
  if(!f.alive) return null;

  let heal = 0;
  if(f.id === "kabao") heal += 8;
  if(f.equippedSkill?.effect?.healBonus) heal += f.equippedSkill.effect.healBonus;

  if(heal > 0){
    const before = f.currentHp;
    f.currentHp = Math.min(f.maxHp, f.currentHp + heal);
    if(f.currentHp > before) return `${f.name}は回復した。`;
  }
  return null;
}

function teamAliveCount(teamArr){
  return teamArr.filter(f => f.alive).length;
}

function addLog(text){
  if(!battle) return;

  battle.logs.push(text);

  const ticker = document.getElementById("liveTicker");
  if(ticker) ticker.textContent = text;

  const panel = document.getElementById("log");
  if(panel){
    const div = document.createElement("div");
    div.className = "logLine";
    div.textContent = text;
    panel.appendChild(div);
    panel.scrollTop = panel.scrollHeight;
  }
}

function playAttackMotion(side){
  const visual = document.getElementById(side === "player" ? "playerVisual" : "enemyVisual");
  if(!visual) return;
  visual.classList.remove("attackForward");
  void visual.offsetWidth;
  visual.classList.add("attackForward");
  setTimeout(()=>visual.classList.remove("attackForward"), 240);
}

function playHitEffect(side){
  const card = document.getElementById(side === "player" ? "playerCard" : "enemyCard");
  if(!card) return;
  card.classList.remove("hit", "hit-enemy", "flash");
  void card.offsetWidth;
  card.classList.add(side === "player" ? "hit" : "hit-enemy");
  card.classList.add("flash");
  setTimeout(() => card.classList.remove("hit", "hit-enemy", "flash"), 260);
}

function playHpBarEffect(side){
  const bar = document.getElementById(side === "player" ? "playerHp" : "enemyHp");
  if(!bar) return;
  const wrap = bar.parentElement;
  wrap.classList.remove("hitbar");
  void wrap.offsetWidth;
  wrap.classList.add("hitbar");
  setTimeout(() => wrap.classList.remove("hitbar"), 220);
}

function playKoFade(side){
  const card = document.getElementById(side === "player" ? "playerCard" : "enemyCard");
  if(!card) return;
  card.classList.add("koFaded");
  setTimeout(() => card.classList.remove("koFaded"), 700);
}

function showDamage(side, value, isCrit, attrRate){
  const card = document.getElementById(side === "player" ? "playerCard" : "enemyCard");
  if(!card) return;

  const div = document.createElement("div");
  div.className = "damageText" + (isCrit ? " crit" : "");
  if(attrRate > 1) div.classList.add("adv");
  else if(attrRate < 1) div.classList.add("dis");
  div.textContent = value;
  card.appendChild(div);
  setTimeout(() => div.remove(), 700);
}

function updateHpBar(fillEl, textEl, fighter){
  if(!fighter){
    fillEl.style.width = "0%";
    textEl.textContent = "-";
    return;
  }
  const pct = Math.max(0, fighter.currentHp / fighter.maxHp * 100);
  fillEl.style.width = pct + "%";
  fillEl.className = "hpFill " + (pct <= 30 ? "low" : pct <= 60 ? "mid" : "high");
  textEl.textContent = `${Math.max(0, fighter.currentHp)} / ${fighter.maxHp}`;
}

function setImg(el, fighter){
  if(!fighter){
    el.src = "";
    return;
  }
  el.src = fighter.img;
  el.onerror = function(){ this.style.opacity='.15'; };
  el.style.opacity = "1";
}

function renderBadges(targetEl, fighter, matchup){
  if(!targetEl) return;
  if(!fighter){
    targetEl.innerHTML = "";
    return;
  }

  const attrBadgeClass =
    fighter.attr === "fire" ? "badge-attr-fire" :
    fighter.attr === "water" ? "badge-attr-water" :
    "badge-attr-grass";

  targetEl.innerHTML = `
    <span class="infoBadge">${orderLabel(fighter.orderIndex)}</span>
    <span class="infoBadge ${attrBadgeClass}">${attrLabel(fighter.attr)}</span>
    <span class="infoBadge ${matchup.cls}">${matchup.text}</span>
  `;
}

function drawStatusRows(){
  const rows = document.getElementById("statusRows");
  if(!rows || !battle) return;
  rows.innerHTML = "";

  const labels = ["先鋒","次鋒","中堅","副将","大将"];

  for(let i=0;i<5;i++){
    const pf = battle.playerTeam[i];
    const ef = battle.enemyTeam[i];
    const row = document.createElement("div");
    row.className = "statusRow";

    const pActive = i === battle.playerActiveIndex;
    const eActive = i === battle.enemyActiveIndex;

    row.innerHTML = `
      <div class="miniSideCard playerSide ${pf && !pf.alive ? "dead" : ""} ${pActive ? "active" : ""}" data-side="player" data-idx="${i}">
        <img src="${pf ? pf.img : ""}" alt="" onerror="this.style.opacity='.15'">
        <div class="miniSideMain">
          <div class="miniSideName">${labels[i]} ${pf ? pf.name : "-"}</div>
          <div class="miniSideMeta">${pf ? `${attrLabel(pf.attr)} / HP ${Math.max(0,pf.currentHp)}` : "-"}</div>
        </div>
        <div class="miniSideBadge">${pf ? (pf.alive ? (pActive ? "★" : "○") : "×") : ""}</div>
      </div>

      <div class="boardVs">
        <div class="boardLink ${pActive && eActive ? "active" : ""}"></div>
      </div>

      <div class="miniSideCard right enemySide ${ef && !ef.alive ? "dead" : ""} ${eActive ? "active" : ""}" data-side="enemy" data-idx="${i}">
        <div class="miniSideBadge">${ef ? (ef.alive ? (eActive ? "★" : "○") : "×") : ""}</div>
        <div class="miniSideMain" style="text-align:right">
          <div class="miniSideName">${ef ? ef.name : "-"} ${labels[i]}</div>
          <div class="miniSideMeta">${ef ? `${attrLabel(ef.attr)} / HP ${Math.max(0,ef.currentHp)}` : "-"}</div>
        </div>
        <img src="${ef ? ef.img : ""}" alt="" onerror="this.style.opacity='.15'">
      </div>
    `;
    rows.appendChild(row);
  }
}

function drawStatusLines(){
  const svg = document.querySelector(".statusLines");
  const wrapEl = document.querySelector(".statusBoardWrap");
  if(!svg || !wrapEl || !battle) return;

  svg.innerHTML = "";
  const wrap = wrapEl.getBoundingClientRect();

  battle.lineHistory.forEach(item => {
    const from = document.querySelector(`.miniSideCard[data-side="player"][data-idx="${item.playerIdx}"]`);
    const to = document.querySelector(`.miniSideCard[data-side="enemy"][data-idx="${item.enemyIdx}"]`);
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
    line.setAttribute("stroke", item.active ? "rgba(255,255,255,.95)" : "rgba(255,255,255,.35)");
    line.setAttribute("stroke-width", item.active ? "3" : "2");
    line.setAttribute("stroke-linecap", "round");
    if(!item.active) line.setAttribute("stroke-dasharray", "6 4");
    svg.appendChild(line);
  });
}

function getActivePlayer(){
  return battle.playerTeam[battle.playerActiveIndex];
}

function getActiveEnemy(){
  return battle.enemyTeam[battle.enemyActiveIndex];
}

function renderBattleHeader(useLastIfEnded = false){
  let p = getActivePlayer();
  let e = getActiveEnemy();

  if(useLastIfEnded){
    p = battle.lastPlayerShown || p;
    e = battle.lastEnemyShown || e;
  }

  document.getElementById("alivePlayer").textContent = `あなた 残り${teamAliveCount(battle.playerTeam)}`;
  document.getElementById("aliveEnemy").textContent = `敵 残り${teamAliveCount(battle.enemyTeam)}`;
  document.getElementById("turnInfo").textContent = `TURN ${battle.turn} / MATCH ${battle.matchCount}`;

  document.getElementById("playerName").textContent = p ? p.name : "-";
  document.getElementById("playerRole").textContent = p ? p.role : "-";
  document.getElementById("playerEquip").textContent = p?.equippedSkill ? `装備技：${p.equippedSkill.name}` : "-";

  document.getElementById("enemyName").textContent = e ? e.name : "-";
  document.getElementById("enemyRole").textContent = e ? e.role : "-";
  document.getElementById("enemyEquip").textContent = e?.equippedSkill ? `装備技：${e.equippedSkill.name}` : "-";

  setImg(document.getElementById("playerImg"), p);
  setImg(document.getElementById("enemyImg"), e);

  updateHpBar(document.getElementById("playerHp"), document.getElementById("playerHpText"), p);
  updateHpBar(document.getElementById("enemyHp"), document.getElementById("enemyHpText"), e);

  document.getElementById("playerCard").className = "fighterCard " + (p ? attrCardClass(p.attr) : "none");
  document.getElementById("enemyCard").className = "fighterCard " + (e ? attrCardClass(e.attr) : "none");

  if(p && e){
    renderBadges(document.getElementById("playerBadges"), p, matchupText(p, e));
    renderBadges(document.getElementById("enemyBadges"), e, matchupText(e, p));
  }else{
    renderBadges(document.getElementById("playerBadges"), null, null);
    renderBadges(document.getElementById("enemyBadges"), null, null);
  }

  drawStatusRows();
  drawStatusLines();
}

async function attackOnce(attacker, defender){
  playAttackMotion(attacker.side);

  const result = calcDamage(attacker, defender);
  if(result.text) addLog(result.text);

  if(result.damage <= 0){
    addLog(`${attacker.name}の攻撃は当たらない。`);
    return;
  }

  defender.currentHp -= result.damage;
  defender.damageTaken += result.damage;
  attacker.damageDealt += result.damage;
  attacker.turns += 1;

  playHitEffect(defender.side);
  playHpBarEffect(defender.side);
  showDamage(defender.side, result.damage, result.isCrit, result.attrRate);

  if(result.attrRate > 1) addLog("属性有利。");
  if(result.attrRate < 1) addLog("属性不利。");
  if(result.isCrit) addLog("クリティカル。");

  addLog(`${attacker.name}の攻撃。${defender.name}に ${result.damage} ダメージ。`);

  if(defender.id === "juzo" && defender.alive){
    defender.flags.counterReady = true;
  }

  if(defender.currentHp <= 0){
    defender.currentHp = 0;
    defender.alive = false;
    attacker.wins += 1;

    playKoFade(defender.side);
    addLog(`${defender.name}は倒れた。`);

    battle.lastPlayerShown = battle.playerActiveIndex >= 0 ? battle.playerTeam[battle.playerActiveIndex] : battle.lastPlayerShown;
    battle.lastEnemyShown = battle.enemyActiveIndex >= 0 ? battle.enemyTeam[battle.enemyActiveIndex] : battle.lastEnemyShown;

    await wait(speedMap[speedMode].ko);
  }
}

async function processTurn(){
  const p = getActivePlayer();
  const e = getActiveEnemy();
  if(!p || !e) return;

  battle.turn += 1;
  renderBattleHeader();

  const first = decideFirst(p, e);
  const second = first === p ? e : p;

  p.flags.isFirstThisTurn = (first === p);
  e.flags.isFirstThisTurn = (first === e);

  await attackOnce(first, second);
  renderBattleHeader();
  await wait(speedMap[speedMode].afterHit);

  if(second.alive){
    await attackOnce(second, first);
    renderBattleHeader();
    await wait(speedMap[speedMode].afterHit);
  }

  p.flags.isFirstThisTurn = false;
  e.flags.isFirstThisTurn = false;

  if(p.alive){
    if(p.id === "ani") p.flags.aniBoost = Math.min(0.3, p.flags.aniBoost + 0.1);
    const healText = healEndTurn(p);
    if(healText) addLog(healText);
  }

  if(e.alive){
    if(e.id === "ani") e.flags.aniBoost = Math.min(0.3, e.flags.aniBoost + 0.1);
    const healText = healEndTurn(e);
    if(healText) addLog(healText);
  }

  renderBattleHeader();
  await wait(speedMap[speedMode].endTurn);
}

function calcMvpScore(f){
  const hpRate = f.maxHp > 0 ? (Math.max(0, f.currentHp) / f.maxHp) : 0;
  return f.wins * 100 + f.damageDealt + hpRate * 50 + f.matchWin * 120 + f.wins * 80;
}

function calcMvp(teamArr){
  let best = teamArr[0];
  let bestScore = -999999;

  for(const f of teamArr){
    const s = calcMvpScore(f);
    if(s > bestScore){
      bestScore = s;
      best = f;
    }
  }
  best.mvpScore = bestScore;
  return best;
}

function calcWorst(teamArr){
  let worst = teamArr[0];
  for(const f of teamArr){
    const score = f.wins * 1000 + f.damageDealt - f.damageTaken * 0.1 + f.matchWin * 300;
    const worstScore = worst.wins * 1000 + worst.damageDealt - worst.damageTaken * 0.1 + worst.matchWin * 300;
    if(score < worstScore) worst = f;
  }
  return worst;
}

function renderMvpPanel(mvp){
  document.getElementById("mvpImg").src = mvp.img;
  document.getElementById("mvpImg").onerror = function(){ this.style.opacity='.15'; };
  document.getElementById("mvpName").textContent = mvp.name;
  document.getElementById("mvpStats").textContent =
    `勝利本数 ${mvp.matchWin} / 撃破 ${mvp.wins}\n与ダメ ${mvp.damageDealt} / 残HP ${Math.max(0,mvp.currentHp)}`;
  document.getElementById("mvpLine").textContent = mvp.mvpLine || "勝った。";
}

function buildSummary(){
  const playerAlive = teamAliveCount(battle.playerTeam);
  const enemyAlive = teamAliveCount(battle.enemyTeam);

  let playerWon;
  if(battleMode === "fixed"){
    const playerMatches = battle.playerTeam.reduce((s,f)=>s+f.matchWin,0);
    const enemyMatches = battle.enemyTeam.reduce((s,f)=>s+f.matchWin,0);
    playerWon = playerMatches >= enemyMatches;
  }else{
    playerWon = enemyAlive === 0;
  }

  const mvp = playerWon ? calcMvp(battle.playerTeam) : calcMvp(battle.enemyTeam);
  const side = playerWon ? "あなた" : "敵";
  const yourMvp = calcMvp(battle.playerTeam);
  const yourWorst = calcWorst(battle.playerTeam);

  const lines = [];
  lines.push(`${playerWon ? "勝ったな。" : "並びだな。"}`);
  lines.push("");
  lines.push(`モード：${battleMode === "survival" ? "勝ち抜き" : "対面固定"}`);
  lines.push(`残り人数`);
  lines.push(`あなた：${playerAlive}`);
  lines.push(`敵：${enemyAlive}`);
  lines.push("");
  lines.push(`全体MVP`);
  lines.push(`${mvp.name}（${side}側）`);
  lines.push(`勝利本数：${mvp.matchWin}`);
  lines.push(`撃破数：${mvp.wins}`);
  lines.push(`総ダメージ：${mvp.damageDealt}`);
  lines.push(`残HP：${Math.max(0,mvp.currentHp)}`);
  lines.push("");
  lines.push(`あなた側MVP：${yourMvp.name}`);
  lines.push(`あなた側で一番早く帰った：${yourWorst.name}`);
  lines.push("");
  lines.push(`あなたの結果`);
  battle.playerTeam.forEach(f => {
    lines.push(`${f.name}：本勝利${f.matchWin} / 撃破${f.wins} / 与${f.damageDealt} / 被${f.damageTaken}`);
  });

  return {
    title: playerWon ? "WIN" : "LOSE",
    sub: playerWon ? getVictoryLine(yourMvp.name) : getLoseLine(yourWorst.name),
    text: lines.join("\n"),
    playerWon,
    mvp
  };
}

async function finishBattle(){
  battleRunning = false;

  battle.playerActiveIndex = -1;
  battle.enemyActiveIndex = -1;

  renderBattleHeader(true);

  const summary = buildSummary();
  renderMvpPanel(summary.mvp);

  document.getElementById("resultTitle").textContent = summary.title;
  document.getElementById("resultSub").textContent = summary.sub;
  document.getElementById("summary").textContent = summary.text;

  showOnlyScreen("screenResult");
}

function aliveNext(teamArr, startIndex){
  for(let i=startIndex;i<teamArr.length;i++){
    if(teamArr[i].alive) return i;
  }
  return -1;
}

async function battleLoopSurvival(){
  addLog("対戦開始。");
  renderBattleHeader();
  await wait(speedMap[speedMode].intro);

  while(battleRunning){
    const p = getActivePlayer();
    const e = getActiveEnemy();
    if(!p || !e) break;

    battle.matchCount += 1;
    battle.turn = 0;

    battle.lineHistory = battle.lineHistory.map(v => ({...v, active:false}));
    battle.lineHistory.push({
      playerIdx: battle.playerActiveIndex,
      enemyIdx: battle.enemyActiveIndex,
      active: true
    });

    battle.lastPlayerShown = p;
    battle.lastEnemyShown = e;

    renderBattleHeader();
    addLog(`${orderLabel(p.orderIndex)} ${p.name} と ${orderLabel(e.orderIndex)} ${e.name} が向かい合った。`);
    await wait(speedMap[speedMode].intro);

    while(battleRunning && p.alive && e.alive){
      await processTurn();
      battle.lastPlayerShown = battle.playerTeam[battle.playerActiveIndex] || battle.lastPlayerShown;
      battle.lastEnemyShown = battle.enemyTeam[battle.enemyActiveIndex] || battle.lastEnemyShown;
    }

    if(!battleRunning) break;

    const winner = p.alive ? p : e;
    winner.matchWin += 1;

    const nextP = aliveNext(battle.playerTeam, battle.playerActiveIndex);
    const nextE = aliveNext(battle.enemyTeam, battle.enemyActiveIndex);

    battle.playerActiveIndex = nextP;
    battle.enemyActiveIndex = nextE;

    battle.lineHistory = battle.lineHistory.map(v => ({...v, active:false}));
    renderBattleHeader();

    if(nextP !== -1 && nextE !== -1){
      addLog(`${orderLabel(nextP)} ${battle.playerTeam[nextP].name} / ${orderLabel(nextE)} ${battle.enemyTeam[nextE].name} 登場。`);
      await wait(speedMap[speedMode].enter);
    }

    if(nextP === -1 || nextE === -1) break;
  }

  await finishBattle();
}

async function battleLoopFixed(){
  addLog("対面固定バトル開始。");
  renderBattleHeader();
  await wait(speedMap[speedMode].intro);

  for(let i=0;i<5 && battleRunning;i++){
    const p = battle.playerTeam[i];
    const e = battle.enemyTeam[i];
    if(!p || !e) continue;

    battle.playerActiveIndex = i;
    battle.enemyActiveIndex = i;
    battle.turn = 0;
    battle.matchCount += 1;

    battle.lineHistory = battle.lineHistory.map(v => ({...v, active:false}));
    battle.lineHistory.push({
      playerIdx: i,
      enemyIdx: i,
      active: true
    });

    battle.lastPlayerShown = p;
    battle.lastEnemyShown = e;

    renderBattleHeader();
    addLog(`${orderLabel(i)}同士の対戦。 ${p.name} vs ${e.name}`);
    await wait(speedMap[speedMode].intro);

    while(battleRunning && p.alive && e.alive){
      await processTurn();
      battle.lastPlayerShown = battle.playerTeam[battle.playerActiveIndex] || battle.lastPlayerShown;
      battle.lastEnemyShown = battle.enemyTeam[battle.enemyActiveIndex] || battle.lastEnemyShown;
    }

    if(!battleRunning) break;

    if(p.alive && !e.alive){
      p.matchWin += 1;
      addLog(`${p.name} がこの本戦を取った。`);
    }else if(e.alive && !p.alive){
      e.matchWin += 1;
      addLog(`${e.name} がこの本戦を取った。`);
    }else{
      addLog("引き分け扱い。");
    }

    battle.lineHistory = battle.lineHistory.map(v => ({...v, active:false}));
    renderBattleHeader();
    await wait(speedMap[speedMode].enter);
  }

  await finishBattle();
}

async function startBattle(){
  if(team.length !== 5){
    alert("5体必要");
    return;
  }

  const enemyIds = makeEnemyTeam();

  battle = {
    playerTeam: team.map((id,i)=>cloneFighter(getChar(id), "player", i)),
    enemyTeam: enemyIds.map((id,i)=>cloneFighter(getChar(id), "enemy", i)),
    playerActiveIndex: 0,
    enemyActiveIndex: 0,
    lineHistory: [],
    logs: [],
    turn: 0,
    matchCount: 0,
    lastPlayerShown: null,
    lastEnemyShown: null
  };

  battleRunning = true;

  showOnlyScreen("screenBattle");
  document.getElementById("log").innerHTML = "";

  battle.lineHistory.push({
    playerIdx: 0,
    enemyIdx: 0,
    active: true
  });

  renderBattleHeader();
  await wait(speedMap[speedMode].start);

  if(battleMode === "fixed"){
    await battleLoopFixed();
  }else{
    await battleLoopSurvival();
  }
}

function rematch(){
  if(team.length !== 5) return;
  startBattle();
}

function setSpeed(mult){
  const btns = document.querySelectorAll(".speedBtn");
  btns.forEach(b => b.classList.remove("active"));

  if(mult === 1){
    speedMode = "normal";
    btns[0]?.classList.add("active");
  }else if(mult === 2){
    speedMode = "fast";
    btns[1]?.classList.add("active");
  }else{
    speedMode = "turbo";
    btns[2]?.classList.add("active");
  }
}

async function skipBattle(){
  speedMode = "turbo";
}

async function testBattleStart(enemyId){
  testEnemyId = enemyId;

  const p = cloneFighter(getChar(testPlayerId), "player", 0);
  const e = cloneFighter(getChar(testEnemyId), "enemy", 0);

  let turn = 0;
  while(p.alive && e.alive && turn < 20){
    turn++;
    const first = decideFirst(p, e);
    const second = first === p ? e : p;

    p.flags.isFirstThisTurn = (first === p);
    e.flags.isFirstThisTurn = (first === e);

    let r1 = calcDamage(first, second);
    if(r1.damage > 0){
      second.currentHp -= r1.damage;
      if(second.currentHp <= 0){
        second.currentHp = 0;
        second.alive = false;
      }
    }

    if(second.alive){
      let r2 = calcDamage(second, first);
      if(r2.damage > 0){
        first.currentHp -= r2.damage;
        if(first.currentHp <= 0){
          first.currentHp = 0;
          first.alive = false;
        }
      }
    }
  }

  let result = "";
  if(p.alive && !e.alive) result = `${p.name} が有利`;
  else if(!p.alive && e.alive) result = `${e.name} が有利`;
  else result = "ほぼ互角";

  alert(`お試し結果\n${result}\n${p.name}: ${p.currentHp}/${p.maxHp}\n${e.name}: ${e.currentHp}/${e.maxHp}`);
}

/* 初期化 */
window.addEventListener("resize", ()=>{
  if(battle) drawStatusLines();
});

setBattleMode("survival");
goTitle();
renderAll();
initDeckUI();
