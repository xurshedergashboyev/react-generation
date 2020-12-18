import styled from 'styled-components';

export const TopNavbar = styled.div `
  padding-bottom: 10.75rem;
  padding-top: 2rem;
`;

export const NavbarContainer = styled.div `
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 1330px;
`;

export const NavbarItems = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarRight = styled.div `
  width: 9.75rem;
  color: #202020;
  &:hover {
    color: #ffbf2b;
  };
`;

export const NavbarLeft = styled.nav `
  font-size: 1.25rem;
  display: flex;
  justify-content: space-between;
  line-height: 1.33;
`;

export const NavbarLeftItems = styled.a `
  position: relative;
  margin-left: 2rem;
  display: block;
  &:after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    border-radius: 1px;
    background-color: #ffbf2b;
    left: 0;
    bottom: -2px;
    position: absolute;
    transition: width .25s ease;
  }
  &:hover {
    border-bottom: 2px solid #ffbf2b;
    transition: color .5s ease;
  }
`;