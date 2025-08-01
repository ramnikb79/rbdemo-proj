"use client"

import { ProtectedRoute } from "@/components/auth/protected-route"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  FileText, 
  Download, 
  Calendar, 
  Filter,
  BarChart3,
  TrendingUp,
  Users,
  DollarSign,
  Clock,
  Eye,
  Edit,
  Trash2
} from "lucide-react"

function ReportsContent() {
  const reportTypes = [
    {
      title: "Sales Report",
      description: "Comprehensive sales performance and revenue analysis",
      icon: DollarSign,
      category: "Financial",
      lastGenerated: "2 hours ago",
      status: "Ready",
    },
    {
      title: "User Analytics",
      description: "User behavior, engagement, and growth metrics",
      icon: Users,
      category: "Analytics",
      lastGenerated: "1 day ago",
      status: "Ready",
    },
    {
      title: "Performance Report",
      description: "System performance and technical metrics",
      icon: TrendingUp,
      category: "Technical",
      lastGenerated: "3 days ago",
      status: "Ready",
    },
    {
      title: "Inventory Report",
      description: "Product inventory levels and stock management",
      icon: BarChart3,
      category: "Operations",
      lastGenerated: "1 week ago",
      status: "Outdated",
    },
  ]

  const recentReports = [
    {
      name: "Q4 Sales Summary",
      type: "Sales Report",
      generated: "2 hours ago",
      size: "2.4 MB",
      status: "Completed",
    },
    {
      name: "User Growth Analysis",
      type: "User Analytics",
      generated: "1 day ago",
      size: "1.8 MB",
      status: "Completed",
    },
    {
      name: "System Performance Q4",
      type: "Performance Report",
      generated: "3 days ago",
      size: "3.2 MB",
      status: "Completed",
    },
    {
      name: "Inventory Status",
      type: "Inventory Report",
      generated: "1 week ago",
      size: "1.5 MB",
      status: "Completed",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ready":
        return "bg-green-100 text-green-800"
      case "Outdated":
        return "bg-yellow-100 text-yellow-800"
      case "Completed":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <DashboardLayout 
      title="Reports" 
      subtitle="Generate and manage your business reports"
    >
      <div className="space-y-6">
        {/* Header Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="outline" className="gap-2">
              <Calendar className="h-4 w-4" />
              Date Range
            </Button>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filter Reports
            </Button>
          </div>
          <Button className="gap-2">
            <FileText className="h-4 w-4" />
            Create Custom Report
          </Button>
        </div>

        {/* Report Types */}
        <div className="grid gap-6 md:grid-cols-2">
          {reportTypes.map((report, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <report.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{report.title}</CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {report.category}
                      </Badge>
                    </div>
                  </div>
                  <Badge className={getStatusColor(report.status)}>
                    {report.status}
                  </Badge>
                </div>
                <CardDescription className="mt-2">
                  {report.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    Last generated: {report.lastGenerated}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Reports */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Reports</CardTitle>
            <CardDescription>
              Your recently generated reports and their status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentReports.map((report, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <FileText className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{report.name}</h3>
                      <p className="text-sm text-muted-foreground">{report.type}</p>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-xs text-muted-foreground">
                          Generated {report.generated}
                        </span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">{report.size}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={getStatusColor(report.status)}>
                      {report.status}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Scheduled Reports
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Automatically generate reports on a schedule
              </p>
              <Button variant="outline" className="w-full">
                Manage Schedule
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="h-5 w-5" />
                Export Options
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Choose your preferred export format
              </p>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  PDF Export
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  Excel Export
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  CSV Export
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Templates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Use pre-built report templates
              </p>
              <Button variant="outline" className="w-full">
                Browse Templates
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default function ReportsPage() {
  return (
    <ProtectedRoute>
      <ReportsContent />
    </ProtectedRoute>
  )
} 