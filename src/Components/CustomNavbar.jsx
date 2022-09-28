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
import { useState } from 'react';


const CustomNavbar=()=>{

  const [isOpen,setIsOpen]=useState(false);

    return(
        <div>
        <Navbar 
        color="dark"
        dark
        expand="md"
        fixed=" " >
          <NavbarBrand tag={ReactLink} to="/">MyBlogs</NavbarBrand>
          <NavbarToggler onClick={()=>setIsOpen(!isOpen)} />
          <Collapse  isOpen={isOpen} navbar>
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
                <DropdownMenu >
                  <DropdownItem tag={ReactLink} to="/Services">Contact Us</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="https://github.com/srashtipal/React-Blogging-Application-">Github</DropdownItem>
                  <DropdownItem href="https://www.facebook.com/">Facebook</DropdownItem>
                  <DropdownItem href="https://www.instagram.com/accounts/login/">Instagram</DropdownItem>
                  <DropdownItem href="https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Ffeed%2F&trk=login_reg_redirect">LinkedIn</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <Nav navbar>
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