import React from 'react';
import "./Cabecalho.css"
import { Navbar, Nav, NavDropdown, Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default (props) => {

    console.log(props)

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home">Sistema Acadêmico</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="nav-link" to="/alunos">Alunos</Link>
                        <Link className="nav-link" to="/professores">Professores</Link>
                        <Link className="nav-link" to="/turmas">Turmas</Link>
                        <Link className="nav-link" to="/cursos">Cursos</Link>
                        <Link className="nav-link" to="/diciplinas">Diciplinas</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

