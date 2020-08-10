angular.module('starter.controllers', [])


//Swipe controller
.controller('swipeCtrl', function ($scope, $ionicTabsDelegate) {

    $scope.goForward = function () {
        var selected = $ionicTabsDelegate.selectedIndex();
        if (selected != -1) {
            $ionicTabsDelegate.select(selected + 1);
        }
    }

    $scope.goBack = function () {
        var selected = $ionicTabsDelegate.selectedIndex();
        if (selected != -1 && selected != 0) {
            $ionicTabsDelegate.select(selected - 1);
        }
    }
}) 

/* Launch NAV
.controller('MyNav', function($scope,$cordovaGeolocation, $cordovaLaunchNavigator) {  

	
	
	
  $scope.launchNav= function() {
    var destination = [17.4549, 78.6666];
	var start = null;
    $cordovaLaunchNavigator.navigate(destination, start).then(function() {
      alert("Navigator launched");
    }, function (err) {
      alert("error");
    });
  };
  
    $scope.launchNav2= function() {
    var destination = [17.3616, 78.4747];
	var start = null;
    $cordovaLaunchNavigator.navigate(destination, start).then(function() {
      alert("Navigator launched");
    }, function (err) {
      alert("error");
    });
  };
  
     $scope.launchNavHome= function() {
    var destination = [latHome,longHome];
	var start = null;
    $cordovaLaunchNavigator.navigate(destination, start).then(function() {
      alert("Navigator launched");
    }, function (err) {
      alert("error");
    });
	};

}) */


 //Geoloaction/SMS Controller
.controller('GeoSmsController', function($scope, $cordovaGeolocation, $cordovaSms, $cordovaEmailComposer, $cordovaLaunchNavigator) {    
	$scope.lats  = null;
	$scope.longs = null;
		function onSuccess(position){
   			$scope.lats  = position.coords.latitude;
			$scope.longs = position.coords.longitude;
			$scope.$apply();
			document.getElementById("geoID2")
			.innerHTML='Latitude:'+position.coords.latitude+'<br>'+
					  'Longitude'+position.coords.longitude+'<br>';
		

//cordovaSms starts here
    var message= document.getElementById("geoID")
		   .innerHTML='I am at'+'\n'+
					  'Latitude: ' +position.coords.latitude+'\n'+
					  'Longitude: '+position.coords.longitude+'\n';
	 
	var smsOptions={
		replaceLineBreaks: false,
		android: {intent: '' },

	};
	var number= window.localStorage.getItem("phn");
	
	$scope.sendSms= function()
	{
	$cordovaSms
      .send(number, message, smsOptions)
		.then(function() {
			alert('SMS sent in background');
			}, function(error) {
				alert('An error occurred');
				});
	} //end of sendSms	
	
//cordovaEmailComposer starts here
		$scope.sendEm= function(){
			$cordovaEmailComposer.isAvailable().then(function() {
			
				}, function () {
				alert('Not Available');
			}
		);
 

	var email = {
		app: 'gmail',
		to: window.localStorage.getItem("email"),
		cc: null,
		bcc: null,
		attachments:null ,
		subject: 'My Location',


		body: document.getElementById("geoID")
					  .innerHTML='I am at'+'\n'+
					  'Latitude: ' +position.coords.latitude+'\n'+
					  'Longitude: '+position.coords.longitude+'\n',
		isHtml: false
		}; 
	$cordovaEmailComposer.open(email).then(null, function () {
												alert('email cancled');
												});
	$cordovaEmailComposer.addAlias('gmail', 'com.google.android.gm');
 
  };//end of cordovaEmailComposer
	  


        //Storing lat long got work
			$scope.saveLatLongs = function()
				{
				window.localStorage.setItem("latHome",position.coords.latitude);
				window.localStorage.setItem("longHome",position.coords.longitude);
				alert('latLongs stored');
				}
	
			$scope.loadLats= function()
				{
		
				alert(window.localStorage.getItem("latHome") );
				alert(window.localStorage.getItem("longHome") );

					
				}
				
				
		//storing Lat longs for work
			$scope.saveLatLongsW = function()
				{
				window.localStorage.setItem("latWork",position.coords.latitude);
				window.localStorage.setItem("longWork",position.coords.longitude);
				alert('latLongs stored');
				}
	
			$scope.loadLatsW= function()
				{
		
				alert(window.localStorage.getItem("latWork") );
				alert(window.localStorage.getItem("longWork") );
					
				}	

		
		}  //end of onSuccess 

		function onError(error){
			alert('onError');
			
		}
   var watchID = navigator.geolocation.watchPosition(onSuccess,onError, {maximumAge: 5000, enableHighAccuracy: true});
	
	
	//Navigator 
	  $scope.launchNav= function() {
    var destination = [17.4549, 78.6666]; // Sreenidhi
	var start = null;
    $cordovaLaunchNavigator.navigate(destination, start).then(function() {
      alert("Navigator launched");
    }, function (err) {
      alert("error");
    });
  };
  
    $scope.launchNav2= function() {
    var destination = [17.3616, 78.4747]; // Charminar
	var start = null;
    $cordovaLaunchNavigator.navigate(destination, start).then(function() {
      alert("Navigator launched");
    }, function (err) {
      alert("error");
    });
  };
  
      $scope.launchNav3= function() {
    var destination = [17.4062, 78.4691]; //Birla Mandir
	var start = null;
    $cordovaLaunchNavigator.navigate(destination, start).then(function() {
      alert("Navigator launched");
    }, function (err) {
      alert("error");
    });
  };
  
  
	   $scope.launchNav4= function() {
    var destination = [17.3714, 78.4804]; // Salar Jung Museum
	var start = null;
    $cordovaLaunchNavigator.navigate(destination, start).then(function() {
      alert("Navigator launched");
    }, function (err) {
      alert("error");
    });
  };
  
  
  	   $scope.launchNav5= function() {
    var destination = [17.3833, 78.4011]; // Golkonda Fort
	var start = null;
    $cordovaLaunchNavigator.navigate(destination, start).then(function() {
      alert("Navigator launched");
    }, function (err) {
      alert("error");
    });
  };
  
     $scope.launchNavHome= function() {
    var destination = [window.localStorage.getItem("latHome"),window.localStorage.getItem("longHome")];  //Home Dynamic
	var start = null;
    $cordovaLaunchNavigator.navigate(destination, start).then(function() {
      alert("Navigator launched");
    }, function (err) {
      alert("error");
    });
	};
	
	 $scope.launchNavWork= function() {
    var destination = [window.localStorage.getItem("latWork"),window.localStorage.getItem("longWork")];  //Work Dynamic
	var start = null;
    $cordovaLaunchNavigator.navigate(destination, start).then(function() {
      alert("Navigator launched");
    }, function (err) {
      alert("error");
    });
	};
	
//end of Navigator	
	
//storing of Phone number
	
	$scope.saveSms = function() 
		{
        window.localStorage.setItem("phn", document.getElementById('numberTxt').value);
        alert('phone number stored');
		};
		
	$scope.loadSms= function()
		{
		
	  alert(window.localStorage.getItem("phn"));
		}
				
//storing of Email

	$scope.saveEmail = function() 
		{
        window.localStorage.setItem("email", document.getElementById('emailTxt').value);
        alert('Email stored');
		};
		
	$scope.loadEmail= function()
		{
		
	  alert(window.localStorage.getItem("email"));
		}		
}) ; // end of GeoSmslocation controller 
