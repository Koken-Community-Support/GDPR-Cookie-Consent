<?php
/**
 *
 */
class KokenCommunityGDPR extends KokenPlugin {

	function __construct() {
		$this->require_setup = true;
		$this->register_hook('before_closing_head', 'renderFirst');
		$this->register_hook('before_closing_body', 'renderLast');
	}

	function renderFirst() {
		echo '<style id="gdpr_css_var">:root {--gdpr-bkgrd:'. $this->data->gdprBkgrd .';--gdpr-text-clr:'. $this->data->gdprTextClr .';--gdpr-consent-clr:'. $this->data->consentClr .';--gdpr-decline-clr:'. $this->data->declineClr .';}</style>';
		echo '<link id="gdpr_css" rel="stylesheet" type="text/css" href="'. $this->get_path() .'/css/gdpr.min.css" />';
		echo '<script id="gdpr_options">const activeForAll='.$this->data->activateAll.';const ignoredCookie=\''.$this->data->ignoredCookie.'\';</script>';
		echo '<script id="gpdr_head" src="'. $this->get_path() .'/js/cm-head.min.js"></script>';
	}

	function renderLast() {
		echo '<script id="gdpr_options_body">var infoText="'. $this->data->infoText .'";var privacyText="'. $this->data->privacyText .'";var privacyLink="'. $this->data->privacyLink .'";var buttonOk="'. $this->data->buttonConsent .'";var buttonDecline="'. $this->data->buttonDecline .'";</script>';
		echo '<script id="gdpr_foot" src="'. $this->get_path() .'/js/cm-body.min.js"></script>';
	}
}

?>
