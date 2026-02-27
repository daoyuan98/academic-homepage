"use client"

import { useLanguage } from "@/context/language-context"
import { academicService, awards } from "@/data/profile"
import { SectionTitle } from "./section-title"
import { Award, Medal } from "lucide-react"

export function AcademicServiceSection() {
  const { t } = useLanguage()

  return (
    <section>
      <SectionTitle>{t("Academic Service", "学术服务")}</SectionTitle>
      <div className="space-y-2">
        <p className="text-sm text-foreground">
          <span className="font-semibold">
            {t(...academicService.conferences.label)}:
          </span>{" "}
          {academicService.conferences.items}
        </p>
        <p className="text-sm text-foreground">
          <span className="font-semibold">
            {t(...academicService.journals.label)}:
          </span>{" "}
          {academicService.journals.items}
        </p>
      </div>
    </section>
  )
}

export function AwardsSection() {
  const { t } = useLanguage()

  return (
    <section>
      <SectionTitle>{t("Competitions & Awards", "竞赛与获奖")}</SectionTitle>
      <div className="space-y-3">
        {awards.map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="mt-0.5 shrink-0">
              {item.medal === "gold" ? (
                <Medal className="h-5 w-5 text-yellow-500" />
              ) : (
                <Award className="h-5 w-5 text-muted-foreground" />
              )}
            </div>
            <p
              className="text-sm text-foreground [&_a]:text-primary [&_a]:hover:underline"
              dangerouslySetInnerHTML={{ __html: t(...item.content) }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
