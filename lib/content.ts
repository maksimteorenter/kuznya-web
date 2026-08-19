// Centralized copy for the "1341" book landing page.
// Every biographical fact, date, and quote below is sourced from the
// book's own printed front matter (imprint page, foreword, chapter 1)
// or was supplied verbatim by the project owner. Nothing here is invented.
//
// Anything still requiring confirmation is marked TODO — search this file
// for "TODO" before publishing.

export const BOOK = {
  title: "1341 ДЕНЬ В ПЛЕНУ",
  subtitle: "Как выжить там, где у тебя забрали всё",
  tagline:
    "История человека, которого пытались лишить свободы. И система, которая помогла сохранить себя.",
  author: "Максим Теорентер",
  arrestDate: "28 апреля 2016",
  releaseDate: "29 декабря 2019",
  days: 1341,
  price: "$10",
  // TODO: replace with a real Stripe Payment Link / Gumroad URL before launch.
  checkoutUrl: "#",
  formats: [{ code: "PDF", label: "Цифровая версия" }],
  pages: 216,
  poemsCount: 47,
  // TODO: confirm which of EPUB / print / audiobook will actually ship,
  // then extend the array above — the UI already supports multiple badges.
};

export const TIMELINE_DAYS = [1, 10, 100, 365, 730, 1000, 1341];

export const CHAPTERS = [
  "Арест",
  "Ад на земле",
  "Террорист номер один",
  "Побег",
  "Библия",
  "Как течёт время",
  "От страха к силе",
  "Чтение",
  "Начало лидерства",
  "«Яма»",
  "Путь целителя",
  "Обмен",
  "Суд",
];

export const STORY_FRAGMENTS = [
  { date: BOOK.arrestDate + ", 2016", text: "Жизнь разделилась на «до» и «после»." },
  { date: null, text: "Задержание." },
  { date: null, text: "Неопределённость." },
  { date: null, text: "Изоляция." },
  { date: null, text: "Давление." },
  { date: null, text: "Дни превращаются в месяцы. Месяцы — в годы." },
];

export const WHAT_BOOK_GIVES = [
  "Как управлять собой, когда невозможно управлять обстоятельствами",
  "Как сохранять психическую устойчивость под давлением",
  "Как не отдавать страху право принимать решения",
  "Как переживать одиночество",
  "Как создавать внутренние опоры",
  "Как удерживать смысл",
  "Как возвращать контроль над вниманием",
  "Как выдерживать неопределённость",
  "Как не превращать пережитую боль в собственную идентичность",
  "Как заново создавать себя после разрушительных событий",
];

export const FOR_WHOM = [
  "Проходят кризис",
  "Начинают жизнь заново",
  "Потеряли прежние ориентиры",
  "Испытывают давление обстоятельств",
  "Строят бизнес или карьеру в условиях неопределённости",
  "Пережили серьёзные жизненные потрясения",
  "Ищут внутренний стержень",
  "Хотят стать психологически устойчивее",
  "Понимают, что настоящая сила начинается не с контроля других, а с управления собой",
];

export const NOT_FOR_WHOM = [
  "Волшебную таблетку",
  "Мотивационные лозунги",
  "Обещание жизни без боли",
  "Простые ответы на сложные вопросы",
  "Очередную теорию от человека, который сам никогда не проходил через предельные обстоятельства",
];

export const QUOTES = [
  "Иногда ты не выбираешь испытание. Но ты всё ещё можешь выбирать человека, которым из него выйдешь.",
  "Настоящая свобода начинается там, где обстоятельства перестают полностью управлять твоим внутренним состоянием.",
  "Не ищи прежнего себя после разрушения. Создай следующего.",
];

// Biographical facts — sourced from the book's foreword and chapter 1.
// Deliberately limited to strong, verifiable facts rather than a full CV.
export const AUTHOR_FACTS = [
  "Родился в 1981 году в Красном Лимане, Донецкая область",
  "Мастер спорта по американскому футболу — восьмикратный чемпион Украины и СНГ",
  "Кандидат в мастера спорта по тяжёлой атлетике, пауэрлифтингу и гиревому спорту",
  "Кандидат в мастера спорта по грэпплингу и боевому самбо",
  "Магистр в управлении, психологический профайлер, Certified Master Hypnotherapist (American Academy of Hypnosis), Holistic Mind Therapy Practitioner (Holistic Mind Therapy Association, Майами)",
  `${BOOK.days} день в плену в самопровозглашённой ДНР по подозрению в шпионаже в пользу Украины`,
  "Сегодня — гипнотерапевт, автор проекта «Кузня»",
];

export const AUTHOR_LEDE =
  `${BOOK.days} день плена — не вся его жизнь. Но именно там многие идеи были проверены на предельной нагрузке.`;

// TODO: no press mentions, awards, review quotes, or sales figures have
// been supplied. Do not add any of these sections until the project owner
// provides verified source material.
