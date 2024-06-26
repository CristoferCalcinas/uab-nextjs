import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-[#003b71] px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-300">404</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Error: Pagina no encontrada
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-300">
            Lo sentimos, no pudimos encontrar la página que estás buscando.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Volver al Inicio
            </Link>
            <Link href="#" className="text-sm font-semibold text-gray-200">
              Contactar con Soporte <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
