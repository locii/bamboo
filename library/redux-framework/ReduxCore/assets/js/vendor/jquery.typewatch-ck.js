/*
*	TypeWatch 2.2
*
*	Examples/Docs: github.com/dennyferra/TypeWatch
*	
*  Copyright(c) 2013 
*	Denny Ferrassoli - dennyferra.com
*   Charles Christolini
*  
*  Dual licensed under the MIT and GPL licenses:
*  http://www.opensource.org/licenses/mit-license.php
*  http://www.gnu.org/licenses/gpl.html
*/(function(e){e.fn.typeWatch=function(t){function i(t,n){var i=e(t.el).val();if(i.length>=r.captureLength&&i.toUpperCase()!=t.text||n&&i.length>=r.captureLength){t.text=i.toUpperCase();t.cb.call(t.el,i)}}function s(t){var n=t.type.toUpperCase();if(e.inArray(n,r.inputTypes)>=0){var s={timer:null,text:e(t).val().toUpperCase(),cb:r.callback,el:t,wait:r.wait};r.highlight&&e(t).focus(function(){this.select()});var o=function(t){var n=s.wait,o=!1,u=this.type.toUpperCase();if(typeof t.keyCode!="undefined"&&t.keyCode==13&&u!="TEXTAREA"&&e.inArray(u,r.inputTypes)>=0){n=1;o=!0}var a=function(){i(s,o)};clearTimeout(s.timer);s.timer=setTimeout(a,n)};e(t).on("keydown paste cut input",o)}}var n=["TEXT","TEXTAREA","PASSWORD","TEL","SEARCH","URL","EMAIL","DATETIME","DATE","MONTH","WEEK","TIME","DATETIME-LOCAL","NUMBER","RANGE"],r=e.extend({wait:750,callback:function(){},highlight:!0,captureLength:2,inputTypes:n},t);return this.each(function(){s(this)})}})(jQuery);