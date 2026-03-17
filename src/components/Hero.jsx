import styles from './Hero.module.css'

export default function Hero({ data }) {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.badge}>
        <span className={styles.dot}></span>
        {data.badge}
      </div>
      <h1>{data.title.split('with')[0]}<em>{data.title.includes('Cloud Speed') ? 'Cloud Speed' : (data.title.includes('Enterprise Power') ? 'Enterprise Power' : 'Confidence')}</em> {data.title.split(/Cloud Speed|Enterprise Power|Confidence/)[1]}</h1>
      <p className={styles.subtitle}>{data.subtitle}</p>
      <div className={styles.ctaRow}>
        <button
          className={styles.btnPrimary}
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
        >
          Get In Touch
        </button>
        <button
          className={styles.btnGhost}
          onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
        >
          See Features
        </button>
      </div>
    </section>
  )
}
