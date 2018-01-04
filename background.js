'use strict';

let currentlySelectedEmoticon = EMOTICONS[0];

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  let data = {};
  if (request.command == COMMAND.SET_CURRENT) {
    currentlySelectedEmoticon = request.data;
  }
  if (request.command == COMMAND.GET_CURRENT_SELECTED) {
    data = currentlySelectedEmoticon;
  }
  sendResponse(data);
});

chrome.commands.onCommand.addListener((command) => {
  if (currentlySelectedEmoticon) sendEmoticon(currentlySelectedEmoticon);
});

function sendEmoticon(emoticon) {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, emoticon);
    });
}
