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
    title: 'Foundational Beginnings', 
    label: 'Merit Consulting was established, focusing on traditional accounting and business management systems.' 
  },
  { 
    year: '2000', 
    title: 'Software Expansion', 
    label: 'Expanded service catalog to include custom software development, relational databases, and IT consulting.' 
  },
  { 
    year: '2010', 
    title: 'SAP Partnership', 
    label: 'Certified as an official SAP Business One partner, establishing a dedicated ERP business unit for SMEs.' 
  },
  { 
    year: '2024', 
    title: 'Cloud Innovation & Africa', 
    label: 'Launched next-generation cloud ERP integrations and digital transformation consulting across Africa.' 
  },
];

const teamMembers = [
  {
    name: 'Ahmed Benali',
    title: 'CEO & Founder',
    bio: 'Over 30 years of experience in IT consulting and enterprise solutions.',
    gradient: 'linear-gradient(135deg, #0A2463, #1E56A0)',
  },
  {
    name: 'Sara El Mansouri',
    title: 'SAP Practice Lead',
    bio: 'SAP certified consultant with 15+ years of implementation experience.',
    gradient: 'linear-gradient(135deg, #0096C7, #00B4D8)',
  },
  {
    name: 'Karim Tazi',
    title: 'Technical Director',
    bio: 'Expert in software architecture and system integration.',
    gradient: 'linear-gradient(135deg, #1E56A0, #00B4D8)',
  },
  {
    name: 'Nadia Alaoui',
    title: 'Client Success Manager',
    bio: 'Dedicated to ensuring exceptional client outcomes and satisfaction.',
    gradient: 'linear-gradient(135deg, #0A2463, #0096C7)',
  },
];

const values = ['Innovation', 'Integrity', 'Excellence', 'Partnership', 'Commitment'];

export default function About() {
  return (
    <div className="about-page">
      {/* ── Hero Banner ── */}
      <section className="about-hero">
        <div className="about-hero__bg-pattern" />
        <div className="about-hero__container container">
          <div className="about-hero__left">
            <h1 className="about-hero__title">About Merit Consulting Maroc</h1>
            <p className="about-hero__subtitle">
              Decades of experience helping Moroccan businesses evolve.
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
                      <span className="about-hero__glass-stat">40 Years</span>
                      <span className="about-hero__glass-tag">of innovation</span>
                    </div>
                    <div className="about-hero__glass-footer">
                      <span className="about-hero__glass-cert">SAP Certified</span>
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
            <h2 className="section-label">Who We Are</h2>
            <h3 className="section-heading">A Trusted Leader in ERP Consulting</h3>
            <p className="about-presentation__paragraph">
              Founded with a vision to empower Moroccan and African businesses through
              cutting-edge technology solutions, Merit Consulting Maroc has grown into a
              trusted leader in ERP consulting and digital transformation.
            </p>
            <p className="about-presentation__paragraph">
              With over 40 years of expertise in management systems and 24 years of SAP
              specialization, we bring unparalleled knowledge and experience to every
              project.
            </p>
            <p className="about-presentation__paragraph">
              Our deep understanding of local business needs, combined with global SAP
              expertise, makes us the ideal partner for companies looking to streamline
              operations and accelerate growth.
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
            <h3>Our Mission</h3>
            <p>
              To empower businesses with innovative technology solutions that drive
              operational excellence, sustainable growth, and competitive advantage in
              the digital era.
            </p>
          </ScrollReveal>

          <ScrollReveal className="about-mvv__card" delay={0.1}>
            <div className="about-mvv__icon">
              <FiEye />
            </div>
            <h3>Our Vision</h3>
            <p>
              To be the leading digital transformation partner in Morocco and Africa,
              recognized for our expertise, reliability, and commitment to client
              success.
            </p>
          </ScrollReveal>

          <ScrollReveal className="about-mvv__card" delay={0.2}>
            <div className="about-mvv__icon">
              <FiHeart />
            </div>
            <h3>Our Values</h3>
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
            <h2 className="section-label">Our Journey</h2>
            <h3 className="section-heading">40 Years of Historical Progression</h3>
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
            <h2 className="section-label">Our Leadership</h2>
            <p className="about-team__subtitle">
              Meet the executive profiles driving Merit Consulting Maroc forward
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
            <h2>Join the companies that trust Merit Consulting Maroc</h2>
            <Link to="/contact" className="about-cta__button">
              Get in Touch <FiArrowRight />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
