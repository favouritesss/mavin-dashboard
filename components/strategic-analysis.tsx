import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Lightbulb, AlertTriangle, CheckCircle } from "lucide-react"

const insights = [
  {
    type: "opportunity",
    title: "TikTok Viral Potential",
    description:
      "Your latest track has 340% higher engagement on TikTok. Consider creating dance challenges or behind-the-scenes content.",
    priority: "High",
    action: "Create TikTok Campaign",
    icon: TrendingUp,
    color: "text-primary",
  },
  {
    type: "recommendation",
    title: "European Tour Opportunity",
    description:
      "Fan growth in Germany (+12.1%) and UK (+8.7%) suggests strong demand for live performances in these markets.",
    priority: "Medium",
    action: "Plan European Dates",
    icon: Lightbulb,
    color: "text-accent",
  },
  {
    type: "alert",
    title: "Declining Twitter Engagement",
    description:
      "Twitter engagement dropped 15% this month. Consider refreshing content strategy or increasing posting frequency.",
    priority: "Medium",
    action: "Review Twitter Strategy",
    icon: AlertTriangle,
    color: "text-destructive",
  },
]

const caseStudy = {
  title: "Case Study: How Data Revived 'Running Up That Hill'",
  artist: "Kate Bush",
  situation: "A 37-year-old song experienced massive resurgence in 2022",
  dataInsight: "Stranger Things Season 4 usage drove 8,700% increase in streams within days",
  strategy: "If we were Kate Bush's team, we would have:",
  actions: [
    "Monitored social listening for show mentions and fan reactions",
    "Quickly released official lyric videos and behind-the-scenes content",
    "Partnered with Netflix for exclusive content and interviews",
    "Capitalized on TikTok trends with official audio for user-generated content",
    "Planned strategic playlist placements on all streaming platforms",
  ],
  result: "The song reached #1 in multiple countries and introduced Kate Bush to Gen Z",
}

export function StrategicAnalysis() {
  return (
    <div className="space-y-6">
      {/* AI Insights */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-card-foreground">
            <Lightbulb className="h-5 w-5" />
            AI-Powered Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {insights.map((insight, index) => (
              <div key={index} className="p-4 rounded-lg border border-border bg-muted/50">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <insight.icon className={`h-5 w-5 ${insight.color}`} />
                    <div>
                      <h3 className="font-semibold text-card-foreground">{insight.title}</h3>
                      <Badge
                        variant={insight.priority === "High" ? "default" : "secondary"}
                        className={insight.priority === "High" ? "bg-primary text-primary-foreground" : ""}
                      >
                        {insight.priority} Priority
                      </Badge>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    {insight.action}
                  </Button>
                </div>
                <p className="text-muted-foreground">{insight.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Case Study */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-card-foreground">
            <CheckCircle className="h-5 w-5" />
            Strategic Case Study
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-card-foreground mb-2">{caseStudy.title}</h3>
            <p className="text-muted-foreground mb-4">{caseStudy.situation}</p>

            <div className="p-4 rounded-lg bg-primary/10 border border-primary/20 mb-4">
              <h4 className="font-semibold text-primary mb-2">Key Data Insight</h4>
              <p className="text-card-foreground">{caseStudy.dataInsight}</p>
            </div>

            <h4 className="font-semibold text-card-foreground mb-3">{caseStudy.strategy}</h4>
            <ul className="space-y-2 mb-4">
              {caseStudy.actions.map((action, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{action}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
              <h4 className="font-semibold text-accent mb-2">Result</h4>
              <p className="text-card-foreground">{caseStudy.result}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
