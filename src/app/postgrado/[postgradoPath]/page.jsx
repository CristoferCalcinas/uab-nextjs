export default function PostgradoPath({ params }) {
  const pathActual = params.postgradoPath;
  console.log(pathActual);
  return (
    <div>
      <h1>{pathActual}</h1>
    </div>
  );
}
