window.onload = function init() {
    const canvas = document.getElementById("gl-canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(canvas.width, canvas.height);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000);
    camera.position.set(2, 2, 2);  

    const controls = new THREE.OrbitControls(camera, renderer.domElement);

    const light = new THREE.PointLight(0xc4c4c4, 10);
    light.position.set(0, 2, 0);  

    const light2 = new THREE.PointLight(0xc4c4c4, 10);
    light2.position.set(2, 0, 0);  
    scene.add(light2);

    const light3 = new THREE.PointLight(0xc4c4c4, 10);
    light3.position.set(0, 0, 2);  
    scene.add(light3);

    const light4 = new THREE.PointLight(0xff0000, 10);
    light3.position.set(0, 3.5, 0); 
    scene.add(light4);

    const loader = new THREE.GLTFLoader();
    loader.load('./model3/scene.gltf', function (gltf) {
        car = gltf.scene.children[0];
        car.scale.set(0.5, 0.5, 0.5);
        scene.add(gltf.scene);
        animate();
    }, undefined, function (error) {
        console.error(error);
    });

    function animate() {
        renderer.render(scene, camera);

        car.rotation.x += 0.02;
        car.rotation.y = 0; 
        car.rotation.z = 0;

        requestAnimationFrame(animate);
    }
}