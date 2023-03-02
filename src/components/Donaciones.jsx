import "./styles/Donaciones.css";
import PaypalLogo from "./img/donacion-logo-paypal.png";
export default function Donaciones() {
  return (
    <section className="donaciones">
      <h1>Donaciones</h1>
      <hr className="linea-separadora" />
      <div className="donacion">
        <img src={PaypalLogo} alt="..." />
        <div className="donacion-content">
          <p>
            ¡Si quieres ayudarnos puedes donar lo que puedas para que sigamos creciendo y darles el mejor servicio y
            mejorar la experiencia de los jugadores dentro del servidor, por medio de PayPal puedes hacer tu donación
            desde ya muchas gracias!
          </p>
          <a href="https://www.paypal.com" target="_blank" rel="noreferrer">
            Donar
          </a>
        </div>
      </div>
      <hr className="linea-separadora" />
    </section>
  );
}
