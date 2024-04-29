const express = require("express");
const db = require("./config/db")
const cors = require("cors")
const multer = require("multer")
const path = require("path")

const app = express();
const PORT = 3002;
app.use(cors());
app.use(express.json())

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({
    storage: storage
})

app.use('/uploads', express.static('uploads'));


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

app.get("/api/getnews", (req, res) => {
    db.query("SELECT * FROM news ORDER BY ID", (err, result) => {
        if(err){
            console.log(err)
            return;
        }
        res.send(result)
    });
});

app.get("/api/getnewsbyId/:id", (req, res) => {
    const id = req.params.id;
    db.query("SELECT * FROM news WHERE ID = ?", id, (err, result) => {
        if(err){
            console.log(err)
            return;
        }
        res.send(result)
    })
})

app.get("/api/getnewsmain", (req, res) => {
    db.query("SELECT * FROM (SELECT * FROM news ORDER BY ID DESC LIMIT 3) a ORDER BY ID", (err, result) => {
        if(err){
            console.log(err)
            return;
        }
        res.send(result)
    })
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

app.post('/api/postnews', (req, res) => {
    const title = req.body.title;
    const text = req.body.text;
    db.query("INSERT INTO news (Title, MainText) VALUES (?, ?)", [title, text], (err, result) => {
        if(err) {
            console.log(err)
            return;
        }
        console.log(result)
    })
})

app.post('/api/postpicture', upload.single('image'), (req, res) => {
    const image = req.file.filename;
    const title = req.body.title;
    db.query("UPDATE news SET Image = ? where Title = ?", [image, title], (err, result) => {
        if(err) {
            console.log(err);
            return;
        }
        console.log(result);
        // Send a response if needed
        res.send("File uploaded successfully!");
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})