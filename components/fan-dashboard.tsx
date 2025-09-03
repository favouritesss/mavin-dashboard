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
    value: "35.1M",
    change: "+18.5%",
    trend: "up",
    icon: Users,
    description: "Global fanbase across all platforms",
  },
  {
    title: "Monthly Growth",
    value: "2.8M",
    change: "+22.3%",
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
    value: "2.51%",
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
  { platform: "Instagram", followers: "7.1M", engagement: 2.51, growth: "+15%" },
  { platform: "TikTok", followers: "7.2M", engagement: 8.2, growth: "+156%" },
  { platform: "Twitter", followers: "2.8M", engagement: 3.1, growth: "+8%" },
  { platform: "YouTube", followers: "1.2M", engagement: 6.4, growth: "+22%" },
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
    type: "Alert",
    title: "Spotify Listener Decline",
    description: "Lost 14.4M listeners in 2024 - need strategic intervention",
    priority: "Critical",
    action: "Launch retention campaign immediately",
  },
  {
    type: "Opportunity",
    title: "TikTok Momentum Strong",
    description: "7.2M followers with high engagement - capitalize on viral potential",
    priority: "High",
    action: "Increase TikTok content frequency by 3x",
  },
  {
    type: "Trend",
    title: "Instagram Engagement Solid",
    description: "7.1M followers with 2.51% engagement rate above industry average",
    priority: "Medium",
    action: "Maintain current Instagram strategy",
  },
]

export function FanDashboard() {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-black/90 border border-white/20 rounded-lg p-3 shadow-lg">
          <p className="text-white font-medium" style={{ textShadow: "1px 1px 2px black" }}>
            {label}
          </p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-white text-sm" style={{ textShadow: "1px 1px 2px black" }}>
              {`${entry.name}: ${entry.value.toLocaleString()}`}
            </p>
          ))}
        </div>
      )
    }
    return null
  }

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Fan Intelligence Dashboard</h1>
        <p className="text-base sm:text-lg text-muted-foreground">
          Comprehensive fan analytics platform for Rema's team
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {dashboardMetrics.map((metric) => {
          const Icon = metric.icon
          return (
            <Card key={metric.title} className="relative overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">{metric.title}</CardTitle>
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-xl sm:text-2xl font-bold text-foreground">{metric.value}</div>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary" className="bg-accent/10 text-accent text-xs">
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Geographic Fan Mapping */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <span>Geographic Fan Distribution</span>
            </CardTitle>
            <CardDescription className="text-sm">Fan concentration and growth opportunities by market</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 sm:space-y-4">
              {geographicData.slice(0, 4).map((country, index) => (
                <div
                  key={country.country}
                  className="flex items-center justify-between p-2 sm:p-3 bg-muted/50 rounded-lg"
                >
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <Badge
                      variant="outline"
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs"
                    >
                      {index + 1}
                    </Badge>
                    <div>
                      <p className="font-medium text-foreground text-sm sm:text-base">{country.country}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{country.fans.toLocaleString()} fans</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge
                      variant={country.opportunity === "Very High" ? "default" : "secondary"}
                      className={`text-xs ${country.opportunity === "Very High" ? "bg-primary text-primary-foreground" : ""}`}
                    >
                      {country.opportunity}
                    </Badge>
                    <p className="text-xs sm:text-sm text-accent mt-1">+{country.growth}%</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Social Media Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
              <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <span>Social Media Intelligence</span>
            </CardTitle>
            <CardDescription className="text-sm">Cross-platform engagement and growth tracking</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 sm:space-y-4">
              {socialMediaData.map((platform) => (
                <div key={platform.platform} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-foreground text-sm sm:text-base">{platform.platform}</span>
                      <Badge variant="outline" className="text-xs">
                        {platform.followers}
                      </Badge>
                    </div>
                    <Badge variant="secondary" className="bg-accent/10 text-accent text-xs">
                      {platform.growth}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm">
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
          <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
            <Target className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            <span>Campaign Performance Tracking</span>
          </CardTitle>
          <CardDescription className="text-sm">Real-time campaign metrics and ROI analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250} className="sm:h-[300px]">
            <AreaChart data={campaignData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="month" stroke="var(--color-muted-foreground)" fontSize={12} />
              <YAxis stroke="var(--color-muted-foreground)" fontSize={12} />
              <Tooltip content={<CustomTooltip />} />
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
          <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
            <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            <span>AI-Powered Strategic Insights</span>
          </CardTitle>
          <CardDescription className="text-sm">
            Automated recommendations based on fan behavior analysis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {aiInsights.map((insight, index) => (
              <div key={index} className="p-3 sm:p-4 border border-border rounded-lg space-y-3">
                <div className="flex items-center justify-between">
                  <Badge
                    variant={
                      insight.priority === "Critical"
                        ? "destructive"
                        : insight.priority === "High"
                          ? "default"
                          : "secondary"
                    }
                    className={`text-xs ${insight.priority === "High" ? "bg-primary text-primary-foreground" : ""}`}
                  >
                    {insight.type}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {insight.priority}
                  </Badge>
                </div>
                <div>
                  <h4 className="font-medium text-foreground text-sm sm:text-base">{insight.title}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">{insight.description}</p>
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
          <CardTitle className="text-base sm:text-lg">Dashboard Core Features</CardTitle>
          <CardDescription className="text-sm">Comprehensive toolset for artist team decision-making</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-foreground">Real-Time Analytics</h3>
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
                      <Icon className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                      <span className="text-xs sm:text-sm text-foreground">{item.feature}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-foreground">Strategic Intelligence</h3>
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
                      <Icon className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                      <span className="text-xs sm:text-sm text-foreground">{item.feature}</span>
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
