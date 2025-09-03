"use client"
import { Card } from "@/components/ui/card"
import { BarChart3, Globe, TrendingUp, Users } from "lucide-react"

interface PresentationNavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export function PresentationNavigation({ activeSection, setActiveSection }: PresentationNavigationProps) {
  const sections = [
    {
      id: "Platform Analytics",
      title: "Platform Analytics",
      subtitle: "Global Release Strategy",
      icon: BarChart3,
      description: "How we use data to drive global success",
    },
    {
      id: "Fan Dashboard",
      title: "Fan Dashboard",
      subtitle: "Product Design",
      icon: Users,
      description: "Artist team intelligence platform",
    },
    {
      id: "Case Study",
      title: "Case Study",
      subtitle: "Data-Driven Success",
      icon: TrendingUp,
      description: "Proactive trend monitoring strategy",
    },
    {
      id: "Executive Summary",
      title: "Executive Summary",
      subtitle: "Key Takeaways",
      icon: Globe,
      description: "Strategic recommendations",
    },
  ]

  return (
    <aside className="w-full lg:w-80 border-b lg:border-b-0 lg:border-r border-border bg-card p-4 lg:p-6">
      <div className="space-y-2 mb-4 hidden lg:block">
        <h2 className="text-lg font-semibold text-foreground">Assessment Sections</h2>
        <p className="text-sm text-muted-foreground">Navigate through the presentation</p>
      </div>

      <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
        {sections.map((section) => {
          const Icon = section.icon
          const isActive = activeSection === section.id

          return (
            <Card
              key={section.id}
              className={`p-3 lg:p-4 cursor-pointer transition-all hover:shadow-md flex-shrink-0 w-48 lg:w-full ${
                isActive ? "border-primary bg-primary/5" : "hover:border-primary/50"
              }`}
              onClick={() => setActiveSection(section.id)}
            >
              <div className="flex items-start space-x-2 lg:space-x-3">
                <div
                  className={`p-1.5 lg:p-2 rounded-lg ${
                    isActive ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  <Icon className="h-3 w-3 lg:h-4 lg:w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className={`font-medium text-xs lg:text-sm ${isActive ? "text-primary" : "text-foreground"}`}>
                    {section.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 hidden lg:block">{section.subtitle}</p>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed hidden lg:block">
                    {section.description}
                  </p>
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      <div className="pt-4 border-t border-border hidden lg:block">
        <p className="text-xs text-muted-foreground text-center">Click any section to navigate</p>
      </div>
    </aside>
  )
}
