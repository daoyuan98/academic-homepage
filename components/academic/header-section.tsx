"use client"

import Image from "next/image"
import { Sun, Moon, Languages } from "lucide-react"
import { useTheme } from "next-themes"
import { useLanguage } from "@/context/language-context"
import { profile } from "@/data/profile"

export function HeaderSection() {
  const { lang, toggleLang, t } = useLanguage()
  const { theme, setTheme } = useTheme()

  return (
    <header className="flex flex-col gap-6 sm:flex-row sm:gap-8">
      {/* Avatar */}
      <div className="shrink-0 self-start">
        <div className="relative h-36 w-36 overflow-hidden rounded-sm bg-muted">
          <Image
            src={profile.avatar}
            alt={t(...profile.name)}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              {t(...profile.name)}
            </h1>
            <p className="mt-1 text-base text-muted-foreground">
              {t(...profile.title)},{" "}
              <a
                href={profile.affiliationUrl}
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {profile.affiliation}
              </a>
              , {t(...profile.location)}
            </p>
          </div>

          {/* Controls */}
          <div className="flex shrink-0 items-center gap-2">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-accent"
              aria-label={t("Switch to Chinese", "切换为英文")}
            >
              <Languages className="h-4 w-4" />
              {lang === "en" ? "中文" : "EN"}
            </button>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex items-center rounded-md border border-border p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              aria-label={t("Toggle dark mode", "切换暗黑模式")}
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 pt-1">
          {profile.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
