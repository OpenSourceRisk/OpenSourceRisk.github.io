var ts_addIconTag = function(item) {

	if (item.text.indexOf("fa-") >= 0) {

		item_text = item.text.replace('fa fa-','');
		item_class = item.text;
		return '<i class="' + item_class + '"></i> ' + item_text;
	}
	return item.text;
};

;(function ( $, window, document, undefined ) {
	'use strict';

	$.replaceIconDropdowns = function() {

		$('.icon-select').each( function(){

			if ($(this).attr('id').indexOf("__i__") == -1 && !$(this).hasClass('icon-select-done')) {

				$(this).select2({
					width: 'resolve',
					formatResult: ts_addIconTag,
					formatSelection: ts_addIconTag,
					escapeMarkup: function(m) { return m; }
				});
				$(this).addClass('icon-select-done');
			}
		});
	};

	setTimeout($.replaceIconDropdowns(),2000);
	$( document ).ajaxStop(function() {
		setTimeout($.replaceIconDropdowns(),2000);
	});



  $.fn.efaUplaoder = function() {
    return this.each(function() {

      var el = $(this),
        media_upload = el.find('.efa-add-media'),
        media_remove = el.find('.efa-button-remove'),
        send_val = el.find('input.media-attachment'),
        send_detail = el.find('input.media-details'),
        media_thumbnail,
        frame;

      el.on('click', media_upload, function(e) {

        console.log('clicked');

        e.preventDefault();

        if (typeof wp === 'undefined' || !wp.media || !wp.media.gallery) {
          return;
        }

        if (frame) {
          frame.open();
          return;
        }

        frame = wp.media.frames.customUpload = wp.media({

          title: media_upload.data('frame-title'),

          library: {
            type: media_upload.data('upload-type')
          },

          button: {
            text: media_upload.data('insert-title'),
          }

        });

        frame.on('select', function() {
          var attachment = frame.state().get('selection').first(),
            return_method = media_upload.data('return');

          send_val.val(attachment.attributes[return_method]).trigger('keyup');

          if (send_detail.length) {
            send_detail.val(attachment.attributes.id + ',' + attachment.attributes.width + ',' + attachment.attributes.height);
          }

        });

        frame.open();

      });

      media_remove.click(function(e) {

        e.preventDefault();

        send_val.val('');

        if (media_preview.length) {
          media_preview.html('');
          media_remove.addClass('hidden');
        }

        if (send_detail.length) {
          send_detail.val('');
        }

      });

    });
  };

$(document).on('widget-added', function() {
  $('.efa-uploader').efaUplaoder();
});


})( jQuery, window, document );
