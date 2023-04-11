import Image from "next/image";
import Link from "next/link";
export default function Feed() {
  return (
    <>  
        <div className="bg-gray-200">
            {/* Inicio- Topo */}
            <div className="bg-blue-500 h-54">
                <Link href="/" className="flex pl-10 pt-6 sm:pl-24">
                    <Image src="/imgTest/david1.png" alt="Imagem do usuário" width={66} height={66}/>
                </Link>
                <h1 className="mt-12 mr-90 pb-8 flex justify-center itens-center text-white text-2xl font-serif sm:mr-96">Lista de Itens</h1>
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
                        <Image class="mt-4" src="/imgTest/img-1.png" alt="Imagem do meio do card" width={100} height={100}/>
                    </div>
        
                    {/* Rodapé do card */}
                    <div class="flex items-center justify-end bg-gray-100 space-x-4 h-16 px-4 pr-6">
                        <Link href="/"><Image src="/imgTest/whatsapp.png" alt="Icone do Whatsapp" width={30} height={30}/></Link>

                        <Link href="/"><Image src="/imgTest/gmail.png" alt="Icone do Gmail" width={30} height={30}/></Link>
                    </div>
                </div>
            </div>
            
        </div>
    </>
    
  );
}