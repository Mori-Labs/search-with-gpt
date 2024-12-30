// Select the container with the specified class
const targetContainer = document.querySelector('._prosemirror-parent_cy42l_1.text-token-text-primary.max-h-[25dvh].max-h-52.overflow-auto.default-browser');

if (targetContainer) {
  // Create the button
  const button = document.createElement('button');
  button.textContent = "Get Recent Search";
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
