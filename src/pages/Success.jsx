import { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Success() {
  const [searchParams] = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const { clear } = useCart()

  // Vide le panier après un paiement réussi
  useEffect(() => {
    clear()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <style>{`
        .success-wrap {
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8rem 2rem 5rem;
          background: linear-gradient(180deg, var(--noir-soft) 0%, var(--noir) 100%);
          position: relative;
        }
        .success-wrap::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, rgba(201,168,76,0.1) 0%, transparent 60%);
          pointer-events: none;
        }
        .success-card {
          max-width: 560px;
          width: 100%;
          text-align: center;
          padding: 3rem 2.5rem;
          background: var(--noir-card);
          border: 1px solid rgba(201,168,76,0.2);
          position: relative;
          z-index: 1;
        }
        .success-icon {
          font-size: 3.5rem;
          color: var(--or);
          margin-bottom: 1.5rem;
        }
        .success-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.2rem;
          color: var(--creme);
          margin-bottom: 0.75rem;
        }
        .success-sub {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.1rem;
          font-style: italic;
          color: var(--creme-dim);
          margin-bottom: 2rem;
        }
        .success-text {
          font-size: 0.9rem;
          color: var(--creme-dim);
          line-height: 1.7;
          margin-bottom: 2rem;
        }
        .success-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        .success-session {
          margin-top: 1.5rem;
          font-size: 0.7rem;
          color: rgba(200,188,168,0.4);
          font-family: 'Cinzel', serif;
          letter-spacing: 0.1em;
          word-break: break-all;
        }
      `}</style>

      <div className="success-wrap">
        <div className="success-card">
          <div className="success-icon">✦</div>
          <h1 className="success-title">Commande confirmée</h1>
          <p className="success-sub">Merci pour votre confiance.</p>
          <p className="success-text">
            Votre paiement a bien été reçu. Vous allez recevoir un e-mail de confirmation
            de Stripe avec le récapitulatif de votre commande. Alexandre Delovane et son équipe
            préparent votre commande avec soin et énergie.
          </p>
          <div className="success-actions">
            <Link to="/boutique" className="btn-outline">Retour à la boutique</Link>
            <Link to="/" className="btn-primary">Retour à l'accueil</Link>
          </div>
          {sessionId && (
            <p className="success-session">Référence : {sessionId}</p>
          )}
        </div>
      </div>
    </>
  )
}
