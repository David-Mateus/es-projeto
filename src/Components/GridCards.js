import React from "react";
import Image from "next/image";
export default function GridCards() {
  return (
    <>
      <section>
        <div className="grid justify-items-center grid-cols-2 gap-4 mt-10 mb-14">
          <div class="w-64 bg-white  rounded-lg px-4 py-4 ring-1 ">
            <div className="flex justify-center">
              <Image src="/image_1.png" width={60} height={60} alt="Logo" />
            </div>

            <h3 class="flex justify-center text-gray-800  mt-5 text-base font-medium tracking-tight">
              Ache objetos perdidos
            </h3>
            <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              Postar informações sobre objetos perdidos em locais públicos pode
              ajudar a reunir proprietários com seus itens perdidos e criar uma
              comunidade mais solidária.
            </p>
          </div>
          <div class="w-64 bg-white  rounded-lg px-4 py-4 ring-1 ">
            <div className="flex justify-center">
              <Image src="/image_2.png" width={60} height={60} alt="Logo" />
            </div>

            <h3 class="flex justify-center text-gray-800  mt-5 text-base font-medium tracking-tight">
              Ache objetos perdidos
            </h3>
            <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              Postar informações sobre objetos perdidos em locais públicos pode
              ajudar a reunir proprietários com seus itens perdidos e criar uma
              comunidade mais solidária.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
