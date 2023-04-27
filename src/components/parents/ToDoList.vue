<template>
    <div class="todo-list-wrapper">
        <h2>To Do List</h2>
        <SearchBar />
        <div class="list-header">
            <h4 style="margin-right: 15px">Done?</h4>
            <h4
                style="
                    border-left: 1px solid rgb(58, 58, 58);
                    padding-left: 15px;
                    margin-bottom: 10px;
                "
            >
                Title
            </h4>
        </div>
        <ul>
            <li v-for="item in listItems" :key="item.id">
                <to-do-item
                    :item="item"
                    :label="item.title"
                    :done="item.done"
                    :id="item.id"
                    @checkbox-changed="updateDoneStatus(item.id)"
                    @item-deleted="deleteToDo(item.id)"
                    @item-edited="editToDo(item.id, $event)"
                >
                </to-do-item>
            </li>
        </ul>
    </div>
</template>

<script src="../../js/toDoList.js" />
<style>
@import "../../style/toDoList.css";
</style>
