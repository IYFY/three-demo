import { BoxGeometry, MeshBasicMaterial,Mesh, MeshStandardMaterial, MathUtils } from "three"
import { WithTick } from "../types";



function createCube() {

    const geometry = new BoxGeometry(2, 2, 2)

    const material = new MeshStandardMaterial({
        color: 'purple'
    })

    const cube  = new Mesh(geometry, material)

    cube.rotation.set(-0.5, -0.1, 0.8);

    const radiansPerSecond = MathUtils.degToRad(30);
    (cube as unknown as WithTick<Mesh>).tick = (delta) => {
        // setAnimationLoop 根据设备性能自动调整帧率，导致动画在不同设备上表现不一致
        // 通过设置动画弧度数来控制动画速度，动画速度与帧速率解耦来解决这个问题
        cube.rotation.x += radiansPerSecond * delta;
        cube.rotation.y += radiansPerSecond * delta;
        cube.rotation.z += radiansPerSecond * delta;
    }

    return cube
}

export { createCube }