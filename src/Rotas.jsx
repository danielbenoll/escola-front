import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Cabecalho from './components/Cabecalho';
import AlunoForm from './pages/alunos/AlunoForm';
import Alunos from './pages/alunos/Alunos';

export default() => {
    return(
        <>
            <BrowserRouter>

                <Cabecalho texto="CABEÇALHO MARAVILHOSO" titulo="Cabeçalho"/>
                
                <Route exact path="/" component={Alunos}/>
                <Route exact path="/alunos" component={Alunos}/>
                <Route exact path="/alunoForm" component={AlunoForm}/>
            </BrowserRouter>
        </>
    )
}