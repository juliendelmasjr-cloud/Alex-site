import { Link } from 'react-router-dom'

export default function Cancel() {
  return (
    <>
      <style>{`
        .cancel-wrap {
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8rem 2rem 5rem;
          background: linear-gradient(180deg, var(--noir-soft) 0%, var(--noir) 100%);
        }
        .cancel-card {
          max-width: 560px;
          width: 100%;
          text-align: center;
          padding: 3rem 2.5rem;
          background: var(--noir-card);
          border: 1px solid rgba(107,26,42,0.3);
          border-left: 3px solid var(--bordeaux);
        }
        .cancel-icon {
          font-size: 3rem;
          color: var(--bordeaux-light);
          margin-bottom: 1.5rem;
        }
        .cancel-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          color: var(--creme);
          margin-bottom: 0.75rem;
        }
        .cancel-text {
          font-size: 0.9rem;
          color: var(--creme-dim);
          line-height: 1.7;
          margin-bottom: 2rem;
        }
        .cancel-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
      `}</style>

      <div className="cancel-wrap">
        <div className="cancel-card">
          <div className="cancel-icon">◆</div>
          <h1 className="cancel-title">Paiement annulé</h1>
          <p className="cancel-text">
            Aucun montant n'a été débité. Votre panier est toujours disponible si
            vous souhaitez reprendre votre commande.
          </p>
          <div className="cancel-actions">
            <Link to="/contact" className="btn-outline">Nous contacter</Link>
            <Link to="/boutique" className="btn-primary">Retour à la boutique</Link>
          </div>
        </div>
      </div>
    </>
  )
}
