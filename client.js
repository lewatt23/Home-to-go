// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance,Surface, Location } from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });


  // Render your app content to a new flat surface
  const surface = new Surface(700, 400, Surface.SurfaceShape.Flat);
  surface.setAngle(-0.6, 0);
  r360.renderToSurface(
    r360.createRoot('Hello360', { /* initial props */ }),
    surface
  );

   // Render Panel
   
   const surfacePanel = new Surface(700, 400,Surface.SurfaceShape.Flat);
   surfacePanel.setAngle(0.6, 0);
  r360.renderToSurface(
    r360.createRoot('Panel', { /* initial props */ }),
    surfacePanel
  );
  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = {init};
