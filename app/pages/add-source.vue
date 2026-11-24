<template>
    <div class="bg-slate-200 min-h-[100vh] w-full flex flex-col align-items pb-8 pr-2 pl-2">
        <div class="mt-16 gap-4 flex flex-col align-items w-[500px] mr-auto ml-auto">
            <h1 class="font-bold text-2xl text-center">Velg en kilde og begynn oppføring</h1>
            <select class="rounded-md p-1 mt-2 text-xl font-semibold" id="sourcetype" v-model="sourceType">
                <optgroup label="Elektrisk">
                    <option value="electronicSource">Elektronisk kilde</option>
                    <option value="blogArticle">Blogginnlegg</option>
                    <option value="report">Rapport</option>
                    <option value="encyclopedia">Leksikon</option>
                    <option value="scientificArticle">Vitenskapelig artikkel</option>
                </optgroup>

                <optgroup label="Fysisk">
                    <option value="book">Bok</option>
                </optgroup>
            </select>
            <component :is="componentMapping[sourceType]"/>
        </div>
    </div>
</template>


<script lang="ts" setup>
import SourceElectronic from "~/components/Source/SourceElectronic.vue";
import SourceBook from "~/components/Source/SourceBook.vue";
import SourceBlogArticle from "~/components/Source/SourceBlogArticle.vue";
import SourceReport from "~/components/Source/SourceReport.vue";
import SourceEncyclopedia from "~/components/Source/SourceEncyclopedia.vue";
import SourceScientificArticle from "~/components/Source/SourceScientificArticle.vue";

const sourceType = ref<string>("blogArticle");

const componentMapping: { [key: string]: Component } = {
    book: SourceBook,
    electronicSource: SourceElectronic,
    blogArticle: SourceBlogArticle,
    report: SourceReport,
    encyclopedia: SourceEncyclopedia,
    scientificArticle: SourceScientificArticle
}
</script>