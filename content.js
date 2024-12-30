// Listen for messages from the background script (to copy text to clipboard)
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.textToCopy) {
      navigator.clipboard.writeText(message.textToCopy).then(() => {
        console.log("Text copied to clipboard:", message.textToCopy);
      });
    }
});

// Function to add the button to the target container
function addRecentSearchButton() {
    // Use a class selector that matches part of the dynamic class
    const targetContainer = document.querySelector("[class*='_prosemirror-parent_cy42l_1'][class*='text-token-text-primary'][class*='max-h-[25dvh]'][class*='max-h-52'][class*='overflow-auto'][class*='default-browser']");

    if (targetContainer && !document.querySelector('#recent-search-btn')) {
        // Create the button
        const button = document.createElement('button');
        button.textContent = "Get Recent Search";
        button.id = "recent-search-btn"; // Add an ID to prevent duplicates
        button.style.padding = "5px 10px";
        button.style.backgroundColor = "#007bff";
        button.style.color = "white";
        button.style.border = "none";
        button.style.borderRadius = "4px";
        button.style.cursor = "pointer";
        button.style.marginLeft = "10px";

        // Add click event to the button
        button.addEventListener('click', () => {
            // Request the most recent search from the background script
            chrome.runtime.sendMessage({ type: "getRecentSearch" }, (response) => {
                if (response && response.recentSearch) {
                    alert(`Recent Search: ${response.recentSearch}`);
                } else {
                    alert("No recent searches found!");
                }
            });
        });

        // Append the button to the parent container
        targetContainer.parentElement.appendChild(button);
    }
}

// Monitor the page's DOM for changes and add the button when possible
const observer = new MutationObserver(() => {
    addRecentSearchButton(); // Attempt to add the button
});

// Start observing the entire body for changes
observer.observe(document.body, { childList: true, subtree: true });

// Also, attempt to add the button after the page finishes loading
window.addEventListener('load', () => {
    addRecentSearchButton();
});
