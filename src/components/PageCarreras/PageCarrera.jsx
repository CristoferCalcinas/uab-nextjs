import { Header } from "./Header/Header";
import { Body } from "./Body/Body";

export const PageCarrera = ({ content }) => {
  const { id, head, body } = content;
  return (
    <div className="lg:p-10">
      <div>
        <Header headContent={head} />
      </div>
      <div>
        <Body bodyContent={body} />
      </div>
    </div>
  );
};
