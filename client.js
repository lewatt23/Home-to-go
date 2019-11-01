// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance,Surface,NativeModules, Location,asset} from 'react-360-web';
import KeyboardModule from 'react-360-keyboard/KeyboardModule';


function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,

    nativeModules: [KeyboardModule.addModule],

    ...options,
  });


  // Render your app content to a new flat surface
  const surface = new Surface(200, 200, Surface.SurfaceShape.Flat);
  surface.setAngle(-0.6, 0);
  r360.renderToSurface(
    r360.createRoot('Home', { /* initial props */ }),
    surface
  );

   // Render Panel
   
   const surfacePanel = new Surface(800, 500,Surface.SurfaceShape.Flat);
   surfacePanel.setAngle(0.6, 0);
  r360.renderToSurface(
    r360.createRoot('Panel', { /* initial props */ }),
    surfacePanel
  );

  const surfaceStreet = new Surface(700, 400,Surface.SurfaceShape.Flat);
  surfaceStreet.setAngle(2, 0);
 r360.renderToSurface(
   r360.createRoot('StreetView', { /* initial props */ }),
   surfaceStreet
 );



  // Load the initial environment
  r360.compositor.setBackground('https://images.unsplash.com/photo-1505252772853-08ed4d526ceb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjk4OTYxfQ');


  KeyboardModule.setInstance(r360);
}

window.React360 = {init};
