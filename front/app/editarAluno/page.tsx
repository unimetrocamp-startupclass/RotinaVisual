"use client";

import Header from '../../src/components/header';
import DadoPessoal from '@/components/cardDados';
import '../layout';
import { useEffect, useState } from 'react';
import { getAlunos } from '@/services/aluno';
import { AlunoEntity } from '@/types/aluno';

export default function Home() {

  const [alunos, setAlunos] = useState<AlunoEntity[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [aluno, setAluno] = useState<AlunoEntity>();

  useEffect(() => {
    const fetchAlunosData = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await getAlunos();
        setAlunos(data);
        console.log('Full data:\n', data);
        setAluno(data[0]);

      } catch (err: any) {
        setError(err.message || 'An unknown error occurred.');
      } finally {
        setLoading(false);
      }
    };

    fetchAlunosData();
  }, []);

  return (
    <>
      <Header
        rightContent={
          <div style={{
            backgroundColor: '#D9F0DB',
            borderRadius: '20px',
            padding: '10px 15px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <img src="/usuario.webp" alt="Perfil" style={{ borderRadius: '50%', width: '40px', height: '38px' }} />
            <span>João Paulo Martins</span>
            <img src="/Seta.webp" alt="seta" style={{ width: '20px', height: '20px' }} />
          </div>
        }
      />
      {loading && <p>Carregando...</p>}
      <div style={{ paddingTop: '125px' }}>
        <div style={{ padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
            <div style={{ flex: 1, backgroundColor: '#F7F7F7', borderRadius: '8px', padding: '16px', minHeight: '200px' }}>
            </div> {/* Para inserir "Notas do professor depois */}
            <div style={{ flex: 1, backgroundColor: '#F7F7F7', borderRadius: '8px', padding: '16px' }}>
              <h3>Dados pessoais</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <DadoPessoal titulo="Nome" valor={aluno?.nome} />
                <DadoPessoal titulo="Sobrenome" valor="da Silva" />
                <DadoPessoal titulo="RA" valor={String(aluno?.ra)} />
                {/* Adicionar CPF no back */}
                <DadoPessoal titulo="CPF" valor="295.652.350-34" />
                <DadoPessoal titulo="Laudo" valor={String(aluno?.divergencia)} />
                <DadoPessoal titulo="Medicação(ções)" valor={String(aluno?.medicacao)} />
              </div>
            </div>
          </div>
          <div style={{ paddingTop: '20px' }}>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'space-between' }}>
              <div style={{ flex: 1, backgroundColor: '#F7F7F7', borderRadius: '8px', padding: '16px' }}>
                <h3>Dados do respons vel</h3>
                <DadoPessoal titulo="Nome" valor="Diana" />
                <DadoPessoal titulo="Sobrenome" valor="Ferreira da Silva" />
                <DadoPessoal titulo="Parentesco" valor="M e" />
                <DadoPessoal titulo="Idade" valor="34" />
                <DadoPessoal titulo="Email" valor="diferreirasilva@gmail.com" />
                <DadoPessoal titulo="Telefone" valor="(93) 3547-1411" />
              </div>
            </div>
          </div>
          <div style={{ paddingTop: '20px' }}>
            <div style={{ flex: 1, backgroundColor: '#F7F7F7', borderRadius: '8px', padding: '16px' }}>
              <h3>Dados do segundo respons vel</h3>
              <DadoPessoal titulo="Nome" valor="Carlos" />
              <DadoPessoal titulo="Sobrenome" valor="Santos da Silva" />
              <DadoPessoal titulo="Parentesco" valor="Pai" />
              <DadoPessoal titulo="Idade" valor="36" />
              <DadoPessoal titulo="Email" valor="carlossantos@gmail.com" />
              <DadoPessoal titulo="Telefone" valor="(93) 3799-3066" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
