import { Injectable } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { gsap } from 'gsap';

@Injectable({
  providedIn: 'root'
})
export class EsferaService {

  constructor() { }

//OBTENER TAMAÑO DE LA PANTALLA

  private sizes = {
    width: window.innerWidth,
    height: window.innerHeight
  }

//FUNCION PARA INICIAR LA ESFERA

  iniciar(canvas: HTMLCanvasElement) {

    //CREACION DEL CANVAS PARA LA ESFERA
    const renderer = new THREE.WebGLRenderer({ canvas , antialias:true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    //CREAR LA ESCENA Y LA CAMARA
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    const camera = new THREE.PerspectiveCamera(75, this.sizes.width / this.sizes.height, 0.1, 1000);

    //CONTROLES DE ORBITA PARA LA ESFERA
    const controls = new OrbitControls(camera,canvas);
    controls.enableDamping = false;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.5;

    //ANIMACION DE LA ESFERA
    const animate = function () {
      controls.update();
      requestAnimationFrame(animate);
      
      renderer.render(scene, camera);
    };

    //RESPONSIVE DE LA ESFERA
    window.addEventListener('resize', () => {
    this.sizes.width = window.innerWidth;
    this.sizes.height = window.innerHeight;
    camera.aspect = this.sizes.width/this.sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(this.sizes.width,this.sizes.height);
    renderer.render(scene,camera);
    });

    //CREACION DE LA ESFERA
    const sphere = new THREE.Mesh(new THREE.SphereGeometry(5,32,32),
    new THREE.MeshStandardMaterial({
      map : new THREE.TextureLoader().load('assets/img/esfera/earthMap.jpg'),
      roughness :0.5,
      emissive:'black'
    }));

    //CREACION DE LA ATMOSFERA
    const atmosphere = new THREE.Mesh(new THREE.SphereGeometry(5, 25, 25),
    new THREE.MeshStandardMaterial({
        color: "black",
        transparent: true,
        opacity: 0.05,
        blending: THREE.AdditiveBlending,
        roughness: 0.5,
        emissiveMap: new THREE.TextureLoader().load('assets/img/esfera/atm.jpg')
        
    })
  );

    //POSICION DE LA ESFERA Y LA ATMOSFERA

  atmosphere.scale.set(1.1, 1.1, 1.1);
    
     scene.add(sphere);
     camera.position.z = 5;
     const ligth = new THREE.PointLight(0xffffff, 1,100);
     scene.add(ligth);
     ligth.position.set(0,10,10);

    renderer.setSize( this.sizes.width, this.sizes.height );
    renderer.setPixelRatio( window.devicePixelRatio );


      camera.position.z = 20;

    //FUNCION DE ANIMACION DE LA ESFERA
    animate();

    //ANIMACIONES GSAP
    
    const tl = gsap.timeline({
      duration: 0.2,
      delay:0
    });
  
    tl.fromTo(sphere.material,{opacity:0},{opacity:1});
    tl.fromTo(atmosphere.material,{opacity:0},{opacity:0.05});
    tl.fromTo(sphere.scale,{z:0, y:0, x:0},{z:1, y:1, x:1});
    tl.fromTo(atmosphere.scale,{z:0, y:0, x:0},{z:1.13, y:1.13, x:1.13});
  }

}
