"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { TrendingUp, Globe, Music, Users, PlayCircle, Heart } from "lucide-react"

const spotifyData = [
  { country: "Nigeria", streams: 2400000, growth: 15.2 },
  { country: "Ghana", streams: 890000, growth: 22.1 },
  { country: "UK", streams: 1200000, growth: 8.7 },
  { country: "US", streams: 950000, growth: 12.3 },
  { country: "South Africa", streams: 670000, growth: 18.9 },
  { country: "France", streams: 420000, growth: 25.4 },
]

const youtubeData = [
  { month: "Jan", watchTime: 1200, retention: 68 },
  { month: "Feb", watchTime: 1450, retention: 72 },
  { month: "Mar", watchTime: 1680, retention: 75 },
  { month: "Apr", watchTime: 1920, retention: 78 },
  { month: "May", watchTime: 2150, retention: 81 },
  { month: "Jun", watchTime: 2380, retention: 84 },
]

const tiktokData = [
  { name: "Calm Down", value: 45, color: "var(--color-chart-1)" },
  { name: "Rush", value: 28, color: "var(--color-chart-2)" },
  { name: "Sability", value: 18, color: "var(--color-chart-3)" },
  { name: "Other", value: 9, color: "var(--color-chart-4)" },
]

const platformMetrics = [
  {
    platform: "Spotify",
    icon: Music,
    totalStreams: "20.8M",
    growth: "-14.4%",
    topMarket: "Nigeria",
    engagement: 87,
  },
  {
    platform: "YouTube",
    icon: PlayCircle,
    totalViews: "12.3M",
    growth: "+22.1%",
    topMarket: "UK",
    engagement: 84,
  },
  {
    platform: "TikTok",
    icon: Heart,
    totalUses: "7.2M",
    growth: "+156%",
    topMarket: "US",
    engagement: 92,
  },
]

export function PlatformAnalytics() {
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
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Platform Analytics Strategy</h1>
        <p className="text-base sm:text-lg text-muted-foreground">How we use data to drive Rema's global success</p>
      </div>

      {/* Platform Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {platformMetrics.map((platform) => {
          const Icon = platform.icon
          return (
            <Card key={platform.platform} className="relative overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    </div>
                    <CardTitle className="text-base sm:text-lg">{platform.platform}</CardTitle>
                  </div>
                  <Badge variant="secondary" className="bg-accent/10 text-accent text-xs sm:text-sm">
                    {platform.growth}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-muted-foreground">Total Performance</span>
                    <span className="text-lg sm:text-2xl font-bold text-foreground">
                      {platform.totalStreams || platform.totalViews || platform.totalUses}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-muted-foreground">Top Market</span>
                    <span className="text-xs sm:text-sm font-medium text-foreground">{platform.topMarket}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-muted-foreground">Engagement Rate</span>
                    <span className="text-xs sm:text-sm font-medium text-foreground">{platform.engagement}%</span>
                  </div>
                  <Progress value={platform.engagement} className="h-2" />
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Spotify Geographic Performance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-lg sm:text-xl">
            <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            <span>Spotify Geographic Performance</span>
          </CardTitle>
          <CardDescription className="text-sm">
            Stream counts and growth rates by market for "Calm Down"
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250} className="sm:h-[300px]">
            <BarChart data={spotifyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis
                dataKey="country"
                stroke="var(--color-muted-foreground)"
                fontSize={12}
                angle={-45}
                textAnchor="end"
                height={60}
              />
              <YAxis stroke="var(--color-muted-foreground)" fontSize={12} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="streams" fill="var(--color-primary)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* YouTube Analytics */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-lg sm:text-xl">
              <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <span>YouTube Watch Time Growth</span>
            </CardTitle>
            <CardDescription className="text-sm">Monthly watch time progression (hours)</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200} className="sm:h-[250px]">
              <LineChart data={youtubeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="month" stroke="var(--color-muted-foreground)" fontSize={12} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={12} />
                <Tooltip content={<CustomTooltip />} />
                <Line type="monotone" dataKey="watchTime" stroke="var(--color-primary)" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-lg sm:text-xl">
              <Users className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <span>TikTok Sound Usage</span>
            </CardTitle>
            <CardDescription className="text-sm">Distribution of Rema tracks on TikTok</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200} className="sm:h-[250px]">
              <PieChart>
                <Pie
                  data={tiktokData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {tiktokData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
              {tiktokData.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-xs sm:text-sm text-muted-foreground">
                    {item.name}: {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Strategy Framework */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">Global Release Strategy Framework</CardTitle>
          <CardDescription className="text-sm">
            Data-driven market prioritization for Rema's next release
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-foreground">Primary Markets (Week 1)</h3>
              <div className="space-y-3">
                {[
                  { market: "Nigeria, Ghana, South Africa", reason: "Home base + regional strength" },
                  { market: "UK, US", reason: "Diaspora + crossover potential" },
                  { market: "France", reason: "25.4% growth rate" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
                    <Badge variant="outline" className="mt-0.5 text-xs">
                      {index + 1}
                    </Badge>
                    <div>
                      <p className="font-medium text-foreground text-sm sm:text-base">{item.market}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{item.reason}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-foreground">Timing Strategy</h3>
              <div className="space-y-3">
                {[
                  { time: "Thursday 12 AM", platform: "Spotify", reason: "Optimal playlist consideration" },
                  { time: "Friday 6 PM EST", platform: "TikTok", reason: "Peak engagement window" },
                  { time: "1 Week Prior", platform: "All Platforms", reason: "Playlist curator outreach" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-primary/5 rounded-lg">
                    <Badge variant="secondary" className="mt-0.5 bg-primary/10 text-primary text-xs">
                      {item.platform}
                    </Badge>
                    <div>
                      <p className="font-medium text-foreground text-sm sm:text-base">{item.time}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{item.reason}</p>
                    </div>
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
