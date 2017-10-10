'use strict';Registry.require("promise helper xmlhttprequest uri convert tools".split(" "),function(){var n=rea.FEATURES,g=Registry.get("promise"),v=Registry.get("xmlhttprequest").run,k=Registry.get("uri"),p=Registry.get("helper"),q=Registry.get("convert"),r=Registry.get("tools"),t,w=r.createQueue(1),x=function(f){var e=g(),a=new FileReader;a.onloadend=function(){e.resolve(q.arrbuf2str(this.result))};a.onerror=e.reject;a.onabort=e.reject;a.readAsArrayBuffer(f);return e.promise()},m=function(f){var e,
a=[],b=null,d,c={extend:function(a){a=a(c);Object.keys(c).forEach(function(b){var d=Object.getOwnPropertyDescriptor(c,b);d.get?(a.__defineGetter__(b,d.get),d.set&&a.__defineSetter__(b,d.set)):a[b]=a[b]||c[b]});return c=a},config:{},changes:function(){var a;return{listen:function(){a||(a=g(),c.watch&&c.watch.start());return a.promise()},notify:function(b){a.notify(b)}}}(),oauth:function(){var a,b={run:function(){if(d)return d;var h=g(),l=d=h.promise();a=p.createUUID();var u=t({type:f,url:b.getAuthUrl()});
u.promise.progress(function(a){var d;h&&(d=b.onUrl(a.url))&&(c.credentials=d,e=null,h.resolve(),h=null,u.close())}).always(function(){d=e=null;h&&h.reject("auth_failed")});return l},getAuthUrl:function(){return c.config.request_uri+"?"+k.hash2params({response_type:c.config.response_type,client_id:c.config.client_id,redirect_uri:c.config.redirect_uri,state:a,scope:c.config.scope})},onUrl:function(b){var d,e;if(b&&0===b.indexOf(c.config.redirect_uri)&&(e=k.parse(b))&&(d=k.params2hash(e))&&d.access_token&&
d.state===a)return{uid:d.uid,access_token:d.access_token}}};return b}(),request:function(a){return w.add(function(){var b=g(),d=function(a){console.debug("cloud: request failed",a);b.reject(a)};v(a,{onload:function(a){-1==[200,201,204].indexOf(a.status)?d(a):b.resolve(a.response)},onerror:d,ontimeout:d,onprogress:b.notify});return b.promise()})},wait:function(b){return function(){if(c.credentials.access_token)return b.apply(this,arguments);var d=arguments,f=g();a.push(function(){f.consume(b.apply(this,
d))});e||c.oauth.run().done(function(){a.forEach(function(a){a()});a=[]}).fail(function(a){f.reject(a)});return f.promise()}}};c.__defineGetter__("credentials",function(){if(null===b){if(n.HTML5.LOCALSTORAGE)try{var a=JSON.parse(n.HTML5.LOCALSTORAGE.getItem(c.config.storage_key));b={uid:a.uid,access_token:a.access_token}}catch(d){}b=b||{}}return b});c.__defineSetter__("credentials",function(a){if(n.HTML5.LOCALSTORAGE)try{n.HTML5.LOCALSTORAGE.setItem(c.config.storage_key,JSON.stringify({uid:a.uid,
access_token:a.access_token}))}catch(d){}b=a});return c},m={init:function(f){t=f},drive:(new m("drive")).extend(function(f){var e,a,b={config:{redirect_uri:"https://tampermonkey.net/oauth.php",request_uri:"https://accounts.google.com/o/oauth2/v2/auth",client_id:"408438522028-3cgn3t3jas3fak7isbnfod1q4h15g2fv.apps.googleusercontent.com",storage_key:"gd_config",scope:"https://www.googleapis.com/auth/drive.appdata",response_type:"token"},request:function(a){a.headers=a.headers||{};a.headers.Authorization=
"Bearer "+b.credentials.access_token;return f.request.apply(this,arguments).then(function(a){return a},function(c){if(!c||-1!=[403,500].indexOf(c.status))return a.backoff=2*(a.backoff||1E3),r.sleep(a.backoff).then(function(){return b.request(a)});if(-1!=[400,401].indexOf(c.status)){if(console.warn("Google Drive: authentication error",c),b.credentials={},!a.retry_auth)return a.retry_auth=!0,b.oauth.run().then(function(){return b.request(a)})}else if(404==c.status)return g().resolve(null);return g().reject(c.statusText||
c.responseText)})},list:f.wait(function(a){var c=[],e=g(),f=function(a){return"https://www.googleapis.com/drive/v3/files?"+k.hash2params({spaces:"appDataFolder",pageToken:a,orderBy:"modifiedTime desc",fields:"nextPageToken, files(id, size, name, modifiedTime, md5Checksum)",pageSize:500})},h=function(a){return b.request({method:"GET",url:a,headers:{"Content-Type":"application/json"}}).then(function(a){a=a?JSON.parse(a):{files:[]};c=c.concat(a.files);if(a.nextPageToken)return h(f(a.nextPageToken));
e.resolve(c)})};h(f());return e.promise().then(function(b){var c={};return b.map(function(b){if(!c[b.name])return a||(c[b.name]=!0),{name:b.name,size:b.size||0,id:b.id,md5:b.md5Checksum,modified:(new Date(b.modifiedTime)).getTime()}}).filter(function(a){return a})})}),get:f.wait(function(a){return b.request({method:"GET",url:"https://www.googleapis.com/drive/v3/files/"+(a.id||a)+"?"+k.hash2params({spaces:"appDataFolder",alt:"media"}),responseType:"arraybuffer"}).then(function(a){return new Blob([a])})}),
put:f.wait(function(a,c,e){var f=a.name||a,h=a.id,l=p.createUUID();return g.Pledge().then(function(){if(c)return x(c)}).then(function(a){var c=e&&e.lastModified?(new Date(e.lastModified)).toISOString():void 0,d=[];d.push("--"+l);d.push("Content-Type: application/json");d.push("");d.push(JSON.stringify({name:f,parents:h?void 0:["appDataFolder"],modifiedTime:c}));d.push("--"+l);a&&(d.push("Content-Type: application/octet-stream"),d.push("Content-Transfer-Encoding: base64"),d.push(""),d.push(q.Base64.encode(a)),
d.push("--"+l+"--"));d.push("");return b.request({method:h||!a?"PATCH":"POST",url:"https://www.googleapis.com/"+(a?"upload/":"")+"drive/v3/files"+(h?"/"+h:"")+"?"+k.hash2params({uploadType:"multipart"}),headers:{"Content-Type":"multipart/related; boundary="+l},data:d.join("\r\n")})})}),delete:f.wait(function(a){return b.request({method:"DELETE",url:"https://www.googleapis.com/drive/v3/files/"+(a.id||a)+"?"+k.hash2params({spaces:"appDataFolder"}),headers:{"Content-Type":" application/json"}})}),watch:{start:function(){if(!e){e=
!0;var d,c=function(){a=null;e&&b.request({method:"GET",url:"https://www.googleapis.com/drive/v3/changes/?"+k.hash2params({pageToken:d,spaces:"appDataFolder",pageSize:1E3,includeRemoved:!0}),headers:{"Content-Type":" application/json"}}).then(function(a){if(!e)return g.Breach();var c=a?JSON.parse(a):{};if(!(d=c.newStartPageToken))return console.warn("Google Drive: watch token error",a),b.watch.stop();c.nextPageToken&&console.warn("Google Drive: too much changes",a);(c.changes||[]).forEach(function(a){var b,
d;"file"===a.type&&(d=a.file)&&(b=Date.parse(a.time),isNaN(b)&&(b=Date.now()),f.changes.notify({id:d.id,time:b,name:d.name,removed:a.removed}))})}).fail(function(a){console.warn("Google Drive: file changes check failed",a)}).always(function(){a=window.setTimeout(c,18E5)})};b.request({method:"GET",url:"https://www.googleapis.com/drive/v3/changes/startPageToken",headers:{"Content-Type":" application/json"}}).then(function(a){if(!(d=(a?JSON.parse(a):{}).startPageToken))return console.warn("Google Drive: watch token error",
a),b.watch.stop();c()})}},stop:function(){e=!1;a&&(window.clearTimeout(a),a=null)}}};return b}),dropbox:(new m("dropbox")).extend(function(f){var e={config:{redirect_uri:"https://tampermonkey.net/oauth.php",request_uri:"https://www.dropbox.com/1/oauth2/authorize",client_id:"gq3auc9yym0e21y",storage_key:"db_config",response_type:"token"},request:function(a){a.headers=a.headers||{};a.headers.Authorization="Bearer "+e.credentials.access_token;return f.request.apply(this,arguments).then(function(a){return a},
function(b){return b?-1==[400,401].indexOf(b.status)||(console.warn("Dropbox: authentication error",b),e.credentials={},a.retry_auth)?g().reject(b.statusText||b.responseText):(a.retry_auth=!0,e.oauth.run().then(function(){return e.request(a)})):(console.warn("Dropbox: timeout"),g().reject("Timeout"))})},list:f.wait(function(){return e.request({method:"POST",url:"https://api.dropboxapi.com/2/files/list_folder",headers:{"Content-Type":" application/json"},data:{path:""}}).then(function(a){var b=JSON.parse(a);
b.has_more&&console.warn("Dropbox: too much files",a);return b.entries.map(function(a){return{name:a.name,size:a.size,modified:(new Date(a.server_modified)).getTime()}})})}),get:f.wait(function(a){return e.request({method:"POST",url:"https://content.dropboxapi.com/2/files/download",headers:{"Dropbox-API-Arg":JSON.stringify({path:"/"+(a.name||a)})},responseType:"arraybuffer"}).then(function(a){return new Blob([a])})}),put:f.wait(function(a,b){return e.request({method:"POST",url:"https://content.dropboxapi.com/2/files/upload",
headers:{"Dropbox-API-Arg":JSON.stringify({path:"/"+(a.name||a),mode:"overwrite"}),"Content-Type":"application/octet-stream"},data_type:"typified",data:{type:"raw",value:b}})}),delete:f.wait(function(a){return e.request({method:"POST",url:"https://api.dropboxapi.com/2/files/delete",headers:{"Content-Type":" application/json"},data:{path:"/"+(a.name||a)}})})};return e}),onedrive:(new m("onedrive")).extend(function(f){var e={config:{redirect_uri:"https://tampermonkey.net/oauth.php",request_uri:"https://login.live.com/oauth20_authorize.srf",
client_id:"000000004C1A3122",storage_key:"od_config",response_type:"token",scope:"onedrive.appfolder"},request:function(a){a.headers=a.headers||{};a.headers.Authorization="Bearer "+e.credentials.access_token;return f.request.apply(this,arguments).then(function(a){return a},function(b){return b?-1==[401].indexOf(b.status)||(console.warn("OneDrive: authentication error",b),e.credentials={},a.retry_auth)?g().reject(b.statusText||b.responseText):(a.retry_auth=!0,e.oauth.run().then(function(){return e.request(a)})):
(console.warn("OneDrive: timeout"),g().reject("Timeout"))})},list:f.wait(function(){return e.request({method:"GET",url:"https://api.onedrive.com/v1.0/drive/special/approot/children",headers:{"Content-Type":" application/json"}}).then(function(a){var b=JSON.parse(a);b["@odata.nextLink"]&&console.warn("OneDrive: too much files",a);return b.value.map(function(a){return{name:a.name,size:a.size,modified:(new Date(a.lastModifiedDateTime)).getTime()}})})}),get:f.wait(function(a){return e.request({method:"GET",
url:"https://api.onedrive.com/v1.0/drive/special/approot:/"+encodeURIComponent(a.name||a)+":/content",responseType:"arraybuffer"}).then(function(a){return new Blob([a])})}),put:f.wait(function(a,b){return e.request({method:"PUT",url:"https://api.onedrive.com/v1.0/drive/special/approot:/"+encodeURIComponent((a.name||a).replace(/[#%<>:"|\?\*\/\\]/g,"-"))+":/content",headers:{"Content-Type":"application/octet-stream"},data_type:"typified",data:{type:"raw",value:b}})}),delete:f.wait(function(a){return e.request({method:"DELETE",
url:"https://api.onedrive.com/v1.0/drive/special/approot:/"+encodeURIComponent(a.name||a)})})};return e})};Registry.register("cloud","5549",m)});
