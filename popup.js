// Copyright (c) 2017 Anish Thite

var linebreak = "<br />";
var today = new Date();
function get_currentDay(){
    var currentDayNumber = today.getDay();
    return currentDayNumber;
}
function get_currentTime(){

    var currentTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    return currentTime;
}

function test(){

document.getElementById("demo").innerHTML = "hello";

}   
document.write (get_currentDay());
document.write (linebreak);
document.write("The current time is: " + get_currentTime());

 window.onload = function() {

     document.getElementById('thing').onclick = test;
}
 