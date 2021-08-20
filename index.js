var read = require("readline-sync");
const chalk = require("chalk");

var userName = ""
 userName = read.question("Please Enter your Name!  ");
  
 const questions  = [
   {
     question : "On which date we got Independence form British ",
     answer : "15aug1947",
   },{
   question : "How many year Britishers ruled India ?",
   answer : "200"},{
   question : "Who designed the national flag of India?",
   answer : "pingali venkaya",},{
     question : "In which year did the Quit India Movement begin?",
     answer : "1942",
   },{
     question : "What is the official approx. duration of the Indian National Anthem?",
     answer :  "52 seconds",
   },{
     question : "How many princely states were there in the country before Independence?" ,
     answer : "565",
   },{
     question : "What is the theme for Independence Day celebrations 2021?",
     answer : "nation first always first",
   },{
     question : "On Independence Day, the Prime Minister of India hoists our tricolour flag at:",
     answer : "red fort",
   },
 ];
   var score = 0 ;

 function  check(ans, n){
   if(ans.toUpperCase() === questions[n].answer.toUpperCase()){
     console.log(chalk.green.bold("Correct!"));
     score++;
   } else {
     console.log(
       chalk.red.bold("Incorrect!") + " " + chalk.underline("Correct answer is : " + questions[n].answer)
     );
     score;
   } 
   console.log("New Score is " + score );
 }

  
  console.log("Welcome to Independence day Quiz! Good Luck : ");
  for( let i = 0 ; i < questions.length ; i++){
    let ans = read.question(questions[i].question);
    check(ans , i );

  }
  console.log(chalk.bold("You have completed the Quiz")  );
   console.log(chalk.black.bold.bgYellow(`${userName}, Your final score is : `+ score ));