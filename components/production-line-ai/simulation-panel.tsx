"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface SimulationPanelProps {
  design: any
}

export function SimulationPanel({ design }: SimulationPanelProps) {
  const [simulating, setSimulating] = useState(false)
  const [progress, setProgress] = useState(0)

  const runSimulation = () => {
    setSimulating(true)
    setProgress(0)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setSimulating(false)
          return 100
        }
        return prev + 10
      })
    }, 500)
  }

  if (!design) {
    return <p>Generate a design to run simulations.</p>
  }

  return (
    <div className="space-y-4">
      <Button onClick={runSimulation} disabled={simulating}>
        {simulating ? 'Simulating...' : 'Run Simulation'}
      </Button>
      <Progress value={progress} className="w-full" />
      {progress === 100 && (
        <p className="text-green-600">Simulation completed successfully!</p>
      )}
    </div>
  )
}

