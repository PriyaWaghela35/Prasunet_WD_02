const navLinks = document.getElementById("nav-links")
const menuBtn = document.getElementById("menu-btn")
const menuBtnIcon = menuBtn.querySelector("i")

menuBtn.addEventListener("click", (e) =>{
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen?"ri-close-line":"ri-menu-line")
})

navLinks.addEventListener("click", (e) =>{
    navLinks.classList.remove("open")
    menuBtnIcon.setAttribute("class","ri-menu-line");
})


let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
let lapsBtn = document.getElementById('laps');


let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let timer = false;

startBtn.addEventListener('click', function(){
    if (!timer) {
        timer = true;
        stopWatch();
    }
});

stopBtn.addEventListener('click', function(){
    timer =  false;
});

resetBtn.addEventListener('click', function(){
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
    document.getElementById('laps-list').innerHTML = "";
});

lapsBtn.addEventListener('click',function(){
    let lapTime = document.getElementById('hr').innerHTML + ':' +
                    document.getElementById('min').innerHTML + ':' +
                    document.getElementById('sec').innerHTML + ':' +
                    document.getElementById('count').innerHTML ;
    let lapItem = document.getElementById('li');
    lapItem.innerText=lapTime;
    document.getElementById('lap-list').appendChild(lapItem);
});

function stopWatch() {
    if (timer){
        count ++;

        if (count == 100) {
            second++;
            count = 0;
        }
        if (second == 60) {
            minute++;
            second = 0;
        }
        if (minute == 60) {
           hour++;
           minute = 0;
           second = 0; 
        }
        
        let hrString = hour < 10 ? "0" + hour : hour;
        let minString = minute < 10 ? '0' + minute : minute;
        let secString = second < 10 ? '0' + second : second;
        let countString = count < 10 ? '0' + count : count;
        
        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('count').innerHTML = countString;
        
        setTimeout(stopWatch,10);
    }
}


function showTime() {
    
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    
    hours=hours < 10 ? "0" + hours : hours;
    minutes=minutes < 10 ? "0" + minutes : minutes;
    seconds=seconds < 10 ? "0" + seconds : seconds;
    
    let currentTime = hours + ':' + minutes + ":" + seconds;

    document.getElementById('clock').innerHTML = currentTime;
}
setInterval(showTime,1000);
showTime();

const scrollRevealOption = {
    distance:"50px",
    origin:"bottom",
    duration:1000,
};

ScrollRevealOption().reveal(".location",{
    ...scrollRevealOption,
    origin:"left",
    delay:5000,
});

ScrollRevealOption().reveal(".socials span",{
    ...scrollRevealOption,
    origin:"top",
    delay:5500,
    interval:500,
});
