;(function ( $, window, document, undefined ) {
  'use strict';


  $.reloadPlugins = function() {

    $('.icon-select').chosen({
        template: function (text, value, templateData) {
            return ['<i class="' + templateData.icon + '"></i> ' + text].join('');
        }
    });
	$('.wpb_chosen').chosen();
	$('.chzn-drop').css({"width": "300px"});
  };

  var Shortcodes = vc.shortcodes;

  if( window.VcColumnView ) {
    //
    // Carousel
    // -------------------------------------------------------------------------
    window.RSSliderView = window.VcColumnView.extend({
      events:{
        'click > .controls .column_add':'addDirectlyElement',
        'click > .wpb_element_wrapper > .vc_empty-container':'addDirectlyElement',
        'click > .controls .column_delete':'deleteShortcode',
        'click > .controls .column_edit':'editElement',
        'click > .controls .column_clone':'clone',
      },
      addDirectlyElement:function ( e ) {
        e.preventDefault();
        var slider = Shortcodes.create({shortcode:'rs_slider_item', parent_id:this.model.id});
        return slider;
      },
      setDropable:function () {},
      dropButton:function ( event, ui ) {},
    });

    window.RSCounterView = window.VcColumnView.extend({
      events:{
        'click > .controls .column_add':'addDirectlyElement',
        'click > .wpb_element_wrapper > .vc_empty-container':'addDirectlyElement',
        'click > .controls .column_delete':'deleteShortcode',
        'click > .controls .column_edit':'editElement',
        'click > .controls .column_clone':'clone',
      },
      addDirectlyElement:function ( e ) {
        e.preventDefault();
        var slider = Shortcodes.create({shortcode:'rs_count', parent_id:this.model.id});
        return slider;
      },
      setDropable:function () {},
      dropButton:function ( event, ui ) {},
    });
  }

  //
  // ATTS
  // -------------------------------------------------------------------------
  _.extend(vc.atts, {
    vc_efa_chosen:{
      parse:function ( param ) {
        var value = this.content().find('.wpb_vc_param_value[name=' + param.param_name + ']').val();
        return ( value ) ? value.join(',') : '';
      }
    },

    vc_icon: {
      parse:function( param ) {
        var value = this.content().find('.wpb_vc_param_value[name=' + param.param_name + ']').val();
        console.log(value);
        return ( value ) ? value : '';
      }
    },
  });

})( jQuery, window, document );
