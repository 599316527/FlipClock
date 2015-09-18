
# MODIFICATIONS

* use `setMixup` to inject our class-mixing function into FlipClock
*
    ```js
    $['fn']['FlipClock']['setMixup'](ad.base.mixup);
    ```

* use `setLanguage` to configure your own text

    ```js
    $['fn']['FlipClock']['setLanguage']({
        'years'   : 'Jahre',
        'months'  : 'Monate',
        'days'    : 'Tage',
        'hours'   : 'Stunden',
        'minutes' : 'Minuten',
        'seconds' : 'Sekunden'
    });
    ```

# Original Readme

## FlipClock.js

### Installation

FlipClock.js can be installed in the following ways:

#### Bower

	bower install FlipClock

#### Node (NPM)

	npm install flipclock

#### Download .zip

[Download .ZIP](https://github.com/objectivehtml/FlipClock/releases)

---

### Demo & Documentation

Website and documentation at http://flipclockjs.com/

---

### License

Copyright (c) 2013 Objective HTML, LCC shared under MIT LICENSE
