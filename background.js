var closeAllOnLeftFunction = function(tab) {
    chrome.tabs.query({currentWindow: true}, function(arrayOfTabs) {
    for (var i = 0; i < tab.index; i++)
    {
        if (arrayOfTabs[i].id != null && arrayOfTabs[i].id != chrome.tabs.TAB_ID_NONE)
        {
            chrome.tabs.remove(arrayOfTabs[i].id);
        }
    }
  });
};


chrome.browserAction.onClicked.addListener(function(tab) {
  closeAllOnLeftFunction(tab);
});

chrome.commands.onCommand.addListener(function(command) {
    chrome.tabs.getSelected(function(tab) {
        closeAllOnLeftFunction(tab);
    });
});