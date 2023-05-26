import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

import image from '../../assets/images/istockphoto-1309966291-612x612.jpg'

const About = () => {
    return (
        <Container className='mb-5 mt-5'>
        <Row>
          <Col md={6}>
            <Image src={image} alt="about us" fluid />
          </Col>
          <Col md={6} >
           
            <p>
            John Smith is a renowned chef who has been working in the culinary industry for over 20 years. He started his career as a line cook in a small restaurant and worked his way up to become a head chef at a Michelin-starred establishment.
            </p>
            <p>
            In addition to his work in the kitchen, John is also an accomplished author and has written several cookbooks that have been well-received by critics and readers alike. He is a frequent guest on cooking shows and has been featured in several magazines and newspapers.
            </p>
          </Col>
        </Row>
      </Container>
    );
};

export default About;