import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import './NotFound.css';

export default function NotFound() {
  useEffect(() => {
    document.title = "Page Introuvable | Merit Consulting Maroc";
  }, []);

  return (
    <div className="notfound-page">
      <div className="notfound-page__bg-pattern" />
      <div className="container notfound-container">
        <h1 className="notfound-title">404</h1>
        <h2 className="notfound-subtitle">Oups ! Page introuvable</h2>
        <p className="notfound-text">
          La page que vous recherchez semble avoir été déplacée ou n'existe plus.
        </p>
        <Link to="/" className="btn btn-accent btn-lg notfound-cta">
          <FiHome style={{ marginRight: '8px' }} />
          Retour à l'Accueil
        </Link>
      </div>
    </div>
  );
}
