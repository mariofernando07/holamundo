function validar() {
    let user = document.getElementById("usr");
    let pass = document.getElementById("pass");

    if(user.value == "admin" && pass.value == "admin") {

    } else {
        var msg = document.getElementById("msg");
        msg.innerHTML = "usuario o contraseña incorrectos";
        setTimeout(function() {
            msg.innerHTML = "";    
        }, 3000);
    }

}

//------------------------------------------------------------------------------------------------------------
var timeInterval;
var min = 0; 
var sec = 0;

function start() {
    timeInterval = setInterval(countSec, 1000);    
}

function pause() {
    if(timeInterval != null) {
        clearInterval(timeInterval);
    }
}

function stop() {
    if(timeInterval != null) {
        clearInterval(timeInterval);
    }
    putSec(0, 0);
    min = 0;
    sec = 0;
}

function countSec() {
    sec++;
    if(sec == 60) {
        min++;
        sec = 0;
    }
    putSec(min, sec);
}

function putSec(m, s) {
    var hora = document.getElementById("hora");
    hora.innerHTML = getFormat(m) + ":" + getFormat(s);
}

function getFormat(n) {
    var ns;
    if (n < 10) {
        ns = "0" + n;
    } else {
        ns = "" + n;
    }
    return ns;    
}