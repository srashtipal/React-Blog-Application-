import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
  } from 'reactstrap';

const CustomNavbar=()=>{
    return(
        <div>
        <Navbar 
        color="dark"
        dark
        expand="md"
        fixed=" ">
          <NavbarBrand >MyBlogs</NavbarBrand>
          <NavbarToggler  />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
            <NavItem>
                <NavLink >Home</NavLink>
              </NavItem> 
              <NavItem>
                <NavLink >About</NavLink>
              </NavItem> 
              <UncontrolledDropdown inNavbar nav>
                <DropdownToggle caret nav>
                  More
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem >Contact Us</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Youtube</DropdownItem>
                  <DropdownItem>Facebook</DropdownItem>
                  <DropdownItem>Instagram</DropdownItem>
                  <DropdownItem>LinkedIn</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
}

export default CustomNavbar;