import React from 'react'
import Hero from '@/components/hero'
import scaleUrl from '/scale.jpg'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Scale'
}

export default function Scale() {
  return <Hero imgUrl={scaleUrl} altText='Scale' content='Scale~~~' />
}
