import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Carousel from './Carousel.js';




const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

function onChange(a, b, c) {
    console.log(a, b, c);
}


function Home() {
    return (

        <Container >
            <Row>
                <Col  >

                </Col>
            </Row>
            <Row>
                <Col >
                    <Jumbotron style={{ backgroundColor: '#FFFFFF', borderColor: '#555555' }}>
                        <h1>Hello, world!</h1>
                        <p>
                            This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.
                        </p>
                        <p>
                            <Button variant="primary" href="/about">Learn more</Button>
                        </p>
                    </Jumbotron>
                </Col>
            </Row>
            <Row>
                <Col >
                    <Carousel />
                </Col>
            </Row>



        </Container>




    );
}

export default Home;
