import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Home() {
  const canvas = useRef(null);
  useEffect(() => {
    
  });
  return (
    <div className={styles.container}>
      <canvas className={styles.canvas} ref={canvas}></canvas>
    </div>
  );
}


/**
 * EXAMPLE
 */


// export default function Home() {
//   const canvas = useRef(null);
//   useEffect(() => {
//     var scene = new THREE.Scene();
//     var camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     const controls = new OrbitControls(
//       camera,
//       canvas.current && canvas.current
//     );
//     controls.enableDamping = true;
//     var renderer = new THREE.WebGLRenderer({
//       canvas: canvas.current && canvas.current,
//       alpha: true
//     });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     // document.body.appendChild( renderer.domElement );
//     // use ref as a mount point of the Three.js scene instead of the document.body
//     var geometry = new THREE.BoxGeometry(1, 1, 1);
//     var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//     var cube = new THREE.Mesh(geometry, material);
//     scene.add(cube);
//     camera.position.z = 5;
//     var animate = function () {
//       requestAnimationFrame(animate);
//       cube.rotation.x += 0.01;
//       cube.rotation.y += 0.01;
//       // Update controls
//       controls.update();
//       renderer.render(scene, camera);
//     };
//     animate();
//   });
//   return (
//     <div className={styles.container}>
//       <h1>Hello World</h1>
//       <canvas className={styles.canvas} ref={canvas}></canvas>
//     </div>
//   );
// }
