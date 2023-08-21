import { cargarJSON } from "@/app/api/apiCarreras.js";
import fiterCarrera from "@/app/api/filterCarrera";
import { PageCarrera } from "@/components/PageCarreras/PageCarrera";
import SideBar from "@/components/Sidebar/SideBar";

export default async function PathCarreras({ params }) {
  const { carrerasPath } = params;
  const data = await cargarJSON();
  const resp = fiterCarrera(carrerasPath, data);
  return (
    <SideBar>
      <PageCarrera content={resp} />
    </SideBar>
  );
}
