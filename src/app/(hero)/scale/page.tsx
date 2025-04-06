import React from 'react'
import Hero from '@/components/hero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Scale'
}

export default function Scale() {
  return <Hero imgUrl='/scale.jpg' altText='Scale' content='Scale~~~' />
}
