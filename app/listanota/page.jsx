"use client";
import { useState } from "react";
import Header from "../components/header";

export default function Boletim(){
    return (
       <>
            <Header/>
            
            <main className="container-lista">
                <h2>Boletim Escolar</h2>
                
                <div className="table-responsive">
                    <table className="tabela-alunos">
                        <thead>
                            <tr>
                                <th>Aluno</th>
                                <th>T1</th>
                                <th>T2</th>
                                <th>N1</th>
                                <th>N2</th>
                                <th>N3</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ fontWeight: '600', textAlign: 'left' }}>Emanuelle</td>
                                <td>8.5</td>
                                <td>9.0</td>
                                <td>7.5</td>
                                <td>8.0</td>
                                <td>9.5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
}
