import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        
        {/* Espaço do Logo */}
        <div className="logo-box">
          <h1>Portal<span>Edu</span></h1>
        </div>

        {/* Navegação */}
        <nav className="nav-box">
          <ul className="nav-lista">
            <li><Link href="/" className="nav-link">Início</Link></li>
            <li><Link href="/cadaaluno" className="nav-link">Cadastro</Link></li>
            <li><Link href="/listaaluno" className="nav-link">Estudantes</Link></li>
            <li><Link href="/notaaluno" className="nav-link">Notas</Link></li>
            <li><Link href="/listanota" className="nav-link">Boletins</Link></li>
          </ul>
        </nav>

      </div>
    </header>
  );
}




