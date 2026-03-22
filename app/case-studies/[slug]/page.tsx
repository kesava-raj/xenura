import Link from "next/link";
import { notFound } from "next/navigation";

const CASE_STUDIES = {
  "fintech-security-overhaul": {
    industry: "FINTECH",
    title: "Securing High-Frequency Transaction Rails",
    desc: "How we implemented real-time fraud detection and hardened infrastructure for a leading European digital bank.",
    icon: "💳",
    challenge: "A leading digital bank was experiencing a surge in sophisticated automated fraud attacks, costing millions monthly and threatening customer trust. Their existing rule-based detection system couldn't adapt quickly enough to new patterns.",
    solution: "We engineered a sub-10ms real-time fraud detection engine using an ensemble of GNNs (Graph Neural Networks) to identify suspicious transaction clusters and behavior patterns. The infrastructure was also hardened using a zero-trust architecture on AWS.",
    results: [
      { label: "Fraud Reduction", value: "88%" },
      { label: "False Positive Rate", value: "< 0.1%" },
      { label: "Deployment Time", value: "3 Months" }
    ]
  },
  "retail-ai-personalization": {
    industry: "E-COMMERCE",
    title: "15% Revenue Lift Through Predictive AI",
    desc: "Developing a custom recommendation engine that adapts to user behavior in real-time.",
    icon: "🛒",
    challenge: "A global fashion retailer struggled with static product recommendations that failed to capture transient consumer intent. Their existing ML models had a 24-hour training lag, causing irrelevant suggestions to persist.",
    solution: "Applying advanced Bayesian inference and real-time behavioral streams, we built a personalized ranking system. Every click, view, and abandoned cart now updates the user's affinity profile instantly without costly batch re-training.",
    results: [
      { label: "Avg Order Value", value: "+22%" },
      { label: "Direct Revenue Lift", value: "15%" },
      { label: "Model Latency", value: "45ms" }
    ]
  },
  "logistics-route-optimization": {
    industry: "LOGISTICS",
    title: "Optimizing Last-Mile Delivery Efficiency",
    desc: "Reducing delivery times and fuel consumption through graph-based routing algorithms.",
    icon: "📦",
    challenge: "With rising energy costs and complex urban delivery constraints, a national courier needed a more dynamic way to sequence deliveries for their 5,000+ vehicle fleet based on traffic, weather, and variable drop windows.",
    solution: "Custom-developed routing engines leveraging Google Maps API and internal historical delivery data. The new system calculates route sequences every 15 minutes, pushing dynamic updates to drivers' mobile applications based on real-world conditions.",
    results: [
      { label: "Fuel Saving", value: "12%" },
      { label: "Time Efficiency", value: "+18%" },
      { label: "ROI Reached", value: "7 Months" }
    ]
  }
};

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = CASE_STUDIES[slug as keyof typeof CASE_STUDIES];

  if (!study) {
    notFound();
  }

  return (
    <main>
      <section style={{ paddingTop: "150px", minHeight: "60vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
        <div className="hero-orb orb1"></div>
        <div className="section-inner" style={{ position: "relative", zIndex: 2 }}>
          <div className="reveal visible">
            <Link href="/case-studies" style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "var(--accent)", fontSize: "14px", marginBottom: "32px", fontFamily: "var(--font-mono)" }}>
              ← BACK TO CASE STUDIES
            </Link>
            <div className="section-tag">{study.industry} IMPACT</div>
            <h1 className="hero-h1" style={{ fontSize: "clamp(36px, 6vw, 72px)", marginBottom: "32px", lineHeight: "1.1" }}>
              {study.title}
            </h1>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0 130px" }}>
        <div className="section-inner">
          <div className="about-grid" style={{ marginBottom: "100px", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
             {study.results.map((res, idx) => (
                <div key={idx} style={{ background: "var(--card)", padding: "40px", borderRadius: "16px", border: "1px solid var(--border)", textAlign: "center" }}>
                   <div className="stat-num" style={{ fontSize: "42px", marginBottom: "8px" }}>{res.value}</div>
                   <div className="stat-label">{res.label}</div>
                </div>
             ))}
          </div>

          <div className="reveal visible" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px" }}>
             <div>
                <h2 className="section-h2" style={{ fontSize: "32px", marginBottom: "24px" }}>The Challenge</h2>
                <p style={{ fontSize: "18px", opacity: 0.8, lineHeight: "1.8" }}>{study.challenge}</p>
             </div>
             <div>
                <h2 className="section-h2" style={{ fontSize: "32px", marginBottom: "24px" }}>Our Approach</h2>
                <p style={{ fontSize: "18px", opacity: 0.8, lineHeight: "1.8" }}>{study.solution}</p>
             </div>
          </div>

          <div className="cta-box reveal visible" style={{ marginTop: "120px" }}>
            <h3 className="section-h2" style={{ fontSize: "32px", marginBottom: "20px" }}>Experience Similar Growth</h3>
            <p className="section-desc" style={{ marginBottom: "40px", maxWidth: "100%" }}>We provide more than just consulting—we engineer the precise foundation your business needs for the next phase of its digital journey.</p>
            <Link href="/#contact" className="btn-primary" style={{ display: "inline-block" }}>Begin Consultation →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
