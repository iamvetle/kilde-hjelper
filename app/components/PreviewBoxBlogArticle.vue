<template>
    <div class="border flex align-items items-center pt-8 pb-8 pr-8 pl-8 border-green-800 rounded-md mt-2">
        <p>{{ author }}. ({{ date }}). {{ source.title }}. <i>{{ blogTitle }}</i>. {{ url }} </p>
    </div>
</template>


<script lang="ts" setup>

defineProps<{
    author:string;
    url:string;
    date:string;
}>();

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

const blogTitle = computed(() => {

    if (source.value.blogTitle.length > 0) {
        return source.value.blogTitle;
    }

    return source.value.organizationAuthor

})

</script>