import useReveal from '../hooks/useReveal'
import CalendlyEmbed from '../components/CalendlyEmbed'
import { calendlyUrls } from '../data/calendly'

export default function Services() {
  useReveal()

  return (
    <>
      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5px;
          background: rgba(201,168,76,0.08);
          border: 1px solid rgba(201,168,76,0.08);
        }
        @media (max-width: 600px) {
          .services-grid { grid-template-columns: 1fr; }
        }
        .service-card {
          background: var(--noir-card);
          padding: 2rem;
          position: relative;
          overflow: hidden;
          transition: background 0.3s ease;
          cursor: none;
          display: flex;
          flex-direction: column;
        }
        .service-card::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--or), transparent);
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.4s ease;
        }
        .service-card:hover { background: rgba(201,168,76,0.04); }
        .service-card:hover::after { transform: scaleX(1); }
        .service-card.sos {
          grid-column: 1 / -1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          background: linear-gradient(135deg, rgba(107,26,42,0.25) 0%, var(--noir-card) 60%);
          border-left: 2px solid var(--bordeaux);
        }
        @media (max-width: 600px) {
          .service-card.sos { flex-direction: column; text-align: center; }
        }
        .service-number {
          position: absolute;
          top: 1rem; right: 1.5rem;
          font-family: 'Cormorant Garamond', serif;
          font-size: 3.5rem;
          font-weight: 300;
          color: rgba(201,168,76,0.06);
          line-height: 1;
          pointer-events: none;
        }
        .service-type { margin-bottom: 0.75rem; }
        .service-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          color: var(--creme);
          margin-bottom: 0.5rem;
          line-height: 1.2;
        }
        .service-desc {
          font-size: 0.82rem;
          color: var(--creme-dim);
          margin-bottom: 1.5rem;
          line-height: 1.7;
        }
        .service-meta {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          margin-bottom: 1.25rem;
        }
        .service-price {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          font-weight: 300;
          color: var(--or);
          line-height: 1;
        }
        .service-price small {
          font-size: 0.85rem;
          font-family: 'Inter', sans-serif;
          color: var(--creme-dim);
        }
        .service-duration {
          font-family: 'Cinzel', serif;
          font-size: 0.55rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--creme-dim);
        }
        .service-cta {
          display: inline-block;
          font-family: 'Cinzel', serif;
          font-size: 0.55rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--or);
          border: 1px solid rgba(201,168,76,0.3);
          padding: 0.7rem 1.4rem;
          text-decoration: none;
          transition: background 0.3s ease, color 0.3s ease;
          cursor: none;
          white-space: nowrap;
          margin-top: auto;
          align-self: flex-start;
          background: transparent;
        }
        .service-cta:hover { background: var(--or); color: var(--noir); }
        .service-cta.urgent {
          color: var(--bordeaux-light);
          border-color: rgba(107,26,42,0.6);
          font-size: 0.65rem;
          padding: 0.8rem 2rem;
          background: rgba(107,26,42,0.15);
        }
        .service-cta.urgent:hover { background: var(--bordeaux); color: var(--creme); }
        .service-card.gold-highlight {
          background: linear-gradient(145deg, rgba(201,168,76,0.05), var(--noir-card));
        }
        .service-card.paris-border {
          border-left: 2px solid rgba(201,168,76,0.2);
        }
        .booking-info {
          margin-top: 4rem;
          padding: 2.5rem;
          background: var(--noir-card);
          border: 1px solid rgba(201,168,76,0.12);
          text-align: center;
        }
        .booking-info-title {
          font-family: 'Cinzel', serif;
          font-size: 0.65rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--or);
          margin-bottom: 1rem;
        }
        .booking-info-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.1rem;
          font-style: italic;
          color: var(--creme-dim);
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }
      `}</style>

      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="page-hero-content">
          <p className="label" style={{ marginBottom: '1rem' }}>Prestations & Tarifs</p>
          <h1 className="page-hero-title" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(2.8rem, 7vw, 6rem)', color: 'var(--creme)', marginBottom: '1rem' }}>
            Consultations &<br /><em style={{ color: 'var(--or)' }}>Accompagnement</em>
          </h1>
          <p className="page-hero-sub">Accompagnement personnalisé · 20 ans d'expertise · En ligne et en présentiel</p>
        </div>
      </div>

      {/* SERVICES SECTION */}
      <section style={{ background: 'var(--noir)' }}>
        <div className="container">
          <div className="services-grid">

            {/* SOS */}
            <div className="service-card sos reveal">
              <div>
                <p className="label" style={{ color: 'var(--bordeaux-light)', marginBottom: '0.5rem' }}>Urgence</p>
                <div className="service-name" style={{ fontSize: '1.8rem' }}>S.O.S — C'est Urgent ?</div>
                <p className="service-desc">Je vous rappelle dans la journée. Pour les situations qui ne peuvent pas attendre.</p>
                <div className="service-meta">
                  <span className="service-price">45<small>€</small></span>
                  <span className="service-duration">10 minutes</span>
                </div>
              </div>
              <CalendlyEmbed url={calendlyUrls.sos} className="service-cta urgent">
                Appel Urgent →
              </CalendlyEmbed>
            </div>

            {/* 01 */}
            <div className="service-card reveal reveal-delay-1">
              <div className="service-number">01</div>
              <p className="label service-type">Consultation Tel</p>
              <div className="service-name">Consultation<br />1 Domaine</div>
              <p className="service-desc">Un besoin d'une réponse précise sur un sujet bien défini.</p>
              <div className="service-meta">
                <span className="service-price">35<small>€</small></span>
                <span className="service-duration">10 min</span>
              </div>
              <CalendlyEmbed url={calendlyUrls.consult1Domaine}>Réserver →</CalendlyEmbed>
            </div>

            {/* 02 */}
            <div className="service-card reveal reveal-delay-2">
              <div className="service-number">02</div>
              <p className="label service-type">Consultation Tel</p>
              <div className="service-name">Consultation<br /><em style={{ color: 'var(--or)' }}>"Flash"</em></div>
              <p className="service-desc">Pour voir plus clair sur des sujets bien définis, rapidement.</p>
              <div className="service-meta">
                <span className="service-price">70<small>€</small></span>
                <span className="service-duration">20 min</span>
              </div>
              <CalendlyEmbed url={calendlyUrls.consultFlash}>Réserver →</CalendlyEmbed>
            </div>

            {/* 03 */}
            <div className="service-card reveal reveal-delay-3">
              <div className="service-number">03</div>
              <p className="label service-type">Consultation Tel</p>
              <div className="service-name">Mini-Consultation</div>
              <p className="service-desc">Un moment de clarté sur vos sujets essentiels.</p>
              <div className="service-meta">
                <span className="service-price">55<small>€</small></span>
                <span className="service-duration">15 min</span>
              </div>
              <CalendlyEmbed url={calendlyUrls.miniConsult}>Réserver →</CalendlyEmbed>
            </div>

            {/* 04 */}
            <div className="service-card paris-border reveal reveal-delay-1">
              <div className="service-number">04</div>
              <p className="label service-type">Présentiel</p>
              <div className="service-name">Consultation<br />à Paris</div>
              <p className="service-desc">Offrez-vous ce moment à vous. En face à face dans la capitale.</p>
              <div className="service-meta">
                <span className="service-price"><small style={{ fontSize: '0.9rem' }}>à partir de </small>120<small>€</small></span>
                <span className="service-duration">30 min – 1h</span>
              </div>
              <CalendlyEmbed url={calendlyUrls.consultParis}>Réserver →</CalendlyEmbed>
            </div>

            {/* 05 */}
            <div className="service-card reveal reveal-delay-2">
              <div className="service-number">05</div>
              <p className="label service-type">Présentiel</p>
              <div className="service-name">Consultation<br />en Région</div>
              <p className="service-desc">Bordeaux, Toulouse, Biarritz, Montpellier, Nice, Cannes.</p>
              <div className="service-meta">
                <span className="service-price"><small style={{ fontSize: '0.9rem' }}>à partir de </small>110<small>€</small></span>
                <span className="service-duration">30–45 min</span>
              </div>
              <CalendlyEmbed url={calendlyUrls.consultRegion}>Réserver →</CalendlyEmbed>
            </div>

            {/* 06 */}
            <div className="service-card reveal reveal-delay-3">
              <div className="service-number">06</div>
              <p className="label service-type">Coaching · En ligne</p>
              <div className="service-name">Coaching</div>
              <p className="service-desc">Un accompagnement sur mesure pour avancer vers vos objectifs.</p>
              <div className="service-meta">
                <span className="service-price">70<small>€</small></span>
                <span className="service-duration">40 min</span>
              </div>
              <CalendlyEmbed url={calendlyUrls.coaching}>Réserver →</CalendlyEmbed>
            </div>

            {/* 07 */}
            <div className="service-card reveal reveal-delay-4">
              <div className="service-number">07</div>
              <p className="label service-type">Coaching</p>
              <div className="service-name">Coaching<br />de Couple</div>
              <p className="service-desc">Vous rencontrez des difficultés dans votre couple ? Une heure pour tout remettre à plat.</p>
              <div className="service-meta">
                <span className="service-price">170<small>€</small></span>
                <span className="service-duration">1 heure</span>
              </div>
              <CalendlyEmbed url={calendlyUrls.coachingCouple}>Réserver →</CalendlyEmbed>
            </div>

            {/* 08 */}
            <div className="service-card reveal reveal-delay-2">
              <div className="service-number">08</div>
              <p className="label service-type">Mémoire des Lieux</p>
              <div className="service-name">Nettoyage<br />Énergétique Habitat</div>
              <p className="service-desc">Votre maison est bloquée ? Vous ne vous y sentez plus bien. Une intervention complète.</p>
              <div className="service-meta">
                <span className="service-price">300<small>€</small></span>
                <span className="service-duration">1 heure</span>
              </div>
              <CalendlyEmbed url={calendlyUrls.nettoyageHabitat}>Réserver →</CalendlyEmbed>
            </div>

            {/* 09 */}
            <div className="service-card gold-highlight reveal reveal-delay-3">
              <div className="service-number">09</div>
              <p className="label service-type">Atelier Présentiel</p>
              <div className="service-name">MON Projet De VIE<br /><em style={{ color: 'var(--or)', fontSize: '1.1rem' }}>by l'Oracle</em></div>
              <p className="service-desc">Un atelier immersif de 2 heures pour définir et incarner votre mission de vie avec le jeu de l'Oracle Intuitif.</p>
              <div className="service-meta">
                <span className="service-price">90<small>€ / pers.</small></span>
                <span className="service-duration">2 heures</span>
              </div>
              <CalendlyEmbed url={calendlyUrls.atelierProjet}>Réserver →</CalendlyEmbed>
            </div>

          </div>

          <div className="booking-info reveal">
            <div className="booking-info-title">Réservation en ligne</div>
            <p className="booking-info-text">
              Toutes les réservations se font directement depuis cette page. Le paiement
              est sécurisé par Stripe et la confirmation est envoyée par e-mail dès la
              réservation validée.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
