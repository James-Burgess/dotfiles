if(typeof browser!=='undefined'){chrome=browser;}
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";module.exports=function(t){var n,l="";return Array.prototype.join,l+='<!doctype html>\n<html>\n<head>\n\t<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\n\t<style>\n\t\tbody {\n\t\t\tmargin: 0;\n\t\t\tpadding: 0;\n\t\t}\n\t\tp {\n\t\t\tmargin: 3px;\n\t\t\tfont-family: Helvetica, Arial, sans-serif;\n\t\t\tfont-size: 13px;\n\t\t}\n\t\ttable {\n\t\t\tborder-spacing: 0;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\ttext-align: center;\n\t\t\tvertical-align: middle;\n\t\t}\n\t\ttd {\n\t\t\tpadding: 0;\n\t\t}\n\t</style>\n</head>\n<body>\n\t<table>\n\t\t<tr>\n\t\t\t<td>\n\n\t\t\t\t',t.button?l+='\n\n\t\t\t\t\t<a id="action-once" href="#" onclick="return false">\n\t\t\t\t\t\t<img id="ghostery-button" src="'+(null==(n=t.allow_once_src)?"":n)+'" title="'+(null==(n=t.allow_once_title)?"":n)+'">\n\t\t\t\t\t</a>\n\n\t\t\t\t':(l+="\n\n\t\t\t\t\t","undefined"!=typeof t.click2play_text&&t.click2play_text&&(l+='\n\t\t\t\t\t\t<p id="text">'+(null==(n=t.click2play_text)?"":n)+"</p>\n\t\t\t\t\t"),l+='\n\n\t\t\t\t\t<img id="ghostery-blocked" src="'+(null==(n=t.ghostery_blocked_src)?"":n)+'" title="'+(null==(n=t.ghostery_blocked_title)?"":n)+'">\n\n\t\t\t\t\t<a id="action-once" href="#" onclick="return false"><img src="'+(null==(n=t.allow_once_src)?"":n)+'" title="'+(null==(n=t.allow_once_title)?"":n)+'"></a>\n\n\t\t\t\t\t',t.blacklisted===!1&&(l+='\n\t\t\t\t\t\t<a id="action-always" href="#" onclick="return false"><img src="'+(null==(n=t.allow_always_src)?"":n)+'" title="'+(null==(n=t.allow_always_title)?"":n)+'"></a>\n\t\t\t\t\t'),l+="\n\n\t\t\t\t"),l+="\n\n\t\t\t</td>\n\t\t</tr>\n\t</table>\n</body>\n</html>\n"};

},{}],2:[function(require,module,exports){
"use strict";function placeHoldersCount(o){var r=o.length;if(r%4>0)throw new Error("Invalid string. Length must be a multiple of 4");return"="===o[r-2]?2:"="===o[r-1]?1:0}function byteLength(o){return 3*o.length/4-placeHoldersCount(o)}function toByteArray(o){var r,e,t,u,n,p,a=o.length;n=placeHoldersCount(o),p=new Arr(3*a/4-n),t=n>0?a-4:a;var l=0;for(r=0,e=0;r<t;r+=4,e+=3)u=revLookup[o.charCodeAt(r)]<<18|revLookup[o.charCodeAt(r+1)]<<12|revLookup[o.charCodeAt(r+2)]<<6|revLookup[o.charCodeAt(r+3)],p[l++]=u>>16&255,p[l++]=u>>8&255,p[l++]=255&u;return 2===n?(u=revLookup[o.charCodeAt(r)]<<2|revLookup[o.charCodeAt(r+1)]>>4,p[l++]=255&u):1===n&&(u=revLookup[o.charCodeAt(r)]<<10|revLookup[o.charCodeAt(r+1)]<<4|revLookup[o.charCodeAt(r+2)]>>2,p[l++]=u>>8&255,p[l++]=255&u),p}function tripletToBase64(o){return lookup[o>>18&63]+lookup[o>>12&63]+lookup[o>>6&63]+lookup[63&o]}function encodeChunk(o,r,e){for(var t,u=[],n=r;n<e;n+=3)t=(o[n]<<16)+(o[n+1]<<8)+o[n+2],u.push(tripletToBase64(t));return u.join("")}function fromByteArray(o){for(var r,e=o.length,t=e%3,u="",n=[],p=16383,a=0,l=e-t;a<l;a+=p)n.push(encodeChunk(o,a,a+p>l?l:a+p));return 1===t?(r=o[e-1],u+=lookup[r>>2],u+=lookup[r<<4&63],u+="=="):2===t&&(r=(o[e-2]<<8)+o[e-1],u+=lookup[r>>10],u+=lookup[r>>4&63],u+=lookup[r<<2&63],u+="="),n.push(u),n.join("")}exports.byteLength=byteLength,exports.toByteArray=toByteArray,exports.fromByteArray=fromByteArray;for(var lookup=[],revLookup=[],Arr="undefined"!=typeof Uint8Array?Uint8Array:Array,code="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i=0,len=code.length;i<len;++i)lookup[i]=code[i],revLookup[code.charCodeAt(i)]=i;revLookup["-".charCodeAt(0)]=62,revLookup["_".charCodeAt(0)]=63;

},{}],3:[function(require,module,exports){
(function (global){
"use strict";function typedArraySupport(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}function kMaxLength(){return Buffer.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function createBuffer(t,e){if(kMaxLength()<e)throw new RangeError("Invalid typed array length");return Buffer.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e),t.__proto__=Buffer.prototype):(null===t&&(t=new Buffer(e)),t.length=e),t}function Buffer(t,e,r){if(!(Buffer.TYPED_ARRAY_SUPPORT||this instanceof Buffer))return new Buffer(t,e,r);if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string");return allocUnsafe(this,t)}return from(this,t,e,r)}function from(t,e,r,n){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?fromArrayBuffer(t,e,r,n):"string"==typeof e?fromString(t,e,r):fromObject(t,e)}function assertSize(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function alloc(t,e,r,n){return assertSize(e),e<=0?createBuffer(t,e):void 0!==r?"string"==typeof n?createBuffer(t,e).fill(r,n):createBuffer(t,e).fill(r):createBuffer(t,e)}function allocUnsafe(t,e){if(assertSize(e),t=createBuffer(t,e<0?0:0|checked(e)),!Buffer.TYPED_ARRAY_SUPPORT)for(var r=0;r<e;++r)t[r]=0;return t}function fromString(t,e,r){if("string"==typeof r&&""!==r||(r="utf8"),!Buffer.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding');var n=0|byteLength(e,r);t=createBuffer(t,n);var f=t.write(e,r);return f!==n&&(t=t.slice(0,f)),t}function fromArrayLike(t,e){var r=e.length<0?0:0|checked(e.length);t=createBuffer(t,r);for(var n=0;n<r;n+=1)t[n]=255&e[n];return t}function fromArrayBuffer(t,e,r,n){if(e.byteLength,r<0||e.byteLength<r)throw new RangeError("'offset' is out of bounds");if(e.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds");return e=void 0===r&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,r):new Uint8Array(e,r,n),Buffer.TYPED_ARRAY_SUPPORT?(t=e,t.__proto__=Buffer.prototype):t=fromArrayLike(t,e),t}function fromObject(t,e){if(Buffer.isBuffer(e)){var r=0|checked(e.length);return t=createBuffer(t,r),0===t.length?t:(e.copy(t,0,0,r),t)}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||isnan(e.length)?createBuffer(t,0):fromArrayLike(t,e);if("Buffer"===e.type&&isArray(e.data))return fromArrayLike(t,e.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function checked(t){if(t>=kMaxLength())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+kMaxLength().toString(16)+" bytes");return 0|t}function SlowBuffer(t){return+t!=t&&(t=0),Buffer.alloc(+t)}function byteLength(t,e){if(Buffer.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var r=t.length;if(0===r)return 0;for(var n=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return utf8ToBytes(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return base64ToBytes(t).length;default:if(n)return utf8ToBytes(t).length;e=(""+e).toLowerCase(),n=!0}}function slowToString(t,e,r){var n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if(r>>>=0,e>>>=0,r<=e)return"";for(t||(t="utf8");;)switch(t){case"hex":return hexSlice(this,e,r);case"utf8":case"utf-8":return utf8Slice(this,e,r);case"ascii":return asciiSlice(this,e,r);case"latin1":case"binary":return latin1Slice(this,e,r);case"base64":return base64Slice(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return utf16leSlice(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function swap(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}function bidirectionalIndexOf(t,e,r,n,f){if(0===t.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,isNaN(r)&&(r=f?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(f)return-1;r=t.length-1}else if(r<0){if(!f)return-1;r=0}if("string"==typeof e&&(e=Buffer.from(e,n)),Buffer.isBuffer(e))return 0===e.length?-1:arrayIndexOf(t,e,r,n,f);if("number"==typeof e)return e=255&e,Buffer.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?f?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):arrayIndexOf(t,[e],r,n,f);throw new TypeError("val must be string, number or Buffer")}function arrayIndexOf(t,e,r,n,f){function i(t,e){return 1===o?t[e]:t.readUInt16BE(e*o)}var o=1,u=t.length,s=e.length;if(void 0!==n&&(n=String(n).toLowerCase(),"ucs2"===n||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;o=2,u/=2,s/=2,r/=2}var a;if(f){var h=-1;for(a=r;a<u;a++)if(i(t,a)===i(e,h===-1?0:a-h)){if(h===-1&&(h=a),a-h+1===s)return h*o}else h!==-1&&(a-=a-h),h=-1}else for(r+s>u&&(r=u-s),a=r;a>=0;a--){for(var c=!0,l=0;l<s;l++)if(i(t,a+l)!==i(e,l)){c=!1;break}if(c)return a}return-1}function hexWrite(t,e,r,n){r=Number(r)||0;var f=t.length-r;n?(n=Number(n),n>f&&(n=f)):n=f;var i=e.length;if(i%2!==0)throw new TypeError("Invalid hex string");n>i/2&&(n=i/2);for(var o=0;o<n;++o){var u=parseInt(e.substr(2*o,2),16);if(isNaN(u))return o;t[r+o]=u}return o}function utf8Write(t,e,r,n){return blitBuffer(utf8ToBytes(e,t.length-r),t,r,n)}function asciiWrite(t,e,r,n){return blitBuffer(asciiToBytes(e),t,r,n)}function latin1Write(t,e,r,n){return asciiWrite(t,e,r,n)}function base64Write(t,e,r,n){return blitBuffer(base64ToBytes(e),t,r,n)}function ucs2Write(t,e,r,n){return blitBuffer(utf16leToBytes(e,t.length-r),t,r,n)}function base64Slice(t,e,r){return 0===e&&r===t.length?base64.fromByteArray(t):base64.fromByteArray(t.slice(e,r))}function utf8Slice(t,e,r){r=Math.min(t.length,r);for(var n=[],f=e;f<r;){var i=t[f],o=null,u=i>239?4:i>223?3:i>191?2:1;if(f+u<=r){var s,a,h,c;switch(u){case 1:i<128&&(o=i);break;case 2:s=t[f+1],128===(192&s)&&(c=(31&i)<<6|63&s,c>127&&(o=c));break;case 3:s=t[f+1],a=t[f+2],128===(192&s)&&128===(192&a)&&(c=(15&i)<<12|(63&s)<<6|63&a,c>2047&&(c<55296||c>57343)&&(o=c));break;case 4:s=t[f+1],a=t[f+2],h=t[f+3],128===(192&s)&&128===(192&a)&&128===(192&h)&&(c=(15&i)<<18|(63&s)<<12|(63&a)<<6|63&h,c>65535&&c<1114112&&(o=c))}}null===o?(o=65533,u=1):o>65535&&(o-=65536,n.push(o>>>10&1023|55296),o=56320|1023&o),n.push(o),f+=u}return decodeCodePointsArray(n)}function decodeCodePointsArray(t){var e=t.length;if(e<=MAX_ARGUMENTS_LENGTH)return String.fromCharCode.apply(String,t);for(var r="",n=0;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=MAX_ARGUMENTS_LENGTH));return r}function asciiSlice(t,e,r){var n="";r=Math.min(t.length,r);for(var f=e;f<r;++f)n+=String.fromCharCode(127&t[f]);return n}function latin1Slice(t,e,r){var n="";r=Math.min(t.length,r);for(var f=e;f<r;++f)n+=String.fromCharCode(t[f]);return n}function hexSlice(t,e,r){var n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);for(var f="",i=e;i<r;++i)f+=toHex(t[i]);return f}function utf16leSlice(t,e,r){for(var n=t.slice(e,r),f="",i=0;i<n.length;i+=2)f+=String.fromCharCode(n[i]+256*n[i+1]);return f}function checkOffset(t,e,r){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function checkInt(t,e,r,n,f,i){if(!Buffer.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>f||e<i)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}function objectWriteUInt16(t,e,r,n){e<0&&(e=65535+e+1);for(var f=0,i=Math.min(t.length-r,2);f<i;++f)t[r+f]=(e&255<<8*(n?f:1-f))>>>8*(n?f:1-f)}function objectWriteUInt32(t,e,r,n){e<0&&(e=4294967295+e+1);for(var f=0,i=Math.min(t.length-r,4);f<i;++f)t[r+f]=e>>>8*(n?f:3-f)&255}function checkIEEE754(t,e,r,n,f,i){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function writeFloat(t,e,r,n,f){return f||checkIEEE754(t,e,r,4,3.4028234663852886e38,-3.4028234663852886e38),ieee754.write(t,e,r,n,23,4),r+4}function writeDouble(t,e,r,n,f){return f||checkIEEE754(t,e,r,8,1.7976931348623157e308,-1.7976931348623157e308),ieee754.write(t,e,r,n,52,8),r+8}function base64clean(t){if(t=stringtrim(t).replace(INVALID_BASE64_RE,""),t.length<2)return"";for(;t.length%4!==0;)t+="=";return t}function stringtrim(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function toHex(t){return t<16?"0"+t.toString(16):t.toString(16)}function utf8ToBytes(t,e){e=e||1/0;for(var r,n=t.length,f=null,i=[],o=0;o<n;++o){if(r=t.charCodeAt(o),r>55295&&r<57344){if(!f){if(r>56319){(e-=3)>-1&&i.push(239,191,189);continue}if(o+1===n){(e-=3)>-1&&i.push(239,191,189);continue}f=r;continue}if(r<56320){(e-=3)>-1&&i.push(239,191,189),f=r;continue}r=(f-55296<<10|r-56320)+65536}else f&&(e-=3)>-1&&i.push(239,191,189);if(f=null,r<128){if((e-=1)<0)break;i.push(r)}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function asciiToBytes(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}function utf16leToBytes(t,e){for(var r,n,f,i=[],o=0;o<t.length&&!((e-=2)<0);++o)r=t.charCodeAt(o),n=r>>8,f=r%256,i.push(f),i.push(n);return i}function base64ToBytes(t){return base64.toByteArray(base64clean(t))}function blitBuffer(t,e,r,n){for(var f=0;f<n&&!(f+r>=e.length||f>=t.length);++f)e[f+r]=t[f];return f}function isnan(t){return t!==t}var base64=require("base64-js"),ieee754=require("ieee754"),isArray=require("isarray");exports.Buffer=Buffer,exports.SlowBuffer=SlowBuffer,exports.INSPECT_MAX_BYTES=50,Buffer.TYPED_ARRAY_SUPPORT=void 0!==global.TYPED_ARRAY_SUPPORT?global.TYPED_ARRAY_SUPPORT:typedArraySupport(),exports.kMaxLength=kMaxLength(),Buffer.poolSize=8192,Buffer._augment=function(t){return t.__proto__=Buffer.prototype,t},Buffer.from=function(t,e,r){return from(null,t,e,r)},Buffer.TYPED_ARRAY_SUPPORT&&(Buffer.prototype.__proto__=Uint8Array.prototype,Buffer.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&Buffer[Symbol.species]===Buffer&&Object.defineProperty(Buffer,Symbol.species,{value:null,configurable:!0})),Buffer.alloc=function(t,e,r){return alloc(null,t,e,r)},Buffer.allocUnsafe=function(t){return allocUnsafe(null,t)},Buffer.allocUnsafeSlow=function(t){return allocUnsafe(null,t)},Buffer.isBuffer=function(t){return!(null==t||!t._isBuffer)},Buffer.compare=function(t,e){if(!Buffer.isBuffer(t)||!Buffer.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var r=t.length,n=e.length,f=0,i=Math.min(r,n);f<i;++f)if(t[f]!==e[f]){r=t[f],n=e[f];break}return r<n?-1:n<r?1:0},Buffer.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Buffer.concat=function(t,e){if(!isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return Buffer.alloc(0);var r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;var n=Buffer.allocUnsafe(e),f=0;for(r=0;r<t.length;++r){var i=t[r];if(!Buffer.isBuffer(i))throw new TypeError('"list" argument must be an Array of Buffers');i.copy(n,f),f+=i.length}return n},Buffer.byteLength=byteLength,Buffer.prototype._isBuffer=!0,Buffer.prototype.swap16=function(){var t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)swap(this,e,e+1);return this},Buffer.prototype.swap32=function(){var t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)swap(this,e,e+3),swap(this,e+1,e+2);return this},Buffer.prototype.swap64=function(){var t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)swap(this,e,e+7),swap(this,e+1,e+6),swap(this,e+2,e+5),swap(this,e+3,e+4);return this},Buffer.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?utf8Slice(this,0,t):slowToString.apply(this,arguments)},Buffer.prototype.equals=function(t){if(!Buffer.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===Buffer.compare(this,t)},Buffer.prototype.inspect=function(){var t="",e=exports.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,e).match(/.{2}/g).join(" "),this.length>e&&(t+=" ... ")),"<Buffer "+t+">"},Buffer.prototype.compare=function(t,e,r,n,f){if(!Buffer.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===f&&(f=this.length),e<0||r>t.length||n<0||f>this.length)throw new RangeError("out of range index");if(n>=f&&e>=r)return 0;if(n>=f)return-1;if(e>=r)return 1;if(e>>>=0,r>>>=0,n>>>=0,f>>>=0,this===t)return 0;for(var i=f-n,o=r-e,u=Math.min(i,o),s=this.slice(n,f),a=t.slice(e,r),h=0;h<u;++h)if(s[h]!==a[h]){i=s[h],o=a[h];break}return i<o?-1:o<i?1:0},Buffer.prototype.includes=function(t,e,r){return this.indexOf(t,e,r)!==-1},Buffer.prototype.indexOf=function(t,e,r){return bidirectionalIndexOf(this,t,e,r,!0)},Buffer.prototype.lastIndexOf=function(t,e,r){return bidirectionalIndexOf(this,t,e,r,!1)},Buffer.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e=0|e,isFinite(r)?(r=0|r,void 0===n&&(n="utf8")):(n=r,r=void 0)}var f=this.length-e;if((void 0===r||r>f)&&(r=f),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var i=!1;;)switch(n){case"hex":return hexWrite(this,t,e,r);case"utf8":case"utf-8":return utf8Write(this,t,e,r);case"ascii":return asciiWrite(this,t,e,r);case"latin1":case"binary":return latin1Write(this,t,e,r);case"base64":return base64Write(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ucs2Write(this,t,e,r);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},Buffer.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var MAX_ARGUMENTS_LENGTH=4096;Buffer.prototype.slice=function(t,e){var r=this.length;t=~~t,e=void 0===e?r:~~e,t<0?(t+=r,t<0&&(t=0)):t>r&&(t=r),e<0?(e+=r,e<0&&(e=0)):e>r&&(e=r),e<t&&(e=t);var n;if(Buffer.TYPED_ARRAY_SUPPORT)n=this.subarray(t,e),n.__proto__=Buffer.prototype;else{var f=e-t;n=new Buffer(f,(void 0));for(var i=0;i<f;++i)n[i]=this[i+t]}return n},Buffer.prototype.readUIntLE=function(t,e,r){t=0|t,e=0|e,r||checkOffset(t,e,this.length);for(var n=this[t],f=1,i=0;++i<e&&(f*=256);)n+=this[t+i]*f;return n},Buffer.prototype.readUIntBE=function(t,e,r){t=0|t,e=0|e,r||checkOffset(t,e,this.length);for(var n=this[t+--e],f=1;e>0&&(f*=256);)n+=this[t+--e]*f;return n},Buffer.prototype.readUInt8=function(t,e){return e||checkOffset(t,1,this.length),this[t]},Buffer.prototype.readUInt16LE=function(t,e){return e||checkOffset(t,2,this.length),this[t]|this[t+1]<<8},Buffer.prototype.readUInt16BE=function(t,e){return e||checkOffset(t,2,this.length),this[t]<<8|this[t+1]},Buffer.prototype.readUInt32LE=function(t,e){return e||checkOffset(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},Buffer.prototype.readUInt32BE=function(t,e){return e||checkOffset(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},Buffer.prototype.readIntLE=function(t,e,r){t=0|t,e=0|e,r||checkOffset(t,e,this.length);for(var n=this[t],f=1,i=0;++i<e&&(f*=256);)n+=this[t+i]*f;return f*=128,n>=f&&(n-=Math.pow(2,8*e)),n},Buffer.prototype.readIntBE=function(t,e,r){t=0|t,e=0|e,r||checkOffset(t,e,this.length);for(var n=e,f=1,i=this[t+--n];n>0&&(f*=256);)i+=this[t+--n]*f;return f*=128,i>=f&&(i-=Math.pow(2,8*e)),i},Buffer.prototype.readInt8=function(t,e){return e||checkOffset(t,1,this.length),128&this[t]?(255-this[t]+1)*-1:this[t]},Buffer.prototype.readInt16LE=function(t,e){e||checkOffset(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},Buffer.prototype.readInt16BE=function(t,e){e||checkOffset(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},Buffer.prototype.readInt32LE=function(t,e){return e||checkOffset(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},Buffer.prototype.readInt32BE=function(t,e){return e||checkOffset(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},Buffer.prototype.readFloatLE=function(t,e){return e||checkOffset(t,4,this.length),ieee754.read(this,t,!0,23,4)},Buffer.prototype.readFloatBE=function(t,e){return e||checkOffset(t,4,this.length),ieee754.read(this,t,!1,23,4)},Buffer.prototype.readDoubleLE=function(t,e){return e||checkOffset(t,8,this.length),ieee754.read(this,t,!0,52,8)},Buffer.prototype.readDoubleBE=function(t,e){return e||checkOffset(t,8,this.length),ieee754.read(this,t,!1,52,8)},Buffer.prototype.writeUIntLE=function(t,e,r,n){if(t=+t,e=0|e,r=0|r,!n){var f=Math.pow(2,8*r)-1;checkInt(this,t,e,r,f,0)}var i=1,o=0;for(this[e]=255&t;++o<r&&(i*=256);)this[e+o]=t/i&255;return e+r},Buffer.prototype.writeUIntBE=function(t,e,r,n){if(t=+t,e=0|e,r=0|r,!n){var f=Math.pow(2,8*r)-1;checkInt(this,t,e,r,f,0)}var i=r-1,o=1;for(this[e+i]=255&t;--i>=0&&(o*=256);)this[e+i]=t/o&255;return e+r},Buffer.prototype.writeUInt8=function(t,e,r){return t=+t,e=0|e,r||checkInt(this,t,e,1,255,0),Buffer.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},Buffer.prototype.writeUInt16LE=function(t,e,r){return t=+t,e=0|e,r||checkInt(this,t,e,2,65535,0),Buffer.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):objectWriteUInt16(this,t,e,!0),e+2},Buffer.prototype.writeUInt16BE=function(t,e,r){return t=+t,e=0|e,r||checkInt(this,t,e,2,65535,0),Buffer.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):objectWriteUInt16(this,t,e,!1),e+2},Buffer.prototype.writeUInt32LE=function(t,e,r){return t=+t,e=0|e,r||checkInt(this,t,e,4,4294967295,0),Buffer.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):objectWriteUInt32(this,t,e,!0),e+4},Buffer.prototype.writeUInt32BE=function(t,e,r){return t=+t,e=0|e,r||checkInt(this,t,e,4,4294967295,0),Buffer.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):objectWriteUInt32(this,t,e,!1),e+4},Buffer.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e=0|e,!n){var f=Math.pow(2,8*r-1);checkInt(this,t,e,r,f-1,-f)}var i=0,o=1,u=0;for(this[e]=255&t;++i<r&&(o*=256);)t<0&&0===u&&0!==this[e+i-1]&&(u=1),this[e+i]=(t/o>>0)-u&255;return e+r},Buffer.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e=0|e,!n){var f=Math.pow(2,8*r-1);checkInt(this,t,e,r,f-1,-f)}var i=r-1,o=1,u=0;for(this[e+i]=255&t;--i>=0&&(o*=256);)t<0&&0===u&&0!==this[e+i+1]&&(u=1),this[e+i]=(t/o>>0)-u&255;return e+r},Buffer.prototype.writeInt8=function(t,e,r){return t=+t,e=0|e,r||checkInt(this,t,e,1,127,-128),Buffer.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},Buffer.prototype.writeInt16LE=function(t,e,r){return t=+t,e=0|e,r||checkInt(this,t,e,2,32767,-32768),Buffer.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):objectWriteUInt16(this,t,e,!0),e+2},Buffer.prototype.writeInt16BE=function(t,e,r){return t=+t,e=0|e,r||checkInt(this,t,e,2,32767,-32768),Buffer.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):objectWriteUInt16(this,t,e,!1),e+2},Buffer.prototype.writeInt32LE=function(t,e,r){return t=+t,e=0|e,r||checkInt(this,t,e,4,2147483647,-2147483648),Buffer.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):objectWriteUInt32(this,t,e,!0),e+4},Buffer.prototype.writeInt32BE=function(t,e,r){return t=+t,e=0|e,r||checkInt(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),Buffer.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):objectWriteUInt32(this,t,e,!1),e+4},Buffer.prototype.writeFloatLE=function(t,e,r){return writeFloat(this,t,e,!0,r)},Buffer.prototype.writeFloatBE=function(t,e,r){return writeFloat(this,t,e,!1,r)},Buffer.prototype.writeDoubleLE=function(t,e,r){return writeDouble(this,t,e,!0,r)},Buffer.prototype.writeDoubleBE=function(t,e,r){return writeDouble(this,t,e,!1,r)},Buffer.prototype.copy=function(t,e,r,n){if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var f,i=n-r;if(this===t&&r<e&&e<n)for(f=i-1;f>=0;--f)t[f+e]=this[f+r];else if(i<1e3||!Buffer.TYPED_ARRAY_SUPPORT)for(f=0;f<i;++f)t[f+e]=this[f+r];else Uint8Array.prototype.set.call(t,this.subarray(r,r+i),e);return i},Buffer.prototype.fill=function(t,e,r,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),1===t.length){var f=t.charCodeAt(0);f<256&&(t=f)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!Buffer.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t=255&t);if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0);var i;if("number"==typeof t)for(i=e;i<r;++i)this[i]=t;else{var o=Buffer.isBuffer(t)?t:utf8ToBytes(new Buffer(t,n).toString()),u=o.length;for(i=0;i<r-e;++i)this[i+e]=o[i%u]}return this};var INVALID_BASE64_RE=/[^+\/0-9A-Za-z-_]/g;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"base64-js":2,"ieee754":5,"isarray":6}],4:[function(require,module,exports){
function EventEmitter(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function isFunction(e){return"function"==typeof e}function isNumber(e){return"number"==typeof e}function isObject(e){return"object"==typeof e&&null!==e}function isUndefined(e){return void 0===e}module.exports=EventEmitter,EventEmitter.EventEmitter=EventEmitter,EventEmitter.prototype._events=void 0,EventEmitter.prototype._maxListeners=void 0,EventEmitter.defaultMaxListeners=10,EventEmitter.prototype.setMaxListeners=function(e){if(!isNumber(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},EventEmitter.prototype.emit=function(e){var t,i,n,s,r,o;if(this._events||(this._events={}),"error"===e&&(!this._events.error||isObject(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;var h=new Error('Uncaught, unspecified "error" event. ('+t+")");throw h.context=t,h}if(i=this._events[e],isUndefined(i))return!1;if(isFunction(i))switch(arguments.length){case 1:i.call(this);break;case 2:i.call(this,arguments[1]);break;case 3:i.call(this,arguments[1],arguments[2]);break;default:s=Array.prototype.slice.call(arguments,1),i.apply(this,s)}else if(isObject(i))for(s=Array.prototype.slice.call(arguments,1),o=i.slice(),n=o.length,r=0;r<n;r++)o[r].apply(this,s);return!0},EventEmitter.prototype.addListener=function(e,t){var i;if(!isFunction(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,isFunction(t.listener)?t.listener:t),this._events[e]?isObject(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,isObject(this._events[e])&&!this._events[e].warned&&(i=isUndefined(this._maxListeners)?EventEmitter.defaultMaxListeners:this._maxListeners,i&&i>0&&this._events[e].length>i&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())),this},EventEmitter.prototype.on=EventEmitter.prototype.addListener,EventEmitter.prototype.once=function(e,t){function i(){this.removeListener(e,i),n||(n=!0,t.apply(this,arguments))}if(!isFunction(t))throw TypeError("listener must be a function");var n=!1;return i.listener=t,this.on(e,i),this},EventEmitter.prototype.removeListener=function(e,t){var i,n,s,r;if(!isFunction(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(i=this._events[e],s=i.length,n=-1,i===t||isFunction(i.listener)&&i.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(isObject(i)){for(r=s;r-- >0;)if(i[r]===t||i[r].listener&&i[r].listener===t){n=r;break}if(n<0)return this;1===i.length?(i.length=0,delete this._events[e]):i.splice(n,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},EventEmitter.prototype.removeAllListeners=function(e){var t,i;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(i=this._events[e],isFunction(i))this.removeListener(e,i);else if(i)for(;i.length;)this.removeListener(e,i[i.length-1]);return delete this._events[e],this},EventEmitter.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?isFunction(this._events[e])?[this._events[e]]:this._events[e].slice():[]},EventEmitter.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(isFunction(t))return 1;if(t)return t.length}return 0},EventEmitter.listenerCount=function(e,t){return e.listenerCount(t)};

},{}],5:[function(require,module,exports){
exports.read=function(a,o,t,r,h){var M,p,w=8*h-r-1,f=(1<<w)-1,e=f>>1,i=-7,N=t?h-1:0,n=t?-1:1,s=a[o+N];for(N+=n,M=s&(1<<-i)-1,s>>=-i,i+=w;i>0;M=256*M+a[o+N],N+=n,i-=8);for(p=M&(1<<-i)-1,M>>=-i,i+=r;i>0;p=256*p+a[o+N],N+=n,i-=8);if(0===M)M=1-e;else{if(M===f)return p?NaN:(s?-1:1)*(1/0);p+=Math.pow(2,r),M-=e}return(s?-1:1)*p*Math.pow(2,M-r)},exports.write=function(a,o,t,r,h,M){var p,w,f,e=8*M-h-1,i=(1<<e)-1,N=i>>1,n=23===h?Math.pow(2,-24)-Math.pow(2,-77):0,s=r?0:M-1,u=r?1:-1,l=o<0||0===o&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(w=isNaN(o)?1:0,p=i):(p=Math.floor(Math.log(o)/Math.LN2),o*(f=Math.pow(2,-p))<1&&(p--,f*=2),o+=p+N>=1?n/f:n*Math.pow(2,1-N),o*f>=2&&(p++,f/=2),p+N>=i?(w=0,p=i):p+N>=1?(w=(o*f-1)*Math.pow(2,h),p+=N):(w=o*Math.pow(2,N-1)*Math.pow(2,h),p=0));h>=8;a[t+s]=255&w,s+=u,w/=256,h-=8);for(p=p<<h|w,e+=h;e>0;a[t+s]=255&p,s+=u,p/=256,e-=8);a[t+s-u]|=128*l};

},{}],6:[function(require,module,exports){
var toString={}.toString;module.exports=Array.isArray||function(r){return"[object Array]"==toString.call(r)};

},{}],7:[function(require,module,exports){
!function(e,a){"object"==typeof exports&&"undefined"!=typeof module?module.exports=a():"function"==typeof define&&define.amd?define(a):e.moment=a()}(this,function(){"use strict";function e(){return ln.apply(null,arguments)}function a(e){ln=e}function t(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function s(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function n(e){var a;for(a in e)return!1;return!0}function r(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function _(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function d(e,a){var t,s=[];for(t=0;t<e.length;++t)s.push(a(e[t],t));return s}function i(e,a){return Object.prototype.hasOwnProperty.call(e,a)}function o(e,a){for(var t in a)i(a,t)&&(e[t]=a[t]);return i(a,"toString")&&(e.toString=a.toString),i(a,"valueOf")&&(e.valueOf=a.valueOf),e}function m(e,a,t,s){return Ya(e,a,t,s,!0).utc()}function u(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null}}function l(e){return null==e._pf&&(e._pf=u()),e._pf}function M(e){if(null==e._isValid){var a=l(e),t=hn.call(a.parsedDateParts,function(e){return null!=e}),s=!isNaN(e._d.getTime())&&a.overflow<0&&!a.empty&&!a.invalidMonth&&!a.invalidWeekday&&!a.nullInput&&!a.invalidFormat&&!a.userInvalidated&&(!a.meridiem||a.meridiem&&t);if(e._strict&&(s=s&&0===a.charsLeftOver&&0===a.unusedTokens.length&&void 0===a.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return s;e._isValid=s}return e._isValid}function h(e){var a=m(NaN);return null!=e?o(l(a),e):l(a).userInvalidated=!0,a}function L(e){return void 0===e}function c(e,a){var t,s,n;if(L(a._isAMomentObject)||(e._isAMomentObject=a._isAMomentObject),L(a._i)||(e._i=a._i),L(a._f)||(e._f=a._f),L(a._l)||(e._l=a._l),L(a._strict)||(e._strict=a._strict),L(a._tzm)||(e._tzm=a._tzm),L(a._isUTC)||(e._isUTC=a._isUTC),L(a._offset)||(e._offset=a._offset),L(a._pf)||(e._pf=l(a)),L(a._locale)||(e._locale=a._locale),Ln.length>0)for(t in Ln)s=Ln[t],n=a[s],L(n)||(e[s]=n);return e}function Y(a){c(this,a),this._d=new Date(null!=a._d?a._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),cn===!1&&(cn=!0,e.updateOffset(this),cn=!1)}function y(e){return e instanceof Y||null!=e&&null!=e._isAMomentObject}function p(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function f(e){var a=+e,t=0;return 0!==a&&isFinite(a)&&(t=p(a)),t}function k(e,a,t){var s,n=Math.min(e.length,a.length),r=Math.abs(e.length-a.length),_=0;for(s=0;s<n;s++)(t&&e[s]!==a[s]||!t&&f(e[s])!==f(a[s]))&&_++;return _+r}function D(a){e.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+a)}function T(a,t){var s=!0;return o(function(){if(null!=e.deprecationHandler&&e.deprecationHandler(null,a),s){for(var n,r=[],_=0;_<arguments.length;_++){if(n="","object"==typeof arguments[_]){n+="\n["+_+"] ";for(var d in arguments[0])n+=d+": "+arguments[0][d]+", ";n=n.slice(0,-2)}else n=arguments[_];r.push(n)}D(a+"\nArguments: "+Array.prototype.slice.call(r).join("")+"\n"+(new Error).stack),s=!1}return t.apply(this,arguments)},t)}function g(a,t){null!=e.deprecationHandler&&e.deprecationHandler(a,t),Yn[a]||(D(t),Yn[a]=!0)}function w(e){return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function v(e){var a,t;for(t in e)a=e[t],w(a)?this[t]=a:this["_"+t]=a;this._config=e,this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function S(e,a){var t,n=o({},e);for(t in a)i(a,t)&&(s(e[t])&&s(a[t])?(n[t]={},o(n[t],e[t]),o(n[t],a[t])):null!=a[t]?n[t]=a[t]:delete n[t]);for(t in e)i(e,t)&&!i(a,t)&&s(e[t])&&(n[t]=o({},n[t]));return n}function H(e){null!=e&&this.set(e)}function b(e,a,t){var s=this._calendar[e]||this._calendar.sameElse;return w(s)?s.call(a,t):s}function j(e){var a=this._longDateFormat[e],t=this._longDateFormat[e.toUpperCase()];return a||!t?a:(this._longDateFormat[e]=t.replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e])}function x(){return this._invalidDate}function P(e){return this._ordinal.replace("%d",e)}function W(e,a,t,s){var n=this._relativeTime[t];return w(n)?n(e,a,t,s):n.replace(/%d/i,e)}function A(e,a){var t=this._relativeTime[e>0?"future":"past"];return w(t)?t(a):t.replace(/%s/i,a)}function E(e,a){var t=e.toLowerCase();Sn[t]=Sn[t+"s"]=Sn[a]=e}function F(e){return"string"==typeof e?Sn[e]||Sn[e.toLowerCase()]:void 0}function z(e){var a,t,s={};for(t in e)i(e,t)&&(a=F(t),a&&(s[a]=e[t]));return s}function O(e,a){Hn[e]=a}function J(e){var a=[];for(var t in e)a.push({unit:t,priority:Hn[t]});return a.sort(function(e,a){return e.priority-a.priority}),a}function R(a,t){return function(s){return null!=s?(C(this,a,s),e.updateOffset(this,t),this):I(this,a)}}function I(e,a){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+a]():NaN}function C(e,a,t){e.isValid()&&e._d["set"+(e._isUTC?"UTC":"")+a](t)}function G(e){return e=F(e),w(this[e])?this[e]():this}function N(e,a){if("object"==typeof e){e=z(e);for(var t=J(e),s=0;s<t.length;s++)this[t[s].unit](e[t[s].unit])}else if(e=F(e),w(this[e]))return this[e](a);return this}function U(e,a,t){var s=""+Math.abs(e),n=a-s.length,r=e>=0;return(r?t?"+":"":"-")+Math.pow(10,Math.max(0,n)).toString().substr(1)+s}function V(e,a,t,s){var n=s;"string"==typeof s&&(n=function(){return this[s]()}),e&&(Pn[e]=n),a&&(Pn[a[0]]=function(){return U(n.apply(this,arguments),a[1],a[2])}),t&&(Pn[t]=function(){return this.localeData().ordinal(n.apply(this,arguments),e)})}function $(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function K(e){var a,t,s=e.match(bn);for(a=0,t=s.length;a<t;a++)Pn[s[a]]?s[a]=Pn[s[a]]:s[a]=$(s[a]);return function(a){var n,r="";for(n=0;n<t;n++)r+=s[n]instanceof Function?s[n].call(a,e):s[n];return r}}function Z(e,a){return e.isValid()?(a=q(a,e.localeData()),xn[a]=xn[a]||K(a),xn[a](e)):e.localeData().invalidDate()}function q(e,a){function t(e){return a.longDateFormat(e)||e}var s=5;for(jn.lastIndex=0;s>=0&&jn.test(e);)e=e.replace(jn,t),jn.lastIndex=0,s-=1;return e}function B(e,a,t){qn[e]=w(a)?a:function(e,s){return e&&t?t:a}}function Q(e,a){return i(qn,e)?qn[e](a._strict,a._locale):new RegExp(X(e))}function X(e){return ee(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,a,t,s,n){return a||t||s||n}))}function ee(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function ae(e,a){var t,s=a;for("string"==typeof e&&(e=[e]),r(a)&&(s=function(e,t){t[a]=f(e)}),t=0;t<e.length;t++)Bn[e[t]]=s}function te(e,a){ae(e,function(e,t,s,n){s._w=s._w||{},a(e,s._w,s,n)})}function se(e,a,t){null!=a&&i(Bn,e)&&Bn[e](a,t._a,t,e)}function ne(e,a){return new Date(Date.UTC(e,a+1,0)).getUTCDate()}function re(e,a){return e?t(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||ir).test(a)?"format":"standalone"][e.month()]:this._months}function _e(e,a){return e?t(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[ir.test(a)?"format":"standalone"][e.month()]:this._monthsShort}function de(e,a,t){var s,n,r,_=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;s<12;++s)r=m([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(r,"").toLocaleLowerCase();return t?"MMM"===a?(n=dr.call(this._shortMonthsParse,_),n!==-1?n:null):(n=dr.call(this._longMonthsParse,_),n!==-1?n:null):"MMM"===a?(n=dr.call(this._shortMonthsParse,_),n!==-1?n:(n=dr.call(this._longMonthsParse,_),n!==-1?n:null)):(n=dr.call(this._longMonthsParse,_),n!==-1?n:(n=dr.call(this._shortMonthsParse,_),n!==-1?n:null))}function ie(e,a,t){var s,n,r;if(this._monthsParseExact)return de.call(this,e,a,t);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;s<12;s++){if(n=m([2e3,s]),t&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(n,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(n,"").replace(".","")+"$","i")),t||this._monthsParse[s]||(r="^"+this.months(n,"")+"|^"+this.monthsShort(n,""),this._monthsParse[s]=new RegExp(r.replace(".",""),"i")),t&&"MMMM"===a&&this._longMonthsParse[s].test(e))return s;if(t&&"MMM"===a&&this._shortMonthsParse[s].test(e))return s;if(!t&&this._monthsParse[s].test(e))return s}}function oe(e,a){var t;if(!e.isValid())return e;if("string"==typeof a)if(/^\d+$/.test(a))a=f(a);else if(a=e.localeData().monthsParse(a),!r(a))return e;return t=Math.min(e.date(),ne(e.year(),a)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](a,t),e}function me(a){return null!=a?(oe(this,a),e.updateOffset(this,!0),this):I(this,"Month")}function ue(){return ne(this.year(),this.month())}function le(e){return this._monthsParseExact?(i(this,"_monthsRegex")||he.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(i(this,"_monthsShortRegex")||(this._monthsShortRegex=ur),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function Me(e){return this._monthsParseExact?(i(this,"_monthsRegex")||he.call(this),e?this._monthsStrictRegex:this._monthsRegex):(i(this,"_monthsRegex")||(this._monthsRegex=lr),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function he(){function e(e,a){return a.length-e.length}var a,t,s=[],n=[],r=[];for(a=0;a<12;a++)t=m([2e3,a]),s.push(this.monthsShort(t,"")),n.push(this.months(t,"")),r.push(this.months(t,"")),r.push(this.monthsShort(t,""));for(s.sort(e),n.sort(e),r.sort(e),a=0;a<12;a++)s[a]=ee(s[a]),n[a]=ee(n[a]);for(a=0;a<24;a++)r[a]=ee(r[a]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+s.join("|")+")","i")}function Le(e){return ce(e)?366:365}function ce(e){return e%4===0&&e%100!==0||e%400===0}function Ye(){return ce(this.year())}function ye(e,a,t,s,n,r,_){var d=new Date(e,a,t,s,n,r,_);return e<100&&e>=0&&isFinite(d.getFullYear())&&d.setFullYear(e),d}function pe(e){var a=new Date(Date.UTC.apply(null,arguments));return e<100&&e>=0&&isFinite(a.getUTCFullYear())&&a.setUTCFullYear(e),a}function fe(e,a,t){var s=7+a-t,n=(7+pe(e,0,s).getUTCDay()-a)%7;return-n+s-1}function ke(e,a,t,s,n){var r,_,d=(7+t-s)%7,i=fe(e,s,n),o=1+7*(a-1)+d+i;return o<=0?(r=e-1,_=Le(r)+o):o>Le(e)?(r=e+1,_=o-Le(e)):(r=e,_=o),{year:r,dayOfYear:_}}function De(e,a,t){var s,n,r=fe(e.year(),a,t),_=Math.floor((e.dayOfYear()-r-1)/7)+1;return _<1?(n=e.year()-1,s=_+Te(n,a,t)):_>Te(e.year(),a,t)?(s=_-Te(e.year(),a,t),n=e.year()+1):(n=e.year(),s=_),{week:s,year:n}}function Te(e,a,t){var s=fe(e,a,t),n=fe(e+1,a,t);return(Le(e)-s+n)/7}function ge(e){return De(e,this._week.dow,this._week.doy).week}function we(){return this._week.dow}function ve(){return this._week.doy}function Se(e){var a=this.localeData().week(this);return null==e?a:this.add(7*(e-a),"d")}function He(e){var a=De(this,1,4).week;return null==e?a:this.add(7*(e-a),"d")}function be(e,a){return"string"!=typeof e?e:isNaN(e)?(e=a.weekdaysParse(e),"number"==typeof e?e:null):parseInt(e,10)}function je(e,a){return"string"==typeof e?a.weekdaysParse(e)%7||7:isNaN(e)?null:e}function xe(e,a){return e?t(this._weekdays)?this._weekdays[e.day()]:this._weekdays[this._weekdays.isFormat.test(a)?"format":"standalone"][e.day()]:this._weekdays}function Pe(e){return e?this._weekdaysShort[e.day()]:this._weekdaysShort}function We(e){return e?this._weekdaysMin[e.day()]:this._weekdaysMin}function Ae(e,a,t){var s,n,r,_=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;s<7;++s)r=m([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(r,"").toLocaleLowerCase();return t?"dddd"===a?(n=dr.call(this._weekdaysParse,_),n!==-1?n:null):"ddd"===a?(n=dr.call(this._shortWeekdaysParse,_),n!==-1?n:null):(n=dr.call(this._minWeekdaysParse,_),n!==-1?n:null):"dddd"===a?(n=dr.call(this._weekdaysParse,_),n!==-1?n:(n=dr.call(this._shortWeekdaysParse,_),n!==-1?n:(n=dr.call(this._minWeekdaysParse,_),n!==-1?n:null))):"ddd"===a?(n=dr.call(this._shortWeekdaysParse,_),n!==-1?n:(n=dr.call(this._weekdaysParse,_),n!==-1?n:(n=dr.call(this._minWeekdaysParse,_),n!==-1?n:null))):(n=dr.call(this._minWeekdaysParse,_),n!==-1?n:(n=dr.call(this._weekdaysParse,_),n!==-1?n:(n=dr.call(this._shortWeekdaysParse,_),n!==-1?n:null)))}function Ee(e,a,t){var s,n,r;if(this._weekdaysParseExact)return Ae.call(this,e,a,t);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;s<7;s++){if(n=m([2e3,1]).day(s),t&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(n,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(n,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(n,"").replace(".",".?")+"$","i")),this._weekdaysParse[s]||(r="^"+this.weekdays(n,"")+"|^"+this.weekdaysShort(n,"")+"|^"+this.weekdaysMin(n,""),this._weekdaysParse[s]=new RegExp(r.replace(".",""),"i")),t&&"dddd"===a&&this._fullWeekdaysParse[s].test(e))return s;if(t&&"ddd"===a&&this._shortWeekdaysParse[s].test(e))return s;if(t&&"dd"===a&&this._minWeekdaysParse[s].test(e))return s;if(!t&&this._weekdaysParse[s].test(e))return s}}function Fe(e){if(!this.isValid())return null!=e?this:NaN;var a=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(e=be(e,this.localeData()),this.add(e-a,"d")):a}function ze(e){if(!this.isValid())return null!=e?this:NaN;var a=(this.day()+7-this.localeData()._week.dow)%7;return null==e?a:this.add(e-a,"d")}function Oe(e){if(!this.isValid())return null!=e?this:NaN;if(null!=e){var a=je(e,this.localeData());return this.day(this.day()%7?a:a-7)}return this.day()||7}function Je(e){return this._weekdaysParseExact?(i(this,"_weekdaysRegex")||Ce.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(i(this,"_weekdaysRegex")||(this._weekdaysRegex=yr),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function Re(e){return this._weekdaysParseExact?(i(this,"_weekdaysRegex")||Ce.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(i(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=pr),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Ie(e){return this._weekdaysParseExact?(i(this,"_weekdaysRegex")||Ce.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(i(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=fr),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Ce(){function e(e,a){return a.length-e.length}var a,t,s,n,r,_=[],d=[],i=[],o=[];for(a=0;a<7;a++)t=m([2e3,1]).day(a),s=this.weekdaysMin(t,""),n=this.weekdaysShort(t,""),r=this.weekdays(t,""),_.push(s),d.push(n),i.push(r),o.push(s),o.push(n),o.push(r);for(_.sort(e),d.sort(e),i.sort(e),o.sort(e),a=0;a<7;a++)d[a]=ee(d[a]),i[a]=ee(i[a]),o[a]=ee(o[a]);this._weekdaysRegex=new RegExp("^("+o.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+d.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+_.join("|")+")","i")}function Ge(){return this.hours()%12||12}function Ne(){return this.hours()||24}function Ue(e,a){V(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),a)})}function Ve(e,a){return a._meridiemParse}function $e(e){return"p"===(e+"").toLowerCase().charAt(0)}function Ke(e,a,t){return e>11?t?"pm":"PM":t?"am":"AM"}function Ze(e){return e?e.toLowerCase().replace("_","-"):e}function qe(e){for(var a,t,s,n,r=0;r<e.length;){for(n=Ze(e[r]).split("-"),a=n.length,t=Ze(e[r+1]),t=t?t.split("-"):null;a>0;){if(s=Be(n.slice(0,a).join("-")))return s;if(t&&t.length>=a&&k(n,t,!0)>=a-1)break;a--}r++}return null}function Be(e){var a=null;if(!wr[e]&&"undefined"!=typeof module&&module&&module.exports)try{a=kr._abbr,require("./locale/"+e),Qe(a)}catch(e){}return wr[e]}function Qe(e,a){var t;return e&&(t=L(a)?aa(e):Xe(e,a),t&&(kr=t)),kr._abbr}function Xe(e,a){if(null!==a){var t=gr;if(a.abbr=e,null!=wr[e])g("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),t=wr[e]._config;else if(null!=a.parentLocale){if(null==wr[a.parentLocale])return vr[a.parentLocale]||(vr[a.parentLocale]=[]),vr[a.parentLocale].push({name:e,config:a}),null;t=wr[a.parentLocale]._config}return wr[e]=new H(S(t,a)),vr[e]&&vr[e].forEach(function(e){Xe(e.name,e.config)}),Qe(e),wr[e]}return delete wr[e],null}function ea(e,a){if(null!=a){var t,s=gr;null!=wr[e]&&(s=wr[e]._config),a=S(s,a),t=new H(a),t.parentLocale=wr[e],wr[e]=t,Qe(e)}else null!=wr[e]&&(null!=wr[e].parentLocale?wr[e]=wr[e].parentLocale:null!=wr[e]&&delete wr[e]);return wr[e]}function aa(e){var a;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return kr;if(!t(e)){if(a=Be(e))return a;e=[e]}return qe(e)}function ta(){return fn(wr)}function sa(e){var a,t=e._a;return t&&l(e).overflow===-2&&(a=t[Xn]<0||t[Xn]>11?Xn:t[er]<1||t[er]>ne(t[Qn],t[Xn])?er:t[ar]<0||t[ar]>24||24===t[ar]&&(0!==t[tr]||0!==t[sr]||0!==t[nr])?ar:t[tr]<0||t[tr]>59?tr:t[sr]<0||t[sr]>59?sr:t[nr]<0||t[nr]>999?nr:-1,l(e)._overflowDayOfYear&&(a<Qn||a>er)&&(a=er),l(e)._overflowWeeks&&a===-1&&(a=rr),l(e)._overflowWeekday&&a===-1&&(a=_r),l(e).overflow=a),e}function na(e){var a,t,s,n,r,_,d=e._i,i=Sr.exec(d)||Hr.exec(d);if(i){for(l(e).iso=!0,a=0,t=jr.length;a<t;a++)if(jr[a][1].exec(i[1])){n=jr[a][0],s=jr[a][2]!==!1;break}if(null==n)return void(e._isValid=!1);if(i[3]){for(a=0,t=xr.length;a<t;a++)if(xr[a][1].exec(i[3])){r=(i[2]||" ")+xr[a][0];break}if(null==r)return void(e._isValid=!1)}if(!s&&null!=r)return void(e._isValid=!1);if(i[4]){if(!br.exec(i[4]))return void(e._isValid=!1);_="Z"}e._f=n+(r||"")+(_||""),ma(e)}else e._isValid=!1}function ra(a){var t=Pr.exec(a._i);return null!==t?void(a._d=new Date((+t[1]))):(na(a),void(a._isValid===!1&&(delete a._isValid,e.createFromInputFallback(a))))}function _a(e,a,t){return null!=e?e:null!=a?a:t}function da(a){var t=new Date(e.now());return a._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function ia(e){var a,t,s,n,r=[];if(!e._d){for(s=da(e),e._w&&null==e._a[er]&&null==e._a[Xn]&&oa(e),e._dayOfYear&&(n=_a(e._a[Qn],s[Qn]),e._dayOfYear>Le(n)&&(l(e)._overflowDayOfYear=!0),t=pe(n,0,e._dayOfYear),e._a[Xn]=t.getUTCMonth(),e._a[er]=t.getUTCDate()),a=0;a<3&&null==e._a[a];++a)e._a[a]=r[a]=s[a];for(;a<7;a++)e._a[a]=r[a]=null==e._a[a]?2===a?1:0:e._a[a];24===e._a[ar]&&0===e._a[tr]&&0===e._a[sr]&&0===e._a[nr]&&(e._nextDay=!0,e._a[ar]=0),e._d=(e._useUTC?pe:ye).apply(null,r),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[ar]=24)}}function oa(e){var a,t,s,n,r,_,d,i;if(a=e._w,null!=a.GG||null!=a.W||null!=a.E)r=1,_=4,t=_a(a.GG,e._a[Qn],De(ya(),1,4).year),s=_a(a.W,1),n=_a(a.E,1),(n<1||n>7)&&(i=!0);else{r=e._locale._week.dow,_=e._locale._week.doy;var o=De(ya(),r,_);t=_a(a.gg,e._a[Qn],o.year),s=_a(a.w,o.week),null!=a.d?(n=a.d,(n<0||n>6)&&(i=!0)):null!=a.e?(n=a.e+r,(a.e<0||a.e>6)&&(i=!0)):n=r}s<1||s>Te(t,r,_)?l(e)._overflowWeeks=!0:null!=i?l(e)._overflowWeekday=!0:(d=ke(t,s,n,r,_),e._a[Qn]=d.year,e._dayOfYear=d.dayOfYear)}function ma(a){if(a._f===e.ISO_8601)return void na(a);a._a=[],l(a).empty=!0;var t,s,n,r,_,d=""+a._i,i=d.length,o=0;for(n=q(a._f,a._locale).match(bn)||[],t=0;t<n.length;t++)r=n[t],s=(d.match(Q(r,a))||[])[0],s&&(_=d.substr(0,d.indexOf(s)),_.length>0&&l(a).unusedInput.push(_),d=d.slice(d.indexOf(s)+s.length),o+=s.length),Pn[r]?(s?l(a).empty=!1:l(a).unusedTokens.push(r),se(r,s,a)):a._strict&&!s&&l(a).unusedTokens.push(r);l(a).charsLeftOver=i-o,d.length>0&&l(a).unusedInput.push(d),a._a[ar]<=12&&l(a).bigHour===!0&&a._a[ar]>0&&(l(a).bigHour=void 0),l(a).parsedDateParts=a._a.slice(0),l(a).meridiem=a._meridiem,a._a[ar]=ua(a._locale,a._a[ar],a._meridiem),ia(a),sa(a)}function ua(e,a,t){var s;return null==t?a:null!=e.meridiemHour?e.meridiemHour(a,t):null!=e.isPM?(s=e.isPM(t),s&&a<12&&(a+=12),s||12!==a||(a=0),a):a}function la(e){var a,t,s,n,r;if(0===e._f.length)return l(e).invalidFormat=!0,void(e._d=new Date(NaN));for(n=0;n<e._f.length;n++)r=0,a=c({},e),null!=e._useUTC&&(a._useUTC=e._useUTC),a._f=e._f[n],ma(a),M(a)&&(r+=l(a).charsLeftOver,r+=10*l(a).unusedTokens.length,l(a).score=r,(null==s||r<s)&&(s=r,t=a));o(e,t||a)}function Ma(e){if(!e._d){var a=z(e._i);e._a=d([a.year,a.month,a.day||a.date,a.hour,a.minute,a.second,a.millisecond],function(e){return e&&parseInt(e,10)}),ia(e)}}function ha(e){var a=new Y(sa(La(e)));return a._nextDay&&(a.add(1,"d"),a._nextDay=void 0),a}function La(e){var a=e._i,s=e._f;return e._locale=e._locale||aa(e._l),null===a||void 0===s&&""===a?h({nullInput:!0}):("string"==typeof a&&(e._i=a=e._locale.preparse(a)),y(a)?new Y(sa(a)):(_(a)?e._d=a:t(s)?la(e):s?ma(e):ca(e),M(e)||(e._d=null),e))}function ca(a){var s=a._i;void 0===s?a._d=new Date(e.now()):_(s)?a._d=new Date(s.valueOf()):"string"==typeof s?ra(a):t(s)?(a._a=d(s.slice(0),function(e){return parseInt(e,10)}),ia(a)):"object"==typeof s?Ma(a):r(s)?a._d=new Date(s):e.createFromInputFallback(a)}function Ya(e,a,r,_,d){var i={};return r!==!0&&r!==!1||(_=r,r=void 0),(s(e)&&n(e)||t(e)&&0===e.length)&&(e=void 0),i._isAMomentObject=!0,i._useUTC=i._isUTC=d,i._l=r,i._i=e,i._f=a,i._strict=_,ha(i)}function ya(e,a,t,s){return Ya(e,a,t,s,!1)}function pa(e,a){var s,n;if(1===a.length&&t(a[0])&&(a=a[0]),!a.length)return ya();for(s=a[0],n=1;n<a.length;++n)a[n].isValid()&&!a[n][e](s)||(s=a[n]);return s}function fa(){var e=[].slice.call(arguments,0);return pa("isBefore",e)}function ka(){var e=[].slice.call(arguments,0);return pa("isAfter",e)}function Da(e){var a=z(e),t=a.year||0,s=a.quarter||0,n=a.month||0,r=a.week||0,_=a.day||0,d=a.hour||0,i=a.minute||0,o=a.second||0,m=a.millisecond||0;this._milliseconds=+m+1e3*o+6e4*i+1e3*d*60*60,this._days=+_+7*r,this._months=+n+3*s+12*t,this._data={},this._locale=aa(),this._bubble()}function Ta(e){return e instanceof Da}function ga(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function wa(e,a){V(e,0,0,function(){var e=this.utcOffset(),t="+";return e<0&&(e=-e,t="-"),t+U(~~(e/60),2)+a+U(~~e%60,2)})}function va(e,a){var t=(a||"").match(e);if(null===t)return null;var s=t[t.length-1]||[],n=(s+"").match(Fr)||["-",0,0],r=+(60*n[1])+f(n[2]);return 0===r?0:"+"===n[0]?r:-r}function Sa(a,t){var s,n;return t._isUTC?(s=t.clone(),n=(y(a)||_(a)?a.valueOf():ya(a).valueOf())-s.valueOf(),s._d.setTime(s._d.valueOf()+n),e.updateOffset(s,!1),s):ya(a).local()}function Ha(e){return 15*-Math.round(e._d.getTimezoneOffset()/15)}function ba(a,t){var s,n=this._offset||0;if(!this.isValid())return null!=a?this:NaN;if(null!=a){if("string"==typeof a){if(a=va($n,a),null===a)return this}else Math.abs(a)<16&&(a=60*a);return!this._isUTC&&t&&(s=Ha(this)),this._offset=a,this._isUTC=!0,null!=s&&this.add(s,"m"),n!==a&&(!t||this._changeInProgress?Ua(this,Ra(a-n,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,e.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?n:Ha(this)}function ja(e,a){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,a),this):-this.utcOffset()}function xa(e){return this.utcOffset(0,e)}function Pa(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Ha(this),"m")),this}function Wa(){if(null!=this._tzm)this.utcOffset(this._tzm);else if("string"==typeof this._i){var e=va(Vn,this._i);null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this}function Aa(e){return!!this.isValid()&&(e=e?ya(e).utcOffset():0,(this.utcOffset()-e)%60===0)}function Ea(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Fa(){if(!L(this._isDSTShifted))return this._isDSTShifted;var e={};if(c(e,this),e=La(e),e._a){var a=e._isUTC?m(e._a):ya(e._a);this._isDSTShifted=this.isValid()&&k(e._a,a.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function za(){return!!this.isValid()&&!this._isUTC}function Oa(){return!!this.isValid()&&this._isUTC}function Ja(){return!!this.isValid()&&this._isUTC&&0===this._offset}function Ra(e,a){var t,s,n,_=e,d=null;return Ta(e)?_={ms:e._milliseconds,d:e._days,M:e._months}:r(e)?(_={},a?_[a]=e:_.milliseconds=e):(d=zr.exec(e))?(t="-"===d[1]?-1:1,_={y:0,d:f(d[er])*t,h:f(d[ar])*t,m:f(d[tr])*t,s:f(d[sr])*t,ms:f(ga(1e3*d[nr]))*t}):(d=Or.exec(e))?(t="-"===d[1]?-1:1,_={y:Ia(d[2],t),M:Ia(d[3],t),w:Ia(d[4],t),d:Ia(d[5],t),h:Ia(d[6],t),m:Ia(d[7],t),s:Ia(d[8],t)}):null==_?_={}:"object"==typeof _&&("from"in _||"to"in _)&&(n=Ga(ya(_.from),ya(_.to)),_={},_.ms=n.milliseconds,_.M=n.months),s=new Da(_),Ta(e)&&i(e,"_locale")&&(s._locale=e._locale),s}function Ia(e,a){var t=e&&parseFloat(e.replace(",","."));return(isNaN(t)?0:t)*a}function Ca(e,a){var t={milliseconds:0,months:0};return t.months=a.month()-e.month()+12*(a.year()-e.year()),e.clone().add(t.months,"M").isAfter(a)&&--t.months,t.milliseconds=+a-+e.clone().add(t.months,"M"),t}function Ga(e,a){var t;return e.isValid()&&a.isValid()?(a=Sa(a,e),e.isBefore(a)?t=Ca(e,a):(t=Ca(a,e),t.milliseconds=-t.milliseconds,t.months=-t.months),t):{milliseconds:0,months:0}}function Na(e,a){return function(t,s){var n,r;return null===s||isNaN(+s)||(g(a,"moment()."+a+"(period, number) is deprecated. Please use moment()."+a+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),r=t,t=s,s=r),t="string"==typeof t?+t:t,n=Ra(t,s),Ua(this,n,e),this}}function Ua(a,t,s,n){var r=t._milliseconds,_=ga(t._days),d=ga(t._months);a.isValid()&&(n=null==n||n,r&&a._d.setTime(a._d.valueOf()+r*s),_&&C(a,"Date",I(a,"Date")+_*s),d&&oe(a,I(a,"Month")+d*s),n&&e.updateOffset(a,_||d))}function Va(e,a){var t=e.diff(a,"days",!0);return t<-6?"sameElse":t<-1?"lastWeek":t<0?"lastDay":t<1?"sameDay":t<2?"nextDay":t<7?"nextWeek":"sameElse"}function $a(a,t){var s=a||ya(),n=Sa(s,this).startOf("day"),r=e.calendarFormat(this,n)||"sameElse",_=t&&(w(t[r])?t[r].call(this,s):t[r]);return this.format(_||this.localeData().calendar(r,this,ya(s)))}function Ka(){return new Y(this)}function Za(e,a){var t=y(e)?e:ya(e);return!(!this.isValid()||!t.isValid())&&(a=F(L(a)?"millisecond":a),"millisecond"===a?this.valueOf()>t.valueOf():t.valueOf()<this.clone().startOf(a).valueOf())}function qa(e,a){var t=y(e)?e:ya(e);return!(!this.isValid()||!t.isValid())&&(a=F(L(a)?"millisecond":a),"millisecond"===a?this.valueOf()<t.valueOf():this.clone().endOf(a).valueOf()<t.valueOf())}function Ba(e,a,t,s){return s=s||"()",("("===s[0]?this.isAfter(e,t):!this.isBefore(e,t))&&(")"===s[1]?this.isBefore(a,t):!this.isAfter(a,t))}function Qa(e,a){var t,s=y(e)?e:ya(e);return!(!this.isValid()||!s.isValid())&&(a=F(a||"millisecond"),"millisecond"===a?this.valueOf()===s.valueOf():(t=s.valueOf(),this.clone().startOf(a).valueOf()<=t&&t<=this.clone().endOf(a).valueOf()))}function Xa(e,a){return this.isSame(e,a)||this.isAfter(e,a)}function et(e,a){return this.isSame(e,a)||this.isBefore(e,a)}function at(e,a,t){var s,n,r,_;return this.isValid()?(s=Sa(e,this),s.isValid()?(n=6e4*(s.utcOffset()-this.utcOffset()),a=F(a),"year"===a||"month"===a||"quarter"===a?(_=tt(this,s),"quarter"===a?_/=3:"year"===a&&(_/=12)):(r=this-s,_="second"===a?r/1e3:"minute"===a?r/6e4:"hour"===a?r/36e5:"day"===a?(r-n)/864e5:"week"===a?(r-n)/6048e5:r),t?_:p(_)):NaN):NaN}function tt(e,a){var t,s,n=12*(a.year()-e.year())+(a.month()-e.month()),r=e.clone().add(n,"months");return a-r<0?(t=e.clone().add(n-1,"months"),s=(a-r)/(r-t)):(t=e.clone().add(n+1,"months"),s=(a-r)/(t-r)),-(n+s)||0}function st(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function nt(){var e=this.clone().utc();return 0<e.year()&&e.year()<=9999?w(Date.prototype.toISOString)?this.toDate().toISOString():Z(e,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):Z(e,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function rt(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",a="";this.isLocal()||(e=0===this.utcOffset()?"moment.utc":"moment.parseZone",a="Z");var t="["+e+'("]',s=0<this.year()&&this.year()<=9999?"YYYY":"YYYYYY",n="-MM-DD[T]HH:mm:ss.SSS",r=a+'[")]';return this.format(t+s+n+r)}function _t(a){a||(a=this.isUtc()?e.defaultFormatUtc:e.defaultFormat);var t=Z(this,a);return this.localeData().postformat(t)}function dt(e,a){return this.isValid()&&(y(e)&&e.isValid()||ya(e).isValid())?Ra({to:this,from:e}).locale(this.locale()).humanize(!a):this.localeData().invalidDate()}function it(e){return this.from(ya(),e)}function ot(e,a){return this.isValid()&&(y(e)&&e.isValid()||ya(e).isValid())?Ra({from:this,to:e}).locale(this.locale()).humanize(!a):this.localeData().invalidDate()}function mt(e){return this.to(ya(),e)}function ut(e){var a;return void 0===e?this._locale._abbr:(a=aa(e),null!=a&&(this._locale=a),this)}function lt(){return this._locale}function Mt(e){switch(e=F(e)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===e&&this.weekday(0),"isoWeek"===e&&this.isoWeekday(1),"quarter"===e&&this.month(3*Math.floor(this.month()/3)),this}function ht(e){return e=F(e),void 0===e||"millisecond"===e?this:("date"===e&&(e="day"),this.startOf(e).add(1,"isoWeek"===e?"week":e).subtract(1,"ms"))}function Lt(){return this._d.valueOf()-6e4*(this._offset||0)}function ct(){return Math.floor(this.valueOf()/1e3)}function Yt(){return new Date(this.valueOf())}function yt(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function pt(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function ft(){return this.isValid()?this.toISOString():null}function kt(){return M(this)}function Dt(){return o({},l(this))}function Tt(){return l(this).overflow}function gt(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function wt(e,a){V(0,[e,e.length],0,a)}function vt(e){return jt.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function St(e){return jt.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function Ht(){return Te(this.year(),1,4)}function bt(){var e=this.localeData()._week;return Te(this.year(),e.dow,e.doy)}function jt(e,a,t,s,n){var r;return null==e?De(this,s,n).year:(r=Te(e,s,n),a>r&&(a=r),xt.call(this,e,a,t,s,n))}function xt(e,a,t,s,n){var r=ke(e,a,t,s,n),_=pe(r.year,0,r.dayOfYear);return this.year(_.getUTCFullYear()),this.month(_.getUTCMonth()),this.date(_.getUTCDate()),this}function Pt(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)}function Wt(e){var a=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?a:this.add(e-a,"d")}function At(e,a){a[nr]=f(1e3*("0."+e))}function Et(){return this._isUTC?"UTC":""}function Ft(){return this._isUTC?"Coordinated Universal Time":""}function zt(e){return ya(1e3*e)}function Ot(){return ya.apply(null,arguments).parseZone()}function Jt(e){return e}function Rt(e,a,t,s){var n=aa(),r=m().set(s,a);return n[t](r,e)}function It(e,a,t){if(r(e)&&(a=e,e=void 0),e=e||"",null!=a)return Rt(e,a,t,"month");var s,n=[];for(s=0;s<12;s++)n[s]=Rt(e,s,t,"month");return n;
}function Ct(e,a,t,s){"boolean"==typeof e?(r(a)&&(t=a,a=void 0),a=a||""):(a=e,t=a,e=!1,r(a)&&(t=a,a=void 0),a=a||"");var n=aa(),_=e?n._week.dow:0;if(null!=t)return Rt(a,(t+_)%7,s,"day");var d,i=[];for(d=0;d<7;d++)i[d]=Rt(a,(d+_)%7,s,"day");return i}function Gt(e,a){return It(e,a,"months")}function Nt(e,a){return It(e,a,"monthsShort")}function Ut(e,a,t){return Ct(e,a,t,"weekdays")}function Vt(e,a,t){return Ct(e,a,t,"weekdaysShort")}function $t(e,a,t){return Ct(e,a,t,"weekdaysMin")}function Kt(){var e=this._data;return this._milliseconds=Zr(this._milliseconds),this._days=Zr(this._days),this._months=Zr(this._months),e.milliseconds=Zr(e.milliseconds),e.seconds=Zr(e.seconds),e.minutes=Zr(e.minutes),e.hours=Zr(e.hours),e.months=Zr(e.months),e.years=Zr(e.years),this}function Zt(e,a,t,s){var n=Ra(a,t);return e._milliseconds+=s*n._milliseconds,e._days+=s*n._days,e._months+=s*n._months,e._bubble()}function qt(e,a){return Zt(this,e,a,1)}function Bt(e,a){return Zt(this,e,a,-1)}function Qt(e){return e<0?Math.floor(e):Math.ceil(e)}function Xt(){var e,a,t,s,n,r=this._milliseconds,_=this._days,d=this._months,i=this._data;return r>=0&&_>=0&&d>=0||r<=0&&_<=0&&d<=0||(r+=864e5*Qt(as(d)+_),_=0,d=0),i.milliseconds=r%1e3,e=p(r/1e3),i.seconds=e%60,a=p(e/60),i.minutes=a%60,t=p(a/60),i.hours=t%24,_+=p(t/24),n=p(es(_)),d+=n,_-=Qt(as(n)),s=p(d/12),d%=12,i.days=_,i.months=d,i.years=s,this}function es(e){return 4800*e/146097}function as(e){return 146097*e/4800}function ts(e){var a,t,s=this._milliseconds;if(e=F(e),"month"===e||"year"===e)return a=this._days+s/864e5,t=this._months+es(a),"month"===e?t:t/12;switch(a=this._days+Math.round(as(this._months)),e){case"week":return a/7+s/6048e5;case"day":return a+s/864e5;case"hour":return 24*a+s/36e5;case"minute":return 1440*a+s/6e4;case"second":return 86400*a+s/1e3;case"millisecond":return Math.floor(864e5*a)+s;default:throw new Error("Unknown unit "+e)}}function ss(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*f(this._months/12)}function ns(e){return function(){return this.as(e)}}function rs(e){return e=F(e),this[e+"s"]()}function _s(e){return function(){return this._data[e]}}function ds(){return p(this.days()/7)}function is(e,a,t,s,n){return n.relativeTime(a||1,!!t,e,s)}function os(e,a,t){var s=Ra(e).abs(),n=u_(s.as("s")),r=u_(s.as("m")),_=u_(s.as("h")),d=u_(s.as("d")),i=u_(s.as("M")),o=u_(s.as("y")),m=n<l_.s&&["s",n]||r<=1&&["m"]||r<l_.m&&["mm",r]||_<=1&&["h"]||_<l_.h&&["hh",_]||d<=1&&["d"]||d<l_.d&&["dd",d]||i<=1&&["M"]||i<l_.M&&["MM",i]||o<=1&&["y"]||["yy",o];return m[2]=a,m[3]=+e>0,m[4]=t,is.apply(null,m)}function ms(e){return void 0===e?u_:"function"==typeof e&&(u_=e,!0)}function us(e,a){return void 0!==l_[e]&&(void 0===a?l_[e]:(l_[e]=a,!0))}function ls(e){var a=this.localeData(),t=os(this,!e,a);return e&&(t=a.pastFuture(+this,t)),a.postformat(t)}function Ms(){var e,a,t,s=M_(this._milliseconds)/1e3,n=M_(this._days),r=M_(this._months);e=p(s/60),a=p(e/60),s%=60,e%=60,t=p(r/12),r%=12;var _=t,d=r,i=n,o=a,m=e,u=s,l=this.asSeconds();return l?(l<0?"-":"")+"P"+(_?_+"Y":"")+(d?d+"M":"")+(i?i+"D":"")+(o||m||u?"T":"")+(o?o+"H":"")+(m?m+"M":"")+(u?u+"S":""):"P0D"}function hs(e,a){var t=e.split("_");return a%10===1&&a%100!==11?t[0]:a%10>=2&&a%10<=4&&(a%100<10||a%100>=20)?t[1]:t[2]}function Ls(e,a,t){var s={mm:a?"хвіліна_хвіліны_хвілін":"хвіліну_хвіліны_хвілін",hh:a?"гадзіна_гадзіны_гадзін":"гадзіну_гадзіны_гадзін",dd:"дзень_дні_дзён",MM:"месяц_месяцы_месяцаў",yy:"год_гады_гадоў"};return"m"===t?a?"хвіліна":"хвіліну":"h"===t?a?"гадзіна":"гадзіну":e+" "+hs(s[t],+e)}function cs(e,a,t){var s={mm:"munutenn",MM:"miz",dd:"devezh"};return e+" "+ps(s[t],e)}function Ys(e){switch(ys(e)){case 1:case 3:case 4:case 5:case 9:return e+" bloaz";default:return e+" vloaz"}}function ys(e){return e>9?ys(e%10):e}function ps(e,a){return 2===a?fs(e):e}function fs(e){var a={m:"v",b:"v",d:"z"};return void 0===a[e.charAt(0)]?e:a[e.charAt(0)]+e.substring(1)}function ks(e,a,t){var s=e+" ";switch(t){case"m":return a?"jedna minuta":"jedne minute";case"mm":return s+=1===e?"minuta":2===e||3===e||4===e?"minute":"minuta";case"h":return a?"jedan sat":"jednog sata";case"hh":return s+=1===e?"sat":2===e||3===e||4===e?"sata":"sati";case"dd":return s+=1===e?"dan":"dana";case"MM":return s+=1===e?"mjesec":2===e||3===e||4===e?"mjeseca":"mjeseci";case"yy":return s+=1===e?"godina":2===e||3===e||4===e?"godine":"godina"}}function Ds(e){return e>1&&e<5&&1!==~~(e/10)}function Ts(e,a,t,s){var n=e+" ";switch(t){case"s":return a||s?"pár sekund":"pár sekundami";case"m":return a?"minuta":s?"minutu":"minutou";case"mm":return a||s?n+(Ds(e)?"minuty":"minut"):n+"minutami";case"h":return a?"hodina":s?"hodinu":"hodinou";case"hh":return a||s?n+(Ds(e)?"hodiny":"hodin"):n+"hodinami";case"d":return a||s?"den":"dnem";case"dd":return a||s?n+(Ds(e)?"dny":"dní"):n+"dny";case"M":return a||s?"měsíc":"měsícem";case"MM":return a||s?n+(Ds(e)?"měsíce":"měsíců"):n+"měsíci";case"y":return a||s?"rok":"rokem";case"yy":return a||s?n+(Ds(e)?"roky":"let"):n+"lety"}}function gs(e,a,t,s){var n={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[e+" Tage",e+" Tagen"],M:["ein Monat","einem Monat"],MM:[e+" Monate",e+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[e+" Jahre",e+" Jahren"]};return a?n[t][0]:n[t][1]}function ws(e,a,t,s){var n={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[e+" Tage",e+" Tagen"],M:["ein Monat","einem Monat"],MM:[e+" Monate",e+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[e+" Jahre",e+" Jahren"]};return a?n[t][0]:n[t][1]}function vs(e,a,t,s){var n={s:["mõne sekundi","mõni sekund","paar sekundit"],m:["ühe minuti","üks minut"],mm:[e+" minuti",e+" minutit"],h:["ühe tunni","tund aega","üks tund"],hh:[e+" tunni",e+" tundi"],d:["ühe päeva","üks päev"],M:["kuu aja","kuu aega","üks kuu"],MM:[e+" kuu",e+" kuud"],y:["ühe aasta","aasta","üks aasta"],yy:[e+" aasta",e+" aastat"]};return a?n[t][2]?n[t][2]:n[t][1]:s?n[t][0]:n[t][1]}function Ss(e,a,t,s){var n="";switch(t){case"s":return s?"muutaman sekunnin":"muutama sekunti";case"m":return s?"minuutin":"minuutti";case"mm":n=s?"minuutin":"minuuttia";break;case"h":return s?"tunnin":"tunti";case"hh":n=s?"tunnin":"tuntia";break;case"d":return s?"päivän":"päivä";case"dd":n=s?"päivän":"päivää";break;case"M":return s?"kuukauden":"kuukausi";case"MM":n=s?"kuukauden":"kuukautta";break;case"y":return s?"vuoden":"vuosi";case"yy":n=s?"vuoden":"vuotta"}return n=Hs(e,s)+" "+n}function Hs(e,a){return e<10?a?N_[e]:G_[e]:e}function bs(e,a,t){var s=e+" ";switch(t){case"m":return a?"jedna minuta":"jedne minute";case"mm":return s+=1===e?"minuta":2===e||3===e||4===e?"minute":"minuta";case"h":return a?"jedan sat":"jednog sata";case"hh":return s+=1===e?"sat":2===e||3===e||4===e?"sata":"sati";case"dd":return s+=1===e?"dan":"dana";case"MM":return s+=1===e?"mjesec":2===e||3===e||4===e?"mjeseca":"mjeseci";case"yy":return s+=1===e?"godina":2===e||3===e||4===e?"godine":"godina"}}function js(e,a,t,s){var n=e;switch(t){case"s":return s||a?"néhány másodperc":"néhány másodperce";case"m":return"egy"+(s||a?" perc":" perce");case"mm":return n+(s||a?" perc":" perce");case"h":return"egy"+(s||a?" óra":" órája");case"hh":return n+(s||a?" óra":" órája");case"d":return"egy"+(s||a?" nap":" napja");case"dd":return n+(s||a?" nap":" napja");case"M":return"egy"+(s||a?" hónap":" hónapja");case"MM":return n+(s||a?" hónap":" hónapja");case"y":return"egy"+(s||a?" év":" éve");case"yy":return n+(s||a?" év":" éve")}return""}function xs(e){return(e?"":"[múlt] ")+"["+ed[this.day()]+"] LT[-kor]"}function Ps(e){return e%100===11||e%10!==1}function Ws(e,a,t,s){var n=e+" ";switch(t){case"s":return a||s?"nokkrar sekúndur":"nokkrum sekúndum";case"m":return a?"mínúta":"mínútu";case"mm":return Ps(e)?n+(a||s?"mínútur":"mínútum"):a?n+"mínúta":n+"mínútu";case"hh":return Ps(e)?n+(a||s?"klukkustundir":"klukkustundum"):n+"klukkustund";case"d":return a?"dagur":s?"dag":"degi";case"dd":return Ps(e)?a?n+"dagar":n+(s?"daga":"dögum"):a?n+"dagur":n+(s?"dag":"degi");case"M":return a?"mánuður":s?"mánuð":"mánuði";case"MM":return Ps(e)?a?n+"mánuðir":n+(s?"mánuði":"mánuðum"):a?n+"mánuður":n+(s?"mánuð":"mánuði");case"y":return a||s?"ár":"ári";case"yy":return Ps(e)?n+(a||s?"ár":"árum"):n+(a||s?"ár":"ári")}}function As(e,a,t,s){var n={m:["eng Minutt","enger Minutt"],h:["eng Stonn","enger Stonn"],d:["een Dag","engem Dag"],M:["ee Mount","engem Mount"],y:["ee Joer","engem Joer"]};return a?n[t][0]:n[t][1]}function Es(e){var a=e.substr(0,e.indexOf(" "));return zs(a)?"a "+e:"an "+e}function Fs(e){var a=e.substr(0,e.indexOf(" "));return zs(a)?"viru "+e:"virun "+e}function zs(e){if(e=parseInt(e,10),isNaN(e))return!1;if(e<0)return!0;if(e<10)return 4<=e&&e<=7;if(e<100){var a=e%10,t=e/10;return zs(0===a?t:a)}if(e<1e4){for(;e>=10;)e/=10;return zs(e)}return e/=1e3,zs(e)}function Os(e,a,t,s){return a?"kelios sekundės":s?"kelių sekundžių":"kelias sekundes"}function Js(e,a,t,s){return a?Is(t)[0]:s?Is(t)[1]:Is(t)[2]}function Rs(e){return e%10===0||e>10&&e<20}function Is(e){return sd[e].split("_")}function Cs(e,a,t,s){var n=e+" ";return 1===e?n+Js(e,a,t[0],s):a?n+(Rs(e)?Is(t)[1]:Is(t)[0]):s?n+Is(t)[1]:n+(Rs(e)?Is(t)[1]:Is(t)[2])}function Gs(e,a,t){return t?a%10===1&&a%100!==11?e[2]:e[3]:a%10===1&&a%100!==11?e[0]:e[1]}function Ns(e,a,t){return e+" "+Gs(nd[t],e,a)}function Us(e,a,t){return Gs(nd[t],e,a)}function Vs(e,a){return a?"dažas sekundes":"dažām sekundēm"}function $s(e,a,t,s){var n="";if(a)switch(t){case"s":n="काही सेकंद";break;case"m":n="एक मिनिट";break;case"mm":n="%d मिनिटे";break;case"h":n="एक तास";break;case"hh":n="%d तास";break;case"d":n="एक दिवस";break;case"dd":n="%d दिवस";break;case"M":n="एक महिना";break;case"MM":n="%d महिने";break;case"y":n="एक वर्ष";break;case"yy":n="%d वर्षे"}else switch(t){case"s":n="काही सेकंदां";break;case"m":n="एका मिनिटा";break;case"mm":n="%d मिनिटां";break;case"h":n="एका तासा";break;case"hh":n="%d तासां";break;case"d":n="एका दिवसा";break;case"dd":n="%d दिवसां";break;case"M":n="एका महिन्या";break;case"MM":n="%d महिन्यां";break;case"y":n="एका वर्षा";break;case"yy":n="%d वर्षां"}return n.replace(/%d/i,e)}function Ks(e){return e%10<5&&e%10>1&&~~(e/10)%10!==1}function Zs(e,a,t){var s=e+" ";switch(t){case"m":return a?"minuta":"minutę";case"mm":return s+(Ks(e)?"minuty":"minut");case"h":return a?"godzina":"godzinę";case"hh":return s+(Ks(e)?"godziny":"godzin");case"MM":return s+(Ks(e)?"miesiące":"miesięcy");case"yy":return s+(Ks(e)?"lata":"lat")}}function qs(e,a,t){var s={mm:"minute",hh:"ore",dd:"zile",MM:"luni",yy:"ani"},n=" ";return(e%100>=20||e>=100&&e%100===0)&&(n=" de "),e+n+s[t]}function Bs(e,a){var t=e.split("_");return a%10===1&&a%100!==11?t[0]:a%10>=2&&a%10<=4&&(a%100<10||a%100>=20)?t[1]:t[2]}function Qs(e,a,t){var s={mm:a?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"};return"m"===t?a?"минута":"минуту":e+" "+Bs(s[t],+e)}function Xs(e){return e>1&&e<5}function en(e,a,t,s){var n=e+" ";switch(t){case"s":return a||s?"pár sekúnd":"pár sekundami";case"m":return a?"minúta":s?"minútu":"minútou";case"mm":return a||s?n+(Xs(e)?"minúty":"minút"):n+"minútami";case"h":return a?"hodina":s?"hodinu":"hodinou";case"hh":return a||s?n+(Xs(e)?"hodiny":"hodín"):n+"hodinami";case"d":return a||s?"deň":"dňom";case"dd":return a||s?n+(Xs(e)?"dni":"dní"):n+"dňami";case"M":return a||s?"mesiac":"mesiacom";case"MM":return a||s?n+(Xs(e)?"mesiace":"mesiacov"):n+"mesiacmi";case"y":return a||s?"rok":"rokom";case"yy":return a||s?n+(Xs(e)?"roky":"rokov"):n+"rokmi"}}function an(e,a,t,s){var n=e+" ";switch(t){case"s":return a||s?"nekaj sekund":"nekaj sekundami";case"m":return a?"ena minuta":"eno minuto";case"mm":return n+=1===e?a?"minuta":"minuto":2===e?a||s?"minuti":"minutama":e<5?a||s?"minute":"minutami":a||s?"minut":"minutami";case"h":return a?"ena ura":"eno uro";case"hh":return n+=1===e?a?"ura":"uro":2===e?a||s?"uri":"urama":e<5?a||s?"ure":"urami":a||s?"ur":"urami";case"d":return a||s?"en dan":"enim dnem";case"dd":return n+=1===e?a||s?"dan":"dnem":2===e?a||s?"dni":"dnevoma":a||s?"dni":"dnevi";case"M":return a||s?"en mesec":"enim mesecem";case"MM":return n+=1===e?a||s?"mesec":"mesecem":2===e?a||s?"meseca":"mesecema":e<5?a||s?"mesece":"meseci":a||s?"mesecev":"meseci";case"y":return a||s?"eno leto":"enim letom";case"yy":return n+=1===e?a||s?"leto":"letom":2===e?a||s?"leti":"letoma":e<5?a||s?"leta":"leti":a||s?"let":"leti"}}function tn(e){var a=e;return a=e.indexOf("jaj")!==-1?a.slice(0,-3)+"leS":e.indexOf("jar")!==-1?a.slice(0,-3)+"waQ":e.indexOf("DIS")!==-1?a.slice(0,-3)+"nem":a+" pIq"}function sn(e){var a=e;return a=e.indexOf("jaj")!==-1?a.slice(0,-3)+"Hu’":e.indexOf("jar")!==-1?a.slice(0,-3)+"wen":e.indexOf("DIS")!==-1?a.slice(0,-3)+"ben":a+" ret"}function nn(e,a,t,s){var n=rn(e);switch(t){case"mm":return n+" tup";case"hh":return n+" rep";case"dd":return n+" jaj";case"MM":return n+" jar";case"yy":return n+" DIS"}}function rn(e){var a=Math.floor(e%1e3/100),t=Math.floor(e%100/10),s=e%10,n="";return a>0&&(n+=xd[a]+"vatlh"),t>0&&(n+=(""!==n?" ":"")+xd[t]+"maH"),s>0&&(n+=(""!==n?" ":"")+xd[s]),""===n?"pagh":n}function _n(e,a,t,s){var n={s:["viensas secunds","'iensas secunds"],m:["'n míut","'iens míut"],mm:[e+" míuts",""+e+" míuts"],h:["'n þora","'iensa þora"],hh:[e+" þoras",""+e+" þoras"],d:["'n ziua","'iensa ziua"],dd:[e+" ziuas",""+e+" ziuas"],M:["'n mes","'iens mes"],MM:[e+" mesen",""+e+" mesen"],y:["'n ar","'iens ar"],yy:[e+" ars",""+e+" ars"]};return s?n[t][0]:a?n[t][0]:n[t][1]}function dn(e,a){var t=e.split("_");return a%10===1&&a%100!==11?t[0]:a%10>=2&&a%10<=4&&(a%100<10||a%100>=20)?t[1]:t[2]}function on(e,a,t){var s={mm:a?"хвилина_хвилини_хвилин":"хвилину_хвилини_хвилин",hh:a?"година_години_годин":"годину_години_годин",dd:"день_дні_днів",MM:"місяць_місяці_місяців",yy:"рік_роки_років"};return"m"===t?a?"хвилина":"хвилину":"h"===t?a?"година":"годину":e+" "+dn(s[t],+e)}function mn(e,a){var t={nominative:"неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),accusative:"неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),genitive:"неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")},s=/(\[[ВвУу]\]) ?dddd/.test(a)?"accusative":/\[?(?:минулої|наступної)? ?\] ?dddd/.test(a)?"genitive":"nominative";return t[s][e.day()]}function un(e){return function(){return e+"о"+(11===this.hours()?"б":"")+"] LT"}}var ln,Mn;Mn=Array.prototype.some?Array.prototype.some:function(e){for(var a=Object(this),t=a.length>>>0,s=0;s<t;s++)if(s in a&&e.call(this,a[s],s,a))return!0;return!1};var hn=Mn,Ln=e.momentProperties=[],cn=!1,Yn={};e.suppressDeprecationWarnings=!1,e.deprecationHandler=null;var yn;yn=Object.keys?Object.keys:function(e){var a,t=[];for(a in e)i(e,a)&&t.push(a);return t};var pn,fn=yn,kn={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},Dn={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},Tn="Invalid date",gn="%d",wn=/\d{1,2}/,vn={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Sn={},Hn={},bn=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,jn=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,xn={},Pn={},Wn=/\d/,An=/\d\d/,En=/\d{3}/,Fn=/\d{4}/,zn=/[+-]?\d{6}/,On=/\d\d?/,Jn=/\d\d\d\d?/,Rn=/\d\d\d\d\d\d?/,In=/\d{1,3}/,Cn=/\d{1,4}/,Gn=/[+-]?\d{1,6}/,Nn=/\d+/,Un=/[+-]?\d+/,Vn=/Z|[+-]\d\d:?\d\d/gi,$n=/Z|[+-]\d\d(?::?\d\d)?/gi,Kn=/[+-]?\d+(\.\d{1,3})?/,Zn=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,qn={},Bn={},Qn=0,Xn=1,er=2,ar=3,tr=4,sr=5,nr=6,rr=7,_r=8;pn=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var a;for(a=0;a<this.length;++a)if(this[a]===e)return a;return-1};var dr=pn;V("M",["MM",2],"Mo",function(){return this.month()+1}),V("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),V("MMMM",0,0,function(e){return this.localeData().months(this,e)}),E("month","M"),O("month",8),B("M",On),B("MM",On,An),B("MMM",function(e,a){return a.monthsShortRegex(e)}),B("MMMM",function(e,a){return a.monthsRegex(e)}),ae(["M","MM"],function(e,a){a[Xn]=f(e)-1}),ae(["MMM","MMMM"],function(e,a,t,s){var n=t._locale.monthsParse(e,s,t._strict);null!=n?a[Xn]=n:l(t).invalidMonth=e});var ir=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,or="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),mr="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),ur=Zn,lr=Zn;V("Y",0,0,function(){var e=this.year();return e<=9999?""+e:"+"+e}),V(0,["YY",2],0,function(){return this.year()%100}),V(0,["YYYY",4],0,"year"),V(0,["YYYYY",5],0,"year"),V(0,["YYYYYY",6,!0],0,"year"),E("year","y"),O("year",1),B("Y",Un),B("YY",On,An),B("YYYY",Cn,Fn),B("YYYYY",Gn,zn),B("YYYYYY",Gn,zn),ae(["YYYYY","YYYYYY"],Qn),ae("YYYY",function(a,t){t[Qn]=2===a.length?e.parseTwoDigitYear(a):f(a)}),ae("YY",function(a,t){t[Qn]=e.parseTwoDigitYear(a)}),ae("Y",function(e,a){a[Qn]=parseInt(e,10)}),e.parseTwoDigitYear=function(e){return f(e)+(f(e)>68?1900:2e3)};var Mr=R("FullYear",!0);V("w",["ww",2],"wo","week"),V("W",["WW",2],"Wo","isoWeek"),E("week","w"),E("isoWeek","W"),O("week",5),O("isoWeek",5),B("w",On),B("ww",On,An),B("W",On),B("WW",On,An),te(["w","ww","W","WW"],function(e,a,t,s){a[s.substr(0,1)]=f(e)});var hr={dow:0,doy:6};V("d",0,"do","day"),V("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),V("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),V("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),V("e",0,0,"weekday"),V("E",0,0,"isoWeekday"),E("day","d"),E("weekday","e"),E("isoWeekday","E"),O("day",11),O("weekday",11),O("isoWeekday",11),B("d",On),B("e",On),B("E",On),B("dd",function(e,a){return a.weekdaysMinRegex(e)}),B("ddd",function(e,a){return a.weekdaysShortRegex(e)}),B("dddd",function(e,a){return a.weekdaysRegex(e)}),te(["dd","ddd","dddd"],function(e,a,t,s){var n=t._locale.weekdaysParse(e,s,t._strict);null!=n?a.d=n:l(t).invalidWeekday=e}),te(["d","e","E"],function(e,a,t,s){a[s]=f(e)});var Lr="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),cr="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Yr="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),yr=Zn,pr=Zn,fr=Zn;V("H",["HH",2],0,"hour"),V("h",["hh",2],0,Ge),V("k",["kk",2],0,Ne),V("hmm",0,0,function(){return""+Ge.apply(this)+U(this.minutes(),2)}),V("hmmss",0,0,function(){return""+Ge.apply(this)+U(this.minutes(),2)+U(this.seconds(),2)}),V("Hmm",0,0,function(){return""+this.hours()+U(this.minutes(),2)}),V("Hmmss",0,0,function(){return""+this.hours()+U(this.minutes(),2)+U(this.seconds(),2)}),Ue("a",!0),Ue("A",!1),E("hour","h"),O("hour",13),B("a",Ve),B("A",Ve),B("H",On),B("h",On),B("HH",On,An),B("hh",On,An),B("hmm",Jn),B("hmmss",Rn),B("Hmm",Jn),B("Hmmss",Rn),ae(["H","HH"],ar),ae(["a","A"],function(e,a,t){t._isPm=t._locale.isPM(e),t._meridiem=e}),ae(["h","hh"],function(e,a,t){a[ar]=f(e),l(t).bigHour=!0}),ae("hmm",function(e,a,t){var s=e.length-2;a[ar]=f(e.substr(0,s)),a[tr]=f(e.substr(s)),l(t).bigHour=!0}),ae("hmmss",function(e,a,t){var s=e.length-4,n=e.length-2;a[ar]=f(e.substr(0,s)),a[tr]=f(e.substr(s,2)),a[sr]=f(e.substr(n)),l(t).bigHour=!0}),ae("Hmm",function(e,a,t){var s=e.length-2;a[ar]=f(e.substr(0,s)),a[tr]=f(e.substr(s))}),ae("Hmmss",function(e,a,t){var s=e.length-4,n=e.length-2;a[ar]=f(e.substr(0,s)),a[tr]=f(e.substr(s,2)),a[sr]=f(e.substr(n))});var kr,Dr=/[ap]\.?m?\.?/i,Tr=R("Hours",!0),gr={calendar:kn,longDateFormat:Dn,invalidDate:Tn,ordinal:gn,ordinalParse:wn,relativeTime:vn,months:or,monthsShort:mr,week:hr,weekdays:Lr,weekdaysMin:Yr,weekdaysShort:cr,meridiemParse:Dr},wr={},vr={},Sr=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Hr=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,br=/Z|[+-]\d\d(?::?\d\d)?/,jr=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],xr=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Pr=/^\/?Date\((\-?\d+)/i;e.createFromInputFallback=T("value provided is not in a recognized ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),e.ISO_8601=function(){};var Wr=T("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=ya.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:h()}),Ar=T("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=ya.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:h()}),Er=function(){return Date.now?Date.now():+new Date};wa("Z",":"),wa("ZZ",""),B("Z",$n),B("ZZ",$n),ae(["Z","ZZ"],function(e,a,t){t._useUTC=!0,t._tzm=va($n,e)});var Fr=/([\+\-]|\d\d)/gi;e.updateOffset=function(){};var zr=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,Or=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;Ra.fn=Da.prototype;var Jr=Na(1,"add"),Rr=Na(-1,"subtract");e.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",e.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Ir=T("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)});V(0,["gg",2],0,function(){return this.weekYear()%100}),V(0,["GG",2],0,function(){return this.isoWeekYear()%100}),wt("gggg","weekYear"),wt("ggggg","weekYear"),wt("GGGG","isoWeekYear"),wt("GGGGG","isoWeekYear"),E("weekYear","gg"),E("isoWeekYear","GG"),O("weekYear",1),O("isoWeekYear",1),B("G",Un),B("g",Un),B("GG",On,An),B("gg",On,An),B("GGGG",Cn,Fn),B("gggg",Cn,Fn),B("GGGGG",Gn,zn),B("ggggg",Gn,zn),te(["gggg","ggggg","GGGG","GGGGG"],function(e,a,t,s){a[s.substr(0,2)]=f(e)}),te(["gg","GG"],function(a,t,s,n){t[n]=e.parseTwoDigitYear(a)}),V("Q",0,"Qo","quarter"),E("quarter","Q"),O("quarter",7),B("Q",Wn),ae("Q",function(e,a){a[Xn]=3*(f(e)-1)}),V("D",["DD",2],"Do","date"),E("date","D"),O("date",9),B("D",On),B("DD",On,An),B("Do",function(e,a){return e?a._ordinalParse:a._ordinalParseLenient}),ae(["D","DD"],er),ae("Do",function(e,a){a[er]=f(e.match(On)[0],10)});var Cr=R("Date",!0);V("DDD",["DDDD",3],"DDDo","dayOfYear"),E("dayOfYear","DDD"),O("dayOfYear",4),B("DDD",In),B("DDDD",En),ae(["DDD","DDDD"],function(e,a,t){t._dayOfYear=f(e)}),V("m",["mm",2],0,"minute"),E("minute","m"),O("minute",14),B("m",On),B("mm",On,An),ae(["m","mm"],tr);var Gr=R("Minutes",!1);V("s",["ss",2],0,"second"),E("second","s"),O("second",15),B("s",On),B("ss",On,An),ae(["s","ss"],sr);var Nr=R("Seconds",!1);V("S",0,0,function(){return~~(this.millisecond()/100)}),V(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),V(0,["SSS",3],0,"millisecond"),V(0,["SSSS",4],0,function(){return 10*this.millisecond()}),V(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),V(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),V(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),V(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),V(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),E("millisecond","ms"),O("millisecond",16),B("S",In,Wn),B("SS",In,An),B("SSS",In,En);var Ur;for(Ur="SSSS";Ur.length<=9;Ur+="S")B(Ur,Nn);for(Ur="S";Ur.length<=9;Ur+="S")ae(Ur,At);var Vr=R("Milliseconds",!1);V("z",0,0,"zoneAbbr"),V("zz",0,0,"zoneName");var $r=Y.prototype;$r.add=Jr,$r.calendar=$a,$r.clone=Ka,$r.diff=at,$r.endOf=ht,$r.format=_t,$r.from=dt,$r.fromNow=it,$r.to=ot,$r.toNow=mt,$r.get=G,$r.invalidAt=Tt,$r.isAfter=Za,$r.isBefore=qa,$r.isBetween=Ba,$r.isSame=Qa,$r.isSameOrAfter=Xa,$r.isSameOrBefore=et,$r.isValid=kt,$r.lang=Ir,$r.locale=ut,$r.localeData=lt,$r.max=Ar,$r.min=Wr,$r.parsingFlags=Dt,$r.set=N,$r.startOf=Mt,$r.subtract=Rr,$r.toArray=yt,$r.toObject=pt,$r.toDate=Yt,$r.toISOString=nt,$r.inspect=rt,$r.toJSON=ft,$r.toString=st,$r.unix=ct,$r.valueOf=Lt,$r.creationData=gt,$r.year=Mr,$r.isLeapYear=Ye,$r.weekYear=vt,$r.isoWeekYear=St,$r.quarter=$r.quarters=Pt,$r.month=me,$r.daysInMonth=ue,$r.week=$r.weeks=Se,$r.isoWeek=$r.isoWeeks=He,$r.weeksInYear=bt,$r.isoWeeksInYear=Ht,$r.date=Cr,$r.day=$r.days=Fe,$r.weekday=ze,$r.isoWeekday=Oe,$r.dayOfYear=Wt,$r.hour=$r.hours=Tr,$r.minute=$r.minutes=Gr,$r.second=$r.seconds=Nr,$r.millisecond=$r.milliseconds=Vr,$r.utcOffset=ba,$r.utc=xa,$r.local=Pa,$r.parseZone=Wa,$r.hasAlignedHourOffset=Aa,$r.isDST=Ea,$r.isLocal=za,$r.isUtcOffset=Oa,$r.isUtc=Ja,$r.isUTC=Ja,$r.zoneAbbr=Et,$r.zoneName=Ft,$r.dates=T("dates accessor is deprecated. Use date instead.",Cr),$r.months=T("months accessor is deprecated. Use month instead",me),$r.years=T("years accessor is deprecated. Use year instead",Mr),$r.zone=T("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",ja),$r.isDSTShifted=T("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Fa);var Kr=H.prototype;Kr.calendar=b,Kr.longDateFormat=j,Kr.invalidDate=x,Kr.ordinal=P,Kr.preparse=Jt,Kr.postformat=Jt,Kr.relativeTime=W,Kr.pastFuture=A,Kr.set=v,Kr.months=re,Kr.monthsShort=_e,Kr.monthsParse=ie,Kr.monthsRegex=Me,Kr.monthsShortRegex=le,Kr.week=ge,Kr.firstDayOfYear=ve,Kr.firstDayOfWeek=we,Kr.weekdays=xe,Kr.weekdaysMin=We,Kr.weekdaysShort=Pe,Kr.weekdaysParse=Ee,Kr.weekdaysRegex=Je,Kr.weekdaysShortRegex=Re,Kr.weekdaysMinRegex=Ie,Kr.isPM=$e,Kr.meridiem=Ke,Qe("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var a=e%10,t=1===f(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th";return e+t}}),e.lang=T("moment.lang is deprecated. Use moment.locale instead.",Qe),e.langData=T("moment.langData is deprecated. Use moment.localeData instead.",aa);var Zr=Math.abs,qr=ns("ms"),Br=ns("s"),Qr=ns("m"),Xr=ns("h"),e_=ns("d"),a_=ns("w"),t_=ns("M"),s_=ns("y"),n_=_s("milliseconds"),r_=_s("seconds"),__=_s("minutes"),d_=_s("hours"),i_=_s("days"),o_=_s("months"),m_=_s("years"),u_=Math.round,l_={s:45,m:45,h:22,d:26,M:11},M_=Math.abs,h_=Da.prototype;h_.abs=Kt,h_.add=qt,h_.subtract=Bt,h_.as=ts,h_.asMilliseconds=qr,h_.asSeconds=Br,h_.asMinutes=Qr,h_.asHours=Xr,h_.asDays=e_,h_.asWeeks=a_,h_.asMonths=t_,h_.asYears=s_,h_.valueOf=ss,h_._bubble=Xt,h_.get=rs,h_.milliseconds=n_,h_.seconds=r_,h_.minutes=__,h_.hours=d_,h_.days=i_,h_.weeks=ds,h_.months=o_,h_.years=m_,h_.humanize=ls,h_.toISOString=Ms,h_.toString=Ms,h_.toJSON=Ms,h_.locale=ut,h_.localeData=lt,h_.toIsoString=T("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Ms),h_.lang=Ir,V("X",0,0,"unix"),V("x",0,0,"valueOf"),B("x",Un),B("X",Kn),ae("X",function(e,a,t){t._d=new Date(1e3*parseFloat(e,10))}),ae("x",function(e,a,t){t._d=new Date(f(e))}),e.version="2.17.1",a(ya),e.fn=$r,e.min=fa,e.max=ka,e.now=Er,e.utc=m,e.unix=zt,e.months=Gt,e.isDate=_,e.locale=Qe,e.invalid=h,e.duration=Ra,e.isMoment=y,e.weekdays=Ut,e.parseZone=Ot,e.localeData=aa,e.isDuration=Ta,e.monthsShort=Nt,e.weekdaysMin=$t,e.defineLocale=Xe,e.updateLocale=ea,e.locales=ta,e.weekdaysShort=Vt,e.normalizeUnits=F,e.relativeTimeRounding=ms,e.relativeTimeThreshold=us,e.calendarFormat=Va,e.prototype=$r,e.defineLocale("af",{months:"Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),weekdays:"Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),weekdaysShort:"Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),weekdaysMin:"So_Ma_Di_Wo_Do_Vr_Sa".split("_"),meridiemParse:/vm|nm/i,isPM:function(e){return/^nm$/i.test(e)},meridiem:function(e,a,t){return e<12?t?"vm":"VM":t?"nm":"NM"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Vandag om] LT",nextDay:"[Môre om] LT",nextWeek:"dddd [om] LT",lastDay:"[Gister om] LT",lastWeek:"[Laas] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oor %s",past:"%s gelede",s:"'n paar sekondes",m:"'n minuut",mm:"%d minute",h:"'n uur",hh:"%d ure",d:"'n dag",dd:"%d dae",M:"'n maand",MM:"%d maande",y:"'n jaar",yy:"%d jaar"},ordinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,doy:4}}),e.defineLocale("ar-dz",{months:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),monthsShort:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"أح_إث_ثلا_أر_خم_جم_سب".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:0,doy:4}});var L_={1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",0:"0"},c_=function(e){return 0===e?0:1===e?1:2===e?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5},Y_={s:["أقل من ثانية","ثانية واحدة",["ثانيتان","ثانيتين"],"%d ثوان","%d ثانية","%d ثانية"],m:["أقل من دقيقة","دقيقة واحدة",["دقيقتان","دقيقتين"],"%d دقائق","%d دقيقة","%d دقيقة"],h:["أقل من ساعة","ساعة واحدة",["ساعتان","ساعتين"],"%d ساعات","%d ساعة","%d ساعة"],d:["أقل من يوم","يوم واحد",["يومان","يومين"],"%d أيام","%d يومًا","%d يوم"],M:["أقل من شهر","شهر واحد",["شهران","شهرين"],"%d أشهر","%d شهرا","%d شهر"],y:["أقل من عام","عام واحد",["عامان","عامين"],"%d أعوام","%d عامًا","%d عام"]},y_=function(e){return function(a,t,s,n){var r=c_(a),_=Y_[e][c_(a)];return 2===r&&(_=_[t?0:1]),_.replace(/%d/i,a)}},p_=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"];e.defineLocale("ar-ly",{months:p_,monthsShort:p_,weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/‏M/‏YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/ص|م/,isPM:function(e){return"م"===e},meridiem:function(e,a,t){return e<12?"ص":"م"},calendar:{sameDay:"[اليوم عند الساعة] LT",nextDay:"[غدًا عند الساعة] LT",nextWeek:"dddd [عند الساعة] LT",lastDay:"[أمس عند الساعة] LT",lastWeek:"dddd [عند الساعة] LT",sameElse:"L"},relativeTime:{future:"بعد %s",past:"منذ %s",s:y_("s"),m:y_("m"),mm:y_("m"),h:y_("h"),hh:y_("h"),d:y_("d"),dd:y_("d"),M:y_("M"),MM:y_("M"),y:y_("y"),yy:y_("y")},preparse:function(e){
return e.replace(/\u200f/g,"").replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return L_[e]}).replace(/,/g,"،")},week:{dow:6,doy:12}}),e.defineLocale("ar-ma",{months:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),weekdays:"الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:6,doy:12}});var f_={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"},k_={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"};e.defineLocale("ar-sa",{months:"يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/ص|م/,isPM:function(e){return"م"===e},meridiem:function(e,a,t){return e<12?"ص":"م"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},preparse:function(e){return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g,function(e){return k_[e]}).replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return f_[e]}).replace(/,/g,"،")},week:{dow:0,doy:6}}),e.defineLocale("ar-tn",{months:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),monthsShort:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:1,doy:4}});var D_={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"},T_={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"},g_=function(e){return 0===e?0:1===e?1:2===e?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5},w_={s:["أقل من ثانية","ثانية واحدة",["ثانيتان","ثانيتين"],"%d ثوان","%d ثانية","%d ثانية"],m:["أقل من دقيقة","دقيقة واحدة",["دقيقتان","دقيقتين"],"%d دقائق","%d دقيقة","%d دقيقة"],h:["أقل من ساعة","ساعة واحدة",["ساعتان","ساعتين"],"%d ساعات","%d ساعة","%d ساعة"],d:["أقل من يوم","يوم واحد",["يومان","يومين"],"%d أيام","%d يومًا","%d يوم"],M:["أقل من شهر","شهر واحد",["شهران","شهرين"],"%d أشهر","%d شهرا","%d شهر"],y:["أقل من عام","عام واحد",["عامان","عامين"],"%d أعوام","%d عامًا","%d عام"]},v_=function(e){return function(a,t,s,n){var r=g_(a),_=w_[e][g_(a)];return 2===r&&(_=_[t?0:1]),_.replace(/%d/i,a)}},S_=["كانون الثاني يناير","شباط فبراير","آذار مارس","نيسان أبريل","أيار مايو","حزيران يونيو","تموز يوليو","آب أغسطس","أيلول سبتمبر","تشرين الأول أكتوبر","تشرين الثاني نوفمبر","كانون الأول ديسمبر"];e.defineLocale("ar",{months:S_,monthsShort:S_,weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/‏M/‏YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/ص|م/,isPM:function(e){return"م"===e},meridiem:function(e,a,t){return e<12?"ص":"م"},calendar:{sameDay:"[اليوم عند الساعة] LT",nextDay:"[غدًا عند الساعة] LT",nextWeek:"dddd [عند الساعة] LT",lastDay:"[أمس عند الساعة] LT",lastWeek:"dddd [عند الساعة] LT",sameElse:"L"},relativeTime:{future:"بعد %s",past:"منذ %s",s:v_("s"),m:v_("m"),mm:v_("m"),h:v_("h"),hh:v_("h"),d:v_("d"),dd:v_("d"),M:v_("M"),MM:v_("M"),y:v_("y"),yy:v_("y")},preparse:function(e){return e.replace(/\u200f/g,"").replace(/[١٢٣٤٥٦٧٨٩٠]/g,function(e){return T_[e]}).replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return D_[e]}).replace(/,/g,"،")},week:{dow:6,doy:12}});var H_={1:"-inci",5:"-inci",8:"-inci",70:"-inci",80:"-inci",2:"-nci",7:"-nci",20:"-nci",50:"-nci",3:"-üncü",4:"-üncü",100:"-üncü",6:"-ncı",9:"-uncu",10:"-uncu",30:"-uncu",60:"-ıncı",90:"-ıncı"};e.defineLocale("az",{months:"yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),monthsShort:"yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),weekdays:"Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),weekdaysShort:"Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),weekdaysMin:"Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[bugün saat] LT",nextDay:"[sabah saat] LT",nextWeek:"[gələn həftə] dddd [saat] LT",lastDay:"[dünən] LT",lastWeek:"[keçən həftə] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s əvvəl",s:"birneçə saniyyə",m:"bir dəqiqə",mm:"%d dəqiqə",h:"bir saat",hh:"%d saat",d:"bir gün",dd:"%d gün",M:"bir ay",MM:"%d ay",y:"bir il",yy:"%d il"},meridiemParse:/gecə|səhər|gündüz|axşam/,isPM:function(e){return/^(gündüz|axşam)$/.test(e)},meridiem:function(e,a,t){return e<4?"gecə":e<12?"səhər":e<17?"gündüz":"axşam"},ordinalParse:/\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,ordinal:function(e){if(0===e)return e+"-ıncı";var a=e%10,t=e%100-a,s=e>=100?100:null;return e+(H_[a]||H_[t]||H_[s])},week:{dow:1,doy:7}}),e.defineLocale("be",{months:{format:"студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),standalone:"студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")},monthsShort:"студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),weekdays:{format:"нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),standalone:"нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),isFormat:/\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/},weekdaysShort:"нд_пн_ат_ср_чц_пт_сб".split("_"),weekdaysMin:"нд_пн_ат_ср_чц_пт_сб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., HH:mm",LLLL:"dddd, D MMMM YYYY г., HH:mm"},calendar:{sameDay:"[Сёння ў] LT",nextDay:"[Заўтра ў] LT",lastDay:"[Учора ў] LT",nextWeek:function(){return"[У] dddd [ў] LT"},lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return"[У мінулую] dddd [ў] LT";case 1:case 2:case 4:return"[У мінулы] dddd [ў] LT"}},sameElse:"L"},relativeTime:{future:"праз %s",past:"%s таму",s:"некалькі секунд",m:Ls,mm:Ls,h:Ls,hh:Ls,d:"дзень",dd:Ls,M:"месяц",MM:Ls,y:"год",yy:Ls},meridiemParse:/ночы|раніцы|дня|вечара/,isPM:function(e){return/^(дня|вечара)$/.test(e)},meridiem:function(e,a,t){return e<4?"ночы":e<12?"раніцы":e<17?"дня":"вечара"},ordinalParse:/\d{1,2}-(і|ы|га)/,ordinal:function(e,a){switch(a){case"M":case"d":case"DDD":case"w":case"W":return e%10!==2&&e%10!==3||e%100===12||e%100===13?e+"-ы":e+"-і";case"D":return e+"-га";default:return e}},week:{dow:1,doy:7}}),e.defineLocale("bg",{months:"януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),monthsShort:"янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),weekdays:"неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),weekdaysShort:"нед_пон_вто_сря_чет_пет_съб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[Днес в] LT",nextDay:"[Утре в] LT",nextWeek:"dddd [в] LT",lastDay:"[Вчера в] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[В изминалата] dddd [в] LT";case 1:case 2:case 4:case 5:return"[В изминалия] dddd [в] LT"}},sameElse:"L"},relativeTime:{future:"след %s",past:"преди %s",s:"няколко секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дни",M:"месец",MM:"%d месеца",y:"година",yy:"%d години"},ordinalParse:/\d{1,2}-(ев|ен|ти|ви|ри|ми)/,ordinal:function(e){var a=e%10,t=e%100;return 0===e?e+"-ев":0===t?e+"-ен":t>10&&t<20?e+"-ти":1===a?e+"-ви":2===a?e+"-ри":7===a||8===a?e+"-ми":e+"-ти"},week:{dow:1,doy:7}});var b_={1:"১",2:"২",3:"৩",4:"৪",5:"৫",6:"৬",7:"৭",8:"৮",9:"৯",0:"০"},j_={"১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9","০":"0"};e.defineLocale("bn",{months:"জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),monthsShort:"জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),weekdays:"রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),weekdaysShort:"রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),weekdaysMin:"রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"),longDateFormat:{LT:"A h:mm সময়",LTS:"A h:mm:ss সময়",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm সময়",LLLL:"dddd, D MMMM YYYY, A h:mm সময়"},calendar:{sameDay:"[আজ] LT",nextDay:"[আগামীকাল] LT",nextWeek:"dddd, LT",lastDay:"[গতকাল] LT",lastWeek:"[গত] dddd, LT",sameElse:"L"},relativeTime:{future:"%s পরে",past:"%s আগে",s:"কয়েক সেকেন্ড",m:"এক মিনিট",mm:"%d মিনিট",h:"এক ঘন্টা",hh:"%d ঘন্টা",d:"এক দিন",dd:"%d দিন",M:"এক মাস",MM:"%d মাস",y:"এক বছর",yy:"%d বছর"},preparse:function(e){return e.replace(/[১২৩৪৫৬৭৮৯০]/g,function(e){return j_[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return b_[e]})},meridiemParse:/রাত|সকাল|দুপুর|বিকাল|রাত/,meridiemHour:function(e,a){return 12===e&&(e=0),"রাত"===a&&e>=4||"দুপুর"===a&&e<5||"বিকাল"===a?e+12:e},meridiem:function(e,a,t){return e<4?"রাত":e<10?"সকাল":e<17?"দুপুর":e<20?"বিকাল":"রাত"},week:{dow:0,doy:6}});var x_={1:"༡",2:"༢",3:"༣",4:"༤",5:"༥",6:"༦",7:"༧",8:"༨",9:"༩",0:"༠"},P_={"༡":"1","༢":"2","༣":"3","༤":"4","༥":"5","༦":"6","༧":"7","༨":"8","༩":"9","༠":"0"};e.defineLocale("bo",{months:"ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),monthsShort:"ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),weekdays:"གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),weekdaysShort:"ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),weekdaysMin:"ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[དི་རིང] LT",nextDay:"[སང་ཉིན] LT",nextWeek:"[བདུན་ཕྲག་རྗེས་མ], LT",lastDay:"[ཁ་སང] LT",lastWeek:"[བདུན་ཕྲག་མཐའ་མ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s ལ་",past:"%s སྔན་ལ",s:"ལམ་སང",m:"སྐར་མ་གཅིག",mm:"%d སྐར་མ",h:"ཆུ་ཚོད་གཅིག",hh:"%d ཆུ་ཚོད",d:"ཉིན་གཅིག",dd:"%d ཉིན་",M:"ཟླ་བ་གཅིག",MM:"%d ཟླ་བ",y:"ལོ་གཅིག",yy:"%d ལོ"},preparse:function(e){return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g,function(e){return P_[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return x_[e]})},meridiemParse:/མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,meridiemHour:function(e,a){return 12===e&&(e=0),"མཚན་མོ"===a&&e>=4||"ཉིན་གུང"===a&&e<5||"དགོང་དག"===a?e+12:e},meridiem:function(e,a,t){return e<4?"མཚན་མོ":e<10?"ཞོགས་ཀས":e<17?"ཉིན་གུང":e<20?"དགོང་དག":"མཚན་མོ"},week:{dow:0,doy:6}}),e.defineLocale("br",{months:"Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),monthsShort:"Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),weekdays:"Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),weekdaysShort:"Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),weekdaysMin:"Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h[e]mm A",LTS:"h[e]mm:ss A",L:"DD/MM/YYYY",LL:"D [a viz] MMMM YYYY",LLL:"D [a viz] MMMM YYYY h[e]mm A",LLLL:"dddd, D [a viz] MMMM YYYY h[e]mm A"},calendar:{sameDay:"[Hiziv da] LT",nextDay:"[Warc'hoazh da] LT",nextWeek:"dddd [da] LT",lastDay:"[Dec'h da] LT",lastWeek:"dddd [paset da] LT",sameElse:"L"},relativeTime:{future:"a-benn %s",past:"%s 'zo",s:"un nebeud segondennoù",m:"ur vunutenn",mm:cs,h:"un eur",hh:"%d eur",d:"un devezh",dd:cs,M:"ur miz",MM:cs,y:"ur bloaz",yy:Ys},ordinalParse:/\d{1,2}(añ|vet)/,ordinal:function(e){var a=1===e?"añ":"vet";return e+a},week:{dow:1,doy:4}}),e.defineLocale("bs",{months:"januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[jučer u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[prošlu] dddd [u] LT";case 6:return"[prošle] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[prošli] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",m:ks,mm:ks,h:ks,hh:ks,d:"dan",dd:ks,M:"mjesec",MM:ks,y:"godinu",yy:ks},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),e.defineLocale("ca",{months:"gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),monthsShort:"gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"),monthsParseExact:!0,weekdays:"diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),weekdaysShort:"dg._dl._dt._dc._dj._dv._ds.".split("_"),weekdaysMin:"Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd D MMMM YYYY H:mm"},calendar:{sameDay:function(){return"[avui a "+(1!==this.hours()?"les":"la")+"] LT"},nextDay:function(){return"[demà a "+(1!==this.hours()?"les":"la")+"] LT"},nextWeek:function(){return"dddd [a "+(1!==this.hours()?"les":"la")+"] LT"},lastDay:function(){return"[ahir a "+(1!==this.hours()?"les":"la")+"] LT"},lastWeek:function(){return"[el] dddd [passat a "+(1!==this.hours()?"les":"la")+"] LT"},sameElse:"L"},relativeTime:{future:"d'aquí %s",past:"fa %s",s:"uns segons",m:"un minut",mm:"%d minuts",h:"una hora",hh:"%d hores",d:"un dia",dd:"%d dies",M:"un mes",MM:"%d mesos",y:"un any",yy:"%d anys"},ordinalParse:/\d{1,2}(r|n|t|è|a)/,ordinal:function(e,a){var t=1===e?"r":2===e?"n":3===e?"r":4===e?"t":"è";return"w"!==a&&"W"!==a||(t="a"),e+t},week:{dow:1,doy:4}});var W_="leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),A_="led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");e.defineLocale("cs",{months:W_,monthsShort:A_,monthsParse:function(e,a){var t,s=[];for(t=0;t<12;t++)s[t]=new RegExp("^"+e[t]+"$|^"+a[t]+"$","i");return s}(W_,A_),shortMonthsParse:function(e){var a,t=[];for(a=0;a<12;a++)t[a]=new RegExp("^"+e[a]+"$","i");return t}(A_),longMonthsParse:function(e){var a,t=[];for(a=0;a<12;a++)t[a]=new RegExp("^"+e[a]+"$","i");return t}(W_),weekdays:"neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),weekdaysShort:"ne_po_út_st_čt_pá_so".split("_"),weekdaysMin:"ne_po_út_st_čt_pá_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},calendar:{sameDay:"[dnes v] LT",nextDay:"[zítra v] LT",nextWeek:function(){switch(this.day()){case 0:return"[v neděli v] LT";case 1:case 2:return"[v] dddd [v] LT";case 3:return"[ve středu v] LT";case 4:return"[ve čtvrtek v] LT";case 5:return"[v pátek v] LT";case 6:return"[v sobotu v] LT"}},lastDay:"[včera v] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulou neděli v] LT";case 1:case 2:return"[minulé] dddd [v] LT";case 3:return"[minulou středu v] LT";case 4:case 5:return"[minulý] dddd [v] LT";case 6:return"[minulou sobotu v] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"před %s",s:Ts,m:Ts,mm:Ts,h:Ts,hh:Ts,d:Ts,dd:Ts,M:Ts,MM:Ts,y:Ts,yy:Ts},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),e.defineLocale("cv",{months:"кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),monthsShort:"кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),weekdays:"вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),weekdaysShort:"выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),weekdaysMin:"вр_тн_ыт_юн_кҫ_эр_шм".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",LLL:"YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",LLLL:"dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"},calendar:{sameDay:"[Паян] LT [сехетре]",nextDay:"[Ыран] LT [сехетре]",lastDay:"[Ӗнер] LT [сехетре]",nextWeek:"[Ҫитес] dddd LT [сехетре]",lastWeek:"[Иртнӗ] dddd LT [сехетре]",sameElse:"L"},relativeTime:{future:function(e){var a=/сехет$/i.exec(e)?"рен":/ҫул$/i.exec(e)?"тан":"ран";return e+a},past:"%s каялла",s:"пӗр-ик ҫеккунт",m:"пӗр минут",mm:"%d минут",h:"пӗр сехет",hh:"%d сехет",d:"пӗр кун",dd:"%d кун",M:"пӗр уйӑх",MM:"%d уйӑх",y:"пӗр ҫул",yy:"%d ҫул"},ordinalParse:/\d{1,2}-мӗш/,ordinal:"%d-мӗш",week:{dow:1,doy:7}}),e.defineLocale("cy",{months:"Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),monthsShort:"Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),weekdays:"Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),weekdaysShort:"Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),weekdaysMin:"Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Heddiw am] LT",nextDay:"[Yfory am] LT",nextWeek:"dddd [am] LT",lastDay:"[Ddoe am] LT",lastWeek:"dddd [diwethaf am] LT",sameElse:"L"},relativeTime:{future:"mewn %s",past:"%s yn ôl",s:"ychydig eiliadau",m:"munud",mm:"%d munud",h:"awr",hh:"%d awr",d:"diwrnod",dd:"%d diwrnod",M:"mis",MM:"%d mis",y:"blwyddyn",yy:"%d flynedd"},ordinalParse:/\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,ordinal:function(e){var a=e,t="",s=["","af","il","ydd","ydd","ed","ed","ed","fed","fed","fed","eg","fed","eg","eg","fed","eg","eg","fed","eg","fed"];return a>20?t=40===a||50===a||60===a||80===a||100===a?"fed":"ain":a>0&&(t=s[a]),e+t},week:{dow:1,doy:4}}),e.defineLocale("da",{months:"januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"søn_man_tir_ons_tor_fre_lør".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd [d.] D. MMMM YYYY HH:mm"},calendar:{sameDay:"[I dag kl.] LT",nextDay:"[I morgen kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[I går kl.] LT",lastWeek:"[sidste] dddd [kl] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"få sekunder",m:"et minut",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dage",M:"en måned",MM:"%d måneder",y:"et år",yy:"%d år"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),e.defineLocale("de-at",{months:"Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",m:gs,mm:"%d Minuten",h:gs,hh:"%d Stunden",d:gs,dd:gs,M:gs,MM:gs,y:gs,yy:gs},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),e.defineLocale("de",{months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",m:ws,mm:"%d Minuten",h:ws,hh:"%d Stunden",d:ws,dd:ws,M:ws,MM:ws,y:ws,yy:ws},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});var E_=["ޖެނުއަރީ","ފެބްރުއަރީ","މާރިޗު","އޭޕްރީލު","މޭ","ޖޫން","ޖުލައި","އޯގަސްޓު","ސެޕްޓެމްބަރު","އޮކްޓޯބަރު","ނޮވެމްބަރު","ޑިސެމްބަރު"],F_=["އާދިއްތަ","ހޯމަ","އަންގާރަ","ބުދަ","ބުރާސްފަތި","ހުކުރު","ހޮނިހިރު"];e.defineLocale("dv",{months:E_,monthsShort:E_,weekdays:F_,weekdaysShort:F_,weekdaysMin:"އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/M/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/މކ|މފ/,isPM:function(e){return"މފ"===e},meridiem:function(e,a,t){return e<12?"މކ":"މފ"},calendar:{sameDay:"[މިއަދު] LT",nextDay:"[މާދަމާ] LT",nextWeek:"dddd LT",lastDay:"[އިއްޔެ] LT",lastWeek:"[ފާއިތުވި] dddd LT",sameElse:"L"},relativeTime:{future:"ތެރޭގައި %s",past:"ކުރިން %s",s:"ސިކުންތުކޮޅެއް",m:"މިނިޓެއް",mm:"މިނިޓު %d",h:"ގަޑިއިރެއް",hh:"ގަޑިއިރު %d",d:"ދުވަހެއް",dd:"ދުވަސް %d",M:"މަހެއް",MM:"މަސް %d",y:"އަހަރެއް",yy:"އަހަރު %d"},preparse:function(e){return e.replace(/،/g,",")},postformat:function(e){return e.replace(/,/g,"،")},week:{dow:7,doy:12}}),e.defineLocale("el",{monthsNominativeEl:"Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),monthsGenitiveEl:"Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),months:function(e,a){return/D/.test(a.substring(0,a.indexOf("MMMM")))?this._monthsGenitiveEl[e.month()]:this._monthsNominativeEl[e.month()]},monthsShort:"Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),weekdays:"Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),weekdaysShort:"Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),weekdaysMin:"Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),meridiem:function(e,a,t){return e>11?t?"μμ":"ΜΜ":t?"πμ":"ΠΜ"},isPM:function(e){return"μ"===(e+"").toLowerCase()[0]},meridiemParse:/[ΠΜ]\.?Μ?\.?/i,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendarEl:{sameDay:"[Σήμερα {}] LT",nextDay:"[Αύριο {}] LT",nextWeek:"dddd [{}] LT",lastDay:"[Χθες {}] LT",lastWeek:function(){switch(this.day()){case 6:return"[το προηγούμενο] dddd [{}] LT";default:return"[την προηγούμενη] dddd [{}] LT"}},sameElse:"L"},calendar:function(e,a){var t=this._calendarEl[e],s=a&&a.hours();return w(t)&&(t=t.apply(a)),t.replace("{}",s%12===1?"στη":"στις")},relativeTime:{future:"σε %s",past:"%s πριν",s:"λίγα δευτερόλεπτα",m:"ένα λεπτό",mm:"%d λεπτά",h:"μία ώρα",hh:"%d ώρες",d:"μία μέρα",dd:"%d μέρες",M:"ένας μήνας",MM:"%d μήνες",y:"ένας χρόνος",yy:"%d χρόνια"},ordinalParse:/\d{1,2}η/,ordinal:"%dη",week:{dow:1,doy:4}}),e.defineLocale("en-au",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10,t=1===~~(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th";return e+t},week:{dow:1,doy:4}}),e.defineLocale("en-ca",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"YYYY-MM-DD",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10,t=1===~~(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th";return e+t}}),e.defineLocale("en-gb",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10,t=1===~~(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th";return e+t},week:{dow:1,doy:4}}),e.defineLocale("en-ie",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10,t=1===~~(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th";return e+t},week:{dow:1,doy:4}}),e.defineLocale("en-nz",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10,t=1===~~(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th";return e+t},week:{dow:1,doy:4}}),e.defineLocale("eo",{months:"januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),weekdays:"Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato".split("_"),weekdaysShort:"Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Ĵa_Ve_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D[-an de] MMMM, YYYY",LLL:"D[-an de] MMMM, YYYY HH:mm",LLLL:"dddd, [la] D[-an de] MMMM, YYYY HH:mm"},meridiemParse:/[ap]\.t\.m/i,isPM:function(e){return"p"===e.charAt(0).toLowerCase()},meridiem:function(e,a,t){return e>11?t?"p.t.m.":"P.T.M.":t?"a.t.m.":"A.T.M."},calendar:{sameDay:"[Hodiaŭ je] LT",nextDay:"[Morgaŭ je] LT",nextWeek:"dddd [je] LT",lastDay:"[Hieraŭ je] LT",lastWeek:"[pasinta] dddd [je] LT",sameElse:"L"},relativeTime:{future:"je %s",past:"antaŭ %s",s:"sekundoj",m:"minuto",mm:"%d minutoj",h:"horo",hh:"%d horoj",d:"tago",dd:"%d tagoj",M:"monato",MM:"%d monatoj",y:"jaro",yy:"%d jaroj"},ordinalParse:/\d{1,2}a/,ordinal:"%da",week:{dow:1,doy:7}});var z_="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),O_="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
e.defineLocale("es-do",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,a){return/-MMM-/.test(a)?O_[e.month()]:z_[e.month()]},monthsParseExact:!0,weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY h:mm A",LLLL:"dddd, D [de] MMMM [de] YYYY h:mm A"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}});var J_="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),R_="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");e.defineLocale("es",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,a){return/-MMM-/.test(a)?R_[e.month()]:J_[e.month()]},monthsParseExact:!0,weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}}),e.defineLocale("et",{months:"jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),monthsShort:"jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),weekdays:"pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),weekdaysShort:"P_E_T_K_N_R_L".split("_"),weekdaysMin:"P_E_T_K_N_R_L".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[Täna,] LT",nextDay:"[Homme,] LT",nextWeek:"[Järgmine] dddd LT",lastDay:"[Eile,] LT",lastWeek:"[Eelmine] dddd LT",sameElse:"L"},relativeTime:{future:"%s pärast",past:"%s tagasi",s:vs,m:vs,mm:vs,h:vs,hh:vs,d:vs,dd:"%d päeva",M:vs,MM:vs,y:vs,yy:vs},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),e.defineLocale("eu",{months:"urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),monthsShort:"urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),monthsParseExact:!0,weekdays:"igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),weekdaysShort:"ig._al._ar._az._og._ol._lr.".split("_"),weekdaysMin:"ig_al_ar_az_og_ol_lr".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY[ko] MMMM[ren] D[a]",LLL:"YYYY[ko] MMMM[ren] D[a] HH:mm",LLLL:"dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",l:"YYYY-M-D",ll:"YYYY[ko] MMM D[a]",lll:"YYYY[ko] MMM D[a] HH:mm",llll:"ddd, YYYY[ko] MMM D[a] HH:mm"},calendar:{sameDay:"[gaur] LT[etan]",nextDay:"[bihar] LT[etan]",nextWeek:"dddd LT[etan]",lastDay:"[atzo] LT[etan]",lastWeek:"[aurreko] dddd LT[etan]",sameElse:"L"},relativeTime:{future:"%s barru",past:"duela %s",s:"segundo batzuk",m:"minutu bat",mm:"%d minutu",h:"ordu bat",hh:"%d ordu",d:"egun bat",dd:"%d egun",M:"hilabete bat",MM:"%d hilabete",y:"urte bat",yy:"%d urte"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}});var I_={1:"۱",2:"۲",3:"۳",4:"۴",5:"۵",6:"۶",7:"۷",8:"۸",9:"۹",0:"۰"},C_={"۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","۰":"0"};e.defineLocale("fa",{months:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),monthsShort:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),weekdays:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),weekdaysShort:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),weekdaysMin:"ی_د_س_چ_پ_ج_ش".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},meridiemParse:/قبل از ظهر|بعد از ظهر/,isPM:function(e){return/بعد از ظهر/.test(e)},meridiem:function(e,a,t){return e<12?"قبل از ظهر":"بعد از ظهر"},calendar:{sameDay:"[امروز ساعت] LT",nextDay:"[فردا ساعت] LT",nextWeek:"dddd [ساعت] LT",lastDay:"[دیروز ساعت] LT",lastWeek:"dddd [پیش] [ساعت] LT",sameElse:"L"},relativeTime:{future:"در %s",past:"%s پیش",s:"چندین ثانیه",m:"یک دقیقه",mm:"%d دقیقه",h:"یک ساعت",hh:"%d ساعت",d:"یک روز",dd:"%d روز",M:"یک ماه",MM:"%d ماه",y:"یک سال",yy:"%d سال"},preparse:function(e){return e.replace(/[۰-۹]/g,function(e){return C_[e]}).replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return I_[e]}).replace(/,/g,"،")},ordinalParse:/\d{1,2}م/,ordinal:"%dم",week:{dow:6,doy:12}});var G_="nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),N_=["nolla","yhden","kahden","kolmen","neljän","viiden","kuuden",G_[7],G_[8],G_[9]];e.defineLocale("fi",{months:"tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),monthsShort:"tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),weekdays:"sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),weekdaysShort:"su_ma_ti_ke_to_pe_la".split("_"),weekdaysMin:"su_ma_ti_ke_to_pe_la".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"Do MMMM[ta] YYYY",LLL:"Do MMMM[ta] YYYY, [klo] HH.mm",LLLL:"dddd, Do MMMM[ta] YYYY, [klo] HH.mm",l:"D.M.YYYY",ll:"Do MMM YYYY",lll:"Do MMM YYYY, [klo] HH.mm",llll:"ddd, Do MMM YYYY, [klo] HH.mm"},calendar:{sameDay:"[tänään] [klo] LT",nextDay:"[huomenna] [klo] LT",nextWeek:"dddd [klo] LT",lastDay:"[eilen] [klo] LT",lastWeek:"[viime] dddd[na] [klo] LT",sameElse:"L"},relativeTime:{future:"%s päästä",past:"%s sitten",s:Ss,m:Ss,mm:Ss,h:Ss,hh:Ss,d:Ss,dd:Ss,M:Ss,MM:Ss,y:Ss,yy:Ss},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),e.defineLocale("fo",{months:"januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),weekdaysShort:"sun_mán_týs_mik_hós_frí_ley".split("_"),weekdaysMin:"su_má_tý_mi_hó_fr_le".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D. MMMM, YYYY HH:mm"},calendar:{sameDay:"[Í dag kl.] LT",nextDay:"[Í morgin kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[Í gjár kl.] LT",lastWeek:"[síðstu] dddd [kl] LT",sameElse:"L"},relativeTime:{future:"um %s",past:"%s síðani",s:"fá sekund",m:"ein minutt",mm:"%d minuttir",h:"ein tími",hh:"%d tímar",d:"ein dagur",dd:"%d dagar",M:"ein mánaði",MM:"%d mánaðir",y:"eitt ár",yy:"%d ár"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),e.defineLocale("fr-ca",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd'hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinalParse:/\d{1,2}(er|e)/,ordinal:function(e){return e+(1===e?"er":"e")}}),e.defineLocale("fr-ch",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd'hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinalParse:/\d{1,2}(er|e)/,ordinal:function(e){return e+(1===e?"er":"e")},week:{dow:1,doy:4}}),e.defineLocale("fr",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd'hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinalParse:/\d{1,2}(er|)/,ordinal:function(e){return e+(1===e?"er":"")},week:{dow:1,doy:4}});var U_="jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),V_="jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");e.defineLocale("fy",{months:"jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),monthsShort:function(e,a){return/-MMM-/.test(a)?V_[e.month()]:U_[e.month()]},monthsParseExact:!0,weekdays:"snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),weekdaysShort:"si._mo._ti._wo._to._fr._so.".split("_"),weekdaysMin:"Si_Mo_Ti_Wo_To_Fr_So".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[hjoed om] LT",nextDay:"[moarn om] LT",nextWeek:"dddd [om] LT",lastDay:"[juster om] LT",lastWeek:"[ôfrûne] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oer %s",past:"%s lyn",s:"in pear sekonden",m:"ien minút",mm:"%d minuten",h:"ien oere",hh:"%d oeren",d:"ien dei",dd:"%d dagen",M:"ien moanne",MM:"%d moannen",y:"ien jier",yy:"%d jierren"},ordinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,doy:4}});var $_=["Am Faoilleach","An Gearran","Am Màrt","An Giblean","An Cèitean","An t-Ògmhios","An t-Iuchar","An Lùnastal","An t-Sultain","An Dàmhair","An t-Samhain","An Dùbhlachd"],K_=["Faoi","Gear","Màrt","Gibl","Cèit","Ògmh","Iuch","Lùn","Sult","Dàmh","Samh","Dùbh"],Z_=["Didòmhnaich","Diluain","Dimàirt","Diciadain","Diardaoin","Dihaoine","Disathairne"],q_=["Did","Dil","Dim","Dic","Dia","Dih","Dis"],B_=["Dò","Lu","Mà","Ci","Ar","Ha","Sa"];e.defineLocale("gd",{months:$_,monthsShort:K_,monthsParseExact:!0,weekdays:Z_,weekdaysShort:q_,weekdaysMin:B_,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[An-diugh aig] LT",nextDay:"[A-màireach aig] LT",nextWeek:"dddd [aig] LT",lastDay:"[An-dè aig] LT",lastWeek:"dddd [seo chaidh] [aig] LT",sameElse:"L"},relativeTime:{future:"ann an %s",past:"bho chionn %s",s:"beagan diogan",m:"mionaid",mm:"%d mionaidean",h:"uair",hh:"%d uairean",d:"latha",dd:"%d latha",M:"mìos",MM:"%d mìosan",y:"bliadhna",yy:"%d bliadhna"},ordinalParse:/\d{1,2}(d|na|mh)/,ordinal:function(e){var a=1===e?"d":e%10===2?"na":"mh";return e+a},week:{dow:1,doy:4}}),e.defineLocale("gl",{months:"xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),monthsShort:"xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),weekdaysShort:"dom._lun._mar._mér._xov._ven._sáb.".split("_"),weekdaysMin:"do_lu_ma_mé_xo_ve_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoxe "+(1!==this.hours()?"ás":"á")+"] LT"},nextDay:function(){return"[mañá "+(1!==this.hours()?"ás":"á")+"] LT"},nextWeek:function(){return"dddd ["+(1!==this.hours()?"ás":"a")+"] LT"},lastDay:function(){return"[onte "+(1!==this.hours()?"á":"a")+"] LT"},lastWeek:function(){return"[o] dddd [pasado "+(1!==this.hours()?"ás":"a")+"] LT"},sameElse:"L"},relativeTime:{future:function(e){return 0===e.indexOf("un")?"n"+e:"en "+e},past:"hai %s",s:"uns segundos",m:"un minuto",mm:"%d minutos",h:"unha hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un ano",yy:"%d anos"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}}),e.defineLocale("he",{months:"ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),monthsShort:"ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),weekdays:"ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),weekdaysShort:"א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),weekdaysMin:"א_ב_ג_ד_ה_ו_ש".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [ב]MMMM YYYY",LLL:"D [ב]MMMM YYYY HH:mm",LLLL:"dddd, D [ב]MMMM YYYY HH:mm",l:"D/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},calendar:{sameDay:"[היום ב־]LT",nextDay:"[מחר ב־]LT",nextWeek:"dddd [בשעה] LT",lastDay:"[אתמול ב־]LT",lastWeek:"[ביום] dddd [האחרון בשעה] LT",sameElse:"L"},relativeTime:{future:"בעוד %s",past:"לפני %s",s:"מספר שניות",m:"דקה",mm:"%d דקות",h:"שעה",hh:function(e){return 2===e?"שעתיים":e+" שעות"},d:"יום",dd:function(e){return 2===e?"יומיים":e+" ימים"},M:"חודש",MM:function(e){return 2===e?"חודשיים":e+" חודשים"},y:"שנה",yy:function(e){return 2===e?"שנתיים":e%10===0&&10!==e?e+" שנה":e+" שנים"}},meridiemParse:/אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,isPM:function(e){return/^(אחה"צ|אחרי הצהריים|בערב)$/.test(e)},meridiem:function(e,a,t){return e<5?"לפנות בוקר":e<10?"בבוקר":e<12?t?'לפנה"צ':"לפני הצהריים":e<18?t?'אחה"צ':"אחרי הצהריים":"בערב"}});var Q_={1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},X_={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"};e.defineLocale("hi",{months:"जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),monthsShort:"जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),monthsParseExact:!0,weekdays:"रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),weekdaysShort:"रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),weekdaysMin:"र_सो_मं_बु_गु_शु_श".split("_"),longDateFormat:{LT:"A h:mm बजे",LTS:"A h:mm:ss बजे",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm बजे",LLLL:"dddd, D MMMM YYYY, A h:mm बजे"},calendar:{sameDay:"[आज] LT",nextDay:"[कल] LT",nextWeek:"dddd, LT",lastDay:"[कल] LT",lastWeek:"[पिछले] dddd, LT",sameElse:"L"},relativeTime:{future:"%s में",past:"%s पहले",s:"कुछ ही क्षण",m:"एक मिनट",mm:"%d मिनट",h:"एक घंटा",hh:"%d घंटे",d:"एक दिन",dd:"%d दिन",M:"एक महीने",MM:"%d महीने",y:"एक वर्ष",yy:"%d वर्ष"},preparse:function(e){return e.replace(/[१२३४५६७८९०]/g,function(e){return X_[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return Q_[e]})},meridiemParse:/रात|सुबह|दोपहर|शाम/,meridiemHour:function(e,a){return 12===e&&(e=0),"रात"===a?e<4?e:e+12:"सुबह"===a?e:"दोपहर"===a?e>=10?e:e+12:"शाम"===a?e+12:void 0},meridiem:function(e,a,t){return e<4?"रात":e<10?"सुबह":e<17?"दोपहर":e<20?"शाम":"रात"},week:{dow:0,doy:6}}),e.defineLocale("hr",{months:{format:"siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),standalone:"siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")},monthsShort:"sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[jučer u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[prošlu] dddd [u] LT";case 6:return"[prošle] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[prošli] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",m:bs,mm:bs,h:bs,hh:bs,d:"dan",dd:bs,M:"mjesec",MM:bs,y:"godinu",yy:bs},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}});var ed="vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");e.defineLocale("hu",{months:"január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),monthsShort:"jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),weekdays:"vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),weekdaysShort:"vas_hét_kedd_sze_csüt_pén_szo".split("_"),weekdaysMin:"v_h_k_sze_cs_p_szo".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D. H:mm",LLLL:"YYYY. MMMM D., dddd H:mm"},meridiemParse:/de|du/i,isPM:function(e){return"u"===e.charAt(1).toLowerCase()},meridiem:function(e,a,t){return e<12?t===!0?"de":"DE":t===!0?"du":"DU"},calendar:{sameDay:"[ma] LT[-kor]",nextDay:"[holnap] LT[-kor]",nextWeek:function(){return xs.call(this,!0)},lastDay:"[tegnap] LT[-kor]",lastWeek:function(){return xs.call(this,!1)},sameElse:"L"},relativeTime:{future:"%s múlva",past:"%s",s:js,m:js,mm:js,h:js,hh:js,d:js,dd:js,M:js,MM:js,y:js,yy:js},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),e.defineLocale("hy-am",{months:{format:"հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),standalone:"հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")},monthsShort:"հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),weekdays:"կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),weekdaysShort:"կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),weekdaysMin:"կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY թ.",LLL:"D MMMM YYYY թ., HH:mm",LLLL:"dddd, D MMMM YYYY թ., HH:mm"},calendar:{sameDay:"[այսօր] LT",nextDay:"[վաղը] LT",lastDay:"[երեկ] LT",nextWeek:function(){return"dddd [օրը ժամը] LT"},lastWeek:function(){return"[անցած] dddd [օրը ժամը] LT"},sameElse:"L"},relativeTime:{future:"%s հետո",past:"%s առաջ",s:"մի քանի վայրկյան",m:"րոպե",mm:"%d րոպե",h:"ժամ",hh:"%d ժամ",d:"օր",dd:"%d օր",M:"ամիս",MM:"%d ամիս",y:"տարի",yy:"%d տարի"},meridiemParse:/գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,isPM:function(e){return/^(ցերեկվա|երեկոյան)$/.test(e)},meridiem:function(e){return e<4?"գիշերվա":e<12?"առավոտվա":e<17?"ցերեկվա":"երեկոյան"},ordinalParse:/\d{1,2}|\d{1,2}-(ին|րդ)/,ordinal:function(e,a){switch(a){case"DDD":case"w":case"W":case"DDDo":return 1===e?e+"-ին":e+"-րդ";default:return e}},week:{dow:1,doy:7}}),e.defineLocale("id",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),weekdays:"Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),weekdaysShort:"Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|siang|sore|malam/,meridiemHour:function(e,a){return 12===e&&(e=0),"pagi"===a?e:"siang"===a?e>=11?e:e+12:"sore"===a||"malam"===a?e+12:void 0},meridiem:function(e,a,t){return e<11?"pagi":e<15?"siang":e<19?"sore":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Besok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kemarin pukul] LT",lastWeek:"dddd [lalu pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lalu",s:"beberapa detik",m:"semenit",mm:"%d menit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}}),e.defineLocale("is",{months:"janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),monthsShort:"jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),weekdays:"sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),weekdaysShort:"sun_mán_þri_mið_fim_fös_lau".split("_"),weekdaysMin:"Su_Má_Þr_Mi_Fi_Fö_La".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd, D. MMMM YYYY [kl.] H:mm"},calendar:{sameDay:"[í dag kl.] LT",nextDay:"[á morgun kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[í gær kl.] LT",lastWeek:"[síðasta] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"eftir %s",past:"fyrir %s síðan",s:Ws,m:Ws,mm:Ws,h:"klukkustund",hh:Ws,d:Ws,dd:Ws,M:Ws,MM:Ws,y:Ws,yy:Ws},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),e.defineLocale("it",{months:"gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),monthsShort:"gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),weekdays:"Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"),weekdaysShort:"Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),weekdaysMin:"Do_Lu_Ma_Me_Gi_Ve_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Oggi alle] LT",nextDay:"[Domani alle] LT",nextWeek:"dddd [alle] LT",lastDay:"[Ieri alle] LT",lastWeek:function(){switch(this.day()){case 0:return"[la scorsa] dddd [alle] LT";default:return"[lo scorso] dddd [alle] LT"}},sameElse:"L"},relativeTime:{future:function(e){return(/^[0-9].+$/.test(e)?"tra":"in")+" "+e},past:"%s fa",s:"alcuni secondi",m:"un minuto",mm:"%d minuti",h:"un'ora",hh:"%d ore",d:"un giorno",dd:"%d giorni",M:"un mese",MM:"%d mesi",y:"un anno",yy:"%d anni"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}}),e.defineLocale("ja",{months:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),weekdaysShort:"日_月_火_水_木_金_土".split("_"),weekdaysMin:"日_月_火_水_木_金_土".split("_"),longDateFormat:{LT:"Ah時m分",LTS:"Ah時m分s秒",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah時m分",LLLL:"YYYY年M月D日Ah時m分 dddd"},meridiemParse:/午前|午後/i,isPM:function(e){return"午後"===e},meridiem:function(e,a,t){return e<12?"午前":"午後"},calendar:{sameDay:"[今日] LT",nextDay:"[明日] LT",nextWeek:"[来週]dddd LT",lastDay:"[昨日] LT",lastWeek:"[前週]dddd LT",sameElse:"L"},ordinalParse:/\d{1,2}日/,ordinal:function(e,a){switch(a){case"d":case"D":case"DDD":return e+"日";default:return e}},relativeTime:{future:"%s後",past:"%s前",s:"数秒",m:"1分",mm:"%d分",h:"1時間",hh:"%d時間",d:"1日",dd:"%d日",M:"1ヶ月",MM:"%dヶ月",y:"1年",yy:"%d年"}}),e.defineLocale("jv",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),weekdays:"Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),weekdaysShort:"Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/enjing|siyang|sonten|ndalu/,meridiemHour:function(e,a){return 12===e&&(e=0),"enjing"===a?e:"siyang"===a?e>=11?e:e+12:"sonten"===a||"ndalu"===a?e+12:void 0},meridiem:function(e,a,t){return e<11?"enjing":e<15?"siyang":e<19?"sonten":"ndalu"},calendar:{sameDay:"[Dinten puniko pukul] LT",nextDay:"[Mbenjang pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kala wingi pukul] LT",lastWeek:"dddd [kepengker pukul] LT",sameElse:"L"},relativeTime:{future:"wonten ing %s",past:"%s ingkang kepengker",s:"sawetawis detik",m:"setunggal menit",mm:"%d menit",h:"setunggal jam",hh:"%d jam",d:"sedinten",dd:"%d dinten",M:"sewulan",MM:"%d wulan",y:"setaun",yy:"%d taun"},week:{dow:1,doy:7}}),e.defineLocale("ka",{months:{standalone:"იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),format:"იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")},monthsShort:"იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),weekdays:{standalone:"კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),format:"კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),isFormat:/(წინა|შემდეგ)/},weekdaysShort:"კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),weekdaysMin:"კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[დღეს] LT[-ზე]",nextDay:"[ხვალ] LT[-ზე]",lastDay:"[გუშინ] LT[-ზე]",nextWeek:"[შემდეგ] dddd LT[-ზე]",lastWeek:"[წინა] dddd LT-ზე",sameElse:"L"},relativeTime:{future:function(e){return/(წამი|წუთი|საათი|წელი)/.test(e)?e.replace(/ი$/,"ში"):e+"ში"},past:function(e){return/(წამი|წუთი|საათი|დღე|თვე)/.test(e)?e.replace(/(ი|ე)$/,"ის წინ"):/წელი/.test(e)?e.replace(/წელი$/,"წლის წინ"):void 0},s:"რამდენიმე წამი",m:"წუთი",mm:"%d წუთი",h:"საათი",hh:"%d საათი",d:"დღე",dd:"%d დღე",M:"თვე",MM:"%d თვე",y:"წელი",yy:"%d წელი"},ordinalParse:/0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,ordinal:function(e){return 0===e?e:1===e?e+"-ლი":e<20||e<=100&&e%20===0||e%100===0?"მე-"+e:e+"-ე"},week:{dow:1,doy:7}});var ad={0:"-ші",1:"-ші",2:"-ші",3:"-ші",4:"-ші",5:"-ші",6:"-шы",7:"-ші",8:"-ші",9:"-шы",10:"-шы",20:"-шы",30:"-шы",40:"-шы",50:"-ші",60:"-шы",70:"-ші",80:"-ші",90:"-шы",100:"-ші"};e.defineLocale("kk",{months:"қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),monthsShort:"қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),weekdays:"жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),weekdaysShort:"жек_дүй_сей_сәр_бей_жұм_сен".split("_"),weekdaysMin:"жк_дй_сй_ср_бй_жм_сн".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Бүгін сағат] LT",nextDay:"[Ертең сағат] LT",nextWeek:"dddd [сағат] LT",lastDay:"[Кеше сағат] LT",lastWeek:"[Өткен аптаның] dddd [сағат] LT",sameElse:"L"},relativeTime:{future:"%s ішінде",past:"%s бұрын",s:"бірнеше секунд",m:"бір минут",mm:"%d минут",h:"бір сағат",hh:"%d сағат",d:"бір күн",dd:"%d күн",M:"бір ай",MM:"%d ай",y:"бір жыл",yy:"%d жыл"},ordinalParse:/\d{1,2}-(ші|шы)/,ordinal:function(e){var a=e%10,t=e>=100?100:null;return e+(ad[e]||ad[a]||ad[t])},week:{dow:1,doy:7}}),e.defineLocale("km",{months:"មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),monthsShort:"មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),weekdays:"អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),weekdaysShort:"អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),weekdaysMin:"អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[ថ្ងៃនេះ ម៉ោង] LT",nextDay:"[ស្អែក ម៉ោង] LT",nextWeek:"dddd [ម៉ោង] LT",lastDay:"[ម្សិលមិញ ម៉ោង] LT",lastWeek:"dddd [សប្តាហ៍មុន] [ម៉ោង] LT",sameElse:"L"},relativeTime:{future:"%sទៀត",past:"%sមុន",s:"ប៉ុន្មានវិនាទី",m:"មួយនាទី",mm:"%d នាទី",h:"មួយម៉ោង",hh:"%d ម៉ោង",d:"មួយថ្ងៃ",dd:"%d ថ្ងៃ",M:"មួយខែ",MM:"%d ខែ",y:"មួយឆ្នាំ",yy:"%d ឆ្នាំ"},week:{dow:1,doy:4}}),e.defineLocale("ko",{months:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),monthsShort:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),weekdays:"일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),weekdaysShort:"일_월_화_수_목_금_토".split("_"),weekdaysMin:"일_월_화_수_목_금_토".split("_"),longDateFormat:{LT:"A h시 m분",LTS:"A h시 m분 s초",L:"YYYY.MM.DD",LL:"YYYY년 MMMM D일",LLL:"YYYY년 MMMM D일 A h시 m분",LLLL:"YYYY년 MMMM D일 dddd A h시 m분"},calendar:{sameDay:"오늘 LT",nextDay:"내일 LT",nextWeek:"dddd LT",lastDay:"어제 LT",lastWeek:"지난주 dddd LT",sameElse:"L"},relativeTime:{future:"%s 후",past:"%s 전",s:"몇 초",ss:"%d초",m:"일분",mm:"%d분",h:"한 시간",hh:"%d시간",d:"하루",dd:"%d일",M:"한 달",MM:"%d달",y:"일 년",yy:"%d년"},ordinalParse:/\d{1,2}일/,ordinal:"%d일",meridiemParse:/오전|오후/,isPM:function(e){return"오후"===e},meridiem:function(e,a,t){return e<12?"오전":"오후"}});var td={0:"-чү",1:"-чи",2:"-чи",3:"-чү",4:"-чү",5:"-чи",6:"-чы",7:"-чи",8:"-чи",9:"-чу",10:"-чу",20:"-чы",30:"-чу",40:"-чы",50:"-чү",60:"-чы",70:"-чи",80:"-чи",90:"-чу",100:"-чү"};e.defineLocale("ky",{months:"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),monthsShort:"янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),weekdays:"Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),weekdaysShort:"Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),weekdaysMin:"Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Бүгүн саат] LT",nextDay:"[Эртең саат] LT",nextWeek:"dddd [саат] LT",lastDay:"[Кече саат] LT",lastWeek:"[Өткен аптанын] dddd [күнү] [саат] LT",sameElse:"L"
},relativeTime:{future:"%s ичинде",past:"%s мурун",s:"бирнече секунд",m:"бир мүнөт",mm:"%d мүнөт",h:"бир саат",hh:"%d саат",d:"бир күн",dd:"%d күн",M:"бир ай",MM:"%d ай",y:"бир жыл",yy:"%d жыл"},ordinalParse:/\d{1,2}-(чи|чы|чү|чу)/,ordinal:function(e){var a=e%10,t=e>=100?100:null;return e+(td[e]||td[a]||td[t])},week:{dow:1,doy:7}}),e.defineLocale("lb",{months:"Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),weekdaysShort:"So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mé_Dë_Më_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm [Auer]",LTS:"H:mm:ss [Auer]",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm [Auer]",LLLL:"dddd, D. MMMM YYYY H:mm [Auer]"},calendar:{sameDay:"[Haut um] LT",sameElse:"L",nextDay:"[Muer um] LT",nextWeek:"dddd [um] LT",lastDay:"[Gëschter um] LT",lastWeek:function(){switch(this.day()){case 2:case 4:return"[Leschten] dddd [um] LT";default:return"[Leschte] dddd [um] LT"}}},relativeTime:{future:Es,past:Fs,s:"e puer Sekonnen",m:As,mm:"%d Minutten",h:As,hh:"%d Stonnen",d:As,dd:"%d Deeg",M:As,MM:"%d Méint",y:As,yy:"%d Joer"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),e.defineLocale("lo",{months:"ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),monthsShort:"ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),weekdays:"ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),weekdaysShort:"ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),weekdaysMin:"ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"ວັນdddd D MMMM YYYY HH:mm"},meridiemParse:/ຕອນເຊົ້າ|ຕອນແລງ/,isPM:function(e){return"ຕອນແລງ"===e},meridiem:function(e,a,t){return e<12?"ຕອນເຊົ້າ":"ຕອນແລງ"},calendar:{sameDay:"[ມື້ນີ້ເວລາ] LT",nextDay:"[ມື້ອື່ນເວລາ] LT",nextWeek:"[ວັນ]dddd[ໜ້າເວລາ] LT",lastDay:"[ມື້ວານນີ້ເວລາ] LT",lastWeek:"[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",sameElse:"L"},relativeTime:{future:"ອີກ %s",past:"%sຜ່ານມາ",s:"ບໍ່ເທົ່າໃດວິນາທີ",m:"1 ນາທີ",mm:"%d ນາທີ",h:"1 ຊົ່ວໂມງ",hh:"%d ຊົ່ວໂມງ",d:"1 ມື້",dd:"%d ມື້",M:"1 ເດືອນ",MM:"%d ເດືອນ",y:"1 ປີ",yy:"%d ປີ"},ordinalParse:/(ທີ່)\d{1,2}/,ordinal:function(e){return"ທີ່"+e}});var sd={m:"minutė_minutės_minutę",mm:"minutės_minučių_minutes",h:"valanda_valandos_valandą",hh:"valandos_valandų_valandas",d:"diena_dienos_dieną",dd:"dienos_dienų_dienas",M:"mėnuo_mėnesio_mėnesį",MM:"mėnesiai_mėnesių_mėnesius",y:"metai_metų_metus",yy:"metai_metų_metus"};e.defineLocale("lt",{months:{format:"sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),standalone:"sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),isFormat:/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/},monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),weekdays:{format:"sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),standalone:"sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),isFormat:/dddd HH:mm/},weekdaysShort:"Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),weekdaysMin:"S_P_A_T_K_Pn_Š".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},calendar:{sameDay:"[Šiandien] LT",nextDay:"[Rytoj] LT",nextWeek:"dddd LT",lastDay:"[Vakar] LT",lastWeek:"[Praėjusį] dddd LT",sameElse:"L"},relativeTime:{future:"po %s",past:"prieš %s",s:Os,m:Js,mm:Cs,h:Js,hh:Cs,d:Js,dd:Cs,M:Js,MM:Cs,y:Js,yy:Cs},ordinalParse:/\d{1,2}-oji/,ordinal:function(e){return e+"-oji"},week:{dow:1,doy:4}});var nd={m:"minūtes_minūtēm_minūte_minūtes".split("_"),mm:"minūtes_minūtēm_minūte_minūtes".split("_"),h:"stundas_stundām_stunda_stundas".split("_"),hh:"stundas_stundām_stunda_stundas".split("_"),d:"dienas_dienām_diena_dienas".split("_"),dd:"dienas_dienām_diena_dienas".split("_"),M:"mēneša_mēnešiem_mēnesis_mēneši".split("_"),MM:"mēneša_mēnešiem_mēnesis_mēneši".split("_"),y:"gada_gadiem_gads_gadi".split("_"),yy:"gada_gadiem_gads_gadi".split("_")};e.defineLocale("lv",{months:"janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),monthsShort:"jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),weekdays:"svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),weekdaysShort:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysMin:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY.",LL:"YYYY. [gada] D. MMMM",LLL:"YYYY. [gada] D. MMMM, HH:mm",LLLL:"YYYY. [gada] D. MMMM, dddd, HH:mm"},calendar:{sameDay:"[Šodien pulksten] LT",nextDay:"[Rīt pulksten] LT",nextWeek:"dddd [pulksten] LT",lastDay:"[Vakar pulksten] LT",lastWeek:"[Pagājušā] dddd [pulksten] LT",sameElse:"L"},relativeTime:{future:"pēc %s",past:"pirms %s",s:Vs,m:Us,mm:Ns,h:Us,hh:Ns,d:Us,dd:Ns,M:Us,MM:Ns,y:Us,yy:Ns},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});var rd={words:{m:["jedan minut","jednog minuta"],mm:["minut","minuta","minuta"],h:["jedan sat","jednog sata"],hh:["sat","sata","sati"],dd:["dan","dana","dana"],MM:["mjesec","mjeseca","mjeseci"],yy:["godina","godine","godina"]},correctGrammaticalCase:function(e,a){return 1===e?a[0]:e>=2&&e<=4?a[1]:a[2]},translate:function(e,a,t){var s=rd.words[t];return 1===t.length?a?s[0]:s[1]:e+" "+rd.correctGrammaticalCase(e,s)}};e.defineLocale("me",{months:"januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sjutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[juče u] LT",lastWeek:function(){var e=["[prošle] [nedjelje] [u] LT","[prošlog] [ponedjeljka] [u] LT","[prošlog] [utorka] [u] LT","[prošle] [srijede] [u] LT","[prošlog] [četvrtka] [u] LT","[prošlog] [petka] [u] LT","[prošle] [subote] [u] LT"];return e[this.day()]},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"nekoliko sekundi",m:rd.translate,mm:rd.translate,h:rd.translate,hh:rd.translate,d:"dan",dd:rd.translate,M:"mjesec",MM:rd.translate,y:"godinu",yy:rd.translate},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),e.defineLocale("mi",{months:"Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),monthsShort:"Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),monthsRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,monthsStrictRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,monthsShortRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,monthsShortStrictRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,weekdays:"Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),weekdaysShort:"Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),weekdaysMin:"Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [i] HH:mm",LLLL:"dddd, D MMMM YYYY [i] HH:mm"},calendar:{sameDay:"[i teie mahana, i] LT",nextDay:"[apopo i] LT",nextWeek:"dddd [i] LT",lastDay:"[inanahi i] LT",lastWeek:"dddd [whakamutunga i] LT",sameElse:"L"},relativeTime:{future:"i roto i %s",past:"%s i mua",s:"te hēkona ruarua",m:"he meneti",mm:"%d meneti",h:"te haora",hh:"%d haora",d:"he ra",dd:"%d ra",M:"he marama",MM:"%d marama",y:"he tau",yy:"%d tau"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}}),e.defineLocale("mk",{months:"јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),monthsShort:"јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),weekdays:"недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),weekdaysShort:"нед_пон_вто_сре_чет_пет_саб".split("_"),weekdaysMin:"нe_пo_вт_ср_че_пе_сa".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[Денес во] LT",nextDay:"[Утре во] LT",nextWeek:"[Во] dddd [во] LT",lastDay:"[Вчера во] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[Изминатата] dddd [во] LT";case 1:case 2:case 4:case 5:return"[Изминатиот] dddd [во] LT"}},sameElse:"L"},relativeTime:{future:"после %s",past:"пред %s",s:"неколку секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дена",M:"месец",MM:"%d месеци",y:"година",yy:"%d години"},ordinalParse:/\d{1,2}-(ев|ен|ти|ви|ри|ми)/,ordinal:function(e){var a=e%10,t=e%100;return 0===e?e+"-ев":0===t?e+"-ен":t>10&&t<20?e+"-ти":1===a?e+"-ви":2===a?e+"-ри":7===a||8===a?e+"-ми":e+"-ти"},week:{dow:1,doy:7}}),e.defineLocale("ml",{months:"ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),monthsShort:"ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),monthsParseExact:!0,weekdays:"ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),weekdaysShort:"ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),weekdaysMin:"ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),longDateFormat:{LT:"A h:mm -നു",LTS:"A h:mm:ss -നു",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm -നു",LLLL:"dddd, D MMMM YYYY, A h:mm -നു"},calendar:{sameDay:"[ഇന്ന്] LT",nextDay:"[നാളെ] LT",nextWeek:"dddd, LT",lastDay:"[ഇന്നലെ] LT",lastWeek:"[കഴിഞ്ഞ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s കഴിഞ്ഞ്",past:"%s മുൻപ്",s:"അൽപ നിമിഷങ്ങൾ",m:"ഒരു മിനിറ്റ്",mm:"%d മിനിറ്റ്",h:"ഒരു മണിക്കൂർ",hh:"%d മണിക്കൂർ",d:"ഒരു ദിവസം",dd:"%d ദിവസം",M:"ഒരു മാസം",MM:"%d മാസം",y:"ഒരു വർഷം",yy:"%d വർഷം"},meridiemParse:/രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,meridiemHour:function(e,a){return 12===e&&(e=0),"രാത്രി"===a&&e>=4||"ഉച്ച കഴിഞ്ഞ്"===a||"വൈകുന്നേരം"===a?e+12:e},meridiem:function(e,a,t){return e<4?"രാത്രി":e<12?"രാവിലെ":e<17?"ഉച്ച കഴിഞ്ഞ്":e<20?"വൈകുന്നേരം":"രാത്രി"}});var _d={1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},dd={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"};e.defineLocale("mr",{months:"जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),monthsShort:"जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),monthsParseExact:!0,weekdays:"रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),weekdaysShort:"रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),weekdaysMin:"र_सो_मं_बु_गु_शु_श".split("_"),longDateFormat:{LT:"A h:mm वाजता",LTS:"A h:mm:ss वाजता",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm वाजता",LLLL:"dddd, D MMMM YYYY, A h:mm वाजता"},calendar:{sameDay:"[आज] LT",nextDay:"[उद्या] LT",nextWeek:"dddd, LT",lastDay:"[काल] LT",lastWeek:"[मागील] dddd, LT",sameElse:"L"},relativeTime:{future:"%sमध्ये",past:"%sपूर्वी",s:$s,m:$s,mm:$s,h:$s,hh:$s,d:$s,dd:$s,M:$s,MM:$s,y:$s,yy:$s},preparse:function(e){return e.replace(/[१२३४५६७८९०]/g,function(e){return dd[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return _d[e]})},meridiemParse:/रात्री|सकाळी|दुपारी|सायंकाळी/,meridiemHour:function(e,a){return 12===e&&(e=0),"रात्री"===a?e<4?e:e+12:"सकाळी"===a?e:"दुपारी"===a?e>=10?e:e+12:"सायंकाळी"===a?e+12:void 0},meridiem:function(e,a,t){return e<4?"रात्री":e<10?"सकाळी":e<17?"दुपारी":e<20?"सायंकाळी":"रात्री"},week:{dow:0,doy:6}}),e.defineLocale("ms-my",{months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|tengahari|petang|malam/,meridiemHour:function(e,a){return 12===e&&(e=0),"pagi"===a?e:"tengahari"===a?e>=11?e:e+12:"petang"===a||"malam"===a?e+12:void 0},meridiem:function(e,a,t){return e<11?"pagi":e<15?"tengahari":e<19?"petang":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Esok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kelmarin pukul] LT",lastWeek:"dddd [lepas pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}}),e.defineLocale("ms",{months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|tengahari|petang|malam/,meridiemHour:function(e,a){return 12===e&&(e=0),"pagi"===a?e:"tengahari"===a?e>=11?e:e+12:"petang"===a||"malam"===a?e+12:void 0},meridiem:function(e,a,t){return e<11?"pagi":e<15?"tengahari":e<19?"petang":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Esok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kelmarin pukul] LT",lastWeek:"dddd [lepas pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}});var id={1:"၁",2:"၂",3:"၃",4:"၄",5:"၅",6:"၆",7:"၇",8:"၈",9:"၉",0:"၀"},od={"၁":"1","၂":"2","၃":"3","၄":"4","၅":"5","၆":"6","၇":"7","၈":"8","၉":"9","၀":"0"};e.defineLocale("my",{months:"ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),monthsShort:"ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),weekdays:"တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),weekdaysShort:"နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),weekdaysMin:"နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[ယနေ.] LT [မှာ]",nextDay:"[မနက်ဖြန်] LT [မှာ]",nextWeek:"dddd LT [မှာ]",lastDay:"[မနေ.က] LT [မှာ]",lastWeek:"[ပြီးခဲ့သော] dddd LT [မှာ]",sameElse:"L"},relativeTime:{future:"လာမည့် %s မှာ",past:"လွန်ခဲ့သော %s က",s:"စက္ကန်.အနည်းငယ်",m:"တစ်မိနစ်",mm:"%d မိနစ်",h:"တစ်နာရီ",hh:"%d နာရီ",d:"တစ်ရက်",dd:"%d ရက်",M:"တစ်လ",MM:"%d လ",y:"တစ်နှစ်",yy:"%d နှစ်"},preparse:function(e){return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g,function(e){return od[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return id[e]})},week:{dow:1,doy:4}}),e.defineLocale("nb",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),monthsParseExact:!0,weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[i dag kl.] LT",nextDay:"[i morgen kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[i går kl.] LT",lastWeek:"[forrige] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});var md={1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},ud={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"};e.defineLocale("ne",{months:"जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),monthsShort:"जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),monthsParseExact:!0,weekdays:"आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),weekdaysShort:"आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),weekdaysMin:"आ._सो._मं._बु._बि._शु._श.".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"Aको h:mm बजे",LTS:"Aको h:mm:ss बजे",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, Aको h:mm बजे",LLLL:"dddd, D MMMM YYYY, Aको h:mm बजे"},preparse:function(e){return e.replace(/[१२३४५६७८९०]/g,function(e){return ud[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return md[e]})},meridiemParse:/राति|बिहान|दिउँसो|साँझ/,meridiemHour:function(e,a){return 12===e&&(e=0),"राति"===a?e<4?e:e+12:"बिहान"===a?e:"दिउँसो"===a?e>=10?e:e+12:"साँझ"===a?e+12:void 0},meridiem:function(e,a,t){return e<3?"राति":e<12?"बिहान":e<16?"दिउँसो":e<20?"साँझ":"राति"},calendar:{sameDay:"[आज] LT",nextDay:"[भोलि] LT",nextWeek:"[आउँदो] dddd[,] LT",lastDay:"[हिजो] LT",lastWeek:"[गएको] dddd[,] LT",sameElse:"L"},relativeTime:{future:"%sमा",past:"%s अगाडि",s:"केही क्षण",m:"एक मिनेट",mm:"%d मिनेट",h:"एक घण्टा",hh:"%d घण्टा",d:"एक दिन",dd:"%d दिन",M:"एक महिना",MM:"%d महिना",y:"एक बर्ष",yy:"%d बर्ष"},week:{dow:0,doy:6}});var ld="jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),Md="jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),hd=[/^jan/i,/^feb/i,/^maart|mrt.?$/i,/^apr/i,/^mei$/i,/^jun[i.]?$/i,/^jul[i.]?$/i,/^aug/i,/^sep/i,/^okt/i,/^nov/i,/^dec/i],Ld=/^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;e.defineLocale("nl-be",{months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:function(e,a){return/-MMM-/.test(a)?Md[e.month()]:ld[e.month()]},monthsRegex:Ld,monthsShortRegex:Ld,monthsStrictRegex:/^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,monthsShortStrictRegex:/^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,monthsParse:hd,longMonthsParse:hd,shortMonthsParse:hd,weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[vandaag om] LT",nextDay:"[morgen om] LT",nextWeek:"dddd [om] LT",lastDay:"[gisteren om] LT",lastWeek:"[afgelopen] dddd [om] LT",sameElse:"L"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",m:"één minuut",mm:"%d minuten",h:"één uur",hh:"%d uur",d:"één dag",dd:"%d dagen",M:"één maand",MM:"%d maanden",y:"één jaar",yy:"%d jaar"},ordinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,doy:4}});var cd="jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),Yd="jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),yd=[/^jan/i,/^feb/i,/^maart|mrt.?$/i,/^apr/i,/^mei$/i,/^jun[i.]?$/i,/^jul[i.]?$/i,/^aug/i,/^sep/i,/^okt/i,/^nov/i,/^dec/i],pd=/^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;e.defineLocale("nl",{months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:function(e,a){return/-MMM-/.test(a)?Yd[e.month()]:cd[e.month()]},monthsRegex:pd,monthsShortRegex:pd,monthsStrictRegex:/^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,monthsShortStrictRegex:/^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,monthsParse:yd,longMonthsParse:yd,shortMonthsParse:yd,weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[vandaag om] LT",nextDay:"[morgen om] LT",nextWeek:"dddd [om] LT",lastDay:"[gisteren om] LT",lastWeek:"[afgelopen] dddd [om] LT",sameElse:"L"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",m:"één minuut",mm:"%d minuten",h:"één uur",hh:"%d uur",d:"één dag",dd:"%d dagen",M:"één maand",MM:"%d maanden",y:"één jaar",yy:"%d jaar"},ordinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,doy:4}}),e.defineLocale("nn",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),weekdaysShort:"sun_mån_tys_ons_tor_fre_lau".split("_"),weekdaysMin:"su_må_ty_on_to_fr_lø".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[I dag klokka] LT",nextDay:"[I morgon klokka] LT",nextWeek:"dddd [klokka] LT",lastDay:"[I går klokka] LT",lastWeek:"[Føregåande] dddd [klokka] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s sidan",s:"nokre sekund",m:"eit minutt",mm:"%d minutt",h:"ein time",hh:"%d timar",d:"ein dag",dd:"%d dagar",M:"ein månad",MM:"%d månader",y:"eit år",yy:"%d år"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});var fd={1:"੧",2:"੨",3:"੩",4:"੪",5:"੫",6:"੬",7:"੭",8:"੮",9:"੯",0:"੦"},kd={"੧":"1","੨":"2","੩":"3","੪":"4","੫":"5","੬":"6","੭":"7","੮":"8","੯":"9","੦":"0"};e.defineLocale("pa-in",{months:"ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),monthsShort:"ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),weekdays:"ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),weekdaysShort:"ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),weekdaysMin:"ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),longDateFormat:{LT:"A h:mm ਵਜੇ",LTS:"A h:mm:ss ਵਜੇ",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm ਵਜੇ",LLLL:"dddd, D MMMM YYYY, A h:mm ਵਜੇ"},calendar:{sameDay:"[ਅਜ] LT",nextDay:"[ਕਲ] LT",nextWeek:"dddd, LT",lastDay:"[ਕਲ] LT",lastWeek:"[ਪਿਛਲੇ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s ਵਿੱਚ",past:"%s ਪਿਛਲੇ",s:"ਕੁਝ ਸਕਿੰਟ",m:"ਇਕ ਮਿੰਟ",mm:"%d ਮਿੰਟ",h:"ਇੱਕ ਘੰਟਾ",hh:"%d ਘੰਟੇ",d:"ਇੱਕ ਦਿਨ",dd:"%d ਦਿਨ",M:"ਇੱਕ ਮਹੀਨਾ",MM:"%d ਮਹੀਨੇ",y:"ਇੱਕ ਸਾਲ",yy:"%d ਸਾਲ"},preparse:function(e){return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g,function(e){return kd[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return fd[e]})},meridiemParse:/ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,meridiemHour:function(e,a){return 12===e&&(e=0),"ਰਾਤ"===a?e<4?e:e+12:"ਸਵੇਰ"===a?e:"ਦੁਪਹਿਰ"===a?e>=10?e:e+12:"ਸ਼ਾਮ"===a?e+12:void 0},meridiem:function(e,a,t){return e<4?"ਰਾਤ":e<10?"ਸਵੇਰ":e<17?"ਦੁਪਹਿਰ":e<20?"ਸ਼ਾਮ":"ਰਾਤ"},week:{dow:0,doy:6}});var Dd="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),Td="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");e.defineLocale("pl",{months:function(e,a){return""===a?"("+Td[e.month()]+"|"+Dd[e.month()]+")":/D MMMM/.test(a)?Td[e.month()]:Dd[e.month()]},monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Dziś o] LT",nextDay:"[Jutro o] LT",nextWeek:"[W] dddd [o] LT",lastDay:"[Wczoraj o] LT",lastWeek:function(){switch(this.day()){case 0:return"[W zeszłą niedzielę o] LT";case 3:return"[W zeszłą środę o] LT";case 6:return"[W zeszłą sobotę o] LT";default:return"[W zeszły] dddd [o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:Zs,mm:Zs,h:Zs,hh:Zs,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:Zs,y:"rok",yy:Zs},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),e.defineLocale("pt-br",{months:"Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),monthsShort:"Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),weekdays:"Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),weekdaysMin:"Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [às] HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY [às] HH:mm"},calendar:{sameDay:"[Hoje às] LT",nextDay:"[Amanhã às] LT",nextWeek:"dddd [às] LT",lastDay:"[Ontem às] LT",lastWeek:function(){return 0===this.day()||6===this.day()?"[Último] dddd [às] LT":"[Última] dddd [às] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"%s atrás",s:"poucos segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"},ordinalParse:/\d{1,2}º/,ordinal:"%dº"}),e.defineLocale("pt",{months:"Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),monthsShort:"Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),weekdays:"Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado".split("_"),weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),weekdaysMin:"Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY HH:mm"},calendar:{sameDay:"[Hoje às] LT",nextDay:"[Amanhã às] LT",nextWeek:"dddd [às] LT",lastDay:"[Ontem às] LT",lastWeek:function(){return 0===this.day()||6===this.day()?"[Último] dddd [às] LT":"[Última] dddd [às] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"há %s",s:"segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}}),e.defineLocale("ro",{months:"ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),monthsShort:"ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),weekdaysShort:"Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),weekdaysMin:"Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[azi la] LT",nextDay:"[mâine la] LT",nextWeek:"dddd [la] LT",lastDay:"[ieri la] LT",lastWeek:"[fosta] dddd [la] LT",sameElse:"L"},relativeTime:{future:"peste %s",past:"%s în urmă",s:"câteva secunde",m:"un minut",mm:qs,h:"o oră",hh:qs,d:"o zi",dd:qs,M:"o lună",MM:qs,y:"un an",yy:qs},week:{dow:1,doy:7}});var gd=[/^янв/i,/^фев/i,/^мар/i,/^апр/i,/^ма[йя]/i,/^июн/i,/^июл/i,/^авг/i,/^сен/i,/^окт/i,/^ноя/i,/^дек/i];e.defineLocale("ru",{months:{format:"января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),standalone:"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")},monthsShort:{format:"янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),standalone:"янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")},weekdays:{standalone:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),format:"воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),isFormat:/\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/},weekdaysShort:"вс_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),monthsParse:gd,longMonthsParse:gd,shortMonthsParse:gd,monthsRegex:/^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,monthsShortRegex:/^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,monthsStrictRegex:/^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,monthsShortStrictRegex:/^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., HH:mm",LLLL:"dddd, D MMMM YYYY г., HH:mm"},calendar:{sameDay:"[Сегодня в] LT",nextDay:"[Завтра в] LT",lastDay:"[Вчера в] LT",nextWeek:function(e){if(e.week()===this.week())return 2===this.day()?"[Во] dddd [в] LT":"[В] dddd [в] LT";switch(this.day()){case 0:return"[В следующее] dddd [в] LT";case 1:case 2:case 4:return"[В следующий] dddd [в] LT";case 3:case 5:case 6:return"[В следующую] dddd [в] LT"}},lastWeek:function(e){if(e.week()===this.week())return 2===this.day()?"[Во] dddd [в] LT":"[В] dddd [в] LT";switch(this.day()){case 0:return"[В прошлое] dddd [в] LT";case 1:case 2:case 4:return"[В прошлый] dddd [в] LT";case 3:case 5:case 6:return"[В прошлую] dddd [в] LT"}},sameElse:"L"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:Qs,mm:Qs,h:"час",hh:Qs,d:"день",dd:Qs,M:"месяц",MM:Qs,y:"год",yy:Qs},meridiemParse:/ночи|утра|дня|вечера/i,isPM:function(e){return/^(дня|вечера)$/.test(e)},meridiem:function(e,a,t){return e<4?"ночи":e<12?"утра":e<17?"дня":"вечера"},ordinalParse:/\d{1,2}-(й|го|я)/,ordinal:function(e,a){switch(a){case"M":case"d":case"DDD":return e+"-й";case"D":return e+"-го";case"w":case"W":return e+"-я";default:return e}},week:{dow:1,doy:7}}),e.defineLocale("se",{months:"ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),monthsShort:"ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),weekdays:"sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),weekdaysShort:"sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
weekdaysMin:"s_v_m_g_d_b_L".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"MMMM D. [b.] YYYY",LLL:"MMMM D. [b.] YYYY [ti.] HH:mm",LLLL:"dddd, MMMM D. [b.] YYYY [ti.] HH:mm"},calendar:{sameDay:"[otne ti] LT",nextDay:"[ihttin ti] LT",nextWeek:"dddd [ti] LT",lastDay:"[ikte ti] LT",lastWeek:"[ovddit] dddd [ti] LT",sameElse:"L"},relativeTime:{future:"%s geažes",past:"maŋit %s",s:"moadde sekunddat",m:"okta minuhta",mm:"%d minuhtat",h:"okta diimmu",hh:"%d diimmut",d:"okta beaivi",dd:"%d beaivvit",M:"okta mánnu",MM:"%d mánut",y:"okta jahki",yy:"%d jagit"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),e.defineLocale("si",{months:"ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),monthsShort:"ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),weekdays:"ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),weekdaysShort:"ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),weekdaysMin:"ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"a h:mm",LTS:"a h:mm:ss",L:"YYYY/MM/DD",LL:"YYYY MMMM D",LLL:"YYYY MMMM D, a h:mm",LLLL:"YYYY MMMM D [වැනි] dddd, a h:mm:ss"},calendar:{sameDay:"[අද] LT[ට]",nextDay:"[හෙට] LT[ට]",nextWeek:"dddd LT[ට]",lastDay:"[ඊයේ] LT[ට]",lastWeek:"[පසුගිය] dddd LT[ට]",sameElse:"L"},relativeTime:{future:"%sකින්",past:"%sකට පෙර",s:"තත්පර කිහිපය",m:"මිනිත්තුව",mm:"මිනිත්තු %d",h:"පැය",hh:"පැය %d",d:"දිනය",dd:"දින %d",M:"මාසය",MM:"මාස %d",y:"වසර",yy:"වසර %d"},ordinalParse:/\d{1,2} වැනි/,ordinal:function(e){return e+" වැනි"},meridiemParse:/පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,isPM:function(e){return"ප.ව."===e||"පස් වරු"===e},meridiem:function(e,a,t){return e>11?t?"ප.ව.":"පස් වරු":t?"පෙ.ව.":"පෙර වරු"}});var wd="január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),vd="jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");e.defineLocale("sk",{months:wd,monthsShort:vd,weekdays:"nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_št_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_št_pi_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm"},calendar:{sameDay:"[dnes o] LT",nextDay:"[zajtra o] LT",nextWeek:function(){switch(this.day()){case 0:return"[v nedeľu o] LT";case 1:case 2:return"[v] dddd [o] LT";case 3:return"[v stredu o] LT";case 4:return"[vo štvrtok o] LT";case 5:return"[v piatok o] LT";case 6:return"[v sobotu o] LT"}},lastDay:"[včera o] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulú nedeľu o] LT";case 1:case 2:return"[minulý] dddd [o] LT";case 3:return"[minulú stredu o] LT";case 4:case 5:return"[minulý] dddd [o] LT";case 6:return"[minulú sobotu o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"pred %s",s:en,m:en,mm:en,h:en,hh:en,d:en,dd:en,M:en,MM:en,y:en,yy:en},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),e.defineLocale("sl",{months:"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),weekdaysShort:"ned._pon._tor._sre._čet._pet._sob.".split("_"),weekdaysMin:"ne_po_to_sr_če_pe_so".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danes ob] LT",nextDay:"[jutri ob] LT",nextWeek:function(){switch(this.day()){case 0:return"[v] [nedeljo] [ob] LT";case 3:return"[v] [sredo] [ob] LT";case 6:return"[v] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[v] dddd [ob] LT"}},lastDay:"[včeraj ob] LT",lastWeek:function(){switch(this.day()){case 0:return"[prejšnjo] [nedeljo] [ob] LT";case 3:return"[prejšnjo] [sredo] [ob] LT";case 6:return"[prejšnjo] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[prejšnji] dddd [ob] LT"}},sameElse:"L"},relativeTime:{future:"čez %s",past:"pred %s",s:an,m:an,mm:an,h:an,hh:an,d:an,dd:an,M:an,MM:an,y:an,yy:an},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),e.defineLocale("sq",{months:"Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),monthsShort:"Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),weekdays:"E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),weekdaysShort:"Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),weekdaysMin:"D_H_Ma_Më_E_P_Sh".split("_"),weekdaysParseExact:!0,meridiemParse:/PD|MD/,isPM:function(e){return"M"===e.charAt(0)},meridiem:function(e,a,t){return e<12?"PD":"MD"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Sot në] LT",nextDay:"[Nesër në] LT",nextWeek:"dddd [në] LT",lastDay:"[Dje në] LT",lastWeek:"dddd [e kaluar në] LT",sameElse:"L"},relativeTime:{future:"në %s",past:"%s më parë",s:"disa sekonda",m:"një minutë",mm:"%d minuta",h:"një orë",hh:"%d orë",d:"një ditë",dd:"%d ditë",M:"një muaj",MM:"%d muaj",y:"një vit",yy:"%d vite"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});var Sd={words:{m:["један минут","једне минуте"],mm:["минут","минуте","минута"],h:["један сат","једног сата"],hh:["сат","сата","сати"],dd:["дан","дана","дана"],MM:["месец","месеца","месеци"],yy:["година","године","година"]},correctGrammaticalCase:function(e,a){return 1===e?a[0]:e>=2&&e<=4?a[1]:a[2]},translate:function(e,a,t){var s=Sd.words[t];return 1===t.length?a?s[0]:s[1]:e+" "+Sd.correctGrammaticalCase(e,s)}};e.defineLocale("sr-cyrl",{months:"јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),monthsShort:"јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),monthsParseExact:!0,weekdays:"недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),weekdaysShort:"нед._пон._уто._сре._чет._пет._суб.".split("_"),weekdaysMin:"не_по_ут_ср_че_пе_су".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[данас у] LT",nextDay:"[сутра у] LT",nextWeek:function(){switch(this.day()){case 0:return"[у] [недељу] [у] LT";case 3:return"[у] [среду] [у] LT";case 6:return"[у] [суботу] [у] LT";case 1:case 2:case 4:case 5:return"[у] dddd [у] LT"}},lastDay:"[јуче у] LT",lastWeek:function(){var e=["[прошле] [недеље] [у] LT","[прошлог] [понедељка] [у] LT","[прошлог] [уторка] [у] LT","[прошле] [среде] [у] LT","[прошлог] [четвртка] [у] LT","[прошлог] [петка] [у] LT","[прошле] [суботе] [у] LT"];return e[this.day()]},sameElse:"L"},relativeTime:{future:"за %s",past:"пре %s",s:"неколико секунди",m:Sd.translate,mm:Sd.translate,h:Sd.translate,hh:Sd.translate,d:"дан",dd:Sd.translate,M:"месец",MM:Sd.translate,y:"годину",yy:Sd.translate},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}});var Hd={words:{m:["jedan minut","jedne minute"],mm:["minut","minute","minuta"],h:["jedan sat","jednog sata"],hh:["sat","sata","sati"],dd:["dan","dana","dana"],MM:["mesec","meseca","meseci"],yy:["godina","godine","godina"]},correctGrammaticalCase:function(e,a){return 1===e?a[0]:e>=2&&e<=4?a[1]:a[2]},translate:function(e,a,t){var s=Hd.words[t];return 1===t.length?a?s[0]:s[1]:e+" "+Hd.correctGrammaticalCase(e,s)}};e.defineLocale("sr",{months:"januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sre._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedelju] [u] LT";case 3:return"[u] [sredu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[juče u] LT",lastWeek:function(){var e=["[prošle] [nedelje] [u] LT","[prošlog] [ponedeljka] [u] LT","[prošlog] [utorka] [u] LT","[prošle] [srede] [u] LT","[prošlog] [četvrtka] [u] LT","[prošlog] [petka] [u] LT","[prošle] [subote] [u] LT"];return e[this.day()]},sameElse:"L"},relativeTime:{future:"za %s",past:"pre %s",s:"nekoliko sekundi",m:Hd.translate,mm:Hd.translate,h:Hd.translate,hh:Hd.translate,d:"dan",dd:Hd.translate,M:"mesec",MM:Hd.translate,y:"godinu",yy:Hd.translate},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),e.defineLocale("ss",{months:"Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),monthsShort:"Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),weekdays:"Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),weekdaysShort:"Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),weekdaysMin:"Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Namuhla nga] LT",nextDay:"[Kusasa nga] LT",nextWeek:"dddd [nga] LT",lastDay:"[Itolo nga] LT",lastWeek:"dddd [leliphelile] [nga] LT",sameElse:"L"},relativeTime:{future:"nga %s",past:"wenteka nga %s",s:"emizuzwana lomcane",m:"umzuzu",mm:"%d emizuzu",h:"lihora",hh:"%d emahora",d:"lilanga",dd:"%d emalanga",M:"inyanga",MM:"%d tinyanga",y:"umnyaka",yy:"%d iminyaka"},meridiemParse:/ekuseni|emini|entsambama|ebusuku/,meridiem:function(e,a,t){return e<11?"ekuseni":e<15?"emini":e<19?"entsambama":"ebusuku"},meridiemHour:function(e,a){return 12===e&&(e=0),"ekuseni"===a?e:"emini"===a?e>=11?e:e+12:"entsambama"===a||"ebusuku"===a?0===e?0:e+12:void 0},ordinalParse:/\d{1,2}/,ordinal:"%d",week:{dow:1,doy:4}}),e.defineLocale("sv",{months:"januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),weekdaysShort:"sön_mån_tis_ons_tor_fre_lör".split("_"),weekdaysMin:"sö_må_ti_on_to_fr_lö".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [kl.] HH:mm",LLLL:"dddd D MMMM YYYY [kl.] HH:mm",lll:"D MMM YYYY HH:mm",llll:"ddd D MMM YYYY HH:mm"},calendar:{sameDay:"[Idag] LT",nextDay:"[Imorgon] LT",lastDay:"[Igår] LT",nextWeek:"[På] dddd LT",lastWeek:"[I] dddd[s] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"för %s sedan",s:"några sekunder",m:"en minut",mm:"%d minuter",h:"en timme",hh:"%d timmar",d:"en dag",dd:"%d dagar",M:"en månad",MM:"%d månader",y:"ett år",yy:"%d år"},ordinalParse:/\d{1,2}(e|a)/,ordinal:function(e){var a=e%10,t=1===~~(e%100/10)?"e":1===a?"a":2===a?"a":"e";return e+t},week:{dow:1,doy:4}}),e.defineLocale("sw",{months:"Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),weekdays:"Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),weekdaysShort:"Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),weekdaysMin:"J2_J3_J4_J5_Al_Ij_J1".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[leo saa] LT",nextDay:"[kesho saa] LT",nextWeek:"[wiki ijayo] dddd [saat] LT",lastDay:"[jana] LT",lastWeek:"[wiki iliyopita] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s baadaye",past:"tokea %s",s:"hivi punde",m:"dakika moja",mm:"dakika %d",h:"saa limoja",hh:"masaa %d",d:"siku moja",dd:"masiku %d",M:"mwezi mmoja",MM:"miezi %d",y:"mwaka mmoja",yy:"miaka %d"},week:{dow:1,doy:7}});var bd={1:"௧",2:"௨",3:"௩",4:"௪",5:"௫",6:"௬",7:"௭",8:"௮",9:"௯",0:"௦"},jd={"௧":"1","௨":"2","௩":"3","௪":"4","௫":"5","௬":"6","௭":"7","௮":"8","௯":"9","௦":"0"};e.defineLocale("ta",{months:"ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),monthsShort:"ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),weekdays:"ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),weekdaysShort:"ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),weekdaysMin:"ஞா_தி_செ_பு_வி_வெ_ச".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, HH:mm",LLLL:"dddd, D MMMM YYYY, HH:mm"},calendar:{sameDay:"[இன்று] LT",nextDay:"[நாளை] LT",nextWeek:"dddd, LT",lastDay:"[நேற்று] LT",lastWeek:"[கடந்த வாரம்] dddd, LT",sameElse:"L"},relativeTime:{future:"%s இல்",past:"%s முன்",s:"ஒரு சில விநாடிகள்",m:"ஒரு நிமிடம்",mm:"%d நிமிடங்கள்",h:"ஒரு மணி நேரம்",hh:"%d மணி நேரம்",d:"ஒரு நாள்",dd:"%d நாட்கள்",M:"ஒரு மாதம்",MM:"%d மாதங்கள்",y:"ஒரு வருடம்",yy:"%d ஆண்டுகள்"},ordinalParse:/\d{1,2}வது/,ordinal:function(e){return e+"வது"},preparse:function(e){return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g,function(e){return jd[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return bd[e]})},meridiemParse:/யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,meridiem:function(e,a,t){return e<2?" யாமம்":e<6?" வைகறை":e<10?" காலை":e<14?" நண்பகல்":e<18?" எற்பாடு":e<22?" மாலை":" யாமம்"},meridiemHour:function(e,a){return 12===e&&(e=0),"யாமம்"===a?e<2?e:e+12:"வைகறை"===a||"காலை"===a?e:"நண்பகல்"===a&&e>=10?e:e+12},week:{dow:0,doy:6}}),e.defineLocale("te",{months:"జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),monthsShort:"జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),monthsParseExact:!0,weekdays:"ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),weekdaysShort:"ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),weekdaysMin:"ఆ_సో_మం_బు_గు_శు_శ".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[నేడు] LT",nextDay:"[రేపు] LT",nextWeek:"dddd, LT",lastDay:"[నిన్న] LT",lastWeek:"[గత] dddd, LT",sameElse:"L"},relativeTime:{future:"%s లో",past:"%s క్రితం",s:"కొన్ని క్షణాలు",m:"ఒక నిమిషం",mm:"%d నిమిషాలు",h:"ఒక గంట",hh:"%d గంటలు",d:"ఒక రోజు",dd:"%d రోజులు",M:"ఒక నెల",MM:"%d నెలలు",y:"ఒక సంవత్సరం",yy:"%d సంవత్సరాలు"},ordinalParse:/\d{1,2}వ/,ordinal:"%dవ",meridiemParse:/రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,meridiemHour:function(e,a){return 12===e&&(e=0),"రాత్రి"===a?e<4?e:e+12:"ఉదయం"===a?e:"మధ్యాహ్నం"===a?e>=10?e:e+12:"సాయంత్రం"===a?e+12:void 0},meridiem:function(e,a,t){return e<4?"రాత్రి":e<10?"ఉదయం":e<17?"మధ్యాహ్నం":e<20?"సాయంత్రం":"రాత్రి"},week:{dow:0,doy:6}}),e.defineLocale("tet",{months:"Janeiru_Fevereiru_Marsu_Abril_Maiu_Juniu_Juliu_Augustu_Setembru_Outubru_Novembru_Dezembru".split("_"),monthsShort:"Jan_Fev_Mar_Abr_Mai_Jun_Jul_Aug_Set_Out_Nov_Dez".split("_"),weekdays:"Domingu_Segunda_Tersa_Kuarta_Kinta_Sexta_Sabadu".split("_"),weekdaysShort:"Dom_Seg_Ters_Kua_Kint_Sext_Sab".split("_"),weekdaysMin:"Do_Seg_Te_Ku_Ki_Sex_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Ohin iha] LT",nextDay:"[Aban iha] LT",nextWeek:"dddd [iha] LT",lastDay:"[Horiseik iha] LT",lastWeek:"dddd [semana kotuk] [iha] LT",sameElse:"L"},relativeTime:{future:"iha %s",past:"%s liuba",s:"minutu balun",m:"minutu ida",mm:"minutus %d",h:"horas ida",hh:"horas %d",d:"loron ida",dd:"loron %d",M:"fulan ida",MM:"fulan %d",y:"tinan ida",yy:"tinan %d"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10,t=1===~~(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th";return e+t},week:{dow:1,doy:4}}),e.defineLocale("th",{months:"มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),monthsShort:"ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),monthsParseExact:!0,weekdays:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),weekdaysShort:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),weekdaysMin:"อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"YYYY/MM/DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY เวลา H:mm",LLLL:"วันddddที่ D MMMM YYYY เวลา H:mm"},meridiemParse:/ก่อนเที่ยง|หลังเที่ยง/,isPM:function(e){return"หลังเที่ยง"===e},meridiem:function(e,a,t){return e<12?"ก่อนเที่ยง":"หลังเที่ยง"},calendar:{sameDay:"[วันนี้ เวลา] LT",nextDay:"[พรุ่งนี้ เวลา] LT",nextWeek:"dddd[หน้า เวลา] LT",lastDay:"[เมื่อวานนี้ เวลา] LT",lastWeek:"[วัน]dddd[ที่แล้ว เวลา] LT",sameElse:"L"},relativeTime:{future:"อีก %s",past:"%sที่แล้ว",s:"ไม่กี่วินาที",m:"1 นาที",mm:"%d นาที",h:"1 ชั่วโมง",hh:"%d ชั่วโมง",d:"1 วัน",dd:"%d วัน",M:"1 เดือน",MM:"%d เดือน",y:"1 ปี",yy:"%d ปี"}}),e.defineLocale("tl-ph",{months:"Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),monthsShort:"Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),weekdays:"Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),weekdaysShort:"Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),weekdaysMin:"Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"MM/D/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY HH:mm",LLLL:"dddd, MMMM DD, YYYY HH:mm"},calendar:{sameDay:"LT [ngayong araw]",nextDay:"[Bukas ng] LT",nextWeek:"LT [sa susunod na] dddd",lastDay:"LT [kahapon]",lastWeek:"LT [noong nakaraang] dddd",sameElse:"L"},relativeTime:{future:"sa loob ng %s",past:"%s ang nakalipas",s:"ilang segundo",m:"isang minuto",mm:"%d minuto",h:"isang oras",hh:"%d oras",d:"isang araw",dd:"%d araw",M:"isang buwan",MM:"%d buwan",y:"isang taon",yy:"%d taon"},ordinalParse:/\d{1,2}/,ordinal:function(e){return e},week:{dow:1,doy:4}});var xd="pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");e.defineLocale("tlh",{months:"tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),monthsShort:"jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),monthsParseExact:!0,weekdays:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),weekdaysShort:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),weekdaysMin:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[DaHjaj] LT",nextDay:"[wa’leS] LT",nextWeek:"LLL",lastDay:"[wa’Hu’] LT",lastWeek:"LLL",sameElse:"L"},relativeTime:{future:tn,past:sn,s:"puS lup",m:"wa’ tup",mm:nn,h:"wa’ rep",hh:nn,d:"wa’ jaj",dd:nn,M:"wa’ jar",MM:nn,y:"wa’ DIS",yy:nn},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});var Pd={1:"'inci",5:"'inci",8:"'inci",70:"'inci",80:"'inci",2:"'nci",7:"'nci",20:"'nci",50:"'nci",3:"'üncü",4:"'üncü",100:"'üncü",6:"'ncı",9:"'uncu",10:"'uncu",30:"'uncu",60:"'ıncı",90:"'ıncı"};return e.defineLocale("tr",{months:"Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),monthsShort:"Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),weekdays:"Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),weekdaysShort:"Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),weekdaysMin:"Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[bugün saat] LT",nextDay:"[yarın saat] LT",nextWeek:"[haftaya] dddd [saat] LT",lastDay:"[dün] LT",lastWeek:"[geçen hafta] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s önce",s:"birkaç saniye",m:"bir dakika",mm:"%d dakika",h:"bir saat",hh:"%d saat",d:"bir gün",dd:"%d gün",M:"bir ay",MM:"%d ay",y:"bir yıl",yy:"%d yıl"},ordinalParse:/\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,ordinal:function(e){if(0===e)return e+"'ıncı";var a=e%10,t=e%100-a,s=e>=100?100:null;return e+(Pd[a]||Pd[t]||Pd[s])},week:{dow:1,doy:7}}),e.defineLocale("tzl",{months:"Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),monthsShort:"Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),weekdays:"Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),weekdaysShort:"Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),weekdaysMin:"Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"D. MMMM [dallas] YYYY",LLL:"D. MMMM [dallas] YYYY HH.mm",LLLL:"dddd, [li] D. MMMM [dallas] YYYY HH.mm"},meridiemParse:/d\'o|d\'a/i,isPM:function(e){return"d'o"===e.toLowerCase()},meridiem:function(e,a,t){return e>11?t?"d'o":"D'O":t?"d'a":"D'A"},calendar:{sameDay:"[oxhi à] LT",nextDay:"[demà à] LT",nextWeek:"dddd [à] LT",lastDay:"[ieiri à] LT",lastWeek:"[sür el] dddd [lasteu à] LT",sameElse:"L"},relativeTime:{future:"osprei %s",past:"ja%s",s:_n,m:_n,mm:_n,h:_n,hh:_n,d:_n,dd:_n,M:_n,MM:_n,y:_n,yy:_n},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),e.defineLocale("tzm-latn",{months:"innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),monthsShort:"innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),weekdays:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),weekdaysShort:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),weekdaysMin:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[asdkh g] LT",nextDay:"[aska g] LT",nextWeek:"dddd [g] LT",lastDay:"[assant g] LT",lastWeek:"dddd [g] LT",sameElse:"L"},relativeTime:{future:"dadkh s yan %s",past:"yan %s",s:"imik",m:"minuḍ",mm:"%d minuḍ",h:"saɛa",hh:"%d tassaɛin",d:"ass",dd:"%d ossan",M:"ayowr",MM:"%d iyyirn",y:"asgas",yy:"%d isgasn"},week:{dow:6,doy:12}}),e.defineLocale("tzm",{months:"ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),monthsShort:"ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),weekdays:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),weekdaysShort:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),weekdaysMin:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[ⴰⵙⴷⵅ ⴴ] LT",nextDay:"[ⴰⵙⴽⴰ ⴴ] LT",nextWeek:"dddd [ⴴ] LT",lastDay:"[ⴰⵚⴰⵏⵜ ⴴ] LT",lastWeek:"dddd [ⴴ] LT",sameElse:"L"},relativeTime:{future:"ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",past:"ⵢⴰⵏ %s",s:"ⵉⵎⵉⴽ",m:"ⵎⵉⵏⵓⴺ",mm:"%d ⵎⵉⵏⵓⴺ",h:"ⵙⴰⵄⴰ",hh:"%d ⵜⴰⵙⵙⴰⵄⵉⵏ",d:"ⴰⵙⵙ",dd:"%d oⵙⵙⴰⵏ",M:"ⴰⵢoⵓⵔ",MM:"%d ⵉⵢⵢⵉⵔⵏ",y:"ⴰⵙⴳⴰⵙ",yy:"%d ⵉⵙⴳⴰⵙⵏ"},week:{dow:6,doy:12}}),e.defineLocale("uk",{months:{format:"січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),standalone:"січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")},monthsShort:"січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),weekdays:mn,weekdaysShort:"нд_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY р.",LLL:"D MMMM YYYY р., HH:mm",LLLL:"dddd, D MMMM YYYY р., HH:mm"},calendar:{sameDay:un("[Сьогодні "),nextDay:un("[Завтра "),lastDay:un("[Вчора "),nextWeek:un("[У] dddd ["),lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return un("[Минулої] dddd [").call(this);case 1:case 2:case 4:return un("[Минулого] dddd [").call(this)}},sameElse:"L"},relativeTime:{future:"за %s",past:"%s тому",s:"декілька секунд",m:on,mm:on,h:"годину",hh:on,d:"день",dd:on,M:"місяць",MM:on,y:"рік",yy:on},meridiemParse:/ночі|ранку|дня|вечора/,isPM:function(e){return/^(дня|вечора)$/.test(e)},meridiem:function(e,a,t){return e<4?"ночі":e<12?"ранку":e<17?"дня":"вечора"},ordinalParse:/\d{1,2}-(й|го)/,ordinal:function(e,a){switch(a){case"M":case"d":case"DDD":case"w":case"W":return e+"-й";case"D":return e+"-го";default:return e}},week:{dow:1,doy:7}}),e.defineLocale("uz",{months:"январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),monthsShort:"янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),weekdays:"Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),weekdaysShort:"Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),weekdaysMin:"Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"D MMMM YYYY, dddd HH:mm"},calendar:{sameDay:"[Бугун соат] LT [да]",nextDay:"[Эртага] LT [да]",nextWeek:"dddd [куни соат] LT [да]",lastDay:"[Кеча соат] LT [да]",lastWeek:"[Утган] dddd [куни соат] LT [да]",sameElse:"L"},relativeTime:{future:"Якин %s ичида",past:"Бир неча %s олдин",s:"фурсат",m:"бир дакика",mm:"%d дакика",h:"бир соат",hh:"%d соат",d:"бир кун",dd:"%d кун",M:"бир ой",MM:"%d ой",y:"бир йил",yy:"%d йил"},week:{dow:1,doy:7}}),e.defineLocale("vi",{months:"tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),monthsShort:"Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),monthsParseExact:!0,weekdays:"chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),weekdaysShort:"CN_T2_T3_T4_T5_T6_T7".split("_"),weekdaysMin:"CN_T2_T3_T4_T5_T6_T7".split("_"),weekdaysParseExact:!0,meridiemParse:/sa|ch/i,isPM:function(e){return/^ch$/i.test(e)},meridiem:function(e,a,t){return e<12?t?"sa":"SA":t?"ch":"CH"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [năm] YYYY",LLL:"D MMMM [năm] YYYY HH:mm",LLLL:"dddd, D MMMM [năm] YYYY HH:mm",l:"DD/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},calendar:{sameDay:"[Hôm nay lúc] LT",nextDay:"[Ngày mai lúc] LT",nextWeek:"dddd [tuần tới lúc] LT",lastDay:"[Hôm qua lúc] LT",lastWeek:"dddd [tuần rồi lúc] LT",sameElse:"L"},relativeTime:{future:"%s tới",past:"%s trước",s:"vài giây",m:"một phút",mm:"%d phút",h:"một giờ",hh:"%d giờ",d:"một ngày",dd:"%d ngày",M:"một tháng",MM:"%d tháng",y:"một năm",yy:"%d năm"},ordinalParse:/\d{1,2}/,ordinal:function(e){return e},week:{dow:1,doy:4}}),e.defineLocale("x-pseudo",{months:"J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),monthsShort:"J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),monthsParseExact:!0,weekdays:"S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),weekdaysShort:"S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),weekdaysMin:"S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[T~ódá~ý át] LT",nextDay:"[T~ómó~rró~w át] LT",nextWeek:"dddd [át] LT",lastDay:"[Ý~ést~érdá~ý át] LT",lastWeek:"[L~ást] dddd [át] LT",sameElse:"L"},relativeTime:{future:"í~ñ %s",past:"%s á~gó",s:"á ~féw ~sécó~ñds",m:"á ~míñ~úté",mm:"%d m~íñú~tés",h:"á~ñ hó~úr",hh:"%d h~óúrs",d:"á ~dáý",dd:"%d d~áýs",M:"á ~móñ~th",MM:"%d m~óñt~hs",y:"á ~ýéár",yy:"%d ý~éárs"},ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var a=e%10,t=1===~~(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th";return e+t},week:{dow:1,doy:4}}),e.defineLocale("yo",{months:"Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),monthsShort:"Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),weekdays:"Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),weekdaysShort:"Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),weekdaysMin:"Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Ònì ni] LT",nextDay:"[Ọ̀la ni] LT",nextWeek:"dddd [Ọsẹ̀ tón'bọ] [ni] LT",lastDay:"[Àna ni] LT",lastWeek:"dddd [Ọsẹ̀ tólọ́] [ni] LT",sameElse:"L"},relativeTime:{future:"ní %s",past:"%s kọjá",s:"ìsẹjú aayá die",m:"ìsẹjú kan",mm:"ìsẹjú %d",h:"wákati kan",hh:"wákati %d",d:"ọjọ́ kan",dd:"ọjọ́ %d",M:"osù kan",MM:"osù %d",y:"ọdún kan",yy:"ọdún %d"},ordinalParse:/ọjọ́\s\d{1,2}/,ordinal:"ọjọ́ %d",week:{dow:1,doy:4}}),e.defineLocale("zh-cn",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"Ah点mm分",LTS:"Ah点m分s秒",L:"YYYY-MM-DD",LL:"YYYY年MMMD日",LLL:"YYYY年MMMD日Ah点mm分",LLLL:"YYYY年MMMD日ddddAh点mm分",l:"YYYY-MM-DD",ll:"YYYY年MMMD日",lll:"YYYY年MMMD日Ah点mm分",llll:"YYYY年MMMD日ddddAh点mm分"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(e,a){return 12===e&&(e=0),"凌晨"===a||"早上"===a||"上午"===a?e:"下午"===a||"晚上"===a?e+12:e>=11?e:e+12},meridiem:function(e,a,t){var s=100*e+a;return s<600?"凌晨":s<900?"早上":s<1130?"上午":s<1230?"中午":s<1800?"下午":"晚上"},calendar:{sameDay:function(){return 0===this.minutes()?"[今天]Ah[点整]":"[今天]LT"},nextDay:function(){return 0===this.minutes()?"[明天]Ah[点整]":"[明天]LT"},lastDay:function(){return 0===this.minutes()?"[昨天]Ah[点整]":"[昨天]LT"},nextWeek:function(){var a,t;return a=e().startOf("week"),t=this.diff(a,"days")>=7?"[下]":"[本]",0===this.minutes()?t+"dddAh点整":t+"dddAh点mm"},lastWeek:function(){var a,t;return a=e().startOf("week"),t=this.unix()<a.unix()?"[上]":"[本]",0===this.minutes()?t+"dddAh点整":t+"dddAh点mm"},sameElse:"LL"},ordinalParse:/\d{1,2}(日|月|周)/,ordinal:function(e,a){switch(a){case"d":case"D":case"DDD":return e+"日";case"M":return e+"月";case"w":case"W":return e+"周";default:return e}},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},week:{dow:1,doy:4}}),e.defineLocale("zh-hk",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"Ah點mm分",LTS:"Ah點m分s秒",L:"YYYY年MMMD日",LL:"YYYY年MMMD日",LLL:"YYYY年MMMD日Ah點mm分",LLLL:"YYYY年MMMD日ddddAh點mm分",l:"YYYY年MMMD日",ll:"YYYY年MMMD日",lll:"YYYY年MMMD日Ah點mm分",llll:"YYYY年MMMD日ddddAh點mm分"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(e,a){return 12===e&&(e=0),"凌晨"===a||"早上"===a||"上午"===a?e:"中午"===a?e>=11?e:e+12:"下午"===a||"晚上"===a?e+12:void 0},meridiem:function(e,a,t){var s=100*e+a;return s<600?"凌晨":s<900?"早上":s<1130?"上午":s<1230?"中午":s<1800?"下午":"晚上"},calendar:{sameDay:"[今天]LT",nextDay:"[明天]LT",nextWeek:"[下]ddddLT",lastDay:"[昨天]LT",lastWeek:"[上]ddddLT",sameElse:"L"},ordinalParse:/\d{1,2}(日|月|週)/,ordinal:function(e,a){switch(a){case"d":case"D":case"DDD":return e+"日";case"M":return e+"月";case"w":case"W":return e+"週";default:return e}},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",m:"1 分鐘",mm:"%d 分鐘",h:"1 小時",hh:"%d 小時",d:"1 天",dd:"%d 天",M:"1 個月",MM:"%d 個月",y:"1 年",yy:"%d 年"}}),e.defineLocale("zh-tw",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"Ah點mm分",LTS:"Ah點m分s秒",L:"YYYY年MMMD日",LL:"YYYY年MMMD日",LLL:"YYYY年MMMD日Ah點mm分",LLLL:"YYYY年MMMD日ddddAh點mm分",l:"YYYY年MMMD日",ll:"YYYY年MMMD日",lll:"YYYY年MMMD日Ah點mm分",llll:"YYYY年MMMD日ddddAh點mm分"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(e,a){return 12===e&&(e=0),"凌晨"===a||"早上"===a||"上午"===a?e:"中午"===a?e>=11?e:e+12:"下午"===a||"晚上"===a?e+12:void 0},meridiem:function(e,a,t){var s=100*e+a;return s<600?"凌晨":s<900?"早上":s<1130?"上午":s<1230?"中午":s<1800?"下午":"晚上"},calendar:{sameDay:"[今天]LT",nextDay:"[明天]LT",nextWeek:"[下]ddddLT",lastDay:"[昨天]LT",lastWeek:"[上]ddddLT",sameElse:"L"},ordinalParse:/\d{1,2}(日|月|週)/,ordinal:function(e,a){switch(a){case"d":case"D":case"DDD":return e+"日";case"M":return e+"月";case"w":case"W":return e+"週";default:return e}},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",m:"1 分鐘",mm:"%d 分鐘",h:"1 小時",hh:"%d 小時",d:"1 天",dd:"%d 天",M:"1 個月",MM:"%d 個月",y:"1 年",yy:"%d 年"}}),e.locale("en"),e});

},{}],8:[function(require,module,exports){
function defaultSetTimout(){throw new Error("setTimeout has not been defined")}function defaultClearTimeout(){throw new Error("clearTimeout has not been defined")}function runTimeout(e){if(cachedSetTimeout===setTimeout)return setTimeout(e,0);if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout)return cachedSetTimeout=setTimeout,setTimeout(e,0);try{return cachedSetTimeout(e,0)}catch(t){try{return cachedSetTimeout.call(null,e,0)}catch(t){return cachedSetTimeout.call(this,e,0)}}}function runClearTimeout(e){if(cachedClearTimeout===clearTimeout)return clearTimeout(e);if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout)return cachedClearTimeout=clearTimeout,clearTimeout(e);try{return cachedClearTimeout(e)}catch(t){try{return cachedClearTimeout.call(null,e)}catch(t){return cachedClearTimeout.call(this,e)}}}function cleanUpNextTick(){draining&&currentQueue&&(draining=!1,currentQueue.length?queue=currentQueue.concat(queue):queueIndex=-1,queue.length&&drainQueue())}function drainQueue(){if(!draining){var e=runTimeout(cleanUpNextTick);draining=!0;for(var t=queue.length;t;){for(currentQueue=queue,queue=[];++queueIndex<t;)currentQueue&&currentQueue[queueIndex].run();queueIndex=-1,t=queue.length}currentQueue=null,draining=!1,runClearTimeout(e)}}function Item(e,t){this.fun=e,this.array=t}function noop(){}var process=module.exports={},cachedSetTimeout,cachedClearTimeout;!function(){try{cachedSetTimeout="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){cachedSetTimeout=defaultSetTimout}try{cachedClearTimeout="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e){cachedClearTimeout=defaultClearTimeout}}();var queue=[],draining=!1,currentQueue,queueIndex=-1;process.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var u=1;u<arguments.length;u++)t[u-1]=arguments[u];queue.push(new Item(e,t)),1!==queue.length||draining||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},process.title="browser",process.browser=!0,process.env={},process.argv=[],process.version="",process.versions={},process.on=noop,process.addListener=noop,process.once=noop,process.off=noop,process.removeListener=noop,process.removeAllListeners=noop,process.emit=noop,process.binding=function(e){throw new Error("process.binding is not supported")},process.cwd=function(){return"/"},process.chdir=function(e){throw new Error("process.chdir is not supported")},process.umask=function(){return 0};

},{}],9:[function(require,module,exports){
(function (global){
!function(e){function o(e){throw new RangeError(T[e])}function n(e,o){for(var n=e.length,r=[];n--;)r[n]=o(e[n]);return r}function r(e,o){var r=e.split("@"),t="";r.length>1&&(t=r[0]+"@",e=r[1]),e=e.replace(S,".");var u=e.split("."),i=n(u,o).join(".");return t+i}function t(e){for(var o,n,r=[],t=0,u=e.length;t<u;)o=e.charCodeAt(t++),o>=55296&&o<=56319&&t<u?(n=e.charCodeAt(t++),56320==(64512&n)?r.push(((1023&o)<<10)+(1023&n)+65536):(r.push(o),t--)):r.push(o);return r}function u(e){return n(e,function(e){var o="";return e>65535&&(e-=65536,o+=P(e>>>10&1023|55296),e=56320|1023&e),o+=P(e)}).join("")}function i(e){return e-48<10?e-22:e-65<26?e-65:e-97<26?e-97:b}function f(e,o){return e+22+75*(e<26)-((0!=o)<<5)}function c(e,o,n){var r=0;for(e=n?M(e/j):e>>1,e+=M(e/o);e>L*C>>1;r+=b)e=M(e/L);return M(r+(L+1)*e/(e+m))}function l(e){var n,r,t,f,l,s,d,a,p,h,v=[],g=e.length,w=0,m=I,j=A;for(r=e.lastIndexOf(E),r<0&&(r=0),t=0;t<r;++t)e.charCodeAt(t)>=128&&o("not-basic"),v.push(e.charCodeAt(t));for(f=r>0?r+1:0;f<g;){for(l=w,s=1,d=b;f>=g&&o("invalid-input"),a=i(e.charCodeAt(f++)),(a>=b||a>M((x-w)/s))&&o("overflow"),w+=a*s,p=d<=j?y:d>=j+C?C:d-j,!(a<p);d+=b)h=b-p,s>M(x/h)&&o("overflow"),s*=h;n=v.length+1,j=c(w-l,n,0==l),M(w/n)>x-m&&o("overflow"),m+=M(w/n),w%=n,v.splice(w++,0,m)}return u(v)}function s(e){var n,r,u,i,l,s,d,a,p,h,v,g,w,m,j,F=[];for(e=t(e),g=e.length,n=I,r=0,l=A,s=0;s<g;++s)v=e[s],v<128&&F.push(P(v));for(u=i=F.length,i&&F.push(E);u<g;){for(d=x,s=0;s<g;++s)v=e[s],v>=n&&v<d&&(d=v);for(w=u+1,d-n>M((x-r)/w)&&o("overflow"),r+=(d-n)*w,n=d,s=0;s<g;++s)if(v=e[s],v<n&&++r>x&&o("overflow"),v==n){for(a=r,p=b;h=p<=l?y:p>=l+C?C:p-l,!(a<h);p+=b)j=a-h,m=b-h,F.push(P(f(h+j%m,0))),a=M(j/m);F.push(P(f(a,0))),l=c(r,w,u==i),r=0,++u}++r,++n}return F.join("")}function d(e){return r(e,function(e){return F.test(e)?l(e.slice(4).toLowerCase()):e})}function a(e){return r(e,function(e){return O.test(e)?"xn--"+s(e):e})}var p="object"==typeof exports&&exports&&!exports.nodeType&&exports,h="object"==typeof module&&module&&!module.nodeType&&module,v="object"==typeof global&&global;v.global!==v&&v.window!==v&&v.self!==v||(e=v);var g,w,x=2147483647,b=36,y=1,C=26,m=38,j=700,A=72,I=128,E="-",F=/^xn--/,O=/[^\x20-\x7E]/,S=/[\x2E\u3002\uFF0E\uFF61]/g,T={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},L=b-y,M=Math.floor,P=String.fromCharCode;if(g={version:"1.4.1",ucs2:{decode:t,encode:u},decode:l,encode:s,toASCII:a,toUnicode:d},"function"==typeof define&&"object"==typeof define.amd&&define.amd)define("punycode",function(){return g});else if(p&&h)if(module.exports==p)h.exports=g;else for(w in g)g.hasOwnProperty(w)&&(p[w]=g[w]);else e.punycode=g}(this);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],10:[function(require,module,exports){
"use strict";function hasOwnProperty(r,e){return Object.prototype.hasOwnProperty.call(r,e)}module.exports=function(r,e,t,n){e=e||"&",t=t||"=";var o={};if("string"!=typeof r||0===r.length)return o;var a=/\+/g;r=r.split(e);var s=1e3;n&&"number"==typeof n.maxKeys&&(s=n.maxKeys);var p=r.length;s>0&&p>s&&(p=s);for(var y=0;y<p;++y){var u,c,i,l,f=r[y].replace(a,"%20"),v=f.indexOf(t);v>=0?(u=f.substr(0,v),c=f.substr(v+1)):(u=f,c=""),i=decodeURIComponent(u),l=decodeURIComponent(c),hasOwnProperty(o,i)?isArray(o[i])?o[i].push(l):o[i]=[o[i],l]:o[i]=l}return o};var isArray=Array.isArray||function(r){return"[object Array]"===Object.prototype.toString.call(r)};

},{}],11:[function(require,module,exports){
"use strict";function map(r,e){if(r.map)return r.map(e);for(var t=[],n=0;n<r.length;n++)t.push(e(r[n],n));return t}var stringifyPrimitive=function(r){switch(typeof r){case"string":return r;case"boolean":return r?"true":"false";case"number":return isFinite(r)?r:"";default:return""}};module.exports=function(r,e,t,n){return e=e||"&",t=t||"=",null===r&&(r=void 0),"object"==typeof r?map(objectKeys(r),function(n){var i=encodeURIComponent(stringifyPrimitive(n))+t;return isArray(r[n])?map(r[n],function(r){return i+encodeURIComponent(stringifyPrimitive(r))}).join(e):i+encodeURIComponent(stringifyPrimitive(r[n]))}).join(e):n?encodeURIComponent(stringifyPrimitive(n))+t+encodeURIComponent(stringifyPrimitive(r)):""};var isArray=Array.isArray||function(r){return"[object Array]"===Object.prototype.toString.call(r)},objectKeys=Object.keys||function(r){var e=[];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&e.push(t);return e};

},{}],12:[function(require,module,exports){
"use strict";exports.decode=exports.parse=require("./decode"),exports.encode=exports.stringify=require("./encode");

},{"./decode":10,"./encode":11}],13:[function(require,module,exports){
/**
 * UAParser.js v0.7.12
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
 * Dual licensed under GPLv2 & MIT
 */

(function (window, undefined) {

    'use strict';

    //////////////
    // Constants
    /////////////


    var LIBVERSION  = '0.7.12',
        EMPTY       = '',
        UNKNOWN     = '?',
        FUNC_TYPE   = 'function',
        UNDEF_TYPE  = 'undefined',
        OBJ_TYPE    = 'object',
        STR_TYPE    = 'string',
        MAJOR       = 'major', // deprecated
        MODEL       = 'model',
        NAME        = 'name',
        TYPE        = 'type',
        VENDOR      = 'vendor',
        VERSION     = 'version',
        ARCHITECTURE= 'architecture',
        CONSOLE     = 'console',
        MOBILE      = 'mobile',
        TABLET      = 'tablet',
        SMARTTV     = 'smarttv',
        WEARABLE    = 'wearable',
        EMBEDDED    = 'embedded';


    ///////////
    // Helper
    //////////


    var util = {
        extend : function (regexes, extensions) {
            var margedRegexes = {};
            for (var i in regexes) {
                if (extensions[i] && extensions[i].length % 2 === 0) {
                    margedRegexes[i] = extensions[i].concat(regexes[i]);
                } else {
                    margedRegexes[i] = regexes[i];
                }
            }
            return margedRegexes;
        },
        has : function (str1, str2) {
          if (typeof str1 === "string") {
            return str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1;
          } else {
            return false;
          }
        },
        lowerize : function (str) {
            return str.toLowerCase();
        },
        major : function (version) {
            return typeof(version) === STR_TYPE ? version.replace(/[^\d\.]/g,'').split(".")[0] : undefined;
        },
        trim : function (str) {
          return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
        }
    };


    ///////////////
    // Map helper
    //////////////


    var mapper = {

        rgx : function () {

            var result, i = 0, j, k, p, q, matches, match, args = arguments;

            // loop through all regexes maps
            while (i < args.length && !matches) {

                var regex = args[i],       // even sequence (0,2,4,..)
                    props = args[i + 1];   // odd sequence (1,3,5,..)

                // construct object barebones
                if (typeof result === UNDEF_TYPE) {
                    result = {};
                    for (p in props) {
                        if (props.hasOwnProperty(p)){
                            q = props[p];
                            if (typeof q === OBJ_TYPE) {
                                result[q[0]] = undefined;
                            } else {
                                result[q] = undefined;
                            }
                        }
                    }
                }

                // try matching uastring with regexes
                j = k = 0;
                while (j < regex.length && !matches) {
                    matches = regex[j++].exec(this.getUA());
                    if (!!matches) {
                        for (p = 0; p < props.length; p++) {
                            match = matches[++k];
                            q = props[p];
                            // check if given property is actually array
                            if (typeof q === OBJ_TYPE && q.length > 0) {
                                if (q.length == 2) {
                                    if (typeof q[1] == FUNC_TYPE) {
                                        // assign modified match
                                        result[q[0]] = q[1].call(this, match);
                                    } else {
                                        // assign given value, ignore regex match
                                        result[q[0]] = q[1];
                                    }
                                } else if (q.length == 3) {
                                    // check whether function or regex
                                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                                        // call function (usually string mapper)
                                        result[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                                    } else {
                                        // sanitize match using given regex
                                        result[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                                    }
                                } else if (q.length == 4) {
                                        result[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                                }
                            } else {
                                result[q] = match ? match : undefined;
                            }
                        }
                    }
                }
                i += 2;
            }
            return result;
        },

        str : function (str, map) {

            for (var i in map) {
                // check if array
                if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
                    for (var j = 0; j < map[i].length; j++) {
                        if (util.has(map[i][j], str)) {
                            return (i === UNKNOWN) ? undefined : i;
                        }
                    }
                } else if (util.has(map[i], str)) {
                    return (i === UNKNOWN) ? undefined : i;
                }
            }
            return str;
        }
    };


    ///////////////
    // String map
    //////////////


    var maps = {

        browser : {
            oldsafari : {
                version : {
                    '1.0'   : '/8',
                    '1.2'   : '/1',
                    '1.3'   : '/3',
                    '2.0'   : '/412',
                    '2.0.2' : '/416',
                    '2.0.3' : '/417',
                    '2.0.4' : '/419',
                    '?'     : '/'
                }
            }
        },

        device : {
            amazon : {
                model : {
                    'Fire Phone' : ['SD', 'KF']
                }
            },
            sprint : {
                model : {
                    'Evo Shift 4G' : '7373KT'
                },
                vendor : {
                    'HTC'       : 'APA',
                    'Sprint'    : 'Sprint'
                }
            }
        },

        os : {
            windows : {
                version : {
                    'ME'        : '4.90',
                    'NT 3.11'   : 'NT3.51',
                    'NT 4.0'    : 'NT4.0',
                    '2000'      : 'NT 5.0',
                    'XP'        : ['NT 5.1', 'NT 5.2'],
                    'Vista'     : 'NT 6.0',
                    '7'         : 'NT 6.1',
                    '8'         : 'NT 6.2',
                    '8.1'       : 'NT 6.3',
                    '10'        : ['NT 6.4', 'NT 10.0'],
                    'RT'        : 'ARM'
                }
            }
        }
    };


    //////////////
    // Regex map
    /////////////


    var regexes = {

        browser : [[

            // Presto based
            /(opera\smini)\/([\w\.-]+)/i,                                       // Opera Mini
            /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,                      // Opera Mobi/Tablet
            /(opera).+version\/([\w\.]+)/i,                                     // Opera > 9.80
            /(opera)[\/\s]+([\w\.]+)/i                                          // Opera < 9.80
            ], [NAME, VERSION], [

            /(opios)[\/\s]+([\w\.]+)/i                                          // Opera mini on iphone >= 8.0
            ], [[NAME, 'Opera Mini'], VERSION], [

            /\s(opr)\/([\w\.]+)/i                                               // Opera Webkit
            ], [[NAME, 'Opera'], VERSION], [

            // Mixed
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,
                                                                                // Lunascape/Maxthon/Netfront/Jasmine/Blazer

            // Trident based
            /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
                                                                                // Avant/IEMobile/SlimBrowser/Baidu
            /(?:ms|\()(ie)\s([\w\.]+)/i,                                        // Internet Explorer

            // Webkit/KHTML based
            /(rekonq)\/([\w\.]+)*/i,                                            // Rekonq
            /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i
                                                                                // Chromium/Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS
            ], [NAME, VERSION], [

            /(trident).+rv[:\s]([\w\.]+).+like\sgecko/i                         // IE11
            ], [[NAME, 'IE'], VERSION], [

            /(edge)\/((\d+)?[\w\.]+)/i                                          // Microsoft Edge
            ], [NAME, VERSION], [

            /(yabrowser)\/([\w\.]+)/i                                           // Yandex
            ], [[NAME, 'Yandex'], VERSION], [

            /(comodo_dragon)\/([\w\.]+)/i                                       // Comodo Dragon
            ], [[NAME, /_/g, ' '], VERSION], [

            /(micromessenger)\/([\w\.]+)/i                                      // WeChat
            ], [[NAME, 'WeChat'], VERSION], [

            /xiaomi\/miuibrowser\/([\w\.]+)/i                                   // MIUI Browser
            ], [VERSION, [NAME, 'MIUI Browser']], [

            /\swv\).+(chrome)\/([\w\.]+)/i                                      // Chrome WebView
            ], [[NAME, /(.+)/, '$1 WebView'], VERSION], [

            /android.+samsungbrowser\/([\w\.]+)/i,
            /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i        // Android Browser
            ], [VERSION, [NAME, 'Android Browser']], [

            /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,
                                                                                // Chrome/OmniWeb/Arora/Tizen/Nokia
            /(qqbrowser)[\/\s]?([\w\.]+)/i
                                                                                // QQBrowser
            ], [NAME, VERSION], [

            /(uc\s?browser)[\/\s]?([\w\.]+)/i,
            /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i,
            /juc.+(ucweb)[\/\s]?([\w\.]+)/i
                                                                                // UCBrowser
            ], [[NAME, 'UCBrowser'], VERSION], [

            /(dolfin)\/([\w\.]+)/i                                              // Dolphin
            ], [[NAME, 'Dolphin'], VERSION], [

            /((?:android.+)crmo|crios)\/([\w\.]+)/i                             // Chrome for Android/iOS
            ], [[NAME, 'Chrome'], VERSION], [

            /;fbav\/([\w\.]+);/i                                                // Facebook App for iOS
            ], [VERSION, [NAME, 'Facebook']], [

            /fxios\/([\w\.-]+)/i                                                // Firefox for iOS
            ], [VERSION, [NAME, 'Firefox']], [

            /version\/([\w\.]+).+?mobile\/\w+\s(safari)/i                       // Mobile Safari
            ], [VERSION, [NAME, 'Mobile Safari']], [

            /version\/([\w\.]+).+?(mobile\s?safari|safari)/i                    // Safari & Safari Mobile
            ], [VERSION, NAME], [

            /webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i                     // Safari < 3.0
            ], [NAME, [VERSION, mapper.str, maps.browser.oldsafari.version]], [

            /(konqueror)\/([\w\.]+)/i,                                          // Konqueror
            /(webkit|khtml)\/([\w\.]+)/i
            ], [NAME, VERSION], [

            // Gecko based
            /(navigator|netscape)\/([\w\.-]+)/i                                 // Netscape
            ], [[NAME, 'Netscape'], VERSION], [
            /(swiftfox)/i,                                                      // Swiftfox
            /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                                                                                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
            /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,
                                                                                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
            /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,                          // Mozilla

            // Other
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                                                                                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir
            /(links)\s\(([\w\.]+)/i,                                            // Links
            /(gobrowser)\/?([\w\.]+)*/i,                                        // GoBrowser
            /(ice\s?browser)\/v?([\w\._]+)/i,                                   // ICE Browser
            /(mosaic)[\/\s]([\w\.]+)/i                                          // Mosaic
            ], [NAME, VERSION]

            /* /////////////////////
            // Media players BEGIN
            ////////////////////////

            , [

            /(apple(?:coremedia|))\/((\d+)[\w\._]+)/i,                          // Generic Apple CoreMedia
            /(coremedia) v((\d+)[\w\._]+)/i
            ], [NAME, VERSION], [

            /(aqualung|lyssna|bsplayer)\/((\d+)?[\w\.-]+)/i                     // Aqualung/Lyssna/BSPlayer
            ], [NAME, VERSION], [

            /(ares|ossproxy)\s((\d+)[\w\.-]+)/i                                 // Ares/OSSProxy
            ], [NAME, VERSION], [

            /(audacious|audimusicstream|amarok|bass|core|dalvik|gnomemplayer|music on console|nsplayer|psp-internetradioplayer|videos)\/((\d+)[\w\.-]+)/i,
                                                                                // Audacious/AudiMusicStream/Amarok/BASS/OpenCORE/Dalvik/GnomeMplayer/MoC
                                                                                // NSPlayer/PSP-InternetRadioPlayer/Videos
            /(clementine|music player daemon)\s((\d+)[\w\.-]+)/i,               // Clementine/MPD
            /(lg player|nexplayer)\s((\d+)[\d\.]+)/i,
            /player\/(nexplayer|lg player)\s((\d+)[\w\.-]+)/i                   // NexPlayer/LG Player
            ], [NAME, VERSION], [
            /(nexplayer)\s((\d+)[\w\.-]+)/i                                     // Nexplayer
            ], [NAME, VERSION], [

            /(flrp)\/((\d+)[\w\.-]+)/i                                          // Flip Player
            ], [[NAME, 'Flip Player'], VERSION], [

            /(fstream|nativehost|queryseekspider|ia-archiver|facebookexternalhit)/i
                                                                                // FStream/NativeHost/QuerySeekSpider/IA Archiver/facebookexternalhit
            ], [NAME], [

            /(gstreamer) souphttpsrc (?:\([^\)]+\)){0,1} libsoup\/((\d+)[\w\.-]+)/i
                                                                                // Gstreamer
            ], [NAME, VERSION], [

            /(htc streaming player)\s[\w_]+\s\/\s((\d+)[\d\.]+)/i,              // HTC Streaming Player
            /(java|python-urllib|python-requests|wget|libcurl)\/((\d+)[\w\.-_]+)/i,
                                                                                // Java/urllib/requests/wget/cURL
            /(lavf)((\d+)[\d\.]+)/i                                             // Lavf (FFMPEG)
            ], [NAME, VERSION], [

            /(htc_one_s)\/((\d+)[\d\.]+)/i                                      // HTC One S
            ], [[NAME, /_/g, ' '], VERSION], [

            /(mplayer)(?:\s|\/)(?:(?:sherpya-){0,1}svn)(?:-|\s)(r\d+(?:-\d+[\w\.-]+){0,1})/i
                                                                                // MPlayer SVN
            ], [NAME, VERSION], [

            /(mplayer)(?:\s|\/|[unkow-]+)((\d+)[\w\.-]+)/i                      // MPlayer
            ], [NAME, VERSION], [

            /(mplayer)/i,                                                       // MPlayer (no other info)
            /(yourmuze)/i,                                                      // YourMuze
            /(media player classic|nero showtime)/i                             // Media Player Classic/Nero ShowTime
            ], [NAME], [

            /(nero (?:home|scout))\/((\d+)[\w\.-]+)/i                           // Nero Home/Nero Scout
            ], [NAME, VERSION], [

            /(nokia\d+)\/((\d+)[\w\.-]+)/i                                      // Nokia
            ], [NAME, VERSION], [

            /\s(songbird)\/((\d+)[\w\.-]+)/i                                    // Songbird/Philips-Songbird
            ], [NAME, VERSION], [

            /(winamp)3 version ((\d+)[\w\.-]+)/i,                               // Winamp
            /(winamp)\s((\d+)[\w\.-]+)/i,
            /(winamp)mpeg\/((\d+)[\w\.-]+)/i
            ], [NAME, VERSION], [

            /(ocms-bot|tapinradio|tunein radio|unknown|winamp|inlight radio)/i  // OCMS-bot/tap in radio/tunein/unknown/winamp (no other info)
                                                                                // inlight radio
            ], [NAME], [

            /(quicktime|rma|radioapp|radioclientapplication|soundtap|totem|stagefright|streamium)\/((\d+)[\w\.-]+)/i
                                                                                // QuickTime/RealMedia/RadioApp/RadioClientApplication/
                                                                                // SoundTap/Totem/Stagefright/Streamium
            ], [NAME, VERSION], [

            /(smp)((\d+)[\d\.]+)/i                                              // SMP
            ], [NAME, VERSION], [

            /(vlc) media player - version ((\d+)[\w\.]+)/i,                     // VLC Videolan
            /(vlc)\/((\d+)[\w\.-]+)/i,
            /(xbmc|gvfs|xine|xmms|irapp)\/((\d+)[\w\.-]+)/i,                    // XBMC/gvfs/Xine/XMMS/irapp
            /(foobar2000)\/((\d+)[\d\.]+)/i,                                    // Foobar2000
            /(itunes)\/((\d+)[\d\.]+)/i                                         // iTunes
            ], [NAME, VERSION], [

            /(wmplayer)\/((\d+)[\w\.-]+)/i,                                     // Windows Media Player
            /(windows-media-player)\/((\d+)[\w\.-]+)/i
            ], [[NAME, /-/g, ' '], VERSION], [

            /windows\/((\d+)[\w\.-]+) upnp\/[\d\.]+ dlnadoc\/[\d\.]+ (home media server)/i
                                                                                // Windows Media Server
            ], [VERSION, [NAME, 'Windows']], [

            /(com\.riseupradioalarm)\/((\d+)[\d\.]*)/i                          // RiseUP Radio Alarm
            ], [NAME, VERSION], [

            /(rad.io)\s((\d+)[\d\.]+)/i,                                        // Rad.io
            /(radio.(?:de|at|fr))\s((\d+)[\d\.]+)/i
            ], [[NAME, 'rad.io'], VERSION]

            //////////////////////
            // Media players END
            ////////////////////*/

        ],

        cpu : [[

            /(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i                     // AMD64
            ], [[ARCHITECTURE, 'amd64']], [

            /(ia32(?=;))/i                                                      // IA32 (quicktime)
            ], [[ARCHITECTURE, util.lowerize]], [

            /((?:i[346]|x)86)[;\)]/i                                            // IA32
            ], [[ARCHITECTURE, 'ia32']], [

            // PocketPC mistakenly identified as PowerPC
            /windows\s(ce|mobile);\sppc;/i
            ], [[ARCHITECTURE, 'arm']], [

            /((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i                           // PowerPC
            ], [[ARCHITECTURE, /ower/, '', util.lowerize]], [

            /(sun4\w)[;\)]/i                                                    // SPARC
            ], [[ARCHITECTURE, 'sparc']], [

            /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i
                                                                                // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
            ], [[ARCHITECTURE, util.lowerize]]
        ],

        device : [[

            /\((ipad|playbook);[\w\s\);-]+(rim|apple)/i                         // iPad/PlayBook
            ], [MODEL, VENDOR, [TYPE, TABLET]], [

            /applecoremedia\/[\w\.]+ \((ipad)/                                  // iPad
            ], [MODEL, [VENDOR, 'Apple'], [TYPE, TABLET]], [

            /(apple\s{0,1}tv)/i                                                 // Apple TV
            ], [[MODEL, 'Apple TV'], [VENDOR, 'Apple']], [

            /(archos)\s(gamepad2?)/i,                                           // Archos
            /(hp).+(touchpad)/i,                                                // HP TouchPad
            /(hp).+(tablet)/i,                                                  // HP Tablet
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /\s(nook)[\w\s]+build\/(\w+)/i,                                     // Nook
            /(dell)\s(strea[kpr\s\d]*[\dko])/i                                  // Dell Streak
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i                               // Kindle Fire HD
            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [
            /(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i                  // Fire Phone
            ], [[MODEL, mapper.str, maps.device.amazon.model], [VENDOR, 'Amazon'], [TYPE, MOBILE]], [

            /\((ip[honed|\s\w*]+);.+(apple)/i                                   // iPod/iPhone
            ], [MODEL, VENDOR, [TYPE, MOBILE]], [
            /\((ip[honed|\s\w*]+);/i                                            // iPod/iPhone
            ], [MODEL, [VENDOR, 'Apple'], [TYPE, MOBILE]], [

            /(blackberry)[\s-]?(\w+)/i,                                         // BlackBerry
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,
                                                                                // BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Huawei/Meizu/Motorola/Polytron
            /(hp)\s([\w\s]+\w)/i,                                               // HP iPAQ
            /(asus)-?(\w+)/i                                                    // Asus
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
            /\(bb10;\s(\w+)/i                                                   // BlackBerry 10
            ], [MODEL, [VENDOR, 'BlackBerry'], [TYPE, MOBILE]], [
                                                                                // Asus Tablets
            /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i
            ], [MODEL, [VENDOR, 'Asus'], [TYPE, TABLET]], [

            /(sony)\s(tablet\s[ps])\sbuild\//i,                                  // Sony
            /(sony)?(?:sgp.+)\sbuild\//i
            ], [[VENDOR, 'Sony'], [MODEL, 'Xperia Tablet'], [TYPE, TABLET]], [
            /(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i
            ], [[VENDOR, 'Sony'], [MODEL, 'Xperia Phone'], [TYPE, MOBILE]], [

            /\s(ouya)\s/i,                                                      // Ouya
            /(nintendo)\s([wids3u]+)/i                                          // Nintendo
            ], [VENDOR, MODEL, [TYPE, CONSOLE]], [

            /android.+;\s(shield)\sbuild/i                                      // Nvidia
            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [

            /(playstation\s[34portablevi]+)/i                                   // Playstation
            ], [MODEL, [VENDOR, 'Sony'], [TYPE, CONSOLE]], [

            /(sprint\s(\w+))/i                                                  // Sprint Phones
            ], [[VENDOR, mapper.str, maps.device.sprint.vendor], [MODEL, mapper.str, maps.device.sprint.model], [TYPE, MOBILE]], [

            /(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i                         // Lenovo tablets
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,                               // HTC
            /(zte)-(\w+)*/i,                                                    // ZTE
            /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i
                                                                                // Alcatel/GeeksPhone/Huawei/Lenovo/Nexian/Panasonic/Sony
            ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [

            /(nexus\s9)/i                                                       // HTC Nexus 9
            ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [

            /(nexus\s6p)/i                                                      // Huawei Nexus 6P
            ], [MODEL, [VENDOR, 'Huawei'], [TYPE, MOBILE]], [

            /(microsoft);\s(lumia[\s\w]+)/i                                     // Microsoft Lumia
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /[\s\(;](xbox(?:\sone)?)[\s\);]/i                                   // Microsoft Xbox
            ], [MODEL, [VENDOR, 'Microsoft'], [TYPE, CONSOLE]], [
            /(kin\.[onetw]{3})/i                                                // Microsoft Kin
            ], [[MODEL, /\./g, ' '], [VENDOR, 'Microsoft'], [TYPE, MOBILE]], [

                                                                                // Motorola
            /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,
            /mot[\s-]?(\w+)*/i,
            /(XT\d{3,4}) build\//i,
            /(nexus\s6)/i
            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, MOBILE]], [
            /android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i
            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, TABLET]], [

            /hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i            // HbbTV devices
            ], [[VENDOR, util.trim], [MODEL, util.trim], [TYPE, SMARTTV]], [

            /hbbtv.+maple;(\d+)/i
            ], [[MODEL, /^/, 'SmartTV'], [VENDOR, 'Samsung'], [TYPE, SMARTTV]], [

            /\(dtv[\);].+(aquos)/i                                              // Sharp
            ], [MODEL, [VENDOR, 'Sharp'], [TYPE, SMARTTV]], [

            /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,
            /((SM-T\w+))/i
            ], [[VENDOR, 'Samsung'], MODEL, [TYPE, TABLET]], [                  // Samsung
            /smart-tv.+(samsung)/i
            ], [VENDOR, [TYPE, SMARTTV], MODEL], [
            /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,
            /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,
            /sec-((sgh\w+))/i
            ], [[VENDOR, 'Samsung'], MODEL, [TYPE, MOBILE]], [

            /sie-(\w+)*/i                                                       // Siemens
            ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [

            /(maemo|nokia).*(n900|lumia\s\d+)/i,                                // Nokia
            /(nokia)[\s_-]?([\w-]+)*/i
            ], [[VENDOR, 'Nokia'], MODEL, [TYPE, MOBILE]], [

            /android\s3\.[\s\w;-]{10}(a\d{3})/i                                 // Acer
            ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [

            /android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i                     // LG Tablet
            ], [[VENDOR, 'LG'], MODEL, [TYPE, TABLET]], [
            /(lg) netcast\.tv/i                                                 // LG SmartTV
            ], [VENDOR, MODEL, [TYPE, SMARTTV]], [
            /(nexus\s[45])/i,                                                   // LG
            /lg[e;\s\/-]+(\w+)*/i
            ], [MODEL, [VENDOR, 'LG'], [TYPE, MOBILE]], [

            /android.+(ideatab[a-z0-9\-\s]+)/i                                  // Lenovo
            ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [

            /linux;.+((jolla));/i                                               // Jolla
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /((pebble))app\/[\d\.]+\s/i                                         // Pebble
            ], [VENDOR, MODEL, [TYPE, WEARABLE]], [

            /android.+;\s(glass)\s\d/i                                          // Google Glass
            ], [MODEL, [VENDOR, 'Google'], [TYPE, WEARABLE]], [

            /android.+(\w+)\s+build\/hm\1/i,                                    // Xiaomi Hongmi 'numeric' models
            /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,               // Xiaomi Hongmi
            /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i    // Xiaomi Mi
            ], [[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, MOBILE]], [

            /android.+a000(1)\s+build/i                                         // OnePlus
            ], [MODEL, [VENDOR, 'OnePlus'], [TYPE, MOBILE]], [

            /\s(tablet)[;\/]/i,                                                 // Unidentifiable Tablet
            /\s(mobile)(?:[;\/]|\ssafari)/i                                     // Unidentifiable Mobile
            ], [[TYPE, util.lowerize], VENDOR, MODEL]

            /*//////////////////////////
            // TODO: move to string map
            ////////////////////////////

            /(C6603)/i                                                          // Sony Xperia Z C6603
            ], [[MODEL, 'Xperia Z C6603'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [
            /(C6903)/i                                                          // Sony Xperia Z 1
            ], [[MODEL, 'Xperia Z 1'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [

            /(SM-G900[F|H])/i                                                   // Samsung Galaxy S5
            ], [[MODEL, 'Galaxy S5'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
            /(SM-G7102)/i                                                       // Samsung Galaxy Grand 2
            ], [[MODEL, 'Galaxy Grand 2'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
            /(SM-G530H)/i                                                       // Samsung Galaxy Grand Prime
            ], [[MODEL, 'Galaxy Grand Prime'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
            /(SM-G313HZ)/i                                                      // Samsung Galaxy V
            ], [[MODEL, 'Galaxy V'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
            /(SM-T805)/i                                                        // Samsung Galaxy Tab S 10.5
            ], [[MODEL, 'Galaxy Tab S 10.5'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [
            /(SM-G800F)/i                                                       // Samsung Galaxy S5 Mini
            ], [[MODEL, 'Galaxy S5 Mini'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
            /(SM-T311)/i                                                        // Samsung Galaxy Tab 3 8.0
            ], [[MODEL, 'Galaxy Tab 3 8.0'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [

            /(R1001)/i                                                          // Oppo R1001
            ], [MODEL, [VENDOR, 'OPPO'], [TYPE, MOBILE]], [
            /(X9006)/i                                                          // Oppo Find 7a
            ], [[MODEL, 'Find 7a'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [
            /(R2001)/i                                                          // Oppo YOYO R2001
            ], [[MODEL, 'Yoyo R2001'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [
            /(R815)/i                                                           // Oppo Clover R815
            ], [[MODEL, 'Clover R815'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [
             /(U707)/i                                                          // Oppo Find Way S
            ], [[MODEL, 'Find Way S'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [

            /(T3C)/i                                                            // Advan Vandroid T3C
            ], [MODEL, [VENDOR, 'Advan'], [TYPE, TABLET]], [
            /(ADVAN T1J\+)/i                                                    // Advan Vandroid T1J+
            ], [[MODEL, 'Vandroid T1J+'], [VENDOR, 'Advan'], [TYPE, TABLET]], [
            /(ADVAN S4A)/i                                                      // Advan Vandroid S4A
            ], [[MODEL, 'Vandroid S4A'], [VENDOR, 'Advan'], [TYPE, MOBILE]], [

            /(V972M)/i                                                          // ZTE V972M
            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, MOBILE]], [

            /(i-mobile)\s(IQ\s[\d\.]+)/i                                        // i-mobile IQ
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
            /(IQ6.3)/i                                                          // i-mobile IQ IQ 6.3
            ], [[MODEL, 'IQ 6.3'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [
            /(i-mobile)\s(i-style\s[\d\.]+)/i                                   // i-mobile i-STYLE
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
            /(i-STYLE2.1)/i                                                     // i-mobile i-STYLE 2.1
            ], [[MODEL, 'i-STYLE 2.1'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [

            /(mobiistar touch LAI 512)/i                                        // mobiistar touch LAI 512
            ], [[MODEL, 'Touch LAI 512'], [VENDOR, 'mobiistar'], [TYPE, MOBILE]], [

            /////////////
            // END TODO
            ///////////*/

        ],

        engine : [[

            /windows.+\sedge\/([\w\.]+)/i                                       // EdgeHTML
            ], [VERSION, [NAME, 'EdgeHTML']], [

            /(presto)\/([\w\.]+)/i,                                             // Presto
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,     // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m
            /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,                          // KHTML/Tasman/Links
            /(icab)[\/\s]([23]\.[\d\.]+)/i                                      // iCab
            ], [NAME, VERSION], [

            /rv\:([\w\.]+).*(gecko)/i                                           // Gecko
            ], [VERSION, NAME]
        ],

        os : [[

            // Windows based
            /microsoft\s(windows)\s(vista|xp)/i                                 // Windows (iTunes)
            ], [NAME, VERSION], [
            /(windows)\snt\s6\.2;\s(arm)/i,                                     // Windows RT
            /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i,                  // Windows Phone
            /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i
            ], [NAME, [VERSION, mapper.str, maps.os.windows.version]], [
            /(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i
            ], [[NAME, 'Windows'], [VERSION, mapper.str, maps.os.windows.version]], [

            // Mobile/Embedded OS
            /\((bb)(10);/i                                                      // BlackBerry 10
            ], [[NAME, 'BlackBerry'], VERSION], [
            /(blackberry)\w*\/?([\w\.]+)*/i,                                    // Blackberry
            /(tizen)[\/\s]([\w\.]+)/i,                                          // Tizen
            /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,
                                                                                // Android/WebOS/Palm/QNX/Bada/RIM/MeeGo/Contiki
            /linux;.+(sailfish);/i                                              // Sailfish OS
            ], [NAME, VERSION], [
            /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i                 // Symbian
            ], [[NAME, 'Symbian'], VERSION], [
            /\((series40);/i                                                    // Series 40
            ], [NAME], [
            /mozilla.+\(mobile;.+gecko.+firefox/i                               // Firefox OS
            ], [[NAME, 'Firefox OS'], VERSION], [

            // Console
            /(nintendo|playstation)\s([wids34portablevu]+)/i,                   // Nintendo/Playstation

            // GNU/Linux based
            /(mint)[\/\s\(]?(\w+)*/i,                                           // Mint
            /(mageia|vectorlinux)[;\s]/i,                                       // Mageia/VectorLinux
            /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i,
                                                                                // Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware
                                                                                // Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus
            /(hurd|linux)\s?([\w\.]+)*/i,                                       // Hurd/Linux
            /(gnu)\s?([\w\.]+)*/i                                               // GNU
            ], [NAME, VERSION], [

            /(cros)\s[\w]+\s([\w\.]+\w)/i                                       // Chromium OS
            ], [[NAME, 'Chromium OS'], VERSION],[

            // Solaris
            /(sunos)\s?([\w\.]+\d)*/i                                           // Solaris
            ], [[NAME, 'Solaris'], VERSION], [

            // BSD based
            /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i                   // FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly
            ], [NAME, VERSION],[

            /(haiku)\s(\w+)/i                                                  // Haiku
            ], [NAME, VERSION],[

            /(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i              // iOS
            ], [[NAME, 'iOS'], [VERSION, /_/g, '.']], [

            /(mac\sos\sx)\s?([\w\s\.]+\w)*/i,
            /(macintosh|mac(?=_powerpc)\s)/i                                    // Mac OS
            ], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [

            // Other
            /((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,                            // Solaris
            /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,                               // AIX
            /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,
                                                                                // Plan9/Minix/BeOS/OS2/AmigaOS/MorphOS/RISCOS/OpenVMS
            /(unix)\s?([\w\.]+)*/i                                              // UNIX
            ], [NAME, VERSION]
        ]
    };


    /////////////////
    // Constructor
    ////////////////


    var UAParser = function (uastring, extensions) {

        if (!(this instanceof UAParser)) {
            return new UAParser(uastring, extensions).getResult();
        }

        var ua = uastring || ((window && window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : EMPTY);
        var rgxmap = extensions ? util.extend(regexes, extensions) : regexes;

        this.getBrowser = function () {
            var browser = mapper.rgx.apply(this, rgxmap.browser);
            browser.major = util.major(browser.version);
            return browser;
        };
        this.getCPU = function () {
            return mapper.rgx.apply(this, rgxmap.cpu);
        };
        this.getDevice = function () {
            return mapper.rgx.apply(this, rgxmap.device);
        };
        this.getEngine = function () {
            return mapper.rgx.apply(this, rgxmap.engine);
        };
        this.getOS = function () {
            return mapper.rgx.apply(this, rgxmap.os);
        };
        this.getResult = function() {
            return {
                ua      : this.getUA(),
                browser : this.getBrowser(),
                engine  : this.getEngine(),
                os      : this.getOS(),
                device  : this.getDevice(),
                cpu     : this.getCPU()
            };
        };
        this.getUA = function () {
            return ua;
        };
        this.setUA = function (uastring) {
            ua = uastring;
            return this;
        };
        return this;
    };

    UAParser.VERSION = LIBVERSION;
    UAParser.BROWSER = {
        NAME    : NAME,
        MAJOR   : MAJOR, // deprecated
        VERSION : VERSION
    };
    UAParser.CPU = {
        ARCHITECTURE : ARCHITECTURE
    };
    UAParser.DEVICE = {
        MODEL   : MODEL,
        VENDOR  : VENDOR,
        TYPE    : TYPE,
        CONSOLE : CONSOLE,
        MOBILE  : MOBILE,
        SMARTTV : SMARTTV,
        TABLET  : TABLET,
        WEARABLE: WEARABLE,
        EMBEDDED: EMBEDDED
    };
    UAParser.ENGINE = {
        NAME    : NAME,
        VERSION : VERSION
    };
    UAParser.OS = {
        NAME    : NAME,
        VERSION : VERSION
    };


    ///////////
    // Export
    //////////


    // check js environment
    if (typeof(exports) !== UNDEF_TYPE) {
        // nodejs env
        if (typeof module !== UNDEF_TYPE && module.exports) {
            exports = module.exports = UAParser;
        }
        exports.UAParser = UAParser;
    } else {
        // requirejs env (optional)
        if (typeof(define) === FUNC_TYPE && define.amd) {
            define(function () {
                return UAParser;
            });
        } else {
            // browser env
            window.UAParser = UAParser;
        }
    }

    // jQuery/Zepto specific (optional)
    // Note:
    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
    //   and we should catch that.
    var $ = window.jQuery || window.Zepto;
    if (typeof $ !== UNDEF_TYPE) {
        var parser = new UAParser();
        $.ua = parser.getResult();
        $.ua.get = function() {
            return parser.getUA();
        };
        $.ua.set = function (uastring) {
            parser.setUA(uastring);
            var result = parser.getResult();
            for (var prop in result) {
                $.ua[prop] = result[prop];
            }
        };
    }

})(typeof window === 'object' ? window : this);

},{}],14:[function(require,module,exports){
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&i<o;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&i<u;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&i<a;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,y=c.bind,d=Object.create,g=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(void 0===t)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(e<2||null==r)return r;for(var u=1;u<e;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;c<a;c++){var f=o[c];t&&void 0!==r[f]||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(d)return d(n);g.prototype=n;var t=new g;return g.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&t<=A};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;e<u;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;e<u;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;o<u;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;if(e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),void 0!==e&&e!==-1)return n[e]},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-(1/0),o=-(1/0);if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;a<c;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-(1/0)&&i===-(1/0))&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;a<c;a++)e=n[a],e<i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u<o||u===1/0&&i===1/0)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;i<e;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||void 0===r)return 1;if(r<e||void 0===e)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){if(null!=n)return null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){if(null!=n)return null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);o<a;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;f<l;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);o<a;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);e<u;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;o<r&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;e<t;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);e<u;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);i<o;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;i<e;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(y&&n.bind===y)return y.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;o<u;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(e<=1)throw new Error("bindAll must be passed function names");for(t=1;t<e;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,l<=0||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;f<t&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){if(--n<1)return t.apply(this,arguments)}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),n<=1&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;u<r;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;a<i;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;u<r;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;e<u;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;i<o;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;a<c;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;i<e;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n||(k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length)},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return void 0===n},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;u<n;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return void 0===e&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(n){throw n.source=i,n}var a=function(n){return o.call(this,n,m)},c=t.variable||"obj";return a.source="function("+c+"){\n"+i+"}",a},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);

},{}],15:[function(require,module,exports){
"use strict";function Url(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}function urlParse(t,s,e){if(t&&util.isObject(t)&&t instanceof Url)return t;var h=new Url;return h.parse(t,s,e),h}function urlFormat(t){return util.isString(t)&&(t=urlParse(t)),t instanceof Url?t.format():Url.prototype.format.call(t)}function urlResolve(t,s){return urlParse(t,!1,!0).resolve(s)}function urlResolveObject(t,s){return t?urlParse(t,!1,!0).resolveObject(s):s}var punycode=require("punycode"),util=require("./util");exports.parse=urlParse,exports.resolve=urlResolve,exports.resolveObject=urlResolveObject,exports.format=urlFormat,exports.Url=Url;var protocolPattern=/^([a-z0-9.+-]+:)/i,portPattern=/:[0-9]*$/,simplePathPattern=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,delims=["<",">",'"',"`"," ","\r","\n","\t"],unwise=["{","}","|","\\","^","`"].concat(delims),autoEscape=["'"].concat(unwise),nonHostChars=["%","/","?",";","#"].concat(autoEscape),hostEndingChars=["/","?","#"],hostnameMaxLen=255,hostnamePartPattern=/^[+a-z0-9A-Z_-]{0,63}$/,hostnamePartStart=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,unsafeProtocol={javascript:!0,"javascript:":!0},hostlessProtocol={javascript:!0,"javascript:":!0},slashedProtocol={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},querystring=require("querystring");Url.prototype.parse=function(t,s,e){if(!util.isString(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var h=t.indexOf("?"),r=h!==-1&&h<t.indexOf("#")?"?":"#",a=t.split(r),o=/\\/g;a[0]=a[0].replace(o,"/"),t=a.join(r);var n=t;if(n=n.trim(),!e&&1===t.split("#").length){var i=simplePathPattern.exec(n);if(i)return this.path=n,this.href=n,this.pathname=i[1],i[2]?(this.search=i[2],s?this.query=querystring.parse(this.search.substr(1)):this.query=this.search.substr(1)):s&&(this.search="",this.query={}),this}var l=protocolPattern.exec(n);if(l){l=l[0];var u=l.toLowerCase();this.protocol=u,n=n.substr(l.length)}if(e||l||n.match(/^\/\/[^@\/]+@[^@\/]+/)){var p="//"===n.substr(0,2);!p||l&&hostlessProtocol[l]||(n=n.substr(2),this.slashes=!0)}if(!hostlessProtocol[l]&&(p||l&&!slashedProtocol[l])){for(var c=-1,f=0;f<hostEndingChars.length;f++){var m=n.indexOf(hostEndingChars[f]);m!==-1&&(c===-1||m<c)&&(c=m)}var v,g;g=c===-1?n.lastIndexOf("@"):n.lastIndexOf("@",c),g!==-1&&(v=n.slice(0,g),n=n.slice(g+1),this.auth=decodeURIComponent(v)),c=-1;for(var f=0;f<nonHostChars.length;f++){var m=n.indexOf(nonHostChars[f]);m!==-1&&(c===-1||m<c)&&(c=m)}c===-1&&(c=n.length),this.host=n.slice(0,c),n=n.slice(c),this.parseHost(),this.hostname=this.hostname||"";var y="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!y)for(var P=this.hostname.split(/\./),f=0,d=P.length;f<d;f++){var q=P[f];if(q&&!q.match(hostnamePartPattern)){for(var b="",O=0,j=q.length;O<j;O++)b+=q.charCodeAt(O)>127?"x":q[O];if(!b.match(hostnamePartPattern)){var x=P.slice(0,f),U=P.slice(f+1),C=q.match(hostnamePartStart);C&&(x.push(C[1]),U.unshift(C[2])),U.length&&(n="/"+U.join(".")+n),this.hostname=x.join(".");break}}}this.hostname.length>hostnameMaxLen?this.hostname="":this.hostname=this.hostname.toLowerCase(),y||(this.hostname=punycode.toASCII(this.hostname));var A=this.port?":"+this.port:"",w=this.hostname||"";this.host=w+A,this.href+=this.host,y&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==n[0]&&(n="/"+n))}if(!unsafeProtocol[u])for(var f=0,d=autoEscape.length;f<d;f++){var E=autoEscape[f];if(n.indexOf(E)!==-1){var I=encodeURIComponent(E);I===E&&(I=escape(E)),n=n.split(E).join(I)}}var R=n.indexOf("#");R!==-1&&(this.hash=n.substr(R),n=n.slice(0,R));var S=n.indexOf("?");if(S!==-1?(this.search=n.substr(S),this.query=n.substr(S+1),s&&(this.query=querystring.parse(this.query)),n=n.slice(0,S)):s&&(this.search="",this.query={}),n&&(this.pathname=n),slashedProtocol[u]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var A=this.pathname||"",k=this.search||"";this.path=A+k}return this.href=this.format(),this},Url.prototype.format=function(){var t=this.auth||"";t&&(t=encodeURIComponent(t),t=t.replace(/%3A/i,":"),t+="@");var s=this.protocol||"",e=this.pathname||"",h=this.hash||"",r=!1,a="";this.host?r=t+this.host:this.hostname&&(r=t+(this.hostname.indexOf(":")===-1?this.hostname:"["+this.hostname+"]"),this.port&&(r+=":"+this.port)),this.query&&util.isObject(this.query)&&Object.keys(this.query).length&&(a=querystring.stringify(this.query));var o=this.search||a&&"?"+a||"";return s&&":"!==s.substr(-1)&&(s+=":"),this.slashes||(!s||slashedProtocol[s])&&r!==!1?(r="//"+(r||""),e&&"/"!==e.charAt(0)&&(e="/"+e)):r||(r=""),h&&"#"!==h.charAt(0)&&(h="#"+h),o&&"?"!==o.charAt(0)&&(o="?"+o),e=e.replace(/[?#]/g,function(t){return encodeURIComponent(t)}),o=o.replace("#","%23"),s+r+e+o+h},Url.prototype.resolve=function(t){return this.resolveObject(urlParse(t,!1,!0)).format()},Url.prototype.resolveObject=function(t){if(util.isString(t)){var s=new Url;s.parse(t,!1,!0),t=s}for(var e=new Url,h=Object.keys(this),r=0;r<h.length;r++){var a=h[r];e[a]=this[a]}if(e.hash=t.hash,""===t.href)return e.href=e.format(),e;if(t.slashes&&!t.protocol){for(var o=Object.keys(t),n=0;n<o.length;n++){var i=o[n];"protocol"!==i&&(e[i]=t[i])}return slashedProtocol[e.protocol]&&e.hostname&&!e.pathname&&(e.path=e.pathname="/"),e.href=e.format(),e}if(t.protocol&&t.protocol!==e.protocol){if(!slashedProtocol[t.protocol]){for(var l=Object.keys(t),u=0;u<l.length;u++){var p=l[u];e[p]=t[p]}return e.href=e.format(),e}if(e.protocol=t.protocol,t.host||hostlessProtocol[t.protocol])e.pathname=t.pathname;else{for(var c=(t.pathname||"").split("/");c.length&&!(t.host=c.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),""!==c[0]&&c.unshift(""),c.length<2&&c.unshift(""),e.pathname=c.join("/")}if(e.search=t.search,e.query=t.query,e.host=t.host||"",e.auth=t.auth,e.hostname=t.hostname||t.host,e.port=t.port,e.pathname||e.search){var f=e.pathname||"",m=e.search||"";e.path=f+m}return e.slashes=e.slashes||t.slashes,e.href=e.format(),e}var v=e.pathname&&"/"===e.pathname.charAt(0),g=t.host||t.pathname&&"/"===t.pathname.charAt(0),y=g||v||e.host&&t.pathname,P=y,d=e.pathname&&e.pathname.split("/")||[],c=t.pathname&&t.pathname.split("/")||[],q=e.protocol&&!slashedProtocol[e.protocol];if(q&&(e.hostname="",e.port=null,e.host&&(""===d[0]?d[0]=e.host:d.unshift(e.host)),e.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===c[0]?c[0]=t.host:c.unshift(t.host)),t.host=null),y=y&&(""===c[0]||""===d[0])),g)e.host=t.host||""===t.host?t.host:e.host,e.hostname=t.hostname||""===t.hostname?t.hostname:e.hostname,e.search=t.search,e.query=t.query,d=c;else if(c.length)d||(d=[]),d.pop(),d=d.concat(c),e.search=t.search,e.query=t.query;else if(!util.isNullOrUndefined(t.search)){if(q){e.hostname=e.host=d.shift();var b=!!(e.host&&e.host.indexOf("@")>0)&&e.host.split("@");b&&(e.auth=b.shift(),e.host=e.hostname=b.shift())}return e.search=t.search,e.query=t.query,util.isNull(e.pathname)&&util.isNull(e.search)||(e.path=(e.pathname?e.pathname:"")+(e.search?e.search:"")),e.href=e.format(),e}if(!d.length)return e.pathname=null,e.search?e.path="/"+e.search:e.path=null,e.href=e.format(),e;for(var O=d.slice(-1)[0],j=(e.host||t.host||d.length>1)&&("."===O||".."===O)||""===O,x=0,U=d.length;U>=0;U--)O=d[U],"."===O?d.splice(U,1):".."===O?(d.splice(U,1),x++):x&&(d.splice(U,1),x--);if(!y&&!P)for(;x--;x)d.unshift("..");!y||""===d[0]||d[0]&&"/"===d[0].charAt(0)||d.unshift(""),j&&"/"!==d.join("/").substr(-1)&&d.push("");var C=""===d[0]||d[0]&&"/"===d[0].charAt(0);if(q){e.hostname=e.host=C?"":d.length?d.shift():"";var b=!!(e.host&&e.host.indexOf("@")>0)&&e.host.split("@");b&&(e.auth=b.shift(),e.host=e.hostname=b.shift())}return y=y||e.host&&d.length,y&&!C&&d.unshift(""),d.length?e.pathname=d.join("/"):(e.pathname=null,e.path=null),util.isNull(e.pathname)&&util.isNull(e.search)||(e.path=(e.pathname?e.pathname:"")+(e.search?e.search:"")),e.auth=t.auth||e.auth,e.slashes=e.slashes||t.slashes,e.href=e.format(),e},Url.prototype.parseHost=function(){var t=this.host,s=portPattern.exec(t);s&&(s=s[0],":"!==s&&(this.port=s.substr(1)),t=t.substr(0,t.length-s.length)),t&&(this.hostname=t)};

},{"./util":16,"punycode":9,"querystring":12}],16:[function(require,module,exports){
"use strict";module.exports={isString:function(n){return"string"==typeof n},isObject:function(n){return"object"==typeof n&&null!==n},isNull:function(n){return null===n},isNullOrUndefined:function(n){return null==n}};

},{}],17:[function(require,module,exports){
'use strict';

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _momentWithLocalesMin = require('moment/min/moment-with-locales.min.js');

var _momentWithLocalesMin2 = _interopRequireDefault(_momentWithLocalesMin);

var _browserCore = require('browser-core');

var _browserCore2 = _interopRequireDefault(_browserCore);

var _BrowserButton = require('./classes/BrowserButton');

var _BrowserButton2 = _interopRequireDefault(_BrowserButton);

var _EventHandlers = require('./classes/EventHandlers');

var _EventHandlers2 = _interopRequireDefault(_EventHandlers);

var _ExtensionWeb = require('./classes/ExtensionWeb');

var _ExtensionWeb2 = _interopRequireDefault(_ExtensionWeb);

var _Ghostrank = require('./classes/Ghostrank');

var _Ghostrank2 = _interopRequireDefault(_Ghostrank);

var _Policy = require('./classes/Policy');

var _Policy2 = _interopRequireDefault(_Policy);

var _BugDb = require('./classes/BugDb');

var _BugDb2 = _interopRequireDefault(_BugDb);

var _Click2PlayDb = require('./classes/Click2PlayDb');

var _Click2PlayDb2 = _interopRequireDefault(_Click2PlayDb);

var _CMP = require('./classes/CMP');

var _CMP2 = _interopRequireDefault(_CMP);

var _ABTest = require('./classes/ABTest');

var _ABTest2 = _interopRequireDefault(_ABTest);

var _CompatibilityDb = require('./classes/CompatibilityDb');

var _CompatibilityDb2 = _interopRequireDefault(_CompatibilityDb);

var _Conf = require('./classes/Conf');

var _Conf2 = _interopRequireDefault(_Conf);

var _Dispatcher = require('./classes/Dispatcher');

var _Dispatcher2 = _interopRequireDefault(_Dispatcher);

var _FoundBugs = require('./classes/FoundBugs');

var _FoundBugs2 = _interopRequireDefault(_FoundBugs);

var _Globals = require('./classes/Globals');

var _Globals2 = _interopRequireDefault(_Globals);

var _SurrogateDb = require('./classes/SurrogateDb');

var _SurrogateDb2 = _interopRequireDefault(_SurrogateDb);

var _TabInfo = require('./classes/TabInfo');

var _TabInfo2 = _interopRequireDefault(_TabInfo);

var _accounts = require('./utils/accounts');

var accounts = _interopRequireWildcard(_accounts);

var _click2play = require('./utils/click2play');

var _common = require('./utils/common');

var common = _interopRequireWildcard(_common);

var _metrics = require('./utils/metrics');

var _utils = require('./utils/utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const button = new _BrowserButton2.default(),
      events = new _EventHandlers2.default(),
      extensionweb = new _ExtensionWeb2.default(),
      ghostrank = new _Ghostrank2.default(),
      policy = new _Policy2.default(),
      log = common.log,
      sendMessage = utils.sendMessage,
      onMessage = chrome.runtime.onMessage,
      t = chrome.i18n.getMessage,
      GHOSTERY_DOMAIN = _Globals2.default.GHOSTERY_DOMAIN,
      CDN_SUB_DOMAIN = _Globals2.default.CDN_SUB_DOMAIN,
      BROWSER_INFO = _Globals2.default.BROWSER_INFO,
      IS_EDGE = BROWSER_INFO.name === 'edge',
      VERSION_CHECK_URL = "https://" + CDN_SUB_DOMAIN + ".ghostery.com/update/version",
      SYNC_SET = new Set(_Globals2.default.SYNC_ARRAY),
      OFFERS_HANDLER_ID = 'ghostery';

let SETTINGS_PAGE_ID;

log('GHOSTERY_DOMAIN:', GHOSTERY_DOMAIN, 'DEBUG:', _Globals2.default.DEBUG);

window.DEBUG = _Globals2.default.DEBUG;

function autoUpdateBugDb() {
	log("AUTOUPDATE CALLED");
	if (_Conf2.default.enable_autoupdate) {
		const result = _Conf2.default.bugs_last_checked;
		let nowTime = Number(new Date().getTime());
		if (!result || nowTime > Number(result) + 900000) {
			log("AUTOUPDATE CALLED", new Date());
			checkLibraryVersion();
		}
	}
}

function checkLibraryVersion() {
	return new Promise(function (resolve, reject) {
		const failed = { success: false, updated: false };
		utils.getJson(VERSION_CHECK_URL).then(data => {
			log("Database version retrieval succeeded", data);

			_Click2PlayDb2.default.update(data.click2playVersion);
			_CompatibilityDb2.default.update(data.compatibilityVersion);
			_BugDb2.default.update(data.bugsVersion, result => {
				log('CHECK LIBRARY VERSION CALLED', result);
				if (result.success) {
					const nowTime = Number(new Date().getTime());
					_Conf2.default.bugs_last_checked = nowTime;
					if (result.updated) {
						log('BUGS LAST UPDATED UPDATED', new Date());
						_Conf2.default.bugs_last_updated = nowTime;
					}
				}
				resolve(result);
			});
		}).catch(err => {
			log('Error in checkLibraryVersion', err);
			reject(failed);
		});
	});
}

function reloadTab(data) {
	if (data && data.tab_id) {
		utils.getTab(data.tab_id, function success(tab) {
			if (tab && tab.url) {
				chrome.tabs.update(tab.id, { url: tab.url });
			}
		}, function error() {
			utils.getActiveTab(function (tab) {
				if (tab && tab.url) {
					chrome.tabs.update(tab.id, { url: tab.url });
				}
			});
		});
	} else {
		utils.getActiveTab(function (tab) {
			if (tab && tab.url) {
				chrome.tabs.update(tab.id, { url: tab.url });
			}
		});
	}
}

function getSiteData() {
	return new Promise(function (resolve, reject) {
		utils.getActiveTab(function (tab) {
			const tab_id = tab ? tab.id : 0,
			      tab_url = tab ? tab.url : '';

			if (!tab) {
				reject(new Error('Tab not found. Cannot gather page data'));
			}

			resolve({
				url: tab_url,
				extensionVersion: _Globals2.default.EXTENSION_VERSION,
				browserDisplayName: BROWSER_INFO.displayName,
				browserVersion: BROWSER_INFO.version,
				categories: _FoundBugs2.default.getCategories(tab_id),
				os: BROWSER_INFO.os,
				language: _Conf2.default.language,
				dbVersion: _BugDb2.default.db.version
			});
		});
	});
}

function updatePanelData(data) {
	return new Promise(function (resolve, reject) {
		let needsPush = false;
		for (let [key, value] of common.objectEntries(data)) {
			if (_Conf2.default.hasOwnProperty(key) && !_underscore2.default.isEqual(_Conf2.default[key], value)) {
				if (key === 'ghostrank') {
					_Conf2.default.ghostrank_dismissed = true;
				} else if (key === 'enable_metrics') {
					_Conf2.default.metrics_dismissed = true;
				} else if (key === 'enable_human_web') {
					_Conf2.default.human_web_dismissed = true;
				} else if (key === 'login_info') {
					_Conf2.default.account_dismissed = true;
				} else if (key === 'enable_offers') {
					_Conf2.default.enable_offers = value;
				}

				_Conf2.default[key] = value;
				if (SYNC_SET.has(key)) {
					needsPush = true;
				}
			}
		}

		if (data.needsReload) {
			utils.getActiveTab(tab => {
				if (tab && tab.id && _TabInfo2.default.getTabInfo(tab.id)) {
					_TabInfo2.default.setTabInfo(tab.id, 'needsReload', data.needsReload);
				}
			});
		}

		if (needsPush) {
			accounts.pushUserSettings({ conf: accounts.buildUserSettings() });
		}

		resolve(true);
	});
}

function getPanelData() {
	return new Promise(function (resolve, reject) {
		utils.getActiveTab(function (tab) {
			const data = getPanelDataHelper(tab);
			if (data) {
				resolve(data);
			} else {
				reject(new Error('getPanelDataHelper Error'));
			}
		});
	});
}

function getPanelDataHelper(tab) {
	const models = [],
	      tab_id = tab && tab.id,
	      tab_url = tab && tab.url,
	      login_info = _Conf2.default.login_info;

	models.push({
		id: 'panel',
		tab_id: tab_id,
		ghostrank: _Conf2.default.ghostrank,
		enable_metrics: _Conf2.default.enable_metrics,
		enable_human_web: _Conf2.default.enable_human_web && true,
		offer_human_web: IS_EDGE ? false : true,
		ghostrank_dismissed: _Conf2.default.ghostrank_dismissed || false,
		human_web_dismissed: _Conf2.default.human_web_dismissed,
		metrics_dismissed: _Conf2.default.metrics_dismissed,
		account_dismissed: _Conf2.default.account_dismissed,
		reload_banner_status: _Conf2.default.reload_banner_status,
		trackers_banner_status: _Conf2.default.trackers_banner_status,
		paused_blocking: _Conf2.default.paused_blocking || false,
		sitePolicy: tab && policy.getSitePolicy(tab_url) || false,
		needsReload: _TabInfo2.default.getTabInfo(tab_id, 'needsReload') || {},
		logged_in: login_info.logged_in || false,
		is_validated: login_info.is_validated || false,
		email: login_info.email || '',
		decoded_user_token: login_info.decoded_user_token || {}
	});
	models.push({
		id: 'header',
		tab_id: tab_id,
		language: _Conf2.default.language,
		logged_in: login_info.logged_in || false,
		is_validated: login_info.is_validated || false,
		email: login_info.email || ''
	});
	models.push({
		id: 'summary',
		paused_blocking: _Conf2.default.paused_blocking || false,
		site_blacklist: _Conf2.default.site_blacklist || [],
		site_whitelist: _Conf2.default.site_whitelist || [],
		alertCounts: tab && _FoundBugs2.default.getAppsCountByIssues(tab_id, tab_url) || {},
		trackerCounts: tab && _FoundBugs2.default.getAppsCountByBlocked(tab_id) || {},
		trackerCategories: tab && _FoundBugs2.default.getCategories(tab_id) || [],
		performanceData: _TabInfo2.default.getTabInfo(tab_id, 'pageTiming'),
		pageUrl: tab_url || '',
		pageHost: tab_url && utils.processUrl(tab_url).host || '',
		siteNotScanned: tab && !_FoundBugs2.default.getApps(tab_id) || false,
		sitePolicy: tab && policy.getSitePolicy(tab_url) || false
	});
	models.push({
		id: 'blocking',
		language: _Conf2.default.language,
		pageHost: tab && _TabInfo2.default.getTabInfo(tab_id, 'host') || '',
		toggle_individual_trackers: _Conf2.default.toggle_individual_trackers || false,
		selected_app_ids: _Conf2.default.selected_app_ids || {},
		site_specific_blocks: _Conf2.default.site_specific_blocks || {},
		site_specific_unblocks: _Conf2.default.site_specific_unblocks || {},
		paused_blocking: _Conf2.default.paused_blocking || false,
		show_tracker_urls: _Conf2.default.show_tracker_urls && true,
		trackerList: tab && _FoundBugs2.default.getApps(tab_id, false, tab_url) || [],
		sitePolicy: tab && policy.getSitePolicy(tab_url) || false
	});
	models.push({
		id: 'settings',
		language: _Conf2.default.language,
		enable_autoupdate: _Conf2.default.enable_autoupdate && true,
		show_tracker_urls: _Conf2.default.show_tracker_urls && true,
		enable_click2play: _Conf2.default.enable_click2play && true,
		enable_click2play_social: _Conf2.default.enable_click2play_social && true,
		toggle_individual_trackers: _Conf2.default.toggle_individual_trackers && true,
		ignore_first_party: _Conf2.default.ignore_first_party && true,
		block_by_default: _Conf2.default.block_by_default || false,
		bugs_last_updated: _Conf2.default.bugs_last_updated,
		settings_last_imported: _Conf2.default.settings_last_imported || 0,
		settings_last_exported: _Conf2.default.settings_last_exported || 0,

		show_alert: _Conf2.default.show_alert || false,
		alert_bubble_timeout: _Conf2.default.alert_bubble_timeout || 15,
		alert_bubble_pos: _Conf2.default.alert_bubble_pos || 'br',
		hide_alert_trusted: _Conf2.default.hide_alert_trusted || false,

		show_cmp: _Conf2.default.show_cmp || false,
		notify_upgrade_updates: _Conf2.default.notify_upgrade_updates && true,
		notify_hotfix_updates: _Conf2.default.notify_hotfix_updates || false,
		notify_library_updates: _Conf2.default.notify_library_updates || false,
		reload_banner_status: _Conf2.default.reload_banner_status,
		trackers_banner_status: _Conf2.default.trackers_banner_status,
		show_badge: _Conf2.default.show_badge && true,

		ghostrank: _Conf2.default.ghostrank || false,
		enable_metrics: _Conf2.default.enable_metrics || false,
		enable_human_web: _Conf2.default.enable_human_web && true,
		offer_human_web: IS_EDGE ? false : true,
		enable_offers: _Conf2.default.enable_offers && true,
		offer_offers: !IS_EDGE && _Conf2.default.offer_offers,
		logged_in: login_info.logged_in || false,
		email: login_info.email || '',
		first_name: login_info.decoded_user_token && login_info.decoded_user_token.ClaimFirstName || '',
		last_name: login_info.decoded_user_token && login_info.decoded_user_token.ClaimLastName || ''
	});
	models.push({
		id: 'help',
		browser: BROWSER_INFO.displayName,
		version: _Globals2.default.EXTENSION_VERSION
	});
	return { models: models, logged_in: login_info.logged_in || false };
}

function handleIntroPage(name, tab_id) {
	if (name === 'introLoaded') {} else if (name === 'tour_start') {
		if (_Globals2.default.JUST_INSTALLED) {
			(0, _metrics.ping)('tour_start');
		}
	}
	return false;
}

function handleSettingsPage(name, message, tab_id, callback) {
	if (name === "getPageSettings") {
		accounts.pullUserSettings().catch(function (err) {
			log('Cannot pull user settings', err);
		}).then(function () {
			const settings = extensionweb.getSettings();
			if (settings) {
				extensionweb.oldConf = JSON.stringify(settings.conf);
				sendMessage(tab_id, 'setPageSettings', settings);
			}
		});
		return false;
	} else if (name === 'update_settings') {
		SETTINGS_PAGE_ID = tab_id;

		setTimeout(() => {
			SETTINGS_PAGE_ID = undefined;
		}, 1000);
		extensionweb.setSettings(message);
		callback();
		return true;
	} else if (name === 'set_state_block_all') {
		const selected_app_ids = _Conf2.default.selected_app_ids;
		const appIds = message.selected_app_ids;
		for (let appId of appIds) {
			if (_BugDb2.default.db.apps.hasOwnProperty(appId)) {
				if (message.blocked) {
					selected_app_ids[appId] = 1;
				} else {
					delete selected_app_ids[appId];
				}
			}
		}
		_Conf2.default.selected_app_ids = selected_app_ids;
		accounts.pushUserSettings(extensionweb.getSettings());
		callback();
		return true;
	} else if (name === 'clear_ss_tracker_settings') {
		_Conf2.default.selected_app_ids = {};
		_Conf2.default.site_specific_unblocks = {};
		_Conf2.default.site_specific_blocks = {};
		accounts.pushUserSettings(extensionweb.getSettings());
		callback();
		return true;
	} else if (name === 'update_database') {
		checkLibraryVersion().then(function (result) {
			const updateSuccess = [],
			      updateRemote = [],
			      settings = extensionweb.getSettings();
			updateSuccess.push(result.success);
			updateRemote.push(result.updated);

			settings.success = !updateSuccess.includes(false);
			settings.isNewUpdate = updateRemote.includes(true);
			callback(settings);
		}).catch(function (err) {
			callback();
			log('handleSettingsPage update_database error', err);
		});
		return true;
	} else if (name === "set_state_category") {
		const selected_app_ids = _Conf2.default.selected_app_ids;

		for (let appId of message.app_ids) {
			if (_BugDb2.default.db.apps.hasOwnProperty(appId) && _BugDb2.default.db.apps[appId].cat === message.cat_id) {
				if (message.blocked) {
					selected_app_ids[appId] = 1;
				} else {
					delete selected_app_ids[appId];
				}
			}
		}
		_Conf2.default.selected_app_ids = selected_app_ids;
		accounts.pushUserSettings(extensionweb.getSettings());
		callback();
		return true;
	} else if (name === 'set_state_tracker') {
		const selected_app_ids = _Conf2.default.selected_app_ids;
		if (message.blocked) {
			selected_app_ids[message.app_id] = 1;
		} else {
			delete selected_app_ids[message.app_id];
		}

		_Conf2.default.selected_app_ids = selected_app_ids;
		accounts.pushUserSettings(extensionweb.getSettings());
		callback();
		return true;
	} else if (name === 'getTrackerDescription') {
		utils.getJson(message.url).then(function (result) {
			const description = result ? result.company_description ? result.company_description : result.company_in_their_own_words ? result.company_in_their_own_words : '' : '';
			callback(description);
		});
		return true;
	} else if (name === 'ping') {
		(0, _metrics.ping)(message);
	}

	return false;
}

function handleGhosteryPlatformPages(name, tab_url) {
	if (name === 'platformPageLoaded') {
		accounts.setLoginInfoFromAuthCookie(tab_url).catch(function (err) {
			log('handleGhosteryPlatformPages error', err);
		});
	}
	return false;
}

function handleGhosteryDotCom(name, message, tab_id) {
	if (name === 'appsPageLoaded') {
		if (tab_id) {
			sendMessage(tab_id, 'appsPageData', {
				'blocked': _Conf2.default.selected_app_ids[message.id] === 1
			});
		} else {
			utils.getActiveTab(function (tab) {
				if (tab) {
					sendMessage(tab.id, 'appsPageData', {
						'blocked': _Conf2.default.selected_app_ids[message.id] === 1
					});
				}
			});
		}
	} else if (name === 'panelSelectedAppsUpdate') {
		const selected_app_ids = _Conf2.default.selected_app_ids;
		if (message.app_selected) {
			selected_app_ids[message.app_id] = 1;
		} else {
			delete selected_app_ids[message.app_id];
		}

		_Conf2.default.selected_app_ids = selected_app_ids;
	}
	return false;
}

function reportCliqzOffer(message) {
	const offer_id = message.cmp_data.data.offer_info.offer_id;

	const type = message.reason === 'closeButton' ? 'close-offer' : 'offer-action-signal';
	const cliqzCore = _browserCore2.default.modules.core;
	const msgToOffersCore = {
		origin: OFFERS_HANDLER_ID,
		type: type,
		data: {
			offer_id: offer_id
		}
	};

	if (type === 'offer-action-signal') {
		switch (message.reason) {
			case 'link':
				msgToOffersCore.data.action_id = 'offer_ca_action';
				break;
			case 'offerShown':
				msgToOffersCore.data.action_id = 'offer_shown';
				break;
			default:
				break;
		}
	}
	cliqzCore.actions.publishEvent('offers-recv-ch', msgToOffersCore);
}

function handleNotifications(name, message, tab_id, callback) {
	if (name === 'dismissCMPMessage') {
		if (utils.isCliqzOffer(message.cmp_data)) {
			reportCliqzOffer(message);
		} else {
			if (_CMP2.default.CMP_DATA && _CMP2.default.CMP_DATA.length) {
				_CMP2.default.CMP_DATA.splice(0, 1);
			}
		}
	} else if (name === 'cmpMessageShown') {
		if (utils.isCliqzOffer(message.cmp_data)) {
			reportCliqzOffer(message);
		}
	} else if (name === 'importFile') {
		try {
			const backup = JSON.parse(message);

			if (backup.hash !== common.hashCode(JSON.stringify(backup.settings))) {
				throw "Invalid hash";
			}

			const data = (backup.settings || {}).conf || {};
			data.ghostrank = data.ghostrank === 2 ? false : data.ghostrank ? true : false;
			data.alert_bubble_timeout = data.alert_bubble_timeout > 30 ? 30 : data.alert_bubble_timeout;
			data.settings_last_imported = Number(new Date().getTime());
			updatePanelData(data).then(result => {
				utils.getActiveTab(tab => {
					const tabId = tab ? tab.id : tab_id;
					sendMessage(tabId, 'onFileImported', {
						type: 'message',
						text: t("settings_import_success") + " " + (0, _momentWithLocalesMin2.default)(data.settings_last_imported).format('LLL')
					});
				});
			});
		} catch (err) {
			utils.getActiveTab(tab => {
				const tabId = tab ? tab.id : tab_id;
				sendMessage(tabId, 'onFileImported', {
					type: 'error',
					text: t("settings_import_file_error")
				});
			});
		}
	}
	return false;
}

function handleClick2Play(name, message, tab_id, callback) {
	if (name === 'processC2P') {
		if (message.action === 'always') {
			const tab_host = _TabInfo2.default.getTabInfo(tab_id, 'host');
			message.app_ids.forEach(function (aid) {
				(0, _click2play.allowAllwaysC2P)(aid, tab_host);
			});
			callback();
			return true;
		} else if (message.action === 'once') {
			_Click2PlayDb2.default.allowOnce(message.app_ids, tab_id);
			callback();
			return true;
		}
	}
}

function handleBlockedRedirect(name, message, tab_id, callback) {
	if (name === 'getBlockedRedirectData') {
		callback(_Globals2.default.BLOCKED_REDIRECT_DATA);
		return true;
	} else if (name === 'allow_always_page_c2p_tracker') {
		const tab_host = _TabInfo2.default.getTabInfo(tab_id, 'host');
		(0, _click2play.allowAllwaysC2P)(message.app_id, tab_host);
		chrome.tabs.update(tab_id, { url: message.url });
	} else if (name === 'allow_once_page_c2p_tracker') {
		_Globals2.default.LET_REDIRECTS_THROUGH = true;
		chrome.tabs.update(tab_id, { url: message.url });
	}

	return false;
}

function handleSettingsRedirect(name, message, tab_id, callback) {
	if (name === 'getSettingsUrl') {
		sendMessage(tab_id, 'gotSettingsUrl', `https://extension.${GHOSTERY_DOMAIN}.com/${_Conf2.default.language}/settings#general`);
	}

	return false;
}

function handlePurplebox(name, message, tab_id, callback) {
	if (name === 'updateAlertConf') {
		_Conf2.default.alert_expanded = message.alert_expanded;
		_Conf2.default.alert_bubble_pos = message.alert_bubble_pos;
		_Conf2.default.alert_bubble_timeout = message.alert_bubble_timeout;

		accounts.pushUserSettings({ conf: accounts.buildUserSettings() });
	}
	return false;
}

function onMessageHandler(request, sender, callback) {
	const name = request.name,
	      message = request.message,
	      messageId = request.messageId,
	      origin = request.origin,
	      tab = sender.tab,
	      tab_id = tab && tab.id,
	      tab_url = tab && (tab.url ? tab.url : sender.url ? sender.url : "");

	if (IS_EDGE && messageId) {
		if (tab_id) {
			callback = function (result) {
				utils.sendMessage(tab_id, messageId, result);
			};
		} else {
			callback = function (result) {
				utils.sendMessageToPanel(messageId, result);
			};
		}
	}

	if (name === 'onHWSettingChanged') {
		if (message) {
			initializeHumanWeb();
		}
		return false;
	}

	if (origin === 'intro') {
		return handleIntroPage(name, tab_id);
	} else if (origin === 'settings') {
		return handleSettingsPage(name, message, tab_id, callback);
	} else if (origin === 'platform_pages') {
		return handleGhosteryPlatformPages(name, tab_url);
	} else if (origin === 'purplebox') {
		return handlePurplebox(name, message, tab_id, callback);
	} else if (origin === 'ghostery_dot_com') {
		return handleGhosteryDotCom(name, message, tab_id);
	} else if (origin === 'page_performance' && name === 'recordPageInfo') {
		if (tab && !tab.incognito) {
			ghostrank.recordPageInfo(message.domain, message.latency);
		}
		_TabInfo2.default.setTabInfo(tab_id, "pageTiming", message.performanceAPI);
		return false;
	} else if (origin === 'notifications') {
		return handleNotifications(name, message, tab_id);
	} else if (origin === 'click_to_play') {
		return handleClick2Play(name, message, tab_id, callback);
	} else if (origin === 'blocked_redirect') {
		return handleBlockedRedirect(name, message, tab_id, callback);
	} else if (origin === 'settings_redirect') {
		return handleSettingsRedirect(name, message, tab_id, callback);
	}

	if (name === 'getPanelData') {
		getPanelData().then(result => {
			callback(result);
		});
		return true;
	} else if (name === 'updatePanelData') {
		log("UPDATE PANEL DATA", message);
		updatePanelData(message).then(result => {
			callback(result);
		});
		return true;
	} else if (name === 'pullUserSettings') {
		accounts.pullUserSettings().then(settings => {
			callback(settings);
		}).catch(err => {
			callback();
		});
		return true;
	} else if (name === 'getTrackerDescription') {
		utils.getJson(message.url).then(result => {
			const description = result ? result.company_description ? result.company_description : result.company_in_their_own_words ? result.company_in_their_own_words : '' : '';
			callback(description);
		});
		return true;
	} else if (name === 'getLoginInfo') {
		accounts.getLoginInfo().then(result => {
			utils.sendMessageToPanel('onLoginInfoUpdated', result);

			callback(result);
		}).catch(err => {
			callback();
			log("GET LOGIN INFO ERROR:", err);
		});
		return true;
	} else if (name === 'setLoginInfo') {
		accounts.setLoginInfo(message, false).then(result => {
			callback(result);
		}).catch(err => {
			callback();
			log("SET LOGIN INFO ERROR");
		});
		return true;
	} else if (name === 'update_database') {
		checkLibraryVersion().then(result => {
			callback(result);
		});
		return true;
	} else if (name === 'getSiteData') {
		getSiteData().then(function (result) {
			callback(result);
		});
		return true;
	} else if (name === 'openNewTab') {
		utils.openNewTab(message);
		return false;
	} else if (name === 'reloadTab') {
		reloadTab(message);
		return false;
	} else if (name === 'getSettingsForExport') {
		utils.getActiveTab(tab => {
			if (tab && tab.id && tab.url.startsWith('http')) {
				const settings = accounts.buildUserSettings();
				try {
					const hash = common.hashCode(JSON.stringify({ conf: settings })),
					      backup = JSON.stringify({ hash: hash, settings: { conf: settings } });
					utils.injectNotifications(tab.id, true).then(() => {
						sendMessage(tab.id, 'exportFile', backup);
					});
					callback(true);
				} catch (e) {
					callback(false);
				}
			} else {
				callback(false);
			}
		});
		return true;
	} else if (name === 'sendVerificationEmail') {
		accounts.sendVerificationEmail().then(function (result) {
			callback(result);
		});
		return true;
	} else if (name === 'ping') {
		(0, _metrics.ping)(message);
		return false;
	} else if (name === 'showBrowseWindow') {
		utils.getActiveTab(tab => {
			if (tab && tab.id && tab.url.startsWith('http')) {
				utils.injectNotifications(tab.id, true).then(result => {
					if (result) {
						sendMessage(tab.id, 'showBrowseWindow', {
							translations: {
								browse_button_label: t('browse_button_label'),
								select_file_for_import: t('select_file_for_import'),
								file_was_not_selected: t('file_was_not_selected') }
						}, result => {
							if (chrome.runtime.lastError) {
								callback(t('refresh_and_try_again'));
							} else {
								callback();
							}
						});
					}
				});
			} else {
				callback(t('not_http_page'));
			}
		});
		return true;
	}
	return false;
}

function initializeDispatcher() {
	_Dispatcher2.default.on('conf.save.selected_app_ids', function (appIds) {
		const num_selected = _underscore2.default.size(appIds),
		      db = _BugDb2.default.db;
		db.noneSelected = num_selected === 0;

		db.allSelected = !!num_selected && _underscore2.default.every(db.apps, function (app, app_id) {
			return appIds.hasOwnProperty(app_id);
		});
	});
	_Dispatcher2.default.on('conf.save.site_whitelist', function () {
		button.update();
		utils.flushChromeMemoryCache();
	});
	_Dispatcher2.default.on('conf.save.paused_blocking', function () {
		button.update();
		utils.flushChromeMemoryCache();
	});
	_Dispatcher2.default.on('conf.save.login_info', function (loginInfo) {
		if (loginInfo.logged_in) {
			accounts.pullUserSettings().catch(err => {
				log("dispatcher.on('conf.save.login_info): pullUserSettings error:", err);
			});
		}
		utils.broadcastMessage('onLoginInfoUpdated', loginInfo);
	});

	_Dispatcher2.default.on('conf.changed.settings', _underscore2.default.debounce(key => {
		log('CONF CHANGED SETTINGS CALLED. KEY', key);
		const settings = extensionweb.getSettings();
		if (settings && settings.conf) {
			extensionweb.oldConf = JSON.stringify(settings.conf);
			log('BROADCASTING MESSAGE', settings, SETTINGS_PAGE_ID);
			utils.broadcastMessage('onPageSettingsUpdated', settings, SETTINGS_PAGE_ID);
		}
		SETTINGS_PAGE_ID = undefined;
	}, 200));
}

function initializeHumanWeb() {
	if (!window.navigator.cookieEnabled) {
		log('initializeHumanWeb failed: Cookies are not enabled');
		return;
	}

	if (_Conf2.default.human_web_loaded) {
		return Promise.resolve("Human Web already loaded");
	} else {
		_Conf2.default.human_web_loaded = true;
	}

	const HUMAN_WEB_SCRIPTS = ["modules/human-web/md5.min.js", "modules/human-web/cl-chrome-db.js", "modules/human-web/cl-utils.js", "modules/human-web/bloom-filter.js", "modules/human-web/human-web.js", "modules/human-web/background.js"];

	const loadScript = (scriptPaths, index, resolve) => {
		if (index < scriptPaths.length) {
			const script = document.createElement('script');
			script.onload = () => {
				loadScript(scriptPaths, index + 1, resolve);
			};
			script.src = scriptPaths[index];
			document.body.appendChild(script);
		} else {
			resolve("Human Web loaded successfully");
		}
	};

	return new Promise((resolve, reject) => {
		loadScript(HUMAN_WEB_SCRIPTS, 0, resolve);
	});
}

function initializeCliqzOffers() {
	if (!window.navigator.cookieEnabled || !utils.domStorageEnabled() || !utils.indexedDBEnabled()) {
		return Promise.reject('initializeCliqzOffers failed: Cookies / localStorage / PouchDB are not enabled');
	}

	if (_Conf2.default.cliqz_offers_loaded) {
		return Promise.resolve("Offers code already loaded");
	} else {
		_Conf2.default.cliqz_offers_loaded = true;
	}

	let shouldEnable = _ABTest2.default.shouldShow("offers") ? "true" : "false";
	_Conf2.default.offer_offers = shouldEnable === "true" ? true : false;
	let dynamicTesting = localStorage.getItem('dynamicTesting');
	dynamicTesting = dynamicTesting === "true" ? true : false;

	if (!dynamicTesting) {
		localStorage.setItem('offers2FeatureEnabled', shouldEnable);
		localStorage.setItem('offersLogsEnabled', window.DEBUG ? "true" : "false");
		localStorage.setItem('showConsoleLogs', window.DEBUG ? "true" : "false");
		localStorage.setItem('triggersBE', window.DEBUG ? 'http://offers-api-stage.clyqz.com' : 'https://offers-api.cliqz.com');
		localStorage.setItem('offersDevFlag', window.DEBUG ? "true" : "false");
		if (window.DEBUG) {
			localStorage.setItem('offersTelemetryFreq', "10");
		}
	}

	return _browserCore2.default.start().then(() => {
		if (_Conf2.default.offer_offers) {
			const messageCenter = _browserCore2.default.modules['message-center'];
			messageCenter.actions.registerMessageHandler(OFFERS_HANDLER_ID, msg => {
				if (_Conf2.default.enable_offers) {
					messageCenter.actions.hideMessage(OFFERS_HANDLER_ID, msg);
					msg.Dismiss = 1;
					_CMP2.default.CMP_DATA.push(msg);
				}
			});
		}
	}).catch(err => {
		log('Error in cliqz init()', err);
		return Promise.reject(err);
	});
}

function initializePopup() {
	chrome.browserAction.setPopup({
		popup: 'app/templates/panel.html'
	});
}

function initializeEventListeners() {
	chrome.webNavigation.onBeforeNavigate.addListener(events.onBeforeNavigate.bind(events));

	chrome.webNavigation.onCommitted.addListener(events.onNavigation.bind(events));

	chrome.webNavigation.onDOMContentLoaded.addListener(events.onDOMContentLoaded.bind(events));

	chrome.webNavigation.onCompleted.addListener(events.onNavigationCompleted.bind(events));

	chrome.webNavigation.onReferenceFragmentUpdated.addListener(events.onNavigation.bind(events));

	if (chrome.webNavigation.onHistoryStateUpdated) {
		chrome.webNavigation.onHistoryStateUpdated.addListener(events.onNavigation.bind(events));
	}

	chrome.webNavigation.onErrorOccurred.addListener(events.onNavigationErrorOccurred.bind(events));

	chrome.webRequest.onBeforeRequest.addListener(events.onBeforeRequest.bind(events), {
		urls: ['http://*/*', 'https://*/*']
	}, ['blocking']);

	chrome.webRequest.onHeadersReceived.addListener(events.onHeadersReceived.bind(events), {
		urls: ['http://*/*', 'https://*/*']
	}, ['responseHeaders']);

	chrome.webRequest.onBeforeRedirect.addListener(events.onBeforeRedirect.bind(events), {
		urls: ['http://*/*', 'https://*/*']
	});

	chrome.webRequest.onCompleted.addListener(events.onRequestCompleted.bind(events), {
		urls: ['http://*/*', 'https://*/*']
	});

	chrome.webRequest.onErrorOccurred.addListener(events.onRequestErrorOccurred.bind(events), {
		urls: ['http://*/*', 'https://*/*']
	});

	chrome.tabs.onActivated.addListener(events.onTabActivated.bind(events));

	chrome.tabs.onReplaced.addListener(events.onTabReplaced.bind(events));

	chrome.tabs.onRemoved.addListener(events.onTabRemoved.bind(events));

	window.addEventListener('beforeunload', function () {});

	onMessage.addListener(onMessageHandler);
}

function initializeVersioning() {
	log("INITIALIZE VERSIONING. CURRENT VERSION IS:", _Globals2.default.EXTENSION_VERSION);
	let PREVIOUS_EXTENSION_VERSION = _Conf2.default.previous_version;

	if (!PREVIOUS_EXTENSION_VERSION) {
		log("NEW INSTALL");
		_Conf2.default.previous_version = _Globals2.default.EXTENSION_VERSION;

		let version_history = [];
		version_history.push(_Globals2.default.EXTENSION_VERSION);
		_Conf2.default.version_history = version_history;

		_Globals2.default.JUST_INSTALLED = true;
	} else {
		log("PREVIOUS VERSION EXISTS", PREVIOUS_EXTENSION_VERSION);
		_Globals2.default.JUST_INSTALLED = false;
		_Globals2.default.JUST_UPGRADED = PREVIOUS_EXTENSION_VERSION !== _Globals2.default.EXTENSION_VERSION;

		if (_Globals2.default.JUST_UPGRADED) {
			log("THIS IS AN UPGRADE");
			_Conf2.default.previous_version = _Globals2.default.EXTENSION_VERSION;

			const prevVersion = PREVIOUS_EXTENSION_VERSION.split(".");
			const currentVersion = _Globals2.default.EXTENSION_VERSION.split(".");
			if (prevVersion[0] === currentVersion[0] && prevVersion[1] === currentVersion[1]) {
				log("THIS IS A HOT FIX UPGRADE");
				_Globals2.default.HOTFIX = true;
			}
			let version_history = _Conf2.default.version_history;
			version_history.push(_Globals2.default.EXTENSION_VERSION);
			_Conf2.default.version_history = version_history;
		} else {
			log("SAME VERSION OR NOT THE FIRST RUN");
		}
	}
}

function initializeGhosteryModules() {
	initializeVersioning();

	if (_Globals2.default.JUST_UPGRADED) {
		log("JUST UPGRADED");
		utils.transferLegacyKeys(_Conf2.default);

		const version_history = _Conf2.default.version_history,
		      size = version_history.length;
		if (!size || version_history[size - 1] !== _Globals2.default.EXTENSION_VERSION) {
			version_history.push(_Globals2.default.EXTENSION_VERSION);
		}
		_Conf2.default.version_history = version_history;

		(0, _metrics.ping)('upgrade');
	} else if (_Globals2.default.JUST_INSTALLED) {
		log("JUST INSTALLED");
		const date = new Date(),
		      year = date.getFullYear().toString(),
		      month = ("0" + (date.getMonth() + 1)).slice(-2).toString(),
		      day = ("0" + date.getDate()).slice(-2).toString(),
		      dateString = year + '-' + month + '-' + day,
		      randomNumber = Math.floor(Math.random() * 100) + 1;

		_Conf2.default.install_random_number = randomNumber;
		_Conf2.default.install_date = dateString;

		(0, _metrics.setUninstallUrl)();

		(0, _metrics.ping)('install_success');

		setTimeout(function () {
			if (_Conf2.default.ghostrank_dismissed === false) {
				(0, _metrics.ping)('install');
			}
		}, 300000);

		chrome.tabs.create({
			url: `https://extension.${GHOSTERY_DOMAIN}.com/${_Conf2.default.language}/settings`,
			active: true
		});
	} else {
		(0, _metrics.ping)('install');
	}

	if (!IS_EDGE) {
		_ABTest2.default.fetch().then(() => {
			initializeCliqzOffers().then(() => {
				if (!_Conf2.default.human_web_dismissed || _Conf2.default.enable_human_web) {
					initializeHumanWeb();
				}
			}).catch(err => {
				log("initializeCliqzOffers failed: ", err);
			});
		}).catch(err => {
			log("Unable to reach abtest server");

			initializeCliqzOffers().then(() => {
				if (!_Conf2.default.human_web_dismissed || _Conf2.default.enable_human_web) {
					initializeHumanWeb();
				}
			}).catch(err => {
				log("initializeCliqzOffers failed: ", err);
			});
		});
	}

	(0, _metrics.ping)('active');

	_CMP2.default.fetchCMPData();

	setInterval(function () {
		_CMP2.default.fetchCMPData();

		if (!IS_EDGE) {
			_ABTest2.default.fetch().then(() => {
				initializeCliqzOffers();
			}).catch(err => {
				log("Unable to reach abtest server");
			});
		}

		autoUpdateBugDb();
	}, 1800000);

	initializeDispatcher();

	utils.getActiveTab(function (tab) {
		let tabId = 0;
		if (tab) {
			tabId = tab.id;
		}
		button.update(tabId);
	});

	return Promise.all([_BugDb2.default.init(_Globals2.default.JUST_UPGRADED), _Click2PlayDb2.default.init(_Globals2.default.JUST_UPGRADED), _CompatibilityDb2.default.init(_Globals2.default.JUST_UPGRADED), _SurrogateDb2.default.init(_Globals2.default.JUST_UPGRADED)]);
}

function init() {
	return _Conf2.default.init().then(() => {
		initializePopup();
		initializeEventListeners();
		initializeGhosteryModules().then(result => {
			accounts.pullUserSettings().catch(err => {
				log('init() cannot pull user settings:', err);
			});
		});
	}).catch(err => {
		log('Error in init()', err);
		return Promise.reject(err);
	});
}

init();

},{"./classes/ABTest":18,"./classes/BrowserButton":19,"./classes/BugDb":20,"./classes/CMP":21,"./classes/Click2PlayDb":22,"./classes/CompatibilityDb":23,"./classes/Conf":24,"./classes/Dispatcher":25,"./classes/EventHandlers":26,"./classes/ExtensionWeb":27,"./classes/FoundBugs":28,"./classes/Ghostrank":29,"./classes/Globals":30,"./classes/Policy":32,"./classes/SurrogateDb":34,"./classes/TabInfo":35,"./utils/accounts":37,"./utils/click2play":38,"./utils/common":39,"./utils/metrics":41,"./utils/utils":42,"browser-core":82,"moment/min/moment-with-locales.min.js":7,"underscore":14}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _Conf = require('./Conf');

var _Conf2 = _interopRequireDefault(_Conf);

var _Globals = require('./Globals');

var _Globals2 = _interopRequireDefault(_Globals);

var _utils = require('../utils/utils');

var _common = require('../utils/common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BROWSER_INFO = _Globals2.default.BROWSER_INFO,
      CMP_SUB_DOMAIN = _Globals2.default.CMP_SUB_DOMAIN,
      EXTENSION_VERSION = _Globals2.default.EXTENSION_VERSION;

class ABTest {

	constructor() {
		this.tests = {};
	}

	get(id) {}

	shouldShow(id) {
		return this.tests.hasOwnProperty(id);
	}

	fetch() {
		(0, _common.log)('A/B Tests: fetching...');

		const URL = 'https://' + CMP_SUB_DOMAIN + '.ghostery.com/abtestcheck' + '?os=' + encodeURIComponent(BROWSER_INFO.os) + '&gr=' + (_Conf2.default.ghostrank_dismissed ? _Conf2.default.ghostrank ? '1' : '0' : '2') + '&install_date=' + encodeURIComponent(_Conf2.default.install_date) + '&ir=' + encodeURIComponent(_Conf2.default.install_random_number) + '&gv=' + encodeURIComponent(EXTENSION_VERSION) + '&si=' + (_Conf2.default.login_info.logged_in ? '1' : '0') + '&ua=' + encodeURIComponent(BROWSER_INFO.name) + '&v=' + encodeURIComponent(_Conf2.default.cmp_version) + '&l=' + encodeURIComponent(_Conf2.default.language);

		return (0, _utils.getJson)(URL).then(data => {
			this.tests = {};

			if (!data) {
				(0, _common.log)('A/B Tests: no tests found.');
			} else {
				(0, _common.log)('A/B Tests: fetched', JSON.stringify(data));
				const prevTests = _underscore2.default.clone(this.tests);
				if (data && Array.isArray(data)) {
					data.forEach(test => {
						const id = test.name;
						this.tests[id] = prevTests.hasOwnProperty(id) ? prevTests[id] : {};
					});
				}
			}

			_Conf2.default.abtests = this.tests;
			(0, _common.log)('A/B Tests: tests updated to', JSON.stringify(this.tests));
		}).catch(err => {
			(0, _common.log)('A/B Tests: error fetching.');
		});
	}
}

exports.default = new ABTest();
module.exports = exports['default'];

},{"../utils/common":39,"../utils/utils":42,"./Conf":24,"./Globals":30,"underscore":14}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Conf = require('./Conf');

var _Conf2 = _interopRequireDefault(_Conf);

var _FoundBugs = require('./FoundBugs');

var _FoundBugs2 = _interopRequireDefault(_FoundBugs);

var _Policy = require('./Policy');

var _Policy2 = _interopRequireDefault(_Policy);

var _utils = require('../utils/utils');

var _common = require('../utils/common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class BrowserButton {

	constructor() {
		this.backgrounds = {
			alert: [255, 157, 0, 230],
			default: [51, 0, 51, 230]
		};
		this.policy = new _Policy2.default();
	}

	update(tabId) {
		if (tabId) {
			(0, _utils.getTab)(tabId, this._getIconCount.bind(this), err => {
				(0, _common.log)("Button.update failed", err);
			});
		} else {
			chrome.tabs.query({
				active: true
			}, tabs => {
				if (chrome.runtime.lastError) {
					(0, _common.log)('chrome.tabs.query', chrome.runtime.lastError.message);
					return;
				}

				tabs.map(this._getIconCount.bind(this));
			});
		}
	}

	_setIcon(active, tabId, trackerCount, alert) {
		if (tabId <= 0) {
			return;
		}
		chrome.browserAction.setIcon({
			path: {
				19: 'app/images/icon19' + (active ? '' : '_off') + '.png',
				38: 'app/images/icon38' + (active ? '' : '_off') + '.png'
			},
			tabId: tabId
		}, () => {
			if (chrome.runtime.lastError) {
				(0, _common.log)('chrome.browserAction.setIcon', chrome.runtime.lastError);
			} else {
				(0, _utils.getTab)(tabId, () => {
					if (typeof chrome.browserAction.setTitle === 'function') {
						chrome.browserAction.setTitle({
							title: chrome.i18n.getMessage("browser_button_tooltip"),
							tabId: tabId
						});
					}

					if (_Conf2.default.show_badge) {
						chrome.browserAction.setBadgeText({
							text: trackerCount,
							tabId: tabId
						});

						chrome.browserAction.setBadgeBackgroundColor({
							color: alert ? this.backgrounds.alert : this.backgrounds.default,
							tabId: tabId
						});
					}
				});
			}
		});
	}

	_getIconCount(tab) {
		const tabId = tab.id,
		      tabUrl = tab.url;
		let trackerCount = '',
		    alert = false;

		if (_FoundBugs2.default.getBugs(tabId) === false) {
			trackerCount = '';
		} else {
			const apps = _FoundBugs2.default.getAppsCountByIssues(tabId, tabUrl);
			trackerCount = apps.all.toString();
			alert = apps.total > 0;
		}

		if (trackerCount === '') {
			this._setIcon(false, tabId, trackerCount, alert);
		} else {
			this._setIcon(!_Conf2.default.paused_blocking && !this.policy.whitelisted(tab.url), tabId, trackerCount, alert);
		}
	}
}

exports.default = BrowserButton;
module.exports = exports['default'];

},{"../utils/common":39,"../utils/utils":42,"./Conf":24,"./FoundBugs":28,"./Policy":32}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _Conf = require('./Conf');

var _Conf2 = _interopRequireDefault(_Conf);

var _Updatable = require('./Updatable');

var _Updatable2 = _interopRequireDefault(_Updatable);

var _utils = require('../utils/utils');

var _common = require('../utils/common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class BugDb extends _Updatable2.default {
	updateNewAppIds(new_apps, old_apps) {
		(0, _common.log)('updating newAppIds...');

		const new_app_ids = _underscore2.default.difference(_underscore2.default.keys(new_apps), _underscore2.default.keys(old_apps)).map(Number);

		_Conf2.default.new_app_ids = new_app_ids;

		return new_app_ids;
	}

	applyBlockByDefault(new_app_ids) {
		if (_Conf2.default.block_by_default) {
			(0, _common.log)('applying block-by-default...');
			const selected_app_ids = _Conf2.default.selected_app_ids;
			_underscore2.default.each(new_app_ids, function (app_id) {
				selected_app_ids[app_id] = 1;
			});
			_Conf2.default.selected_app_ids = selected_app_ids;
		}
	}

	processList(bugs, skip_cache_flush) {
		const patterns = bugs.patterns,
		      regexes = patterns.regex,
		      db = {
			apps: bugs.apps,
			bugs: bugs.bugs,
			firstPartyExceptions: bugs.firstPartyExceptions,
			patterns: {
				host: patterns.host,
				host_path: patterns.host_path,
				path: patterns.path,

				regex: {}
			},
			version: bugs.version,
			JUST_UPDATED_WITH_NEW_TRACKERS: false
		};

		(0, _common.log)('initializing bugdb regexes...');

		for (let id in regexes) {
			if (regexes.hasOwnProperty(id)) {
				db.patterns.regex[id] = new RegExp(regexes[id], 'i');
			}
		}

		(0, _common.log)('setting bugdb noneSelected/allSelected...');

		const num_selected = _underscore2.default.size(_Conf2.default.selected_app_ids);
		db.noneSelected = num_selected === 0;

		(0, _utils.defineLazyProperty)(db, 'allSelected', function () {
			const num_selected = _underscore2.default.size(_Conf2.default.selected_app_ids);
			return !!num_selected && _underscore2.default.every(db.apps, function (app, app_id) {
				return _Conf2.default.selected_app_ids.hasOwnProperty(app_id);
			});
		});

		(0, _common.log)('processed bugdb...');

		const old_bugs = _Conf2.default.bugs;
		let new_app_ids;

		if (old_bugs) {
			if (old_bugs.hasOwnProperty('version') && bugs.version > old_bugs.version) {
				new_app_ids = this.updateNewAppIds(bugs.apps, old_bugs.apps);

				if (new_app_ids.length) {
					this.applyBlockByDefault(new_app_ids);
					db.JUST_UPDATED_WITH_NEW_TRACKERS = true;
				}
			} else if (old_bugs.hasOwnProperty('bugsVersion') && bugs.version !== old_bugs.bugsVersion) {
				const old_apps = _underscore2.default.reduce(old_bugs.bugs, function (memo, bug) {
					memo[bug.aid] = true;
					return memo;
				}, {});

				new_app_ids = this.updateNewAppIds(bugs.apps, old_apps);

				if (new_app_ids.length) {
					this.applyBlockByDefault(new_app_ids);

					if (bugs.version > old_bugs.bugsVersion) {
						db.JUST_UPDATED_WITH_NEW_TRACKERS = true;
					}
				}
			}
		}

		this.db = db;

		if (!old_bugs || !old_bugs.hasOwnProperty('version') || bugs.version > old_bugs.version) {
			_Conf2.default.bugs = bugs;
		}

		if (!skip_cache_flush) {
			(0, _utils.flushChromeMemoryCache)();
		}

		return true;
	}
}

exports.default = new BugDb('bugs');
module.exports = exports['default'];

},{"../utils/common":39,"../utils/utils":42,"./Conf":24,"./Updatable":36,"underscore":14}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Conf = require('./Conf');

var _Conf2 = _interopRequireDefault(_Conf);

var _Globals = require('./Globals');

var _Globals2 = _interopRequireDefault(_Globals);

var _utils = require('../utils/utils');

var _common = require('../utils/common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BROWSER_INFO = _Globals2.default.BROWSER_INFO,
      IS_EDGE = _Globals2.default.BROWSER_INFO.name === 'edge',
      CMP_SUB_DOMAIN = _Globals2.default.CMP_SUB_DOMAIN,
      EXTENSION_VERSION = _Globals2.default.EXTENSION_VERSION;

class CMP {

	constructor() {
		this.CMP_DATA = [];
	}

	fetchCMPData() {
		if (!_Conf2.default.show_cmp) {
			return Promise.resolve(false);
		}

		const URL = 'https://' + CMP_SUB_DOMAIN + '.ghostery.com/check' + '?os=' + encodeURIComponent(BROWSER_INFO.os) + '&gr=' + (_Conf2.default.ghostrank_dismissed ? _Conf2.default.ghostrank ? '1' : '0' : '2') + '&offers=' + encodeURIComponent(_Conf2.default.enable_offers ? '1' : '0') + '&hw=' + (IS_EDGE ? '2' : _Conf2.default.enable_human_web ? '1' : '0') + '&install_date=' + encodeURIComponent(_Conf2.default.install_date) + '&ir=' + encodeURIComponent(_Conf2.default.install_random_number) + '&gv=' + encodeURIComponent(EXTENSION_VERSION) + '&si=' + (_Conf2.default.login_info.logged_in ? '1' : '0') + '&ua=' + encodeURIComponent(BROWSER_INFO.name) + '&lc=' + encodeURIComponent(_Conf2.default.last_cmp_date) + '&v=' + encodeURIComponent(_Conf2.default.cmp_version) + '&l=' + encodeURIComponent(_Conf2.default.language);

		return (0, _utils.getJson)(URL).then(data => {
			if (data && (!_Conf2.default.cmp_version || data.Version > _Conf2.default.cmp_version)) {
				data.Campaigns.forEach(campaign => {
					if (campaign.Dismiss === 0) {
						campaign.Dismiss = 10;
					}

					if (!_Conf2.default.last_cmp_date || _Conf2.default.last_cmp_date < campaign.Timestamp) {
						_Conf2.default.last_cmp_date = campaign.Timestamp;
					}
				});

				_Conf2.default.cmp_version = data.Version;
				_Conf2.default.cmp_data = this.CMP_DATA = data.Campaigns;
				return this.CMP_DATA;
			} else {
				(0, _common.log)('No CMP data to fetch at this time');
				_Conf2.default.cmp_data = [];
				return false;
			}
		}).catch(err => {
			(0, _common.log)('Error in fetchCMPData', err);
			return false;
		});
	}
}

exports.default = new CMP();
module.exports = exports['default'];

},{"../utils/common":39,"../utils/utils":42,"./Conf":24,"./Globals":30}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Conf = require('./Conf');

var _Conf2 = _interopRequireDefault(_Conf);

var _Updatable = require('./Updatable');

var _Updatable2 = _interopRequireDefault(_Updatable);

var _common = require('../utils/common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Click2PlayDb extends _Updatable2.default {
	constructor(type) {
		super(type);
		this.allowOnceList = {};
	}

	buildDb(entries, version) {
		const apps = {};
		let allow;

		entries.forEach(function (entry) {
			if (!apps.hasOwnProperty(entry.aid)) {
				apps[entry.aid] = [];
			}

			allow = [entry.aid];
			if (entry.alsoAllow) {
				allow = allow.concat(entry.alsoAllow);
			}

			apps[entry.aid].push({
				aid: entry.aid,
				allow: allow,
				frameColor: entry.frameBackground ? entry.frameBackground : '',
				text: entry.text ? entry.text : '',
				button: entry.button ? entry.button : '',
				attach: entry.attach ? entry.attach : false,
				ele: entry.selector ? entry.selector : '',
				type: entry.type ? entry.type : ''
			});
		});

		return {
			apps: apps,
			version: version
		};
	}

	processList(data) {
		let db;

		(0, _common.log)('processing c2p...');

		try {
			db = this.buildDb(data.click2play, data.click2playVersion);
		} catch (e) {
			(0, _common.log)('Click2PlayDb processList() error', e);
			return false;
		}

		if (!db) {
			return false;
		}

		(0, _common.log)('processed c2p...');

		this.db = db;
		_Conf2.default.click2play = data;

		return true;
	}

	reset(tab_id) {
		delete this.allowOnceList[tab_id];
	}

	allowedOnce(tab_id, aid) {
		return this.allowOnceList.hasOwnProperty(tab_id) && this.allowOnceList[tab_id].hasOwnProperty(aid);
	}

	allowOnce(app_ids, tab_id) {
		this.allowOnceList[tab_id] = {};

		app_ids.forEach(app_id => {
			this.allowOnceList[tab_id][app_id] = 1;
		});
	}
}

exports.default = new Click2PlayDb('click2play');
module.exports = exports['default'];

},{"../utils/common":39,"./Conf":24,"./Updatable":36}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Conf = require('./Conf');

var _Conf2 = _interopRequireDefault(_Conf);

var _Updatable = require('./Updatable');

var _Updatable2 = _interopRequireDefault(_Updatable);

var _matcher = require('../utils/matcher');

var _common = require('../utils/common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CompatibilityDb extends _Updatable2.default {
	buildDb(bugs, version) {
		const map = {};

		bugs.forEach(function (s) {
			map[s.aid] = s.urls;
		});

		return {
			list: map,
			version: version
		};
	}

	processList(comp) {
		let db;

		(0, _common.log)('processing comp...');

		try {
			db = this.buildDb(comp.compatibility, comp.compatibilityVersion);
		} catch (e) {
			(0, _common.log)('CompatibilityDb processList() error', e);
			return false;
		}

		if (!db) {
			return false;
		}

		(0, _common.log)('processed comp...');

		this.db = db;
		_Conf2.default.compatibility = comp;

		return true;
	}

	hasIssue(aid, tab_url) {
		return this.db.list && this.db.list.hasOwnProperty(aid) && (0, _matcher.fuzzyUrlMatcher)(tab_url, this.db.list[aid]);
	}
}

exports.default = new CompatibilityDb('compatibility');
module.exports = exports['default'];

},{"../utils/common":39,"../utils/matcher":40,"./Conf":24,"./Updatable":36}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _Dispatcher = require('./Dispatcher');

var _Dispatcher2 = _interopRequireDefault(_Dispatcher);

var _Globals = require('./Globals');

var _Globals2 = _interopRequireDefault(_Globals);

var _common = require('../utils/common');

var _metrics = require('../utils/metrics');

var _utils = require('../utils/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const isEdge = _Globals2.default.BROWSER_INFO.name === 'edge';
let INITIALIZING = false;

class Conf {

	constructor() {
		this.paused_blocking = false;
		this.language = this._getDefaultLanguage();
		this.SYNC_SET = new Set(_Globals2.default.SYNC_ARRAY);
		this.abtests = {};
		this.human_web_loaded = false;
	}

	init() {
		return (0, _common.prefsGet)('previous_version', 'previousVersion', 'alert_bubble_pos', 'alert_bubble_timeout', 'ignore_first_party', 'enable_autoupdate', 'ghostrank', 'ghostrank_dismissed', 'account_dismissed', 'metrics_dismissed', 'human_web_dismissed', 'tour_alert_dismissed', 'show_alert', 'hide_alert_trusted', 'show_badge', 'alert_expanded', 'block_by_default', 'notify_library_updates', 'notify_upgrade_updates', 'notify_hotfix_updates', 'enable_metrics', 'enable_human_web', 'enable_offers', 'enable_click2play', 'enable_click2play_social', 'settings_last_imported', 'settings_last_exported', 'show_cmp', 'show_tracker_urls', 'toggle_individual_trackers', 'bugs_last_updated', 'bugs_last_checked', 'import_callout_dismissed', 'install_random_number', 'install_date', 'last_cmp_date', 'cmp_version', 'version_history', 'metrics', 'cmp_data', 'bugs', 'click2play', 'compatibility', 'surrogates', 'new_app_ids', 'selected_app_ids', 'site_whitelist', 'site_blacklist', 'site_specific_unblocks', 'site_specific_blocks', 'login_info', 'reload_banner_status', 'trackers_banner_status').then(data => {
			const nowTime = Number(new Date().getTime());

			INITIALIZING = true;

			const _initProperty = (name, value) => {
				if (null === data[name] || typeof data[name] === 'undefined') {
					data[name] = value;

					(0, _common.pref)(name, value);
				}

				this[name] = data[name];
			};

			if (null === data.previous_version || typeof data.previous_version === 'undefined') {
				if (data.previousVersion) {
					data.previous_version = data.previousVersion;
				} else {
					if (window.navigator.cookieEnabled && (0, _utils.domStorageEnabled)()) {
						data.previous_version = localStorage && localStorage.getItem('previousVersion');
						localStorage.removeItem('previousVersion');
					}
				}
			}
			chrome.storage.local.remove('previousVersion');
			delete data.previousVersion;
			this.previous_version = data.previous_version || '';

			_initProperty('alert_bubble_pos', 'br');
			_initProperty('alert_bubble_timeout', 15);
			_initProperty('ignore_first_party', true);
			_initProperty('enable_autoupdate', true);

			if (null === data.ghostrank || typeof data.ghostrank === 'undefined') {
				data.ghostrank = false;
				data.ghostrank_dismissed = false;
			} else {
				if (data.ghostrank === 2) {
					data.ghostrank = false;
					data.ghostrank_dismissed = false;
				} else {
					data.ghostrank = data.ghostrank ? true : false;
					data.ghostrank_dismissed = true;
				}
			}
			this.ghostrank = data.ghostrank;
			this.ghostrank_dismissed = data.ghostrank_dismissed;

			_initProperty('account_dismissed', false);
			_initProperty('metrics_dismissed', false);
			_initProperty('human_web_dismissed', false);
			_initProperty('tour_alert_dismissed', false);
			_initProperty('show_alert', true);
			_initProperty('hide_alert_trusted', false);
			_initProperty('show_badge', true);
			_initProperty('alert_expanded', false);
			_initProperty('block_by_default', false);
			_initProperty('notify_library_updates', false);
			_initProperty('notify_upgrade_updates', true);
			_initProperty('notify_hotfix_updates', false);
			_initProperty('enable_metrics', false);
			_initProperty('enable_human_web', isEdge ? false : true);
			_initProperty('enable_offers', isEdge ? false : true);
			_initProperty('enable_click2play', true);
			_initProperty('enable_click2play_social', true);
			_initProperty('settings_last_imported', 0);
			_initProperty('settings_last_exported', 0);
			_initProperty('show_cmp', true);
			_initProperty('show_tracker_urls', true);
			_initProperty('toggle_individual_trackers', true);
			_initProperty('bugs_last_updated', nowTime);
			_initProperty('bugs_last_checked', 0);
			_initProperty('import_callout_dismissed', true);
			_initProperty('install_random_number', 0);
			_initProperty('install_date', 0);
			_initProperty('last_cmp_date', 0);
			_initProperty('cmp_version', 0);

			_initProperty('version_history', []);
			_initProperty('metrics', {});
			_initProperty('cmp_data', []);
			_initProperty('bugs', {});
			_initProperty('click2play', {});
			_initProperty('compatibility', {});
			_initProperty('surrogates', {});
			_initProperty('new_app_ids', []);
			_initProperty('selected_app_ids', {});
			_initProperty('site_whitelist', []);
			_initProperty('site_blacklist', []);
			_initProperty('site_specific_unblocks', {});
			_initProperty('site_specific_blocks', {});
			_initProperty('login_info', {
				'logged_in': false,
				'email': '',
				'user_token': '',
				'decoded_user_token': {},
				'is_validated': false
			});
			_initProperty('reload_banner_status', {
				'dismissals': [],
				'show_time': nowTime,
				'show': true
			});
			_initProperty('trackers_banner_status', {
				'dismissals': [],
				'show_time': nowTime,
				'show': true
			});
			INITIALIZING = false;
		});
	}

	_getDefaultLanguage() {
		const SUPPORTED_LANGUAGES = {
			'cs': "čeština",
			'da': "dansk",
			'de': "Deutsch",
			'el': "ελληνικά",
			'en': "English",
			'en_GB': "British English",
			'es': "español",
			'fi': "suomi",
			'fr': "Français",
			'hu': "magyar",
			'it': "Italiano",
			'ja': "日本語",
			'ko': "한국어",
			'nb': "Norsk",
			'nl': "Nederlands",
			'pl': "Polski",
			'pt_BR': "português",
			'ru': "Русский",
			'sv': "Svenska",
			'tr': "Türkçe",
			'zh_CN': "简体中文",
			'zh_TW': "繁體中文"
		};

		let lang = window.navigator.language.replace('-', '_');

		if (SUPPORTED_LANGUAGES.hasOwnProperty(lang)) {
			return lang;
		}

		lang = lang.slice(0, 2);
		if (SUPPORTED_LANGUAGES.hasOwnProperty(lang)) {
			return lang;
		}

		return 'en';
	}
}

const handler = {
	set: function (target, key, value) {
		if (INITIALIZING) {
			(0, _common.log)('Setting initial value for', key);

			target[key] = value;
		} else {
			(0, _common.log)('Setting update value for', key);
			const oldValue = target[key];
			target[key] = value;
			(0, _common.pref)(key, value);

			if (key !== 'login_info' || oldValue === undefined || oldValue.logged_in !== value.logged_in) {
				_Dispatcher2.default.trigger('conf.save.' + key, value);

				if (target.SYNC_SET.has(key) || key === 'bugs_last_checked') {
					_Dispatcher2.default.trigger('conf.changed.settings', key);
				}
			}

			_underscore2.default.debounce(_metrics.setUninstallUrl, 200)(key);
		}

		return true;
	}
};

exports.default = new Proxy(new Conf(), handler);
module.exports = exports['default'];

},{"../utils/common":39,"../utils/metrics":41,"../utils/utils":42,"./Dispatcher":25,"./Globals":30,"underscore":14}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = require('../utils/common');

class Dispatcher {
	constructor() {
		this.handlers = [];
	}

	on(event, handler, context) {
		(0, _common.log)("dispatcher.on called from", event);
		if (typeof context === 'undefined') {
			context = handler;
		}
		this.handlers.push({
			event: event,
			handler: handler.bind(context)
		});
	}

	trigger(event, args) {
		(0, _common.log)("dispatcher.trigger called from", event);
		this.handlers.forEach(topic => {
			if (topic.event === event) {
				topic.handler(args);
			}
		});
	}
}

exports.default = new Dispatcher();
module.exports = exports['default'];

},{"../utils/common":39}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _BugDb = require('./BugDb');

var _BugDb2 = _interopRequireDefault(_BugDb);

var _BrowserButton = require('./BrowserButton');

var _BrowserButton2 = _interopRequireDefault(_BrowserButton);

var _Click2PlayDb = require('./Click2PlayDb');

var _Click2PlayDb2 = _interopRequireDefault(_Click2PlayDb);

var _CMP = require('./CMP');

var _CMP2 = _interopRequireDefault(_CMP);

var _Conf = require('./Conf');

var _Conf2 = _interopRequireDefault(_Conf);

var _FoundBugs = require('./FoundBugs');

var _FoundBugs2 = _interopRequireDefault(_FoundBugs);

var _Globals = require('./Globals');

var _Globals2 = _interopRequireDefault(_Globals);

var _Ghostrank = require('./Ghostrank');

var _Ghostrank2 = _interopRequireDefault(_Ghostrank);

var _Latency = require('./Latency');

var _Latency2 = _interopRequireDefault(_Latency);

var _Policy = require('./Policy');

var _Policy2 = _interopRequireDefault(_Policy);

var _PurpleBox = require('./PurpleBox');

var _PurpleBox2 = _interopRequireDefault(_PurpleBox);

var _SurrogateDb = require('./SurrogateDb');

var _SurrogateDb2 = _interopRequireDefault(_SurrogateDb);

var _TabInfo = require('./TabInfo');

var _TabInfo2 = _interopRequireDefault(_TabInfo);

var _click2play = require('../utils/click2play');

var _common = require('../utils/common');

var _matcher = require('../utils/matcher');

var _utils = require('../utils/utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class EventHandlers {

	constructor() {
		this.button = new _BrowserButton2.default();
		this.ghostrank = new _Ghostrank2.default();
		this.policy = new _Policy2.default();
		this.purplebox = new _PurpleBox2.default();
	}

	onBeforeNavigate(details) {
		if (details.frameId === 0) {
			const tab_id = details.tabId;

			(0, _common.log)("❤ ❤ ❤ Tab " + tab_id + " navigating to " + details.url + " ❤ ❤ ❤");

			this._clearTabData(tab_id);
			this._resetNotifications();

			_TabInfo2.default.create(tab_id, details.url, Number(new Date().getTime()));

			utils.getTab(tab_id, tab => {
				if (tab) {
					_TabInfo2.default.setTabInfo(tab_id, 'incognito', tab.incognito);
				}
			}, () => {
				utils.getActiveTab(function (tab) {
					if (tab) {
						_TabInfo2.default.setTabInfo(tab_id, 'incognito', tab.incognito);
					}
					_TabInfo2.default.setTabInfo(tab_id, 'prefetched', true);
				});
			});

			this.ghostrank.onNavigate(details.url);

			let error;
			setTimeout(() => {
				utils.getTab(tab_id, null, error = () => {
					(0, _common.log)('Clearing orphan tab data for tab', tab_id);
					this._clearTabData(tab_id);
					this._resetNotifications();
				});
			}, 120000);
		}
	}

	onNavigation(details) {
		const tab_id = details.tabId;

		if (!utils.isValidTopLevelNavigation(details)) {
			if (details.url.startsWith('https://chrome.google.com/webstore/')) {
				this._clearTabData(details.tabId);
				this._resetNotifications();
			}
			return;
		}

		utils.getTab(tab_id, tab => {
			this._createBox(tab_id);
		}, () => {
			_TabInfo2.default.setTabInfo(tab_id, 'prefetched', true);
		});
	}

	onDOMContentLoaded(details) {
		const tab_id = details.tabId;

		if (!utils.isValidTopLevelNavigation(details)) {
			return;
		}

		utils.getActiveTab(tab => {
			if (!tab || tab.id !== tab_id || tab.incognito) {
				return;
			}
			const alert_messages = ['dismiss', 'notification_reminder1', 'notification_reminder2', 'notification_reminder_link', 'notification_update', 'notification_update_link', 'notification_upgrade', 'notification_upgrade_link'];

			if (_CMP2.default.CMP_DATA.length !== 0 && _Conf2.default.show_cmp) {
				let CMPS = _CMP2.default.CMP_DATA,
				    numOffers = CMPS.length,
				    cliqzOffer,
				    nonCliqzOffer;
				for (let i = 0; i < numOffers; i++) {
					let CMP = CMPS[i];
					if (utils.isCliqzOffer(CMP)) {
						const urls = CMP.data.offer_info.offer_urls;
						if (urls instanceof Array) {
							let numUrls = urls.length;
							for (let j = 0; j < numUrls; j++) {
								if (urls[j] === details.url) {
									cliqzOffer = CMP;
									cliqzOffer.index = i;
									break;
								}
							}
							if (cliqzOffer) {
								break;
							}
						} else {
							if (!cliqzOffer) {
								cliqzOffer = CMP;
								cliqzOffer.index = i;
							}
						}
					} else {
						if (!nonCliqzOffer) {
							nonCliqzOffer = CMP;
							nonCliqzOffer.index = i;
						}
					}
				}

				let finalOffer = cliqzOffer ? cliqzOffer : nonCliqzOffer ? nonCliqzOffer : undefined;

				if (!finalOffer) {
					return;
				}

				let index = finalOffer.index;
				finalOffer = _CMP2.default.CMP_DATA[index];

				utils.injectNotifications(tab.id).then(result => {
					if (result) {
						utils.sendMessage(tab_id, 'showCMPMessage', {
							data: finalOffer
						}, function () {
							finalOffer.Dismiss--;
							if (finalOffer.Dismiss <= 0) {
								_CMP2.default.CMP_DATA.splice(index, 1);
							}
						});
					}
				});
			} else if (_Globals2.default.HOTFIX && !_Globals2.default.hotfix_alert_shown && _Conf2.default.notify_hotfix_updates || _Globals2.default.JUST_UPGRADED && !_Globals2.default.upgrade_alert_shown && _Conf2.default.notify_upgrade_updates) {
				utils.injectNotifications(tab.id).then(result => {
					if (result) {
						utils.sendMessage(tab_id, 'showUpgradeAlert', {
							translations: _underscore2.default.object(_underscore2.default.map(alert_messages, function (key) {
								return [key, chrome.i18n.getMessage(key)];
							})),
							language: _Conf2.default.language
						});
					}
				});

				_Globals2.default.upgrade_alert_shown = true;
				if (_Globals2.default.HOTFIX) {
					_Globals2.default.hotfix_alert_shown = true;
				}
			} else if (_BugDb2.default.db.JUST_UPDATED_WITH_NEW_TRACKERS) {
				if (_Conf2.default.notify_library_updates) {
					utils.injectNotifications(tab.id).then(result => {
						if (result) {
							utils.sendMessage(tab_id, 'showUpdateAlert', {
								translations: _underscore2.default.object(_underscore2.default.map(alert_messages, function (key) {
									return [key, chrome.i18n.getMessage(key)];
								})),
								language: _Conf2.default.language
							}, function () {
								_BugDb2.default.db.JUST_UPDATED_WITH_NEW_TRACKERS = false;
							});
						}
					});
				} else {
					_BugDb2.default.db.JUST_UPDATED_WITH_NEW_TRACKERS = false;
				}
			}
		});
	}

	onNavigationCompleted(details) {
		if (!utils.isValidTopLevelNavigation(details)) {
			return;
		}

		(0, _common.log)("Ghostrank: " + _Conf2.default.ghostrank + ", foundBugs: " + _FoundBugs2.default.getAppsCount(details.tabId) + ", tab_id: " + details.tabId);

		if (this.ghostrank.isValidUrl(utils.processUrl(details.url))) {
			utils.injectScript(details.tabId, 'dist/page_performance.js', '', 'document_idle').catch(err => {
				(0, _common.log)('onNavigationCompleted injectScript error', err);
			});
		}

		setTimeout(() => {
			this._eventReset(details.tabId);
		}, 2000);
	}

	onNavigationErrorOccurred(details) {
		const tab_id = details.tabId;

		if (!utils.isValidTopLevelNavigation(details)) {
			if (details.url.startsWith('https://chrome.google.com/webstore/')) {
				this._clearTabData(tab_id);
				this._resetNotifications();
			}

			return;
		}

		this._eventReset(tab_id);
	}

	onBeforeRequest(details) {
		const tab_id = details.tabId,
		      request_id = details.requestId;

		if (tab_id <= 0) {
			return;
		}

		if (!_TabInfo2.default.getTabInfo(tab_id)) {
			(0, _common.log)("tabInfo not found for tab " + tab_id + ", initializing...");

			_TabInfo2.default.create(tab_id);

			utils.getTab(tab_id, function (tab) {
				const ti = _TabInfo2.default.getTabInfo(tab_id);
				if (ti && ti.partialScan) {
					_TabInfo2.default.setTabInfo(tab_id, 'url', tab.url);
					_TabInfo2.default.setTabInfo(tab_id, 'incognito', tab.incognito);
				}
			});
		}

		if (!this._checkRedirect(details.type, request_id)) {
			return;
		}

		const page_url = _TabInfo2.default.getTabInfo(tab_id, 'url'),
		      bug_id = page_url ? (0, _matcher.isBug)(details.url, page_url) : (0, _matcher.isBug)(details.url);

		if (!bug_id) {
			return;
		}

		const app_id = _BugDb2.default.db.bugs[bug_id].aid,
		      cat_id = _BugDb2.default.db.apps[app_id].cat,
		      incognito = _TabInfo2.default.getTabInfo(tab_id, 'incognito'),
		      tab_host = _TabInfo2.default.getTabInfo(tab_id, 'host'),
		      fromRedirect = _Globals2.default.REDIRECT_MAP.has(request_id);

		const block = this._checkBlocking(app_id, cat_id, tab_id, tab_host, page_url, request_id);

		if (!block) {
			_Latency2.default.latencies[request_id] = _Latency2.default.latencies[request_id] || {};

			_Latency2.default.latencies[request_id][details.url] = {
				start_time: Math.round(details.timeStamp),
				bug_id: bug_id,

				page_url: page_url,
				incognito: incognito
			};
		}

		setTimeout(() => {
			this._processBug({
				bug_id: bug_id,
				app_id: app_id,
				type: details.type,
				url: details.url,
				block: block,
				tab_id: tab_id,
				from_frame: details.parentFrameId !== -1
			});

			if (block && _Conf2.default.ghostrank === true) {
				utils.getTab(tab_id, tab => {
					if (tab.incognito) {
						return;
					}

					this.ghostrank.recordStats(tab.url, details.url, bug_id, true, -1, -1, -1);
				});
			}
		}, 1);

		if (block) {
			if (details.type === 'sub_frame') {
				return {
					redirectUrl: 'about:blank'
				};
			} else if (details.type === 'image') {
				return {
					redirectUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=='
				};
			} else if (details.type === 'script') {
				let code = '';
				if (app_id === 2575) {
					code = this._getHubspotFormSurrogate(details.url);
				} else {
					const ti = _TabInfo2.default.getTabInfo(tab_id),
					      surrogates = _SurrogateDb2.default.getForTracker(details.url, app_id, bug_id, ti.host);

					if (surrogates.length > 0) {
						code = _underscore2.default.reduce(surrogates, function (memo, s) {
							memo += s.code;
							return memo;
						}, '');
					}
				}

				if (code) {
					const dataUrl = "data:application/javascript;base64," + btoa(code);
					(0, _common.log)("NEW SURROGATE", app_id);
					return {
						redirectUrl: dataUrl
					};
				}
			} else if (fromRedirect) {
				const url = (0, _click2play.buildRedirectC2P)(request_id, _Globals2.default.REDIRECT_MAP.get(request_id), app_id);
				setTimeout(() => {
					chrome.tabs.update(details.tabId, { url: url });
				}, 0);
			}
		}

		return {
			cancel: block
		};
	}

	onHeadersReceived(details) {
		if (details.statusCode >> 8 === 1) {
			return;
		}


		if (details.type !== "main_frame") {
			const appWithLatencyId = _Latency2.default.logLatency(details);

			if (appWithLatencyId) {
				this.purplebox.updateBox(details.tabId, appWithLatencyId);
			}
		}
	}

	onBeforeRedirect(details) {
		if (details.type === "main_frame") {
			_TabInfo2.default.setTabInfo(details.tabId, 'url', details.redirectUrl);
			_Globals2.default.REDIRECT_MAP.set(details.requestId, { url: details.url, redirectUrl: details.redirectUrl });
		}

		const appWithLatencyId = _Latency2.default.logLatency(details);
		if (appWithLatencyId) {
			this.purplebox.updateBox(details.tabId, appWithLatencyId);
		}
	}

	onRequestCompleted(details) {
		if (!details || details.tabId <= 0) {
			return;
		}
		this._clearRedirects(details.requestId);
	}

	onRequestErrorOccurred(details) {
		_Latency2.default.logLatency(details);
		this._clearRedirects(details.requestId);
	}

	onTabCreated(tab) {}

	onTabActivated(activeInfo) {
		this.button.update(activeInfo.tabId);
		this._resetNotifications();
	}

	onTabReplaced(addedTabId, removedTabId) {
		const prefetched = _TabInfo2.default.getTabInfo(addedTabId, 'prefetched');

		if (prefetched) {
			_TabInfo2.default.setTabInfo(addedTabId, 'prefetched', false);

			this._createBox(addedTabId);
		} else {
			_FoundBugs2.default.update(addedTabId);
			this.button.update(addedTabId);
		}
		(0, _common.log)('chrome.tabs.onReplaced', _TabInfo2.default.getTabInfo(addedTabId));
	}

	onTabRemoved(tab_id) {
		this._clearTabData(tab_id);
		this._resetNotifications();
		(0, _common.log)("ON TAB REMOVED", tab_id, _TabInfo2.default.getTabInfo(tab_id));
	}

	_processBug(details) {
		const bug_id = details.bug_id,
		      app_id = details.app_id,
		      type = details.type,
		      url = details.url,
		      block = details.block,
		      tab_id = details.tab_id,
		      tab = _TabInfo2.default.getTabInfo(tab_id);

		let num_apps_old;

		(0, _common.log)(block ? 'Blocked' : 'Found', type, url);
		(0, _common.log)('^^^ Pattern ID ' + bug_id + ' on tab ID ' + tab_id);

		if (_Conf2.default.show_alert) {
			num_apps_old = _FoundBugs2.default.getAppsCount(tab_id);
		}

		_FoundBugs2.default.update(tab_id, bug_id, url, block, type);

		this.button.update(details.tab_id);

		if (block && (_Conf2.default.enable_click2play || _Conf2.default.enable_click2playSocial)) {
			(0, _click2play.buildC2P)(details, app_id);
		}

		if (_Conf2.default.show_alert && tab && !tab.prefetched && tab.purplebox) {
			if (_FoundBugs2.default.getAppsCount(details.tab_id) > num_apps_old || _Click2PlayDb2.default.allowedOnce(details.tab_id, app_id)) {
				this.purplebox.updateBox(details.tab_id, app_id);
			}
		}
	}

	_getHubspotFormSurrogate(url) {
		const tokens = url.substr(8).split(/\/|\&|\?|\#|\=/ig);

		return tokens[7] + "({\"form\":{\"portalId\":" + tokens[4] + ",\"guid\": \"" + tokens[5] + "\",\"cssClass\":\"hs-form stacked\",\"formFieldGroups\":[{\"fields\":[{}]}],\"metaData\":[]},\"properties\":{}})";
	}

	_clearTabData(tab_id) {
		_FoundBugs2.default.clear(tab_id);
		_TabInfo2.default.clear(tab_id);
	}

	_clearRedirects(requestId) {
		_Globals2.default.REDIRECT_MAP.delete(requestId);
		_Globals2.default.LET_REDIRECTS_THROUGH = false;
	}

	_checkRedirect(type, request_id) {
		const fromRedirect = _Globals2.default.REDIRECT_MAP.has(request_id);

		if (type === 'main_frame' && !fromRedirect) {
			return false;
		}

		return true;
	}

	_checkBlocking(app_id, cat_id, tab_id, tab_host, page_url, request_id) {
		const fromRedirect = _Globals2.default.REDIRECT_MAP.has(request_id);
		let block;

		if (fromRedirect && _Globals2.default.LET_REDIRECTS_THROUGH) {
			block = false;
		} else {
			block = this.policy.shouldBlock(app_id, cat_id, tab_id, tab_host, page_url);
		}

		return block;
	}

	_eventReset(tab_id) {
		_Click2PlayDb2.default.reset(tab_id);
		_Globals2.default.REDIRECT_MAP.clear();
		_Globals2.default.LET_REDIRECTS_THROUGH = false;
	}

	_createBox(tab_id) {
		this.purplebox.createBox(tab_id).then(result => {
			_FoundBugs2.default.update(tab_id);
			this.button.update(tab_id);
		}).catch(err => {
			(0, _common.log)("Purplebox creation failed:", err);
		});
	}

	_resetNotifications() {
		_Globals2.default.C2P_LOADED = _Globals2.default.NOTIFICATIONS_LOADED = false;
	}
}

exports.default = EventHandlers;
module.exports = exports['default'];

},{"../utils/click2play":38,"../utils/common":39,"../utils/matcher":40,"../utils/utils":42,"./BrowserButton":19,"./BugDb":20,"./CMP":21,"./Click2PlayDb":22,"./Conf":24,"./FoundBugs":28,"./Ghostrank":29,"./Globals":30,"./Latency":31,"./Policy":32,"./PurpleBox":33,"./SurrogateDb":34,"./TabInfo":35,"underscore":14}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _Conf = require('./Conf');

var _Conf2 = _interopRequireDefault(_Conf);

var _BugDb = require('./BugDb');

var _BugDb2 = _interopRequireDefault(_BugDb);

var _Globals = require('./Globals');

var _Globals2 = _interopRequireDefault(_Globals);

var _accounts = require('../utils/accounts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SYNC_SET = new Set(_Globals2.default.SYNC_ARRAY),
      BROWSER_INFO = _Globals2.default.BROWSER_INFO;

class ExtensionWeb {

	constructor() {
		this.oldConf = {};
	}

	getSettings() {
		return {
			conf: (0, _accounts.buildUserSettings)(),
			syncSetArray: _Globals2.default.SYNC_ARRAY,
			language: _Conf2.default.language,
			login_info: _Conf2.default.login_info,
			offer_offers: _Conf2.default.offer_offers,
			prefs: {
				newAppIds: _Conf2.default.new_app_ids,
				bugs_last_updated: _Conf2.default.bugs_last_updated,
				bugs_last_checked: _Conf2.default.bugs_last_checked
			},
			browser: BROWSER_INFO.displayName,
			version: _Globals2.default.EXTENSION_VERSION,
			bugs: _BugDb2.default.db
		};
	}

	setSettings(message) {
		let needToPush = false;
		SYNC_SET.forEach(key => {
			if (message.conf[key] !== undefined && !_underscore2.default.isEqual(_Conf2.default[key], message.conf[key]) && key !== 'reload_banner_status' && key !== 'trackers_banner_status') {

				needToPush = true;

				if (key === 'ghostrank') {
					_Conf2.default.ghostrank_dismissed = true;
				} else if (key === 'enable_metrics') {
					_Conf2.default.metrics_dismissed = true;
				} else if (key === 'enable_human_web') {
					_Conf2.default.human_web_dismissed = true;
				} else if (key === 'login_info') {
					_Conf2.default.account_dismissed = true;
				} else if (key === 'enable_offers') {
					_Conf2.default.enable_offers = message.conf[key];
				}

				_Conf2.default[key] = message.conf[key];
			}
		});

		if (_Conf2.default.reload_banner_status.show !== message.conf.reload_banner_status) {
			needToPush = true;
			_Conf2.default.reload_banner_status = {
				'show_time': 0,
				'dismissals': [],
				'show': message.conf.reload_banner_status
			};
		}
		if (_Conf2.default.trackers_banner_status.show !== message.conf.trackers_banner_status) {
			needToPush = true;
			_Conf2.default.trackers_banner_status = {
				'show_time': 0,
				'dismissals': [],
				'show': message.conf.trackers_banner_status
			};
		}

		if (message.prefs) {
			_Conf2.default.bugs_last_updated = message.prefs.bugs_last_updated;
			_Conf2.default.bugs_last_checked = message.prefs.bugs_last_checked;
		}

		if (needToPush) {
			const settings = this.getSettings();
			(0, _accounts.pushUserSettings)(settings);
		}
	}
}

exports.default = ExtensionWeb;
module.exports = exports['default'];

},{"../utils/accounts":37,"./BugDb":20,"./Conf":24,"./Globals":30,"underscore":14}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _BugDb = require('./BugDb');

var _BugDb2 = _interopRequireDefault(_BugDb);

var _CompatibilityDb = require('./CompatibilityDb');

var _CompatibilityDb2 = _interopRequireDefault(_CompatibilityDb);

var _Globals = require('./Globals');

var _Globals2 = _interopRequireDefault(_Globals);

var _TabInfo = require('./TabInfo');

var _TabInfo2 = _interopRequireDefault(_TabInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BROWSER_INFO = _Globals2.default.BROWSER_INFO,
      LATENCY_ISSUE_THRESHOLD = BROWSER_INFO.name === 'firefox' ? 2000 : 1000;

class FoundBugs {

	constructor() {
		this._foundBugs = {};
	}

	update(tab_id, bug_id, src, blocked, type) {
		if (!this._foundBugs.hasOwnProperty(tab_id)) {
			this._foundBugs[tab_id] = {};
		}

		if (!bug_id) {
			return;
		}

		if (!this._foundBugs[tab_id].hasOwnProperty(bug_id)) {
			this._foundBugs[tab_id][bug_id] = {
				sources: [],
				hasLatencyIssue: false,
				hasInsecureIssue: false
			};
		}
		this._foundBugs[tab_id][bug_id].sources.push({
			src: src,
			blocked: blocked,
			type: type.toLowerCase()
		});

		if (!this._foundBugs[tab_id][bug_id].hasInsecureIssue) {
			const tab = _TabInfo2.default.getTabInfo(tab_id);
			this._foundBugs[tab_id][bug_id].hasInsecureIssue = tab.protocol === 'https' && !src.startsWith('https');
		}

		if (this._foundBugs[tab_id][bug_id].blocked !== false) {
			this._foundBugs[tab_id][bug_id].blocked = blocked;
		}
	}

	getBugs(tab_id) {
		return this._foundBugs.hasOwnProperty(tab_id) && this._foundBugs[tab_id];
	}

	getApps(tab_id, sorted, tab_url, app_id) {
		const apps_arr = [],
		      apps_obj = {},
		      bugs = this.getBugs(tab_id),
		      db = _BugDb2.default.db;
		let id,
		    aid,
		    latencyIssue = false,
		    insecureIssue = false;

		if (!bugs) {
			return bugs;
		}

		for (id in bugs) {
			if (!bugs.hasOwnProperty(id)) {
				continue;
			}

			aid = db.bugs[id].aid;
			if (app_id !== undefined && aid !== app_id) {
				continue;
			}
			latencyIssue = bugs[id].hasLatencyIssue;
			insecureIssue = bugs[id].hasInsecureIssue;
			if (apps_obj.hasOwnProperty(aid)) {
				apps_obj[aid].sources = apps_obj[aid].sources.concat(bugs[id].sources);

				if (latencyIssue) {
					apps_obj[aid].hasLatencyIssue = latencyIssue;
				}

				if (insecureIssue) {
					apps_obj[aid].hasInsecureIssue = insecureIssue;
				}

				if (apps_obj[aid].blocked !== false) {
					apps_obj[aid].blocked = bugs[id].blocked;
				}
			} else {
				apps_obj[aid] = {
					id: aid,
					name: db.apps[aid].name,
					cat: db.apps[aid].cat,
					blocked: bugs[id].blocked,
					sources: bugs[id].sources,
					hasCompatibilityIssue: tab_url && bugs[id].blocked ? _CompatibilityDb2.default.hasIssue(aid, tab_url) : false,
					hasLatencyIssue: latencyIssue,
					hasInsecureIssue: insecureIssue
				};
			}
		}

		for (id in apps_obj) {
			if (apps_obj.hasOwnProperty(id)) {
				apps_arr.push(apps_obj[id]);
			}
		}

		if (sorted && app_id === undefined) {
			apps_arr.sort(function (a, b) {
				a = a.name.toLowerCase();
				b = b.name.toLowerCase();
				return a > b ? 1 : a < b ? -1 : 0;
			});
		}

		return apps_arr;
	}

	getCategories(tab_id, sorted) {
		const cats_arr = [],
		      cats_obj = {},
		      bugs = this.getBugs(tab_id),
		      db = _BugDb2.default.db;
		let id, aid, cid;

		if (!bugs) {
			return bugs;
		}

		for (id in bugs) {
			if (!bugs.hasOwnProperty(id)) {
				continue;
			}
			aid = db.bugs[id].aid;
			cid = db.apps[aid].cat;

			if (cats_obj.hasOwnProperty(cid)) {
				if (cats_obj[cid].appIds.includes(aid)) {
					continue;
				}

				cats_obj[cid].appIds.push(aid);
				cats_obj[cid].trackers.push({
					id: aid,
					name: db.apps[aid].name,
					blocked: bugs[id].blocked
				});
				if (bugs[id].blocked) {
					cats_obj[cid].blocked++;
				} else {
					cats_obj[cid].allowed++;
				}
				cats_obj[cid].total++;
			} else {
				cats_obj[cid] = {
					id: cid,
					name: cid,
					appIds: [aid],
					trackers: [{
						id: aid,
						name: db.apps[aid].name,
						blocked: bugs[id].blocked
					}],
					blocked: bugs[id].blocked ? 1 : 0,
					allowed: bugs[id].blocked ? 0 : 1,
					total: 1
				};
			}
		}

		for (cid in cats_obj) {
			if (cats_obj.hasOwnProperty(cid)) {
				cats_arr.push(cats_obj[cid]);
			}
		}

		if (sorted) {
			cats_arr.sort(function (a, b) {
				a = a.name.toLowerCase();
				b = b.name.toLowerCase();
				return a > b ? 1 : a < b ? -1 : 0;
			});
		}

		return cats_arr;
	}

	getAppsCount(tab_id) {
		const apps = this.getApps(tab_id);
		if (apps) {
			return apps.length;
		}
		return 0;
	}

	getAppsCountByIssues(tab_id, tab_url) {
		const apps = this.getApps(tab_id, false, tab_url);
		let compatibility = 0,
		    insecure = 0,
		    latency = 0,
		    total = 0,
		    all = 0;

		if (apps) {
			apps.forEach(function (app) {
				if (app.hasCompatibilityIssue || app.hasInsecureIssue || app.hasLatencyIssue) {
					total++;
				}
				if (app.hasCompatibilityIssue) {
					compatibility++;
				}
				if (app.hasInsecureIssue) {
					insecure++;
				}
				if (app.hasLatencyIssue) {
					latency++;
				}
				all++;
			});
		}

		return {
			compatibility: compatibility,
			insecure: insecure,
			latency: latency,
			total: total,
			all: all
		};
	}

	getAppsCountByBlocked(tab_id) {
		const apps = this.getApps(tab_id);
		let blocked = 0,
		    allowed = 0;

		if (apps) {
			apps.forEach(function (app) {
				if (app.blocked) {
					blocked++;
				} else {
					allowed++;
				}
			});
		}

		return {
			blocked: blocked,
			allowed: allowed
		};
	}

	checkLatencyIssue(tab_id, bug_id, latency) {
		if (latency < LATENCY_ISSUE_THRESHOLD) {
			return 0;
		}

		if (!this._foundBugs.hasOwnProperty(tab_id) || !this._foundBugs[tab_id][bug_id]) {
			return 0;
		}

		if (this._foundBugs[tab_id][bug_id].hasLatencyIssue) {
			return 0;
		}

		this._foundBugs[tab_id][bug_id].hasLatencyIssue = true;
		return _BugDb2.default.db.bugs[bug_id].aid;
	}

	clear(tab_id) {
		delete this._foundBugs[tab_id];
	}
}

exports.default = new FoundBugs();
module.exports = exports['default'];

},{"./BugDb":20,"./CompatibilityDb":23,"./Globals":30,"./TabInfo":35}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _BugDb = require('./BugDb');

var _BugDb2 = _interopRequireDefault(_BugDb);

var _Conf = require('./Conf');

var _Conf2 = _interopRequireDefault(_Conf);

var _Globals = require('./Globals');

var _Globals2 = _interopRequireDefault(_Globals);

var _utils = require('../utils/utils');

var _common = require('../utils/common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BROWSER_INFO = _Globals2.default.BROWSER_INFO,
      IS_EDGE = BROWSER_INFO.name === 'edge',
      USER_AGENT = BROWSER_INFO.name,
      EXTENSION_VERSION = _Globals2.default.EXTENSION_VERSION;

class Ghostrank {

	constructor() {
		Ghostrank.censusCache = {};
		Ghostrank.preCensusCache = {};

		setInterval(this._cleanCaches.bind(this), 1800000);
	}

	onNavigate(url) {
		const today = this._getToday(),
		      parsedURL = (0, _utils.processUrl)(url),
		      host_with_pathname = parsedURL.host_with_path_cleaned;

		if (!Ghostrank.preCensusCache.hasOwnProperty(today) || !Ghostrank.preCensusCache[today].hasOwnProperty(host_with_pathname)) {
			return;
		}

		_underscore2.default.keys(Ghostrank.preCensusCache[today][host_with_pathname]).forEach(bug_id => {
			this._setCache(Ghostrank.censusCache, today, bug_id, host_with_pathname);
		});

		delete Ghostrank.preCensusCache[today][host_with_pathname];
	}

	recordStats(tab_url, bug_url, bug_id, block, latency, response_code, from_cache) {
		const today = this._getToday(),
		      db = _BugDb2.default.db,
		      parsedURL = (0, _utils.processUrl)(tab_url),
		      host_with_pathname = parsedURL.host_with_path_cleaned,
		      blocking_mode = db.noneSelected ? '-1' : db.allSelected ? '1' : '0';

		if (!this.isValidUrl(parsedURL)) {
			return;
		}

		if (Ghostrank.censusCache.hasOwnProperty(today) && Ghostrank.censusCache[today].hasOwnProperty(host_with_pathname) && Ghostrank.censusCache[today][host_with_pathname].hasOwnProperty(bug_id)) {
			return;
		}

		const census_url = 'https://l.ghostery.com/api/census' + '?apid=' + encodeURIComponent(bug_id) + '&d=' + encodeURIComponent(host_with_pathname) + '&src=' + encodeURIComponent(bug_url) + '&bl=' + (block ? 'true' : 'false') + '&blm=' + blocking_mode + '&nl=' + latency + '&rc=' + response_code + '&fc=' + from_cache + '&bv=' + encodeURIComponent(db.version) + '&ua=' + encodeURIComponent(USER_AGENT) + '&v=' + encodeURIComponent(EXTENSION_VERSION);

		(0, _common.log)(`\nGhostrank Tracker Channel:
			app_pattern_id: ${bug_id}
			domain: ${host_with_pathname}
			bug_url: ${bug_url}
			block: ${block}
			blocking_mode: ${blocking_mode}
			latency: ${latency}
			response_code: ${response_code}
			from_cache: ${from_cache}
			db_version: ${db.version}
			ua: ${USER_AGENT}
			extension_version: ${EXTENSION_VERSION}`);

		if (!IS_EDGE && typeof fetch === 'function') {
			const options = {
				referrerPolicy: 'no-referrer',
				credentials: 'omit'
			};
			const request = new Request(census_url, options);
			fetch(request).catch(err => {
				(0, _common.log)("Error sending Ghostrank Tracker Channel:", err);
			});
		} else {
			const xhr = new XMLHttpRequest();

			xhr.open("GET", census_url, true);
			xhr.send();
		}

		this._setCache(Ghostrank.preCensusCache, today, bug_id, host_with_pathname);
	}

	recordPageInfo(domain, page_latency) {
		if (!_Conf2.default.ghostrank) {
			return;
		}

		const rnd = Math.ceil(9999999 * Math.random()),
		      page_info_url = 'https://l.ghostery.com/api/page/' + '?d=' + encodeURIComponent(domain) + '&l=' + page_latency + '&ua=' + encodeURIComponent(USER_AGENT) + '&rnd=' + rnd;

		(0, _common.log)(`\nGhostrank Page Info:
			domain: ${domain}
			page_latency: ${page_latency}
			ua: ${USER_AGENT}
			random: ${rnd}`);

		if (!IS_EDGE && typeof fetch === 'function') {
			var options = {
				referrerPolicy: "no-referrer",
				credentials: "omit"
			};
			const request = new Request(page_info_url, options);
			fetch(request).catch(err => {
				(0, _common.log)("Error sending Ghostrank Page Info:", err);
			});
		} else {
			const xhr = new XMLHttpRequest();

			xhr.open("GET", page_info_url, true);
			xhr.send();
		}
	}

	isValidUrl(parsedURL) {
		if (parsedURL.protocol.startsWith('http') && parsedURL.host.includes('.') && /[A-Za-z]/.test(parsedURL.host)) {
			return true;
		} else {
			(0, _common.log)('Ghostrank data not sent, invalid URL');
			return false;
		}
	}

	_cleanCaches() {
		const today = this._getToday();

		[Ghostrank.censusCache, Ghostrank.preCensusCache].forEach(function (cache, i) {
			for (let id in cache) {
				if (cache.hasOwnProperty(id)) {
					if (id !== today) {
						(0, _common.log)("Cleaned up", i === 1 ? 'preCensusCache' : 'censusCache');
						delete cache[id];
					}
				}
			}
		});
	}

	_setCache(cache, date, bug_id, url) {
		if (!cache[date]) {
			cache[date] = {};
		}

		if (!cache[date][url]) {
			cache[date][url] = {};
		}

		cache[date][url][bug_id] = 1;
	}

	_getToday() {
		const now = new Date();
		return now.getFullYear() + "-" + now.getMonth() + "-" + now.getDate();
	}
}

exports.default = Ghostrank;
module.exports = exports['default'];

},{"../utils/common":39,"../utils/utils":42,"./BugDb":20,"./Conf":24,"./Globals":30,"underscore":14}],30:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _uaParserJs = require('ua-parser-js');

var _uaParserJs2 = _interopRequireDefault(_uaParserJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Globals {
	constructor() {
		this.DEBUG = chrome.runtime.getManifest().debug || false;
		this.LOG = this.DEBUG && chrome.runtime.getManifest().log;
		this.EXTENSION_NAME = chrome.runtime.getManifest().name || 'Ghostery';
		this.EXTENSION_VERSION = chrome.runtime.getManifest().version;
		this.BROWSER_INFO = { displayName: '', name: '', token: '', version: '', os: 'other' };

		this.JUST_INSTALLED = false;
		this.JUST_UPGRADED = false;
		this.HOTFIX = false;
		this.LET_REDIRECTS_THROUGH = false;
		this.C2P_LOADED = false;
		this.NOTIFICATIONS_LOADED = false;
		this.hotfix_alert_shown = false;
		this.upgrade_alert_shown = false;

		this.GHOSTERY_DOMAIN = this.DEBUG ? 'ghosterystage' : 'ghostery';
		this.METRICS_SUB_DOMAIN = this.DEBUG ? 'staging-d' : 'd';
		this.CMP_SUB_DOMAIN = this.DEBUG ? 'staging-cmp-cdn' : 'cmp-cdn';
		this.CDN_SUB_DOMAIN = this.DEBUG ? 'staging-cdn' : 'cdn';
		this.APPS_SUB_DOMAIN = this.DEBUG ? 'staging-apps' : 'apps';
		this.GCACHE_SUB_DOMAIN = this.DEBUG ? 'staging-gcache' : 'gcache';

		this.REDIRECT_MAP = new Map();
		this.BLOCKED_REDIRECT_DATA = {};
		this.EXCLUDES = ["extension.ghostery.com", "extension.ghosterystage.com", "extension.ghosterydev.com", "signon.ghostery.com", "signon.ghosterystage.com", "account.ghostery.com", "account.ghosterystage.com"];

		this.SYNC_ARRAY = ['enable_autoupdate', 'show_tracker_urls', 'enable_click2play', 'enable_click2play_social', 'toggle_individual_trackers', 'ignore_first_party', 'block_by_default', 'show_alert', 'alert_expanded', 'alert_bubble_timeout', 'alert_bubble_pos', 'hide_alert_trusted', 'show_cmp', 'notify_upgrade_updates', 'notify_hotfix_updates', 'notify_library_updates', 'reload_banner_status', 'trackers_banner_status', 'show_badge', 'ghostrank', 'ghostrank_dismissed', 'enable_metrics', 'metrics_dismissed', 'enable_human_web', 'enable_offers', 'human_web_dismissed', 'account_dismissed', 'tour_alert_dismissed', 'import_callout_dismissed', 'site_whitelist', 'site_blacklist', 'selected_app_ids', 'site_specific_blocks', 'site_specific_unblocks'];

		this.buildBrowserInfo();
	}

	buildBrowserInfo() {
		const ua = (0, _uaParserJs2.default)(navigator.userAgent),
		      browser = ua.browser.name.toLowerCase(),
		      version = ua.browser.version,
		      platform = ua.os.name.toLowerCase();

		if (browser.includes('edge')) {
			this.BROWSER_INFO.displayName = 'Edge';
			this.BROWSER_INFO.name = 'edge';
			this.BROWSER_INFO.token = 'ed';
		} else if (browser.includes('opera')) {
			this.BROWSER_INFO.displayName = 'Opera';
			this.BROWSER_INFO.name = 'opera';
			this.BROWSER_INFO.token = 'op';
		} else if (browser.includes('chrome')) {
			this.BROWSER_INFO.displayName = 'Chrome';
			this.BROWSER_INFO.name = 'chrome';
			this.BROWSER_INFO.token = 'ch';
		} else if (browser.includes('firefox')) {
			this.BROWSER_INFO.displayName = 'Firefox';
			this.BROWSER_INFO.name = 'firefox';
			this.BROWSER_INFO.token = 'ff';
		} else if (browser.includes('yandex')) {
			this.BROWSER_INFO.displayName = 'Yandex';
			this.BROWSER_INFO.name = 'yandex';
			this.BROWSER_INFO.token = 'yx';
		}

		if (platform.includes('mac')) {
			this.BROWSER_INFO.os = 'mac';
		} else if (platform.includes('win')) {
			this.BROWSER_INFO.os = 'win';
		} else if (platform.includes('linux')) {
			this.BROWSER_INFO.os = 'linux';
		} else if (platform.includes('android')) {
			this.BROWSER_INFO.os = 'android';
		}

		this.BROWSER_INFO.version = version;
	}
}

exports.default = new Globals();
module.exports = exports['default'];

},{"ua-parser-js":13}],31:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _Conf = require('./Conf');

var _Conf2 = _interopRequireDefault(_Conf);

var _Ghostrank = require('./Ghostrank');

var _Ghostrank2 = _interopRequireDefault(_Ghostrank);

var _utils = require('../utils/utils');

var _FoundBugs = require('./FoundBugs');

var _FoundBugs2 = _interopRequireDefault(_FoundBugs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Latency {
	constructor() {
		this.latencies = {};
		this.ghostrank = new _Ghostrank2.default();
	}

	logLatency(details) {
		const request_id = details.requestId,
		      tab_id = details.tabId;
		let bug_id, start_time, page_url, incognito;

		if (!this.latencies.hasOwnProperty(request_id)) {
			return 0;
		}

		if (_underscore2.default.isEmpty(this.latencies[request_id])) {
			delete this.latencies[request_id];
			return 0;
		}

		if (!this.latencies[request_id].hasOwnProperty(details.url)) {
			return 0;
		}

		start_time = this.latencies[request_id][details.url].start_time;
		bug_id = this.latencies[request_id][details.url].bug_id;
		page_url = this.latencies[request_id][details.url].page_url;
		incognito = this.latencies[request_id][details.url].incognito;

		delete this.latencies[request_id][details.url];
		if (_underscore2.default.isEmpty(this.latencies[request_id])) {
			delete this.latencies[request_id];
		}

		const response_code = details.statusCode || -1,
		      blocked = details.error === "net::ERR_BLOCKED_BY_CLIENT" || details.redirectUrl && !details.redirectUrl.startsWith("http");
		let latency = Math.round(details.timeStamp - start_time),
		    from_cache = details.fromCache ? 1 : 0;

		const appWithLatencyId = _FoundBugs2.default.checkLatencyIssue(tab_id, bug_id, latency);

		if (!_Conf2.default.ghostrank) {
			return appWithLatencyId;
		}

		if (blocked) {
			latency = -1;
			from_cache = -1;
		}

		if (page_url !== undefined && incognito !== undefined) {
			if (!incognito) {
				this.ghostrank.recordStats(page_url, details.url, bug_id, false, latency, response_code, from_cache);
			}
		} else {
			if (tab_id > -1 && typeof tab_id !== 'undefined') {
				(0, _utils.getTab)(tab_id, tab => {
					if (tab && !tab.incognito) {
						this.ghostrank.recordStats(tab.url, details.url, bug_id, false, latency, response_code, from_cache);
					}
				});
			}
		}
		return appWithLatencyId;
	}
}

exports.default = new Latency();
module.exports = exports['default'];

},{"../utils/utils":42,"./Conf":24,"./FoundBugs":28,"./Ghostrank":29,"underscore":14}],32:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Click2PlayDb = require('./Click2PlayDb');

var _Click2PlayDb2 = _interopRequireDefault(_Click2PlayDb);

var _Conf = require('./Conf');

var _Conf2 = _interopRequireDefault(_Conf);

var _utils = require('../utils/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Policy {
	getSitePolicy(url) {
		if (this.blacklisted(url)) {
			return 1;
		}
		if (this.whitelisted(url)) {
			return 2;
		}
		return false;
	}

	whitelisted(url) {
		if (url) {
			url = (0, _utils.processUrl)(url).host;
			url = url.replace(/^www\./, '');
			const sites = _Conf2.default.site_whitelist || [],
			      num_sites = sites.length;

			for (let i = 0; i < num_sites; i++) {
				if (url === sites[i]) {
					return sites[i];
				}
			}
		}

		return false;
	}

	blacklisted(url) {
		if (url) {
			url = (0, _utils.processUrl)(url).host;
			url = url.replace(/^www\./, '');
			const sites = _Conf2.default.site_blacklist || [],
			      num_sites = sites.length;

			for (let i = 0; i < num_sites; i++) {
				if (url === sites[i]) {
					return sites[i];
				}
			}
		}

		return false;
	}

	shouldBlock(app_id, cat_id, tab_id, tab_host, tab_url) {
		if (_Conf2.default.paused_blocking) {
			return false;
		}

		if (_Conf2.default.selected_app_ids.hasOwnProperty(app_id)) {
			if (_Conf2.default.toggle_individual_trackers && _Conf2.default.site_specific_unblocks.hasOwnProperty(tab_host) && _Conf2.default.site_specific_unblocks[tab_host].includes(+app_id)) {
				if (this.blacklisted(tab_url)) {
					return !_Click2PlayDb2.default.allowedOnce(tab_id, app_id);
				} else {
					return false;
				}
			} else {
				if (this.whitelisted(tab_url)) {
					return false;
				} else {
					return !_Click2PlayDb2.default.allowedOnce(tab_id, app_id);
				}
			}
		} else {
			if (_Conf2.default.toggle_individual_trackers && _Conf2.default.site_specific_blocks.hasOwnProperty(tab_host) && _Conf2.default.site_specific_blocks[tab_host].includes(+app_id)) {
				if (this.whitelisted(tab_url)) {
					return false;
				} else {
					return !_Click2PlayDb2.default.allowedOnce(tab_id, app_id);
				}
			} else {
				if (this.blacklisted(tab_url)) {
					return !_Click2PlayDb2.default.allowedOnce(tab_id, app_id);
				} else {
					return false;
				}
			}
		}
	}
}

exports.default = Policy;
module.exports = exports['default'];

},{"../utils/utils":42,"./Click2PlayDb":22,"./Conf":24}],33:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Conf = require('./Conf');

var _Conf2 = _interopRequireDefault(_Conf);

var _FoundBugs = require('./FoundBugs');

var _FoundBugs2 = _interopRequireDefault(_FoundBugs);

var _TabInfo = require('./TabInfo');

var _TabInfo2 = _interopRequireDefault(_TabInfo);

var _Policy = require('./Policy');

var _Policy2 = _interopRequireDefault(_Policy);

var _Globals = require('./Globals');

var _Globals2 = _interopRequireDefault(_Globals);

var _common = require('../utils/common');

var _utils = require('../utils/utils');

var _accounts = require('../utils/accounts');

var accounts = _interopRequireWildcard(_accounts);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const t = chrome.i18n.getMessage;

class PurpleBox {

	constructor() {
		this.policy = new _Policy2.default();
		this.channelsSupported = typeof chrome.runtime.onConnect === 'object';
		this.ports = new Map();
	}

	createBox(tab_id) {
		const tab = _TabInfo2.default.getTabInfo(tab_id);

		if (!_Conf2.default.show_alert || _Conf2.default.paused_blocking || _Conf2.default.hide_alert_trusted && !!this.policy.whitelisted(tab.url) || !tab || tab.purplebox || _Globals2.default.EXCLUDES.includes(tab.host)) {
			return Promise.resolve(false);
		}

		_TabInfo2.default.setTabInfo(tab_id, 'purplebox', true);

		this.createBoxParams = {
			conf: {
				alert_expanded: _Conf2.default.alert_expanded,
				alert_bubble_pos: _Conf2.default.alert_bubble_pos,
				alert_bubble_timeout: _Conf2.default.alert_bubble_timeout
			},
			translations: {
				looking: t('box_looking'),
				trackers: t('box_trackers'),
				box_warning_compatibility: t('box_warning_compatibility'),
				box_warning_slow: t('box_warning_slow'),
				box_warning_nonsecure: t('box_warning_nonsecure'),
				tracker: t('box_tracker'),
				hide: t('box_hide'),
				settings: t('box_settings'),
				options_expanded: t('box_options_expanded'),
				hide_expanded: t('box_hide_expanded'),
				settings_expanded: t('box_settings_expanded'),
				box_dismiss_0s: t('box_dismiss_0s'),
				box_dismiss_5s: t('box_dismiss_5s'),
				box_dismiss_15s: t('box_dismiss_15s'),
				box_dismiss_30s: t('box_dismiss_30s'),
				box_display_br: t('box_display_br'),
				box_display_tr: t('box_display_tr'),
				box_display_tl: t('box_display_tl'),
				box_display_bl: t('box_display_bl')
			}
		};

		if (this.channelsSupported) {
			if (this.ports.has(tab_id)) {
				this.ports.get(tab_id).disconnect();
				this.ports.delete(tab_id);
			}
			if (!this.connectListenerAdded) {
				this.connectListenerAdded = true;

				chrome.runtime.onConnect.addListener(port => {
					if (port && port.name === 'purpleBoxPort' && port.sender && port.sender.tab && port.sender.tab.id) {
						const tabId = port.sender.tab.id;
						if (!this.ports.has(tabId)) {
							this.ports.set(tabId, port);
							this.ports.get(tabId).onMessage.addListener(message => {
								if (message.name === 'purpleBoxLoaded') {
									this.ports.get(tabId).postMessage({ name: 'createBox', message: this.createBoxParams });
								} else if (message.name === 'onCreateBox') {
									this.updateBox(tabId);
								} else if (message.name === 'onDestroyBox') {
									this.destroyBox(tabId);
								} else if (message.name === 'updateAlertConf') {
									_Conf2.default.alert_expanded = message.message.alert_expanded;
									_Conf2.default.alert_bubble_pos = message.message.alert_bubble_pos;
									_Conf2.default.alert_bubble_timeout = message.message.alert_bubble_timeout;

									accounts.pushUserSettings({ conf: accounts.buildUserSettings() });
								}
							});
						}
					}
				});
			}
		}
		return (0, _utils.injectScript)(tab_id, 'dist/purplebox.js', 'dist/css/purplebox.css', 'document_start').then(() => {
			if (!this.channelsSupported) {
				(0, _utils.sendMessage)(tab_id, 'createBox', this.createBoxParams, response => {
					if (chrome.runtime.lastError) {
						(0, _common.log)("createBox sendMessage error", chrome.runtime.lastError);
						return false;
					} else {
						this.updateBox(tab_id);
						return true;
					}
				});
			}
		});
	}

	updateBox(tab_id, app_id) {
		const tab = _TabInfo2.default.getTabInfo(tab_id);
		const apps = _FoundBugs2.default.getApps(tab_id, true, tab.url, app_id);

		if (!apps || apps.length === 0 || _Globals2.default.EXCLUDES.includes(tab.host)) {
			return false;
		}

		if (this.channelsSupported) {
			if (this.ports.has(tab_id)) {
				this.ports.get(tab_id).postMessage({
					name: 'updateBox',
					message: { apps: apps }
				});
				return true;
			} else {
				(0, _common.log)('updateBox failed. Port is null');
				return false;
			}
		} else {
			(0, _utils.sendMessage)(tab_id, 'updateBox', {
				apps: apps
			}, function (response) {
				if (chrome.runtime.lastError) {
					(0, _common.log)("updateBox sendMessage failed", chrome.runtime.lastError, tab);
				}
			});
		}
	}

	destroyBox(tab_id) {
		const tab = _TabInfo2.default.getTabInfo(tab_id);
		if (!tab || _Globals2.default.EXCLUDES.includes(tab.host)) {
			return;
		} else {
			if (this.channelsSupported) {
				if (this.ports.has(tab_id)) {
					this.ports.get(tab_id).disconnect();
					this.ports.delete(tab_id);
				}
			}
			_TabInfo2.default.setTabInfo(tab_id, 'purplebox', false);
		}

		return true;
	}
}

exports.default = PurpleBox;
module.exports = exports['default'];

},{"../utils/accounts":37,"../utils/common":39,"../utils/utils":42,"./Conf":24,"./FoundBugs":28,"./Globals":30,"./Policy":32,"./TabInfo":35}],34:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _Conf = require('./Conf');

var _Conf2 = _interopRequireDefault(_Conf);

var _Updatable = require('./Updatable');

var _Updatable2 = _interopRequireDefault(_Updatable);

var _common = require('../utils/common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SurrogateDb extends _Updatable2.default {

	constructor(type) {
		super(type);
		this.db = {
			pattern_ids: {},
			app_ids: {},
			site_surrogates: {}
		};
	}

	update() {}

	processList(data) {
		(0, _common.log)('processing surrogates...');

		data.mappings.forEach(s => {
			s.code = data.surrogates[s.sid];

			['pattern_id', 'app_id', 'sites', 'match'].forEach(function (prop) {
				if (s.hasOwnProperty(prop) && !_underscore2.default.isArray(s[prop])) {
					s[prop] = [s[prop]];
				}
			});

			if (s.hasOwnProperty('match')) {
				s.match = _underscore2.default.map(s.match, function (match) {
					return new RegExp(match, '');
				});
			}

			if (s.hasOwnProperty('pattern_id') || s.hasOwnProperty('app_id')) {
				if (s.hasOwnProperty("pattern_id")) {
					this._buildDb(s, "pattern_id", "pattern_ids");
				} else if (s.hasOwnProperty("app_id")) {
					this._buildDb(s, "app_id", "app_ids");
				}
			} else {
				if (s.hasOwnProperty("sites")) {
					this._buildDb(s, "sites", "site_surrogates");
				}
			}
		});

		(0, _common.log)('processed surrogates...');

		_Conf2.default.surrogates = data;
	}

	getForTracker(script_src, app_id, pattern_id, host_name) {
		let candidates = [];

		if (this.db.app_ids.hasOwnProperty(app_id)) {
			candidates = candidates.concat(this.db.app_ids[app_id]);
		}

		if (this.db.pattern_ids.hasOwnProperty(pattern_id)) {
			candidates = candidates.concat(this.db.pattern_ids[pattern_id]);
		}

		return _underscore2.default.filter(candidates, function (surrogate) {
			if (surrogate.hasOwnProperty("sites")) {
				if (!surrogate.sites.includes(host_name)) {
					return false;
				}
			}

			if (surrogate.hasOwnProperty("match")) {
				if (!_underscore2.default.any(surrogate.match, function (match) {
					return script_src.match(match);
				})) {
					return false;
				}
			}

			return true;
		});
	}

	_getForSite(host_name) {
		let surrogates = [];

		if (this.db.site_surrogates.hasOwnProperty(host_name)) {
			surrogates = this.db.site_surrogates[host_name];
		}

		return surrogates;
	}

	_buildDb(surrogate, property, db_name) {
		surrogate[property].forEach(val => {
			if (!this.db[db_name].hasOwnProperty(val)) {
				this.db[db_name][val] = [];
			}
			this.db[db_name][val].push(surrogate);
		});
	}
}

exports.default = new SurrogateDb('surrogates');
module.exports = exports['default'];

},{"../utils/common":39,"./Conf":24,"./Updatable":36,"underscore":14}],35:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utils = require('../utils/utils');

class TabInfo {

	constructor() {
		this._tabInfo = {};
	}

	create(tab_id, tab_url) {
		const info = {
			needsReload: { changes: {} },
			partialScan: true,
			prefetched: false,
			purplebox: false
		};

		if (tab_url) {
			const parsed = (0, _utils.processUrl)(tab_url);
			info.url = tab_url;
			info.protocol = parsed.protocol;
			info.host = parsed.host;
			info.path = parsed.path;
			info.hash = parsed.anchor;
			info.partialScan = false;
		}

		this._tabInfo[tab_id] = info;
	}

	getTabInfo(tab_id, property) {
		if (this._tabInfo.hasOwnProperty(tab_id)) {
			if (property) {
				return this._tabInfo[tab_id][property];
			} else {
				return this._tabInfo[tab_id];
			}
		} else {
			return false;
		}
	}

	setTabInfo(tab_id, property, value) {
		if (this._tabInfo.hasOwnProperty(tab_id)) {
			if (property === 'url') {
				this._updateUrl(tab_id, value);
			} else {
				this._tabInfo[tab_id][property] = value;
			}
		}
	}

	clear(tab_id) {
		delete this._tabInfo[tab_id];
	}

	_updateUrl(tab_id, tab_url) {
		const parsed = (0, _utils.processUrl)(tab_url);
		this._tabInfo[tab_id].url = tab_url;
		this._tabInfo[tab_id].protocol = parsed.protocol;
		this._tabInfo[tab_id].host = parsed.host;
		this._tabInfo[tab_id].path = parsed.path;
		this._tabInfo[tab_id].hash = parsed.anchor;
	}
}

exports.default = new TabInfo();
module.exports = exports['default'];

},{"../utils/utils":42}],36:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _Globals = require('./Globals');

var _Globals2 = _interopRequireDefault(_Globals);

var _Conf = require('./Conf');

var _Conf2 = _interopRequireDefault(_Conf);

var _utils = require('../utils/utils');

var _common = require('../utils/common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CDN_SUB_DOMAIN = _Globals2.default.CDN_SUB_DOMAIN;

class Updatable {

	constructor(type) {
		this.type = type;
		this.db = {};
		this.just_upgraded = false;
	}

	init(just_upgraded) {
		this.just_upgraded = just_upgraded;
		return this._localFetcher().then(result => {
			return this.processList(result, true);
		}).catch(error => {
			(0, _common.log)('Updatable init() error', error);
		});
	}

	update(version, callback) {
		const opts = {
			remote: true,
			version: version,
			callback: callback
		};

		if (_underscore2.default.isFunction(version)) {
			opts.callback = version;
			delete opts.version;
		}

		this._loadList(opts);
	}

	_localFetcher() {
		return new Promise((resolve, reject) => {
			const memory = _Conf2.default[this.type],
			      version_property = this.type === 'bugs' || this.type === 'surrogates' ? 'version' : this.type + 'Version';

			if (!memory || !memory.hasOwnProperty(version_property)) {
				(0, _common.log)('fetching ' + this.type + ' from disk');

				(0, _utils.fetchLocalJSONResource)('databases/' + this.type + '.json').then(data => {
					(0, _common.log)('got data for ' + this.type + ' from disk', data);
					resolve(data);
				}).catch(error => {
					(0, _common.log)("Error fetching databases/" + this.type + ".json", error);
					reject(error);
				});
			} else {
				if (this.just_upgraded) {
					(0, _utils.fetchLocalJSONResource)('databases/' + this.type + '.json').then(disk => {
						if (disk[version_property] > memory[version_property]) {
							(0, _common.log)('fetching updated' + this.type + ' from disk');
							resolve(disk);
						} else {
							resolve(memory);
						}
					}).catch(error => {
						(0, _common.log)("Error fetching updated databases/" + this.type + ".json", error);
						reject(error);
					});
				} else {
					(0, _common.log)('fetching ' + this.type + ' from memory');
					resolve(memory);
				}
			}
		});
	}

	_remoteFetcher(callback) {
		(0, _common.log)('fetching ' + this.type + ' from remote');
		const UPDATE_URL = 'https://' + CDN_SUB_DOMAIN + '.ghostery.com/update/' + (this.type === 'bugs' ? 'v3/bugs' : this.type);

		(0, _utils.getJson)(UPDATE_URL).then(list => {
			callback(true, list);
		}).catch(error => {
			(0, _common.log)("Updatable _remoteFetcher() error", error);
			callback(false);
		});
	}

	_loadList(options) {
		options = options || {};

		(0, _common.log)("LOCAL VERSION, SERVER VERSION", this.db.version, options.version);

		if (this.db.version && options.version && options.version <= this.db.version) {
			if (options.callback) {
				options.callback({
					'success': true,
					'updated': false
				});
			}
			_Conf2.default[this.type + '_last_updated'] = new Date().getTime();

			return;
		}

		this._remoteFetcher(_underscore2.default.bind(function (result, list) {
			if (result && list) {
				const data = this.processList(list);
				if (data) {
					_Conf2.default[this.type + '_last_updated'] = new Date().getTime();
					if (options.callback) {
						options.callback({ 'success': true, 'updated': true });
					}
				} else {
					(0, _common.log)('Updatable _loadList() error calling processList()');
					if (options.callback) {
						options.callback({ 'success': false, 'updated': false });
					}
				}
			} else {
				if (options.callback) {
					options.callback({ 'success': false, 'updated': false });
				}
			}
		}, this));
	}
}

exports.default = Updatable;
module.exports = exports['default'];

},{"../utils/common":39,"../utils/utils":42,"./Conf":24,"./Globals":30,"underscore":14}],37:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.setLoginInfo = setLoginInfo;
exports.getLoginInfo = getLoginInfo;
exports.buildUserSettings = buildUserSettings;
exports.pullUserSettings = pullUserSettings;
exports.pushUserSettings = pushUserSettings;
exports.sendVerificationEmail = sendVerificationEmail;
exports.setLoginInfoFromAuthCookie = setLoginInfoFromAuthCookie;

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _Globals = require('../classes/Globals');

var _Globals2 = _interopRequireDefault(_Globals);

var _Conf = require('../classes/Conf');

var _Conf2 = _interopRequireDefault(_Conf);

var _common = require('./common');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let refreshTimeout;

const GHOSTERY_DOMAIN = _Globals2.default.GHOSTERY_DOMAIN,
      API_ROOT_URL = `https://consumerapi.${GHOSTERY_DOMAIN}.com`,
      VERIFICATION_URL = `https://signon.${GHOSTERY_DOMAIN}.com/register/verify/`,
      REDIRECT_URL = `https://extension.${GHOSTERY_DOMAIN}.com/${_Conf2.default.language}/settings/`,
      SIGNON_URL = `https://signon.${GHOSTERY_DOMAIN}.com/`,
      AUTH_COOKIE = "AUTH",
      REFRESH_OFFSET = 60000,
      LOGOUT_TIMEOUT = 604800000,
      GROUND_ZERO_TIME = new Date(0).getTime(),
      SYNC_SET = new Set(_Globals2.default.SYNC_ARRAY);

function setLoginInfo(message, fromCookie) {
	if (message.user_token && message.decoded_user_token) {
		const user_token = message.user_token,
		      decoded_user_token = message.decoded_user_token,
		      is_validated = typeof decoded_user_token.ClaimEmailAddressValidated === "string" && decoded_user_token.ClaimEmailAddressValidated.toLowerCase() === "true" ? true : false,
		      email = decoded_user_token.ClaimEmailAddress;

		_Conf2.default.login_info = {
			'logged_in': true,
			'email': email,
			'user_token': user_token,
			'decoded_user_token': decoded_user_token,
			'is_validated': is_validated
		};

		if (!fromCookie) {
			_setAuthCookie(SIGNON_URL, user_token, decoded_user_token);
		}

		_pullUserSettings().catch(err => {
			(0, _common.log)('setLoginInfo _pullUserSettings warning:', err);
		}).then(settings => {
			pushUserSettings({ conf: buildUserSettings() });
		});
	} else {
		_logOut();
	}
	return Promise.resolve(_Conf2.default.login_info);
}

function getLoginInfo() {
	return _refreshToken().then(wasRefreshed => {
		return _Conf2.default.login_info;
	}).catch(err => {
		_logOut();
		(0, _common.log)("getLoginInfo error:", err);
		return _Conf2.default.login_info;
	});
}

function buildUserSettings() {
	const settings = {};
	SYNC_SET.forEach(key => {
		settings[key] = _Conf2.default[key];
	});
	return settings;
}

function pullUserSettings() {
	return _refreshToken().then(wasUpdated => {
		return _pullUserSettings();
	}).catch(err => {
		return Promise.reject(err);
	});
}

function pushUserSettings(settings) {
	return _refreshToken().then(wasUpdated => {
		return _pushUserSettings(settings);
	}).catch(err => {
		(0, _common.log)("Token error:", err);
		return Promise.resolve(err);
	});
}

function sendVerificationEmail() {
	const login_info = _Conf2.default.login_info,
	      decoded_user_token = login_info.decoded_user_token,
	      email = login_info.email,
	      userId = decoded_user_token ? decoded_user_token.UserId : undefined;

	if (userId) {
		const params = {
			UserId: userId,
			RedirectUrlToAddCodeSuffixOn: VERIFICATION_URL,
			FooterUrl: VERIFICATION_URL,
			VerificationContinueUrl: REDIRECT_URL
		};
		const query = JSON.stringify(params);
		return (0, _utils.postJson)(API_ROOT_URL + '/api/Validation/Send', query).then(result => {
			(0, _common.log)('post api/Validation/Send successful', result);
			return {
				success: true,
				email: email
			};
		}).catch(e => {
			(0, _common.log)('Error: post api/Validation/Send failed', e);
			return Promise.reject({
				success: false,
				email: email
			});
		});
	} else {
		(0, _common.log)('post api/Validation/Send do nothing when user is not logged in');
		return Promise.resolve({
			success: false,
			email: email
		});
	}
}

function setLoginInfoFromAuthCookie(url) {
	const urlArray = ["https://extension.ghostery.com", "https://extension.ghosterystage.com", "http://extension.ghosterydev.com", "https://signon.ghostery.com", "https://signon.ghosterystage.com", "https://account.ghostery.com", "https://account.ghosterystage.com"],
	      urlArraySize = urlArray.length;

	let urlArrayIndex = 0;

	function doCookie(cookie) {
		return new Promise((resolve, reject) => {
			user_token = cookie.value;
			if (user_token) {
				const decoded_user_token = (0, _common.decodeJwt)(user_token).payload,
				      is_validated = typeof decoded_user_token.ClaimEmailAddressValidated === "string" && decoded_user_token.ClaimEmailAddressValidated.toLowerCase() === "true" ? true : false,
				      email = decoded_user_token.ClaimEmailAddress;

				(0, _common.log)("setLoginInfoFromAuthCookie: AUTH cookie found. Decoded user token:", decoded_user_token);
				_Conf2.default.login_info = {
					'logged_in': true,
					'email': email,
					'user_token': user_token,
					'decoded_user_token': decoded_user_token,
					'is_validated': is_validated
				};

				_refreshToken().then(wasRefreshed => {
					if (wasRefreshed) {
						_setAuthCookie(url, user_token, decoded_user_token);
					}
					resolve();
				});
			} else {
				reject();
			}
		}).catch(err => {
			(0, _common.log)("doCookie error:", err);
			return Promise.reject(err);
		});
	}

	function getCookie(url) {
		return new Promise((resolve, reject) => {
			chrome.cookies.get({ url: url, name: AUTH_COOKIE }, cookie => {
				if (cookie) {
					return doCookie(cookie).then(result => {
						reject(result);
					}).catch(err => {
						resolve();
					});
				} else {
					resolve();
				}
			});
		});
	}

	function processCookie() {
		if (urlArrayIndex < urlArraySize) {
			return getCookie(urlArray[urlArrayIndex++]).then(() => {
				return processCookie();
			});
		} else {
			return Promise.reject(false);
		}
	}

	const login_info = _Conf2.default.login_info,
	      logged_in = login_info.logged_in || false,
	      is_validated = login_info.is_validated || false;

	let decoded_user_token = login_info.decoded_user_token,
	    user_token = login_info.user_token;

	if (logged_in && is_validated) {
		return _refreshToken().then(wasRefreshed => {
			if (wasRefreshed) {
				_setAuthCookie(url, user_token, decoded_user_token);
			}
		});
	} else {
		return processCookie().catch(result => {
			if (result === false) {
				(0, _common.log)('NO COOKIES');
				return Promise.resolve(false);
			} else {
				(0, _common.log)('COOKIE FOUND', result);
				return Promise.resolve(true);
			}
		});
	}
}

function _logOut() {
	_Conf2.default.login_info = {
		'logged_in': false,
		'email': '',
		'user_token': '',
		'decoded_user_token': {},
		'is_validated': false
	};

	_deleteAuthCookie();
	return _Conf2.default.login_info;
}

function _getExpirationTimeout() {
	const decoded_user_token = _Conf2.default.login_info.decoded_user_token;
	if (decoded_user_token && decoded_user_token.exp) {
		const currentTime = new Date().getTime();
		const tokenExpTime = decoded_user_token.exp * 1000;
		return tokenExpTime - currentTime;
	}

	return GROUND_ZERO_TIME;
}

function _refreshLoginInfo() {
	const login_info = _Conf2.default.login_info;
	if (!login_info.logged_in) {
		(0, _utils.sendMessageToPanel)('onLoginInfoUpdated', _logOut());
		return Promise.resolve('User not logged in');
	}

	let decoded_user_token = login_info.decoded_user_token;
	if (!decoded_user_token || !decoded_user_token.RefreshToken) {
		(0, _utils.sendMessageToPanel)('onLoginInfoUpdated', _logOut());
		return Promise.reject("decoded_user_token or decoded_user_token.RefreshToken is null.");
	}

	const params = {
		"RefreshToken": decoded_user_token.RefreshToken,
		"ClientId": "1",
		"ClientSecret": "1"
	},
	      query = JSON.stringify(params);

	return (0, _utils.postJson)(API_ROOT_URL + '/api/Login/Refresh', query).then(response => {
		(0, _common.log)('Refresh call succeeded', response);
		const user_token = response.Token;
		if (user_token) {
			decoded_user_token = (0, _common.decodeJwt)(user_token).payload;
			(0, _common.log)("Setting login info in PREFS on Refresh:", decoded_user_token);

			let is_validated = decoded_user_token.ClaimEmailAddressValidated;
			is_validated = typeof is_validated === "string" && is_validated.toLowerCase() === "true" ? true : false;

			_Conf2.default.login_info = {
				'logged_in': true,
				'email': decoded_user_token.ClaimEmailAddress,
				'user_token': user_token,
				'decoded_user_token': decoded_user_token,
				'is_validated': is_validated
			};

			(0, _common.log)("GOT REFRESHED LOGIN INFO", _Conf2.default.login_info);

			_setAuthCookie(SIGNON_URL, user_token, decoded_user_token);
			(0, _utils.sendMessageToPanel)('onLoginInfoUpdated', _Conf2.default.login_info);
			return Promise.resolve();
		} else {
			(0, _utils.sendMessageToPanel)('onLoginInfoUpdated', _logOut());
			return Promise.reject('Refresh call returned null user_token');
		}
	}).catch(err => {
		(0, _common.log)('_refreshLoginInfo', err);
		_logOut();
		(0, _utils.sendMessageToPanel)('onLoginInfoUpdated', _logOut());
		return Promise.reject(err);
	});
}

function _pullUserSettings() {
	const login_info = _Conf2.default.login_info;
	if (login_info.logged_in) {
		const user_token = login_info.user_token,
		      decoded_user_token = login_info.decoded_user_token,
		      userId = decoded_user_token ? decoded_user_token.UserId : undefined;
		if (user_token && userId) {
			return (0, _utils.getJson)(API_ROOT_URL + '/api/Sync/' + userId, { "Authorization": "Bearer " + user_token }).then(settings => {
				settings = settings || {};
				settings = settings.SettingsJson;
				try {
					settings = settings ? JSON.parse(settings) : {};
				} catch (e) {
					return Promise.reject('Corrupted settings');
				}
				(0, _common.log)("***********PULL USER SETTINGS", settings);
				SYNC_SET.forEach(key => {
					if (settings[key] !== undefined && !_underscore2.default.isEqual(_Conf2.default[key], settings[key])) {
						_Conf2.default[key] = settings[key];
					}
				});
				return settings;
			}).catch(err => {
				return Promise.reject('_pullUserSettings error', err);
			});
		} else {
			return Promise.reject('_pullUserSettings: corrupted token');
		}
	} else {
		return Promise.resolve({});
	}
}

function _pushUserSettings(settings) {
	const login_info = _Conf2.default.login_info,
	      logged_in = login_info.logged_in,
	      user_token = login_info.user_token,
	      decoded_user_token = login_info.decoded_user_token,
	      userId = decoded_user_token ? decoded_user_token.UserId : undefined;
	if (logged_in && user_token && userId) {
		(0, _common.log)("***********PUSH USER SETTINGS");
		const query = '{"SettingsJson":' + '\'' + JSON.stringify(settings.conf) + '\'}';
		return (0, _utils.postJson)(API_ROOT_URL + '/api/Sync/' + userId, query, { "Authorization": "Bearer " + user_token }).catch(err => {
			(0, _common.log)('Error: post api/Sync failed in _pushUserSettings', err);
			return Promise.reject("_pushUserSettings error:", err);
		});
	} else {
		return Promise.resolve();
	}
}

function _setAuthCookie(url, user_token, decoded_user_token) {
	_refreshToken().then(wasRefreshed => {
		const expiredIn = _getExpirationTimeout();
		const epochExpirationTime = Math.floor((new Date().getTime() + expiredIn) / 1000);

		chrome.cookies.set({
			url: url,
			name: AUTH_COOKIE,
			domain: `${GHOSTERY_DOMAIN}.com`,
			path: "/",
			value: user_token,
			expirationDate: epochExpirationTime
		}, function (cookie) {
			if (chrome.runtime.lastError) {
				(0, _common.log)("_setAuthCookie error:", chrome.runtime.lastError, url);
			}
		});
	}).catch(err => {
		(0, _common.log)('_setAuthCookie error:', err);
	});
}

function _deleteAuthCookie() {
	const urls = ['https://extension.ghostery.com', 'https://extension.ghosterystage.com', 'https://signon.ghostery.com', 'https://signon.ghosterystage.com', 'https://account.ghostery.com', 'https://account.ghosterystage.com', 'http://extension.ghosterydev.com'];
	urls.forEach(function (url) {
		chrome.cookies.remove({
			url: url,
			name: "AUTH"
		}, function (details) {
			if (!details) {
				(0, _common.log)("Could not find AUTH cookie");
			}
		});
	});
}

function _refreshToken() {
	return new Promise((resolve, reject) => {
		if (!_Conf2.default.login_info.logged_in) {
			resolve("User not logged in");
		}

		const decoded_user_token = _Conf2.default.login_info.decoded_user_token;
		if (!decoded_user_token || !decoded_user_token.exp) {
			reject("User token is corrupted or null");
		}

		const currentTime = new Date().getTime();
		const tokenExpTime = decoded_user_token.exp * 1000;
		if (currentTime > tokenExpTime && currentTime >= LOGOUT_TIMEOUT + tokenExpTime) {
			(0, _utils.sendMessageToPanel)('onLoginInfoUpdated', _logOut());
			(0, _common.log)("_refreshToken: user token is over a week old. Logging out...");
			reject("_refreshToken: user token is over a week old. Logging out...");
		} else {
			if (tokenExpTime < currentTime + REFRESH_OFFSET) {
				_refreshLoginInfo().then(() => {
					(0, _utils.sendMessageToPanel)('onLoginInfoUpdated', _Conf2.default.login_info);
					resolve(true);
				}).catch(err => {
					(0, _utils.sendMessageToPanel)('onLoginInfoUpdated', _logOut());
					(0, _common.log)("_refreshToken: refresh token failed", err);
					reject(err);
				});
			} else {
				resolve(false);
			}
		}
	});
}

},{"../classes/Conf":24,"../classes/Globals":30,"./common":39,"./utils":42,"underscore":14}],38:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.buildC2P = buildC2P;
exports.buildRedirectC2P = buildRedirectC2P;
exports.allowAllwaysC2P = allowAllwaysC2P;

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _BugDb = require('../classes/BugDb');

var _BugDb2 = _interopRequireDefault(_BugDb);

var _Click2PlayDb = require('../classes/Click2PlayDb');

var _Click2PlayDb2 = _interopRequireDefault(_Click2PlayDb);

var _Conf = require('../classes/Conf');

var _Conf2 = _interopRequireDefault(_Conf);

var _Globals = require('../classes/Globals');

var _Globals2 = _interopRequireDefault(_Globals);

var _Policy = require('../classes/Policy');

var _Policy2 = _interopRequireDefault(_Policy);

var _TabInfo = require('../classes/TabInfo');

var _TabInfo2 = _interopRequireDefault(_TabInfo);

var _common = require('./common');

var _utils = require('./utils');

var _click2play = require('../../app/templates/precompiled/click2play');

var _click2play2 = _interopRequireDefault(_click2play);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const t = chrome.i18n.getMessage,
      policy = new _Policy2.default();

function buildC2P(details, app_id) {
	const tab_id = details.tab_id;
	let c2pApp = _Click2PlayDb2.default.db.apps && _Click2PlayDb2.default.db.apps[app_id];

	if (!c2pApp) {
		return;
	}

	if (!_Conf2.default.enable_click2play_social) {
		c2pApp = _underscore2.default.reject(c2pApp, function (c2pAppDef) {
			return !!c2pAppDef.button;
		});
	}

	if (!c2pApp.length) {
		return;
	}
	const app_name = _BugDb2.default.db.apps[app_id].name,
	      c2pHtml = [],
	      tab_host = _TabInfo2.default.getTabInfo(tab_id, 'host'),
	      blacklisted = policy.blacklisted(tab_host) ? true : false,
	      promises = [];

	for (let i = 0; i < c2pApp.length; i++) {
		if (c2pApp[i].button) {
			let url = 'app/images/click2play/' + c2pApp[i].button;
			url = url.replace('.png', '.data');
			promises.push(_getImage(url));
		}
	}

	promises.push(_getImage('app/images/click2play/ghosty_blocked.data'));
	promises.push(_getImage('app/images/click2play/allow_unblock.data'));
	promises.push(_getImage('app/images/click2play/allow_once.data'));

	Promise.all(promises).catch(err => {
		(0, _common.log)("buildC2P error", err);
		return;
	}).then(() => {
		c2pApp.forEach(function (c2pAppDef) {
			const tplData = {
				blacklisted: blacklisted,
				button: !!c2pAppDef.button,
				ghostery_blocked_src: _Conf2.default.ghosty_blocked_data,
				allow_always_src: _Conf2.default.allow_unblock_data,
				allow_always_title: t('click2play_allow_always_tooltip')
			};

			if (c2pAppDef.button) {
				tplData.allow_once_title = t('click2play_allow_once_button_tooltip', app_name);
				let url = 'app/images/click2play/' + c2pAppDef.button;
				url = url.replace('.png', '.data');
				const conf_prop = url.slice(url.lastIndexOf('/') + 1).replace('.', '_');
				tplData.allow_once_src = _Conf2.default[conf_prop];
			} else {
				tplData.allow_once_title = t('click2play_allow_once_tooltip');
				tplData.allow_once_src = _Conf2.default.allow_once_data;

				tplData.ghostery_blocked_title = t('click2play_blocked', app_name);

				if (c2pAppDef.type) {
					tplData.click2play_text = t('click2play_' + c2pAppDef.type + '_form', app_name);
				} else {
					if (app_id === 2575) {
						tplData.click2play_text = t('click2play_blocked', app_name);
					}
				}
			}

			c2pHtml.push((0, _click2play2.default)(tplData));
		});

		if (app_id === 2575) {
			c2pApp.ele = _getHubspotFormSelector(details.url);
		}

		_injectClickToPlay(tab_id).then(result => {
			if (result) {
				(0, _utils.sendMessage)(tab_id, 'c2p', {
					app_id: app_id,
					data: c2pApp,
					html: c2pHtml
				});
			}
		});
	});
}

function buildRedirectC2P(requestId, redirectUrls, app_id) {
	const host_url = (0, _utils.processUrl)(redirectUrls.url).host,
	      redirect_url = (0, _utils.processUrl)(redirectUrls.redirectUrl).host,
	      app_name = _BugDb2.default.db.apps[app_id].name;

	_Globals2.default.BLOCKED_REDIRECT_DATA = {};
	_Globals2.default.BLOCKED_REDIRECT_DATA.app_id = app_id;
	_Globals2.default.BLOCKED_REDIRECT_DATA.url = redirectUrls.redirectUrl;
	_Globals2.default.BLOCKED_REDIRECT_DATA.blacklisted = policy.blacklisted(host_url) ? true : false;

	_Globals2.default.BLOCKED_REDIRECT_DATA.translations = {
		blocked_redirect_page_title: t('blocked_redirect_page_title'),
		blocked_redirect_prevent: t('blocked_redirect_prevent', [host_url, redirect_url, app_name, 'https://' + _Globals2.default.APPS_SUB_DOMAIN + '.ghostery.com/' + _Conf2.default.language + '/apps/' + encodeURIComponent(app_name.replace(/\s+/g, '_').toLowerCase())]),
		blocked_redirect_action_always_title: t('blocked_redirect_action_always_title'),
		blocked_redirect_action_through_once_title: t('blocked_redirect_action_through_once_title'),
		blocked_redirect_url_content: t('blocked_redirect_url_content', [redirectUrls.redirectUrl, app_name])
	};
	return chrome.extension.getURL('app/templates/blocked_redirect.html');
}

function allowAllwaysC2P(app_id, tab_host) {
	const selected_app_ids = _Conf2.default.selected_app_ids;
	delete selected_app_ids[app_id];
	_Conf2.default.selected_app_ids = selected_app_ids;

	if (_Conf2.default.site_specific_blocks.hasOwnProperty(tab_host) && _Conf2.default.site_specific_blocks[tab_host].includes(+app_id)) {
		const index = _Conf2.default.site_specific_blocks[tab_host].indexOf(+app_id);
		const site_specific_blocks = _Conf2.default.site_specific_blocks;
		site_specific_blocks[tab_host].splice(index);
		_Conf2.default.site_specific_blocks = site_specific_blocks;
	}

	const site_specific_unblocks = _Conf2.default.site_specific_unblocks;
	if (!site_specific_unblocks.hasOwnProperty(tab_host)) {
		site_specific_unblocks[tab_host] = [];
	}
	if (!site_specific_unblocks[tab_host].includes(app_id)) {
		site_specific_unblocks[tab_host].push(app_id);
	}
	_Conf2.default.site_specific_unblocks = site_specific_unblocks;
}

function _getHubspotFormSelector(url) {
	const tokens = url.substr(8).split(/\/|\&|\?|\#|\=/ig);
	return "form[id=\"hsForm_" + tokens[5] + "\"]";
}

function _injectClickToPlay(tab_id) {
	if (_Globals2.default.C2P_LOADED) {
		return Promise.resolve(true);
	}

	const tab = _TabInfo2.default.getTabInfo(tab_id);
	if (!tab || tab.prefetched || _Globals2.default.EXCLUDES.includes(tab.host)) {
		return Promise.resolve(true);
	}

	return (0, _utils.injectScript)(tab_id, 'dist/click_to_play.js', '', 'document_end').then(() => {
		_Globals2.default.C2P_LOADED = true;
		return true;
	}).catch(err => {
		(0, _common.log)('_injectClickToPlay error', err);
		return false;
	});
}

function _getImage(imgURL) {
	const url = chrome.extension.getURL(imgURL);
	const conf_prop = url.slice(url.lastIndexOf('/') + 1).replace('.', '_');
	return (0, _utils.fetchLocalImageResource)(url).then(result => {
		_Conf2.default[conf_prop] = result;
		return true;
	}).catch(err => {
		(0, _common.log)(`click2play _getImage error: ${err}`);
		return false;
	});
}

},{"../../app/templates/precompiled/click2play":1,"../classes/BugDb":20,"../classes/Click2PlayDb":22,"../classes/Conf":24,"../classes/Globals":30,"../classes/Policy":32,"../classes/TabInfo":35,"./common":39,"./utils":42,"underscore":14}],39:[function(require,module,exports){
(function (Buffer){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.log = log;
exports.pref = pref;
exports.prefsGet = prefsGet;
exports.prefsSet = prefsSet;
exports.hashCode = hashCode;
exports.objectEntries = objectEntries;
exports.decodeJwt = decodeJwt;


const DEBUG = chrome.runtime.getManifest().debug || false;
const LOG = chrome.runtime.getManifest().log || false;

function log(...args) {
	if (!LOG) {
		return false;
	}

	const hasErrors = args.toString().toLowerCase().includes('error');

	args.unshift(new Date().toLocaleTimeString() + '\t');

	if (hasErrors) {
		console.error(...args);
	} else {
		console.log(...args);
	}
}

function pref(key, value) {
	if (typeof value === 'undefined') {
		return prefsGet(key);
	} else {
		const valueObj = {};
		valueObj[key] = value;
		return prefsSet(valueObj);
	}
}

function prefsGet(...args) {
	return new Promise(function (resolve, reject) {
		chrome.storage.local.get(args, function (items) {
			if (chrome.runtime.lastError) {
				log("prefsGet ERROR", chrome.runtime.lastError);
				reject(new Error(chrome.runtime.lastError));
			} else {
				let result = null;
				if (args.length === 1) {
					const key = args[0];
					if (items && items.hasOwnProperty(key)) {
						result = items[key];
					}
				} else {
					result = {};
					args.forEach(function (key) {
						result[key] = null;
						if (items && items.hasOwnProperty(key)) {
							result[key] = items[key];
						}
					});
				}
				resolve(result);
			}
		});
	});
}

function prefsSet(prefs) {
	return new Promise(function (resolve, reject) {
		if (typeof prefs !== 'undefined') {
			chrome.storage.local.set(prefs, function () {
				if (chrome.runtime.lastError) {
					log("prefsSet ERROR", chrome.runtime.lastError);
					reject(new Error(chrome.runtime.lastError));
				} else {
					resolve(prefs);
				}
			});
		} else {
			log("prefsSet ERROR", chrome.runtime.lastError);
			reject(new Error(chrome.runtime.lastError));
		}
	});
}

function hashCode(str) {
	let hash = 0,
	    character,
	    i;

	if (str.length === 0) {
		return hash;
	}

	for (i = 0; i < str.length; i++) {
		character = str.charCodeAt(i);
		hash = (hash << 5) - hash + character;
		hash = hash & hash;
	}

	return hash;
}

function* objectEntries(obj) {
	const propKeys = Object.keys(obj);

	for (let propKey of propKeys) {
		yield [propKey, obj[propKey]];
	}
}

function decodeJwt(token) {
	const segments = token.split('.');

	if (segments.length !== 3) {
		return null;
	}

	const headerSeg = segments[0];
	const payloadSeg = segments[1];
	const signatureSeg = segments[2];

	const header = JSON.parse(_base64urlDecode(headerSeg));
	const payload = JSON.parse(_base64urlDecode(payloadSeg));

	return {
		header: header,
		payload: payload,
		signature: signatureSeg
	};
}

function _base64urlDecode(str) {
	return new Buffer(_base64urlUnescape(str), 'base64').toString();
}

function _base64urlUnescape(str) {
	str += new Array(5 - str.length % 4).join('=');
	return str.replace(/\-/g, '+').replace(/_/g, '/');
}

}).call(this,require("buffer").Buffer)

},{"buffer":3}],40:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.isBug = isBug;
exports.fuzzyUrlMatcher = fuzzyUrlMatcher;

var _BugDb = require('../classes/BugDb');

var _BugDb2 = _interopRequireDefault(_BugDb);

var _Conf = require('../classes/Conf');

var _Conf2 = _interopRequireDefault(_Conf);

var _utils = require('./utils');

var _common = require('./common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isBug(src, tab_url) {
	const db = _BugDb2.default.db;
	let found = false;

	src = (0, _utils.processUrl)(src);

	found = _matchesHost(db.patterns.host_path, src.host, src.path) || _matchesHost(db.patterns.host, src.host) || _matchesPath(src.path) || _matchesRegex(src.host_with_path);

	if (typeof tab_url !== 'undefined') {
		if (_Conf2.default.ignore_first_party && found !== false && db.firstPartyExceptions[found] && fuzzyUrlMatcher(tab_url, db.firstPartyExceptions[found])) {
			return false;
		}
	}

	return found;
}

function fuzzyUrlMatcher(url, urls) {
	let parsed = (0, _utils.processUrl)(url),
	    tab_host = parsed.host;

	const tab_path = parsed.path;

	if (tab_host.startsWith('www.')) {
		tab_host = tab_host.slice(4);
	}

	for (let i = 0; i < urls.length; i++) {
		parsed = (0, _utils.processUrl)(urls[i]);
		const host = parsed.host,
		      path = parsed.path;

		if (host !== tab_host) {
			continue;
		}

		if (!path) {
			(0, _common.log)('[fuzzyUrlMatcher] host (' + host + ') match');
			return true;
		}

		if (path.slice(-1) === '*') {
			if (tab_path.startsWith(path.slice(0, -1))) {
				(0, _common.log)('[fuzzyUrlMatcher] host (' + host + ') and path (' + path + ') fuzzy match');
				return true;
			}
		} else {
			if (path === tab_path) {
				(0, _common.log)('[fuzzyUrlMatcher] host (' + host + ') and path (' + path + ') match');
				return true;
			}
		}
	}
}

function _matchesHostPath(roots, src_path) {
	let root, paths, i, j;

	for (i = 0; i < roots.length; i++) {
		root = roots[i];
		if (!root.hasOwnProperty('$')) {
			continue;
		}

		paths = root.$;
		for (j = 0; j < paths.length; j++) {
			if (src_path.startsWith(paths[j].path)) {
				return paths[j].id;
			}
		}
	}

	return false;
}

function _matchesHost(root, src_host, src_path) {
	const host_rev_arr = src_host.split('.').reverse(),
	      nodes_with_paths = [];
	let host_part,
	    node = root,
	    bug_id = false;

	for (let i = 0; i < host_rev_arr.length; i++) {
		host_part = host_rev_arr[i];

		if (node.hasOwnProperty(host_part)) {
			node = node[host_part];
			bug_id = node.hasOwnProperty('$') ? node.$ : bug_id;

			if (src_path !== undefined && node.hasOwnProperty('$')) {
				nodes_with_paths.push(node);
			}
		} else {
			if (src_path !== undefined) {
				return _matchesHostPath(nodes_with_paths, src_path);
			}

			return bug_id;
		}
	}

	if (src_path !== undefined) {
		return _matchesHostPath(nodes_with_paths, src_path);
	}

	return bug_id;
}

function _matchesRegex(src) {
	const regexes = _BugDb2.default.db.patterns.regex;

	for (let bug_id in regexes) {
		if (regexes[bug_id].test(src)) {
			return +bug_id;
		}
	}

	return false;
}

function _matchesPath(src_path) {
	const paths = _BugDb2.default.db.patterns.path;

	src_path = '/' + src_path;

	for (let path in paths) {
		if (src_path.includes(path)) {
			return paths[path];
		}
	}

	return false;
}

},{"../classes/BugDb":20,"../classes/Conf":24,"./common":39,"./utils":42}],41:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ping = ping;
exports.buildMetricsUrl = buildMetricsUrl;
exports.setUninstallUrl = setUninstallUrl;

var _Globals = require('../classes/Globals');

var _Globals2 = _interopRequireDefault(_Globals);

var _Conf = require('../classes/Conf');

var _Conf2 = _interopRequireDefault(_Conf);

var _common = require('./common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FREQUENCIES = {
	daily: 86400000,
	weekly: 604800000,
	biweekly: 1209600000,
	monthly: 2419200000
},
      CRITICAL_METRICS = ['install_success', 'install', 'upgrade', 'active', 'engaged', 'uninstall'],
      METRICS_SUB_DOMAIN = _Globals2.default.METRICS_SUB_DOMAIN,
      EXTENSION_VERSION = _Globals2.default.EXTENSION_VERSION,
      BROWSER_INFO = _Globals2.default.BROWSER_INFO,
      IS_EDGE = BROWSER_INFO.name === 'edge';

function ping(type) {
	switch (type) {
		case 'install_success':
			_sendReq('install_success');
			break;
		case 'install':
			_recordInstall();
			break;
		case 'upgrade':
			_recordUpgrade();
			break;
		case 'active':
			_recordActive();
			break;
		case 'engaged':
			_sendReq('engaged', ['daily', 'weekly', 'monthly']);
			break;

		case 'pause':
			_sendReq('pause', ['all', 'daily', 'weekly']);
			break;
		case 'resume':
			_sendReq('resume', ['all', 'daily', 'weekly']);
			break;
		case 'create_start':
			_sendReq('create_start', ['all', 'daily', 'weekly']);
			break;
		case 'create_finish':
			_sendReq('create_finish', ['all', 'daily', 'weekly']);
			break;
		case 'trust_site':
			_sendReq('trust_site', ['all', 'daily', 'weekly']);
			break;
		case 'restrict_site':
			_sendReq('restrict_site', ['all', 'daily', 'weekly']);
			break;
		case 'live_scan':
			_sendReq('live_scan', ['all', 'daily', 'weekly']);
			break;
		case 'local_settings':
			_sendReq('local_settings', ['all', 'daily', 'weekly']);
			break;
		case 'sign_in':
			_sendReq('sign_in', ['all', 'daily', 'weekly']);
			break;

		case 'opt_in_ext':
			_sendReq('opt_in_ext');
			break;
		case 'opt_out_ext':
			_sendReq('opt_out_ext');
			break;
		case 'opt_in_human_web':
			_sendReq('opt_in_human_web');
			break;
		case 'opt_out_human_web':
			_sendReq('opt_out_human_web');
			break;
		case 'create_modal':
			_sendReq('create_modal');
			break;
		case 'tour_start':
			_sendReq('tour_start');
			break;

		case 'advertising_blocked':
			_sendReq('advertising_blocked');
			break;
		case 'site_analytics_blocked':
			_sendReq('analytics_blocked');
			break;
		case 'customer_interaction_blocked':
			_sendReq('ci_blocked');
			break;
		case 'social_media_blocked':
			_sendReq('social_blocked');
			break;
		case 'essential_blocked':
			_sendReq('essential_blocked');
			break;
		case 'audio_video_player_blocked':
			_sendReq('audio_video_blocked');
			break;
		case 'pornvertising_blocked':
			_sendReq('adult_blocked');
			break;
		case 'comments_blocked':
			_sendReq('comments_blocked');
			break;

		default:
			(0, _common.log)('metrics ping() error: ping name ' + type + ' not found');
			break;
	}
}

function buildMetricsUrl(type, frequency) {
	const frequencyString = type !== 'uninstall' ? '/' + frequency : '';

	return 'https://' + METRICS_SUB_DOMAIN + '.ghostery.com/' + type + frequencyString + '?gr=' + (_Conf2.default.ghostrank_dismissed ? _Conf2.default.ghostrank ? '1' : '0' : '2') + '&hw=' + encodeURIComponent(IS_EDGE ? '2' : _Conf2.default.enable_human_web ? '1' : '0') + '&offers=' + encodeURIComponent(_Conf2.default.enable_offers ? '1' : '0') + '&v=' + encodeURIComponent(EXTENSION_VERSION) + '&install_rand=' + encodeURIComponent(_Conf2.default.install_random_number) + '&signed_in=' + (_Conf2.default.login_info.logged_in ? '1' : '0') + '&install_date=' + encodeURIComponent(_Conf2.default.install_date) + '&noncritical=' + (_Conf2.default.enable_metrics ? '1' : '0') + '&purplebox=' + (_Conf2.default.show_alert ? _Conf2.default.alert_expanded ? '1' : '2' : '0') + '&show_cmp=' + (_Conf2.default.show_cmp ? '1' : '0') + '&ua=' + encodeURIComponent(BROWSER_INFO.token) + '&os=' + encodeURIComponent(BROWSER_INFO.os) + '&l=' + encodeURIComponent(_Conf2.default.language);
}

function setUninstallUrl(key) {
	if (typeof chrome.runtime.setUninstallURL === 'function') {
		const METRICS_URL_SET = new Set(['ghostrank', 'enable_human_web', 'login_info', 'enable_metrics', 'show_alert', 'alert_expanded', 'show_cmp']);

		if (!key || METRICS_URL_SET.has(key)) {
			const metrics_url = buildMetricsUrl('uninstall');
			if (metrics_url.length) {
				chrome.runtime.setUninstallURL(metrics_url);
			}
		}
	}
}

function _sendReq(type, frequencies) {
	if (typeof frequencies === 'undefined') {
		frequencies = ['all'];
	}

	if (!IS_EDGE && typeof fetch === 'function') {
		var headers = new Headers();
		headers.append("Content-Type", "image/gif");

		var options = {
			headers: headers,
			referrerPolicy: "no-referrer",
			credentials: "omit",
			type: "image"
		};
	}

	frequencies.forEach(frequency => {
		if (_checkPing(type, frequency)) {
			const timeNow = Number(new Date().getTime()),
			      metrics_url = buildMetricsUrl(type, frequency);

			const metrics = _Conf2.default.metrics || {};
			metrics[type + '_' + frequency] = timeNow;
			_Conf2.default.metrics = metrics;

			(0, _common.log)(`sending ${type} ping with ${frequency} frequency`);

			if (!IS_EDGE && typeof fetch === 'function') {
				const request = new Request(metrics_url, options);
				fetch(request).catch(err => {
					(0, _common.log)(`Error sending Metrics ${type} ping`, err);
				});
			} else {
				const xhr = new XMLHttpRequest();
				xhr.open("GET", metrics_url, true);
				xhr.setRequestHeader("Content-Type", "image/gif");
				xhr.send();
			}
		}
	});
}

function _timeToExpired(type, frequency) {
	if (frequency === 'all') {
		return 0;
	} else {
		const result = _Conf2.default.metrics[type + '_' + frequency];
		const last = result === undefined ? 0 : result,
		      now = Number(new Date().getTime()),
		      frequency_ago = now - FREQUENCIES[frequency];
		return last === null ? 0 : last - frequency_ago;
	}
}

function _checkPing(type, frequency) {
	const result = _timeToExpired(type, frequency);
	if (result > 0) {
		return false;
	}
	if (!CRITICAL_METRICS.includes(type) && !_Conf2.default.enable_metrics) {
		return false;
	}
	return true;
}

function _recordInstall() {
	if (_Conf2.default.metrics.install_all) {
		return;
	}
	_sendReq('install');
}

function _recordUpgrade() {
	const metrics = _Conf2.default.metrics;
	metrics.install_all = Number(new Date().getTime());
	_Conf2.default.metrics = metrics;
	_sendReq('upgrade');
}

function _recordActive() {
	const daily = _timeToExpired('active', 'daily');
	if (daily > 0) {
		setTimeout(function () {
			_sendReq('active', ['daily']);
			setInterval(function () {
				_sendReq('active', ['daily']);
			}, FREQUENCIES.daily);
		}, daily);
	} else {
		_sendReq('active', ['daily']);
		setInterval(function () {
			_sendReq('active', ['daily']);
		}, FREQUENCIES.daily);
	}

	const weekly = _timeToExpired('active', 'weekly');
	if (weekly > 0) {
		setTimeout(function () {
			_sendReq('active', ['weekly']);
			setInterval(function () {
				_sendReq('active', ['weekly']);
			}, FREQUENCIES.weekly);
		}, weekly);
	} else {
		_sendReq('active', ['weekly']);
		setInterval(function () {
			_sendReq('active', ['weekly']);
		}, FREQUENCIES.weekly);
	}

	const monthly = _timeToExpired('active', 'monthly');
	if (monthly > 0) {
		if (monthly <= FREQUENCIES.biweekly) {
			setTimeout(() => {
				_sendReq('active', ['monthly']);
				_repeat();
			}, monthly);
		} else {
			setTimeout(() => {
				setTimeout(() => {
					_sendReq('active', ['monthly']);
					_repeat();
				}, monthly - FREQUENCIES.biweekly);
			}, FREQUENCIES.biweekly);
		}
	} else {
		_sendReq('active', ['monthly']);
		_repeat();
	}
}

function _repeat() {
	let flag = false;
	setInterval(() => {
		if (flag) {
			_sendReq('active', ['monthly']);
		}
		flag = !flag;
	}, FREQUENCIES.biweekly);
}

},{"../classes/Conf":24,"../classes/Globals":30,"./common":39}],42:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.flushChromeMemoryCache = undefined;
exports.sendMessage = sendMessage;
exports.sendMessageToFrame = sendMessageToFrame;
exports.broadcastMessage = broadcastMessage;
exports.sendMessageToPanel = sendMessageToPanel;
exports.isValidTopLevelNavigation = isValidTopLevelNavigation;
exports.defineLazyProperty = defineLazyProperty;
exports.processUrl = processUrl;
exports.getTab = getTab;
exports.getActiveTab = getActiveTab;
exports.openNewTab = openNewTab;
exports.postJson = postJson;
exports.getJson = getJson;
exports.fetchLocalImageResource = fetchLocalImageResource;
exports.fetchLocalJSONResource = fetchLocalJSONResource;
exports.injectScript = injectScript;
exports.injectNotifications = injectNotifications;
exports.isCliqzOffer = isCliqzOffer;
exports.indexedDBEnabled = indexedDBEnabled;
exports.domStorageEnabled = domStorageEnabled;
exports.transferLegacyKeys = transferLegacyKeys;

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _TabInfo = require('../classes/TabInfo');

var _TabInfo2 = _interopRequireDefault(_TabInfo);

var _Globals = require('../classes/Globals');

var _Globals2 = _interopRequireDefault(_Globals);

var _common = require('./common');

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BROWSER_INFO = _Globals2.default.BROWSER_INFO,
      IS_FIREFOX = BROWSER_INFO.name === 'firefox',
      IS_EDGE = BROWSER_INFO.name === 'edge';

function sendMessage(tab_id, name, message, callback) {
	(0, _common.log)("BACKGROUND SENT " + name + " TO TAB");
	const fallback = function () {};
	callback = callback ? callback : fallback;
	chrome.tabs.sendMessage(tab_id, {
		name: name,
		message: message
	}, callback);
}

function sendMessageToFrame(tab_id, frame_id, name, message, callback) {
	(0, _common.log)("BACKGROUND SENT " + name + " TO TAB " + tab_id + " - FRAME " + frame_id);
	const fallback = function () {};
	callback = callback ? callback : fallback;
	chrome.tabs.sendMessage(tab_id, {
		name: name,
		message: message
	}, {
		frameId: frame_id
	}, callback);
}

function broadcastMessage(name, message, settings_page_tab_id) {
	(0, _common.log)("IN BROADCAST MESSAGE", name, message, settings_page_tab_id);
	chrome.tabs.query({ url: `https://extension.${_Globals2.default.GHOSTERY_DOMAIN}.com/*settings*` }, tabs => {
		tabs.forEach(tab => {
			if (tab && tab.id && tab.id != settings_page_tab_id) {
				sendMessage(tab.id, name, message);
			}
		});
	});
}
function sendMessageToPanel(name, message) {
	(0, _common.log)("BACKGROUND SENDS MESSAGE TO PANEL", name);
	chrome.runtime.sendMessage({ name: name, message: message });
}

function isValidTopLevelNavigation(details) {
	const url = details.url;

	return details.frameId === 0 && details.tabId > 0 && url.startsWith('http') && !url.startsWith('https://chrome.google.com/webstore/');
}

const flushChromeMemoryCache = exports.flushChromeMemoryCache = _underscore2.default.debounce(function () {
	chrome.webRequest.handlerBehaviorChanged();
}, 1000 * 35, true);

function defineLazyProperty(obj, prop, callback) {
	let value,
	    isSet = false;

	Object.defineProperty(obj, prop, {
		get: function () {
			if (!isSet) {
				value = callback();
				isSet = true;
			}

			return value;
		},

		set: function (val) {
			value = val;
			isSet = true;
		}
	});
}

function processUrl(src) {
	if (!src) {
		return {};
	}
	const res = _url2.default.parse(src);
	const index = res.href ? res.href.indexOf('?') : -1;

	return {
		protocol: res.protocol ? res.protocol.substr(0, res.protocol.length - 1) : '',
		host: res.hostname || '',
		path: res.pathname ? res.pathname.substr(1) : '',
		host_with_path: (res.host || '') + (res.pathname || ''),
		anchor: res.hash ? res.hash.substr(1) : '',

		host_with_path_cleaned: index >= 0 ? res.href.slice(0, index) : res.href
	};
}
function getTab(tab_id, callback, error) {
	chrome.tabs.get(tab_id, function (tab) {
		if (chrome.runtime.lastError) {
			(0, _common.log)("getTab", chrome.runtime.lastError.message);
			if (error && typeof error === 'function') {
				error(chrome.runtime.lastError);
			}
		} else {
			if (tab && typeof callback === 'function') {
				callback(tab);
			}
		}
	});
}

function getActiveTab(callback) {
	chrome.tabs.query({
		active: true,
		currentWindow: true }, function (tabs) {
		callback(tabs[0]);
	});
}

function _openNewTab(data) {
	getActiveTab(function (tab) {
		if (tab) {
			chrome.tabs.create({
				url: data.url,
				active: data.become_active || false,
				openerTabId: tab.id,
				index: tab.index + 1
			});
		} else {
			chrome.tabs.create({
				url: data.url,
				active: data.become_active || false
			});
		}
	});
}
function openNewTab(data) {
	if (IS_FIREFOX) {
		chrome.tabs.create({
			url: data.url,
			active: data.become_active || false
		});
	} else {
		if (data.tab_id) {
			chrome.tabs.get(data.tab_id, tab => {
				if (tab) {
					chrome.tabs.create({
						url: data.url,
						active: data.become_active || false,
						openerTabId: tab.id,
						index: tab.index + 1,
						windowId: tab.windowId
					});
				} else {
					_openNewTab(data);
				}
			});
		} else {
			_openNewTab(data);
		}
	}
}

function postJson(url, query, extraHeaders) {
	return _fetchJson('POST', url, query, extraHeaders).catch(function (error) {
		(0, _common.log)('postJson error', error);
		return Promise.reject(error);
	});
}

function getJson(url, extraHeaders) {
	return _fetchJson('GET', url, null, extraHeaders).catch(function (error) {
		(0, _common.log)('getJson error', error);
		return Promise.reject(error);
	});
}

function fetchLocalImageResource(url) {
	if (!IS_EDGE && typeof fetch === 'function') {
		return fetch(url, {
			type: 'image'
		}).then(response => {
			if (!response.ok) {
				return Promise.reject(new Error(`Failed to fetchLocalImageResource ${url} with status ${response.status} (${response.statusText})`));
			}
			return response.text();
		}).catch(err => {
			(0, _common.log)(`fetchLocalImageResource error: ${err}`);
			return Promise.reject(new Error(err));
		});
	} else {
		return new Promise(function (resolve, reject) {
			const xhr = new XMLHttpRequest();
			xhr.onload = function () {
				if (xhr.status >= 200 && xhr.status < 400) {
					resolve(xhr.responseText);
				} else {
					(0, _common.log)("fetchLocalImageResource error", xhr.statusText);
					reject(new Error(xhr.statusText));
				}
			};

			xhr.onerror = function (error) {
				(0, _common.log)('fetchLocalImageResource network error', error);
				reject(new Error(error));
			};

			(0, _common.log)("fetchLocalImageResource request", url);
			xhr.open('GET', url, true);
			xhr.overrideMimeType("image/png");
			xhr.send();
		});
	}
}

function fetchLocalJSONResource(url) {
	if (!IS_EDGE && typeof fetch === 'function') {
		return fetch(url).then(response => {
			if (!response.ok) {
				return Promise.reject(new Error(`Failed to fetchLocalJSONResource ${url} with status ${response.status} (${response.statusText})`));
			}
			return response.json();
		}).catch(err => {
			(0, _common.log)(`fetchLocalJSONResource error: ${err}`);
			return Promise.reject(new Error(err));
		});
	} else {
		return new Promise(function (resolve, reject) {
			const xhr = new XMLHttpRequest();
			xhr.onload = function () {
				if (xhr.status >= 200 && xhr.status < 400) {
					try {
						resolve(xhr.responseText ? JSON.parse(xhr.responseText) : {});
					} catch (err) {
						(0, _common.log)('fetchLocalJSONResource error', err);
						reject(new Error(err));
					}
				} else {
					(0, _common.log)("fetchLocalJSONResource error", xhr.statusText);
					reject(new Error(xhr.statusText));
				}
			};

			xhr.onerror = function (error) {
				(0, _common.log)('fetchLocalJSONResource network error', error);
				reject(new Error(error));
			};

			(0, _common.log)("fetchLocalJSONResource request", url);
			xhr.open('GET', url, true);
			xhr.overrideMimeType("image/png");
			xhr.send();
		});
	}
}

function injectScript(tabId, scriptfile, cssfile, runAt) {
	return new Promise((resolve, reject) => {
		chrome.tabs.executeScript(tabId, { file: scriptfile, runAt: runAt }, result => {
			if (chrome.runtime.lastError) {}
			if (cssfile) {
				chrome.tabs.insertCSS(tabId, { file: cssfile, runAt: runAt }, () => {
					if (chrome.runtime.lastError) {}
					resolve();
				});
			} else {
				resolve();
			}
		});
	});
}

function injectNotifications(tab_id, importExport = false) {
	if (_Globals2.default.NOTIFICATIONS_LOADED) {
		return Promise.resolve(true);
	}
	const tab = _TabInfo2.default.getTabInfo(tab_id);

	if (tab && tab.prefetched === true || tab.path.includes("_/chrome/newtab") || !importExport && _Globals2.default.EXCLUDES.includes(tab.host)) {
		return Promise.resolve(false);
	}

	return injectScript(tab_id, 'dist/notifications.js', '', 'document_start').then(() => {
		_Globals2.default.NOTIFICATIONS_LOADED = true;
		return true;
	}).catch(err => {
		(0, _common.log)('injectNotifications error', err);
		return false;
	});
}

function isCliqzOffer(offer) {
	return offer && offer.origin === 'cliqz' && offer.type === 'offers' && offer.data;
}

function indexedDBEnabled() {
	try {
		window.indexedDB;
		return true;
	} catch (err) {
		return false;
	}
}

function domStorageEnabled() {
	try {
		localStorage.setItem('test', true);
		localStorage.removeItem('test');
		return true;
	} catch (e) {
		return false;
	}
}

function transferLegacyKeys(localConf) {
	(0, _common.log)("TRANSFER LEGACY KEYS");

	if (!window.navigator.cookieEnabled) {
		(0, _common.log)('transferLegacyKeys Error: localStorage not available. Cookies may be disabled');
		return false;
	}

	for (let [key, value] of (0, _common.objectEntries)(localStorage)) {
		try {
			value = value && JSON.parse(value);
		} catch (e) {
			(0, _common.log)("FAILED TO PARSE THE VALUE FOR KEY", key);
			continue;
		}

		if (!localConf.hasOwnProperty(key)) {
			if (key === 'selected_bug_ids') {
				(0, _common.log)("THIS KEY IS TRANSFERRED", key);
				localConf.selected_app_ids = value;
			}
			(0, _common.log)("THIS KEY IS NOT TRANSFERRED", key);
		} else {
			if (key !== 'bugs' && key !== 'click2play' && key !== 'compatibility' && key !== 'surrogates' && key !== 'tags') {

				(0, _common.log)("THIS KEY IS TRANSFERRED", key);

				if (key === 'ghostrank') {
					localConf[key] = value === 2 ? false : value;
				} else if (key === 'alert_bubble_timeout') {
					value = Number(value);
					localConf[key] = value > 30 ? 30 : value;
				} else {
					localConf[key] = value;
				}
			}
		}

		localStorage.removeItem(key);
	}
}

function _fetchJson(method, url, query, extraHeaders, referrer = 'no-referrer', credentials = 'omit') {
	if (!IS_EDGE && typeof fetch === 'function') {
		const headers = new Headers({
			"Content-Type": "application/json",
			"Accept": "application/json"
		});
		if (extraHeaders) {
			for (let [key, value] of (0, _common.objectEntries)(extraHeaders)) {
				headers.append(key, value);
			}
		}
		let options = {
			method: method,
			headers: headers,
			body: query,
			referrerPolicy: referrer,
			credentials: credentials
		};
		if (method === 'GET' || method === 'HEAD') {
			delete options.body;
		}

		const request = new Request(url, options);
		return fetch(request).then(response => {
			const contentType = response.headers.get("content-type");
			if (!response.ok) {
				return Promise.reject(new Error(`Failed to fetch ${url} with status ${response.status} (${response.statusText})`));
			}

			if (response.status === 204) {
				return false;
			} else if (contentType && contentType.includes("application/json")) {
				return response.json();
			} else if (contentType && contentType.includes("text/html")) {
				return response.text();
			} else {
				return response.text();
			}
		}).then(data => {
			if (typeof data === 'string' && data.includes('{')) {
				try {
					(0, _common.log)("_fetchJson resolved", data ? JSON.parse(data) : {});

					return data ? JSON.parse(data) : {};
				} catch (err) {
					(0, _common.log)('_fetchJson error', err);
					return Promise.reject(new Error(err));
				}
			} else {
				return data;
			}
		}).catch(err => {
			(0, _common.log)(`_fetchJson Error: ${err}`);
			return Promise.reject(new Error(err));
		});
	} else {
		return new Promise(function (resolve, reject) {
			const xhr = new XMLHttpRequest();

			xhr.onload = function () {
				if (xhr.status >= 200 && xhr.status < 400) {
					if (xhr.status === 204) {
						resolve(false);
					} else if (xhr.responseText.includes('{')) {
						try {
							(0, _common.log)("_fetchJson resolved", xhr.responseText ? JSON.parse(xhr.responseText) : {});

							resolve(xhr.responseText ? JSON.parse(xhr.responseText) : {});
						} catch (err) {
							(0, _common.log)('_fetchJson error', err);
							reject(new Error(err));
						}
					} else {
						resolve(xhr.responseText);
					}
				} else {
					(0, _common.log)("_fetchJson error", xhr.statusText);
					reject(new Error(xhr.statusText));
				}
			};

			xhr.onerror = function (error) {
				(0, _common.log)('_fetchJson network error', error);
				reject(new Error(error));
			};

			(0, _common.log)("_fetchJson request", method, url, query, extraHeaders);
			xhr.open(method, url, true);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.setRequestHeader("Accept", "application/json");
			if (extraHeaders) {
				for (let [key, value] of (0, _common.objectEntries)(extraHeaders)) {
					xhr.setRequestHeader(key, value);
				}
			}
			xhr.overrideMimeType("application/json");
			xhr.send(query);
		});
	}
}

},{"../classes/Globals":30,"../classes/TabInfo":35,"./common":39,"underscore":14,"url":15}],43:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function shouldEnableModule(e){var o="modules."+e+".enabled";return!_prefs2.default.has(o)||_prefs2.default.get(o)===!0}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,o){for(var n=0;n<o.length;n++){var t=o[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(o,n,t){return n&&e(o.prototype,n),t&&e(o,t),o}}(),_config=require("./config"),_config2=_interopRequireDefault(_config),_events=require("./events"),_events2=_interopRequireDefault(_events),_prefs=require("./prefs"),_prefs2=_interopRequireDefault(_prefs),_appModule=require("./app/module"),_appModule2=_interopRequireDefault(_appModule),_kord=require("./kord"),_console=require("./console"),_console2=_interopRequireDefault(_console),_utils=require("./utils"),_utils2=_interopRequireDefault(_utils),_platformBrowser=require("../platform/browser"),_default=function(){function e(){var o=this,n=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=n.version,r=n.extensionId;_classCallCheck(this,e),this.version=t,this.extensionId=r,this.availableModules=Object.create(null),_config2.default.modules.forEach(function(e){o.availableModules[e]=new _appModule2.default(e,Object.assign({},_config2.default.settings,{version:t}))}),_utils2.default.app=this,_utils2.default.extensionVersion=t,(0,_kord.setGlobal)(this),this.prefchangeEventListener=(0,_events.subscribe)("prefchange",this.onPrefChange,this)}return _createClass(e,[{key:"extensionRestart",value:function(e){var o=this;return(0,_platformBrowser.forEachWindow)(function(e){e.CLIQZ&&e.CLIQZ.Core&&o.unloadWindow(e)}),this.unload(),e&&e(),this.load().then(function(){var e=[];return(0,_platformBrowser.forEachWindow)(function(n){e.push(o.loadWindow(n))}),Promise.all(e)})}},{key:"unloadFromWindow",value:function(e,o){if((0,_platformBrowser.mustLoadWindow)(e))try{this.unloadWindow(e,o);var n=0;(0,_platformBrowser.forEachWindow)(function(){n+=1}),_events2.default.pub("core.window_closed",{remaining:n})}catch(e){(0,_platformBrowser.reportError)(e)}}},{key:"loadIntoWindow",value:function(e){var o=this;e&&(0,_platformBrowser.waitWindowReady)(e).then(function(){return(0,_platformBrowser.mustLoadWindow)(e)?o.loadWindow(e):null}).catch(function(e){_console2.default.log(e,"Extension filed loaded window modules")})}},{key:"start",value:function(){var e=this;_utils2.default.FEEDBACK_URL=""+_utils2.default.FEEDBACK+this.version+"-"+_config2.default.settings.channel;var o=this.load().catch(function(e){_utils2.default.log(e,"Extension -- failed to init CLIQZ App")});return this.availableModules.core.isReady().then(function(){(0,_platformBrowser.enableChangeEvents)(),e.windowWatcher=function(o,n){"opened"===n?e.loadIntoWindow(o):"closed"===n&&e.unloadFromWindow(o)},(0,_platformBrowser.addWindowObserver)(e.windowWatcher),(0,_platformBrowser.forEachWindow)(function(o){e.loadIntoWindow(o)})}),o}},{key:"stop",value:function(e,o,n){var t=this;return _utils2.default.telemetry({type:"activity",action:n},!0),o&&"40"===_config2.default.settings.channel&&(o=!1),e?void this.unload({quick:!0}):((0,_platformBrowser.forEachWindow)(function(e){t.unloadFromWindow(e,{disable:o})}),this.unload(),o&&this.restorePrefs(),(0,_platformBrowser.removeWindowObserver)(this.windowWatcher),void(0,_platformBrowser.disableChangeEvents)())}},{key:"modules",value:function e(){var e=this.availableModules;return Object.keys(e).map(function(o){return e[o]})}},{key:"enabledModules",value:function(){var e=this;return _config2.default.modules.map(function(o){return e.availableModules[o]}).filter(function(e){return e.isEnabled})}},{key:"setupPrefs",value:function(){(0,_platformBrowser.setInstallDatePref)(this.extensionId),"development"===_config2.default.environment&&_prefs2.default.set("developer",!0),(0,_platformBrowser.setOurOwnPrefs)(),"default_prefs"in _config2.default&&Object.keys(_config2.default.default_prefs).forEach(function(e){_prefs2.default.has(e)||(_console2.default.log("App","set up preference",'"'+e+'"'),_prefs2.default.set(e,_config2.default.default_prefs[e]))})}},{key:"restorePrefs",value:function(){(0,_platformBrowser.resetOriginalPrefs)()}},{key:"loadModule",value:function(e){try{return e.isEnabled?Promise.resolve():e.enable().catch(function(o){return _console2.default.error("App","Error on loading module:",e.name,o)})}catch(o){return _console2.default.error("App module:",'"'+e.name+'"'," -- something went wrong",o),Promise.resolve()}}},{key:"load",value:function(){var e=this;_console2.default.log("App","Loading modules started"),this.setupPrefs();var o=this.modules(),n=o.find(function(e){return"core"===e.name}),t=o.filter(function(e){return"core"!==e.name&&shouldEnableModule(e.name)});return n.preload(),t.forEach(function(e){return e.preload()}),this.loadModule(n).then(function(){return Promise.all(t.map(function(o){return e.loadModule(o)}))}).then(function(){_console2.default.log("App","Loading modules -- all loaded")}).catch(function(e){_console2.default.error("App","Loading modules failed",e)})}},{key:"unload",value:function(){var e=arguments.length<=0||void 0===arguments[0]?{quick:!1}:arguments[0],o=e.quick;this.prefchangeEventListener.unsubscribe(),_console2.default.log("App","unload background modules"),this.enabledModules().reverse().forEach(function(e){try{_console2.default.log("App","unload background module: ",e.name),e.disable({quick:o})}catch(o){_console2.default.error("Error unloading module: "+e.name,o)}}),_console2.default.log("App","unload background modules finished")}},{key:"loadWindow",value:function(e){var o=this;if(!e.CLIQZ){var n={app:this,Core:{windowModules:{}}};"object"==typeof System&&(n.System=System),Object.defineProperty(e,"CLIQZ",{configurable:!0,value:n})}var t=this.modules().find(function(e){return"core"===e.name}),r=this.modules().filter(function(e){return"core"!==e.name});return t.loadWindow(e).then(function(){return r.filter(function(e){return e.isLoading})}).then(function(o){return Promise.all(o.map(function(o){return o.loadWindow(e).catch(function(e){return _console2.default.error("App","error loading window module",o.name,e)})}))}).then(function(){_console2.default.log("App","Window loaded"),o.isFullyLoaded=!0}).catch(function(e){_console2.default.error("App window","Error loading (should not happen!)",e)})}},{key:"unloadWindow",value:function(e,o){_console2.default.log("App window","unload window modules"),this.enabledModules().reverse().forEach(function(n){try{n.unloadWindow(e,o)}catch(e){_console2.default.error("App window","error on unload module "+n.name,e)}}),delete e.CLIQZ}},{key:"onPrefChange",value:function(e){if(e.startsWith("modules.")){var o=e.split(".");if("enabled"===o.pop()){var n=_prefs2.default.get(e)===!0,t=o.pop(),r=this.availableModules[t];r&&(n!==!0||r.isEnabled?n===!1&&r.isEnabled&&this.disableModule(r.name):this.enableModule(r.name))}}}},{key:"enableModule",value:function(e){var o=this.availableModules[e];return o.isEnabled?Promise.resolve():o.isLoading?o.isReady():(o.preload(),o.enable(),Promise.all((0,_platformBrowser.mapWindows)(o.loadWindow.bind(o))).then(function(){_prefs2.default.set("modules."+e+".enabled",!0)}))}},{key:"disableModule",value:function(e){var o=this.availableModules[e];return o.isEnabled?((0,_platformBrowser.forEachWindow)(o.unloadWindow.bind(o)),o.disable(),_prefs2.default.set("modules."+e+".enabled",!1),Promise.resolve()):Promise.resolve()}}]),e}();exports.default=_default,module.exports=exports.default;

},{"../platform/browser":118,"./app/module":44,"./config":50,"./console":51,"./events":54,"./kord":60,"./prefs":64,"./utils":70}],44:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function prepareBackgroundReadyPromise(){var e=this;this.backgroundReadyPromise=new Promise(function(o,n){e.backgroundReadyPromiseResolver=o,e.backgroundReadyPromiseRejecter=n})}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,o){for(var n=0;n<o.length;n++){var i=o[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(o,n,i){return n&&e(o.prototype,n),i&&e(o,i),o}}(),_platformBrowser=require("../../platform/browser"),_console=require("../console"),_console2=_interopRequireDefault(_console),_modules=require("./modules"),_modules2=_interopRequireDefault(_modules),Module=function(){function e(o,n){_classCallCheck(this,e),this.name=o,this.isEnabled=!1,this.isLoading=!1,this.loadingTime=null,this.settings=n,this.windows=Object.create(null),prepareBackgroundReadyPromise.call(this)}return _createClass(e,[{key:"isReady",value:function(){return this.backgroundReadyPromise}},{key:"preload",value:function(){this.isLoading=!0}},{key:"enable",value:function(){var e=this;_console2.default.log("Module",this.name,"start loading");var o=Date.now();if(this.isEnabled)throw new Error("Module already enabled");if(!this.isLoading)throw new Error("Module not flagged as loading");return Promise.resolve(this.backgroundModule).then(function(o){return e.background=o,o.init(e.settings)}).then(function(){e.isEnabled=!0,e.loadingTime=Date.now()-o,_console2.default.log("Module: ",e.name," -- Background loaded"),e.backgroundReadyPromiseResolver()}).catch(function(o){throw e.backgroundReadyPromiseRejecter(o),o})}},{key:"disable",value:function(){var e=arguments.length<=0||void 0===arguments[0]?{quick:!1}:arguments[0],o=e.quick;_console2.default.log("Module",this.name,"start unloading");var n=this.background;if(o){var i=n.beforeBrowserShutdown||function(){};i.call(n)}else n.unload(),this.isEnabled=!1,this.isLoading=!1,this.loadingTime=null,prepareBackgroundReadyPromise.call(this);_console2.default.log("Module",this.name,"unloading finished")}},{key:"loadWindow",value:function(e){var o=this;if(!this.isLoading)return Promise.reject("cannot load window of disabled module");var n=void 0,i=void 0,t=new Promise(function(e,o){n=e,i=o}),a=new _platformBrowser.Window(e);if(this.windows[a.id])return _console2.default.log("Module window:",'"'+this.name+'"',"already loaded"),Promise.resolve();var r=e;r.CLIQZ.Core.windowModules[this.name]=!0,this.windows[a.id]={loadingPromise:t},_console2.default.log("Module window:",'"'+this.name+'"',"loading started");var d=Date.now(),l=this.settings;return Promise.resolve(this.windowModule).then(function(n){return new n({settings:l,window:e,background:o.backgroundModule})}).then(function(e){return a.window.CLIQZ.Core.windowModules[o.name]=e,o.isReady().then(function(){return e.init()}).then(function(){return e})}).then(function(e){o.windows[a.id]={loadingTime:Date.now()-d},a.window.CLIQZ.Core.windowModules[o.name]=e,n()}).catch(function(e){throw i(e),e})}},{key:"unloadWindow",value:function(e){var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],n=o.disable,i=new _platformBrowser.Window(e),t=e.CLIQZ.Core.windowModules[this.name];t&&(n&&t.disable&&(_console2.default.log("Module window",'"'+this.name+'"',"disabling"),e.CLIQZ.Core.windowModules[this.name].disable()),_console2.default.log("Module window",'"'+this.name+'"',"unloading"),e.CLIQZ.Core.windowModules[this.name].unload(),delete i.window.CLIQZ.Core.windowModules[this.name],delete this.windows[i.id],_console2.default.log("Module window",'"'+this.name+'"',"unloading finished"))}},{key:"status",value:function(){return{isEnabled:this.isEnabled}}},{key:"backgroundModule",get:function(){return _modules2.default[this.name].Background}},{key:"windowModule",get:function(){return _modules2.default[this.name].Window}}]),e}();exports.default=Module,module.exports=exports.default;

},{"../../platform/browser":118,"../console":51,"./modules":45}],45:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _coreIndex=require("../../core/index"),_coreIndex2=_interopRequireDefault(_coreIndex),_messageCenterIndex=require("../../message-center/index"),_messageCenterIndex2=_interopRequireDefault(_messageCenterIndex),_hpnIndex=require("../../hpn/index"),_hpnIndex2=_interopRequireDefault(_hpnIndex),_staticIndex=require("../../static/index"),_staticIndex2=_interopRequireDefault(_staticIndex),_offersV2Index=require("../../offers-v2/index"),_offersV2Index2=_interopRequireDefault(_offersV2Index);exports.default={core:_coreIndex2.default,"message-center":_messageCenterIndex2.default,hpn:_hpnIndex2.default,static:_staticIndex2.default,"offers-v2":_offersV2Index2.default},module.exports=exports.default;

},{"../../core/index":59,"../../hpn/index":76,"../../message-center/index":89,"../../offers-v2/index":101,"../../static/index":145}],46:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(exports,"__esModule",{value:!0});var _slice=Array.prototype.slice,_events=require("./events"),_events2=_interopRequireDefault(_events),_utils=require("./utils"),_utils2=_interopRequireDefault(_utils),_console=require("./console"),_console2=_interopRequireDefault(_console),_language=require("./language"),_language2=_interopRequireDefault(_language),_config=require("./config"),_config2=_interopRequireDefault(_config),_platformProcessScriptManager=require("../platform/process-script-manager"),_platformProcessScriptManager2=_interopRequireDefault(_platformProcessScriptManager),_prefs=require("./prefs"),_prefs2=_interopRequireDefault(_prefs),_baseBackground=require("./base/background"),_baseBackground2=_interopRequireDefault(_baseBackground),_platformBrowser=require("../platform/browser"),_resourceManager=require("./resource-manager"),_resourceManager2=_interopRequireDefault(_resourceManager),_kordInject=require("./kord/inject"),_kordInject2=_interopRequireDefault(_kordInject),lastRequestId=0,callbacks={};exports.default=(0,_baseBackground2.default)({init:function(e){this.settings=e,this.utils=_utils2.default,_utils2.default.CliqzLanguage=_language2.default,this.dispatchMessage=this.dispatchMessage.bind(this),_utils2.default.bindObjectFunctions(this.actions,this),this.mm=new _platformProcessScriptManager2.default(this.dispatchMessage),this.mm.init(),_resourceManager2.default.init()},unload:function(){this.mm.unload(),_resourceManager2.default.unload()},reportStartupTime:function(){var e=this.actions.status();_utils2.default.telemetry({type:"startup",modules:e.modules})},dispatchMessage:function(e){"number"==typeof e.data.requestId?e.data.requestId in callbacks&&this.handleResponse(e):this.handleRequest(e)},handleRequest:function(e){var t,n=this,a=e.data.payload;if(a){var r=a.action,o=a.module,u=a.args,l=a.requestId,i=e.data.windowId,s=e.data.origin,c=_utils2.default.app.availableModules[o];return c?void(t=_kordInject2.default.module(o)).action.apply(t,[r].concat(_toConsumableArray(u||[]))).then(function(e){n.mm.broadcast("window-"+i,{origin:s,response:e,action:r,module:o,requestId:l})}).catch(_console2.default.error.bind(null,"Process Script",o+"/"+r)):void _console2.default.error("Process Script",o+"/"+r,"Module not available")}},handleResponse:function(e){callbacks[e.data.requestId].apply(null,[e.data.payload])},getWindowStatusFromModules:function(e){return _config2.default.modules.map(function(t){var n=e.CLIQZ.Core.windowModules[t];return n&&n.status?n.status():null})},events:{"core:tab_select":function(e){var t=e.url,n=e.isPrivate;_events2.default.pub("core.location_change",t,n)},"content:location-change":function(e){var t=e.url,n=e.isPrivate;_events2.default.pub("core.location_change",t,n)}},actions:{notifyLocationChange:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];_events2.default.pub.apply(_events2.default,["content:location-change"].concat(t))},notifyStateChange:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=t[0];_events2.default.pub("content:state-change",{url:a.urlSpec,originalUrl:a.originalUrl,triggeringUrl:a.triggeringUrl,windowTreeInformation:a.windowTreeInformation}),_events2.default.pub.apply(_events2.default,["core.tab_state_change"].concat(t))},recordMouseDown:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];_events2.default.pub.apply(_events2.default,["core:mouse-down"].concat(t))},recordKeyPress:function(){_events2.default.pub.apply(_events2.default,["core:key-press"].concat(_slice.call(arguments)))},recordMouseMove:function(){_events2.default.pub.apply(_events2.default,["core:mouse-move"].concat(_slice.call(arguments)))},recordScroll:function(){_events2.default.pub.apply(_events2.default,["core:scroll"].concat(_slice.call(arguments)))},recordCopy:function(){_events2.default.pub.apply(_events2.default,["core:copy"].concat(_slice.call(arguments)))},publishEvent:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];_events2.default.pub.apply(_events2.default,[e].concat(n))},restart:function(){return _utils2.default.app.extensionRestart()},status:function(){var e=_utils2.default.app.availableModules,t=_config2.default.modules.reduce(function(t,n){var a=e[n],r=(0,_platformBrowser.mapWindows)(function(e){return new _platformBrowser.Window(e)}),o=r.reduce(function(e,t){var n=a.windows[t.id]||{};return e[t.id]={loadingTime:n.loadingTime},e},Object.create(null));return t[n]={name:a.name,isEnabled:a.isEnabled,loadingTime:a.loadingTime,windows:o},t},Object.create(null));return{modules:t}},broadcast:function(e,t){this.mm.broadcast(e,t)},broadcastMessageToWindow:function(e,t,n){this.mm.broadcast("window-"+t,{payload:e,module:n})},broadcastMessage:function(e,t){this.mm.broadcast("cliqz:core",{action:"postMessage",url:e,args:[JSON.stringify(t)]})},getWindowStatus:function(e){return Promise.all(this.getWindowStatusFromModules(e)).then(function(e){var t={};return e.forEach(function(e,n){t[_config2.default.modules[n]]=e||null}),t})},sendTelemetry:function(e){return _utils2.default.telemetry(e),Promise.resolve()},refreshPopup:function(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];if(""!==e.trim())return this.actions.queryCliqz(e);var t=_utils2.default.getWindow().document,n=t.getElementById("urlbar"),a=t.getAnonymousElementByAttribute(n,"anonid","historydropmarker");setTimeout(function(){a.click()},0)},queryCliqz:function(e){var t=_utils2.default.getWindow().document.getElementById("urlbar");t.mInputField.setUserInput(""),t.focus(),t.mInputField.focus(),t.mInputField.setUserInput(e)},closePopup:function(){var e=_utils2.default.getWindow().CLIQZ.Core.popup;e.hidePopup()},setUrlbar:function(e){var t=_utils2.default.getWindow().document.getElementById("urlbar");t.mInputField.value=e},recordLang:function(e,t){return _events2.default.pub("content:dom-ready",e),t&&_language2.default.addLocale(e,t),Promise.resolve()},recordMeta:function(e,t){_events2.default.pub("core:url-meta",e,t)},openFeedbackPage:function(){var e=_utils2.default.getWindow(),t=_utils2.default.openLink(e,_utils2.default.FEEDBACK_URL,!0);e.gBrowser.selectedTab=t},enableModule:function(e){return _utils2.default.app.enableModule(e)},disableModule:function(e){_utils2.default.app.disableModule(e)},resizeWindow:function(e,t){_utils2.default.getWindow().resizeTo(e,t)},queryHTML:function(e,t,n){var a=lastRequestId++;return this.mm.broadcast("cliqz:core",{action:"queryHTML",url:e,args:[t,n],requestId:a}),new Promise(function(e,t){callbacks[a]=function(t){delete callbacks[a],e(t)},_utils2.default.setTimeout(function(){delete callbacks[a],t()},1e3)})},getHTML:function(e){var t=arguments.length<=1||void 0===arguments[1]?1e3:arguments[1],n=lastRequestId++,a=[];return this.mm.broadcast("cliqz:core",{action:"getHTML",url:e,args:[],requestId:n}),callbacks[n]=function(e){a.push(e)},new Promise(function(e){_utils2.default.setTimeout(function(){delete callbacks[n],e(a)},t)})},getCookie:function(e){var t=lastRequestId++;return this.mm.broadcast("cliqz:core",{action:"getCookie",url:e,args:[],requestId:t}),new Promise(function(e,n){callbacks[t]=function(n){delete callbacks[t],e(n)},_utils2.default.setTimeout(function(){delete callbacks[t],n()},1e3)})},getPref:function(e,t){return _prefs2.default.get(e,t)},setPref:function(e,t){_prefs2.default.set(e,t)}}}),module.exports=exports.default;

},{"../platform/browser":118,"../platform/process-script-manager":134,"./base/background":47,"./config":50,"./console":51,"./events":54,"./kord/inject":61,"./language":62,"./prefs":64,"./resource-manager":66,"./utils":70}],47:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _events=require("../events"),_events2=_interopRequireDefault(_events);exports.default=function(e){var t=Object.assign({},e),n=t.init,r=t.unload,u=t.events;return Object.keys(t.actions||{}).forEach(function(e){t.actions[e]=t.actions[e].bind(t)}),t.init=function(){for(var e=arguments.length,r=Array(e),o=0;o<e;o++)r[o]=arguments[o];var s=Promise.resolve(n.apply(t,r));return Object.keys(u||{}).forEach(function(e){u[e]=u[e].bind(t),_events2.default.sub(e,u[e])}),s},t.unload=function(){Object.keys(u||{}).forEach(function(e){_events2.default.un_sub(e,u[e])});for(var e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];r.apply(t,n)},t},module.exports=exports.default;

},{"../events":54}],48:[function(require,module,exports){
"use strict";function _interopExportWildcard(e,r){var t=r({},e);return delete t.default,t}function _defaults(e,r){for(var t=Object.getOwnPropertyNames(r),o=0;o<t.length;o++){var a=t[o],l=Object.getOwnPropertyDescriptor(r,a);l&&l.configurable&&void 0===e[a]&&Object.defineProperty(e,a,l)}return e}Object.defineProperty(exports,"__esModule",{value:!0});var _platformBrowser=require("../platform/browser");_defaults(exports,_interopExportWildcard(_platformBrowser,_defaults));

},{"../platform/browser":118}],49:[function(require,module,exports){
"use strict";function _interopRequire(e){return e&&e.__esModule?e.default:e}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _utils=require("./utils"),_utils2=_interopRequireDefault(_utils),_events=require("./events"),_events2=_interopRequireDefault(_events),_platformHistoryManager=require("../platform/history-manager");exports.historyManager=_interopRequire(_platformHistoryManager);var CliqzPromise=_utils2.default.Promise;exports.utils=_utils2.default,exports.events=_events2.default,exports.Promise=CliqzPromise;

},{"../platform/history-manager":128,"./events":54,"./utils":70}],50:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={platform:"chromium",brocfile:"node.Brocfile.js",baseURL:"/cliqz/",sourceMaps:!0,format:"common",settings:{channel:"CH80","triggers-root":"ghostery-root",CONFIG_PROVIDER:"https://safe-browsing.ghostery.com/config",ENDPOINT_BLIND_SIGNER:"https://ghostery-sign.ghostery.com/sign",ENDPOINT_USER_REG:"https://ghostery-sign.ghostery.com/register",ENDPOINT_SOURCE_MAP_PROVIDER:"https://ghostery-collector.ghostery.com/sourcemapjson",ENDPOINT_LOOKUP_TABLE_PROVIDER:"https://ghostery-collector.ghostery.com/lookuptable",ENDPOINT_KEYS_PROVIDER:"https://ghostery-collector.ghostery.com/signerKey",ENDPOINT_PROXY_LIST_PROVIDER:"https://ghostery-collector.ghostery.com/proxyList",ENDPOINT_PATTERNSURL:"https://safe-browsing.ghostery.com/patterns",ENDPOINT_ANONPATTERNSURL:"https://safe-browsing.ghostery.com/patterns-anon",ENDPOINT_CONFIGURL:"https://safe-browsing.ghostery.com/ts-config",ENDPOINT_SAFE_QUORUM_ENDPOINT:"https://safe-browsing-quorum.ghostery.com/",ENDPOINT_SAFE_QUORUM_PROVIDER:"https://safe-browsing-quorum.ghostery.com/config",MSGCHANNEL:"web-extension",KEY_DS_PUBKEY:"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwXo4hXvboKHCggNJ0UNFvZQfDWi0jNcF1kBHthxilMu6LB/hFrSMQ+/FgTqVE36cCezWE0K1UcwmYGVsuqxcvql82RfCmYUVBroJ3UFG8qnetYfU5FOk43C555p5l5HzlF8QilcCUBCO4SCj9lEZ3/8FJboCupTqxEUq7nwUgaNZOiGKMdDUBZJO1tW4LSH4lj9IAZccEJ5HKVmJKopQ3hmzWgDqowxni4NQz+0DnsSfCGAupKaJDxjfajJosX5i674rgdHbZGtgHB3M9jhc6HFNPcmtUgLwgtUtRwMhSnya6q/O06euouNi1h0m5eRrWeMRlJSdUnelLSU8QNy7LQIDAQAB",KEY_SECURE_LOGGER_PUBKEY:"MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAh5HhcRAn6+6woXQXl/NtZ+fOooNglZct/HSpYuqkcmrPauHW7EuOSq5bvpBZRTDROjR/kUPomqVZIzqhdCFPA8BwXSCz7hAel2Q157vtBvh9sngMMLXb5Fgzef5N4EuKO8pL5KrS+I9tfZac41vFJSdpgAirZYhh+tdcQQ1z0Qv/Rw0zOXjfvddCz3gEv2gB9KsLMVnTS1J4YOOgfza2adg9Ebz1z99DiF4vtCwn0IUwH/3ToTBwJLbMnC3Ol43yBNk8rgK2mkgCi614vOSD3hnVmio+iW6+AUklM8VPl6l7hEK9cljJY+9UsMVmTrvaFbMPwS6AdZCXKTmNdaMJcy3zSOXu5zvzihoQLwAu9LM3l2eVk0Mw0K7JXOP20fc8BtzWCOLYVP32r4R0BNuhTtvGqjHNZHPJN5OwaxkLpn2dujL9uDWGjRiOItKMVq/nOqmNGghrbf8IOaKT7VQhqOU4cXRkB/uF1UjYETBavwUZAxx9Wd/cMcAGmKiDxighxxQ29jDufl+2WG065tmJz+zCxmgrPh6Zb3KFUxPTe6yksAhWJhmGShA9v20t84M5c6NpZXoUsFcVja6XxzHeSB8dWq9Uu5QcZ83Gz/ronwdEjT2OGTtBgOFeTDqLYUgphC1gcUEHOCnTNXRMQOXqGwBfZHp+Mq61QcMq2rNS7xECAwEAAQ==",frameScriptWhitelist:[]},default_prefs:{offers2FeatureEnabled:!0,offersLogsEnabled:!1,showConsoleLogs:!1},modules:["core","message-center","hpn","static","offers-v2"],environment:"production",EXTENSION_VERSION:"7.17.1",instrumentFunctions:""},module.exports=exports.default;

},{}],51:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _platformConsole=require("../platform/console"),_platformConsole2=_interopRequireDefault(_platformConsole),_prefs=require("./prefs"),_prefs2=_interopRequireDefault(_prefs),isLoggingEnabled=_prefs2.default.get("showConsoleLogs",!1),log=void 0,error=void 0,debug=void 0;isLoggingEnabled?(log=_platformConsole2.default.log.bind(_platformConsole2.default,"CLIQZ"),error=_platformConsole2.default.error.bind(_platformConsole2.default,"CLIQZ error"),debug=_prefs2.default.get("developer")?log:function(){}):(log=function(){},error=function(){},debug=function(){}),exports.default={log:log,error:error,debug:debug},module.exports=exports.default;

},{"../platform/console":120,"./prefs":64}],52:[function(require,module,exports){
"use strict";function _interopRequireDefault(r){return r&&r.__esModule?r:{default:r}}function random(){var r=_platformCrypto2.default.getRandomValues(new Uint32Array(2));return(Math.pow(2,32)*(2097151&r[0])+r[1])/Math.pow(2,53)}function randomInt(){return Math.floor(random()*Number.MAX_SAFE_INTEGER)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=random,exports.randomInt=randomInt;var _platformCrypto=require("../../platform/crypto"),_platformCrypto2=_interopRequireDefault(_platformCrypto);

},{"../../platform/crypto":121}],53:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _platformDatabase=require("../platform/database"),_platformDatabase2=_interopRequireDefault(_platformDatabase);exports.default=_platformDatabase2.default,module.exports=exports.default;

},{"../platform/database":122}],54:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _console=require("./console"),_console2=_interopRequireDefault(_console),_utils=require("./utils"),_utils2=_interopRequireDefault(_utils),CliqzEvents=CliqzEvents||{cache:{},tickCallbacks:[],queue:[],pub:function(e){var n=this,t=Array.prototype.slice.call(arguments,1),i=(CliqzEvents.cache[e]||[]).map(function(n){return new Promise(function(i){_utils2.default.setTimeout(function(){try{n.apply(null,t)}catch(n){_console2.default.error("CliqzEvents error: "+e,n)}i()},0)})}),u=Promise.all(i).then(function(){var e=n.queue.indexOf(u);n.queue.splice(e,1),0===n.queue.length&&n.triggerNextTick()});this.queue.push(u)},triggerNextTick:function(){this.tickCallbacks.forEach(function(e){try{e()}catch(e){}}),this.tickCallbacks=[]},nextTick:function(){var e=arguments.length<=0||void 0===arguments[0]?function(){}:arguments[0];this.tickCallbacks=this.tickCallbacks||[],this.tickCallbacks.push(e)},sub:function(e,n){CliqzEvents.cache[e]=CliqzEvents.cache[e]||[],CliqzEvents.cache[e].push(n)},subscribe:function(e,n,t){var i=void 0;return i=t?n.bind(t):n,CliqzEvents.sub(e,i),{unsubscribe:function(){CliqzEvents.un_sub(e,i)}}},un_sub:function(e,n){if(!CliqzEvents.cache[e]||0===CliqzEvents.cache[e].length)return void _console2.default.error("Trying to unsubscribe event that had no subscribers");var t=CliqzEvents.cache[e].indexOf(n);t>-1?CliqzEvents.cache[e].splice(t,1):_console2.default.error("Trying to unsubscribe an unknown listener")},clean_channel:function(e){if(!CliqzEvents.cache[e])throw"Trying to unsubscribe an unknown channel";CliqzEvents.cache[e]=[]},proxyEvent:function(e,n,t,i,u){function s(){var e=u?u.apply(null,arguments):arguments;c.apply(null,e)}void 0===i&&(i=!1);var c=CliqzEvents.pub.bind(CliqzEvents,e);return n.addEventListener(t,s,i),{unsubscribe:function(){n.removeEventListener(t,s)}}},nextId:function e(){return e.id=e.id||0,e.id+=1,e.id}};exports.default=CliqzEvents;var subscribe=CliqzEvents.subscribe;exports.subscribe=subscribe;

},{"./console":51,"./utils":70}],55:[function(require,module,exports){
"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}Object.defineProperty(exports,"__esModule",{value:!0});var _platform=require("./platform"),_platformFs=require("../platform/fs"),fs=_interopRequireWildcard(_platformFs),notImplementedPromise=function(){return new Promise(function(){return(0,_platform.notImplemented)()})},readFile=fs.readFile||notImplementedPromise;exports.readFile=readFile;var writeFile=fs.writeFile||notImplementedPromise;exports.writeFile=writeFile;var mkdir=fs.mkdir||notImplementedPromise;exports.mkdir=mkdir;var write=fs.write||notImplementedPromise;exports.write=write;var renameFile=fs.renameFile||notImplementedPromise;exports.renameFile=renameFile;var fileExists=fs.fileExists||notImplementedPromise;exports.fileExists=fileExists;var truncateFile=fs.truncateFile||notImplementedPromise;exports.truncateFile=truncateFile;var openForAppend=fs.openForAppend||notImplementedPromise;exports.openForAppend=openForAppend;var writeFD=fs.writeFD||notImplementedPromise;exports.writeFD=writeFD;var closeFD=fs.closeFD||notImplementedPromise;exports.closeFD=closeFD;var removeFile=fs.removeFile||notImplementedPromise;exports.removeFile=removeFile;var createFile=fs.createFile||notImplementedPromise;exports.createFile=createFile;var getFileSize=fs.getFileSize||notImplementedPromise;exports.getFileSize=getFileSize;var pathJoin=fs.pathJoin||notImplementedPromise;exports.pathJoin=pathJoin;

},{"../platform/fs":125,"./platform":63}],56:[function(require,module,exports){
"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var p in e)Object.prototype.hasOwnProperty.call(e,p)&&(r[p]=e[p]);return r.default=e,r}Object.defineProperty(exports,"__esModule",{value:!0});var _platformGzip=require("../platform/gzip"),gzip=_interopRequireWildcard(_platformGzip),compress=gzip.compress||!1;exports.compress=compress;var decompress=gzip.decompress||!1;exports.decompress=decompress;

},{"../platform/gzip":127}],57:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _platformHistoryManager=require("../platform/history-manager"),_platformHistoryManager2=_interopRequireDefault(_platformHistoryManager);exports.default=_platformHistoryManager2.default,module.exports=exports.default;

},{"../platform/history-manager":128}],58:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function defaultHttpHandler(e,t,r,o,n,s,a,l,i){if("GET"===e&&t.startsWith("chrome://")&&_platformChromeUrlHandler.chromeUrlHandler)return void(0,_platformChromeUrlHandler.chromeUrlHandler)(t,r,o);var p=(0,_platformXmlhttprequest.XMLHttpRequestFactory)(),d=new p;return d.timestamp=+new Date,i&&(0,_platformXmlhttprequest.setBackgroundRequest)(d),d.open(e,t,!a),(0,_platformXmlhttprequest.setPrivateFlags)(d),d.overrideMimeType&&d.overrideMimeType("application/json"),d.setRequestHeader("Content-Type","application/json"),l&&d.setRequestHeader("Content-Encoding",l),d.onload=function(){if(parseInt){var e=parseInt(d.status/100);if(2==e||3==e||0==e)r&&r(d);else{var n="loaded with non-200 "+t+" (status="+d.status+" "+d.statusText+") CLIQZEnvironment.httpHandler";_console2.default.log(n),o&&o(n)}}},d.onerror=function(){var e="error loading "+t+" (status="+d.status+" "+d.statusText+") CLIQZEnvironment.httpHandler";_console2.default.log(e),o&&o(e)},d.ontimeout=function(){var e="timeout for "+t+" CLIQZEnvironment.httpHandler";_console2.default.log(e),o&&o(e)},r&&(n?d.timeout=parseInt(n):d.timeout=["POST","PUT"].indexOf(e)>=0?1e4:1e3),d.send(s),d}function httpHandler(){return activeHandler.apply(void 0,arguments)}function overrideHttpHandler(e){activeHandler=e}function compressionEnabled(e){return compressionAvailable&&!compressionExclusions.has(e)}function addCompressionExclusion(e){compressionExclusions.add(e)}function promiseHttpHandler(e,t,r,o,n){return new Promise(function(s,a){if("POST"===e&&n&&compressionEnabled(t)){var l=r.length;r=(0,_gzip.compress)(r),_console2.default.log("Compressed request to "+t+", bytes saved = "+(l-r.length)+" ("+(100*(l-r.length)/l).toFixed(1)+"%)","CLIQZEnvironment.httpHandler"),httpHandler(e,t,s,a,o,r,void 0,"gzip")}else httpHandler(e,t,s,a,o,r)})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.defaultHttpHandler=defaultHttpHandler,exports.httpHandler=httpHandler,exports.overrideHttpHandler=overrideHttpHandler,exports.addCompressionExclusion=addCompressionExclusion,exports.promiseHttpHandler=promiseHttpHandler;var _platformFetch=require("../platform/fetch"),ftch=_interopRequireWildcard(_platformFetch),_console=require("./console"),_console2=_interopRequireDefault(_console),_gzip=require("./gzip"),_platformXmlhttprequest=require("../platform/xmlhttprequest"),_platformChromeUrlHandler=require("../platform/chrome-url-handler"),fetch=ftch.fetch;exports.fetch=fetch;var Headers=ftch.Headers;exports.Headers=Headers;var Request=ftch.Request;exports.Request=Request;var Response=ftch.Response;exports.Response=Response;var activeHandler=defaultHttpHandler,compressionAvailable=Boolean(_gzip.compress),compressionExclusions=new Set;

},{"../platform/chrome-url-handler":119,"../platform/fetch":124,"../platform/xmlhttprequest":143,"./console":51,"./gzip":56}],59:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _background=require("./background"),_background2=_interopRequireDefault(_background),_window=require("./window"),_window2=_interopRequireDefault(_window);exports.default={Background:_background2.default,Window:_window2.default},module.exports=exports.default;

},{"./background":46,"./window":72}],60:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function setGlobal(e){(0,_kordInject.setGlobal)(e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.setGlobal=setGlobal;var _kordInject=require("./kord/inject"),_kordInject2=_interopRequireDefault(_kordInject);exports.default={inject:_kordInject2.default};

},{"./kord/inject":61}],61:[function(require,module,exports){
"use strict";function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _inherits(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}function setGlobal(e){app=e}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(r,t,o){return t&&e(r.prototype,t),o&&e(r,o),r}}(),_get=function(e,r,t){for(var o=!0;o;){var n=e,i=r,a=t;o=!1,null===n&&(n=Function.prototype);var s=Object.getOwnPropertyDescriptor(n,i);if(void 0!==s){if("value"in s)return s.value;var l=s.get;if(void 0===l)return;return l.call(a)}var u=Object.getPrototypeOf(n);if(null===u)return;e=u,r=i,t=a,o=!0,s=u=void 0}};exports.setGlobal=setGlobal;var _browser=require("../browser"),app=void 0,ModuleMissingError=function(e){function r(e){_classCallCheck(this,r),_get(Object.getPrototypeOf(r.prototype),"constructor",this).call(this),this.name="ModuleMissingError",this.message="module '"+e+"' is missing"}return _inherits(r,e),r}(Error);exports.ModuleMissingError=ModuleMissingError;var ModuleDisabledError=function(e){function r(e){_classCallCheck(this,r),_get(Object.getPrototypeOf(r.prototype),"constructor",this).call(this),this.name="ModuleDisabledError",this.message="module '"+e+"' is disabled"}return _inherits(r,e),r}(Error);exports.ModuleDisabledError=ModuleDisabledError;var ModuleWrapper=function(){function e(r){_classCallCheck(this,e),this.moduleName=r}return _createClass(e,[{key:"isWindowReady",value:function(e){var r=this,t=new _browser.Window(e);return this.isReady().then(function(){var e=app.availableModules[r.moduleName];return e.windows[t.id].loadingPromise})}},{key:"isReady",value:function(){var e=app.availableModules[this.moduleName];return e?e.isEnabled||e.isLoading?e.isReady():Promise.reject(new ModuleDisabledError(this.moduleName)):Promise.reject(new ModuleMissingError(this.moduleName))}},{key:"action",value:function(e){for(var r=this,t=arguments.length,o=Array(t>1?t-1:0),n=1;n<t;n++)o[n-1]=arguments[n];return this.isReady().then(function(){var t,n=app.availableModules[r.moduleName];return(t=n.background.actions)[e].apply(t,o)})}},{key:"windowAction",value:function(e,r){for(var t=arguments.length,o=Array(t>2?t-2:0),n=2;n<t;n++)o[n-2]=arguments[n];var i=this;return this.isWindowReady(e).then(function(){var t=e.CLIQZ.Core.windowModules[i.moduleName],n=t.actions[r];return Promise.resolve(n.apply(void 0,o))})}}]),e}();exports.default={module:function(e){return new ModuleWrapper(e)}};

},{"../browser":48}],62:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _platformLanguage=require("../platform/language"),_platformLanguage2=_interopRequireDefault(_platformLanguage);exports.default=_platformLanguage2.default,module.exports=exports.default;

},{"../platform/language":130}],63:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function notImplemented(){throw new Error("Not implemented")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.notImplemented=notImplemented;var _platformPlatform=require("../platform/platform"),_platformPlatform2=_interopRequireDefault(_platformPlatform);Object.defineProperty(exports,"isPlatformAtLeastInVersion",{enumerable:!0,get:function(){return _platformPlatform.isPlatformAtLeastInVersion}});var isFirefox=_platformPlatform2.default.isFirefox;exports.isFirefox=isFirefox;var isMobile=_platformPlatform2.default.isMobile;exports.isMobile=isMobile;var isChromium=_platformPlatform2.default.isChromium;exports.isChromium=isChromium;var platformName=_platformPlatform2.default.platformName;exports.platformName=platformName;

},{"../platform/platform":132}],64:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _platformPrefs=require("../platform/prefs");exports.default={get:_platformPrefs.getPref,set:_platformPrefs.setPref,has:_platformPrefs.hasPref,clear:_platformPrefs.clearPref,enableChangeEvents:_platformPrefs.enableChangeEvents,disableChangeEvents:_platformPrefs.disableChangeEvents},module.exports=exports.default;

},{"../platform/prefs":133}],65:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function get(e){return new Promise(function(t,r){_cliqz.utils.httpGet(e,function(e){t(e.response)},r,300*ONE_SECOND)})}Object.defineProperty(exports,"__esModule",{value:!0});var _get=function(e,t,r){for(var o=!0;o;){var n=e,a=t,i=r;o=!1,null===n&&(n=Function.prototype);var u=Object.getOwnPropertyDescriptor(n,a);if(void 0!==u){if("value"in u)return u.value;var s=u.get;if(void 0===s)return;return s.call(i)}var c=Object.getPrototypeOf(n);if(null===c)return;e=c,t=a,r=i,o=!0,u=c=void 0}},_createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),_config=require("./config"),_config2=_interopRequireDefault(_config),_console=require("./console"),_console2=_interopRequireDefault(_console),_cliqz=require("./cliqz"),_platformResourceLoaderStorage=require("../platform/resource-loader-storage"),_platformResourceLoaderStorage2=_interopRequireDefault(_platformResourceLoaderStorage),_platformTextDecoder=require("../platform/text-decoder"),_platformTextDecoder2=_interopRequireDefault(_platformTextDecoder),ONE_SECOND=1e3,ONE_MINUTE=60*ONE_SECOND,ONE_HOUR=60*ONE_MINUTE,UpdateCallbackHandler=function(){function e(){_classCallCheck(this,e),this.callbacks=[]}return _createClass(e,[{key:"onUpdate",value:function(e){this.callbacks.push(e)}},{key:"triggerCallbacks",value:function(e){return Promise.all(this.callbacks.map(function(t){return t(e)}))}}]),e}();exports.UpdateCallbackHandler=UpdateCallbackHandler;var Resource=function(){function e(t){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];_classCallCheck(this,e),this.name="string"==typeof t?[t]:t,this.remoteURL=r.remoteURL,this.dataType=r.dataType||"json",this.filePath=["cliqz"].concat(_toConsumableArray(this.name)),this.chromeURL=r.chromeURL||""+_config2.default.baseURL+this.name.join("/"),this.storage=new _platformResourceLoaderStorage2.default(this.filePath)}return _createClass(e,[{key:"load",value:function(){var e=this;return this.storage.load().then(function(e){try{return(new _platformTextDecoder2.default).decode(e)||e}catch(t){return e}}).then(function(t){return e.parseData(t)}).catch(function(){return e.updateFromURL(e.chromeURL)}).catch(function(){return e.updateFromRemote()})}},{key:"updateFromRemote",value:function(){return void 0===this.remoteURL?Promise.reject("updateFromRemote: remoteURL is undefined"):this.updateFromURL(this.remoteURL)}},{key:"updateFromURL",value:function(e){return e?get(e).then(this.persist.bind(this)):Promise.reject("updateFromURL: url is undefined")}},{key:"persist",value:function(e){var t=this;return this.parseData(e).then(function(r){return t.storage.save(e).catch(function(e){return _console2.default.error("resource-loader error on persist: ",e)}).then(function(){return r})})}},{key:"parseData",value:function(e){if("json"===this.dataType)try{var t=JSON.parse(e);return Promise.resolve(t)}catch(e){return Promise.reject("parseData: failed with exception "+e)}return Promise.resolve(e)}}]),e}();exports.Resource=Resource;var _default=function(e){function t(e){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];_classCallCheck(this,t),_get(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.resource=new Resource(e,r),this.cron=r.cron||ONE_HOUR,this.updateInterval=r.updateInterval||10*ONE_MINUTE,this.intervalTimer=_cliqz.utils.setInterval(this.updateFromRemote.bind(this),this.updateInterval)}return _inherits(t,e),_createClass(t,[{key:"load",value:function(){return this.resource.load()}},{key:"updateFromRemote",value:function(){var e="resource-loader.lastUpdates."+this.resource.name.join("/"),t=Number(_cliqz.utils.getPref(e,0)),r=Date.now();return r>this.cron+t?this.resource.updateFromRemote().then(function(t){return _cliqz.utils.setPref(e,String(Date.now())),t}).then(this.triggerCallbacks.bind(this)).catch(function(){}):Promise.resolve()}},{key:"stop",value:function(){_cliqz.utils.clearInterval(this.intervalTimer)}}]),t}(UpdateCallbackHandler);exports.default=_default;

},{"../platform/resource-loader-storage":136,"../platform/text-decoder":138,"./cliqz":49,"./config":50,"./console":51}],66:[function(require,module,exports){
"use strict";function _classCallCheck(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(a,t,r){return t&&e(a.prototype,t),r&&e(a,r),a}}(),ResourceManager=function(){function e(){_classCallCheck(this,e),this.loaders=[],this.initialised=!1}return _createClass(e,[{key:"init",value:function(){var e=this,a=this.loaders.map(function(a){return e._startLoader(a.loader,a.callback)});return this.initialised=!0,Promise.all(a)}},{key:"unload",value:function(){this.loaders.forEach(function(e){e.loader.stop()}),this.initialised=!1}},{key:"addResourceLoader",value:function(e,a){this.loaders.push({loader:e,callback:a}),this.initialised&&this._startLoader(e,a)}},{key:"_startLoader",value:function(e,a){return e.onUpdate(a),e.load().then(a)}}]),e}(),manager=new ResourceManager;exports.default=manager,module.exports=exports.default;

},{}],67:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),_platformStorage=require("../platform/storage"),_platformStorage2=_interopRequireDefault(_platformStorage),Storage=function(){function e(t){return _classCallCheck(this,e),this instanceof e?(this.storage=_platformStorage2.default.bind(null,t),void(this.url=t)):new e(t)}return _createClass(e,[{key:"getItem",value:function(e){return this.storage().getItem(e)}},{key:"setItem",value:function(e,t){return this.storage().setItem(e,t)}},{key:"removeItem",value:function(e){return this.storage().removeItem(e)}},{key:"clear",value:function(){return this.storage().clear()}},{key:"setObject",value:function(e,t){this.storage().setItem(e,JSON.stringify(t))}},{key:"getObject",value:function(e){var t=!(arguments.length<=1||void 0===arguments[1])&&arguments[1],r=this.storage().getItem(e);return r?JSON.parse(r):t}}]),e}();exports.default=Storage,module.exports=exports.default;

},{"../platform/storage":137}],68:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _extractDomain(e){var t=e,r=e.indexOf("://");r!==-1&&r<=6&&(t=e.substring(r+3));var a=t.indexOf("/");return a!==-1&&(t=t.substring(0,a)),t.startsWith("www.")&&(t=t.substring(4)),t}function _getGeneralDomainFromHostname(e){var t=getDomain(e);return null===t&&tldExists(e)?e:t}function getGeneralDomain(e){return CACHE.get(e)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),_url=require("./url"),_platformTldjs=require("../platform/tldjs"),_platformTldjs2=_interopRequireDefault(_platformTldjs),getDomain=_platformTldjs2.default.getDomain.bind(_platformTldjs2.default),getPublicSuffix=_platformTldjs2.default.getPublicSuffix.bind(_platformTldjs2.default),getSubdomain=_platformTldjs2.default.getSubdomain.bind(_platformTldjs2.default),tldExists=_platformTldjs2.default.tldExists.bind(_platformTldjs2.default),TLDs=_platformTldjs2.default.rules,invalidHostnameCharacters=/[^a-zA-Z0-9.-]/,SuffixTreeDomainCache=function(){function e(){_classCallCheck(this,e),this.cache=Object.create(null)}return _createClass(e,[{key:"get",value:function(e){var t=_extractDomain(e),r=this.lookup(t);if(r)return r;if((0,_url.isIpAddress)(t))return t;if(t.search(invalidHostnameCharacters)!==-1)return null;var a=_getGeneralDomainFromHostname(t);return null!==a&&this.set(a),a}},{key:"lookup",value:function(e){for(var t=e.split(".").reverse(),r=this.cache,a=0;void 0===r.$;){var n=t[a],l=r[n];if(void 0===l)return null;a+=1,r=l}return r.$}},{key:"set",value:function(e){var t=e.split(".").reverse(),r=this.cache;t.forEach(function(e){var t=r[e];void 0===t&&(t=Object.create(null),r[e]=t),r=t}),r.$=e}}]),e}(),CACHE=new SuffixTreeDomainCache;exports.CACHE=CACHE,exports.default={getGeneralDomain:getGeneralDomain,getPublicSuffix:getPublicSuffix,getDomain:getDomain,getSubdomain:getSubdomain,tldExists:tldExists,TLDs:TLDs};

},{"../platform/tldjs":139,"./url":69}],69:[function(require,module,exports){
"use strict";function _interopRequire(r){return r&&r.__esModule?r.default:r}function isUrl(r){if(!r)return!1;if((0,_platformUrl.isURI)(r))return!0;var e=r.indexOf("://");return e!=-1&&e<=6&&(r=r.slice(e+3)),r=r.split("/")[0],UrlRegExp.test(r)}function urlStripProtocol(r){var e=r,t=["https://","http://","www2.","www.","mobile.","mobil.","m."];return t.forEach(function(r){e.toLowerCase().startsWith(r)&&(e=e.substring(r.length))}),"/"===e[e.length-1]&&(e=e.slice(0,-1)),e}function isIpv4Address(r){return ipv4_regex.test(r)}function isIpv6Address(r){return ipv6_regex.test(r)}function isIpAddress(r){return isIpv4Address(r)||isIpv6Address(r)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.isUrl=isUrl,exports.urlStripProtocol=urlStripProtocol,exports.isIpv4Address=isIpv4Address,exports.isIpv6Address=isIpv6Address,exports.isIpAddress=isIpAddress;var _platformUrl=require("../platform/url"),UrlRegExp=/^(([a-z\d]([a-z\d-]*[a-z\d])?)\.)+[a-z]{2,}(\:\d+)?$/i,ipv4_part="0*([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])",ipv4_regex=new RegExp("^"+ipv4_part+"\\."+ipv4_part+"\\."+ipv4_part+"\\."+ipv4_part+"([:]([0-9])+)?$"),ipv6_regex=new RegExp("^\\[?(([0-9]|[a-f]|[A-F])*[:.]+([0-9]|[a-f]|[A-F])+[:.]*)+[\\]]?([:][0-9]+)?$");exports.equals=_interopRequire(_platformUrl);

},{"../platform/url":141}],70:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _slicedToArray=function(){function e(e,t){var n=[],l=!0,r=!1,i=void 0;try{for(var o,a=e[Symbol.iterator]();!(l=(o=a.next()).done)&&(n.push(o.value),!t||n.length!==t);l=!0);}catch(e){r=!0,i=e}finally{try{!l&&a.return&&a.return()}finally{if(r)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_platformEnvironment=require("../platform/environment"),_platformEnvironment2=_interopRequireDefault(_platformEnvironment),_console=require("./console"),_console2=_interopRequireDefault(_console),_prefs=require("./prefs"),_prefs2=_interopRequireDefault(_prefs),_storage=require("./storage"),_storage2=_interopRequireDefault(_storage),_events=require("./events"),_events2=_interopRequireDefault(_events),_tlds=require("./tlds"),_tlds2=_interopRequireDefault(_tlds),_http=require("./http"),_gzip=require("./gzip"),_gzip2=_interopRequireDefault(_gzip),_language=require("./language"),_language2=_interopRequireDefault(_language),_url=require("./url"),_cryptoRandom=require("./crypto/random"),_cryptoRandom2=_interopRequireDefault(_cryptoRandom),_platformFetch=require("../platform/fetch"),VERTICAL_ENCODINGS={people:"p",news:"n",video:"v",hq:"h",bm:"m",reciperd:"r",game:"g",movie:"o"},COLOURS=["#ffce6d","#ff6f69","#96e397","#5c7ba1","#bfbfbf","#3b5598","#fbb44c","#00b2e5","#b3b3b3","#99cccc","#ff0027","#999999"],LOGOS=["wikipedia","google","facebook","youtube","duckduckgo","sternefresser","zalando","bild","web","ebay","gmx","amazon","t-online","wiwo","wwe","weightwatchers","rp-online","wmagazine","chip","spiegel","yahoo","paypal","imdb","wikia","msn","autobild","dailymotion","hm","hotmail","zeit","bahn","softonic","handelsblatt","stern","cnn","mobile","aetv","postbank","dkb","bing","adobe","bbc","nike","starbucks","techcrunch","vevo","time","twitter","weatherunderground","xing","yelp","yandex","weather","flickr"],BRANDS_DATABASE={domains:{},palette:["999"]},schemeRE=/^(\S+?):(\/\/)?(.*)$/i,CliqzUtils={environment:_platformEnvironment2.default,RESULTS_PROVIDER:_platformEnvironment2.default.RESULTS_PROVIDER,RICH_HEADER:_platformEnvironment2.default.RICH_HEADER,RESULTS_PROVIDER_LOG:"https://api.cliqz.com/api/v1/logging?q=",RESULTS_PROVIDER_PING:"https://api.cliqz.com/ping",CONFIG_PROVIDER:"https://api.cliqz.com/api/v1/config",SAFE_BROWSING:"https://safe-browsing.cliqz.com",TUTORIAL_URL:"https://cliqz.com/home/onboarding",UNINSTALL:"https://cliqz.com/home/offboarding",FEEDBACK:"https://cliqz.com/feedback/",PREFERRED_LANGUAGE:null,RESULTS_TIMEOUT:_platformEnvironment2.default.RESULTS_TIMEOUT,BRANDS_DATABASE:BRANDS_DATABASE,BRANDS_DATABASE_VERSION:1483980213630,GEOLOC_WATCH_ID:null,VERTICAL_TEMPLATES:{n:"news",p:"people",v:"video",h:"hq",r:"recipe",g:"cpgame_movie",o:"cpgame_movie"},hm:null,hw:null,mc:null,TEMPLATES_PATH:_platformEnvironment2.default.TEMPLATES_PATH,TEMPLATES:_platformEnvironment2.default.TEMPLATES,MESSAGE_TEMPLATES:_platformEnvironment2.default.MESSAGE_TEMPLATES,PARTIALS:_platformEnvironment2.default.PARTIALS,SKIN_PATH:_platformEnvironment2.default.SKIN_PATH,LOCALE_PATH:_platformEnvironment2.default.LOCALE_PATH,RERANKERS:_platformEnvironment2.default.RERANKERS,CLIQZ_ONBOARDING:_platformEnvironment2.default.CLIQZ_ONBOARDING,CLIQZ_ONBOARDING_URL:_platformEnvironment2.default.CLIQZ_ONBOARDING_URL,BROWSER_ONBOARDING_PREF:_platformEnvironment2.default.BROWSER_ONBOARDING_PREF,CLIQZ_NEW_TAB:_platformEnvironment2.default.CLIQZ_NEW_TAB,CLIQZ_NEW_TAB_RESOURCE_URL:_platformEnvironment2.default.CLIQZ_NEW_TAB_RESOURCE_URL,telemetryHandlers:[_platformEnvironment2.default.telemetry],init:function(e){if(e=e||{},!e.lang)return Promise.reject("lang missing");_platformEnvironment2.default.gzip=_gzip2.default,_platformEnvironment2.default.getLogoDetails=CliqzUtils.getLogoDetails.bind(CliqzUtils),_platformEnvironment2.default.getDetailsFromUrl=CliqzUtils.getDetailsFromUrl.bind(CliqzUtils),_platformEnvironment2.default.getLocalizedString=CliqzUtils.getLocalizedString.bind(CliqzUtils),_platformEnvironment2.default.app=CliqzUtils.app,CliqzUtils.log("Initialized","CliqzUtils");try{CliqzUtils.setLang(e.lang)}catch(e){}CliqzUtils.tldExtractor=_platformEnvironment2.default.tldExtractor||CliqzUtils.genericTldExtractor},getLanguageFromLocale:function(e){return e.match(/([a-z]+)(?:[-_]([A-Z]+))?/)[1]},SUPPORTED_LANGS:{de:"de",en:"en",fr:"fr"},getSupportedLanguage:function(e){return CliqzUtils.SUPPORTED_LANGS[e]||"en"},setLang:function(e){var t=CliqzUtils.getLanguageFromLocale(e),n=CliqzUtils.getSupportedLanguage(t);CliqzUtils.PREFERRED_LANGUAGE=e,CliqzUtils.getLocaleFile(n)},isNumber:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},getKnownType:function(e){return VERTICAL_ENCODINGS.hasOwnProperty(e)&&e},makeUri:_platformEnvironment2.default.makeUri,setLogoDb:function(e){BRANDS_DATABASE=CliqzUtils.BRANDS_DATABASE=e},getLogoDetails:function(e){var t=e.name,n=t.replace(/[-]/g,""),l=function(e,n){var l=e.lastIndexOf(t),r=e.substr(0,l)+"$"+e.substr(l+t.length);return r.indexOf(n)!=-1},r={},i=BRANDS_DATABASE.domains;if(0==t.length)return r;if("IP"==t)r={text:"IP",backgroundColor:"9077e3"};else if(i[t])for(var o=0,a=i[t].length;o<a;o++){var s=i[t][o];if(o==a-1||l(e.host,s.r)){r={backgroundColor:s.b?s.b:null,backgroundImage:s.l?"url(https://cdn.cliqz.com/brands-database/database/"+this.BRANDS_DATABASE_VERSION+"/logos/"+t+"/"+s.r+".svg)":"",text:s.t,color:s.c?"":"#fff"};break}}r.text=r.text||(n.length>1?n[0].toUpperCase()+n[1].toLowerCase():""),r.backgroundColor=r.backgroundColor||BRANDS_DATABASE.palette[t.split("").reduce(function(e,t){return e+t.charCodeAt(0)},0)%BRANDS_DATABASE.palette.length];var u=BRANDS_DATABASE.palette.indexOf(r.backgroundColor),c=BRANDS_DATABASE.buttons&&u!=-1&&BRANDS_DATABASE.buttons[u]?BRANDS_DATABASE.buttons[u]:10;return r.buttonsClass="cliqz-brands-button-"+c,r.style="background-color: #"+r.backgroundColor+";color:"+(r.color||"#fff")+";",r.backgroundImage&&(r.style+="background-image:"+r.backgroundImage+"; text-indent: -10em;"),r},httpHandler:function(){var e=arguments[3];try{return _http.httpHandler.apply(void 0,arguments)}catch(t){e?e(t):CliqzUtils.log(t,"httpHandler failed")}},httpGet:function(e,t,n,l,r,i){return CliqzUtils.httpHandler("GET",e,t,n,l,r,i)},httpPost:function(e,t,n,l,r){return CliqzUtils.httpHandler("POST",e,t,l,r,n)},httpPut:function(e,t,n,l,r){return CliqzUtils.httpHandler("PUT",e,t,l,r,n)},getLocalStorage:function(e){return new _storage2.default(e)},loadResource:function(e,t,n){try{return CliqzUtils.httpGet(e,t,n,3e3)}catch(t){CliqzUtils.log("Could not load resource "+e+" from the xpi","CliqzUtils.httpHandler"),n&&n()}},openTabInWindow:_platformEnvironment2.default.openTabInWindow,getPref:_prefs2.default.get,setPref:_prefs2.default.set,hasPref:_prefs2.default.has,clearPref:_prefs2.default.clear,log:function(e,t){_console2.default.log(t,e)},getDay:function(){return Math.floor((new Date).getTime()/864e5)},rand:function(e,t){var n,l="",r=t||"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=r.length;for(n=0;n<e;n++)l+=r.charAt(Math.floor((0,_cryptoRandom2.default)()*i));return l},hash:function(e){return e.split("").reduce(function(e,t){return(e<<4)-e+t.charCodeAt(0)&251658239},0)},cleanMozillaActions:function(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];if(0==e.indexOf("moz-action:")){var t=e.match(/^moz-action:([^,]+),(.*)$/),n=_slicedToArray(t,3),l=n[1],e=n[2];try{var r=JSON.parse(e).url;r&&(e=decodeURIComponent(r))}catch(e){}}return[l,e]},cleanUrlProtocol:function(e,t){if(!e)return"";var n=e.toLowerCase();return n.startsWith("http://")&&(e=e.slice(7)),n.startsWith("https://")&&(e=e.slice(8)),t&&e.toLowerCase().startsWith("www.")&&(e=e.slice(4)),e},genericTldExtractor:_tlds2.default.getPublicSuffix,getDetailsFromUrl:function(e){var t=CliqzUtils.cleanMozillaActions(e),n=_slicedToArray(t,2),e=(n[0],n[1]),l=e,r="",i="",o="",a="",s=[],u="",c="",f="",d=schemeRE.exec(l);d&&(r=d[1],i=d[2],l=d[3]);var p="https"==r,g=l.split(/[\/\#\?]/)[0].toLowerCase(),u=l.replace(g,""),m=g.split("@");m.length>1&&(g=m[1]);var _="",C=(0,_url.isIpv4Address)(g),q=(0,_url.isIpv6Address)(g),U=g.indexOf(":");if((!q||C)&&U>=0)_=g.substr(U+1),g=g.substr(0,U);else if(q){var h=g.indexOf("]:");h>=0&&(_=g.split("]:")[1],g=g.split("]:")[0].replace("[","").replace("]",""))}var c="",z=u.indexOf("?");z!=-1&&(c=u.substr(z+1));var f="",E=u.indexOf("#");E!=-1&&(f=u.substr(E+1)),u=u.replace("?"+c,""),u=u.replace("#"+f,""),c=c.replace("#"+f,"");var v=u;c&&(v+="?"+c),f&&(v+="#"+f),C=(0,_url.isIpv4Address)(g),q=(0,_url.isIpv6Address)(g);var R=CliqzUtils.isLocalhost(g,C,q);if(C||q||R)o=R?"localhost":"IP";else try{var S=g;a=CliqzUtils.tldExtractor(g),a&&(S=g.slice(0,-(a.length+1))),s=S.split("."),o=s.pop()}catch(e){o="",g=""}var A=g;0==g.toLowerCase().indexOf("www.")&&(A=g.slice(4));var b=A+v;r&&"http"!=r&&"https"!=r&&(b=r+":"+i+b),b=CliqzUtils.stripTrailingSlash(b),A===a&&(o=a);var L={scheme:r?r+":":"",name:o,domain:a?o+"."+a:"",tld:a,subdomains:s,path:u,query:c,fragment:f,extra:v,host:g,cleanHost:A,ssl:p,port:_,friendly_url:b};return L},stripTrailingSlash:function(e){return"/"===e.substr(-1)?e.substr(0,e.length-1):e},isUrl:_url.isUrl,isIPv4:_url.isIpv4Address,isIPv6:_url.isIpv6Address,isLocalhost:function(e,t,n){return"localhost"==e||(!(!t||"127"!=e.substr(0,3))||!(!n||"::1"!=e))},isSearch:function(e){if(CliqzUtils.isUrl(e)){var t=this.cleanMozillaActions(e)[1],n=CliqzUtils.getDetailsFromUrl(t),l=n.name,r=n.subdomains,i=n.path,o=r.length?r[0]:"";return!(i&&(1!==i.length||"/"!==i[0])||("google"!==l&&"bing"!==l&&"duckduckgo"!==l&&"startpage"!==l||o&&"www"!==o)&&("yahoo"!==l||o&&"de"!==o))}return!1},isCompleteUrl:function(e){var t=/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;return!!t.test(e)},extractQueryFromUrl:function(e){e=0===e.search(/http(s?):\/\/www\.google\..*\/.*q=.*/i)?e.substring(e.lastIndexOf("q=")+2).split("&")[0]:0===e.search(/http(s?):\/\/www\.bing\..*\/.*q=.*/i)?e.substring(e.indexOf("q=")+2).split("&")[0]:0===e.search(/http(s?):\/\/.*search\.yahoo\.com\/search.*p=.*/i)?e.substring(e.indexOf("p=")+2).split("&")[0]:null;var t=e?decodeURIComponent(e.replace(/\+/g," ")):null;return t?t:e},generalizeUrl:function(e,t){if(!e)return"";var n=e.toLowerCase(),l=CliqzUtils.cleanUrlProtocol(n,!1).split("/"),r=l[0],i=0,o=/,|\./g;return t||(l.length>1&&(i=("/"+l.slice(1).join("/")).length),0===r.indexOf("www")&&r.length>4&&o.test(r[3])&&" "!=r[4]&&(n=n.substr(0,n.length-i).replace(o,".")+(i?n.substr(-i):""))),e=CliqzUtils.cleanUrlProtocol(n,!0),"/"==e[e.length-1]?e.slice(0,-1):e},simplifyUrl:function(e){var t;if(0===e.search(/http(s?):\/\/www\.google\..*\/url\?.*url=.*/i))return e=e.substring(e.lastIndexOf("url=")).split("&")[0],e=e.substr(4),decodeURIComponent(e);if(0===e.search(/http(s?):\/\/www\.google\..*\/.*q=.*/i)){if(t=e.substring(e.lastIndexOf("q=")).split("&")[0],"q="!=t){var n=e.indexOf("#")!=-1?e.substr(e.indexOf("#")):e.substr(e.indexOf("?")),l=n.indexOf("tbm=")!=-1?"&"+n.substring(n.lastIndexOf("tbm=")).split("&")[0]:"";n.indexOf("start=")!=-1?"&"+n.substring(n.lastIndexOf("start=")).split("&")[0]:"";return"https://www.google.com/search?"+t+l}return e}if(0===e.search(/http(s?):\/\/www\.bing\..*\/.*q=.*/i))return t=e.substring(e.indexOf("q=")).split("&")[0],"q="!=t?e.indexOf("search?")!=-1?e.substr(0,e.indexOf("search?"))+"search?"+t:e.substr(0,e.indexOf("/?"))+"/?"+t:e;if(0===e.search(/http(s?):\/\/r.search\.yahoo\.com\/.*/i))return e=e.substring(e.lastIndexOf("/RU=")).split("/RK=")[0],e=e.substr(4),decodeURIComponent(e);if(0===e.search(/http(s?):\/\/.*search\.yahoo\.com\/search.*p=.*/i)){var r=e.substring(e.indexOf("p=")).split("&")[0];return"p="!=r&&e.indexOf(";")!=-1?e.substr(0,e.indexOf(";"))+"?"+r:e}return e},pingCliqzResults:function(){CliqzUtils.httpHandler("HEAD",CliqzUtils.RESULTS_PROVIDER_PING)},getResultsProviderQueryString:function(e){var t=5;return CliqzUtils.getPref("languageDedup",!1)&&(t=7),CliqzUtils.getPref("modules.context-search.enabled",!1)&&(t=10),encodeURIComponent(e)+CliqzUtils.encodeSessionParams()+_language2.default.stateToQueryString()+CliqzUtils.encodeLocale()+CliqzUtils.encodeResultOrder()+CliqzUtils.encodeCountry()+CliqzUtils.encodeFilter()+CliqzUtils.encodeLocation(!0)+CliqzUtils.encodeResultCount(t)+CliqzUtils.enncodeQuerySuggestionParam()+CliqzUtils.disableWikiDedup()},getRichHeaderQueryString:function(e,t,n){var l=5;return CliqzUtils.getPref("languageDedup",!1)&&(l=7),CliqzUtils.getPref("modules.context-search.enabled",!1)&&(l=10),"&q="+encodeURIComponent(e)+CliqzUtils.encodeSessionParams()+_language2.default.stateToQueryString()+CliqzUtils.encodeLocale(n)+CliqzUtils.encodeResultOrder()+CliqzUtils.encodeCountry()+CliqzUtils.encodeFilter()+CliqzUtils.encodeLocation(!0,t&&t.latitude,t&&t.longitude)+CliqzUtils.encodeResultCount(l)+CliqzUtils.disableWikiDedup()},getBackendResults:function(e){if(!CliqzUtils.getPref("cliqzBackendProvider.enabled",!0))return Promise.resolve({response:{results:[]},query:e});CliqzUtils._sessionSeq++,CliqzUtils._queryLastDraw&&Date.now()>CliqzUtils._queryLastDraw+500&&CliqzUtils._queryCount++,CliqzUtils._queryLastDraw=0,CliqzUtils._queryLastLength=e.length;var t=CliqzUtils.RESULTS_PROVIDER+CliqzUtils.getResultsProviderQueryString(e),n=(0,_platformFetch.fetchFactory)();return n(t).then(function(e){return e.json()}).then(function(t){return{response:t,query:e}})},fetchAndStoreConfig:function(){return new Promise(function(e){CliqzUtils.httpGet(CliqzUtils.CONFIG_PROVIDER,function(t){if(t&&t.response)try{var n=JSON.parse(t.response);for(var l in n)"object"==typeof n[l]?CliqzUtils.setPref("config_"+l,JSON.stringify(n[l])):CliqzUtils.setPref("config_"+l,n[l]);""===CliqzUtils.getPref("backend_country","")&&CliqzUtils.setDefaultIndexCountry(CliqzUtils.getPref("config_location","de"))}catch(e){CliqzUtils.log(e)}e()},e,1e4)})},setDefaultIndexCountry:function(e){var t=JSON.parse(CliqzUtils.getPref("config_backends",'["de"]'));t.indexOf(e)!==-1?CliqzUtils.setPref("backend_country",e):"de"===CliqzUtils.currLocale?CliqzUtils.setPref("backend_country","de"):CliqzUtils.setPref("backend_country","us")},encodeLocale:function(e){var t=CliqzUtils.PREFERRED_LANGUAGE||"";return e&&(t=e),"&locale="+t},encodeCountry:function(){return"&country="+CliqzUtils.getPref("backend_country","de")},disableWikiDedup:function(){var e=CliqzUtils.getPref("languageDedup",!1);return e?"&ddl=0":""},getAdultContentFilterState:function(){var e={conservative:3,moderate:0,liberal:1},t=CliqzUtils.getPref("adultContentFilter","moderate");return e[t]},encodeFilter:function(){return"&adult="+CliqzUtils.getAdultContentFilterState()},encodeResultCount:function(e){return e=e||5,"&count="+e},enncodeQuerySuggestionParam:function(){var e=CliqzUtils.getPref("suggestionsEnabled",!1);return"&suggest="+(e?1:0)},encodeResultType:function(e){return e.indexOf("action")!==-1?["T"]:0==e.indexOf("cliqz-results")?CliqzUtils.encodeCliqzResultType(e):0==e.indexOf("cliqz-pattern")?["C"]:"cliqz-extra"===e?["X"]:"cliqz-series"===e?["S"]:0==e.indexOf("bookmark")||0==e.indexOf("tag")?["B"].concat(CliqzUtils.encodeCliqzResultType(e)):0==e.indexOf("favicon")||0==e.indexOf("history")?["H"].concat(CliqzUtils.encodeCliqzResultType(e)):0==e.indexOf("cliqz-custom")?e.substr(21):e},isPrivateResultType:function(e){var t=e[0].split("|")[0];return"HBTCS".indexOf(t)!=-1&&1==e.length},encodeCliqzResultType:function(e){var t=e.indexOf("sources-");return t!=-1?CliqzUtils.encodeSources(e.substr(t+8)):[]},_searchSession:"",_sessionSeq:0,_queryLastLength:null,_queryLastDraw:null,_queryCount:null,setSearchSession:function(e){CliqzUtils._searchSession=e,CliqzUtils._sessionSeq=0,CliqzUtils._queryCount=0,CliqzUtils._queryLastLength=0,CliqzUtils._queryLastDraw=0},encodeSessionParams:function(){return CliqzUtils._searchSession.length?"&s="+encodeURIComponent(CliqzUtils._searchSession)+"&n="+CliqzUtils._sessionSeq+"&qc="+CliqzUtils._queryCount:""},encodeLocation:function(e,t,n){var l=CliqzUtils.getPref("share_location","ask");"showOnce"===l&&(l="ask");var r="&loc_pref="+l;return(CliqzUtils.USER_LAT&&CliqzUtils.USER_LNG||t&&n)&&(r+=["&loc=",t||CliqzUtils.USER_LAT,",",n||CliqzUtils.USER_LNG,e?",U":""].join("")),r},encodeSources:function(e){return e.toLowerCase().split(", ").map(function(e){return 0==e.indexOf("cache")?"d":VERTICAL_ENCODINGS[e]||e})},isPrivate:_platformEnvironment2.default.isPrivate,telemetry:function(){var e=arguments;CliqzUtils.telemetryHandlers.forEach(function(t){return t.apply(null,e)})},resultTelemetry:function(e,t,n,l,r,i){CliqzUtils.setResultOrder(r),_events2.default.pub("human-web:sanitize-result-telemetry",{type:"extension-result-telemetry",q:e,s:CliqzUtils.encodeSessionParams(),msg:{i:n,o:CliqzUtils.encodeResultOrder(),u:l?l:"",a:t,e:i},endpoint:CliqzUtils.RESULTS_PROVIDER_LOG,method:"GET"}),CliqzUtils.setResultOrder("")},sendUserFeedback:function(e){e._type="user_feedback",(0,_http.httpHandler)("POST",_platformEnvironment2.default.LOG,null,null,1e4,JSON.stringify(e))},_resultOrder:"",setResultOrder:function(e){CliqzUtils._resultOrder=e},encodeResultOrder:function(){return CliqzUtils._resultOrder&&CliqzUtils._resultOrder.length?"&o="+encodeURIComponent(JSON.stringify(CliqzUtils._resultOrder)):""},setInterval:_platformEnvironment2.default.setInterval,setTimeout:_platformEnvironment2.default.setTimeout,clearTimeout:_platformEnvironment2.default.clearTimeout,clearInterval:_platformEnvironment2.default.clearTimeout,Promise:_platformEnvironment2.default.Promise,locale:{},currLocale:null,getLocaleFile:function(e){if(CliqzUtils.LOCALE_PATH){var t=CliqzUtils.LOCALE_PATH+e+"/cliqz.json",n=CliqzUtils.httpGet(t,null,null,null,null,!0);CliqzUtils.currLocale=e,CliqzUtils.locale.default=CliqzUtils.locale[e]=JSON.parse(n.response)}},getLocalizedString:function(e,t){function n(e,n,l){return n?(n=parseInt(n,10)-1,n in t?t[n]:""):l}if(!e)return"";var l,r=e;return null!=CliqzUtils.currLocale&&CliqzUtils.locale[CliqzUtils.currLocale]&&CliqzUtils.locale[CliqzUtils.currLocale][e]?(r=CliqzUtils.locale[CliqzUtils.currLocale][e].message,l=CliqzUtils.locale[CliqzUtils.currLocale]):CliqzUtils.locale.default&&CliqzUtils.locale.default[e]&&(r=CliqzUtils.locale.default[e].message,l=CliqzUtils.locale.default),t||(t=[]),Array.isArray(t)||(t=[t]),r.replace(/\$(?:([1-9]\d*)|(\$+))/g,n)},localizeDoc:function(e){for(var t=e.getElementsByClassName("cliqz-locale"),n=0;n<t.length;n++){var l=t[n];l.textContent=CliqzUtils.getLocalizedString(l.getAttribute("key"))}},isWindows:function(){return 0===_platformEnvironment2.default.OS.indexOf("win")},isMac:function(){return 0===_platformEnvironment2.default.OS.indexOf("darwin")},isLinux:function(){return 0===_platformEnvironment2.default.OS.indexOf("linux")},getWindow:_platformEnvironment2.default.getWindow,getWindowID:_platformEnvironment2.default.getWindowID,bindObjectFunctions:function(e,t){for(var n in e){var l=e[n];e.hasOwnProperty(n)&&"function"==typeof l&&(e[n]=l.bind(t))}},tryDecodeURIComponent:function(e){try{return decodeURIComponent(e)}catch(t){return e}},tryEncodeURIComponent:function(e){try{return encodeURIComponent(e)}catch(t){return e}},parseQueryString:function(e){var t={},n=(e||"").split("&");for(var l in n){var r=n[l].split("=");t[CliqzUtils.tryDecodeURIComponent(r[0])]=CliqzUtils.tryDecodeURIComponent(r[1])}return t},roundToDecimal:function(e,t){var n=Math.pow(10,t);return Math.round(e*n)/n},getAdultFilterState:function(){var e={conservative:{name:CliqzUtils.getLocalizedString("always"),selected:!1},moderate:{name:CliqzUtils.getLocalizedString("always_ask"),selected:!1},liberal:{name:CliqzUtils.getLocalizedString("never"),selected:!1}},t=CliqzUtils.getPref("adultContentFilter","moderate");return"showOnce"===t&&(t="moderate"),e[t].selected=!0,e},getLocationPermState:function(){var e={yes:{name:CliqzUtils.getLocalizedString("always"),selected:!1},ask:{name:CliqzUtils.getLocalizedString("always_ask"),selected:!1},no:{name:CliqzUtils.getLocalizedString("never"),selected:!1}};return e[CliqzUtils.getPref("share_location","ask")].selected=!0,e},extractSelectableElements:function(e){return Array.prototype.slice.call(e.querySelectorAll("[arrow]")).filter(function(e){return null!=e.offsetParent&&(!e.getAttribute("arrow-if-visible")||!(e.offsetLeft+e.offsetWidth>e.parentElement.offsetWidth))})},getNoResults:_platformEnvironment2.default.getNoResults,getParameterByName:function(e,t){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var n=new RegExp("[\\?&]"+e+"=([^&#]*)"),l=n.exec(t.search);return null===l?"":decodeURIComponent(l[1].replace(/\+/g," "))},addEventListenerToElements:_platformEnvironment2.default.addEventListenerToElements,search:_platformEnvironment2.default.search,distance:function(e,t){function n(e){return e*Math.PI/180}var l=arguments.length<=2||void 0===arguments[2]?CliqzUtils.USER_LNG:arguments[2],r=arguments.length<=3||void 0===arguments[3]?CliqzUtils.USER_LAT:arguments[3],i=6371;if(!(l&&e&&r&&t))return-1;var o=n(r-t),a=n(l-e),s=Math.sin(o/2)*Math.sin(o/2)+Math.cos(n(t))*Math.cos(n(r))*Math.sin(a/2)*Math.sin(a/2),u=2*Math.atan2(Math.sqrt(s),Math.sqrt(1-s)),c=i*u;return c},getDefaultSearchEngine:_platformEnvironment2.default.getDefaultSearchEngine,copyResult:_platformEnvironment2.default.copyResult,openPopup:_platformEnvironment2.default.openPopup,isOnPrivateTab:_platformEnvironment2.default.isOnPrivateTab,getAllCliqzPrefs:_platformEnvironment2.default.getAllCliqzPrefs,isDefaultBrowser:_platformEnvironment2.default.isDefaultBrowser,setDefaultSearchEngine:_platformEnvironment2.default.setDefaultSearchEngine,isUnknownTemplate:_platformEnvironment2.default.isUnknownTemplate,getEngineByName:_platformEnvironment2.default.getEngineByName,addEngineWithDetails:_platformEnvironment2.default.addEngineWithDetails,getEngineByAlias:_platformEnvironment2.default.getEngineByAlias,getSearchEngines:_platformEnvironment2.default.getSearchEngines,blackListedEngines:_platformEnvironment2.default.blackListedEngines,updateAlias:_platformEnvironment2.default.updateAlias,openLink:_platformEnvironment2.default.openLink,getCliqzPrefs:function(){function e(e){return e.indexOf(".")==-1&&e.indexOf("backup")==-1||e.indexOf(".enabled")!=-1}for(var t={},n=CliqzUtils.getAllCliqzPrefs().filter(e),l=0;l<n.length;l++)t[n[l]]=_prefs2.default.get(n[l]);return t},promiseHttpHandler:_http.promiseHttpHandler,registerResultProvider:function(e){_platformEnvironment2.default.CliqzResultProviders=e.ResultProviders,_platformEnvironment2.default.Result=e.Result},lastRenderedResults:[],lastRenderedURLs:[],lastSelection:-1,onRenderComplete:function(e,t){_platformEnvironment2.default.onRenderComplete&&(CliqzUtils.lastRenderedResults=this.extractSelectableElements(t).filter(function(e){return!(!e.getAttribute("url")&&!e.getAttribute("href"))}),CliqzUtils.lastRenderedURLs=CliqzUtils.lastRenderedResults.map(function(e){return e.getAttribute("url")||e.getAttribute("href")}),_platformEnvironment2.default.onRenderComplete(e,CliqzUtils.lastRenderedURLs))},onSelectionChange:function(e){if(e){var t=CliqzUtils.lastRenderedResults.indexOf(e);t==-1&&(t=CliqzUtils.lastRenderedURLs.indexOf(e.getAttribute("url"))),CliqzUtils.lastSelection!=t&&(CliqzUtils.lastSelection=t,_platformEnvironment2.default.onResultSelectionChange&&_platformEnvironment2.default.onResultSelectionChange(t))}}};exports.default=CliqzUtils,module.exports=exports.default;

},{"../platform/environment":123,"../platform/fetch":124,"./console":51,"./crypto/random":52,"./events":54,"./gzip":56,"./http":58,"./language":62,"./prefs":64,"./storage":67,"./tlds":68,"./url":69}],71:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _platformWebrequest=require("../platform/webrequest"),_platformWebrequest2=_interopRequireDefault(_platformWebrequest);exports.default=_platformWebrequest2.default,module.exports=exports.default;

},{"../platform/webrequest":142}],72:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),_utils=require("./utils"),_utils2=_interopRequireDefault(_utils),_events=require("./events"),_events2=_interopRequireDefault(_events),_historyManager=require("./history-manager"),_historyManager2=_interopRequireDefault(_historyManager),_default=function(){function e(t){_classCallCheck(this,e),this.window=t.window,this.actions={addClassToWindow:this.addClassToWindow.bind(this),removeClassFromWindow:this.removeClassFromWindow.bind(this)}}return _createClass(e,[{key:"init",value:function(){this.window.CLIQZEnvironment=_utils2.default.environment,this.window.CliqzUtils=_utils2.default,this.window.CliqzEvents=_events2.default,this.window.CliqzHistoryManager=_historyManager2.default}},{key:"unload",value:function(){delete this.window.CliqzUtils,delete this.window.CliqzEvents,delete this.window.CliqzHistoryManager}},{key:"addClassToWindow",value:function(){var e=[].slice.call(arguments),t=this.window.document.getElementById("main-window");e.forEach(function(e){t.classList.add(e)})}},{key:"removeClassFromWindow",value:function(){var e=[].slice.call(arguments),t=this.window.document.getElementById("main-window");e.forEach(function(e){t.classList.remove(e)})}}]),e}();exports.default=_default,module.exports=exports.default;

},{"./events":54,"./history-manager":57,"./utils":70}],73:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _coreUtils=require("../core/utils"),_coreUtils2=_interopRequireDefault(_coreUtils),_coreBaseBackground=require("../core/base/background"),_coreBaseBackground2=_interopRequireDefault(_coreBaseBackground),_corePlatform=require("../core/platform"),_main=require("./main"),_main2=_interopRequireDefault(_main),_cryptoWorker=require("./crypto-worker"),_cryptoWorker2=_interopRequireDefault(_cryptoWorker);exports.default=(0,_coreBaseBackground2.default)({init:function(){var e=(0,_corePlatform.isPlatformAtLeastInVersion)("48.0");e&&(this.enabled=!0,this.CliqzSecureMessage=_main2.default,_main2.default.init(),_main2.default.wCrypto=new _cryptoWorker2.default,_main2.default.wCrypto.onmessage=function(e){if("instant"===e.data.type){var t=_main2.default.queriesID[e.data.uid];delete _main2.default.queriesID[e.data.uid],t&&t({response:e.data.res})}})},unload:function(){this.enabled&&(_main2.default.wCrypto.terminate(),_main2.default.unload())},actions:{sha1:function(e){var t=new Promise(function(t,r){var a=new _cryptoWorker2.default;a.onmessage=function(e){var r=e.data.result;a.terminate(),t(r)},a.postMessage({msg:e,type:"hw-sha1"})});return t},md5:function(e){var t=new Promise(function(t,r){var a=new _cryptoWorker2.default;a.onmessage=function(e){var r=e.data.result;a.terminate(),t(r)},a.postMessage({msg:e,type:"hw-md5"})});return t},randBigInt:function(){var e=new Promise(function(e,t){var r=new _cryptoWorker2.default;r.onmessage=function(t){var a=t.data.result;r.terminate(),e(a)},r.postMessage({type:"hw-bigint"})});return e},sendTelemetry:function(e){return _main2.default.telemetry(e)},sendInstantMessage:function(e,t){return _main2.default.proxyIP(),new Promise(function(r,a){var n=new _cryptoWorker2.default;n.onmessage=function(e){var t=JSON.parse(e.data.res).result;n.terminate(),r(t)},n.postMessage({msg:{action:"instant",type:"cliqz",ts:"",ver:"1.5",payload:t,rp:e},uid:"",type:"instant",sourcemap:_main2.default.sourceMap,upk:_main2.default.uPK,dspk:_main2.default.dsPK,sspk:_main2.default.secureLogger,queryProxyUrl:_main2.default.queryProxyIP})})}}}),module.exports=exports.default;

},{"../core/base/background":47,"../core/platform":63,"../core/utils":70,"./crypto-worker":74,"./main":77}],74:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(r,t,o){return t&&e(r.prototype,t),o&&e(r,o),r}}(),_coreConfig=require("../core/config"),_coreConfig2=_interopRequireDefault(_coreConfig),CryptoWorker=function(){function e(){_classCallCheck(this,e),this.worker=new Worker(_coreConfig2.default.baseURL+"hpn/worker.bundle.js")}return _createClass(e,[{key:"postMessage",value:function(){var e;(e=this.worker).postMessage.apply(e,arguments)}},{key:"terminate",value:function(){this.worker.terminate()}},{key:"onmessage",set:function(e){this.worker.onmessage=e}}]),e}();exports.default=CryptoWorker,module.exports=exports.default;

},{"../core/config":50}],75:[function(require,module,exports){
"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function overRideCliqzResults(){function e(e,t,r,a,i,l,u){if(t.startsWith(_coreUtils2.default.RESULTS_PROVIDER)&&_coreUtils2.default.getPref("hpn-queryv2",!1)){var s=t.replace(_coreUtils2.default.RESULTS_PROVIDER,""),o=Math.floor(1e7*Math.random());return _main2.default.queriesID[o]=r,_main2.default.wCrypto.postMessage({msg:{action:"instant",type:"cliqz",ts:"",ver:"1.5",payload:s,rp:_coreUtils2.default.RESULTS_PROVIDER},uid:o,type:"instant",sourcemap:_main2.default.sourceMap,upk:_main2.default.uPK,dspk:_main2.default.dsPK,sspk:_main2.default.secureLogger,queryProxyUrl:_main2.default.queryProxyIP}),null}if(t.startsWith(_coreUtils2.default.RESULTS_PROVIDER_LOG)){var s=t.replace(_coreUtils2.default.RESULTS_PROVIDER_LOG,""),o=Math.floor(1e7*Math.random());return _main2.default.queriesID[o]=r,_main2.default.wCrypto.postMessage({msg:{action:"extension-result-telemetry",type:"cliqz",ts:"",ver:"1.5",payload:s},uid:o,type:"instant",sourcemap:_main2.default.sourceMap,upk:_main2.default.uPK,dspk:_main2.default.dsPK,sspk:_main2.default.secureLogger,queryProxyUrl:_main2.default.queryProxyIP}),null}if(t!==_coreUtils2.default.SAFE_BROWSING){if(t.startsWith(OFFER_TELEMETRY_PREFIX)){var n=_main2.default.proxyIP();if(!n)throw new Error("Failed to send message, as the list of proxies is empty");var s=t.replace(OFFER_TELEMETRY_PREFIX,""),o=Math.floor(1e7*Math.random());_main2.default.queriesID[o]=r;var p={msg:{action:"offers-api",type:"cliqz",ts:"",ver:"1.5",payload:s,rp:OFFER_TELEMETRY_PREFIX,body:l},uid:o,type:"instant",sourcemap:_main2.default.sourceMap,upk:_main2.default.uPK,dspk:_main2.default.dsPK,sspk:_main2.default.secureLogger,queryProxyUrl:n};return _main2.default.wCrypto.postMessage(p),null}return proxyHttpHandler.apply(void 0,arguments)}var d=JSON.parse(l);return d.length>0&&d.forEach(function(e){_main2.default.telemetry(e)}),r&&r({response:'{"success":true}'}),null}_coreUtils2.default.getPref("proxyNetwork",!0)!==!1&&(proxyHttpHandler||(proxyHttpHandler=http.defaultHttpHandler),http.overrideHttpHandler(e),http.addCompressionExclusion(_coreUtils2.default.SAFE_BROWSING))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.overRideCliqzResults=overRideCliqzResults;var _coreUtils=require("../core/utils"),_coreUtils2=_interopRequireDefault(_coreUtils),_coreHttp=require("../core/http"),http=_interopRequireWildcard(_coreHttp),_main=require("./main"),_main2=_interopRequireDefault(_main),OFFER_TELEMETRY="https://offers-api.cliqz.com/api/v1/savesignal",OFFER_TELEMETRY_PREFIX="https://offers-api.cliqz.com",proxyHttpHandler=null;

},{"../core/http":58,"../core/utils":70,"./main":77}],76:[function(require,module,exports){
arguments[4][59][0].apply(exports,arguments)
},{"./background":73,"./window":81,"dup":59}],77:[function(require,module,exports){
"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _platformHpnStorage=require("../platform/hpn/storage"),_platformHpnStorage2=_interopRequireDefault(_platformHpnStorage),_coreUtils=require("../core/utils"),_coreUtils2=_interopRequireDefault(_coreUtils),_coreConfig=require("../core/config"),_coreConfig2=_interopRequireDefault(_coreConfig),_coreResourceLoader=require("../core/resource-loader"),_coreResourceLoader2=_interopRequireDefault(_coreResourceLoader),_sendMessage=require("./send-message"),_utils=require("./utils"),hpnUtils=_interopRequireWildcard(_utils),_httpHandlerPatch=require("./http-handler-patch"),_proxyFilter=require("./proxy-filter"),_proxyFilter2=_interopRequireDefault(_proxyFilter),_cryptoWorker=require("./crypto-worker"),_cryptoWorker2=_interopRequireDefault(_cryptoWorker),proxyCounter=0,CliqzSecureMessage={VERSION:"0.1",LOG_KEY:"securemessage",debug:!1,counter:0,secureLogger:{},uPK:{},dsPK:{},routeTable:null,routeTableLoader:null,RSAKey:"",eventID:{},sourceMap:null,sourceMapLoader:null,tmult:4,tpace:250,SOURCE_MAP_PROVIDER:_coreConfig2.default.settings.ENDPOINT_SOURCE_MAP_PROVIDER,LOOKUP_TABLE_PROVIDER:_coreConfig2.default.settings.ENDPOINT_LOOKUP_TABLE_PROVIDER,KEYS_PROVIDER:_coreConfig2.default.settings.ENDPOINT_KEYS_PROVIDER,proxyList:null,proxyListLoader:null,proxyStats:{},PROXY_LIST_PROVIDER:_coreConfig2.default.settings.ENDPOINT_PROXY_LIST_PROVIDER,BLIND_SIGNER:_coreConfig2.default.settings.ENDPOINT_BLIND_SIGNER,USER_REG:_coreConfig2.default.settings.ENDPOINT_USER_REG,localTemporalUniq:null,wCrypto:null,queriesID:{},servicesToProxy:["api.cliqz.com","antiphishing.cliqz.com"],proxyInfoObj:{},queryProxyFilter:null,pacemaker:function(){if(CliqzSecureMessage.counter+=1,CliqzSecureMessage.counter/CliqzSecureMessage.tmult%10===0&&CliqzSecureMessage.debug&&_coreUtils2.default.log("Pacemaker: "+CliqzSecureMessage.counter/CliqzSecureMessage.tmult,CliqzSecureMessage.LOG_KEY),CliqzSecureMessage.counter/CliqzSecureMessage.tmult%5===0){var e=Date.now();if(!_coreUtils2.default.getWindow()||!_coreUtils2.default.getWindow().CLIQZ||!_coreUtils2.default.getWindow().CLIQZ.UI)return;var r=e-_coreUtils2.default.getWindow().CLIQZ.UI.lastInputTime;r>0&&r>2e3&&CliqzSecureMessage.proxyIP(),CliqzSecureMessage.uPK.publicKeyB64&&CliqzSecureMessage.uPK.privateKey||CliqzSecureMessage.registerUser()}CliqzSecureMessage.counter/CliqzSecureMessage.tmult%900===0&&(CliqzSecureMessage.debug&&_coreUtils2.default.log("Clean local temp queue",CliqzSecureMessage.LOG_KEY),hpnUtils.prunelocalTemporalUniq())},trk:[],trkTimer:null,telemetry:function(e,r){!CliqzSecureMessage||_coreUtils2.default.getPref("dnt",!1)||_coreUtils2.default.isPrivate(_coreUtils2.default.getWindow())||(e&&CliqzSecureMessage.trk.push(e),_coreUtils2.default.clearTimeout(CliqzSecureMessage.trkTimer),r||CliqzSecureMessage.trk.length%20===0?CliqzSecureMessage.pushTelemetry():CliqzSecureMessage.trkTimer=_coreUtils2.default.setTimeout(CliqzSecureMessage.pushTelemetry,1e4))},_telemetry_req:null,_telemetry_sending:[],telemetry_MAX_SIZE:500,previousDataPost:null,pushMessage:[],routeHashTable:null,eacemakerId:null,queryProxyIP:null,performance:null,pushTelemetry:function(){CliqzSecureMessage._telemetry_sending=CliqzSecureMessage.trk.splice(0),CliqzSecureMessage.pushMessage=hpnUtils.trkGen(CliqzSecureMessage._telemetry_sending);var e=CliqzSecureMessage.nextMessage();return e?(0,_sendMessage.sendM)(e):Promise.resolve([])},nextMessage:function(){if(CliqzSecureMessage._telemetry_sending.length>0)return CliqzSecureMessage._telemetry_sending[CliqzSecureMessage.pushMessage.next().value]},initAtWindow:function(e){},init:function(){null==CliqzSecureMessage.pacemakerId&&(CliqzSecureMessage.pacemakerId=_coreUtils2.default.setInterval(CliqzSecureMessage.pacemaker.bind(this),CliqzSecureMessage.tpace,null)),this.storage=new _platformHpnStorage2.default(this),CliqzSecureMessage.localTemporalUniq||this.storage.loadLocalCheckTable(),this.sourceMapLoader=new _coreResourceLoader2.default(["hpn","sourcemap.json"],{remoteURL:CliqzSecureMessage.SOURCE_MAP_PROVIDER}),this.sourceMapLoader.load().then(function(e){CliqzSecureMessage.sourceMap=e}),this.sourceMapLoader.onUpdate(function(e){return CliqzSecureMessage.sourceMap=e}),this.proxyListLoader=new _coreResourceLoader2.default(["hpn","proxylist.json"],{remoteURL:CliqzSecureMessage.PROXY_LIST_PROVIDER,cron:3e5,updateInterval:3e5}),this.proxyListLoader.load().then(function(e){CliqzSecureMessage.proxyList=e}),this.proxyListLoader.onUpdate(function(e){return CliqzSecureMessage.proxyList=e}),this.routeTableLoader=new _coreResourceLoader2.default(["hpn","routeTable.json"],{remoteURL:CliqzSecureMessage.LOOKUP_TABLE_PROVIDER,cron:3e5,updateInterval:3e5}),this.routeTableLoader.load().then(function(e){CliqzSecureMessage.routeTable=e}),this.routeTableLoader.onUpdate(function(e){return CliqzSecureMessage.routeTable=e}),CliqzSecureMessage.dsPK.pubKeyB64=_coreConfig2.default.settings.KEY_DS_PUBKEY,CliqzSecureMessage.secureLogger.publicKeyB64=_coreConfig2.default.settings.KEY_SECURE_LOGGER_PUBKEY,_coreUtils2.default.getPref("proxyNetwork",!0)&&(0,_httpHandlerPatch.overRideCliqzResults)(),CliqzSecureMessage.registerUser(),CliqzSecureMessage.queryProxyFilter=new _proxyFilter2.default,CliqzSecureMessage.queryProxyFilter.init()},unload:function(){CliqzSecureMessage.queryProxyFilter.unload(),this.storage.saveLocalCheckTable(),CliqzSecureMessage.pushTelemetry(),this.sourceMapLoader.stop(),this.proxyListLoader.stop(),this.routeTableLoader.stop(),_coreUtils2.default.clearTimeout(CliqzSecureMessage.pacemakerId),this.storage.close()},proxyIP:function(){if(CliqzSecureMessage.proxyList){proxyCounter>=CliqzSecureMessage.proxyList.length&&(proxyCounter=0);var e=hpnUtils.createHttpUrl(CliqzSecureMessage.proxyList[proxyCounter]);return CliqzSecureMessage.queryProxyIP=e,proxyCounter+=1,e}},registerUser:function(){var e=this;this.storage.loadKeys().then(function(r){r?(CliqzSecureMessage.uPK.publicKeyB64=r.publicKey,CliqzSecureMessage.uPK.privateKey=r.privateKey):!function(){var r=new _cryptoWorker2.default;r.onmessage=function(t){if(t.data.status){var s={};s.privateKey=t.data.privateKey,s.publicKey=t.data.publicKey,s.ts=Date.now(),e.storage.saveKeys(s).then(function(e){e.status&&(CliqzSecureMessage.uPK.publicKeyB64=e.data.publicKey,CliqzSecureMessage.uPK.privateKey=e.data.privateKey)})}r.terminate()},r.postMessage({type:"user-key"})}()})}};exports.default=CliqzSecureMessage,module.exports=exports.default;

},{"../core/config":50,"../core/resource-loader":65,"../core/utils":70,"../platform/hpn/storage":129,"./crypto-worker":74,"./http-handler-patch":75,"./proxy-filter":78,"./send-message":79,"./utils":80}],78:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),_get=function(e,t,r){for(var o=!0;o;){var n=e,i=t,l=r;o=!1,null===n&&(n=Function.prototype);var u=Object.getOwnPropertyDescriptor(n,i);if(void 0!==u){if("value"in u)return u.value;var a=u.get;if(void 0===a)return;return a.call(l)}var f=Object.getPrototypeOf(n);if(null===f)return;e=f,t=i,r=l,o=!0,u=f=void 0}},_coreUtils=require("../core/utils"),_coreUtils2=_interopRequireDefault(_coreUtils),_coreConsole=require("../core/console"),_coreConsole2=_interopRequireDefault(_coreConsole),_platformProxyFilter=require("../platform/proxy-filter"),_platformProxyFilter2=_interopRequireDefault(_platformProxyFilter),_utils=require("./utils"),_main=require("./main"),_main2=_interopRequireDefault(_main),_default=function(e){function t(){_classCallCheck(this,t),_get(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.method="socks",this.port=9004}return _inherits(t,e),_createClass(t,[{key:"shouldProxy",value:function(e){var t=_coreUtils2.default.getWindow();return"https"===e.scheme&&_main2.default.servicesToProxy.indexOf(e.host)>-1&&(_coreUtils2.default.getPref("hpn-query",!1)||_coreUtils2.default.isOnPrivateTab(t))}},{key:"proxy",value:function(){if(_main2.default.proxyList){var e=(0,_utils.getRandomIntInclusive)(0,3),t=_main2.default.proxyList[e];if(_coreConsole2.default.log("Proxying Query: "+t),_main2.default.proxyInfoObj[t])return _main2.default.proxyInfoObj[t];var r=this.newProxy(this.method,t,this.port,null,1e3,null);return _main2.default.proxyInfoObj[t]=r,r}}}]),t}(_platformProxyFilter2.default);exports.default=_default,module.exports=exports.default;

},{"../core/console":51,"../core/utils":70,"../platform/proxy-filter":135,"./main":77,"./utils":80}],79:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function sendM(e){var a=arguments.length<=1||void 0===arguments[1]?[]:arguments[1],t=new _cryptoWorker2.default;sendMessage(t,e),t.onmessage=function(e){"telemetry"===e.data.type&&(_main2.default.localTemporalUniq=e.data.localTemporalUniq,_main2.default.storage.saveLocalCheckTable());var r=_main2.default.nextMessage();return r?void sendMessage(t,r):(_main2.default.storage.saveLocalCheckTable(),t.terminate(),a)}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.sendM=sendM;var _main=require("./main"),_main2=_interopRequireDefault(_main),_cryptoWorker=require("./crypto-worker"),_cryptoWorker2=_interopRequireDefault(_cryptoWorker),sendMessage=function(e,a){try{e.postMessage({msg:a,type:"telemetry",sourcemap:_main2.default.sourceMap,upk:_main2.default.uPK,dspk:_main2.default.dsPK,sspk:_main2.default.secureLogger,routetable:_main2.default.routeTable,localTemporalUniq:_main2.default.localTemporalUniq})}catch(e){}};

},{"./crypto-worker":74,"./main":77}],80:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function createHttpUrl(e){return"http://"+e+"/verify"}function trkGen(e){var n=e,t=-1;return{next:function(){return t+=1,t<n.length?{value:t,done:!1}:{value:void 0,done:!0}}}}function prunelocalTemporalUniq(){_main2.default.localTemporalUniq&&Object.keys(_main2.default.localTemporalUniq).length>0&&!function(){var e=Date.now(),n=0;Object.keys(_main2.default.localTemporalUniq).forEach(function(t){var r=_main2.default.localTemporalUniq[t].ts,o=e-r;o>=864e5&&(delete _main2.default.localTemporalUniq[t],n+=1)})}()}function getRandomIntInclusive(e,n){return e=Math.ceil(e),n=Math.floor(n),Math.floor(Math.random()*(n-e+1))+e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.createHttpUrl=createHttpUrl,exports.trkGen=trkGen,exports.prunelocalTemporalUniq=prunelocalTemporalUniq,exports.getRandomIntInclusive=getRandomIntInclusive;var _main=require("./main"),_main2=_interopRequireDefault(_main),_coreConsole=require("../core/console"),_coreConsole2=_interopRequireDefault(_coreConsole);

},{"../core/console":51,"./main":77}],81:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),_coreUtils=require("../core/utils"),_coreUtils2=_interopRequireDefault(_coreUtils),_default=function(){function e(t){var i=t.window,r=t.background;_classCallCheck(this,e),this.background=r,this.window=i}return _createClass(e,[{key:"init",value:function(){this.background.CliqzSecureMessage&&(this.background.CliqzSecureMessage.initAtWindow(this.window),this.window.CliqzSecureMessage=this.background.CliqzSecureMessage,Object.assign(this.window.CliqzSecureMessage,this.background.actions))}},{key:"unload",value:function(){}},{key:"status",value:function(){if(this.background.CliqzSecureMessage)return{visible:!0,state:_coreUtils2.default.getPref("hpn-query")}}}]),e}();exports.default=_default,module.exports=exports.default;

},{"../core/utils":70}],82:[function(require,module,exports){
'use strict';
var app, modules = {};

var storageCheck = function() {
  try {
    localStorage.setItem('test', true);
    localStorage.removeItem('test');
    window.indexedDB;
    return true;
  } catch(e) {
    return false;
  }
}

if(window.navigator.cookieEnabled && storageCheck()){
  var App = require('./core/app');

  app = new App({});

  Object.keys(app.availableModules).forEach(function (moduleName) {
    modules[moduleName] = {
      actions: app.availableModules[moduleName].backgroundModule.actions,
    };
  });
}

module.exports = {
  start: function () {
    if(window.navigator.cookieEnabled && storageCheck()){
      return app.start();
    } else {
      Promise.reject('Cookies or localStorage are disabled');
    }

  },
  modules: modules,
};

},{"./core/app":43}],83:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_get=function(e,t,r){for(var n=!0;n;){var s=e,a=t,o=r;n=!1,null===s&&(s=Function.prototype);var i=Object.getOwnPropertyDescriptor(s,a);if(void 0!==i){if("value"in i)return i.value;var u=i.get;if(void 0===u)return;return u.call(o)}var c=Object.getPrototypeOf(s);if(null===c)return;e=c,t=a,r=o,n=!0,i=c=void 0}},_coreBaseBackground=require("../core/base/background"),_coreBaseBackground2=_interopRequireDefault(_coreBaseBackground),_messageCenter=require("./message-center"),_messageCenter2=_interopRequireDefault(_messageCenter),_handlersBase=require("./handlers/base"),_handlersBase2=_interopRequireDefault(_handlersBase);exports.default=(0,_coreBaseBackground2.default)({init:function(e){this.messageCenter=_messageCenter2.default.getInstance()},unload:function(){},beforeBrowserShutdown:function(){},events:{"msg_center:show_message":function(){this.messageCenter.showMessage.apply(this.messageCenter,arguments)},"msg_center:hide_message":function(){this.messageCenter.hideMessage.apply(this.messageCenter,arguments)}},actions:{registerMessageHandler:function(e,t){var r=function(e){function r(){_classCallCheck(this,r),_get(Object.getPrototypeOf(r.prototype),"constructor",this).apply(this,arguments)}return _inherits(r,e),_createClass(r,[{key:"_renderMessage",value:function(e){t(e)}},{key:"_hideMessage",value:function(e){}}]),r}(_handlersBase2.default);this.messageCenter.registerMessageHandler(e,new r)},showMessage:function(e,t){this.messageCenter.showMessage(t,e)},hideMessage:function(e,t){this.messageCenter.hideMessage(t,e)}}}),module.exports=exports.default;

},{"../core/base/background":47,"./handlers/base":85,"./message-center":90}],84:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),_get=function(e,t,r){for(var o=!0;o;){var n=e,i=t,l=r;o=!1,null===n&&(n=Function.prototype);var a=Object.getOwnPropertyDescriptor(n,i);if(void 0!==a){if("value"in a)return a.value;var u=a.get;if(void 0===u)return;return u.call(l)}var s=Object.getPrototypeOf(n);if(null===s)return;e=s,t=i,r=l,o=!0,a=s=void 0}},_coreUtils=require("../../core/utils"),_coreUtils2=_interopRequireDefault(_coreUtils),_base=require("./base"),_base2=_interopRequireDefault(_base),CliqzMsgHandlerAlert=function(e){function t(){_classCallCheck(this,t),_get(Object.getPrototypeOf(t.prototype),"constructor",this).call(this)}return _inherits(t,e),_createClass(t,[{key:"_renderMessage",value:function(e){_coreUtils2.default.getWindow().alert(e.text),this._callbacks[e.id]&&this._callbacks[e.id](e.id,e.options&&e.options.length>0&&e.options[0].action),this.showNextMessage()}},{key:"_hideMessage",value:function(e){}}]),t}(_base2.default);exports.default=CliqzMsgHandlerAlert,module.exports=exports.default;

},{"../../core/utils":70,"./base":85}],85:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,s){for(var t=0;t<s.length;t++){var i=s[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(s,t,i){return t&&e(s.prototype,t),i&&e(s,i),s}}(),_coreUtils=require("../../core/utils"),_coreUtils2=_interopRequireDefault(_coreUtils),CliqzMsgHandler=function(){function e(){_classCallCheck(this,e),this._messageQueue=[],this._callbacks={}}return _createClass(e,[{key:"enqueueMessage",value:function(e,s){var t=this._messageQueue.some(function(s){return s.id===e.id});t||(this._messageQueue.push(e),this._callbacks[e.id]=s,1===this._messageQueue.length&&this._renderMessage(e))}},{key:"dequeueMessage",value:function(e){var s=this._messageQueue.indexOf(e);if(s===-1){var t=this._messageQueue.find(function(s){return s.id===e.id});t&&(e=t,s=this._messageQueue.indexOf(e))}0===s?this.showNextMessage():s>-1&&(this._messageQueue.splice(s,1),delete this._callbacks[e.id])}},{key:"showNextMessage",value:function(){var e=this._messageQueue.shift();e&&(delete this._callbacks[e.id],this._hideMessage(e),this._messageQueue.length>0&&this._renderMessage(this._messageQueue[0]))}},{key:"_renderMessage",value:function(){throw"_renderMessage not implemented"}},{key:"_hideMessage",value:function(){throw"_hideMessage not implemented"}}]),e}();exports.default=CliqzMsgHandler,module.exports=exports.default;

},{"../../core/utils":70}],86:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),_get=function(e,t,r){for(var o=!0;o;){var u=e,n=t,a=r;o=!1,null===u&&(u=Function.prototype);var i=Object.getOwnPropertyDescriptor(u,n);if(void 0!==i){if("value"in i)return i.value;var l=i.get;if(void 0===l)return;return l.call(a)}var f=Object.getPrototypeOf(u);if(null===f)return;e=f,t=n,r=a,o=!0,i=f=void 0}},_coreCliqz=require("../../core/cliqz"),_base=require("./base"),_base2=_interopRequireDefault(_base),_platformUiTour=require("../../platform/ui-tour"),_platformUiTour2=_interopRequireDefault(_platformUiTour),CliqzMsgHandlerCallout=function(e){function t(){_classCallCheck(this,t),_get(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return _inherits(t,e),_createClass(t,[{key:"_renderMessage",value:function(e){_platformUiTour2.default.targets.set(e.target,{query:"#"+e.target,widgetName:e.target,allowAdd:!0});var t=_platformUiTour2.default.getTarget(_coreCliqz.utils.getWindow(),e.target);t.then(function(t){_coreCliqz.utils.setTimeout(function(){_platformUiTour2.default.showInfo(_coreCliqz.utils.getWindow(),t,e.title,e.text,"",e.buttons)},1500)})}},{key:"_hideMessage",value:function(e){}}]),t}(_base2.default);exports.default=CliqzMsgHandlerCallout,module.exports=exports.default;

},{"../../core/cliqz":49,"../../platform/ui-tour":140,"./base":85}],87:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),_get=function(e,t,r){for(var o=!0;o;){var n=e,s=t,a=r;o=!1,null===n&&(n=Function.prototype);var i=Object.getOwnPropertyDescriptor(n,s);if(void 0!==i){if("value"in i)return i.value;var u=i.get;if(void 0===u)return;return u.call(a)}var l=Object.getPrototypeOf(n);if(null===l)return;e=l,t=s,r=a,o=!0,i=l=void 0}},_coreUtils=require("../../core/utils"),_coreUtils2=_interopRequireDefault(_coreUtils),_coreEvents=require("../../core/events"),_coreEvents2=_interopRequireDefault(_coreEvents),_base=require("./base"),_base2=_interopRequireDefault(_base),CliqzMsgHandlerDropdown=function(e){function t(){_classCallCheck(this,t),_get(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),_coreEvents2.default.sub("ui:dropdown_message_click",this._onClick.bind(this))}return _inherits(t,e),_createClass(t,[{key:"_renderMessage",value:function(e){_coreEvents2.default.pub("msg_handler_dropdown:message_ready",this._convertMessage(e))}},{key:"_hideMessage",value:function(e){_coreEvents2.default.pub("msg_handler_dropdown:message_revoked",this._convertMessage(e))}},{key:"_convertMessage",value:function(e){return{"footer-message":{simple_message:e.text,type:"cqz-message-survey",location:e.location,options:(e.options||[]).map(function(e){return{text:e.label,state:e.style,action:e.action}})}}}},{key:"_onClick",value:function(e){var t=this._messageQueue[0];t&&this._callbacks[t.id]&&this._callbacks[t.id](t.id,e)}}]),t}(_base2.default);exports.default=CliqzMsgHandlerDropdown,module.exports=exports.default;

},{"../../core/events":54,"../../core/utils":70,"./base":85}],88:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _inherits(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(r,t,o){return t&&e(r.prototype,t),o&&e(r,o),r}}(),_get=function(e,r,t){for(var o=!0;o;){var n=e,a=r,u=t;o=!1,null===n&&(n=Function.prototype);var i=Object.getOwnPropertyDescriptor(n,a);if(void 0!==i){if("value"in i)return i.value;var s=i.get;if(void 0===s)return;return s.call(u)}var c=Object.getPrototypeOf(n);if(null===c)return;e=c,r=a,t=u,o=!0,i=c=void 0}},_coreCliqz=require("../../core/cliqz"),_base=require("./base"),_base2=_interopRequireDefault(_base),_coreKordInject=require("../../core/kord/inject"),_coreKordInject2=_interopRequireDefault(_coreKordInject),CliqzMsgHandlerFreshTab=function(e){function r(){_classCallCheck(this,r),_get(Object.getPrototypeOf(r.prototype),"constructor",this).apply(this,arguments)}return _inherits(r,e),_createClass(r,[{key:"_renderMessage",value:function(e){_coreKordInject2.default.module("freshtab").isReady().then(function(){_coreCliqz.events.pub("message-center:handlers-freshtab:new-message",e)})}},{key:"_hideMessage",value:function(e){_coreCliqz.events.pub("message-center:handlers-freshtab:clear-message",e)}}]),r}(_base2.default);exports.default=CliqzMsgHandlerFreshTab,module.exports=exports.default;

},{"../../core/cliqz":49,"../../core/kord/inject":61,"./base":85}],89:[function(require,module,exports){
arguments[4][59][0].apply(exports,arguments)
},{"./background":83,"./window":91,"dup":59}],90:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _log(e){_coreUtils2.default.log(e,"CliqzMsgCenter")}function CliqzMsgCenter(){this._messageHandlers={},this.showMessage=this.showMessage.bind(this),this.hideMessage=this.hideMessage.bind(this),this.registerMessageHandler("MESSAGE_HANDLER_DROPDOWN",new _handlersDropdown2.default),this.registerMessageHandler("MESSAGE_HANDLER_ALERT",new _handlersAlert2.default),this.registerMessageHandler("MESSAGE_HANDLER_FRESHTAB",new _handlersFreshtab2.default)}Object.defineProperty(exports,"__esModule",{value:!0});var _coreUtils=require("../core/utils"),_coreUtils2=_interopRequireDefault(_coreUtils),_coreEvents=require("../core/events"),_coreEvents2=_interopRequireDefault(_coreEvents),_handlersAlert=require("./handlers/alert"),_handlersAlert2=_interopRequireDefault(_handlersAlert),_handlersDropdown=require("./handlers/dropdown"),_handlersDropdown2=_interopRequireDefault(_handlersDropdown),_handlersFreshtab=require("./handlers/freshtab"),_handlersFreshtab2=_interopRequireDefault(_handlersFreshtab),_handlersCallout=require("./handlers/callout"),_handlersCallout2=_interopRequireDefault(_handlersCallout);CliqzMsgCenter.prototype={registerMessageHandler:function(e,s){this._messageHandlers[e]=s},showMessage:function(e,s,r){var t=this._messageHandlers[s];t?t.enqueueMessage(e,r):_log("message handler not found: "+s)},hideMessage:function(e,s){var r=this._messageHandlers[s];r?r.dequeueMessage(e):_log("message handler not found: "+s)}},CliqzMsgCenter.getInstance=function(){return _coreUtils2.default.log("!!Get instance"),CliqzMsgCenter.getInstance.instance=CliqzMsgCenter.getInstance.instance||new CliqzMsgCenter,CliqzMsgCenter.getInstance.instance},CliqzMsgCenter.getInstance(),exports.default=CliqzMsgCenter,module.exports=exports.default;

},{"../core/events":54,"../core/utils":70,"./handlers/alert":84,"./handlers/callout":86,"./handlers/dropdown":87,"./handlers/freshtab":88}],91:[function(require,module,exports){
"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),_default=function(){function e(t){_classCallCheck(this,e)}return _createClass(e,[{key:"init",value:function(){}},{key:"unload",value:function(){}}]),e}();exports.default=_default,module.exports=exports.default;

},{}],92:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var ActionID={AID_OFFER_SHOWN:"offer_shown",AID_OFFER_HIDE:"offer_hide",AID_OFFER_TIMEOUT:"offer_timeout",AID_OFFER_CLOSED:"offer_closed",AID_OFFER_REMOVED:"offer_removed",AID_OFFER_MORE_INFO:"offer_more_info",AID_OFFER_MORE_ABT_CLIQZ:"offer_more_cliqz",AID_OFFER_CALL_TO_ACTION:"offer_ca_action",AID_OFFER_ADDED:"offer_added",AID_OFFER_DEACTIVATED:"offer_deactivated",AID_OFFER_DISPLAYED:"offer_displayed"};exports.default=ActionID,module.exports=exports.default;

},{}],93:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _coreCliqz=require("../core/cliqz"),_coreBaseBackground=require("../core/base/background"),_coreBaseBackground2=_interopRequireDefault(_coreBaseBackground),_offers_configs=require("./offers_configs"),_offers_configs2=_interopRequireDefault(_offers_configs),_logging_handler=require("./logging_handler"),_logging_handler2=_interopRequireDefault(_logging_handler),_environmentsExtension_environment=require("./environments/extension_environment"),_environmentsExtension_environment2=_interopRequireDefault(_environmentsExtension_environment),_event_loop=require("./event_loop"),_event_loop2=_interopRequireDefault(_event_loop),_event_handler=require("./event_handler"),_offer_processor=require("./offer_processor"),_offer_processor2=_interopRequireDefault(_offer_processor),_signals_handler=require("./signals_handler"),_coreDatabase=require("../core/database"),_coreDatabase2=_interopRequireDefault(_coreDatabase),_offers_db=require("./offers_db"),_offers_db2=_interopRequireDefault(_offers_db),MODULE_NAME="background";exports.default=(0,_coreBaseBackground2.default)({init:function(e){var r=this;return _coreCliqz.utils.getPref("offers2FeatureEnabled",!1)?(_coreCliqz.utils.getPref("offersLogsEnabled",!1)&&(_logging_handler2.default.LOG_ENABLED=!0),_coreCliqz.utils.getPref("offersFileLogsEnabled",!1)&&(_logging_handler2.default.SAVE_TO_FILE=!0),_coreCliqz.utils.getPref("offersDevFlag",!1)&&(_offers_configs2.default.LOAD_OFFERS_STORAGE_DATA=!1,_logging_handler2.default.LOG_ENABLED=!0,_logging_handler2.default.SAVE_TO_FILE=!0,_offers_configs2.default.LOAD_TRIGGER_HISTORY_DATA=!1,_offers_configs2.default.SIGNALS_LOAD_FROM_DB=_coreCliqz.utils.getPref("offersLoadSignalsFromDB",!1),_offers_configs2.default.LOAD_OFFERS_STORAGE_DATA=_coreCliqz.utils.getPref("offersSaveStorage",!1)),_coreCliqz.utils.getPref("triggersBE")&&(_offers_configs2.default.BACKEND_URL=_coreCliqz.utils.getPref("triggersBE")),_coreCliqz.utils.getPref("offersTelemetryFreq")&&(_offers_configs2.default.SIGNALS_OFFERS_FREQ_SECS=_coreCliqz.utils.getPref("offersTelemetryFreq")),_coreCliqz.utils.getPref("offersOverrideTimeout")&&(_offers_configs2.default.OFFERS_OVERRIDE_TIMEOUT=_coreCliqz.utils.getPref("offersOverrideTimeout")),_logging_handler2.default.init(),_logging_handler2.default.LOG_ENABLED&&_logging_handler2.default.info(MODULE_NAME,"init"),_logging_handler2.default.init(),this.onWindowClosed=this.onWindowClosed.bind(this),_coreCliqz.events.sub("core.window_closed",this.onWindowClosed),_logging_handler2.default.LOG_ENABLED&&_logging_handler2.default.info(MODULE_NAME,"\n\n------------------------------------------------------------------------\n                           NEW SESSION STARTED\nVersion: "+_offers_configs2.default.CURRENT_VERSION+"\ntimestamp: "+Date.now()+"\nLoggingHandler.LOG_ENABLED: "+_logging_handler2.default.LOG_ENABLED+"\nLoggingHandler.SAVE_TO_FILE: "+_logging_handler2.default.SAVE_TO_FILE+"\ndev_flag: "+_coreCliqz.utils.getPref("offersDevFlag",!1)+"\n------------------------------------------------------------------------\n"),this.db=new _coreDatabase2.default("cliqz-offers"),this.offersDB=new _offers_db2.default(this.db),this.eventHandler=new _event_handler.EventHandler,this.env=new _environmentsExtension_environment2.default,this.el=new _event_loop2.default(this.env),this.onUrlChange=this.onUrlChange.bind(this),this.eventHandler.subscribeUrlChange(this.onUrlChange),this.onHttpRequest=this.onHttpRequest.bind(this),this.env.watchDomain=function(e){r.eventHandler.subscribeHttpReq(r.onHttpRequest,e)&&_logging_handler2.default.LOG_ENABLED&&_logging_handler2.default.info(MODULE_NAME,"Subscribed to all HTTP requests for domain "+e)},this.signalsHandler=new _signals_handler.SignalHandler(this.db),this.offerProc=new _offer_processor2.default(this.signalsHandler,this.db,this.offersDB),this.actions={getStoredOffers:this.getStoredOffers.bind(this)},this.env.offerProcessor=this.offerProc,this.env.signalHandler=this.signalsHandler,this.env.offersDB=this.offersDB,void(this.initialized=!0)):void(this.initialized=!1)},unload:function(){this.initialized!==!1&&(_coreCliqz.events.un_sub("core.window_closed",this.onWindowClosed),this.offerProc&&this.offerProc.destroy(),this.signalsHandler&&this.signalsHandler.destroy(),this.eventHandler&&(this.eventHandler.destroy(),delete this.eventHandler),this.offersDB&&this.offersDB.savePersistentData())},start:function(){},beforeBrowserShutdown:function(){this.initialized!==!1&&(_logging_handler2.default.LOG_ENABLED&&_logging_handler2.default.info(MODULE_NAME,"unloading background"),this.offerProc&&(this.offerProc.savePersistenceData(),this.offerProc.destroy()),this.offersDB&&this.offersDB.savePersistentData(),this.signalsHandler&&this.signalsHandler.savePersistenceData(),_logging_handler2.default.LOG_ENABLED&&_logging_handler2.default.info(MODULE_NAME,"background script unloaded"))},onWindowClosed:function(e){_logging_handler2.default.LOG_ENABLED&&_logging_handler2.default.info(MODULE_NAME,"window closed!!: remaining: "+e.remaining),0===e.remaining&&this.offerProc&&this.offerProc.savePersistenceData()},onUrlChange:function(e,r){r&&this.env.emitUrlChange(r,e)},onHttpRequest:function(e){e&&e.req_obj&&e.req_obj.url&&this.env.emitUrlChange(e.req_obj.url)},events:{},actions:{},getStoredOffers:function(e){return this.offerProc?this.offerProc.getStoredOffers(e):[]}}),module.exports=exports.default;

},{"../core/base/background":47,"../core/cliqz":49,"../core/database":53,"./environments/extension_environment":96,"./event_handler":97,"./event_loop":98,"./logging_handler":102,"./offer_processor":103,"./offers_configs":104,"./offers_db":105,"./signals_handler":113}],94:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function linfo(e){_logging_handler2.default.LOG_ENABLED&&_logging_handler2.default.info(MODULE_NAME,e)}function lerr(e){_logging_handler2.default.LOG_ENABLED&&_logging_handler2.default.error(MODULE_NAME,e)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_logging_handler=require("./logging_handler"),_logging_handler2=_interopRequireDefault(_logging_handler),MODULE_NAME="db_helper",DBHelper=function(){function e(t){_classCallCheck(this,e),this.db=t}return _createClass(e,[{key:"saveDocData",value:function(e,t){var n=this;return this.db.get(e).catch(function(){return{_id:e,doc_data:{}}}).then(function(e){var r=Object.assign({},e,{doc_data:Object.assign({},e.doc_data,t)});return n.db.put(r)})}},{key:"getDocData",value:function(e){return this.db.get(e).then(function(e){return e.doc_data}).catch(function(t){return lerr("getDocData: error getting doc "+e+" with err: "+t),null})}},{key:"removeDocData",value:function(e){var t=this;return t.db.get(e).then(function(n){return linfo("removeDocData: removing doc "+e),t.db.remove(n)}).then(function(){linfo("removeDocData: doc "+e+" removed properly")}).catch(function(t){lerr("removeDocData: something happened removing the doc: "+e+" - err: "+t)})}}]),e}();exports.default=DBHelper,module.exports=exports.default;

},{"./logging_handler":102}],95:[function(require,module,exports){
"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),EmptyEnvironment=function(){function e(){_classCallCheck(this,e),this.urlChangeListener=void 0}return _createClass(e,[{key:"onUrlChange",value:function(e){this.urlChangeListener=e}},{key:"emitUrlChange",value:function(e,n){this.urlChangeListener(e,n)}},{key:"watchDomain",value:function(e){}},{key:"queryHistory",value:function(e,n){return[]}},{key:"sendApiRequest",value:function(e){}},{key:"addOffer",value:function(e){}},{key:"displayOffer",value:function(e,n){}},{key:"removeOffer",value:function(e){}},{key:"isOfferActive",value:function(e){return!1}},{key:"offerStatus",value:function(e,n){}},{key:"sendSignal",value:function(e,n){}},{key:"getPref",value:function(e,n){}}]),e}();exports.default=EmptyEnvironment,module.exports=exports.default;

},{}],96:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _inherits(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),_get=function(e,r,t){for(var n=!0;n;){var o=e,i=r,f=t;n=!1,null===o&&(o=Function.prototype);var u=Object.getOwnPropertyDescriptor(o,i);if(void 0!==u){if("value"in u)return u.value;var a=u.get;if(void 0===a)return;return a.call(f)}var s=Object.getPrototypeOf(o);if(null===s)return;e=s,r=i,t=f,n=!0,u=s=void 0}},_logging_handler=require("../logging_handler"),_logging_handler2=_interopRequireDefault(_logging_handler),_empty_environment=require("./empty_environment"),_empty_environment2=_interopRequireDefault(_empty_environment),_offers_configs=require("../offers_configs"),_offers_configs2=_interopRequireDefault(_offers_configs),_actions_defs=require("../actions_defs"),_actions_defs2=_interopRequireDefault(_actions_defs),_coreCryptoRandom=require("../../core/crypto/random"),_coreCryptoRandom2=_interopRequireDefault(_coreCryptoRandom),_coreUtils=require("../../core/utils"),_coreUtils2=_interopRequireDefault(_coreUtils),_coreEvents=require("../../core/events"),_coreEvents2=_interopRequireDefault(_coreEvents),MODULE_NAME="extension_environment",ExtensionEnvironment=function(e){function r(){_classCallCheck(this,r),_get(Object.getPrototypeOf(r.prototype),"constructor",this).apply(this,arguments)}return _inherits(r,e),_createClass(r,[{key:"queryHistory",value:function(e,r){return new Error("unimplemented #queryHistory")}},{key:"sendApiRequest",value:function(e,r){var t=this;return t.info("ExtensionEnvironment","sendApiRequest called"),new Promise(function(n,o){var i=[];r.t_eng_ver=_offers_configs2.default.TRIGGER_ENGINE_VERSION;for(var f in r)i.push(f+"="+encodeURIComponent(r[f]));var u="";i.length>0&&(u="?"+i.join("&"));var a=_offers_configs2.default.BACKEND_URL+"/api/v1/"+e+u;t.info("ExtensionEnvironment","url called: "+a);var s=new XMLHttpRequest;s.overrideMimeType("application/json"),s.open("POST",a),s.onload=function(){return 200==s.status?void n(JSON.parse(s.response)):void o("Status code "+s.status+" for "+a+this.statusText)},s.onerror=function(){o("Error loading "+a+": "+this.statusText)},s.ontimeout=function(){o("Timeout loading "+a)},s.send()})}},{key:"info",value:function(e,r){_logging_handler2.default.LOG_ENABLED&&_logging_handler2.default.info(e,r)}},{key:"error",value:function(e,r){_logging_handler2.default.LOG_ENABLED&&(_logging_handler2.default.error(e,r),r&&r.stack&&_logging_handler2.default.error(e,r.stack))}},{key:"warning",value:function(e,r){_logging_handler2.default.LOG_ENABLED&&_logging_handler2.default.warning(e,r)}},{key:"displayOffer",value:function(e,r){this.offerProcessor.displayOffer(e,r)}},{key:"addOffer",value:function(e){this.offerProcessor.addOffer(e)}},{key:"removeOffer",value:function(e){this.offerProcessor.removeOffer(e)}},{key:"isOfferActive",value:function(e){return!!this.offerProcessor&&this.offerProcessor.isOfferActive(e)}},{key:"isOfferPresent",value:function(e){return!!this.offersDB&&this.offersDB.isOfferPresent(e)}},{key:"getOfferLastUpdate",value:function(e,r){var t=this.offerProcessor;if(!t.offersDB)return null;var n;if("offer-added"!==r)return null;n=_actions_defs2.default.AID_OFFER_ADDED;var o=t.offersDB.getOfferActionMeta(e,n);return o?o.l_u_ts:null}},{key:"sendSignal",value:function(e,r){if(e&&r&&this.offersDB){var t=this.offersDB.getCampaignID(e);if(t){var n="trigger";this.signalHandler.setCampaignSignal(t,e,n,r)}}}},{key:"getPref",value:function(e,r){return _coreUtils2.default.getPref(String(e),r)}},{key:"getABNumber",value:function(){var e="offersUniqueNumber",r=null;return _coreUtils2.default.hasPref(e)?r=Number(_coreUtils2.default.getPref(e,0)):(r=Math.floor(1e4*(0,_coreCryptoRandom2.default)()),_coreUtils2.default.setPref(e,r.toString())),r}}]),r}(_empty_environment2.default);exports.default=ExtensionEnvironment,module.exports=exports.default;

},{"../../core/crypto/random":52,"../../core/events":54,"../../core/utils":70,"../actions_defs":92,"../logging_handler":102,"../offers_configs":104,"./empty_environment":95}],97:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),_logging_handler=require("./logging_handler"),_logging_handler2=_interopRequireDefault(_logging_handler),_coreCliqz=require("../core/cliqz"),_coreWebrequest=require("../core/webrequest"),_coreWebrequest2=_interopRequireDefault(_coreWebrequest),MODULE_NAME="event_handler",EventHandler=function(){function e(){_classCallCheck(this,e),this.callbacksMap={url_change:[],query_search:[],http_req:{},http_req_all:[]},this.onTabLocChanged=this.onTabLocChanged.bind(this),_coreCliqz.events.sub("content:location-change",this.onTabLocChanged),this.beforeRequestListener=this.beforeRequestListener.bind(this),_coreWebrequest2.default.onBeforeRequest.addListener(this.beforeRequestListener,{urls:["*://*/*"]})}return _createClass(e,[{key:"destroy",value:function(){_coreCliqz.events.un_sub("content:location-change",this.onTabLocChanged),_coreWebrequest2.default.onBeforeRequest.removeListener(this.beforeRequestListener)}},{key:"subscribeUrlChange",value:function(e){this.callbacksMap.url_change.push(e)}},{key:"unsubscribeUrlChange",value:function(e){this._unsubscribeCallback("url_change",e)}},{key:"subscribeQuerySearch",value:function(e){this.callbacksMap.query_search.push(e)}},{key:"unsubscribeQuerySearch",value:function(e){this._unsubscribeCallback("query_search",e)}},{key:"subscribeHttpReq",value:function(e,t){this.callbacksMap.http_req[t]||(this.callbacksMap.http_req[t]=[]);var r=!1;return this.callbacksMap.http_req[t].forEach(function(t){t===e&&(r=!0)}),r||this.callbacksMap.http_req[t].push(e),!r}},{key:"unsubscribeHttpReq",value:function(e,t){if(this.callbacksMap.http_req[t]){var r=this.callbacksMap.http_req[t].indexOf(e);r>-1&&this.callbacksMap.http_req[t].splice(r,1)}}},{key:"subscribeAllHttpReq",value:function(e){this.callbacksMap.http_req_all.push(e)}},{key:"unsubscribeAllHttpReq",value:function(e){this._unsubscribeCallback("http_req_all",e)}},{key:"onTabLocChanged",value:function(e){return e.isPrivate?void(_logging_handler2.default.LOG_ENABLED&&_logging_handler2.default.info(MODULE_NAME,"window is private skipping: onTabLocChanged")):void(e.isSameDocument||e.url&&0!==e.url.length&&this.onLocationChangeHandler(e.url,e.referrer))}},{key:"onLocationChangeHandler",value:function(e,t){if(e&&(e.startsWith("http://")||e.startsWith("https://"))){var r=_coreCliqz.utils.getDetailsFromUrl(e);if(t){var a=_coreCliqz.utils.getDetailsFromUrl(t);r.referrer=a.name}else r.referrer="";try{this._publish(this.callbacksMap.url_change,r,e)}catch(e){_logging_handler2.default.LOG_ENABLED&&_logging_handler2.default.error(MODULE_NAME,"Exception catched when processing a new event: "+e,_logging_handler2.default.ERR_INTERNAL)}}}},{key:"beforeRequestListener",value:function(e){var t=this.callbacksMap.http_req_all;t.length>0&&this._publish(t,{req_obj:e});var r=_coreCliqz.utils.getDetailsFromUrl(e.url),a=r.domain;if(a&&this.callbacksMap.http_req){var l=this.callbacksMap.http_req[a];if(!l)return;this._publish(l,{req_obj:e})}}},{key:"_unsubscribeCallback",value:function(e,t){if(this.callbacksMap[e]){var r=this.callbacksMap[e].indexOf(t);r>-1&&this.callbacksMap[e].splice(r,1)}}},{key:"_publish",value:function(e){var t=Array.prototype.slice.call(arguments,1);(e||[]).forEach(function(e){_coreCliqz.utils.setTimeout(function(){try{e.apply(null,t)}catch(e){_logging_handler2.default.LOG_ENABLED&&_logging_handler2.default.error(MODULE_NAME,"Error on publishing an event: "+e.toString()+" -- "+e.stack,_logging_handler2.default.ERR_INTERNAL)}},0)})}}]),e}();exports.EventHandler=EventHandler;

},{"../core/cliqz":49,"../core/webrequest":71,"./logging_handler":102}],98:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _trigger_cache=require("./trigger_cache"),_trigger_cache2=_interopRequireDefault(_trigger_cache),_regexp_cache=require("./regexp_cache"),_regexp_cache2=_interopRequireDefault(_regexp_cache),_operation_executor=require("./operation_executor"),_operation_executor2=_interopRequireDefault(_operation_executor),_trigger_machine=require("./trigger_machine"),_trigger_machine2=_interopRequireDefault(_trigger_machine),_history_index=require("./history_index"),_history_index2=_interopRequireDefault(_history_index),EventLoop=function e(r){_classCallCheck(this,e);var t=this;t.environment=r,t.triggerCache=new _trigger_cache2.default(this),t.regexpCache=new _regexp_cache2.default(this),t.operationExecutor=new _operation_executor2.default(this),t.triggerMachine=new _trigger_machine2.default(this),t.historyIndex=new _history_index2.default(this),t.environment.onUrlChange(function(e,r){if(e){var i={"#url":e};r&&r.domain&&(i["#domain"]=r.domain),t.triggerMachine.runRoot(i).then(function(e){t.environment.info("EventLoop","Executed triggers for context: "+JSON.stringify(i))}).catch(function(e){t.environment.error("EventLoop",e)})}})};exports.default=EventLoop,module.exports=exports.default;

},{"./history_index":100,"./operation_executor":106,"./regexp_cache":112,"./trigger_cache":114,"./trigger_machine":115}],99:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function linfo(e){_logging_handler2.default.LOG_ENABLED&&_logging_handler2.default.info(MODULE_NAME,e)}function lwarn(e){_logging_handler2.default.LOG_ENABLED&&_logging_handler2.default.warning(MODULE_NAME,e)}function lerr(e){_logging_handler2.default.LOG_ENABLED&&_logging_handler2.default.error(MODULE_NAME,e)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_logging_handler=require("./logging_handler"),_logging_handler2=_interopRequireDefault(_logging_handler),_actions_defs=require("./actions_defs"),_actions_defs2=_interopRequireDefault(_actions_defs),_platformLibJsep=require("../platform/lib/jsep"),_platformLibJsep2=_interopRequireDefault(_platformLibJsep),MODULE_NAME="filter_rules_evaluator",FilterRulesEvaluator=function(){function e(t){_classCallCheck(this,e),this.offersDB=t,this.filterEvalFunMap={not_closed_mt:this._notClosedMt.bind(this),not_added_mt:this._notAddedMt.bind(this),not_created_last_secs:this._notCreatedLastSecs.bind(this),not_clicked_last_secs:this._notClickedLastSecs.bind(this),not_timedout_mt:this._notTimedoutMt.bind(this),not_diplayed_mt:this._notDisplayedMt.bind(this),not_removed_last_secs:this._notRemovedLastSecs.bind(this)}}return _createClass(e,[{key:"destroy",value:function(){}},{key:"shouldWeShowOffer",value:function(e,t){var r=this;if(!e)return lwarn("shouldWeShowOffer: undefined offer ID"),!1;if(!t||!this.offersDB.hasOfferData(e))return linfo("shouldWeShowOffer: no rules or no actions for offer "+e),!0;var n=this.offersDB.getOfferObject(e),o=n?n.display_id:null;if(linfo("shouldWeShowOffer: rules["+e+"]: "+JSON.stringify(t)),t.constructor===Object){var i=function(){linfo("shouldWeShowOffer: rules is Object: \t Using old expression eval function");var n=r,i=!1;return Object.keys(t).forEach(function(r){if(!i){var s=n.filterEvalFunMap[r];return s?void(s(e,o,t[r])||(linfo("shouldWeShowOffer: filter rule "+r+" didnt passed. We should not show this offer with ID "+e),i=!0)):void lerr("shouldWeShowOffer: one of the rules specified on the offer is not "+("yet implemented. Filter Rule name: "+r+". Skipping this one"))}}),{v:!i}}();if("object"==typeof i)return i.v}else if(t.constructor===String){linfo("shouldWeShowOffer: rules is String: \t Using new expression eval function");var s=(0,_platformLibJsep2.default)(t);return this._evalExpression(s)}return lerr("shouldWeShowOffer: unknown rules format #shouldWeShowOffer"),!1}},{key:"_notClosedMt",value:function(e,t,r){var n=this.offersDB.getOfferDisplayActionMeta(t,_actions_defs2.default.AID_OFFER_CLOSED);return!n||(!(n.count>=r)||(linfo("_notClosedMt: offer closed more than "+r+" ("+n.count+")"),!1))}},{key:"_notDisplayedMt",value:function(e,t,r){var n=this.offersDB.getOfferDisplayActionMeta(t,_actions_defs2.default.AID_OFFER_DISPLAYED);return!n||(!(n.count>=r)||(linfo("_notDisplayedMt: offer displayed more than "+r+" ("+n.count+")"),!1))}},{key:"_notAddedMt",value:function(e,t,r){var n=this.offersDB.getOfferDisplayActionMeta(t,_actions_defs2.default.AID_OFFER_ADDED);return!n||(!(n.count>=r)||(linfo("_notAddedMt: offer added more than "+r+" ("+n.count+")"),!1))}},{key:"_notClickedLastSecs",value:function(e,t,r){var n=this.offersDB.getOfferActionMeta(e,_actions_defs2.default.AID_OFFER_CALL_TO_ACTION);if(!n)return!0;if(n.l_u_ts){var o=(Date.now()-n.l_u_ts)/1e3;if(o<r)return linfo("_notClickedLastSecs: the offer was clicked "+o+(" seconds ago and the rule specifies: "+r)),!1}return!0}},{key:"_notCreatedLastSecs",value:function(e,t,r){var n=this.offersDB.getOfferDisplayActionMeta(t,_actions_defs2.default.AID_OFFER_ADDED);if(!n)return!0;if(n.l_u_ts){var o=(Date.now()-n.l_u_ts)/1e3;if(o<r)return linfo("_notCreatedLastSecs: the offer was shown "+o+(" seconds ago and the rule specifies: "+r)),!1}return!0}},{key:"_notRemovedLastSecs",value:function(e,t,r){var n=this.offersDB.getOfferActionMeta(e,_actions_defs2.default.AID_OFFER_REMOVED);if(!n)return!0;if(n.l_u_ts){var o=(Date.now()-n.l_u_ts)/1e3;if(o<r)return linfo("_notRemovedLastSecs: the offer was removed "+o+(" seconds ago and the rule specifies: "+r)),!1}return!0}},{key:"_notTimedoutMt",value:function(e,t,r){var n=this.offersDB.getOfferDisplayActionMeta(t,_actions_defs2.default.AID_OFFER_TIMEOUT);return!n||(!(n.count>=r)||(linfo("_notTimedoutMt: offer timed out more than "+r+(" ("+n.count+" )")),!1))}},{key:"_evalExpression",value:function(e){try{if(linfo("current expr "+JSON.stringify(e)),"CallExpression"===e.type){var t=e.callee.name,r=e.arguments[0].value;return this.filterEvalFunMap[t](r)}if("LogicalExpression"===e.type&&"||"===e.operator)return this._evalExpression(e.left)||this._evalExpression(e.right);if("LogicalExpression"===e.type&&"&&"===e.operator)return this._evalExpression(e.left)&&this._evalExpression(e.right)}catch(t){return lerr("expr failed: "+JSON.stringify(e)),lerr("with error message: "+t),!1}return!1}}]),e}();exports.default=FilterRulesEvaluator,module.exports=exports.default;

},{"../platform/lib/jsep":131,"./actions_defs":92,"./logging_handler":102}],100:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),_coreCliqz=require("../core/cliqz"),_offers_configs=require("./offers_configs"),_offers_configs2=_interopRequireDefault(_offers_configs),HistoryIndex=function(){function e(t){_classCallCheck(this,e),this.eventLoop=t,this.localStorage=_coreCliqz.utils.getLocalStorage(_offers_configs2.default.TRIGGER_HISTORY_DATA),this.lastSaved=!1,this.entries=[],this.load()}return _createClass(e,[{key:"queryHistory",value:function(e,t){var r=this,o=r.entries.filter(function(r){return r.ts>=e&&r.ts<=t});return r.eventLoop.environment.info("HistoryIndex","history query returned "+o.length+" entries"),o}},{key:"addUrl",value:function(e,t){var r=this;t._urlAddedToHistory||(t._urlAddedToHistory=!0,r.eventLoop.environment.info("HistoryIndex","URL added to history: "+e),r.entries.push({url:e,ts:r.timestamp()}),r.save())}},{key:"save",value:function(){var e=this;e.entries.splice(1e3),(null===e.lastSaved||e.lastSaved<e.timestamp()-5)&&(e.localStorage.setItem("trigger_history",JSON.stringify(this.entries)),e.eventLoop.environment.info("HistoryIndex","Saved trigger history to local storage"),e.lastSaved=e.timestamp())}},{key:"load",value:function(){var e=this;if(_offers_configs2.default.LOAD_TRIGGER_HISTORY_DATA){var t=e.localStorage.getItem("trigger_history");t&&(this.entries=JSON.parse(t)),e.eventLoop.environment.info("HistoryIndex","Loaded trigger history from local storage. Num entries: "+this.entries.length)}else e.eventLoop.environment.info("HistoryIndex","Loading history disabled")}},{key:"timestamp",value:function(){return Math.round(Date.now()/1e3)}}]),e}();exports.default=HistoryIndex,module.exports=exports.default;

},{"../core/cliqz":49,"./offers_configs":104}],101:[function(require,module,exports){
arguments[4][59][0].apply(exports,arguments)
},{"./background":93,"./window":117,"dup":59}],102:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _toConsumableArray(e){if(Array.isArray(e)){for(var o=0,n=Array(e.length);o<e.length;o++)n[o]=e[o];return n}return Array.from(e)}Object.defineProperty(exports,"__esModule",{value:!0});var _coreFs=require("../core/fs"),_coreConsole=require("../core/console"),_coreConsole2=_interopRequireDefault(_coreConsole);try{Components.utils.import("resource://gre/modules/osfile.jsm")}catch(e){}var LoggingHandler={SAVE_TO_FILE:!1,LOG_FILE_NAME:["cliqz","offersV2","logging.log"],LOG_ENABLED:!0,ERR_NONE:0,ERR_INTERNAL:1,ERR_BACKEND:2,ERR_IO:3,ERR_JSON_PARSE:4,ERR_FILE_PARSE:5,ERR_RULE_FILE:6,init:function(){this.fileObj=null,this.tmpBuff="";var e=this;if(LoggingHandler.SAVE_TO_FILE)try{!function(){var o,n=(o=OS.Path).join.apply(o,[OS.Constants.Path.profileDir].concat(_toConsumableArray(LoggingHandler.LOG_FILE_NAME))),i=OS.Path.dirname(n);OS.File.makeDir(i,{ignoreExisting:!1}).then(function(){_coreConsole2.default.log("directory does not exist. Creating it..."),OS.File.open(n,{write:!0,append:!0}).then(function(o){e.fileObj=o})}).catch(function(o){_coreConsole2.default.log("directory exist. Opening the file to write and append: "),OS.File.open(n,{write:!0,append:!0}).then(function(o){e.fileObj=o})})}()}catch(e){_coreConsole2.default.log("something happened when trying to save the file or something: "+e,"[offersV2]")}},uninit:function(){this.fileObj&&(this.fileObj.flush(),this.fileObj.close())},doLogging:function(e,o,n){var i=arguments.length<=3||void 0===arguments[3]?LoggingHandler.ERR_NONE:arguments[3],t=String(Date.now())+" - [offersV2]["+e+"]["+o+"]";if(t+=i!==LoggingHandler.ERR_NONE?"[ErrCode: "+i+"]: ":": ",t+=n+"\n",this.fileObj){if(this.tmpBuff){var r=new TextEncoder;this.fileObj.write(r.encode(this.tmpBuff)),delete this.tmpBuff,this.tmpBuff=null}var l=new TextEncoder;this.fileObj.write(l.encode(t)).catch(function(e){_coreConsole2.default.log("error logging to the file! something happened?: "+e,"[offersV2]")})}else null!==this.tmpBuff&&(this.tmpBuff+=t);_coreConsole2.default.log(t,"")},error:function(e,o){var n=arguments.length<=2||void 0===arguments[2]?LoggingHandler.ERR_NONE:arguments[2];LoggingHandler.doLogging("error",e,o,n)},warning:function(e,o){var n=arguments.length<=2||void 0===arguments[2]?LoggingHandler.ERR_NONE:arguments[2];LoggingHandler.doLogging("warning",e,o,n)},info:function(e,o){LoggingHandler.doLogging("info",e,o)}};exports.default=LoggingHandler,module.exports=exports.default;

},{"../core/console":51,"../core/fs":55}],103:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,f){if(!(e instanceof f))throw new TypeError("Cannot call a class as a function")}function linfo(e){_logging_handler2.default.LOG_ENABLED&&_logging_handler2.default.info(MODULE_NAME,e)}function lwarn(e){_logging_handler2.default.LOG_ENABLED&&_logging_handler2.default.warning(MODULE_NAME,e)}function lerr(e){_logging_handler2.default.LOG_ENABLED&&_logging_handler2.default.error(MODULE_NAME,e)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,f){for(var t=0;t<f.length;t++){var i=f[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(f,t,i){return t&&e(f.prototype,t),i&&e(f,i),f}}(),_logging_handler=require("./logging_handler"),_logging_handler2=_interopRequireDefault(_logging_handler),_actions_defs=require("./actions_defs"),_actions_defs2=_interopRequireDefault(_actions_defs),_utils=require("./utils"),_filter_rules_evaluator=require("./filter_rules_evaluator"),_filter_rules_evaluator2=_interopRequireDefault(_filter_rules_evaluator),_coreEvents=require("../core/events"),_coreEvents2=_interopRequireDefault(_coreEvents),_corePlatform=require("../core/platform"),_offers_db=require("./offers_db"),_offers_db2=_interopRequireDefault(_offers_db),MODULE_NAME="offer_processor",MessageType={MT_NEW_OFFER_ACTIVE:"offer-active",MT_DISPLAY_OFFER:"display-offer",MT_CLOSE_OFFER:"close-offer",MT_OFFER_DEACTIVATED:"offer-deactivated",MT_REMOVE_OFFER:"remove-offer",MT_OFFERS_STATE_CHANGED:"offers-state-changed"},ORIGIN_ID="processor",OfferProcessor=function(){function e(f,t,i){_classCallCheck(this,e),typeof OffersDB!=typeof _offers_db2.default&&lerr("ERROR: wrong type?"),this.baseDB=t,this.offersDB=i,this.activeOffers=new Set,this.filterRuleEval=new _filter_rules_evaluator2.default(this.offersDB),this.uiActionsMap={"call-to-action":this._uiFunCallToAction.bind(this),"close-offer":this._uiFunCloseOffer.bind(this),"remove-offer":this._uiFunRemoveOffer.bind(this),"offers-state-changed":this._uiFunOffersStateChanged.bind(this),"offer-action-signal":this._uiFunOfferActionSignal.bind(this),"action-signal":this._uiFunActionSignal.bind(this)},this.sigHandler=f,this._processRealStateMessage=this._processRealStateMessage.bind(this),_coreEvents2.default.sub("offers-recv-ch",this._processRealStateMessage)}return _createClass(e,[{key:"destroy",value:function(){_coreEvents2.default.un_sub("offers-recv-ch",this._processRealStateMessage),this.sigHandler&&this.sigHandler.destroy(),this.filterRuleEval&&this.filterRuleEval.destroy()}},{key:"savePersistenceData",value:function(){}},{key:"addOffer",value:function(e){if(!(e&&e.offer_id&&e.display_id&&e.campaign_id))return lwarn("addOffer: invalid offer or missing fields"),!1;if(this.isOfferActive(e.offer_id))return lwarn("addOffer: we already have this offer active.."),!1;if(!this._shouldShowOffer(e))return linfo("addOffer: We should not show this offer with ID: "+e.offer_id),!1;if(this.offersDB.hasOfferData(e.offer_id)){if(!this.offersDB.updateOfferObject(e.offer_id,e))return lerr("addOffer: Error updating the offer to the DB: "+e.offer_id),!1}else if(!this.offersDB.addOfferObject(e.offer_id,e))return lerr("addOffer: Error adding the offer to the DB: "+e.offer_id),!1;this.makeOfferActive(e.offer_id);var f=this.offersDB.getOfferObject(e.offer_id),t={offer_id:f.offer_id,offer_data:f};this.offersDB.incOfferAction(f.offer_id,_actions_defs2.default.AID_OFFER_ADDED),this.sigHandler.setCampaignSignal(f.campaign_id,f.offer_id,ORIGIN_ID,_actions_defs2.default.AID_OFFER_ADDED),this.sigHandler.setCampaignSignal(f.campaign_id,f.offer_id,ORIGIN_ID,_actions_defs2.default.AID_OFFER_DISPLAYED);var i=this._getDestRealStatesForOffer(f.offer_id);return this._publishMessage(MessageType.MT_NEW_OFFER_ACTIVE,i,t),!0}},{key:"isOfferActive",value:function(e){return this.activeOffers.has(e)}},{key:"makeOfferActive",value:function(e){this.activeOffers.add(e)}},{key:"makeOfferInactive",value:function(e){this.activeOffers.delete(e)}},{key:"displayOffer",value:function(e,f){if(!e||!f)return lwarn("displayOffer: offer ID or displayInfo nulls?"),!1;if(!this.isOfferActive(e))return lwarn("displayOffer: we dont have an offer with id: "+e),!1;var t=this.offersDB.getOfferObject(e);if(!t||!this._shouldShowOffer(t))return linfo("displayOffer: we should not show this offer with id: "+e),!1;var i=this.offersDB.getCampaignID(e);this.sigHandler.setCampaignSignal(i,e,ORIGIN_ID,_actions_defs2.default.AID_OFFER_DISPLAYED);var r=this._getDestRealStatesForOffer(t.offer_id),a={offer_id:t.offer_id,display_rule:f,offer_data:t};return this._publishMessage(MessageType.MT_DISPLAY_OFFER,r,a),!0}},{key:"getStoredOffers",value:function(){var e=this,f=this.offersDB.getOffers(),t=[];return f.forEach(function(f){t.push({offer_id:f.offer_id,offer_info:f.offer,created_ts:f.created,attrs:{state:e.offersDB.getOfferAttribute(f.offer_id,"state")}})}),t}},{key:"_closeOffer",value:function(e){var f=this.offersDB.getOfferObject(e);if(!f)return lwarn("closeOffer: the offer "+e+" is not on our DB"),!1;var t=this.offersDB.getCampaignID(e);this.sigHandler.setCampaignSignal(t,e,ORIGIN_ID,_actions_defs2.default.AID_OFFER_CLOSED);var i=this._getDestRealStatesForOffer(e),r={offer_id:e};return this._publishMessage(MessageType.MT_CLOSE_OFFER,i,r),this.isOfferActive(e)&&(this.makeOfferInactive(e),this._publishMessage(MessageType.MT_OFFER_DEACTIVATED,i,r)),!0}},{key:"_removeOffer",value:function(e){var f=this.offersDB.getOfferObject(e);if(!f)return lwarn("removeOffer: the offer "+e+" is not on our DB"),!1;if(!this.offersDB.removeOfferObject(e))return lwarn("removeOffer: failed removing the offer object from the DB "+e),!1;var t=this.offersDB.getCampaignID(e);this.sigHandler.setCampaignSignal(t,e,ORIGIN_ID,_actions_defs2.default.AID_OFFER_REMOVED);var i=this._getDestRealStatesForOffer(e),r={offer_id:e};return this._publishMessage(MessageType.MT_REMOVE_OFFER,i,r),this.isOfferActive(e)&&(this.makeOfferInactive(e),this._publishMessage(MessageType.MT_OFFER_DEACTIVATED,i,r)),!0}},{key:"_processRealStateMessage",value:function(e){if(!(e&&e.origin&&e.type&&e.data))return lerr("_processRealStateMessage: invalid message format, discarding it"),!1;var f=this.uiActionsMap[e.type];return f?f(e):(lwarn("_processRealStateMessage: we cannot process the message type "+e.type),!1)}},{key:"_shouldShowOffer",value:function(e){if(!e)return lerr("_shouldShowOffer: the offer is null"),!1;var f=e.filter_info,t=e.offer_id;return this.filterRuleEval.shouldWeShowOffer(t,f)}},{key:"_getDestRealStatesForOffer",value:function(e){var f=this.offersDB.getOfferObject(e);return f&&f.rs_des?f.rs_dest:[]}},{key:"_publishMessage",value:function(e,f,t){if(_corePlatform.isChromium&&e===MessageType.MT_NEW_OFFER_ACTIVE){var i=t.offer_data;linfo("_publishMessage: sending offer active for offerID: "+i.display_id);var r=null;return t.offer_data.rule_info&&t.offer_data.rule_info.url&&(r=t.offer_data.rule_info.url),void _coreEvents2.default.pub("msg_center:show_message",{id:i.display_id,Message:i.ui_info.template_data.title,Link:i.ui_info.template_data.call_to_action.url,LinkText:i.ui_info.template_data.call_to_action.text,type:"offers",origin:"cliqz",data:{offer_info:{offer_id:t.offer_data.offer_id,offer_urls:r}}},"ghostery")}var a={origin:"offers-core",type:e,dest:f,data:t};_coreEvents2.default.pub("offers-send-ch",a)}},{key:"_uiFunCallToAction",value:function(e){if(!e.data||!e.data.offer_id)return lwarn("_uiFunCallToAction: invalid format of the message: "+JSON.stringify(e)),!1;var f=e.data.offer_id,t=this.offersDB.getCampaignID(f),i=this.offersDB.getOfferObject(f);return i?(linfo("_uiFunCallToAction: called for offer id: "+f),this.offersDB.incOfferAction(f,_actions_defs2.default.AID_OFFER_CALL_TO_ACTION),this.sigHandler.setCampaignSignal(t,f,e.origin,_actions_defs2.default.AID_OFFER_CALL_TO_ACTION),i.action_info&&i.action_info.on_click?(0,_utils.openNewTabAndSelect)(i.action_info.on_click):linfo("_uiFunCallToAction: no action_info defined for this offer"),!0):(lwarn("_uiFunCallToAction: we dont have an active offer with id: "+f),!1)}},{key:"_uiFunCloseOffer",value:function(e){if(!e.data||!e.data.offer_id)return lwarn("_uiFunCloseOffer: invalid format of the message: "+JSON.stringify(e)),!1;var f=e.data.offer_id,t=this.offersDB.getCampaignID(f);return linfo("_uiFunCloseOffer: called for offer id: "+f),this.sigHandler.setCampaignSignal(t,f,e.origin,_actions_defs2.default.AID_OFFER_CLOSED),this.offersDB.incOfferAction(f,_actions_defs2.default.AID_OFFER_CLOSED),this._closeOffer(f)}},{key:"_uiFunRemoveOffer",value:function(e){if(!e.data||!e.data.offer_id)return lwarn("_uiFunRemoveOffer: invalid format of the message: "+JSON.stringify(e)),!1;var f=e.data.offer_id,t=this.offersDB.getCampaignID(f);return linfo("_uiFunRemoveOffer: called for offer id: "+f),this.sigHandler.setCampaignSignal(t,f,e.origin,_actions_defs2.default.AID_OFFER_REMOVED),this.offersDB.incOfferAction(f,_actions_defs2.default.AID_OFFER_REMOVED),this._removeOffer(f)}},{key:"_uiFunActionSignal",value:function(e){return e.data&&e.data.action_id?(this.sigHandler.setActionSignal(e.data.action_id,e.origin),!0):(lwarn("_uiFunActionSignal: data: "+e.data+" are invalid"),!1)}},{key:"_uiFunOffersStateChanged",value:function(e){var f=this;if(!e.data||!e.data.offers_ids||!e.data.new_state)return lwarn("_uiFunOffersStateChanged: invalid arguments: "+JSON.stringify(e)),!1;var t=!1,i=this;if(e.data.offers_ids.forEach(function(r){var a=f.offersDB.getCampaignID(r);return a?(i.offersDB.addOfferAttribute(r,"state",e.data.new_state),void(t=!0)):void lwarn("_uiFunOffersStateChanged: offer with ID "+r+" is not present?")}),t){var r=[],a={offer_ids:e.data.offers_ids};this._publishMessage(MessageType.MT_OFFERS_STATE_CHANGED,r,a)}return!0}},{key:"_uiFunOfferActionSignal",value:function(e){if(!e.data||!e.data.offer_id||!e.data.action_id||"string"!=typeof e.data.action_id)return lwarn("_uiFunOfferActionSignal: invalid arguments: "+JSON.stringify(e)),!1;var f=e.data.offer_id,t=this.offersDB.getCampaignID(f);return t?(this.sigHandler.setCampaignSignal(t,f,e.origin,e.data.action_id),this.offersDB.incOfferAction(f,e.data.action_id),!0):(lwarn("_uiFunOfferActionSignal: no campaign id for offer "+f),!1)}}]),e}();exports.default=OfferProcessor,module.exports=exports.default;

},{"../core/events":54,"../core/platform":63,"./actions_defs":92,"./filter_rules_evaluator":99,"./logging_handler":102,"./offers_db":105,"./utils":116}],104:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _corePlatform=require("../core/platform"),OffersConfigs={MINUTE:60,HOUR:3600,DAY:86400,CURRENT_VERSION:2,BACKEND_URL:"https://offers-api.cliqz.com",OFFER_INFORMATION_URL:"https://cliqz.com/products/cliqz-for-desktop/cliqz-angebote",OFFERS_HISTORY_LIVE_TIME_SECS:5184e3,LOAD_TRIGGER_HISTORY_DATA:!0,TRIGGER_HISTORY_DATA:_corePlatform.isChromium?void 0:"chrome://cliqz/content/offers-v2/trigger_history.json",TRIGGER_ENGINE_VERSION:"1",LOAD_OFFERS_STORAGE_DATA:!0,OFFERS_STORAGE_DEFAULT_TTS_SECS:864e3,OFFERS_STORAGE_AUTOSAVE_FREQ_SECS:120,SIGNALS_OFFERS_FREQ_SECS:600,SIGNALS_HPN_BE_ADDR:"https://offers-api.cliqz.com/api/v1/savesignal",SIGNALS_HPN_BE_ACTION:"offers-signal",SIGNALS_OFFERS_EXPIRATION_SECS:5184e3,SIGNALS_VERSION:3,SIGNALS_LOAD_FROM_DB:!0,SIGNALS_AUTOSAVE_FREQ_SECS:120,OFFERS_OVERRIDE_TIMEOUT:-1};exports.default=OffersConfigs,module.exports=exports.default;

},{"../core/platform":63}],105:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function linfo(e){_logging_handler2.default.LOG_ENABLED&&_logging_handler2.default.info(MODULE_NAME,e)}function lwarn(e){_logging_handler2.default.LOG_ENABLED&&_logging_handler2.default.warning(MODULE_NAME,e)}function lerr(e){_logging_handler2.default.LOG_ENABLED&&_logging_handler2.default.error(MODULE_NAME,e)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),_logging_handler=require("./logging_handler"),_logging_handler2=_interopRequireDefault(_logging_handler),_offers_configs=require("./offers_configs"),_offers_configs2=_interopRequireDefault(_offers_configs),_db_helper=require("./db_helper"),_db_helper2=_interopRequireDefault(_db_helper),_coreCliqz=require("../core/cliqz"),MODULE_NAME="offers_db",STORAGE_DB_DOC_ID="offers-db",OfferDB=function(){function e(t){_classCallCheck(this,e),this.db=new _db_helper2.default(t),this.dataIndex={offers_index:{},display_id_index:{}},this._loadPersistentData(),this.displayIDCounter={},this.dbDirty=!1;var r=this;_offers_configs2.default.LOAD_OFFERS_STORAGE_DATA&&(this.saveInterval=_coreCliqz.utils.setInterval(function(){r.dbDirty&&r._savePersistentData()},1e3*_offers_configs2.default.OFFERS_STORAGE_AUTOSAVE_FREQ_SECS))}return _createClass(e,[{key:"destroy",value:function(){this.savePersistentData(),this.saveInterval&&(_coreCliqz.utils.clearInterval(this.saveInterval),delete this.saveInterval)}},{key:"savePersistentData",value:function(){this._savePersistentData()}},{key:"loadPersistentData",value:function(){return this._loadPersistentData()}},{key:"getOfferMeta",value:function(e){var t=this.dataIndex.offers_index[e];return t?{c_ts:t.c_ts,l_u_ts:t.l_u_ts}:null}},{key:"addOfferObject",value:function(e,t){if(!this._isOfferValid(e,t))return lwarn("addOfferObject: args invalid or data invalid: "+e+" - "+t),!1;var r=this.dataIndex.offers_index[e];if(r)return lwarn("addOfferObject: The offer id: "+e+" already exists, will not add it here"),!1;var a=JSON.parse(JSON.stringify(t));return r=this._createOfferContainer(),r.offer_obj=a,this.dataIndex.offers_index[e]=r,this._updateIndexTablesForOffer(e),this._markOfferDirty(e),!0}},{key:"removeOfferObject",value:function(e){var t=this.dataIndex.offers_index[e];return t?(this._markOfferDirty(e),t.removed=!0,t.l_u_ts=Date.now(),!0):(lwarn("removeOfferObject: The offer id: "+e+" is not stored"),!1)}},{key:"getOfferObject",value:function(e){var t=this.dataIndex.offers_index[e];return t?t.offer_obj:null}},{key:"hasOfferData",value:function(e){return void 0!==this.dataIndex.offers_index[e]}},{key:"hasOfferObject",value:function(e){return!!this.getOfferObject(e)}},{key:"isOfferPresent",value:function(e){var t=this.dataIndex.offers_index[e];return!!t&&!t.removed}},{key:"updateOfferObject",value:function(e,t){var r=this.dataIndex.offers_index[e];if(!r)return lwarn("updateOfferObject: the offer with ID: "+e+" is not present"),!1;if(!this._isOfferValid(e,t))return lwarn("updateOfferObject: offer "+e+" is not valid"),!1;if(r.offer_obj){var a=r.offer_obj;if(t.offer_id!==a.offer_id||t.campaign_id!==a.campaign_id||t.display_id!==a.display_id)return lwarn("updateOfferObject: the offer core data is not similar? not supported for now"),!1}return r.offer_obj=JSON.parse(JSON.stringify(t)),r.removed=!1,this._markOfferDirty(e),r.l_u_ts=Date.now(),!0}},{key:"incOfferAction",value:function(e,t){var r=arguments.length<=2||void 0===arguments[2]||arguments[2];if(!e||!t)return lwarn("incOfferAction: invalid args"),!1;var a=this.dataIndex.offers_index[e];if(!a)return lwarn("incOfferAction: The offer id: "+e+" is not stored"),!1;var n=Date.now(),i=a.offer_obj,f=a.offer_actions[t];if(f||(f=a.offer_actions[t]=this._createElementContainer(),f.count=0),f.count+=1,f.l_u_ts=n,r){var o=this.dataIndex.display_id_index,d=o[i.display_id];d||(d=o[i.display_id]={});var s=d[t];s||(s=d[t]=this._createElementContainer(),s.count=0),s.count+=1,s.l_u_ts=n}return this._markOfferDirty(e),a.l_u_ts=n,!0}},{key:"getOfferActionMeta",value:function(e,t){var r=this.dataIndex.offers_index[e];return r?r.offer_actions[t]:null}},{key:"addOfferAttribute",value:function(e,t,r){if(!e||!t)return lwarn("addOfferAttribute: invalid args"),!1;var a=this.dataIndex.offers_index[e];if(!a)return lwarn("addOfferAttribute: The offer id: "+e+" is not stored"),!1;var n=a.offer_attrs,i=n[t];i||(i=n[t]=this._createElementContainer());var f=Date.now();return i.attr=r,i.l_u_ts=f,this._markOfferDirty(e),a.l_u_ts=f,!0}},{key:"getOfferAttribute",value:function(e,t){if(!e||!t)return lwarn("getOfferAttribute: invalid args"),null;var r=this.dataIndex.offers_index[e];if(!r)return lwarn("getOfferAttribute: The offer id: "+e+" is not stored"),null;var a=r.offer_attrs[t];return a?a.attr:null}},{key:"getOfferDisplayActionMeta",value:function(e,t){var r=this.dataIndex.display_id_index,a=r[e];return a&&t?a[t]:null}},{key:"getCampaignID",value:function(e){var t=this.dataIndex.offers_index[e];return t?t.offer_obj.campaign_id:null}},{key:"getOffers",value:function(){var e=[],t=this;return Object.keys(this.dataIndex.offers_index).forEach(function(r){var a=t.dataIndex.offers_index[r];if(a.offer_obj&&!a.removed){var n={offer_id:a.offer_obj.offer_id,offer:a.offer_obj,last_update:a.l_u_ts,created:a.c_ts};e.push(n)}}),e}},{key:"_createElementContainer",value:function(){var e=Date.now();return{c_ts:e,l_u_ts:e}}},{key:"_markOfferDirty",value:function(){this.dbDirty=!0}},{key:"_isOfferValid",value:function(e,t){return!!(e&&t&&t.offer_id&&t.offer_id===e&&t.display_id&&t.campaign_id)}},{key:"_createOfferContainer",value:function(){var e=Date.now();return{c_ts:e,l_u_ts:e,offer_obj:null,offer_attrs:{},offer_actions:{},removed:!1}}},{key:"_removeOldEntries",value:function(){var e=this,t=Date.now(),r=1e3*_offers_configs2.default.OFFERS_STORAGE_DEFAULT_TTS_SECS,a=!1;Object.keys(this.dataIndex.offers_index).forEach(function(n){var i=e.dataIndex.offers_index[n],f=t-i.l_u_ts;f>=r&&(a=!0,linfo("_removeOldEntries: removing old offer "+n+" with delta time: "+f),e._removeIndexTablesForOffer(n),delete e.dataIndex.offers_index[n])}),a&&(this.dbDirty=!0)}},{key:"_updateIndexTablesForOffer",value:function(e){var t=this.dataIndex.offers_index[e];if(!t)return lwarn("_updateIndexTablesForOffer: The offer id: "+e+" is not stored"),!1;var r=t.offer_obj.display_id;return this.dataIndex.display_id_index[r]||(this.dataIndex.display_id_index[r]={}),this.displayIDCounter[r]?this.displayIDCounter[r]+=1:this.displayIDCounter[r]=1,!0}},{key:"_removeIndexTablesForOffer",value:function(e){var t=this.dataIndex.offers_index[e];if(!t)return lwarn("_removeIndexTablesForOffer: The offer id: "+e+" is not stored"),!1;var r=t.offer_obj.display_id;return this.displayIDCounter[r]-=1,this.displayIDCounter[r]<=0&&(delete this.dataIndex.display_id_index[r],this.dbDirty=!0),!0}},{key:"_buildIndexTables",value:function(){var e=this;Object.keys(this.dataIndex.offers_index).forEach(function(t){e._updateIndexTablesForOffer(t)})}},{key:"_savePersistentData",value:function(){return _offers_configs2.default.LOAD_OFFERS_STORAGE_DATA?void(this.dbDirty&&(this.db.saveDocData(STORAGE_DB_DOC_ID,{data_index:this.dataIndex}),this.dbDirty=!1)):void linfo("_savePersistentData: skipping saving offers DB")}},{key:"_loadPersistentData",value:function(){var e=this;if(!_offers_configs2.default.LOAD_OFFERS_STORAGE_DATA)return linfo("_loadPersistenceData: skipping the load of storage data"),new Promise(function(e){e(!0)});var t=this;return new Promise(function(r){e.db.getDocData(STORAGE_DB_DOC_ID).then(function(e){return e&&e.data_index?(t.dataIndex=e.data_index,t._removeOldEntries(),t._buildIndexTables(),t.dbDirty=!1,void r(!0)):(lerr("_loadPersistenceData: something went wrong loading the data?"),void r(!1))}).catch(function(e){lerr("_loadPersistenceData: error loading the storage data...: "+JSON.stringify(e)),r(!1)})})}},{key:"__removePersistenLocalDB",value:function(){linfo("__removePersistenLocalDB: removing current data and DB"),this.dataIndex={offers_index:{},display_id_index:{}},this.db.saveDocData(STORAGE_DB_DOC_ID,{data_index:this.dataIndex})}}]),e}();exports.default=OfferDB,module.exports=exports.default;

},{"../core/cliqz":49,"./db_helper":94,"./logging_handler":102,"./offers_configs":104}],106:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),_operationsControl=require("./operations/control"),_operationsControl2=_interopRequireDefault(_operationsControl),_operationsTrigger=require("./operations/trigger"),_operationsTrigger2=_interopRequireDefault(_operationsTrigger),_operationsSignal=require("./operations/signal"),_operationsSignal2=_interopRequireDefault(_operationsSignal),_operationsHistory=require("./operations/history"),_operationsHistory2=_interopRequireDefault(_operationsHistory),_operationsDisplay=require("./operations/display"),_operationsDisplay2=_interopRequireDefault(_operationsDisplay),OperationExecutor=function(){function e(t){_classCallCheck(this,e),this.eventLoop=t,this.operationPrefixRegexp=/^\$/,this.contextPrefixRegexp=/^\#/,this.resultCache={},this.lastExpireRun=0,this.operations={};for(var r in _operationsControl2.default)this.operations[r]=_operationsControl2.default[r];for(var r in _operationsTrigger2.default)this.operations[r]=_operationsTrigger2.default[r];for(var r in _operationsSignal2.default)this.operations[r]=_operationsSignal2.default[r];for(var r in _operationsHistory2.default)this.operations[r]=_operationsHistory2.default[r];for(var r in _operationsDisplay2.default)this.operations[r]=_operationsDisplay2.default[r]}return _createClass(e,[{key:"execute",value:function(e,t){var r=this;return new Promise(function(o,i){if(!e||0===e.length)return void o(!0);e=e.slice();var n=e.shift(),a=[];e.length>0&&(a=e.shift());var s=0;e.length>0&&(s=e.shift());var u=r.operations[n];if(!u)return r.eventLoop.environment.info("OperationExecutor","unsupported operation: "+n),void o(void 0);var l=n+":"+a.join(","),p=void 0;return s>0&&(p=r.isResultCached(l),void 0!==p)?void o(p):void r.evaluateArgs(a,t).then(function(e){u.call(r,e,r.eventLoop,t).then(function(e){s>0&&r.cacheResult(l,s,e),o(e)}).catch(function(e){i(e)})}).catch(function(e){i(e)})})}},{key:"evaluateArgs",value:function(e,t){var r=this;return new Promise(function(o,i){for(var n=[],a=0;a<e.length;a++)e[a].constructor===Array&&e[a].length>0&&r.operationPrefixRegexp.exec(e[a][0])?n.push(r.execute(e[a],t)):"string"==typeof e[a]&&r.contextPrefixRegexp.exec(e[a])?n.push(t[e[a]]):n.push(e[a]);Promise.all(n).then(function(e){o(e)}).catch(function(e){i(e)})})}},{key:"cacheResult",value:function(e,t,r){var o=this;t&&(o.expireCache(),o.resultCache[e]={result:r,ttl:t,added_ts:o.timestamp()})}},{key:"isResultCached",value:function(e){var t=this;t.expireCache();var r=t.resultCache[e];if(r)return r.result}},{key:"expireCache",value:function(){var e=this,t=e.timestamp();if(!(t-this.lastExpireRun<6e4)){var r;for(var o in e.cache)r=e.cache[o],r.added_ts+r.ttl<t&&delete e.cache[o];e.lastExpireRun=t}}},{key:"timestamp",value:function(){return Math.round(Date.now()/1e3)}}]),e}();exports.default=OperationExecutor,module.exports=exports.default;

},{"./operations/control":107,"./operations/display":108,"./operations/history":109,"./operations/signal":110,"./operations/trigger":111}],107:[function(require,module,exports){
"use strict";function if_pref(r,n){return new Promise(function(e,o){if(r.length<2)return void o(new Error("invalid args"));var t=n.environment.getPref(r[0],void 0);e(String(t)===String(r[1]))})}function log(r,n){return new Promise(function(e,o){return r.length<1?void o(new Error("invalid args")):(n.environment.info("Trigger",r[0]),void e())})}function and(r){return new Promise(function(n,e){if(r.length<2)return void e(new Error("invalid args"));var o=!0;r.forEach(function(r){o=o&&r}),n(o)})}function or(r){return new Promise(function(n,e){if(r.length<2)return void e(new Error("invalid args"));var o=!1;r.forEach(function(r){o=o||r}),n(o)})}function not(r){return new Promise(function(n,e){return r.length<1?void e(new Error("invalid args")):void n(!r[0])})}function eq(r){return new Promise(function(n,e){return r.length<2?void e(new Error("invalid args")):void n(r[0]===r[1])})}function gt(r){return new Promise(function(n,e){return r.length<2?void e(new Error("invalid args")):void n(r[0]>r[1])})}function lt(r){return new Promise(function(n,e){return r.length<2?void e(new Error("invalid args")):void n(r[0]<r[1])})}function match(r,n){return new Promise(function(e,o){if(r.length<2)return void o(new Error("invalid args"));for(var t=r.shift(),i=r,u=0;u<i.length;u++){var a=n.regexpCache.getRegexp(i[u]);if(a.exec(t))return void e(!0)}e(!1)})}function match_url(r,n,e){return new Promise(function(o,t){if(r.length<2)return void t(new Error("invalid args"));for(var i=r,u=0;u<i.length;u++){var a=n.regexpCache.getRegexp(i[u]);if(a.exec(e["#url"]))return n.historyIndex.addUrl(e["#url"],e),void o(!0)}o(!1)})}function prop(r){return new Promise(function(n,e){if(r.length<2)return void e(new Error("invalid args"));var o=(r[0],r[1]);n(r[0][o])})}function prop_array(r){return new Promise(function(n,e){if(r.length<2)return void e(new Error("invalid args"));var o=r[1],t=[];r[0].forEach(function(r){r&&"object"==typeof r&&t.push(r[o])}),n(t)})}function timestamp(r){return new Promise(function(r,n){r(Date.now())})}function day_hour(r){return new Promise(function(r,n){r((new Date).getHours())})}function week_day(r){return new Promise(function(r,n){r((new Date).getDay()+1)})}function month_day(r){return new Promise(function(r,n){r((new Date).getDate())})}Object.defineProperty(exports,"__esModule",{value:!0});var ops={};ops.$if_pref=if_pref,ops.$log=log,ops.$and=and,ops.$or=or,ops.$not=not,ops.$eq=eq,ops.$gt=gt,ops.$lt=lt,ops.$match=match,ops.$match_url=match_url,ops.$prop=prop,ops.$prop_array=prop_array,ops.$timestamp=timestamp,ops.$day_hour=day_hour,ops.$week_day=week_day,ops.$month_day=month_day,exports.default=ops,module.exports=exports.default;

},{}],108:[function(require,module,exports){
"use strict";function show_offer(e,r){return new Promise(function(o,f){if(e.length<2)return void f(new Error("invalid args"));var n=e[0],t=e[1];t.rule_info.type="exact_match",t.rule_info.url=[n];var i=r.environment;i.isOfferActive(t.offer_id)?i.displayOffer(t.offer_id,t.rule_info):i.addOffer(t),o()})}function offer_added(e,r){return new Promise(function(o,f){if(e.length<2)return void f(new Error("invalid args"));var n=e[0],t=e[1],i=r.environment,a=i.getOfferLastUpdate(n,"offer-added"),s=a>Date.now()-1e3*t;o(s)})}function show_ab_offer(e,r){return new Promise(function(o,f){if(e.length<2)return void f(new Error("invalid args"));var n=e[0],t=e[1];if(!t||0===t.length)return void f(new Error("invalid args, no offers list?"));var i=r.environment,a={},s=0,d=-1;if(t.forEach(function(e){if(d+=1,e.ab_test_info&&e.ab_test_info.pct){var r=Number(e.ab_test_info.pct);s+=r,a[d]=r}}),s<=0)return void f(new Error("we couldnt calculate the percentage of all the offers on the AB test group"));Object.keys(a).forEach(function(e){a[e]=a[e]/s});var u=0,l=null,_=i.getABNumber();return Object.keys(a).forEach(function(e){if(!l){u+=a[e];var r=1e4*u;_<=r&&(l=t[e])}}),l?(l.rule_info.type="exact_match",l.rule_info.url=[n],i.isOfferActive(l.offer_id)?i.displayOffer(l.offer_id,l.rule_info):i.addOffer(l),void o()):void f(new Error("we couldnt select any offer.. this is not right"))})}Object.defineProperty(exports,"__esModule",{value:!0});var ops={};ops.$show_offer=show_offer,ops.$offer_added=offer_added,ops.$show_ab_offer=show_ab_offer,exports.default=ops,module.exports=exports.default;

},{}],109:[function(require,module,exports){
"use strict";function match_history(e,r,t){return new Promise(function(o,s){if(e.length<2)return void s(new Error("invalid args"));var i=timestamp(),n=e.shift(),a=e.shift(),u=e,h=0,c=r.historyIndex.queryHistory(i-n,i-a);c.forEach(function(e){for(var t=0;t<u.length;t++){var o=r.regexpCache.getRegexp(u[t]);if(o.exec(e.url)){h++;break}}});for(var f=0;f<u.length;f++){var l=r.regexpCache.getRegexp(u[f]);if(l.exec(t["#url"])){r.historyIndex.addUrl(t["#url"],t);break}}o(h)})}function count_history_sessions(e,r,t){return new Promise(function(o,s){if(e.length<4)return void s(new Error("invalid args"));var i=e[0],n=e[1],a=e[2],u=e[3],h=timestamp(),c=0,f=0,l=r.historyIndex.queryHistory(h-i,h-n);l.forEach(function(e){for(var t=0;t<u.length;t++){var o=r.regexpCache.getRegexp(u[t]);if(o.exec(e.url)){e.timestamp-c>a&&f++,c=e.ts;break}}});for(var p=0;p<u.length;p++){var g=r.regexpCache.getRegexp(u[p]);if(g.exec(t["#url"])){r.historyIndex.addUrl(t["#url"],t);break}}o(f)})}function timestamp(){return Math.round(Date.now()/1e3)}Object.defineProperty(exports,"__esModule",{value:!0});var ops={};ops.$match_history=match_history,ops.$count_history_sessions=count_history_sessions,exports.default=ops,module.exports=exports.default;

},{}],110:[function(require,module,exports){
"use strict";function send_signal(e,n){return new Promise(function(r,s){if(e.length<2)return void s(new Error("invalid args"));var o=e[0],t=e[1];return n.environment.isOfferPresent(o)?(n.environment.sendSignal(o,t),void r()):void r()})}Object.defineProperty(exports,"__esModule",{value:!0});var ops={};ops.$send_signal=send_signal,exports.default=ops,module.exports=exports.default;

},{}],111:[function(require,module,exports){
"use strict";function watch_requests(e,r,t){return new Promise(function(t,n){if(e.length<1)return void n(new Error("invalid args"));var i=e[0];r.environment.watchDomain(i),t(!0)})}function activate_subtriggers(e,r,t){return new Promise(function(n,i){if(t._currentTriggerLevel||(t._currentTriggerLevel=0),t._currentTriggerLevel++>25)return void i(new Error("trigger depth > 25"));if(e.length<1)return void i(new Error("invalid args"));var g=e[0],o=r.triggerCache.getSubtriggers(g);if(o&&0!==o.length){var s=[];o.forEach(function(e){s.push(r.triggerMachine.run(e,t))}),Promise.all(s).then(function(e){n()}).catch(function(e){i(e)})}else r.environment.sendApiRequest("loadsubtriggers",{parent_id:g}).then(function(e){o=e,r.environment.info("TriggerOperations","Loaded "+o.length+" subtriggers");var s=[];o.forEach(function(e){r.triggerCache.addTrigger(e),s.push(r.triggerMachine.run(e,t))}),r.triggerCache.setSubtriggers(g,o),Promise.all(s).then(function(e){n()}).catch(function(e){i(e)})}).catch(function(e){i(e)})})}Object.defineProperty(exports,"__esModule",{value:!0});var ops={};ops.$watch_requests=watch_requests,ops.$activate_subtriggers=activate_subtriggers,exports.default=ops,module.exports=exports.default;

},{}],112:[function(require,module,exports){
"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),RegexpCache=function(){function e(t){_classCallCheck(this,e),this.eventLoop=t,this.compiledRegexp={},this.compiledRegexpCount=0}return _createClass(e,[{key:"getRegexp",value:function(e){var t=this,n=t.compiledRegexp[e];return n||(n=new RegExp(e),t.compiledRegexpCount++<2500?(t.compiledRegexp[e]=n,t.compiledRegexpCount++):t.compiledRegexpCount={}),n}}]),e}();exports.default=RegexpCache,module.exports=exports.default;

},{}],113:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function linfo(e){_logging_handler2.default.LOG_ENABLED&&_logging_handler2.default.info(MODULE_NAME,e)}function lwarn(e){_logging_handler2.default.LOG_ENABLED&&_logging_handler2.default.warning(MODULE_NAME,e)}function lerr(e){_logging_handler2.default.LOG_ENABLED&&_logging_handler2.default.error(MODULE_NAME,e)}function addOrCreate(e,i){var n=arguments.length<=2||void 0===arguments[2]?1:arguments[2],a=e[i];a?e[i]=a+n:e[i]=n}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,i){for(var n=0;n<i.length;n++){var a=i[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(i,n,a){return n&&e(i.prototype,n),a&&e(i,a),i}}(),_coreCliqz=require("../core/cliqz"),_logging_handler=require("./logging_handler"),_logging_handler2=_interopRequireDefault(_logging_handler),_offers_configs=require("./offers_configs"),_offers_configs2=_interopRequireDefault(_offers_configs),_coreConfig=require("../core/config"),_coreConfig2=_interopRequireDefault(_coreConfig),_db_helper=require("./db_helper"),_db_helper2=_interopRequireDefault(_db_helper),_utils=require("./utils"),MODULE_NAME="signals_handler",STORAGE_DB_DOC_ID="offers-signals",DB_MAIN_FIELD="chrome://cliqz/content/offers-v2/signals_data.json",DB_PREFIX="sig_hand_",DB_SIGMAP_KEY="sig_map",SignalHandler=function(){function e(i){_classCallCheck(this,e),this.db=new _db_helper2.default(i),this.sigMap={},this.sigBuilder={campaign:this._sigBuilderCampaign.bind(this),action:this._sigBuilderAction.bind(this)},this.sigsToSend={},this.dbDirty=!1,this._removeOldSignals(),this._loadPersistenceData(),this.sendIntervalTimer=null,this._startSendSignalsLoop(_offers_configs2.default.SIGNALS_OFFERS_FREQ_SECS);var n=this;_offers_configs2.default.SIGNALS_LOAD_FROM_DB&&(this.saveInterval=_coreCliqz.utils.setInterval(function(){n.dbDirty&&n._savePersistenceData()},1e3*_offers_configs2.default.SIGNALS_AUTOSAVE_FREQ_SECS))}return _createClass(e,[{key:"destroy",value:function(){this._savePersistenceData(),this.sendIntervalTimer&&(_coreCliqz.utils.clearInterval(this.sendIntervalTimer),this.sendIntervalTimer=null),this.saveInterval&&(_coreCliqz.utils.clearInterval(this.saveInterval),delete this.saveInterval)}},{key:"savePersistenceData",value:function(){this._savePersistenceData()}},{key:"setCampaignSignal",value:function(e,i,n,a){if(!(e&&i&&n&&a))return void lwarn("setCampaignSignal: invalid arguments?:  - cid: "+e+" - oid: "+i+" - origID: "+n+" - sid: "+a);var t="campaign",r=e,s=this._getOrCreateSignal(t,r);if(!s)return void lerr("setCampaignSignal: cannot create or get campaign signal: "+r);var o=s.data;o.ucid||(o.ucid=(0,_utils.generateUUID)());var l=o.offers;l||(o.offers=l={});var d=l[i];d||(l[i]=d={created_ts:Date.now(),origins:{}});var g=d.origins,_=g[n];_||(g[n]=_={}),addOrCreate(_,a,1),this._markSignalAsModified(t,r),linfo("setCampaignSignal: new signal added: "+e+" - "+i+" - "+n+" - "+a)}},{key:"setActionSignal",value:function(e,i){if(!e||!i)return void lwarn("setActionSignal: invalid arguments?: "+e+" - "+i);var n="action",a=i,t=this._getOrCreateSignal(n,a);if(!t)return void lerr("setActionSignal: cannot create or get action signal: "+a);var r=t.data;r.uuid||(r.uuid=(0,_utils.generateUUID)());var s=r.actions;s||(s=r.actions={}),addOrCreate(s,e,1),this._markSignalAsModified(n,a),linfo("setActionSignal: new signal added: "+i+" - "+e)}},{key:"_createSignal",value:function(e){return{created_ts:Date.now(),modified_ts:Date.now(),seq:0,be_sync:!1,data:e}}},{key:"_markSignalAsModified",value:function(e,i){if(!e||!i)return void lwarn("_markSignalAsModified: invalid args");var n=this.sigMap[e];if(!n)return void lwarn("_markSignalAsModified: invalid signal? cannot be updated");var a=n[i];return a?(a.modified_ts=Date.now(),a.be_sync=!1,this.dbDirty=!0,void this._addSignalToBeSent(e,i)):void lwarn("_markSignalAsModified: signal is null, cannot be updated")}},{key:"_getOrCreateSignal",value:function(e,i){var n=arguments.length<=2||void 0===arguments[2]?{}:arguments[2];if(!e||!i)return lwarn("_getOrCreateSignal: invalid args"),null;var a=this.sigMap[e];a||(this.sigMap[e]=a={});var t=a[i];return t||(linfo("_setSignalData: creating new signal in "+e+" - "+i),a[i]=t=this._createSignal(n)),t}},{key:"_getSignalInfo",value:function(e,i){if(!e||!i)return lwarn("getSignalData: sigType or sigKey null?"),null;var n=this.sigMap[e];return n?n[i]:null}},{key:"_getHpnTimeStamp",value:function(){var e=new Date;return e.toISOString().slice(0,10).replace(/-/g,"")}},{key:"_getMinuteTimestamp",value:function(){return Math.floor(Date.now()/1e3/60)}},{key:"_addSignalToBeSent",value:function(e,i){var n=this.sigsToSend[e];n||(this.sigsToSend[e]=n=new Set),n.add(i)}},{key:"_sendSignalsToBE",value:function(){linfo("_sendSignalsToBE: SENDING SIGNALSS TO BE!!!");var e=_coreCliqz.utils.getPref("developer",!1)||_coreCliqz.utils.getPref("offersDevFlag",!1),i=_coreCliqz.utils.getPref("anolysisGID");try{i=JSON.parse(String(i))}catch(e){lerr("sendSignalsToBE: GID is undefined"),i="undefined"}var n=this;try{Object.keys(n.sigsToSend).forEach(function(a){var t=n.sigsToSend[a];t.forEach(function(t){var r=n._getSignalInfo(a,t);if(!r||!r.data)return void lerr("_sendSignalsToBE: we have a signal on the queue but the signal was removed?: "+a+" - "+t+" - "+JSON.stringify(n.sigMap));r.data;if(!r.be_sync){var s=n.sigBuilder[a];if(!s)return void lerr("_sendSignalsToBE: we dont have a builder for the sigtype: "+a);var o=s(t,r);if(!o)return void lerr("_sendSignalsToBE: something happened building the signal. sigtype: "+a+" data: "+JSON.stringify(r));var l={action:_offers_configs2.default.SIGNALS_HPN_BE_ACTION,signal_id:t,timestamp:n._getHpnTimeStamp(),payload:{v:_offers_configs2.default.SIGNALS_VERSION,ex_v:_coreConfig2.default.EXTENSION_VERSION,is_developer:e,gid:i,type:a,sent_ts:n._getMinuteTimestamp(),data:o}},d=JSON.stringify(l);_coreCliqz.utils.httpPost(_offers_configs2.default.SIGNALS_HPN_BE_ADDR,function(e){linfo("sendSignalsToBE: hpn signal sent")},d,function(e){lerr("sendSignalsToBE: error sending signal to hpn: "+e)}),linfo("sendSignalsToBE: hpn: "+d),r.be_sync=!0}})})}catch(e){lerr("sendSignalsToBE: something bad happened: "+e)}return delete this.sigsToSend,this.sigsToSend={},!0}},{key:"_startSendSignalsLoop",value:function(e){this.sendIntervalTimer=_coreCliqz.utils.setInterval(function(){Object.keys(this.sigsToSend).length>0?this._sendSignalsToBE():linfo("_startSendSignalsLoop: nothing to send")}.bind(this),1e3*e)}},{key:"_savePersistenceData",value:function(){return _offers_configs2.default.SIGNALS_LOAD_FROM_DB?void(this.dbDirty&&(this.db.saveDocData(STORAGE_DB_DOC_ID,{sig_map:this.sigMap}),this.dbDirty=!1)):void linfo("_savePersistenceData: skipping the saving")}},{key:"_loadPersistenceData",value:function(){if(!_offers_configs2.default.SIGNALS_LOAD_FROM_DB)return linfo("_loadPersistenceData: skipping the loading"),!0;var e=this;e.db.getDocData(STORAGE_DB_DOC_ID).then(function(i){if(!i||!i.sig_map)return void lerr("_loadPersistenceData: something went wrong loading the data?");e.sigMap=i.sig_map,e.dbDirty=!1;var n=Date.now();Object.keys(e.sigMap).forEach(function(i){var a=e.sigMap[i];Object.keys(a).forEach(function(t){var r=e._getSignalInfo(i,t);if(r){var s=(n-r.modified_ts)/1e3;return s>=_offers_configs2.default.SIGNALS_OFFERS_EXPIRATION_SECS?(linfo("removing signal: "+k+" - data: "+JSON.stringify(r)),void delete a[k]):void(r.be_sync||(e._addSignalToBeSent(i,t),linfo("_loadPersistenceData: signal "+t+" added to be sent to BE")))}})})}).catch(function(e){lerr("_loadPersistenceData: error loading the storage data...: "+JSON.stringify(e))})}},{key:"_removeOldSignals",value:function(){var e=_coreCliqz.utils.getLocalStorage(DB_MAIN_FIELD);if(!e)return void linfo("_removeOldSignals: no old storage to remove");try{linfo("_removeOldSignals: clearing old storage"),e.clear()}catch(e){lerr("_removeOldSignals: something failed when removing the item of the DB: "+e)}}},{key:"_sigBuilderCampaign",value:function(e,i){if(!e||!i||!i.data)return lwarn("_sigBuilderCampaign: invalid args"),null;var n=i.data,a={c_id:e,c_data:{seq:i.seq,created_ts:i.created_ts,ucid:n.ucid,offers:[]}};i.seq=i.seq+1;var t=a.c_data.offers;return Object.keys(n.offers).forEach(function(e){var i=n.offers[e],a=i.origins,r={offer_id:e,created_ts:i.created_ts,offer_data:[]},s=r.offer_data;Object.keys(a).forEach(function(e){var i={origin:e,origin_data:a[e]};s.push(i)}),t.push(r)}),a}},{key:"_sigBuilderAction",value:function(e,i){if(!e||!i||!i.data)return lwarn("_sigBuilderAction: invalid args"),null;var n=i.data,a={o_id:e,o_data:{seq:i.seq,created_ts:i.created_ts,uuid:n.uuid,actions:n.actions}};return i.seq=i.seq+1,a}}]),e}();exports.SignalHandler=SignalHandler;

},{"../core/cliqz":49,"../core/config":50,"./db_helper":94,"./logging_handler":102,"./offers_configs":104,"./utils":116}],114:[function(require,module,exports){
"use strict";function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,r){for(var t=0;t<r.length;t++){var i=r[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(r,t,i){return t&&e(r.prototype,t),i&&e(r,i),r}}(),TriggerCache=function(){function e(r){_classCallCheck(this,e),this.eventLoop=r,this.triggerIndex={},this.lastExpireRun=0}return _createClass(e,[{key:"addTrigger",value:function(e){var r=this;r.expireCache(),e._added_ts=r.timestamp(),e._subtriggers=null,r.triggerIndex[e.trigger_id]=e}},{key:"getTrigger",value:function(e){var r=this;return r.triggerIndex[e]}},{key:"setSubtriggers",value:function(e,r){var t=this,i=t.triggerIndex[e];i&&(i._subtriggers=r)}},{key:"getSubtriggers",value:function(e){var r=this;r.expireCache();var t=r.triggerIndex[e];if(t&&t._subtriggers){var i=t._subtriggers.filter(function(t){return r.triggerIndex[e]});return i}return[]}},{key:"expireCache",value:function(){var e=this,r=e.timestamp();if(!(r-this.lastExpireRun<6e4)){for(var t in e.triggerIndex)null!==trigger.ttl&&trigger._added_ts+trigger.ttl<r&&delete e.triggerIndex[t];e.lastExpireRun=r}}},{key:"timestamp",value:function(){return Math.round(Date.now()/1e3)}}]),e}();exports.default=TriggerCache,module.exports=exports.default;

},{}],115:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),_coreConfig=require("../core/config"),_coreConfig2=_interopRequireDefault(_coreConfig),TriggerMachine=function(){function e(t){_classCallCheck(this,e),this.eventLoop=t,this.triggersRoot=_coreConfig2.default.settings["triggers-root"]||"root",this.rootTrigger={parent_trigger_ids:[],trigger_id:this.triggersRoot,ttl:3600,condition:null,actions:[["$activate_subtriggers",[this.triggersRoot]]]}}return _createClass(e,[{key:"runRoot",value:function(e){var t=this;return t.eventLoop.triggerCache.getTrigger(this.triggersRoot)||t.eventLoop.triggerCache.addTrigger(t.rootTrigger),t.run(t.rootTrigger,e)}},{key:"run",value:function(e,t){var r=this;return new Promise(function(o,n){r.eventLoop.operationExecutor.execute(e.condition,t).then(function(i){if(i&&e.actions){var c=[];e.actions.forEach(function(e){c.push(r.eventLoop.operationExecutor.execute(e,t))}),Promise.all(c).then(function(e){o()}).catch(function(e){n(e)})}else o()}).catch(function(e){n(e)})})}}]),e}();exports.default=TriggerMachine,module.exports=exports.default;

},{"../core/config":50}],116:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function loadFileFromChrome(e){var r=_coreCliqz.utils.environment.BASE_CONTENT_URL+e.join("/");return new Promise(function(e,o){_coreCliqz.utils.httpGet(r,function(r){e(r.response)},o)})}function isCLIQZBrowser(e){return"40"===e.channel}function openNewTabAndSelect(e){var r=_coreCliqz.utils.getWindow();return!!r&&(_coreCliqz.utils.openTabInWindow(r,e),!0)}function generateUUID(){function e(){return Math.floor(65536*(1+(0,_coreCryptoRandom2.default)())).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}Object.defineProperty(exports,"__esModule",{value:!0});var _logging_handler=require("./logging_handler"),_logging_handler2=_interopRequireDefault(_logging_handler),_coreCryptoRandom=require("../core/crypto/random"),_coreCryptoRandom2=_interopRequireDefault(_coreCryptoRandom),_coreCliqz=require("../core/cliqz"),MODULE_NAME="utils";exports.loadFileFromChrome=loadFileFromChrome,exports.isCLIQZBrowser=isCLIQZBrowser,exports.openNewTabAndSelect=openNewTabAndSelect,exports.generateUUID=generateUUID;

},{"../core/cliqz":49,"../core/crypto/random":52,"./logging_handler":102}],117:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_coreUtils=require("../core/utils"),_coreUtils2=_interopRequireDefault(_coreUtils),_default=function(){function e(t){_classCallCheck(this,e),!_coreUtils2.default.getPref("offers2FeatureEnabled",!1)}return _createClass(e,[{key:"init",value:function(){!_coreUtils2.default.getPref("offers2FeatureEnabled",!1)}},{key:"unload",value:function(){}}]),e}();exports.default=_default,module.exports=exports.default;

},{"../core/utils":70}],118:[function(require,module,exports){
"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function mapWindows(){return[_globals.window]}function isTabURL(){return!1}function getLang(){return _globals.window.navigator.language||_globals.window.navigator.userLanguage}function getBrowserMajorVersion(){var e=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);return!!e&&parseInt(e[2],10)}function setInstallDatePref(){}function setOurOwnPrefs(){}function getLang(){return _globals.window.navigator.language}function enableChangeEvents(){}function addWindowObserver(){}function removeWindowObserver(){}function forEachWindow(e){mapWindows().forEach(e)}function mustLoadWindow(){return!0}function waitWindowReady(e){return Promise.resolve()}Object.defineProperty(exports,"__esModule",{value:!0}),exports.mapWindows=mapWindows,exports.isTabURL=isTabURL,exports.getLang=getLang,exports.getBrowserMajorVersion=getBrowserMajorVersion,exports.setInstallDatePref=setInstallDatePref,exports.setOurOwnPrefs=setOurOwnPrefs,exports.getLang=getLang,exports.enableChangeEvents=enableChangeEvents,exports.addWindowObserver=addWindowObserver,exports.removeWindowObserver=removeWindowObserver,exports.forEachWindow=forEachWindow,exports.mustLoadWindow=mustLoadWindow,exports.waitWindowReady=waitWindowReady;var _globals=require("./globals"),Window=function e(n){_classCallCheck(this,e),this.window=n};exports.Window=Window;

},{"./globals":126}],119:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var chromeUrlHandler=!1;exports.chromeUrlHandler=chromeUrlHandler;

},{}],120:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _globals=require("./globals");exports.default=_globals.window.console,module.exports=exports.default;

},{"./globals":126}],121:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=crypto,module.exports=exports.default;

},{}],122:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _pouchdb=require("pouchdb"),_pouchdb2=_interopRequireDefault(_pouchdb);exports.default=_pouchdb2.default,module.exports=exports.default;

},{"pouchdb":153}],123:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _coreConsole=require("../core/console"),_coreConsole2=_interopRequireDefault(_coreConsole),_coreConfig=require("../core/config"),_coreConfig2=_interopRequireDefault(_coreConfig),_corePrefs=require("../core/prefs"),_corePrefs2=_interopRequireDefault(_corePrefs),_coreStorage=require("../core/storage"),_coreStorage2=_interopRequireDefault(_coreStorage),_coreUtils=require("../core/utils"),_coreUtils2=_interopRequireDefault(_coreUtils),eventIDs={},port=chrome.runtime.connect({name:"encrypted-query"});port.onMessage.addListener(function(e){var t=eventIDs[e.eID].cb;delete eventIDs[e.eID],t&&t(e.data)});var CLIQZEnvironment={SKIN_PATH:"modules/static/skin/",RESULTS_PROVIDER:"https://api.cliqz.com/api/v2/results?nrh=1&q=",RICH_HEADER:"https://api.cliqz.com/api/v2/rich-header?path=/v2/map",LOG:"https://stats.cliqz.com",TEMPLATES_PATH:"modules/static/templates/",LOCALE_PATH:_coreConfig2.default.baseURL+"static/locale/",RERANKERS:[],RESULTS_TIMEOUT:1e3,TEMPLATES:{calculator:1,clustering:1,currency:1,custom:1,emphasis:1,empty:1,generic:1,main:1,results:1,text:1,series:1,spellcheck:1,"pattern-h1":3,"pattern-h2":2,"pattern-h3":1,"pattern-h3-cluster":1,"pattern-hm":1,topsites:3,celebrities:2,Cliqz:2,"entity-generic":2,noResult:3,weatherAlert:3,"entity-news-1":3,"entity-video-1":3,"flightStatusEZ-2":2,weatherEZ:2,news:1,people:1,video:1,hq:1,ligaEZ1Game:2,ligaEZTable:3,"rd-h3-w-rating":1,vod:3,"movie-vod":3,liveTicker:3},MESSAGE_TEMPLATES:["footer-message","onboarding-callout","onboarding-callout-extended","slow_connection","partials/location/missing_location_2","partials/location/no-locale-data"],PARTIALS:["url","logo","EZ-category","partials/ez-title","partials/ez-url","partials/ez-history","partials/ez-description","partials/ez-generic-buttons","EZ-history","rd-h3-w-rating","pcgame_movie_side_snippet","partials/location/local-data","partials/location/missing_location_1","partials/timetable-cinema","partials/timetable-movie","partials/bottom-data-sc","partials/download","partials/streaming","partials/lyrics"],telemetry:function(){},isUnknownTemplate:function(e){return e&&!CE.TEMPLATES[e]},getBrandsDBUrl:function(e){return"https://cdn.cliqz.com/brands-database/database/"+e+"/data/database.json"},setInterval:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){return setInterval.apply(null,arguments)}),setTimeout:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){return setTimeout.apply(null,arguments)}),clearTimeout:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){clearTimeout.apply(null,arguments)}),Promise:Promise,OS:"chromium",isPrivate:function(){return chrome.extension.inIncognitoContext},isOnPrivateTab:function(e){return CE.isPrivate()},getWindow:function(){return{document:{getElementById:function(){}}}},openLink:function(e,t,n){chrome.cliqzSearchPrivate.navigate(t,!!n)},copyResult:function(e){var t=document.oncopy;try{document.oncopy=function(t){t.clipboardData.setData("text/plain",e),t.preventDefault()},document.execCommand("copy",!1,null)}finally{document.oncopy=t}},_ENGINES:[{name:"CLIQZ dummy search",alias:"#qq",default:!0,icon:"",searchForm:"https://www.cliqz.com/?q={searchTerms}",suggestionUrl:"",base_url:"https://www.cliqz.com/search?q=",prefix:"#qq",code:3}],getSearchEngines:function(){return CE._ENGINES.map(function(e){return e.getSubmissionForQuery=function(t){return e.searchForm.replace("{searchTerms}",t)},e.getSuggestionUrlForQuery=function(t){return e.suggestionUrl.replace("{searchTerms}",t)},e})},updateAlias:function(){},getEngineByAlias:function(e){return CE._ENGINES.find(function(t){return t.alias===e})},getEngineByName:function(e){return CE._ENGINES.find(function(t){return t.name===e})},getNoResults:function(e){var t=CE.getSearchEngines().map(function(e){return e.style=CE.getLogoDetails(CE.getDetailsFromUrl(e.searchForm)).style,e.text=e.alias.slice(1),e}),n=CE.getDefaultSearchEngine().name,r=_coreUtils2.default.isUrl(e);return CE.Result.cliqz({template:"noResult",snippet:{text_line1:CE.getLocalizedString(r?"noResultUrlNavigate":"noResultTitle"),text_line2:r?CE.getLocalizedString("noResultUrlSearch"):CE.getLocalizedString("noResultMessage",n),search_engines:t,cliqz_logo:CE.SKIN_PATH+"img/cliqz.svg"},type:"rh",subType:{empty:!0}})},setDefaultSearchEngine:function(e){var t=new _coreStorage2.default;t.setObject("defaultSearchEngine",e)},getDefaultSearchEngine:function(){var e=!0,t=!1,n=void 0;try{for(var r,i=CE.getSearchEngines()[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){var o=r.value;if(o.default)return o}}catch(e){t=!0,n=e}finally{try{!e&&i.return&&i.return()}finally{if(t)throw n}}},onRenderComplete:function(e,t){chrome.cliqzSearchPrivate.processResults(e,t)},onResultSelectionChange:function(e){chrome.cliqzSearchPrivate.onResultSelectionChange(e)},setSupportInfo:function(){}},CE=CLIQZEnvironment;exports.default=CLIQZEnvironment,module.exports=exports.default;

},{"../core/config":50,"../core/console":51,"../core/prefs":64,"../core/storage":67,"../core/utils":70}],124:[function(require,module,exports){
"use strict";function fetchFactory(){return fetch}Object.defineProperty(exports,"__esModule",{value:!0}),exports.fetchFactory=fetchFactory,exports.default=fetch,exports.fetch=fetch,exports.Headers=Headers,exports.Request=Request,exports.Response=Response;

},{}],125:[function(require,module,exports){
"use strict";function readFile(e){return Promise.reject("not implemented")}function writeFile(e,r){return Promise.reject("not implemented")}function mkdir(e){return Promise.reject("not implemented")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.readFile=readFile,exports.writeFile=writeFile,exports.mkdir=mkdir;

},{}],126:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.chrome=chrome,exports.window=window;

},{}],127:[function(require,module,exports){
"use strict";

},{}],128:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={init:function(){}},module.exports=exports.default;

},{}],129:[function(require,module,exports){
"use strict";function _classCallCheck(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(o,t,n){return t&&e(o.prototype,t),n&&e(o,n),o}}(),CliqzChromeDB={VERSION:"0.1",set:function(e,o,t,n){var r=e+":"+o,l={};l[r]=t,chrome.storage.local.set(l,n)},get:function(e,o,t){if("function"==typeof o)chrome.storage.local.get(null,function(n){var r=[];Object.keys(n).forEach(function(t){t.startsWith(e)&&o(n[t])&&r.push(n[t])}),t(r)});else{var n=e+":"+o;chrome.storage.local.get(n,function(e){t(e[n])})}},remove:function(e,o,t){if("function"==typeof o)chrome.storage.local.get(null,function(n){var r=[];Object.keys(n).forEach(function(t){if(t.startsWith(e)&&o(n[t])){var l=e+":"+t;r.push(l)}}),chrome.storage.local.remove(r,t)});else{var n=e+":"+o;chrome.storage.local.remove(n,t)}},size:function(e){chrome.storage.local.getBytesInUse(null,function(o){var t=[o,o/chrome.storage.local.QUOTA_BYTES];console.log("Current size: ",t[0],t[1]),e&&e(t)})},removeEverything:function(){chrome.storage.local.clear(),CliqzChromeDB.size()}},_default=function(){function e(o){_classCallCheck(this,e),this.CliqzSecureMessage=o}return _createClass(e,[{key:"close",value:function(){}},{key:"saveRecord",value:function(e,o){CliqzChromeDB.set("hpn",e,o)}},{key:"loadRecord",value:function(e){var o=new Promise(function(o,t){CliqzChromeDB.get("hpn",e,function(e){var t=[];e&&t.push(e),o(t)})});return o}},{key:"saveKeys",value:function(e){return new Promise(function(o,t){CliqzChromeDB.set("hpn","userKey",JSON.stringify(e)),o({status:!0,data:e})})}},{key:"loadKeys",value:function(){var e=this;return new Promise(function(o,t){e.loadRecord("userKey").then(function(e){if(0===e.length)o(null);else try{o(JSON.parse(e))}catch(e){o(null)}})})}},{key:"saveLocalCheckTable",value:function(){Object.keys(this.CliqzSecureMessage.localTemporalUniq).length>0&&this.saveRecord("localTemporalUniq",JSON.stringify(this.CliqzSecureMessage.localTemporalUniq))}},{key:"loadLocalCheckTable",value:function(){var e=this;this.loadRecord("localTemporalUniq").then(function(o){o.length>0?e.CliqzSecureMessage.localTemporalUniq=JSON.parse(o[0]):e.CliqzSecureMessage.localTemporalUniq={}})}}]),e}();exports.default=_default,module.exports=exports.default;

},{}],130:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var CliqzLanguage={init:function(){},stateToQueryString:function(){return"&lang=de,en"}};exports.default=CliqzLanguage,module.exports=exports.default;

},{}],131:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _jsep=require("jsep"),_jsep2=_interopRequireDefault(_jsep);exports.default=_jsep2.default,module.exports=exports.default;

},{"jsep":149}],132:[function(require,module,exports){
"use strict";function isPlatformAtLeastInVersion(e){return!0}Object.defineProperty(exports,"__esModule",{value:!0}),exports.isPlatformAtLeastInVersion=isPlatformAtLeastInVersion,exports.default={isMobile:!1,isFirefox:!1,isChromium:!0};

},{}],133:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function getPref(e,r){var t=storage.getItem(e);return t?"false"!==t&&("true"===t||(isNaN(t)?t:parseInt(t,10))):r}function setPref(e,r){storage.setItem(e,r),_coreEvents2.default.pub("prefchange",e)}function hasPref(e){return null!==storage.getItem(e)}function clearPref(e){storage.removeItem(e)}function enableChangeEvents(){throw new Error("not implemented - prefs.enableChangeEvents")}function disableChangeEvents(){throw new Error("not implemented - prefs.disableChangeEvents")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getPref=getPref,exports.setPref=setPref,exports.hasPref=hasPref,exports.clearPref=clearPref,exports.enableChangeEvents=enableChangeEvents,exports.disableChangeEvents=disableChangeEvents;var _coreStorage=require("../core/storage"),_coreStorage2=_interopRequireDefault(_coreStorage),_coreEvents=require("../core/events"),_coreEvents2=_interopRequireDefault(_coreEvents),storage=new _coreStorage2.default;

},{"../core/events":54,"../core/storage":67}],134:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_coreEvents=require("../core/events"),_coreEvents2=_interopRequireDefault(_coreEvents),_globals=require("./globals"),_default=function(){function e(t){_classCallCheck(this,e)}return _createClass(e,[{key:"init",value:function(){_globals.chrome.webNavigation.onCommitted.addListener(function(e){var t=e.url;_coreEvents2.default.pub("content:location-change",{url:t})})}},{key:"unload",value:function(){}},{key:"broadcast",value:function(e,t){}},{key:"addMessageListener",value:function(e,t){}},{key:"removeMessageListener",value:function(e,t){}}]),e}();exports.default=_default,module.exports=exports.default;

},{"../core/events":54,"./globals":126}],135:[function(require,module,exports){
"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),_default=function(){function e(){var n=arguments.length<=0||void 0===arguments[0]?{position:0}:arguments[0];n.position;_classCallCheck(this,e)}return _createClass(e,[{key:"init",value:function(){}},{key:"unload",value:function(){}},{key:"newProxy",value:function(){}},{key:"applyFilter",value:function(e,n,t){}}]),e}();exports.default=_default,module.exports=exports.default;

},{}],136:[function(require,module,exports){
"use strict";function _toConsumableArray(e){if(Array.isArray(e)){for(var r=0,o=Array(e.length);r<e.length;r++)o[r]=e[r];return o}return Array.from(e)}function _defineProperty(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,r){for(var o=0;o<r.length;o++){var t=r[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(r,o,t){return o&&e(r.prototype,o),t&&e(r,t),r}}(),_globals=require("./globals"),Storage=function(){function e(r){_classCallCheck(this,e),this.key=["resource-loader"].concat(_toConsumableArray(r)).join(":")}return _createClass(e,[{key:"load",value:function(){var e=this;return new Promise(function(r,o){_globals.chrome.storage.local.get(e.key,function(t){var n=Object.keys(t),a=t[n];a?r(a):o("resource-loader: chrome storage has no value for key "+e.key)})})}},{key:"save",value:function(e){var r=this;return new Promise(function(o){_globals.chrome.storage.local.set(_defineProperty({},r.key,e),o)})}}]),e}();exports.default=Storage,module.exports=exports.default;

},{"./globals":126}],137:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(e){if(e)throw new Error("localStorage for URL is not supported");return localStorage},module.exports=exports.default;

},{}],138:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=TextDecoder,module.exports=exports.default;

},{}],139:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _tldjs=require("tldjs"),_tldjs2=_interopRequireDefault(_tldjs);exports.default=_tldjs2.default,module.exports=exports.default;

},{"tldjs":159}],140:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={},module.exports=exports.default;

},{}],141:[function(require,module,exports){
"use strict";function isURI(e){return!1}function equal(e,t){return e===t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.isURI=isURI,exports.default=equal;

},{}],142:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _globals=require("./globals");exports.default=_globals.chrome.webRequest,module.exports=exports.default;

},{"./globals":126}],143:[function(require,module,exports){
"use strict";function setPrivateFlags(){}function setBackgroundRequest(){}function XMLHttpRequestFactory(){return XMLHttpRequest}Object.defineProperty(exports,"__esModule",{value:!0}),exports.XMLHttpRequestFactory=XMLHttpRequestFactory,exports.setPrivateFlags=setPrivateFlags,exports.setBackgroundRequest=setBackgroundRequest;

},{}],144:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={init:function(){},unload:function(){}},module.exports=exports.default;

},{}],145:[function(require,module,exports){
arguments[4][59][0].apply(exports,arguments)
},{"./background":144,"./window":146,"dup":59}],146:[function(require,module,exports){
"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),_default=function(){function e(t){_classCallCheck(this,e)}return _createClass(e,[{key:"init",value:function(){}},{key:"unload",value:function(){}}]),e}();exports.default=_default,module.exports=exports.default;

},{}],147:[function(require,module,exports){
"use strict";function argsArray(r){return function(){var t=arguments.length;if(t){for(var a=[],n=-1;++n<t;)a[n]=arguments[n];return r.call(this,a)}return r.call(this,[])}}module.exports=argsArray;

},{}],148:[function(require,module,exports){
"function"==typeof Object.create?module.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:module.exports=function(t,e){t.super_=e;var o=function(){};o.prototype=e.prototype,t.prototype=new o,t.prototype.constructor=t};

},{}],149:[function(require,module,exports){
!function(e){"use strict";var r="Compound",t="Identifier",n="MemberExpression",o="Literal",u="ThisExpression",a="CallExpression",i="UnaryExpression",s="BinaryExpression",p="LogicalExpression",c="ConditionalExpression",f="ArrayExpression",l=46,d=44,v=39,h=34,x=40,y=41,b=91,E=93,m=63,g=59,w=58,U=function(e,r){var t=new Error(e+" at character "+r);throw t.index=r,t.description=e,t},O=!0,k={"-":O,"!":O,"~":O,"+":O},j={"||":1,"&&":2,"|":3,"^":4,"&":5,"==":6,"!=":6,"===":6,"!==":6,"<":7,">":7,"<=":7,">=":7,"<<":8,">>":8,">>>":8,"+":9,"-":9,"*":10,"/":10,"%":10},P=function(e){var r,t=0;for(var n in e)(r=n.length)>t&&e.hasOwnProperty(n)&&(t=r);return t},C=P(k),A=P(j),B={true:!0,false:!1,null:null},S="this",q=function(e){return j[e]||0},J=function(e,r,t){var n="||"===e||"&&"===e?p:s;return{type:n,operator:e,left:r,right:t}},L=function(e){return e>=48&&e<=57},M=function(e){return 36===e||95===e||e>=65&&e<=90||e>=97&&e<=122},F=function(e){return 36===e||95===e||e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57},I=function(e){for(var s,p,O=0,P=e.charAt,I=e.charCodeAt,T=function(r){return P.call(e,r)},V=function(r){return I.call(e,r)},z=e.length,D=function(){for(var e=V(O);32===e||9===e;)e=V(++O)},G=function(){var e,r,t=K();return D(),V(O)!==m?t:(O++,e=G(),e||U("Expected expression",O),D(),V(O)===w?(O++,r=G(),r||U("Expected expression",O),{type:c,test:t,consequent:e,alternate:r}):void U("Expected :",O))},H=function(){D();for(var r=e.substr(O,A),t=r.length;t>0;){if(j.hasOwnProperty(r))return O+=t,r;r=r.substr(0,--t)}return!1},K=function(){var e,r,t,n,o,u,a,i;if(u=N(),r=H(),!r)return u;for(o={value:r,prec:q(r)},a=N(),a||U("Expected expression after "+r,O),n=[u,o,a];(r=H())&&(t=q(r),0!==t);){for(o={value:r,prec:t};n.length>2&&t<=n[n.length-2].prec;)a=n.pop(),r=n.pop().value,u=n.pop(),e=J(r,u,a),n.push(e);e=N(),e||U("Expected expression after "+r,O),n.push(o,e)}for(i=n.length-1,e=n[i];i>1;)e=J(n[i-1].value,n[i-2],e),i-=2;return e},N=function(){var r,t,n;if(D(),r=V(O),L(r)||r===l)return Q();if(r===v||r===h)return R();if(M(r)||r===x)return Y();if(r===b)return $();for(t=e.substr(O,C),n=t.length;n>0;){if(k.hasOwnProperty(t))return O+=n,{type:i,operator:t,argument:N(),prefix:!0};t=t.substr(0,--n)}return!1},Q=function(){for(var e,r,t="";L(V(O));)t+=T(O++);if(V(O)===l)for(t+=T(O++);L(V(O));)t+=T(O++);if(e=T(O),"e"===e||"E"===e){for(t+=T(O++),e=T(O),"+"!==e&&"-"!==e||(t+=T(O++));L(V(O));)t+=T(O++);L(V(O-1))||U("Expected exponent ("+t+T(O)+")",O)}return r=V(O),M(r)?U("Variable names cannot start with a number ("+t+T(O)+")",O):r===l&&U("Unexpected period",O),{type:o,value:parseFloat(t),raw:t}},R=function(){for(var e,r="",t=T(O++),n=!1;O<z;){if(e=T(O++),e===t){n=!0;break}if("\\"===e)switch(e=T(O++)){case"n":r+="\n";break;case"r":r+="\r";break;case"t":r+="\t";break;case"b":r+="\b";break;case"f":r+="\f";break;case"v":r+="\v"}else r+=e}return n||U('Unclosed quote after "'+r+'"',O),{type:o,value:r,raw:t+r+t}},W=function(){var r,n=V(O),a=O;for(M(n)?O++:U("Unexpected "+T(O),O);O<z&&(n=V(O),F(n));)O++;return r=e.slice(a,O),B.hasOwnProperty(r)?{type:o,value:B[r],raw:r}:r===S?{type:u}:{type:t,name:r}},X=function(e){for(var t,n,o=[];O<z;){if(D(),t=V(O),t===e){O++;break}t===d?O++:(n=G(),n&&n.type!==r||U("Expected comma",O),o.push(n))}return o},Y=function(){var e,r;for(e=V(O),r=e===x?Z():W(),D(),e=V(O);e===l||e===b||e===x;)O++,e===l?(D(),r={type:n,computed:!1,object:r,property:W()}):e===b?(r={type:n,computed:!0,object:r,property:G()},D(),e=V(O),e!==E&&U("Unclosed [",O),O++):e===x&&(r={type:a,arguments:X(y),callee:r}),D(),e=V(O);return r},Z=function(){O++;var e=G();return D(),V(O)===y?(O++,e):void U("Unclosed (",O)},$=function(){return O++,{type:f,elements:X(E)}},_=[];O<z;)s=V(O),s===g||s===d?O++:(p=G())?_.push(p):O<z&&U('Unexpected "'+T(O)+'"',O);return 1===_.length?_[0]:{type:r,body:_}};if(I.version="0.3.0",I.toString=function(){return"JavaScript Expression Parser (JSEP) v"+I.version},I.addUnaryOp=function(e){return k[e]=O,this},I.addBinaryOp=function(e,r){return A=Math.max(e.length,A),j[e]=r,this},I.removeUnaryOp=function(e){return delete k[e],e.length===C&&(C=P(k)),this},I.removeBinaryOp=function(e){return delete j[e],e.length===A&&(A=P(j)),this},"undefined"==typeof exports){var T=e.jsep;e.jsep=I,I.noConflict=function(){return e.jsep===I&&(e.jsep=T),I}}else"undefined"!=typeof module&&module.exports?exports=module.exports=I:exports.parse=I}(this);

},{}],150:[function(require,module,exports){
"use strict";function INTERNAL(){}function Promise(e){if("function"!=typeof e)throw new TypeError("resolver must be a function");this.state=PENDING,this.queue=[],this.outcome=void 0,e!==INTERNAL&&safelyResolveThenable(this,e)}function QueueItem(e,t,r){this.promise=e,"function"==typeof t&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),"function"==typeof r&&(this.onRejected=r,this.callRejected=this.otherCallRejected)}function unwrap(e,t,r){immediate(function(){var n;try{n=t(r)}catch(t){return handlers.reject(e,t)}n===e?handlers.reject(e,new TypeError("Cannot resolve promise with itself")):handlers.resolve(e,n)})}function getThen(e){var t=e&&e.then;if(e&&"object"==typeof e&&"function"==typeof t)return function(){t.apply(e,arguments)}}function safelyResolveThenable(e,t){function r(t){s||(s=!0,handlers.reject(e,t))}function n(t){s||(s=!0,handlers.resolve(e,t))}function o(){t(n,r)}var s=!1,i=tryCatch(o);"error"===i.status&&r(i.value)}function tryCatch(e,t){var r={};try{r.value=e(t),r.status="success"}catch(e){r.status="error",r.value=e}return r}function resolve(e){return e instanceof this?e:handlers.resolve(new this(INTERNAL),e)}function reject(e){var t=new this(INTERNAL);return handlers.reject(t,e)}function all(e){function t(e,t){function u(e){s[t]=e,++i!==n||o||(o=!0,handlers.resolve(l,s))}r.resolve(e).then(u,function(e){o||(o=!0,handlers.reject(l,e))})}var r=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var n=e.length,o=!1;if(!n)return this.resolve([]);for(var s=new Array(n),i=0,u=-1,l=new this(INTERNAL);++u<n;)t(e[u],u);return l}function race(e){function t(e){r.resolve(e).then(function(e){o||(o=!0,handlers.resolve(i,e))},function(e){o||(o=!0,handlers.reject(i,e))})}var r=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var n=e.length,o=!1;if(!n)return this.resolve([]);for(var s=-1,i=new this(INTERNAL);++s<n;)t(e[s]);return i}var immediate=require("immediate"),handlers={},REJECTED=["REJECTED"],FULFILLED=["FULFILLED"],PENDING=["PENDING"];module.exports=Promise,Promise.prototype.catch=function(e){return this.then(null,e)},Promise.prototype.then=function(e,t){if("function"!=typeof e&&this.state===FULFILLED||"function"!=typeof t&&this.state===REJECTED)return this;var r=new this.constructor(INTERNAL);if(this.state!==PENDING){var n=this.state===FULFILLED?e:t;unwrap(r,n,this.outcome)}else this.queue.push(new QueueItem(r,e,t));return r},QueueItem.prototype.callFulfilled=function(e){handlers.resolve(this.promise,e)},QueueItem.prototype.otherCallFulfilled=function(e){unwrap(this.promise,this.onFulfilled,e)},QueueItem.prototype.callRejected=function(e){handlers.reject(this.promise,e)},QueueItem.prototype.otherCallRejected=function(e){unwrap(this.promise,this.onRejected,e)},handlers.resolve=function(e,t){var r=tryCatch(getThen,t);if("error"===r.status)return handlers.reject(e,r.value);var n=r.value;if(n)safelyResolveThenable(e,n);else{e.state=FULFILLED,e.outcome=t;for(var o=-1,s=e.queue.length;++o<s;)e.queue[o].callFulfilled(t)}return e},handlers.reject=function(e,t){e.state=REJECTED,e.outcome=t;for(var r=-1,n=e.queue.length;++r<n;)e.queue[r].callRejected(t);return e},Promise.resolve=resolve,Promise.reject=reject,Promise.all=all,Promise.race=race;

},{"immediate":151}],151:[function(require,module,exports){
(function (global){
"use strict";function nextTick(){draining=!0;for(var e,n,t=queue.length;t;){for(n=queue,queue=[],e=-1;++e<t;)n[e]();t=queue.length}draining=!1}function immediate(e){1!==queue.push(e)||draining||scheduleDrain()}var Mutation=global.MutationObserver||global.WebKitMutationObserver,scheduleDrain;if(Mutation){var called=0,observer=new Mutation(nextTick),element=global.document.createTextNode("");observer.observe(element,{characterData:!0}),scheduleDrain=function(){element.data=called=++called%2}}else if(global.setImmediate||"undefined"==typeof global.MessageChannel)scheduleDrain="document"in global&&"onreadystatechange"in global.document.createElement("script")?function(){var e=global.document.createElement("script");e.onreadystatechange=function(){nextTick(),e.onreadystatechange=null,e.parentNode.removeChild(e),e=null},global.document.documentElement.appendChild(e)}:function(){setTimeout(nextTick,0)};else{var channel=new global.MessageChannel;channel.port1.onmessage=nextTick,scheduleDrain=function(){channel.port2.postMessage(0)}}var draining,queue=[];module.exports=immediate;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],152:[function(require,module,exports){
function parse(e){if(e=String(e),!(e.length>1e4)){var r=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(r){var a=parseFloat(r[1]),n=(r[2]||"ms").toLowerCase();switch(n){case"years":case"year":case"yrs":case"yr":case"y":return a*y;case"days":case"day":case"d":return a*d;case"hours":case"hour":case"hrs":case"hr":case"h":return a*h;case"minutes":case"minute":case"mins":case"min":case"m":return a*m;case"seconds":case"second":case"secs":case"sec":case"s":return a*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return a;default:return}}}}function fmtShort(e){return e>=d?Math.round(e/d)+"d":e>=h?Math.round(e/h)+"h":e>=m?Math.round(e/m)+"m":e>=s?Math.round(e/s)+"s":e+"ms"}function fmtLong(e){return plural(e,d,"day")||plural(e,h,"hour")||plural(e,m,"minute")||plural(e,s,"second")||e+" ms"}function plural(s,e,r){if(!(s<e))return s<1.5*e?Math.floor(s/e)+" "+r:Math.ceil(s/e)+" "+r+"s"}var s=1e3,m=60*s,h=60*m,d=24*h,y=365.25*d;module.exports=function(s,e){e=e||{};var r=typeof s;if("string"===r&&s.length>0)return parse(s);if("number"===r&&isNaN(s)===!1)return e.long?fmtLong(s):fmtShort(s);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(s))};

},{}],153:[function(require,module,exports){
(function (global){
"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function isBinaryObject(e){return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer||"undefined"!=typeof Blob&&e instanceof Blob}function cloneArrayBuffer(e){if("function"==typeof e.slice)return e.slice(0);var t=new ArrayBuffer(e.byteLength),n=new Uint8Array(t),r=new Uint8Array(e);return n.set(r),t}function cloneBinaryObject(e){if(e instanceof ArrayBuffer)return cloneArrayBuffer(e);var t=e.size,n=e.type;return"function"==typeof e.slice?e.slice(0,t,n):e.webkitSlice(0,t,n)}function isPlainObject(e){var t=Object.getPrototypeOf(e);if(null===t)return!0;var n=t.constructor;return"function"==typeof n&&n instanceof n&&funcToString.call(n)==objectCtorString}function clone(e){var t,n,r;if(!e||"object"!=typeof e)return e;if(Array.isArray(e)){for(t=[],n=0,r=e.length;n<r;n++)t[n]=clone(e[n]);return t}if(e instanceof Date)return e.toISOString();if(isBinaryObject(e))return cloneBinaryObject(e);if(!isPlainObject(e))return e;t={};for(n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=clone(e[n]);"undefined"!=typeof o&&(t[n]=o)}return t}function once(e){var t=!1;return getArguments(function(n){if(t)throw new Error("once called more than once");t=!0,e.apply(this,n)})}function toPromise(e){return getArguments(function(t){t=clone(t);var n=this,r="function"==typeof t[t.length-1]&&t.pop(),o=new PouchPromise$1(function(r,o){var i;try{var a=once(function(e,t){e?o(e):r(t)});t.push(a),i=e.apply(n,t),i&&"function"==typeof i.then&&r(i)}catch(e){o(e)}});return r&&o.then(function(e){r(null,e)},r),o})}function adapterFun(e,t){function n(e,t,n){if(log.enabled){for(var r=[e.name,t],o=0;o<n.length-1;o++)r.push(n[o]);log.apply(null,r);var i=n[n.length-1];n[n.length-1]=function(n,r){var o=[e.name,t];o=o.concat(n?["error",n]:["success",r]),log.apply(null,o),i(n,r)}}}return toPromise(getArguments(function(r){if(this._closed)return PouchPromise$1.reject(new Error("database is closed"));if(this._destroyed)return PouchPromise$1.reject(new Error("database is destroyed"));var o=this;return n(o,e,r),this.taskqueue.isReady?t.apply(this,r):new PouchPromise$1(function(t,n){o.taskqueue.addTask(function(i){i?n(i):t(o[e].apply(o,r))})})}))}function mangle(e){return"$"+e}function unmangle(e){return e.substring(1)}function Map$1(){this._store={}}function Set$1(e){if(this._store=new Map$1,e&&Array.isArray(e))for(var t=0,n=e.length;t<n;t++)this.add(e[t])}function supportsMapAndSet(){if("undefined"==typeof Symbol||"undefined"==typeof Map||"undefined"==typeof Set)return!1;var e=Object.getOwnPropertyDescriptor(Map,Symbol.species);return e&&"get"in e&&Map[Symbol.species]===Map}function pick(e,t){for(var n={},r=0,o=t.length;r<o;r++){var i=t[r];i in e&&(n[i]=e[i])}return n}function identityFunction(e){return e}function formatResultForOpenRevsGet(e){return[{ok:e}]}function bulkGet(e,t,n){function r(){var e=[];f.forEach(function(t){t.docs.forEach(function(n){e.push({id:t.id,docs:[n]})})}),n(null,{results:e})}function o(){++d===l&&r()}function i(e,t,n){f[e]={id:t,docs:n},o()}function a(){if(!(p>=h.length)){var e=Math.min(p+MAX_NUM_CONCURRENT_REQUESTS,h.length),t=h.slice(p,e);c(t,p),p+=t.length}}function c(n,r){n.forEach(function(n,o){var c=r+o,s=u.get(n),l=pick(s[0],["atts_since","attachments"]);l.open_revs=s.map(function(e){return e.rev}),l.open_revs=l.open_revs.filter(identityFunction);var d=identityFunction;0===l.open_revs.length&&(delete l.open_revs,d=formatResultForOpenRevsGet),["revs","attachments","binary","ajax","latest"].forEach(function(e){e in t&&(l[e]=t[e])}),e.get(n,l,function(e,t){var r;r=e?[{error:e}]:d(t),i(c,n,r),a()})})}var s=t.docs,u=new ExportedMap;s.forEach(function(e){u.has(e.id)?u.get(e.id).push(e):u.set(e.id,[e])});var l=u.size,d=0,f=new Array(l),h=[];u.forEach(function(e,t){h.push(t)});var p=0;a()}function isChromeApp(){return"undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage&&"undefined"!=typeof chrome.storage.local}function hasLocalStorage(){return hasLocal}function attachBrowserEvents(e){isChromeApp()?chrome.storage.onChanged.addListener(function(t){null!=t.db_name&&e.emit(t.dbName.newValue)}):hasLocalStorage()&&("undefined"!=typeof addEventListener?addEventListener("storage",function(t){e.emit(t.key)}):window.attachEvent("storage",function(t){e.emit(t.key)}))}function Changes(){events.EventEmitter.call(this),this._listeners={},attachBrowserEvents(this)}function guardedConsole(e){if("undefined"!==console&&e in console){var t=Array.prototype.slice.call(arguments,1);console[e].apply(console,t)}}function randomNumber(e,t){var n=6e5;e=parseInt(e,10)||0,t=parseInt(t,10),t!==t||t<=e?t=(e||1)<<1:t+=1,t>n&&(e=n>>1,t=n);var r=Math.random(),o=t-e;return~~(o*r+e)}function defaultBackOff(e){var t=0;return e||(t=2e3),randomNumber(e,t)}function explainError(e,t){guardedConsole("info","The above "+e+" is totally normal. "+t)}function PouchError(e,t,n){Error.call(this,n),this.status=e,this.name=t,this.message=n,this.error=!0}function createError(e,t){function n(t){for(var n in e)"function"!=typeof e[n]&&(this[n]=e[n]);void 0!==t&&(this.reason=t)}return n.prototype=PouchError.prototype,new n(t)}function generateErrorFromResponse(e){if("object"!=typeof e){var t=e;e=UNKNOWN_ERROR,e.data=t}return"error"in e&&"conflict"===e.error&&(e.name="conflict",e.status=409),"name"in e||(e.name=e.error||"unknown"),"status"in e||(e.status=500),"message"in e||(e.message=e.message||e.reason),e}function tryFilter(e,t,n){try{return!e(t,n)}catch(e){var r="Filter function threw: "+e.toString();return createError(BAD_REQUEST,r)}}function filterChange(e){var t={},n=e.filter&&"function"==typeof e.filter;return t.query=e.query_params,function(r){r.doc||(r.doc={});var o=n&&tryFilter(e.filter,r.doc,t);if("object"==typeof o)return o;if(o)return!1;if(e.include_docs){if(!e.attachments)for(var i in r.doc._attachments)r.doc._attachments.hasOwnProperty(i)&&(r.doc._attachments[i].stub=!0)}else delete r.doc;return!0}}function flatten(e){for(var t=[],n=0,r=e.length;n<r;n++)t=t.concat(e[n]);return t}function f(){}function invalidIdError(e){var t;if(e?"string"!=typeof e?t=createError(INVALID_ID):/^_/.test(e)&&!/^_(design|local)/.test(e)&&(t=createError(RESERVED_ID)):t=createError(MISSING_ID),t)throw t}function listenerCount(e,t){return"listenerCount"in e?e.listenerCount(t):events.EventEmitter.listenerCount(e,t)}function parseDesignDocFunctionName(e){if(!e)return null;var t=e.split("/");return 2===t.length?t:1===t.length?[e,e]:null}function normalizeDesignDocFunctionName(e){var t=parseDesignDocFunctionName(e);return t?t.join("/"):null}function parseUri(e){for(var t=parser.exec(e),n={},r=14;r--;){var o=keys[r],i=t[r]||"",a=["user","password"].indexOf(o)!==-1;n[o]=a?decodeURIComponent(i):i}return n[qName]={},n[keys[12]].replace(qParser,function(e,t,r){t&&(n[qName][t]=r)}),n}function upsert(e,t,n){return new PouchPromise$1(function(r,o){e.get(t,function(i,a){if(i){if(404!==i.status)return o(i);a={}}var c=a._rev,s=n(a);return s?(s._id=t,s._rev=c,void r(tryAndPut(e,s,n))):r({updated:!1,rev:c})})})}function tryAndPut(e,t,n){return e.put(t).then(function(e){return{updated:!0,rev:e.rev}},function(r){if(409!==r.status)throw r;return upsert(e,t._id,n)})}function getValue(e){return 0|Math.random()*e}function uuid(e,t){t=t||chars.length;var n="",r=-1;if(e){for(;++r<e;)n+=chars[getValue(t)];return n}for(;++r<36;)switch(r){case 8:case 13:case 18:case 23:n+="-";break;case 19:n+=chars[3&getValue(16)|8];break;default:n+=chars[getValue(16)]}return n}function winningRev(e){for(var t,n,r,o,i=e.rev_tree.slice();o=i.pop();){var a=o.ids,c=a[2],s=o.pos;if(c.length)for(var u=0,l=c.length;u<l;u++)i.push({pos:s+1,ids:c[u]});else{var d=!!a[1].deleted,f=a[0];t&&!(r!==d?r:n!==s?n<s:t<f)||(t=f,n=s,r=d)}}return n+"-"+t}function traverseRevTree(e,t){for(var n,r=e.slice();n=r.pop();)for(var o=n.pos,i=n.ids,a=i[2],c=t(0===a.length,o,i[0],n.ctx,i[1]),s=0,u=a.length;s<u;s++)r.push({pos:o+1,ids:a[s],ctx:c})}function sortByPos(e,t){return e.pos-t.pos}function collectLeaves(e){var t=[];traverseRevTree(e,function(e,n,r,o,i){e&&t.push({rev:n+"-"+r,pos:n,opts:i})}),t.sort(sortByPos).reverse();for(var n=0,r=t.length;n<r;n++)delete t[n].pos;return t}function collectConflicts(e){for(var t=winningRev(e),n=collectLeaves(e.rev_tree),r=[],o=0,i=n.length;o<i;o++){var a=n[o];a.rev===t||a.opts.deleted||r.push(a.rev)}return r}function compactTree(e){var t=[];return traverseRevTree(e.rev_tree,function(e,n,r,o,i){"available"!==i.status||e||(t.push(n+"-"+r),i.status="missing")}),t}function rootToLeaf(e){for(var t,n=[],r=e.slice();t=r.pop();){var o=t.pos,i=t.ids,a=i[0],c=i[1],s=i[2],u=0===s.length,l=t.history?t.history.slice():[];l.push({id:a,opts:c}),u&&n.push({pos:o+1-l.length,ids:l});for(var d=0,f=s.length;d<f;d++)r.push({pos:o+1,ids:s[d],history:l})}return n.reverse()}function sortByPos$1(e,t){return e.pos-t.pos}function binarySearch(e,t,n){for(var r,o=0,i=e.length;o<i;)r=o+i>>>1,n(e[r],t)<0?o=r+1:i=r;return o}function insertSorted(e,t,n){var r=binarySearch(e,t,n);e.splice(r,0,t)}function pathToTree(e,t){for(var n,r,o=t,i=e.length;o<i;o++){var a=e[o],c=[a.id,a.opts,[]];r?(r[2].push(c),r=c):n=r=c}return n}function compareTree(e,t){return e[0]<t[0]?-1:1}function mergeTree(e,t){for(var n=[{tree1:e,tree2:t}],r=!1;n.length>0;){var o=n.pop(),i=o.tree1,a=o.tree2;(i[1].status||a[1].status)&&(i[1].status="available"===i[1].status||"available"===a[1].status?"available":"missing");for(var c=0;c<a[2].length;c++)if(i[2][0]){for(var s=!1,u=0;u<i[2].length;u++)i[2][u][0]===a[2][c][0]&&(n.push({tree1:i[2][u],tree2:a[2][c]}),s=!0);s||(r="new_branch",insertSorted(i[2],a[2][c],compareTree))}else r="new_leaf",i[2][0]=a[2][c]}return{conflicts:r,tree:e}}function doMerge(e,t,n){var r,o=[],i=!1,a=!1;if(!e.length)return{tree:[t],conflicts:"new_leaf"};for(var c=0,s=e.length;c<s;c++){var u=e[c];if(u.pos===t.pos&&u.ids[0]===t.ids[0])r=mergeTree(u.ids,t.ids),o.push({pos:u.pos,ids:r.tree}),i=i||r.conflicts,a=!0;else if(n!==!0){var l=u.pos<t.pos?u:t,d=u.pos<t.pos?t:u,f=d.pos-l.pos,h=[],p=[];for(p.push({ids:l.ids,diff:f,parent:null,parentIdx:null});p.length>0;){var _=p.pop();if(0!==_.diff)for(var v=_.ids[2],E=0,g=v.length;E<g;E++)p.push({ids:v[E],diff:_.diff-1,parent:_.ids,parentIdx:E});else _.ids[0]===d.ids[0]&&h.push(_)}var m=h[0];m?(r=mergeTree(m.ids,d.ids),m.parent[2][m.parentIdx]=r.tree,o.push({pos:l.pos,ids:l.ids}),i=i||r.conflicts,a=!0):o.push(u)}else o.push(u)}return a||o.push(t),o.sort(sortByPos$1),{tree:o,conflicts:i||"internal_node"}}function stem(e,t){for(var n,r,o=rootToLeaf(e),i=0,a=o.length;i<a;i++){var c,s=o[i],u=s.ids;if(u.length>t){n||(n={});var l=u.length-t;c={pos:s.pos+l,ids:pathToTree(u,l)};for(var d=0;d<l;d++){var f=s.pos+d+"-"+u[d].id;n[f]=!0}}else c={pos:s.pos,ids:pathToTree(u,0)};r=r?doMerge(r,c,!0).tree:[c]}return n&&traverseRevTree(r,function(e,t,r){delete n[t+"-"+r]}),{tree:r,revs:n?Object.keys(n):[]}}function merge(e,t,n){var r=doMerge(e,t),o=stem(r.tree,n);return{tree:o.tree,stemmedRevs:o.revs,conflicts:r.conflicts}}function revExists(e,t){for(var n,r=e.slice(),o=t.split("-"),i=parseInt(o[0],10),a=o[1];n=r.pop();){if(n.pos===i&&n.ids[0]===a)return!0;for(var c=n.ids[2],s=0,u=c.length;s<u;s++)r.push({pos:n.pos+1,ids:c[s]})}return!1}function getTrees(e){return e.ids}function isDeleted(e,t){t||(t=winningRev(e));for(var n,r=t.substring(t.indexOf("-")+1),o=e.rev_tree.map(getTrees);n=o.pop();){if(n[0]===r)return!!n[1].deleted;o=o.concat(n[2])}}function isLocalId(e){return/^_local/.test(e)}function latest(e,t){for(var n,r=t.rev_tree.slice();n=r.pop();){var o=n.pos,i=n.ids,a=i[0],c=i[1],s=i[2],u=0===s.length,l=n.history?n.history.slice():[];if(l.push({id:a,pos:o,opts:c}),u)for(var d=0,f=l.length;d<f;d++){var h=l[d],p=h.pos+"-"+h.id;if(p===e)return o+"-"+a}for(var _=0,v=s.length;_<v;_++)r.push({pos:o+1,ids:s[_],history:l})}throw new Error("Unable to resolve latest revision for id "+t.id+", rev "+e)}function evalFilter(e){return scopedEval('"use strict";\nreturn '+e+";",{})}function evalView(e){var t=["return function(doc) {",'  "use strict";',"  var emitted = false;","  var emit = function (a, b) {","    emitted = true;","  };","  var view = "+e+";","  view(doc);","  if (emitted) {","    return true;","  }","};"].join("\n");return scopedEval(t,{})}function tryCatchInChangeListener(e,t){try{e.emit("change",t)}catch(e){guardedConsole("error",'Error in .on("change", function):',e)}}function Changes$2(e,t,n){function r(){o.cancel()}events.EventEmitter.call(this);var o=this;this.db=e,t=t?clone(t):{};var i=t.complete=once(function(t,n){t?listenerCount(o,"error")>0&&o.emit("error",t):o.emit("complete",n),o.removeAllListeners(),e.removeListener("destroyed",r)});n&&(o.on("complete",function(e){n(null,e)}),o.on("error",n)),e.once("destroyed",r),t.onChange=function(e){o.isCancelled||tryCatchInChangeListener(o,e)};var a=new PouchPromise$1(function(e,n){t.complete=function(t,r){t?n(t):e(r)}});o.once("cancel",function(){e.removeListener("destroyed",r),t.complete(null,{status:"cancelled"})}),this.then=a.then.bind(a),this.catch=a.catch.bind(a),this.then(function(e){i(null,e)},i),e.taskqueue.isReady?o.doChanges(t):e.taskqueue.addTask(function(e){e?t.complete(e):o.isCancelled?o.emit("cancel"):o.doChanges(t)})}function processChange(e,t,n){var r=[{rev:e._rev}];"all_docs"===n.style&&(r=collectLeaves(t.rev_tree).map(function(e){return{rev:e.rev}}));var o={id:t.id,changes:r,doc:e};return isDeleted(t,e._rev)&&(o.deleted=!0),n.conflicts&&(o.doc._conflicts=collectConflicts(t),o.doc._conflicts.length||delete o.doc._conflicts),o}function compare(e,t){return e<t?-1:e>t?1:0}function yankError(e){return function(t,n){t||n[0]&&n[0].error?e(t||n[0]):e(null,n.length?n[0]:n)}}function cleanDocs(e){for(var t=0;t<e.length;t++){var n=e[t];if(n._deleted)delete n._attachments;else if(n._attachments)for(var r=Object.keys(n._attachments),o=0;o<r.length;o++){var i=r[o];n._attachments[i]=pick(n._attachments[i],["data","digest","content_type","length","revpos","stub"])}}}function compareByIdThenRev(e,t){var n=compare(e._id,t._id);if(0!==n)return n;var r=e._revisions?e._revisions.start:0,o=t._revisions?t._revisions.start:0;return compare(r,o)}function computeHeight(e){var t={},n=[];return traverseRevTree(e,function(e,r,o,i){var a=r+"-"+o;return e&&(t[a]=0),void 0!==i&&n.push({from:i,to:a}),a}),n.reverse(),n.forEach(function(e){void 0===t[e.from]?t[e.from]=1+t[e.to]:t[e.from]=Math.min(t[e.from],1+t[e.to])}),t}function allDocsKeysQuery(e,t,n){var r="limit"in t?t.keys.slice(t.skip,t.limit+t.skip):t.skip>0?t.keys.slice(t.skip):t.keys;if(t.descending&&r.reverse(),!r.length)return e._allDocs({limit:0},n);var o={offset:t.skip};return PouchPromise$1.all(r.map(function(n){var r=$inject_Object_assign({key:n,deleted:"ok"},t);return["limit","skip","keys"].forEach(function(e){delete r[e]}),new PouchPromise$1(function(t,i){e._allDocs(r,function(e,r){return e?i(e):(o.total_rows=r.total_rows,void t(r.rows[0]||{key:n,error:"not_found"}))})})})).then(function(e){return o.rows=e,o})}function doNextCompaction(e){var t=e._compactionQueue[0],n=t.opts,r=t.callback;e.get("_local/compaction").catch(function(){return!1}).then(function(t){t&&t.last_seq&&(n.last_seq=t.last_seq),e._compact(n,function(t,n){t?r(t):r(null,n),nextTick(function(){e._compactionQueue.shift(),e._compactionQueue.length&&doNextCompaction(e)})})})}function attachmentNameError(e){return"_"===e.charAt(0)&&e+" is not a valid attachment name, attachment names cannot start with '_'"}function AbstractPouchDB(){events.EventEmitter.call(this)}function TaskQueue$1(){this.isReady=!1,this.failed=!1,this.queue=[]}function parseAdapter(e,t){var n=e.match(/([a-z\-]*):\/\/(.*)/);if(n)return{name:/https?/.test(n[1])?n[1]+"://"+n[2]:n[2],adapter:n[1]};var r=PouchDB$5.adapters,o=PouchDB$5.preferredAdapters,i=PouchDB$5.prefix,a=t.adapter;if(!a)for(var c=0;c<o.length;++c){a=o[c];{if(!("idb"===a&&"websql"in r&&hasLocalStorage()&&localStorage["_pouch__websqldb_"+i+e]))break;guardedConsole("log",'PouchDB is downgrading "'+e+'" to WebSQL to avoid data loss, because it was already opened with WebSQL.')}}var s=r[a],u=!(s&&"use_prefix"in s)||s.use_prefix;return{name:u?i+e:e,adapter:a}}function prepareForDestruction(e){function t(){e.removeListener("closed",r),e.constructor.emit("destroyed",e.name)}function n(){e.removeListener("destroyed",t),e.removeListener("closed",r),e.emit("destroyed")}function r(){e.removeListener("destroyed",t),o.delete(e.name)}var o=e.constructor._destructionListeners;e.once("destroyed",t),e.once("closed",r),o.has(e.name)||o.set(e.name,[]),o.get(e.name).push(n)}function PouchDB$5(e,t){if(!(this instanceof PouchDB$5))return new PouchDB$5(e,t);var n=this;if(t=t||{},e&&"object"==typeof e&&(t=e,e=t.name,delete t.name),this.__opts=t=clone(t),n.auto_compaction=t.auto_compaction,n.prefix=PouchDB$5.prefix,"string"!=typeof e)throw new Error("Missing/invalid DB name");var r=(t.prefix||"")+e,o=parseAdapter(r,t);if(t.name=o.name,t.adapter=t.adapter||o.adapter,n.name=e,n._adapter=t.adapter,debug("pouchdb:adapter")("Picked adapter: "+t.adapter),!PouchDB$5.adapters[t.adapter]||!PouchDB$5.adapters[t.adapter].valid())throw new Error("Invalid Adapter: "+t.adapter);AbstractPouchDB.call(n),n.taskqueue=new TaskQueue$1,n.adapter=t.adapter,PouchDB$5.adapters[t.adapter].call(n,t,function(e){return e?n.taskqueue.fail(e):(prepareForDestruction(n),n.emit("created",n),PouchDB$5.emit("created",n.name),void n.taskqueue.ready(n))})}function setUpEventEmitter(e){Object.keys(events.EventEmitter.prototype).forEach(function(t){"function"==typeof events.EventEmitter.prototype[t]&&(e[t]=eventEmitter[t].bind(eventEmitter))});var t=e._destructionListeners=new ExportedMap;e.on("destroyed",function(e){t.get(e).forEach(function(e){e()}),t.delete(e)})}function toObject(e){return e.reduce(function(e,t){return e[t]=!0,e},{})}function parseRevisionInfo(e){if(!/^\d+\-./.test(e))return createError(INVALID_REV);var t=e.indexOf("-"),n=e.substring(0,t),r=e.substring(t+1);return{prefix:parseInt(n,10),id:r}}function makeRevTreeFromRevisions(e,t){for(var n=e.start-e.ids.length+1,r=e.ids,o=[r[0],t,[]],i=1,a=r.length;i<a;i++)o=[r[i],{status:"missing"},[o]];return[{pos:n,ids:o}]}function parseDoc(e,t){var n,r,o,i={status:"available"};if(e._deleted&&(i.deleted=!0),t)if(e._id||(e._id=uuid()),r=uuid(32,16).toLowerCase(),e._rev){if(o=parseRevisionInfo(e._rev),o.error)return o;e._rev_tree=[{pos:o.prefix,ids:[o.id,{status:"missing"},[[r,i,[]]]]}],n=o.prefix+1}else e._rev_tree=[{pos:1,ids:[r,i,[]]}],n=1;else if(e._revisions&&(e._rev_tree=makeRevTreeFromRevisions(e._revisions,i),n=e._revisions.start,r=e._revisions.ids[0]),!e._rev_tree){if(o=parseRevisionInfo(e._rev),o.error)return o;n=o.prefix,r=o.id,e._rev_tree=[{pos:n,ids:[r,i,[]]}]}invalidIdError(e._id),e._rev=n+"-"+r;var a={metadata:{},data:{}};for(var c in e)if(Object.prototype.hasOwnProperty.call(e,c)){var s="_"===c[0];if(s&&!reservedWords[c]){var u=createError(DOC_VALIDATION,c);throw u.message=DOC_VALIDATION.message+": "+c,u}s&&!dataWords[c]?a.metadata[c.slice(1)]=e[c]:a.data[c]=e[c]}return a}function createBlob(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(i){if("TypeError"!==i.name)throw i;for(var n="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:WebKitBlobBuilder,r=new n,o=0;o<e.length;o+=1)r.append(e[o]);return r.getBlob(t.type)}}function binaryStringToArrayBuffer(e){for(var t=e.length,n=new ArrayBuffer(t),r=new Uint8Array(n),o=0;o<t;o++)r[o]=e.charCodeAt(o);return n}function binStringToBluffer(e,t){return createBlob([binaryStringToArrayBuffer(e)],{type:t})}function b64ToBluffer(e,t){return binStringToBluffer(thisAtob(e),t)}function arrayBufferToBinaryString(e){for(var t="",n=new Uint8Array(e),r=n.byteLength,o=0;o<r;o++)t+=String.fromCharCode(n[o]);return t}function readAsBinaryString(e,t){if("undefined"==typeof FileReader)return t(arrayBufferToBinaryString((new FileReaderSync).readAsArrayBuffer(e)));var n=new FileReader,r="function"==typeof n.readAsBinaryString;n.onloadend=function(e){var n=e.target.result||"";return r?t(n):void t(arrayBufferToBinaryString(n))},r?n.readAsBinaryString(e):n.readAsArrayBuffer(e)}function blobToBinaryString(e,t){readAsBinaryString(e,function(e){t(e)})}function blobToBase64(e,t){blobToBinaryString(e,function(e){t(thisBtoa(e))})}function readAsArrayBuffer(e,t){if("undefined"==typeof FileReader)return t((new FileReaderSync).readAsArrayBuffer(e));var n=new FileReader;n.onloadend=function(e){var n=e.target.result||new ArrayBuffer(0);t(n)},n.readAsArrayBuffer(e)}function rawToBase64(e){return thisBtoa(e)}function sliceBlob(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.slice(t,n)}function appendBlob(e,t,n,r,o){(n>0||r<t.size)&&(t=sliceBlob(t,n,r)),readAsArrayBuffer(t,function(t){e.append(t),o()})}function appendString(e,t,n,r,o){(n>0||r<t.length)&&(t=t.substring(n,r)),e.appendBinary(t),o()}function binaryMd5(e,t){function n(){setImmediateShim(o)}function r(){var e=l.end(!0),n=rawToBase64(e);t(n),l.destroy()}function o(){var t=u*c,o=t+c;u++,u<s?d(l,e,t,o,n):d(l,e,t,o,r)}var i="string"==typeof e,a=i?e.length:e.size,c=Math.min(MD5_CHUNK_SIZE,a),s=Math.ceil(a/c),u=0,l=i?new Md5:new Md5.ArrayBuffer,d=i?appendString:appendBlob;o()}function stringMd5(e){return Md5.hash(e)}function parseBase64(e){try{return thisAtob(e)}catch(e){var t=createError(BAD_ARG,"Attachment is not a valid base64 string");return{error:t}}}function preprocessString(e,t,n){var r=parseBase64(e.data);return r.error?n(r.error):(e.length=r.length,"blob"===t?e.data=binStringToBluffer(r,e.content_type):"base64"===t?e.data=thisBtoa(r):e.data=r,void binaryMd5(r,function(t){e.digest="md5-"+t,n()}))}function preprocessBlob(e,t,n){binaryMd5(e.data,function(r){e.digest="md5-"+r,e.length=e.data.size||e.data.length||0,"binary"===t?blobToBinaryString(e.data,function(t){e.data=t,n()}):"base64"===t?blobToBase64(e.data,function(t){e.data=t,n()}):n()})}function preprocessAttachment(e,t,n){return e.stub?n():void("string"==typeof e.data?preprocessString(e,t,n):preprocessBlob(e,t,n))}function preprocessAttachments(e,t,n){function r(){i++,e.length===i&&(o?n(o):n())}if(!e.length)return n();var o,i=0;e.forEach(function(e){function n(e){o=e,a++,a===i.length&&r()}var i=e.data&&e.data._attachments?Object.keys(e.data._attachments):[],a=0;if(!i.length)return r();for(var c in e.data._attachments)e.data._attachments.hasOwnProperty(c)&&preprocessAttachment(e.data._attachments[c],t,n)})}function updateDoc(e,t,n,r,o,i,a,c){if(revExists(t.rev_tree,n.metadata.rev))return r[o]=n,i();var s=t.winningRev||winningRev(t),u="deleted"in t?t.deleted:isDeleted(t,s),l="deleted"in n.metadata?n.metadata.deleted:isDeleted(n.metadata),d=/^1-/.test(n.metadata.rev);if(u&&!l&&c&&d){var f=n.data;f._rev=s,f._id=n.metadata.id,n=parseDoc(f,c)}var h=merge(t.rev_tree,n.metadata.rev_tree[0],e),p=c&&(u&&l&&"new_leaf"!==h.conflicts||!u&&"new_leaf"!==h.conflicts||u&&!l&&"new_branch"===h.conflicts);if(p){var _=createError(REV_CONFLICT);return r[o]=_,i()}var v=n.metadata.rev;n.metadata.rev_tree=h.tree,n.stemmedRevs=h.stemmedRevs||[],t.rev_map&&(n.metadata.rev_map=t.rev_map);var E,g=winningRev(n.metadata),m=isDeleted(n.metadata,g),y=u===m?0:u<m?-1:1;E=v===g?m:isDeleted(n.metadata,v),a(n,g,m,E,!0,y,o,i)}function rootIsMissing(e){return"missing"===e.metadata.rev_tree[0].ids[1].status}function processDocs(e,t,n,r,o,i,a,c,s){function u(e,t,n){var r=winningRev(e.metadata),o=isDeleted(e.metadata,r);if("was_delete"in c&&o)return i[t]=createError(MISSING_DOC,"deleted"),n();var s=d&&rootIsMissing(e);if(s){var u=createError(REV_CONFLICT);return i[t]=u,n()}var l=o?0:1;a(e,r,o,o,!1,l,t,n)}function l(){++h===p&&s&&s()}e=e||1e3;var d=c.new_edits,f=new ExportedMap,h=0,p=t.length;t.forEach(function(e,t){if(e._id&&isLocalId(e._id)){var r=e._deleted?"_removeLocal":"_putLocal";return void n[r](e,{ctx:o},function(e,n){i[t]=e||n,l()})}var a=e.metadata.id;f.has(a)?(p--,f.get(a).push([e,t])):f.set(a,[[e,t]])}),f.forEach(function(t,n){function o(){++s<t.length?c():l()}function c(){var c=t[s],l=c[0],f=c[1];if(r.has(n))updateDoc(e,r.get(n),l,i,f,o,a,d);else{var h=merge([],l.metadata.rev_tree[0],e);l.metadata.rev_tree=h.tree,l.stemmedRevs=h.stemmedRevs||[],u(l,f,o)}}var s=0;c()})}function safeJsonParse(e){try{return JSON.parse(e)}catch(t){return vuvuzela.parse(e)}}function safeJsonStringify(e){try{return JSON.stringify(e)}catch(t){return vuvuzela.stringify(e)}}function idbError(e){return function(t){var n="unknown_error";t.target&&t.target.error&&(n=t.target.error.name||t.target.error.message),e(createError(IDB_ERROR,n,t.type))}}function encodeMetadata(e,t,n){return{data:safeJsonStringify(e),winningRev:t,deletedOrLocal:n?"1":"0",seq:e.seq,id:e.id}}function decodeMetadata(e){if(!e)return null;var t=safeJsonParse(e.data);return t.winningRev=e.winningRev,t.deleted="1"===e.deletedOrLocal,t.seq=e.seq,t}function decodeDoc(e){if(!e)return e;var t=e._doc_id_rev.lastIndexOf(":");return e._id=e._doc_id_rev.substring(0,t-1),e._rev=e._doc_id_rev.substring(t+1),delete e._doc_id_rev,e}function readBlobData(e,t,n,r){n?r(e?"string"!=typeof e?e:b64ToBluffer(e,t):createBlob([""],{type:t})):e?"string"!=typeof e?readAsBinaryString(e,function(e){r(thisBtoa(e))}):r(e):r("")}function fetchAttachmentsIfNecessary(e,t,n,r){function o(){++c===a.length&&r&&r()}function i(e,t){var r=e._attachments[t],i=r.digest,a=n.objectStore(ATTACH_STORE).get(i);a.onsuccess=function(e){r.body=e.target.result.body,o()}}var a=Object.keys(e._attachments||{});if(!a.length)return r&&r();var c=0;a.forEach(function(n){t.attachments&&t.include_docs?i(e,n):(e._attachments[n].stub=!0,o())})}function postProcessAttachments(e,t){return PouchPromise$1.all(e.map(function(e){if(e.doc&&e.doc._attachments){var n=Object.keys(e.doc._attachments);return PouchPromise$1.all(n.map(function(n){var r=e.doc._attachments[n];if("body"in r){var o=r.body,i=r.content_type;return new PouchPromise$1(function(a){readBlobData(o,i,t,function(t){e.doc._attachments[n]=$inject_Object_assign(pick(r,["digest","content_type"]),{data:t}),a()})})}}))}}))}function compactRevs(e,t,n){function r(){u--,u||o()}function o(){i.length&&i.forEach(function(e){var t=s.index("digestSeq").count(IDBKeyRange.bound(e+"::",e+"::￿",!1,!1));t.onsuccess=function(t){var n=t.target.result;n||c.delete(e)}})}var i=[],a=n.objectStore(BY_SEQ_STORE),c=n.objectStore(ATTACH_STORE),s=n.objectStore(ATTACH_AND_SEQ_STORE),u=e.length;e.forEach(function(e){var n=a.index("_doc_id_rev"),o=t+"::"+e;n.getKey(o).onsuccess=function(e){var t=e.target.result;if("number"!=typeof t)return r();a.delete(t);var n=s.index("seq").openCursor(IDBKeyRange.only(t));n.onsuccess=function(e){var t=e.target.result;if(t){var n=t.value.digestSeq.split("::")[0];i.push(n),s.delete(t.primaryKey),t.continue()}else r()}}})}function openTransactionSafely(e,t,n){try{return{txn:e.transaction(t,n)}}catch(e){return{error:e}}}function idbBulkDocs(e,t,n,r,o,i){function a(){var e=[DOC_STORE,BY_SEQ_STORE,ATTACH_STORE,LOCAL_STORE,ATTACH_AND_SEQ_STORE,META_STORE],t=openTransactionSafely(o,e,"readwrite");return t.error?i(t.error):(m=t.txn,m.onabort=idbError(i),m.ontimeout=idbError(i),m.oncomplete=d,y=m.objectStore(DOC_STORE),S=m.objectStore(BY_SEQ_STORE),T=m.objectStore(ATTACH_STORE),O=m.objectStore(ATTACH_AND_SEQ_STORE),b=m.objectStore(META_STORE),b.get(META_STORE).onsuccess=function(e){R=e.target.result,u()},void h(function(e){return e?(P=!0,i(e)):void l()}))}function c(){B=!0,u()}function s(){processDocs(e.revs_limit,D,r,N,m,q,p,n,c)}function u(){R&&B&&(R.docCount+=k,b.put(R))}function l(){function e(){++n===D.length&&s()}function t(t){var n=decodeMetadata(t.target.result);n&&N.set(n.id,n),e()}if(D.length)for(var n=0,r=0,o=D.length;r<o;r++){var i=D[r];if(i._id&&isLocalId(i._id))e();else{var a=y.get(i.metadata.id);a.onsuccess=t}}}function d(){P||(changesHandler$$1.notify(r._meta.name),i(null,q))}function f(e,t){var n=T.get(e);n.onsuccess=function(n){if(n.target.result)t();else{var r=createError(MISSING_STUB,"unknown stub attachment with digest "+e);r.status=412,t(r)}}}function h(e){function t(){++o===n.length&&e(r)}var n=[];if(D.forEach(function(e){e.data&&e.data._attachments&&Object.keys(e.data._attachments).forEach(function(t){var r=e.data._attachments[t];r.stub&&n.push(r.digest)})}),!n.length)return e();var r,o=0;n.forEach(function(e){f(e,function(e){e&&!r&&(r=e),t()})})}function p(e,t,n,r,o,i,a,c){e.metadata.winningRev=t,e.metadata.deleted=n;var s=e.data;s._id=e.metadata.id,s._rev=e.metadata.rev,r&&(s._deleted=!0);var l=s._attachments&&Object.keys(s._attachments).length;return l?v(e,t,n,o,a,c):(k+=i,u(),void _(e,t,n,o,a,c))}function _(e,t,n,o,i,a){function c(i){var a=e.stemmedRevs||[];o&&r.auto_compaction&&(a=a.concat(compactTree(e.metadata))),a&&a.length&&compactRevs(a,e.metadata.id,m),d.seq=i.target.result;var c=encodeMetadata(d,t,n),s=y.put(c);s.onsuccess=u}function s(e){e.preventDefault(),e.stopPropagation();var t=S.index("_doc_id_rev"),n=t.getKey(l._doc_id_rev);n.onsuccess=function(e){var t=S.put(l,e.target.result);t.onsuccess=c}}function u(){q[i]={ok:!0,id:d.id,rev:d.rev},N.set(e.metadata.id,e.metadata),E(e,d.seq,a)}var l=e.data,d=e.metadata;l._doc_id_rev=d.id+"::"+d.rev,delete l._id,delete l._rev;var f=S.put(l);f.onsuccess=c,f.onerror=s}function v(e,t,n,r,o,i){function a(){u===l.length&&_(e,t,n,r,o,i)}function c(){u++,a()}var s=e.data,u=0,l=Object.keys(s._attachments);l.forEach(function(n){var r=e.data._attachments[n];if(r.stub)u++,a();else{var o=r.data;delete r.data,r.revpos=parseInt(t,10);var i=r.digest;g(i,o,c)}})}function E(e,t,n){function r(){++i===a.length&&n()}function o(n){var o=e.data._attachments[n].digest,i=O.put({seq:t,digestSeq:o+"::"+t});i.onsuccess=r,i.onerror=function(e){e.preventDefault(),e.stopPropagation(),r()}}var i=0,a=Object.keys(e.data._attachments||{});if(!a.length)return n();for(var c=0;c<a.length;c++)o(a[c])}function g(e,t,n){var r=T.count(e);r.onsuccess=function(r){var o=r.target.result;if(o)return n();var i={digest:e,body:t},a=T.put(i);a.onsuccess=n}}for(var m,y,S,T,O,b,A,R,D=t.docs,w=0,C=D.length;w<C;w++){var I=D[w];I._id&&isLocalId(I._id)||(I=D[w]=parseDoc(I,n.new_edits),I.error&&!A&&(A=I))}if(A)return i(A);var B=!1,k=0,q=new Array(D.length),N=new ExportedMap,P=!1,x=r._meta.blobSupport?"blob":"base64";preprocessAttachments(D,x,function(e){return e?i(e):void a()})}function runBatchedCursor(e,t,n,r,o){function i(e){l=e.target.result,u&&o(u,l,d)}function a(e){u=e.target.result,l&&o(u,l,d)}function c(){if(!u.length)return o();var n,c=u[u.length-1];if(t&&t.upper)try{n=IDBKeyRange.bound(c,t.upper,!0,t.upperOpen)}catch(e){if("DataError"===e.name&&0===e.code)return o()}else n=IDBKeyRange.lowerBound(c,!0);t=n,u=null,l=null,e.getAll(t,r).onsuccess=i,e.getAllKeys(t,r).onsuccess=a}function s(e){var t=e.target.result;return t?void o([t.key],[t.value],t):o()}var u,l,d,f="function"==typeof e.getAll&&"function"==typeof e.getAllKeys&&r>1&&!n;f?(d={continue:c},e.getAll(t,r).onsuccess=i,e.getAllKeys(t,r).onsuccess=a):n?e.openCursor(t,"prev").onsuccess=s:e.openCursor(t).onsuccess=s}function getAll(e,t,n){function r(e){var t=e.target.result;t?(o.push(t.value),t.continue()):n({target:{result:o}})}if("function"==typeof e.getAll)return void(e.getAll(t).onsuccess=n);var o=[];e.openCursor(t).onsuccess=r}function createKeyRange(e,t,n,r,o){try{if(e&&t)return o?IDBKeyRange.bound(t,e,!n,!1):IDBKeyRange.bound(e,t,!1,!n);if(e)return o?IDBKeyRange.upperBound(e):IDBKeyRange.lowerBound(e);if(t)return o?IDBKeyRange.lowerBound(t,!n):IDBKeyRange.upperBound(t,!n);if(r)return IDBKeyRange.only(r)}catch(e){return{error:e}}return null}function idbAllDocs(e,t,n){function r(t,n,r){var o=t.id+"::"+r;A.get(o).onsuccess=function(r){if(n.doc=decodeDoc(r.target.result),e.conflicts){var o=collectConflicts(t);o.length&&(n.doc._conflicts=o)}fetchAttachmentsIfNecessary(n.doc,e,y)}}function o(t,n){var o={id:n.id,key:n.id,value:{rev:t}},i=n.deleted;"ok"===e.deleted?(R.push(o),i?(o.value.deleted=!0,o.doc=null):e.include_docs&&r(n,o,t)):!i&&h--<=0&&(R.push(o),e.include_docs&&r(n,o,t))}function i(e){for(var t=0,n=e.length;t<n&&R.length!==p;t++){
var r=e[t],i=decodeMetadata(r),a=i.winningRev;o(a,i)}}function a(e,t,n){n&&(i(t),R.length<p&&n.continue())}function c(t){var n=t.target.result;e.descending&&(n=n.reverse()),i(n)}function s(){n(null,{total_rows:S,offset:e.skip,rows:R})}function u(){e.attachments?postProcessAttachments(R,e.binary).then(s):s()}var l="startkey"in e&&e.startkey,d="endkey"in e&&e.endkey,f="key"in e&&e.key,h=e.skip||0,p="number"==typeof e.limit?e.limit:-1,_=e.inclusive_end!==!1,v=createKeyRange(l,d,_,f,e.descending),E=v&&v.error;if(E&&("DataError"!==E.name||0!==E.code))return n(createError(IDB_ERROR,E.name,E.message));var g=[DOC_STORE,BY_SEQ_STORE,META_STORE];e.attachments&&g.push(ATTACH_STORE);var m=openTransactionSafely(t,g,"readonly");if(m.error)return n(m.error);var y=m.txn;y.oncomplete=u,y.onabort=idbError(n);var S,T=y.objectStore(DOC_STORE),O=y.objectStore(BY_SEQ_STORE),b=y.objectStore(META_STORE),A=O.index("_doc_id_rev"),R=[];return b.get(META_STORE).onsuccess=function(e){S=e.target.result.docCount},E||0===p?void 0:p===-1?getAll(T,v,c):void runBatchedCursor(T,v,e.descending,p+h,a)}function checkBlobSupport(e){return new PouchPromise$1(function(t){var n=createBlob([""]),r=e.objectStore(DETECT_BLOB_SUPPORT_STORE).put(n,"key");r.onsuccess=function(){var e=navigator.userAgent.match(/Chrome\/(\d+)/),n=navigator.userAgent.match(/Edge\//);t(n||!e||parseInt(e[1],10)>=43)},e.onabort=function(e){e.preventDefault(),e.stopPropagation(),t(!1)}}).catch(function(){return!1})}function countDocs(e,t){var n=e.objectStore(DOC_STORE).index("deletedOrLocal");n.count(IDBKeyRange.only("0")).onsuccess=function(e){t(e.target.result)}}function tryCode(e,t,n,r){try{e(t,n)}catch(e){r.emit("error",e)}}function applyNext(){!running&&queue.length&&(running=!0,queue.shift()())}function enqueueTask(e,t,n){queue.push(function(){e(function(e,r){tryCode(t,e,r,n),running=!1,nextTick(function(){applyNext(n)})})}),applyNext()}function changes(e,t,n,r){function o(t,n,r){function o(t,n){var r=e.processChange(n,t,e);d=r.seq=t.seq;var o=y(r);return"object"==typeof o?e.complete(o):void(o&&(m++,h&&g.push(r),e.attachments&&e.include_docs?fetchAttachmentsIfNecessary(n,e,p,function(){postProcessAttachments([r],e.binary).then(function(){e.onChange(r)})}):e.onChange(r)))}function i(){for(var e=0,t=c.length;e<t&&m!==f;e++){var n=c[e];if(n){var i=s[e];o(i,n)}}m!==f&&r.continue()}if(r&&t.length){var c=new Array(t.length),s=new Array(t.length),u=0;n.forEach(function(e,n){var r=decodeDoc(e),o=t[n];a(r,o,function(e,r){s[n]=e,c[n]=r,++u===t.length&&i()})})}}function i(e,t,n,r){if(n.seq!==t)return r();if(n.winningRev===e._rev)return r(n,e);var o=e._id+"::"+n.winningRev,i=E.get(o);i.onsuccess=function(e){r(n,decodeDoc(e.target.result))}}function a(e,t,n){if(l&&!l.has(e._id))return n();var r=S.get(e._id);return r?i(e,t,r,n):void(v.get(e._id).onsuccess=function(o){r=decodeMetadata(o.target.result),S.set(e._id,r),i(e,t,r,n)})}function c(){e.complete(null,{results:g,last_seq:d})}function s(){!e.continuous&&e.attachments?postProcessAttachments(g).then(c):c()}if(e=clone(e),e.continuous){var u=n+":"+uuid();return changesHandler$$1.addListener(n,u,t,e),changesHandler$$1.notify(n),{cancel:function(){changesHandler$$1.removeListener(n,u)}}}var l=e.doc_ids&&new ExportedSet(e.doc_ids);e.since=e.since||0;var d=e.since,f="limit"in e?e.limit:-1;0===f&&(f=1);var h;h="return_docs"in e?e.return_docs:!("returnDocs"in e)||e.returnDocs;var p,_,v,E,g=[],m=0,y=filterChange(e),S=new ExportedMap,T=[DOC_STORE,BY_SEQ_STORE];e.attachments&&T.push(ATTACH_STORE);var O=openTransactionSafely(r,T,"readonly");if(O.error)return e.complete(O.error);p=O.txn,p.onabort=idbError(e.complete),p.oncomplete=s,_=p.objectStore(BY_SEQ_STORE),v=p.objectStore(DOC_STORE),E=_.index("_doc_id_rev");var b=e.since&&!e.descending?IDBKeyRange.lowerBound(e.since,!0):null;runBatchedCursor(_,b,e.descending,f,o)}function IdbPouch(e,t){var n=this;enqueueTask(function(t){init(n,e,t)},t,n.constructor)}function init(e,t,n){function r(e){var t=e.createObjectStore(DOC_STORE,{keyPath:"id"});e.createObjectStore(BY_SEQ_STORE,{autoIncrement:!0}).createIndex("_doc_id_rev","_doc_id_rev",{unique:!0}),e.createObjectStore(ATTACH_STORE,{keyPath:"digest"}),e.createObjectStore(META_STORE,{keyPath:"id",autoIncrement:!1}),e.createObjectStore(DETECT_BLOB_SUPPORT_STORE),t.createIndex("deletedOrLocal","deletedOrLocal",{unique:!1}),e.createObjectStore(LOCAL_STORE,{keyPath:"_id"});var n=e.createObjectStore(ATTACH_AND_SEQ_STORE,{autoIncrement:!0});n.createIndex("seq","seq"),n.createIndex("digestSeq","digestSeq",{unique:!0})}function o(e,t){var n=e.objectStore(DOC_STORE);n.createIndex("deletedOrLocal","deletedOrLocal",{unique:!1}),n.openCursor().onsuccess=function(e){var r=e.target.result;if(r){var o=r.value,i=isDeleted(o);o.deletedOrLocal=i?"1":"0",n.put(o),r.continue()}else t()}}function i(e){e.createObjectStore(LOCAL_STORE,{keyPath:"_id"}).createIndex("_doc_id_rev","_doc_id_rev",{unique:!0})}function a(e,t){var n=e.objectStore(LOCAL_STORE),r=e.objectStore(DOC_STORE),o=e.objectStore(BY_SEQ_STORE),i=r.openCursor();i.onsuccess=function(e){var i=e.target.result;if(i){var a=i.value,c=a.id,s=isLocalId(c),u=winningRev(a);if(s){var l=c+"::"+u,d=c+"::",f=c+"::~",h=o.index("_doc_id_rev"),p=IDBKeyRange.bound(d,f,!1,!1),_=h.openCursor(p);_.onsuccess=function(e){if(_=e.target.result){var t=_.value;t._doc_id_rev===l&&n.put(t),o.delete(_.primaryKey),_.continue()}else r.delete(i.primaryKey),i.continue()}}else i.continue()}else t&&t()}}function c(e){var t=e.createObjectStore(ATTACH_AND_SEQ_STORE,{autoIncrement:!0});t.createIndex("seq","seq"),t.createIndex("digestSeq","digestSeq",{unique:!0})}function s(e,t){var n=e.objectStore(BY_SEQ_STORE),r=e.objectStore(ATTACH_STORE),o=e.objectStore(ATTACH_AND_SEQ_STORE),i=r.count();i.onsuccess=function(e){var r=e.target.result;return r?void(n.openCursor().onsuccess=function(e){var n=e.target.result;if(!n)return t();for(var r=n.value,i=n.primaryKey,a=Object.keys(r._attachments||{}),c={},s=0;s<a.length;s++){var u=r._attachments[a[s]];c[u.digest]=!0}var l=Object.keys(c);for(s=0;s<l.length;s++){var d=l[s];o.put({seq:i,digestSeq:d+"::"+i})}n.continue()}):t()}}function u(e){function t(e){return e.data?decodeMetadata(e):(e.deleted="1"===e.deletedOrLocal,e)}var n=e.objectStore(BY_SEQ_STORE),r=e.objectStore(DOC_STORE),o=r.openCursor();o.onsuccess=function(e){function o(){var e=c.id+"::",t=c.id+"::￿",r=n.index("_doc_id_rev").openCursor(IDBKeyRange.bound(e,t)),o=0;r.onsuccess=function(e){var t=e.target.result;if(!t)return c.seq=o,i();var n=t.primaryKey;n>o&&(o=n),t.continue()}}function i(){var e=encodeMetadata(c,c.winningRev,c.deleted),t=r.put(e);t.onsuccess=function(){a.continue()}}var a=e.target.result;if(a){var c=t(a.value);return c.winningRev=c.winningRev||winningRev(c),c.seq?i():void o()}}}var l=t.name,d=null;e._meta=null,e.type=function(){return"idb"},e._id=toPromise(function(t){t(null,e._meta.instanceId)}),e._bulkDocs=function(n,r,o){idbBulkDocs(t,n,r,e,d,o)},e._get=function(e,t,n){function r(){n(a,{doc:o,metadata:i,ctx:c})}var o,i,a,c=t.ctx;if(!c){var s=openTransactionSafely(d,[DOC_STORE,BY_SEQ_STORE,ATTACH_STORE],"readonly");if(s.error)return n(s.error);c=s.txn}c.objectStore(DOC_STORE).get(e).onsuccess=function(e){if(i=decodeMetadata(e.target.result),!i)return a=createError(MISSING_DOC,"missing"),r();var n;if(t.rev)n=t.latest?latest(t.rev,i):t.rev;else{n=i.winningRev;var s=isDeleted(i);if(s)return a=createError(MISSING_DOC,"deleted"),r()}var u=c.objectStore(BY_SEQ_STORE),l=i.id+"::"+n;u.index("_doc_id_rev").get(l).onsuccess=function(e){return o=e.target.result,o&&(o=decodeDoc(o)),o?void r():(a=createError(MISSING_DOC,"missing"),r())}}},e._getAttachment=function(e,t,n,r,o){var i;if(r.ctx)i=r.ctx;else{var a=openTransactionSafely(d,[DOC_STORE,BY_SEQ_STORE,ATTACH_STORE],"readonly");if(a.error)return o(a.error);i=a.txn}var c=n.digest,s=n.content_type;i.objectStore(ATTACH_STORE).get(c).onsuccess=function(e){var t=e.target.result.body;readBlobData(t,s,r.binary,function(e){o(null,e)})}},e._info=function(t){var n,r,o=openTransactionSafely(d,[META_STORE,BY_SEQ_STORE],"readonly");if(o.error)return t(o.error);var i=o.txn;i.objectStore(META_STORE).get(META_STORE).onsuccess=function(e){r=e.target.result.docCount},i.objectStore(BY_SEQ_STORE).openCursor(null,"prev").onsuccess=function(e){var t=e.target.result;n=t?t.key:0},i.oncomplete=function(){t(null,{doc_count:r,update_seq:n,idb_attachment_format:e._meta.blobSupport?"binary":"base64"})}},e._allDocs=function(e,t){idbAllDocs(e,d,t)},e._changes=function(t){changes(t,e,l,d)},e._close=function(e){d.close(),cachedDBs.delete(l),e()},e._getRevisionTree=function(e,t){var n=openTransactionSafely(d,[DOC_STORE],"readonly");if(n.error)return t(n.error);var r=n.txn,o=r.objectStore(DOC_STORE).get(e);o.onsuccess=function(e){var n=decodeMetadata(e.target.result);n?t(null,n.rev_tree):t(createError(MISSING_DOC))}},e._doCompaction=function(e,t,n){var r=[DOC_STORE,BY_SEQ_STORE,ATTACH_STORE,ATTACH_AND_SEQ_STORE],o=openTransactionSafely(d,r,"readwrite");if(o.error)return n(o.error);var i=o.txn,a=i.objectStore(DOC_STORE);a.get(e).onsuccess=function(n){var r=decodeMetadata(n.target.result);traverseRevTree(r.rev_tree,function(e,n,r,o,i){var a=n+"-"+r;t.indexOf(a)!==-1&&(i.status="missing")}),compactRevs(t,e,i);var o=r.winningRev,a=r.deleted;i.objectStore(DOC_STORE).put(encodeMetadata(r,o,a))},i.onabort=idbError(n),i.oncomplete=function(){n()}},e._getLocal=function(e,t){var n=openTransactionSafely(d,[LOCAL_STORE],"readonly");if(n.error)return t(n.error);var r=n.txn,o=r.objectStore(LOCAL_STORE).get(e);o.onerror=idbError(t),o.onsuccess=function(e){var n=e.target.result;n?(delete n._doc_id_rev,t(null,n)):t(createError(MISSING_DOC))}},e._putLocal=function(e,t,n){"function"==typeof t&&(n=t,t={}),delete e._revisions;var r=e._rev,o=e._id;r?e._rev="0-"+(parseInt(r.split("-")[1],10)+1):e._rev="0-1";var i,a=t.ctx;if(!a){var c=openTransactionSafely(d,[LOCAL_STORE],"readwrite");if(c.error)return n(c.error);a=c.txn,a.onerror=idbError(n),a.oncomplete=function(){i&&n(null,i)}}var s,u=a.objectStore(LOCAL_STORE);r?(s=u.get(o),s.onsuccess=function(o){var a=o.target.result;if(a&&a._rev===r){var c=u.put(e);c.onsuccess=function(){i={ok:!0,id:e._id,rev:e._rev},t.ctx&&n(null,i)}}else n(createError(REV_CONFLICT))}):(s=u.add(e),s.onerror=function(e){n(createError(REV_CONFLICT)),e.preventDefault(),e.stopPropagation()},s.onsuccess=function(){i={ok:!0,id:e._id,rev:e._rev},t.ctx&&n(null,i)})},e._removeLocal=function(e,t,n){"function"==typeof t&&(n=t,t={});var r=t.ctx;if(!r){var o=openTransactionSafely(d,[LOCAL_STORE],"readwrite");if(o.error)return n(o.error);r=o.txn,r.oncomplete=function(){i&&n(null,i)}}var i,a=e._id,c=r.objectStore(LOCAL_STORE),s=c.get(a);s.onerror=idbError(n),s.onsuccess=function(r){var o=r.target.result;o&&o._rev===e._rev?(c.delete(a),i={ok:!0,id:a,rev:"0-0"},t.ctx&&n(null,i)):n(createError(MISSING_DOC))}},e._destroy=function(e,t){changesHandler$$1.removeAllListeners(l);var n=openReqList.get(l);n&&n.result&&(n.result.close(),cachedDBs.delete(l));var r=indexedDB.deleteDatabase(l);r.onsuccess=function(){openReqList.delete(l),hasLocalStorage()&&l in localStorage&&delete localStorage[l],t(null,{ok:!0})},r.onerror=idbError(t)};var f=cachedDBs.get(l);if(f)return d=f.idb,e._meta=f.global,nextTick(function(){n(null,e)});var h;h=t.storage?tryStorageOption(l,t.storage):indexedDB.open(l,ADAPTER_VERSION),openReqList.set(l,h),h.onupgradeneeded=function(e){function t(){var e=d[f-1];f++,e&&e(l,t)}var n=e.target.result;if(e.oldVersion<1)return r(n);var l=e.currentTarget.transaction;e.oldVersion<3&&i(n),e.oldVersion<4&&c(n);var d=[o,a,s,u],f=e.oldVersion;t()},h.onsuccess=function(t){function r(){"undefined"!=typeof c&&f&&(e._meta={name:l,instanceId:s,blobSupport:c},cachedDBs.set(l,{idb:d,global:e._meta}),n(null,e))}function o(){if("undefined"!=typeof a&&"undefined"!=typeof i){var e=l+"_id";e in i?s=i[e]:i[e]=s=uuid(),i.docCount=a,u.objectStore(META_STORE).put(i)}}d=t.target.result,d.onversionchange=function(){d.close(),cachedDBs.delete(l)},d.onabort=function(e){guardedConsole("error","Database has a global failure",e.target.error),d.close(),cachedDBs.delete(l)};var i,a,c,s,u=d.transaction([META_STORE,DETECT_BLOB_SUPPORT_STORE,DOC_STORE],"readwrite"),f=!1;u.objectStore(META_STORE).get(META_STORE).onsuccess=function(e){i=e.target.result||{id:META_STORE},o()},countDocs(u,function(e){a=e,o()}),blobSupportPromise||(blobSupportPromise=checkBlobSupport(u)),blobSupportPromise.then(function(e){c=e,r()}),u.oncomplete=function(){f=!0,r()}},h.onerror=function(){var e="Failed to open indexedDB, are you in private browsing mode?";guardedConsole("error",e),n(createError(IDB_ERROR,e))}}function tryStorageOption(e,t){try{return indexedDB.open(e,{version:ADAPTER_VERSION,storage:t})}catch(t){return indexedDB.open(e,ADAPTER_VERSION)}}function decodeUtf8(e){return decodeURIComponent(escape(e))}function hexToInt(e){return e<65?e-48:e-55}function parseHexUtf8(e,t,n){for(var r="";t<n;)r+=String.fromCharCode(hexToInt(e.charCodeAt(t++))<<4|hexToInt(e.charCodeAt(t++)));return r}function parseHexUtf16(e,t,n){for(var r="";t<n;)r+=String.fromCharCode(hexToInt(e.charCodeAt(t+2))<<12|hexToInt(e.charCodeAt(t+3))<<8|hexToInt(e.charCodeAt(t))<<4|hexToInt(e.charCodeAt(t+1))),t+=4;return r}function parseHexString(e,t){return"UTF-8"===t?decodeUtf8(parseHexUtf8(e,0,e.length)):parseHexUtf16(e,0,e.length)}function quote(e){return"'"+e+"'"}function escapeBlob(e){return e.replace(/\u0002/g,"").replace(/\u0001/g,"").replace(/\u0000/g,"")}function unescapeBlob(e){return e.replace(/\u0001\u0001/g,"\0").replace(/\u0001\u0002/g,"").replace(/\u0002\u0002/g,"")}function stringifyDoc(e){return delete e._id,delete e._rev,JSON.stringify(e)}function unstringifyDoc(e,t,n){return e=JSON.parse(e),e._id=t,e._rev=n,e}function qMarks(e){for(var t="(";e--;)t+="?",e&&(t+=",");return t+")"}function select(e,t,n,r,o){return"SELECT "+e+" FROM "+("string"==typeof t?t:t.join(" JOIN "))+(n?" ON "+n:"")+(r?" WHERE "+("string"==typeof r?r:r.join(" AND ")):"")+(o?" ORDER BY "+o:"")}function compactRevs$1(e,t,n){function r(){++i===e.length&&o()}function o(){if(a.length){var e="SELECT DISTINCT digest AS digest FROM "+ATTACH_AND_SEQ_STORE$1+" WHERE seq IN "+qMarks(a.length);n.executeSql(e,a,function(e,t){for(var n=[],r=0;r<t.rows.length;r++)n.push(t.rows.item(r).digest);if(n.length){var o="DELETE FROM "+ATTACH_AND_SEQ_STORE$1+" WHERE seq IN ("+a.map(function(){return"?"}).join(",")+")";e.executeSql(o,a,function(e){var t="SELECT digest FROM "+ATTACH_AND_SEQ_STORE$1+" WHERE digest IN ("+n.map(function(){return"?"}).join(",")+")";e.executeSql(t,n,function(e,t){for(var r=new ExportedSet,o=0;o<t.rows.length;o++)r.add(t.rows.item(o).digest);n.forEach(function(t){r.has(t)||(e.executeSql("DELETE FROM "+ATTACH_AND_SEQ_STORE$1+" WHERE digest=?",[t]),e.executeSql("DELETE FROM "+ATTACH_STORE$1+" WHERE digest=?",[t]))})})})}})}}if(e.length){var i=0,a=[];e.forEach(function(e){var o="SELECT seq FROM "+BY_SEQ_STORE$1+" WHERE doc_id=? AND rev=?";n.executeSql(o,[t,e],function(e,t){if(!t.rows.length)return r();var n=t.rows.item(0).seq;a.push(n),e.executeSql("DELETE FROM "+BY_SEQ_STORE$1+" WHERE seq=?",[n],r)})})}}function websqlError(e){return function(t){guardedConsole("error","WebSQL threw an error",t);var n=t&&t.constructor.toString().match(/function ([^\(]+)/),r=n&&n[1]||t.type,o=t.target||t.message;e(createError(WSQ_ERROR,o,r))}}function getSize(e){if("size"in e)return 1e6*e.size;var t="undefined"!=typeof navigator&&/Android/.test(navigator.userAgent);return t?5e6:1}function websqlBulkDocs(e,t,n,r,o,i,a){function c(){return m?a(m):(i.notify(r._name),void a(null,y))}function s(e,t){var n="SELECT count(*) as cnt FROM "+ATTACH_STORE$1+" WHERE digest=?";g.executeSql(n,[e],function(n,r){if(0===r.rows.item(0).cnt){var o=createError(MISSING_STUB,"unknown stub attachment with digest "+e);t(o)}else t()})}function u(e){function t(){++o===n.length&&e(r)}var n=[];if(v.forEach(function(e){e.data&&e.data._attachments&&Object.keys(e.data._attachments).forEach(function(t){var r=e.data._attachments[t];r.stub&&n.push(r.digest)})}),!n.length)return e();var r,o=0;n.forEach(function(e){s(e,function(e){e&&!r&&(r=e),t()})})}function l(e,t,n,o,i,a,c,s){function u(){function t(e,t){function r(){return++i===a.length&&t(),!1}function o(t){var o="INSERT INTO "+ATTACH_AND_SEQ_STORE$1+" (digest, seq) VALUES (?,?)",i=[n._attachments[t].digest,e];g.executeSql(o,i,r,r)}var i=0,a=Object.keys(n._attachments||{});if(!a.length)return t();for(var c=0;c<a.length;c++)o(a[c])}var n=e.data,r=o?1:0,i=n._id,a=n._rev,c=stringifyDoc(n),s="INSERT INTO "+BY_SEQ_STORE$1+" (doc_id, rev, json, deleted) VALUES (?, ?, ?, ?);",u=[i,a,c,r];g.executeSql(s,u,function(e,n){var r=n.insertId;t(r,function(){f(e,r)})},function(){var e=select("seq",BY_SEQ_STORE$1,null,"doc_id=? AND rev=?");return g.executeSql(e,[i,a],function(e,n){var o=n.rows.item(0).seq,s="UPDATE "+BY_SEQ_STORE$1+" SET json=?, deleted=? WHERE doc_id=? AND rev=?;",u=[c,r,i,a];e.executeSql(s,u,function(e){t(o,function(){f(e,o)})})}),!1})}function l(e){p||(e?(p=e,s(p)):_===v.length&&u())}function d(e){_++,l(e)}function f(n,o){var a=e.metadata.id,u=e.stemmedRevs||[];i&&r.auto_compaction&&(u=compactTree(e.metadata).concat(u)),u.length&&compactRevs$1(u,a,n),e.metadata.seq=o;var l=e.metadata.rev;delete e.metadata.rev;var d=i?"UPDATE "+DOC_STORE$1+" SET json=?, max_seq=?, winningseq=(SELECT seq FROM "+BY_SEQ_STORE$1+" WHERE doc_id="+DOC_STORE$1+".id AND rev=?) WHERE id=?":"INSERT INTO "+DOC_STORE$1+" (id, winningseq, max_seq, json) VALUES (?,?,?,?);",f=safeJsonStringify(e.metadata),h=i?[f,o,t,a]:[a,o,o,f];n.executeSql(d,h,function(){y[c]={ok:!0,id:e.metadata.id,rev:l},S.set(a,e.metadata),s()})}var p=null,_=0;e.data._id=e.metadata.id,e.data._rev=e.metadata.rev;var v=Object.keys(e.data._attachments||{});o&&(e.data._deleted=!0),v.forEach(function(n){var r=e.data._attachments[n];if(r.stub)_++,l();else{var o=r.data;delete r.data,r.revpos=parseInt(t,10);var i=r.digest;h(i,o,d)}}),v.length||u()}function d(){processDocs(e.revs_limit,v,r,S,g,y,l,n)}function f(e){function t(){++n===v.length&&e()}if(!v.length)return e();var n=0;v.forEach(function(e){if(e._id&&isLocalId(e._id))return t();var n=e.metadata.id;g.executeSql("SELECT json FROM "+DOC_STORE$1+" WHERE id = ?",[n],function(e,r){if(r.rows.length){var o=safeJsonParse(r.rows.item(0).json);S.set(n,o)}t()})})}function h(e,t,n){var r="SELECT digest FROM "+ATTACH_STORE$1+" WHERE digest=?";g.executeSql(r,[e],function(o,i){return i.rows.length?n():(r="INSERT INTO "+ATTACH_STORE$1+" (digest, body, escaped) VALUES (?,?,1)",void o.executeSql(r,[e,escapeBlob(t)],function(){n()},function(){return n(),!1}))})}var p=n.new_edits,_=t.docs,v=_.map(function(e){if(e._id&&isLocalId(e._id))return e;var t=parseDoc(e,p);return t}),E=v.filter(function(e){return e.error});if(E.length)return a(E[0]);var g,m,y=new Array(v.length),S=new ExportedMap;preprocessAttachments(v,"binary",function(e){return e?a(e):void o.transaction(function(e){g=e,u(function(e){e?m=e:f(d)})},websqlError(a),c)})}function openDatabaseWithOpts(e){return e.websql(e.name,e.version,e.description,e.size)}function openDBSafely(e){try{return{db:openDatabaseWithOpts(e)}}catch(e){return{error:e}}}function openDB$1(e){var t=cachedDatabases.get(e.name);return t||(t=openDBSafely(e),cachedDatabases.set(e.name,t)),t}function fetchAttachmentsIfNecessary$1(e,t,n,r,o){function i(){++s===c.length&&o&&o()}function a(e,o){var a=e._attachments[o],c={binary:t.binary,ctx:r};n._getAttachment(e._id,o,a,c,function(t,n){e._attachments[o]=$inject_Object_assign(pick(a,["digest","content_type"]),{data:n}),i()})}var c=Object.keys(e._attachments||{});if(!c.length)return o&&o();var s=0;c.forEach(function(n){t.attachments&&t.include_docs?a(e,n):(e._attachments[n].stub=!0,i())})}function WebSqlPouch$1(e,t){function n(){hasLocalStorage()&&(window.localStorage["_pouch__websqldb_"+g._name]=!0),t(null,g)}function r(e,t){e.executeSql(DOC_STORE_WINNINGSEQ_INDEX_SQL),e.executeSql("ALTER TABLE "+BY_SEQ_STORE$1+" ADD COLUMN deleted TINYINT(1) DEFAULT 0",[],function(){e.executeSql(BY_SEQ_STORE_DELETED_INDEX_SQL),e.executeSql("ALTER TABLE "+DOC_STORE$1+" ADD COLUMN local TINYINT(1) DEFAULT 0",[],function(){e.executeSql("CREATE INDEX IF NOT EXISTS 'doc-store-local-idx' ON "+DOC_STORE$1+" (local, id)");var n="SELECT "+DOC_STORE$1+".winningseq AS seq, "+DOC_STORE$1+".json AS metadata FROM "+BY_SEQ_STORE$1+" JOIN "+DOC_STORE$1+" ON "+BY_SEQ_STORE$1+".seq = "+DOC_STORE$1+".winningseq";e.executeSql(n,[],function(e,n){for(var r=[],o=[],i=0;i<n.rows.length;i++){var a=n.rows.item(i),c=a.seq,s=JSON.parse(a.metadata);isDeleted(s)&&r.push(c),isLocalId(s.id)&&o.push(s.id)}e.executeSql("UPDATE "+DOC_STORE$1+"SET local = 1 WHERE id IN "+qMarks(o.length),o,function(){e.executeSql("UPDATE "+BY_SEQ_STORE$1+" SET deleted = 1 WHERE seq IN "+qMarks(r.length),r,t)})})})})}function o(e,t){var n="CREATE TABLE IF NOT EXISTS "+LOCAL_STORE$1+" (id UNIQUE, rev, json)";e.executeSql(n,[],function(){var n="SELECT "+DOC_STORE$1+".id AS id, "+BY_SEQ_STORE$1+".json AS data FROM "+BY_SEQ_STORE$1+" JOIN "+DOC_STORE$1+" ON "+BY_SEQ_STORE$1+".seq = "+DOC_STORE$1+".winningseq WHERE local = 1";e.executeSql(n,[],function(e,n){function r(){if(!o.length)return t(e);var n=o.shift(),i=JSON.parse(n.data)._rev;e.executeSql("INSERT INTO "+LOCAL_STORE$1+" (id, rev, json) VALUES (?,?,?)",[n.id,i,n.data],function(e){e.executeSql("DELETE FROM "+DOC_STORE$1+" WHERE id=?",[n.id],function(e){e.executeSql("DELETE FROM "+BY_SEQ_STORE$1+" WHERE seq=?",[n.seq],function(){r()})})})}for(var o=[],i=0;i<n.rows.length;i++)o.push(n.rows.item(i));r()})})}function i(e,t){function n(n){function r(){if(!n.length)return t(e);var o=n.shift(),i=parseHexString(o.hex,E),a=i.lastIndexOf("::"),c=i.substring(0,a),s=i.substring(a+2),u="UPDATE "+BY_SEQ_STORE$1+" SET doc_id=?, rev=? WHERE doc_id_rev=?";e.executeSql(u,[c,s,i],function(){r()})}r()}var r="ALTER TABLE "+BY_SEQ_STORE$1+" ADD COLUMN doc_id";e.executeSql(r,[],function(e){var t="ALTER TABLE "+BY_SEQ_STORE$1+" ADD COLUMN rev";e.executeSql(t,[],function(e){e.executeSql(BY_SEQ_STORE_DOC_ID_REV_INDEX_SQL,[],function(e){var t="SELECT hex(doc_id_rev) as hex FROM "+BY_SEQ_STORE$1;e.executeSql(t,[],function(e,t){for(var r=[],o=0;o<t.rows.length;o++)r.push(t.rows.item(o));n(r)})})})})}function a(e,t){function n(e){var n="SELECT COUNT(*) AS cnt FROM "+ATTACH_STORE$1;e.executeSql(n,[],function(e,n){function r(){var n=select(SELECT_DOCS+", "+DOC_STORE$1+".id AS id",[DOC_STORE$1,BY_SEQ_STORE$1],DOC_STORE_AND_BY_SEQ_JOINER,null,DOC_STORE$1+".id ");n+=" LIMIT "+a+" OFFSET "+i,i+=a,e.executeSql(n,[],function(e,n){function o(e,t){var n=i[e]=i[e]||[];n.indexOf(t)===-1&&n.push(t)}if(!n.rows.length)return t(e);for(var i={},a=0;a<n.rows.length;a++)for(var c=n.rows.item(a),s=unstringifyDoc(c.data,c.id,c.rev),u=Object.keys(s._attachments||{}),l=0;l<u.length;l++){var d=s._attachments[u[l]];o(d.digest,c.seq)}var f=[];if(Object.keys(i).forEach(function(e){var t=i[e];t.forEach(function(t){f.push([e,t])})}),!f.length)return r();var h=0;f.forEach(function(t){var n="INSERT INTO "+ATTACH_AND_SEQ_STORE$1+" (digest, seq) VALUES (?,?)";e.executeSql(n,t,function(){++h===f.length&&r()})})})}var o=n.rows.item(0).cnt;if(!o)return t(e);var i=0,a=10;r()})}var r="CREATE TABLE IF NOT EXISTS "+ATTACH_AND_SEQ_STORE$1+" (digest, seq INTEGER)";e.executeSql(r,[],function(e){e.executeSql(ATTACH_AND_SEQ_STORE_ATTACH_INDEX_SQL,[],function(e){e.executeSql(ATTACH_AND_SEQ_STORE_SEQ_INDEX_SQL,[],n)})})}function c(e,t){var n="ALTER TABLE "+ATTACH_STORE$1+" ADD COLUMN escaped TINYINT(1) DEFAULT 0";e.executeSql(n,[],t)}function s(e,t){var n="ALTER TABLE "+DOC_STORE$1+" ADD COLUMN max_seq INTEGER";e.executeSql(n,[],function(e){var n="UPDATE "+DOC_STORE$1+" SET max_seq=(SELECT MAX(seq) FROM "+BY_SEQ_STORE$1+" WHERE doc_id=id)";e.executeSql(n,[],function(e){var n="CREATE UNIQUE INDEX IF NOT EXISTS 'doc-max-seq-idx' ON "+DOC_STORE$1+" (max_seq)";e.executeSql(n,[],t)})})}function u(e,t){e.executeSql('SELECT HEX("a") AS hex',[],function(e,n){var r=n.rows.item(0).hex;E=2===r.length?"UTF-8":"UTF-16",t()})}function l(){for(;S.length>0;){var e=S.pop();e(null,m)}}function d(e,t){if(0===t){var n="CREATE TABLE IF NOT EXISTS "+META_STORE$1+" (dbid, db_version INTEGER)",u="CREATE TABLE IF NOT EXISTS "+ATTACH_STORE$1+" (digest UNIQUE, escaped TINYINT(1), body BLOB)",d="CREATE TABLE IF NOT EXISTS "+ATTACH_AND_SEQ_STORE$1+" (digest, seq INTEGER)",f="CREATE TABLE IF NOT EXISTS "+DOC_STORE$1+" (id unique, json, winningseq, max_seq INTEGER UNIQUE)",h="CREATE TABLE IF NOT EXISTS "+BY_SEQ_STORE$1+" (seq INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, json, deleted TINYINT(1), doc_id, rev)",p="CREATE TABLE IF NOT EXISTS "+LOCAL_STORE$1+" (id UNIQUE, rev, json)";e.executeSql(u),e.executeSql(p),e.executeSql(d,[],function(){e.executeSql(ATTACH_AND_SEQ_STORE_SEQ_INDEX_SQL),e.executeSql(ATTACH_AND_SEQ_STORE_ATTACH_INDEX_SQL)}),e.executeSql(f,[],function(){e.executeSql(DOC_STORE_WINNINGSEQ_INDEX_SQL),e.executeSql(h,[],function(){e.executeSql(BY_SEQ_STORE_DELETED_INDEX_SQL),e.executeSql(BY_SEQ_STORE_DOC_ID_REV_INDEX_SQL),e.executeSql(n,[],function(){var t="INSERT INTO "+META_STORE$1+" (db_version, dbid) VALUES (?,?)";m=uuid();var n=[ADAPTER_VERSION$1,m];e.executeSql(t,n,function(){l()})})})})}else{var _=function(){var n=t<ADAPTER_VERSION$1;n&&e.executeSql("UPDATE "+META_STORE$1+" SET db_version = "+ADAPTER_VERSION$1);var r="SELECT dbid FROM "+META_STORE$1;e.executeSql(r,[],function(e,t){m=t.rows.item(0).dbid,l()})},v=[r,o,i,a,c,s,_],E=t,g=function(e){v[E-1](e,g),E++};g(e)}}function f(){b.transaction(function(e){u(e,function(){h(e)})},websqlError(t),n)}function h(e){var t="SELECT sql FROM sqlite_master WHERE tbl_name = "+META_STORE$1;e.executeSql(t,[],function(e,t){t.rows.length?/db_version/.test(t.rows.item(0).sql)?e.executeSql("SELECT db_version FROM "+META_STORE$1,[],function(e,t){var n=t.rows.item(0).db_version;d(e,n)}):e.executeSql("ALTER TABLE "+META_STORE$1+" ADD COLUMN db_version INTEGER",[],function(){d(e,1)}):d(e,0)})}function p(e,t){var n="SELECT MAX(seq) AS seq FROM "+BY_SEQ_STORE$1;e.executeSql(n,[],function(e,n){var r=n.rows.item(0).seq||0;t(r)})}function _(e,t){var n=select("COUNT("+DOC_STORE$1+".id) AS 'num'",[DOC_STORE$1,BY_SEQ_STORE$1],DOC_STORE_AND_BY_SEQ_JOINER,BY_SEQ_STORE$1+".deleted=0");e.executeSql(n,[],function(e,n){t(n.rows.item(0).num)})}function v(e,t,n,r,o){var i=select(SELECT_DOCS,[DOC_STORE$1,BY_SEQ_STORE$1],DOC_STORE_AND_BY_SEQ_JOINER,DOC_STORE$1+".id=?"),a=[t];e.executeSql(i,a,function(e,t){if(!t.rows.length){var i=createError(MISSING_DOC,"missing");return o(i)}var a=t.rows.item(0),c=safeJsonParse(a.metadata);r(latest(n,c))})}var E,g=this,m=null,y=getSize(e),S=[];g._name=e.name;var T=$inject_Object_assign({},e,{version:POUCH_VERSION,description:e.name,size:y}),O=openDB$1(T);if(O.error)return websqlError(t)(O.error);var b=O.db;"function"!=typeof b.readTransaction&&(b.readTransaction=b.transaction),f(),g.type=function(){return"websql"},g._id=toPromise(function(e){e(null,m)}),g._info=function(e){var t,n;b.readTransaction(function(e){p(e,function(e){t=e}),_(e,function(e){n=e})},websqlError(e),function(){e(null,{doc_count:n,update_seq:t,websql_encoding:E})})},g._bulkDocs=function(t,n,r){websqlBulkDocs(e,t,n,g,b,websqlChanges,r)},g._get=function(e,t,n){function r(e){n(e,{doc:o,metadata:i,ctx:a})}var o,i,a=t.ctx;if(!a)return b.readTransaction(function(r){g._get(e,$inject_Object_assign({ctx:r},t),n)});var c,s;if(t.rev){if(t.latest)return void v(a,e,t.rev,function(r){t.latest=!1,t.rev=r,g._get(e,t,n)},r);c=select(SELECT_DOCS,[DOC_STORE$1,BY_SEQ_STORE$1],DOC_STORE$1+".id="+BY_SEQ_STORE$1+".doc_id",[BY_SEQ_STORE$1+".doc_id=?",BY_SEQ_STORE$1+".rev=?"]),s=[e,t.rev]}else c=select(SELECT_DOCS,[DOC_STORE$1,BY_SEQ_STORE$1],DOC_STORE_AND_BY_SEQ_JOINER,DOC_STORE$1+".id=?"),s=[e];a.executeSql(c,s,function(e,n){if(!n.rows.length){var a=createError(MISSING_DOC,"missing");return r(a)}var c=n.rows.item(0);if(i=safeJsonParse(c.metadata),c.deleted&&!t.rev){var s=createError(MISSING_DOC,"deleted");return r(s)}o=unstringifyDoc(c.data,i.id,c.rev),r()})},g._allDocs=function(e,t){var n,r=[],o="startkey"in e&&e.startkey,i="endkey"in e&&e.endkey,a="key"in e&&e.key,c="descending"in e&&e.descending,s="limit"in e?e.limit:-1,u="skip"in e?e.skip:0,l=e.inclusive_end!==!1,d=[],f=[];if(a!==!1)f.push(DOC_STORE$1+".id = ?"),d.push(a);else if(o!==!1||i!==!1){if(o!==!1&&(f.push(DOC_STORE$1+".id "+(c?"<=":">=")+" ?"),d.push(o)),i!==!1){var h=c?">":"<";l&&(h+="="),f.push(DOC_STORE$1+".id "+h+" ?"),d.push(i)}a!==!1&&(f.push(DOC_STORE$1+".id = ?"),d.push(a))}"ok"!==e.deleted&&f.push(BY_SEQ_STORE$1+".deleted = 0"),b.readTransaction(function(t){if(_(t,function(e){n=e}),0!==s){var o=select(SELECT_DOCS,[DOC_STORE$1,BY_SEQ_STORE$1],DOC_STORE_AND_BY_SEQ_JOINER,f,DOC_STORE$1+".id "+(c?"DESC":"ASC"));o+=" LIMIT "+s+" OFFSET "+u,t.executeSql(o,d,function(t,n){for(var o=0,i=n.rows.length;o<i;o++){var a=n.rows.item(o),c=safeJsonParse(a.metadata),s=c.id,u=unstringifyDoc(a.data,s,a.rev),l=u._rev,d={id:s,key:s,value:{rev:l}};if(e.include_docs){if(d.doc=u,d.doc._rev=l,e.conflicts){var f=collectConflicts(c);f.length&&(d.doc._conflicts=f)}fetchAttachmentsIfNecessary$1(d.doc,e,g,t)}if(a.deleted){if("ok"!==e.deleted)continue;d.value.deleted=!0,d.doc=null}r.push(d)}})}},websqlError(t),function(){t(null,{total_rows:n,offset:e.skip,rows:r})})},g._changes=function(e){function t(){var t=DOC_STORE$1+".json AS metadata, "+DOC_STORE$1+".max_seq AS maxSeq, "+BY_SEQ_STORE$1+".json AS winningDoc, "+BY_SEQ_STORE$1+".rev AS winningRev ",n=DOC_STORE$1+" JOIN "+BY_SEQ_STORE$1,s=DOC_STORE$1+".id="+BY_SEQ_STORE$1+".doc_id AND "+DOC_STORE$1+".winningseq="+BY_SEQ_STORE$1+".seq",u=["maxSeq > ?"],l=[e.since];e.doc_ids&&(u.push(DOC_STORE$1+".id IN "+qMarks(e.doc_ids.length)),l=l.concat(e.doc_ids));var d="maxSeq "+(r?"DESC":"ASC"),f=select(t,n,s,u,d),h=filterChange(e);e.view||e.filter||(f+=" LIMIT "+o);var p=e.since||0;b.readTransaction(function(t){t.executeSql(f,l,function(t,n){function r(t){return function(){e.onChange(t)}}for(var s=0,u=n.rows.length;s<u;s++){var l=n.rows.item(s),d=safeJsonParse(l.metadata);p=l.maxSeq;var f=unstringifyDoc(l.winningDoc,d.id,l.winningRev),_=e.processChange(f,d,e);_.seq=l.maxSeq;var v=h(_);if("object"==typeof v)return e.complete(v);if(v&&(c++,i&&a.push(_),e.attachments&&e.include_docs?fetchAttachmentsIfNecessary$1(f,e,g,t,r(_)):r(_)()),c===o)break}})},websqlError(e.complete),function(){e.continuous||e.complete(null,{results:a,last_seq:p})})}if(e=clone(e),e.continuous){var n=g._name+":"+uuid();return websqlChanges.addListener(g._name,n,g,e),websqlChanges.notify(g._name),{cancel:function(){websqlChanges.removeListener(g._name,n)}}}var r=e.descending;e.since=e.since&&!r?e.since:0;var o="limit"in e?e.limit:-1;0===o&&(o=1);var i;i="return_docs"in e?e.return_docs:!("returnDocs"in e)||e.returnDocs;var a=[],c=0;t()},g._close=function(e){e()},g._getAttachment=function(e,t,n,r,o){var i,a=r.ctx,c=n.digest,s=n.content_type,u="SELECT escaped, CASE WHEN escaped = 1 THEN body ELSE HEX(body) END AS body FROM "+ATTACH_STORE$1+" WHERE digest=?";a.executeSql(u,[c],function(e,t){var n=t.rows.item(0),a=n.escaped?unescapeBlob(n.body):parseHexString(n.body,E);i=r.binary?binStringToBluffer(a,s):thisBtoa(a),o(null,i)})},g._getRevisionTree=function(e,t){b.readTransaction(function(n){var r="SELECT json AS metadata FROM "+DOC_STORE$1+" WHERE id = ?";n.executeSql(r,[e],function(e,n){if(n.rows.length){var r=safeJsonParse(n.rows.item(0).metadata);t(null,r.rev_tree)}else t(createError(MISSING_DOC))})})},g._doCompaction=function(e,t,n){return t.length?void b.transaction(function(n){var r="SELECT json AS metadata FROM "+DOC_STORE$1+" WHERE id = ?";n.executeSql(r,[e],function(n,r){var o=safeJsonParse(r.rows.item(0).metadata);traverseRevTree(o.rev_tree,function(e,n,r,o,i){var a=n+"-"+r;t.indexOf(a)!==-1&&(i.status="missing")});var i="UPDATE "+DOC_STORE$1+" SET json = ? WHERE id = ?";n.executeSql(i,[safeJsonStringify(o),e])}),compactRevs$1(t,e,n);
},websqlError(n),function(){n()}):n()},g._getLocal=function(e,t){b.readTransaction(function(n){var r="SELECT json, rev FROM "+LOCAL_STORE$1+" WHERE id=?";n.executeSql(r,[e],function(n,r){if(r.rows.length){var o=r.rows.item(0),i=unstringifyDoc(o.json,e,o.rev);t(null,i)}else t(createError(MISSING_DOC))})})},g._putLocal=function(e,t,n){function r(e){var r,u;i?(r="UPDATE "+LOCAL_STORE$1+" SET rev=?, json=? WHERE id=? AND rev=?",u=[o,s,a,i]):(r="INSERT INTO "+LOCAL_STORE$1+" (id, rev, json) VALUES (?,?,?)",u=[a,o,s]),e.executeSql(r,u,function(e,r){r.rowsAffected?(c={ok:!0,id:a,rev:o},t.ctx&&n(null,c)):n(createError(REV_CONFLICT))},function(){return n(createError(REV_CONFLICT)),!1})}"function"==typeof t&&(n=t,t={}),delete e._revisions;var o,i=e._rev,a=e._id;o=i?e._rev="0-"+(parseInt(i.split("-")[1],10)+1):e._rev="0-1";var c,s=stringifyDoc(e);t.ctx?r(t.ctx):b.transaction(r,websqlError(n),function(){c&&n(null,c)})},g._removeLocal=function(e,t,n){function r(r){var i="DELETE FROM "+LOCAL_STORE$1+" WHERE id=? AND rev=?",a=[e._id,e._rev];r.executeSql(i,a,function(r,i){return i.rowsAffected?(o={ok:!0,id:e._id,rev:"0-0"},void(t.ctx&&n(null,o))):n(createError(MISSING_DOC))})}"function"==typeof t&&(n=t,t={});var o;t.ctx?r(t.ctx):b.transaction(r,websqlError(n),function(){o&&n(null,o)})},g._destroy=function(e,t){websqlChanges.removeAllListeners(g._name),b.transaction(function(e){var t=[DOC_STORE$1,BY_SEQ_STORE$1,ATTACH_STORE$1,META_STORE$1,LOCAL_STORE$1,ATTACH_AND_SEQ_STORE$1];t.forEach(function(t){e.executeSql("DROP TABLE IF EXISTS "+t,[])})},websqlError(t),function(){hasLocalStorage()&&(delete window.localStorage["_pouch__websqldb_"+g._name],delete window.localStorage[g._name]),t(null,{ok:!0})})}}function canOpenTestDB(){try{return openDatabase("_pouch_validate_websql",1,"",1),!0}catch(e){return!1}}function isValidWebSQL(){if("undefined"==typeof indexedDB||null===indexedDB||!/iP(hone|od|ad)/.test(navigator.userAgent))return!0;var e=hasLocalStorage(),t="_pouch__websqldb_valid_"+navigator.userAgent;if(e&&localStorage[t])return"1"===localStorage[t];var n=canOpenTestDB();return e&&(localStorage[t]=n?"1":"0"),n}function valid(){return"function"==typeof openDatabase&&isValidWebSQL()}function openDB(e,t,n,r){return openDatabase(e,t,n,r)}function WebSQLPouch(e,t){var n=$inject_Object_assign({websql:openDB},e);WebSqlPouch$1.call(this,n,t)}function wrappedFetch(){for(var e={},t=new PouchPromise$1(function(t,n){e.resolve=t,e.reject=n}),n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.promise=t,PouchPromise$1.resolve().then(function(){return fetch.apply(null,n)}).then(function(t){e.resolve(t)}).catch(function(t){e.reject(t)}),e}function fetchRequest(e,t){var n,r,o,i=new Headers,a={method:e.method,credentials:"include",headers:i};return e.json&&(i.set("Accept","application/json"),i.set("Content-Type",e.headers["Content-Type"]||"application/json")),e.body&&e.processData&&"string"!=typeof e.body?a.body=JSON.stringify(e.body):"body"in e?a.body=e.body:a.body=null,Object.keys(e.headers).forEach(function(t){e.headers.hasOwnProperty(t)&&i.set(t,e.headers[t])}),n=wrappedFetch(e.url,a),e.timeout>0&&(r=setTimeout(function(){n.reject(new Error("Load timeout for resource: "+e.url))},e.timeout)),n.promise.then(function(t){return o={statusCode:t.status},e.timeout>0&&clearTimeout(r),o.statusCode>=200&&o.statusCode<300?e.binary?t.blob():t.text():t.json()}).then(function(e){o.statusCode>=200&&o.statusCode<300?t(null,o,e):(e.status=o.statusCode,t(e))}).catch(function(e){e||(e=new Error("canceled")),t(e)}),{abort:n.reject}}function xhRequest(e,t){var n,r,o=!1,i=function(){n.abort(),s()},a=function(){o=!0,n.abort(),s()},c={abort:i},s=function(){clearTimeout(r),c.abort=function(){},n&&(n.onprogress=void 0,n.upload&&(n.upload.onprogress=void 0),n.onreadystatechange=void 0,n=void 0)};n=e.xhr?new e.xhr:new XMLHttpRequest;try{n.open(e.method,e.url)}catch(e){return t(new Error(e.name||"Url is invalid"))}n.withCredentials=!("withCredentials"in e)||e.withCredentials,"GET"===e.method?delete e.headers["Content-Type"]:e.json&&(e.headers.Accept="application/json",e.headers["Content-Type"]=e.headers["Content-Type"]||"application/json",e.body&&e.processData&&"string"!=typeof e.body&&(e.body=JSON.stringify(e.body))),e.binary&&(n.responseType="arraybuffer"),"body"in e||(e.body=null);for(var u in e.headers)e.headers.hasOwnProperty(u)&&n.setRequestHeader(u,e.headers[u]);return e.timeout>0&&(r=setTimeout(a,e.timeout),n.onprogress=function(){clearTimeout(r),4!==n.readyState&&(r=setTimeout(a,e.timeout))},"undefined"!=typeof n.upload&&(n.upload.onprogress=n.onprogress)),n.onreadystatechange=function(){if(4===n.readyState){var r={statusCode:n.status};if(n.status>=200&&n.status<300){var i;i=e.binary?createBlob([n.response||""],{type:n.getResponseHeader("Content-Type")}):n.responseText,t(null,r,i)}else{var a={};if(o)a=new Error("ETIMEDOUT"),a.code="ETIMEDOUT";else if("string"==typeof n.response)try{a=JSON.parse(n.response)}catch(e){}a.status=n.status,t(a)}s()}},e.body&&e.body instanceof Blob?readAsArrayBuffer(e.body,function(e){n.send(e)}):n.send(e.body),c}function testXhr(){try{return new XMLHttpRequest,!0}catch(e){return!1}}function ajax$1(e,t){return hasXhr||e.xhr?xhRequest(e,t):fetchRequest(e,t)}function defaultBody(){return""}function ajaxCore$1(e,t){function n(t,n,r){if(!e.binary&&e.json&&"string"==typeof t)try{t=JSON.parse(t)}catch(e){return r(e)}Array.isArray(t)&&(t=t.map(function(e){return e.error||e.missing?generateErrorFromResponse(e):e})),e.binary&&res$2(t,n),r(null,t,n)}e=clone(e);var r={method:"GET",headers:{},json:!0,processData:!0,timeout:1e4,cache:!1};return e=$inject_Object_assign(r,e),e.json&&(e.binary||(e.headers.Accept="application/json"),e.headers["Content-Type"]=e.headers["Content-Type"]||"application/json"),e.binary&&(e.encoding=null,e.json=!1),e.processData||(e.json=!1),ajax$1(e,function(r,o,i){if(r)return t(generateErrorFromResponse(r));var a,c=o.headers&&o.headers["content-type"],s=i||defaultBody();if(!e.binary&&(e.json||!e.processData)&&"object"!=typeof s&&(/json/.test(c)||/^[\s]*\{/.test(s)&&/\}[\s]*$/.test(s)))try{s=JSON.parse(s.toString())}catch(e){}o.statusCode>=200&&o.statusCode<300?n(s,o,t):(a=generateErrorFromResponse(s),a.status=o.statusCode,t(a))})}function ajax(e,t){var n=navigator&&navigator.userAgent?navigator.userAgent.toLowerCase():"",r=n.indexOf("safari")!==-1&&n.indexOf("chrome")===-1,o=n.indexOf("msie")!==-1,i=n.indexOf("edge")!==-1,a=r||(o||i)&&"GET"===e.method,c=!("cache"in e)||e.cache,s=/^blob:/.test(e.url);if(!s&&(a||!c)){var u=e.url.indexOf("?")!==-1;e.url+=(u?"&":"?")+"_nonce="+Date.now()}return ajaxCore$1(e,t)}function pool(e,t){return new PouchPromise$1(function(n,r){function o(){l++,e[d++]().then(a,c)}function i(){++f===h?u?r(u):n():s()}function a(){l--,i()}function c(e){l--,u=u||e,i()}function s(){for(;l<t&&d<h;)o()}var u,l=0,d=0,f=0,h=e.length;s()})}function readAttachmentsAsBlobOrBuffer(e){var t=e.doc&&e.doc._attachments;t&&Object.keys(t).forEach(function(e){var n=t[e];n.data=b64ToBluffer(n.data,n.content_type)})}function encodeDocId(e){return/^_design/.test(e)?"_design/"+encodeURIComponent(e.slice(8)):/^_local/.test(e)?"_local/"+encodeURIComponent(e.slice(7)):encodeURIComponent(e)}function preprocessAttachments$2(e){return e._attachments&&Object.keys(e._attachments)?PouchPromise$1.all(Object.keys(e._attachments).map(function(t){var n=e._attachments[t];if(n.data&&"string"!=typeof n.data)return new PouchPromise$1(function(e){blobToBase64(n.data,e)}).then(function(e){n.data=e})})):PouchPromise$1.resolve()}function hasUrlPrefix(e){if(!e.prefix)return!1;var t=parseUri(e.prefix).protocol;return"http"===t||"https"===t}function getHost(e,t){if(hasUrlPrefix(t)){var n=t.name.substr(t.prefix.length);e=t.prefix+encodeURIComponent(n)}var r=parseUri(e);(r.user||r.password)&&(r.auth={username:r.user,password:r.password});var o=r.path.replace(/(^\/|\/$)/g,"").split("/");return r.db=o.pop(),r.db.indexOf("%")===-1&&(r.db=encodeURIComponent(r.db)),r.path=o.join("/"),r}function genDBUrl(e,t){return genUrl(e,e.db+"/"+t)}function genUrl(e,t){var n=e.path?"/":"";return e.protocol+"://"+e.host+(e.port?":"+e.port:"")+"/"+e.path+n+t}function paramsToStr(e){return"?"+Object.keys(e).map(function(t){return t+"="+encodeURIComponent(e[t])}).join("&")}function HttpPouch(e,t){function n(e,t,n){var r=e.ajax||{},o=$inject_Object_assign(clone(l),r,t),i=clone(l.headers||{});return o.headers=$inject_Object_assign(i,r.headers,t.headers||{}),log$1(o.method+" "+o.url),c._ajax(o,n)}function r(e,t){return new PouchPromise$1(function(r,o){n(e,t,function(e,t){return e?o(e):void r(t)})})}function o(e,t){return adapterFun(e,getArguments(function(e){i().then(function(){return t.apply(this,e)}).catch(function(t){var n=e.pop();n(t)})}))}function i(){if(e.skipSetup||e.skip_setup)return PouchPromise$1.resolve();if(p)return p;var t={method:"GET",url:u};return p=r({},t).catch(function(e){return e&&e.status&&404===e.status?(explainError(404,"PouchDB is just detecting if the remote exists."),r({},{method:"PUT",url:u})):PouchPromise$1.reject(e)}).catch(function(e){return!(!e||!e.status||412!==e.status)||PouchPromise$1.reject(e)}),p.catch(function(){p=null}),p}function a(e){return e.split("/").map(encodeURIComponent).join("/")}var c=this,s=getHost(e.name,e),u=genDBUrl(s,"");e=clone(e);var l=e.ajax||{};if(e.auth||s.auth){var d=e.auth||s.auth,f=d.username+":"+d.password,h=thisBtoa(unescape(encodeURIComponent(f)));l.headers=l.headers||{},l.headers.Authorization="Basic "+h}c._ajax=ajax;var p;nextTick(function(){t(null,c)}),c.type=function(){return"http"},c.id=o("id",function(e){n({},{method:"GET",url:genUrl(s,"")},function(t,n){var r=n&&n.uuid?n.uuid+s.db:genDBUrl(s,"");e(null,r)})}),c.request=o("request",function(e,t){e.url=genDBUrl(s,e.url),n({},e,t)}),c.compact=o("compact",function(e,t){"function"==typeof e&&(t=e,e={}),e=clone(e),n(e,{url:genDBUrl(s,"_compact"),method:"POST"},function(){function n(){c.info(function(r,o){o&&!o.compact_running?t(null,{ok:!0}):setTimeout(n,e.interval||200)})}n()})}),c.bulkGet=adapterFun("bulkGet",function(e,t){function r(t){var r={};e.revs&&(r.revs=!0),e.attachments&&(r.attachments=!0),e.latest&&(r.latest=!0),n(e,{url:genDBUrl(s,"_bulk_get"+paramsToStr(r)),method:"POST",body:{docs:e.docs}},t)}function o(){function n(e){return function(n,r){c[e]=r.results,++a===o&&t(null,{results:flatten(c)})}}for(var r=MAX_SIMULTANEOUS_REVS,o=Math.ceil(e.docs.length/r),a=0,c=new Array(o),s=0;s<o;s++){var u=pick(e,["revs","attachments","latest"]);u.ajax=l,u.docs=e.docs.slice(s*r,Math.min(e.docs.length,(s+1)*r)),bulkGet(i,u,n(s))}}var i=this,a=genUrl(s,""),c=supportsBulkGetMap[a];"boolean"!=typeof c?r(function(e,n){e?(supportsBulkGetMap[a]=!1,explainError(e.status,"PouchDB is just detecting if the remote supports the _bulk_get API."),o()):(supportsBulkGetMap[a]=!0,t(null,n))}):c?r(t):o()}),c._info=function(e){i().then(function(){n({},{method:"GET",url:genDBUrl(s,"")},function(t,n){return t?e(t):(n.host=genDBUrl(s,""),void e(null,n))})}).catch(e)},c.get=o("get",function(e,t,n){function o(e){function n(n){var i=o[n],c=encodeDocId(e._id)+"/"+a(n)+"?rev="+e._rev;return r(t,{method:"GET",url:genDBUrl(s,c),binary:!0}).then(function(e){return t.binary?e:new PouchPromise$1(function(t){blobToBase64(e,t)})}).then(function(e){delete i.stub,delete i.length,i.data=e})}var o=e._attachments,i=o&&Object.keys(o);if(o&&i.length){var c=i.map(function(e){return function(){return n(e)}});return pool(c,5)}}function i(e){return Array.isArray(e)?PouchPromise$1.all(e.map(function(e){if(e.ok)return o(e.ok)})):o(e)}"function"==typeof t&&(n=t,t={}),t=clone(t);var c={};t.revs&&(c.revs=!0),t.revs_info&&(c.revs_info=!0),t.latest&&(c.latest=!0),t.open_revs&&("all"!==t.open_revs&&(t.open_revs=JSON.stringify(t.open_revs)),c.open_revs=t.open_revs),t.rev&&(c.rev=t.rev),t.conflicts&&(c.conflicts=t.conflicts),e=encodeDocId(e);var u={method:"GET",url:genDBUrl(s,e+paramsToStr(c))};r(t,u).then(function(e){return PouchPromise$1.resolve().then(function(){if(t.attachments)return i(e)}).then(function(){n(null,e)})}).catch(n)}),c.remove=o("remove",function(e,t,r,o){var i;"string"==typeof t?(i={_id:e,_rev:t},"function"==typeof r&&(o=r,r={})):(i=e,"function"==typeof t?(o=t,r={}):(o=r,r=t));var a=i._rev||r.rev;n(r,{method:"DELETE",url:genDBUrl(s,encodeDocId(i._id))+"?rev="+a},o)}),c.getAttachment=o("getAttachment",function(e,t,r,o){"function"==typeof r&&(o=r,r={});var i=r.rev?"?rev="+r.rev:"",c=genDBUrl(s,encodeDocId(e))+"/"+a(t)+i;n(r,{method:"GET",url:c,binary:!0},o)}),c.removeAttachment=o("removeAttachment",function(e,t,r,o){var i=genDBUrl(s,encodeDocId(e)+"/"+a(t))+"?rev="+r;n({},{method:"DELETE",url:i},o)}),c.putAttachment=o("putAttachment",function(e,t,r,o,i,c){"function"==typeof i&&(c=i,i=o,o=r,r=null);var u=encodeDocId(e)+"/"+a(t),d=genDBUrl(s,u);if(r&&(d+="?rev="+r),"string"==typeof o){var f;try{f=thisAtob(o)}catch(e){return c(createError(BAD_ARG,"Attachment is not a valid base64 string"))}o=f?binStringToBluffer(f,i):""}var h={headers:{"Content-Type":i},method:"PUT",url:d,processData:!1,body:o,timeout:l.timeout||6e4};n({},h,c)}),c._bulkDocs=function(e,t,r){e.new_edits=t.new_edits,i().then(function(){return PouchPromise$1.all(e.docs.map(preprocessAttachments$2))}).then(function(){n(t,{method:"POST",url:genDBUrl(s,"_bulk_docs"),timeout:t.timeout,body:e},function(e,t){return e?r(e):(t.forEach(function(e){e.ok=!0}),void r(null,t))})}).catch(r)},c._put=function(e,t,r){i().then(function(){return preprocessAttachments$2(e)}).then(function(){n(t,{method:"PUT",url:genDBUrl(s,encodeDocId(e._id)),body:e},function(e,t){return e?r(e):void r(null,t)})}).catch(r)},c.allDocs=o("allDocs",function(e,t){"function"==typeof e&&(t=e,e={}),e=clone(e);var n,o={},i="GET";e.conflicts&&(o.conflicts=!0),e.descending&&(o.descending=!0),e.include_docs&&(o.include_docs=!0),e.attachments&&(o.attachments=!0),e.key&&(o.key=JSON.stringify(e.key)),e.start_key&&(e.startkey=e.start_key),e.startkey&&(o.startkey=JSON.stringify(e.startkey)),e.end_key&&(e.endkey=e.end_key),e.endkey&&(o.endkey=JSON.stringify(e.endkey)),"undefined"!=typeof e.inclusive_end&&(o.inclusive_end=!!e.inclusive_end),"undefined"!=typeof e.limit&&(o.limit=e.limit),"undefined"!=typeof e.skip&&(o.skip=e.skip);var a=paramsToStr(o);"undefined"!=typeof e.keys&&(i="POST",n={keys:e.keys}),r(e,{method:i,url:genDBUrl(s,"_all_docs"+a),body:n}).then(function(n){e.include_docs&&e.attachments&&e.binary&&n.rows.forEach(readAttachmentsAsBlobOrBuffer),t(null,n)}).catch(t)}),c._changes=function(e){var t="batch_size"in e?e.batch_size:CHANGES_BATCH_SIZE;e=clone(e),e.timeout="timeout"in e?e.timeout:"timeout"in l?l.timeout:3e4;var r,o=e.timeout?{timeout:e.timeout-5e3}:{},a="undefined"!=typeof e.limit&&e.limit;r="return_docs"in e?e.return_docs:!("returnDocs"in e)||e.returnDocs;var c=a;if(e.style&&(o.style=e.style),(e.include_docs||e.filter&&"function"==typeof e.filter)&&(o.include_docs=!0),e.attachments&&(o.attachments=!0),e.continuous&&(o.feed="longpoll"),e.conflicts&&(o.conflicts=!0),e.descending&&(o.descending=!0),"heartbeat"in e?e.heartbeat&&(o.heartbeat=e.heartbeat):e.continuous&&(o.heartbeat=1e4),e.filter&&"string"==typeof e.filter&&(o.filter=e.filter),e.view&&"string"==typeof e.view&&(o.filter="_view",o.view=e.view),e.query_params&&"object"==typeof e.query_params)for(var u in e.query_params)e.query_params.hasOwnProperty(u)&&(o[u]=e.query_params[u]);var d,f="GET";e.doc_ids&&(o.filter="_doc_ids",f="POST",d={doc_ids:e.doc_ids});var h,p,_=function(r,u){if(!e.aborted){o.since=r,"object"==typeof o.since&&(o.since=JSON.stringify(o.since)),e.descending?a&&(o.limit=c):o.limit=!a||c>t?t:c;var l={method:f,url:genDBUrl(s,"_changes"+paramsToStr(o)),timeout:e.timeout,body:d};p=r,e.aborted||i().then(function(){h=n(e,l,u)}).catch(u)}},v={results:[]},E=function(n,o){if(!e.aborted){var i=0;if(o&&o.results){i=o.results.length,v.last_seq=o.last_seq;var s={};s.query=e.query_params,o.results=o.results.filter(function(t){c--;var n=filterChange(e)(t);return n&&(e.include_docs&&e.attachments&&e.binary&&readAttachmentsAsBlobOrBuffer(t),r&&v.results.push(t),e.onChange(t)),n})}else if(n)return e.aborted=!0,void e.complete(n);o&&o.last_seq&&(p=o.last_seq);var u=a&&c<=0||o&&i<t||e.descending;(!e.continuous||a&&c<=0)&&u?e.complete(null,v):nextTick(function(){_(p,E)})}};return _(e.since||0,E),{cancel:function(){e.aborted=!0,h&&h.abort()}}},c.revsDiff=o("revsDiff",function(e,t,r){"function"==typeof t&&(r=t,t={}),n(t,{method:"POST",url:genDBUrl(s,"_revs_diff"),body:e},r)}),c._close=function(e){e()},c._destroy=function(e,t){n(e,{url:genDBUrl(s,""),method:"DELETE"},function(e,n){return e&&e.status&&404!==e.status?t(e):void t(null,n)})}}function QueryParseError(e){this.status=400,this.name="query_parse_error",this.message=e,this.error=!0;try{Error.captureStackTrace(this,QueryParseError)}catch(e){}}function NotFoundError(e){this.status=404,this.name="not_found",this.message=e,this.error=!0;try{Error.captureStackTrace(this,NotFoundError)}catch(e){}}function BuiltInError(e){this.status=500,this.name="invalid_value",this.message=e,this.error=!0;try{Error.captureStackTrace(this,BuiltInError)}catch(e){}}function promisedCallback(e,t){return t&&e.then(function(e){nextTick(function(){t(null,e)})},function(e){nextTick(function(){t(e)})}),e}function callbackify(e){return getArguments(function(t){var n=t.pop(),r=e.apply(this,t);return"function"==typeof n&&promisedCallback(r,n),r})}function fin(e,t){return e.then(function(e){return t().then(function(){return e})},function(e){return t().then(function(){throw e})})}function sequentialize(e,t){return function(){var n=arguments,r=this;return e.add(function(){return t.apply(r,n)})}}function uniq(e){var t=new ExportedSet(e),n=new Array(t.size),r=-1;return t.forEach(function(e){n[++r]=e}),n}function mapToKeysArray(e){var t=new Array(e.size),n=-1;return e.forEach(function(e,r){t[++n]=r}),t}function createBuiltInError(e){var t="builtin "+e+" function requires map values to be numbers or number arrays";return new BuiltInError(t)}function sum(e){for(var t=0,n=0,r=e.length;n<r;n++){var o=e[n];if("number"!=typeof o){if(!Array.isArray(o))throw createBuiltInError("_sum");t="number"==typeof t?[t]:t;for(var i=0,a=o.length;i<a;i++){var c=o[i];if("number"!=typeof c)throw createBuiltInError("_sum");"undefined"==typeof t[i]?t.push(c):t[i]+=c}}else"number"==typeof t?t+=o:t[0]+=o}return t}function evalFunctionWithEval(e,t){return scopedEval("return ("+e.replace(/;\s*$/,"")+");",{emit:t,sum:sum,log:log$2,isArray:isArray,toJSON:toJSON})}function pad(e,t,n){for(var r="",o=n-e.length;r.length<o;)r+=t;return r}function padLeft(e,t,n){var r=pad(e,t,n);return r+e}function collate(e,t){if(e===t)return 0;e=normalizeKey(e),t=normalizeKey(t);var n=collationIndex(e),r=collationIndex(t);if(n-r!==0)return n-r;switch(typeof e){case"number":return e-t;case"boolean":return e<t?-1:1;case"string":return stringCollate(e,t)}return Array.isArray(e)?arrayCollate(e,t):objectCollate(e,t)}function normalizeKey(e){switch(typeof e){case"undefined":return null;case"number":return e===1/0||e===-(1/0)||isNaN(e)?null:e;case"object":var t=e;if(Array.isArray(e)){var n=e.length;e=new Array(n);for(var r=0;r<n;r++)e[r]=normalizeKey(t[r])}else{if(e instanceof Date)return e.toJSON();if(null!==e){e={};for(var o in t)if(t.hasOwnProperty(o)){var i=t[o];"undefined"!=typeof i&&(e[o]=normalizeKey(i))}}}}return e}function indexify(e){if(null!==e)switch(typeof e){case"boolean":return e?1:0;case"number":return numToIndexableString(e);case"string":return e.replace(/\u0002/g,"").replace(/\u0001/g,"").replace(/\u0000/g,"");case"object":var t=Array.isArray(e),n=t?e:Object.keys(e),r=-1,o=n.length,i="";if(t)for(;++r<o;)i+=toIndexableString(n[r]);else for(;++r<o;){var a=n[r];i+=toIndexableString(a)+toIndexableString(e[a])}return i}return""}function toIndexableString(e){var t="\0";return e=normalizeKey(e),collationIndex(e)+SEP+indexify(e)+t}function parseNumber(e,t){var n,r=t,o="1"===e[t];if(o)n=0,t++;else{var i="0"===e[t];t++;var a="",c=e.substring(t,t+MAGNITUDE_DIGITS),s=parseInt(c,10)+MIN_MAGNITUDE;for(i&&(s=-s),t+=MAGNITUDE_DIGITS;;){var u=e[t];if("\0"===u)break;a+=u,t++}a=a.split("."),n=1===a.length?parseInt(a,10):parseFloat(a[0]+"."+a[1]),i&&(n-=10),0!==s&&(n=parseFloat(n+"e"+s))}return{num:n,length:t-r}}function pop(e,t){var n=e.pop();if(t.length){var r=t[t.length-1];n===r.element&&(t.pop(),r=t[t.length-1]);var o=r.element,i=r.index;if(Array.isArray(o))o.push(n);else if(i===e.length-2){var a=e.pop();o[a]=n}else e.push(n)}}function parseIndexableString(e){for(var t=[],n=[],r=0;;){var o=e[r++];if("\0"!==o)switch(o){case"1":t.push(null);break;case"2":t.push("1"===e[r]),r++;break;case"3":var i=parseNumber(e,r);t.push(i.num),r+=i.length;break;case"4":for(var a="";;){var c=e[r];if("\0"===c)break;a+=c,r++}a=a.replace(/\u0001\u0001/g,"\0").replace(/\u0001\u0002/g,"").replace(/\u0002\u0002/g,""),t.push(a);break;case"5":var s={element:[],index:t.length};t.push(s.element),n.push(s);break;case"6":var u={element:{},index:t.length};t.push(u.element),n.push(u);break;default:throw new Error("bad collationIndex or unexpectedly reached end of input: "+o)}else{if(1===t.length)return t.pop();pop(t,n)}}}function arrayCollate(e,t){for(var n=Math.min(e.length,t.length),r=0;r<n;r++){var o=collate(e[r],t[r]);if(0!==o)return o}return e.length===t.length?0:e.length>t.length?1:-1}function stringCollate(e,t){return e===t?0:e>t?1:-1}function objectCollate(e,t){for(var n=Object.keys(e),r=Object.keys(t),o=Math.min(n.length,r.length),i=0;i<o;i++){var a=collate(n[i],r[i]);if(0!==a)return a;if(a=collate(e[n[i]],t[r[i]]),0!==a)return a}return n.length===r.length?0:n.length>r.length?1:-1}function collationIndex(e){var t=["boolean","number","string","object"],n=t.indexOf(typeof e);return~n?null===e?1:Array.isArray(e)?5:n<3?n+2:n+3:Array.isArray(e)?5:void 0}function numToIndexableString(e){if(0===e)return"1";var t=e.toExponential().split(/e\+?/),n=parseInt(t[1],10),r=e<0,o=r?"0":"2",i=(r?-n:n)-MIN_MAGNITUDE,a=padLeft(i.toString(),"0",MAGNITUDE_DIGITS);o+=SEP+a;var c=Math.abs(parseFloat(t[0]));r&&(c=10-c);var s=c.toFixed(20);return s=s.replace(/\.?0+$/,""),o+=SEP+s}function TaskQueue$2(){this.promise=new PouchPromise$1(function(e){e()})}function createView(e,t,n,r,o,i){var a,c=n.toString()+(r&&r.toString())+"undefined";if(!o&&(a=e._cachedViews=e._cachedViews||{},a[c]))return a[c];var s=e.info().then(function(s){function u(e){e.views=e.views||{};var n=t;n.indexOf("/")===-1&&(n=t+"/"+t);var r=e.views[n]=e.views[n]||{};if(!r[l])return r[l]=!0,e}var l=s.db_name+"-mrview-"+(o?"temp":stringMd5(c));return upsert(e,"_local/"+i,u).then(function(){return e.registerDependentDatabase(l).then(function(t){var o=t.db;o.auto_compaction=!0;var i={name:l,db:o,sourceDB:e,adapter:e.adapter,mapFun:n,reduceFun:r};return i.db.get("_local/lastSeq").catch(function(e){if(404!==e.status)throw e}).then(function(e){return i.seq=e?e.seq:0,a&&i.db.once("destroyed",function(){delete a[c]}),i})})})});return a&&(a[c]=s),s}function parseViewName(e){return e.indexOf("/")===-1?[e,e]:e.split("/")}function isGenOne(e){return 1===e.length&&/^1-/.test(e[0].rev)}function emitError(e,t){try{e.emit("error",t)}catch(e){guardedConsole("error","The user's map/reduce function threw an uncaught error.\nYou can debug this error by doing:\nmyDatabase.on('error', function (err) { debugger; });\nPlease double-check your map/reduce function."),guardedConsole("error",t)}}function createAbstractMapReduce(e,t,n,r){function o(e,t,n){try{t(n)}catch(t){emitError(e,t)}}function i(e,t,n,r,o){try{return{output:t(n,r,o)}}catch(t){return emitError(e,t),{error:t}}}function a(e,t){var n=collate(e.key,t.key);return 0!==n?n:collate(e.value,t.value)}function c(e,t,n){return n=n||0,"number"==typeof t?e.slice(n,t+n):n>0?e.slice(n):e}function s(e){var t=e.value,n=t&&"object"==typeof t&&t._id||e.id;return n}function u(e){e.rows.forEach(function(e){var t=e.doc&&e.doc._attachments;t&&Object.keys(t).forEach(function(e){var n=t[e];t[e].data=b64ToBluffer(n.data,n.content_type)})})}function l(e){return function(t){return e.include_docs&&e.attachments&&e.binary&&u(t),t}}function d(e,t,n,r){var o=t[e];"undefined"!=typeof o&&(r&&(o=encodeURIComponent(JSON.stringify(o))),n.push(e+"="+o))}function f(e){if("undefined"!=typeof e){var t=Number(e);return isNaN(t)||t!==parseInt(e,10)?e:t}}function h(e){return e.group_level=f(e.group_level),e.limit=f(e.limit),e.skip=f(e.skip),e}function p(e){if(e){if("number"!=typeof e)return new QueryParseError('Invalid value for integer: "'+e+'"');if(e<0)return new QueryParseError('Invalid value for positive integer: "'+e+'"')}}function _(e,t){var n=e.descending?"endkey":"startkey",r=e.descending?"startkey":"endkey";if("undefined"!=typeof e[n]&&"undefined"!=typeof e[r]&&collate(e[n],e[r])>0)throw new QueryParseError("No rows can match your key range, reverse your start_key and end_key or set {descending : true}");if(t.reduce&&e.reduce!==!1){if(e.include_docs)throw new QueryParseError("{include_docs:true} is invalid for reduce");if(e.keys&&e.keys.length>1&&!e.group&&!e.group_level)throw new QueryParseError("Multi-key fetches for reduce views must use {group: true}")}["group_level","limit","skip"].forEach(function(t){var n=p(e[t]);if(n)throw n})}function v(e,t,n){var r,o=[],i="GET";if(d("reduce",n,o),d("include_docs",n,o),d("attachments",n,o),d("limit",n,o),d("descending",n,o),d("group",n,o),d("group_level",n,o),d("skip",n,o),d("stale",n,o),d("conflicts",n,o),d("startkey",n,o,!0),d("start_key",n,o,!0),d("endkey",n,o,!0),d("end_key",n,o,!0),d("inclusive_end",n,o),d("key",n,o,!0),o=o.join("&"),o=""===o?"":"?"+o,"undefined"!=typeof n.keys){var a=2e3,c="keys="+encodeURIComponent(JSON.stringify(n.keys));c.length+o.length+1<=a?o+=("?"===o[0]?"&":"?")+c:(i="POST","string"==typeof t?r={keys:n.keys}:t.keys=n.keys)}if("string"==typeof t){var s=parseViewName(t);return e.request({method:i,url:"_design/"+s[0]+"/_view/"+s[1]+o,body:r}).then(l(n))}return r=r||{},Object.keys(t).forEach(function(e){Array.isArray(t[e])?r[e]=t[e]:r[e]=t[e].toString()}),e.request({method:"POST",url:"_temp_view"+o,body:r}).then(l(n))}function E(e,t,n){return new PouchPromise$1(function(r,o){e._query(t,n,function(e,t){return e?o(e):void r(t)})})}function g(e){return new PouchPromise$1(function(t,n){e._viewCleanup(function(e,r){return e?n(e):void t(r)})})}function m(e){return function(t){if(404===t.status)return e;throw t}}function y(e,t,n){function r(){return isGenOne(l)?PouchPromise$1.resolve(c):t.db.get(a).catch(m(c))}function o(e){return e.keys.length?t.db.allDocs({keys:e.keys,include_docs:!0}):PouchPromise$1.resolve({rows:[]})}function i(e,t){for(var n=[],r=new ExportedSet,o=0,i=t.rows.length;o<i;o++){var a=t.rows[o],c=a.doc;if(c&&(n.push(c),r.add(c._id),c._deleted=!u.has(c._id),!c._deleted)){var s=u.get(c._id);"value"in s&&(c.value=s.value)}}var l=mapToKeysArray(u);return l.forEach(function(e){if(!r.has(e)){var t={_id:e},o=u.get(e);"value"in o&&(t.value=o.value),n.push(t)}}),e.keys=uniq(l.concat(e.keys)),n.push(e),n}var a="_local/doc_"+e,c={_id:a,keys:[]},s=n.get(e),u=s[0],l=s[1];return r().then(function(e){return o(e).then(function(t){return i(e,t)})})}function S(e,t,n){var r="_local/lastSeq";return e.db.get(r).catch(m({_id:r,seq:0})).then(function(r){var o=mapToKeysArray(t);return PouchPromise$1.all(o.map(function(n){return y(n,e,t)})).then(function(t){var o=flatten(t);return r.seq=n,o.push(r),e.db.bulkDocs({docs:o})})})}function T(e){var t="string"==typeof e?e:e.name,n=persistentQueues[t];return n||(n=persistentQueues[t]=new TaskQueue$2),n}function O(e){return sequentialize(T(e),function(){return b(e)})()}function b(e){function n(e,t){var n={id:d._id,key:normalizeKey(e)};"undefined"!=typeof t&&null!==t&&(n.value=normalizeKey(t)),l.push(n)}function r(t,n){return function(){return S(e,t,n)}}function i(){return e.sourceDB.changes({conflicts:!0,include_docs:!0,style:"all_docs",since:h,limit:CHANGES_BATCH_SIZE$1}).then(c)}function c(e){var t=e.results;if(t.length){var n=s(t);if(p.add(r(n,h)),!(t.length<CHANGES_BATCH_SIZE$1))return i()}}function s(t){for(var n=new ExportedMap,r=0,i=t.length;r<i;r++){var c=t[r];if("_"!==c.doc._id[0]){l=[],d=c.doc,d._deleted||o(e.sourceDB,f,d),l.sort(a);var s=u(l);n.set(c.doc._id,[s,c.changes])}h=c.seq}return n}function u(e){for(var t,n=new ExportedMap,r=0,o=e.length;r<o;r++){var i=e[r],a=[i.key,i.id];r>0&&0===collate(i.key,t)&&a.push(r),n.set(toIndexableString(a),i),t=i.key}return n}var l,d,f=t(e.mapFun,n),h=e.seq||0,p=new TaskQueue$2;return i().then(function(){return p.finish()}).then(function(){e.seq=h})}function A(e,t,r){0===r.group_level&&delete r.group_level;var o=r.group||r.group_level,a=n(e.reduceFun),s=[],u=isNaN(r.group_level)?Number.POSITIVE_INFINITY:r.group_level;t.forEach(function(e){var t=s[s.length-1],n=o?e.key:null;return o&&Array.isArray(n)&&(n=n.slice(0,u)),t&&0===collate(t.groupKey,n)?(t.keys.push([e.key,e.id]),void t.values.push(e.value)):void s.push({keys:[[e.key,e.id]],values:[e.value],groupKey:n})}),t=[];for(var l=0,d=s.length;l<d;l++){var f=s[l],h=i(e.sourceDB,a,f.keys,f.values,!1);if(h.error&&h.error instanceof BuiltInError)throw h.error;t.push({value:h.error?null:h.output,key:f.groupKey})}return{rows:c(t,r.limit,r.skip)}}function R(e,t){return sequentialize(T(e),function(){return D(e,t)})()}function D(e,t){function n(t){return t.include_docs=!0,e.db.allDocs(t).then(function(e){return o=e.total_rows,e.rows.map(function(e){if("value"in e.doc&&"object"==typeof e.doc.value&&null!==e.doc.value){var t=Object.keys(e.doc.value).sort(),n=["id","key","value"];if(!(t<n||t>n))return e.doc.value}var r=parseIndexableString(e.doc._id);return{key:r[0],id:r[1],value:"value"in e.doc?e.doc.value:null}})})}function r(n){var r;if(r=i?A(e,n,t):{total_rows:o,offset:a,rows:n},t.include_docs){var c=uniq(n.map(s));return e.sourceDB.allDocs({keys:c,include_docs:!0,conflicts:t.conflicts,attachments:t.attachments,binary:t.binary}).then(function(e){var t=new ExportedMap;return e.rows.forEach(function(e){t.set(e.id,e.doc)}),n.forEach(function(e){var n=s(e),r=t.get(n);r&&(e.doc=r)}),r})}return r}var o,i=e.reduceFun&&t.reduce!==!1,a=t.skip||0;if("undefined"==typeof t.keys||t.keys.length||(t.limit=0,delete t.keys),"undefined"!=typeof t.keys){var c=t.keys,u=c.map(function(e){var t={startkey:toIndexableString([e]),endkey:toIndexableString([e,{}])};return n(t)});return PouchPromise$1.all(u).then(flatten).then(r)}var l={descending:t.descending};if(t.start_key&&(t.startkey=t.start_key),t.end_key&&(t.endkey=t.end_key),"undefined"!=typeof t.startkey&&(l.startkey=toIndexableString(t.descending?[t.startkey,{}]:[t.startkey])),"undefined"!=typeof t.endkey){var d=t.inclusive_end!==!1;t.descending&&(d=!d),l.endkey=toIndexableString(d?[t.endkey,{}]:[t.endkey])}if("undefined"!=typeof t.key){var f=toIndexableString([t.key]),h=toIndexableString([t.key,{}]);l.descending?(l.endkey=f,l.startkey=h):(l.startkey=f,l.endkey=h)}return i||("number"==typeof t.limit&&(l.limit=t.limit),l.skip=a),n(l).then(r)}function w(e){return e.request({method:"POST",url:"_view_cleanup"})}function C(t){return t.get("_local/"+e).then(function(e){var n=new ExportedMap;Object.keys(e.views).forEach(function(e){var t=parseViewName(e),r="_design/"+t[0],o=t[1],i=n.get(r);i||(i=new ExportedSet,n.set(r,i)),i.add(o)});var r={keys:mapToKeysArray(n),include_docs:!0};return t.allDocs(r).then(function(r){var o={};r.rows.forEach(function(t){var r=t.key.substring(8);n.get(t.key).forEach(function(n){var i=r+"/"+n;e.views[i]||(i=n);var a=Object.keys(e.views[i]),c=t.doc&&t.doc.views&&t.doc.views[n];a.forEach(function(e){o[e]=o[e]||c})})});var i=Object.keys(o).filter(function(e){return!o[e]}),a=i.map(function(e){return sequentialize(T(e),function(){return new t.constructor(e,t.__opts).destroy()})()});return PouchPromise$1.all(a).then(function(){return{ok:!0}})})},m({ok:!0}))}function I(t,n,o){if("http"===t.type())return v(t,n,o);if("function"==typeof t._query)return E(t,n,o);if("string"!=typeof n)return _(o,n),tempViewQueue.add(function(){var r=createView(t,"temp_view/temp_view",n.map,n.reduce,!0,e);
return r.then(function(e){return fin(O(e).then(function(){return R(e,o)}),function(){return e.db.destroy()})})}),tempViewQueue.finish();var i=n,a=parseViewName(i),c=a[0],s=a[1];return t.get("_design/"+c).then(function(n){var a=n.views&&n.views[s];if(!a)throw new NotFoundError("ddoc "+n._id+" has no view named "+s);r(n,s),_(o,a);var c=createView(t,i,a.map,a.reduce,!1,e);return c.then(function(e){return"ok"===o.stale||"update_after"===o.stale?("update_after"===o.stale&&nextTick(function(){O(e)}),R(e,o)):O(e).then(function(){return R(e,o)})})})}function B(e,t,n){var r=this;"function"==typeof t&&(n=t,t={}),t=t?h(t):{},"function"==typeof e&&(e={map:e});var o=PouchPromise$1.resolve().then(function(){return I(r,e,t)});return promisedCallback(o,n),o}var k=callbackify(function(){var e=this;return"http"===e.type()?w(e):"function"==typeof e._viewCleanup?g(e):C(e)});return{query:B,viewCleanup:k}}function mapper(e,t){if("function"==typeof e&&2===e.length){var n=e;return function(e){return n(e,t)}}return evalFunctionWithEval(e.toString(),t)}function reducer(e){return builtInReduce[e]?builtInReduce[e]:evalFunctionWithEval(e.toString())}function ddocValidator(e,t){var n=e.views&&e.views[t];if("string"!=typeof n.map)throw new NotFoundError("ddoc "+e._id+" has no string view named "+t+", instead found object of type: "+typeof n.map)}function query(e,t,n){return abstract.query.call(this,e,t,n)}function viewCleanup(e){return abstract.viewCleanup.call(this,e)}function isGenOne$1(e){return/^1-/.test(e)}function fileHasChanged(e,t,n){return!e._attachments||!e._attachments[n]||e._attachments[n].digest!==t._attachments[n].digest}function getDocAttachments(e,t){var n=Object.keys(t._attachments);return PouchPromise$1.all(n.map(function(n){return e.getAttachment(t._id,n,{rev:t._rev})}))}function getDocAttachmentsFromTargetOrSource(e,t,n){var r="http"===t.type()&&"http"!==e.type(),o=Object.keys(n._attachments);return r?e.get(n._id).then(function(r){return PouchPromise$1.all(o.map(function(o){return fileHasChanged(r,n,o)?t.getAttachment(n._id,o):e.getAttachment(r._id,o)}))}).catch(function(e){if(404!==e.status)throw e;return getDocAttachments(t,n)}):getDocAttachments(t,n)}function createBulkGetOpts(e){var t=[];return Object.keys(e).forEach(function(n){var r=e[n].missing;r.forEach(function(e){t.push({id:n,rev:e})})}),{docs:t,revs:!0,latest:!0}}function getDocs(e,t,n,r){function o(){var o=createBulkGetOpts(n);if(o.docs.length)return e.bulkGet(o).then(function(n){if(r.cancelled)throw new Error("cancelled");return PouchPromise$1.all(n.results.map(function(n){return PouchPromise$1.all(n.docs.map(function(n){var r=n.ok;return n.error&&(d=!1),r&&r._attachments?getDocAttachmentsFromTargetOrSource(t,e,r).then(function(e){var t=Object.keys(r._attachments);return e.forEach(function(e,n){var o=r._attachments[t[n]];delete o.stub,delete o.length,o.data=e}),r}):r}))})).then(function(e){l=l.concat(flatten(e).filter(Boolean))})})}function i(e){return e._attachments&&Object.keys(e._attachments).length>0}function a(e){return e._conflicts&&e._conflicts.length>0}function c(t){return e.allDocs({keys:t,include_docs:!0,conflicts:!0}).then(function(e){if(r.cancelled)throw new Error("cancelled");e.rows.forEach(function(e){e.deleted||!e.doc||!isGenOne$1(e.value.rev)||i(e.doc)||a(e.doc)||(e.doc._conflicts&&delete e.doc._conflicts,l.push(e.doc),delete n[e.id])})})}function s(){var e=Object.keys(n).filter(function(e){var t=n[e].missing;return 1===t.length&&isGenOne$1(t[0])});if(e.length>0)return c(e)}function u(){return{ok:d,docs:l}}n=clone(n);var l=[],d=!0;return PouchPromise$1.resolve().then(s).then(o).then(u)}function updateCheckpoint(e,t,n,r,o){return e.get(t).catch(function(n){if(404===n.status)return"http"===e.type()&&explainError(404,"PouchDB is just checking if a remote checkpoint exists."),{session_id:r,_id:t,history:[],replicator:REPLICATOR,version:CHECKPOINT_VERSION};throw n}).then(function(i){if(!o.cancelled&&i.last_seq!==n)return i.history=(i.history||[]).filter(function(e){return e.session_id!==r}),i.history.unshift({last_seq:n,session_id:r}),i.history=i.history.slice(0,CHECKPOINT_HISTORY_SIZE),i.version=CHECKPOINT_VERSION,i.replicator=REPLICATOR,i.session_id=r,i.last_seq=n,e.put(i).catch(function(i){if(409===i.status)return updateCheckpoint(e,t,n,r,o);throw i})})}function Checkpointer(e,t,n,r){this.src=e,this.target=t,this.id=n,this.returnValue=r}function compareReplicationLogs(e,t){return e.session_id===t.session_id?{last_seq:e.last_seq,history:e.history}:compareReplicationHistory(e.history,t.history)}function compareReplicationHistory(e,t){var n=e[0],r=e.slice(1),o=t[0],i=t.slice(1);if(!n||0===t.length)return{last_seq:LOWEST_SEQ,history:[]};var a=n.session_id;if(hasSessionId(a,t))return{last_seq:n.last_seq,history:e};var c=o.session_id;return hasSessionId(c,r)?{last_seq:o.last_seq,history:i}:compareReplicationHistory(r,i)}function hasSessionId(e,t){var n=t[0],r=t.slice(1);return!(!e||0===t.length)&&(e===n.session_id||hasSessionId(e,r))}function isForbiddenError(e){return"number"==typeof e.status&&4===Math.floor(e.status/100)}function backOff(e,t,n,r){if(e.retry===!1)return t.emit("error",n),void t.removeAllListeners();if("function"!=typeof e.back_off_function&&(e.back_off_function=defaultBackOff),t.emit("requestError",n),"active"===t.state||"pending"===t.state){t.emit("paused",n),t.state="stopped";var o=function(){e.current_back_off=STARTING_BACK_OFF},i=function(){t.removeListener("active",o)};t.once("paused",i),t.once("active",o)}e.current_back_off=e.current_back_off||STARTING_BACK_OFF,e.current_back_off=e.back_off_function(e.current_back_off),setTimeout(r,e.current_back_off)}function sortObjectPropertiesByKey(e){return Object.keys(e).sort(collate).reduce(function(t,n){return t[n]=e[n],t},{})}function generateReplicationId(e,t,n){var r=n.doc_ids?n.doc_ids.sort(collate):"",o=n.filter?n.filter.toString():"",i="",a="";return n.filter&&n.query_params&&(i=JSON.stringify(sortObjectPropertiesByKey(n.query_params))),n.filter&&"_view"===n.filter&&(a=n.view.toString()),PouchPromise$1.all([e.id(),t.id()]).then(function(e){var t=e[0]+e[1]+o+a+i+r;return new PouchPromise$1(function(e){binaryMd5(t,e)})}).then(function(e){return e=e.replace(/\//g,".").replace(/\+/g,"_"),"_local/"+e})}function replicate(e,t,n,r,o){function i(){return T?PouchPromise$1.resolve():generateReplicationId(e,t,n).then(function(n){S=n,T=new Checkpointer(e,t,S,r)})}function a(){if(N=[],0!==y.docs.length){var e=y.docs,i={timeout:n.timeout};return t.bulkDocs({docs:e,new_edits:!1},i).then(function(t){if(r.cancelled)throw h(),new Error("cancelled");var n=Object.create(null);t.forEach(function(e){e.error&&(n[e.id]=e)});var i=Object.keys(n).length;o.doc_write_failures+=i,o.docs_written+=e.length-i,e.forEach(function(e){var t=n[e._id];if(t){if(o.errors.push(t),"unauthorized"!==t.name&&"forbidden"!==t.name)throw t;r.emit("denied",clone(t))}else N.push(e)})},function(t){throw o.doc_write_failures+=e.length,t})}}function c(){if(y.error)throw new Error("There was a problem getting docs.");o.last_seq=w=y.seq;var e=clone(o);return N.length&&(e.docs=N,r.emit("change",e)),A=!0,T.writeCheckpoint(y.seq,P).then(function(){if(A=!1,r.cancelled)throw h(),new Error("cancelled");y=void 0,E()}).catch(function(e){throw m(e),e})}function s(){var e={};return y.changes.forEach(function(t){"_user/"!==t.id&&(e[t.id]=t.changes.map(function(e){return e.rev}))}),t.revsDiff(e).then(function(e){if(r.cancelled)throw h(),new Error("cancelled");y.diffs=e})}function u(){return getDocs(e,t,y.diffs,r).then(function(e){y.error=!e.ok,e.docs.forEach(function(e){delete y.diffs[e._id],o.docs_read++,y.docs.push(e)})})}function l(){if(!r.cancelled&&!y){if(0===O.length)return void d(!0);y=O.shift(),s().then(u).then(a).then(c).then(l).catch(function(e){f("batch processing terminated with error",e)})}}function d(e){return 0===b.changes.length?void(0!==O.length||y||((C&&x.live||R)&&(r.state="pending",r.emit("paused")),R&&h())):void((e||R||b.changes.length>=I)&&(O.push(b),b={seq:0,changes:[],docs:[]},"pending"!==r.state&&"stopped"!==r.state||(r.state="active",r.emit("active")),l()))}function f(e,t){D||(t.message||(t.message=e),o.ok=!1,o.status="aborting",O=[],b={seq:0,changes:[],docs:[]},h(t))}function h(i){D||r.cancelled&&(o.status="cancelled",A)||(o.status=o.status||"complete",o.end_time=new Date,o.last_seq=w,D=!0,i?(i.result=o,"unauthorized"===i.name||"forbidden"===i.name?(r.emit("error",i),r.removeAllListeners()):backOff(n,r,i,function(){replicate(e,t,n,r)})):(r.emit("complete",o),r.removeAllListeners()))}function p(e){if(r.cancelled)return h();var t=filterChange(n)(e);t&&(b.seq=e.seq,b.changes.push(e),d(0===O.length&&x.live))}function _(e){if(k=!1,r.cancelled)return h();if(e.results.length>0)x.since=e.last_seq,E(),d(!0);else{var t=function(){C?(x.live=!0,E()):R=!0,d(!0)};y||0!==e.results.length?t():(A=!0,T.writeCheckpoint(e.last_seq,P).then(function(){A=!1,o.last_seq=w=e.last_seq,t()}).catch(m))}}function v(e){return k=!1,r.cancelled?h():void f("changes rejected",e)}function E(){function t(){i.cancel()}function o(){r.removeListener("cancel",t)}if(!k&&!R&&O.length<B){k=!0,r._changes&&(r.removeListener("cancel",r._abortChanges),r._changes.cancel()),r.once("cancel",t);var i=e.changes(x).on("change",p);i.then(o,o),i.then(_).catch(v),n.retry&&(r._changes=i,r._abortChanges=t)}}function g(){i().then(function(){return r.cancelled?void h():T.getCheckpoint().then(function(e){w=e,x={since:w,limit:I,batch_size:I,style:"all_docs",doc_ids:q,return_docs:!0},n.filter&&("string"!=typeof n.filter?x.include_docs=!0:x.filter=n.filter),"heartbeat"in n&&(x.heartbeat=n.heartbeat),"timeout"in n&&(x.timeout=n.timeout),n.query_params&&(x.query_params=n.query_params),n.view&&(x.view=n.view),E()})}).catch(function(e){f("getCheckpoint rejected with ",e)})}function m(e){A=!1,f("writeCheckpoint completed with error",e)}var y,S,T,O=[],b={seq:0,changes:[],docs:[]},A=!1,R=!1,D=!1,w=0,C=n.continuous||n.live||!1,I=n.batch_size||100,B=n.batches_limit||10,k=!1,q=n.doc_ids,N=[],P=uuid();o=o||{ok:!0,start_time:new Date,docs_read:0,docs_written:0,doc_write_failures:0,errors:[]};var x={};return r.ready(e,t),r.cancelled?void h():(r._addedListeners||(r.once("cancel",h),"function"==typeof n.complete&&(r.once("error",n.complete),r.once("complete",function(e){n.complete(null,e)})),r._addedListeners=!0),void("undefined"==typeof n.since?g():i().then(function(){return A=!0,T.writeCheckpoint(n.since,P)}).then(function(){return A=!1,r.cancelled?void h():(w=n.since,void g())}).catch(m)))}function Replication(){events.EventEmitter.call(this),this.cancelled=!1,this.state="pending";var e=this,t=new PouchPromise$1(function(t,n){e.once("complete",t),e.once("error",n)});e.then=function(e,n){return t.then(e,n)},e.catch=function(e){return t.catch(e)},e.catch(function(){})}function toPouch(e,t){var n=t.PouchConstructor;return"string"==typeof e?new n(e,t):e}function replicateWrapper(e,t,n,r){if("function"==typeof n&&(r=n,n={}),"undefined"==typeof n&&(n={}),n.doc_ids&&!Array.isArray(n.doc_ids))throw createError(BAD_REQUEST,"`doc_ids` filter parameter is not a list.");n.complete=r,n=clone(n),n.continuous=n.continuous||n.live,n.retry="retry"in n&&n.retry,n.PouchConstructor=n.PouchConstructor||this;var o=new Replication(n),i=toPouch(e,n),a=toPouch(t,n);return replicate(i,a,n,o),o}function sync$1(e,t,n,r){return"function"==typeof n&&(r=n,n={}),"undefined"==typeof n&&(n={}),n=clone(n),n.PouchConstructor=n.PouchConstructor||this,e=toPouch(e,n),t=toPouch(t,n),new Sync(e,t,n,r)}function Sync(e,t,n,r){function o(e){p.emit("change",{direction:"pull",change:e})}function i(e){p.emit("change",{direction:"push",change:e})}function a(e){p.emit("denied",{direction:"push",doc:e})}function c(e){p.emit("denied",{direction:"pull",doc:e})}function s(){p.pushPaused=!0,p.pullPaused&&p.emit("paused")}function u(){p.pullPaused=!0,p.pushPaused&&p.emit("paused")}function l(){p.pushPaused=!1,p.pullPaused&&p.emit("active",{direction:"push"})}function d(){p.pullPaused=!1,p.pushPaused&&p.emit("active",{direction:"pull"})}function f(e){return function(t,n){var r="change"===t&&(n===o||n===i),f="denied"===t&&(n===c||n===a),h="paused"===t&&(n===u||n===s),_="active"===t&&(n===d||n===l);(r||f||h||_)&&(t in E||(E[t]={}),E[t][e]=!0,2===Object.keys(E[t]).length&&p.removeAllListeners(t))}}function h(e,t,n){e.listeners(t).indexOf(n)==-1&&e.on(t,n)}var p=this;this.canceled=!1;var _=n.push?$inject_Object_assign({},n,n.push):n,v=n.pull?$inject_Object_assign({},n,n.pull):n;this.push=replicateWrapper(e,t,_),this.pull=replicateWrapper(t,e,v),this.pushPaused=!0,this.pullPaused=!0;var E={};n.live&&(this.push.on("complete",p.pull.cancel.bind(p.pull)),this.pull.on("complete",p.push.cancel.bind(p.push))),this.on("newListener",function(e){"change"===e?(h(p.pull,"change",o),h(p.push,"change",i)):"denied"===e?(h(p.pull,"denied",c),h(p.push,"denied",a)):"active"===e?(h(p.pull,"active",d),h(p.push,"active",l)):"paused"===e&&(h(p.pull,"paused",u),h(p.push,"paused",s))}),this.on("removeListener",function(e){"change"===e?(p.pull.removeListener("change",o),p.push.removeListener("change",i)):"denied"===e?(p.pull.removeListener("denied",c),p.push.removeListener("denied",a)):"active"===e?(p.pull.removeListener("active",d),p.push.removeListener("active",l)):"paused"===e&&(p.pull.removeListener("paused",u),p.push.removeListener("paused",s))}),this.pull.on("removeListener",f("pull")),this.push.on("removeListener",f("push"));var g=PouchPromise$1.all([this.push,this.pull]).then(function(e){var t={push:e[0],pull:e[1]};return p.emit("complete",t),r&&r(null,t),p.removeAllListeners(),t},function(e){if(p.cancel(),r?r(e):p.emit("error",e),p.removeAllListeners(),r)throw e});this.then=function(e,t){return g.then(e,t)},this.catch=function(e){return g.catch(e)}}function replication(e){e.replicate=replicateWrapper,e.sync=sync$1,Object.defineProperty(e.prototype,"replicate",{get:function(){var e=this;return{from:function(t,n,r){return e.constructor.replicate(t,e,n,r)},to:function(t,n,r){return e.constructor.replicate(e,t,n,r)}}}}),e.prototype.sync=function(e,t,n){return this.constructor.sync(this,e,t,n)}}var lie=_interopDefault(require("lie")),getArguments=_interopDefault(require("argsarray")),debug=_interopDefault(require("debug")),events=require("events"),inherits=_interopDefault(require("inherits")),nextTick=_interopDefault(require("immediate")),scopedEval=_interopDefault(require("scope-eval")),Md5=_interopDefault(require("spark-md5")),vuvuzela=_interopDefault(require("vuvuzela")),PouchPromise$1="function"==typeof Promise?Promise:lie,funcToString=Function.prototype.toString,objectCtorString=funcToString.call(Object),log=debug("pouchdb:api");Map$1.prototype.get=function(e){var t=mangle(e);return this._store[t]},Map$1.prototype.set=function(e,t){var n=mangle(e);return this._store[n]=t,!0},Map$1.prototype.has=function(e){var t=mangle(e);return t in this._store},Map$1.prototype.delete=function(e){var t=mangle(e),n=t in this._store;return delete this._store[t],n},Map$1.prototype.forEach=function(e){for(var t=Object.keys(this._store),n=0,r=t.length;n<r;n++){var o=t[n],i=this._store[o];o=unmangle(o),e(i,o)}},Object.defineProperty(Map$1.prototype,"size",{get:function(){return Object.keys(this._store).length}}),Set$1.prototype.add=function(e){return this._store.set(e,!0)},Set$1.prototype.has=function(e){return this._store.has(e)},Set$1.prototype.forEach=function(e){this._store.forEach(function(t,n){e(n)})},Object.defineProperty(Set$1.prototype,"size",{get:function(){return this._store.size}});var ExportedSet,ExportedMap;supportsMapAndSet()?(ExportedSet=Set,ExportedMap=Map):(ExportedSet=Set$1,ExportedMap=Map$1);var MAX_NUM_CONCURRENT_REQUESTS=6,hasLocal;if(isChromeApp())hasLocal=!1;else try{localStorage.setItem("_pouch_check_localstorage",1),hasLocal=!!localStorage.getItem("_pouch_check_localstorage")}catch(e){hasLocal=!1}inherits(Changes,events.EventEmitter),Changes.prototype.addListener=function(e,t,n,r){function o(){function e(){a=!1}if(i._listeners[t]){if(a)return void(a="waiting");a=!0;var c=pick(r,["style","include_docs","attachments","conflicts","filter","doc_ids","view","since","query_params","binary"]);n.changes(c).on("change",function(e){e.seq>r.since&&!r.cancelled&&(r.since=e.seq,r.onChange(e))}).on("complete",function(){"waiting"===a&&nextTick(o),a=!1}).on("error",e)}}if(!this._listeners[t]){var i=this,a=!1;this._listeners[t]=o,this.on(e,o)}},Changes.prototype.removeListener=function(e,t){t in this._listeners&&(events.EventEmitter.prototype.removeListener.call(this,e,this._listeners[t]),delete this._listeners[t])},Changes.prototype.notifyLocalWindows=function(e){isChromeApp()?chrome.storage.local.set({dbName:e}):hasLocalStorage()&&(localStorage[e]="a"===localStorage[e]?"b":"a")},Changes.prototype.notify=function(e){this.emit(e),this.notifyLocalWindows(e)};var assign;assign="function"==typeof Object.assign?Object.assign:function(e){for(var t=Object(e),n=1;n<arguments.length;n++){var r=arguments[n];if(null!=r)for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t};var $inject_Object_assign=assign;inherits(PouchError,Error),PouchError.prototype.toString=function(){return JSON.stringify({status:this.status,name:this.name,message:this.message,reason:this.reason})};var UNAUTHORIZED=new PouchError(401,"unauthorized","Name or password is incorrect."),MISSING_BULK_DOCS=new PouchError(400,"bad_request","Missing JSON list of 'docs'"),MISSING_DOC=new PouchError(404,"not_found","missing"),REV_CONFLICT=new PouchError(409,"conflict","Document update conflict"),INVALID_ID=new PouchError(400,"bad_request","_id field must contain a string"),MISSING_ID=new PouchError(412,"missing_id","_id is required for puts"),RESERVED_ID=new PouchError(400,"bad_request","Only reserved document ids may start with underscore."),NOT_OPEN=new PouchError(412,"precondition_failed","Database not open"),UNKNOWN_ERROR=new PouchError(500,"unknown_error","Database encountered an unknown error"),BAD_ARG=new PouchError(500,"badarg","Some query argument is invalid"),INVALID_REQUEST=new PouchError(400,"invalid_request","Request was invalid"),QUERY_PARSE_ERROR=new PouchError(400,"query_parse_error","Some query parameter is invalid"),DOC_VALIDATION=new PouchError(500,"doc_validation","Bad special document member"),BAD_REQUEST=new PouchError(400,"bad_request","Something wrong with the request"),NOT_AN_OBJECT=new PouchError(400,"bad_request","Document must be a JSON object"),DB_MISSING=new PouchError(404,"not_found","Database not found"),IDB_ERROR=new PouchError(500,"indexed_db_went_bad","unknown"),WSQ_ERROR=new PouchError(500,"web_sql_went_bad","unknown"),LDB_ERROR=new PouchError(500,"levelDB_went_went_bad","unknown"),FORBIDDEN=new PouchError(403,"forbidden","Forbidden by design doc validate_doc_update function"),INVALID_REV=new PouchError(400,"bad_request","Invalid rev format"),FILE_EXISTS=new PouchError(412,"file_exists","The database could not be created, the file already exists."),MISSING_STUB=new PouchError(412,"missing_stub","A pre-existing attachment stub wasn't found"),INVALID_URL=new PouchError(413,"invalid_url","Provided URL is invalid"),hasName=f.name,res;res=hasName?function(e){return e.name}:function(e){return e.toString().match(/^\s*function\s*(\S*)\s*\(/)[1]};var keys=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],qName="queryKey",qParser=/(?:^|&)([^&=]*)=?([^&]*)/g,parser=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,chars="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");inherits(Changes$2,events.EventEmitter),Changes$2.prototype.cancel=function(){this.isCancelled=!0,this.db.taskqueue.isReady&&this.emit("cancel")},Changes$2.prototype.doChanges=function(e){var t=this,n=e.complete;if(e=clone(e),"live"in e&&!("continuous"in e)&&(e.continuous=e.live),e.processChange=processChange,"latest"===e.since&&(e.since="now"),e.since||(e.since=0),"now"===e.since)return void this.db.info().then(function(r){return t.isCancelled?void n(null,{status:"cancelled"}):(e.since=r.update_seq,void t.doChanges(e))},n);if(e.view&&!e.filter&&(e.filter="_view"),e.filter&&"string"==typeof e.filter&&("_view"===e.filter?e.view=normalizeDesignDocFunctionName(e.view):e.filter=normalizeDesignDocFunctionName(e.filter),"http"!==this.db.type()&&!e.doc_ids))return this.filterChanges(e);"descending"in e||(e.descending=!1),e.limit=0===e.limit?1:e.limit,e.complete=n;var r=this.db._changes(e);if(r&&"function"==typeof r.cancel){var o=t.cancel;t.cancel=getArguments(function(e){r.cancel(),o.apply(this,e)})}},Changes$2.prototype.filterChanges=function(e){var t=this,n=e.complete;if("_view"===e.filter){if(!e.view||"string"!=typeof e.view){var r=createError(BAD_REQUEST,"`view` filter parameter not found or invalid.");return n(r)}var o=parseDesignDocFunctionName(e.view);this.db.get("_design/"+o[0],function(r,i){if(t.isCancelled)return n(null,{status:"cancelled"});if(r)return n(generateErrorFromResponse(r));var a=i&&i.views&&i.views[o[1]]&&i.views[o[1]].map;return a?(e.filter=evalView(a),void t.doChanges(e)):n(createError(MISSING_DOC,i.views?"missing json key: "+o[1]:"missing json key: views"))})}else{var i=parseDesignDocFunctionName(e.filter);if(!i)return t.doChanges(e);this.db.get("_design/"+i[0],function(r,o){if(t.isCancelled)return n(null,{status:"cancelled"});if(r)return n(generateErrorFromResponse(r));var a=o&&o.filters&&o.filters[i[1]];return a?(e.filter=evalFilter(a),void t.doChanges(e)):n(createError(MISSING_DOC,o&&o.filters?"missing json key: "+i[1]:"missing json key: filters"))})}},inherits(AbstractPouchDB,events.EventEmitter),AbstractPouchDB.prototype.post=adapterFun("post",function(e,t,n){return"function"==typeof t&&(n=t,t={}),"object"!=typeof e||Array.isArray(e)?n(createError(NOT_AN_OBJECT)):void this.bulkDocs({docs:[e]},t,yankError(n))}),AbstractPouchDB.prototype.put=adapterFun("put",function(e,t,n){return"function"==typeof t&&(n=t,t={}),"object"!=typeof e||Array.isArray(e)?n(createError(NOT_AN_OBJECT)):(invalidIdError(e._id),isLocalId(e._id)&&"function"==typeof this._putLocal?e._deleted?this._removeLocal(e,n):this._putLocal(e,n):void("function"==typeof this._put&&t.new_edits!==!1?this._put(e,t,n):this.bulkDocs({docs:[e]},t,yankError(n))))}),AbstractPouchDB.prototype.putAttachment=adapterFun("putAttachment",function(e,t,n,r,o){function i(e){var n="_rev"in e?parseInt(e._rev,10):0;return e._attachments=e._attachments||{},e._attachments[t]={content_type:o,data:r,revpos:++n},a.put(e)}var a=this;return"function"==typeof o&&(o=r,r=n,n=null),"undefined"==typeof o&&(o=r,r=n,n=null),o||guardedConsole("warn","Attachment",t,"on document",e,"is missing content_type"),a.get(e).then(function(e){if(e._rev!==n)throw createError(REV_CONFLICT);return i(e)},function(t){if(t.reason===MISSING_DOC.message)return i({_id:e});throw t})}),AbstractPouchDB.prototype.removeAttachment=adapterFun("removeAttachment",function(e,t,n,r){var o=this;o.get(e,function(e,i){return e?void r(e):i._rev!==n?void r(createError(REV_CONFLICT)):i._attachments?(delete i._attachments[t],0===Object.keys(i._attachments).length&&delete i._attachments,void o.put(i,r)):r()})}),AbstractPouchDB.prototype.remove=adapterFun("remove",function(e,t,n,r){var o;"string"==typeof t?(o={_id:e,_rev:t},"function"==typeof n&&(r=n,n={})):(o=e,"function"==typeof t?(r=t,n={}):(r=n,n=t)),n=n||{},n.was_delete=!0;var i={_id:o._id,_rev:o._rev||n.rev};return i._deleted=!0,isLocalId(i._id)&&"function"==typeof this._removeLocal?this._removeLocal(o,r):void this.bulkDocs({docs:[i]},n,yankError(r))}),AbstractPouchDB.prototype.revsDiff=adapterFun("revsDiff",function(e,t,n){function r(e,t){c.has(e)||c.set(e,{missing:[]}),c.get(e).missing.push(t)}function o(t,n){var o=e[t].slice(0);traverseRevTree(n,function(e,n,i,a,c){var s=n+"-"+i,u=o.indexOf(s);u!==-1&&(o.splice(u,1),"available"!==c.status&&r(t,s))}),o.forEach(function(e){r(t,e)})}"function"==typeof t&&(n=t,t={});var i=Object.keys(e);if(!i.length)return n(null,{});var a=0,c=new ExportedMap;i.map(function(t){this._getRevisionTree(t,function(r,s){if(r&&404===r.status&&"missing"===r.message)c.set(t,{missing:e[t]});else{if(r)return n(r);o(t,s)}if(++a===i.length){var u={};return c.forEach(function(e,t){u[t]=e}),n(null,u)}})},this)}),AbstractPouchDB.prototype.bulkGet=adapterFun("bulkGet",function(e,t){bulkGet(this,e,t)}),AbstractPouchDB.prototype.compactDocument=adapterFun("compactDocument",function(e,t,n){var r=this;this._getRevisionTree(e,function(o,i){if(o)return n(o);var a=computeHeight(i),c=[],s=[];Object.keys(a).forEach(function(e){a[e]>t&&c.push(e)}),traverseRevTree(i,function(e,t,n,r,o){var i=t+"-"+n;"available"===o.status&&c.indexOf(i)!==-1&&s.push(i)}),r._doCompaction(e,s,n)})}),AbstractPouchDB.prototype.compact=adapterFun("compact",function(e,t){"function"==typeof e&&(t=e,e={});var n=this;e=e||{},n._compactionQueue=n._compactionQueue||[],n._compactionQueue.push({opts:e,callback:t}),1===n._compactionQueue.length&&doNextCompaction(n)}),AbstractPouchDB.prototype._compact=function(e,t){function n(e){a.push(o.compactDocument(e.id,0))}function r(e){var n=e.last_seq;PouchPromise$1.all(a).then(function(){return upsert(o,"_local/compaction",function(e){return(!e.last_seq||e.last_seq<n)&&(e.last_seq=n,e)})}).then(function(){t(null,{ok:!0})}).catch(t)}var o=this,i={return_docs:!1,last_seq:e.last_seq||0},a=[];o.changes(i).on("change",n).on("complete",r).on("error",t)},AbstractPouchDB.prototype.get=adapterFun("get",function(e,t,n){function r(){var r=[],a=o.length;return a?void o.forEach(function(o){i.get(e,{rev:o,revs:t.revs,latest:t.latest,attachments:t.attachments},function(e,t){if(e)r.push({missing:o});else{for(var i,c=0,s=r.length;c<s;c++)if(r[c].ok&&r[c].ok._rev===t._rev){i=!0;break}i||r.push({ok:t})}a--,a||n(null,r)})}):n(null,r)}if("function"==typeof t&&(n=t,t={}),"string"!=typeof e)return n(createError(INVALID_ID));if(isLocalId(e)&&"function"==typeof this._getLocal)return this._getLocal(e,n);var o=[],i=this;if(!t.open_revs)return this._get(e,t,function(e,r){if(e)return n(e);var o=r.doc,a=r.metadata,c=r.ctx;if(t.conflicts){var s=collectConflicts(a);s.length&&(o._conflicts=s)}if(isDeleted(a,o._rev)&&(o._deleted=!0),t.revs||t.revs_info){for(var u=o._rev.split("-"),l=parseInt(u[0],10),d=u[1],f=rootToLeaf(a.rev_tree),h=null,p=0;p<f.length;p++){var _=f[p],v=_.ids.map(function(e){return e.id}).indexOf(d),E=v===l-1;(E||!h&&v!==-1)&&(h=_)}var g=h.ids.map(function(e){return e.id}).indexOf(o._rev.split("-")[1])+1,m=h.ids.length-g;if(h.ids.splice(g,m),h.ids.reverse(),t.revs&&(o._revisions={start:h.pos+h.ids.length-1,ids:h.ids.map(function(e){return e.id})}),t.revs_info){var y=h.pos+h.ids.length;o._revs_info=h.ids.map(function(e){return y--,{rev:y+"-"+e.id,status:e.opts.status}})}}if(t.attachments&&o._attachments){var S=o._attachments,T=Object.keys(S).length;if(0===T)return n(null,o);Object.keys(S).forEach(function(e){this._getAttachment(o._id,e,S[e],{rev:o._rev,binary:t.binary,ctx:c},function(t,r){var i=o._attachments[e];i.data=r,delete i.stub,delete i.length,--T||n(null,o)})},i)}else{if(o._attachments)for(var O in o._attachments)o._attachments.hasOwnProperty(O)&&(o._attachments[O].stub=!0);n(null,o)}});if("all"===t.open_revs)this._getRevisionTree(e,function(e,t){return e?n(e):(o=collectLeaves(t).map(function(e){return e.rev}),void r())});else{if(!Array.isArray(t.open_revs))return n(createError(UNKNOWN_ERROR,"function_clause"));o=t.open_revs;for(var a=0;a<o.length;a++){var c=o[a];if("string"!=typeof c||!/^\d+-/.test(c))return n(createError(INVALID_REV))}r()}}),AbstractPouchDB.prototype.getAttachment=adapterFun("getAttachment",function(e,t,n,r){var o=this;n instanceof Function&&(r=n,n={}),this._get(e,n,function(i,a){return i?r(i):a.doc._attachments&&a.doc._attachments[t]?(n.ctx=a.ctx,n.binary=!0,o._getAttachment(e,t,a.doc._attachments[t],n,r),void 0):r(createError(MISSING_DOC))})}),AbstractPouchDB.prototype.allDocs=adapterFun("allDocs",function(e,t){if("function"==typeof e&&(t=e,e={}),e.skip="undefined"!=typeof e.skip?e.skip:0,e.start_key&&(e.startkey=e.start_key),e.end_key&&(e.endkey=e.end_key),"keys"in e){if(!Array.isArray(e.keys))return t(new TypeError("options.keys must be an array"));var n=["startkey","endkey","key"].filter(function(t){return t in e})[0];if(n)return void t(createError(QUERY_PARSE_ERROR,"Query parameter `"+n+"` is not compatible with multi-get"));if("http"!==this.type())return allDocsKeysQuery(this,e,t)}return this._allDocs(e,t)}),AbstractPouchDB.prototype.changes=function(e,t){return"function"==typeof e&&(t=e,e={}),new Changes$2(this,e,t)},AbstractPouchDB.prototype.close=adapterFun("close",function(e){return this._closed=!0,this.emit("closed"),this._close(e)}),AbstractPouchDB.prototype.info=adapterFun("info",function(e){var t=this;this._info(function(n,r){return n?e(n):(r.db_name=r.db_name||t.name,r.auto_compaction=!(!t.auto_compaction||"http"===t.type()),r.adapter=t.type(),void e(null,r))})}),AbstractPouchDB.prototype.id=adapterFun("id",function(e){return this._id(e)}),AbstractPouchDB.prototype.type=function(){return"function"==typeof this._type?this._type():this.adapter},AbstractPouchDB.prototype.bulkDocs=adapterFun("bulkDocs",function(e,t,n){if("function"==typeof t&&(n=t,t={}),t=t||{},Array.isArray(e)&&(e={docs:e}),!e||!e.docs||!Array.isArray(e.docs))return n(createError(MISSING_BULK_DOCS));for(var r=0;r<e.docs.length;++r)if("object"!=typeof e.docs[r]||Array.isArray(e.docs[r]))return n(createError(NOT_AN_OBJECT));var o;if(e.docs.forEach(function(e){e._attachments&&Object.keys(e._attachments).forEach(function(t){o=o||attachmentNameError(t),e._attachments[t].content_type||guardedConsole("warn","Attachment",t,"on document",e._id,"is missing content_type")})}),o)return n(createError(BAD_REQUEST,o));"new_edits"in t||("new_edits"in e?t.new_edits=e.new_edits:t.new_edits=!0);var i=this;t.new_edits||"http"===i.type()||e.docs.sort(compareByIdThenRev),cleanDocs(e.docs);var a=e.docs.map(function(e){return e._id});return this._bulkDocs(e,t,function(e,r){if(e)return n(e);if(t.new_edits||(r=r.filter(function(e){return e.error})),"http"!==i.type())for(var o=0,c=r.length;o<c;o++)r[o].id=r[o].id||a[o];n(null,r)})}),AbstractPouchDB.prototype.registerDependentDatabase=adapterFun("registerDependentDatabase",function(e,t){function n(t){return t.dependentDbs=t.dependentDbs||{},!t.dependentDbs[e]&&(t.dependentDbs[e]=!0,t)}var r=new this.constructor(e,this.__opts);upsert(this,"_local/_pouch_dependentDbs",n).then(function(){t(null,{db:r})}).catch(t)}),AbstractPouchDB.prototype.destroy=adapterFun("destroy",function(e,t){function n(){r._destroy(e,function(e,n){return e?t(e):(r._destroyed=!0,r.emit("destroyed"),void t(null,n||{ok:!0}))})}"function"==typeof e&&(t=e,e={});var r=this,o=!("use_prefix"in r)||r.use_prefix;return"http"===r.type()?n():void r.get("_local/_pouch_dependentDbs",function(e,i){if(e)return 404!==e.status?t(e):n();var a=i.dependentDbs,c=r.constructor,s=Object.keys(a).map(function(e){var t=o?e.replace(new RegExp("^"+c.prefix),""):e;return new c(t,r.__opts).destroy()});PouchPromise$1.all(s).then(n,t)})}),TaskQueue$1.prototype.execute=function(){var e;if(this.failed)for(;e=this.queue.shift();)e(this.failed);else for(;e=this.queue.shift();)e()},TaskQueue$1.prototype.fail=function(e){this.failed=e,this.execute()},TaskQueue$1.prototype.ready=function(e){this.isReady=!0,this.db=e,this.execute()},TaskQueue$1.prototype.addTask=function(e){this.queue.push(e),this.failed&&this.execute()},inherits(PouchDB$5,AbstractPouchDB),PouchDB$5.debug=debug,PouchDB$5.adapters={},PouchDB$5.preferredAdapters=[],PouchDB$5.prefix="_pouch_";var eventEmitter=new events.EventEmitter;setUpEventEmitter(PouchDB$5),PouchDB$5.adapter=function(e,t,n){t.valid()&&(PouchDB$5.adapters[e]=t,n&&PouchDB$5.preferredAdapters.push(e))},PouchDB$5.plugin=function(e){if("function"==typeof e)e(PouchDB$5);else{if("object"!=typeof e||0===Object.keys(e).length)throw new Error('Invalid plugin: got "'+e+'", expected an object or a function');
Object.keys(e).forEach(function(t){PouchDB$5.prototype[t]=e[t]})}return this.__defaults&&(PouchDB$5.__defaults=$inject_Object_assign({},this.__defaults)),PouchDB$5},PouchDB$5.defaults=function(e){function t(e,n){return this instanceof t?(n=n||{},e&&"object"==typeof e&&(n=e,e=n.name,delete n.name),n=$inject_Object_assign({},t.__defaults,n),void PouchDB$5.call(this,e,n)):new t(e,n)}return inherits(t,PouchDB$5),t.preferredAdapters=PouchDB$5.preferredAdapters.slice(),Object.keys(PouchDB$5).forEach(function(e){e in t||(t[e]=PouchDB$5[e])}),t.__defaults=$inject_Object_assign({},this.__defaults,e),t};var version="6.1.2";PouchDB$5.version=version;var reservedWords=toObject(["_id","_rev","_attachments","_deleted","_revisions","_revs_info","_conflicts","_deleted_conflicts","_local_seq","_rev_tree","_replication_id","_replication_state","_replication_state_time","_replication_state_reason","_replication_stats","_removed"]),dataWords=toObject(["_attachments","_replication_id","_replication_state","_replication_state_time","_replication_state_reason","_replication_stats"]),thisAtob=function(e){return atob(e)},thisBtoa=function(e){return btoa(e)},setImmediateShim=global.setImmediate||global.setTimeout,MD5_CHUNK_SIZE=32768,ADAPTER_VERSION=5,DOC_STORE="document-store",BY_SEQ_STORE="by-sequence",ATTACH_STORE="attach-store",ATTACH_AND_SEQ_STORE="attach-seq-store",META_STORE="meta-store",LOCAL_STORE="local-store",DETECT_BLOB_SUPPORT_STORE="detect-blob-support",changesHandler$$1=new Changes,running=!1,queue=[],cachedDBs=new ExportedMap,blobSupportPromise,openReqList=new ExportedMap;IdbPouch.valid=function(){var e="undefined"!=typeof openDatabase&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform);return!e&&"undefined"!=typeof indexedDB&&"undefined"!=typeof IDBKeyRange};var IDBPouch=function(e){e.adapter("idb",IdbPouch,!0)},ADAPTER_VERSION$1=7,DOC_STORE$1=quote("document-store"),BY_SEQ_STORE$1=quote("by-sequence"),ATTACH_STORE$1=quote("attach-store"),LOCAL_STORE$1=quote("local-store"),META_STORE$1=quote("metadata-store"),ATTACH_AND_SEQ_STORE$1=quote("attach-seq-store"),cachedDatabases=new ExportedMap,websqlChanges=new Changes,POUCH_VERSION=1,BY_SEQ_STORE_DELETED_INDEX_SQL="CREATE INDEX IF NOT EXISTS 'by-seq-deleted-idx' ON "+BY_SEQ_STORE$1+" (seq, deleted)",BY_SEQ_STORE_DOC_ID_REV_INDEX_SQL="CREATE UNIQUE INDEX IF NOT EXISTS 'by-seq-doc-id-rev' ON "+BY_SEQ_STORE$1+" (doc_id, rev)",DOC_STORE_WINNINGSEQ_INDEX_SQL="CREATE INDEX IF NOT EXISTS 'doc-winningseq-idx' ON "+DOC_STORE$1+" (winningseq)",ATTACH_AND_SEQ_STORE_SEQ_INDEX_SQL="CREATE INDEX IF NOT EXISTS 'attach-seq-seq-idx' ON "+ATTACH_AND_SEQ_STORE$1+" (seq)",ATTACH_AND_SEQ_STORE_ATTACH_INDEX_SQL="CREATE UNIQUE INDEX IF NOT EXISTS 'attach-seq-digest-idx' ON "+ATTACH_AND_SEQ_STORE$1+" (digest, seq)",DOC_STORE_AND_BY_SEQ_JOINER=BY_SEQ_STORE$1+".seq = "+DOC_STORE$1+".winningseq",SELECT_DOCS=BY_SEQ_STORE$1+".seq AS seq, "+BY_SEQ_STORE$1+".deleted AS deleted, "+BY_SEQ_STORE$1+".json AS data, "+BY_SEQ_STORE$1+".rev AS rev, "+DOC_STORE$1+".json AS metadata";WebSQLPouch.valid=valid,WebSQLPouch.use_prefix=!0;var WebSqlPouch=function(e){e.adapter("websql",WebSQLPouch,!0)},hasXhr=testXhr(),res$2=function(){},CHANGES_BATCH_SIZE=25,MAX_SIMULTANEOUS_REVS=50,supportsBulkGetMap={},log$1=debug("pouchdb:http");HttpPouch.valid=function(){return!0};var HttpPouch$1=function(e){e.adapter("http",HttpPouch,!1),e.adapter("https",HttpPouch,!1)};inherits(QueryParseError,Error),inherits(NotFoundError,Error),inherits(BuiltInError,Error);var log$2=guardedConsole.bind(null,"log"),isArray=Array.isArray,toJSON=JSON.parse,MIN_MAGNITUDE=-324,MAGNITUDE_DIGITS=3,SEP="";TaskQueue$2.prototype.add=function(e){return this.promise=this.promise.catch(function(){}).then(function(){return e()}),this.promise},TaskQueue$2.prototype.finish=function(){return this.promise};var persistentQueues={},tempViewQueue=new TaskQueue$2,CHANGES_BATCH_SIZE$1=50,builtInReduce={_sum:function(e,t){return sum(t)},_count:function(e,t){return t.length},_stats:function(e,t){function n(e){for(var t=0,n=0,r=e.length;n<r;n++){var o=e[n];t+=o*o}return t}return{sum:sum(t),min:Math.min.apply(null,t),max:Math.max.apply(null,t),count:t.length,sumsqr:n(t)}}},localDocName="mrviews",abstract=createAbstractMapReduce(localDocName,mapper,reducer,ddocValidator),mapreduce={query:query,viewCleanup:viewCleanup},CHECKPOINT_VERSION=1,REPLICATOR="pouchdb",CHECKPOINT_HISTORY_SIZE=5,LOWEST_SEQ=0;Checkpointer.prototype.writeCheckpoint=function(e,t){var n=this;return this.updateTarget(e,t).then(function(){return n.updateSource(e,t)})},Checkpointer.prototype.updateTarget=function(e,t){return updateCheckpoint(this.target,this.id,e,t,this.returnValue)},Checkpointer.prototype.updateSource=function(e,t){var n=this;return this.readOnlySource?PouchPromise$1.resolve(!0):updateCheckpoint(this.src,this.id,e,t,this.returnValue).catch(function(e){if(isForbiddenError(e))return n.readOnlySource=!0,!0;throw e})};var comparisons={undefined:function(e,t){return 0===collate(e.last_seq,t.last_seq)?t.last_seq:0},1:function(e,t){return compareReplicationLogs(t,e).last_seq}};Checkpointer.prototype.getCheckpoint=function(){var e=this;return e.target.get(e.id).then(function(t){return e.readOnlySource?PouchPromise$1.resolve(t.last_seq):e.src.get(e.id).then(function(e){if(t.version!==e.version)return LOWEST_SEQ;var n;return n=t.version?t.version.toString():"undefined",n in comparisons?comparisons[n](t,e):LOWEST_SEQ},function(n){if(404===n.status&&t.last_seq)return e.src.put({_id:e.id,last_seq:LOWEST_SEQ}).then(function(){return LOWEST_SEQ},function(n){return isForbiddenError(n)?(e.readOnlySource=!0,t.last_seq):LOWEST_SEQ});throw n})}).catch(function(e){if(404!==e.status)throw e;return LOWEST_SEQ})};var STARTING_BACK_OFF=0;inherits(Replication,events.EventEmitter),Replication.prototype.cancel=function(){this.cancelled=!0,this.state="cancelled",this.emit("cancel")},Replication.prototype.ready=function(e,t){function n(){o.cancel()}function r(){e.removeListener("destroyed",n),t.removeListener("destroyed",n)}var o=this;o._readyCalled||(o._readyCalled=!0,e.once("destroyed",n),t.once("destroyed",n),o.once("complete",r))},inherits(Sync,events.EventEmitter),Sync.prototype.cancel=function(){this.canceled||(this.canceled=!0,this.push.cancel(),this.pull.cancel())},PouchDB$5.plugin(IDBPouch).plugin(WebSqlPouch).plugin(HttpPouch$1).plugin(mapreduce).plugin(replication),module.exports=PouchDB$5;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"argsarray":147,"debug":154,"events":4,"immediate":156,"inherits":148,"lie":150,"scope-eval":157,"spark-md5":158,"vuvuzela":163}],154:[function(require,module,exports){
(function (process){
/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = require('./debug');
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window && typeof window.process !== 'undefined' && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document && 'WebkitAppearance' in document.documentElement.style) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window && window.console && (console.firebug || (console.exception && console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  try {
    return exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (typeof process !== 'undefined' && 'env' in process) {
    return process.env.DEBUG;
  }
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

}).call(this,require('_process'))

},{"./debug":155,"_process":8}],155:[function(require,module,exports){

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug.default = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = require('ms');

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  var split = (namespaces || '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

},{"ms":152}],156:[function(require,module,exports){
(function (global){
"use strict";function nextTick(){draining=!0;for(var e,n,t=queue.length;t;){for(n=queue,queue=[],e=-1;++e<t;)n[e]();t=queue.length}draining=!1}function immediate(e){1!==queue.push(e)||draining||scheduleDrain()}var Mutation=global.MutationObserver||global.WebKitMutationObserver,scheduleDrain;if(Mutation){var called=0,observer=new Mutation(nextTick),element=global.document.createTextNode("");observer.observe(element,{characterData:!0}),scheduleDrain=function(){element.data=called=++called%2}}else if(global.setImmediate||"undefined"==typeof global.MessageChannel)scheduleDrain="document"in global&&"onreadystatechange"in global.document.createElement("script")?function(){var e=global.document.createElement("script");e.onreadystatechange=function(){nextTick(),e.onreadystatechange=null,e.parentNode.removeChild(e),e=null},global.document.documentElement.appendChild(e)}:function(){setTimeout(nextTick,0)};else{var channel=new global.MessageChannel;channel.port1.onmessage=nextTick,scheduleDrain=function(){channel.port2.postMessage(0)}}var draining,queue=[];module.exports=immediate;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],157:[function(require,module,exports){
(function(){var l={}.hasOwnProperty,n=[].slice;module.exports=function(t,a){var c,i,o,p;i=[],p=[];for(c in a)l.call(a,c)&&(o=a[c],"this"!==c&&(i.push(c),p.push(o)));return Function.apply(null,n.call(i).concat([t])).apply(a.this,p)}}).call(this);

},{}],158:[function(require,module,exports){
!function(t){if("object"==typeof exports)module.exports=t();else if("function"==typeof define&&define.amd)define(t);else{var r;try{r=window}catch(t){r=self}r.SparkMD5=t()}}(function(t){"use strict";function r(t,r){var e=t[0],n=t[1],f=t[2],i=t[3];e+=(n&f|~n&i)+r[0]-680876936|0,e=(e<<7|e>>>25)+n|0,i+=(e&n|~e&f)+r[1]-389564586|0,i=(i<<12|i>>>20)+e|0,f+=(i&e|~i&n)+r[2]+606105819|0,f=(f<<17|f>>>15)+i|0,n+=(f&i|~f&e)+r[3]-1044525330|0,n=(n<<22|n>>>10)+f|0,e+=(n&f|~n&i)+r[4]-176418897|0,e=(e<<7|e>>>25)+n|0,i+=(e&n|~e&f)+r[5]+1200080426|0,i=(i<<12|i>>>20)+e|0,f+=(i&e|~i&n)+r[6]-1473231341|0,f=(f<<17|f>>>15)+i|0,n+=(f&i|~f&e)+r[7]-45705983|0,n=(n<<22|n>>>10)+f|0,e+=(n&f|~n&i)+r[8]+1770035416|0,e=(e<<7|e>>>25)+n|0,i+=(e&n|~e&f)+r[9]-1958414417|0,i=(i<<12|i>>>20)+e|0,f+=(i&e|~i&n)+r[10]-42063|0,f=(f<<17|f>>>15)+i|0,n+=(f&i|~f&e)+r[11]-1990404162|0,n=(n<<22|n>>>10)+f|0,e+=(n&f|~n&i)+r[12]+1804603682|0,e=(e<<7|e>>>25)+n|0,i+=(e&n|~e&f)+r[13]-40341101|0,i=(i<<12|i>>>20)+e|0,f+=(i&e|~i&n)+r[14]-1502002290|0,f=(f<<17|f>>>15)+i|0,n+=(f&i|~f&e)+r[15]+1236535329|0,n=(n<<22|n>>>10)+f|0,e+=(n&i|f&~i)+r[1]-165796510|0,e=(e<<5|e>>>27)+n|0,i+=(e&f|n&~f)+r[6]-1069501632|0,i=(i<<9|i>>>23)+e|0,f+=(i&n|e&~n)+r[11]+643717713|0,f=(f<<14|f>>>18)+i|0,n+=(f&e|i&~e)+r[0]-373897302|0,n=(n<<20|n>>>12)+f|0,e+=(n&i|f&~i)+r[5]-701558691|0,e=(e<<5|e>>>27)+n|0,i+=(e&f|n&~f)+r[10]+38016083|0,i=(i<<9|i>>>23)+e|0,f+=(i&n|e&~n)+r[15]-660478335|0,f=(f<<14|f>>>18)+i|0,n+=(f&e|i&~e)+r[4]-405537848|0,n=(n<<20|n>>>12)+f|0,e+=(n&i|f&~i)+r[9]+568446438|0,e=(e<<5|e>>>27)+n|0,i+=(e&f|n&~f)+r[14]-1019803690|0,i=(i<<9|i>>>23)+e|0,f+=(i&n|e&~n)+r[3]-187363961|0,f=(f<<14|f>>>18)+i|0,n+=(f&e|i&~e)+r[8]+1163531501|0,n=(n<<20|n>>>12)+f|0,e+=(n&i|f&~i)+r[13]-1444681467|0,e=(e<<5|e>>>27)+n|0,i+=(e&f|n&~f)+r[2]-51403784|0,i=(i<<9|i>>>23)+e|0,f+=(i&n|e&~n)+r[7]+1735328473|0,f=(f<<14|f>>>18)+i|0,n+=(f&e|i&~e)+r[12]-1926607734|0,n=(n<<20|n>>>12)+f|0,e+=(n^f^i)+r[5]-378558|0,e=(e<<4|e>>>28)+n|0,i+=(e^n^f)+r[8]-2022574463|0,i=(i<<11|i>>>21)+e|0,f+=(i^e^n)+r[11]+1839030562|0,f=(f<<16|f>>>16)+i|0,n+=(f^i^e)+r[14]-35309556|0,n=(n<<23|n>>>9)+f|0,e+=(n^f^i)+r[1]-1530992060|0,e=(e<<4|e>>>28)+n|0,i+=(e^n^f)+r[4]+1272893353|0,i=(i<<11|i>>>21)+e|0,f+=(i^e^n)+r[7]-155497632|0,f=(f<<16|f>>>16)+i|0,n+=(f^i^e)+r[10]-1094730640|0,n=(n<<23|n>>>9)+f|0,e+=(n^f^i)+r[13]+681279174|0,e=(e<<4|e>>>28)+n|0,i+=(e^n^f)+r[0]-358537222|0,i=(i<<11|i>>>21)+e|0,f+=(i^e^n)+r[3]-722521979|0,f=(f<<16|f>>>16)+i|0,n+=(f^i^e)+r[6]+76029189|0,n=(n<<23|n>>>9)+f|0,e+=(n^f^i)+r[9]-640364487|0,e=(e<<4|e>>>28)+n|0,i+=(e^n^f)+r[12]-421815835|0,i=(i<<11|i>>>21)+e|0,f+=(i^e^n)+r[15]+530742520|0,f=(f<<16|f>>>16)+i|0,n+=(f^i^e)+r[2]-995338651|0,n=(n<<23|n>>>9)+f|0,e+=(f^(n|~i))+r[0]-198630844|0,e=(e<<6|e>>>26)+n|0,i+=(n^(e|~f))+r[7]+1126891415|0,i=(i<<10|i>>>22)+e|0,f+=(e^(i|~n))+r[14]-1416354905|0,f=(f<<15|f>>>17)+i|0,n+=(i^(f|~e))+r[5]-57434055|0,n=(n<<21|n>>>11)+f|0,e+=(f^(n|~i))+r[12]+1700485571|0,e=(e<<6|e>>>26)+n|0,i+=(n^(e|~f))+r[3]-1894986606|0,i=(i<<10|i>>>22)+e|0,f+=(e^(i|~n))+r[10]-1051523|0,f=(f<<15|f>>>17)+i|0,n+=(i^(f|~e))+r[1]-2054922799|0,n=(n<<21|n>>>11)+f|0,e+=(f^(n|~i))+r[8]+1873313359|0,e=(e<<6|e>>>26)+n|0,i+=(n^(e|~f))+r[15]-30611744|0,i=(i<<10|i>>>22)+e|0,f+=(e^(i|~n))+r[6]-1560198380|0,f=(f<<15|f>>>17)+i|0,n+=(i^(f|~e))+r[13]+1309151649|0,n=(n<<21|n>>>11)+f|0,e+=(f^(n|~i))+r[4]-145523070|0,e=(e<<6|e>>>26)+n|0,i+=(n^(e|~f))+r[11]-1120210379|0,i=(i<<10|i>>>22)+e|0,f+=(e^(i|~n))+r[2]+718787259|0,f=(f<<15|f>>>17)+i|0,n+=(i^(f|~e))+r[9]-343485551|0,n=(n<<21|n>>>11)+f|0,t[0]=e+t[0]|0,t[1]=n+t[1]|0,t[2]=f+t[2]|0,t[3]=i+t[3]|0}function e(t){var r,e=[];for(r=0;r<64;r+=4)e[r>>2]=t.charCodeAt(r)+(t.charCodeAt(r+1)<<8)+(t.charCodeAt(r+2)<<16)+(t.charCodeAt(r+3)<<24);return e}function n(t){var r,e=[];for(r=0;r<64;r+=4)e[r>>2]=t[r]+(t[r+1]<<8)+(t[r+2]<<16)+(t[r+3]<<24);return e}function f(t){var n,f,i,h,o,u,s=t.length,a=[1732584193,-271733879,-1732584194,271733878];for(n=64;n<=s;n+=64)r(a,e(t.substring(n-64,n)));for(t=t.substring(n-64),f=t.length,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],n=0;n<f;n+=1)i[n>>2]|=t.charCodeAt(n)<<(n%4<<3);if(i[n>>2]|=128<<(n%4<<3),n>55)for(r(a,i),n=0;n<16;n+=1)i[n]=0;return h=8*s,h=h.toString(16).match(/(.*?)(.{0,8})$/),o=parseInt(h[2],16),u=parseInt(h[1],16)||0,i[14]=o,i[15]=u,r(a,i),a}function i(t){var e,f,i,h,o,u,s=t.length,a=[1732584193,-271733879,-1732584194,271733878];for(e=64;e<=s;e+=64)r(a,n(t.subarray(e-64,e)));for(t=e-64<s?t.subarray(e-64):new Uint8Array(0),f=t.length,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e=0;e<f;e+=1)i[e>>2]|=t[e]<<(e%4<<3);if(i[e>>2]|=128<<(e%4<<3),e>55)for(r(a,i),e=0;e<16;e+=1)i[e]=0;return h=8*s,h=h.toString(16).match(/(.*?)(.{0,8})$/),o=parseInt(h[2],16),u=parseInt(h[1],16)||0,i[14]=o,i[15]=u,r(a,i),a}function h(t){var r,e="";for(r=0;r<4;r+=1)e+=b[t>>8*r+4&15]+b[t>>8*r&15];return e}function o(t){var r;for(r=0;r<t.length;r+=1)t[r]=h(t[r]);return t.join("")}function u(t){return/[\u0080-\uFFFF]/.test(t)&&(t=unescape(encodeURIComponent(t))),t}function s(t,r){var e,n=t.length,f=new ArrayBuffer(n),i=new Uint8Array(f);for(e=0;e<n;e+=1)i[e]=t.charCodeAt(e);return r?i:f}function a(t){return String.fromCharCode.apply(null,new Uint8Array(t))}function p(t,r,e){var n=new Uint8Array(t.byteLength+r.byteLength);return n.set(new Uint8Array(t)),n.set(new Uint8Array(r),t.byteLength),e?n:n.buffer}function y(t){var r,e=[],n=t.length;for(r=0;r<n-1;r+=2)e.push(parseInt(t.substr(r,2),16));return String.fromCharCode.apply(String,e)}function c(){this.reset()}var l=function(t,r){return t+r&4294967295},b=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];return"5d41402abc4b2a76b9719d911017c592"!==o(f("hello"))&&(l=function(t,r){var e=(65535&t)+(65535&r),n=(t>>16)+(r>>16)+(e>>16);return n<<16|65535&e}),"undefined"==typeof ArrayBuffer||ArrayBuffer.prototype.slice||!function(){function r(t,r){return t=0|t||0,t<0?Math.max(t+r,0):Math.min(t,r)}ArrayBuffer.prototype.slice=function(e,n){var f,i,h,o,u=this.byteLength,s=r(e,u),a=u;return n!==t&&(a=r(n,u)),s>a?new ArrayBuffer(0):(f=a-s,i=new ArrayBuffer(f),h=new Uint8Array(i),o=new Uint8Array(this,s,f),h.set(o),i)}}(),c.prototype.append=function(t){return this.appendBinary(u(t)),this},c.prototype.appendBinary=function(t){this._buff+=t,this._length+=t.length;var n,f=this._buff.length;for(n=64;n<=f;n+=64)r(this._hash,e(this._buff.substring(n-64,n)));return this._buff=this._buff.substring(n-64),this},c.prototype.end=function(t){var r,e,n=this._buff,f=n.length,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(r=0;r<f;r+=1)i[r>>2]|=n.charCodeAt(r)<<(r%4<<3);return this._finish(i,f),e=o(this._hash),t&&(e=y(e)),this.reset(),e},c.prototype.reset=function(){return this._buff="",this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},c.prototype.getState=function(){return{buff:this._buff,length:this._length,hash:this._hash}},c.prototype.setState=function(t){return this._buff=t.buff,this._length=t.length,this._hash=t.hash,this},c.prototype.destroy=function(){delete this._hash,delete this._buff,delete this._length},c.prototype._finish=function(t,e){var n,f,i,h=e;if(t[h>>2]|=128<<(h%4<<3),h>55)for(r(this._hash,t),h=0;h<16;h+=1)t[h]=0;n=8*this._length,n=n.toString(16).match(/(.*?)(.{0,8})$/),f=parseInt(n[2],16),i=parseInt(n[1],16)||0,t[14]=f,t[15]=i,r(this._hash,t)},c.hash=function(t,r){return c.hashBinary(u(t),r)},c.hashBinary=function(t,r){var e=f(t),n=o(e);return r?y(n):n},c.ArrayBuffer=function(){this.reset()},c.ArrayBuffer.prototype.append=function(t){var e,f=p(this._buff.buffer,t,!0),i=f.length;for(this._length+=t.byteLength,e=64;e<=i;e+=64)r(this._hash,n(f.subarray(e-64,e)));return this._buff=e-64<i?new Uint8Array(f.buffer.slice(e-64)):new Uint8Array(0),this},c.ArrayBuffer.prototype.end=function(t){var r,e,n=this._buff,f=n.length,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(r=0;r<f;r+=1)i[r>>2]|=n[r]<<(r%4<<3);return this._finish(i,f),e=o(this._hash),t&&(e=y(e)),this.reset(),e},c.ArrayBuffer.prototype.reset=function(){return this._buff=new Uint8Array(0),this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},c.ArrayBuffer.prototype.getState=function(){var t=c.prototype.getState.call(this);return t.buff=a(t.buff),t},c.ArrayBuffer.prototype.setState=function(t){return t.buff=s(t.buff,!0),c.prototype.setState.call(this,t)},c.ArrayBuffer.prototype.destroy=c.prototype.destroy,c.ArrayBuffer.prototype._finish=c.prototype._finish,c.ArrayBuffer.hash=function(t,r){var e=i(new Uint8Array(t)),n=o(e);return r?y(n):n},c});

},{}],159:[function(require,module,exports){
"use strict";var tld=require("./lib/tld.js").init();tld.rules=require("./rules.json"),module.exports=tld;

},{"./lib/tld.js":161,"./rules.json":162}],160:[function(require,module,exports){
"use strict";function Rule(t){t=t||{},this.exception=t.exception||!1,this.firstLevel=t.firstLevel||"",this.secondLevel=t.secondLevel||null,this.isHost=t.isHost||!1,this.source=t.source||"",this.wildcard=t.wildcard||!1}Rule.prototype.getNormalXld=function(){return(this.secondLevel?"."+this.secondLevel:"")+"."+this.firstLevel},Rule.prototype.getNormalPattern=function(){return(this.secondLevel?"\\."+this.secondLevel:"")+"\\."+this.firstLevel},Rule.prototype.getWildcardPattern=function(){return"\\.[^\\.]+"+this.getNormalXld().replace(/\./g,"\\.")},Rule.prototype.getExceptionPattern=function(){return(this.secondLevel||"")+"\\."+this.firstLevel},Rule.prototype.getPattern=function(t,e){var i="";return t=void 0===t?"(":t+"",e=void 0===e?")$":e+"",i=this.exception===!0?this.getExceptionPattern():this.isHost===!0?this.firstLevel:"[^\\.]+"+(this.wildcard?this.getWildcardPattern():this.getNormalPattern()),t+i+e},module.exports=Rule;

},{}],161:[function(require,module,exports){
"use strict";function tld(){this.validHosts=[],this.rules=[]}function trim(t){return String(t).replace(/(^\s+|\s+$)/g,"")}function _someFunction(t,e){if(void 0===t||null===t)throw new TypeError;var n=Object(t),r=n.length>>>0;if("function"!=typeof e)throw new TypeError;for(var l=arguments.length>=3?arguments[2]:void 0,o=0;o<r;o++)if(o in n&&e.call(l,n[o],o,n))return!0;return!1}function _mapFunction(t,e){if(void 0===t||null===t)throw new TypeError;var n=Object(t),r=n.length>>>0;if("function"!=typeof e)throw new TypeError;for(var l=new Array(r),o=arguments.length>=3?arguments[2]:void 0,i=0;i<r;i++)i in n&&(l[i]=e.call(o,n[i],i,n));return l}var Rule=require("./rule.js"),URL=require("url");tld.init=function(){return new tld},tld.getCandidateRule=function(t,e,n){var r={normal:null,exception:null};return n=n||{lazy:!1},_someFunction(e,function(e){var l;return"."+t===e.getNormalXld()?((n.lazy||e.exception||e.isHost)&&(r.normal=e),!0):(l=".+"+e.getNormalPattern()+"$",!!new RegExp(l).test(t)&&(r[e.exception?"exception":"normal"]=e,!e.exception))}),r.normal&&r.exception?r.exception:r.normal},tld.prototype.getRulesForTld=function(t,e){var n="!",r="*",l=!0,o=this.rules[t];return"[object Array]"===Object.prototype.toString.call(o)?o:void 0===o?e?[e]:[]:(o=_mapFunction(o.split("|"),function(e){var o=e[0];return o!==n&&o!==r||(e=e.slice(1),e||(l=!1)),new Rule({firstLevel:t,secondLevel:e,exception:o===n,wildcard:o===r})}),l&&o.unshift(new Rule({firstLevel:t})),this.rules[t]=o.reverse(),o)},tld.prototype.tldExists=function(t){var e;return t=tld.cleanHostValue(t),!!this.rules[t]||(e=tld.extractTldFromHost(t),void 0!==this.rules[e])},tld.prototype.getPublicSuffix=function(t){var e,n,r;return t in this.rules?t:(t=tld.cleanHostValue(t),e=tld.extractTldFromHost(t),n=this.getRulesForTld(e),r=tld.getCandidateRule(t,n,{lazy:!0}),null===r?null:r.getNormalXld().slice(1))},tld.prototype.getDomain=function(t){var e,n,r,l=null;return this.isValid(t)===!1?null:(t=tld.cleanHostValue(t),e=tld.extractTldFromHost(t),n=this.getRulesForTld(e,new Rule({firstLevel:e,isHost:this.validHosts.indexOf(e)!==-1})),r=tld.getCandidateRule(t,n),null===r?null:(t.replace(new RegExp(r.getPattern()),function(t,e){l=e}),l))},tld.prototype.getSubdomain=function(t){var e,n,r;return t=tld.cleanHostValue(t),e=this.getDomain(t),null===e?null:(n="\\.?"+tld.escapeRegExp(e)+"$",r=t.replace(new RegExp(n,"i"),""))},tld.prototype.isValid=function(t){return"string"==typeof t&&(this.validHosts.indexOf(t)!==-1||t.indexOf(".")!==-1&&"."!==t[0])};var hasPrefixRE=/^(([a-z][a-z0-9+.-]*)?:)?\/\//,invalidHostnameChars=/[^A-Za-z0-9.-]/;tld.cleanHostValue=function(t){t=trim(t).toLowerCase();var e=URL.parse(hasPrefixRE.test(t)?t:"//"+t,null,!0);return e.hostname&&!invalidHostnameChars.test(e.hostname)?e.hostname:invalidHostnameChars.test(t)?"":t},tld.extractTldFromHost=function(t){return t.split(".").pop()},tld.escapeRegExp=function(t){return String(t).replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")},module.exports=tld;

},{"./rule.js":160,"url":15}],162:[function(require,module,exports){
module.exports={"ac":"com|edu|gov|net|mil|org","ad":"nom","ae":"co|net|org|sch|ac|gov|mil|blogspot|nom","aero":"accident-investigation|accident-prevention|aerobatic|aeroclub|aerodrome|agents|aircraft|airline|airport|air-surveillance|airtraffic|air-traffic-control|ambulance|amusement|association|author|ballooning|broker|caa|cargo|catering|certification|championship|charter|civilaviation|club|conference|consultant|consulting|control|council|crew|design|dgca|educator|emergency|engine|engineer|entertainment|equipment|exchange|express|federation|flight|freight|fuel|gliding|government|groundhandling|group|hanggliding|homebuilt|insurance|journal|journalist|leasing|logistics|magazine|maintenance|media|microlight|modelling|navigation|parachuting|paragliding|passenger-association|pilot|press|production|recreation|repbody|res|research|rotorcraft|safety|scientist|services|show|skydiving|software|student|trader|trading|trainer|union|workinggroup|works","af":"gov|com|org|net|edu","ag":"com|org|net|co|nom","ai":"off|com|net|org|nom","al":"com|edu|gov|mil|net|org|blogspot|nom","am":"blogspot","ao":"ed|gv|og|co|pb|it","aq":"","ar":"com|edu|gob|gov|int|mil|musica|net|org|tur|blogspot.com","arpa":"e164|in-addr|ip6|iris|uri|urn","as":"gov","asia":"cloudns","at":"ac|co|gv|or|*futurecms|futurehosting|futuremailing|*ex.ortsinfo|*kunden.ortsinfo|blogspot.co|biz|info|priv|12hp|2ix|4lima|lima-city","au":"com|net|org|edu|gov|asn|id|info|conf|oz|act|nsw|nt|qld|sa|tas|vic|wa|act.edu|nsw.edu|nt.edu|qld.edu|sa.edu|tas.edu|vic.edu|wa.edu|qld.gov|sa.gov|tas.gov|vic.gov|wa.gov|blogspot.com","aw":"com","ax":"","az":"com|net|int|gov|org|edu|info|pp|mil|name|pro|biz","ba":"com|edu|gov|mil|net|org|blogspot","bb":"biz|co|com|edu|gov|info|net|org|store|tv","bd":"*","be":"ac|blogspot|*transurl","bf":"gov","bg":"a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|0|1|2|3|4|5|6|7|8|9|blogspot|barsy","bh":"com|edu|net|org|gov","bi":"co|com|edu|or|org","biz":"cloudns|dyndns|for-better|for-more|for-some|for-the|selfip|webhop|mmafan|myftp|no-ip|dscloud","bj":"asso|barreau|gouv|blogspot","bm":"com|edu|gov|net|org","bn":"*","bo":"com|edu|gov|gob|int|org|net|mil|tv","br":"adm|adv|agr|am|arq|art|ato|b|belem|bio|blog|bmd|cim|cng|cnt|com|coop|cri|def|ecn|eco|edu|emp|eng|esp|etc|eti|far|flog|floripa|fm|fnd|fot|fst|g12|ggf|gov|ac.gov|al.gov|am.gov|ap.gov|ba.gov|ce.gov|df.gov|es.gov|go.gov|ma.gov|mg.gov|ms.gov|mt.gov|pa.gov|pb.gov|pe.gov|pi.gov|pr.gov|rj.gov|rn.gov|ro.gov|rr.gov|rs.gov|sc.gov|se.gov|sp.gov|to.gov|imb|ind|inf|jampa|jor|jus|leg|lel|mat|med|mil|mp|mus|net|*nom|not|ntr|odo|org|poa|ppg|pro|psc|psi|qsl|radio|rec|recife|slg|srv|taxi|teo|tmp|trd|tur|tv|vet|vix|vlog|wiki|zlg|blogspot.com|ac.leg|al.leg|am.leg|ap.leg|ba.leg|ce.leg|df.leg|es.leg|go.leg|ma.leg|mg.leg|ms.leg|mt.leg|pa.leg|pb.leg|pe.leg|pi.leg|pr.leg|rj.leg|rn.leg|ro.leg|rr.leg|rs.leg|sc.leg|se.leg|sp.leg|to.leg","bs":"com|net|org|edu|gov|we","bt":"com|edu|gov|net|org","bv":"","bw":"co|org","by":"gov|mil|com|of|blogspot.com|nym","bz":"com|net|org|edu|gov|za|nym","ca":"ab|bc|mb|nb|nf|nl|ns|nt|nu|on|pe|qc|sk|yk|gc|*awdev|co|blogspot|no-ip","cat":"","cc":"cloudns|ftpaccess|game-server|myphotos|scrapping|twmail|fantasyleague","cd":"gov","cf":"blogspot","cg":"","ch":"square7|blogspot|gotdns|12hp|2ix|4lima|lima-city","ci":"org|or|com|co|edu|ed|ac|net|go|asso|xn--aroport-bya|int|presse|md|gouv","ck":"*|!www","cl":"gov|gob|co|mil|blogspot|nom","cm":"co|com|gov|net","cn":"ac|com|edu|gov|net|org|mil|xn--55qx5d|xn--io0a7i|xn--od0alg|ah|bj|cq|fj|gd|gs|gz|gx|ha|hb|he|hi|hl|hn|jl|js|jx|ln|nm|nx|qh|sc|sd|sh|sn|sx|tj|xj|xz|yn|zj|hk|mo|tw|*compute.amazonaws.com|cn-north-1.eb.amazonaws.com|*elb.amazonaws.com|s3.cn-north-1.amazonaws.com","co":"arts|com|edu|firm|gov|info|int|mil|net|nom|org|rec|web|blogspot.com|nodum","com":"*compute.amazonaws|*compute-1.amazonaws|us-east-1.amazonaws|elasticbeanstalk|ap-northeast-1.elasticbeanstalk|ap-northeast-2.elasticbeanstalk|ap-south-1.elasticbeanstalk|ap-southeast-1.elasticbeanstalk|ap-southeast-2.elasticbeanstalk|ca-central-1.elasticbeanstalk|eu-central-1.elasticbeanstalk|eu-west-1.elasticbeanstalk|eu-west-2.elasticbeanstalk|sa-east-1.elasticbeanstalk|us-east-1.elasticbeanstalk|us-east-2.elasticbeanstalk|us-gov-west-1.elasticbeanstalk|us-west-1.elasticbeanstalk|us-west-2.elasticbeanstalk|*elb.amazonaws|s3.amazonaws|s3-ap-northeast-1.amazonaws|s3-ap-northeast-2.amazonaws|s3-ap-south-1.amazonaws|s3-ap-southeast-1.amazonaws|s3-ap-southeast-2.amazonaws|s3-ca-central-1.amazonaws|s3-eu-central-1.amazonaws|s3-eu-west-1.amazonaws|s3-eu-west-2.amazonaws|s3-external-1.amazonaws|s3-fips-us-gov-west-1.amazonaws|s3-sa-east-1.amazonaws|s3-us-gov-west-1.amazonaws|s3-us-east-2.amazonaws|s3-us-west-1.amazonaws|s3-us-west-2.amazonaws|s3.ap-northeast-2.amazonaws|s3.ap-south-1.amazonaws|s3.ca-central-1.amazonaws|s3.eu-central-1.amazonaws|s3.eu-west-2.amazonaws|s3.us-east-2.amazonaws|s3.dualstack.ap-northeast-1.amazonaws|s3.dualstack.ap-northeast-2.amazonaws|s3.dualstack.ap-south-1.amazonaws|s3.dualstack.ap-southeast-1.amazonaws|s3.dualstack.ap-southeast-2.amazonaws|s3.dualstack.ca-central-1.amazonaws|s3.dualstack.eu-central-1.amazonaws|s3.dualstack.eu-west-1.amazonaws|s3.dualstack.eu-west-2.amazonaws|s3.dualstack.sa-east-1.amazonaws|s3.dualstack.us-east-1.amazonaws|s3.dualstack.us-east-2.amazonaws|s3-website-us-east-1.amazonaws|s3-website-us-west-1.amazonaws|s3-website-us-west-2.amazonaws|s3-website-ap-northeast-1.amazonaws|s3-website-ap-southeast-1.amazonaws|s3-website-ap-southeast-2.amazonaws|s3-website-eu-west-1.amazonaws|s3-website-sa-east-1.amazonaws|s3-website.ap-northeast-2.amazonaws|s3-website.ap-south-1.amazonaws|s3-website.ca-central-1.amazonaws|s3-website.eu-central-1.amazonaws|s3-website.eu-west-2.amazonaws|s3-website.us-east-2.amazonaws|on-aptible|myasustor|betainabox|bplaced|ar|br|cn|de|eu|gb|hu|jpn|kr|mex|no|qc|ru|sa|se|uk|us|uy|za|africa|gr|co|xenapponazure|jdevcloud|wpdevcloud|cloudcontrolled|cloudcontrolapp|drayddns|dreamhosters|mydrobo|dyndns-at-home|dyndns-at-work|dyndns-blog|dyndns-free|dyndns-home|dyndns-ip|dyndns-mail|dyndns-office|dyndns-pics|dyndns-remote|dyndns-server|dyndns-web|dyndns-wiki|dyndns-work|blogdns|cechire|dnsalias|dnsdojo|doesntexist|dontexist|doomdns|dyn-o-saur|dynalias|est-a-la-maison|est-a-la-masion|est-le-patron|est-mon-blogueur|from-ak|from-al|from-ar|from-ca|from-ct|from-dc|from-de|from-fl|from-ga|from-hi|from-ia|from-id|from-il|from-in|from-ks|from-ky|from-ma|from-md|from-mi|from-mn|from-mo|from-ms|from-mt|from-nc|from-nd|from-ne|from-nh|from-nj|from-nm|from-nv|from-oh|from-ok|from-or|from-pa|from-pr|from-ri|from-sc|from-sd|from-tn|from-tx|from-ut|from-va|from-vt|from-wa|from-wi|from-wv|from-wy|getmyip|gotdns|hobby-site|homelinux|homeunix|iamallama|is-a-anarchist|is-a-blogger|is-a-bookkeeper|is-a-bulls-fan|is-a-caterer|is-a-chef|is-a-conservative|is-a-cpa|is-a-cubicle-slave|is-a-democrat|is-a-designer|is-a-doctor|is-a-financialadvisor|is-a-geek|is-a-green|is-a-guru|is-a-hard-worker|is-a-hunter|is-a-landscaper|is-a-lawyer|is-a-liberal|is-a-libertarian|is-a-llama|is-a-musician|is-a-nascarfan|is-a-nurse|is-a-painter|is-a-personaltrainer|is-a-photographer|is-a-player|is-a-republican|is-a-rockstar|is-a-socialist|is-a-student|is-a-teacher|is-a-techie|is-a-therapist|is-an-accountant|is-an-actor|is-an-actress|is-an-anarchist|is-an-artist|is-an-engineer|is-an-entertainer|is-certified|is-gone|is-into-anime|is-into-cars|is-into-cartoons|is-into-games|is-leet|is-not-certified|is-slick|is-uberleet|is-with-theband|isa-geek|isa-hockeynut|issmarterthanyou|likes-pie|likescandy|neat-url|saves-the-whales|selfip|sells-for-less|sells-for-u|servebbs|simple-url|space-to-rent|teaches-yoga|writesthisblog|ddnsfree|ddnsgeek|giize|gleeze|kozow|loseyourip|ooguy|theworkpc|mytuleap|eu-1.evennode|eu-2.evennode|eu-3.evennode|eu-4.evennode|us-1.evennode|us-2.evennode|us-3.evennode|us-4.evennode|apps.fbsbx|firebaseapp|flynnhub|freebox-os|freeboxos|githubusercontent|*0emm|appspot|blogspot|codespot|googleapis|googlecode|pagespeedmobilizer|publishproxy|withgoogle|withyoutube|herokuapp|herokussl|pixolino|*cns.joyent|barsyonline|meteorapp|eu.meteorapp|bitballoon|netlify|4u|nfshost|blogsyte|ciscofreak|damnserver|ditchyourip|dnsiskinky|dynns|geekgalaxy|health-carereform|homesecuritymac|homesecuritypc|myactivedirectory|mysecuritycamera|net-freaks|onthewifi|point2this|quicksytes|securitytactics|serveexchange|servehumour|servep2p|servesarcasm|stufftoread|unusualperson|workisboring|3utilities|ddnsking|myvnc|servebeer|servecounterstrike|serveftp|servegame|servehalflife|servehttp|serveirc|servemp3|servepics|servequake|operaunite|outsystemscloud|ownprovider|pgfog|pagefrontapp|gotpantheon|xen.prgmr|qa2|dev-myqnapcloud|alpha-myqnapcloud|myqnapcloud|*quipelements|rackmaze|rhcloud|logoip|firewall-gateway|myshopblocks|1kapp|appchizi|applinzi|sinaapp|vipsinaapp|bounty-full|alpha.bounty-full|beta.bounty-full|temp-dns|dsmynas|familyds|bloxcms|townnews-staging|hk|remotewd|yolasite","coop":"","cr":"ac|co|ed|fi|go|or|sa","cu":"com|edu|org|net|gov|inf","cv":"blogspot","cw":"com|edu|net|org","cx":"gov|ath|info","cy":"ac|biz|com|ekloges|gov|ltd|name|net|org|parliament|press|pro|tm|blogspot.com","cz":"co|realm|e4|blogspot|cloud.metacentrum|custom.metacentrum","de":"bplaced|square7|com|dyn.cosidns|dynamisches-dns|dnsupdater|internet-dns|l-o-g-i-n|dnshome|fuettertdasnetz|isteingeek|istmein|lebtimnetz|leitungsen|traeumtgerade|ddnss|dyn.ddnss|dyndns.ddnss|dyndns1|dyn-ip24|home-webserver|dyn.home-webserver|myhome-server|goip|blogspot|keymachine|git-repos|lcube-server|svn-repos|barsy|logoip|firewall-gateway|my-gateway|my-router|spdns|taifun-dns|12hp|2ix|4lima|lima-city|dd-dns|dray-dns|draydns|dyn-vpn|dynvpn|mein-vigor|my-vigor|my-wan|syno-ds|synology-diskstation|synology-ds","dj":"","dk":"biz|co|firm|reg|store|blogspot","dm":"com|net|org|edu|gov","do":"art|com|edu|gob|gov|mil|net|org|sld|web","dz":"com|org|net|gov|edu|asso|pol|art","ec":"com|info|net|fin|k12|med|pro|org|edu|gov|gob|mil","edu":"","ee":"edu|gov|riik|lib|med|com|pri|aip|org|fie|blogspot.com","eg":"com|edu|eun|gov|mil|name|net|org|sci|blogspot.com","er":"*","es":"com|nom|org|gob|edu|blogspot.com","et":"com|gov|org|edu|biz|name|info|net","eu":"mycd|cloudns|barsy|wellbeingzone|spdns|*transurl|diskstation","fi":"aland|dy|blogspot|iki","fj":"*","fk":"*","fm":"","fo":"","fr":"com|asso|nom|prd|presse|tm|aeroport|assedic|avocat|avoues|cci|chambagri|chirurgiens-dentistes|experts-comptables|geometre-expert|gouv|greta|huissier-justice|medecin|notaires|pharmacien|port|veterinaire|fbx-os|fbxos|freebox-os|freeboxos|blogspot|on-web|chirurgiens-dentistes-en-france","ga":"","gb":"","gd":"nom","ge":"com|edu|gov|org|mil|net|pvt","gf":"","gg":"co|net|org|cya","gh":"com|edu|gov|org|mil","gi":"com|ltd|gov|mod|edu|org","gl":"co|com|edu|net|org|nom","gm":"","gn":"ac|com|edu|gov|org|net","gov":"","gp":"com|net|mobi|edu|org|asso","gq":"","gr":"com|edu|net|org|gov|blogspot|nym","gs":"","gt":"com|edu|gob|ind|mil|net|org|nom","gu":"*","gw":"","gy":"co|com|edu|gov|net|org","hk":"com|edu|gov|idv|net|org|xn--55qx5d|xn--wcvs22d|xn--lcvr32d|xn--mxtq1m|xn--gmqw5a|xn--ciqpn|xn--gmq050i|xn--zf0avx|xn--io0a7i|xn--mk0axi|xn--od0alg|xn--od0aq3b|xn--tn0ag|xn--uc0atv|xn--uc0ay4a|blogspot|ltd|inc","hm":"","hn":"com|edu|org|net|mil|gob|nom","hr":"iz|from|name|com|blogspot","ht":"com|shop|firm|info|adult|net|pro|org|med|art|coop|pol|asso|edu|rel|gouv|perso","hu":"co|info|org|priv|sport|tm|2000|agrar|bolt|casino|city|erotica|erotika|film|forum|games|hotel|ingatlan|jogasz|konyvelo|lakas|media|news|reklam|sex|shop|suli|szex|tozsde|utazas|video|blogspot","id":"ac|biz|co|desa|go|mil|my|net|or|sch|web|blogspot.co","ie":"gov|blogspot","il":"ac|co|gov|idf|k12|muni|net|org|blogspot.co","im":"ac|co|com|ltd.co|net|org|plc.co|tt|tv|ro|nom","in":"co|firm|net|org|gen|ind|nic|ac|edu|res|gov|mil|cloudns|blogspot|barsy","info":"cloudns|dynamic-dns|dyndns|barrel-of-knowledge|barrell-of-knowledge|for-our|groks-the|groks-this|here-for-more|knowsitall|selfip|webhop|nsupdate|dvrcam|ilovecollege|no-ip|v-info","int":"eu","io":"com|backplaneapp|boxfuse|browsersafetymark|dedyn|drud|definima|enonic|customer.enonic|github|gitlab|hasura-app|ngrok|stage.nodeart|nodum|nid|pantheonsite|protonet|vaporcloud|hzc|sandcats|shiftedit|apps.lair|*stolos|spacekit|cust.dev.thingdust|cust.disrec.thingdust|cust.prod.thingdust|cust.testing.thingdust|wedeploy","iq":"gov|edu|mil|com|org|net","ir":"ac|co|gov|id|net|org|sch|xn--mgba3a4f16a|xn--mgba3a4fra","is":"net|com|edu|gov|org|int|cupcake|blogspot","it":"gov|edu|abr|abruzzo|aosta-valley|aostavalley|bas|basilicata|cal|calabria|cam|campania|emilia-romagna|emiliaromagna|emr|friuli-v-giulia|friuli-ve-giulia|friuli-vegiulia|friuli-venezia-giulia|friuli-veneziagiulia|friuli-vgiulia|friuliv-giulia|friulive-giulia|friulivegiulia|friulivenezia-giulia|friuliveneziagiulia|friulivgiulia|fvg|laz|lazio|lig|liguria|lom|lombardia|lombardy|lucania|mar|marche|mol|molise|piedmont|piemonte|pmn|pug|puglia|sar|sardegna|sardinia|sic|sicilia|sicily|taa|tos|toscana|trentino-a-adige|trentino-aadige|trentino-alto-adige|trentino-altoadige|trentino-s-tirol|trentino-stirol|trentino-sud-tirol|trentino-sudtirol|trentino-sued-tirol|trentino-suedtirol|trentinoa-adige|trentinoaadige|trentinoalto-adige|trentinoaltoadige|trentinos-tirol|trentinostirol|trentinosud-tirol|trentinosudtirol|trentinosued-tirol|trentinosuedtirol|tuscany|umb|umbria|val-d-aosta|val-daosta|vald-aosta|valdaosta|valle-aosta|valle-d-aosta|valle-daosta|valleaosta|valled-aosta|valledaosta|vallee-aoste|valleeaoste|vao|vda|ven|veneto|ag|agrigento|al|alessandria|alto-adige|altoadige|an|ancona|andria-barletta-trani|andria-trani-barletta|andriabarlettatrani|andriatranibarletta|ao|aosta|aoste|ap|aq|aquila|ar|arezzo|ascoli-piceno|ascolipiceno|asti|at|av|avellino|ba|balsan|bari|barletta-trani-andria|barlettatraniandria|belluno|benevento|bergamo|bg|bi|biella|bl|bn|bo|bologna|bolzano|bozen|br|brescia|brindisi|bs|bt|bz|ca|cagliari|caltanissetta|campidano-medio|campidanomedio|campobasso|carbonia-iglesias|carboniaiglesias|carrara-massa|carraramassa|caserta|catania|catanzaro|cb|ce|cesena-forli|cesenaforli|ch|chieti|ci|cl|cn|co|como|cosenza|cr|cremona|crotone|cs|ct|cuneo|cz|dell-ogliastra|dellogliastra|en|enna|fc|fe|fermo|ferrara|fg|fi|firenze|florence|fm|foggia|forli-cesena|forlicesena|fr|frosinone|ge|genoa|genova|go|gorizia|gr|grosseto|iglesias-carbonia|iglesiascarbonia|im|imperia|is|isernia|kr|la-spezia|laquila|laspezia|latina|lc|le|lecce|lecco|li|livorno|lo|lodi|lt|lu|lucca|macerata|mantova|massa-carrara|massacarrara|matera|mb|mc|me|medio-campidano|mediocampidano|messina|mi|milan|milano|mn|mo|modena|monza-brianza|monza-e-della-brianza|monza|monzabrianza|monzaebrianza|monzaedellabrianza|ms|mt|na|naples|napoli|no|novara|nu|nuoro|og|ogliastra|olbia-tempio|olbiatempio|or|oristano|ot|pa|padova|padua|palermo|parma|pavia|pc|pd|pe|perugia|pesaro-urbino|pesarourbino|pescara|pg|pi|piacenza|pisa|pistoia|pn|po|pordenone|potenza|pr|prato|pt|pu|pv|pz|ra|ragusa|ravenna|rc|re|reggio-calabria|reggio-emilia|reggiocalabria|reggioemilia|rg|ri|rieti|rimini|rm|rn|ro|roma|rome|rovigo|sa|salerno|sassari|savona|si|siena|siracusa|so|sondrio|sp|sr|ss|suedtirol|sv|ta|taranto|te|tempio-olbia|tempioolbia|teramo|terni|tn|to|torino|tp|tr|trani-andria-barletta|trani-barletta-andria|traniandriabarletta|tranibarlettaandria|trapani|trentino|trento|treviso|trieste|ts|turin|tv|ud|udine|urbino-pesaro|urbinopesaro|va|varese|vb|vc|ve|venezia|venice|verbania|vercelli|verona|vi|vibo-valentia|vibovalentia|vicenza|viterbo|vr|vs|vt|vv|blogspot","je":"co|net|org","jm":"*","jo":"com|org|net|edu|sch|gov|mil|name","jobs":"","jp":"ac|ad|co|ed|go|gr|lg|ne|or|aichi|akita|aomori|chiba|ehime|fukui|fukuoka|fukushima|gifu|gunma|hiroshima|hokkaido|hyogo|ibaraki|ishikawa|iwate|kagawa|kagoshima|kanagawa|kochi|kumamoto|kyoto|mie|miyagi|miyazaki|nagano|nagasaki|nara|niigata|oita|okayama|okinawa|osaka|saga|saitama|shiga|shimane|shizuoka|tochigi|tokushima|tokyo|tottori|toyama|wakayama|yamagata|yamaguchi|yamanashi|xn--4pvxs|xn--vgu402c|xn--c3s14m|xn--f6qx53a|xn--8pvr4u|xn--uist22h|xn--djrs72d6uy|xn--mkru45i|xn--0trq7p7nn|xn--8ltr62k|xn--2m4a15e|xn--efvn9s|xn--32vp30h|xn--4it797k|xn--1lqs71d|xn--5rtp49c|xn--5js045d|xn--ehqz56n|xn--1lqs03n|xn--qqqt11m|xn--kbrq7o|xn--pssu33l|xn--ntsq17g|xn--uisz3g|xn--6btw5a|xn--1ctwo|xn--6orx2r|xn--rht61e|xn--rht27z|xn--djty4k|xn--nit225k|xn--rht3d|xn--klty5x|xn--kltx9a|xn--kltp7d|xn--uuwu58a|xn--zbx025d|xn--ntso0iqx3a|xn--elqq16h|xn--4it168d|xn--klt787d|xn--rny31h|xn--7t0a264c|xn--5rtq34k|xn--k7yn95e|xn--tor131o|xn--d5qv7z876c|*kawasaki|*kitakyushu|*kobe|*nagoya|*sapporo|*sendai|*yokohama|!city.kawasaki|!city.kitakyushu|!city.kobe|!city.nagoya|!city.sapporo|!city.sendai|!city.yokohama|aisai.aichi|ama.aichi|anjo.aichi|asuke.aichi|chiryu.aichi|chita.aichi|fuso.aichi|gamagori.aichi|handa.aichi|hazu.aichi|hekinan.aichi|higashiura.aichi|ichinomiya.aichi|inazawa.aichi|inuyama.aichi|isshiki.aichi|iwakura.aichi|kanie.aichi|kariya.aichi|kasugai.aichi|kira.aichi|kiyosu.aichi|komaki.aichi|konan.aichi|kota.aichi|mihama.aichi|miyoshi.aichi|nishio.aichi|nisshin.aichi|obu.aichi|oguchi.aichi|oharu.aichi|okazaki.aichi|owariasahi.aichi|seto.aichi|shikatsu.aichi|shinshiro.aichi|shitara.aichi|tahara.aichi|takahama.aichi|tobishima.aichi|toei.aichi|togo.aichi|tokai.aichi|tokoname.aichi|toyoake.aichi|toyohashi.aichi|toyokawa.aichi|toyone.aichi|toyota.aichi|tsushima.aichi|yatomi.aichi|akita.akita|daisen.akita|fujisato.akita|gojome.akita|hachirogata.akita|happou.akita|higashinaruse.akita|honjo.akita|honjyo.akita|ikawa.akita|kamikoani.akita|kamioka.akita|katagami.akita|kazuno.akita|kitaakita.akita|kosaka.akita|kyowa.akita|misato.akita|mitane.akita|moriyoshi.akita|nikaho.akita|noshiro.akita|odate.akita|oga.akita|ogata.akita|semboku.akita|yokote.akita|yurihonjo.akita|aomori.aomori|gonohe.aomori|hachinohe.aomori|hashikami.aomori|hiranai.aomori|hirosaki.aomori|itayanagi.aomori|kuroishi.aomori|misawa.aomori|mutsu.aomori|nakadomari.aomori|noheji.aomori|oirase.aomori|owani.aomori|rokunohe.aomori|sannohe.aomori|shichinohe.aomori|shingo.aomori|takko.aomori|towada.aomori|tsugaru.aomori|tsuruta.aomori|abiko.chiba|asahi.chiba|chonan.chiba|chosei.chiba|choshi.chiba|chuo.chiba|funabashi.chiba|futtsu.chiba|hanamigawa.chiba|ichihara.chiba|ichikawa.chiba|ichinomiya.chiba|inzai.chiba|isumi.chiba|kamagaya.chiba|kamogawa.chiba|kashiwa.chiba|katori.chiba|katsuura.chiba|kimitsu.chiba|kisarazu.chiba|kozaki.chiba|kujukuri.chiba|kyonan.chiba|matsudo.chiba|midori.chiba|mihama.chiba|minamiboso.chiba|mobara.chiba|mutsuzawa.chiba|nagara.chiba|nagareyama.chiba|narashino.chiba|narita.chiba|noda.chiba|oamishirasato.chiba|omigawa.chiba|onjuku.chiba|otaki.chiba|sakae.chiba|sakura.chiba|shimofusa.chiba|shirako.chiba|shiroi.chiba|shisui.chiba|sodegaura.chiba|sosa.chiba|tako.chiba|tateyama.chiba|togane.chiba|tohnosho.chiba|tomisato.chiba|urayasu.chiba|yachimata.chiba|yachiyo.chiba|yokaichiba.chiba|yokoshibahikari.chiba|yotsukaido.chiba|ainan.ehime|honai.ehime|ikata.ehime|imabari.ehime|iyo.ehime|kamijima.ehime|kihoku.ehime|kumakogen.ehime|masaki.ehime|matsuno.ehime|matsuyama.ehime|namikata.ehime|niihama.ehime|ozu.ehime|saijo.ehime|seiyo.ehime|shikokuchuo.ehime|tobe.ehime|toon.ehime|uchiko.ehime|uwajima.ehime|yawatahama.ehime|echizen.fukui|eiheiji.fukui|fukui.fukui|ikeda.fukui|katsuyama.fukui|mihama.fukui|minamiechizen.fukui|obama.fukui|ohi.fukui|ono.fukui|sabae.fukui|sakai.fukui|takahama.fukui|tsuruga.fukui|wakasa.fukui|ashiya.fukuoka|buzen.fukuoka|chikugo.fukuoka|chikuho.fukuoka|chikujo.fukuoka|chikushino.fukuoka|chikuzen.fukuoka|chuo.fukuoka|dazaifu.fukuoka|fukuchi.fukuoka|hakata.fukuoka|higashi.fukuoka|hirokawa.fukuoka|hisayama.fukuoka|iizuka.fukuoka|inatsuki.fukuoka|kaho.fukuoka|kasuga.fukuoka|kasuya.fukuoka|kawara.fukuoka|keisen.fukuoka|koga.fukuoka|kurate.fukuoka|kurogi.fukuoka|kurume.fukuoka|minami.fukuoka|miyako.fukuoka|miyama.fukuoka|miyawaka.fukuoka|mizumaki.fukuoka|munakata.fukuoka|nakagawa.fukuoka|nakama.fukuoka|nishi.fukuoka|nogata.fukuoka|ogori.fukuoka|okagaki.fukuoka|okawa.fukuoka|oki.fukuoka|omuta.fukuoka|onga.fukuoka|onojo.fukuoka|oto.fukuoka|saigawa.fukuoka|sasaguri.fukuoka|shingu.fukuoka|shinyoshitomi.fukuoka|shonai.fukuoka|soeda.fukuoka|sue.fukuoka|tachiarai.fukuoka|tagawa.fukuoka|takata.fukuoka|toho.fukuoka|toyotsu.fukuoka|tsuiki.fukuoka|ukiha.fukuoka|umi.fukuoka|usui.fukuoka|yamada.fukuoka|yame.fukuoka|yanagawa.fukuoka|yukuhashi.fukuoka|aizubange.fukushima|aizumisato.fukushima|aizuwakamatsu.fukushima|asakawa.fukushima|bandai.fukushima|date.fukushima|fukushima.fukushima|furudono.fukushima|futaba.fukushima|hanawa.fukushima|higashi.fukushima|hirata.fukushima|hirono.fukushima|iitate.fukushima|inawashiro.fukushima|ishikawa.fukushima|iwaki.fukushima|izumizaki.fukushima|kagamiishi.fukushima|kaneyama.fukushima|kawamata.fukushima|kitakata.fukushima|kitashiobara.fukushima|koori.fukushima|koriyama.fukushima|kunimi.fukushima|miharu.fukushima|mishima.fukushima|namie.fukushima|nango.fukushima|nishiaizu.fukushima|nishigo.fukushima|okuma.fukushima|omotego.fukushima|ono.fukushima|otama.fukushima|samegawa.fukushima|shimogo.fukushima|shirakawa.fukushima|showa.fukushima|soma.fukushima|sukagawa.fukushima|taishin.fukushima|tamakawa.fukushima|tanagura.fukushima|tenei.fukushima|yabuki.fukushima|yamato.fukushima|yamatsuri.fukushima|yanaizu.fukushima|yugawa.fukushima|anpachi.gifu|ena.gifu|gifu.gifu|ginan.gifu|godo.gifu|gujo.gifu|hashima.gifu|hichiso.gifu|hida.gifu|higashishirakawa.gifu|ibigawa.gifu|ikeda.gifu|kakamigahara.gifu|kani.gifu|kasahara.gifu|kasamatsu.gifu|kawaue.gifu|kitagata.gifu|mino.gifu|minokamo.gifu|mitake.gifu|mizunami.gifu|motosu.gifu|nakatsugawa.gifu|ogaki.gifu|sakahogi.gifu|seki.gifu|sekigahara.gifu|shirakawa.gifu|tajimi.gifu|takayama.gifu|tarui.gifu|toki.gifu|tomika.gifu|wanouchi.gifu|yamagata.gifu|yaotsu.gifu|yoro.gifu|annaka.gunma|chiyoda.gunma|fujioka.gunma|higashiagatsuma.gunma|isesaki.gunma|itakura.gunma|kanna.gunma|kanra.gunma|katashina.gunma|kawaba.gunma|kiryu.gunma|kusatsu.gunma|maebashi.gunma|meiwa.gunma|midori.gunma|minakami.gunma|naganohara.gunma|nakanojo.gunma|nanmoku.gunma|numata.gunma|oizumi.gunma|ora.gunma|ota.gunma|shibukawa.gunma|shimonita.gunma|shinto.gunma|showa.gunma|takasaki.gunma|takayama.gunma|tamamura.gunma|tatebayashi.gunma|tomioka.gunma|tsukiyono.gunma|tsumagoi.gunma|ueno.gunma|yoshioka.gunma|asaminami.hiroshima|daiwa.hiroshima|etajima.hiroshima|fuchu.hiroshima|fukuyama.hiroshima|hatsukaichi.hiroshima|higashihiroshima.hiroshima|hongo.hiroshima|jinsekikogen.hiroshima|kaita.hiroshima|kui.hiroshima|kumano.hiroshima|kure.hiroshima|mihara.hiroshima|miyoshi.hiroshima|naka.hiroshima|onomichi.hiroshima|osakikamijima.hiroshima|otake.hiroshima|saka.hiroshima|sera.hiroshima|seranishi.hiroshima|shinichi.hiroshima|shobara.hiroshima|takehara.hiroshima|abashiri.hokkaido|abira.hokkaido|aibetsu.hokkaido|akabira.hokkaido|akkeshi.hokkaido|asahikawa.hokkaido|ashibetsu.hokkaido|ashoro.hokkaido|assabu.hokkaido|atsuma.hokkaido|bibai.hokkaido|biei.hokkaido|bifuka.hokkaido|bihoro.hokkaido|biratori.hokkaido|chippubetsu.hokkaido|chitose.hokkaido|date.hokkaido|ebetsu.hokkaido|embetsu.hokkaido|eniwa.hokkaido|erimo.hokkaido|esan.hokkaido|esashi.hokkaido|fukagawa.hokkaido|fukushima.hokkaido|furano.hokkaido|furubira.hokkaido|haboro.hokkaido|hakodate.hokkaido|hamatonbetsu.hokkaido|hidaka.hokkaido|higashikagura.hokkaido|higashikawa.hokkaido|hiroo.hokkaido|hokuryu.hokkaido|hokuto.hokkaido|honbetsu.hokkaido|horokanai.hokkaido|horonobe.hokkaido|ikeda.hokkaido|imakane.hokkaido|ishikari.hokkaido|iwamizawa.hokkaido|iwanai.hokkaido|kamifurano.hokkaido|kamikawa.hokkaido|kamishihoro.hokkaido|kamisunagawa.hokkaido|kamoenai.hokkaido|kayabe.hokkaido|kembuchi.hokkaido|kikonai.hokkaido|kimobetsu.hokkaido|kitahiroshima.hokkaido|kitami.hokkaido|kiyosato.hokkaido|koshimizu.hokkaido|kunneppu.hokkaido|kuriyama.hokkaido|kuromatsunai.hokkaido|kushiro.hokkaido|kutchan.hokkaido|kyowa.hokkaido|mashike.hokkaido|matsumae.hokkaido|mikasa.hokkaido|minamifurano.hokkaido|mombetsu.hokkaido|moseushi.hokkaido|mukawa.hokkaido|muroran.hokkaido|naie.hokkaido|nakagawa.hokkaido|nakasatsunai.hokkaido|nakatombetsu.hokkaido|nanae.hokkaido|nanporo.hokkaido|nayoro.hokkaido|nemuro.hokkaido|niikappu.hokkaido|niki.hokkaido|nishiokoppe.hokkaido|noboribetsu.hokkaido|numata.hokkaido|obihiro.hokkaido|obira.hokkaido|oketo.hokkaido|okoppe.hokkaido|otaru.hokkaido|otobe.hokkaido|otofuke.hokkaido|otoineppu.hokkaido|oumu.hokkaido|ozora.hokkaido|pippu.hokkaido|rankoshi.hokkaido|rebun.hokkaido|rikubetsu.hokkaido|rishiri.hokkaido|rishirifuji.hokkaido|saroma.hokkaido|sarufutsu.hokkaido|shakotan.hokkaido|shari.hokkaido|shibecha.hokkaido|shibetsu.hokkaido|shikabe.hokkaido|shikaoi.hokkaido|shimamaki.hokkaido|shimizu.hokkaido|shimokawa.hokkaido|shinshinotsu.hokkaido|shintoku.hokkaido|shiranuka.hokkaido|shiraoi.hokkaido|shiriuchi.hokkaido|sobetsu.hokkaido|sunagawa.hokkaido|taiki.hokkaido|takasu.hokkaido|takikawa.hokkaido|takinoue.hokkaido|teshikaga.hokkaido|tobetsu.hokkaido|tohma.hokkaido|tomakomai.hokkaido|tomari.hokkaido|toya.hokkaido|toyako.hokkaido|toyotomi.hokkaido|toyoura.hokkaido|tsubetsu.hokkaido|tsukigata.hokkaido|urakawa.hokkaido|urausu.hokkaido|uryu.hokkaido|utashinai.hokkaido|wakkanai.hokkaido|wassamu.hokkaido|yakumo.hokkaido|yoichi.hokkaido|aioi.hyogo|akashi.hyogo|ako.hyogo|amagasaki.hyogo|aogaki.hyogo|asago.hyogo|ashiya.hyogo|awaji.hyogo|fukusaki.hyogo|goshiki.hyogo|harima.hyogo|himeji.hyogo|ichikawa.hyogo|inagawa.hyogo|itami.hyogo|kakogawa.hyogo|kamigori.hyogo|kamikawa.hyogo|kasai.hyogo|kasuga.hyogo|kawanishi.hyogo|miki.hyogo|minamiawaji.hyogo|nishinomiya.hyogo|nishiwaki.hyogo|ono.hyogo|sanda.hyogo|sannan.hyogo|sasayama.hyogo|sayo.hyogo|shingu.hyogo|shinonsen.hyogo|shiso.hyogo|sumoto.hyogo|taishi.hyogo|taka.hyogo|takarazuka.hyogo|takasago.hyogo|takino.hyogo|tamba.hyogo|tatsuno.hyogo|toyooka.hyogo|yabu.hyogo|yashiro.hyogo|yoka.hyogo|yokawa.hyogo|ami.ibaraki|asahi.ibaraki|bando.ibaraki|chikusei.ibaraki|daigo.ibaraki|fujishiro.ibaraki|hitachi.ibaraki|hitachinaka.ibaraki|hitachiomiya.ibaraki|hitachiota.ibaraki|ibaraki.ibaraki|ina.ibaraki|inashiki.ibaraki|itako.ibaraki|iwama.ibaraki|joso.ibaraki|kamisu.ibaraki|kasama.ibaraki|kashima.ibaraki|kasumigaura.ibaraki|koga.ibaraki|miho.ibaraki|mito.ibaraki|moriya.ibaraki|naka.ibaraki|namegata.ibaraki|oarai.ibaraki|ogawa.ibaraki|omitama.ibaraki|ryugasaki.ibaraki|sakai.ibaraki|sakuragawa.ibaraki|shimodate.ibaraki|shimotsuma.ibaraki|shirosato.ibaraki|sowa.ibaraki|suifu.ibaraki|takahagi.ibaraki|tamatsukuri.ibaraki|tokai.ibaraki|tomobe.ibaraki|tone.ibaraki|toride.ibaraki|tsuchiura.ibaraki|tsukuba.ibaraki|uchihara.ibaraki|ushiku.ibaraki|yachiyo.ibaraki|yamagata.ibaraki|yawara.ibaraki|yuki.ibaraki|anamizu.ishikawa|hakui.ishikawa|hakusan.ishikawa|kaga.ishikawa|kahoku.ishikawa|kanazawa.ishikawa|kawakita.ishikawa|komatsu.ishikawa|nakanoto.ishikawa|nanao.ishikawa|nomi.ishikawa|nonoichi.ishikawa|noto.ishikawa|shika.ishikawa|suzu.ishikawa|tsubata.ishikawa|tsurugi.ishikawa|uchinada.ishikawa|wajima.ishikawa|fudai.iwate|fujisawa.iwate|hanamaki.iwate|hiraizumi.iwate|hirono.iwate|ichinohe.iwate|ichinoseki.iwate|iwaizumi.iwate|iwate.iwate|joboji.iwate|kamaishi.iwate|kanegasaki.iwate|karumai.iwate|kawai.iwate|kitakami.iwate|kuji.iwate|kunohe.iwate|kuzumaki.iwate|miyako.iwate|mizusawa.iwate|morioka.iwate|ninohe.iwate|noda.iwate|ofunato.iwate|oshu.iwate|otsuchi.iwate|rikuzentakata.iwate|shiwa.iwate|shizukuishi.iwate|sumita.iwate|tanohata.iwate|tono.iwate|yahaba.iwate|yamada.iwate|ayagawa.kagawa|higashikagawa.kagawa|kanonji.kagawa|kotohira.kagawa|manno.kagawa|marugame.kagawa|mitoyo.kagawa|naoshima.kagawa|sanuki.kagawa|tadotsu.kagawa|takamatsu.kagawa|tonosho.kagawa|uchinomi.kagawa|utazu.kagawa|zentsuji.kagawa|akune.kagoshima|amami.kagoshima|hioki.kagoshima|isa.kagoshima|isen.kagoshima|izumi.kagoshima|kagoshima.kagoshima|kanoya.kagoshima|kawanabe.kagoshima|kinko.kagoshima|kouyama.kagoshima|makurazaki.kagoshima|matsumoto.kagoshima|minamitane.kagoshima|nakatane.kagoshima|nishinoomote.kagoshima|satsumasendai.kagoshima|soo.kagoshima|tarumizu.kagoshima|yusui.kagoshima|aikawa.kanagawa|atsugi.kanagawa|ayase.kanagawa|chigasaki.kanagawa|ebina.kanagawa|fujisawa.kanagawa|hadano.kanagawa|hakone.kanagawa|hiratsuka.kanagawa|isehara.kanagawa|kaisei.kanagawa|kamakura.kanagawa|kiyokawa.kanagawa|matsuda.kanagawa|minamiashigara.kanagawa|miura.kanagawa|nakai.kanagawa|ninomiya.kanagawa|odawara.kanagawa|oi.kanagawa|oiso.kanagawa|sagamihara.kanagawa|samukawa.kanagawa|tsukui.kanagawa|yamakita.kanagawa|yamato.kanagawa|yokosuka.kanagawa|yugawara.kanagawa|zama.kanagawa|zushi.kanagawa|aki.kochi|geisei.kochi|hidaka.kochi|higashitsuno.kochi|ino.kochi|kagami.kochi|kami.kochi|kitagawa.kochi|kochi.kochi|mihara.kochi|motoyama.kochi|muroto.kochi|nahari.kochi|nakamura.kochi|nankoku.kochi|nishitosa.kochi|niyodogawa.kochi|ochi.kochi|okawa.kochi|otoyo.kochi|otsuki.kochi|sakawa.kochi|sukumo.kochi|susaki.kochi|tosa.kochi|tosashimizu.kochi|toyo.kochi|tsuno.kochi|umaji.kochi|yasuda.kochi|yusuhara.kochi|amakusa.kumamoto|arao.kumamoto|aso.kumamoto|choyo.kumamoto|gyokuto.kumamoto|kamiamakusa.kumamoto|kikuchi.kumamoto|kumamoto.kumamoto|mashiki.kumamoto|mifune.kumamoto|minamata.kumamoto|minamioguni.kumamoto|nagasu.kumamoto|nishihara.kumamoto|oguni.kumamoto|ozu.kumamoto|sumoto.kumamoto|takamori.kumamoto|uki.kumamoto|uto.kumamoto|yamaga.kumamoto|yamato.kumamoto|yatsushiro.kumamoto|ayabe.kyoto|fukuchiyama.kyoto|higashiyama.kyoto|ide.kyoto|ine.kyoto|joyo.kyoto|kameoka.kyoto|kamo.kyoto|kita.kyoto|kizu.kyoto|kumiyama.kyoto|kyotamba.kyoto|kyotanabe.kyoto|kyotango.kyoto|maizuru.kyoto|minami.kyoto|minamiyamashiro.kyoto|miyazu.kyoto|muko.kyoto|nagaokakyo.kyoto|nakagyo.kyoto|nantan.kyoto|oyamazaki.kyoto|sakyo.kyoto|seika.kyoto|tanabe.kyoto|uji.kyoto|ujitawara.kyoto|wazuka.kyoto|yamashina.kyoto|yawata.kyoto|asahi.mie|inabe.mie|ise.mie|kameyama.mie|kawagoe.mie|kiho.mie|kisosaki.mie|kiwa.mie|komono.mie|kumano.mie|kuwana.mie|matsusaka.mie|meiwa.mie|mihama.mie|minamiise.mie|misugi.mie|miyama.mie|nabari.mie|shima.mie|suzuka.mie|tado.mie|taiki.mie|taki.mie|tamaki.mie|toba.mie|tsu.mie|udono.mie|ureshino.mie|watarai.mie|yokkaichi.mie|furukawa.miyagi|higashimatsushima.miyagi|ishinomaki.miyagi|iwanuma.miyagi|kakuda.miyagi|kami.miyagi|kawasaki.miyagi|marumori.miyagi|matsushima.miyagi|minamisanriku.miyagi|misato.miyagi|murata.miyagi|natori.miyagi|ogawara.miyagi|ohira.miyagi|onagawa.miyagi|osaki.miyagi|rifu.miyagi|semine.miyagi|shibata.miyagi|shichikashuku.miyagi|shikama.miyagi|shiogama.miyagi|shiroishi.miyagi|tagajo.miyagi|taiwa.miyagi|tome.miyagi|tomiya.miyagi|wakuya.miyagi|watari.miyagi|yamamoto.miyagi|zao.miyagi|aya.miyazaki|ebino.miyazaki|gokase.miyazaki|hyuga.miyazaki|kadogawa.miyazaki|kawaminami.miyazaki|kijo.miyazaki|kitagawa.miyazaki|kitakata.miyazaki|kitaura.miyazaki|kobayashi.miyazaki|kunitomi.miyazaki|kushima.miyazaki|mimata.miyazaki|miyakonojo.miyazaki|miyazaki.miyazaki|morotsuka.miyazaki|nichinan.miyazaki|nishimera.miyazaki|nobeoka.miyazaki|saito.miyazaki|shiiba.miyazaki|shintomi.miyazaki|takaharu.miyazaki|takanabe.miyazaki|takazaki.miyazaki|tsuno.miyazaki|achi.nagano|agematsu.nagano|anan.nagano|aoki.nagano|asahi.nagano|azumino.nagano|chikuhoku.nagano|chikuma.nagano|chino.nagano|fujimi.nagano|hakuba.nagano|hara.nagano|hiraya.nagano|iida.nagano|iijima.nagano|iiyama.nagano|iizuna.nagano|ikeda.nagano|ikusaka.nagano|ina.nagano|karuizawa.nagano|kawakami.nagano|kiso.nagano|kisofukushima.nagano|kitaaiki.nagano|komagane.nagano|komoro.nagano|matsukawa.nagano|matsumoto.nagano|miasa.nagano|minamiaiki.nagano|minamimaki.nagano|minamiminowa.nagano|minowa.nagano|miyada.nagano|miyota.nagano|mochizuki.nagano|nagano.nagano|nagawa.nagano|nagiso.nagano|nakagawa.nagano|nakano.nagano|nozawaonsen.nagano|obuse.nagano|ogawa.nagano|okaya.nagano|omachi.nagano|omi.nagano|ookuwa.nagano|ooshika.nagano|otaki.nagano|otari.nagano|sakae.nagano|sakaki.nagano|saku.nagano|sakuho.nagano|shimosuwa.nagano|shinanomachi.nagano|shiojiri.nagano|suwa.nagano|suzaka.nagano|takagi.nagano|takamori.nagano|takayama.nagano|tateshina.nagano|tatsuno.nagano|togakushi.nagano|togura.nagano|tomi.nagano|ueda.nagano|wada.nagano|yamagata.nagano|yamanouchi.nagano|yasaka.nagano|yasuoka.nagano|chijiwa.nagasaki|futsu.nagasaki|goto.nagasaki|hasami.nagasaki|hirado.nagasaki|iki.nagasaki|isahaya.nagasaki|kawatana.nagasaki|kuchinotsu.nagasaki|matsuura.nagasaki|nagasaki.nagasaki|obama.nagasaki|omura.nagasaki|oseto.nagasaki|saikai.nagasaki|sasebo.nagasaki|seihi.nagasaki|shimabara.nagasaki|shinkamigoto.nagasaki|togitsu.nagasaki|tsushima.nagasaki|unzen.nagasaki|ando.nara|gose.nara|heguri.nara|higashiyoshino.nara|ikaruga.nara|ikoma.nara|kamikitayama.nara|kanmaki.nara|kashiba.nara|kashihara.nara|katsuragi.nara|kawai.nara|kawakami.nara|kawanishi.nara|koryo.nara|kurotaki.nara|mitsue.nara|miyake.nara|nara.nara|nosegawa.nara|oji.nara|ouda.nara|oyodo.nara|sakurai.nara|sango.nara|shimoichi.nara|shimokitayama.nara|shinjo.nara|soni.nara|takatori.nara|tawaramoto.nara|tenkawa.nara|tenri.nara|uda.nara|yamatokoriyama.nara|yamatotakada.nara|yamazoe.nara|yoshino.nara|aga.niigata|agano.niigata|gosen.niigata|itoigawa.niigata|izumozaki.niigata|joetsu.niigata|kamo.niigata|kariwa.niigata|kashiwazaki.niigata|minamiuonuma.niigata|mitsuke.niigata|muika.niigata|murakami.niigata|myoko.niigata|nagaoka.niigata|niigata.niigata|ojiya.niigata|omi.niigata|sado.niigata|sanjo.niigata|seiro.niigata|seirou.niigata|sekikawa.niigata|shibata.niigata|tagami.niigata|tainai.niigata|tochio.niigata|tokamachi.niigata|tsubame.niigata|tsunan.niigata|uonuma.niigata|yahiko.niigata|yoita.niigata|yuzawa.niigata|beppu.oita|bungoono.oita|bungotakada.oita|hasama.oita|hiji.oita|himeshima.oita|hita.oita|kamitsue.oita|kokonoe.oita|kuju.oita|kunisaki.oita|kusu.oita|oita.oita|saiki.oita|taketa.oita|tsukumi.oita|usa.oita|usuki.oita|yufu.oita|akaiwa.okayama|asakuchi.okayama|bizen.okayama|hayashima.okayama|ibara.okayama|kagamino.okayama|kasaoka.okayama|kibichuo.okayama|kumenan.okayama|kurashiki.okayama|maniwa.okayama|misaki.okayama|nagi.okayama|niimi.okayama|nishiawakura.okayama|okayama.okayama|satosho.okayama|setouchi.okayama|shinjo.okayama|shoo.okayama|soja.okayama|takahashi.okayama|tamano.okayama|tsuyama.okayama|wake.okayama|yakage.okayama|aguni.okinawa|ginowan.okinawa|ginoza.okinawa|gushikami.okinawa|haebaru.okinawa|higashi.okinawa|hirara.okinawa|iheya.okinawa|ishigaki.okinawa|ishikawa.okinawa|itoman.okinawa|izena.okinawa|kadena.okinawa|kin.okinawa|kitadaito.okinawa|kitanakagusuku.okinawa|kumejima.okinawa|kunigami.okinawa|minamidaito.okinawa|motobu.okinawa|nago.okinawa|naha.okinawa|nakagusuku.okinawa|nakijin.okinawa|nanjo.okinawa|nishihara.okinawa|ogimi.okinawa|okinawa.okinawa|onna.okinawa|shimoji.okinawa|taketomi.okinawa|tarama.okinawa|tokashiki.okinawa|tomigusuku.okinawa|tonaki.okinawa|urasoe.okinawa|uruma.okinawa|yaese.okinawa|yomitan.okinawa|yonabaru.okinawa|yonaguni.okinawa|zamami.okinawa|abeno.osaka|chihayaakasaka.osaka|chuo.osaka|daito.osaka|fujiidera.osaka|habikino.osaka|hannan.osaka|higashiosaka.osaka|higashisumiyoshi.osaka|higashiyodogawa.osaka|hirakata.osaka|ibaraki.osaka|ikeda.osaka|izumi.osaka|izumiotsu.osaka|izumisano.osaka|kadoma.osaka|kaizuka.osaka|kanan.osaka|kashiwara.osaka|katano.osaka|kawachinagano.osaka|kishiwada.osaka|kita.osaka|kumatori.osaka|matsubara.osaka|minato.osaka|minoh.osaka|misaki.osaka|moriguchi.osaka|neyagawa.osaka|nishi.osaka|nose.osaka|osakasayama.osaka|sakai.osaka|sayama.osaka|sennan.osaka|settsu.osaka|shijonawate.osaka|shimamoto.osaka|suita.osaka|tadaoka.osaka|taishi.osaka|tajiri.osaka|takaishi.osaka|takatsuki.osaka|tondabayashi.osaka|toyonaka.osaka|toyono.osaka|yao.osaka|ariake.saga|arita.saga|fukudomi.saga|genkai.saga|hamatama.saga|hizen.saga|imari.saga|kamimine.saga|kanzaki.saga|karatsu.saga|kashima.saga|kitagata.saga|kitahata.saga|kiyama.saga|kouhoku.saga|kyuragi.saga|nishiarita.saga|ogi.saga|omachi.saga|ouchi.saga|saga.saga|shiroishi.saga|taku.saga|tara.saga|tosu.saga|yoshinogari.saga|arakawa.saitama|asaka.saitama|chichibu.saitama|fujimi.saitama|fujimino.saitama|fukaya.saitama|hanno.saitama|hanyu.saitama|hasuda.saitama|hatogaya.saitama|hatoyama.saitama|hidaka.saitama|higashichichibu.saitama|higashimatsuyama.saitama|honjo.saitama|ina.saitama|iruma.saitama|iwatsuki.saitama|kamiizumi.saitama|kamikawa.saitama|kamisato.saitama|kasukabe.saitama|kawagoe.saitama|kawaguchi.saitama|kawajima.saitama|kazo.saitama|kitamoto.saitama|koshigaya.saitama|kounosu.saitama|kuki.saitama|kumagaya.saitama|matsubushi.saitama|minano.saitama|misato.saitama|miyashiro.saitama|miyoshi.saitama|moroyama.saitama|nagatoro.saitama|namegawa.saitama|niiza.saitama|ogano.saitama|ogawa.saitama|ogose.saitama|okegawa.saitama|omiya.saitama|otaki.saitama|ranzan.saitama|ryokami.saitama|saitama.saitama|sakado.saitama|satte.saitama|sayama.saitama|shiki.saitama|shiraoka.saitama|soka.saitama|sugito.saitama|toda.saitama|tokigawa.saitama|tokorozawa.saitama|tsurugashima.saitama|urawa.saitama|warabi.saitama|yashio.saitama|yokoze.saitama|yono.saitama|yorii.saitama|yoshida.saitama|yoshikawa.saitama|yoshimi.saitama|aisho.shiga|gamo.shiga|higashiomi.shiga|hikone.shiga|koka.shiga|konan.shiga|kosei.shiga|koto.shiga|kusatsu.shiga|maibara.shiga|moriyama.shiga|nagahama.shiga|nishiazai.shiga|notogawa.shiga|omihachiman.shiga|otsu.shiga|ritto.shiga|ryuoh.shiga|takashima.shiga|takatsuki.shiga|torahime.shiga|toyosato.shiga|yasu.shiga|akagi.shimane|ama.shimane|gotsu.shimane|hamada.shimane|higashiizumo.shimane|hikawa.shimane|hikimi.shimane|izumo.shimane|kakinoki.shimane|masuda.shimane|matsue.shimane|misato.shimane|nishinoshima.shimane|ohda.shimane|okinoshima.shimane|okuizumo.shimane|shimane.shimane|tamayu.shimane|tsuwano.shimane|unnan.shimane|yakumo.shimane|yasugi.shimane|yatsuka.shimane|arai.shizuoka|atami.shizuoka|fuji.shizuoka|fujieda.shizuoka|fujikawa.shizuoka|fujinomiya.shizuoka|fukuroi.shizuoka|gotemba.shizuoka|haibara.shizuoka|hamamatsu.shizuoka|higashiizu.shizuoka|ito.shizuoka|iwata.shizuoka|izu.shizuoka|izunokuni.shizuoka|kakegawa.shizuoka|kannami.shizuoka|kawanehon.shizuoka|kawazu.shizuoka|kikugawa.shizuoka|kosai.shizuoka|makinohara.shizuoka|matsuzaki.shizuoka|minamiizu.shizuoka|mishima.shizuoka|morimachi.shizuoka|nishiizu.shizuoka|numazu.shizuoka|omaezaki.shizuoka|shimada.shizuoka|shimizu.shizuoka|shimoda.shizuoka|shizuoka.shizuoka|susono.shizuoka|yaizu.shizuoka|yoshida.shizuoka|ashikaga.tochigi|bato.tochigi|haga.tochigi|ichikai.tochigi|iwafune.tochigi|kaminokawa.tochigi|kanuma.tochigi|karasuyama.tochigi|kuroiso.tochigi|mashiko.tochigi|mibu.tochigi|moka.tochigi|motegi.tochigi|nasu.tochigi|nasushiobara.tochigi|nikko.tochigi|nishikata.tochigi|nogi.tochigi|ohira.tochigi|ohtawara.tochigi|oyama.tochigi|sakura.tochigi|sano.tochigi|shimotsuke.tochigi|shioya.tochigi|takanezawa.tochigi|tochigi.tochigi|tsuga.tochigi|ujiie.tochigi|utsunomiya.tochigi|yaita.tochigi|aizumi.tokushima|anan.tokushima|ichiba.tokushima|itano.tokushima|kainan.tokushima|komatsushima.tokushima|matsushige.tokushima|mima.tokushima|minami.tokushima|miyoshi.tokushima|mugi.tokushima|nakagawa.tokushima|naruto.tokushima|sanagochi.tokushima|shishikui.tokushima|tokushima.tokushima|wajiki.tokushima|adachi.tokyo|akiruno.tokyo|akishima.tokyo|aogashima.tokyo|arakawa.tokyo|bunkyo.tokyo|chiyoda.tokyo|chofu.tokyo|chuo.tokyo|edogawa.tokyo|fuchu.tokyo|fussa.tokyo|hachijo.tokyo|hachioji.tokyo|hamura.tokyo|higashikurume.tokyo|higashimurayama.tokyo|higashiyamato.tokyo|hino.tokyo|hinode.tokyo|hinohara.tokyo|inagi.tokyo|itabashi.tokyo|katsushika.tokyo|kita.tokyo|kiyose.tokyo|kodaira.tokyo|koganei.tokyo|kokubunji.tokyo|komae.tokyo|koto.tokyo|kouzushima.tokyo|kunitachi.tokyo|machida.tokyo|meguro.tokyo|minato.tokyo|mitaka.tokyo|mizuho.tokyo|musashimurayama.tokyo|musashino.tokyo|nakano.tokyo|nerima.tokyo|ogasawara.tokyo|okutama.tokyo|ome.tokyo|oshima.tokyo|ota.tokyo|setagaya.tokyo|shibuya.tokyo|shinagawa.tokyo|shinjuku.tokyo|suginami.tokyo|sumida.tokyo|tachikawa.tokyo|taito.tokyo|tama.tokyo|toshima.tokyo|chizu.tottori|hino.tottori|kawahara.tottori|koge.tottori|kotoura.tottori|misasa.tottori|nanbu.tottori|nichinan.tottori|sakaiminato.tottori|tottori.tottori|wakasa.tottori|yazu.tottori|yonago.tottori|asahi.toyama|fuchu.toyama|fukumitsu.toyama|funahashi.toyama|himi.toyama|imizu.toyama|inami.toyama|johana.toyama|kamiichi.toyama|kurobe.toyama|nakaniikawa.toyama|namerikawa.toyama|nanto.toyama|nyuzen.toyama|oyabe.toyama|taira.toyama|takaoka.toyama|tateyama.toyama|toga.toyama|tonami.toyama|toyama.toyama|unazuki.toyama|uozu.toyama|yamada.toyama|arida.wakayama|aridagawa.wakayama|gobo.wakayama|hashimoto.wakayama|hidaka.wakayama|hirogawa.wakayama|inami.wakayama|iwade.wakayama|kainan.wakayama|kamitonda.wakayama|katsuragi.wakayama|kimino.wakayama|kinokawa.wakayama|kitayama.wakayama|koya.wakayama|koza.wakayama|kozagawa.wakayama|kudoyama.wakayama|kushimoto.wakayama|mihama.wakayama|misato.wakayama|nachikatsuura.wakayama|shingu.wakayama|shirahama.wakayama|taiji.wakayama|tanabe.wakayama|wakayama.wakayama|yuasa.wakayama|yura.wakayama|asahi.yamagata|funagata.yamagata|higashine.yamagata|iide.yamagata|kahoku.yamagata|kaminoyama.yamagata|kaneyama.yamagata|kawanishi.yamagata|mamurogawa.yamagata|mikawa.yamagata|murayama.yamagata|nagai.yamagata|nakayama.yamagata|nanyo.yamagata|nishikawa.yamagata|obanazawa.yamagata|oe.yamagata|oguni.yamagata|ohkura.yamagata|oishida.yamagata|sagae.yamagata|sakata.yamagata|sakegawa.yamagata|shinjo.yamagata|shirataka.yamagata|shonai.yamagata|takahata.yamagata|tendo.yamagata|tozawa.yamagata|tsuruoka.yamagata|yamagata.yamagata|yamanobe.yamagata|yonezawa.yamagata|yuza.yamagata|abu.yamaguchi|hagi.yamaguchi|hikari.yamaguchi|hofu.yamaguchi|iwakuni.yamaguchi|kudamatsu.yamaguchi|mitou.yamaguchi|nagato.yamaguchi|oshima.yamaguchi|shimonoseki.yamaguchi|shunan.yamaguchi|tabuse.yamaguchi|tokuyama.yamaguchi|toyota.yamaguchi|ube.yamaguchi|yuu.yamaguchi|chuo.yamanashi|doshi.yamanashi|fuefuki.yamanashi|fujikawa.yamanashi|fujikawaguchiko.yamanashi|fujiyoshida.yamanashi|hayakawa.yamanashi|hokuto.yamanashi|ichikawamisato.yamanashi|kai.yamanashi|kofu.yamanashi|koshu.yamanashi|kosuge.yamanashi|minami-alps.yamanashi|minobu.yamanashi|nakamichi.yamanashi|nanbu.yamanashi|narusawa.yamanashi|nirasaki.yamanashi|nishikatsura.yamanashi|oshino.yamanashi|otsuki.yamanashi|showa.yamanashi|tabayama.yamanashi|tsuru.yamanashi|uenohara.yamanashi|yamanakako.yamanashi|yamanashi.yamanashi|blogspot","ke":"*|blogspot.co","kg":"org|net|com|edu|gov|mil","kh":"*","ki":"edu|biz|net|org|gov|info|com","km":"org|nom|gov|prd|tm|edu|mil|ass|com|coop|asso|presse|medecin|notaires|pharmaciens|veterinaire|gouv","kn":"net|org|edu|gov","kp":"com|edu|gov|org|rep|tra","kr":"ac|co|es|go|hs|kg|mil|ms|ne|or|pe|re|sc|busan|chungbuk|chungnam|daegu|daejeon|gangwon|gwangju|gyeongbuk|gyeonggi|gyeongnam|incheon|jeju|jeonbuk|jeonnam|seoul|ulsan|blogspot","kw":"*","ky":"edu|gov|com|org|net","kz":"org|edu|net|gov|mil|com|nym","la":"int|net|info|edu|gov|per|com|org|bnr|c|nym","lb":"com|edu|gov|net|org","lc":"com|net|co|org|edu|gov|oy","li":"blogspot|nom|nym","lk":"gov|sch|net|int|com|org|edu|ngo|soc|web|ltd|assn|grp|hotel|ac","lr":"com|edu|gov|org|net","ls":"co|org","lt":"gov|blogspot|nym","lu":"blogspot|nym","lv":"com|edu|gov|org|mil|id|net|asn|conf","ly":"com|net|gov|plc|edu|sch|med|org|id","ma":"co|net|gov|org|ac|press","mc":"tm|asso","md":"blogspot","me":"co|net|org|edu|ac|gov|its|priv|c66|daplie|localhost.daplie|filegear|brasilia|ddns|dnsfor|hopto|loginto|noip|webhop|nym|diskstation|dscloud|i234|myds|synology|wedeploy|yombo","mg":"org|nom|gov|prd|tm|edu|mil|com|co","mh":"","mil":"","mk":"com|org|net|edu|gov|inf|name|blogspot|nom","ml":"com|edu|gouv|gov|net|org|presse","mm":"*","mn":"gov|edu|org|nyc","mo":"com|net|org|edu|gov","mobi":"dscloud","mp":"","mq":"","mr":"gov|blogspot","ms":"com|edu|gov|net|org","mt":"com|edu|net|org|blogspot.com","mu":"com|net|org|gov|ac|co|or","museum":"academy|agriculture|air|airguard|alabama|alaska|amber|ambulance|american|americana|americanantiques|americanart|amsterdam|and|annefrank|anthro|anthropology|antiques|aquarium|arboretum|archaeological|archaeology|architecture|art|artanddesign|artcenter|artdeco|arteducation|artgallery|arts|artsandcrafts|asmatart|assassination|assisi|association|astronomy|atlanta|austin|australia|automotive|aviation|axis|badajoz|baghdad|bahn|bale|baltimore|barcelona|baseball|basel|baths|bauern|beauxarts|beeldengeluid|bellevue|bergbau|berkeley|berlin|bern|bible|bilbao|bill|birdart|birthplace|bonn|boston|botanical|botanicalgarden|botanicgarden|botany|brandywinevalley|brasil|bristol|british|britishcolumbia|broadcast|brunel|brussel|brussels|bruxelles|building|burghof|bus|bushey|cadaques|california|cambridge|can|canada|capebreton|carrier|cartoonart|casadelamoneda|castle|castres|celtic|center|chattanooga|cheltenham|chesapeakebay|chicago|children|childrens|childrensgarden|chiropractic|chocolate|christiansburg|cincinnati|cinema|circus|civilisation|civilization|civilwar|clinton|clock|coal|coastaldefence|cody|coldwar|collection|colonialwilliamsburg|coloradoplateau|columbia|columbus|communication|communications|community|computer|computerhistory|xn--comunicaes-v6a2o|contemporary|contemporaryart|convent|copenhagen|corporation|xn--correios-e-telecomunicaes-ghc29a|corvette|costume|countryestate|county|crafts|cranbrook|creation|cultural|culturalcenter|culture|cyber|cymru|dali|dallas|database|ddr|decorativearts|delaware|delmenhorst|denmark|depot|design|detroit|dinosaur|discovery|dolls|donostia|durham|eastafrica|eastcoast|education|educational|egyptian|eisenbahn|elburg|elvendrell|embroidery|encyclopedic|england|entomology|environment|environmentalconservation|epilepsy|essex|estate|ethnology|exeter|exhibition|family|farm|farmequipment|farmers|farmstead|field|figueres|filatelia|film|fineart|finearts|finland|flanders|florida|force|fortmissoula|fortworth|foundation|francaise|frankfurt|franziskaner|freemasonry|freiburg|fribourg|frog|fundacio|furniture|gallery|garden|gateway|geelvinck|gemological|geology|georgia|giessen|glas|glass|gorge|grandrapids|graz|guernsey|halloffame|hamburg|handson|harvestcelebration|hawaii|health|heimatunduhren|hellas|helsinki|hembygdsforbund|heritage|histoire|historical|historicalsociety|historichouses|historisch|historisches|history|historyofscience|horology|house|humanities|illustration|imageandsound|indian|indiana|indianapolis|indianmarket|intelligence|interactive|iraq|iron|isleofman|jamison|jefferson|jerusalem|jewelry|jewish|jewishart|jfk|journalism|judaica|judygarland|juedisches|juif|karate|karikatur|kids|koebenhavn|koeln|kunst|kunstsammlung|kunstunddesign|labor|labour|lajolla|lancashire|landes|lans|xn--lns-qla|larsson|lewismiller|lincoln|linz|living|livinghistory|localhistory|london|losangeles|louvre|loyalist|lucerne|luxembourg|luzern|mad|madrid|mallorca|manchester|mansion|mansions|manx|marburg|maritime|maritimo|maryland|marylhurst|media|medical|medizinhistorisches|meeres|memorial|mesaverde|michigan|midatlantic|military|mill|miners|mining|minnesota|missile|missoula|modern|moma|money|monmouth|monticello|montreal|moscow|motorcycle|muenchen|muenster|mulhouse|muncie|museet|museumcenter|museumvereniging|music|national|nationalfirearms|nationalheritage|nativeamerican|naturalhistory|naturalhistorymuseum|naturalsciences|nature|naturhistorisches|natuurwetenschappen|naumburg|naval|nebraska|neues|newhampshire|newjersey|newmexico|newport|newspaper|newyork|niepce|norfolk|north|nrw|nuernberg|nuremberg|nyc|nyny|oceanographic|oceanographique|omaha|online|ontario|openair|oregon|oregontrail|otago|oxford|pacific|paderborn|palace|paleo|palmsprings|panama|paris|pasadena|pharmacy|philadelphia|philadelphiaarea|philately|phoenix|photography|pilots|pittsburgh|planetarium|plantation|plants|plaza|portal|portland|portlligat|posts-and-telecommunications|preservation|presidio|press|project|public|pubol|quebec|railroad|railway|research|resistance|riodejaneiro|rochester|rockart|roma|russia|saintlouis|salem|salvadordali|salzburg|sandiego|sanfrancisco|santabarbara|santacruz|santafe|saskatchewan|satx|savannahga|schlesisches|schoenbrunn|schokoladen|school|schweiz|science|scienceandhistory|scienceandindustry|sciencecenter|sciencecenters|science-fiction|sciencehistory|sciences|sciencesnaturelles|scotland|seaport|settlement|settlers|shell|sherbrooke|sibenik|silk|ski|skole|society|sologne|soundandvision|southcarolina|southwest|space|spy|square|stadt|stalbans|starnberg|state|stateofdelaware|station|steam|steiermark|stjohn|stockholm|stpetersburg|stuttgart|suisse|surgeonshall|surrey|svizzera|sweden|sydney|tank|tcm|technology|telekommunikation|television|texas|textile|theater|time|timekeeping|topology|torino|touch|town|transport|tree|trolley|trust|trustee|uhren|ulm|undersea|university|usa|usantiques|usarts|uscountryestate|usculture|usdecorativearts|usgarden|ushistory|ushuaia|uslivinghistory|utah|uvic|valley|vantaa|versailles|viking|village|virginia|virtual|virtuel|vlaanderen|volkenkunde|wales|wallonie|war|washingtondc|watchandclock|watch-and-clock|western|westfalen|whaling|wildlife|williamsburg|windmill|workshop|york|yorkshire|yosemite|youth|zoological|zoology|xn--9dbhblg6di|xn--h1aegh","mv":"aero|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro","mw":"ac|biz|co|com|coop|edu|gov|int|museum|net|org","mx":"com|org|gob|edu|net|blogspot|nym","my":"com|net|org|gov|edu|mil|name|blogspot","mz":"ac|adv|co|edu|gov|mil|net|org","na":"info|pro|name|school|or|dr|us|mx|ca|in|cc|tv|ws|mobi|co|com|org","name":"forgot.her|forgot.his","nc":"asso|nom","ne":"","net":"*alwaysdata|cloudfront|t3l3p0rt|myfritz|boomla|bplaced|square7|gb|hu|jp|se|uk|in|cloudaccess|cdn77-ssl|r.cdn77|feste-ip|knx-server|static-access|*cryptonomic|debian|at-band-camp|blogdns|broke-it|buyshouses|dnsalias|dnsdojo|does-it|dontexist|dynalias|dynathome|endofinternet|from-az|from-co|from-la|from-ny|gets-it|ham-radio-op|homeftp|homeip|homelinux|homeunix|in-the-band|is-a-chef|is-a-geek|isa-geek|kicks-ass|office-on-the|podzone|scrapper-site|selfip|sells-it|servebbs|serveftp|thruhere|webhop|definima|casacam|dynu|dynv6|twmail|ru|channelsdvr|fastlylb|map.fastlylb|freetls.fastly|map.fastly|a.prod.fastly|global.prod.fastly|a.ssl.fastly|b.ssl.fastly|global.ssl.fastly|flynnhosting|cloudfunctions|moonscale|ipifony|barsy|azurewebsites|azure-mobile|cloudapp|eating-organic|mydissent|myeffect|mymediapc|mypsx|mysecuritycamera|nhlfan|no-ip|pgafan|privatizehealthinsurance|bounceme|ddns|redirectme|serveblog|serveminecraft|sytes|rackmaze|firewall-gateway|dsmynas|familyds|za","nf":"com|net|per|rec|web|arts|firm|info|other|store","ng":"com|edu|gov|i|mil|mobi|name|net|org|sch|blogspot.com","ni":"ac|biz|co|com|edu|gob|in|info|int|mil|net|nom|org|web","nl":"bv|virtueeldomein|co|blogspot|*transurl|cistron|demon","no":"fhs|vgs|fylkesbibl|folkebibl|museum|idrett|priv|mil|stat|dep|kommune|herad|aa|ah|bu|fm|hl|hm|jan-mayen|mr|nl|nt|of|ol|oslo|rl|sf|st|svalbard|tm|tr|va|vf|gs.aa|gs.ah|gs.bu|gs.fm|gs.hl|gs.hm|gs.jan-mayen|gs.mr|gs.nl|gs.nt|gs.of|gs.ol|gs.oslo|gs.rl|gs.sf|gs.st|gs.svalbard|gs.tm|gs.tr|gs.va|gs.vf|akrehamn|xn--krehamn-dxa|algard|xn--lgrd-poac|arna|brumunddal|bryne|bronnoysund|xn--brnnysund-m8ac|drobak|xn--drbak-wua|egersund|fetsund|floro|xn--flor-jra|fredrikstad|hokksund|honefoss|xn--hnefoss-q1a|jessheim|jorpeland|xn--jrpeland-54a|kirkenes|kopervik|krokstadelva|langevag|xn--langevg-jxa|leirvik|mjondalen|xn--mjndalen-64a|mo-i-rana|mosjoen|xn--mosjen-eya|nesoddtangen|orkanger|osoyro|xn--osyro-wua|raholt|xn--rholt-mra|sandnessjoen|xn--sandnessjen-ogb|skedsmokorset|slattum|spjelkavik|stathelle|stavern|stjordalshalsen|xn--stjrdalshalsen-sqb|tananger|tranby|vossevangen|afjord|xn--fjord-lra|agdenes|al|xn--l-1fa|alesund|xn--lesund-hua|alstahaug|alta|xn--lt-liac|alaheadju|xn--laheadju-7ya|alvdal|amli|xn--mli-tla|amot|xn--mot-tla|andebu|andoy|xn--andy-ira|andasuolo|ardal|xn--rdal-poa|aremark|arendal|xn--s-1fa|aseral|xn--seral-lra|asker|askim|askvoll|askoy|xn--asky-ira|asnes|xn--snes-poa|audnedaln|aukra|aure|aurland|aurskog-holand|xn--aurskog-hland-jnb|austevoll|austrheim|averoy|xn--avery-yua|balestrand|ballangen|balat|xn--blt-elab|balsfjord|bahccavuotna|xn--bhccavuotna-k7a|bamble|bardu|beardu|beiarn|bajddar|xn--bjddar-pta|baidar|xn--bidr-5nac|berg|bergen|berlevag|xn--berlevg-jxa|bearalvahki|xn--bearalvhki-y4a|bindal|birkenes|bjarkoy|xn--bjarky-fya|bjerkreim|bjugn|bodo|xn--bod-2na|badaddja|xn--bdddj-mrabd|budejju|bokn|bremanger|bronnoy|xn--brnny-wuac|bygland|bykle|barum|xn--brum-voa|bo.telemark|xn--b-5ga.telemark|bo.nordland|xn--b-5ga.nordland|bievat|xn--bievt-0qa|bomlo|xn--bmlo-gra|batsfjord|xn--btsfjord-9za|bahcavuotna|xn--bhcavuotna-s4a|dovre|drammen|drangedal|dyroy|xn--dyry-ira|donna|xn--dnna-gra|eid|eidfjord|eidsberg|eidskog|eidsvoll|eigersund|elverum|enebakk|engerdal|etne|etnedal|evenes|evenassi|xn--eveni-0qa01ga|evje-og-hornnes|farsund|fauske|fuossko|fuoisku|fedje|fet|finnoy|xn--finny-yua|fitjar|fjaler|fjell|flakstad|flatanger|flekkefjord|flesberg|flora|fla|xn--fl-zia|folldal|forsand|fosnes|frei|frogn|froland|frosta|frana|xn--frna-woa|froya|xn--frya-hra|fusa|fyresdal|forde|xn--frde-gra|gamvik|gangaviika|xn--ggaviika-8ya47h|gaular|gausdal|gildeskal|xn--gildeskl-g0a|giske|gjemnes|gjerdrum|gjerstad|gjesdal|gjovik|xn--gjvik-wua|gloppen|gol|gran|grane|granvin|gratangen|grimstad|grong|kraanghke|xn--kranghke-b0a|grue|gulen|hadsel|halden|halsa|hamar|hamaroy|habmer|xn--hbmer-xqa|hapmir|xn--hpmir-xqa|hammerfest|hammarfeasta|xn--hmmrfeasta-s4ac|haram|hareid|harstad|hasvik|aknoluokta|xn--koluokta-7ya57h|hattfjelldal|aarborte|haugesund|hemne|hemnes|hemsedal|heroy.more-og-romsdal|xn--hery-ira.xn--mre-og-romsdal-qqb|heroy.nordland|xn--hery-ira.nordland|hitra|hjartdal|hjelmeland|hobol|xn--hobl-ira|hof|hol|hole|holmestrand|holtalen|xn--holtlen-hxa|hornindal|horten|hurdal|hurum|hvaler|hyllestad|hagebostad|xn--hgebostad-g3a|hoyanger|xn--hyanger-q1a|hoylandet|xn--hylandet-54a|ha|xn--h-2fa|ibestad|inderoy|xn--indery-fya|iveland|jevnaker|jondal|jolster|xn--jlster-bya|karasjok|karasjohka|xn--krjohka-hwab49j|karlsoy|galsa|xn--gls-elac|karmoy|xn--karmy-yua|kautokeino|guovdageaidnu|klepp|klabu|xn--klbu-woa|kongsberg|kongsvinger|kragero|xn--krager-gya|kristiansand|kristiansund|krodsherad|xn--krdsherad-m8a|kvalsund|rahkkeravju|xn--rhkkervju-01af|kvam|kvinesdal|kvinnherad|kviteseid|kvitsoy|xn--kvitsy-fya|kvafjord|xn--kvfjord-nxa|giehtavuoatna|kvanangen|xn--kvnangen-k0a|navuotna|xn--nvuotna-hwa|kafjord|xn--kfjord-iua|gaivuotna|xn--givuotna-8ya|larvik|lavangen|lavagis|loabat|xn--loabt-0qa|lebesby|davvesiida|leikanger|leirfjord|leka|leksvik|lenvik|leangaviika|xn--leagaviika-52b|lesja|levanger|lier|lierne|lillehammer|lillesand|lindesnes|lindas|xn--linds-pra|lom|loppa|lahppi|xn--lhppi-xqa|lund|lunner|luroy|xn--lury-ira|luster|lyngdal|lyngen|ivgu|lardal|lerdal|xn--lrdal-sra|lodingen|xn--ldingen-q1a|lorenskog|xn--lrenskog-54a|loten|xn--lten-gra|malvik|masoy|xn--msy-ula0h|muosat|xn--muost-0qa|mandal|marker|marnardal|masfjorden|meland|meldal|melhus|meloy|xn--mely-ira|meraker|xn--merker-kua|moareke|xn--moreke-jua|midsund|midtre-gauldal|modalen|modum|molde|moskenes|moss|mosvik|malselv|xn--mlselv-iua|malatvuopmi|xn--mlatvuopmi-s4a|namdalseid|aejrie|namsos|namsskogan|naamesjevuemie|xn--nmesjevuemie-tcba|laakesvuemie|nannestad|narvik|narviika|naustdal|nedre-eiker|nes.akershus|nes.buskerud|nesna|nesodden|nesseby|unjarga|xn--unjrga-rta|nesset|nissedal|nittedal|nord-aurdal|nord-fron|nord-odal|norddal|nordkapp|davvenjarga|xn--davvenjrga-y4a|nordre-land|nordreisa|raisa|xn--risa-5na|nore-og-uvdal|notodden|naroy|xn--nry-yla5g|notteroy|xn--nttery-byae|odda|oksnes|xn--ksnes-uua|oppdal|oppegard|xn--oppegrd-ixa|orkdal|orland|xn--rland-uua|orskog|xn--rskog-uua|orsta|xn--rsta-fra|os.hedmark|os.hordaland|osen|osteroy|xn--ostery-fya|ostre-toten|xn--stre-toten-zcb|overhalla|ovre-eiker|xn--vre-eiker-k8a|oyer|xn--yer-zna|oygarden|xn--ygarden-p1a|oystre-slidre|xn--ystre-slidre-ujb|porsanger|porsangu|xn--porsgu-sta26f|porsgrunn|radoy|xn--rady-ira|rakkestad|rana|ruovat|randaberg|rauma|rendalen|rennebu|rennesoy|xn--rennesy-v1a|rindal|ringebu|ringerike|ringsaker|rissa|risor|xn--risr-ira|roan|rollag|rygge|ralingen|xn--rlingen-mxa|rodoy|xn--rdy-0nab|romskog|xn--rmskog-bya|roros|xn--rros-gra|rost|xn--rst-0na|royken|xn--ryken-vua|royrvik|xn--ryrvik-bya|rade|xn--rde-ula|salangen|siellak|saltdal|salat|xn--slt-elab|xn--slat-5na|samnanger|sande.more-og-romsdal|sande.xn--mre-og-romsdal-qqb|sande.vestfold|sandefjord|sandnes|sandoy|xn--sandy-yua|sarpsborg|sauda|sauherad|sel|selbu|selje|seljord|sigdal|siljan|sirdal|skaun|skedsmo|ski|skien|skiptvet|skjervoy|xn--skjervy-v1a|skierva|xn--skierv-uta|skjak|xn--skjk-soa|skodje|skanland|xn--sknland-fxa|skanit|xn--sknit-yqa|smola|xn--smla-hra|snillfjord|snasa|xn--snsa-roa|snoasa|snaase|xn--snase-nra|sogndal|sokndal|sola|solund|songdalen|sortland|spydeberg|stange|stavanger|steigen|steinkjer|stjordal|xn--stjrdal-s1a|stokke|stor-elvdal|stord|stordal|storfjord|omasvuotna|strand|stranda|stryn|sula|suldal|sund|sunndal|surnadal|sveio|svelvik|sykkylven|sogne|xn--sgne-gra|somna|xn--smna-gra|sondre-land|xn--sndre-land-0cb|sor-aurdal|xn--sr-aurdal-l8a|sor-fron|xn--sr-fron-q1a|sor-odal|xn--sr-odal-q1a|sor-varanger|xn--sr-varanger-ggb|matta-varjjat|xn--mtta-vrjjat-k7af|sorfold|xn--srfold-bya|sorreisa|xn--srreisa-q1a|sorum|xn--srum-gra|tana|deatnu|time|tingvoll|tinn|tjeldsund|dielddanuorri|tjome|xn--tjme-hra|tokke|tolga|torsken|tranoy|xn--trany-yua|tromso|xn--troms-zua|tromsa|romsa|trondheim|troandin|trysil|trana|xn--trna-woa|trogstad|xn--trgstad-r1a|tvedestrand|tydal|tynset|tysfjord|divtasvuodna|divttasvuotna|tysnes|tysvar|xn--tysvr-vra|tonsberg|xn--tnsberg-q1a|ullensaker|ullensvang|ulvik|utsira|vadso|xn--vads-jra|cahcesuolo|xn--hcesuolo-7ya35b|vaksdal|valle|vang|vanylven|vardo|xn--vard-jra|varggat|xn--vrggt-xqad|vefsn|vaapste|vega|vegarshei|xn--vegrshei-c0a|vennesla|verdal|verran|vestby|vestnes|vestre-slidre|vestre-toten|vestvagoy|xn--vestvgy-ixa6o|vevelstad|vik|vikna|vindafjord|volda|voss|varoy|xn--vry-yla5g|vagan|xn--vgan-qoa|voagat|vagsoy|xn--vgsy-qoa0j|vaga|xn--vg-yiab|valer.ostfold|xn--vler-qoa.xn--stfold-9xa|valer.hedmark|xn--vler-qoa.hedmark|co|blogspot","np":"*","nr":"biz|info|gov|edu|org|net|com","nu":"merseine|mine|shacknet|nom","nz":"ac|co|cri|geek|gen|govt|health|iwi|kiwi|maori|mil|xn--mori-qsa|net|org|parliament|school|blogspot.co|nym","om":"co|com|edu|gov|med|museum|net|org|pro","onion":"","org":"tele.amune|pimienta|poivron|potager|sweetpepper|ae|us|certmgr|c.cdn77|rsc.cdn77|ssl.origin.cdn77-secure|cloudns|duckdns|tunk|dyndns|blogdns|blogsite|boldlygoingnowhere|dnsalias|dnsdojo|doesntexist|dontexist|doomdns|dvrdns|dynalias|endofinternet|endoftheinternet|from-me|game-host|go.dyndns|gotdns|hobby-site|home.dyndns|homedns|homeftp|homelinux|homeunix|is-a-bruinsfan|is-a-candidate|is-a-celticsfan|is-a-chef|is-a-geek|is-a-knight|is-a-linux-user|is-a-patsfan|is-a-soxfan|is-found|is-lost|is-saved|is-very-bad|is-very-evil|is-very-good|is-very-nice|is-very-sweet|isa-geek|kicks-ass|misconfused|podzone|readmyblog|selfip|sellsyourhome|servebbs|serveftp|servegame|stuff-4-sale|webhop|ddnss|accesscam|camdvr|freeddns|mywire|webredirect|eu|al.eu|asso.eu|at.eu|au.eu|be.eu|bg.eu|ca.eu|cd.eu|ch.eu|cn.eu|cy.eu|cz.eu|de.eu|dk.eu|edu.eu|ee.eu|es.eu|fi.eu|fr.eu|gr.eu|hr.eu|hu.eu|ie.eu|il.eu|in.eu|int.eu|is.eu|it.eu|jp.eu|kr.eu|lt.eu|lu.eu|lv.eu|mc.eu|me.eu|mk.eu|mt.eu|my.eu|net.eu|ng.eu|nl.eu|no.eu|nz.eu|paris.eu|pl.eu|pt.eu|q-a.eu|ro.eu|ru.eu|se.eu|si.eu|sk.eu|tr.eu|uk.eu|us.eu|twmail|fedorainfracloud|fedorapeople|cloud.fedoraproject|hepforge|js|bmoattachments|cable-modem|collegefan|couchpotatofries|mlbfan|mysecuritycamera|nflfan|read-books|ufcfan|hopto|myftp|no-ip|zapto|my-firewall|myfirewall|spdns|dsmynas|familyds|tuxfamily|diskstation|hk|wmflabs|za","pa":"ac|gob|com|org|sld|edu|net|ing|abo|med|nom","pe":"edu|gob|nom|mil|org|com|net|blogspot|nym","pf":"com|org|edu","pg":"*","ph":"com|net|org|gov|edu|ngo|mil|i","pk":"com|net|edu|org|fam|biz|web|gov|gob|gok|gon|gop|gos|info","pl":"com|net|org|aid|agro|atm|auto|biz|edu|gmina|gsm|info|mail|miasta|media|mil|nieruchomosci|nom|pc|powiat|priv|realestate|rel|sex|shop|sklep|sos|szkola|targi|tm|tourism|travel|turystyka|gov|ap.gov|ic.gov|is.gov|us.gov|kmpsp.gov|kppsp.gov|kwpsp.gov|psp.gov|wskr.gov|kwp.gov|mw.gov|ug.gov|um.gov|umig.gov|ugim.gov|upow.gov|uw.gov|starostwo.gov|pa.gov|po.gov|psse.gov|pup.gov|rzgw.gov|sa.gov|so.gov|sr.gov|wsa.gov|sko.gov|uzs.gov|wiih.gov|winb.gov|pinb.gov|wios.gov|witd.gov|wzmiuw.gov|piw.gov|wiw.gov|griw.gov|wif.gov|oum.gov|sdn.gov|zp.gov|uppo.gov|mup.gov|wuoz.gov|konsulat.gov|oirm.gov|augustow|babia-gora|bedzin|beskidy|bialowieza|bialystok|bielawa|bieszczady|boleslawiec|bydgoszcz|bytom|cieszyn|czeladz|czest|dlugoleka|elblag|elk|glogow|gniezno|gorlice|grajewo|ilawa|jaworzno|jelenia-gora|jgora|kalisz|kazimierz-dolny|karpacz|kartuzy|kaszuby|katowice|kepno|ketrzyn|klodzko|kobierzyce|kolobrzeg|konin|konskowola|kutno|lapy|lebork|legnica|lezajsk|limanowa|lomza|lowicz|lubin|lukow|malbork|malopolska|mazowsze|mazury|mielec|mielno|mragowo|naklo|nowaruda|nysa|olawa|olecko|olkusz|olsztyn|opoczno|opole|ostroda|ostroleka|ostrowiec|ostrowwlkp|pila|pisz|podhale|podlasie|polkowice|pomorze|pomorskie|prochowice|pruszkow|przeworsk|pulawy|radom|rawa-maz|rybnik|rzeszow|sanok|sejny|slask|slupsk|sosnowiec|stalowa-wola|skoczow|starachowice|stargard|suwalki|swidnica|swiebodzin|swinoujscie|szczecin|szczytno|tarnobrzeg|tgory|turek|tychy|ustka|walbrzych|warmia|warszawa|waw|wegrow|wielun|wlocl|wloclawek|wodzislaw|wolomin|wroclaw|zachpomor|zagan|zarow|zgora|zgorzelec|beep|co|art|gliwice|krakow|poznan|wroc|zakopane|gda|gdansk|gdynia|med|sopot","pm":"","pn":"gov|co|org|edu|net","post":"","pr":"com|net|org|gov|edu|isla|pro|biz|info|name|est|prof|ac","pro":"aaa|aca|acct|avocat|bar|cpa|eng|jur|law|med|recht|cloudns","ps":"edu|gov|sec|plo|com|org|net","pt":"net|gov|org|edu|int|publ|com|nome|blogspot|nym","pw":"co|ne|or|ed|go|belau|cloudns|nom","py":"com|coop|edu|gov|mil|net|org","qa":"com|edu|gov|mil|name|net|org|sch|blogspot|nom","re":"asso|com|nom|blogspot","ro":"arts|com|firm|info|nom|nt|org|rec|store|tm|www|shop|blogspot","rs":"ac|co|edu|gov|in|org|blogspot|nom","ru":"ac|edu|gov|int|mil|test|adygeya|bashkiria|bir|cbg|com|dagestan|grozny|kalmykia|kustanai|marine|mordovia|msk|mytis|nalchik|nov|pyatigorsk|spb|vladikavkaz|vladimir|blogspot|hb.cldmail|net|org|pp","rw":"gov|net|edu|ac|com|co|int|mil|gouv","sa":"com|net|org|gov|med|pub|edu|sch","sb":"com|edu|gov|net|org","sc":"com|gov|net|org|edu","sd":"com|net|org|edu|med|tv|gov|info","se":"a|ac|b|bd|brand|c|d|e|f|fh|fhsk|fhv|g|h|i|k|komforb|kommunalforbund|komvux|l|lanbib|m|n|naturbruksgymn|o|org|p|parti|pp|press|r|s|t|tm|u|w|x|y|z|com|blogspot","sg":"com|net|org|gov|edu|per|blogspot","sh":"com|net|gov|org|mil|hashbang|*platform|wedeploy|now","si":"blogspot|nom","sj":"","sk":"blogspot|nym","sl":"com|net|edu|gov|org","sm":"","sn":"art|com|edu|gouv|org|perso|univ|blogspot","so":"com|net|org","sr":"","st":"co|com|consulado|edu|embaixada|gov|mil|net|org|principe|saotome|store","su":"abkhazia|adygeya|aktyubinsk|arkhangelsk|armenia|ashgabad|azerbaijan|balashov|bashkiria|bryansk|bukhara|chimkent|dagestan|east-kazakhstan|exnet|georgia|grozny|ivanovo|jambyl|kalmykia|kaluga|karacol|karaganda|karelia|khakassia|krasnodar|kurgan|kustanai|lenug|mangyshlak|mordovia|msk|murmansk|nalchik|navoi|north-kazakhstan|nov|obninsk|penza|pokrovsk|sochi|spb|tashkent|termez|togliatti|troitsk|tselinograd|tula|tuva|vladikavkaz|vladimir|vologda|nym","sv":"com|edu|gob|org|red","sx":"gov|nym","sy":"edu|gov|net|mil|com|org","sz":"co|ac|org","tc":"","td":"blogspot","tel":"","tf":"","tg":"","th":"ac|co|go|in|mi|net|or","tj":"ac|biz|co|com|edu|go|gov|int|mil|name|net|nic|org|test|web","tk":"","tl":"gov","tm":"com|co|org|net|nom|gov|mil|edu","tn":"com|ens|fin|gov|ind|intl|nat|net|org|info|perso|tourism|edunet|rnrt|rns|rnu|mincom|agrinet|defense|turen","to":"com|gov|net|org|edu|mil|vpnplus","tr":"com|info|biz|net|org|web|gen|tv|av|dr|bbs|name|tel|gov|bel|pol|mil|k12|edu|kep|nc|gov.nc|blogspot.com","travel":"","tt":"co|com|org|net|biz|info|pro|int|coop|jobs|mobi|travel|museum|aero|name|gov|edu","tv":"dyndns|better-than|on-the-web|worse-than","tw":"edu|gov|mil|com|net|org|idv|game|ebiz|club|xn--zf0ao64a|xn--uc0atv|xn--czrw28b|mymailer.com|url|blogspot|nym","tz":"ac|co|go|hotel|info|me|mil|mobi|ne|or|sc|tv","ua":"com|edu|gov|in|net|org|cherkassy|cherkasy|chernigov|chernihiv|chernivtsi|chernovtsy|ck|cn|cr|crimea|cv|dn|dnepropetrovsk|dnipropetrovsk|dominic|donetsk|dp|if|ivano-frankivsk|kh|kharkiv|kharkov|kherson|khmelnitskiy|khmelnytskyi|kiev|kirovograd|km|kr|krym|ks|kv|kyiv|lg|lt|lugansk|lutsk|lv|lviv|mk|mykolaiv|nikolaev|od|odesa|odessa|pl|poltava|rivne|rovno|rv|sb|sebastopol|sevastopol|sm|sumy|te|ternopil|uz|uzhgorod|vinnica|vinnytsia|vn|volyn|yalta|zaporizhzhe|zaporizhzhia|zhitomir|zhytomyr|zp|zt|cc|inf|ltd|biz|co|pp","ug":"co|or|ac|sc|go|ne|com|org|blogspot|nom","uk":"ac|co|gov|ltd|me|net|nhs|org|plc|police|*sch|service.gov|homeoffice.gov|blogspot.co|no-ip.co|wellbeingzone.co","us":"dni|fed|isa|kids|nsn|ak|al|ar|as|az|ca|co|ct|dc|de|fl|ga|gu|hi|ia|id|il|in|ks|ky|la|ma|md|me|mi|mn|mo|ms|mt|nc|nd|ne|nh|nj|nm|nv|ny|oh|ok|or|pa|pr|ri|sc|sd|tn|tx|ut|vi|vt|va|wa|wi|wv|wy|k12.ak|k12.al|k12.ar|k12.as|k12.az|k12.ca|k12.co|k12.ct|k12.dc|k12.de|k12.fl|k12.ga|k12.gu|k12.ia|k12.id|k12.il|k12.in|k12.ks|k12.ky|k12.la|k12.ma|k12.md|k12.me|k12.mi|k12.mn|k12.mo|k12.ms|k12.mt|k12.nc|k12.ne|k12.nh|k12.nj|k12.nm|k12.nv|k12.ny|k12.oh|k12.ok|k12.or|k12.pa|k12.pr|k12.ri|k12.sc|k12.tn|k12.tx|k12.ut|k12.vi|k12.vt|k12.va|k12.wa|k12.wi|k12.wy|cc.ak|cc.al|cc.ar|cc.as|cc.az|cc.ca|cc.co|cc.ct|cc.dc|cc.de|cc.fl|cc.ga|cc.gu|cc.hi|cc.ia|cc.id|cc.il|cc.in|cc.ks|cc.ky|cc.la|cc.ma|cc.md|cc.me|cc.mi|cc.mn|cc.mo|cc.ms|cc.mt|cc.nc|cc.nd|cc.ne|cc.nh|cc.nj|cc.nm|cc.nv|cc.ny|cc.oh|cc.ok|cc.or|cc.pa|cc.pr|cc.ri|cc.sc|cc.sd|cc.tn|cc.tx|cc.ut|cc.vi|cc.vt|cc.va|cc.wa|cc.wi|cc.wv|cc.wy|lib.ak|lib.al|lib.ar|lib.as|lib.az|lib.ca|lib.co|lib.ct|lib.dc|lib.fl|lib.ga|lib.gu|lib.hi|lib.ia|lib.id|lib.il|lib.in|lib.ks|lib.ky|lib.la|lib.ma|lib.md|lib.me|lib.mi|lib.mn|lib.mo|lib.ms|lib.mt|lib.nc|lib.nd|lib.ne|lib.nh|lib.nj|lib.nm|lib.nv|lib.ny|lib.oh|lib.ok|lib.or|lib.pa|lib.pr|lib.ri|lib.sc|lib.sd|lib.tn|lib.tx|lib.ut|lib.vi|lib.vt|lib.va|lib.wa|lib.wi|lib.wy|pvt.k12.ma|chtr.k12.ma|paroch.k12.ma|ann-arbor.mi|cog.mi|dst.mi|eaton.mi|gen.mi|mus.mi|tec.mi|washtenaw.mi|cloudns|drud|is-by|land-4-sale|stuff-4-sale|golffan|noip|pointto|lib.de","uy":"com|edu|gub|mil|net|org|blogspot.com|nom","uz":"co|com|net|org","va":"","vc":"com|net|org|gov|mil|edu|nom","ve":"arts|co|com|e12|edu|firm|gob|gov|info|int|mil|net|org|rec|store|tec|web","vg":"nom","vi":"co|com|k12|net|org","vn":"com|net|org|edu|gov|int|ac|biz|info|name|pro|health|blogspot","vu":"com|edu|net|org","wf":"","ws":"com|net|org|gov|edu|*advisor|dyndns|mypets","yt":"","xn--mgbaam7a8h":"","xn--y9a3aq":"","xn--54b7fta0cc":"","xn--90ae":"","xn--90ais":"","xn--fiqs8s":"","xn--fiqz9s":"","xn--lgbbat1ad8j":"","xn--wgbh1c":"","xn--e1a4c":"","xn--node":"","xn--qxam":"","xn--j6w193g":"","xn--2scrj9c":"","xn--3hcrj9c":"","xn--45br5cyl":"","xn--h2breg3eve":"","xn--h2brj9c8c":"","xn--mgbgu82a":"","xn--rvc1e0am3e":"","xn--h2brj9c":"","xn--mgbbh1a71e":"","xn--fpcrj9c3d":"","xn--gecrj9c":"","xn--s9brj9c":"","xn--45brj9c":"","xn--xkc2dl3a5ee0h":"","xn--mgba3a4f16a":"","xn--mgba3a4fra":"","xn--mgbtx2b":"","xn--mgbayh7gpa":"","xn--3e0b707e":"","xn--80ao21a":"","xn--fzc2c9e2c":"","xn--xkc2al3hye2a":"","xn--mgbc0a9azcg":"","xn--d1alf":"","xn--l1acc":"","xn--mix891f":"","xn--mix082f":"","xn--mgbx4cd0ab":"","xn--mgb9awbf":"","xn--mgbai9azgqp6j":"","xn--mgbai9a5eva00b":"","xn--ygbi2ammx":"","xn--90a3ac":"xn--o1ac|xn--c1avg|xn--90azh|xn--d1at|xn--o1ach|xn--80au","xn--p1ai":"","xn--wgbl6a":"","xn--mgberp4a5d4ar":"","xn--mgberp4a5d4a87g":"","xn--mgbqly7c0a67fbc":"","xn--mgbqly7cvafr":"","xn--mgbpl2fh":"","xn--yfro4i67o":"","xn--clchc0ea0b2g2a9gcd":"","xn--ogbpf8fl":"","xn--mgbtf8fl":"","xn--o3cw4h":"xn--12c1fe0br|xn--12co0c3b4eva|xn--h3cuzk1di|xn--o3cyx2a|xn--m3ch0j3a|xn--12cfi8ixb8l","xn--pgbs0dh":"","xn--kpry57d":"","xn--kprw13d":"","xn--nnx388a":"","xn--j1amh":"","xn--mgb2ddes":"","xxx":"","ye":"*","za":"ac|agric|alt|co|edu|gov|grondar|law|mil|net|ngo|nis|nom|org|school|tm|web|blogspot.co","zm":"ac|biz|co|com|edu|gov|info|mil|net|org|sch","zw":"ac|co|gov|mil|org","aaa":"","aarp":"","abarth":"","abb":"","abbott":"","abbvie":"","abc":"","able":"","abogado":"","abudhabi":"","academy":"","accenture":"","accountant":"","accountants":"","aco":"","active":"","actor":"","adac":"","ads":"","adult":"","aeg":"","aetna":"","afamilycompany":"","afl":"","africa":"","agakhan":"","agency":"","aig":"","aigo":"","airbus":"","airforce":"","airtel":"","akdn":"","alfaromeo":"","alibaba":"","alipay":"","allfinanz":"","allstate":"","ally":"","alsace":"","alstom":"","americanexpress":"","americanfamily":"","amex":"","amfam":"","amica":"","amsterdam":"","analytics":"","android":"","anquan":"","anz":"","aol":"","apartments":"","app":"","apple":"","aquarelle":"","arab":"","aramco":"","archi":"","army":"","art":"","arte":"","asda":"","associates":"","athleta":"","attorney":"","auction":"","audi":"","audible":"","audio":"","auspost":"","author":"","auto":"","autos":"","avianca":"","aws":"","axa":"","azure":"","baby":"","baidu":"","banamex":"","bananarepublic":"","band":"","bank":"","bar":"","barcelona":"","barclaycard":"","barclays":"","barefoot":"","bargains":"","baseball":"","basketball":"","bauhaus":"","bayern":"","bbc":"","bbt":"","bbva":"","bcg":"","bcn":"","beats":"","beauty":"","beer":"","bentley":"","berlin":"","best":"","bestbuy":"","bet":"","bharti":"","bible":"","bid":"","bike":"","bing":"","bingo":"","bio":"","black":"","blackfriday":"","blanco":"","blockbuster":"","blog":"","bloomberg":"","blue":"","bms":"","bmw":"","bnl":"","bnpparibas":"","boats":"","boehringer":"","bofa":"","bom":"","bond":"","boo":"","book":"","booking":"","boots":"","bosch":"","bostik":"","boston":"","bot":"","boutique":"","box":"","bradesco":"","bridgestone":"","broadway":"","broker":"","brother":"","brussels":"","budapest":"","bugatti":"","build":"","builders":"","business":"","buy":"","buzz":"","bzh":"","cab":"","cafe":"","cal":"","call":"","calvinklein":"","cam":"","camera":"","camp":"","cancerresearch":"","canon":"","capetown":"","capital":"","capitalone":"","car":"","caravan":"","cards":"","care":"","career":"","careers":"","cars":"","cartier":"","casa":"","case":"","caseih":"","cash":"","casino":"","catering":"","catholic":"","cba":"","cbn":"","cbre":"","cbs":"","ceb":"","center":"","ceo":"","cern":"","cfa":"","cfd":"","chanel":"","channel":"","chase":"","chat":"","cheap":"","chintai":"","chloe":"","christmas":"","chrome":"","chrysler":"","church":"","cipriani":"","circle":"","cisco":"","citadel":"","citi":"","citic":"","city":"","cityeats":"","claims":"","cleaning":"","click":"","clinic":"","clinique":"","clothing":"","cloud":"myfusion|*statics|*magentosite|vapor|*sensiosite|trafficplex","club":"cloudns","clubmed":"","coach":"","codes":"","coffee":"","college":"","cologne":"","comcast":"","commbank":"","community":"","company":"","compare":"","computer":"","comsec":"","condos":"","construction":"","consulting":"","contact":"","contractors":"","cooking":"","cookingchannel":"","cool":"de","corsica":"","country":"","coupon":"","coupons":"","courses":"","credit":"","creditcard":"","creditunion":"","cricket":"","crown":"","crs":"","cruise":"","cruises":"","csc":"","cuisinella":"","cymru":"","cyou":"","dabur":"","dad":"","dance":"","data":"","date":"","dating":"","datsun":"","day":"","dclk":"","dds":"","deal":"","dealer":"","deals":"","degree":"","delivery":"","dell":"","deloitte":"","delta":"","democrat":"","dental":"","dentist":"","desi":"","design":"","dev":"","dhl":"","diamonds":"","diet":"","digital":"","direct":"","directory":"","discount":"","discover":"","dish":"","diy":"","dnp":"","docs":"","doctor":"","dodge":"","dog":"","doha":"","domains":"","dot":"","download":"","drive":"","dtv":"","dubai":"","duck":"","dunlop":"","duns":"","dupont":"","durban":"","dvag":"","dvr":"","earth":"","eat":"","eco":"","edeka":"","education":"","email":"","emerck":"","energy":"","engineer":"","engineering":"","enterprises":"","epost":"","epson":"","equipment":"","ericsson":"","erni":"","esq":"","estate":"*compute","esurance":"","etisalat":"","eurovision":"","eus":"user.party","events":"","everbank":"","exchange":"","expert":"","exposed":"","express":"","extraspace":"","fage":"","fail":"","fairwinds":"","faith":"ybo","family":"","fan":"","fans":"","farm":"storj","farmers":"","fashion":"","fast":"","fedex":"","feedback":"","ferrari":"","ferrero":"","fiat":"","fidelity":"","fido":"","film":"","final":"","finance":"","financial":"","fire":"","firestone":"","firmdale":"","fish":"","fishing":"","fit":"ptplus","fitness":"","flickr":"","flights":"","flir":"","florist":"","flowers":"","fly":"","foo":"","food":"","foodnetwork":"","football":"","ford":"","forex":"","forsale":"","forum":"","foundation":"","fox":"","free":"","fresenius":"","frl":"","frogans":"","frontdoor":"","frontier":"","ftr":"","fujitsu":"","fujixerox":"","fun":"","fund":"","furniture":"","futbol":"","fyi":"","gal":"","gallery":"","gallo":"","gallup":"","game":"","games":"","gap":"","garden":"","gbiz":"","gdn":"","gea":"","gent":"","genting":"","george":"","ggee":"","gift":"","gifts":"","gives":"","giving":"","glade":"","glass":"","gle":"","global":"","globo":"","gmail":"","gmbh":"","gmo":"","gmx":"","godaddy":"","gold":"","goldpoint":"","golf":"","goo":"","goodhands":"","goodyear":"","goog":"cloud","google":"","gop":"","got":"","grainger":"","graphics":"","gratis":"","green":"","gripe":"","grocery":"","group":"","guardian":"","gucci":"","guge":"","guide":"","guitars":"","guru":"","hair":"","hamburg":"","hangout":"","haus":"","hbo":"","hdfc":"","hdfcbank":"","health":"","healthcare":"","help":"","helsinki":"","here":"","hermes":"","hgtv":"","hiphop":"","hisamitsu":"","hitachi":"","hiv":"","hkt":"","hockey":"","holdings":"","holiday":"","homedepot":"","homegoods":"","homes":"","homesense":"","honda":"","honeywell":"","horse":"","hospital":"","host":"cloudaccess|freesite","hosting":"opencraft","hot":"","hoteles":"","hotels":"","hotmail":"","house":"","how":"","hsbc":"","htc":"","hughes":"","hyatt":"","hyundai":"","ibm":"","icbc":"","ice":"","icu":"","ieee":"","ifm":"","ikano":"","imamat":"","imdb":"","immo":"","immobilien":"","industries":"","infiniti":"","ing":"","ink":"","institute":"","insurance":"","insure":"","intel":"","international":"","intuit":"","investments":"","ipiranga":"","irish":"","iselect":"","ismaili":"","ist":"","istanbul":"","itau":"","itv":"","iveco":"","iwc":"","jaguar":"","java":"","jcb":"","jcp":"","jeep":"","jetzt":"","jewelry":"","jio":"","jlc":"","jll":"","jmp":"","jnj":"","joburg":"","jot":"","joy":"","jpmorgan":"","jprs":"","juegos":"","juniper":"","kaufen":"","kddi":"","kerryhotels":"","kerrylogistics":"","kerryproperties":"","kfh":"","kia":"","kim":"","kinder":"","kindle":"","kitchen":"","kiwi":"","koeln":"","komatsu":"","kosher":"","kpmg":"","kpn":"","krd":"co|edu","kred":"","kuokgroup":"","kyoto":"","lacaixa":"","ladbrokes":"","lamborghini":"","lamer":"","lancaster":"","lancia":"","lancome":"","land":"static|dev.static|sites.static","landrover":"","lanxess":"","lasalle":"","lat":"","latino":"","latrobe":"","law":"","lawyer":"","lds":"","lease":"","leclerc":"","lefrak":"","legal":"","lego":"","lexus":"","lgbt":"","liaison":"","lidl":"","life":"","lifeinsurance":"","lifestyle":"","lighting":"","like":"","lilly":"","limited":"","limo":"","lincoln":"","linde":"","link":"cyon|mypep","lipsy":"","live":"","living":"","lixil":"","loan":"","loans":"","locker":"","locus":"","loft":"","lol":"","london":"","lotte":"","lotto":"","love":"","lpl":"","lplfinancial":"","ltd":"","ltda":"","lundbeck":"","lupin":"","luxe":"","luxury":"","macys":"","madrid":"","maif":"","maison":"","makeup":"","man":"","management":"router","mango":"","map":"","market":"","marketing":"","markets":"","marriott":"","marshalls":"","maserati":"","mattel":"","mba":"","mcd":"","mcdonalds":"","mckinsey":"","med":"","media":"","meet":"","melbourne":"","meme":"","memorial":"","men":"","menu":"","meo":"","merckmsd":"","metlife":"","miami":"","microsoft":"","mini":"","mint":"","mit":"","mitsubishi":"","mlb":"","mls":"","mma":"","mobile":"","mobily":"","moda":"","moe":"","moi":"","mom":"","monash":"","money":"","monster":"","montblanc":"","mopar":"","mormon":"","mortgage":"","moscow":"","moto":"","motorcycles":"","mov":"","movie":"","movistar":"","msd":"","mtn":"","mtpc":"","mtr":"","mutual":"","nab":"","nadex":"","nagoya":"","nationwide":"","natura":"","navy":"","nba":"","nec":"","netbank":"","netflix":"","network":"*alces","neustar":"","new":"","newholland":"","news":"","next":"","nextdirect":"","nexus":"","nfl":"","ngo":"","nhk":"","nico":"","nike":"","nikon":"","ninja":"","nissan":"","nissay":"","nokia":"","northwesternmutual":"","norton":"","now":"","nowruz":"","nowtv":"","nra":"","nrw":"","ntt":"","nyc":"","obi":"","observer":"","off":"","office":"","okinawa":"","olayan":"","olayangroup":"","oldnavy":"","ollo":"","omega":"","one":"homelink","ong":"","onl":"","online":"barsy","onyourside":"","ooo":"","open":"","oracle":"","orange":"","organic":"","origins":"","osaka":"","otsuka":"","ott":"","ovh":"nerdpol","page":"","pamperedchef":"","panasonic":"","panerai":"","paris":"","pars":"","partners":"","parts":"","party":"ybo","passagens":"","pay":"","pccw":"","pet":"","pfizer":"","pharmacy":"","phd":"","philips":"","phone":"","photo":"","photography":"","photos":"","physio":"","piaget":"","pics":"","pictet":"","pictures":"1337","pid":"","pin":"","ping":"","pink":"","pioneer":"","pizza":"","place":"","play":"","playstation":"","plumbing":"","plus":"","pnc":"","pohl":"","poker":"","politie":"","porn":"","pramerica":"","praxi":"","press":"","prime":"","prod":"","productions":"","prof":"","progressive":"","promo":"","properties":"","property":"","protection":"","pru":"","prudential":"","pub":"","pwc":"","qpon":"","quebec":"","quest":"","qvc":"","racing":"","radio":"","raid":"","read":"","realestate":"","realtor":"","realty":"","recipes":"","red":"","redstone":"","redumbrella":"","rehab":"","reise":"","reisen":"","reit":"","reliance":"","ren":"","rent":"","rentals":"","repair":"","report":"","republican":"","rest":"","restaurant":"","review":"ybo","reviews":"","rexroth":"","rich":"","richardli":"","ricoh":"","rightathome":"","ril":"","rio":"","rip":"clan","rmit":"","rocher":"","rocks":"myddns|lima-city|webspace","rodeo":"","rogers":"","room":"","rsvp":"","rugby":"","ruhr":"","run":"","rwe":"","ryukyu":"","saarland":"","safe":"","safety":"","sakura":"","sale":"","salon":"","samsclub":"","samsung":"","sandvik":"","sandvikcoromant":"","sanofi":"","sap":"","sapo":"","sarl":"","sas":"","save":"","saxo":"","sbi":"","sbs":"","sca":"","scb":"","schaeffler":"","schmidt":"","scholarships":"","school":"","schule":"","schwarz":"","science":"ybo","scjohnson":"","scor":"","scot":"","search":"","seat":"","secure":"","security":"","seek":"","select":"","sener":"","services":"","ses":"","seven":"","sew":"","sex":"","sexy":"","sfr":"","shangrila":"","sharp":"","shaw":"","shell":"","shia":"","shiksha":"","shoes":"","shop":"","shopping":"","shouji":"","show":"","showtime":"","shriram":"","silk":"","sina":"","singles":"","site":"cyon|*platformsh|byen","ski":"","skin":"","sky":"","skype":"","sling":"","smart":"","smile":"","sncf":"","soccer":"","social":"","softbank":"","software":"","sohu":"","solar":"","solutions":"","song":"","sony":"","soy":"","space":"stackspace|uber|xs4all","spiegel":"","spot":"","spreadbetting":"","srl":"","srt":"","stada":"","staples":"","star":"","starhub":"","statebank":"","statefarm":"","statoil":"","stc":"","stcgroup":"","stockholm":"","storage":"","store":"","stream":"","studio":"","study":"","style":"","sucks":"","supplies":"","supply":"","support":"barsy","surf":"","surgery":"","suzuki":"","swatch":"","swiftcover":"","swiss":"","sydney":"","symantec":"","systems":"knightpoint","tab":"","taipei":"","talk":"","taobao":"","target":"","tatamotors":"","tatar":"","tattoo":"","tax":"","taxi":"","tci":"","tdk":"","team":"","tech":"","technology":"","telecity":"","telefonica":"","temasek":"","tennis":"","teva":"","thd":"","theater":"","theatre":"","tiaa":"","tickets":"","tienda":"","tiffany":"","tips":"","tires":"","tirol":"","tjmaxx":"","tjx":"","tkmaxx":"","tmall":"","today":"","tokyo":"","tools":"","top":"","toray":"","toshiba":"","total":"","tours":"","town":"","toyota":"","toys":"","trade":"ybo","trading":"","training":"","travelchannel":"","travelers":"","travelersinsurance":"","trust":"","trv":"","tube":"","tui":"","tunes":"","tushu":"","tvs":"","ubank":"","ubs":"","uconnect":"","unicom":"","university":"","uno":"","uol":"","ups":"","vacations":"","vana":"","vanguard":"","vegas":"","ventures":"","verisign":"","versicherung":"","vet":"","viajes":"","video":"","vig":"","viking":"","villas":"","vin":"","vip":"","virgin":"","visa":"","vision":"","vista":"","vistaprint":"","viva":"","vivo":"","vlaanderen":"","vodka":"","volkswagen":"","volvo":"","vote":"","voting":"","voto":"","voyage":"","vuelos":"","wales":"","walmart":"","walter":"","wang":"","wanggou":"","warman":"","watch":"","watches":"","weather":"","weatherchannel":"","webcam":"","weber":"","website":"","wed":"","wedding":"","weibo":"","weir":"","whoswho":"","wien":"","wiki":"","williamhill":"","win":"","windows":"","wine":"","winners":"","wme":"","wolterskluwer":"","woodside":"","work":"","works":"","world":"","wow":"","wtc":"","wtf":"","xbox":"","xerox":"","xfinity":"","xihuan":"","xin":"","xn--11b4c3d":"","xn--1ck2e1b":"","xn--1qqw23a":"","xn--30rr7y":"","xn--3bst00m":"","xn--3ds443g":"","xn--3oq18vl8pn36a":"","xn--3pxu8k":"","xn--42c2d9a":"","xn--45q11c":"","xn--4gbrim":"","xn--55qw42g":"","xn--55qx5d":"","xn--5su34j936bgsg":"","xn--5tzm5g":"","xn--6frz82g":"","xn--6qq986b3xl":"","xn--80adxhks":"","xn--80aqecdr1a":"","xn--80asehdb":"","xn--80aswg":"","xn--8y0a063a":"","xn--9dbq2a":"","xn--9et52u":"","xn--9krt00a":"","xn--b4w605ferd":"","xn--bck1b9a5dre4c":"","xn--c1avg":"","xn--c2br7g":"","xn--cck2b3b":"","xn--cg4bki":"","xn--czr694b":"","xn--czrs0t":"","xn--czru2d":"","xn--d1acj3b":"","xn--eckvdtc9d":"","xn--efvy88h":"","xn--estv75g":"","xn--fct429k":"","xn--fhbei":"","xn--fiq228c5hs":"","xn--fiq64b":"","xn--fjq720a":"","xn--flw351e":"","xn--fzys8d69uvgm":"","xn--g2xx48c":"","xn--gckr3f0f":"","xn--gk3at1e":"","xn--hxt814e":"","xn--i1b6b1a6a2e":"","xn--imr513n":"","xn--io0a7i":"","xn--j1aef":"","xn--jlq61u9w7b":"","xn--jvr189m":"","xn--kcrx77d1x4a":"","xn--kpu716f":"","xn--kput3i":"","xn--mgba3a3ejt":"","xn--mgba7c0bbn0a":"","xn--mgbaakc7dvf":"","xn--mgbab2bd":"","xn--mgbb9fbpob":"","xn--mgbca7dzdo":"","xn--mgbi4ecexp":"","xn--mgbt3dhd":"","xn--mk1bu44c":"","xn--mxtq1m":"","xn--ngbc5azd":"","xn--ngbe9e0a":"","xn--ngbrx":"","xn--nqv7f":"","xn--nqv7fs00ema":"","xn--nyqy26a":"","xn--p1acf":"","xn--pbt977c":"","xn--pssy2u":"","xn--q9jyb4c":"","xn--qcka1pmc":"","xn--rhqv96g":"","xn--rovu88b":"","xn--ses554g":"","xn--t60b56a":"","xn--tckwe":"","xn--tiq49xqyj":"","xn--unup4y":"","xn--vermgensberater-ctb":"","xn--vermgensberatung-pwb":"","xn--vhquv":"","xn--vuq861b":"","xn--w4r85el8fhu5dnra":"","xn--w4rs40l":"","xn--xhq521b":"","xn--zfr164b":"","xperia":"","xyz":"blogsite|fhapp","yachts":"","yahoo":"","yamaxun":"","yandex":"","yodobashi":"","yoga":"","yokohama":"","you":"","youtube":"","yun":"","zappos":"","zara":"","zero":"","zip":"","zippo":"","zone":"*triton|lima","zuerich":""}
},{}],163:[function(require,module,exports){
"use strict";function pop(e,s,a){var r=a[a.length-1];e===r.element&&(a.pop(),r=a[a.length-1]);var p=r.element,n=r.index;if(Array.isArray(p))p.push(e);else if(n===s.length-2){var t=s.pop();p[t]=e}else s.push(e)}exports.stringify=function(e){var s=[];s.push({obj:e});for(var a,r,p,n,t,o,l,f,i,c,u,h="";a=s.pop();)if(r=a.obj,p=a.prefix||"",n=a.val||"",h+=p,n)h+=n;else if("object"!=typeof r)h+="undefined"==typeof r?null:JSON.stringify(r);else if(null===r)h+="null";else if(Array.isArray(r)){for(s.push({val:"]"}),t=r.length-1;t>=0;t--)o=0===t?"":",",s.push({obj:r[t],prefix:o});s.push({val:"["})}else{l=[];for(f in r)r.hasOwnProperty(f)&&l.push(f);for(s.push({val:"}"}),t=l.length-1;t>=0;t--)i=l[t],c=r[i],u=t>0?",":"",u+=JSON.stringify(i)+":",s.push({obj:c,prefix:u});s.push({val:"{"})}return h},exports.parse=function(e){for(var s,a,r,p,n,t,o,l,f,i=[],c=[],u=0;;)if(s=e[u++],"}"!==s&&"]"!==s&&"undefined"!=typeof s)switch(s){case" ":case"\t":case"\n":case":":case",":break;case"n":u+=3,pop(null,i,c);break;case"t":u+=3,pop(!0,i,c);break;case"f":u+=4,pop(!1,i,c);break;case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":case"-":for(a="",u--;;){if(r=e[u++],!/[\d\.\-e\+]/.test(r)){u--;break}a+=r}pop(parseFloat(a),i,c);break;case'"':for(p="",n=void 0,t=0;;){if(o=e[u++],'"'===o&&("\\"!==n||t%2!==1))break;p+=o,n=o,"\\"===n?t++:t=0}pop(JSON.parse('"'+p+'"'),i,c);break;case"[":l={element:[],index:i.length},i.push(l.element),c.push(l);break;case"{":f={element:{},index:i.length},i.push(f.element),c.push(f);break;default:throw new Error("unexpectedly reached end of input: "+s)}else{if(1===i.length)return i.pop();pop(i.pop(),i,c)}};

},{}]},{},[17])

//# sourceMappingURL=background.js.map
