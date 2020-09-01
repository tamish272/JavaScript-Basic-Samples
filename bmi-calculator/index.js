function bmiCalculator (weight, height) {
    var bmi = weight / (height * height); //formula for calculating Body Mass Index
    bmi = Math.round(bmi);
    
    var interpretation1 = "Your BMI is " + bmi + ", so you are underweight.";
    var interpretation2 = "Your BMI is " + bmi + ", so you have a normal weight.";
    var interpretation3 = "Your BMI is " + bmi + ", so you are overweight."; 
    
    //alerting the user with BMI score and weight category description
    if (bmi < 18.5) {
        return interpretation1;
    }
    
    if (bmi >= 18.5 && bmi <= 24.9) {
        return interpretation2;
    }
    
    if (bmi > 24.9) {
        return interpretation3;
    }
}