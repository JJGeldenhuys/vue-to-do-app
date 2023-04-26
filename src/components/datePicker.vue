<template>
    <div>
      <label for="datepicker">Choose a date</label>
      <b-form-datepicker id="datePicker" v-model="date" class="mb-2"></b-form-datepicker>
    </div>
  </template>

<script>

export default 
{
  name:'datePicker',
  data() 
  {
      return {
        date: ''
      }
    }
  }
</script>