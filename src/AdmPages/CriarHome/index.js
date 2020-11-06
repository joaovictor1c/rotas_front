import React, { Component } from 'react';
import { Row, Col, Container, InputGroup, FormControl, Form, Button, Dropdown, DropdownButton } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from '@testing-library/react';
import bsCustomFileInput from 'bs-custom-file-input'


class InputFiles extends Component {
    constructor() {
        super();
        this.state = {
            name: 'React'
        };
    }

    componentDidMount() {
        bsCustomFileInput.init()
    }

    render() {
        return (
            <div className="custom-file p-5">
                <input id="inputGroupFile01" type="file" className="custom-file-input" />
                <label className="custom-file-label" for="inputGroupFile01">Escolha a imagem</label>
            </div>
        );
    }
}


export default function CriarHome() {
    return (
        <div className="cadastro">
            <Header></Header>
            <Container>
                <Row className="mt-5">
                    <Col md >
                        <Form>
                            <Row className="justify-content-center"> <h1>PRINCIPAIS DESTINOS</h1></Row>
                            <Form.Row className="m-3">
                                <Form.Label size="lg">Primeiro Roteiro: </Form.Label>
                                <Form.Control as="select" size="lg">
                                    <option>Bueno Aires</option>
                                    <option>Teste 1</option>
                                    <option>Teste 2</option>
                                    <option>Teste 3</option>
                                    <option>Teste 4</option>
                                </Form.Control>
                            </Form.Row>
                            <Form.Row className="m-3">
                                <Form.Label size="lg">Segundo Roteiro: </Form.Label>
                                <Form.Control as="select" size="lg">
                                    <option>Bueno Aires</option>
                                    <option>Teste 1</option>
                                    <option>Teste 2</option>
                                    <option>Teste 3</option>
                                    <option>Teste 4</option>
                                </Form.Control>
                            </Form.Row>
                            <Form.Row className="m-3">
                                <Form.Label size="lg">Terceiro Roteiro: </Form.Label>
                                <Form.Control as="select" size="lg">
                                    <option>Bueno Aires</option>
                                    <option>Teste 1</option>
                                    <option>Teste 2</option>
                                    <option>Teste 3</option>
                                    <option>Teste 4</option>
                                </Form.Control>
                            </Form.Row>

                            <Row className="m-3">
                                <Col className="d-flex justify-content-center">
                                    <Button variant="primary" type="submit" size="lg">
                                        Atualizar
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                        <Form>
                            <Row className="justify-content-center m-5"> <h1>ADICIONAR POSTAGENS</h1></Row>
                            <Form.Group controlId="formBasicEmail" >
                                <Form.Label>Título</Form.Label>
                                <Form.Control size="lg" type="email" placeholder="Coloque o  título da postagem" />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Postagem</Form.Label>
                                <Form.Control as="textarea" rows={10} />
                            </Form.Group>

                            <Form.Label>Imagem para o fundo</Form.Label>
                            <InputFiles> </InputFiles>
                            <Row className="m-3">
                                <Col className="d-flex justify-content-center">
                                    <Button variant="primary" type="submit" size="lg">
                                        Atualizar
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