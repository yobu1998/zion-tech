import { useState, useEffect, useRef, useCallback } from "react";

// ─── DATA LAYER ────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    id: 1, title: "Starter Business Site", category: "Web Design",
    price: 15000, billing: "one-time setup", speed: "5-7 Days Delivery",
    tag: "Most Popular", type: "Low-Code / WordPress",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80",
      "https://images.unsplash.com/photo-1542744094-2ab25be78b90?w=900&q=80",
    ],
    desc: "Perfect for local shops, cafes, and service providers looking to get noticed online. Fully responsive, clean layout optimized heavily for mobile phones and local search presence.",
    features: ["5 Professional Pages", "Google Maps Integration", "WhatsApp Direct Chat", "Basic Local SEO Set Up", "1 Year Domain & Hosting Support"],
    advisor: "Yobu Siluvairaj", timeline: "1 Week"
  },
  {
    id: 2, title: "E-Commerce Launchpad", category: "E-Commerce",
    price: 35000, billing: "one-time setup", speed: "14 Days Delivery",
    tag: "High Value", type: "WooCommerce / Custom Blend",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80",
      "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=900&q=80",
    ],
    desc: "Take your physical store inventory straight to the local digital market. Secure product management, instant online payments setup, and an incredibly simple dashboard to manage your sales.",
    features: ["Inventory Up to 100 Products", "Payment Gateway Integration", "Order Automated Receipts", "Customer Accounts Panel", "Complete Sales Analytics Log"],
    advisor: "Yobu Siluvairaj", timeline: "2 Weeks"
  },
  {
    id: 3, title: "Custom Web Application", category: "Development",
    price: 75000, billing: "from base rate", speed: "Custom Timeline",
    tag: "Premium", type: "Python / Django / Robust API",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&q=80",
    ],
    desc: "Tailored to demanding business requirements needing proprietary logic, scheduling algorithms, interactive client portals, or internal management pipelines built securely from scratch.",
    features: ["Custom Python Backend", "Relational SQL Architecture", "Secure Custom REST API Endpoints", "Advanced User Authentication", "GCP Cloud Infrastructure Architecture"],
    advisor: "Yobu Siluvairaj", timeline: "Flexible"
  }
];

const PORTFOLIO = [
  { title: "Thoppi Vappa Biryani", niche: "Restaurant & Dine-in", outcome: "Digital Menu & Smart Routing Maps Boosted Store Footfall by 40%", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80" },
  { title: "Elite Dental Care", niche: "Healthcare Clinic", outcome: "Automated Appointment Scheduling Engine Dropped No-Shows by 65%", img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80" },
  { title: "Apex Fitness Studio", niche: "Gym & Wellness", outcome: "Simplified Monthly Membership Checkout Pipeline Generated 150+ New Signups", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80" }
];

const STATS = [
  { value: "100%", label: "Local Delivery Rate" },
  { value: "3x", label: "Average Business Growth" },
  { value: "24/7", label: "Reliable Tech Support" },
  { value: "0+", label: "Hidden Monthly Fees" },
];

// ─── UTILITY HOOKS ─────────────────────────────────────────────────────────────
function useIntersection(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function useFavorites() {
  const [favs, setFavs] = useState(() => JSON.parse(localStorage.getItem("zion_favs") || "[]"));
  const toggle = useCallback((id) => {
    setFavs(prev => {
      const next = prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id];
      localStorage.setItem("zion_favs", JSON.stringify(next));
      return next;
    });
  }, []);
  return [favs, toggle];
}

// ─── STYLE INJECTION (CYAN TECH VARIANT) ──────────────────────────────────────────
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');

  #root { max-width: 100% !important; padding: 0 !important; margin: 0 !important; width: 100% !important; text-align: left !important; }
  body { display: block !important; place-items: stretch !important; min-height: 100vh !important; }
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --dark: #070a0f;
    --dark-surface: #0f1520;
    --dark-card: #141c2b;
    --accent: #00f2fe;
    --accent-glow: rgba(0, 242, 254, 0.15);
    --muted: #7e8b9b;
    --text: #f1f5f9;
    --white: #ffffff;
    --danger: #ff4a4a;
    --font-heading: 'Space Grotesk', system-ui, sans-serif;
    --font-body: 'Plus Jakarta Sans', system-ui, sans-serif;
    --ease: cubic-bezier(0.4, 0, 0.2, 1);
    --ease-out: cubic-bezier(0, 0, 0.2, 1);
  }

  html { scroll-behavior: smooth; }
  body { font-family: var(--font-body) !important; background: var(--dark) !important; color: var(--text) !important; overflow-x: hidden; }

  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: var(--dark-surface); }
  ::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 2px; }

  .heading { font-family: var(--font-heading); }
  .accent-text { color: var(--accent); }

  .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.6s var(--ease-out), transform 0.6s var(--ease-out); }
  .reveal.visible { opacity: 1; transform: translateY(0); }
  .reveal-left { opacity: 0; transform: translateX(-30px); transition: opacity 0.7s var(--ease-out), transform 0.7s var(--ease-out); }
  .reveal-left.visible { opacity: 1; transform: translateX(0); }
  .reveal-right { opacity: 0; transform: translateX(30px); transition: opacity 0.7s var(--ease-out), transform 0.7s var(--ease-out); }
  .reveal-right.visible { opacity: 1; transform: translateX(0); }

  /* NAVBAR */
  .navbar {
    position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 60px; height: 76px;
    transition: background 0.4s var(--ease), backdrop-filter 0.4s var(--ease);
  }
  .navbar.scrolled {
    background: rgba(7, 10, 15, 0.85); backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(0, 242, 254, 0.1);
  }
  .nav-logo { font-family: var(--font-heading); font-size: 1.5rem; font-weight: 700; letter-spacing: -0.02em; cursor: pointer; }
  .nav-logo span { color: var(--accent); }
  .nav-links { display: flex; gap: 32px; align-items: center; }
  .nav-link {
    font-size: 0.85rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em;
    color: var(--muted); cursor: pointer; position: relative; background: none; border: none; font-family: var(--font-body);
    transition: color 0.3s;
  }
  .nav-link::after {
    content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 2px;
    background: var(--accent); transition: width 0.3s var(--ease);
  }
  .nav-link:hover, .nav-link.active { color: var(--text); }
  .nav-link:hover::after, .nav-link.active::after { width: 100%; }
  .nav-cta {
    padding: 10px 22px; border: 1px solid var(--accent); color: var(--accent);
    font-size: 0.8rem; letter-spacing: 0.05em; text-transform: uppercase; font-weight: 600;
    cursor: pointer; background: transparent; font-family: var(--font-body);
    transition: all 0.3s; box-shadow: 0 0 15px var(--accent-glow);
  }
  .nav-cta:hover { background: var(--accent); color: var(--dark); box-shadow: 0 0 25px var(--accent); }
  .nav-favs { position: relative; background: none; border: none; cursor: pointer; color: var(--muted); font-size: 1.3rem; }
  .nav-favs:hover { color: var(--accent); }
  .fav-badge {
    position: absolute; top: -5px; right: -8px; background: var(--accent); color: var(--dark);
    font-size: 0.65rem; font-weight: 700; width: 16px; height: 16px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
  }

  /* HERO */
  .hero { height: 90vh; position: relative; display: flex; align-items: center; overflow: hidden; width: 100%; }
  .hero-bg {
    position: absolute; inset: 0;
    background: radial-gradient(circle at 80% 20%, #162436 0%, var(--dark) 70%);
  }
  .hero-content { position: relative; z-index: 2; padding: 0 60px; max-width: 850px; }
  .hero-eyebrow { font-family: var(--font-heading); font-size: 0.85rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--accent); font-weight: 600; margin-bottom: 20px; }
  .hero-title { font-family: var(--font-heading); font-size: clamp(2.8rem, 5.5vw, 4.8rem); font-weight: 700; line-height: 1.1; color: var(--white); margin-bottom: 24px; }
  .hero-sub { font-size: 1.05rem; font-weight: 400; color: var(--muted); line-height: 1.6; max-width: 600px; margin-bottom: 40px; }
  .hero-actions { display: flex; gap: 16px; }

  .btn-primary {
    padding: 14px 36px; background: var(--accent); color: var(--dark); font-family: var(--font-body);
    font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;
    cursor: pointer; border: none; transition: all 0.3s;
  }
  .btn-primary:hover { background: var(--white); transform: translateY(-2px); }
  .btn-outline {
    padding: 14px 36px; background: transparent; color: var(--text); font-family: var(--font-body);
    font-size: 0.85rem; font-weight: 600; text-transform: uppercase; border: 1px solid rgba(255,255,255,0.2);
    cursor: pointer; transition: all 0.3s;
  }
  .btn-outline:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-2px); }

  /* GENERAL SECTIONS */
  .section { padding: 90px 60px; width: 100%; }
  .section-alt { background: var(--dark-surface); }
  .section-label { font-family: var(--font-heading); font-size: 0.8rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--accent); font-weight: 600; margin-bottom: 12px; }
  .section-title { font-family: var(--font-heading); font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 700; line-height: 1.2; margin-bottom: 20px; }
  .section-sub { font-size: 0.95rem; color: var(--muted); line-height: 1.6; max-width: 600px; }
  .divider { width: 40px; height: 3px; background: var(--accent); margin: 24px 0; }

  /* STATS */
  .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 60px; }
  .stat-item { background: var(--dark-card); padding: 40px 30px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.02); }
  .stat-value { font-family: var(--font-heading); font-size: 2.8rem; font-weight: 700; color: var(--white); line-height: 1; margin-bottom: 8px; }
  .stat-label { font-size: 0.8rem; text-transform: uppercase; color: var(--muted); letter-spacing: 0.05em; }

  /* SERVICE CARDS */
  .filter-row { display: flex; gap: 12px; margin-bottom: 40px; flex-wrap: wrap; align-items: center; }
  .filter-chip {
    padding: 8px 20px; border: 1px solid rgba(255,255,255,0.1); border-radius: 20px;
    font-size: 0.8rem; font-weight: 500; cursor: pointer; background: transparent; color: var(--muted);
    font-family: var(--font-body); transition: all 0.25s;
  }
  .filter-chip.active, .filter-chip:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-glow); }
  
  .service-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
  .service-card { background: var(--dark-card); border-radius: 6px; overflow: hidden; border: 1px solid rgba(255,255,255,0.03); transition: transform 0.3s; cursor: pointer; }
  .service-card:hover { transform: translateY(-6px); border-color: rgba(0, 242, 254, 0.3); }
  .card-img-wrap { height: 210px; position: relative; overflow: hidden; }
  .card-img { width: 100%; height: 100%; object-fit: cover; }
  .card-tag { position: absolute; top: 16px; left: 16px; padding: 4px 12px; background: var(--accent); color: var(--dark); font-size: 0.7rem; font-weight: 700; text-transform: uppercase; border-radius: 2px; }
  .card-fav { position: absolute; top: 16px; right: 16px; background: rgba(7,10,15,0.7); border: none; width: 34px; height: 34px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; color: var(--white); }
  .card-fav.active { color: var(--accent); }
  .card-body { padding: 24px; }
  .card-cat { font-size: 0.75rem; text-transform: uppercase; color: var(--accent); font-weight: 600; margin-bottom: 6px; }
  .card-title { font-family: var(--font-heading); font-size: 1.3rem; font-weight: 600; margin-bottom: 12px; color: var(--white); }
  .card-speed { font-size: 0.85rem; color: var(--muted); margin-bottom: 20px; display: flex; align-items: center; gap: 6px; }
  .card-bottom { display: flex; align-items: center; justify-content: space-between; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.05); }
  .card-price { font-family: var(--font-heading); font-size: 1.4rem; font-weight: 700; color: var(--white); }
  .card-price span { font-size: 0.8rem; font-family: var(--font-body); color: var(--muted); font-weight: 400; }

  /* MODAL */
  .modal-overlay { position: fixed; inset: 0; z-index: 2000; background: rgba(4,6,9,0.9); display: flex; align-items: center; justify-content: center; padding: 20px; overflow-y: auto; }
  .modal { background: var(--dark-card); width: 100%; max-width: 850px; border-radius: 8px; position: relative; overflow: hidden; border: 1px solid rgba(255,255,255,0.08); text-align: left; }
  .modal-close { position: absolute; top: 16px; right: 16px; z-index: 10; background: rgba(0,0,0,0.5); border: none; color: var(--white); width: 36px; height: 36px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; }
  .modal-close:hover { background: var(--danger); }
  .modal-grid { display: grid; grid-template-columns: 1fr 1fr; }
  .modal-left { height: 100%; min-height: 400px; position: relative; }
  .modal-right { padding: 40px; display: flex; flex-direction: column; justify-content: space-between; }
  .modal-features { margin: 20px 0; list-style: none; }
  .modal-features li { font-size: 0.9rem; color: #cbd5e1; margin-bottom: 10px; display: flex; align-items: center; gap: 10px; }
  .modal-features li::before { content: '✓'; color: var(--accent); font-weight: 700; }

  /* PORTFOLIO GRID */
  .portfolio-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 50px; }
  .portfolio-card { background: var(--dark-surface); border-radius: 6px; overflow: hidden; border: 1px solid rgba(255,255,255,0.02); }
  .portfolio-body { padding: 20px; }
  .portfolio-niche { font-size: 0.75rem; text-transform: uppercase; color: var(--accent); font-weight: 600; margin-bottom: 4px; }
  .portfolio-title { font-family: var(--font-heading); font-size: 1.15rem; font-weight: 600; color: var(--white); margin-bottom: 8px; }
  .portfolio-outcome { font-size: 0.85rem; color: var(--muted); line-height: 1.5; }

  /* FORMS & CONTACT */
  .contact-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 60px; margin-top: 40px; }
  .form-group { margin-bottom: 18px; }
  .form-label { display: block; font-size: 0.8rem; font-weight: 600; text-transform: uppercase; color: var(--muted); margin-bottom: 6px; letter-spacing: 0.05em; }
  .form-input, .form-textarea, .form-select { width: 100%; padding: 12px 16px; background: var(--dark-surface); border: 1px solid rgba(255,255,255,0.1); border-radius: 4px; color: var(--white); font-family: var(--font-body); outline: none; transition: border-color 0.3s; }
  .form-input:focus, .form-textarea:focus, .form-select:focus { border-color: var(--accent); }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .form-submit { width: 100%; padding: 14px; background: var(--accent); color: var(--dark); border: none; border-radius: 4px; font-family: var(--font-body); font-size: 0.9rem; font-weight: 700; text-transform: uppercase; cursor: pointer; transition: background 0.3s; }
  .form-submit:hover { background: var(--white); }
  .form-success { padding: 30px; background: var(--accent-glow); border: 1px solid var(--accent); border-radius: 4px; text-align: center; }

  /* FOOTER */
  .footer { background: #040609; padding: 60px 60px 30px; border-top: 1px solid rgba(255,255,255,0.03); }
  .footer-bottom { display: flex; justify-content: space-between; align-items: center; margin-top: 40px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.05); font-size: 0.8rem; color: var(--muted); }

  @media (max-width: 900px) {
    .navbar { padding: 0 24px; }
    .hero-content, .section { padding-left: 24px; padding-right: 24px; }
    .service-grid, .portfolio-grid, .contact-grid, .stats-grid { grid-template-columns: 1fr; }
    .nav-links { display: none; }
    .modal-grid { grid-template-columns: 1fr; }
    .modal-left { min-height: 200px; }
  }
`;

// ─── UTILITY ICON SVGS ─────────────────────────────────────────────────────────
const IconClock = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const IconHeart = ({ filled }) => <svg width="15" height="15" viewBox="0 0 24 24" fill={filled ? "var(--accent)" : "none"} stroke={filled ? "var(--accent)" : "currentColor"} strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>;

// ─── COMPONENTS ─────────────────────────────────────────────────────────────────
function Reveal({ children, className = "", dir = "" }) {
  const [ref, visible] = useIntersection();
  const cls = dir === "left" ? "reveal-left" : dir === "right" ? "reveal-right" : "reveal";
  return <div ref={ref} className={`${cls}${visible ? " visible" : ""} ${className}`}>{children}</div>;
}

function ServiceCard({ s, favs, onToggleFav, onOpen }) {
  return (
    <div className="service-card" onClick={() => onOpen(s)}>
      <div className="card-img-wrap">
        <img className="card-img" src={s.img} alt={s.title} loading="lazy" />
        {s.tag && <span className="card-tag">{s.tag}</span>}
        <button className="card-fav" onClick={(e) => { e.stopPropagation(); onToggleFav(s.id); }}>
          <IconHeart filled={favs.includes(s.id)} />
        </button>
      </div>
      <div className="card-body">
        <div className="card-cat">{s.category} · {s.type}</div>
        <div className="card-title">{s.title}</div>
        <div className="card-speed"><IconClock /> {s.speed}</div>
        <div className="card-bottom">
          <div className="card-price">₹{s.price.toLocaleString()}<span> / {s.billing}</span></div>
          <button className="nav-cta" style={{ fontSize: "0.7rem", padding: "6px 14px" }}>Configure</button>
        </div>
      </div>
    </div>
  );
}

function ServiceModal({ s, onClose, onSelect }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-grid">
          <div className="modal-left">
            <img src={s.img} alt={s.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div className="modal-right">
            <div>
              <span className="card-cat">{s.category} Solution</span>
              <h2 className="section-title" style={{ marginTop: 6, marginBottom: 12, fontSize: "1.8rem" }}>{s.title}</h2>
              <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.6 }}>{s.desc}</p>
              <ul className="modal-features">
                {s.features.map(f => <li key={f}>{f}</li>)}
              </ul>
            </div>
            <div>
              <div className="card-price" style={{ fontSize: "1.8rem", marginBottom: 16 }}>₹{s.price.toLocaleString()}<span style={{ fontSize: "0.9rem" }}> / {s.billing}</span></div>
              <button className="form-submit" onClick={() => { onSelect(s); onClose(); }}>Lock In Plan</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN PAGES ────────────────────────────────────────────────────────────────
function HomePage({ setPage, onOpenService, favs, onToggleFav }) {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <div className="hero-eyebrow">✦ High Performance Digital Architecture</div>
          <h1 className="hero-title">Bringing Local <br />Businesses <span className="accent-text">Online.</span></h1>
          <p className="hero-sub">We build blazing-fast, beautiful websites for neighborhood commerce. Zero hidden maintenance headaches. Pure performance designed to bring you real visibility and actual clients.</p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => setPage("services")}>Explore Solutions</button>
            <button className="btn-outline" onClick={() => setPage("contact")}>Get A Free Audit</button>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <Reveal>
          <div className="section-label">Performance Metrics</div>
          <h2 className="section-title">Engineered For Operational ROI</h2>
        </Reveal>
        <div className="stats-grid">
          {STATS.map((s, i) => (
            <Reveal key={s.label} className="stat-item" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="stat-value accent-text">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <Reveal>
          <div style={{ marginBottom: 40 }}>
            <div className="section-label">Core Architecture Plans</div>
            <h2 className="section-title">Pre-Configured Setup Packages</h2>
          </div>
        </Reveal>
        <div className="service-grid">
          {SERVICES.slice(0, 3).map((s, i) => (
            <Reveal key={s.id} style={{ transitionDelay: `${i * 0.15}s` }}>
              <ServiceCard s={s} favs={favs} onToggleFav={onToggleFav} onOpen={onOpenService} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <Reveal>
          <div className="section-label">Local Transformations</div>
          <h2 className="section-title">Proven Business Outcomes</h2>
          <p className="section-sub">See how modern web configurations drastically shift metrics for storefront businesses in your immediate neighborhood landscape.</p>
        </Reveal>
        <div className="portfolio-grid">
          {PORTFOLIO.map((p, i) => (
            <Reveal key={p.title} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="portfolio-card">
                <img src={p.img} alt={p.title} style={{ width: "100%", height: "160px", objectFit: "cover" }} />
                <div className="portfolio-body">
                  <div className="portfolio-niche">{p.niche}</div>
                  <div className="portfolio-title">{p.title}</div>
                  <div className="portfolio-outcome">{p.outcome}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}

function ServicesPage({ onOpenService, favs, onToggleFav }) {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Web Design", "E-Commerce", "Development"];

  const filtered = SERVICES.filter(s => filter === "All" || s.category === filter);

  return (
    <div className="page" style={{ paddingTop: 100 }}>
      <section className="section">
        <Reveal>
          <div className="section-label">Service Directory</div>
          <h1 className="section-title">Production Frameworks</h1>
          <div className="divider" />
        </Reveal>

        <div className="filter-row">
          {categories.map(c => (
            <button key={c} className={`filter-chip${filter === c ? " active" : ""}`} onClick={() => setFilter(c)}>{c}</button>
          ))}
        </div>

        <div className="service-grid">
          {filtered.map((s, i) => (
            <Reveal key={s.id} style={{ transitionDelay: `${i * 0.1}s` }}>
              <ServiceCard s={s} favs={favs} onToggleFav={onToggleFav} onOpen={onOpenService} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}

function ContactPage({ selectedService }) {
  const [form, setForm] = useState({ name: "", email: "", bizType: "", package: selectedService ? selectedService.title : "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <div className="page" style={{ paddingTop: 100 }}>
      <section className="section">
        <Reveal>
          <div className="section-label">Initiate Build</div>
          <h1 className="section-title">Let's Discuss Your Project</h1>
          <div className="divider" />
        </Reveal>

        <div className="contact-grid">
          <div>
            {success ? (
              <div className="form-success">
                <h3 className="heading" style={{ fontSize: "1.5rem", marginBottom: 10, color: "var(--accent)" }}>Transmission Confirmed</h3>
                <p style={{ fontSize: "0.9rem" }}>Your structural concept specs have reached Zion Tech. Yobu will reach out within 24 operational hours to finalize blueprints.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Business Owner Name</label>
                    <input className="form-input" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="e.g., Ramesh Kumar" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Contact Email</label>
                    <input className="form-input" type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="owner@business.com" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Niche / Business Field</label>
                    <input className="form-input" value={form.bizType} onChange={e => setForm({...form, bizType: e.target.value})} placeholder="e.g., Restaurant, Retail, Pharmacy" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Selected System Scope</label>
                    <select className="form-select" value={form.package} onChange={e => setForm({...form, package: e.target.value})}>
                      <option value="">Select a Base Frame</option>
                      {SERVICES.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                      <option value="Custom Infrastructure">Custom Enterprise Application</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Operational Requirements / Goals</label>
                  <textarea className="form-textarea" required rows="5" value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Describe features you need (e.g., WhatsApp booking, payment links, digital store catalog)..." />
                </div>
                <button type="submit" className="form-submit">Deploy Architecture Request</button>
              </form>
            )}
          </div>

          <div>
            <div style={{ background: "var(--dark-surface)", padding: 30, borderRadius: 6, border: "1px solid rgba(255,255,255,0.03)" }}>
              <h3 className="heading" style={{ fontSize: "1.2rem", marginBottom: 20 }}>Zion Tech Hub</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--muted)", marginBottom: 15 }}><strong>Lead Architect:</strong> Yobu Siluvairaj</p>
              <p style={{ fontSize: "0.9rem", color: "var(--muted)", marginBottom: 15 }}><strong>Primary Core Address:</strong> Chennai, Tamil Nadu, India</p>
              <p style={{ fontSize: "0.9rem", color: "var(--muted)" }}><strong>Response Threshold:</strong> Under 4 Hours</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── ROOT CONTAINER ─────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState("home");
  const [activeModal, setActiveModal] = useState(null);
  const [favs, toggleFav] = useFavorites();
  const [scrolled, setScrolled] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const navTo = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const handleSelectService = (s) => { setSelectedService(s); navTo("contact"); };

  return (
    <>
      <style>{CSS}</style>

      {/* GLOBAL NAVBAR */}
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="nav-logo" onClick={() => navTo("home")}>Zion<span>Tech</span></div>
        <div className="nav-links">
          <button className={`nav-link${page === "home" ? " active" : ""}`} onClick={() => navTo("home")}>Home</button>
          <button className={`nav-link${page === "services" ? " active" : ""}`} onClick={() => navTo("services")}>Services</button>
          <button className={`nav-link${page === "contact" ? " active" : ""}`} onClick={() => navTo("contact")}>Contact</button>
        </div>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <button className="nav-favs" onClick={() => navTo("services")}>
            ♡ {favs.length > 0 && <span className="fav-badge">{favs.length}</span>}
          </button>
          <button className="nav-cta" onClick={() => navTo("contact")}>Get Proposal</button>
        </div>
      </nav>

      {/* DYNAMIC PAGES */}
      {page === "home" && <HomePage setPage={navTo} onOpenService={setActiveModal} favs={favs} onToggleFav={toggleFav} />}
      {page === "services" && <ServicesPage onOpenService={setActiveModal} favs={favs} onToggleFav={toggleFav} />}
      {page === "contact" && <ContactPage selectedService={selectedService} />}

      {/* GLOBAL SERVICE Blueprints MODAL */}
      {activeModal && (
        <ServiceModal s={activeModal} onClose={() => setActiveModal(null)} onSelect={handleSelectService} />
      )}

      {/* FOOTER PLATFORM */}
      <footer className="footer">
        <div className="footer-bottom">
          <span>© 2026 Zion Tech Network. Engineered by Yobu Siluvairaj. All rights reserved.</span>
          <span>Built for Micro-Businesses & Local Enterprise Growth</span>
        </div>
      </footer>
    </>
  );
}