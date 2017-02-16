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
    var schedule = "Period 1- 9:07" + linebreak + "Period 2 - 10:08" + linebreak +  "Period 3 - 11:09" + linebreak + "Period 4 - 11:30, 11:49, 12:08, 12:27" + linebreak + "Period 5 - 1:28" + linebreak + "Period 6 - 2:30";
    document.getElementById("demo").innerHTML = schedule;
}
function compute_200Day(){
    // var currentTime = get_currentTime();
    // var period;
    // if currentTime
    var schedule = "Period 1- 9:01" + linebreak + "Period 2 - 9:56" + linebreak +  "Period 3 - 10:51" + linebreak + "Period 4 - 11:12, 11:31, 11:50, 12:09" + linebreak + "Period 5 - 1:26" + linebreak + "Period 6 - 2:30";
    document.getElementById("demo").innerHTML = schedule;
}
function test(){

document.getElementById("demo").innerHTML = "hello";

}   

//display
 window.onload = function() {

     document.getElementById('normalday').onclick = compute_NormalDay;
     document.getElementById('200').onclick = compute_200Day;
}
 