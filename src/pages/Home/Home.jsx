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
import './Home.css';

/* ── Data ─────────────────────────────────────────────────── */
const keyFigures = [
  { end: 40, suffix: '', label: 'Years of Expertise', desc: 'Delivering world-class consulting since 1986.', icon: FiAward },
  { end: 24, suffix: '', label: 'Years with SAP', desc: 'Specialized SAP Business One implementations.', icon: FiLayers },
  { end: 80, suffix: '+', label: 'Clients Supported', desc: 'Empowering businesses of every size.', icon: FiUsers },
  { end: 1000, suffix: '+', label: 'Active Users', desc: 'Professionals using our solutions daily.', icon: FiMonitor },
];

const services = [
  { 
    icon: FiDatabase, 
    title: 'SAP Business One Implementation', 
    desc: 'End-to-end SAP B1 deployment tailored to your business processes and growth objectives.', 
    highlight: true, 
    link: '/sap-business-one' 
  },
  { 
    icon: FiBarChart2, 
    title: 'ERP Consulting', 
    desc: 'Strategic ERP advisory services to optimize operations, reduce costs, and drive efficiency.', 
    link: '/services#erp-consulting' 
  },
  { 
    icon: FiCode, 
    title: 'Software Development', 
    desc: 'Custom software solutions built with modern technologies to address unique business challenges.', 
    link: '/services#software-development' 
  },
  { 
    icon: FiLink, 
    title: 'Custom Integrations', 
    desc: 'Seamless integration of your existing systems with SAP and third-party applications.', 
    link: '/services#custom-integrations' 
  },
  { 
    icon: FiLifeBuoy, 
    title: 'Technical Support', 
    desc: 'Responsive 24/7 technical assistance ensuring your systems run smoothly at all times.', 
    link: '/services#technical-support' 
  },
  { 
    icon: FiBookOpen, 
    title: 'User Training', 
    desc: 'Comprehensive training programs to maximize user adoption and system ROI.', 
    link: '/services#user-training' 
  },
];

const sapFeatures = [
  'Financial Management & Accounting',
  'Sales & Customer Management',
  'Purchasing & Inventory Control',
  'Production & MRP Planning',
  'Business Intelligence & Reporting',
  'Multi-currency & Multi-language Support',
];

const clientIndustries = [
  'Manufacturing',
  'Distribution',
  'Retail',
  'Services',
  'Construction',
  'Healthcare',
  'Logistics',
  'Agriculture',
];

const testimonials = [
  {
    quote: "Merit Consulting Maroc transformed our entire operation with SAP Business One. Their expertise, professionalism, and dedication to our success made all the difference. We saw a 35% improvement in operational efficiency within the first year.",
    author: "Managing Director",
    role: "Leading Manufacturing Company, Casablanca",
    avatar: "MC"
  },
  {
    quote: "The custom integrations developed by Merit Consulting connected our CRM, warehouse systems, and SAP Business One perfectly. Manual entry error was reduced by over 90%, speeding up our order dispatch operations.",
    author: "Operations Director",
    role: "Pan-African Distribution Hub, Tangier",
    avatar: "PD"
  },
  {
    quote: "Merit provided an outstanding level of support during our transition. Their consultants understood our local industry requirements and aligned SAP modules exactly to our business workflows.",
    author: "Finance Director",
    role: "Service Sector Enterprise, Rabat",
    avatar: "FE"
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
              Certified SAP Business One Partner
            </motion.span>
            <motion.h1 className="hero__title" variants={heroItemVariants}>
              Digital Transformation and{' '}
              <span className="hero__highlight">SAP Business One</span> Experts
            </motion.h1>
            <motion.p className="hero__subtitle" variants={heroItemVariants}>
              Merit Consulting Maroc empowers businesses with innovative ERP solutions,
              management systems, and digital transformation strategies. Over 40 years
              of expertise at your service.
            </motion.p>
            <motion.div className="hero__actions" variants={heroItemVariants}>
              <Link to="/contact" className="btn btn-accent btn-lg">
                Contact Us
              </Link>
              <Link to="/contact?subject=sap-business-one" className="btn btn-outline btn-lg">
                Request a Demo
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ====== TECHNOLOGY PARTNERS BAR ====== */}
      <section className="partner-bar">
        <div className="container partner-bar__container">
          <span className="partner-bar__title">Technology Partners:</span>
          <div className="partner-bar__logos">
            <span className="partner-logo-item">SAP Gold Partner</span>
            <span className="partner-logo-item">Microsoft SQL Server</span>
            <span className="partner-logo-item">SAP HANA</span>
            <span className="partner-logo-item">SUSE Linux</span>
            <span className="partner-logo-item">Crystal Reports</span>
          </div>
        </div>
      </section>

      {/* ====== 2. ABOUT ====== */}
      <section className="section about">
        <div className="container">
          <div className="about__grid">
            <ScrollReveal className="about__text">
              <span className="section-label">WHO WE ARE</span>
              <h2 className="section-title">Your Trusted Partner in Digital Transformation</h2>
              <p className="about__description">
                Merit Consulting Maroc is a leading IT consultancy specializing in SAP Business One,
                enterprise resource planning, management systems, and bespoke software development.
                We combine deep industry knowledge with cutting-edge technology to help organizations
                streamline operations, boost productivity, and achieve sustainable growth.
              </p>
              <p className="about__description">
                Our multidisciplinary team of consultants, developers, and project managers works
                hand-in-hand with clients to deliver solutions that truly transform businesses—from
                initial strategy through implementation and beyond.
              </p>
            </ScrollReveal>

            <ScrollReveal className="about__visual" delay={0.2} direction="left">
              <div className="about__image-wrapper">
                <img 
                  src={heroCasablanca} 
                  alt="Casablanca Finance City skyline representing Business in Morocco" 
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
            <span className="section-label">OUR IMPACT</span>
            <h2 className="section-title">Key Figures That Speak for Themselves</h2>
            <p className="section-subtitle">
              Numbers that reflect our commitment to excellence and the trust our clients place in us.
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
            <span className="section-label">OUR SERVICES</span>
            <h2 className="section-title">Comprehensive IT Solutions</h2>
            <p className="section-subtitle">
              From implementation to integration, training, and support—we cover the full spectrum
              of your IT needs.
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
                    <span className="services__card-badge">Core Expertise</span>
                  )}
                  <div className="services__card-icon">
                    <svc.icon />
                  </div>
                  <h3 className="services__card-title">{svc.title}</h3>
                  <p className="services__card-desc">{svc.desc}</p>
                  <span className="services__card-link">
                    Learn More <FiArrowRight />
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
              <h2 className="section-title">SAP Business One: Your Growth Engine</h2>
              <p className="sap-highlight__desc">
                SAP Business One is an affordable, easy-to-use ERP solution designed specifically
                for small and medium-sized enterprises (SMEs) experiencing growth. It integrates all core business functions—
                financials, sales, inventory, and procurement—into a single platform, giving you real-time visibility and control.
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
                  Discover SAP B1 <FiArrowRight />
                </Link>
                <Link to="/contact?subject=sap-business-one" className="btn btn-accent-glow btn-lg">
                  Request a Demo
                </Link>
              </div>
            </ScrollReveal>

            {/* Dashboard Mockup/Illustration with Floating Animation */}
            <ScrollReveal className="sap-highlight__visual" delay={0.2}>
              <motion.div 
                className="dashboard-mockup"
                animate={{
                  y: [0, -10, 0]
                }}
                whileHover={{
                  scale: 1.02
                }}
                transition={{
                  y: {
                    duration: 6,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse"
                  },
                  scale: {
                    duration: 0.3,
                    ease: "easeOut"
                  }
                }}
              >
                {/* Mockup Browser Header */}
                <div className="dashboard-mockup__header">
                  <div className="dashboard-mockup__dots">
                    <span className="dot dot--red" />
                    <span className="dot dot--yellow" />
                    <span className="dot dot--green" />
                  </div>
                  <div className="dashboard-mockup__title">SAP B1 Live Portal</div>
                </div>
                
                {/* Mockup Content */}
                <div className="dashboard-mockup__body">
                  <div className="dashboard-mockup__widgets">
                    <div className="widget-card">
                      <div className="widget-card__top">
                        <span className="widget-card__label">Total Revenue</span>
                        <FiDollarSign className="widget-card__icon text-accent" />
                      </div>
                      <div className="widget-card__value">$428.4K</div>
                      <div className="widget-card__growth text-success">+18.2% this month</div>
                    </div>
                    
                    <div className="widget-card">
                      <div className="widget-card__top">
                        <span className="widget-card__label">Active Orders</span>
                        <FiPackage className="widget-card__icon text-primary" />
                      </div>
                      <div className="widget-card__value">148</div>
                      <div className="widget-card__growth text-success">98.5% shipped on time</div>
                    </div>

                    <div className="widget-card widget-card--full">
                      <div className="widget-card__top">
                        <span className="widget-card__label">Operations Growth (HANA Live)</span>
                        <FiTrendingUp className="widget-card__icon text-accent" />
                      </div>
                      {/* Simple SVG Chart */}
                      <div className="widget-card__chart">
                        <svg viewBox="0 0 300 80" className="chart-svg">
                          <defs>
                            <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.4"/>
                              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.0"/>
                            </linearGradient>
                          </defs>
                          <path d="M 0 60 Q 50 20 100 45 T 200 15 T 300 5 L 300 80 L 0 80 Z" fill="url(#chart-grad)" />
                          <path d="M 0 60 Q 50 20 100 45 T 200 15 T 300 5" fill="none" stroke="var(--accent)" strokeWidth="3" />
                          <circle cx="100" cy="45" r="4" fill="var(--primary)" stroke="var(--accent)" strokeWidth="2" />
                          <circle cx="200" cy="15" r="4" fill="var(--primary)" stroke="var(--accent)" strokeWidth="2" />
                          <circle cx="300" cy="5" r="4" fill="var(--primary)" stroke="var(--accent)" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ====== 6. CLIENT TRUST (TESTIMONIALS SLIDER) ====== */}
      <section className="section trust">
        <div className="container">
          <div className="section-header">
            <span className="section-label">TESTIMONIALS</span>
            <h2 className="section-title">Driving Success for Our Clients</h2>
            <p className="section-subtitle">
              Companies across Morocco and beyond rely on Merit Consulting Maroc for their
              most critical business systems.
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
              <h3 className="trust__industries-title">Industries We Serve</h3>
              <div className="trust__tags">
                {clientIndustries.map((ind, i) => (
                  <span className="trust__tag" key={i}>{ind}</span>
                ))}
              </div>
              <div className="trust__indicators">
                <div className="trust__indicator">
                  <FiShield className="trust__indicator-icon" />
                  <span>ISO 9001 Compliant Processes</span>
                </div>
                <div className="trust__indicator">
                  <FiAward className="trust__indicator-icon" />
                  <span>SAP Certified Gold Partner</span>
                </div>
                <div className="trust__indicator">
                  <FiGlobe className="trust__indicator-icon" />
                  <span>Pan-African Reach</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ====== 7. CONTACT CTA ====== */}
      <section className="cta">
        <div className="cta__pattern" aria-hidden="true" />
        <div className="container cta__container">
          <ScrollReveal>
            <h2 className="cta__title">Ready to Transform Your Business?</h2>
            <p className="cta__subtitle">
              Let&apos;s discuss how Merit Consulting Maroc can help you achieve your digital
              transformation goals.
            </p>
            <div className="cta__actions">
              <Link to="/contact" className="btn btn-accent btn-lg">
                Schedule a Consultation <FiArrowRight />
              </Link>
              <Link to="/contact" className="btn btn-outline btn-lg">
                Get Started
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
