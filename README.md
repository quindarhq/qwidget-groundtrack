# quindar-groundtrack
Ground track (orbit trajectory) directive to display spacecraft vehicle's actual orbit movement and trajectory, etc.  Idea inspired by angular-d3 or nvd3.

The aungular-groundtrack.js is a directive file that plot a world map, ground stations, and satellite trajectories.  The trajectory data is streamed through the SocketIO.  
A stand alone version is included in the example subfolder. 

REQUIRED MODULES: Once you download the quindar-groundtrack folder, you need to install a couple of modules, express and socket.io.  Type the following command in the example directory.
1. npm install express
2. npm install socket.io

Then, run server.js to open the local host port: 
	node server.js
	
How to integrate the stand alone version to Quindar as a widget
1. Copy directive, controller, and factory files, e.g. angular-groundtrack.js, app-groundtrack.js, and factory-groundtrack.js, to appropriate subfolders of the Quinder folder.
2. Check the links and files the index.html file of the stand alone version uses.  You need to make sure these links and files are listed in the index.html of the Quindar.  Also check if the files are located in the correct folders.
3. Open the main controller file, e.g. mainController.js, and make the following changes:
	1. Add necessary modules, e.g. 'angular-groundtrack' and 'd3', to the app definition line to inject these modules.
	2. Check the widgetDefinitions to make sure the correct directive name , e.g. 'groundtrack', is listed as the directive of the desirable widget.  You need to add a new widget if necessary.
	3. Also check $scope.dashboard.  Make necessary changes.