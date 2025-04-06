import React from 'react'
import Hero from '@/components/hero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Performance'
}

export default function Performance() {
  return <Hero imgUrl='/performance.jpg' altText='PerformanceUrl' content='PerformanceUrl~~~' />
}
