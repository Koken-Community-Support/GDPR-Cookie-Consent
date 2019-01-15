/* minifyOnSave, checkOutputFileAlreadyExists: false, checkAlreadyMinifiedFile: false, filenamePattern: $1.min.$2 */
/*! GDPR cookie consent gdpr-consent.js
*	@copyright	(c) 2015-2019 Bjarne Varoystrand - bjarne ○ kokensupport • com
*	@license MIT
*	@author: Bjarne Varoystrand (@black_skorpio)
*	@version 1.0
*	@description GDPR cookie consent for Koken in Javascript effectively prevents setting cookies by third party scripts like ad or analytics snippets until an explicit consent is given.
*	@url https://kokensupport.com
**/
(function () {
	if (document.cookie.indexOf(gdprCookieName+'=1') === -1) {
		var gdprManager		= Koken_cookieManager;
		var gdprStorage		= sessionStorage;
		var gdprSessionKey	= 'gdprDecline';
		var gdprSessionValue = location.hostname;
		if ( gdprManager.isGdprZone() && ( gdprStorage.getItem( gdprSessionKey ) !== gdprSessionValue ) ) {
			var gdprDoc		= document;
			var classBody	= 'gdpr-consent';
			var idOverlay	= 'gdpr_backdrop';
			var idAlert		= 'gdpr_alert';
			var idYes		= 'consent';
			var idNope		= 'decline';
			var idFooter	= 'gdpr_foot';

			document.body.classList.add( classBody );
			var renderOverlay = document.createElement('div');
			renderOverlay.setAttribute('id', idOverlay);
			document.body.prepend( renderOverlay );

			var cookieAlert		= gdprDoc.getElementById( idAlert );
			var buttonConsent	= gdprDoc.getElementById( idYes );
			var buttonClose		= gdprDoc.getElementById( idNope );
			var gdprFooter		= gdprDoc.getElementById( idFooter );

			var cleaningUp = function() {
				gdprDoc.body.classList.remove( classBody );
				if( renderOverlay !=null ) gdprDoc.body.removeChild( renderOverlay );
				if( cookieAlert !=null ) gdprDoc.body.removeChild( cookieAlert );
				if( gdprFooter !=null ) gdprDoc.body.removeChild( gdprFooter );
			}

			var iConsent = function () {
				gdprManager.consent(true);
				cleaningUp();
				/*gdprDoc.body.classList.remove( classBody );
				gdprDoc.body.removeChild( renderOverlay );
				gdprDoc.body.removeChild( cookieAlert );
				gdprDoc.body.removeChild( gdprFooter );*/
			}
			buttonConsent.onclick = function () { iConsent(); }

			var removeAlert = function () {
				gdprStorage.setItem( gdprSessionKey, gdprSessionValue );
				cleaningUp();
				/*gdprDoc.body.classList.remove( classBody );
				gdprDoc.body.removeChild( renderOverlay );
				gdprDoc.body.removeChild( cookieAlert );
				gdprDoc.body.removeChild( gdprFooter );*/
			}
			renderOverlay.onclick = function () { removeAlert(); }
			buttonClose.onclick = function () { removeAlert(); }
		}
	} else {
		/* NOTE If the cookie is set, we can safely remove all traces of the plugin */
		var AlertDoc	= document;
		var AlertHeader	= AlertDoc.getElementsByClassName( 'gdprScript' );
		var AlertWrap	= AlertDoc.getElementById( 'gdpr_alert' );
		if( AlertWrap !=null ) AlertDoc.body.removeChild( AlertWrap );
		// NOTE https://stackoverflow.com/a/10842519/6820262
		while( AlertHeader[0] ) {
			AlertHeader[0].parentNode.removeChild( AlertHeader[0] );
		}​
	}
}) ();
