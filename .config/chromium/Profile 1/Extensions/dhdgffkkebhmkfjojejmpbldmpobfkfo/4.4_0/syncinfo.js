Registry.require("promise helper xmlhttprequest cloud tools convert".split(" "),function(){var n=Registry.log,b=Registry.get("promise"),A=Registry.get("helper"),G=Registry.get("xmlhttprequest").run,h=Registry.get("cloud"),u=Registry.get("convert"),y=Registry.get("tools"),p=0,v={ePASTEBIN:1,eCHROMESYNC:2,eSYNCFS:3,eGDRIVE:4},w=[],r=!1,t=null,x=[{method:"HEAD",url:"https://www.google.com",extract:function(a,b){try{for(var c=b?b.split("\n"):[],e=0;e<c.length;e++){var g=c[e].split(":"),n=g.shift()||"",
h=g.join(":")||"";if("date"==n.trim().toLowerCase()&&h)return new Date(h)}}catch(z){}return null}},{method:"GET",url:"https://json-time.appspot.com/time.json",extract:function(b){try{var d=JSON.parse(b);if(!d.error&&d.datetime)return new Date(d.datetime)}catch(c){}return null}}],q=function(){var a=function(e){var a=function(b){if(p==v.eGDRIVE){var c=b.name,e=/.user.js$/;n.debug("si: cloud file changed",c,b);(c.match(/.meta.json$/)||c.match(e))&&w.forEach(function(b){b(c)})}},c={},d;return{init:function(){return b.Pledge().then(function(){if(!h[e].credentials)return h[e].list()}).then(function(){d||
(d=h[e].changes.listen(),d.progress(function(b){a(b)}));return!0})},list:function(b){return h[e].list(b).then(function(b){c={};var e={},m={},a,z,d=Date.now();b.forEach(function(f){c[f.name]=f;var l=/.meta.json$/,B=/.user.js$/;if(f.modified>d)n.debug("si: ignore future list item",d,f);else if((a=f.name.match(l))||(z=f.name.match(B)))a?(f.uuid=l=f.name.replace(l,""),f.lastModified=f.modified,e[l]=f):z&&(l=f.name.replace(B,""),m[l]=f)});return Object.keys(e).map(function(f){var l;if(l=e[f])return l.source=
m[f],l.options=l.options||{},l}).filter(function(f){return f})})},setSource:function(a,d){var g=a+".user.js",m=c[g],k;if(m&&(k=m.md5)&&k==u.MD5(d,"utf-8"))return n.debug("si: remote source data matches, skip upload of",g),b.Pledge();k=new Blob([d],{type:"text/plain"});return h[e].put(m||g,k)},getSource:function(a,d){var g,m=a+".user.js",k=c[m];if(k)return d&&(g=k.md5)&&u.MD5(d,"utf-8")==g?(n.debug("si: remote source data matches, skip download of",m),b.Pledge(d)):h[e].get(k).then(y.readAsText);n.warn("si: list cache does not contain this UUID",
a);return b.Breach()},getMeta:function(a){var d;return(d=c[a+".meta.json"])?h[e].get(d).then(y.readAsText).then(function(b){var c;var e=null;try{e=JSON.parse(b)}catch(g){}e&&e.uuid?b=e:(n.debug("si: unable to parse extended info of undefined"),b=null);if((c=b)&&(c.uuid=a))return c.lastModified=c.lastModified||d.modified,c.options=c.options||{},c}):b.Breach()},setMeta:function(b,a){var d=new Blob([JSON.stringify(b)],{type:"text/plain"}),g=b.uuid+".meta.json";return h[e].put(c[g]||g,d,a)},remove:function(b){b.options.removed=
Date.now()+t;var a=new Blob([JSON.stringify(b)],{type:"text/plain"});return h[e].put(b.uuid+".meta.json",a).then(function(){var a;if(a=c[b.uuid+".user.js"])return h[e].delete(a)})},reset:function(){return h[e].list(!0).then(function(b){return b=b.filter(function(b){var a=/.user.js$/;return b.name.match(/.meta.json$/)||b.name.match(a)})}).then(function(a){var d=[];a.forEach(function(a){d.push(function(){var c=b();h[e].delete(a).always(function(){c.resolve()});return c.promise()}())});return b.when(d).always(function(){c=
{}})})}}}("drive"),d=function(){var a=!1,c,d=function(a,l){p==v.eCHROMESYNC&&"sync"==l&&b.Pledge().then(function(){if(null===t)return C()}).then(function(){var b=new RegExp(c+"$");a&&Object.keys(a).forEach(function(c){var d=a[c];n.debug('si: storage key "%s" in namespace "%s" changed. Old value was "%s", new value is "%s".',c,l,d.oldValue,d.newValue);if(-1!=c.search(b))for(var e=0;e<w.length;e++)if(!k[c]){var g=r(d.newValue,c);if(g)w[e](c,g)}})})},h=function(c){var a=b(),d=[];c?q().done(function(b){d=
A.select(b,function(b){return b.item&&b.item.uuis==c});a.resolve(d)}).fail(function(b){a.reject(b)}):a.resolve(d);return a.promise()},q=function(){return D(function(){var a=b(),d=new RegExp(c+"$");rea.storage.sync.get(null,function(b){var c=[];b&&Object.keys(b).forEach(function(a){-1!=a.search(d)&&c.push({key:a,item:r(b[a],a)})});a.resolve(c)});return a.promise()})},r=function(b,a){var c=null;try{c=JSON.parse(b)}catch(d){}return c&&(c.url||c.options)?c:(n.debug("si: unable to parse extended info of "+
a),null)},u=function(a){return a.then(function(a){var c={};a=A.select(a,function(a,b){if(!c[a.key])return c[a.key]=!0});if(1<a.length){var d=b(),e=[],f=a.pop();a.forEach(function(a){e.push(y(a.key))});b.when(e).done(function(){d.resolve(f)});return d.promise()}return b.Pledge(a[0])})},m=null,k={},y=function(a,c){var d=b();rea.storage.sync.remove(a,function(a){(a=rea.runtime.lastError)?d.reject(a):d.resolve()});return d.promise()},x=function(a){var c=b();rea.storage.sync.set(k,function(a){(a=rea.runtime.lastError)?
c.reject(a):(k={},c.resolve())});return c.promise()};return{init:function(){var f=!0;if(!a)try{rea.storage.onChanged.addListener(d),a=!0}catch(l){n.warn("si: error registering sync callback: "+l.message),f=!1}c="@v2";return b.Pledge(f)},list:function(){return b.Pledge().then(function(){if(null===t)return C()}).then(function(){return q()}).then(function(a){var d=new RegExp(c+"$"),e=[];a.forEach(function(a){var c=a.key,b=a.item;a=c.replace(d,"");var f=null;if(f=k[c]?r(k[c],c):b)c=f.options||{},b=!!c.removed,
e.push({id:a,uuid:b?a:f.uuid,lastModified:b?c.removed:f.lastModified,url:f.url,options:c})});return b.Pledge(e)})},setMeta:function(a,d){var e=b();u(h(a.uuid)).done(function(b){var h;b?(h=b.key,b=b.item):(h=a.uuid+c,b={});b.url=a.url;b.options=a.options||{};b.uuid=a.uuid;d.lastModified&&(b.lastModified=d.lastModified);k[h]=JSON.stringify(b);m&&window.clearTimeout(m);m=window.setTimeout(x,3E3);e.resolve()});return e.promise()},remove:function(a){var d=b();u(h(a.uuid)).done(function(b){var e;b?(e=b.key,
b=b.item):(e=a.uuid+c,b={});b.options=b.options||{};b.options.removed=Date.now()+t;k[e]=JSON.stringify(b);m&&window.clearTimeout(m);m=window.setTimeout(x,3E3);d.resolve()});return d.promise()},reset:function(){return D(function(){var a=b();rea.storage.sync.clear(function(){k={};a.resolve()});return a.promise()})}}}(),c={};rea.storage.sync.supported&&(c[v.eCHROMESYNC]=d);c[v.eGDRIVE]=a;return c}(),E=function(){var a=b(),d=0,c=function(){if(d<x.length){var b=x[d];G({method:b.method,url:b.url},{ondone:function(g){4==
g.readyState&&200==g.status?(g=b.extract(g.responseText,g.responseHeaders),null===g?(d++,window.setTimeout(c,1)):a.resolve(g)):(d++,window.setTimeout(c,1))}})}else a.reject(void 0)};c();return a.promise()},C=function(){var a=b();E().done(function(a){t=a.getTime()-Date.now()}).fail(function(){t=0;n.log("si: time offset detection failed!")}).always(a.resolve);return a.promise()},D=function(a,d){var c=b();void 0===d&&(d=3);var e=function(){if(r)window.setTimeout(e,500);else{r=!0;try{a().always(function(){r=
!1}).done(function(){c.resolve.apply(this,arguments)}).fail(function(){0<--d?(n.log("si: some retries left, wait for",6E4,"ms"),window.setTimeout(e,6E4)):(n.warn("si: no retries left, skipping this sync request!"),c.reject("no retries left"))})}catch(b){n.warn(b),r=!1,c.reject(b)}}};e();return c.promise()},F={init:function(a){w=[];p=a;return q[p]?q[p].init().done(function(a){}):b.Breach()},getUtc:E,debug:function(a){},addChangeListener:function(a){w.push(a)},caps:function(){var a={};a.__defineGetter__("specialMeta",
function(){return q[p]&&!!q[p].getMeta});a.__defineGetter__("syncsSource",function(){return q[p]&&!!q[p].getSource});return a}(),types:v};"list setMeta getMeta setSource getSource reset remove".split(" ").forEach(function(a){F[a]=function(){return q[p]&&q[p][a]?q[p][a].apply(this,arguments):b.Pledge()}});Registry.register("syncinfo","5549",function(a){h.init(function(d){var c=b(),e=a.openAndWatch({url:d.url},function(a){a?c&&c.notify(a):c&&c.reject("auth_failed")});return{promise:c.promise(),
close:function(){e.cancel()}}});return F})});