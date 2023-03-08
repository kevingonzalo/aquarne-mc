import { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [clicked, setClicked] = useState();
  const [btnResponsive, setBtnResponsive] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
    if (btnResponsive) {
      return setBtnResponsive(btnResponsive === false);
    } else {
      setBtnResponsive(!btnResponsive);
    }
  };
  return (
    <div className="navbar">
      <button onClick={handleClick} className={`btn-responsive ${btnResponsive ? "active" : ""}`.trim()}>
        <i className="fa-solid fa-bars"></i>
      </button>
      <ul className={`lista ${clicked ? "active" : ""}`.trim()}>
        <Link to="/" onClick={handleClick}>
          Inicio
        </Link>
        <Link to="/Rangos" onClick={handleClick}>
          Rangos
        </Link>

        <div className="separador"></div>

        <Link to="/Donaciones" onClick={handleClick}>
          Donaciones
        </Link>
        <Link to="/MiniJuegos" onClick={handleClick}>
          MiniJuegos
        </Link>
      </ul>
    </div>
  );
}
