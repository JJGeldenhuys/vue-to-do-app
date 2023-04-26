<template>
  <form @submit.prevent="onSubmit">
    <h2 class="label-wrapper">
      <label for="new-todo-input" class="label__lg">
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
      class="input__lg" />
      <input
      type="text"
      id="new-todo-description"
      name="new-description"
      placeholder="To-do Description?"
      autocomplete="off"
      v-model.lazy.trim="description"
      max-width="50px"
      class="input__lg" />
      <datePicker></datePicker>
      <input
      type="text"
      id="new-todo-category"
      name="new-category"
      placeholder="Category"
      autocomplete="off"
      v-model.lazy.trim="description"
      max-width="50px"
      class="input__lg" />
    <button type="submit" class="btn btn__primary btn__lg">Add</button>
  </form>
</template>

<script>
import datePicker from "./datePicker.vue";

export default 
{

  name:"ToDoForm",
  components: datePicker,

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
