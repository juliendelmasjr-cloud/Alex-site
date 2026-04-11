import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <style>{`
        footer {
          background: var(--noir);
          border-top: 1px solid rgba(201,168,76,0.15);
          padding: 4rem 2rem 2rem;
          position: relative;
          z-index: 1;
        }
        .footer-ornament {
          text-align: center;
          margin-bottom: 3rem;
          color: var(--or);
          opacity: 0.4;
          font-size: 1.5rem;
          letter-spacing: 0.5rem;
        }
        .footer-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 4rem;
          margin-bottom: 3rem;
        }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr; gap: 2rem; }
        }
        .footer-brand .logo {
          font-family: 'Cinzel', serif;
          font-size: 1.1rem;
          letter-spacing: 0.2em;
          color: var(--or);
          text-transform: uppercase;
          margin-bottom: 1rem;
          display: block;
        }
        .footer-brand p {
          font-size: 0.82rem;
          color: var(--creme-dim);
          line-height: 1.8;
          max-width: 320px;
        }
        .footer-radio-row {
          margin-top: 1.5rem;
          display: flex;
          gap: 0.75rem;
          align-items: center;
        }
        .footer-radio-dot {
          width: 6px; height: 6px;
          background: var(--bordeaux-light);
          border-radius: 50%;
          animation: pulse 2s ease infinite;
          flex-shrink: 0;
        }
        .footer-radio-text {
          font-family: 'Cinzel', serif;
          font-size: 0.55rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--bordeaux-light);
        }
        .footer-col h5 {
          font-family: 'Cinzel', serif;
          font-size: 0.6rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--or);
          margin-bottom: 1.2rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid rgba(201,168,76,0.15);
        }
        .footer-col ul { list-style: none; }
        .footer-col ul li {
          font-size: 0.8rem;
          color: var(--creme-dim);
          margin-bottom: 0.5rem;
          padding-left: 0.75rem;
          position: relative;
        }
        .footer-col ul li::before {
          content: '◆';
          position: absolute;
          left: 0;
          font-size: 0.4rem;
          color: var(--or);
          top: 0.35rem;
        }
        .footer-col ul li a {
          color: var(--creme-dim);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer-col ul li a:hover { color: var(--or); }
        .footer-bottom {
          max-width: 1200px;
          margin: 0 auto;
          padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.05);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .footer-legal {
          font-size: 0.7rem;
          color: rgba(200,188,168,0.4);
          font-family: 'Cinzel', serif;
          letter-spacing: 0.1em;
        }
        .footer-radio {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .footer-radio span {
          font-family: 'Cinzel', serif;
          font-size: 0.55rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--bordeaux-light);
        }
      `}</style>
      <footer>
        <div className="footer-ornament">✦ ◈ ✦</div>
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="logo">Alexandre Delovane</span>
            <p>Coach Intuitif, Médium, Voyant. 20 ans d'expérience au service du développement personnel et de l'intuition. Fondateur de CI-AD — Intuitive Consulting.</p>
            <div className="footer-radio-row">
              <div className="footer-radio-dot"></div>
              <span className="footer-radio-text">"C'est Votre Avenir" · Sud Radio · Mer-Ven 16h–17h</span>
            </div>
          </div>
          <div className="footer-col">
            <h5>Navigation</h5>
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/ateliers">Ateliers Visio</Link></li>
              <li><Link to="/ateliers">Oracle du Souffle</Link></li>
              <li><Link to="/boutique">Boutique</Link></li>
              <li><Link to="/medias">Médias</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Informations Légales</h5>
            <ul>
              <li>CI-AD SARL</li>
              <li>195 Chemin de La Grave</li>
              <li>33240 Saint André de Cubzac</li>
              <li>RCS Paris 508 290 640</li>
              <li>TVA FR 19 508 290 640</li>
              <li>Code APE : 9609Z</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-legal">© 2025 Alexandre Delovane · CI-AD SARL · Tous droits réservés</span>
          <div className="footer-radio">
            <div className="footer-radio-dot"></div>
            <span>Sud Radio · En Antenne</span>
          </div>
        </div>
      </footer>
    </>
  )
}
