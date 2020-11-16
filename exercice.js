
    function addZero(i)
{
if (i<10)
     {
      i="0" + i;
     }
    return i;
    }
    setInterval(function() {
      function addZero(i)
{
if (i<10)
     {
     i="0" + i;
     }
return i;
}
       var d = new Date();
       var s =(d.getSeconds());
       var m =(d.getMinutes());
       var x = document.getElementById("timer");
       var c = addZero(30 - m) + ":" + addZero(60 - s);
       var d = addZero(60 - m) + ":" + addZero(60 - s);
       if (m < 30) {
           t = c
       }
       else {
           t = d
       }

        x.innerHTML = t;
    }, 250) 
       

            


