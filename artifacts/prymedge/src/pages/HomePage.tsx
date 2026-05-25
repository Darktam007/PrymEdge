import { useState, useRef, useEffect } from "react";
import { Link } from "wouter";
import { motion, useInView, animate } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { AnimatedSection, AnimatedLine } from "@/components/ui/AnimatedSection";

const ORANGE = "#F05A00";

function WordReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const words = text.split(" ");

  return (
    <span ref={ref} style={{ display: "inline" }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: delay + i * 0.06 }}
          style={{ display: "inline-block", marginRight: "0.3em" }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

function ServiceAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  const services = [
    {
      title: "Hospitality Brand Positioning System",
      body: "Your hotel needs an identity that stands apart. We define your positioning, articulate what makes your property emotionally compelling, and build the brand architecture that everything else runs on.",
      impact: "Improves: guest desirability, perceived value, premium pricing ability",
    },
    {
      title: "Hospitality Content & Storytelling System",
      body: "Content without strategy is noise. We build a storytelling system with clear direction, emotional narrative, and consistent visual language — so every post, campaign, and caption builds toward a brand guests want to experience.",
      impact: "Improves: online presence, audience engagement, emotional connection",
    },
    {
      title: "Direct Booking & Conversion System",
      body: "We audit and rebuild your booking journey — from first impression to completed reservation. WhatsApp inquiry flows, website conversion paths, offer structuring, and response systems that turn interest into confirmed bookings.",
      impact: "Improves: direct booking rate, inquiry conversion, revenue per visitor",
    },
    {
      title: "Hospitality Guest Acquisition System",
      body: "We design and run paid and organic acquisition campaigns targeted at the right guests for your property — using Meta, TikTok, and content-driven strategies that compound over time.",
      impact: "Improves: visibility, audience growth, cost per booking",
    },
    {
      title: "Website & Digital Experience System",
      body: "Your website is your most important salesperson. We audit, redesign, and optimize your digital presence to ensure it converts visitors into guests — with the speed, clarity, and emotional impact that drives decisions.",
      impact: "Improves: website conversion, digital trust, guest first impression",
    },
    {
      title: "Hospitality Offer & Revenue Strategy System",
      body: "We help you structure your offers, packages, and pricing in a way that increases average guest spend, improves perceived value, and creates genuine reasons to book directly rather than through third-party platforms.",
      impact: "Improves: revenue per guest, offer clarity, booking incentives",
    },
    {
      title: "Hospitality Staff Experience Training",
      body: "Your team is part of your brand. We train guest-facing staff on brand communication, hospitality standards, and guest experience delivery — so the brand promise holds at every human touchpoint.",
      impact: "Improves: guest experience consistency, review quality, repeat bookings",
    },
  ];

  return (
    <div>
      {services.map((s, i) => (
        <div
          key={i}
          className="accordion-line"
          data-testid={`service-accordion-${i}`}
          style={{ cursor: "pointer" }}
          onClick={() => setOpen(open === i ? null : i)}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.25rem 0" }}>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", fontWeight: 500, color: "#f0f0f0" }}>
              {s.title}
            </span>
            <motion.div
              animate={{ rotate: open === i ? 45 : 0 }}
              transition={{ duration: 0.3 }}
              style={{ color: ORANGE, flexShrink: 0, marginLeft: "1rem" }}
            >
              <Plus size={18} />
            </motion.div>
          </div>
          <motion.div
            initial={false}
            animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ paddingBottom: "1.5rem" }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.75, marginBottom: "0.75rem" }}>
                {s.body}
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: "rgba(240,90,0,0.85)", fontStyle: "italic" }}>
                {s.impact}
              </p>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    { q: "Is PrymEdge a social media agency?", a: "No. PrymEdge is a hospitality growth and brand systems company. Social media is one channel inside a larger system we build. We are not a posting service. We are a strategic growth partner." },
    { q: "Do we need a big marketing budget to work with you?", a: "You need a willingness to invest in systems that compound over time. PrymEdge is not built for hotels looking for the cheapest option. We work with owners who understand that perception and brand directly affect revenue." },
    { q: "How involved does our team need to be?", a: "Minimal. Your team handles daily operations. PrymEdge handles strategy, content direction, campaigns, and optimization. We are designed to reduce your workload, not add to it." },
    { q: "How long before we see results?", a: "The 30-day audit gives you clarity immediately. The 90-day partnership builds the systems. Meaningful booking and revenue results typically develop within the first 60 to 90 days of active system implementation." },
    { q: "Do you work with hotels outside Nigeria?", a: "PrymEdge is built to serve hospitality businesses across Africa and beyond. If your hotel operates in a market where perception, digital presence, and booking conversion matter — we can help." },
    { q: "What makes PrymEdge different from other marketing companies?", a: "Most marketing companies manage tasks. PrymEdge builds systems. The difference is that tasks stop when the contract pauses. Systems compound when the contract continues. We measure ourselves against your revenue growth, not your follower count." },
  ];

  return (
    <div>
      {faqs.map((f, i) => (
        <div
          key={i}
          className="accordion-line"
          data-testid={`faq-${i}`}
          style={{ cursor: "pointer" }}
          onClick={() => setOpen(open === i ? null : i)}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.25rem 0" }}>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", fontWeight: 500, color: "#f0f0f0" }}>
              {f.q}
            </span>
            <motion.div
              animate={{ rotate: open === i ? 45 : 0 }}
              transition={{ duration: 0.3 }}
              style={{ color: ORANGE, flexShrink: 0, marginLeft: "1rem" }}
            >
              <Plus size={16} />
            </motion.div>
          </div>
          <motion.div
            initial={false}
            animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.75, paddingBottom: "1.25rem" }}>
              {f.a}
            </p>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

function PulseCTA() {
  const ref = useRef<HTMLButtonElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const pulsed = useRef(false);

  useEffect(() => {
    if (inView && !pulsed.current && ref.current) {
      pulsed.current = true;
      animate(ref.current, { scale: [1, 1.02, 1] }, { duration: 1.2, ease: "easeInOut" });
    }
  }, [inView]);

  return (
    <Link href="/contact">
      <button
        ref={ref}
        data-testid="hero-final-cta"
        className="pe-btn-orange"
        style={{
          padding: "1rem 2.5rem",
          borderRadius: "4px",
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.9rem",
          fontWeight: 600,
          letterSpacing: "0.06em",
          cursor: "pointer",
          border: "none",
          textTransform: "uppercase",
          display: "inline-block",
        }}
      >
        Schedule a Strategy Conversation
      </button>
    </Link>
  );
}

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true });

  const systems = [
    { num: "01", title: "Perception System", sub: "Brand & Identity", body: "Before a guest books, they form a judgment. We control what that judgment is. Brand positioning, visual identity, storytelling architecture, and emotional direction — designed to make your hotel feel like the obvious choice." },
    { num: "02", title: "Acquisition System", sub: "Marketing & Visibility", body: "You cannot convert guests who never find you. We build the campaigns, content strategies, and paid acquisition systems that place your hotel in front of the right guests at the right moment — consistently." },
    { num: "03", title: "Conversion System", sub: "Bookings & Revenue", body: "Visibility without conversion is wasted investment. We optimize every step of the booking journey — from the first Instagram post to the final payment — so that interest becomes revenue reliably." },
  ];

  const cards = [
    {
      title: "How We Grow Your Revenue",
      points: ["Improve occupancy rates", "Increase guest spending per stay", "Optimize pricing perception", "Fix revenue leaks in your booking flow"],
    },
    {
      title: "How We Get You Direct Bookings",
      points: ["Increase direct reservations", "Reduce platform dependency", "Improve inquiry-to-booking conversion", "Build owned audience systems"],
    },
    {
      title: "How We Build Your Brand's Desirability",
      points: ["Define your hotel's unique positioning", "Build consistent visual and verbal identity", "Create storytelling that converts attention into desire", "Ensure every touchpoint reinforces your brand"],
    },
  ];

  const magnets = [
    { title: "Free Hotel Brand & Booking Audit", body: "We review your hotel's online presence, brand perception, and booking journey — then show you exactly where growth is being lost and what to fix first. No obligation. No templates. A real strategic review.", cta: "Request Your Free Audit" },
    { title: "Hospitality Content Strategy Session", body: "We map a content direction tailored to your property — designed to improve guest perception, strengthen your digital presence, and support direct bookings from the right audience.", cta: "Request Content Strategy" },
    { title: "Revenue Growth Consultation", body: "A focused conversation about where your hotel's revenue systems are underperforming — and how targeted improvements to acquisition, conversion, and brand can change the numbers.", cta: "Book Growth Consultation" },
  ];

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      <Navbar />

      {/* HERO */}
      <section
        ref={heroRef}
        style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "7rem 1.5rem 4rem", position: "relative", overflow: "hidden", background: "#050505" }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0, opacity: 0.7 }}
          src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-luxury-hotel-and-pool-4161-small.mp4"
          poster="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&auto=format&q=60"
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.88) 100%)", zIndex: 1, pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 15% 65%, rgba(240,90,0,0.18) 0%, transparent 52%)", zIndex: 1, pointerEvents: "none" }} />
        <div style={{ maxWidth: "860px", textAlign: "center", position: "relative", zIndex: 2 }}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="eyebrow"
            style={{ marginBottom: "1.5rem" }}
          >
            Hospitality Growth Systems
          </motion.p>

          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.8rem, 6vw, 5.5rem)", fontWeight: 700, color: "#ffffff", lineHeight: 1.08, marginBottom: "1.75rem" }}>
            <WordReveal text="Your Hotel Is Better Than" delay={0.3} />
            <br />
            <WordReveal text="How It Looks Online." delay={0.6} />
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1rem, 2.5vw, 1.15rem)", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: "2.5rem", maxWidth: "640px", margin: "0 auto 2.5rem" }}>
              Most hotels lose bookings not because their rooms are lacking — but because their brand, story, and online presence fail to create desire before a guest ever arrives.
              <br /><br />
              PrymEdge builds the systems that fix this.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 1.5 }}
            style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
          >
            <Link href="/contact">
              <button
                data-testid="hero-primary-cta"
                className="pe-btn-orange"
                style={{ padding: "0.9rem 2rem", borderRadius: "4px", fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.05em", cursor: "pointer", border: "none", textTransform: "uppercase" }}
              >
                Get Your Free Hotel Audit
              </button>
            </Link>
            <Link href="/services">
              <button
                data-testid="hero-secondary-cta"
                className="pe-btn-ghost"
                style={{ padding: "0.9rem 2rem", borderRadius: "4px", fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", fontWeight: 500, cursor: "pointer", background: "transparent" }}
              >
                See How It Works
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* PROBLEM */}
      <section style={{ padding: "6rem 1.5rem", background: "#0d0d0d" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <AnimatedSection>
            <p className="eyebrow" style={{ marginBottom: "1.25rem" }}>The Real Problem</p>
            <h2 className="section-headline" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", maxWidth: "780px", marginBottom: "1.5rem" }}>
              Your Guests Decide Before They Arrive.<br />
              Most Hotels Are Losing Them Before That Decision Is Made.
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.6)", fontSize: "1rem", lineHeight: 1.8, maxWidth: "640px", marginBottom: "3.5rem" }}>
              A hotel owner invests in rooms, staff, and service. But guests don't experience any of that until they book. Before the booking, all they have is perception.
              <br /><br />
              And perception is built online.
            </p>
          </AnimatedSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", marginBottom: "3.5rem" }}>
            {[
              { title: "Weak Brand Identity", body: "Your hotel looks like every other hotel online. No clear character. No emotional pull. Nothing that makes a guest stop scrolling and feel something." },
              { title: "No Storytelling System", body: "You're posting content without a direction. Random visuals, inconsistent tone, no narrative thread. Guests see activity but feel nothing." },
              { title: "Broken Conversion Journey", body: "People find your hotel, look at your page or website, and leave without booking. The interest exists. The system to capture it doesn't." },
            ].map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.12}>
                <div style={{ borderLeft: `3px solid ${ORANGE}`, paddingLeft: "1.25rem" }}>
                  <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", fontWeight: 600, color: "#f0f0f0", marginBottom: "0.6rem" }}>{p.title}</h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "rgba(255,255,255,0.58)", lineHeight: 1.75 }}>{p.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div style={{ position: "relative", borderRadius: "8px", overflow: "hidden", marginBottom: "3.5rem", height: "320px" }}>
              <img
                src="https://images.unsplash.com/photo-1559508551-44bff1de756b?w=1400&auto=format&q=75"
                alt="Hotel corridor"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.5) 100%)" }} />
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "2rem 3rem" }}>
                <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.3rem, 3vw, 2rem)", color: "#ffffff", fontStyle: "italic", maxWidth: "480px", lineHeight: 1.4 }}>
                  "The best hotels in the world aren't just beautiful places to stay — they're stories people want to be part of."
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.2rem, 3vw, 1.8rem)", color: "#ffffff", textAlign: "center", fontStyle: "italic" }}>
              This is not a content problem.<br />
              This is a systems problem.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* HOW WE DO IT */}
      <section style={{ padding: "6rem 1.5rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <AnimatedSection>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>How We Do It For You</p>
            <h2 className="section-headline" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: "3rem" }}>
              Three Ways PrymEdge<br />
              Moves Your Hotel Forward.
            </h2>
          </AnimatedSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {cards.map((c, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div
                  className="card-glow"
                  data-testid={`card-how-${i}`}
                  style={{
                    background: "#111111",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "6px",
                    padding: "2rem",
                    height: "100%",
                  }}
                >
                  <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", fontWeight: 600, color: "#f0f0f0", marginBottom: "1rem" }}>
                    <span style={{ display: "block", height: "2px", width: "24px", background: ORANGE, marginBottom: "0.75rem" }} />
                    {c.title}
                  </h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {c.points.map((pt, j) => (
                      <li key={j} style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", marginBottom: "0.5rem", paddingLeft: "1rem", position: "relative" }}>
                        <span style={{ position: "absolute", left: 0, color: ORANGE }}>—</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* THE SYSTEM */}
      <section style={{ padding: "6rem 1.5rem", background: "#0f0f0f" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <AnimatedSection>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>The PrymEdge System</p>
            <h2 className="section-headline" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: "1rem" }}>
              Three Systems.<br />
              One Outcome: A Hotel That Grows.
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.8, maxWidth: "600px", marginBottom: "4rem" }}>
              Most hospitality businesses treat marketing as a series of disconnected tasks. PrymEdge operates differently. We build three interconnected systems designed to work together — so that growth compounds over time rather than resets every month.
            </p>
          </AnimatedSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "0", position: "relative" }}>
            {systems.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.18}>
                <div style={{ padding: "2rem", borderTop: `3px solid ${i === 0 ? ORANGE : "rgba(255,255,255,0.08)"}`, position: "relative" }}>
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "3.5rem", fontWeight: 700, color: "rgba(240,90,0,0.12)", display: "block", lineHeight: 1, marginBottom: "0.5rem" }}>{s.num}</span>
                  <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.25rem", fontWeight: 600, color: "#f0f0f0", marginBottom: "0.25rem" }}>{s.title}</h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: ORANGE, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>{s.sub}</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.75 }}>{s.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", color: "#ffffff", textAlign: "center", marginTop: "3rem", fontStyle: "italic" }}>
              Most agencies manage one of these.<br />
              PrymEdge builds all three — and connects them.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SERVICES ACCORDION */}
      <section style={{ padding: "6rem 1.5rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <AnimatedSection>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>Our Systems</p>
            <h2 className="section-headline" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: "1rem" }}>
              Hospitality Growth Services<br />
              Built Around One Thing: Revenue.
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "3rem" }}>
              Every service PrymEdge offers exists to move a specific business needle — perception, acquisition, or conversion. Nothing is decorative. Everything connects to your hotel's growth.
            </p>
          </AnimatedSection>
          <AnimatedSection>
            <ServiceAccordion />
          </AnimatedSection>
        </div>
      </section>

      {/* PARTNERSHIP */}
      <section style={{ padding: "6rem 1.5rem", background: "#0d0d0d" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <AnimatedSection>
            <p className="eyebrow" style={{ marginBottom: "1.25rem" }}>The Partnership</p>
          </AnimatedSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
            <AnimatedSection delay={0.1} style={{ gridColumn: "span 1" }}>
              <div style={{ position: "relative", borderRadius: "8px", overflow: "hidden", height: "500px" }}>
                <img
                  src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&auto=format&q=80"
                  alt="Luxury hotel lobby"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.05) 60%)" }} />
                <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem" }}>
                  <span style={{ display: "inline-block", background: "#F05A00", color: "#fff", fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", padding: "0.4rem 0.85rem", borderRadius: "3px" }}>
                    Your Growth Partner
                  </span>
                </div>
              </div>
            </AnimatedSection>
            <div>
            <AnimatedSection>
              <h2 className="section-headline" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", marginBottom: "1.5rem" }}>
                You Run the Hotel.<br />
                We Run the Growth.
              </h2>
              <p style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.65)", fontSize: "0.95rem", lineHeight: 1.85 }}>
                PrymEdge operates as your external growth and brand department. Not a vendor. Not a freelancer. A strategic partner embedded in your hotel's growth — without adding to your operational complexity.
                <br /><br />
                You focus on delivering exceptional hospitality.<br />
                We handle everything that gets guests through your doors.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "1.25rem" }}>
                What PrymEdge manages for you
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem 0" }}>
                {[
                  "Brand strategy and positioning",
                  "Content direction and storytelling systems",
                  "Paid advertising campaigns",
                  "Booking conversion optimization",
                  "Website and digital experience",
                  "Guest acquisition systems",
                  "Offer and revenue structure",
                  "Staff experience training",
                  "Monthly performance reviews and strategy updates",
                ].map((item, i) => (
                  <li key={i} style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "rgba(255,255,255,0.65)", marginBottom: "0.6rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: ORANGE, flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            </div>
          </div>

          <AnimatedSection delay={0.2}>
            <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.2rem, 3vw, 1.8rem)", color: "#ffffff", textAlign: "center", marginTop: "3rem", fontStyle: "italic" }}>
              Our partners don't manage marketing.<br />
              They watch it work.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* LEAD MAGNETS INTRO */}
      <section style={{ padding: "6rem 1.5rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <AnimatedSection>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>Start Here</p>
            <h2 className="section-headline" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
              Three Ways to Begin<br />
              Working With PrymEdge.
            </h2>
          </AnimatedSection>
        </div>
      </section>

      {/* LEAD MAGNET 1 — Audit */}
      <section style={{ padding: "5rem 1.5rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
            <AnimatedSection>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "5rem", fontWeight: 700, color: "rgba(240,90,0,0.10)", lineHeight: 1, display: "block", marginBottom: "-0.5rem" }}>01</span>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 700, color: "#f5f5f5", marginBottom: "1rem", lineHeight: 1.2 }}>
                Free Hotel Brand<br />&amp; Booking Audit
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", color: "rgba(255,255,255,0.62)", lineHeight: 1.8, marginBottom: "2rem" }}>
                We review your hotel's online presence, brand perception, and booking journey — then show you exactly where growth is being lost and what to fix first. No obligation. No templates. A real strategic review.
              </p>
              <Link href="/contact">
                <button data-testid="magnet-cta-0" className="pe-btn-orange" style={{ padding: "0.85rem 2rem", borderRadius: "4px", fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", fontWeight: 600, letterSpacing: "0.06em", cursor: "pointer", border: "none", textTransform: "uppercase" }}>
                  Request Your Free Audit
                </button>
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div style={{ position: "relative", borderRadius: "8px", overflow: "hidden", height: "420px" }}>
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&auto=format&q=80"
                  alt="Luxury hotel exterior"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(240,90,0,0.18) 0%, rgba(0,0,0,0.35) 100%)" }} />
                <div style={{ position: "absolute", top: "1.5rem", right: "1.5rem", background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)", border: "1px solid rgba(240,90,0,0.4)", borderRadius: "6px", padding: "1rem 1.25rem" }}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: "#F05A00", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.2rem" }}>Included</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.5 }}>Brand review<br />Booking journey audit<br />Growth gap report</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* LEAD MAGNET 2 — Content Strategy */}
      <section style={{ padding: "5rem 1.5rem", background: "#0d0d0d" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
            <AnimatedSection delay={0.1}>
              <div style={{ position: "relative", borderRadius: "8px", overflow: "hidden", height: "420px" }}>
                <img
                  src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&q=80"
                  alt="Hotel interior"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.15) 100%)" }} />
                <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", right: "1.5rem" }}>
                  <div style={{ background: "rgba(240,90,0,0.92)", borderRadius: "5px", padding: "0.85rem 1.1rem" }}>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#fff", opacity: 0.85 }}>What you receive</p>
                    <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", color: "#fff", fontStyle: "italic", marginTop: "0.2rem" }}>A content direction tailored to your property — not a template.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "5rem", fontWeight: 700, color: "rgba(240,90,0,0.10)", lineHeight: 1, display: "block", marginBottom: "-0.5rem" }}>02</span>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 700, color: "#f5f5f5", marginBottom: "1rem", lineHeight: 1.2 }}>
                Hospitality Content<br />Strategy Session
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", color: "rgba(255,255,255,0.62)", lineHeight: 1.8, marginBottom: "2rem" }}>
                We map a content direction tailored to your property — designed to improve guest perception, strengthen your digital presence, and support direct bookings from the right audience.
              </p>
              <Link href="/contact">
                <button data-testid="magnet-cta-1" className="pe-btn-orange" style={{ padding: "0.85rem 2rem", borderRadius: "4px", fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", fontWeight: 600, letterSpacing: "0.06em", cursor: "pointer", border: "none", textTransform: "uppercase" }}>
                  Request Content Strategy
                </button>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* LEAD MAGNET 3 — Revenue Growth */}
      <section style={{ padding: "0", background: "#0a0a0a", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "relative", minHeight: "520px", display: "flex", alignItems: "center" }}>
          <img
            src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1400&auto=format&q=75"
            alt="Luxury hotel room"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(100deg, rgba(0,0,0,0.93) 0%, rgba(0,0,0,0.82) 45%, rgba(0,0,0,0.5) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 10% 50%, rgba(240,90,0,0.14) 0%, transparent 55%)" }} />
          <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "5rem 1.5rem", position: "relative", zIndex: 1, width: "100%" }}>
            <div style={{ maxWidth: "560px" }}>
              <AnimatedSection>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "5rem", fontWeight: 700, color: "rgba(240,90,0,0.12)", lineHeight: 1, display: "block", marginBottom: "-0.5rem" }}>03</span>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 700, color: "#f5f5f5", marginBottom: "1rem", lineHeight: 1.2 }}>
                  Revenue Growth<br />Consultation
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", color: "rgba(255,255,255,0.72)", lineHeight: 1.8, marginBottom: "2rem" }}>
                  A focused conversation about where your hotel's revenue systems are underperforming — and how targeted improvements to acquisition, conversion, and brand can change the numbers.
                </p>
                <Link href="/contact">
                  <button data-testid="magnet-cta-2" className="pe-btn-orange" style={{ padding: "0.85rem 2rem", borderRadius: "4px", fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", fontWeight: 600, letterSpacing: "0.06em", cursor: "pointer", border: "none", textTransform: "uppercase" }}>
                    Book Growth Consultation
                  </button>
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: "7rem 1.5rem", background: "#090909", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <AnimatedSection>
            <h2 className="section-headline" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", marginBottom: "1.5rem" }}>
              Your Hotel Deserves to Be<br />
              as Good Online as It Is in Person.
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.6)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "2.5rem" }}>
              PrymEdge works with hotels that are ready to close the gap between the experience they deliver and the one guests perceive online. If that is your hotel, we should talk.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.25}>
            <PulseCTA />
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.35)", marginTop: "1rem" }}>
              No commitment required. We start with a conversation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "6rem 1.5rem", background: "#0d0d0d" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <AnimatedSection>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>Common Questions</p>
            <h2 className="section-headline" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: "3rem" }}>
              What Hotel Owners<br />
              Usually Ask Us First.
            </h2>
          </AnimatedSection>
          <AnimatedSection>
            <FaqAccordion />
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
