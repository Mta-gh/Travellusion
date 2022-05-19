// import * as THREE from "../js/three.js"
import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js';



let scene, camera, renderer, cloudGeo, cloudMaterial, cloudParticles = [];
let quitInit = false

// Enter the wormhole function
let buttonWormhole = document.querySelector('.btn3');



function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45,window.innerWidth / window.innerHeight, 1,1000);
    camera.position.z = 4;
    camera.rotation.x = 1.17;
    camera.rotation.y = -0.10;
    camera.rotation.z = 0.27;
    
    
    // add ambient light
    let ambient = new THREE.AmbientLight(0x000C66);
    scene.add(ambient);
    
    // main light
    let directionalLight = new THREE.DirectionalLight(0x0000FF);
    directionalLight.position.set(0,0,1);
    scene.add(directionalLight);
    
    // // different colour point lights
    let blueLight = new THREE.PointLight(0x000C66,70,450,1.7);
    blueLight.position.set(0,600,100);
    scene.add(blueLight);
    
    let redLight = new THREE.PointLight(0xFF0000,50,450,1.7);
    redLight.position.set(100,600,100);
    // scene.add(redLight);
    
    let aquaLight = new THREE.PointLight(0x00FFBF,70,500,1.7);
    aquaLight.position.set(300,300,200);
    scene.add(aquaLight);
    
    // add renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth,window.innerHeight);
    
    // add green fog
    scene.fog = new THREE.FogExp2(0x1a1e41, 0.001);
    renderer.setClearColor(scene.fog.color);
    // Add scene to page as canvas element
    document.body.appendChild(renderer.domElement);
    // smoke/cloud texture
    
    let loader = new THREE.TextureLoader();
    const bgTexture = loader.load('img/bubble2.jpg');
    bgTexture.minFilter = THREE.LinearFilter
    // bgTexture.mapping = THREE.EquirectangularReflectionMapping;
    // bgTexture.encoding = THREE.sRGBEncoding;
    
    scene.background = bgTexture;
    
    
    loader.load("img/smoke-1.png", function(texture){
        cloudGeo = new THREE.PlaneBufferGeometry(500,500);
        cloudMaterial = new THREE.MeshLambertMaterial({
            map:texture,
            transparent: true
        });
        // loop for particles
        for(let p=0; p<70; p++) {
            let cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
            // random cloud position 
            cloud.position.set(
                Math.random()*800 -400,
                500,
                Math.random()*500-500
                );
                cloud.rotation.x = 1.17;
                cloud.rotation.y = -0.10;
                cloud.rotation.z = Math.random()*2*Math.PI;
                cloud.material.opacity = 0.55;
                cloudParticles.push(cloud);
                // Add to scene
                scene.add(cloud);
            }
        });
        
        
        
        window.addEventListener("resize", onWindowResize, false)
        render()
        
    }
    // Responsive
    function onWindowResize() {
        camera.aspect=window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight)
    }
    // Set rendering loop
    function render() {
        cloudParticles.forEach(p => {
            p.rotation.z -=0.0008;
        });
        renderer.render(scene,camera);
        if (quitInit === false){
            requestAnimationFrame(render);
        }
        else {
            console.log("system offline")
        }
    }
    init()
    
    buttonWormhole.addEventListener("click", function() {
        console.log('cancelling nebula matrix system');
        quitInit = true;
        let navito = document.querySelector('.planet-nav');
        navito.classList.add('active');
        navito.style.transform = 'translateY(0%)';
        document.querySelector('.planet-nav-title').classList.add('active-h2');
        document.querySelector('.home-nav').classList.add('active-home-nav')

        
    });