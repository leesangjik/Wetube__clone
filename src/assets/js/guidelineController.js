const burgerIcon = document.getElementById("burgerIcon");
const guideLine = document.getElementById("guideLine");

const handleguideLineIcon = () => {
    if (burgerIcon.classList.contains("opened") === true) {
        burgerIcon.classList.replace("opened", "closed");
        guideLine.classList.replace("opened", "closed");
    } else {
        burgerIcon.classList.replace("closed", "opened");
        guideLine.classList.replace("closed", "opened");
    }
}

const init = () => {
    burgerIcon.addEventListener("click", handleguideLineIcon);
}

//init()