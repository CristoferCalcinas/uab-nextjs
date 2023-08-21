import { CardFooter } from "./CardFooter";
import { CardPerfilProfesional } from "./CardPerfilProfesional";
import { CardPlanEstudios } from "./CardPlanEstudios";

export const Body = ({ bodyContent }) => {
  const { footer, perfil_campo, plan_de_estudios } = bodyContent;
  return (
    <div>
      <CardPerfilProfesional content={perfil_campo} />
      <CardPlanEstudios plan_de_estudios={plan_de_estudios} />
      <CardFooter contentFooter={footer} />
    </div>
  );
};
