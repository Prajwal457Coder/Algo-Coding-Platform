
import { useEffect, useState, useRef, useMemo } from 'react';
import { useNavigate, NavLink } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import axiosClient from '../utils/axiosClient';
import { logoutUser } from '../authSlice';
import { Pencil, AlertCircle } from 'lucide-react';

const AdminUpdate = () => {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    fetchProblems();
  }, []);

  // Close the user dropdown on outside click
  useEffect(() => {
    const onClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const initials = useMemo(() => {
    const name = user?.firstName || '?';
    return name.charAt(0).toUpperCase();
  }, [user]);

  const handleLogout = () => {
    dispatch(logoutUser());
    setMenuOpen(false);
  };

  const fetchProblems = async () => {
    try {
      setLoading(true);
      const { data } = await axiosClient.get('/problem/getAllProblem');
      setProblems(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch problems');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = (id) => {
    navigate(`/admin/update/${id}`);
  };

  const getDifficultyPillClass = (difficulty) => {
    switch (difficulty?.toLowerCase()) {
      case 'easy': return 'algo-pill--easy';
      case 'medium': return 'algo-pill--medium';
      case 'hard': return 'algo-pill--hard';
      default: return 'algo-pill--neutral';
    }
  };

  return (
    <div className="algo-update-page">
      <style>{`
        .algo-update-page {
          --void: #0a0e14;
          --surface: #121826;
          --surface-2: #1a2233;
          --border: #232d40;
          --text-primary: #e8edf4;
          --text-muted: #7a8699;
          --accent: #ffb86b;
          --accent-dim: #ffb86b22;
          --secondary: #6c8eef;
          --secondary-dim: #6c8eef22;
          --danger: #ff6b6b;
          --danger-dim: #ff6b6b1f;
          --green: #5ce6a6;
          --green-dim: #5ce6a61f;

          min-height: 100vh;
          width: 100%;
          background: var(--void);
          font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
          color: var(--text-primary);
        }

        @keyframes algo-fade-up {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes algo-fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes algo-menu-in {
          from { opacity: 0; transform: translateY(-6px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes algo-glow-drift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(28px, -20px); }
        }
        @keyframes algo-shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .algo-update-page * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; }
        }

        /* ---- Nav ---- */
        .algo-nav {
          position: sticky;
          top: 0;
          z-index: 30;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.9rem 1.5rem;
          background: rgba(18, 24, 38, 0.85);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border);
        }

        .algo-nav__left {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .algo-nav__brand {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--text-primary);
          text-decoration: none;
        }

        .algo-nav__brand span { color: var(--accent); }

        .algo-nav__crumb {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 0.8rem;
          color: var(--text-muted);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.3rem 0.7rem;
          border: 1px solid var(--border);
          border-radius: 999px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .algo-nav__crumb:hover { color: var(--accent); border-color: var(--accent); }

        .algo-user { position: relative; }

        .algo-user__trigger {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: var(--surface-2);
          border: 1px solid var(--border);
          border-radius: 999px;
          padding: 0.3rem 0.9rem 0.3rem 0.3rem;
          cursor: pointer;
          transition: border-color 0.15s ease;
          color: var(--text-primary);
          font-size: 0.9rem;
        }

        .algo-user__trigger:hover { border-color: var(--accent); }

        .algo-user__avatar {
          width: 1.9rem;
          height: 1.9rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-weight: 700;
          font-size: 0.85rem;
          color: #1a1206;
          background: conic-gradient(from 180deg, var(--accent), var(--secondary), var(--accent));
        }

        .algo-user__badge {
          font-size: 0.62rem;
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          color: var(--secondary);
          background: var(--secondary-dim);
          border: 1px solid rgba(108,142,239,0.4);
          padding: 0.1rem 0.4rem;
          border-radius: 999px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .algo-user__caret {
          font-size: 0.6rem;
          color: var(--text-muted);
          transition: transform 0.18s ease;
        }

        .algo-user__trigger.is-open .algo-user__caret { transform: rotate(180deg); }

        .algo-user__menu {
          position: absolute;
          right: 0;
          top: calc(100% + 0.5rem);
          width: 12rem;
          background: var(--surface-2);
          border: 1px solid var(--border);
          border-radius: 0.65rem;
          box-shadow: 0 20px 40px -12px rgba(0,0,0,0.6);
          overflow: hidden;
          animation: algo-menu-in 0.16s ease-out both;
        }

        .algo-user__menu-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          width: 100%;
          padding: 0.65rem 0.9rem;
          background: none;
          border: none;
          text-align: left;
          font-size: 0.85rem;
          color: var(--text-primary);
          cursor: pointer;
          text-decoration: none;
          transition: background 0.12s ease;
          font-family: 'JetBrains Mono', ui-monospace, monospace;
        }

        .algo-user__menu-item:hover { background: rgba(255,255,255,0.04); }
        .algo-user__menu-item--danger { color: var(--danger); }
        .algo-user__menu-item--admin { color: var(--secondary); }
        .algo-user__divider { height: 1px; background: var(--border); }

        /* ---- Hero ---- */
        .algo-hero {
          position: relative;
          overflow: hidden;
          padding: 2.25rem 1.5rem 1.75rem;
          background: radial-gradient(circle at 88% 0%, #241c14 0%, var(--void) 60%);
          border-bottom: 1px solid var(--border);
        }

        .algo-hero__glow {
          position: absolute;
          width: 20rem;
          height: 20rem;
          border-radius: 50%;
          background: radial-gradient(circle, var(--accent-dim) 0%, transparent 70%);
          top: -7rem;
          right: -3rem;
          animation: algo-glow-drift 12s ease-in-out infinite;
          pointer-events: none;
        }

        .algo-hero__inner {
          position: relative;
          z-index: 1;
          max-width: 72rem;
          margin: 0 auto;
          animation: algo-fade-up 0.5s ease-out both;
        }

        .algo-hero__eyebrow {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 0.78rem;
          color: var(--accent);
          margin: 0 0 0.4rem;
        }

        .algo-hero__title {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 1.6rem;
          font-weight: 700;
          margin: 0 0 0.3rem;
        }

        .algo-hero__title span { color: var(--accent); }

        .algo-hero__subtitle {
          color: var(--text-muted);
          font-size: 0.85rem;
          margin: 0;
        }

        /* ---- Content ---- */
        .algo-content {
          max-width: 72rem;
          margin: 0 auto;
          padding: 2rem 1.5rem 4rem;
        }

        .algo-list {
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }

        .algo-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: var(--surface);
          border: 1px solid var(--border);
          border-left: 3px solid transparent;
          border-radius: 0.65rem;
          padding: 0.9rem 1.1rem;
          cursor: pointer;
          animation: algo-fade-up 0.35s ease-out both;
          transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
        }

        .algo-row:hover {
          transform: translateY(-2px);
          border-left-color: var(--accent);
          box-shadow: 0 14px 28px -18px rgba(0,0,0,0.6);
        }

        .algo-row__index {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 0.78rem;
          color: var(--text-muted);
          width: 1.75rem;
          flex-shrink: 0;
        }

        .algo-row__main {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .algo-row__title {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .algo-row__badges {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .algo-pill {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 0.7rem;
          padding: 0.2rem 0.55rem;
          border-radius: 999px;
          border: 1px solid transparent;
          text-transform: capitalize;
        }

        .algo-pill--easy { color: var(--green); background: var(--green-dim); border-color: rgba(92,230,166,0.35); }
        .algo-pill--medium { color: var(--accent); background: var(--accent-dim); border-color: rgba(255,184,108,0.35); }
        .algo-pill--hard { color: var(--danger); background: var(--danger-dim); border-color: rgba(255,107,107,0.35); }
        .algo-pill--neutral { color: var(--text-muted); background: rgba(255,255,255,0.04); border-color: var(--border); }
        .algo-pill--tag { color: var(--secondary); background: var(--secondary-dim); border-color: rgba(108,142,239,0.35); }

        .algo-btn {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 0.78rem;
          padding: 0.45rem 0.9rem;
          border-radius: 0.45rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          border: 1px solid transparent;
          transition: transform 0.12s ease, filter 0.15s ease;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .algo-btn--update {
          background: var(--accent-dim);
          color: var(--accent);
          border-color: rgba(255,184,108,0.4);
        }

        .algo-btn--update:hover {
          background: var(--accent);
          color: #1a1206;
          transform: translateY(-1px);
        }

        /* ---- Loading / error / empty ---- */
        .algo-skeleton-list {
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }

        .algo-skeleton-row {
          height: 3.4rem;
          border-radius: 0.65rem;
          background: linear-gradient(90deg, var(--surface) 25%, var(--surface-2) 50%, var(--surface) 75%);
          background-size: 200% 100%;
          animation: algo-shimmer 1.4s ease-in-out infinite;
          border: 1px solid var(--border);
        }

        .algo-error {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: var(--danger-dim);
          border: 1px solid rgba(255,107,107,0.4);
          color: #ffb3b3;
          border-radius: 0.6rem;
          padding: 0.9rem 1.1rem;
          font-size: 0.85rem;
          animation: algo-fade-in 0.3s ease-out both;
          margin-bottom: 1rem;
        }

        .algo-empty {
          text-align: center;
          padding: 3rem 1rem;
          color: var(--text-muted);
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 0.9rem;
        }
      `}</style>

      {/* Navigation Bar */}
      <nav className="algo-nav">
        <div className="algo-nav__left">
          <NavLink to="/" className="algo-nav__brand">
            Algo<span>Coding</span>
          </NavLink>
          <NavLink to="/admin" className="algo-nav__crumb">
            ← Admin_panel
          </NavLink>
        </div>

        <div className="algo-user" ref={menuRef}>
          <button
            type="button"
            className={`algo-user__trigger ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="algo-user__avatar">{initials}</span>
            {user?.firstName}
            {user?.role === 'admin' && <span className="algo-user__badge">admin</span>}
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
              <button className="algo-user__menu-item algo-user__menu-item--danger" onClick={handleLogout}>
                ⏻ logout
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <div className="algo-hero">
        <div className="algo-hero__glow" aria-hidden="true" />
        <div className="algo-hero__inner">
          <p className="algo-hero__eyebrow">Edit content</p>
          <h1 className="algo-hero__title">
            Update<span>_Problem</span>
          </h1>
          <p className="algo-hero__subtitle">
            {problems.length} problem{problems.length === 1 ? '' : 's'} — pick one to edit.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="algo-content">
        {error && (
          <div className="algo-error">
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        )}

        {loading ? (
          <div className="algo-skeleton-list">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="algo-skeleton-row" style={{ animationDelay: `${i * 0.08}s` }} />
            ))}
          </div>
        ) : problems.length === 0 ? (
          <div className="algo-empty">// no problems found</div>
        ) : (
          <div className="algo-list">
            {problems.map((problem, index) => (
              <div
                key={problem._id}
                className="algo-row"
                onClick={() => handleUpdate(problem._id)}
                style={{ animationDelay: `${Math.min(index, 8) * 0.04}s` }}
              >
                <span className="algo-row__index">{String(index + 1).padStart(2, '0')}</span>

                <div className="algo-row__main">
                  <span className="algo-row__title">{problem.title}</span>
                  <div className="algo-row__badges">
                    <span className={`algo-pill ${getDifficultyPillClass(problem.difficulty)}`}>
                      {problem.difficulty}
                    </span>
                    <span className="algo-pill algo-pill--tag">{problem.tags}</span>
                  </div>
                </div>

                <button
                  onClick={(e) => { e.stopPropagation(); handleUpdate(problem._id); }}
                  className="algo-btn algo-btn--update"
                >
                  <Pencil size={14} />
                  Update
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminUpdate;

