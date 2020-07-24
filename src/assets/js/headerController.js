const keyboard = document.getElementById("keyboardIcon");
const videoIcon = document.getElementById("videoIcon");
const videoMenu = document.getElementById("videoMenu");


const handleKeyboardClick = () => {
    //TO BE CONTINUE;
}

const handleVideoIconClick = () => {
    if (videoMenu.classList.contains("show") === false) {
        videoMenu.classList.replace("hidden", "show");
    } else if (videoMenu.classList.contains("show") === true) {
        videoMenu.classList.replace("show", "hidden");
    }
}

const init = () => {
    keyboard.addEventListener("click", handleKeyboardClick);
    videoIcon.addEventListener("click", handleVideoIconClick)

}
init()