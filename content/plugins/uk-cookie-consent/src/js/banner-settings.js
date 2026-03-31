//
// Handle click of the copy button.
//
document.getElementById( 'termly-copy-preference-center-snippet' ).addEventListener( 'click', copy );
function copy() {

	let consent_banner = '<a href="#" onclick="window.displayPreferenceModal();return false;" id="termly-consent-preferences">Consent Preferences</a>';

	if ( navigator.clipboard === undefined ) {

		// Insecure site.
		alert( termly_banner_settings.copy_failure );

	} else {

		window.navigator.clipboard.writeText( consent_banner ).then(
			function() {
				alert( termly_banner_settings.copy_success );
			}, function() {
				alert( termly_banner_settings.copy_failure );
			}
		);

	}

}

document.getElementById( 'termly-auto-block-input' ).addEventListener( 'change', toggleCustomBlockingMapSetting );
function toggleCustomBlockingMapSetting( e ) {

	let auto_block                = document.getElementById( 'termly-auto-block' );
	let custom_blocking_map       = document.getElementById( 'termly-custom-blocking-map' );
	let custom_blocking_map_input = document.getElementById( 'termly-custom-blocking-map-input' );

	if ( e.target.checked ) {

		auto_block.className = 'active';
		custom_blocking_map.className = 'active';

	} else {

		custom_blocking_map_input.checked = false;

		auto_block.className = '';
		custom_blocking_map.className = '';

	}

}

document.getElementById( 'termly-custom-blocking-map-input' ).addEventListener( 'change', toggleCustomBlockingFields );
function toggleCustomBlockingFields( e ) {

	let custom_blocking_map_fields = document.getElementById( 'termly-custom-blocking-map-fields' );

	if ( e.target.checked ) {

		custom_blocking_map_fields.className = 'active';

	} else {

		custom_blocking_map_fields.className = '';

	}

}
