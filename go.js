browser.browserAction.onClicked.addListener((_) => {
    browser.tabs.executeScript({
        code: 'let vid = this.document.getElementsByTagName("video")[0];' +
        'vid.playbackRate = 16.00;'
    })
    console.log("script has been run");
});