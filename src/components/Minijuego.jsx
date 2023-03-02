export default function Minijuego({ img, alt, titulo, descripcion }) {
  return (
    <section className="minijuego">
      <h1>{titulo}</h1>
      <div className="minijuego-content">
        <img src={img} alt={alt} />
        <p>{descripcion}</p>
      </div>
    </section>
  );
}
