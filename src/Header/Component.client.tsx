'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'

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
        setIsSticky(window.scrollY > 32) // mt-8 = 2rem = 32px
      }
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [isHome])

  return (
    <header
      className={`z-50 bg-white shadow-header ${
        isHome ? 'fixed left-0 right-0 transition-all duration-200' : 'sticky top-0'
      }`}
      style={isHome ? { top: isSticky ? 0 : 20 } : {}}
      // style={{ backgroundColor: '#1A3D47' }}
      //  {...(theme ? { 'data-theme': theme } : {})} // Uncomment this line to enable dark mode
    >
      <div className="container py-4 flex justify-between">
        <Link href="/" className="flex text-black">
          <Logo loading="eager" priority="high" className="invert dark:invert-0" />
          بیمه۷۶۰
        </Link>
        <HeaderNav data={data} />
      </div>
    </header>
  )
}
