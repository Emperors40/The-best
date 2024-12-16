"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface CoverageManagementProps {
  user: any
}

export function CoverageManagement({ user }: CoverageManagementProps) {
  const [treatmentCost, setTreatmentCost] = useState('')
  const [drugCost, setDrugCost] = useState('')
  const [coverage, setCoverage] = useState<{ total: number; covered: number; copayment: number } | null>(null)

  const calculateCoverage = () => {
    const total = parseFloat(treatmentCost) + parseFloat(drugCost)
    const copayment = total * 0.1 // 10% co-payment
    const covered = total - copayment
    setCoverage({ total, covered, copayment })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Coverage Management</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="treatmentCost">Treatment Cost (Naira)</Label>
            <Input
              id="treatmentCost"
              type="number"
              value={treatmentCost}
              onChange={(e) => setTreatmentCost(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="drugCost">Drug Cost (Naira)</Label>
            <Input
              id="drugCost"
              type="number"
              value={drugCost}
              onChange={(e) => setDrugCost(e.target.value)}
            />
          </div>
          <Button onClick={calculateCoverage}>Calculate Coverage</Button>
        </div>
        {coverage && (
          <div className="mt-4">
            <p>Total Cost: {coverage.total.toFixed(2)} Naira</p>
            <p>Covered Amount: {coverage.covered.toFixed(2)} Naira</p>
            <p>Your Co-payment (10%): {coverage.copayment.toFixed(2)} Naira</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

