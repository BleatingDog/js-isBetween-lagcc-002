'use strict';

let isBetween = function(num, min, max){
    if (typeof num !== 'number' || typeof min !== 'number' || typeof max !== 'number') {
        throw new Error('All arguments must be numbers');
    }
    if (num >= min && num <= max) {
        return true;
    }
    return false;
};