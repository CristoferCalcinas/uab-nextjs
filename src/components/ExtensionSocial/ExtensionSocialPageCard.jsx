import { CardItem } from "./CardItem";

export const ExtensionSocialPageCard = ({ extensionSocial }) => {
  return (
    <section>
      <div className="flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
          <div className="w-full mx-auto">
            <h2 className="text-4xl text-white font-bold">Extension Social</h2>
          </div>
        </div>
        <div className="space-y-5 text-white mt-5">
          <h2 className=" font-bold text-2xl uppercase">
            Departamento de Bienestar Estudiantil
          </h2>
          <p className="text-start text-sm">
            Este departamento tiene un alcance amplio en el desarrollo
            institucional. Velando por el bienestar integral del alumnado en
            general en los niveles primario, secundario y universidad.
            Supervisa: Los internados de varones y señoritas; el comedor, y los
            departamentos que ofrecen servicios al alumnado; a su vez supervisa
            los sistemas de becas, como el sistema de seguro y también dirige el
            sistema disciplinario con su comisión de disciplina. En el área
            espiritual coordina y supervisa el trabajo de capellanía. Bienestar
            estudiantil vela porque la permanencia del estudiante interno y
            externo sea placentera dentro y fuera del campus disfrutando de los
            beneficios de la educación adventista y de su estilo de vida.
          </p>
        </div>

        {extensionSocial.map(({ id, items, title }) => (
          <CardItem key={id} items={items} title={title} id={id} />
        ))}
      </div>
    </section>
  );
};
