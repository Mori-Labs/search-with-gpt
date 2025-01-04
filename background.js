let searchQueue = [];

// On extension install or update
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "searchWithGPT",
    title: "Search with GPT",
    contexts: ["selection"],
  });

  // Initialize searchQueue from storage
  chrome.storage.local.get(['searchQueue'], (result) => {
    searchQueue = result.searchQueue || [];
  });
});

// Add selected text to the queue and open ChatGPT
chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "searchWithGPT" && info.selectionText) {
    if (searchQueue.length >= 5) {
      searchQueue.shift(); // Maintain max size of 5
    }
    searchQueue.push(info.selectionText);

    // Save updated queue to storage
    chrome.storage.local.set({ searchQueue });

    chrome.tabs.query({}, (tabs) => {
      const chatGPTTab = tabs.find((tab) =>
        tab.url.startsWith("https://chat.openai.com")
      );
      if (chatGPTTab) {
        chrome.tabs.update(chatGPTTab.id, { active: true });

        chrome.scripting.executeScript({
          target: { tabId: chatGPTTab.id },
          func: (text) => {
            const inputElement = document.querySelector("textarea");
            if (inputElement) {
              inputElement.value = text;
              inputElement.dispatchEvent(new Event("input", { bubbles: true }));
            }
          },
          args: [info.selectionText],
        });
      } else {
        chrome.tabs.create({ url: "https://chat.openai.com" });
      }
    });
  }
});

// Handle messages from content scripts
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "getQueue") {
    sendResponse({ queue: searchQueue });
  } else if (request.type === "getRecentSearch") {
    const recentSearch = searchQueue[searchQueue.length - 1] || null;
    sendResponse({ recentSearch });
  }
});
