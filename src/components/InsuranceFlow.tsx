import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Shield, Users, FileCheck, CreditCard } from 'lucide-react'

const steps = [
  {
    number: 1,
    title: 'انتخاب بیمه',
    description: 'انتخاب نوع بیمه مورد نیاز و مقایسه شرکت‌های بیمه',
    icon: Shield,
  },
  {
    number: 2,
    title: 'مشاوره با متخصص',
    description: 'گفتگو با مشاور بیمه برای انتخاب بهترین پوشش',
    icon: Users,
  },
  {
    number: 3,
    title: 'تأیید شرایط',
    description: 'بررسی و تأیید شرایط بیمه‌نامه',
    icon: FileCheck,
  },
  {
    number: 4,
    title: 'پرداخت و صدور',
    description: 'پرداخت آنلاین و دریافت بیمه‌نامه',
    icon: CreditCard,
  },
]

export const InsuranceFlow: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            روند خرید بیمه
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            در چهار مرحله ساده به بیمه مورد نیاز خود برسید
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <Card key={index} className="relative bg-white dark:bg-gray-800 border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 mt-4">
                    <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
