"use client"
import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import { LuChartLine } from "react-icons/lu"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "January", views: 106, clicks: 40 },
  { month: "February", views: 147, clicks: 70 },
  { month: "March", views: 120, clicks: 30 },
  { month: "April", views: 173, clicks: 150 },
  { month: "May", views: 209, clicks: 130 },
  { month: "June", views: 214, clicks: 140 },
]
const chartConfig = {
  desktop: {
    label: "Views",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Clicks",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig
export function LineChartt() {
  return (
    <Card className=" bg-[#0A0A0A] rounded-none border-none ">
      <CardHeader>
        <CardTitle className=" text-neutral-400 flex items-center gap-x-2 text-[0.9rem]">
          <LuChartLine className=" inline-block" />
          Frontend Observability
        </CardTitle>
        <CardDescription className="text-neutral-400 text-[1.1rem]">
          <span className=" text-white">
            Privacy-friendly,lighweight Analysis.
          </span>{" "}
          <br />
          Upgrade your post-lunch workflow with actionable, <br /> real-time
          insight
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer className="h-[15rem] w-full" config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="views"
              type="monotone"
              stroke="#3dc3df"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="clicks"
              type="monotone"
              stroke="#32f48e"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
