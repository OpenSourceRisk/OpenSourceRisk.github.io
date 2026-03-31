/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,o=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=o,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var o={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",o):e.eventie=o}(this),function(e,t){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof exports?module.exports=t(e,require("wolfy87-eventemitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(window,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"===d.call(e)}function o(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0,i=e.length;i>n;n++)t.push(e[n]);else t.push(e);return t}function s(e,t,n){if(!(this instanceof s))return new s(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=o(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),a&&(this.jqDeferred=new a.Deferred);var r=this;setTimeout(function(){r.check()})}function f(e){this.img=e}function c(e){this.src=e,v[e]=this}var a=e.jQuery,u=e.console,h=u!==void 0,d=Object.prototype.toString;s.prototype=new t,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);var i=n.nodeType;if(i&&(1===i||9===i||11===i))for(var r=n.querySelectorAll("img"),o=0,s=r.length;s>o;o++){var f=r[o];this.addImage(f)}}},s.prototype.addImage=function(e){var t=new f(e);this.images.push(t)},s.prototype.check=function(){function e(e,r){return t.options.debug&&h&&u.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},s.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},a&&(a.fn.imagesLoaded=function(e,t){var n=new s(this,e,t);return n.jqDeferred.promise(a(this))}),f.prototype=new t,f.prototype.check=function(){var e=v[this.img.src]||new c(this.img.src);if(e.isConfirmed)return this.confirm(e.isLoaded,"cached was confirmed"),void 0;if(this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},f.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var v={};return c.prototype=new t,c.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},c.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},c.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},c.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},c.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},c.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},s});

(function($){
    "use strict"; // Start of use strict


    /* ---------------------------------------------
     Scripts initialization
     --------------------------------------------- */

    $(window).load(function(){

        calc_vc_container_size();

        // Page loader
        $(".page-loader div").delay(0).fadeOut();
        $(".page-loader").delay(200).fadeOut("slow");

        init_scroll_navigate();

        $(window).trigger("scroll");
        $(window).trigger("resize");

    });

    $(document).ready(function(){

        $(window).trigger("resize");

        // init_classic_menu();
		init_fullscreen_menu();
		init_side_panel();
        init_lightbox();
        init_parallax();
        init_shortcodes();
        init_tooltips();
        init_counters();
        init_team();
        initPageSliders();
        initWorkFilter();
        init_map();
        init_wow();
        init_masonry();
        init_video_bg();
        stickySidebar();
    });

    $(window).resize(function(){

        calc_vc_container_size();
        init_classic_menu_resize();
        js_height_init();
        fullwidthElementInit();
		init_side_panel_resize();
        stickySidebar();
    });


    /* --------------------------------------------
     Platform detect
     --------------------------------------------- */
    var mobileTest;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        mobileTest = true;
        $("html").addClass("mobile");
    }
    else {
        mobileTest = false;
        $("html").addClass("no-mobile");
    }

    var mozillaTest;
    if (/mozilla/.test(navigator.userAgent)) {
        mozillaTest = true;
    }
    else {
        mozillaTest = false;
    }
    var safariTest;
    if (/safari/.test(navigator.userAgent)) {
        safariTest = true;
    }
    else {
        safariTest = false;
    }

    // Detect touch devices
    if (!("ontouchstart" in document.documentElement)) {
        document.documentElement.className += " no-touch";
    }

    /* ---------------------------------------------
     Sections helpers
     --------------------------------------------- */

    // Sections backgrounds

    var pageSection = $(".home-section, .content-section, .small-section, .split-section, .page-section");
    pageSection.each(function(indx){

        if ($(this).attr("data-background")){
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });

    // Function for block height 100%
    function height_line(height_object, height_donor){
        height_donor.imagesLoaded(function(){
            height_object.height(height_donor.height());
            height_object.css({
                "line-height": height_donor.height() + "px"
            });
        });
    }

    // Function equal height
    !function(a){
        a.fn.equalHeights = function(){
            var b = 0, c = a(this);
            return c.each(function(){
                var c = a(this).innerHeight();
                c > b && (b = c)
            }), c.css("height", b)
        }, a("[data-equal]").each(function(){
            var b = a(this), c = b.data("equal");
            b.find(c).equalHeights()
        })
    }(jQuery);


    // Progress bars
    var progressBar = $(".progress-bar");
    progressBar.each(function(indx){
        $(this).css("width", $(this).attr("aria-valuenow") + "%");
    });

    var pageSection = $(".home-section, .content-section, .small-section, .split-section");
    pageSection.each(function(indx){

        if ($(this).attr("data-background")){
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });


    /*------------------------------------------
    Fullwidth Elements
    ------------------------------------------*/
    function fullwidthElementInit(){
        var container = jQuery('.container:first-child'),
            containerPaddingLeft = parseInt(container.css('padding-left')),
            fullwidthElement = jQuery('.content-section.full-width').not('.with-col');

        fullwidthElement.css({
            marginLeft: (container.offset().left + containerPaddingLeft) * -1,
            marginRight: (container.offset().left + containerPaddingLeft) * -1
        });
        if ( ( $('#top.side-panel-is-left').length || $('#top.side-panel-is-right').length ) && ( $(window).width() >= 1199 )  ) {
            fullwidthElement.css({
                marginLeft: (container.offset().left + containerPaddingLeft - 270) * -1,
                marginRight: (container.offset().left + containerPaddingLeft - 270) * -1
            });
            if( fullwidthElement.outerWidth() == container.outerWidth() ){
                fullwidthElement.css({
                    marginLeft: (container.offset().left + containerPaddingLeft - 270) * -1,
                    marginRight: (container.width() + containerPaddingLeft - $('#top').width())
                });
                jQuery('.content-section.full-width.with-col').css({
                    marginLeft: (container.offset().left + containerPaddingLeft - 270) * -1,
                    marginRight: (container.width() + containerPaddingLeft - $('#top').width())
                });
            }
        };
    };
    fullwidthElementInit();



    /* ---------------------------------------------
     Nav panel classic
     --------------------------------------------- */

    var mobile_nav = $(".mobile-nav");
    var desktop_nav = $(".desktop-nav");

    function init_classic_menu_resize(){

        // Mobile menu max height
        $(".mobile-on .desktop-nav > ul").css("max-height", $(window).height() - $(".main-nav").height() - 20 + "px");

        // Mobile menu style toggle
        if ($(window).width() <= 1024) {
            $(".main-nav").addClass("mobile-on");
        }
        else
            if ($(window).width() > 1024) {
                $(".main-nav").removeClass("mobile-on");
                desktop_nav.show();
            }

        if ( $('.main-nav').hasClass('mobile-on') == true ) {
            $('.inner-nav.desktop-nav').removeAttr('style');
        };
    }

    // vc container

    function calc_vc_container_size() {

      var _w = jQuery(window).width();

      $('.page').each(function() {
        // get the width

        var _width = $(this).width();

        var _diff = (_w - _width) / 2 + 15;

        var mainSectionW = $('.main-section').width(),
            containerW = $('.container').first().width();

        $('.content-section.with-col').css({
          marginLeft: '-' + _diff + 'px',
          paddingLeft: _diff + 'px',
          marginRight: '-' + _diff + 'px',
          paddingRight: _diff + 'px'
        });
        if ( ( $('#top.side-panel-is-left').length || $('#top.side-panel-is-right').length ) && ( $(window).width() >= 1199 )  ) {

            if( mainSectionW < containerW ){
                $('.content-section.with-col').css({
                  marginLeft: '-' + _diff + 'px',
                  paddingLeft: _diff + 'px',
                  marginRight: (containerW - mainSectionW) / 2 + 15 + 'px',
                  paddingRight: (containerW - mainSectionW) / 2 + 15 + 'px'
                });
                $('.content-section.with-col').find('.content-section.with-col').css({
                  marginLeft: '-' + _diff + 'px',
                  paddingLeft: _diff + 'px',
                  marginRight: '-' + _diff + 'px',
                  paddingRight: _diff + 'px'
                });
            }
        }
      });

    }

    function init_classic_menu(){


        // Navbar sticky

        $(".js-stick").sticky({
            topSpacing: 0
        });


        $(".inner-nav.desktop-nav").height($(".main-nav").outerHeight());
        height_line($(".inner-nav ul > li > a"), $(".nav-logo-wrap"));
        // height_line(mobile_nav, $(".nav-logo-wrap"));

        mobile_nav.imagesLoaded(function(){
            // mobile_nav.css({
            //     "width": $(".nav-logo-wrap").height() + "px"
            // });
        });

        if ( $('.main-nav.mn-centered') || $('.main-nav.mn-align-left') ){
            height_line($(".inner-nav ul > li > a"), $(".main-nav"));
            // height_line(mobile_nav, $(".main-nav"));
            
            mobile_nav.imagesLoaded(function(){
                // mobile_nav.css({
                //     "width": $(".main-nav").height() + "px"
                // });
            });
        };
        // Transpaner menu

        if ($(".main-nav").hasClass("transparent")){
           $(".main-nav").addClass("js-transparent");
        }

        $(window).scroll(function(){

                if ($(window).scrollTop() > 10) {
                    $(".js-transparent").removeClass("transparent");
                    $(".main-nav, .nav-logo-wrap .logo, .mobile-nav").addClass("small-height");
                    if ($('.sticky-wrapper').length) {
                        $('.sticky-wrapper').addClass('small-height');
                    };
                }
                else {
                    $(".js-transparent").addClass("transparent");
                    $(".main-nav, .nav-logo-wrap .logo, .mobile-nav").removeClass("small-height");
                    if ($('.sticky-wrapper').length) {
                        $('.sticky-wrapper').removeClass('small-height');
                    };
                }

                if ($('.logo.small-height').height() > $('.main-nav.small-height').height() && $(window).scrollTop() > 10) {
                    $('.logo.small-height').width( $('.main-nav.small-height').height() )
                };

        });

        // Mobile menu toggle

        mobile_nav.click(function(){

            if (desktop_nav.hasClass("js-opened")) {
                desktop_nav.slideUp("slow", "easeOutExpo").removeClass("js-opened");
                $(this).removeClass("active");
            }
            else {
                desktop_nav.slideDown("slow", "easeOutQuart").addClass("js-opened");
                $(this).addClass("active");
            }

        });

        desktop_nav.find("a:not(.mn-has-sub)").click(function(){
            if (mobile_nav.hasClass("active")) {
                desktop_nav.slideUp("slow", "easeOutExpo").removeClass("js-opened");
                mobile_nav.removeClass("active");
            }
        });


        // Sub menu


        var mnHasSub = $(".mn-has-sub"),
            mnMultiCol = $('.mn-sub.mn-has-multi'),
            mnThisLi;

        if (mnMultiCol.length) {
            mnMultiCol.each(function() {
                var $this = $(this);
                if (($this.width() + $this.offset().left) >= $(window).width()) {
                    $this.addClass('drop-to-left')
                }
            });
        };

        $(".mobile-on .mn-has-sub").find(".fm-angle-icon").removeClass("fa-angle-right").addClass("fa-angle-down");
		
		$(".mn-has-sub:not(.mn-active-link)").click(function(){
			return activate_classic_menu_item(this);
		});
		
		$(".mn-has-sub.mn-active-link").find('i').click(function(){
			return activate_classic_menu_item(this);
		});

        mnThisLi = mnHasSub.parent("li");
        mnThisLi.hover(function(){

            if (!($(".main-nav").hasClass("mobile-on"))) {

                $(this).find(".mn-sub:first").stop(true, true).fadeIn("fast");
            }

        }, function(){

            if (!($(".main-nav").hasClass("mobile-on"))) {

                $(this).find(".mn-sub:first").stop(true, true).delay(100).fadeOut("fast");
            }

        });
    }
    $('.nav-logo-wrap').imagesLoaded(function(){
        init_classic_menu();
    });

	function activate_classic_menu_item(item) {
		
		var mnThisLi;
		
		if ($(".main-nav").hasClass("mobile-on")) {
			mnThisLi = $(item).closest("li");

			if (mnThisLi.hasClass("js-opened")) {
				mnThisLi.find(".mn-sub:first").slideUp(function(){
					mnThisLi.removeClass("js-opened");
					mnThisLi.find(".mn-has-sub").find(".mn-angle-icon").removeClass("fa-angle-up").addClass("fa-angle-down");
				});
			}
			else {
				$(item).find(".mn-angle-icon").removeClass("fa-angle-down").addClass("fa-angle-up");
				mnThisLi.addClass("js-opened");
				mnThisLi.find(".mn-sub:first").slideDown();
			}

			return false;
		}
		return false;
	}

    /* ---------------------------------------------
     Scroll navigation
     --------------------------------------------- */

    function init_scroll_navigate(){

        $(".local-scroll").localScroll({
            target: "body",
            duration: 1500,
            offset: 0,
            easing: "easeInOutExpo"
        });

        var sections = $(".content-section");
        var menu_links = $(".scroll-nav li a");

        $(window).scroll(function(){
			
			sections.filter(":in-viewport:first").each(function(){
				var active_section = $(this);
				var active_link = $('.scroll-nav li a[href="#' + active_section.attr("id") + '"]');
                menu_links.removeClass("active");
                active_link.addClass("active");
            });
        });

    }



    /* ---------------------------------------------
     Lightboxes
     --------------------------------------------- */

    function init_lightbox(){

		if (typeof $.fn.magnificPopup == 'function') {

			// Works Item Lightbox
			$(".work-lightbox-link").magnificPopup({
				gallery: {
					enabled: true
				},
				mainClass: "mfp-fade"
			});

			// Works Item Lightbox
			$(".lightbox-gallery-1").magnificPopup({
				gallery: {
					enabled: true
				}
			});

			// Other Custom Lightbox
			$(".lightbox-gallery-2").magnificPopup({
				gallery: {
					enabled: true
				}
			});
			$(".lightbox-gallery-3").magnificPopup({
				gallery: {
					enabled: true
				}
			});
			$(".lightbox").magnificPopup();

			$('.popup-video-box').magnificPopup({
				disableOn: 700,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,

				fixedContentPos: false
			});


			$('.video-popup-modal').magnificPopup({
				type: 'inline',
				preloader: false,
//				focus: '#username',
//				modal: true
			});

			$(document).on('click', '.popup-modal-dismiss', function (e) {
				e.preventDefault();
				$.magnificPopup.close();
			});
		}

    }



    /* -------------------------------------------
     Parallax
     --------------------------------------------- */

    function init_parallax(){

        // Parallax
        if (($(window).width() >= 1024) && (mobileTest == false)) {
            $(".parallax-1").parallax("50%", 0.1);
            $(".parallax-2").parallax("50%", 0.2);
            $(".parallax-3").parallax("50%", 0.3);
            $(".parallax-4").parallax("50%", 0.4);
            $(".parallax-5").parallax("50%", 0.5);
            $(".parallax-6").parallax("50%", 0.6);
            $(".parallax-7").parallax("50%", 0.7);
            $(".parallax-8").parallax("50%", 0.5);
            $(".parallax-9").parallax("50%", 0.5);
            $(".parallax-10").parallax("50%", 0.5);
            $(".parallax-11").parallax("50%", 0.05);
        }

    }



    /* ---------------------------------------------
     Shortcodes
     --------------------------------------------- */
    // Tabs minimal
    function init_shortcodes() {

        var tpl_tab_height;
        $(".tpl-minimal-tabs > li > a").click(function(){

            if (!($(this).parent("li").hasClass("active"))) {
                tpl_tab_height = $(".tpl-minimal-tabs-cont > .tab-pane").filter($(this).attr("href")).height();
                $(".tpl-minimal-tabs-cont").animate({
                    height: tpl_tab_height
                }, function(){
                    $(".tpl-minimal-tabs-cont").css("height", "auto");
                });

            }

        });


        // Accordion
        $('.accordion-wrapper').each(function() {

            var $this = $(this),
            $wrap = $this.find('.accordion');

            $wrap.each( function() {

				var $accordion  = $(this),
                $content    = $accordion.find('.accordion-content');

				if ($this.hasClass('toggle-wrapper')) {
					$accordion.on('click', '.accordion-title', function( e ) {
						e.preventDefault();

						console.dir($wrap.find('.accordion-title').attr('class'));

						if ($(this).hasClass('active')) {
							$(this).removeClass('active');
							$(this).closest('.accordion').find('.accordion-content').stop().slideUp('easeInExpo');
						} else {
							$(this).addClass('active');

							$(this).closest('.accordion').find('.accordion-content').stop().slideDown('easeOutExpo');
						}
					});
				} else {
					 $accordion.on('click', '.accordion-title:not(.selected)', function( e ) {
						e.preventDefault();

						$wrap.find('.accordion-title').removeClass('active');
						$(this).addClass('active');

						$this.find('.accordion-content:visible').stop().slideUp('easeInExpo');
						$content.stop().slideDown('easeOutExpo');

					});
				}
            });
        });

		// FAQ
        var allPanels = $(".faq-wrapper .accordion > div.dd").hide();
        allPanels.first().slideDown("easeOutExpo");
        $(".faq-wrapper .accordion > div.dt > a").first().addClass("active");

        $(".faq-wrapper .accordion > div.dt > a").click(function(){

            var current = $(this).parent().next("div.dd");
            $(".accordion > div.dt > a").removeClass("active");
            $(this).addClass("active");
            allPanels.not(current).slideUp("easeInExpo");
            $(this).parent().next().slideDown("easeOutExpo");

            return false;

        });

        // Toggle
        $('.toggle').each(function() {

            var $this     = $(this),
            $content  = $this.find('.toggle-content');

            $this.on('click', '.toggle-title', function( e ) {
                e.preventDefault();
                $content.slideToggle('easeInOutExpo');
                $(this).toggleClass('active');
            });
        });

        // Responsive video
		if (typeof $.fn.fitVids == 'function') {
			$(".video, .resp-media, .blog-media").fitVids();
			$(".work-full-media").fitVids();
		}

    }



    /* ---------------------------------------------
     Tooltips (bootstrap plugin activated)
     --------------------------------------------- */

    function init_tooltips(){

        $(".tooltip-bot, .tooltip-bot a, .nav-social-links a").tooltip({
            placement: "bottom"
        });

        $(".tooltip-top, .tooltip-top a").tooltip({
            placement: "top"
        });

    }



    /* ---------------------------------------------
     Some facts section
     --------------------------------------------- */

     function init_counters(){

		if (typeof $.fn.appear == 'function') {
			$(".count-number").appear(function(){
				var count = $(this);
				count.countTo({
					from: 0,
					to: count.html(),
					speed: 1300,
					refreshInterval: 60,
				});

			});
		}
    }




    /* ---------------------------------------------
     Team
     --------------------------------------------- */

    function init_team(){

        // Hover
        $(".team-item").click(function(){
            if ($("html").hasClass("mobile")) {
                $(this).toggleClass("js-active");
            }
        });

    }

	/* ---------------------------------------------
     Comment form validation
     --------------------------------------------- */
	function init_comment_form_validation() {

		if ($('#comment-form').length > 0) {
			$('#comment-form').validator();
		}
	}
	
	
	/* ---------------------------------------------
     Fullscreen menu
     --------------------------------------------- */
    
    var fm_menu_wrap = $("#fullscreen-menu");
    var fm_menu_button = $(".fm-button");
    
    function init_fullscreen_menu(){
        
        fm_menu_button.click(function(){
            
            if ($(this).hasClass("animation-process")){
                return false;
            }
            else{
                if ($(this).hasClass("active")) {
                    $(this).removeClass("active").css("z-index", "2001").addClass("animation-process");;
                    
                    fm_menu_wrap.find(".fm-wrapper-sub").fadeOut("fast", function(){
                        fm_menu_wrap.fadeOut(function(){
                            fm_menu_wrap.find(".fm-wrapper-sub").removeClass("js-active").show();
                            fm_menu_button.css("z-index", "1030").removeClass("animation-process");
                            
                        });
                    });
                    
                    if ($(".owl-carousel").lenth) {
                        $(".owl-carousel").data("owlCarousel").play();
                    }
                    
                }
                else {
                    if ($(".owl-carousel").lenth) {
                        $(".owl-carousel").data("owlCarousel").stop();
                    }
                    $(this).addClass("active").css("z-index", "2001").addClass("animation-process");
                    
                    fm_menu_wrap.fadeIn(function(){
                        fm_menu_wrap.find(".fm-wrapper-sub").addClass("js-active");
                        fm_menu_button.removeClass("animation-process");
                    });
                }
                
                return false;
            }
            
        });
        
        $("#fullscreen-menu").find("a:not(.fm-has-sub)").click(function(){
            
            if (fm_menu_button.hasClass("animation-process")){
                return false;
            } 
            else {
                fm_menu_button.removeClass("active").css("z-index", "2001").addClass("animation-process");;
                    
                fm_menu_wrap.find(".fm-wrapper-sub").fadeOut("fast", function(){
                    fm_menu_wrap.fadeOut(function(){
                        fm_menu_wrap.find(".fm-wrapper-sub").removeClass("js-active").show();
                        fm_menu_button.css("z-index", "1030").removeClass("animation-process");
                        
                    });
                });
                
                if ($(".owl-carousel").lenth) {
                    $(".owl-carousel").data("owlCarousel").play();
                }
            }
        });
        
        // Sub menu
        $(".fm-has-sub:not(.fm-active-link)").click(function(){
			return activate_fullscreen_menu_item(this);
		});
		
		$(".fm-has-sub.fm-active-link").find('i').click(function(){
			return activate_fullscreen_menu_item(this);
		});      
    }
	
	function activate_fullscreen_menu_item(item) {
		
		var fmThisLi = $(item).closest("li");
		if (fmThisLi.hasClass("js-opened")) {
			fmThisLi.find(".fm-sub:first").slideUp(function(){
				fmThisLi.removeClass("js-opened");
				fmThisLi.find(".fm-has-sub").find(".mn-angle-icon").removeClass("fa-angle-up").addClass("fa-angle-down");
			});
		}
		else {
			$(item).find(".mn-angle-icon").removeClass("fa-angle-down").addClass("fa-angle-up");
			fmThisLi.addClass("js-opened");
			fmThisLi.find(".fm-sub:first").slideDown();
		}

		return false;
	}
	
	/* ---------------------------------------------
     Side panel
   --------------------------------------------- */
    
    var side_panel = $(".side-panel");
    var sp_button = $(".sp-button");
    var sp_close_button = $(".sp-close-button");
    var sp_overlay = $(".sp-overlay");
    
    function sp_panel_close(){
        side_panel.animate({
            opacity: 0,
            left: -270
        }, 500, "easeOutExpo");
        sp_overlay.fadeOut();
        
        
        if ($(".owl-carousel").lenth) {
            $(".owl-carousel").data("owlCarousel").play();
        }
    }
    
    function init_side_panel(){
        (function($){
            "use strict";
            
            sp_button.click(function(){
            
                side_panel.animate({
                    opacity: 1,
                    left: 0
                }, 500, "easeOutExpo");
                
                setTimeout(function(){
                    sp_overlay.fadeIn();
                }, 100);
                
                if ($(".owl-carousel").lenth) {
                    $(".owl-carousel").data("owlCarousel").stop();
                }
                
                return false;
            
            });
            
            sp_close_button.click(function(){
                sp_panel_close();
                return false;
            });
            sp_overlay.click(function(){
                sp_panel_close();
                return false;
            });
            
            $("#side-panel-menu").find("a:not(.sp-has-sub)").click(function(){
                if (!($(window).width() >= 1199)) {
                    sp_panel_close();
                }
            });
            
            
            // Sub menu
			$(".sp-has-sub:not(.sp-active-link)").click(function(){
				return activate_side_menu_item(this);
			});

			$(".sp-has-sub.sp-active-link").find('i').click(function(){
				return activate_side_menu_item(this);
			});
            
        })(jQuery);
    }
	
	function activate_side_menu_item(item) {
		
		var spThisLi = $(item).closest("li");
		
		if (spThisLi.hasClass("js-opened")) {
			spThisLi.find(".sp-sub:first").slideUp(function(){
				spThisLi.removeClass("js-opened");
				spThisLi.find(".sp-has-sub").find(".sp-angle-icon").removeClass("fa-angle-up").addClass("fa-angle-down");
			});
		}
		else {
			$(item).find(".sp-angle-icon").removeClass("fa-angle-down").addClass("fa-angle-up");
			spThisLi.addClass("js-opened");
			spThisLi.find(".sp-sub:first").slideDown();
		}

		return false;
	}
    
    function init_side_panel_resize(){
        (function($){
            "use strict";
            
             if ($(window).width() >= 1199){
               side_panel.css({
                   opacity: 1,
                   left: 0
               });
               $(".side-panel-is-left").css("margin-left", "270px");
               sp_button.css("display", "none");
               sp_close_button.css("display", "none");
             } else {
                 side_panel.css({
                     opacity: 0,
                     left: -270
                 });
                 $(".side-panel-is-left").css("margin-left", "0");
                 sp_button.css("display", "block");
                 sp_close_button.css("display", "block");
             }
            
        })(jQuery);
    }
})(jQuery); // End of use strict


/* ---------------------------------------------
     Sliders
   --------------------------------------------- */
function initPageSliders(){
    (function($){
        "use strict";
		
		function syncPosition(el){
          var current = this.currentItem;
          $(".fullwidth-slideshow-pager").find(".owl-item").removeClass("synced").eq(current).addClass("synced")
          if ($(".fullwidth-slideshow-pager").data("owlCarousel") !== undefined) {
              center(current)
          }
      }

	function center(number){
		var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
		var num = number;
		var found = false;
		for (var i in sync2visible) {
			if (num === sync2visible[i]) {
				var found = true;
			}
		}
		if (found === false) {
			if (num > sync2visible[sync2visible.length - 1]) {
				sync2.trigger("owl.goTo", num - sync2visible.length + 2)
			}
			else {
				if (num - 1 === -1) {
					num = 0;
				}
				sync2.trigger("owl.goTo", num);
			}
		}
		else
			if (num === sync2visible[sync2visible.length - 1]) {
				sync2.trigger("owl.goTo", sync2visible[1])
			}
			else
				if (num === sync2visible[0]) {
					sync2.trigger("owl.goTo", num - 1)
				}
	}

		if (typeof $.fn.owlCarousel == 'function') {

			// Fullwidth slider
			$(".fullwidth-slider").owlCarousel({
				slideSpeed: 350,
				singleItem: true,
				autoHeight: true,
				navigation: true,
				navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
			});

			// Fullwidth slider
			$(".fullwidth-slider-fade").owlCarousel({
				transitionStyle: "fadeUp",
				slideSpeed: 350,
				singleItem: true,
				autoHeight: true,
				navigation: true,
				navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
			});

      // Fullwidth gallery
      var _full_width_gallery_selc     = $(".fullwidth-gallery");
      var _full_width_gallery_speed    = (_full_width_gallery_selc.attr('data-speed')) ? _full_width_gallery_selc.data('speed'):700;
      var _full_width_gallery_autoplay = (_full_width_gallery_selc.attr('data-autoplay')) ? _full_width_gallery_selc.data('autoplay'):5000;

      $(".fullwidth-gallery").owlCarousel({
        transitionStyle: "fade",
        autoPlay: _full_width_gallery_autoplay,
        slideSpeed: _full_width_gallery_speed,
        singleItem: true,
        autoHeight: true,
        navigation: false,
        pagination: false
      });

			// Item carousel
			$(".item-carousel").owlCarousel({
				autoPlay: 2500,
				//stopOnHover: true,
				items: 3,
				itemsDesktop: [1199, 3],
				itemsTabletSmall: [768, 3],
				itemsMobile: [480, 1],
				navigation: false,
				navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
			});

			// Item carousel
			$(".small-item-carousel").owlCarousel({
				autoPlay: 2500,
				stopOnHover: true,
				items: 6,
				itemsDesktop: [1199, 4],
				itemsTabletSmall: [768, 3],
				itemsMobile: [480, 2],
				pagination: false,
				navigation: false,
				navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
			});

			// Single carousel
			$(".single-carousel").owlCarousel({
				//transitionStyle: "backSlide",
				singleItem: true,
				autoHeight: true,
				navigation: true,
				navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
			});

			// Content Slider
			$(".content-slider").owlCarousel({
				slideSpeed: 350,
				singleItem: true,
				autoHeight: true,
				navigation: true,
				navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
			});

			// Photo slider
			$(".photo-slider").owlCarousel({
				//transitionStyle: "backSlide",
				slideSpeed: 350,
				items: 4,
				itemsDesktop: [1199, 4],
				itemsTabletSmall: [768, 2],
				itemsMobile: [480, 1],
				autoHeight: true,
				navigation: true,
				navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
			});

			// Work slider
			$(".work-full-slider").owlCarousel({
				slideSpeed : 350,
				singleItem: true,
				autoHeight: true,
				navigation: true,
				navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
			});

			// Blog posts carousel
			$(".blog-posts-carousel").owlCarousel({
				autoPlay: 5000,
				stopOnHover: true,
				items: 3,
				itemsDesktop: [1199, 3],
				itemsTabletSmall: [768, 2],
				itemsMobile: [480, 1],
				pagination: false,
				navigation: true,
				navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
			});

			// Blog posts carousel alt
			$(".blog-posts-carousel-alt").owlCarousel({
				autoPlay: 3500,
				stopOnHover: true,
				slideSpeed: 350,
				singleItem: true,
				autoHeight: true,
				pagination: false,
				navigation: true,
				navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
			});

      // Image carousel
      $(".image-carousel").owlCarousel({
          autoPlay: 5000,
          stopOnHover: true,
          items: 4,
          itemsDesktop: [1199, 3],
          itemsTabletSmall: [768, 2],
          itemsMobile: [480, 1],
          navigation: true,
          navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
      });

      // Fullwidth slideshow

        var sync1 = $(".fullwidth-slideshow");
        var sync2 = $(".fullwidth-slideshow-pager");

      $(".fullwidth-slideshow").owlCarousel({
          autoPlay: 5000,
          stopOnHover: true,
          transitionStyle: "fade",
          slideSpeed: 350,
          singleItem: true,
          autoHeight: true,
          pagination: false,
          navigation: true,
          navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
          afterAction : syncPosition,
          responsiveRefreshRate : 200
      });
      $(".fullwidth-slideshow-pager").owlCarousel({
          autoPlay: 5000,
          stopOnHover: true,
          items: 8,
          itemsDesktop: [1199,8],
          itemsDesktopSmall: [979,7],
          itemsTablet: [768,6],
          itemsMobile: [480,4],
          autoHeight: true,
          pagination: false,
          navigation: false,
          responsiveRefreshRate : 100,
          afterInit : function(el){
            el.find(".owl-item").eq(0).addClass("synced");
          }
      });

      $(".fullwidth-slideshow-pager").on("click", ".owl-item", function(e){
          e.preventDefault();
          var number = $(this).data("owlItem");
          sync1.trigger("owl.goTo", number);
      });

	  var owl = $(".fullwidth-slideshow").data("owlCarousel");

      $(document.documentElement).keyup(function(event){
          // handle cursor keys
          if (event.keyCode == 37) {
              owl.prev();
          }
          else
              if (event.keyCode == 39) {
                  owl.next();
              }
      });

			if ($(".owl-carousel").length) {
				var owl = $(".owl-carousel").data('owlCarousel');
				owl.reinit();
			}
		}

    })(jQuery);
};



/* ---------------------------------------------
 Portfolio section
 --------------------------------------------- */

// Projects filtering
var fselector = 0;
var work_grid = jQuery("#work-grid, #isotope");

function initWorkFilter(){
    (function($){

	 if (typeof $.fn.isotope == 'function') {

		"use strict";
		var isotope_mode;
		if (work_grid.hasClass("masonry")){
			isotope_mode = "masonry";
		} else{
			isotope_mode = "fitRows"
		}

		work_grid.imagesLoaded(function(){
			   work_grid.isotope({
				   itemSelector: '.mix',
				   layoutMode: isotope_mode,
				   filter: fselector
			   });
		   });

		   $(".filter").click(function(){
			   $(".filter").removeClass("active");
			   $(this).addClass("active");
			   fselector = $(this).attr('data-filter');

			   work_grid.isotope({
				   itemSelector: '.mix',
				   layoutMode: isotope_mode,
				   filter: fselector
			   });
			   return false;
		   });
	 }

    })(jQuery);
}





/* ---------------------------------------------
 Height 100%
 --------------------------------------------- */
function js_height_init(){
    (function($){
        $(".js-height-full").height($(window).height());
        $(".js-height-parent").each(function(){
            $(this).height($(this).parent().first().height());
        });
    })(jQuery);
}




/* ---------------------------------------------
 Google map
 --------------------------------------------- */

var gmMapDiv = jQuery(".map-canvas");

function init_map(){
    (function($){

        $('.map-section').click(function(){
            $(this).toggleClass("js-active");
            $(this).find(".mt-open").toggle();
            $(this).find(".mt-close").toggle();
        });
        
        gmMapDiv.each(function() {

            var _this = $(this);

    		if (typeof $.fn.gmap3 == 'function') {
                

    			if (_this.length) {

    				var gmCenterAddress = _this.attr("data-address");
    				var gmMarkerAddress = _this.attr("data-address");
                    var gmGreyscale     = _this.attr("data-greyscale");
                    var gmStyles        = ( gmGreyscale ==  'true') ? [{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#d3d3d3"}]},{"featureType":"transit","stylers":[{"color":"#808080"},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#b3b3b3"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"weight":1.8}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#d7d7d7"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ebebeb"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#a7a7a7"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#efefef"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#696969"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#737373"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#d6d6d6"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#dadada"}]}]:false;

    				_this.gmap3({
    					action: "init",
    					marker: {
    						address: gmMarkerAddress,
    						options: {
    							icon: get.siteurl + "/images/map-marker.png"
    						}
    					},
    					map: {
    						options: {
    							zoom: 14,
    							zoomControl: true,
    							zoomControlOptions: {
    								style: google.maps.ZoomControlStyle.SMALL
    							},
    							mapTypeControl: false,
    							scaleControl: false,
    							scrollwheel: false,
    							streetViewControl: false,
    							draggable: true,
    							styles: gmStyles
    						}
    					}
    				});
    			}
    		}
        });
    })(jQuery);
}


/* ---------------------------------------------
 WOW animations
 --------------------------------------------- */

function init_wow(){
    (function($){

        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 90,
            mobile: false,
            live: true
        });

        if ($("body").hasClass("appear-animate")){
           wow.init();
        }

    })(jQuery);
}


/* ---------------------------------------------
 Masonry
 --------------------------------------------- */

function init_masonry(){
    (function($){

		if (typeof $.fn.masonry == 'function') {

			$(".masonry").imagesLoaded(function(){
				$(".masonry").masonry();
			});

		}

    })(jQuery);
}

/* ---------------------------------------------
 Video BG
 --------------------------------------------- */
function init_video_bg() {
    (function($){

        if (typeof $.fn.vide == 'function') {


            $('.bg-video-wrapper').each(function() {

                $this = $(this);

                $this.vide({
                    mp4: $this.data('mp4'),
                    webm: $this.data('webm'),
                    ogv: $this.data('ogv'),
                    poster: $this.data('poster')
                    }, {
                        volume: 0,
                        playbackRate: 1,
                        muted: $this.data('muted'),
                        loop: true,
                        autoplay: $this.data('autoplay'),
                        position: '50% 50%', // Similar to the CSS `background-position` property.
                        posterType: $this.data('poster-type'), // Poster image type. "detect" — auto-detection; "none" — no poster; "jpg", "png", "gif",... - extensions.
                        resizing: true // Auto-resizing, read: https://github.com/VodkaBears/Vide#resizing
                });
            });
        }

    })(jQuery);
}

/* ---------------------------------------------
 Sticky Sidebar
 --------------------------------------------- */

function stickySidebar() {
    (function($){
        var $stickySidebar   = $(".sidebar-fixed").children('.sidebar-inner'), 
            $window    = $(window),
            topPadding = 100,
            parentSection = $('.main-section.page-section'),
            parentSectionOffset = parentSection.offset(),
            parentSectionPadding = parseInt(parentSection.css('padding-top'));

        $stickySidebar.imagesLoaded(function(){
            var height = $stickySidebar.height(),
                offset     = $stickySidebar.offset(),
                footerHeight = parseInt($('.footer').last().outerHeight(true), 10),
                mainSectionPB = parseInt($('.main-section.page-section').css('padding-bottom'), 10),
                topSpace,
                bottomSpace;

            $stickySidebar.parent().css('height', '');
            $stickySidebar.parent().height(height);

            if ($('.sticky-wrapper').length) {
                topSpace = 85;
            } else {
                topSpace = 0;
            };

            if ($('.footer').length) {
                bottomSpace = footerHeight + mainSectionPB ;
            } else {
                bottomSpace = mainSectionPB ;
            };

            $stickySidebar.sticky({
                topSpacing: topSpace,
                bottomSpacing: bottomSpace
            });
        });
    })(jQuery);
    
}