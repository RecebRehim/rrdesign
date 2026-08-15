export const INDEXNOW_KEY = "e8f3a1c94b7d4e6a9c2f5d8b1a0e4732";

export const navLinks = [
  { href: "/#saheler", label: "Sahələr" },
  { href: "/#xidmetler", label: "Xidmətlər" },
  { href: "/#faq", label: "FAQ" },
] as const;

export const footerServiceLinks = [
  { href: "/sayt-hazirlanmasi", label: "Sayt hazırlanması" },
  { href: "/vizitka-sayt", label: "Vizitka sayt 100 AZN" },
  { href: "/instagram-dm-bot", label: "Instagram DM Bot" },
  { href: "/klinika-sayt", label: "Klinika saytı" },
] as const;

export const footerStudioLinks = [
  { href: "/haqqimizda", label: "Haqqımızda" },
  { href: "/#faq", label: "FAQ" },
  { href: "/vizitka-sayt", label: "Kampaniya" },
] as const;

export const publicPages = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/sayt-hazirlanmasi", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/vizitka-sayt", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/instagram-dm-bot", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/klinika-sayt", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/haqqimizda", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/llms.txt", changeFrequency: "monthly" as const, priority: 0.3 },
] as const;
