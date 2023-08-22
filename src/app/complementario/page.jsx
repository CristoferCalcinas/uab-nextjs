import LayoutCards from "@/components/LayoutCard/LayoutCards";
import imageLeterC from "@/images/imagesLetras/C.jpg";
export const complementarioInfo = [
  {
    id: 1,
    name: "Complementario en Administración y Negocios Internacionales",
    imageUrl: imageLeterC,
    title:
      "Nivel de egreso: Licenciatura Duración: 2 Años Requisito: Técnico Superior.",
    available: "Disponible",
  },
  {
    id: 2,
    name: "Complementario en Contaduría Pública",
    imageUrl: imageLeterC,
    title:
      "Nivel de egreso: Licenciatura Duración: 2 Años Requisito: Técnico Superior.",
    available: "Disponible",
  },
  {
    id: 3,
    name: "Complementario en Ingeniería de Sistemas",
    imageUrl: imageLeterC,
    title:
      "Nivel de egreso: Licenciatura Duración: 2 Años Requisito: Técnico Superior.",
    available: "Disponible",
  },
];
export default function Complementario() {
  return (
    <div>
      <div className="p-7 text-center">
        <h2 className="text-4xl font-bold text-white">Complementario UAB</h2>
      </div>
      <LayoutCards layoutInfo={complementarioInfo} />
    </div>
  );
}
