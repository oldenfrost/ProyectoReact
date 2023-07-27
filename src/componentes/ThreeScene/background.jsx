
import { useEffect, useRef } from 'react';
import * as THREE from 'three'
import * as POSTPROCESSING from 'postprocessing';
import humo from '../../assets/imagenes/smoke.png';
import estrellas from '../../assets/imagenes/estrellas.jpg';




let scene, camera, cloudParticles = [],composer, renderer, cloudGeo, cloudMaterial ;
const canvas =document.getElementById("fondo");



function BackGround(){




  const canvasRef=useRef(null);
  const renderRef=useRef(null);

    useEffect(() => {

    
      canvasRef.current=canvas;



        function init() {
          scene = new THREE.Scene();
          
          camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight,1,1000);
          camera.position.z = 1;
          camera.rotation.x = 1.16;
          camera.rotation.y = -0.12;
          camera.rotation.z = 0.27;
  
    
            let ambient = new THREE.AmbientLight(0x001133);
            scene.add(ambient);
    
            let directionalLight = new THREE.DirectionalLight(0xFF7000, 1);
            directionalLight.position.set(0,0,1);
            scene.add(directionalLight);
    
            let orangeLight = new THREE.PointLight(0xFFD700350,4);
            orangeLight.position.set(-700,200,-100);
            scene.add(orangeLight);
            let redLight = new THREE.PointLight(0x00FFFF,100,450,4);
            redLight.position.set(-100,200,-300);
            scene.add(redLight);
            let blueLight = new THREE.PointLight(0xC70039,100,450,5);
            blueLight.position.set(-100,500,100);
            scene.add(blueLight);
    
            renderer = new THREE.WebGLRenderer({ canvas:canvasRef.current, alpha: true, antialias: true });
            renderer.setSize(window.innerWidth , window.innerHeight);
    
    
    
            scene.fog = new THREE.FogExp2(0x06011B, 0.001);
            renderer.setClearColor(scene.fog.color);
            document.body.appendChild(renderer.domElement);
      

    
            let loader = new THREE.TextureLoader();
            loader.load(humo, function(texture){
              cloudGeo = new THREE.PlaneBufferGeometry(400,400);
              cloudMaterial = new THREE.MeshLambertMaterial({
                map:texture,
                transparent: true
              });
    
              for(let p=0; p<50; p++) {
                let cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
                cloud.position.set(
                  Math.random()*700 -400,
                  320,
                  -100
                );
                cloud.rotation.x = 1.16;
                cloud.rotation.y = -0.20;
                cloud.rotation.z = Math.random()*2*Math.PI;
                cloud.material.opacity = 0.55;
                cloudParticles.push(cloud);
                scene.add(cloud);
              }
            });
            loader.load(estrellas, function(texture){
    
              const textureEffect = new POSTPROCESSING.TextureEffect({
              
                texture: texture
              });
              textureEffect.blendMode.opacity.value = 0.2;
    
              const bloomEffect = new POSTPROCESSING.BloomEffect({
                    kernelSize: POSTPROCESSING.KernelSize.LARGE,
                    useLuminanceFilter: true,
                    luminanceThreshold: 0.3,
                    luminanceSmoothing: 0.6
                  });
              bloomEffect.blendMode.opacity.value = 1.8;
    
              let effectPass = new POSTPROCESSING.EffectPass(
                camera,
                bloomEffect,
                textureEffect
              );
              effectPass.renderToScreen = true;
    
              composer = new POSTPROCESSING.EffectComposer(renderer);
              composer.addPass(new POSTPROCESSING.RenderPass(scene, camera));
              composer.addPass(effectPass);
              window.addEventListener("resize", onWindowResize, false);
              render();
            });
            renderRef.current=renderer;
            
  
          }

          function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer=renderRef.current;
         
            renderer.setSize(window.innerWidth, window.innerHeight);
          }
          function render() {
            cloudParticles.forEach(p => {
              p.rotation.z -=0.0005;
            });
            composer.render(0.1);
            requestAnimationFrame(render);
          }
          init();




    


        return () => {
          renderer.dispose();
        };

      }, []);


      return  null;


}


     
export default BackGround;