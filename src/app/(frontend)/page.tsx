import { HeroBlock } from '@/blocks/HeroBlock/Component'
import { InsuranceFlow } from '@/components/InsuranceFlow'
import { FAQAccordion } from '@/components/FAQAccordion'
import React from 'react'

// Static content sections
const ContentImageSection = ({ imageLeft = true, title, description, imageSrc }) => (
  <section className={`py-20 ${imageLeft ? 'bg-white' : 'bg-gray-50 dark:bg-gray-900'}`}>
    <div className="container mx-auto px-4">
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${imageLeft ? '' : 'lg:flex-row-reverse'}`}
      >
        <div className={`${imageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
        </div>
        <div className={`${imageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
          <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-80 flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400">تصویر {title}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <HeroBlock
        slogan="بیمه‌نامه خود را آنلاین دریافت کنید"
        cards={[
          { title: 'بیمه خودرو', description: 'پوشش کامل برای وسیله نقلیه شما', icon: '🚗' },
          { title: 'بیمه زندگی', description: 'آینده خانواده خود را بیمه کنید', icon: '👨‍👩‍👧‍👦' },
          { title: 'بیمه آتش‌سوزی', description: 'محافظت از دارایی‌های شما', icon: '🏠' },
          { title: 'بیمه مسئولیت', description: 'پوشش مسئولیت مدنی شما', icon: '⚖️' },
          { title: 'بیمه مسافرتی', description: 'سفر ایمن با پوشش کامل', icon: '✈️' },
          { title: 'بیمه درمان', description: 'پوشش هزینه‌های پزشکی', icon: '🏥' },
          { title: 'بیمه باربری', description: 'حمل امن بار و کالا', icon: '📦' },
          { title: 'بیمه مهندسی', description: 'پوشش پروژه‌های ساختمانی', icon: '🏗️' },
        ]}
        blockType="heroBlock"
      />

      {/* Static Content Sections */}
      <ContentImageSection
        title="مشاوره رایگان بیمه"
        description="با کارشناسان ما تماس بگیرید و از مشاوره رایگان در انتخاب بهترین بیمه‌نامه بهره‌مند شوید. ما با مقایسه شرکت‌های بیمه مختلف، بهترین گزینه را برای شما پیشنهاد می‌دهیم."
        imageSrc="/images/consultation.jpg"
      />

      <ContentImageSection
        imageLeft={false}
        title="پرداخت آنلاین امن"
        description="با استفاده از درگاه پرداخت امن ما، بیمه‌نامه خود را به صورت آنلاین خریداری کنید. تمامی تراکنش‌ها با بالاترین امنیت انجام می‌شود."
        imageSrc="/images/payment.jpg"
      />

      {/* Insurance Flow Section */}
      <InsuranceFlow />

      {/* FAQ Section */}
      <FAQAccordion />
    </div>
  )
}
