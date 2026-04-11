import { useState } from 'react'
import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'

export default function Contact() {
  useReveal()
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <style>{`
        #contact-section {
          background: var(--noir);
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 5rem;
          align-items: start;
        }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr; gap: 3rem; }
        }

        /* Info block */
        .contact-info-block {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .contact-info-card {
          background: var(--noir-card);
          border: 1px solid rgba(201,168,76,0.1);
          padding: 1.75rem;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s ease;
        }
        .contact-info-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--or), transparent);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }
        .contact-info-card:hover { border-color: rgba(201,168,76,0.25); }
        .contact-info-card:hover::before { transform: scaleX(1); }
        .contact-info-label {
          font-family: 'Cinzel', serif;
          font-size: 0.55rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--or);
          margin-bottom: 0.75rem;
        }
        .contact-info-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.2rem;
          color: var(--creme);
          margin-bottom: 0.5rem;
        }
        .contact-info-text {
          font-size: 0.82rem;
          color: var(--creme-dim);
          line-height: 1.7;
        }

        .contact-radio-block {
          background: linear-gradient(135deg, rgba(107,26,42,0.2), var(--noir-card));
          border: 1px solid rgba(107,26,42,0.4);
          border-left: 3px solid var(--bordeaux);
          padding: 1.75rem;
        }
        .contact-radio-dot {
          width: 8px; height: 8px;
          background: var(--bordeaux-light);
          border-radius: 50%;
          animation: pulse 2s ease infinite;
          display: inline-block;
          margin-right: 0.5rem;
        }
        .contact-radio-title {
          font-family: 'Cinzel', serif;
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--bordeaux-light);
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
        }
        .contact-radio-show {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.2rem;
          color: var(--creme);
          margin-bottom: 0.4rem;
        }
        .contact-radio-detail {
          font-size: 0.78rem;
          color: var(--creme-dim);
        }

        /* Form */
        .contact-form-wrapper {
          background: var(--noir-card);
          border: 1px solid rgba(201,168,76,0.1);
          padding: 3rem;
        }
        .contact-form-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem;
          color: var(--creme);
          margin-bottom: 0.5rem;
        }
        .contact-form-sub {
          font-size: 0.82rem;
          color: var(--creme-dim);
          margin-bottom: 2rem;
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        .form-label {
          display: block;
          font-family: 'Cinzel', serif;
          font-size: 0.55rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--or);
          margin-bottom: 0.5rem;
        }
        .form-input,
        .form-textarea {
          width: 100%;
          background: var(--noir);
          border: 1px solid rgba(201,168,76,0.15);
          color: var(--creme);
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          font-weight: 300;
          padding: 0.9rem 1rem;
          outline: none;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          cursor: none;
        }
        .form-input:focus,
        .form-textarea:focus {
          border-color: rgba(201,168,76,0.4);
          box-shadow: 0 0 20px rgba(201,168,76,0.06);
        }
        .form-input::placeholder,
        .form-textarea::placeholder {
          color: rgba(200,188,168,0.3);
        }
        .form-textarea {
          resize: vertical;
          min-height: 140px;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr; }
          .contact-form-wrapper { padding: 1.5rem; }
        }
        .form-submit {
          width: 100%;
          margin-top: 0.5rem;
          font-family: 'Cinzel', serif;
          font-size: 0.65rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--noir);
          background: var(--or);
          padding: 1rem 2.5rem;
          border: none;
          cursor: none;
          transition: background 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease;
        }
        .form-submit:hover {
          background: var(--or-light);
          box-shadow: 0 0 30px rgba(201,168,76,0.4);
          transform: translateY(-2px);
        }
        .form-success {
          text-align: center;
          padding: 3rem 2rem;
        }
        .form-success-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          display: block;
        }
        .form-success-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem;
          color: var(--creme);
          margin-bottom: 0.75rem;
        }
        .form-success-text {
          font-size: 0.85rem;
          color: var(--creme-dim);
        }
        .booking-note {
          margin-top: 4rem;
          padding: 2.5rem;
          background: var(--noir-card);
          border: 1px solid rgba(201,168,76,0.12);
          text-align: center;
        }
        .booking-note-title {
          font-family: 'Cinzel', serif;
          font-size: 0.65rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--or);
          margin-bottom: 1rem;
        }
        .booking-note-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.15rem;
          font-style: italic;
          color: var(--creme-dim);
          margin-bottom: 1.5rem;
        }
      `}</style>

      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="page-hero-content">
          <p className="label" style={{ marginBottom: '1rem' }}>Prendre Contact</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(2.8rem, 7vw, 6rem)', color: 'var(--creme)', marginBottom: '1rem' }}>
            Contact &<br /><em style={{ color: 'var(--or)' }}>Réservation</em>
          </h1>
          <p className="page-hero-sub">Pour toute question, demande d'information ou réservation</p>
        </div>
      </div>

      {/* CONTACT */}
      <section id="contact-section">
        <div className="container">
          <div className="contact-grid">

            {/* INFOS */}
            <div className="contact-info-block">
              <div className="contact-info-card reveal">
                <div className="contact-info-label">Adresse</div>
                <div className="contact-info-title">CI-AD SARL</div>
                <p className="contact-info-text">
                  195 Chemin de La Grave<br />
                  33240 Saint André de Cubzac<br />
                  France
                </p>
              </div>

              <div className="contact-info-card reveal reveal-delay-1">
                <div className="contact-info-label">Réservations</div>
                <div className="contact-info-title">Consultations & Ateliers</div>
                <p className="contact-info-text">
                  La réservation se fait en ligne via la page Services. Choisissez votre consultation et sélectionnez votre créneau directement depuis le formulaire de la page dédiée.
                </p>
              </div>

              <div className="contact-info-card reveal reveal-delay-2">
                <div className="contact-info-label">Informations Légales</div>
                <div className="contact-info-title">Société</div>
                <p className="contact-info-text">
                  RCS Paris 508 290 640<br />
                  TVA FR 19 508 290 640<br />
                  Code APE : 9609Z
                </p>
              </div>

              <div className="contact-radio-block reveal reveal-delay-3">
                <div className="contact-radio-title">
                  <span className="contact-radio-dot"></span>
                  En antenne
                </div>
                <div className="contact-radio-show">"C'est Votre Avenir" — Sud Radio</div>
                <p className="contact-radio-detail">Du mercredi au vendredi · 16h–17h en direct</p>
              </div>
            </div>

            {/* FORMULAIRE */}
            <div className="contact-form-wrapper reveal reveal-delay-2">
              {submitted ? (
                <div className="form-success">
                  <span className="form-success-icon">✦</span>
                  <div className="form-success-title">Message envoyé</div>
                  <p className="form-success-text">Merci pour votre message. Alexandre Delovane vous répondra dans les plus brefs délais.</p>
                </div>
              ) : (
                <>
                  <div className="contact-form-title">Écrivez-nous</div>
                  <p className="contact-form-sub">Pour toute question, partenariat ou demande de renseignement. Pour une réservation directe, rendez-vous sur la page Services.</p>
                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="name">Nom complet</label>
                        <input
                          className="form-input"
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Votre nom"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="email">Adresse e-mail</label>
                        <input
                          className="form-input"
                          type="email"
                          id="email"
                          name="email"
                          placeholder="votre@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="subject">Sujet</label>
                      <input
                        className="form-input"
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Objet de votre message"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="message">Message</label>
                      <textarea
                        className="form-textarea"
                        id="message"
                        name="message"
                        placeholder="Votre message..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <button type="submit" className="form-submit">Envoyer le message →</button>
                  </form>
                </>
              )}
            </div>

          </div>

          {/* BOOKING NOTE */}
          <div className="booking-note reveal">
            <div className="booking-note-title">Réservation en ligne</div>
            <p className="booking-note-text">Pour réserver une consultation ou un atelier, rendez-vous directement sur la page Services où vous trouverez tous les tarifs et la disponibilité.</p>
            <Link to="/services" className="btn-primary">Voir les services & réserver</Link>
          </div>

        </div>
      </section>
    </>
  )
}
