import React from 'react'

const faqs = [
  {
    question: 'چگونه بیمه‌نامه مناسب خود را انتخاب کنم؟',
    answer:
      'با کارشناسان ما تماس بگیرید تا بر اساس نیازهای شما، بهترین بیمه‌نامه را پیشنهاد دهیم. ما تمامی شرکت‌های بیمه را مقایسه می‌کنیم.',
  },
  {
    question: 'آیا پرداخت آنلاین امن است؟',
    answer:
      'بله، تمامی پرداخت‌ها از طریق درگاه‌های امن بانکی انجام می‌شود و اطلاعات شما محافظت می‌شود.',
  },
  {
    question: 'چه مدارکی برای خرید بیمه نیاز است؟',
    answer:
      'برای هر نوع بیمه، مدارک متفاوتی نیاز است. کارشناسان ما پس از مشاوره، لیست دقیق مدارک را به شما اعلام می‌کنند.',
  },
  {
    question: 'آیا امکان مقایسه قیمت وجود دارد؟',
    answer: 'بله، ما امکان مقایسه قیمت و پوشش تمامی شرکت‌های بیمه معتبر را فراهم کرده‌ایم.',
  },
  {
    question: 'چگونه با شما تماس بگیرم؟',
    answer: 'از طریق شماره ۰۹۲۱۹۸۷۶۵۴۳ در واتساپ یا تماس مستقیم با ما در ارتباط باشید.',
  },
]

export const FAQAccordion: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            سؤالات متداول
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            پاسخ سؤالات رایج درباره بیمه و خدمات ما
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-gray-50 dark:bg-gray-700 rounded-lg p-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            >
              <summary className="font-semibold text-gray-900 dark:text-white text-lg flex justify-between items-center">
                {faq.question}
                <span className="text-blue-600 dark:text-blue-400 group-open:rotate-180 transition-transform ml-4">
                  ▼
                </span>
              </summary>
              <p className="text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
