import type { PerspectiveCamera, WebGLRenderer } from "three"

function setSize(container: Element, camera: PerspectiveCamera, renderer: WebGLRenderer) {
    camera.aspect = container.clientWidth / container.clientHeight;
    // 修改 fov、aspect、near、far 等参数后，需要更新投影矩阵生效
    camera.updateProjectionMatrix(); 

    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio);
}

class Resizer {
    constructor(container: Element, camera: PerspectiveCamera, renderer: WebGLRenderer) {

        setSize(container,camera, renderer)
        window.addEventListener('resize', () => {
            setSize(container,camera, renderer)
            this.onResize()
        })

    }
    onResize() {}
}

export {Resizer};