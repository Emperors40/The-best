"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Activity, Glasses, Database, Factory, Shield } from 'lucide-react'

const navItems = [
  { name: 'Dashboard', path: '/', icon: Home },
  { name: 'Healthcare App', path: '/healthcare-app', icon: Activity },
  { name: 'Training Centre AR', path: '/training-centre-ar', icon: Glasses },
  { name: 'Universal API', path: '/universal-api', icon: Database },
  { name: 'Production Line AI', path: '/production-line-ai', icon: Factory },
  { name: 'Unified Insurance', path: '/unified-insurance', icon: Shield },
]

export function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="flex h-screen bg-gray-100">
      <nav className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Unified Healthcare</h1>
        </div>
        <ul className="space-y-2 p-4">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`flex items-center p-2 rounded ${
                    pathname === item.path ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
                  }`}
                >
                  <Icon className="mr-2 h-5 w-5" />
                  {item.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <main className="flex-1 p-8 overflow-auto">
        {children}
      </main>
    </div>
  )
}

