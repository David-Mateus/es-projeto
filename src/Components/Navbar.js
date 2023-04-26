import Image from "next/image";
import Link from "next/link";
export default function NavBar(){
    return(
        <>
            <div className=" bg-blue-500 h-50">
                    <div className="flex justify-around">
                        <div className="flex ml-36 mt-4 sm:ml-20">
                            <Image className="" src="/icons.png" width={50} height={50} alt="Logo" />
                            <h1 className="text-5xl mr-80 text-slate-300 font-bold">LocateMe</h1>
                        </div>

                        <Link href="/profile">
                            <Image className="mr-10 mt-4 sm:mr-20" src="/imgTest/david1.png" alt="Imagem do usuário" width={40} height={40}/>
                        </Link> 
                        
                    </div>
                    <div className="flex justify-evenly itens-center ">
                        <h1 className=" mb-2 mt-14 mr-100 text-white text-2xl font-sans ">Lista de Itens</h1>
                    </div>
                </div>
        </>
    )
}