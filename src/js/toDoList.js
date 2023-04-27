import ToDoItem from "@/components/children/ToDoItem";
import SearchBar from "@/components/children/searchBar";

export default {
    name: "ToDoList",
    components: { ToDoItem, SearchBar },
    props: {
        listItems: {
            required: true,
            type: [],
        },
    },
    methods: {
        editToDo(id) {
            return id;
        },
        updateDoneStatus(todo_id) {
            const toDoToUpdate = this.props.listItems.find(
                (object) => object.todo_id === todo_id
            );
            toDoToUpdate.done = !toDoToUpdate.done;
        },
        deleteToDo(todo_id) {
            const objectIndex = this.props.listItems.findIndex(
                (object) => object.todo_id === todo_id
            );
            this.props.listItems.splice(objectIndex, 1);
            this.$refs.listSummary.focus();
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
