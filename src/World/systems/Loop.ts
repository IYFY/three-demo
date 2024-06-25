import type { Scene, PerspectiveCamera, WebGLRenderer,  } from "three";
import { Clock } from "three";

interface Tickable {
    tick(delta: number): void;
}

class Loop {
    private clock: Clock;
    private scene: Scene;
    private camera: PerspectiveCamera;
    private renderer: WebGLRenderer;
    updatables: Tickable[] = [];

    constructor(scene: Scene, camera: PerspectiveCamera, renderer: WebGLRenderer) {
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.clock = new Clock();
    }

    start() {

        this.renderer.setAnimationLoop(() => {

            this.tick();
            
            this.renderer.render(this.scene, this.camera);
        });
    }

    stop() {
        this.renderer.setAnimationLoop(null);
    }

    tick() {
        // 获取上一次调用 getDelta 以来已经过去了多少时间，测量前一帧花的时间
        const delta = this.clock.getDelta();
        // console.log(
        //   `The last frame rendered in ${delta * 1000} milliseconds`,
        // );
        this.updatables.forEach(updatable => {
            updatable.tick(delta);
        });
    
    }
}

export { Loop };