export default function ComplementarioPath({ params }) {
  console.log(params);
  return (
    <SideBar>
      <h1>{params}</h1>
    </SideBar>
  );
}
