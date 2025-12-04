import { cn } from '@/utilities/ui'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import { HeroBlockProps } from './types'

export const HeroBlock: React.FC<HeroBlockProps> = (props) => {
  const row1 = [
    { title: 'بیمه عمر', description: 'تامین آینده خانواده شما', icon: '👨‍👩‍👧‍👦', size: 'double' },
    { title: 'بیمه خودرو', description: 'پوشش کامل برای اتومبیل شما', icon: '🚗', size: 'normal' },
    {
      title: 'بیمه آتش سوزی',
      description: 'محافظت از اموال در برابر آتش سوزی',
      icon: '🔥',
      size: 'normal',
    },
  ]

  const row2 = [
    {
      title: 'بیمه مسافرتی',
      description: 'پوشش در سفرهای داخلی و خارجی',
      icon: '✈️',
      size: 'normal',
    },
    { title: 'بیمه درمان', description: 'پوشش هزینه های پزشکی', icon: '🏥', size: 'normal' },
    {
      title: 'بیمه بازنشستگی',
      description: 'پس انداز برای دوران بازنشستگی',
      icon: '👴',
      size: 'double',
    },
  ]

  const row3 = [
    { title: 'بیمه مسئولیت', description: 'پوشش مسئولیت مدنی', icon: '⚖️', size: 'normal' },
    { title: 'بیمه حوادث', description: 'پوشش حوادث شخصی', icon: '🚨', size: 'normal' },
    { title: 'بیمه مهندسی', description: 'پوشش پروژه های مهندسی', icon: '🏗️', size: 'normal' },
    { title: 'بیمه باربری', description: 'پوشش حمل و نقل کالا', icon: '🚛', size: 'normal' },
  ]

  const renderCard = (card: { title: string; icon: string; size: string }) => (
    <Card
      className={cn(
        'bg-white backdrop-blur-sm h-36 w-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300  rounded-3xl',
      )}
    >
      <CardHeader className="text-center pb-2">
        <div className="w-12 h-12  bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
          <span className="text-2xl">{card.icon}</span>
        </div>
        <CardTitle className="text-lg font-semibold text-white">{card.title}</CardTitle>
      </CardHeader>
    </Card>
  )

  return (
    <section className="h-screen flex flex-col py-8  relative overflow-hidden bg-[url('/hero-bg.svg')] bg-cover bg-bottom">
      <div className="container mx-auto px-4 relative z-20 flex flex-col  h-full gap-24 pt-20">
        {/* Slogan */}
        <div className="text-center">
          <h1 className="text-4xl  font-bold text-gray-900 dark:text-white mb-4">
            بیمه۷۶۰، مشاوره بدون دغدغه رایگان شما
          </h1>
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
