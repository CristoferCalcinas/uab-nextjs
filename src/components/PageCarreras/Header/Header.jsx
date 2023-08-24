import { CardInfoPrincipal } from "./CardInfoPrincipal";
import { CardTextPrincipal } from "./CardTextPrincipal";

export const Header = ({ headContent, titleHeader }) => {
  const { title, cardContent, description } = headContent || {};
  return (
    <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center bg-white lg:p-10">
      <CardInfoPrincipal cardContent={cardContent} />
      <CardTextPrincipal
        description={description}
        titleDescription={title}
        titleHeader={titleHeader}
      />
    </div>
  );
};
