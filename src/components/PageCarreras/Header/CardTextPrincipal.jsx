export const CardTextPrincipal = ({
  description,
  titleDescription,
  titleHeader,
}) => {
  console.log(description);
  return (
    <div className="flex flex-col items-start p-10">
      <div className="text-[#003264]">
        <h2 className="text-4xl uppercase">
          {description != undefined ? titleHeader : "Pending"}
        </h2>
        <h2 className="text-4xl font-bold mt-5">{titleDescription}</h2>
      </div>
      <div className="mt-10">
        <p className="">{description}</p>
      </div>
    </div>
  );
};
