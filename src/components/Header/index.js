import React from 'react';
import {  Col, Image, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
    return (
        <header>
            <Navbar bg="light" expand="sm">
                <Navbar.Brand className='w-25' >
                    <Link to='/'> <Image className='w-25' src='/imagens/logo.png' /> </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Col>
                        <Link to='/login'>login</Link>
                    </Col>
                    <Col>
                        <Link to='/adm'>ADM</Link>
                    </Col>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

