import { useState } from 'react'
import useReveal from '../hooks/useReveal'
import { categories, products, formatPrice } from '../data/products'
import { useCart } from '../context/CartContext'

export default function Boutique() {
  useReveal()
  const { addItem } = useCart()
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory)

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
          max-width: 600px;
          margin: 0 auto 2.5rem;
        }

        /* Filtres catégories */
        .shop-filters {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 3.5rem;
        }
        .shop-filter {
          background: transparent;
          border: 1px solid rgba(201,168,76,0.15);
          color: var(--creme-dim);
          font-family: 'Cinzel', serif;
          font-size: 0.55rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 0.6rem 1.1rem;
          cursor: none;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }
        .shop-filter:hover {
          border-color: rgba(201,168,76,0.5);
          color: var(--or);
        }
        .shop-filter.active {
          background: var(--or-pale);
          border-color: var(--or);
          color: var(--or);
        }
        .shop-filter-icon { font-size: 0.9rem; }

        /* Grille produits */
        .shop-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 1.5rem;
        }
        .product-card {
          background: var(--noir);
          border: 1px solid rgba(201,168,76,0.08);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          transition: border-color 0.3s ease, transform 0.3s ease, background 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .product-card:hover {
          border-color: rgba(201,168,76,0.3);
          transform: translateY(-4px);
          background: rgba(20,20,20,1);
        }
        .product-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--or), transparent);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }
        .product-card:hover::before { transform: scaleX(1); }
        .product-card.unavailable { opacity: 0.55; }

        .product-image {
          font-size: 3rem;
          text-align: center;
          padding: 1.5rem 0;
          background: linear-gradient(135deg, rgba(201,168,76,0.04), transparent);
          border: 1px solid rgba(201,168,76,0.05);
        }
        .product-badge {
          position: absolute;
          top: 0.75rem; right: 0.75rem;
          font-family: 'Cinzel', serif;
          font-size: 0.45rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--bordeaux-light);
          border: 1px solid rgba(107,26,42,0.4);
          padding: 0.2rem 0.5rem;
          background: rgba(10,10,10,0.7);
          z-index: 2;
        }
        .product-stock-badge {
          position: absolute;
          top: 0.75rem; left: 0.75rem;
          font-family: 'Cinzel', serif;
          font-size: 0.45rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--creme-dim);
          background: rgba(0,0,0,0.85);
          padding: 0.25rem 0.55rem;
          z-index: 2;
        }
        .product-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.25rem;
          color: var(--creme);
          line-height: 1.2;
        }
        .product-short {
          font-family: 'Cinzel', serif;
          font-size: 0.55rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--or);
          opacity: 0.85;
        }
        .product-desc {
          font-size: 0.8rem;
          color: var(--creme-dim);
          line-height: 1.6;
          flex: 1;
        }
        .product-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 0.5rem;
          padding-top: 0.75rem;
          border-top: 1px solid rgba(201,168,76,0.08);
        }
        .product-price {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          color: var(--or);
        }
        .product-add {
          font-family: 'Cinzel', serif;
          font-size: 0.55rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--or);
          background: transparent;
          border: 1px solid rgba(201,168,76,0.4);
          padding: 0.55rem 1rem;
          cursor: none;
          transition: all 0.25s ease;
        }
        .product-add:hover:not(:disabled) {
          background: var(--or);
          color: var(--noir);
        }
        .product-add:disabled {
          cursor: not-allowed;
          opacity: 0.4;
        }
        .product-contact {
          font-family: 'Cinzel', serif;
          font-size: 0.55rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--bordeaux-light);
          text-decoration: none;
          border: 1px solid rgba(107,26,42,0.4);
          padding: 0.55rem 1rem;
          transition: all 0.25s ease;
        }
        .product-contact:hover {
          background: rgba(107,26,42,0.2);
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

        .empty-state {
          text-align: center;
          padding: 4rem 1rem;
          color: var(--creme-dim);
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 1.1rem;
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
          <p className="shop-intro reveal">
            Bracelets de pierres naturelles, pendules divinatoires et parfums spirituels.
            Chaque pièce est sélectionnée et chargée énergétiquement par Alexandre Delovane.
          </p>

          {/* Filtres */}
          <div className="shop-filters reveal">
            <button
              className={`shop-filter${activeCategory === 'all' ? ' active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              Tout voir
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`shop-filter${activeCategory === cat.id ? ' active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span className="shop-filter-icon">{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>

          {/* Grille produits */}
          {filtered.length === 0 ? (
            <div className="empty-state">Aucun produit dans cette catégorie pour le moment.</div>
          ) : (
            <div className="shop-grid">
              {filtered.map((product, i) => {
                const isQuoteOnly = product.price === null
                const canBuy = product.inStock && !!product.stripePriceId
                return (
                  <div
                    key={product.id}
                    className={`product-card reveal reveal-delay-${(i % 6) + 1}${!product.inStock ? ' unavailable' : ''}`}
                  >
                    {product.badge && <span className="product-badge">{product.badge}</span>}
                    {!product.inStock && <span className="product-stock-badge">Épuisé</span>}

                    <div className="product-image">{product.image}</div>
                    <div className="product-short">{product.short}</div>
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-desc">{product.description}</p>

                    <div className="product-footer">
                      <span className="product-price">{formatPrice(product.price)}</span>

                      {isQuoteOnly ? (
                        <a href="/contact" className="product-contact">Devis</a>
                      ) : !product.inStock ? (
                        <button className="product-add" disabled>Épuisé</button>
                      ) : !product.stripePriceId ? (
                        <button className="product-add" disabled title="Bientôt disponible">Bientôt</button>
                      ) : (
                        <button className="product-add" onClick={() => addItem(product.id, 1)}>
                          + Panier
                        </button>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          <div className="shop-info-block">
            <div className="shop-info-item reveal reveal-delay-1">
              <span className="shop-info-icon">🔒</span>
              <div className="shop-info-title">Paiement Sécurisé</div>
              <p className="shop-info-desc">Transactions sécurisées via Stripe. Vos données sont chiffrées et protégées.</p>
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
