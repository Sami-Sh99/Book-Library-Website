function Ctrl($scope) {
    $scope.age = 24;
}
var app= angular.module('MyApp', [])
    .config(['$controllerProvider',
        function ($controllerProvider) {
            $controllerProvider.allowGlobals();
        }
    ]); 