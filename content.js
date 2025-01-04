function addRecentSearchButton() {
    const targetContainer = document.querySelector(".flex.gap-x-1");
  
    if (targetContainer) {
      if (!document.querySelector("#recent-search-btn")) {
        const button = document.createElement("button");
        button.textContent = "Get Recent Search";
        button.id = "recent-search-btn";
  
        // Style the button
        Object.assign(button.style, {
          backgroundColor: "transparent",
          border: "2px solid white",
          color: "white",
          padding: "5px 15px",
          fontSize: "14px",
          borderRadius: "14px",
          cursor: "pointer",
          transition: "all 0.3s ease",
        });
  
        // Hover effects
        button.addEventListener("mouseenter", () => {
          button.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
        });
        button.addEventListener("mouseleave", () => {
          button.style.backgroundColor = "transparent";
        });
  
        // Fetch and inject the recent search on click
        button.addEventListener("click", () => {
          chrome.storage.local.get(['searchQueue'], (result) => {
            const searchQueue = result.searchQueue || [];
            if (searchQueue.length > 0) {
              const lastSearch = searchQueue[searchQueue.length - 1];
              injectTextIntoInput(lastSearch);
            } else {
              alert("No recent searches found!");
            }
          });
        });
  
        targetContainer.appendChild(button);
      }
    }
  }
  
  function injectTextIntoInput(text) {
    const inputElement = document.querySelector("textarea");
  
    if (inputElement) {
      inputElement.focus();
      document.execCommand("insertText", false, text);
      console.log("Text injected successfully:", text);
    } else {
      console.error("Input field not found.");
    }
  }
  
  // Observe DOM changes and add the button
  const observer = new MutationObserver(() => addRecentSearchButton());
  observer.observe(document.body, { childList: true, subtree: true });
  