import { cargarJSON } from "@/app/api/apiCarreras.js";
import fiterCarrera from "@/app/api/filterCarrera";
import { PageCarrera } from "@/components/PageCarreras/PageCarrera";

export default async function PathCarreras({ params }) {
  const { carrerasPath } = params;
  const data = await cargarJSON();
  const resp = fiterCarrera(carrerasPath, data);
  return <PageCarrera content={resp} titleHeader={"Licenciatura en"} />;
}
