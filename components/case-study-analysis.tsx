"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { TrendingUp, AlertTriangle, Target, Lightbulb, Clock, Zap, Music, Globe } from "lucide-react"

const mikeEjeaghaData = [
  { day: "May 1", streams: 12000, searches: 2000, social: 3000 },
  { day: "May 15", streams: 15000, searches: 2500, social: 4000 },
  { day: "Jun 1", streams: 85000, searches: 18000, social: 45000 }, // Branjotter's viral skit starts
  { day: "Jun 15", streams: 320000, searches: 65000, social: 180000 },
  { day: "Jul 1", streams: 750000, searches: 140000, social: 420000 },
  { day: "Jul 15", streams: 1200000, searches: 220000, social: 680000 },
]

const dataSignals = [
  {
    signal: "Branjotter Comedy Skit Goes Viral",
    timing: "2 weeks before peak",
    strength: 95,
    actionable: true,
    description: "Nigerian comedian's skit featuring 'Gwo Gwo Gwo Gwo' gains massive traction",
  },
  {
    signal: "Cross-Generational Appeal Discovery",
    timing: "1 week before peak",
    strength: 88,
    actionable: true,
    description: "Young Nigerians discovering classic highlife through viral content",
  },
  {
    signal: "Nostalgia Trend Amplification",
    timing: "5 days before peak",
    strength: 92,
    actionable: true,
    description: "Older Nigerians sharing memories and stories about the original song",
  },
  {
    signal: "Streaming Platform Algorithm Boost",
    timing: "48 hours before peak",
    strength: 85,
    actionable: false,
    description: "Spotify and Apple Music detecting sudden search spike for classic highlife",
  },
]

const proactiveStrategy = [
  {
    phase: "Pre-Intelligence (3-6 months ahead)",
    actions: [
      "Monitor Nigerian comedy and entertainment content creators",
      "Track usage of classic Mavin catalog in viral content",
      "Build relationships with top Nigerian comedians and content creators",
      "Analyze cross-generational music consumption patterns",
    ],
    timeline: "Ongoing",
    priority: "Foundation",
  },
  {
    phase: "Early Detection (1-2 weeks ahead)",
    actions: [
      "Comedy content monitoring for music usage",
      "Social media sentiment analysis for nostalgia trends",
      "Cross-platform viral content tracking",
      "Prepare catalog remastering and distribution",
    ],
    timeline: "1-2 weeks",
    priority: "Preparation",
  },
  {
    phase: "Rapid Response (24-48 hours)",
    actions: [
      "Immediately remaster and distribute the viral track",
      "Coordinate with streaming platforms for playlist placement",
      "Launch targeted social media campaigns amplifying the trend",
      "Connect with the viral content creator for official collaboration",
    ],
    timeline: "24-48 hours",
    priority: "Critical",
  },
]

const mavinApplication = [
  {
    opportunity: "Rema Classic Catalog Revival",
    description: "Leverage viral moments to reintroduce Rema's earlier tracks to new audiences",
    strategy: "Monitor comedy and entertainment content for organic Rema track usage",
    expectedImpact: "300% streaming increase for catalog tracks during viral moments",
    timeline: "Immediate",
  },
  {
    opportunity: "Ayra Starr Nostalgia Positioning",
    description: "Position Ayra Starr as bridge between classic Afrobeats and modern sound",
    strategy: "Create content connecting her music to classic Nigerian artists",
    expectedImpact: "Cross-generational fanbase expansion and cultural relevance",
    timeline: "Q1 2025",
  },
  {
    opportunity: "Comedy Creator Partnerships",
    description: "Build systematic relationships with top Nigerian content creators",
    strategy: "Provide exclusive access to Mavin catalog for creative content",
    expectedImpact: "Viral moment potential worth $2M+ in streaming revenue",
    timeline: "Ongoing",
  },
]

export function CaseStudyAnalysis() {
  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8 px-2 sm:px-4 lg:px-0">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Data-Driven Success Story</h1>
        <p className="text-base sm:text-lg text-muted-foreground">
          How viral content monitoring could have accelerated Mike Ejeagha's "Gwo Gwo Gwo Gwo" resurgence
        </p>
      </div>

      {/* Case Study Overview */}
      <Card className="border-l-4 border-l-primary">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center space-x-2 text-lg sm:text-xl">
            <Music className="h-5 w-5 text-primary flex-shrink-0" />
            <span>The Mike Ejeagha "Gwo Gwo Gwo Gwo" Revival</span>
          </CardTitle>
          <CardDescription className="text-sm sm:text-base">
            From 1983 classic highlife to 2024 viral sensation through comedy content
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <div className="text-center p-3 sm:p-4 bg-primary/5 rounded-lg">
              <div className="text-xl sm:text-2xl font-bold text-primary">9,900%</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Stream increase during viral peak</div>
            </div>
            <div className="text-center p-3 sm:p-4 bg-accent/5 rounded-lg">
              <div className="text-xl sm:text-2xl font-bold text-accent">#1</div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Trending on Nigerian social media platforms
              </div>
            </div>
            <div className="text-center p-3 sm:p-4 bg-chart-3/5 rounded-lg">
              <div className="text-xl sm:text-2xl font-bold" style={{ color: "hsl(var(--chart-3))" }}>
                41 years
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Gap between original release and viral moment
              </div>
            </div>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Mike Ejeagha's 1983 highlife classic "Gwo Gwo Gwo Gwo" experienced a massive resurgence in 2024 when
            Nigerian comedian Branjotter used it in a viral skit, demonstrating how classic African music can find new
            audiences through modern content creators and cross-generational appeal.
          </p>
        </CardContent>
      </Card>

      {/* Performance Chart */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center space-x-2 text-lg sm:text-xl">
            <TrendingUp className="h-5 w-5 text-primary flex-shrink-0" />
            <span>Viral Moment Timeline</span>
          </CardTitle>
          <CardDescription className="text-sm sm:text-base">
            Stream counts, searches, and social mentions during comedy-driven breakthrough
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={mikeEjeaghaData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" fontSize={12} tick={{ fontSize: 12 }} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tick={{ fontSize: 12 }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  fontSize: "14px",
                }}
              />
              <Line
                type="monotone"
                dataKey="streams"
                stroke="hsl(var(--primary))"
                strokeWidth={3}
                dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: "hsl(var(--primary))", strokeWidth: 2, fill: "hsl(var(--background))" }}
              />
              <Line
                type="monotone"
                dataKey="searches"
                stroke="hsl(var(--chart-2))"
                strokeWidth={2}
                dot={{ fill: "hsl(var(--chart-2))", strokeWidth: 2, r: 3 }}
                activeDot={{ r: 5, stroke: "hsl(var(--chart-2))", strokeWidth: 2, fill: "hsl(var(--background))" }}
              />
              <Line
                type="monotone"
                dataKey="social"
                stroke="hsl(var(--chart-3))"
                strokeWidth={2}
                dot={{ fill: "hsl(var(--chart-3))", strokeWidth: 2, r: 3 }}
                activeDot={{ r: 5, stroke: "hsl(var(--chart-3))", strokeWidth: 2, fill: "hsl(var(--background))" }}
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-xs sm:text-sm text-muted-foreground">Streams</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "hsl(var(--chart-2))" }} />
              <span className="text-xs sm:text-sm text-muted-foreground">Searches</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "hsl(var(--chart-3))" }} />
              <span className="text-xs sm:text-sm text-muted-foreground">Social Mentions</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Data Signals Analysis */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center space-x-2 text-lg sm:text-xl">
            <AlertTriangle className="h-5 w-5 text-primary flex-shrink-0" />
            <span>Data Signals Mavin Could Have Caught</span>
          </CardTitle>
          <CardDescription className="text-sm sm:text-base">
            Early warning indicators that predicted the comedy-driven viral moment
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 sm:space-y-4">
            {dataSignals.map((signal, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 border border-border rounded-lg space-y-3 sm:space-y-0"
              >
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                    <Badge variant={signal.actionable ? "default" : "secondary"} className="text-xs w-fit">
                      {signal.timing}
                    </Badge>
                    <h4 className="font-medium text-foreground text-sm sm:text-base">{signal.signal}</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-2">{signal.description}</p>
                </div>
                <div className="text-left sm:text-right space-y-2">
                  <div className="text-sm font-medium text-foreground">{signal.strength}% confidence</div>
                  <Progress value={signal.strength} className="w-full sm:w-24 h-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Proactive Strategy Framework */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center space-x-2 text-lg sm:text-xl">
            <Target className="h-5 w-5 text-primary flex-shrink-0" />
            <span>Mavin's Proactive Content Monitoring Strategy</span>
          </CardTitle>
          <CardDescription className="text-sm sm:text-base">
            How we'd have accelerated Mike Ejeagha's success with early content intelligence
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 sm:space-y-6">
            {proactiveStrategy.map((phase, index) => (
              <div key={index} className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground">{phase.phase}</h3>
                  <div className="flex items-center space-x-2">
                    <Badge
                      variant={
                        phase.priority === "Critical"
                          ? "destructive"
                          : phase.priority === "Preparation"
                            ? "default"
                            : "secondary"
                      }
                      className={phase.priority === "Preparation" ? "bg-primary text-primary-foreground" : ""}
                    >
                      {phase.priority}
                    </Badge>
                    <Badge variant="outline">{phase.timeline}</Badge>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  {phase.actions.map((action, actionIndex) => (
                    <div key={actionIndex} className="flex items-start space-x-2 p-3 bg-muted/30 rounded-lg">
                      <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-foreground">{action}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Mavin Records Application */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center space-x-2 text-lg sm:text-xl">
            <Zap className="h-5 w-5 text-primary flex-shrink-0" />
            <span>Current Mavin Opportunities</span>
          </CardTitle>
          <CardDescription className="text-sm sm:text-base">
            Applying Mike Ejeagha insights to Rema, Ayra Starr, and our roster
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {mavinApplication.map((opportunity, index) => (
              <Card key={index} className="border-l-4 border-l-accent">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm sm:text-base">{opportunity.opportunity}</CardTitle>
                  <Badge variant="outline" className="w-fit text-xs">
                    {opportunity.timeline}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4">
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{opportunity.description}</p>
                  <div className="space-y-2">
                    <h4 className="text-xs sm:text-sm font-medium text-foreground">Strategy:</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">{opportunity.strategy}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xs sm:text-sm font-medium text-foreground">Expected Impact:</h4>
                    <p className="text-xs sm:text-sm font-semibold text-accent">{opportunity.expectedImpact}</p>
                  </div>
                  <Button size="sm" variant="outline" className="w-full bg-transparent text-xs sm:text-sm">
                    Implement Strategy
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Key Learnings */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center space-x-2 text-lg sm:text-xl">
            <Lightbulb className="h-5 w-5 text-primary flex-shrink-0" />
            <span>Strategic Takeaways</span>
          </CardTitle>
          <CardDescription className="text-sm sm:text-base">
            Critical insights for leveraging viral content moments for catalog revival
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-foreground">Content Intelligence Systems</h3>
              <div className="space-y-3">
                {[
                  "Monitor Nigerian comedy and entertainment creators systematically",
                  "Track organic usage of classic catalog in viral content",
                  "Analyze cross-generational music consumption patterns",
                  "Build relationships with top content creators and comedians",
                ].map((insight, index) => (
                  <div key={index} className="flex items-start space-x-2 p-2 bg-primary/5 rounded-lg">
                    <Globe className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-foreground">{insight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-foreground">Rapid Response Capabilities</h3>
              <div className="space-y-3">
                {[
                  "24-hour catalog remastering and distribution pipeline",
                  "Streaming platform playlist placement coordination",
                  "Creator collaboration and licensing frameworks",
                  "Cross-platform viral amplification strategies",
                ].map((capability, index) => (
                  <div key={index} className="flex items-start space-x-2 p-2 bg-accent/5 rounded-lg">
                    <Zap className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-foreground">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
