export default function ProductEngineering() {
  return (
    <main>
      <section style={{ paddingTop: "150px", minHeight: "50vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
        <div className="hero-orb orb1"></div>
        <div className="section-inner" style={{ position: "relative", zIndex: 2 }}>
          <div className="section-tag">Service</div>
          <h1 className="hero-h1" style={{ fontSize: "clamp(42px, 6vw, 80px)", marginBottom: "24px" }}>
            <span className="line1">Product</span>
            <span className="accent-word">Engineering</span>
          </h1>
          <p className="hero-sub" style={{ margin: "0", maxWidth: "600px" }}>
            Full-stack development with modern frameworks delivering fast, scalable, and resilient digital products.
          </p>
        </div>
      </section>
      <section style={{ padding: "80px 0 130px" }}>
        <div className="section-inner">
          <div style={{ background: "var(--card)", padding: "60px", borderRadius: "24px", border: "1px solid var(--border)" }}>
             <h2 className="section-h2" style={{ fontSize: "32px", marginBottom: "20px" }}>Built to Scale</h2>
             <p className="section-desc" style={{ maxWidth: "100%", marginBottom: "40px" }}>
               We develop robust web and mobile applications using modern, API-first architectural patterns. From rapidly iterating on MVPs to refactoring legacy monolithic codebases into scalable microservices, our engineers enforce best-in-class security, performance, and reliability out of the box.
             </p>
             <div className="about-pills">
                <span className="pill">Full Stack Web</span>
                <span className="pill">Mobile Platforms</span>
                <span className="pill">API & Microservices</span>
                <span className="pill">Legacy Modernization</span>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
