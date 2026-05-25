import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoDark from "@assets/IMG_20260525_154541_227_1779720696567.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      data-testid="navbar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 300ms ease, backdrop-filter 300ms ease, border-bottom 300ms ease",
        background: scrolled ? "rgba(10,10,10,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>
          <Link href="/" data-testid="nav-logo">
            <img
              src={logoDark}
              alt="PrymEdge"
              style={{ height: "36px", width: "auto", objectFit: "contain" }}
            />
          </Link>

          <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden-mobile">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                data-testid={`nav-link-${l.label.toLowerCase()}`}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: location === l.href ? "#F05A00" : "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  transition: "color 200ms ease-out",
                  letterSpacing: "0.02em",
                }}
                onMouseEnter={(e) => { if (location !== l.href) (e.target as HTMLElement).style.color = "#ffffff"; }}
                onMouseLeave={(e) => { if (location !== l.href) (e.target as HTMLElement).style.color = "rgba(255,255,255,0.7)"; }}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/contact" data-testid="nav-cta">
              <button
                className="pe-btn-orange"
                style={{
                  padding: "0.5rem 1.25rem",
                  borderRadius: "4px",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  cursor: "pointer",
                  border: "none",
                  textTransform: "uppercase",
                }}
              >
                Schedule a Call
              </button>
            </Link>
          </nav>

          <button
            data-testid="nav-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", color: "#ffffff", cursor: "pointer", padding: "0.5rem", display: "none" }}
            className="show-mobile"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{
              background: "rgba(10,10,10,0.97)",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              padding: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: location === l.href ? "#F05A00" : "rgba(255,255,255,0.8)",
                  textDecoration: "none",
                }}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/contact">
              <button
                className="pe-btn-orange"
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  borderRadius: "4px",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  cursor: "pointer",
                  border: "none",
                  textTransform: "uppercase",
                  marginTop: "0.5rem",
                }}
              >
                Schedule a Call
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
