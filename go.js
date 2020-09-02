browser.browserAction.onClicked.addListener((_) => {
    browser.tabs.executeScript({
        code: 'this.document.getElementsByTagName("video")[0].playbackRate = 15.00;'
    })
    console.log("script has been run");
});