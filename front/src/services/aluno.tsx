import axios from 'axios';
import { AlunoEntity } from '../types/aluno';
import { API_URL } from '@/config/settings';

export const getAlunos = async (): Promise<AlunoEntity[]> => {
  try {
    const response = await axios.get<AlunoEntity[]>(`${API_URL}/aluno`);
    return response.data;
  } catch (error: any) {
    console.error('Error fetching alunos:', error.message);
    throw new Error('Failed to fetch student data from the backend.');
  }
};
