import Header from '../../src/components/header';
import DadoPessoal from '@/components/cardDados';
import '../layout';

export default function Home() {
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
            gap: '8px' }}>
            <img src="/usuario.webp" alt="Perfil" style={{ borderRadius: '50%', width: '40px', height: '38px' }}/>
            <span>João Paulo Martins</span>
            <img src="/Seta.webp" alt="seta" style={{ width: '20px', height: '20px' }}/>
          </div>
        }
      />
    <div style={{ paddingTop: '125px' }}>
    
        <div style={{ padding: '20px'}}>
        <div style={{display: 'flex', justifyContent: 'space-betweem', gap: '20px'}}>

      <div style={{flex: 1, backgroundColor: '#F7F7F7', borderRadius:'8px', padding: '16px', minHeight: '200px'}}>
      </div> {/*Para inserir "Notas do professor depois"*/}

      <div style={{flex:1, backgroundColor: '#F7F7F7', borderRadius: '8px', padding: '16px'}}>
      <h3>Dados pessoais</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
        <DadoPessoal titulo="Nome" valor="Eloise" />
        <DadoPessoal titulo="Sobrenome" valor="Ferreira da Silva" />
        <DadoPessoal titulo="RA" valor="4445242242" />
        <DadoPessoal titulo="CPF" valor="295.652.350-34" />
        <DadoPessoal titulo="Laudo" valor="Autismo (Nível 1)" />
        <DadoPessoal titulo="Medicação(ões)" valor="Risperidona" />
      </div>
      </div>
      </div>

      <div style={{ paddingTop: '20px' }}>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'space-betweem' }}>
      <div style={{ flex: 1, backgroundColor: '#F7F7F7', borderRadius: '8px', padding: '16px'}}>
        <h3>Dados do responsável</h3>
        <DadoPessoal titulo="Nome" valor="Diana" />
        <DadoPessoal titulo="Sobrenome" valor="Ferreira da Silva" />
        <DadoPessoal titulo="Parentesco" valor="Mãe" />
        <DadoPessoal titulo="Idade" valor="34" />
        <DadoPessoal titulo="Email" valor="diferreirasilva@gmail.com" />
        <DadoPessoal titulo="Telefone" valor="(93) 3547-1411" />
      </div>
      </div>
      </div>

    <div style={{ paddingTop: '20px' }}>
    <div style={{ flex: 1, backgroundColor: '#F7F7F7', borderRadius: '8px', padding: '16px' }}>
      <h3>Dados do segundo responsável</h3>
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