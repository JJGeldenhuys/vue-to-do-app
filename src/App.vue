<template>
  <v-app>
    <searchBar/>
    <v-main>
      <ToDoForm/>
      <ToDoItem/>
    </v-main>
  </v-app>
</template>

<script>

import ToDoForm from './components/ToDoForm'
import ToDoItem from './components/ToDoItem'
import searchBar from './components/SearchBar'

export default 
{
  name: 'App',

  components: {
    searchBar,
    ToDoForm,
    ToDoItem,
    
  },

  data() {
  //   return {
  //   ToDoItems:[
  //   {todo_id:1, title:'Buy bread', description: 'Remember to go to the shops to buy bread', date:'2022-01-01', categories: ['Shopping','Groceries','Food']},
  //   {todo_id:2, title:'Buy milk', description: 'Remember to go to the shops to buy milk', categories: ['Shopping','Groceries','Drinks']},
  //   {todo_id:3, title:'Fill up car', description: 'The car uses Unleaded 95', date:'2022-01-01', categories: ['Fuel']},
  //   {todo_id:4, title:'Pay the ISP', date:'2022-01-01', categories: null},]
  //   };
  // },
  // methods: {
  //   //addToDo(toDoLabel) {
  //     //this.ToDoItems.push({
  //     //});
  //   },
  //   updateDoneStatus(toDoId) {
  //     const toDoToUpdate = this.ToDoItems.find((item) => item.id === toDoId);
  //     toDoToUpdate.done = !toDoToUpdate.done;
  //   },
  //   deleteToDo(toDoId) {
  //     const itemIndex = this.ToDoItems.findIndex((item) => item.id === toDoId);
  //     this.ToDoItems.splice(itemIndex, 1);
  //     this.$refs.listSummary.focus();
  //   },
  // },
  // computed: {
  //   listSummary() {
  //     const numberFinishedItems = this.ToDoItems.filter(
  //       (item) => item.done
  //     ).length;
  //     return `${numberFinishedItems} out of ${this.ToDoItems.length} items completed`;
  //   },
  // };
  }
}
</script>

