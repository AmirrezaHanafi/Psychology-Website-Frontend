import Button from '../../Buttons/Button.jsx'

export default function About() {
  return (
    <div className="">
      <div className="container flex flex-col items-center justify-between gap-x-2 rounded-2xl bg-white/10 pt-8 md:flex-row md:items-start lg:pt-15 lg:pb-16.25">
        <div className="block self-start md:hidden">
          <h2 className="font-PoppinsExtraBold mb-8 text-2xl">About Me</h2>
        </div>
        <div className="order-last md:order-first">
          <h2 className="font-PoppinsExtraBold hidden text-2xl md:block">About Me</h2>
          <p className="font-Poppins mt-10 max-w-[450px] md:mt-2 md:text-sm lg:max-w-[710px] lg:text-base">
            Ninva Baba, PMHNP-BC and founder of Opal Mind Psychiatry, began her journey
            after immigrating to the United States and rebuilding her life from the ground
            up. Her years as an ICU nurse, along with caring for a mother struggling with
            depression and a father battling cancer, shaped her deep understanding of how
            emotional, physical, and personal histories intertwine in healing. Now a
            mother of two, she draws even more purpose and compassion from her family. Her
            approach is warm, integrative, and rooted in functional mental health —
            looking beyond symptoms to uncover the biological, emotional, environmental,
            and lifestyle factors that help patients find clarity and long-lasting
            healing.
          </p>
          <Button className="mt-8 lg:mt-12.5">About me</Button>
        </div>
        <div className="">
          <img src="/assets/women/woman-about-home.png" alt="woman" />
        </div>
      </div>
    </div>
  )
}
