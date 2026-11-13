/* eslint-disable react/prop-types */
import "./App.css";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import isa from "./assets/IMG6311.jpg";
import GIF_PARKING from "./assets/Gif from Online Converting (2).gif";
import GIF_POSE from "./assets/гиф9.gif";
import GIF_NOTION from "./assets/Gif from Online Converting (1).gif";
import GIF_TS from "./assets/Создание GIF анимации (1).gif";

const Q = (v) => `"${v}"`;
const EMAIL = "isahangasanov84@gmail.com";

const PROJECTS = [
  {
    key: "parking",
    name: "MyParking",
    img: GIF_PARKING,
    stack: ["React", "Yandex Maps API", "Hackathon"],
    repo: "https://github.com/Isahannn/SmartParking-hackathon.git",
  },
  {
    key: "pose",
    name: "Pose Analyze",
    img: GIF_POSE,
    stack: ["Python", "Computer Vision", "Datasets"],
    repo: "https://github.com/Isahannn/Fitness-app.git",
  },
  {
    key: "notion",
    name: "Notion (Redux)",
    img: GIF_NOTION,
    stack: ["REST API", "json-server", "Redux"],
    repo: "https://github.com/Isahannn/todos-server-redux-.git",
  },
  {
    key: "ts",
    name: "Filterable List",
    img: GIF_TS,
    stack: ["TypeScript", "Async", "Error handling"],
    repo: "https://github.com/Isahannn/TypeScript.git",
  },
];

const SKILLS = [
  {
    group: "backend",
    items: ["Python", "Django", "REST API design", "Request validation (zod)"],
  },
  { group: "lang", items: ["Python", "JavaScript", "TypeScript"] },
  { group: "tools", items: ["Git", "GitHub", "json-server"] },
  { group: "front", items: ["React", "Redux", "TailwindCSS"] },
];

const MARQUEE = [
  "Python",
  "Django",
  "REST API",
  "JavaScript",
  "TypeScript",
  "Git",
  "React",
  "Redux",
  "Algorithms",
  "API design",
];

const reducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Types out each phrase, pauses, deletes it, then moves to the next. */
function useTyped(phrases) {
  const [text, setText] = useState(reducedMotion() ? (phrases[0] ?? "") : "");

  useEffect(() => {
    if (!phrases.length || reducedMotion()) {
      setText(phrases[0] ?? "");
      return undefined;
    }
    let index = 0;
    let pos = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const full = phrases[index];
      pos += deleting ? -1 : 1;
      setText(full.slice(0, pos));
      let delay = deleting ? 25 : 55;
      if (!deleting && pos === full.length) {
        deleting = true;
        delay = 1600;
      } else if (deleting && pos === 0) {
        deleting = false;
        index = (index + 1) % phrases.length;
        delay = 350;
      }
      timer = setTimeout(tick, delay);
    };
    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, [phrases]);

  return text;
}

/** Fades children in once they scroll into view. */
function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion() || !("IntersectionObserver" in window)) {
      setShown(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? "in" : ""} ${className}`}
      onTransitionEnd={() => shown && setSettled(true)}
      style={{ transitionDelay: settled ? "0ms" : `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

function SectionTitle({ index, children }) {
  return (
    <h2 className="sectionTitle">
      <span className="sectionIndex">{index}</span>
      {children}
    </h2>
  );
}

function App() {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage === "ru" ? "ru" : "en";
  const phrases = t("hero.typed", { returnObjects: true });
  const typed = useTyped(phrases);
  const experience = t("experience.items", { returnObjects: true });
  const languages = t("languages.items", { returnObjects: true });

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const progressRef = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progressRef.current?.style.setProperty(
        "--p",
        max > 0 ? window.scrollY / max : 0,
      );
    };
    const onMove = (e) => {
      const card = e.target.closest?.(".spot");
      if (!card) return;
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      card.style.setProperty("--mx", `${x}px`);
      card.style.setProperty("--my", `${y}px`);
      if (card.classList.contains("project") && !reducedMotion()) {
        card.style.setProperty("--ry", `${(x / r.width - 0.5) * 8}deg`);
        card.style.setProperty("--rx", `${(0.5 - y / r.height) * 8}deg`);
      }
    };
    const onLeave = (e) => {
      const card = e.target.closest?.(".project");
      card?.style.setProperty("--rx", "0deg");
      card?.style.setProperty("--ry", "0deg");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseout", onLeave);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseout", onLeave);
    };
  }, []);

  return (
    <div className="page">
      <div className="progress" ref={progressRef} aria-hidden="true" />
      <div className="bgGlow" aria-hidden="true" />

      <nav className="nav">
        <span className="navLogo">
          <span className="navPrompt">$</span> isahan
        </span>
        <div className="navLinks">
          {["about", "experience", "projects", "skills"].map((id) => (
            <a key={id} href={`#${id}`}>
              {t(`nav.${id}`)}
            </a>
          ))}
        </div>
        <div className="langSwitch" role="group" aria-label="Language">
          {["en", "ru"].map((code) => (
            <button
              key={code}
              type="button"
              className={lang === code ? "active" : ""}
              onClick={() => i18n.changeLanguage(code)}
            >
              {code.toUpperCase()}
            </button>
          ))}
        </div>
      </nav>

      <header className="hero">
        <div className="heroText">
          <p className="heroKicker">
            <span className="pulse" /> {t("location")}
          </p>
          <h1 className="heroName">Isahan Gasanov</h1>
          <p className="heroRole">{t("hero.role")}</p>
          <p className="heroTyped" aria-live="off">
            <span className="heroPrompt">&gt;</span> {typed}
            <span className="caret" />
          </p>
          <p className="heroTypedPrint">
            <span className="heroPrompt">&gt;</span> {phrases.join(" · ")}
          </p>
          <div className="heroButtons">
            <a href="#projects" className="btn btnPrimary">
              {t("hero.cta")}
            </a>
            <a href={`mailto:${EMAIL}`} className="btn btnGhost">
              {t("hero.contact")}
            </a>
            <button
              type="button"
              className="btn btnGhost noPrint"
              onClick={() => window.print()}
            >
              {t("download")}
            </button>
          </div>
          <div className="heroLinks">
            <a
              href="https://github.com/Isahannn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://t.me/isahannn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
        </div>

        <div className="heroSide">
          <div className="photoWrap">
            <img src={isa} alt="Isahan Gasanov" className="photo" />
          </div>
          <pre className="codeCard" aria-hidden="true">
            <code>
              <span className="c-dim">GET</span> /api/developer{"\n{\n  "}
              <span className="c-key">{Q("name")}</span>:{" "}
              <span className="c-str">{Q("Isahan Gasanov")}</span>,{"\n  "}
              <span className="c-key">{Q("stack")}</span>: [
              <span className="c-str">{Q("Python")}</span>,{" "}
              <span className="c-str">{Q("Django")}</span>],{"\n  "}
              <span className="c-key">{Q("api")}</span>:{" "}
              <span className="c-str">{Q("REST")}</span>,{"\n  "}
              <span className="c-key">{Q("status")}</span>:{" "}
              <span className="c-num">200</span>
              {"\n}"}
            </code>
          </pre>
        </div>
      </header>

      <div className="marquee" aria-hidden="true">
        <div className="marqueeTrack">
          {[...MARQUEE, ...MARQUEE].map((w, i) => (
            <span key={i}>{w}</span>
          ))}
        </div>
      </div>

      <main className="main">
        <Reveal as="section" id="about" className="section">
          <SectionTitle index="01">{t("about.title")}</SectionTitle>
          <p className="aboutText">{t("about.text")}</p>
        </Reveal>

        <section id="experience" className="section">
          <Reveal>
            <SectionTitle index="02">{t("experience.title")}</SectionTitle>
          </Reveal>
          <div className="timeline">
            {experience.map((job, i) => (
              <Reveal key={job.role} delay={i * 120} className="job spot">
                <span className="jobDot" />
                <div className="jobHead">
                  <h3>{job.role}</h3>
                  <span className="jobPeriod">{job.period}</span>
                </div>
                <ul className="jobList">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <Reveal>
            <SectionTitle index="03">{t("projects.title")}</SectionTitle>
          </Reveal>
          <div className="projectGrid">
            {PROJECTS.map((p, i) => (
              <Reveal
                key={p.key}
                delay={(i % 2) * 120}
                className="project spot"
              >
                <div className="projectMedia">
                  <img src={p.img} alt={p.name} loading="lazy" />
                </div>
                <div className="projectBody">
                  <h3>{p.name}</h3>
                  <p>{t(`projects.items.${p.key}`)}</p>
                  <ul className="tags">
                    {p.stack.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projectLink"
                  >
                    {t("projects.view")} <span aria-hidden="true">→</span>
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <Reveal>
            <SectionTitle index="04">{t("skills.title")}</SectionTitle>
          </Reveal>
          <div className="skillGrid">
            {SKILLS.map((g, i) => (
              <Reveal key={g.group} delay={i * 90} className="skillCard spot">
                <h3>{t(`skills.groups.${g.group}`)}</h3>
                <ul className="tags">
                  {g.items.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal as="section" className="section split">
          <div>
            <h2 className="miniTitle">{t("education.title")}</h2>
            <p className="eduSchool">{t("education.school")}</p>
            <p className="eduMeta">
              {t("education.faculty")} · {t("education.period")}
            </p>
          </div>
          <div>
            <h2 className="miniTitle">{t("languages.title")}</h2>
            <ul className="langList">
              {languages.map((l) => (
                <li key={l.name}>
                  <div className="langRow">
                    <span>{l.name}</span>
                    <span className="langLevel">{l.level}</span>
                  </div>
                  <div className="bar">
                    <span style={{ "--w": `${l.value}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Isahan Gasanov</span>
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </footer>
    </div>
  );
}

export default App;
