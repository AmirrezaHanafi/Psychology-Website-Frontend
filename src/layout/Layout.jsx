import Header from '../components/Header/Header.jsx'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer.jsx'

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
