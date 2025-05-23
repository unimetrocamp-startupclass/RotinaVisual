import React from 'react';

interface CampAlunoProps {
  nome: string;
  fotoInicial?: string;
}

const CampAluno: React.FC<CampAlunoProps> = ({ nome, fotoInicial = 'EA' }) => {
  return (
    <div className="bg-[#F5F5F5] rounded-lg p-4 mb-3 flex items-center">
      {/* Moldurinha foda */}
      <div className="relative mr-4">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-yellow-600 to-yellow-300"></div>
        <div className="relative w-12 h-12 rounded-full bg-white border-2 border-white flex items-center justify-center">
          <span className="text-lg font-bold text-gray-600">{fotoInicial}</span>
        </div>
      </div>
      
      {/* Nome da cria alheia */}
      <h3 className="text-base font-medium text-gray-800">{nome}</h3>
    </div>
  );
};

export default CampAluno;
