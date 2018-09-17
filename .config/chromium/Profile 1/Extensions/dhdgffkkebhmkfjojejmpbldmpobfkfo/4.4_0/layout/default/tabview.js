Registry.require(["crcrc","helper"],function(){var l=Registry.get("helper"),t=Registry.get("crcrc").cr,g=Registry.get("crcrc").crc,c={};Registry.register("layout/default/tabview","5549",{create:function(v,m,f){var a=l.filter(v,/[0-9a-zA-Z]/g);v=!1;void 0==f&&(f={tv:"tv",tv_table:"tv_table",tr_tabs:"tr_tabs",tr_content:"tr_content",td_content:"td_content",td_tabs:"td_tabs",tv_tabs_fill:"tv_tabs_fill",tv_tabs_table:"tv_tabs_table",tv_tabs_align:"tv_tabs_align",tv_contents:"tv_contents",
tv_tab_selected:"tv_tab tv_selected",tv_tab_close:"tv_tab_close",tv_tab:"tv_tab",tv_content:"tv_content"});var y=g("div",f.tv,"main"+a),p=g("table",f.tv_table+" noborder","main_table"+a);p.inserted?v=!0:(c[a]={},c[a].g_entries={},c[a].g_selectedId=null);var z=g("tr",f.tr_tabs,"tabs"+m.id+a),A=g("td",f.td_tabs,"pages"+a),B=g("div",f.tv_tabs_fill,"tv_tabs_fill"+a),C=g("div",f.tv_tabs_table,"tv_tabs_table"+a),q=g("div",f.tv_tabs_align,"tv_tabs_align"+a),D=g("tr",f.tr_content,"content"+m.id+a),E=g("td",
f.td_content,"content"+a),F=g("div",f.tv_contents,"tv_content"+a),G=t("tfoot","tv_footer_t"+a),H=t("tr","tv_footer_tr"+a),I=t("td","tv_footer_td"+a);G.appendChild(H);H.appendChild(I);C.appendChild(q);B.appendChild(C);A.appendChild(B);z.appendChild(A);p.appendChild(z);E.appendChild(F);D.appendChild(E);p.appendChild(D);p.appendChild(G);y.appendChild(p);m.appendChild(y);var J=function(a,c,b){c?a.setAttribute("style",b?l.staticVars.visible_move:l.staticVars.visible):a.setAttribute("style",b?l.staticVars.invisible_move:
l.staticVars.invisible);a.setAttribute("vis",c.toString())},K=function(d,e){var b=d.getId();c[a].g_entries[b]&&e!=c[a].g_entries[b].visible&&(c[a].g_entries[b].visible=e,J(c[a].g_entries[b].tab,e))},w=function(a,c){a&&J(a.content,c,!1)},M=function(d){for(var e=Object.keys(c[a].g_entries),b,h=0;b=e[h];h++)if(b=c[a].g_entries[b],b.tab.id==d.id)return b;return null},x=function(d){if(null===d)return null;for(var e=Object.keys(c[a].g_entries),b,h=0;b=e[h];h++)if(b=c[a].g_entries[b],b.entry.getId()==d)return b.entry;
return null},N=function(d){if(d.getId()!=c[a].g_selectedId){var e=d.getId();c[a].g_selectedId&&w(c[a].g_entries[c[a].g_selectedId],!1);Object.keys(c[a].g_entries).forEach(function(b){b=c[a].g_entries[b];b.entry.getId()==e?b.visible?b.selected||(b.tab.setAttribute("class",f.tv_tab_selected),w(b,!0),b.selected=!0):console.log("tv: WARN: tab selected but not visible!"):b.selected&&(b.tab.setAttribute("class",f.tv_tab),w(b,!1),b.selected=!1)});c[a].g_selectedId=e}},L=function(d){d.hide();d=d.getId();
if(d=c[a].g_entries[d]){d.tab.parentNode.removeChild(d.tab);d.content.parentNode.removeChild(d.content);a:{d=d.tab;for(var e=Object.keys(c[a].g_entries),b,h=0;b=e[h];h++)if(c[a].g_entries[b].tab.id==d.id){d=b;break a}d=null}d&&delete c[a].g_entries[d]}else console.log("tv: WARN: tab not part of tabview!")};m=null;v?m=c[a].tv:(m={getTabById:x,getSelectedTab:function(){return x(c[a].g_selectedId)},getNextTab:function(d){var e=$(q).find("div[tvid]"),b;c[a].g_selectedId&&e.each(function(d,f){b||$(f).attr("tvid")===
c[a].g_selectedId&&(b=$(e.get(d+1)).attr("tvid"))});return x(b||e.first().attr("tvid"))},getPreviousTab:function(d){var e=$(q).find("div[tvid]"),b;c[a].g_selectedId&&e.each(function(d,f){b||$(f).attr("tvid")===c[a].g_selectedId&&(b=$(e.get(d-1)).attr("tvid"))});return x(b||e.last().attr("tvid"))},removeTab:L,appendTab:function(a,c,b,f,g){return this.insertTab(void 0,a,c,b,f,g)},insertTab:function(d,e,b,h,m,l){null===d&&(d=q.firstChild);var n="tab_"+e,k=t("div",n,"content"+a),r=void 0!==k.inserted&&
1==k.inserted,p=t("div",n,"head_text"+a);b.appendChild(p);l&&(n=g("div",f.tv_tab_close,n,"tv_close"+a,"tab_close"),n.inserted||n.addEventListener("click",function(){l()}),n.innerHTML="&#215;",b.appendChild(n));if(r){if(r=M(k))return r.entry;console.log("tv: WARN: old tab, but not in tabs collection!")}var u,r=function(a){""!=a.target.className&&a.target.className==f.tv_tab_close||u.select()};k.setAttribute("tvid",e);k.addEventListener("click",r);b.addEventListener("click",r);k.setAttribute("name",
"tabview_tab"+a);k.setAttribute("class",f.tv_tab);k.appendChild(b);d?q.insertBefore(k,d):q.appendChild(k);h.setAttribute("name","tabview_content"+a);h.setAttribute("class",f.tv_content);F.appendChild(h);u={getId:function(){return e},isVisible:function(){return"true"==k.getAttribute("vis")},isSelected:function(){return c[a].g_selectedId==this.getId()},remove:function(){L(this)},hide:function(){var b=this.getId(),d=b==c[a].g_selectedId;c[a].g_entries[b]?K(this,!1):console.log("tv: WARN: tab not part of tabview!");
if(d){var d=b=null,e;for(e in c[a].g_entries)c[a].g_entries[e].visible&&(b=c[a].g_entries[e],d||b.closable||(d=b));b.closable||(b=d);b?b.entry.select():(c[a].g_selectedId=null,console.log("tv: WARN: selected tab set, but entry collection empty!"))}},show:function(){var b=this.getId();c[a].g_entries[b]?K(this,!0):console.log("tv: WARN: tab not part of tabview!")},select:function(){N(this);m&&m()},setHeading:function(a){b.firstChild.textContent=a},close:function(){l&&l()}};c[a].g_entries[e]={entry:u,
tab:k,content:h,closable:null!=l};w(c[a].g_entries[e],!1);u.show();return u},setFooter:function(a){I.appendChild(a)}},c[a].tv=m);return m}})});