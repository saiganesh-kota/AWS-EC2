import styles from './Terminal.module.css'

const LINES = [
  { type: 'cmd', prompt: '$', text: 'ssh -i ~/.ssh/aws-key.pem ubuntu@ec2-54-161-xx.compute.amazonaws.com' },
  { type: 'out', text: 'Welcome to Ubuntu 22.04.3 LTS (GNU/Linux 5.15.0)', color: '#94a3b8' },
  { type: 'out', text: '✓ Connected successfully — region: us-east-1', color: '#10b981' },
  { type: 'cmd', prompt: 'ubuntu@ip-172-31 ~$', text: ' sudo systemctl start nginx' },
  { type: 'out', text: '✓ nginx.service — started successfully', color: '#10b981' },
  { type: 'cmd', prompt: 'ubuntu@ip-172-31 ~$', text: ' sudo systemctl status nginx' },
  { type: 'out', text: '● nginx.service — A high performance web server', color: '#94a3b8' },
  { type: 'out', text: '   Active: active (running) since Mon 2026-03-17 08:42:01 UTC', color: '#10b981' },
]

const STATS = [
  { num: '99.9%', label: 'Uptime SLA' },
  { num: '42ms',  label: 'Avg Latency' },
  { num: '3',     label: 'Availability Zones' },
  { num: '128',   label: 'Requests/sec' },
]

export default function Terminal({ data }) {
  return (
    <section className={styles.section}>
      <p className={styles.sectionLabel}>{data.label}</p>
      <h2 className={styles.sectionTitle}>{data.title}</h2>
      <p className={styles.sectionSub}>{data.sub}</p>

      <div className={styles.terminal} style={{ animation: 'fadeIn 1s ease-out 0.2s both' }}>
        <div className={styles.termHeader}>
          <span className={styles.dotR} />
          <span className={styles.dotY} />
          <span className={styles.dotG} />
          <span className={styles.termTitle}>ubuntu@aws-ec2-prod — bash</span>
        </div>
        <div className={styles.termBody}>
          {data.lines.map((line, i) =>
            line.type === 'cmd' ? (
              <div key={i} className={styles.termLine} style={{ animation: `fadeIn 0.5s ease-out ${0.4 + (i * 0.1)}s both` }}>
                <span className={styles.termPrompt}>{line.prompt}</span>
                <span className={styles.termCmd}>{line.text}</span>
              </div>
            ) : (
              <div key={i} className={styles.termLine} style={{ animation: `fadeIn 0.5s ease-out ${0.4 + (i * 0.1)}s both` }}>
                <span className={styles.termOut} style={{ color: line.color }}>{line.text}</span>
              </div>
            )
          )}
          <div className={styles.termLine} style={{ animation: `fadeIn 0.5s ease-out ${0.4 + (data.lines.length * 0.1)}s both` }}>
            <span className={styles.termPrompt}>root@ip-10-0-1 ~$</span>
            <span className={styles.cursor} />
          </div>
        </div>
      </div>

      <div className={styles.statsRow}>
        {data.stats.map((s, i) => (
          <div key={s.label} className={styles.statCard} style={{ animation: `fadeIn 0.8s ease-out ${0.8 + (i * 0.15)}s both` }}>
            <div className={styles.statNum}>{s.num}</div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
