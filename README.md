# POOF!
Cross-browser compatible (including legacy browsers) solution for displaying a 'poof' animation on each click or tap (similar to removing icons from a Mac OS X dock). Taken from a project for which I needed to develop this.   
Animation is sprite based.   
Uses [Modernizr](https://github.com/Modernizr/Modernizr) to test whether the browser supports css animations or not. Depending on that, used animation is either css or javascript-based. Also uses Compass/SCSS to dynamically determine element dimensions and set up keyframe animation.     

Feedback, bugs, questions? [E-mail](mailto:vanja@gavric.org) me, I'll respond quickly!

## Demo
- Demo can be found on [link](http://vanja.gavric.org/various/poof/).

## Possible future improvement
- modify into a plugin so that this can be used to generally animate using sprites, given the parameters (sprite image, element name, frame count, custom callback function,...)
- not rely on Modernizr (implement only test for css animations resulting in overall smaller footprint)