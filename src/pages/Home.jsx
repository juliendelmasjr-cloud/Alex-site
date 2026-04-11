import { Link } from 'react-router-dom'
import ParticlesCanvas from '../components/ParticlesCanvas'
import useReveal from '../hooks/useReveal'

export default function Home() {
  useReveal()

  return (
    <>
      <style>{`
        /* ── HERO ── */
        #hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          text-align: center;
          padding: 8rem 2rem 4rem;
        }
        #hero::before {
          content: '';
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 80vw; height: 80vh;
          background: radial-gradient(ellipse, rgba(107,26,42,0.25) 0%, transparent 65%);
          pointer-events: none;
          z-index: 0;
        }
        #hero::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 30%;
          background: linear-gradient(to bottom, transparent, var(--noir));
          z-index: 1;
        }
        .hero-content { position: relative; z-index: 2; max-width: 900px; }
        .hero-eyebrow {
          font-family: 'Cinzel', serif;
          font-size: 0.6rem;
          letter-spacing: 0.45em;
          color: var(--or);
          text-transform: uppercase;
          margin-bottom: 2rem;
          opacity: 0;
          animation: fadeUp 1s ease 0.3s forwards;
        }
        .hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3.5rem, 10vw, 9rem);
          font-weight: 300;
          letter-spacing: 0.08em;
          line-height: 1.0;
          color: var(--creme);
          text-transform: uppercase;
          margin-bottom: 0.5rem;
          opacity: 0;
          animation: fadeUp 1.2s ease 0.5s forwards;
        }
        .hero-title .gold { color: var(--or); font-style: italic; }
        .hero-subtitle {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1rem, 2.5vw, 1.5rem);
          font-weight: 300;
          font-style: italic;
          color: var(--creme-dim);
          letter-spacing: 0.15em;
          margin-bottom: 1.5rem;
          opacity: 0;
          animation: fadeUp 1.2s ease 0.7s forwards;
        }
        .hero-line {
          width: 1px; height: 60px;
          background: linear-gradient(to bottom, transparent, var(--or), transparent);
          margin: 1.5rem auto;
          opacity: 0;
          animation: fadeIn 1.5s ease 0.9s forwards;
        }
        .hero-tagline {
          font-family: 'Cinzel', serif;
          font-size: clamp(0.6rem, 1.5vw, 0.8rem);
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--or-light);
          margin-bottom: 3rem;
          opacity: 0;
          animation: fadeUp 1s ease 1.1s forwards;
        }
        .hero-ctas {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
          opacity: 0;
          animation: fadeUp 1s ease 1.3s forwards;
        }
        .hero-badge {
          margin-top: 3rem;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          border: 1px solid rgba(107,26,42,0.6);
          padding: 0.6rem 1.5rem;
          opacity: 0;
          animation: fadeIn 1s ease 1.6s forwards;
        }
        .hero-badge-dot {
          width: 6px; height: 6px;
          background: var(--bordeaux-light);
          border-radius: 50%;
          animation: pulse 2s ease infinite;
        }
        .hero-badge span {
          font-family: 'Cinzel', serif;
          font-size: 0.55rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--bordeaux-light);
        }

        /* ── ABOUT ── */
        #about {
          background: linear-gradient(180deg, var(--noir) 0%, var(--noir-soft) 50%, var(--noir) 100%);
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr; gap: 3rem; }
        }
        .portrait-frame {
          position: relative;
          aspect-ratio: 3/4;
          max-width: 380px;
          margin: 0 auto;
        }
        .portrait-frame::before {
          content: '';
          position: absolute;
          top: -12px; right: -12px;
          width: 100%; height: 100%;
          border: 1px solid rgba(201,168,76,0.3);
          z-index: 0;
        }
        .portrait-frame::after {
          content: '';
          position: absolute;
          bottom: -12px; left: -12px;
          width: 60%; height: 60%;
          border: 1px solid rgba(107,26,42,0.5);
          z-index: 0;
        }
        .portrait-placeholder {
          position: relative;
          z-index: 1;
          width: 100%; height: 100%;
          background: linear-gradient(145deg, var(--noir-mid) 0%, var(--bordeaux) 60%, var(--noir-card) 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }
        .portrait-monogram {
          font-family: 'Cormorant Garamond', serif;
          font-size: 6rem;
          font-weight: 300;
          color: rgba(201,168,76,0.4);
          line-height: 1;
        }
        .portrait-caption {
          font-family: 'Cinzel', serif;
          font-size: 0.55rem;
          letter-spacing: 0.3em;
          color: rgba(201,168,76,0.5);
          text-transform: uppercase;
        }
        .about-text h2 {
          font-size: clamp(2.5rem, 4vw, 4rem);
          margin-bottom: 0.5rem;
        }
        .about-intro {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.35rem;
          font-style: italic;
          color: var(--creme-dim);
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        .about-body {
          font-size: 0.9rem;
          line-height: 1.9;
          color: var(--creme-dim);
          margin-bottom: 2.5rem;
        }
        .credentials {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        @media (max-width: 600px) {
          .credentials { grid-template-columns: 1fr; }
        }
        .credential {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }
        .credential-icon {
          width: 24px; height: 24px;
          border: 1px solid rgba(201,168,76,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 0.1rem;
        }
        .credential-icon::before {
          content: '◆';
          font-size: 0.4rem;
          color: var(--or);
        }
        .credential p {
          font-family: 'Cinzel', serif;
          font-size: 0.6rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--creme-dim);
          line-height: 1.5;
        }
        .media-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .media-badge {
          font-family: 'Cinzel', serif;
          font-size: 0.55rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--creme-dim);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 0.4rem 0.8rem;
        }

        /* ── ORNAMENT WRAP ── */
        .ornament-wrap {
          padding: 0 2rem;
        }
        .ornament-wrap.card-bg {
          background: var(--noir-card);
          border-top: 1px solid rgba(201,168,76,0.08);
        }
        .ornament-wrap.dark-bg {
          background: var(--noir);
        }

        /* ── RDV ── */
        #rdv {
          background: var(--noir-card);
          border-top: 1px solid rgba(201,168,76,0.08);
          border-bottom: 1px solid rgba(201,168,76,0.08);
        }
        .rdv-intro {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.15rem;
          font-style: italic;
          color: var(--creme-dim);
          text-align: center;
          max-width: 600px;
          margin: 0 auto 3rem;
        }
        .cities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 1rem;
        }
        @media (max-width: 600px) {
          .cities-grid { grid-template-columns: repeat(2, 1fr); }
        }
        .city-card {
          background: var(--noir);
          border: 1px solid rgba(201,168,76,0.1);
          padding: 1.5rem;
          text-align: center;
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease;
          position: relative;
          overflow: hidden;
        }
        .city-card::before {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 100%; height: 2px;
          background: linear-gradient(90deg, transparent, var(--or), transparent);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        .city-card:hover {
          border-color: rgba(201,168,76,0.35);
          box-shadow: 0 0 25px rgba(201,168,76,0.08);
          transform: translateY(-4px);
        }
        .city-card:hover::before { transform: scaleX(1); }
        .city-card.featured {
          border-color: rgba(201,168,76,0.3);
          background: linear-gradient(145deg, var(--noir-mid), rgba(107,26,42,0.1));
        }
        .city-card.coming-soon {
          background: rgba(201,168,76,0.03);
          border-style: dashed;
          border-color: rgba(201,168,76,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 0.5rem;
        }
        .city-name {
          font-family: 'Cinzel', serif;
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--or);
          margin-bottom: 0.5rem;
        }
        .city-dates {
          font-size: 0.78rem;
          color: var(--creme-dim);
          line-height: 1.6;
        }
        .city-badge {
          display: inline-block;
          margin-top: 0.5rem;
          font-family: 'Cinzel', serif;
          font-size: 0.5rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--bordeaux-light);
          border: 1px solid rgba(107,26,42,0.5);
          padding: 0.2rem 0.5rem;
        }
      `}</style>

      {/* HERO */}
      <section id="hero">
        <ParticlesCanvas />
        <div className="hero-content">
          <p className="hero-eyebrow">Coach Intuitif &nbsp;·&nbsp; Médium &nbsp;·&nbsp; Voyant</p>
          <h1 className="hero-title">
            Alexandre<br /><span className="gold">Delovane</span>
          </h1>
          <p className="hero-subtitle">20 ans d'expérience &nbsp;·&nbsp; Développement personnel &nbsp;·&nbsp; Intuition</p>
          <div className="hero-line"></div>
          <p className="hero-tagline">L'ambition est la première étape vers le succès</p>
          <div className="hero-ctas">
            <Link to="/services" className="btn-primary">Consulter</Link>
            <Link to="/boutique" className="btn-outline">Boutique Luxury Spiritual</Link>
          </div>
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            <span>C'est Votre Avenir &nbsp;·&nbsp; Sud Radio &nbsp;·&nbsp; Mer. au Ven. 16h–17h</span>
          </div>
        </div>
      </section>

      {/* À PROPOS */}
      <section id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-portrait reveal">
              <div className="portrait-frame">
                <div className="portrait-placeholder">
                  <div className="portrait-monogram">AD</div>
                  <div className="portrait-caption">Alexandre Delovane</div>
                </div>
              </div>
            </div>
            <div className="about-text">
              <p className="label reveal">À Propos</p>
              <h2 className="reveal reveal-delay-1">Un Parcours<br /><em style={{ color: 'var(--or)' }}>Atypique</em></h2>
              <p className="about-intro reveal reveal-delay-2">Coach de vie, chromothérapeute, graphologue et médium testé par l'Institut Métapsychique International de Paris.</p>
              <p className="about-body reveal reveal-delay-3">Après un début dans le management, sa véritable vocation se dessine dans le développement personnel. Sa personnalité se forge au travers d'une philosophie, d'une spiritualité et d'un attrait tout particulier à l'énergie, la lumière et la couleur. Il transmet l'énergie nécessaire pour se recentrer et gagner en potentiel, avec la maîtrise parfaite du langage des couleurs par le biais de l'état émotionnel, physique et physiologique.</p>
              <div className="credentials reveal reveal-delay-3">
                <div className="credential"><div className="credential-icon"></div><p>Coach de vie diplomé · Union de Formation</p></div>
                <div className="credential"><div className="credential-icon"></div><p>Chromothérapeute certifié · Formation B. Ciccariello</p></div>
                <div className="credential"><div className="credential-icon"></div><p>Graphologue & Luminothérapeute</p></div>
                <div className="credential"><div className="credential-icon"></div><p>Fondateur CI-AD · Intuitive Consulting · 2012</p></div>
                <div className="credential"><div className="credential-icon"></div><p>Expert médiumique testé · I.M.I Paris</p></div>
                <div className="credential"><div className="credential-icon"></div><p>Diplôme Méthode Silva · Psycho-Orientologie</p></div>
              </div>
              <div className="media-badges reveal reveal-delay-4">
                {['Sud Radio', 'France 2', 'C8 TPMP', 'Fun Radio', 'Europe 1', 'TV Suisse', 'Le Parisien'].map(b => (
                  <span key={b} className="media-badge">{b}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ORNAMENT */}
      <div className="ornament-wrap card-bg">
        <div className="ornament" style={{ padding: '2.5rem 0 0' }}>
          <div className="ornament-line"></div>
          <span className="ornament-symbol">✦</span>
          <div className="ornament-dot"></div>
          <span className="ornament-symbol">✦</span>
          <div className="ornament-line"></div>
        </div>
      </div>

      {/* RENDEZ-VOUS */}
      <section id="rdv">
        <div className="container">
          <div className="section-header">
            <p className="label reveal">Rendez-Vous en Présentiel</p>
            <h2 className="section-title reveal reveal-delay-1">Il se déplace<br /><em className="gold">près de chez vous</em></h2>
            <p className="rdv-intro reveal reveal-delay-2">Consultations en face à face dans les principales villes de France. Paris en permanence, déplacements réguliers dans toute la France.</p>
          </div>
          <div className="cities-grid">
            <div className="city-card featured reveal reveal-delay-1">
              <div className="city-name">Paris</div>
              <div className="city-dates">Du lundi au Samedi</div>
              <span className="city-badge">Permanent</span>
            </div>
            <div className="city-card reveal reveal-delay-2">
              <div className="city-name">Bordeaux</div>
              <div className="city-dates">11 · 20-21 Avr<br />04 Mai · 06 Juin</div>
            </div>
            <div className="city-card reveal reveal-delay-2">
              <div className="city-name">Toulouse</div>
              <div className="city-dates">27-28 Avr<br />07-09 Juin</div>
            </div>
            <div className="city-card reveal reveal-delay-3">
              <div className="city-name">Biarritz</div>
              <div className="city-dates">1-2 Juin</div>
            </div>
            <div className="city-card reveal reveal-delay-3">
              <div className="city-name">Montpellier</div>
              <div className="city-dates">10-12 Mai</div>
            </div>
            <div className="city-card reveal reveal-delay-4">
              <div className="city-name">Nice</div>
              <div className="city-dates">21-23 Juin</div>
            </div>
            <div className="city-card reveal reveal-delay-4">
              <div className="city-name">Cannes</div>
              <div className="city-dates">18-20 Octobre</div>
            </div>
            <div className="city-card coming-soon reveal reveal-delay-5">
              <div className="city-name" style={{ opacity: 0.5 }}>Strasbourg</div>
              <span className="city-badge">Prochainement</span>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }} className="reveal reveal-delay-5">
            <Link to="/services" className="btn-outline">Voir toutes les dates & réserver</Link>
          </div>
        </div>
      </section>

      {/* ORNAMENT */}
      <div className="ornament-wrap dark-bg">
        <div className="ornament" style={{ padding: '2.5rem 0' }}>
          <div className="ornament-line"></div>
          <span className="ornament-symbol">◈</span>
          <div className="ornament-line"></div>
        </div>
      </div>
    </>
  )
}
