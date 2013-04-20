// Simple Task
function Task(name, status) {
    var self = this;
    self.name = ko.observable(name);
    self.time = ko.observable(2);
    self.status = ko.observable(status);
    
    self.timeValue = ko.computed(function (){ 
	return parseClever(self.estimateClever);
    });
    
    // TODO move out // TODO handle error
    function parseClever(text) {
	return 1000;
    }
}

function TasksViewModel() {
    var self = this;

    self.states = [
	{status: "TODO"}, 
	{status: "IN-PROGRESS"},
	{status: "DONE"}
	];  
    
    // Editable data
    self.tasks = ko.observableArray([
	// Basic tasks
        new Task("Learn Javascript", self.states[0]),
        new Task("Read 'Android Games'", self.states[0]),
        new Task("What else?", self.states[0])
    ]);

    // Add Task
    self.addTask = function() {
        self.tasks.push(new Task("New Item", self.states[0]));
    };

    // Remove seat
    self.removeTask = function(task) {
        self.tasks.remove(task);
    };
    
    self.totalTime = ko.computed(function() {
	var total = 0;
	for (var i = 0; i < self.tasks().length; i++)
	    total += parseInt(self.tasks()[i].timeValue()); // handle parse error
	return total;
    });
}

ko.applyBindings(new TasksViewModel());