import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiTarget, 
  FiEye, 
  FiHeart, 
  FiArrowRight, 
  FiChevronRight, 
  FiLinkedin, 
  FiTwitter, 
  FiMail,
  FiUser 
} from 'react-icons/fi';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import './About.css';

const milestones = [
  { 
    year: '1986', 
    title: 'Débuts Fondateurs', 
    label: 'Merit Consulting a été créé, se concentrant sur la comptabilité traditionnelle et les systèmes de gestion d\'entreprise.' 
  },
  { 
    year: '2000', 
    title: 'Expansion Logicielle', 
    label: 'Élargissement du catalogue de services pour inclure le développement logiciel sur mesure, les bases de données relationnelles et le conseil IT.' 
  },
  { 
    year: '2010', 
    title: 'Partenariat SAP', 
    label: 'Certifié partenaire officiel SAP Business One, création d\'une unité dédiée ERP pour les PME.' 
  },
  { 
    year: '2024', 
    title: 'Innovation Cloud & Afrique', 
    label: 'Lancement d\'intégrations ERP cloud nouvelle génération et de services de conseil en transformation digitale à travers l\'Afrique.' 
  },
];

const teamMembers = [
  {
    name: 'Ahmed Benali',
    title: 'PDG & Fondateur',
    bio: 'Plus de 30 ans d\'expérience dans le conseil IT et les solutions d\'entreprise.',
    gradient: 'linear-gradient(135deg, #0A2463, #1E56A0)',
  },
  {
    name: 'Sara El Mansouri',
    title: 'Responsable Pratique SAP',
    bio: 'Consultante certifiée SAP avec plus de 15 ans d\'expérience en implémentation.',
    gradient: 'linear-gradient(135deg, #0096C7, #00B4D8)',
  },
  {
    name: 'Karim Tazi',
    title: 'Directeur Technique',
    bio: 'Expert en architecture logicielle et intégration de systèmes.',
    gradient: 'linear-gradient(135deg, #1E56A0, #00B4D8)',
  },
  {
    name: 'Nadia Alaoui',
    title: 'Responsable Succès Client',
    bio: 'Dédiée à assurer des résultats et une satisfaction client exceptionnels.',
    gradient: 'linear-gradient(135deg, #0A2463, #0096C7)',
  },
];

const values = ['Innovation', 'Intégrité', 'Excellence', 'Partenariat', 'Engagement'];

export default function About() {
  useEffect(() => {
    document.title = "À Propos | Merit Consulting Maroc";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Découvrez l'histoire de Merit Consulting Maroc, notre expertise de plus de 40 ans en gestion de projet ERP et notre engagement envers nos clients.");
    }
  }, []);

  return (
    <div className="about-page">
      {/* ── Hero Banner ── */}
      <section className="about-hero">
        <div className="about-hero__bg-pattern" />
        <div className="about-hero__container container">
          <div className="about-hero__left">
            <h1 className="about-hero__title">À Propos de Merit Consulting Maroc</h1>
            <p className="about-hero__subtitle">
              Des décennies d&apos;expérience au service de l&apos;évolution des entreprises marocaines.
            </p>
          </div>
          <div className="about-hero__right">
            <div className="about-hero__visual-wrap">
              <div className="about-hero__glow-orb" />
              <div className="about-hero__glass-shape">
                <div className="about-hero__glass-inner">
                  <div className="about-hero__glass-content">
                    <div className="about-hero__glass-header">
                      <span className="about-hero__glass-brand">MERIT</span>
                      <div className="about-hero__glass-chip" />
                    </div>
                    <div className="about-hero__glass-body">
                      <span className="about-hero__glass-stat">40 Ans</span>
                      <span className="about-hero__glass-tag">d&apos;innovation</span>
                    </div>
                    <div className="about-hero__glass-footer">
                      <span className="about-hero__glass-cert">Certifié SAP</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Company Presentation ── */}
      <section className="about-presentation section">
        <div className="about-presentation__container container-narrow">
          <ScrollReveal className="about-presentation__text" direction="up">
            <h2 className="section-label">Qui Sommes-Nous</h2>
            <h3 className="section-heading">Un Leader de Confiance en Conseil ERP</h3>
            <p className="about-presentation__paragraph">
              Fondé avec la vision d&apos;autonomiser les entreprises marocaines et africaines grâce à des solutions technologiques de pointe, Merit Consulting Maroc est devenu un leader de confiance en conseil ERP et transformation digitale.
            </p>
            <p className="about-presentation__paragraph">
              Avec plus de 40 ans d&apos;expertise en systèmes de gestion et 24 ans de spécialisation SAP, nous apportons des connaissances et une expérience inégalées à chaque projet.
            </p>
            <p className="about-presentation__paragraph">
              Notre compréhension approfondie des besoins locaux des entreprises, combinée à une expertise SAP mondiale, fait de nous le partenaire idéal pour les entreprises souhaitant rationaliser leurs opérations et accélérer leur croissance.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Mission, Vision, Values (Alternate color) ── */}
      <section className="about-mvv section section--alternate">
        <div className="about-mvv__container container">
          <ScrollReveal className="about-mvv__card" delay={0}>
            <div className="about-mvv__icon">
              <FiTarget />
            </div>
            <h3>Notre Mission</h3>
            <p>
              Accompagner les entreprises avec des solutions technologiques innovantes qui favorisent l&apos;excellence opérationnelle, la croissance durable et l&apos;avantage concurrentiel à l&apos;ère du numérique.
            </p>
          </ScrollReveal>

          <ScrollReveal className="about-mvv__card" delay={0.1}>
            <div className="about-mvv__icon">
              <FiEye />
            </div>
            <h3>Notre Vision</h3>
            <p>
              Être le partenaire de transformation digitale de référence au Maroc et en Afrique, reconnu pour notre expertise, notre fiabilité et notre engagement envers la réussite de nos clients.
            </p>
          </ScrollReveal>

          <ScrollReveal className="about-mvv__card" delay={0.2}>
            <div className="about-mvv__icon">
              <FiHeart />
            </div>
            <h3>Nos Valeurs</h3>
            <ul className="about-mvv__values-list">
              {values.map((v) => (
                <li key={v} className="about-mvv__value-item">
                  <span className="about-mvv__value-dot" />
                  <span className="about-mvv__value-text">{v}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Experience & Expertise ── */}
      <section className="about-experience section">
        <div className="about-experience__container container">
          <ScrollReveal>
            <h2 className="section-label">Notre Parcours</h2>
            <h3 className="section-heading">40 Ans de Progression Historique</h3>
          </ScrollReveal>

          <div className="about-timeline">
            {milestones.map((m, i) => (
              <ScrollReveal 
                className="about-timeline__item" 
                key={i} 
                delay={i * 0.12}
                direction="up"
              >
                <div className="about-timeline__dot" />
                <div className="about-timeline__content">
                  <span className="about-timeline__year">{m.year}</span>
                  <h4 className="about-timeline__title">{m.title}</h4>
                  <p className="about-timeline__label">{m.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team Section (Alternate color) ── */}
      <section className="about-team section section--alternate">
        <div className="about-team__container container">
          <ScrollReveal>
            <h2 className="section-label">Notre Direction</h2>
            <p className="about-team__subtitle">
              Découvrez les profils exécutifs qui font avancer Merit Consulting Maroc
            </p>
          </ScrollReveal>

          <div className="about-team__grid">
            {teamMembers.map((member, i) => (
              <ScrollReveal 
                className="about-team__card" 
                key={member.name}
                delay={i * 0.1}
                direction="up"
              >
                <div
                  className="about-team__avatar"
                  style={{ background: member.gradient }}
                >
                  <FiUser className="about-team__avatar-icon" />
                </div>
                <h4 className="about-team__name">{member.name}</h4>
                <span className="about-team__title">{member.title}</span>
                <div className="about-team__divider" />
                <p className="about-team__bio">{member.bio}</p>
                <div className="about-team__socials">
                  <a href="#" aria-label="LinkedIn"><FiLinkedin /></a>
                  <a href="#" aria-label="Twitter"><FiTwitter /></a>
                  <a href="#" aria-label="Email"><FiMail /></a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="about-cta">
        <div className="about-cta__container container">
          <ScrollReveal>
            <h2>Rejoignez les entreprises qui font confiance à Merit Consulting Maroc</h2>
            <Link to="/contact" className="about-cta__button">
              Nous Contacter <FiArrowRight />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
