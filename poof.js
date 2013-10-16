/*!
 * Poof! js
 * Version 1.0
 * https://github.com/iamvanja/poof
 *
 * Copyright (c) 2013 Vanja Gavric (vanja.gavric.org)
 * Dual licensed under the MIT and GPL licenses.
*/

;(function(){
    'use strict';
    var animatePoof = function(e) {
        var isCssAnimCapable = Modernizr.cssanimations,
            frameSize = 48,
            _getPosition = function(axis){
                return parseInt(
                    e['page'+axis] ||
                    e.originalEvent.touches[0]['page'+axis], 10
                ) - (frameSize/2);
            },
            $poof = $('<div/>', {
                'class' : 'poof',
                'style' : 'left:'+ _getPosition('X') +'px; top:'+ _getPosition('Y') +'px'
            }),
            _cssAnimatePoof = function(){
                var animEndEventNames = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oAnimationEnd animationend';

                $poof
                    .one(animEndEventNames, _animationFinished)
                    .addClass('animated');
            },
            _jsAnimatePoof = function() {
                var bgPosX = 0,
                    frame = 0,
                    frames = 6,
                    frameDuration = 80,
                    animateEachFrame = function() {
                        if (frame < frames){
                            $poof.css({
                                backgroundPosition: '0 '+ bgPosX +'px'
                            });
                            bgPosX = bgPosX - frameSize;
                            frame++;
                            setTimeout(animateEachFrame, frameDuration);
                        }
                    };

                animateEachFrame();
                setTimeout(_animationFinished, frames * frameDuration);
            },
            _animationFinished = function(){
                $poof.remove();
                // alert('done');
            };

        $('body').append($poof);
        return (isCssAnimCapable) ? _cssAnimatePoof() : _jsAnimatePoof();
    };

    $(document).on('click touchstart', function(e){
        animatePoof(e);
    });
})();