import React from "react";
import { useNavigate } from "react-router-dom";
import hallway from "../../assets/Hospital_Hallway.jpg";
import simRoom from "../../assets/DuckHospitalRoom.png";
import altRoom from "../../assets/Alternate_Hospital_Room.png";
import "./HomePage.css";

const contributors = [
  { name: "Aidan Daly", email: "dalyai@oregonstate.edu" },
  { name: "Kiana Shim", email: "shimk@oregonstate.edu" },
  { name: "Francisco Martinez", email: "martinfr@oregonstate.edu" },
  { name: "Nadir Isweesi", email: "isweesin@oregonstate.edu" },
  { name: "Ian Hale", email: "halei@oregonstate.edu" },
];

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home-root">

      {/* ── Nav ── */}
      <header className="home-nav">
        <span className="home-nav-brand">
          NurseSim<span className="home-nav-plus">+</span>
        </span>
        <nav className="home-nav-links">
          <button 
            className="btn"
            onClick={() => navigate("/login")}
          >
            Log In
          </button>
          <button
            className="btn"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </nav>
      </header>

      {/* ── Hero ── */}
      <section
        className="home-hero"
        style={{ backgroundImage: `url(${hallway})` }}
      >
        <div className="home-hero-overlay" />
        <div className="home-hero-content">
          <p className="home-hero-eyebrow">Clinical simulation for nursing students</p>
          <h1 className="home-hero-title">
            Practice. Reflect.<br />Build Confidence.
          </h1>
          <p className="home-hero-subtitle">
            Anytime, anywhere — in a safe, low-risk environment.
          </p>
        </div>
      </section>

      {/* ── Problem ── */}
      <section className="home-section home-section--light">
        <div className="home-section-inner">
          <h2 className="home-section-title">The Challenge</h2>
          <div className="home-problem-grid">
            <div className="home-problem-card">
              <div className="home-problem-bar" />
              <h3>Limited Clinical Placements</h3>
              <p>
                Nursing students often face restricted access to clinical rotations, instructor
                time, and flexible practice opportunities.
              </p>
            </div>
            <div className="home-problem-card">
              <div className="home-problem-bar" />
              <h3>Not Enough Repetition</h3>
              <p>
                Traditional clinical experiences are essential but may not provide the repetition
                students need to build real decision-making confidence.
              </p>
            </div>
            <div className="home-problem-card">
              <div className="home-problem-bar" />
              <h3>Entering High-Pressure Settings</h3>
              <p>
                Without enough safe practice, students may feel underprepared when facing the
                demands of real-world healthcare environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Solution ── */}
      <section className="home-section home-section--dark">
        <div className="home-section-inner">
          <h2 className="home-section-title home-section-title--light">How NurseSim+ Helps</h2>
          <div className="home-solution-grid">

            <div className="home-solution-block">
              <div className="home-solution-img-wrap">
                <img src={simRoom} alt="Patient simulation room" />
              </div>
              <h3>Interactive Patient-Care Simulations</h3>
              <p>
                Practice assessment, prioritization, and clinical judgement through realistic
                online scenarios — available anytime in a low-risk environment.
              </p>
            </div>

            <div className="home-solution-block">
              <div className="home-solution-img-wrap">
                <img src={altRoom} alt="Hospital room environment" />
              </div>
              <h3>AI Tutoring Chatbot</h3>
              <p>
                Receive hints, guidance, and learning support without being given the answer.
                Our chatbot encourages independent critical thinking and problem solving.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="home-footer">
        <div className="home-footer-inner">
          <p className="home-footer-brand">
            NurseSim<span className="home-nav-plus">+</span>
          </p>
          <p className="home-footer-tagline">Built at Oregon State University</p>
          <div className="home-footer-contributors">
            <p className="home-footer-contrib-label">Contributors</p>
            <ul className="home-footer-contrib-list">
              {contributors.map(({ name, email }) => (
                <li key={email}>
                  <span className="home-footer-contrib-name">{name}</span>
                  <a href={`mailto:${email}`} className="home-footer-contrib-email">
                    {email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <p className="home-footer-copy">
            &copy; {new Date().getFullYear()} NurseSim+. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
};
