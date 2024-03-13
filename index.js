import express from 'express';
import bodyParser from 'body-parser'
import {GoogleGenerativeAI} from "@google/generative-ai";

const app = express()
const PORT =3000;

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))


var message = ""




//Generative AI - code

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run(user_input) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt = String(user_input);

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
  message = text; 
}





app.get("/",(req,res) => {
    res.render('index.ejs',{
        output: message
    })
})

app.post("/submit",async (req,res) => {
    console.log(req.body)
    const user_input = req.body['prompt']
    try{
        await run(user_input);
        res.redirect("/");
    }catch(error){
        console.log(error);
        res.status(500).send("Internal Server Error")
    }
})

app.listen(PORT, (error) =>{ 
    if(!error) 
        console.log("Server is Successfully Running, and App is listening on port "+ PORT) 
    else 
        console.log("Error occurred, server can't start", error); 
    } 
); 