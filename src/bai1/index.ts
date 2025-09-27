function getRectangleInfo(width: number, height: number): { perimeter: number; area: number } {
  const perimeter = 2 * (width + height);
  const area = width * height;
  return { perimeter, area };
}

const result = getRectangleInfo(5, 3);
console.log(`Chu 5vi: ${result.perimeter}, Diện tích: ${result.area}`);