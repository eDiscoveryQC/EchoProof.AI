'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function HowItWorksPage() {
  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroText}>
          <h1 style={styles.title}>How EchoProof Works</h1>
          <p style={styles.subtitle}>
            From raw media to courtroom intelligence — EchoProof makes evidence review fast, intuitive, and AI-powered.
          </p>
        </div>
      </section>

      {/* Timeline Steps */}
      <section style={styles.timelineSection}>
        {steps.map((step, i) => (
          <Step key={i} index={i + 1} {...step} />
        ))}
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <h2 style={styles.ctaTitle}>Smarter. Faster. Courtroom-Ready.</h2>
        <p style={styles.ctaText}>
          Ready to transform your legal workflow with intelligence at every step?
        </p>
        <Link href="/auth/register" style={styles.ctaBtn}>Get Started</Link>
      </section>
    </div>
  );
}

const steps = [
  {
    title: 'Upload Evidence',
    description: 'Drop bodycam, jail calls, interviews, or CCTV footage. We auto-detect formats and begin processing instantly.',
    image: '/images/step-upload.png',
  },
  {
    title: 'Auto-Transcription & Entity Detection',
    description: 'AI transcribes and tags people, keywords, timestamps, and emotion spikes. Every second is indexed.',
    image: '/images/step-ai-transcribe.png',
  },
  {
    title: 'Visual Timeline & Smart Filters',
    description: 'Get a heatmap of action. Filter clips by speaker, topic, or case entity with blazing speed.',
    image: '/images/step-timeline.png',
  },
  {
    title: 'Ask Questions. Get Answers.',
    description: 'Ask “Where does the suspect admit guilt?” — EchoProof scans across files and gives exact citations.',
    image: '/images/step-ask-ai.png',
  },
  {
    title: 'Organize & Export',
    description: 'Build case packages with evidence, transcripts, and annotations. Export to PDF or ZIP for trial.',
    image: '/images/step-export.png',
  },
];

function Step({ index, title, description, image }) {
  return (
    <div style={styles.stepContainer}>
      <div style={styles.stepContent}>
        <div>
          <h3 style={styles.stepTitle}>{index}. {title}</h3>
          <p style={styles.stepDesc}>{description}</p>
        </div>
        <Image
          src={image}
          alt={title}
          width={500}
          height={280}
          style={styles.image}
        />
      </div>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: 'Inter, sans-serif',
    background: '#0a0f1c',
    color: '#e2e8f0',
    paddingBottom: '4rem',
  },
  hero: {
    textAlign: 'center',
    padding: '4rem 2rem 2rem',
    background: '#121b2f',
    borderBottom: '1px solid #1e293b',
  },
  heroText: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  title: {
    fontSize: '2.75rem',
    color: '#00ffe4',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.25rem',
    color: '#cbd5e1',
    lineHeight: 1.6,
  },
  timelineSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
    maxWidth: '1000px',
    margin: '3rem auto',
    padding: '0 2rem',
  },
  stepContainer: {
    background: '#1e293b',
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
  },
  stepContent: {
    display: 'flex',
    flexDirection: 'row',
    gap: '2rem',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  stepTitle: {
    fontSize: '1.5rem',
    color: '#00ffe4',
    marginBottom: '0.5rem',
  },
  stepDesc: {
    color: '#cbd5e1',
    fontSize: '1rem',
  },
  image: {
    borderRadius: '8px',
    maxWidth: '100%',
    height: 'auto',
  },
  cta: {
    textAlign: 'center',
    marginTop: '4rem',
    padding: '2rem',
    background: '#121b2f',
    borderTop: '1px solid #1e293b',
  },
  ctaTitle: {
    fontSize: '2rem',
    color: '#00ffe4',
    marginBottom: '1rem',
  },
  ctaText: {
    fontSize: '1.1rem',
    color: '#cbd5e1',
    marginBottom: '1.5rem',
  },
  ctaBtn: {
    background: '#00ffe4',
    color: '#0a0f1c',
    padding: '0.75rem 1.5rem',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};
