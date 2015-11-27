/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';


angular.module('myApp', ['myApp.controllers','myApp.eventcontrollers', 'ngRoute']);

angular.module('myApp').config(function($routeProvider){
    $routeProvider.when('/view1', { controller: 'Controller1', templateUrl: 'partials/view1.html'})
                  .when('/view2/:firstname/:lastname', { controller: 'Controller2', 
                                                         templateUrl: 'partials/view2-frg.html', 
                                                         resolve: { names: function() {
                                                                 return ['Misko', 'Vojta', 'Brad'];
                                                         }}
                                                        })
                  .otherwise({redirectTo: '/view1'});
    //$locationProvider.html5Mode(true); //activate HTML5 Mode
});


angular.module('myApp').run(function($rootScope){
   $rootScope.title = 'Famous Books';
   $rootScope.name = "Root Scope";
});