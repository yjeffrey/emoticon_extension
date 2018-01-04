function loadEmoticons(query) {
  EMOTICONS.forEach((emoticon) => {
    let option = $('<div class="option"></div>');
    option.click(() => {
      chrome.runtime.sendMessage(new Message(COMMAND.SET_CURRENT, emoticon),
      updateSelected);
    });
    let optionKey = $(`<span class="name">${emoticon.name}</span>`);
    let optionVal = $(`<span class="value">${emoticon.val}</span>`);
    option.append(optionKey, [optionVal]);
    $('body').append(option);
  });
  updateSelected();
}

document.addEventListener('DOMContentLoaded', loadEmoticons);

function updateSelected() {
  chrome.runtime.sendMessage(
    new Message(COMMAND.GET_CURRENT_SELECTED),
    (selectedEmoticon) => {
      if (!selectedEmoticon) return;

      const options = $('div.option');
      for (let i = 0 ; i < options.length; ++i) {
        const element = $(options[i]);
        const keyName = element.find('span.name').text().trim();
        if (keyName === selectedEmoticon.name) {
          element.addClass('selected');
        } else {
          element.removeClass('selected');
        }
      }
    });
}
