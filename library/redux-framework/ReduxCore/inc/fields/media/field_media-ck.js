/* global redux_change, wp */// Add a file via the wp.media function
function redux_add_file(e,t){e.preventDefault();var n,r=jQuery(this);if(n){n.open();return}n=wp.media({multiple:!1,library:{},title:r.data("choose"),button:{text:r.data("update")}});n.on("select",function(){var e=n.state().get("selection").first();n.close();if(typeof redux.media[jQuery(t).attr("data-id")]=="undefined"){redux.media[jQuery(t).attr("data-id")]={};redux.media[jQuery(t).attr("data-id")].mode="image"}if(redux.media[jQuery(t).attr("data-id")].mode!==!1&&e.attributes.type!==redux.media[jQuery(t).attr("data-id")].mode)return;t.find(".upload").val(e.attributes.url);t.find(".upload-id").val(e.attributes.id);t.find(".upload-height").val(e.attributes.height);t.find(".upload-width").val(e.attributes.width);redux_change(jQuery(t).find(".upload-id"));var r=e.attributes.url;if(typeof e.attributes.sizes!="undefined"&&typeof e.attributes.sizes.thumbnail!="undefined")r=e.attributes.sizes.thumbnail.url;else if(typeof e.attributes.sizes!="undefined"){var i=e.attributes.height;for(var s in e.attributes.sizes){var o=e.attributes.sizes[s];if(o.height<i){i=o.height;r=o.url}}}else r=e.attributes.icon;t.find(".upload-thumbnail").val(r);t.find(".upload").hasClass("noPreview")||t.find(".screenshot").empty().hide().append('<img class="redux-option-image" src="'+r+'">').slideDown("fast");t.find(".remove-image").removeClass("hide");t.find(".redux-background-properties").slideDown()});n.open()}function redux_remove_file(e){if(!e.find(".remove-image").addClass("hide"))return;e.find(".remove-image").addClass("hide");e.find(".upload").val("");e.find(".upload-id").val("");e.find(".upload-height").val("");e.find(".upload-width").val("");redux_change(jQuery(e).find(".upload-id"));e.find(".redux-background-properties").hide();var t=e.find(".screenshot");t.slideUp();e.find(".remove-file").unbind();jQuery(".section-upload .upload-notice").length>0&&jQuery(".media_upload_button").remove()}(function(e){"use strict";e.redux=e.redux||{};e(document).ready(function(){e.redux.media()});e.redux.media=function(){e(".remove-image, .remove-file").unbind("click").on("click",function(){redux_remove_file(e(this).parents("fieldset.redux-field:first"))});e(".media_upload_button").unbind().on("click",function(t){redux_add_file(t,e(this).parents("fieldset.redux-field:first"))})}})(jQuery);