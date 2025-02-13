import { GoogleGenerativeAI } from '@google/generative-ai';

const api_key = process.env.GOOGLE_GEMINI_API_KEY as string;
const genAI = new GoogleGenerativeAI(api_key);
const model = genAI.getGenerativeModel({
    model: 'gemini-2.0-flash',
    systemInstruction: `
        You are a highly experienced senior software developer with 10+ years of expertise in multiple programming languages, software architecture, security, and best coding practices. Your role is to **review** the provided code and generate a **detailed structured JSON response** covering multiple aspects of code quality.

        ## **Evaluation Criteria**
        Analyze the code based on the following key aspects:
        - **Errors:** Identify any syntax, logical, or runtime errors.
        - **Testing & Edge Cases:** Suggest necessary unit tests and edge cases the code should handle.
        - **Parameters & Input Validation:** Check if input parameters are validated properly and suggest improvements.
        - **Security Risks:** Detect any security vulnerabilities such as SQL injection, XSS, CSRF, improper authentication, or insecure data handling.
        - **Optimization:** Suggest performance improvements such as reducing time complexity, memory optimization, or using better algorithms.
        - **Scalability:** Assess if the code is scalable for large datasets or high traffic and suggest improvements if needed.
        - **Maintainability:** Check if the code follows clean coding principles (modularization, readability, meaningful naming, DRY, SOLID principles).
        - **Best Practices:** Suggest industry best practices, including design patterns, framework-specific optimizations, and adherence to language-specific conventions.
        - **Alternative Approaches:** If there’s a better way to implement the logic, suggest a more efficient approach.
    `
});

const generateResponse = async (prompt: string) => {
    if (!prompt) {
        return { success: false, error: 'Prompt is required' };
    }
    const modifiedPrompt =
        prompt +
        ` Return a JSON response using this schema:

{
  "errors": [
    {
      "line": <line_number>,
      "issue": "<description_of_error>",
      "suggestion": "<how_to_fix>"
    }
  ],
  "testing": [
    {
      "missing_cases": "<list_of_edge_cases_not_handled>",
      "test_suggestions": "<how_to_test_properly>"
    }
  ],
  "parameters": [
    {
      "issue": "<problem_with_input_parameters>",
      "suggestion": "<how_to_fix_input_validation>"
    }
  ],
  "security_risks": [
    {
      "risk": "<type_of_security_risk>",
      "affected_code": "<snippet_or_line>",
      "fix": "<recommended_fix>"
    }
  ],
  "optimization": [
    {
      "bottleneck": "<where_performance_issues_exist>",
      "improvement": "<suggested_optimization>"
    }
  ],
  "scalability": [
    {
      "issue": "<why_this_code_might_not_scale>",
      "suggestion": "<how_to_improve_scalability>"
    }
  ],
  "maintainability": [
    {
      "issue": "<problems_with_code_readability_or_structure>",
      "suggestion": "<how_to_make_code_easier_to_maintain>"
    }
  ],
  "best_practices": [
    {
      "recommendation": "<specific_best_practice_to_follow>",
      "benefit": "<why_this_is_better>"
    }
  ],
  "alternative_approaches": [
    {
      "suggestion": "<better_way_to_implement>",
      "reason": "<why_this_is_better>"
    }
  ],
  "final_verdict": {
    "overall_rating": "<rating_out_of_10>",
    "summary": "<brief_summary_of_review>",
    "next_steps": "<actions_to_improve_code>"
  }
}
`;

    const result = await model.generateContent(modifiedPrompt);
    if (!result) {
        return { success: false, error: 'Failed to generate response' };
    }
    return { success: true, result };
};

export default generateResponse;
