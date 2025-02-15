const fetch = require('node-fetch');

// Function to get similarity from the new API
async function get(t1, t2) {
    const url = `https://twinword-text-similarity-v1.p.rapidapi.com/similarity/?text1=${encodeURIComponent(t1)}&text2=${encodeURIComponent(t2)}`;
    
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '9dfb1b688dmsh5b952b4b52d9a19p180f43jsn4f316fad48fc',  // Your new API key
            'x-rapidapi-host': 'twinword-text-similarity-v1.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();  // Parsing the response as JSON
        console.error('text similarity: ',result.similarity);
        return  result.similarity;  // Return the result (you can process the similarity score here if needed)
    } catch (error) {
        console.error(error);
    }
}

get('what is java','NA');
// Function to compare two sets of texts
async function compare(gpt, user) {
    let result = [];
    for (let i = 0; i < gpt.length; i++) {
        result[i] = await get(gpt[i], user[i]? user[i]:'NA');
        console.log(result[i]);
    }
    return result;  // Returns an array of similarity results
}

module.exports = compare;
