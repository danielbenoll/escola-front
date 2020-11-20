import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Pagina from '../../components/Pagina';
import validator from "../../validator/cursoValidator";
import Input from "../../components/forms/Input";
import {mask, unMask} from 'remask'
import Select from '../../components/forms/Select';

export default() => {

    const {register, handleSubmit, errors} = useForm()
    const reference = { register, validator, errors}

    const modalidade = [
        {id: 'E', nome:'Ead'},
        {id: 'P', nome:'Presencial'},
        {id: 'S', nome:'Semi-Presencial'},
    ]

    function enviar(dados){
        console.log(dados)
    }

    return(
        <Pagina titulo ="Curso">
            <Form onSubmit={handleSubmit(enviar)}>
                <Row>
                    <Col sm={12}>
                        <Card>
                            <Card.Header className="bg-danger text-white">Dados Gerais</Card.Header>
                            <Card.Body>
                                <Input name="nome" label="Nome" referencia={reference}/>
                                <Input name="duracao" label="Duração" referencia={reference}/>
                                <Select name="modalidade" label="Modalidade" referencia={reference} lista={modalidade}/>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <div className="text-center mb-3">
                    <Button type="submit" variant="success">Salvar</Button>
                    <Link to="/cursos" className="btn btn-danger ml-1">Voltar</Link>
                </div>
            </Form>

        </Pagina>
    )
}