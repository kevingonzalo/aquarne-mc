import Minijuego from "./Minijuego";
import "./styles/MiniJuegos.css";
import oneblock from "./img/minijuego-oneblock.png";
import survivalNormal from "./img/minijuego-survival-normal.jpeg";
import survivalFaction from "./img/minijuego-Survival Faction.png";
import minijuegoPvp from "./img/minijuego-pvp.png";
import minijuegoEggwars from "./img/minijuego-eggwars.png";
import minijuegoBedwars from "./img/minijuego-Bedwars.png";
import minijuegoSkywars from "./img/minijuego-skywars.png";
import minijuegoTNTRun from "./img/minijuego-TNT Run.png";
export default function MiniJuegos() {
  return (
    <section className="minijuegos">
      <h1>MiniJuegos</h1>
      <hr className="linea-separadora" />
      <div className="minijuegos-content">
        <hr className="linea-separadora-minijuego" />
        <Minijuego
          img={survivalNormal}
          alt="Este modo de juego se basa en que empiezas en un mundo de un jugador o varios jugadores si es un servidor sin nada encima. En servidores o configurando el juego puedes empezar con un cofre inicial o un kit. El objetivo del juego es conseguir recursos, bloques, herramientas, comida y todo lo necesario para sobrevivir. Deberás defenderte de monstruos y otros jugadores (en caso de servidores PvP)."
          titulo="Survival Normal"
          descripcion="Este modo de juego se basa en que empiezas en un mundo de un jugador o varios jugadores si es un servidor sin nada encima. En servidores o configurando el juego puedes empezar con un cofre inicial o un kit. El objetivo del juego es conseguir recursos, bloques, herramientas, comida y todo lo necesario para sobrevivir. Deberás defenderte de monstruos y otros jugadores (en caso de servidores PvP)."
        />
        <hr className="linea-separadora-minijuego" />
        <Minijuego
          img={survivalFaction}
          alt="Factions es un plugin de Minecraft que por su complejidad y funciones podría considerarse en sí mismo un modo de juego. Permite crear un servidor basado en PVP completo con gran cantidad de funciones y características configurables. Su nombre viene del inglés FACCIÓN o clan. Este plugin permite la creación de clanes para tener en común una base protegida y poder atacar en conjunto a otros enemigos."
          titulo="Survival Faction"
          descripcion="Factions es un plugin de Minecraft que por su complejidad y funciones podría considerarse en sí mismo un modo de juego. Permite crear un servidor basado en PVP completo con gran cantidad de funciones y características configurables. Su nombre viene del inglés FACCIÓN o clan. Este plugin permite la creación de clanes para tener en común una base protegida y poder atacar en conjunto a otros enemigos."
        />
        <hr className="linea-separadora-minijuego" />
        <Minijuego
          img={minijuegoPvp}
          alt="Un arena pvp básicamente es un servidor estilo KOHI. Es un lobby desde donde eliges una modalidad de pvp. Todo son duelos 1 vs 1 o 2 vs 2 en los que ambos jugadores tenéis los mismos objetos y gana el que más habilidad tenga. Se suele jugar en 1.8 por el pvp. Hay partidas clasificatorias y partidas normales para practicar. Por lo general suele haber una tabla donde se muestran los mas altos en la clasificación."
          titulo="PvP"
          descripcion="Un arena pvp básicamente es un servidor estilo KOHI. Es un lobby desde donde eliges una modalidad de pvp. Todo son duelos 1 vs 1 o 2 vs 2 en los que ambos jugadores tenéis los mismos objetos y gana el que más habilidad tenga. Se suele jugar en 1.8 por el pvp. Hay partidas clasificatorias y partidas normales para practicar. Por lo general suele haber una tabla donde se muestran los mas altos en la clasificación."
        />
        <hr className="linea-separadora-minijuego" />
        <Minijuego
          img={minijuegoEggwars}
          alt="EggWars es un gran mapa para jugar con tus amigos. Lucha en la arena PVP y descubre quién es el mejor jugador. Todas las acciones tendrán lugar en pequeñas islas voladoras. Cada jugador tendrá su propio generador de minerales, recolectará minerales para mejorar tu personaje. Tendrás que matar enemigos y destruir el huevo de dragón del oponente."
          titulo="Eggwars"
          descripcion="EggWars es un gran mapa para jugar con tus amigos. Lucha en la arena PVP y descubre quién es el mejor jugador. Todas las acciones tendrán lugar en pequeñas islas voladoras. Cada jugador tendrá su propio generador de minerales, recolectará minerales para mejorar tu personaje. Tendrás que matar enemigos y destruir el huevo de dragón del oponente."
        />
        <hr className="linea-separadora-minijuego" />
        <Minijuego
          img={minijuegoBedwars}
          alt="Bed Wars es un minijuego multijugador. ¡Protege tu cama y destruye la cama de tus oponentes! ¡Es una guerra en el cielo! ¡Lucha contra tus amigos en el mapa de bed wars y desarrolla estrategias para convertirte en un maestro! Si tu cama sigue en pie, puedes reaparecer. De lo contrario, ¡tendrás que ver a tus amigos luchar como espectador!."
          titulo="Bedwars"
          descripcion="Bed Wars es un minijuego multijugador. ¡Protege tu cama y destruye la cama de tus oponentes! ¡Es una guerra en el cielo! ¡Lucha contra tus amigos en el mapa de bed wars y desarrolla estrategias para convertirte en un maestro! Si tu cama sigue en pie, puedes reaparecer. De lo contrario, ¡tendrás que ver a tus amigos luchar como espectador!."
        />

        <hr className="linea-separadora-minijuego" />
        <Minijuego
          img={minijuegoSkywars}
          alt="Se trata de una modalidad donde la combinación de la competitividad del PvP, la adrenalina de las alturas y la diversión está tan bien repartida que se trata de una modalidad PvP y, a la vez, casual para echarte risas con tus amigos en partidas frenéticas y no mas de 10 minutos de duración. "
          titulo="Skywars"
          descripcion="Se trata de una modalidad donde la combinación de la competitividad del PvP, la adrenalina de las alturas y la diversión está tan bien repartida que se trata de una modalidad PvP y, a la vez, casual para echarte risas con tus amigos en partidas frenéticas y no mas de 10 minutos de duración."
        />
        <hr className="linea-separadora-minijuego" />
        <Minijuego
          img={oneblock}
          alt="OneBlock es un nuevo mapa de supervivencia en el que te paras en un bloque solitario que flota en el vacío. Puede extraer el mismo bloque una y otra vez, y le brinda materiales básicos que lentamente se vuelven cada vez mejores. ¡Pasas por ciertas fases y el bloque infinito se actualiza lentamente a mejores bloques, cofres y nuevas turbas!."
          titulo="oneblock"
          descripcion="OneBlock es un nuevo mapa de supervivencia en el que te paras en un bloque solitario que flota en el vacío. Puede extraer el mismo bloque una y otra vez, y le brinda materiales básicos que lentamente se vuelven cada vez mejores. ¡Pasas por ciertas fases y el bloque infinito se actualiza lentamente a mejores bloques, cofres y nuevas turbas!."
        />
        <hr className="linea-separadora-minijuego" />
        <Minijuego
          img={minijuegoTNTRun}
          alt="TNT Run es una de las modalidades más famosas de todos los tiempos de Minecraft, la cual trata de sobrevivir en un espacio cerrado el cual cuando pisas va cayendo el suelo. Lo único que tienes que hacer en esta modalidad es fastidiar a tus oponentes intentando hacer que se caigan de la plataforma por tu culpa. Muchos servidores tienen diferentes modos de juego de TNT Run como por ejemplo coger objetos que te beneficiarán en la partida."
          titulo="TNT Run"
          descripcion="TNT Run es una de las modalidades más famosas de todos los tiempos de Minecraft, la cual trata de sobrevivir en un espacio cerrado el cual cuando pisas va cayendo el suelo. Lo único que tienes que hacer en esta modalidad es fastidiar a tus oponentes intentando hacer que se caigan de la plataforma por tu culpa. Muchos servidores tienen diferentes modos de juego de TNT Run como por ejemplo coger objetos que te beneficiarán en la partida."
        />
        <hr className="linea-separadora-minijuego" />
      </div>
      <hr className="linea-separadora" />
    </section>
  );
}
