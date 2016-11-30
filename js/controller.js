var MainController = function MainController(MyService) {

    var self = this;
    self.newName;
    self.newDate ;
    self.newDetail;
    

    self.addTask = function addTask() {
        self.taskTracker.unshift({
            name: self.newName,
            date: self.newDate,
            detail: self.newDetail
        });
        // self.newName = '';
        // self.newDate = '';
        // self.newDetail = '';
    };

    self.taskTracker = [];
   

    MyService
        .getService()
        .then(function(response) {
            self.taskTracker = response;
        });
};

angular
    .module('myApp')
    .controller('MainController', MainController);
