import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'

const ateliersList = [
  "Développer son intuition · Tout niveau",
  "Les 5 blessures émotionnelles",
  "Mission de vie · Tout niveau",
  "L'art de l'affirmation de soi",
  "Se connecter avec son enfant intérieur",
  "Atelier du pendule pour tous",
  "Attirer la chance · Tout niveau",
  "Signes de l'univers & synchronicités",
  "Confiance en soi · Estime de soi",
  "Les lignes de la main · Tout niveau",
  "Lecture intuitive avec les couleurs",
  "Les chakras et leur énergie",
]

const delayClasses = ['reveal-delay-1','reveal-delay-2','reveal-delay-3','reveal-delay-4','reveal-delay-5','reveal-delay-6']

export default function Ateliers() {
  useReveal()

  return (
    <>
      <style>{`
        /* ── ATELIERS VISIO ── */
        #ateliers-visio {
          background: var(--noir-soft);
          border-top: 1px solid rgba(201,168,76,0.06);
        }
        .ateliers-price-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--or-pale);
          border: 1px solid rgba(201,168,76,0.25);
          padding: 0.5rem 1.5rem;
          margin-bottom: 2.5rem;
        }
        .ateliers-price-badge span {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.4rem;
          color: var(--or);
        }
        .ateliers-price-badge small {
          font-family: 'Cinzel', serif;
          font-size: 0.55rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--creme-dim);
        }
        .ateliers-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 1rem;
        }
        .atelier-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.2rem;
          background: var(--noir-card);
          border: 1px solid rgba(255,255,255,0.05);
          transition: border-color 0.3s ease, transform 0.2s ease;
          cursor: none;
        }
        .atelier-item:hover {
          border-color: rgba(201,168,76,0.25);
          transform: translateX(4px);
        }
        .atelier-icon {
          width: 2px;
          height: 30px;
          background: linear-gradient(to bottom, var(--or), var(--bordeaux));
          flex-shrink: 0;
        }
        .atelier-name {
          font-family: 'Inter', sans-serif;
          font-size: 0.82rem;
          color: var(--creme-dim);
          line-height: 1.4;
        }

        /* ── ORACLE ── */
        #oracle {
          background: var(--noir);
          overflow: hidden;
        }
        .oracle-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 50% at 20% 50%, rgba(107,26,42,0.2) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 80% 50%, rgba(201,168,76,0.08) 0%, transparent 60%);
          pointer-events: none;
        }
        .oracle-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }
        @media (max-width: 900px) {
          .oracle-inner { grid-template-columns: 1fr; gap: 3rem; }
        }
        .oracle-cards-visual {
          position: relative;
          height: 450px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .oracle-card {
          position: absolute;
          width: 160px;
          aspect-ratio: 2/3;
          border: 1px solid rgba(201,168,76,0.3);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: transform 0.4s ease;
        }
        .oracle-card-inner {
          width: 100%; height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 1rem;
        }
        .oracle-card:nth-child(1) {
          background: linear-gradient(145deg, #1C0E14, #3D1220);
          transform: rotate(-12deg) translate(-100px, 20px);
          z-index: 1;
        }
        .oracle-card:nth-child(2) {
          background: linear-gradient(145deg, #100A06, #2A1810);
          transform: rotate(-4deg) translate(-40px, -15px);
          z-index: 2;
          border-color: rgba(201,168,76,0.5);
          box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(201,168,76,0.1);
        }
        .oracle-card:nth-child(3) {
          background: linear-gradient(145deg, #0A0E1C, #1A2040);
          transform: rotate(6deg) translate(50px, 10px);
          z-index: 1;
        }
        .oracle-card:nth-child(2):hover {
          transform: rotate(-4deg) translate(-40px, -30px) scale(1.05);
          box-shadow: 0 30px 80px rgba(0,0,0,0.6), 0 0 60px rgba(201,168,76,0.15);
        }
        .card-sigil { font-size: 2.5rem; opacity: 0.6; }
        .card-label {
          font-family: 'Cinzel', serif;
          font-size: 0.45rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--or);
          text-align: center;
        }
        .card-roman {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.4rem;
          font-weight: 300;
          color: rgba(201,168,76,0.5);
        }
        .oracle-badge-inpi {
          font-family: 'Cinzel', serif;
          font-size: 0.5rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--creme-dim);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 0.4rem 1rem;
          margin-bottom: 2rem;
          display: inline-block;
        }
        .oracle-text h2 {
          font-size: clamp(2.8rem, 5vw, 5rem);
          margin-bottom: 0.3rem;
        }
        .oracle-subtitle-tag {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.2rem;
          font-style: italic;
          color: var(--or);
          margin-bottom: 1.5rem;
          display: block;
        }
        .oracle-description {
          font-size: 0.9rem;
          color: var(--creme-dim);
          line-height: 1.9;
          margin-bottom: 2.5rem;
        }
        .oracle-specs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }
        .oracle-spec {
          padding: 1rem;
          background: rgba(201,168,76,0.04);
          border: 1px solid rgba(201,168,76,0.12);
        }
        .oracle-spec-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          color: var(--or);
          line-height: 1;
          margin-bottom: 0.25rem;
        }
        .oracle-spec-label {
          font-family: 'Cinzel', serif;
          font-size: 0.5rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--creme-dim);
        }
        .oracle-price-block {
          display: flex;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .oracle-price {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3.5rem;
          font-weight: 300;
          color: var(--or);
          line-height: 1;
        }
        .oracle-price small { font-size: 1.2rem; }

        /* ── ÉVÉNEMENTIEL ── */
        #evenementiel {
          background: var(--noir-card);
          border-top: 1px solid rgba(201,168,76,0.06);
        }
        .evenement-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        @media (max-width: 768px) {
          .evenement-grid { grid-template-columns: 1fr; }
        }
        .evenement-card {
          background: var(--noir);
          border: 1px solid rgba(201,168,76,0.12);
          padding: 2.5rem;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s ease, transform 0.2s ease;
        }
        .evenement-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--or), transparent);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }
        .evenement-card:hover {
          border-color: rgba(201,168,76,0.3);
          transform: translateY(-4px);
        }
        .evenement-card:hover::before { transform: scaleX(1); }
        .evenement-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
          display: block;
        }
        .evenement-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.6rem;
          color: var(--creme);
          margin-bottom: 0.75rem;
        }
        .evenement-desc {
          font-size: 0.85rem;
          color: var(--creme-dim);
          line-height: 1.8;
        }
      `}</style>

      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="page-hero-content">
          <p className="label" style={{ marginBottom: '1rem' }}>Développement Personnel</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(2.8rem, 7vw, 6rem)', color: 'var(--creme)', marginBottom: '1rem' }}>
            Ateliers &<br /><em style={{ color: 'var(--or)' }}>Oracle du Souffle</em>
          </h1>
          <p className="page-hero-sub">Visioconférence · Présentiel · Événementiel</p>
        </div>
      </div>

      {/* ATELIERS VISIO */}
      <section id="ateliers-visio">
        <div className="container">
          <div className="section-header">
            <p className="label reveal">Développement Personnel</p>
            <h2 className="section-title reveal reveal-delay-1">Ateliers<br /><em className="gold">Visioconférence</em></h2>
            <div className="reveal reveal-delay-2" style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
              <div className="ateliers-price-badge">
                <span>35€</span>
                <small>par atelier · disponible en ligne</small>
              </div>
            </div>
          </div>
          <div className="ateliers-grid">
            {ateliersList.map((name, i) => (
              <div key={name} className={`atelier-item reveal ${delayClasses[i % 6]}`}>
                <div className="atelier-icon"></div>
                <span className="atelier-name">{name}</span>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }} className="reveal">
            <a href="#" className="btn-outline">Voir le calendrier des ateliers</a>
          </div>
        </div>
      </section>

      {/* ORNAMENT */}
      <div style={{ background: 'var(--noir)' }}>
        <div className="ornament" style={{ padding: '2rem 0', maxWidth: '500px' }}>
          <div className="ornament-line"></div>
          <span className="ornament-symbol" style={{ fontSize: '1.5rem', color: 'var(--or)' }}>☽ ✦ ☾</span>
          <div className="ornament-line"></div>
        </div>
      </div>

      {/* ORACLE DU SOUFFLE */}
      <section id="oracle">
        <div className="oracle-bg"></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="oracle-inner">

            <div className="oracle-cards-visual reveal">
              <div className="oracle-card">
                <div className="oracle-card-inner">
                  <span className="card-sigil">☾</span>
                  <span className="card-roman">IV</span>
                  <span className="card-label">Le Souffle<br />de l'Ange</span>
                </div>
              </div>
              <div className="oracle-card">
                <div className="oracle-card-inner">
                  <span className="card-sigil" style={{ fontSize: '3rem', opacity: 0.8, color: 'var(--or)' }}>✦</span>
                  <span className="card-roman" style={{ color: 'var(--or)' }}>I</span>
                  <span className="card-label" style={{ color: 'var(--or)' }}>L'Oracle<br />du Souffle</span>
                </div>
              </div>
              <div className="oracle-card">
                <div className="oracle-card-inner">
                  <span className="card-sigil">✧</span>
                  <span className="card-roman">XII</span>
                  <span className="card-label">La Lumière<br />Intérieure</span>
                </div>
              </div>
            </div>

            <div className="oracle-text">
              <span className="oracle-badge-inpi reveal">Marque déposée INPI · N° 083605375</span>
              <p className="label reveal">Création Exclusive</p>
              <h2 className="reveal reveal-delay-1">L'Oracle<br /><em className="gold">du Souffle</em></h2>
              <span className="oracle-subtitle-tag reveal reveal-delay-2">Un tarot divinatoire inspiré des anges</span>
              <p className="oracle-description reveal reveal-delay-3">Entre le souffle de la vie et le souffle de l'esprit. Cet oracle unique fait prendre conscience de l'importance de la respiration. La technique développe l'intuition, déclenche des visions médiumniques et permet des interprétations plus profondes. Illustré par Guillaumette Napoly, ex-styliste chez Christian Dior.</p>

              <div className="oracle-specs reveal reveal-delay-3">
                <div className="oracle-spec">
                  <div className="oracle-spec-value">54</div>
                  <div className="oracle-spec-label">Cartes au total</div>
                </div>
                <div className="oracle-spec">
                  <div className="oracle-spec-value">22</div>
                  <div className="oracle-spec-label">Lames majeures</div>
                </div>
                <div className="oracle-spec">
                  <div className="oracle-spec-value">38</div>
                  <div className="oracle-spec-label">Pages — Livret PDF</div>
                </div>
                <div className="oracle-spec">
                  <div className="oracle-spec-value">26</div>
                  <div className="oracle-spec-label">Lames oracle</div>
                </div>
              </div>

              <div className="oracle-price-block reveal reveal-delay-4">
                <div className="oracle-price">45<small>€</small></div>
                <div>
                  <p style={{ fontFamily: "'Cinzel',serif", fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--creme-dim)', marginBottom: '0.25rem' }}>Livret PDF inclus à la commande</p>
                  <Link to="/boutique" className="btn-primary" style={{ padding: '0.8rem 2rem', fontSize: '0.6rem' }}>Commander →</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ORNAMENT */}
      <div style={{ background: 'var(--noir-card)', borderTop: '1px solid rgba(201,168,76,0.06)' }}>
        <div className="ornament" style={{ padding: '2.5rem 0' }}>
          <div className="ornament-line"></div>
          <span className="ornament-symbol">⬥</span>
          <div className="ornament-dot"></div>
          <span className="ornament-symbol">⬥</span>
          <div className="ornament-line"></div>
        </div>
      </div>

      {/* ÉVÉNEMENTIEL */}
      <section id="evenementiel">
        <div className="container">
          <div className="section-header">
            <p className="label reveal">À Domicile & Événements</p>
            <h2 className="section-title reveal reveal-delay-1">Événementiel<br /><em className="gold">sur mesure</em></h2>
          </div>
          <div className="evenement-grid">
            <div className="evenement-card reveal reveal-delay-1">
              <span className="evenement-icon">🏠</span>
              <div className="evenement-title">Atelier Intuitif à Domicile</div>
              <p className="evenement-desc">Un atelier de développement personnel animé directement chez vous. Format personnalisé selon vos invités et vos intentions. Idéal pour un groupe d'amis, un événement privé ou un team building spirituel. Sur devis.</p>
            </div>
            <div className="evenement-card reveal reveal-delay-2">
              <span className="evenement-icon">🍽️</span>
              <div className="evenement-title">Soirée Voyance Restaurant</div>
              <p className="evenement-desc">Alexandre Delovane vous accompagne lors d'une soirée privée au restaurant. Consultations individuelles à table, ambiance mystérieuse et élégante. Parfait pour les anniversaires, les soirées d'entreprise et les événements de prestige. Sur devis.</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }} className="reveal">
            <Link to="/contact" className="btn-primary">Demander un devis événementiel</Link>
          </div>
        </div>
      </section>
    </>
  )
}
