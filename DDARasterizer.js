// DDA Line Drawing Algorithm Implementation

class DDARasterizer {
  rasterize(p1, p2) {
    let points = [];

    let x1 = p1.x;
    let y1 = p1.y;
    let x2 = p2.x;
    let y2 = p2.y;

    let dx = x2 - x1;
    let dy = y2 - y1;

    let steps = Math.max(Math.abs(dx), Math.abs(dy));

    let xIncrement = dx / steps;
    let yIncrement = dy / steps;

    let x = x1;
    let y = y1;

    for (let i = 0; i <= steps; i++) {
      points.push(new Point(Math.round(x), Math.round(y)));
      x += xIncrement;
      y += yIncrement;
    }

    return points;
  }
}
