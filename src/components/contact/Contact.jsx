import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
const contact = () => {
    return (
        <div>
             <Container className='mt-5 mb-5'>
      <Row>
        <Col md={6}>
          
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
            </Form.Group>
            <Button className='mt-3' variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={6} className='mt-5 p-5'>
          <h2>Our Location</h2>
          <p>
            123 Main Street<br />
            Anytown, USA 12345<br />
            Phone: (555) 555-5555<br />
            Email: info@example.com
          </p>
        </Col>
      </Row>
    </Container>
        </div>
    );
};

export default contact;