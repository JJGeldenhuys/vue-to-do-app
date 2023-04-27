import ToDoItemEdit from "../components/children/ToDoItemEdit.vue";

export default {
    components: {
        ToDoItemEdit,
    },
    props: {
        label: { required: true, type: String },
        done: { default: false, type: Boolean },
        id: { required: true, type: String },
        item: {
            required: true,
            type: Object,
        },
    },
    data() {
        return {
            isEditing: false,
        };
    },
    computed: {
        isDone() {
            return this.done;
        },
    },
    methods: {
        deleteToDo() {
            this.$emit("item-deleted");
        },
        toggleToItemEditForm() {
            console.log(this.$refs.editButton);
            this.isEditing = true;
        },
        itemEdited(newLabel) {
            this.$emit("item-edited", newLabel);
            this.isEditing = false;
            this.focusOnEditButton();
        },
        editCancelled() {
            this.isEditing = false;
            this.focusOnEditButton();
        },
        focusOnEditButton() {
            this.$nextTick(() => {
                const editButtonRef = this.$refs.editButton;
                editButtonRef.focus();
            });
        },
    },
};
