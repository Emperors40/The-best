"use client"

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

interface Hospital {
  id: string
  name: string
  distance: number
}

interface HospitalLocatorProps {
  user: any
  onHospitalSelect: (hospital: Hospital) => void
}

export function HospitalLocator({ user, onHospitalSelect }: HospitalLocatorProps) {
  const [location, setLocation] = useState('')
  const [hospitals, setHospitals] = useState<Hospital[]>([])

  useEffect(() => {
    // Simulating fetching nearby hospitals
    const fetchHospitals = async () => {
      // In a real app, this would use the user's location to fetch nearby hospitals
      const mockHospitals: Hospital[] = [
        { id: '1', name: 'General Hospital', distance: 2.5 },
        { id: '2', name: 'City Medical Center', distance: 3.8 },
        { id: '3', name: 'Community Health Clinic', distance: 1.2 },
      ]
      setHospitals(mockHospitals)
    }
    fetchHospitals()
  }, [location])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Hospital Locator</CardTitle>
      </CardHeader>
      <CardContent>
        <Input
          type="text"
          placeholder="Enter your location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="mb-4"
        />
        {hospitals.map((hospital) => (
          <div key={hospital.id} className="flex justify-between items-center mb-2">
            <span>{hospital.name} ({hospital.distance.toFixed(1)} km)</span>
            <Button onClick={() => onHospitalSelect(hospital)}>Select</Button>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

