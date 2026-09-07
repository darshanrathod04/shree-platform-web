"use client";

import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme/theme-toggle";

const navigation = [
  { label: "Platform", href: "/platform" },
  { label: "Studio", href: "/studio" },
  { label: "Developers", href: "/developers" },
  { label: "Documentation", href: "/docs" },
  { label: "Applications", href: "/applications" },
  { label: "Research", href: "/research" },
  { label: "Roadmap", href: "/roadmap" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}
    >
      <div className="navbar-shell">
        <Link
          href="/"
          className="brand"
          onClick={() => setMobileOpen(false)}
          aria-label="Shree AI OS Home"
        >
          <div className="brand-mark">
            <img src="/brand/shree-logo.png" alt="SHREE" />
          </div>

          <div className="brand-text">
            <span className="brand-name">SHREE</span>
            <span className="brand-product">AI OS</span>
          </div>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="navbar-actions">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            GitHub
            <ArrowUpRight size={14} />
          </a>

          <ThemeToggle />

          <Link href="/docs" className="nav-cta">
            Get Started
          </Link>
        </div>

        <div className="mobile-actions">
          <ThemeToggle />

          <button
            type="button"
            className="mobile-menu-button"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((previous) => !previous)}
          >
            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${mobileOpen ? "mobile-menu-open" : ""}`}>
        <nav aria-label="Mobile navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="mobile-nav-link"
              onClick={() => setMobileOpen(false)}
            >
              <span>{item.label}</span>
              <ArrowUpRight size={16} />
            </Link>
          ))}
        </nav>

        <div className="mobile-menu-footer">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-github"
          >
            GitHub
            <ArrowUpRight size={15} />
          </a>

          <Link
            href="/docs"
            className="mobile-get-started"
            onClick={() => setMobileOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}