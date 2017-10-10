var exposedFunctions =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = {

	// Returns an array of domains and subdomains (sub.sub.domain.com becomes [sub.sub.domain.com, sub.domain.com, domain.com])
	splitSubDomain(domain) {
		let relatedDomains = [];
		let splited = domain.split(".");
		relatedDomains.push(`${splited[splited.length - 2]}.${splited[splited.length - 1]}`);
		let j = 0;
		for (let i = splited.length - 3; i >= 0; i--) {
			relatedDomains.push(`${splited[i]}.${relatedDomains[j]}`);
			j++;
		}
		return relatedDomains;
	},

	// extract the main domain from sub domains (sub.sub.domain.com becomes domain.com)
	extractMainDomain(domain) {
		if (domain === "") {
			return "";
		}
		// Return the domain if it is an ip address
		let reIP = new RegExp("[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+");
		if (reIP.test(domain)) {
			return domain;
		}
		// Delete a '.' if domain contains it at the end
		let editedDomain = domain;
		if (editedDomain.charAt(editedDomain.length - 1) === ".") {
			editedDomain = domain.slice(0, domain.length - 1);
		}
		let re = new RegExp("[a-z0-9|-]+\.[a-z0-9|-]+$");
		return re.exec(editedDomain)[0];
	},

	// sub.sub.domain.com becomes sub.domain.com
	extractBaseDomain(domain) {
		if (domain === "") {
			return "";
		}
		// Return the domain if it is an ip address
		let reIP = new RegExp("[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+");
		if (reIP.test(domain)) {
			return domain;
		}
		// Delete a '.' if domain contains it at the end
		let editedDomain = domain;
		if (editedDomain.charAt(editedDomain.length - 1) === ".") {
			editedDomain = editedDomain.slice(0, editedDomain.length - 1);
		}
		let count = editedDomain.split(".").length - 1;
		let regString = "\.[a-z0-9|-]+$";
		if (count === 1) {
			regString = `[a-z0-9|-]+\.${regString}`;
		} else {
			for (let i = 1; i < count; i++) {
				regString = `[a-z0-9|-]+\.${regString}`;
			}
		}
		let re = new RegExp(regString);
		return re.exec(editedDomain)[0];
	},

	// Returns the host name of the url. Etc. "https://en.wikipedia.org/wiki/Cat" becomes en.wikipedia.org
	getHostname(urlToGetHostName) {
		let hostname;
		try {
			hostname = new URL(urlToGetHostName).hostname;
			// Strip "www." if the URL starts with it.
			hostname = hostname.replace(/^www[a-z0-9]?\./, "");
		} catch (error) {
			return "";
		}
		return hostname;
	},

	// Returns true if it is a webpage
	isAWebpage(URL) {
		if (URL.match(/^http:/) || URL.match(/^https:/)) {
			return true;
		}
		return false;
	}

};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

const greyPrefix = "-Grey";

class CacheService {
	constructor() {
		this.nameCacheMap = new Map();
		this.nameCacheMap.set("firefox-default", "Default");
		this.nameCacheMap.set(`firefox-default${greyPrefix}`, `Default${greyPrefix}`);
	}

	// Store contenxtual identity names in storage
	cacheContextualIdentityNames() {
		return browser.contextualIdentities.query({})
		.then((containers) => {
			containers.forEach((currentValue, index, array) => {
				this.nameCacheMap.set(currentValue.cookieStoreId, currentValue.name);
				this.nameCacheMap.set(currentValue.cookieStoreId + greyPrefix, currentValue.name + greyPrefix);
			});
			return browser.storage.local.set({containerCache: containers});
		});
	}

	// Populate the map from storage
	cacheContextualIdentityNamesFromStorage(items) {
		if (items.containerCache === undefined) {
			return this.cacheContextualIdentityNames();
		}
		items.containerCache.forEach((currentValue, index, array) => {
			this.nameCacheMap.set(currentValue.cookieStoreId, currentValue.name);
			this.nameCacheMap.set(currentValue.cookieStoreId + greyPrefix, currentValue.name + greyPrefix);
		});
		return Promise.resolve();
	}

	// Returns the name of the contexual identity name from the cookie store id
	getNameFromCookieID(id) {
		if (!this.nameCacheMap.has(id)) {
			return this.cacheContextualIdentityNames()
			.then(() => {
				return this.nameCacheMap.get(id);
			});
		}
		return this.nameCacheMap.get(id);
	}

}

module.exports = CacheService;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const UsefulFunctions = __webpack_require__(0);

class CleanupService {

	constructor() {
		this.recentlyCleaned = 0;
		this.setOfDeletedDomainCookies = new Set();
	}

	// Puts the domain in the right format for browser.cookies.clean()
	prepareCookieDomain(cookie) {
		let cookieDomain = cookie.domain;
		if (cookieDomain.charAt(0) === ".") {
			cookieDomain = cookieDomain.slice(1);
		}
		cookieDomain = cookie.secure ? `https://${cookieDomain}` : `http://${cookieDomain}`;
		return cookieDomain;
	}

	// This checks whether or not it's safe to delete a cookie depending on user settings (globalSubdomainEnabled, contextualIdentitiesEnabled), whitelist, and whether cookies cleanup was called at startup
	isSafeToClean(cleanupProperties, cookieProperties) {
		// This was a quick and easy way of avoiding another long if/else blocks (2*2=4 if/else rather that 2*2*2=8 if/else)
		// Basically hasHostInWhiteOrGrey and hasHostSubdomain takes in cookieDomainHost ie. drive.google.com and cookiesBaseDomainHost ie. google.com
		// If globalSubdomainEnabled is false, then cookiesDomainHost = cookiesBaseDomainHost
		let cookieBaseDomainHost = cleanupProperties.globalSubdomainEnabled ? cookieProperties.cookieBaseDomainHost : cookieProperties.cookieDomainHost;

		// Regular Cleanup (!startUp) uses hasHostInWhiteOrGrey() because it doesn't clean from those lists
		// StartUp Cleanup (startUp) uses hasHostSubdomain() only checking the whitelist
		if (cleanupProperties.contextualIdentitiesEnabled && !cleanupProperties.startUp) {
			return !cleanupProperties.whiteList.hasHostInWhiteOrGrey(cookieProperties.cookieDomainHost, cookieBaseDomainHost, cookieProperties.storeId) && !cleanupProperties.setOfTabURLS.has(cookieProperties.cookieMainDomainHost);
		} else if (!cleanupProperties.contextualIdentitiesEnabled && !cleanupProperties.startUp) {
			return 	!cleanupProperties.whiteList.hasHostInWhiteOrGrey(cookieProperties.cookieDomainHost, cookieBaseDomainHost) && !cleanupProperties.setOfTabURLS.has(cookieProperties.cookieMainDomainHost);
		} else if (cleanupProperties.contextualIdentitiesEnabled && cleanupProperties.startUp) {
			return !cleanupProperties.whiteList.hasHostSubdomain(cookieProperties.cookieDomainHost, cookieBaseDomainHost, cookieProperties.storeId) && !cleanupProperties.setOfTabURLS.has(cookieProperties.cookieMainDomainHost);
		}
		// !cleanupProperties.contextualIdentitiesEnabled && cleanupProperties.startUp
		return 	!cleanupProperties.whiteList.hasHostSubdomain(cookieProperties.cookieDomainHost, cookieBaseDomainHost) && !cleanupProperties.setOfTabURLS.has(cookieProperties.cookieMainDomainHost);
	}

	// Goes through all the cookies to see if its safe to clean
	cleanCookies(cookies, cleanupProperties) {
		for (let i = 0; i < cookies.length; i++) {
			let cookieProperties = cookies[i];
			cookieProperties.cookieDomain = this.prepareCookieDomain(cookies[i]);
			cookieProperties.cookieDomainHost = UsefulFunctions.getHostname(cookieProperties.cookieDomain);
			cookieProperties.cookieBaseDomainHost = UsefulFunctions.extractBaseDomain(cookieProperties.cookieDomainHost);
			cookieProperties.cookieMainDomainHost = UsefulFunctions.extractMainDomain(cookieProperties.cookieDomainHost);
			cookieProperties.preparedCookieDomain = cookieProperties.cookieDomain + cookies[i].path;

			if (this.isSafeToClean(cleanupProperties, cookieProperties)) {
				if (cleanupProperties.contextualIdentitiesEnabled) {
					// setOfDeletedDomainCookies.add(cookieDomainHost + ": " + cookies[i].storeId);
					let name = cleanupProperties.cache.getNameFromCookieID(cookieProperties.storeId);
					this.setOfDeletedDomainCookies.add(`${cookieProperties.cookieDomainHost} (${name})`);
				} else {
					this.setOfDeletedDomainCookies.add(cookieProperties.cookieDomainHost);
				}
				// url: "http://domain.com" + cookies[i].path
				browser.cookies.remove({
					url: cookieProperties.preparedCookieDomain,
					name: cookieProperties.name,
					storeId: cookieProperties.storeId
				});
				this.recentlyCleaned++;
			}
		}
		return Promise.resolve(this.setOfDeletedDomainCookies);
	}

	// Store all tabs' host domains to prevent cookie deletion from those domains
	returnSetOfOpenTabDomains() {
		return browser.tabs.query({"windowType": "normal"})
		.then((tabs) => {
			let setOfTabURLS = new Set();
			tabs.forEach((currentValue, index, array) => {
				if (UsefulFunctions.isAWebpage(currentValue.url)) {
					let hostURL = UsefulFunctions.getHostname(currentValue.url);
					hostURL = UsefulFunctions.extractMainDomain(hostURL);
					setOfTabURLS.add(hostURL);
				}
			});
			return Promise.resolve(setOfTabURLS);
		});
	}

	// Main function for cookie cleanup. Returns a list of domains that cookies were deleted from
	cleanCookiesOperation(cleanupPropertiesIn) {
		// Stores the deleted domains (for notification)
		this.setOfDeletedDomainCookies = new Set();
		this.recentlyCleaned = 0;

		return this.returnSetOfOpenTabDomains()
		.then((setOfTabURLSIn) => {
			let cleanupProperties = cleanupPropertiesIn;

			if (cleanupProperties.ignoreOpenTabs) {
				cleanupProperties.setOfTabURLS = new Set();
			} else {
				cleanupProperties.setOfTabURLS = setOfTabURLSIn;
			}

			// console.log(cleanupProperties);

			if (cleanupProperties.contextualIdentitiesEnabled) {
				// Clean cookies in different cookie ids using the contextual identities api
				let promiseContainers = [];
				cleanupProperties.cache.nameCacheMap.forEach((value, key, map) => {
					let promise = browser.cookies.getAll({storeId: key})
					.then((cookies) => {
						return this.cleanCookies(cookies, cleanupProperties);
					});
					promiseContainers.push(promise);
				});

				return Promise.all(promiseContainers)
				.then((values) => {
					return Promise.resolve(values[0]);
				});
			}
			// Clean the default cookie id container (Contextual identity off)
			return browser.cookies.getAll({})
			.then((cookies) => {
				return this.cleanCookies(cookies, cleanupProperties);
			});
		});
	}

}

module.exports = CleanupService;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

class NotificationService {
	constructor() {
		this.notifyMessage = "";
		this.cookieNotifyDone = "cookieNotifyDone";
	}

	// Creates a notification of what cookies were cleaned and how many
	notifyCookieCleanUp(recentlyCleaned, setOfDeletedDomainCookies) {
		// Format the string
		if (setOfDeletedDomainCookies.size > 0) {
			let stringOfDomains = "";
			let commaAppendIndex = 0;
			setOfDeletedDomainCookies.forEach((value1, value2, set) => {
				stringOfDomains += value2;
				commaAppendIndex++;
				if (commaAppendIndex < setOfDeletedDomainCookies.size) {
					stringOfDomains += ", ";
				}
			});
			// this.notifyMessage = recentlyCleaned + " Deleted Cookies from: " + stringOfDomains;
			this.notifyMessage = browser.i18n.getMessage("notificationContent", [recentlyCleaned, stringOfDomains]);
		}

		return browser.storage.local.get("notifyCookieCleanUpSetting")
		.then((items) => {
			if (setOfDeletedDomainCookies.size > 0 && items.notifyCookieCleanUpSetting) {
				return browser.notifications.create(this.cookieNotifyDone, {
					"type": "basic",
					"iconUrl": browser.extension.getURL("icons/icon_48.png"),
					"title": browser.i18n.getMessage("notificationTitle"),
					"message": this.notifyMessage
				});
			}
			return Promise.resolve();
		});
	}

}

module.exports = NotificationService;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

class StatsService {
	constructor(items) {
		this.cookieDeletedCounter = 0;
		if (items.cookieDeletedCounterTotal === undefined) {
			this.resetCounter();
		} else {
			this.cookieDeletedCounterTotal = items.cookieDeletedCounterTotal;
		}
	}

	// Increment the counter and store the counter to local after 1 minute
	incrementCounter(recentlyCleaned) {
		return browser.storage.local.get("statLoggingSetting")
		.then((items) => {
			if (items.statLoggingSetting === true) {
				this.cookieDeletedCounterTotal += recentlyCleaned;
				this.cookieDeletedCounter += recentlyCleaned;
				return this.storeCounterToLocal();
			}
			return Promise.resolve();
		});
	}

	// Resets the counter
	resetCounter() {
		browser.storage.local.set({cookieDeletedCounterTotal: 0});
		this.cookieDeletedCounterTotal = 0;
		this.cookieDeletedCounter = 0;
	}

	// Stores the total cookie entries deleted to local
	storeCounterToLocal() {
		return browser.storage.local.set({cookieDeletedCounterTotal: this.cookieDeletedCounterTotal});
	}
}

module.exports = StatsService;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

// defaultWhiteList is the defaultWhiteList in non Container Mode. Otherwise the default whitelist in ContainerMode is firefox-default.
const defaultWhiteList = "defaultWhiteList";
// Grey Prefix is a constant that is attached to the cookieStoreId to access the GreyList for that
const greyPrefix = "-Grey";

class WhiteListService {
	constructor(items, contextualIdentitiesEnabled = false, cache) {
		this.cookieWhiteList = new Map();
		// Sets up the whitelist for the map
		if (contextualIdentitiesEnabled) {
			cache.nameCacheMap.forEach((value, key, map) => {
				let cookieStoreId = key;
				if (items[cookieStoreId] !== undefined) {
					this.cookieWhiteList.set(cookieStoreId, new Set(items[key]));
				} else {
					this.cookieWhiteList.set(cookieStoreId, new Set());
				}
			});
			// contextualIdentitieies disabled
		} else {
			if (items[defaultWhiteList] !== undefined) {
				this.cookieWhiteList.set(defaultWhiteList, new Set(items[defaultWhiteList]));
			} else {
				this.cookieWhiteList.set(defaultWhiteList, new Set());
			}

			if (items[defaultWhiteList + greyPrefix] !== undefined) {
				this.cookieWhiteList.set(defaultWhiteList + greyPrefix, new Set(items[defaultWhiteList + greyPrefix]));
			} else {
				this.cookieWhiteList.set(defaultWhiteList + greyPrefix, new Set(items[defaultWhiteList + greyPrefix]));
			}
		}
	}

	// See if the set has the url depending on the cookieStoreId
	hasHost(url, cookieStoreId = defaultWhiteList) {
		if (!this.cookieWhiteList.has(cookieStoreId)) {
			this.cookieWhiteList.set(cookieStoreId, new Set());
			return false;
		}
		return this.cookieWhiteList.get(cookieStoreId).has(url);
	}

	// Checks if cookieDomainHost and cookieBaseDomainHost exists in a cookieStoreId
	hasHostSubdomain(cookieDomainHost, cookieBaseDomainHost, cookieStoreId = defaultWhiteList) {
		return this.hasHost(cookieDomainHost, cookieStoreId) || this.hasHost(cookieBaseDomainHost, cookieStoreId);
	}

	// Checks whether a given cookieDomainHost and cookieBaseDomainHost in either Grey/White List
	hasHostInWhiteOrGrey(cookieDomainHost, cookieBaseDomainHost, cookieStoreId = defaultWhiteList) {
		let otherList = this.returnOtherList(cookieStoreId);
		return this.hasHostSubdomain(cookieDomainHost, cookieBaseDomainHost, cookieStoreId) || this.hasHostSubdomain(cookieDomainHost, cookieBaseDomainHost, otherList);
	}

	// Return the Set as an array
	returnList(cookieStoreId = defaultWhiteList) {
		if (!this.cookieWhiteList.has(cookieStoreId)) {
			this.cookieWhiteList.set(cookieStoreId, new Set());
		}
		return Array.from(this.cookieWhiteList.get(cookieStoreId));
	}

	// Stores the set in the local storage of the browser as an array depending on the cookieStoreId
	storeLocal(cookieStoreId = defaultWhiteList) {
		let otherList = this.returnOtherList(cookieStoreId);
		// console.log(cookieStoreId);
		browser.storage.local.set({[cookieStoreId]: Array.from(this.cookieWhiteList.get(cookieStoreId))});
		browser.storage.local.set({[otherList]: Array.from(this.cookieWhiteList.get(otherList))});
	}

	// Add the url to the set depending on the cookieStoreId
	addURL(url, cookieStoreId = defaultWhiteList) {
		if (!this.cookieWhiteList.has(cookieStoreId)) {
			this.cookieWhiteList.set(cookieStoreId, new Set());
			this.cookieWhiteList.set(this.returnOtherList(cookieStoreId), new Set());
		}
		this.removeURLFromLists(url, cookieStoreId);
		this.cookieWhiteList.get(cookieStoreId).add(url);
		this.storeLocal(cookieStoreId);
	}

	// Remove the url from the set depending on the cookieStoreId
	removeURL(url, cookieStoreId = defaultWhiteList) {
		if (!this.cookieWhiteList.has(cookieStoreId)) {
			this.cookieWhiteList.set(cookieStoreId, new Set());
			this.cookieWhiteList.set(this.returnOtherList(cookieStoreId), new Set());
			return;
		}
		this.cookieWhiteList.get(cookieStoreId).delete(url);
		this.storeLocal(cookieStoreId);
	}

	// Remove the url from the white and grey lists
	removeURLFromLists(url, cookieStoreId = defaultWhiteList) {
		this.cookieWhiteList.get(cookieStoreId).delete(url);
		this.cookieWhiteList.get(this.returnOtherList(cookieStoreId)).delete(url);
	}

	// returns the id of the other list depending if it was greylist or whitelist
	returnOtherList(list) {
		if (list.endsWith(greyPrefix)) {
			return list.replace(greyPrefix, "");
		}
		return list + greyPrefix;
	}

	// Clears the set depending on the cookieStoreId
	clearURL(cookieStoreId = defaultWhiteList) {
		this.cookieWhiteList.get(cookieStoreId).clear();
		this.cookieWhiteList.get(this.returnOtherList(cookieStoreId)).clear();
		this.storeLocal(cookieStoreId);
	}

}

module.exports = WhiteListService;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* global browserDetect exposedFunctions*/
const UsefulFunctions = __webpack_require__(0);
const CacheService = __webpack_require__(1);
const CleanupService = __webpack_require__(2);
const NotificationService = __webpack_require__(3);
const StatsService = __webpack_require__(4);
const WhiteListService = __webpack_require__(5);

const greyPrefix = "-Grey";
const defaultWhiteList = "defaultWhiteList";

let cleanup = new CleanupService();
let notifyCleanup = new NotificationService();
let whiteList;
let statLog;
let cache;
let contextualIdentitiesEnabled = false;
let globalSubdomainEnabled;

// Logs the error
function onError(error) {
	console.error(`Error: ${error}`);
}

// Create an alarm delay before cookie cleanup
function createActiveModeAlarm() {
	return browser.storage.local.get("delayBeforeClean")
	.then((items) => {
		let minutes = parseFloat(items.delayBeforeClean);
		// console.log(minutes);
		// minutes = .1;
		// console.log("Create Active Alarm: " + minutes);
		browser.alarms.create("activeModeAlarm", {delayInMinutes: minutes});
		return Promise.resolve();
	}).catch(onError);
}

// Create an alarm when a tab is closed
function onTabRemoved(tabId, removeInfo) {
	return browser.alarms.get("activeModeAlarm")
	.then((alarm) => {
		// This is to resolve differences between Firefox and Chrome implementation of browser.alarms.get()
		// in chrome, it returns an array
		if (browserDetect() === "Firefox" && !alarm) {
			return createActiveModeAlarm();
		} else if (alarm.name !== "activeModeAlarm") {
			return createActiveModeAlarm();
		}
		return Promise.resolve();
	});
}

// Set background icon to orange
function setIconOrange(tab) {
	browser.browserAction.setIcon({
		tabId: tab.id, path: {48: "icons/icon_yellow_48.png"}
	});
	browser.browserAction.setBadgeBackgroundColor({
		color: "#e6a32e", tabId: tab.id
	});
}

// Set background icon to red
function setIconRed(tab) {
	browser.browserAction.setIcon({
		tabId: tab.id, path: {48: "icons/icon_red_48.png"}
	});
	browser.browserAction.setBadgeBackgroundColor({
		color: "red", tabId: tab.id
	});
}

// Set background icon to blue
function setIconDefault(tab) {
	browser.browserAction.setIcon({
		tabId: tab.id, path: {48: "icons/icon_48.png"}
	});
	browser.browserAction.setBadgeBackgroundColor({
		color: "blue", tabId: tab.id
	});
}

// Show the # of cookies in icon
function showNumberOfCookiesInIcon(tab) {
	return browser.cookies.getAll({
		domain: UsefulFunctions.getHostname(tab.url),
		storeId: tab.cookieStoreId
	})
	.then((cookies) => {
		browser.browserAction.setBadgeText({
			text: cookies.length.toString(),
			tabId: tab.id
		});
		return Promise.resolve();
	});
}

// Checks to see if these settings are in storage, if not create and set the default
function setPreferences(items) {
	if (items.delayBeforeClean === undefined) {
		browser.storage.local.set({delayBeforeClean: 1});
	}

	if (items.activeMode === undefined) {
		browser.storage.local.set({activeMode: false});
	}

	if (items.statLoggingSetting === undefined) {
		browser.storage.local.set({statLoggingSetting: true});
	}

	if (items.showNumberOfCookiesInIconSetting === undefined) {
		browser.storage.local.set({showNumberOfCookiesInIconSetting: true});
	}

	if (items.notifyCookieCleanUpSetting === undefined) {
		browser.storage.local.set({notifyCookieCleanUpSetting: true});
	}

	if (items.cookieCleanUpOnStartSetting === undefined) {
		browser.storage.local.set({cookieCleanUpOnStartSetting: false});
	}

	if (items.enableGlobalSubdomainSetting === undefined) {
		browser.storage.local.set({enableGlobalSubdomainSetting: true});
	}
	return Promise.resolve(items);
}

// Disable contextualIdentities features if not Firefox
function contextualCheck(items) {
	if (browserDetect() !== "Firefox" || items.contextualIdentitiesEnabledSetting === undefined) {
		contextualIdentitiesEnabled = false;
		browser.storage.local.set({contextualIdentitiesEnabledSetting: false});
	} else {
		contextualIdentitiesEnabled = items.contextualIdentitiesEnabledSetting;
	}
	return Promise.resolve(items);
}

// Create objects based on settings
function createObjects(items) {
	globalSubdomainEnabled = items.enableGlobalSubdomainSetting;

	if (items.activeMode === true) {
		exposedFunctions.enableActiveMode();
	} else {
		exposedFunctions.disableActiveMode();
	}

	statLog = new StatsService(items);

	if (contextualIdentitiesEnabled) {
		cache = new CacheService();
		return cache.cacheContextualIdentityNamesFromStorage(items)
		.then(() => {
			whiteList = new WhiteListService(items, contextualIdentitiesEnabled, cache);
			return Promise.resolve(items);
		}).catch(onError);
	}
	whiteList = new WhiteListService(items, contextualIdentitiesEnabled);
	return Promise.resolve(items);
}

// Sets up the background page on startup
function onStartUp(cookieCleanup = false) {
	return browser.storage.local.get()
	.then((items) => {
		return contextualCheck(items);
	})
	.then((items) => {
		return setPreferences(items);
	})
	.then((items) => {
		return createObjects(items);
	})
	.then((items) => {
		// Export these so that popup and settings page can access them
		module.exports.whiteList = whiteList;
		module.exports.contextualIdentitiesEnabled = contextualIdentitiesEnabled;
		module.exports.statLog = statLog;
		module.exports.cache = cache;

		// Do a cleanup on startup if active mode is on and if its not been called from the settings page
		if (items.activeMode && cookieCleanup) {
			setTimeout(() => {
				return exposedFunctions.cleanupOperation(items.cookieCleanUpOnStartSetting, true);
			}, 1250);
		}
		return Promise.resolve();
	})
	.catch(onError);
}

onStartUp(true)
.catch(onError);

// Export these in a global variable named exposedFunctions
module.exports = {
	onStartUp() {
		return onStartUp();
	},
	// Set the defaults
	setDefaults() {
		return browser.storage.local.clear()
		.then(() => {
			return onStartUp();
		});
	},

	cleanupOperation(ignoreOpenTabs = false, startUp = false) {
		return cleanup.cleanCookiesOperation({
			ignoreOpenTabs,
			whiteList,
			contextualIdentitiesEnabled,
			cache,
			startUp,
			globalSubdomainEnabled
		})
		.then((setOfDeletedDomainCookies) => {
			statLog.incrementCounter(cleanup.recentlyCleaned);
			return notifyCleanup.notifyCookieCleanUp(cleanup.recentlyCleaned, setOfDeletedDomainCookies);
		});
	},
	// Used in the popup
	getNotifyMessage() {
		return notifyCleanup.notifyMessage;
	},
	// Enable automatic cookie cleanup
	enableActiveMode() {
		browser.tabs.onRemoved.addListener(onTabRemoved);
		// console.log("ActiveMode");
	},

	// Disable automatic cookie cleanup
	disableActiveMode() {
		browser.tabs.onRemoved.removeListener(onTabRemoved);
		return browser.alarms.clear("activeModeAlarm")
		.then((wasCleared) => {
			// console.log(wasCleared);
			return Promise.resolve();
		});
		// console.log("DisabledMode");
	},
	splitSubDomain(domain) {
		return UsefulFunctions.splitSubDomain(domain);
	},

	extractMainDomain(domain) {
		return UsefulFunctions.extractMainDomain(domain);
	},

	getHostname(urlToGetHostName) {
		return UsefulFunctions.getHostname(urlToGetHostName);
	},

	isAWebpage(URL) {
		return UsefulFunctions.isAWebpage(URL);
	},
	prepareCookieDomain(cookie) {
		return cleanup.prepareCookieDomain(cookie);
	},
	// Checks if the host domain is in the whitelist and colors the icon
	checkIfProtected(tab) {
		let domainHost = UsefulFunctions.getHostname(tab.url);
		let baseDomainHost = globalSubdomainEnabled ? UsefulFunctions.extractBaseDomain(domainHost) : domainHost;
		if (contextualIdentitiesEnabled) {
			if (whiteList.hasHostSubdomain(domainHost, baseDomainHost, tab.cookieStoreId)) {
				setIconDefault(tab);
			} else if (whiteList.hasHostSubdomain(domainHost, baseDomainHost, tab.cookieStoreId + greyPrefix)) {
				setIconOrange(tab);
			} else {
				setIconRed(tab);
			}
		} else if (whiteList.hasHostSubdomain(domainHost, baseDomainHost)) {
			setIconDefault(tab);
		} else if (whiteList.hasHostSubdomain(domainHost, baseDomainHost, defaultWhiteList + greyPrefix)) {
			setIconOrange(tab);
		} else {
			setIconRed(tab);
		}
	}

};

// Logic that controls when to disable the browser action
browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	if (tab.status === "complete") {
		exposedFunctions.checkIfProtected(tab);

		return browser.windows.getCurrent()
		.then((windowInfo) => {
			// Disable the popup in incognito/private mode
			if (windowInfo.incognito) {
				browser.browserAction.disable(tab.id);
				browser.browserAction.setBadgeText({
					text: "X", tabId: tab.id
				});
				browser.browserAction.setBadgeBackgroundColor({
					color: "red", tabId: tab.id
				});
				setIconRed(tab);
				return Promise.resolve();
			}
			// Not incognito mode
			browser.browserAction.enable(tab.id);
			browser.browserAction.setBadgeText({
				text: "", tabId: tab.id
			});

			return browser.storage.local.get("showNumberOfCookiesInIconSetting")
			.then((items) => {
				if (items.showNumberOfCookiesInIconSetting === true) {
					return showNumberOfCookiesInIcon(tab);
				}
				return Promise.resolve();
			});
		}).catch(onError);
	}
	return undefined;
});

// Alarm event handler for Active Mode
browser.alarms.onAlarm.addListener((alarmInfo) => {
	// console.log(alarmInfo.name);
	if (alarmInfo.name === "activeModeAlarm") {
		exposedFunctions.cleanupOperation();
		browser.alarms.clear(alarmInfo.name);
	}
});


/***/ })
/******/ ]);