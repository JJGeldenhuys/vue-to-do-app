import ToDoItem from "@/components/children/ToDoItem";
import SearchBar from "@/components/children/searchBar";

export default {
    name: "ToDoList",
    components: { ToDoItem, SearchBar },
    props: {
        listItems: {
            required: true,
            type: [],
            done:null 
        },
    },
    methods: {
        editToDo(id) {
            return id;
        },
        updateDoneStatus(id) {
            const toDoToUpdate = this.props.listItems.find(
                (object) => object.todo_id === id
            );
            toDoToUpdate.done = !toDoToUpdate.done;
        },
        deleteToDo(id) 
       {
            this.listItems.splice(id, 1);
            this.sortList();
        },
        sortList() {
            let todoItems = this.props.listItems;
            todoItems.sort(function (a, b) {
                if (a.title.toUpperCase() < b.title.toUpperCase()) {
                    return -1;
                }
                if (a.title.toUpperCase() > b.title.toUpperCase()) {
                    return 1;
                }
                return 0;
            });
        },
    },
};
