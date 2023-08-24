import Image from "next/image";
import robotica from "@/images/GaleryImages/robotica.jpg";
import administracion_de_empresas from "@/images/GaleryImages/administracion_de_empresas.jpg";
import bioquimica from "@/images/GaleryImages/bioquimica.jpg";
import enfermeria from "@/images/GaleryImages/enfermeria.jpg";
import ing_telecomunicaciones from "@/images/GaleryImages/ing_telecomunicaciones.jpg";
import nutricion from "@/images/GaleryImages/nutricion.jpg";
import psicopedagogia from "@/images/GaleryImages/psicopedagogia.jpg";
import { ButtonMain } from "@/layouts/ButtonMain";
const callouts = [
  {
    name: "Self-Improvement",
    description: "Journals and note-taking",
    imageSrc: administracion_de_empresas,
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Travel1",
    description: "Daily commute essentials",
    imageSrc: bioquimica,
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Travel2",
    description: "Daily commute essentials",
    imageSrc: enfermeria,
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Travel3",
    description: "Daily commute essentials",
    imageSrc: ing_telecomunicaciones,
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Travel4",
    description: "Daily commute essentials",
    imageSrc: nutricion,
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Travel5",
    description: "Daily commute essentials",
    imageSrc: psicopedagogia,
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Title",
    description: "lorem ipsum dolor sit amet",
    imageSrc: robotica,
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
];

export default function Galery() {
  return (
    <div className="bg-gray-900 rounded-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-10 lg:max-w-none lg:py-10">
          <ButtonMain />

          <h2 className="text-2xl font-bold text-slate-400 my-5">
            Galeria de Fotos
          </h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 gap-y-5">
            {callouts.map((callout) => (
              <div
                key={callout.name}
                className="group relative animate__animated  animate__zoomInDown"
              >
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-pink-700 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <Image
                    className="h-full w-full object-cover object-center"
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    priority
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-400">
                  <div href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </div>
                </h3>
                <p className="text-base font-semibold text-gray-300">
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
