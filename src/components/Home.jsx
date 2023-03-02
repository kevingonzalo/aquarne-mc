import "./styles/Home.css";
import bienvenida from "./img/home-img.png";
export default function Home() {
  return (
    <section className="home" id="home">
      <h1>Bienvenidos</h1>
      <hr className="linea-separadora" />
      <div className="descripcion-home">
        <img src={bienvenida} alt="Bienvenido a la tienda oficial de Aquarne MC Server De MINECRAFT de EU" />
        <p>
          Bienvenido a la tienda oficial de Aquarne MC Server De MINECRAFT de EU. Aquí podrás adquirir artículos para
          mejorar tu experiencia dentro del servidor. Ofrecemos rangos y variedades globales o especificas por
          modalidad. Puede elegir la categoría del producto que deseas comprar en el menú de la parte superior y podras
          contactarne con nosotros por cualquier inquietud que tengas.{" "}
        </p>
      </div>
      <hr className="linea-separadora" />
    </section>
  );
}
