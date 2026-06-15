import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FiDollarSign,
  FiUsers,
  FiShoppingCart,
  FiPackage,
  FiSettings,
  FiPieChart,
  FiCheck,
  FiArrowRight,
  FiClock,
  FiAward,
  FiCheckCircle,
  FiGlobe,
  FiLayers,
  FiLifeBuoy,
  FiGrid,
  FiTrendingUp,
  FiZap,
  FiCloud,
  FiChevronRight,
  FiFileText,
  FiTruck,
  FiDatabase,
  FiBookOpen,
  FiHeadphones,
  FiBarChart2,
  FiShield,
  FiTarget,
} from 'react-icons/fi';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import './SapBusinessOne.css';


const benefits = [
  {
    icon: <FiGrid />,
    title: 'Gestion Unifiée de l\'Entreprise',
    description:
      'Centralisez toutes vos opérations sur une plateforme unique et éliminez les silos de données. Bénéficiez d\'une visibilité en temps réel sur tous les départements.',
  },
  {
    icon: <FiTrendingUp />,
    title: 'Croissance Évolutive',
    description:
      'Commencez avec les fonctionnalités essentielles et ajoutez-en au fil de votre développement. SAP Business One évolue au rythme de votre croissance.',
  },
  {
    icon: <FiZap />,
    title: 'Retour sur Investissement Rapide',
    description:
      'Des délais d\'implémentation maîtrisés et des gains d\'efficacité immédiats garantissent un retour sur investissement rapide.',
  },
  {
    icon: <FiCloud />,
    title: 'Cloud ou Sur Site (On-Premise)',
    description:
      'Choisissez le mode d\'hébergement adapté à votre infrastructure. Disponible en Cloud, Sur Site (On-Premise) ou en version Hybride.',
  },
];

const modules = [
  {
    id: 'accounting',
    title: 'Gestion Financière',
    icon: <FiBookOpen />,
    color: '#0A2463',
    details: [
      'Comptabilité générale & analytique',
      'Écritures de journal & rapprochements',
      'Rapports financiers & bilans en temps réel',
      'Gestion multi-devises et multi-sociétés',
      'Conformité fiscale & déclarations locales',
    ],
    description:
      'Optimisez votre gestion financière avec un moteur comptable puissant et automatisé. Simplifiez les écritures de journal, éditez des bilans précis et assurez la conformité fiscale marocaine.',
  },
  {
    id: 'sales-crm',
    title: 'Ventes & CRM',
    icon: <FiTarget />,
    color: '#00B4D8',
    details: [
      'Gestion des opportunités et des devis',
      'Commandes clients & livraisons',
      'Suivi du cycle de vie client',
      'Facturation & encaissements',
      'Analyses de la performance commerciale',
    ],
    description:
      'Pilotez l\'ensemble du cycle de vente, du premier contact à la facturation. Suivez vos opportunités commerciales, gérez vos forces de vente et améliorez la relation client grâce à un CRM intégré.',
  },
  {
    id: 'purchasing',
    title: 'Achats & Approvisionnements',
    icon: <FiShoppingCart />,
    color: '#0096C7',
    details: [
      'Demandes d\'achats & validations automatisées',
      'Bons de commande & réceptions de marchandises',
      'Factures fournisseurs & comptes créditeurs',
      'Suivi et évaluation des fournisseurs',
      'Analyses des coûts d\'achat et des marges',
    ],
    description:
      'Maîtrisez et optimisez vos processus d\'achat. Automatisez les cycles d\'approvisionnement, gérez vos contrats fournisseurs et analysez précisément vos dépenses pour maximiser vos marges.',
  },
  {
    id: 'inventory',
    title: 'Stocks & Distribution',
    icon: <FiPackage />,
    color: '#1E56A0',
    details: [
      'Gestion multi-dépôts & transferts de stock',
      'Suivi en temps réel des niveaux de stock',
      'Traçabilité par numéro de lot et de série',
      'Inventaires physiques & valorisation des stocks',
      'Préparation des commandes & expédition',
    ],
    description:
      'Obtenez une visibilité complète sur vos stocks dans tous vos dépôts. Suivez vos produits en temps réel, optimisez vos niveaux de stock pour éviter les ruptures et gérez la traçabilité par lots.',
  },
  {
    id: 'production',
    title: 'Production & MRP',
    icon: <FiSettings />,
    color: '#3A86C8',
    details: [
      'Nomenclatures (BOM) multi-niveaux',
      'Ordres de fabrication & ordres de travail',
      'Planification des besoins en composants (MRP)',
      'Gestion des capacités de production',
      'Calcul du coût de revient de fabrication',
    ],
    description:
      'Planifiez et contrôlez vos processus de fabrication. Utilisez le module MRP pour anticiper les besoins en matières premières, optimiser l\'utilisation des ressources et maîtriser vos coûts de revient.',
  },
  {
    id: 'bi',
    title: 'Informatique Décisionnelle',
    icon: <FiPieChart />,
    color: '#0D1B2A',
    details: [
      'Tableaux de bord interactifs & KPI en direct',
      'Reporting financier & opérationnel avancé',
      'Analyses multidimensionnelles (cubes OLAP)',
      'Génération automatique de rapports Crystal Reports',
      'Recherche d\'information intuitive avec SAP Enterprise Search',
    ],
    description:
      'Prenez des décisions éclairées basées sur des données fiables et actualisées. Exploitez la puissance de SAP HANA pour générer des analyses prédictives et des indicateurs de performance clés en temps réel.',
  },
];

const differentiators = [
  { icon: <FiClock />, text: '24 ans d\'expérience SAP' },
  { icon: <FiAward />, text: 'Consultants certifiés SAP Business One' },
  { icon: <FiCheckCircle />, text: 'Plus de 80 implémentations réussies' },
  { icon: <FiGlobe />, text: 'Expertise locale aux standards internationaux' },
  { icon: <FiLayers />, text: 'Gestion de projet de bout en bout' },
  { icon: <FiLifeBuoy />, text: 'Support continu et formation des équipes' },
];

const featureHighlights = [
  'Solution ERP intégrée et complète',
  'Analyses et rapports en temps réel',
  'Accès mobile sur tout type d\'appareil',
  'Déploiement Cloud et sur site (On-Premise)',
  'Add-ons spécifiques par secteur d\'activité',
  'Architecture évolutive et sécurisée',
];

export default function SapBusinessOne() {
  const [activeModule, setActiveModule] = useState('accounting');

  useEffect(() => {
    document.title = "SAP Business One | Merit Consulting Maroc";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Explorez la solution ERP complète SAP Business One pour PME en croissance : finance, ventes, achats, stocks, production et informatique décisionnelle.");
    }
  }, []);

  const currentModule = modules.find((m) => m.id === activeModule);

  return (
    <div className="sap-page">
      {/* ====== 1. Hero Banner ====== */}
      <section className="sap-hero">
        <div className="sap-hero__bg">
          <div className="sap-hero__pattern" />
        </div>
        <div className="sap-hero__container container">
          <div className="sap-hero__left">
            <span className="sap-hero__badge-label">
              <FiShield /> Partenaire Certifié SAP
            </span>
            <h1 className="sap-hero__title">SAP Business One</h1>
            <p className="sap-hero__subtitle">
              La solution ERP complète pour les PME en croissance
            </p>
          </div>
        </div>
      </section>

      {/* ====== 2. What is SAP Business One ====== */}
      <section className="sap-about section">
        <div className="sap-container container">
          <div className="sap-about__grid">
            <ScrollReveal className="sap-about__text" direction="right">
              <span className="sap-section-label">Aperçu</span>
              <h2 className="sap-section-title">Qu'est-ce que SAP Business One ?</h2>
              <p className="sap-about__description">
                SAP Business One est un progiciel de gestion intégré (ERP) complet, spécialement conçu pour les petites et moyennes entreprises. Il offre une solution unique et accessible pour piloter l'ensemble de votre activité, de la relation client et des ventes jusqu'à la comptabilité et la production.
              </p>
              <p className="sap-about__description">
                En tant que partenaire certifié SAP Business One, Merit Consulting Maroc met à votre disposition des décennies d'expertise en intégration pour vous aider à tirer le meilleur parti de cette plateforme performante.
              </p>
              <Link to="/contact" className="sap-about__cta">
                En savoir plus <FiArrowRight />
              </Link>
            </ScrollReveal>
            
            <ScrollReveal className="sap-about__card" delay={0.2} direction="left">
              <div className="sap-about__card-header">
                <FiBarChart2 />
                <h3>Points Clés</h3>
              </div>
              <ul className="sap-about__highlights">
                {featureHighlights.map((item, index) => (
                  <li key={index} className="sap-about__highlight-item">
                    <span className="sap-about__check-icon">
                      <FiCheck />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ====== 4. Benefits for SMEs ====== */}
      <section className="sap-benefits section">
        <div className="sap-container container sap-benefits__grid">
          {/* Left Column — Text */}
          <ScrollReveal className="sap-benefits__left" direction="right">
            <span className="sap-section-label">Avantages</span>
            <h2 className="sap-section-title">
              Pourquoi les PME choisissent SAP Business One
            </h2>
            <div className="sap-benefits__list">
              {benefits.map((benefit, index) => (
                <div className="sap-benefit-item" key={index}>
                  <div className="sap-benefit-item__icon-wrap">
                    {benefit.icon}
                  </div>
                  <div className="sap-benefit-item__content">
                    <h3 className="sap-benefit-item__title">{benefit.title}</h3>
                    <p className="sap-benefit-item__desc">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right Column — Mockup Dashboard */}
          <ScrollReveal className="sap-benefits__right" direction="left" delay={0.2}>
            <div className="sap-performance-visual">
              {/* Card 1: Scalable Growth Chart */}
              <div className="sap-perf-card sap-perf-card--chart">
                <span className="sap-perf-card__title">Évolutivité du Système</span>
                <div className="sap-perf-card__chart-wrapper">
                  <svg viewBox="0 0 200 80" className="sap-perf-chart">
                    <defs>
                      <linearGradient id="blue-grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#1F6FB2" stopOpacity="0.3"/>
                        <stop offset="100%" stopColor="#1F6FB2" stopOpacity="0.0"/>
                      </linearGradient>
                    </defs>
                    <path d="M 15 70 C 50 65, 80 40, 110 45 C 140 50, 165 15, 185 10 L 185 80 L 15 80 Z" fill="url(#blue-grad)" />
                    <path d="M 15 70 C 50 65, 80 40, 110 45 C 140 50, 165 15, 185 10" fill="none" stroke="#1F6FB2" strokeWidth="4" strokeLinecap="round" />
                    <circle cx="15" cy="70" r="4" fill="#0A2463" />
                    <circle cx="185" cy="10" r="5" fill="#1F6FB2" />
                    <circle cx="185" cy="10" r="10" fill="none" stroke="#1F6FB2" strokeOpacity="0.4" strokeWidth="2" className="ping-circle" />
                    <text x="12" y="58" fill="#0A2463" fontSize="8" fontWeight="bold" fontFamily="Inter, sans-serif">PME</text>
                    <text x="105" y="14" fill="#1F6FB2" fontSize="8" fontWeight="bold" fontFamily="Inter, sans-serif">GRAND COMPTE</text>
                  </svg>
                </div>
              </div>

              {/* Card 2: Unified Management */}
              <div className="sap-perf-card sap-perf-card--unified">
                <span className="sap-perf-card__title">Gestion Unifiée</span>
                <span className="sap-perf-card__value-medium">100% Connecté</span>
                <span className="sap-perf-card__subtext">Ventes, Finance & Stocks synchronisés</span>
              </div>

              {/* Card 3: Processing Time (Fast ROI) */}
              <div className="sap-perf-card sap-perf-card--roi">
                <span className="sap-perf-card__title">Temps de Traitement</span>
                <span className="sap-perf-card__value-large">-65%</span>
                <span className="sap-perf-card__subtext">Automatisation des rapports financiers</span>
              </div>

              {/* Infrastructure Tag */}
              <div className="sap-performance-visual__badge">
                <FiCloud className="sap-badge-icon" />
                <span>Mode : Cloud Hybride</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ====== 5. Modules Section (Alternate color) ====== */}
      <section className="sap-modules section section--alternate">
        <div className="sap-container container">
          <ScrollReveal className="sap-modules__header">
            <span className="sap-section-label">Modules</span>
            <h2 className="sap-section-title">Modules SAP Business One</h2>
            <p className="sap-section-subtitle">
              Explorez les modules clés qui structurent et propulsent votre activité quotidienne.
            </p>
          </ScrollReveal>
          
          <div className="sap-modules__layout">
            <ScrollReveal className="sap-modules__tabs" direction="right">
              {modules.map((mod) => (
                <button
                  key={mod.id}
                  className={`sap-modules__tab ${activeModule === mod.id ? 'sap-modules__tab--active' : ''}`}
                  onClick={() => setActiveModule(mod.id)}
                  style={{ '--tab-color': mod.color }}
                >
                  <span className="sap-modules__tab-icon">{mod.icon}</span>
                  <span className="sap-modules__tab-label">{mod.title}</span>
                </button>
              ))}
            </ScrollReveal>
            
            {currentModule && (
              <ScrollReveal className="sap-modules__detail" key={currentModule.id} direction="left" delay={0.1}>
                <div className="sap-modules__detail-header">
                  <div
                    className="sap-modules__detail-icon"
                    style={{ '--mod-color': currentModule.color }}
                  >
                    {currentModule.icon}
                  </div>
                  <h3 className="sap-modules__detail-title">
                    Module {currentModule.title}
                  </h3>
                </div>
                <p className="sap-modules__detail-desc">
                  {currentModule.description}
                </p>
                <ul className="sap-modules__detail-list">
                  {currentModule.details.map((detail, i) => (
                    <li key={i} className="sap-modules__detail-item">
                      <FiCheck /> {detail}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>

      {/* ====== 6. Why Choose Merit ====== */}
      <section className="sap-why-merit section">
        <div className="sap-container container">
          <ScrollReveal className="sap-why-merit__header">
            <span className="sap-section-label">Notre Expertise</span>
            <h2 className="sap-section-title">
              Pourquoi choisir Merit Consulting Maroc pour SAP Business One ?
            </h2>
            <p className="sap-section-subtitle">
              Collaborer avec nous, c'est choisir une équipe d'experts qui allie une connaissance pointue de SAP à une parfaite maîtrise du marché marocain.
            </p>
          </ScrollReveal>
          
          <div className="sap-why-merit__grid">
            {differentiators.map((item, index) => (
              <ScrollReveal 
                className="sap-differentiator" 
                key={index}
                delay={index * 0.08}
                direction="up"
              >
                <div className="sap-differentiator__icon">{item.icon}</div>
                <p className="sap-differentiator__text">{item.text}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 7. CTA Section ====== */}
      <section className="sap-cta">
        <div className="sap-container container">
          <ScrollReveal className="sap-cta__content">
            <h2 className="sap-cta__title">
              Prêt à démarrer avec SAP Business One ?
            </h2>
            <p className="sap-cta__desc">
              Planifiez une consultation gratuite avec nos experts SAP et découvrez comment SAP Business One peut propulser votre entreprise.
            </p>
            <div className="sap-cta__actions">
              <Link to="/contact?subject=sap-business-one" className="btn btn-accent btn-lg">
                Demander une démonstration <FiArrowRight />
              </Link>
              <Link to="/contact?subject=sap-business-one" className="btn btn-outline btn-lg">
                Contacter notre Équipe SAP <FiArrowRight />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
