console.log("Hello");

chrome.browserAction.onClicked.addListener((tab) => {
    if(typeof document != undefined) {
        console.log("world");
    }
});

// chrome.browserAction.onClicked.addListener((tab) => {

//     console.log("Hello");
//     // browser.tabs.executeScript({
//     //     code: `let vid = document.getElementsByTagName("video")[0];` +
//     //     `vid.playbackRate = 16.00;`
//     // });
// });