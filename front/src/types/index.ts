export interface CardData {
  title: string;
  description: string;
  backgroundColor?: string;
}

export interface CardProps {
  title: string;
  description: string;
  backgroundColor?: string;
  children?: React.ReactNode;
}
