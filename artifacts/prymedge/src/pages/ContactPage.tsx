import { useState, useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CheckCircle } from "lucide-react";

const ORANGE = "#F05A00";

const schema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  role: z.string().min(1, "Please enter your role"),
  hotelName: z.string().min(1, "Please enter your hotel name"),
  hotelWebsite: z.string().optional(),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  location: z.string().min(2, "Please enter your hotel's location"),
  propertyType: z.string().min(1, "Please select a property type"),
  roomCount: z.string().min(1, "Please select a room count"),
  challenge: z.string().min(30, "Please describe your challenge in at least 30 characters"),
  howHeard: z.string().min(1, "Please select an option"),
});

type FormData = z.infer<typeof schema>;

const fieldStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.75rem 1rem",
  borderRadius: "4px",
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.875rem",
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.78rem",
  fontWeight: 500,
  color: "rgba(255,255,255,0.7)",
  letterSpacing: "0.04em",
  display: "block",
  marginBottom: "0.4rem",
};

const errorStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.75rem",
  color: "#F05A00",
  marginTop: "0.35rem",
};

function WordReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const words = text.split(" ");
  return (
    <span ref={ref} style={{ display: "inline" }}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: delay + i * 0.06 }}
          style={{ display: "inline-block", marginRight: "0.3em" }}
        >
          {w}
        </motion.span>
      ))}
    </span>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true });

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      const res = await fetch("https://formspree.io/f/xdkozwdz", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Submission failed. Please try again or reach us on WhatsApp.");
      }
    } catch {
      alert("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const steps = [
    { num: "01", title: "We Review Your Application", body: "Once you submit the form, PrymEdge reviews your hotel's details and current growth challenges. We assess whether there is a strong fit before we respond." },
    { num: "02", title: "We Schedule a Conversation", body: "If the fit looks strong, we reach out within 48 hours to schedule a strategy conversation. This is not a sales call. It is a real discussion about your hotel's situation." },
    { num: "03", title: "We Map a Path Forward", body: "After the conversation, we share our initial assessment and recommend the right engagement tier for where your hotel is right now." },
  ];

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      <Navbar />

      {/* HERO */}
      <section
        ref={heroRef}
        style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "7rem 1.5rem 4rem", position: "relative", overflow: "hidden", background: "#050505" }}
      >
        <img
          src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1600&auto=format&q=70"
          alt="Hotel room desk"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0, opacity: 0.45 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.65) 55%, rgba(0,0,0,0.9) 100%)", zIndex: 1, pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 20% 60%, rgba(240,90,0,0.12) 0%, transparent 50%)", zIndex: 1, pointerEvents: "none" }} />
        <div style={{ maxWidth: "760px", textAlign: "center", position: "relative", zIndex: 2 }}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="eyebrow"
            style={{ marginBottom: "1.5rem" }}
          >
            Work With PrymEdge
          </motion.p>

          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)", fontWeight: 700, color: "#ffffff", lineHeight: 1.1, marginBottom: "1.75rem" }}>
            <WordReveal text="We Work With Hotels" delay={0.3} />
            <br />
            <WordReveal text="That Are Ready to Grow." delay={0.55} />
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.0 }}
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.85, maxWidth: "580px", margin: "0 auto" }}
          >
            PrymEdge takes on a limited number of hospitality partners at any given time. Every engagement begins the same way — with a genuine conversation about your hotel, your challenges, and whether PrymEdge is the right fit to help you grow.
            <br /><br />
            If you believe your hotel deserves a stronger brand, more direct bookings, and a more intentional growth system — this is where that begins.
          </motion.p>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section style={{ padding: "5rem 1.5rem", background: "#0d0d0d" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <AnimatedSection>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>What to Expect</p>
            <h2 className="section-headline" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: "3rem" }}>
              What Happens After<br />
              You Apply.
            </h2>
          </AnimatedSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "0" }}>
            {steps.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div style={{ padding: "1.5rem 2rem 1.5rem 0" }}>
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.8rem", fontWeight: 700, color: "rgba(240,90,0,0.2)", display: "block", lineHeight: 1, marginBottom: "0.75rem" }}>{s.num}</span>
                  <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", fontWeight: 600, color: "#f0f0f0", marginBottom: "0.6rem" }}>{s.title}</h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.75 }}>{s.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section style={{ padding: "5rem 1.5rem 7rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "660px", margin: "0 auto" }}>
          <AnimatedSection>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>The Application</p>
            <h2 className="section-headline" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: "1rem" }}>
              Tell Us About<br />
              Your Hotel.
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", lineHeight: 1.8, marginBottom: "2.5rem" }}>
              The more clearly you describe your situation, the more useful our first conversation will be. Take a moment with each question.
            </p>
          </AnimatedSection>

          {submitted ? (
            <AnimatedSection>
              <div style={{ textAlign: "center", padding: "4rem 2rem", background: "#111", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "8px" }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{ marginBottom: "1.5rem" }}
                >
                  <CheckCircle size={52} color={ORANGE} style={{ margin: "0 auto" }} />
                </motion.div>
                <h3 className="section-headline" style={{ fontSize: "2rem", marginBottom: "1rem" }}>Application Received.</h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, maxWidth: "480px", margin: "0 auto 1.25rem" }}>
                  Thank you for applying to work with PrymEdge. We have received your details and will review your hotel's situation carefully. If the fit is strong, you will hear from us within 48 hours to schedule your strategy conversation.
                </p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.35)", marginBottom: "1.25rem" }}>
                  In the meantime, explore our growth systems on the Services page.
                </p>
                <Link href="/services">
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: ORANGE, cursor: "pointer" }}>View Services →</span>
                </Link>
              </div>
            </AnimatedSection>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem 1.5rem" }}>
                  <div>
                    <label style={labelStyle} htmlFor="fullName">Full Name</label>
                    <input id="fullName" data-testid="input-fullName" {...register("fullName")} style={fieldStyle} placeholder="Your full name" />
                    {errors.fullName && <p style={errorStyle}>{errors.fullName.message}</p>}
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="role">Your Role</label>
                    <input id="role" data-testid="input-role" {...register("role")} style={fieldStyle} placeholder="Owner, GM, Director — your title" />
                    {errors.role && <p style={errorStyle}>{errors.role.message}</p>}
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="hotelName">Hotel Name</label>
                    <input id="hotelName" data-testid="input-hotelName" {...register("hotelName")} style={fieldStyle} placeholder="The name of your property" />
                    {errors.hotelName && <p style={errorStyle}>{errors.hotelName.message}</p>}
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="hotelWebsite">Hotel Website</label>
                    <input id="hotelWebsite" data-testid="input-hotelWebsite" {...register("hotelWebsite")} style={fieldStyle} placeholder="www.yourhotel.com" />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="email">Email Address</label>
                    <input id="email" data-testid="input-email" type="email" {...register("email")} style={fieldStyle} placeholder="Your business email" />
                    {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="phone">Phone Number</label>
                    <input id="phone" data-testid="input-phone" type="tel" {...register("phone")} style={fieldStyle} placeholder="Include country code" />
                    {errors.phone && <p style={errorStyle}>{errors.phone.message}</p>}
                  </div>
                  <div style={{ gridColumn: "1 / -1" }}>
                    <label style={labelStyle} htmlFor="location">Where Is Your Hotel Located?</label>
                    <input id="location" data-testid="input-location" {...register("location")} style={fieldStyle} placeholder="City and country" />
                    {errors.location && <p style={errorStyle}>{errors.location.message}</p>}
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="propertyType">Type of Property</label>
                    <select id="propertyType" data-testid="input-propertyType" {...register("propertyType")} style={fieldStyle}>
                      <option value="">Select property type</option>
                      <option value="boutique">Boutique Hotel</option>
                      <option value="mid-tier">Mid-Tier Hotel</option>
                      <option value="resort">Resort</option>
                      <option value="serviced">Serviced Apartments</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.propertyType && <p style={errorStyle}>{errors.propertyType.message}</p>}
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="roomCount">How Many Rooms?</label>
                    <select id="roomCount" data-testid="input-roomCount" {...register("roomCount")} style={fieldStyle}>
                      <option value="">Select room count</option>
                      <option value="under20">Under 20</option>
                      <option value="20-50">20–50</option>
                      <option value="51-100">51–100</option>
                      <option value="100+">100+</option>
                    </select>
                    {errors.roomCount && <p style={errorStyle}>{errors.roomCount.message}</p>}
                  </div>
                  <div style={{ gridColumn: "1 / -1" }}>
                    <label style={labelStyle} htmlFor="challenge">Your Biggest Growth Challenge</label>
                    <textarea
                      id="challenge"
                      data-testid="input-challenge"
                      {...register("challenge")}
                      rows={5}
                      style={{ ...fieldStyle, resize: "vertical", lineHeight: 1.75 }}
                      placeholder="Describe what is limiting your hotel's growth. Be specific — low bookings, weak brand, poor online presence, low conversion, inconsistent marketing, or something else entirely."
                    />
                    {errors.challenge && <p style={errorStyle}>{errors.challenge.message}</p>}
                  </div>
                  <div style={{ gridColumn: "1 / -1" }}>
                    <label style={labelStyle} htmlFor="howHeard">How Did You Hear About PrymEdge?</label>
                    <select id="howHeard" data-testid="input-howHeard" {...register("howHeard")} style={fieldStyle}>
                      <option value="">Select an option</option>
                      <option value="instagram">Instagram</option>
                      <option value="linkedin">LinkedIn</option>
                      <option value="referral">Referral</option>
                      <option value="google">Google</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.howHeard && <p style={errorStyle}>{errors.howHeard.message}</p>}
                  </div>
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <button
                    type="submit"
                    data-testid="button-submit"
                    disabled={submitting}
                    className="pe-btn-orange"
                    style={{
                      width: "100%",
                      padding: "1rem",
                      borderRadius: "4px",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      cursor: submitting ? "not-allowed" : "pointer",
                      border: "none",
                      textTransform: "uppercase",
                      opacity: submitting ? 0.7 : 1,
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {submitting ? (
                      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                        <span style={{ width: "14px", height: "14px", borderRadius: "50%", border: "2px solid rgba(255,255,255,0.4)", borderTopColor: "#fff", animation: "spin 0.8s linear infinite" }} />
                        Submitting...
                      </span>
                    ) : "Submit Your Application"}
                  </button>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.32)", textAlign: "center", marginTop: "0.875rem", lineHeight: 1.6 }}>
                    PrymEdge reviews all applications and responds within 48 hours.<br />
                    We take on a limited number of partners — not every application moves forward.
                  </p>
                </div>
              </form>
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </motion.div>
          )}
        </div>
      </section>

      {/* REASSURANCE */}
      <section style={{ padding: "5rem 1.5rem 7rem", background: "#0d0d0d" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <AnimatedSection>
            <p className="eyebrow" style={{ marginBottom: "2rem" }}>Our Commitment</p>
          </AnimatedSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "start" }}>
            <AnimatedSection>
              <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.3rem, 3vw, 1.9rem)", color: "#ffffff", lineHeight: 1.4, fontStyle: "italic" }}>
                Every hotel that applies receives a genuine, considered response. Not a template. Not an automated sequence.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
                {[
                  { title: "We read every application carefully.", body: "We review your hotel's current situation before we respond. Our reply will be specific to you." },
                  { title: "We are selective because we have to be.", body: "PrymEdge works deeply with a limited number of partners. Selectivity is how we deliver real results." },
                  { title: "No pressure. No hard selling.", body: "Our first conversation is diagnostic, not persuasive. We want to understand your hotel before we recommend anything." },
                ].map((pt, i) => (
                  <div key={i} style={{ display: "flex", gap: "1rem" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: ORANGE, flexShrink: 0, marginTop: "0.35rem" }} />
                    <div>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", fontWeight: 600, color: "#f0f0f0", marginBottom: "0.3rem" }}>{pt.title}</p>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.75 }}>{pt.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
