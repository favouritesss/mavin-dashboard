"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { TrendingUp, AlertTriangle, Target, Lightbulb, Clock, Zap, Music, Globe } from "lucide-react"

const ckayData = [
  { day: "Aug 1", streams: 45000, searches: 8000, social: 12000 },
  { day: "Aug 15", streams: 52000, searches: 9500, social: 15000 },
  { day: "Sep 1", streams: 180000, searches: 35000, social: 85000 }, // TikTok dance challenge starts
  { day: "Sep 15", streams: 650000, searches: 120000, social: 280000 },
  { day: "Oct 1", streams: 1200000, searches: 250000, social: 450000 },
  { day: "Oct 15", streams: 2100000, searches: 380000, social: 680000 },
]

const dataSignals = [
  {
    signal: "TikTok Dance Challenge Creation",
    timing: "2 weeks before peak",
    strength: 92,
    actionable: true,
    description: "Organic dance challenges emerging from African creators",
  },
  {
    signal: "Cross-Platform Migration",
    timing: "1 week before peak",
    strength: 88,
    actionable: true,
    description: "Content spreading from TikTok to Instagram Reels and YouTube Shorts",
  },
  {
    signal: "International Creator Adoption",
    timing: "3 days before peak",
    strength: 95,
    actionable: true,
    description: "US and European influencers picking up the dance trend",
  },
  {
    signal: "Playlist Algorithm Boost",
    timing: "24 hours before peak",
    strength: 85,
    actionable: false,
    description: "Spotify and Apple Music algorithms detecting viral momentum",
  },
]

const proactiveStrategy = [
  {
    phase: "Pre-Intelligence (3-6 months ahead)",
    actions: [
      "Monitor African creator communities for emerging trends",
      "Build relationships with top Afrobeats dancers and choreographers",
      "Track cross-cultural music adoption patterns",
      "Analyze successful Afrobeats viral moments for patterns",
    ],
    timeline: "Ongoing",
    priority: "Foundation",
  },
  {
    phase: "Early Detection (2-4 weeks ahead)",
    actions: [
      "TikTok sound usage analytics monitoring",
      "African diaspora community engagement tracking",
      "Dance challenge potential assessment",
      "Prepare creator collaboration packages",
    ],
    timeline: "2-4 weeks",
    priority: "Preparation",
  },
  {
    phase: "Rapid Response (24-72 hours)",
    actions: [
      "Amplify organic dance challenges with paid promotion",
      "Deploy international creator outreach campaigns",
      "Coordinate cross-platform content distribution",
      "Launch targeted streaming platform features",
    ],
    timeline: "24-72 hours",
    priority: "Critical",
  },
]

const mavinApplication = [
  {
    opportunity: "Rema TikTok Optimization",
    description: "Leverage Rema's existing global fanbase for viral TikTok moments",
    strategy: "Create dance-friendly versions of 'Calm Down' and collaborate with top choreographers",
    expectedImpact: "500% streaming increase in emerging markets",
    timeline: "Q1 2024",
  },
  {
    opportunity: "Ayra Starr Dance Challenges",
    description: "Position Ayra Starr tracks for organic dance challenge creation",
    strategy: "Partner with African dance creators and provide exclusive content",
    expectedImpact: "Cross-cultural breakthrough in US and European markets",
    timeline: "Q2 2024",
  },
  {
    opportunity: "Afrobeats Algorithm Mastery",
    description: "TikTok algorithm currently favoring Afrobeats and African creators",
    strategy: "Systematic creator seeding program across African diaspora communities",
    expectedImpact: "Viral moment potential worth $5M+ in global streaming revenue",
    timeline: "Immediate",
  },
]

export function CaseStudyAnalysis() {
  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8 px-2 sm:px-4 lg:px-0">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Data-Driven Success Story</h1>
        <p className="text-base sm:text-lg text-muted-foreground">
          How TikTok data could have accelerated CKay's Love Nwantiti breakthrough
        </p>
      </div>

      {/* Case Study Overview */}
      <Card className="border-l-4 border-l-primary">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center space-x-2 text-lg sm:text-xl">
            <Music className="h-5 w-5 text-primary flex-shrink-0" />
            <span>The CKay Love Nwantiti Phenomenon</span>
          </CardTitle>
          <CardDescription className="text-sm sm:text-base">
            From 2019 release to global TikTok sensation in 2021
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <div className="text-center p-3 sm:p-4 bg-primary/5 rounded-lg">
              <div className="text-xl sm:text-2xl font-bold text-primary">4,600%</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Stream increase during viral peak</div>
            </div>
            <div className="text-center p-3 sm:p-4 bg-accent/5 rounded-lg">
              <div className="text-xl sm:text-2xl font-bold text-accent">#1</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Global viral charts across 15 countries</div>
            </div>
            <div className="text-center p-3 sm:p-4 bg-chart-3/5 rounded-lg">
              <div className="text-xl sm:text-2xl font-bold" style={{ color: "hsl(var(--chart-3))" }}>
                2 years
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">Gap between release and viral moment</div>
            </div>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            CKay's "Love Nwantiti" was released in 2019 but became a global phenomenon in 2021 through organic TikTok
            dance challenges, demonstrating how African artists can achieve massive international success through social
            media virality and cross-cultural adoption.
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
            Stream counts, searches, and social mentions during TikTok breakthrough
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={ckayData}>
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
            Early warning indicators that predicted the TikTok viral moment
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
            <span>Mavin's Proactive TikTok Strategy</span>
          </CardTitle>
          <CardDescription className="text-sm sm:text-base">
            How we'd have accelerated CKay's success with early data insights
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
            Applying CKay insights to Rema, Ayra Starr, and our roster
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
            Critical insights for African artists going global via TikTok
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-foreground">TikTok Intelligence Systems</h3>
              <div className="space-y-3">
                {[
                  "Monitor African creator communities for emerging dance trends",
                  "Track cross-cultural adoption patterns in diaspora markets",
                  "Analyze sound usage analytics across different regions",
                  "Build relationships with top Afrobeats choreographers",
                ].map((insight, index) => (
                  <div key={index} className="flex items-start space-x-2 p-2 bg-primary/5 rounded-lg">
                    <Globe className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-foreground">{insight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-foreground">Viral Amplification Tactics</h3>
              <div className="space-y-3">
                {[
                  "72-hour creator seeding programs for organic challenges",
                  "Cross-platform content distribution strategies",
                  "International influencer collaboration networks",
                  "Algorithm-optimized content format variations",
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
