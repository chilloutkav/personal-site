import type { NextApiRequest, NextApiResponse } from 'next'

interface HelloResponse {
  text: string
  timestamp: string
  nodeVersion: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<HelloResponse>
) {
  res.status(200).json({ 
    text: 'Hello from TypeScript + Node.js 22!',
    timestamp: new Date().toISOString(),
    nodeVersion: process.version
  })
}
