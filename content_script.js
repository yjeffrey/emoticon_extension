'use strict';

function paste(content) {
    document.execCommand('insertText', false, content);
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    paste(request.val);
});
