"use client"

import { useLanguage } from "@/context/language-context"
import { news } from "@/data/profile"
import { SectionTitle } from "./section-title"

export function NewsSection() {
  const { t } = useLanguage()

  return (
    <section>
      <SectionTitle>{t("News", "新闻动态")}</SectionTitle>
      <div className="space-y-3">
        {news.map((item, i) => (
          <div key={i} className="flex gap-6">
            <span className="w-24 shrink-0 text-sm font-medium text-muted-foreground">
              [{item.date}]
            </span>
            <p
              className="text-sm leading-relaxed text-foreground [&_a]:text-primary [&_a]:hover:underline"
              dangerouslySetInnerHTML={{ __html: t(...item.content) }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
