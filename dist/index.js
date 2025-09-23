"use strict";

function getRectangleInfo(width, height) {
    const perimeter = 2 * (width + height);
    const area = width * height;
    return { perimeter, area };
}
const result = getRectangleInfo(5, 3);
console.log(`Chu vi: ${result.perimeter}, Diện tích: ${result.area}`);