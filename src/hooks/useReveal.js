import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function useReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Reset all reveal elements when route changes
    const reveals = document.querySelectorAll('.reveal')
    reveals.forEach(el => el.classList.remove('visible'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    // Small delay to ensure DOM is painted
    const timer = setTimeout(() => {
      const freshReveals = document.querySelectorAll('.reveal')
      freshReveals.forEach(el => observer.observe(el))
    }, 100)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [pathname])
}
