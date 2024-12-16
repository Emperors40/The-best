"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ExportPanelProps {
  design: any
}

export function ExportPanel({ design }: ExportPanelProps) {
  const [format, setFormat] = useState('step')

  const handleExport = () => {
    // In a real application, this would trigger the export process
    alert(`Exporting design in ${format.toUpperCase()} format`)
  }

  if (!design) {
    return <p>Generate a design to export.</p>
  }

  return (
    <div className="space-y-4">
      <Select value={format} onValueChange={setFormat}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select format" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="step">STEP</SelectItem>
          <SelectItem value="stl">STL</SelectItem>
          <SelectItem value="iges">IGES</SelectItem>
          <SelectItem value="dxf">DXF</SelectItem>
        </SelectContent>
      </Select>
      <Button onClick={handleExport}>Export Design</Button>
    </div>
  )
}

