export type Lang = "ar" | "fr" | "en";

export const WHATSAPP_NUMBER = "212691299941";
export const PHONE_DISPLAY = "06 91 29 99 41";
export const EMAIL = "mohameddesigner826@gmail.com";
export const INSTAGRAM_URL = "https://instagram.com/Mohamed.designer.v";
export const INSTAGRAM_HANDLE = "@Mohamed.designer.v";

export const LANGS: { id: Lang; short: string; label: string }[] = [
  { id: "ar", short: "ع", label: "العربية" },
  { id: "fr", short: "FR", label: "Français" },
  { id: "en", short: "EN", label: "English" },
];

export type Project = {
  title: string;
  cat: string;
  year: string;
  tag: string;
  desc: string;
};

export type Content = {
  dir: "rtl" | "ltr";
  htmlLang: string;
  nav: {
    about: string;
    services: string;
    works: string;
    process: string;
    request: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    role: string;
    lead: string;
    ctaRequest: string;
    ctaWork: string;
    available: string;
    scroll: string;
  };
  marquee: string[];
  about: {
    label: string;
    title: string;
    p1: string;
    p2: string;
    stats: { v: string; k: string }[];
  };
  services: {
    label: string;
    title: string;
    intro: string;
    items: { n: string; title: string; desc: string }[];
  };
  works: {
    label: string;
    title: string;
    intro: string;
    all: string;
    filters: string[];
    view: string;
    projects: Project[];
  };
  process: {
    label: string;
    title: string;
    steps: { n: string; title: string; desc: string }[];
  };
  request: {
    label: string;
    title: string;
    lead: string;
    name: string;
    service: string;
    details: string;
    budget: string;
    serviceOptions: string[];
    budgets: string[];
    phName: string;
    phDetails: string;
    submit: string;
    note: string;
    or: string;
  };
  contact: {
    label: string;
    title: string;
    lead: string;
    emailLabel: string;
    instaLabel: string;
    waLabel: string;
    rights: string;
  };
};

const ar: Content = {
  dir: "rtl",
  htmlLang: "ar",
  nav: {
    about: "عنّي",
    services: "الخدمات",
    works: "الأعمال",
    process: "المنهجية",
    request: "طلب خدمة",
    contact: "تواصل",
  },
  hero: {
    eyebrow: "مصمم جرافيك مستقل · هوية بصرية · مطبوعات",
    role: "مصمّم جرافيك",
    lead: "أصمّم هويّات بصرية تُروى بالحرف واللون — من الفكرة الأولى إلى الملف النهائي الجاهز للطباعة.",
    ctaRequest: "طلب خدمة",
    ctaWork: "شاهد الأعمال",
    available: "متاح لمشاريع جديدة",
    scroll: "مرّر للأسفل",
  },
  marquee: [
    "هوية بصرية",
    "تصميم شعارات",
    "ملصقات",
    "تغليف ومطبوعات",
    "سوشيال ميديا",
    "إعادة تموضع العلامة",
    "إشراف فني",
  ],
  about: {
    label: "عن المصمم",
    title: "التصميم عندي لغة، قبل أن يكون مهنة.",
    p1: "أنا محمّد، مصمم جرافيك مستقل أشتغل مع العلامات الناشئة والمشاريع الصغيرة على تحويل الأفكار إلى أنظمة بصرية متماسكة: شعار يُفهم من أول نظرة، ألوان لها سبب، وتطبيقات تبدو متناسقة على الورق وعلى الشاشة.",
    p2: "أبدأ كل مشروع بالاستماع قبل الرسم، وأسلّم ملفات منظّمة مع دليل استخدام واضح، لأن التصميم الجيد ليس لوحة جميلة فحسب، بل أداة عمل يومية تخدم صاحبها لسنوات.",
    stats: [
      { v: "07", k: "سنوات خبرة" },
      { v: "180+", k: "مشروع منجز" },
      { v: "95+", k: "عميل سعيد" },
      { v: "12", k: "جائزة وتكريم" },
    ],
  },
  services: {
    label: "الخدمات",
    title: "ماذا أقدّم",
    intro: "خدمات مصمّمة لتغطية دورة حياة العلامة كاملة، من الاسم إلى آخر تطبيق.",
    items: [
      {
        n: "01",
        title: "الهوية البصرية",
        desc: "شعار، نظام ألوان، خطوط، ودليل استخدام كامل يجعل العلامة متماسكة في كل مكان.",
      },
      {
        n: "02",
        title: "تصميم الشعارات",
        desc: "شعارات متجذّرة في الفكرة، تعمل بلون واحد وبحجم صغير، وتصمد أمام الزمن.",
      },
      {
        n: "03",
        title: "السوشيال ميديا",
        desc: "قوالب ومحتوى بصري متماسك لإنستقرام وفيسبوك، يوفّر الوقت ويحافظ على الهوية.",
      },
      {
        n: "04",
        title: "التغليف والمطبوعات",
        desc: "عبوات، أكياس، بروشورات وكروت — ملفات جاهزة للطباعة مع متابعة حتى آخر نسخة.",
      },
      {
        n: "05",
        title: "الملصقات والإعلانات",
        desc: "ملصقات، بانرات وحملات بصرية تلفت النظر وتُقرأ في ثانية واحدة.",
      },
    ],
  },
  works: {
    label: "الأعمال",
    title: "مشاريع مختارة",
    intro: "مجموعة من الهويات والملصقات والتغليف التي صمّمتها بين 2023 و2025.",
    all: "الكل",
    filters: ["هوية بصرية", "تغليف", "ملصقات", "مطبوعات"],
    view: "تفاصيل المشروع",
    projects: [
      {
        title: "نُور",
        cat: "هوية بصرية",
        year: "2025",
        tag: "مقهى مختص",
        desc: "هوية بصرية كاملة لمقهى مختص: الشعار، الأكواب، الأكياس ولوحة الواجهة.",
      },
      {
        title: "أطلس",
        cat: "تغليف",
        year: "2025",
        tag: "عناية طبيعية",
        desc: "نظام تغليف هادئ لعلامة عناية بالبشرة، من العبوة إلى الصندوق الخارجي.",
      },
      {
        title: "مَدّ",
        cat: "ملصقات",
        year: "2024",
        tag: "سلسلة مطبوعة",
        desc: "سلسلة ملصقات ريزوغراف بأشكال هندسية متراكبة وطبقة حبر إضافية.",
      },
      {
        title: "قافلة",
        cat: "هوية بصرية",
        year: "2024",
        tag: "مهرجان ثقافي",
        desc: "هوية مهرجان ثقافي: اللافتات، الحقائب القماشية، الرايات والبرنامج المطبوع.",
      },
      {
        title: "زَخرِف",
        cat: "مطبوعات",
        year: "2023",
        tag: "كتاب وأنماط",
        desc: "نظام زخرفي مطبوع لكتاب فني بغلاف مضغوط وجدول ألوان محدود.",
      },
      {
        title: "رَمل",
        cat: "هوية بصرية",
        year: "2023",
        tag: "واجهة متجر",
        desc: "علامة عقارية وتطبيقها على واجهة متجر بالفينيل المطفي والزجاج.",
      },
    ],
  },
  process: {
    label: "المنهجية",
    title: "كيف نشتغل معًا",
    steps: [
      {
        n: "01",
        title: "الاستماع",
        desc: "نتحدّث عن المشروع والجمهور والهدف، وأخرج بملخّص واضح قبل أي خط.",
      },
      {
        n: "02",
        title: "الاتجاه الفني",
        desc: "بحث، مزاج بصري، واتجاهان مبدئيان نختار منهما الوجهة معًا.",
      },
      {
        n: "03",
        title: "التنفيذ",
        desc: "تطوير النظام البصري كاملًا مع مراجعتين مجانيتين في كل مرحلة.",
      },
      {
        n: "04",
        title: "التسليم",
        desc: "ملفات منظّمة بجميع الصيغ، دليل استخدام، ودعم بعد التسليم.",
      },
    ],
  },
  request: {
    label: "طلب خدمة",
    title: "أخبرني بفكرتك، وأنا أتكفّل بالباقي.",
    lead: "املأ الحقول التالية ويصلني طلبك مباشرة على واتساب مع كل التفاصيل.",
    name: "الاسم الكامل",
    service: "نوع الخدمة",
    details: "تفاصيل المشروع",
    budget: "الميزانية التقريبية",
    serviceOptions: [
      "الهوية البصرية",
      "تصميم شعار",
      "السوشيال ميديا",
      "التغليف والمطبوعات",
      "الملصقات والإعلانات",
    ],
    budgets: [
      "أقل من 1500 درهم",
      "1500 – 4000 درهم",
      "4000 – 8000 درهم",
      "أكثر من 8000 درهم",
      "لم أحدّدها بعد",
    ],
    phName: "مثال: سارة العلوي",
    phDetails:
      "اكتب وصفًا مختصرًا للمشروع، الجمهور المستهدف، والموعد النهائي…",
    submit: "إرسال الطلب عبر واتساب",
    note: "الرد خلال 24 ساعة · التواصل بالعربية والفرنسية والإنجليزية",
    or: "أو راسلني مباشرة",
  },
  contact: {
    label: "تواصل",
    title: "لنبدأ مشروعًا معًا.",
    lead: "متاح حاليًا لمشاريع الهوية البصرية والتغليف والمطبوعات.",
    emailLabel: "البريد الإلكتروني",
    instaLabel: "إنستقرام",
    waLabel: "واتساب",
    rights: "جميع الحقوق محفوظة.",
  },
};

const fr: Content = {
  dir: "ltr",
  htmlLang: "fr",
  nav: {
    about: "À propos",
    services: "Services",
    works: "Travaux",
    process: "Méthode",
    request: "Demande",
    contact: "Contact",
  },
  hero: {
    eyebrow: "Graphiste indépendant · Identité · Impression",
    role: "Graphiste",
    lead: "Je conçois des identités visuelles qui se racontent par la lettre et la couleur — de la première idée au fichier prêt à imprimer.",
    ctaRequest: "Demander un devis",
    ctaWork: "Voir les travaux",
    available: "Disponible pour de nouveaux projets",
    scroll: "Défiler",
  },
  marquee: [
    "Identité visuelle",
    "Création de logos",
    "Affiches",
    "Packaging & impression",
    "Réseaux sociaux",
    "Repositionnement",
    "Direction artistique",
  ],
  about: {
    label: "À propos",
    title: "Le design est un langage avant d’être un métier.",
    p1: "Je suis Mohamed, graphiste indépendant. J’accompagne les marques naissantes et les petites structures pour transformer une idée en système visuel cohérent : un logo lisible au premier regard, des couleurs qui ont une raison d’être, et des applications qui tiennent aussi bien sur papier qu’à l’écran.",
    p2: "Chaque projet commence par l’écoute avant le dessin, et se termine par des fichiers organisés avec un guide d’utilisation clair. Un bon design n’est pas seulement une belle image : c’est un outil de travail quotidien.",
    stats: [
      { v: "07", k: "ans d’expérience" },
      { v: "180+", k: "projets livrés" },
      { v: "95+", k: "clients satisfaits" },
      { v: "12", k: "prix & mentions" },
    ],
  },
  services: {
    label: "Services",
    title: "Ce que je propose",
    intro: "Une offre couvrant tout le cycle de vie de la marque, du nom à la dernière application.",
    items: [
      {
        n: "01",
        title: "Identité visuelle",
        desc: "Logo, palette, typographies et guide complet pour une marque cohérente partout.",
      },
      {
        n: "02",
        title: "Création de logos",
        desc: "Des logos ancrés dans une idée, lisibles en une couleur et en très petite taille.",
      },
      {
        n: "03",
        title: "Réseaux sociaux",
        desc: "Gabarits et contenus visuels cohérents pour Instagram et Facebook, prêts à publier.",
      },
      {
        n: "04",
        title: "Packaging & impression",
        desc: "Boîtes, sacs, flyers, cartes — fichiers prêts à imprimer et suivi jusqu’au bon à tirer.",
      },
      {
        n: "05",
        title: "Affiches & publicité",
        desc: "Affiches, bannières et campagnes visuelles qui se remarquent en une seconde.",
      },
    ],
  },
  works: {
    label: "Travaux",
    title: "Projets sélectionnés",
    intro: "Une sélection d’identités, d’affiches et de packagings réalisés entre 2023 et 2025.",
    all: "Tout",
    filters: ["Identité", "Packaging", "Affiches", "Édition"],
    view: "Voir le projet",
    projects: [
      {
        title: "Nour",
        cat: "Identité",
        year: "2025",
        tag: "Café de spécialité",
        desc: "Identité complète pour un café de spécialité : logo, gobelets, sacs et enseigne.",
      },
      {
        title: "Atlas",
        cat: "Packaging",
        year: "2025",
        tag: "Soin naturel",
        desc: "Système d’emballage apaisé pour une marque de soins naturels, du tube à la boîte.",
      },
      {
        title: "Madd",
        cat: "Affiches",
        year: "2024",
        tag: "Série sérigraphiée",
        desc: "Série d’affiches risograph aux formes géométriques superposées, deux encres.",
      },
      {
        title: "Qafila",
        cat: "Identité",
        year: "2024",
        tag: "Festival culturel",
        desc: "Identité d’un festival culturel : signalétique, tote bags, bannières et programme.",
      },
      {
        title: "Zakhraf",
        cat: "Édition",
        year: "2023",
        tag: "Livre & motifs",
        desc: "Système ornemental imprimé pour un livre d’art, couverture gaufrée, palette limitée.",
      },
      {
        title: "Raml",
        cat: "Identité",
        year: "2023",
        tag: "Devanture",
        desc: "Marque immobilière et son application en vinyle mat sur la devanture d’une boutique.",
      },
    ],
  },
  process: {
    label: "Méthode",
    title: "Comment nous travaillons",
    steps: [
      {
        n: "01",
        title: "Écoute",
        desc: "Nous parlons du projet, du public et de l’objectif. J’en sors un brief clair.",
      },
      {
        n: "02",
        title: "Direction artistique",
        desc: "Recherche, moodboard et deux pistes initiales pour choisir la voie ensemble.",
      },
      {
        n: "03",
        title: "Exécution",
        desc: "Développement complet du système visuel, avec deux allers-retours par étape.",
      },
      {
        n: "04",
        title: "Livraison",
        desc: "Fichiers organisés dans tous les formats, guide d’usage et support après livraison.",
      },
    ],
  },
  request: {
    label: "Demande de service",
    title: "Parlez-moi de votre idée, je m’occupe du reste.",
    lead: "Remplissez ces champs : votre demande arrive directement sur WhatsApp avec tous les détails.",
    name: "Nom complet",
    service: "Type de service",
    details: "Détails du projet",
    budget: "Budget approximatif",
    serviceOptions: [
      "Identité visuelle",
      "Création de logo",
      "Réseaux sociaux",
      "Packaging & impression",
      "Affiches & publicité",
    ],
    budgets: [
      "Moins de 1 500 MAD",
      "1 500 – 4 000 MAD",
      "4 000 – 8 000 MAD",
      "Plus de 8 000 MAD",
      "Pas encore défini",
    ],
    phName: "Ex. : Sarah Alaoui",
    phDetails:
      "Décrivez brièvement le projet, la cible et la date de livraison souhaitée…",
    submit: "Envoyer la demande sur WhatsApp",
    note: "Réponse sous 24 h · Français, arabe et anglais",
    or: "Ou écrivez-moi directement",
  },
  contact: {
    label: "Contact",
    title: "Commençons un projet ensemble.",
    lead: "Actuellement disponible pour des projets d’identité, de packaging et d’impression.",
    emailLabel: "E-mail",
    instaLabel: "Instagram",
    waLabel: "WhatsApp",
    rights: "Tous droits réservés.",
  },
};

const en: Content = {
  dir: "ltr",
  htmlLang: "en",
  nav: {
    about: "About",
    services: "Services",
    works: "Work",
    process: "Process",
    request: "Request",
    contact: "Contact",
  },
  hero: {
    eyebrow: "Freelance graphic designer · Identity · Print",
    role: "Graphic Designer",
    lead: "I design visual identities told through letterform and colour — from the first idea to the print-ready final file.",
    ctaRequest: "Request a service",
    ctaWork: "See the work",
    available: "Available for new projects",
    scroll: "Scroll",
  },
  marquee: [
    "Brand identity",
    "Logo design",
    "Posters",
    "Packaging & print",
    "Social media",
    "Repositioning",
    "Art direction",
  ],
  about: {
    label: "About",
    title: "Design is a language before it is a job.",
    p1: "I’m Mohamed, a freelance graphic designer. I work with young brands and small businesses to turn an idea into a coherent visual system: a logo understood at first glance, colours with a reason behind them, and applications that hold together on paper and on screen.",
    p2: "Every project starts with listening before drawing, and ends with organised files plus a clear usage guide. Good design isn’t just a pretty picture — it’s a daily working tool that keeps paying off for years.",
    stats: [
      { v: "07", k: "years of experience" },
      { v: "180+", k: "projects delivered" },
      { v: "95+", k: "happy clients" },
      { v: "12", k: "awards & mentions" },
    ],
  },
  services: {
    label: "Services",
    title: "What I do",
    intro: "An offer covering the whole life of a brand, from the name to the last application.",
    items: [
      {
        n: "01",
        title: "Brand identity",
        desc: "Logo, palette, type system and a full usage guide for a brand that stays coherent.",
      },
      {
        n: "02",
        title: "Logo design",
        desc: "Logos rooted in an idea, working in one colour and at the smallest sizes.",
      },
      {
        n: "03",
        title: "Social media",
        desc: "Templates and visual content for Instagram and Facebook, ready to publish.",
      },
      {
        n: "04",
        title: "Packaging & print",
        desc: "Boxes, bags, flyers, cards — print-ready files and supervision until the final run.",
      },
      {
        n: "05",
        title: "Posters & advertising",
        desc: "Posters, banners and campaign visuals that get noticed in a single second.",
      },
    ],
  },
  works: {
    label: "Work",
    title: "Selected projects",
    intro: "A selection of identities, posters and packaging made between 2023 and 2025.",
    all: "All",
    filters: ["Identity", "Packaging", "Posters", "Editorial"],
    view: "View project",
    projects: [
      {
        title: "Nour",
        cat: "Identity",
        year: "2025",
        tag: "Specialty coffee",
        desc: "Full identity for a specialty coffee roastery: logo, cups, bags and shopfront sign.",
      },
      {
        title: "Atlas",
        cat: "Packaging",
        year: "2025",
        tag: "Natural skincare",
        desc: "A calm packaging system for a natural skincare line, from tube to outer box.",
      },
      {
        title: "Madd",
        cat: "Posters",
        year: "2024",
        tag: "Printed series",
        desc: "A risograph poster series of overlapping geometric forms, printed in two inks.",
      },
      {
        title: "Qafila",
        cat: "Identity",
        year: "2024",
        tag: "Cultural festival",
        desc: "Festival identity: signage, tote bags, banners and the printed programme.",
      },
      {
        title: "Zakhraf",
        cat: "Editorial",
        year: "2023",
        tag: "Book & patterns",
        desc: "A printed ornamental system for an art book, debossed cover, limited palette.",
      },
      {
        title: "Raml",
        cat: "Identity",
        year: "2023",
        tag: "Storefront",
        desc: "A property brand and its application in matte vinyl across a shopfront.",
      },
    ],
  },
  process: {
    label: "Process",
    title: "How we work together",
    steps: [
      {
        n: "01",
        title: "Listen",
        desc: "We talk through the project, the audience and the goal. I come out with a clear brief.",
      },
      {
        n: "02",
        title: "Art direction",
        desc: "Research, a moodboard and two initial routes so we choose the direction together.",
      },
      {
        n: "03",
        title: "Execution",
        desc: "The full visual system developed, with two rounds of revisions at each stage.",
      },
      {
        n: "04",
        title: "Delivery",
        desc: "Organised files in every format, a usage guide, and support after handover.",
      },
    ],
  },
  request: {
    label: "Request a service",
    title: "Tell me about your idea, I’ll handle the rest.",
    lead: "Fill in the fields below and your request lands directly on WhatsApp with every detail.",
    name: "Full name",
    service: "Service type",
    details: "Project details",
    budget: "Approximate budget",
    serviceOptions: [
      "Brand identity",
      "Logo design",
      "Social media",
      "Packaging & print",
      "Posters & advertising",
    ],
    budgets: [
      "Under 1,500 MAD",
      "1,500 – 4,000 MAD",
      "4,000 – 8,000 MAD",
      "Over 8,000 MAD",
      "Not defined yet",
    ],
    phName: "e.g. Sarah Alaoui",
    phDetails: "Briefly describe the project, the audience and the deadline…",
    submit: "Send request via WhatsApp",
    note: "Reply within 24 hours · Arabic, French & English",
    or: "Or write to me directly",
  },
  contact: {
    label: "Contact",
    title: "Let’s start a project together.",
    lead: "Currently available for identity, packaging and print projects.",
    emailLabel: "Email",
    instaLabel: "Instagram",
    waLabel: "WhatsApp",
    rights: "All rights reserved.",
  },
};

export const CONTENT: Record<Lang, Content> = { ar, fr, en };
