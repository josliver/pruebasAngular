/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('myApp.eventcontrollers', []);
    
    angular.module('myApp.eventcontrollers').controller('MessageController', function($scope, $timeout){
        $scope.messages = [{sender: 'user1', text: 'Message1'}];
        
        var timer;
        var count = 0;
        
        $scope.loadMessages = function() {
            count ++;
            $scope.messages.push({sender: 'user1', text: 'Random MSG '+count});
            timer = $timeout($scope.loadMessages, 2000);
            if (count === 3) {
                $scope.$broadcast('EVENT_NO_DATA', 'Not Connected');
                $timeout.cancel(timer);
            }
        };
        
        timer = $timeout($scope.loadMessages, 2000);
        
        $scope.$on('EVENT_RECEIVED', function(){
            console.log('Received emitted Event');
        });
    });
    
    angular.module('myApp.eventcontrollers').controller('StatsController', function($scope){
        $scope.name = 'World';
        $scope.status = 'Connected';
        $scope.statusColor = 'green';
        $scope.$on('EVENT_NO_DATA', function(event, data){
            console.log('Received Broadcasted Event');
            $scope.status = data;
            $scope.statusColor = 'red';
            $scope.$emit('EVENT_RECEIVED');
        });
    });





