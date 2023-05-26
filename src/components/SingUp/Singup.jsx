import React, { useContext, useEffect } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { autcontext } from '../../context/Contextprovider';
 

const Singup = () => {

    const navigate = useNavigate()

    const {createUser,success,setuser,setsuccess,seterror,updateuserphotoURl, error} = useContext(autcontext)
    
    useEffect(() => {
        seterror(null)
    }, []);
    
    // create user 
    const createNewUser = (event)  => {

        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const photo = event.target.photo.value;
        console.log(name, email, password, photo)
        createUser(email, password).then(res =>{                    
            updateuserphotoURl(name, photo)  
            setsuccess("user create succesfully")
            navigate('/')
            seterror(null)        
            console.log(res.user)
        
        })       
        .catch((err => {
            setsuccess(null)
            seterror(err.message)
        }))

        

       
        

    }

   
    

    return (
    <>
    <section className='w-25 bg- mx-auto  shadow rounded p-3 my-5 pt-5'>
      
        <Form onSubmit={createNewUser} >

            <h2 className=' mb-4'>Sing up</h2>
            {success ? <Alert className='mt-1' variant="success">
                user login successfully
            </Alert> : <></>}
        
            {error ? <Alert variant='danger'>{error} </Alert>: <></>}
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control required name="name" type="name" placeholder="Enter name" />
                
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control required name="email" type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control required name="password" type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>photo url</Form.Label>
                <Form.Control required name="photo" type="text" placeholder="photo url" />
                 
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <p>Have account? <Link to={'/login'}>login</Link></p>
            <Button variant="primary" type="submit">
              sing up
            </Button>

          
        </Form>
      
        </section>   


    </>
        
    );
};

export default Singup;