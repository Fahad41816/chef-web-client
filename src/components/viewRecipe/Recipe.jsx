import React, { useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import style from "./Racipie.module.css"
import toast, { Toaster } from 'react-hot-toast';
import LazyLoad from 'react-lazy-load';
const Recipe = () => {

    const [active, setactive] = useState(true);

    const detailsData = useLoaderData()

     const {chef_picture,chef_name,years_of_experience, num_of_recipes, chef_recipie } = detailsData

     const addbook = () => {

        toast('add to Bookmark')
        setactive(false)
        

     }

    return (        
        <>
        <Card  className=' '>
            <Card.Header as="h5">


            </Card.Header>
            <Card.Body>
            <LazyLoad>
                 <img className={`  w-50`} src={chef_picture} alt="" />

            </LazyLoad>
                <Card.Title>{chef_name}</Card.Title>
                <Card.Text>
                  <span className='fw-semibold'>chef experince:{years_of_experience}</span> 
                </Card.Text>
                <Card.Text>
                  <span className='fw-semibold'>total create racipie:{num_of_recipes}</span> 
                 
                </Card.Text>
                <Button onClick={addbook} disabled={active ? false : true} variant="primary">favorite</Button>
                <Toaster   position="top-center"
  reverseOrder={false}/>
            </Card.Body>
        </Card>

        <div className='mt-5 mb-5'>
            
        <Row xs={1} md={3} className="g-4">
      
            {
                chef_recipie.map(data=> (

                    <Col>
                        <Card className={`${style.cardDiv}`}>
                        <LazyLoad>
                            <Card.Img className={`${style.cardIMAGE}`}  src={data.recipie_pic}/>

                        </LazyLoad>
                            <Card.Body>
                            <p> <span className='fw-semibold'>name:</span> {data.racipie_name}</p>
                            <p>  <span className='fw-semibold'>ingredients :</span>{data.ingredients}</p>
                            <p> <span className='fw-semibold'>cooking method:</span>{data.cooking_method}</p>
                            <p> <span className='fw-semibold'>rating:</span> {data.rating}</p>
                            
                            </Card.Body>
                        </Card>
                    </Col> 

                ))
            }
      
        </Row>
        </div>
        </>        
    );
};

export default Recipe;