import HeroSection from '../components/Sections/Homepage/HeroSection.jsx'
import About from '../components/Sections/Homepage/About.jsx'
import Services from '../components/Sections/Homepage/Services.jsx'
import Partners from '../components/Sections/Homepage/Partners.jsx'
import Testimonials from '../components/Sections/Homepage/Testimonials.jsx'
import Blogs from '../components/Sections/Homepage/Blogs.jsx'

export default function HomePage() {
  return (
    <div className="bg-primary">
      {/*Hero section*/}
      <section className="">
        <HeroSection />
      </section>
      <section className="my-25">
        <About />
      </section>
      <section>
        <Services />
      </section>
      <section className="my-25">
        <Partners />
      </section>
      <section className="my-25">
        <Testimonials />
      </section>
      <section>
        <Blogs />
      </section>
    </div>
  )
}
