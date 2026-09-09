"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    number: "01",
    icon: "⌘",
    title: "Software Development",
    description:
      "Custom software engineered around your business processes, requirements, and long-term growth.",
    tags: ["Custom Systems", "Enterprise", "Modern Architecture"],
  },
  {
    number: "02",
    icon: "⌨",
    title: "Website Development",
    description:
      "Fast, responsive, and scalable websites and web applications built for modern digital experiences.",
    tags: ["Website", "eCommerce", "Portfolio", "Web Apps", "SEO"],
  },
  {
    number: "03",
    icon: "⍠",
    title: "Mobile App Development",
    description:
      "user-focused mobile applications that help businesses connect with customers, improve operations, and deliver services directly through mobile devices.",
    tags: ["Mobile", "API", "Convenience"],
  },

  {
    number: "04",
    icon: "▦",
    title: "Nova POS",
    description:
      "Reliable point-of-sale solutions designed to simplify transactions, operations, and reporting.",
    tags: ["Point-of-Sale", "Secured Card Payments", "Fast Transactions", "Kitchen Display", "Customer Display", "Real-Time Reporting", "Regulatory Accredited"],
  },
  {
    number: "05",
    icon: "⍉",
    title: "Orbit ERP",
    description:
      "Modern Enterprise Resourse Planning, brings your entire business together in one system, giving you the visibility and control to operate smarter, faster and more efficiently",
    tags: ["Organization Management", "Accounting & Finance", "Inventory Management", "Purchasing & Procurement", "Sales Management" , "POS Integration", "Warehouse & Logistic", "Reporting"],
  },
  {
    number: "06",
    icon: "◉",
    title: "Virtual Assistant",
    description:
      "Help businesses extend their capabilities with skilled, technology-ready professionals without the cost and complexity of building a full in-house team.",
    tags: ["Task Management", "Sales Assistant", "Digital Support", "Customer Service", "Organized Appointments"],
  },
];

const technologies = [
  { name: "Orbit", symbol: "⍉", className: "tech-orbit" },
  { name: "Nova", symbol: "⚛", className: "tech-nova" },
  { name: "VA", symbol: "◉", className: "tech-va" },
  { name: "Mobile", symbol: "⍠", className: "tech-mobile" },
  { name: "Web", symbol: "☁", className: "tech-web" },
];

const capabilities = [
  "Modern architecture",
  "API-first development",
  "Cloud-ready applications",
  "Secure integrations",
  "Responsive interfaces",
  "Scalable infrastructure",
  "Modular platforms",
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;

      setMouse({
        x: (x - 0.5) * 2,
        y: (y - 0.5) * 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleCardMove = (
    event: React.MouseEvent<HTMLElement>,
    element: HTMLElement
  ) => {
    const rect = element.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 8;
    const rotateX = ((y / rect.height) - 0.5) * -8;

    element.style.setProperty("--rotate-x", `${rotateX}deg`);
    element.style.setProperty("--rotate-y", `${rotateY}deg`);
  };

  const resetCard = (element: HTMLElement) => {
    element.style.setProperty("--rotate-x", "0deg");
    element.style.setProperty("--rotate-y", "0deg");
  };

  const scrollToSection = (id: string) => {
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main>
      {/* HEADER */}
      <header className="site-header">
        <div className="header-inner">
          <button
            className="brand"
            onClick={() => scrollToSection("home")}
            aria-label="JAM Systems Technology"
          >
            <span className="brand-mark">
              <span />
              <span />
              <span />
            </span>

            <span className="brand-text">
              <strong>JAM</strong>
              <small>SYSTEMS TECHNOLOGY</small>
            </span>
          </button>

          <nav className={`desktop-nav ${menuOpen ? "open" : ""}`}>
            <button onClick={() => scrollToSection("home")}>Home</button>
            <button onClick={() => scrollToSection("about")}>About</button>
            <button onClick={() => scrollToSection("solutions")}>
              Solutions
            </button>
            <button onClick={() => scrollToSection("technology")}>
              Technology
            </button>
            <button
              className="nav-cta"
              onClick={() => scrollToSection("contact")}
            >
              Let's Talk
            </button>
          </nav>

          <button
            className="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>


      {/* HERO */}
      <section
        id="home"
        ref={heroRef}
        className="hero"
        style={
          {
            "--mouse-x": `${mouse.x}`,
            "--mouse-y": `${mouse.y}`,
          } as React.CSSProperties
        }
      >
        <div className="hero-grid-bg" />

        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="hero-glow hero-glow-three" />

        <div
          className="cursor-glow"
          style={{
            transform: `translate3d(${mouse.x * 80}px, ${mouse.y * 80}px, 0)`,
          }}
        />

        <div className="floating-particle particle-one">+</div>
        <div className="floating-particle particle-two">×</div>
        <div className="floating-particle particle-three">•</div>
        <div className="floating-particle particle-four">+</div>
        <div className="floating-particle particle-five">•</div>

        <div className="hero-inner">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              Technology built for business
            </div>

            <h1>
              Build better.
              <br />
              <span>Move faster.</span>
            </h1>

            <p className="hero-text">
              JAM Systems Technology creates modern software, web platforms,
              integrations, and digital solutions that help businesses work
              smarter.
            </p>

            <div className="hero-actions">
              <button
                className="button button-primary"
                onClick={() => scrollToSection("contact")}
              >
                Start a project
                <span>↗</span>
              </button>

              <button
                className="button button-secondary"
                onClick={() => scrollToSection("solutions")}
              >
                Explore solutions
                <span>→</span>
              </button>
            </div>

            <div className="hero-proof">
              <div className="proof-item">
                <strong>05+</strong>
                <span>Core solutions</span>
              </div>

              <div className="proof-divider" />

              <div className="proof-item">
                <strong>∞</strong>
                <span>Possibilities</span>
              </div>

              <div className="proof-divider" />

              <div className="proof-item">
                <strong>24/7</strong>
                <span>Digital world</span>
              </div>
            </div>
          </div>

          {/* INTERACTIVE HERO VISUAL */}
          <div className="hero-visual">
            <div
              className="visual-scene"
              style={{
                transform: `
                  perspective(1200px)
                  rotateX(${mouse.y * -2}deg)
                  rotateY(${mouse.x * 3}deg)
                `,
              }}
            >
              <div className="orb orb-main" />
              <div className="orb orb-secondary" />

              <div className="system-card">
                <div className="card-top">
                  <div>
                    <span className="mini-label">Your Business</span>
                    <h3>Digital Platform</h3>
                  </div>

                  <span className="live">
                    <i />
                    LIVE
                  </span>
                </div>

                <div className="dashboard-line">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>

                <div className="metric-row">
                  <div className="metric">
                    <span className="metric-icon">↗</span>
                    <div>
                      <strong>98.4%</strong>
                      <small>Performance</small>
                    </div>
                  </div>

                  <div className="metric">
                    <span className="metric-icon">⌁</span>
                    <div>
                      <strong>12ms</strong>
                      <small>Response</small>
                    </div>
                  </div>
                </div>

                <div className="integration-list">
                  <div className="integration-item">
                    <span className="integration-dot" />
                    API Services
                    <b>Connected</b>
                  </div>

                  <div className="integration-item">
                    <span className="integration-dot" />
                    Cloud Infrastructure
                    <b>Active</b>
                  </div>

                  <div className="integration-item">
                    <span className="integration-dot" />
                    Data Services
                    <b>Secure</b>
                  </div>
                </div>
              </div>

              {technologies.map((tech, index) => (
                <div
                  key={tech.name}
                  className={`floating-tech ${tech.className}`}
                  style={
                    {
                      "--tech-delay": `${index * 0.8}s`,
                    } as React.CSSProperties
                  }
                >
                  <span>{tech.symbol}</span>
                  <small>{tech.name}</small>
                </div>
              ))}

              <div className="floating-card floating-one">
                <span className="floating-icon">↗</span>
                <div>
                  <strong>Scalable</strong>
                  <small>Architecture</small>
                </div>
              </div>

              <div className="floating-card floating-two">
                <span className="floating-icon">✓</span>
                <div>
                  <strong>Connected</strong>
                  <small>Systems</small>
                </div>
              </div>
            </div>
          </div>
        </div>

{/*
        <div className="scroll-indicator">
          <span>Explore</span>
          <i />
        </div>
*/}
      </section>


{/* TRUST STRIP */}
<section className="trust-strip">
  <div className="trust-inner">
    <div className="trust-label">
      <span>BUILT BY JAM</span>
    </div>

    <div className="trust-marquee">
      <div className="trust-track">
        {/* SET 1 */}
        <div className="tech-item">
          <div className="tech-logo">
            <img src="/images/logo/KapeTayo.jpg" alt="JAM Systems Technology" />
          </div>
          <span>KapeTayo</span>
        </div>

        <div className="tech-item">
          <div className="tech-logo">
            <img src="/images/logo/ChefPanda.jpg" alt="JAM Systems Technology" />
          </div>
          <span>Chef Panda</span>
        </div>

        <div className="tech-item">
          <div className="tech-logo">
            <img src="/images/logo/HangryPatata.jpg" alt="JAM Systems Technology" />
          </div>
          <span>Hangry Patata</span>
        </div>

        <div className="tech-item">
          <div className="tech-logo">
            <img src="/images/logo/Hype.jpg" alt="JAM Systems Technology" />
          </div>
          <span>Hype Trendsetter</span>
        </div>

        <div className="tech-item">
          <div className="tech-logo">
            <img src="/images/logo/KlayStore.jpg" alt="JAM Systems Technology" />
          </div>
          <span>Klay Store PH</span>
        </div>

        <div className="tech-item">
          <div className="tech-logo">
            <img src="/images/logo/KantoGrill.jpg" alt="JAM" />
          </div>
          <span>Kanto Grill</span>
        </div>

        {/* SET 2 — duplicate for seamless animation */}
        <div className="tech-item">
          <div className="tech-logo">
            <img src="/images/logo/KapeTayo.jpg" alt="JAM Systems Technology" />
          </div>
          <span>Kape Tayo</span>
        </div>

        <div className="tech-item">
          <div className="tech-logo">
            <img src="/images/logo/ChefPanda.jpg" alt="JAM Systems Technology" />
          </div>
          <span>Chef Panda</span>
        </div>

        <div className="tech-item">
          <div className="tech-logo">
            <img src="/images/logo/HangryPatata.jpg" alt="JAM Systems Technology" />
          </div>
          <span>Hangry Patata</span>
        </div>

        <div className="tech-item">
          <div className="tech-logo">
            <img src="/images/logo/Hype.jpg" alt="JAM Systems Technology" />
          </div>
          <span>Hype Trendsetter</span>
        </div>

        <div className="tech-item">
          <div className="tech-logo">
            <img src="/images/logo/KlayStore.jpg" alt="JAM Systems Technology" />
          </div>
          <span>Klay Store PH</span>
        </div>

        <div className="tech-item">
          <div className="tech-logo">
            <img src="/images/logo/KantoGrill.jpg" alt="JAM Systems Technology" />
          </div>
          <span>Kanto Grill</span>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* SOLUTIONS */}
      <section id="solutions" className="section services-section">
        <div className="section-heading">
          <div>
            <span className="section-kicker">WHAT WE DO</span>
            <h2>
              Technology that
              <br />
              <span>moves business forward.</span>
            </h2>
          </div>

          <p>
            From a focused business application to a connected digital
            ecosystem, we design and build technology around the way your
            organization actually works.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article
              key={service.number}
              className="service-card"
              onMouseMove={(event) =>
                handleCardMove(
                  event,
                  event.currentTarget as HTMLElement
                )
              }
              onMouseLeave={(event) =>
                resetCard(event.currentTarget as HTMLElement)
              }
            >
              <div className="service-card-inner">
                <div className="service-card-top">
                  <span className="service-number">{service.number}</span>
                  <span className="service-icon">{service.icon}</span>
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="service-tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="service-arrow">↗</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ABOUT / APPROACH */}
      <section id="about" className="section approach-section">
        <div className="approach-grid">
          <div className="approach-copy">
            <span className="section-kicker">OUR APPROACH</span>

            <h2>
              Simple technology.
              <br />
              <span>Serious results.</span>
            </h2>

            <p>
              Great technology should make things simpler — not more
              complicated. We combine thoughtful design, solid engineering,
              and practical business understanding to create solutions that
              deliver real value.
            </p>

            <button
              className="text-link"
              onClick={() => scrollToSection("contact")}
            >
              Talk to our team <span>→</span>
            </button>
          </div>

          <div className="capability-panel">
            <div className="panel-heading">
              <span>OUR ENGINEERING PRINCIPLES</span>
              <span>06</span>
            </div>

            <div className="capability-list">
              {capabilities.map((capability, index) => (
                <div className="capability" key={capability}>
                  <span className="capability-number">
                    0{index + 1}
                  </span>

                  <span>{capability}</span>

                  <span className="capability-arrow">↗</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section id="technology" className="section technology-section">
        <div className="technology-background">
          <div className="technology-orb" />
        </div>

        <div className="technology-content">
          <span className="section-kicker">TECHNOLOGY STACK</span>

          <h2>
            Built on technology
            <br />
            <span>you can trust.</span>
          </h2>

          <p>
            We use proven modern technologies and platforms to build
            applications that are maintainable, scalable, and ready for the
            future.
          </p>

          <div className="technology-cloud">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="technology-bubble"
                style={
                  {
                    "--bubble-delay": `${index * 0.7}s`,
                  } as React.CSSProperties
                }
              >
                <span>{tech.symbol}</span>
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="section cta-section">
        <div className="cta-box">
          <div className="cta-glow" />

          <div className="cta-content">
            <span className="section-kicker">LET'S BUILD</span>

            <h2>
              Have an idea?
              <br />
              <span>Let's make it real.</span>
            </h2>

            <p>
              Tell us what you're trying to solve. We'll help turn the idea
              into a practical technology solution.
            </p>

            <a className="button button-light" href="mailto:hello@jamsystemstechnology.com">
              Start a conversation
              <span>↗</span>
            </a>
          </div>

          <div className="cta-decoration">
            <div className="cta-ring ring-one" />
            <div className="cta-ring ring-two" />
            <div className="cta-ring ring-three" />

            <div className="cta-core">
              <span>JAM</span>
              {/*<small>SYSTEMS</small>*/}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="brand">
              <span className="brand-mark">
                <span />
                <span />
                <span />
              </span>

              <span className="brand-text">
                <strong>JAM</strong>
                <strong>SYSTEMS TECHNOLOGY</strong>
              </span>
            </div>

            <p>
              Modern software and technology solutions for businesses ready
              to move forward.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <span>COMPANY</span>
              <button onClick={() => scrollToSection("about")}>
                About Us
              </button>
              <button onClick={() => scrollToSection("solutions")}>
                Solutions
              </button>
              <button onClick={() => scrollToSection("technology")}>
                Technology
              </button>
            </div>

            <div>
              <span>SOLUTIONS</span>
              <button>Software Development</button>
              <button>Website Development</button>
              <button>Mobile App Development</button>
              <button>NOVA POS</button>
              <button>Orbit ERP</button>
              <button>Virtual Assistance</button>
            </div>

            <div>
              <span>CONTACT</span>
              <button>Baliwag City, Bulacan, Philippines</button>
              <button>0956 642 8935</button>
              <a href="mailto:hello@jamsystemstechnology.com">
                hello@jamsystemstechnology.com
              </a>
              <button onClick={() => scrollToSection("contact")}>
                Start a Project
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 JAM Systems Technology. All rights reserved.</span>

          <span>
            Designed & engineered with purpose.
          </span>
        </div>
      </footer>
    </main>
  );
}