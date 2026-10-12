import { useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  Printer,
  Github,
  Linkedin,
  Check,
  Copy,
  Radio,
  Activity,
  Layers,
} from "lucide-react";
import { experience, projects } from "./content";

const email = "leonardolunario@gmail.com";
const resume = "/resume";
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <a className="brand" href="/" aria-label="Leonardo Lunario home">
        <span className="monogram">
          LL<span>.</span>
        </span>
        <span>LEONARDO LUNARIO</span>
      </a>
      <button
        className="menu-button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
      <nav
        id="navigation"
        className={open ? "nav is-open" : "nav"}
        aria-label="Main navigation"
      >
        <a onClick={() => setOpen(false)} href="/#work">
          Selected work
        </a>
        <a onClick={() => setOpen(false)} href="/#experience">
          Experience
        </a>
        <a onClick={() => setOpen(false)} href="/resume">
          Resume
        </a>
        <a
          onClick={() => setOpen(false)}
          href="/#contact"
          className="nav-contact"
        >
          Let’s connect <ArrowUpRight size={16} />
        </a>
      </nav>
    </header>
  );
}
function Contact() {
  const [copied, setCopied] = useState(false);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }
  return (
    <section className="contact section" id="contact">
      <div>
        <p className="eyebrow">LET’S CONNECT</p>
        <h2>
          Where could I<br />
          help your team?
        </h2>
        <p>
          I’m interested in systems integration, test and validation,
          engineering automation, and technical project work.
        </p>
        <p className="contact-location">Based in Biñan, Laguna, Philippines.</p>
      </div>
      <div className="contact-actions">
        <a className="email-link" href={`mailto:${email}`}>
          {email}
          <ArrowUpRight />
        </a>
        <div className="social-row">
          <a href="https://www.linkedin.com/in/leonardolunario">
            <Linkedin size={17} /> LinkedIn
          </a>
          <a href="https://github.com/lvlunario">
            <Github size={17} /> GitHub
          </a>
          <button onClick={copyEmail}>
            {copied ? <Check size={16} /> : <Copy size={16} />}{" "}
            {copied ? "Copied" : "Copy email"}
          </button>
        </div>
        <span className="sr-only" role="status">
          {copied ? "Email address copied to clipboard" : ""}
        </span>
        <a className="text-link" href={resume}>
          <Printer size={16} /> View printable resume
        </a>
      </div>
    </section>
  );
}
function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="section-heading">
        <div>
          <p className="eyebrow">EXPERIENCE</p>
          <h2>
            A systems perspective.
            <br />
            Grounded in practice.
          </h2>
        </div>
        <p>
          From aerospace testing to power-system operations, my work has focused
          on understanding interfaces, investigating issues, and helping teams
          deliver.
        </p>
      </div>
      <div className="timeline">
        {experience.map((item) => (
          <article className="timeline-row" key={item.company}>
            <span className="mono">{item.dates}</span>
            <div>
              <h3>{item.company}</h3>
              <p className="role">{item.role}</p>
            </div>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
      <div className="education">
        <div>
          <span className="eyebrow">EDUCATION</span>
          <p>
            M.S. Engineering · UCLA
            <br />
            B.S. Electrical Engineering · UC San Diego
          </p>
        </div>
        <div>
          <span className="eyebrow">CREDENTIALS</span>
          <p>
            Project Management Professional (PMP)
            <br />
            FAA Remote Pilot Certificate
          </p>
        </div>
      </div>
    </section>
  );
}
function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> SYSTEMS ENGINEER · MSc, PMP
          </p>
          <h1>
            Making complex
            <br />
            systems <em>work.</em>
          </h1>
          <p className="intro">
            I’m Leonardo Lunario. I help teams integrate hardware and software,
            verify requirements, and work through technical problems.
          </p>
          <p className="hero-detail">
            Experience across aerospace, defense communications, and electric
            utilities. A practical approach to testing, automation, and project
            execution.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">
              Explore my work <ArrowDown />
            </a>
            <a className="button secondary" href="/resume">
              View resume <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
        <aside className="profile-panel">
          <div className="profile-top">
            <span className="mono">ENGINEERING / OPERATIONS</span>
            <span className="tiny-cross">+</span>
          </div>
          <img
            src="/assets/leo-portfolio-pic.png"
            alt="Leonardo Lunario"
            width="560"
            height="554"
            fetchPriority="high"
          />
          <div className="profile-bottom">
            <h2>Leonardo Lunario</h2>
            <p>Electrical & systems engineer</p>
            <span className="profile-location">
              Biñan, Philippines <span>↗</span>
            </span>
          </div>
        </aside>
        <div className="career-strip">
          <span>PROFESSIONAL BACKGROUND</span>
          <div>Northrop Grumman</div>
          <div>L-3 Linkabit</div>
          <div>Maui Electric</div>
        </div>
      </section>
      <section className="section capabilities">
        <p className="eyebrow">HOW I CAN CONTRIBUTE</p>
        <div className="capability-grid">
          <article>
            <Layers size={25} />
            <h2>Connect the system.</h2>
            <p>
              Work across hardware, software, and operations to clarify
              interfaces, prepare integration activities, and investigate
              system-level issues.
            </p>
            <span>Integration · Requirements · Troubleshooting</span>
          </article>
          <article>
            <Activity size={25} />
            <h2>Make testing useful.</h2>
            <p>
              Turn requirements into test procedures, analyze results, document
              anomalies, and build tools that make engineering data easier to
              review.
            </p>
            <span>Verification · Data analysis · Automation</span>
          </article>
          <article>
            <Radio size={25} />
            <h2>Move the work forward.</h2>
            <p>
              Coordinate technical tasks, vendors, risks, and documentation so
              teams can move from an engineering problem to an operational
              handoff.
            </p>
            <span>Planning · Coordination · Technical delivery</span>
          </article>
        </div>
      </section>
      <section id="work" className="section work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">SELECTED WORK / 01—03</p>
            <h2>Experience, made tangible.</h2>
          </div>
          <p>
            Three personal projects connected to problems I care about. These
            are independent development projects, separate from my employers’
            systems.
          </p>
        </div>
        <div className="project-list">
          {projects.map((project, index) => (
            <article className="project" key={project.title}>
              <div className={`project-art art-${index}`} aria-hidden="true">
                <span className="mono">{project.visualLabel}</span>
                {index === 0 ? (
                  <div className="telemetry">
                    <svg viewBox="0 0 440 180">
                      <path
                        className="grid-line"
                        d="M0 40H440 M0 90H440 M0 140H440 M70 0V180 M150 0V180 M230 0V180 M310 0V180 M390 0V180"
                      />
                      <path
                        className="signal secondary-signal"
                        d="M0 125L30 115L55 122L80 85L110 90L140 70L170 76L190 110L210 113L240 80L270 60L300 67L330 47L360 57L390 34L440 38"
                      />
                      <path
                        className="signal"
                        d="M0 145L30 132L55 137L80 112L110 110L140 105L165 118L190 115L210 42L230 110L260 91L290 97L320 74L350 80L380 55L410 62L440 48"
                      />
                    </svg>
                    <div className="art-footer">
                      <span>TELEMETRY / LINK ANALYSIS</span>
                      <span>01</span>
                    </div>
                  </div>
                ) : index === 1 ? (
                  <div className="grid-visual">
                    <div className="grid-source">GENERATION</div>
                    <div className="bus-line" />
                    <div className="grid-assets">
                      <span>SOLAR</span>
                      <span>STORAGE</span>
                      <span>LOAD</span>
                    </div>
                    <div className="art-footer">
                      <span>ENERGY / SYSTEM SIMULATION</span>
                      <span>02</span>
                    </div>
                  </div>
                ) : (
                  <div className="web-visual">
                    <div className="web-bar">
                      <i />
                      <i />
                      <i />
                    </div>
                    <div className="web-content">
                      <div className="web-landscape" />
                      <div className="web-lines">
                        <i />
                        <i />
                        <i />
                      </div>
                    </div>
                    <div className="art-footer">
                      <span>PROPERTY / GUEST EXPERIENCE</span>
                      <span>03</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="project-copy">
                <p className="eyebrow">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-relevance">
                  <span>Why it matters</span>
                  <p>{project.relevance}</p>
                </div>
                <ul className="tags" aria-label="Technologies">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <details>
                  <summary>
                    Scope & current limits <span>+</span>
                  </summary>
                  <p>{project.limit}</p>
                </details>
                <a className="text-link" href={project.url}>
                  Explore repository <ArrowUpRight size={18} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="practice-band section">
        <p className="eyebrow">PROFESSIONAL WORK</p>
        <h2>
          Integration is only part of the job.
          <br />
          The evidence matters, too.
        </h2>
        <div className="practice-grid">
          <article>
            <span className="mono">01 / AEROSPACE & COMMUNICATIONS</span>
            <h3>System integration and verification</h3>
            <p>
              At Northrop Grumman and L-3 Linkabit, I worked on system-level
              testing, test procedures, anomaly investigation, and
              hardware-software integration for aerospace and communications
              systems.
            </p>
          </article>
          <article>
            <span className="mono">02 / ELECTRIC UTILITIES</span>
            <h3>Operational tools and project delivery</h3>
            <p>
              At Maui Electric, my work included EMS/AGC upgrade coordination,
              engineering databases and reporting, renewable-energy studies, and
              initiating a UAS inspection program.
            </p>
          </article>
        </div>
        <p className="practice-note">
          Professional experience summaries; employer code, data, and internal
          documentation are not published here.
        </p>
      </section>
      <Experience />
      <section className="section about">
        <p className="eyebrow">ABOUT MY WORK TODAY</p>
        <div>
          <h2>
            Experienced in systems.
            <br />
            Still building and learning.
          </h2>
          <p>
            Since leaving full-time utility engineering in 2020, I’ve focused on
            operating properties in Hawaii and the Philippines: coordinating
            vendors, maintenance, budgets, and day-to-day service across time
            zones.
          </p>
          <p>
            I’m now pursuing a return to engineering while refreshing Python,
            Git, and modern test practices through personal projects and
            AI-assisted development. My strongest contribution remains systems
            integration, structured troubleshooting, and translating technical
            work into clear next steps.
          </p>
          <a className="text-link" href="/resume">
            See my full background <ArrowRight size={18} />
          </a>
        </div>
      </section>
      <Contact />
    </>
  );
}
function ArrowDown() {
  return <span aria-hidden="true">↓</span>;
}
function Resume() {
  return (
    <section className="section resume-page">
      <a className="text-link" href="/">
        ← Back to portfolio
      </a>
      <p className="eyebrow">PROFESSIONAL BACKGROUND</p>
      <h1>Leonardo V. Lunario</h1>
      <p className="resume-subtitle">
        Systems integration · Verification & validation · Technical project
        coordination
      </p>
      <p>Biñan, Laguna, Philippines · U.S. & Philippine citizen</p>
      <div className="hero-actions">
        <button className="button primary" onClick={() => window.print()}>
          Print / Save as PDF
        </button>
      </div>
      <p className="resume-summary">
        Electrical and systems engineer with professional experience in
        aerospace, defense communications, and electric utilities. Background in
        system-level testing, hardware-software integration, engineering
        analysis, SCADA/EMS, and technical project execution.
      </p>
      <Experience />
      <div className="resume-skills">
        <h2>Technical background</h2>
        <p>
          <strong>Systems:</strong> Integration, verification and validation,
          requirements analysis, test procedures, anomaly investigation,
          SCADA/EMS, and RF/communications subsystem testing.
        </p>
        <p>
          <strong>Tools used:</strong> MATLAB, C/C++, LabVIEW, STK, VBA/Access,
          Python, SQL Server, MS Project, and Git/GitHub.
        </p>
        <p>
          <strong>Current development:</strong> Python, modern software/test
          practices, AI-assisted workflows, Fusion 360, and 3D printing.
        </p>
      </div>
      <Contact />
    </section>
  );
}
export default function App() {
  const isResume = window.location.pathname.replace(/\/$/, "") === "/resume";
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">{isResume ? <Resume /> : <Home />}</main>
      <footer className="footer">
        <a className="brand" href="/">
          LL<span>.</span>
        </a>
        <span>© {new Date().getFullYear()} Leonardo Lunario</span>
        <a href="#main">Back to top ↑</a>
      </footer>
    </>
  );
}
