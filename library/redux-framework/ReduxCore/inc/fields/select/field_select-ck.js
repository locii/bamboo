/* global redux_change */(function(e){"use strict";function t(e){if(e.hasOwnProperty("id"))return"<span class='elusive'><i class='"+e.id+"'></i>"+"&nbsp;&nbsp;"+e.id.toUpperCase()+"</span>"}e.redux=e.redux||{};e(document).ready(function(){e.redux.select()});e.redux.select=function(){e("select.redux-select-item").each(function(){var n={width:"resolve",triggerChange:!0,allowClear:!0};if(e(this).siblings(".select2_params").size()>0){var r=e(this).siblings(".select2_params").val();r=JSON.parse(r);n=e.extend({},n,r)}e(this).hasClass("font-icons")&&(n=e.extend({},{formatResult:t,formatSelection:t,escapeMarkup:function(e){return e}},n));e(this).select2(n);if(e(this).hasClass("select2-sortable")){n={};n.bindOrder="sortableStop";n.sortableOptions={placeholder:"ui-state-highlight"};e(this).select2Sortable(n)}e(this).on("change",function(){redux_change(e(e(this)));e(this).select2SortableOrder()})})}})(jQuery);