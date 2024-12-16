"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface NaturalLanguageInputProps {
  onDesignGenerate: (design: any) => void
}

export function NaturalLanguageInput({ onDesignGenerate }: NaturalLanguageInputProps) {
  const [prompt, setPrompt] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate AI processing
    const simulatedDesign = {
      id: Math.random().toString(36).substr(2, 9),
      name: 'Generated Design',
      components: ['Conveyor Belt', 'Robotic Arm', 'Quality Control Station'],
    }
    onDesignGenerate(simulatedDesign)
    setPrompt('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe your production line design..."
        className="min-h-[100px]"
      />
      <Button type="submit">Generate Design</Button>
    </form>
  )
}

