function BMI() {
    var h = document.getElementById('height').value;
    var w = document.getElementById('weight').value;
    var bmi = w/(h/100*h/100);
    var bmio = (bmi.toFixed(2));
    document.getElementById('result').innerHTML = "Your BMI IS " + bmio;
    if(bmio < 18.5) {
        document.getElementById('remarks').innerHTML = "You falls within the underweight range";
    }
    else if(bmio >= 18.5 && bmio <= 24.9) {
        document.getElementById('remarks').innerHTML = "You falls within the healthy weight range";
    }
    else if(bmio >= 25 && bmio <= 29.9){
        document.getElementById('remarks').innerHTML = "You falls within the overweight range";
    }
    else{
        document.getElementById('remarks').innerHTML = "You falls within the obesity range";
    }
}
