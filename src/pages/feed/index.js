import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Modifica.module.css"
import { parseCookies } from "nookies";
import { api } from "../../services/api";
import Card from "../../Components/Card";
export default function Feed({ posts }) {
    return (
        <>
            <div className="bg-gray-200">
                {/* Inicio- Topo */}
                <div className="flex justify-center itens-center bg-blue-500 h-48">
                    <h1 className="mt-16 mr-96 text-white text-2xl font-serif">Lista de Itens <br />Perdidos</h1>
                </div>
                {/* Fim - Topo */}

                <div class="flex flex-col items-center justify-center h-screen">

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