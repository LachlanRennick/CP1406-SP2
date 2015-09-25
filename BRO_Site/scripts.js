// JavaScript Document
$(function() {
	"use strict";
	var images = $('#sectionTop img');
	images.css('opacity', 0.75);
    /*images.on('mouseenter', fadeIn);
    images.on('mouseout', fadeOut);*/
    images.css('top', 50);
    images.animate({top: 0}, 1200);
});