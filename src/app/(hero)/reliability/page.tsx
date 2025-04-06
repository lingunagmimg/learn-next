import React from 'react'
import Hero from '@/components/hero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reliability'
}

export default function Reliability() {
  return <Hero imgUrl='/reliability.jpg' altText='Reliability' content='Reliability~~~' />
}
