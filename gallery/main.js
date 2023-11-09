// Scene 생성
var scene = new THREE.Scene();

// Camera 생성
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Renderer 생성
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('scene-container').appendChild(renderer.domElement);

// GLTF 로더 생성
var loader = new THREE.GLTFLoader();

// GLTF 파일 로드
loader.load('models/earth/scene.gltf', function (gltf) {
  // 로드된 모델을 scene에 추가
  scene.add(gltf.scene);
});

// 애니메이션 루프
function animate() {
  requestAnimationFrame(animate);
  // 여기에 추가적인 애니메이션 또는 로직을 넣을 수 있습니다.

  // 렌더러를 사용하여 scene을 그리기
  renderer.render(scene, camera);
}

// 애니메이션 시작
animate();