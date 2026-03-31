/* 
 * Extension scripts
 */

jQuery(document).ready(function($) {
	
	var ts_rads_remover = function() {
		var el = $( '#redux-header' ).find('.rAds'); 
		el.remove();
	}
	
	setTimeout(ts_rads_remover, 500);
	setTimeout(ts_rads_remover, 700);
	
	var $ts_refresh_it = 0;
	var $ts_import_completed = false;
	var $ts_import_error = false;
	var $ts_stop_refreshing = false;
	
	var ts_import_log = function(msg) {
		$('#import-sample-data-log').append(msg);
		$('#import-sample-data-log').animate({"scrollTop": $('#import-sample-data-log')[0].scrollHeight}, "fast");
	}
	
	/**
	 * Refresh import log
	 */
	var ts_refresh_import_log = function() {
		
		$ts_refresh_it++;
		
		if ($ts_stop_refreshing) {
			return;
		}
		
		//finish refreshing log window after 600 seconds
		if ($ts_refresh_it > 600) {
			ts_import_log('Import doesn\'t respond.');
			return;
		}
		
		$.ajax({
			url: ajaxurl,
			data: {
				action : 'refresh_import_log'
			},
			success:function(data) {
				
				if (data.search("ERROR") != -1) {
					$ts_import_error = true;
				}
				
				$('#import-sample-data-log').html(data);
				$('#import-sample-data-log').animate({"scrollTop": $('#import-sample-data-log')[0].scrollHeight}, "fast");
				
				if ($ts_import_error) {
					$ts_stop_refreshing = true;
					ts_import_log('Import error!');
					return;
				}
				
				if ($ts_import_completed) {
					$ts_stop_refreshing = true;
					ts_import_log('Import successful!');
					return;
				}
			},
			error: function(errorThrown) {
				console.log(errorThrown);
			}
		}).done( function() { 
			
			setTimeout(ts_refresh_import_log, 1000) 
		} );
	}
	
	//Import sample data
	$('#import-sample-data').click( function() {
		if (confirm($(this).data('confirm'))) {
			
			$('#import-sample-data-log').slideDown();
			
			$.ajax({
				url: ajaxurl,
				data: {
					action : 'import_sample_data'
				},
				success:function(data) {
					//nothing to do
				},
				error: function(errorThrown) {
					console.log(errorThrown);
				}
			}).done(function() { $ts_import_completed = true });
			
			setTimeout(ts_refresh_import_log, 1000);
		}
	});
	
	$('#reset-importer-status').click( function() {
		if (confirm($(this).data('confirm'))) {
			$this = $(this);
			
			$.ajax({
				url: ajaxurl,
				data: {
					action : 'reset_importer_status'
				},
				success:function(data) {
					$this.html($this.data('done'));
					setTimeout(function() { $this.remove() },1000);	
				},
				error: function(errorThrown) {
					console.log(errorThrown);
				}
			});
		}
	});
	
	//Open popup window with icons dropdown, used in Appearance>Menus
	$("#update-nav-menu").on("click", ".edit-menu-button-icon", function(event) {
		$nav_item_id = $(this).attr('data-id');
		tb_show("Insert Icon", theme_url + "/extensions/insert-icon.php?width=630&nav_item_id=" + $nav_item_id);
	});
	
	//Clear icon for menu item, used in Appearance>Menus
	$("#update-nav-menu").on("click", ".edit-menu-remove-icon", function(event) {
		$nav_item_id = $(this).attr('data-id');
		jQuery('#edit-menu-item-icon_' + $nav_item_id).val('');
		jQuery('#edit-menu-preview-icon-' + $nav_item_id).html('');
	});
});

//var ts_formatIconDropdownShortcode = function(item) {
//						
//	if (item.text.indexOf("icon-") >= 0) {
//
//		item_text = item.text.replace('icon-','');
//		item_class = item.text.replace('icon-','icon icon-');
//		return '<i class="' + item_class + '"></i> ' + item_text;
//	}
//	return item.text;
//}
