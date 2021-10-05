"use strict"

var hh = 0;
var mm = 0;
var ss = 0;

var time = 1000;    // 1000 == 1 segundo
var currentTime;

var counter = document.querySelector('.counter');   // contador

var timers = document.querySelectorAll('.timer');

function Time30(){

    stop();     // limpa caso escolha outro timer

    mm = 30;
    counter.innerText = "00"+":"+mm+":"+"00";

    timers[0].classList.add("selected-button");
    timers[1].classList.remove("selected-button");
    timers[2].classList.remove("selected-button");
}

function Time15(){

    stop();     // limpa caso escolha outro timer

    mm = 15;
    counter.innerText = "00"+":"+mm+":"+"00";

    timers[0].classList.remove("selected-button");
    timers[1].classList.add("selected-button");
    timers[2].classList.remove("selected-button");
}

function Time5(){

    stop();     // limpa caso escolha outro timer

    mm = 5;
    counter.innerText = "00"+":"+"0"+mm+":"+"00";

    timers[0].classList.remove("selected-button");
    timers[1].classList.remove("selected-button");
    timers[2].classList.add("selected-button");
}

function start(){
    //currentTime = setInterval(stopwatch, time);             // começa contar o tempo

    currentTime = setInterval(timer, time);             // começa subtrair o tempo

    counter.classList.remove("redColor");
    //counter.className = "";    // limpa tudo
}

function pause(){
    counter.classList = "redColor";
    clearInterval(currentTime);
}

function stop(){
    clearInterval(currentTime);

    hh = 0;
    mm = 0;
    ss = 0;

    counter.innerText = '00:00:00';
}

// começa contar o tempo
function stopwatch(){

    ss++;

    if(ss == 60){
        ss = 0;
        mm++;

        if(mm==60){
            mm = 0;
            hh++;
        }
    }

    var format = (hh < 10 ? '0'+hh : hh) + ':' + (mm < 10 ? '0'+mm : mm) + ':' + (ss < 10 ? '0'+ss : ss);
    counter.innerText = format;
}

// começa subtrair o tempo
function timer(){
    
    if(ss == 0){
        ss = 60;
        mm--;

        if(mm==60){
            mm = 0;
            hh--;
        }
    }

    ss--;

    var format = (hh < 10 ? '0'+hh : hh) + ':' + (mm < 10 ? '0'+mm : mm) + ':' + (ss < 10 ? '0'+ss : ss);
    counter.innerText = format;
}

Time30();