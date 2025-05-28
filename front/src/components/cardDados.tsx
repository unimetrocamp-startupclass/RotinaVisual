import styles from './cardDados.module.css';

interface DadoPessoalProps {
    titulo: string;
    valor?: string;
}

export default function DadoPessoal({ titulo, valor }: DadoPessoalProps) {
  return (
    <div className={styles.caixa}>
      <span className={styles.titulo}>{titulo}</span>
      <p className={styles.valor}>{valor}</p>
    </div>
  );
}