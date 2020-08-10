angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','ngCordova','ionic-native-transitions'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicNativeTransitionsProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.track', {
    url: '/track',
    views: {
      'tab-track': {
        templateUrl: 'templates/tab-track.html',
        
      }
    }
  })

  .state('tab.navigate', {
      url: '/navigate',
      views: {
        'tab-navigate': {
          templateUrl: 'templates/tab-navigate.html',
          
        }
      }
    })
    
  .state('tab.settings', {
    url: '/settings',
    views: {
      'tab-settings': {
        templateUrl: 'templates/tab-settings.html',
     
      }
    }
  })
  
  .state('trackSettings', {
    url: '/trackSettings1',
    templateUrl: 'templates/track-settings.html'
  })
  
   .state('navSettings', {
    url: '/navSettings1',
    templateUrl: 'templates/nav-settings.html'
  })
  
   .state('useSettings', {
    url: '/useSettings1',
    templateUrl: 'templates/use-settings.html'
  })
  
   .state('aboutSettings', {
    url: '/aboutSettings1',
    templateUrl: 'templates/about-settings.html'
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/track');
  
  	$ionicNativeTransitionsProvider.setDefaultTransition({
      type: 'fade',
      duration:150,
    });


})
.config(function($ionicConfigProvider) {   // this aligns the text in view-title to center
    $ionicConfigProvider.platform.android.navBar.alignTitle('center');
})

ionic.Platform.ready(function() {
// Change the status bar color using the StatusBar plugin
StatusBar.backgroundColorByHexString("#114B5F");
// ionic.platform.fullScreen();
});
