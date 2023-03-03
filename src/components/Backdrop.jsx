import { React, useEffect } from 'react'
import { Scene, Group, SphereGeometry, MeshStandardMaterial, Mesh, MathUtils, PointLight, PerspectiveCamera, WebGL1Renderer } from 'three';

const Backdrop = () => {
    useEffect(()=>{
        const scene = new Scene();
        const stars = new Group();
        const light = new PointLight(0xffffff, 100);
        const camera = new PerspectiveCamera(45, screen.availWidth / screen.availHeight);
        const canvas = document.getElementById("canvas");
        const renderer = new WebGL1Renderer({ antialias: true, canvas, alpha: false });
        const addStar = () => {
            const geometry = new SphereGeometry(0.25, 24, 24);
            const material = new MeshStandardMaterial({
                color: 0xffffff,
                emissive: 0xffffff,
                emissiveIntensity: 1,
                roughness: 0,
            metalness: 1
        });
            const star = new Mesh(geometry, material);
        
            const [x, y, z] = Array(3)
            .fill(undefined)
            .map(() => MathUtils.randFloatSpread(100));
        
            star.position.set(x, y, z);
            stars.add(star);
            scene.add(stars);
        };
        const loop = () => {
            stars.rotation.y -= 0.0004;
            stars.rotation.x -= 0.0006
            ;
            renderer.render(scene, camera);
            requestAnimationFrame(loop);
        }
        Array(200).fill(undefined).forEach(addStar);

        light.position.set(0,10,10);
        scene.add(light);

        camera.position.z = 80
        scene.add(camera);



        renderer.setSize(screen.availWidth, screen.availHeight);
        renderer.render(scene, camera);
        loop();
    })
  return (
    <div  className="w-full fixed left-1/2 -translate-x-1/2 opacity-30 overflow-hidden -z-50">
        <canvas id="canvas">
        {/* <div className='w-full h-screen bg-black opacity-100 z-10'></div> */}
        </canvas>
    </div>
  )
}

export default Backdrop;