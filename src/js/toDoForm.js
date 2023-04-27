import DatePicker from "../components/children/datePicker.vue";

export default {
    name: "ToDoForm",
    components: { DatePicker },

    methods: {
        getDate(value) {
            console.log(value);
            this.date = value;
        },
        onSubmit() {
            this.$emit("to-do-data", {
                title: this.title,
                description: this.description,
                date: this.date,
                categories: this.categories,
            });
        },
    },
    data() {
        return {
            title: "",
            description: "",
            date: "",
            categories: "",
        };
    },
};
