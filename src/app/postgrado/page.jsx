import LayoutCards from "@/components/LayoutCard/LayoutCards";
import SideBar from "@/components/Sidebar/SideBar";
import imageLeterD from "@/images/imagesLetras/D.jpg";
import imageLeterM from "@/images/imagesLetras/M.jpg";

export const postgrado = [
  {
    id: 1,
    name: "Maestría en Administración de Empresas",
    title: "Nivel de egreso: Magister- 2 Años",
    available: "Disponible",
    imageUrl: imageLeterM,
  },
  {
    id: 2,
    name: "Maestría en Educación",
    title: "Nivel de egreso: Magister- 2 Años",
    available: "Disponible",
    imageUrl: imageLeterM,
  },
  {
    id: 3,
    name: "Diplomado en Educación Superior basada en Competencias",
    title: "Duración: 4 meses",
    available: "Disponible",
    imageUrl: imageLeterD,
  },
  {
    id: 4,
    name: "Diplomado en Consejería Familiar",
    title: "Duración: 4 meses",
    available: "Disponible",
    imageUrl: imageLeterD,
  },
  {
    id: 5,
    name: "Diplomado en Educación Virtual",
    title: "Duración: 4 meses",
    available: "Disponible",
    imageUrl: imageLeterD,
  },
];

export default function Postgrado() {
  return (
    <SideBar>
      <div className="p-7 text-center">
        <h2 className="text-4xl font-bold text-white">Postgrado UAB</h2>
      </div>
      <LayoutCards layoutInfo={postgrado} />
    </SideBar>
  );
}
