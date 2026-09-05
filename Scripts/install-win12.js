const setupInstallNowWinLogo = document.getElementById("setup-installnow-winlogo");
const setupTitle = document.getElementById("setup-title");
const installNow = document.getElementById("install-now");
const inputKeyTitle = document.getElementById("input-key-title");
const inputKeyInputBox = document.getElementById("input-key-inputbox");
const installWin12ingPleaseWait = document.getElementById("install-win12ing-please-wait");
const installWin12Box = document.getElementById("install-win12-box-div");
const inputKeyIcon = document.getElementById("input-key-icon");
const iNoKey = document.getElementById("i-no-key");
const windowMsgKeyWarning = document.getElementById("window-msg-key-warning");
const keyExample = document.getElementById("key-example");
function install_win12() {
    setupInstallNowWinLogo.style.opacity = "0";
    setupTitle.style.opacity = "0";
    installNow.style.opacity = "0";
    setTimeout(() => {
        setupInstallNowWinLogo.style.visibility = "hidden";
        setupTitle.style.visibility = "hidden";
        setTimeout(() => {
            inputKeyTitle.style.visibility = "visible";
            inputKeyTitle.style.opacity = "1";
            inputKeyInputBox.style.visibility = "visible";
            inputKeyInputBox.style.opacity = "1";
            inputKeyIcon.style.visibility = "visible";
            inputKeyIcon.style.opacity = "1";
            iNoKey.style.visibility = "visible";
            iNoKey.style.opacity = "1";
            keyExample.style.visibility = "visible";
            keyExample.style.opacity = "1";
        },250)
        /* installNow.style.visibility = "visible";
        installWin12ingPleaseWait.style.visibility = "visible";
        installWin12ingPleaseWait.style.opacity = "1";
        setTimeout(() => {
            installWin12ingPleaseWait.style.top = "10%";
            setTimeout(() => {
                installWin12Box.style.visibility = "visible";
                installWin12Box.style.opacity = "1";
                installWin12Box.style.transform = "translate(-50%,-50%) scale(1)";
            },1000)
        },2000)
        */
    },500)
}
iNoKey.onclick = () => {
    windowMsgKeyWarning.style.visibility = "visible";
    windowMsgKeyWarning.style.opacity = "1";
    windowMsgKeyWarning.style.transform = "translate(-50%,-50%) scale(1)";
}
let input = document.getElementById("input-key-inputbox");
input.addEventListener("input",() => {
    input.value = input.value.replace(/[^a-zA-Z0-9]/g, "").slice(0, 25);
    input.value = input.value.replace(/(.{5})/g, "$1-").slice(0, 29);
});