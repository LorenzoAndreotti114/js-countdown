function startCount () {
    startCountdown = setInterval(function(){

        if ( checker === true) {
            minimumSeconds = maxSeconds;
        }
        else {
            minimumSeconds = 0
            if (maxSeconds > minimumSeconds) {
                maxSeconds--;
                console.log(maxSeconds);

                timerInput.innerText = maxSeconds;
            }
            else if (maxSeconds === 0) {
                finalMsgInput.classList.remove("hide");
                timerInput.classList.add("hide");
            }
        }
            
        startBtnInput.classList.add("hide");

    }, 1000);
}

function resetCount () {
    location.reload();
}

function stopCount () {

   if (checker === false) {
    checker = true;
   }
   else if (checker === true) {
    checker = false
   }
   console.log("ciao");
   console.log(checker);
}