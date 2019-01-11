/* minifyOnSave, checkOutputFileAlreadyExists: false, checkAlreadyMinifiedFile: false, filenamePattern: $1.min.$2 */
/*! GDPR-cookie-consent cm-body.js
*	@copyright	(c) 2018 [@zoxxx](https://github.com/zoxxx)
*	@license Apache License 2.0
*	@author: [@zoxxx](https://github.com/zoxxx)
*	@version 1.0
*	@description GDPR cookie consent in Javascript. It effectively prevents setting cookies by third party scripts like ad or analytics snippets until an explicit consent is given.
*	@documentation https://github.com/zoxxx/GDPR-cookie-consent#gdpr-cookie-consent
*	@url https://github.com/zoxxx/GDPR-cookie-consent
**/
(function () {
	if (document.cookie.indexOf('CM_cookieConsent=1') === -1) {
		if (CM_cookieManager.isGdprZone()) {
			var cookieAlert = document.createElement('div');
			cookieAlert.setAttribute('id', 'gdpr_alert');
			var text = document.createTextNode( infoText+' ' );
			cookieAlert.appendChild( text );
			var link = document.createElement('a');
			link.setAttribute('href', privacyLink);
			link.setAttribute('title', privacyText );
			link.appendChild(document.createTextNode( privacyText ));
			cookieAlert.appendChild(link);

			var btnWrapper = document.createElement('div');
			btnWrapper.setAttribute('class', 'gdpr-buttons');

			var buttonConsent = document.createElement('div');
			buttonConsent.setAttribute('id', 'consent');
			buttonConsent.setAttribute('class', 'button gdpr');
			buttonConsent.appendChild(document.createTextNode( buttonOk ));
			var iConsent = function () {
				CM_cookieManager.consent(true);
				document.body.removeChild(cookieAlert);
				document.getElementById("gdpr_options_body").remove();
			}
			buttonConsent.onclick = function () { iConsent(); }
			btnWrapper.appendChild(buttonConsent);

			var buttonClose = document.createElement('div');
			buttonClose.setAttribute('id', 'decline');
			buttonClose.setAttribute('class', 'button gdpr');
			buttonClose.appendChild(document.createTextNode( buttonDecline ));
			var removeAlert = function () {
				document.body.removeChild(cookieAlert);
			}
			buttonClose.onclick = function () { removeAlert(); }
			btnWrapper.appendChild(buttonClose);

			cookieAlert.appendChild(btnWrapper);
			document.body.appendChild(cookieAlert);
		}
	}
}) ();
