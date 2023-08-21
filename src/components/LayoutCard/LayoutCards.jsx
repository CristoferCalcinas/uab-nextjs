import Image from "next/image";
import Link from "next/link";

export default function LayoutCards({ layoutInfo }) {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {layoutInfo.map((info) => {
        const normalize = (str) => {
          return str
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-zA-Z0-9 ]/g, "")
            .replace(/\s+/g, "-")
            .toLowerCase();
        };
        return (
          <li
            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
            key={info.id}
          >
            <Link href={`/postgrado/${normalize(info.name)}`}>
              <div className="flex flex-1 flex-col p-8">
                <Image
                  className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                  alt=""
                  src={info.imageUrl}
                />
                <h3 className="mt-6 text-sm font-medium text-gray-900">
                  {info.name}
                </h3>
                <dl className="mt-1 flex flex-grow flex-col justify-between">
                  <dt className="sr-only">Title</dt>
                  <dd className="text-sm text-gray-500">{info.title}</dd>
                  <dt className="sr-only">Role</dt>
                  <dd className="mt-3">
                    <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                      {info.available}
                    </span>
                  </dd>
                </dl>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
