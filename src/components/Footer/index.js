import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagramSquare, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'

import {  Col, Image, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {

    return (
        <footer>
            <Navbar bg="dark" expand="sm" className='mt-5 p-5'>
                <Navbar.Brand className='w-50'>
                    <Link to='/'> <Image className='w-25' src='/imagens/logo.png' /> </Link>
                </Navbar.Brand>

                <Col md className="d-flex">
                    <p style={{color:'white'}}>&copy; Rota viagem &middot; <Link to="#">Privacidade</Link> &middot; <Link to="#">Termos</Link> &middot; <Link to="#">Inicio</Link></p>
                </Col>
                <Col md className="d-flex justify-content-end">
                    <FontAwesomeIcon className="m-1" style={{ color: 'white', width: '10%', height: '10%' }} icon={faFacebookSquare} />
                    <FontAwesomeIcon className="m-1" style={{ color: 'white', width: '10%', height: '10%' }} icon={faInstagramSquare} />
                    <FontAwesomeIcon className="m-1" style={{ color: 'white', width: '10%', height: '10%' }} icon={faWhatsappSquare} />
                </Col>
            </Navbar>

        </footer>
    )
}
