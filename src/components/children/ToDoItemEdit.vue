<template>
    <form class="stack-small" @submit.prevent="onSubmit">
        <div class="form-wrapper">
            <div class="input-container">
                <label class="input-label"
                    >Edit Name for&nbsp;: &nbsp;{{ title }}</label
                >
                <input
                    :id="id"
                    ref="labelInput"
                    type="text"
                    autocomplete="off"
                    v-model.lazy.trim="newLabel"
                    class="text-input"
                />
            </div>
            <div class="button-container">
                <button type="button" class="button-primary" @click="onCancel">
                    Cancel
                </button>
                <button type="submit" class="button-secondary">Save</button>
            </div>
        </div>
    </form>
</template>
<script src="../../js/todoItemEdit.js" />
<style>
@import "../../style/todoItemEdit.css";
</style>
