'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import { Button } from '@/components/ui/button'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()
  const [isSticky, setIsSticky] = useState(false)

  const isHome = pathname === '/'

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  useEffect(() => {
    if (isHome) {
      const handleScroll = () => {
        setIsSticky(window.scrollY > 128) // mt-8 = 2rem = 32px
      }
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [isHome])

  return (
    <header
      className={`z-50 bg-white/80 backdrop-blur-xl shadow-2xl rounded-2xl min-w-[900px] border border-white/30 ${
        isHome ? 'fixed left-0 right-0 transition-all  duration-200' : 'sticky top-0'
      } ${isSticky ? ' rounded-none' : ''}`}
      style={
        isHome
          ? { top: isSticky ? 0 : 20, maxWidth: isSticky ? '100%' : '1000px', margin: 'auto' }
          : {}
      }
      // style={{ backgroundColor: '#1A3D47' }}
      //  {...(theme ? { 'data-theme': theme } : {})} // Uncomment this line to enable dark mode
    >
      <div className="container py-4 flex justify-between text-blue-950 px-6">
        <Link href="/" className="flex text-black justify-center items-center text-nowrap">
          <Logo loading="eager" priority="high" className=" text-blue-950 font-bold text-2xl " />
          بیمه کلاب 760
        </Link>
        <HeaderNav data={data} />
        <Button className="bg-orange-500 rounded-2xl p-6">مشاوره رایگان</Button>
      </div>
    </header>
  )
}
