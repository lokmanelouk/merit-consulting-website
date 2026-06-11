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
  FiTwitter,
  FiCheckCircle,
  FiMap,
} from 'react-icons/fi'
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal'
import './Contact.css'

const subjectOptions = [
  { value: '', label: 'Select a subject' },
  { value: 'sap-business-one', label: 'SAP Business One' },
  { value: 'erp-consulting', label: 'ERP Consulting' },
  { value: 'software-development', label: 'Software Development' },
  { value: 'technical-support', label: 'Technical Support' },
  { value: 'training', label: 'Training' },
  { value: 'other', label: 'Other' },
]

const contactDetails = [
  {
    icon: <FiMapPin />,
    label: 'Address',
    value: 'Casablanca, Morocco',
  },
  {
    icon: <FiPhone />,
    label: 'Phone',
    value: '+212 5XX-XXXXXX',
    href: 'tel:+2125XXXXXXXX',
  },
  {
    icon: <FiMail />,
    label: 'Email',
    value: 'contact@meritconsulting.ma',
    href: 'mailto:contact@meritconsulting.ma',
  },
  {
    icon: <FiClock />,
    label: 'Working Hours',
    value: 'Monday - Friday: 9:00 AM - 6:00 PM',
  },
]

const socialLinks = [
  { icon: <FiLinkedin />, href: '#', label: 'LinkedIn' },
  { icon: <FiFacebook />, href: '#', label: 'Facebook' },
  { icon: <FiTwitter />, href: '#', label: 'Twitter' },
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
    const queryParams = new URLSearchParams(location.search)
    const subjectParam = queryParams.get('subject')
    if (subjectParam && subjectOptions.some(opt => opt.value === subjectParam)) {
      setFormData((prev) => ({ ...prev, subject: subjectParam }))
    }
  }, [location.search])

  const validate = () => {
    const newErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (formData.phone && !/^[+]?[\d\s()-]{7,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
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
            <h1 className="contact-hero__title">Contact Our Experts</h1>
            <p className="contact-hero__subtitle">
              Get in touch with our team to discuss your project and discover how we can accelerate your digital transformation.
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
                  <h3 className="contact-form__success-title">Message Sent!</h3>
                  <p className="contact-form__success-text">
                    Thank you for reaching out. We&rsquo;ll get back to you
                    within 24 hours.
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={handleReset}
                    type="button"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="contact-form__title">Send Us a Message</h2>
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
                        Full Name <span className="form-required">*</span>
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
                          Email Address <span className="form-required">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          className="form-input"
                          placeholder="john@example.com"
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
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          className="form-input"
                          placeholder="+212 6XX-XXXXXX"
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
                          Company Name
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          className="form-input"
                          placeholder="Your Company"
                          value={formData.company}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="subject" className="form-label">
                          Subject
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
                        placeholder="Tell us about your project or inquiry..."
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
                          Sending...
                        </>
                      ) : (
                        <>
                          <FiSend />
                          Send Message
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
              <h3 className="contact-info__heading">Contact Information</h3>
              <p className="contact-info__desc">
                Have questions? Reach out to us through any of the channels below.
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
                  <h4 className="contact-info__social-label">Follow Us</h4>
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
                  <span>We typically respond within 24 hours</span>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106337.89312529815!2d-7.669394665427181!3d33.57240317377546!2m3!1f0!2f0!3f0!2m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca%2C%20Morocco!5e0!3m2!1sen!2s!4v1718118000000!5m2!1sen!2s" 
            width="100%" 
            height="450" 
            style={{ border: 0, filter: 'grayscale(100%) opacity(0.85)' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Merit Consulting Casablanca Office Map"
          />
        </div>
      </section>
    </div>
  )
}

export default Contact
