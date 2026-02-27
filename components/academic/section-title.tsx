"use client"

interface SectionTitleProps {
  children: React.ReactNode
  extra?: React.ReactNode
}

export function SectionTitle({ children, extra }: SectionTitleProps) {
  return (
    <div className="mt-12 mb-6">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="text-2xl font-bold text-foreground">{children}</h2>
        {extra}
      </div>
      <div className="mt-2 h-[2px] bg-primary" />
    </div>
  )
}
