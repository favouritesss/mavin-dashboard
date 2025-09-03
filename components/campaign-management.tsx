import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Target, Calendar, DollarSign, Users } from "lucide-react"

const activeCampaigns = [
  {
    name: "New Album Pre-Release",
    status: "Active",
    budget: "$50K",
    spent: "$32K",
    reach: "1.2M",
    engagement: "4.8%",
    progress: 64,
    endDate: "Dec 15, 2024",
  },
  {
    name: "Holiday Tour Promotion",
    status: "Planning",
    budget: "$75K",
    spent: "$0",
    reach: "0",
    engagement: "0%",
    progress: 0,
    endDate: "Jan 30, 2025",
  },
  {
    name: "Social Media Boost",
    status: "Active",
    budget: "$25K",
    spent: "$18K",
    reach: "850K",
    engagement: "6.2%",
    progress: 72,
    endDate: "Nov 30, 2024",
  },
]

export function CampaignManagement() {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2 text-card-foreground">
          <Target className="h-5 w-5" />
          Campaign Management
        </CardTitle>
        <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
          New Campaign
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {activeCampaigns.map((campaign) => (
            <div key={campaign.name} className="p-4 rounded-lg border border-border bg-muted/50">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-card-foreground">{campaign.name}</h3>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {campaign.endDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      {campaign.spent} / {campaign.budget}
                    </span>
                  </div>
                </div>
                <Badge
                  variant={campaign.status === "Active" ? "default" : "secondary"}
                  className={campaign.status === "Active" ? "bg-primary text-primary-foreground" : ""}
                >
                  {campaign.status}
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="text-center p-3 rounded-lg bg-background">
                  <Users className="h-5 w-5 mx-auto mb-1 text-primary" />
                  <p className="text-sm text-muted-foreground">Reach</p>
                  <p className="font-semibold text-card-foreground">{campaign.reach}</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-background">
                  <Target className="h-5 w-5 mx-auto mb-1 text-primary" />
                  <p className="text-sm text-muted-foreground">Engagement</p>
                  <p className="font-semibold text-card-foreground">{campaign.engagement}</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-background">
                  <DollarSign className="h-5 w-5 mx-auto mb-1 text-primary" />
                  <p className="text-sm text-muted-foreground">Budget Used</p>
                  <p className="font-semibold text-card-foreground">{campaign.progress}%</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Campaign Progress</span>
                  <span className="text-card-foreground">{campaign.progress}%</span>
                </div>
                <Progress value={campaign.progress} className="h-2" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
