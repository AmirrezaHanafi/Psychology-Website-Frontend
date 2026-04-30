'use client'
import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import testimonials from '../../../Data/testimonials.js'
import ArrowRight from '../../Icons/ArrowRight.jsx'

export default function Testimonials() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  return (
    <div className="relative container rounded-2xl bg-[#D4C8AF] px-25 py-8">
      <button
        ref={prevRef}
        disabled={isBeginning}
        className="absolute top-1/2 left-5 z-30 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#7A643F]/80 p-3 text-white shadow-lg transition-colors hover:bg-[#7A643F] disabled:cursor-not-allowed disabled:opacity-30 md:size-12 lg:size-14"
      >
        <ArrowRight className="size-6 rotate-180" />
      </button>

      <button
        disabled={isEnd}
        ref={nextRef}
        className="absolute top-1/2 right-5 z-30 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#7A643F]/80 p-3 text-white shadow-lg transition-colors hover:bg-[#7A643F] disabled:cursor-not-allowed disabled:opacity-30 md:size-12 lg:size-14"
      >
        <ArrowRight className="size-6" />
      </button>

      {/* Radial Gradient Overlay */}
      <div
        className="absolute inset-0 z-0 rounded-2xl opacity-53"
        style={{
          background: 'radial-gradient(100% 100% at 0% 0%, #A38E63 0%, #D4C8AF 90%)'
        }}
      />

      <div className="relative z-10">
        <h2 className="font-PoppinsBold mx-auto my-8 block text-center text-xl text-black md:text-2xl">
          Testimonials
        </h2>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            // navigation={{
            //   prevEl: prevRef.current,
            //   nextEl: nextRef.current
            // }}
            onBeforeInit={swiper => {
              swiper.params.navigation.prevEl = prevRef.current
              swiper.params.navigation.nextEl = nextRef.current

              swiper.navigation.init()
              swiper.navigation.update()
            }}
            onSlideChange={swiper => {
              setIsBeginning(swiper.isBeginning)
              setIsEnd(swiper.isEnd)
            }}
            pagination={{
              clickable: true,
              bulletClass: 'custom-bullet',
              bulletActiveClass: 'custom-bullet-active',
              renderBullet: (index, className) => {
                return `<span class="${className}"></span>`
              }
            }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 3 }
            }}
            className="testimonials-swiper"
          >
            {testimonials.map(testimonial => (
              <SwiperSlide key={testimonial.id} className="pb-16">
                <div className="flex min-h-[190px] flex-col items-start justify-around rounded-[30px] bg-white p-3 shadow-lg md:min-h-[235px] md:p-6 lg:min-h-[210px]">
                  <p className="font-PoppinsLight mb-4 text-sm text-black md:text-base">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <span className="font-PoppinsMedium text-sm md:text-base">
                      {testimonial.name}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}
