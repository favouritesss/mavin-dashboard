"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts"
import { TrendingUp, Users, Globe, Music, MapPin, Target, Zap, Eye, Heart } from "lucide-react"

const dashboardMetrics = [
  {
    title: "Total Fans",
    value: "2.4M",
    change: "+12.5%",
    trend: "up",
    icon: Users,
    description: "Global fanbase across all platforms",
  },
  {
    title: "Monthly Growth",
    value: "156K",
    change: "+8.2%",
    trend: "up",
    icon: TrendingUp,
    description: "New fans acquired this month",
  },
  {
    title: "Active Markets",
    value: "47",
    change: "+3",
    trend: "up",
    icon: Globe,
    description: "Countries with significant fan presence",
  },
  {
    title: "Engagement Rate",
    value: "4.8%",
    change: "+0.3%",
    trend: "up",
    icon: Music,
    description: "Average engagement across platforms",
  },
]

const geographicData = [
  { country: "Nigeria", fans: 850000, growth: 15.2, opportunity: "High" },
  { country: "Ghana", fans: 320000, growth: 22.1, opportunity: "High" },
  { country: "UK", fans: 280000, growth: 8.7, opportunity: "Medium" },
  { country: "US", fans: 240000, growth: 12.3, opportunity: "High" },
  { country: "South Africa", fans: 190000, growth: 18.9, opportunity: "High" },
  { country: "France", fans: 150000, growth: 25.4, opportunity: "Very High" },
]

const socialMediaData = [
  { platform: "Instagram", followers: "1.2M", engagement: 4.8, growth: "+15%" },
  { platform: "TikTok", followers: "890K", engagement: 8.2, growth: "+156%" },
  { platform: "Twitter", followers: "450K", engagement: 3.1, growth: "+8%" },
  { platform: "YouTube", followers: "320K", engagement: 6.4, growth: "+22%" },
]

const campaignData = [
  { month: "Jan", reach: 1200000, engagement: 58000, conversion: 2.4 },
  { month: "Feb", reach: 1450000, engagement: 72000, conversion: 2.8 },
  { month: "Mar", reach: 1680000, engagement: 89000, conversion: 3.2 },
  { month: "Apr", reach: 1920000, engagement: 105000, conversion: 3.6 },
  { month: "May", reach: 2150000, engagement: 124000, conversion: 4.1 },
  { month: "Jun", reach: 2380000, engagement: 142000, conversion: 4.8 },
]

const aiInsights = [
  {
    type: "Opportunity",
    title: "France Market Expansion",
    description: "25.4% growth rate indicates strong potential for targeted campaigns",
    priority: "High",
    action: "Launch French-language content strategy",
  },
  {
    type: "Alert",
    title: "TikTok Momentum",
    description: "156% growth suggests viral potential - capitalize immediately",
    priority: "Critical",
    action: "Increase TikTok content frequency by 3x",
  },
  {
    type: "Trend",
    title: "Afrobeats Global Rise",
    description: "Genre trending +340% in non-African markets",
    priority: "Medium",
    action: "Position Rema as Afrobeats ambassador",
  },
]

export function FanDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Fan Intelligence Dashboard</h1>
        <p className="text-lg text-muted-foreground">Comprehensive fan analytics platform for Rema's team</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardMetrics.map((metric) => {
          const Icon = metric.icon
          return (
            <Card key={metric.title} className="relative overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">{metric.title}</CardTitle>
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-2xl font-bold text-foreground">{metric.value}</div>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary" className="bg-accent/10 text-accent">
                    {metric.change}
                  </Badge>
                  <span className="text-xs text-muted-foreground">from last month</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{metric.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Dashboard Features Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Geographic Fan Mapping */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Geographic Fan Distribution</span>
            </CardTitle>
            <CardDescription>Fan concentration and growth opportunities by market</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {geographicData.slice(0, 4).map((country, index) => (
                <div key={country.country} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="w-8 h-8 rounded-full flex items-center justify-center">
                      {index + 1}
                    </Badge>
                    <div>
                      <p className="font-medium text-foreground">{country.country}</p>
                      <p className="text-sm text-muted-foreground">{country.fans.toLocaleString()} fans</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge
                      variant={country.opportunity === "Very High" ? "default" : "secondary"}
                      className={country.opportunity === "Very High" ? "bg-primary text-primary-foreground" : ""}
                    >
                      {country.opportunity}
                    </Badge>
                    <p className="text-sm text-accent mt-1">+{country.growth}%</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Social Media Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Heart className="h-5 w-5 text-primary" />
              <span>Social Media Intelligence</span>
            </CardTitle>
            <CardDescription>Cross-platform engagement and growth tracking</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {socialMediaData.map((platform) => (
                <div key={platform.platform} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-foreground">{platform.platform}</span>
                      <Badge variant="outline">{platform.followers}</Badge>
                    </div>
                    <Badge variant="secondary" className="bg-accent/10 text-accent">
                      {platform.growth}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Engagement Rate</span>
                    <span className="font-medium text-foreground">{platform.engagement}%</span>
                  </div>
                  <Progress value={platform.engagement * 10} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Campaign Performance Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="h-5 w-5 text-primary" />
            <span>Campaign Performance Tracking</span>
          </CardTitle>
          <CardDescription>Real-time campaign metrics and ROI analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={campaignData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="month" stroke="var(--color-muted-foreground)" />
              <YAxis stroke="var(--color-muted-foreground)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                }}
              />
              <Area
                type="monotone"
                dataKey="reach"
                stackId="1"
                stroke="var(--color-primary)"
                fill="var(--color-primary)"
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="engagement"
                stackId="2"
                stroke="var(--color-secondary)"
                fill="var(--color-secondary)"
                fillOpacity={0.6}
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* AI-Powered Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="h-5 w-5 text-primary" />
            <span>AI-Powered Strategic Insights</span>
          </CardTitle>
          <CardDescription>Automated recommendations based on fan behavior analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {aiInsights.map((insight, index) => (
              <div key={index} className="p-4 border border-border rounded-lg space-y-3">
                <div className="flex items-center justify-between">
                  <Badge
                    variant={
                      insight.priority === "Critical"
                        ? "destructive"
                        : insight.priority === "High"
                          ? "default"
                          : "secondary"
                    }
                    className={insight.priority === "High" ? "bg-primary text-primary-foreground" : ""}
                  >
                    {insight.type}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {insight.priority}
                  </Badge>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">{insight.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{insight.description}</p>
                </div>
                <Button size="sm" variant="outline" className="w-full text-xs bg-transparent">
                  {insight.action}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Dashboard Features Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Dashboard Core Features</CardTitle>
          <CardDescription>Comprehensive toolset for artist team decision-making</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Real-Time Analytics</h3>
              <div className="space-y-3">
                {[
                  { feature: "Cross-platform fan tracking", icon: Users },
                  { feature: "Geographic heat mapping", icon: Globe },
                  { feature: "Engagement rate monitoring", icon: Heart },
                  { feature: "Campaign ROI analysis", icon: Target },
                ].map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={index} className="flex items-center space-x-3 p-2 bg-muted/30 rounded-lg">
                      <Icon className="h-4 w-4 text-primary" />
                      <span className="text-sm text-foreground">{item.feature}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Strategic Intelligence</h3>
              <div className="space-y-3">
                {[
                  { feature: "AI-powered market insights", icon: Zap },
                  { feature: "Trend prediction algorithms", icon: TrendingUp },
                  { feature: "Competitor benchmarking", icon: Eye },
                  { feature: "Tour routing optimization", icon: MapPin },
                ].map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={index} className="flex items-center space-x-3 p-2 bg-primary/5 rounded-lg">
                      <Icon className="h-4 w-4 text-primary" />
                      <span className="text-sm text-foreground">{item.feature}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
