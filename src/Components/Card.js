export default function Card(props) {
  return (
    <>
      <div className="h-58 w-96   py-4">
        <div className="bg-white border rounded-sm max-w-md">
          <div className="flex  items-center px-4 py-3">
            <img
              className="h-8 w-8 rounded-full"
              src="https://picsum.photos/id/1027/150/150"
            />
            <div className="ml-3 ">
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
          <img width="150" height="150" src={props.imagemUrl} />
        </div>
      </div>
    </>
  );
}
