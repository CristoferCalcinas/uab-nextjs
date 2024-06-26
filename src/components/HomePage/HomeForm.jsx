import imageForm from "@/images/MainImages/imageForm.jpg";
import logo from "@/images/Logo_A.png";
import Image from "next/image";
export default function HomeForm() {
  return (
    <>
      <div className="flex min-h-full flex-1 bg-white rounded-lg">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div className="flex items-center justify-center">
              <Image className="h-10 w-auto" src={logo} alt="Logo UAB" />
            </div>

            <div className="mt-10">
              <div>
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label
                      htmlFor="text"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Nombre Completo
                    </label>
                    <div className="mt-2">
                      <input
                        id="text"
                        name="text"
                        type="text"
                        autoComplete="text"
                        required
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-5"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="number"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Numero de Telefono
                    </label>
                    <div className="mt-2">
                      <input
                        id="number"
                        name="number"
                        type="number"
                        autoComplete="number"
                        required
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-5"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:scale-125 transform transition"
                    >
                      Quiero Orientacion Vocacional
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <Image
            className="absolute inset-0 h-full w-full object-cover rounded-lg"
            src={imageForm}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
