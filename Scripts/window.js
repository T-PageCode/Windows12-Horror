function windowClose(closeWindow) {
    const closeWindowElements = closeWindow.forEach ? closeWindow : [closeWindow];
    closeWindowElements.forEach(closeWindowForEach => {
        closeWindowForEach.style.opacity = "0";
        closeWindowForEach.style.transform = "translate(-50%,-50%) scale(0.8)";
        setTimeout(() => {
            closeWindowForEach.style.visibility = "hidden";
        },500)
    });
}
function hiddenWindowMsgKeyWarning() {
    windowClose(windowMsgKeyWarning)
}