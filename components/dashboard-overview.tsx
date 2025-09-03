import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Users, Globe, Music } from "lucide-react"

const metrics = [
  {
    title: "Total Fans",
    value: "2.4M",
    change: "+12.5%",
    trend: "up",
    icon: Users,
  },
  {
    title: "Monthly Growth",
    value: "156K",
    change: "+8.2%",
    trend: "up",
    icon: TrendingUp,
  },
  {
    title: "Active Markets",
    value: "47",
    change: "+3",
    trend: "up",
    icon: Globe,
  },
  {
    title: "Engagement Rate",
    value: "4.8%",
    change: "+0.3%",
    trend: "up",
    icon: Music,
  },
]

export function DashboardOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric) => (
        <Card key={metric.title} className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-card-foreground">{metric.title}</CardTitle>
            <metric.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">{metric.value}</div>
            <p className="text-xs text-primary flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              {metric.change} from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
