import { ReglamentoItems } from "@/components/Reglamento/ReglamentoItems";

export const reglamentos = [
  "Reglamento de Autoevaluacion",
  "Reglamento Administrativo",
  "Reglamento Docente",
  "Reglamento de Becas",
  "Reglamento de Interaccion Social y Difusion Cultural",
  "Reglamento Estudiantil",
  "Reglamento de Graduacion",
  "Reglamento de Investigacion",
];

export default function Reglamentos() {
  return <ReglamentoItems reglamento={reglamentos} />;
}
