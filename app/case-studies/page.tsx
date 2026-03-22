import Link from "next/link";

const CASE_STUDIES = [
  {
    slug: "fintech-security-overhaul",
    industry: "FINTECH",
    title: "Securing High-Frequency Transaction Rails",
    desc: "How we implemented real-time fraud detection and hardened infrastructure for a leading European digital bank.",
    icon: "💳"
  },
  {
    slug: "retail-ai-personalization",
    industry: "E-COMMERCE",
    title: "15% Revenue Lift Through Predictive AI",
    desc: "Developing a custom recommendation engine that adapts to user behavior in real-time.",
    icon: "🛒"
  },
  {
    slug: "logistics-route-optimization",
    industry: "LOGISTICS",
    title: "Optimizing Last-Mile Delivery Efficiency",
    desc: "Reducing delivery times and fuel consumption through graph-based routing algorithms.",
    icon: "📦"
  }
];

export default function CaseStudies() {
  return (
    <main>
      <section style={{ paddingTop: "150px", minHeight: "60vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
        <div className="hero-orb orb3"></div>
        <div className="section-inner" style={{ position: "relative", zIndex: 2 }}>
          <div className="reveal visible">
            <div className="section-tag">Impact</div>
            <h1 className="hero-h1" style={{ fontSize: "clamp(42px, 8vw, 100px)", marginBottom: "24px" }}>
              <span className="line1">Success</span>
              <span className="accent-word">Stories</span>
            </h1>
            <p className="hero-sub" style={{ margin: "0", maxWidth: "600px" }}>
              Detailing the strategic transformations we&apos;ve engineered for global partners across nine industries.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0 130px" }}>
        <div className="section-inner">
          <div className="ind-grid" style={{ gridTemplateColumns: "1fr", gap: "32px" }}>
            {CASE_STUDIES.map((study) => (
              <Link key={study.slug} href={`/case-studies/${study.slug}`} style={{ textDecoration: "none" }}>
                <div className="cat-item reveal visible" style={{ padding: "60px", alignItems: "center" }}>
                   <div style={{ display: "flex", alignItems: "center", gap: "32px", flex: 1 }}>
                     <div style={{ fontSize: "42px" }}>{study.icon}</div>
                     <div style={{ flex: 1 }}>
                        <div className="section-tag">{study.industry}</div>
                        <h3 className="section-h2" style={{ fontSize: "28px", marginTop: "8px", marginBottom: "16px" }}>{study.title}</h3>
                        <p className="section-desc" style={{ maxWidth: "80%" }}>{study.desc}</p>
                     </div>
                   </div>
                   <div className="btn-secondary" style={{ padding: "12px 24px", borderRadius: "8px" }}>READ FULL STUDY →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
