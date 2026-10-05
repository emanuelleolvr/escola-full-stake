"use client"; 

import { useState, useEffect } from "react"; 
import Header from "../components/header"; 

export default function ListAluno() { 
  const [alunos, setAlunos] = useState([]); 

  
  async function buscarAlunos() { 
    try { 
      const resposta = await fetch("/api/alunos"); 
      const dados = await resposta.json(); 
      setAlunos(dados); 
    } catch (erro) { 
      console.error("Erro ao buscar alunos:", erro); 
    } 
  } 

  
  async function excluirAluno(id_aluno) { 
    const confirmar = window.confirm("Tem certeza que deseja excluir este aluno?"); 
    if (confirmar) { 
      try { 
        const resposta = await fetch("/api/alunos", { 
          method: "DELETE", 
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ id_aluno: id_aluno }) 
        }); 

        if (resposta.ok) { 
         
          setAlunos(alunos.filter((aluno) => aluno.id_aluno !== id_aluno)); 
          alert("Aluno excluído com sucesso!"); 
        } else { 
          alert("Erro ao excluir o aluno. A API retornou um erro."); 
        } 
      } catch (erro) { 
        console.error("Erro na requisição de exclusão:", erro); 
        alert("Erro de conexão ao tentar excluir."); 
      } 
    } 
  } 

  
  useEffect(() => { 
    buscarAlunos(); 
  }, []); 

  return ( 
    <> 
      <Header /> 
      <main style={{ padding: "30px" }}> 
        <h2>Lista de alunos</h2> 
        <div style={{ width: "100%", overflowX: "auto" }}> 
          <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "white" }}> 
            <thead> 
              <tr> 
                <th style={estiloTh}>ID</th> 
                <th style={estiloTh}>Nome</th> 
                <th style={estiloTh}>Idade</th> 
                <th style={estiloTh}>Série</th> 
                <th style={estiloTh}>RA</th> 
                <th style={estiloTh}>Ações</th> 
              </tr> 
            </thead> 
            <tbody> 
              {alunos.map((aluno) => { 
                return ( 
                  <tr key={aluno.id_aluno}> 
                    <td style={estiloTd}>{aluno.id_aluno}</td> 
                    <td style={estiloTd}>{aluno.nome}</td> 
                    <td style={estiloTd}>{aluno.idade}</td> 
                    <td style={estiloTd}>{aluno.serie}</td> 
                    <td style={estiloTd}>{aluno.ra}</td> 
                    <td style={estiloTd}> 
                      <button style={{ padding: "8px 15px", marginRight: "8px", border: "none", borderRadius: "5px", backgroundColor: "#020202", color: "white", cursor: "pointer", }} > 
                        Editar 
                      </button> 
                      <button onClick={() => excluirAluno(aluno.id_aluno)} style={{ padding: "8px 15px", border: "none", borderRadius: "5px", backgroundColor: "#690d16", color: "white", cursor: "pointer", }} > 
                        Excluir 
                      </button> 
                    </td> 
                  </tr> 
                ); 
              })} 
            </tbody> 
          </table> 
        </div> 
      </main> 
    </> 
  ); 
} 

const estiloTh = { 
  padding: "12px", 
  border: "1px solid #ddd", 
  textAlign: "center", 
  backgroundColor: "#222", 
  color: "white", 
}; 

const estiloTd = { 
  padding: "12px", 
  border: "1px solid #ddd", 
  textAlign: "center", 
};
