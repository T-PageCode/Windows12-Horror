const win12logo = document.getElementById("win12-logo");
const setup = document.getElementById("setup-div");
const progressBar = document.getElementById("progress-bar-div");
const startup = document.getElementById("startup-div")
setTimeout(() => {
    progressBar.style.opacity = "0";
    win12logo.style.opacity = "0";
    setTimeout(() => {
        progressBar.style.visibility = "hidden";
        win12logo.style.visibility = "hidden";
    },500)
    setTimeout(() => {
        win12logo.style.opacity = "0";
        startup.style.opacity = "0";
        setTimeout(() => {
            startup.style.visibility = "hidden";
        },500)
    },2000)
},11000)