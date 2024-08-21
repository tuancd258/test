chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
      chrome.notifications.create({
        type: 'basic',
        iconUrl: 'icon.png',
        title: 'Page Reloaded',
        message: `The page ${tab.title} was reloaded.`,
        priority: 2
      });
    }
  });
  