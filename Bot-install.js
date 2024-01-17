// ==UserScript==
// @name         SimpleMMO stepper
// @namespace    https://web.simple-mmo.com/
// @version      1.3
// @description  script that automatically clicking step button on SimpleMMO
// @author       marshallovski (Updated by TMGBoy)
// @match        https://web.simple-mmo.com/travel*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=simple-mmo.com
// @grant        none
// @license MIT
// ==/UserScript==

document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    const allButtons = document.querySelectorAll('button');

    allButtons.forEach(btn => {
        if (btn.id.includes('step_btn')) {
            console.log('found step btn');

            setInterval(() => {
                btn.click();
            }, randomTime());
        }
    });

    function randomTime() {
        let min = 2000;
        if (Math.random() > 0.95) min = 25000;
        return Math.round(Math.random() * (8000)) + min;
    }
});
