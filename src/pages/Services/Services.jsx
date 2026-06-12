import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FiDatabase,
  FiBarChart2,
  FiCode,
  FiLink,
  FiLifeBuoy,
  FiBookOpen,
  FiCheck,
  FiChevronDown,
  FiSearch,
  FiLayout,
  FiSettings,
  FiHeadphones,
  FiArrowRight,
  FiChevronRight,
} from 'react-icons/fi';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import './Services.css';

const services = [
  {
    id: 1,
    icon: <FiDatabase />,
    title: 'Implémentation SAP Business One',
    description:
      'Implémentation SAP Business One de bout en bout, adaptée à vos besoins métier. De l\'évaluation initiale au lancement et au-delà, nous assurons une transition fluide vers SAP.',
    benefits: ['Opérations rationalisées', 'Informations en temps réel', 'Croissance évolutive'],
    technologies: ['SAP Business One', 'SAP HANA', 'Crystal Reports'],
  },
  {
    id: 2,
    icon: <FiBarChart2 />,
    title: 'Conseil ERP',
    description:
      'Conseil ERP stratégique pour vous aider à choisir, planifier et exécuter la bonne solution d\'entreprise. Nos consultants analysent vos processus et recommandent les configurations optimales.',
    benefits: ['Optimisation des processus', 'Réduction des coûts', 'Décisions basées sur les données'],
    technologies: ['SAP Business One', 'Intelligence d\'Affaires', 'Cartographie des Processus'],
  },
  {
    id: 3,
    icon: <FiCode />,
    title: 'Développement Logiciel',
    description:
      'Développement logiciel sur mesure pour répondre à des besoins métier uniques. Nous construisons des applications robustes et évolutives qui s\'intègrent parfaitement à vos systèmes existants.',
    benefits: ['Solutions sur mesure', 'Intégration API', 'Architecture moderne'],
    technologies: ['Applications Web', 'Applications Mobiles', 'Solutions Cloud'],
  },
  {
    id: 4,
    icon: <FiLink />,
    title: 'Intégrations sur Mesure',
    description:
      'Intégration transparente entre SAP Business One et les systèmes tiers. Nous connectons votre ERP avec les plateformes e-commerce, les systèmes CRM et les outils spécifiques à votre secteur.',
    benefits: ['Flux de données unifié', 'Automatisation', 'Réduction du travail manuel'],
    technologies: ['APIs REST', 'Framework d\'Intégration SAP', 'Outils ETL'],
  },
  {
    id: 5,
    icon: <FiLifeBuoy />,
    title: 'Support Technique',
    description:
      'Services de support technique et de maintenance fiables pour maintenir vos systèmes à leur performance optimale. Notre équipe est disponible pour résoudre les problèmes rapidement et efficacement.',
    benefits: ['Surveillance 24h/24', 'Résolution rapide', 'Maintenance préventive'],
    technologies: ['Support à Distance', 'Surveillance Systèmes', 'Optimisation des Performances'],
  },
  {
    id: 6,
    icon: <FiBookOpen />,
    title: 'Formation Utilisateurs',
    description:
      'Programmes de formation complets pour garantir que votre équipe maximise la valeur de vos investissements technologiques. Des opérations de base aux fonctionnalités avancées.',
    benefits: ['Productivité accrue', 'Adoption utilisateur', 'Réduction des erreurs'],
    technologies: ['Ateliers pratiques', 'Formation en ligne', 'Documentation'],
  },
];

const processSteps = [
  {
    number: '01',
    icon: <FiSearch />,
    title: 'Découverte & Analyse',
    description:
      'Nous évaluons vos systèmes actuels et comprenons vos objectifs métier',
  },
  {
    number: '02',
    icon: <FiLayout />,
    title: 'Planification & Conception',
    description:
      'Nous concevons la solution optimale et créons une feuille de route d\'implémentation détaillée',
  },
  {
    number: '03',
    icon: <FiSettings />,
    title: 'Implémentation & Tests',
    description:
      'Nous configurons, personnalisons et testons minutieusement chaque aspect de votre solution',
  },
  {
    number: '04',
    icon: <FiHeadphones />,
    title: 'Support & Optimisation',
    description:
      'Nous fournissons un support continu et optimisons en permanence vos systèmes',
  },
];

function Services() {
  const location = useLocation();

  useEffect(() => {
    document.title = "Nos Services | Merit Consulting Maroc";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Découvrez nos services d'intégration SAP Business One, de conseil ERP, de développement de logiciels sur mesure, d'intégration API et de support technique.");
    }
  }, []);
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const serviceIdMap = {
        '#sap-implementation': 1,
        '#sap-business-one': 1,
        '#erp-consulting': 2,
        '#software-development': 3,
        '#custom-integrations': 4,
        '#technical-support': 5,
        '#user-training': 6,
      };
      const id = serviceIdMap[hash.toLowerCase()];
      if (id) {
        setExpandedCard(id);
        
        // Scroll to the card container
        setTimeout(() => {
          const element = document.querySelector('.services-grid');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
      }
    }
  }, [location.hash]);

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="services-page">
      {/* Hero Banner */}
      <section className="services-hero">
        <div className="services-hero__bg-pattern" />
        <div className="services-hero__container container">
          <div className="services-hero__left">
            <h1 className="services-hero__title">Nos Services</h1>
            <p className="services-hero__subtitle">
              Des solutions complètes pour accélérer votre transformation digitale.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid section">
        <div className="services-grid__container container">
          <ScrollReveal className="services-grid__header">
            <span className="services-grid__label">Ce Que Nous Offrons</span>
            <h2 className="services-grid__title">
              Solutions Technologiques de Bout en Bout
            </h2>
            <p className="services-grid__description">
              De l&apos;implémentation au support continu, nous fournissons des services complets
              pour aider votre entreprise à prospérer à l&apos;ère du numérique.
            </p>
          </ScrollReveal>

          <div className="services-grid__cards">
            {services.map((service, i) => {
              const isExpanded = expandedCard === service.id;
              return (
                <ScrollReveal 
                  key={service.id} 
                  delay={i * 0.08}
                  direction="up"
                >
                  <div
                    className={`service-card ${isExpanded ? 'service-card--expanded' : ''}`}
                  >
                    <button
                      className="service-card__header"
                      onClick={() => toggleCard(service.id)}
                      aria-expanded={isExpanded}
                    >
                      <div className="service-card__header-left">
                        <div className="service-card__icon">{service.icon}</div>
                        <h3 className="service-card__title">{service.title}</h3>
                      </div>
                      <FiChevronDown
                        className={`service-card__chevron ${isExpanded ? 'service-card__chevron--rotated' : ''}`}
                      />
                    </button>

                    <div
                      className={`service-card__body ${isExpanded ? 'service-card__body--open' : ''}`}
                    >
                      <div className="service-card__body-inner">
                        <p className="service-card__description">
                          {service.description}
                        </p>

                        <div className="service-card__benefits">
                          <h4 className="service-card__section-title">
                            Avantages Clés
                          </h4>
                          <ul className="service-card__benefits-list">
                            {service.benefits.map((benefit, index) => (
                              <li key={index} className="service-card__benefit">
                                <FiCheck className="service-card__check-icon" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="service-card__technologies">
                          <h4 className="service-card__section-title">
                            Technologies
                          </h4>
                          <div className="service-card__tags">
                            {service.technologies.map((tech, index) => (
                              <span key={index} className="service-card__tag">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section (Alternate color) */}
      <section className="services-process section section--alternate">
        <div className="services-process__container container">
          <ScrollReveal className="services-process__header">
            <span className="services-process__label">Notre Approche</span>
            <h2 className="services-process__title">Notre Méthodologie Éprouvée</h2>
          </ScrollReveal>

          <div className="services-process__steps">
            <div className="services-process__line" />
            {processSteps.map((step, index) => (
              <ScrollReveal 
                key={index} 
                className="process-step"
                delay={index * 0.1}
                direction="up"
              >
                <div className="process-step__number-wrapper">
                  <span className="process-step__number">{step.number}</span>
                </div>
                <div className="process-step__card">
                  <div className="process-step__icon">{step.icon}</div>
                  <h3 className="process-step__title">{step.title}</h3>
                  <p className="process-step__description">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="services-cta__container container">
          <ScrollReveal className="services-cta__content">
            <h2 className="services-cta__title">Besoin d&apos;une Solution sur Mesure ?</h2>
            <p className="services-cta__text">
              Laissez nos experts vous aider à trouver la bonne solution technologique pour
              votre entreprise.
            </p>
            <Link to="/contact" className="services-cta__button btn btn-accent btn-lg">
              Planifier une Consultation
              <FiArrowRight className="services-cta__button-icon" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

export default Services;
