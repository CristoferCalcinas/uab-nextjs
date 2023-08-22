import { ExtensionSocialPageCard } from "@/components/ExtensionSocial/ExtensionSocialPageCard";
export const extensionSocial = [
  {
    id: 1,
    title: "Residencias Universitarias",
    items: [
      "Si vienes del interior del país o del extranjero una excelente opción para ti, son las residencias estudiantiles que te ofrece la uab. Ambientes muy cómodos que tienen baño privado, un espacio para el estudio, otro para el descanso y obviamente todas las habitaciones con wifi.",
      "Además, te brindamos los servicios de alimentación (desayuno, almuerzo y cena), lavandería, atención médica y las ventajas que te ofrece vivir dentro del campus: la piscina, las canchas, los jardines, en fin es como vivir todo el año en un hotel.",
    ],
  },
  {
    id: 2,
    title: "Vida Universitaria",
    items: [
      "La UAB cuenta con tres modernos bloques de aulas completamente equipadas para un aprendizaje acorde a las exigencias actuales, cada una de ellas equipadas con un sistema multimedia avanzado y de alta tecnología.",
      "A esto se suman los laboratorios especializados para poner en práctica lo aprendido en la teoría dentro de las aulas. Una infraestructura moderna es la que se erige en medio de hermosos jardines que ofrece todas las necesidades para una formación profesional de excelencia cuidando una educación integral que promueve el desarrollo físico, mental y espiritual.",
    ],
  },
  {
    id: 3,
    title: "Items",
    items: [
      "Mente sana en cuerpo sano. Esta es la razón fundamental por la cual la UAB cuenta con espacios destinados para el desarrollo y cuidado físico. Campos deportivos para la práctica de diferentes disciplinas, un gimnasio, un coliseo deportivo, que sirve también para actividades culturales y recreativas y una piscina semiolímpica atemperada y cubierta, que cuenta además con saunas seco y vapor.",
      "El cuidado espiritual es el de mayor énfasis en la vida universitaria de la UAB. Para ello contamos con una infraestructura y programas adecuados para el fortalecimiento y crecimiento espiritual de los estudiantes.",
      "En el templo universitario se desarrollan todos los programas y cultos de la iglesia. Las semanas de oración, los conciertos y programas musicales también permiten a los estudiantes acercarse continuamente a nuestro Creador.",
      "Ah! por cierto, si tienes el don de la música y lo quieres cultivar, en la UAB puedes hacerlo integrando el Coro Universitario, el Coro de Cámara o la Orquesta Sinfónica. La UAB te ofrece también residencias estudiantiles, una para señoritas y otra para varones, donde conocerás y harás amigos de diferentes lugares de Bolivia y también amigos de otros países.",
      "Las residencias estudiantiles te ofrecen los servicios de: hospedaje (habitaciones tipo suite que cuentan con baño privado, roperos empotrados y escritorios personales), alimentación en un moderno comedor con una capacidad para mil personas; lavandería, seguro médico, salas de estudio e internet wifi.",
    ],
  },
];
export default function ExtensionSocial() {
  return <ExtensionSocialPageCard extensionSocial={extensionSocial} />;
}
