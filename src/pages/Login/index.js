import React from 'react';
import { Row, Col, Container, InputGroup, FormControl, Form, Button } from 'react-bootstrap'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from '@testing-library/react';
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className="login">
            <Header></Header>
            <Container>
                <Row className="mt-5 pt-5">
                    <Col md className="mt-5 p-5">
                        <Form >
                            <Form.Group controlId="formBasicEmail" >
                                <Form.Label>Email</Form.Label>
                                <Form.Control size="lg" type="email" placeholder="Coloque o Email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control size="lg" type="password" placeholder="Coloque sua senha" />
                            </Form.Group>
                            <Row className="m-5 p-5">
                                <Col className="d-flex justify-content-center">
                                    <Button variant="primary" type="submit" size="lg">
                                        Entrar
                                    </Button>
                                </Col>
                            </Row>
                            <Row className="m-1 ">
                                <Col className="d-flex justify-content-center">
                                    <Button variant="secondary"  size="lg" >
                                    <Link to='/cadastro'>Cadastrar</Link>
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Footer> </Footer>
        </div>
    );
}