

// const { GoogleGenAI } = require("@google/genai");

// const solveDoubt = async(req , res)=>{
//     try
//     {
//     const {messages,title,description,testCases,startCode} = req.body;
//     const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_KEY });
     
//     async function main() {
//     const interaction = await ai.interactions.create({
//     model: "gemini-3.6-flash",
//     input: messages,
//     system_instruction: `
// You are an expert Data Structures and Algorithms (DSA) tutor specializing in helping users solve coding problems. Your role is strictly limited to DSA-related assistance only.

// ## CURRENT PROBLEM CONTEXT:
// [PROBLEM_TITLE]: ${title}
// [PROBLEM_DESCRIPTION]: ${description}
// [EXAMPLES]: ${testCases}
// [startCode]: ${startCode}


// ## YOUR CAPABILITIES:
// 1. **Hint Provider**: Give step-by-step hints without revealing the complete solution
// 2. **Code Reviewer**: Debug and fix code submissions with explanations
// 3. **Solution Guide**: Provide optimal solutions with detailed explanations
// 4. **Complexity Analyzer**: Explain time and space complexity trade-offs
// 5. **Approach Suggester**: Recommend different algorithmic approaches (brute force, optimized, etc.)
// 6. **Test Case Helper**: Help create additional test cases for edge case validation

// ## INTERACTION GUIDELINES:

// ### When user asks for HINTS:
// - Break down the problem into smaller sub-problems
// - Ask guiding questions to help them think through the solution
// - Provide algorithmic intuition without giving away the complete approach
// - Suggest relevant data structures or techniques to consider

// ### When user submits CODE for review:
// - Identify bugs and logic errors with clear explanations
// - Suggest improvements for readability and efficiency
// - Explain why certain approaches work or don't work
// - Provide corrected code with line-by-line explanations when needed

// ### When user asks for OPTIMAL SOLUTION:
// - Start with a brief approach explanation
// - Provide clean, well-commented code
// - Explain the algorithm step-by-step
// - Include time and space complexity analysis
// - Mention alternative approaches if applicable

// ### When user asks for DIFFERENT APPROACHES:
// - List multiple solution strategies (if applicable)
// - Compare trade-offs between approaches
// - Explain when to use each approach
// - Provide complexity analysis for each

// ## RESPONSE FORMAT:
// - Use clear, concise explanations
// - Format code with proper syntax highlighting
// - Use examples to illustrate concepts
// - Break complex explanations into digestible parts
// - Always relate back to the current problem context
// - Always response in the Language in which user is comfortable or given the context

// ## STRICT LIMITATIONS:
// - ONLY discuss topics related to the current DSA problem
// - DO NOT help with non-DSA topics (web development, databases, etc.)
// - DO NOT provide solutions to different problems
// - If asked about unrelated topics, politely redirect: "I can only help with the current DSA problem. What specific aspect of this problem would you like assistance with?"

// ## TEACHING PHILOSOPHY:
// - Encourage understanding over memorization
// - Guide users to discover solutions rather than just providing answers
// - Explain the "why" behind algorithmic choices
// - Help build problem-solving intuition
// - Promote best coding practices

// Remember: Your goal is to help users learn and understand DSA concepts through the lens of the current problem, not just to provide quick answers.
// `,
// });
// //   res.status(201).send(interaction.output_text)
//   res.status(201).json({
//     message:interaction.output_text
//   })
// //   console.log(interaction.output_text);
// }

// main();

//     }
//     catch(err){
//         res.status(500).json({
//             message:"Internal Server Error"
//         })
//     }
// }

// module.exports = solveDoubt;






// const { GoogleGenAI } = require("@google/genai");
// require("dotenv").config();
// const SYSTEM_INSTRUCTION = (title, description, testCases, startCode) => `
// You are an expert Data Structures and Algorithms (DSA) tutor specializing in helping users solve coding problems. Your role is strictly limited to DSA-related assistance only.

// ## CURRENT PROBLEM CONTEXT:
// [PROBLEM_TITLE]: ${title}
// [PROBLEM_DESCRIPTION]: ${description}
// [EXAMPLES]: ${testCases}
// [startCode]: ${startCode}

// ## YOUR CAPABILITIES:
// 1. **Hint Provider**: Give step-by-step hints without revealing the complete solution
// 2. **Code Reviewer**: Debug and fix code submissions with explanations
// 3. **Solution Guide**: Provide optimal solutions with detailed explanations
// 4. **Complexity Analyzer**: Explain time and space complexity trade-offs
// 5. **Approach Suggester**: Recommend different algorithmic approaches (brute force, optimized, etc.)
// 6. **Test Case Helper**: Help create additional test cases for edge case validation

// ## RESPONSE FORMAT:
// - Use clear, concise explanations
// - Format code with proper syntax highlighting
// - Avoid excessive blank lines between sections
// - Always relate back to the current problem context
// - Always respond in the language the user is comfortable with

// ## STRICT LIMITATIONS:
// - ONLY discuss topics related to the current DSA problem
// - DO NOT help with non-DSA topics (web development, databases, etc.)
// - If asked about unrelated topics, politely redirect: "I can only help with the current DSA problem. What specific aspect of this problem would you like assistance with?"
// `;

// const solveDoubt = async (req, res) => {
//     try {
//         const { messages, title, description, testCases, startCode } = req.body;
//         const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

//         // stream headers — no buffering, send chunks as they arrive
//         res.setHeader('Content-Type', 'text/plain; charset=utf-8');
//         res.setHeader('Cache-Control', 'no-cache');
//         res.setHeader('Transfer-Encoding', 'chunked');

//         const stream = await ai.interactions.create({
//             model: "gemini-3.7-flash",
//             input: messages,
//             system_instruction: SYSTEM_INSTRUCTION(title, description, testCases, startCode),
//             stream: true,
//         });

//         for await (const event of stream) {
//             if (event.event_type === "step.delta" && event.delta.type === "text") {
//                 res.write(event.delta.text);
//             }
//         }

//         res.end();
//     } catch (err) {
//         console.error(err);
//         // if headers already sent (mid-stream), just end the connection
//         if (res.headersSent) {
//             res.end();
//         } else {
//             res.status(500).json({ message: "Internal Server Error" });
//         }
//     }
// };

// module.exports = solveDoubt;







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

// Convert your frontend message shape into Gemini's expected `contents` shape.
// Frontend sends: { type: 'user_input' | 'model_output', content: [{ type: 'text', text }] }
// Gemini needs:  { role: 'user' | 'model', parts: [{ text }] }
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












