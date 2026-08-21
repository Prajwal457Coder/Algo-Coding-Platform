

import { useEffect, useMemo, useRef, useState } from 'react';
import { NavLink } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import axiosClient from '../utils/axiosClient';
import { logoutUser } from '../authSlice';

function Homepage() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const [problems, setProblems] = useState([]);
  const [solvedProblems, setSolvedProblems] = useState([]);
  const [filters, setFilters] = useState({
    difficulty: 'all',
    tag: 'all',
    status: 'all',
  });
  const [search, setSearch] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [celebrating, setCelebrating] = useState(false);
  const [celebrationKey, setCelebrationKey] = useState(0);
  const menuRef = useRef(null);

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const { data } = await axiosClient.get('/problem/getAllProblem');
        setProblems(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching problems:', error);
      }
    };

    const fetchSolvedProblems = async () => {
      try {
        const { data } = await axiosClient.get('/problem/problemSolvedByUser');
        setSolvedProblems(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching solved problems:', error);
      }
    };

    fetchProblems();
    if (user) fetchSolvedProblems();
  }, [user]);

  // The problem page can trigger:
  // window.dispatchEvent(new CustomEvent('algo:accepted'));
  // This keeps the homepage celebration independent of your backend.
  useEffect(() => {
    const handleAccepted = () => {
      setCelebrating(true);
      setCelebrationKey((key) => key + 1);

      window.setTimeout(() => {
        setCelebrating(false);
      }, 3600);
    };

    window.addEventListener('algo:accepted', handleAccepted);
    return () => window.removeEventListener('algo:accepted', handleAccepted);
  }, []);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const handleLogout = () => {
    dispatch(logoutUser());
    setSolvedProblems([]);
    setMenuOpen(false);
  };

  const filteredProblems = useMemo(() => {
    const query = search.trim().toLowerCase();

    return problems.filter((problem) => {
      const difficultyMatch =
        filters.difficulty === 'all' ||
        problem.difficulty?.toLowerCase() === filters.difficulty;

      const tagMatch =
        filters.tag === 'all' ||
        problem.tags?.toLowerCase() === filters.tag.toLowerCase();

      const isSolved = solvedProblems.some((sp) => sp._id === problem._id);

      const statusMatch =
        filters.status === 'all' ||
        (filters.status === 'solved' && isSolved) ||
        (filters.status === 'unsolved' && !isSolved);

      const searchMatch =
        !query ||
        problem.title?.toLowerCase().includes(query) ||
        problem.tags?.toLowerCase().includes(query);

      return difficultyMatch && tagMatch && statusMatch && searchMatch;
    });
  }, [problems, solvedProblems, filters, search]);

  const solvedCount = solvedProblems.length;
  const totalCount = problems.length;
  const solvedPct =
    totalCount > 0 ? Math.round((solvedCount / totalCount) * 100) : 0;

  const initials = useMemo(() => {
    const name = user?.firstName || 'C';
    return name.charAt(0).toUpperCase();
  }, [user]);

  const bootLine = useMemo(() => {
    const name = user?.firstName || 'guest';
    return `> coding_session::start user="${name}" status=ready`;
  }, [user]);

  const easyCount = problems.filter(
    (p) => p.difficulty?.toLowerCase() === 'easy'
  ).length;

  const mediumCount = problems.filter(
    (p) => p.difficulty?.toLowerCase() === 'medium'
  ).length;

  const hardCount = problems.filter(
    (p) => p.difficulty?.toLowerCase() === 'hard'
  ).length;

  const scrollToProblems = () => {
    document.getElementById('problems')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="algo-home">
      <style>{`
        * {
          box-sizing: border-box;
        }

        :root {
          color-scheme: dark;
        }

        .algo-home {
          --void: #070b12;
          --void-2: #0a101a;
          --surface: rgba(15, 22, 35, 0.86);
          --surface-solid: #101827;
          --surface-2: #151f31;
          --surface-3: #1b273b;
          --border: rgba(148, 163, 184, 0.15);
          --border-strong: rgba(148, 163, 184, 0.28);
          --text-primary: #edf4ff;
          --text-secondary: #aab6c8;
          --text-muted: #6e7c91;
          --accent: #ffb86b;
          --accent-2: #ff8f5b;
          --blue: #6c8eef;
          --cyan: #4de1ff;
          --green: #5ce6a6;
          --red: #ff6b7a;
          --purple: #a78bfa;
          --shadow: 0 24px 70px rgba(0, 0, 0, 0.38);

          min-height: 100vh;
          width: 100%;
          position: relative;
          overflow-x: hidden;
          color: var(--text-primary);
          background:
            radial-gradient(circle at 15% 0%, rgba(108,142,239,.12), transparent 30rem),
            radial-gradient(circle at 88% 12%, rgba(255,184,107,.09), transparent 28rem),
            linear-gradient(180deg, var(--void-2), var(--void));
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .algo-home::before {
          content: "";
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(148,163,184,.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148,163,184,.035) 1px, transparent 1px);
          background-size: 42px 42px;
          mask-image: linear-gradient(to bottom, black, transparent 78%);
          animation: gridMove 30s linear infinite;
        }

        .algo-home::after {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          background:
            radial-gradient(circle at 20% 25%, rgba(77,225,255,.05), transparent 16rem),
            radial-gradient(circle at 78% 55%, rgba(167,139,250,.045), transparent 20rem);
        }

        @keyframes gridMove {
          from { background-position: 0 0, 0 0; }
          to { background-position: 420px 420px, 420px 420px; }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes float {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate3d(0, -16px, 0) rotate(2deg); }
        }

        @keyframes floatSlow {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(20px, -12px, 0); }
        }

        @keyframes pulseGlow {
          0%, 100% { opacity: .45; transform: scale(1); }
          50% { opacity: .8; transform: scale(1.08); }
        }

        @keyframes scan {
          from { transform: translateY(-20vh); opacity: 0; }
          15% { opacity: .25; }
          85% { opacity: .25; }
          to { transform: translateY(120vh); opacity: 0; }
        }

        @keyframes blink {
          0%, 45% { opacity: 1; }
          50%, 95% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes typing {
          from { width: 0; }
          to { width: var(--typing-width); }
        }

        @keyframes codeLine {
          from { width: 0; opacity: .1; }
          to { width: var(--line-width); opacity: 1; }
        }

        @keyframes cardIn {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes shimmer {
          from { transform: translateX(-120%); }
          to { transform: translateX(220%); }
        }

        @keyframes acceptedPop {
          0% { opacity: 0; transform: translate(-50%, -46%) scale(.82); }
          55% { opacity: 1; transform: translate(-50%, -50%) scale(1.04); }
          100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }

        @keyframes acceptedOut {
          0%, 72% { opacity: 1; }
          100% { opacity: 0; transform: translate(-50%, -56%) scale(.97); }
        }

        @keyframes checkDraw {
          from { stroke-dashoffset: 60; }
          to { stroke-dashoffset: 0; }
        }

        @keyframes confettiFall {
          0% {
            opacity: 1;
            transform: translate3d(0, -15vh, 0) rotate(0deg) scale(1);
          }
          100% {
            opacity: 0;
            transform:
              translate3d(var(--x), 110vh, 0)
              rotate(var(--r))
              scale(.72);
          }
        }

        @keyframes terminalGlow {
          0%, 100% { box-shadow: 0 0 0 rgba(77,225,255,0); }
          50% { box-shadow: 0 0 45px rgba(77,225,255,.08); }
        }

        @keyframes progressShine {
          from { left: -50%; }
          to { left: 120%; }
        }

        @media (prefers-reduced-motion: reduce) {
          .algo-home *,
          .algo-home::before {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
        }

        /* NAVBAR */
        .algo-nav {
          position: sticky;
          top: 0;
          z-index: 50;
          min-height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 5vw;
          background: rgba(7, 11, 18, .78);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-bottom: 1px solid var(--border);
        }

        .algo-nav__brand {
          color: var(--text-primary);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 2px;
          font: 700 1.05rem/1 "JetBrains Mono", ui-monospace, monospace;
          letter-spacing: -.02em;
        }

        .algo-nav__brand span {
          color: var(--accent);
        }

        .algo-nav__cursor {
          animation: blink 1.1s step-end infinite;
        }

        .algo-nav__right {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .algo-nav__status {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 7px 11px;
          border: 1px solid rgba(92,230,166,.2);
          background: rgba(92,230,166,.05);
          border-radius: 999px;
          color: var(--green);
          font: 700 .7rem "JetBrains Mono", monospace;
        }

        .status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--green);
          box-shadow: 0 0 12px var(--green);
        }

        .algo-user {
          position: relative;
        }

        .algo-user__trigger {
          display: flex;
          align-items: center;
          gap: 9px;
          border: 1px solid var(--border);
          border-radius: 999px;
          padding: 5px 12px 5px 5px;
          background: var(--surface-2);
          color: var(--text-primary);
          cursor: pointer;
          transition: .2s ease;
        }

        .algo-user__trigger:hover,
        .algo-user__trigger.is-open {
          border-color: rgba(255,184,107,.55);
          box-shadow: 0 0 0 4px rgba(255,184,107,.07);
          transform: translateY(-1px);
        }

        .algo-user__avatar {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          color: #161008;
          font: 800 .8rem "JetBrains Mono", monospace;
          background: conic-gradient(from 180deg, var(--accent), var(--purple), var(--cyan), var(--accent));
        }

        .algo-user__name {
          font-size: .86rem;
          font-weight: 600;
        }

        .algo-user__caret {
          color: var(--text-muted);
          font-size: .55rem;
        }

        .algo-user__menu {
          position: absolute;
          right: 0;
          top: calc(100% + 10px);
          width: 190px;
          padding: 7px;
          border: 1px solid var(--border-strong);
          border-radius: 14px;
          background: rgba(16,24,39,.96);
          box-shadow: var(--shadow);
          animation: fadeUp .18s ease both;
        }

        .algo-user__menu-item {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 10px 11px;
          border: 0;
          border-radius: 9px;
          background: transparent;
          color: var(--text-secondary);
          text-decoration: none;
          font: 700 .75rem "JetBrains Mono", monospace;
          cursor: pointer;
          text-align: left;
        }

        .algo-user__menu-item:hover {
          background: rgba(255,255,255,.05);
          color: var(--text-primary);
        }

        .algo-user__menu-item--danger { color: var(--red); }
        .algo-user__menu-item--admin { color: var(--blue); }

        .algo-user__divider {
          height: 1px;
          margin: 5px 0;
          background: var(--border);
        }

        /* HERO */
        .algo-hero {
          position: relative;
          z-index: 1;
          overflow: hidden;
          padding: 76px 5vw 65px;
          border-bottom: 1px solid var(--border);
        }

        .algo-hero__scan {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          height: 150px;
          background: linear-gradient(to bottom, transparent, rgba(77,225,255,.07), transparent);
          animation: scan 9s ease-in-out infinite;
          pointer-events: none;
        }

        .algo-hero__glow {
          position: absolute;
          width: 440px;
          height: 440px;
          border-radius: 50%;
          top: -220px;
          right: -90px;
          background: radial-gradient(circle, rgba(255,184,107,.12), transparent 68%);
          animation: pulseGlow 8s ease-in-out infinite;
          pointer-events: none;
        }

        .algo-hero__glow--blue {
          width: 360px;
          height: 360px;
          top: 90px;
          left: -180px;
          background: radial-gradient(circle, rgba(108,142,239,.13), transparent 68%);
          animation: floatSlow 13s ease-in-out infinite;
        }

        .algo-hero__inner {
          position: relative;
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(360px, .8fr);
          gap: 58px;
          align-items: center;
        }

        .algo-hero__copy {
          animation: fadeUp .7s ease both;
        }

        .algo-hero__eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin: 0 0 18px;
          color: var(--accent);
          font: 700 .75rem "JetBrains Mono", monospace;
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        .algo-hero__eyebrow::before {
          content: ">";
          color: var(--green);
        }

        .algo-hero__title {
          max-width: 760px;
          margin: 0;
          font: 800 clamp(2.7rem, 6vw, 5.6rem)/.98 "JetBrains Mono", ui-monospace, monospace;
          letter-spacing: -.065em;
        }

        .algo-hero__title .highlight {
          color: transparent;
          background: linear-gradient(100deg, var(--accent), #ffd69d 45%, var(--cyan));
          -webkit-background-clip: text;
          background-clip: text;
        }

        .algo-hero__subtitle {
          max-width: 650px;
          margin: 23px 0 0;
          color: var(--text-secondary);
          font-size: 1.03rem;
          line-height: 1.75;
        }

        .algo-hero__boot {
          display: inline-block;
          margin-top: 22px;
          max-width: 100%;
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid var(--green);
          color: var(--green);
          font: 700 .74rem "JetBrains Mono", monospace;
          animation: typing 1.3s steps(36, end) both;
          width: var(--typing-width);
        }

        .algo-hero__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 11px;
          margin-top: 28px;
        }

        .algo-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 44px;
          padding: 0 17px;
          border-radius: 10px;
          border: 1px solid var(--border-strong);
          text-decoration: none;
          cursor: pointer;
          font: 800 .78rem "JetBrains Mono", monospace;
          transition: transform .2s ease, border-color .2s ease, box-shadow .2s ease;
        }

        .algo-btn:hover {
          transform: translateY(-2px);
        }

        .algo-btn--primary {
          color: #171006;
          border-color: transparent;
          background: linear-gradient(135deg, var(--accent), #ffd69d);
          box-shadow: 0 12px 30px rgba(255,184,107,.16);
        }

        .algo-btn--primary:hover {
          box-shadow: 0 16px 36px rgba(255,184,107,.25);
        }

        .algo-btn--ghost {
          color: var(--text-primary);
          background: rgba(255,255,255,.035);
        }

        .algo-btn--ghost:hover {
          border-color: rgba(108,142,239,.55);
          background: rgba(108,142,239,.07);
        }

        /* CODE VISUAL */
        .algo-terminal {
          position: relative;
          min-height: 360px;
          border: 1px solid var(--border-strong);
          border-radius: 18px;
          background: linear-gradient(145deg, rgba(18,28,45,.95), rgba(9,14,23,.94));
          box-shadow: var(--shadow);
          overflow: hidden;
          animation: fadeUp .75s .12s ease both, terminalGlow 7s ease-in-out infinite;
        }

        .algo-terminal::before {
          content: "";
          position: absolute;
          width: 220px;
          height: 220px;
          right: -80px;
          top: -100px;
          background: radial-gradient(circle, rgba(77,225,255,.14), transparent 70%);
        }

        .algo-terminal__top {
          height: 43px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 15px;
          border-bottom: 1px solid var(--border);
          background: rgba(255,255,255,.025);
        }

        .terminal-dots {
          display: flex;
          gap: 6px;
        }

        .terminal-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--text-muted);
        }

        .terminal-title {
          color: var(--text-muted);
          font: 700 .65rem "JetBrains Mono", monospace;
        }

        .algo-terminal__body {
          position: relative;
          padding: 24px 24px 28px;
          min-height: 317px;
          font: 700 .76rem/1.85 "JetBrains Mono", monospace;
        }

        .code-line {
          display: flex;
          gap: 13px;
          white-space: nowrap;
          animation: codeLine .65s ease both;
        }

        .code-line:nth-child(1) { --line-width: 95%; animation-delay: .25s; }
        .code-line:nth-child(2) { --line-width: 88%; animation-delay: .38s; }
        .code-line:nth-child(3) { --line-width: 72%; animation-delay: .51s; }
        .code-line:nth-child(4) { --line-width: 91%; animation-delay: .64s; }
        .code-line:nth-child(5) { --line-width: 62%; animation-delay: .77s; }
        .code-line:nth-child(6) { --line-width: 84%; animation-delay: .90s; }
        .code-line:nth-child(7) { --line-width: 70%; animation-delay: 1.03s; }
        .code-line:nth-child(8) { --line-width: 52%; animation-delay: 1.16s; }

        .line-no {
          width: 18px;
          flex: 0 0 18px;
          color: #3f4e63;
          user-select: none;
          text-align: right;
        }

        .syntax-key { color: #c792ea; }
        .syntax-fn { color: #82aaff; }
        .syntax-str { color: #c3e88d; }
        .syntax-num { color: #f78c6c; }
        .syntax-comment { color: #53647a; }

        .terminal-cursor {
          display: inline-block;
          width: 7px;
          height: 14px;
          margin-left: 4px;
          vertical-align: -2px;
          background: var(--cyan);
          animation: blink 1s step-end infinite;
        }

        .floating-bracket {
          position: absolute;
          color: rgba(77,225,255,.24);
          font: 800 7rem/1 "JetBrains Mono", monospace;
          pointer-events: none;
          animation: float 7s ease-in-out infinite;
        }

        .floating-bracket--left { left: -30px; bottom: -45px; }
        .floating-bracket--right { right: -24px; top: 52px; animation-delay: -2s; color: rgba(255,184,107,.2); }

        /* STATS */
        .algo-stats {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: -28px auto 0;
          padding: 0 5vw;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .algo-stat-card {
          min-height: 88px;
          padding: 17px 18px;
          border: 1px solid var(--border);
          border-radius: 13px;
          background: rgba(15,22,35,.86);
          backdrop-filter: blur(14px);
          box-shadow: 0 15px 35px rgba(0,0,0,.18);
          animation: fadeUp .55s ease both;
        }

        .algo-stat-card:nth-child(2) { animation-delay: .05s; }
        .algo-stat-card:nth-child(3) { animation-delay: .1s; }
        .algo-stat-card:nth-child(4) { animation-delay: .15s; }

        .algo-stat-card__label {
          color: var(--text-muted);
          font: 700 .68rem "JetBrains Mono", monospace;
        }

        .algo-stat-card__value {
          margin-top: 7px;
          font: 800 1.45rem "JetBrains Mono", monospace;
        }

        .value-green { color: var(--green); }
        .value-orange { color: var(--accent); }
        .value-red { color: var(--red); }
        .value-blue { color: var(--blue); }

        /* CONTENT */
        .algo-content {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 62px 5vw 90px;
        }

        .algo-section-head {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 20px;
          margin-bottom: 22px;
        }

        .algo-section-kicker {
          margin: 0 0 7px;
          color: var(--accent);
          font: 700 .7rem "JetBrains Mono", monospace;
          text-transform: uppercase;
          letter-spacing: .08em;
        }

        .algo-section-title {
          margin: 0;
          font: 800 clamp(1.45rem, 3vw, 2rem) "JetBrains Mono", monospace;
          letter-spacing: -.04em;
        }

        .algo-section-subtitle {
          margin: 8px 0 0;
          color: var(--text-muted);
          font-size: .88rem;
        }

        .algo-filters {
          display: grid;
          grid-template-columns: minmax(180px, 1.5fr) repeat(3, minmax(150px, .75fr));
          gap: 9px;
          margin-bottom: 18px;
        }

        .algo-search {
          width: 100%;
          min-height: 44px;
          padding: 0 14px 0 42px;
          color: var(--text-primary);
          background: rgba(15,22,35,.88);
          border: 1px solid var(--border);
          border-radius: 10px;
          outline: none;
          font: 600 .76rem "JetBrains Mono", monospace;
          transition: .2s ease;
        }

        .algo-search-wrap {
          position: relative;
        }

        .algo-search-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
          pointer-events: none;
        }

        .algo-search:focus {
          border-color: rgba(77,225,255,.5);
          box-shadow: 0 0 0 4px rgba(77,225,255,.06);
        }

        .algo-select {
          appearance: none;
          width: 100%;
          min-height: 44px;
          padding: 0 35px 0 13px;
          color: var(--text-secondary);
          background:
            linear-gradient(45deg, transparent 50%, #66758b 50%) calc(100% - 17px) 19px / 5px 5px no-repeat,
            linear-gradient(135deg, #66758b 50%, transparent 50%) calc(100% - 13px) 19px / 5px 5px no-repeat,
            rgba(15,22,35,.88);
          border: 1px solid var(--border);
          border-radius: 10px;
          outline: none;
          font: 600 .74rem "JetBrains Mono", monospace;
          cursor: pointer;
          transition: .2s ease;
        }

        .algo-select:hover,
        .algo-select:focus {
          border-color: rgba(255,184,107,.45);
        }

        .algo-select option {
          background: #101827;
          color: #edf4ff;
        }

        /* PROGRESS */
        .algo-progress-panel {
          margin-bottom: 24px;
          padding: 18px;
          border: 1px solid var(--border);
          border-radius: 14px;
          background: rgba(15,22,35,.58);
        }

        .algo-progress-panel__row {
          display: flex;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 9px;
          font: 700 .7rem "JetBrains Mono", monospace;
        }

        .algo-progress-panel__row span:first-child {
          color: var(--text-muted);
        }

        .algo-progress-panel__row span:last-child {
          color: var(--green);
        }

        .algo-progress-track {
          position: relative;
          height: 7px;
          overflow: hidden;
          border-radius: 99px;
          background: #0a1019;
          border: 1px solid var(--border);
        }

        .algo-progress-fill {
          position: relative;
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, var(--green), var(--cyan), var(--accent));
          transition: width .8s cubic-bezier(.16,1,.3,1);
        }

        .algo-progress-fill::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 35%;
          left: -50%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.6), transparent);
          animation: progressShine 2.5s linear infinite;
        }

        /* PROBLEM CARDS */
        .algo-list {
          display: grid;
          gap: 11px;
        }

        .algo-card {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          min-height: 86px;
          padding: 15px 17px 15px 20px;
          overflow: hidden;
          border: 1px solid var(--border);
          border-left: 3px solid var(--card-accent, var(--border));
          border-radius: 13px;
          background: linear-gradient(135deg, rgba(16,24,39,.94), rgba(11,17,28,.92));
          animation: cardIn .45s ease both;
          transition: transform .2s ease, border-color .2s ease, box-shadow .2s ease;
        }

        .algo-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(110deg, transparent 25%, rgba(255,255,255,.035) 50%, transparent 75%);
          transform: translateX(-120%);
          pointer-events: none;
        }

        .algo-card:hover {
          transform: translateY(-3px);
          border-color: var(--card-accent);
          box-shadow: 0 18px 45px rgba(0,0,0,.25), 0 0 0 1px color-mix(in srgb, var(--card-accent) 35%, transparent);
        }

        .algo-card:hover::before {
          animation: shimmer .9s ease;
        }

        .algo-card__main {
          min-width: 0;
        }

        .algo-card__number {
          display: inline-block;
          margin-right: 9px;
          color: var(--text-muted);
          font: 700 .66rem "JetBrains Mono", monospace;
        }

        .algo-card__title {
          color: var(--text-primary);
          text-decoration: none;
          font-size: .95rem;
          font-weight: 750;
          transition: color .18s ease;
        }

        .algo-card__title:hover {
          color: var(--accent);
        }

        .algo-card__badges {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: 8px;
        }

        .algo-pill {
          display: inline-flex;
          align-items: center;
          padding: 4px 8px;
          border-radius: 999px;
          font: 700 .64rem "JetBrains Mono", monospace;
          border: 1px solid transparent;
          text-transform: capitalize;
        }

        .algo-pill--easy {
          color: var(--green);
          background: rgba(92,230,166,.07);
          border-color: rgba(92,230,166,.25);
        }

        .algo-pill--medium {
          color: var(--accent);
          background: rgba(255,184,107,.07);
          border-color: rgba(255,184,107,.25);
        }

        .algo-pill--hard {
          color: var(--red);
          background: rgba(255,107,122,.07);
          border-color: rgba(255,107,122,.25);
        }

        .algo-pill--neutral {
          color: var(--text-muted);
          background: rgba(255,255,255,.035);
          border-color: var(--border);
        }

        .algo-pill--tag {
          color: var(--blue);
          background: rgba(108,142,239,.07);
          border-color: rgba(108,142,239,.24);
        }

        .algo-card__solved {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 10px;
          border: 1px solid rgba(92,230,166,.3);
          border-radius: 999px;
          color: var(--green);
          background: rgba(92,230,166,.065);
          font: 800 .65rem "JetBrains Mono", monospace;
        }

        .algo-card__solved svg {
          width: 14px;
          height: 14px;
        }

        .algo-empty {
          padding: 60px 20px;
          text-align: center;
          border: 1px dashed var(--border-strong);
          border-radius: 14px;
          color: var(--text-muted);
          font: 700 .78rem "JetBrains Mono", monospace;
        }

        /* CELEBRATION */
        .algo-celebration {
          position: fixed;
          inset: 0;
          z-index: 100;
          pointer-events: none;
        }

        .algo-celebration__backdrop {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(92,230,166,.08), transparent 40%);
          animation: fadeIn .25s ease both;
        }

        .algo-celebration__card {
          position: absolute;
          left: 50%;
          top: 43%;
          width: min(390px, calc(100vw - 32px));
          padding: 26px 24px;
          text-align: center;
          border: 1px solid rgba(92,230,166,.38);
          border-radius: 20px;
          background: rgba(10,17,27,.94);
          box-shadow: 0 30px 100px rgba(0,0,0,.55), 0 0 80px rgba(92,230,166,.12);
          backdrop-filter: blur(18px);
          animation: acceptedPop 3.6s ease both;
        }

        .algo-celebration__icon {
          width: 70px;
          height: 70px;
          margin: 0 auto 15px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          color: var(--green);
          background: rgba(92,230,166,.09);
          border: 1px solid rgba(92,230,166,.28);
          box-shadow: 0 0 35px rgba(92,230,166,.13);
        }

        .algo-celebration__icon svg {
          width: 36px;
          height: 36px;
        }

        .algo-celebration__icon path {
          stroke-dasharray: 60;
          stroke-dashoffset: 60;
          animation: checkDraw .65s .2s ease forwards;
        }

        .algo-celebration__title {
          margin: 0;
          font: 800 1.45rem "JetBrains Mono", monospace;
        }

        .algo-celebration__text {
          margin: 9px 0 0;
          color: var(--text-secondary);
          font-size: .84rem;
        }

        .algo-celebration__code {
          display: inline-block;
          margin-top: 15px;
          padding: 7px 10px;
          border-radius: 8px;
          color: var(--green);
          background: rgba(92,230,166,.06);
          border: 1px solid rgba(92,230,166,.17);
          font: 700 .68rem "JetBrains Mono", monospace;
        }

        .confetti {
          position: absolute;
          left: var(--left);
          top: 0;
          width: var(--size);
          height: calc(var(--size) * 1.8);
          border-radius: 2px;
          background: var(--confetti);
          animation: confettiFall var(--duration) cubic-bezier(.2,.7,.3,1) var(--delay) both;
        }

        /* FOOTER */
        .algo-footer {
          position: relative;
          z-index: 2;
          padding: 25px 5vw 35px;
          border-top: 1px solid var(--border);
          color: var(--text-muted);
          text-align: center;
          font: 600 .66rem "JetBrains Mono", monospace;
        }

        @media (max-width: 900px) {
          .algo-hero__inner {
            grid-template-columns: 1fr;
          }

          .algo-terminal {
            max-width: 680px;
          }

          .algo-stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .algo-filters {
            grid-template-columns: 1fr 1fr;
          }

          .algo-search-wrap {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 620px) {
          .algo-nav {
            padding: 0 16px;
          }

          .algo-nav__status {
            display: none;
          }

          .algo-user__name {
            display: none;
          }

          .algo-hero {
            padding: 55px 18px 50px;
          }

          .algo-hero__title {
            font-size: 2.55rem;
          }

          .algo-hero__subtitle {
            font-size: .9rem;
          }

          .algo-terminal {
            min-height: 300px;
          }

          .algo-terminal__body {
            overflow-x: auto;
            font-size: .67rem;
          }

          .algo-stats {
            padding: 0 18px;
            grid-template-columns: 1fr 1fr;
          }

          .algo-content {
            padding: 48px 18px 70px;
          }

          .algo-filters {
            grid-template-columns: 1fr;
          }

          .algo-search-wrap {
            grid-column: auto;
          }

          .algo-section-head {
            align-items: start;
            flex-direction: column;
          }

          .algo-card {
            align-items: flex-start;
          }

          .algo-card__solved {
            padding: 6px 8px;
          }

          .algo-card__solved span {
            display: none;
          }
        }
      `}</style>

      {/* Celebration overlay */}
      {celebrating && (
        <div className="algo-celebration" key={celebrationKey} aria-live="polite">
          <div className="algo-celebration__backdrop" />

          {Array.from({ length: 44 }).map((_, index) => (
            <span
              key={index}
              className="confetti"
              style={{
                '--left': `${(index * 37) % 101}%`,
                '--size': `${5 + (index % 4)}px`,
                '--x': `${((index * 73) % 260) - 130}px`,
                '--r': `${(index % 2 ? 1 : -1) * (180 + (index % 5) * 120)}deg`,
                '--duration': `${2.2 + (index % 8) * 0.16}s`,
                '--delay': `${(index % 10) * 0.035}s`,
                '--confetti': [
                  '#5ce6a6',
                  '#4de1ff',
                  '#ffb86b',
                  '#a78bfa',
                  '#ff6b7a',
                  '#ffffff',
                ][index % 6],
              }}
            />
          ))}

          <div className="algo-celebration__card">
            <div className="algo-celebration__icon">
              <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <path
                  d="M10 25L19 34L38 13"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h2 className="algo-celebration__title">Problem Solved! 🎉</h2>
            <p className="algo-celebration__text">
              All test cases passed. Keep building your streak.
            </p>
            <span className="algo-celebration__code">
              &gt; submission::accepted
            </span>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="algo-nav">
        <NavLink to="/" className="algo-nav__brand">
          Algo<span>Coding</span> Platform<span className="algo-nav__cursor">_</span>
        </NavLink>

        <div className="algo-nav__right">
          <div className="algo-nav__status">
            <span className="status-dot" />
            SYSTEM ONLINE
          </div>

          <div className="algo-user" ref={menuRef}>
            <button
              type="button"
              className={`algo-user__trigger ${menuOpen ? 'is-open' : ''}`}
              onClick={() => setMenuOpen((value) => !value)}
            >
              <span className="algo-user__avatar">{initials}</span>
              <span className="algo-user__name">{user?.firstName || 'Coder'}</span>
              <span className="algo-user__caret">▼</span>
            </button>

            {menuOpen && (
              <div className="algo-user__menu">
                {user?.role === 'admin' && (
                  <>
                    <NavLink
                      to="/admin"
                      className="algo-user__menu-item algo-user__menu-item--admin"
                      onClick={() => setMenuOpen(false)}
                    >
                      ⚙ Admin_panel
                    </NavLink>
                    <div className="algo-user__divider" />
                  </>
                )}

                <button
                  className="algo-user__menu-item algo-user__menu-item--danger"
                  onClick={handleLogout}
                >
                  ⏻ logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="algo-hero">
        <div className="algo-hero__scan" aria-hidden="true" />
        <div className="algo-hero__glow" aria-hidden="true" />
        <div className="algo-hero__glow algo-hero__glow--blue" aria-hidden="true" />

        <div className="algo-hero__inner">
          <div className="algo-hero__copy">
            <p className="algo-hero__eyebrow">Developer workspace</p>

            <h1 className="algo-hero__title">
              {user?.firstName || 'Coder'} ready to{' '}
              <span className="highlight">solve?</span>
            </h1>

            <p className="algo-hero__subtitle">
              Sharpen your problem-solving skills, master algorithms, and build
              consistency one accepted solution at a time.
            </p>

            <span
              className="algo-hero__boot"
              style={{ '--typing-width': `${Math.min(bootLine.length, 52)}ch` }}
            >
              {bootLine}
            </span>

            <div className="algo-hero__actions">
              <button className="algo-btn algo-btn--primary" onClick={scrollToProblems}>
                Start Solving →
              </button>

              <button
                className="algo-btn algo-btn--ghost"
                onClick={() => {
                  setFilters({ difficulty: 'all', tag: 'all', status: 'unsolved' });
                  setSearch('');
                  scrollToProblems();
                }}
              >
                Continue Practice
              </button>
            </div>
          </div>

          {/* Animated coding illustration */}
          <div className="algo-terminal" aria-label="Animated code preview">
            <div className="algo-terminal__top">
              <div className="terminal-dots">
                <span className="terminal-dot" />
                <span className="terminal-dot" />
                <span className="terminal-dot" />
              </div>
              <span className="terminal-title">solution.cpp — Algo IDE</span>
              <span className="terminal-title">● LIVE</span>
            </div>

            <div className="algo-terminal__body">
              <div className="code-line">
                <span className="line-no">01</span>
                <span>
                  <span className="syntax-key">#include</span>{' '}
                  <span className="syntax-str">&lt;bits/stdc++.h&gt;</span>
                </span>
              </div>

              <div className="code-line">
                <span className="line-no">02</span>
                <span>
                  <span className="syntax-key">using namespace</span>{' '}
                  std;
                </span>
              </div>

              <div className="code-line">
                <span className="line-no">03</span>
                <span>
                  <span className="syntax-key">int</span>{' '}
                  <span className="syntax-fn">solve</span>
                  () {'{'}
                </span>
              </div>

              <div className="code-line">
                <span className="line-no">04</span>
                <span>
                  &nbsp;&nbsp;<span className="syntax-key">int</span> ans ={' '}
                  <span className="syntax-num">0</span>;
                </span>
              </div>

              <div className="code-line">
                <span className="line-no">05</span>
                <span>
                  &nbsp;&nbsp;<span className="syntax-key">for</span> (
                  <span className="syntax-key">int</span> x : nums)
                </span>
              </div>

              <div className="code-line">
                <span className="line-no">06</span>
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;ans += x;
                </span>
              </div>

              <div className="code-line">
                <span className="line-no">07</span>
                <span>
                  &nbsp;&nbsp;<span className="syntax-key">return</span> ans;
                </span>
              </div>

              <div className="code-line">
                <span className="line-no">08</span>
                <span>
                  {'}'} <span className="terminal-cursor" />
                </span>
              </div>

              <span className="floating-bracket floating-bracket--left">{'{'}</span>
              <span className="floating-bracket floating-bracket--right">{'}'}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Stats */}
      <section className="algo-stats" aria-label="Problem statistics">
        <div className="algo-stat-card">
          <div className="algo-stat-card__label">SOLVED</div>
          <div className="algo-stat-card__value value-green">{solvedCount}</div>
        </div>

        <div className="algo-stat-card">
          <div className="algo-stat-card__label">EASY</div>
          <div className="algo-stat-card__value value-green">{easyCount}</div>
        </div>

        <div className="algo-stat-card">
          <div className="algo-stat-card__label">MEDIUM</div>
          <div className="algo-stat-card__value value-orange">{mediumCount}</div>
        </div>

        <div className="algo-stat-card">
          <div className="algo-stat-card__label">HARD</div>
          <div className="algo-stat-card__value value-red">{hardCount}</div>
        </div>
      </section>

      {/* Problems */}
      <main className="algo-content" id="problems">
        <div className="algo-section-head">
          <div>
            <p className="algo-section-kicker">Problem library</p>
            <h2 className="algo-section-title">Choose your next challenge</h2>
            <p className="algo-section-subtitle">
              Practice deliberately. Submit confidently. Improve consistently.
            </p>
          </div>

          <span className="algo-pill algo-pill--tag">
            {filteredProblems.length} challenges
          </span>
        </div>

        <div className="algo-progress-panel">
          <div className="algo-progress-panel__row">
            <span>solved_progress</span>
            <span>
              {solvedCount}/{totalCount} · {solvedPct}%
            </span>
          </div>

          <div className="algo-progress-track">
            <div
              className="algo-progress-fill"
              style={{ width: `${solvedPct}%` }}
            />
          </div>
        </div>

        <div className="algo-filters">
          <div className="algo-search-wrap">
            <span className="algo-search-icon">⌕</span>
            <input
              className="algo-search"
              type="text"
              placeholder="Search problems..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <select
            className="algo-select"
            value={filters.status}
            onChange={(e) =>
              setFilters({ ...filters, status: e.target.value })
            }
          >
            <option value="all">All Problems</option>
            <option value="solved">Solved Problems</option>
            <option value="unsolved">Unsolved Problems</option>
          </select>

          <select
            className="algo-select"
            value={filters.difficulty}
            onChange={(e) =>
              setFilters({ ...filters, difficulty: e.target.value })
            }
          >
            <option value="all">All Difficulties</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>

          <select
            className="algo-select"
            value={filters.tag}
            onChange={(e) =>
              setFilters({ ...filters, tag: e.target.value })
            }
          >
            <option value="all">All Tags</option>
            <option value="array">Array</option>
            <option value="linkedlist">Linked List</option>
            <option value="graph">Graph</option>
            <option value="dp">DP</option>
          </select>
        </div>

        {filteredProblems.length > 0 ? (
          <div className="algo-list">
            {filteredProblems.map((problem, idx) => {
              const isSolved = solvedProblems.some(
                (sp) => sp._id === problem._id
              );

              const difficulty = problem.difficulty?.toLowerCase();

              const accentVar =
                difficulty === 'easy'
                  ? 'var(--green)'
                  : difficulty === 'medium'
                    ? 'var(--accent)'
                    : difficulty === 'hard'
                      ? 'var(--red)'
                      : 'var(--border)';

              return (
                <article
                  key={problem._id}
                  className="algo-card"
                  style={{
                    '--card-accent': accentVar,
                    animationDelay: `${Math.min(idx, 10) * 0.045}s`,
                  }}
                >
                  <div className="algo-card__main">
                    <div>
                      <span className="algo-card__number">
                        #{String(idx + 1).padStart(2, '0')}
                      </span>

                      <NavLink
                        to={`/problem/${problem._id}`}
                        className="algo-card__title"
                      >
                        {problem.title}
                      </NavLink>
                    </div>

                    <div className="algo-card__badges">
                      <span
                        className={`algo-pill ${getDifficultyPillClass(
                          problem.difficulty
                        )}`}
                      >
                        {problem.difficulty || 'Unknown'}
                      </span>

                      <span className="algo-pill algo-pill--tag">
                        {problem.tags || 'General'}
                      </span>
                    </div>
                  </div>

                  {isSolved && (
                    <div className="algo-card__solved">
                      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path
                          d="M4 10.5L8 14.5L16 5.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>solved</span>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        ) : (
          <div className="algo-empty">
            No problems match these filters_
          </div>
        )}
      </main>

      <footer className="algo-footer">
        &gt; AlgoCoding Platform · practice → submit → improve
      </footer>
    </div>
  );
}

const getDifficultyPillClass = (difficulty) => {
  switch (difficulty?.toLowerCase()) {
    case 'easy':
      return 'algo-pill--easy';
    case 'medium':
      return 'algo-pill--medium';
    case 'hard':
      return 'algo-pill--hard';
    default:
      return 'algo-pill--neutral';
  }
};

export default Homepage;