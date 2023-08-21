export const CardPerfilProfesional = ({ content }) => {
  const { campo, perfil } = content;
  return (
    <div className="space-y-5 my-5">
      <div className="bg-[#003264] text-white p-10 space-y-5">
        <div className="">
          <h2 className="font-bold text-xl">PERFIL PROFESIONAL</h2>
        </div>
        <div>
          <p>{perfil}</p>
        </div>
      </div>
      <div className="bg-white text-[#003264] p-10 space-y-5">
        <div className="">
          <h2 className="font-bold text-xl">CAMPO LABORAL:</h2>
        </div>
        <div>
          <p>{campo}</p>
        </div>
      </div>
    </div>
  );
};
