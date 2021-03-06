import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pagina from '../../components/Pagina';
import apiAcademico from '../../services/apiAcademico';

export default() => {

    const [semestres, setSemestres] = useState()

    useEffect(()=>{
        apiAcademico.get('semestres').then(results => {
            console.log(results.data.data)
        })
    }, [])
    
    return(
        <Pagina titulo='Semestres'>
            <Link to="/semestreForm"><Button variant="warning">Novo</Button></Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Ações</th>
                        <th>Nome</th>
                        <th>Matricula</th>
                        <th>Telefone</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {semestres.map(item =>(
                        <tr key={item.id}>
                            <td></td>
                            <td>{item.nome}</td>
                            <td>{item.matricula}</td>
                            <td>{item.telefone}</td>
                        </tr>
                    ))} */}
                </tbody>
                </Table>
        </Pagina>
    )
}