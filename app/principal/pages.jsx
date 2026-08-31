import Header from '../components/header';
import Link from 'next/link';

export default function Principal() {
  return (
    <>
      <Header />
      
      <main className="conteudo-principal">
        
        {/* Painel Esquerdo: Manifesto e Logos de Parceria Conjunta */}
        <section className="painel-manifesto">
          <div className="manifesto-topo">
            <h2>Portal <br />De Fluxos <br /><mark>Acadêmicos</mark></h2>
          </div>
          
          <div className="manifesto-rodape">
            <p>
              Unidade Integrada SESI SENAI — Mirandópolis. Uma plataforma redesenhada para quebrar a mesmice, 
              priorizando respostas em tempo real e controle total dos dados escolares.
            </p>

            {/* Seção com os dois logotipos em conjunto */}
            <div className="manifesto-parceria">
              <p className="parceria-titulo">Instituições Integradas</p>
              <div className="parceria-logos">
                <img 
                  src="/logo.sesi.png" 
                  alt="Logo SESI" 
                  className="img-parceiro" 
                />
                <div className="parceria-divisor"></div>
                <img 
                  src="/logo-senai.png" 
                  alt="Logo SENAI" 
                  className="img-parceiro" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Painel Direito: O Bloco Conectado de Módulos (Bento Grid) */}
        <section className="painel-operacional">
          <Link href="/cadaaluno" className="bloco-sistema">
            <div>
              <span className="bloco-tag">[ Registro ]</span>
              <h3 className="bloco-titulo">Matrícula de Alunos</h3>
              <p className="bloco-descricao">Ingresso e documentação básica de novos discentes.</p>
            </div>
            <div className="bloco-seta">→</div>
          </Link>

          <Link href="/listaaluno" className="bloco-sistema">
            <div>
              <span className="bloco-tag">[ Consulta ]</span>
              <h3 className="bloco-titulo">Quadro de Estudantes</h3>
              <p className="bloco-descricao">Filtros avançados de turmas e prontuários eletrônicos.</p>
            </div>
            <div className="bloco-seta">→</div>
          </Link>

          <Link href="/notaaluno" className="bloco-sistema">
            <div>
              <span className="bloco-tag">[ Avaliação ]</span>
              <h3 className="bloco-titulo">Lançamento de Notas</h3>
              <p className="bloco-descricao">Gerenciamento de exames, critérios e conceitos escolares.</p>
            </div>
            <div className="bloco-seta">→</div>
          </Link>

          <Link href="/listanota" className="bloco-sistema">
            <div>
              <span className="bloco-tag">[ Análise ]</span>
              <h3 className="bloco-titulo">Boletins & Rendimento</h3>
              <p className="bloco-descricao">Fechamento de períodos letivos e relatórios de médias.</p>
            </div>
            <div className="bloco-seta">→</div>
          </Link>
        </section>

      </main>
    </>
  );
}




