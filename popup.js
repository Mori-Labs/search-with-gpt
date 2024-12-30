document.addEventListener("DOMContentLoaded", () => {
    // Fetch the search queue from the background script
    chrome.runtime.sendMessage({ type: "getQueue" }, (response) => {
      const queueList = document.getElementById("queue");
      if (response && response.queue) {
        response.queue.forEach((item) => {
          const listItem = document.createElement("li");
          listItem.textContent = item;
          queueList.appendChild(listItem);
        });
      }
    });
  });
  