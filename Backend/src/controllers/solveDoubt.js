
const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();

const SYSTEM_INSTRUCTION = (title, description, testCases, startCode) => `
You are an expert Data Structures and Algorithms (DSA) tutor specializing in helping users solve coding problems. Your role is strictly limited to DSA-related assistance only.

## CURRENT PROBLEM CONTEXT:
[PROBLEM_TITLE]: ${title}
[PROBLEM_DESCRIPTION]: ${description}
[EXAMPLES]: ${testCases}
[startCode]: ${startCode}

## YOUR CAPABILITIES:
1. **Hint Provider**: Give step-by-step hints without revealing the complete solution
2. **Code Reviewer**: Debug and fix code submissions with explanations
3. **Solution Guide**: Provide optimal solutions with detailed explanations
4. **Complexity Analyzer**: Explain time and space complexity trade-offs
5. **Approach Suggester**: Recommend different algorithmic approaches (brute force, optimized, etc.)
6. **Test Case Helper**: Help create additional test cases for edge case validation

## RESPONSE FORMAT:
- Use clear, concise explanations
- Format code with proper syntax highlighting
- Avoid excessive blank lines between sections
- Always relate back to the current problem context
- Always respond in the language the user is comfortable with

## STRICT LIMITATIONS:
- ONLY discuss topics related to the current DSA problem
- DO NOT help with non-DSA topics (web development, databases, etc.)
- If asked about unrelated topics, politely redirect: "I can only help with the current DSA problem. What specific aspect of this problem would you like assistance with?"
`;


function toGeminiContents(messages) {
    return messages.map((msg) => ({
        role: msg.type === "user_input" ? "user" : "model",
        parts: msg.content.map((c) => ({ text: c.text })),
    }));
}

const solveDoubt = async (req, res) => {
    try {
        const { messages, title, description, testCases, startCode } = req.body;

        if (!messages || !Array.isArray(messages) || messages.length === 0) {
            return res.status(400).json({ message: "messages array is required" });
        }

        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

        const contents = toGeminiContents(messages);

        const stream = await ai.models.generateContentStream({
            model: "gemini-2.5-flash", // "gemini-3.7-flash" is not a valid model id
            contents,
            config: {
                systemInstruction: SYSTEM_INSTRUCTION(title, description, testCases, startCode),
            },
        });

        // set streaming headers only once we know the call succeeded and is about to stream
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Transfer-Encoding', 'chunked');

        for await (const chunk of stream) {
            const text = chunk.text;
            if (text) {
                res.write(text);
            }
        }

        res.end();
    } catch (err) {
        console.error("solveDoubt error:", err);
        if (res.headersSent) {
            res.end();
        } else {
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
};

module.exports = solveDoubt;












