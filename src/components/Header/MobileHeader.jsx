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
    <header className="md:hidden flex justify-between items-center py-2 px-7 bg-primary">
      <div
        onClick={() => {
          setIsMenuOpen(true)
          console.log(isMenuOpen)
        }}
      >
        <MenuIcon className="sm:size-7 cursor-pointer" />
      </div>

      {/* menu mobile */}
      <div
        className={`fixed top-0 bottom-0 left-0 w-64 bg-[#72603C] transition-transform duration-300 z-50 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex flex-col items-center mb-8 pb-6 border-b border-white/20">
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
              className=" flex items-center gap-x-5 text-white font-PoppinsMedium text-lg hover:text-[#D4C5A9] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <HomeIcon className="size-6" />
              Home
            </Link>
            <Link
              to={'/About-us'}
              className=" flex items-center gap-x-5 text-white font-PoppinsMedium text-lg hover:text-[#D4C5A9] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Question className="size-6" />
              About
            </Link>
            <Link
              to={'/Services'}
              className=" flex items-center gap-x-5 text-white font-PoppinsMedium text-lg hover:text-[#D4C5A9] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <MedicalServiceIcon className="size-6" />
              Services
            </Link>
            <Link
              to={'/Blog'}
              className=" flex items-center gap-x-5 text-white font-PoppinsMedium text-lg hover:text-[#D4C5A9] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <BookIcon className="size-6" />
              Blog
            </Link>
          </nav>
          <div className="mt-auto pt-6 border-t border-white/20">
            <p className="text-white/70 font-Poppins text-sm mb-2">Contact Us</p>
            <p className="text-white font-PoppinsMedium text-sm mb-1">+1 234 567 890</p>
            <p className="text-white font-Poppins text-xs">info@opalmind.com</p>
          </div>
        </div>
      </div>

      {/* overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <div>
        <Link to={'/'}>
          <img
            src="/public/assets/Logo/HeaderLogo.png"
            alt="Logo"
            className="max-h-15 sm:max-h-20"
          />
        </Link>
      </div>
      <Button>Call me</Button>
    </header>
  )
}
