function updateClock(){
   var now = new Date();
   var hour = now.getHours();
   var minute = now.getMinutes();
   var second = now.getSeconds();
   if(hour < 10) hour = "0" + hour;
   if(minute < 10) minute = "0" + minute;
   if(second < 10) second = "0" + second;
   document.getElementById('my clock').innerHTML = hour + ":" + minute + ":" + second; 
}

function start(){
   setInterval("updateClock();", 1000);
   updateClock();
}

function start(){
   updateClock();
   setTimeout("start();", 1000);
}
