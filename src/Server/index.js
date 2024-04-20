const express = require("express");
const db = require("./config/db")
const cors = require("cors")

const app = express();
const PORT = 3002;
app.use(cors());
app.use(express.json())

app.post("/api/addcontest", (req, res)=> {
    
    const style = req.body.style;
    const numberName = req.body.numberName;
    const crewName = req.body.crewName;
    const director = req.body.director;
    const crewCount = req.body.crewCount;

    console.log(style,numberName,crewName,director,crewCount)

    db.query("INSERT INTO contest (Style, NumberName, CrewName, Director, CrewCount) VALUES (?,?,?,?,?)",[style,numberName,crewName,director,crewCount], (err,result)=> {
        if(err) {
            console.log(err)
            return;
        }
        console.log(result)
    });
})

app.post("/api/addclass", (req, res) => {
    
    const classes = req.body.classes;
    const fullName = req.body.fullName;

    console.log(classes, fullName)

    switch (classes) {
        case 'dance_class10':
            db.query("INSERT INTO dance_class10 (FullName) VALUES (?)", [fullName], (err, result) => {
                if (err) {
                    console.log(err)
                    return;
                }
                console.log(result)
            });
            break;
        case 'dance_class11':
            db.query("INSERT INTO dance_class11 (FullName) VALUES (?)", [fullName], (err, result) => {
                if (err) {
                    console.log(err)
                    return;
                }
                console.log(result)
            });
            break;
        case 'dance_class12':
            db.query("INSERT INTO dance_class12 (FullName) VALUES (?)", [fullName], (err, result) => {
                if (err) {
                    console.log(err)
                    return;
                }
                console.log(result)
            });
            break;
        case 'art_class10':
            db.query("INSERT INTO art_class10 (FullName) VALUES (?)", [fullName], (err, result) => {
                if (err) {
                    console.log(err)
                    return;
                }
                console.log(result)
            });
            break;
        case 'art_class11':
            db.query("INSERT INTO art_class11 (FullName) VALUES (?)", [fullName], (err, result) => {
                if (err) {
                    console.log(err)
                    return;
                }
                console.log(result)
            });
            break;
        case 'art_class12':
            db.query("INSERT INTO art_class12 (FullName) VALUES (?)", [fullName], (err, result) => {
                if (err) {
                    console.log(err)
                    return;
                }
                console.log(result)
            });
            break;
        case 'art_class13':
            db.query("INSERT INTO art_class13 (FullName) VALUES (?)", [fullName], (err, result) => {
                if (err) {
                    console.log(err)
                    return;
                }
                console.log(result)
            });
            break;
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})