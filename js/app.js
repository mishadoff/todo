// Simple Task
function Task(name) {
    var self = this;
    self.name = ko.observable(name);
    self.time = ko.observable("2");
    self.state = ko.observable("TODO");
    
    /*self.time = ko.computed(function (){ 
	return parseClever(self.estimateClever);
    });*/
}

function TasksViewModel() {
    var self = this;

    self.states = [
	{state: "TODO"}, 
	{state: "IN-PROGRESS"},
	{state: "DONE"}
	];  
    
    // Editable data
    self.tasks = ko.observableArray([
	// Basic tasks
        new Task("Learn Javascript"),
        new Task("Read 'Android Games'"),
        new Task("What else?")
    ]);

    // Add Task
    self.addTask = function() {
        self.tasks.push(new Task("New Item"));
    };

    // Remove seat
    self.removeTask = function(task) {
        self.tasks.remove(task);
    };
}

ko.applyBindings(new TasksViewModel());