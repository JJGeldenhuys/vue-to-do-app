<template>
  <form @submit.prevent="onSubmit">
    <h2 class="label-wrapper">
      <label for="new-todo-input" class="label__default">
        To-Do that need to be done?
      </label>
    </h2>
    <input
      type="text"
      id="new-todo-input"
      name="new-todo"
      placeholder="What is the To-do?"
      autocomplete="off"
      v-model.lazy.trim="title"
      max-width="50px"
      class="input__default" />
      <input
      type="text"
      id="new-todo-description"
      name="new-description"
      placeholder="To-do Description?"
      autocomplete="off"
      v-model.lazy.trim="description"
      max-width="50px"
      class="input__default" />
      <DatePicker/>
      <input
      type="text"
      id="new-todo-category"
      name="new-category"
      placeholder="Category"
      autocomplete="off"
      v-model.lazy.trim="description"
      max-width="100px"
      class="input__default" />
    <button type="submit" class="btn btn__primary btn__default">Add</button>
  </form>
</template>

<script>
import DatePicker from "./datePicker.vue";

export default 
{

  name:"ToDoForm",
  components: {DatePicker},

  methods: {
    onSubmit() {
      if (this.label === "") {
        return;
      }
      this.$emit("todo-added", this.label);
      this.label = "";
    },
  },
  data() {
    return {
      title: "",
      description:"",
      date:"",
      categories:"",
    };
  },
};
</script>
