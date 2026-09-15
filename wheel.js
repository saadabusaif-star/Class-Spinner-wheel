/* ===========================================================
   The First Academy — Class Spinner
   All class/name data lives in this browser's localStorage only.
   Nothing here is written back into the site's public source files.
   =========================================================== */

const STORAGE_KEY = "fa-spinner-classes-v1";

/* ---------- UI string translations (shared header/footer keys
   match script.js on the homepage so the language choice feels
   consistent across pages) ---------- */
const I18N = {
  en: {
    skip: "Skip to content",
    taglineBadge: "Building Brave Tomorrow",
    navHome: "Home",
    navGrades: "Pick your grade",
    navSafety: "Why these links",
    navSpinner: "Class Spinner",
    navContact: "Contact",
    spinHeroTitle: "Spin the class wheel",
    spinHeroDesc: "Add a class, paste your roster once, and let the wheel pick a name. Everything below is saved privately in this browser only — nothing is uploaded to the website's public code.",
    emptyTitle: "No classes yet",
    emptyBody: 'Tap "+ Add class" above to create your first one, then paste in your roster.',
    spinBtnLabel: "Spin the wheel",
    resetPoolLabel: "Reset wheel",
    rosterTitle: "Class roster",
    rosterHint: "Paste one name per line, then save. You only need to do this once — it's remembered here from now on.",
    saveRosterLabel: "Save names",
    winnerLabel: "And the name is...",
    removeFromWheelLabel: "Remove from wheel",
    keepCloseLabel: "Keep & close",
    footerAboutTitle: "The First Academy",
    footerAboutBody: "A student gateway pointing learners toward safe, worthwhile, grade-appropriate sites — one click from the school homepage.",
    footerLinksTitle: "Quick links",
    footerMainSite: "Main school website",
    footerContactTitle: "Contact",
    footerContactDept: "ICT Department",
    footerContactLoc: "Sharjah / Ajman, United Arab Emirates",
    motto1: "RESPECT", motto2: "BELONG", motto3: "ACHIEVE",
    footerCopy: '© <span id="year"></span> The First Academy. Built for students, grades 4–12.',
    addClassTab: "+ Add class",
    addClassPrompt: "Class name (e.g. 4A):",
    deleteClassConfirm: 'Delete class "{name}" and its saved names? This cannot be undone.',
    poolCount_zero: "No names in the wheel yet — save a roster below.",
    poolCount_one: "1 name ready to spin.",
    poolCount_many: "{n} names ready to spin.",
    needTwo: "Add at least 2 names to spin the wheel.",
    emptyWheelText: "Add names below"
  },
  ar: {
    skip: "الانتقال إلى المحتوى",
    taglineBadge: "نبني غداً شجاعاً",
    navHome: "الرئيسية",
    navGrades: "اختر صفك",
    navSafety: "لماذا هذه الروابط",
    navSpinner: "عجلة الأسماء",
    navContact: "تواصل معنا",
    spinHeroTitle: "أدر عجلة الصف",
    spinHeroDesc: "أضف صفاً، الصق قائمة الأسماء مرة واحدة فقط، ودع العجلة تختار اسماً. كل ما يلي محفوظ بشكل خاص في هذا المتصفح فقط — لا يُرفع شيء إلى الكود العام للموقع.",
    emptyTitle: "لا توجد صفوف بعد",
    emptyBody: "اضغط على \"+ إضافة صف\" أعلاه لإنشاء أول صف، ثم الصق قائمة الأسماء.",
    spinBtnLabel: "أدر العجلة",
    resetPoolLabel: "إعادة تعيين العجلة",
    rosterTitle: "قائمة الصف",
    rosterHint: "الصق اسماً في كل سطر، ثم احفظ. تحتاج فعل هذا مرة واحدة فقط — سيتم تذكّره من الآن فصاعداً.",
    saveRosterLabel: "حفظ الأسماء",
    winnerLabel: "والاسم هو...",
    removeFromWheelLabel: "إزالة من العجلة",
    keepCloseLabel: "إبقاء وإغلاق",
    footerAboutTitle: "مدرسة الأكاديمية الأولى",
    footerAboutBody: "بوابة طلابية توجّه المتعلمين نحو مواقع آمنة ومفيدة ومناسبة لأعمارهم — بضغطة واحدة من صفحة المدرسة.",
    footerLinksTitle: "روابط سريعة",
    footerMainSite: "الموقع الرئيسي للمدرسة",
    footerContactTitle: "تواصل معنا",
    footerContactDept: "قسم تقنية المعلومات",
    footerContactLoc: "الشارقة / عجمان، الإمارات العربية المتحدة",
    motto1: "احترام", motto2: "انتماء", motto3: "إنجاز",
    footerCopy: '© <span id="year"></span> مدرسة الأكاديمية الأولى. صُممت من أجل الطلاب، من الصف الرابع إلى الثاني عشر.',
    addClassTab: "+ إضافة صف",
    addClassPrompt: "اسم الصف (مثال: 4A):",
    deleteClassConfirm: 'حذف صف "{name}" وأسماءه المحفوظة؟ لا يمكن التراجع عن هذا.',
    poolCount_zero: "لا توجد أسماء في العجلة بعد — احفظ قائمة أدناه.",
    poolCount_one: "اسم واحد جاهز للدوران.",
    poolCount_many: "{n} اسماً جاهزاً للدوران.",
    needTwo: "أضف اسمين على الأقل لتدوير العجلة.",
    emptyWheelText: "أضف أسماء أدناه"
  }
};

let currentLang = localStorage.getItem("fa-lang") || "en";
let classes = [];
let activeClassId = null;
let baseRotation = 0;
let spinning = false;

const htmlRoot = document.getElementById("htmlRoot");
const classTabsEl = document.getElementById("classTabs");
const classEmptyEl = document.getElementById("classEmpty");
const classPanelEl = document.getElementById("classPanel");
const rosterInput = document.getElementById("rosterInput");
const nameChipList = document.getElementById("nameChipList");
const poolCountEl = document.getElementById("poolCount");
const spinBtn = document.getElementById("spinBtn");
const resetPoolBtn = document.getElementById("resetPoolBtn");
const canvas = document.getElementById("wheelCanvas");
const ctx = canvas.getContext("2d");
const winnerOverlay = document.getElementById("winnerOverlay");
const winnerNameEl = document.getElementById("winnerName");
const removeWinnerBtn = document.getElementById("removeWinnerBtn");
const closeWinnerBtn = document.getElementById("closeWinnerBtn");

/* ---------- Storage ---------- */
function loadClasses(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  }catch(e){ return []; }
}
function saveClasses(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(classes));
}
function makeId(){
  return "c" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

/* ---------- i18n ---------- */
function applyStaticText(){
  const dict = I18N[currentLang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.getAttribute("data-i18n-html");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

function setLang(lang){
  currentLang = lang;
  localStorage.setItem("fa-lang", lang);
  htmlRoot.lang = lang;
  htmlRoot.classList.toggle("ar", lang === "ar");
  document.getElementById("btnEn").classList.toggle("active", lang === "en");
  document.getElementById("btnAr").classList.toggle("active", lang === "ar");
  applyStaticText();
  renderTabs();
  renderPanel();
}

/* ---------- Tabs ---------- */
function renderTabs(){
  const dict = I18N[currentLang];
  classTabsEl.innerHTML = "";

  classes.forEach(cls => {
    const tab = document.createElement("button");
    tab.type = "button";
    tab.className = "class-tab" + (cls.id === activeClassId ? " active" : "");
    tab.innerHTML = `<span class="tab-name">${escapeHtml(cls.name)}</span><span class="tab-close" title="Delete class">×</span>`;
    tab.addEventListener("click", (e) => {
      if (e.target.classList.contains("tab-close")){
        e.stopPropagation();
        deleteClass(cls.id);
      } else {
        activeClassId = cls.id;
        renderTabs();
        renderPanel();
      }
    });
    classTabsEl.appendChild(tab);
  });

  const addTab = document.createElement("button");
  addTab.type = "button";
  addTab.className = "class-tab add-tab";
  addTab.textContent = dict.addClassTab;
  addTab.addEventListener("click", addClass);
  classTabsEl.appendChild(addTab);
}

function addClass(){
  const dict = I18N[currentLang];
  const name = prompt(dict.addClassPrompt, "");
  if (!name || !name.trim()) return;
  const cls = { id: makeId(), name: name.trim(), roster: [], pool: [] };
  classes.push(cls);
  activeClassId = cls.id;
  saveClasses();
  renderTabs();
  renderPanel();
}

function deleteClass(id){
  const dict = I18N[currentLang];
  const cls = classes.find(c => c.id === id);
  if (!cls) return;
  if (!confirm(dict.deleteClassConfirm.replace("{name}", cls.name))) return;
  classes = classes.filter(c => c.id !== id);
  if (activeClassId === id){
    activeClassId = classes.length ? classes[0].id : null;
  }
  saveClasses();
  renderTabs();
  renderPanel();
}

/* ---------- Panel (roster + wheel) ---------- */
function getActiveClass(){
  return classes.find(c => c.id === activeClassId) || null;
}

function renderPanel(){
  const dict = I18N[currentLang];
  const cls = getActiveClass();

  if (!cls){
    classEmptyEl.hidden = false;
    classPanelEl.hidden = true;
    return;
  }
  classEmptyEl.hidden = true;
  classPanelEl.hidden = false;

  rosterInput.value = cls.roster.join("\n");
  renderNameChips(cls);
  updatePoolCount(cls);
  drawWheel(cls);
}

function renderNameChips(cls){
  nameChipList.innerHTML = "";
  cls.roster.forEach(name => {
    const chip = document.createElement("span");
    chip.className = "name-chip";
    chip.innerHTML = `${escapeHtml(name)} <button type="button" class="chip-x" aria-label="Remove">×</button>`;
    chip.querySelector(".chip-x").addEventListener("click", () => {
      cls.roster = cls.roster.filter(n => n !== name);
      cls.pool = cls.pool.filter(n => n !== name);
      saveClasses();
      renderPanel();
    });
    nameChipList.appendChild(chip);
  });
}

function updatePoolCount(cls){
  const dict = I18N[currentLang];
  const n = cls.pool.length;
  let text;
  if (n === 0) text = dict.poolCount_zero;
  else if (n === 1) text = dict.poolCount_one;
  else text = dict.poolCount_many.replace("{n}", n);
  poolCountEl.textContent = text;
  spinBtn.disabled = n < 2;
}

document.getElementById("saveRosterBtn").addEventListener("click", () => {
  const cls = getActiveClass();
  if (!cls) return;
  const lines = rosterInput.value
    .split("\n")
    .map(s => s.trim())
    .filter(Boolean);
  const unique = [...new Set(lines)];
  cls.roster = unique;
  cls.pool = [...unique];
  saveClasses();
  baseRotation = 0;
  canvas.style.transition = "none";
  canvas.style.transform = "rotate(0deg)";
  renderPanel();
});

resetPoolBtn.addEventListener("click", () => {
  const cls = getActiveClass();
  if (!cls) return;
  cls.pool = [...cls.roster];
  saveClasses();
  renderPanel();
});

/* ---------- Wheel drawing ---------- */
const WHEEL_COLORS = ["#0D2C6B", "#FFC845", "#17419A", "#FFEAB2"];

function drawWheel(cls){
  const dict = I18N[currentLang];
  const w = canvas.width, h = canvas.height;
  const cx = w / 2, cy = h / 2, r = Math.min(w, h) / 2 - 6;
  ctx.clearRect(0, 0, w, h);

  const pool = cls.pool;
  if (!pool.length){
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fillStyle = "#EEF4FF";
    ctx.fill();
    ctx.fillStyle = "#4C5A7A";
    ctx.font = "600 16px Nunito, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(dict.emptyWheelText, cx, cy);
    return;
  }

  const segAngle = (Math.PI * 2) / pool.length;
  pool.forEach((name, i) => {
    const start = i * segAngle - Math.PI / 2;
    const end = start + segAngle;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, start, end);
    ctx.closePath();
    ctx.fillStyle = WHEEL_COLORS[i % WHEEL_COLORS.length];
    ctx.fill();
    ctx.strokeStyle = "#FFFFFF";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(start + segAngle / 2);
    const isGold = (i % 4 === 1) || (i % 4 === 3);
    ctx.fillStyle = isGold ? "#10203F" : "#FFFFFF";
    ctx.font = "700 14px Baloo 2, sans-serif";
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    let label = name;
    if (label.length > 14) label = label.slice(0, 13) + "…";
    ctx.fillText(label, r - 14, 0);
    ctx.restore();
  });

  ctx.beginPath();
  ctx.arc(cx, cy, 22, 0, Math.PI * 2);
  ctx.fillStyle = "#FFFFFF";
  ctx.fill();
  ctx.strokeStyle = "#FFC845";
  ctx.lineWidth = 4;
  ctx.stroke();
}

/* ---------- Spin ---------- */
spinBtn.addEventListener("click", () => {
  const cls = getActiveClass();
  if (!cls || spinning) return;
  const dict = I18N[currentLang];
  if (cls.pool.length < 2){
    alert(dict.needTwo);
    return;
  }

  spinning = true;
  spinBtn.disabled = true;

  const idx = Math.floor(Math.random() * cls.pool.length);
  const winnerName = cls.pool[idx];
  const segAngleDeg = 360 / cls.pool.length;
  const targetMid = idx * segAngleDeg + segAngleDeg / 2;

  const spins = 6;
  const currentAbs = ((baseRotation % 360) + 360) % 360;
  const delta = (((360 - targetMid) - currentAbs) + 360 * 2) % 360;
  const finalRotation = baseRotation + spins * 360 + delta;

  canvas.style.transition = "transform 4.4s cubic-bezier(0.17,0.67,0.14,0.99)";
  requestAnimationFrame(() => {
    canvas.style.transform = `rotate(${finalRotation}deg)`;
  });
  baseRotation = finalRotation;

  const onEnd = () => {
    canvas.removeEventListener("transitionend", onEnd);
    spinning = false;
    spinBtn.disabled = cls.pool.length < 2;
    showWinner(winnerName);
  };
  canvas.addEventListener("transitionend", onEnd);
});

function showWinner(name){
  winnerNameEl.textContent = name;
  winnerOverlay.hidden = false;
}

removeWinnerBtn.addEventListener("click", () => {
  const cls = getActiveClass();
  const name = winnerNameEl.textContent;
  if (cls){
    cls.pool = cls.pool.filter(n => n !== name);
    saveClasses();
    renderPanel();
  }
  winnerOverlay.hidden = true;
});

closeWinnerBtn.addEventListener("click", () => {
  winnerOverlay.hidden = true;
});

/* ---------- Utility ---------- */
function escapeHtml(str){
  return str.replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}

/* ---------- Init ---------- */
document.getElementById("btnEn").addEventListener("click", () => setLang("en"));
document.getElementById("btnAr").addEventListener("click", () => setLang("ar"));

classes = loadClasses();
activeClassId = classes.length ? classes[0].id : null;
setLang(currentLang);
