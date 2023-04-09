import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Card from "../../Components/Card";

const index = () => {
  const [posts, setPosts] = useState();
  const [text, setName] = useState([]);
  const [imagemUrl, setImagemUrl] = useState("");

  function handleUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      setImagemUrl(e.target.result);
    };
    reader.readAsDataURL(file);
  }
  const addPost = (e) => {
    e.preventDefault();
    const newPost = {
      text: posts,
      time: new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      imagemUrl: imagemUrl,
    };
    setName((prevState) => [...prevState, newPost]);
  };

  return (
    <>
      {/* NavBar - Componente - 1 */}
      <nav>
        <div className="flex flex-row justify-evenly ml-40 mt-12 ">
          <div className="flex -ml-60 ">
            <Image src="/logoLupa.png" width={50} height={50} alt="Logo" />

            <h1 className="text-5xl text-gray-700 font-bold">LocateMe</h1>
          </div>
          <Link
            href="/"
            className="flex  bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-3 rounded"
          >
            <div className="pe-1 ">
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
      </nav>
      <section>
        <form className="grid justify-items-center mt-10 ">
          <div className="w-3/6   mb-1 border border-blue-100 rounded-md bg-blue-100">
            <div className="px-1 py-1 bg-white rounded-md dark:bg-blue-100 ">
              <label htmlFor="comment" className="sr-only">
                Your comment
              </label>
              <textarea
                id="comment"
                rows="4"
                className="w-full px-1 py-1 text-sm text-gray-800 resize-none"
                placeholder="Write a comment..."
                onChange={(e) => {
                  setPosts(e.target.value);
                }}
              ></textarea>
            </div>

            <div className="flex items-center justify-between px-3 py-2 border-t">
              <div className="flex pl-0 space-x-1 sm:pl-0 text-xs">
                <input
                  onChange={handleUpload}
                  type="file"
                  className="inline-flex justify-end   text-gray-500 rounded cursor-pointer hover:text-gray-900 "
                ></input>
              </div>
              <button
            onClick={addPost}
            className="inline-flex items-center py-1 px-1 text-xs font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-400 hover:bg-blue-400"
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
          
        </form>

        <div className="grid justify-items-center  ">
          {text.map((item, index) => (
            <Card
              key={index}
              text={item.text}
              time={item.time}
              imagemUrl={item.imagemUrl}
            />
          ))}
        </div>
      </section>

      {/* /NavBar */}
    </>
  );
};

export default index;
