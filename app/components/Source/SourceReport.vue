<template>
    <div class="flex flex-col gap-2">
        <FieldAuthors />

        <FieldTitle />

        <FieldGeneric
        v-model.trim="source.reportNameAndNumber"
        input-id="blogTitle"
        input-type="type"
        >Seriekode/Rapportnavn og -nr</FieldGeneric>
        <FieldDate />

        <FieldGeneric
        v-model.trim="source.publisher"
        input-id="blogTitle"
        input-type="type"
        >Utgiver</FieldGeneric>
        <FieldURL />

        <FieldRetrievedDate v-if="!source.year" />

        <PreviewBox sourcetype="reportSource" v-if="readyToShow" />

        <AddSourceButton :isReadyToShow="readyToShow" />
    </div>
</template>

<script lang="ts" setup>

const now = new Date();

const source = useState<ReportSource>("source", () => bigSource)

const readyToShow = computed(() => {
    if (((source.value.authors.length > 0 && source.value.authors[0]?.firstName != "" && source.value.authors[0]?.lastName != "" ) || source.value.organizationAuthor.length > 0) &&
        source.value.title.length > 0 &&
        source.value.url.length > 0 &&
        (source.value.publisher.length > 0 || source.value.organizationAuthor.length > 0) &&
        (source.value.year || (source.value.retrievedYear && source.value.retrievedMonth && source.value.retrievedDay))) {
        return true
    } else {
        return false
    }
})
</script>