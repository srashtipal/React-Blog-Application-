import { NavLink as ReactLink } from 'react-router-dom';
import {Navbar,NavbarBrand} from 'reactstrap';

const Footer=()=>{


    return(
        <div>
        <Navbar 
        color="dark"
        dark
        expand="md"
        fixed="bottom"
        
        >
          <NavbarBrand tag={ReactLink} to="/">@ 2022 MyBlogs</NavbarBrand>
          
        </Navbar>
      </div>
      
        
    );
};

export default Footer;