import { Color, Scene ,CubeTextureLoader} from 'three';

function createScene() {
    const scene = new Scene();

    // const cubeTextureLoader = new CubeTextureLoader();
    
    // const environmentMap = cubeTextureLoader.load([
    //     '/textures/environmentMaps/0/px.jpg',
    //     '/textures/environmentMaps/0/nx.jpg',
    //     '/textures/environmentMaps/0/py.jpg',
    //     '/textures/environmentMaps/0/ny.jpg',
    //     '/textures/environmentMaps/0/pz.jpg',
    //     '/textures/environmentMaps/0/nz.jpg'
    // ])


    // //environmentMap.encoding = THREE.sRGBEncoding

    // scene.background = environmentMap
    //scene.environment = environmentMap
    scene.background = new Color("black")
    return scene;
}
export {createScene};
