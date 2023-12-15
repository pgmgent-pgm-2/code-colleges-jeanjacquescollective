const path = require("path");
const fs = require("fs");

let documentPath = path.join(__dirname, "documents", "text.txt");

fs.readFile(documentPath, "utf8", (error,data) =>{
    if(error){
        console.log(error)
        return
    }
    console.log(data)
})

fs.writeFile(documentPath, "Aangepaste tekst", (error) => {
    if(error){
        console.log(error)
        return
    }
    console.log("Data is geschreven")
})

fs.readdir(__dirname, (error, bestanden) => {
    if(error){
        console.log(error)
        return
    }
    console.log(bestanden)
})