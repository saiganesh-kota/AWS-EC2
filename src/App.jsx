import { useState, useMemo } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Terminal from './components/Terminal'
import Features from './components/Features'
import AdminDashboard from './components/AdminDashboard'
import ContactForm from './components/ContactForm'

const TOPIC_DATA = {
  cloud: {
    hero: {
      badge: 'All systems operational',
      title: 'Deploy Apps at Cloud Speed with Confidence',
      subtitle: 'A production-grade cloud infrastructure showcase — AWS hosting, enterprise security, and real-time performance monitoring.'
    },
    features: [
      { icon: '☁', color: 'blue',   title: 'AWS EC2 Hosting',        desc: 'Deploy on scalable EC2 instances across multiple availability zones.' },
      { icon: '🔐', color: 'purple', title: 'Cloud Security',          desc: 'Secure architecture with VPC isolation and IAM roles.' },
      { icon: '📊', color: 'green',  title: 'Performance Monitoring',  desc: 'Real-time dashboards with CloudWatch metrics.' },
      { icon: '🚀', color: 'blue',   title: 'CI/CD Pipelines',         desc: 'Automated build and deploy workflows with GitHub Actions.' },
      { icon: '🗄', color: 'purple', title: 'Managed Databases',       desc: 'RDS PostgreSQL with automated backups.' },
      { icon: '🌐', color: 'green',  title: 'CDN & Edge Caching',      desc: 'CloudFront distribution for global users under 50ms.' },
    ],
    terminal: {
      label: '// Live Console',
      title: 'Infrastructure in Action',
      sub: 'Real SSH session connecting to AWS EC2 with Nginx deployment.',
      lines: [
        { type: 'cmd', prompt: '$', text: 'ssh -i ~/.ssh/aws-key.pem ubuntu@ec2-54-161-xx.amazonaws.com' },
        { type: 'out', text: 'Welcome to Ubuntu 22.04.3 LTS (GNU/Linux 5.15.0)', color: '#94a3b8' },
        { type: 'out', text: '✓ Connected successfully — region: us-east-1', color: '#10b981' },
        { type: 'cmd', prompt: 'ubuntu@ip-172-31 ~$', text: ' sudo systemctl start nginx' },
        { type: 'out', text: '✓ nginx.service — started successfully', color: '#10b981' },
      ],
      stats: [
        { num: '99.9%', label: 'Uptime SLA' },
        { num: '42ms',  label: 'Avg Latency' },
        { num: '3',     label: 'Availability Zones' },
        { num: '128',   label: 'Requests/sec' },
      ]
    },
    dashboard: {
      label: '// Admin Panel',
      title: 'Control Center',
      sub: 'Monitor messages, system status, and infrastructure health.',
      statuses: [
        { name: 'EC2 Instance (us-east-1)', status: 'Operational', type: 'ok' },
        { name: 'Nginx Web Server',         status: 'Running',     type: 'ok' },
        { name: 'RDS PostgreSQL',           status: 'Healthy',     type: 'ok' },
        { name: 'CloudFront CDN',           status: 'Degraded',    type: 'warn' },
        { name: 'Lambda (ap-south-1)',      status: 'Down',        type: 'down' },
      ]
    }
  },
  ai: {
    hero: {
      badge: 'Models Training Live',
      title: 'Scale AI Intelligence with Enterprise Power',
      subtitle: 'Build, train, and deploy large language models on high-performance GPU clusters with distributed computing.'
    },
    features: [
      { icon: '🧠', color: 'blue',   title: 'GPU Clusters',           desc: 'Access NVIDIA H100 GPU clusters for lightning-fast model training.' },
      { icon: '🧬', color: 'purple', title: 'Neural Architecture',     desc: 'Design and optimize deep learning layers with built-in visualization tools.' },
      { icon: '📊', color: 'green',  title: 'Inference Engine',        desc: 'High-throughput, low-latency API endpoints for global model serving.' },
      { icon: '🤖', color: 'blue',   title: 'Auto-ML Ops',             desc: 'Automated hyperparameter tuning and model versioning pipelines.' },
      { icon: '💾', color: 'purple', title: 'Vector Databases',        desc: 'Highly efficient similarity search with Pinecone and Weaviate integration.' },
      { icon: '📡', color: 'green',  title: 'Edge Intelligence',       desc: 'Quantize and deploy models directly to edge devices and mobile.' },
    ],
    terminal: {
      label: '// ML Training Log',
      title: 'Real-time Training',
      sub: 'Live output from a distributed Transformer model training session.',
      lines: [
        { type: 'cmd', prompt: '>>>', text: 'python train.py --model transformer-v4 --gpus 8 --batch-size 128' },
        { type: 'out', text: 'Initializing distributed training on 8x H100 GPUs...', color: '#94a3b8' },
        { type: 'out', text: 'Epoch 1/50 [████████░░░░░░] 62% — Loss: 0.421 | Accuracy: 89.2%', color: '#00d4ff' },
        { type: 'out', text: 'Checkpoint saved at: /models/transformer_v4_epoch1.pt', color: '#10b981' },
        { type: 'cmd', prompt: '>>>', text: 'nvidia-smi' },
        { type: 'out', text: 'GPU Memory: 72GB/80GB (90%) | Temp: 68°C', color: '#f59e0b' },
      ],
      stats: [
        { num: '8.4T', label: 'Params Scale' },
        { num: '12ms',  label: 'Token Latency' },
        { num: '8',     label: 'H100 Nodes' },
        { num: '92%',   label: 'Model Accuracy' },
      ]
    },
    dashboard: {
      label: '// AI Ops Panel',
      title: 'Inference Hub',
      sub: 'Scale deployments and monitor model performance metrics.',
      statuses: [
        { name: 'Inference API (Global)',   status: 'Operational', type: 'ok' },
        { name: 'Training Cluster Node-A',  status: 'Heavy Load',  type: 'warn' },
        { name: 'Vector DB (Production)',  status: 'Healthy',     type: 'ok' },
        { name: 'Model Evaluator',         status: 'Running',     type: 'ok' },
        { name: 'HuggingFace Gateway',     status: 'Unstable',    type: 'down' },
      ]
    }
  },
  security: {
    hero: {
      badge: 'Zero Threats Detected',
      title: 'Fortify Your Digital Fortress with Zero-Trust',
      subtitle: 'Enterprise-grade cybersecurity monitoring, automated threat response, and advanced identity protection.'
    },
    features: [
      { icon: '🛡', color: 'blue',   title: 'Threat Detection',       desc: 'AI-driven anomaly detection identifying zero-day exploits in real-time.' },
      { icon: '🔑', color: 'purple', title: 'Identity Vault',         desc: 'Advanced MFA and biometric authentication with zero-knowledge proofs.' },
      { icon: '📡', color: 'green',  title: 'Network Guard',          desc: 'Automated firewall orchestration and malicious traffic filtering.' },
      { icon: '👁', color: 'blue',   title: 'Security Audit',         desc: 'Continuous compliance monitoring and automated vulnerability reports.' },
      { icon: '🔐', color: 'purple', title: 'Data Encryption',        desc: 'Military-grade AES-256 encryption for both at-rest and in-transit data.' },
      { icon: '🚨', color: 'green',  title: 'Incident Response',      desc: 'Automated isolation of compromised assets and forensic logging.' },
    ],
    terminal: {
      label: '// Security Log',
      title: 'Threat Intel Feed',
      sub: 'Scanning network traffic and blocking unauthorized access attempts.',
      lines: [
        { type: 'cmd', prompt: 'auditd@ip-10-0-1 ~$', text: 'grep "FAILED" /var/log/auth.log | tail -n 5' },
        { type: 'out', text: 'Failed password for invalid user admin from 185.12.x.x port 44321 ssh2', color: '#ef4444' },
        { type: 'out', text: '✓ IP 185.12.x.x blocked by Fail2Ban automatically.', color: '#10b981' },
        { type: 'cmd', prompt: 'auditd@ip-10-0-1 ~$', text: 'sudo nmap -sV intranet.local' },
        { type: 'out', text: 'Scanning intranet.local (10.0.1.5)... Ports: 22, 80, 443 open.', color: '#94a3b8' },
        { type: 'out', text: 'No vulnerabilities found on intranet.local.', color: '#10b981' },
      ],
      stats: [
        { num: '0',     label: 'Breaches Found' },
        { num: '<1ms',  label: 'Scan Interval' },
        { num: '4.2k',  label: 'Attacks Blocked' },
        { num: '100%',  label: 'Compliance' },
      ]
    },
    dashboard: {
      label: '// SOC Dashboard',
      title: 'Security Ops',
      sub: 'Real-time threat landscape and identity management control.',
      statuses: [
        { name: 'External Firewall',        status: 'Operational', type: 'ok' },
        { name: 'Internal HoneyPot',        status: 'Alert-Low',   type: 'warn' },
        { name: 'Identity Provider',        status: 'Healthy',     type: 'ok' },
        { name: 'SIEM Analyzer',            status: 'Operational', type: 'ok' },
        { name: 'VPN Gateway',             status: 'Connected',   type: 'ok' },
      ]
    }
  }
}

const DEFAULT_MESSAGES = [
  {
    initials: 'AR',
    avatarBg: 'rgba(0,212,255,0.15)',
    avatarColor: 'var(--accent)',
    name: 'Arun Reddy',
    preview: 'Can you help with the VPC configuration?',
    time: '2m ago',
  },
  {
    initials: 'PM',
    avatarBg: 'rgba(124,58,237,0.15)',
    avatarColor: '#a78bfa',
    name: 'Priya Mehta',
    preview: 'Deployment to prod is ready for review.',
    time: '18m ago',
  },
  {
    initials: 'SK',
    avatarBg: 'rgba(16,185,129,0.15)',
    avatarColor: 'var(--green)',
    name: 'Siddharth K',
    preview: 'Load balancer health checks passing ✓',
    time: '1h ago',
  },
]

const Divider = () => (
  <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '0 3rem' }} />
)

export default function App() {
  const [messages, setMessages] = useState(DEFAULT_MESSAGES)
  const [topic, setTopic] = useState('cloud')

  const currentData = useMemo(() => TOPIC_DATA[topic], [topic])

  const handleMessageSent = (newMsg) => {
    setMessages((prev) => [newMsg, ...prev])
  }

  return (
    <>
      <Header currentTopic={topic} onTopicChange={setTopic} />
      <div key={topic} style={{ animation: 'fadeIn 0.8s ease-out' }}>
        <Hero data={currentData.hero} />
        <Divider />
        <Terminal data={currentData.terminal} />
        <Divider />
        <Features data={currentData.features} />
        <Divider />
        <AdminDashboard messages={messages} data={currentData.dashboard} />
        <Divider />
        <ContactForm onMessageSent={handleMessageSent} />
      </div>
      <footer style={{
        textAlign: 'center',
        padding: '2.5rem 3rem',
        borderTop: '1px solid var(--border)',
        color: 'var(--muted)',
        fontSize: '0.82rem',
        fontFamily: "'Space Mono', monospace",
      }}>
        © 2026 Cloud Showcase · Built with React + Vite · Hosted on AWS EC2
      </footer>
    </>
  )
}
