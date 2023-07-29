const readlineSync = require("readline-sync");
let score = 0;

console.log("\t\t\t\t\t\t-----------\n\t\t\t\t\t\t QuizVerse\n\t\t\t\t\t\t-----------\n");

const user = readlineSync.question("Please Enter your name: ");
console.log("\n\n\t\tHey!",user,"\"Welcome to the QuizVerse!\"\n\nSelect a topic from the list below to start the Quiz.\n\n\t\t\tEach topic has 5 questions")
console.log("\t\t\t\t\t------------")
console.log("\t\t\t\t\t a.Animals\n\t\t\t\t\t b.Countries\n\t\t\t\t\t c.Sports\n\t\t\t\t\t d.Colors")
console.log("\t\t\t\t\t------------")

const topic = readlineSync.question("Please Enter any \"('a','b','c','d')\" to select a topic: "); console.log(" ");
function play(question, answers, correctAnswer){
  console.log(question)
  for(let i=0; i<answers.length; i++){
    console.log(answers[i]);
  }
  
  const userAnswer = readlineSync.question("Enter your answer('a','b','c','d'): ").toLowerCase();

if(userAnswer.toLowerCase() === correctAnswer.toLowerCase()){
    console.log("You are right!");
    score = score + 1;
  } else{
    console.log("You are wrong!");
    score = score - 1;
  }
    console.log("Your Score is:",score)
    console.log("-------------")
}

// Array of Objects
const animals = [{
  question: "Q1. What animal is known for its long neck?",
  answers: ["a.Elephant","b.Giraffe","c.Lion","d.Penguin"],
  correctAnswer: "b",
},
{
  question: "Q2. What animal is known for its black and white stripes?",
  answers: ["a.Kangaroo","b.Elephant","c.Zebra","d.Penguin"],
  correctAnswer: "c",
},                 
{
  question: "Q3. What animal is the largest member of the cat family?",
  answers: ["a.Leopard","b.Cheetah","c.Lion","d.Tiger"],
  correctAnswer: "d",
},
{
  question: "Q4. What animal is famous for being slow-moving and carrying its home on its back?",
  answers: ["a.Hippopotamus","b.Cheetah","c.Elephant","d.Tortoise"],
  correctAnswer:"d"
},{
  question: "Q5. What animal is a marsupial and known for carrying its young in a pouch?",
  answers: ["a.Monkey","b.Panda","c.Kangaroo","d.Koala"],
  correctAnswer:"c"
}];


const countries = [{
  question: "Q1. What country is known for the Eiffel Tower?",
  answers: ["a.Italy","b.France","c.Spain","d.Germany"],
  correctAnswer: "b",
},
{
  question: "Q2. What country is famous for its pyramids and Sphinx?",
  answers: ["a.China","b.Greece","c.Brazil","d.Egypt"],
  correctAnswer: "d",
},                 
{
  question: "Q3. What country is home to the Great Wall?",
  answers: ["a.USA","b.China","c.Brazil","d.Russia"],
  correctAnswer: "b",
},
{
  question: "Q4.What country is famous for its Amazon rainforest?",
  answers: ["a.Brazil","b.South Africa","c.Canada","d.Australia"],
  correctAnswer:"a"
},{
  question: "Q5. What country is known for the Badshahi Mosque and the historic city of Lahore?",
  answers: ["a.Mexico","b.Russia","c.Pakistan","d.Australia"],
  correctAnswer:"c"
}];


const sports = [{
question: "Q1. What sport involves kicking a ball into a net to score goals?",
answers: ["a.Football","b.Basketball","c.Baseball","d.Tennis"],
correctAnswer: "a",
},
{
question: "Q2. What sport involves hitting a small ball into a series of holes with clubs?",
answers: ["a.Ice Hockey","b.Rugby","c.Cricket","d.Golf"], 
correctAnswer: "d",
},
{
question: "Q3. What sport is played on ice with skates and sticks?",
answers: ["a.Tennis","b.Swimming","c.Ice Hockey","d.Badminton"],
correctAnswer: "c",
},
{
question: "Q4: What sport is played with a bat and ball and involves running between wickets?",
answers: ["a.Baseball","b.Cricket","c.Volleyball","d.Basketball"],
correctAnswer:"b"
},
{
question: "Q5: What sport involves hitting a ball over a net with a racquet?",
answers: ["a.Badminton","b.Golf","c.Tennis","d.Ice Hockey"],
correctAnswer:"c"
}];


const colors = [{
question: "Q1. What color is a ripe banana?",
answers: ["a.Blue","b.Red","c.Yellow","d.Green"],
correctAnswer: "c",
},
{
question: "Q2. What color is the ocean on a sunny day?",
answers: ["a.Blue","b.Red","c.Green","d.Orange"],
correctAnswer: "a",
},
{
question: "Q3. What color is a fully bloomed rose?",
answers: ["a.Yellow","b.Blue","c.Green","d.Red"],
correctAnswer: "d",
},
{
question: "Q4. What color is the grass on a healthy lawn?",
answers: ["a.Red","b.Green","c.Blue","d.Yellow"],
correctAnswer:"b"
},
{
question: "Q5. What color is a stop sign?",
answers: ["a.Yellow","b.Blue","c.Red","d.Green"],
correctAnswer:"c"
}];

if(topic==="a"){
  // for loop
for(let i=0; i<5; i++){
  const currentQuestion = animals[i];
play(currentQuestion.question,currentQuestion.answers,currentQuestion.correctAnswer);
}
}else if(topic==="b") {
  for(let i=0; i<5; i++){
  const currentQuestion = countries[i];
play(currentQuestion.question,currentQuestion.answers,currentQuestion.correctAnswer);
}
}else if(topic==="c") {
  for(let i=0; i<5; i++){
  const currentQuestion = sports[i];
play(currentQuestion.question,currentQuestion.answers,currentQuestion.correctAnswer);
}
}else if(topic==="d") {
  for(let i=0; i<5; i++){
  const currentQuestion = colors[i];
play(currentQuestion.question,currentQuestion.answers,currentQuestion.correctAnswer);
}
}else{
  console.log("Invalid input!, Please Enter between a to d");
}



const highScores = [  
  {
    name: "waleed:",
    score: "5",
  },
  {
    name: "bot:",
    score: "5",
  }];


if(score===5){
  console.log("Hurray!, Congratulations! You have answered all questions correctly");
  console.log("-------------\nHigh Scores are: ")
  for(i=0; i<highScores.length; i++){
  const currentScore = highScores[i];
  console.log(currentScore.name, currentScore.score)
  }
  console.log("You:",score)
  console.log("-------------")
}else{
  console.log("Your final score is:",score)
  console.log("-------------")
}
