let maxSeconds = 10;
let minimumSeconds = 0
let checker = false;
finalMsgInput = document.getElementById("finalMsg");
timerInput = document.getElementById("timer");

// STARTING BTN
let startBtnInput = document.getElementById("startingBtn");
startBtnInput.addEventListener("click", startCount);

// RESET BTN
let resetBtnInput = document.getElementById("resetBtn");
resetBtnInput.addEventListener("click", resetCount);

// STOP BTN
let stopBtnInput = document.getElementById("stopBtn");
stopBtnInput.addEventListener("click", stopCount);