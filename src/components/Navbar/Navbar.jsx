import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from '../Logo/Logo';
import './Navbar.css';

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/sap-business-one', label: 'SAP Business One' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  /* ── scroll listener ── */
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  /* lock body scroll when drawer open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  /* close drawer on route change */
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (path) =>
    path === '/' ? pathname === '/' : pathname.startsWith(path);

  const isContactPage = pathname.replace(/\/$/, '').toLowerCase() === '/contact';
  const forceSolid = scrolled || isContactPage;


  return (
    <>
      <nav className={`navbar ${forceSolid ? 'navbar--scrolled' : ''}`}>
        <div className="navbar-container container">
          {/* ── Logo ── */}
          <Logo isDarkBg={!forceSolid} className="navbar-logo" />

          {/* ── Desktop links ── */}
          <ul className="navbar-links">
            {NAV_LINKS.filter((l) => l.path !== '/contact').map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`navbar-link ${isActive(link.path) ? 'navbar-link--active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact" className="navbar-cta btn btn-accent btn-sm">
                Contact Us
              </Link>
            </li>
          </ul>

          {/* ── Mobile toggle ── */}
          <button
            className="navbar-toggle"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      <div
        className={`navbar-overlay ${mobileOpen ? 'navbar-overlay--visible' : ''}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      <aside className={`navbar-drawer ${mobileOpen ? 'navbar-drawer--open' : ''}`}>
        <ul className="navbar-drawer-links">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`navbar-drawer-link ${isActive(link.path) ? 'navbar-drawer-link--active' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="navbar-drawer-cta btn btn-accent"
          onClick={() => setMobileOpen(false)}
        >
          Contact Us
        </Link>
      </aside>
    </>
  );
}
