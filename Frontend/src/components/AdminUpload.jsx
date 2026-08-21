
import { useParams, NavLink } from 'react-router';
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import axiosClient from '../utils/axiosClient'
import { logoutUser } from '../authSlice';
import { UploadCloud, FileVideo, CheckCircle2, AlertCircle } from 'lucide-react';

function AdminUpload(){

    const {problemId}  = useParams();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const [uploading, setUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [uploadedVideo, setUploadedVideo] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

      const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
        setError,
        clearErrors
      } = useForm();

      const selectedFile = watch('videoFile')?.[0];

      const initials = useMemo(() => {
        const name = user?.firstName || '?';
        return name.charAt(0).toUpperCase();
      }, [user]);

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

      const handleLogout = () => {
        dispatch(logoutUser());
        setMenuOpen(false);
      };

      // Upload video to Cloudinary
      const onSubmit = async (data) => {
        const file = data.videoFile[0];

        setUploading(true);
        setUploadProgress(0);
        clearErrors();

        try {
          // Step 1: Get upload signature from backend
          const signatureResponse = await axiosClient.get(`/video/create/${problemId}`);
          const { signature, timestamp, public_id, api_key, cloud_name, upload_url } = signatureResponse.data;

          // Step 2: Create FormData for Cloudinary upload or send to cloudinary
          const formData = new FormData();
          formData.append('file', file);
          formData.append('signature', signature);
          formData.append('timestamp', timestamp);
          formData.append('public_id', public_id);
          formData.append('api_key', api_key);

          // Step 3: Upload directly to Cloudinary
          const uploadResponse = await axios.post(upload_url, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            onUploadProgress: (progressEvent) => {
              const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
              setUploadProgress(progress);
            },
          });

          const cloudinaryResult = uploadResponse.data;

          // Step 4: Save video metadata to backend
          const metadataResponse = await axiosClient.post('/video/save', {
            problemId:problemId,
            cloudinaryPublicId: cloudinaryResult.public_id,
            secureUrl: cloudinaryResult.secure_url,
            duration: cloudinaryResult.duration,
          });

          setUploadedVideo(metadataResponse.data.videoSolution);
          reset(); // Reset form after successful upload

        } catch (err) {
          console.error('Upload error:', err);
          setError('root', {
            type: 'manual',
            message: err.response?.data?.message || 'Upload failed. Please try again.'
          });
        } finally {
          setUploading(false);
          setUploadProgress(0);
        }
      };

      // Format file size
      const formatFileSize = (bytes) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
      };

      // Format duration
      const formatDuration = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
      };

      return (
        <div className="algo-upload-page">
          <style>{`
            .algo-upload-page {
              --void: #0a0e14;
              --surface: #121826;
              --surface-2: #1a2233;
              --border: #232d40;
              --border-focus: #ffb86b;
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

            @keyframes algo-drift {
              from { transform: translateY(0) rotate(0deg); }
              to { transform: translateY(-34px) rotate(5deg); }
            }
            @keyframes algo-fade-up {
              from { opacity: 0; transform: translateY(16px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes algo-fade-in { from { opacity: 0; } to { opacity: 1; } }
            @keyframes algo-blink { 0%,45%{opacity:1} 50%,100%{opacity:0} }
            @keyframes algo-stripes { from { background-position: 0 0; } to { background-position: 28px 0; } }
            @keyframes algo-pop {
              0% { transform: scale(0.85); opacity: 0; }
              60% { transform: scale(1.03); opacity: 1; }
              100% { transform: scale(1); opacity: 1; }
            }
            @keyframes algo-celebrate {
              0% { box-shadow: 0 0 0 0 rgba(92,230,166,0.5); }
              100% { box-shadow: 0 0 0 20px rgba(92,230,166,0); }
            }
            @keyframes algo-spin { to { transform: rotate(360deg); } }
            @keyframes algo-menu-in {
              from { opacity: 0; transform: translateY(-6px) scale(0.97); }
              to { opacity: 1; transform: translateY(0) scale(1); }
            }

            @media (prefers-reduced-motion: reduce) {
              .algo-upload-page * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; }
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

            .algo-nav__crumb:hover {
              color: var(--accent);
              border-color: var(--accent);
            }

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

            /* ---- Upload card ---- */
            .algo-upload {
              position: relative;
              overflow: hidden;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 3rem 1.25rem 4rem;
              background: radial-gradient(circle at 25% 0%, #16203a 0%, var(--void) 55%);
            }

            .algo-upload__glyphs {
              position: absolute;
              inset: 0;
              overflow: hidden;
              pointer-events: none;
            }

            .algo-upload__glyph {
              position: absolute;
              color: var(--border);
              font-family: 'JetBrains Mono', ui-monospace, monospace;
              font-size: 1.4rem;
              opacity: 0.3;
              animation: algo-drift linear infinite;
              user-select: none;
            }

            .algo-upload__card {
              position: relative;
              z-index: 1;
              width: 100%;
              max-width: 30rem;
              background: linear-gradient(180deg, var(--surface) 0%, var(--surface-2) 100%);
              border: 1px solid var(--border);
              border-radius: 1rem;
              padding: 2.25rem 2rem;
              box-shadow: 0 30px 60px -20px rgba(0,0,0,0.6);
              animation: algo-fade-up 0.5s ease-out both;
            }

            .algo-upload__eyebrow {
              font-family: 'JetBrains Mono', ui-monospace, monospace;
              font-size: 0.78rem;
              color: var(--accent);
              margin-bottom: 0.6rem;
              min-height: 1.1em;
            }

            .algo-upload__cursor {
              display: inline-block;
              width: 0.5em;
              background: var(--accent);
              margin-left: 2px;
              animation: algo-blink 1s step-start infinite;
            }

            .algo-upload__title {
              font-family: 'JetBrains Mono', ui-monospace, monospace;
              font-size: 1.4rem;
              font-weight: 700;
              margin: 0 0 1.6rem;
            }

            .algo-dropzone {
              position: relative;
              border: 1.5px dashed var(--border);
              border-radius: 0.75rem;
              padding: 2rem 1.25rem;
              text-align: center;
              cursor: pointer;
              transition: border-color 0.2s ease, background 0.2s ease;
              background: #0d1320;
              display: block;
            }

            .algo-dropzone:hover { border-color: var(--accent); background: #0f1523; }
            .algo-dropzone.has-error { border-color: var(--danger); }
            .algo-dropzone.is-disabled { opacity: 0.6; cursor: not-allowed; }

            .algo-dropzone__input {
              position: absolute;
              inset: 0;
              opacity: 0;
              cursor: pointer;
              width: 100%;
              height: 100%;
            }

            .algo-dropzone__icon {
              width: 3rem;
              height: 3rem;
              border-radius: 50%;
              background: var(--accent-dim);
              color: var(--accent);
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto 0.9rem;
            }

            .algo-dropzone__label { font-size: 0.9rem; color: var(--text-primary); font-weight: 600; margin: 0 0 0.3rem; }
            .algo-dropzone__hint { font-size: 0.75rem; color: var(--text-muted); font-family: 'JetBrains Mono', ui-monospace, monospace; }

            .algo-field__error {
              display: block;
              font-size: 0.78rem;
              color: var(--danger);
              margin-top: 0.5rem;
              font-family: 'JetBrains Mono', ui-monospace, monospace;
            }

            .algo-file-chip {
              display: flex;
              align-items: center;
              gap: 0.75rem;
              background: var(--secondary-dim);
              border: 1px solid rgba(108,142,239,0.35);
              border-radius: 0.6rem;
              padding: 0.75rem 1rem;
              margin-top: 1rem;
              animation: algo-fade-in 0.25s ease-out both;
            }

            .algo-file-chip__icon { color: var(--secondary); flex-shrink: 0; }
            .algo-file-chip__name { font-size: 0.85rem; font-weight: 600; color: var(--text-primary); word-break: break-all; }
            .algo-file-chip__size { font-size: 0.75rem; color: var(--text-muted); font-family: 'JetBrains Mono', ui-monospace, monospace; }

            .algo-progress { margin-top: 1.2rem; animation: algo-fade-in 0.25s ease-out both; }

            .algo-progress__row {
              display: flex;
              justify-content: space-between;
              font-size: 0.78rem;
              color: var(--text-muted);
              margin-bottom: 0.4rem;
              font-family: 'JetBrains Mono', ui-monospace, monospace;
            }

            .algo-progress__row span:last-child { color: var(--accent); font-weight: 700; }

            .algo-progress__track {
              width: 100%;
              height: 8px;
              border-radius: 999px;
              background: var(--surface-2);
              border: 1px solid var(--border);
              overflow: hidden;
            }

            .algo-progress__fill {
              height: 100%;
              border-radius: 999px;
              background-image: repeating-linear-gradient(
                45deg,
                rgba(255,255,255,0.18) 0,
                rgba(255,255,255,0.18) 8px,
                transparent 8px,
                transparent 16px
              ), linear-gradient(90deg, var(--secondary), var(--accent));
              background-size: 28px 28px, 100% 100%;
              animation: algo-stripes 0.7s linear infinite;
              transition: width 0.3s ease;
            }

            .algo-alert {
              display: flex;
              align-items: flex-start;
              gap: 0.6rem;
              border-radius: 0.6rem;
              padding: 0.85rem 1rem;
              margin-top: 1.2rem;
              font-size: 0.85rem;
              animation: algo-fade-in 0.25s ease-out both;
            }

            .algo-alert--error { background: var(--danger-dim); border: 1px solid rgba(255,107,107,0.4); color: #ffb3b3; }
            .algo-alert--success {
              background: var(--green-dim);
              border: 1px solid rgba(92,230,166,0.4);
              color: #a9f2d2;
              animation: algo-pop 0.4s ease-out both, algo-celebrate 0.9s ease-out;
            }

            .algo-alert__title { font-weight: 700; margin: 0 0 0.2rem; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.85rem; }
            .algo-alert__meta { font-size: 0.78rem; margin: 0.1rem 0; font-family: 'JetBrains Mono', ui-monospace, monospace; opacity: 0.9; }

            .algo-submit-row { display: flex; justify-content: flex-end; margin-top: 1.6rem; }

            .algo-submit {
              padding: 0.7rem 1.4rem;
              border-radius: 0.5rem;
              border: none;
              background: var(--accent);
              color: #1a1206;
              font-weight: 700;
              font-size: 0.9rem;
              cursor: pointer;
              display: flex;
              align-items: center;
              gap: 0.5rem;
              transition: transform 0.12s ease, filter 0.15s ease;
            }

            .algo-submit:hover:not(:disabled) { filter: brightness(1.08); transform: translateY(-1px); }
            .algo-submit:disabled { opacity: 0.75; cursor: not-allowed; }
            .algo-spin { animation: algo-spin 0.9s linear infinite; }
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

          <div className="algo-upload">
            <div className="algo-upload__glyphs" aria-hidden="true">
              {[
                { t: '{ }', top: '10%', left: '8%', size: '1.5rem', dur: '15s', delay: '0s' },
                { t: '▶', top: '78%', left: '88%', size: '1.2rem', dur: '18s', delay: '1s' },
                { t: '[ ]', top: '20%', left: '88%', size: '1.3rem', dur: '17s', delay: '0.5s' },
                { t: '01', top: '85%', left: '6%', size: '1.1rem', dur: '20s', delay: '2s' },
              ].map((g, idx) => (
                <span
                  key={idx}
                  className="algo-upload__glyph"
                  style={{ top: g.top, left: g.left, fontSize: g.size, animationDuration: g.dur, animationDelay: g.delay }}
                >
                  {g.t}
                </span>
              ))}
            </div>

            <div className="algo-upload__card">
              <div className="algo-upload__eyebrow">
                &gt; upload --target=editorial
                <span className="algo-upload__cursor">&nbsp;</span>
              </div>
              <h2 className="algo-upload__title">Upload Video</h2>

              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* File Input */}
                <label className={`algo-dropzone ${errors.videoFile ? 'has-error' : ''} ${uploading ? 'is-disabled' : ''}`}>
                  <input
                    type="file"
                    accept="video/*"
                    className="algo-dropzone__input"
                    {...register('videoFile', {
                      required: 'Please select a video file',
                      validate: {
                        isVideo: (files) => {
                          if (!files || !files[0]) return 'Please select a video file';
                          const file = files[0];
                          return file.type.startsWith('video/') || 'Please select a valid video file';
                        },
                        fileSize: (files) => {
                          if (!files || !files[0]) return true;
                          const file = files[0];
                          const maxSize = 100 * 1024 * 1024; // 100MB
                          return file.size <= maxSize || 'File size must be less than 100MB';
                        }
                      }
                    })}
                    disabled={uploading}
                  />
                  <div className="algo-dropzone__icon">
                    <UploadCloud size={22} />
                  </div>
                  <p className="algo-dropzone__label">Click to choose a video file</p>
                  <p className="algo-dropzone__hint">MP4, MOV, WEBM — up to 100MB</p>
                </label>
                {errors.videoFile && (
                  <span className="algo-field__error">// {errors.videoFile.message}</span>
                )}

                {/* Selected File Info */}
                {selectedFile && (
                  <div className="algo-file-chip">
                    <FileVideo size={20} className="algo-file-chip__icon" />
                    <div>
                      <div className="algo-file-chip__name">{selectedFile.name}</div>
                      <div className="algo-file-chip__size">{formatFileSize(selectedFile.size)}</div>
                    </div>
                  </div>
                )}

                {/* Upload Progress */}
                {uploading && (
                  <div className="algo-progress">
                    <div className="algo-progress__row">
                      <span>uploading…</span>
                      <span>{uploadProgress}%</span>
                    </div>
                    <div className="algo-progress__track">
                      <div className="algo-progress__fill" style={{ width: `${uploadProgress}%` }} />
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {errors.root && (
                  <div className="algo-alert algo-alert--error">
                    <AlertCircle size={18} />
                    <span>{errors.root.message}</span>
                  </div>
                )}

                {/* Success Message */}
                {uploadedVideo && (
                  <div className="algo-alert algo-alert--success">
                    <CheckCircle2 size={18} />
                    <div>
                      <p className="algo-alert__title">Upload successful</p>
                      <p className="algo-alert__meta">Duration: {formatDuration(uploadedVideo.duration)}</p>
                      <p className="algo-alert__meta">Uploaded: {new Date(uploadedVideo.uploadedAt).toLocaleString()}</p>
                    </div>
                  </div>
                )}

                {/* Upload Button */}
                <div className="algo-submit-row">
                  <button type="submit" disabled={uploading} className="algo-submit">
                    {uploading ? (
                      <>
                        <span className="algo-spin"><UploadCloud size={16} /></span>
                        Uploading…
                      </>
                    ) : 'Upload Video'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
    );
}


export default AdminUpload;
