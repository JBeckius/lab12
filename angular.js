var app = angular.module('toDo', []);
app.controller('list', function($scope) {
  $scope.toDoList = ["thing one", "thing two", "thing three"];
  // $scope.filterList = $scope.newItem;
  $scope.addItem = function(newItem) {
    // console.log("click works");
    for(var i = 0; i < $scope.toDoList.length; i++) {
      if(newItem === $scope.toDoList[i]) {
        var item = document.getElementById('newItem');
        item.setAttribute('value', "Item already in list!")
        alert("Item already in list!")
        return;
      }
    };
    $scope.toDoList.push(newItem);
    // console.log($scope.toDoList);
    $scope.newItem = "";

  }
  $scope.done = function() {
    this.parentElement.addClass('done');
  }

});
app.directive('listItem', function() {
  return {
    restrict: 'A',
    templateUrl: 'directives/listItem.html'
  };
});
