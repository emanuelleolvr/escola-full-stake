"use client";
import { useState } from "react";
import Header from "../components/header";

export default function CadaAluno(){
    return (
       <>
            <Header/>
            
            <main className="container-lista">
                <h2>Lista de alunos</h2>
                
                <div className="table-responsive">
                    <table className="tabela-alunos">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Idade</th>
                                <th>Série</th>
                                <th>RA</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Emanuelle</td>
                                <td>17</td>
                                <td>3A</td>
                                <td>230028</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
}

