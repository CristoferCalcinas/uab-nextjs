import { CardItem } from "./CardItem";

export const AdmisionesPageCard = ({ admisiones }) => {
  return (
    <section>
      <div className="flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
          <div className="w-full mx-auto">
            <h2 className="text-4xl text-white font-bold">ADMISIONES</h2>
          </div>
        </div>

        {admisiones.map(({ id, items, title, subtitle }) => (
          <CardItem
            key={id}
            items={items}
            title={title}
            subtitle={subtitle}
            id={id}
          />
        ))}
      </div>
    </section>
  );
};
