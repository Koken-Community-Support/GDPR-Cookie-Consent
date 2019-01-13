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
		echo '<style class="grpdScript" id="gdpr_css_var">:root {--gdrp-backdrop:'. $this->data->gdprBackdrop .';--gdpr-header-clr:'. $this->data->headLineClr .';--gdpr-ok-topclr:'. $this->data->consentTopClr .';--gdpr-ok-endclr:'. $this->data->consentEndClr .';--gdpr-ok-brdclr:'. $this->data->consentBrdClr .';--gdpr-bkgrd:'. $this->data->gdprBkgrd .';--gdpr-text-clr:'. $this->data->gdprTextClr .';--gdpr-consent-clr:'. $this->data->consentClr .';--gdpr-decline-clr:'. $this->data->declineClr .';}</style>';
		echo '<link class="grpdScript" id="gdpr_css" rel="stylesheet" type="text/css" href="'. $this->get_path() .'/css/gdpr.min.css" />';
		echo '<script class="grpdScript" id="gdpr_options">const activeForAll='.$this->data->activateAll.';const ignoredCookie=\''.$this->data->ignoredCookie.'\';</script>';
		echo '<script class="grpdScript" id="gpdr_head" src="'. $this->get_path() .'/js/cm-head.min.js"></script>';
	}

	function renderLast() {
		$this->site_data->title = Koken::out('site.title');
			echo <<<HTML
<div id="gdpr_alert">
	<img class="ue-image" src="{$this->get_path()}/eu-flag.svg" />
	<h1>{$this->data->headLine} {$this->site_data->title}</h1>
	<p>{$this->data->infoTextOne}<br />{$this->data->infoTextTwo}<br />{$this->data->infoTextThree} <a href="{$this->data->privacyLink}" title="{$this->data->privacyText}">{$this->data->privacyText}</a>.</p>
	<div class="gdpr-buttons">
		<button id="consent" class="button gdpr" title="{$this->data->buttonConsent}">{$this->data->buttonConsent}</button>
		<button id="decline" class="button gdpr" title="{$this->data->buttonDecline}">{$this->data->buttonDecline}</button>
	</div>
	<div class="copy" title="GDPR Cookie Consent for Koken by Koken Community Support"><a id="kcs" onclick="return !window.open(this.href);" href="https://kokensupport.com" target="_blank"><img class="gdpr-image" src="{$this->get_path()}/eu-flag.svg" />GDPR Cookie Consent for Koken</a></div>
</div>
<script class="grpdScript" id="gdpr_foot" src="{$this->get_path()}/js/gdpr-consent.min.js"></script>
HTML;
	}
}

?>
