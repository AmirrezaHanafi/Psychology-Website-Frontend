import MenuIcon from '../Icons/MenuIcon.jsx'
import { Link } from 'react-router-dom'
import Button from '../Buttons/Button.jsx'
import { useState } from 'react'
import HomeIcon from '../Icons/HomeIcon.jsx'
import Question from '../Icons/Question.jsx'
import MedicalServiceIcon from '../Icons/MedicalServiceIcon.jsx'
import BookIcon from '../Icons/BookIcon.jsx'

export default function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-primary flex items-center justify-between px-7 py-2 md:hidden">
      <div
        onClick={() => {
          setIsMenuOpen(true)
          console.log(isMenuOpen)
        }}
      >
        <MenuIcon className="cursor-pointer sm:size-7" />
      </div>

      {/* menu mobile */}
      <div
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 bg-[#72603C] transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex h-full flex-col p-6">
          <div className="mb-8 flex flex-col items-center border-b border-white/20 pb-6">
            {/*<button*/}
            {/*  onClick={() => setIsMenuOpen(false)}*/}
            {/*  className="self-end fixed too-0 right-0 -mt-5 text-white text-2xl mb-8 cursor-pointer"*/}
            {/*>*/}
            {/*  <XIcon className={'size-10'} />*/}
            {/*</button>*/}
            <span className="font-Prata text-xl text-white">OPAL MIND</span>
            <span className="font-Prata text-sm text-white/80">PSYCHIATRIST</span>
          </div>

          <nav className="flex flex-col gap-y-6">
            <Link
              to={'/'}
              className="font-PoppinsMedium flex items-center gap-x-5 text-lg text-white transition-colors hover:text-[#D4C5A9]"
              onClick={() => setIsMenuOpen(false)}
            >
              <HomeIcon className="size-6" />
              Home
            </Link>
            <Link
              to={'/About-us'}
              className="font-PoppinsMedium flex items-center gap-x-5 text-lg text-white transition-colors hover:text-[#D4C5A9]"
              onClick={() => setIsMenuOpen(false)}
            >
              <Question className="size-6" />
              About
            </Link>
            <Link
              to={'/Services'}
              className="font-PoppinsMedium flex items-center gap-x-5 text-lg text-white transition-colors hover:text-[#D4C5A9]"
              onClick={() => setIsMenuOpen(false)}
            >
              <MedicalServiceIcon className="size-6" />
              Services
            </Link>
            <Link
              to={'/Blog'}
              className="font-PoppinsMedium flex items-center gap-x-5 text-lg text-white transition-colors hover:text-[#D4C5A9]"
              onClick={() => setIsMenuOpen(false)}
            >
              <BookIcon className="size-6" />
              Blog
            </Link>
          </nav>
          <div className="mt-auto border-t border-white/20 pt-6">
            <p className="font-Poppins mb-2 text-sm text-white/70">Contact Us</p>
            <p className="font-PoppinsMedium mb-1 text-sm text-white">+1 234 567 890</p>
            <p className="font-Poppins text-xs text-white">info@opalmind.com</p>
          </div>
        </div>
      </div>

      {/* overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <div>
        <Link to={'/'}>
          <img
            src="/assets/Logo/HeaderLogo.png"
            alt="Logo"
            className="max-h-15 sm:max-h-20"
          />
        </Link>
      </div>
      <Button>Call me</Button>
    </header>
  )
}
