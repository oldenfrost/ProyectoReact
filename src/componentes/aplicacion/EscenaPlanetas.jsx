import * as THREE from "three";
import { useEffect } from "react";
import SceneInit from "./IniciarEscena";
import Planet from "./Planetas";
import Tarjeta from "./tarjetas";

import sol from "../../assets/imagenes/solTextura.jpg";
import aquaterraImg from "../../assets/imagenes/Aquaterra.jpg";
import helionImg from "../../assets/imagenes/Helion.jpg";
import zephyriaImg from "../../assets/imagenes/Zephyria.jpg";
import lunaAqua1Img from "../../assets/imagenes/lunaAquaterra1.jpg";

import veridaliaImg from "../../assets/imagenes/Veridalia.jpg";
import cryosImg from "../../assets/imagenes/Cryos.jpg";
import veridaliaLuna1Img from "../../assets/imagenes/lunaAquaterra2.jpg";
import veridaliaLuna2Img from "../../assets/imagenes/lunaVeridalia.jpg";

import zephyriaLunaImg from "../../assets/imagenes/lunaZephyria.jpg";





export default function Home() {

  useEffect(() => {
    let animacion = true;
    let dis1,dis2,dis3,dis4, dis5,dis6,dis7,dis8,dis9, disy1, disy2, disx1, disx2;
    let ra1,ra2,ra3,ra4,ra5,ra6,ra7,ra8,ra9,ra10;

    if(window.innerWidth>1400){
      dis1=25;
      dis2=43;
      dis3=43;
      dis4=46;
      dis5=53;
      dis6=56;
      dis7=66;
      dis7=72;
      dis8=70;
      dis9=85;
      ra1=1;
      ra2=1.5;
      ra3 = 0.4;
      ra4 = 1.9;
      ra5 = 0.4;
      ra6 = 2.5;
      ra7 = 0.9;
      ra8 = 0.9; 
      ra9=1.2;
      disy1=1;
      disy2=3;
      disx1=1;
      disx2=5;
      ra10=10;


    }
   else if(window.innerWidth<1400){
      dis1=19;
      dis2=25;
      dis3=27;
      dis4=32;
      dis5=33;
      dis6=38;
      dis7=40;
      dis7=45;
      dis8=45;
      dis9=55;
      ra1=1;
      ra2=1.5;
      ra3 = 0.4;
      ra4 = 1.9;
      ra5 = 0.4;
      ra6 = 2.5;
      ra7 = 0.9;
      ra8 = 0.9; 
      ra9=1.2;
      disy1=0.5;
      disy2=1.5;
      disx1=0.5;
      disx2=2.5;
      ra10=10;
    


    }
    else if(window.innerWidth<1000){
      dis1=19;
      dis2=25;
      dis3=27;
      dis4=32;
      dis5=33;
      dis6=38;
      dis7=40;
      dis7=45;
      dis8=45;
      dis9=55;
      ra1=0.8;
      ra2=1.3;
      ra3 = 0.2;
      ra4 = 1.7;
      ra5 = 0.2;
      ra6 = 2.3;
      ra7 = 0.7;
      ra8 = 0.7; 
      ra9=1;
      disy1=0.5;
      disy2=1.5;
      disx1=0.5;
      disx2=2.5;
      ra10=6;
    


    }
    else if(window.innerWidth<500){
      dis1=15;
      dis2=21;
      dis3=23;
      dis4=28;
      dis5=29;
      dis6=34;
      dis7=36;
      dis7=41;
      dis8=41;
      dis9=51;
      ra1=0.7;
      ra2=1.1;
      ra3 = 0.1;
      ra4 = 1.5;
      ra5 = 0.1;
      ra6 = 2;
      ra7 = 0.5;
      ra8 = 0.5; 
      ra9=0.6;
      disy1=0.5;
      disy2=1.5;
      disx1=0.5;
      disx2=2.5;
      ra10=4;
    


    }







  

    const botton = document.getElementById("pause");
  
    let test = new SceneInit();
    test.initScene();
    test.animate();

    const sunGeometry = new THREE.SphereGeometry(ra10);
    const sunTexture = new THREE.TextureLoader().load(sol);
    const sunMaterial = new THREE.MeshStandardMaterial({
      color: "#FFFFFF",
      roughness: 0.9,
      metalness: 0.8,
      map: sunTexture,
    });
    const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
    sunMesh.nombre = "Solarius";
    const solarSystem = new THREE.Group();
    solarSystem.add(sunMesh);
    test.scene.add(solarSystem);

    const helion = new Planet(ra1, dis1, 0, 0, helionImg);
    const helionMesh = helion.getMesh();
    let helionSystem = new THREE.Group();
    helionMesh.nombre = "helio";
    helionSystem.add(helionMesh);

    const aquaterra = new Planet(ra2, dis2, 0, 0, aquaterraImg);
    const aquaterraMesh = aquaterra.getMesh();
    let aquaterraSystem = new THREE.Group();
    aquaterraMesh.nombre = "aquaterra";





    let lunaSystem = new THREE.Group();

    aquaterraSystem.add(aquaterraMesh);
    const lunaaquaterra = new Planet(ra3, dis3, 0, -1, lunaAqua1Img);

    const lunaaquaterraMesh = lunaaquaterra.getMesh();
    lunaaquaterraMesh.nombre = "lunaAquaterra";

    lunaSystem.add(lunaaquaterraMesh);

    aquaterraSystem.add(lunaSystem);

    const zephyria = new Planet(ra4, dis4, 0, 0, zephyriaImg);
    const ZephyriaMesh = zephyria.getMesh();
    ZephyriaMesh.nombre ='zephyria';
    let ZephyriaSystem = new THREE.Group();
    ZephyriaSystem.add(ZephyriaMesh);

    const lunaZephyria = new Planet(ra5, dis5, 0, -1, zephyriaLunaImg);

    const lunaZephyriaMesh = lunaZephyria.getMesh();
    lunaZephyriaMesh.nombre='lunaZephyria';

    ZephyriaSystem.add(lunaZephyriaMesh);

    const veridalia = new Planet(ra6, dis6, 0, 0, veridaliaImg);
    const veridaliaMesh = veridalia.getMesh();
    veridaliaMesh.nombre='veridalia';
    let veridaliaSystem = new THREE.Group();
    veridaliaSystem.add(veridaliaMesh);

    const lunaveridalia2 = new Planet(ra7, dis7, disy1, disx1, veridaliaLuna1Img);
    const lunaveridalia2Mesh = lunaveridalia2.getMesh();
    lunaveridalia2Mesh .nombre='lunaveridalia1';
    veridaliaSystem.add(lunaveridalia2Mesh);

    const lunaveridalia1 = new Planet(ra8, dis8, disy2, disx2, veridaliaLuna2Img);
    const lunaveridalia1Mesh = lunaveridalia1.getMesh();
    lunaveridalia1Mesh.nombre='lunaveridalia2';
    veridaliaSystem.add(lunaveridalia1Mesh);

    const cryos = new Planet(ra9, dis9, 0, 0, cryosImg);
    const cryosMesh = cryos.getMesh();
    cryosMesh.nombre='cryos';
    let cryosSystem = new THREE.Group();
    cryosSystem.add(cryosMesh);

    solarSystem.add(
      helionSystem,
      aquaterraSystem,
      ZephyriaSystem,
      veridaliaSystem,
      cryosSystem
    );


    // NOTE: Animate solar system at 60fps.
    const AQUATERRA_YEAR = 2 * Math.PI * (1 / 60) * (1 / 60);
    const animate = () => {
      if (animacion) {
        sunMesh.rotation.y += 0.0005;
        helionSystem.rotation.y += AQUATERRA_YEAR * 2;
        aquaterraSystem.rotation.y += AQUATERRA_YEAR;
        ZephyriaSystem.rotation.y += AQUATERRA_YEAR * 1.6;
        veridaliaSystem.rotation.y += AQUATERRA_YEAR * 0.3;
        cryosSystem.rotation.y += AQUATERRA_YEAR * 0.9;
      }

      requestAnimationFrame(animate);
    };
    animate();

    const pointer = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();
    const hovered = {};

    const onMouseMove = (event) => {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(pointer, test.camera);
      const intersects = raycaster.intersectObjects(test.scene.children);

      Object.keys(hovered).forEach((key) => {
        const hit = intersects.find((hit) => hit.object.uuid === key);
        if (hit === undefined) {
          const hoveredItem = hovered[key];
          hoveredItem.object.material.color.set(0xffffff);
          delete hovered[key];
        }
      });


      for (let i = 0; i < intersects.length; i++) {
        const intersectedObject = intersects[0].object;
        intersectedObject.material.color.set(0x7b7b7b);
        hovered[intersectedObject.uuid] = intersects[0];


       
      }
 

      
    };

    window.addEventListener('click', () => {
      const intersects = raycaster.intersectObjects(test.scene.children);

      let tar;
      let indicador=0;
   

      if (intersects.length > 0) {
        const intersectedObject = intersects[0].object;
        if (intersectedObject.nombre === 'Solarius') {
          indicador = 1;
          tar = new Tarjeta(indicador);
          tar.UbicarInformacionTarjetas();
        } else if (intersectedObject.nombre === 'helio') {
          indicador = 2;
          tar = new Tarjeta(indicador);
          tar.UbicarInformacionTarjetas();
        } else if (intersectedObject.nombre === 'aquaterra') {
          indicador = 3;
          tar = new Tarjeta(indicador);
          tar.UbicarInformacionTarjetas();
        } else if (intersectedObject.nombre === 'lunaAquaterra') {
          indicador = 4;
          tar = new Tarjeta(indicador);
          tar.UbicarInformacionTarjetas();
        } else if (intersectedObject.nombre === 'zephyria') {
          indicador = 5;
          tar = new Tarjeta(indicador);
          tar.UbicarInformacionTarjetas();
        } else if (intersectedObject.nombre === 'lunaZephyria') {
          indicador = 6;
          tar = new Tarjeta(indicador);
          tar.UbicarInformacionTarjetas();
        } else if (intersectedObject.nombre === 'veridalia') {
          indicador = 7;
          tar = new Tarjeta(indicador);
          tar.UbicarInformacionTarjetas();
        } else if (intersectedObject.nombre === 'lunaveridalia1') {
          indicador = 8;
          tar = new Tarjeta(indicador);
          tar.UbicarInformacionTarjetas();
        } else if (intersectedObject.nombre === 'lunaveridalia2') {
          indicador = 9;
          tar = new Tarjeta(indicador);
          tar.UbicarInformacionTarjetas();
        } else if (intersectedObject.nombre === 'cryos') {
          indicador = 10;
          tar = new Tarjeta(indicador);
          tar.UbicarInformacionTarjetas();
        }  
      }

     



     
  
    });

    botton.addEventListener("click", function () {
      if (animacion === true) {
        animacion = false;
        botton.classList.add("botonPlay");
        botton.classList.remove("botonPause");

      } else if (animacion ===false) {
        animacion = true;
        botton.classList.add("botonPause");
        botton.classList.remove("botonPlay");
      }
    });

    window.addEventListener("mousemove", onMouseMove);

  }, []);

  return (
    null
  );
}
