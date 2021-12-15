let daily = document.getElementById("daily");
let weekly = document.getElementById("weekly");
let monthly = document.getElementById("monthly");
var hoursDaily = document.getElementsByClassName("hours-daily");
let hoursWeekly = document.querySelectorAll(".hours-weekly");
let hoursMonthly = document.querySelectorAll(".hours-monthly");
let previousDaily = document.querySelectorAll(".previous-daily");
let previousWeekly = document.querySelectorAll(".previous-weekly");
let previousMonthly = document.querySelectorAll(".previous-monthly");

weekly.addEventListener("click", function(event){
	console.log("weekly clicked")
	for (i = 0; i < hoursWeekly.length; i++) {
        hoursWeekly[i].style.display = "block";
    }
    for (i = 0; i < hoursDaily.length; i++) {
        hoursDaily[i].style.display = "none";
    }
    for (i = 0; i < hoursMonthly.length; i++) {
        hoursMonthly[i].style.display = "none";
    }
    for (i = 0; i < previousWeekly.length; i++) {
        previousWeekly[i].style.display = "block";
    }
    for (i = 0; i < previousDaily.length; i++) {
        previousDaily[i].style.display = "none";
    }
    for (i = 0; i < previousMonthly.length; i++) {
        previousMonthly[i].style.display = "none";
    }
});

daily.addEventListener("click", function(event){
	console.log("weekly clicked")
	for (i = 0; i < hoursWeekly.length; i++) {
        hoursWeekly[i].style.display = "none";
    }
        for (i = 0; i < hoursMonthly.length; i++) {
        hoursMonthly[i].style.display = "none";
    }
    for (i = 0; i < hoursDaily.length; i++) {
        hoursDaily[i].style.display = "block";
    }
    for (i = 0; i < previousWeekly.length; i++) {
        previousWeekly[i].style.display = "none";
    }
    for (i = 0; i < previousDaily.length; i++) {
        previousDaily[i].style.display = "block";
    }
    for (i = 0; i < previousMonthly.length; i++) {
        previousMonthly[i].style.display = "none";
    }
});

monthly.addEventListener("click", function(event){
	console.log("weekly clicked")
	for (i = 0; i < hoursWeekly.length; i++) {
        hoursWeekly[i].style.display = "none";
    }
        for (i = 0; i < hoursMonthly.length; i++) {
        hoursMonthly[i].style.display = "block";
    }
    for (i = 0; i < hoursDaily.length; i++) {
        hoursDaily[i].style.display = "none";
    }
    for (i = 0; i < previousWeekly.length; i++) {
        previousWeekly[i].style.display = "none";
    }
    for (i = 0; i < previousDaily.length; i++) {
        previousDaily[i].style.display = "none";
    }
    for (i = 0; i < previousMonthly.length; i++) {
        previousMonthly[i].style.display = "block";
    }
});
