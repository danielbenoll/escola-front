import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Pagina from '../../components/Pagina';
import apiAcademico from '../../services/apiAcademico';
import alunoValidator from "../../validator/alunoValidator";

export default() => {
    
    const {register, handleSubmit, errors} = useForm()

    function enviar(dados){
        console.log(dados)
        apiAcademico.post('alunos', dados).then(results=>{
            console.log(results.data)
        })
    }

    return(
        <Pagina titulo ="Formulário de Aluno">
            <Form onSubmit={handleSubmit(enviar)}>
                <Form.Group as={Row} controlId="nome">
                    <Form.Label column smo={3} className="text-right">Nome: <span className="text-danger">*</span></Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" name="nome" ref={register(alunoValidator.nome)} isInvalid={errors.nome} maxLength='50'/>
                        <Form.Control.Feedback type='invalid'>{errors.nome?.message}</Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="cpf">
                    <Form.Label column smo={3} className="text-right">CPF: <span className="text-danger">*</span></Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" name="cpf" ref={register(alunoValidator.cpf)} isInvalid={errors.cpf}/>
                        <Form.Control.Feedback type='invalid'>{errors.cpf?.message}</Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="matricula">
                    <Form.Label column smo={3} className="text-right">Matricula: <span className="text-danger">*</span></Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" name="matricula" ref={register(alunoValidator.matricula)} isInvalid={errors.matricula} maxLength='20'/>
                        <Form.Control.Feedback type='invalid'>{errors.matricula?.message}</Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="email">
                    <Form.Label column smo={3} className="text-right">Email: </Form.Label>
                    <Col sm={9}>
                        <Form.Control type="email" name="email" ref={register(alunoValidator.email)} isInvalid={errors.email} maxLength='100'/>
                        <Form.Control.Feedback type='invalid'>{errors.email?.message}</Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="telefone">
                    <Form.Label column smo={3} className="text-right">Telefone: </Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" name="telefone" ref={register(alunoValidator.telefone)} isInvalid={errors.telefone} maxLength='15'/>
                        <Form.Control.Feedback type='invalid'>{errors.telefone?.message}</Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="cep">
                    <Form.Label column smo={3} className="text-right">CEP: <span className="text-danger">*</span></Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" name="cep" ref={register(alunoValidator.cep)} isInvalid={errors.cep} maxLength='8'/>
                        <Form.Control.Feedback type='invalid'>{errors.cep?.message}</Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="uf">
                    <Form.Label column smo={3} className="text-right">UF: <span className="text-danger">*</span></Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" name="uf" ref={register(alunoValidator.uf)} isInvalid={errors.uf}/>
                        <Form.Control.Feedback type='invalid'>{errors.uf?.message}</Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="municipio">
                    <Form.Label column smo={3} className="text-right">Município: <span className="text-danger">*</span></Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" name="municipio" ref={register(alunoValidator.municipio)} isInvalid={errors.municipio}/>
                        <Form.Control.Feedback type='invalid'>{errors.municipio?.message}</Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="bairro">
                    <Form.Label column smo={3} className="text-right">Bairro: </Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" name="bairro" ref={register(alunoValidator.bairro)} isInvalid={errors.bairro}/>
                        <Form.Control.Feedback type='invalid'>{errors.bairro?.message}</Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="logradouro">
                    <Form.Label column smo={3} className="text-right">Logradouro: </Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" name="logradouro" ref={register(alunoValidator.logradouro)} isInvalid={errors.logradouro}/>
                        <Form.Control.Feedback type='invalid'>{errors.logradouro?.message}</Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="complemento">
                    <Form.Label column smo={3} className="text-right">Complemento: </Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" name="complemento" ref={register(alunoValidator.complemento)} isInvalid={errors.complemento}/>
                        <Form.Control.Feedback type='invalid'>{errors.complemento?.message}</Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="numero">
                    <Form.Label column smo={3} className="text-right">Número: <span className="text-danger">*</span></Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" name="numero" ref={register(alunoValidator.numero)} isInvalid={errors.numero} maxLength='20'/>
                        <Form.Control.Feedback type='invalid'>{errors.numero?.message}</Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <div className="text-center mb-3">
                    <Button type="submit" variant="success">Salvar</Button>
                    <Link to="/alunos" className="btn btn-danger ml-1">Voltar</Link>
                </div>
            </Form>

        </Pagina>
    )
}