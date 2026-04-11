import useReveal from '../hooks/useReveal'

const categories = [
  { icon: '💎', name: 'Bracelets Pierres', price: '19 €', badge: null },
  { icon: '✨', name: 'Duos', price: '32 €', badge: 'Duo' },
  { icon: '🔮', name: 'Pierres Semi-Précieuses', price: '25 – 85 €', badge: 'Prestige' },
  { icon: '⚖️', name: 'Pendules Divinatoires', price: '25 – 45 €', badge: null },
  { icon: '🕯️', name: 'Bougies & Parfums', price: 'à partir de 10 €', badge: null },
  { icon: '☽', name: 'Oracle du Souffle', price: '45 €', badge: "L'S" },
  { icon: '🪬', name: 'Bracelets Cuivre', price: 'Sur devis', badge: null },
  { icon: '🌿', name: 'Sauge & Palo Santo', price: 'à partir de 8 €', badge: null },
]

export default function Boutique() {
  useReveal()

  return (
    <>
      <style>{`
        #boutique-section {
          background: var(--noir-card);
          border-top: 1px solid rgba(201,168,76,0.06);
        }
        .shop-intro {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.2rem;
          font-style: italic;
          color: var(--creme-dim);
          text-align: center;
          max-width: 550px;
          margin: 0 auto 3.5rem;
        }
        .shop-categories {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 1.5px;
          background: rgba(201,168,76,0.06);
        }
        .shop-cat {
          background: var(--noir);
          padding: 2rem 1.5rem;
          text-align: center;
          transition: background 0.3s ease, transform 0.2s ease;
          cursor: none;
          position: relative;
          overflow: hidden;
        }
        .shop-cat::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(201,168,76,0.04), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .shop-cat:hover { background: rgba(201,168,76,0.03); }
        .shop-cat:hover::before { opacity: 1; }
        .shop-cat:hover .shop-cat-icon { transform: scale(1.1) rotate(5deg); }
        .shop-cat-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
          display: block;
          transition: transform 0.3s ease;
        }
        .shop-cat-name {
          font-family: 'Cinzel', serif;
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--creme);
          margin-bottom: 0.5rem;
        }
        .shop-cat-price {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.4rem;
          color: var(--or);
        }
        .shop-cat-badge {
          position: absolute;
          top: 0.75rem; right: 0.75rem;
          font-family: 'Cinzel', serif;
          font-size: 0.45rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--bordeaux-light);
          border: 1px solid rgba(107,26,42,0.4);
          padding: 0.2rem 0.5rem;
        }
        .shop-cta-block {
          text-align: center;
          margin-top: 3rem;
        }
        .shop-note {
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.95rem;
          font-style: italic;
          color: var(--creme-dim);
          margin-top: 1rem;
        }
        .shop-info-block {
          margin-top: 5rem;
          padding-top: 4rem;
          border-top: 1px solid rgba(201,168,76,0.08);
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 2rem;
          text-align: center;
        }
        .shop-info-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
        }
        .shop-info-icon {
          font-size: 1.5rem;
          color: var(--or);
          opacity: 0.7;
        }
        .shop-info-title {
          font-family: 'Cinzel', serif;
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--creme);
        }
        .shop-info-desc {
          font-size: 0.78rem;
          color: var(--creme-dim);
          line-height: 1.6;
        }
      `}</style>

      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="page-hero-content">
          <p className="label" style={{ marginBottom: '1rem' }}>Luxury Spiritual</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(2.8rem, 7vw, 6rem)', color: 'var(--creme)', marginBottom: '1rem' }}>
            Boutique<br /><em style={{ color: 'var(--or)' }}>by Alexandre Delovane</em>
          </h1>
          <p className="page-hero-sub">Pierres naturelles · Pendules · Parfums spirituels · Oracle</p>
        </div>
      </div>

      {/* BOUTIQUE */}
      <section id="boutique-section">
        <div className="container">
          <p className="shop-intro reveal">Bracelets de pierres naturelles, pendules divinatoires et parfums spirituels. Chaque pièce sélectionnée pour son énergie et sa qualité.</p>

          <div className="shop-categories">
            {categories.map((cat, i) => (
              <div key={cat.name} className={`shop-cat reveal reveal-delay-${(i % 6) + 1}`}>
                {cat.badge && <span className="shop-cat-badge">{cat.badge}</span>}
                <span className="shop-cat-icon">{cat.icon}</span>
                <div className="shop-cat-name">{cat.name}</div>
                <div className="shop-cat-price">{cat.price}</div>
              </div>
            ))}
          </div>

          <div className="shop-cta-block reveal">
            <a href="#" className="btn-primary" style={{ marginTop: '3rem' }}>Voir toute la boutique</a>
            <p className="shop-note">Livraison en France métropolitaine · Paiement sécurisé PayPal & Stripe</p>
          </div>

          <div className="shop-info-block">
            <div className="shop-info-item reveal reveal-delay-1">
              <span className="shop-info-icon">🔒</span>
              <div className="shop-info-title">Paiement Sécurisé</div>
              <p className="shop-info-desc">Transactions sécurisées via PayPal & Stripe. Vos données sont protégées.</p>
            </div>
            <div className="shop-info-item reveal reveal-delay-2">
              <span className="shop-info-icon">📦</span>
              <div className="shop-info-title">Livraison France</div>
              <p className="shop-info-desc">Expédition soignée en France métropolitaine. Chaque commande emballée avec soin.</p>
            </div>
            <div className="shop-info-item reveal reveal-delay-3">
              <span className="shop-info-icon">✦</span>
              <div className="shop-info-title">Sélection Énergétique</div>
              <p className="shop-info-desc">Chaque pièce est sélectionnée et chargée énergétiquement par Alexandre Delovane.</p>
            </div>
            <div className="shop-info-item reveal reveal-delay-4">
              <span className="shop-info-icon">🎁</span>
              <div className="shop-info-title">Emballage Prestige</div>
              <p className="shop-info-desc">Présentation luxueuse, idéale pour offrir. Packaging noir et or signé Delovane.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
