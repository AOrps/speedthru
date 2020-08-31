console.log("Hello");

chrome.browserAction.onClicked.addListener((tab) => {
    browser.tabs.executeScript({
        code:`let vid = document.getElementsByTagName("video")[0];` +
        `vid.playbackRate = 15.00;`
    });
});

// chrome.browserAction.onClicked.addListener((tab) => {

//     console.log("Hello");
//     // browser.tabs.executeScript({
//     //     code: `let vid = document.getElementsByTagName("video")[0];` +
//     //     `vid.playbackRate = 16.00;`
//     // });
// });