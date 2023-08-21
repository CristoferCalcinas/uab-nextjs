import { EscuelaHeader } from "./components/EscuelaHeader";
import { EscuelaCarrusel } from "./components/EscuelaCarrusel";
import { Esc_aux } from "./components/const/Esc_aux";

export const EscuelaPageGeneral = () => {
  const p = [
    "El Departamento de Música es una Unidad del Departamento de Difusión Cultural de nuestra Universidad, que tiene como objetivo dar a conocer y promover las actividades artísticas de nuestros estudiantes tanto Universitarios como de Colegio y público en general.",
  ];
  const titleSpan = "departamento de";
  const titleSpan2 = "programas de estudio";
  const title = "Música";
  const title2 = "Programa Regular";
  const p2 = Esc_aux;
  return (
    <div>
      <EscuelaHeader p={p} titleSpan={titleSpan} title={title} />
      <EscuelaHeader titleSpan={titleSpan2} title={title2} p={p2} />

      <div>{/* Descripcion del programa regular */}</div>
      <h6 className="text-red-500">Fase DE Prueba de EscuelaPageGeneral.jsx</h6>
      <EscuelaCarrusel />
    </div>
  );
};
