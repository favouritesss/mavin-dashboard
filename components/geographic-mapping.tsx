import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, TrendingUp } from "lucide-react"

const topMarkets = [
  { country: "Nigeria", fans: "2.1M", growth: "+28.5%", flag: "🇳🇬" },
  { country: "United States", fans: "645K", growth: "+18.7%", flag: "🇺🇸" },
  { country: "United Kingdom", fans: "423K", growth: "+22.1%", flag: "🇬🇧" },
  { country: "Ghana", fans: "387K", growth: "+31.2%", flag: "🇬🇭" },
  { country: "South Africa", fans: "298K", growth: "+25.8%", flag: "🇿🇦" },
]

const emergingMarkets = [
  { country: "Kenya", growth: "+52.3%", potential: "High" },
  { country: "Canada", growth: "+41.7%", potential: "High" },
  { country: "France", growth: "+35.2%", potential: "Medium" },
]

export function GeographicMapping() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-card-foreground">
          <MapPin className="h-5 w-5" />
          Geographic Fan Distribution
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Top Markets */}
        <div>
          <h3 className="font-semibold mb-3 text-card-foreground">Top Markets</h3>
          <div className="space-y-3">
            {topMarkets.map((market) => (
              <div key={market.country} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-lg">{market.flag}</span>
                  <div>
                    <p className="font-medium text-card-foreground">{market.country}</p>
                    <p className="text-sm text-muted-foreground">{market.fans} fans</p>
                  </div>
                </div>
                <Badge variant="secondary" className="text-primary">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {market.growth}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Emerging Markets */}
        <div>
          <h3 className="font-semibold mb-3 text-card-foreground">Emerging Opportunities</h3>
          <div className="space-y-2">
            {emergingMarkets.map((market) => (
              <div key={market.country} className="flex items-center justify-between p-2 rounded-lg bg-muted">
                <span className="font-medium text-card-foreground">{market.country}</span>
                <div className="flex items-center gap-2">
                  <Badge variant={market.potential === "High" ? "default" : "secondary"}>{market.potential}</Badge>
                  <span className="text-sm text-primary font-medium">{market.growth}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
