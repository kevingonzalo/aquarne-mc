import RangoOro from "./img/Rango-oro.png";
import RangoDiamante from "./img/Rango-diamante.png";
import RangoRedstone from "./img/Rango-redstone.png";
import RangoEsmeralda from "./img/Rango-esmeralda.png";
import RangoElement from "./RangoElement";
import "./styles/Rangos.css";

export default function Rangos() {
  return (
    <section className="rangos">
      <h1>Rangos</h1>
      <hr className="linea-separadora" />
      <div className="rangos-list">
        <div className="elemento-rango oro">
          <RangoElement imagen={RangoOro} alt="Rango Oro de AquarneMC server minecraft" description="Rango Oro" />
        </div>
        <div className="elemento-rango diamante">
          <RangoElement
            imagen={RangoDiamante}
            alt="Rango Diamante de AquarneMC server minecraft"
            description="Rango Diamante"
          />{" "}
        </div>
        <div className="elemento-rango esmeralda">
          <RangoElement
            imagen={RangoEsmeralda}
            alt="Rango esmeralda de AquarneMC server minecraft"
            description="Rango esmeralda"
          />
        </div>
        <div className="elemento-rango redstone">
          <RangoElement
            imagen={RangoRedstone}
            alt="Rango redstone de AquarneMC server minecraft"
            description="Rango redstone"
          />
        </div>{" "}
      </div>
      <hr className="linea-separadora" />
    </section>
  );
}
