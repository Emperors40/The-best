"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { NaturalLanguageInput } from './natural-language-input'
import { DesignViewer } from './design-viewer'
import { SimulationPanel } from './simulation-panel'
import { OptimizationPanel } from './optimization-panel'
import { ExportPanel } from './export-panel'

export function ProductionLineAIDesigner() {
  const [design, setDesign] = useState(null)

  const handleDesignGeneration = (newDesign: any) => {
    setDesign(newDesign)
  }

  return (
    <Card>
      <CardHeader>
        <h1 className="text-3xl font-bold mb-8">Production Line AI Designer</h1>
      </CardHeader>
      <CardContent>
        <NaturalLanguageInput onDesignGenerate={handleDesignGeneration} />
        <Tabs defaultValue="viewer" className="mt-6">
          <TabsList>
            <TabsTrigger value="viewer">Design Viewer</TabsTrigger>
            <TabsTrigger value="simulation">Simulation</TabsTrigger>
            <TabsTrigger value="optimization">Optimization</TabsTrigger>
            <TabsTrigger value="export">Export</TabsTrigger>
          </TabsList>
          <TabsContent value="viewer">
            <DesignViewer design={design} />
          </TabsContent>
          <TabsContent value="simulation">
            <SimulationPanel design={design} />
          </TabsContent>
          <TabsContent value="optimization">
            <OptimizationPanel design={design} />
          </TabsContent>
          <TabsContent value="export">
            <ExportPanel design={design} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

