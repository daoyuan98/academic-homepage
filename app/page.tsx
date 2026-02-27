"use client"

import { LanguageProvider } from "@/context/language-context"
import { HeaderSection } from "@/components/academic/header-section"
import { BioSection } from "@/components/academic/bio-section"
import { NewsSection } from "@/components/academic/news-section"
import { PublicationsSection } from "@/components/academic/publications-section"
import { ExperienceSection } from "@/components/academic/experience-section"
import {
  AcademicServiceSection,
  AwardsSection,
} from "@/components/academic/awards-section"

// 1. 在这里直接定义一个临时的教育背景组件，省去新建文件的麻烦
function EducationSection() {
  return (
    <section className="mt-12">
      <h2 className="text-xl font-bold mb-4 border-b pb-2">Education</h2>
      <div className="space-y-6">
        <div>
          <div className="flex justify-between items-baseline">
            <h3 className="font-semibold text-lg">National University of Singapore (NUS) </h3>
            <span className="text-sm text-muted-foreground italic">2020.01 - 2024.05 </span>
          </div>
          <p className="text-muted-foreground">Ph.D. in Data Science </p>
          <p className="text-sm text-muted-foreground mt-1">Advisor: Prof. Mohan S. Kankanhalli </p>
        </div>
        
        <div>
          <div className="flex justify-between items-baseline">
            <h3 className="font-semibold text-lg">Zhejiang University (ZJU) </h3>
            <span className="text-sm text-muted-foreground italic">2015.08 - 2019.06 </span>
          </div>
          <p className="text-muted-foreground">B.E. in Computer Science and Technology </p>
          <p className="text-sm text-muted-foreground mt-1">He Zhijun Class  | Advisor: Prof. Jianling Sun </p>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <LanguageProvider>
      <main className="mx-auto max-w-3xl px-6 py-12 pb-24">
        <HeaderSection />
        <BioSection />
        
        {/* 2. 在这里插入我们刚写好的组件 */}
        <EducationSection />
        
        <NewsSection />
        <PublicationsSection />
        <ExperienceSection />
        <AcademicServiceSection />
        {/* <AwardsSection /> */}
        
        <footer className="mt-16 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Guangzhi Wang. All rights reserved. [cite: 1]
        </footer>
      </main>
    </LanguageProvider>
  )
}