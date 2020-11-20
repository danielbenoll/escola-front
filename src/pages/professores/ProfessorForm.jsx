import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Pagina from '../../components/Pagina';
import validator from "../../validator/professorValidator";
import Input from "../../components/forms/Input";
import {mask, unMask} from 'remask'
import Select from '../../components/forms/Select';

export default() => {

    const {register, handleSubmit, errors} = useForm()
    const reference = { register, validator, errors}

    function enviar(dados){
        console.log(dados)
    }

    return(
        <Pagina titulo ="Professores">
            <Form onSubmit={handleSubmit(enviar)}>
                <Row>
                <Col sm={6}>
                        <Card>
                            <Card.Header className="bg-danger text-white">Dados Gerais</Card.Header>
                            <Card.Body>
                                <Input label="Nome:" name="nome" referencia={reference}/>
                                <Input label="CPF:" name="cpf" referencia={reference} mask='999.999.999-99'/>
                                <Input label="Matricula:" name="matricula" referencia={reference}/>
                                <Input label="E-mail:" name="email" referencia={reference}/>
                                <Input label="Telefone:" name="telefone" referencia={reference} mask={['(99) 9999-9999', '(99) 99999-9999']}/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={6}>
                        <Card>
                            <Card.Header className="bg-danger text-white">Endereço</Card.Header>
                            <Card.Body>
                                <Input label="Cep:" name="cep" referencia={reference} mask='99.999-999'/>
                                <Input label="Bairro:" name="bairro" referencia={reference}/>
                                <Input label="Logradouro:" name="logradouro" referencia={reference}/>
                                <Input label="Número:" name="numero" referencia={reference}/>
                                <Input label="Complemento:" name="complemento" referencia={reference}/>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <div className="text-center mb-3">
                    <Button type="submit" variant="success">Salvar</Button>
                    <Link to="/professoress" className="btn btn-danger ml-1">Voltar</Link>
                </div>
            </Form>

        </Pagina>
    )
}