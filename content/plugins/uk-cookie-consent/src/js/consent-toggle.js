document.getElementById( 'termly-display-banner-toggle' ).addEventListener( 'change', toggle_consent_banner );
async function toggle_consent_banner( e ) {

	// Get the value of the checkbox.
	let is_active = e.target.checked;

	// Disable checkboax until we hear back from the server.
	e.target.disabled = true;

	// Send the request to the server.
	const response = await fetch(
		termly_consent_toggle.update_url,
		{
			method: 'POST',
			cache: 'no-cache',
			'headers': {
				'Content-Type': 'application/json',
				'X-WP-Nonce': termly_consent_toggle.nonce,
			},
			body: JSON.stringify(
				{
					'_wpnonce': termly_consent_toggle.nonce,
					'active': is_active,
				}
			)
		}
	).then( response => response.json() )
	.then( response => {

		// Disable checkbox until we hear back from the server.
		e.target.disabled = false;

		// If the request was successful, update the UI.
		if ( response.success ) {

			console.log( document.getElementById( 'termly-consent-toggle-setting-error' ) );

			document.getElementById( 'termly-consent-toggle-setting-error' ).style.display = 'block';

		}

	} );

}
