export default {
    name: "SearchBar",
    data() {
        return {
            searchQuery: "",
        };
    },
    methods: {
        filteredData() 
        {
            const searchQuery = this.searchQuery.toLowerCase();
            return this.listItems.filter(item => 
                {
              return (
                item.title.toLowerCase().indexOf(searchQuery) !== -1 
              );
            });
          }
        }
    }
