export class TweenService {
  setVisible(element: HTMLElement | undefined, visible: boolean) {
    if (element && element.isConnected) {
      element.style.setProperty('visibility', visible ? 'visible' : 'hidden');
    }
  }

  setDisplay(element: HTMLElement | undefined, display: string) {
    if (element && element.isConnected) {
      element.style.setProperty('display', display);
    }
  }

  async fadeOut(element: HTMLElement | undefined, duration = 0.5) {
    if (element && element.isConnected) {
      await this._animateCSS(element, 'fadeOut', duration);
      if (element.isConnected && element.classList.contains('fadeOut')) {
        element.classList.remove('animated', 'fadeOut', '_x_headShake');
        element.style.setProperty('opacity', '0');
      }
    }
  }

  async fadeIn(element: HTMLElement | undefined, duration = 0.5) {
    if (element && element.isConnected) {
      await this._animateCSS(element, 'fadeIn', duration);
      if (element.isConnected && element.classList.contains('fadeIn')) {
        element.classList.remove('animated', 'fadeIn', '_x_headShake');
        element.style.setProperty('opacity', '1');
      }
    }
  }

  isAnimating(element: HTMLElement | undefined, animation: string) {
    if (element && element.isConnected) {
      element.classList.contains(animation);
    }
    return false;
  }

  stopAnimations(element: HTMLElement | undefined) {
    if (element && element.isConnected) {
      element.style.removeProperty('--animate-duration');
      element.classList.remove('animated');
      const classes: string[] = [];
      element.classList.forEach((c) => classes.push(c));
      classes
        .filter((c) => c.startsWith('_x_'))
        .forEach((c) => {
          element.classList.remove(c, c.replace('_x_', ''));
        });
    }
  }

  async wiggle(element: HTMLElement | undefined, duration = 0.5) {
    if (element && element.isConnected) {
      await this._animateCSS(element, 'headShake', duration);
      if (element.isConnected) {
        element.classList.remove('animated', 'headShake', '_x_headShake');
      }
    }
  }

  async animateCSS(
    element: HTMLElement | undefined,
    animation: string,
    duration?: number
  ) {
    if (element && element.isConnected) {
      await this._animateCSS(element, animation, duration);
      if (element.isConnected) {
        element.classList.remove('animated', animation, '_x_' + animation);
      }
    }
  }

  private _animateCSS(element: HTMLElement, animation: string, duration = 0.5) {
    return new Promise((resolve) => {
      const animationName = `${animation}`;

      element.classList.add('animated', animationName, '_x_' + animationName);
      if (duration) {
        element.style.setProperty('--animate-duration', String(duration) + 's');
      }

      function handleAnimationEnd(event: any) {
        event.stopPropagation();
        if (element.isConnected && duration) {
          element.style.removeProperty('--animate-duration');
        }
        resolve('Animation ended');
      }

      element.addEventListener('animationend', handleAnimationEnd, {
        once: true,
      });
    });
  }
}
