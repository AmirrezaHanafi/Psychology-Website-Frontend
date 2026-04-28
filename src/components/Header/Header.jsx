import DesktopHeader from './DesktopHeader.jsx'
import MobileHeader from './MobileHeader.jsx'

export default function Header() {
  return (
    <div className="sticky top-0 z-50">
      <DesktopHeader />
      <MobileHeader />
    </div>
  )
}
