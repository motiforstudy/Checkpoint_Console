import express from "express";
import cors from "cors";
import {promises as fs} from "fs";
// import  fs from "fs";

const app = express();
app.use(express.json());
app.use(cors());

let allData; 

await fs.readFile('../db.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File contents:', data);
    allData = data
});
// console.log(JSON.parse(allData));
console.log(allData);

app.listen(3000, ()=>{
    console.log("the server is ready: ");
})

app.post("/api/login", (req, res)=>{
    // for (let i of allData){
    //     console.log(i);
    // }
    const {username, password} = req.body;
    res.json({username: username, password: password})
})

app.get("/api/status", (req, res)=>{
    res.json({checkPoint: "", isOpen: "", trafficLevel: "", lastUpdated: ""})
})

app.get("/api/messages", (req, res)=>{
    res.send([1,2])
})

app.post("/api/messages", (req, res)=>{
    res.json("new message")
})