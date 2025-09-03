"use client"

import { useState } from "react"
import { PresentationNavigation } from "@/components/presentation-navigation"
import { PlatformAnalytics } from "@/components/platform-analytics"
import { FanDashboard } from "@/components/fan-dashboard"
import { CaseStudyAnalysis } from "@/components/case-study-analysis"
import { ExecutiveSummary } from "@/components/executive-summary"

export default function MavinPresentation() {
  const [activeSection, setActiveSection] = useState("Platform Analytics")

  const renderActiveSection = () => {
    switch (activeSection) {
      case "Platform Analytics":
        return <PlatformAnalytics />
      case "Fan Dashboard":
        return <FanDashboard />
      case "Case Study":
        return <CaseStudyAnalysis />
      case "Executive Summary":
        return <ExecutiveSummary />
      default:
        return <PlatformAnalytics />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-foreground">Mavin Records</h1>
              <p className="text-xs sm:text-sm text-muted-foreground">Digital Intelligence Assessment</p>
            </div>
            <div className="text-left sm:text-right">
              <p className="text-xs sm:text-sm font-medium text-foreground">Data-Driven Fan Growth Strategy</p>
              <p className="text-xs text-muted-foreground">Digital Intelligence Team</p>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row">
        <PresentationNavigation activeSection={activeSection} setActiveSection={setActiveSection} />
        <main className="flex-1 p-4 sm:p-6 lg:p-8">{renderActiveSection()}</main>
      </div>
    </div>
  )
}
