var timeLeft = 5;                                    
var timePause = 2;                                    
var ex = 1;                                          
var pause = false;                                    
var btnPause = document.getElementById("btnpause");   
var elem = document.getElementById('timer');         
var timerId = setInterval(countdown, 1000);           
    
  function countdown() {                              
    if (timeLeft == -1) {                             
      pagepause();                                    
    } 
    else if (!pause) {                               
      elem.innerHTML = timeLeft;                     
      timeLeft--;
    }
  return;
  }

  function pagepause(){
    if(ex < 13){
    document.getElementById(ex).style.display = "none";
    document.getElementById("pause").style.display = "block";
    tempspause();
    }

    else if (ex == 13){
      document.getElementById(ex).style.display = "none";
      location.assign("bravo.html");
      document.getElementById("btnpause").style.display = "none";
      document.getElementById("timer").style.display = "none";
      document.getElementById("pause").style.display = "none";
      document.getElementById("chrono").style.display = "none";
    }
  return;
  }

  function tempspause(){
    if (timePause == -1) {
      pageswitch();
    }     
    else if(!pause){
      elem.innerHTML = timePause;
      timePause--;
    }
  return;
  }

  function pageswitch() {
      ex++;
      document.getElementById("pause").style.display = "none";
      document.getElementById(ex).style.display = "block";
      timeLeft = 5;
      timePause = 2;
  return;
  }

  document.getElementById("btnpause").addEventListener("click", function () {
    if (pause == false){
      pause = true;
    }
    else {

      pause = false;
    }
  }); 
