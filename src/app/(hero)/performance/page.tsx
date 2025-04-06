import React from 'react'
import Hero from '@/components/hero'
import performanceUrl from '/performance.jpg'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Performance'
}

export default function Performance() {
  return <Hero imgUrl={performanceUrl} altText='PerformanceUrl' content='PerformanceUrl~~~' />
}
