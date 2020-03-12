function solvePythagorean(){
    a = document.getElementById("leg1").value;
    b = document.getElementById("leg2").value;
    c = Math.sqrt((a**2)+(b**2));
    document.getElementById("pythagoreanANS").innerHTML = "Hypotenuse: " + c;
}
function solveSpeedFromDistance(){
    distance = document.getElementById("distance").value;
    time = document.getElementById("time").value;
    speed = distance/time;
    document.getElementById("speedANS").innerHTML = "Speed: " + speed;
}
function solveVoltageOhmsLaw(){
    amps = document.getElementById("amps").value;
    ohms = document.getElementById("ohms").value;
    volts = amps*ohms;
    document.getElementById("ohmsLawANS").innerHTML = "Voltage: " + volts;
}