<template>
    <div class="border border-green-800 rounded-md mt-2">
        <div
            class="flex align-items items-center pt-8 pb-8 pr-8 pl-8 -indent-10 ml-10">
            <p v-if="inlineReferance">({{ inlineAuthor }}., {{ inlineReferanceYear }})</p>
            <p v-else>{{ author }}. ({{ date }}). <i>{{ source.title }}</i>.{{ website }} {{ url }} </p>
        </div>
    </div>
</template>

<script lang="ts" setup>

defineProps<{
    inlineAuthor: string,
    inlineReferanceYear: string,
    inlineReferance: boolean;
    author: string;
    url: string;
    date: string;
}>();

const source = useState<ElectronicSource>("source")

const website = computed(() => {
    if (source.value?.website.length == 0) {
        return ""
    }

    if (source.value.website === source.value.organizationAuthor) {
        return ""
    }

    return ` ${source.value.website}.`
})

</script>