import Image from "next/image";
import Link from "next/link";
export default function Feed() {
  return (
    <>  
        <div className="bg-gray-200">
            {/* Inicio- Topo */}
            <div className="flex justify-center itens-center bg-blue-500 h-48">
                <h1 className="mt-16 mr-96 text-white text-2xl font-serif">Lista de Itens <br/>Perdidos</h1>
            </div>
            {/* Fim - Topo */}

            <div class="flex flex-col items-center justify-center h-screen">
                <div class="w-96 mb-28 bg-white rounded-lg shadow-lg overflow-hidden">

                    {/* Topo do Card */}
                    <div class="flex items-start justify-between bg-white h-32 pt-5">
                        <Image class="rounded-full ml-4" src="/imgTest/david1.png" alt="Imagem do usuário" width={66} height={66}/>
                        <h2 class="text-xl mt-4 mr-32 font-semibold text-gray-800">David Mateus</h2>
                    </div>

                    {/* Conteudo */}
                    <div class="p-4 border-b-2 border-gray-200">
                        <p class="text-gray-700">Descrição do usuário Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec massa vel quam dictum tempor.</p>
                        {/* <Image class="mt-4" src="/" alt="Imagem do meio do card"/> */}
                    </div>
        
                    {/* Rodapé do card */}
                    <div class="flex items-center justify-between bg-white  h-16 px-4">
                        <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2">Email</button>
                        <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">WhatsApp</button>
                    </div>
                </div>
            </div>
            
        </div>
    </>
    
  );
}