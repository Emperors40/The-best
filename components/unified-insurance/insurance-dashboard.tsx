"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface InsuranceDashboardProps {
  user: any
}

export function InsuranceDashboard({ user }: InsuranceDashboardProps) {
  const daysUntilRenewal = () => {
    const today = new Date()
    const endDate = new Date(user.subscriptionEndDate)
    const diffTime = Math.abs(endDate.getTime() - today.getTime())
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Insurance Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Subscription Status</h3>
            <p className="capitalize">{user.subscriptionStatus}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Days Until Renewal</h3>
            <Progress value={(365 - daysUntilRenewal()) / 365 * 100} className="w-full" />
            <p>{daysUntilRenewal()} days left</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Selected Hospital</h3>
            <p>{user.selectedHospital ? user.selectedHospital.name : 'Not selected'}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

