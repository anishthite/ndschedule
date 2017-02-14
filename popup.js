// Copyright (c) 2017 Anish Thite

var linebreak = "<br />";
var today = new Date();
function get_currentDay(){
    var currentDayNumber = today.getDay();
    return currentDay;
}
function get_currentTime(){

    var currentTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    return currentTime;
}
function normal(){
    if (getcurrentDay() == 1)


}
document.write (get_currentDay());
document.write (linebreak);
document.write("The current time is: " + get_currentTime());