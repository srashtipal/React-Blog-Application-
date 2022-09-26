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
  } from 'reactstrap';
  import { NavLink as ReactLink } from 'react-router-dom';


const CustomNavbar=()=>{
    return(
        <div>
        <Navbar 
        color="dark"
        dark
        expand="md"
        fixed=" ">
          <NavbarBrand tag={ReactLink} to="/">MyBlogs</NavbarBrand>
          <NavbarToggler  />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
            <NavItem>
                <NavLink tag={ReactLink} to="/">Home</NavLink>
              </NavItem> 
              <NavItem>
                <NavLink tag={ReactLink} to="/about">About</NavLink>
              </NavItem> 
              <UncontrolledDropdown inNavbar nav>
                <DropdownToggle caret nav>
                  More
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag={ReactLink} to="/Services">Contact Us</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag={ReactLink} to="https://github.com/">Github</DropdownItem>
                  <DropdownItem>Facebook</DropdownItem>
                  <DropdownItem>Instagram</DropdownItem>
                  <DropdownItem>LinkedIn</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <Nav Navbar>
            <NavItem>
                <NavLink tag={ReactLink} to="/login">
                  Login
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={ReactLink} to="/signup">
                  Singup
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
}

export default CustomNavbar;