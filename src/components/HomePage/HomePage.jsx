import "animate.css";
import Link from "next/link";
import Image from "next/image";
import image1 from "@/images/MainImages/main1.jpg";
import image2 from "@/images/MainImages/main2.jpg";
import image3 from "@/images/MainImages/main3.jpg";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-r from-green-500 to-sky-500 rounded-lg">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between ani animate__animated animate__zoomIn">
          <h2 className="text-3xl font-bold tracking-tight text-gray-600">
            Universiad Adventista de Bolivia
          </h2>
          <Link
            href={"/galery"}
            className="hidden text-base font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
          >
            Galeria de Fotos
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2 animate__animated animate__fadeInLeft">
            <Image
              alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
              className="object-cover object-center group-hover:opacity-75"
              src={image1}
              priority
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50"
            />
            <div className="flex items-end p-6">
              <div>
                <h3 className="font-bold text-white text-3xl">
                  <a href="#">
                    <span className="absolute inset-0" />
                    Carreras Profesionales
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-lg text-white">
                  14 Carreras a nivel Licenciatura
                </p>
              </div>
            </div>
          </div>

          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full animate__animated animate__fadeInDown">
            <Image
              className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 h-full w-full"
              alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
              src={image2}
              priority
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <a href="#">
                    <span className="absolute inset-0" />
                    Postgrado
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Maestrias - Diplomados
                </p>
              </div>
            </div>
          </div>

          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full animate__animated animate__fadeInUp">
            <Image
              className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
              alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
              src={image3}
              priority
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <a href="#">
                    <span className="absolute inset-0" />
                    Colegio
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Inicial - Primaria - Secundaria
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:hidden">
          <Link
            href="/galery"
            className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Galeria de Fotos
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
