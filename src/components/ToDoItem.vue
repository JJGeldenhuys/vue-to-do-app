<template>
  <div class="stack-small" v-if="!isEditing">
    <div class="custom-checkbox">
      <input
        type="checkbox"
        class="checkbox"
        :id="todo_id"
        :checked="isDone"
        @change="$emit('checkbox-changed')" />
      <label :for="id" class="checkbox-label">{{ title }}</label>
    </div>
    <div class="btn-group">
      <button type="button" class="btn btn__danger" @click="deleteToDo">
        Delete
        <span class="visually-hidden">{{ title }}</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name:'ToDoItem',
  props: {
    todo_id: { required: true, type: String },
    title: { required: true, type: String },
    description: { required: false, type: String },
    Date: { required: false, type: Date },
    category: { required: false, type: String },
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
  },
};
</script>
