# quindar-groundtrack
Updated: Jul 18, 2016 by Ray Lai, Masaki Kakoi

## Summary
Ground track (orbit trajectory) directive can display spacecraft vehicle's actual orbit movement and trajectory.  
The design concept is inspired by GitHub projects angular-d3 or nvd3.

The angular-groundtrack.js is an AngularJS directive that plots world maps, ground stations, 
and satellite trajectories.  The trajectory data is streamed through WebSocket (data streaming technology).
A standalone version is included in the /example subfolder. 

## Features
* Plot a sample orbit trajectory on a world map.
* Stream real-time actual orbit movement and trajectory via WebSocket.
* Integration with NASA's GMAT mission operations planning software (refer to quindar-gmat GitHub project for details).

## Pre-requisites
* You need to install NodeJS on your target host (e.g. laptop, Linux host) first.
Using NodeJS's Node Package Manager, you can install this ground track widget. 

You can refer to the installation instructions under https://nodejs.org/en/download or https://nodejs.org/en/download/package-manager.

* You need "git" binaries installed on your target host. 
  - Git is pre-installed on MacOS.
  - On Linux host, you can install Git by "sudo yum install git" (for CentOS, Redhat, Fedora), or "sudo apt-get install git" (for Ubuntu).

* You need to create a local copy of this project. For example,
```
git clone https://github.com/quindar/quindar-groundtrack.git
``` 

## Dependencies
* AngularJS
* D3 (charts, graphics and maps library)

Once you download the quindar-groundtrack project, you need to run buildme.sh in the example folder to install required module. Refer to the "How to Run the Demo" section for details. 	
	
## How to Run the Demo
* After creating a local copy of this project, run the script "buildme.sh" to install NodeJS dependencies and libraries:

```
./buildme.sh
```

If you use Windows machine, you can run the following commands as an alternative:
```
npm install
```

* Go to the example folder and run server.js to start the HTTP Web server: 
```
cd example
node server.js
```

You can also use:
```
nodemon server.js
```

The utility "nodemon" is similar to "node" (HTTP Web server), and it will automatically reload the Web pages whenever any Web page is updated.

* Open a Web browser with the URL http://localhost:3000. You should see a Web page with a world map. Click "Connect" and "Stream" and you will see the orbit trajectory.

	
## How to Integrate with Quindar 
Quindar is a real-time mission operations application produced by Audacy. You can add this ground track directive to grid-like window in Quindar as per the following steps:
	
* Create a copy of Quindar-angular on your target host 
  - e.g. git clone https://github.com/quindar/quindar-angular.git)
* Create a copy of Quindar-groundtrack on your target host under a separate folder.
* Copy the file angular-groundtrack.js from quindar-groundtrack project to quindar-angular project
  - From quindar-groundtrack project folder "/dist" (https://github.com/quindar/quindar-groundtrack/tree/master/dist) 
  - To the quindar-angular project folder "/app/directives".
* Edit the file angular-groundtrack.js.
  - Change "app/images/world-110m.json" to "../../images/world-110m.json".
* Copy the file factory-groundtrack.js from quindar-groundtrack project to quindar-angular project.
  - From quindar-groundtrack project folder "/example/app/factories" (https://github.com/quindar/quindar-groundtrack/tree/master/example/app/factories)
  - To quindar-angular project folder "/app/factories"
* Edit the quindarWidgetsControllers.js (controller) to add the new widget quindar-groundtrack:
  - Add your widget definition in the $scope.widgetDefinitions:
```
   var widgetDefinitions = [
      {
        name: 'Line Plot',
        directive: 'lineplot',
        style: {
          width: '33%'
        }
      },
      {
        name: 'Ground Track',
        directive: 'groundtrack',
        style: {
          width: '100%'
        }
      }
    ];
```

  - Add your new widget in a page definition (e.g. page 4 with id=3) in the $scope.dashboards array, e.g.
```
$scope.dashboards = [
      {
        id: 0,
        name: 'Basic',
        widgets: [{
          col: 0,
          row: 0,
          sizeY: 3,
          sizeX: 4,
          name: "Page 1 - Line Plot",
          directive: "lineplot"
        }]
      },
      ...
      {
        id: 3,
        name: 'Ground Operations',
        widgets: [{
          col: 0,
          row: 0,
          sizeY: 3,
          sizeX: 4,
          name: "Page 4 - Ground Track",
          directive: "groundtrack"
        }]
      },
      {
        id: 4,
        name: 'Custom',
        widgets: []
      }
    ];
```

This will enable Quindar widget to render groundtrack widget on page 4, by specifying the directive name "groundtrack". 

* Modify quindarWidgetsControllers.js to add 'angular-groundtrack' as a dependency. Here is an example of the changes:
  - var app = angular.module('app')
  - Add angular-groundtrack as a dependency to the angular.module.

* Update the JavaScript and CSS stylesheet in the file index.html
  - Your new AngularJS directive probably requires new JS/CSS files. You may want to review the current index.html
to see if the versions are compatible.
  - quindar-groundtrack requires D3 and angular-d3 third party JS/CSS. They are consolidated and concatenated in the files "groundtrack-thirdparty.js" and "groundtrack-thirdparty.css" for convenience. Refer to https://github.com/quindar/quindar-groundtrack/tree/master/example/dist for details.
  - You can refer to the /example/index.html as an example.
  - e.g. for quindar-groundtrack project, you will need to add the following files:
```
  <script src="dist/angular-groundtrack.js"></script>
  <script src="app/controllers/app-groundtrack.js"></script>
  <script src="app/factories/factory-groundtrack.js"></script>
  <script src="config/clientSettings.js"></script>
```

* You can manually re-test your new quindar-angular mission operations application to verify if the application works as expected.
  - There will be some automated widget test scripts in the quindar-angular project.
  - You can run "nodemon server.js" and open a Web browser with the URL http://localhost:3000 to test the changes.


# Known Constraints
* Quindar-groundtrack has minimum width for massive data contents on the map, and thus it cannot be resized to smaller than 100px on the screen. Otherwise, it will impact user experience. It has a limited auto-resize capability (responsive map) due to the large canvas required to render the world map.  
* Current quindar-groundtrack directive only allows GMAT as the data input source. In other words, it does not require passing other data source as attribute. In future, we can enhance the directive to accept different data sources by passing different data source attribute values (e.g. \<groundtrack data="myDataSource"\>).

