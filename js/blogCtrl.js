var app = angular.module('journalApp');

app.controller('blogCtrl', function($scope, blogService) {
	$scope.blogPosts = [];
	var IdOfThePost;

var ctrlGetData = function() {
	blogService.getData().
		then(function(ResolvedPromise){
			$scope.blogPosts = ResolvedPromise;
		});
}
ctrlGetData();

$scope.ctrlPostData = function () {
	blogService.postData({content: $scope.blogcontent}).
		then(function(){
			ctrlGetData();
		});
}

$scope.delPost = function(){
	blogService.delData(this.crap).
		then(function(){
			ctrlGetData();
		})
}

$scope.editPost = function() {
	//put the post in the text-angular box
	$scope.blogcontent = this.crap.content;
	//store the objectId for the post that is being edited
	IdOfThePost = this.crap.objectId;
	//then you need to do a PUT request to Parse by the objectId
}
 $scope.updatePost = function(){
 	blogService.updateData($scope.blogcontent, IdOfThePost).
 		then(function(){
 			ctrlGetData();
 		})
 }


});