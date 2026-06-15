import { Link } from 'react-router-dom';
import {
  FiLinkedin,
  FiFacebook,
  FiMail,
  FiMapPin,
  FiPhone,
  FiArrowUp,
} from 'react-icons/fi';
import Logo from '../Logo/Logo';
import './Footer.css';

const QUICK_LINKS = [
  { path: '/', label: 'Accueil' },
  { path: '/about', label: 'À Propos' },
  { path: '/services', label: 'Services' },
  { path: '/sap-business-one', label: 'SAP Business One' },
  { path: '/contact', label: 'Contact' },
];

const SERVICES = [
  'Implémentation SAP',
  'Conseil ERP',
  'Développement Logiciel',
  'Intégrations sur Mesure',
  'Support Technique',
  'Formation Utilisateurs',
];

const SOCIALS = [
  { icon: <FiLinkedin />, href: 'https://www.linkedin.com/company/merit-sa/', label: 'LinkedIn' },
  { icon: <FiFacebook />, href: 'https://www.facebook.com/people/MERIT-SAP-consulting/100063140834548/', label: 'Facebook' },
  { icon: <FiMail />, href: 'mailto:merit@merit.ma', label: 'Email' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* ── Main grid ── */}
      <div className="footer-main container">
        {/* Column 1 – Brand */}
        <div className="footer-col footer-brand">
          <Logo isDarkBg={true} className="footer-logo" />

          <p className="footer-description">
            Accompagnement des entreprises marocaines avec des solutions SAP de classe mondiale,
            du conseil ERP et des services de transformation digitale depuis 1986.
          </p>

          <div className="footer-socials">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="footer-social-icon"
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2 – Quick Links */}
        <div className="footer-col">
          <h4 className="footer-heading">Liens Rapides</h4>
          <ul className="footer-list">
            {QUICK_LINKS.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="footer-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 – Services */}
        <div className="footer-col">
          <h4 className="footer-heading">Nos Services</h4>
          <ul className="footer-list">
            {SERVICES.map((service) => (
              <li key={service}>
                <Link to="/services" className="footer-link">
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 – Contact */}
        <div className="footer-col">
          <h4 className="footer-heading">Contactez-Nous</h4>
          <ul className="footer-list footer-contact-list">
            <li className="footer-contact-item">
              <FiMapPin className="footer-contact-icon" />
              <span>193 Avenue Hassan II,<br />Casablanca, Maroc 20140.</span>
            </li>
            <li className="footer-contact-item">
              <FiPhone className="footer-contact-icon" />
              <a href="tel:+212522264175" className="footer-link">
                +212 522 26 41 75
              </a>
            </li>
            <li className="footer-contact-item">
              <FiMail className="footer-contact-icon" />
              <a href="mailto:merit@merit.ma" className="footer-link">
                merit@merit.ma
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner container">
          <p className="footer-copyright">
            &copy; {year} Merit Consulting Maroc. Tous droits réservés.
          </p>

          <button
            className="footer-back-to-top"
            onClick={scrollToTop}
            aria-label="Retour en haut"
          >
            <FiArrowUp />
            <span>Haut</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
