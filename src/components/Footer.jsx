import { Link } from 'react-router-dom'
import Instagram from './Icons/Instagram.jsx'
import Linkedin from './Icons/Linkedin.jsx'
import WhatsApp from './Icons/WhatsApp.jsx'
import Telegram from './Icons/Telegram.jsx'

export default function Footer() {
  return (
    <footer className="container my-8.5 mb-5 flex items-center justify-between rounded-[40px] bg-[#635741]/10 pr-11 pb-5 pl-13.75 backdrop-blur-md">
      <div className="flex flex-col items-center">
        <Link to={'/'} className="mt-5 flex flex-col items-center justify-center">
          <img src="/assets/Logo/footerLogo.png" alt="Logo" />
          <div className="flex flex-col items-center justify-center">
            <span className="font-Prata block text-2xl">OPAL MIND</span>
            <span className="font-Prata block text-center text-base">PSYCHIATRIST</span>
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-between gap-x-25">
        <div className="gap-y-2">
          <h4 className="font-PoppinsBold text-lg">About</h4>
          <ul className="list-disc gap-y-2">
            <li>
              <Link to={'/services'} className="text-lg">
                About Us
              </Link>
            </li>
            <li>
              <Link to={'/services'} className="text-lg">
                Meet the Provider
              </Link>
            </li>
            <li>
              <Link to={'/services'} className="text-lg">
                Our Approach
              </Link>
            </li>
            <li>
              <Link to={'/services'} className="text-lg">
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-PoppinsBold text-lg">Services</h4>
          <ul className="list-disc gap-y-2">
            <li>
              <Link to={'/services'} className="text-lg">
                ADHD Evaluation{' '}
              </Link>
            </li>
            <li>
              <Link to={'/services'} className="text-lg">
                Anxiety & Depression Treatment{' '}
              </Link>
            </li>
            <li>
              <Link to={'/services'} className="text-lg">
                Medication Management{' '}
              </Link>
            </li>
            <li>
              <Link to={'/services'} className="text-lg">
                Telehealtth AppointmentS
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-between gap-x-7.5">
        <div className="flex size-[60px] cursor-pointer items-center justify-center rounded-full bg-[#7A643F]/80 text-white transition-all hover:scale-105 hover:bg-[#7A643F]">
          <Instagram />
        </div>
        <div className="flex size-[60px] cursor-pointer items-center justify-center rounded-full bg-[#7A643F]/80 text-white transition-all hover:scale-105 hover:bg-[#7A643F]">
          <Linkedin />
        </div>
        <div className="flex size-[60px] cursor-pointer items-center justify-center rounded-full bg-[#7A643F]/80 text-white transition-all hover:scale-105 hover:bg-[#7A643F]">
          <WhatsApp />
        </div>
        <div className="flex size-[60px] cursor-pointer items-center justify-center rounded-full bg-[#7A643F]/80 text-white transition-all hover:scale-105 hover:bg-[#7A643F]">
          <Telegram />
        </div>
      </div>
    </footer>
  )
}
