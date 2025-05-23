'use client';

import './headerStyle.css';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface HeaderProps {
  rightContent?: ReactNode;
}

export default function Header({ rightContent }: HeaderProps) {
  const pathname = usePathname();

  return (
    <header className="header">
      <div className="header-left">
        <img src="/logo.webp" alt="Logo APAE" className="logo" />
        <span className="empresa">APAE</span>
        <nav className="nav">
          <Link href="/editarConta" className={pathname === '/editarConta' ? 'active' : ''}>Editar conta</Link>
          <Link href="/editarAluno" className={pathname === '/editarAluno' ? 'active' : ''}>Editar aluno</Link>
          <Link href="/gerenciarAluno" className={pathname === '/gerenciarAluno' ? 'active' : ''}>Gerenciar aluno</Link>
        </nav>
      </div>
      <div className="header-right">
        {rightContent}
      </div>
    </header>
  );
}
