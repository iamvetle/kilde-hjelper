<template>
    <div class="flex flex-row gap-2">
        <div class="flex flex-col gap-1 grow">
            <label for="r-day" class="font-semibold">Hentet dag</label>
            <input id="r-day" type="number" max="31" min="1" class="rounded-md p-1" v-model="source.retrievedDay">
        </div>

        <div class="flex flex-col gap-1 grow">
            <label for="r-month" class="font-semibold">Hentet måned</label>
            <select id="r-month" class="rounded-md p-1" v-model="source.month">
                <option value="1">Januar</option>
                <option value="2">Februar</option>
                <option value="3">Mars</option>
                <option value="4">April</option>
                <option value="5">Mai</option>
                <option value="6">Juni</option>
                <option value="7">Juli</option>
                <option value="8">August</option>
                <option value="9">Oktober</option>
                <option value="10">September</option>
                <option value="11">November</option>
                <option value="12">Desember</option>
            </select>
        </div>

        <div class="flex flex-col gap-1 grow">
            <label for="r-year" class="font-semibold">Hentet år</label>
            <input id="r-year" type="number" min="1900" :max="maxYear" class="rounded-md p-1"
                v-model="source.retrievedYear">
        </div>
    </div>
</template>


<script lang="ts" setup>

const source = useState<StandardSource>("source")

const maxYear = new Date().getFullYear();

// TODO: Kan kanskje lage en dynamic max year for day også etter month

</script>
