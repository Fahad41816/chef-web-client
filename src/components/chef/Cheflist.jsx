import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import style from './cheflist.module.css'
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
 

const Cheflist = ({chef}) => {
 
   
    return (
    <>
    <Row xs={1} md={3} className="g-4 ">
       {chef.map(data=>(

            <Col key={data.id} className=' align-content-center justify-content-center d-flex mt-5 mb-5'>
                <Card className={`${style.cardSize}`}>
                <LazyLoad>

                    <Card.Img className={`${style.imageSize} img-fluid`} variant="top" src={data.chef_picture} />
                </LazyLoad>

               
                    <Card.Body>
                    <Card.Title>{data.chef_name
        }</Card.Title>
                    <Card.Text>
                        <p>racipe create: {data.num_of_recipes}</p>
                        <p>experince: {data.years_of_experience}</p>
                        <p>likes: {data.likes}</p>
                    </Card.Text>

                      <Link to={`/viewRecipe/${data.id}`}>
                             <Button>View Recipes</Button>
                      </Link>

                    </Card.Body>
                </Card>
            </Col>

       ))}
    </Row>
    </>
    );
};

export default Cheflist;