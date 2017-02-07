angular.module('todoController', [])
	
// how does this file know about the service Todos

	.controller('mainController', function($scope,$http,Todos) {
		$scope.formData = {};

		// when landing on the page, get all todos and show them
		// use the service to get all the todos
		Todos.get()
			.success(function(data) {
				$scope.todos = data;
			});

		// when submitting the add form, send the text to the node API
		$scope.createTodo = function() {
			Todos.create($scope.formData)
				.success(function(data) {
					$scope.formData = {};
					$scope.todos = data;
				})
				.error(function(data) {
					console.log('error: ' + data);
				});
		};

		// delete a todo after checking it
		$scope.deleteTodo = function(id) {
			Todos.delete(id)
				.success(function(data){
					$scope.todos = data;
				});
		};
	});

