const WHATSAPP_NUMBER = "994552591903";

export function waLink(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const waDefault = waLink(
  "Salam, RR DESIGN — sayt haqqında məlumat almaq istəyirəm",
);

export const waCampaign = waLink(
  "Salam, RR DESIGN — İLK SAYT KAMPANİYASI (100 AZN, 24 saat) üçün yer tutmaq istəyirəm",
);

export function waDemo(niche: string) {
  return waLink(
    `Salam, RR DESIGN — “${niche}” demo-sunu öz brendimə uyğunlaşdırmaq istəyirəm`,
  );
}

export function waContact(opts: {
  niche: string;
  instagram: string;
  intent: string;
}) {
  const handle = opts.instagram.trim() || "yazılmayıb";
  return waLink(
    `Salam, RR DESIGN — sahə: ${opts.niche}. Instagram: ${handle}. İstəyirəm: ${opts.intent}.`,
  );
}
