import Header from '@/components/header';
import PersonalData from '@/components/blocoProf';
import CampAluno from '@/components/campAlunos';

export default function PageEditarConta() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 relative overflow-hidden">
      {/* Elementos decorativos - Testando ainda*/}
      <div className="absolute -left-20 -top-20 w-64 h-64 bg-[#65B360] opacity-100 rounded-full"></div>
      <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#65B360] opacity-100 rounded-full "></div>
      
      <div className="relative z-10"> {/*Pro elemento ficar atrás*/}
        <Header />
        
        <main className="max-w-6xl mx-auto mt-8">
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            <PersonalData />
            
            <div className="w-full lg:w-[40%] bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Lista de Alunos</h2>
              
              <div className="space-y-3">
                 {['Aline Silveira Cordeiro', 'Bianca Peixin Avelino', 'Guilherme Martins Spiandorin', 'João Pedro Dumbra Sturla', 'Paulo Henrique Angelino Braga', 'Eloise Ferreira da Silva'].map((student) => (
                  <CampAluno 
                    key={student}
                    nome={student}
                    fotoInicial={student.split(' ').map(n => n[0]).join('').substring(0, 2)}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
