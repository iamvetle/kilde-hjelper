<template>
    <div class="flex flex-col gap-1">
        <label for="url" class="font-semibold">URL</label>
        <input id="url" type="url" class="rounded-md p-1" v-model.trim="source.url">
    </div>
</template>

<script lang="ts" setup>

const source = useState<StandardSource>("source");
</script>