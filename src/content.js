// content.js

// Save button event handler
var saveButton = document.getElementById("saveButton");
if (saveButton) {
    saveButton.addEventListener("click", function(e) {
        console.log("HELLO!");
        chrome.runtime.sendMessage({"message": "get_tabs"});
    });
}

// Load button event handler
var loadButton = document.getElementById("loadButton");
if (loadButton) {
    loadButton.addEventListener("click", function(e) {
        chrome.runtime.sendMessage({"message": "load_tabs"});
    });
}

// Event listeners from background.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === "clicked_browser_action") {
            console.log(request.content);
        } else if (request.message === "send_tabs") {
            chrome.storage.sync.set({"tabs_1": request.content}, function() {
                alert("Tabs saved!");
            });
        }
    }
)
  