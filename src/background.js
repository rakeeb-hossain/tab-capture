// Background Chrome API interactions

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === "open_tabs") {
            console.log("opening...");
        } else if (request.message === "get_tabs") {
            chrome.tabs.query({
                currentWindow: true
            }, function(tabs) {
                chrome.tabs.query({
                    active:true,
                    currentWindow:true
                }, function(curr) {
                    let tab_urls = [];
                    for (var i = 0; i < tabs.length; i++) {
                        tab_urls.push(tabs[i].url);
                    }
                    chrome.tabs.sendMessage(curr[0].id, {"message": "send_tabs", "content": tab_urls});
                });
            });
        } else if (request.message === "load_tabs") {
            chrome.storage.sync.get('tabs_1', function(tabs) {
                console.log(tabs);
            })
        }
    }
)