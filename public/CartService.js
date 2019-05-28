function ExpressService($http, $scope) {
    const service = this;
    service.key = 'rEKWKvPrW7HpooXYxbjymSfIAOyKcwvvhixHIIWNAYlZeLLzmv'; // Fill in here
    service._secret = 'OlpuSV27PqFDXswHBLBMPCHuTPh6DfxauvnwNSO5'; // Fill in here
    service.token = '';
    /**
     * Call https://www.reddit.com/r/aww/.json
     * and set ctrl.feed to be the results
     */
    service.getAllItems = () => {
        // $http stuff goes here
        return $http({
            method: "GET",
            url: "https://www.reddit.com/r/aww/.json"
            });
}


$scope.enter = (() => {
    let addTask = $scope.addTask;
    let completed = $scope.completed;
    let listItem = $scope.listItem;
  //adding tasks / filtering  
        if (!listItem == '' && !addTask == '') {
            $scope.todos.splice(listItem, 1, {
                text: addTask,
                completed: completed
            });
        }else {
            $scope.todos.push({
                text: addTask,
                complete: false
            });
        };        
        $scope.addTask = $scope.completed = $scope.listItem = '';  
}); 

//complete button to strikethrough list item
$scope.clear = (() => {
let todos = $scope.todos;
$scope.todos = [];
angular.forEach(todos, function(task) {
  if (!task.completed) $scope.todos.push(task);
});
});

// x button to remove list item
$scope.removeTask = (() => {
let lastTask = $scope.todos;
$scope.todos = [];
angular.forEach(lastTask, function(x) {
    if (!x.completed) $scope.todos.push(x);
});
});
}



angular
.module('ExpressApp')
.service('RedditService', ['$http', ExpressService]) 