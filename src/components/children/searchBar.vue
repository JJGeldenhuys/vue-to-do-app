<template>
    <div class="search-bar">
        <input
            class="text-input"
            type="text"
            v-model="searchQuery"
            placeholder="Search..."
        />
        <button class="button-primary" @click="search">Search</button>
    </div>
</template>

<script src="../../js/searchBar.js" />
