import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import blogs from '../../../Data/blogs.js'
import BlogCart from './BlogCart/BlogCart.jsx'

export default function Blogs() {
  return (
    <div className="relative container w-full rounded-2xl bg-white/10 pt-8">
      <h2 className="font-PoppinsBold mb-15.5 block text-xl text-black md:text-2xl">
        Blogs
      </h2>
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
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
          className="blogs-swiper mx-[77px]"
        >
          {blogs.map(blog => (
            <SwiperSlide key={blog.id} className="pb-16">
              <BlogCart blog={blog} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
