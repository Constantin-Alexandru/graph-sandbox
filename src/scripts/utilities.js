function coordsOverlapAnyInArray(point, pointsArray, radius) {
  pointsArray.forEach((_point, index) => {
    const dist = Math.sqrt(
      (point.x - _point.x) * (point.x - _point.x) +
        (point.y - _point.y) * (point.y - _point.y)
    );

    console.log(
      `${index}: ${dist} - (point: ${point.x} - ${point.y} | _point: ${_point.x} - ${_point.y})`
    );
  });

  return pointsArray.reduce(
    (acc, _point) =>
      acc &&
      Math.sqrt(
        (point.x - _point.x) * (point.x - _point.x) +
          (point.y - _point.y) * (point.y - _point.y)
      ) > radius,
    true
  );
}

export { coordsOverlapAnyInArray };
