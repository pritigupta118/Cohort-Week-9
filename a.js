"use strict";
const isLegal = (age) => {
    if (age > 18)
        return true;
    return false;
};
console.log(isLegal(11));
