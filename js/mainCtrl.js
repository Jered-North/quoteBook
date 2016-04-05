angular.module("quoteBook").controller("mainCtrl", function($scope, dataService) {
	$scope.quotes = dataService.getData();

	$scope.addQuote = function() {
		var obj = newQuote();
		dataService.setData(obj);
		clearInputField()
	}

	$scope.removeQuote = function() {
		var obj = newQuote();
		dataService.removeData(obj);
		clearInputField();
	}


	function newQuote() {
		return {
			text: $scope.newQuote,
			author: $scope.newAuthor
		}
	}

	function clearInputField() {
		$scope.newQuote = "";
		$scope.newAuthor = "";
	}
});