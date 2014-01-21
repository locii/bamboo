/* global console, jsonView *//*
 * ViewJSON
 * Version 1.0
 * A Google Chrome extension to display JSON in a user-friendly format
 *
 * This is a chromeified version of the JSONView Firefox extension by Ben Hollis:
 * http://jsonview.com
 * http://code.google.com/p/jsonview
 *
 * Also based on the XMLTree Chrome extension by Moonty & alan.stroop
 * https://chrome.google.com/extensions/detail/gbammbheopgpmaagmckhpjbfgdfkpadb
 *
 * port by Jamie Wilkinson (@jamiew) | http://jamiedubs.com | http://github.com/jamiew
 * MIT license / copyfree (f) F.A.T. Lab http://fffff.at
 * Speed Project Approved: 2h
 */function collapse(e){var t=e.target,n=t.parentNode.getElementsByClassName("collapsible");if(!n.length)return;n=n[0];if(n.style.display==="none"){var r=n.parentNode.getElementsByClassName("ellipsis")[0];n.parentNode.removeChild(r);n.style.display=""}else{n.style.display="none";var r=document.createElement("span");r.className="ellipsis";r.innerHTML=" &hellip; ";n.parentNode.insertBefore(r,n)}t.innerHTML=t.innerHTML==="-"?"+":"-"}function addCollapser(e){if(e.nodeName!=="LI")return;var t=document.createElement("div");t.className="collapser";t.innerHTML="-";t.addEventListener("click",collapse,!1);e.insertBefore(t,e.firstChild)}function jsonView(e,t){this.debug=!1;if(e.indexOf("#")!==-1){this.idType="id";this.id=e.replace("#","")}else{if(e.indexOf(".")===-1){this.debug&&console.log("Can't find that element");return}this.idType="class";this.id=e.replace(".","")}this.data=document.getElementById(this.id).innerHTML;if(typeof t!==undefined)if(t.indexOf("#")!==-1){this.targetType="id";this.target=t.replace("#","")}else{if(e.indexOf(".")===-1){this.debug&&console.log("Can't find the target element");return}this.targetType="class";this.target=t.replace(".","")}if(/^\<pre.*\>(.*)\<\/pre\>$/.test(this.data)){this.debug&&console.log("JSONView: data is wrapped in <pre>...</pre>, stripping HTML...");this.data=this.data.replace(/<(?:.|\s)*?>/g,"")}var n=/^\s*([\[\{].*[\}\]])\s*$/,r=/^[\s\u200B\uFEFF]*([\w$\[\]\.]+)[\s\u200B\uFEFF]*\([\s\u200B\uFEFF]*([\[{][\s\S]*[\]}])[\s\u200B\uFEFF]*\);?[\s\u200B\uFEFF]*$/,i=/([\[\{][\s\S]*[\]\}])\)/,s=n.test(this.data),o=r.test(this.data);this.debug&&console.log("JSONView: is_json="+s+" is_jsonp="+o);if(s||o){this.debug&&console.log("JSONView: sexytime!");function u(){}u.prototype={htmlEncode:function(e){return e!=null?e.toString().replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""},decorateWithSpan:function(e,t){return'<span class="'+t+'">'+this.htmlEncode(e)+"</span>"},valueToHTML:function(e){var t=typeof e,n="";e===null?n+=this.decorateWithSpan("null","null"):e&&e.constructor===Array?n+=this.arrayToHTML(e):t==="object"?n+=this.objectToHTML(e):t==="number"?n+=this.decorateWithSpan(e,"num"):t==="string"?/^(http|https):\/\/[^\s]+$/.test(e)?n+='<a href="'+e+'">'+this.htmlEncode(e)+"</a>":n+=this.decorateWithSpan('"'+e+'"',"string"):t==="boolean"&&(n+=this.decorateWithSpan(e,"bool"));return n},arrayToHTML:function(e){var t='[<ul class="array collapsible">',n=!1;for(var r in e){n=!0;t+="<li>";t+=this.valueToHTML(e[r]);t+="</li>"}t+="</ul>]";n||(t="[ ]");return t},objectToHTML:function(e){var t='{<ul class="obj collapsible">',n=!1;for(var r in e){n=!0;t+="<li>";t+='<span class="prop">'+this.htmlEncode(r)+"</span>: ";t+=this.valueToHTML(e[r]);t+="</li>"}t+="</ul>}";n||(t="{ }");return t},jsonToHTML:function(e,t,n){var r="";if(t){r+='<div class="callback">'+t+" (</div>";r+='<div id="json">'}else r+='<div id="json">';r+=this.valueToHTML(e);r+="</div>";t&&(r+='<div class="callback">)</div>');return this.toHTML(r,n)},errorPage:function(e,t,n){var r='<div id="error">Error parsing JSON: '+e.message+"</div>";r+="<h1>"+e.stack+":</h1>";r+='<div id="json">'+this.htmlEncode(t)+"</div>";return this.toHTML(r,n+" - Error")},toHTML:function(e){return e}};this.jsonFormatter=new u;var a="",f="",l="",c=r.exec(this.data);if(c&&c.length===3){this.debug&&console.log("THIS IS JSONp");l=c[1];f=c[2]}else{this.debug&&console.log("Vanilla JSON");f=this.data}this.debug&&console.log(f);try{var h=JSON.parse(f);if(!h)throw"There was no object!";a=this.jsonFormatter.jsonToHTML(h,l)}catch(p){this.debug&&console.log(p);a=this.jsonFormatter.errorPage(p,this.data)}var d="<style type=\"text/css\">.jsonViewOutput .prop{font-weight:700;}.jsonViewOutput .null{color:red;}.jsonViewOutput .string{color:green;}.jsonViewOutput .collapser{position:absolute;left:-1em;cursor:pointer;}.jsonViewOutput li{position:relative;}.jsonViewOutput li:after{content:',';}.jsonViewOutput li:last-child:after{content:'';}.jsonViewOutput #error{-moz-border-radius:8px;border:1px solid #970000;background-color:#F7E8E8;margin:.5em;padding:.5em;}.jsonViewOutput .errormessage{font-family:monospace;}.jsonViewOutput #json{font-family:monospace;font-size:1.1em;}.jsonViewOutput ul{list-style:none;margin:0 0 0 2em;padding:0;}.jsonViewOutput h1{font-size:1.2em;}.jsonViewOutput .callback + #json{padding-left:1em;}.jsonViewOutput .callback{font-family:monospace;color:#A52A2A;}.jsonViewOutput .bool,.jsonViewOutput .num{color:blue;}</style>";if(this.targetType!==undefined){this.idType=this.targetType;this.id=this.target}var v;if(this.idType==="class"){v=document.getElementsByClassName(this.id);if(v){v.className+=v.className?" jsonViewOutput":"jsonViewOutput";v.innerHTML=d+a}}else if(this.idType==="id"){v=document.getElementById(this.id);if(v){v.className+=v.className?" jsonViewOutput":"jsonViewOutput";v.innerHTML=d+a}v.innerHTML=d+a}var m=document.getElementsByClassName("collapsible");for(var g=0;g<m.length;g++)addCollapser(m[g].parentNode)}};