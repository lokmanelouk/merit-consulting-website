import { useState } from 'react';
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
    title: 'Unified Business Management',
    description:
      'Eliminate data silos and manage all your operations from a single platform. Real-time visibility across departments.',
  },
  {
    icon: <FiTrendingUp />,
    title: 'Scalable Growth',
    description:
      'Start with what you need and add functionality as your business grows. SAP Business One scales with you.',
  },
  {
    icon: <FiZap />,
    title: 'Rapid ROI',
    description:
      'Quick implementation timelines and immediate operational improvements deliver fast return on investment.',
  },
  {
    icon: <FiCloud />,
    title: 'Cloud or On-Premise',
    description:
      'Choose the deployment model that fits your needs. Available as cloud, on-premise, or hybrid solution.',
  },
];

const modules = [
  {
    id: 'sales',
    title: 'Sales',
    icon: <FiTarget />,
    color: '#00B4D8',
    details: [
      'Sales orders & quotations',
      'Delivery management',
      'Invoicing & billing',
      'Sales reports & analytics',
      'Pricing & discount management',
    ],
    description:
      'Streamline your entire sales cycle from quotation to order fulfillment. Track opportunities, manage pricing, and gain full visibility into your sales pipeline.',
  },
  {
    id: 'purchasing',
    title: 'Purchasing',
    icon: <FiShoppingCart />,
    color: '#0096C7',
    details: [
      'Purchase orders & approvals',
      'Goods receipt processing',
      'Accounts payable management',
      'Supplier evaluation',
      'Procurement analytics',
    ],
    description:
      'Optimize your procurement process with automated purchase orders, supplier management, and cost analysis tools that reduce expenses and improve efficiency.',
  },
  {
    id: 'inventory',
    title: 'Inventory',
    icon: <FiPackage />,
    color: '#1E56A0',
    details: [
      'Multi-warehouse management',
      'Real-time stock tracking',
      'Serial & batch management',
      'Inventory valuation',
      'Pick, pack & ship',
    ],
    description:
      'Gain complete control over your inventory with real-time tracking across multiple warehouses. Manage serial numbers, batch tracking, and optimize stock levels.',
  },
  {
    id: 'accounting',
    title: 'Accounting',
    icon: <FiBookOpen />,
    color: '#0A2463',
    details: [
      'General ledger management',
      'Journal entries & postings',
      'Financial reporting & statements',
      'Multi-currency support',
      'Tax compliance & management',
    ],
    description:
      'Maintain accurate financial records with a robust accounting engine. Automate journal entries, generate financial statements, and ensure regulatory compliance.',
  },
  {
    id: 'crm',
    title: 'CRM',
    icon: <FiHeadphones />,
    color: '#0D1B2A',
    details: [
      'Customer management & profiles',
      'Service call tracking',
      'Sales pipeline management',
      'Activity & interaction logs',
      'Customer satisfaction analytics',
    ],
    description:
      'Build stronger customer relationships with integrated CRM capabilities. Track interactions, manage service requests, and nurture your sales pipeline effectively.',
  },
];

const differentiators = [
  { icon: <FiClock />, text: '24 years of SAP experience' },
  { icon: <FiAward />, text: 'Certified SAP Business One consultants' },
  { icon: <FiCheckCircle />, text: '80+ successful implementations' },
  { icon: <FiGlobe />, text: 'Local expertise with global standards' },
  { icon: <FiLayers />, text: 'End-to-end project management' },
  { icon: <FiLifeBuoy />, text: 'Ongoing support and training' },
];

const featureHighlights = [
  'Integrated ERP solution',
  'Real-time analytics & reporting',
  'Mobile access on any device',
  'Cloud & on-premise deployment',
  'Industry-specific add-ons',
  'Scalable architecture',
];

export default function SapBusinessOne() {
  const [activeModule, setActiveModule] = useState('sales');

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
              <FiShield /> Certified SAP Partner
            </span>
            <h1 className="sap-hero__title">SAP Business One</h1>
            <p className="sap-hero__subtitle">
              The Complete ERP Solution for Growing SMEs
            </p>
          </div>
        </div>
      </section>

      {/* ====== 2. What is SAP Business One ====== */}
      <section className="sap-about section">
        <div className="sap-container container">
          <div className="sap-about__grid">
            <ScrollReveal className="sap-about__text" direction="right">
              <span className="sap-section-label">Overview</span>
              <h2 className="sap-section-title">What is SAP Business One?</h2>
              <p className="sap-about__description">
                SAP Business One is an integrated enterprise resource planning
                (ERP) solution designed specifically for small and medium-sized
                enterprises. It provides a single, affordable way to manage your
                entire business – from sales and customer relationships to
                financials and operations.
              </p>
              <p className="sap-about__description">
                As a certified SAP Business One partner, Merit Consulting Maroc
                brings decades of implementation expertise to help you get the
                most out of this powerful platform.
              </p>
              <Link to="/contact" className="sap-about__cta">
                Learn More <FiArrowRight />
              </Link>
            </ScrollReveal>
            
            <ScrollReveal className="sap-about__card" delay={0.2} direction="left">
              <div className="sap-about__card-header">
                <FiBarChart2 />
                <h3>Key Highlights</h3>
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
            <span className="sap-section-label">Advantages</span>
            <h2 className="sap-section-title">
              Why SMEs Choose SAP Business One
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
            <div className="sap-dashboard-mockup">
              <div className="sap-dashboard-mockup__header">
                <div className="sap-dashboard-mockup__dots">
                  <span className="sap-dashboard-mockup__dot sap-dashboard-mockup__dot--red" />
                  <span className="sap-dashboard-mockup__dot sap-dashboard-mockup__dot--yellow" />
                  <span className="sap-dashboard-mockup__dot sap-dashboard-mockup__dot--green" />
                </div>
                <div className="sap-dashboard-mockup__title-bar">SAP Business One - Cockpit Dashboard</div>
                <div className="sap-dashboard-mockup__status">System Active</div>
              </div>
              <div className="sap-dashboard-mockup__body">
                {/* KPIs Row */}
                <div className="sap-dashboard-mockup__kpis">
                  <div className="sap-dashboard-mockup__kpi">
                    <span className="sap-dashboard-mockup__kpi-label">Sales Revenue</span>
                    <span className="sap-dashboard-mockup__kpi-value">€142.5K</span>
                    <span className="sap-dashboard-mockup__kpi-trend sap-dashboard-mockup__kpi-trend--up">+12.4%</span>
                  </div>
                  <div className="sap-dashboard-mockup__kpi">
                    <span className="sap-dashboard-mockup__kpi-label">Active Orders</span>
                    <span className="sap-dashboard-mockup__kpi-value">342</span>
                    <span className="sap-dashboard-mockup__kpi-trend sap-dashboard-mockup__kpi-trend--neutral">Stable</span>
                  </div>
                  <div className="sap-dashboard-mockup__kpi">
                    <span className="sap-dashboard-mockup__kpi-label">Low Stock Items</span>
                    <span className="sap-dashboard-mockup__kpi-value">5</span>
                    <span className="sap-dashboard-mockup__kpi-trend sap-dashboard-mockup__kpi-trend--down">-3%</span>
                  </div>
                </div>
                
                {/* Chart & Activity Row */}
                <div className="sap-dashboard-mockup__content">
                  <div className="sap-dashboard-mockup__chart-panel">
                    <div className="sap-dashboard-mockup__panel-header">Monthly Revenue Performance</div>
                    <div className="sap-dashboard-mockup__chart">
                      <div className="sap-dashboard-mockup__bar" style={{ height: '45%' }}><span>Q1</span></div>
                      <div className="sap-dashboard-mockup__bar" style={{ height: '65%' }}><span>Q2</span></div>
                      <div className="sap-dashboard-mockup__bar sap-dashboard-mockup__bar--active" style={{ height: '90%' }}><span>Q3</span></div>
                      <div className="sap-dashboard-mockup__bar" style={{ height: '75%' }}><span>Q4</span></div>
                    </div>
                  </div>
                  <div className="sap-dashboard-mockup__list-panel">
                    <div className="sap-dashboard-mockup__panel-header">Real-time ERP Activity</div>
                    <div className="sap-dashboard-mockup__list">
                      <div className="sap-dashboard-mockup__list-item">
                        <div className="sap-dashboard-mockup__item-indicator" />
                        <div className="sap-dashboard-mockup__item-details">
                          <span className="sap-dashboard-mockup__item-title">Purchase Order PO-1029</span>
                          <span className="sap-dashboard-mockup__item-time">5 mins ago</span>
                        </div>
                      </div>
                      <div className="sap-dashboard-mockup__list-item">
                        <div className="sap-dashboard-mockup__item-indicator" />
                        <div className="sap-dashboard-mockup__item-details">
                          <span className="sap-dashboard-mockup__item-title">CRM Account Created</span>
                          <span className="sap-dashboard-mockup__item-time">15 mins ago</span>
                        </div>
                      </div>
                      <div className="sap-dashboard-mockup__list-item">
                        <div className="sap-dashboard-mockup__item-indicator" />
                        <div className="sap-dashboard-mockup__item-details">
                          <span className="sap-dashboard-mockup__item-title">Inventory Report Generated</span>
                          <span className="sap-dashboard-mockup__item-time">1 hour ago</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
            <h2 className="sap-section-title">SAP Business One Modules</h2>
            <p className="sap-section-subtitle">
              Explore the core modules that power your business operations.
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
                    {currentModule.title} Module
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
            <span className="sap-section-label">Our Expertise</span>
            <h2 className="sap-section-title">
              Why Choose Merit Consulting Maroc for SAP Business One?
            </h2>
            <p className="sap-section-subtitle">
              Partnering with us means working with a team that combines deep
              SAP knowledge with local market expertise.
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
              Ready to Get Started with SAP Business One?
            </h2>
            <p className="sap-cta__desc">
              Schedule a free consultation with our SAP experts and discover how
              SAP Business One can transform your business.
            </p>
            <div className="sap-cta__actions">
              <Link to="/contact?subject=sap-business-one" className="btn btn-accent btn-lg">
                Request a Demo <FiArrowRight />
              </Link>
              <Link to="/contact?subject=sap-business-one" className="btn btn-outline btn-lg">
                Contact Our SAP Team <FiArrowRight />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
