<template>
    <div class="flex flex-row gap-2">
        <div class="flex flex-col gap-1 grow">
            <label for="day" class="font-semibold">Dag</label>
            <input id="day" type="number" max="31" min="1" class="rounded-md p-1" v-model="source.day">
        </div>

        <div class="flex flex-col gap-1 grow">
            <label for="month" class="font-semibold">Måned</label>

            <select id="month" class="rounded-md p-1" v-model="source.month">
                <option value="0">-</option>
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
            <label for="year" class="font-semibold">År</label>
            <input id="year" type="number" min="1900" :max="maxYear" class="rounded-md p-1" v-model="source.year">
        </div>
    </div>
</template>


<script lang="ts" setup>

const source = useState<StandardSource>("source");

const maxYear = new Date().getFullYear();

// TODO: Kan kanskje lage en dynamic max day også etter month

</script>
