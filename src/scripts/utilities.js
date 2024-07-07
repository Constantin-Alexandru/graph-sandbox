function coordsOverlapAnyInArray(point, pointsArray, radius) {
  return pointsArray.reduce(
    (acc, _point) =>
      (acc =
        Math.sqrt(
          (point.x - _point.x) * (point.x - _point.x) +
            (point.y - _point.y) * (point.y - _point.y)
        ) < radius
          ? _point
          : acc),
    null
  );
}

function identicalPoints(point1, point2) {
  console.log(point1, point2, point1.x === point2.x, point1.y === point2.y);
  return point1.x === point2.x && point1.y === point2.y;
}

function lineAlreadyExists(line, lines) {
  return lines.reduce(
    (acc, _line) =>
      (acc =
        identicalPoints(line.point1, _line.point1) &&
        identicalPoints(line.point2, _line.point2)
          ? _line
          : acc),
    null
  );
}

function convertToScale(
  value,
  initialScaleMinimum,
  initialScaleMaximum,
  finalScaleMinimum,
  finalScaleMaximum
) {
  return (
    finalScaleMinimum +
    ((value - initialScaleMinimum) * (finalScaleMaximum - finalScaleMinimum)) /
      (initialScaleMaximum - initialScaleMinimum)
  );
}

function percentageToValue(percentage, minimum, maximum) {
  return minimum + (percentage / 100) * maximum;
}

export {
  coordsOverlapAnyInArray,
  identicalPoints,
  lineAlreadyExists,
  convertToScale,
  percentageToValue,
};
