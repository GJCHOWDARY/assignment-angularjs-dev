var app = angular.module('shopayeApp', ['chart.js']);
app.controller("myCtrl", function($scope,$http,$timeout,$interval) {
      $scope.data =[];
      $scope.labels=[];
   $scope.getData = function() {
      $http.get('https://api.coinmarketcap.com/v1/ticker/?limit='+15).then(function(res){
          if(res.data) {
               $scope.carts = res.data;
               console.log(res.data);
               for (var i = 0; i < res.data.length; i++) {
                  $scope.labels[i]=$scope.carts[i].name;
                   $scope.data[i] = $scope.carts[i].price_usd;
                 console.log($scope.data,$scope.labels)
                }
            }
           }, function(){});
   };
   $scope.getData();
   $interval(function() {
     $scope.getData();
}, 10000);
   // $timeout(function () {
   //   }, 100);
});
