 /**=====================
     Timer js
==========================**/
 var second = 1000,
     minute = second * 60,
     hour = minute * 60,
     day = hour * 24;
 
 var tomorrow = new Date();
 tomorrow = new Date(tomorrow.setDate(tomorrow.getDate()+1));

 tomorrow.setHours(0,0,0,0);
 
 var countDown = tomorrow.getTime(),
     x = setInterval(function () {
         var now = new Date().getTime(),
             distance = countDown - now;

         (document.getElementById("days1").innerText = Math.floor(distance / day)),
         (document.getElementById("hours1").innerText = Math.floor(
             (distance % day) / hour
         )),
         (document.getElementById("minutes1").innerText = Math.floor(
             (distance % hour) / minute
         )),
         (document.getElementById("seconds1").innerText = Math.floor(
             (distance % minute) / second
         ));
     }, second);