import Link from "next/link";
import Image from "next/image";

const normalize = (str) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();
};
export const CarreraItem = ({ title, duracion, img }) => {
  const path = `/carreras/${normalize(title)}`;
  return (
    <Link href={path} className="p-4 lg:w-1/2">
      <div className="group h-full flex xl:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left p-5 border rounded-xl hover:bg-white">
        <Image
          alt={title}
          className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
          src={img}
        />
        <div className="pl-0 xl:pl-8">
          <h2 className="text-center xl:text-start font-bold text-2xl text-gray-400 mb-5 group-hover:text-black">
            {title}
          </h2>

          <p className="mb-4 text-slate-200 group-hover:text-black group-hover:font-medium">
            {duracion}
          </p>
        </div>
      </div>
    </Link>
  );
};
