import React, { useContext } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { autcontext } from '../../context/Contextprovider';

 

const Login = () => {
    
    const navigate = useNavigate()

    const {loginUser,githubLogin,setloader,success,setsuccess, error, seterror, Googlelogin} = useContext(autcontext)

    const loginuser = ( event) => {
        event.preventDefault()
        const email =  event.target.email.value;
        const password =  event.target.password.value;
        loginUser(email, password).then(() => {
            setsuccess("login success")
            setloader(false)
            navigate('/')
        }).catch((err) => {
            setsuccess(null)
            seterror(err.message)

        })
         
        event.target.reset()
        

    }

    const logingooglehandler = () => {

       
        Googlelogin()


    }

    const loginwithgithub = () => {

        githubLogin()

    }

    return (
       <section className='w-25 bg- mx-auto  shadow rounded p-3 my-5 pt-5' >  
        <Form  onSubmit={loginuser} >

            <h2 className=' mb-4'>Login form</h2>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control required name='email' type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control required name='password' type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
         <p>Create account? <Link to={'/singup'}>Sing up</Link></p>
        <Button variant="primary" type="submit">
           Login
        </Button><br/>


        {success ? <Alert className='mt-1' variant="success">
           user login successfully
        </Alert> : <></>}
        {error ? <Alert className='mt-1' variant="danger">
          {error}
        </Alert> : <></>}

        </Form>
            <div className='text-center '>
                <button onClick={logingooglehandler} className="btn btn-outline btn-primary mt-3 ">Login with google</button>
                <button onClick={loginwithgithub} className="btn btn-outline btn-dark mt-3 ">Login with Github</button>
            </div>
        
    </section>
        
    );
};

export default Login;