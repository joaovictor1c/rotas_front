import React from 'react';
import { Row, Col, Container, InputGroup, FormControl, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from '@testing-library/react';

export default function CadastroUsuario() {
    return (
        <div className="cadastro">
            <Header></Header>
            <Container>
                <Row className="mt-5 pt-5">
                    <Col md className="mt-5 p-5">
                        <Form >
                            <Form.Group controlId="formBasicEmail" >
                                <Form.Label>Nome</Form.Label>
                                <Form.Control size="lg" type="email" placeholder="Coloque seu nome" />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail" >
                                <Form.Label>Email</Form.Label>
                                <Form.Control size="lg" type="email" placeholder="Coloque o Email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control size="lg" type="password" placeholder="Coloque sua senha" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Confirme a senha</Form.Label>
                                <Form.Control size="lg" type="password" placeholder="Confirme a senha" />
                            </Form.Group>
                            <Row className="m-5">
                                <Col className="d-flex justify-content-center">
                                    <Button variant="primary" type="submit" size="lg">
                                        Cadastrar
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