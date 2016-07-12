var app = angular.module('app', ['angular-groundtrack']);

app.controller('groundtrackCtr',['$scope','d3',function($scope,d3){
 
  $scope.gsData = [[-122.4194,37.7749],[-3.7038,40.4168],[103.8198,1.3521]];	

/*   $scope.goHome = function() {
	          $scope.zoom.translate([0,0])
	              .scale(1)
	          g.transition()
	           .attr("transform","translate(0,0)");
  };  */
  
}

]);