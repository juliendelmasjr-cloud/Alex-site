import { useEffect, useRef } from 'react'

export default function ParticlesCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let particles = []
    let W, H
    let animId

    function resize() {
      W = canvas.width = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
    }

    class Particle {
      constructor() { this.reset() }
      reset() {
        this.x = Math.random() * W
        this.y = Math.random() * H
        this.size = Math.random() * 1.5 + 0.3
        this.speedX = (Math.random() - 0.5) * 0.3
        this.speedY = -Math.random() * 0.5 - 0.1
        this.opacity = Math.random() * 0.6 + 0.1
        this.life = 1
        this.decay = Math.random() * 0.002 + 0.001
      }
      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.life -= this.decay
        if (this.life <= 0 || this.y < -10) this.reset()
      }
      draw() {
        ctx.save()
        ctx.globalAlpha = this.opacity * this.life
        ctx.fillStyle = Math.random() > 0.7 ? '#C9A84C' : '#F5F0E8'
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
    }

    function initParticles() {
      particles = []
      for (let i = 0; i < 120; i++) {
        const p = new Particle()
        p.y = Math.random() * H
        particles.push(p)
      }
    }

    function animate() {
      ctx.clearRect(0, 0, W, H)
      particles.forEach(p => { p.update(); p.draw() })
      animId = requestAnimationFrame(animate)
    }

    resize()
    initParticles()
    animate()

    const onResize = () => { resize(); initParticles() }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id="particles-canvas"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        width: '100%',
        height: '100%',
      }}
    />
  )
}
