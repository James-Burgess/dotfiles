document.addEventListener("selectionchange",function(){var a=window.getSelection().toString().trim();chrome.extension.sendMessage({request:"updateContextMenu",selection:a})});