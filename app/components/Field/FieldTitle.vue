<template>
    <div class="flex flex-col gap-1">
        <label for="title" class="font-semibold">Tittel</label>
        <input id="title" type="text" required class="rounded-md p-1" v-model.trim="source.title">
    </div>
</template>

<script lang="ts" setup>

const source = useState<StandardSource>("source");

</script>