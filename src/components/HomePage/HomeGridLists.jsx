import "animate.css";
import Link from "next/link";

const projects = [
  {
    name: "Ingeniería de Sistemas",
    initials: "IS",
    bgColor: "bg-pink-600",
  },
  {
    name: "Ingeniería en Redes y Telecomunicaciones",
    initials: "IRT",
    bgColor: "bg-purple-600",
  },
  {
    name: "Ingeniería Ambiental",
    initials: "IA",
    bgColor: "bg-yellow-500",
  },
  {
    name: "Administración y Negocios Internacionales",
    initials: "ANI",
    bgColor: "bg-green-500",
  },
  {
    name: "Contaduría Pública",
    initials: "CP",
    bgColor: "bg-cyan-500",
  },
  {
    name: "Ingeniería Comercial",
    initials: "IC",
    bgColor: "bg-red-500",
  },
  {
    name: "Psicología",
    initials: "PS",
    bgColor: "bg-blue-500",
  },
  {
    name: "Psicopedagogía",
    initials: "PP",
    bgColor: "bg-orange-500",
  },
  {
    name: "Actividad Física y Deportes",
    initials: "AFD",
    bgColor: "bg-gray-800",
  },
  {
    name: "Enfermería",
    initials: "ENF",
    bgColor: "bg-sky-500",
  },
  {
    name: "Nutrición y Dietética",
    initials: "ND",
    bgColor: "bg-pink-500",
  },
  {
    name: "Fisioterapia y Kinesiología",
    initials: "FYK",
    bgColor: "bg-blue-900",
  },

  {
    name: "Bioquímica",
    initials: "BQ",
    bgColor: "bg-green-900",
  },
  {
    name: "Teología",
    initials: "TEO",
    bgColor: "bg-yellow-800",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HomeGridLists() {
  return (
    <div className="rounded-lg">
      <h2 className="text-lg font-bold text-gray-300">
        Carreras a Nivel Licenciatura
      </h2>
      <ul
        role="list"
        className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
      >
        {projects.map((project) => {
          const normalize = (str) => {
            return str
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .replace(/[^a-zA-Z0-9 ]/g, "")
              .replace(/\s+/g, "-")
              .toLowerCase();
          };
          return (
            <Link
              href={`/carreras/${normalize(project.name)}`}
              key={project.initials}
            >
              <li className="col-span-1 flex rounded-md shadow-sm animate__animated animate__flash animate__repeat-2">
                <div
                  className={classNames(
                    project.bgColor,
                    "flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white"
                  )}
                >
                  {project.initials}
                </div>
                <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                  <div className="flex-1 truncate px-4 py-2 text-sm ">
                    <h2 className="font-medium text-gray-900 hover:text-gray-600">
                      {project.name}
                    </h2>
                  </div>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
