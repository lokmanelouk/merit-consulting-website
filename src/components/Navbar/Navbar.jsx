import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../Logo/Logo';
import './Navbar.css';

const NAV_LINKS = [
  { path: '/', label: 'Accueil' },
  { path: '/about', label: 'À Propos' },
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
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  /* close drawer on route change */
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (path) =>
    path === '/' ? pathname === '/' : pathname.startsWith(path);

  const normalizedPath = pathname.replace(/\/$/, '').toLowerCase();
  const validPaths = ['', '/', '/about', '/services', '/sap-business-one', '/contact'];
  const isNotFound = !validPaths.includes(normalizedPath);
  const isSolidPage = normalizedPath === '/contact' || normalizedPath === '/services' || isNotFound;
  const forceSolid = scrolled || isSolidPage;

  return (
    <>
      <nav className={`navbar ${forceSolid ? 'navbar--scrolled' : ''} ${isNotFound ? 'navbar--notfound' : ''}`}>
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
                Contact
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
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="navbar-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.aside
              className="navbar-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            >
              {/* Header inside drawer */}
              <div className="navbar-drawer-header">
                <Logo isDarkBg={false} className="navbar-drawer-logo" onClick={() => setMobileOpen(false)} />
                <button
                  className="navbar-drawer-close"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <FiX />
                </button>
              </div>

              {/* Navigation Links */}
              <ul className="navbar-drawer-links">
                {NAV_LINKS.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`navbar-drawer-link ${isActive(link.path) ? 'navbar-drawer-link--active' : ''}`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Contact CTA */}
              <Link
                to="/contact"
                className="navbar-drawer-cta btn btn-accent"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
