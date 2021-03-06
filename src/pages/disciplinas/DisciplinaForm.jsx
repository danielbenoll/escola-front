import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Pagina from '../../components/Pagina';
import apiAcademico from '../../services/apiAcademico';
import validator from "../../validator/disciplinaValidator";
import Input from "../../components/forms/Input";
import Select from '../../components/forms/Select';

export default() => {
    
    const {register, handleSubmit, errors} = useForm()

    const reference = { register, validator, errors}

    function enviar(dados){
        console.log(dados)
    }

    const curso = [
        {id: '1', nome:'Front End'},
        {id: '2', nome:'Dev-Ops'},
        {id: '3', nome:'Data WareHouse'},
        {id: '4', nome:'Gerencia de Projetos'},
    ]

    return(
        <Pagina titulo ="Disciplina">
            <Form onSubmit={handleSubmit(enviar)}>
                <Row>
                    <Col sm={12}>
                        <Card>
                            <Card.Header className="bg-danger text-white">Dados Gerais</Card.Header>
                            <Card.Body>
                                <Input label="Nome:" name="nome" referencia={reference}/>
                                <Select label="Curso" name="curso_id" referencia={reference} lista={curso}/>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <div className="text-center mb-3">
                    <Button type="submit" variant="success">Salvar</Button>
                    <Link to="/disciplinas" className="btn btn-danger ml-1">Voltar</Link>
                </div>
            </Form>

        </Pagina>
    )
}