import { cn } from '@/utilities/ui'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import type { HeroBlock as HeroBlockProps } from '@/payload-types'

export const HeroBlock: React.FC<HeroBlockProps> = (props) => {
  const { slogan, cards } = props

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        {/* Slogan */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            {slogan || 'Your Insurance Journey Starts Here'}
          </h1>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {cards &&
            cards.map((card, index) => (
              <Card
                key={index}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader className="text-center pb-2">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">{card.icon || '⚡'}</span>
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                    {card.title || `Card ${index + 1}`}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-center text-gray-600 dark:text-gray-300">
                    {card.description || 'Description for this feature'}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </section>
  )
}
