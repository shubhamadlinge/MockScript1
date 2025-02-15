const { GoogleGenerativeAI } = require("@google/generative-ai");



async function generateContent(prompt, maxTokens = 50, maxChars = 200) {
    try {
        // Initialize Google Generative AI with the hardcoded API key
        const genAI = new GoogleGenerativeAI("AIzaSyBBMd9zZM3tHIDduek3EnptIJfZ0pYPRp4");

        // Select the model
        const model = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        // Modify the prompt to request a shorter answer
        const shortenedPrompt = `${prompt} (Please answer in approximately ${maxTokens} words or fewer.)`;

        // Generate content with modified prompt
        const result = await model.generateContent(shortenedPrompt);
        
        // Get the response text
        let responseText = result.response.text();

        // Truncate response to maxChars if necessary
        if (responseText.length > maxChars) {
            responseText = responseText.slice(0, maxChars) + '...';
        }

        console.log("Generated Response:", responseText);
        return responseText;
    } catch (error) {
        console.error("Error generating content:", error);
        return "Error: Could not generate content.";
    }
}

module.exports = generateContent;

generateContent('what is java ?')


async function test(arr){
  let ans=[];
  //run("you change your answer please dont do that");
  for(let i=0;i<arr.length;i++) {
ans[i]= await generateContent(arr[i]+" give only theory answer dont give code and give only 3 lines ");
ans[i]=ans[i].replace(/\n/g, '');
ans[i]=await ans[i].trim();
}

// console.log(ans);
return ans;

}
// test();

module.exports=test;