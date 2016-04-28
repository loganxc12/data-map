var app = angular.module('lieNielsenApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('chart', {
                url: '/',
                templateUrl: 'views/chart.html',
                controller: 'mainCtrl'
        })
    
})

