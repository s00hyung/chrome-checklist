let create_checkbox = document.getElementById('create_checkbox');
let remove_checkbox = document.getElementById('remove_checkbox');

let state = 0; //0 = uncheck, 1 = check

create_checkbox.onclick = function(element) {
    if (state == 0) {
        state = 1;
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.executeScript(tabs[0].id, {file: 'logic/create.js'});
        });
        chrome.browserAction.setIcon({path: "images/check_128.png"});
    }
};

remove_checkbox.onclick = function(element) {
    state = 0;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {file: 'logic/remove.js'});
    });
    chrome.browserAction.setIcon({path: "images/uncheck_128.png"});
    
};

