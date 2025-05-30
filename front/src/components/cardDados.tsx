import styles from './cardDados.module.css';

interface DadoPessoalProps {
  titulo: string;
  valor: string;
  fullWidth?: boolean;
}

export default function DadoPessoal({ titulo, valor, fullWidth }: DadoPessoalProps) {
  return (
    <div className={`${styles.caixa} ${fullWidth ? styles.caixaCompleta : ''}`}>
      <span className={styles.titulo}>{titulo}</span>
      <p className={styles.valor}>{valor}</p>
    </div>
  );
}
