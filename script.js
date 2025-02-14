document.addEventListener("DOMContentLoaded", () => {
  let container = document.querySelector(".container");
  let pressAnyKeyContainer = document.querySelector(".pressAnyKeyContainer");
  let allEventCodes = document.querySelector(".allEventCodes");
  let eventKey = document.querySelector(".eventKey");
  let eventKeyCode = document.querySelector(".eventKeyCode");
  let eventCode = document.querySelector(".eventCode");

  document.addEventListener("keydown",(e)=>{
    allEventCodes.classList.add('active')
    pressAnyKeyContainer.style.display="none"
    eventKey.innerHTML=(e.key)//event.key
    eventKeyCode.innerHTML=(e.keyCode) //event.keyCode
    eventCode.innerHTML=(e.code)//event.code
    if (e.key===" ") {
      eventKey.innerHTML="Space"
    }
  }
    )
});
