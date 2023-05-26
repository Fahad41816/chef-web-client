import React, { useContext, useState } from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { autcontext } from '../../context/Contextprovider';
import style from './Navbar.module.css'
 


const Nabvar = () => {

  const {user, singoutuser } = useContext(autcontext)
  const [hover, sethover] = useState(false);

  const mouseover = () => {
    sethover(true)
  }

  const mouseleave = () => {
    sethover(false)
  }

   

  const logouthandeler = () => {
    singoutuser()
  }

    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">NIF<span className='fw-bold text-primary'>Chef</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto mx-auto">
           <Link  className='text-decoration-none' to={"/"}> <Nav  className='mx-4   text-primary'>Home</Nav></Link>
           {/* <Link  className='text-decoration-none' to={'/blog'}><Nav className='mx-4 text-primary'>Blog</Nav></Link> */}
           
             
          </Nav>
          <Nav>            
             {user ? <>
              <button onClick={logouthandeler} className="btn  fw-semibold btn-info">log out</button>
              <div onMouseEnter={mouseover} onMouseLeave={mouseleave} className=''>
                <img  className={`${style.userpic}`} src={user.photoURL} alt="" />
                <span className={`fw-bold ${hover ? " " : "visually-hidden"}   text-white ms-1`}>{user.displayName}</span>
              </div>
             </>  :  <Link to={'/login'}> <button className="btn   fw-semibold btn-info">log in</button></Link> }
          </Nav>
        </Navbar.Collapse>
      </Container>

      
    </Navbar>
    );
};

export default Nabvar;