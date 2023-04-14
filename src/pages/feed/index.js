import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Modifica.module.css"
import { parseCookies } from "nookies";
import { api } from "../../services/api";
import Card from "../../Components/Card";
export default function Feed({ posts }) {
    return (
        <>
            <div className="px-12 bg-gray-200 h-min-full">
                {/* Inicio- Topo */}
                <div className=" bg-blue-500 h-50">
                    <div className="flex justify-between">
                        <div className="flex ml-8 mt-2">
                            <Image className="" src="/icons.png" width={30} height={30} alt="Logo" />
                            <h1 className="text-2xl text-gray-700 font-bold">LocateMe</h1>
                        </div>

                        <Link href="/profile">
                            <Image className="mr-16 mt-3" src="/imgTest/david1.png" alt="Imagem do usuário" width={40} height={40}/>
                        </Link> 
                        
                    </div>
                    <div className="flex justify-center itens-center">
                        <h1 className="min-w-0 mt-16 mr-100 text-white text-2xl font-serif">Lista de Itens</h1>
                    </div>
                </div>
                {/* Fim - Topo */}

                <div class="flex flex-col items-center justify-center">

                    {posts.map((post) => {
                        return (
                            <Card
                                key={post.id}
                                text={post.description}
                                time={post.createdAt}
                                imagemUrl={post.imagem}
                                name={post.user.name}
                                phone={post.user.phone}
                            />
                        )
                    })}
                    {/* Topo do Card */}


                </div>

            </div>
        </>

    );
}
export const getServerSideProps = async (ctx) => {
    const { 'findy-token': token } = parseCookies(ctx);

    if (!token) {
        return {
            redirect: {
                destination: "/authi/signInPage",
                permanent: false,
            },
        };
    }

    const response = await api.get('/posts')
    const posts = response.data

    return {
        props: { posts },
    };
};