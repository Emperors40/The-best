import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ status: 'OK', message: 'Unified Healthcare API is running' })
}

