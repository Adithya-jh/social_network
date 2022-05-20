import { DirectionalLight , AmbientLight, HemisphereLight} from "three";

function createLights(){
    const ambientLight = new HemisphereLight('red',2);
    const mainlight = new DirectionalLight('orange',2);

    mainlight.position.set(10,10,-3);
    return {mainlight, ambientLight};

}
export {createLights};