
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { z } from 'zod';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate, NavLink } from 'react-router';
// import { loginUser } from "../authSlice";
// import { useEffect, useState } from 'react';
// import axiosClient from '../utils/axiosClient'; // adjust path if different

// // const loginSchema = z.object({
// //   emailId: z.string().email("Invalid Email"),
// //   password: z.string().min(8, "Password is too weak")
// // });

// const loginSchema = z.object({
//   emailId: z
//     .string()
//     .min(1, "Please enter your email.")
//     .email("Invalid Email"),

//   password: z
//     .string()
//     .min(1, "Please enter your password.")
//     //.min(8, "Password is too weak"),
// });

// // Step 1: Email
// const emailSchema = z.object({
//   emailId: z.string().email("Invalid Email"),
// });

// // Step 2: OTP
// const otpSchema = z.object({
//   otp: z.string().min(4, "Enter a valid OTP"),
// });

// // Step 3: New Password
// const resetPasswordSchema = z
//   .object({
//     newPassword: z.string().min(8, "Password is too weak"),
//     confirmPassword: z.string().min(1, "Password is too weak"),
//   })
//   .refine((data) => data.newPassword === data.confirmPassword, {
//     message: "Passwords do not match",
//     path: ["confirmPassword"],
//   });

// const STEP_ORDER = ['email', 'otp', 'reset'];
// const TERMINAL_LINE = '> auth --login --platform=algo';

// function Login() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [typedLine, setTypedLine] = useState('');
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { isAuthenticated, loading, error } = useSelector((state) => state.auth);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({ resolver: zodResolver(loginSchema) });

//   // ---- Forgot Password flow state ----
//   // step: null (closed) | 'email' | 'otp' | 'reset'
//   const [fpStep, setFpStep] = useState(null);
//   const [fpEmail, setFpEmail] = useState("");
//   const [fpOtp, setFpOtp] = useState("");
//   const [fpLoading, setFpLoading] = useState(false);
//   const [fpError, setFpError] = useState("");
//   const [fpSuccess, setFpSuccess] = useState("");

//   // ---- Show/hide toggles for new password fields ----
//   const [showNewPassword, setShowNewPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const {
//     register: registerEmail,
//     handleSubmit: handleSubmitEmail,
//     reset: resetEmailForm,
//     formState: { errors: emailErrors },
//   } = useForm({ resolver: zodResolver(emailSchema) });

//   const {
//     register: registerOtp,
//     handleSubmit: handleSubmitOtp,
//     reset: resetOtpForm,
//     formState: { errors: otpErrors },
//   } = useForm({ resolver: zodResolver(otpSchema) });

//   const {
//     register: registerReset,
//     handleSubmit: handleSubmitReset,
//     reset: resetPasswordForm,
//     formState: { errors: resetErrors },
//   } = useForm({ resolver: zodResolver(resetPasswordSchema) });

//   useEffect(() => {
//     if (isAuthenticated) {
//       navigate('/');
//     }
//   }, [isAuthenticated, navigate]);

//   // One-time typewriter effect for the terminal eyebrow line.
//   useEffect(() => {
//     const prefersReducedMotion = window.matchMedia?.(
//       '(prefers-reduced-motion: reduce)'
//     ).matches;

//     if (prefersReducedMotion) {
//       setTypedLine(TERMINAL_LINE);
//       return;
//     }

//     let i = 0;
//     const id = setInterval(() => {
//       i++;
//       setTypedLine(TERMINAL_LINE.slice(0, i));
//       if (i >= TERMINAL_LINE.length) clearInterval(id);
//     }, 28);
//     return () => clearInterval(id);
//   }, []);

//   const onSubmit = (data) => {
//     dispatch(loginUser(data));
//   };

//   // ---- Step 1: Send OTP ----
//   const onSendOtp = async (data) => {
//     setFpError("");
//     setFpLoading(true);
//     try {
//       await axiosClient.post('/user/sendOtp', { emailId: data.emailId });
//       setFpEmail(data.emailId);
//       setFpStep('otp');
//     } catch (err) {
//       setFpError(err?.response?.data?.message || "Failed to send OTP. Try again.");
//     } finally {
//       setFpLoading(false);
//     }
//   };

//   // ---- Step 2: Verify OTP ----
//   const onVerifyOtp = async (data) => {
//     setFpError("");
//     setFpLoading(true);
//     try {
//       await axiosClient.post('/user/verifyOtp', {
//         emailId: fpEmail,
//         otp: data.otp,
//       });
//       setFpOtp(data.otp);
//       setFpStep('reset');
//     } catch (err) {
//       setFpError(err?.response?.data?.msg || "Invalid or expired OTP.");
//     } finally {
//       setFpLoading(false);
//     }
//   };

//   // ---- Step 3: Change Password ----
//   const onChangePassword = async (data) => {
//     setFpError("");
//     setFpLoading(true);
//     try {
//       await axiosClient.post('/user/changePassword', {
//         emailId: fpEmail,
//         otp: fpOtp,
//         newPassword: data.newPassword,
//       });
//       setFpSuccess("Password reset successful. You can log in now.");
//       setTimeout(() => {
//         closeForgotPasswordModal();
//       }, 1500);
//     } catch (err) {
//       setFpError(err?.response?.data?.msg || "Failed to reset password.");
//     } finally {
//       setFpLoading(false);
//     }
//   };

//   const goBack = () => {
//     setFpError("");
//     if (fpStep === 'otp') setFpStep('email');
//     else if (fpStep === 'reset') setFpStep('otp');
//   };

//   const closeForgotPasswordModal = () => {
//     setFpStep(null);
//     setFpEmail("");
//     setFpOtp("");
//     setFpError("");
//     setFpSuccess("");
//     setShowNewPassword(false);
//     setShowConfirmPassword(false);
//     resetEmailForm();
//     resetOtpForm();
//     resetPasswordForm();
//   };

//   const currentStepIndex = fpStep ? STEP_ORDER.indexOf(fpStep) : -1;

//   return (
//     <div className="algo-auth">
//       <style>{`
//         .algo-auth {
//           --void: #0a0e14;
//           --surface: #121826;
//           --surface-2: #1a2233;
//           --border: #232d40;
//           --border-focus: #ffb86b;
//           --text-primary: #e8edf4;
//           --text-muted: #7a8699;
//           --accent: #ffb86b;
//           --accent-dim: #ffb86b33;
//           --secondary: #6c8eef;
//           --danger: #ff6b6b;
//           --danger-dim: #ff6b6b22;
//           --green: #5ce6a6;
//           --green-dim: #5ce6a622;

//           min-height: 100vh;
//           width: 100%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background: radial-gradient(circle at 80% 15%, #101828 0%, var(--void) 55%);
//           font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
//           position: relative;
//           overflow: hidden;
//           padding: 2rem 1rem;
//         }

//         .algo-auth__glyphs {
//           position: absolute;
//           inset: 0;
//           overflow: hidden;
//           pointer-events: none;
//         }

//         .algo-auth__glyph {
//           position: absolute;
//           color: var(--border);
//           font-family: 'JetBrains Mono', ui-monospace, 'Courier New', monospace;
//           font-size: 1.4rem;
//           opacity: 0.35;
//           animation: algo-drift linear infinite;
//           user-select: none;
//         }

//         @keyframes algo-drift {
//           from { transform: translateY(0) rotate(0deg); }
//           to { transform: translateY(-40px) rotate(-6deg); }
//         }

//         @keyframes algo-fade-up {
//           from { opacity: 0; transform: translateY(18px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         @keyframes algo-fade-in {
//           from { opacity: 0; transform: translateY(8px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         @keyframes algo-blink {
//           0%, 45% { opacity: 1; }
//           50%, 100% { opacity: 0; }
//         }

//         @keyframes algo-pulse-ring {
//           0% { box-shadow: 0 0 0 0 var(--accent-dim); }
//           70% { box-shadow: 0 0 0 10px transparent; }
//           100% { box-shadow: 0 0 0 0 transparent; }
//         }

//         @keyframes algo-backdrop-in {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }

//         @keyframes algo-modal-in {
//           from { opacity: 0; transform: translateY(14px) scale(0.98); }
//           to { opacity: 1; transform: translateY(0) scale(1); }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .algo-auth__glyph { animation: none; }
//           .algo-auth__card, .algo-modal__backdrop, .algo-modal__box, .algo-modal__step {
//             animation: none !important;
//           }
//           .algo-auth__cursor { animation: none; }
//         }

//         .algo-auth__card {
//           position: relative;
//           z-index: 1;
//           width: 100%;
//           max-width: 26rem;
//           background: linear-gradient(180deg, var(--surface) 0%, var(--surface-2) 100%);
//           border: 1px solid var(--border);
//           border-radius: 1rem;
//           padding: 2.25rem 2rem 1.75rem;
//           box-shadow: 0 30px 60px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.02) inset;
//           backdrop-filter: blur(6px);
//           animation: algo-fade-up 0.6s ease-out both;
//         }

//         .algo-auth__eyebrow {
//           font-family: 'JetBrains Mono', ui-monospace, 'Courier New', monospace;
//           font-size: 0.8rem;
//           color: var(--accent);
//           letter-spacing: 0.02em;
//           margin-bottom: 0.9rem;
//           min-height: 1.2em;
//           white-space: pre;
//         }

//         .algo-auth__cursor {
//           display: inline-block;
//           width: 0.55em;
//           background: var(--accent);
//           margin-left: 1px;
//           animation: algo-blink 1s step-start infinite;
//         }

//         .algo-auth__title {
//           font-family: 'JetBrains Mono', ui-monospace, 'Courier New', monospace;
//           font-size: 1.6rem;
//           font-weight: 700;
//           color: var(--text-primary);
//           letter-spacing: -0.01em;
//           margin: 0 0 0.35rem;
//         }

//         .algo-auth__title span {
//           color: var(--accent);
//         }

//         .algo-auth__subtitle {
//           font-size: 0.875rem;
//           color: var(--text-muted);
//           margin: 0 0 1.75rem;
//         }

//         .algo-field {
//           margin-top: 1.1rem;
//         }

//         .algo-field label {
//           display: block;
//           font-size: 0.75rem;
//           font-family: 'JetBrains Mono', ui-monospace, monospace;
//           color: var(--text-muted);
//           margin-bottom: 0.4rem;
//           letter-spacing: 0.03em;
//         }

//         .algo-field__input-wrap {
//           position: relative;
//         }

//         .algo-field input {
//           width: 100%;
//           background: #0d1320;
//           border: 1px solid var(--border);
//           border-radius: 0.5rem;
//           padding: 0.65rem 0.85rem;
//           font-size: 0.95rem;
//           color: var(--text-primary);
//           outline: none;
//           transition: border-color 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
//         }

//         .algo-field input::placeholder {
//           color: #4a5568;
//         }

//         .algo-field input:focus {
//           border-color: var(--border-focus);
//           background: #0f1523;
//           box-shadow: 0 0 0 3px var(--accent-dim);
//         }

//         .algo-field input.algo-field--error {
//           border-color: var(--danger);
//         }

//         .algo-field input.algo-field--error:focus {
//           box-shadow: 0 0 0 3px rgba(255,107,107,0.2);
//         }

//         .algo-field__error {
//           display: block;
//           font-size: 0.78rem;
//           color: var(--danger);
//           margin-top: 0.35rem;
//           font-family: 'JetBrains Mono', ui-monospace, monospace;
//         }

//         .algo-field__toggle {
//           position: absolute;
//           top: 50%;
//           right: 0.7rem;
//           transform: translateY(-50%);
//           background: none;
//           border: none;
//           color: var(--text-muted);
//           cursor: pointer;
//           display: flex;
//           padding: 0.15rem;
//           transition: color 0.15s ease;
//         }

//         .algo-field__toggle:hover {
//           color: var(--text-primary);
//         }

//         .algo-forgot {
//           text-align: right;
//           margin-top: 0.5rem;
//         }

//         .algo-forgot button {
//           background: none;
//           border: none;
//           font-size: 0.8rem;
//           color: var(--text-muted);
//           cursor: pointer;
//           font-family: 'JetBrains Mono', ui-monospace, monospace;
//           transition: color 0.15s ease;
//         }

//         .algo-forgot button:hover {
//           color: var(--accent);
//         }

//         .algo-submit {
//           width: 100%;
//           margin-top: 1.6rem;
//           padding: 0.75rem 1rem;
//           border-radius: 0.5rem;
//           border: none;
//           background: var(--accent);
//           color: #1a1206;
//           font-weight: 700;
//           font-size: 0.95rem;
//           cursor: pointer;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 0.5rem;
//           transition: transform 0.12s ease, box-shadow 0.2s ease, filter 0.15s ease;
//           animation: algo-pulse-ring 2.4s ease-out infinite;
//         }

//         .algo-submit:hover:not(:disabled) {
//           filter: brightness(1.08);
//           transform: translateY(-1px);
//         }

//         .algo-submit:active:not(:disabled) {
//           transform: translateY(0);
//         }

//         .algo-submit:disabled {
//           opacity: 0.75;
//           cursor: not-allowed;
//           animation: none;
//         }

//         .algo-submit--ghost {
//           background: var(--secondary);
//           color: #0c1526;
//           animation: none;
//         }

//         .algo-submit__dots span {
//           display: inline-block;
//           width: 4px;
//           height: 4px;
//           border-radius: 50%;
//           background: currentColor;
//           margin-left: 3px;
//           animation: algo-blink 1.1s ease-in-out infinite;
//         }
//         .algo-submit__dots span:nth-child(2) { animation-delay: 0.15s; }
//         .algo-submit__dots span:nth-child(3) { animation-delay: 0.3s; }

//         .algo-auth__footer {
//           text-align: center;
//           margin-top: 1.5rem;
//           font-size: 0.85rem;
//           color: var(--text-muted);
//         }

//         .algo-auth__footer a {
//           color: var(--secondary);
//           text-decoration: none;
//           font-weight: 600;
//         }

//         .algo-auth__footer a:hover {
//           text-decoration: underline;
//         }

//         .algo-auth__error-banner {
//           margin-top: 0.6rem;
//           font-size: 0.8rem;
//           color: var(--danger);
//           font-family: 'JetBrains Mono', ui-monospace, monospace;
//         }

//         /* ---- Modal ---- */
//         .algo-modal__backdrop {
//           position: fixed;
//           inset: 0;
//           background: rgba(6, 9, 15, 0.72);
//           backdrop-filter: blur(3px);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           z-index: 50;
//           padding: 1rem;
//           animation: algo-backdrop-in 0.2s ease-out both;
//         }

//         .algo-modal__box {
//           position: relative;
//           width: 100%;
//           max-width: 26rem;
//           background: linear-gradient(180deg, var(--surface) 0%, var(--surface-2) 100%);
//           border: 1px solid var(--border);
//           border-radius: 1rem;
//           padding: 1.75rem 1.75rem 1.5rem;
//           box-shadow: 0 30px 60px -20px rgba(0,0,0,0.7);
//           animation: algo-modal-in 0.28s cubic-bezier(0.16, 1, 0.3, 1) both;
//         }

//         .algo-modal__header {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           margin-bottom: 0.6rem;
//         }

//         .algo-modal__title-row {
//           display: flex;
//           align-items: center;
//           gap: 0.5rem;
//         }

//         .algo-modal__title {
//           font-family: 'JetBrains Mono', ui-monospace, monospace;
//           font-weight: 700;
//           font-size: 1.05rem;
//           color: var(--text-primary);
//         }

//         .algo-modal__icon-btn {
//           background: none;
//           border: 1px solid var(--border);
//           border-radius: 0.4rem;
//           color: var(--text-muted);
//           width: 1.9rem;
//           height: 1.9rem;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           font-size: 0.9rem;
//           transition: color 0.15s ease, border-color 0.15s ease;
//         }

//         .algo-modal__icon-btn:hover {
//           color: var(--text-primary);
//           border-color: var(--accent);
//         }

//         .algo-modal__steps {
//           display: flex;
//           gap: 6px;
//           margin-bottom: 1.4rem;
//         }

//         .algo-modal__step-dot {
//           flex: 1;
//           height: 3px;
//           border-radius: 2px;
//           background: var(--border);
//           transition: background 0.25s ease;
//         }

//         .algo-modal__step-dot.is-done {
//           background: var(--green);
//         }

//         .algo-modal__step-dot.is-active {
//           background: var(--accent);
//         }

//         .algo-modal__step {
//           animation: algo-fade-in 0.25s ease-out both;
//         }

//         .algo-modal__hint {
//           font-size: 0.85rem;
//           color: var(--text-muted);
//           margin-bottom: 0.9rem;
//         }

//         .algo-modal__hint span {
//           color: var(--text-primary);
//           font-family: 'JetBrains Mono', ui-monospace, monospace;
//         }

//         .algo-alert {
//           border-radius: 0.5rem;
//           padding: 0.55rem 0.75rem;
//           font-size: 0.82rem;
//           margin-bottom: 1rem;
//           font-family: 'JetBrains Mono', ui-monospace, monospace;
//         }

//         .algo-alert--error {
//           background: var(--danger-dim);
//           border: 1px solid rgba(255,107,107,0.4);
//           color: #ffb3b3;
//         }

//         .algo-alert--success {
//           background: var(--green-dim);
//           border: 1px solid rgba(92,230,166,0.4);
//           color: #a9f2d2;
//         }

//         .algo-otp-input {
//           letter-spacing: 0.5em;
//           text-align: center;
//           font-family: 'JetBrains Mono', ui-monospace, monospace;
//           font-size: 1.1rem !important;
//         }

//         .algo-resend {
//           text-align: center;
//           margin-top: 0.8rem;
//         }

//         .algo-resend button {
//           background: none;
//           border: none;
//           font-size: 0.75rem;
//           color: var(--text-muted);
//           cursor: pointer;
//           font-family: 'JetBrains Mono', ui-monospace, monospace;
//         }

//         .algo-resend button:hover:not(:disabled) {
//           color: var(--accent);
//         }
//       `}</style>

//       {/* Ambient drifting glyphs — purely decorative, low-opacity */}
//       <div className="algo-auth__glyphs" aria-hidden="true">
//         {[
//           { t: '{ }', top: '10%', left: '85%', size: '1.6rem', dur: '15s', delay: '0s' },
//           { t: 'O(1)', top: '75%', left: '90%', size: '1.1rem', dur: '19s', delay: '1.5s' },
//           { t: '[ ]', top: '22%', left: '8%', size: '1.4rem', dur: '17s', delay: '0.8s' },
//           { t: '10', top: '85%', left: '5%', size: '1.2rem', dur: '21s', delay: '2.8s' },
//           { t: '( )', top: '48%', left: '4%', size: '1.3rem', dur: '16s', delay: '0.4s' },
//           { t: 'n²', top: '58%', left: '94%', size: '1rem', dur: '18s', delay: '2s' },
//         ].map((g, idx) => (
//           <span
//             key={idx}
//             className="algo-auth__glyph"
//             style={{
//               top: g.top,
//               left: g.left,
//               fontSize: g.size,
//               animationDuration: g.dur,
//               animationDelay: g.delay,
//             }}
//           >
//             {g.t}
//           </span>
//         ))}
//       </div>

//       <div className="algo-auth__card">
//         <div className="algo-auth__eyebrow">
//           {typedLine}
//           <span className="algo-auth__cursor">&nbsp;</span>
//         </div>

//         <h2 className="algo-auth__title">
//           Algo<span>Coding</span> Platform
//         </h2>
//         <p className="algo-auth__subtitle">Welcome back. Pick up where you left off.</p>

//         <form onSubmit={handleSubmit(onSubmit)} noValidate>
//           <div className="algo-field">
//             <label htmlFor="emailId">email</label>
//             <input
//               id="emailId"
//               type="email"
//               placeholder="john@example.com"
//               className={errors.emailId ? 'algo-field--error' : ''}
//               {...register('emailId')}
//             />
//             {errors.emailId && (
//               <span className="algo-field__error"> {errors.emailId.message}</span>
//             )}
//           </div>

//           <div className="algo-field">
//             <label htmlFor="password">password</label>
//             <div className="algo-field__input-wrap">
//               <input
//                 id="password"
//                 type={showPassword ? "text" : "password"}
//                 placeholder="••••••••"
//                 className={errors.password ? 'algo-field--error' : ''}
//                 {...register('password')}
//               />
//               <button
//                 type="button"
//                 className="algo-field__toggle"
//                 onClick={() => setShowPassword(!showPassword)}
//                 aria-label={showPassword ? "Hide password" : "Show password"}
//               >
//                 {showPassword ? (
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
//                   </svg>
//                 ) : (
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                   </svg>
//                 )}
//               </button>
//             </div>
//             {errors.password && (
//               <span className="algo-field__error"> {errors.password.message}</span>
//             )}
//             {error && <span className="algo-auth__error-banner"> {error}</span>}

//             <div className="algo-forgot">
//               <button type="button" onClick={() => setFpStep('email')}>
//                 forgot_password?
//               </button>
//             </div>
//           </div>

//           <button type="submit" className="algo-submit" disabled={loading}>
//             {loading ? (
//               <>
//                 verifying
//                 <span className="algo-submit__dots">
//                   <span></span><span></span><span></span>
//                 </span>
//               </>
//             ) : 'Login'}
//           </button>
//         </form>

//         <div className="algo-auth__footer">
//           Don't have an account?{' '}
//           <NavLink to="/signup">Sign Up</NavLink>
//         </div>
//       </div>

//       {/* ---- Forgot Password Modal (3 steps) ---- */}
//       {fpStep && (
//         <div className="algo-modal__backdrop" onClick={closeForgotPasswordModal}>
//           <div className="algo-modal__box" onClick={(e) => e.stopPropagation()}>
//             <div className="algo-modal__header">
//               <div className="algo-modal__title-row">
//                 {fpStep !== 'email' && !fpSuccess && (
//                   <button
//                     type="button"
//                     className="algo-modal__icon-btn"
//                     onClick={goBack}
//                     aria-label="Go back"
//                   >
//                     ←
//                   </button>
//                 )}
//                 <span className="algo-modal__title">reset_password()</span>
//               </div>
//               <button
//                 type="button"
//                 className="algo-modal__icon-btn"
//                 onClick={closeForgotPasswordModal}
//                 aria-label="Close"
//               >
//                 ✕
//               </button>
//             </div>

//             <div className="algo-modal__steps" aria-hidden="true">
//               {STEP_ORDER.map((s, idx) => (
//                 <div
//                   key={s}
//                   className={`algo-modal__step-dot ${
//                     idx < currentStepIndex || fpSuccess ? 'is-done' : idx === currentStepIndex ? 'is-active' : ''
//                   }`}
//                 />
//               ))}
//             </div>

//             {fpError && (
//               <div className="algo-alert algo-alert--error">{fpError}</div>
//             )}
//             {fpSuccess && (
//               <div className="algo-alert algo-alert--success">{fpSuccess}</div>
//             )}

//             {/* Step 1: Email */}
//             {fpStep === 'email' && !fpSuccess && (
//               <div className="algo-modal__step" key="step-email">
//                 <p className="algo-modal__hint">Step 1/3 — we'll send a one-time code to your inbox.</p>
//                 <form onSubmit={handleSubmitEmail(onSendOtp)} noValidate>
//                   <div className="algo-field" style={{ marginTop: 0 }}>
//                     <input
//                       type="text"
//                       placeholder="john@example.com"
//                       className={emailErrors.emailId ? 'algo-field--error' : ''}
//                       {...registerEmail('emailId')}
//                     />
//                     {emailErrors.emailId && (
//                       <span className="algo-field__error"> {emailErrors.emailId.message}</span>
//                     )}
//                   </div>
//                   <button type="submit" className="algo-submit" disabled={fpLoading}>
//                     {fpLoading ? (
//                       <>sending<span className="algo-submit__dots"><span></span><span></span><span></span></span></>
//                     ) : 'send_otp'}
//                   </button>
//                 </form>
//               </div>
//             )}

//             {/* Step 2: OTP */}
//             {fpStep === 'otp' && !fpSuccess && (
//               <div className="algo-modal__step" key="step-otp">
//                 <p className="algo-modal__hint">
//                   Step 2/3 — code sent to <span>{fpEmail}</span>
//                 </p>
//                 <form onSubmit={handleSubmitOtp(onVerifyOtp)} noValidate>
//                   <div className="algo-field" style={{ marginTop: 0 }}>
//                     <input
//                       type="text"
//                       placeholder="0 0 0 0 0 0"
//                       className={`algo-otp-input ${otpErrors.otp ? 'algo-field--error' : ''}`}
//                       {...registerOtp('otp')}
//                     />
//                     {otpErrors.otp && (
//                       <span className="algo-field__error"> {otpErrors.otp.message}</span>
//                     )}
//                   </div>
//                   <button type="submit" className="algo-submit" disabled={fpLoading}>
//                     {fpLoading ? (
//                       <>verifying<span className="algo-submit__dots"><span></span><span></span><span></span></span></>
//                     ) : 'verify_otp'}
//                   </button>
//                   <div className="algo-resend">
//                     <button
//                       type="button"
//                       onClick={handleSubmitEmail(onSendOtp)}
//                       disabled={fpLoading}
//                     >
//                       resend_otp
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             )}

//             {/* Step 3: New Password */}
//             {fpStep === 'reset' && (
//               <div className="algo-modal__step" key="step-reset">
//                 <p className="algo-modal__hint">Step 3/3 — choose a new password.</p>
//                 <form onSubmit={handleSubmitReset(onChangePassword)} noValidate>
//                   <div className="algo-field" style={{ marginTop: 0 }}>
//                     <label htmlFor="newPassword">new_password</label>
//                     <div className="algo-field__input-wrap">
//                       <input
//                         id="newPassword"
//                         type={showNewPassword ? "text" : "password"}
//                         placeholder="••••••••"
//                         className={resetErrors.newPassword ? 'algo-field--error' : ''}
//                         disabled={!!fpSuccess}
//                         {...registerReset('newPassword')}
//                       />
//                       <button
//                         type="button"
//                         className="algo-field__toggle"
//                         onClick={() => setShowNewPassword(!showNewPassword)}
//                         aria-label={showNewPassword ? "Hide password" : "Show password"}
//                       >
//                         {showNewPassword ? (
//                           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
//                           </svg>
//                         ) : (
//                           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                           </svg>
//                         )}
//                       </button>
//                     </div>
//                     {resetErrors.newPassword && (
//                       <span className="algo-field__error"> {resetErrors.newPassword.message}</span>
//                     )}
//                   </div>

//                   <div className="algo-field">
//                     <label htmlFor="confirmPassword">confirm_password</label>
//                     <div className="algo-field__input-wrap">
//                       <input
//                         id="confirmPassword"
//                         type={showConfirmPassword ? "text" : "password"}
//                         placeholder="••••••••"
//                         className={resetErrors.confirmPassword ? 'algo-field--error' : ''}
//                         disabled={!!fpSuccess}
//                         {...registerReset('confirmPassword')}
//                       />
//                       <button
//                         type="button"
//                         className="algo-field__toggle"
//                         onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                         aria-label={showConfirmPassword ? "Hide password" : "Show password"}
//                       >
//                         {showConfirmPassword ? (
//                           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
//                           </svg>
//                         ) : (
//                           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                           </svg>
//                         )}
//                       </button>
//                     </div>
//                     {resetErrors.confirmPassword && (
//                       <span className="algo-field__error"> {resetErrors.confirmPassword.message}</span>
//                     )}
//                   </div>

//                   <button type="submit" className="algo-submit" disabled={fpLoading || !!fpSuccess}>
//                     {fpLoading ? (
//                       <>updating<span className="algo-submit__dots"><span></span><span></span><span></span></span></>
//                     ) : 'Update_password'}
//                   </button>
//                 </form>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Login;














import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, NavLink } from 'react-router';
import { loginUser } from "../authSlice";
import { useEffect, useState } from 'react';
import axiosClient from '../utils/axiosClient'; // adjust path if different
import { clearError } from '../authSlice';
// const loginSchema = z.object({
//   emailId: z.string().email("Invalid Email"),
//   password: z.string().min(8, "Password is too weak")
// });

const loginSchema = z.object({
  emailId: z
    .string()
    .min(1, "Please enter your email.")
    .email("Invalid Email"),

  password: z
    .string()
    .min(1, "Please enter your password.")
    //.min(8, "Password is too weak"),
});

// Step 1: Email
const emailSchema = z.object({
  emailId: z.string().email("Invalid Email"),
});

// Step 2: OTP
const otpSchema = z.object({
  otp: z.string().min(4, "Enter a valid OTP"),
});

// Step 3: New Password
const resetPasswordSchema = z
  .object({
    newPassword: z.string().min(8, "Password is too weak"),
    confirmPassword: z.string().min(1, "Password is too weak"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const STEP_ORDER = ['email', 'otp', 'reset'];
const TERMINAL_LINE = '> auth --login --platform=algo';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [typedLine, setTypedLine] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
  dispatch(clearError());
}, [dispatch]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });

  // ---- Forgot Password flow state ----
  // step: null (closed) | 'email' | 'otp' | 'reset'
  const [fpStep, setFpStep] = useState(null);
  const [fpEmail, setFpEmail] = useState("");
  const [fpOtp, setFpOtp] = useState("");
  const [fpLoading, setFpLoading] = useState(false);
  const [fpError, setFpError] = useState("");
  const [fpSuccess, setFpSuccess] = useState("");

  // ---- Show/hide toggles for new password fields ----
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register: registerEmail,
    handleSubmit: handleSubmitEmail,
    reset: resetEmailForm,
    formState: { errors: emailErrors },
  } = useForm({ resolver: zodResolver(emailSchema) });

  const {
    register: registerOtp,
    handleSubmit: handleSubmitOtp,
    reset: resetOtpForm,
    formState: { errors: otpErrors },
  } = useForm({ resolver: zodResolver(otpSchema) });

  const {
    register: registerReset,
    handleSubmit: handleSubmitReset,
    reset: resetPasswordForm,
    formState: { errors: resetErrors },
  } = useForm({ resolver: zodResolver(resetPasswordSchema) });

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

  // const onSubmit = (data) => {
  //   dispatch(loginUser(data));
  // };

  const onSubmit = (data) => {
  dispatch(clearError());
  dispatch(loginUser(data));
};


  // ---- Step 1: Send OTP ----
  const onSendOtp = async (data) => {
    setFpError("");
    setFpLoading(true);
    try {
      await axiosClient.post('/user/sendOtp', { emailId: data.emailId });
      setFpEmail(data.emailId);
      setFpStep('otp');
    } catch (err) {
      setFpError(err?.response?.data?.message || "Failed to send OTP. Try again.");
    } finally {
      setFpLoading(false);
    }
  };

  // ---- Step 2: Verify OTP ----
  const onVerifyOtp = async (data) => {
    setFpError("");
    setFpLoading(true);
    try {
      await axiosClient.post('/user/verifyOtp', {
        emailId: fpEmail,
        otp: data.otp,
      });
      setFpOtp(data.otp);
      setFpStep('reset');
    } catch (err) {
      setFpError(err?.response?.data?.msg || "Invalid or expired OTP.");
    } finally {
      setFpLoading(false);
    }
  };

  // ---- Step 3: Change Password ----
  const onChangePassword = async (data) => {
    setFpError("");
    setFpLoading(true);
    try {
      await axiosClient.post('/user/changePassword', {
        emailId: fpEmail,
        otp: fpOtp,
        newPassword: data.newPassword,
      });
      setFpSuccess("Password reset successful. You can log in now.");
      setTimeout(() => {
        closeForgotPasswordModal();
      }, 1500);
    } catch (err) {
      setFpError(err?.response?.data?.msg || "Failed to reset password.");
    } finally {
      setFpLoading(false);
    }
  };

  const goBack = () => {
    setFpError("");
    if (fpStep === 'otp') setFpStep('email');
    else if (fpStep === 'reset') setFpStep('otp');
  };

  const closeForgotPasswordModal = () => {
    setFpStep(null);
    setFpEmail("");
    setFpOtp("");
    setFpError("");
    setFpSuccess("");
    setShowNewPassword(false);
    setShowConfirmPassword(false);
    resetEmailForm();
    resetOtpForm();
    resetPasswordForm();
  };

  const currentStepIndex = fpStep ? STEP_ORDER.indexOf(fpStep) : -1;

  return (
    <div className="algo-auth">
      <style>{`
        .algo-auth {
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
          --danger-dim: #ff6b6b22;
          --green: #5ce6a6;
          --green-dim: #5ce6a622;

          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at 80% 15%, #101828 0%, var(--void) 55%);
          font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
          position: relative;
          overflow: hidden;
          padding: 2rem 1rem;
        }

        .algo-auth__glyphs {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .algo-auth__glyph {
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
          to { transform: translateY(-40px) rotate(-6deg); }
        }

        @keyframes algo-fade-up {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes algo-fade-in {
          from { opacity: 0; transform: translateY(8px); }
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

        @keyframes algo-backdrop-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes algo-modal-in {
          from { opacity: 0; transform: translateY(14px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @media (prefers-reduced-motion: reduce) {
          .algo-auth__glyph { animation: none; }
          .algo-auth__card, .algo-modal__backdrop, .algo-modal__box, .algo-modal__step {
            animation: none !important;
          }
          .algo-auth__cursor { animation: none; }
        }

        .algo-auth__card {
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

        .algo-auth__eyebrow {
          font-family: 'JetBrains Mono', ui-monospace, 'Courier New', monospace;
          font-size: 0.8rem;
          color: var(--accent);
          letter-spacing: 0.02em;
          margin-bottom: 0.9rem;
          min-height: 1.2em;
          white-space: pre;
        }

        .algo-auth__cursor {
          display: inline-block;
          width: 0.55em;
          background: var(--accent);
          margin-left: 1px;
          animation: algo-blink 1s step-start infinite;
        }

        .algo-auth__title {
          font-family: 'JetBrains Mono', ui-monospace, 'Courier New', monospace;
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.01em;
          margin: 0 0 0.35rem;
        }

        .algo-auth__title span {
          color: var(--accent);
        }

        .algo-auth__subtitle {
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

        .algo-forgot {
          text-align: right;
          margin-top: 0.5rem;
        }

        .algo-forgot button {
          background: none;
          border: none;
          font-size: 0.8rem;
          color: var(--text-muted);
          cursor: pointer;
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          transition: color 0.15s ease;
        }

        .algo-forgot button:hover {
          color: var(--accent);
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

        .algo-submit--ghost {
          background: var(--secondary);
          color: #0c1526;
          animation: none;
        }

        .algo-submit__dots span {
          display: inline-block;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: currentColor;
          margin-left: 3px;
          animation: algo-blink 1.1s ease-in-out infinite;
        }
        .algo-submit__dots span:nth-child(2) { animation-delay: 0.15s; }
        .algo-submit__dots span:nth-child(3) { animation-delay: 0.3s; }

        .algo-auth__footer {
          text-align: center;
          margin-top: 1.5rem;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .algo-auth__footer a {
          color: var(--secondary);
          text-decoration: none;
          font-weight: 600;
        }

        .algo-auth__footer a:hover {
          text-decoration: underline;
        }

        .algo-auth__error-banner {
          margin-top: 0.6rem;
          font-size: 0.8rem;
          color: var(--danger);
          font-family: 'JetBrains Mono', ui-monospace, monospace;
        }

        /* ---- Modal ---- */
        .algo-modal__backdrop {
          position: fixed;
          inset: 0;
          background: rgba(6, 9, 15, 0.72);
          backdrop-filter: blur(3px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 50;
          padding: 1rem;
          animation: algo-backdrop-in 0.2s ease-out both;
        }

        .algo-modal__box {
          position: relative;
          width: 100%;
          max-width: 26rem;
          background: linear-gradient(180deg, var(--surface) 0%, var(--surface-2) 100%);
          border: 1px solid var(--border);
          border-radius: 1rem;
          padding: 1.75rem 1.75rem 1.5rem;
          box-shadow: 0 30px 60px -20px rgba(0,0,0,0.7);
          animation: algo-modal-in 0.28s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .algo-modal__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.6rem;
        }

        .algo-modal__title-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .algo-modal__title {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--text-primary);
        }

        .algo-modal__icon-btn {
          background: none;
          border: 1px solid var(--border);
          border-radius: 0.4rem;
          color: var(--text-muted);
          width: 1.9rem;
          height: 1.9rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 0.9rem;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .algo-modal__icon-btn:hover {
          color: var(--text-primary);
          border-color: var(--accent);
        }

        .algo-modal__steps {
          display: flex;
          gap: 6px;
          margin-bottom: 1.4rem;
        }

        .algo-modal__step-dot {
          flex: 1;
          height: 3px;
          border-radius: 2px;
          background: var(--border);
          transition: background 0.25s ease;
        }

        .algo-modal__step-dot.is-done {
          background: var(--green);
        }

        .algo-modal__step-dot.is-active {
          background: var(--accent);
        }

        .algo-modal__step {
          animation: algo-fade-in 0.25s ease-out both;
        }

        .algo-modal__hint {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 0.9rem;
        }

        .algo-modal__hint span {
          color: var(--text-primary);
          font-family: 'JetBrains Mono', ui-monospace, monospace;
        }

        .algo-alert {
          border-radius: 0.5rem;
          padding: 0.55rem 0.75rem;
          font-size: 0.82rem;
          margin-bottom: 1rem;
          font-family: 'JetBrains Mono', ui-monospace, monospace;
        }

        .algo-alert--error {
          background: var(--danger-dim);
          border: 1px solid rgba(255,107,107,0.4);
          color: #ffb3b3;
        }

        .algo-alert--success {
          background: var(--green-dim);
          border: 1px solid rgba(92,230,166,0.4);
          color: #a9f2d2;
        }

        .algo-otp-input {
          letter-spacing: 0.5em;
          text-align: center;
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 1.1rem !important;
        }

        .algo-resend {
          text-align: center;
          margin-top: 0.8rem;
        }

        .algo-resend button {
          background: none;
          border: none;
          font-size: 0.75rem;
          color: var(--text-muted);
          cursor: pointer;
          font-family: 'JetBrains Mono', ui-monospace, monospace;
        }

        .algo-resend button:hover:not(:disabled) {
          color: var(--accent);
        }
      `}</style>

      {/* Ambient drifting glyphs — purely decorative, low-opacity */}
      <div className="algo-auth__glyphs" aria-hidden="true">
        {[
          { t: '{ }', top: '10%', left: '85%', size: '1.6rem', dur: '15s', delay: '0s' },
          { t: 'O(1)', top: '75%', left: '90%', size: '1.1rem', dur: '19s', delay: '1.5s' },
          { t: '[ ]', top: '22%', left: '8%', size: '1.4rem', dur: '17s', delay: '0.8s' },
          { t: '10', top: '85%', left: '5%', size: '1.2rem', dur: '21s', delay: '2.8s' },
          { t: '( )', top: '48%', left: '4%', size: '1.3rem', dur: '16s', delay: '0.4s' },
          { t: 'n²', top: '58%', left: '94%', size: '1rem', dur: '18s', delay: '2s' },
        ].map((g, idx) => (
          <span
            key={idx}
            className="algo-auth__glyph"
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

      <div className="algo-auth__card">
        <div className="algo-auth__eyebrow">
          {typedLine}
          <span className="algo-auth__cursor">&nbsp;</span>
        </div>

        <h2 className="algo-auth__title">
          Algo<span>Coding</span> Platform
        </h2>
        <p className="algo-auth__subtitle">Welcome back. Pick up where you left off.</p>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
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

          <div className="algo-field">
            <label htmlFor="password">password</label>
            <div className="algo-field__input-wrap">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className={errors.password ? 'algo-field--error' : ''}
                {...register('password')}
              />
              <button
                type="button"
                className="algo-field__toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
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
            {errors.password && (
              <span className="algo-field__error"> {errors.password.message}</span>
            )}
            {error && <span className="algo-auth__error-banner"> {error}</span>}

            <div className="algo-forgot">
              <button type="button" onClick={() => setFpStep('email')}>
                forgot_password?
              </button>
            </div>
          </div>

          <button type="submit" className="algo-submit" disabled={loading}>
            {loading ? (
              <>
                verifying
                <span className="algo-submit__dots">
                  <span></span><span></span><span></span>
                </span>
              </>
            ) : 'Login'}
          </button>
        </form>

        <div className="algo-auth__footer">
          Don't have an account?{' '}
          <NavLink to="/signup">Sign Up</NavLink>
        </div>
      </div>

      {/* ---- Forgot Password Modal (3 steps) ---- */}
      {fpStep && (
        <div className="algo-modal__backdrop" onClick={closeForgotPasswordModal}>
          <div className="algo-modal__box" onClick={(e) => e.stopPropagation()}>
            <div className="algo-modal__header">
              <div className="algo-modal__title-row">
                {fpStep !== 'email' && !fpSuccess && (
                  <button
                    type="button"
                    className="algo-modal__icon-btn"
                    onClick={goBack}
                    aria-label="Go back"
                  >
                    ←
                  </button>
                )}
                <span className="algo-modal__title">reset_password()</span>
              </div>
              <button
                type="button"
                className="algo-modal__icon-btn"
                onClick={closeForgotPasswordModal}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="algo-modal__steps" aria-hidden="true">
              {STEP_ORDER.map((s, idx) => (
                <div
                  key={s}
                  className={`algo-modal__step-dot ${
                    idx < currentStepIndex || fpSuccess ? 'is-done' : idx === currentStepIndex ? 'is-active' : ''
                  }`}
                />
              ))}
            </div>

            {fpError && (
              <div className="algo-alert algo-alert--error">{fpError}</div>
            )}
            {fpSuccess && (
              <div className="algo-alert algo-alert--success">{fpSuccess}</div>
            )}

            {/* Step 1: Email */}
            {fpStep === 'email' && !fpSuccess && (
              <div className="algo-modal__step" key="step-email">
                <p className="algo-modal__hint">Step 1/3 — we'll send a one-time code to your inbox.</p>
                <form onSubmit={handleSubmitEmail(onSendOtp)} noValidate>
                  <div className="algo-field" style={{ marginTop: 0 }}>
                    <input
                      type="text"
                      placeholder="john@example.com"
                      className={emailErrors.emailId ? 'algo-field--error' : ''}
                      {...registerEmail('emailId')}
                    />
                    {emailErrors.emailId && (
                      <span className="algo-field__error"> {emailErrors.emailId.message}</span>
                    )}
                  </div>
                  <button type="submit" className="algo-submit" disabled={fpLoading}>
                    {fpLoading ? (
                      <>sending<span className="algo-submit__dots"><span></span><span></span><span></span></span></>
                    ) : 'send_otp'}
                  </button>
                </form>
              </div>
            )}

            {/* Step 2: OTP */}
            {fpStep === 'otp' && !fpSuccess && (
              <div className="algo-modal__step" key="step-otp">
                <p className="algo-modal__hint">
                  Step 2/3 — code sent to <span>{fpEmail}</span>
                </p>
                <form onSubmit={handleSubmitOtp(onVerifyOtp)} noValidate>
                  <div className="algo-field" style={{ marginTop: 0 }}>
                    <input
                      type="text"
                      placeholder="0 0 0 0 0 0"
                      className={`algo-otp-input ${otpErrors.otp ? 'algo-field--error' : ''}`}
                      {...registerOtp('otp')}
                    />
                    {otpErrors.otp && (
                      <span className="algo-field__error"> {otpErrors.otp.message}</span>
                    )}
                  </div>
                  <button type="submit" className="algo-submit" disabled={fpLoading}>
                    {fpLoading ? (
                      <>verifying<span className="algo-submit__dots"><span></span><span></span><span></span></span></>
                    ) : 'verify_otp'}
                  </button>
                  <div className="algo-resend">
                    <button
                      type="button"
                      onClick={handleSubmitEmail(onSendOtp)}
                      disabled={fpLoading}
                    >
                      resend_otp
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Step 3: New Password */}
            {fpStep === 'reset' && (
              <div className="algo-modal__step" key="step-reset">
                <p className="algo-modal__hint">Step 3/3 — choose a new password.</p>
                <form onSubmit={handleSubmitReset(onChangePassword)} noValidate>
                  <div className="algo-field" style={{ marginTop: 0 }}>
                    <label htmlFor="newPassword">new_password</label>
                    <div className="algo-field__input-wrap">
                      <input
                        id="newPassword"
                        type={showNewPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className={resetErrors.newPassword ? 'algo-field--error' : ''}
                        disabled={!!fpSuccess}
                        {...registerReset('newPassword')}
                      />
                      <button
                        type="button"
                        className="algo-field__toggle"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        aria-label={showNewPassword ? "Hide password" : "Show password"}
                      >
                        {showNewPassword ? (
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
                    {resetErrors.newPassword && (
                      <span className="algo-field__error"> {resetErrors.newPassword.message}</span>
                    )}
                  </div>

                  <div className="algo-field">
                    <label htmlFor="confirmPassword">confirm_password</label>
                    <div className="algo-field__input-wrap">
                      <input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className={resetErrors.confirmPassword ? 'algo-field--error' : ''}
                        disabled={!!fpSuccess}
                        {...registerReset('confirmPassword')}
                      />
                      <button
                        type="button"
                        className="algo-field__toggle"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        aria-label={showConfirmPassword ? "Hide password" : "Show password"}
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
                    {resetErrors.confirmPassword && (
                      <span className="algo-field__error"> {resetErrors.confirmPassword.message}</span>
                    )}
                  </div>

                  <button type="submit" className="algo-submit" disabled={fpLoading || !!fpSuccess}>
                    {fpLoading ? (
                      <>updating<span className="algo-submit__dots"><span></span><span></span><span></span></span></>
                    ) : 'Update_password'}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
