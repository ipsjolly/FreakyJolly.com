angular.module('app').config([ "$ocLazyLoadProvider", function($ocLazyLoadProvider) {
		$ocLazyLoadProvider.config({
		    'debug': true, // For debugging 'true/false'
		    'events': true, // For Event 'true/false'
		    'modules': [{ // Set modules initially
		        name : 'page1Ctrl', // State1 module
		        files: ['app/components/controller/page1Controller.js']
		    },{
		        name : 'page2Ctrl', // State2 module
		        files: ['app/components/controller/page2Controller.js']
		    },{
		        name : 'page3Ctrl', // State2 module
		        files: ['app/components/controller/page3Controller.js']
		    }]
		});
   }]);