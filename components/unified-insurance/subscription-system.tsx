"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface SubscriptionSystemProps {
  user: any
  onSubscriptionUpdate: (updatedUser: any) => void
}

export function SubscriptionSystem({ user, onSubscriptionUpdate }: SubscriptionSystemProps) {
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [processing, setProcessing] = useState(false)

  const handleSubscribe = async () => {
    setProcessing(true)
    // Simulating payment processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    const updatedUser = {
      ...user,
      subscriptionStatus: 'active',
      subscriptionEndDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0]
    }
    onSubscriptionUpdate(updatedUser)
    setProcessing(false)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Unified Insurance Subscription</CardTitle>
        <CardDescription>Annual subscription for 10,000 Naira</CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="card" id="card" />
            <Label htmlFor="card">Credit/Debit Card</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="bank" id="bank" />
            <Label htmlFor="bank">Bank Transfer</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="mobile" id="mobile" />
            <Label htmlFor="mobile">Mobile Money</Label>
          </div>
        </RadioGroup>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSubscribe} disabled={processing}>
          {processing ? 'Processing...' : 'Subscribe Now'}
        </Button>
      </CardFooter>
    </Card>
  )
}

