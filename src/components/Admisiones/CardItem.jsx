export const CardItem = ({ id, items, title, subtitle }) => {
  return (
    <div
      className={`flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-200 min-w-full sm:flex-row p-10 ${
        id % 2 != 0 ? "bg-white" : "text-white border-2"
      }`}
    >
      <div
        className={`inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full sm:mr-10  ${
          id % 2 != 0 ? "bg-[#003b71]" : "bg-gray-50"
        }`}
      >
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          className="w-10 h-10"
          viewBox="0 0 24 24"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <circle cx="12" cy="12" r="9"></circle>
          <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
          <line
            x1="3.6"
            y1="15"
            x2="14.15"
            y2="15"
            transform="rotate(72 12 12)"
          ></line>
          <line
            x1="3.6"
            y1="15"
            x2="14.15"
            y2="15"
            transform="rotate(144 12 12)"
          ></line>
          <line
            x1="3.6"
            y1="15"
            x2="14.15"
            y2="15"
            transform="rotate(216 12 12)"
          ></line>
          <line
            x1="3.6"
            y1="15"
            x2="14.15"
            y2="15"
            transform="rotate(288 12 12)"
          ></line>
        </svg>
      </div>
      <div className="flex-grow mt-6 prose text-start sm:text-left sm:mt-0 prose-md space-y-5">
        <h2 className="text-3xl font-bold">{title}</h2>
        <h3 className="">{subtitle}</h3>
        <ul>
          {items.map((item) => (
            <li className="list-disc ml-10" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
