import { cargarPostgrado } from "@/app/api/apiPostgrado";
import filterCarrera from "@/app/api/filterCarrera";
import { PageCarrera } from "@/components/PageCarreras/PageCarrera";
export default async function PostgradoPath({ params }) {
  const pathActual = params.postgradoPath;
  const pathSinMaestria = pathActual.replace("maestria-en-", "");
  const data = await cargarPostgrado();
  
  const resp = filterCarrera(pathSinMaestria, data);
  return (<PageCarrera content={resp} titleHeader={"Maestría en"} />
  );
}
