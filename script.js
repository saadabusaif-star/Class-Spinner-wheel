/* ===========================================================
   The First Academy — Student Gateway
   Bilingual (EN/AR) grade data + rendering + language toggle
   =========================================================== */

/* ---------- UI string translations ---------- */
const I18N = {
  en: {
    skip: "Skip to content",
    ministryLine: "Ministry of Education, UAE",
    schoolName: "THE FIRST ACADEMY",
    schoolTag: "Student Gateway",
    taglineBadge: "Building Brave Tomorrow",
    navGrades: "Pick your grade",
    navSafety: "Why these links",
    navContact: "Contact",
    navSpinner: "Class Spinner",
    heroTitle: 'Every student deserves a <span class="accent">brave</span> start online.',
    heroDesc: "Tap your grade, grab a hand-picked list of real learning sites and skill games. No dead ends, no shooters, no Roblox — just things worth your time.",
    heroCta1: "Pick my grade 🚀",
    heroCta2: "Why these links?",
    chip1: "Matched to your age",
    chip2: "Real certificates",
    chip3: "No shooters or Roblox",
    gradesTitle: "Which grade are you in?",
    gradesDesc: "Tap your number — the list below changes to match your age group.",
    safetyTitle: "Why these links, and not others?",
    safety1Title: "Checked by staff",
    safety1Body: "A real teacher looks at every site before it's added — not an algorithm.",
    safety2Title: "Actually teaches you something",
    safety2Body: "Coding, math, language, digital skills — real, transferable stuff for your future.",
    safety3Title: "Earns you something",
    safety3Body: "Many sites give a badge or certificate when you finish — great for your portfolio.",
    safety4Title: "No unsafe corners",
    safety4Body: "No shooters, no open chat sandboxes like Roblox, no ad-heavy pages.",
    footerAboutTitle: "The First Academy",
    footerAboutBody: "A student gateway pointing learners toward safe, worthwhile, grade-appropriate sites — one click from the school homepage.",
    footerLinksTitle: "Quick links",
    footerMainSite: "Main school website",
    footerContactTitle: "Contact",
    footerContactDept: "ICT Department",
    footerContactLoc: "Sharjah / Ajman, United Arab Emirates",
    motto1: "RESPECT", motto2: "BELONG", motto3: "ACHIEVE",
    footerCopy: '© <span id="year"></span> The First Academy. Built for students, grades 4–12.',
    bandNotePrefix: "Grade",
    certLabel: "Certificate",
    freeLabel: "Free"
  },
  ar: {
    skip: "الانتقال إلى المحتوى",
    ministryLine: "وزارة التربية والتعليم، الإمارات العربية المتحدة",
    schoolName: "مدرسة الأكاديمية الأولى",
    schoolTag: "بوابة الطالب",
    taglineBadge: "نبني غداً شجاعاً",
    navGrades: "اختر صفك",
    navSafety: "لماذا هذه الروابط",
    navContact: "تواصل معنا",
    navSpinner: "عجلة الأسماء",
    heroTitle: 'كل طالب يستحق بداية <span class="accent">شجاعة</span> على الإنترنت.',
    heroDesc: "اختر صفك واحصل على قائمة مختارة بعناية من مواقع تعليمية وألعاب مهارية حقيقية. بلا مواقع عشوائية، وبلا ألعاب قتالية أو روبلوكس — فقط ما يستحق وقتك.",
    heroCta1: "اختر صفي 🚀",
    heroCta2: "لماذا هذه الروابط؟",
    chip1: "مناسب لعمرك",
    chip2: "شهادات حقيقية",
    chip3: "بدون ألعاب قتالية أو روبلوكس",
    gradesTitle: "في أي صف أنت؟",
    gradesDesc: "اضغط على رقم صفك — وستتغيّر القائمة أدناه لتناسب فئتك العمرية.",
    safetyTitle: "لماذا هذه الروابط تحديداً؟",
    safety1Title: "مراجَعة من قِبل المعلمين",
    safety1Body: "معلّم حقيقي يراجع كل موقع قبل إضافته — وليس برنامجاً آلياً.",
    safety2Title: "تتعلّم منها فعلاً",
    safety2Body: "برمجة، رياضيات، لغات، مهارات رقمية — أشياء حقيقية تفيدك في مستقبلك.",
    safety3Title: "تكسب منها شيئاً",
    safety3Body: "الكثير من المواقع تمنحك شارة أو شهادة عند إنهائها — رائعة لملفك الشخصي.",
    safety4Title: "بلا أركان غير آمنة",
    safety4Body: "بدون ألعاب قتالية، وبدون بيئات دردشة مفتوحة مثل روبلوكس، وبدون صفحات مزعجة بالإعلانات.",
    footerAboutTitle: "مدرسة الأكاديمية الأولى",
    footerAboutBody: "بوابة طلابية توجّه المتعلمين نحو مواقع آمنة ومفيدة ومناسبة لأعمارهم — بضغطة واحدة من صفحة المدرسة.",
    footerLinksTitle: "روابط سريعة",
    footerMainSite: "الموقع الرئيسي للمدرسة",
    footerContactTitle: "تواصل معنا",
    footerContactDept: "قسم تقنية المعلومات",
    footerContactLoc: "الشارقة / عجمان، الإمارات العربية المتحدة",
    motto1: "احترام", motto2: "انتماء", motto3: "إنجاز",
    footerCopy: '© <span id="year"></span> مدرسة الأكاديمية الأولى. صُممت من أجل الطلاب، من الصف الرابع إلى الثاني عشر.',
    bandNotePrefix: "الصف",
    certLabel: "شهادة",
    freeLabel: "مجاني"
  }
};

/* ---------- Grade / resource data (bilingual) ---------- */
const RESOURCE_BANDS = {
  elementary: {
    icon: "🚀",
    label: { en: "Ages 9–10", ar: "الأعمار 9–10" },
    categories: [
      {
        icon: "📘",
        title: { en: "Learn something new", ar: "تعلّم شيئاً جديداً" },
        note: { en: "short lessons, earn stars or badges", ar: "دروس قصيرة، اجمع نجوماً وشارات" },
        items: [
          { name: "Khan Academy", url: "https://www.khanacademy.org/", cert: false,
            desc: { en: "Free lessons in math, reading and science, with mastery badges as you go.",
                     ar: "دروس مجانية في الرياضيات والقراءة والعلوم، مع شارات إتقان أثناء تقدّمك." } },
          { name: "Duolingo", url: "https://www.duolingo.com/", cert: false,
            desc: { en: "Bite-sized language lessons — Arabic, English, French and more.",
                     ar: "دروس لغوية قصيرة — عربي، إنجليزي، فرنسي وغيرها." } },
          { name: "NASA STEM for Students", url: "https://www.nasa.gov/stem/", cert: false,
            desc: { en: "Real NASA activities, videos and space facts for young learners.",
                     ar: "أنشطة وفيديوهات حقيقية من ناسا ومعلومات عن الفضاء للمتعلمين الصغار." } }
        ]
      },
      {
        icon: "🛠️",
        title: { en: "Build & play", ar: "ابنِ والعب" },
        note: { en: "the good kind — creative, not shooters", ar: "من النوع الجيد — إبداعي، وليس قتالياً" },
        items: [
          { name: "Scratch", url: "https://scratch.mit.edu/", cert: false,
            desc: { en: "Drag-and-drop coding — build your own games, stories and animations.",
                     ar: "برمجة بالسحب والإفلات — اصنع ألعابك وقصصك ورسومك المتحركة الخاصة." } },
          { name: "Code.org — Hour of Code", url: "https://code.org/", cert: true,
            desc: { en: "Guided coding puzzles for beginners, with a completion certificate.",
                     ar: "ألغاز برمجية موجّهة للمبتدئين، مع شهادة عند الإتمام." } },
          { name: "Prodigy Math", url: "https://www.prodigygame.com/", cert: false,
            desc: { en: "A math adventure game used in classrooms — practice disguised as play.",
                     ar: "لعبة مغامرات رياضية تُستخدم في الصفوف — تدريب في هيئة لعب." } },
          { name: "CSforAll — Hour of AI", url: "https://csforall.org/en-US/activities/hour-of-ai", cert: false,
            desc: { en: "Short, playful activities that introduce how AI works — filter by age to find easy ones.",
                     ar: "أنشطة قصيرة وممتعة تشرح كيف يعمل الذكاء الاصطناعي — صفّها حسب العمر لإيجاد الأسهل." } }
        ]
      }
    ]
  },
  middle: {
    icon: "🧭",
    label: { en: "Ages 11–13", ar: "الأعمار 11–13" },
    categories: [
      {
        icon: "🏅",
        title: { en: "Learn & earn a certificate", ar: "تعلّم واحصل على شهادة" },
        note: { en: "worth adding to a portfolio", ar: "تستحق إضافتها لملفك الشخصي" },
        items: [
          { name: "Code.org — CS Discoveries", url: "https://code.org/educate/csd", cert: true,
            desc: { en: "A full intro to computer science, with a certificate on completion.",
                     ar: "مقدمة كاملة لعلوم الحاسوب، مع شهادة عند الإتمام." } },
          { name: "Google — CS First", url: "https://csfirst.withgoogle.com/", cert: false,
            desc: { en: "Free coding clubs and projects built by Google for this age group.",
                     ar: "أندية ومشاريع برمجية مجانية من جوجل لهذه الفئة العمرية." } },
          { name: "Khan Academy", url: "https://www.khanacademy.org/", cert: false,
            desc: { en: "Deeper math, science and computing courses with progress tracking.",
                     ar: "دورات أعمق في الرياضيات والعلوم والحاسوب مع تتبّع للتقدّم." } }
        ]
      },
      {
        icon: "🛠️",
        title: { en: "Build & create", ar: "ابنِ وأبدِع" },
        note: { en: "skill-building, not sandbox chaos", ar: "بناء مهارات، لا فوضى مفتوحة" },
        items: [
          { name: "Tynker", url: "https://www.tynker.com/", cert: false,
            desc: { en: "Block-to-text coding — build real apps and games step by step.",
                     ar: "برمجة من الكتل إلى النصوص — اصنع تطبيقات وألعاباً حقيقية خطوة بخطوة." } },
          { name: "CodeCombat", url: "https://codecombat.com/", cert: false,
            desc: { en: "Learn real programming syntax by directing a character through puzzles.",
                     ar: "تعلّم صياغة البرمجة الحقيقية بتوجيه شخصية عبر ألغاز." } },
          { name: "TypingClub", url: "https://www.typingclub.com/", cert: true,
            desc: { en: "Turn typing practice into a skill you'll actually use for years.",
                     ar: "حوّل تدريب الكتابة إلى مهارة ستستخدمها فعلاً لسنوات." } },
          { name: "CSforAll — Hour of AI", url: "https://csforall.org/en-US/activities/hour-of-ai", cert: false,
            desc: { en: "Hands-on AI activities you can filter by topic, length, and difficulty.",
                     ar: "أنشطة عملية عن الذكاء الاصطناعي يمكنك تصفيتها حسب الموضوع والمدة والصعوبة." } }
        ]
      }
    ]
  },
  high: {
    icon: "🎓",
    label: { en: "Ages 14–18", ar: "الأعمار 14–18" },
    categories: [
      {
        icon: "🏅",
        title: { en: "Learn & earn a certificate", ar: "تعلّم واحصل على شهادة" },
        note: { en: "resume- and university-worthy", ar: "تفيد سيرتك الذاتية وطلبات الجامعة" },
        items: [
          { name: "freeCodeCamp", url: "https://www.freecodecamp.org/", cert: true,
            desc: { en: "Full coding curricula — web dev, data, Python — each ending in a free certification.",
                     ar: "مناهج برمجية كاملة — تطوير ويب، بيانات، بايثون — كل منها ينتهي بشهادة مجانية." } },
          { name: "Google Digital Garage", url: "https://learndigital.withgoogle.com/digitalgarage", cert: true,
            desc: { en: "Free courses in digital marketing, data and career skills, certified by Google.",
                     ar: "دورات مجانية في التسويق الرقمي والبيانات ومهارات العمل، معتمدة من جوجل." } },
          { name: "Coursera", url: "https://www.coursera.org/", cert: true,
            desc: { en: "University-level courses; audit free or earn a certificate for a fee.",
                     ar: "دورات بمستوى جامعي؛ يمكنك الحضور مجاناً أو الحصول على شهادة برسوم." } },
          { name: "edX", url: "https://www.edx.org/", cert: true,
            desc: { en: "Courses from real universities, including free-to-audit options with certificates available.",
                     ar: "دورات من جامعات حقيقية، بعضها مجاني للحضور مع إمكانية الحصول على شهادة." } }
        ]
      },
      {
        icon: "🛠️",
        title: { en: "Build & go deeper", ar: "ابنِ وتعمّق أكثر" },
        note: { en: "for students aiming at tech, design or research", ar: "لمن يطمح للتقنية أو التصميم أو البحث" },
        items: [
          { name: "CS50 (Harvard)", url: "https://cs50.harvard.edu/", cert: true,
            desc: { en: "The famous free intro to computer science — challenging, and a real certificate at the end.",
                     ar: "المقدمة الشهيرة والمجانية لعلوم الحاسوب — تحدٍ حقيقي، وشهادة معتمدة في النهاية." } },
          { name: "Codecademy", url: "https://www.codecademy.com/", cert: false,
            desc: { en: "Hands-on coding tracks in web development, Python, data science and more.",
                     ar: "مسارات برمجية عملية في تطوير الويب وبايثون وعلوم البيانات وغيرها." } },
          { name: "Google Applied Digital Skills", url: "https://applieddigitalskills.withgoogle.com/", cert: true,
            desc: { en: "Project-based lessons — spreadsheets, presentations, basic automation.",
                     ar: "دروس قائمة على مشاريع — جداول بيانات، عروض تقديمية، أتمتة أساسية." } },
          { name: "CSforAll — Hour of AI", url: "https://csforall.org/en-US/activities/hour-of-ai", cert: false,
            desc: { en: "A large library of AI activities — filter by topic, programming language, or length to go deeper.",
                     ar: "مكتبة كبيرة من أنشطة الذكاء الاصطناعي — صفّها حسب الموضوع أو لغة البرمجة أو المدة للتعمّق أكثر." } }
        ]
      }
    ]
  }
};

const GRADES = [
  { grade: 4,  band: "elementary" },
  { grade: 5,  band: "elementary" },
  { grade: 6,  band: "middle" },
  { grade: 7,  band: "middle" },
  { grade: 8,  band: "middle" },
  { grade: 9,  band: "high" },
  { grade: 10, band: "high" },
  { grade: 11, band: "high" },
  { grade: 12, band: "high" }
];

let currentLang = localStorage.getItem("fa-lang") || "en";
let currentGrade = 4;

const gradeRow = document.getElementById("gradeRow");
const bandNote = document.getElementById("bandNote");
const resourceOutput = document.getElementById("resourceOutput");
const htmlRoot = document.getElementById("htmlRoot");

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
  document.getElementById("year").textContent = new Date().getFullYear();
}

function renderGradePills(){
  const dict = I18N[currentLang];
  gradeRow.innerHTML = "";
  GRADES.forEach(g => {
    const band = RESOURCE_BANDS[g.band];
    const btn = document.createElement("button");
    btn.className = "grade-pill";
    btn.type = "button";
    btn.setAttribute("aria-pressed", g.grade === currentGrade ? "true" : "false");
    btn.innerHTML = `<span class="g-icon">${band.icon}</span><span class="g-num">${g.grade}</span>`;
    btn.addEventListener("click", () => selectGrade(g.grade));
    gradeRow.appendChild(btn);
  });
  const gradeInfo = GRADES.find(g => g.grade === currentGrade);
  const band = RESOURCE_BANDS[gradeInfo.band];
  bandNote.textContent = `${dict.bandNotePrefix} ${currentGrade} · ${band.label[currentLang]}`;
}

function renderResources(){
  const dict = I18N[currentLang];
  const gradeInfo = GRADES.find(g => g.grade === currentGrade);
  const band = RESOURCE_BANDS[gradeInfo.band];

  resourceOutput.innerHTML = "";
  band.categories.forEach(cat => {
    const block = document.createElement("div");
    block.className = "cat-block";

    const heading = document.createElement("h3");
    heading.className = "cat-title";
    heading.innerHTML = `<span class="cat-icon">${cat.icon}</span> ${cat.title[currentLang]} <span class="cat-note">${cat.note[currentLang]}</span>`;
    block.appendChild(heading);

    const grid = document.createElement("div");
    grid.className = "card-grid";

    cat.items.forEach(item => {
      const card = document.createElement("a");
      card.className = "card";
      card.href = item.url;
      card.target = "_blank";
      card.rel = "noopener";

      const badgeText = item.cert ? dict.certLabel : dict.freeLabel;
      const badgeClass = item.cert ? "badge cert" : "badge";

      card.innerHTML = `
        <div class="card-top">
          <h3>${item.name}</h3>
          <span class="${badgeClass}">${badgeText}</span>
        </div>
        <p>${item.desc[currentLang]}</p>
        <span class="go">${currentLang === "ar" ? "افتح الموقع ←" : "Open site →"}</span>
      `;
      grid.appendChild(card);
    });

    block.appendChild(grid);
    resourceOutput.appendChild(block);
  });
}

function selectGrade(grade){
  currentGrade = grade;
  renderGradePills();
  renderResources();
}

function setLang(lang){
  currentLang = lang;
  localStorage.setItem("fa-lang", lang);
  htmlRoot.lang = lang;
  htmlRoot.classList.toggle("ar", lang === "ar");
  document.getElementById("btnEn").classList.toggle("active", lang === "en");
  document.getElementById("btnAr").classList.toggle("active", lang === "ar");
  applyStaticText();
  renderGradePills();
  renderResources();
}

document.getElementById("btnEn").addEventListener("click", () => setLang("en"));
document.getElementById("btnAr").addEventListener("click", () => setLang("ar"));

/* ---------- Init ---------- */
setLang(currentLang);
