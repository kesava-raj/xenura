export default function CloudDevOps() {
  return (
    <main>
      <section style={{ paddingTop: "150px", minHeight: "50vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
        <div className="hero-orb orb2"></div>
        <div className="section-inner" style={{ position: "relative", zIndex: 2 }}>
          <div className="section-tag">Service</div>
          <h1 className="hero-h1" style={{ fontSize: "clamp(42px, 6vw, 80px)", marginBottom: "24px" }}>
            <span className="line1">Cloud &</span>
            <span className="accent-word">DevOps</span>
          </h1>
          <p className="hero-sub" style={{ margin: "0", maxWidth: "600px" }}>
            AWS, GCP, Azure architecture, automated CI/CD pipelines, Kubernetes orchestration, and continuous infrastructure reliability.
          </p>
        </div>
      </section>
      <section style={{ padding: "80px 0 130px" }}>
        <div className="section-inner">
          <div style={{ background: "var(--card)", padding: "60px", borderRadius: "24px", border: "1px solid var(--border)" }}>
             <h2 className="section-h2" style={{ fontSize: "32px", marginBottom: "20px" }}>Frictionless Deployment</h2>
             <p className="section-desc" style={{ maxWidth: "100%", marginBottom: "40px" }}>
               Infrastructure as code allows organizations to instantly provision, manage, and scale the servers fueling business-critical services. Our DevOps team embeds directly inside your developer environment to reduce downtime, automate testing, and secure delivery pipelines end to end.
             </p>
             <div className="about-pills">
                <span className="pill">Kubernetes</span>
                <span className="pill">CI / CD Systems</span>
                <span className="pill">Cloud Migrations</span>
                <span className="pill">Security & Compliance</span>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
