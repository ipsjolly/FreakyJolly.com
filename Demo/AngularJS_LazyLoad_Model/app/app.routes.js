angular.module('app').config(function ($routeProvider) {
    $routeProvider
     .when('/page1', {
         templateUrl: 'app/components/view/page1View.html',
         title: 'page1', 
         controller: 'page1Controller',
         resolve: {
            LazyLoadCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load('page1Ctrl'); // Resolve promise and load before view 
            }]
         }
        
     })
     .when('/page2', {
         templateUrl: 'app/components/view/page2View.html',
         title: 'page2',
         controller: 'page2Controller',
         resolve: {
            LazyLoadCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load('page2Ctrl'); // Resolve promise and load before view 
            }]
         },
     })
     .when('/page3', {
         templateUrl: 'app/components/view/page3View.html',
         title: 'page3',
         controller: 'page3Controller',
         resolve: {
            LazyLoadCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load('page3Ctrl'); // Resolve promise and load before view 
            }]
         },
     })
    $routeProvider.otherwise('/page1');
});