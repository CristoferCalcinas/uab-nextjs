import SideBar from "@/components/Sidebar/SideBar";

export default function PostgradoPath({ params }) {
  const pathActual = params.postgradoPath;
  console.log(pathActual);
  return (
    <SideBar>
      <h1>{pathActual}</h1>
    </SideBar>
  );
}
