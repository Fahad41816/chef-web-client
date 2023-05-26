import React from 'react';
import style from './Home.module.css'
import chefImage from '../../assets/images/chef.png'
import Cheflist from '../chef/Cheflist';
import { useLoaderData } from 'react-router-dom';
import About from '../About/About';
import Contact from '../contact/Contact'
 

const Home = () => {


    const chefData = useLoaderData() 
     
    
    return (
       <>
         <div className={`${style.HomeBgImg}`}>
            <div className={style.shadow}>

                
                <div  className={style.chefImagediv}>
                

                     <img className={`img-fluid ${style.shefimg}`} src={chefImage} alt=""  />
                
                </div>
                <div className={`${style.heroTextDiv} text-white  `}>
                     <h1 className='display-1 fw-bold '>FOOD <span className=' display-6 fw-semibold text-primary'>can</span> </h1><br/> <h1 className='display-1 fw-bold'>MOOD<span  className='text-primary fw-semibold display-6'>change</span></h1>
                </div>

            </div>
         </div>

         <div>
                <h1 className='text-center mt-5 border'>our chef</h1> 
            <div>
                <Cheflist chef={chefData}></Cheflist>
            </div>
         </div>
         <div>
            <h1 className='text-center'> About us </h1>
            <div>
                <About></About>
            </div>
         </div>
         <div>
            <h1 className='text-center'> Contact us </h1>
            <div>
                 <Contact></Contact>
            </div>
         </div>
         
       </>
    );
};

export default Home;