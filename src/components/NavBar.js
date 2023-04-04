import { Navbar, Container, Nav } from "react-bootstrap"
import { useState, useEffect } from "react"
import logo from "../assets/companyimages/logo_no_bg.png"
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon2 from "../assets/img/nav-icon2.svg"
import navIcon3 from "../assets/img/nav-icon3.svg"

export const NavbarHeader = () =>{
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true)
            }
            else{
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    },[])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    
    }

    return (    
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
    <Container>
      <Navbar.Brand >
      <a href="#home"> <img src={logo} alt="Logo" /></a></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="#casasdemadeira" className={activeLink === 'casasdemadeira' ? 'active navbar-link' : 'navbar-link'} onClick={() =>onUpdateActiveLink('casasdemadeira')}>Bungalows</Nav.Link>
            <Nav.Link href="#lenha" className={activeLink === 'lenha' ? 'active navbar-link' : 'navbar-link'} onClick={() =>onUpdateActiveLink('lenha')}>Lenha</Nav.Link>
            <Nav.Link href="#jardinagem" className={activeLink === 'jardinagem' ? 'active navbar-link' : 'navbar-link'} onClick={() =>onUpdateActiveLink('jardinagem')}>Jardinagem</Nav.Link>
          <Nav.Link href="#contactos" className={activeLink === 'contactos' ? 'active navbar-link' : 'navbar-link'} onClick={() =>onUpdateActiveLink('contactos')}>Contactos</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
   )
}