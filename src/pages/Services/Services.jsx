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
    title: 'SAP Business One Implementation',
    description:
      'End-to-end SAP Business One implementation tailored to your business needs. From initial assessment to go-live and beyond, we ensure a smooth transition to SAP.',
    benefits: ['Streamlined operations', 'Real-time insights', 'Scalable growth'],
    technologies: ['SAP Business One', 'SAP HANA', 'Crystal Reports'],
  },
  {
    id: 2,
    icon: <FiBarChart2 />,
    title: 'ERP Consulting',
    description:
      'Strategic ERP consulting to help you choose, plan, and execute the right enterprise solution. Our consultants analyze your processes and recommend optimal configurations.',
    benefits: ['Process optimization', 'Cost reduction', 'Data-driven decisions'],
    technologies: ['SAP Business One', 'Business Intelligence', 'Process Mapping'],
  },
  {
    id: 3,
    icon: <FiCode />,
    title: 'Software Development',
    description:
      'Custom software development to address unique business requirements. We build robust, scalable applications that integrate seamlessly with your existing systems.',
    benefits: ['Custom solutions', 'API integration', 'Modern architecture'],
    technologies: ['Web Applications', 'Mobile Apps', 'Cloud Solutions'],
  },
  {
    id: 4,
    icon: <FiLink />,
    title: 'Custom Integrations',
    description:
      'Seamless integration between SAP Business One and third-party systems. We connect your ERP with e-commerce platforms, CRM systems, and industry-specific tools.',
    benefits: ['Unified data flow', 'Automation', 'Reduced manual work'],
    technologies: ['REST APIs', 'SAP Integration Framework', 'ETL Tools'],
  },
  {
    id: 5,
    icon: <FiLifeBuoy />,
    title: 'Technical Support',
    description:
      'Reliable technical support and maintenance services to keep your systems running at peak performance. Our team is available to resolve issues quickly and efficiently.',
    benefits: ['24/7 monitoring', 'Quick resolution', 'Preventive maintenance'],
    technologies: ['Remote Support', 'System Monitoring', 'Performance Tuning'],
  },
  {
    id: 6,
    icon: <FiBookOpen />,
    title: 'User Training',
    description:
      'Comprehensive training programs to ensure your team maximizes the value of your technology investments. From basic operations to advanced features.',
    benefits: ['Increased productivity', 'User adoption', 'Reduced errors'],
    technologies: ['Hands-on workshops', 'Online training', 'Documentation'],
  },
];

const processSteps = [
  {
    number: '01',
    icon: <FiSearch />,
    title: 'Discovery & Analysis',
    description:
      'We assess your current systems and understand your business objectives',
  },
  {
    number: '02',
    icon: <FiLayout />,
    title: 'Planning & Design',
    description:
      'We architect the optimal solution and create a detailed implementation roadmap',
  },
  {
    number: '03',
    icon: <FiSettings />,
    title: 'Implementation & Testing',
    description:
      'We configure, customize, and thoroughly test every aspect of your solution',
  },
  {
    number: '04',
    icon: <FiHeadphones />,
    title: 'Support & Optimization',
    description:
      'We provide ongoing support and continuously optimize your systems',
  },
];

function Services() {
  const location = useLocation();
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
            <h1 className="services-hero__title">Our Services</h1>
            <p className="services-hero__subtitle">
              Comprehensive solutions to accelerate your digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid section">
        <div className="services-grid__container container">
          <ScrollReveal className="services-grid__header">
            <span className="services-grid__label">What We Offer</span>
            <h2 className="services-grid__title">
              End-to-End Technology Solutions
            </h2>
            <p className="services-grid__description">
              From implementation to ongoing support, we provide comprehensive
              services to help your business thrive in the digital age.
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
                            Key Benefits
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
            <span className="services-process__label">How We Work</span>
            <h2 className="services-process__title">Our Proven Methodology</h2>
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
            <h2 className="services-cta__title">Need a Custom Solution?</h2>
            <p className="services-cta__text">
              Let our experts help you find the right technology solution for
              your business.
            </p>
            <Link to="/contact" className="services-cta__button btn btn-accent btn-lg">
              Schedule a Consultation
              <FiArrowRight className="services-cta__button-icon" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

export default Services;
