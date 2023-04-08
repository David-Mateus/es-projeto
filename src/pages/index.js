import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Modifica.module.css"
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-300 to-blue-200">
      {/* NavBar */}
      <nav className="flex justify-between px-6 py-4 sm:px-8 sm:py-6">
        <div className="flex items-center pb-24">
          <Image className="w-11 h-10 sm:w-12 h-12" src="/icons.png" width={50} height={50} alt="Logo" />
          <h1 className="text-5xl text-gray-700 font-bold">
            LocateMe
          </h1>
        </div>
        <div>
          <Image src="/circle.png" width={150} height={150} alt="Hero" />
        </div>
      </nav>

      {/* Section */}
      <section className="container px-6 sm:px-8">
        <div className="flex flex-col items-center md:items-start md:flex-row md:space-x-16 xl:space-x-32">
          {/* Image */}
          <div className="mt-12 md:-mt-24">
              <Image className={styles.ajuste} src="/Ilustracao.png" width={500} height={500} alt="ilustração" />
          </div>

          {/* Text and checkout login */}
          <div className="mt-12 md:mt-0 md:flex-1 md:max-w-lg">
            <h1 className="mb-8 text-2xl font-bold text-gray-700 md:text-4xl">
              Não perca mais tempo procurando, o LocateMe está aqui para ajudar!
            </h1>
            <p className="mb-10 text-base text-gray-500">
              São Longuinho, São longuinho, se eu achar o que perdi prometo uma vela acender no seu caminho.
            </p>
            <div className="flex flex-col md:flex-row">
              <Link href="/signIn">
                <button className="inline-block mb-4 md:mb-0 md:mr-4 px-8 py-4 text-2xl font-medium text-black border rounded-lg bg-white border-teal-400 hover:bg-blue-500 ">
                  Entrar
                </button>
              </Link>
              <Link href="/signUp">
                <button className="inline-block px-8 py-4 text-2xl font-medium text-black border rounded-lg bg-blue-500 border-teal-400 hover:bg-white hover:bg-white">
                  Criar Perfil
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* /Section */}
    </div>
  );
}
