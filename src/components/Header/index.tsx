import { useContext, useEffect } from 'react'
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavItem,
  NavLink,
} from 'reactstrap'
import { NavContext } from '../../contexts/NavContext'
import { headerSticky } from '../../utils/headerSticky'
import { HeaderContainer } from './Header.styles'

function Header() {
  const { activeLinkId } = useContext(NavContext)

  const navLinks = ['Home', 'About', 'Services', 'Projects', 'Team', 'News']

  useEffect(() => {
    window.addEventListener('scroll', headerSticky)
    return () => {
      window.removeEventListener('scroll', headerSticky)
    }
  })

  function handleClickLogo() {
    document
      .getElementById('homeSection')
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  function renderNavLink(content: string) {
    const scrollToId = `${content.toLowerCase()}Section`

    const handleClickNav = () => {
      document
        .getElementById(scrollToId)
        ?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
      <Nav navbar key={content}>
        <NavItem>
          <NavLink
            onClick={handleClickNav}
            className={activeLinkId === content ? 'active' : ''}
          >
            {content}
          </NavLink>
        </NavItem>
      </Nav>
    )
  }

  return (
    <HeaderContainer>
      <div className={'container-fluid'}>
        <Navbar>
          <NavbarBrand onClick={handleClickLogo}>Smooth-scrolling</NavbarBrand>
          {navLinks.map((nav) => renderNavLink(nav))}
          <NavbarText>Simple Text</NavbarText>
        </Navbar>
      </div>
    </HeaderContainer>
  )
}

export default Header
