import styled from 'styled-components'
import {
  NavLink as NavLinkBootstrap,
  NavItem as NavItemBootstrap,
} from 'reactstrap'

export const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  padding: 1rem;
  background-color: ${(props) => props.theme['white-default']};

  &.is__sticky {
    width: 100%;
    left: 0;
    z-index: 2000;
    box-shadow: 0 2px 24px 0 rgb(0 0 0 / 8%);

    animation: 500ms ease-in-out 0s normal none 1 running fadeInDown;
    transition: 0.2s ease-in-out;
  }
`
export const NavLink = styled(NavLinkBootstrap)`
  cursor: pointer;
`

export const NavItem = styled(NavItemBootstrap)``
