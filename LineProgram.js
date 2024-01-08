
function EquationSolver() {
    var Xcor = document.forms['info']['Xcor'].value;
    var Ycor = document.forms['info']['Ycor'].value;
    var Slope = document.forms['info']['Slope'].value;
    
    var b = Ycor - (Slope * Xcor);

    if (Slope == 0){
        document.getElementById("answer").innerHTML = "The equation of the line is: y = " + b;
    }
    else {document.getElementById("answer").innerHTML = "The equation of the line is: y = " + Slope + "x + " + b;
}
    // alert("The equation of the parabola is: y = " + Slope + "x + " + b);
    event.preventDefault();
}
function EquationSolver2() {
    var Xcor1 = document.forms['info2']['Xcor1'].value;
    var Ycor1 = document.forms['info2']['Ycor1'].value;
    var Xcor2 = document.forms['info2']['Xcor2'].value;
    var Ycor2 = document.forms['info2']['Ycor2'].value;
    var Slope2 = (Ycor2 - Ycor1) / (Xcor2 - Xcor1);
    var b = Ycor1 - (Slope2 * Xcor1);

    if (Slope2 == 0){
        document.getElementById("answer2").innerHTML = "The equation of the line is: y = " + b;
    }
    else{ 
        if (b>0){
            document.getElementById("answer2").innerHTML = "The equation of the line is: y = " + Slope2 + "x " + b;
        }
        if (b==0){    
            document.getElementById("answer2").innerHTML = "The equation of the line is: y = " + Slope2 + "x";
        }
        if (b<0){    
            document.getElementById("answer2").innerHTML = "The equation of the line is: y = " + Slope2 + "x - " + Math.abs(b);
        }
    }
    inputs();
    // alert("The equation of the parabola is: y = " + Slope + "x + " + b);
    e.preventDefault();

}

function inputs(){
    var Xcor = document.forms['info']['Xcor'].value;
    var Ycor = document.forms['info']['Ycor'].value;
    var Slope = document.forms['info']['Slope'].value;
    var Xcor1 = document.forms['info2']['Xcor1'].value;
    var Ycor1 = document.forms['info2']['Ycor1'].value;
    var Xcor2 = document.forms['info2']['Xcor2'].value;
    var Ycor2 = document.forms['info2']['Ycor2'].value;
    var Slope2 = (Ycor2 - Ycor1) / (Xcor2 - Xcor1);
    var b = Ycor1 - (Slope2 * Xcor1);
    var b2 = Ycor - (Slope * Xcor);
    if (Xcor1 == Xcor2){
        document.getElementById("answer2").innerHTML = "The equation of the line is: x = " + Xcor1;
    }
    event.preventDefault();
}
