<template>
    <div class="border border-green-800 rounded-md mt-2">
        <div class="flex align-items items-center pt-8 pb-8 pr-8 pl-8 -indent-10 ml-10">
            <p v-if="inlineReferance">({{ inlineAuthor }}., {{ inlineReferanceYear }})</p>
            <p v-else>{{ author }}. ({{ date }}). {{ source.title }}. <i>{{ blogTitle }}</i>. {{ url }} </p>
        </div>
    </div>
</template>


<script lang="ts" setup>

defineProps<{
    inlineAuthor:string,
    inlineReferanceYear: string,
    inlineReferance: boolean;
    author: string;
    url: string;
    date: string;
}>();

const source = useState<BlogArticleSource>("source")

const blogTitle = computed(() => {

    if (source.value.blogTitle.length > 0) {
        return source.value.blogTitle;
    }

    return source.value.organizationAuthor

})

</script>