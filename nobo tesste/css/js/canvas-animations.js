const canvas = document.getElementById('hero-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
    const symbols = ['A', '中', 'Я', 'أ', '漢', 'É', 'ß', '文', 'Ж', '語', 'PT', 'EN', 'ES'];
    const particles = [];
    const count = 24;
    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 18 + 12,
            symbol: symbols[Math.floor(Math.random() * symbols.length)],
            speedX: (Math.random() - 0.5) * 0.45,
            speedY: (Math.random() - 0.5) * 0.45,
            opacity: Math.random() * 0.28 + 0.12,
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.01
        });
    }
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = 'rgba(168, 92, 255, 0.2)';
        ctx.lineWidth = 1;
        particles.forEach((particle, index) => {
            particles.slice(index + 1).forEach(other => {
                const distance = Math.hypot(particle.x - other.x, particle.y - other.y);
                if (distance < 180) {
                    ctx.globalAlpha = (1 - distance / 180) * 0.45;
                    ctx.beginPath();
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(other.x, other.y);
                    ctx.stroke();
                }
            });
        });
        particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;
            p.rotation += p.rotationSpeed;
            if (p.x < -50) p.x = canvas.width + 50;
            if (p.x > canvas.width + 50) p.x = -50;
            if (p.y < -50) p.y = canvas.height + 50;
            if (p.y > canvas.height + 50) p.y = -50;
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation);
            ctx.globalAlpha = p.opacity;
            ctx.fillStyle = p.symbol.length > 1 ? '#ff3cac' : '#a85cff';
            ctx.font = `${p.size}px "Orbitron", sans-serif`;
            ctx.fillText(p.symbol, 0, 0);
            ctx.restore();
        });
        requestAnimationFrame(animate);
    }
    animate();
    window.addEventListener('resize', () => {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
    });
}