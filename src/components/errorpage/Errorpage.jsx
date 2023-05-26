import React from 'react';
import { Container, Row, Col, Image, Button } from "react-bootstrap";
 
const Errorpage = () => {
    return (
        <Container className="my-5">
        <Row>
          <Col md={6} className="d-flex align-items-center">
            <div>
              <h1 className="mb-4">Oops! Something went wrong.</h1>
              <p className="mb-4">
                We apologize for the inconvenience. The page you were looking for
                cannot be found or has been removed.
              </p>
              <Button variant="primary" href="/">
                Go back to homepage
              </Button>
            </div>
          </Col>
          <Col md={6}>
            <Image src="https://thumbs.dreamstime.com/b/error-rubber-stamp-word-error-inside-illustration-109026446.jpg" fluid />
          </Col>
        </Row>
      </Container>
    );
};

export default Errorpage;