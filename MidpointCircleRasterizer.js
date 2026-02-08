// Midpoint Circle Drawing Algorithm Implementation

class MidpointCircleRasterizer {
  rasterize(center, edgePoint) {
    let points = [];

    let xc = center.x;
    let yc = center.y;

    // Radius calculated from distance between center and edge point
    let dx = edgePoint.x - xc;
    let dy = edgePoint.y - yc;
    let r = Math.round(Math.sqrt(dx * dx + dy * dy));

    let x = 0;
    let y = r;

    let p = 1 - r;

    while (x <= y) {
      // 8-way symmetry
      points.push(new Point(xc + x, yc + y));
      points.push(new Point(xc - x, yc + y));
      points.push(new Point(xc + x, yc - y));
      points.push(new Point(xc - x, yc - y));

      points.push(new Point(xc + y, yc + x));
      points.push(new Point(xc - y, yc + x));
      points.push(new Point(xc + y, yc - x));
      points.push(new Point(xc - y, yc - x));

      x++;

      if (p < 0) {
        p += 2 * x + 1;
      } else {
        y--;
        p += 2 * (x - y) + 1;
      }
    }

    return points;
  }
}
