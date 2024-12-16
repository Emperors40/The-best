"use client"

import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SubscriptionSystem } from './subscription-system'
import { HospitalLocator } from './hospital-locator'
import { CoverageManagement } from './coverage-management'
import { BillingSystem } from './billing-system'
import { InsuranceDashboard } from './insurance-dashboard'
import { InsuranceChatbot } from './insurance-chatbot'
import { InsuranceSettings } from './insurance-settings'

export function UnifiedInsurance() {
  const [user, setUser] = useState({
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    subscriptionStatus: 'active',
    subscriptionEndDate: '2024-12-31',
    selectedHospital: null,
    settings: {
      notifications: true,
      twoFactor: false,
    },
  })

  const handleSettingsUpdate = (updatedUser: any) => {
    setUser(updatedUser)
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Unified Insurance</h1>
      <Tabs defaultValue="dashboard">
        <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="subscription">Subscription</TabsTrigger>
          <TabsTrigger value="hospitals">Hospitals</TabsTrigger>
          <TabsTrigger value="coverage">Coverage</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="chatbot">AI Assistant</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="dashboard">
          <InsuranceDashboard user={user} />
        </TabsContent>
        <TabsContent value="subscription">
          <SubscriptionSystem user={user} onSubscriptionUpdate={setUser} />
        </TabsContent>
        <TabsContent value="hospitals">
          <HospitalLocator user={user} onHospitalSelect={(hospital) => setUser({ ...user, selectedHospital: hospital })} />
        </TabsContent>
        <TabsContent value="coverage">
          <CoverageManagement user={user} />
        </TabsContent>
        <TabsContent value="billing">
          <BillingSystem user={user} />
        </TabsContent>
        <TabsContent value="chatbot">
          <InsuranceChatbot user={user} />
        </TabsContent>
        <TabsContent value="settings">
          <InsuranceSettings user={user} onSettingsUpdate={handleSettingsUpdate} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

