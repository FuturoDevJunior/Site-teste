class Particles {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.init();
    }

    init() {
        this.resize();
        window.addEventListener('resize', () => this.resize());
        
        for(let i = 0; i < 100; i++) {
            this.particles.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                radius: Math.random() * 2,
                density: Math.random() * 0.3
            });
        }
        
        this.animate();
    }

    resize() {
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = window.innerHeight;
    }

    animate() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        
        this.particles.forEach(particle => {
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI*2);
            this.ctx.fillStyle = `rgba(0, 180, 180, ${particle.density})`;
            this.ctx.fill();
            
            particle.y += particle.density;
            if(particle.y > this.height) particle.y = 0;
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

new Particles(document.querySelector('.particles-canvas')); 