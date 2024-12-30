let searchQueue = []; // FIFO queue

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "searchWithGPT",
    title: "Search with GPT",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "searchWithGPT" && info.selectionText) {
    // Add selected text to the queue
    if (searchQueue.length >= 5) {
      searchQueue.shift(); // Remove the oldest item to maintain a max size of 5
    }
    searchQueue.push(info.selectionText);

    // Open ChatGPT in a new tab
    chrome.tabs.create({ url: "https://chat.openai.com" });
  }
});

// Listen for messages from the popup to get the queue
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "getQueue") {
    sendResponse({ queue: searchQueue });
  }
});
