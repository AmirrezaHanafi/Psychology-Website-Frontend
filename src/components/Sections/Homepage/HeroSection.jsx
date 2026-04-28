export default function HeroSection() {
  return (
    <>
      {/*Desktop*/}
      <div className="bg-primary relative hidden overflow-hidden md:block">
        <div>
          <span className="absolute top-1/2 -right-25 h-full -translate-y-1/2 rounded-full bg-[#72603C]/60 blur-[100px] md:w-150 xl:w-200"></span>
          <div className="relative z-20 container flex h-full min-h-screen flex-col items-center justify-center gap-8 px-4 md:flex-row md:justify-between md:gap-0">
            <div className="absolute right-0 bottom-30 left-0 z-30 mx-auto rounded-4xl bg-white/50 backdrop-blur-[6px] lg:bottom-43 xl:bottom-10">
              <div className="font-PoppinsBold *:hover:bg-primary my-5 flex items-center justify-around text-lg *:transition-colors lg:mx-25 lg:text-xl">
                <div className="cursor-pointer rounded-lg px-2.5 py-2">ADHD</div>
                <div className="cursor-pointer rounded-lg px-2.5 py-2">PTSD</div>
                <div className="cursor-pointer rounded-lg px-2.5 py-2">C-PTSD</div>
                <div className="cursor-pointer rounded-lg px-2.5 py-2">OCD</div>
                <div className="cursor-pointer rounded-lg px-2.5 py-2">
                  Social Anxiety
                </div>
                <div className="cursor-pointer rounded-lg px-2.5 py-2">Anxiety </div>
              </div>
            </div>
            <div className="">
              <div className="font-Prata md:text-[42px] lg:text-[50px] xl:text-[64px]">
                <span className="block">Think, Feel, Thrive</span>
                <span className="block">Your Guide to Mental</span>
                <span className="block"> Wellness</span>
              </div>
              <div className="font-PoppinsLight mt-10 md:text-sm lg:text-base">
                <span className="block">
                  Take the first step toward the life you truly deserve
                </span>
                <span className="block">
                  a life where peace feels natural, relationships feel safe, and your
                </span>
                <span className="block">own voice finally matters.</span>
                <span className="block">
                  It’s not a fantasy; it’s the version of you that’s been waiting for
                  permission to begin.
                </span>
              </div>
            </div>
            <div className="relative md:size-[500px] lg:size-[600px] xl:size-[700px]">
              <div className="circle-white"></div>
              <img
                src="/assets/women/homepage-woman2.png"
                alt="doctor"
                className="relative z-20 -mr-50 h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
      {/*Mobile*/}
      <div className="relative container flex min-h-full flex-col items-center pb-20 md:hidden">
        <span className="absolute top-1/2 right-0 h-full w-[600px] -translate-y-1/2 rounded-full bg-[#72603C]/50 blur-[100px]"></span>
        <div className="absolute right-0 bottom-0 left-0 z-30 mx-auto rounded-4xl bg-white/50 backdrop-blur-[6px]">
          <div className="font-PoppinsBold *:hover:bg-primary my-2 flex items-center justify-around gap-x-1 text-base *:transition-colors">
            <div className="cursor-pointer rounded-lg px-1.5 py-1">ADHD</div>
            <div className="cursor-pointer rounded-lg px-1.5 py-1">PTSD</div>
            <div className="cursor-pointer rounded-lg px-1.5 py-1">PTSD</div>
            <div className="cursor-pointer rounded-lg px-1.5 py-1">OCD</div>
            <div className="cursor-pointer rounded-lg px-1.5 py-1">Anx</div>
            <div className="cursor-pointer rounded-lg px-1.5 py-1">Aty </div>
          </div>
        </div>
        <div className="relative mt-4 size-[400px]">
          <div className="circle-white"></div>
          <img
            src="/assets/women/homepage-woman2.png"
            alt="doctor"
            className="relative z-20 -mr-50 h-auto w-full"
          />
        </div>
        <div className="z-10">
          <div className="font-Prata z-10 mt-15 space-y-4 text-3xl text-black sm:text-[39px]">
            <span className="block sm:hidden">
              Think, Feel, Thrive,Your Guide to MentalWellness{' '}
            </span>
            <span className="hidden sm:block">Think, Feel, Thrive, </span>
            <span className="hidden sm:block">Your Guide to MentalWellness </span>
          </div>
          <div className="font-PoppinsLight mt-2">
            <span className="block">
              Take the first step toward the life you truly deserve
            </span>
            <span className="block">
              a life where peace feels natural, relationships feel safe, and your
            </span>
            <span className="block">own voice finally matters.</span>
            <span className="block">
              It’s not a fantasy; it’s the version of you that’s been waiting for
              permission to begin.
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
