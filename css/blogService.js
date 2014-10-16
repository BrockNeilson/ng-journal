var app = angular.module('journalApp');

app.service('blogService', function($http, $q){
	var url = 'https://api.parse.com/1/classes/blog';
 	this.postData = function(thing) {
 		return $http.post(url, thing);
 	}

 	this.getData = function(){
 		var myDeferredPromise = $q.defer();
 		$http.get(url+'?order=-createdAt').
 			then(function(stuffThatIgot){
 				myDeferredPromise.resolve(stuffThatIgot.data.results);
 			});
 		return myDeferredPromise.promise;
 	}

 	this.delData = function(thing){
 		return $http.delete(url + '/' + thing.objectId);
 	}
 	this.updateData = function(newContent, objectId){
 		return $http.put(url + '/' + objectId, {content: newContent});
 	}
});