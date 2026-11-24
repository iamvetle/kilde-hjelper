<template>
    <div class="flex flex-col gap-2">
        <FieldAuthors />

        <FieldTitle />

        <FieldGeneric
        v-model="source.blogTitle"
        input-id="blogTitle"
        input-type="type"
        >Bloggens tittel</FieldGeneric>
        <FieldDate />

        <FieldURL />

        <FieldRetrievedDate v-if="!source.year" />

        <PreviewBox sourcetype="blogArticle" v-if="readyToShow" />

        <AddSourceButton :isReadyToShow="readyToShow" />
    </div>
</template>

<script lang="ts" setup>

const now = new Date();

const source = useState<BlogArticleSource>("source", () => {
    return {
        authors: [{
            firstName: "",
            lastName: ""
        }], 
        organizationAuthor: "",
        title: "",
        blogTitle: "",
        day: "1",
        month: "1",
        year: "1900",
        url: "",
        retrievedDay: now.getDay().toString(),
        retrievedYear: now.getFullYear().toString(),
        retrievedMonth: now.getMonth().toString(),
    }
})

const readyToShow = computed(() => {
    if (((source.value.authors.length > 0 && source.value.authors[0]?.firstName != "" && source.value.authors[0]?.lastName != "" ) || source.value.organizationAuthor.length > 0) &&
        source.value.title.length > 0 &&
        source.value.url.length > 0 &&
        (source.value.blogTitle.length > 0 || source.value.organizationAuthor.length > 0) &&
        (source.value.year || (source.value.retrievedYear && source.value.retrievedMonth && source.value.retrievedDay))) {
        return true
    } else {
        return false
    }
})
</script>