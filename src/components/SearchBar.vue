<template>
  <div class="search-bar">
    <input type="text" v-model="searchQuery" placeholder="Search...">
    <button @click="search">Search</button>
  </div>
</template>

<script>
export default {
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
</script>

<style>
.search-bar {
  display: flex;
  align-items: center;
  justify-content: center;
}

input[type="text"] {
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 8px;
}

button {
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  background-color: #007bff;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
}
</style>