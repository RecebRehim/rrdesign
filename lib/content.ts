export const INSTAGRAM_URL = "https://www.instagram.com/rrdesign.az/";
export const INSTAGRAM_HANDLE = "@rrdesign.az";
export const SITE_DOMAIN = "rrdesign.az";

export const niches = [
  { id: "driveaz", label: "Rent a Car" },
  { id: "sah", label: "Sürücülük Məktəbi" },
  { id: "mindcraft", label: "Təhsil / Kurs" },
  { id: "safira", label: "Klinika / Həkim" },
  { id: "vetcare", label: "Premium Klinika (3 dilli)" },
  { id: "ielts", label: "Fərdi Mütəxəssis" },
] as const;

export const intentOptions = [
  { id: "website", label: "Website" },
  { id: "avtomat", label: "DM Bot" },
  { id: "both", label: "Hər ikisi" },
] as const;

export const projects = [
  {
    id: "driveaz" as const,
    title: "Rent a Car",
    summary: "Hava limanı təhvili, günlük qiymət, WhatsApp rezervasiya",
    bullets: ["Günlük qiymət cədvəli", "WhatsApp rezervasiya"],
    url: "https://drive-az.vercel.app/",
  },
  {
    id: "sah" as const,
    title: "Sürücülük Məktəbi",
    summary: "Paket qiymətləri, marşrut, bir mesajla dərs satışı",
    bullets: ["Paket qiymətləri", "Bir mesajla yazılma"],
    url: "https://sah-avtotelim.vercel.app/",
  },
  {
    id: "mindcraft" as const,
    title: "Təhsil / Kurs",
    summary: "Proqram kartları, uyğunluq testi, müraciət formu",
    bullets: ["Proqram kartları", "Müraciət formu"],
    url: "https://mind-craft-blue.vercel.app/",
  },
  {
    id: "safira" as const,
    title: "Klinika / Həkim",
    summary: "Həkim brendi, xidmətlər, WhatsApp qəbulu",
    bullets: ["Həkim brendi", "WhatsApp qəbulu"],
    url: "https://safira-dental-demo.vercel.app/",
  },
  {
    id: "vetcare" as const,
    title: "Premium Klinika (3 dilli)",
    summary: "AZ/EN/RU, randevu, FAQ",
    bullets: ["Üç dil dəstəyi", "Randevu və FAQ"],
    url: "https://vet-clinic-demo-roan.vercel.app/",
  },
  {
    id: "ielts" as const,
    title: "Fərdi Mütəxəssis",
    summary: "Şəxsi brend, paket satışı",
    bullets: ["Şəxsi brend", "Paket satışı"],
    url: "https://ielts-teacher-demo.vercel.app/",
  },
];

export const faqItems = [
  {
    q: "Qiymət necə hesablanır?",
    a: "Sahə demo-sunun fərdiləşdirilməsi ilə sıfırdan sistem fərqlidir. WhatsApp-dan yazın, konkret paket göndəririk. Gizli ödəniş yoxdur.",
  },
  {
    q: "Nə qədər vaxta hazır olur?",
    a: "Brend dəyişimi 2–3 gün, avtomatlaşdırma hesabın Business tipindən asılıdır. Vizitka sayt kampaniyasında 24 saat hədəflənir.",
  },
  {
    q: "Demo-nu öz brendimə uyğunlaşdırmaq olur?",
    a: "Bəli. Ad, rəng, mətn, şəkil, WhatsApp — hamısı sizindir.",
  },
  {
    q: "DM avtomatlaşdırma üçün nə lazımdır?",
    a: "Instagram Professional hesabı və WhatsApp Business nömrəsi kifayətdir.",
  },
  {
    q: "Hosting harada olur?",
    a: "Hosting sürətli və SSL-lidir. Domeni siz gətirirsiniz — birlikdə bağlayırıq.",
  },
  {
    q: "Mətni kim yazır?",
    a: "Demo-larda sahə mətni var, sizin məlumatlarla uyğunlaşdırırıq.",
  },
];
