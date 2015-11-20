/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('myApp.controllers',[]).controller('SiteController', function($scope){
    $scope.publisher='SitePoint';
    $scope.type="Web Development";
    $scope.name="Scope for SiteController";
});

angular.module('myApp.controllers').controller('BookController' , function($scope){
    $scope.books = ['Jump Start HTML5','Jump Start CSS','Jump Start Responsive Web Design'];
    $scope.name  = "Scope for BookController"; 
    
    $scope.addToWishList = function(book) {
      $scope.wishListCount++;  
    };
    
    $scope.wishListCount = 0;
    
    $scope.$watch('wishListCount', function(newValue, oldValue) {
        console.log('Called '+newValue+' times');
        if (newValue == 2) {
            alert('Que fino');
            //unbindWatcher();
        }
    });
});

angular.module('myApp.controllers').controller('TimeoutController', function($scope, $timeout){
    $scope.scheduleTask = function() {
        $timeout(function(){
            $scope.message = 'Fetched after 3 seconds';
            console.log('message='+ $scope.message);
        },300);
        
        /*setTimeout(function() {
            $scope.$apply(function(){
                $scope.message = 'Fetched after 3 seconds';
                $scope.message = 'Fetched after 3 seconds';
            });
        }, 3000);*/
    };
});
