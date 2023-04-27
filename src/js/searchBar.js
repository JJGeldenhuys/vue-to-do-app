export default {
    name: "SearchBar",
    data() {
        return {
            searchQuery: "",
        };
    },
    methods: {
        search() {
            // handle search logic
            console.log("Searching for:", this.searchQuery);
        },
    },
};
