require("dotenv").config();
const API = process.env.OPENROUTER_API_KEY;
const API_URL = "https://openrouter.ai/api/v1/chat/completions";


async function getAnswer(question){
    try{
    const response = await fetch(API_URL,{
        method:"POST",
        headers:{
            "content-type":"application/json",
            "Authorization":`Bearer ${API}`
        },

        body: JSON.stringify({
            model:"openai/gpt-oss-120b:free",
            messages:[{
                role: "user",
                content:question
            }],
            max_tokens:600
        })
    });

    if(!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || `API Error: ${response.status}`);
    }

    const data = await response.json();
    const answer = data.choices[0].message.content;
    console.log(answer);
    return answer;
}
catch{
    console.error("Error",error.message);
}
}

