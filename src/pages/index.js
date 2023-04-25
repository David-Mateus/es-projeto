import Image from "next/image";
import Head from "next/head";
import ButtonProfile from "../components/ButtonProfile";
import NavbarHome from "../components/NavbarHome";

export default function Home() {
  return (
   <>
    <Head>
        <title>Home | LocateMe</title>
        <meta
          name="description"
          content="você"
        />
       
        <link rel="icon" href="/logoLupa.png" />
      </Head>
    <div className="h-screen bg-gray-300">
        {/* NavBar - Componente - 1 */}
       <NavbarHome/>
        {/* /NavBar */}

        {/* Section */}
        <div className="container  md-auto  ">
          <div className="flex space-x-36">
            {/* Image */}
            <div className="flex-shrink -mt-16 ml-20 ease-linear transform hover:scale-125 transition duration-700">
              <Image
                src="/Ilustracao.png"
                width={500}
                height={500}
                alt="ilustração"
              />
            </div>

            {/* Text and checkout login */}
            <div className=" space-y-6">
              <h1 className="text-gray-700  font-bold text-4xl ">
              Não perca mais tempo<br/>  procurando, o LocateMe<br/>  está aqui para ajudar!
              </h1>
              <p className="text-gray-500  text-base">
              São Longuinho, São longuinho, se eu achar o que <br/> perdi prometo uma vela acender no seu caminho.
              </p>

              <div className="flex flex-col md:flex-row">
              <ButtonProfile/>
            </div>
            </div>
          </div>
        </div>
        {/* /Section */}
      </div>
   </>
 
  );
}
