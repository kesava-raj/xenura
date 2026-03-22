"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // REVEAL ON SCROLL
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach((el) => observer.observe(el));

    // COUNTER ANIMATION
    function animateCounter(el: Element, target: number, suffix = "") {
      let start = 0;
      const dur = 1800;
      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / dur, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(ease * target) + suffix;
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = target + suffix;
      };
      requestAnimationFrame(step);
    }

    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const nums = e.target.querySelectorAll(".stat-num");
            nums.forEach((n) => {
              const text = n.textContent || "";
              const num = parseInt(text, 10);
              const suffix = text.replace(num.toString(), "");
              animateCounter(n, num, suffix);
            });
            statsObserver.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );
    const stats = document.querySelector(".hero-stats");
    if (stats) statsObserver.observe(stats);

    return () => {
      observer.disconnect();
      statsObserver.disconnect();
    };
  }, []);

  return (
    <>
      {/* ─── HERO ─── */}
      <section id="home">
        <div className="hero-orb orb1"></div>
        <div className="hero-orb orb2"></div>
        <div className="hero-orb orb3"></div>
        <div className="hero-ring"></div>
        <div className="hero-ring hero-ring2"></div>

        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            NEXT-GEN TECHNOLOGY PARTNER
          </div>
          <h1 className="hero-h1">
            <span className="line1">Engineering</span>
            <span className="accent-word">Intelligent</span>
            <span className="line1">Futures</span>
          </h1>
          <p className="hero-sub">
            We build the AI, data, and digital systems that power tomorrow&apos;s
            industry leaders — from insight to infrastructure, end-to-end.
          </p>
          <div className="hero-actions">
            <a href="#services" className="btn-primary">
              Explore Services
            </a>
            <a href="#contact" className="btn-secondary">
              Start a Project →
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <div className="stat-num">200+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-div"></div>
            <div>
              <div className="stat-num">9</div>
              <div className="stat-label">Industries Served</div>
            </div>
            <div className="stat-div"></div>
            <div>
              <div className="stat-num">98%</div>
              <div className="stat-label">Client Retention</div>
            </div>
            <div className="stat-div"></div>
            <div>
              <div className="stat-num">50+</div>
              <div className="stat-label">Expert Engineers</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services">
        <div className="section-inner">
          <div className="reveal">
            <div className="section-tag">What We Do</div>
            <h2 className="section-h2">
              End-to-End
              <br />
              Tech Services
            </h2>
            <p className="section-desc">
              From AI automation to cloud infrastructure — we cover every layer
              of the modern technology stack.
            </p>
          </div>
          <div className="services-grid">
            <div className="service-card reveal reveal-delay-1">
              <div className="service-num">01</div>
              <div className="service-icon">🤖</div>
              <div className="service-title">Artificial Intelligence</div>
              <p className="service-desc">
                Custom ML models, LLM integrations, computer vision, NLP
                pipelines, and intelligent automation that transforms operations.
              </p>
              <span className="service-arrow">↗</span>
            </div>
            <div className="service-card reveal reveal-delay-2">
              <div className="service-num">02</div>
              <div className="service-icon">⚡</div>
              <div className="service-title">Data Engineering</div>
              <p className="service-desc">
                Robust data pipelines, warehouses, lakehouses, and real-time
                streaming architectures built for scale.
              </p>
              <span className="service-arrow">↗</span>
            </div>
            <div className="service-card reveal reveal-delay-3">
              <div className="service-num">03</div>
              <div className="service-icon">📊</div>
              <div className="service-title">Digital Analytics</div>
              <p className="service-desc">
                Advanced analytics, business intelligence dashboards, and
                data-driven strategies that turn metrics into growth.
              </p>
              <span className="service-arrow">↗</span>
            </div>
            <div className="service-card reveal reveal-delay-1">
              <div className="service-num">04</div>
              <div className="service-icon">🛠</div>
              <div className="service-title">Product Engineering</div>
              <p className="service-desc">
                Full-stack development with modern frameworks — React, Node,
                Python — delivering fast, scalable digital products.
              </p>
              <span className="service-arrow">↗</span>
            </div>
            <div className="service-card reveal reveal-delay-2">
              <div className="service-num">05</div>
              <div className="service-icon">☁️</div>
              <div className="service-title">Cloud & DevOps</div>
              <p className="service-desc">
                AWS, GCP, Azure architecture, CI/CD pipelines, Kubernetes
                orchestration, and 24/7 infrastructure reliability.
              </p>
              <span className="service-arrow">↗</span>
            </div>
            <div
              className="service-card reveal reveal-delay-3"
              style={{
                background:
                  "linear-gradient(135deg, rgba(10,240,200,0.05), rgba(0,96,255,0.03))",
              }}
            >
              <div className="service-num">→</div>
              <div className="service-icon">💬</div>
              <div className="service-title">Let&apos;s Build Together</div>
              <p className="service-desc">
                Have a custom challenge? Our team architects solutions tailored
                to your exact needs and industry context.
              </p>
              <a
                href="#contact"
                className="btn-primary"
                style={{
                  display: "inline-block",
                  marginTop: "24px",
                  fontSize: "12px",
                  padding: "10px 20px",
                }}
              >
                Talk to Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about">
        <div className="section-inner">
          <div className="about-grid">
            <div className="about-visual reveal">
              <div className="about-box">
                <div className="about-tag-float tag-tl">{"// XENURA_CORE v2.5"}</div>
                <div className="about-geo">
                  <div className="about-geo-inner"></div>
                </div>
                <div className="about-tag-float tag-br">SYSTEMS ONLINE ●</div>
              </div>
            </div>
            <div className="about-text reveal reveal-delay-2">
              <div className="section-tag">Who We Are</div>
              <h2 className="section-h2">
                Built by
                <br />
                Engineers,
                <br />
                for Builders
              </h2>
              <p>
                Xenura is a technology company at the intersection of AI, data,
                and digital engineering. We partner with ambitious organizations
                to design, build, and scale the systems that drive real
                competitive advantage.
              </p>
              <p>
                From seed-stage startups to enterprise teams, we bring the same
                depth of craft and strategic thinking to every engagement.
              </p>
              <div className="about-pills">
                <span className="pill">AI-First</span>
                <span className="pill">Cloud-Native</span>
                <span className="pill">Agile</span>
                <span className="pill">Security-Minded</span>
                <span className="pill">Outcome-Driven</span>
                <span className="pill">Transparent</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SOLUTIONS / CATEGORIES ─── */}
      <section id="solutions">
        <div className="section-inner">
          <div className="reveal">
            <div className="section-tag">Capabilities</div>
            <h2 className="section-h2">
              Five Core
              <br />
              Practice Areas
            </h2>
            <p className="section-desc">
              Structured around the domains that matter most in modern
              technology transformation.
            </p>
          </div>
          <div className="cat-list">
            <div className="cat-item reveal reveal-delay-1">
              <span className="cat-num">01</span>
              <span className="cat-title">
                Artificial Intelligence & Intelligent Automation
              </span>
              <div className="cat-tags">
                <span className="cat-tag">LLM</span>
                <span className="cat-tag">ML Ops</span>
                <span className="cat-tag">NLP</span>
                <span className="cat-tag">Vision</span>
              </div>
            </div>
            <div className="cat-item reveal reveal-delay-2">
              <span className="cat-num">02</span>
              <span className="cat-title">Data Engineering & Analytics</span>
              <div className="cat-tags">
                <span className="cat-tag">Pipelines</span>
                <span className="cat-tag">Lakehouse</span>
                <span className="cat-tag">BI</span>
                <span className="cat-tag">Streaming</span>
              </div>
            </div>
            <div className="cat-item reveal reveal-delay-3">
              <span className="cat-num">03</span>
              <span className="cat-title">
                Digital Experience & Martech Engineering
              </span>
              <div className="cat-tags">
                <span className="cat-tag">CX</span>
                <span className="cat-tag">CDP</span>
                <span className="cat-tag">Personalization</span>
              </div>
            </div>
            <div className="cat-item reveal reveal-delay-1">
              <span className="cat-num">04</span>
              <span className="cat-title">
                Product Engineering & Full Stack Development
              </span>
              <div className="cat-tags">
                <span className="cat-tag">React</span>
                <span className="cat-tag">Node</span>
                <span className="cat-tag">Python</span>
                <span className="cat-tag">APIs</span>
              </div>
            </div>
            <div className="cat-item reveal reveal-delay-2">
              <span className="cat-num">05</span>
              <span className="cat-title">
                Cloud, DevOps & Infrastructure
              </span>
              <div className="cat-tags">
                <span className="cat-tag">AWS</span>
                <span className="cat-tag">GCP</span>
                <span className="cat-tag">K8s</span>
                <span className="cat-tag">CI/CD</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES ─── */}
      <section id="industries">
        <div className="section-inner">
          <div className="reveal">
            <div className="section-tag">Industries</div>
            <h2 className="section-h2">
              Sectors We
              <br />
              Serve
            </h2>
            <p className="section-desc">
              Deep domain expertise across the industries driving the digital
              economy forward.
            </p>
          </div>
          <div className="ind-grid">
            <div className="ind-card reveal reveal-delay-1">
              <div className="ind-icon">🛒</div>
              <div className="ind-name">E-Commerce</div>
              <p className="ind-desc">
                Personalization engines, recommendation AI, and scalable
                storefronts.
              </p>
            </div>
            <div className="ind-card reveal reveal-delay-2">
              <div className="ind-icon">💳</div>
              <div className="ind-name">Fintech</div>
              <p className="ind-desc">
                Fraud detection, real-time payments, and regulatory-compliant
                data systems.
              </p>
            </div>
            <div className="ind-card reveal reveal-delay-3">
              <div className="ind-icon">🏥</div>
              <div className="ind-name">Healthcare</div>
              <p className="ind-desc">
                Clinical AI, HIPAA-compliant platforms, and patient data
                analytics.
              </p>
            </div>
            <div className="ind-card reveal reveal-delay-4">
              <div className="ind-icon">🎓</div>
              <div className="ind-name">EdTech</div>
              <p className="ind-desc">
                Adaptive learning, LMS platforms, and engagement analytics.
              </p>
            </div>
            <div className="ind-card reveal reveal-delay-1">
              <div className="ind-icon">✈️</div>
              <div className="ind-name">Travel & Aviation</div>
              <p className="ind-desc">
                Booking systems, dynamic pricing, and operational intelligence.
              </p>
            </div>
            <div className="ind-card reveal reveal-delay-2">
              <div className="ind-icon">🚀</div>
              <div className="ind-name">SaaS Startups</div>
              <p className="ind-desc">
                MVP development, growth infrastructure, and product-led
                engineering.
              </p>
            </div>
            <div className="ind-card reveal reveal-delay-3">
              <div className="ind-icon">📡</div>
              <div className="ind-name">Media</div>
              <p className="ind-desc">
                Content intelligence, audience analytics, and streaming
                platforms.
              </p>
            </div>
            <div className="ind-card reveal reveal-delay-4">
              <div className="ind-icon">🏭</div>
              <div className="ind-name">Manufacturing</div>
              <p className="ind-desc">
                Predictive maintenance, IoT integration, and supply chain
                analytics.
              </p>
            </div>
            <div
              className="ind-card reveal reveal-delay-1"
              style={{ gridColumn: "1/-1", maxWidth: "300px" }}
            >
              <div className="ind-icon">📦</div>
              <div className="ind-name">Logistics & Supply Chain</div>
              <p className="ind-desc">
                Route optimization, demand forecasting, and real-time tracking
                systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact">
        <div className="section-inner">
          <div className="cta-box reveal">
            <div className="section-tag" style={{ justifyContent: "center" }}>
              Let&apos;s Talk
            </div>
            <h2 className="section-h2">
              Ready to Build
              <br />
              Something Great?
            </h2>
            <p className="section-desc">
              Tell us about your project. Our engineering team typically
              responds within 24 hours.
            </p>
            <div className="cta-grid">
              <input
                className="cta-input"
                type="text"
                placeholder="Your Name"
              />
              <input
                className="cta-input"
                type="email"
                placeholder="Work Email"
              />
              <input
                className="cta-input full"
                type="text"
                placeholder="Company & Industry"
              />
              <textarea
                className="cta-input full"
                placeholder="Describe your project or challenge..."
              ></textarea>
            </div>
            <a
              href="#"
              className="btn-primary"
              style={{ fontSize: "15px", padding: "16px 48px" }}
            >
              Send Message →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
