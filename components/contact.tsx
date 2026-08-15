"use client";

import { useState } from "react";
import { FadeIn } from "@/components/fade-in";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, intentOptions, niches } from "@/lib/content";
import { waContact } from "@/lib/whatsapp";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Contact() {
  const [niche, setNiche] = useState<string>(niches[0].label);
  const [instagram, setInstagram] = useState("");
  const [intent, setIntent] = useState<string>(intentOptions[0].label);

  const href = waContact({ niche, instagram, intent });

  return (
    <section id="elaqe" className="px-5 py-12 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-xl">
        <FadeIn>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
            Sahənizi yazın, qısa cavab verək.
          </h2>
          <form
            className="mt-8 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              window.open(href, "_blank", "noopener,noreferrer");
            }}
          >
            <label className="block text-sm font-medium">
              Sahə
              <Select value={niche} onValueChange={setNiche}>
                <SelectTrigger className="mt-2 h-12 w-full rounded-2xl border-line bg-card px-4 text-base">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="rounded-2xl bg-card">
                  {niches.map((item) => (
                    <SelectItem key={item.id} value={item.label}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </label>
            <label className="block text-sm font-medium">
              Instagram
              <input
                type="text"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
                placeholder="@istifadeci"
                className="mt-2 h-12 w-full rounded-2xl border border-line bg-card px-4 text-base outline-none focus-visible:ring-2 focus-visible:ring-ink/20"
              />
            </label>
            <label className="block text-sm font-medium">
              Nə istəyirsiniz?
              <Select value={intent} onValueChange={setIntent}>
                <SelectTrigger className="mt-2 h-12 w-full rounded-2xl border-line bg-card px-4 text-base">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="rounded-2xl bg-card">
                  {intentOptions.map((item) => (
                    <SelectItem key={item.id} value={item.label}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </label>
            <button type="submit" className="btn-primary w-full">
              WhatsApp-a göndər
            </button>
          </form>
          <p className="mt-6 text-sm text-mute">
            Birbaşa:{" "}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-ink"
            >
              {INSTAGRAM_HANDLE}
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
