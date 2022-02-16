

class VRButton {

	static createButton( renderer, options ) {

		if ( options ) {

			console.error( 'THREE.VRButton: The "options" parameter has been removed. Please set the reference space type via renderer.xr.setReferenceSpaceType() instead.' );

		}

		const button = document.createElement( 'button' );
		
		button.id = 'VRButton';
		
		button.name = 'VRButton';
		
		button.type = 'button';

		function showEnterVR( /*device*/ ) {

			let currentSession = null;

			async function onSessionStarted( session ) {
				
				if( window.ENGINE ){
					
					ENGINE.onBeforeEnterVR();
					
				}				

				session.addEventListener( 'end', onSessionEnded );

				await renderer.xr.setSession( session );
				//button.textContent = 'EXIT VR';
				button.className = 'active';
				
				button.onmouseover = function(){ kTT(event,'EXIT VR'); };

				currentSession = session;
				
				if( window.ENGINE ){
					
					ENGINE.enterVR();
					
				}

			}

			function onSessionEnded( /*event*/ ) {

				currentSession.removeEventListener( 'end', onSessionEnded );

				//button.textContent = 'ENTER VR';
				button.className = '';
				
				button.onmouseover = function(){ kTT(event,'ENTER VR [beta]'); };

				currentSession = null;
				
				if( window.ENGINE ){
					
					ENGINE.exitVR();
					
				}				

			}

			//
			
			button.onmouseover = function(){ kTT(event,'ENTER VR [beta]'); };			
			button.onmouseout = function(){ unkTT(); };

			button.style.display = 'inline-block';

			//button.style.cursor = 'pointer';
			//button.style.left = 'calc(50% - 50px)';
			//button.style.width = '100px';
			//button.textContent = 'ENTER VR';

			button.onclick = function () {

				if ( currentSession === null ) {

					// WebXR's requestReferenceSpace only works if the corresponding feature
					// was requested at session creation time. For simplicity, just ask for
					// the interesting ones as optional features, but be aware that the
					// requestReferenceSpace call will fail if it turns out to be unavailable.
					// ('local' is always available for immersive sessions and doesn't need to
					// be requested separately.)

					const sessionInit = { optionalFeatures: [ 'local-floor', 'bounded-floor', 'hand-tracking' ] };
					navigator.xr.requestSession( 'immersive-vr', sessionInit ).then( onSessionStarted );

				} else {

					currentSession.end();

				}

			};

		}

		function disableButton() {

			button.style.display = 'none';

			//button.style.cursor = 'auto';
			//button.style.left = 'calc(50% - 75px)';
			//button.style.width = '150px';

			button.onmouseenter = null;
			button.onmouseleave = null;

			button.onclick = null;

		}

		function showWebXRNotFound() {

			disableButton();

			//button.textContent = 'VR NOT SUPPORTED';

		}

		function stylizeElement( element ) {



		}

		if ( 'xr' in navigator ) {

			//button.id = 'VRButton';
			button.style.display = 'none';
			//log('b');

			//stylizeElement( button );

			navigator.xr.isSessionSupported( 'immersive-vr' ).then( function ( supported ) {

				supported ? showEnterVR() : showWebXRNotFound();

			} );

			return button;

		} else {

			
			const message = document.createElement( 'a' );
			
			message.style.display = 'none';

			/*
			if ( window.isSecureContext === false ) {

				message.href = document.location.href.replace( /^http:/, 'https:' );
				message.innerHTML = 'WEBXR NEEDS HTTPS'; // TODO Improve message

			} else {

				message.href = 'https://immersiveweb.dev/';
				message.innerHTML = 'WEBXR NOT AVAILABLE';

			}

			message.style.left = 'calc(50% - 90px)';
			message.style.width = '180px';
			message.style.textDecoration = 'none';

			stylizeElement( message );
			*/

			return message;
			

		}

	}

}

export { VRButton };