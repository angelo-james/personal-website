import React from 'react'
import Head from 'next/head'
import Navbar from '../Navbar/Navbar'

export default function ContainerBlock({ children, ...meta }) {
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <main className="w-full">
        <Navbar />
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-20">{children}</div>
      </main>
    </div>
  )
}
