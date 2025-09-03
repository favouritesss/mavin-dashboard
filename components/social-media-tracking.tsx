import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Users } from "lucide-react"

const platforms = [
  {
    name: "Instagram",
    followers: "3.2M",
    engagement: "7.8%",
    growth: "+25.4%",
    color: "bg-pink-500",
    icon: "📷",
  },
  {
    name: "TikTok",
    followers: "2.1M",
    engagement: "12.3%",
    growth: "+42.7%",
    color: "bg-black",
    icon: "🎵",
  },
  {
    name: "Twitter",
    followers: "1.8M",
    engagement: "4.6%",
    growth: "+19.2%",
    color: "bg-blue-500",
    icon: "🐦",
  },
  {
    name: "YouTube",
    followers: "1.5M",
    engagement: "9.1%",
    growth: "+28.5%",
    color: "bg-red-500",
    icon: "📺",
  },
]

const recentActivity = [
  { type: "Music Video", platform: "YouTube", engagement: "2.3M views", time: "1d ago" },
  { type: "Dance Challenge", platform: "TikTok", engagement: "890K views", time: "3h ago" },
  { type: "Behind Scenes", platform: "Instagram", engagement: "156K likes", time: "6h ago" },
]

export function SocialMediaTracking() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-card-foreground">
          <Users className="h-5 w-5" />
          Social Media Performance
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Platform Overview */}
        <div className="space-y-4">
          {platforms.map((platform) => (
            <div key={platform.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{platform.icon}</span>
                  <span className="font-medium text-card-foreground">{platform.name}</span>
                </div>
                <Badge variant="secondary" className="text-primary">
                  {platform.growth}
                </Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{platform.followers} followers</span>
                <span className="text-muted-foreground">{platform.engagement} engagement</span>
              </div>
              <Progress value={Number.parseFloat(platform.engagement)} className="h-2" />
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div>
          <h3 className="font-semibold mb-3 text-card-foreground">Recent Activity</h3>
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-muted">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <div>
                    <p className="font-medium text-card-foreground">
                      {activity.type} on {activity.platform}
                    </p>
                    <p className="text-sm text-muted-foreground">{activity.engagement}</p>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
