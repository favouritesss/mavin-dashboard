"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BarChart3, Globe, Users, TrendingUp, Target, Music, Menu, X } from "lucide-react"

const navigation = [
  { name: "Overview", icon: BarChart3 },
  { name: "Geography", icon: Globe },
  { name: "Social Media", icon: Users },
  { name: "Campaigns", icon: Target },
  { name: "Insights", icon: TrendingUp },
]

interface SidebarProps {
  activeView: string
  setActiveView: (view: string) => void
}

export function Sidebar({ activeView, setActiveView }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Sidebar */}
      <div
        className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-sidebar border-r border-sidebar-border transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:inset-0
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center gap-2 p-6 border-b border-sidebar-border">
            <Music className="h-8 w-8 text-sidebar-primary" />
            <div>
              <h2 className="text-lg font-bold text-sidebar-foreground">MARVIN</h2>
              <p className="text-sm text-sidebar-foreground/70">Analytics</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navigation.map((item) => (
              <Button
                key={item.name}
                variant={activeView === item.name ? "default" : "ghost"}
                className={`w-full justify-start gap-3 ${
                  activeView === item.name
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                }`}
                onClick={() => {
                  setActiveView(item.name)
                  setIsOpen(false) // Close mobile menu on selection
                }}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Button>
            ))}
          </nav>

          {/* Artist selector */}
          <div className="p-4 border-t border-sidebar-border">
            <Card className="p-3 bg-sidebar-accent">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-sidebar-primary rounded-full flex items-center justify-center">
                  <Music className="h-5 w-5 text-sidebar-primary-foreground" />
                </div>
                <div>
                  <p className="font-medium text-sidebar-accent-foreground">Current Artist</p>
                  <p className="text-sm text-sidebar-accent-foreground/70">Burna Boy</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setIsOpen(false)} />}
    </>
  )
}
