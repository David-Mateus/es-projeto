import Image from "next/image";
export default function Card(props) {
  return (
    <>
      <div className="w-96 h-74  py-2 bg-gray-100 border rounded-md max-w-md mt-2 ">
        {/* create image */}
        <div className="flex  items-center px-4 py-3">
          <img
            className="h-8 w-8 rounded-full"
            src="https://picsum.photos/id/1027/150/150"
          />
          <div className="ml-3">
            <span className="text-sm font-semibold antialiased block leading-tight">
              Nome-profile
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

        <div className="flex items-center  justify-evenly   ">
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-4 rounded mr-2">
            Email
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-4 rounded">
            WhatsApp
          </button>
        </div>
      </div>
    </>
  );
}
