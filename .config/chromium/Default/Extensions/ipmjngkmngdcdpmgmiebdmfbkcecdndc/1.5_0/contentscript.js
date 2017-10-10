window.top === window && chrome.runtime.sendMessage({type:'reset'});
document.addEventListener('canvasfingerprintblock', function(a) {
  a = a.detail;
  var b = document.getElementById(a.proxyCanvasId);
  document.body.removeChild(b);
  b = b.toDataURL();
  chrome.runtime.sendMessage({type:'block', dataURL:b, method:a.method, args:a.args, width:a.width, height:a.height});
});
var c = document.createElement('script');
c.textContent = "(function(){function c(a){function d(){if(a.Function.prototype.call===k&&a.Function.prototype.apply===r){var l=s.call(arguments,0),c=this.canvas;b.width=c.width;b.height=c.height;var d=m.apply(t,l);g(c,'getImageData',l);return d}}function c(){if(a.Function.prototype.call===k)return b.width=this.width,b.height=this.height,g(this,'toDataURL'),u.call(b)}function g(a,c,d){var b=n.createElement('canvas'),e=b.width=a.width,f=b.height=a.height;a=p.call(a,'2d');a=m.call(a,0,0,e,f);var h=p.call(b,'2d');v.call(h,a,0,0);b.style.display='none';a='hchdjfdgedmgedlamifegagalinjnhhe-proxy-canvas-'+w++;b.id=a;document.body.appendChild(b);document.dispatchEvent(new x('canvasfingerprintblock',{detail:{proxyCanvasId:a,method:c,args:d,width:e,height:f}}))}var n=a.document,q=a.Function,h=a.Array,x=a.CustomEvent,e=a.HTMLCanvasElement,f=a.CanvasRenderingContext2D,u=e.prototype.toDataURL,p=e.prototype.getContext,m=f.prototype.getImageData,v=f.prototype.putImageData,k=q.prototype.call,r=q.prototype.apply,b=n.createElement('canvas'),t=b.getContext('2d'),s=h.prototype.slice,w=0;e.prototype.toDataURL=function(){return c.apply(this,arguments)};f.prototype.getImageData=function(){return d.apply(this,arguments)}}c(window);var g=HTMLIFrameElement.prototype.__lookupGetter__('contentWindow'),h=HTMLIFrameElement.prototype.__lookupGetter__('contentDocument');Object.defineProperties(HTMLIFrameElement.prototype,{contentWindow:{get:function(){var a=g.call(this);try{a.HTMLCanvasElement}catch(d){return console.log('CanvasFingerprintBlock: Not patching HTMLIFrameElement.contentWindow because its properties could not be accessed anyway: %o',d),a}c(a);return a}},contentDocument:{get:function(){var a=g.call(this);try{a.HTMLCanvasElement}catch(d){return console.log('CanvasFingerprintBlock: Not patching HTMLIFrameElement.contentWindow because its properties could not be accessed anyway: %o',d),a}c(a);return h.call(this)}}})})();";
document.documentElement.appendChild(c);
c.parentNode.removeChild(c);

