"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MedicalImagingScan } from './medical-imaging-scan'
import { Activity, Brain, Heart } from 'lucide-react'

function HealthRecommendations() {
  const [recommendations, setRecommendations] = useState<string[]>([])

  const generateRecommendations = () => {
    const mockRecommendations = [
      "Increase daily water intake to 8 glasses",
      "Aim for 30 minutes of moderate exercise 5 times a week",
      "Incorporate more leafy greens into your diet",
      "Practice mindfulness or meditation for 10 minutes daily",
      "Ensure 7-8 hours of quality sleep each night"
    ]
    setRecommendations(mockRecommendations)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Personalized Health Recommendations</CardTitle>
      </CardHeader>
      <CardContent>
        <Button onClick={generateRecommendations}>Generate Recommendations</Button>
        {recommendations.length > 0 && (
          <ul className="mt-4 space-y-2">
            {recommendations.map((rec, index) => (
              <li key={index} className="flex items-center">
                <Activity className="mr-2 h-5 w-5 text-green-500" />
                {rec}
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}

export function HealthcareApp() {
  const [activePatient, setActivePatient] = useState<string | null>(null)

  const patients = [
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Jane Smith' },
    { id: '3', name: 'Alice Johnson' },
  ]

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">Healthcare App</h1>
      <Tabs defaultValue="records">
        <TabsList className="mb-4">
          <TabsTrigger value="records">Patient Records</TabsTrigger>
          <TabsTrigger value="appointments">Appointments</TabsTrigger>
          <TabsTrigger value="imaging">AI Medical Imaging</TabsTrigger>
          <TabsTrigger value="recommendations">Health Recommendations</TabsTrigger>
        </TabsList>
        <TabsContent value="records">
          <Card>
            <CardHeader>
              <CardTitle>Patient Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {patients.map((patient) => (
                  <Button
                    key={patient.id}
                    onClick={() => setActivePatient(patient.id)}
                    variant={activePatient === patient.id ? "default" : "outline"}
                  >
                    {patient.name}
                  </Button>
                ))}
              </div>
              {activePatient && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-2">
                    {patients.find((p) => p.id === activePatient)?.name}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-sm flex items-center">
                          <Heart className="mr-2 h-5 w-5 text-red-500" />
                          Heart Rate
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-2xl font-bold">72 bpm</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-sm flex items-center">
                          <Brain className="mr-2 h-5 w-5 text-purple-500" />
                          Stress Level
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-2xl font-bold">Low</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-sm flex items-center">
                          <Activity className="mr-2 h-5 w-5 text-green-500" />
                          Daily Steps
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-2xl font-bold">8,234</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="appointments">
          <Card>
            <CardHeader>
              <CardTitle>Schedule Appointment</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="patient">Patient</Label>
                  <select id="patient" className="w-full p-2 border rounded">
                    <option value="">Select a patient</option>
                    {patients.map((patient) => (
                      <option key={patient.id} value={patient.id}>
                        {patient.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label htmlFor="date">Date</Label>
                  <Input type="date" id="date" />
                </div>
                <div>
                  <Label htmlFor="time">Time</Label>
                  <Input type="time" id="time" />
                </div>
                <Button type="submit">Schedule Appointment</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="imaging">
          <MedicalImagingScan />
        </TabsContent>
        <TabsContent value="recommendations">
          <HealthRecommendations />
        </TabsContent>
      </Tabs>
    </div>
  )
}

