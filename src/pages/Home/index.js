import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Carousel } from 'react-bootstrap'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Separador from '../../components/Separador'

import MapContainer2 from '../../components/Mapa/testeMapa2'
import api from '../../services/api'

import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {

  //const [data, setData] = useState([]);
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjAyNjQzNzk4LCJleHAiOjE2MDMyNDg1OTh9.xQYYUuxFlx0SAQ4ESKB6RksXTUVRytFlFMTSCSZ2QFc";

  /*useEffect(() => {

    dataS();
  });*/

  async function dataS() {
    const teste2 = await api.get('home', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    })
    console.log(teste2);
  }
  dataS();



  return (
    <div className="telaInicial">
      <Header></Header>
      <Container>
        <MapContainer2 className="my-2"></MapContainer2>
        <Row>
          <Col>
            <h1 className="col-md text-center m-2 h1TextosAuxiliares">PRINCIPAIS DESTINOS</h1>
            <Separador></Separador>
          </Col>
        </Row>
        <Row>
          <Col md className="" >
            <Carousel className="d-block" controls={false} interval={2000} fade={true}>
              <Carousel.Item>
                <div style={{ width: '100%', height: '35vh', backgroundImage: "url('/imagens/1.jpg')", backgroundRepeat: 'repeat-y', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'white' }}> </div>
                <Carousel.Caption>
                  <h1>Buenos Aires</h1>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div style={{ width: '100%', height: '35vh', backgroundImage: "url('/imagens/2.jpg')", backgroundRepeat: 'repeat-y', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'white' }}> </div>
                <Carousel.Caption>
                  <h1>Canadá</h1>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item href='#'>
                <div style={{ width: '100%', height: '35vh', backgroundImage: "url('/imagens/3.jpg')", backgroundRepeat: 'repeat-y', backgroundSize: 'cover', backgroundPosition: 'top', backgroundColor: 'white' }}> </div>
                <Carousel.Caption>
                  <h1>Brasil</h1>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="col-md text-center m-2 h1TextosAuxiliares">ÚLTIMAS POSTAGENS</h1>
            <Separador></Separador>
          </Col>
        </Row>
        <Row>
          <Col md className="" fade="true" >
            <Carousel className="d-block" style={{ height: '50vh' }} interval={1500}>
              <Carousel.Item>
                <div className="" style={{ width: '100%', height: '50vh', backgroundColor: 'rgb(117, 117, 117)', textAlign: 'center', color: 'white' }}>
                  <h1 className="">Dicas para viagens</h1>
                  <h5 className="mt-5">Encontre as 5 principais dicas para todo viajantes! kasflkasçl asçlkfçlaskfa kafsçkaçf asçfkças</h5>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="" style={{ width: '100%', height: '50vh', backgroundColor: 'rgb(117, 117, 117)', textAlign: 'center', color: 'white' }}>
                  <h1 className="">Dicas para viagens</h1>
                  <h5 className="mt-5">Encontre as 5 principais dicas para todo viajantes! kasflkasçl asçlkfçlaskfa kafsçkaçf asçfkças</h5>
                </div>
              </Carousel.Item>
              <Carousel.Item href='#'>
                <div className="" style={{ width: '100%', height: '50vh', backgroundColor: 'rgb(117, 117, 117)', textAlign: 'center', color: 'white' }}>
                  <h1 className="">Dicas para viagens</h1>
                  <h5 className="mt-5" >Encontre as 5 principais dicas para todo viajantes! kasflkasçl asçlkfçlaskfa kafsçkaçf asçfkças</h5>
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
      <Footer> </Footer>
    </div>
  );
}

