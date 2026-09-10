const container = document.getElementById('three-container');
if (container) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 5;
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    const geometry = new THREE.SphereGeometry(1.5, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x6a0dad, wireframe: true, transparent: true, opacity: 0.3 });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);
    const pointsGeometry = new THREE.BufferGeometry();
    const vertices = [];
    for (let i = 0; i < 300; i++) {
        const phi = Math.acos(2 * Math.random() - 1);
        const theta = Math.random() * Math.PI * 2;
        const r = 1.55;
        vertices.push(r * Math.sin(phi) * Math.cos(theta), r * Math.sin(phi) * Math.sin(theta), r * Math.cos(phi));
    }
    pointsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    const pointsMaterial = new THREE.PointsMaterial({ color: 0x00ffff, size: 0.02 });
    const points = new THREE.Points(pointsGeometry, pointsMaterial);
    globe.add(points);
    function animate() {
        requestAnimationFrame(animate);
        globe.rotation.y += 0.003;
        globe.rotation.x += 0.001;
        renderer.render(scene, camera);
    }
    animate();
    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
}