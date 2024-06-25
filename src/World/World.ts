import { createCamera } from "./components/camera"
import { createCube } from "./components/cube"
import { createScene } from "./components/scene"
import { createLights } from "./components/light"

import { createRenderer } from "./systems/renderer"
import { Resizer } from "./systems/Resizer"
import { Loop } from './systems/Loop'

import type {Scene, PerspectiveCamera, WebGLRenderer, Mesh, DirectionalLight} from "three"

class World {
    private scene: Scene
    private camera: PerspectiveCamera
    private renderer:WebGLRenderer
    private cube: Mesh
    private light: DirectionalLight
    private loop: Loop

    constructor(container: Element) {
        this.scene = createScene()
        this.camera = createCamera()
        this.renderer = createRenderer()
        this.loop = new Loop(this.scene, this.camera,this.renderer)

        container.append(this.renderer.domElement)
       
        this.cube = createCube()
        this.light  =  createLights()
        this.scene.add(this.cube, this.light)

        this.loop.updatables.push(this.cube as never);
   
        const resizer = new Resizer(container, this.camera,this.renderer)
        // resizer.onResize = () => {
        //     this.render()
        // }

    }

    render() {
        this.renderer.render(this.scene, this.camera)
    }

    start() {
        this.loop.start()
    }

    stop() {
        this.loop.stop()
    }
}

export {
    World
}