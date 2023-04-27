export default {
    name: "ToDoItemEdit",

    props: {
        id: {
            type: String,
            required: true,
        },
        title: {
            required: true,
            type: String,
        },
    },
    data() {
        return {
            newLabel: this.label,
        };
    },
    methods: {
        onSubmit() {
            if (this.newLabel && this.newLabel !== this.label) {
                this.$emit("item-edited", this.newLabel);
            }
        },
        onCancel() {
            this.$emit("edit-cancelled");
        },
    },
    mounted() {
        const labelInputRef = this.$refs.labelInput;
        labelInputRef.focus();
    },
};
