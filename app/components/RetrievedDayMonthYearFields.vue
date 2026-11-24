<template>
    <div class="flex flex-col gap-1">
        <label for="r-day" class="font-bold">Hentet dag</label>
        <input id="r-day" type="number" max="31" min="1" class="rounded-md p-1" v-model="source.retrievedDay">
    </div>

    <div class="flex flex-col gap-1">
        <label for="r-month" class="font-bold">Hentet måned</label>
        <input id="r-month" type="number" max="12" min="1" class="rounded-md p-1" v-model="source.retrievedMonth">
    </div>

    <div class="flex flex-col gap-1">
        <label for="r-year" class="font-bold">Hentet år</label>
        <input id="r-year" type="number" min="1900" :max="maxYear" class="rounded-md p-1" v-model="source.retrievedYear">
    </div>
</template>


<script lang="ts" setup>

const source = useState("source", () => ({
    retrievedDay: null,
    retrievedMonth: null,
    retrievedYear: null
}))

const maxYear = new Date().getFullYear();

// TODO: Kan kanskje lage en dynamic max year for day også etter month

</script>
