const imagen= document.getElementById("imagen");
const titulo= document.getElementById("titulo");
const texto= document.getElementById("texto");
const tarjeta = document.getElementById("tarjeta");
const canvas= document.getElementById("Planetario");
import solarius from "../../assets/imagenesPlanetario/solarius.png";
import helio from "../../assets/imagenesPlanetario/helio.png";
import aquaterra from "../../assets/imagenesPlanetario/aquaTerra.png";
import lunaAquaterra from "../../assets/imagenesPlanetario/lunaAqueterra.jpg";
import zephyria from "../../assets/imagenesPlanetario/zephyria.png";
import lunaZephyria from "../../assets/imagenesPlanetario/lunaZephyria.jpg";
import veridalia from "../../assets/imagenesPlanetario/veridalia.png";
import lunaVeridalia1 from "../../assets/imagenesPlanetario/lunaveridalia1.jpg";
import lunaVeridalia2 from "../../assets/imagenesPlanetario/lunaveridalia2.jpg";
import cryos from "../../assets/imagenesPlanetario/cryos.png";


export default class Tarjeta {
    constructor(informacion) {
        this.informacion = informacion;

    }
    
 UbicarInformacionTarjetas(){
    tarjeta.classList.remove("oculto")
    tarjeta.classList.add("mostrar");
    tarjeta.style.zIndex=0;
    canvas.style.zIndex = -1;
    if(this.informacion===1){
        imagen.src=solarius;
        titulo.textContent="Solarius";
        texto.textContent="Solarius: Una estrella imponente y gloriosa que irradia una luz dorada intensa. Su magnificencia ilumina los confines del universo, llenando el espacio con su cálido resplandor. Solarius es una fuente de vida y energía, un faro celestial que guía a los planetas en su danza cósmica. Sus llamaradas solares bailan en su superficie, creando un espectáculo celestial que deja a todos maravillados. Es el corazón ardiente de Solarium Estelar, una joya celestial que nos recuerda la grandeza y el poder del universo.";

        
    }
    if(this.informacion===2){
        imagen.src=helio;
        titulo.textContent="Helio";
        texto.textContent="Helio: Un mundo desértico y abrasador, donde dunas gigantes se mueven sin cesar bajo el implacable sol. Las vastas extensiones de arenas doradas se extienden hasta donde alcanza la vista, creando un paisaje árido y misterioso. Helio es un planeta de temperaturas extremas, con días abrasadores y noches estrelladas. A pesar de su aparente hostilidad, la vida ha encontrado formas ingeniosas de sobrevivir en este entorno inhóspito. Explora las maravillas de Helio y desvela los secretos que yacen bajo su ardiente superficie.";

        
    }
    if(this.informacion===3){
        imagen.src=aquaterra;
        titulo.textContent="AquaTerra";
        texto.textContent="Aquaterra: Un paraíso acuático donde vastos océanos se encuentran con exuberantes bosques tropicales. Sus aguas cristalinas y sus islas verdes crean un paisaje de ensueño. Aquaterra es el hogar de una rica biodiversidad, desde coloridos peces tropicales hasta majestuosas ballenas. Es un mundo de armonía entre el agua y la tierra, donde la naturaleza florece en su máximo esplendor. Sumérgete en las maravillas de Aquaterra y descubre la magia de este fascinante planeta.";

        
    }
    if(this.informacion===4){
        imagen.src=lunaAquaterra;
        titulo.textContent="VerdeLuz";
        texto.textContent="Verdeluz: El satélite natural de Aquaterra, un cuerpo celestial envuelto en un resplandor verde hipnotizante. En contraste con el azul profundo del océano, Verdeluz brilla con una tonalidad verde radiante que ilumina las noches de Aquaterra. Este satélite es un testimonio de la armonía entre el agua y la vegetación de este mundo. Su misteriosa luminiscencia verde es un espectáculo cautivador que atrae las miradas y despierta la imaginación de los observadores. A medida que Verdeluz atraviesa el cielo estrellado, crea una atmósfera mágica, llenando de encanto y asombro a aquellos que tienen la suerte de presenciar su danza celeste.";

        
    }
    if(this.informacion===5){
        imagen.src=zephyria;
        titulo.textContent="Zephyria:";
        texto.textContent="Zephyria: Un planeta cubierto por densas nubes y constantes tormentas eléctricas. Zephyria tiene un clima impredecible y vientos feroces que barren su superficie. La electricidad en la atmósfera de Zephyria crea hermosos relámpagos que iluminan el cielo en tonos vibrantes.";

        
    }
    if(this.informacion===6){
        imagen.src=lunaZephyria;
        titulo.textContent="Rojaluna";
        texto.textContent="Rojaluna: El satélite natural de Zephyria, una esfera celestial que brilla con un resplandor rojo intenso en el oscuro firmamento. En contraste con el misterioso paisaje de Zephyria, Rojaluna irradia una tonalidad carmesí que ilumina el horizonte nocturno. Su color distintivo y apasionado crea un ambiente cautivador y enigmático en este rincón del sistema estelar. Los astrónomos y observadores de estrellas quedan fascinados por la presencia de Rojaluna, que agrega un toque de drama y pasión a la noche zephyriana. Su influencia magnética y su belleza ardiente hacen de Rojaluna un punto focal celestial en el paisaje cósmico de Zephyria.";

        
    }
    if(this.informacion===7){
        imagen.src=veridalia;
        titulo.textContent="Veridalia";
        texto.textContent="Veridalia: Un mundo lleno de vida y exuberancia, donde frondosos bosques se extienden hasta donde alcanza la vista. Veridalia es un paraíso verde, con una vegetación exuberante y diversa que cubre la superficie del planeta. Los árboles gigantes se alzan majestuosamente, creando un dosel denso que filtra los rayos del sol y crea un ambiente fresco y sombreado. La flora de Veridalia es única y fascinante, con plantas que florecen en una variedad de colores vibrantes y formas exóticas. El canto de las aves y el susurro del viento a través de las hojas llenan el aire con una melodía natural y serena. Explora los secretos ocultos de Veridalia y déjate envolver por la serenidad y la belleza de este mundo boscoso.";

        
    }
    if(this.informacion===8){
        imagen.src=lunaVeridalia2;
        titulo.textContent="Satélite Vináureo";
        texto.textContent="Satélite Vináureo: Un satélite de Veridalia que brilla con un tono vino intenso en el oscuro cielo estrellado. Su superficie está cubierta de una capa de minerales ricos en tonos púrpura y rojizos, creando un paisaje celestial fascinante y misterioso. La luz de las estrellas se refleja en su superficie, generando destellos y reflejos que añaden un encanto cautivador. El Satélite Vináureo es un símbolo de la majestuosidad y la elegancia de Veridalia, otorgando un toque de sofisticación al panorama nocturno del planeta.";

        
    }
    if(this.informacion===9){
        imagen.src=lunaVeridalia1;
        titulo.textContent="Caféterra";
        texto.textContent="Satélite Caféterra: Un satélite de Veridalia que destaca por su color café terroso, en armonía con los frondosos bosques del planeta. Su superficie presenta formaciones geológicas intrigantes, con montañas y cañones que se entrelazan con valles cubiertos de vegetación exuberante. La textura rugosa de su superficie crea un contraste interesante con la suavidad de los bosques de Veridalia. El Satélite Caféterra es un testimonio de la riqueza natural y la diversidad que caracterizan a este mundo, proporcionando un paisaje celestial impresionante y reconfortante para los observadores.";

        
    }
    if(this.informacion===10){
        imagen.src=cryos;
        titulo.textContent="Cryos";
        texto.textContent='Cryos: Un planeta helado y glacial cubierto por vastas extensiones de hielo y nieve. Cryos es conocido por sus imponentes montañas cubiertas de glaciares y sus lagos congelados. Las luces del norte y del sur, conocidas como "Aurora Borealis" y "Aurora Australis", bailan en el cielo de Cryos, creando un espectáculo impresionante.';

        
    }

    
}


  
  
  }
  
  