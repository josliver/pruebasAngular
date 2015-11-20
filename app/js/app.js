/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';


angular.module('myApp', ['myApp.controllers','myApp.eventcontrollers']);

angular.module('myApp').run(function($rootScope){
   $rootScope.title = 'Famous Books';
   $rootScope.name = "Root Scope";
});