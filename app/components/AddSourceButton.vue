<template>
    <button v-if="isReadyToShow" class="mt-2 bg-green-800 p-2 text-white rounded-lg" @click="addSource()">Legg til kilde</button>
    <button v-else class="mt-2 bg-gray-500 p-2 text-white rounded-lg" @click="addSource()" disabled>Legg til kilde</button>
</template>


<script lang="ts" setup>
defineProps<{
    isReadyToShow:boolean
}>();

function addSource() {
    console.log("Adding source of type: ");
}</script>