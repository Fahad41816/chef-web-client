import React, { useContext } from 'react';
import { autcontext } from '../context/Contextprovider';
import { Navigate } from 'react-router-dom';
import { ProgressBar } from 'react-bootstrap';

const privateroute = ({children}) => {

   const {user, loader}  = useContext(autcontext)
   
   if(loader){
       
       return(
        <progress className="progress progress-error w-56" value="0" max="100"></progress>
        
       )
        
   }

    if(user){
        return children
    }

    return <Navigate to="/login" replace={true} />

};

export default privateroute;