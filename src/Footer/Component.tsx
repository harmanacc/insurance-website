import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'
import { InstagramIcon, TwitterIcon, LucidePhoneCall, LucidePhone } from 'lucide-react'

import type { Footer } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 2)()

  const navItems = footerData?.navItems || []

  return (
    <footer className="mt-auto border-t border-border bg-black dark:bg-card text-white" dir="rtl">
      <div className="container py-8 gap-8 flex flex-col  md:flex-row">
        {/* Right: About text with logo */}
        <div className="flex-1 flex flex-col items-end">
          <Link className="flex items-center" href="/">
            <Logo />
          </Link>
          <p className="text-white mt-4 text-right leading-relaxed md:min-w-80 text-xs md:text-sm flex flex-col ">
            <span className="font-bold ">درباره کارگزاری بیمه</span>
            <span>
              <br />
              کارگزاری رسمی بیمه (نمایندگی شماره ۵۱۲۳۷۸ سازمان بیمه مرکزی) با مجوز رسمی از بیمه
              مرکزی جمهوری اسلامی ایران،
              <br />
              امکان مقایسه، مشاوره رایگان و خرید انواع بیمه‌نامه از تمامی شرکت‌های بیمه معتبر را
              برای شما فراهم کرده است.
              <br />
              مشاوره و خرید بیمه در پیام رسان واتساپ
              <div className="flex flex-col gap-2 pt-2">
                <div className="flex items-center gap-2">
                  <span className="border-2 border-white rounded-t-full rounded-br-full p-1 h-6 w-6 items-center justify-center flex ">
                    <LucidePhone />
                  </span>
                  <span>۰۹۲۱۹۸۷۶۵۴۳</span>
                </div>
                <InstagramIcon />
                <TwitterIcon />
              </div>
            </span>
          </p>
          <div className="flex gap-4">
            <ThemeSelector />
          </div>
        </div>

        {/* Middle: Nav Items */}
        <div className="flex-1">
          <nav className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {navItems.map(({ link }, i) => {
              return (
                <CMSLink
                  className="text-white justify-center items-center flex text-xs md:text-sm font-bold"
                  key={i}
                  {...link}
                />
              )
            })}
          </nav>
        </div>

        {/* Left: Map link */}
        <div className="flex-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17415.385204094327!2d51.31417695037692!3d35.71560639584412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dfd007531e449%3A0x9db19aad87454ce2!2z2KjbjNmF2Ycg2KfbjNix2KfZhiDZhtmF2KfbjNmG2K_ar9uMINi02KfZh9iz2KfYsQ!5e0!3m2!1sfa!2s!4v1764366818678!5m2!1sfa!2s"
            width="300"
            height="200"
            loading="lazy"
            className="w-full"
          ></iframe>
        </div>
      </div>
    </footer>
  )
}
