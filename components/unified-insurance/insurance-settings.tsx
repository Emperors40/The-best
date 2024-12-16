"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

interface InsuranceSettingsProps {
  user: any
  onSettingsUpdate: (updatedUser: any) => void
}

export function InsuranceSettings({ user, onSettingsUpdate }: InsuranceSettingsProps) {
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [notifications, setNotifications] = useState(true)
  const [twoFactor, setTwoFactor] = useState(false)

  const handleSave = () => {
    const updatedUser = {
      ...user,
      name,
      email,
      settings: {
        notifications,
        twoFactor,
      },
    }
    onSettingsUpdate(updatedUser)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Insurance Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-1">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            id="notifications"
            checked={notifications}
            onCheckedChange={setNotifications}
          />
          <Label htmlFor="notifications">Enable notifications</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            id="twoFactor"
            checked={twoFactor}
            onCheckedChange={setTwoFactor}
          />
          <Label htmlFor="twoFactor">Enable two-factor authentication</Label>
        </div>
        <Button onClick={handleSave}>Save Settings</Button>
      </CardContent>
    </Card>
  )
}

