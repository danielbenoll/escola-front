import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Pagina from '../../components/Pagina';
import apiAcademico from '../../services/apiAcademico';
import validator from "../../validator/semestreValidator";
import Input from "../../components/forms/Input";

export default() => {
    
    const {register, handleSubmit, errors} = useForm()

    const reference = { register, validator, errors}

    function enviar(dados){
        console.log(dados)
    }
    return(
        <Pagina titulo ="Semestre">
            <Form onSubmit={handleSubmit(enviar)}>
                <Row>
                    <Col sm={12}>
                        <Card>
                            <Card.Header className="bg-danger text-white">Dados Gerais</Card.Header>
                            <Card.Body>
                                <Input label="Nome:" name="nome" referencia={reference}/>
                                <Input label="Data de Início:" name="data_inicio" referencia={reference} mask='99/99/9999'/>
                                <Input label="Data do Fim:" name="data_fim" referencia={reference} mask='99/99/9999'/>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <div className="text-center mb-3">
                    <Button type="submit" variant="success">Salvar</Button>
                    <Link to="/semestres" className="btn btn-danger ml-1">Voltar</Link>
                </div>
            </Form>

        </Pagina>
    )
}