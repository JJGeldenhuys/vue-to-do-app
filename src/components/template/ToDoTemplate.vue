<template>
    <div class="todo-template-wrapper">
        <h1
            class="neon"
            style="margin-top: 20px; color: white; font-size: 60px"
        >
            TO-DO APP <span style="font-size: 28px">....by joa</span>
        </h1>
        <div class="todo-template-container">
            <to-do-form @to-do-data="getData"></to-do-form>
            <to-do-list :listItems="ToDoItems"></to-do-list>
        </div>
    </div>
</template>

<script src="../../js/toDoTemplate.js" />
<style>
@import "../../style/toDoTemplate.css";
</style>
