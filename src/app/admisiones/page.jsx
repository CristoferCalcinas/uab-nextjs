import { AdmisionesPageCard } from "@/components/Admisiones/AdmisionesPageCard";
import SideBar from "@/components/Sidebar/SideBar";
export const admisiones = [
  {
    id: 1,
    title: "Admisiones",
    subtitle: "REQUISITOS ESTUDIANTES NACIONALES",
    items: [
      "Certificado de nacimiento original.",
      "Fotocopia de cédula de identidad vigente.",
      "Fotocopia legalizada de diploma de bachiller.",
    ],
  },
  {
    id: 2,
    title: "Traspaso",
    subtitle: "REQUISITOS DE TRASPASO",
    items: [
      "Certificado de nacimiento original",
      "Fotocopia de cédula de identidad vigente",
      "Fotocopia legalizada de diploma de bachiller.",
      "Dos ejemplares de certificado de estudios o notas originales.",
      "Programa analítico de las asignaturas a convalidar.",
      "Plan de estudios con carga horaria con sello de la universidad.",
      "Fotocopia simple de la Resolución Ministerial de autorización de la carrera, en caso de universidades privadas del país.",
    ],
  },
  {
    id: 3,
    title: " Extranjeros",
    subtitle: "REQUISITOS ESTUDIANTES EXTRANJEROS",
    items: [
      "Certificado de nacimiento original apostillado.",
      "Fotocopia de cédula de identidad de extranjero vigente o pasaporte con visa vigente.",
      "Fotocopia de título de bachiller o documento equivalente apostillado.",
      "Resolución de Homologación de título de bachiller (El plazo de entrega es de 3 meses a partir del inicio de clases).",
      "Los universitarios extranjeros recibirán el asesoramiento necesario acudiendo al Departamento de Secretaría General de la UAB, al contacto WhatsApp +591 71737624 o al email: extranjeros.uab@ gmail.com.",
    ],
  },
];

export default function Admisiones() {
  return (
    <SideBar>
      <AdmisionesPageCard admisiones={admisiones} />
    </SideBar>
  );
}
