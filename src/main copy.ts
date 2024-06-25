import {
    BoxGeometry,
    Mesh,
    MeshBasicMaterial,
    PerspectiveCamera,
    Scene,
    WebGLRenderer,
    Color
} from 'three';


const container = document.querySelector('#scene-container')!;

// 创建场景
const scene = new Scene();

scene.background = new Color('skyblue');

// 创建相机
const fov = 35; // 视野，单位：度
const aspect = container?.clientWidth / container?.clientHeight; // 纵横比
const near = 0.1; // 近裁剪面：任何比这更靠近相机的东西都是不可见的。
const far = 100; // 远剪裁平面：任何比这更远离相机的东西都是不可见的。
// 这四个参数决定了摄像机的视锥体。
const camera = new PerspectiveCamera(fov, aspect, near, far);

camera.position.set(0, 0, 10);

// 创建可见对象
const geometry = new BoxGeometry(2, 2, 2);

const material =  new MeshBasicMaterial();

const cube = new Mesh(geometry, material);

scene.add(cube);


// 创建渲染器
const renderer = new WebGLRenderer();

renderer.setSize(container?.clientWidth, container?.clientHeight);

renderer.setPixelRatio(window.devicePixelRatio); //

container?.append(renderer.domElement);

// 渲染场景
renderer.render(scene, camera);