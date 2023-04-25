import Link from "next/link";
export default function ButtonProfile() {
  return (
    <>
      <Link href="./authi/signInPage">
        
        <button className="flex mb-4 md:mb-0 md:mr-4 px-6 py-3 text-xl font-bold text-gray-700 border rounded-lg bg-blue-400 border-teal-600 hover:bg-gray-300 ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
</svg>Entrar
          

        </button>
        
      </Link>
      <Link href="./authi/signupPage">
        <button className="flex  px-6 py-3 text-xl font-bold text-gray-700 border rounded-lg bg-blue-400 border-teal-600 hover:bg-gray-300 ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
</svg>
 Criar perfil
        </button>
      </Link>
    </>
  );
}
