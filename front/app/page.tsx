import Header from '../src/components/header';
import styles from "./page.module.css";

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

    <main className={styles.mainDiv}>
      <div className={styles.textDiv}>
        <h1>Rotina Visual</h1>
        <h4>Um sistema para auxílio de rotina para neurodiersos</h4>
        <p>
          <strong>Descrição:</strong> Um sistema que permite criar e
          personalizar rotinas visuais para alunos neurodivergentes. Essas
          rotinas podem incluir imagens, vídeos e descrições curtas para
          facilitar a compreensão do que deve ser feito.
        </p>
      </div>
    </main>
    </>
  );
}
