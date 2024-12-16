"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TrainingCentreAR() {
  const [activeModule, setActiveModule] = useState<string | null>(null)

  const trainingModules = [
    { id: 'basic-anatomy', name: 'Basic Anatomy' },
    { id: 'surgical-procedures', name: 'Surgical Procedures' },
    { id: 'patient-care', name: 'Patient Care' },
    { id: 'emergency-response', name: 'Emergency Response' },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Training Centre AR</h1>
      <Card>
        <CardHeader>
          <CardTitle>AR Training Modules</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="modules">
            <TabsList>
              <TabsTrigger value="modules">Modules</TabsTrigger>
              <TabsTrigger value="progress">Progress</TabsTrigger>
            </TabsList>
            <TabsContent value="modules">
              <div className="grid grid-cols-2 gap-4">
                {trainingModules.map((module) => (
                  <Button
                    key={module.id}
                    onClick={() => setActiveModule(module.id)}
                    variant={activeModule === module.id ? "default" : "outline"}
                  >
                    {module.name}
                  </Button>
                ))}
              </div>
              {activeModule && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-2">
                    {trainingModules.find((m) => m.id === activeModule)?.name}
                  </h3>
                  <p>AR content for {activeModule} would be displayed here.</p>
                </div>
              )}
            </TabsContent>
            <TabsContent value="progress">
              <p>Your training progress and achievements would be displayed here.</p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

