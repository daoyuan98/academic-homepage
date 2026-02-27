"use client"

import { useLanguage } from "@/context/language-context"
import { profile } from "@/data/profile"

export function BioSection() {
  const { t } = useLanguage()

  return (
    <section className="mt-8 space-y-6">
      <p
        className="text-base leading-relaxed text-foreground [&_a]:text-primary [&_a]:hover:underline"
        dangerouslySetInnerHTML={{ __html: t(...profile.bio) }}
      />

      {/* Callout */}
      <div className="rounded-r-md border-l-4 border-primary bg-muted/60 px-5 py-4">
        <p
          className="text-sm leading-relaxed text-foreground [&_a]:text-primary [&_a]:hover:underline [&_strong]:font-semibold"
          dangerouslySetInnerHTML={{ __html: t(...profile.callout) }}
        />
      </div>
    </section>
  )
}
