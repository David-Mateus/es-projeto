import Image from "next/image";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AuthContext } from "../../contexts/authContext";
import { useContext } from "react";
import { parseCookies } from "nookies";
import Head from "next/head";

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { isAuthenticated, signIn } = useContext(AuthContext)


  async function onSubmit(data) {
    try {
      await signIn(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    
    <>
    <Head>
        <title>Entrar | LocateMe</title>
        <meta
          name="description"
          content="você"
        />
        <link rel="icon" href="/logoLupa.png" />
      </Head>
      <div className="h-screen w-screen justify-center  flex items-center bg-gray-300">
        <div className="w-80">
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-row items-center justify-center lg:justify-start mb-4">
                <p className="mb-0 mr-4 text-lg">Sign in with</p>
                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="mx-1 h-9 w-9 rounded-full bg-blue-400 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-3.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </button>

                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="mx-1 h-9 w-9 rounded-full bg-blue-400 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-3.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </button>

                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="mx-1 h-9 w-9 rounded-full bg-blue-400 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-3.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </button>
              </div>
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold text-gray-600">
                  Or
                </p>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm  text-gray-700 mb-1">
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
                <p className="italic  text-xs text-red-400">{errors.email?.message}</p>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm  text-gray-700 mb-1 "
                >
                  Password
                </label>
                <input
                  {...register("password")}
                  type="password"
                  id="password"
                  name="password"
                  className="w-full mt-2 bg-gray-50 border border-gray-300 rounded px-2 py-1  text-sm text-gray-800placeholder-gray-300 focus:outline-none focus:shadow-outline-blue focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-500 ease-in-out "
                />
                <p className="italic  text-xs text-red-400">{errors.password?.message}</p>
              </div>
              <div className="text-right mb-4">
                <Link href="" className="text-sm text-blue-400 hover:underline">
                  Forgot password?
                </Link>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-400 border border-gray-300 hover:bg-blue-500 hover:text-white hover:border-gray-100 px-4 py-1 rounded text-white shadow"
                >
                  Entrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export const getServerSideProps = async (ctx) => {
  const { "findy-token": token } = parseCookies(ctx);

  if (token) {
    return {
      redirect: {
        destination: "/feed",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};