import React from 'react'
import Hero from '@/components/hero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home'
}

export default function Page() {
  return <Hero imgUrl='/home.jpg' altText='Home' content='Professional Cloud Hosting' />
}
