/* minifyOnSave, checkOutputFileAlreadyExists: false, checkAlreadyMinifiedFile: false, filenamePattern: $1.min.$2 */
/*! GDPR-cookie-consent cm-body.js
*	@copyright	(c) 2015-2019 Bjarne Varoystrand - bjarne ○ kokensupport • com
*	@license Apache License 2.0
*	@author: [@zoxxx](https://github.com/zoxxx) & Bjarne Varoystrand (@black_skorpio)
*	@version 1.0
*	@description GDPR cookie consent in Javascript. It effectively prevents setting cookies by third party scripts like ad or analytics snippets until an explicit consent is given.
*	@documentation https://github.com/zoxxx/GDPR-cookie-consent#gdpr-cookie-consent
*	@url https://github.com/zoxxx/GDPR-cookie-consent
**/
(function () {
	if (document.cookie.indexOf('CM_cookieConsent=1') === -1) {
		if (CM_cookieManager.isGdprZone()) {
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
				CM_cookieManager.consent(true);
				cleaningUp();
				/*gdprDoc.body.classList.remove( classBody );
				gdprDoc.body.removeChild( renderOverlay );
				gdprDoc.body.removeChild( cookieAlert );
				gdprDoc.body.removeChild( gdprFooter );*/
			}
			buttonConsent.onclick = function () { iConsent(); }

			var removeAlert = function () {
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
	//if ( CM_cookieManager.consent(true) )
	//if (document.cookie.indexOf('CM_cookieConsent') == 1) {
		//var gdprDoc		= document;
		//var idAlert		= 'gdpr_alert';
		var cookieAlert	= document.getElementById( 'gdpr_alert' );
		if( cookieAlert !=null ) gdprDoc.body.removeChild( cookieAlert );
	}
}) ();
