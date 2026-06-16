import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiSend,
  FiLinkedin,
  FiFacebook,
  FiCheckCircle,
  FiMap,
} from 'react-icons/fi'
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal'
import './Contact.css'

const subjectOptions = [
  { value: '', label: 'Sélectionnez un sujet' },
  { value: 'sap-business-one', label: 'SAP Business One' },
  { value: 'erp-consulting', label: 'Conseil ERP' },
  { value: 'software-development', label: 'Développement Logiciel' },
  { value: 'technical-support', label: 'Support Technique' },
  { value: 'training', label: 'Formation' },
  { value: 'other', label: 'Autre' },
]

const contactDetails = [
  {
    icon: <FiMapPin />,
    label: 'Adresse',
    value: '193 Avenue Hassan II, Casablanca 20140',
  },
  {
    icon: <FiPhone />,
    label: 'Téléphone',
    value: '+212 522 26 41 75',
    href: 'tel:+212522264175',
  },
  {
    icon: <FiMail />,
    label: 'E-mail',
    value: 'merit@merit.ma',
    href: 'mailto:merit@merit.ma',
  },
  {
    icon: <FiClock />,
    label: 'Heures de travail',
    value: 'Lundi - Vendredi : 9h00 - 17h00',
  },
]

const socialLinks = [
  { icon: <FiLinkedin />, href: 'https://www.linkedin.com/company/merit-sa/', label: 'LinkedIn' },
  { icon: <FiFacebook />, href: 'https://www.facebook.com/people/MERIT-SAP-consulting/100063140834548/', label: 'Facebook' },
]

const initialFormState = {
  fullName: '',
  email: '',
  phone: '',
  company: '',
  subject: '',
  message: '',
}

function Contact() {
  const location = useLocation()
  const [formData, setFormData] = useState(initialFormState)
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    document.title = "Contactez Nos Experts | Merit Consulting Maroc";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Contactez l'équipe de Merit Consulting Maroc pour planifier une démonstration de SAP Business One ou discuter de votre projet de transformation digitale.");
    }
  }, []);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const subjectParam = queryParams.get('subject')
    if (subjectParam && subjectOptions.some(opt => opt.value === subjectParam)) {
      setFormData((prev) => ({ ...prev, subject: subjectParam }))
    }
  }, [location.search])

  const validate = () => {
    const newErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Le nom complet est obligatoire'
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'adresse e-mail est obligatoire"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Veuillez saisir une adresse e-mail valide"
    }

    if (formData.phone && !/^[+]?[\d\s()-]{7,}$/.test(formData.phone)) {
      newErrors.phone = "Veuillez saisir un numéro de téléphone valide"
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Le message est obligatoire'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData(initialFormState)
    }, 1500)
  }

  const handleReset = () => {
    setIsSubmitted(false)
    setErrors({})
  }

  return (
    <div className="contact-page">
      {/* ===== Hero Banner (Minimalist Light) ===== */}
      <section className="contact-hero">
        <div className="contact-hero__bg-pattern" />
        <div className="contact-hero__container container">
          <div className="contact-hero__left">
            <h1 className="contact-hero__title">Contactez Nos Experts</h1>
            <p className="contact-hero__subtitle">
              Discutez avec nos consultants pour évaluer votre projet et découvrir comment nous pouvons accélérer votre transformation digitale.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Contact Content ===== */}
      <section className="contact-content section">
        <div className="container contact-content__grid">
          {/* Left Column — Form */}
          <ScrollReveal className="contact-form-reveal" direction="right">
            <div className="contact-form-wrapper">
              {isSubmitted ? (
                <div className="contact-form__success">
                  <div className="contact-form__success-icon">
                    <FiCheckCircle />
                  </div>
                  <h3 className="contact-form__success-title">Message Envoyé !</h3>
                  <p className="contact-form__success-text">
                    Merci de nous avoir contactés. Notre équipe vous répondra sous 24 heures.
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={handleReset}
                    type="button"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="contact-form__title">Envoyez-nous un Message</h2>
                  <form
                    className="contact-form"
                    onSubmit={handleSubmit}
                    noValidate
                  >
                    {/* Full Name */}
                    <div
                      className={`form-group ${errors.fullName ? 'form-group--error' : ''}`}
                    >
                      <label htmlFor="fullName" className="form-label">
                        Nom Complet <span className="form-required">*</span>
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        className="form-input"
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                      {errors.fullName && (
                        <span className="form-error">{errors.fullName}</span>
                      )}
                    </div>

                    {/* Email & Phone Row */}
                    <div className="form-row">
                      <div
                        className={`form-group ${errors.email ? 'form-group--error' : ''}`}
                      >
                        <label htmlFor="email" className="form-label">
                          Adresse E-mail <span className="form-required">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          className="form-input"
                          placeholder="votre@email.com"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {errors.email && (
                          <span className="form-error">{errors.email}</span>
                        )}
                      </div>

                      <div
                        className={`form-group ${errors.phone ? 'form-group--error' : ''}`}
                      >
                        <label htmlFor="phone" className="form-label">
                          Numéro de Téléphone
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          className="form-input"
                          placeholder="+212 6 00 00 00 00"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                        {errors.phone && (
                          <span className="form-error">{errors.phone}</span>
                        )}
                      </div>
                    </div>

                    {/* Company & Subject Row */}
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="company" className="form-label">
                          Nom de l'Entreprise
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          className="form-input"
                          placeholder="Votre Entreprise"
                          value={formData.company}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="subject" className="form-label">
                          Sujet
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          className="form-input form-select"
                          value={formData.subject}
                          onChange={handleChange}
                        >
                          {subjectOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div
                      className={`form-group ${errors.message ? 'form-group--error' : ''}`}
                    >
                      <label htmlFor="message" className="form-label">
                        Message <span className="form-required">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="form-input form-textarea"
                        placeholder="Parlez-nous de votre projet ou de votre besoin..."
                        rows="6"
                        value={formData.message}
                        onChange={handleChange}
                      />
                      {errors.message && (
                        <span className="form-error">{errors.message}</span>
                      )}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className={`btn btn-primary contact-form__submit ${isSubmitting ? 'contact-form__submit--loading' : ''}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="contact-form__spinner" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <FiSend />
                          Envoyer le Message
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </ScrollReveal>

          {/* Right Column — Contact Info Cards */}
          <ScrollReveal className="contact-info-reveal" direction="left" delay={0.15}>
            <div className="contact-info">
              <h3 className="contact-info__heading">Informations de Contact</h3>
              <p className="contact-info__desc">
                Des questions ? Contactez-nous par l'un des moyens ci-dessous.
              </p>

              <div className="contact-info__cards">
                {contactDetails.map((item) => (
                  <div key={item.label} className="contact-info__detail-card">
                    <span className="contact-info__detail-icon">{item.icon}</span>
                    <div className="contact-info__detail-content">
                      <span className="contact-info__detail-label">
                        {item.label}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="contact-info__detail-value contact-info__detail-link"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="contact-info__detail-value">
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links & Promise */}
              <div className="contact-info__footer-card">
                <div className="contact-info__social">
                  <h4 className="contact-info__social-label">Suivez-nous</h4>
                  <div className="contact-info__social-links">
                    {socialLinks.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        className="contact-info__social-link"
                        aria-label={s.label}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="contact-info__promise">
                  <FiCheckCircle className="contact-info__promise-icon" />
                  <span>Réponse sous 24 heures en moyenne</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== Google Maps Integration (Full-width) ===== */}
      <section className="contact-map">
        <div className="contact-map__fullwidth">
          <iframe
            src="https://maps.google.com/maps?q=33.5835393,-7.6232254&z=19&output=embed"
            width="100%"
            height="450"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Plan d'accès Merit Consulting Casablanca"
          />
        </div>
      </section>
    </div>
  )
}

export default Contact
