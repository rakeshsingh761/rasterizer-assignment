# Assignment I

The instruction for the assignment is present in the `java` and `js` branch.
Please switch to the respective branches using the switch command,

- For Java run, `git switch java`
- For JavaScript run, `git switch js`

# Marking scheme

<<<<<<< HEAD
| Stage | Points |
|-----------------------------|--------|
| Code does not compile | 0 |
| Browser Console error | 0 |
| Code works for one quadrant | 2.5 |
| Code works for all quadrant | 5 |

# Issues

# For any problems with the provided code, please open a new issue.

```
rasterize-js/
├── index.html
├── LineRasterizerTest.js
└── BresenhamRasterizer.js
```

## Running the Test

1. Place all three files in the same directory
2. Open `index.html` in your web browser (double-click or right-click →
   Open With)
3. The visualization will appear automatically

## Using the Framework

When you open the page, you'll see:

- A 50×50 grid where each cell represents a pixel
- A thin **red line** showing the ideal continuous line between two
  endpoints
- **Blue filled cells** showing your rasterization algorithm's output
- Two **red circle endpoints** that you can click and drag to test
  different line orientations

## Implementing Your Algorithm

1. Create a new JavaScript file for your rasterizer (e.g., `BresenhamRasterizer.js`):

```javascript
class MyRasterizer {
  rasterize(p1, p2) {
    // Your algorithm here
    // p1 and p2 are Point objects with .x and .y properties
    // Return an array of Point objects
    const pixels = [];

    // Your implementation...

    return pixels;
  }
}
```

2. Add your file to `index.html` (before `LineRasterizerTest.js`):

```html
<script src="BresenhamRasterizer.js"></script>
<!-- Add this line -->
<script src="LineRasterizerTest.js"></script>
```

3. Edit `LineRasterizerTest.js` to use your implementation:

```javascript
// In the setup() function, change:
rasterizer = new BresenhamRasterizer();
```

4. Refresh your browser to see your results

## Tips

- The `Point` class is defined in `BresenhamRasterizer.js` and has `.x`
  and `.y` properties
- Grid coordinates range from 0 to 49 for both x and y
- Each Point you return will be rendered as a filled cell in the grid
- Use your browser's developer console (F12) to debug with
  `console.log()`
- Drag the endpoints to test your algorithm with different slopes and
  orientations
- The red reference line shows what the "ideal" continuous line looks
  like

## Testing Different Algorithms

Implement the following files:

- `BresenhamRasterizer.js`
- `DDARasterizer.js`
- `WuRasterizer.js`
- `MidpointCircleRasterizer.js`

and switch between them by changing which one is instantiated in
`setup()` function of `LineRasterizerTest.js`. For midpoint, the points
`p1` and `p2` is the diameter of the circle.

## Debugging

If you encounter errors:

- Press F12 to open browser developer tools and check the Console tab
- Make sure all three files are in the same directory
- Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R) after making changes
  > > > > > > > js
