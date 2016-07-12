# quindar-groundtrack
Updated: Jul 12, 2016 by Masaki Kakoi

## Summary
Ground track (orbit trajectory) directive to display spacecraft vehicle's actual orbit movement and trajectory, etc.  Idea inspired by angular-d3 or nvd3.

The aungular-groundtrack.js is an AngularJS directive that plots a world map, ground stations, and satellite trajectories.  The trajectory data is streamed through WebSocket (data streaming technology).
A standalone version is included in the /example subfolder. 

## Dependencies
* AngularJS
* D3 (graphics library)

Once you download the quindar-groundtrack folder, you need to run buildme.sh in the example folder to install required modules. 	
	
## How to Run the Demo
Go to the example folder and run server.js to open the local host port: 
```
node server.js
```

You can also use:
```
nodemon server.js
```

Open a Web browser with the URL http://localhost:3000. You should see a Web page with a world map. Click "Connect" and "Stream" and you will see the orbit trajectory.

	
## How to Integrate with Quindar 
Quindar is a real-time mission operations application produced by Audacy. You can add this ground track directive to grid-like window in Quindar as per the following steps:
	
1. Copy angular-groundtrack.js and factory-groundtrack.js to appropriate subfolders of the Quinder folder. 
1. Check the links and files the index.html file of the stand alone version uses.  You need to make sure these links and files are listed in the index.html of the Quindar.  Also check if the files are located in the correct folders. 
1. Open the main controller file, e.g. indexController.js, and make the following changes: 
  - Add necessary modules, e.g. 'angular-groundtrack' and 'd3', to the app definition line to inject these modules. 
  - Check the widgetDefinitions to make sure the correct directive name , e.g. 'groundtrack', is listed as the directive of the desirable widget.  You need to add a new widget if necessary.
  - Also check $scope.dashboard.  Make necessary changes.
