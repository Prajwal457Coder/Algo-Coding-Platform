
import { useState, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, NavLink } from 'react-router';
import { registerUser } from '../authSlice';
import { clearError } from '../authSlice';



const signupSchema = z
  .object({
    firstName: z
      .string()
      .min(1, "Please enter your first name.")
      .min(3, "Minimum character should be 3"),

    emailId: z
      .string()
      .min(1, "Please enter your email.")
      .email("Invalid Email"),

    password: z
      .string()
      .min(1, "Please enter your password.")
      .min(8, "Password is too weak"),

    confirmPassword: z
      .string()
      .min(1, "Please confirm your password."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// Mock "complexity" rating for the password — a small joke for a DSA platform's users.
function ratePassword(pw = '') {
  if (!pw) return { score: 0, label: 'O(1)', tone: 'empty', hint: 'Start typing…' };
  let points = 0;
  if (pw.length >= 8) points++;
  if (pw.length >= 12) points++;
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) points++;
  if (/[0-9]/.test(pw)) points++;
  if (/[^A-Za-z0-9]/.test(pw)) points++;

  if (points <= 1) return { score: 1, label: 'O(n²)', tone: 'weak', hint: 'Brute force — add length & symbols' };
  if (points === 2) return { score: 2, label: 'O(n log n)', tone: 'fair', hint: 'Getting better — mix in numbers' };
  if (points === 3 || points === 4) return { score: 3, label: 'O(n)', tone: 'good', hint: 'Solid — one more trick and it is optimal' };
  return { score: 4, label: 'O(log n)', tone: 'strong', hint: 'Optimal solution' };
}

const TERMINAL_LINE = '> init --new-account --platform=algo';

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [typedLine, setTypedLine] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

 
  //const { isAuthenticated, loading } = useSelector((state) => state.auth);
// 1. pull error out of state
const { isAuthenticated, loading, error } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const passwordValue = watch('password', '');
  const strength = useMemo(() => ratePassword(passwordValue), [passwordValue]);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  // One-time typewriter effect for the terminal eyebrow line.
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      setTypedLine(TERMINAL_LINE);
      return;
    }

    let i = 0;
    const id = setInterval(() => {
      i++;
      setTypedLine(TERMINAL_LINE.slice(0, i));
      if (i >= TERMINAL_LINE.length) clearInterval(id);
    }, 28);
    return () => clearInterval(id);
  }, []);

  const onSubmit = (data) => {
    const { confirmPassword, ...userData } = data;
    dispatch(registerUser(userData));
  };

//   const onSubmit = (data) => {
//   dispatch(clearError());
//   const { confirmPassword, ...userData } = data;
//   dispatch(registerUser(userData));
// };
useEffect(() => {
  dispatch(clearError());
}, [dispatch]);

  return (
    <div className="algo-signup">
      <style>{`
        .algo-signup {
          --void: #0a0e14;
          --surface: #121826;
          --surface-2: #1a2233;
          --border: #232d40;
          --border-focus: #ffb86b;
          --text-primary: #e8edf4;
          --text-muted: #7a8699;
          --accent: #ffb86b;
          --accent-dim: #ffb86b33;
          --secondary: #6c8eef;
          --danger: #ff6b6b;
          --amber: #ffb86b;
          --blue: #6c8eef;
          --green: #5ce6a6;

          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at 20% 20%, #101828 0%, var(--void) 55%);
          font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
          position: relative;
          overflow: hidden;
          padding: 2rem 1rem;
        }

        .algo-signup__glyphs {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .algo-signup__glyph {
          position: absolute;
          color: var(--border);
          font-family: 'JetBrains Mono', ui-monospace, 'Courier New', monospace;
          font-size: 1.4rem;
          opacity: 0.35;
          animation: algo-drift linear infinite;
          user-select: none;
        }

        @keyframes algo-drift {
          from { transform: translateY(0) rotate(0deg); }
          to { transform: translateY(-40px) rotate(6deg); }
        }

        @keyframes algo-fade-up {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes algo-blink {
          0%, 45% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }

        @keyframes algo-pulse-ring {
          0% { box-shadow: 0 0 0 0 var(--accent-dim); }
          70% { box-shadow: 0 0 0 10px transparent; }
          100% { box-shadow: 0 0 0 0 transparent; }
        }

        @media (prefers-reduced-motion: reduce) {
          .algo-signup__glyph { animation: none; }
          .algo-signup__card { animation: none !important; }
          .algo-signup__cursor { animation: none; }
        }

        .algo-signup__card {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 26rem;
          background: linear-gradient(180deg, var(--surface) 0%, var(--surface-2) 100%);
          border: 1px solid var(--border);
          border-radius: 1rem;
          padding: 2.25rem 2rem 1.75rem;
          box-shadow: 0 30px 60px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.02) inset;
          backdrop-filter: blur(6px);
          animation: algo-fade-up 0.6s ease-out both;
        }

        .algo-signup__eyebrow {
          font-family: 'JetBrains Mono', ui-monospace, 'Courier New', monospace;
          font-size: 0.8rem;
          color: var(--accent);
          letter-spacing: 0.02em;
          margin-bottom: 0.9rem;
          min-height: 1.2em;
          white-space: pre;
        }

        .algo-signup__cursor {
          display: inline-block;
          width: 0.55em;
          background: var(--accent);
          margin-left: 1px;
          animation: algo-blink 1s step-start infinite;
        }

        .algo-signup__title {
          font-family: 'JetBrains Mono', ui-monospace, 'Courier New', monospace;
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.01em;
          margin: 0 0 0.35rem;
        }

        .algo-signup__title span {
          color: var(--accent);
        }

        .algo-signup__subtitle {
          font-size: 0.875rem;
          color: var(--text-muted);
          margin: 0 0 1.75rem;
        }

        .algo-field {
          margin-top: 1.1rem;
        }

        .algo-field label {
          display: block;
          font-size: 0.75rem;
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          color: var(--text-muted);
          margin-bottom: 0.4rem;
          letter-spacing: 0.03em;
        }

        .algo-field__input-wrap {
          position: relative;
        }

        .algo-field input {
          width: 100%;
          background: #0d1320;
          border: 1px solid var(--border);
          border-radius: 0.5rem;
          padding: 0.65rem 0.85rem;
          font-size: 0.95rem;
          color: var(--text-primary);
          outline: none;
          transition: border-color 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
        }

        .algo-field input::placeholder {
          color: #4a5568;
        }

        .algo-field input:focus {
          border-color: var(--border-focus);
          background: #0f1523;
          box-shadow: 0 0 0 3px var(--accent-dim);
        }

        .algo-field input.algo-field--error {
          border-color: var(--danger);
        }

        .algo-field input.algo-field--error:focus {
          box-shadow: 0 0 0 3px rgba(255,107,107,0.2);
        }

        .algo-field__error {
          display: block;
          font-size: 0.78rem;
          color: var(--danger);
          margin-top: 0.35rem;
          font-family: 'JetBrains Mono', ui-monospace, monospace;
        }

        .algo-field__toggle {
          position: absolute;
          top: 50%;
          right: 0.7rem;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          display: flex;
          padding: 0.15rem;
          transition: color 0.15s ease;
        }

        .algo-field__toggle:hover {
          color: var(--text-primary);
        }

        .algo-strength {
          margin-top: 0.55rem;
        }

        .algo-strength__track {
          display: flex;
          gap: 4px;
          height: 4px;
          margin-bottom: 0.4rem;
        }

        .algo-strength__seg {
          flex: 1;
          border-radius: 2px;
          background: var(--border);
          transition: background 0.25s ease;
        }

        .algo-strength__seg.is-filled--weak { background: var(--danger); }
        .algo-strength__seg.is-filled--fair { background: var(--amber); }
        .algo-strength__seg.is-filled--good { background: var(--blue); }
        .algo-strength__seg.is-filled--strong { background: var(--green); }

        .algo-strength__row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 0.72rem;
        }

        .algo-strength__label {
          font-weight: 700;
        }
        .algo-strength__label--weak { color: var(--danger); }
        .algo-strength__label--fair { color: var(--amber); }
        .algo-strength__label--good { color: var(--blue); }
        .algo-strength__label--strong { color: var(--green); }
        .algo-strength__label--empty { color: var(--text-muted); }

        .algo-strength__hint {
          color: var(--text-muted);
        }

        .algo-submit {
          width: 100%;
          margin-top: 1.6rem;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          border: none;
          background: var(--accent);
          color: #1a1206;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: transform 0.12s ease, box-shadow 0.2s ease, filter 0.15s ease;
          animation: algo-pulse-ring 2.4s ease-out infinite;
        }

        .algo-submit:hover:not(:disabled) {
          filter: brightness(1.08);
          transform: translateY(-1px);
        }

        .algo-submit:active:not(:disabled) {
          transform: translateY(0);
        }

        .algo-submit:disabled {
          opacity: 0.75;
          cursor: not-allowed;
          animation: none;
        }

        .algo-submit__dots span {
          display: inline-block;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #1a1206;
          margin-left: 3px;
          animation: algo-blink 1.1s ease-in-out infinite;
        }
        .algo-submit__dots span:nth-child(2) { animation-delay: 0.15s; }
        .algo-submit__dots span:nth-child(3) { animation-delay: 0.3s; }

        .algo-signup__footer {
          text-align: center;
          margin-top: 1.5rem;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .algo-signup__footer a {
          color: var(--secondary);
          text-decoration: none;
          font-weight: 600;
        }

        .algo-signup__footer a:hover {
          text-decoration: underline;
        }

        .algo-signup__error-banner {
  display: block;
  margin-top: 0.6rem;
  font-size: 0.8rem;
  color: var(--danger);
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  text-align: center;
}

      `}</style>

      {/* Ambient drifting glyphs — purely decorative, low-opacity */}
      <div className="algo-signup__glyphs" aria-hidden="true">
        {[
          { t: '{ }', top: '8%', left: '10%', size: '1.6rem', dur: '14s', delay: '0s' },
          { t: 'O(n)', top: '70%', left: '6%', size: '1.1rem', dur: '18s', delay: '2s' },
          { t: '[ ]', top: '20%', left: '85%', size: '1.4rem', dur: '16s', delay: '1s' },
          { t: '01', top: '82%', left: '88%', size: '1.2rem', dur: '20s', delay: '3s' },
          { t: '( )', top: '45%', left: '92%', size: '1.3rem', dur: '15s', delay: '0.5s' },
          { t: 'log n', top: '55%', left: '3%', size: '1rem', dur: '19s', delay: '2.5s' },
        ].map((g, idx) => (
          <span
            key={idx}
            className="algo-signup__glyph"
            style={{
              top: g.top,
              left: g.left,
              fontSize: g.size,
              animationDuration: g.dur,
              animationDelay: g.delay,
            }}
          >
            {g.t}
          </span>
        ))}
      </div>

      <div className="algo-signup__card">
        <div className="algo-signup__eyebrow">
          {typedLine}
          <span className="algo-signup__cursor">&nbsp;</span>
        </div>

        <h2 className="algo-signup__title">
          Algo<span>Coding</span> Platform
        </h2>
        <p className="algo-signup__subtitle">
          Create an account and start solving.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* First Name */}
          <div className="algo-field">
            <label htmlFor="firstName">first_name</label>
            <input
              id="firstName"
              type="text"
              placeholder="John"
              className={errors.firstName ? 'algo-field--error' : ''}
              {...register('firstName')}
            />
            {errors.firstName && (
              <span className="algo-field__error"> {errors.firstName.message}</span>
            )}
          </div>

          {/* Email */}
          <div className="algo-field">
            <label htmlFor="emailId">email</label>
            <input
              id="emailId"
              type="email"
              placeholder="john@example.com"
              className={errors.emailId ? 'algo-field--error' : ''}
              {...register('emailId')}
            />
            {errors.emailId && (
              <span className="algo-field__error"> {errors.emailId.message}</span>
            )}
          </div>

          {/* Password */}
          <div className="algo-field">
            <label htmlFor="password">password</label>
            <div className="algo-field__input-wrap">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className={errors.password ? 'algo-field--error' : ''}
                {...register('password')}
              />
              <button
                type="button"
                className="algo-field__toggle"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>

            <div className="algo-strength" aria-live="polite">
              <div className="algo-strength__track">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`algo-strength__seg ${
                      i < strength.score ? `is-filled--${strength.tone}` : ''
                    }`}
                  />
                ))}
              </div>
              <div className="algo-strength__row">
                <span className={`algo-strength__label algo-strength__label--${strength.tone}`}>
                  {strength.label}
                </span>
                <span className="algo-strength__hint">{strength.hint}</span>
              </div>
            </div>

            {errors.password && (
              <span className="algo-field__error"> {errors.password.message}</span>
            )}
          </div>

          {/* Confirm Password */}
          <div className="algo-field">
            <label htmlFor="confirmPassword">confirm_password</label>
            <div className="algo-field__input-wrap">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className={errors.confirmPassword ? 'algo-field--error' : ''}
                {...register('confirmPassword')}
              />
              <button
                type="button"
                className="algo-field__toggle"
                onClick={() => setShowConfirmPassword((v) => !v)}
                aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
              >
                {showConfirmPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <span className="algo-field__error"> {errors.confirmPassword.message}</span>
            )}
          </div>

          {/* Submit */}
          {error && <span className="algo-signup__error-banner">{error}</span>}
          <button type="submit" className="algo-submit" disabled={loading}>
            {loading ? (
              <>
                compiling
                <span className="algo-submit__dots">
                  <span></span><span></span><span></span>
                </span>
              </>
            ) : (
              'create_account'
            )}
          </button>
        </form>

        <div className="algo-signup__footer">
          Already have an account?{' '}
          <NavLink to="/login">Login</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Signup;
