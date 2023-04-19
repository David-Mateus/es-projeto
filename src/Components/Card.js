import Image from "next/image";
import Link from "next/link";
export default function Card(props) {
  return (
    <>
      <div className="w-96 h-72  py-2 bg-white border border-gray-300 rounded-md max-w-md mt-10 mb-6 ">
        {/* create image */}
        <div className="flex  items-center px-4 py-3">
          <img
            className="h-8 w-8 rounded-full"
            src="https://picsum.photos/id/1027/150/150"
          />
          <div className="ml-3">
            <span className="text-sm font-semibold antialiased block leading-tight">
              {props.name}
            </span>
            <span className="text-xs text-gray-600 block leading-tight">
              {props.time}
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-gray-600 text-ls block ">{props.text}</h2>
        </div>

        <div className="py-4 px-2">
          <Image width="130" height="130" src={props.imagemUrl} />
        </div>

        <div className="flex items-center  justify-center px-10  py-4 bg-gray-100 rounded-b-lg  border border-gray-300 ">
        <Link href={''} className="px-6 ">
            <Image src="/gmail.png" width={25} height={25}/>     
          </Link>
         
          <Link href={`https://wa.me/55${props.phone}`}>
            <Image src="/whatsapp.png" width={25} height={25}/>     
          </Link>
        </div>
      </div>
    </>
  );
}
