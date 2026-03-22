export default function ArtificialIntelligence() {
  return (
    <main>
      <section style={{ paddingTop: "150px", minHeight: "50vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
        <div className="hero-orb orb1"></div>
        <div className="section-inner" style={{ position: "relative", zIndex: 2 }}>
          <div className="section-tag">Service</div>
          <h1 className="hero-h1" style={{ fontSize: "clamp(42px, 6vw, 80px)", marginBottom: "24px" }}>
            <span className="line1">Artificial</span>
            <span className="accent-word">Intelligence</span>
          </h1>
          <p className="hero-sub" style={{ margin: "0", maxWidth: "600px" }}>
            Transforming operations with custom ML models, LLM integrations, computer vision, and NLP pipelines tailored to your enterprise.
          </p>
        </div>
      </section>
      <section style={{ padding: "80px 0 130px" }}>
        <div className="section-inner">
          <div style={{ background: "var(--card)", padding: "60px", borderRadius: "24px", border: "1px solid var(--border)" }}>
             <h2 className="section-h2" style={{ fontSize: "32px", marginBottom: "20px" }}>Intelligent Automation</h2>
             <p className="section-desc" style={{ maxWidth: "100%", marginBottom: "40px" }}>
               Our specialized AI and automation practice helps you cut through the noise to build and deploy real-world machine learning solutions. We go beyond prototypes, establishing production-ready pipelines that embed deep intelligence directly into your core business processes.
             </p>
             <div className="about-pills">
                <span className="pill">Large Language Models</span>
                <span className="pill">Predictive Analytics</span>
                <span className="pill">Computer Vision</span>
                <span className="pill">NLP Engine</span>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
