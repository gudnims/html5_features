/**
 * Created by gudni on 06-03-2017.
 */

if (localStorage.visits) {
} else {
    localStorage.visits = JSON.stringify([]);
}

//$(function() {
   // var visits = JSON.parse(localStorage.visits);
 //   if (visits.length > 15) {
   //     visits.pop();
   // }
   // var time = new Date();
   // var log = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + "<br>";
  //  visits.push(log);
    //setModalContent(visits);
  //  localStorage.visits = JSON.stringify(visits);
    //document.getElementById("showTime").innerHTML = visits + "<br>";
//});

function setModalContent(content) {
    var html = "<div class='text-center'>";
    content.reverse().forEach(function (text) {
        html += text;
    })
    html += "</div>";
    $('#modalContent').html(html);
    $('#visitModal').modal("show")
    content.reverse();
}