import { BoxGeometry ,Mesh, MeshStandardMaterial,MathUtils,SphereGeometry ,TextureLoader, Group,SphereBufferGeometry, ShaderMaterial,
 BoxBufferGeometry, Clock, PlaneBufferGeometry , DoubleSide, Points,PointsMaterial, AdditiveBlending,TorusKnotGeometry} from "three";
import { createCamera } from "./camera";
import pvertexShader from "./Shaders/sParticles/pvertex.glsl" 
import pfragmentShader from "./Shaders/sParticles/pfragment.glsl" 
import bvertexShader from "./Shaders/sBackground/bvertex.glsl" 
import bfragmentShader from "./Shaders/sBackground/bfragment.glsl" 


import lvertexShader from "./Shaders/lmesh/lvertex.glsl" 
import lfragmentShader from "./Shaders/lmesh/lfragment.glsl" 

function createMaterial(){
    const textureLoader = new TextureLoader();
    //const texture = textureLoader.load('.\assets\textures\a433889329879a033aef09109d14aa4b.jpg');
    const material = new MeshStandardMaterial({wireframe:true});
    return material;
}



function createCube(){
    //create a geometry
    const geometry= new BoxGeometry(2,2,2);

    //create a material
    const material = createMaterial();

    //create mesh
    const cube =new Mesh(geometry, material);
    cube.position.x=-12;
    cube.position.y=6;
    cube.rotation.set(-0.3,0.5,0.4)
    const radiansPerSecond = MathUtils.degToRad(30);

    
    window.addEventListener('mousemove',documentMousemove);
    let MouseX= 0;
    let MouseY= 0;
    let TargetX= 0;
    let TargetY= 0;
    
    const WindowHalfX= window.innerWidth/2;
    const WindowHalfY= window.innerHeight/2;
    
    function documentMousemove(e){
        MouseX = (e.clientX - WindowHalfX)
        MouseY = (e.clientY - WindowHalfY)
    }
    
    
    cube.tick = (delta) =>{
    //increase the cube's rotation each frame
    cube.rotation.z += radiansPerSecond * delta;
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
    //cube.position.x += 0.03;
        
    TargetX = MouseX * 0.001
        
    TargetY = MouseY * 0.001

    cube.rotation.y += 0.5 * (TargetX - cube.rotation.y);
    }
    return cube;
}



function createSphere(){
    //create a geometry
    const geometry1= new SphereGeometry(2,10,10);

    //create a material
    const material1 =new MeshStandardMaterial({color: "white",wireframe:true});
    material1.metalness= 0.7;
    //create mesh
    const sphere =new Mesh(geometry1, material1);
    sphere.position.x=7;
    sphere.rotation.set(-0.3,0.5,0.4)
    const radiansPerSecond = MathUtils.degToRad(30);
    
    
    //controls.target.copy(cube.position);
    
    
    window.addEventListener("mousemove",documentMouseover);
    let MouseX= 0;
    let MouseY= 0;
    let TargetX= 0;
    let TargetY= 0;
    
    const WindowHalfX= window.innerWidth/2;
    const WindowHalfY= window.innerHeight/2;
    
    function documentMouseover(e){
        MouseX = (e.clientX - WindowHalfX)
        MouseY = (e.clientY - WindowHalfY)
    }
    
    
    
    sphere.tick = (delta) => {
        //increase the cube's rotation each frame
        sphere.rotation.z += radiansPerSecond * delta;
        sphere.rotation.x += radiansPerSecond * delta;
        sphere.rotation.y += radiansPerSecond * delta;
        //cube.position.x += 0.03;
        
        TargetX = MouseX * 0.001
        
        TargetY = MouseY * 0.001
        
        sphere.rotation.y += 0.5 * (TargetX - sphere.rotation.y);
    }
    return sphere;
}


function createBlob(){
    const sphereGeometry = new SphereBufferGeometry(3,4,5,5)

    // const sphereMaterial = new ShaderMaterial({
    //     vertexShader: pvertexShader,
    //     fragmentShader: pfragmentShader,
    //     wireframe: false,
    //     side: DoubleSide,
    //     uniforms: {
    //         uTime: {value : 0}
    //     }
    // })
    

    const pointsMaterial = new PointsMaterial({
        size: 0.05,
        sizeAttenuation: true
    })
    pointsMaterial.blending = AdditiveBlending
    const blob = new Points(sphereGeometry, pointsMaterial)
    blob.position.z=3
    blob.position.x=-3.5
    blob.position.y=4

    const blob2 = blob.clone()
   // blob2.position.y= -4


    const clock = new Clock()

    const blobmove = () =>
    {
    const elapsedTime = clock.getElapsedTime()
    blob.rotation.y = elapsedTime

    // Update material
    sphereMaterial.uniforms.uTime.value = elapsedTime
    window.requestAnimationFrame(blobmove)
}
    blobmove()


    

    return blob
}


function createBlob2(){
    const sphereGeometry = new SphereBufferGeometry(3,4,5,5)

    const sphereMaterial = new ShaderMaterial({
        vertexShader: pvertexShader,
        fragmentShader: pfragmentShader,
        wireframe: false,
        side: DoubleSide,
        uniforms: {
            uTime: {value : 0}
        }
    })
    

    const pointsMaterial = new PointsMaterial({
        size: 0.5,
        sizeAttenuation: true
    })
    pointsMaterial.blending = AdditiveBlending
    const blob = new Points(sphereGeometry, pointsMaterial)
    blob.position.z=0
    blob.position.x=4.5
    blob.position.y=-4

    //const blob2 = blob.clone()
   // blob2.position.y= -4


    const clock = new Clock()

    const blobmove = () =>
    {
    const elapsedTime = clock.getElapsedTime()
    blob.rotation.y = elapsedTime

    // Update material
    sphereMaterial.uniforms.uTime.value = elapsedTime
    window.requestAnimationFrame(blobmove)
}
    blobmove()


    

    return blob
}



function createBlob3(){
    const sphereGeometry = new SphereBufferGeometry(3,4,5,5)

    const sphereMaterial = new ShaderMaterial({
        vertexShader: lvertexShader,
        fragmentShader: lfragmentShader,
        wireframe: true,
        side: DoubleSide,
        uniforms: {
            uTime: {value : 0}
        }
    })
    

    const pointsMaterial = new PointsMaterial({
        size: 0.5,
        sizeAttenuation: true
    })
    pointsMaterial.blending = AdditiveBlending
    const blob = new Mesh(sphereGeometry, pointsMaterial )
    blob.position.z=2
    blob.position.x=-1.5
    blob.position.y=0

    //const blob2 = blob.clone()
   // blob2.position.y= -4


    const clock = new Clock()

    const blobmove = () =>
    {
    const elapsedTime = clock.getElapsedTime()
    blob.rotation.y = elapsedTime

    // Update material
    sphereMaterial.uniforms.uTime.value = elapsedTime
    window.requestAnimationFrame(blobmove)
}
    blobmove()


    

    return blob
}


function createBlob4(){
    const sphereGeometry = new TorusKnotGeometry(10, 3, 100, 16)
    // const sphereGeometry = new SphereBufferGeometry(10, 3, 100, 16)


    const sphereMaterial = new ShaderMaterial({
        vertexShader: lvertexShader,
        fragmentShader: lfragmentShader,
        wireframe: true,
        side: DoubleSide,
        uniforms: {
            uTime: {value : 0}
        }
    })

    sphereMaterial.tube = 0.1
    // sphereMaterial.radialSegments = 20

    // const sphereMaterial2 = new MeshStandardMaterial({color: "green",wireframe:false})
    

    const pointsMaterial = new PointsMaterial({
        size: 0.5,
        sizeAttenuation: true
    })
    pointsMaterial.blending = AdditiveBlending
    const blob = new Mesh(sphereGeometry, sphereMaterial)
    blob.position.z=-1
    blob.position.x=-1
    blob.position.y=-2

    
    //const blob2 = blob.clone()
    // blob2.position.y= -4
    
    
    const clock = new Clock()
    
    const blobmove = () =>
    {
        const elapsedTime = clock.getElapsedTime()
        // blob.tubularSegments = elapsedTime
    blob.rotation.y = elapsedTime

    // Update material
    // sphereMaterial.uniforms.uTime.value = elapsedTime
    window.requestAnimationFrame(blobmove)
}
    blobmove()


    

    return blob
}


function createBackground(){
    const backgroundGeometry = new PlaneBufferGeometry(70,70,10,10)
    const textureLoader = new TextureLoader()
    const t= textureLoader.load("@/assets/images/1.jpg")

    const sphereMaterial = new ShaderMaterial({
        vertexShader: bvertexShader,
        fragmentShader: bfragmentShader,
        wireframe: false,
        side: DoubleSide,



        uniforms: {
            uTime: {value : 0},
            uTexture:{value: t}
        }
    })
    

    const pointsMaterial = new PointsMaterial({
        size: 0.05,
        sizeAttenuation: true
    })
    pointsMaterial.blending = AdditiveBlending

    const background = new Mesh(backgroundGeometry, sphereMaterial)
    background.position.z=-6.5
    background.position.x=0
    


    const clock = new Clock()

    const backgroundMove = () =>
    {
    const elapsedTime = clock.getElapsedTime()
    //background.rotation.y = elapsedTime

    // Update material
    sphereMaterial.uniforms.uTime.value = elapsedTime
    window.requestAnimationFrame(backgroundMove)
}
    backgroundMove()


    

    return background
}

export { createCube , createSphere, createBlob,createBlob2,createBlob3, createBackground,createBlob4};