import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pagina from '../../components/Pagina';
import apiAcademico from '../../services/apiAcademico';

export default() => {

    const [alunos, setAlunos] = useState()

    useEffect(()=>{
        apiAcademico.get('alunos').then(results => {
            console.log(results.data.data)
        })
    }, [])
    
    return(
        <Pagina titulo='Professores'>
            <Link to="/professoresForm"><Button variant="warning">Novo</Button></Link>
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
                    {/* {alunos.map(item =>(
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