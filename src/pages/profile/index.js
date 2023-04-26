import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Card from "../../Components/Card";
import { parseCookies } from "nookies";
import GridCards from "../../Components/GridCards";
import Head from "next/head";
import { api } from "../../services/api";
import { imageApi } from "../../services/images";
import { Router, useRouter } from "next/router";

export default function Profile({ postList, userId }) {

  const [posts, setPosts] = useState();
  const [imagemUrl, setImagemUrl] = useState("");

  // function handleUpload(event) {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();

  //   reader.onload = function (e) {
  //     setImagemUrl(e.target.result);
  //   };
  //   reader.readAsDataURL(file);
  // }
  const router = useRouter()

  const addPost = async (e) => {
    await api.post('/posts/create', { description: posts, user: userId })
      .then(async (response) => {
        const postId = response.data._id
        await imageApi.post('/post/img/add', { post: postId, file: imagemUrl })
        router.reload()
      })

  };

  return (
    <>
      <Head>
        <title>Perfil | LocateMe</title>
        <meta
          name="description"
          content="você"
        />
        <link rel="icon" href="/logoLupa.png" />
      </Head>
      {/* NavBar - Componente - 1 */}

      <div className=" full-h-screen bg-slate-300 ">


        <div className="flex flex-row justify-evenly">
          <div className="flex -ml-30 mt-12">
            <Image src="/logoLupa.png" width={50} height={50} alt="Logo" />
            <h1 className="text-5xl text-gray-700 font-bold">LocateMe</h1>
          </div>
          <div
            className="-ml-30 mt-12"
          >
            <Link
              href="../feed/"
              className="flex bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-3 rounded"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </div>
              Pagina inicial
            </Link>
          </div>
        </div>
        {/* </div> */}

        <form className="grid justify-items-center mt-10 ">
          <div className="w-3/6   mb-1 border border-blue-100 rounded-md bg-blue-100">
            <div className="px-1 py-1 bg-white rounded-md dark:bg-blue-100 ">

              <textarea
                id="comment"
                rows="4"
                className="w-full px-1 py-1 text-sm text-gray-800 resize-none"
                placeholder="Digite seu comentário..."
                onChange={(e) => {
                  setPosts(e.target.value);
                }}
              ></textarea>
            </div>

            <div className="flex items-center justify-between px-3 py-2 border-t">
              <div className="flex pl-0 space-x-1 sm:pl-0 text-xs">
                <input
                  onChange={(e) => {
                    setImagemUrl(e.target.value);
                  }}
                  type="file"
                  className="inline-flex justify-end   text-gray-500 rounded cursor-pointer hover:text-gray-900 "
                ></input>
              </div>
              <button
                onClick={addPost}
                className="inline-flex items-center py-1 px-1 text-xs font-medium text-center text-white bg-blue-500 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-400 hover:bg-blue-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
          {postList.length == 0 && (<GridCards />)}

        </form>

      </div>

      <div className="full-h-screen bg-slate-300 ">
        <div className=" grid justify-items-center">
          {postList.map((post) => {
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
        </div>
      </div>

      {/* /NavBar */}
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const { 'findy-token': token, 'findy-user-id': userId } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: "/authi/signInPage",
        permanent: false,
      },
    };
  }

  const response = await api.get(`/posts/me/${userId}`)
  const postList = response.data.slice(0).reverse()

  // response.data.map(async (post) => {
  //   await imageApi.get(`/post/img/${post.id}`)
  //     .then((response => {
  //       const 
  //     }))
  // })

  return {
    props: { postList, userId },
  };
};
