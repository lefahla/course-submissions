(function(){
    'use strict' 
        angular.module("LunchCheck",[])
        .controller("LunchCheckController",LunchCheckController);       
        
        
        LunchCheckController.$inject = ['$scope']
        function LunchCheckController($scope){
 
            $scope.lunchList = ""
            $scope.lunchMessage=""; 

            $scope.isEmpty = true;
            
            $scope.checkLuchList = function(){
                var split = $scope.lunchList.split(',')                 
                  
                $scope.isEmpty = $scope.lunchList.includes(", ,") || $scope.lunchList.includes(",,");
            
                if($scope.lunchList === ""){
                    $scope.lunchMessage = "Please enter data first";
                    $scope.isEmpty = true;
                }else if(split.length <= 3){
                    $scope.lunchMessage = "Enjoy";
                }else if(split.length > 3){
                    $scope.lunchMessage = "To Much"; 
                }else{
                    $scope.lunchMessage = "";
                }
            }
        };
    })();
     
