"use client";
import { useState } from "react";
import Header from "../components/header";

export default function NotaAluno() {
    // Estados para armazenar os valores digitados
    const [aluno, setAluno] = useState('');
    const [t1, setT1] = useState('');
    const [t2, setT2] = useState('');
    const [n1, setN1] = useState('');
    const [n2, setN2] = useState('');
    const [n3, setN3] = useState('');

    return (
        <>
            <Header/>
            
            <main className="container-cadastro">
                <h2>Lançamento de Notas</h2>
                
                <form className="form-cadastro" action="">
                    <div className="form-group">
                        <label htmlFor="aluno">Aluno</label>
                        <input 
                            type="text" 
                            id="aluno" 
                            placeholder="Nome do aluno"
                            value={aluno} 
                            onChange={(e) => setAluno(e.target.value)}
                        />
                    </div>

                    {/* Campos de Trabalhos */}
                    <div className="form-group">
                        <label htmlFor="t1">T1 (Trabalho 1)</label>
                        <input 
                            type="number" 
                            id="t1" 
                            step="0.1" 
                            min="0" 
                            max="10"
                            placeholder="0.0"
                            value={t1} 
                            onChange={(e) => setT1(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="t2">T2 (Trabalho 2)</label>
                        <input 
                            type="number" 
                            id="t2" 
                            step="0.1" 
                            min="0" 
                            max="10"
                            placeholder="0.0"
                            value={t2} 
                            onChange={(e) => setT2(e.target.value)}
                        />
                    </div>

                    {/* Campos de Notas */}
                    <div className="form-group">
                        <label htmlFor="n1">N1 (Nota 1)</label>
                        <input 
                            type="number" 
                            id="n1" 
                            step="0.1" 
                            min="0" 
                            max="10"
                            placeholder="0.0"
                            value={n1} 
                            onChange={(e) => setN1(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="n2">N2 (Nota 2)</label>
                        <input 
                            type="number" 
                            id="n2" 
                            step="0.1" 
                            min="0" 
                            max="10"
                            placeholder="0.0"
                            value={n2} 
                            onChange={(e) => setN2(e.target.value)}
                        />
                    </div>

                   <div className="form-group">
                        <label htmlFor="n3">N3 (Nota 3)</label>
                        <input 
                            type="number" 
                            id="n3" 
                            step="0.1" 
                            min="0" 
                            max="10"
                            placeholder="0.0"
                            value={n3} 
                            onChange={(e) => setN3(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn-enviar">Salvar Notas</button>
                </form>
            </main>
        </>
    );
}
