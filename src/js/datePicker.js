import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
export default {
    components: { VueDatePicker },
    data() {
        return {
            date: "",
        };
    },
    Watch: {
        date(newVal, oldVal) {
            console.log(newVal, oldVal);
            this.$emit("date-data", newVal);
        },
    },
};
