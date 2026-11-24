<template>
    <div class="flex flex-row gap-2">
        <div class="flex flex-col gap-1 grow">
            <label for="day" class="font-bold">Dag</label>
            <input id="day" type="number" max="31" min="1" class="rounded-md p-1" v-model="source.day">
        </div>

        <div class="flex flex-col gap-1 grow">
            <label for="month" class="font-bold">Måned</label>
            <input id="month" type="number" max="12" min="1" class="rounded-md p-1" v-model="source.month">
        </div>

        <div class="flex flex-col gap-1 grow">
            <label for="year" class="font-bold">År</label>
            <input id="year" type="number" min="1900" :max="maxYear" class="rounded-md p-1" v-model="source.year">
        </div>
    </div>
</template>


<script lang="ts" setup>

const source = useState("source", () => ({
    day: null,
    month: null,
    year: null,
    authors: [{
        firstName: "",
        lastName: ""
    }],
}))

const maxYear = new Date().getFullYear();

// TODO: Kan kanskje lage en dynamic max day også etter month

</script>
