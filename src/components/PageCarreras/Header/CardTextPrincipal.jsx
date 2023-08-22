export const CardTextPrincipal = ({
  description,
  titleDescription,
  titleHeader,
}) => {
  return (
    <div className="flex flex-col items-start p-10">
      <div className="text-[#003264]">
        <h2 className="text-4xl uppercase"> {titleHeader} </h2>
        <h2 className="text-4xl font-bold mt-5">{titleDescription}</h2>
      </div>
      <div className="mt-10">
        <p className="">{description}</p>
      </div>
    </div>
  );
};
