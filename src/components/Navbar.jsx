import { NavLink, Link } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Accueil', exact: true },
  { to: '/services', label: 'Services' },
  { to: '/ateliers', label: 'Ateliers' },
  { to: '/boutique', label: 'Boutique' },
  { to: '/medias', label: 'Médias' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar({ scrolled }) {
  return (
    <>
      <style>{`
        nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          padding: 1.2rem 3rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: background 0.4s ease, backdrop-filter 0.4s ease;
        }
        nav.scrolled {
          background: rgba(10,10,10,0.92);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(201,168,76,0.12);
        }
        .nav-logo {
          font-family: 'Cinzel', serif;
          font-size: 0.75rem;
          letter-spacing: 0.25em;
          color: var(--or);
          text-decoration: none;
          text-transform: uppercase;
        }
        .nav-logo span { color: var(--creme); }
        .nav-links {
          display: flex;
          gap: 2.5rem;
          list-style: none;
        }
        .nav-links a {
          font-family: 'Cinzel', serif;
          font-size: 0.6rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--creme-dim);
          text-decoration: none;
          transition: color 0.3s ease;
          position: relative;
        }
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -4px; left: 0; right: 0;
          height: 1px;
          background: var(--or);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        .nav-links a:hover,
        .nav-links a.active {
          color: var(--or);
        }
        .nav-links a:hover::after,
        .nav-links a.active::after {
          transform: scaleX(1);
        }
        .nav-radio {
          font-family: 'Cinzel', serif;
          font-size: 0.55rem;
          letter-spacing: 0.15em;
          color: var(--bordeaux-light);
          border: 1px solid var(--bordeaux);
          padding: 0.4rem 0.9rem;
          border-radius: 0;
          text-transform: uppercase;
          white-space: nowrap;
        }
        @media (max-width: 768px) {
          nav { padding: 1rem 1.5rem; }
          .nav-links { display: none; }
          .nav-radio { display: none; }
        }
      `}</style>
      <nav className={scrolled ? 'scrolled' : ''}>
        <Link to="/" className="nav-logo">
          Alexandre <span>Delovane</span>
        </Link>
        <ul className="nav-links">
          {navItems.map(({ to, label, exact }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={exact}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="nav-radio">● C'est Votre Avenir · Sud Radio</div>
      </nav>
    </>
  )
}
