import { parseCookies } from "nookies";
import { api } from "../../services/api";
import Card from "../../components/Card";
import NavBar from "../../components/Navbar";
import Head from "next/head";
export default function Feed({ posts }) {
  return (
    <>
      <Head>
        <title>LocateMe | - Página inicial</title>
        <meta
          name="description"
          content="Encontre seus objetos perdidos com o LocateMe, o melhor site de achados e perdidos. Cadastre seus objetos e ajude a comunidade a recuperar seus pertences."
        />

        <link rel="icon" href="/logoLupa.png" />
      </Head>
      <div className="bg-gray-200 h-min-full">
        {/* Inicio- Topo */}
        <NavBar />
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
            );
          })}
          {/* Topo do Card */}
        </div>
      </div>
    </>
  );
}
export const getServerSideProps = async (ctx) => {
  const { "findy-token": token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: "/authi/signInPage",
        permanent: false,
      },
    };
  }

  const response = await api.get("/posts");
  const posts = response.data;

  return {
    props: { posts },
  };
};
