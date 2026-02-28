"use client"

import { useState } from "react"
import { ExternalLink, Star } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { publications, publicationTags, type Publication } from "@/data/profile"
import { SectionTitle } from "./section-title"
import { cn } from "@/lib/utils"

function VenueLabel({ pub }: { pub: Publication }) {
  const colorClass =
    pub.venueClass === "top"
      ? "text-destructive font-bold"
      : pub.venueClass === "journal"
        ? "text-primary font-bold"
        : "text-primary font-semibold"

  return <span className={colorClass}>{pub.venue}</span>
}

export function PublicationsSection() {
  const { t } = useLanguage()
  const [activeTag, setActiveTag] = useState("all")

  const filtered =
    activeTag === "all"
      ? publications
      : publications.filter((p) => p.tags.includes(activeTag))

  return (
    <section>
      <SectionTitle
        extra={
          <a href="#" className="text-sm text-primary hover:underline">
            {t("Full List", "完整列表")}
          </a>
        }
      >
        {t("Selected Publications", "代表性论文")}
      </SectionTitle>

      <p className="mb-4 text-xs text-muted-foreground">
        {t(
          "* denotes project lead / corresponding author",
          "* 表示共同第一/核心作者，+ 表示通讯作者"
        )}
      </p>

      {/* Filter Tags */}
      <div className="mb-6 flex flex-wrap gap-2">
        {publicationTags.map((tag) => (
          <button
            key={tag.key}
            onClick={() => setActiveTag(tag.key)}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors",
              activeTag === tag.key
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground"
            )}
          >
            {t(...tag.label)}
          </button>
        ))}
      </div>

      {/* Publication List */}
      <div className="space-y-6">
        {filtered.map((pub, i) => (
          <article key={i} className="space-y-1">
            <h3 className="text-base font-semibold leading-snug text-foreground">
              {pub.paperUrl ? (
                <a href={pub.paperUrl} className="hover:text-primary" target="_blank" rel="noopener noreferrer">
                  {pub.title}
                </a>
              ) : (
                pub.title
              )}
            </h3>
            <p
              className="text-sm text-muted-foreground [&_b]:font-semibold [&_b]:text-foreground"
              dangerouslySetInnerHTML={{ __html: pub.authors }}
            />
            {pub.description && (
              <p className="mt-2 text-xs italic text-muted-foreground/80 bg-muted/30 p-2 rounded border-l-2 border-primary/30">
                {pub.description}
              </p>
            )}
            <div className="flex flex-wrap items-center gap-3 pt-0.5">
              <span className="text-sm">
                <VenueLabel pub={pub} />, {pub.year}.
              </span>
              {pub.codeUrl && (
                <a
                  href={pub.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded border border-border px-2 py-0.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Star className="h-3 w-3" />
                  Stars
                </a>
              )}
              {pub.stars !== undefined && (
                <span className="rounded border border-border px-2 py-0.5 text-xs text-muted-foreground">
                  {pub.stars}
                </span>
              )}
              {pub.paperUrl && (
                <a
                  href={pub.paperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                >
                  <ExternalLink className="h-3 w-3" />
                  Paper
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
