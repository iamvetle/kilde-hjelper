<template>
    <div class="flex flex-col gap-1">
        <label :for="inputId" class="font-semibold"><slot></slot></label>
        <input :id="inputId" :type="inputType" class="rounded-md p-1 " v-model.trim="model">
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    inputId: string,
    inputType:string;
}>();

const model = defineModel(); 

</script>