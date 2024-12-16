"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface DesignViewerProps {
  design: any
}

export function DesignViewer({ design }: DesignViewerProps) {
  if (!design) {
    return <p>No design generated yet. Use the input above to create a design.</p>
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{design.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold mb-2">Components:</h3>
        <ul className="list-disc list-inside">
          {design.components.map((component: string, index: number) => (
            <li key={index}>{component}</li>
          ))}
        </ul>
        <p className="mt-4">In a full implementation, this would display a 3D model of the design.</p>
      </CardContent>
    </Card>
  )
}

