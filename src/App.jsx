import { useEffect, useState } from 'react';
import './App.css';

// Update these two values before launch.
const CONTACT_EMAIL = 'hello@ziontech.in';
const WHATSAPP_NUMBER = '919999999999';

const services = [
  { icon: '◈', title: 'Business Websites', text: 'Professional, fast websites that make your business easier to discover, trust and contact.', bullets: ['Mobile-first design', 'WhatsApp & enquiry integration', 'Maps, forms & analytics'] },
  { icon: '↗', title: 'Business Automation', text: 'Replace repetitive Excel, register and WhatsApp work with simple digital workflows.', bullets: ['Custom dashboards', 'Automated reports', 'Role-based workflows'] },
  { icon: '⌘', title: 'Custom Applications', text: 'Software designed around your exact business process instead of forcing your team into a generic product.', bullets: ['Web applications', 'Admin panels & portals', 'APIs & integrations'] },
  { icon: '✓', title: 'Support & Maintenance', text: 'Keep your website or application secure, updated and reliable after launch.', bullets: ['Bug fixes', 'Backups & hosting help', 'Continuous improvements'] },
];

const industries = [
  ['Clinics & Healthcare', 'Appointments · Patients · Billing'],
  ['Schools & Institutes', 'Students · Fees · Attendance'],
  ['Distributors & Wholesalers', 'Orders · Inventory · Payments'],
  ['Manufacturers', 'Production · Inventory · Reports'],
  ['Transport & Logistics', 'Vehicles · Trips · Expenses'],
  ['Retail & Local Businesses', 'Customers · Sales · Operations'],
];

const process = [
  ['01', 'Understand', 'We learn how your business works today and where time is being lost.'],
  ['02', 'Plan', 'We turn the problem into a practical scope, workflow and delivery plan.'],
  ['03', 'Build', 'We design, develop and test the solution in clear milestones.'],
  ['04', 'Launch', 'We deploy, train your team and help you start using it confidently.'],
  ['05', 'Support', 'We stay available for fixes, maintenance and future improvements.'],
];

const demos = [
  { tag: 'Concept project', title: 'Clinic Operations', text: 'Appointments, patient records, billing and follow-ups in one simple dashboard.', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80' },
  { tag: 'Concept project', title: 'Distributor Hub', text: 'Orders, inventory, customers and outstanding payments without spreadsheet chaos.', image: 'https://images.unsplash.com/photo-1586528116493-da8b0c4a7d7e?auto=format&fit=crop&w=1000&q=80' },
  { tag: 'Concept project', title: 'Institute Manager', text: 'Student records, fees, attendance and reports built for a growing training centre.', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=80' },
];

function Icon({ children }) { return <span className="icon-box">{children}</span>; }

function App() {
  const [menu, setMenu] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', business: '', phone: '', need: '', message: '' });

  useEffect(() => {
    const onScroll = () => document.body.classList.toggle('is-scrolled', window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    setMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Zion Tech enquiry - ${form.business || form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nBusiness: ${form.business}\nPhone: ${form.phone}\nNeed: ${form.need}\nMessage: ${form.message}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="site">
      <header className="nav">
        <button className="brand" onClick={() => go('home')} aria-label="Zion Tech home">
          <img className="brand-logo" src="/zion-tech-symbol.png" alt="" aria-hidden="true" /><span>Zion<span className="accent">Tech</span></span>
        </button>
        <nav className={menu ? 'nav-links open' : 'nav-links'}>
          {['home','solutions','industries','process','work'].map((item) => <button key={item} onClick={() => go(item)}>{item === 'work' ? 'Work' : item[0].toUpperCase()+item.slice(1)}</button>)}
          <button className="mobile-cta" onClick={() => go('contact')}>Let's talk</button>
        </nav>
        <button className="nav-cta" onClick={() => go('contact')}>Let's talk <span>↗</span></button>
        <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Toggle menu">{menu ? '×' : '☰'}</button>
      </header>

      <main>
        <section id="home" className="hero section-pad">
          <div className="hero-grid-bg" />
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse" /> SOFTWARE FOR REAL BUSINESS PROBLEMS</div>
            <h1>Turn manual business work into <span>simple software.</span></h1>
            <p>We build websites, business automation systems and custom applications that help growing businesses save time, reduce errors and work smarter.</p>
            <div className="actions">
              <button className="btn primary" onClick={() => go('contact')}>Start a conversation <span>→</span></button>
              <button className="btn secondary" onClick={() => go('solutions')}>Explore solutions</button>
            </div>
            <div className="trust-line"><span>✓</span> Practical solutions &nbsp; <span>✓</span> Clear scope &nbsp; <span>✓</span> Ongoing support</div>
          </div>
          <div className="hero-visual" aria-label="Business automation dashboard illustration">
            <div className="orbit orbit-a" /><div className="orbit orbit-b" />
            <div className="dashboard-card main-dash">
              <div className="dash-top"><div><small>ZION TECH / BUSINESS HUB</small><strong>Good morning</strong></div><div className="avatar">ZT</div></div>
              <div className="metric-row"><div><span>Today's orders</span><b>128</b></div><div><span>Pending</span><b>17</b></div><div><span>Revenue</span><b>₹84.6k</b></div></div>
              <div className="chart"><div className="chart-line"><i style={{height:'30%'}}/><i style={{height:'48%'}}/><i style={{height:'38%'}}/><i style={{height:'68%'}}/><i style={{height:'55%'}}/><i style={{height:'82%'}}/><i style={{height:'72%'}}/><i style={{height:'94%'}}/></div><div className="chart-labels"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span></div></div>
              <div className="dash-bottom"><span><em /> Automated reports</span><span><em /> Live dashboard</span></div>
            </div>
            <div className="float-card f-one"><Icon>↗</Icon><div><small>Manual work</small><b>-42%</b></div></div>
            <div className="float-card f-two"><Icon>✓</Icon><div><small>Tasks automated</small><b>24 today</b></div></div>
          </div>
        </section>

        <section className="pain section-pad">
          <div className="section-head centered"><span className="section-kicker">THE PROBLEM</span><h2>Still running parts of your business through <span>Excel, WhatsApp & paper?</span></h2><p>That's normal for a growing business. The problem starts when manual work takes hours, creates mistakes and keeps the owner dependent on one person.</p></div>
          <div className="pain-grid">
            {['Multiple Excel files','WhatsApp orders','Paper registers','Manual reports','Repeated data entry','Payment follow-ups'].map((x, i) => <div className="pain-card" key={x}><span>0{i+1}</span><strong>{x}</strong><small>Can be simplified</small></div>)}
          </div>
          <div className="transition"><span>BEFORE</span><b>→</b><strong>ONE SIMPLE DIGITAL WORKFLOW</strong><b>→</b><span>AFTER</span></div>
        </section>

        <section id="solutions" className="solutions section-pad dark-section">
          <div className="section-head"><span className="section-kicker">WHAT WE DO</span><h2>Technology that solves <span>business problems.</span></h2><p>No unnecessary complexity. We choose the right level of technology for the problem you actually have.</p></div>
          <div className="service-grid">{services.map((s) => <article className="service-card" key={s.title}><Icon>{s.icon}</Icon><h3>{s.title}</h3><p>{s.text}</p><ul>{s.bullets.map(b => <li key={b}>✓ {b}</li>)}</ul><button onClick={() => go('contact')}>Discuss this <span>↗</span></button></article>)}</div>
        </section>

        <section id="industries" className="industries section-pad">
          <div className="section-head"><span className="section-kicker">WHO WE HELP</span><h2>Built for <span>growing local businesses.</span></h2><p>We focus on practical systems for businesses that want to move beyond manual operations without buying an oversized enterprise platform.</p></div>
          <div className="industry-grid">{industries.map(([title, sub], i) => <button className="industry-card" key={title} onClick={() => go('contact')}><span className="industry-num">0{i+1}</span><div><h3>{title}</h3><p>{sub}</p></div><span className="arrow">↗</span></button>)}</div>
        </section>

        <section className="transform section-pad dark-section">
          <div className="section-head centered"><span className="section-kicker">THE TRANSFORMATION</span><h2>From scattered tasks to <span>one clear workflow.</span></h2></div>
          <div className="workflow"><div className="workflow-side"><label>BEFORE ZION TECH</label>{['Customer message','Employee entry','Excel update','Manual calculation','Owner asks for report'].map(x => <div className="flow-node old" key={x}><span>×</span>{x}</div>)}</div><div className="workflow-center"><div className="flow-orb">ZT</div><span>ONE<br/>SYSTEM</span></div><div className="workflow-side"><label>WITH ZION TECH</label>{['Customer / team input','Automatic data capture','Central dashboard','Instant calculations','Reports on demand'].map(x => <div className="flow-node new" key={x}><span>✓</span>{x}</div>)}</div></div>
        </section>

        <section id="process" className="process section-pad">
          <div className="section-head"><span className="section-kicker">HOW IT WORKS</span><h2>From idea to <span>working software.</span></h2><p>A straightforward process designed to keep you informed and prevent surprise scope changes.</p></div>
          <div className="process-grid">{process.map(([num, title, text]) => <div className="process-card" key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></div>)}</div>
        </section>

        <section id="work" className="work section-pad dark-section">
          <div className="section-head"><span className="section-kicker">DEMO WORK</span><h2>See what your <span>business system</span> could look like.</h2><p>These are concept projects used to demonstrate the types of systems Zion Tech can build. Real client case studies will be added as we grow.</p></div>
          <div className="demo-grid">{demos.map((d) => <article className="demo-card" key={d.title}><img src={d.image} alt=""/><div className="demo-body"><span>{d.tag}</span><h3>{d.title}</h3><p>{d.text}</p><button onClick={() => go('contact')}>Discuss a similar system ↗</button></div></article>)}</div>
        </section>

        <section className="why section-pad">
          <div className="why-quote"><span className="section-kicker">WHY ZION TECH</span><h2>Software should make your work <span>easier, not more complicated.</span></h2><p>We start with your business process, not a technology checklist. The goal is simple: remove unnecessary manual work and give your team a system they can actually use.</p><button className="text-link" onClick={() => go('contact')}>Tell us what's slowing you down <span>→</span></button></div>
          <div className="principles">{[['01','Business-first','We understand the workflow before recommending technology.'],['02','Simple to use','Your team should not need technical knowledge to do their daily work.'],['03','Transparent','Clear scope, milestones and deliverables from the beginning.'],['04','Long-term','We can stay with you for hosting, maintenance and improvements.']].map(([n,t,p]) => <div className="principle" key={n}><span>{n}</span><div><h3>{t}</h3><p>{p}</p></div></div>)}</div>
        </section>

        <section id="contact" className="contact section-pad dark-section">
          <div className="contact-grid"><div><span className="section-kicker">START A PROJECT</span><h2>Have a manual process that <span>wastes your team's time?</span></h2><p>Tell us how you currently manage it. We'll help you identify what can be automated and what a practical solution could look like.</p><div className="contact-points"><a href={`mailto:${CONTACT_EMAIL}`}>✉ {CONTACT_EMAIL}</a><a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">◉ WhatsApp us</a><span>⌖ Serving businesses across India</span></div></div><div className="form-card">{submitted ? <div className="success"><div className="success-icon">✓</div><h3>Enquiry prepared.</h3><p>Your email app should open with the project details. If it didn't, write to <strong>{CONTACT_EMAIL}</strong>.</p><button className="btn primary" onClick={() => setSubmitted(false)}>Send another enquiry</button></div> : <form onSubmit={submit}><div className="form-row"><label>Name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your name"/></label><label>Business<input required value={form.business} onChange={e=>setForm({...form,business:e.target.value})} placeholder="Business name"/></label></div><div className="form-row"><label>Phone / WhatsApp<input required value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="Your number"/></label><label>What do you need?<select required value={form.need} onChange={e=>setForm({...form,need:e.target.value})}><option value="">Select one</option><option>Business website</option><option>Business automation</option><option>Custom application</option><option>Not sure yet</option></select></label></div><label>Tell us about the problem<textarea required rows="5" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Example: We receive orders on WhatsApp and enter them into Excel every evening..."></textarea></label><button className="btn primary full" type="submit">Start the conversation <span>→</span></button><small className="form-note">No obligation. We'll first understand the problem.</small></form>}</div></div>
        </section>
      </main>

      <footer><div className="footer-main"><button className="brand" onClick={() => go('home')}><img className="brand-logo" src="/zion-tech-symbol.png" alt="" aria-hidden="true" /><span>Zion<span className="accent">Tech</span></span></button><p>Practical software for growing businesses.</p><div className="footer-links"><button onClick={() => go('solutions')}>Solutions</button><button onClick={() => go('industries')}>Industries</button><button onClick={() => go('process')}>Process</button><button onClick={() => go('contact')}>Contact</button></div></div><div className="footer-bottom"><span>© 2026 Zion Tech. All rights reserved.</span><span>Built with purpose, not complexity.</span></div></footer>
    </div>
  );
}

export default App;
