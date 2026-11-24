<template>
    <div class="flex flex-col gap-1">
        <label for="url" class="font-bold">URL</label>
        <input id="url" type="text" class="rounded-md p-1" v-model.trim="source.url">
    </div>
</template>

<script lang="ts" setup>

const source = useState("source", () => ({
    url: ""
}))
</script>