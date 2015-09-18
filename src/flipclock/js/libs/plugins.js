/*jshint smarttabs:true */

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */

(function($) {

	"use strict";

	/**
	 * Capitalize the first letter in a string
	 *
	 * @return string
	 */

	String.prototype.ucfirst = function() {
		return this.substr(0, 1).toUpperCase() + this.substr(1);
	};

	/**
	 * jQuery helper method
	 *
	 * @param  int     An integer used to start the clock (no. seconds)
	 * @param  object  An object of properties to override the default
	 */

	$.fn.FlipClock = function(digit, options) {
		return new FlipClock($(this), digit, options);
	};
	$.fn.FlipClock.setMixup = function(mixup) {
		var fClass = FlipClock.Factory.prototype.classes = {};
        var lClass = FlipClock.List.prototype.classes = {};
        $.each(FlipClock.Factory.prototype.unmixed_classes,
        function(key, value) {
            fClass[key] = mixup(value)
        });
        $.each(FlipClock.List.prototype.unmixed_classes,
        function(key, value) {
            lClass[key] = mixup(value)
        });
	};
	$.fn.FlipClock.setLanguage = function(lang) {
		FlipClock.Lang['_DIY_'] = lang;
	};

	/**
	 * jQuery helper method
	 *
	 * @param  int     An integer used to start the clock (no. seconds)
	 * @param  object  An object of properties to override the default
	 */

	$.fn.flipClock = function(digit, options) {
		return $.fn.FlipClock(digit, options);
	};

}(jQuery));
