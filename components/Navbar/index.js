import Link from 'next/link'
import React from 'react'

export default function nav() {
  return (
    <>
      <nav id='nav'>
        <Link href="/">Home</Link>
        <Link href="/posts">Post</Link>
        <Link href="/about">about</Link>
      </nav>
    </>
  )

}

