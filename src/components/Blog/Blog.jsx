import React from 'react';
import { Accordion } from 'react-bootstrap';
import Pdf from "react-to-pdf";


const Blog = () => {


    const ref = React.createRef();

    return (
        <>
        <Accordion ref={ref} className='w-50 mt-5 mb-5 mx-auto' defaultActiveKey="0">
           
            
            <Accordion.Item eventKey="1">
                <Accordion.Header><span className='fw-semibold'>
                Tell us the differences between uncontrolled and controlled components.
                </span></Accordion.Header>
                <Accordion.Body>
                
First, you need to import the PropTypes module from the 'prop-types' package in your component file:
javascript
Copy code

                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header><span className='fw-semibold'>
                How to validate React props using PropTypes
                </span></Accordion.Header>
                <Accordion.Body>
                In React, PropTypes is a useful feature that allows developers to validate the types of props that are passed to components. Here are the steps to validate React props using PropTypes:
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header><span className='fw-semibold'>
                Tell us the difference between nodejs and express js.
                </span></Accordion.Header>
                <Accordion.Body>
                NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header><span className='fw-semibold'>
                What is a custom hook, and why will you create a custom hook?
                </span></Accordion.Header>
                <Accordion.Body>
                it can be reused easily, which makes the code cleaner and reduces the time to write the code
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

        <div className='text-center mb-5'>

        <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf} className=' btn btn-primary'>Download pdf</button>}
        </Pdf>
        
        </div>
       
    </> 
        
    );
};

export default Blog;