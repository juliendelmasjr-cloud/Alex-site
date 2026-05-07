import { useEffect } from 'react'

// ═══════════════════════════════════════════════════════════════
// CalendlyEmbed — Bouton qui ouvre Calendly en popup
// ═══════════════════════════════════════════════════════════════
//
// Usage :
//   <CalendlyEmbed url="https://calendly.com/alexandre-delovane/consultation-flash">
//     Réserver →
//   </CalendlyEmbed>
//
// Charge le script Calendly une seule fois (singleton).
// ═══════════════════════════════════════════════════════════════

let calendlyLoaded = false
let calendlyLoading = null

function loadCalendly() {
  if (calendlyLoaded) return Promise.resolve()
  if (calendlyLoading) return calendlyLoading

  calendlyLoading = new Promise((resolve, reject) => {
    // CSS
    if (!document.querySelector('link[data-calendly]')) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = 'https://assets.calendly.com/assets/external/widget.css'
      link.dataset.calendly = 'true'
      document.head.appendChild(link)
    }
    // JS
    if (!document.querySelector('script[data-calendly]')) {
      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      script.dataset.calendly = 'true'
      script.onload = () => {
        calendlyLoaded = true
        resolve()
      }
      script.onerror = reject
      document.body.appendChild(script)
    } else {
      calendlyLoaded = true
      resolve()
    }
  })
  return calendlyLoading
}

export default function CalendlyEmbed({ url, children, className = 'service-cta', style }) {
  useEffect(() => { loadCalendly().catch(() => {}) }, [])

  const handleClick = async (e) => {
    e.preventDefault()
    if (!url) {
      console.warn('[CalendlyEmbed] URL Calendly manquante')
      return
    }
    try {
      await loadCalendly()
      if (window.Calendly?.initPopupWidget) {
        window.Calendly.initPopupWidget({ url })
      } else {
        // Fallback : ouvrir dans un nouvel onglet
        window.open(url, '_blank', 'noopener')
      }
    } catch {
      window.open(url, '_blank', 'noopener')
    }
  }

  return (
    <a href={url || '#'} className={className} style={style} onClick={handleClick}>
      {children}
    </a>
  )
}
