export const CardInfoPrincipal = ({ cardContent }) => {
  const { duracion, grado, ingreso, modalidad } = cardContent;
  return (
    <div className="">
      <div className="border border-black min-w-max">
        <div className="bg-[#003264] text-justify p-5">
          <h2 className="font-bold text-xl text-white">
            Descripción del programa
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center my-10">
          <ul className="space-y-5">
            <li className="border-b-2">{grado}</li>
            <li className="border-b-2">{modalidad}</li>
            <li className="border-b-2">{duracion}</li>
            <li className="border-b-2">{ingreso}</li>
          </ul>
          <div className="bg-[#6EC1E4] p-2 mt-5">
            <button className="text-white font-bold">Contáctanos</button>
          </div>
        </div>
      </div>
    </div>
  );
};
