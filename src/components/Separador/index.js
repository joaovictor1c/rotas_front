import React from 'react';
import { Row, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Separador(){

    return (
        <Row className="justify-content-center m-3">
            <Col style={{ backgroundColor: 'rgb(0,0,0,0.2)', height: '0.2vh', width: '0.2vw' }} sm={1} >
            </Col>
        </Row>
    )
}
