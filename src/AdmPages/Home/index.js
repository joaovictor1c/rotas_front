import React from 'react';
import { Row, Col, Container, InputGroup, FormControl, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from '@testing-library/react';

export default function HomeAdm() {
    return (
        <div className="cadastro">
            <Header></Header>
            <Container>
                <Row className="my-5 p-5">
                    <Col md className="d-flex justify-content-center my-5 p-5">
                        <div className="m-5 text-center" style={{ minWidth: '9vw', height: '10vh', backgroundColor: 'violet' }}>
                        <Link to='/atualizarhome'><h5 className="h5TextosAuxiliares">Aualizar página principal</h5></Link>
                        </div>
                        <div className="m-5 text-center" style={{ minWidth: '9vw', height: '10vh', backgroundColor: 'violet' }}>
                        <Link to='/criarroteiros'><h5 className="h5TextosAuxiliares">Criar Roteiros</h5></Link>
                        </div>
                        <div className="m-5 text-center" style={{ minWidth: '9vw', height: '10vh', backgroundColor: 'violet' }}>
                            <h5 className="h5TextosAuxiliares">Outra função</h5>
                        </div>
                        <div className="m-5 text-center" style={{ minWidth: '9vw', height: '10vh', backgroundColor: 'violet' }}>
                            <h5 className="h5TextosAuxiliares">Outra função</h5>
                        </div>
                        <div className="m-5 text-center" style={{ minWidth: '9vw', height: '10vh', backgroundColor: 'violet' }}>
                            <h5 className="h5TextosAuxiliares">Outra função</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer> </Footer>
        </div>
    );
}