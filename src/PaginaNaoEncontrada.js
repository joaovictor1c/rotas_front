import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap'


export default function paginaNaoEncontrada(){

    return (
        <div className="paginaNaoEncontrada">
            <Container fluid >
                <Row>
                    <Col>
                        <h1 style={{ color: 'rgb(117, 117, 117)' }} className="col-md text-center m-2">ERRO 404 - PAGINA NÃO ENCONTRADA</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
