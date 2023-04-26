import Image from "next/image";
export default function NavbarHome(){
    return(
        <>
         <div className="  flex justify-between">
          <div >
            <div className="flex  ml-40 mt-8">
              <Image src="/icons.png" width={50} height={50} alt="Logo2" />
              <h1 className="text-5xl text-gray-700 font-bold">
                LocateMe
              </h1>
            </div>
          </div>
          <div>
            <Image src="/circle.png" width={150} height={150} alt="Hero" />
          </div>
        </div>
        </>
    )
}