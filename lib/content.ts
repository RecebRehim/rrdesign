export type Lang = "az" | "en";

export const INSTAGRAM_URL = "https://www.instagram.com/rrdesign.az/";
export const INSTAGRAM_DM = "https://ig.me/m/rrdesign.az";
export const INSTAGRAM_HANDLE = "@rrdesign.az";

export const content = {
  az: {
    nav: {
      work: "İşlər",
      services: "Xidmətlər",
      process: "Proses",
      faq: "FAQ",
      contact: "Əlaqə",
    },
    cta: {
      dm: "Instagram-dan yaz",
      work: "Demo-lara bax",
      live: "Canlı bax",
    },
    hero: {
      kicker: "Website & Automation · Bakı",
      title: ["Sayt.", "Avtomat.", "Nəticə."],
      lead: "Yerli bizneslərə satış gətirən website-lər və Instagram DM avtomatlaşdırması qururuq. Hazır niş demo-su — sizin brend, WhatsApp və mətnlə bir neçə günə canlı.",
      pill: "Aktiv studio · @rrdesign.az",
    },
    stats: [
      { value: "6+", label: "niş demo" },
      { value: "2", label: "əsas xidmət" },
      { value: "24/7", label: "DM cavabı" },
      { value: "Bakı", label: "baza" },
    ],
    services: {
      kicker: "Xidmətlər",
      title: "Satış üçün sayt.\nSakit gecələr üçün avtomat.",
      lead: "Biz vizual agentlik deyilik. Biznesinizin müştəri qəbul etməsi üçün konkret alətlər qururuq.",
      items: [
        {
          num: "01",
          title: "Niş website-lər",
          body: "Klinika, təhsil, avto, icarə, fərdi mütəxəssis — hazır, sınaqdan keçmiş struktur. Brend, rəng, mətn və WhatsApp nömrəsi sizə uyğunlaşdırılır.",
          points: ["Landing və çoxsəhifəli sayt", "Mobil-first, sürətli, SEO", "Vercel üzərində hosting"],
        },
        {
          num: "02",
          title: "DM avtomatlaşdırma",
          body: "Instagram və WhatsApp-da gələn mesajlar cavabsız qalmır. Qiymət, randevu, ünvan — bot soruşur, lead-i toplayır, sizə ötürür.",
          points: ["Instagram DM və komment", "WhatsApp satış axını", "24/7 ilk cavab"],
        },
        {
          num: "03",
          title: "Lead və satış axını",
          body: "Saytdakı forma, düymə və paket seçimi birbaşa WhatsApp-a düşür. Müştəri yolu qısa — sizə yalnız bağlamaq qalır.",
          points: ["WhatsApp CTA sistemi", "Paket / qiymət səhifələri", "Randevu və rezervasiya"],
        },
      ],
    },
    work: {
      kicker: "Portfolio",
      title: "Canlı demo-lar — eyni gün baxın.",
      lead: "Hər sayt real niş üçün qurulub. Öz biznesinizə uyğun olanı seçin, brendi dəyişək, canlıya çıxaraq.",
    },
    projects: [
      {
        id: "driveaz",
        title: "DriveAZ",
        category: "Avtomobil icarəsi",
        summary: "Hava limanı təhvili, şəffaf günlük qiymət, park və rezervasiya — icarə biznesi üçün conversion fokuslu sayt.",
        tags: ["Rezervasiya", "AZ / EN", "Qiymət cədvəli"],
        url: "https://drive-az.vercel.app/",
      },
      {
        id: "sah",
        title: "ŞAH AVTO TƏLİM",
        category: "Sürücülük təlimi",
        summary: "Avtomobilə görə paket qiymətləri, WhatsApp yazılma, marşrut və üstünlüklər — bir mesajla dərs satışı.",
        tags: ["WhatsApp", "Paketlər", "Yerli niş"],
        url: "https://sah-avtotelim.vercel.app/",
      },
      {
        id: "mindcraft",
        title: "Mindcraft Academy",
        category: "Təhsil platforması",
        summary: "Proqram kartları, uyğunluq testi və müraciət forması — kurs satan akademiyalar üçün aydın satış yolu.",
        tags: ["Kurs kataloqu", "Quiz", "Müraciət"],
        url: "https://mind-craft-blue.vercel.app/",
      },
      {
        id: "safira",
        title: "Safira Dental",
        category: "Stomatologiya",
        summary: "Həkim portreti, xidmət siyahısı, klinika atmosferi — WhatsApp ilə qəbul. Estetik klinika üçün sakit, etibarlı dil.",
        tags: ["Həkim brendi", "Xidmətlər", "WhatsApp"],
        url: "https://safira-dental-demo.vercel.app/",
      },
      {
        id: "vetcare",
        title: "VetCare",
        category: "Baytar klinika",
        summary: "Premium klinika saytı: xidmətlər, həkimlər, rəylər, FAQ, randevu forması. AZ / EN / RU — şəhər klinikası üçün tam paket.",
        tags: ["3 dil", "Randevu", "Qiymət + FAQ"],
        url: "https://vet-clinic-demo-roan.vercel.app/",
      },
      {
        id: "ielts",
        title: "IELTS Instructor",
        category: "Fərdi müəllim",
        summary: "Paketlər, nə daxildir, rəylər və FAQ — şəxsi brendini satan mütəxəssis üçün landing. Qiymət WhatsApp-dan.",
        tags: ["Şəxsi brend", "Paket satış", "Self-study"],
        url: "https://ielts-teacher-demo.vercel.app/",
      },
    ],
    industries: {
      kicker: "Nişlər",
      title: "Hazır şablonlar bu sahələr üçündür",
      items: [
        "Klinika və həkim",
        "Baytar",
        "Təhsil və kurs",
        "Fərdi müəllim",
        "Avtomobil icarəsi",
        "Sürücülük təlimi",
        "Gözəllik salonu",
        "Restoran / kafe",
        "Daşınmaz əmlak",
        "Hüquq / konsultasiya",
      ],
    },
    process: {
      kicker: "Proses",
      title: "Demo-dan brendə — qısa yol.",
      steps: [
        {
          num: "01",
          title: "Niş seçilir",
          body: "Demo-lardan birini seçirsiniz və ya yaxın nişi deyirsiniz. Məqsəd, WhatsApp nömrəsi, rəng və loqo toplanır.",
        },
        {
          num: "02",
          title: "Brend oturur",
          body: "Ad, mətn, şəkil, qiymət və əlaqə sizin olur. Sayt artıq sizin dilinizdə danışır.",
        },
        {
          num: "03",
          title: "Avtomat qoşulur",
          body: "Istəsəniz Instagram DM və WhatsApp axını qurulur: salam, qiymət, randevu, operatora keçid.",
        },
        {
          num: "04",
          title: "Canlıya çıxır",
          body: "Vercel-də host, domen bağlanır, mobil yoxlanılır. Siz Instagram-dan müştəri qəbul edirsiniz.",
        },
      ],
    },
    faq: {
      kicker: "Suallar",
      title: "Əvvəl bunları soruşurlar.",
      items: [
        {
          q: "Qiymət necə hesablanır?",
          a: "Niş demo-sunun fərdiləşdirilməsi ilə sıfırdan yazılan sistem fərqlidir. Instagram-dan nişinizi və ehtiyacınızı yazın — konkret paket və müddət göndəririk. Gizli ödəniş yoxdur.",
        },
        {
          q: "Nə qədər vaxta hazır olur?",
          a: "Hazır demo üzərindən brend dəyişimi adətən bir neçə gün çəkir. DM avtomatlaşdırma hesabın Business tipindən və məzmun həcmindən asılıdır — brifdə dəqiqləşdiririk.",
        },
        {
          q: "Demo-nu öz brendimə uyğunlaşdırmaq olur?",
          a: "Bəli. Ad, rəng, mətn, şəkillər, WhatsApp, ünvan, qiymət — hamısı sizindir. Struktur sınaqdan keçib, görünüş sizin.",
        },
        {
          q: "DM avtomatlaşdırma üçün nə lazımdır?",
          a: "Instagram hesabı Professional (Business/Creator) olmalıdır. Rəsmi mesajlaşma axını qururuq: DM, kommentdən mesaj, sadə satış ssenarisi. WhatsApp üçün Business nömrə kifayətdir.",
        },
        {
          q: "Hosting harada olur?",
          a: "Saytlar Vercel üzərində host olunur — sürətli, SSL-li, mobilə uyğun. Domeni siz gətirirsiniz və ya birlikdə bağlayırıq.",
        },
        {
          q: "Mətni kim yazır?",
          a: "Demo-larda peşəkar niş mətni var. Sizin məlumatlarınızla uyğunlaşdırırıq. İstəsəniz öz mətninizi də göndərə bilərsiniz.",
        },
      ],
    },
    contact: {
      kicker: "Əlaqə",
      title: "Bir DM — düzgün paket.",
      lead: "Nişinizi, mövcud Instagram-ı və nə istədiyinizi yazın. Website, avtomat, yoxsa hər ikisi — qısa cavab veririk.",
      prompts: ["Website istəyirəm", "DM avtomatlaşdırma", "Demo-nu özümə uyğunlaşdır", "Qiymət öyrənim"],
      note: "Cavab Instagram Direct üzərindən.",
      handle: INSTAGRAM_HANDLE,
    },
    footer: {
      tagline: "Bakıda bizneslər üçün website və avtomatlaşdırma.",
      rights: "Bütün hüquqlar qorunur.",
    },
  },
  en: {
    nav: {
      work: "Work",
      services: "Services",
      process: "Process",
      faq: "FAQ",
      contact: "Contact",
    },
    cta: {
      dm: "Message on Instagram",
      work: "View demos",
      live: "Live demo",
    },
    hero: {
      kicker: "Website & Automation · Baku",
      title: ["Sites.", "Automation.", "Results."],
      lead: "We build conversion-focused websites and Instagram DM automation for local businesses. Pick a niche demo, we swap in your brand, copy, and WhatsApp — live in days.",
      pill: "Active studio · @rrdesign.az",
    },
    stats: [
      { value: "6+", label: "niche demos" },
      { value: "2", label: "core services" },
      { value: "24/7", label: "DM reply" },
      { value: "Baku", label: "based" },
    ],
    services: {
      kicker: "Services",
      title: "A site that sells.\nAutomation that answers.",
      lead: "We are not a moodboard studio. We ship tools that take customer inquiries while you work.",
      items: [
        {
          num: "01",
          title: "Niche websites",
          body: "Clinics, education, auto, rental, solo experts — proven page structures. Brand, copy, color, and WhatsApp are customized to you.",
          points: ["Landing or multi-page", "Mobile-first, fast, SEO", "Hosted on Vercel"],
        },
        {
          num: "02",
          title: "DM automation",
          body: "Instagram and WhatsApp messages don’t sit unread. The bot handles price, booking, and address — then hands you the lead.",
          points: ["Instagram DMs & comments", "WhatsApp sales flow", "First reply, 24/7"],
        },
        {
          num: "03",
          title: "Lead & sales flow",
          body: "Forms, package buttons, and CTAs land in WhatsApp. The path is short — you close.",
          points: ["WhatsApp CTA system", "Pricing / packages", "Booking & reservation"],
        },
      ],
    },
    work: {
      kicker: "Portfolio",
      title: "Live demos — open them now.",
      lead: "Each site is built for a real niche. Pick the closest fit, we rebrand it, and ship.",
    },
    projects: [
      {
        id: "driveaz",
        title: "DriveAZ",
        category: "Car rental",
        summary: "Airport handover, transparent daily rates, fleet and booking — a conversion site for rental businesses.",
        tags: ["Booking", "AZ / EN", "Pricing"],
        url: "https://drive-az.vercel.app/",
      },
      {
        id: "sah",
        title: "ŞAH AVTO TƏLİM",
        category: "Driving school",
        summary: "Per-car lesson packages, WhatsApp enrollment, routes and proof points — lessons sold in one message.",
        tags: ["WhatsApp", "Packages", "Local niche"],
        url: "https://sah-avtotelim.vercel.app/",
      },
      {
        id: "mindcraft",
        title: "Mindcraft Academy",
        category: "Education",
        summary: "Program cards, fit quiz, and application form — a clear funnel for course-based academies.",
        tags: ["Catalog", "Quiz", "Apply"],
        url: "https://mind-craft-blue.vercel.app/",
      },
      {
        id: "safira",
        title: "Safira Dental",
        category: "Dental clinic",
        summary: "Doctor-led story, services, clinic atmosphere, WhatsApp booking — calm trust for aesthetic dentistry.",
        tags: ["Doctor brand", "Services", "WhatsApp"],
        url: "https://safira-dental-demo.vercel.app/",
      },
      {
        id: "vetcare",
        title: "VetCare",
        category: "Veterinary clinic",
        summary: "Full clinic site: services, doctors, reviews, FAQ, appointments. AZ / EN / RU — a city clinic package.",
        tags: ["3 languages", "Appointments", "Pricing + FAQ"],
        url: "https://vet-clinic-demo-roan.vercel.app/",
      },
      {
        id: "ielts",
        title: "IELTS Instructor",
        category: "Solo teacher",
        summary: "Packages, what’s included, social proof, FAQ — a personal-brand landing. Price via WhatsApp.",
        tags: ["Personal brand", "Packages", "Self-study"],
        url: "https://ielts-teacher-demo.vercel.app/",
      },
    ],
    industries: {
      kicker: "Niches",
      title: "Templates ready for these fields",
      items: [
        "Clinics & doctors",
        "Veterinary",
        "Education & courses",
        "Private tutors",
        "Car rental",
        "Driving schools",
        "Beauty studios",
        "Cafés / restaurants",
        "Real estate",
        "Legal / consulting",
      ],
    },
    process: {
      kicker: "Process",
      title: "From demo to your brand — short path.",
      steps: [
        {
          num: "01",
          title: "Pick a niche",
          body: "Choose a demo or name the closest niche. We collect goal, WhatsApp, colors, and logo.",
        },
        {
          num: "02",
          title: "Brand it",
          body: "Name, copy, photos, prices, and contact become yours. The site speaks in your voice.",
        },
        {
          num: "03",
          title: "Automate",
          body: "Optional Instagram DM and WhatsApp flow: greeting, price, booking, handoff to you.",
        },
        {
          num: "04",
          title: "Go live",
          body: "Hosted on Vercel, domain connected, mobile checked. You take clients from Instagram.",
        },
      ],
    },
    faq: {
      kicker: "FAQ",
      title: "What people ask first.",
      items: [
        {
          q: "How does pricing work?",
          a: "Customizing a niche demo is different from building a system from zero. Send your niche and needs on Instagram — we reply with a clear package and timeline. No hidden fees.",
        },
        {
          q: "How long does it take?",
          a: "Rebranding a demo usually takes a few days. DM automation depends on a Professional Instagram account and scenario depth — we confirm that in the brief.",
        },
        {
          q: "Can you adapt a demo to my brand?",
          a: "Yes. Name, color, copy, photos, WhatsApp, address, prices — all yours. The structure is proven; the look is you.",
        },
        {
          q: "What do you need for DM automation?",
          a: "An Instagram Professional (Business/Creator) account. We set an official messaging flow: DMs, comment-to-message, a simple sales script. WhatsApp needs a Business number.",
        },
        {
          q: "Where is it hosted?",
          a: "Sites go live on Vercel — fast, SSL, mobile-ready. You bring a domain or we connect one together.",
        },
        {
          q: "Who writes the copy?",
          a: "Demos already have niche-ready copy. We adapt it with your details — or you send your own text.",
        },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "One DM — the right package.",
      lead: "Tell us your niche, Instagram, and what you need. Website, automation, or both — we reply shortly.",
      prompts: ["I need a website", "DM automation", "Adapt a demo for me", "Send pricing"],
      note: "Replies via Instagram Direct.",
      handle: INSTAGRAM_HANDLE,
    },
    footer: {
      tagline: "Websites and automation for businesses in Baku.",
      rights: "All rights reserved.",
    },
  },
} as const;

export type Copy = (typeof content)[Lang];
