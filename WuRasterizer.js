// Wu's Line Drawing Algorithm (Anti-aliased)

class WuRasterizer {
  ipart(x) {
    return Math.floor(x);
  }

  round(x) {
    return Math.round(x);
  }

  fpart(x) {
    return x - Math.floor(x);
  }

  rfpart(x) {
    return 1 - this.fpart(x);
  }

  rasterize(p1, p2) {
    let points = [];

    let x0 = p1.x;
    let y0 = p1.y;
    let x1 = p2.x;
    let y1 = p2.y;

    let steep = Math.abs(y1 - y0) > Math.abs(x1 - x0);

    if (steep) {
      [x0, y0] = [y0, x0];
      [x1, y1] = [y1, x1];
    }

    if (x0 > x1) {
      [x0, x1] = [x1, x0];
      [y0, y1] = [y1, y0];
    }

    let dx = x1 - x0;
    let dy = y1 - y0;

    let gradient = dx === 0 ? 1 : dy / dx;

    // First endpoint
    let xend = this.round(x0);
    let yend = y0 + gradient * (xend - x0);
    let xgap = this.rfpart(x0 + 0.5);
    let xpxl1 = xend;
    let ypxl1 = this.ipart(yend);

    if (steep) {
      points.push({
        point: new Point(ypxl1, xpxl1),
        alpha: this.rfpart(yend) * xgap,
      });
      points.push({
        point: new Point(ypxl1 + 1, xpxl1),
        alpha: this.fpart(yend) * xgap,
      });
    } else {
      points.push({
        point: new Point(xpxl1, ypxl1),
        alpha: this.rfpart(yend) * xgap,
      });
      points.push({
        point: new Point(xpxl1, ypxl1 + 1),
        alpha: this.fpart(yend) * xgap,
      });
    }

    let intery = yend + gradient;

    // Second endpoint
    xend = this.round(x1);
    yend = y1 + gradient * (xend - x1);
    xgap = this.fpart(x1 + 0.5);
    let xpxl2 = xend;
    let ypxl2 = this.ipart(yend);

    // Main loop
    for (let x = xpxl1 + 1; x < xpxl2; x++) {
      if (steep) {
        points.push({
          point: new Point(this.ipart(intery), x),
          alpha: this.rfpart(intery),
        });
        points.push({
          point: new Point(this.ipart(intery) + 1, x),
          alpha: this.fpart(intery),
        });
      } else {
        points.push({
          point: new Point(x, this.ipart(intery)),
          alpha: this.rfpart(intery),
        });
        points.push({
          point: new Point(x, this.ipart(intery) + 1),
          alpha: this.fpart(intery),
        });
      }

      intery += gradient;
    }

    if (steep) {
      points.push({
        point: new Point(ypxl2, xpxl2),
        alpha: this.rfpart(yend) * xgap,
      });
      points.push({
        point: new Point(ypxl2 + 1, xpxl2),
        alpha: this.fpart(yend) * xgap,
      });
    } else {
      points.push({
        point: new Point(xpxl2, ypxl2),
        alpha: this.rfpart(yend) * xgap,
      });
      points.push({
        point: new Point(xpxl2, ypxl2 + 1),
        alpha: this.fpart(yend) * xgap,
      });
    }

    return points;
  }
}
