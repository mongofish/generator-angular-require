define(['angular'], function (angular) {
  'use strict';

  angular.module('<%= scriptAppName %>.services', [])
	.service('<%= classedName %>', function <%= classedName %>() {
	// AngularJS will instantiate a singleton by calling "new" on this function
	});
});
