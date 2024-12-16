"use client"

import React, { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Camera, Activity, Brain, Heart, TreesIcon as Lungs } from 'lucide-react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Box, Sphere, Text } from '@react-three/drei'
import { motion } from 'framer-motion'

function OrganSystem({ position, color, icon: Icon, label }: { position: [number, number, number], color: string, icon: React.ElementType, label: string }) {
  return (
    <group position={position}>
      <Sphere args={[0.2, 32, 32]}>
        <meshStandardMaterial color={color} />
      </Sphere>
      <Text position={[0, 0.3, 0]} fontSize={0.1} color="white">
        {label}
      </Text>
      <Icon className="text-white" style={{ transform: 'scale(0.5)' }} />
    </group>
  )
}

function Body3D({ healthData }: { healthData: any }) {
  return (
    <group>
      <Box args={[1, 2, 0.5]} position={[0, 0, 0]}>
        <meshStandardMaterial color={healthData.overallHealth > 70 ? "green" : "red"} />
      </Box>
      <OrganSystem position={[0, 0.7, 0.3]} color="pink" icon={Brain} label="Brain" />
      <OrganSystem position={[0, 0.2, 0.3]} color="red" icon={Heart} label="Heart" />
      <OrganSystem position={[0, -0.3, 0.3]} color="lightblue" icon={Lungs} label="Lungs" />
    </group>
  )
}

export function MedicalImagingScan() {
  const [scanning, setScanning] = useState(false)
  const [result, setResult] = useState<any | null>(null)
  const [selectedOrgan, setSelectedOrgan] = useState<string | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    startBackgroundScanning()
    return () => stopBackgroundScanning()
  }, [])

  const startBackgroundScanning = () => {
    const intervalId = setInterval(() => {
      if (!scanning) {
        performScan()
      }
    }, 30 * 60 * 1000) // 30 minutes
    return () => clearInterval(intervalId)
  }

  const stopBackgroundScanning = () => {
    // In a real app, we would stop the background scanning here
  }

  const performScan = async () => {
    setScanning(true)
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }
      // Simulate capturing and processing image
      setTimeout(() => {
        captureAndProcessImage()
        const tracks = stream.getTracks()
        tracks.forEach(track => track.stop())
      }, 1000)
    } catch (err) {
      console.error("Error accessing the camera", err)
      setScanning(false)
    }
  }

  const captureAndProcessImage = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d')
      if (context) {
        context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height)
        const imageData = canvasRef.current.toDataURL('image/jpeg')
        sendToBackend(imageData)
      }
    }
  }

  const sendToBackend = (imageData: string) => {
    // Simulate sending data to backend and receiving processed results
    setTimeout(() => {
      const mockResult = {
        overallHealth: Math.random() * 100,
        organs: {
          brain: { health: Math.random() * 100, issues: ['Mild stress detected'] },
          heart: { health: Math.random() * 100, issues: ['Slight elevated heart rate'] },
          lungs: { health: Math.random() * 100, issues: ['Normal respiratory function'] },
        },
        recommendations: ['Increase water intake', 'Consider stress-reduction techniques', 'Maintain regular exercise'],
      }
      setResult(mockResult)
      setScanning(false)
    }, 2000)
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Advanced AI-Powered Medical Imaging Scan</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
            {scanning ? (
              <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover" />
            ) : (
              <div className="flex items-center justify-center w-full h-full">
                <Camera className="w-12 h-12 text-gray-400" />
              </div>
            )}
          </div>
          <canvas ref={canvasRef} className="hidden" width="640" height="480" />
          <Button onClick={performScan} disabled={scanning}>
            {scanning ? 'Scanning...' : 'Perform Manual Scan'}
          </Button>
          {result && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="p-4 bg-yellow-100 rounded-lg">
                <h3 className="font-semibold">Scan Results:</h3>
                <p>Overall Health: {result.overallHealth.toFixed(2)}%</p>
                <p>Recommendations: {result.recommendations.join(', ')}</p>
              </div>
              <div className="aspect-square">
                <Canvas>
                  <ambientLight intensity={0.5} />
                  <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                  <Body3D healthData={result} />
                  <OrbitControls />
                </Canvas>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {Object.entries(result.organs).map(([organ, data]: [string, any]) => (
                  <Button 
                    key={organ} 
                    onClick={() => setSelectedOrgan(organ)}
                    variant={selectedOrgan === organ ? "default" : "outline"}
                  >
                    {organ.charAt(0).toUpperCase() + organ.slice(1)}
                  </Button>
                ))}
              </div>
              {selectedOrgan && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-4 bg-blue-100 rounded-lg"
                >
                  <h4 className="font-semibold">{selectedOrgan.charAt(0).toUpperCase() + selectedOrgan.slice(1)} Health:</h4>
                  <p>Health Score: {result.organs[selectedOrgan].health.toFixed(2)}%</p>
                  <p>Issues: {result.organs[selectedOrgan].issues.join(', ')}</p>
                </motion.div>
              )}
            </motion.div>
          )}
          <p className="text-sm text-gray-500">
            Note: This is a simulated feature for demonstration purposes only. Real medical imaging requires specialized equipment, professional interpretation, and adherence to medical regulations. The background scanning feature is also simulated and would require user consent and careful implementation in a real application.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

