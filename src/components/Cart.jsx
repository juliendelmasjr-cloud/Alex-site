import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../data/products'

export default function Cart() {
  const { items, totalQty, totalPrice, open, closeCart, removeItem, setQuantity, clear } = useCart()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleCheckout = async () => {
    setError(null)
    if (items.length === 0) return
    // Vérifie que tous les items ont un Stripe Price ID
    const missing = items.filter(({ product }) => !product.stripePriceId)
    if (missing.length > 0) {
      setError(`Certains produits ne sont pas encore disponibles à la vente : ${missing.map(m => m.product.name).join(', ')}`)
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: items.map(({ product, quantity }) => ({
            priceId: product.stripePriceId,
            quantity,
          })),
        }),
      })
      if (!res.ok) {
        const text = await res.text()
        throw new Error(text || 'Erreur lors de la création de la session de paiement')
      }
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        throw new Error('URL de paiement manquante')
      }
    } catch (err) {
      console.error(err)
      setError(err.message || 'Une erreur est survenue. Réessayez ou contactez-nous.')
      setLoading(false)
    }
  }

  return (
    <>
      <style>{`
        .cart-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          z-index: 200;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
          backdrop-filter: blur(4px);
        }
        .cart-overlay.open {
          opacity: 1;
          pointer-events: all;
        }
        .cart-drawer {
          position: fixed;
          top: 0; right: 0; bottom: 0;
          width: 100%;
          max-width: 440px;
          background: var(--noir-card);
          border-left: 1px solid rgba(201,168,76,0.2);
          z-index: 201;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          box-shadow: -20px 0 60px rgba(0,0,0,0.5);
        }
        .cart-drawer.open { transform: translateX(0); }
        .cart-header {
          padding: 1.5rem 1.75rem;
          border-bottom: 1px solid rgba(201,168,76,0.12);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .cart-title {
          font-family: 'Cinzel', serif;
          font-size: 0.7rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--or);
        }
        .cart-close {
          background: none;
          border: none;
          color: var(--creme);
          font-size: 1.5rem;
          cursor: none;
          line-height: 1;
          opacity: 0.7;
          transition: opacity 0.2s ease;
        }
        .cart-close:hover { opacity: 1; }
        .cart-body {
          flex: 1;
          overflow-y: auto;
          padding: 1.5rem 1.75rem;
        }
        .cart-empty {
          text-align: center;
          padding: 3rem 1rem;
          color: var(--creme-dim);
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 1.1rem;
        }
        .cart-item {
          display: grid;
          grid-template-columns: 50px 1fr auto;
          gap: 1rem;
          padding: 1rem 0;
          border-bottom: 1px solid rgba(201,168,76,0.08);
          align-items: center;
        }
        .cart-item-icon {
          font-size: 1.8rem;
          text-align: center;
          line-height: 50px;
          background: var(--noir);
          border: 1px solid rgba(201,168,76,0.1);
          height: 50px;
          width: 50px;
        }
        .cart-item-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1rem;
          color: var(--creme);
          margin-bottom: 0.2rem;
          line-height: 1.2;
        }
        .cart-item-price {
          font-size: 0.78rem;
          color: var(--or);
          margin-bottom: 0.5rem;
        }
        .cart-qty {
          display: inline-flex;
          align-items: center;
          gap: 0;
          border: 1px solid rgba(201,168,76,0.2);
        }
        .cart-qty button {
          background: none;
          border: none;
          color: var(--creme);
          width: 24px;
          height: 24px;
          font-size: 0.85rem;
          cursor: none;
          line-height: 1;
        }
        .cart-qty button:hover { color: var(--or); }
        .cart-qty span {
          padding: 0 0.5rem;
          font-size: 0.78rem;
          color: var(--creme);
          min-width: 20px;
          text-align: center;
        }
        .cart-item-remove {
          background: none;
          border: none;
          color: var(--creme-dim);
          cursor: none;
          font-size: 0.7rem;
          opacity: 0.5;
          align-self: start;
          margin-top: 0.4rem;
          transition: color 0.2s ease, opacity 0.2s ease;
        }
        .cart-item-remove:hover { color: var(--bordeaux-light); opacity: 1; }
        .cart-footer {
          padding: 1.5rem 1.75rem 2rem;
          border-top: 1px solid rgba(201,168,76,0.15);
          background: var(--noir);
        }
        .cart-total-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 1.25rem;
        }
        .cart-total-label {
          font-family: 'Cinzel', serif;
          font-size: 0.6rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--creme-dim);
        }
        .cart-total-amount {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem;
          color: var(--or);
        }
        .cart-checkout {
          width: 100%;
          font-family: 'Cinzel', serif;
          font-size: 0.65rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--noir);
          background: var(--or);
          padding: 1rem 1.5rem;
          border: none;
          cursor: none;
          transition: background 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease;
        }
        .cart-checkout:hover:not(:disabled) {
          background: var(--or-light);
          box-shadow: 0 0 30px rgba(201,168,76,0.4);
          transform: translateY(-2px);
        }
        .cart-checkout:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .cart-clear {
          background: none;
          border: none;
          color: var(--creme-dim);
          font-family: 'Cinzel', serif;
          font-size: 0.55rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          cursor: none;
          margin-top: 0.75rem;
          width: 100%;
          opacity: 0.5;
          transition: opacity 0.2s ease;
        }
        .cart-clear:hover { opacity: 1; }
        .cart-error {
          background: rgba(107,26,42,0.2);
          border-left: 2px solid var(--bordeaux);
          padding: 0.75rem 1rem;
          margin-bottom: 1rem;
          font-size: 0.78rem;
          color: var(--creme);
        }
        .cart-info {
          padding: 1rem;
          background: var(--noir-card);
          border-left: 2px solid var(--or);
          font-size: 0.75rem;
          color: var(--creme-dim);
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          margin-top: 1rem;
        }
      `}</style>

      <div className={`cart-overlay${open ? ' open' : ''}`} onClick={closeCart} />

      <aside className={`cart-drawer${open ? ' open' : ''}`} aria-hidden={!open}>
        <header className="cart-header">
          <span className="cart-title">Panier ({totalQty})</span>
          <button className="cart-close" onClick={closeCart} aria-label="Fermer le panier">×</button>
        </header>

        <div className="cart-body">
          {items.length === 0 ? (
            <div className="cart-empty">
              Votre panier est vide.<br />
              <span style={{ fontSize: '0.8rem', display: 'block', marginTop: '0.5rem' }}>
                Découvrez la boutique pour y ajouter des pièces.
              </span>
            </div>
          ) : (
            items.map(({ productId, product, quantity, subtotal }) => (
              <div key={productId} className="cart-item">
                <div className="cart-item-icon">{product.image}</div>
                <div>
                  <div className="cart-item-name">{product.name}</div>
                  <div className="cart-item-price">{formatPrice(subtotal)}</div>
                  <div className="cart-qty">
                    <button onClick={() => setQuantity(productId, quantity - 1)} aria-label="Diminuer">−</button>
                    <span>{quantity}</span>
                    <button onClick={() => setQuantity(productId, quantity + 1)} aria-label="Augmenter">+</button>
                  </div>
                </div>
                <button className="cart-item-remove" onClick={() => removeItem(productId)} aria-label="Retirer">retirer</button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <footer className="cart-footer">
            {error && <div className="cart-error">{error}</div>}
            <div className="cart-total-row">
              <span className="cart-total-label">Total</span>
              <span className="cart-total-amount">{formatPrice(totalPrice)}</span>
            </div>
            <button className="cart-checkout" onClick={handleCheckout} disabled={loading}>
              {loading ? 'Redirection…' : 'Procéder au paiement →'}
            </button>
            <button className="cart-clear" onClick={clear}>Vider le panier</button>
            <p className="cart-info">Frais de port calculés à l'étape suivante. Paiement sécurisé Stripe.</p>
          </footer>
        )}
      </aside>
    </>
  )
}
