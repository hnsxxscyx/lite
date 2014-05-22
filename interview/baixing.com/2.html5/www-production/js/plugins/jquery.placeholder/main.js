define(["jquery"],function(e){var t,n=function(e){function t(t){var n={},r=/^jQuery\d+$/;return e.each(t.attributes,function(e,t){t.specified&&!r.test(t.name)&&(n[t.name]=t.value)}),n}function n(t,n){var r=this,i=e(r);if((r.value==i.attr("placeholder")||""==r.value)&&i.hasClass("placeholder"))if(i.data("placeholder-password")){if(i=i.hide().next().show().attr("id",i.removeAttr("id").data("placeholder-id")),t===!0)return i[0].value=n}else r.value="",i.removeClass("placeholder"),r==document.activeElement&&r.select()}function r(){var r,i=this,o=e(i),a=this.id;if(""==e(i).val()){if("password"==i.type){if(!o.data("placeholder-textinput")){try{r=o.clone().attr({type:"text"})}catch(s){r=e("<input>").attr(e.extend(t(this),{type:"text"}))}r.removeAttr("name").data({"placeholder-password":!0,"placeholder-id":a}).bind({"focus.placeholder":n,"keydown.placeholder":n}),o.data({"placeholder-textinput":r,"placeholder-id":a}).before(r)}o=o.removeAttr("id").hide().prev().attr("id",a).show()}o.addClass("placeholder"),o[0].value=o.attr("placeholder")}else o.removeClass("placeholder")}var i,o,a="placeholder"in document.createElement("input"),s="placeholder"in document.createElement("textarea"),u={},l=e.valHooks;if(a&&s)o=u.placeholder=function(){return this},o.input=o.textarea=!0;else{if(o=u.placeholder=function(){var e=this;return e.filter((a?"textarea":":input")+"[placeholder]").unbind({"focus.placeholder":n,"keydown.placeholder":n,"blur.placeholder":r}).bind({"focus.placeholder":n,"keydown.placeholder":n,"blur.placeholder":r}).data("placeholder-enabled",!0).trigger("blur.placeholder"),e},o.input=a,o.textarea=s,i={get:function(t){var n=e(t);return n.data("placeholder-enabled")&&n.hasClass("placeholder")?"":t.value},set:function(t,i){var o=e(t);return o.data("placeholder-enabled")?(""==i?(t.value=i,t!=document.activeElement&&r.call(t)):o.hasClass("placeholder")?n.call(t,!0,i)||(t.value=i):t.value=i,o):t.value=i}},!a){var c=l.input;l.input=c?{get:function(){return c.get&&c.get.apply(this,arguments),i.get.apply(this,arguments)},set:function(){return c.set&&c.set.apply(this,arguments),i.set.apply(this,arguments)}}:i}if(!s){var c=l.textarea;l.textarea=c?{get:function(){return c.get&&c.get.apply(this,arguments),i.get.apply(this,arguments)},set:function(){return c.set&&c.set.apply(this,arguments),i.set.apply(this,arguments)}}:i}e(function(){e(document).delegate("form","submit.placeholder",function(){var t=e(".placeholder",this).each(n);setTimeout(function(){t.each(r)},10)})}),e(window).bind("beforeunload.placeholder",function(){e(".placeholder").each(function(){this.value=""})})}return o}(e);return t=n.input&&n.textarea?function(){}:function(t){t||(t=e("input, textarea")),t&&n.call(e(t))}});