jQuery.extend({createUploadIframe:function(e,t){var r="jUploadFrame"+e,o='<iframe id="'+r+'" name="'+r+'" style="position:absolute; top:-9999px; left:-9999px"';return window.ActiveXObject&&("boolean"==typeof t?o+=' src="javascript:false"':"string"==typeof t&&(o+=' src="'+t+'"')),o+=" />",jQuery(o).appendTo(document.body),jQuery("#"+r).get(0)},createUploadForm:function(e,t,r){var o="jUploadForm"+e,n="jUploadFile"+e,a=jQuery('<form  action="" method="POST" name="'+o+'" id="'+o+'" enctype="multipart/form-data"></form>');if(r)for(var u in r)jQuery('<input type="hidden" name="'+u+'" value="'+r[u]+'" />').appendTo(a);var c=jQuery("#"+t),l=jQuery(c).clone();return jQuery(c).attr("id",n),jQuery(c).before(l),jQuery(c).appendTo(a),jQuery(a).css("position","absolute"),jQuery(a).css("top","-1200px"),jQuery(a).css("left","-1200px"),jQuery(a).appendTo("body"),a},ajaxFileUpload:function(e){e=jQuery.extend({},jQuery.ajaxSettings,e);var t=(new Date).getTime(),r=jQuery.createUploadForm(t,e.fileElementId,"undefined"==typeof e.data?!1:e.data),o=(jQuery.createUploadIframe(t,e.secureuri),"jUploadFrame"+t),n="jUploadForm"+t;e.global&&!jQuery.active++&&jQuery.event.trigger("ajaxStart");var a=!1,u={};e.global&&jQuery.event.trigger("ajaxSend",[u,e]);var c=function(t){var n=document.getElementById(o);try{n.contentWindow?(u.responseText=n.contentWindow.document.body?n.contentWindow.document.body.innerHTML:null,u.responseXML=n.contentWindow.document.XMLDocument?n.contentWindow.document.XMLDocument:n.contentWindow.document):n.contentDocument&&(u.responseText=n.contentDocument.document.body?n.contentDocument.document.body.innerHTML:null,u.responseXML=n.contentDocument.document.XMLDocument?n.contentDocument.document.XMLDocument:n.contentDocument.document)}catch(c){jQuery.handleError(e,u,null,c)}if(u||"timeout"==t){a=!0;var l;try{if(l="timeout"!=t?"success":"error","error"!=l){var d=jQuery.uploadHttpData(u,e.dataType);e.success&&e.success(d,l),e.global&&jQuery.event.trigger("ajaxSuccess",[u,e])}else jQuery.handleError(e,u,l)}catch(c){l="error",jQuery.handleError(e,u,l,c)}e.global&&jQuery.event.trigger("ajaxComplete",[u,e]),e.global&&!--jQuery.active&&jQuery.event.trigger("ajaxStop"),e.complete&&e.complete(u,l),jQuery(n).unbind(),setTimeout(function(){try{jQuery(n).remove(),jQuery(r).remove()}catch(t){jQuery.handleError(e,u,null,t)}},100),u=null}};e.timeout>0&&setTimeout(function(){a||c("timeout")},e.timeout);try{var r=jQuery("#"+n);jQuery(r).attr("action",e.url),jQuery(r).attr("method","POST"),jQuery(r).attr("target",o),r.encoding?jQuery(r).attr("encoding","multipart/form-data"):jQuery(r).attr("enctype","multipart/form-data"),jQuery(r).submit()}catch(l){jQuery.handleError(e,u,null,l)}return jQuery("#"+o).load(c),{abort:function(){}}},handleError:function(e,t,r,o){e.error&&e.error.call(e.context||e,t,r,o),e.global&&(e.context?jQuery(e.context):jQuery.event).trigger("ajaxError",[t,e,o])},uploadHttpData:function(e,t){var r=!t;if(r="xml"==t||r?e.responseXML:e.responseText,"script"==t&&jQuery.globalEval(r),"json"==t)try{r=jQuery.parseJSON($(r).text())}catch(o){"string"==typeof r&&(r=jQuery.parseJSON(r))}return"html"==t&&jQuery("<div>").html(r),"text"==t&&(r=e.responseText),r}});