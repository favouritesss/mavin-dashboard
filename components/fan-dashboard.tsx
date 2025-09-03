"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts"
import {
  TrendingUp,
  Users,
  Globe,
  Music,
  MapPin,
  Target,
  Zap,
  Eye,
  Heart,
  Bell,
  Filter,
  ChevronRight,
  Smartphone,
  Monitor,
} from "lucide-react"
import { useState } from "react"

const artistData = {
  rema: {
    name: "Rema",
    totalFans: "35.1M",
    monthlyGrowth: "2.8M",
    activeMarkets: 47,
    engagementRate: "2.51%",
    metrics: {
      totalFansChange: "+18.5%",
      monthlyGrowthChange: "+22.3%",
      activeMarketsChange: "+3",
      engagementRateChange: "+0.3%",
    },
  },
  ayrastarr: {
    name: "Ayra Starr",
    totalFans: "28.4M",
    monthlyGrowth: "3.2M",
    activeMarkets: 42,
    engagementRate: "3.8%",
    metrics: {
      totalFansChange: "+24.7%",
      monthlyGrowthChange: "+31.2%",
      activeMarketsChange: "+5",
      engagementRateChange: "+0.7%",
    },
  },
  crayon: {
    name: "Crayon",
    totalFans: "12.8M",
    monthlyGrowth: "1.1M",
    activeMarkets: 28,
    engagementRate: "4.2%",
    metrics: {
      totalFansChange: "+42.1%",
      monthlyGrowthChange: "+38.9%",
      activeMarketsChange: "+8",
      engagementRateChange: "+1.2%",
    },
  },
}

const realTimeAlerts = [
  {
    type: "Trending",
    message: "TikTok sound usage up 35% in South Africa - last 24 hours",
    artist: "Ayra Starr",
    priority: "High",
    time: "2 min ago",
  },
  {
    type: "Opportunity",
    message: "YouTube watch time surged in France - week-over-week",
    artist: "Rema",
    priority: "Medium",
    time: "15 min ago",
  },
  {
    type: "Alert",
    message: "Spotify playlist adds declining in UK market",
    artist: "Crayon",
    priority: "Critical",
    time: "1 hour ago",
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
  const [selectedArtist, setSelectedArtist] = useState<keyof typeof artistData>("rema")
  const [openDialog, setOpenDialog] = useState<string | null>(null)
  const currentArtist = artistData[selectedArtist]

  const demographicData = {
    age: [
      { group: "Gen Z (16-24)", percentage: 45, count: "15.8M" },
      { group: "Millennials (25-34)", percentage: 32, count: "11.2M" },
      { group: "Gen X (35-44)", percentage: 15, count: "5.3M" },
      { group: "Others (45+)", percentage: 8, count: "2.8M" },
    ],
    gender: [
      { type: "Female", percentage: 58, count: "20.4M" },
      { type: "Male", percentage: 40, count: "14.0M" },
      { type: "Non-binary", percentage: 2, count: "0.7M" },
    ],
    devices: [
      { device: "Mobile", percentage: 72, users: "25.3M" },
      { device: "Desktop", percentage: 18, users: "6.3M" },
      { device: "Tablet", percentage: 7, users: "2.5M" },
      { device: "Smart TV", percentage: 3, users: "1.0M" },
    ],
  }

  const detailedGeographicData = [
    {
      country: "Nigeria",
      fans: 850000,
      growth: 15.2,
      opportunity: "High",
      cities: ["Lagos", "Abuja", "Port Harcourt"],
      revenue: "$45K",
    },
    {
      country: "Ghana",
      fans: 320000,
      growth: 22.1,
      opportunity: "High",
      cities: ["Accra", "Kumasi", "Tamale"],
      revenue: "$18K",
    },
    {
      country: "UK",
      fans: 280000,
      growth: 8.7,
      opportunity: "Medium",
      cities: ["London", "Manchester", "Birmingham"],
      revenue: "$32K",
    },
    {
      country: "US",
      fans: 240000,
      growth: 12.3,
      opportunity: "High",
      cities: ["New York", "Los Angeles", "Atlanta"],
      revenue: "$28K",
    },
    {
      country: "South Africa",
      fans: 190000,
      growth: 18.9,
      opportunity: "High",
      cities: ["Johannesburg", "Cape Town", "Durban"],
      revenue: "$22K",
    },
    {
      country: "France",
      fans: 150000,
      growth: 25.4,
      opportunity: "Very High",
      cities: ["Paris", "Lyon", "Marseille"],
      revenue: "$15K",
    },
    {
      country: "Canada",
      fans: 120000,
      growth: 14.8,
      opportunity: "Medium",
      cities: ["Toronto", "Montreal", "Vancouver"],
      revenue: "$14K",
    },
    {
      country: "Germany",
      fans: 95000,
      growth: 31.2,
      opportunity: "Very High",
      cities: ["Berlin", "Munich", "Hamburg"],
      revenue: "$12K",
    },
  ]

  const detailedCampaignData = [
    {
      name: "Calm Down Remix Campaign",
      budget: "$75K",
      spent: "$68K",
      reach: "12.5M",
      engagement: "890K",
      streams: "4.2M",
      roi: "320%",
      platforms: ["TikTok", "Instagram", "YouTube"],
      status: "Active",
    },
    {
      name: "UK Radio Push",
      budget: "$45K",
      spent: "$45K",
      reach: "3.2M",
      engagement: "245K",
      streams: "1.8M",
      roi: "180%",
      platforms: ["Radio", "Spotify", "Apple Music"],
      status: "Completed",
    },
    {
      name: "French Market Entry",
      budget: "$30K",
      spent: "$22K",
      reach: "2.1M",
      engagement: "156K",
      streams: "950K",
      roi: "145%",
      platforms: ["TikTok", "YouTube", "Deezer"],
      status: "Active",
    },
  ]

  const dashboardMetrics = [
    {
      title: "Total Fans",
      value: currentArtist.totalFans,
      change: currentArtist.metrics.totalFansChange,
      trend: "up",
      icon: Users,
      description: "Global fanbase across all platforms",
      dialogKey: "demographics",
    },
    {
      title: "Monthly Growth",
      value: currentArtist.monthlyGrowth,
      change: currentArtist.metrics.monthlyGrowthChange,
      trend: "up",
      icon: TrendingUp,
      description: "New fans acquired this month",
      dialogKey: "growth",
    },
    {
      title: "Active Markets",
      value: currentArtist.activeMarkets.toString(),
      change: currentArtist.metrics.activeMarketsChange,
      trend: "up",
      icon: Globe,
      description: "Countries with significant fan presence",
      dialogKey: "markets",
    },
    {
      title: "Engagement Rate",
      value: currentArtist.engagementRate,
      change: currentArtist.metrics.engagementRateChange,
      trend: "up",
      icon: Music,
      description: "Average engagement across platforms",
      dialogKey: "engagement",
    },
  ]

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

  const COLORS = ["#10b981", "#3b82f6", "#f59e0b", "#ef4444", "#8b5cf6"]

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Global Fan Growth Dashboard</h1>
            <p className="text-base sm:text-lg text-muted-foreground">
              Comprehensive fan analytics platform for any artist's team worldwide
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Select value={selectedArtist} onValueChange={(value: keyof typeof artistData) => setSelectedArtist(value)}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Select Artist" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rema">Rema</SelectItem>
                <SelectItem value="ayrastarr">Ayra Starr</SelectItem>
                <SelectItem value="crayon">Crayon</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="28days">
              <SelectTrigger className="w-full sm:w-[140px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Last 7 days</SelectItem>
                <SelectItem value="28days">Last 28 days</SelectItem>
                <SelectItem value="custom">Custom</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Real-Time Alerts */}
        <Card className="border-l-4 border-l-primary">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
              <Bell className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <span>Real-Time Alerts</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {realTimeAlerts.map((alert, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Badge
                      variant={
                        alert.priority === "Critical"
                          ? "destructive"
                          : alert.priority === "High"
                            ? "default"
                            : "secondary"
                      }
                      className="text-xs"
                    >
                      {alert.type}
                    </Badge>
                    <div>
                      <p className="text-sm font-medium text-foreground">{alert.message}</p>
                      <p className="text-xs text-muted-foreground">
                        {alert.artist} • {alert.time}
                      </p>
                    </div>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" variant="outline" className="text-xs bg-transparent">
                        View Details <ChevronRight className="h-3 w-3 ml-1" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle className="flex items-center space-x-2">
                          <Bell className="h-4 w-4" />
                          <span>Alert Details</span>
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="p-4 bg-muted/50 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant={alert.priority === "Critical" ? "destructive" : "default"}>
                              {alert.priority} Priority
                            </Badge>
                            <span className="text-xs text-muted-foreground">{alert.time}</span>
                          </div>
                          <h4 className="font-medium mb-2">{alert.message}</h4>
                          <p className="text-sm text-muted-foreground">Artist: {alert.artist}</p>
                        </div>
                        <div className="space-y-2">
                          <h5 className="font-medium">Recommended Actions:</h5>
                          <ul className="text-sm space-y-1 text-muted-foreground">
                            <li>• Activate influencer partnerships in target region</li>
                            <li>• Increase ad spend by 25% in high-performing markets</li>
                            <li>• Schedule content posts during peak engagement hours</li>
                          </ul>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {dashboardMetrics.map((metric) => {
          const Icon = metric.icon
          return (
            <Card
              key={metric.title}
              className="relative overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            >
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
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm" variant="ghost" className="w-full text-xs mt-2 h-6">
                      View Details <ChevronRight className="h-3 w-3 ml-1" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="flex items-center space-x-2">
                        <Icon className="h-5 w-5" />
                        <span>{metric.title} - Detailed Analysis</span>
                      </DialogTitle>
                    </DialogHeader>
                    {metric.dialogKey === "demographics" && (
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-medium mb-3">Age Demographics</h4>
                            <ResponsiveContainer width="100%" height={200}>
                              <PieChart>
                                <Pie
                                  data={demographicData.age}
                                  cx="50%"
                                  cy="50%"
                                  outerRadius={60}
                                  fill="#8884d8"
                                  dataKey="percentage"
                                  label={({ group, percentage }) => `${group}: ${percentage}%`}
                                >
                                  {demographicData.age.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                  ))}
                                </Pie>
                                <Tooltip />
                              </PieChart>
                            </ResponsiveContainer>
                          </div>
                          <div>
                            <h4 className="font-medium mb-3">Device Usage</h4>
                            <div className="space-y-3">
                              {demographicData.devices.map((device, index) => (
                                <div key={device.device} className="flex items-center justify-between">
                                  <div className="flex items-center space-x-2">
                                    {device.device === "Mobile" && <Smartphone className="h-4 w-4" />}
                                    {device.device === "Desktop" && <Monitor className="h-4 w-4" />}
                                    {device.device === "Tablet" && <Monitor className="h-4 w-4" />}
                                    {device.device === "Smart TV" && <Monitor className="h-4 w-4" />}
                                    <span className="text-sm">{device.device}</span>
                                  </div>
                                  <div className="text-right">
                                    <div className="text-sm font-medium">{device.percentage}%</div>
                                    <div className="text-xs text-muted-foreground">{device.users}</div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {metric.dialogKey === "markets" && (
                      <div className="space-y-4">
                        <h4 className="font-medium">Detailed Market Analysis</h4>
                        <div className="space-y-3">
                          {detailedGeographicData.map((country, index) => (
                            <div key={country.country} className="p-4 border rounded-lg">
                              <div className="flex items-center justify-between mb-2">
                                <h5 className="font-medium">{country.country}</h5>
                                <Badge variant={country.opportunity === "Very High" ? "default" : "secondary"}>
                                  {country.opportunity}
                                </Badge>
                              </div>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                <div>
                                  <span className="text-muted-foreground">Fans:</span>
                                  <div className="font-medium">{country.fans.toLocaleString()}</div>
                                </div>
                                <div>
                                  <span className="text-muted-foreground">Growth:</span>
                                  <div className="font-medium text-green-600">+{country.growth}%</div>
                                </div>
                                <div>
                                  <span className="text-muted-foreground">Revenue:</span>
                                  <div className="font-medium">{country.revenue}</div>
                                </div>
                                <div>
                                  <span className="text-muted-foreground">Top Cities:</span>
                                  <div className="font-medium">{country.cities.join(", ")}</div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
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
              <span>Geographic Fan Distribution - {currentArtist.name}</span>
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
            <div className="mt-4 p-3 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-sm font-medium text-primary">💡 Smart Recommendation</p>
              <p className="text-xs text-muted-foreground mt-1">
                France shows 25.4% growth - consider targeted playlist pitches and influencer partnerships in French
                market
              </p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full mt-4 text-sm bg-transparent">
                  View All Markets <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Complete Geographic Analysis - {currentArtist.name}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={detailedGeographicData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="country" />
                      <YAxis />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar dataKey="fans" fill="var(--color-primary)" />
                    </BarChart>
                  </ResponsiveContainer>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {detailedGeographicData.map((country) => (
                      <div key={country.country} className="p-3 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">{country.country}</h4>
                          <Badge variant={country.opportunity === "Very High" ? "default" : "secondary"}>
                            {country.opportunity}
                          </Badge>
                        </div>
                        <div className="text-sm space-y-1">
                          <div className="flex justify-between">
                            <span>Fans:</span>
                            <span className="font-medium">{country.fans.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Growth:</span>
                            <span className="font-medium text-green-600">+{country.growth}%</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Revenue:</span>
                            <span className="font-medium">{country.revenue}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        {/* Social Media Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
              <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <span>Social Media Intelligence - {currentArtist.name}</span>
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
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
                <Target className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                <span>Campaign Performance Tracking</span>
              </CardTitle>
              <CardDescription className="text-sm">Real-time campaign metrics and ROI analysis</CardDescription>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  View Campaigns <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Active Campaign Details</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  {detailedCampaignData.map((campaign, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium">{campaign.name}</h4>
                        <Badge variant={campaign.status === "Active" ? "default" : "secondary"}>
                          {campaign.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Budget:</span>
                          <div className="font-medium">{campaign.budget}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Spent:</span>
                          <div className="font-medium">{campaign.spent}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Reach:</span>
                          <div className="font-medium">{campaign.reach}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">ROI:</span>
                          <div className="font-medium text-green-600">{campaign.roi}</div>
                        </div>
                      </div>
                      <div className="mt-3">
                        <span className="text-muted-foreground text-sm">Platforms: </span>
                        <div className="flex gap-2 mt-1">
                          {campaign.platforms.map((platform) => (
                            <Badge key={platform} variant="outline" className="text-xs">
                              {platform}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>
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
            <span>AI-Powered Strategic Insights - {currentArtist.name}</span>
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
          <CardTitle className="text-base sm:text-lg">Multi-Artist Dashboard Features</CardTitle>
          <CardDescription className="text-sm">
            Scalable toolset for any artist team's decision-making process
          </CardDescription>
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
