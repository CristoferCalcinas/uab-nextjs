import { CarreraItem } from "@/components/Carreras/CarreraItem";
import imageCarrera1 from "@/images/imagesCarreras/ImageCarrera_1.jpg";
import imageCarrera2 from "@/images/imagesCarreras/ImageCarrera_2.jpg";
import imageCarrera3 from "@/images/imagesCarreras/ImageCarrera_3.jpg";
import imageCarrera4 from "@/images/imagesCarreras/ImageCarrera_4.jpg";
import imageCarrera5 from "@/images/imagesCarreras/ImageCarrera_5.jpg";
import imageCarrera6 from "@/images/imagesCarreras/ImageCarrera_6.jpg";
import imageCarrera7 from "@/images/imagesCarreras/ImageCarrera_7.jpg";
import imageCarrera8 from "@/images/imagesCarreras/ImageCarrera_8.jpg";
import imageCarrera9 from "@/images/imagesCarreras/ImageCarrera_9.jpg";
import imageCarrera10 from "@/images/imagesCarreras/ImageCarrera_10.jpg";
import imageCarrera11 from "@/images/imagesCarreras/ImageCarrera_11.jpg";
import imageCarrera12 from "@/images/imagesCarreras/ImageCarrera_12.jpg";
import imageCarrera13 from "@/images/imagesCarreras/ImageCarrera_13.jpg";
import imageCarrera14 from "@/images/imagesCarreras/ImageCarrera_14.jpg";
export const carreras = [
  {
    id: 1,
    title: "Ingeniería de Sistemas",
    duracion: "Nivel licenciatura - 4 Años - Sín exámen de ingreso.",
    img: imageCarrera1,
  },
  {
    id: 2,
    title: "Ingeniería en Redes y Telecomunicaciones",
    duracion: "Nivel licenciatura - 4 Años - Sín exámen de ingreso.",
    img: imageCarrera2,
  },
  {
    id: 3,
    title: "Ingeniería Ambiental",
    duracion: "Nivel licenciatura - 4 Años - Sín exámen de ingreso.",
    img: imageCarrera3,
  },
  {
    id: 4,
    title: "Administración y Negocios Internacionales",
    duracion: "Nivel licenciatura - 4 Años - Sín exámen de ingreso.",
    img: imageCarrera4,
  },
  {
    id: 5,
    title: "Contaduría Pública",
    duracion: "Nivel licenciatura - 4 Años - Sín exámen de ingreso.",
    img: imageCarrera5,
  },
  {
    id: 6,
    title: "Ingeniería Comercial",
    duracion: "Nivel licenciatura - 4 Años - Sín exámen de ingreso.",
    img: imageCarrera6,
  },
  {
    id: 7,
    title: "Psicologia",
    duracion: "Nivel licenciatura - 4 Años - Sín exámen de ingreso.",
    img: imageCarrera7,
  },
  {
    id: 8,
    title: "Psicopedagogia",
    duracion: "Nivel licenciatura - 4 Años - Sín exámen de ingreso.",
    img: imageCarrera8,
  },
  {
    id: 9,
    title: "Actividad Fisica y Deportes",
    duracion: "Nivel licenciatura - 4 Años - Sín exámen de ingreso.",
    img: imageCarrera9,
  },
  {
    id: 10,
    title: "Enfermeria",
    duracion: "Nivel licenciatura - 4 Años - Sín exámen de ingreso.",
    img: imageCarrera10,
  },
  {
    id: 11,
    title: "Nutricion y Dietetica",
    duracion: "Nivel licenciatura - 4 Años - Sín exámen de ingreso.",
    img: imageCarrera11,
  },
  {
    id: 12,
    title: "Fisioterapia y Kinesiologia",
    duracion: "Nivel licenciatura - 4 Años - Sín exámen de ingreso.",
    img: imageCarrera12,
  },
  {
    id: 13,
    title: "Bioquimica",
    duracion: "Nivel licenciatura - 4 Años - Sín exámen de ingreso.",
    img: imageCarrera13,
  },
  {
    id: 14,
    title: "Teologia",
    duracion: "Nivel licenciatura - 4 Años - Con exámen de ingreso.",
    img: imageCarrera14,
  },
];

export default function Carreras() {
  return (
    <section className="">
      <div className="container px-5 py-8 mx-auto space-y-7">
        <div className="flex flex-col text-center w-full">
          <h2 className="text-5xl title-font text-white font-bold">
            Carreras a nivel Licenciatura
          </h2>
        </div>

        <div className="flex flex-wrap justify-center -m-4">
          {carreras?.map(({ id, title, duracion, img }) => {
            return (
              <CarreraItem
                key={id}
                title={title}
                duracion={duracion}
                img={img}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
