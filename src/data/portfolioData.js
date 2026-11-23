/**
 * =========================================================================
 * MUNISA URALOVA — BILINGUAL PORTFOLIO CONFIGURATION DATA
 * (O'zbekcha & English)
 * =========================================================================
 * 
 * Ushbu bitta faylni tahrirlash orqali barcha shaxsiy ma'lumotlar,
 * ko'nikmalar, loyihalar va kontaktlarni o'zgartirishingiz mumkin!
 * 
 * Edit this single file to update all personal info, skills, projects,
 * journey, and contact links across both Uzbek and English versions.
 */

export const portfolioData = {
  // ==========================================
  // O'ZBEKCHA VERSIYASI (UZ)
  // ==========================================
  uz: {
    personal: {
      name: "Munisa Uralova",
      role: "Frontend Dasturchi",
      secondaryRole: "Kreativ Veb Dasturchi",
      location: "O'zbekiston",
      countryCode: "UZ",
      currentLevel: "Amaliy dasturlash ko'nikmalarini faol o'rganmoqda va rivojlantirmoqda",
      status: "Amaliyot va yangi hamkorliklar uchun ochiq",
    },

    nav: {
      about: "Haqimda",
      skills: "Ko'nikmalar",
      projects: "Loyihalar",
      journey: "Rivojlanish yo'li",
      contact: "Aloqa",
      getInTouch: "Bog'lanish",
      search: "Qidiruv",
      searchPlaceholder: "Bo'limlar, loyihalar yoki harakatlarni qidirish...",
      soundToggle: "Interfeys ovozi",
      langToggle: "Til",
    },

    hero: {
      greeting: "Salom, men",
      name: "Munisa.",
      title: "Kreativ Dasturchi. Raqamli Tajribalar Yaratuvchisi.",
      description: "Men O'zbekistondan bo'lgan yosh va intiluvchan frontend dasturchiman. Texnologiyalar olamini o'rganib, ijodiy g'oyalarni interaktiv va zamonaviy veb-loyihalarga aylantiraman.",
      primaryCta: "Loyihalarimni ko'rish",
      secondaryCta: "Bog'lanish",
      activeStatus: "O'zbekiston • Faol",
      toolkitFocus: "Asosiy vositalar:",
      scrollExplore: "Ko'rish uchun pastga siljiting",
    },

    about: {
      badge: "Haqimda",
      heading: "Zamonaviy, qulay va unutilmas raqamli tajribalar yaratishga intilaman.",
      philosophy: "Buyuk raqamli tajribalar qiziquvchanlik, ijodkorlik va mayda detallarga e'tibordan boshlanadi.",
      philosophyTitle: "Asosiy Dizayn Falsafam",
      bioParagraphs: [
        "Men O'zbekistonda yashovchi, raqamli go'zallik va toza kod yozishga chin dildan qiziqadigan frontend dasturchiman. Dasturlashga bo'lgan qiziqishim vizual g'oyalarning brauzerda qanday qilib jonli va interaktiv mahsulotga aylanishini ko'rganimda uyg'ondi.",
        "Asosan React.js va zamonaviy veb-standartlar ustida ishlayman. Har doim tartibli struktura, silliq animatsiyalar va foydalanuvchiga maksimal qulaylik yaratish ustida tajribalar o'tkazaman. Mening maqsadim — sayt shunchaki chiroyli emas, balki tezkor, qulay va intuitiv ishlashi kerak.",
        "Har bir loyiham o'z ustimda ishlash, toza kod yozish, UI/UX dizayn qonuniyatlarini chuqurroq o'rganish va yangi zamonaviy texnologiyalarni amalda qo'llash imkoniyatidir."
      ],
      goalTitle: "Bosh Maqsadim",
      goal: "Professional, chiroyli, funksional va innovatsion raqamli mahsulotlar yarata oladigan yuqori darajadagi dasturchi bo'lib yetishish.",
      interestsTitle: "Ijodiy Qiziqishlarim",
      interests: [
        "Frontend Dasturlash",
        "React.js Ekotizimi",
        "Kreativ Veb Dizayn",
        "Interaktiv Interfeyslar & Animatsiya",
        "UI/UX Arxitekturasi",
        "Zamonaviy Veb Standartlar"
      ],
      traitsTitle: "Mening Xarakterim",
      traitsSubtitle: "Loyihalarimda aks etadigan shaxsiy fazilatlarim",
      traits: [
        { label: "Ambitsiyali", desc: "Yuqori standartlar qo'yib, jahon darajasidagi yetuk dasturchi bo'lishga tinimsiz intilaman." },
        { label: "Ijodkor", desc: "Vizual uyg'unlik, tipografika va interaktiv harakatni raqamli san'atga aylantiraman." },
        { label: "Qiziquvchan", desc: "Zamonaviy kutubxonalar, freymvorklar va dizayn tendensiyalarini o'rganishga ishtiyoqim baland." },
        { label: "Qat'iyatli", desc: "Qiyinchiliklardan chekinmay, muammolarni amaliy dasturlash ko'nikmalariga aylantiraman." },
        { label: "Detallarga e'tiborli", desc: "Mikro-interaksiyalar, responsiv moslashuvchanlik va toza struktura ustida sinchkov ishlayman." },
        { label: "Rivojlanishga intiluvchi", desc: "Fikr-mulohazalarni qadrlab, har kuni amaliyot orqali yangi bilimlarni o'zlashtiraman." }
      ]
    },

    skills: {
      badge: "Texnik Palette",
      heading: "Texnologiyalar & Ijodiy Vositalar",
      subtitle: "Amaliy bilimlarim va hozirda o'rganayotgan texnologiyalarimning shaffof ko'rinishi.",
      note: "Darajalar haqiqiy o'rganish bosqichini bildiradi: O'rganmoqdaman, Amaliyotda, Rivojlanmoqda.",
      disciplinesLabel: "Barcha yo'nalishlar",
      dailyPractice: "Kunlik amaliyotda",
      categories: [
        {
          id: "frontend",
          title: "Frontend Dasturlash",
          description: "Interaktiv interfeyslarni jonlantiruvchi asosiy tillar va kutubxonalar.",
          items: [
            {
              name: "React.js",
              level: "Amaliyotda",
              badgeColor: "purple",
              description: "Komponentlar arxitekturasi, hooklar (useState, useEffect, useMemo), holat boshqaruvi.",
              icon: "Atom",
              highlight: "Asosiy e'tibor"
            },
            {
              name: "JavaScript (ES6+)",
              level: "Amaliyotda",
              badgeColor: "violet",
              description: "Zamonaviy sintaksis, massiv metodlari, DOM boshqaruvi, asinxron mantiq.",
              icon: "FileCode2",
              highlight: "Asosiy poydevor"
            },
            {
              name: "HTML5",
              level: "Rivojlanmoqda",
              badgeColor: "blue",
              description: "Semantik teglar, qulaylik (accessibility), toza hujjat tuzilishi va formalar.",
              icon: "LayoutTemplate",
              highlight: "Mustahkam baza"
            },
            {
              name: "CSS3",
              level: "Rivojlanmoqda",
              badgeColor: "cyan",
              description: "Flexbox, CSS Grid, media so'rovlar, keyframe animatsiyalar, responsiv tizimlar.",
              icon: "Palette",
              highlight: "Vizual mahorat"
            }
          ]
        },
        {
          id: "tools",
          title: "Ishchi Vositalar",
          description: "Tezkor va qulay dasturlash muhitini ta'minlovchi instrumentlar.",
          items: [
            {
              name: "VS Code",
              level: "Rivojlanmoqda",
              badgeColor: "blue",
              description: "Kengaytmalar, formatlovchilar va tezkor tugmalar sozlangan asosiy muhit.",
              icon: "Terminal",
              highlight: "Asosiy muhit"
            },
            {
              name: "Vite",
              level: "Amaliyotda",
              badgeColor: "purple",
              description: "Ultra tez zamonaviy yig'uvchi (bundler), lahzalik HMR va loyiha tuzilmasi.",
              icon: "Zap",
              highlight: "Tezkor yig'uvchi"
            },
            {
              name: "Git & GitHub",
              level: "O'rganmoqdaman",
              badgeColor: "violet",
              description: "Versiyalar nazorati asoslari, commit, branchlar va masofaviy repozitoriylar.",
              icon: "GitBranch",
              highlight: "Faol o'rganishda"
            }
          ]
        },
        {
          id: "design",
          title: "UI/UX & Dizayn",
          description: "Veb-saytlar chiroyli, qulay va tushunarli bo'lishini ta'minlovchi vizual qoidalar.",
          items: [
            {
              name: "UI/UX Asoslari",
              level: "O'rganmoqdaman",
              badgeColor: "purple",
              description: "Vizual ierarxiya, tipografika balansi, ranglar uyg'unligi va qulaylik.",
              icon: "Layers",
              highlight: "Estetika"
            },
            {
              name: "Responsiv Dizayn",
              level: "Amaliyotda",
              badgeColor: "cyan",
              description: "Mobil qurilmalar, planshetlar va katta ekranlar uchun to'liq moslashuvchanlik.",
              icon: "Smartphone",
              highlight: "Har qanday ekran"
            },
            {
              name: "Veb Interfeys Dizayni",
              level: "Amaliyotda",
              badgeColor: "violet",
              description: "Qulay navbarlar, interaktiv modallar, mikro-interaksiyalar va qorong'u rejim.",
              icon: "Sparkles",
              highlight: "Kreativ yondashuv"
            }
          ]
        }
      ]
    },

    projects: {
      badge: "Mening Ishlarim",
      heading: "Tanlangan Loyihalar & Ishlar",
      subtitle: "Haqiqiy ishga tushirilgan jonli veb-saytlar va React texnologiyalarida yaratilgan interaktiv platformalar.",
      allTab: "Barcha Loyihalar",
      liveDemo: "Jonli Demo (Render)",
      viewCase: "Batafsil & Simulyator",
      sourceCode: "Manba Kodi",
      liveTag: "Jonli Ishga Tushirilgan",
      items: [
        {
          id: "animeshiklar",
          title: "ANIMESHIKLAR OLAMI",
          subtitle: "O'zbek Tilidagi Zamonaviy Anime Portali",
          category: "Veb-Ilovalar",
          status: "Ishga tushirilgan (Live)",
          isLive: true,
          liveUrl: "https://animeshiklar.onrender.com",
          featured: true,
          accentColor: "#ec4899",
          gradient: "from-pink-600/30 via-purple-600/20 to-black",
          badge: "Jonli Loyiha • Render",
          shortDescription: "Anime muxlislari uchun yaratilgan maxsus platforma. Anime kashfiyoti, video kontent, janrlar bo'yicha saralash va o'zbek tilidagi qulay interfeys.",
          concept: "O'zbek tilidagi anime ixlosmandlari uchun zamonaviy, tezkor va chiroyli platforma yaratish maqsadi. Netflix va Crunchyroll kabi yetakchi platformalar andozasida qulay navigatsiya va video ko'rish imkoniyati.",
          technologies: ["React.js", "Modern CSS", "JavaScript ES6+", "Video Streaming UI", "Render Deployment"],
          keyFeatures: [
            "Haqiqiy internetda ishga tushirilgan (Render platformasida jonli)",
            "Janrlar bo'yicha qulay filtrlash (Jangari, Shonen, Fantastika va boshqalar)",
            "Yuqori sifatli posterlar, reytinglar va tavsif kartalari",
            "Video ko'rish va pleer interfeysi",
            "Mobil va kompyuter ekranlariga to'liq moslashgan responsiv dizayn"
          ],
          designPhilosophy: "Kinematik, jonli va jozibador qorong'u fon. Yorqin neon pushti va binafsharang urg'ular yordamida anime olami muhitini yaratish.",
          implementationNote: "Ushbu loyiha muvaffaqiyatli ishlab chiqilib, Render xostingida jonli ishga tushirilgan. Quyidagi 'Jonli Demo' tugmasi orqali saytni to'g'ridan-to'g'ri ko'rishingiz mumkin.",
          demoUrl: "https://animeshiklar.onrender.com",
          sourceUrl: "https://github.com/munisaurallova",
          metrics: {
            screens: "Jonli Veb-Sayt",
            components: "Modulli UI",
            focus: "Anime Portali"
          }
        },
        {
          id: "qutqar-loyihasi",
          title: "QUTQAR — Aqlli Xavfsizlik Tizimi",
          subtitle: "Tezkor Yordam & Aqlli Xavfsizlik Platformasi",
          category: "Veb-Ilovalar",
          status: "Ishga tushirilgan (Live)",
          isLive: true,
          liveUrl: "https://qutqar-loyihasi.onrender.com",
          featured: true,
          accentColor: "#10b981",
          gradient: "from-emerald-600/30 via-cyan-600/20 to-black",
          badge: "Jonli Loyiha • Render",
          shortDescription: "Favqulodda vaziyatlarda tezkor yordam, aqlli xavfsizlik protokollari va himoya monitoringini ta'minlovchi zamonaviy raqamli platforma.",
          concept: "Insonlar hayoti va xavfsizligini himoya qilishga yo'naltirilgan zamonaviy ijtimoiy-texnologik loyiha. Tizim xavf-xatarlarni tezkor aniqlash va qutqaruv xizmatlari bilan bog'lanishni osonlashtiradi.",
          technologies: ["HTML5", "CSS3", "JavaScript", "Responsive UI", "Render Deployment"],
          keyFeatures: [
            "Render platformasida jonli ishga tushirilgan faol veb-sayt",
            "Favqulodda SOS holati va xavfsizlik paneli",
            "Aqlli xavfsizlik yo'riqnomalari va interaktiv modullar",
            "Tezkor aloqa va yordam chaqirish tizimi",
            "Har qanday qurilmada barqaror ishlovchi toza arxitektura"
          ],
          designPhilosophy: "Ishonch uyg'otuvchi, jiddiy va qat'iy yashil-ko'k himoya uslubi. Tushunarli piktogrammalar va aniq ogohlantirish elementlari.",
          implementationNote: "Render platformasida real deploy qilingan. Barcha foydalanuvchilar to'g'ridan-to'g'ri tashrif buyurib, tizim bilan tanishishlari mumkin.",
          demoUrl: "https://qutqar-loyihasi.onrender.com",
          sourceUrl: "https://github.com/munisaurallova",
          metrics: {
            screens: "Jonli Veb-Sayt",
            components: "Himoya Tizimi",
            focus: "Xavfsizlik & SOS"
          }
        },
        {
          id: "aioraport",
          title: "Airoport — Aviatsiya Portali",
          subtitle: "Zamonaviy Parvozlar & Aeroport Xizmatlari",
          category: "Veb-Ilovalar",
          status: "Ishga tushirilgan (Live)",
          isLive: true,
          liveUrl: "https://aioraport.onrender.com",
          featured: true,
          accentColor: "#3b82f6",
          gradient: "from-blue-600/30 via-indigo-600/20 to-black",
          badge: "Jonli Loyiha • Render",
          shortDescription: "Parvozlarni qidirish, aeroport ma'lumotlari, reyslar jadvali va qulay bron qilish tizimiga ega zamonaviy aviatsiya veb-platformasi.",
          concept: "Aviatsiya va sayohat sohasidagi qulay raqamli vosita. Yo'lovchilarga reyslar holatini kuzatish, chipta xizmatlari va aeroport qulayliklari haqida tezkor ma'lumot beradi.",
          technologies: ["HTML5", "CSS3", "JavaScript", "Layout Systems", "Render Deployment"],
          keyFeatures: [
            "Render platformasida to'liq ishga tushirilgan jonli veb-ilova",
            "Reyslar jadvali va uchish/qo'nish vaqtlari monitoringi",
            "Chipta xizmatlari va aeroport navigatsiyasi",
            "Aero-mavzudagi professional vizual uslub",
            "Tezkor yuklanuvchi yengil kod tuzilishi"
          ],
          designPhilosophy: "Osmon ko'k rangi, shaffof oynaviy panellar va aerodinamik elementlar bilan boyitilgan premium aviatsiya estetika.",
          implementationNote: "Render platformasida jonli joylashtirilgan. Jonli Demo orqali to'g'ridan-to'g'ri kirib ko'rish mumkin.",
          demoUrl: "https://aioraport.onrender.com",
          sourceUrl: "https://github.com/munisaurallova",
          metrics: {
            screens: "Jonli Veb-Sayt",
            components: "Parvoz Tizimi",
            focus: "Aviatsiya UI"
          }
        },
        {
          id: "stray-kids-platform",
          title: "YOU MAKE STRAY KIDS STAY — Stray Kids Memory",
          subtitle: "Interaktiv K-pop Fandom & Musiqa Xotiralari",
          category: "Ijodiy & Media",
          status: "Ishga tushirilgan (Live)",
          isLive: true,
          liveUrl: "https://straykids-memory.onrender.com",
          featured: true,
          accentColor: "#ef4444",
          gradient: "from-red-600/30 via-purple-600/20 to-black",
          badge: "Jonli Loyiha • Render",
          shortDescription: "Stray Kids guruhiga bag'ishlangan vizual jozibador xotira va fandom platformasi: guruh a'zolari, musiqa relizlari, media kontent va interaktiv audio tajribalar.",
          concept: "Stray Kids guruhining o'ziga xos baquvvat energiyasi va STAY muxlislari xotiralarini birlashtiruvchi zamonaviy interaktiv platforma. Audio vizualizatsiya va zamonaviy tipografika uyg'unligi.",
          technologies: ["React.js", "CSS3 Animatsiyalar", "JavaScript ES6+", "Audio Controls", "Render Deployment"],
          keyFeatures: [
            "Render bulutli xostingida real internetda jonli ishga tushirilgan",
            "A'zolar profillari va vizual animatsion kartalar",
            "Treklar ro'yxati, audio pleer va soundwave vizualizatori",
            "Qora ko'cha uslubi (streetwear) va neon qizil effektlar",
            "Mobil va kompyuter ekranlariga to'liq moslashgan responsiv dizayn"
          ],
          designPhilosophy: "Dadil, baquvvat va chaqqon. Qora fon, kontrast qizil yorug'liklar va K-pop dinamikasini ifodalovchi kinetik elementlar.",
          implementationNote: "Render platformasida to'liq ishlab chiqilib, jonli ishga tushirilgan. Quyidagi 'Jonli Demo' tugmasi orqali saytni to'g'ridan-to'g'ri ko'rishingiz mumkin.",
          demoUrl: "https://straykids-memory.onrender.com",
          sourceUrl: "https://github.com/munisaurallova",
          metrics: {
            screens: "Jonli Veb-Sayt",
            components: "16 Komponent",
            focus: "K-pop Energiya"
          }
        },
        {
          id: "girls-life-book",
          title: "Lunara — Qalb Kundaligi & Hayot Xotiralari",
          subtitle: "Qizlar uchun Shaxsiy Kundalik & Estetik Xotiralar Kitobi",
          category: "Veb-Ilovalar",
          status: "Ishga tushirilgan (Live)",
          isLive: true,
          liveUrl: "https://girls-life-book.onrender.com",
          featured: true,
          accentColor: "#c084fc",
          gradient: "from-purple-900/30 via-pink-900/20 to-black",
          badge: "Jonli Loyiha • Render",
          shortDescription: "Har bir qizning qalb kechinmalari, orzu-maqsadlari va eng qadrli xotiralarini saqlovchi nafis, maxfiy va estetik shaxsiy raqamli kundalik platformasi.",
          concept: "An'anaviy qog'oz kundaliklarning samimiyatini zamonaviy veb-texnologiyalari bilan uyg'unlashtirish. Foydalanuvchi his-tuyg'ularini erkin ifodalashi, maqsadlar qo'yishi va xotiralarni xavfsiz saqlashi mumkin bo'lgan ruhiy xotirjamlik maskani.",
          technologies: ["React.js", "Tailwind CSS", "JavaScript ES6+", "UI Charts & Analytics", "Render Deployment"],
          keyFeatures: [
            "Render platformasida jonli ishga tushirilgan faol veb-ilova",
            "Kunlik shaxsiy qaydlar, his-tuyg'ular va kayfiyatlar tahlili",
            "Orzular doskasi (Vision board) va maqsadlar xaritasi",
            "Nafis Cormorant Garamond va Playfair Display estetik tipografikasi",
            "Qorong'u nafis interfeys va shaxsiy ma'lumotlar xavfsizligi"
          ],
          designPhilosophy: "Romantik, mayin va sirli binafsharang-pushti ohanglar. Shaffof oynaviy panellar va qalbga yoquvchi estetik detallar.",
          implementationNote: "Render platformasida muvaffaqiyatli deploy qilingan. Quyidagi 'Jonli Demo' tugmasi orqali saytga to'g'ridan-to'g'ri tashrif buyurishingiz mumkin.",
          demoUrl: "https://girls-life-book.onrender.com",
          sourceUrl: "https://github.com/munisaurallova",
          metrics: {
            screens: "Jonli Veb-Sayt",
            components: "18 Komponent",
            focus: "Kundalik & Xotiralar"
          }
        },
        {
          id: "onlayn-test",
          title: "Onlayn Test Platformasi",
          subtitle: "Bilimlarni Baholash & Interaktiv Test Tizimi",
          category: "Veb-Ilovalar",
          status: "Ishga tushirilgan (Live)",
          isLive: true,
          liveUrl: "https://onlayn-test-njcq.onrender.com",
          featured: true,
          accentColor: "#0ea5e9",
          gradient: "from-sky-600/30 via-indigo-600/20 to-black",
          badge: "Jonli Loyiha • Render",
          shortDescription: "O'quvchilar va talabalar uchun turli fanlar bo'yicha bilimlarni sinovdan o'tkazuvchi, real vaqt taymeri va lahzalik natija hisoblovchi zamonaviy test platformasi.",
          concept: "Ta'lim jarayonida bilimlarni tez, aniq va shaffof baholash imkonini beruvchi interaktiv raqamli tizim. Foydalanuvchilar o'z bilimlarini real vaqt rejimida mustahkamlashlari mumkin.",
          technologies: ["React.js", "Tailwind CSS", "JavaScript ES6+", "Timer Logic", "Render Deployment"],
          keyFeatures: [
            "Render platformasida jonli internetga muvaffaqiyatli joylashtirilgan",
            "Turli fanlar va mavzular bo'yicha interaktiv savollar to'plami",
            "Real vaqtda ishlovchi teskari hisob taymeri va natijalar monitoringi",
            "To'g'ri va xato javoblar statistikasi hamda yakuniy ball hisobi",
            "Barcha qurilmalarda tezkor va yengil yuklanuvchi toza interfeys"
          ],
          designPhilosophy: "Aniqlik, diqqatni jamlash va ishonch uyg'otuvchi musaffo havorang va zumrad ranglar uyg'unligi. Chalg'ituvchi elementlarsiz toza dizayn.",
          implementationNote: "Render platformasida to'liq deploy qilingan. Quyidagi 'Jonli Demo' tugmasi orqali test platformasiga to'g'ridan-to'g'ri kirishingiz mumkin.",
          demoUrl: "https://onlayn-test-njcq.onrender.com",
          sourceUrl: "https://github.com/munisaurallova",
          metrics: {
            screens: "Jonli Veb-Sayt",
            components: "15 Komponent",
            focus: "Ta'lim & Test Tizimi"
          }
        },
        {
          id: "dental-club-website",
          title: "DentalClub Klinikasi",
          subtitle: "Tibbiy Qabul & Stomatologiya Portali",
          category: "Veb-Ilovalar",
          status: "Yakunlangan Prototip",
          isLive: false,
          accentColor: "#06b6d4",
          gradient: "from-cyan-600/30 via-emerald-600/20 to-black",
          badge: "Tibbiy Veb-Sayt",
          shortDescription: "Video fonli asosiy qism, interaktiv muolajalar kartalari, klinika afzalliklari va qabulga yozilish tizimiga ega tibbiy sayt prototipi.",
          concept: "Eski uslubdagi sovuq tibbiy saytlarni zamonaviy, ishonchli va bemorga qulay raqamli ko'rinishga almashtirish maqsadida yaratilgan.",
          technologies: ["React.js", "Tailwind CSS", "Responsive UI", "Form Validations", "Vite"],
          keyFeatures: [
            "Video fonli asosiy taqdimot bo'limi",
            "Xizmatlar katalogi (Estetik, Ortodontiya, Implantatsiya)",
            "Shifokorlar profillari va bemorlar uchun qulayliklar",
            "Onlayn qabulga yozilish bosqichma-bosqich shakli",
            "Klinika joylashuvi va shoshilinch aloqa liniyasi"
          ],
          designPhilosophy: "Toza, xotirjam va yuksak ishonch uyg'otuvchi musaffo havorang va oq ranglar simfoniyasi.",
          implementationNote: "Ko'p bo'limli lending sayt tuzilmasi va forma tekshiruvlarini o'z ichiga olgan yakunlangan prototip.",
          demoUrl: "#dental-club-demo",
          sourceUrl: "https://github.com/munisaurallova",
          metrics: {
            screens: "To'liq Lending",
            components: "16 Komponent",
            focus: "Ishonch & Qulaylik"
          }
        },
        {
          id: "car-market-bot",
          title: "AutoVault Avtomobil Bozori",
          subtitle: "Raqamli Avtosalon & Savdo Boti Konsepsiyasi",
          category: "Konsept & Dizayn",
          status: "Jarayonda",
          isLive: false,
          accentColor: "#f59e0b",
          gradient: "from-amber-600/30 via-purple-600/20 to-black",
          badge: "Avtomobil Savdosi",
          shortDescription: "Kategoriyalar bo'yicha saralash, texnik parametrlar kartalari, interaktiv xarid savatchasi va buyurtma berish bosqichlari.",
          concept: "Onlayn avtosalon ko'rinishini tezkor buyurtma boti bilan birlashtirgan dadil loyiha konsepsiyasi.",
          technologies: ["React.js", "Holat Arxitekturasi", "JavaScript", "CSS Modules", "Vite"],
          keyFeatures: [
            "Avtomobil turlari (Elektr, Premium, Sport, SUV)",
            "Ot kuchi va tezlanish parametrlariga ega texnik kartalar",
            "Xarid savatchasi va narxni hisoblash kalkulyatori",
            "Yetkazib berish va to'lov interfeysi",
            "Yordamchi maslahatchi bot paneli"
          ],
          designPhilosophy: "Premium avtosalon muhiti: to'q kulrang metall panellar, jiloli oltin rang urg'ulari.",
          implementationNote: "E-commerce holat boshqaruvi va murakkab savatcha mantiqini o'zlashtirish jarayonida yaratilmoqda.",
          demoUrl: "#car-market-demo",
          sourceUrl: "https://github.com/munisaurallova",
          metrics: {
            screens: "4 Bosqich",
            components: "15 Komponent",
            focus: "E-Commerce"
          }
        }
      ]
    },

    journey: {
      badge: "Rivojlanish Tarixi",
      heading: "Dasturlashdagi Qadamlarim",
      subtitle: "Qiziqish qanday qilib amaliy frontend dasturlash va jonli loyihalarga aylangani haqidagi bosqichlar.",
      currentTrajectory: "Hozirgi Harakat Yo'nalishim",
      trajectoryTitle: "Kunlik Amaliyot • Toza Kod • Yuqori Sifat",
      trajectoryDesc: "Har bir kunim React komponentlari, holat boshqaruvi va silliq interaktiv interfeyslarni chuqurroq o'rganishga bag'ishlangan.",
      milestones: [
        {
          stage: "01",
          title: "Ilk Qiziqish va Boshlanish",
          subtitle: "Dasturlash olamiga ilk qadamlar",
          description: "Veb-saytlar qanday yaratilishi va ishlashiga bo'lgan kuchli qiziqish uyg'ondi. Asosiy mantiqiy tushunchalarni o'rgana boshladim.",
          badge: "Boshlang'ich",
          icon: "Lightbulb",
          tags: ["Qiziqish", "Mantiq", "Kompyuter Asoslari"]
        },
        {
          stage: "02",
          title: "HTML va CSS Dunyosi",
          subtitle: "Veb strukturasini qurish va bezash",
          description: "Semantik HTML5, zamonaviy Flexbox va CSS Grid texnologiyalarini o'rganib, birinchi moslashuvchan veb-sahifalarimni yaratdim.",
          badge: "Struktura & Dizayn",
          icon: "FileCode",
          tags: ["HTML5", "CSS3", "Responsive", "Flexbox", "Grid"]
        },
        {
          stage: "03",
          title: "JavaScript bilan Jonlantirish",
          subtitle: "Interfeysga mantiq va harakat kiritish",
          description: "JavaScript asoslari, ES6+ yangiliklari, DOM manipulyatsiyasi va asinxron ma'lumotlar bilan ishlashni amalda sinab ko'rdim.",
          badge: "Interaktivlik",
          icon: "Code2",
          tags: ["JavaScript ES6+", "DOM", "Hodisalar", "Funksiyalar"]
        },
        {
          stage: "04",
          title: "React.js ga O'tish",
          subtitle: "Zamonaviy komponentli arxitektura",
          description: "Zamonaviy React rivojlanishiga o'tdim. Komponentlar, useState, useEffect hooklari va Vite vositasidan foydalanishni o'zlashtirdim.",
          badge: "Zamonaviy Freymvork",
          icon: "Atom",
          tags: ["React.js", "Vite", "Komponentlar", "Hooklar"]
        },
        {
          stage: "05",
          title: "Haqiqiy Loyihalar & Deploy",
          subtitle: "Jonli platformalarni yaratish va chiqarish",
          description: "Animeshiklar, Qutqar loyihasi, Airoport, Stray Kids Memory, Lunara va Onlayn Test platformalarini yaratib, Render xostingida jonli internetga muvaffaqiyatli joylashtirdim.",
          badge: "Jonli Deploy",
          icon: "Rocket",
          tags: ["Animeshiklar", "Qutqar", "Airoport", "Stray Kids", "Lunara", "Onlayn Test", "Render"]
        },
        {
          stage: "06",
          title: "To'xtovsiz O'sish & Kelajak",
          subtitle: "Professional mahorat sari",
          description: "Har kuni kod yozib, toza arxitektura, yangi kutubxonalar va yuqori darajadagi loyihalarda qatnashishga intilmoqdaman.",
          badge: "Davom etmoqda",
          icon: "TrendingUp",
          tags: ["Toza Kod", "UI/UX", "Doimiy Amaliyot", "Katta Maqsadlar"]
        }
      ]
    },

    contact: {
      badge: "Bog'lanish",
      heading: "G'oyangiz bormi? Birgalikda ajoyib loyiha yaratamiz.",
      subheading: "Amaliyot taklifi, loyiha g'oyasi yoki shunchaki frontend dasturlash haqida suhbatlashish uchun mening eshigim har doim ochiq.",
      directInquiries: "To'g'ridan-to'g'ri aloqa",
      emailLabel: "Elektron pochta",
      email: "munisaurallova@gmail.com",
      locationText: "O'zbekiston (Toshkent vaqti UTC+5)",
      responseTime: "24 soat ichida javob beraman",
      copyEmail: "Pochtani nusxalash",
      copiedEmail: "Pochta nusxalandi!",
      socialProfiles: "Ijtimoiy tarmoqlar & profillar",
      formTitle: "Xabar yuborish",
      nameLabel: "Ismingiz",
      namePlaceholder: "Masalan: Aziza Karimova",
      emailFieldLabel: "Elektron pochtangiz",
      emailPlaceholder: "Masalan: aziza@example.com",
      topicLabel: "Mavzu",
      messageLabel: "Xabaringiz",
      messagePlaceholder: "Loyiha g'oyangiz, taklif yoki savolingizni yozing...",
      submitBtn: "Xabarni Yuborish",
      submittingBtn: "Xabar yuborilmoqda...",
      successTitle: "Xabaringiz muvaffaqiyatli yuborildi!",
      successDesc: "Xabaringiz uchun rahmat! Tez orada siz bilan bog'lanaman.",
      sendAnother: "Yana bitta xabar yuborish",
      errors: {
        name: "Iltimos, ismingizni kiriting",
        email: "Iltimos, to'g'ri elektron pochta manzilini kiriting",
        message: "Xabar kamida 10 ta belgidan iborat bo'lishi kerak",
      },
      topics: [
        { value: "Internship", label: "Amaliyot / Ish taklifi" },
        { value: "Collaboration", label: "Hamkorlikda loyiha yaratish" },
        { value: "Feedback", label: "Loyihalar bo'yicha fikr-mulohaza" },
        { value: "Hello", label: "Shunchaki salomlashish" },
      ],
      socials: [
        {
          name: "GitHub",
          url: "https://github.com/munisaurallova",
          handle: "@munisaurallova",
          icon: "Github",
          description: "Mening barcha ochiq manba kodlarim"
        },
        {
          name: "LinkedIn",
          url: "https://linkedin.com/in/munisa-uralova",
          handle: "Munisa Uralova",
          icon: "Linkedin",
          description: "Professional profil va yangiliklar"
        },
        {
          name: "Telegram",
          url: "https://t.me/munisaurallova",
          handle: "@munisaurallova",
          icon: "Send",
          description: "Tezkor yozishmalar va bog'lanish"
        }
      ]
    },

    footer: {
      quote: "Mehr, React va tinimsiz intilish bilan yaratildi.",
      copyrightYear: "2025 - 2026",
      statusText: "Barcha tizimlar faol ishlamoqda",
      backToTop: "Tepaga qaytish",
      builtWith: ["React 18", "Vite", "Tailwind CSS", "Lucide Icons"]
    },

    modal: {
      overview: "Loyiha haqida",
      features: "Imkoniyatlar",
      interactive: "Interaktiv Sinov",
      liveSiteBtn: "Jonli Saytni Ochish (Render)",
      closeBtn: "Yopish",
      sourceBtn: "GitHub Kodini Ko'rish",
      interactiveHint: "Quyidagi interaktiv prototipni sinab ko'ring",
      conceptTitle: "Loyiha Konsepsiyasi",
      designTitle: "Dizayn Yo'nalishi & Uslub",
      implTitle: "Yaratilish Jarayoni & O'rganilganlar"
    },

    notFound: {
      badge: "Xatolik 404 • Fazoviy yo'qolish",
      title: "Sahifa Topilmadi",
      desc: "Siz qidirgan manzil mavjud emas. Keling, sizni asosiy sahifaga qaytaramiz.",
      returnBtn: "Bosh sahifaga qaytish"
    }
  },

  // ==========================================
  // ENGLISH VERSION (EN)
  // ==========================================
  en: {
    personal: {
      name: "Munisa Uralova",
      role: "Frontend Developer",
      secondaryRole: "Creative Web Developer",
      location: "Uzbekistan",
      countryCode: "UZ",
      currentLevel: "Actively learning and developing practical programming skills",
      status: "Available for internships & collaborations",
    },

    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      journey: "Journey",
      contact: "Contact",
      getInTouch: "Get in Touch",
      search: "Search",
      searchPlaceholder: "Search sections, projects, or actions...",
      soundToggle: "Interface sound",
      langToggle: "Language",
    },

    hero: {
      greeting: "Hi, I'm",
      name: "Munisa.",
      title: "Creative Developer. Building Digital Experiences.",
      description: "I'm a passionate aspiring frontend developer from Uzbekistan, exploring the world of technology and transforming creative ideas into interactive digital experiences.",
      primaryCta: "Explore My Work",
      secondaryCta: "Get in Touch",
      activeStatus: "Uzbekistan • Active",
      toolkitFocus: "Toolkit Focus:",
      scrollExplore: "Scroll to explore",
    },

    about: {
      badge: "About Me",
      heading: "Passionate about creating modern, intuitive, and memorable web experiences.",
      philosophy: "Great digital experiences begin with curiosity, creativity, and attention to detail.",
      philosophyTitle: "Core Design Philosophy",
      bioParagraphs: [
        "I am an aspiring frontend developer based in Uzbekistan with a genuine love for digital craftsmanship. My journey into programming was sparked by a fascination with how visual ideas turn into interactive reality on the web.",
        "I focus on React.js and modern web standards, constantly experimenting with clean layouts, fluid animations, and user-centered design. I enjoy building things that not only look aesthetic but also feel responsive, snappy, and intuitive to use.",
        "Every project I undertake is an opportunity to push my boundaries—refining code quality, exploring UI/UX design patterns, and mastering new tools in modern frontend development."
      ],
      goalTitle: "Primary Developer Goal",
      goal: "To become a highly skilled developer who can create professional, beautiful, functional, and innovative digital products.",
      interestsTitle: "Areas of Creative Exploration",
      interests: [
        "Frontend Development",
        "React.js Ecosystem",
        "Creative Web Design",
        "Interactive Interfaces & Motion",
        "UI/UX Architecture",
        "Modern Web Standards"
      ],
      traitsTitle: "Personal Attributes",
      traitsSubtitle: "Characteristics Reflected in My Work",
      traits: [
        { label: "Ambitious", desc: "Setting high standards and constantly striving to evolve into a world-class engineer." },
        { label: "Creative", desc: "Blending visual harmony, typography, and interactive motion into digital craft." },
        { label: "Curious", desc: "Always eager to dissect modern libraries, frameworks, and creative design trends." },
        { label: "Determined", desc: "Persistent problem solver who turns challenges into practical programming skills." },
        { label: "Detail-Oriented", desc: "Obsessed with micro-interactions, responsive balance, and clean structure." },
        { label: "Growth-Minded", desc: "Thriving on constructive feedback, continuous practice, and daily learning." }
      ]
    },

    skills: {
      badge: "Technical Palette",
      heading: "Technologies & Creative Tools",
      subtitle: "A transparent overview of my current skills, categorized by discipline with real proficiency stages.",
      note: "Levels reflect honest learning progress: Learning, Practicing, Developing.",
      disciplinesLabel: "All Disciplines",
      dailyPractice: "Practicing Daily",
      categories: [
        {
          id: "frontend",
          title: "Frontend Engineering",
          description: "Core languages and modern component-driven libraries powering interactive interfaces.",
          items: [
            {
              name: "React.js",
              level: "Practicing",
              badgeColor: "purple",
              description: "Component architecture, hooks (useState, useEffect, useMemo), state flow, and modular UI structure.",
              icon: "Atom",
              highlight: "Primary focus"
            },
            {
              name: "JavaScript (ES6+)",
              level: "Practicing",
              badgeColor: "violet",
              description: "Modern syntax, array methods, DOM interaction, asynchronous concepts, and modular logic.",
              icon: "FileCode2",
              highlight: "Core foundation"
            },
            {
              name: "HTML5",
              level: "Developing",
              badgeColor: "blue",
              description: "Semantic markup, accessibility fundamentals, clean document structures, and modern forms.",
              icon: "LayoutTemplate",
              highlight: "Solid base"
            },
            {
              name: "CSS3",
              level: "Developing",
              badgeColor: "cyan",
              description: "Flexbox, CSS Grid, media queries, keyframe animations, glassmorphism, and responsive systems.",
              icon: "Palette",
              highlight: "Visual craft"
            }
          ]
        },
        {
          id: "tools",
          title: "Development Tools",
          description: "Modern developer workflow tools and environments used for efficient building.",
          items: [
            {
              name: "VS Code",
              level: "Developing",
              badgeColor: "blue",
              description: "Daily driver IDE configured with extensions, formatters, and keyboard shortcuts.",
              icon: "Terminal",
              highlight: "Primary IDE"
            },
            {
              name: "Vite",
              level: "Practicing",
              badgeColor: "purple",
              description: "Ultra-fast modern frontend build tool, lightning HMR, and project bundling.",
              icon: "Zap",
              highlight: "Fast bundler"
            },
            {
              name: "Git & GitHub",
              level: "Learning",
              badgeColor: "violet",
              description: "Version control fundamentals, commit workflows, branches, and remote repositories.",
              icon: "GitBranch",
              highlight: "Active learning"
            }
          ]
        },
        {
          id: "design",
          title: "UI/UX & Design",
          description: "Visual principles ensuring applications are pleasant, intuitive, and accessible.",
          items: [
            {
              name: "UI/UX Fundamentals",
              level: "Learning",
              badgeColor: "purple",
              description: "Visual hierarchy, typography balance, color theory, and human-computer interaction.",
              icon: "Layers",
              highlight: "Aesthetic focus"
            },
            {
              name: "Responsive Design",
              level: "Practicing",
              badgeColor: "cyan",
              description: "Mobile-first layouts, flexible breakpoints, and fluid scaling across all screens.",
              icon: "Smartphone",
              highlight: "Cross-device"
            },
            {
              name: "Web Interface Design",
              level: "Practicing",
              badgeColor: "violet",
              description: "Crafting intuitive navbars, interactive modals, micro-interactions, and dark mode systems.",
              icon: "Sparkles",
              highlight: "Creative polish"
            }
          ]
        }
      ]
    },

    projects: {
      badge: "Signature Work",
      heading: "Featured Projects & Deployed Apps",
      subtitle: "Explore live deployed web platforms and interactive web prototypes crafted with modern design systems.",
      allTab: "All Projects",
      liveDemo: "Live Demo (Render)",
      viewCase: "Inspect & Simulator",
      sourceCode: "Source Code",
      liveTag: "Live Deployed",
      items: [
        {
          id: "animeshiklar",
          title: "ANIMESHIKLAR OLAMI",
          subtitle: "Modern Curated Anime Portal in Uzbek",
          category: "Web Apps",
          status: "Live Deployed",
          isLive: true,
          liveUrl: "https://animeshiklar.onrender.com",
          featured: true,
          accentColor: "#ec4899",
          gradient: "from-pink-600/30 via-purple-600/20 to-black",
          badge: "Live on Render",
          shortDescription: "A specialized platform created for anime fans. Features anime discovery, video content, genre filtering, and an intuitive Uzbek-language interface.",
          concept: "Created for anime enthusiasts in Uzbekistan who appreciate clean, distraction-free curation. Inspired by modern streaming hubs like Crunchyroll and Netflix.",
          technologies: ["React.js", "Modern CSS", "JavaScript ES6+", "Video Streaming UI", "Render Deployment"],
          keyFeatures: [
            "Actively deployed live on Render cloud hosting",
            "Genre-based filtering (Action, Shonen, Romance, Sci-Fi, Fantasy)",
            "High-resolution posters, ratings, and synopsis cards",
            "Video preview and dedicated playback player interface",
            "Fully responsive layout optimized across mobile and desktop devices"
          ],
          designPhilosophy: "Atmospheric, cinematic, and vibrant dark backdrop. Radiant neon pink and purple accents reflecting dynamic anime visuals.",
          implementationNote: "Successfully built and deployed live on Render hosting. Click the 'Live Demo' button to visit the real site immediately.",
          demoUrl: "https://animeshiklar.onrender.com",
          sourceUrl: "https://github.com/munisaurallova",
          metrics: {
            screens: "Live Website",
            components: "Modular UI",
            focus: "Anime Portal"
          }
        },
        {
          id: "qutqar-loyihasi",
          title: "QUTQAR — Smart Safety System",
          subtitle: "Emergency Response & Digital Safety Platform",
          category: "Web Apps",
          status: "Live Deployed",
          isLive: true,
          liveUrl: "https://qutqar-loyihasi.onrender.com",
          featured: true,
          accentColor: "#10b981",
          gradient: "from-emerald-600/30 via-cyan-600/20 to-black",
          badge: "Live on Render",
          shortDescription: "A modern digital platform providing emergency support, smart safety protocols, and real-time security monitoring.",
          concept: "A human-centric safety platform designed to simplify emergency signaling, crisis response instructions, and public security awareness.",
          technologies: ["HTML5", "CSS3", "JavaScript", "Responsive UI", "Render Deployment"],
          keyFeatures: [
            "Live production deployment running smoothly on Render",
            "Emergency SOS action trigger and safety status panel",
            "Smart safety protocols and interactive prevention guidelines",
            "Quick-dial emergency services and crisis contacts",
            "Lightweight, lag-free performance accessible on all mobile browsers"
          ],
          designPhilosophy: "Reassuring, high-trust emerald and cyan security palette with clear iconography and prominent emergency signals.",
          implementationNote: "Deployed live on Render. Visitors can test the live interface directly via the 'Live Demo' link.",
          demoUrl: "https://qutqar-loyihasi.onrender.com",
          sourceUrl: "https://github.com/munisaurallova",
          metrics: {
            screens: "Live Website",
            components: "Safety System",
            focus: "Security & SOS"
          }
        },
        {
          id: "aioraport",
          title: "Airoport — Aviation Portal",
          subtitle: "Flight Intelligence & Airport Services Platform",
          category: "Web Apps",
          status: "Live Deployed",
          isLive: true,
          liveUrl: "https://aioraport.onrender.com",
          featured: true,
          accentColor: "#3b82f6",
          gradient: "from-blue-600/30 via-indigo-600/20 to-black",
          badge: "Live on Render",
          shortDescription: "A modern aviation portal featuring flight tracking, airport terminal information, flight schedules, and seamless booking navigation.",
          concept: "A digital gateway for travelers and airport visitors to track flight timetables, terminal gates, and travel logistics in a clean, modern interface.",
          technologies: ["HTML5", "CSS3", "JavaScript", "Layout Systems", "Render Deployment"],
          keyFeatures: [
            "Fully deployed and accessible online via Render hosting",
            "Interactive flight departures and arrivals board",
            "Airport terminal navigation and service directories",
            "Aero-inspired visual aesthetic with high contrast",
            "Lightweight, mobile-first responsive architecture"
          ],
          designPhilosophy: "Aviation blue tones, frosted glass accents, and clean aerodynamic cards projecting modern aeronautical efficiency.",
          implementationNote: "Deployed live on Render. Check out the real website through the 'Live Demo' button.",
          demoUrl: "https://aioraport.onrender.com",
          sourceUrl: "https://github.com/munisaurallova",
          metrics: {
            screens: "Live Website",
            components: "Flight System",
            focus: "Aviation UI"
          }
        },
        {
          id: "stray-kids-platform",
          title: "YOU MAKE STRAY KIDS STAY — Stray Kids Memory",
          subtitle: "Immersive K-pop Experience & Fandom Memory Hub",
          category: "Creative & Media",
          status: "Live Deployed",
          isLive: true,
          liveUrl: "https://straykids-memory.onrender.com",
          featured: true,
          accentColor: "#ef4444",
          gradient: "from-red-600/30 via-purple-600/20 to-black",
          badge: "Live on Render",
          shortDescription: "An immersive K-pop fandom and memory platform dedicated to Stray Kids: member profiles, album discography, media archive, and interactive experiences.",
          concept: "Conceived as an homage to the explosive energy and aesthetic of Stray Kids and STAY fans worldwide. Features dynamic audio visualizers, custom player controls, and dark streetwear-inspired typography.",
          technologies: ["React.js", "CSS3 Animations", "JavaScript ES6+", "Audio Controls", "Render Deployment"],
          keyFeatures: [
            "Actively deployed live on Render cloud hosting",
            "Dynamic member profile explorer with animated stat cards and concept photos",
            "Interactive discography preview with tracklist and soundwave visualizer",
            "Bold dark-mode streetwear aesthetic with glowing red and chrome accents",
            "Fully responsive layout optimized across mobile and desktop devices"
          ],
          designPhilosophy: "Bold, energetic, and unapologetic. Black backgrounds with high-contrast neon red accents, kinetic typography, and snappy hover transitions.",
          implementationNote: "Successfully built and deployed live on Render hosting. Click the 'Live Demo' button to visit the real site immediately.",
          demoUrl: "https://straykids-memory.onrender.com",
          sourceUrl: "https://github.com/munisaurallova",
          metrics: {
            screens: "Live Website",
            components: "16 Components",
            focus: "High-Energy UI"
          }
        },
        {
          id: "girls-life-book",
          title: "Lunara — Soul Diary & Life Memories",
          subtitle: "Aesthetic Personal Diary & Life Memory Book for Girls",
          category: "Web Apps",
          status: "Live Deployed",
          isLive: true,
          liveUrl: "https://girls-life-book.onrender.com",
          featured: true,
          accentColor: "#c084fc",
          gradient: "from-purple-900/30 via-pink-900/20 to-black",
          badge: "Live on Render",
          shortDescription: "A delicate, private, and aesthetic digital diary platform crafted for girls to capture heartfelt reflections, life milestones, and dreams.",
          concept: "Combining the intimacy of traditional paper journaling with modern web aesthetics. A private sanctuary where users reflect on emotions, set life goals, and chronicle cherished memories.",
          technologies: ["React.js", "Tailwind CSS", "JavaScript ES6+", "UI Charts & Analytics", "Render Deployment"],
          keyFeatures: [
            "Live production deployment running smoothly on Render",
            "Daily journal entries, emotional reflections, and mood tracking",
            "Aesthetic dream board and life milestone goal mapping",
            "Editorial Cormorant Garamond and Playfair Display typography",
            "Atmospheric deep-purple dark mode with elegant privacy protection"
          ],
          designPhilosophy: "Romantic, soft, and mystical lavender-violet tones. Translucent glass panels and thoughtful micro-details celebrating emotional wellness.",
          implementationNote: "Deployed live on Render. Experience the full interactive journal by clicking the 'Live Demo' button.",
          demoUrl: "https://girls-life-book.onrender.com",
          sourceUrl: "https://github.com/munisaurallova",
          metrics: {
            screens: "Live Website",
            components: "18 Components",
            focus: "Journal & Memories"
          }
        },
        {
          id: "onlayn-test",
          title: "Online Testing Platform",
          subtitle: "Interactive Knowledge Assessment & Examination System",
          category: "Web Apps",
          status: "Live Deployed",
          isLive: true,
          liveUrl: "https://onlayn-test-njcq.onrender.com",
          featured: true,
          accentColor: "#0ea5e9",
          gradient: "from-sky-600/30 via-indigo-600/20 to-black",
          badge: "Live on Render",
          shortDescription: "A modern educational assessment platform enabling students to take timed subject tests with instant scoring and detailed performance analytics.",
          concept: "A high-efficiency digital examination system delivering rapid, accurate knowledge testing. Designed with distraction-free testing environments and immediate score feedback.",
          technologies: ["React.js", "Tailwind CSS", "JavaScript ES6+", "Timer Logic", "Render Deployment"],
          keyFeatures: [
            "Successfully deployed live on Render cloud hosting",
            "Interactive question banks across diverse subject disciplines",
            "Real-time countdown examination timer and progress indicator",
            "Instant result evaluation, score calculation, and performance breakdown",
            "Lightweight, distraction-free responsive testing interface"
          ],
          designPhilosophy: "Clarity, focus, and academic trust. Clean sky-blue and emerald palette engineered to keep learners concentrated on their questions.",
          implementationNote: "Deployed live on Render. Visit the live examination platform using the 'Live Demo' button below.",
          demoUrl: "https://onlayn-test-njcq.onrender.com",
          sourceUrl: "https://github.com/munisaurallova",
          metrics: {
            screens: "Live Website",
            components: "15 Components",
            focus: "EdTech & Assessment"
          }
        },
        {
          id: "dental-club-website",
          title: "DentalClub Clinic",
          subtitle: "Modern Medical Landing & Patient Experience",
          category: "Web Apps",
          status: "Completed Prototype",
          isLive: false,
          accentColor: "#06b6d4",
          gradient: "from-cyan-600/30 via-emerald-600/20 to-black",
          badge: "Healthcare UI",
          shortDescription: "A professional clinic landing page featuring video-backed hero sections, interactive treatment cards, clinic advantages, and appointment booking UI.",
          concept: "Designed to replace sterile medical websites with a welcoming, high-trust digital presence that reassures patients and makes scheduling seamless.",
          technologies: ["React.js", "Tailwind CSS", "Responsive UI", "Form Validations", "Vite"],
          keyFeatures: [
            "Polished hero area with video background and clear primary call-to-actions",
            "Comprehensive service directory (Cosmetic, Orthodontics, Surgery, Hygiene)",
            "Interactive doctor profiles and clinical advantage highlights",
            "Appointment inquiry booking form with step-by-step service selection",
            "Full clinic contact information, map placeholder, and emergency hotline"
          ],
          designPhilosophy: "Calm, trustworthy, and pristine. Clean cyan accents, generous whitespace, frosted glass cards, and legible typography.",
          implementationNote: "Completed prototype showcasing multi-section landing page architecture, mobile drawer, and form validation.",
          demoUrl: "#dental-club-demo",
          sourceUrl: "https://github.com/munisaurallova",
          metrics: {
            screens: "Full Landing Page",
            components: "16 Components",
            focus: "High Trust & Conversion"
          }
        },
        {
          id: "car-market-bot",
          title: "AutoVault Car Marketplace",
          subtitle: "Digital Automotive Showroom & Bot Commerce Concept",
          category: "Concept & Design",
          status: "In Progress",
          isLive: false,
          accentColor: "#f59e0b",
          gradient: "from-amber-600/30 via-purple-600/20 to-black",
          badge: "Automotive Commerce",
          shortDescription: "A car marketplace concept with category navigation, vehicle spec cards, interactive shopping cart, and delivery & payment checkout interface.",
          concept: "Combines digital showroom browsing with rapid chatbot/instant checkout workflows. Allows users to inspect vehicle specifications and manage orders.",
          technologies: ["React.js", "State Architecture", "JavaScript", "CSS Modules", "Vite"],
          keyFeatures: [
            "Multi-tier vehicle categorization (Electric, Luxury, Sports, SUVs)",
            "Detailed car spec cards with horsepower, 0-100 acceleration, and range indicators",
            "Interactive shopping cart with item quantity adjustments and cost calculator",
            "Delivery destination selector and mock payment gateway confirmation",
            "Assistant bot quick-prompt panel for answering vehicle inquiries"
          ],
          designPhilosophy: "Luxury automotive showroom vibes. Deep dark charcoal panels, sleek metallic gradients, and structured telemetry tables.",
          implementationNote: "Under active development to master complex e-commerce state management, cart persistence, and multi-step modal workflows.",
          demoUrl: "#car-market-demo",
          sourceUrl: "https://github.com/munisaurallova",
          metrics: {
            screens: "4 Flow Steps",
            components: "15 Components",
            focus: "E-Commerce Architecture"
          }
        }
      ]
    },

    journey: {
      badge: "Growth Timeline",
      heading: "My Development Journey",
      subtitle: "A milestone timeline tracing how curiosity evolved into hands-on frontend engineering, component architecture, and live deployed projects.",
      currentTrajectory: "Current Trajectory",
      trajectoryTitle: "Daily Practice • Clean Code • Craftsmanship",
      trajectoryDesc: "Every day is dedicated to deepening practical understanding of React components, state management patterns, and fluid user interactions.",
      milestones: [
        {
          stage: "01",
          title: "The Initial Spark",
          subtitle: "First steps into code",
          description: "Discovered the magic of building for the web. Learned core programming concepts, computational thinking, and how the internet works under the hood.",
          badge: "Foundation",
          icon: "Lightbulb",
          tags: ["Curiosity", "Logic", "Computer Basics"]
        },
        {
          stage: "02",
          title: "Exploring HTML & CSS",
          subtitle: "Structuring & styling the web",
          description: "Dove deep into semantic HTML5, modern layout engines (Flexbox, CSS Grid), responsive design across devices, and creating the first web pages.",
          badge: "Structure & Style",
          icon: "FileCode",
          tags: ["HTML5", "CSS3", "Responsive", "Flexbox", "Grid"]
        },
        {
          stage: "03",
          title: "Unlocking JavaScript",
          subtitle: "Bringing interfaces to life",
          description: "Began learning JavaScript fundamentals, ES6+ features, DOM manipulation, event-driven programming, and asynchronous concepts like Fetch and APIs.",
          badge: "Interactivity",
          icon: "Code2",
          tags: ["JavaScript ES6+", "DOM", "Async", "Event Handling"]
        },
        {
          stage: "04",
          title: "Building with React.js",
          subtitle: "Component-driven architecture",
          description: "Transitioned to modern React development. Mastered components, JSX, useState and useEffect hooks, props drilling, and Vite tooling for fast builds.",
          badge: "Modern Framework",
          icon: "Atom",
          tags: ["React.js", "Vite", "Component UI", "Hooks"]
        },
        {
          stage: "05",
          title: "Real Deployed Projects",
          subtitle: "Deploying live platforms to the internet",
          description: "Engineered and deployed real-world web applications including Animeshiklar, Qutqar rescue system, Airoport, Stray Kids Memory, Lunara, and Online Test live onto Render hosting.",
          badge: "Live Deployed",
          icon: "Rocket",
          tags: ["Animeshiklar", "Qutqar", "Airoport", "Stray Kids", "Lunara", "Online Test", "Render"]
        },
        {
          stage: "06",
          title: "Continuous Horizon",
          subtitle: "Advancing towards mastery",
          description: "Actively practicing daily, refining code cleanliness, exploring advanced frontend patterns, and preparing to collaborate on impactful real-world software.",
          badge: "In Progress",
          icon: "TrendingUp",
          tags: ["Clean Code", "Design Systems", "Web Performance", "Ambition"]
        }
      ]
    },

    contact: {
      badge: "Let's Connect",
      heading: "Have an idea? Let's build something amazing.",
      subheading: "Whether you have an internship opportunity, a project idea, or just want to chat about frontend development and creative websites, my inbox is always open.",
      directInquiries: "Direct Inquiries",
      emailLabel: "Email Address",
      email: "munisaurallova@gmail.com",
      locationText: "Uzbekistan (Tashkent Time UTC+5)",
      responseTime: "Quick response within 24 hours",
      copyEmail: "Copy Email Address",
      copiedEmail: "Copied to clipboard!",
      socialProfiles: "Professional & Social Profiles",
      formTitle: "Send a Direct Message",
      nameLabel: "Your Name",
      namePlaceholder: "e.g. Alex Morgan",
      emailFieldLabel: "Email Address",
      emailPlaceholder: "e.g. alex@example.com",
      topicLabel: "Inquiry Topic",
      messageLabel: "Message",
      messagePlaceholder: "Share your project idea, message, or question...",
      submitBtn: "Send Message",
      submittingBtn: "Dispatching Message...",
      successTitle: "Message Sent Successfully!",
      successDesc: "Thank you for reaching out. Your message has been received, and I will get back to you as soon as possible.",
      sendAnother: "Send Another Message",
      errors: {
        name: "Please provide your name",
        email: "Please provide a valid email format",
        message: "Message should be at least 10 characters long",
      },
      topics: [
        { value: "Internship", label: "Internship / Junior Role Inquiry" },
        { value: "Collaboration", label: "Frontend / Web Design Collaboration" },
        { value: "Feedback", label: "Project Feedback & Mentorship" },
        { value: "Hello", label: "General Developer Chat" },
      ],
      socials: [
        {
          name: "GitHub",
          url: "https://github.com/munisaurallova",
          handle: "@munisaurallova",
          icon: "Github",
          description: "Explore my source code and repositories"
        },
        {
          name: "LinkedIn",
          url: "https://linkedin.com/in/munisa-uralova",
          handle: "Munisa Uralova",
          icon: "Linkedin",
          description: "Connect professionally and see my updates"
        },
        {
          name: "Telegram",
          url: "https://t.me/munisaurallova",
          handle: "@munisaurallova",
          icon: "Send",
          description: "Quick chat and instant messaging"
        }
      ]
    },

    footer: {
      quote: "Crafted with passion, React, and curiosity.",
      copyrightYear: "2025 - 2026",
      statusText: "All systems operational",
      backToTop: "Back to Top",
      builtWith: ["React 18", "Vite", "Tailwind CSS", "Lucide Icons"]
    },

    modal: {
      overview: "Overview & Architecture",
      features: "Key Features",
      interactive: "Interactive Simulator",
      liveSiteBtn: "Open Live Site (Render)",
      closeBtn: "Close",
      sourceBtn: "Source Repository",
      interactiveHint: "Click and interact with the live component below",
      conceptTitle: "Project Concept",
      designTitle: "Design Direction & Aesthetic",
      implTitle: "Implementation & Learnings"
    },

    notFound: {
      badge: "Error 404 • Lost in Cyberspace",
      title: "Page Not Found",
      desc: "The coordinate you requested does not exist in this galaxy. Let's guide you back to Munisa's portfolio.",
      returnBtn: "Return to Homepage"
    }
  }
};
