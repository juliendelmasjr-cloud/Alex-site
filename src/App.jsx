import { useEffect, useRef, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Ateliers from './pages/Ateliers'
import Boutique from './pages/Boutique'
import Medias from './pages/Medias'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const cursorRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const ring = ringRef.current
    if (!cursor || !ring) return

    let mx = 0, my = 0, rx = 0, ry = 0
    let rafId

    const onMouseMove = (e) => {
      mx = e.clientX
      my = e.clientY
      cursor.style.transform = `translate(${mx - 4}px, ${my - 4}px)`
    }

    const animateRing = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring.style.transform = `translate(${rx - 16}px, ${ry - 16}px)`
      rafId = requestAnimationFrame(animateRing)
    }
    animateRing()

    document.addEventListener('mousemove', onMouseMove)

    const addHoverListeners = () => {
      document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', () => {
          cursor.style.transform += ' scale(2)'
          cursor.style.opacity = '0.6'
          ring.style.transform += ' scale(1.5)'
        })
        el.addEventListener('mouseleave', () => {
          cursor.style.opacity = '1'
        })
      })
    }
    addHoverListeners()

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-ring" ref={ringRef}></div>

      <button
        className={`scroll-top${showScrollTop ? ' visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Retour en haut"
      >
        ↑
      </button>

      <Navbar scrolled={scrolled} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ateliers" element={<Ateliers />} />
        <Route path="/boutique" element={<Boutique />} />
        <Route path="/medias" element={<Medias />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}
