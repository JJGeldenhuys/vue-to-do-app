<template>
    <form @submit.prevent="onSubmit">
        <div class="form-wrapper">
            <h2>To-Do's, that need to be done?</h2>
            <div class="grid">
                <div class="grid-column">
                    <label class="input-label">To do title</label>
                    <input
                        type="text"
                        id="new-todo-input"
                        name="new-todo"
                        placeholder="What is the To-do?"
                        autocomplete="off"
                        v-model.lazy.trim="title"
                        clearable="true"
                        class="text-input"
                    />
                    <label class="input-label">description</label>
                    <input
                        type="text"
                        id="new-todo-description"
                        name="new-description"
                        placeholder="To-do Description?"
                        autocomplete="off"
                        clearable
                        v-model.lazy.trim="description"
                        class="text-input"
                    />
                </div>
                <div class="grid-column">
                    <label class="input-label">Date</label>
                    <DatePicker @date-data="getDate" />
                    <label class="input-label">category</label>
                    <input
                        type="text"
                        id="new-todo-category"
                        name="new-category"
                        placeholder="Category"
                        autocomplete="off"
                        v-model.lazy.trim="categories"
                        class="text-input"
                    />
                </div>
            </div>
            <button v-on:click="onSubmit" class="button-primary">Add</button>
        </div>
    </form>
</template>

<script src="../../js/toDoForm.js" />
<style>
@import "../../style/todoForm.css";
</style>
