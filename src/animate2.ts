
    /* SLIDE UP */
    export function slideUp (target:HTMLElement, duration=500) {

        target.style.transitionProperty = 'height, margin, padding';
        target.style.transitionDuration = duration + 'ms';
        target.style.boxSizing = 'border-box';
        target.style.height = target.offsetHeight + 'px';
        target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = "0px";
        target.style.paddingTop = "0px";
        target.style.paddingBottom = "0px";
        target.style.marginTop = "0px";
        target.style.marginBottom = "0px";
        window.setTimeout( () => {
              target.style.display = 'none';
              target.style.removeProperty('height');
              target.style.removeProperty('padding-top');
              target.style.removeProperty('padding-bottom');
              target.style.removeProperty('margin-top');
              target.style.removeProperty('margin-bottom');
              target.style.removeProperty('overflow');
              target.style.removeProperty('transition-duration');
              target.style.removeProperty('transition-property');
              //alert("!");
        }, duration);
    }

    /* SLIDE DOWN */
    export function slideDown (target:HTMLElement, duration=500) {

        target.style.transitionProperty = "height, margin, padding";
        target.style.transitionDuration = duration + 'ms';
        target.style.removeProperty('display');
        let display = window.getComputedStyle(target).display;
        if (display === 'none') display = 'block';
        target.style.display = display;
        let height = target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = "0px";
        target.style.paddingTop = "0px";
        target.style.paddingBottom = "0px";
        target.style.marginTop = "0px";
        target.style.marginBottom = "0px";
        target.offsetHeight;
        target.style.boxSizing = 'border-box';
        target.style.height = height + 'px';
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        window.setTimeout( () => {
          target.style.removeProperty('height');
          target.style.removeProperty('overflow');
          target.style.removeProperty('transition-duration');
          target.style.removeProperty('transition-property');
        }, duration);
    }

    /* TOOGLE */
    export function slideToggle (target:HTMLElement, duration = 500) {
        if (window.getComputedStyle(target).display === 'none') {
          return slideDown(target, duration);
        } else {
          return slideUp(target, duration);
        }
    }
