import useReveal from '../hooks/useReveal'

const tvAppearances = [
  { channel: 'France 2', detail: 'Émission nationale — reportage développement personnel' },
  { channel: 'C8 TPMP', detail: 'Touche Pas à Mon Poste — invité plateau' },
  { channel: 'TV Suisse', detail: 'Émission spéciale intuition & médiumité' },
  { channel: 'Direct 8', detail: 'Émission spiritualité & développement personnel' },
  { channel: 'BFM TV', detail: 'Interview — expertise intuitive' },
]

const pressArticles = [
  { outlet: 'Le Parisien', detail: 'Portrait — Coach intuitif & médium' },
  { outlet: 'Nice Matin', detail: 'Rencontre avec Alexandre Delovane' },
  { outlet: 'La Provence', detail: 'Développement personnel : la voie de l\'intuition' },
  { outlet: '20ans', detail: 'Le guide spirituel des nouvelles générations' },
  { outlet: 'Top Santé', detail: 'Chromothérapie & bien-être' },
  { outlet: 'Femme Actuelle', detail: 'Consultations : l\'élan de la voyance moderne' },
]

const radioHistory = [
  { station: 'Sud Radio', detail: '"C\'est Votre Avenir" · Émission en direct · Mer-Ven 16h–17h · En cours', active: true },
  { station: 'Fun Radio', detail: 'Chronique intuition & développement personnel' },
  { station: 'Europe 1', detail: 'Invité spécial — spiritualité contemporaine' },
  { station: 'R.F.I', detail: 'Radio France Internationale — interview médiumité' },
  { station: 'France Bleu', detail: 'Émission locale — voyance & intuition' },
]

export default function Medias() {
  useReveal()

  return (
    <>
      <style>{`
        #medias-section {
          background: var(--noir);
        }
        .media-section-block {
          margin-bottom: 5rem;
        }
        .media-block-title {
          font-family: 'Cinzel', serif;
          font-size: 0.65rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--or);
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(201,168,76,0.15);
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .media-block-title::after {
          content: '';
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, rgba(201,168,76,0.15), transparent);
        }

        /* Sud Radio Feature */
        .sudradio-feature {
          background: linear-gradient(135deg, rgba(107,26,42,0.25) 0%, var(--noir-card) 60%);
          border: 1px solid rgba(107,26,42,0.4);
          border-left: 3px solid var(--bordeaux);
          padding: 2.5rem;
          margin-bottom: 4rem;
          display: flex;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .sudradio-dot {
          width: 10px; height: 10px;
          background: var(--bordeaux-light);
          border-radius: 50%;
          animation: pulse 2s ease infinite;
          flex-shrink: 0;
        }
        .sudradio-content { flex: 1; }
        .sudradio-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem;
          color: var(--creme);
          margin-bottom: 0.5rem;
        }
        .sudradio-detail {
          font-family: 'Cinzel', serif;
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--bordeaux-light);
          margin-bottom: 0.75rem;
        }
        .sudradio-desc {
          font-size: 0.85rem;
          color: var(--creme-dim);
          line-height: 1.7;
        }

        /* Media list items */
        .media-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1px;
          background: rgba(201,168,76,0.06);
        }
        .media-item {
          background: var(--noir-card);
          padding: 1.5rem;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          transition: background 0.3s ease;
          position: relative;
        }
        .media-item::after {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, var(--or), transparent);
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0.3s ease;
        }
        .media-item:hover { background: rgba(201,168,76,0.03); }
        .media-item:hover::after { transform: scaleY(1); }
        .media-item.active {
          background: linear-gradient(135deg, rgba(107,26,42,0.15), var(--noir-card));
        }
        .media-item.active::after {
          background: linear-gradient(to bottom, var(--bordeaux-light), transparent);
          transform: scaleY(1);
        }
        .media-outlet {
          font-family: 'Cinzel', serif;
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--or);
          min-width: 100px;
          flex-shrink: 0;
        }
        .media-outlet.active-outlet { color: var(--bordeaux-light); }
        .media-detail {
          font-size: 0.82rem;
          color: var(--creme-dim);
          line-height: 1.5;
        }

        /* Radio timeline */
        .radio-timeline {
          position: relative;
          padding-left: 2rem;
        }
        .radio-timeline::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 1px;
          background: linear-gradient(to bottom, var(--or), rgba(201,168,76,0.1));
        }
        .radio-entry {
          position: relative;
          padding: 1.25rem 1.5rem;
          margin-bottom: 0.5rem;
          background: var(--noir-card);
          border: 1px solid rgba(255,255,255,0.04);
          transition: border-color 0.3s ease;
        }
        .radio-entry::before {
          content: '';
          position: absolute;
          left: -2.5rem;
          top: 50%;
          transform: translateY(-50%);
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--or);
          opacity: 0.6;
        }
        .radio-entry.active-entry {
          border-color: rgba(107,26,42,0.4);
          background: linear-gradient(135deg, rgba(107,26,42,0.15), var(--noir-card));
        }
        .radio-entry.active-entry::before {
          background: var(--bordeaux-light);
          opacity: 1;
          animation: pulse 2s ease infinite;
        }
        .radio-station {
          font-family: 'Cinzel', serif;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--or);
          margin-bottom: 0.3rem;
        }
        .radio-station.active-station { color: var(--bordeaux-light); }
        .radio-detail {
          font-size: 0.82rem;
          color: var(--creme-dim);
        }

        /* YouTube */
        .youtube-block {
          margin-top: 4rem;
          padding: 3rem;
          background: var(--noir-card);
          border: 1px solid rgba(201,168,76,0.1);
          text-align: center;
        }
        .youtube-placeholder {
          width: 100%;
          max-width: 640px;
          aspect-ratio: 16/9;
          background: var(--noir-mid);
          border: 1px solid rgba(201,168,76,0.1);
          margin: 1.5rem auto 0;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 1rem;
        }
        .youtube-icon {
          font-size: 3rem;
          opacity: 0.4;
        }
        .youtube-text {
          font-family: 'Cinzel', serif;
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--creme-dim);
          opacity: 0.5;
        }
      `}</style>

      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="page-hero-content">
          <p className="label" style={{ marginBottom: '1rem' }}>Présence Médiatique</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(2.8rem, 7vw, 6rem)', color: 'var(--creme)', marginBottom: '1rem' }}>
            Médias<br /><em style={{ color: 'var(--or)' }}>& Presse</em>
          </h1>
          <p className="page-hero-sub">Télévision · Radio · Presse écrite · Web</p>
        </div>
      </div>

      {/* MEDIAS MAIN */}
      <section id="medias-section">
        <div className="container">

          {/* SUD RADIO FEATURED */}
          <div className="sudradio-feature reveal">
            <div className="sudradio-dot"></div>
            <div className="sudradio-content">
              <div className="sudradio-detail">En antenne actuellement · Mercredi au Vendredi 16h–17h</div>
              <div className="sudradio-title">"C'est Votre Avenir" — Sud Radio</div>
              <p className="sudradio-desc">Alexandre Delovane anime son émission quotidienne en direct sur Sud Radio. Consultations en direct, réponses aux auditeurs et partage de sa vision du développement personnel et de l'intuition.</p>
            </div>
          </div>

          {/* TÉLÉVISION */}
          <div className="media-section-block reveal">
            <div className="media-block-title">Télévision</div>
            <div className="media-list">
              {tvAppearances.map(({ channel, detail }) => (
                <div key={channel} className="media-item">
                  <span className="media-outlet">{channel}</span>
                  <span className="media-detail">{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* PRESSE */}
          <div className="media-section-block reveal reveal-delay-1">
            <div className="media-block-title">Presse & Web</div>
            <div className="media-list">
              {pressArticles.map(({ outlet, detail }) => (
                <div key={outlet} className="media-item">
                  <span className="media-outlet">{outlet}</span>
                  <span className="media-detail">{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RADIO */}
          <div className="media-section-block reveal reveal-delay-2">
            <div className="media-block-title">Parcours Radio</div>
            <div className="radio-timeline">
              {radioHistory.map(({ station, detail, active }) => (
                <div key={station} className={`radio-entry${active ? ' active-entry' : ''}`}>
                  <div className={`radio-station${active ? ' active-station' : ''}`}>{station}</div>
                  <div className="radio-detail">{detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* YOUTUBE */}
          <div className="youtube-block reveal">
            <p className="label" style={{ marginBottom: '0.75rem' }}>Chaîne YouTube</p>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', color: 'var(--creme)', marginBottom: '0.5rem' }}>Vidéos & Contenus</h3>
            <p style={{ fontSize: '0.82rem', color: 'var(--creme-dim)' }}>Retrouvez les replays, interviews et contenus exclusifs</p>
            <div className="youtube-placeholder">
              <span className="youtube-icon">▶</span>
              <span className="youtube-text">Vidéo à intégrer — YouTube Embed</span>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
