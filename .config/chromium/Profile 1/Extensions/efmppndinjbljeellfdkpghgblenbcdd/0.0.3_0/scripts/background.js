"use strict";var cmid;chrome.extension.onMessage.addListener(function(a){if("updateContextMenu"===a.request){var b="Measure: ",c=b+a.selection.length.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");if(c==b)null!=cmid&&(chrome.contextMenus.remove(cmid),cmid=null);else{var d={title:c,contexts:["selection"]};null!=cmid?chrome.contextMenus.update(cmid,d):cmid=chrome.contextMenus.create(d)}}});