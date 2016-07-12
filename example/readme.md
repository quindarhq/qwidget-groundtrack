# Qindar Ground Track Directive
Updated: Jul 12, 2016 by Ray Lai

## Overview
Ground track directive allows users to show a world map with sample orbit trajectory.  Satellite spacecraft will move in a pre-defined orbit trajectory published to http://platform.audacy.space:7903 (non-SSL port) or https://platform.audacy.space:7904 (SSL port; will be available soon).  New satellite position telemetry data points will be pushed via WebSocket data streaming.

You can deploy ground track widgets in standalone Web browser as a Web page. Alternatively, you can use Quindar mission operations, which will embed this directive in personalized grid-like windows.

Ground track directive is built using AngularJS. AngularJS directive looks like HTML tag and can render SVG (vector graphics) dynamically.

## How to install
* From GitHub, do a git clone, e.g.
```
git clone https://github.com/audacyDevOps/quindar-groundtrack.git
```

* cd to quindar-groundtrack and run "buildme.sh" if you are using Linux or MacOS.
```
./buildme.sh
```

If you use Windows, you can use "npm install" from a command window instead.
```
npm install
```

## How to run
From terminal or command window, run:
```
nodemon server.js

```
Open a browser with the URL http://localhost:3000, you should see a Web page with a world map.
