import { DirectionalLight } from "three";


function createLights() {
    const light = new DirectionalLight('white', 8); 

    // DirectionalLight 从 light.position 照向 light.target.position。
    light.position.set(10, 10, 10);

    return light;
}

export { createLights };