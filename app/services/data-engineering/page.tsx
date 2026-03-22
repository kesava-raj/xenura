export default function DataEngineering() {
  return (
    <main>
      <section style={{ paddingTop: "150px", minHeight: "50vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
        <div className="hero-orb orb2"></div>
        <div className="section-inner" style={{ position: "relative", zIndex: 2 }}>
          <div className="section-tag">Service</div>
          <h1 className="hero-h1" style={{ fontSize: "clamp(42px, 6vw, 80px)", marginBottom: "24px" }}>
            <span className="line1">Data</span>
            <span className="accent-word">Engineering</span>
          </h1>
          <p className="hero-sub" style={{ margin: "0", maxWidth: "600px" }}>
            Architecting scalable platforms for your data—turning fragmented inputs into a cohesive, high-performance foundation.
          </p>
        </div>
      </section>
      <section style={{ padding: "80px 0 130px" }}>
        <div className="section-inner">
          <div style={{ background: "var(--card)", padding: "60px", borderRadius: "24px", border: "1px solid var(--border)" }}>
             <h2 className="section-h2" style={{ fontSize: "32px", marginBottom: "20px" }}>Robust Data Ecosystems</h2>
             <p className="section-desc" style={{ maxWidth: "100%", marginBottom: "40px" }}>
               We engineer robust data pipelines, warehouses, lakehouses, and real-time streaming architectures built for absolute scale and fault tolerance. Our data platforms are designed to securely govern raw information while efficiently opening access to insight generation.
             </p>
             <div className="about-pills">
                <span className="pill">Data Lakehouse</span>
                <span className="pill">ETL / ELT Pipelines</span>
                <span className="pill">Real-time Streaming</span>
                <span className="pill">Data Warehousing</span>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
