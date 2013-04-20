// Simple Task
function Task(name) {
    var self = this;
    self.name = name;
}

function TasksViewModel() {
    var self = this;

    // Editable data
    self.tasks = ko.observableArray([
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