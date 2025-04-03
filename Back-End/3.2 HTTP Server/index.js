import express from "express";
const app = express();
const port = 3000;
app.get("/",(req,res)=>{
    res.send("<h1>Hello World!!</h1>");
});
app.get("/contact",(req,res)=>{
    res.send("<h1 >U can CAll me 999075087</h1>");
});
app.get("/about",(req,res)=>{
    res.send("<h1 >Hii sanskar This side of pc</h1>");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
