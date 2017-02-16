// Copyright (c) 2017 Anish Thite

var linebreak = "<br />";
var today = new Date();
//get current day ( represented by a number)
function get_currentDay(){
    var currentDayNumber = today.getDay();
    return currentDayNumber;
}
//get current time
function get_currentTime(){

    var currentTimeFull = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var currentTime = currentTimeFull.substring(0,5);
    return currentTime;
}
function compute_NormalDay(){
    // var currentTime = get_currentTime();
    // var period;
    // if currentTime
    var schedule = "Period 1- 9:05, Period 2 - 10:08, Period 3 - 11:09, Period 4 - 12:25, Period 5 - 1:26, Period 6 - 2:30";
    document.getElementById("demo").innerHTML = schedule;
}
function test(){

document.getElementById("demo").innerHTML = "hello";

}   

//display
 window.onload = function() {

     document.getElementById('thing').onclick = compute_NormalDay;
}
 