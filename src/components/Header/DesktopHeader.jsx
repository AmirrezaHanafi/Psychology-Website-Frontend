import { Link } from 'react-router-dom'
import Button from '../Buttons/Button.jsx'

export default function DesktopHeader() {
  return (
    <header className="bg-primary sticky top-20 right-0 left-0 z-50 mx-auto mt-7 hidden h-24 w-[98%] items-center justify-between rounded-3xl px-5 py-0 backdrop-blur-[6px] md:flex lg:w-[96%] lg:px-10 lg:py-5">
      <Link to={'/'} className="mt-5 flex items-center justify-center">
        <img src="/assets/Logo/HeaderLogo.png" alt="Logo" />
        <div className="flex flex-col items-center justify-center">
          <span className="font-Prata block text-2xl">OPAL MIND</span>
          <span className="font-Prata text-center text-base">PSYCHIATRIST</span>
        </div>
      </Link>
      <div>
        <ul className="font-PoppinsMedium flex items-center gap-x-8 text-lg *:border-b-2 *:border-transparent *:py-1 *:transition-all *:hover:border-[#7A643F]/80 lg:gap-x-10">
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/About-us'}>About</Link>
          </li>
          <li>
            <Link to={'/Services'}>Services</Link>
          </li>
          <li>
            <Link to={'/Blog'}>Blog</Link>
          </li>
        </ul>
      </div>
      <Button>Call me</Button>
    </header>
  )
}
