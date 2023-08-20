export default function HomeStats() {
  return (
    <div>
      <section className="bg-white rounded-lg">
        <div className="mx-auto max-w-screen-xl p-5">
          <div className="flex flex-wrap gap-10 justify-center">
            <div className="flex flex-col rounded-lg border-2 border-black px-4 py-8 text-center ">
              <h3 className="text-[#003B71] text-3xl text-center font-bold mb-2">
                Red Mundial
              </h3>
              <dt className="order-last text-md font-medium text-gray-500 mt-5 text-center">
                de estudiantes en todo el mundo
              </dt>
              <dd className="text-4xl font-extrabold text-[#003264] md:text-6xl">
                +3M
              </dd>
            </div>

            <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
              <h3 className="text-[#003B71] text-3xl text-center font-bold mb-2">
                Presencia en
              </h3>
              <dt className="order-last text-md font-medium text-gray-500 mt-5 text-center">
                paises
              </dt>
              <dd className="text-4xl font-extrabold text-[#003264] md:text-6xl">
                +60
              </dd>
            </div>

            <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
              <h3 className="text-[#003B71] text-3xl text-center font-bold mb-2">
                Red de
              </h3>
              <dt className="order-last text-md font-medium text-gray-500 mt-5 text-center">
                Universidades
              </dt>
              <dd className="text-4xl font-extrabold text-[#003264] md:text-6xl">
                +135
              </dd>
            </div>

            <div className="flex flex-col rounded-lg border-2 border-black px-4 py-8 text-center ">
              <h3 className="text-[#003B71] text-3xl text-center font-bold mb-2">
                Institucion con
              </h3>
              <dt className="order-last text-md font-medium text-gray-500 mt-5 text-center">
                Estudiantes entre Colegio y Universidad
              </dt>
              <dd className="text-4xl font-extrabold text-[#003264] md:text-6xl">
                +3000
              </dd>
            </div>
          </div>
          <div className="bg-[#bbbbbb] lg:w-2/5 flex flex-col mt-10 lg:mb-10 lg:mr-20 justify-center p-10 text-sm text-white ml-auto ">
            <h3 className="my-5">En la UAB</h3>
            <p className="text-justify">
              entendemos que el desarrollo personal complementa el
              fortalecimiento académico y crecimiento profesional de los
              estudiantes. La metodología de aprendizaje en la UAB es integral,
              el campus universitario brinda la oportunidad a los estudiantes de
              desarrollar sus capacidades físicas, mentales y espirituales.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
