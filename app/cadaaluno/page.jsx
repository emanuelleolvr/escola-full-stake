"use client";
import { useState } from "react";
import Header from "../components/header";

export default function CadaAluno(){
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [serie, setSerie] = useState('');
    const [ra, setRa] = useState('');

    async function cadastrarAlunos(eventos) {
        eventos.preventDefault();
        
        try {
            const resposta = await fetch("/api/alunos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json" 
                },
                body: JSON.stringify({
                    nome,
                    idade,
                    serie,
                    ra
                })
            });

            const dados = await resposta.json();
            
            // Correção aqui: verifica todas as variações de nomes que sua API usa (mensagem, message ou erro)
            alert(dados.mensagem || dados.message || dados.erro || "Operação realizada!");
            
            if(resposta.ok){
                setNome("")
                setIdade("")
                setSerie("")
                setRa("")
            }
        } catch (erro) {
            console.error("Erro na requisição:", erro);
            alert("Não foi possível conectar ao servidor.");
        }
    }

    return (
        <>
            <Header/>
            <main className="container-cadastro">
                <h2>Cadastro de alunos</h2>
                <form className="form-cadastro" onSubmit={cadastrarAlunos}>
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

