export const EscuelaHeader = ({ titleSpan, p, title }) => {
  return (
    <div>
      <div className="flex flex-col text-[#003264] items-center space-y-5 mt-10">
        <span className="uppercase text-2xl">{titleSpan}</span>
        <h2 className="text-4xl font-bold">{title}</h2>
      </div>
      <ul className="space-y-2 mt-5 p-10 list-disc text-justify">
        {p.map((item) => {
          return (
            <li key={item} className="text-[#003264] ">
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
