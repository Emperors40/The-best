"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface BillingSystemProps {
  user: any
}

interface BillItem {
  id: string
  description: string
  cost: number
}

export function BillingSystem({ user }: BillingSystemProps) {
  const [bills, setBills] = useState<BillItem[]>([
    { id: '1', description: 'General Consultation', cost: 5000 },
    { id: '2', description: 'Blood Test', cost: 3000 },
    { id: '3', description: 'Prescription Medication', cost: 2000 },
  ])

  const totalCost = bills.reduce((sum, item) => sum + item.cost, 0)
  const insuranceCoverage = totalCost * 0.9 // 90% coverage
  const userCopayment = totalCost * 0.1 // 10% co-payment

  const handleDownload = () => {
    // In a real app, this would generate and download a PDF summary
    alert('Downloading billing summary...')
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Billing System</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Cost (Naira)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bills.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.description}</TableCell>
                <TableCell className="text-right">{item.cost.toFixed(2)}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell className="font-bold">Total Cost</TableCell>
              <TableCell className="text-right font-bold">{totalCost.toFixed(2)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Insurance Coverage (90%)</TableCell>
              <TableCell className="text-right">{insuranceCoverage.toFixed(2)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Your Co-payment (10%)</TableCell>
              <TableCell className="text-right">{userCopayment.toFixed(2)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Button className="mt-4" onClick={handleDownload}>Download Summary</Button>
      </CardContent>
    </Card>
  )
}

