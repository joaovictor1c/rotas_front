//COMPONENTES

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Separador from '../../components/Separador'
//CSS
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

//ELEMENTOS
import React from "react";
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
} from "react-bootstrap";
import { Link } from "react-router-dom";

//ICONES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamation,
  faArrowDown,
  faSun,
} from "@fortawesome/free-solid-svg-icons";


import MapContainer from "../../components/Mapa/testeMapa";

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

export default function Home() {
  return (
    <div className="telaRoteiros">
      <Header></Header>
      <Row
          className="p-5"
          style={{
            backgroundImage: "url('/imagens/1.jpg')",
            backgroundRepeat: "repeat-y",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundColor: "#ffffff",
          }}
        >
          <Col style={{ color: "white" }} className="text-center mt-5" md>
            <h1 className="h1Nome">Bueno Aires</h1>
            <h4 className="TextosSec h4Dias mt-5"> 3 dias </h4>
          </Col>
        </Row>
      <Container>

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
              <MapContainer></MapContainer>
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
                  <h5 className="h5TextoInformacoes ml-3">
                    Brasileiros não precisam de visto.
                    <br />
                    <br />
                    O QUE SÃO ACEITOS? Passaportes e RG são aceitos.
                    <br />
                    <br />
                    ATENÇÃO – Você não conseguirá entrar com CNH, carteira de
                    entidade de classe ou certidão de nascimento. Fique atento
                    também para o tempo de expedição do seu RG. Apesar de não
                    possuir prazo de validade, é mais prudente que você não
                    viaje com um RG que tenha mais de 10 anos de expedição.
                  </h5>
                </Col>
              </Row>
              <Row className="px-4">
                <Col className=" p-2 ">
                  <h4 className="h4 mb-2"> &middot; SEGURO VIAGEM</h4>
                  <h5 className="h5TextoInformacoes ml-3">
                    Diferente da maioria dos países europeus, para entrar na
                    Argentina não é exigido ter seguro saúde. Isso não significa
                    que você não deve fazer.
                    <br />
                    <Link to="#">Como obter</Link>
                  </h5>
                </Col>
                <Col className=" p-2 ">
                  <h4 className="h4 mb-2"> &middot; CÂMBIO</h4>
                  <h5 className="h5TextoInformacoes ml-3">
                    Não vale a pena fazer a troca de câmbio no Brasil
                    (geralmente isso acontece em relação as moedas mais
                    desvalorizadas que o real), só trocar pouca coisa, ou levar
                    dólar. Real e dólar são bem aceitos. Cuidado em trocar na
                    Florida.
                  </h5>
                </Col>
              </Row>
              <Row className="px-4">
                <Col className=" p-2 ">
                  <h4 className="h4 mb-2"> &middot; VACINAS</h4>
                  <h5 className="h5TextoInformacoes ml-3">
                    Até o momento, vacinas não são exigidas
                  </h5>
                </Col>
                <Col className=" p-2 ">
                  <h4 className="h4 mb-2"> &middot; INTERNET</h4>
                  <h5 className="h5TextoInformacoes ml-3">
                    <Link to="#">Como obter</Link>
                  </h5>
                </Col>
              </Row>
            </div>
          </div>
          <Row>
            <Col md={4}>
              <div className="p-5">
                <div className="shadow p-2">
                  <Row className="pl-4 pr-4">
                    <Col md={4} className=" p-2 text-center">
                      <FontAwesomeIcon
                        style={{ width: "5vw", height: "100%" }}
                        icon={faSun}
                      />
                    </Col>
                    <Col className="text-center pt-2">
                      <h2>26º C</h2>
                    </Col>
                  </Row>
                  <Col className="text-center pt-2">
                    <h2>Ensolarado</h2>
                  </Col>
                </div>
              </div>
            </Col>
            <Col>
              <div className="mt-5">
                <div className="shadow p-2">
                  <Row className="justify-content-center">
                    <Col className="text-center">
                      <h2 className="h2NomeLocal">AEROPORTOS</h2>
                    </Col>
                  </Row>
                  <Separador></Separador>
                  <Row className="pl-4 pr-4 justify-content-center">
                    <Col sm={1}>
                      <OverlayTrigger
                        trigger="click"
                        placement="top"
                        overlay={popover}
                      >
                        <button
                          className="mt-1"
                          style={{ background: "none", border: "none" }}
                        >
                          <FontAwesomeIcon
                            style={{ width: "0.5vw", height: "100%" }}
                            icon={faExclamation}
                          />
                        </button>
                      </OverlayTrigger>
                    </Col>
                    <Col sm>
                      <h5 className="h5TextoInformacoes">
                        Aeroporto Internacional Ministro Pistarini (Ezeiza) -
                        35km do centro
                      </h5>
                    </Col>
                  </Row>
                  <Row className="pl-4 pr-4 justify-content-center">
                    <Col sm={1}>
                      <OverlayTrigger
                        trigger="click"
                        placement="top"
                        overlay={popover}
                      >
                        <button
                          className="mt-1"
                          style={{ background: "none", border: "none" }}
                        >
                          <FontAwesomeIcon
                            style={{ width: "0.5vw", height: "100%" }}
                            icon={faExclamation}
                          />
                        </button>
                      </OverlayTrigger>
                    </Col>
                    <Col sm>
                      <h5 className="h5TextoInformacoes">
                        Aeroporto Jorge Newbery - 8km do centro
                      </h5>
                    </Col>
                  </Row>
                  <Row className="px-4 pt-2 justify-content-center">
                    <h6 className="h6Textos">
                      <strong>DICAS PARA TRASFER:</strong>
                    </h6>
                  </Row>
                  <Row className="pl-5 pt-2">
                    <h6 className="h6Textos">Texto aqui</h6>
                  </Row>
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
              <Row className="px-4">
                <Col className=" p-2 ">
                  <h5 className="h5TextoInformacoes ml-3">
                    &middot; Ônibus - turística hop-on hop-off{" "}
                    <a href="https://www.buenosairesbus.com/?lang=po">Ver</a>{" "}
                    <br />
                    Paradas -{" "}
                    <a href=" https://www.buenosairesbus.com/recorridos.php?lang=po">
                      {" "}
                      Ver
                    </a>{" "}
                    <br /> <br />
                    &middot; Metrô - O metrô ("Subte") é histórico, um dos mais
                    antigos do mundo; é eficiente e barato. E agora, depois da
                    inauguração da estação Las Heras, é conveniente até para
                    quem se hospeda na Recoleta. O mapa das estações está aqui.
                    Consulte preços aqui. Cuidado com seus pertences: há
                    mãos-leves em ação nas estações.{" "}
                    <Link to="/links">(VER OS LINKS DO METRÔ)</Link>
                  </h5>
                </Col>
              </Row>
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
              <Row className="px-4">
                <Col className=" p-2 ">
                  <h5 className="h5TextoInformacoes ml-3">
                    &middot; Em toda a Argentina a tensão é de 220 voltz. A
                    tomada é de três pinos achatados. O melhor é levar uma
                    tomada múltipla ou adaptador universal, não tem erro.
                    <br /> <br />
                    &middot;BA é uma cidade boa de caminhar. Como possui regiões
                    bem delimitadas, é interessante montar o roteiro baseado em
                    cada uma dessas regiões <br />
                    <br />
                    &middot; Eles são bem noturnos. Jantam mais tarde!
                    Restaurantes estão começando a encher às 22:00 <br />
                    <br />
                    &middot;Por consequência, não há muita atividade cedo da
                    manhã. As coisas abrem mais tarde, o almoço também costuma a
                    ser um pouco mais tarde <br />
                    <br />
                    &middot; No geral, é uma cidade segura. A violência é mais
                    regionalizada, porém é necessário ter cuidado na parte do
                    centro, principalmente à noite (não há muito movimento na
                    rua, sendo esse um dos pontos negativos de se hospedar na
                    região). Região de Caminito e La Bombonera também inspira
                    cuidados. Rua Florida também tem que ter atenção. <br />
                    <br />
                    &middot; Essencial fazer reserva para ir aos restaurantes,
                    principalmente nos finais de semana e feriados
                    (https://www.guiaoleo.com.ar/) <br />
                    <br />
                    &middot; Cuidados com os taxistas (inserção de cédulas
                    falsas no troco). Bom sempre acompanhar a rota seguindo pelo
                    google <br />
                    <br />
                    &middot; Cuibertos x propina <br />
                    <br />
                    &middot;Geralmente, as porções dos restaurantes são
                    generosas (ter cuidado na hora de pedir) <br />
                    <br />
                    &middot;Alerta para os Ubers
                  </h5>
                </Col>
              </Row>
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
                      <Card.Img src="/imagens/IMG3.jpg" alt="Card image" />
                      <Card.ImgOverlay
                        className="h5TextoInformacoes text-white"
                        style={{ backgroundColor: "rgb(0,0,0,0.4)" }}
                      >
                        <Card.Title className="text-center">
                          REGIÃO DO MICROCENTRO
                        </Card.Title>
                        <Card.Text>
                          Comece seu primeiro dia na cidade na região do
                          Microcentro. Só na Praça de Maio você encontra várias
                          opções legais para visitar e apreciar.
                        </Card.Text>
                      </Card.ImgOverlay>
                      <ListGroup className="list-group-flush">
                        <ListGroupItem>COMO CHEGAR:</ListGroupItem>
                        <ListGroupItem>
                          SEGURANÇA:
                          <br /> ALERTAS: Furtos, Tomar cuidado com as pessoas
                          oferecendo as coisas!
                        </ListGroupItem>
                        <ListGroupItem>ONDE COMER:</ListGroupItem>
                        <ListGroupItem>
                          LUGARES PARA FAZER COMPRAS:
                        </ListGroupItem>
                        <ListGroupItem>OUTROS LUGARES NA REGIÃO:</ListGroupItem>
                      </ListGroup>
                    </Card>
                  </Col>
                </Row>
                <Row className="justify-content-center mb-3">
                  <FontAwesomeIcon icon={faArrowDown} />
                </Row>
                <Row className="justify-content-center mb-3">
                  <Col md={5}>
                    <Card>
                      <Card.Header className="text-muted">
                        <Card.Text>08:00 as 09:00</Card.Text>
                      </Card.Header>
                      <Card.Img
                        variant="top"
                        style={{ width: "100%" }}
                        src="/imagens/IMG1.jpg"
                      />
                      <ListGroup className="list-group-flush">
                        <ListGroupItem>
                          <Card.Body>
                            <Card.Title>Casa Rosada</Card.Title>
                            <Card.Text>
                              É a sede do Presidente da Argentina. Aproveite
                              para tirar várias fotos em um dos símbolos da
                              cidade. A maioria das pessoas fica satisfeita
                              apenas com as fotos. Indicamos, inclusive, essa
                              opção, principalmente se for a sua primeira vez na
                              cidade (vai por nós..) Mas se você curte
                              muitíssimo museus, tem interesse em história ou
                              quer realmente conhecer o interior do local,
                              visitas guiadas pré-agendadas são permitidas.
                            </Card.Text>
                          </Card.Body>
                        </ListGroupItem>
                        <ListGroupItem>
                          <Card.Body>
                            <Card.Title>AGENDAMENTO</Card.Title>
                            <Card.Text>
                              - só feito online através do preenchimento de
                              formulário disponível no site
                              https://visitas.casarosada.gob.ar/
                              <br />
                              <br />
                              - Necessária antecedência de no máximo 15 dias da
                              data escolhida
                              <br />
                              <br />
                              - Sobre os dias da semana abertos à visitação
                              guiada, recomendamos que você verifique no site.
                              Eles sempre mudam
                              <br />
                              <br />
                              - O RV já soube do relato de pessoas que não
                              conseguiram agendar na primeira tentativa. É
                              necessário paciência.
                              <br />
                              <br />
                              - Chegue com 20 de antecedência ao local com
                              documento de identificação (RG ou passaporte).
                              Mais seguro é levar o mesmo documento usado no
                              agendamento da visita - Leve impressa a
                              confirmação da visita
                              <br />
                              <br />- Oficialmente, as visitas são feitas em
                              inglês e espanhol. Dica RV – como quase em todos
                              os lugares da Argentina, o “portunhol é
                              desenrolado”. Endereço do Museo Del Bicentenario:
                            </Card.Text>
                          </Card.Body>
                        </ListGroupItem>
                      </ListGroup>
                      <Card.Footer className="text-muted">
                        <Card.Text>- TEMPO MÉDIO: 1 HORA.</Card.Text>
                        <Card.Text>- VALOR: GRÁTIS.</Card.Text>
                      </Card.Footer>
                    </Card>
                  </Col>
                </Row>
                <Row className="justify-content-center mb-3">
                  <FontAwesomeIcon icon={faArrowDown} />
                </Row>
                <Row className="justify-content-center mb-3">
                  <Col md={5}>
                    <Card>
                      <Card.Header className="text-muted">
                        <Card.Text>09:00 as 10:00</Card.Text>
                      </Card.Header>
                      <Card.Img
                        variant="top"
                        style={{ width: "100%" }}
                        src="/imagens/IMG2.jpg"
                      />
                      <ListGroup className="list-group-flush">
                        <ListGroupItem>
                          <Card.Body>
                            <Card.Title>
                              Museu Del Bicentenário Casa Rosada ou Museu Casa
                              Rosada
                            </Card.Title>
                            <Card.Text>
                              Inaugurado em maio de 2010, como parte dos
                              festejos pelos 200 anos da Revolução de Maio, o
                              Museo Del Bicentenario está situado numa área
                              restaurada do complexo da Casa Rosada que já
                              abrigou dois edifícios históricos: o Fuerte de
                              Buenos Aires, grande forte do século XVIII, e a
                              Aduana Taylor, segunda construção da cidade a ter
                              cinco andares e cuja torre servia de farol para o
                              porto. O acervo, que tem como algumas de suas
                              peças centrais o vestido de casamento de Evita
                              Perón e um mural do artista mexicano David Alfaro,
                              é composto por itens que fizeram parte da história
                              de governantes da Argentina, que são abrigados em
                              galerias divididas em eras presidenciais.
                            </Card.Text>
                          </Card.Body>
                        </ListGroupItem>
                        <ListGroupItem>
                          <Card.Body>
                            <Card.Title>AGENDAMENTO</Card.Title>
                            <Card.Text>NÃO PRECISA.</Card.Text>
                            <Card.Title>MAIS INFORMAÇÕES</Card.Title>
                            <Card.Text>
                              Avenida Passeo Colon, 100 – Monserrat, Buenos
                              Aires, Argentina Telefone: (54 11) 4344-3802
                              Email: museo@presidencia.gov.ar
                            </Card.Text>
                          </Card.Body>
                        </ListGroupItem>
                      </ListGroup>
                      <Card.Footer className="text-muted">
                        <Card.Text>- TEMPO MÉDIO: 1 HORA.</Card.Text>
                        <Card.Text>- VALOR: GRÁTIS.</Card.Text>
                      </Card.Footer>
                    </Card>
                  </Col>
                </Row>
                <Row className="justify-content-center mb-3">
                  <Col md={5}>
                    <Card>
                      <Card.Header className="text-muted">
                        <Card.Text>10:00 as 11:00</Card.Text>
                      </Card.Header>
                      <Card.Img
                        variant="top"
                        style={{ width: "100%" }}
                        src="/imagens/IMG4.jpg"
                      />
                      <ListGroup className="list-group-flush">
                        <ListGroupItem>
                          <Card.Body>
                            <Card.Title>Catedral Metropolitana</Card.Title>
                            <Card.Text>
                              A Catedral Metropolitano de Buenos Aires é a
                              principal igreja católica em Buenos Aires, capital
                              da Argentina. Localiza-se no centro da cidade,
                              diante da Praça de Maio, na esquina das ruas San
                              Martín e Rivadavia, no bairro de San Nicolás. É a
                              igreja-mãe da Arquidiocese de Buenos Aires.
                            </Card.Text>
                          </Card.Body>
                        </ListGroupItem>
                        <ListGroupItem>
                          <Card.Body>
                            <Card.Title>AGENDAMENTO</Card.Title>
                            <Card.Text>NÃO PRECISA.</Card.Text>
                          </Card.Body>
                        </ListGroupItem>
                      </ListGroup>
                      <Card.Footer className="text-muted">
                        <Card.Text>- TEMPO MÉDIO: 30 minutos.</Card.Text>
                        <Card.Text>- VALOR: GRÁTIS.</Card.Text>
                      </Card.Footer>
                    </Card>
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
                      <Card.Img
                        variant="top"
                        style={{ width: "100%" }}
                        src="/imagens/nice.jpg"
                      />
                      <Card.Body>
                        <Card.Title>Nice</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <Row className="justify-content-center mb-3">
                  <FontAwesomeIcon icon={faArrowDown} />
                </Row>
                <Row className="justify-content-center mb-3">
                  <Col md={5}>
                    <Card>
                      <Card.Img
                        variant="top"
                        style={{ width: "100%" }}
                        src="/imagens/Michel.jpg"
                      />
                      <Card.Body>
                        <Card.Title>Mont-Saint-Michel</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <Row className="justify-content-center mb-3">
                  <FontAwesomeIcon icon={faArrowDown} />
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
                      <Card.Img
                        variant="top"
                        style={{ width: "100%" }}
                        src="/imagens/nice.jpg"
                      />
                      <Card.Body>
                        <Card.Title>Nice</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <Row className="justify-content-center mb-3">
                  <FontAwesomeIcon icon={faArrowDown} />
                </Row>
                <Row className="justify-content-center mb-3">
                  <Col md={5}>
                    <Card>
                      <Card.Img
                        variant="top"
                        style={{ width: "100%" }}
                        src="/imagens/Michel.jpg"
                      />
                      <Card.Body>
                        <Card.Title>Mont-Saint-Michel</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <Row className="justify-content-center mb-3">
                  <FontAwesomeIcon icon={faArrowDown} />
                </Row>
                <Row className="justify-content-center mb-3">
                  <Col md={5} className=" text-center">
                    <Card>
                      <Card.Body>
                        <Card.Title>Partida</Card.Title>
                        <Card.Text>
                          Seu plano de viagem termina aqui! Até a próxima
                          viagem.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
        <div id="aba2" style={{ display: "none" }}>
          <div className="p-5">
            <div>
              <Row className="justify-content-center">
                <Col className="text-center">
                  <h2 className="h2NomeLocal">Ingressos</h2>
                </Col>
              </Row>
              <Separador></Separador>
              <Row
                style={{ backgroundColor: "white" }}
                className="mb-3 border rounded-pill"
              >
                <Col className="text-center" xs={3} md={2}>
                  <input
                    className="w-100 h-50 mt-3   "
                    type="checkbox"
                    aria-label="Checkbox for following text input"
                  ></input>
                </Col>
                <Col xs={8} md={10}>
                  <h4 aria-label="Text input with checkbox">
                    {" "}
                    Arc de Triomphe — Paris
                  </h4>
                  <h6 aria-label="Text input with checkbox">
                    {" "}
                    Dia 2 - <Link to='/compras'>COMPRAR </Link>
                  </h6>
                </Col>
              </Row>
              <Row
                style={{ backgroundColor: "white" }}
                className="mb-3 border rounded-pill"
              >
                <Col className="text-center" xs={3} md={2}>
                  <input
                    className="w-100 h-50 mt-3"
                    type="checkbox"
                    aria-label="Checkbox for following text input"
                  ></input>
                </Col>
                <Col xs={8} md={10}>
                  <h4 aria-label="Text input with checkbox">
                    {" "}
                    Sainte-Chapelle — Paris
                  </h4>
                  <h6 aria-label="Text input with checkbox">
                    {" "}
                    Dia 3 - <Link to='/compras'>COMPRAR </Link>
                  </h6>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col className="text-center">
                  <h2 className="h2NomeLocal">Hoteis</h2>
                </Col>
              </Row>
              <Separador></Separador>
              <Row
                style={{ backgroundColor: "white" }}
                className="mb-3 border rounded-pill"
              >
                <Col className="text-center" xs={3} md={2}>
                  <input
                    className="w-100  h-50 mt-3"
                    type="checkbox"
                    aria-label="Checkbox for following text input"
                  ></input>
                </Col>
                <Col xs={8} md={10}>
                  <h4 aria-label="Text input with checkbox">
                    {" "}
                    Book a hotel in Nice
                  </h4>
                  <h6 aria-label="Text input with checkbox">
                    {" "}
                    Dia 2 a Dia 4 - <Link to='/compras'>COMPRAR </Link>
                  </h6>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col className="text-center">
                  <h2 className="h2NomeLocal">Viagens</h2>
                </Col>
              </Row>
              <Separador></Separador>
              <Row
                style={{ backgroundColor: "white" }}
                className="mb-3 border rounded-pill"
              >
                <Col className="text-center" xs={3} md={2}>
                  <input
                    className="w-100 h-50 mt-3"
                    type="checkbox"
                    aria-label="Checkbox for following text input"
                  ></input>
                </Col>
                <Col xs={8} md={10}>
                  <h4 aria-label="Text input with checkbox">
                    {" "}
                    Recife para Nice
                  </h4>
                  <h6 aria-label="Text input with checkbox">
                    {" "}
                    Avião - <Link to='/compras'>COMPRAR </Link>
                  </h6>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Container>
      <Footer></Footer>
    </div>
  );
}
