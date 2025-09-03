"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Target, TrendingUp, Globe, Zap, CheckCircle, ArrowRight, BarChart3, Clock } from "lucide-react"

const keyMetrics = [
  {
    metric: "Fan Growth Potential",
    current: "2.4M",
    projected: "4.8M",
    timeline: "12 months",
    confidence: 87,
  },
  {
    metric: "Market Expansion",
    current: "47 countries",
    projected: "65 countries",
    timeline: "18 months",
    confidence: 92,
  },
  {
    metric: "Revenue Impact",
    current: "$2.1M",
    projected: "$6.3M",
    timeline: "24 months",
    confidence: 78,
  },
]

const strategicPriorities = [
  {
    priority: "Platform Analytics Mastery",
    description: "Leverage multi-platform data for optimal release timing and market targeting",
    impact: "High",
    effort: "Medium",
    timeline: "Q3 2024",
    kpis: ["15% increase in first-week streams", "25% improvement in playlist placements"],
  },
  {
    priority: "Fan Intelligence Dashboard",
    description: "Deploy comprehensive analytics platform for real-time fan insights",
    impact: "Very High",
    effort: "High",
    timeline: "Q4 2024",
    kpis: ["50% faster campaign optimization", "30% reduction in marketing waste"],
  },
  {
    priority: "Proactive Trend Monitoring",
    description: "Implement early warning systems for viral moment capitalization",
    impact: "Critical",
    effort: "Medium",
    timeline: "Q2 2024",
    kpis: ["3x faster trend response time", "200% increase in viral moment capture"],
  },
]

const implementationRoadmap = [
  {
    phase: "Phase 1: Foundation",
    duration: "3 months",
    focus: "Data Infrastructure",
    deliverables: [
      "Platform API integrations setup",
      "Basic analytics dashboard deployment",
      "Team training on data interpretation",
      "Initial fan segmentation models",
    ],
  },
  {
    phase: "Phase 2: Intelligence",
    duration: "6 months",
    focus: "Advanced Analytics",
    deliverables: [
      "AI-powered insight generation",
      "Geographic expansion recommendations",
      "Predictive trend analysis system",
      "Campaign optimization algorithms",
    ],
  },
  {
    phase: "Phase 3: Optimization",
    duration: "9 months",
    focus: "Strategic Execution",
    deliverables: [
      "Automated campaign management",
      "Real-time market opportunity alerts",
      "Cross-platform fan journey mapping",
      "ROI optimization frameworks",
    ],
  },
]

const expectedOutcomes = [
  { outcome: "Streaming Growth", baseline: 100, projected: 180, unit: "%" },
  { outcome: "Market Penetration", baseline: 100, projected: 240, unit: "%" },
  { outcome: "Fan Engagement", baseline: 100, projected: 160, unit: "%" },
  { outcome: "Campaign Efficiency", baseline: 100, projected: 220, unit: "%" },
]

export function ExecutiveSummary() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-foreground">Executive Summary</h1>
        <p className="text-lg text-muted-foreground">
          Strategic recommendations for data-driven fan growth at Mavin Records
        </p>

        <Card className="border-l-4 border-l-primary bg-primary/5">
          <CardContent className="pt-6">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-primary rounded-lg">
                <Target className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Strategic Objective</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Transform Mavin Records into a data-driven powerhouse that proactively identifies and capitalizes on
                  global fan growth opportunities, positioning our artists for sustained international success.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Key Projections */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <span>Projected Impact Metrics</span>
          </CardTitle>
          <CardDescription>Expected outcomes from implementing our data-driven strategy</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {keyMetrics.map((metric, index) => (
              <div key={index} className="space-y-4 p-4 border border-border rounded-lg">
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">{metric.metric}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Current</span>
                    <span className="font-semibold text-foreground">{metric.current}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Projected</span>
                    <span className="font-semibold text-primary">{metric.projected}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Confidence Level</span>
                    <span className="text-xs font-medium text-foreground">{metric.confidence}%</span>
                  </div>
                  <Progress value={metric.confidence} className="h-2" />
                </div>
                <Badge variant="outline" className="w-fit">
                  {metric.timeline}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Strategic Priorities */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="h-5 w-5 text-primary" />
            <span>Strategic Priorities</span>
          </CardTitle>
          <CardDescription>Three core initiatives to drive fan growth and market expansion</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {strategicPriorities.map((priority, index) => (
              <div key={index} className="p-6 border border-border rounded-lg space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <Badge variant="outline" className="text-xs">
                        Priority {index + 1}
                      </Badge>
                      <h3 className="text-lg font-semibold text-foreground">{priority.priority}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{priority.description}</p>
                  </div>
                  <div className="text-right space-y-2">
                    <Badge
                      variant={
                        priority.impact === "Critical"
                          ? "destructive"
                          : priority.impact === "Very High"
                            ? "default"
                            : "secondary"
                      }
                      className={priority.impact === "Very High" ? "bg-primary text-primary-foreground" : ""}
                    >
                      {priority.impact} Impact
                    </Badge>
                    <div className="text-sm text-muted-foreground">{priority.timeline}</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-foreground">Key Performance Indicators:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {priority.kpis.map((kpi, kpiIndex) => (
                      <div key={kpiIndex} className="flex items-center space-x-2 p-2 bg-muted/30 rounded">
                        <CheckCircle className="h-3 w-3 text-primary" />
                        <span className="text-sm text-foreground">{kpi}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Expected Outcomes Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            <span>Performance Improvement Projections</span>
          </CardTitle>
          <CardDescription>Expected percentage improvements across key metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={expectedOutcomes} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis type="number" stroke="var(--color-muted-foreground)" />
              <YAxis dataKey="outcome" type="category" stroke="var(--color-muted-foreground)" width={120} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                }}
              />
              <Bar dataKey="baseline" fill="var(--color-muted)" name="Current" />
              <Bar dataKey="projected" fill="var(--color-primary)" name="Projected" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Implementation Roadmap */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-primary" />
            <span>Implementation Roadmap</span>
          </CardTitle>
          <CardDescription>Phased approach to deploying our data-driven strategy</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {implementationRoadmap.map((phase, index) => (
              <div key={index} className="relative">
                {index < implementationRoadmap.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-16 bg-border" />
                )}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary rounded-full">
                    <span className="text-sm font-bold text-primary-foreground">{index + 1}</span>
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-foreground">{phase.phase}</h3>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary">{phase.duration}</Badge>
                        <Badge variant="outline">{phase.focus}</Badge>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {phase.deliverables.map((deliverable, delIndex) => (
                        <div
                          key={delIndex}
                          className="flex items-center space-x-2 p-2 bg-card border border-border rounded"
                        >
                          <ArrowRight className="h-3 w-3 text-primary" />
                          <span className="text-sm text-foreground">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Final Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Globe className="h-5 w-5 text-primary" />
            <span>Final Recommendations</span>
          </CardTitle>
          <CardDescription>Critical next steps for Mavin Records leadership</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Immediate Actions (Next 30 Days)</h3>
              <div className="space-y-3">
                {[
                  "Establish dedicated digital intelligence team",
                  "Begin platform API integration setup",
                  "Initiate relationships with music supervisors",
                  "Start competitor benchmarking analysis",
                ].map((action, index) => (
                  <div key={index} className="flex items-start space-x-2 p-3 bg-primary/5 rounded-lg">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                    <span className="text-sm text-foreground">{action}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Success Metrics (90 Days)</h3>
              <div className="space-y-3">
                {[
                  "Dashboard deployment with real-time data",
                  "First AI-generated market insights",
                  "Measurable improvement in campaign ROI",
                  "Established trend monitoring protocols",
                ].map((metric, index) => (
                  <div key={index} className="flex items-start space-x-2 p-3 bg-accent/5 rounded-lg">
                    <Target className="h-4 w-4 text-accent mt-0.5" />
                    <span className="text-sm text-foreground">{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-border">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Investment in Data-Driven Growth</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                By implementing these strategic recommendations, Mavin Records will position itself as the leading
                data-driven record label in Africa, with the intelligence and agility to capitalize on global
                opportunities and drive unprecedented artist success.
              </p>
              <div className="flex justify-center space-x-4 pt-4">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Approve Strategy</Button>
                <Button variant="outline">Schedule Implementation</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
