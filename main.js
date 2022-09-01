var clock = document.querySelector('.clock');
function runClockCurrently() {
    setInterval(function(){
    var temp = new Date();
    var h = temp.getHours() < 10 ? '0' + temp.getHours() : temp.getHours();
    var m = temp.getMinutes() < 10 ? '0' + temp.getMinutes() : temp.getMinutes();
    var s = temp.getSeconds() < 10 ? '0' + temp.getSeconds() :  temp.getSeconds();
    clock.innerText = `${h} : ${m} : ${s}`;
}, 1);
};
runClockCurrently();
var hour = document.querySelector('#h');
var minute = document.querySelector('#m');
function showMenu() {
    for (var i = 24; i > 0; i--)
    {
        i = i < 10 ? "0" + i : i;
        hour.innerHTML = `${hour.innerHTML} <option value="${i}">${i}</option>`;
    }
    for (var i = 60; i >= 0; i--)
    {
        i = i < 10 ? "0" + i : i;
        minute.innerHTML = `${minute.innerHTML} <option value="${i}">${i}</option>`;
    }
}
showMenu();

var timeAlarm = {};
hour.oninput = function(e) {
    timeAlarm.h = e.target.value;
}
minute.oninput = function(e) {
    timeAlarm.m = e.target.value;
}

var btnSet = document.querySelector('.btn1');
var audio = new Audio('alarm_audio.mp3');
var check = true;
btnSet.addEventListener('click', function setAlarm(){
    if (btnSet.classList[1]=="disable")  
    {
        btnSet.classList.toggle("disable");
        btnSet.innerText = 'Set';
        audio.pause();
        check = false;
    }
    else 
    {
        if (timeAlarm.h != undefined && timeAlarm.m != undefined)
        {
            alert("Set Alarm successful!!!");
            setInterval( function (){
                if (clock.innerText == `${timeAlarm.h} : ${timeAlarm.m} : 00` && check == true)
                {
                    audio.play();
                }
            }, 0);
            btnSet.innerText = 'Clear';
            btnSet.classList.toggle("disable");
            check = true;
        }
        else
        {
            alert("You have't set an alarm yet!!!");
        }
    }
});


