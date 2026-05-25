import { Link } from "wouter";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import logoDark from "@assets/IMG_20260525_154541_227_1779720696567.png";

export default function Footer() {
  return (
    <footer
      data-testid="footer"
      style={{
        background: "#080808",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        padding: "4rem 1.5rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "3rem",
          marginBottom: "3rem",
        }}>
          <div>
            <Link href="/">
              <img src={logoDark} alt="PrymEdge" style={{ height: "32px", width: "auto", marginBottom: "0.75rem" }} />
            </Link>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.5)", marginTop: "0.5rem" }}>
              Hospitality Growth Systems
            </p>
          </div>

          <div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "1rem" }}>
              Navigation
            </p>
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[["Home", "/"], ["Services", "/services"], ["Contact", "/contact"]].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  data-testid={`footer-link-${label.toLowerCase()}`}
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "rgba(255,255,255,0.6)", textDecoration: "none", transition: "color 200ms ease-out" }}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.color = "#F05A00"}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.color = "rgba(255,255,255,0.6)"}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "1rem" }}>
              Ready to Grow?
            </p>
            <Link
              href="/contact"
              data-testid="footer-cta"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "#F05A00", textDecoration: "none", transition: "opacity 200ms ease-out" }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = "0.8"}
              onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = "1"}
            >
              Submit Your Application →
            </Link>
          </div>

          <div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "1rem" }}>
              Follow
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
              <a
                href="#"
                data-testid="footer-instagram"
                aria-label="Instagram"
                style={{ color: "rgba(255,255,255,0.6)", transition: "color 200ms ease-out" }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = "#F05A00"}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = "rgba(255,255,255,0.6)"}
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                data-testid="footer-linkedin"
                aria-label="LinkedIn"
                style={{ color: "rgba(255,255,255,0.6)", transition: "color 200ms ease-out" }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = "#F05A00"}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = "rgba(255,255,255,0.6)"}
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "2rem", textAlign: "center" }}>
          <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontSize: "0.875rem", color: "rgba(255,255,255,0.35)", marginBottom: "0.75rem" }}>
            Perception builds desire. Desire drives bookings. Systems make it sustainable.
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.28)" }}>
            &copy; 2025 PrymEdge. All rights reserved. &mdash; Built for hospitality businesses ready to grow.
          </p>
        </div>
      </div>
    </footer>
  );
}
