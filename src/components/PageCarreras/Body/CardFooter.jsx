export const CardFooter = ({ contentFooter }) => {
  const { desc, objetivos } = contentFooter;
  return (
    <div className="my-10 bg-white p-5 lg:p-5">
      <div className="p-5 text-justify lg:p-14 border-b-2 border-b-black">
        <p>{desc}</p>
        <div className="flex text-[#003264] font-bold">
          <div>Imagen</div>
          <div className="ml-5">NOMBRE Y APELLIDO</div>
          <div>Director de Carrera</div>
        </div>
      </div>

      <div className="ml-5 lg:ml-56 mt-10">
        <div>
          <h2 className="font-bold">OBJETIVOS DE LA CARRERA</h2>
        </div>
        <div className="mt-4">
          <ul className="space-y-10">
            {objetivos.map(({ id, obj }) => {
              return (
                <li key={id}>
                  <span className="border-l-4 border-l-blue-500">
                    <span className="ml-10">{id}</span>
                  </span>
                  <p>{obj}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
