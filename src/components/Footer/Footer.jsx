import React from 'react';
import { Link } from 'react-router-dom';
 
 
 
 
const Footer = () => {
    return (
        <div className='w-100 d-flex text-white align-content-center justify-content-lg-around  bg-dark  p-4'>
             <div>
                 
                 <h1><Link className='text-decoration-none' href="/"><span className='text-white'>NIF</span><span className='fw-bold text-primary'>Chef</span> </Link></h1>
                 
                 <div className='d-flex gap-3 align-items-center '>
                    <div>
                    <i className="fa fa-facebook text-white"></i>
                    </div>
                    <i className="fa fa-instagram text-white"></i>
                    <i className="fa fa-twitter text-white"></i>
                    <i className="fa fa-youtube text-white"></i>
                   
                 </div>
             </div>
             <div>
                <p className='fw-bold'>Support</p>
                <p>Contact us</p>
                <p>Downloads</p>
                <p>Locate chef</p>
                <p>Chef booking</p>


             </div>
             <div>
                <h2>your email...</h2>
                <input type="email" placeholder='email...'  className='rounded p-2 w-100' />
                <button className='mt-4 btn btn-primary'>submit</button>
             </div>
              
        </div>
    );
};

export default Footer;