const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3001;
const cors = require("cors");
app.use(cors());

const USERS = [
  {
    email: "admin@example.com",
    password: "admin123",
    role: "admin",
    token: "adminToken"
  }
];

const QUESTIONS = require('./questions');


const SUBMISSION = [
  {
    problemSolution: `int x
    x= 10+1
    print(x)`,
    isAccepted: true
  }


];

// Middleware to parse JSON data in request body
app.use(express.json());

// Middleware to parse cookies
app.use(cookieParser());

// Token authentication middleware
const authenticateToken = (req, res, next) => {

  const email = req.body.email;
  const user = USERS.find(user => user.email === email);

  if (!user) {
    return res.status(401).json({ message: 'Unauthorized22' });
  }

  next();
};  

app.post('/signup', function (req, res) {

  //Decode request body and extract email and password
  const { email, password } = req.body;

  //Check if the user already exists in the USER array
  const existingUser = USERS.find(user => user.email === email);

  //Store email and password (as is for now) in the USERS array above (only if the user with the given email doesnt exist)
  if (existingUser) {
    return res.status(409).json({ message: 'User already exists' });
  }
  else {
    // Also send back a token (any random string will do for now)
    const randomNum = Math.floor(Math.random() * 1000);

    const token = email + randomNum;

    // Set the token as an HTTP cookie
    res.cookie('token', token, { sameSite: 'none', maxAge: 3600000 });

    //user details added to USER array
    const newUser = {
      email,
      password,
      role: "user",
      token // Assign the token to the user object
    };

    USERS.push(newUser);
    console.log(newUser);

    // return back 200 status code to the client
    return res.status(200).json({ message: 'Signup Successful' });
  }
})

app.post('/login', authenticateToken, function (req, res) {

  //Decode request body and extract email and password
  const { email, password } = req.body;

  // Find the user with the given email
  const user = USERS.find(user => user.email === email);

  // Check if the user with the given email exists in the USERS array
  // Also ensure that the password is the same
  if (user && password === user.password) {

    return res.status(200).json({ message: 'Login Successful' });
  }
  else {
    return res.status(401).send({ message: 'Unauthorized' });
  }

})

app.get('/problems', function (req, res) {

  //return the user all the questions in the QUESTIONS array
  return res.json(QUESTIONS);

})
app.get('/problems/:id', (req, res) => {
  const id = req.params.id;
  const problem = QUESTIONS.find(x => x.id === id);
  if (!problem) {
    return res.status(401).json({});
  }
  res.json({ problem })
})

app.get("/submissions", function (req, res) {
  // return the users submissions for this problem
  return res.json(SUBMISSION);
});


app.post("/submissions", function (req, res) {
  // Extract the submitted problem solution from the request body
  const { problemSolution } = req.body;

  // Randomly accept or reject the solution
  const isAccepted = Math.random() < 0.5; // Randomly generate a boolean value

  // Create a new submission object
  const submission = {
    problemSolution,
    isAccepted
  };

  // Store the submission in the SUBMISSION array
  SUBMISSION.push(submission);

  // Return a response indicating the status of the submission
  if (isAccepted) {
    res.status(200).json({message: "Submission accepted"});
  } else {
    res.status(400).json({message: "Submission rejected"});
  }

});

// Create a route that lets an admin add a new problem
app.post('/problems/add', function (req, res) {

  const token = req.headers.authorization || req.cookies.token;
  const user = USERS.find(user => user.token === token);
  // ensure that only admins can do that.
  if (user.role !== 'admin') {
    return res.status(401).send('Unauthorized');
  }

  else {
    const { title, description, testCases } = req.body;

    const newProblem = {
      title,
      description,
      testCases
    };

    QUESTIONS.push(newProblem);

    res.status(200).send('Problem added successfully');
  }

});


app.listen(port, function () {
  console.log(`Example app listening on port ${port}`)
})