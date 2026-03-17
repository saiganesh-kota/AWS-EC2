import styles from './AdminDashboard.module.css'

const STATUSES = [
  { name: 'EC2 Instance (us-east-1)', status: 'Operational', type: 'ok' },
  { name: 'Nginx Web Server',         status: 'Running',     type: 'ok' },
  { name: 'RDS PostgreSQL',           status: 'Healthy',     type: 'ok' },
  { name: 'CloudFront CDN',           status: 'Degraded',    type: 'warn' },
  { name: 'S3 Bucket Storage',        status: 'Available',   type: 'ok' },
  { name: 'Lambda (ap-south-1)',      status: 'Down',        type: 'down' },
]

export default function AdminDashboard({ messages, data }) {
  return (
    <section id="admin" className={styles.section}>
      <p className={styles.sectionLabel}>{data.label}</p>
      <h2 className={styles.sectionTitle}>{data.title}</h2>
      <p className={styles.sectionSub}>{data.sub}</p>

      <div className={styles.dashboard}>
        {/* Messages */}
        <div className={styles.card} style={{ animation: 'fadeIn 0.8s ease-out 0.2s both' }}>
          <h4 className={styles.cardTitle}>Recent Messages</h4>
          {messages.map((m, i) => (
            <div key={i} className={styles.msgItem} style={{ animation: `fadeIn 0.5s ease-out ${0.4 + (i * 0.1)}s both` }}>
              <div className={styles.avatar} style={{ background: m.avatarBg, color: m.avatarColor }}>
                {m.initials}
              </div>
              <div className={styles.msgBody}>
                <div className={styles.msgName}>{m.name}</div>
                <div className={styles.msgPreview}>{m.preview}</div>
              </div>
              <span className={styles.msgTime}>{m.time}</span>
            </div>
          ))}
        </div>

        {/* System Status */}
        <div className={styles.card} style={{ animation: 'fadeIn 0.8s ease-out 0.4s both' }}>
          <h4 className={styles.cardTitle}>System Status</h4>
          {data.statuses.map((s, i) => (
            <div key={s.name} className={styles.statusRow} style={{ animation: `fadeIn 0.5s ease-out ${0.6 + (i * 0.05)}s both` }}>
              <span className={`${styles.statusDot} ${styles[`dot_${s.type}`]}`} style={{ animation: s.type === 'ok' ? 'glowPulse 2s infinite' : 'none' }} />
              <span className={styles.statusName}>{s.name}</span>
              <span className={`${styles.badge} ${styles[`badge_${s.type}`]}`}>{s.status}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
