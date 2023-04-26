import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";
import Router from "next/router";
import Head from "next/head";

const schema = yup.object({
  email: yup.string().email().required(), 
});
export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  async function onSubmit(data) {
    try {
      await api.post("/auth/register", data);
      Router.push("/authi/signInPage");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <Head>
        <title> Esqueceu sua senha | LocateMe</title>
        <meta name="description" content="você" />
        <link rel="icon" href="/logoLupa.png" />
      </Head>
      <div className="h-screen w-screen justify-center  flex items-center bg-gray-300">
        <div className="w-96">
          <div className="flex justify-center items-center -mt-14 mb-4">
            <Link href="/">
              <Image
              
                src="/Ilustracao.png"
                alt="Picture of the author"
                width={70}
                height={70}
              />
            </Link>
          </div>
            
          <div className="bg-white shadow-md rounded-md p-6 space-y-3">
          <h2 className="text-2xl font-sans font-semibold text-slate-700">Esqueceu sua senha</h2>
          <p className="text-sm font-sans text-slate-700">Não se preocupe! Basta digitar seu e-mail e enviaremos um código para redefinir sua senha!</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                
                <label
                
                  id="email"
                  htmlFor="email"
                  className="block text-sm  text-gray-700 mb-1"
                >
                  Email address
                </label>
                <input
                   {...register("email")}
                  type="text"
                  id="email"
                  name="email"
                  className="w-full mt-1 bg-gray-50 border border-gray-300 rounded px-2 py-1 text-sm text-gray-800 
                placeholder-gray-300 focus:outline-none focus:shadow-outline-blue focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-500 ease-in-out "
                />
                <p className="italic  text-xs text-red-400" id="data-test-email">
                 {errors.email?.message}
                </p>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-400 border border-gray-300 mt-4 hover:bg-blue-500 hover:text-white hover:border-gray-100 px-4 py-1 rounded text-white shadow"
                >
                  Redefinir senha
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
