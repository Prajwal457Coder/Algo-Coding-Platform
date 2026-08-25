
import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import Editor from '@monaco-editor/react';
import { useParams, NavLink, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import axiosClient from "../utils/axiosClient"
import SubmissionHistory from "../components/SubmissionHistory"
import ChatAi from '../components/ChatAi';
import Editorial from '../components/Editorial';
import confetti from 'canvas-confetti';
import { logoutUser } from '../authSlice';


const celebrateAccepted = () => {
  const colors = [
    '#5ce6a6', // green
    '#4de1ff', // cyan
    '#ffb86b', // orange
    '#a78bfa', // purple
    '#ffffff', // white
  ];

  // Main center explosion
  confetti({
    particleCount: 140,
    spread: 100,
    startVelocity: 48,
    decay: 0.91,
    gravity: 0.9,
    scalar: 1.05,
    ticks: 260,
    origin: {
      x: 0.5,
      y: 0.58,
    },
    colors,
    shapes: ['square', 'circle', 'star'],
    disableForReducedMotion: true,
  });

  // Left cannon
  confetti({
    particleCount: 75,
    angle: 55,
    spread: 65,
    startVelocity: 55,
    decay: 0.91,
    gravity: 1,
    origin: {
      x: 0,
      y: 0.65,
    },
    colors,
    shapes: ['square', 'circle'],
    disableForReducedMotion: true,
  });

  // Right cannon
  confetti({
    particleCount: 75,
    angle: 125,
    spread: 65,
    startVelocity: 55,
    decay: 0.91,
    gravity: 1,
    origin: {
      x: 1,
      y: 0.65,
    },
    colors,
    shapes: ['square', 'circle'],
    disableForReducedMotion: true,
  });

  // Secondary golden burst
  setTimeout(() => {
    confetti({
      particleCount: 90,
      spread: 150,
      startVelocity: 32,
      decay: 0.92,
      gravity: 0.75,
      scalar: 0.85,
      origin: {
        x: 0.5,
        y: 0.42,
      },
      colors: ['#ffb86b', '#ffd166', '#ffffff'],
      shapes: ['star', 'circle'],
      disableForReducedMotion: true,
    });
  }, 280);

  // Small side bursts
  setTimeout(() => {
    confetti({
      particleCount: 35,
      angle: 70,
      spread: 45,
      startVelocity: 42,
      origin: { x: 0.15, y: 0.45 },
      colors,
      shapes: ['star'],
      scalar: 0.8,
      disableForReducedMotion: true,
    });

    confetti({
      particleCount: 35,
      angle: 110,
      spread: 45,
      startVelocity: 42,
      origin: { x: 0.85, y: 0.45 },
      colors,
      shapes: ['star'],
      scalar: 0.8,
      disableForReducedMotion: true,
    });
  }, 520);
};


const langMap = {
        cpp: 'C++',
        java: 'Java',
        javascript: 'JavaScript'
};

const LEFT_TABS = [
  { key: 'description', label: 'Description' },
  { key: 'editorial', label: 'Editorial' },
  { key: 'solutions', label: 'Solutions' },
  { key: 'submissions', label: 'Submissions' },
  { key: 'chatAI', label: 'ChatAI' },
];

const RIGHT_TABS = [
  { key: 'code', label: 'Code' },
  { key: 'testcase', label: 'Testcase' },
  { key: 'result', label: 'Result' },
];

const ProblemPage = () => {
  const [problem, setProblem] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  // Holds each language's code separately so switching tabs doesn't wipe your work
  const [codeByLanguage, setCodeByLanguage] = useState({});
  const [pageLoading, setPageLoading] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [runResult, setRunResult] = useState(null);
  const [submitResult, setSubmitResult] = useState(null);
  const [activeLeftTab, setActiveLeftTab] = useState('description');
  const [activeRightTab, setActiveRightTab] = useState('code');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const editorRef = useRef(null);
  const menuRef = useRef(null);
  let {problemId}  = useParams();

  const { handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  // The code currently shown in the editor for the selected language
  const code = codeByLanguage[selectedLanguage] ?? '';

  // Fetch problem data
  useEffect(() => {

    const fetchProblem = async () => {
      setPageLoading(true);
      try {

        const response = await axiosClient.get(`/problem/problemById/${problemId}`);

        // Build a map of { javascript: '...', java: '...', cpp: '...' }
        // from the startCode array, keyed by our internal language keys.
        const initialCodeMap = {};
        response.data.startCode.forEach((sc) => {
          const langKey = Object.keys(langMap).find(
            (key) => langMap[key] === sc.language
          );
          if (langKey) {
            initialCodeMap[langKey] = sc.initialCode;
          }
        });

        setProblem(response.data);
        setCodeByLanguage(initialCodeMap);
        setPageLoading(false);

      } catch (error) {
        console.error('Error fetching problem:', error);
        setPageLoading(false);
      }
    };
    fetchProblem();
  }, [problemId]);

  // Close the account dropdown when clicking outside it
  useEffect(() => {
    const onClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      // Wait for the logout request (and the isAuthenticated update it
      // triggers) to finish before navigating — otherwise /login briefly
      // sees isAuthenticated still true and bounces back to "/" first.
      await dispatch(logoutUser());
    } finally {
      setMenuOpen(false);
      setIsLoggingOut(false);
      navigate('/login');
    }
  };

  const initials = (user?.firstName || 'C').charAt(0).toUpperCase();

  const handleEditorChange = (value) => {
    setCodeByLanguage((prev) => ({
      ...prev,
      [selectedLanguage]: value || '',
    }));
  };

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
    // Custom Monaco theme so the editor's chrome matches the rest of the page
    monaco.editor.defineTheme('algoDark', {
      base: 'vs-dark',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': '#0d1320',
        'editor.lineHighlightBackground': '#1a223380',
        'editorLineNumber.foreground': '#3a4558',
        'editorLineNumber.activeForeground': '#ffb86b',
        'editorCursor.foreground': '#ffb86b',
        'editor.selectionBackground': '#6c8eef40',
        'editorGutter.background': '#0d1320',
      },
    });
    monaco.editor.setTheme('algoDark');
  };

  const handleLanguageChange = (language) => {
    // Just switch which language is active — its code is already
    // preserved in codeByLanguage, so nothing gets reset here.
    setSelectedLanguage(language);
  };

const handleRun = async () => {
  setIsRunning(true);
  setRunResult(null);

  try {
    const response = await axiosClient.post(`/submission/run/${problemId}`, {
      code,
      language: selectedLanguage
    });

    setRunResult(response.data);
    setActiveRightTab('testcase');
  } catch (error) {
    console.error('Error running code:', error);
    setRunResult({
      success: false,
      error: 'Internal server error'
    });
    setActiveRightTab('testcase');
  } finally {
    setIsRunning(false);
  }
};



const handleSubmitCode = async () => {
  setIsSubmitting(true);
  setSubmitResult(null);

  try {
    const response = await axiosClient.post(
      `/submission/submit/${problemId}`,
      {
        code: code,
        language: selectedLanguage
      }
    );

    setSubmitResult(response.data);
    setActiveRightTab('result');

    // 🎉 Advanced celebration
    // Only happens when ALL required test cases are accepted.
    if (response.data.accepted === true) {
      celebrateAccepted();
    }

  } catch (error) {
    console.error('Error submitting code:', error);
    setSubmitResult(null);
    setActiveRightTab('result');
  } finally {
    setIsSubmitting(false);
  }
};

  const getLanguageForMonaco = (lang) => {
    switch (lang) {
      case 'javascript': return 'javascript';
      case 'java': return 'java';
      case 'cpp': return 'cpp';
      default: return 'javascript';
    }
  };

  const getDifficultyPillClass = (difficulty) => {
    switch (difficulty?.toLowerCase()) {
      case 'easy': return 'algo-pill--easy';
      case 'medium': return 'algo-pill--medium';
      case 'hard': return 'algo-pill--hard';
      default: return 'algo-pill--neutral';
    }
  };

  if (pageLoading && !problem) {
    return (
      <div className="algo-problem algo-problem--loading">
        <style>{ROOT_STYLES}</style>
        <div className="algo-loader">
          <span className="algo-loader__dot" />
          <span className="algo-loader__dot" />
          <span className="algo-loader__dot" />
          <p> Loading problem</p>
        </div>
      </div>
    );
  }

  return (
    <div className="algo-problem-page">
      <style>{ROOT_STYLES}</style>

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
                  disabled={isLoggingOut}
                >
                  {isLoggingOut ? (
                    <>
                      <span className="algo-menu-spinner" />
                      logging out...
                    </>
                  ) : (
                    <>⏻ logout</>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      <div className="algo-problem">
      {/* Left Panel */}
      <div className="algo-panel algo-panel--left">
        {/* Left Tabs */}
        <div className="algo-tabs">
          {LEFT_TABS.map((tab) => (
            <button
              key={tab.key}
              className={`algo-tab ${activeLeftTab === tab.key ? 'is-active' : ''}`}
              onClick={() => setActiveLeftTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Left Content */}
        <div className="algo-panel__body">
          {problem && (
            <>
              {activeLeftTab === 'description' && (
                <div className="algo-fade-in">
                  <div className="algo-problem__header">
                    <h1 className="algo-problem__title">{problem.title}</h1>
                    <div className="algo-card__badges">
                      <span className={`algo-pill ${getDifficultyPillClass(problem.difficulty)}`}>
                        {problem.difficulty.charAt(0).toUpperCase() + problem.difficulty.slice(1)}
                      </span>
                      <span className="algo-pill algo-pill--tag">{problem.tags}</span>
                    </div>
                  </div>

                  <div className="algo-prose">
                    <div className="algo-description">
                      {problem.description}
                    </div>
                  </div>

                  <div className="algo-examples">
                    <h3 className="algo-section-heading">Examples</h3>
                    <div className="algo-examples__list">
                      {problem.visibleTestCases.map((example, index) => (
                        <div key={index} className="algo-example">
                          <h4 className="algo-example__title">Example {index + 1}</h4>
                          <div className="algo-example__rows">
                            <div><span>Input</span> {example.input}</div>
                            <div><span>Output</span> {example.output}</div>
                            <div><span>Explanation</span> {example.explanation}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeLeftTab === 'editorial' && (
                <div className="algo-prose algo-fade-in">
                  <h2 className="algo-section-heading algo-section-heading--lg">Video Solution</h2>
                  <div className="algo-description">
                    <Editorial problemId={problem._id} secureUrl={problem.secureUrl} thumbnailUrl={problem.thumbnailUrl} duration={problem.duration}/>
                  </div>
                </div>
              )}

              {activeLeftTab === 'solutions' && (
                <div className="algo-fade-in">
                  <h2 className="algo-section-heading algo-section-heading--lg">Solutions</h2>
                  <div className="algo-solutions">
                    {problem.referenceSolution?.map((solution, index) => (
                      <div key={index} className="algo-solution">
                        <div className="algo-solution__header">
                          {problem?.title} — {solution?.language}
                        </div>
                        <pre className="algo-solution__code">
                          <code>{solution?.completeCode}</code>
                        </pre>
                      </div>
                    )) || <p className="algo-muted">Solutions will be available after you solve the problem.</p>}
                  </div>
                </div>
              )}

              {activeLeftTab === 'submissions' && (
                <div className="algo-fade-in">
                  <h2 className="algo-section-heading algo-section-heading--lg">My Submissions</h2>
                  <SubmissionHistory problemId={problemId} />
                </div>
              )}

              {/* Always mounted so chat state survives tab switches — just hidden via CSS */}
              <div className={`algo-prose algo-fade-in ${activeLeftTab === 'chatAI' ? '' : 'algo-hidden'}`}>
                <h2 className="algo-section-heading algo-section-heading--lg">Chat with AI</h2>
                <ChatAi problem={problem}></ChatAi>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Right Panel */}
      <div className="algo-panel algo-panel--right">
        {/* Right Tabs */}
        <div className="algo-tabs">
          {RIGHT_TABS.map((tab) => (
            <button
              key={tab.key}
              className={`algo-tab ${activeRightTab === tab.key ? 'is-active' : ''}`}
              onClick={() => setActiveRightTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Right Content */}
        <div className="algo-panel__body algo-panel__body--flush">
          {activeRightTab === 'code' && (
            <div className="algo-code-view">
              {/* Language Selector */}
              <div className="algo-lang-bar">
                <div className="algo-lang-bar__group">
                  {['javascript', 'java', 'cpp'].map((lang) => (
                    <button
                      key={lang}
                      className={`algo-lang-btn ${selectedLanguage === lang ? 'is-active' : ''}`}
                      onClick={() => handleLanguageChange(lang)}
                    >
                      {lang === 'cpp' ? 'C++' : lang === 'javascript' ? 'JavaScript' : 'Java'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Monaco Editor */}
              <div className="algo-editor-wrap">
                <Editor
                  height="100%"
                  language={getLanguageForMonaco(selectedLanguage)}
                  value={code}
                  onChange={handleEditorChange}
                  onMount={handleEditorDidMount}
                  theme="vs-dark"
                  path={selectedLanguage}
                  options={{
                    fontSize: 14,
                    minimap: { enabled: false },
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                    tabSize: 2,
                    insertSpaces: true,
                    wordWrap: 'on',
                    lineNumbers: 'on',
                    glyphMargin: false,
                    folding: true,
                    lineDecorationsWidth: 10,
                    lineNumbersMinChars: 3,
                    renderLineHighlight: 'line',
                    selectOnLineNumbers: true,
                    roundedSelection: false,
                    readOnly: false,
                    cursorStyle: 'line',
                    mouseWheelZoom: true,
                  }}
                />
              </div>

              {/* Action Buttons */}
              <div className="algo-action-bar">
                <button
                  className="algo-btn algo-btn--ghost"
                  onClick={() => setActiveRightTab('testcase')}
                >
                  Console
                </button>
                <div className="algo-action-bar__right">
                  <button
                    className="algo-btn algo-btn--outline"
                    onClick={handleRun}
                    disabled={isRunning || isSubmitting}
                  >
                    {isRunning ? (
                      <>running<span className="algo-dots"><span></span><span></span><span></span></span></>
                    ) : 'Run'}
                  </button>
                  <button
                    className="algo-btn algo-btn--primary"
                    onClick={handleSubmitCode}
                    disabled={isRunning || isSubmitting}
                  >
                    {isSubmitting ? (
                      <>submitting<span className="algo-dots"><span></span><span></span><span></span></span></>
                    ) : 'Submit'}
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeRightTab === 'testcase' && (
            <div className="algo-panel__body algo-fade-in">
              <h3 className="algo-section-heading">Test Results</h3>
              {runResult ? (
                <div className={`algo-result-box ${runResult.success ? 'is-success' : 'is-error'}`}>
                  {runResult.success ? (
                    <div>
                      <h4 className="algo-result-box__title is-success">✅ All test cases passed!</h4>
                      <p className="algo-result-box__meta">Runtime: {runResult.runtime} sec</p>
                      <p className="algo-result-box__meta">Memory: {runResult.memory} KB</p>

                      <div className="algo-tc-list">
                        {runResult.testCases.map((tc, i) => (
                          <div key={i} className="algo-tc">
                            <div className="algo-tc__header">
                              <span>Test Case {i + 1}</span>
                              <span className="algo-pill algo-pill--easy">✓ Passed</span>
                            </div>
                            <div className="algo-tc__rows">
                              <div><span>Input</span>{tc.stdin}</div>
                              <div><span>Expected</span>{tc.expected_output}</div>
                              <div><span>Output</span>{tc.stdout}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h4 className="algo-result-box__title is-error">❌ Error</h4>
                      <div className="algo-tc-list">
                        {runResult.testCases?.map((tc, i) => (
                          <div key={i} className="algo-tc">
                            <div className="algo-tc__header">
                              <span>Test Case {i + 1}</span>
                              <span className={`algo-pill ${tc.status_id == 3 ? 'algo-pill--easy' : 'algo-pill--hard'}`}>
                                {tc.status_id == 3 ? '✓ Passed' : '✗ Failed'}
                              </span>
                            </div>
                            <div className="algo-tc__rows">
                              <div><span>Input</span>{tc.stdin}</div>
                              <div><span>Expected</span>{tc.expected_output}</div>
                              <div><span>Output</span>{tc.stdout}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="algo-muted">Click "Run" to test your code with the example test cases.</div>
              )}
            </div>
          )}

          {activeRightTab === 'result' && (
            <div className="algo-panel__body algo-fade-in">
              <h3 className="algo-section-heading">Submission Result</h3>
              {submitResult ? (
                <div className={`algo-result-box ${submitResult.accepted ? 'is-success algo-result-box--celebrate' : 'is-error'}`}>
                  {submitResult.accepted ? (
                    <div>
                      <h4 className="algo-result-box__title is-success algo-result-box__title--lg">🎉 Accepted</h4>
                      <div className="algo-stat-grid">
                        <div className="algo-stat-card">
                          <div className="algo-stat-card__label">Test Cases Passed</div>
                          <div className="algo-stat-card__value">{submitResult.passedTestCases}/{submitResult.totalTestCases}</div>
                        </div>
                        <div className="algo-stat-card">
                          <div className="algo-stat-card__label">Runtime</div>
                          <div className="algo-stat-card__value">{submitResult.runtime} sec</div>
                        </div>
                        <div className="algo-stat-card">
                          <div className="algo-stat-card__label">Memory</div>
                          <div className="algo-stat-card__value">{submitResult.memory} KB</div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h4 className="algo-result-box__title is-error">❌ {submitResult.error || 'Wrong Answer'}</h4>
                      <div className="algo-stat-card algo-stat-card--inline">
                        <div className="algo-stat-card__label">Test Cases Passed</div>
                        <div className="algo-stat-card__value">{submitResult.passedTestCases}/{submitResult.totalTestCases}</div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="algo-muted">Click "Submit" to submit your solution for evaluation.</div>
              )}
            </div>
          )}
        </div>
      </div>
      </div>
    </div>
  );
};

const ROOT_STYLES = `
  .algo-problem-page {
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #0a0e14;
    font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
  }

  /* ---- Navbar (matches Homepage nav) ---- */
  .algo-nav {
    position: sticky;
    top: 0;
    z-index: 50;
    flex: 0 0 auto;
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.5rem;
    background: rgba(10, 14, 20, .92);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    border-bottom: 1px solid #232d40;
  }

  .algo-nav__brand {
    color: #e8edf4;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 2px;
    font: 700 1rem/1 "JetBrains Mono", ui-monospace, monospace;
    letter-spacing: -.02em;
  }

  .algo-nav__brand span {
    color: #ffb86b;
  }

  .algo-nav__cursor {
    animation: algo-blink 1.1s step-end infinite;
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
    padding: 6px 10px;
    border: 1px solid rgba(92,230,166,.2);
    background: rgba(92,230,166,.05);
    border-radius: 999px;
    color: #5ce6a6;
    font: 700 .68rem "JetBrains Mono", monospace;
  }

  .status-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #5ce6a6;
    box-shadow: 0 0 12px #5ce6a6;
  }

  .algo-user {
    position: relative;
  }

  .algo-user__trigger {
    display: flex;
    align-items: center;
    gap: 9px;
    border: 1px solid #232d40;
    border-radius: 999px;
    padding: 5px 12px 5px 5px;
    background: #1a2233;
    color: #e8edf4;
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
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    color: #161008;
    font: 800 .78rem "JetBrains Mono", monospace;
    background: conic-gradient(from 180deg, #ffb86b, #a78bfa, #4de1ff, #ffb86b);
  }

  .algo-user__name {
    font-size: .84rem;
    font-weight: 600;
  }

  .algo-user__caret {
    color: #7a8699;
    font-size: .55rem;
  }

  .algo-user__menu {
    position: absolute;
    right: 0;
    top: calc(100% + 10px);
    width: 190px;
    padding: 7px;
    border: 1px solid #2a3650;
    border-radius: 14px;
    background: rgba(16,24,39,.98);
    box-shadow: 0 24px 70px rgba(0, 0, 0, 0.45);
    animation: algo-fade-in .18s ease both;
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
    color: #aab6c8;
    text-decoration: none;
    font: 700 .75rem "JetBrains Mono", monospace;
    cursor: pointer;
    text-align: left;
  }

  .algo-user__menu-item:hover {
    background: rgba(255,255,255,.05);
    color: #e8edf4;
  }

  .algo-user__menu-item:disabled {
    opacity: .65;
    cursor: not-allowed;
  }

  .algo-menu-spinner {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    border: 2px solid rgba(255,107,107,.25);
    border-top-color: #ff6b6b;
    animation: algo-spin .7s linear infinite;
  }

  @keyframes algo-spin {
    to { transform: rotate(360deg); }
  }

  .algo-user__menu-item--danger { color: #ff6b6b; }
  .algo-user__menu-item--admin { color: #6c8eef; }

  .algo-user__divider {
    height: 1px;
    margin: 5px 0;
    background: #232d40;
  }

  @media (max-width: 620px) {
    .algo-nav { padding: 0 1rem; }
    .algo-nav__status { display: none; }
    .algo-user__name { display: none; }
  }

  /* ---- Existing problem workspace styles ---- */
  .algo-problem {
    --void: #0a0e14;
    --surface: #121826;
    --surface-2: #1a2233;
    --surface-warm: #161c2c;
    --border: #232d40;
    --text-primary: #e8edf4;
    --text-muted: #7a8699;
    --accent: #ffb86b;
    --accent-dim: #ffb86b22;
    --secondary: #6c8eef;
    --secondary-dim: #6c8eef22;
    --danger: #ff6b6b;
    --danger-dim: #ff6b6b1a;
    --green: #5ce6a6;
    --green-dim: #5ce6a61a;

    flex: 1;
    min-height: 0;
    display: flex;
    background: var(--void);
    color: var(--text-primary);
    font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
  }

  .algo-problem--loading {
    height: 100vh;
    align-items: center;
    justify-content: center;
  }

  .algo-loader {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.9rem;
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    color: var(--text-muted);
    font-size: 0.85rem;
  }

  .algo-loader__dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--accent);
    margin: 0 3px;
    animation: algo-bounce 1s ease-in-out infinite;
  }
  .algo-loader__dot:nth-child(2) { animation-delay: 0.15s; }
  .algo-loader__dot:nth-child(3) { animation-delay: 0.3s; }

  @keyframes algo-bounce {
    0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
    30% { transform: translateY(-8px); opacity: 1; }
  }

  @keyframes algo-fade-in {
    from { opacity: 0; transform: translateY(6px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes algo-blink {
    0%, 45% { opacity: 1; }
    50%, 100% { opacity: 0; }
  }

  @keyframes algo-pulse-ring {
    0% { box-shadow: 0 0 0 0 var(--accent-dim); }
    70% { box-shadow: 0 0 0 8px transparent; }
    100% { box-shadow: 0 0 0 0 transparent; }
  }

  @keyframes algo-celebrate {
    0% { box-shadow: 0 0 0 0 rgba(92,230,166,0.5); }
    100% { box-shadow: 0 0 0 22px rgba(92,230,166,0); }
  }

  @media (prefers-reduced-motion: reduce) {
    .algo-problem-page * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; }
  }

  .algo-fade-in { animation: algo-fade-in 0.3s ease-out both; }

  .algo-panel {
    display: flex;
    flex-direction: column;
    width: 50%;
    min-width: 0;
  }

  .algo-panel--left {
    border-right: 1px solid var(--border);
    background: linear-gradient(180deg, var(--surface-warm) 0%, var(--void) 340px);
  }

  .algo-panel--right {
    background: var(--void);
  }

  .algo-tabs {
    display: flex;
    gap: 0.25rem;
    padding: 0 1rem;
    background: rgba(18, 24, 38, 0.6);
    border-bottom: 1px solid var(--border);
    overflow-x: auto;
  }

  .algo-tab {
    background: none;
    border: none;
    border-bottom: 2px solid transparent;
    color: var(--text-muted);
    padding: 0.85rem 0.9rem;
    font-size: 0.85rem;
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    cursor: pointer;
    white-space: nowrap;
    transition: color 0.15s ease, border-color 0.2s ease;
  }

  .algo-tab:hover {
    color: var(--text-primary);
  }

  .algo-tab.is-active {
    color: var(--accent);
    border-bottom-color: var(--accent);
  }

  .algo-panel__body {
    flex: 1;
    overflow-y: auto;
    padding: 1.5rem;
  }

  .algo-panel__body--flush {
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  .algo-hidden { display: none; }

  .algo-problem__header {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.85rem;
    margin-bottom: 1.5rem;
  }

  .algo-problem__title {
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 1.45rem;
    font-weight: 700;
    margin: 0;
  }

  .algo-pill {
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 0.7rem;
    padding: 0.22rem 0.6rem;
    border-radius: 999px;
    border: 1px solid transparent;
    text-transform: capitalize;
  }

  .algo-pill--easy { color: var(--green); background: var(--green-dim); border-color: rgba(92,230,166,0.35); }
  .algo-pill--medium { color: var(--accent); background: var(--accent-dim); border-color: rgba(255,184,108,0.35); }
  .algo-pill--hard { color: var(--danger); background: var(--danger-dim); border-color: rgba(255,107,107,0.35); }
  .algo-pill--neutral { color: var(--text-muted); background: rgba(255,255,255,0.04); border-color: var(--border); }
  .algo-pill--tag { color: var(--secondary); background: var(--secondary-dim); border-color: rgba(108,142,239,0.35); }

  .algo-card__badges {
    display: flex;
    gap: 0.5rem;
  }

  .algo-prose { color: var(--text-primary); }

  .algo-description {
    white-space: pre-wrap;
    font-size: 0.9rem;
    line-height: 1.7;
    color: #c7d0dc;
  }

  .algo-section-heading {
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 0.95rem;
    color: var(--text-primary);
    margin: 0 0 1rem;
    padding-top: 0.25rem;
    border-top: 1px solid var(--border);
    padding-top: 1.25rem;
  }

  .algo-section-heading--lg {
    font-size: 1.15rem;
    border-top: none;
    padding-top: 0;
  }

  .algo-examples { margin-top: 2rem; }

  .algo-examples__list {
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
  }

  .algo-example {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 0.6rem;
    padding: 1rem 1.1rem;
  }

  .algo-example__title {
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 0.82rem;
    color: var(--accent);
    margin: 0 0 0.6rem;
  }

  .algo-example__rows {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 0.8rem;
  }

  .algo-example__rows span {
    color: var(--text-muted);
    margin-right: 0.5rem;
  }

  .algo-muted {
    color: var(--text-muted);
    font-size: 0.9rem;
  }

  .algo-solutions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .algo-solution {
    border: 1px solid var(--border);
    border-radius: 0.6rem;
    overflow: hidden;
  }

  .algo-solution__header {
    background: var(--surface);
    padding: 0.6rem 1rem;
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 0.85rem;
    border-bottom: 1px solid var(--border);
  }

  .algo-solution__code {
    background: #0d1320;
    padding: 1rem;
    font-size: 0.8rem;
    overflow-x: auto;
    margin: 0;
    color: #c7d0dc;
  }

  /* ---- Right: code view ---- */
  .algo-code-view {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 0;
  }

  .algo-lang-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 1rem;
    border-bottom: 1px solid var(--border);
    background: rgba(18,24,38,0.4);
  }

  .algo-lang-bar__group {
    display: flex;
    gap: 0.4rem;
  }

  .algo-lang-btn {
    background: none;
    border: 1px solid var(--border);
    border-radius: 0.4rem;
    color: var(--text-muted);
    font-size: 0.8rem;
    padding: 0.35rem 0.75rem;
    cursor: pointer;
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    transition: all 0.15s ease;
  }

  .algo-lang-btn:hover {
    color: var(--text-primary);
    border-color: var(--accent);
  }

  .algo-lang-btn.is-active {
    background: var(--accent-dim);
    color: var(--accent);
    border-color: var(--accent);
  }

  .algo-editor-wrap {
    flex: 1;
    min-height: 0;
  }

  .algo-action-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.85rem 1rem;
    border-top: 1px solid var(--border);
    background: rgba(18,24,38,0.4);
  }

  .algo-action-bar__right {
    display: flex;
    gap: 0.6rem;
  }

  .algo-btn {
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 0.8rem;
    padding: 0.45rem 1rem;
    border-radius: 0.45rem;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    transition: transform 0.12s ease, filter 0.15s ease, opacity 0.15s ease;
    border: 1px solid transparent;
  }

  .algo-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .algo-btn--ghost {
    background: none;
    border-color: var(--border);
    color: var(--text-muted);
  }

  .algo-btn--ghost:hover:not(:disabled) {
    color: var(--text-primary);
  }

  .algo-btn--outline {
    background: none;
    border-color: var(--secondary);
    color: var(--secondary);
  }

  .algo-btn--outline:hover:not(:disabled) {
    background: var(--secondary-dim);
  }

  .algo-btn--primary {
    background: var(--accent);
    color: #1a1206;
    font-weight: 700;
    border-color: var(--accent);
    animation: algo-pulse-ring 2.4s ease-out infinite;
  }

  .algo-btn--primary:hover:not(:disabled) {
    filter: brightness(1.08);
    transform: translateY(-1px);
  }

  .algo-btn--primary:disabled {
    animation: none;
  }

  .algo-dots span {
    display: inline-block;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: currentColor;
    margin-left: 2px;
    animation: algo-blink 1.1s ease-in-out infinite;
  }
  .algo-dots span:nth-child(2) { animation-delay: 0.15s; }
  .algo-dots span:nth-child(3) { animation-delay: 0.3s; }

  /* ---- Result / testcase boxes ---- */
  .algo-result-box {
    border-radius: 0.7rem;
    padding: 1.1rem 1.25rem;
    border: 1px solid;
  }

  .algo-result-box.is-success {
    background: var(--green-dim);
    border-color: rgba(92,230,166,0.4);
  }

  .algo-result-box.is-error {
    background: var(--danger-dim);
    border-color: rgba(255,107,107,0.4);
  }

  .algo-result-box--celebrate {
    animation: algo-celebrate 0.9s ease-out;
  }

  .algo-result-box__title {
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 1rem;
    margin: 0 0 0.4rem;
  }

  .algo-result-box__title--lg {
    font-size: 1.3rem;
  }

  .algo-result-box__title.is-success { color: var(--green); }
  .algo-result-box__title.is-error { color: var(--danger); }

  .algo-result-box__meta {
    font-size: 0.8rem;
    color: var(--text-muted);
    margin: 0.15rem 0;
    font-family: 'JetBrains Mono', ui-monospace, monospace;
  }

  .algo-tc-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 1rem;
  }

  .algo-tc {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 0.5rem;
    padding: 0.85rem 1rem;
  }

  .algo-tc__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.6rem;
    font-size: 0.85rem;
    font-weight: 600;
  }

  .algo-tc__rows {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 0.75rem;
    color: #c7d0dc;
  }

  .algo-tc__rows span {
    color: var(--text-muted);
    margin-right: 0.5rem;
  }

  .algo-stat-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
    gap: 0.7rem;
    margin-top: 1rem;
  }

  .algo-stat-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 0.5rem;
    padding: 0.7rem 0.9rem;
  }

  .algo-stat-card--inline {
    display: inline-block;
    margin-top: 0.75rem;
  }

  .algo-stat-card__label {
    font-size: 0.7rem;
    color: var(--text-muted);
    font-family: 'JetBrains Mono', ui-monospace, monospace;
  }

  .algo-stat-card__value {
    font-size: 0.95rem;
    font-weight: 700;
    margin-top: 0.2rem;
    color: var(--text-primary);
  }

  /* =========================================================
     RESPONSIVE OVERRIDES — tablet & mobile
     No functional changes above; layout-only rules below.
     ========================================================= */

  /* ---- Tablet (<=1024px): keep side-by-side but tighten spacing ---- */
  @media (max-width: 1024px) {
    .algo-panel__body {
      padding: 1.1rem;
    }

    .algo-problem__title {
      font-size: 1.25rem;
    }

    .algo-stat-grid {
      grid-template-columns: repeat(auto-fit, minmax(7.5rem, 1fr));
    }
  }

  /* ---- Mobile/small tablet (<=820px): stack panels vertically ---- */
  @media (max-width: 820px) {
    .algo-problem-page {
      height: auto;
      min-height: 100vh;
    }

    .algo-problem {
      flex-direction: column;
      height: auto;
    }

    .algo-panel {
      width: 100%;
    }

    .algo-panel--left {
      border-right: none;
      border-bottom: 1px solid var(--border);
      /* Give the description/chat panel a comfortable scroll area
         instead of fighting the right panel for viewport height. */
      max-height: 70vh;
    }

    .algo-panel--left .algo-panel__body {
      max-height: calc(70vh - 46px); /* 46px ~ tab bar height */
      overflow-y: auto;
    }

    .algo-panel--right {
      /* Give the code editor a fixed, usable height instead of
         collapsing to its min-content on a column layout. */
      height: 78vh;
      min-height: 480px;
    }

    .algo-code-view {
      height: 100%;
    }

    .algo-editor-wrap {
      min-height: 320px;
    }

    .algo-tabs {
      padding: 0 0.75rem;
    }

    .algo-tab {
      padding: 0.7rem 0.7rem;
      font-size: 0.78rem;
    }
  }

  /* ---- Mobile (<=640px) ---- */
  @media (max-width: 640px) {
    .algo-nav {
      padding: 0 0.85rem;
      min-height: 52px;
    }

    .algo-nav__brand {
      font-size: 0.88rem;
    }

    .algo-panel__body {
      padding: 0.9rem;
    }

    .algo-problem__header {
      gap: 0.6rem;
      margin-bottom: 1rem;
    }

    .algo-problem__title {
      font-size: 1.1rem;
    }

    .algo-description {
      font-size: 0.85rem;
    }

    .algo-section-heading {
      font-size: 0.85rem;
    }

    .algo-section-heading--lg {
      font-size: 1rem;
    }

    .algo-example {
      padding: 0.8rem 0.9rem;
    }

    .algo-example__rows {
      font-size: 0.75rem;
    }

    .algo-lang-bar {
      padding: 0.6rem 0.75rem;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .algo-lang-btn {
      font-size: 0.72rem;
      padding: 0.3rem 0.6rem;
    }

    .algo-action-bar {
      padding: 0.65rem 0.75rem;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .algo-action-bar__right {
      gap: 0.45rem;
    }

    .algo-btn {
      font-size: 0.72rem;
      padding: 0.4rem 0.8rem;
    }

    .algo-panel--right {
      height: 72vh;
      min-height: 420px;
    }

    .algo-panel--left {
      max-height: 65vh;
    }

    .algo-panel--left .algo-panel__body {
      max-height: calc(65vh - 42px);
    }

    .algo-stat-grid {
      grid-template-columns: 1fr 1fr;
    }

    .algo-user__name {
      display: none;
    }

    .algo-user__menu {
      width: 170px;
    }
  }

  /* ---- Very small phones (<=380px) ---- */
  @media (max-width: 380px) {
    .algo-nav__brand {
      font-size: 0.78rem;
    }

    .algo-tab {
      padding: 0.6rem 0.55rem;
      font-size: 0.72rem;
    }

    .algo-problem__title {
      font-size: 1rem;
    }

    .algo-stat-grid {
      grid-template-columns: 1fr;
    }
  }
`;
export default ProblemPage;
