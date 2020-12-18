import React from 'react';
import { TopNavbar, NavbarContainer, NavbarItems, NavbarLeft, NavbarLeftItems, NavbarRight} from "./style";

const Navbar = () => {
  return (
      <TopNavbar>
        <NavbarContainer>
          <NavbarItems>
            <NavbarRight>
              Hello
            </NavbarRight>
            <NavbarLeft>
              <NavbarLeftItems>
                blog
              </NavbarLeftItems>
              <NavbarLeftItems>
                menu
              </NavbarLeftItems>
              <NavbarLeftItems>
                settings
              </NavbarLeftItems>
              <NavbarLeftItems>
                contact
              </NavbarLeftItems>
              <NavbarLeftItems>
                work
              </NavbarLeftItems>
            </NavbarLeft>
          </NavbarItems>
        </NavbarContainer>
      </TopNavbar>
  );
}

export default Navbar;