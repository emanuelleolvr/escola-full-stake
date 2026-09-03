"use client";
import { useState } from "react";
import Header from "../components/header";

export default function CadaAluno(){
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [serie, setSerie] = useState('');
    const [ra, setRa] = useState('');

    return (
        <>
            <Header/>
            
            <main className="container-cadastro">
                <h2>Cadastro de alunos</h2>
                
                <form className="form-cadastro" action="">
                    <div className="form-group">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" id="nome" value={nome} onChange={(e)=> setNome(e.target.value)}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="idade">Idade</label>
                        <input type="number" id="idade" value={idade} onChange={(e)=> setIdade(e.target.value)}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="serie">Série</label>
                        <input type="text" id="serie" value={serie} onChange={(e)=> setSerie(e.target.value)}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="ra">RA</label>
                        <input type="number" id="ra" value={ra} onChange={(e)=> setRa(e.target.value)}/>
                    </div>

                    <button type="submit" className="btn-enviar">Cadastrar Aluno</button>
                </form>
            </main>
        </>
    )
}
