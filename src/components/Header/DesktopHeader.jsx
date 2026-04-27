import { Link } from 'react-router-dom'
import Button from '../Buttons/Button.jsx'

export default function DesktopHeader() {
  return (
    <header className="hidden md:flex justify-between items-center gap-x-1 md:px-4 lg:px-14 xl:px-17  bg-primary ">
      <Link to={'/'} className="flex justify-center items-center">
        <img src="/public/assets/Logo/HeaderLogo.png" alt="Logo" />
        <div className=" flex flex-col justify-center items-center">
          <span className="block font-Prata text-2xl">OPAL MIND</span>
          <span className="font-Prata text-base text-center">PSYCHIATRIST</span>
        </div>
      </Link>
      <div>
        <ul className="flex items-center  gap-x-8 lg:gap-x-10 font-PoppinsMedium text-lg *:transition-all *:py-1 *:border-b-2 *:border-transparent *:hover:border-[#7A643F]/80  ">
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
