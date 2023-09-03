(()=>{"use strict";var t,e;!function(t){t.edit="edit",t.itemclick="item.click",t.itemdblclick="item.dblclick",t.folderclick="folder.click",t.folderdblclick="folder.dblclick",t.itemcheckbox="item.checkbox",t.foldercheckbox="folder.checkbox"}(t||(t={})),function(t){t.item="item",t.folder="folder",t.both="both"}(e||(e={}));var o=function(){function e(){this._callbacks=[]}return e.prototype.fire=function(t,e,o,i,n,r){void 0===e&&(e=!1),void 0===o&&(o=!1),void 0===i&&(i=!1),void 0===n&&(n=!1),void 0===r&&(r=!1);var s=this._callbacks[t];s?s(e,o,i,n,r):console.log("Callback ".concat(t," have no assigned function."))},e.prototype.on=function(e,o){Object.values(t).includes(e)?this._callbacks[e]=o:console.log("Wrong event type. Pls check it again",e)},e}();function i(t,e){return e.length>0&&e.forEach((function(e){t.classList.add(e)})),t}function n(t,e,o){return i(t=function(t,e){return e.length>0&&e.forEach((function(e){t.classList.remove(e)})),t}(t,e),o)}function r(t,e,o){void 0===e&&(e=[]),void 0===o&&(o="");var n=document.createElement(t);return o.length>0&&(n.type=o),i(n,e)}var s=function(){return s=Object.assign||function(t){for(var e,o=1,i=arguments.length;o<i;o++)for(var n in e=arguments[o])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},s.apply(this,arguments)},l=function(t,e,o){if(o||2===arguments.length)for(var i,n=0,r=e.length;n<r;n++)!i&&n in e||(i||(i=Array.prototype.slice.call(e,0,n)),i[n]=e[n]);return t.concat(i||Array.prototype.slice.call(e))};const c=function(){function i(t){var e=this;this._el=null,this._options={element:"treeview",class:["treeview","w-20","border","my-4"],header:"Demo header",headerClass:["pt-3","pl-3"],editable:!1,items:[],listClass:["mb-1","pl-3","pb-2"],subListClass:["nested"],listSubClass:["closed"],listSubArrowClass:["fas","fa-angle-right","rotate"],checkBoxClass:["mx-1","form-check-input"],itemClass:[]},this._CB=new o,this._options=s(s({},this._options),t),this._el=document.getElementById(this._options.element),this._el&&(this._options.class.forEach((function(t){var o;null===(o=e._el)||void 0===o||o.classList.add(t)})),this._options.items.length>0&&this._drawHTML(),this._init())}return i.prototype.setElements=function(t){t&&(null==t||t.length)},i.prototype.on=function(t,e){this._CB.on(t,e)},i.prototype._init=function(){var t,e=null===(t=this._el)||void 0===t?void 0:t.getElementsByTagName("ul")[0];void 0!==e&&this._events(e)},i.prototype._events=function(e,o){var i=this;void 0===o&&(o="");var s=this._CB;if(void 0!==e)for(var l=e.children,c=function(e){var c=l[e],p=0==o.length?e.toString():o+":"+e.toString();c.getAttribute("tl-id")||c.setAttribute("tl-id",p);var d=c.querySelector(":scope > ul"),u=c.querySelector(":scope > a");if(d&&u){a._events(d,p),u.addEventListener("click",(function(e){if(e.stopPropagation(),1==e.detail){s.fire(t.folderclick,c.getAttribute("tl-id")),u.classList.toggle("open");var o=u.querySelector(":scope > i");o&&o.classList.toggle("down");var i=u.querySelector(":scope > span > i"),r="",l="";i&&(r=i.getAttribute("class-close"),l=i.getAttribute("class-open")),d.classList.contains("active")?(d.classList.remove("active"),c.classList.contains("treeview-animated-items")?(void 0===p&&(p=500),(a=d).style.transitionProperty="height, margin, padding",a.style.transitionDuration=p+"ms",a.style.boxSizing="border-box",a.style.height=a.offsetHeight+"px",a.offsetHeight,a.style.overflow="hidden",a.style.height="0",a.style.paddingTop="0",a.style.paddingBottom="0",a.style.marginTop="0",a.style.marginBottom="0",window.setTimeout((function(){a.style.display="none",a.style.removeProperty("height"),a.style.removeProperty("padding-top"),a.style.removeProperty("padding-bottom"),a.style.removeProperty("margin-top"),a.style.removeProperty("margin-bottom"),a.style.removeProperty("overflow"),a.style.removeProperty("transition-duration"),a.style.removeProperty("transition-property")}),p)):d.style.display="none",r&&l&&n(i,l.split(" "),r.split(" "))):(d.classList.add("active"),c.classList.contains("treeview-animated-items")?function(t,e){void 0===e&&(e=500),t.style.removeProperty("display");var o=window.getComputedStyle(t).display;"none"===o&&(o="block"),t.style.display=o;var i=t.offsetHeight;t.style.overflow="hidden",t.style.height="0",t.style.paddingTop="0",t.style.paddingBottom="0",t.style.marginTop="0",t.style.marginBottom="0",t.offsetHeight,t.style.boxSizing="border-box",t.style.transitionProperty="height, margin, padding",t.style.transitionDuration=e+"ms",t.style.height=i+"px",t.style.removeProperty("padding-top"),t.style.removeProperty("padding-bottom"),t.style.removeProperty("margin-top"),t.style.removeProperty("margin-bottom"),window.setTimeout((function(){t.style.removeProperty("height"),t.style.removeProperty("overflow"),t.style.removeProperty("transition-duration"),t.style.removeProperty("transition-property")}),e)}(d):d.style.display="block",r&&l&&n(i,r.split(" "),l.split(" ")))}var a,p;2==e.detail&&s.fire(t.folderdblclick,c.getAttribute("tl-id"))}));var h=u.querySelector(":scope > input[type='checkbox']");null==h||h.addEventListener("click",(function(e){e.stopPropagation(),s.fire(t.foldercheckbox,c.getAttribute("tl-id"),h.checked)}))}else{var y=c.querySelector(":scope > input[type='checkbox']");null==y||y.addEventListener("click",(function(e){e.stopPropagation(),s.fire(t.itemcheckbox,c.getAttribute("tl-id"),y.checked)})),c.addEventListener("click",(function(e){e.stopPropagation(),1==e.detail?s.fire(t.itemclick,c.getAttribute("tl-id")):s.fire(t.itemdblclick,c.getAttribute("tl-id"))}))}null==c||c.addEventListener("dblclick",(function(t){if(t.stopPropagation(),i._options.editable){var e=function(){var t=r("span",["input-group"]),e=r("input",["form-control","form-control-sm"]);e.type="text",e.setAttribute("placeholder","Enter new name"),t.append(e);var o=r("button",["btn","btn-outline-secondary","form-control-sm"]);o.type="button";var i=r("i",["fas","fa-save"]);return o.append(i),t.append(o),t}();e.style.height=u.offsetHeight+"px";var o=c.getElementsByTagName("span")[0];o&&u&&(u.append(e),o.style.display="none")}}))},a=this,p=0;p<l.length;p++)c(p)},i.prototype.checkbox=function(t,o){var i;void 0===o&&(o=e.both),this._clearCheckBox();var n=null===(i=this._el)||void 0===i?void 0:i.querySelector(":scope > ul");n&&this._makeCheckBox(t,o,n)},i.prototype.update=function(t){var e=this._el.querySelector("[tr-id='".concat(t.id,"]"));return!!e&&(e.replaceWith(this._makeItem(t,t.id)),this._events(e),!0)},i.prototype.remove=function(t){var e=this._el.querySelector("[tr-id='".concat(t,"]"));return!!e&&(e.remove(),!0)},i.prototype._clearCheckBox=function(){var t;(null===(t=this._el)||void 0===t?void 0:t.querySelector(":scope > ul")).querySelectorAll("input[type='checkbox']").forEach((function(t){t.remove()}))},i.prototype._makeCheckBox=function(o,i,n){if(o){var s=this._CB;if(n)for(var l=n.children,c=function(n){var c=l[n],p=c.querySelector(":scope > a")||null,d=c.querySelector(":scope > input[type='checkbox']")||(null==p?void 0:p.querySelector(":scope > input[type='checkbox']"));if(!d&&o){if(d=r("input",a._options.checkBoxClass,"checkbox"),p&&(i==e.both||i==e.folder)){var u=p.querySelector(":scope > span");u&&(d.addEventListener("click",(function(e){e.stopPropagation(),s.fire(t.foldercheckbox,c.getAttribute("tl-id"),d.checked)})),u.prepend(d))}p||i!=e.item&&i!=e.both||(d.addEventListener("click",(function(e){e.stopPropagation(),s.fire(t.itemcheckbox,c.getAttribute("tl-id"),d.checked)})),c.prepend(d));var h=c.querySelector(":scope > ul");h&&a._makeCheckBox(o,i,h)}},a=this,p=0;p<l.length;p++)c(p)}},i.prototype._makeHeader=function(){var t,e,o=function(t,e){void 0===e&&(e=[]);var o=r("h6",e);return o.innerText=t,o}(this._options.header,this._options.headerClass);null===(t=this._el)||void 0===t||t.append(o),null===(e=this._el)||void 0===e||e.append(document.createElement("hr"))},i.prototype._makeItem=function(t,e){var o=r("li",this._options.itemClass);if(t.id?o.setAttribute("tl-id",t.id):o.setAttribute("tl-id",e),t.items){var i=r("a",this._options.listSubClass),n=r("i",this._options.listSubArrowClass);i.append(n);var s=r("span");if(t.checkBox&&s.append(r("input",this._options.checkBoxClass,"checkbox")),t.icon){var c=r("i",l(l([],t.icon,!0),["ic-w","mx-1"],!1));t.icon&&c.setAttribute("class-close",t.icon.join(" ")),t.iconOpen&&c.setAttribute("class-open",t.iconOpen.join(" ")),s.append(c)}s.append(t.text),i.append(s),o.append(i);var a=r("ul",this._options.subListClass);a.style.display="none";for(var p=0;p<t.items.length;p++)a.append(this._makeItem(t.items[p],e+":"+p.toString()));o.append(a)}else t.checkBox&&o.append(r("input",this._options.checkBoxClass,"checkbox")),t.icon&&(c=r("i",l(l([],t.icon,!0),["ic-w","mx-1"],!1)),t.icon&&c.setAttribute("class-close",t.icon.join(" ")),t.iconOpen&&c.setAttribute("class-open",t.iconOpen.join(" ")),o.append(c)),o.append(t.text);return o},i.prototype._drawHTML=function(){var t,e=this;this._el&&(this._el.innerHTML=""),this._options.header&&this._makeHeader();var o=r("ul",this._options.listClass);this._options.items.forEach((function(t,i){o.append(e._makeItem(t,i.toString()))})),null===(t=this._el)||void 0===t||t.append(o)},i}();(function(){if("undefined"!=typeof globalThis)return globalThis;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;throw new Error("Unable to locate global object.")}()).TreeList=c})();