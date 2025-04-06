import React from 'react'
import Hero from '@/components/hero'
import reliabilityUrl from '/reliability.jpg'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reliability'
}

export default function Reliability() {
  return <Hero imgUrl={reliabilityUrl} altText='Reliability' content='Reliability~~~' />
}
