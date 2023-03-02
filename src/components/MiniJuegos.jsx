import Minijuego from "./Minijuego";
import "./styles/MiniJuegos.css";
import oneblock from "./img/minijuego-oneblock.png";
export default function MiniJuegos() {
  return (
    <section className="minijuegos">
      <h1>MiniJuegos</h1>
      <hr className="linea-separadora" />
      <div className="minijuegos-content">
        {/* <hr className="linea-separadora-minijuego" />
           <Minijuego
          img={}
          alt=""
          titulo="Survival Normal"
          descripcion="hola esto es un minijuego"
        />
        <hr className="linea-separadora-minijuego" />
        <Minijuego img={} alt="" titulo="Survival Faction" descripcion=""/>
        <hr className="linea-separadora-minijuego" />
        <Minijuego img={} alt="" titulo="PvP" descripcion=""/>
        <hr className="linea-separadora-minijuego" />
        <Minijuego img={} alt="" titulo="Eggwars" descripcion=""/>
        <hr className="linea-separadora-minijuego" />
        <Minijuego img={} alt="" titulo="Bedwars" descripcion=""/>
        <hr className="linea-separadora-minijuego" />
        <Minijuego img={} alt="" titulo="Skywars" descripcion=""/> */}
        <hr className="linea-separadora-minijuego" />
        <Minijuego
          img={oneblock}
          alt="minijuego servidor aquarneMC EU logo oneblock"
          titulo="oneblock"
          descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis optio voluptate eligendi a cum quibusdam laudantium voluptates qui repudiandae, eaque fugit nobis blanditiis neque earum commodi repellendus fugiat aspernatur ipsam inventore odio sed labore sint accusantium. Deleniti quia unde"
        />
        <hr className="linea-separadora-minijuego" />

        {/* <Minijuego img={} alt="" titulo="TNT Run" descripcion=""/>
        <hr className="linea-separadora-minijuego" /> */}
      </div>
      <hr className="linea-separadora" />
    </section>
  );
}
