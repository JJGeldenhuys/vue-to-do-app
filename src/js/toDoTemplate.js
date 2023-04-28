import ToDoForm from "../components/parents/ToDoForm";
import ToDoList from "../components/parents/ToDoList";
import { isProxy, toRaw } from "vue";

export default {
    name: "ToDoTemplate",
    components: {
        ToDoForm,
        ToDoList,
    },
    data() {
        return {
            ToDoItems: [
                {
                    todo_id: 1,
                    title: "Buy bread",
                    description: "Remember to go to the shops to buy bread",
                    date: "2022-01-01",
                    categories: ["Shopping", "Groceries", "Food"],
                    done: false,
                },
                {
                    todo_id: 2,
                    title: "Buy milk",
                    description: "Remember to go to the shops to buy milk",
                    categories: ["Shopping", "Groceries", "Drinks"],
                    done: false,
                },
                {
                    todo_id: 3,
                    title: "Fill up car",
                    description: "The car uses Unleaded 95",
                    date: "2022-01-01",
                    categories: ["Fuel"],
                    done: false,
                },
                {
                    todo_id: 4,
                    title: "Pay the ISP",
                    date: "2022-01-01",
                    categories: null,
                    done: false,
                },
            ],
        };
    },

    methods: {
        getData(dataObj) {
            const { title, categories, date, description } = dataObj;
            this.addToDo(title, description, date, categories);
        },
        addToDo(title, description, date, categories) 
        {
            this.ToDoItems.push({
                id: this.ToDoItems.length + 1,
                title: title,
                description: description,
                date: date,
                categories: categories,
                done: false,
            });

            this.sortList();
        },

        sortList() {
            let rawObject;
            if (isProxy(this.ToDoItems)) {
                rawObject = toRaw(this.ToDoItems);
            } else {
                rawObject = this.ToDoItems;
            }
            rawObject.sort(function (a, b) {
                if (a.title?.toUpperCase() < b.title?.toUpperCase()) {
                    return -1;
                }
                if (a.title?.toUpperCase() > b.title?.toUpperCase()) {
                    return 1;
                }
                return 0;
            });
        },
    },
};
