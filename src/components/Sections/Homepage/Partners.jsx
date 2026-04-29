import partnerLogoUrlogo from '../../../Data/partner-logo-url.js'
import ArrowRight from '../../Icons/ArrowRight.jsx'
import { useState } from 'react'

const faqData = [
  {
    id: 1,
    question: 'What conditions do you treat?',
    answer:
      'We provide care for ADHD, anxiety, depression, mood disorders, trauma-related conditions, and stress-related concerns.'
  },
  {
    id: 2,
    question: 'How does online therapy work?',
    answer:
      'Online therapy sessions are conducted via secure video calls at scheduled times with your therapist.'
  },
  {
    id: 3,
    question: 'Do you accept insurance?',
    answer:
      'Yes, we work with most major insurance providers. Check our partners list above.'
  },
  {
    id: 4,
    question: 'How long are sessions?',
    answer: 'Standard therapy sessions are 50 minutes long.'
  }
]

export default function Partners() {
  const [openId, setOpenId] = useState(null)

  const toggleFAQ = id => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <div className="container flex flex-col items-center justify-between gap-10 rounded-2xl bg-white/10 pt-11 md:flex-row md:items-start">
      <div className="flex-1">
        <h2 className="font-PoppinsBold text-xl md:text-2xl">Insurance partners</h2>
        <div className="mt-12 grid grid-cols-2 gap-10 md:mt-18.75 xl:grid-cols-3">
          {partnerLogoUrlogo.map((item, index) => (
            <img
              key={item.id}
              src={item.url}
              alt={item.id}
              className={`${index === 8 && 'hidden xl:block'} w-40 md:w-auto`}
            />
          ))}
        </div>
      </div>
      <div className="mb-6 rounded-4xl bg-[#C2B496] pb-6">
        <div className="w-full max-w-[500px] px-7 pt-9 md:max-w-[400px] md:px-8 lg:max-w-[550px] lg:px-11 lg:pt-8.5 xl:max-w-[654px]">
          <h2 className="font-PoppinsBold mb-4.5 text-xl md:text-2xl">FAQ</h2>
          <div className="space-y-6 md:space-y-3 lg:space-y-5">
            {faqData.map(item => (
              <div key={item.id}>
                <div
                  onClick={() => toggleFAQ(item.id)}
                  className="flex cursor-pointer items-center justify-between rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-base backdrop-blur-md transition-colors hover:bg-white/20 md:px-4 md:py-2 lg:px-8 lg:py-3 lg:text-lg"
                >
                  <span>{item.question}</span>
                  <ArrowRight
                    className={`transition-transform duration-300 md:size-3 lg:size-auto ${openId === item.id ? 'rotate-90' : ''}`}
                  />
                </div>
                <div
                  className={`mt-2 overflow-hidden rounded-lg text-sm shadow-2xl transition-all duration-300 lg:text-base ${
                    openId === item.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 py-4 text-sm">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
