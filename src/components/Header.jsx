import styles from './Header.module.css'

export default function Header({ currentTopic, onTopicChange }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={() => scrollTo('hero')}>
        cloud<span>/</span>showcase
      </div>
      <div className={styles.topicSwitcher}>
        {['cloud', 'ai', 'security'].map((t) => (
          <button
            key={t}
            className={`${styles.topicBtn} ${currentTopic === t ? styles.active : ''}`}
            onClick={() => onTopicChange(t)}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>
      <nav className={styles.nav}>
        <button onClick={() => scrollTo('features')}>Features</button>
        <button onClick={() => scrollTo('admin')}>Dashboard</button>
        <button onClick={() => scrollTo('contact')}>Contact</button>
      </nav>
    </header>
  )
}
