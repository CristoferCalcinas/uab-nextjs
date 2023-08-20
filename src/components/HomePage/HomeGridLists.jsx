import "animate.css";

const projects = [
  {
    name: "Ingeniería de Sistemas",
    initials: "IS",
    href: "#",
    bgColor: "bg-pink-600",
  },
  {
    name: "Ingeniería en Redes y Telecomunicaciones",
    initials: "IRT",
    href: "#",
    bgColor: "bg-purple-600",
  },
  {
    name: "Ingeniería Ambiental",
    initials: "IA",
    href: "#",
    bgColor: "bg-yellow-500",
  },
  {
    name: "Administración y Negocios Internacionales",
    initials: "ANI",
    href: "#",
    bgColor: "bg-green-500",
  },
  {
    name: "Contaduría Pública",
    initials: "CP",
    href: "#",
    bgColor: "bg-cyan-500",
  },
  {
    name: "Ingeniería Comercial",
    initials: "IC",
    href: "#",
    bgColor: "bg-red-500",
  },
  {
    name: "Psicología",
    initials: "PS",
    href: "#",
    bgColor: "bg-blue-500",
  },
  {
    name: "Psicopedagogía",
    initials: "PP",
    href: "#",
    bgColor: "bg-orange-500",
  },
  {
    name: "Actividad Física y Deportes",
    initials: "AFD",
    href: "#",
    bgColor: "bg-gray-800",
  },
  {
    name: "Enfermería",
    initials: "ENF",
    href: "#",
    bgColor: "bg-sky-500",
  },
  {
    name: "Nutrición y Dietética",
    initials: "ND",
    href: "#",
    bgColor: "bg-pink-500",
  },
  {
    name: "Fisioterapia y Kinesiología",
    initials: "FYK",
    href: "#",
    bgColor: "bg-blue-900",
  },

  {
    name: "Bioquímica",
    initials: "BQ",
    href: "#",
    bgColor: "bg-green-900",
  },
  {
    name: "Teología",
    initials: "TEO",
    href: "#",
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
        {projects.map((project) => (
          <li
            key={project.name}
            className="col-span-1 flex rounded-md shadow-sm animate__animated animate__flash animate__repeat-2"
          >
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
                <a
                  href={project.href}
                  className="font-medium text-gray-900 hover:text-gray-600"
                >
                  {project.name}
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
