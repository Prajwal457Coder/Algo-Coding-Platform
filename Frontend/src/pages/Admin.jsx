
import React from 'react';
import { Plus, Edit, Trash2, Video } from 'lucide-react';
import { NavLink } from 'react-router';

const adminOptions = [
  {
    id: 'create',
    title: 'Create Problem',
    description: 'Add a new coding problem to the platform',
    icon: Plus,
    tone: 'green',
    command: 'create_problem()',
    route: '/admin/create'
  },
  {
    id: 'update',
    title: 'Update Problem',
    description: 'Edit existing problems and their details',
    icon: Edit,
    tone: 'amber',
    command: 'update_problem()',
    route: '/admin/update'
  },
  {
    id: 'delete',
    title: 'Delete Problem',
    description: 'Remove problems from the Algo Coding Platform',
    icon: Trash2,
    tone: 'danger',
    command: 'delete_problem()',
    route: '/admin/delete'
  },
  {
    id: 'video',
    title: 'Video Problem',
    description: 'Upload and delete editorial videos from platform',
    icon: Video,
    tone: 'blue',
    command: 'manage_video()',
    route: '/admin/video'
  }
];

function Admin() {
  return (
    <div className="algo-admin">
      <style>{`
        .algo-admin {
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
          --danger-dim: #ff6b6b22;
          --green: #5ce6a6;
          --green-dim: #5ce6a622;

          min-height: 100vh;
          width: 100%;
          background: radial-gradient(circle at 50% 0%, #16203a 0%, var(--void) 55%);
          font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
          color: var(--text-primary);
          position: relative;
          overflow: hidden;
          padding: 3.5rem 1.5rem 4rem;
        }

        .algo-admin__glyphs {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .algo-admin__glyph {
          position: absolute;
          color: var(--border);
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 1.5rem;
          opacity: 0.3;
          animation: algo-drift linear infinite;
          user-select: none;
        }

        @keyframes algo-drift {
          from { transform: translateY(0) rotate(0deg); }
          to { transform: translateY(-36px) rotate(5deg); }
        }

        @keyframes algo-fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes algo-blink {
          0%, 45% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }

        @keyframes algo-pulse-ring {
          0% { box-shadow: 0 0 0 0 var(--ring-color, var(--accent-dim)); }
          70% { box-shadow: 0 0 0 12px transparent; }
          100% { box-shadow: 0 0 0 0 transparent; }
        }

        @media (prefers-reduced-motion: reduce) {
          .algo-admin * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; }
        }

        .algo-admin__inner {
          position: relative;
          z-index: 1;
          max-width: 72rem;
          margin: 0 auto;
        }

        .algo-admin__header {
          text-align: center;
          margin-bottom: 3.5rem;
          animation: algo-fade-up 0.5s ease-out both;
        }

        .algo-admin__eyebrow {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 0.8rem;
          color: var(--accent);
          display: inline-flex;
          align-items: center;
          margin-bottom: 0.75rem;
        }

        .algo-admin__cursor {
          display: inline-block;
          width: 0.5em;
          background: var(--accent);
          margin-left: 2px;
          animation: algo-blink 1s step-start infinite;
        }

        .algo-admin__title {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 2.1rem;
          font-weight: 700;
          margin: 0 0 0.6rem;
        }

        .algo-admin__title span { color: var(--accent); }

        .algo-admin__subtitle {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin: 0;
        }

        .algo-admin__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
          gap: 1.5rem;
        }

        .algo-option {
          --tone-color: var(--accent);
          --tone-dim: var(--accent-dim);
          position: relative;
          background: linear-gradient(180deg, var(--surface) 0%, var(--surface-2) 100%);
          border: 1px solid var(--border);
          border-radius: 1rem;
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          animation: algo-fade-up 0.5s ease-out both;
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.25s ease;
        }

        .algo-option[data-tone="green"] { --tone-color: var(--green); --tone-dim: var(--green-dim); }
        .algo-option[data-tone="amber"] { --tone-color: var(--accent); --tone-dim: var(--accent-dim); }
        .algo-option[data-tone="danger"] { --tone-color: var(--danger); --tone-dim: var(--danger-dim); }
        .algo-option[data-tone="blue"] { --tone-color: var(--secondary); --tone-dim: var(--secondary-dim); }

        .algo-option:hover {
          transform: translateY(-6px);
          border-color: var(--tone-color);
          box-shadow: 0 20px 40px -20px var(--tone-dim), 0 0 0 1px var(--tone-dim);
        }

        .algo-option__icon {
          width: 3.75rem;
          height: 3.75rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--tone-dim);
          color: var(--tone-color);
          margin-bottom: 1.25rem;
          animation: algo-pulse-ring 2.6s ease-out infinite;
          animation-delay: inherit;
          --ring-color: var(--tone-dim);
          transition: transform 0.2s ease;
        }

        .algo-option:hover .algo-option__icon {
          transform: scale(1.08) rotate(-4deg);
        }

        .algo-option__title {
          font-size: 1.1rem;
          font-weight: 700;
          margin: 0 0 0.5rem;
          color: var(--text-primary);
        }

        .algo-option__desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin: 0 0 1.5rem;
          line-height: 1.5;
        }

        .algo-option__cta {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--tone-color);
          background: var(--tone-dim);
          border: 1px solid var(--tone-color);
          border-radius: 0.5rem;
          padding: 0.55rem 1.1rem;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          transition: background 0.15s ease, transform 0.12s ease;
        }

        .algo-option__cta:hover {
          background: var(--tone-color);
          color: #0a0e14;
          transform: translateY(-1px);
        }

        .algo-option__cta::after {
          content: '→';
          transition: transform 0.15s ease;
        }

        .algo-option__cta:hover::after {
          transform: translateX(3px);
        }
      `}</style>

      <div className="algo-admin__glyphs" aria-hidden="true">
        {[
          { t: '{ }', top: '8%', left: '6%', size: '1.6rem', dur: '16s', delay: '0s' },
          { t: '[ ]', top: '75%', left: '92%', size: '1.4rem', dur: '18s', delay: '1.5s' },
          { t: '</>', top: '15%', left: '90%', size: '1.3rem', dur: '20s', delay: '0.8s' },
          { t: '01', top: '85%', left: '10%', size: '1.1rem', dur: '17s', delay: '2.2s' },
        ].map((g, idx) => (
          <span
            key={idx}
            className="algo-admin__glyph"
            style={{ top: g.top, left: g.left, fontSize: g.size, animationDuration: g.dur, animationDelay: g.delay }}
          >
            {g.t}
          </span>
        ))}
      </div>

      <div className="algo-admin__inner">
        <div className="algo-admin__header">
          <div className="algo-admin__eyebrow">
            &gt; sudo --access=admin
            <span className="algo-admin__cursor">&nbsp;</span>
          </div>
          <h1 className="algo-admin__title">
            Admin<span>.</span>Panel
          </h1>
          <p className="algo-admin__subtitle">Manage coding problems on your platform.</p>
        </div>

        <div className="algo-admin__grid">
          {adminOptions.map((option, idx) => {
            const IconComponent = option.icon;
            return (
              <div
                key={option.id}
                className="algo-option"
                data-tone={option.tone}
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                <div className="algo-option__icon" style={{ animationDelay: `${idx * 0.3}s` }}>
                  <IconComponent size={26} strokeWidth={2.25} />
                </div>
                <h2 className="algo-option__title">{option.title}</h2>
                <p className="algo-option__desc">{option.description}</p>
                <NavLink to={option.route} className="algo-option__cta">
                  {option.command}
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Admin;
