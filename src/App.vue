<template>
  <div id="app">
    <h1>To-Do List</h1>
    <searchBar/>
    <to-do-form @todo-added="addToDo"></to-do-form>
    <h2 id="list-summary" ref="listSummary" tabindex="-1">{{ listSummary }}</h2>
    <ul aria-labelledby="list-summary" class="stack-large">
      <li v-for="item in ToDoItems" :key="item.id">
        <to-do-item
          :label="item.label"
          :done="item.done"
          :id="item.id"
          @checkbox-changed="updateDoneStatus(item.id)"
          @item-deleted="deleteToDo(item.id)"
          @item-edited="editToDo(item.id, $event)">
        </to-do-item>
      </li>
    </ul>
  </div>
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
    return{
    ToDoItems:[
    {todo_id:1, title:'Buy bread', description: 'Remember to go to the shops to buy bread', date:'2022-01-01', categories: ['Shopping','Groceries','Food'],done:false},
    {todo_id:2, title:'Buy milk', description: 'Remember to go to the shops to buy milk', categories: ['Shopping','Groceries','Drinks'],done:false},
    {todo_id:3, title:'Fill up car', description: 'The car uses Unleaded 95', date:'2022-01-01', categories: ['Fuel'],done:false},
    {todo_id:4, title:'Pay the ISP', date:'2022-01-01', categories: null,done:false}]
    };
  },
  methods: 
  {
    addToDo(todo_id,title,description,date,categories,) 
    {
      this.ToDoItems.push(
        {
        id: todo_id+1,
        title:title,
        description:description,
        date:date,
        categories:categories,
        done:true,
      });
    },
    updateDoneStatus(todo_id)
    {
      const toDoToUpdate = this.ToDoItems.find((object) => object.todo_id === todo_id);
      toDoToUpdate.done = !toDoToUpdate.done;
    },
    deleteToDo(todo_id) {
      const objectIndex = this.ToDoItems.findIndex((object) => object.todo_id === todo_id);
      this.ToDoItems.splice(objectIndex, 1);
      this.$refs.listSummary.focus();
    }
  },
  computed: 
  {
    listSummary() {
      const numberFinishedItems = this.ToDoItems.filter(
        (object) => object.done
      ).length;
      return `${numberFinishedItems} out of ${this.ToDoItems.length} items completed`;
    },
  }
};

</script>

<style>

/* Global styles */
.btn {
  padding: 0.8rem 1rem 0.7rem;
  border: 0.2rem solid #4d4d4d;
  cursor: pointer;
  text-transform: capitalize;
}
.btn__danger 
{
  color: #fff;
  background-color: #ca3c3c;
  border-color: #bd2130;
}
.btn__filter {
  border-color: lightgrey;
}
.btn__danger:focus {
  outline-color: black;
}
.btn__primary {
  color: #fff;
  background-color:green;
}
.btn-group {
  display: flex;
  justify-content: space-between;
}
.btn-group > * {
  flex: 1 1 auto;
}
.btn-group > * + * {
  margin-left: 0.8rem;
}
.label-wrapper {
  margin: 0;
  flex: 0 0 100%;
  text-align: center;
}
[class*="__lg"] {
  display: inline-block;
  width: 100%;
  font-size: 1.9rem;
}
[class*="__lg"]:not(:last-child) {
  margin-bottom: 1rem;
}
@media screen and (min-width: 620px) {
  [class*="__lg"] {
    font-size: 2.4rem;
  }
}
.visually-hidden {
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: rect(1px, 1px, 1px, 1px);
  white-space: nowrap;
}
[class*="stack"] > * {
  margin-top: 0;
  margin-bottom: 0;
}
.stack-small > * + * {
  margin-top: 1.25rem;
}
.stack-large > * + * {
  margin-top: 2.5rem;
}
@media screen and (min-width: 550px) {
  .stack-small > * + * {
    margin-top: 1.4rem;
  }
  .stack-large > * + * {
    margin-top: 2.8rem;
  }
}
/* End global styles */
#app {
  background:ghostwhite;
  margin: 2rem 0 4rem 0;
  padding: 1rem;
  padding-top: 0;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2.5rem 5rem 0 rgba(0, 0, 0, 0.1);
}
@media screen and (min-width: 550px) {
  #app {
    padding: 4rem;
  }
}
#app > * {
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
}
#app > form {
  max-width: 100%;
}
#app h1 {
  display: block;
  min-width: 100%;
  width: 100%;
  text-align: center;
  margin: 0;
  margin-bottom: 1rem;
}
</style>

