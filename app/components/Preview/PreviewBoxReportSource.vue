<template>
    <div class="border border-green-800 rounded-md mt-2">
        <div
            class="flex align-items items-center pt-8 pb-8 pr-8 pl-8 -indent-10 ml-10">
            <p v-if="inlineReferance">({{ inlineAuthor }}., {{ inlineReferanceYear }})</p>
            <p v-else>{{ author }}. ({{ date }}). <i>{{ source.title }}</i>.{{ reportNameAndNumber }}{{ publisher }} {{ url }}</p>
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

const source = useState<ReportSource>("source")

const publisher = computed(() => {
    if (source.value.publisher.length == 0) {
        return ""
    }

    if (source.value.organizationAuthor.length > 0 && source.value.organizationAuthor == source.value.publisher) {
        return ""
    }

    return ` ${source.value.publisher}.`
})

const reportNameAndNumber = computed(() => {
    if (source.value.reportNameAndNumber.length == 0) {
        return ""
    } else {
        return ` ${source.value.reportNameAndNumber}.`
    }
})

</script>