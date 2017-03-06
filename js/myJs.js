/**
 * Created by gudni on 06-03-2017.
 */

var timeLog;
$(function(){
    var log = new Date();
    timeLog = log.getHours() + ":" + log.getMinutes() + ":" + log.getSeconds();
    $("#showTime").html(timeLog);

    visitLog(timeLog);
});

function visitLog(timeLog){

    if(typeof(Storage) !== "undefined"){
        if(localStorage.visitlog){
            localStorage.visitlog = localStorage.visitlog + "<br>" + timeLog;
        }else{
            localStorage.visitlog = timeLog;
        }
        document.getElementById("showTime").innerHTML = "You have seen this shit " + localStorage.visitlog;
    }else {
        document.getElementById("showTime").innerHTML = "Shit does not work";
    }
}