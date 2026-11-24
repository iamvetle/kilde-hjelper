<template>
    <div class="flex flex-col gap-2">
        <AuthorsFields />

        <TitleField />

        <div class="flex flex-col gap-1">
            <label for="blogTitle" class="font-bold">Bloggens tittel</label>
            <input id="blogTitle" type="text" class="rounded-md p-1 " v-model.trim="source.blogTitle">
        </div>

        <DayMonthYearFields />

        <URLField />

        <RetrievedDayMonthYearFields v-if="!source.year" />

        <PreviewBox sourcetype="blogArticle" v-if="readyToShow" />

        <AddSourceButton v-if="readyToShow" />
    </div>
</template>

<script lang="ts" setup>

const source = useState("source", () => {
    return {
        authors: [{
            firstName: "",
            lastName: ""
        }], 
        organizationAuthor: "",
        title: "",
        blogTitle: "",
        day: null,
        month: null,
        year: null,
        url: "",
        retrievedDay: null,
        retrievedYear: null,
        retrievedMonth: null,
    }
})

const readyToShow = computed(() => {
    if ((source.value.authors.length > 0 || source.value.organizationAuthor.length > 0) &&
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