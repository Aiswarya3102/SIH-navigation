import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
    /*const Navbar = () => {
      return (
        <div className="navBar">
            <ul className="navBarList">
               <Link to="/home" ><li className="navList">Home</li></Link>
               <Link to="/about" ><li className="navList">About</li></Link>
               <Link to="/contact" ><li className="navList">Contact</li></Link>
               <Link to="/events" ><li className="navList">Events</li></Link>
               <Link to="/login" ><li className="navList">Login</li></Link>
            </ul>
        </div>
      );
    };*/
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
        <img
              src='https://www.creditboss.in/wp-content/uploads/2020/10/Process-of-funding.jpg'
              height='30'
              alt=''
              loading='lazy'
            />
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact Us
          </NavLink>
          <NavLink to="/events" activeStyle>
            Events
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Sign Up/Sing In
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;


