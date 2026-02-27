"use client"

import { useLanguage } from "@/context/language-context"
import { experience, internships } from "@/data/profile"
import { SectionTitle } from "./section-title"
import { Briefcase, GraduationCap } from "lucide-react"

function TimelineItem({
  period,
  role,
  icon,
}: {
  period: string
  role: string
  icon: React.ReactNode
}) {
  return (
    <div className="flex items-start gap-4 py-2">
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
        {icon}
      </div>
      <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3">
        <span className="text-sm font-bold text-foreground whitespace-nowrap">
          {period}
        </span>
        <span className="text-sm text-muted-foreground">{"—"}</span>
        <span className="text-sm text-foreground">{role}</span>
      </div>
    </div>
  )
}

export function ExperienceSection() {
  const { t } = useLanguage()

  return (
    <section>
      <SectionTitle>{t("Experience", "经历")}</SectionTitle>
      <div className="space-y-1">
        {experience.map((item, i) => (
          <TimelineItem
            key={i}
            period={item.period}
            role={t(...item.role)}
            icon={
              i === 0 ? (
                <Briefcase className="h-4 w-4" />
              ) : (
                <GraduationCap className="h-4 w-4" />
              )
            }
          />
        ))}
      </div>

      <h3 className="mt-8 mb-3 text-lg font-bold text-foreground">
        {t("Internships", "实习经历")}
      </h3>
      <div className="space-y-1">
        {internships.map((item, i) => (
          <TimelineItem
            key={i}
            period={item.period}
            role={t(...item.role)}
            icon={<Briefcase className="h-4 w-4" />}
          />
        ))}
      </div>
    </section>
  )
}
