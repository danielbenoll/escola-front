import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Cabecalho from './components/Cabecalho';
import AlunoForm from './pages/alunos/AlunoForm';
import Alunos from './pages/alunos/Alunos';
import Curso from './pages/cursos/Curso';
import CursoForm from './pages/cursos/CursoForm';
import DisciplinaForm from './pages/disciplinas/DisciplinaForm';
import Disciplinas from './pages/disciplinas/Disciplinas';
import Professores from './pages/professores/Professores';
import ProfessorForm from './pages/professores/ProfessorForm';
import SalaForm from './pages/sala/SalaForm';
import Salas from './pages/sala/Salas';
import SemestreForm from './pages/semestre/SemestreForm';
import Semestres from './pages/semestre/Semestres';

export default() => {
    return(
        <>
            <BrowserRouter>

                <Cabecalho texto="CABEÇALHO MARAVILHOSO" titulo="Cabeçalho"/>
                
                <Route exact path="/" component={Alunos}/>
                <Route exact path="/alunos" component={Alunos}/>
                <Route exact path="/alunoForm" component={AlunoForm}/>
                <Route exact path="/cursos" component={Curso}/>
                <Route exact path="/cursoForm" component={CursoForm}/>
                <Route exact path="/salas" component={Salas}/>
                <Route exact path="/salaForm" component={SalaForm}/>
                <Route exact path="/professores" component={Professores}/>
                <Route exact path="/professoresForm" component={ProfessorForm}/>
                <Route exact path="/semestres" component={Semestres}/>
                <Route exact path="/semestreForm" component={SemestreForm}/>
                <Route exact path="/disciplinas" component={Disciplinas}/>
                <Route exact path="/disciplinaForm" component={DisciplinaForm}/>
            </BrowserRouter>
        </>
    )
}