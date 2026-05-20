# Visual Regression Sample Targets

This is a tiny static website meant to be captured by a separate visual regression testing tool.

Open `index.html` directly in a browser, or serve the folder with any static file server.

Available pages:

- `index.html` - route index for the sample pages
- `pages/box-grid.html` - simple centered box with four colored inner boxes
- `pages/dashboard.html` - more complex dashboard with metrics, chart bars, service status, and a table

The pages use plain HTML and CSS only. To create visual changes for regression testing, edit values in `styles.css`, such as colors, spacing, border width, text size, chart heights, table content, or box count.
