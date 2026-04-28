import HeroSection from '../components/Sections/Homepage/HeroSection.jsx'
import About from '../components/Sections/Homepage/About.jsx'
import Services from '../components/Sections/Homepage/Services.jsx'
import Partners from '../components/Sections/Homepage/Partners.jsx'

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
      <section className="my-25 max-h-[620px]">
        <Partners />
      </section>
    </div>
  )
}
