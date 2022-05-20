import { createCamera } from './Components/camera.js';
import { createCube, createSphere,createBlob,createBlob2,createBlob3, createBackground,createBlob4 } from './Components/createMeshgroups.js';
import { createLights } from './Components/light.js';
import { createScene } from './Components/scene.js';
//import { loadBirds } from './components/birds/birds.js';
// import { createControls } from './Systems/controls.js';

import { createRenderer } from './Systems/renderer.js';
import { Resizer } from './Systems/Resizer.js';
import { Loop } from './Systems/loop.js';
import { DirectionalLight } from 'three';

let camera;
let renderer;
let scene;
let loop;

class World {
  constructor(container) {
    camera = createCamera();
    renderer = createRenderer();
    scene = createScene();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);
    // const controls = createControls(camera, renderer.domElement);
    const {mainlight, ambientLight} = createLights();

    const background = createBackground()
    const blob = createBlob();
    // scene.add(blob);
    const blob2 = createBlob2();
    const blob3 = createBlob3();
    const blob4 = createBlob4();
    // scene.add(blob2);
    // scene.add(blob3);
    // scene.add(blob4);
    // scene.add(background);
    camera.lookAt(0,0,0)

    const sphere = createSphere();
    // scene.add(sphere,ambientLight,mainlight)
    



    



  







    //controls.update();
    
     //loop.updatables.push(blob);
    // loop.updatables.push(cube);
    // loop.updatables.push(spheres);

   
    //controls.update();
    //loop.updatables.push(controls);

    const resizer = new Resizer(container, camera, renderer);
  }



  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}




class World2 {
  constructor(container) {
    camera = createCamera();
    renderer = createRenderer();
    scene = createScene();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);
    //const controls = createControls(camera, renderer.domElement);
    const {mainlight, ambientLight} = createLights();

    const background = createBackground()
    const blob = createBlob();
    scene.add(blob);
    const blob2 = createBlob2();
    scene.add(blob2);
    scene.add(background);
    camera.lookAt(0,0,0)

    const sphere = createSphere();
    //scene.add(sphere,ambientLight,mainlight)
    



    



  







    //controls.update();
    
     //loop.updatables.push(blob);
    // loop.updatables.push(cube);
    // loop.updatables.push(spheres);

   
    //controls.update();
    //loop.updatables.push(controls);

    const resizer = new Resizer(container, camera, renderer);
  }



  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World ,World2};
