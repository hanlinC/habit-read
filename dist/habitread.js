function jBox(type,options){this.options={id:null,width:"auto",height:"auto",minWidth:null,maxHeight:null,minWidth:null,maxHeight:null,attach:null,trigger:"click",preventDefault:!1,title:null,content:null,getTitle:null,getContent:null,ajax:{url:null,data:"",reload:!1,getData:"data-ajax",setContent:!0,spinner:!0},target:null,position:{x:"center",y:"center"},outside:null,offset:0,attributes:{x:"left",y:"top"},adjustPosition:!1,adjustTracker:!1,adjustDistance:5,fixed:!1,reposition:!1,repositionOnOpen:!0,repositionOnContent:!0,pointer:!1,pointTo:"target",fade:180,animation:null,theme:"Default",addClass:"",overlay:!1,zIndex:1e4,delayOpen:0,delayClose:0,closeOnEsc:!1,closeOnClick:!1,closeOnMouseleave:!1,closeButton:!1,constructOnInit:!1,blockScroll:!1,appendTo:jQuery("body"),draggable:null,dragOver:!0,onInit:function(){},onCreated:function(){},onOpen:function(){},onClose:function(){},onCloseComplete:function(){},confirmButton:"Submit",cancelButton:"Cancel",confirm:null,cancel:null,autoClose:7e3,color:null,stack:!0,audio:!1,volume:100,src:"href",gallery:"data-jbox-image",imageLabel:"title",imageFade:600,imageSize:"contain"},this.defaultOptions={Tooltip:{getContent:"title",trigger:"mouseenter",position:{x:"center",y:"top"},outside:"y",pointer:!0,adjustPosition:!0,reposition:!0},Mouse:{target:"mouse",position:{x:"right",y:"bottom"},offset:15,trigger:"mouseenter",adjustPosition:"flip"},Modal:{target:jQuery(window),fixed:!0,blockScroll:!0,closeOnEsc:!0,closeOnClick:"overlay",closeButton:!0,overlay:!0,animation:"zoomOut"},Confirm:{target:jQuery(window),fixed:!0,attach:jQuery("[data-confirm]"),getContent:"data-confirm",content:"Do you really want to do this?",minWidth:320,maxWidth:460,blockScroll:!0,closeOnEsc:!0,closeOnClick:"overlay",closeButton:!0,overlay:!0,animation:"zoomOut",preventDefault:!0,_onAttach:function(t){if(!this.options.confirm){var i=t.attr("onclick")?t.attr("onclick"):t.attr("href")?t.attr("target")?'window.open("'+t.attr("href")+'", "'+t.attr("target")+'");':'window.location.href = "'+t.attr("href")+'";':"";t.prop("onclick",null).data("jBox-Confirm-submit",i)}},_onCreated:function(){this.footer=jQuery('<div class="jBox-Confirm-footer"/>'),jQuery('<div class="jBox-Confirm-button jBox-Confirm-button-cancel"/>').html(this.options.cancelButton).click(function(){this.options.cancel&&this.options.cancel(),this.close()}.bind(this)).appendTo(this.footer),this.submitButton=jQuery('<div class="jBox-Confirm-button jBox-Confirm-button-submit"/>').html(this.options.confirmButton).appendTo(this.footer),this.footer.appendTo(this.container)},_onOpen:function(){this.submitButton.off("click.jBox-Confirm"+this.id).on("click.jBox-Confirm"+this.id,function(){this.options.confirm?this.options.confirm():eval(this.source.data("jBox-Confirm-submit")),this.close()}.bind(this))}},Notice:{target:jQuery(window),fixed:!0,position:{x:20,y:20},attributes:{x:"right",y:"top"},animation:"zoomIn",closeOnClick:"box",_onInit:function(){this.open(),this.options.delayClose=this.options.autoClose,this.options.delayClose&&this.close()},_onCreated:function(){this.options.color&&this.wrapper.addClass("jBox-Notice-color jBox-Notice-"+this.options.color),this.wrapper.data("jBox-Notice-position",this.options.attributes.x+"-"+this.options.attributes.y)},_onOpen:function(){jQuery.each(jQuery(".jBox-Notice"),function(t,i){return i=jQuery(i),i.attr("id")!=this.id&&i.data("jBox-Notice-position")==this.options.attributes.x+"-"+this.options.attributes.y?this.options.stack?void i.css("margin-"+this.options.attributes.y,parseInt(i.css("margin-"+this.options.attributes.y))+this.wrapper.outerHeight()+10):void i.data("jBox").close({ignoreDelay:!0}):void 0}.bind(this)),this.options.audio&&this.audio({url:this.options.audio,valume:this.options.volume})},_onCloseComplete:function(){this.destroy()}},Image:{target:jQuery(window),fixed:!0,blockScroll:!0,closeOnEsc:!0,closeOnClick:"overlay",closeButton:!0,overlay:!0,animation:"zoomOut",width:800,height:533,attach:jQuery("[data-jbox-image]"),preventDefault:!0,_onInit:function(){this.images=this.currentImage={},this.imageZIndex=1,this.attachedElements&&jQuery.each(this.attachedElements,function(t,i){if(i=jQuery(i),!i.data("jBox-image-gallery")){var s=i.attr(this.options.gallery)||"default";!this.images[s]&&(this.images[s]=[]),this.images[s].push({src:i.attr(this.options.src),label:i.attr(this.options.imageLabel)||""}),"title"==this.options.imageLabel&&i.removeAttr("title"),i.data("jBox-image-gallery",s),i.data("jBox-image-id",this.images[s].length-1)}}.bind(this));var t=function(t,i,s,o){if(!jQuery("#jBox-image-"+t+"-"+i).length){{var e=jQuery("<div/>",{id:"jBox-image-"+t+"-"+i,"class":"jBox-image-container"}).css({backgroundImage:"url("+this.images[t][i].src+")",backgroundSize:this.options.imageSize,opacity:o?1:0,zIndex:s?0:this.imageZIndex++}).appendTo(this.content);jQuery("<div/>",{id:"jBox-image-label-"+t+"-"+i,"class":"jBox-image-label"+(o?" active":"")}).html(this.images[t][i].label).appendTo(this.imageLabel)}!o&&!s&&e.animate({opacity:1},this.options.imageFade)}}.bind(this),i=function(t,i){jQuery(".jBox-image-label.active").removeClass("active"),jQuery("#jBox-image-label-"+t+"-"+i).addClass("active")};this.showImage=function(s){if("open"!=s){var o=this.currentImage.gallery,e=this.currentImage.id+(1*("prev"==s)?-1:1);e=e>this.images[o].length-1?0:0>e?this.images[o].length-1:e}else{var o=this.source.data("jBox-image-gallery"),e=this.source.data("jBox-image-id");jQuery(".jBox-image-pointer-prev, .jBox-image-pointer-next").css({display:this.images[o].length>1?"block":"none"})}if(this.currentImage={gallery:o,id:e},jQuery("#jBox-image-"+o+"-"+e).length)jQuery("#jBox-image-"+o+"-"+e).css({zIndex:this.imageZIndex++,opacity:0}).animate({opacity:1},"open"==s?0:this.options.imageFade),i(o,e);else{this.wrapper.addClass("jBox-loading");{jQuery('<img src="'+this.images[o][e].src+'">').load(function(){t(o,e,!1),i(o,e),this.wrapper.removeClass("jBox-loading")}.bind(this))}}var n=e+1;n=n>this.images[o].length-1?0:0>n?this.images[o].length-1:n,!jQuery("#jBox-image-"+o+"-"+n).length&&jQuery('<img src="'+this.images[o][n].src+'">').load(function(){t(o,n,!0)})}},_onCreated:function(){this.imageLabel=jQuery("<div/>",{id:"jBox-image-label"}).appendTo(this.wrapper),this.wrapper.append(jQuery("<div/>",{"class":"jBox-image-pointer-prev",click:function(){this.showImage("prev")}.bind(this)})).append(jQuery("<div/>",{"class":"jBox-image-pointer-next",click:function(){this.showImage("next")}.bind(this)}))},_onOpen:function(){jQuery("body").addClass("jBox-image-open"),jQuery(document).on("keyup.jBox-"+this.id,function(t){37==t.keyCode&&this.showImage("prev"),39==t.keyCode&&this.showImage("next")}.bind(this)),this.showImage("open")},_onClose:function(){jQuery("body").removeClass("jBox-image-open"),jQuery(document).off("keyup.jBox-"+this.id)},_onCloseComplete:function(){this.wrapper.find(".jBox-image-container").css("opacity",0)}}},"string"==jQuery.type(type)&&(this.type=type,type=this.defaultOptions[type]),this.options=jQuery.extend(!0,this.options,type,options),null===this.options.id&&(this.options.id="jBoxID"+jBox._getUniqueID()),this.id=this.options.id,("center"==this.options.position.x&&"x"==this.options.outside||"center"==this.options.position.y&&"y"==this.options.outside)&&(this.options.outside=!1),(!this.options.outside||"xy"==this.options.outside)&&(this.options.pointer=!1),"object"!=jQuery.type(this.options.offset)&&(this.options.offset={x:this.options.offset,y:this.options.offset}),this.options.offset.x||(this.options.offset.x=0),this.options.offset.y||(this.options.offset.y=0),this.options.adjustDistance="object"!=jQuery.type(this.options.adjustDistance)?{top:this.options.adjustDistance,right:this.options.adjustDistance,bottom:this.options.adjustDistance,left:this.options.adjustDistance}:jQuery.extend({top:5,left:5,right:5,bottom:5},this.options.adjustDistance),this.align=this.options.outside&&"xy"!=this.options.outside?this.options.position[this.options.outside]:"center"!=this.options.position.y&&"number"!=jQuery.type(this.options.position.y)?this.options.position.x:"center"!=this.options.position.x&&"number"!=jQuery.type(this.options.position.x)?this.options.position.y:this.options.attributes.x,this.options.outside&&"xy"!=this.options.outside&&(this.outside=this.options.position[this.options.outside]);var userAgent=navigator.userAgent.toLowerCase();return this.IE8=-1!=userAgent.indexOf("msie")&&8==parseInt(userAgent.split("msie")[1]),this.prefix=-1!=userAgent.indexOf("webkit")?"-webkit-":"",this._getOpp=function(t){return{left:"right",right:"left",top:"bottom",bottom:"top",x:"y",y:"x"}[t]},this._getXY=function(t){return{left:"x",right:"x",top:"y",bottom:"y",center:"x"}[t]},this._getTL=function(t){return{left:"left",right:"left",top:"top",bottom:"top",center:"left",x:"left",y:"top"}[t]},this._supportsSVG=function(){return document.createElement("svg").getAttributeNS},this._createSVG=function(t,i){var s=document.createElementNS("http://www.w3.org/2000/svg",t);return jQuery.each(i,function(t,i){s.setAttribute(i[0],i[1]||"")}),s},this._appendSVG=function(t,i){return i.appendChild(t)},this._create=function(){if(!this.wrapper){if(this.wrapper=jQuery("<div/>",{id:this.id,"class":"jBox-wrapper"+(this.type?" jBox-"+this.type:"")+(this.options.theme?" jBox-"+this.options.theme:"")+(this.options.addClass?" "+this.options.addClass:"")+(this.IE8?" jBox-IE8":"")}).css({position:this.options.fixed?"fixed":"absolute",display:"none",opacity:0,zIndex:this.options.zIndex}).data("jBox",this),this.options.closeOnMouseleave&&this.wrapper.mouseleave(function(t){!this.source||!(t.relatedTarget==this.source[0]||-1!==jQuery.inArray(this.source[0],jQuery(t.relatedTarget).parents("*")))&&this.close()}.bind(this)),"box"==this.options.closeOnClick&&this.wrapper.on("touchend click",function(){this.close({ignoreDelay:!0})}.bind(this)),this.container=jQuery("<div/>",{"class":"jBox-container"}).appendTo(this.wrapper),this.content=jQuery("<div/>",{"class":"jBox-content"}).css({width:this.options.width,height:this.options.height,minWidth:this.options.minWidth,minHeight:this.options.minHeight,maxWidth:this.options.maxWidth,maxHeight:this.options.maxHeight}).appendTo(this.container),this.options.closeButton){if(this.closeButton=jQuery("<div/>",{"class":"jBox-closeButton jBox-noDrag"}).on("touchend click",function(){this.isOpen&&this.close({ignoreDelay:!0})}.bind(this)),this._supportsSVG()){var t=this._createSVG("svg",[["viewBox","0 0 24 24"]]);this._appendSVG(this._createSVG("path",[["d","M22.2,4c0,0,0.5,0.6,0,1.1l-6.8,6.8l6.9,6.9c0.5,0.5,0,1.1,0,1.1L20,22.3c0,0-0.6,0.5-1.1,0L12,15.4l-6.9,6.9c-0.5,0.5-1.1,0-1.1,0L1.7,20c0,0-0.5-0.6,0-1.1L8.6,12L1.7,5.1C1.2,4.6,1.7,4,1.7,4L4,1.7c0,0,0.6-0.5,1.1,0L12,8.5l6.8-6.8c0.5-0.5,1.1,0,1.1,0L22.2,4z"]]),t),this.closeButton.append(t)}else this.wrapper.addClass("jBox-nosvg");("box"==this.options.closeButton||this.options.closeButton===!0&&!this.options.overlay&&!this.options.title)&&(this.wrapper.addClass("jBox-closeButton-box"),this.closeButton.appendTo(this.container))}if(this.wrapper.appendTo(this.options.appendTo),this.options.pointer){if(this.pointer={position:"target"!=this.options.pointTo?this.options.pointTo:this._getOpp(this.outside),xy:this._getXY("target"!=this.options.pointTo?this.options.pointTo:this.outside),align:"center",offset:0},this.pointer.element=jQuery("<div/>",{"class":"jBox-pointer jBox-pointer-"+this.pointer.position}).appendTo(this.wrapper),this.pointer.dimensions={x:this.pointer.element.outerWidth(),y:this.pointer.element.outerHeight()},"string"==jQuery.type(this.options.pointer)){var i=this.options.pointer.split(":");i[0]&&(this.pointer.align=i[0]),i[1]&&(this.pointer.offset=parseInt(i[1]))}this.pointer.alignAttribute="x"==this.pointer.xy?"bottom"==this.pointer.align?"bottom":"top":"right"==this.pointer.align?"right":"left",this.wrapper.css("padding-"+this.pointer.position,this.pointer.dimensions[this.pointer.xy]),this.pointer.element.css(this.pointer.alignAttribute,"center"==this.pointer.align?"50%":0).css("margin-"+this.pointer.alignAttribute,this.pointer.offset),this.pointer.margin={},this.pointer.margin["margin-"+this.pointer.alignAttribute]=this.pointer.offset,"center"==this.pointer.align&&this.pointer.element.css(this.prefix+"transform","translate("+("y"==this.pointer.xy?this.pointer.dimensions.x*-.5+"px":0)+", "+("x"==this.pointer.xy?this.pointer.dimensions.y*-.5+"px":0)+")"),this.pointer.element.css("x"==this.pointer.xy?"width":"height",parseInt(this.pointer.dimensions[this.pointer.xy])+parseInt(this.container.css("border-"+this.pointer.alignAttribute+"-width"))),this.wrapper.addClass("jBox-pointerPosition-"+this.pointer.position)}if(this.setContent(this.options.content,!0),this.setTitle(this.options.title,!0),this.options.draggable){var s="title"==this.options.draggable?this.titleContainer:this.options.draggable.length>0?this.options.draggable:this.options.draggable.selector?jQuery(this.options.draggable.selector):this.wrapper;s.addClass("jBox-draggable").on("mousedown",function(t){if(2!=t.button&&!jQuery(t.target).hasClass("jBox-noDrag")&&!jQuery(t.target).parents(".jBox-noDrag").length){this.options.dragOver&&this.wrapper.css("zIndex")<=jBox.zIndexMax&&(jBox.zIndexMax+=1,this.wrapper.css("zIndex",jBox.zIndexMax));var i=this.wrapper.outerHeight(),s=this.wrapper.outerWidth(),o=this.wrapper.offset().top+i-t.pageY,e=this.wrapper.offset().left+s-t.pageX;jQuery(document).on("mousemove.jBox-draggable-"+this.id,function(t){this.wrapper.offset({top:t.pageY+o-i,left:t.pageX+e-s})}.bind(this)),t.preventDefault()}}.bind(this)).on("mouseup",function(){jQuery(document).off("mousemove.jBox-draggable-"+this.id)}.bind(this)),jBox.zIndexMax=jBox.zIndexMax?Math.max(jBox.zIndexMax,this.options.zIndex):this.options.zIndex}this.options.onCreated.bind(this)(),this.options._onCreated&&this.options._onCreated.bind(this)()}},this.options.constructOnInit&&this._create(),this.options.attach&&this.attach(),this._positionMouse=function(t){this.pos={left:t.pageX,top:t.pageY};var i=function(t,i){return"center"==this.options.position[i]?void(this.pos[t]-=Math.ceil(this.dimensions[i]/2)):(this.pos[t]+=t==this.options.position[i]?-1*this.dimensions[i]-this.options.offset[i]:this.options.offset[i],this.pos[t])}.bind(this);this.wrapper.css({left:i("left","x"),top:i("top","y")}),this.targetDimensions={x:0,y:0,left:t.pageX,top:t.pageY},this._adjustPosition()},this._attachEvents=function(){if(this.options.closeOnEsc&&jQuery(document).on("keyup.jBox-"+this.id,function(t){27==t.keyCode&&this.close({ignoreDelay:!0})}.bind(this)),(this.options.closeOnClick===!0||"body"==this.options.closeOnClick)&&jQuery(document).on("touchend.jBox-"+this.id+" click.jBox-"+this.id,function(t){this.blockBodyClick||"body"==this.options.closeOnClick&&(t.target==this.wrapper[0]||this.wrapper.has(t.target).length)||this.close({ignoreDelay:!0})}.bind(this)),(this.options.adjustPosition&&this.options.adjustTracker||this.options.reposition)&&!this.fixed&&this.outside){var t,i=0,s=150,o=function(){var o=(new Date).getTime();t||(o-i>s&&(this.options.reposition&&this.position(),this.options.adjustTracker&&this._adjustPosition(),i=o),t=setTimeout(function(){t=null,i=(new Date).getTime(),this.options.reposition&&this.position(),this.options.adjustTracker&&this._adjustPosition()}.bind(this),s))}.bind(this);this.options.adjustTracker&&"resize"!=this.options.adjustTracker&&jQuery(window).on("scroll.jBox-"+this.id,function(){o()}.bind(this)),(this.options.adjustTracker&&"scroll"!=this.options.adjustTracker||this.options.reposition)&&jQuery(window).on("resize.jBox-"+this.id,function(){o()}.bind(this))}"mouse"==this.options.target&&jQuery("body").on("mousemove.jBox-"+this.id,function(t){this._positionMouse(t)}.bind(this))},this._detachEvents=function(){this.options.closeOnEsc&&jQuery(document).off("keyup.jBox-"+this.id),(this.options.closeOnClick===!0||"body"==this.options.closeOnClick)&&jQuery(document).off("touchend.jBox-"+this.id+" click.jBox-"+this.id),(this.options.adjustPosition&&this.options.adjustTracker||this.options.reposition)&&(jQuery(window).off("scroll.jBox-"+this.id),jQuery(window).off("resize.jBox-"+this.id)),"mouse"==this.options.target&&jQuery("body").off("mousemove.jBox-"+this.id)},this._addOverlay=function(){this.overlay||(this.overlay=jQuery("#jBox-overlay").length?jQuery("#jBox-overlay").css({zIndex:Math.min(jQuery("#jBox-overlay").css("z-index"),this.options.zIndex-1)}):jQuery("<div/>",{id:"jBox-overlay"}).css({display:"none",opacity:0,zIndex:this.options.zIndex-1}).appendTo(jQuery("body")),("overlay"==this.options.closeButton||this.options.closeButton===!0)&&(jQuery("#jBox-overlay .jBox-closeButton").length>0?jQuery("#jBox-overlay .jBox-closeButton").on("touchend click",function(){this.isOpen&&this.close({ignoreDelay:!0})}.bind(this)):this.overlay.append(this.closeButton)),"overlay"==this.options.closeOnClick&&this.overlay.on("touchend click",function(){this.isOpen&&this.close({ignoreDelay:!0})}.bind(this)));var t=this.overlay.data("jBox")||{};t["jBox-"+this.id]=!0,this.overlay.data("jBox",t),"block"!=this.overlay.css("display")&&(this.options.fade?this.overlay.stop()&&this.overlay.animate({opacity:1},{queue:!1,duration:this.options.fade,start:function(){this.overlay.css({display:"block"})}.bind(this)}):this.overlay.css({display:"block",opacity:1}))},this._removeOverlay=function(){if(this.overlay){var t=this.overlay.data("jBox");delete t["jBox-"+this.id],this.overlay.data("jBox",t),jQuery.isEmptyObject(t)&&(this.options.fade?this.overlay.stop()&&this.overlay.animate({opacity:0},{queue:!1,duration:this.options.fade,complete:function(){this.overlay.css({display:"none"})}.bind(this)}):this.overlay.css({display:"none",opacity:0}))}},this._generateCSS=function(){if(!this.IE8){"object"!=jQuery.type(this.options.animation)&&(this.options.animation={pulse:{open:"pulse",close:"zoomOut"},zoomIn:{open:"zoomIn",close:"zoomIn"},zoomOut:{open:"zoomOut",close:"zoomOut"},move:{open:"move",close:"move"},slide:{open:"slide",close:"slide"},flip:{open:"flip",close:"flip"},tada:{open:"tada",close:"zoomOut"}}[this.options.animation]),this.options.animation.open&&(this.options.animation.open=this.options.animation.open.split(":")),this.options.animation.close&&(this.options.animation.close=this.options.animation.close.split(":")),this.options.animation.openDirection=this.options.animation.open?this.options.animation.open[1]:null,this.options.animation.closeDirection=this.options.animation.close?this.options.animation.close[1]:null,this.options.animation.open&&(this.options.animation.open=this.options.animation.open[0]),this.options.animation.close&&(this.options.animation.close=this.options.animation.close[0]),this.options.animation.open&&(this.options.animation.open+="Open"),this.options.animation.close&&(this.options.animation.close+="Close");var t={pulse:{duration:350,css:[["0%","scale(1)"],["50%","scale(1.1)"],["100%","scale(1)"]]},zoomInOpen:{duration:this.options.fade||180,css:[["0%","scale(0.9)"],["100%","scale(1)"]]},zoomInClose:{duration:this.options.fade||180,css:[["0%","scale(1)"],["100%","scale(0.9)"]]},zoomOutOpen:{duration:this.options.fade||180,css:[["0%","scale(1.1)"],["100%","scale(1)"]]},zoomOutClose:{duration:this.options.fade||180,css:[["0%","scale(1)"],["100%","scale(1.1)"]]},moveOpen:{duration:this.options.fade||180,positions:{top:{"0%":-12},right:{"0%":12},bottom:{"0%":12},left:{"0%":-12}},css:[["0%","translate%XY(%Vpx)"],["100%","translate%XY(0px)"]]},moveClose:{duration:this.options.fade||180,timing:"ease-in",positions:{top:{"100%":-12},right:{"100%":12},bottom:{"100%":12},left:{"100%":-12}},css:[["0%","translate%XY(0px)"],["100%","translate%XY(%Vpx)"]]},slideOpen:{duration:400,positions:{top:{"0%":-400},right:{"0%":400},bottom:{"0%":400},left:{"0%":-400}},css:[["0%","translate%XY(%Vpx)"],["100%","translate%XY(0px)"]]},slideClose:{duration:400,timing:"ease-in",positions:{top:{"100%":-400},right:{"100%":400},bottom:{"100%":400},left:{"100%":-400}},css:[["0%","translate%XY(0px)"],["100%","translate%XY(%Vpx)"]]},flipOpen:{duration:600,css:[["0%","perspective(400px) rotateX(90deg)"],["40%","perspective(400px) rotateX(-15deg)"],["70%","perspective(400px) rotateX(15deg)"],["100%","perspective(400px) rotateX(0deg)"]]},flipClose:{duration:this.options.fade||300,css:[["0%","perspective(400px) rotateX(0deg)"],["100%","perspective(400px) rotateX(90deg)"]]},tada:{duration:800,css:[["0%","scale(1)"],["10%, 20%","scale(0.9) rotate(-3deg)"],["30%, 50%, 70%, 90%","scale(1.1) rotate(3deg)"],["40%, 60%, 80%","scale(1.1) rotate(-3deg)"],["100%","scale(1) rotate(0)"]]}};jQuery.each(["pulse","tada"],function(i,s){t[s+"Open"]=t[s+"Close"]=t[s]});var i=function(i,s){return keyframe_css="@"+this.prefix+"keyframes jBox-animation-"+this.options.animation[i]+"-"+i+(s?"-"+s:"")+" {",jQuery.each(t[this.options.animation[i]].css,function(o,e){var n=s?e[1].replace("%XY",this._getXY(s).toUpperCase()):e[1];t[this.options.animation[i]].positions&&(n=n.replace("%V",t[this.options.animation[i]].positions[s][e[0]])),keyframe_css+=e[0]+" {"+this.prefix+"transform:"+n+";}"}.bind(this)),keyframe_css+="}",keyframe_css+=".jBox-animation-"+this.options.animation[i]+"-"+i+(s?"-"+s:"")+" {",keyframe_css+=this.prefix+"animation-duration: "+t[this.options.animation[i]].duration+"ms;",keyframe_css+=this.prefix+"animation-name: jBox-animation-"+this.options.animation[i]+"-"+i+(s?"-"+s:"")+";",keyframe_css+=t[this.options.animation[i]].timing?this.prefix+"animation-timing-function: "+t[this.options.animation[i]].timing+";":"",keyframe_css+="}"}.bind(this),s="";jQuery.each(["open","close"],function(o,e){return this.options.animation[e]&&t[this.options.animation[e]]&&("close"!=e||this.options.fade)?void(t[this.options.animation[e]].positions?jQuery.each(["top","right","bottom","left"],function(t,o){s+=i(e,o)}):s+=i(e)):""}.bind(this)),jQuery("<style/>").append(s).appendTo(jQuery("head"))}},this._blockBodyClick=function(){this.blockBodyClick=!0,setTimeout(function(){this.blockBodyClick=!1}.bind(this),10)},this.options.animation&&this._generateCSS(),this._animate=function(t){if(!this.IE8){if(t||(t=this.isOpen?"open":"close"),!this.options.fade&&"close"==t)return null;var i=this.options.animation[t+"Direction"]||("center"!=this.align?this.align:this.options.attributes.x);this.flipped&&this._getXY(i)==this._getXY(this.align)&&(i=this._getOpp(i));var s="jBox-animation-"+this.options.animation[t]+"-"+t+" jBox-animation-"+this.options.animation[t]+"-"+t+"-"+i;this.wrapper.addClass(s);var o=1e3*parseFloat(this.wrapper.css(this.prefix+"animation-duration"));"close"==t&&(o=Math.min(o,this.options.fade)),setTimeout(function(){this.wrapper.removeClass(s)}.bind(this),o)}},this._abortAnimation=function(){if(!this.IE8){var t="jBox-animation",i=this.wrapper.attr("class").split(" ").filter(function(i){return 0!==i.lastIndexOf(t,0)});this.wrapper.attr("class",i.join(" "))}},this._adjustPosition=function(){if(!this.options.adjustPosition)return null;this.positionAdjusted&&(this.wrapper.css(this.pos),this.pointer&&this.wrapper.css("padding",0).css("padding-"+this._getOpp(this.outside),this.pointer.dimensions[this._getXY(this.outside)]).removeClass("jBox-pointerPosition-"+this._getOpp(this.pointer.position)).addClass("jBox-pointerPosition-"+this.pointer.position),this.pointer&&this.pointer.element.attr("class","jBox-pointer jBox-pointer-"+this._getOpp(this.outside)).css(this.pointer.margin),this.positionAdjusted=!1,this.flipped=!1);var t=jQuery(window),i={x:t.width(),y:t.height(),top:this.options.fixed&&this.target.data("jBox-fixed")?0:t.scrollTop(),left:this.options.fixed&&this.target.data("jBox-fixed")?0:t.scrollLeft()};i.bottom=i.top+i.y,i.right=i.left+i.x;var s=i.top>this.pos.top-(this.options.adjustDistance.top||0),o=i.right<this.pos.left+this.dimensions.x+(this.options.adjustDistance.right||0),e=i.bottom<this.pos.top+this.dimensions.y+(this.options.adjustDistance.bottom||0),n=i.left>this.pos.left-(this.options.adjustDistance.left||0),a=n?"left":o?"right":null,h=s?"top":e?"bottom":null,p=a||h;if(p){"move"==this.options.adjustPosition||a!=this.outside&&h!=this.outside||("mouse"==this.target&&(this.outside="right"),("top"==this.outside||"left"==this.outside?i[this._getXY(this.outside)]-(this.targetDimensions[this._getTL(this.outside)]-i[this._getTL(this.outside)])-this.targetDimensions[this._getXY(this.outside)]+this.options.offset[this._getXY(this.outside)]:this.targetDimensions[this._getTL(this.outside)]-i[this._getTL(this.outside)]-this.options.offset[this._getXY(this.outside)])>this.dimensions[this._getXY(this.outside)]+parseInt(this.options.adjustDistance[this._getOpp(this.outside)])&&(this.wrapper.css(this._getTL(this.outside),this.pos[this._getTL(this.outside)]+(this.dimensions[this._getXY(this.outside)]+this.options.offset[this._getXY(this.outside)]*("top"==this.outside||"left"==this.outside?-2:2)+this.targetDimensions[this._getXY(this.outside)])*("top"==this.outside||"left"==this.outside?1:-1)),this.pointer&&this.wrapper.removeClass("jBox-pointerPosition-"+this.pointer.position).addClass("jBox-pointerPosition-"+this._getOpp(this.pointer.position)).css("padding",0).css("padding-"+this.outside,this.pointer.dimensions[this._getXY(this.outside)]),this.pointer&&this.pointer.element.attr("class","jBox-pointer jBox-pointer-"+this.outside),this.positionAdjusted=!0,this.flipped=!0));var r="x"==this._getXY(this.outside)?h:a;if(this.pointer&&"flip"!=this.options.adjustPosition&&this._getXY(r)==this._getOpp(this._getXY(this.outside))){if("center"==this.pointer.align)var l=this.dimensions[this._getXY(r)]/2-this.pointer.dimensions[this._getOpp(this.pointer.xy)]/2-parseInt(this.pointer.element.css("margin-"+this.pointer.alignAttribute))*(r!=this._getTL(r)?-1:1);else var l=r==this.pointer.alignAttribute?parseInt(this.pointer.element.css("margin-"+this.pointer.alignAttribute)):this.dimensions[this._getXY(r)]-parseInt(this.pointer.element.css("margin-"+this.pointer.alignAttribute))-this.pointer.dimensions[this._getXY(r)];spaceDiff=r==this._getTL(r)?i[this._getTL(r)]-this.pos[this._getTL(r)]+this.options.adjustDistance[r]:-1*(i[this._getOpp(this._getTL(r))]-this.pos[this._getTL(r)]-this.options.adjustDistance[r]-this.dimensions[this._getXY(r)]),r==this._getOpp(this._getTL(r))&&this.pos[this._getTL(r)]-spaceDiff<i[this._getTL(r)]+this.options.adjustDistance[this._getTL(r)]&&(spaceDiff-=i[this._getTL(r)]+this.options.adjustDistance[this._getTL(r)]-(this.pos[this._getTL(r)]-spaceDiff)),spaceDiff=Math.min(spaceDiff,l),l>=spaceDiff&&spaceDiff>0&&(this.pointer.element.css("margin-"+this.pointer.alignAttribute,parseInt(this.pointer.element.css("margin-"+this.pointer.alignAttribute))-spaceDiff*(r!=this.pointer.alignAttribute?-1:1)),this.wrapper.css(this._getTL(r),this.pos[this._getTL(r)]+spaceDiff*(r!=this._getTL(r)?-1:1)),this.positionAdjusted=!0)}}},this.options.onInit.bind(this)(),this.options._onInit&&this.options._onInit.bind(this)(),this}jBox.prototype.attach=function(t,i){return t||(t=jQuery(this.options.attach.selector||this.options.attach)),i||(i=this.options.trigger),t&&t.length&&jQuery.each(t,function(t,s){s=jQuery(s),s.data("jBox-attached-"+this.id)||("title"==this.options.getContent&&void 0!=s.attr("title")&&s.data("jBox-getContent",s.attr("title")).removeAttr("title"),this.attachedElements||(this.attachedElements=[]),this.attachedElements.push(s[0]),s.on(i+".jBox-attach-"+this.id,function(t){if(this.timer&&clearTimeout(this.timer),"mouseenter"!=i||!this.isOpen||this.source[0]!=s[0]){if(this.isOpen&&this.source&&this.source[0]!=s[0])var o=!0;this.source=s,!this.options.target&&(this.target=s),"click"==i&&this.options.preventDefault&&t.preventDefault(),this["click"!=i||o?"open":"toggle"]()}}.bind(this)),"mouseenter"==this.options.trigger&&s.on("mouseleave",function(t){(!this.options.closeOnMouseleave||t.relatedTarget!=this.wrapper[0]&&!jQuery(t.relatedTarget).parents("#"+this.id).length)&&this.close()}.bind(this)),s.data("jBox-attached-"+this.id,i),this.options._onAttach&&this.options._onAttach.bind(this)(s))}.bind(this)),this},jBox.prototype.detach=function(t){return t||(t=this.attachedElements||[]),t&&t.length&&jQuery.each(t,function(t,i){i=jQuery(i),i.data("jBox-attached-"+this.id)&&(i.off(i.data("jBox-attached-"+this.id)+".jBox-attach-"+this.id),i.data("jBox-attached-"+this.id,null)),this.attachedElements=jQuery.grep(this.attachedElements,function(t){return t!=i[0]})}.bind(this)),this},jBox.prototype.setTitle=function(t,i){var s=this.wrapper.height(),o=this.wrapper.width();return null==t||void 0==t?this:(!this.wrapper&&this._create(),this.title||(this.titleContainer=jQuery("<div/>",{"class":"jBox-title"}),this.title=jQuery("<div/>").appendTo(this.titleContainer),this.wrapper.addClass("jBox-hasTitle"),("title"==this.options.closeButton||this.options.closeButton===!0&&!this.options.overlay)&&(this.wrapper.addClass("jBox-closeButton-title"),this.closeButton.appendTo(this.titleContainer)),this.titleContainer.insertBefore(this.content)),this.title.html(t),!i&&this.options.repositionOnContent&&(s!=this.wrapper.height()||o!=this.wrapper.width())&&this.position(),this)},jBox.prototype.setContent=function(t,i){if(null==t)return this;!this.wrapper&&this._create();var s=this.wrapper.height(),o=this.wrapper.width(),e=jQuery("body").height(),n=jQuery("body").width();switch(this.content.children("[data-jbox-content-appended]").appendTo("body").css({display:"none"}),jQuery.type(t)){case"string":this.content.html(t);break;case"object":this.content.html(""),t.attr("data-jbox-content-appended",1).appendTo(this.content).css({display:"block"})}var a={x:n-jQuery("body").width(),y:e-jQuery("body").height()};return!i&&this.options.repositionOnContent&&(s!=this.wrapper.height()||o!=this.wrapper.width())&&this.position({adjustOffset:a}),this},jBox.prototype.setDimensions=function(t,i,s){!this.wrapper&&this._create(),this.content.css(t,i),(void 0==s||s)&&this.position()},jBox.prototype.setWidth=function(t,i){this.setDimensions("width",t,i)},jBox.prototype.setHeight=function(t,i){this.setDimensions("height",t,i)},jBox.prototype.position=function(t){if(t||(t={}),this.target=t.target||this.target||this.options.target||jQuery(window),this.dimensions={x:this.wrapper.outerWidth(),y:this.wrapper.outerHeight()},"mouse"!=this.target){if("center"==this.options.position.x&&"center"==this.options.position.y)return this.wrapper.css({left:"50%",top:"50%",marginLeft:this.dimensions.x*-.5+this.options.offset.x,marginTop:this.dimensions.y*-.5+this.options.offset.y}),this;var i=this.target.offset();!this.target.data("jBox-fixed")&&this.target.data("jBox-fixed",this.target[0]==jQuery(window)[0]||"fixed"!=this.target.css("position")&&this.target.parents().filter(function(){return"fixed"==jQuery(this).css("position")}).length<=0?"static":"fixed"),"fixed"==this.target.data("jBox-fixed")&&this.options.fixed&&(i.top=i.top-jQuery(window).scrollTop(),i.left=i.left-jQuery(window).scrollLeft()),this.targetDimensions={x:this.target.outerWidth(),y:this.target.outerHeight(),top:i?i.top:0,left:i?i.left:0},this.pos={};var s=function(t){if(-1==jQuery.inArray(this.options.position[t],["top","right","bottom","left","center"]))return void(this.pos[this.options.attributes[t]]=this.options.position[t]);var i=this.options.attributes[t]="x"==t?"left":"top";return this.pos[i]=this.targetDimensions[i],"center"==this.options.position[t]?void(this.pos[i]+=Math.ceil((this.targetDimensions[t]-this.dimensions[t])/2)):(i!=this.options.position[t]&&(this.pos[i]+=this.targetDimensions[t]-this.dimensions[t]),void((this.options.outside==t||"xy"==this.options.outside)&&(this.pos[i]+=this.dimensions[t]*(i!=this.options.position[t]?1:-1))))}.bind(this);if(s("x"),s("y"),this.options.pointer&&"number"!=jQuery.type(this.options.position.x)&&"number"!=jQuery.type(this.options.position.y)){var o=0;switch(this.pointer.align){case"center":"center"!=this.options.position[this._getOpp(this.options.outside)]&&(o+=this.dimensions[this._getOpp(this.options.outside)]/2);break;default:switch(this.options.position[this._getOpp(this.options.outside)]){case"center":o+=(this.dimensions[this._getOpp(this.options.outside)]/2-this.pointer.dimensions[this._getOpp(this.options.outside)]/2)*(this.pointer.align==this._getTL(this.pointer.align)?1:-1);
break;default:o+=this.pointer.align!=this.options.position[this._getOpp(this.options.outside)]?this.dimensions[this._getOpp(this.options.outside)]*(-1!==jQuery.inArray(this.pointer.align,["top","left"])?1:-1)+this.pointer.dimensions[this._getOpp(this.options.outside)]/2*(-1!==jQuery.inArray(this.pointer.align,["top","left"])?-1:1):this.pointer.dimensions[this._getOpp(this.options.outside)]/2*(-1!==jQuery.inArray(this.pointer.align,["top","left"])?1:-1)}}o*=this.options.position[this._getOpp(this.options.outside)]==this.pointer.alignAttribute?-1:1,o+=this.pointer.offset*(this.pointer.align==this._getOpp(this._getTL(this.pointer.align))?1:-1),this.pos[this._getTL(this._getOpp(this.pointer.xy))]+=o}return t.adjustOffset&&t.adjustOffset.x&&(this.pos[this.options.attributes.x]+=parseInt(t.adjustOffset.x)*("left"==this.options.attributes.x?1:-1)),t.adjustOffset&&t.adjustOffset.y&&(this.pos[this.options.attributes.y]+=parseInt(t.adjustOffset.y)*("top"==this.options.attributes.y?1:-1)),this.pos[this.options.attributes.x]+=this.options.offset.x,this.pos[this.options.attributes.y]+=this.options.offset.y,this.wrapper.css(this.pos),this._adjustPosition(),this}},jBox.prototype.open=function(t){if(t||(t={}),this.isDestroyed)return!1;if(!this.wrapper&&this._create(),this.timer&&clearTimeout(this.timer),this._blockBodyClick(),this.isDisabled)return this;var i=function(){this.source&&this.options.getTitle&&(this.source.attr(this.options.getTitle)&&this.setTitle(this.source.attr(this.options.getTitle)),!0),this.source&&this.options.getContent&&(this.source.data("jBox-getContent")?this.setContent(this.source.data("jBox-getContent"),!0):this.source.attr(this.options.getContent)?this.setContent(this.source.attr(this.options.getContent),!0):null),this.options.onOpen.bind(this)(),this.options._onOpen&&this.options._onOpen.bind(this)(),(this.options.ajax&&this.options.ajax.url&&(!this.ajaxLoaded||this.options.ajax.reload)||t.ajax&&t.ajax.url)&&this.ajax(t.ajax||null),(!this.positionedOnOpen||this.options.repositionOnOpen)&&this.position({target:t.target})&&(this.positionedOnOpen=!0),this.isClosing&&this._abortAnimation(),this.isOpen||(this.isOpen=!0,this._attachEvents(),this.options.blockScroll&&jQuery("body").addClass("jBox-blockScroll-"+this.id),this.options.overlay&&this._addOverlay(),this.options.animation&&!this.isClosing&&this._animate("open"),this.options.fade?this.wrapper.stop().animate({opacity:1},{queue:!1,duration:this.options.fade,start:function(){this.isOpening=!0,this.wrapper.css({display:"block"})}.bind(this),always:function(){this.isOpening=!1}.bind(this)}):this.wrapper.css({display:"block",opacity:1}))}.bind(this);return!this.options.delayOpen||this.isOpen||this.isClosing||t.ignoreDelay?i():this.timer=setTimeout(i,this.options.delayOpen),this},jBox.prototype.close=function(t){if(t||(t={}),this.isDestroyed)return!1;if(this.timer&&clearTimeout(this.timer),this._blockBodyClick(),this.isDisabled)return this;var i=function(){this.options.onClose.bind(this)(),this.options._onClose&&this.options._onClose.bind(this)(),this.isOpen&&(this.isOpen=!1,this._detachEvents(),this.options.blockScroll&&jQuery("body").removeClass("jBox-blockScroll-"+this.id),this.options.overlay&&this._removeOverlay(),this.options.animation&&!this.isOpening&&this._animate("close"),this.options.fade?this.wrapper.stop().animate({opacity:0},{queue:!1,duration:this.options.fade,start:function(){this.isClosing=!0}.bind(this),complete:function(){this.wrapper.css({display:"none"}),this.options.onCloseComplete&&this.options.onCloseComplete.bind(this)(),this.options._onCloseComplete&&this.options._onCloseComplete.bind(this)()}.bind(this),always:function(){this.isClosing=!1}.bind(this)}):(this.wrapper.css({display:"none",opacity:0}),this.options._onCloseComplete&&this.options._onCloseComplete.bind(this)()))}.bind(this);return t.ignoreDelay?i():this.timer=setTimeout(i,Math.max(this.options.delayClose,10)),this},jBox.prototype.toggle=function(t){return this[this.isOpen?"close":"open"](t),this},jBox.prototype.disable=function(){return this.isDisabled=!0,this},jBox.prototype.enable=function(){return this.isDisabled=!1,this},jBox.prototype.ajax=function(t){t||(t={}),this.options.ajax.getData&&!t.data&&this.source&&void 0!=this.source.attr(this.options.ajax.getData)&&(t.data=this.source.attr(this.options.ajax.getData)||"");var i=jQuery.extend(!0,{},this.options.ajax);this.ajaxRequest&&this.ajaxRequest.abort();var s=t.beforeSend||i.beforeSend||function(){},o=t.complete||i.complete||function(){},e=jQuery.extend(!0,i,t);return e.beforeSend=function(){e.spinner&&(this.wrapper.addClass("jBox-loading"),this.spinner=jQuery(e.spinner!==!0?e.spinner:'<div class="jBox-spinner"></div>').appendTo(this.container)),s.bind(this)()}.bind(this),e.complete=function(t){this.wrapper.removeClass("jBox-loading"),this.spinner&&this.spinner.remove(),e.setContent&&this.setContent(t.responseText),this.ajaxLoaded=!0,o.bind(this)(t)}.bind(this),this.ajaxRequest=jQuery.ajax(e),this},jBox.prototype.audio=function(t){if(t||(t={}),jBox._audio||(jBox._audio={}),!t.url||this.IE8)return this;if(!jBox._audio[t.url]){var i=jQuery("<audio/>");jQuery("<source/>",{src:t.url+".mp3"}).appendTo(i),jQuery("<source/>",{src:t.url+".ogg"}).appendTo(i),jBox._audio[t.url]=i[0]}jBox._audio[t.url].volume=Math.min(void 0!=t.volume?t.volume:(void 0!=this.options.volume?this.options.volume:100)/100,1),jBox._audio[t.url].pause();try{jBox._audio[t.url].currentTime=0}catch(s){}return jBox._audio[t.url].play(),this},jBox.prototype.destroy=function(){return this.detach().close({ignoreDelay:!0}),this.wrapper&&this.wrapper.remove(),this.isDestroyed=!0,this},jBox._getUniqueID=function(){var t=1;return function(){return t++}}(),jQuery.fn.jBox=function(t,i){return t||(t={}),i||(i={}),new jBox(t,jQuery.extend(i,{attach:this}))},Function.prototype.bind||(Function.prototype.bind=function(t){var i=Array.prototype.slice.call(arguments,1),s=this,o=function(){},e=function(){return s.apply(this instanceof o&&t?this:t,i.concat(Array.prototype.slice.call(arguments)))};return o.prototype=this.prototype,e.prototype=new o,e});;/*!
 * Modernizr v2.7.1
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */

/*
 * Modernizr tests which native CSS3 and HTML5 features are available in
 * the current UA and makes the results available to you in two ways:
 * as properties on a global Modernizr object, and as classes on the
 * <html> element. This information allows you to progressively enhance
 * your pages with a granular level of control over the experience.
 *
 * Modernizr has an optional (not included) conditional resource loader
 * called Modernizr.load(), based on Yepnope.js (yepnopejs.com).
 * To get a build that includes Modernizr.load(), as well as choosing
 * which tests to include, go to www.modernizr.com/download/
 *
 * Authors        Faruk Ates, Paul Irish, Alex Sexton
 * Contributors   Ryan Seddon, Ben Alman
 */

window.Modernizr = (function( window, document, undefined ) {

    var version = '2.7.1',

    Modernizr = {},

    /*>>cssclasses*/
    // option for enabling the HTML classes to be added
    enableClasses = true,
    /*>>cssclasses*/

    docElement = document.documentElement,

    /**
     * Create our "modernizr" element that we do most feature tests on.
     */
    mod = 'modernizr',
    modElem = document.createElement(mod),
    mStyle = modElem.style,

    /**
     * Create the input element for various Web Forms feature tests.
     */
    inputElem /*>>inputelem*/ = document.createElement('input') /*>>inputelem*/ ,

    /*>>smile*/
    smile = ':)',
    /*>>smile*/

    toString = {}.toString,

    // TODO :: make the prefixes more granular
    /*>>prefixes*/
    // List of property values to set for css tests. See ticket #21
    prefixes = ' -webkit- -moz- -o- -ms- '.split(' '),
    /*>>prefixes*/

    /*>>domprefixes*/
    // Following spec is to expose vendor-specific style properties as:
    //   elem.style.WebkitBorderRadius
    // and the following would be incorrect:
    //   elem.style.webkitBorderRadius

    // Webkit ghosts their properties in lowercase but Opera & Moz do not.
    // Microsoft uses a lowercase `ms` instead of the correct `Ms` in IE8+
    //   erik.eae.net/archives/2008/03/10/21.48.10/

    // More here: github.com/Modernizr/Modernizr/issues/issue/21
    omPrefixes = 'Webkit Moz O ms',

    cssomPrefixes = omPrefixes.split(' '),

    domPrefixes = omPrefixes.toLowerCase().split(' '),
    /*>>domprefixes*/

    /*>>ns*/
    ns = {'svg': 'http://www.w3.org/2000/svg'},
    /*>>ns*/

    tests = {},
    inputs = {},
    attrs = {},

    classes = [],

    slice = classes.slice,

    featureName, // used in testing loop


    /*>>teststyles*/
    // Inject element with style element and some CSS rules
    injectElementWithStyles = function( rule, callback, nodes, testnames ) {

      var style, ret, node, docOverflow,
          div = document.createElement('div'),
          // After page load injecting a fake body doesn't work so check if body exists
          body = document.body,
          // IE6 and 7 won't return offsetWidth or offsetHeight unless it's in the body element, so we fake it.
          fakeBody = body || document.createElement('body');

      if ( parseInt(nodes, 10) ) {
          // In order not to give false positives we create a node for each test
          // This also allows the method to scale for unspecified uses
          while ( nodes-- ) {
              node = document.createElement('div');
              node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
              div.appendChild(node);
          }
      }

      // <style> elements in IE6-9 are considered 'NoScope' elements and therefore will be removed
      // when injected with innerHTML. To get around this you need to prepend the 'NoScope' element
      // with a 'scoped' element, in our case the soft-hyphen entity as it won't mess with our measurements.
      // msdn.microsoft.com/en-us/library/ms533897%28VS.85%29.aspx
      // Documents served as xml will throw if using &shy; so use xml friendly encoded version. See issue #277
      style = ['&#173;','<style id="s', mod, '">', rule, '</style>'].join('');
      div.id = mod;
      // IE6 will false positive on some tests due to the style element inside the test div somehow interfering offsetHeight, so insert it into body or fakebody.
      // Opera will act all quirky when injecting elements in documentElement when page is served as xml, needs fakebody too. #270
      (body ? div : fakeBody).innerHTML += style;
      fakeBody.appendChild(div);
      if ( !body ) {
          //avoid crashing IE8, if background image is used
          fakeBody.style.background = '';
          //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
          fakeBody.style.overflow = 'hidden';
          docOverflow = docElement.style.overflow;
          docElement.style.overflow = 'hidden';
          docElement.appendChild(fakeBody);
      }

      ret = callback(div, rule);
      // If this is done after page load we don't want to remove the body so check if body exists
      if ( !body ) {
          fakeBody.parentNode.removeChild(fakeBody);
          docElement.style.overflow = docOverflow;
      } else {
          div.parentNode.removeChild(div);
      }

      return !!ret;

    },
    /*>>teststyles*/

    /*>>mq*/
    // adapted from matchMedia polyfill
    // by Scott Jehl and Paul Irish
    // gist.github.com/786768
    testMediaQuery = function( mq ) {

      var matchMedia = window.matchMedia || window.msMatchMedia;
      if ( matchMedia ) {
        return matchMedia(mq).matches;
      }

      var bool;

      injectElementWithStyles('@media ' + mq + ' { #' + mod + ' { position: absolute; } }', function( node ) {
        bool = (window.getComputedStyle ?
                  getComputedStyle(node, null) :
                  node.currentStyle)['position'] == 'absolute';
      });

      return bool;

     },
     /*>>mq*/


    /*>>hasevent*/
    //
    // isEventSupported determines if a given element supports the given event
    // kangax.github.com/iseventsupported/
    //
    // The following results are known incorrects:
    //   Modernizr.hasEvent("webkitTransitionEnd", elem) // false negative
    //   Modernizr.hasEvent("textInput") // in Webkit. github.com/Modernizr/Modernizr/issues/333
    //   ...
    isEventSupported = (function() {

      var TAGNAMES = {
        'select': 'input', 'change': 'input',
        'submit': 'form', 'reset': 'form',
        'error': 'img', 'load': 'img', 'abort': 'img'
      };

      function isEventSupported( eventName, element ) {

        element = element || document.createElement(TAGNAMES[eventName] || 'div');
        eventName = 'on' + eventName;

        // When using `setAttribute`, IE skips "unload", WebKit skips "unload" and "resize", whereas `in` "catches" those
        var isSupported = eventName in element;

        if ( !isSupported ) {
          // If it has no `setAttribute` (i.e. doesn't implement Node interface), try generic element
          if ( !element.setAttribute ) {
            element = document.createElement('div');
          }
          if ( element.setAttribute && element.removeAttribute ) {
            element.setAttribute(eventName, '');
            isSupported = is(element[eventName], 'function');

            // If property was created, "remove it" (by setting value to `undefined`)
            if ( !is(element[eventName], 'undefined') ) {
              element[eventName] = undefined;
            }
            element.removeAttribute(eventName);
          }
        }

        element = null;
        return isSupported;
      }
      return isEventSupported;
    })(),
    /*>>hasevent*/

    // TODO :: Add flag for hasownprop ? didn't last time

    // hasOwnProperty shim by kangax needed for Safari 2.0 support
    _hasOwnProperty = ({}).hasOwnProperty, hasOwnProp;

    if ( !is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined') ) {
      hasOwnProp = function (object, property) {
        return _hasOwnProperty.call(object, property);
      };
    }
    else {
      hasOwnProp = function (object, property) { /* yes, this can give false positives/negatives, but most of the time we don't care about those */
        return ((property in object) && is(object.constructor.prototype[property], 'undefined'));
      };
    }

    // Adapted from ES5-shim https://github.com/kriskowal/es5-shim/blob/master/es5-shim.js
    // es5.github.com/#x15.3.4.5

    if (!Function.prototype.bind) {
      Function.prototype.bind = function bind(that) {

        var target = this;

        if (typeof target != "function") {
            throw new TypeError();
        }

        var args = slice.call(arguments, 1),
            bound = function () {

            if (this instanceof bound) {

              var F = function(){};
              F.prototype = target.prototype;
              var self = new F();

              var result = target.apply(
                  self,
                  args.concat(slice.call(arguments))
              );
              if (Object(result) === result) {
                  return result;
              }
              return self;

            } else {

              return target.apply(
                  that,
                  args.concat(slice.call(arguments))
              );

            }

        };

        return bound;
      };
    }

    /**
     * setCss applies given styles to the Modernizr DOM node.
     */
    function setCss( str ) {
        mStyle.cssText = str;
    }

    /**
     * setCssAll extrapolates all vendor-specific css strings.
     */
    function setCssAll( str1, str2 ) {
        return setCss(prefixes.join(str1 + ';') + ( str2 || '' ));
    }

    /**
     * is returns a boolean for if typeof obj is exactly type.
     */
    function is( obj, type ) {
        return typeof obj === type;
    }

    /**
     * contains returns a boolean for if substr is found within str.
     */
    function contains( str, substr ) {
        return !!~('' + str).indexOf(substr);
    }

    /*>>testprop*/

    // testProps is a generic CSS / DOM property test.

    // In testing support for a given CSS property, it's legit to test:
    //    `elem.style[styleName] !== undefined`
    // If the property is supported it will return an empty string,
    // if unsupported it will return undefined.

    // We'll take advantage of this quick test and skip setting a style
    // on our modernizr element, but instead just testing undefined vs
    // empty string.

    // Because the testing of the CSS property names (with "-", as
    // opposed to the camelCase DOM properties) is non-portable and
    // non-standard but works in WebKit and IE (but not Gecko or Opera),
    // we explicitly reject properties with dashes so that authors
    // developing in WebKit or IE first don't end up with
    // browser-specific content by accident.

    function testProps( props, prefixed ) {
        for ( var i in props ) {
            var prop = props[i];
            if ( !contains(prop, "-") && mStyle[prop] !== undefined ) {
                return prefixed == 'pfx' ? prop : true;
            }
        }
        return false;
    }
    /*>>testprop*/

    // TODO :: add testDOMProps
    /**
     * testDOMProps is a generic DOM property test; if a browser supports
     *   a certain property, it won't return undefined for it.
     */
    function testDOMProps( props, obj, elem ) {
        for ( var i in props ) {
            var item = obj[props[i]];
            if ( item !== undefined) {

                // return the property name as a string
                if (elem === false) return props[i];

                // let's bind a function
                if (is(item, 'function')){
                  // default to autobind unless override
                  return item.bind(elem || obj);
                }

                // return the unbound function or obj or value
                return item;
            }
        }
        return false;
    }

    /*>>testallprops*/
    /**
     * testPropsAll tests a list of DOM properties we want to check against.
     *   We specify literally ALL possible (known and/or likely) properties on
     *   the element including the non-vendor prefixed one, for forward-
     *   compatibility.
     */
    function testPropsAll( prop, prefixed, elem ) {

        var ucProp  = prop.charAt(0).toUpperCase() + prop.slice(1),
            props   = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

        // did they call .prefixed('boxSizing') or are we just testing a prop?
        if(is(prefixed, "string") || is(prefixed, "undefined")) {
          return testProps(props, prefixed);

        // otherwise, they called .prefixed('requestAnimationFrame', window[, elem])
        } else {
          props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
          return testDOMProps(props, prefixed, elem);
        }
    }
    /*>>testallprops*/


    /**
     * Tests
     * -----
     */

    // The *new* flexbox
    // dev.w3.org/csswg/css3-flexbox

    tests['flexbox'] = function() {
      return testPropsAll('flexWrap');
    };

    // The *old* flexbox
    // www.w3.org/TR/2009/WD-css3-flexbox-20090723/

    tests['flexboxlegacy'] = function() {
        return testPropsAll('boxDirection');
    };

    // On the S60 and BB Storm, getContext exists, but always returns undefined
    // so we actually have to call getContext() to verify
    // github.com/Modernizr/Modernizr/issues/issue/97/

    tests['canvas'] = function() {
        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
    };

    tests['canvastext'] = function() {
        return !!(Modernizr['canvas'] && is(document.createElement('canvas').getContext('2d').fillText, 'function'));
    };

    // webk.it/70117 is tracking a legit WebGL feature detect proposal

    // We do a soft detect which may false positive in order to avoid
    // an expensive context creation: bugzil.la/732441

    tests['webgl'] = function() {
        return !!window.WebGLRenderingContext;
    };

    /*
     * The Modernizr.touch test only indicates if the browser supports
     *    touch events, which does not necessarily reflect a touchscreen
     *    device, as evidenced by tablets running Windows 7 or, alas,
     *    the Palm Pre / WebOS (touch) phones.
     *
     * Additionally, Chrome (desktop) used to lie about its support on this,
     *    but that has since been rectified: crbug.com/36415
     *
     * We also test for Firefox 4 Multitouch Support.
     *
     * For more info, see: modernizr.github.com/Modernizr/touch.html
     */

    tests['touch'] = function() {
        var bool;

        if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
          bool = true;
        } else {
          injectElementWithStyles(['@media (',prefixes.join('touch-enabled),('),mod,')','{#modernizr{top:9px;position:absolute}}'].join(''), function( node ) {
            bool = node.offsetTop === 9;
          });
        }

        return bool;
    };


    // geolocation is often considered a trivial feature detect...
    // Turns out, it's quite tricky to get right:
    //
    // Using !!navigator.geolocation does two things we don't want. It:
    //   1. Leaks memory in IE9: github.com/Modernizr/Modernizr/issues/513
    //   2. Disables page caching in WebKit: webk.it/43956
    //
    // Meanwhile, in Firefox < 8, an about:config setting could expose
    // a false positive that would throw an exception: bugzil.la/688158

    tests['geolocation'] = function() {
        return 'geolocation' in navigator;
    };


    tests['postmessage'] = function() {
      return !!window.postMessage;
    };


    // Chrome incognito mode used to throw an exception when using openDatabase
    // It doesn't anymore.
    tests['websqldatabase'] = function() {
      return !!window.openDatabase;
    };

    // Vendors had inconsistent prefixing with the experimental Indexed DB:
    // - Webkit's implementation is accessible through webkitIndexedDB
    // - Firefox shipped moz_indexedDB before FF4b9, but since then has been mozIndexedDB
    // For speed, we don't test the legacy (and beta-only) indexedDB
    tests['indexedDB'] = function() {
      return !!testPropsAll("indexedDB", window);
    };

    // documentMode logic from YUI to filter out IE8 Compat Mode
    //   which false positives.
    tests['hashchange'] = function() {
      return isEventSupported('hashchange', window) && (document.documentMode === undefined || document.documentMode > 7);
    };

    // Per 1.6:
    // This used to be Modernizr.historymanagement but the longer
    // name has been deprecated in favor of a shorter and property-matching one.
    // The old API is still available in 1.6, but as of 2.0 will throw a warning,
    // and in the first release thereafter disappear entirely.
    tests['history'] = function() {
      return !!(window.history && history.pushState);
    };

    tests['draganddrop'] = function() {
        var div = document.createElement('div');
        return ('draggable' in div) || ('ondragstart' in div && 'ondrop' in div);
    };

    // FF3.6 was EOL'ed on 4/24/12, but the ESR version of FF10
    // will be supported until FF19 (2/12/13), at which time, ESR becomes FF17.
    // FF10 still uses prefixes, so check for it until then.
    // for more ESR info, see: mozilla.org/en-US/firefox/organizations/faq/
    tests['websockets'] = function() {
        return 'WebSocket' in window || 'MozWebSocket' in window;
    };


    // css-tricks.com/rgba-browser-support/
    tests['rgba'] = function() {
        // Set an rgba() color and check the returned value

        setCss('background-color:rgba(150,255,150,.5)');

        return contains(mStyle.backgroundColor, 'rgba');
    };

    tests['hsla'] = function() {
        // Same as rgba(), in fact, browsers re-map hsla() to rgba() internally,
        //   except IE9 who retains it as hsla

        setCss('background-color:hsla(120,40%,100%,.5)');

        return contains(mStyle.backgroundColor, 'rgba') || contains(mStyle.backgroundColor, 'hsla');
    };

    tests['multiplebgs'] = function() {
        // Setting multiple images AND a color on the background shorthand property
        //  and then querying the style.background property value for the number of
        //  occurrences of "url(" is a reliable method for detecting ACTUAL support for this!

        setCss('background:url(https://),url(https://),red url(https://)');

        // If the UA supports multiple backgrounds, there should be three occurrences
        //   of the string "url(" in the return value for elemStyle.background

        return (/(url\s*\(.*?){3}/).test(mStyle.background);
    };



    // this will false positive in Opera Mini
    //   github.com/Modernizr/Modernizr/issues/396

    tests['backgroundsize'] = function() {
        return testPropsAll('backgroundSize');
    };

    tests['borderimage'] = function() {
        return testPropsAll('borderImage');
    };


    // Super comprehensive table about all the unique implementations of
    // border-radius: muddledramblings.com/table-of-css3-border-radius-compliance

    tests['borderradius'] = function() {
        return testPropsAll('borderRadius');
    };

    // WebOS unfortunately false positives on this test.
    tests['boxshadow'] = function() {
        return testPropsAll('boxShadow');
    };

    // FF3.0 will false positive on this test
    tests['textshadow'] = function() {
        return document.createElement('div').style.textShadow === '';
    };


    tests['opacity'] = function() {
        // Browsers that actually have CSS Opacity implemented have done so
        //  according to spec, which means their return values are within the
        //  range of [0.0,1.0] - including the leading zero.

        setCssAll('opacity:.55');

        // The non-literal . in this regex is intentional:
        //   German Chrome returns this value as 0,55
        // github.com/Modernizr/Modernizr/issues/#issue/59/comment/516632
        return (/^0.55$/).test(mStyle.opacity);
    };


    // Note, Android < 4 will pass this test, but can only animate
    //   a single property at a time
    //   daneden.me/2011/12/putting-up-with-androids-bullshit/
    tests['cssanimations'] = function() {
        return testPropsAll('animationName');
    };


    tests['csscolumns'] = function() {
        return testPropsAll('columnCount');
    };


    tests['cssgradients'] = function() {
        /**
         * For CSS Gradients syntax, please see:
         * webkit.org/blog/175/introducing-css-gradients/
         * developer.mozilla.org/en/CSS/-moz-linear-gradient
         * developer.mozilla.org/en/CSS/-moz-radial-gradient
         * dev.w3.org/csswg/css3-images/#gradients-
         */

        var str1 = 'background-image:',
            str2 = 'gradient(linear,left top,right bottom,from(#9f9),to(white));',
            str3 = 'linear-gradient(left top,#9f9, white);';

        setCss(
             // legacy webkit syntax (FIXME: remove when syntax not in use anymore)
              (str1 + '-webkit- '.split(' ').join(str2 + str1) +
             // standard syntax             // trailing 'background-image:'
              prefixes.join(str3 + str1)).slice(0, -str1.length)
        );

        return contains(mStyle.backgroundImage, 'gradient');
    };


    tests['cssreflections'] = function() {
        return testPropsAll('boxReflect');
    };


    tests['csstransforms'] = function() {
        return !!testPropsAll('transform');
    };


    tests['csstransforms3d'] = function() {

        var ret = !!testPropsAll('perspective');

        // Webkit's 3D transforms are passed off to the browser's own graphics renderer.
        //   It works fine in Safari on Leopard and Snow Leopard, but not in Chrome in
        //   some conditions. As a result, Webkit typically recognizes the syntax but
        //   will sometimes throw a false positive, thus we must do a more thorough check:
        if ( ret && 'webkitPerspective' in docElement.style ) {

          // Webkit allows this media query to succeed only if the feature is enabled.
          // `@media (transform-3d),(-webkit-transform-3d){ ... }`
          injectElementWithStyles('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', function( node, rule ) {
            ret = node.offsetLeft === 9 && node.offsetHeight === 3;
          });
        }
        return ret;
    };


    tests['csstransitions'] = function() {
        return testPropsAll('transition');
    };


    /*>>fontface*/
    // @font-face detection routine by Diego Perini
    // javascript.nwbox.com/CSSSupport/

    // false positives:
    //   WebOS github.com/Modernizr/Modernizr/issues/342
    //   WP7   github.com/Modernizr/Modernizr/issues/538
    tests['fontface'] = function() {
        var bool;

        injectElementWithStyles('@font-face {font-family:"font";src:url("https://")}', function( node, rule ) {
          var style = document.getElementById('smodernizr'),
              sheet = style.sheet || style.styleSheet,
              cssText = sheet ? (sheet.cssRules && sheet.cssRules[0] ? sheet.cssRules[0].cssText : sheet.cssText || '') : '';

          bool = /src/i.test(cssText) && cssText.indexOf(rule.split(' ')[0]) === 0;
        });

        return bool;
    };
    /*>>fontface*/

    // CSS generated content detection
    tests['generatedcontent'] = function() {
        var bool;

        injectElementWithStyles(['#',mod,'{font:0/0 a}#',mod,':after{content:"',smile,'";visibility:hidden;font:3px/1 a}'].join(''), function( node ) {
          bool = node.offsetHeight >= 3;
        });

        return bool;
    };



    // These tests evaluate support of the video/audio elements, as well as
    // testing what types of content they support.
    //
    // We're using the Boolean constructor here, so that we can extend the value
    // e.g.  Modernizr.video     // true
    //       Modernizr.video.ogg // 'probably'
    //
    // Codec values from : github.com/NielsLeenheer/html5test/blob/9106a8/index.html#L845
    //                     thx to NielsLeenheer and zcorpan

    // Note: in some older browsers, "no" was a return value instead of empty string.
    //   It was live in FF3.5.0 and 3.5.1, but fixed in 3.5.2
    //   It was also live in Safari 4.0.0 - 4.0.4, but fixed in 4.0.5

    tests['video'] = function() {
        var elem = document.createElement('video'),
            bool = false;

        // IE9 Running on Windows Server SKU can cause an exception to be thrown, bug #224
        try {
            if ( bool = !!elem.canPlayType ) {
                bool      = new Boolean(bool);
                bool.ogg  = elem.canPlayType('video/ogg; codecs="theora"')      .replace(/^no$/,'');

                // Without QuickTime, this value will be `undefined`. github.com/Modernizr/Modernizr/issues/546
                bool.h264 = elem.canPlayType('video/mp4; codecs="avc1.42E01E"') .replace(/^no$/,'');

                bool.webm = elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,'');
            }

        } catch(e) { }

        return bool;
    };

    tests['audio'] = function() {
        var elem = document.createElement('audio'),
            bool = false;

        try {
            if ( bool = !!elem.canPlayType ) {
                bool      = new Boolean(bool);
                bool.ogg  = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,'');
                bool.mp3  = elem.canPlayType('audio/mpeg;')               .replace(/^no$/,'');

                // Mimetypes accepted:
                //   developer.mozilla.org/En/Media_formats_supported_by_the_audio_and_video_elements
                //   bit.ly/iphoneoscodecs
                bool.wav  = elem.canPlayType('audio/wav; codecs="1"')     .replace(/^no$/,'');
                bool.m4a  = ( elem.canPlayType('audio/x-m4a;')            ||
                              elem.canPlayType('audio/aac;'))             .replace(/^no$/,'');
            }
        } catch(e) { }

        return bool;
    };


    // In FF4, if disabled, window.localStorage should === null.

    // Normally, we could not test that directly and need to do a
    //   `('localStorage' in window) && ` test first because otherwise Firefox will
    //   throw bugzil.la/365772 if cookies are disabled

    // Also in iOS5 Private Browsing mode, attempting to use localStorage.setItem
    // will throw the exception:
    //   QUOTA_EXCEEDED_ERRROR DOM Exception 22.
    // Peculiarly, getItem and removeItem calls do not throw.

    // Because we are forced to try/catch this, we'll go aggressive.

    // Just FWIW: IE8 Compat mode supports these features completely:
    //   www.quirksmode.org/dom/html5.html
    // But IE8 doesn't support either with local files

    tests['localstorage'] = function() {
        try {
            localStorage.setItem(mod, mod);
            localStorage.removeItem(mod);
            return true;
        } catch(e) {
            return false;
        }
    };

    tests['sessionstorage'] = function() {
        try {
            sessionStorage.setItem(mod, mod);
            sessionStorage.removeItem(mod);
            return true;
        } catch(e) {
            return false;
        }
    };


    tests['webworkers'] = function() {
        return !!window.Worker;
    };


    tests['applicationcache'] = function() {
        return !!window.applicationCache;
    };


    // Thanks to Erik Dahlstrom
    tests['svg'] = function() {
        return !!document.createElementNS && !!document.createElementNS(ns.svg, 'svg').createSVGRect;
    };

    // specifically for SVG inline in HTML, not within XHTML
    // test page: paulirish.com/demo/inline-svg
    tests['inlinesvg'] = function() {
      var div = document.createElement('div');
      div.innerHTML = '<svg/>';
      return (div.firstChild && div.firstChild.namespaceURI) == ns.svg;
    };

    // SVG SMIL animation
    tests['smil'] = function() {
        return !!document.createElementNS && /SVGAnimate/.test(toString.call(document.createElementNS(ns.svg, 'animate')));
    };

    // This test is only for clip paths in SVG proper, not clip paths on HTML content
    // demo: srufaculty.sru.edu/david.dailey/svg/newstuff/clipPath4.svg

    // However read the comments to dig into applying SVG clippaths to HTML content here:
    //   github.com/Modernizr/Modernizr/issues/213#issuecomment-1149491
    tests['svgclippaths'] = function() {
        return !!document.createElementNS && /SVGClipPath/.test(toString.call(document.createElementNS(ns.svg, 'clipPath')));
    };

    /*>>webforms*/
    // input features and input types go directly onto the ret object, bypassing the tests loop.
    // Hold this guy to execute in a moment.
    function webforms() {
        /*>>input*/
        // Run through HTML5's new input attributes to see if the UA understands any.
        // We're using f which is the <input> element created early on
        // Mike Taylr has created a comprehensive resource for testing these attributes
        //   when applied to all input types:
        //   miketaylr.com/code/input-type-attr.html
        // spec: www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary

        // Only input placeholder is tested while textarea's placeholder is not.
        // Currently Safari 4 and Opera 11 have support only for the input placeholder
        // Both tests are available in feature-detects/forms-placeholder.js
        Modernizr['input'] = (function( props ) {
            for ( var i = 0, len = props.length; i < len; i++ ) {
                attrs[ props[i] ] = !!(props[i] in inputElem);
            }
            if (attrs.list){
              // safari false positive's on datalist: webk.it/74252
              // see also github.com/Modernizr/Modernizr/issues/146
              attrs.list = !!(document.createElement('datalist') && window.HTMLDataListElement);
            }
            return attrs;
        })('autocomplete autofocus list placeholder max min multiple pattern required step'.split(' '));
        /*>>input*/

        /*>>inputtypes*/
        // Run through HTML5's new input types to see if the UA understands any.
        //   This is put behind the tests runloop because it doesn't return a
        //   true/false like all the other tests; instead, it returns an object
        //   containing each input type with its corresponding true/false value

        // Big thanks to @miketaylr for the html5 forms expertise. miketaylr.com/
        Modernizr['inputtypes'] = (function(props) {

            for ( var i = 0, bool, inputElemType, defaultView, len = props.length; i < len; i++ ) {

                inputElem.setAttribute('type', inputElemType = props[i]);
                bool = inputElem.type !== 'text';

                // We first check to see if the type we give it sticks..
                // If the type does, we feed it a textual value, which shouldn't be valid.
                // If the value doesn't stick, we know there's input sanitization which infers a custom UI
                if ( bool ) {

                    inputElem.value         = smile;
                    inputElem.style.cssText = 'position:absolute;visibility:hidden;';

                    if ( /^range$/.test(inputElemType) && inputElem.style.WebkitAppearance !== undefined ) {

                      docElement.appendChild(inputElem);
                      defaultView = document.defaultView;

                      // Safari 2-4 allows the smiley as a value, despite making a slider
                      bool =  defaultView.getComputedStyle &&
                              defaultView.getComputedStyle(inputElem, null).WebkitAppearance !== 'textfield' &&
                              // Mobile android web browser has false positive, so must
                              // check the height to see if the widget is actually there.
                              (inputElem.offsetHeight !== 0);

                      docElement.removeChild(inputElem);

                    } else if ( /^(search|tel)$/.test(inputElemType) ){
                      // Spec doesn't define any special parsing or detectable UI
                      //   behaviors so we pass these through as true

                      // Interestingly, opera fails the earlier test, so it doesn't
                      //  even make it here.

                    } else if ( /^(url|email)$/.test(inputElemType) ) {
                      // Real url and email support comes with prebaked validation.
                      bool = inputElem.checkValidity && inputElem.checkValidity() === false;

                    } else {
                      // If the upgraded input compontent rejects the :) text, we got a winner
                      bool = inputElem.value != smile;
                    }
                }

                inputs[ props[i] ] = !!bool;
            }
            return inputs;
        })('search tel url email datetime date month week time datetime-local number range color'.split(' '));
        /*>>inputtypes*/
    }
    /*>>webforms*/


    // End of test definitions
    // -----------------------



    // Run through all tests and detect their support in the current UA.
    // todo: hypothetically we could be doing an array of tests and use a basic loop here.
    for ( var feature in tests ) {
        if ( hasOwnProp(tests, feature) ) {
            // run the test, throw the return value into the Modernizr,
            //   then based on that boolean, define an appropriate className
            //   and push it into an array of classes we'll join later.
            featureName  = feature.toLowerCase();
            Modernizr[featureName] = tests[feature]();

            classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);
        }
    }

    /*>>webforms*/
    // input tests need to run.
    Modernizr.input || webforms();
    /*>>webforms*/


    /**
     * addTest allows the user to define their own feature tests
     * the result will be added onto the Modernizr object,
     * as well as an appropriate className set on the html element
     *
     * @param feature - String naming the feature
     * @param test - Function returning true if feature is supported, false if not
     */
     Modernizr.addTest = function ( feature, test ) {
       if ( typeof feature == 'object' ) {
         for ( var key in feature ) {
           if ( hasOwnProp( feature, key ) ) {
             Modernizr.addTest( key, feature[ key ] );
           }
         }
       } else {

         feature = feature.toLowerCase();

         if ( Modernizr[feature] !== undefined ) {
           // we're going to quit if you're trying to overwrite an existing test
           // if we were to allow it, we'd do this:
           //   var re = new RegExp("\\b(no-)?" + feature + "\\b");
           //   docElement.className = docElement.className.replace( re, '' );
           // but, no rly, stuff 'em.
           return Modernizr;
         }

         test = typeof test == 'function' ? test() : test;

         if (typeof enableClasses !== "undefined" && enableClasses) {
           docElement.className += ' ' + (test ? '' : 'no-') + feature;
         }
         Modernizr[feature] = test;

       }

       return Modernizr; // allow chaining.
     };


    // Reset modElem.cssText to nothing to reduce memory footprint.
    setCss('');
    modElem = inputElem = null;

    /*>>shiv*/
    /**
     * @preserve HTML5 Shiv prev3.7.1 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
     */
    ;(function(window, document) {
        /*jshint evil:true */
        /** version */
        var version = '3.7.0';

        /** Preset options */
        var options = window.html5 || {};

        /** Used to skip problem elements */
        var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;

        /** Not all elements can be cloned in IE **/
        var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;

        /** Detect whether the browser supports default html5 styles */
        var supportsHtml5Styles;

        /** Name of the expando, to work with multiple documents or to re-shiv one document */
        var expando = '_html5shiv';

        /** The id for the the documents expando */
        var expanID = 0;

        /** Cached data for each document */
        var expandoData = {};

        /** Detect whether the browser supports unknown elements */
        var supportsUnknownElements;

        (function() {
          try {
            var a = document.createElement('a');
            a.innerHTML = '<xyz></xyz>';
            //if the hidden property is implemented we can assume, that the browser supports basic HTML5 Styles
            supportsHtml5Styles = ('hidden' in a);

            supportsUnknownElements = a.childNodes.length == 1 || (function() {
              // assign a false positive if unable to shiv
              (document.createElement)('a');
              var frag = document.createDocumentFragment();
              return (
                typeof frag.cloneNode == 'undefined' ||
                typeof frag.createDocumentFragment == 'undefined' ||
                typeof frag.createElement == 'undefined'
              );
            }());
          } catch(e) {
            // assign a false positive if detection fails => unable to shiv
            supportsHtml5Styles = true;
            supportsUnknownElements = true;
          }

        }());

        /*--------------------------------------------------------------------------*/

        /**
         * Creates a style sheet with the given CSS text and adds it to the document.
         * @private
         * @param {Document} ownerDocument The document.
         * @param {String} cssText The CSS text.
         * @returns {StyleSheet} The style element.
         */
        function addStyleSheet(ownerDocument, cssText) {
          var p = ownerDocument.createElement('p'),
          parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;

          p.innerHTML = 'x<style>' + cssText + '</style>';
          return parent.insertBefore(p.lastChild, parent.firstChild);
        }

        /**
         * Returns the value of `html5.elements` as an array.
         * @private
         * @returns {Array} An array of shived element node names.
         */
        function getElements() {
          var elements = html5.elements;
          return typeof elements == 'string' ? elements.split(' ') : elements;
        }

        /**
         * Returns the data associated to the given document
         * @private
         * @param {Document} ownerDocument The document.
         * @returns {Object} An object of data.
         */
        function getExpandoData(ownerDocument) {
          var data = expandoData[ownerDocument[expando]];
          if (!data) {
            data = {};
            expanID++;
            ownerDocument[expando] = expanID;
            expandoData[expanID] = data;
          }
          return data;
        }

        /**
         * returns a shived element for the given nodeName and document
         * @memberOf html5
         * @param {String} nodeName name of the element
         * @param {Document} ownerDocument The context document.
         * @returns {Object} The shived element.
         */
        function createElement(nodeName, ownerDocument, data){
          if (!ownerDocument) {
            ownerDocument = document;
          }
          if(supportsUnknownElements){
            return ownerDocument.createElement(nodeName);
          }
          if (!data) {
            data = getExpandoData(ownerDocument);
          }
          var node;

          if (data.cache[nodeName]) {
            node = data.cache[nodeName].cloneNode();
          } else if (saveClones.test(nodeName)) {
            node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
          } else {
            node = data.createElem(nodeName);
          }

          // Avoid adding some elements to fragments in IE < 9 because
          // * Attributes like `name` or `type` cannot be set/changed once an element
          //   is inserted into a document/fragment
          // * Link elements with `src` attributes that are inaccessible, as with
          //   a 403 response, will cause the tab/window to crash
          // * Script elements appended to fragments will execute when their `src`
          //   or `text` property is set
          return node.canHaveChildren && !reSkip.test(nodeName) && !node.tagUrn ? data.frag.appendChild(node) : node;
        }

        /**
         * returns a shived DocumentFragment for the given document
         * @memberOf html5
         * @param {Document} ownerDocument The context document.
         * @returns {Object} The shived DocumentFragment.
         */
        function createDocumentFragment(ownerDocument, data){
          if (!ownerDocument) {
            ownerDocument = document;
          }
          if(supportsUnknownElements){
            return ownerDocument.createDocumentFragment();
          }
          data = data || getExpandoData(ownerDocument);
          var clone = data.frag.cloneNode(),
          i = 0,
          elems = getElements(),
          l = elems.length;
          for(;i<l;i++){
            clone.createElement(elems[i]);
          }
          return clone;
        }

        /**
         * Shivs the `createElement` and `createDocumentFragment` methods of the document.
         * @private
         * @param {Document|DocumentFragment} ownerDocument The document.
         * @param {Object} data of the document.
         */
        function shivMethods(ownerDocument, data) {
          if (!data.cache) {
            data.cache = {};
            data.createElem = ownerDocument.createElement;
            data.createFrag = ownerDocument.createDocumentFragment;
            data.frag = data.createFrag();
          }


          ownerDocument.createElement = function(nodeName) {
            //abort shiv
            if (!html5.shivMethods) {
              return data.createElem(nodeName);
            }
            return createElement(nodeName, ownerDocument, data);
          };

          ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +
                                                          'var n=f.cloneNode(),c=n.createElement;' +
                                                          'h.shivMethods&&(' +
                                                          // unroll the `createElement` calls
                                                          getElements().join().replace(/[\w\-]+/g, function(nodeName) {
            data.createElem(nodeName);
            data.frag.createElement(nodeName);
            return 'c("' + nodeName + '")';
          }) +
            ');return n}'
                                                         )(html5, data.frag);
        }

        /*--------------------------------------------------------------------------*/

        /**
         * Shivs the given document.
         * @memberOf html5
         * @param {Document} ownerDocument The document to shiv.
         * @returns {Document} The shived document.
         */
        function shivDocument(ownerDocument) {
          if (!ownerDocument) {
            ownerDocument = document;
          }
          var data = getExpandoData(ownerDocument);

          if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
            data.hasCSS = !!addStyleSheet(ownerDocument,
                                          // corrects block display not defined in IE6/7/8/9
                                          'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}' +
                                            // adds styling not present in IE6/7/8/9
                                            'mark{background:#FF0;color:#000}' +
                                            // hides non-rendered elements
                                            'template{display:none}'
                                         );
          }
          if (!supportsUnknownElements) {
            shivMethods(ownerDocument, data);
          }
          return ownerDocument;
        }

        /*--------------------------------------------------------------------------*/

        /**
         * The `html5` object is exposed so that more elements can be shived and
         * existing shiving can be detected on iframes.
         * @type Object
         * @example
         *
         * // options can be changed before the script is included
         * html5 = { 'elements': 'mark section', 'shivCSS': false, 'shivMethods': false };
         */
        var html5 = {

          /**
           * An array or space separated string of node names of the elements to shiv.
           * @memberOf html5
           * @type Array|String
           */
          'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video',

          /**
           * current version of html5shiv
           */
          'version': version,

          /**
           * A flag to indicate that the HTML5 style sheet should be inserted.
           * @memberOf html5
           * @type Boolean
           */
          'shivCSS': (options.shivCSS !== false),

          /**
           * Is equal to true if a browser supports creating unknown/HTML5 elements
           * @memberOf html5
           * @type boolean
           */
          'supportsUnknownElements': supportsUnknownElements,

          /**
           * A flag to indicate that the document's `createElement` and `createDocumentFragment`
           * methods should be overwritten.
           * @memberOf html5
           * @type Boolean
           */
          'shivMethods': (options.shivMethods !== false),

          /**
           * A string to describe the type of `html5` object ("default" or "default print").
           * @memberOf html5
           * @type String
           */
          'type': 'default',

          // shivs the document according to the specified `html5` object options
          'shivDocument': shivDocument,

          //creates a shived element
          createElement: createElement,

          //creates a shived documentFragment
          createDocumentFragment: createDocumentFragment
        };

        /*--------------------------------------------------------------------------*/

        // expose html5
        window.html5 = html5;

        // shiv the document
        shivDocument(document);

    }(this, document));
    /*>>shiv*/

    // Assign private properties to the return object with prefix
    Modernizr._version      = version;

    // expose these for the plugin API. Look in the source for how to join() them against your input
    /*>>prefixes*/
    Modernizr._prefixes     = prefixes;
    /*>>prefixes*/
    /*>>domprefixes*/
    Modernizr._domPrefixes  = domPrefixes;
    Modernizr._cssomPrefixes  = cssomPrefixes;
    /*>>domprefixes*/

    /*>>mq*/
    // Modernizr.mq tests a given media query, live against the current state of the window
    // A few important notes:
    //   * If a browser does not support media queries at all (eg. oldIE) the mq() will always return false
    //   * A max-width or orientation query will be evaluated against the current state, which may change later.
    //   * You must specify values. Eg. If you are testing support for the min-width media query use:
    //       Modernizr.mq('(min-width:0)')
    // usage:
    // Modernizr.mq('only screen and (max-width:768)')
    Modernizr.mq            = testMediaQuery;
    /*>>mq*/

    /*>>hasevent*/
    // Modernizr.hasEvent() detects support for a given event, with an optional element to test on
    // Modernizr.hasEvent('gesturestart', elem)
    Modernizr.hasEvent      = isEventSupported;
    /*>>hasevent*/

    /*>>testprop*/
    // Modernizr.testProp() investigates whether a given style property is recognized
    // Note that the property names must be provided in the camelCase variant.
    // Modernizr.testProp('pointerEvents')
    Modernizr.testProp      = function(prop){
        return testProps([prop]);
    };
    /*>>testprop*/

    /*>>testallprops*/
    // Modernizr.testAllProps() investigates whether a given style property,
    //   or any of its vendor-prefixed variants, is recognized
    // Note that the property names must be provided in the camelCase variant.
    // Modernizr.testAllProps('boxSizing')
    Modernizr.testAllProps  = testPropsAll;
    /*>>testallprops*/


    /*>>teststyles*/
    // Modernizr.testStyles() allows you to add custom styles to the document and test an element afterwards
    // Modernizr.testStyles('#modernizr { position:absolute }', function(elem, rule){ ... })
    Modernizr.testStyles    = injectElementWithStyles;
    /*>>teststyles*/


    /*>>prefixed*/
    // Modernizr.prefixed() returns the prefixed or nonprefixed property name variant of your input
    // Modernizr.prefixed('boxSizing') // 'MozBoxSizing'

    // Properties must be passed as dom-style camelcase, rather than `box-sizing` hypentated style.
    // Return values will also be the camelCase variant, if you need to translate that to hypenated style use:
    //
    //     str.replace(/([A-Z])/g, function(str,m1){ return '-' + m1.toLowerCase(); }).replace(/^ms-/,'-ms-');

    // If you're trying to ascertain which transition end event to bind to, you might do something like...
    //
    //     var transEndEventNames = {
    //       'WebkitTransition' : 'webkitTransitionEnd',
    //       'MozTransition'    : 'transitionend',
    //       'OTransition'      : 'oTransitionEnd',
    //       'msTransition'     : 'MSTransitionEnd',
    //       'transition'       : 'transitionend'
    //     },
    //     transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ];

    Modernizr.prefixed      = function(prop, obj, elem){
      if(!obj) {
        return testPropsAll(prop, 'pfx');
      } else {
        // Testing DOM property e.g. Modernizr.prefixed('requestAnimationFrame', window) // 'mozRequestAnimationFrame'
        return testPropsAll(prop, obj, elem);
      }
    };
    /*>>prefixed*/


    /*>>cssclasses*/
    // Remove "no-js" class from <html> element, if it exists:
    docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') +

                            // Add the new classes to the <html> element.
                            (enableClasses ? ' js ' + classes.join(' ') : '');
    /*>>cssclasses*/

    return Modernizr;

})(this, this.document);
;jQuery(document).ready(function($){
	var $lateral_menu_trigger = $('#cd-menu-trigger'),
		$content_wrapper = $('.cd-main-content'),
		$navigation = $('header');

	//open-close lateral menu clicking on the menu icon
	$lateral_menu_trigger.on('click', function(event){
		event.preventDefault();
		
		$lateral_menu_trigger.toggleClass('is-clicked');
		$navigation.toggleClass('lateral-menu-is-open');
		$content_wrapper.toggleClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			// firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
			$('body').toggleClass('overflow-hidden');
		});
		$('#cd-lateral-nav').toggleClass('lateral-menu-is-open');
		
		//check if transitions are not supported - i.e. in IE9
		if($('html').hasClass('no-csstransitions')) {
			$('body').toggleClass('overflow-hidden');
		}
	});

	//close lateral menu clicking outside the menu itself
	$content_wrapper.on('click', function(event){
		if( !$(event.target).is('#cd-menu-trigger, #cd-menu-trigger span') ) {
			$lateral_menu_trigger.removeClass('is-clicked');
			$navigation.removeClass('lateral-menu-is-open');
			$content_wrapper.removeClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				$('body').removeClass('overflow-hidden');
			});
			$('#cd-lateral-nav').removeClass('lateral-menu-is-open');
			//check if transitions are not supported
			if($('html').hasClass('no-csstransitions')) {
				$('body').removeClass('overflow-hidden');
			}

		}
	});

	//open (or close) submenu items in the lateral menu. Close all the other open submenu items.
	$('.item-has-children').children('a').on('click', function(event){
		event.preventDefault();
		$(this).toggleClass('submenu-open').next('.sub-menu').slideToggle(200).end().parent('.item-has-children').siblings('.item-has-children').children('a').removeClass('submenu-open').next('.sub-menu').slideUp(200);
	});

	// Vertical Menu Tooltip
  $('.tooltip').jBox('Tooltip', {
  position: {
    x: 'right',
    y: 'center'
  },
  offset: {
		x: 3,
		y: 4
  },
  animation: {
  	open: 'move:left', 
  	close: 'move:left'
  },
  outside: 'x'
	});

});