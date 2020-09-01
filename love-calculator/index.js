//prompts for users to enter their names
var yourName = prompt("Enter your name:");
var crushName = prompt("Enter your crush's name:");

//generating a random number
var loveScore = Math.random();
loveScore = Math.floor(loveScore * 100 + 1);

//sending a message to user based on the score calculated
if (loveScore > 70) {
    alert("Congratulations " + yourName + " and " + crushName + "! Your love score is " + loveScore + "%. You love each other like Tamish loves cheese!"); 
}

if (loveScore > 30 && loveScore <= 70) {
    alert("Hi " + yourName + " and " + crushName + "! Your love score is " + loveScore + "%.");    
}

if (loveScore < 30) {
    alert("Hi " + yourName + " and " + crushName + "! Your love score is " + loveScore + "%. You go together like oil and water!");    
}
