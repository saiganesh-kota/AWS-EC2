import styles from './Features.module.css'

const FEATURES = [
  { icon: '☁', color: 'blue',   title: 'AWS EC2 Hosting',        desc: 'Deploy on scalable EC2 instances across multiple availability zones with auto-scaling and load balancing built in.' },
  { icon: '🔐', color: 'purple', title: 'Cloud Security',          desc: 'Secure architecture with VPC isolation, IAM roles, encrypted storage, and automated vulnerability scanning.' },
  { icon: '📊', color: 'green',  title: 'Performance Monitoring',  desc: 'Real-time dashboards with CloudWatch metrics, custom alerts, and insights across your entire stack.' },
  { icon: '🚀', color: 'blue',   title: 'CI/CD Pipelines',         desc: 'Automated build, test, and deploy workflows with GitHub Actions and zero-downtime rolling deployments.' },
  { icon: '🗄', color: 'purple', title: 'Managed Databases',       desc: 'RDS PostgreSQL and DynamoDB with automated backups, point-in-time recovery, and read replicas.' },
  { icon: '🌐', color: 'green',  title: 'CDN & Edge Caching',      desc: 'CloudFront distribution with edge caching for static assets, serving global users under 50ms.' },
]

export default function Features({ data }) {
  return (
    <section id="features" className={styles.section}>
      <p className={styles.sectionLabel}>// Platform Features</p>
      <h2 className={styles.sectionTitle}>Everything You Need</h2>
      <p className={styles.sectionSub}>Enterprise-grade tools built for teams that ship fast and scale reliably.</p>
      <div className={styles.grid}>
        {data.map((f) => (
          <div key={f.title} className={styles.card}>
            <div className={`${styles.icon} ${styles[`icon_${f.color}`]}`}>{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
