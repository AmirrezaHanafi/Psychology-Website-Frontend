import Button from './Buttons/Button.jsx'

export default function Header() {
  return (
    <header className="flex justify-between items-center px-17 py-12.5 bg-primary ">
      <div>logo with type</div>
      <div>nav</div>
      <Button>Call me</Button>
    </header>
  )
}
