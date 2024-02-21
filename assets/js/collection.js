// import * as THREE from "./three.module.js";
// import { MTLLoader } from "./MTLLoader.js";
// import { OBJLoader } from "./OBJLoader.js";

// const scene = new THREE.Scene();
// const aspectRatio = window.innerWidth / window.innerHeight;
// const cameraWidth = 17;
// const cameraHeight = cameraWidth / aspectRatio;
// const camera = new THREE.OrthographicCamera(
//   -cameraWidth / 2,
//   cameraWidth / 2,
//   cameraHeight / 2,
//   -cameraHeight / 2,
//   0.1,
//   1000
// );
// camera.position.z = 5;

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setClearColor(0x000000, 0);

// document.addEventListener("DOMContentLoaded", function () {
//   const mainSection = document.getElementById("collection");
//   mainSection.appendChild(renderer.domElement);
// });

// const ambientLight = new THREE.AmbientLight(0xffffff, 5);
// scene.add(ambientLight);

// const directionalLight = new THREE.DirectionalLight(0xffffff, 0.2);
// directionalLight.position.set(1, 1, 1);

// function loadModel(mtlPath, objPath, position, slideIndex) {
//   const mtlLoader = new MTLLoader();
//   const objLoader = new OBJLoader();

//   mtlLoader.load(mtlPath, function (materials) {
//     objLoader.setMaterials(materials);
//     objLoader.load(objPath, function (object) {
//       object.position.copy(position);
//       scene.add(object);

//       animateModel(object);
//     });
//   });
// }

// function animateModel(object) {
//   function animate() {
//     requestAnimationFrame(animate);

//     renderer.render(scene, camera);
//   }
//   animate();
// }

// loadModel(
//   "images/3d/collection/collection-2301.mtl",
//   "images/3d/collection/collection-2301.obj",
//   new THREE.Vector3(-6, 0, 0),
//   0
// );
// loadModel(
//   "images/3d/collection/collection-2302.mtl",
//   "images/3d/collection/collection-2302.obj",
//   new THREE.Vector3(-3, 0, 0),
//   1
// );
// loadModel(
//   "images/3d/collection/collection-2303.mtl",
//   "images/3d/collection/collection-2303.obj",
//   new THREE.Vector3(0, 0, 0),
//   2
// );
// loadModel(
//   "images/3d/collection/collection-2304.mtl",
//   "images/3d/collection/collection-2304.obj",
//   new THREE.Vector3(3, 0, 0),
//   3
// );
// loadModel(
//   "images/3d/collection/collection-2305.mtl",
//   "images/3d/collection/collection-2305.obj",
//   new THREE.Vector3(6, 0, 0),
//   4
// );
// loadModel(
//   "images/3d/collection/collection-2306.mtl",
//   "images/3d/collection/collection-2306.obj",
//   new THREE.Vector3(-6, 0, 0)
// );
// loadModel(
//   "images/3d/collection/collection-2307.mtl",
//   "images/3d/collection/collection-2307.obj",
//   new THREE.Vector3(-3, 0, 0)
// );
// loadModel(
//   "images/3d/collection/collection-2308.mtl",
//   "images/3d/collection/collection-2308.obj",
//   new THREE.Vector3(0, 0, 0)
// );
// loadModel(
//   "images/3d/collection/collection-2309.mtl",
//   "images/3d/collection/collection-2309.obj",
//   new THREE.Vector3(3, 0, 0)
// );
// loadModel(
//   "images/3d/collection/collection-2310.mtl",
//   "images/3d/collection/collection-2310.obj",
//   new THREE.Vector3(6, 0, 0)
// );
// loadModel(
//   "images/3d/collection/collection-2311.mtl",
//   "images/3d/collection/collection-2311.obj",
//   new THREE.Vector3(-6, 0, 0)
// );
// loadModel(
//   "images/3d/collection/collection-2312.mtl",
//   "images/3d/collection/collection-2312.obj",
//   new THREE.Vector3(-3, 0, 0)
// );
// loadModel(
//   "images/3d/collection/collection-2401.mtl",
//   "images/3d/collection/collection-2401.obj",
//   new THREE.Vector3(0, 0, 0)
// );
// loadModel(
//   "images/3d/collection/collection-2402.mtl",
//   "images/3d/collection/collection-2402.obj",
//   new THREE.Vector3(3, 0, 0)
// );
// loadModel(
//   "images/3d/collection/collection-2403.mtl",
//   "images/3d/collection/collection-2403.obj",
//   new THREE.Vector3(6, 0, 0)
// );
