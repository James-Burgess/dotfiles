var c = window.blocksByTabId = {};
chrome.runtime.onMessage.addListener(function(a, d, e) {
  var b = d.tab.id;
  switch(a.type) {
    case 'block':
      c[b] = c[b] || [];
      c[b].push({url:d.url, dataURL:a.dataURL, method:a.method, args:a.args, width:a.width, height:a.height});
      a = c[b].length;
      a = 1 === a ? 'CanvasFingerprintBlock blocked ' + a + ' potential canvas fingerprinting attempt on this page' : 'CanvasFingerprintBlock blocked ' + a + ' potential canvas fingerprinting attempts on this page';
      chrome.pageAction.show(b);
      chrome.pageAction.setTitle({tabId:b, title:a});
      chrome.pageAction.setPopup({tabId:b, popup:'popup.html#' + b});
      break;
    case 'reset':
      delete c[b];
  }
  e({});
});
chrome.tabs.onRemoved.addListener(function(a) {
  delete c[a];
});

