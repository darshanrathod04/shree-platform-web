"use client";

import Link from "next/link";

const platformLinks = [
  { label: "Platform", href: "/platform" },
  { label: "Architecture", href: "/architecture" },
  { label: "Applications", href: "/#applications" },
  { label: "Roadmap", href: "/#roadmap" },
];

const developerLinks = [
  { label: "Developers", href: "/#developers" },
  { label: "SDK", href: "/sdk" },
  { label: "Documentation", href: "/docs" },
  { label: "Research", href: "/#research" },
];

const resourceLinks = [
  { label: "GitHub", href: "#" },
  { label: "Constitution", href: "/constitution" },
  { label: "Mission", href: "/mission" },
  { label: "Vision", href: "/vision" },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">

      {/* Final CTA */}
      <section className="footer-cta">
        <div className="footer-cta-glow" />

        <div className="footer-container footer-cta-content">

          <span className="footer-cta-label">
            SHREE AI OS
          </span>

          <h2>
            Build the next
            <br />
            <span>intelligent system.</span>
          </h2>

          <p>
            Explore the platform, understand the architecture,
            and build intelligent software on Shree AI OS.
          </p>

          <div className="footer-cta-actions">

            <Link
              href="/platform"
              className="footer-primary-button"
            >
              Explore Platform
              <span>↗</span>
            </Link>

            <Link
              href="/docs"
              className="footer-secondary-button"
            >
              Read Documentation
            </Link>

          </div>

        </div>
      </section>


      {/* Footer Main */}
      <div className="footer-main">

        <div className="footer-container">

          <div className="footer-grid">

            {/* Brand */}
            <div className="footer-brand">

              <Link
                href="/"
                className="footer-brand-link"
              >
                <div className="footer-logo">

                  {/* Master SHREE emblem */}
                  <div className="footer-logo-ring">
                    <img src="/brand/shree-logo.png" alt="SHREE" />
                  </div>

                </div>

                <div className="footer-brand-name">
                  <strong>SHREE</strong>
                  <span>AI OS</span>
                </div>
              </Link>

              <p>
                A platform for building intelligent software
                with reusable infrastructure, explicit
                architecture, and developer-focused interfaces.
              </p>

              <span className="footer-brand-status">
                <span />
                PLATFORM FOUNDATION
              </span>

            </div>


            {/* Platform */}
            <div className="footer-column">

              <h3>Platform</h3>

              <nav>
                {platformLinks.map((link) => (
                  <Link
                    href={link.href}
                    key={link.label}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

            </div>


            {/* Developers */}
            <div className="footer-column">

              <h3>Developers</h3>

              <nav>
                {developerLinks.map((link) => (
                  <Link
                    href={link.href}
                    key={link.label}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

            </div>


            {/* Resources */}
            <div className="footer-column">

              <h3>Resources</h3>

              <nav>
                {resourceLinks.map((link) => (
                  <Link
                    href={link.href}
                    key={link.label}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

            </div>

          </div>


          {/* Footer Divider */}
          <div className="footer-divider" />


          {/* Footer Bottom */}
          <div className="footer-bottom">

            <div>
              © {new Date().getFullYear()} Shree AI OS
            </div>

            <div className="footer-bottom-center">
              Built for intelligent software.
            </div>

            <div className="footer-bottom-right">
              <span>V1</span>
              <span>PLATFORM FOUNDATION</span>
            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}