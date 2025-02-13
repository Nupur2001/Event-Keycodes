document.addEventListener("DOMContentLoaded", () => {
  let container = document.querySelector(".container");
  let pressAnyKeyContainer = document.querySelector(".pressAnyKeyContainer");
  let allEventCodes = document.querySelector(".allEventCodes");
  let eventKey = document.querySelector(".eventKey");
  let eventKeyCode = document.querySelector(".eventKeyCode");
  let eventCode = document.querySelector(".eventCode");
  let randomNumber=Math.floor(Math.random()*100)+1
  let randomAlphabet=Math.floor(Math.random()*26)+97
  

  document.addEventListener("keydown",(e)=>{
    allEventCodes.classList.add('active')
    pressAnyKeyContainer.classList.remove('active')
    eventKey.innerHTML=(String.fromCharCode(randomAlphabet))//event.key
    eventKeyCode.innerHTML=(randomNumber) //event.keyCode
    eventCode.innerHTML=(e.code)//event.code
  }
    )
});
