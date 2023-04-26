import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";
import Router from "next/router";
import Head from "next/head";

const schema = yup.object({
  name: yup.string().required(),
  phone: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});
export default function SignUp() {
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
        <title>Registre-se | LocateMe</title>
        <meta
          name="description"
          content="você"
        />
        <link rel="icon" href="/logoLupa.png" />
      </Head>

      <div className="h-screen w-screen justify-center bg-gray-300 flex items-center">
      
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
                <p className=" mb-0 mr-4 text-lg">Sign up</p>
              </div>
              <div>
                <label
                  htmlFor="first_name"
                  className="block text-sm  text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  {...register("name")}
                  className="w-full mt-1 bg-gray-50 border border-gray-300 rounded px-2 py-1 text-sm text-gray-800 
                placeholder-gray-300 focus:outline-none focus:shadow-outline-blue focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-500 ease-in-out "
                />
                <p className="italic  text-xs text-red-400" id="data-test-name">
                  {errors.name?.message}
                </p>
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block text-sm  text-gray-700 mb-1"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  {...register("phone")}
                  className="w-full mt-1 bg-gray-50 border border-gray-300 rounded px-2 py-1 text-sm text-gray-800 
                placeholder-gray-300 focus:outline-none focus:shadow-outline-blue focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-500 ease-in-out "
                />
                <p className="italic  text-xs text-red-400" id="data-test-phone">
                  {errors.phone?.message}
                </p>
              </div>

              <div>
                <label
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
                <p className="italilastNamec  text-xs text-red-400" id="data-test-email">
                  {errors.email?.message}
                </p>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm  text-gray-700 mb-1 "
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  {...register("password")}
                  className="w-full mt-2 bg-gray-50 border border-gray-300 rounded px-2 py-1  text-sm text-gray-800placeholder-gray-300 focus:outline-none focus:shadow-outline-blue focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-500 ease-in-out "
                />
                <p className="italic  text-xs text-red-400" id="data-test-password">
                  {errors.password?.message}
                </p>
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
                  Criar conta
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
