export const CardPlanEstudios = ({ plan_de_estudios }) => {
  return (
    <div className="w-full bg-white p-10">
      <h2 className="text-xl mb-5">PLAN DE ESTUDIOS</h2>
      <ul className="flex flex-col space-y-2">
        {plan_de_estudios.map(({ materias, numSemestre }) => {
          return (
            <li
              className="flex p-2 items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white font-bold rounded-lg"
              key={numSemestre}
            >
              <details className="w-full h-full">
                <summary className="ml-10">{numSemestre}</summary>
                <ul className="flex flex-col mt-5 ml-20 list-disc mb-2">
                  {materias.map((materia) => {
                    return (
                      <li key={materia} className="">
                        {materia}
                      </li>
                    );
                  })}
                </ul>
              </details>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
