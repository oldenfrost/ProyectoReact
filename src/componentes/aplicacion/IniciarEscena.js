import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
const canvas=document.getElementById("Planetario");



export default class SceneInit {
  constructor(fov = 36, camera, scene, stats, controls, renderer) {
    this.fov = fov;
    this.scene = scene;
    this.camera = camera;
    this.controls = controls;
    this.renderer = renderer;
  }

  initScene() {
    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    this.camera.position.z = 128;

    this.scene = new THREE.Scene();

    // const spaceTexture = new THREE.TextureLoader().load("space2.jpeg");
    // this.scene.background = spaceTexture;

    // specify a canvas which is already created in the HTML file and tagged by an id
    // aliasing enabled
    this.renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
    });

   this.renderer.setClearColor(0x000000, 0.1);
    
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    
    let ambientLight = new THREE.AmbientLight(0xffffff, 10);
    ambientLight.castShadow = true;
  

   // spot light which is illuminating the chart directly
    let spotLight = new THREE.SpotLight(0xffffff, 3);
    spotLight.castShadow = false;
   spotLight.position.set(-180, -1500, -100);
   this.scene.add(ambientLight);
   this.scene.add(spotLight);






    // if window resizes
    window.addEventListener("resize", () => this.onWindowResize(), false);
  }

  animate() {
    // requestAnimationFrame(this.animate.bind(this));
    window.requestAnimationFrame(this.animate.bind(this));
    this.render();
    // this.controls.update();
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }



  
}




