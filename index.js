// const http = require('http');  // import http module // common js module
// const os = require('os'); // import os module // common js module

// // create a server with response of Hello World
// const server =  http.createServer((req,res)=>{
//     res.write('<div><h1>Hello world</h1></div>');
//     res.end();
// })

// // console.log(os.cpus()); // get the cpu information

// console.log(os.userInfo());

// // listen to the server on port 3000 with localhost ip
// server.listen(3000, '127.0.0.1', ()=>{
//     console.log('Server is running on port 3000');
// })

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const User = require("./model/user");
const bcrypt = require("bcryptjs");
const app = express();
const jwt = require("jsonwebtoken");
const cors = require('cors');

const secretKey = process.env.JWT_SECRET;

// middleware -> what is middleware
// middleware is a function that has access to the request and response object
app.use(express.json());
app.use(cors())


// middleware to check the user authentication

function checkUserAuth(req, res, next){
  const token = req.headers.authorization;

  if(!token){
    return res.status(401).json({
      message: "Unauthorized"
    })
  }

  try {

    console.log(token);
    const extractToken = token.split(" ")[1];
    console.log(extractToken);
    const decodedData = jwt.verify(extractToken, secretKey);
    
    console.log(decodedData);
    req.user = decodedData;

    // check the user is exist or not

    const user = User.findById(decodedData.id);

    if(!user){
      return res.status(401).json({
        message: "Unauthorized" 
      })
    }
    next();

  } catch (err) {
    return res.status(401).json({
      message: "Unauthorized  " + err.message,
    });
  }
}

// connect to mongodb
async function connectToDb() {
  const connection = await mongoose.connect(process.env.MONGODB_URL);
  console.log("Connected to database");
}

connectToDb();

app.get("/", checkUserAuth, async (req, res) => {
  const data = await User.find();
  res.status(200).json({
    data,
  });
});

app.get("/home", (req, res) => {
  res.json({
    message: "Home Page",
  });
});

// params
app.get("/user/:id/", async (req, res) => {
  const data = await User.findById(req.params.id);
  res.status(200).json({
    data,
  });
});

// query
app.get("/user", async (req, res) => {
  const params = req.query;
  const data = await User.find(params);
  res.status(200).json({
    data,
  });
});

// api to get data from client

// 1. query
// 2. params
// 3. body

// post

app.post("/user", async (req, res) => {
  try {
    const data = await User.create(req.body);
    if (data) {
      res.status(201).json({
        message: "User created",
        data,
      });
    } else {
      res.status(400).json({
        message: "User not created",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: err.message,
    });
  }
});

// put
app.put("/user/:id", async (req, res) => {
  const id = req.params.id;
  const user = req.body;

  const response = await User.findByIdAndUpdate(id, user);

  const data = await User.findById(id);

  res.status(201).json({
    data,
  });
});

// delete
app.delete("/user/:id", async (req, res) => {
  const id = req.params.id;
  const response = await User.deleteOne({ _id: id });
  console.log(response);
  res.json({
    message: "User deleted",
  });
});

// user signup
app.post("/signup", async (req, res) => {
  // getting data from request
  const data = req.body;

  // check that user is already exist or not

  const isUserExist = await User.findOne({ email: data.email });

  if (isUserExist) {
    return res.status(400).json({
      message: "User already exist",
    });
  }

  // hash the password
  const salt = await bcrypt.genSalt(10);

  const hashedPassword = await bcrypt.hash(data.password, salt);

  const result = await User.create({
    name: data.name,
    email: data.email,
    password: hashedPassword,
    salt: salt,
  });

  if (result) {
    return res.status(201).json({
      message: "user created",
    });
  }

  res.status(400).json({
    message: "User not created",
  });
});

// user login

app.post("/login", async (req, res) => {
  const data = req.body;

  // user exist or not
  const isUserExist = await User.findOne({ email: data.email });

  if (!isUserExist) {
    return res.status(400).json({
      message: "User not exist",
    });
  }

  // check password
  const isValidPassword = await bcrypt.compare(
    data.password,
    isUserExist.password
  );

  if (!isValidPassword) {
    return res.status(400).json({
      message: "Invalid password",
    });
  }

  // generate token

  const token = jwt.sign(
    {
      email: isUserExist.email,
      id: isUserExist._id,
      name: isUserExist.name,
    },
    secretKey,
    { expiresIn: "1h" }
  );

  res.status(200).json({
    message: "Login success",
    token,
  });
});

// user update password

app.post("/update-password", async (req, res) => {
  const data = req.body;

  const isUserExist = await User.findOne({ email: data.email });

  if (!isUserExist) {
    return res.status(400).json({
      message: "User not exist",
    });
  }

  const hashedPassword = await bcrypt.hash(data.password, isUserExist.salt);

  const result = await User.findByIdAndUpdate(isUserExist._id, {
    password: hashedPassword,
  });

  if (result) {
    return res.status(201).json({
      message: "Password updated",
    });
  }
});


// get user profile 

app.get("/profile", checkUserAuth, async (req, res) => {
  console.log(req.user);
  res.status(200).json({
    user : req.user
  })
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
