class Task {
    constructor(name, description) {
        this.id = Math.floor((Math.random() * 10000) + 1);
        this.name = name;
        this.description = description;
    }
};

export default Task;