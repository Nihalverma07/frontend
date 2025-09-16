var start = document.querySelector("#start");
var stop = document.querySelector("#stop");
var reset = document.querySelector('#reset')
var h3 = document.querySelector("h3");
var count = 0;
var int;
start.addEventListener('click', function () {
    int = setInterval(function () {
        h3.textContent = count;
        count++;
        console.log(count)
    }, 1000)
})

stop.addEventListener('click', function () {
    clearInterval(int);
})

reset.addEventListener('click', function () {
    clearInterval(int);
    count = 0;
    h3.textContent = count;
})