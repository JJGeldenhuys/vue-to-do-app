<template>
    <div class="stack-small" v-if="!isEditing">
        <div class="item-wrapper">
            <div class="input-wrapper">
                <input
                    style="margin-right: 60px"
                    type="checkbox"
                    class="checkbox-input"
                    :id="id"
                    :checked="isDone"
                    @change="$emit('checkbox-changed')"
                />
                <label for="id" class="input-label">{{ item.title }}</label>
            </div>
            <div class="icon-wrapper">
                <v-icon
                    class="icon-button"
                    style="
                        color: white;
                        font-size: 22px;
                        background-color: red;
                        border-radius: 50%;
                        height: 32px;
                        width: 32px;
                        margin: 5px;
                        padding: 5px;
                        cursor: pointer;
                    "
                    icon="mdi-trash-can"
                ></v-icon>
                <v-icon
                    class="icon-button"
                    style="
                        color: white;
                        font-size: 22px;
                        background-color: #209b00;
                        border-radius: 50%;
                        height: 32px;
                        width: 32px;
                        margin: 5px;
                        padding: 5px;
                        cursor: pointer;
                    "
                    icon="mdi-square-edit-outline"
                ></v-icon>
            </div>
        </div>
    </div>
    <to-do-item-edit
        v-else
        :id="id"
        :title="item.title"
        :description="item.description"
        :date="item.date"
        :categories="item.categories"
        @item-edited="itemEdited"
        @edit-cancelled="editCancelled"
    ></to-do-item-edit>
</template>

<script src="../../js/todoItem.js" />
<style>
@import "../../style/todoItem.css";
</style>
