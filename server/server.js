const express = require("express");
const morgan = require("morgan"); // logging middleware
const jwt = require("express-jwt");
const jsonwebtoken = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const postDao = require("./postDao.js");
const userDao = require("./user_dao.js");

const jwtSecret =
  "1234";
const expireTime = 300; //seconds
// Authorization error
const authErrorObj = {
  errors: [{ param: "Server", msg: "Authorization error" }],
};


const PORT = 3001;
const app = new express();

// Set-up logging
app.use(morgan("tiny"));

// Process body content
app.use(express.json());

/* LOG IN/OUT API FUNCTIONS */
// Authentication endpoint
app.post("/api/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(username);
  userDao
    .getUser(username)
    .then((user) => {
      console.log(user);
      if (user === undefined) {
        res.status(404).send({
          errors: [{ param: "Server", msg: "Invalid e-mail" }],
        });
      } else {
        if (!userDao.checkPassword(user, password)) {
          res.status(401).send({
            errors: [{ param: "Server", msg: "Wrong password" }],
          });
        } else {
          //AUTHENTICATION SUCCESS
          const token = jsonwebtoken.sign({ user: user.idUtente }, jwtSecret, {
            expiresIn: expireTime,
          });
          res.cookie("token", token, {
            httpOnly: true,
            sameSite: true,
            maxAge: 1000 * expireTime,
          });
          res.json({ idUtente: user.idUtente});
        }
      }
    })
    .catch(
      // Delay response when wrong user/pass is sent to avoid fast guessing attempts
      (err) => {
        new Promise((resolve) => {
          setTimeout(resolve, 1000);
        }).then(() => res.status(401).json(authErrorObj));
      }
    );
});

app.use(cookieParser());

app.post("/api/logout", (req, res) => {
  res.clearCookie("token").end();
});


///////FUNCTION WITHOUT AUTHENTICATION

//Prendere i post dell'utente
app.get('/api/post/:idUtente', (req, res) => {
  postDao.getPosts(req.params.idUtente)
    .then((posts) => {
    res.json(posts);
}) .catch((err) => {
          res.status(500).json({
              errors: [{'param': 'Server', 'msg': err}],
          });
      });
});


app.post('/api/post', (req,res) => {
  const post = req.body;
  if(!post){
      res.status(400).end();
  } else {
      postDao.createPost(post)
      .then((postId) => {
        res.status(201).json({"postId" : postId});
      })
      .catch((err) => {
          res.status(500).json({errors: [{'param': 'Server', 'msg': err}],})
      });
  }
});

app.post('/api/user', (req,res) => {
  const newAccount = req.body;
  if(!newAccount){
      res.status(400).end();
  } else {
      userDao.createUser(newAccount)
      .then((userId) => {
        res.status(201).json({"userId" : userId});
      })
      .catch((err) => {
          res.status(500).json({errors: [{'param': 'Server', 'msg': err}],})
      });
  }
});

app.get('/api/profile/:idUtente', (req, res) => {
  //console.log("lui");
  //console.log(req.params.idUtente);
  userDao.getProfile(req.params.idUtente)
    .then((profile) => {
    res.json(profile);
}) .catch((err) => {
          res.status(500).json({
              errors: [{'param': 'Server', 'msg': err}],
          });
      });
});



// AUTHENTICATED REST API endpoints

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}/`)
);

