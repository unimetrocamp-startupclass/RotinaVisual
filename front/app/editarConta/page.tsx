import DadoPessoal from './cardDados';

export default function TeacherData() {
  return (
    <div className="w-full lg:w-[60%] space-y-6">
      {/* Foto e Nome */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <div className="relative mr-4">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-green-700 to-green-400"></div>
            <div className="relative w-16 h-16 rounded-full bg-gray-100 border-4 border-white flex items-center justify-center">
              <span className="text-xl font-bold text-gray-600">JP</span>
            </div>
          </div>
          <h2 className="text-xl font-bold text-gray-800">João Paulo Martins</h2>
          {/* Linhas decorativas */}
      <div className="mt-2 space-y-1">
        <div className="h-1 w-20 bg-green-500 rounded-full"></div> {/* Linha verde (maior) */}
        <div className="h-0.5 w-16 bg-yellow-400 rounded-full"></div> {/* Linha amarela (menor) */}
        </div>
      </div>
      </div>

      {/* Dados Pessoais */}
      <div className="bg-white rounded-lg shadow p-6">
        <div>
          <div className="flex items-center mb-4">
            <h3 className="text-lg font-bold text-black mr-4">Dados pessoais</h3>
            <div className="flex-grow h-px bg-black"></div>
          </div>

          <div className="space-y-4">

            <div className="grid grid-cols-2 gap-3">
              <DadoPessoal titulo="NOME" valor="João" />
              <DadoPessoal titulo="SOBRENOME" valor="Paulo Martins" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <DadoPessoal titulo="GÊNERO" valor="Masculino" />
              <DadoPessoal titulo="CPF" valor="178.188.150-23" />
            </div>
            <DadoPessoal titulo="ESPECIALIDADE" valor="Pedagogo" fullWidth/>
            <DadoPessoal titulo="DISCIPLINA" valor="Geografia" fullWidth />
          </div>

          <div className="flex justify-end mt-6">
            <button className="bg-[#F5F5F5] text-black font-bold py-2 px-4 rounded hover:bg-gray-200 transition">
              Sair
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
