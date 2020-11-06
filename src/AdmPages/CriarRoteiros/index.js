import React, { Component } from 'react';
import {
    Row,
    Col,
    Container,
    Nav,
    Badge,
    OverlayTrigger,
    Popover,
    Card,
    ToggleButton,
    ToggleButtonGroup,
    ListGroup,
    ListGroupItem,
    Form, Button
} from "react-bootstrap";
import { Link } from 'react-router-dom'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Separador from '../../components/Separador'

import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from '@testing-library/react';
import bsCustomFileInput from 'bs-custom-file-input'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faExclamation,
    faArrowDown,
    faSun,
} from "@fortawesome/free-solid-svg-icons";


const popover = (
    <Popover id="popover-basic">
        <Popover.Title as="h3">Dicas</Popover.Title>
        <Popover.Content>
            Provavelmente você chegará por lá, pois ele receber cerca de 90% dos voos
            internacionais que chegam a Argentina. Apesar de ser bem grande, você se
            localizará facilmente, pois o aeroporto é bem sinalizado em português.
      <strong> CUIDADO</strong> – a vigem do centro da cidade até o Ezeiza leva
      em média 30/40 minutos, mas os horários de pico de trânsito podem aumentar
      esse tempo. Cuidado para não perder o voo.
    </Popover.Content>
    </Popover>
);

const clicouAba = function (eventKey) {
    for (let i = 0; i < 3; i++) {
        const element = document.getElementById("aba" + i);
        element.style.display = "none";
    }
    document.getElementById("aba" + eventKey).style.display = "block";
};

//const [value, setValue] = useState([1, 3]);
const handleChange = function (val) {
    for (let i = 0; i < 3; i++) {
        const element = document.getElementById("roteiroDia" + i);
        element.style.display = "none";
    }

    var elmnt = document.getElementById("roteiroDia" + val);

    elmnt.style.display = "block";

    elmnt.firstChild.scrollIntoView();
};

const mouseOverToggle = function (val) {
    val.currentTarget.style.opacity = 1;
};

const mouseOutToggle = function (val) {
    val.currentTarget.style.opacity = 0.4;
};

const criarElemento = function (val) {
    const list =
    React.createElement('div', {},
      React.createElement('h1', {}, 'My favorite ice cream flavors'),
      React.createElement('ul', {},
        [
          React.createElement('li', { class: 'brown' }, 'Chocolate'),
          React.createElement('li', { class: 'white' }, 'Vanilla'),
          React.createElement('li', { class: 'yellow' }, 'Banana')
        ]
      )
    );
    return list
};

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
            <div className="custom-file mt-2">
                <input id="inputGroupFile01" type="file" className="custom-file-input" />
                <label className="custom-file-label" for="inputGroupFile01">Escolha a imagem</label>
            </div>
        );
    }
}



export default function CriarRoteiros() {
    return (
        <div className="cadastro">
            <Header></Header>
            <Container>
                <Row className="mt-5">
                    <Col md className="">
                        <Form>
                            <Form.Label>Imagem para o roteiro</Form.Label>
                            <InputFiles> </InputFiles>

                            <Form.Group className="mt-4" controlId="formBasicEmail" >
                                <Form.Label>Nome da cidade do roteiro</Form.Label>
                                <Form.Control size="lg" type="email" placeholder="Coloque o nome da cidade do roteiro" />
                            </Form.Group>
                            <Form.Group className="mt-4" controlId="" >
                                <Form.Label>Dias</Form.Label>
                                <Form.Control as="select" size="lg">
                                    <option>1</option>
                                    <option>3</option>
                                    <option>5</option>
                                </Form.Control>
                            </Form.Group>
                            <Row>
                                <Col className=" p-5">
                                    <Nav
                                        fill
                                        className="d-flex justify-content-center shadow-lg"
                                        variant="pills"
                                        defaultActiveKey="0"
                                        onSelect={clicouAba}
                                    >
                                        <Nav.Item>
                                            <Nav.Link eventKey="0">Visão geral</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="1">Diário de bordo</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="2">CheckList</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                            </Row>
                            <div id="aba0" style={{ display: "block" }}>
                                <Row className="justify-content-center">
                                    <Col md style={{}}>
                                        <Form.Group className="mt-4" controlId="formBasicEmail" >
                                            <Form.Label>Link para o Mapa</Form.Label>
                                            <Form.Control size="lg" type="email" placeholder="Coloque o link para o mapa do Google Drive" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <div className="mt-5">
                                    <div className="shadow p-2">
                                        <Row className="justify-content-center">
                                            <Col className="text-center">
                                                <h2 className="h2NomeLocal">ANTES DE VIAJAR!</h2>
                                            </Col>
                                        </Row>
                                        <Separador></Separador>
                                        <Row className="px-4">
                                            <Col className=" p-2 ">
                                                <h4 className="h4 mb-2"> &middot; PASSAPORTE E VISTO</h4>
                                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                                    <Form.Control as="textarea" rows={8} />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row className="px-4">
                                            <Col className=" p-2 ">
                                                <h4 className="h4 mb-2"> &middot; SEGURO VIAGEM</h4>
                                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                                    <Form.Control as="textarea" rows={5} />
                                                </Form.Group>
                                            </Col>
                                            <Col className=" p-2 ">
                                                <h4 className="h4 mb-2"> &middot; CÂMBIO</h4>
                                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                                    <Form.Control as="textarea" rows={5} />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row className="px-4">
                                            <Col className=" p-2 ">
                                                <h4 className="h4 mb-2"> &middot; VACINAS</h4>
                                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                                    <Form.Control as="textarea" rows={5} />
                                                </Form.Group>
                                            </Col>
                                            <Col className=" p-2 ">
                                                <h4 className="h4 mb-2"> &middot; INTERNET</h4>
                                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                                    <Form.Control as="textarea" rows={5} />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                                <Row>
                                    <Col>
                                        <div className="mt-5">
                                            <div className="shadow p-2">
                                                <Row className="justify-content-center">
                                                    <Col className="text-center">
                                                        <h2 className="h2NomeLocal">AEROPORTOS</h2>
                                                    </Col>
                                                </Row>
                                                <Separador></Separador>
                                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                                    <Form.Control as="textarea" rows={5} />
                                                </Form.Group>
                                                <Row className="px-4 pt-2 justify-content-center">
                                                    <h6 className="h6Textos">
                                                        <strong>DICAS PARA TRASFER:</strong>
                                                    </h6>
                                                </Row>
                                                <Row className="pl-5 pt-2"> </Row>
                                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                                    <Form.Control as="textarea" rows={5} />
                                                </Form.Group>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="mt-5">
                                    <div className="shadow p-2">
                                        <Row className="justify-content-center">
                                            <Col className="text-center">
                                                <h2 className="h2NomeLocal">LOCOMOÇÃO</h2>
                                            </Col>
                                        </Row>
                                        <Separador></Separador>
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Control as="textarea" rows={5} />
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <div className="shadow p-2">
                                        <Row className="justify-content-center">
                                            <Col className="text-center">
                                                <h2 className="h2NomeLocal">QUANDO ESTIVER LÁ!</h2>
                                            </Col>
                                        </Row>
                                        <Separador></Separador>
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Control as="textarea" rows={5} />
                                        </Form.Group>
                                    </div>
                                </div>
                            </div>
                            <div id="aba1" style={{ display: "none" }}>
                                <Row
                                    className="justify-content-center mb-2"
                                    style={{ position: "sticky", zIndex: "1", top: "0" }}
                                >
                                    <ToggleButtonGroup
                                        style={{ opacity: "0.4" }}
                                        id="ToggleButtonGroup1"
                                        type="radio"
                                        name="options"
                                        defaultValue={0}
                                        onChange={handleChange}
                                        onMouseOver={mouseOverToggle}
                                        onMouseOut={mouseOutToggle}
                                    >
                                        <ToggleButton size="lg" value={0}>
                                            Dia 1
              </ToggleButton>
                                        <ToggleButton size="lg" value={1}>
                                            Dia 2
              </ToggleButton>
                                        <ToggleButton size="lg" value={2}>
                                            Dia 3
              </ToggleButton>
                                    </ToggleButtonGroup>
                                </Row>
                                <Row>
                                    <Col>
                                        <div id="roteiroDia0" style={{ display: "block" }}>
                                            <Row className="justify-content-center mb-3">
                                                <Badge className="" pill variant="primary">
                                                    <h2 className="m-2"> 1º dia</h2>{" "}
                                                </Badge>{" "}
                                            </Row>
                                            <Row className="justify-content-center mb-3">
                                                <FontAwesomeIcon icon={faArrowDown} />
                                            </Row>
                                            <Row className="justify-content-center mb-3">
                                                <Col md={5} className=" text-center">
                                                    <Card>
                                                        <Card.Body>
                                                            <Card.Title>Chegada</Card.Title>
                                                            <Card.Text>Seu plano de viagem começa agora!</Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            </Row>
                                            <Row className="justify-content-center mb-3">
                                                <Col md={5}>
                                                    <Card>
                                                        <Form.Group className="mt-2" controlId="formBasicEmail" >
                                                            <Form.Label>Nome da Região</Form.Label>
                                                            <Form.Control size="sm" type="email" placeholder="Região" />
                                                        </Form.Group>
                                                        <Form.Label>Imagem para região</Form.Label>
                                                        <InputFiles> </InputFiles>
                                                        <ListGroup className="list-group-flush">
                                                            <ListGroupItem>COMO CHEGAR:
                                                            <Form.Group className="mt-2" controlId="exampleForm.ControlTextarea1">
                                                                    <Form.Control as="textarea" rows={4} />
                                                                </Form.Group>
                                                            </ListGroupItem>
                                                            <ListGroupItem>
                                                                SEGURANÇA:
                                                                <Form.Group className="mt-2" controlId="exampleForm.ControlTextarea1">
                                                                    <Form.Control as="textarea" rows={4} />
                                                                </Form.Group>
                                                            </ListGroupItem>
                                                            <ListGroupItem>ONDE COMER:
                                                                <Form.Group className="mt-2" controlId="exampleForm.ControlTextarea1">
                                                                    <Form.Control as="textarea" rows={4} />
                                                                </Form.Group></ListGroupItem>
                                                            <ListGroupItem>
                                                                LUGARES PARA FAZER COMPRAS:
                                                                <Form.Group className="mt-2" controlId="exampleForm.ControlTextarea1">
                                                                    <Form.Control as="textarea" rows={4} />
                                                                </Form.Group>
                                                            </ListGroupItem>
                                                            <ListGroupItem>OUTROS LUGARES NA REGIÃO:
                                                                 <Form.Group className="mt-2" controlId="exampleForm.ControlTextarea1">
                                                                    <Form.Control as="textarea" rows={4} />
                                                                </Form.Group></ListGroupItem>
                                                        </ListGroup>
                                                    </Card>
                                                </Col>
                                            </Row>
                                            <Row className="justify-content-center mb-3">
                                                <FontAwesomeIcon icon={faArrowDown} />
                                            </Row>
                                            <div id="COMPONENTE">
                                                <Row className="justify-content-center mb-3">
                                                    <Col md={5}>
                                                        <Card>
                                                            <Card.Header className="text-muted">
                                                                <Card.Text>Horário <Form.Group className="mt-2" controlId="exampleForm.ControlTextarea1">
                                                                    <Form.Control as="textarea" rows={1} />
                                                                </Form.Group></Card.Text>
                                                            </Card.Header>
                                                            <Form.Label>Imagem para o local</Form.Label>
                                                            <InputFiles> </InputFiles>
                                                            <ListGroup className="list-group-flush">
                                                                <ListGroupItem>
                                                                    <Card.Body>
                                                                        <Card.Title>Nome do Local:
                                                                         <Form.Group className="mt-2" controlId="exampleForm.ControlTextarea1">
                                                                                <Form.Control as="textarea" rows={1} />
                                                                            </Form.Group></Card.Title>
                                                                        <Card.Title>Descrição:
                                                                         <Form.Group className="mt-2" controlId="exampleForm.ControlTextarea1">
                                                                                <Form.Control as="textarea" rows={6} />
                                                                            </Form.Group></Card.Title>
                                                                    </Card.Body>
                                                                </ListGroupItem>
                                                                <ListGroupItem>
                                                                    <Card.Body>
                                                                        <Card.Title>AGENDAMENTO
                                                                        <Form.Group className="mt-2" controlId="exampleForm.ControlTextarea1">
                                                                                <Form.Control as="textarea" rows={6} /></Form.Group>
                                                                        </Card.Title>
                                                                    </Card.Body>
                                                                </ListGroupItem>
                                                            </ListGroup>
                                                            <Card.Footer className="text-muted">
                                                                <Card.Text>- TEMPO MÉDIO: <Form.Group className="mt-2" controlId="exampleForm.ControlTextarea1">
                                                                    <Form.Control as="textarea" rows={1} /></Form.Group></Card.Text>
                                                                <Card.Text>- VALOR: <Form.Group className="mt-2" controlId="exampleForm.ControlTextarea1">
                                                                    <Form.Control as="textarea" rows={1} /></Form.Group></Card.Text>
                                                            </Card.Footer>
                                                        </Card>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <Row className="mt-3">
                                                <Col className="d-flex justify-content-center">
                                                    <Button variant="primary" size="lg" onClick={criarElemento}>Criar outro</Button>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div id="roteiroDia1" style={{ display: "none" }}>
                                            <Row className="justify-content-center mb-3">
                                                <Badge className="" pill variant="primary">
                                                    <h2 className="m-2"> 2º dia</h2>{" "}
                                                </Badge>{" "}
                                            </Row>
                                            <Row className="justify-content-center mb-3">
                                                <FontAwesomeIcon icon={faArrowDown} />
                                            </Row>
                                            <Row className="justify-content-center mb-3">
                                                <Col md={5}>
                                                    <Card>
                                                        <Form.Group className="mt-2" controlId="formBasicEmail" >
                                                            <Form.Label>Nome da Região</Form.Label>
                                                            <Form.Control size="sm" type="email" placeholder="Região" />
                                                        </Form.Group>
                                                        <Form.Label>Imagem para região</Form.Label>
                                                        <InputFiles> </InputFiles>
                                                        <ListGroup className="list-group-flush">
                                                            <ListGroupItem>COMO CHEGAR:
                                                            <Form.Group className="mt-2" controlId="exampleForm.ControlTextarea1">
                                                                    <Form.Control as="textarea" rows={4} />
                                                                </Form.Group>
                                                            </ListGroupItem>
                                                            <ListGroupItem>
                                                                SEGURANÇA:
                                                                <Form.Group className="mt-2" controlId="exampleForm.ControlTextarea1">
                                                                    <Form.Control as="textarea" rows={4} />
                                                                </Form.Group>
                                                            </ListGroupItem>
                                                            <ListGroupItem>ONDE COMER:
                                                                <Form.Group className="mt-2" controlId="exampleForm.ControlTextarea1">
                                                                    <Form.Control as="textarea" rows={4} />
                                                                </Form.Group></ListGroupItem>
                                                            <ListGroupItem>
                                                                LUGARES PARA FAZER COMPRAS:
                                                                <Form.Group className="mt-2" controlId="exampleForm.ControlTextarea1">
                                                                    <Form.Control as="textarea" rows={4} />
                                                                </Form.Group>
                                                            </ListGroupItem>
                                                            <ListGroupItem>OUTROS LUGARES NA REGIÃO:
                                                                 <Form.Group className="mt-2" controlId="exampleForm.ControlTextarea1">
                                                                    <Form.Control as="textarea" rows={4} />
                                                                </Form.Group></ListGroupItem>
                                                        </ListGroup>
                                                    </Card>
                                                </Col>
                                            </Row>
                                            <Row className="justify-content-center mb-3">
                                                <FontAwesomeIcon icon={faArrowDown} />
                                            </Row>
                                            <div id="COMPONENTE">
                                                <Row className="justify-content-center mb-3">
                                                    <Col md={5}>
                                                        <Card>
                                                            <Card.Header className="text-muted">
                                                                <Card.Text>Horário <Form.Group className="mt-2" controlId="exampleForm.ControlTextarea1">
                                                                    <Form.Control as="textarea" rows={1} />
                                                                </Form.Group></Card.Text>
                                                            </Card.Header>
                                                            <Form.Label>Imagem para o local</Form.Label>
                                                            <InputFiles> </InputFiles>
                                                            <ListGroup className="list-group-flush">
                                                                <ListGroupItem>
                                                                    <Card.Body>
                                                                        <Card.Title>Nome do Local:
                                                                         <Form.Group className="mt-2" controlId="exampleForm.ControlTextarea1">
                                                                                <Form.Control as="textarea" rows={1} />
                                                                            </Form.Group></Card.Title>
                                                                        <Card.Title>Descrição:
                                                                         <Form.Group className="mt-2" controlId="exampleForm.ControlTextarea1">
                                                                                <Form.Control as="textarea" rows={6} />
                                                                            </Form.Group></Card.Title>
                                                                    </Card.Body>
                                                                </ListGroupItem>
                                                                <ListGroupItem>
                                                                    <Card.Body>
                                                                        <Card.Title>AGENDAMENTO
                                                                        <Form.Group className="mt-2" controlId="exampleForm.ControlTextarea1">
                                                                                <Form.Control as="textarea" rows={6} /></Form.Group>
                                                                        </Card.Title>
                                                                    </Card.Body>
                                                                </ListGroupItem>
                                                            </ListGroup>
                                                            <Card.Footer className="text-muted">
                                                                <Card.Text>- TEMPO MÉDIO: <Form.Group className="mt-2" controlId="exampleForm.ControlTextarea1">
                                                                    <Form.Control as="textarea" rows={1} /></Form.Group></Card.Text>
                                                                <Card.Text>- VALOR: <Form.Group className="mt-2" controlId="exampleForm.ControlTextarea1">
                                                                    <Form.Control as="textarea" rows={1} /></Form.Group></Card.Text>
                                                            </Card.Footer>
                                                        </Card>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <Row className="mt-3">
                                                <Col className="d-flex justify-content-center">
                                                    <Button variant="primary" size="lg" onPress={criarElemento}>Criar outro</Button>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div id="roteiroDia2" style={{ display: "none" }}>
                                            <Row className="justify-content-center mb-3">
                                                <Badge className="" pill variant="primary">
                                                    <h2 className="m-2"> 3º dia</h2>{" "}
                                                </Badge>{" "}
                                            </Row>
                                            <Row className="justify-content-center mb-3">
                                                <FontAwesomeIcon icon={faArrowDown} />
                                            </Row>

                                            <Row className="justify-content-center mb-3">
                                                <Col md={5}>
                                                    <Card>
                                                        <Form.Group className="mt-2" controlId="formBasicEmail" >
                                                            <Form.Label>Nome da Região</Form.Label>
                                                            <Form.Control size="sm" type="email" placeholder="Região" />
                                                        </Form.Group>
                                                        <Form.Label>Imagem para região</Form.Label>
                                                        <InputFiles> </InputFiles>
                                                        <ListGroup className="list-group-flush">
                                                            <ListGroupItem>COMO CHEGAR:
                                                            <Form.Group className="mt-2" controlId="exampleForm.ControlTextarea1">
                                                                    <Form.Control as="textarea" rows={4} />
                                                                </Form.Group>
                                                            </ListGroupItem>
                                                            <ListGroupItem>
                                                                SEGURANÇA:
                                                                <Form.Group className="mt-2" controlId="exampleForm.ControlTextarea1">
                                                                    <Form.Control as="textarea" rows={4} />
                                                                </Form.Group>
                                                            </ListGroupItem>
                                                            <ListGroupItem>ONDE COMER:
                                                                <Form.Group className="mt-2" controlId="exampleForm.ControlTextarea1">
                                                                    <Form.Control as="textarea" rows={4} />
                                                                </Form.Group></ListGroupItem>
                                                            <ListGroupItem>
                                                                LUGARES PARA FAZER COMPRAS:
                                                                <Form.Group className="mt-2" controlId="exampleForm.ControlTextarea1">
                                                                    <Form.Control as="textarea" rows={4} />
                                                                </Form.Group>
                                                            </ListGroupItem>
                                                            <ListGroupItem>OUTROS LUGARES NA REGIÃO:
                                                                 <Form.Group className="mt-2" controlId="exampleForm.ControlTextarea1">
                                                                    <Form.Control as="textarea" rows={4} />
                                                                </Form.Group></ListGroupItem>
                                                        </ListGroup>
                                                    </Card>
                                                </Col>
                                            </Row>
                                            <Row className="justify-content-center mb-3">
                                                <FontAwesomeIcon icon={faArrowDown} />
                                            </Row>
                                            <div id="COMPONENTE">
                                                <Row className="justify-content-center mb-3">
                                                    <Col md={5}>
                                                        <Card>
                                                            <Card.Header className="text-muted">
                                                                <Card.Text>Horário <Form.Group className="mt-2" controlId="exampleForm.ControlTextarea1">
                                                                    <Form.Control as="textarea" rows={1} />
                                                                </Form.Group></Card.Text>
                                                            </Card.Header>
                                                            <Form.Label>Imagem para o local</Form.Label>
                                                            <InputFiles> </InputFiles>
                                                            <ListGroup className="list-group-flush">
                                                                <ListGroupItem>
                                                                    <Card.Body>
                                                                        <Card.Title>Nome do Local:
                                                                         <Form.Group className="mt-2" controlId="exampleForm.ControlTextarea1">
                                                                                <Form.Control as="textarea" rows={1} />
                                                                            </Form.Group></Card.Title>
                                                                        <Card.Title>Descrição:
                                                                         <Form.Group className="mt-2" controlId="exampleForm.ControlTextarea1">
                                                                                <Form.Control as="textarea" rows={6} />
                                                                            </Form.Group></Card.Title>
                                                                    </Card.Body>
                                                                </ListGroupItem>
                                                                <ListGroupItem>
                                                                    <Card.Body>
                                                                        <Card.Title>AGENDAMENTO
                                                                        <Form.Group className="mt-2" controlId="exampleForm.ControlTextarea1">
                                                                                <Form.Control as="textarea" rows={6} /></Form.Group>
                                                                        </Card.Title>
                                                                    </Card.Body>
                                                                </ListGroupItem>
                                                            </ListGroup>
                                                            <Card.Footer className="text-muted">
                                                                <Card.Text>- TEMPO MÉDIO: <Form.Group className="mt-2" controlId="exampleForm.ControlTextarea1">
                                                                    <Form.Control as="textarea" rows={1} /></Form.Group></Card.Text>
                                                                <Card.Text>- VALOR: <Form.Group className="mt-2" controlId="exampleForm.ControlTextarea1">
                                                                    <Form.Control as="textarea" rows={1} /></Form.Group></Card.Text>
                                                            </Card.Footer>
                                                        </Card>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <Row className="mt-3">
                                                <Col className="d-flex justify-content-center">
                                                    <Button variant="primary" size="lg" onPress={criarElemento}>Criar outro</Button>
                                                </Col>
                                            </Row>
                                        </div>

                                    </Col>
                                </Row>
                            </div>
                            <div id="aba2" style={{ display: "none" }}>
                                <Row className="mt-3">
                                    <Col className="d-flex justify-content-center">
                                        <Button variant="primary" type="submit" size="lg">
                                            SALVAR
                                    </Button>
                                    </Col>
                                </Row>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Footer> </Footer>
        </div>
    );
}