import styles from "./page.module.css";

export default function Home() {
  return (
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
  );
}
