import Image from "next/image";
import imageVenta1 from "@/images/imagesVentas/imageVenta1.jpg";
import imageVenta2 from "@/images/imagesVentas/imageVenta2.jpg";
import imageVenta3 from "@/images/imagesVentas/imageVenta3.jpg";
import imageVenta4 from "@/images/imagesVentas/imageVenta4.jpg";
import imageVenta5 from "@/images/imagesVentas/imageVenta5.jpg";
import imageVenta6 from "@/images/imagesVentas/imageVenta6.jpg";
import imageVenta7 from "@/images/imagesVentas/imageVenta7.jpg";
import imageVenta8 from "@/images/imagesVentas/imageVenta8.jpg";
import "animate.css";

export const features = [
  {
    id: 1,
    name: "Campus de Primer Nivel",
    description:
      "La UAB fomenta el aprendizaje internacional, ser estudiante de la UAB te garantiza un aprendizaje de lengua extranjera continuo y sin costo adicional durante toda tu carrera universitaria.",
    imageSrc: imageVenta1,
    imageAlt: "",
  },
  {
    id: 2,
    name: "Bloque moderno de aulas",
    description:
      "Hace un año inauguramos el nuevo y moderno bloque de aulas, con una capacidad de 2500 estudiantes.",
    imageSrc: imageVenta2,
    imageAlt: "",
  },
  {
    id: 3,
    name: "Calidad Académica",
    description:
      "La UAB tiene convenios que permite a los estudiantes hacer intercambios estudiantiles internacionales con otras universidades adventistas en el mundo.",
    imageSrc: imageVenta3,
    imageAlt: "",
  },
  {
    id: 4,
    name: "Experiencia Integral",
    description:
      "La UAB tiene convenios que permite a los estudiantes hacer intercambios estudiantiles internacionales con otras universidades adventistas en el mundo.",
    imageSrc: imageVenta4,
    imageAlt: "",
  },
  {
    id: 5,
    name: "Intercambios Estudiantiles",
    description:
      "La UAB tiene convenios que permite a los estudiantes hacer intercambios estudiantiles internacionales con otras universidades adventistas en el mundo.",
    imageSrc: imageVenta5,
    imageAlt: "",
  },
  {
    id: 6,
    name: "Biblioteca Virtual",
    description:
      "Centro de estudios y aprendizaje para la investigación con mas de 100.000 libros online.",
    imageSrc: imageVenta6,
    imageAlt: "",
  },
  {
    id: 7,
    name: "Residencias Estudiantiles",
    description:
      "Alimentación vegetariana buffet. Escuela de deportes y natación gratuita Modernas piezas.",
    imageSrc: imageVenta7,
    imageAlt: "",
  },
  {
    id: 8,
    name: "Ingles Gratuito",
    description:
      "La UAB fomenta el aprendizaje internacional, ser estudiante de la UAB te garantiza un aprendizaje de lengua extranjera continuo y sin costo adicional durante toda tu carrera universitaria.",
    imageSrc: imageVenta8,
    imageAlt: "",
  },
];

export default function Ventajas() {
  return (
    <div>
      <div className="bg-white rounded-xl">
        <div className="mx-auto max-w-7xl py-5 sm:px-2 sm:py-16 lg:px-4">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
            <div className="max-w-3xl text-center">
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Ventajas
              </h2>
            </div>

            <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="flex flex-col-reverse rounded-xl p-3 lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8 animate__animated animate__fadeInLeftBig group hover:bg-slate-600"
                >
                  <div className="mt-6 lg:col-span-5 lg:mt-0 xl:col-span-4 space-y-5">
                    <h3 className="text-3xl font-black text-gray-900 group-hover:text-cyan-100">
                      {feature.name}
                    </h3>
                    <p className="mt-2 text-lg text-gray-500 group-hover:text-cyan-100">
                      {feature.description}
                    </p>
                  </div>
                  <div className="flex-auto lg:col-span-7 xl:col-span-8">
                    <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        className="object-cover object-center group-hover:scale-125 group-hover:transition-all duration-500 ease-in-out"
                        src={feature.imageSrc}
                        alt={feature.imageAlt}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
