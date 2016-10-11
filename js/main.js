// alert("I'm working!");
var app = angular.module("myApp", ["satellizer", "ngStorage"]);

app.config(function($authProvider) {

    $authProvider.facebook({
      clientId: 'Facebook App ID'
    });

    // Optional: For client-side use (Implicit Grant), set responseType to 'token' (default: 'code')
    $authProvider.facebook({
      clientId: '611887619013552',
      responseType: 'token'
    });

    $authProvider.google({
      clientId: 'Google Client ID'
    });

    $authProvider.github({
      clientId: '09c33eaa394cc67657e9'
    });

    $authProvider.linkedin({
      clientId: 'LinkedIn Client ID'
    });

    $authProvider.instagram({
      clientId: 'Instagram Client ID'
    });

    $authProvider.yahoo({
      clientId: 'Yahoo Client ID / Consumer Key'
    });

    $authProvider.live({
      clientId: 'Microsoft Client ID'
    });

    $authProvider.twitch({
      clientId: 'Twitch Client ID'
    });

    $authProvider.bitbucket({
      clientId: 'Bitbucket Client ID'
    });

    $authProvider.spotify({
      clientId: 'Spotify Client ID'
    });

    $authProvider.twitter({
    	url: '/auth/twitter'
  	 });

    // No additional setup required for Twitter

    $authProvider.oauth2({
      name: 'foursquare',
      url: '/auth/foursquare',
      clientId: 'Foursquare Client ID',
      redirectUri: window.location.origin,
      authorizationEndpoint: 'https://foursquare.com/oauth2/authenticate',
    });

  });


app.controller("loginCtrl", function ($scope, $auth) {
	var user = {
		email: $scope.email,
		password: $scope.password
	};
	$scope.authenticate = function(provider) {
      $auth.authenticate(provider);
   };
	
});


/*
var user = {
  email: $scope.email,
  password: $scope.password
};

$auth.login(user)
  .then(function(response) {
    // Redirect user here after a successful log in.
  })
  .catch(function(response) {
    // Handle errors here, such as displaying a notification
    // for invalid email and/or password.
  });
*/ 