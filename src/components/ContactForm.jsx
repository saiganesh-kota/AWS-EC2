import { useState } from 'react'
import styles from './ContactForm.module.css'

const SUBJECTS = ['AWS Infrastructure', 'Security Audit', 'Performance Optimization', 'CI/CD Setup', 'General Inquiry']

export default function ContactForm({ onMessageSent }) {
  const [form, setForm] = useState({ fname: '', lname: '', email: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setError('')
  }

  const handleSubmit = () => {
    if (!form.fname || !form.email || !form.message) {
      setError('Please fill in your name, email, and message.')
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSent(true)
      onMessageSent({
        initials: (form.fname[0] + (form.lname[0] || '?')).toUpperCase(),
        avatarBg: 'rgba(0,212,255,0.15)',
        avatarColor: 'var(--accent)',
        name: `${form.fname} ${form.lname}`.trim(),
        preview: form.message.slice(0, 60) + (form.message.length > 60 ? '…' : ''),
        time: 'just now',
      })
    }, 1200)
  }

  return (
    <section id="contact" className={styles.section}>
      <p className={styles.sectionLabel}>// Get In Touch</p>
      <div className={styles.wrap}>
        <div className={styles.info}>
          <h3>Let's Build Something Together</h3>
          <p>Have a cloud project or infrastructure challenge? We'd love to hear about it. Reach out and we'll get back to you within 24 hours.</p>
          <div className={styles.detail}><span>✉</span><span>hello@cloudshowcase.io</span></div>
          <div className={styles.detail}><span>📍</span><span>Mangalagiri, Andhra Pradesh, India</span></div>
          <div className={styles.detail}><span>🕐</span><span>Mon–Fri, 9am–6pm IST</span></div>
        </div>

        <div className={styles.formCard}>
          <div className={styles.formRow}>
            <div className={styles.group}>
              <label>First Name</label>
              <input name="fname" placeholder="Arun" value={form.fname} onChange={handleChange} disabled={sent} />
            </div>
            <div className={styles.group}>
              <label>Last Name</label>
              <input name="lname" placeholder="Reddy" value={form.lname} onChange={handleChange} disabled={sent} />
            </div>
          </div>
          <div className={styles.group}>
            <label>Email Address</label>
            <input name="email" type="email" placeholder="arun@company.com" value={form.email} onChange={handleChange} disabled={sent} />
          </div>
          <div className={styles.group}>
            <label>Subject</label>
            <select name="subject" value={form.subject} onChange={handleChange} disabled={sent}>
              <option value="">Choose a topic…</option>
              {SUBJECTS.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div className={styles.group}>
            <label>Message</label>
            <textarea name="message" placeholder="Tell us about your project…" value={form.message} onChange={handleChange} disabled={sent} />
          </div>

          {error && <p className={styles.error}>{error}</p>}

          {!sent && (
            <button className={styles.submit} onClick={handleSubmit} disabled={loading}>
              {loading ? 'Sending…' : 'Send Message'}
            </button>
          )}

          {sent && (
            <div className={styles.success}>
              ✓ Message sent! We'll get back to you within 24 hours.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
