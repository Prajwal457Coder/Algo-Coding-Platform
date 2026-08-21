import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import axiosClient from "../utils/axiosClient";
import { Send, Copy, Check, Bot, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';


function normalizeMarkdown(text) {
    return text.replace(/\n{3,}/g, '\n\n').trim();
}

function CodeBlockPre({ children }) {
    const [copied, setCopied] = useState(false);

    const codeEl = children?.props;
    const className = codeEl?.className || '';
    const language = /language-(\w+)/.exec(className)?.[1];
    const codeText = String(codeEl?.children ?? '').replace(/\n$/, '');

    const handleCopy = async () => {
        await navigator.clipboard.writeText(codeText);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <div className="my-2 rounded-xl overflow-hidden border border-base-300 bg-[#0d1117]">
            <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] text-xs">
                <span className="text-gray-400 font-mono">{language || 'text'}</span>
                <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 text-gray-400 hover:text-gray-200 transition-colors"
                    type="button"
                >
                    {copied ? <Check size={13} /> : <Copy size={13} />}
                    {copied ? 'Copied!' : 'Copy'}
                </button>
            </div>
            <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
                <code className="text-gray-200 font-mono">{codeText}</code>
            </pre>
        </div>
    );
}

function MarkdownMessage({ text }) {
    return (
        <div className="text-sm leading-relaxed [&>*]:mb-2 [&>*:last-child]:mb-0">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    h1: ({ children }) => <h1 className="text-lg font-bold">{children}</h1>,
                    h2: ({ children }) => <h2 className="text-base font-bold">{children}</h2>,
                    h3: ({ children }) => <h3 className="text-sm font-bold">{children}</h3>,
                    p: ({ children }) => <p>{children}</p>,
                    ul: ({ children }) => <ul className="list-disc pl-5 space-y-1">{children}</ul>,
                    ol: ({ children }) => <ol className="list-decimal pl-5 space-y-1">{children}</ol>,
                    li: ({ children }) => <li className="pl-1">{children}</li>,
                    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                    hr: () => <hr className="border-base-300" />,
                    a: ({ children, href }) => (
                        <a href={href} target="_blank" rel="noreferrer" className="text-primary underline">
                            {children}
                        </a>
                    ),
                    table: ({ children }) => (
                        <div className="overflow-x-auto">
                            <table className="table table-sm border border-base-300">{children}</table>
                        </div>
                    ),
                    pre: CodeBlockPre,
                    code: ({ children }) => (
                        <code className="bg-base-300 px-1.5 py-0.5 rounded text-[0.85em] font-mono">
                            {children}
                        </code>
                    ),
                }}
            >
                {normalizeMarkdown(text)}
            </ReactMarkdown>
        </div>
    );
}

function ChatAi({ problem }) {
    const [messages, setMessages] = useState([
        { type: 'model_output', content: [{ type: 'text', text: "👋 Hi! I'm your coding assistant." }] },
        { type: 'user_input', content: [{ type: 'text', text: "📖 Explain this problem." }] }
    ]);
    const [isStreaming, setIsStreaming] = useState(false);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const onSubmit = async (data) => {
        const userMessage = {
            type: 'user_input',
            content: [{ type: 'text', text: data.message }]
        };

        const updatedMessages = [...messages, userMessage];
        // add an empty model message placeholder we'll keep appending to
        setMessages([...updatedMessages, { type: 'model_output', content: [{ type: 'text', text: '' }] }]);
        reset();
        setIsStreaming(true);

        try {
            const res = await fetch(`${axiosClient.defaults.baseURL}/ai/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include', // send auth cookies, same as axiosClient
                body: JSON.stringify({
                    messages: updatedMessages,
                    title: problem.title,
                    description: problem.description,
                    testCases: problem.visibleTestCases,
                    startCode: problem.startCode
                })
            });

            if (!res.ok || !res.body) throw new Error('Stream failed');

            const reader = res.body.getReader();
            const decoder = new TextDecoder();
            let done = false;

            while (!done) {
                const { value, done: readerDone } = await reader.read();
                done = readerDone;
                if (value) {
                    const chunk = decoder.decode(value, { stream: true });
                    setMessages(prev => {
                        const next = [...prev];
                        const last = next[next.length - 1];
                        next[next.length - 1] = {
                            ...last,
                            content: [{ type: 'text', text: last.content[0].text + chunk }]
                        };
                        return next;
                    });
                }
            }
        } catch (error) {
            console.error("API Error:", error);
            setMessages(prev => {
                const next = [...prev];
                next[next.length - 1] = {
                    type: 'model_output',
                    content: [{ type: 'text', text: "Error from AI Chatbot" }]
                };
                return next;
            });
        } finally {
            setIsStreaming(false);
        }
    };

    return (
        <div className="flex flex-col h-screen max-h-[80vh] min-h-[500px]">
            <div className="flex-1 overflow-y-auto px-4 py-6 space-y-5">
                {messages.map((msg, index) => {
                    const isUser = msg.type === "user_input";
                    const isLast = index === messages.length - 1;
                    const text = msg.content[0].text;

                    return (
                        <div key={index} className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}>
                            {!isUser && (
                                <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                    <Bot size={16} className="text-primary" />
                                </div>
                            )}

                            <div className={isUser
                                ? "max-w-[80%] bg-primary text-primary-content rounded-2xl rounded-tr-sm px-4 py-2.5"
                                : "max-w-[85%]"
                            }>
                                {!isUser && isLast && isStreaming && !text ? (
                                    <span className="inline-flex gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-base-content/40 animate-bounce [animation-delay:-0.3s]"></span>
                                        <span className="w-1.5 h-1.5 rounded-full bg-base-content/40 animate-bounce [animation-delay:-0.15s]"></span>
                                        <span className="w-1.5 h-1.5 rounded-full bg-base-content/40 animate-bounce"></span>
                                    </span>
                                ) : (
                                    <MarkdownMessage text={text} />
                                )}
                            </div>

                            {isUser && (
                                <div className="w-7 h-7 rounded-full bg-base-300 flex items-center justify-center shrink-0 mt-0.5">
                                    <User size={16} className="text-base-content/70" />
                                </div>
                            )}
                        </div>
                    );
                })}
                <div ref={messagesEndRef} />
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="sticky bottom-0 p-4 bg-base-100 border-t"
            >
                <div className="flex items-center gap-2">
                    <input
                        placeholder="Ask me anything"
                        className="input input-bordered flex-1 rounded-full"
                        disabled={isStreaming}
                        {...register("message", { required: true, minLength: 2 })}
                    />
                    <button
                        type="submit"
                        className="btn btn-primary btn-circle"
                        disabled={errors.message || isStreaming}
                    >
                        <Send size={18} />
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ChatAi;