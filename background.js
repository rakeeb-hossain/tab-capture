// Called when the user clicks on the extension

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.query({
        currentWindow: true
    }, function(tabs) {
        chrome.tabs.query({
            active:true,
            currentWindow:true
        }, function(curr) {
            chrome.tabs.sendMessage(curr[0].id, {"message": "clicked_browser_action", "content": tabs});
        });
    });
});