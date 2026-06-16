import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'framer-motion';
import {
  FiAward,
  FiUsers,
  FiTarget,
  FiTrendingUp,
  FiLayers,
  FiMonitor,
  FiDatabase,
  FiBarChart2,
  FiCode,
  FiLink,
  FiLifeBuoy,
  FiBookOpen,
  FiCheckCircle,
  FiArrowRight,
  FiStar,
  FiShield,
  FiGlobe,
  FiChevronLeft,
  FiChevronRight,
  FiDollarSign,
  FiPackage,
  FiShoppingCart,
} from 'react-icons/fi';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import heroCasablanca from '../../assets/hero-casablanca.png';
import jaoudaLogo from '../../assets/clients/jaouda.png';
import oniLogo from '../../assets/clients/ONI.png';
import dandyLogo from '../../assets/clients/Dindy.png';
import samsungLogo from '../../assets/clients/Samsung.png';
import engieLogo from '../../assets/clients/ENGIE.png';
import cimrLogo from '../../assets/clients/CIMR.png';
import s2mLogo from '../../assets/clients/s2m.png';
import zalaghLogo from '../../assets/clients/Zalagh.png';
import sapB1Logo from '../../assets/clients/SAPB1.png';
import sqlServerLogo from '../../assets/clients/microsoft-sql-server.png';
import sapHanaLogo from '../../assets/clients/SAP-S4HANA.png';
import crystalLogo from '../../assets/clients/crystal_logo.png';
import './Home.css';

/* ── Data ─────────────────────────────────────────────────── */
const keyFigures = [
  { end: 40, suffix: '', label: "Années d'Expertise", desc: "Conseil de classe mondiale depuis 1986.", icon: FiAward },
  { end: 24, suffix: '', label: "Années de Partenariat SAP", desc: "Spécialisation dans les implémentations SAP Business One.", icon: FiLayers },
  { end: 80, suffix: '+', label: "Clients Accompagnés", desc: "Accompagnement des entreprises de toutes tailles.", icon: FiUsers },
  { end: 1000, suffix: '+', label: "Utilisateurs Actifs", desc: "Professionnels utilisant nos solutions au quotidien.", icon: FiMonitor },
];

const services = [
  { 
    icon: FiDatabase, 
    title: 'Implémentation SAP Business One', 
    desc: 'Déploiement complet de SAP B1 adapté à vos processus métier et vos objectifs de croissance.', 
    highlight: true, 
    link: '/sap-business-one' 
  },
  { 
    icon: FiBarChart2, 
    title: 'Conseil ERP', 
    desc: 'Services de conseil stratégique ERP pour optimiser les opérations, réduire les coûts et accroître l\'efficacité.', 
    link: '/services#erp-consulting' 
  },
  { 
    icon: FiCode, 
    title: 'Développement Logiciel', 
    desc: 'Solutions logicielles sur mesure conçues avec des technologies modernes pour répondre à vos défis spécifiques.', 
    link: '/services#software-development' 
  },
  { 
    icon: FiLink, 
    title: 'Intégrations sur Mesure', 
    desc: 'Intégration transparente de vos systèmes existants avec SAP et des applications tierces.', 
    link: '/services#custom-integrations' 
  },
  { 
    icon: FiLifeBuoy, 
    title: 'Support Technique', 
    desc: 'Assistance technique réactive 24/7 pour garantir le bon fonctionnement continu de vos systèmes.', 
    link: '/services#technical-support' 
  },
  { 
    icon: FiBookOpen, 
    title: 'Formation Utilisateurs', 
    desc: 'Programmes de formation complets pour maximiser l\'adoption par les utilisateurs et le retour sur investissement.', 
    link: '/services#user-training' 
  },
];

const sapFeatures = [
  'Gestion Financière & Comptabilité',
  'Ventes & Gestion Client (CRM)',
  'Achats & Contrôle des Stocks',
  'Production & Planification MRP',
  'Informatique Décisionnelle & Reporting',
  'Support Multi-devises & Multilingue',
];

const clientIndustries = [
  'Industrie & Production',
  'Distribution',
  'Commerce de Détail',
  'Services',
  'BTP & Construction',
  'Santé',
  'Logistique & Transport',
  'Agriculture',
];

const testimonials = [
  {
    quote: "Merit Consulting Maroc a transformé l'ensemble de nos opérations grâce à SAP Business One. Leur expertise, professionnalisme et dévouement ont fait toute la différence. Nous avons constaté une amélioration de 35% de notre efficacité opérationnelle dès la première année.",
    author: "Directeur Général",
    role: "Entreprise Industrielle Leader, Casablanca",
    avatar: "DG"
  },
  {
    quote: "Les intégrations personnalisées développées par Merit Consulting ont parfaitement connecté notre CRM, nos systèmes d'entrepôt et SAP Business One. Les erreurs de saisie manuelle ont été réduites de plus de 90%, accélérant ainsi la préparation de nos commandes.",
    author: "Directeur des Opérations",
    role: "Hub de Distribution Panafricain, Tanger",
    avatar: "DO"
  },
  {
    quote: "Merit a fourni un niveau de support exceptionnel pendant notre transition. Leurs consultants ont compris nos exigences industrielles locales et ont aligné précisément les modules SAP sur nos flux de travail.",
    author: "Directeur Financier",
    role: "Entreprise du Secteur des Services, Rabat",
    avatar: "DF"
  }
];

/* ── Stat Card Sub-component ──────────────────────────────── */
function StatCard({ end, suffix, label, desc, icon: Icon, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true);
      const duration = 2000;
      const startTime = performance.now();
      const step = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(eased * end));
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setCount(end);
        }
      };
      requestAnimationFrame(step);
    }
  }, [isInView, hasStarted, end]);

  return (
    <ScrollReveal delay={delay} className="figures-card" threshold={0.2}>
      <div ref={ref}>
        <div className="figures-card__icon">
          <Icon />
        </div>
        <div className="figures-card__number">
          {count.toLocaleString()}{suffix}
        </div>
        <div className="figures-card__label">{label}</div>
        <p className="figures-card__desc">{desc}</p>
      </div>
    </ScrollReveal>
  );
}

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    document.title = "Merit Consulting Maroc | Experts SAP Business One et Transformation Digitale";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Merit Consulting Maroc accompagne les entreprises avec des solutions ERP innovantes, SAP Business One et des stratégies de transformation digitale.');
    }
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Parallax scroll effect for geometric shapes
  // Stagger variants for Hero load
  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
    }
  };

  return (
    <main className="home">
      {/* ====== 1. HERO ====== */}
      <section className="hero">
        {/* Premium background layer stack */}
        <div className="hero__bg-image" aria-hidden="true" />
        <div className="hero__mesh-overlay" aria-hidden="true" />
        <div className="hero__grid-overlay" aria-hidden="true" />

        <div className="container hero__container">
          <motion.div 
            className="hero__content"
            variants={heroContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span className="hero__label" variants={heroItemVariants}>
              PARTENAIRE CERTIFIÉ SAP BUSINESS ONE
            </motion.span>
            <motion.h1 className="hero__title" variants={heroItemVariants}>
              Experts en Transformation Digitale et{' '}
              <span className="hero__highlight">SAP Business One</span>
            </motion.h1>
            <motion.p className="hero__subtitle" variants={heroItemVariants}>
              Merit Consulting Maroc accompagne les entreprises avec des solutions ERP innovantes et des systèmes de management performants.
            </motion.p>
            <motion.div className="hero__actions" variants={heroItemVariants}>
              <Link to="/contact?subject=sap-business-one" className="btn btn-accent btn-lg">
                Demander une Démo
              </Link>
              <Link to="/contact" className="btn btn-outline btn-lg">
                Nous Contacter
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>



      {/* ====== 2. ABOUT ====== */}
      <section className="section about">
        <div className="container">
          <div className="about__grid">
            <ScrollReveal className="about__text">
              <span className="section-label">QUI SOMMES-NOUS</span>
              <h2 className="section-title">Votre Partenaire de Confiance en Transformation Digitale</h2>
              <p className="about__description">
                Merit Consulting Maroc est un cabinet de conseil en technologies de premier plan, spécialisé dans SAP Business One, les progiciels de gestion intégrés (ERP), les systèmes de management et le développement de logiciels sur mesure. Nous associons une expertise sectorielle approfondie à des technologies de pointe pour aider les entreprises à rationaliser leurs opérations, accroître leur productivité et atteindre une croissance durable.
              </p>
              <p className="about__description">
                Notre équipe multidisciplinaire de consultants, développeurs et chefs de projet travaille en étroite collaboration avec nos clients pour livrer des solutions qui transforment réellement leur entreprise, de la stratégie initiale à la mise en œuvre et au-delà.
              </p>
            </ScrollReveal>

            <ScrollReveal className="about__visual" delay={0.2} direction="left">
              <div className="about__image-wrapper">
                <img 
                  src={heroCasablanca} 
                  alt="Casablanca Finance City skyline représentant les affaires au Maroc" 
                  className="about__image"
                  loading="lazy"
                />
                <div className="about__image-overlay" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ====== 3. KEY FIGURES ====== */}
      <section className="section figures section--alternate">
        <div className="container">
          <div className="section-header">
            <span className="section-label">NOTRE IMPACT</span>
            <h2 className="section-title">Des Chiffres Clés Qui Parlent d'Eux-mêmes</h2>
            <p className="section-subtitle">
              Des indicateurs qui reflètent notre engagement envers l'excellence et la confiance que nous accordent nos clients.
            </p>
          </div>

          <div className="figures__grid">
            {keyFigures.map((fig, i) => (
              <StatCard key={i} {...fig} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ====== 4. SERVICES ====== */}
      <section className="section services">
        <div className="container">
          <div className="section-header">
            <span className="section-label">NOS SERVICES</span>
            <h2 className="section-title">Des Solutions Technologiques Complètes</h2>
            <p className="section-subtitle">
              De l'implémentation à l'intégration, en passant par la formation et le support, nous couvrons l'ensemble de vos besoins technologiques.
            </p>
          </div>

          <div className="services__grid">
            {services.map((svc, i) => (
              <ScrollReveal 
                key={i} 
                delay={i * 0.08} 
                className={`services__card-wrapper ${svc.highlight ? 'services__card-wrapper--highlight' : ''}`} 
                tag="div"
              >
                <Link 
                  to={svc.link} 
                  className={`services__card ${svc.highlight ? 'services__card--highlight' : ''}`}
                >
                  {svc.highlight && (
                    <span className="services__card-badge">Expertise Clé</span>
                  )}
                  <div className="services__card-icon">
                    <svc.icon />
                  </div>
                  <h3 className="services__card-title">{svc.title}</h3>
                  <p className="services__card-desc">{svc.desc}</p>
                  <span className="services__card-link">
                    En savoir plus <FiArrowRight />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 5. SAP BUSINESS ONE HIGHLIGHT (SHOWCASE) ====== */}
      <section className="section sap-highlight section--alternate">
        <div className="container">
          <div className="sap-highlight__grid">
            <ScrollReveal className="sap-highlight__info">
              <span className="section-label">SAP BUSINESS ONE</span>
              <h2 className="section-title">SAP Business One : Votre Moteur de Croissance</h2>
              <p className="sap-highlight__desc">
                SAP Business One est une solution ERP abordable et simple d'utilisation, spécialement conçue pour accompagner la croissance des petites et moyennes entreprises (PME). Elle intègre toutes vos fonctions clés — gestion financière, ventes, stocks et achats — au sein d'une plateforme unique, vous offrant une visibilité et un contrôle en temps réel.
              </p>
              
              <ul className="sap-highlight__features">
                {sapFeatures.map((feat, i) => (
                  <li key={i} className="sap-highlight__feature">
                    <FiCheckCircle className="sap-highlight__check" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              
              <div className="sap-highlight__actions">
                <Link to="/sap-business-one" className="btn btn-primary btn-lg">
                  Découvrir SAP B1 <FiArrowRight />
                </Link>
                <Link to="/contact?subject=sap-business-one" className="btn btn-accent-glow btn-lg">
                  Demander une Démo
                </Link>
              </div>
            </ScrollReveal>

            {/* Simplified Performance & Result Visual with Floating Cards */}
            <ScrollReveal className="sap-highlight__visual" delay={0.2}>
              <div className="home-sap-visual">
                {/* Card 1: Upward-sloping Growth Line */}
                <motion.div 
                  className="home-sap-card home-sap-card--chart"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="home-sap-card__header">
                    <span className="home-sap-card__label">Progression de la Performance</span>
                    <FiTrendingUp className="home-sap-card__icon text-accent" />
                  </div>
                  <div className="home-sap-card__chart">
                    <svg viewBox="0 0 200 60" className="chart-svg-clean">
                      <defs>
                        <linearGradient id="home-chart-grad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.25"/>
                          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.0"/>
                        </linearGradient>
                      </defs>
                      <path d="M 0 50 Q 40 45 80 25 T 160 15 T 200 5 L 200 60 L 0 60 Z" fill="url(#home-chart-grad)" />
                      <path d="M 0 50 Q 40 45 80 25 T 160 15 T 200 5" fill="none" stroke="var(--accent)" strokeWidth="3.5" strokeLinecap="round" />
                      <circle cx="200" cy="5" r="4.5" fill="var(--white)" stroke="var(--accent)" strokeWidth="3" />
                    </svg>
                  </div>
                </motion.div>

                {/* Card 2: Percentage */}
                <motion.div 
                  className="home-sap-card home-sap-card--stat"
                  animate={{ y: [0, -14, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="home-sap-card__value">+35%</span>
                  <span className="home-sap-card__desc">Efficacité Opérationnelle</span>
                </motion.div>

                {/* Card 3: Checkmark Status */}
                <motion.div 
                  className="home-sap-card home-sap-card--status"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="home-sap-card__status-row">
                    <div className="home-sap-card__status-icon">
                      <FiCheckCircle />
                    </div>
                    <span className="home-sap-card__status-text">Système 100% Intégré</span>
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ====== 6. CLIENT TRUST (TESTIMONIALS SLIDER) ====== */}
      <section className="section trust">
        <div className="container">
          <div className="section-header">
            <span className="section-label">TÉMOIGNAGES</span>
            <h2 className="section-title">Accélérer la Réussite de Nos Clients</h2>
            <p className="section-subtitle">
              De nombreuses entreprises au Maroc et en Afrique font confiance à Merit Consulting Maroc pour la gestion de leurs systèmes d'information critiques.
            </p>
          </div>

          <div className="trust__content">
            {/* Testimonials Slider */}
            <ScrollReveal className="trust__testimonial-wrapper">
              <div className="trust__testimonial">
                <div className="trust__testimonial-nav">
                  <button 
                    onClick={prevTestimonial} 
                    className="testimonial-nav-btn" 
                    aria-label="Previous testimonial"
                  >
                    <FiChevronLeft />
                  </button>
                  <button 
                    onClick={nextTestimonial} 
                    className="testimonial-nav-btn" 
                    aria-label="Next testimonial"
                  >
                    <FiChevronRight />
                  </button>
                </div>
                
                <FiStar className="trust__star" />
                
                <div className="trust__quote-container">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentTestimonial}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -15 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                    >
                      <blockquote className="trust__quote">
                        &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
                      </blockquote>
                      <div className="trust__author">
                        <div className="trust__author-avatar">
                          {testimonials[currentTestimonial].avatar}
                        </div>
                        <div>
                          <div className="trust__author-name">
                            {testimonials[currentTestimonial].author}
                          </div>
                          <div className="trust__author-role">
                            {testimonials[currentTestimonial].role}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="trust__industries" delay={0.2}>
              <h3 className="trust__industries-title">Secteurs d'Activité</h3>
              <div className="trust__tags">
                {clientIndustries.map((ind, i) => (
                  <span className="trust__tag" key={i}>{ind}</span>
                ))}
              </div>
              <div className="trust__indicators">
                <div className="trust__indicator">
                  <FiShield className="trust__indicator-icon" />
                  <span>Processus Conformes ISO 9001</span>
                </div>
                <div className="trust__indicator">
                  <FiAward className="trust__indicator-icon" />
                  <span>Expert en solutions SAP</span>
                </div>
                <div className="trust__indicator">
                  <FiGlobe className="trust__indicator-icon" />
                  <span>Présence Panafricaine</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ====== TECHNOLOGY PARTNERS BAR ====== */}
      <section className="partner-bar">
        <div className="container partner-bar__container">
          <div className="partner-bar__title">PARTENAIRES</div>
          <div className="partner-bar__logos">
            <div className="partner-logo-item">
              <img src={sapB1Logo} alt="SAP Business One" />
            </div>
            <div className="partner-logo-item">
              <img src={sqlServerLogo} alt="Microsoft SQL Server" />
            </div>
            <div className="partner-logo-item">
              <img src={sapHanaLogo} alt="SAP HANA" />
            </div>
            <div className="partner-logo-item">
              <img src={crystalLogo} alt="Crystal Reports" />
            </div>
          </div>
        </div>
      </section>

      {/* ====== CLIENTS LOGO BAR ====== */}
      <section className="client-bar">
        <div className="container client-bar__container">
          <div className="client-bar__title">ILS NOUS FONT CONFIANCE</div>
          <div className="client-bar__logos">
            <div className="client-logo-item">
              <img src={jaoudaLogo} alt="Jaouda" />
            </div>
            <div className="client-logo-item">
              <img src={oniLogo} alt="ONI" />
            </div>
            <div className="client-logo-item">
              <img src={dandyLogo} alt="Dandy" />
            </div>
            <div className="client-logo-item">
              <img src={samsungLogo} alt="Samsung" />
            </div>
            <div className="client-logo-item">
              <img src={engieLogo} alt="Engie" />
            </div>
            <div className="client-logo-item">
              <img src={cimrLogo} alt="CIMR" />
            </div>
            <div className="client-logo-item">
              <img src={s2mLogo} alt="S2M" />
            </div>
            <div className="client-logo-item">
              <img src={zalaghLogo} alt="Zalagh Holding" />
            </div>
          </div>
        </div>
      </section>

      {/* ====== 7. CONTACT CTA ====== */}
      <section className="cta">
        <div className="cta__pattern" aria-hidden="true" />
        <div className="container cta__container">
          <ScrollReveal>
            <h2 className="cta__title">Prêt à Transformer Votre Entreprise ?</h2>
            <p className="cta__subtitle">
              Échangeons sur la manière dont Merit Consulting Maroc peut vous aider à atteindre vos objectifs de transformation digitale.
            </p>
            <div className="cta__actions">
              <Link to="/contact" className="btn btn-accent btn-lg">
                Planifier une Consultation <FiArrowRight />
              </Link>
              <Link to="/contact" className="btn btn-outline btn-lg">
                Commencer
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
