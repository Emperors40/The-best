import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Glasses, Database, Factory, Shield } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Unified Healthcare Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/healthcare-app">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="mr-2 h-5 w-5" />
                Healthcare App
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Manage patient records, appointments, and medical data. Access comprehensive patient histories and schedule appointments efficiently.</p>
            </CardContent>
          </Card>
        </Link>
        <Link href="/training-centre-ar">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Glasses className="mr-2 h-5 w-5" />
                Training Centre AR
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Access AR-powered training modules for healthcare professionals. Enhance skills with interactive 3D visualizations and simulations.</p>
            </CardContent>
          </Card>
        </Link>
        <Link href="/universal-api">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="mr-2 h-5 w-5" />
                Universal API
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Integrate and manage healthcare data across systems. Streamline data exchange between different healthcare providers and services.</p>
            </CardContent>
          </Card>
        </Link>
        <Link href="/production-line-ai">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Factory className="mr-2 h-5 w-5" />
                Production Line AI
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Design and optimize medical equipment production lines. Utilize AI to improve efficiency and quality in manufacturing processes.</p>
            </CardContent>
          </Card>
        </Link>
        <Link href="/unified-insurance">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2 h-5 w-5" />
                Unified Insurance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Manage insurance policies, claims, and coverage. Streamline the insurance process for healthcare providers and patients.</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}

