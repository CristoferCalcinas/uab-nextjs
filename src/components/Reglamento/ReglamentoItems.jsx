import Link from "next/link";

export const ReglamentoItems = ({ reglamento }) => {
  return (
    <div className="bg-white rounded-xl">
      <div className="flex flex-col items-center p-10 space-y-3">
        <span className="text-2xl lg:mr-52">SECRETARÍA GENERAL</span>
        <h2 className="text-4xl font-bold text-[#003b71]">
          Reglamentos Universitarios
        </h2>
      </div>
      <div className="flex items-center justify-center border-t-4">
        <ul className="mb-20 space-y-5 mt-5">
          {reglamento.map((item) => (
            <li
              className="text-white bg-[#003b71] px-10 py-5 rounded-lg text-center tracking-widest transition-transform hover:scale-110 "
              key={item}
            >
              <Link href={"/"} aria-disabled>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
