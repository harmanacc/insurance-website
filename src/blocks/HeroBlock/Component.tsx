import { cn } from '@/utilities/ui'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Heart,
  Car,
  Zap,
  Map,
  Activity,
  TrendingUp,
  Shield,
  AlertTriangle,
  Building,
  Truck,
} from 'lucide-react'

import { HeroBlockProps } from './types'
import { Logo } from '@/components/Logo/Logo'
import { Typewriter } from '@/components/ui/typewriter'

export const HeroBlock: React.FC<HeroBlockProps> = (props) => {
  const row1: Array<{
    title: string
    description: string
    icon: React.ComponentType<{ className?: string }>
    size: string
  }> = [
    {
      title: 'بیمه عمر',
      description: 'تامین آینده خانواده شما',
      icon: Heart,
      size: 'double',
    },
    {
      title: 'بیمه خودرو',
      description: 'پوشش کامل برای اتومبیل شما',
      icon: Car,
      size: 'normal',
    },
    {
      title: 'بیمه آتش سوزی',
      description: 'محافظت از اموال در برابر آتش سوزی',
      icon: Zap,
      size: 'normal',
    },
  ]

  const row2: Array<{
    title: string
    description: string
    icon: React.ComponentType<{ className?: string }>
    size: string
  }> = [
    {
      title: 'بیمه مسافرتی',
      description: 'پوشش در سفرهای داخلی و خارجی',
      icon: Map,
      size: 'normal',
    },
    {
      title: 'بیمه درمان',
      description: 'پوشش هزینه های پزشکی',
      icon: Activity,
      size: 'normal',
    },
    {
      title: 'بیمه بازنشستگی',
      description: 'پس انداز برای دوران بازنشستگی',
      icon: TrendingUp,
      size: 'double',
    },
  ]

  const row3: Array<{
    title: string
    description: string
    icon: React.ComponentType<{ className?: string }>
    size: string
  }> = [
    {
      title: 'بیمه مسئولیت',
      description: 'پوشش مسئولیت مدنی',
      icon: Shield,
      size: 'normal',
    },
    {
      title: 'بیمه حوادث',
      description: 'پوشش حوادث شخصی',
      icon: AlertTriangle,
      size: 'normal',
    },
    {
      title: 'بیمه مهندسی',
      description: 'پوشش پروژه های مهندسی',
      icon: Building,
      size: 'normal',
    },
    {
      title: 'بیمه باربری',
      description: 'پوشش حمل و نقل کالا',
      icon: Truck,
      size: 'normal',
    },
  ]

  const renderCard = (card: {
    title: string
    icon: React.ComponentType<{ className?: string }>
    size: string
  }) => {
    const IconComponent = card.icon
    return (
      <Card
        className={cn(
          'bg-white backdrop-blur-sm h-36 w-full border-[0.5px] border-primary shadow-2xl  transition-shadow duration-300  rounded-3xl',
        )}
      >
        <CardHeader className="text-center pb-2">
          <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3">
            <IconComponent className="w-12 h-12 text-blue-950" />
          </div>
          <CardTitle className="text-lg font-medium text-black ">{card.title}</CardTitle>
        </CardHeader>
      </Card>
    )
  }

  return (
    <section className="h-screen flex flex-col relative overflow-hidden bg-[url('/hero-bg.svg')] bg-cover bg-bottom">
      <div className="container mx-auto px-4 relative z-20 flex flex-col  h-full gap-16 pt-36">
        <div className="flex w-full min-h-10 md:min-h-48 gap-4 items-center font-black">
          {/* LEFT HALF – بیمه کلاب + همین الان خودتو */}
          <div className="flex-1 flex justify-end pr-8">
            <div className="text-right space-y-1 md:space-y-8">
              <h1 className="text-4xl font-semibold text-white leading-none place-self-end drop-shadow-xl">
                بیمه کلاب 760
              </h1>
              <h3 className="text-6xl  text-white/90 leading-tight">تا دیر نشده</h3>
            </div>
          </div>

          {/* RIGHT HALF – 760 + بیمه کن ! */}
          <div className="flex-1 flex justify-start pl-8">
            <div className="text-left space-y-1 md:space-y-8">
              <h1 className="text-4xl   font-semibold leading-none place-self-start drop-shadow-xl ">
                {/* 760 */}
                مشاوره و خرید بیمه
              </h1>
              <h3 className="text-6xl  text-orange-500 leading-tight place-self-start">
                <div className="text-4xl md:text-6xl lg:text-7xl text-orange-500">
                  <Typewriter
                    texts={['مشاوره بگیر !', 'انتخاب کن !', 'بیمه بگیر !', 'آسوده باش !']}
                    typeSpeed={50}
                    deleteSpeed={50}
                    pauseTime={7000}
                    cursorClassName="bg-white"
                  />
                </div>
              </h3>
            </div>
          </div>
        </div>

        {/* Cards Layout */}
        <div className="flex flex-col gap-6 max-w-6xl mx-auto">
          {/* Row 1 */}
          <div className="grid grid-cols-4 gap-6">
            {row1.map((card, index) => (
              <div key={index} className={card.size === 'double' ? 'col-span-2' : 'col-span-1'}>
                {renderCard(card)}
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-4 gap-6">
            {row2.map((card, index) => (
              <div key={index} className={card.size === 'double' ? 'col-span-2' : 'col-span-1'}>
                {renderCard(card)}
              </div>
            ))}
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-4 gap-6">
            {row3.map((card, index) => (
              <div key={index} className="col-span-1">
                {renderCard(card)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
