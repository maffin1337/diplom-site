const express = require("express");
const db = require("./config/db")
const cors = require("cors")
const multer = require("multer")
const path = require("path")
const bodyParser = require("body-parser");
const session = require("express-session");

const app = express();
const PORT = 3002;
app.use(cors({
    origin: 'http://localhost:3000', // Указываем конкретный домен
    credentials: true // Устанавливаем credentials в true
}));
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
app.use(bodyParser.json());

app.use(session({
    secret: 'your_secret',
    resave: false,
    saveUninitialized: false
}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

app.post("/api/login", (req, res) => {
    const { email, password } = req.body;

    db.query("SELECT * FROM users WHERE email = ? AND password = ?", [email, password], (err, result) => {
        if (err) {
            res.status(500).send("Internal server error");
            throw err;
        }

        if (result.length > 0) {
            req.session.loggedIn = true;
            req.session.email = email;
            req.session.role = result[0].role;
            res.json({ role: result[0].role });
        } else {
            res.status(401).send("Unauthorized");
        }
    });
});

app.get('/api/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            res.status(500).send("Internal server error");
            throw err;
        }
        res.status(200).send("Logged out successfully");
    });
});

app.get("/api/checkLoggedIn", (req, res) => {
    if (req.session.loggedIn) {
        res.json({ loggedIn: true, role: req.session.role });
    } else {
        res.json({ loggedIn: false });
    }
});


app.post("/api/addcontest", (req, res)=> {
    
    const style = req.body.style;
    const numberName = req.body.numberName;
    const crewName = req.body.crewName;
    const director = req.body.director;
    const directorEmail = req.body.directorEmail
    const crewCount = req.body.crewCount;

    console.log(style,numberName,crewName,director,directorEmail,crewCount)

    db.query("INSERT INTO contest (Style, NumberName, CrewName, Director, DirectorEmail, CrewCount) VALUES (?,?,?,?,?,?)",[style,numberName,crewName,director,directorEmail,crewCount], (err,result)=> {
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

    db.query("INSERT INTO classes (ClassName, FullName) VALUES (?, ?)", [classes, fullName], (err, result) => {
        if(err){
            console.log(err)
            return;
        }
        console.log(result)
    })
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

app.post('/api/adduser', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query("INSERT INTO users (email, password) VALUES (?, ?)", [email, password], (err, result) => {
        if(err) {
            console.log(err)
            return;
        }
        console.log(result)
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})