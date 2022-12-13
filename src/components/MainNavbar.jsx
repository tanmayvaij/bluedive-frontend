import { Navbar } from "flowbite-react"

const MainNavbar = () => {
  return (
    <Navbar
      fluid={true}
      rounded={true}
    >
      <Navbar.Brand href="https://flowbite.com/">
        <img
          src="favicon.jpg"
          className="rounded-full mr-3 h-6 sm:h-9"
          alt="Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          BlueDive Konkan Wonders
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          href="/navbars"
          active={true}
        >
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">
          About
        </Navbar.Link>
        <Navbar.Link href="/navbars">
          Services
        </Navbar.Link>
        <Navbar.Link href="/navbars">
          Pricing
        </Navbar.Link>
        <Navbar.Link href="/navbars">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MainNavbar
